import type { WcWallet } from '@web3inno/appkit-core'
import { ApiController, ConnectorController, RouterController } from '@web3inno/appkit-core'
import { customElement } from '@web3inno/appkit-ui'
import { LitElement, html } from 'lit'
import { property, state } from 'lit/decorators.js'
import styles from './styles.js'
import { markWalletsAsInstalled } from '../../utils/markWalletsAsInstalled.js'

@customElement('w3m-all-wallets-search')
export class W3mAllWalletsSearch extends LitElement {
  public static override styles = styles

  // -- Members ------------------------------------------- //
  private prevQuery = ''

  // -- State & Properties -------------------------------- //
  @state() private loading = true

  @property() private query = ''

  // -- Render -------------------------------------------- //
  public override render() {
    this.onSearch()

    return this.loading
      ? html`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`
      : this.walletsTemplate()
  }

  // Private Methods ------------------------------------- //
  private async onSearch() {
    if (this.query.trim() !== this.prevQuery.trim()) {
      this.prevQuery = this.query
      this.loading = true
      await ApiController.searchWallet({ search: this.query })
      this.loading = false
    }
  }

  private walletsTemplate() {
    const { search } = ApiController.state
    const wallets = markWalletsAsInstalled(search)

    if (!search.length) {
      return html`
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
      `
    }

    return html`
      <wui-grid
        .padding=${['0', 's', 's', 's'] as const}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${wallets.map(
          wallet => html`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(wallet)}
              .wallet=${wallet}
            ></w3m-all-wallets-list-item>
          `
        )}
      </wui-grid>
    `
  }

  private onConnectWallet(wallet: WcWallet) {
    const connector = ConnectorController.getConnector(wallet.id, wallet.rdns)
    if (connector) {
      RouterController.push('ConnectingExternal', { connector })
    } else {
      RouterController.push('ConnectingWalletConnect', { wallet })
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-all-wallets-search': W3mAllWalletsSearch
  }
}
