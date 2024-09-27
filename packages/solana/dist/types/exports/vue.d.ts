import { AppKit } from '@reown/appkit';
import { useAppKitConnection } from '@reown/appkit-adapter-solana/vue';
import type { Provider } from '@reown/appkit-adapter-solana/vue';
import type { SolanaAppKitOptions } from './options';
export type { SolanaAppKitOptions, Provider };
export declare function createAppKit(options: SolanaAppKitOptions): AppKit;
export declare function useDisconnect(): {
    disconnect: () => Promise<void>;
};
export declare function useSwitchNetwork(): {
    switchNetwork: (chainId: string) => Promise<void>;
};
export declare function useAppKitError(): void;
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents } from '@reown/appkit/library/vue';
export { useAppKitConnection };
