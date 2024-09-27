import { CoreHelperUtil } from '../utils/CoreHelperUtil.js';
import { BlockchainApiController } from './BlockchainApiController.js';
import { SnackController } from './SnackController.js';
import { SwapController } from './SwapController.js';
import { SwapApiUtil } from '../utils/SwapApiUtil.js';
import { ChainController } from './ChainController.js';
import { proxy, ref } from 'valtio/vanilla';
// -- State --------------------------------------------- //
const state = proxy({
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: new Map(),
    allAccounts: []
});
// -- Controller ---------------------------------------- //
export const AccountController = {
    state,
    replaceState(newState) {
        if (!newState) {
            return;
        }
        Object.assign(state, ref(newState));
    },
    subscribe(callback) {
        return ChainController.subscribeChainProp('accountState', accountState => {
            if (accountState) {
                return callback(accountState);
            }
            return undefined;
        });
    },
    subscribeKey(property, callback, chain) {
        let prev = undefined;
        return ChainController.subscribeChainProp('accountState', accountState => {
            if (accountState) {
                const nextValue = accountState[property];
                if (prev !== nextValue) {
                    prev = nextValue;
                    callback(nextValue);
                }
            }
        }, chain);
    },
    setStatus(status, chain) {
        ChainController.setAccountProp('status', status, chain);
    },
    getCaipAddress(chain) {
        return ChainController.getAccountProp('caipAddress', chain);
    },
    setProvider(provider, chain) {
        if (provider) {
            ChainController.setAccountProp('provider', provider, chain);
        }
    },
    setCaipAddress(caipAddress, chain) {
        const newAddress = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : undefined;
        ChainController.state.activeCaipAddress = caipAddress;
        ChainController.setAccountProp('caipAddress', caipAddress, chain);
        ChainController.setAccountProp('address', newAddress, chain);
    },
    setBalance(balance, balanceSymbol, chain) {
        ChainController.setAccountProp('balance', balance, chain);
        ChainController.setAccountProp('balanceSymbol', balanceSymbol, chain);
    },
    setProfileName(profileName, chain) {
        ChainController.setAccountProp('profileName', profileName, chain);
    },
    setProfileImage(profileImage, chain) {
        ChainController.setAccountProp('profileImage', profileImage, chain);
    },
    setAddressExplorerUrl(explorerUrl, chain) {
        ChainController.setAccountProp('addressExplorerUrl', explorerUrl, chain);
    },
    setSmartAccountDeployed(isDeployed, chain) {
        ChainController.setAccountProp('smartAccountDeployed', isDeployed, chain);
    },
    setCurrentTab(currentTab) {
        ChainController.setAccountProp('currentTab', currentTab, ChainController.state.activeChain);
    },
    setTokenBalance(tokenBalance, chain) {
        if (tokenBalance) {
            ChainController.setAccountProp('tokenBalance', tokenBalance, chain);
        }
    },
    setShouldUpdateToAddress(address, chain) {
        ChainController.setAccountProp('shouldUpdateToAddress', address, chain);
    },
    setAllAccounts(accounts, chain) {
        ChainController.setAccountProp('allAccounts', accounts, chain);
    },
    addAddressLabel(address, label, chain) {
        const map = ChainController.getAccountProp('addressLabels', chain) || new Map();
        map.set(address, label);
        ChainController.setAccountProp('addressLabels', map, chain);
    },
    removeAddressLabel(address, chain) {
        const map = ChainController.getAccountProp('addressLabels', chain) || new Map();
        map.delete(address);
        ChainController.setAccountProp('addressLabels', map, chain);
    },
    setConnectedWalletInfo(connectedWalletInfo, chain) {
        ChainController.setAccountProp('connectedWalletInfo', connectedWalletInfo, chain, false);
    },
    setPreferredAccountType(preferredAccountType, chain) {
        ChainController.setAccountProp('preferredAccountType', preferredAccountType, chain);
    },
    setSocialProvider(socialProvider, chain) {
        if (socialProvider) {
            ChainController.setAccountProp('socialProvider', socialProvider, chain);
        }
    },
    setSocialWindow(socialWindow, chain) {
        if (socialWindow) {
            ChainController.setAccountProp('socialWindow', ref(socialWindow), chain);
        }
    },
    setFarcasterUrl(farcasterUrl, chain) {
        if (farcasterUrl) {
            ChainController.setAccountProp('farcasterUrl', farcasterUrl, chain);
        }
    },
    async fetchTokenBalance() {
        const chainId = ChainController.state.activeCaipNetwork?.id;
        const chain = ChainController.state.activeCaipNetwork?.chainNamespace;
        const caipAddress = ChainController.state.activeCaipAddress;
        const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : undefined;
        try {
            if (address && chainId && chain) {
                const response = await BlockchainApiController.getBalance(address, chainId);
                const filteredBalances = response.balances.filter(balance => balance.quantity.decimals !== '0');
                this.setTokenBalance(filteredBalances, chain);
                SwapController.setBalances(SwapApiUtil.mapBalancesToSwapTokens(response.balances));
            }
        }
        catch (error) {
            SnackController.showError('Failed to fetch token balance');
        }
    },
    resetAccount(chain) {
        ChainController.resetAccount(chain);
    },
    setSiweStatus(status) {
        ChainController.setAccountProp('siweStatus', status, ChainController.state.activeChain);
    }
};
//# sourceMappingURL=AccountController.js.map