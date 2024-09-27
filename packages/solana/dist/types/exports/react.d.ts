import { AppKit } from '@web3inno/appkit';
import { type Provider, useAppKitConnection } from '@web3inno/appkit-adapter-solana/react';
import type { SolanaAppKitOptions } from './options.js';
export type { SolanaAppKitOptions, Provider };
export declare function createAppKit(options: SolanaAppKitOptions): AppKit;
export declare function useDisconnect(): {
    disconnect: () => Promise<void>;
};
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents } from '@web3inno/appkit/library/react';
export { useAppKitConnection };
