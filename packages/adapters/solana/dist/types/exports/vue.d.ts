import type { Connection } from '@web3inno/appkit-utils/solana';
export * from '@web3inno/appkit-utils/solana';
export * from '../src/index.js';
export declare function useAppKitConnection(): {
    connection: Connection | undefined;
};
