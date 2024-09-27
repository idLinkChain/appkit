'use client';
import { AppKit, AccountController, CoreHelperUtil } from '@reown/appkit';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { getAppKit } from '@reown/appkit/library/react';
import { useSnapshot } from 'valtio';
import packageJson from '../package.json' assert { type: 'json' };
let appkit = undefined;
let ethersAdapter = undefined;
export function createAppKit(options) {
    ethersAdapter = new EthersAdapter();
    appkit = new AppKit({
        ...options,
        sdkVersion: `react-ethers-${packageJson.version}`,
        adapters: [ethersAdapter]
    });
    getAppKit(appkit);
    return appkit;
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
export function useAppkitAccount() {
    const { caipAddress, status } = useSnapshot(AccountController.state);
    return {
        address: CoreHelperUtil.getPlainAddress(caipAddress),
        isConnected: Boolean(caipAddress),
        status
    };
}
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@reown/appkit/library/react';
//# sourceMappingURL=react.js.map