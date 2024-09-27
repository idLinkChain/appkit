"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("./W3MFrameProviderSingleton-Czx55ewz.cjs"),o=t.proxy({status:"uninitialized"}),u={state:o,subscribeKey(n,e){return t.subscribeKey(o,n,e)},subscribe(n){return t.subscribe(o,()=>n(o))},_getClient(){if(!o._client)throw new Error("SIWEController client not set");return o._client},async getNonce(n){const i=await this._getClient().getNonce(n);return this.setNonce(i),i},async getSession(){try{const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e||void 0}catch{return}},createMessage(n){const i=this._getClient().createMessage(n);return this.setMessage(i),i},async verifyMessage(n){return await this._getClient().verifyMessage(n)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const n=this._getClient();await n.signOut(),this.setStatus("ready"),this.setSession(void 0),(e=n.onSignOut)==null||e.call(n)},onSignIn(n){var i;const e=this._getClient();(i=e.onSignIn)==null||i.call(e,n)},onSignOut(){var e;const n=this._getClient();(e=n.onSignOut)==null||e.call(n)},async setSIWEClient(n){o._client=t.ref(n),o.session=await this.getSession(),o.status=o.session?"success":"ready",t.ChainController.setAccountProp("siweStatus",o.status,"eip155"),t.OptionsController.setIsSiweEnabled(n.options.enabled)},setNonce(n){o.nonce=n},setStatus(n){o.status=n,t.ChainController.setAccountProp("siweStatus",o.status,"eip155")},setMessage(n){o.message=n},setSession(n){o.session=n,o.status=n?"success":"ready",t.ChainController.setAccountProp("siweStatus",o.status,"eip155")}},d=t.i`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var C=function(n,e,i,r){var a=arguments.length,s=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,i,r);else for(var l=n.length-1;l>=0;l--)(c=n[l])&&(s=(a<3?c(s):a>3?c(e,i,s):c(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};exports.W3mConnectingSiwe=class extends t.h{constructor(){var e,i;super(...arguments),this.dappImageUrl=(e=t.OptionsController.state.metadata)==null?void 0:e.icons,this.walletImageUrl=(i=t.AccountController.state.connectedWalletInfo)==null?void 0:i.icon}firstUpdated(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return t.ke`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,i){e.animate([{transform:"translateX(0px)"},{transform:i}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};exports.W3mConnectingSiwe.styles=d;exports.W3mConnectingSiwe=C([t.customElement("w3m-connecting-siwe")],exports.W3mConnectingSiwe);var g=function(n,e,i,r){var a=arguments.length,s=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,i,r);else for(var l=n.length-1;l>=0;l--)(c=n[l])&&(s=(a<3?c(s):a>3?c(e,i,s):c(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};exports.W3mConnectingSiweView=class extends t.h{constructor(){var e;super(...arguments),this.dappName=(e=t.OptionsController.state.metadata)==null?void 0:e.name,this.isSigning=!1,this.isCancelling=!1}render(){return t.ke`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){var e,i,r;this.isSigning=!0,t.EventsController.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:((e=t.ChainController.state.activeCaipNetwork)==null?void 0:e.id)||"",isSmartAccount:t.AccountController.state.preferredAccountType===t.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}});try{u.setStatus("loading");const a=await u.signIn();return u.setStatus("success"),t.EventsController.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:((i=t.ChainController.state.activeCaipNetwork)==null?void 0:i.id)||"",isSmartAccount:t.AccountController.state.preferredAccountType===t.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),a}catch{const c=t.AccountController.state.preferredAccountType===t.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT;return c?t.SnackController.showError("This application might not support Smart Accounts"):t.SnackController.showError("Signature declined"),u.setStatus("error"),t.EventsController.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:((r=t.ChainController.state.activeCaipNetwork)==null?void 0:r.id)||"",isSmartAccount:c}})}finally{this.isSigning=!1}}async onCancel(){var i;this.isCancelling=!0,t.ChainController.state.activeCaipAddress?(await t.ConnectionController.disconnect(),t.ModalController.close()):t.RouterController.push("Connect"),this.isCancelling=!1,t.EventsController.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:((i=t.ChainController.state.activeCaipNetwork)==null?void 0:i.id)||"",isSmartAccount:t.AccountController.state.preferredAccountType===t.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}})}};g([t.r()],exports.W3mConnectingSiweView.prototype,"isSigning",void 0);g([t.r()],exports.W3mConnectingSiweView.prototype,"isCancelling",void 0);exports.W3mConnectingSiweView=g([t.customElement("w3m-connecting-siwe-view")],exports.W3mConnectingSiweView);exports.formatMessage=t.Jf;exports.getDidAddress=t.Yi;exports.getDidChainId=t.Gi;exports.SIWEController=u;
