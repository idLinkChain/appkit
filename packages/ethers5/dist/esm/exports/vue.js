import { AppKit } from '@reown/appkit';
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5';
import { getAppKit } from '@reown/appkit/library/vue';
import packageJson from '../package.json' assert { type: 'json' };
let appkit = undefined;
let ethersAdapter = undefined;
export function createAppKit(options) {
    ethersAdapter = new Ethers5Adapter();
    appkit = new AppKit({
        ...options,
        sdkVersion: `vue-ethers5-${packageJson.version}`,
        adapters: [ethersAdapter]
    });
    getAppKit(appkit);
    return appkit;
}
export function useAppKitProvider() {
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
}
export function useAppKitAccount() {
}
export function useAppKitError() {
}
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@reown/appkit/library/vue';
//# sourceMappingURL=vue.js.map