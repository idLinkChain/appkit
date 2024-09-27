import { AppKit } from '../src/client.js';
import packageJson from '../package.json' assert { type: 'json' };
import { CoreHelperUtil } from '@web3inno/appkit-core';
// -- Views ------------------------------------------------------------
export * from '@web3inno/appkit-scaffold-ui';
// -- Utils & Other -----------------------------------------------------
export * from '../src/utils/index.js';
export { CoreHelperUtil, AccountController, NetworkController } from '@web3inno/appkit-core';
export function createAppKit(options) {
    return new AppKit({
        ...options,
        sdkVersion: CoreHelperUtil.generateSdkVersion(options.adapters ?? [], 'html', packageJson.version)
    });
}
export { AppKit };
//# sourceMappingURL=index.js.map