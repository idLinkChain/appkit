import { getWallets } from '@wallet-standard/app';
import { WalletStandardProvider } from '../providers/WalletStandardProvider.js';
import { isWalletAdapterCompatibleStandardWallet } from '@solana/wallet-adapter-base';
const { get, on } = getWallets();
let standardAdapters = wrapWalletsWithAdapters(get());
export function watchStandard(appKit, caipNetwork, callback) {
    const listeners = [
        on('register', (...wallets) => {
            if (!standardAdapters || standardAdapters.length === 0) {
                standardAdapters = [...wrapWalletsWithAdapters(wallets, appKit, caipNetwork)];
            }
            else {
                standardAdapters = [
                    ...standardAdapters,
                    ...wrapWalletsWithAdapters(wallets, appKit, caipNetwork)
                ];
            }
            callback(standardAdapters);
        }),
        on('unregister', (...wallets) => {
            standardAdapters = standardAdapters.filter(standardAdapter => wallets.some(wallet => wallet.name === standardAdapter.wallet.name));
            callback(standardAdapters);
        })
    ];
    standardAdapters = wrapWalletsWithAdapters(get(), appKit, caipNetwork);
    callback(standardAdapters);
    return () => listeners.forEach(off => off());
}
function wrapWalletsWithAdapters(wallets, appKit, caipNetwork) {
    if (appKit?.getCaipNetwork() || caipNetwork) {
        return wallets.filter(isWalletAdapterCompatibleStandardWallet).map(wallet => new WalletStandardProvider({
            wallet,
            getActiveChain: () => appKit?.getCaipNetwork() ?? caipNetwork
        }));
    }
    return [];
}
//# sourceMappingURL=watchStandard.js.map