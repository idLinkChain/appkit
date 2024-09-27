import { FetchUtil } from '../utils/FetchUtil.js';
import type { BlockchainApiTransactionsRequest, BlockchainApiTransactionsResponse, BlockchainApiSwapTokensRequest, BlockchainApiSwapTokensResponse, BlockchainApiGenerateSwapCalldataRequest, BlockchainApiGenerateSwapCalldataResponse, BlockchainApiGenerateApproveCalldataRequest, BlockchainApiGenerateApproveCalldataResponse, BlockchainApiSwapQuoteRequest, BlockchainApiSwapQuoteResponse, BlockchainApiSwapAllowanceRequest, BlockchainApiSwapAllowanceResponse, BlockchainApiGasPriceRequest, BlockchainApiGasPriceResponse, BlockchainApiTokenPriceRequest, BlockchainApiTokenPriceResponse, BlockchainApiIdentityRequest, BlockchainApiIdentityResponse, GenerateOnRampUrlArgs, GetQuoteArgs, OnrampQuote, PaymentCurrency, PurchaseCurrency, BlockchainApiBalanceResponse, BlockchainApiLookupEnsName, BlockchainApiSuggestionResponse, BlockchainApiRegisterNameParams } from '../utils/TypeUtil.js';
export interface BlockchainApiControllerState {
    clientId: string | null;
    api: FetchUtil;
}
export declare const BlockchainApiController: {
    state: BlockchainApiControllerState;
    fetchIdentity({ address }: BlockchainApiIdentityRequest): Promise<BlockchainApiIdentityResponse>;
    fetchTransactions({ account, projectId, cursor, onramp, signal, cache, chainId }: BlockchainApiTransactionsRequest): Promise<BlockchainApiTransactionsResponse>;
    fetchSwapQuote({ projectId, amount, userAddress, from, to, gasPrice }: BlockchainApiSwapQuoteRequest): Promise<BlockchainApiSwapQuoteResponse>;
    fetchSwapTokens({ projectId, chainId }: BlockchainApiSwapTokensRequest): Promise<BlockchainApiSwapTokensResponse>;
    fetchTokenPrice({ projectId, addresses }: BlockchainApiTokenPriceRequest): Promise<BlockchainApiTokenPriceResponse>;
    fetchSwapAllowance({ projectId, tokenAddress, userAddress }: BlockchainApiSwapAllowanceRequest): Promise<BlockchainApiSwapAllowanceResponse>;
    fetchGasPrice({ projectId, chainId }: BlockchainApiGasPriceRequest): Promise<BlockchainApiGasPriceResponse>;
    generateSwapCalldata({ amount, from, projectId, to, userAddress }: BlockchainApiGenerateSwapCalldataRequest): Promise<BlockchainApiGenerateSwapCalldataResponse>;
    generateApproveCalldata({ from, projectId, to, userAddress }: BlockchainApiGenerateApproveCalldataRequest): Promise<BlockchainApiGenerateApproveCalldataResponse>;
    getBalance(address: string, chainId?: string, forceUpdate?: string): Promise<BlockchainApiBalanceResponse>;
    lookupEnsName(name: string): Promise<BlockchainApiLookupEnsName>;
    reverseLookupEnsName({ address }: {
        address: string;
    }): Promise<BlockchainApiLookupEnsName[]>;
    getEnsNameSuggestions(name: string): Promise<BlockchainApiSuggestionResponse>;
    registerEnsName({ coinType, address, message, signature }: BlockchainApiRegisterNameParams): Promise<unknown>;
    generateOnRampURL({ destinationWallets, partnerUserId, defaultNetwork, purchaseAmount, paymentAmount }: GenerateOnRampUrlArgs): Promise<string>;
    getOnrampOptions(): Promise<{
        paymentCurrencies: PaymentCurrency[];
        purchaseCurrencies: PurchaseCurrency[];
    }>;
    getOnrampQuote({ purchaseCurrency, paymentCurrency, amount, network }: GetQuoteArgs): Promise<OnrampQuote>;
    setClientId(clientId: string | null): void;
};
