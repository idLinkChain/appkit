import { type AnyTransaction, type Provider } from '@reown/appkit-utils/solana';
import { ProviderEventEmitter } from './shared/ProviderEventEmitter.js';
import type { Connection, PublicKey, SendOptions } from '@solana/web3.js';
import type { CaipNetwork } from '@reown/appkit-common';
export type SolanaCoinbaseWallet = {
    publicKey?: PublicKey;
    signTransaction<T extends AnyTransaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends AnyTransaction>(transactions: T[]): Promise<T[]>;
    signAndSendTransaction<T extends AnyTransaction>(transaction: T, options?: SendOptions): Promise<{
        signature: string;
    }>;
    signMessage(message: Uint8Array): Promise<{
        signature: Uint8Array;
    }>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    emit(event: string, ...args: unknown[]): void;
};
export type CoinbaseWalletProviderConfig = {
    provider: SolanaCoinbaseWallet;
    chains: CaipNetwork[];
    getActiveChain: () => CaipNetwork | undefined;
};
export declare class CoinbaseWalletProvider extends ProviderEventEmitter implements Provider {
    readonly name = "Coinbase Wallet";
    readonly type = "ANNOUNCED";
    readonly icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjUxMiIgZmlsbD0iIzAwNTJGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MiA1MTJDMTUyIDcxMC44MjMgMzEzLjE3NyA4NzIgNTEyIDg3MkM3MTAuODIzIDg3MiA4NzIgNzEwLjgyMyA4NzIgNTEyQzg3MiAzMTMuMTc3IDcxMC44MjMgMTUyIDUxMiAxNTJDMzEzLjE3NyAxNTIgMTUyIDMxMy4xNzcgMTUyIDUxMlpNNDIwIDM5NkM0MDYuNzQ1IDM5NiAzOTYgNDA2Ljc0NSAzOTYgNDIwVjYwNEMzOTYgNjE3LjI1NSA0MDYuNzQ1IDYyOCA0MjAgNjI4SDYwNEM2MTcuMjU1IDYyOCA2MjggNjE3LjI1NSA2MjggNjA0VjQyMEM2MjggNDA2Ljc0NSA2MTcuMjU1IDM5NiA2MDQgMzk2SDQyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
    private provider;
    private requestedChains;
    constructor(params: CoinbaseWalletProviderConfig);
    get chains(): CaipNetwork[];
    get publicKey(): PublicKey | undefined;
    connect(): Promise<string>;
    disconnect(): Promise<void>;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
    signTransaction<T extends AnyTransaction>(transaction: T): Promise<T>;
    signAndSendTransaction<T extends AnyTransaction>(transaction: T, sendOptions?: SendOptions): Promise<string>;
    sendTransaction(transaction: AnyTransaction, connection: Connection, options?: SendOptions): Promise<string>;
    signAllTransactions<T extends AnyTransaction[]>(transactions: T): Promise<T>;
    private getAccount;
}
