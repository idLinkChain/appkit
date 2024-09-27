import { AppKit } from '@web3inno/appkit';
import { WagmiAdapter } from '@web3inno/appkit-adapter-wagmi';
import packageJson from '../package.json' assert { type: 'json' };
export { authConnector } from '@web3inno/appkit-adapter-wagmi';
export function createAppKit(options) {
    const wagmiAdapter = new WagmiAdapter({
        networks: options.networks,
        projectId: options.projectId
    });
    return new AppKit({
        ...options,
        sdkVersion: `html-wagmi-${packageJson.version}`,
        adapters: [wagmiAdapter]
    });
}
//# sourceMappingURL=index.js.map