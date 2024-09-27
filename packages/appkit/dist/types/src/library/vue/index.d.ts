import { type Event } from '@reown/appkit-core';
import type { W3mAccountButton, W3mButton, W3mConnectButton, W3mNetworkButton, W3mOnrampWidget } from '@reown/appkit-scaffold-ui';
import type { AppKit } from '../../../src/client.js';
import type { AppKitOptions } from '../../utils/TypesUtil.js';
import type { ChainNamespace } from '@reown/appkit-common';
type OpenOptions = {
    view: 'Account' | 'Connect' | 'Networks' | 'ApproveTransaction' | 'OnRampProviders';
};
type ThemeModeOptions = AppKitOptions['themeMode'];
type ThemeVariablesOptions = AppKitOptions['themeVariables'];
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        W3mConnectButton: Pick<W3mConnectButton, 'size' | 'label' | 'loadingLabel'>;
        W3mAccountButton: Pick<W3mAccountButton, 'disabled' | 'balance'>;
        W3mButton: Pick<W3mButton, 'size' | 'label' | 'loadingLabel' | 'disabled' | 'balance'>;
        W3mNetworkButton: Pick<W3mNetworkButton, 'disabled'>;
        W3mOnrampWidget: Pick<W3mOnrampWidget, 'disabled'>;
    }
}
export declare function getAppKit(appKit: AppKit): void;
export declare function useAppKitAccount(): {
    caipAddress: `eip155:${string}:${string}` | `eip155:${number}:${string}` | `solana:${string}:${string}` | `solana:${number}:${string}` | `polkadot:${string}:${string}` | `polkadot:${number}:${string}` | undefined;
    address: string | undefined;
    isConnected: boolean;
    status: "reconnecting" | "connected" | "disconnected" | "connecting" | undefined;
};
export declare function useAppKitProvider<T>(chainNamespace: ChainNamespace): {
    walletProvider: T | undefined;
    walletProviderType: ("walletConnect" | "injected" | "coinbaseWallet" | "eip6963" | "w3mAuth" | "coinbaseWalletSDK") | undefined;
};
export declare function useAppKitTheme(): {
    setThemeMode: (themeMode: ThemeModeOptions) => void;
    setThemeVariables: (themeVariables: ThemeVariablesOptions) => void;
    themeMode: import("vue").Ref<import("@reown/appkit-core").ThemeMode>;
    themeVariables: import("vue").Ref<{
        '--w3m-font-family'?: string | undefined;
        '--w3m-accent'?: string | undefined;
        '--w3m-color-mix'?: string | undefined;
        '--w3m-color-mix-strength'?: number | undefined;
        '--w3m-font-size-master'?: string | undefined;
        '--w3m-border-radius-master'?: string | undefined;
        '--w3m-z-index'?: number | undefined;
    }>;
};
export declare function useAppKit(): {
    open: (options?: OpenOptions) => Promise<void>;
    close: () => Promise<void>;
};
export declare function useWalletInfo(): {
    walletInfo: import("vue").Ref<{
        [x: string]: unknown;
        name?: string | undefined;
        icon?: string | undefined;
    } | undefined>;
};
export declare function useAppKitState(): {
    open: boolean;
    selectedNetworkId: `eip155:${string}` | `eip155:${number}` | `solana:${string}` | `solana:${number}` | `polkadot:${string}` | `polkadot:${number}` | undefined;
};
export interface AppKitEvent {
    timestamp: number;
    data: Event;
}
export declare function useAppKitEvents(): AppKitEvent;
export {};
