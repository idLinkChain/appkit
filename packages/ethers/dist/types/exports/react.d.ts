import { AppKit } from '@web3inno/appkit';
import type { AppKitOptions } from '@web3inno/appkit';
import { type AdapterOptions } from '@web3inno/appkit-adapter-ethers';
import type { CaipNetwork } from '@web3inno/appkit-common';
export type { AdapterOptions } from '@web3inno/appkit-adapter-ethers';
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
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@web3inno/appkit/library/react';
