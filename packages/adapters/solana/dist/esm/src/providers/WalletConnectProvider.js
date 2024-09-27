import UniversalProvider from '@walletconnect/universal-provider';
import { SolConstantsUtil } from '@web3inno/appkit-utils/solana';
import { ProviderEventEmitter } from './shared/ProviderEventEmitter.js';
import base58 from 'bs58';
import { Connection, PublicKey, Transaction, VersionedTransaction } from '@solana/web3.js';
import { isVersionedTransaction } from '@solana/wallet-adapter-base';
import { withSolanaNamespace } from '../utils/withSolanaNamespace.js';
import { WcHelpersUtil } from '@web3inno/appkit';
import { WalletConnectMethodNotSupportedError } from './shared/Errors.js';
export class WalletConnectProvider extends ProviderEventEmitter {
    constructor({ provider, chains, getActiveChain }) {
        super();
        this.name = 'WalletConnect';
        this.type = 'WALLET_CONNECT';
        this.icon = 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/05338e12-4f75-4982-4e8a-83c67b826b00/md';
        this.requestedChains = chains;
        this.provider = provider;
        this.getActiveChain = getActiveChain;
        if (this.provider.session) {
            this.session = this.provider.session;
        }
    }
    get chains() {
        return this.sessionChains
            .map(sessionChainId => {
            let chainId = sessionChainId;
            if (chainId === SolConstantsUtil.CHAIN_IDS.Deprecated_Mainnet) {
                chainId = SolConstantsUtil.CHAIN_IDS.Mainnet;
            }
            else if (chainId === SolConstantsUtil.CHAIN_IDS.Deprecated_Devnet) {
                chainId = SolConstantsUtil.CHAIN_IDS.Devnet;
            }
            return this.requestedChains.find(chain => withSolanaNamespace(chain.chainId) === chainId);
        })
            .filter(Boolean);
    }
    get publicKey() {
        const account = this.getAccount(false);
        if (account) {
            return new PublicKey(account.publicKey);
        }
        return undefined;
    }
    async connect() {
        const rpcMap = this.requestedChains.reduce((acc, chain) => {
            acc[withSolanaNamespace(chain.chainId)] = chain.rpcUrl;
            return acc;
        }, {});
        if (this.provider.session) {
            this.session = this.provider.session;
        }
        else {
            this.provider.on('display_uri', this.onUri);
            this.session = await this.provider.connect({
                optionalNamespaces: {
                    solana: {
                        chains: this.getRequestedChainsWithDeprecated(),
                        methods: [
                            'solana_signMessage',
                            'solana_signTransaction',
                            'solana_signAndSendTransaction',
                            'solana_signAllTransactions'
                        ],
                        events: [],
                        rpcMap
                    }
                }
            });
            this.provider.removeListener('display_uri', this.onUri);
        }
        const account = this.getAccount(true);
        this.emit('connect', new PublicKey(account.publicKey));
        return account.address;
    }
    async disconnect() {
        await this.provider?.disconnect();
        this.emit('disconnect', undefined);
    }
    async signMessage(message) {
        this.checkIfMethodIsSupported('solana_signMessage');
        const signedMessage = await this.request('solana_signMessage', {
            message: base58.encode(message),
            pubkey: this.getAccount(true).address
        });
        return base58.decode(signedMessage.signature);
    }
    async signTransaction(transaction) {
        this.checkIfMethodIsSupported('solana_signTransaction');
        const serializedTransaction = this.serializeTransaction(transaction);
        const result = await this.request('solana_signTransaction', {
            transaction: serializedTransaction,
            pubkey: this.getAccount(true).address,
            ...this.getRawRPCParams(transaction)
        });
        if ('signature' in result) {
            transaction.addSignature(new PublicKey(this.getAccount(true).publicKey), Buffer.from(base58.decode(result.signature)));
            return transaction;
        }
        const decodedTransaction = Buffer.from(result.transaction, 'base64');
        if (isVersionedTransaction(transaction)) {
            return VersionedTransaction.deserialize(decodedTransaction);
        }
        return Transaction.from(decodedTransaction);
    }
    async signAndSendTransaction(transaction, sendOptions) {
        this.checkIfMethodIsSupported('solana_signAndSendTransaction');
        const serializedTransaction = this.serializeTransaction(transaction);
        const result = await this.request('solana_signAndSendTransaction', {
            transaction: serializedTransaction,
            pubkey: this.getAccount(true).address,
            sendOptions
        });
        return result.signature;
    }
    async sendTransaction(transaction, connection, options) {
        const signedTransaction = await this.signTransaction(transaction);
        const signature = await connection.sendRawTransaction(signedTransaction.serialize(), options);
        return signature;
    }
    async signAllTransactions(transactions) {
        try {
            this.checkIfMethodIsSupported('solana_signAllTransactions');
            const result = await this.request('solana_signAllTransactions', {
                transactions: transactions.map(transaction => this.serializeTransaction(transaction))
            });
            return result.transactions.map((serializedTransaction, index) => {
                const transaction = transactions[index];
                if (!transaction) {
                    throw new Error('Invalid transactions response');
                }
                const decodedTransaction = Buffer.from(serializedTransaction, 'base64');
                if (isVersionedTransaction(transaction)) {
                    return VersionedTransaction.deserialize(decodedTransaction);
                }
                return Transaction.from(decodedTransaction);
            });
        }
        catch (error) {
            if (error instanceof WalletConnectMethodNotSupportedError) {
                const signedTransactions = [];
                for (const transaction of transactions) {
                    signedTransactions.push(await this.signTransaction(transaction));
                }
                return signedTransactions;
            }
            throw error;
        }
    }
    request(method, params) {
        const chain = this.chains.find(c => this.getActiveChain()?.chainId === c.chainId);
        let chainId = withSolanaNamespace(chain?.chainId);
        switch (chainId) {
            case SolConstantsUtil.CHAIN_IDS.Mainnet:
                if (!this.sessionChains.includes(SolConstantsUtil.CHAIN_IDS.Mainnet)) {
                    chainId = SolConstantsUtil.CHAIN_IDS.Deprecated_Mainnet;
                }
                break;
            case SolConstantsUtil.CHAIN_IDS.Devnet:
                if (!this.sessionChains.includes(SolConstantsUtil.CHAIN_IDS.Devnet)) {
                    chainId = SolConstantsUtil.CHAIN_IDS.Deprecated_Devnet;
                }
                break;
            default:
                break;
        }
        return this.provider?.request({
            method,
            params
        }, chainId);
    }
    get sessionChains() {
        return WcHelpersUtil.getChainsFromNamespaces(this.session?.namespaces);
    }
    serializeTransaction(transaction) {
        return Buffer.from(transaction.serialize({ verifySignatures: false })).toString('base64');
    }
    getAccount(required) {
        const account = this.session?.namespaces['solana']?.accounts[0];
        if (!account) {
            if (required) {
                throw new Error('Account not found');
            }
            return undefined;
        }
        const address = account.split(':')[2];
        if (!address) {
            if (required) {
                throw new Error('Address not found');
            }
            return undefined;
        }
        return {
            address,
            publicKey: base58.decode(address)
        };
    }
    getRequestedChainsWithDeprecated() {
        const chains = this.requestedChains.map(chain => withSolanaNamespace(chain.chainId));
        if (chains.includes(SolConstantsUtil.CHAIN_IDS.Mainnet)) {
            chains.push(SolConstantsUtil.CHAIN_IDS.Deprecated_Mainnet);
        }
        if (chains.includes(SolConstantsUtil.CHAIN_IDS.Devnet)) {
            chains.push(SolConstantsUtil.CHAIN_IDS.Deprecated_Devnet);
        }
        return chains;
    }
    getRawRPCParams(transaction) {
        if (isVersionedTransaction(transaction)) {
            return {};
        }
        return {
            feePayer: transaction.feePayer?.toBase58() ?? '',
            instructions: transaction.instructions.map(instruction => ({
                data: base58.encode(instruction.data),
                keys: instruction.keys.map(key => ({
                    isWritable: key.isWritable,
                    isSigner: key.isSigner,
                    pubkey: key.pubkey.toBase58()
                })),
                programId: instruction.programId.toBase58()
            })),
            recentBlockhash: transaction.recentBlockhash ?? ''
        };
    }
    checkIfMethodIsSupported(method) {
        if (!this.session?.namespaces['solana']?.methods.includes(method)) {
            throw new WalletConnectMethodNotSupportedError(method);
        }
    }
}
//# sourceMappingURL=WalletConnectProvider.js.map