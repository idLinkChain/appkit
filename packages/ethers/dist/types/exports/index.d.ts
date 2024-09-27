import { AppKit } from '@web3inno/appkit';
import type { AppKitOptions } from '@web3inno/appkit';
import { type AdapterOptions } from '@web3inno/appkit-adapter-ethers';
export type { AdapterOptions } from '@web3inno/appkit-adapter-ethers';
export type EthersAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> & AdapterOptions;
export declare function createAppKit(options: EthersAppKitOptions): AppKit;
