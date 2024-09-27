import { isVersionedTransaction, WalletAccountError, WalletSendTransactionError, WalletSignMessageError, WalletSignTransactionError } from '@solana/wallet-adapter-base';
import { SolanaSignAndSendTransaction, SolanaSignMessage, SolanaSignTransaction } from '@solana/wallet-standard-features';
import { getCommitment } from '@solana/wallet-standard-util';
import { PublicKey, Transaction, VersionedTransaction } from '@solana/web3.js';
import { StandardConnect, StandardDisconnect, StandardEvents } from '@wallet-standard/features';
import base58 from 'bs58';
import { WalletStandardFeatureNotSupportedError } from './shared/Errors.js';
import { ProviderEventEmitter } from './shared/ProviderEventEmitter.js';
import { solanaChains } from '../utils/chains.js';
export class WalletStandardProvider extends ProviderEventEmitter {
    constructor({ wallet, getActiveChain }) {
        super();
        this.wallet = wallet;
        this.getActiveChain = getActiveChain;
        this.bindEvents();
    }
    get name() {
        return this.wallet.name;
    }
    get type() {
        const FILTER_OUT_ADAPTERS = ['Trust'];
        if (FILTER_OUT_ADAPTERS.includes(this.wallet.name)) {
            return 'EXTERNAL';
        }
        return 'ANNOUNCED';
    }
    get publicKey() {
        const account = this.getAccount(false);
        if (account) {
            return new PublicKey(account.publicKey);
        }
        return undefined;
    }
    get icon() {
        return this.wallet.icon;
    }
    get chains() {
        return this.wallet.chains.map(chainId => solanaChains[chainId]).filter(Boolean);
    }
    async connect() {
        const feature = this.getWalletFeature(StandardConnect);
        await feature.connect();
        const account = this.getAccount(true);
        const publicKey = new PublicKey(account.publicKey);
        this.emit('connect', publicKey);
        return account.address;
    }
    async disconnect() {
        const feature = this.getWalletFeature(StandardDisconnect);
        await feature.disconnect();
        this.emit('disconnect', undefined);
    }
    async signMessage(message) {
        const feature = this.getWalletFeature(SolanaSignMessage);
        const account = this.getAccount(true);
        const [result] = await feature.signMessage({ message, account });
        if (!result) {
            throw new WalletSignMessageError('Empty result');
        }
        return result.signature;
    }
    async signTransaction(transaction) {
        const feature = this.getWalletFeature(SolanaSignTransaction);
        const account = this.getAccount(true);
        const serializedTransaction = this.serializeTransaction(transaction);
        const [result] = await feature.signTransaction({
            account,
            transaction: serializedTransaction,
            chain: this.getActiveChainName()
        });
        if (!result) {
            throw new WalletSignTransactionError('Empty result');
        }
        if (isVersionedTransaction(transaction)) {
            return VersionedTransaction.deserialize(result.signedTransaction);
        }
        return Transaction.from(result.signedTransaction);
    }
    async signAndSendTransaction(transaction, sendOptions) {
        const feature = this.getWalletFeature(SolanaSignAndSendTransaction);
        const account = this.getAccount(true);
        const [result] = await feature.signAndSendTransaction({
            account,
            transaction: this.serializeTransaction(transaction),
            options: {
                ...sendOptions,
                preflightCommitment: getCommitment(sendOptions?.preflightCommitment)
            },
            chain: this.getActiveChainName()
        });
        if (!result) {
            throw new WalletSendTransactionError('Empty result');
        }
        return base58.encode(result.signature);
    }
    async sendTransaction(transaction, connection, options) {
        const signedTransaction = await this.signTransaction(transaction);
        const signature = await connection.sendRawTransaction(signedTransaction.serialize(), options);
        return signature;
    }
    async signAllTransactions(transactions) {
        const feature = this.getWalletFeature(SolanaSignTransaction);
        const account = this.getAccount(true);
        const chain = this.getActiveChainName();
        const result = await feature.signTransaction(...transactions.map(transaction => ({
            transaction: this.serializeTransaction(transaction),
            account,
            chain
        })));
        return result.map(({ signedTransaction }, index) => {
            const transaction = transactions[index];
            if (!transaction) {
                throw new WalletSignTransactionError('Invalid transaction signature response');
            }
            if (isVersionedTransaction(transaction)) {
                return VersionedTransaction.deserialize(signedTransaction);
            }
            return Transaction.from(signedTransaction);
        });
    }
    serializeTransaction(transaction) {
        return transaction.serialize({ verifySignatures: false });
    }
    getAccount(required) {
        const account = this.wallet.accounts[0];
        if (required && !account) {
            throw new WalletAccountError();
        }
        return account;
    }
    getWalletFeature(feature) {
        if (!(feature in this.wallet.features)) {
            throw new WalletStandardFeatureNotSupportedError(feature);
        }
        return this.wallet.features[feature];
    }
    getActiveChainName() {
        const entry = Object.entries(solanaChains).find(([, chain]) => chain.chainId === this.getActiveChain()?.chainId);
        if (!entry) {
            throw new Error('Invalid chain id');
        }
        return entry[0];
    }
    bindEvents() {
        const features = this.getWalletFeature(StandardEvents);
        features.on('change', params => {
            if (params.accounts) {
                const account = params.accounts[0];
                if (account) {
                    this.emit('accountsChanged', new PublicKey(account.publicKey));
                }
            }
        });
    }
}
//# sourceMappingURL=WalletStandardProvider.js.map