import { AppKit } from '@reown/appkit';
import type { AppKitOptions } from '@reown/appkit';
import type { CaipNetwork } from '@reown/appkit-common';
import { type AdapterOptions } from '@reown/appkit-adapter-ethers5';
import { ethers } from 'ethers';
export type Ethers5AppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> & AdapterOptions;
export declare function createAppKit(options: Ethers5AppKitOptions): AppKit;
export declare function useAppKitProvider(): {
    walletProvider: ethers.providers.ExternalProvider | undefined;
    walletProviderType: ("walletConnect" | "injected" | "coinbaseWallet" | "eip6963" | "w3mAuth" | "coinbaseWalletSDK") | undefined;
};
export declare function useDisconnect(): {
    disconnect: () => Promise<void>;
};
export declare function useSwitchNetwork(): {
    switchNetwork: (caipNetwork: CaipNetwork) => Promise<void>;
};
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents, useWalletInfo } from '@reown/appkit/library/react';
