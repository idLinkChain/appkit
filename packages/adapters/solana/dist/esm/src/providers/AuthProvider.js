import { ConstantsUtil } from '@web3inno/appkit-utils';
import { ProviderEventEmitter } from './shared/ProviderEventEmitter.js';
import { PublicKey, Transaction, VersionedTransaction } from '@solana/web3.js';
import { W3mFrameProvider } from '@web3inno/appkit-wallet';
import { withSolanaNamespace } from '../utils/withSolanaNamespace.js';
import base58 from 'bs58';
import { isVersionedTransaction } from '@solana/wallet-adapter-base';
export class AuthProvider extends ProviderEventEmitter {
    constructor({ getProvider, getActiveChain, getActiveNamespace, getSession, setSession, chains }) {
        super();
        this.name = ConstantsUtil.AUTH_CONNECTOR_ID;
        this.type = 'AUTH';
        this.connectEmail = args => this.getProvider().connectEmail(args);
        this.connectOtp = args => this.getProvider().connectOtp(args);
        this.updateEmail = args => this.getProvider().updateEmail(args);
        this.updateEmailPrimaryOtp = args => this.getProvider().updateEmailPrimaryOtp(args);
        this.updateEmailSecondaryOtp = args => this.getProvider().updateEmailSecondaryOtp(args);
        this.getEmail = () => this.getProvider().getEmail();
        this.getSocialRedirectUri = args => this.getProvider().getSocialRedirectUri(args);
        this.connectDevice = () => this.getProvider().connectDevice();
        this.connectSocial = args => this.getProvider().connectSocial(args);
        this.connectFarcaster = () => this.getProvider().connectFarcaster();
        this.getFarcasterUri = () => this.getProvider().getFarcasterUri();
        this.syncTheme = args => this.getProvider().syncTheme(args);
        this.syncDappData = args => this.getProvider().syncDappData(args);
        this.switchNetwork = async (args) => {
            const result = await this.getProvider().switchNetwork(args);
            this.emit('chainChanged', args);
            return result;
        };
        this.getProvider = getProvider;
        this.getActiveChain = getActiveChain;
        this.getActiveNamespace = getActiveNamespace;
        this.requestedChains = chains;
        this.getSession = getSession;
        this.setSession = setSession;
        this.bindEvents();
    }
    get publicKey() {
        const session = this.getSession();
        const namespace = this.getActiveNamespace();
        if (session && namespace === 'solana') {
            return new PublicKey(session.address);
        }
        return undefined;
    }
    get chains() {
        const availableChainIds = this.getProvider().getAvailableChainIds();
        return this.requestedChains.filter(requestedChain => availableChainIds.includes(withSolanaNamespace(requestedChain.chainId)));
    }
    async connect() {
        const session = await this.getProvider().connect({
            chainId: withSolanaNamespace(this.getActiveChain()?.chainId)
        });
        this.setSession(session);
        const publicKey = this.getPublicKey(true);
        this.emit('connect', publicKey);
        return publicKey.toBase58();
    }
    async disconnect() {
        await this.getProvider().disconnect();
        this.emit('disconnect', undefined);
    }
    async signMessage(message) {
        const result = await this.getProvider().request({
            method: 'solana_signMessage',
            params: { message: base58.encode(message), pubkey: this.getPublicKey(true).toBase58() }
        });
        return base58.decode(result.signature);
    }
    async signTransaction(transaction) {
        const result = await this.getProvider().request({
            method: 'solana_signTransaction',
            params: { transaction: this.serializeTransaction(transaction) }
        });
        const decodedTransaction = base58.decode(result.transaction);
        if (isVersionedTransaction(transaction)) {
            return VersionedTransaction.deserialize(decodedTransaction);
        }
        return Transaction.from(decodedTransaction);
    }
    async signAndSendTransaction(transaction, options) {
        const serializedTransaction = this.serializeTransaction(transaction);
        const result = await this.getProvider().request({
            method: 'solana_signAndSendTransaction',
            params: {
                transaction: serializedTransaction,
                options
            }
        });
        return result.signature;
    }
    async sendTransaction(transaction, connection, options) {
        const signedTransaction = await this.signTransaction(transaction);
        const signature = await connection.sendRawTransaction(signedTransaction.serialize(), options);
        return signature;
    }
    async signAllTransactions(transactions) {
        const result = await this.getProvider().request({
            method: 'solana_signAllTransactions',
            params: {
                transactions: transactions.map(transaction => this.serializeTransaction(transaction))
            }
        });
        return result.transactions.map((encodedTransaction, index) => {
            const transaction = transactions[index];
            if (!transaction) {
                throw new Error('Invalid solana_signAllTransactions response');
            }
            const decodedTransaction = base58.decode(encodedTransaction);
            if (isVersionedTransaction(transaction)) {
                return VersionedTransaction.deserialize(decodedTransaction);
            }
            return Transaction.from(decodedTransaction);
        });
    }
    getPublicKey(required) {
        const session = this.getSession();
        if (!session) {
            if (required) {
                throw new Error('Account is required');
            }
            return undefined;
        }
        return new PublicKey(session.address);
    }
    serializeTransaction(transaction) {
        return base58.encode(transaction.serialize({ verifySignatures: false }));
    }
    bindEvents() {
        this.getProvider().onRpcRequest(request => {
            this.emit('auth_rpcRequest', request);
        });
        this.getProvider().onRpcSuccess(response => {
            this.emit('auth_rpcSuccess', response);
        });
        this.getProvider().onRpcError(error => {
            this.emit('auth_rpcError', error);
        });
        this.getProvider().onConnect(response => {
            const isSolanaNamespace = typeof response.chainId === 'string' ? response.chainId?.startsWith('solana') : false;
            if (isSolanaNamespace) {
                this.setSession(response);
                this.emit('connect', this.getPublicKey(true));
            }
        });
        this.getProvider().onNotConnected(() => {
            this.emit('disconnect', undefined);
        });
    }
}
//# sourceMappingURL=AuthProvider.js.map