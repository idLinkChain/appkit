import { AppKit } from '@web3inno/appkit';
import { useAppKitConnection } from '@web3inno/appkit-adapter-solana/vue';
import type { Provider } from '@web3inno/appkit-adapter-solana/vue';
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
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents } from '@web3inno/appkit/library/vue';
export { useAppKitConnection };
