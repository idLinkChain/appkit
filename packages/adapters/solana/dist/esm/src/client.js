import { Connection } from '@solana/web3.js';
import { AccountController, ApiController, ChainController, CoreHelperUtil, EventsController } from '@web3inno/appkit-core';
import { ConstantsUtil as CommonConstantsUtil, SafeLocalStorage, SafeLocalStorageKeys } from '@web3inno/appkit-common';
import { SolConstantsUtil, SolHelpersUtil } from '@web3inno/appkit-utils/solana';
import { SolStoreUtil } from './utils/SolanaStoreUtil.js';
import { PublicKey } from '@solana/web3.js';
import UniversalProvider, {} from '@walletconnect/universal-provider';
import { watchStandard } from './utils/watchStandard.js';
import { WalletConnectProvider } from './providers/WalletConnectProvider.js';
import { AuthProvider } from './providers/AuthProvider.js';
import { W3mFrameHelpers, W3mFrameProvider, W3mFrameRpcConstants } from '@web3inno/appkit-wallet';
import { ConstantsUtil as CoreConstantsUtil } from '@web3inno/appkit-core';
import { withSolanaNamespace } from './utils/withSolanaNamespace.js';
import { ProviderUtil } from '@web3inno/appkit/store';
import { W3mFrameProviderSingleton } from '@web3inno/appkit/auth-provider';
import { ConstantsUtil } from '@web3inno/appkit-utils';
import { createSendTransaction } from './utils/createSendTransaction.js';
import { CoinbaseWalletProvider } from './providers/CoinbaseWalletProvider.js';
export class SolanaAdapter {
    constructor(options) {
        this.appKit = undefined;
        this.options = undefined;
        this.caipNetworks = [];
        this.chainNamespace = CommonConstantsUtil.CHAIN.SOLANA;
        this.availableProviders = [];
        this.defaultCaipNetwork = undefined;
        this.adapterType = 'solana';
        const { wallets, connectionSettings = 'confirmed' } = options;
        this.wallets = wallets;
        this.connectionSettings = connectionSettings;
        ChainController.subscribeKey('activeCaipNetwork', caipNetwork => {
            const caipAddress = this.appKit?.getCaipAddress(this.chainNamespace);
            const isSolanaAddress = caipAddress?.startsWith('solana:');
            const isSolanaNetwork = caipNetwork?.chainNamespace === this.chainNamespace;
            if (caipAddress && isSolanaAddress && isSolanaNetwork) {
                this.syncAccount({
                    address: CoreHelperUtil.getPlainAddress(caipAddress),
                    caipNetwork
                });
            }
        });
        AccountController.subscribeKey('caipAddress', caipAddress => {
            const isSolanaAddress = caipAddress?.startsWith('solana:');
            const caipNetwork = ChainController.state.activeCaipNetwork;
            const isSolanaNetwork = caipNetwork?.chainNamespace === this.chainNamespace;
            if (caipAddress && isSolanaAddress && isSolanaNetwork) {
                this.syncAccount({
                    address: CoreHelperUtil.getPlainAddress(caipAddress),
                    caipNetwork
                });
            }
        }, this.chainNamespace);
    }
    construct(appKit, options) {
        const { projectId } = options;
        if (!options) {
            throw new Error('Solana:construct - options is undefined');
        }
        this.appKit = appKit;
        this.options = options;
        this.caipNetworks = options.networks;
        this.defaultCaipNetwork = SolHelpersUtil.getChainFromCaip(options.networks, SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID));
        if (!projectId) {
            throw new Error('Solana:construct - projectId is undefined');
        }
        this.networkControllerClient = {
            switchCaipNetwork: async (caipNetwork) => {
                if (caipNetwork) {
                    try {
                        await this.switchNetwork(caipNetwork);
                    }
                    catch (error) {
                        console.warn('Error switching network', error);
                    }
                }
            },
            getApprovedCaipNetworksData: async () => {
                if (this.provider) {
                    return Promise.resolve({
                        supportsAllNetworks: false,
                        approvedCaipNetworkIds: this.provider.chains.map(chain => chain.id)
                    });
                }
                return Promise.resolve({
                    supportsAllNetworks: false,
                    approvedCaipNetworkIds: []
                });
            }
        };
        this.connectionControllerClient = {
            connectExternal: async ({ id }) => {
                const externalProvider = this.availableProviders.find(provider => provider.name.toLocaleLowerCase() === id.toLocaleLowerCase());
                const isAuthProvider = id.toLocaleLowerCase() === ConstantsUtil.AUTH_CONNECTOR_ID.toLocaleLowerCase();
                if (!externalProvider) {
                    throw Error('connectionControllerClient:connectExternal - adapter was undefined');
                }
                const chainNamespace = this.appKit?.getActiveChainNamespace();
                if (chainNamespace === this.chainNamespace || !isAuthProvider) {
                    this.setProvider(externalProvider);
                }
            },
            disconnect: async () => {
                await ProviderUtil.getProvider('solana')?.disconnect();
                this.appKit?.resetAccount(this.chainNamespace);
            },
            signMessage: async (message) => {
                const provider = ProviderUtil.state.providers['solana'];
                if (!provider) {
                    throw new Error('connectionControllerClient:signMessage - provider is undefined');
                }
                const signature = await provider.signMessage(new TextEncoder().encode(message));
                return new TextDecoder().decode(signature);
            },
            estimateGas: async (params) => {
                if (params.chainNamespace !== 'solana') {
                    throw new Error('Chain namespace is not supported');
                }
                const connection = SolStoreUtil.state.connection;
                if (!connection || !this.provider) {
                    throw new Error('Connection is not set');
                }
                const transaction = await createSendTransaction({
                    provider: this.provider,
                    connection,
                    to: '11111111111111111111111111111111',
                    value: 1
                });
                const fee = await transaction.getEstimatedFee(connection);
                return BigInt(fee || 0);
            },
            getEnsAvatar: async (value) => await Promise.resolve(value),
            getEnsAddress: async (value) => await Promise.resolve(value),
            writeContract: async () => await Promise.resolve('0x'),
            sendTransaction: async (params) => {
                if (params.chainNamespace !== 'solana') {
                    throw new Error('Chain namespace is not supported');
                }
                const connection = SolStoreUtil.state.connection;
                const address = this.appKit?.getAddress(this.chainNamespace);
                if (!connection || !address || !this.provider) {
                    throw new Error('Connection is not set');
                }
                const transaction = await createSendTransaction({
                    provider: this.provider,
                    connection,
                    to: params.to,
                    value: params.value
                });
                const result = await this.provider.sendTransaction(transaction, connection);
                await new Promise(resolve => {
                    const interval = setInterval(async () => {
                        const status = await connection.getSignatureStatus(result);
                        if (status?.value) {
                            clearInterval(interval);
                            resolve();
                        }
                    }, 1000);
                });
                await this.syncBalance(address);
                return result;
            },
            parseUnits: () => BigInt(0),
            formatUnits: () => ''
        };
        ChainController.state.chains.set(this.chainNamespace, {
            chainNamespace: this.chainNamespace,
            connectionControllerClient: this.connectionControllerClient,
            networkControllerClient: this.networkControllerClient,
            adapterType: this.adapterType,
            caipNetworks: this.caipNetworks
        });
        ProviderUtil.subscribeProviders(providers => {
            if (providers['solana'] && providers['solana'] instanceof UniversalProvider) {
                const walletConnectProvider = this.getSolanaWalletConnectProvider(providers['solana']);
                ProviderUtil.setProvider(this.chainNamespace, walletConnectProvider);
            }
        });
        this.syncRequestedNetworks(this.caipNetworks);
        this.initializeProviders({
            relayUrl: 'wss://relay.walletconnect.com',
            metadata: options.metadata,
            projectId: options.projectId
        });
        this.syncRequestedNetworks(this.caipNetworks);
        ChainController.subscribeKey('activeCaipNetwork', (newCaipNetwork) => {
            const newChain = this.caipNetworks.find(_chain => _chain.chainId === newCaipNetwork?.id.split(':')[1]);
            if (!newChain) {
                return;
            }
            if (ChainController.state.activeCaipNetwork && this.appKit?.getIsConnectedState()) {
                ApiController.reFetchWallets();
            }
        });
        EventsController.subscribe(state => {
            if (state.data.event === 'SELECT_WALLET') {
                const isMobile = CoreHelperUtil.isMobile();
                const isClient = CoreHelperUtil.isClient();
                if (isMobile && isClient) {
                    if (state.data.properties?.name === 'Phantom' && !('phantom' in window)) {
                        const href = window.location.href;
                        const protocol = href.startsWith('https') ? 'https' : 'http';
                        const host = href.split('/')[2];
                        const ref = `${protocol}://${host}`;
                        window.location.href = `https://phantom.app/ul/browse/${href}?ref=${ref}`;
                    }
                    if (state.data.properties?.name === 'Coinbase Wallet' && !('coinbaseSolana' in window)) {
                        const href = window.location.href;
                        window.location.href = `https://go.cb-w.com/dapp?cb_url=${href}`;
                    }
                }
            }
        });
    }
    getWalletConnection() {
        return SolStoreUtil.state.connection;
    }
    async syncAccount({ address, caipNetwork }) {
        const caipNetworkId = caipNetwork?.id;
        if (address && caipNetwork) {
            SolStoreUtil.setConnection(new Connection(caipNetwork.rpcUrl, this.connectionSettings));
            this.appKit?.setAllAccounts([{ address, type: 'eoa' }], this.chainNamespace);
            this.appKit?.setCaipAddress(`${caipNetworkId}:${address}`, this.chainNamespace);
            await this.syncNetwork(address);
        }
        else {
            this.appKit?.resetWcConnection();
            this.appKit?.resetNetwork();
            this.appKit?.resetAccount(this.chainNamespace);
        }
    }
    async syncBalance(address = this.appKit?.getAddress(this.chainNamespace)) {
        if (!address) {
            return;
        }
        if (!SolStoreUtil.state.connection) {
            throw new Error('Connection is not set');
        }
        if (!this.appKit?.getCaipNetwork()) {
            this.appKit?.setCaipNetwork(this.defaultCaipNetwork);
        }
        const balance = (await SolStoreUtil.state.connection.getBalance(new PublicKey(address))) /
            SolConstantsUtil.LAMPORTS_PER_SOL;
        this.appKit?.setBalance(balance.toString(), this.appKit?.getCaipNetwork()?.currency, this.chainNamespace);
    }
    syncRequestedNetworks(caipNetworks) {
        const uniqueChainNamespaces = Array.from(new Set(caipNetworks.map(caipNetwork => caipNetwork.chainNamespace)));
        uniqueChainNamespaces.forEach(chainNamespace => {
            this.appKit?.setRequestedCaipNetworks(caipNetworks.filter(caipNetwork => caipNetwork.chainNamespace === chainNamespace), chainNamespace);
        });
    }
    getAuthSession() {
        return this.authSession;
    }
    async switchNetwork(caipNetwork) {
        const connectedConnector = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_CONNECTOR);
        const isConnectedWithAuth = connectedConnector === 'AUTH';
        if (isConnectedWithAuth) {
            await this.w3mFrameProvider?.switchNetwork(caipNetwork.id);
            const user = await this.w3mFrameProvider?.getUser({
                chainId: caipNetwork?.id
            });
            this.authSession = user;
            if (user) {
                const caipAddress = `solana:${caipNetwork.chainId}:${user.address}`;
                ProviderUtil.setProvider(this.chainNamespace, this.authProvider);
                ProviderUtil.setProviderId(this.chainNamespace, 'walletConnect');
                this.appKit?.setCaipAddress(caipAddress, this.chainNamespace);
                this.syncAccount({
                    address: user.address,
                    caipNetwork
                });
            }
        }
        else {
            this.appKit?.setCaipNetwork(caipNetwork);
            const address = this.appKit?.getAddress(this.chainNamespace);
            await this.syncAccount({
                address,
                caipNetwork
            });
        }
    }
    async syncNetwork(address) {
        const caipNetwork = this.appKit?.getCaipNetwork(this.chainNamespace);
        const connection = SolStoreUtil.state.connection;
        if (!address || !caipNetwork || !connection) {
            return;
        }
        this.appKit?.setAddressExplorerUrl(caipNetwork.explorerUrl ? `${caipNetwork.explorerUrl}/account/${address}` : undefined, this.chainNamespace);
        await this.syncBalance(address);
    }
    async setProvider(provider) {
        try {
            this.appKit?.setLoading(true);
            const address = await provider.connect();
            const caipChainId = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
            const connectionChain = provider.chains.find(chain => chain.id === caipChainId) || provider.chains[0];
            if (connectionChain) {
                const caipAddress = `solana:${connectionChain.chainId}:${address}`;
                this.appKit?.setCaipAddress(caipAddress, this.chainNamespace);
                await this.switchNetwork(connectionChain);
                ProviderUtil.setProvider(this.chainNamespace, provider);
                this.provider = provider;
                switch (provider.type) {
                    case 'WALLET_CONNECT':
                        ProviderUtil.setProviderId(this.chainNamespace, 'walletConnect');
                        break;
                    case 'AUTH':
                        ProviderUtil.setProviderId(this.chainNamespace, 'w3mAuth');
                        break;
                    default:
                        ProviderUtil.setProviderId(this.chainNamespace, 'injected');
                }
                SafeLocalStorage.setItem(SafeLocalStorageKeys.WALLET_ID, provider.name);
                await this.appKit?.setApprovedCaipNetworksData(this.chainNamespace);
                this.watchProvider(provider);
            }
        }
        finally {
            this.appKit?.setLoading(false);
        }
    }
    watchProvider(provider) {
        const rpcRequestHandler = (request) => {
            if (!this.appKit) {
                return;
            }
            if (W3mFrameHelpers.checkIfRequestExists(request)) {
                if (!W3mFrameHelpers.checkIfRequestIsSafe(request)) {
                    this.appKit?.handleUnsafeRPCRequest();
                }
            }
            else {
                this.appKit.open();
                console.error(W3mFrameRpcConstants.RPC_METHOD_NOT_ALLOWED_MESSAGE, {
                    method: request.method
                });
                setTimeout(() => {
                    this.appKit?.showErrorMessage(W3mFrameRpcConstants.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE);
                }, 300);
            }
        };
        const rpcSuccessHandler = (_response) => {
            if (!this.appKit) {
                return;
            }
            if (this.appKit.isTransactionStackEmpty()) {
                this.appKit.close();
            }
            else {
                this.appKit.popTransactionStack();
            }
        };
        const rpcErrorHandler = (_error) => {
            if (!this.appKit) {
                return;
            }
            if (this.appKit.isOpen()) {
                if (this.appKit.isTransactionStackEmpty()) {
                    this.appKit.close();
                }
                else {
                    this.appKit.popTransactionStack(true);
                }
            }
        };
        function disconnectHandler(appKit) {
            appKit?.resetAccount('solana');
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.WALLET_ID);
            provider.removeListener('disconnect', disconnectHandler);
            provider.removeListener('accountsChanged', accountsChangedHandler);
            provider.removeListener('connect', accountsChangedHandler);
            provider.removeListener('auth_rpcRequest', rpcRequestHandler);
            provider.removeListener('auth_rpcSuccess', rpcSuccessHandler);
            provider.removeListener('auth_rpcError', rpcErrorHandler);
        }
        function accountsChangedHandler(publicKey, appKit) {
            const currentAccount = publicKey.toBase58();
            const caipNetworkId = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
            const chainId = caipNetworkId?.split(':')[1];
            if (currentAccount && chainId) {
                appKit?.setCaipAddress(`solana:${chainId}:${currentAccount}`, 'solana');
            }
            else {
                SafeLocalStorage.removeItem(SafeLocalStorageKeys.WALLET_ID);
                appKit?.resetAccount('solana');
            }
        }
        provider.on('disconnect', () => disconnectHandler(this.appKit));
        provider.on('accountsChanged', (publicKey) => accountsChangedHandler(publicKey, this.appKit));
        provider.on('connect', accountsChangedHandler);
        provider.on('auth_rpcRequest', rpcRequestHandler);
        provider.on('auth_rpcSuccess', rpcSuccessHandler);
        provider.on('auth_rpcError', rpcErrorHandler);
    }
    getSolanaWalletConnectProvider(provider) {
        const walletConnectProvider = new WalletConnectProvider({
            provider,
            chains: this.caipNetworks,
            getActiveChain: () => this.appKit?.getCaipNetwork()
        });
        this.addProvider(walletConnectProvider);
        return walletConnectProvider;
    }
    initializeProviders(opts) {
        if (CoreHelperUtil.isClient()) {
            if (!opts.projectId) {
                throw new Error('projectId is required for AuthProvider');
            }
            const emailEnabled = this.options?.features?.email === undefined
                ? CoreConstantsUtil.DEFAULT_FEATURES.email
                : this.options?.features?.email;
            const socialsEnabled = this.options?.features?.socials
                ? this.options?.features?.socials?.length > 0
                : CoreConstantsUtil.DEFAULT_FEATURES.socials;
            if (emailEnabled || socialsEnabled) {
                this.w3mFrameProvider = W3mFrameProviderSingleton.getInstance(opts.projectId, withSolanaNamespace(this.appKit?.getCaipNetwork(this.chainNamespace)?.chainId));
                this.authProvider = new AuthProvider({
                    getProvider: () => this.w3mFrameProvider,
                    getActiveChain: () => this.appKit?.getCaipNetwork(this.chainNamespace),
                    getActiveNamespace: () => this.appKit?.getActiveChainNamespace(),
                    getSession: () => this.getAuthSession(),
                    setSession: (session) => {
                        this.authSession = session;
                    },
                    chains: this.caipNetworks
                });
                this.addProvider(this.authProvider);
            }
            if ('coinbaseSolana' in window) {
                this.addProvider(new CoinbaseWalletProvider({
                    provider: window.coinbaseSolana,
                    chains: this.caipNetworks,
                    getActiveChain: () => this.appKit?.getCaipNetwork(this.chainNamespace)
                }));
            }
            if (this.appKit && this.caipNetworks[0]) {
                watchStandard(this.appKit, this.caipNetworks[0], standardAdapters => this.addProvider.bind(this)(...standardAdapters));
            }
        }
    }
    addProvider(...providers) {
        const activeProviderName = SafeLocalStorage.getItem(SafeLocalStorageKeys.WALLET_ID);
        const activeNamespace = this.appKit?.getActiveChainNamespace();
        const isSolana = activeNamespace === this.chainNamespace;
        for (const provider of providers) {
            this.availableProviders = this.availableProviders.filter(p => p.name !== provider.name);
            this.availableProviders.push(provider);
            if (provider.name === activeProviderName && isSolana) {
                this.setProvider(provider);
            }
        }
        this.syncConnectors();
    }
    syncConnectors() {
        const connectors = this.availableProviders.map(provider => ({
            id: provider.name,
            type: provider.type,
            imageUrl: provider.icon,
            name: provider.name,
            provider,
            chain: CommonConstantsUtil.CHAIN.SOLANA
        }));
        this.appKit?.setConnectors(connectors);
    }
}
//# sourceMappingURL=client.js.map