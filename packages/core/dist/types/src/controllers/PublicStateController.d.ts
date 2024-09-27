import type { CaipNetworkId } from '@reown/appkit-common';
export interface PublicStateControllerState {
    loading: boolean;
    open: boolean;
    selectedNetworkId?: CaipNetworkId;
    activeChain?: string;
}
export declare const PublicStateController: {
    state: PublicStateControllerState;
    subscribe(callback: (newState: PublicStateControllerState) => void): () => void;
    set(newState: Partial<PublicStateControllerState>): void;
};
