import { AppKit } from '@reown/appkit';
import type { SolanaAppKitOptions } from './options';
import type { Provider } from '@reown/appkit-adapter-solana';
export type { SolanaAppKitOptions, Provider };
export declare function createAppKit(options: SolanaAppKitOptions): AppKit;
