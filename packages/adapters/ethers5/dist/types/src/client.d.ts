import type { AppKitOptions } from '@web3inno/appkit';
import { type AdapterType, type CaipNetwork, type ChainNamespace } from '@web3inno/appkit-common';
import { type Provider, type ProviderType } from '@web3inno/appkit-utils/ethers';
import type { AppKit } from '@web3inno/appkit';
import type { ConnectionControllerClient, NetworkControllerClient } from '@web3inno/appkit-core';
import type { PublicStateControllerState } from '@web3inno/appkit-core';
export interface AdapterOptions {
    ethersConfig: ProviderType;
    defaultCaipNetwork?: CaipNetwork;
}
declare global {
    interface Window {
        ethereum?: Record<string, unknown>;
    }
}
interface Info {
    uuid: string;
    name: string;
    icon: string;
    rdns: string;
}
export interface EIP6963ProviderDetail {
    info: Info;
    provider: Provider;
}
export declare class Ethers5Adapter {
    private appKit;
    private EIP6963Providers;
    private ethersConfig?;
    private authProvider?;
    options: AppKitOptions | undefined;
    caipNetworks: CaipNetwork[];
    chainNamespace: ChainNamespace;
    networkControllerClient?: NetworkControllerClient;
    connectionControllerClient?: ConnectionControllerClient;
    siweControllerClient: import("@web3inno/appkit-siwe").AppKitSIWEClient | undefined;
    tokens: import("@web3inno/appkit").Tokens | undefined;
    defaultCaipNetwork: CaipNetwork | undefined;
    adapterType: AdapterType;
    private createEthersConfig;
    constructor();
    construct(appKit: AppKit, options: AppKitOptions): void;
    subscribeState(callback: (state: PublicStateControllerState) => void): (() => void) | undefined;
    disconnect(): Promise<void>;
    private revokeProviderPermissions;
    private getApprovedCaipNetworksData;
    private checkActiveProviders;
    private setProvider;
    private setAuthProvider;
    private watchModal;
    private setupProviderListeners;
    private providerHandlers;
    private removeListeners;
    private setupAuthListeners;
    private handleInvalidAuthRequest;
    private handleAuthRpcError;
    private handleAuthRpcSuccess;
    private handleAuthNotConnected;
    private handleAuthIsConnected;
    private handleAuthSetPreferredAccount;
    private syncReownName;
    private syncAccount;
    private syncProfile;
    private syncBalance;
    private syncConnectedWalletInfo;
    private syncRequestedNetworks;
    switchNetwork(caipNetwork: CaipNetwork): Promise<void>;
    private syncConnectors;
    private syncAuthConnector;
    private eip6963EventHandler;
    private listenConnectors;
}
export {};
