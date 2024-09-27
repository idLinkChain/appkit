import { AppKit } from '@web3inno/appkit';
import { WagmiAdapter } from '@web3inno/appkit-adapter-wagmi';
import { getAppKit } from '@web3inno/appkit/library/react';
import {} from 'wagmi';
import packageJson from '../../package.json' assert { type: 'json' };
let appkit = undefined;
export function createAppKit(options) {
    const wagmiAdapter = new WagmiAdapter({
        ...options.wagmiConfig,
        networks: options.networks,
        projectId: options.projectId
    });
    appkit = new AppKit({
        ...options,
        sdkVersion: `react-wagmi-${packageJson.version}`,
        adapters: [wagmiAdapter]
    });
    getAppKit(appkit);
    return appkit;
}
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@web3inno/appkit/library/react';
//# sourceMappingURL=index.js.map