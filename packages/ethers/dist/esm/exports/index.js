import { AppKit } from '@web3inno/appkit';
import { EthersAdapter } from '@web3inno/appkit-adapter-ethers';
import packageJson from '../package.json' assert { type: 'json' };
export function createAppKit(options) {
    const ethersAdapter = new EthersAdapter();
    return new AppKit({
        ...options,
        sdkVersion: `html-ethers-${packageJson.version}`,
        adapters: [ethersAdapter]
    });
}
//# sourceMappingURL=index.js.map