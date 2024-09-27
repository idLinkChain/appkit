import { NetworkUtil, SafeLocalStorage, SafeLocalStorageKeys } from '@reown/appkit-common';
import { AccountController, ChainController, CoreHelperUtil } from '@reown/appkit-core';
import { EthersHelpersUtil } from '@reown/appkit-utils/ethers';
import { W3mFrameHelpers, W3mFrameProvider, W3mFrameRpcConstants } from '@reown/appkit-wallet';
import { ConstantsUtil as CoreConstantsUtil } from '@reown/appkit-core';
import { ConstantsUtil as CommonConstantsUtil } from '@reown/appkit-common';
import { ConstantsUtil, HelpersUtil, PresetsUtil } from '@reown/appkit-utils';
import UniversalProvider from '@walletconnect/universal-provider';
import { WcConstantsUtil } from '@reown/appkit';
import { Ethers5Methods } from './utils/Ethers5Methods.js';
import { ethers } from 'ethers5';
import { ProviderUtil } from '@reown/appkit/store';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import { W3mFrameProviderSingleton } from '@reown/appkit/auth-provider';
export class Ethers5Adapter {
    createEthersConfig(options) {
        if (!options.metadata) {
            return undefined;
        }
        let injectedProvider = undefined;
        let coinbaseProvider = undefined;
        function getInjectedProvider() {
            if (injectedProvider) {
                return injectedProvider;
            }
            if (typeof window === 'undefined') {
                return undefined;
            }
            if (!window.ethereum) {
                return undefined;
            }
            injectedProvider = window.ethereum;
            return injectedProvider;
        }
        function getCoinbaseProvider() {
            if (coinbaseProvider) {
                return coinbaseProvider;
            }
            if (typeof window === 'undefined') {
                return undefined;
            }
            const coinbaseWallet = new CoinbaseWalletSDK({
                appName: options?.metadata?.name,
                appLogoUrl: options?.metadata?.icons[0],
                appChainIds: options.networks?.map(caipNetwork => caipNetwork.chainId) || [
                    1, 84532
                ]
            });
            coinbaseProvider = coinbaseWallet.makeWeb3Provider({
                options: options.coinbasePreference ?? 'all'
            });
            return coinbaseProvider;
        }
        const providers = { metadata: options.metadata };
        if (options.enableInjected !== false) {
            providers.injected = getInjectedProvider();
        }
        if (options.enableCoinbase !== false) {
            providers.coinbase = getCoinbaseProvider();
        }
        providers.EIP6963 = options.enableEIP6963 !== false;
        return providers;
    }
    constructor() {
        this.appKit = undefined;
        this.EIP6963Providers = [];
        this.options = undefined;
        this.caipNetworks = [];
        this.chainNamespace = CommonConstantsUtil.CHAIN.EVM;
        this.siweControllerClient = this.options?.siweConfig;
        this.tokens = HelpersUtil.getCaipTokens(this.options?.tokens);
        this.defaultCaipNetwork = undefined;
        this.adapterType = 'ethers';
        this.providerHandlers = null;
        ChainController.subscribeKey('activeCaipNetwork', val => {
            const caipAddress = this.appKit?.getCaipAddress(this.chainNamespace);
            const isEVMAddress = caipAddress?.startsWith('eip155:');
            const isEVMNetwork = val?.chainNamespace === this.chainNamespace;
            if (isEVMAddress && isEVMNetwork && caipAddress) {
                this.syncBalance(CoreHelperUtil.getPlainAddress(caipAddress), val);
                this.syncAccount({
                    address: CoreHelperUtil.getPlainAddress(caipAddress),
                    caipNetwork: val
                });
            }
        });
        ChainController.subscribeKey('activeCaipAddress', val => {
            const isEVMAddress = val?.startsWith('eip155:');
            const caipNetwork = ChainController.state.activeCaipNetwork;
            const isEVMNetwork = caipNetwork?.chainNamespace === this.chainNamespace;
            if (isEVMAddress) {
                if (isEVMNetwork) {
                    this.syncBalance(CoreHelperUtil.getPlainAddress(val), caipNetwork);
                }
                this.syncAccount({ address: CoreHelperUtil.getPlainAddress(val) });
            }
        });
        AccountController.subscribeKey('shouldUpdateToAddress', newAddress => {
            const isEVMAddress = newAddress?.startsWith('0x');
            if (isEVMAddress) {
                this.syncAccount({ address: newAddress });
            }
        }, this.chainNamespace);
    }
    construct(appKit, options) {
        if (!options.projectId) {
            throw new Error('appkit:ethers-client:initialize - projectId is undefined');
        }
        this.appKit = appKit;
        this.options = options;
        this.caipNetworks = options.networks;
        this.defaultCaipNetwork = options.defaultNetwork || options.networks[0];
        this.tokens = HelpersUtil.getCaipTokens(options.tokens);
        this.ethersConfig = this.createEthersConfig(options);
        this.networkControllerClient = {
            switchCaipNetwork: async (caipNetwork) => {
                if (caipNetwork?.chainId) {
                    try {
                        await this.switchNetwork(caipNetwork);
                    }
                    catch (error) {
                        throw new Error('networkControllerClient:switchCaipNetwork - unable to switch chain');
                    }
                }
            },
            getApprovedCaipNetworksData: async () => this.getApprovedCaipNetworksData()
        };
        this.connectionControllerClient = {
            connectWalletConnect: async (onUri) => {
                await this.appKit?.universalAdapter?.connectionControllerClient?.connectWalletConnect?.(onUri);
            },
            connectExternal: async ({ id, info, provider }) => {
                this.appKit?.setClientId(null);
                const connectorConfig = {
                    [ConstantsUtil.INJECTED_CONNECTOR_ID]: {
                        getProvider: () => this.ethersConfig?.injected,
                        providerType: 'injected'
                    },
                    [ConstantsUtil.EIP6963_CONNECTOR_ID]: {
                        getProvider: () => provider,
                        providerType: 'eip6963'
                    },
                    [ConstantsUtil.COINBASE_SDK_CONNECTOR_ID]: {
                        getProvider: () => this.ethersConfig?.coinbase,
                        providerType: 'coinbase'
                    },
                    [ConstantsUtil.AUTH_CONNECTOR_ID]: {
                        getProvider: () => this.authProvider,
                        providerType: 'w3mAuth'
                    }
                };
                const selectedConnector = connectorConfig[id];
                if (!selectedConnector) {
                    throw new Error(`Unsupported connector ID: ${id}`);
                }
                const selectedProvider = selectedConnector.getProvider();
                if (!selectedProvider) {
                    throw new Error(`Provider for connector ${id} is undefined`);
                }
                try {
                    if (selectedProvider && id !== ConstantsUtil.AUTH_CONNECTOR_ID) {
                        await selectedProvider.request({ method: 'eth_requestAccounts' });
                    }
                    await this.setProvider(selectedProvider, selectedConnector.providerType, info?.name);
                }
                catch (error) {
                    if (id === ConstantsUtil.COINBASE_SDK_CONNECTOR_ID) {
                        throw new Error(error.message);
                    }
                }
            },
            checkInstalled: (ids) => {
                if (!ids) {
                    return Boolean(window.ethereum);
                }
                if (this.ethersConfig?.injected) {
                    if (!window?.ethereum) {
                        return false;
                    }
                }
                return ids.some(id => Boolean(window.ethereum?.[String(id)]));
            },
            disconnect: async () => {
                const provider = ProviderUtil.getProvider('eip155');
                const providerId = ProviderUtil.state.providerIds['eip155'];
                this.appKit?.setClientId(null);
                if (this.options?.siweConfig?.options?.signOutOnDisconnect) {
                    const { SIWEController } = await import('@reown/appkit-siwe');
                    await SIWEController.signOut();
                }
                const disconnectConfig = {
                    [ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID]: async () => await this.appKit?.universalAdapter?.connectionControllerClient?.disconnect(),
                    coinbaseWalletSDK: async () => await this.appKit?.universalAdapter?.connectionControllerClient?.disconnect(),
                    [ConstantsUtil.AUTH_CONNECTOR_ID]: async () => {
                        await this.authProvider?.disconnect();
                    },
                    [ConstantsUtil.EIP6963_CONNECTOR_ID]: async () => {
                        if (provider) {
                            await this.revokeProviderPermissions(provider);
                        }
                    },
                    [ConstantsUtil.INJECTED_CONNECTOR_ID]: async () => {
                        if (provider) {
                            ;
                            provider.emit('disconnect');
                            await this.revokeProviderPermissions(provider);
                        }
                    }
                };
                const disconnectFunction = disconnectConfig[providerId];
                if (disconnectFunction) {
                    await disconnectFunction();
                }
                else {
                    console.warn(`No disconnect function found for provider type: ${providerId}`);
                }
                SafeLocalStorage.removeItem(SafeLocalStorageKeys.WALLET_ID);
                this.appKit?.resetAccount(this.chainNamespace);
            },
            signMessage: async (message) => {
                const provider = ProviderUtil.getProvider(this.chainNamespace);
                const caipAddress = ChainController.state.activeCaipAddress;
                const address = CoreHelperUtil.getPlainAddress(caipAddress);
                if (!address) {
                    throw new Error('Address is undefined');
                }
                if (!provider) {
                    throw new Error('Provider is undefined');
                }
                return await Ethers5Methods.signMessage(message, provider, address);
            },
            parseUnits: Ethers5Methods.parseUnits,
            formatUnits: Ethers5Methods.formatUnits,
            estimateGas: async (data) => {
                if (data.chainNamespace && data.chainNamespace !== 'eip155') {
                    throw new Error(`Invalid chain namespace - Expected eip155, got ${data.chainNamespace}`);
                }
                const provider = ProviderUtil.getProvider('eip155');
                const caipAddress = ChainController.state.activeCaipAddress;
                const address = CoreHelperUtil.getPlainAddress(caipAddress);
                const caipNetwork = this.appKit?.getCaipNetwork();
                if (!address) {
                    throw new Error('Address is undefined');
                }
                if (!provider) {
                    throw new Error('Provider is undefined');
                }
                return await Ethers5Methods.estimateGas(data, provider, address, Number(caipNetwork?.chainId));
            },
            sendTransaction: async (data) => {
                if (data.chainNamespace && data.chainNamespace !== 'eip155') {
                    throw new Error(`Invalid chain namespace - Expected eip155, got ${data.chainNamespace}`);
                }
                const provider = ProviderUtil.getProvider('eip155');
                const caipAddress = ChainController.state.activeCaipAddress;
                const address = CoreHelperUtil.getPlainAddress(caipAddress);
                const caipNetwork = this.appKit?.getCaipNetwork();
                if (!address) {
                    throw new Error('Address is undefined');
                }
                if (!provider) {
                    throw new Error('Provider is undefined');
                }
                return await Ethers5Methods.sendTransaction(data, provider, address, Number(caipNetwork?.chainId));
            },
            writeContract: async (data) => {
                const provider = ProviderUtil.getProvider('eip155');
                const caipAddress = ChainController.state.activeCaipAddress;
                const address = CoreHelperUtil.getPlainAddress(caipAddress);
                const caipNetwork = this.appKit?.getCaipNetwork();
                if (!address) {
                    throw new Error('Address is undefined');
                }
                if (!provider) {
                    throw new Error('Provider is undefined');
                }
                return await Ethers5Methods.writeContract(data, provider, address, Number(caipNetwork?.chainId));
            },
            getEnsAddress: async (value) => {
                if (this.appKit) {
                    return await Ethers5Methods.getEnsAddress(value, this.appKit);
                }
                return false;
            },
            getEnsAvatar: async (value) => {
                const caipNetwork = this.appKit?.getCaipNetwork();
                return await Ethers5Methods.getEnsAvatar(value, Number(caipNetwork?.chainId));
            }
        };
        ChainController.state.chains.set(this.chainNamespace, {
            chainNamespace: this.chainNamespace,
            connectionControllerClient: this.connectionControllerClient,
            networkControllerClient: this.networkControllerClient,
            adapterType: this.adapterType,
            caipNetworks: this.caipNetworks
        });
        if (this.ethersConfig) {
            this.syncConnectors(this.ethersConfig);
        }
        if (typeof window !== 'undefined') {
            this.listenConnectors(true);
        }
        this.appKit?.setEIP6963Enabled(this.ethersConfig?.EIP6963);
        const emailEnabled = options.features?.email === undefined
            ? CoreConstantsUtil.DEFAULT_FEATURES.email
            : options.features?.email;
        const socialsEnabled = options.features?.socials
            ? options.features?.socials?.length > 0
            : CoreConstantsUtil.DEFAULT_FEATURES.socials;
        if (emailEnabled || socialsEnabled) {
            this.syncAuthConnector(this.options.projectId);
        }
        if (this.ethersConfig) {
            this.checkActiveProviders(this.ethersConfig);
        }
        this.syncRequestedNetworks(this.caipNetworks);
    }
    subscribeState(callback) {
        return this.appKit?.subscribeState(state => callback(state));
    }
    async disconnect() {
        await this.connectionControllerClient?.disconnect();
    }
    async revokeProviderPermissions(provider) {
        try {
            const permissions = await provider.request({
                method: 'wallet_getPermissions'
            });
            const ethAccountsPermission = permissions.find(permission => permission.parentCapability === 'eth_accounts');
            if (ethAccountsPermission) {
                await provider.request({
                    method: 'wallet_revokePermissions',
                    params: [{ eth_accounts: {} }]
                });
            }
        }
        catch (error) {
            console.info('Could not revoke permissions from wallet. Disconnecting...', error);
        }
    }
    getApprovedCaipNetworksData() {
        return new Promise(resolve => {
            const walletId = SafeLocalStorage.getItem(SafeLocalStorageKeys.WALLET_ID);
            if (!walletId) {
                throw new Error('No wallet id found to get approved networks data');
            }
            const providerConfigs = {
                [ConstantsUtil.AUTH_CONNECTOR_ID]: {
                    supportsAllNetworks: true,
                    approvedCaipNetworkIds: PresetsUtil.WalletConnectRpcChainIds.map(id => `${ConstantsUtil.EIP155}:${id}`)
                }
            };
            const networkData = providerConfigs[walletId];
            if (networkData) {
                resolve(networkData);
            }
            else {
                resolve({
                    supportsAllNetworks: true,
                    approvedCaipNetworkIds: []
                });
            }
        });
    }
    checkActiveProviders(config) {
        const walletId = SafeLocalStorage.getItem(SafeLocalStorageKeys.WALLET_ID);
        const walletName = SafeLocalStorage.getItem(SafeLocalStorageKeys.WALLET_NAME);
        if (!walletId) {
            return;
        }
        const providerConfigs = {
            [ConstantsUtil.INJECTED_CONNECTOR_ID]: {
                provider: config.injected
            },
            [ConstantsUtil.COINBASE_SDK_CONNECTOR_ID]: {
                provider: config.coinbase
            },
            [ConstantsUtil.EIP6963_CONNECTOR_ID]: {
                provider: this.EIP6963Providers.find(p => p.info.name === walletName)?.provider
            }
        };
        const activeConfig = providerConfigs[walletId];
        if (activeConfig?.provider) {
            this.setProvider(activeConfig.provider, walletId);
            this.setupProviderListeners(activeConfig.provider, walletId);
        }
    }
    async setProvider(provider, providerId, name) {
        if (providerId === 'w3mAuth') {
            this.setAuthProvider();
        }
        else {
            const walletId = providerId;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.WALLET_ID, walletId);
            if (name) {
                SafeLocalStorage.setItem(SafeLocalStorageKeys.WALLET_NAME, name);
            }
            if (provider) {
                const { addresses, chainId } = await EthersHelpersUtil.getUserInfo(provider);
                const firstAddress = addresses?.[0];
                const caipAddress = `${this.chainNamespace}:${chainId}:${firstAddress}`;
                if (firstAddress && chainId) {
                    this.appKit?.setCaipAddress(caipAddress, this.chainNamespace);
                    ProviderUtil.setProviderId('eip155', providerId);
                    ProviderUtil.setProvider('eip155', provider);
                    this.appKit?.setStatus('connected', this.chainNamespace);
                    this.appKit?.setAllAccounts(addresses.map(address => ({ address, type: 'eoa' })), this.chainNamespace);
                }
            }
        }
    }
    async setAuthProvider() {
        SafeLocalStorage.setItem(SafeLocalStorageKeys.WALLET_ID, ConstantsUtil.AUTH_CONNECTOR_ID);
        if (this.authProvider) {
            this.appKit?.setLoading(true);
            const { address, chainId, smartAccountDeployed, preferredAccountType, accounts = [] } = await this.authProvider.connect({
                chainId: Number(NetworkUtil.caipNetworkIdToNumber(this.appKit?.getCaipNetwork()?.id) ??
                    this.caipNetworks[0]?.chainId)
            });
            const { smartAccountEnabledNetworks } = await this.authProvider.getSmartAccountEnabledNetworks();
            this.appKit?.setSmartAccountEnabledNetworks(smartAccountEnabledNetworks, this.chainNamespace);
            if (address && chainId) {
                this.appKit?.setAllAccounts(accounts.length > 0
                    ? accounts
                    : [{ address, type: preferredAccountType }], this.chainNamespace);
                this.appKit?.setStatus('connected', this.chainNamespace);
                this.appKit?.setCaipAddress(`${this.chainNamespace}:${chainId}:${address}`, this.chainNamespace);
                this.appKit?.setPreferredAccountType(preferredAccountType, this.chainNamespace);
                this.appKit?.setSmartAccountDeployed(Boolean(smartAccountDeployed), this.chainNamespace);
                ProviderUtil.setProvider('eip155', this.authProvider);
                ProviderUtil.setProviderId('eip155', ConstantsUtil.AUTH_CONNECTOR_ID);
                this.setupProviderListeners(this.authProvider, 'w3mAuth');
                this.watchModal();
            }
            this.appKit?.setLoading(false);
        }
    }
    watchModal() {
        if (this.authProvider) {
            this.subscribeState(val => {
                if (!val.open) {
                    this.authProvider?.rejectRpcRequests();
                }
            });
        }
    }
    setupProviderListeners(provider, providerId) {
        const disconnectHandler = () => {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.WALLET_ID);
            this.removeListeners(provider);
        };
        const accountsChangedHandler = (accounts) => {
            const currentAccount = accounts?.[0];
            if (currentAccount) {
                this.appKit?.setCaipAddress(currentAccount, this.chainNamespace);
                if (providerId === ConstantsUtil.EIP6963_CONNECTOR_ID) {
                    this.appKit?.setAllAccounts(accounts.map(address => ({ address, type: 'eoa' })), this.chainNamespace);
                }
            }
            else {
                if (providerId === ConstantsUtil.EIP6963_CONNECTOR_ID) {
                    this.appKit?.setAllAccounts([], this.chainNamespace);
                }
                SafeLocalStorage.removeItem(SafeLocalStorageKeys.WALLET_ID);
                this.appKit?.resetAccount(this.chainNamespace);
            }
        };
        const chainChangedHandler = (chainId) => {
            const chainIdNumber = typeof chainId === 'string' ? EthersHelpersUtil.hexStringToNumber(chainId) : Number(chainId);
            const caipNetwork = this.caipNetworks.find(c => c.chainId === chainIdNumber);
            const currentCaipNetwork = this.appKit?.getCaipNetwork();
            if (!currentCaipNetwork || currentCaipNetwork?.id !== caipNetwork?.id) {
                this.appKit?.setCaipNetwork(caipNetwork);
            }
        };
        if (providerId === ConstantsUtil.AUTH_CONNECTOR_ID) {
            this.setupAuthListeners(provider);
        }
        else {
            provider.on('disconnect', disconnectHandler);
            provider.on('accountsChanged', accountsChangedHandler);
            provider.on('chainChanged', chainChangedHandler);
        }
        this.providerHandlers = {
            disconnect: disconnectHandler,
            accountsChanged: accountsChangedHandler,
            chainChanged: chainChangedHandler
        };
    }
    removeListeners(provider) {
        if (this.providerHandlers) {
            provider.removeListener('disconnect', this.providerHandlers.disconnect);
            provider.removeListener('accountsChanged', this.providerHandlers.accountsChanged);
            provider.removeListener('chainChanged', this.providerHandlers.chainChanged);
            this.providerHandlers = null;
        }
    }
    setupAuthListeners(authProvider) {
        authProvider.onRpcRequest(request => {
            if (W3mFrameHelpers.checkIfRequestExists(request)) {
                if (!W3mFrameHelpers.checkIfRequestIsSafe(request)) {
                    this.appKit?.handleUnsafeRPCRequest();
                }
            }
            else {
                this.handleInvalidAuthRequest();
            }
        });
        authProvider.onRpcError(() => this.handleAuthRpcError());
        authProvider.onRpcSuccess((_, request) => this.handleAuthRpcSuccess(_, request));
        authProvider.onNotConnected(() => this.handleAuthNotConnected());
        authProvider.onConnect(({ preferredAccountType }) => this.handleAuthIsConnected(preferredAccountType));
        authProvider.onSetPreferredAccount(({ address, type }) => {
            if (address) {
                this.handleAuthSetPreferredAccount(address, type);
            }
        });
    }
    handleInvalidAuthRequest() {
        this.appKit?.open();
        setTimeout(() => {
            this.appKit?.showErrorMessage(W3mFrameRpcConstants.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE);
        }, 300);
    }
    handleAuthRpcError() {
        if (this.appKit?.isOpen()) {
            if (this.appKit?.isTransactionStackEmpty()) {
                this.appKit?.close();
            }
            else {
                this.appKit?.popTransactionStack(true);
            }
        }
    }
    handleAuthRpcSuccess(_, request) {
        const isSafeRequest = W3mFrameHelpers.checkIfRequestIsSafe(request);
        if (isSafeRequest) {
            return;
        }
        if (this.appKit?.isTransactionStackEmpty()) {
            this.appKit?.close();
        }
        else {
            this.appKit?.popTransactionStack();
        }
    }
    handleAuthNotConnected() {
        this.appKit?.setCaipAddress(undefined, this.chainNamespace);
    }
    handleAuthIsConnected(preferredAccountType) {
        const activeNamespace = this.appKit?.getActiveChainNamespace();
        if (activeNamespace !== this.chainNamespace) {
            return;
        }
        this.appKit?.setPreferredAccountType(preferredAccountType, this.chainNamespace);
    }
    handleAuthSetPreferredAccount(address, type) {
        if (!address) {
            return;
        }
        this.appKit?.setLoading(true);
        const chainId = NetworkUtil.caipNetworkIdToNumber(this.appKit?.getCaipNetwork()?.id);
        this.appKit?.setCaipAddress(`eip155:${chainId}:${address}`, this.chainNamespace);
        this.appKit?.setStatus('connected', this.chainNamespace);
        this.appKit?.setPreferredAccountType(type, this.chainNamespace);
        this.syncAccount({
            address: address
        }).then(() => this.appKit?.setLoading(false));
        this.appKit?.setLoading(false);
    }
    async syncReownName(address) {
        try {
            const registeredWcNames = await this.appKit?.getReownName(address);
            if (registeredWcNames?.[0]) {
                const wcName = registeredWcNames[0];
                this.appKit?.setProfileName(wcName.name, this.chainNamespace);
            }
            else {
                this.appKit?.setProfileName(null, this.chainNamespace);
            }
        }
        catch {
            this.appKit?.setProfileName(null, this.chainNamespace);
        }
    }
    async syncAccount({ address, caipNetwork }) {
        const currentCaipNetwork = caipNetwork || this.appKit?.getCaipNetwork();
        const preferredAccountType = this.appKit?.getPreferredAccountType();
        const isEipNetwork = currentCaipNetwork?.chainNamespace === CommonConstantsUtil.CHAIN.EVM;
        const caipNetworkId = currentCaipNetwork?.id;
        if (address) {
            if (isEipNetwork) {
                this.appKit?.setPreferredAccountType(preferredAccountType, this.chainNamespace);
                this.appKit?.setCaipAddress(`${caipNetworkId}:${address}`, this.chainNamespace);
                this.syncConnectedWalletInfo();
                if (this.ethersConfig) {
                    this.checkActiveProviders(this.ethersConfig);
                }
                if (currentCaipNetwork?.explorerUrl) {
                    this.appKit?.setAddressExplorerUrl(`${currentCaipNetwork.explorerUrl}/address/${address}`, this.chainNamespace);
                }
                await Promise.all([
                    this.syncProfile(address),
                    this.appKit?.setApprovedCaipNetworksData(this.chainNamespace)
                ]);
            }
        }
        else {
            this.appKit?.resetWcConnection();
            this.appKit?.resetNetwork();
            this.appKit?.setAllAccounts([], this.chainNamespace);
        }
    }
    async syncProfile(address) {
        const caipNetwork = this.appKit?.getCaipNetwork();
        try {
            const identity = await this.appKit?.fetchIdentity({
                address
            });
            const name = identity?.name;
            const avatar = identity?.avatar;
            this.appKit?.setProfileName(name, this.chainNamespace);
            this.appKit?.setProfileImage(avatar, this.chainNamespace);
            if (!name) {
                await this.syncReownName(address);
            }
        }
        catch {
            if (caipNetwork?.chainId === 1) {
                const ensProvider = new ethers.providers.InfuraProvider('mainnet');
                const name = await ensProvider.lookupAddress(address);
                const avatar = await ensProvider.getAvatar(address);
                if (name) {
                    this.appKit?.setProfileName(name, this.chainNamespace);
                }
                else {
                    await this.syncReownName(address);
                }
                if (avatar) {
                    this.appKit?.setProfileImage(avatar, this.chainNamespace);
                }
            }
            else {
                await this.syncReownName(address);
                this.appKit?.setProfileImage(null, this.chainNamespace);
            }
        }
    }
    async syncBalance(address, caipNetwork) {
        const isExistingNetwork = this.appKit
            ?.getCaipNetworks()
            .find(network => network.id === caipNetwork.id);
        const isEVMNetwork = caipNetwork.chainNamespace === CommonConstantsUtil.CHAIN.EVM;
        if (caipNetwork && isExistingNetwork && isEVMNetwork) {
            const jsonRpcProvider = new ethers.providers.JsonRpcProvider(caipNetwork.rpcUrl, {
                chainId: caipNetwork.chainId,
                name: caipNetwork.name
            });
            if (jsonRpcProvider) {
                const balance = await jsonRpcProvider.getBalance(address);
                const formattedBalance = ethers.utils.formatEther(balance);
                this.appKit?.setBalance(formattedBalance, caipNetwork.currency, this.chainNamespace);
            }
        }
    }
    syncConnectedWalletInfo() {
        const currentActiveWallet = SafeLocalStorage.getItem(SafeLocalStorageKeys.WALLET_ID);
        const providerType = ProviderUtil.state.providerIds['eip155'];
        if (providerType === ConstantsUtil.EIP6963_CONNECTOR_ID) {
            if (currentActiveWallet) {
                const currentProvider = this.EIP6963Providers.find(provider => provider.info.name === currentActiveWallet);
                if (currentProvider) {
                    this.appKit?.setConnectedWalletInfo({ ...currentProvider.info }, this.chainNamespace);
                }
            }
        }
        else if (providerType === ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID) {
            const provider = ProviderUtil.getProvider('eip155');
            if (provider?.session) {
                this.appKit?.setConnectedWalletInfo({
                    ...provider.session.peer.metadata,
                    name: provider.session.peer.metadata.name,
                    icon: provider.session.peer.metadata.icons?.[0]
                }, this.chainNamespace);
            }
        }
        else if (providerType === ConstantsUtil.COINBASE_SDK_CONNECTOR_ID) {
            const connector = this.appKit
                ?.getConnectors()
                .find(c => c.id === ConstantsUtil.COINBASE_SDK_CONNECTOR_ID);
            this.appKit?.setConnectedWalletInfo({ name: 'Coinbase Wallet', icon: this.appKit?.getConnectorImage(connector) }, this.chainNamespace);
        }
        else if (currentActiveWallet) {
            this.appKit?.setConnectedWalletInfo({ name: currentActiveWallet }, this.chainNamespace);
        }
    }
    syncRequestedNetworks(caipNetworks) {
        const uniqueChainNamespaces = [
            ...new Set(caipNetworks.map(caipNetwork => caipNetwork.chainNamespace))
        ];
        uniqueChainNamespaces.forEach(chainNamespace => {
            this.appKit?.setRequestedCaipNetworks(caipNetworks.filter(caipNetwork => caipNetwork.chainNamespace === chainNamespace), chainNamespace);
        });
    }
    async switchNetwork(caipNetwork) {
        async function requestSwitchNetwork(provider) {
            try {
                await provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: EthersHelpersUtil.numberToHexString(caipNetwork.chainId) }]
                });
            }
            catch (switchError) {
                if (switchError.code === WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID ||
                    switchError.code === WcConstantsUtil.ERROR_CODE_DEFAULT ||
                    switchError?.data?.originalError?.code ===
                        WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) {
                    await EthersHelpersUtil.addEthereumChain(provider, caipNetwork);
                }
                else {
                    throw new Error('Chain is not supported');
                }
            }
        }
        const provider = ProviderUtil.getProvider('eip155');
        const providerType = ProviderUtil.state.providerIds['eip155'];
        if (provider) {
            switch (providerType) {
                case ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID:
                    this.appKit?.universalAdapter?.networkControllerClient.switchCaipNetwork(caipNetwork);
                    break;
                case ConstantsUtil.INJECTED_CONNECTOR_ID:
                case ConstantsUtil.EIP6963_CONNECTOR_ID:
                case ConstantsUtil.COINBASE_SDK_CONNECTOR_ID:
                    if (provider) {
                        await requestSwitchNetwork(provider);
                    }
                    break;
                case ConstantsUtil.AUTH_CONNECTOR_ID:
                    if (this.authProvider) {
                        try {
                            this.appKit?.setLoading(true);
                            const { chainId } = await this.authProvider.switchNetwork(caipNetwork.chainId);
                            const { address, preferredAccountType } = await this.authProvider.connect({
                                chainId: caipNetwork.chainId
                            });
                            const caipAddress = `${this.chainNamespace}:${chainId}:${address}`;
                            this.appKit?.setCaipNetwork(caipNetwork);
                            this.appKit?.setCaipAddress(caipAddress, this.chainNamespace);
                            this.appKit?.setPreferredAccountType(preferredAccountType, this.chainNamespace);
                            await this.syncAccount({ address: address });
                            this.appKit?.setLoading(false);
                        }
                        catch {
                            throw new Error('Switching chain failed');
                        }
                        finally {
                            this.appKit?.setLoading(false);
                        }
                    }
                    break;
                default:
                    throw new Error('Unsupported provider type');
            }
        }
    }
    syncConnectors(config) {
        const w3mConnectors = [];
        if (config.injected) {
            const injectedConnectorType = PresetsUtil.ConnectorTypesMap[ConstantsUtil.INJECTED_CONNECTOR_ID];
            if (injectedConnectorType) {
                w3mConnectors.push({
                    id: ConstantsUtil.INJECTED_CONNECTOR_ID,
                    explorerId: PresetsUtil.ConnectorExplorerIds[ConstantsUtil.INJECTED_CONNECTOR_ID],
                    imageId: PresetsUtil.ConnectorImageIds[ConstantsUtil.INJECTED_CONNECTOR_ID],
                    imageUrl: this.options?.connectorImages?.[ConstantsUtil.INJECTED_CONNECTOR_ID],
                    name: PresetsUtil.ConnectorNamesMap[ConstantsUtil.INJECTED_CONNECTOR_ID],
                    type: injectedConnectorType,
                    chain: this.chainNamespace
                });
            }
        }
        if (config.coinbase) {
            w3mConnectors.push({
                id: ConstantsUtil.COINBASE_SDK_CONNECTOR_ID,
                explorerId: PresetsUtil.ConnectorExplorerIds[ConstantsUtil.COINBASE_SDK_CONNECTOR_ID],
                imageId: PresetsUtil.ConnectorImageIds[ConstantsUtil.COINBASE_SDK_CONNECTOR_ID],
                imageUrl: this.options?.connectorImages?.[ConstantsUtil.COINBASE_SDK_CONNECTOR_ID],
                name: PresetsUtil.ConnectorNamesMap[ConstantsUtil.COINBASE_SDK_CONNECTOR_ID],
                type: 'EXTERNAL',
                chain: this.chainNamespace
            });
        }
        this.appKit?.setConnectors(w3mConnectors);
    }
    async syncAuthConnector(projectId, bypassWindowCheck = false) {
        if (bypassWindowCheck || typeof window !== 'undefined') {
            this.authProvider = W3mFrameProviderSingleton.getInstance(projectId);
            this.appKit?.addConnector({
                id: ConstantsUtil.AUTH_CONNECTOR_ID,
                type: 'AUTH',
                name: 'Auth',
                provider: this.authProvider,
                chain: this.chainNamespace
            });
            this.appKit?.setLoading(true);
            const isLoginEmailUsed = this.authProvider.getLoginEmailUsed();
            this.appKit?.setLoading(isLoginEmailUsed);
            const { isConnected } = await this.authProvider.isConnected();
            if (isConnected) {
                await this.setAuthProvider();
            }
            else {
                this.appKit?.setLoading(false);
            }
        }
    }
    eip6963EventHandler(event) {
        if (event.detail) {
            const { info, provider } = event.detail;
            const connectors = this.appKit?.getConnectors();
            const existingConnector = connectors?.find(c => c.name === info.name);
            const coinbaseConnector = connectors?.find(c => c.id === ConstantsUtil.COINBASE_SDK_CONNECTOR_ID);
            const isCoinbaseDuplicated = coinbaseConnector &&
                event.detail.info.rdns ===
                    ConstantsUtil.CONNECTOR_RDNS_MAP[ConstantsUtil.COINBASE_SDK_CONNECTOR_ID];
            if (!existingConnector && !isCoinbaseDuplicated) {
                const type = PresetsUtil.ConnectorTypesMap[ConstantsUtil.EIP6963_CONNECTOR_ID];
                if (type) {
                    this.appKit?.addConnector({
                        id: ConstantsUtil.EIP6963_CONNECTOR_ID,
                        type,
                        imageUrl: info.icon ?? this.options?.connectorImages?.[ConstantsUtil.EIP6963_CONNECTOR_ID],
                        name: info.name,
                        provider,
                        info,
                        chain: this.chainNamespace
                    });
                    const eip6963ProviderObj = {
                        provider,
                        info
                    };
                    this.EIP6963Providers.push(eip6963ProviderObj);
                }
            }
        }
    }
    listenConnectors(enableEIP6963) {
        if (typeof window !== 'undefined' && enableEIP6963) {
            const handler = this.eip6963EventHandler.bind(this);
            window.addEventListener(ConstantsUtil.EIP6963_ANNOUNCE_EVENT, handler);
            window.dispatchEvent(new Event(ConstantsUtil.EIP6963_REQUEST_EVENT));
        }
    }
}
//# sourceMappingURL=client.js.map