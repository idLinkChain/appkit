var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ApiController, ConnectorController, RouterController } from '@web3inno/appkit-core';
import { customElement } from '@web3inno/appkit-ui';
import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './styles.js';
import { markWalletsAsInstalled } from '../../utils/markWalletsAsInstalled.js';
let W3mAllWalletsSearch = class W3mAllWalletsSearch extends LitElement {
    constructor() {
        super(...arguments);
        this.prevQuery = '';
        this.loading = true;
        this.query = '';
    }
    render() {
        this.onSearch();
        return this.loading
            ? html `<wui-loading-spinner color="accent-100"></wui-loading-spinner>`
            : this.walletsTemplate();
    }
    async onSearch() {
        if (this.query.trim() !== this.prevQuery.trim()) {
            this.prevQuery = this.query;
            this.loading = true;
            await ApiController.searchWallet({ search: this.query });
            this.loading = false;
        }
    }
    walletsTemplate() {
        const { search } = ApiController.state;
        const wallets = markWalletsAsInstalled(search);
        if (!search.length) {
            return html `
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `;
        }
        return html `
      <wui-grid
        .padding=${['0', 's', 's', 's']}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${wallets.map(wallet => html `
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(wallet)}
              .wallet=${wallet}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `;
    }
    onConnectWallet(wallet) {
        const connector = ConnectorController.getConnector(wallet.id, wallet.rdns);
        if (connector) {
            RouterController.push('ConnectingExternal', { connector });
        }
        else {
            RouterController.push('ConnectingWalletConnect', { wallet });
        }
    }
};
W3mAllWalletsSearch.styles = styles;
__decorate([
    state()
], W3mAllWalletsSearch.prototype, "loading", void 0);
__decorate([
    property()
], W3mAllWalletsSearch.prototype, "query", void 0);
W3mAllWalletsSearch = __decorate([
    customElement('w3m-all-wallets-search')
], W3mAllWalletsSearch);
export { W3mAllWalletsSearch };
//# sourceMappingURL=index.js.map