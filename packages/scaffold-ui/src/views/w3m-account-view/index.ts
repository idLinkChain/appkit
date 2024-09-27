import { ConnectorController, StorageUtil } from '@web3inno/appkit-core'
import { customElement } from '@web3inno/appkit-ui'
import { LitElement, html } from 'lit'

@customElement('w3m-account-view')
export class W3mAccountView extends LitElement {
  // -- Render -------------------------------------------- //

  public override render() {
    const connectedConnectorType = StorageUtil.getConnectedConnector()
    const authConnector = ConnectorController.getAuthConnector()

    return html`
      ${authConnector && connectedConnectorType === 'AUTH'
        ? this.walletFeaturesTemplate()
        : this.defaultTemplate()}
    `
  }

  // -- Private ------------------------------------------- //
  private walletFeaturesTemplate() {
    return html`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`
  }

  private defaultTemplate() {
    return html`<w3m-account-default-widget></w3m-account-default-widget>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-account-view': W3mAccountView
  }
}
