import { type Connector } from '@web3inno/appkit-core';
import { LitElement } from 'lit';
export declare class W3mConnectingMultiChainView extends LitElement {
    static styles: import("lit").CSSResult;
    private unsubscribe;
    protected activeConnector: Connector | undefined;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    private networksTemplate;
    private onConnector;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connecting-multi-chain-view': W3mConnectingMultiChainView;
    }
}
