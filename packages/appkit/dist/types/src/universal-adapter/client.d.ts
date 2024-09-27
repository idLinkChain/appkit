import { type ConnectionControllerClient, type NetworkControllerClient } from '@reown/appkit-core';
import UniversalProvider from '@walletconnect/universal-provider';
import type { AppKit } from '../client.js';
import type { CaipNetwork, ChainNamespace, AdapterType } from '@reown/appkit-common';
import type { AppKitOptions } from '../utils/TypesUtil.js';
type Metadata = {
    name: string;
    description: string;
    url: string;
    icons: string[];
};
export declare class UniversalAdapterClient {
    private walletConnectProviderInitPromise?;
    private appKit;
    caipNetworks: CaipNetwork[];
    walletConnectProvider?: UniversalProvider;
    metadata?: Metadata;
    isUniversalAdapterClient: boolean;
    chainNamespace: ChainNamespace;
    defaultNetwork: CaipNetwork | undefined;
    networkControllerClient: NetworkControllerClient;
    connectionControllerClient: ConnectionControllerClient;
    options: AppKitOptions | undefined;
    adapterType: AdapterType;
    constructor(options: AppKitOptions);
    construct(appkit: AppKit, options: AppKitOptions): void;
    switchNetwork(caipNetwork: CaipNetwork): void;
    disconnect(): Promise<void>;
    getWalletConnectProvider(): Promise<UniversalProvider | undefined>;
    private createProvider;
    private initWalletConnectProvider;
    private syncRequestedNetworks;
    private checkActiveWalletConnectProvider;
    private setWalletConnectProvider;
    private setDefaultNetwork;
    private watchWalletConnect;
    private getProviderData;
    private syncAccount;
    private syncAccounts;
    private syncConnectedWalletInfo;
    private syncConnectors;
}
export {};
