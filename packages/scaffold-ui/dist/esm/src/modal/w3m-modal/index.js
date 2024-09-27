var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AccountController, ApiController, ChainController, CoreHelperUtil, EventsController, ModalController, OptionsController, RouterController, SnackController, ThemeController } from '@reown/appkit-core';
import { UiHelperUtil, customElement, initializeTheming } from '@reown/appkit-ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import styles from './styles.js';
import { ConstantsUtil } from '@reown/appkit-common';
const SCROLL_LOCK = 'scroll-lock';
let W3mModal = class W3mModal extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.abortController = undefined;
        this.open = ModalController.state.open;
        this.caipAddress = ChainController.state.activeCaipAddress;
        this.caipNetwork = ChainController.state.activeCaipNetwork;
        this.isSiweEnabled = OptionsController.state.isSiweEnabled;
        this.shake = ModalController.state.shake;
        this.initializeTheming();
        ApiController.prefetch();
        this.unsubscribe.push(...[
            ModalController.subscribeKey('open', val => (val ? this.onOpen() : this.onClose())),
            ModalController.subscribeKey('shake', val => (this.shake = val)),
            AccountController.subscribeKey('siweStatus', val => this.onSiweStatusChange(val), 'eip155'),
            ChainController.subscribeKey('activeCaipNetwork', val => this.onNewNetwork(val)),
            ChainController.subscribeKey('activeCaipAddress', val => this.onNewAddress(val)),
            OptionsController.subscribeKey('isSiweEnabled', val => (this.isSiweEnabled = val))
        ]);
        EventsController.sendEvent({ type: 'track', event: 'MODAL_LOADED' });
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        this.onRemoveKeyboardListener();
    }
    render() {
        return this.open
            ? html `
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `
            : null;
    }
    async onOverlayClick(event) {
        if (event.target === event.currentTarget) {
            await this.handleClose();
        }
    }
    async handleClose() {
        const isSiweSignScreen = RouterController.state.view === 'ConnectingSiwe';
        const isApproveSignScreen = RouterController.state.view === 'ApproveTransaction';
        if (this.isSiweEnabled) {
            const { SIWEController } = await import('@reown/appkit-siwe');
            const isUnauthenticated = SIWEController.state.status !== 'success';
            if (isUnauthenticated && (isSiweSignScreen || isApproveSignScreen)) {
                ModalController.shake();
            }
            else {
                ModalController.close();
            }
        }
        else {
            ModalController.close();
        }
    }
    initializeTheming() {
        const { themeVariables, themeMode } = ThemeController.state;
        const defaultThemeMode = UiHelperUtil.getColorTheme(themeMode);
        initializeTheming(themeVariables, defaultThemeMode);
    }
    onClose() {
        this.open = false;
        this.classList.remove('open');
        this.onScrollUnlock();
        SnackController.hide();
        this.onRemoveKeyboardListener();
    }
    onOpen() {
        this.open = true;
        this.classList.add('open');
        this.onScrollLock();
        this.onAddKeyboardListener();
    }
    onScrollLock() {
        const styleTag = document.createElement('style');
        styleTag.dataset['w3m'] = SCROLL_LOCK;
        styleTag.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `;
        document.head.appendChild(styleTag);
    }
    onScrollUnlock() {
        const styleTag = document.head.querySelector(`style[data-w3m="${SCROLL_LOCK}"]`);
        if (styleTag) {
            styleTag.remove();
        }
    }
    onAddKeyboardListener() {
        this.abortController = new AbortController();
        const card = this.shadowRoot?.querySelector('wui-card');
        card?.focus();
        window.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                this.handleClose();
            }
            else if (event.key === 'Tab') {
                const { tagName } = event.target;
                if (tagName && !tagName.includes('W3M-') && !tagName.includes('WUI-')) {
                    card?.focus();
                }
            }
        }, this.abortController);
    }
    onRemoveKeyboardListener() {
        this.abortController?.abort();
        this.abortController = undefined;
    }
    onSiweStatusChange(nextStatus) {
        if (nextStatus === 'success') {
            ModalController.close();
        }
    }
    async onNewAddress(caipAddress) {
        const prevConnected = this.caipAddress
            ? CoreHelperUtil.getPlainAddress(this.caipAddress)
            : undefined;
        const nextConnected = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : undefined;
        const isSameAddress = prevConnected === nextConnected;
        if (nextConnected && !isSameAddress && this.isSiweEnabled) {
            const { SIWEController } = await import('@reown/appkit-siwe');
            const signed = AccountController.state.siweStatus === 'success';
            if (!prevConnected && nextConnected) {
                this.onSiweNavigation();
            }
            else if (signed && prevConnected && nextConnected && prevConnected !== nextConnected) {
                if (SIWEController.state._client?.options.signOutOnAccountChange) {
                    await SIWEController.signOut();
                    this.onSiweNavigation();
                }
            }
        }
        if (!nextConnected) {
            ModalController.close();
        }
        this.caipAddress = caipAddress;
    }
    async onNewNetwork(nextCaipNetwork) {
        if (!this.caipAddress) {
            this.caipNetwork = nextCaipNetwork;
            RouterController.goBack();
            return;
        }
        const prevCaipNetworkId = this.caipNetwork?.id?.toString();
        const nextNetworkId = nextCaipNetwork?.id?.toString();
        if (prevCaipNetworkId && nextNetworkId && prevCaipNetworkId !== nextNetworkId) {
            if (this.isSiweEnabled) {
                const { SIWEController } = await import('@reown/appkit-siwe');
                if (SIWEController.state._client?.options.signOutOnNetworkChange) {
                    await SIWEController.signOut();
                    this.onSiweNavigation();
                }
                else {
                    RouterController.goBack();
                }
            }
            else {
                RouterController.goBack();
            }
        }
        this.caipNetwork = nextCaipNetwork;
    }
    onSiweNavigation() {
        const isEIP155Namespace = ChainController.state.activeChain === ConstantsUtil.CHAIN.EVM;
        const authenticated = AccountController.state.siweStatus === 'success';
        if (!authenticated && isEIP155Namespace) {
            if (this.open) {
                RouterController.replace('ConnectingSiwe');
            }
            else {
                ModalController.open({
                    view: 'ConnectingSiwe'
                });
            }
        }
        else {
            RouterController.goBack();
        }
    }
};
W3mModal.styles = styles;
__decorate([
    state()
], W3mModal.prototype, "open", void 0);
__decorate([
    state()
], W3mModal.prototype, "caipAddress", void 0);
__decorate([
    state()
], W3mModal.prototype, "caipNetwork", void 0);
__decorate([
    state()
], W3mModal.prototype, "isSiweEnabled", void 0);
__decorate([
    state()
], W3mModal.prototype, "shake", void 0);
W3mModal = __decorate([
    customElement('w3m-modal')
], W3mModal);
export { W3mModal };
//# sourceMappingURL=index.js.map