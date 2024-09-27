"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("./W3MFrameProviderSingleton-Czx55ewz.cjs"),u=t.i`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var l=function(d,e,i,o){var r=arguments.length,s=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(d,e,i,o);else for(var a=d.length-1;a>=0;a--)(n=d[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};const h="scroll-lock";exports.W3mModal=class extends t.h{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=t.ModalController.state.open,this.caipAddress=t.ChainController.state.activeCaipAddress,this.caipNetwork=t.ChainController.state.activeCaipNetwork,this.isSiweEnabled=t.OptionsController.state.isSiweEnabled,this.shake=t.ModalController.state.shake,this.initializeTheming(),t.ApiController.prefetch(),this.unsubscribe.push(t.ModalController.subscribeKey("open",e=>e?this.onOpen():this.onClose()),t.ModalController.subscribeKey("shake",e=>this.shake=e),t.AccountController.subscribeKey("siweStatus",e=>this.onSiweStatusChange(e),"eip155"),t.ChainController.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),t.ChainController.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),t.OptionsController.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),t.EventsController.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?t.ke`
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
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){const e=t.RouterController.state.view==="ConnectingSiwe",i=t.RouterController.state.view==="ApproveTransaction";if(this.isSiweEnabled){const{SIWEController:o}=await Promise.resolve().then(()=>require("./index-BJndyDsF.cjs"));o.state.status!=="success"&&(e||i)?t.ModalController.shake():t.ModalController.close()}else t.ModalController.close()}initializeTheming(){const{themeVariables:e,themeMode:i}=t.ThemeController.state,o=t.UiHelperUtil.getColorTheme(i);t.initializeTheming(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),t.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=h,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${h}"]`);e&&e.remove()}onAddKeyboardListener(){var i;this.abortController=new AbortController;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",o=>{if(o.key==="Escape")this.handleClose();else if(o.key==="Tab"){const{tagName:r}=o.target;r&&!r.includes("W3M-")&&!r.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}onSiweStatusChange(e){e==="success"&&t.ModalController.close()}async onNewAddress(e){var s;const i=this.caipAddress?t.CoreHelperUtil.getPlainAddress(this.caipAddress):void 0,o=e?t.CoreHelperUtil.getPlainAddress(e):void 0;if(o&&!(i===o)&&this.isSiweEnabled){const{SIWEController:n}=await Promise.resolve().then(()=>require("./index-BJndyDsF.cjs")),a=t.AccountController.state.siweStatus==="success";!i&&o?this.onSiweNavigation():a&&i&&o&&i!==o&&(s=n.state._client)!=null&&s.options.signOutOnAccountChange&&(await n.signOut(),this.onSiweNavigation())}o||t.ModalController.close(),this.caipAddress=e}async onNewNetwork(e){var r,s,n,a;if(!this.caipAddress){this.caipNetwork=e,t.RouterController.goBack();return}const i=(s=(r=this.caipNetwork)==null?void 0:r.id)==null?void 0:s.toString(),o=(n=e==null?void 0:e.id)==null?void 0:n.toString();if(i&&o&&i!==o)if(this.isSiweEnabled){const{SIWEController:c}=await Promise.resolve().then(()=>require("./index-BJndyDsF.cjs"));(a=c.state._client)!=null&&a.options.signOutOnNetworkChange?(await c.signOut(),this.onSiweNavigation()):t.RouterController.goBack()}else t.RouterController.goBack();this.caipNetwork=e}onSiweNavigation(){const e=t.ChainController.state.activeChain===t.ConstantsUtil$1.CHAIN.EVM;!(t.AccountController.state.siweStatus==="success")&&e?this.open?t.RouterController.replace("ConnectingSiwe"):t.ModalController.open({view:"ConnectingSiwe"}):t.RouterController.goBack()}};exports.W3mModal.styles=u;l([t.r()],exports.W3mModal.prototype,"open",void 0);l([t.r()],exports.W3mModal.prototype,"caipAddress",void 0);l([t.r()],exports.W3mModal.prototype,"caipNetwork",void 0);l([t.r()],exports.W3mModal.prototype,"isSiweEnabled",void 0);l([t.r()],exports.W3mModal.prototype,"shake",void 0);exports.W3mModal=l([t.customElement("w3m-modal")],exports.W3mModal);
