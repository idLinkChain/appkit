import { AppKit } from '../src/client.js';
import type { AppKitOptions } from '../src/utils/TypesUtil.js';
export * from '@web3inno/appkit-scaffold-ui';
export * from '../src/utils/index.js';
export type * from '@web3inno/appkit-core';
export type { CaipNetwork, CaipAddress, CaipNetworkId } from '@web3inno/appkit-common';
export { CoreHelperUtil, AccountController, NetworkController } from '@web3inno/appkit-core';
type CreateAppKit = Omit<AppKitOptions, 'sdkType' | 'sdkVersion'>;
export declare function createAppKit(options: CreateAppKit): AppKit;
export { AppKit };
export type { AppKitOptions };
