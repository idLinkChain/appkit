import { bb as p } from "./W3MFrameProviderSingleton-C9zzHw2W.js";
function _(n, r) {
  for (var i = 0; i < r.length; i++) {
    const e = r[i];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const s in e)
        if (s !== "default" && !(s in n)) {
          const o = Object.getOwnPropertyDescriptor(e, s);
          o && Object.defineProperty(n, s, o.get ? o : {
            enumerable: !0,
            get: () => e[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var l = {}, g = {}, f = {};
Object.defineProperty(f, "__esModule", { value: !0 });
f.getLowerCase = void 0;
function m(n) {
  return n && n.toLowerCase();
}
f.getLowerCase = m;
Object.defineProperty(g, "__esModule", { value: !0 });
g.SafeAppProvider = void 0;
const w = p, u = f;
class k extends w.EventEmitter {
  constructor(r, i) {
    super(), this.submittedTxs = /* @__PURE__ */ new Map(), this.safe = r, this.sdk = i;
  }
  async connect() {
    this.emit("connect", { chainId: this.chainId });
  }
  async disconnect() {
  }
  get chainId() {
    return this.safe.chainId;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async request(r) {
    const { method: i, params: e = [] } = r;
    switch (i) {
      case "eth_accounts":
        return [this.safe.safeAddress];
      case "net_version":
      case "eth_chainId":
        return `0x${this.chainId.toString(16)}`;
      case "personal_sign": {
        const [t, a] = e;
        if (this.safe.safeAddress.toLowerCase() !== a.toLowerCase())
          throw new Error("The address or message hash is invalid");
        const h = await this.sdk.txs.signMessage(t);
        return ("signature" in h ? h.signature : void 0) || "0x";
      }
      case "eth_sign": {
        const [t, a] = e;
        if (this.safe.safeAddress.toLowerCase() !== t.toLowerCase() || !a.startsWith("0x"))
          throw new Error("The address or message hash is invalid");
        const h = await this.sdk.txs.signMessage(a);
        return ("signature" in h ? h.signature : void 0) || "0x";
      }
      case "eth_signTypedData":
      case "eth_signTypedData_v4": {
        const [t, a] = e, h = typeof a == "string" ? JSON.parse(a) : a;
        if (this.safe.safeAddress.toLowerCase() !== t.toLowerCase())
          throw new Error("The address is invalid");
        const c = await this.sdk.txs.signTypedMessage(h);
        return ("signature" in c ? c.signature : void 0) || "0x";
      }
      case "eth_sendTransaction":
        const s = {
          ...e[0],
          value: e[0].value || "0",
          data: e[0].data || "0x"
        };
        typeof s.gas == "string" && s.gas.startsWith("0x") && (s.gas = parseInt(s.gas, 16));
        const o = await this.sdk.txs.send({
          txs: [s],
          params: { safeTxGas: s.gas }
        });
        return this.submittedTxs.set(o.safeTxHash, {
          from: this.safe.safeAddress,
          hash: o.safeTxHash,
          gas: 0,
          gasPrice: "0x00",
          nonce: 0,
          input: s.data,
          value: s.value,
          to: s.to,
          blockHash: null,
          blockNumber: null,
          transactionIndex: null
        }), o.safeTxHash;
      case "eth_blockNumber":
        return (await this.sdk.eth.getBlockByNumber(["latest"])).number;
      case "eth_getBalance":
        return this.sdk.eth.getBalance([(0, u.getLowerCase)(e[0]), e[1]]);
      case "eth_getCode":
        return this.sdk.eth.getCode([(0, u.getLowerCase)(e[0]), e[1]]);
      case "eth_getTransactionCount":
        return this.sdk.eth.getTransactionCount([(0, u.getLowerCase)(e[0]), e[1]]);
      case "eth_getStorageAt":
        return this.sdk.eth.getStorageAt([(0, u.getLowerCase)(e[0]), e[1], e[2]]);
      case "eth_getBlockByNumber":
        return this.sdk.eth.getBlockByNumber([e[0], e[1]]);
      case "eth_getBlockByHash":
        return this.sdk.eth.getBlockByHash([e[0], e[1]]);
      case "eth_getTransactionByHash":
        let d = e[0];
        try {
          d = (await this.sdk.txs.getBySafeTxHash(d)).txHash || d;
        } catch {
        }
        return this.submittedTxs.has(d) ? this.submittedTxs.get(d) : this.sdk.eth.getTransactionByHash([d]).then((t) => (t && (t.hash = e[0]), t));
      case "eth_getTransactionReceipt": {
        let t = e[0];
        try {
          t = (await this.sdk.txs.getBySafeTxHash(t)).txHash || t;
        } catch {
        }
        return this.sdk.eth.getTransactionReceipt([t]).then((a) => (a && (a.transactionHash = e[0]), a));
      }
      case "eth_estimateGas":
        return this.sdk.eth.getEstimateGas(e[0]);
      case "eth_call":
        return this.sdk.eth.call([e[0], e[1]]);
      case "eth_getLogs":
        return this.sdk.eth.getPastLogs([e[0]]);
      case "eth_gasPrice":
        return this.sdk.eth.getGasPrice();
      case "wallet_getPermissions":
        return this.sdk.wallet.getPermissions();
      case "wallet_requestPermissions":
        return this.sdk.wallet.requestPermissions(e[0]);
      case "safe_setSettings":
        return this.sdk.eth.setSafeSettings([e[0]]);
      default:
        throw Error(`"${r.method}" not implemented`);
    }
  }
  // this method is needed for ethers v4
  // https://github.com/ethers-io/ethers.js/blob/427e16826eb15d52d25c4f01027f8db22b74b76c/src.ts/providers/web3-provider.ts#L41-L55
  send(r, i) {
    r || i("Undefined request"), this.request(r).then((e) => i(null, { jsonrpc: "2.0", id: r.id, result: e })).catch((e) => i(e, null));
  }
}
g.SafeAppProvider = k;
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.SafeAppProvider = void 0;
  var r = g;
  Object.defineProperty(n, "SafeAppProvider", { enumerable: !0, get: function() {
    return r.SafeAppProvider;
  } });
})(l);
const b = /* @__PURE__ */ _({
  __proto__: null
}, [l]);
export {
  b as i
};
