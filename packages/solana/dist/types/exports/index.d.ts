import { AppKit } from '@web3inno/appkit';
import type { SolanaAppKitOptions } from './options';
import type { Provider } from '@web3inno/appkit-adapter-solana';
export type { SolanaAppKitOptions, Provider };
export declare function createAppKit(options: SolanaAppKitOptions): AppKit;
