import { AppKit } from '@web3inno/appkit';
import type { AppKitOptions } from '@web3inno/appkit';
import { type AdapterOptions } from '@web3inno/appkit-adapter-wagmi';
import type { Config } from '@wagmi/core';
export type WagmiAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> & AdapterOptions<Config>;
export declare function createAppKit(options: WagmiAppKitOptions): AppKit;
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@web3inno/appkit/library/vue';
