import type { Connection, SendOptions } from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';
import type { Wallet } from '@wallet-standard/base';
import type { AnyTransaction, GetActiveChain, Provider } from '@web3inno/appkit-utils/solana';
import { ProviderEventEmitter } from './shared/ProviderEventEmitter.js';
import type { CaipNetwork } from '@web3inno/appkit-common';
export interface WalletStandardProviderConfig {
    wallet: Wallet;
    getActiveChain: GetActiveChain;
}
export declare class WalletStandardProvider extends ProviderEventEmitter implements Provider {
    readonly wallet: Wallet;
    readonly getActiveChain: WalletStandardProviderConfig['getActiveChain'];
    constructor({ wallet, getActiveChain }: WalletStandardProviderConfig);
    get name(): string;
    get type(): "EXTERNAL" | "ANNOUNCED";
    get publicKey(): PublicKey | undefined;
    get icon(): `data:image/svg+xml;base64,${string}` | `data:image/webp;base64,${string}` | `data:image/png;base64,${string}` | `data:image/gif;base64,${string}`;
    get chains(): CaipNetwork[];
    connect(): Promise<string>;
    disconnect(): Promise<void>;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
    signTransaction<T extends AnyTransaction>(transaction: T): Promise<T>;
    signAndSendTransaction<T extends AnyTransaction>(transaction: T, sendOptions?: SendOptions): Promise<string>;
    sendTransaction(transaction: AnyTransaction, connection: Connection, options?: SendOptions): Promise<string>;
    signAllTransactions<T extends AnyTransaction[]>(transactions: T): Promise<T>;
    private serializeTransaction;
    private getAccount;
    private getWalletFeature;
    private getActiveChainName;
    private bindEvents;
}
