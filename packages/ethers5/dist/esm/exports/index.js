import { AppKit } from '@reown/appkit';
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5';
import packageJson from '../package.json' assert { type: 'json' };
export function createAppKit(options) {
    const ethers5Adapter = new Ethers5Adapter();
    return new AppKit({
        ...options,
        sdkVersion: `html-ethers5-${packageJson.version}`,
        adapters: [ethers5Adapter]
    });
}
//# sourceMappingURL=index.js.map