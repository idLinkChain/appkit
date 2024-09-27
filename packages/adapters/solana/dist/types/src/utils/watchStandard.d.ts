import { WalletStandardProvider } from '../providers/WalletStandardProvider.js';
import type { AppKit } from '@reown/appkit';
import type { CaipNetwork } from '@reown/appkit-common';
export declare function watchStandard(appKit: AppKit, caipNetwork: CaipNetwork, callback: (arg: WalletStandardProvider[]) => void): () => void;
