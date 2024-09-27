import type { WcWallet } from '@web3inno/appkit-core';
export declare function markWalletsAsInstalled(wallets: WcWallet[]): (WcWallet & {
    installed: boolean;
})[];
