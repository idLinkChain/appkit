import type { CaipNetworkId } from '@web3inno/appkit-common';
import { W3mFrameProvider } from '@web3inno/appkit-wallet';
export declare class W3mFrameProviderSingleton {
    private static instance;
    private constructor();
    static getInstance(projectId: string, chainId?: number | CaipNetworkId): W3mFrameProvider;
}
