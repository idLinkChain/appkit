import { AppKit } from '@web3inno/appkit';
import type { AppKitOptions } from '@web3inno/appkit';
import { type AdapterOptions } from '@web3inno/appkit-adapter-wagmi';
import type { Config } from 'wagmi';
export type { AdapterOptions } from '@web3inno/appkit-adapter-wagmi';
export { authConnector } from '@web3inno/appkit-adapter-wagmi';
export type WagmiAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> & AdapterOptions<Config>;
export declare function createAppKit(options: WagmiAppKitOptions): AppKit;
