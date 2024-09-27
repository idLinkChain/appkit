import { AppKit } from '@web3inno/appkit';
import type { AppKitOptions } from '@web3inno/appkit';
import { type AdapterOptions } from '@web3inno/appkit-adapter-ethers';
export type { AdapterOptions } from '@web3inno/appkit-adapter-ethers';
type EthersAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> & AdapterOptions;
export declare function createAppKit(options: EthersAppKitOptions): AppKit;
export declare function useDisconnect(): {
    disconnect: () => Promise<void>;
};
export declare function useSwitchNetwork(): void;
export declare function useAppKitAccount(): void;
export declare function useAppKitError(): void;
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@web3inno/appkit/library/vue';
