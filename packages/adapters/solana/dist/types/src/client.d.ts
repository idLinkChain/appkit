import { Connection } from '@solana/web3.js';
import type { BaseWalletAdapter } from '@solana/wallet-adapter-base';
import { type Commitment, type ConnectionConfig } from '@solana/web3.js';
import type { ChainAdapter, ConnectionControllerClient, NetworkControllerClient } from '@reown/appkit-core';
import type { AdapterType, CaipNetwork } from '@reown/appkit-common';
import type { ChainNamespace } from '@reown/appkit-common';
import type { AppKit } from '@reown/appkit';
import type { AppKitOptions as CoreOptions } from '@reown/appkit';
export interface AdapterOptions {
    connectionSettings?: Commitment | ConnectionConfig;
    wallets?: BaseWalletAdapter[];
}
export type AppKitOptions = Omit<AdapterOptions, '_sdkVersion' | 'isUniversalProvider'>;
export declare class SolanaAdapter implements ChainAdapter {
    private appKit;
    private authProvider?;
    private w3mFrameProvider?;
    options: CoreOptions | undefined;
    wallets?: BaseWalletAdapter[];
    caipNetworks: CaipNetwork[];
    readonly chainNamespace: ChainNamespace;
    networkControllerClient?: NetworkControllerClient;
    connectionControllerClient?: ConnectionControllerClient;
    connectionSettings: Commitment | ConnectionConfig;
    private availableProviders;
    private provider;
    private authSession;
    defaultCaipNetwork: CaipNetwork | undefined;
    readonly adapterType: AdapterType;
    constructor(options: AdapterOptions);
    construct(appKit: AppKit, options: CoreOptions): void;
    getWalletConnection(): Connection | null;
    private syncAccount;
    private syncBalance;
    private syncRequestedNetworks;
    private getAuthSession;
    switchNetwork(caipNetwork: CaipNetwork): Promise<void>;
    private syncNetwork;
    private setProvider;
    private watchProvider;
    private getSolanaWalletConnectProvider;
    private initializeProviders;
    private addProvider;
    private syncConnectors;
}
