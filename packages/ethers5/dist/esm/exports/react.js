'use client';
import { AppKit } from '@reown/appkit';
import { ProviderUtil } from '@reown/appkit/store';
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5';
import { getAppKit } from '@reown/appkit/library/react';
import { useSnapshot } from 'valtio';
import { ethers } from 'ethers';
import packageJson from '../package.json' assert { type: 'json' };
let appkit = undefined;
let ethersAdapter = undefined;
export function createAppKit(options) {
    ethersAdapter = new Ethers5Adapter();
    appkit = new AppKit({
        ...options,
        sdkVersion: `react-ethers5-${packageJson.version}`,
        adapters: [ethersAdapter]
    });
    getAppKit(appkit);
    return appkit;
}
export function useAppKitProvider() {
    const { providers, providerIds } = useSnapshot(ProviderUtil.state);
    const walletProvider = providers['eip155'];
    const walletProviderType = providerIds['eip155'];
    return {
        walletProvider,
        walletProviderType
    };
}
export function useDisconnect() {
    async function disconnect() {
        await ethersAdapter?.disconnect();
    }
    return {
        disconnect
    };
}
export function useSwitchNetwork() {
    async function switchNetwork(caipNetwork) {
        await ethersAdapter?.switchNetwork(caipNetwork);
    }
    return {
        switchNetwork
    };
}
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@reown/appkit/library/react';
//# sourceMappingURL=react.js.map