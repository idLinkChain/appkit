import {} from '@reown/appkit-utils/solana';
import { ProviderEventEmitter } from './shared/ProviderEventEmitter.js';
import { solana } from '../utils/chains.js';
export class CoinbaseWalletProvider extends ProviderEventEmitter {
    constructor(params) {
        super();
        this.name = 'Coinbase Wallet';
        this.type = 'ANNOUNCED';
        this.icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjUxMiIgZmlsbD0iIzAwNTJGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MiA1MTJDMTUyIDcxMC44MjMgMzEzLjE3NyA4NzIgNTEyIDg3MkM3MTAuODIzIDg3MiA4NzIgNzEwLjgyMyA4NzIgNTEyQzg3MiAzMTMuMTc3IDcxMC44MjMgMTUyIDUxMiAxNTJDMzEzLjE3NyAxNTIgMTUyIDMxMy4xNzcgMTUyIDUxMlpNNDIwIDM5NkM0MDYuNzQ1IDM5NiAzOTYgNDA2Ljc0NSAzOTYgNDIwVjYwNEMzOTYgNjE3LjI1NSA0MDYuNzQ1IDYyOCA0MjAgNjI4SDYwNEM2MTcuMjU1IDYyOCA2MjggNjE3LjI1NSA2MjggNjA0VjQyMEM2MjggNDA2Ljc0NSA2MTcuMjU1IDM5NiA2MDQgMzk2SDQyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=';
        this.provider = params.provider;
        this.requestedChains = params.chains;
    }
    get chains() {
        return this.requestedChains.filter(chain => chain.chainId === solana.chainId);
    }
    get publicKey() {
        return this.provider.publicKey;
    }
    async connect() {
        try {
            await this.provider.connect();
            const account = this.getAccount(true);
            this.provider.emit('connect', this.provider.publicKey);
            this.emit('connect', account);
            return account.toBase58();
        }
        catch (error) {
            this.provider.emit('error', error);
            throw error;
        }
    }
    async disconnect() {
        await this.provider.disconnect();
        this.provider.emit('disconnect', undefined);
        this.emit('disconnect', undefined);
    }
    async signMessage(message) {
        const result = await this.provider.signMessage(message);
        return result.signature;
    }
    async signTransaction(transaction) {
        return this.provider.signTransaction(transaction);
    }
    async signAndSendTransaction(transaction, sendOptions) {
        const result = await this.provider.signAndSendTransaction(transaction, sendOptions);
        return result.signature;
    }
    async sendTransaction(transaction, connection, options) {
        const signedTransaction = await this.signTransaction(transaction);
        const signature = await connection.sendRawTransaction(signedTransaction.serialize(), options);
        return signature;
    }
    async signAllTransactions(transactions) {
        return (await this.provider.signAllTransactions(transactions));
    }
    getAccount(required) {
        const account = this.provider.publicKey;
        if (required && !account) {
            throw new Error('Not connected');
        }
        return account;
    }
}
//# sourceMappingURL=CoinbaseWalletProvider.js.map