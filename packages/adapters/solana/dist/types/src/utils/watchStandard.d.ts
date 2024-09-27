import { WalletStandardProvider } from '../providers/WalletStandardProvider.js';
import type { AppKit } from '@web3inno/appkit';
import type { CaipNetwork } from '@web3inno/appkit-common';
export declare function watchStandard(appKit: AppKit, caipNetwork: CaipNetwork, callback: (arg: WalletStandardProvider[]) => void): () => void;
