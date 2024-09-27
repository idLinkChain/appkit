import { AppKit } from '@reown/appkit';
import type { AppKitOptions } from '@reown/appkit';
import { type AdapterOptions } from '@reown/appkit-adapter-ethers5';
type EthersAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> & AdapterOptions;
export declare function createAppKit(options: EthersAppKitOptions): AppKit;
export declare function useAppKitProvider(): void;
export declare function useDisconnect(): {
    disconnect: () => Promise<void>;
};
export declare function useSwitchNetwork(): void;
export declare function useAppKitAccount(): void;
export declare function useAppKitError(): void;
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@reown/appkit/library/vue';
