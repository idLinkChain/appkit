import type { CustomWallet, Features, Metadata, ProjectId, SdkVersion, Tokens } from '../utils/TypeUtil.js';
export interface OptionsControllerStatePublic {
    /**
     * A boolean that forces the loading of all Ethereum wallets from the API.
     * Forces the chain ID to 1.
     * @default false
     */
    allEthWallets?: boolean;
    /**
     * A boolean that allows you to add or remove the "All Wallets" button on the modal
     * @default 'SHOW'
     * @see https://docs.reown.com/appkit/react/core/options#allwallets
     */
    allWallets?: 'SHOW' | 'HIDE' | 'ONLY_MOBILE';
    /**
     * The project ID for the AppKit. You can find or create your project ID in the Cloud.
     * @see https://cloud.walletconnect.com/
     */
    projectId: ProjectId;
    /**
     * Array of wallet ids to be shown in the modal's connection view with priority. These wallets will also show up first in `All Wallets` view
     * @default []
     * @see https://docs.reown.com/appkit/react/core/options#featuredwalletids
     */
    featuredWalletIds?: string[];
    /**
     * Array of wallet ids to be shown (order is respected). Unlike `featuredWalletIds`, these wallets will be the only ones shown in `All Wallets` view and as recommended wallets.
     * @default []
     * @see https://docs.reown.com/appkit/react/core/options#includewalletids
     */
    includeWalletIds?: string[];
    /**
     * Array of wallet ids to be excluded from the wallet list in the modal.
     * @default []
     * @see https://docs.reown.com/appkit/react/core/options#excludewalletids
     */
    excludeWalletIds?: string[];
    /**
     * Array of tokens to show the user's balance of. Each key represents the chain id of the token's blockchain
     * @default {}
     * @see https://docs.reown.com/appkit/react/core/options#tokens
     */
    tokens?: Tokens;
    /**
     * Add custom wallets to the modal. CustomWallets is an array of objects, where each object contains specific information of a custom wallet.
     * @default []
     * @see https://docs.reown.com/appkit/react/core/options#customwallets
     *
     */
    customWallets?: CustomWallet[];
    /**
     * You can add an url for the terms and conditions link.
     * @default undefined
     */
    termsConditionsUrl?: string;
    /**
     * You can add an url for the privacy policy link.
     * @default undefined
     */
    privacyPolicyUrl?: string;
    /**
     * Set of fields that related to your project which will be used to populate the metadata of the modal.
     * @default {}
     */
    metadata?: Metadata;
    /**
     * Enable or disable the appending the AppKit to the DOM. Created for specific use cases like WebGL.
     * @default false
     */
    disableAppend?: boolean;
    /**
     * Enable or disable the all the wallet options (injected, Coinbase, QR, etc.). This is useful if you want to use only email and socials.
     * @default true
     */
    enableWallets?: boolean;
    /**
     * Enable or disable the EIP6963 feature in your AppKit.
     * @default false
     */
    enableEIP6963?: boolean;
    /**
     * Enable or disable the Coinbase wallet in your AppKit.
     * @default true
     */
    enableCoinbase?: boolean;
    /**
     * Enable or disable the Injected wallet in your AppKit.
     * @default true
     */
    enableInjected?: boolean;
    /**
     * Enable or disable the WalletConnect QR code in your AppKit.
     * @default true
     */
    enableWalletConnect?: boolean;
    /**
     * Features configuration object.
     * @default { swaps: true, onramp: true, email: true, socials: ['google', 'x', 'discord', 'farcaster', 'github', 'apple', 'facebook'], history: true, analytics: true, allWallets: true }
     * @see https://docs.reown.com/appkit/react/core/options#features
     */
    features?: Features;
}
export interface OptionsControllerStateInternal {
    sdkType: 'appkit';
    sdkVersion: SdkVersion;
    isSiweEnabled?: boolean;
    isUniversalProvider?: boolean;
    hasMultipleAddresses?: boolean;
}
type StateKey = keyof OptionsControllerStatePublic | keyof OptionsControllerStateInternal;
type OptionsControllerState = OptionsControllerStatePublic & OptionsControllerStateInternal;
export declare const OptionsController: {
    state: OptionsControllerStatePublic & OptionsControllerStateInternal;
    subscribeKey<K extends StateKey>(key: K, callback: (value: OptionsControllerState[K]) => void): () => void;
    setOptions(options: OptionsControllerState): void;
    setFeatures(features: OptionsControllerState['features'] | undefined): void;
    setProjectId(projectId: OptionsControllerState['projectId']): void;
    setAllWallets(allWallets: OptionsControllerState['allWallets']): void;
    setAllEthWallets(allEthWallets: OptionsControllerState['allEthWallets']): void;
    setIncludeWalletIds(includeWalletIds: OptionsControllerState['includeWalletIds']): void;
    setExcludeWalletIds(excludeWalletIds: OptionsControllerState['excludeWalletIds']): void;
    setFeaturedWalletIds(featuredWalletIds: OptionsControllerState['featuredWalletIds']): void;
    setTokens(tokens: OptionsControllerState['tokens']): void;
    setTermsConditionsUrl(termsConditionsUrl: OptionsControllerState['termsConditionsUrl']): void;
    setPrivacyPolicyUrl(privacyPolicyUrl: OptionsControllerState['privacyPolicyUrl']): void;
    setCustomWallets(customWallets: OptionsControllerState['customWallets']): void;
    setIsSiweEnabled(isSiweEnabled: OptionsControllerState['isSiweEnabled']): void;
    setIsUniversalProvider(isUniversalProvider: OptionsControllerState['isUniversalProvider']): void;
    setSdkVersion(sdkVersion: OptionsControllerState['sdkVersion']): void;
    setMetadata(metadata: OptionsControllerState['metadata']): void;
    setDisableAppend(disableAppend: OptionsControllerState['disableAppend']): void;
    setEIP6963Enabled(enableEIP6963: OptionsControllerState['enableEIP6963']): void;
    setEnableWalletConnect(enableWalletConnect: OptionsControllerState['enableWalletConnect']): void;
    setEnableWallets(enableWallets: OptionsControllerState['enableWallets']): void;
    setHasMultipleAddresses(hasMultipleAddresses: OptionsControllerState['hasMultipleAddresses']): void;
};
export {};
