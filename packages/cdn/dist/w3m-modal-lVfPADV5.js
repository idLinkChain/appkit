import { v, x as y, M as n, h, O as f, b7 as k, p as m, D as C, y as S, R as c, V as x, Q as A, F as E, a as b, b as O, z as w, w as N, b8 as L } from "./W3MFrameProviderSingleton--2RuNpyE.js";
const K = v`
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
`;
var d = function(u, e, i, t) {
  var o = arguments.length, s = o < 3 ? e : t === null ? t = Object.getOwnPropertyDescriptor(e, i) : t, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(u, e, i, t);
  else
    for (var r = u.length - 1; r >= 0; r--)
      (a = u[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(e, i, s) : a(e, i)) || s);
  return o > 3 && s && Object.defineProperty(e, i, s), s;
};
const g = "scroll-lock";
let l = class extends y {
  constructor() {
    super(), this.unsubscribe = [], this.abortController = void 0, this.open = n.state.open, this.caipAddress = h.state.activeCaipAddress, this.caipNetwork = h.state.activeCaipNetwork, this.isSiweEnabled = f.state.isSiweEnabled, this.shake = n.state.shake, this.initializeTheming(), k.prefetch(), this.unsubscribe.push(n.subscribeKey("open", (e) => e ? this.onOpen() : this.onClose()), n.subscribeKey("shake", (e) => this.shake = e), m.subscribeKey("siweStatus", (e) => this.onSiweStatusChange(e), "eip155"), h.subscribeKey("activeCaipNetwork", (e) => this.onNewNetwork(e)), h.subscribeKey("activeCaipAddress", (e) => this.onNewAddress(e)), f.subscribeKey("isSiweEnabled", (e) => this.isSiweEnabled = e)), C.sendEvent({ type: "track", event: "MODAL_LOADED" });
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), this.onRemoveKeyboardListener();
  }
  render() {
    return this.open ? S`
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
        ` : null;
  }
  async onOverlayClick(e) {
    e.target === e.currentTarget && await this.handleClose();
  }
  async handleClose() {
    const e = c.state.view === "ConnectingSiwe", i = c.state.view === "ApproveTransaction";
    if (this.isSiweEnabled) {
      const { SIWEController: t } = await import("./index-zKOXWC9Y.js");
      t.state.status !== "success" && (e || i) ? n.shake() : n.close();
    } else
      n.close();
  }
  initializeTheming() {
    const { themeVariables: e, themeMode: i } = L.state, t = x.getColorTheme(i);
    A(e, t);
  }
  onClose() {
    this.open = !1, this.classList.remove("open"), this.onScrollUnlock(), E.hide(), this.onRemoveKeyboardListener();
  }
  onOpen() {
    this.open = !0, this.classList.add("open"), this.onScrollLock(), this.onAddKeyboardListener();
  }
  onScrollLock() {
    const e = document.createElement("style");
    e.dataset.w3m = g, e.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `, document.head.appendChild(e);
  }
  onScrollUnlock() {
    const e = document.head.querySelector(`style[data-w3m="${g}"]`);
    e && e.remove();
  }
  onAddKeyboardListener() {
    var i;
    this.abortController = new AbortController();
    const e = (i = this.shadowRoot) == null ? void 0 : i.querySelector("wui-card");
    e == null || e.focus(), window.addEventListener("keydown", (t) => {
      if (t.key === "Escape")
        this.handleClose();
      else if (t.key === "Tab") {
        const { tagName: o } = t.target;
        o && !o.includes("W3M-") && !o.includes("WUI-") && (e == null || e.focus());
      }
    }, this.abortController);
  }
  onRemoveKeyboardListener() {
    var e;
    (e = this.abortController) == null || e.abort(), this.abortController = void 0;
  }
  onSiweStatusChange(e) {
    e === "success" && n.close();
  }
  async onNewAddress(e) {
    var s;
    const i = this.caipAddress ? b.getPlainAddress(this.caipAddress) : void 0, t = e ? b.getPlainAddress(e) : void 0;
    if (t && !(i === t) && this.isSiweEnabled) {
      const { SIWEController: a } = await import("./index-zKOXWC9Y.js"), r = m.state.siweStatus === "success";
      !i && t ? this.onSiweNavigation() : r && i && t && i !== t && (s = a.state._client) != null && s.options.signOutOnAccountChange && (await a.signOut(), this.onSiweNavigation());
    }
    t || n.close(), this.caipAddress = e;
  }
  async onNewNetwork(e) {
    var o, s, a, r;
    if (!this.caipAddress) {
      this.caipNetwork = e, c.goBack();
      return;
    }
    const i = (s = (o = this.caipNetwork) == null ? void 0 : o.id) == null ? void 0 : s.toString(), t = (a = e == null ? void 0 : e.id) == null ? void 0 : a.toString();
    if (i && t && i !== t)
      if (this.isSiweEnabled) {
        const { SIWEController: p } = await import("./index-zKOXWC9Y.js");
        (r = p.state._client) != null && r.options.signOutOnNetworkChange ? (await p.signOut(), this.onSiweNavigation()) : c.goBack();
      } else
        c.goBack();
    this.caipNetwork = e;
  }
  onSiweNavigation() {
    const e = h.state.activeChain === O.CHAIN.EVM;
    !(m.state.siweStatus === "success") && e ? this.open ? c.replace("ConnectingSiwe") : n.open({
      view: "ConnectingSiwe"
    }) : c.goBack();
  }
};
l.styles = K;
d([
  w()
], l.prototype, "open", void 0);
d([
  w()
], l.prototype, "caipAddress", void 0);
d([
  w()
], l.prototype, "caipNetwork", void 0);
d([
  w()
], l.prototype, "isSiweEnabled", void 0);
d([
  w()
], l.prototype, "shake", void 0);
l = d([
  N("w3m-modal")
], l);
export {
  l as W3mModal
};
