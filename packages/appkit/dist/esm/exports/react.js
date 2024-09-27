import { AppKit } from '../src/client.js';
import { getAppKit } from '../src/library/react/index.js';
import packageJson from '../package.json' assert { type: 'json' };
import { CoreHelperUtil } from '@web3inno/appkit-core';
// -- Views ------------------------------------------------------------
export * from '@web3inno/appkit-scaffold-ui';
// -- Hooks ------------------------------------------------------------
export * from '../src/library/react/index.js';
// -- Utils & Other -----------------------------------------------------
export * from '../src/utils/index.js';
export { CoreHelperUtil, AccountController, NetworkController } from '@web3inno/appkit-core';
export let modal = undefined;
export function createAppKit(options) {
    if (!modal) {
        modal = new AppKit({
            ...options,
            sdkVersion: CoreHelperUtil.generateSdkVersion(options.adapters ?? [], 'react', packageJson.version)
        });
        getAppKit(modal);
    }
    return modal;
}
export { AppKit };
// -- Hooks ------------------------------------------------------------
export * from '../src/library/react/index.js';
export { useAppKitAccount, useAppKitNetwork } from '@web3inno/appkit-core/react';
//# sourceMappingURL=react.js.map