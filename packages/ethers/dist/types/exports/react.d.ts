import { AppKit } from '@reown/appkit';
import type { AppKitOptions } from '@reown/appkit';
import { type AdapterOptions } from '@reown/appkit-adapter-ethers';
import type { CaipNetwork } from '@reown/appkit-common';
export type { AdapterOptions } from '@reown/appkit-adapter-ethers';
export type EthersAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> & AdapterOptions;
export declare function createAppKit(options: EthersAppKitOptions): AppKit;
export declare function useDisconnect(): {
    disconnect: () => Promise<void>;
};
export declare function useSwitchNetwork(): {
    switchNetwork: (caipNetwork: CaipNetwork) => Promise<void>;
};
export declare function useAppkitAccount(): {
    address: string | undefined;
    isConnected: boolean;
    status: "reconnecting" | "connected" | "disconnected" | "connecting" | undefined;
};
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@reown/appkit/library/react';
