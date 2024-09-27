import { AppKit } from '@web3inno/appkit';
import { EthersAdapter } from '@web3inno/appkit-adapter-ethers';
import { getAppKit } from '@web3inno/appkit/library/vue';
import packageJson from '../package.json' assert { type: 'json' };
let appkit = undefined;
let ethersAdapter = undefined;
export function createAppKit(options) {
    ethersAdapter = new EthersAdapter();
    appkit = new AppKit({
        ...options,
        sdkVersion: `vue-ethers-${packageJson.version}`,
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
}
export function useAppKitAccount() {
}
export function useAppKitError() {
}
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@web3inno/appkit/library/vue';
//# sourceMappingURL=vue.js.map