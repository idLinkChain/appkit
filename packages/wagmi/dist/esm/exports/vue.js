import { AppKit } from '@web3inno/appkit';
import { WagmiAdapter } from '@web3inno/appkit-adapter-wagmi';
import { getAppKit } from '@web3inno/appkit/library/vue';
import packageJson from '../package.json' assert { type: 'json' };
let appkit = undefined;
export function createAppKit(options) {
    const wagmiAdapter = new WagmiAdapter({
        networks: options.networks,
        projectId: options.projectId
    });
    appkit = new AppKit({
        ...options,
        sdkVersion: `vue-wagmi-${packageJson.version}`,
        adapters: [wagmiAdapter]
    });
    getAppKit(appkit);
    return appkit;
}
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@web3inno/appkit/library/vue';
//# sourceMappingURL=vue.js.map