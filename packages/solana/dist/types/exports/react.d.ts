import { AppKit } from '@reown/appkit';
import { type Provider, useAppKitConnection } from '@reown/appkit-adapter-solana/react';
import type { SolanaAppKitOptions } from './options.js';
export type { SolanaAppKitOptions, Provider };
export declare function createAppKit(options: SolanaAppKitOptions): AppKit;
export declare function useDisconnect(): {
    disconnect: () => Promise<void>;
};
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents } from '@reown/appkit/library/react';
export { useAppKitConnection };
