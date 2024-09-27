var Tp = Object.defineProperty;
var _p = (r, e, t) => e in r ? Tp(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var A = (r, e, t) => (_p(r, typeof e != "symbol" ? e + "" : e, t), t), kc = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var u = (r, e, t) => (kc(r, e, "read from private field"), t ? t.call(r) : e.get(r)), b = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, p = (r, e, t, n) => (kc(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t);
var Fi = (r, e, t, n) => ({
  set _(s) {
    p(r, e, s, t);
  },
  get _() {
    return u(r, e, n);
  }
}), I = (r, e, t) => (kc(r, e, "access private method"), t);
import { C as F, P as gt, b as ca, m as Aa, i as Bp, B as ne, s as Lp, n as dt, o as Mp, H as bu, h as On, a as Tn, p as Dp, j as He, f as Tt, g as _t, e as Au, N as Eu, k as xc, l as Up, c as Fp, A as Hp } from "./W3MFrameProviderSingleton-C9zzHw2W.js";
import { j as Gp, r as rd, a as sd, b as Kp } from "./hooks.module-DI69_OTV.js";
const Pc = {
  ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
  ERROR_CODE_DEFAULT: 5e3
}, wr = {
  getCaipDefaultChain(r) {
    if (r)
      return {
        id: `${F.EIP155}:${r.chainId}`,
        name: r.name,
        imageId: gt.NetworkImageIds[r.chainId],
        chainNamespace: ca.CHAIN.EVM
      };
  },
  hexStringToNumber(r) {
    const e = r.startsWith("0x") ? r.slice(2) : r;
    return parseInt(e, 16);
  },
  numberToHexString(r) {
    return `0x${r.toString(16)}`;
  },
  async getUserInfo(r) {
    const [e, t] = await Promise.all([
      wr.getAddresses(r),
      wr.getChainId(r)
    ]);
    return { chainId: t, addresses: e };
  },
  async getChainId(r) {
    const e = await r.request({ method: "eth_chainId" });
    return Number(e);
  },
  async getAddress(r) {
    const [e] = await r.request({ method: "eth_accounts" });
    return e;
  },
  async getAddresses(r) {
    return await r.request({ method: "eth_accounts" });
  },
  async addEthereumChain(r, e) {
    await r.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: wr.numberToHexString(e.chainId),
          rpcUrls: [e.rpcUrl],
          chainName: e.name,
          nativeCurrency: {
            name: e.currency,
            decimals: 18,
            symbol: e.currency
          },
          blockExplorerUrls: [e.explorerUrl],
          iconUrls: [gt.NetworkImageIds[e.chainId]]
        }
      ]
    });
  }
}, jp = "6.13.0";
function Vp(r, e, t) {
  const n = e.split("|").map((i) => i.trim());
  for (let i = 0; i < n.length; i++)
    switch (e) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof r === e)
          return;
    }
  const s = new Error(`invalid value for type ${e}`);
  throw s.code = "INVALID_ARGUMENT", s.argument = `value.${t}`, s.value = r, s;
}
async function _e(r) {
  const e = Object.keys(r);
  return (await Promise.all(e.map((n) => Promise.resolve(r[n])))).reduce((n, s, i) => (n[e[i]] = s, n), {});
}
function U(r, e, t) {
  for (let n in e) {
    let s = e[n];
    const i = t ? t[n] : null;
    i && Vp(s, i, n), Object.defineProperty(r, n, { enumerable: !0, value: s, writable: !1 });
  }
}
function Es(r) {
  if (r == null)
    return "null";
  if (Array.isArray(r))
    return "[ " + r.map(Es).join(", ") + " ]";
  if (r instanceof Uint8Array) {
    const e = "0123456789abcdef";
    let t = "0x";
    for (let n = 0; n < r.length; n++)
      t += e[r[n] >> 4], t += e[r[n] & 15];
    return t;
  }
  if (typeof r == "object" && typeof r.toJSON == "function")
    return Es(r.toJSON());
  switch (typeof r) {
    case "boolean":
    case "symbol":
      return r.toString();
    case "bigint":
      return BigInt(r).toString();
    case "number":
      return r.toString();
    case "string":
      return JSON.stringify(r);
    case "object": {
      const e = Object.keys(r);
      return e.sort(), "{ " + e.map((t) => `${Es(t)}: ${Es(r[t])}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function xe(r, e) {
  return r && r.code === e;
}
function Dl(r) {
  return xe(r, "CALL_EXCEPTION");
}
function re(r, e, t) {
  let n = r;
  {
    const i = [];
    if (t) {
      if ("message" in t || "code" in t || "name" in t)
        throw new Error(`value will overwrite populated values: ${Es(t)}`);
      for (const o in t) {
        if (o === "shortMessage")
          continue;
        const a = t[o];
        i.push(o + "=" + Es(a));
      }
    }
    i.push(`code=${e}`), i.push(`version=${jp}`), i.length && (r += " (" + i.join(", ") + ")");
  }
  let s;
  switch (e) {
    case "INVALID_ARGUMENT":
      s = new TypeError(r);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      s = new RangeError(r);
      break;
    default:
      s = new Error(r);
  }
  return U(s, { code: e }), t && Object.assign(s, t), s.shortMessage == null && U(s, { shortMessage: n }), s;
}
function v(r, e, t, n) {
  if (!r)
    throw re(e, t, n);
}
function y(r, e, t, n) {
  v(r, e, "INVALID_ARGUMENT", { argument: t, value: n });
}
function id(r, e, t) {
  t == null && (t = ""), t && (t = ": " + t), v(r >= e, "missing arguemnt" + t, "MISSING_ARGUMENT", {
    count: r,
    expectedCount: e
  }), v(r <= e, "too many arguments" + t, "UNEXPECTED_ARGUMENT", {
    count: r,
    expectedCount: e
  });
}
["NFD", "NFC", "NFKD", "NFKC"].reduce((r, e) => {
  try {
    if ("test".normalize(e) !== "test")
      throw new Error("bad");
    if (e === "NFD" && "é".normalize("NFD") !== "é")
      throw new Error("broken");
    r.push(e);
  } catch {
  }
  return r;
}, []);
function Lo(r, e, t) {
  if (t == null && (t = ""), r !== e) {
    let n = t, s = "new";
    t && (n += ".", s += " " + t), v(!1, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
      operation: s
    });
  }
}
function od(r, e, t) {
  if (r instanceof Uint8Array)
    return t ? new Uint8Array(r) : r;
  if (typeof r == "string" && r.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
    const n = new Uint8Array((r.length - 2) / 2);
    let s = 2;
    for (let i = 0; i < n.length; i++)
      n[i] = parseInt(r.substring(s, s + 2), 16), s += 2;
    return n;
  }
  y(!1, "invalid BytesLike value", e || "value", r);
}
function W(r, e) {
  return od(r, e, !1);
}
function Le(r, e) {
  return od(r, e, !0);
}
function X(r, e) {
  return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || typeof e == "number" && r.length !== 2 + 2 * e || e === !0 && r.length % 2 !== 0);
}
function Ul(r) {
  return X(r, !0) || r instanceof Uint8Array;
}
const Cu = "0123456789abcdef";
function O(r) {
  const e = W(r);
  let t = "0x";
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    t += Cu[(s & 240) >> 4] + Cu[s & 15];
  }
  return t;
}
function ue(r) {
  return "0x" + r.map((e) => O(e).substring(2)).join("");
}
function Ps(r) {
  return X(r, !0) ? (r.length - 2) / 2 : W(r).length;
}
function ie(r, e, t) {
  const n = W(r);
  return t != null && t > n.length && v(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
    buffer: n,
    length: n.length,
    offset: t
  }), O(n.slice(e ?? 0, t ?? n.length));
}
function ad(r, e, t) {
  const n = W(r);
  v(e >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(n),
    length: e,
    offset: e + 1
  });
  const s = new Uint8Array(e);
  return s.fill(0), t ? s.set(n, e - n.length) : s.set(n, 0), O(s);
}
function Zr(r, e) {
  return ad(r, e, !0);
}
function Wp(r, e) {
  return ad(r, e, !1);
}
const Wa = BigInt(0), St = BigInt(1), Cs = 9007199254740991;
function Ea(r, e) {
  const t = Qa(r, "value"), n = BigInt(H(e, "width"));
  if (v(t >> n === Wa, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: r
  }), t >> n - St) {
    const s = (St << n) - St;
    return -((~t & s) + St);
  }
  return t;
}
function cd(r, e) {
  let t = T(r, "value");
  const n = BigInt(H(e, "width")), s = St << n - St;
  if (t < Wa) {
    t = -t, v(t <= s, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
    const i = (St << n) - St;
    return (~t & i) + St;
  } else
    v(t < s, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
  return t;
}
function br(r, e) {
  const t = Qa(r, "value"), n = BigInt(H(e, "bits"));
  return t & (St << n) - St;
}
function T(r, e) {
  switch (typeof r) {
    case "bigint":
      return r;
    case "number":
      return y(Number.isInteger(r), "underflow", e || "value", r), y(r >= -Cs && r <= Cs, "overflow", e || "value", r), BigInt(r);
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return r[0] === "-" && r[1] !== "-" ? -BigInt(r.substring(1)) : BigInt(r);
      } catch (t) {
        y(!1, `invalid BigNumberish string: ${t.message}`, e || "value", r);
      }
  }
  y(!1, "invalid BigNumberish value", e || "value", r);
}
function Qa(r, e) {
  const t = T(r, e);
  return v(t >= Wa, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value: r
  }), t;
}
const vu = "0123456789abcdef";
function za(r) {
  if (r instanceof Uint8Array) {
    let e = "0x0";
    for (const t of r)
      e += vu[t >> 4], e += vu[t & 15];
    return BigInt(e);
  }
  return T(r);
}
function H(r, e) {
  switch (typeof r) {
    case "bigint":
      return y(r >= -Cs && r <= Cs, "overflow", e || "value", r), Number(r);
    case "number":
      return y(Number.isInteger(r), "underflow", e || "value", r), y(r >= -Cs && r <= Cs, "overflow", e || "value", r), r;
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return H(BigInt(r), e);
      } catch (t) {
        y(!1, `invalid numeric string: ${t.message}`, e || "value", r);
      }
  }
  y(!1, "invalid numeric value", e || "value", r);
}
function Qp(r) {
  return H(za(r));
}
function ar(r, e) {
  let n = Qa(r, "value").toString(16);
  if (e == null)
    n.length % 2 && (n = "0" + n);
  else {
    const s = H(e, "width");
    for (v(s * 2 >= n.length, `value exceeds width (${s} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: r
    }); n.length < s * 2; )
      n = "0" + n;
  }
  return "0x" + n;
}
function Me(r) {
  const e = Qa(r, "value");
  if (e === Wa)
    return new Uint8Array([]);
  let t = e.toString(16);
  t.length % 2 && (t = "0" + t);
  const n = new Uint8Array(t.length / 2);
  for (let s = 0; s < n.length; s++) {
    const i = s * 2;
    n[s] = parseInt(t.substring(i, i + 2), 16);
  }
  return n;
}
function vs(r) {
  let e = O(Ul(r) ? r : Me(r)).substring(2);
  for (; e.startsWith("0"); )
    e = e.substring(1);
  return e === "" && (e = "0"), "0x" + e;
}
const Iu = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
BigInt(0);
const Nu = BigInt(58);
function zp(r) {
  const e = W(r);
  let t = za(e), n = "";
  for (; t; )
    n = Iu[Number(t % Nu)] + n, t /= Nu;
  for (let s = 0; s < e.length && !e[s]; s++)
    n = Iu[0] + n;
  return n;
}
function Jp(r) {
  r = atob(r);
  const e = new Uint8Array(r.length);
  for (let t = 0; t < r.length; t++)
    e[t] = r.charCodeAt(t);
  return W(e);
}
function qp(r) {
  const e = W(r);
  let t = "";
  for (let n = 0; n < e.length; n++)
    t += String.fromCharCode(e[n]);
  return btoa(t);
}
var Ms;
class ld {
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(e, t, n) {
    /**
     *  The event filter.
     */
    A(this, "filter");
    /**
     *  The **EventEmitterable**.
     */
    A(this, "emitter");
    b(this, Ms, void 0);
    p(this, Ms, t), U(this, { emitter: e, filter: n });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    u(this, Ms) != null && await this.emitter.off(this.filter, u(this, Ms));
  }
}
Ms = new WeakMap();
function Zp(r, e, t, n, s) {
  y(!1, `invalid codepoint at offset ${e}; ${r}`, "bytes", t);
}
function ud(r, e, t, n, s) {
  if (r === "BAD_PREFIX" || r === "UNEXPECTED_CONTINUE") {
    let i = 0;
    for (let o = e + 1; o < t.length && t[o] >> 6 === 2; o++)
      i++;
    return i;
  }
  return r === "OVERRUN" ? t.length - e - 1 : 0;
}
function $p(r, e, t, n, s) {
  return r === "OVERLONG" ? (y(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s), n.push(s), 0) : (n.push(65533), ud(r, e, t));
}
const Yp = Object.freeze({
  error: Zp,
  ignore: ud,
  replace: $p
});
function Xp(r, e) {
  e == null && (e = Yp.error);
  const t = W(r, "bytes"), n = [];
  let s = 0;
  for (; s < t.length; ) {
    const i = t[s++];
    if (!(i >> 7)) {
      n.push(i);
      continue;
    }
    let o = null, a = null;
    if ((i & 224) === 192)
      o = 1, a = 127;
    else if ((i & 240) === 224)
      o = 2, a = 2047;
    else if ((i & 248) === 240)
      o = 3, a = 65535;
    else {
      (i & 192) === 128 ? s += e("UNEXPECTED_CONTINUE", s - 1, t, n) : s += e("BAD_PREFIX", s - 1, t, n);
      continue;
    }
    if (s - 1 + o >= t.length) {
      s += e("OVERRUN", s - 1, t, n);
      continue;
    }
    let c = i & (1 << 8 - o - 1) - 1;
    for (let l = 0; l < o; l++) {
      let h = t[s];
      if ((h & 192) != 128) {
        s += e("MISSING_CONTINUE", s, t, n), c = null;
        break;
      }
      c = c << 6 | h & 63, s++;
    }
    if (c !== null) {
      if (c > 1114111) {
        s += e("OUT_OF_RANGE", s - 1 - o, t, n, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        s += e("UTF16_SURROGATE", s - 1 - o, t, n, c);
        continue;
      }
      if (c <= a) {
        s += e("OVERLONG", s - 1 - o, t, n, c);
        continue;
      }
      n.push(c);
    }
  }
  return n;
}
function qt(r, e) {
  y(typeof r == "string", "invalid string value", "str", r);
  let t = [];
  for (let n = 0; n < r.length; n++) {
    const s = r.charCodeAt(n);
    if (s < 128)
      t.push(s);
    else if (s < 2048)
      t.push(s >> 6 | 192), t.push(s & 63 | 128);
    else if ((s & 64512) == 55296) {
      n++;
      const i = r.charCodeAt(n);
      y(n < r.length && (i & 64512) === 56320, "invalid surrogate pair", "str", r);
      const o = 65536 + ((s & 1023) << 10) + (i & 1023);
      t.push(o >> 18 | 240), t.push(o >> 12 & 63 | 128), t.push(o >> 6 & 63 | 128), t.push(o & 63 | 128);
    } else
      t.push(s >> 12 | 224), t.push(s >> 6 & 63 | 128), t.push(s & 63 | 128);
  }
  return new Uint8Array(t);
}
function eg(r) {
  return r.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
}
function Ca(r, e) {
  return eg(Xp(r, e));
}
function hd(r) {
  async function e(t, n) {
    v(n == null || !n.cancelled, "request cancelled before sending", "CANCELLED");
    const s = t.url.split(":")[0].toLowerCase();
    v(s === "http" || s === "https", `unsupported protocol ${s}`, "UNSUPPORTED_OPERATION", {
      info: { protocol: s },
      operation: "request"
    }), v(s === "https" || !t.credentials || t.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
      operation: "request"
    });
    let i = null;
    const o = new AbortController(), a = setTimeout(() => {
      i = re("request timeout", "TIMEOUT"), o.abort();
    }, t.timeout);
    n && n.addListener(() => {
      i = re("request cancelled", "CANCELLED"), o.abort();
    });
    const c = {
      method: t.method,
      headers: new Headers(Array.from(t)),
      body: t.body || void 0,
      signal: o.signal
    };
    let l;
    try {
      l = await fetch(t.url, c);
    } catch (g) {
      throw clearTimeout(a), i || g;
    }
    clearTimeout(a);
    const h = {};
    l.headers.forEach((g, w) => {
      h[w.toLowerCase()] = g;
    });
    const d = await l.arrayBuffer(), f = d == null ? null : new Uint8Array(d);
    return {
      statusCode: l.status,
      statusMessage: l.statusText,
      headers: h,
      body: f
    };
  }
  return e;
}
const tg = 12, ng = 250;
let Su = hd();
const rg = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), sg = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
let Rc = !1;
async function dd(r, e) {
  try {
    const t = r.match(rg);
    if (!t)
      throw new Error("invalid data");
    return new or(200, "OK", {
      "content-type": t[1] || "text/plain"
    }, t[2] ? Jp(t[3]) : og(t[3]));
  } catch {
    return new or(599, "BAD REQUEST (invalid data: URI)", {}, null, new Yt(r));
  }
}
function fd(r) {
  async function e(t, n) {
    try {
      const s = t.match(sg);
      if (!s)
        throw new Error("invalid link");
      return new Yt(`${r}${s[2]}`);
    } catch {
      return new or(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new Yt(t));
    }
  }
  return e;
}
const Qo = {
  data: dd,
  ipfs: fd("https://gateway.ipfs.io/ipfs/")
}, pd = /* @__PURE__ */ new WeakMap();
var vr, Hn;
class ig {
  constructor(e) {
    b(this, vr, void 0);
    b(this, Hn, void 0);
    p(this, vr, []), p(this, Hn, !1), pd.set(e, () => {
      if (!u(this, Hn)) {
        p(this, Hn, !0);
        for (const t of u(this, vr))
          setTimeout(() => {
            t();
          }, 0);
        p(this, vr, []);
      }
    });
  }
  addListener(e) {
    v(!u(this, Hn), "singal already cancelled", "UNSUPPORTED_OPERATION", {
      operation: "fetchCancelSignal.addCancelListener"
    }), u(this, vr).push(e);
  }
  get cancelled() {
    return u(this, Hn);
  }
  checkSignal() {
    v(!this.cancelled, "cancelled", "CANCELLED", {});
  }
}
vr = new WeakMap(), Hn = new WeakMap();
function zo(r) {
  if (r == null)
    throw new Error("missing signal; should not happen");
  return r.checkSignal(), r;
}
var Ds, Us, bt, ln, Fs, Hs, me, Ze, un, Ir, Nr, Sr, Dt, At, Gn, kr, Vi;
const Da = class Da {
  /**
   *  Create a new FetchRequest instance with default values.
   *
   *  Once created, each property may be set before issuing a
   *  ``.send()`` to make the request.
   */
  constructor(e) {
    b(this, kr);
    b(this, Ds, void 0);
    b(this, Us, void 0);
    b(this, bt, void 0);
    b(this, ln, void 0);
    b(this, Fs, void 0);
    b(this, Hs, void 0);
    b(this, me, void 0);
    b(this, Ze, void 0);
    b(this, un, void 0);
    // Hooks
    b(this, Ir, void 0);
    b(this, Nr, void 0);
    b(this, Sr, void 0);
    b(this, Dt, void 0);
    b(this, At, void 0);
    b(this, Gn, void 0);
    p(this, Hs, String(e)), p(this, Ds, !1), p(this, Us, !0), p(this, bt, {}), p(this, ln, ""), p(this, Fs, 3e5), p(this, At, {
      slotInterval: ng,
      maxAttempts: tg
    }), p(this, Gn, null);
  }
  /**
   *  The fetch URL to request.
   */
  get url() {
    return u(this, Hs);
  }
  set url(e) {
    p(this, Hs, String(e));
  }
  /**
   *  The fetch body, if any, to send as the request body. //(default: null)//
   *
   *  When setting a body, the intrinsic ``Content-Type`` is automatically
   *  set and will be used if **not overridden** by setting a custom
   *  header.
   *
   *  If %%body%% is null, the body is cleared (along with the
   *  intrinsic ``Content-Type``).
   *
   *  If %%body%% is a string, the intrinsic ``Content-Type`` is set to
   *  ``text/plain``.
   *
   *  If %%body%% is a Uint8Array, the intrinsic ``Content-Type`` is set to
   *  ``application/octet-stream``.
   *
   *  If %%body%% is any other object, the intrinsic ``Content-Type`` is
   *  set to ``application/json``.
   */
  get body() {
    return u(this, me) == null ? null : new Uint8Array(u(this, me));
  }
  set body(e) {
    if (e == null)
      p(this, me, void 0), p(this, Ze, void 0);
    else if (typeof e == "string")
      p(this, me, qt(e)), p(this, Ze, "text/plain");
    else if (e instanceof Uint8Array)
      p(this, me, e), p(this, Ze, "application/octet-stream");
    else if (typeof e == "object")
      p(this, me, qt(JSON.stringify(e))), p(this, Ze, "application/json");
    else
      throw new Error("invalid body");
  }
  /**
   *  Returns true if the request has a body.
   */
  hasBody() {
    return u(this, me) != null;
  }
  /**
   *  The HTTP method to use when requesting the URI. If no method
   *  has been explicitly set, then ``GET`` is used if the body is
   *  null and ``POST`` otherwise.
   */
  get method() {
    return u(this, ln) ? u(this, ln) : this.hasBody() ? "POST" : "GET";
  }
  set method(e) {
    e == null && (e = ""), p(this, ln, String(e).toUpperCase());
  }
  /**
   *  The headers that will be used when requesting the URI. All
   *  keys are lower-case.
   *
   *  This object is a copy, so any changes will **NOT** be reflected
   *  in the ``FetchRequest``.
   *
   *  To set a header entry, use the ``setHeader`` method.
   */
  get headers() {
    const e = Object.assign({}, u(this, bt));
    return u(this, un) && (e.authorization = `Basic ${qp(qt(u(this, un)))}`), this.allowGzip && (e["accept-encoding"] = "gzip"), e["content-type"] == null && u(this, Ze) && (e["content-type"] = u(this, Ze)), this.body && (e["content-length"] = String(this.body.length)), e;
  }
  /**
   *  Get the header for %%key%%, ignoring case.
   */
  getHeader(e) {
    return this.headers[e.toLowerCase()];
  }
  /**
   *  Set the header for %%key%% to %%value%%. All values are coerced
   *  to a string.
   */
  setHeader(e, t) {
    u(this, bt)[String(e).toLowerCase()] = String(t);
  }
  /**
   *  Clear all headers, resetting all intrinsic headers.
   */
  clearHeaders() {
    p(this, bt, {});
  }
  [Symbol.iterator]() {
    const e = this.headers, t = Object.keys(e);
    let n = 0;
    return {
      next: () => {
        if (n < t.length) {
          const s = t[n++];
          return {
            value: [s, e[s]],
            done: !1
          };
        }
        return { value: void 0, done: !0 };
      }
    };
  }
  /**
   *  The value that will be sent for the ``Authorization`` header.
   *
   *  To set the credentials, use the ``setCredentials`` method.
   */
  get credentials() {
    return u(this, un) || null;
  }
  /**
   *  Sets an ``Authorization`` for %%username%% with %%password%%.
   */
  setCredentials(e, t) {
    y(!e.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), p(this, un, `${e}:${t}`);
  }
  /**
   *  Enable and request gzip-encoded responses. The response will
   *  automatically be decompressed. //(default: true)//
   */
  get allowGzip() {
    return u(this, Us);
  }
  set allowGzip(e) {
    p(this, Us, !!e);
  }
  /**
   *  Allow ``Authentication`` credentials to be sent over insecure
   *  channels. //(default: false)//
   */
  get allowInsecureAuthentication() {
    return !!u(this, Ds);
  }
  set allowInsecureAuthentication(e) {
    p(this, Ds, !!e);
  }
  /**
   *  The timeout (in milliseconds) to wait for a complete response.
   *  //(default: 5 minutes)//
   */
  get timeout() {
    return u(this, Fs);
  }
  set timeout(e) {
    y(e >= 0, "timeout must be non-zero", "timeout", e), p(this, Fs, e);
  }
  /**
   *  This function is called prior to each request, for example
   *  during a redirection or retry in case of server throttling.
   *
   *  This offers an opportunity to populate headers or update
   *  content before sending a request.
   */
  get preflightFunc() {
    return u(this, Ir) || null;
  }
  set preflightFunc(e) {
    p(this, Ir, e);
  }
  /**
   *  This function is called after each response, offering an
   *  opportunity to provide client-level throttling or updating
   *  response data.
   *
   *  Any error thrown in this causes the ``send()`` to throw.
   *
   *  To schedule a retry attempt (assuming the maximum retry limit
   *  has not been reached), use [[response.throwThrottleError]].
   */
  get processFunc() {
    return u(this, Nr) || null;
  }
  set processFunc(e) {
    p(this, Nr, e);
  }
  /**
   *  This function is called on each retry attempt.
   */
  get retryFunc() {
    return u(this, Sr) || null;
  }
  set retryFunc(e) {
    p(this, Sr, e);
  }
  /**
   *  This function is called to fetch content from HTTP and
   *  HTTPS URLs and is platform specific (e.g. nodejs vs
   *  browsers).
   *
   *  This is by default the currently registered global getUrl
   *  function, which can be changed using [[registerGetUrl]].
   *  If this has been set, setting is to ``null`` will cause
   *  this FetchRequest (and any future clones) to revert back to
   *  using the currently registered global getUrl function.
   *
   *  Setting this is generally not necessary, but may be useful
   *  for developers that wish to intercept requests or to
   *  configurege a proxy or other agent.
   */
  get getUrlFunc() {
    return u(this, Gn) || Su;
  }
  set getUrlFunc(e) {
    p(this, Gn, e);
  }
  toString() {
    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${u(this, me) ? O(u(this, me)) : "null"}>`;
  }
  /**
   *  Update the throttle parameters used to determine maximum
   *  attempts and exponential-backoff properties.
   */
  setThrottleParams(e) {
    e.slotInterval != null && (u(this, At).slotInterval = e.slotInterval), e.maxAttempts != null && (u(this, At).maxAttempts = e.maxAttempts);
  }
  /**
   *  Resolves to the response by sending the request.
   */
  send() {
    return v(u(this, Dt) == null, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" }), p(this, Dt, new ig(this)), I(this, kr, Vi).call(this, 0, ku() + this.timeout, 0, this, new or(0, "", {}, null, this));
  }
  /**
   *  Cancels the inflight response, causing a ``CANCELLED``
   *  error to be rejected from the [[send]].
   */
  cancel() {
    v(u(this, Dt) != null, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
    const e = pd.get(this);
    if (!e)
      throw new Error("missing signal; should not happen");
    e();
  }
  /**
   *  Returns a new [[FetchRequest]] that represents the redirection
   *  to %%location%%.
   */
  redirect(e) {
    const t = this.url.split(":")[0].toLowerCase(), n = e.split(":")[0].toLowerCase();
    v(this.method === "GET" && (t !== "https" || n !== "http") && e.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
      operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(e)})`
    });
    const s = new Da(e);
    return s.method = "GET", s.allowGzip = this.allowGzip, s.timeout = this.timeout, p(s, bt, Object.assign({}, u(this, bt))), u(this, me) && p(s, me, new Uint8Array(u(this, me))), p(s, Ze, u(this, Ze)), s;
  }
  /**
   *  Create a new copy of this request.
   */
  clone() {
    const e = new Da(this.url);
    return p(e, ln, u(this, ln)), u(this, me) && p(e, me, u(this, me)), p(e, Ze, u(this, Ze)), p(e, bt, Object.assign({}, u(this, bt))), p(e, un, u(this, un)), this.allowGzip && (e.allowGzip = !0), e.timeout = this.timeout, this.allowInsecureAuthentication && (e.allowInsecureAuthentication = !0), p(e, Ir, u(this, Ir)), p(e, Nr, u(this, Nr)), p(e, Sr, u(this, Sr)), p(e, At, Object.assign({}, u(this, At))), p(e, Gn, u(this, Gn)), e;
  }
  /**
   *  Locks all static configuration for gateways and FetchGetUrlFunc
   *  registration.
   */
  static lockConfig() {
    Rc = !0;
  }
  /**
   *  Get the current Gateway function for %%scheme%%.
   */
  static getGateway(e) {
    return Qo[e.toLowerCase()] || null;
  }
  /**
   *  Use the %%func%% when fetching URIs using %%scheme%%.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGateway(e, t) {
    if (e = e.toLowerCase(), e === "http" || e === "https")
      throw new Error(`cannot intercept ${e}; use registerGetUrl`);
    if (Rc)
      throw new Error("gateways locked");
    Qo[e] = t;
  }
  /**
   *  Use %%getUrl%% when fetching URIs over HTTP and HTTPS requests.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGetUrl(e) {
    if (Rc)
      throw new Error("gateways locked");
    Su = e;
  }
  /**
   *  Creates a getUrl function that fetches content from HTTP and
   *  HTTPS URLs.
   *
   *  The available %%options%% are dependent on the platform
   *  implementation of the default getUrl function.
   *
   *  This is not generally something that is needed, but is useful
   *  when trying to customize simple behaviour when fetching HTTP
   *  content.
   */
  static createGetUrlFunc(e) {
    return hd();
  }
  /**
   *  Creates a function that can "fetch" data URIs.
   *
   *  Note that this is automatically done internally to support
   *  data URIs, so it is not necessary to register it.
   *
   *  This is not generally something that is needed, but may
   *  be useful in a wrapper to perfom custom data URI functionality.
   */
  static createDataGateway() {
    return dd;
  }
  /**
   *  Creates a function that will fetch IPFS (unvalidated) from
   *  a custom gateway baseUrl.
   *
   *  The default IPFS gateway used internally is
   *  ``"https:/\/gateway.ipfs.io/ipfs/"``.
   */
  static createIpfsGatewayFunc(e) {
    return fd(e);
  }
};
Ds = new WeakMap(), Us = new WeakMap(), bt = new WeakMap(), ln = new WeakMap(), Fs = new WeakMap(), Hs = new WeakMap(), me = new WeakMap(), Ze = new WeakMap(), un = new WeakMap(), Ir = new WeakMap(), Nr = new WeakMap(), Sr = new WeakMap(), Dt = new WeakMap(), At = new WeakMap(), Gn = new WeakMap(), kr = new WeakSet(), Vi = async function(e, t, n, s, i) {
  var h, d, f;
  if (e >= u(this, At).maxAttempts)
    return i.makeServerError("exceeded maximum retry limit");
  v(ku() <= t, "timeout", "TIMEOUT", {
    operation: "request.send",
    reason: "timeout",
    request: s
  }), n > 0 && await ag(n);
  let o = this.clone();
  const a = (o.url.split(":")[0] || "").toLowerCase();
  if (a in Qo) {
    const g = await Qo[a](o.url, zo(u(s, Dt)));
    if (g instanceof or) {
      let w = g;
      if (this.processFunc) {
        zo(u(s, Dt));
        try {
          w = await this.processFunc(o, w);
        } catch (m) {
          (m.throttle == null || typeof m.stall != "number") && w.makeServerError("error in post-processing function", m).assertOk();
        }
      }
      return w;
    }
    o = g;
  }
  this.preflightFunc && (o = await this.preflightFunc(o));
  const c = await this.getUrlFunc(o, zo(u(s, Dt)));
  let l = new or(c.statusCode, c.statusMessage, c.headers, c.body, s);
  if (l.statusCode === 301 || l.statusCode === 302) {
    try {
      const g = l.headers.location || "";
      return I(h = o.redirect(g), kr, Vi).call(h, e + 1, t, 0, s, l);
    } catch {
    }
    return l;
  } else if (l.statusCode === 429 && (this.retryFunc == null || await this.retryFunc(o, l, e))) {
    const g = l.headers["retry-after"];
    let w = u(this, At).slotInterval * Math.trunc(Math.random() * Math.pow(2, e));
    return typeof g == "string" && g.match(/^[1-9][0-9]*$/) && (w = parseInt(g)), I(d = o.clone(), kr, Vi).call(d, e + 1, t, w, s, l);
  }
  if (this.processFunc) {
    zo(u(s, Dt));
    try {
      l = await this.processFunc(o, l);
    } catch (g) {
      (g.throttle == null || typeof g.stall != "number") && l.makeServerError("error in post-processing function", g).assertOk();
      let w = u(this, At).slotInterval * Math.trunc(Math.random() * Math.pow(2, e));
      return g.stall >= 0 && (w = g.stall), I(f = o.clone(), kr, Vi).call(f, e + 1, t, w, s, l);
    }
  }
  return l;
};
let Yt = Da;
var uo, ho, fo, $e, Gs, xr;
const fu = class fu {
  constructor(e, t, n, s, i) {
    b(this, uo, void 0);
    b(this, ho, void 0);
    b(this, fo, void 0);
    b(this, $e, void 0);
    b(this, Gs, void 0);
    b(this, xr, void 0);
    p(this, uo, e), p(this, ho, t), p(this, fo, Object.keys(n).reduce((o, a) => (o[a.toLowerCase()] = String(n[a]), o), {})), p(this, $e, s == null ? null : new Uint8Array(s)), p(this, Gs, i || null), p(this, xr, { message: "" });
  }
  toString() {
    return `<FetchResponse status=${this.statusCode} body=${u(this, $e) ? O(u(this, $e)) : "null"}>`;
  }
  /**
   *  The response status code.
   */
  get statusCode() {
    return u(this, uo);
  }
  /**
   *  The response status message.
   */
  get statusMessage() {
    return u(this, ho);
  }
  /**
   *  The response headers. All keys are lower-case.
   */
  get headers() {
    return Object.assign({}, u(this, fo));
  }
  /**
   *  The response body, or ``null`` if there was no body.
   */
  get body() {
    return u(this, $e) == null ? null : new Uint8Array(u(this, $e));
  }
  /**
   *  The response body as a UTF-8 encoded string, or the empty
   *  string (i.e. ``""``) if there was no body.
   *
   *  An error is thrown if the body is invalid UTF-8 data.
   */
  get bodyText() {
    try {
      return u(this, $e) == null ? "" : Ca(u(this, $e));
    } catch {
      v(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
        operation: "bodyText",
        info: { response: this }
      });
    }
  }
  /**
   *  The response body, decoded as JSON.
   *
   *  An error is thrown if the body is invalid JSON-encoded data
   *  or if there was no body.
   */
  get bodyJson() {
    try {
      return JSON.parse(this.bodyText);
    } catch {
      v(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
        operation: "bodyJson",
        info: { response: this }
      });
    }
  }
  [Symbol.iterator]() {
    const e = this.headers, t = Object.keys(e);
    let n = 0;
    return {
      next: () => {
        if (n < t.length) {
          const s = t[n++];
          return {
            value: [s, e[s]],
            done: !1
          };
        }
        return { value: void 0, done: !0 };
      }
    };
  }
  /**
   *  Return a Response with matching headers and body, but with
   *  an error status code (i.e. 599) and %%message%% with an
   *  optional %%error%%.
   */
  makeServerError(e, t) {
    let n;
    e ? n = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${e})` : (e = `${this.statusCode} ${this.statusMessage}`, n = `CLIENT ESCALATED SERVER ERROR (${e})`);
    const s = new fu(599, n, this.headers, this.body, u(this, Gs) || void 0);
    return p(s, xr, { message: e, error: t }), s;
  }
  /**
   *  If called within a [request.processFunc](FetchRequest-processFunc)
   *  call, causes the request to retry as if throttled for %%stall%%
   *  milliseconds.
   */
  throwThrottleError(e, t) {
    t == null ? t = -1 : y(Number.isInteger(t) && t >= 0, "invalid stall timeout", "stall", t);
    const n = new Error(e || "throttling requests");
    throw U(n, { stall: t, throttle: !0 }), n;
  }
  /**
   *  Get the header value for %%key%%, ignoring case.
   */
  getHeader(e) {
    return this.headers[e.toLowerCase()];
  }
  /**
   *  Returns true if the response has a body.
   */
  hasBody() {
    return u(this, $e) != null;
  }
  /**
   *  The request made for this response.
   */
  get request() {
    return u(this, Gs);
  }
  /**
   *  Returns true if this response was a success statusCode.
   */
  ok() {
    return u(this, xr).message === "" && this.statusCode >= 200 && this.statusCode < 300;
  }
  /**
   *  Throws a ``SERVER_ERROR`` if this response is not ok.
   */
  assertOk() {
    if (this.ok())
      return;
    let { message: e, error: t } = u(this, xr);
    e === "" && (e = `server response ${this.statusCode} ${this.statusMessage}`);
    let n = null;
    this.request && (n = this.request.url);
    let s = null;
    try {
      u(this, $e) && (s = Ca(u(this, $e)));
    } catch {
    }
    v(!1, e, "SERVER_ERROR", {
      request: this.request || "unknown request",
      response: this,
      error: t,
      info: {
        requestUrl: n,
        responseBody: s,
        responseStatus: `${this.statusCode} ${this.statusMessage}`
      }
    });
  }
};
uo = new WeakMap(), ho = new WeakMap(), fo = new WeakMap(), $e = new WeakMap(), Gs = new WeakMap(), xr = new WeakMap();
let or = fu;
function ku() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function og(r) {
  return qt(r.replace(/%([0-9a-f][0-9a-f])/gi, (e, t) => String.fromCharCode(parseInt(t, 16))));
}
function ag(r) {
  return new Promise((e) => setTimeout(e, r));
}
const cg = BigInt(-1), mt = BigInt(0), Is = BigInt(1), lg = BigInt(5), us = {};
let Rs = "0000";
for (; Rs.length < 80; )
  Rs += Rs;
function ur(r) {
  let e = Rs;
  for (; e.length < r; )
    e += e;
  return BigInt("1" + e.substring(0, r));
}
function Hi(r, e, t) {
  const n = BigInt(e.width);
  if (e.signed) {
    const s = Is << n - Is;
    v(t == null || r >= -s && r < s, "overflow", "NUMERIC_FAULT", {
      operation: t,
      fault: "overflow",
      value: r
    }), r > mt ? r = Ea(br(r, n), n) : r = -Ea(br(-r, n), n);
  } else {
    const s = Is << n;
    v(t == null || r >= 0 && r < s, "overflow", "NUMERIC_FAULT", {
      operation: t,
      fault: "overflow",
      value: r
    }), r = (r % s + s) % s & s - Is;
  }
  return r;
}
function Oc(r) {
  typeof r == "number" && (r = `fixed128x${r}`);
  let e = !0, t = 128, n = 18;
  if (typeof r == "string") {
    if (r !== "fixed")
      if (r === "ufixed")
        e = !1;
      else {
        const i = r.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
        y(i, "invalid fixed format", "format", r), e = i[1] !== "u", t = parseInt(i[2]), n = parseInt(i[3]);
      }
  } else if (r) {
    const i = r, o = (a, c, l) => i[a] == null ? l : (y(typeof i[a] === c, "invalid fixed format (" + a + " not " + c + ")", "format." + a, i[a]), i[a]);
    e = o("signed", "boolean", e), t = o("width", "number", t), n = o("decimals", "number", n);
  }
  y(t % 8 === 0, "invalid FixedNumber width (not byte aligned)", "format.width", t), y(n <= 80, "invalid FixedNumber decimals (too large)", "format.decimals", n);
  const s = (e ? "" : "u") + "fixed" + String(t) + "x" + String(n);
  return { signed: e, width: t, decimals: n, name: s };
}
function ug(r, e) {
  let t = "";
  r < mt && (t = "-", r *= cg);
  let n = r.toString();
  if (e === 0)
    return t + n;
  for (; n.length <= e; )
    n = Rs + n;
  const s = n.length - e;
  for (n = n.substring(0, s) + "." + n.substring(s); n[0] === "0" && n[1] !== "."; )
    n = n.substring(1);
  for (; n[n.length - 1] === "0" && n[n.length - 2] !== "."; )
    n = n.substring(0, n.length - 1);
  return t + n;
}
var Et, Z, Re, hn, hr, Ct, nn, po, tl, go, nl, mo, rl, yo, sl;
const Fn = class Fn {
  // Use this when changing this file to get some typing info,
  // but then switch to any to mask the internal type
  //constructor(guard: any, value: bigint, format: _FixedFormat) {
  /**
   *  @private
   */
  constructor(e, t, n) {
    b(this, hn);
    b(this, Ct);
    b(this, po);
    b(this, go);
    b(this, mo);
    b(this, yo);
    /**
     *  The specific fixed-point arithmetic field for this value.
     */
    A(this, "format");
    b(this, Et, void 0);
    // The actual value (accounting for decimals)
    b(this, Z, void 0);
    // A base-10 value to multiple values by to maintain the magnitude
    b(this, Re, void 0);
    /**
     *  This is a property so console.log shows a human-meaningful value.
     *
     *  @private
     */
    A(this, "_value");
    Lo(e, us, "FixedNumber"), p(this, Z, t), p(this, Et, n);
    const s = ug(t, n.decimals);
    U(this, { format: n.name, _value: s }), p(this, Re, ur(n.decimals));
  }
  /**
   *  If true, negative values are permitted, otherwise only
   *  positive values and zero are allowed.
   */
  get signed() {
    return u(this, Et).signed;
  }
  /**
   *  The number of bits available to store the value.
   */
  get width() {
    return u(this, Et).width;
  }
  /**
   *  The number of decimal places in the fixed-point arithment field.
   */
  get decimals() {
    return u(this, Et).decimals;
  }
  /**
   *  The value as an integer, based on the smallest unit the
   *  [[decimals]] allow.
   */
  get value() {
    return u(this, Z);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% added
   *  to %%other%%, ignoring overflow.
   */
  addUnsafe(e) {
    return I(this, po, tl).call(this, e);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% added
   *  to %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  add(e) {
    return I(this, po, tl).call(this, e, "add");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
   *  from %%this%%, ignoring overflow.
   */
  subUnsafe(e) {
    return I(this, go, nl).call(this, e);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
   *  from %%this%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  sub(e) {
    return I(this, go, nl).call(this, e, "sub");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%, ignoring overflow and underflow (precision loss).
   */
  mulUnsafe(e) {
    return I(this, mo, rl).call(this, e);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  mul(e) {
    return I(this, mo, rl).call(this, e, "mul");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs or if underflow (precision loss) occurs.
   */
  mulSignal(e) {
    I(this, hn, hr).call(this, e);
    const t = u(this, Z) * u(e, Z);
    return v(t % u(this, Re) === mt, "precision lost during signalling mul", "NUMERIC_FAULT", {
      operation: "mulSignal",
      fault: "underflow",
      value: this
    }), I(this, Ct, nn).call(this, t / u(this, Re), "mulSignal");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%, ignoring underflow (precision loss). A
   *  [[NumericFaultError]] is thrown if overflow occurs.
   */
  divUnsafe(e) {
    return I(this, yo, sl).call(this, e);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%, ignoring underflow (precision loss). A
   *  [[NumericFaultError]] is thrown if overflow occurs.
   */
  div(e) {
    return I(this, yo, sl).call(this, e, "div");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%. A [[NumericFaultError]] is thrown if underflow
   *  (precision loss) occurs.
   */
  divSignal(e) {
    v(u(e, Z) !== mt, "division by zero", "NUMERIC_FAULT", {
      operation: "div",
      fault: "divide-by-zero",
      value: this
    }), I(this, hn, hr).call(this, e);
    const t = u(this, Z) * u(this, Re);
    return v(t % u(e, Z) === mt, "precision lost during signalling div", "NUMERIC_FAULT", {
      operation: "divSignal",
      fault: "underflow",
      value: this
    }), I(this, Ct, nn).call(this, t / u(e, Z), "divSignal");
  }
  /**
   *  Returns a comparison result between %%this%% and %%other%%.
   *
   *  This is suitable for use in sorting, where ``-1`` implies %%this%%
   *  is smaller, ``1`` implies %%this%% is larger and ``0`` implies
   *  both are equal.
   */
  cmp(e) {
    let t = this.value, n = e.value;
    const s = this.decimals - e.decimals;
    return s > 0 ? n *= ur(s) : s < 0 && (t *= ur(-s)), t < n ? -1 : t > n ? 1 : 0;
  }
  /**
   *  Returns true if %%other%% is equal to %%this%%.
   */
  eq(e) {
    return this.cmp(e) === 0;
  }
  /**
   *  Returns true if %%other%% is less than to %%this%%.
   */
  lt(e) {
    return this.cmp(e) < 0;
  }
  /**
   *  Returns true if %%other%% is less than or equal to %%this%%.
   */
  lte(e) {
    return this.cmp(e) <= 0;
  }
  /**
   *  Returns true if %%other%% is greater than to %%this%%.
   */
  gt(e) {
    return this.cmp(e) > 0;
  }
  /**
   *  Returns true if %%other%% is greater than or equal to %%this%%.
   */
  gte(e) {
    return this.cmp(e) >= 0;
  }
  /**
   *  Returns a new [[FixedNumber]] which is the largest **integer**
   *  that is less than or equal to %%this%%.
   *
   *  The decimal component of the result will always be ``0``.
   */
  floor() {
    let e = u(this, Z);
    return u(this, Z) < mt && (e -= u(this, Re) - Is), e = u(this, Z) / u(this, Re) * u(this, Re), I(this, Ct, nn).call(this, e, "floor");
  }
  /**
   *  Returns a new [[FixedNumber]] which is the smallest **integer**
   *  that is greater than or equal to %%this%%.
   *
   *  The decimal component of the result will always be ``0``.
   */
  ceiling() {
    let e = u(this, Z);
    return u(this, Z) > mt && (e += u(this, Re) - Is), e = u(this, Z) / u(this, Re) * u(this, Re), I(this, Ct, nn).call(this, e, "ceiling");
  }
  /**
   *  Returns a new [[FixedNumber]] with the decimal component
   *  rounded up on ties at %%decimals%% places.
   */
  round(e) {
    if (e == null && (e = 0), e >= this.decimals)
      return this;
    const t = this.decimals - e, n = lg * ur(t - 1);
    let s = this.value + n;
    const i = ur(t);
    return s = s / i * i, Hi(s, u(this, Et), "round"), new Fn(us, s, u(this, Et));
  }
  /**
   *  Returns true if %%this%% is equal to ``0``.
   */
  isZero() {
    return u(this, Z) === mt;
  }
  /**
   *  Returns true if %%this%% is less than ``0``.
   */
  isNegative() {
    return u(this, Z) < mt;
  }
  /**
   *  Returns the string representation of %%this%%.
   */
  toString() {
    return this._value;
  }
  /**
   *  Returns a float approximation.
   *
   *  Due to IEEE 754 precission (or lack thereof), this function
   *  can only return an approximation and most values will contain
   *  rounding errors.
   */
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  /**
   *  Return a new [[FixedNumber]] with the same value but has had
   *  its field set to %%format%%.
   *
   *  This will throw if the value cannot fit into %%format%%.
   */
  toFormat(e) {
    return Fn.fromString(this.toString(), e);
  }
  /**
   *  Creates a new [[FixedNumber]] for %%value%% divided by
   *  %%decimal%% places with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% (once adjusted
   *  for %%decimals%%) cannot fit in %%format%%, either due to overflow
   *  or underflow (precision loss).
   */
  static fromValue(e, t, n) {
    const s = t == null ? 0 : H(t), i = Oc(n);
    let o = T(e, "value");
    const a = s - i.decimals;
    if (a > 0) {
      const c = ur(a);
      v(o % c === mt, "value loses precision for format", "NUMERIC_FAULT", {
        operation: "fromValue",
        fault: "underflow",
        value: e
      }), o /= c;
    } else
      a < 0 && (o *= ur(-a));
    return Hi(o, i, "fromValue"), new Fn(us, o, i);
  }
  /**
   *  Creates a new [[FixedNumber]] for %%value%% with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
   *  in %%format%%, either due to overflow or underflow (precision loss).
   */
  static fromString(e, t) {
    const n = e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
    y(n && n[2].length + n[3].length > 0, "invalid FixedNumber string value", "value", e);
    const s = Oc(t);
    let i = n[2] || "0", o = n[3] || "";
    for (; o.length < s.decimals; )
      o += Rs;
    v(o.substring(s.decimals).match(/^0*$/), "too many decimals for format", "NUMERIC_FAULT", {
      operation: "fromString",
      fault: "underflow",
      value: e
    }), o = o.substring(0, s.decimals);
    const a = BigInt(n[1] + i + o);
    return Hi(a, s, "fromString"), new Fn(us, a, s);
  }
  /**
   *  Creates a new [[FixedNumber]] with the big-endian representation
   *  %%value%% with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
   *  in %%format%% due to overflow.
   */
  static fromBytes(e, t) {
    let n = za(W(e, "value"));
    const s = Oc(t);
    return s.signed && (n = Ea(n, s.width)), Hi(n, s, "fromBytes"), new Fn(us, n, s);
  }
};
Et = new WeakMap(), Z = new WeakMap(), Re = new WeakMap(), hn = new WeakSet(), hr = function(e) {
  y(this.format === e.format, "incompatible format; use fixedNumber.toFormat", "other", e);
}, Ct = new WeakSet(), nn = function(e, t) {
  return e = Hi(e, u(this, Et), t), new Fn(us, e, u(this, Et));
}, po = new WeakSet(), tl = function(e, t) {
  return I(this, hn, hr).call(this, e), I(this, Ct, nn).call(this, u(this, Z) + u(e, Z), t);
}, go = new WeakSet(), nl = function(e, t) {
  return I(this, hn, hr).call(this, e), I(this, Ct, nn).call(this, u(this, Z) - u(e, Z), t);
}, mo = new WeakSet(), rl = function(e, t) {
  return I(this, hn, hr).call(this, e), I(this, Ct, nn).call(this, u(this, Z) * u(e, Z) / u(this, Re), t);
}, yo = new WeakSet(), sl = function(e, t) {
  return v(u(e, Z) !== mt, "division by zero", "NUMERIC_FAULT", {
    operation: "div",
    fault: "divide-by-zero",
    value: this
  }), I(this, hn, hr).call(this, e), I(this, Ct, nn).call(this, u(this, Z) * u(this, Re) / u(e, Z), t);
};
let va = Fn;
function hg(r) {
  let e = r.toString(16);
  for (; e.length < 2; )
    e = "0" + e;
  return "0x" + e;
}
function xu(r, e, t) {
  let n = 0;
  for (let s = 0; s < t; s++)
    n = n * 256 + r[e + s];
  return n;
}
function Pu(r, e, t, n) {
  const s = [];
  for (; t < e + 1 + n; ) {
    const i = gd(r, t);
    s.push(i.result), t += i.consumed, v(t <= e + 1 + n, "child data too short", "BUFFER_OVERRUN", {
      buffer: r,
      length: n,
      offset: e
    });
  }
  return { consumed: 1 + n, result: s };
}
function gd(r, e) {
  v(r.length !== 0, "data too short", "BUFFER_OVERRUN", {
    buffer: r,
    length: 0,
    offset: 1
  });
  const t = (n) => {
    v(n <= r.length, "data short segment too short", "BUFFER_OVERRUN", {
      buffer: r,
      length: r.length,
      offset: n
    });
  };
  if (r[e] >= 248) {
    const n = r[e] - 247;
    t(e + 1 + n);
    const s = xu(r, e + 1, n);
    return t(e + 1 + n + s), Pu(r, e, e + 1 + n, n + s);
  } else if (r[e] >= 192) {
    const n = r[e] - 192;
    return t(e + 1 + n), Pu(r, e, e + 1, n);
  } else if (r[e] >= 184) {
    const n = r[e] - 183;
    t(e + 1 + n);
    const s = xu(r, e + 1, n);
    t(e + 1 + n + s);
    const i = O(r.slice(e + 1 + n, e + 1 + n + s));
    return { consumed: 1 + n + s, result: i };
  } else if (r[e] >= 128) {
    const n = r[e] - 128;
    t(e + 1 + n);
    const s = O(r.slice(e + 1, e + 1 + n));
    return { consumed: 1 + n, result: s };
  }
  return { consumed: 1, result: hg(r[e]) };
}
function Ja(r) {
  const e = W(r, "data"), t = gd(e, 0);
  return y(t.consumed === e.length, "unexpected junk after rlp payload", "data", r), t.result;
}
function Ru(r) {
  const e = [];
  for (; r; )
    e.unshift(r & 255), r >>= 8;
  return e;
}
function md(r) {
  if (Array.isArray(r)) {
    let n = [];
    if (r.forEach(function(i) {
      n = n.concat(md(i));
    }), n.length <= 55)
      return n.unshift(192 + n.length), n;
    const s = Ru(n.length);
    return s.unshift(247 + s.length), s.concat(n);
  }
  const e = Array.prototype.slice.call(W(r, "object"));
  if (e.length === 1 && e[0] <= 127)
    return e;
  if (e.length <= 55)
    return e.unshift(128 + e.length), e;
  const t = Ru(e.length);
  return t.unshift(183 + t.length), t.concat(e);
}
const Ou = "0123456789abcdef";
function $r(r) {
  let e = "0x";
  for (const t of md(r))
    e += Ou[t >> 4], e += Ou[t & 15];
  return e;
}
const yd = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];
function wd(r, e) {
  let t = 18;
  if (typeof e == "string") {
    const n = yd.indexOf(e);
    y(n >= 0, "invalid unit", "unit", e), t = 3 * n;
  } else
    e != null && (t = H(e, "unit"));
  return va.fromValue(r, t, { decimals: t, width: 512 }).toString();
}
function dg(r, e) {
  y(typeof r == "string", "value must be a string", "value", r);
  let t = 18;
  if (typeof e == "string") {
    const n = yd.indexOf(e);
    y(n >= 0, "invalid unit", "unit", e), t = 3 * n;
  } else
    e != null && (t = H(e, "unit"));
  return va.fromString(r, { decimals: t, width: 512 }).value;
}
function fg(r) {
  return wd(r, 18);
}
const De = 32, il = new Uint8Array(De), pg = ["then"], Jo = {}, bd = /* @__PURE__ */ new WeakMap();
function fr(r) {
  return bd.get(r);
}
function Tu(r, e) {
  bd.set(r, e);
}
function Gi(r, e) {
  const t = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
  throw t.error = e, t;
}
function ol(r, e, t) {
  return r.indexOf(null) >= 0 ? e.map((n, s) => n instanceof Si ? ol(fr(n), n, t) : n) : r.reduce((n, s, i) => {
    let o = e.getValue(s);
    return s in n || (t && o instanceof Si && (o = ol(fr(o), o, t)), n[s] = o), n;
  }, {});
}
var Ks;
const Ss = class Ss extends Array {
  /**
   *  @private
   */
  constructor(...t) {
    const n = t[0];
    let s = t[1], i = (t[2] || []).slice(), o = !0;
    n !== Jo && (s = t, i = [], o = !1);
    super(s.length);
    // No longer used; but cannot be removed as it will remove the
    // #private field from the .d.ts which may break backwards
    // compatibility
    b(this, Ks, void 0);
    s.forEach((l, h) => {
      this[h] = l;
    });
    const a = i.reduce((l, h) => (typeof h == "string" && l.set(h, (l.get(h) || 0) + 1), l), /* @__PURE__ */ new Map());
    if (Tu(this, Object.freeze(s.map((l, h) => {
      const d = i[h];
      return d != null && a.get(d) === 1 ? d : null;
    }))), p(this, Ks, []), u(this, Ks) == null && u(this, Ks), !o)
      return;
    Object.freeze(this);
    const c = new Proxy(this, {
      get: (l, h, d) => {
        if (typeof h == "string") {
          if (h.match(/^[0-9]+$/)) {
            const g = H(h, "%index");
            if (g < 0 || g >= this.length)
              throw new RangeError("out of result range");
            const w = l[g];
            return w instanceof Error && Gi(`index ${g}`, w), w;
          }
          if (pg.indexOf(h) >= 0)
            return Reflect.get(l, h, d);
          const f = l[h];
          if (f instanceof Function)
            return function(...g) {
              return f.apply(this === d ? l : this, g);
            };
          if (!(h in l))
            return l.getValue.apply(this === d ? l : this, [h]);
        }
        return Reflect.get(l, h, d);
      }
    });
    return Tu(c, fr(this)), c;
  }
  /**
   *  Returns the Result as a normal Array. If %%deep%%, any children
   *  which are Result objects are also converted to a normal Array.
   *
   *  This will throw if there are any outstanding deferred
   *  errors.
   */
  toArray(t) {
    const n = [];
    return this.forEach((s, i) => {
      s instanceof Error && Gi(`index ${i}`, s), t && s instanceof Ss && (s = s.toArray(t)), n.push(s);
    }), n;
  }
  /**
   *  Returns the Result as an Object with each name-value pair. If
   *  %%deep%%, any children which are Result objects are also
   *  converted to an Object.
   *
   *  This will throw if any value is unnamed, or if there are
   *  any outstanding deferred errors.
   */
  toObject(t) {
    const n = fr(this);
    return n.reduce((s, i, o) => (v(i != null, `value at index ${o} unnamed`, "UNSUPPORTED_OPERATION", {
      operation: "toObject()"
    }), ol(n, this, t)), {});
  }
  /**
   *  @_ignore
   */
  slice(t, n) {
    t == null && (t = 0), t < 0 && (t += this.length, t < 0 && (t = 0)), n == null && (n = this.length), n < 0 && (n += this.length, n < 0 && (n = 0)), n > this.length && (n = this.length);
    const s = fr(this), i = [], o = [];
    for (let a = t; a < n; a++)
      i.push(this[a]), o.push(s[a]);
    return new Ss(Jo, i, o);
  }
  /**
   *  @_ignore
   */
  filter(t, n) {
    const s = fr(this), i = [], o = [];
    for (let a = 0; a < this.length; a++) {
      const c = this[a];
      c instanceof Error && Gi(`index ${a}`, c), t.call(n, c, a, this) && (i.push(c), o.push(s[a]));
    }
    return new Ss(Jo, i, o);
  }
  /**
   *  @_ignore
   */
  map(t, n) {
    const s = [];
    for (let i = 0; i < this.length; i++) {
      const o = this[i];
      o instanceof Error && Gi(`index ${i}`, o), s.push(t.call(n, o, i, this));
    }
    return s;
  }
  /**
   *  Returns the value for %%name%%.
   *
   *  Since it is possible to have a key whose name conflicts with
   *  a method on a [[Result]] or its superclass Array, or any
   *  JavaScript keyword, this ensures all named values are still
   *  accessible by name.
   */
  getValue(t) {
    const n = fr(this).indexOf(t);
    if (n === -1)
      return;
    const s = this[n];
    return s instanceof Error && Gi(`property ${JSON.stringify(t)}`, s.error), s;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(t, n) {
    return new Ss(Jo, t, n);
  }
};
Ks = new WeakMap();
let Si = Ss;
function _u(r) {
  let e = Me(r);
  return v(e.length <= De, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: e, length: De, offset: e.length }), e.length !== De && (e = Le(ue([il.slice(e.length % De), e]))), e;
}
class kn {
  constructor(e, t, n, s) {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    A(this, "name");
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    A(this, "type");
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    A(this, "localName");
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    A(this, "dynamic");
    U(this, { name: e, type: t, localName: n, dynamic: s }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(e, t) {
    y(!1, e, this.localName, t);
  }
}
var dn, Pr, js, la;
class al {
  constructor() {
    b(this, js);
    // An array of WordSize lengthed objects to concatenation
    b(this, dn, void 0);
    b(this, Pr, void 0);
    p(this, dn, []), p(this, Pr, 0);
  }
  get data() {
    return ue(u(this, dn));
  }
  get length() {
    return u(this, Pr);
  }
  appendWriter(e) {
    return I(this, js, la).call(this, Le(e.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(e) {
    let t = Le(e);
    const n = t.length % De;
    return n && (t = Le(ue([t, il.slice(n)]))), I(this, js, la).call(this, t);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(e) {
    return I(this, js, la).call(this, _u(e));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const e = u(this, dn).length;
    return u(this, dn).push(il), p(this, Pr, u(this, Pr) + De), (t) => {
      u(this, dn)[e] = _u(t);
    };
  }
}
dn = new WeakMap(), Pr = new WeakMap(), js = new WeakSet(), la = function(e) {
  return u(this, dn).push(e), p(this, Pr, u(this, Pr) + e.length), e.length;
};
var Ge, Ye, Rr, Or, Kn, wo, ll, Ua, Ad;
const pu = class pu {
  constructor(e, t, n) {
    b(this, wo);
    b(this, Ua);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    A(this, "allowLoose");
    b(this, Ge, void 0);
    b(this, Ye, void 0);
    b(this, Rr, void 0);
    b(this, Or, void 0);
    b(this, Kn, void 0);
    U(this, { allowLoose: !!t }), p(this, Ge, Le(e)), p(this, Rr, 0), p(this, Or, null), p(this, Kn, n ?? 1024), p(this, Ye, 0);
  }
  get data() {
    return O(u(this, Ge));
  }
  get dataLength() {
    return u(this, Ge).length;
  }
  get consumed() {
    return u(this, Ye);
  }
  get bytes() {
    return new Uint8Array(u(this, Ge));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(e) {
    const t = new pu(u(this, Ge).slice(u(this, Ye) + e), this.allowLoose, u(this, Kn));
    return p(t, Or, this), t;
  }
  // Read bytes
  readBytes(e, t) {
    let n = I(this, Ua, Ad).call(this, 0, e, !!t);
    return I(this, wo, ll).call(this, e), p(this, Ye, u(this, Ye) + n.length), n.slice(0, e);
  }
  // Read a numeric values
  readValue() {
    return za(this.readBytes(De));
  }
  readIndex() {
    return Qp(this.readBytes(De));
  }
};
Ge = new WeakMap(), Ye = new WeakMap(), Rr = new WeakMap(), Or = new WeakMap(), Kn = new WeakMap(), wo = new WeakSet(), ll = function(e) {
  var t;
  if (u(this, Or))
    return I(t = u(this, Or), wo, ll).call(t, e);
  p(this, Rr, u(this, Rr) + e), v(u(this, Kn) < 1 || u(this, Rr) <= u(this, Kn) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${u(this, Kn)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
    buffer: Le(u(this, Ge)),
    offset: u(this, Ye),
    length: e,
    info: {
      bytesRead: u(this, Rr),
      dataLength: this.dataLength
    }
  });
}, Ua = new WeakSet(), Ad = function(e, t, n) {
  let s = Math.ceil(t / De) * De;
  return u(this, Ye) + s > u(this, Ge).length && (this.allowLoose && n && u(this, Ye) + t <= u(this, Ge).length ? s = t : v(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
    buffer: Le(u(this, Ge)),
    length: u(this, Ge).length,
    offset: u(this, Ye) + s
  })), u(this, Ge).slice(u(this, Ye), u(this, Ye) + s);
};
let cl = pu;
function Ia(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function Fl(r, ...e) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(r.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${r.length}`);
}
function gg(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Ia(r.outputLen), Ia(r.blockLen);
}
function ki(r, e = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function Ed(r, e) {
  Fl(r);
  const t = e.outputLen;
  if (r.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
const Tc = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Cd = (r) => r instanceof Uint8Array, mg = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), _c = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength), Bt = (r, e) => r << 32 - e | r >>> e, yg = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!yg)
  throw new Error("Non little-endian hardware is not supported");
function wg(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function qa(r) {
  if (typeof r == "string" && (r = wg(r)), !Cd(r))
    throw new Error(`expected Uint8Array, got ${typeof r}`);
  return r;
}
function bg(...r) {
  const e = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let t = 0;
  return r.forEach((n) => {
    if (!Cd(n))
      throw new Error("Uint8Array expected");
    e.set(n, t), t += n.length;
  }), e;
}
class Hl {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Gl(r) {
  const e = (n) => r().update(qa(n)).digest(), t = r();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => r(), e;
}
function Ag(r = 32) {
  if (Tc && typeof Tc.getRandomValues == "function")
    return Tc.getRandomValues(new Uint8Array(r));
  throw new Error("crypto.getRandomValues must be defined");
}
class vd extends Hl {
  constructor(e, t) {
    super(), this.finished = !1, this.destroyed = !1, gg(e);
    const n = qa(t);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, i = new Uint8Array(s);
    i.set(n.length > s ? e.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++)
      i[o] ^= 54;
    this.iHash.update(i), this.oHash = e.create();
    for (let o = 0; o < i.length; o++)
      i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(e) {
    return ki(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    ki(this), Fl(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: t, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: a } = this;
    return e = e, e.finished = s, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = t._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const Id = (r, e, t) => new vd(r, e).update(t).digest();
Id.create = (r, e) => new vd(r, e);
function Eg(r, e, t, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(e, t, n);
  const s = BigInt(32), i = BigInt(4294967295), o = Number(t >> s & i), a = Number(t & i), c = n ? 4 : 0, l = n ? 0 : 4;
  r.setUint32(e + c, o, n), r.setUint32(e + l, a, n);
}
class Nd extends Hl {
  constructor(e, t, n, s) {
    super(), this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = _c(this.buffer);
  }
  update(e) {
    ki(this);
    const { view: t, buffer: n, blockLen: s } = this;
    e = qa(e);
    const i = e.length;
    for (let o = 0; o < i; ) {
      const a = Math.min(s - this.pos, i - o);
      if (a === s) {
        const c = _c(e);
        for (; s <= i - o; o += s)
          this.process(c, o);
        continue;
      }
      n.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === s && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    ki(this), Ed(e, this), this.finished = !0;
    const { buffer: t, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    t[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > s - o && (this.process(n, 0), o = 0);
    for (let d = o; d < s; d++)
      t[d] = 0;
    Eg(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const a = _c(e), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l = c / 4, h = this.get();
    if (l > h.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < l; d++)
      a.setUint32(4 * d, h[d], i);
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const n = e.slice(0, t);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: n, length: s, finished: i, destroyed: o, pos: a } = this;
    return e.length = s, e.pos = a, e.finished = i, e.destroyed = o, s % t && e.buffer.set(n), e;
  }
}
const Cg = (r, e, t) => r & e ^ ~r & t, vg = (r, e, t) => r & e ^ r & t ^ e & t, Ig = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), _n = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Bn = /* @__PURE__ */ new Uint32Array(64);
class Ng extends Nd {
  constructor() {
    super(64, 32, 8, !1), this.A = _n[0] | 0, this.B = _n[1] | 0, this.C = _n[2] | 0, this.D = _n[3] | 0, this.E = _n[4] | 0, this.F = _n[5] | 0, this.G = _n[6] | 0, this.H = _n[7] | 0;
  }
  get() {
    const { A: e, B: t, C: n, D: s, E: i, F: o, G: a, H: c } = this;
    return [e, t, n, s, i, o, a, c];
  }
  // prettier-ignore
  set(e, t, n, s, i, o, a, c) {
    this.A = e | 0, this.B = t | 0, this.C = n | 0, this.D = s | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(e, t) {
    for (let d = 0; d < 16; d++, t += 4)
      Bn[d] = e.getUint32(t, !1);
    for (let d = 16; d < 64; d++) {
      const f = Bn[d - 15], g = Bn[d - 2], w = Bt(f, 7) ^ Bt(f, 18) ^ f >>> 3, m = Bt(g, 17) ^ Bt(g, 19) ^ g >>> 10;
      Bn[d] = m + Bn[d - 7] + w + Bn[d - 16] | 0;
    }
    let { A: n, B: s, C: i, D: o, E: a, F: c, G: l, H: h } = this;
    for (let d = 0; d < 64; d++) {
      const f = Bt(a, 6) ^ Bt(a, 11) ^ Bt(a, 25), g = h + f + Cg(a, c, l) + Ig[d] + Bn[d] | 0, m = (Bt(n, 2) ^ Bt(n, 13) ^ Bt(n, 22)) + vg(n, s, i) | 0;
      h = l, l = c, c = a, a = o + g | 0, o = i, i = s, s = n, n = g + m | 0;
    }
    n = n + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, h = h + this.H | 0, this.set(n, s, i, o, a, c, l, h);
  }
  roundClean() {
    Bn.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Sd = /* @__PURE__ */ Gl(() => new Ng()), qo = /* @__PURE__ */ BigInt(2 ** 32 - 1), ul = /* @__PURE__ */ BigInt(32);
function kd(r, e = !1) {
  return e ? { h: Number(r & qo), l: Number(r >> ul & qo) } : { h: Number(r >> ul & qo) | 0, l: Number(r & qo) | 0 };
}
function xd(r, e = !1) {
  let t = new Uint32Array(r.length), n = new Uint32Array(r.length);
  for (let s = 0; s < r.length; s++) {
    const { h: i, l: o } = kd(r[s], e);
    [t[s], n[s]] = [i, o];
  }
  return [t, n];
}
const Sg = (r, e) => BigInt(r >>> 0) << ul | BigInt(e >>> 0), kg = (r, e, t) => r >>> t, xg = (r, e, t) => r << 32 - t | e >>> t, Pg = (r, e, t) => r >>> t | e << 32 - t, Rg = (r, e, t) => r << 32 - t | e >>> t, Og = (r, e, t) => r << 64 - t | e >>> t - 32, Tg = (r, e, t) => r >>> t - 32 | e << 64 - t, _g = (r, e) => e, Bg = (r, e) => r, Pd = (r, e, t) => r << t | e >>> 32 - t, Rd = (r, e, t) => e << t | r >>> 32 - t, Od = (r, e, t) => e << t - 32 | r >>> 64 - t, Td = (r, e, t) => r << t - 32 | e >>> 64 - t;
function Lg(r, e, t, n) {
  const s = (e >>> 0) + (n >>> 0);
  return { h: r + t + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const Mg = (r, e, t) => (r >>> 0) + (e >>> 0) + (t >>> 0), Dg = (r, e, t, n) => e + t + n + (r / 2 ** 32 | 0) | 0, Ug = (r, e, t, n) => (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0), Fg = (r, e, t, n, s) => e + t + n + s + (r / 2 ** 32 | 0) | 0, Hg = (r, e, t, n, s) => (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0) + (s >>> 0), Gg = (r, e, t, n, s, i) => e + t + n + s + i + (r / 2 ** 32 | 0) | 0, G = {
  fromBig: kd,
  split: xd,
  toBig: Sg,
  shrSH: kg,
  shrSL: xg,
  rotrSH: Pg,
  rotrSL: Rg,
  rotrBH: Og,
  rotrBL: Tg,
  rotr32H: _g,
  rotr32L: Bg,
  rotlSH: Pd,
  rotlSL: Rd,
  rotlBH: Od,
  rotlBL: Td,
  add: Lg,
  add3L: Mg,
  add3H: Dg,
  add4L: Ug,
  add4H: Fg,
  add5H: Gg,
  add5L: Hg
}, [Kg, jg] = G.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((r) => BigInt(r))), Ln = /* @__PURE__ */ new Uint32Array(80), Mn = /* @__PURE__ */ new Uint32Array(80);
class Vg extends Nd {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: t, Bh: n, Bl: s, Ch: i, Cl: o, Dh: a, Dl: c, Eh: l, El: h, Fh: d, Fl: f, Gh: g, Gl: w, Hh: m, Hl: E } = this;
    return [e, t, n, s, i, o, a, c, l, h, d, f, g, w, m, E];
  }
  // prettier-ignore
  set(e, t, n, s, i, o, a, c, l, h, d, f, g, w, m, E) {
    this.Ah = e | 0, this.Al = t | 0, this.Bh = n | 0, this.Bl = s | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = h | 0, this.Fh = d | 0, this.Fl = f | 0, this.Gh = g | 0, this.Gl = w | 0, this.Hh = m | 0, this.Hl = E | 0;
  }
  process(e, t) {
    for (let N = 0; N < 16; N++, t += 4)
      Ln[N] = e.getUint32(t), Mn[N] = e.getUint32(t += 4);
    for (let N = 16; N < 80; N++) {
      const _ = Ln[N - 15] | 0, x = Mn[N - 15] | 0, P = G.rotrSH(_, x, 1) ^ G.rotrSH(_, x, 8) ^ G.shrSH(_, x, 7), M = G.rotrSL(_, x, 1) ^ G.rotrSL(_, x, 8) ^ G.shrSL(_, x, 7), D = Ln[N - 2] | 0, q = Mn[N - 2] | 0, Q = G.rotrSH(D, q, 19) ^ G.rotrBH(D, q, 61) ^ G.shrSH(D, q, 6), z = G.rotrSL(D, q, 19) ^ G.rotrBL(D, q, 61) ^ G.shrSL(D, q, 6), fe = G.add4L(M, z, Mn[N - 7], Mn[N - 16]), be = G.add4H(fe, P, Q, Ln[N - 7], Ln[N - 16]);
      Ln[N] = be | 0, Mn[N] = fe | 0;
    }
    let { Ah: n, Al: s, Bh: i, Bl: o, Ch: a, Cl: c, Dh: l, Dl: h, Eh: d, El: f, Fh: g, Fl: w, Gh: m, Gl: E, Hh: C, Hl: S } = this;
    for (let N = 0; N < 80; N++) {
      const _ = G.rotrSH(d, f, 14) ^ G.rotrSH(d, f, 18) ^ G.rotrBH(d, f, 41), x = G.rotrSL(d, f, 14) ^ G.rotrSL(d, f, 18) ^ G.rotrBL(d, f, 41), P = d & g ^ ~d & m, M = f & w ^ ~f & E, D = G.add5L(S, x, M, jg[N], Mn[N]), q = G.add5H(D, C, _, P, Kg[N], Ln[N]), Q = D | 0, z = G.rotrSH(n, s, 28) ^ G.rotrBH(n, s, 34) ^ G.rotrBH(n, s, 39), fe = G.rotrSL(n, s, 28) ^ G.rotrBL(n, s, 34) ^ G.rotrBL(n, s, 39), be = n & i ^ n & a ^ i & a, Ot = s & o ^ s & c ^ o & c;
      C = m | 0, S = E | 0, m = g | 0, E = w | 0, g = d | 0, w = f | 0, { h: d, l: f } = G.add(l | 0, h | 0, q | 0, Q | 0), l = a | 0, h = c | 0, a = i | 0, c = o | 0, i = n | 0, o = s | 0;
      const k = G.add3L(Q, fe, Ot);
      n = G.add3H(k, q, z, be), s = k | 0;
    }
    ({ h: n, l: s } = G.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)), { h: i, l: o } = G.add(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = G.add(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: h } = G.add(this.Dh | 0, this.Dl | 0, l | 0, h | 0), { h: d, l: f } = G.add(this.Eh | 0, this.El | 0, d | 0, f | 0), { h: g, l: w } = G.add(this.Fh | 0, this.Fl | 0, g | 0, w | 0), { h: m, l: E } = G.add(this.Gh | 0, this.Gl | 0, m | 0, E | 0), { h: C, l: S } = G.add(this.Hh | 0, this.Hl | 0, C | 0, S | 0), this.set(n, s, i, o, a, c, l, h, d, f, g, w, m, E, C, S);
  }
  roundClean() {
    Ln.fill(0), Mn.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const Wg = /* @__PURE__ */ Gl(() => new Vg());
function Qg() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof Aa < "u")
    return Aa;
  throw new Error("unable to locate global object");
}
const Bu = Qg();
Bu.crypto || Bu.msCrypto;
function zg(r) {
  switch (r) {
    case "sha256":
      return Sd.create();
    case "sha512":
      return Wg.create();
  }
  y(!1, "invalid hashing algorithm name", "algorithm", r);
}
const [_d, Bd, Ld] = [[], [], []], Jg = /* @__PURE__ */ BigInt(0), Ki = /* @__PURE__ */ BigInt(1), qg = /* @__PURE__ */ BigInt(2), Zg = /* @__PURE__ */ BigInt(7), $g = /* @__PURE__ */ BigInt(256), Yg = /* @__PURE__ */ BigInt(113);
for (let r = 0, e = Ki, t = 1, n = 0; r < 24; r++) {
  [t, n] = [n, (2 * t + 3 * n) % 5], _d.push(2 * (5 * n + t)), Bd.push((r + 1) * (r + 2) / 2 % 64);
  let s = Jg;
  for (let i = 0; i < 7; i++)
    e = (e << Ki ^ (e >> Zg) * Yg) % $g, e & qg && (s ^= Ki << (Ki << /* @__PURE__ */ BigInt(i)) - Ki);
  Ld.push(s);
}
const [Xg, e0] = /* @__PURE__ */ xd(Ld, !0), Lu = (r, e, t) => t > 32 ? Od(r, e, t) : Pd(r, e, t), Mu = (r, e, t) => t > 32 ? Td(r, e, t) : Rd(r, e, t);
function t0(r, e = 24) {
  const t = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let o = 0; o < 10; o++)
      t[o] = r[o] ^ r[o + 10] ^ r[o + 20] ^ r[o + 30] ^ r[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, l = t[c], h = t[c + 1], d = Lu(l, h, 1) ^ t[a], f = Mu(l, h, 1) ^ t[a + 1];
      for (let g = 0; g < 50; g += 10)
        r[o + g] ^= d, r[o + g + 1] ^= f;
    }
    let s = r[2], i = r[3];
    for (let o = 0; o < 24; o++) {
      const a = Bd[o], c = Lu(s, i, a), l = Mu(s, i, a), h = _d[o];
      s = r[h], i = r[h + 1], r[h] = c, r[h + 1] = l;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        t[a] = r[o + a];
      for (let a = 0; a < 10; a++)
        r[o + a] ^= ~t[(a + 2) % 10] & t[(a + 4) % 10];
    }
    r[0] ^= Xg[n], r[1] ^= e0[n];
  }
  t.fill(0);
}
class Kl extends Hl {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, t, n, s = !1, i = 24) {
    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Ia(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = mg(this.state);
  }
  keccak() {
    t0(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    ki(this);
    const { blockLen: t, state: n } = this;
    e = qa(e);
    const s = e.length;
    for (let i = 0; i < s; ) {
      const o = Math.min(t - this.pos, s - i);
      for (let a = 0; a < o; a++)
        n[this.pos++] ^= e[i++];
      this.pos === t && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: t, pos: n, blockLen: s } = this;
    e[n] ^= t, t & 128 && n === s - 1 && this.keccak(), e[s - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    ki(this, !1), Fl(e), this.finish();
    const t = this.state, { blockLen: n } = this;
    for (let s = 0, i = e.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const o = Math.min(n - this.posOut, i - s);
      e.set(t.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return Ia(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (Ed(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: t, suffix: n, outputLen: s, rounds: i, enableXOF: o } = this;
    return e || (e = new Kl(t, n, s, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = s, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
}
const n0 = (r, e, t) => Gl(() => new Kl(e, r, t)), r0 = /* @__PURE__ */ n0(1, 136, 256 / 8);
let Md = !1;
const Dd = function(r) {
  return r0(r);
};
let Ud = Dd;
function he(r) {
  const e = W(r, "data");
  return O(Ud(e));
}
he._ = Dd;
he.lock = function() {
  Md = !0;
};
he.register = function(r) {
  if (Md)
    throw new TypeError("keccak256 is locked");
  Ud = r;
};
Object.freeze(he);
const Fd = function(r) {
  return zg("sha256").update(r).digest();
};
let Hd = Fd, Gd = !1;
function Mi(r) {
  const e = W(r, "data");
  return O(Hd(e));
}
Mi._ = Fd;
Mi.lock = function() {
  Gd = !0;
};
Mi.register = function(r) {
  if (Gd)
    throw new Error("sha256 is locked");
  Hd = r;
};
Object.freeze(Mi);
Object.freeze(Mi);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Kd = BigInt(0), Za = BigInt(1), s0 = BigInt(2), $a = (r) => r instanceof Uint8Array, i0 = /* @__PURE__ */ Array.from({ length: 256 }, (r, e) => e.toString(16).padStart(2, "0"));
function xi(r) {
  if (!$a(r))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let t = 0; t < r.length; t++)
    e += i0[r[t]];
  return e;
}
function jd(r) {
  const e = r.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function jl(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  return BigInt(r === "" ? "0" : `0x${r}`);
}
function Pi(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  const e = r.length;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const t = new Uint8Array(e / 2);
  for (let n = 0; n < t.length; n++) {
    const s = n * 2, i = r.slice(s, s + 2), o = Number.parseInt(i, 16);
    if (Number.isNaN(o) || o < 0)
      throw new Error("Invalid byte sequence");
    t[n] = o;
  }
  return t;
}
function Jr(r) {
  return jl(xi(r));
}
function Vl(r) {
  if (!$a(r))
    throw new Error("Uint8Array expected");
  return jl(xi(Uint8Array.from(r).reverse()));
}
function Ri(r, e) {
  return Pi(r.toString(16).padStart(e * 2, "0"));
}
function Wl(r, e) {
  return Ri(r, e).reverse();
}
function o0(r) {
  return Pi(jd(r));
}
function wt(r, e, t) {
  let n;
  if (typeof e == "string")
    try {
      n = Pi(e);
    } catch (i) {
      throw new Error(`${r} must be valid hex string, got "${e}". Cause: ${i}`);
    }
  else if ($a(e))
    n = Uint8Array.from(e);
  else
    throw new Error(`${r} must be hex string or Uint8Array`);
  const s = n.length;
  if (typeof t == "number" && s !== t)
    throw new Error(`${r} expected ${t} bytes, got ${s}`);
  return n;
}
function Xi(...r) {
  const e = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let t = 0;
  return r.forEach((n) => {
    if (!$a(n))
      throw new Error("Uint8Array expected");
    e.set(n, t), t += n.length;
  }), e;
}
function a0(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function c0(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function l0(r) {
  let e;
  for (e = 0; r > Kd; r >>= Za, e += 1)
    ;
  return e;
}
function u0(r, e) {
  return r >> BigInt(e) & Za;
}
const h0 = (r, e, t) => r | (t ? Za : Kd) << BigInt(e), Ql = (r) => (s0 << BigInt(r - 1)) - Za, Bc = (r) => new Uint8Array(r), Du = (r) => Uint8Array.from(r);
function Vd(r, e, t) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof t != "function")
    throw new Error("hmacFn must be a function");
  let n = Bc(r), s = Bc(r), i = 0;
  const o = () => {
    n.fill(1), s.fill(0), i = 0;
  }, a = (...d) => t(s, n, ...d), c = (d = Bc()) => {
    s = a(Du([0]), d), n = a(), d.length !== 0 && (s = a(Du([1]), d), n = a());
  }, l = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let d = 0;
    const f = [];
    for (; d < e; ) {
      n = a();
      const g = n.slice();
      f.push(g), d += n.length;
    }
    return Xi(...f);
  };
  return (d, f) => {
    o(), c(d);
    let g;
    for (; !(g = f(l())); )
      c();
    return o(), g;
  };
}
const d0 = {
  bigint: (r) => typeof r == "bigint",
  function: (r) => typeof r == "function",
  boolean: (r) => typeof r == "boolean",
  string: (r) => typeof r == "string",
  stringOrUint8Array: (r) => typeof r == "string" || r instanceof Uint8Array,
  isSafeInteger: (r) => Number.isSafeInteger(r),
  array: (r) => Array.isArray(r),
  field: (r, e) => e.Fp.isValid(r),
  hash: (r) => typeof r == "function" && Number.isSafeInteger(r.outputLen)
};
function Mo(r, e, t = {}) {
  const n = (s, i, o) => {
    const a = d0[i];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const c = r[s];
    if (!(o && c === void 0) && !a(c, r))
      throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${i}`);
  };
  for (const [s, i] of Object.entries(e))
    n(s, i, !1);
  for (const [s, i] of Object.entries(t))
    n(s, i, !0);
  return r;
}
const f0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: u0,
  bitLen: l0,
  bitMask: Ql,
  bitSet: h0,
  bytesToHex: xi,
  bytesToNumberBE: Jr,
  bytesToNumberLE: Vl,
  concatBytes: Xi,
  createHmacDrbg: Vd,
  ensureBytes: wt,
  equalBytes: a0,
  hexToBytes: Pi,
  hexToNumber: jl,
  numberToBytesBE: Ri,
  numberToBytesLE: Wl,
  numberToHexUnpadded: jd,
  numberToVarBytesBE: o0,
  utf8ToBytes: c0,
  validateObject: Mo
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const we = BigInt(0), ce = BigInt(1), pr = BigInt(2), p0 = BigInt(3), hl = BigInt(4), Uu = BigInt(5), Fu = BigInt(8);
BigInt(9);
BigInt(16);
function je(r, e) {
  const t = r % e;
  return t >= we ? t : e + t;
}
function g0(r, e, t) {
  if (t <= we || e < we)
    throw new Error("Expected power/modulo > 0");
  if (t === ce)
    return we;
  let n = ce;
  for (; e > we; )
    e & ce && (n = n * r % t), r = r * r % t, e >>= ce;
  return n;
}
function tt(r, e, t) {
  let n = r;
  for (; e-- > we; )
    n *= n, n %= t;
  return n;
}
function dl(r, e) {
  if (r === we || e <= we)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${e}`);
  let t = je(r, e), n = e, s = we, i = ce;
  for (; t !== we; ) {
    const a = n / t, c = n % t, l = s - i * a;
    n = t, t = c, s = i, i = l;
  }
  if (n !== ce)
    throw new Error("invert: does not exist");
  return je(s, e);
}
function m0(r) {
  const e = (r - ce) / pr;
  let t, n, s;
  for (t = r - ce, n = 0; t % pr === we; t /= pr, n++)
    ;
  for (s = pr; s < r && g0(s, e, r) !== r - ce; s++)
    ;
  if (n === 1) {
    const o = (r + ce) / hl;
    return function(c, l) {
      const h = c.pow(l, o);
      if (!c.eql(c.sqr(h), l))
        throw new Error("Cannot find square root");
      return h;
    };
  }
  const i = (t + ce) / pr;
  return function(a, c) {
    if (a.pow(c, e) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let l = n, h = a.pow(a.mul(a.ONE, s), t), d = a.pow(c, i), f = a.pow(c, t);
    for (; !a.eql(f, a.ONE); ) {
      if (a.eql(f, a.ZERO))
        return a.ZERO;
      let g = 1;
      for (let m = a.sqr(f); g < l && !a.eql(m, a.ONE); g++)
        m = a.sqr(m);
      const w = a.pow(h, ce << BigInt(l - g - 1));
      h = a.sqr(w), d = a.mul(d, w), f = a.mul(f, h), l = g;
    }
    return d;
  };
}
function y0(r) {
  if (r % hl === p0) {
    const e = (r + ce) / hl;
    return function(n, s) {
      const i = n.pow(s, e);
      if (!n.eql(n.sqr(i), s))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (r % Fu === Uu) {
    const e = (r - Uu) / Fu;
    return function(n, s) {
      const i = n.mul(s, pr), o = n.pow(i, e), a = n.mul(s, o), c = n.mul(n.mul(a, pr), o), l = n.mul(a, n.sub(c, n.ONE));
      if (!n.eql(n.sqr(l), s))
        throw new Error("Cannot find square root");
      return l;
    };
  }
  return m0(r);
}
const w0 = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function b0(r) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, t = w0.reduce((n, s) => (n[s] = "function", n), e);
  return Mo(r, t);
}
function A0(r, e, t) {
  if (t < we)
    throw new Error("Expected power > 0");
  if (t === we)
    return r.ONE;
  if (t === ce)
    return e;
  let n = r.ONE, s = e;
  for (; t > we; )
    t & ce && (n = r.mul(n, s)), s = r.sqr(s), t >>= ce;
  return n;
}
function E0(r, e) {
  const t = new Array(e.length), n = e.reduce((i, o, a) => r.is0(o) ? i : (t[a] = i, r.mul(i, o)), r.ONE), s = r.inv(n);
  return e.reduceRight((i, o, a) => r.is0(o) ? i : (t[a] = r.mul(i, t[a]), r.mul(i, o)), s), t;
}
function Wd(r, e) {
  const t = e !== void 0 ? e : r.toString(2).length, n = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: n };
}
function C0(r, e, t = !1, n = {}) {
  if (r <= we)
    throw new Error(`Expected Field ORDER > 0, got ${r}`);
  const { nBitLength: s, nByteLength: i } = Wd(r, e);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = y0(r), a = Object.freeze({
    ORDER: r,
    BITS: s,
    BYTES: i,
    MASK: Ql(s),
    ZERO: we,
    ONE: ce,
    create: (c) => je(c, r),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return we <= c && c < r;
    },
    is0: (c) => c === we,
    isOdd: (c) => (c & ce) === ce,
    neg: (c) => je(-c, r),
    eql: (c, l) => c === l,
    sqr: (c) => je(c * c, r),
    add: (c, l) => je(c + l, r),
    sub: (c, l) => je(c - l, r),
    mul: (c, l) => je(c * l, r),
    pow: (c, l) => A0(a, c, l),
    div: (c, l) => je(c * dl(l, r), r),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, l) => c + l,
    subN: (c, l) => c - l,
    mulN: (c, l) => c * l,
    inv: (c) => dl(c, r),
    sqrt: n.sqrt || ((c) => o(a, c)),
    invertBatch: (c) => E0(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, l, h) => h ? l : c,
    toBytes: (c) => t ? Wl(c, i) : Ri(c, i),
    fromBytes: (c) => {
      if (c.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);
      return t ? Vl(c) : Jr(c);
    }
  });
  return Object.freeze(a);
}
function Qd(r) {
  if (typeof r != "bigint")
    throw new Error("field order must be bigint");
  const e = r.toString(2).length;
  return Math.ceil(e / 8);
}
function zd(r) {
  const e = Qd(r);
  return e + Math.ceil(e / 2);
}
function v0(r, e, t = !1) {
  const n = r.length, s = Qd(e), i = zd(e);
  if (n < 16 || n < i || n > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${n}`);
  const o = t ? Jr(r) : Vl(r), a = je(o, e - ce) + ce;
  return t ? Wl(a, s) : Ri(a, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const I0 = BigInt(0), Lc = BigInt(1);
function N0(r, e) {
  const t = (s, i) => {
    const o = i.negate();
    return s ? o : i;
  }, n = (s) => {
    const i = Math.ceil(e / s) + 1, o = 2 ** (s - 1);
    return { windows: i, windowSize: o };
  };
  return {
    constTimeNegate: t,
    // non-const time multiplication ladder
    unsafeLadder(s, i) {
      let o = r.ZERO, a = s;
      for (; i > I0; )
        i & Lc && (o = o.add(a)), a = a.double(), i >>= Lc;
      return o;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(s, i) {
      const { windows: o, windowSize: a } = n(i), c = [];
      let l = s, h = l;
      for (let d = 0; d < o; d++) {
        h = l, c.push(h);
        for (let f = 1; f < a; f++)
          h = h.add(l), c.push(h);
        l = h.double();
      }
      return c;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(s, i, o) {
      const { windows: a, windowSize: c } = n(s);
      let l = r.ZERO, h = r.BASE;
      const d = BigInt(2 ** s - 1), f = 2 ** s, g = BigInt(s);
      for (let w = 0; w < a; w++) {
        const m = w * c;
        let E = Number(o & d);
        o >>= g, E > c && (E -= f, o += Lc);
        const C = m, S = m + Math.abs(E) - 1, N = w % 2 !== 0, _ = E < 0;
        E === 0 ? h = h.add(t(N, i[C])) : l = l.add(t(_, i[S]));
      }
      return { p: l, f: h };
    },
    wNAFCached(s, i, o, a) {
      const c = s._WINDOW_SIZE || 1;
      let l = i.get(s);
      return l || (l = this.precomputeWindow(s, c), c !== 1 && i.set(s, a(l))), this.wNAF(c, l, o);
    }
  };
}
function Jd(r) {
  return b0(r.Fp), Mo(r, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Wd(r.n, r.nBitLength),
    ...r,
    p: r.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function S0(r) {
  const e = Jd(r);
  Mo(e, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: t, Fp: n, a: s } = e;
  if (t) {
    if (!n.eql(s, n.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof t != "object" || typeof t.beta != "bigint" || typeof t.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: k0, hexToBytes: x0 } = f0, Ar = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(e = "") {
      super(e);
    }
  },
  _parseInt(r) {
    const { Err: e } = Ar;
    if (r.length < 2 || r[0] !== 2)
      throw new e("Invalid signature integer tag");
    const t = r[1], n = r.subarray(2, t + 2);
    if (!t || n.length !== t)
      throw new e("Invalid signature integer: wrong length");
    if (n[0] & 128)
      throw new e("Invalid signature integer: negative");
    if (n[0] === 0 && !(n[1] & 128))
      throw new e("Invalid signature integer: unnecessary leading zero");
    return { d: k0(n), l: r.subarray(t + 2) };
  },
  toSig(r) {
    const { Err: e } = Ar, t = typeof r == "string" ? x0(r) : r;
    if (!(t instanceof Uint8Array))
      throw new Error("ui8a expected");
    let n = t.length;
    if (n < 2 || t[0] != 48)
      throw new e("Invalid signature tag");
    if (t[1] !== n - 2)
      throw new e("Invalid signature: incorrect length");
    const { d: s, l: i } = Ar._parseInt(t.subarray(2)), { d: o, l: a } = Ar._parseInt(i);
    if (a.length)
      throw new e("Invalid signature: left bytes after parsing");
    return { r: s, s: o };
  },
  hexFromSig(r) {
    const e = (l) => Number.parseInt(l[0], 16) & 8 ? "00" + l : l, t = (l) => {
      const h = l.toString(16);
      return h.length & 1 ? `0${h}` : h;
    }, n = e(t(r.s)), s = e(t(r.r)), i = n.length / 2, o = s.length / 2, a = t(i), c = t(o);
    return `30${t(o + i + 4)}02${c}${s}02${a}${n}`;
  }
}, Cn = BigInt(0), lt = BigInt(1);
BigInt(2);
const Hu = BigInt(3);
BigInt(4);
function P0(r) {
  const e = S0(r), { Fp: t } = e, n = e.toBytes || ((w, m, E) => {
    const C = m.toAffine();
    return Xi(Uint8Array.from([4]), t.toBytes(C.x), t.toBytes(C.y));
  }), s = e.fromBytes || ((w) => {
    const m = w.subarray(1), E = t.fromBytes(m.subarray(0, t.BYTES)), C = t.fromBytes(m.subarray(t.BYTES, 2 * t.BYTES));
    return { x: E, y: C };
  });
  function i(w) {
    const { a: m, b: E } = e, C = t.sqr(w), S = t.mul(C, w);
    return t.add(t.add(S, t.mul(w, m)), E);
  }
  if (!t.eql(t.sqr(e.Gy), i(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(w) {
    return typeof w == "bigint" && Cn < w && w < e.n;
  }
  function a(w) {
    if (!o(w))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(w) {
    const { allowedPrivateKeyLengths: m, nByteLength: E, wrapPrivateKey: C, n: S } = e;
    if (m && typeof w != "bigint") {
      if (w instanceof Uint8Array && (w = xi(w)), typeof w != "string" || !m.includes(w.length))
        throw new Error("Invalid key");
      w = w.padStart(E * 2, "0");
    }
    let N;
    try {
      N = typeof w == "bigint" ? w : Jr(wt("private key", w, E));
    } catch {
      throw new Error(`private key must be ${E} bytes, hex or bigint, not ${typeof w}`);
    }
    return C && (N = je(N, S)), a(N), N;
  }
  const l = /* @__PURE__ */ new Map();
  function h(w) {
    if (!(w instanceof d))
      throw new Error("ProjectivePoint expected");
  }
  class d {
    constructor(m, E, C) {
      if (this.px = m, this.py = E, this.pz = C, m == null || !t.isValid(m))
        throw new Error("x required");
      if (E == null || !t.isValid(E))
        throw new Error("y required");
      if (C == null || !t.isValid(C))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(m) {
      const { x: E, y: C } = m || {};
      if (!m || !t.isValid(E) || !t.isValid(C))
        throw new Error("invalid affine point");
      if (m instanceof d)
        throw new Error("projective point not allowed");
      const S = (N) => t.eql(N, t.ZERO);
      return S(E) && S(C) ? d.ZERO : new d(E, C, t.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(m) {
      const E = t.invertBatch(m.map((C) => C.pz));
      return m.map((C, S) => C.toAffine(E[S])).map(d.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(m) {
      const E = d.fromAffine(s(wt("pointHex", m)));
      return E.assertValidity(), E;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(m) {
      return d.BASE.multiply(c(m));
    }
    // "Private method", don't use it directly
    _setWindowSize(m) {
      this._WINDOW_SIZE = m, l.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (e.allowInfinityPoint && !t.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: m, y: E } = this.toAffine();
      if (!t.isValid(m) || !t.isValid(E))
        throw new Error("bad point: x or y not FE");
      const C = t.sqr(E), S = i(m);
      if (!t.eql(C, S))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: m } = this.toAffine();
      if (t.isOdd)
        return !t.isOdd(m);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(m) {
      h(m);
      const { px: E, py: C, pz: S } = this, { px: N, py: _, pz: x } = m, P = t.eql(t.mul(E, x), t.mul(N, S)), M = t.eql(t.mul(C, x), t.mul(_, S));
      return P && M;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new d(this.px, t.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: m, b: E } = e, C = t.mul(E, Hu), { px: S, py: N, pz: _ } = this;
      let x = t.ZERO, P = t.ZERO, M = t.ZERO, D = t.mul(S, S), q = t.mul(N, N), Q = t.mul(_, _), z = t.mul(S, N);
      return z = t.add(z, z), M = t.mul(S, _), M = t.add(M, M), x = t.mul(m, M), P = t.mul(C, Q), P = t.add(x, P), x = t.sub(q, P), P = t.add(q, P), P = t.mul(x, P), x = t.mul(z, x), M = t.mul(C, M), Q = t.mul(m, Q), z = t.sub(D, Q), z = t.mul(m, z), z = t.add(z, M), M = t.add(D, D), D = t.add(M, D), D = t.add(D, Q), D = t.mul(D, z), P = t.add(P, D), Q = t.mul(N, _), Q = t.add(Q, Q), D = t.mul(Q, z), x = t.sub(x, D), M = t.mul(Q, q), M = t.add(M, M), M = t.add(M, M), new d(x, P, M);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(m) {
      h(m);
      const { px: E, py: C, pz: S } = this, { px: N, py: _, pz: x } = m;
      let P = t.ZERO, M = t.ZERO, D = t.ZERO;
      const q = e.a, Q = t.mul(e.b, Hu);
      let z = t.mul(E, N), fe = t.mul(C, _), be = t.mul(S, x), Ot = t.add(E, C), k = t.add(N, _);
      Ot = t.mul(Ot, k), k = t.add(z, fe), Ot = t.sub(Ot, k), k = t.add(E, S);
      let B = t.add(N, x);
      return k = t.mul(k, B), B = t.add(z, be), k = t.sub(k, B), B = t.add(C, S), P = t.add(_, x), B = t.mul(B, P), P = t.add(fe, be), B = t.sub(B, P), D = t.mul(q, k), P = t.mul(Q, be), D = t.add(P, D), P = t.sub(fe, D), D = t.add(fe, D), M = t.mul(P, D), fe = t.add(z, z), fe = t.add(fe, z), be = t.mul(q, be), k = t.mul(Q, k), fe = t.add(fe, be), be = t.sub(z, be), be = t.mul(q, be), k = t.add(k, be), z = t.mul(fe, k), M = t.add(M, z), z = t.mul(B, k), P = t.mul(Ot, P), P = t.sub(P, z), z = t.mul(Ot, fe), D = t.mul(B, D), D = t.add(D, z), new d(P, M, D);
    }
    subtract(m) {
      return this.add(m.negate());
    }
    is0() {
      return this.equals(d.ZERO);
    }
    wNAF(m) {
      return g.wNAFCached(this, l, m, (E) => {
        const C = t.invertBatch(E.map((S) => S.pz));
        return E.map((S, N) => S.toAffine(C[N])).map(d.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(m) {
      const E = d.ZERO;
      if (m === Cn)
        return E;
      if (a(m), m === lt)
        return this;
      const { endo: C } = e;
      if (!C)
        return g.unsafeLadder(this, m);
      let { k1neg: S, k1: N, k2neg: _, k2: x } = C.splitScalar(m), P = E, M = E, D = this;
      for (; N > Cn || x > Cn; )
        N & lt && (P = P.add(D)), x & lt && (M = M.add(D)), D = D.double(), N >>= lt, x >>= lt;
      return S && (P = P.negate()), _ && (M = M.negate()), M = new d(t.mul(M.px, C.beta), M.py, M.pz), P.add(M);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(m) {
      a(m);
      let E = m, C, S;
      const { endo: N } = e;
      if (N) {
        const { k1neg: _, k1: x, k2neg: P, k2: M } = N.splitScalar(E);
        let { p: D, f: q } = this.wNAF(x), { p: Q, f: z } = this.wNAF(M);
        D = g.constTimeNegate(_, D), Q = g.constTimeNegate(P, Q), Q = new d(t.mul(Q.px, N.beta), Q.py, Q.pz), C = D.add(Q), S = q.add(z);
      } else {
        const { p: _, f: x } = this.wNAF(E);
        C = _, S = x;
      }
      return d.normalizeZ([C, S])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(m, E, C) {
      const S = d.BASE, N = (x, P) => P === Cn || P === lt || !x.equals(S) ? x.multiplyUnsafe(P) : x.multiply(P), _ = N(this, E).add(N(m, C));
      return _.is0() ? void 0 : _;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(m) {
      const { px: E, py: C, pz: S } = this, N = this.is0();
      m == null && (m = N ? t.ONE : t.inv(S));
      const _ = t.mul(E, m), x = t.mul(C, m), P = t.mul(S, m);
      if (N)
        return { x: t.ZERO, y: t.ZERO };
      if (!t.eql(P, t.ONE))
        throw new Error("invZ was invalid");
      return { x: _, y: x };
    }
    isTorsionFree() {
      const { h: m, isTorsionFree: E } = e;
      if (m === lt)
        return !0;
      if (E)
        return E(d, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: m, clearCofactor: E } = e;
      return m === lt ? this : E ? E(d, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(m = !0) {
      return this.assertValidity(), n(d, this, m);
    }
    toHex(m = !0) {
      return xi(this.toRawBytes(m));
    }
  }
  d.BASE = new d(e.Gx, e.Gy, t.ONE), d.ZERO = new d(t.ZERO, t.ONE, t.ZERO);
  const f = e.nBitLength, g = N0(d, e.endo ? Math.ceil(f / 2) : f);
  return {
    CURVE: e,
    ProjectivePoint: d,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: o
  };
}
function R0(r) {
  const e = Jd(r);
  return Mo(e, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...e });
}
function O0(r) {
  const e = R0(r), { Fp: t, n } = e, s = t.BYTES + 1, i = 2 * t.BYTES + 1;
  function o(k) {
    return Cn < k && k < t.ORDER;
  }
  function a(k) {
    return je(k, n);
  }
  function c(k) {
    return dl(k, n);
  }
  const { ProjectivePoint: l, normPrivateKeyToScalar: h, weierstrassEquation: d, isWithinCurveOrder: f } = P0({
    ...e,
    toBytes(k, B, K) {
      const ee = B.toAffine(), Y = t.toBytes(ee.x), pe = Xi;
      return K ? pe(Uint8Array.from([B.hasEvenY() ? 2 : 3]), Y) : pe(Uint8Array.from([4]), Y, t.toBytes(ee.y));
    },
    fromBytes(k) {
      const B = k.length, K = k[0], ee = k.subarray(1);
      if (B === s && (K === 2 || K === 3)) {
        const Y = Jr(ee);
        if (!o(Y))
          throw new Error("Point is not on curve");
        const pe = d(Y);
        let Qe = t.sqrt(pe);
        const ze = (Qe & lt) === lt;
        return (K & 1) === 1 !== ze && (Qe = t.neg(Qe)), { x: Y, y: Qe };
      } else if (B === i && K === 4) {
        const Y = t.fromBytes(ee.subarray(0, t.BYTES)), pe = t.fromBytes(ee.subarray(t.BYTES, 2 * t.BYTES));
        return { x: Y, y: pe };
      } else
        throw new Error(`Point of length ${B} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`);
    }
  }), g = (k) => xi(Ri(k, e.nByteLength));
  function w(k) {
    const B = n >> lt;
    return k > B;
  }
  function m(k) {
    return w(k) ? a(-k) : k;
  }
  const E = (k, B, K) => Jr(k.slice(B, K));
  class C {
    constructor(B, K, ee) {
      this.r = B, this.s = K, this.recovery = ee, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(B) {
      const K = e.nByteLength;
      return B = wt("compactSignature", B, K * 2), new C(E(B, 0, K), E(B, K, 2 * K));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(B) {
      const { r: K, s: ee } = Ar.toSig(wt("DER", B));
      return new C(K, ee);
    }
    assertValidity() {
      if (!f(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!f(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(B) {
      return new C(this.r, this.s, B);
    }
    recoverPublicKey(B) {
      const { r: K, s: ee, recovery: Y } = this, pe = M(wt("msgHash", B));
      if (Y == null || ![0, 1, 2, 3].includes(Y))
        throw new Error("recovery id invalid");
      const Qe = Y === 2 || Y === 3 ? K + e.n : K;
      if (Qe >= t.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const ze = Y & 1 ? "03" : "02", xn = l.fromHex(ze + g(Qe)), Pn = c(Qe), os = a(-pe * Pn), Ui = a(ee * Pn), Rn = l.BASE.multiplyAndAddUnsafe(xn, os, Ui);
      if (!Rn)
        throw new Error("point at infinify");
      return Rn.assertValidity(), Rn;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return w(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new C(this.r, a(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return Pi(this.toDERHex());
    }
    toDERHex() {
      return Ar.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return Pi(this.toCompactHex());
    }
    toCompactHex() {
      return g(this.r) + g(this.s);
    }
  }
  const S = {
    isValidPrivateKey(k) {
      try {
        return h(k), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: h,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const k = zd(e.n);
      return v0(e.randomBytes(k), e.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(k = 8, B = l.BASE) {
      return B._setWindowSize(k), B.multiply(BigInt(3)), B;
    }
  };
  function N(k, B = !0) {
    return l.fromPrivateKey(k).toRawBytes(B);
  }
  function _(k) {
    const B = k instanceof Uint8Array, K = typeof k == "string", ee = (B || K) && k.length;
    return B ? ee === s || ee === i : K ? ee === 2 * s || ee === 2 * i : k instanceof l;
  }
  function x(k, B, K = !0) {
    if (_(k))
      throw new Error("first arg must be private key");
    if (!_(B))
      throw new Error("second arg must be public key");
    return l.fromHex(B).multiply(h(k)).toRawBytes(K);
  }
  const P = e.bits2int || function(k) {
    const B = Jr(k), K = k.length * 8 - e.nBitLength;
    return K > 0 ? B >> BigInt(K) : B;
  }, M = e.bits2int_modN || function(k) {
    return a(P(k));
  }, D = Ql(e.nBitLength);
  function q(k) {
    if (typeof k != "bigint")
      throw new Error("bigint expected");
    if (!(Cn <= k && k < D))
      throw new Error(`bigint expected < 2^${e.nBitLength}`);
    return Ri(k, e.nByteLength);
  }
  function Q(k, B, K = z) {
    if (["recovered", "canonical"].some((lr) => lr in K))
      throw new Error("sign() legacy options not supported");
    const { hash: ee, randomBytes: Y } = e;
    let { lowS: pe, prehash: Qe, extraEntropy: ze } = K;
    pe == null && (pe = !0), k = wt("msgHash", k), Qe && (k = wt("prehashed msgHash", ee(k)));
    const xn = M(k), Pn = h(B), os = [q(Pn), q(xn)];
    if (ze != null) {
      const lr = ze === !0 ? Y(t.BYTES) : ze;
      os.push(wt("extraEntropy", lr));
    }
    const Ui = Xi(...os), Rn = xn;
    function Sc(lr) {
      const as = P(lr);
      if (!f(as))
        return;
      const mu = c(as), cs = l.BASE.multiply(as).toAffine(), ft = a(cs.x);
      if (ft === Cn)
        return;
      const ls = a(mu * a(Rn + ft * Pn));
      if (ls === Cn)
        return;
      let yu = (cs.x === ft ? 0 : 2) | Number(cs.y & lt), wu = ls;
      return pe && w(ls) && (wu = m(ls), yu ^= 1), new C(ft, wu, yu);
    }
    return { seed: Ui, k2sig: Sc };
  }
  const z = { lowS: e.lowS, prehash: !1 }, fe = { lowS: e.lowS, prehash: !1 };
  function be(k, B, K = z) {
    const { seed: ee, k2sig: Y } = Q(k, B, K), pe = e;
    return Vd(pe.hash.outputLen, pe.nByteLength, pe.hmac)(ee, Y);
  }
  l.BASE._setWindowSize(8);
  function Ot(k, B, K, ee = fe) {
    var cs;
    const Y = k;
    if (B = wt("msgHash", B), K = wt("publicKey", K), "strict" in ee)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: pe, prehash: Qe } = ee;
    let ze, xn;
    try {
      if (typeof Y == "string" || Y instanceof Uint8Array)
        try {
          ze = C.fromDER(Y);
        } catch (ft) {
          if (!(ft instanceof Ar.Err))
            throw ft;
          ze = C.fromCompact(Y);
        }
      else if (typeof Y == "object" && typeof Y.r == "bigint" && typeof Y.s == "bigint") {
        const { r: ft, s: ls } = Y;
        ze = new C(ft, ls);
      } else
        throw new Error("PARSE");
      xn = l.fromHex(K);
    } catch (ft) {
      if (ft.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (pe && ze.hasHighS())
      return !1;
    Qe && (B = e.hash(B));
    const { r: Pn, s: os } = ze, Ui = M(B), Rn = c(os), Sc = a(Ui * Rn), lr = a(Pn * Rn), as = (cs = l.BASE.multiplyAndAddUnsafe(xn, Sc, lr)) == null ? void 0 : cs.toAffine();
    return as ? a(as.x) === Pn : !1;
  }
  return {
    CURVE: e,
    getPublicKey: N,
    getSharedSecret: x,
    sign: be,
    verify: Ot,
    ProjectivePoint: l,
    Signature: C,
    utils: S
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function T0(r) {
  return {
    hash: r,
    hmac: (e, ...t) => Id(r, e, bg(...t)),
    randomBytes: Ag
  };
}
function _0(r, e) {
  const t = (n) => O0({ ...r, ...T0(n) });
  return Object.freeze({ ...t(e), create: t });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const qd = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Gu = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), B0 = BigInt(1), fl = BigInt(2), Ku = (r, e) => (r + e / fl) / e;
function L0(r) {
  const e = qd, t = BigInt(3), n = BigInt(6), s = BigInt(11), i = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), l = r * r * r % e, h = l * l * r % e, d = tt(h, t, e) * h % e, f = tt(d, t, e) * h % e, g = tt(f, fl, e) * l % e, w = tt(g, s, e) * g % e, m = tt(w, i, e) * w % e, E = tt(m, a, e) * m % e, C = tt(E, c, e) * E % e, S = tt(C, a, e) * m % e, N = tt(S, t, e) * h % e, _ = tt(N, o, e) * w % e, x = tt(_, n, e) * l % e, P = tt(x, fl, e);
  if (!pl.eql(pl.sqr(P), r))
    throw new Error("Cannot find square root");
  return P;
}
const pl = C0(qd, void 0, void 0, { sqrt: L0 }), Un = _0({
  a: BigInt(0),
  b: BigInt(7),
  Fp: pl,
  n: Gu,
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (r) => {
      const e = Gu, t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -B0 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = t, o = BigInt("0x100000000000000000000000000000000"), a = Ku(i * r, e), c = Ku(-n * r, e);
      let l = je(r - a * t - c * s, e), h = je(-a * n - c * i, e);
      const d = l > o, f = h > o;
      if (d && (l = e - l), f && (h = e - h), l > o || h > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + r);
      return { k1neg: d, k1: l, k2neg: f, k2: h };
    }
  }
}, Sd);
BigInt(0);
Un.ProjectivePoint;
const eo = "0x0000000000000000000000000000000000000000", ju = "0x0000000000000000000000000000000000000000000000000000000000000000", Vu = BigInt(0), Wu = BigInt(1), Qu = BigInt(2), zu = BigInt(27), Ju = BigInt(28), Zo = BigInt(35), hs = {};
function qu(r) {
  return Zr(Me(r), 32);
}
var Vs, Ws, Qs, Tr;
const yt = class yt {
  /**
   *  @private
   */
  constructor(e, t, n, s) {
    b(this, Vs, void 0);
    b(this, Ws, void 0);
    b(this, Qs, void 0);
    b(this, Tr, void 0);
    Lo(e, hs, "Signature"), p(this, Vs, t), p(this, Ws, n), p(this, Qs, s), p(this, Tr, null);
  }
  /**
   *  The ``r`` value for a signautre.
   *
   *  This represents the ``x`` coordinate of a "reference" or
   *  challenge point, from which the ``y`` can be computed.
   */
  get r() {
    return u(this, Vs);
  }
  set r(e) {
    y(Ps(e) === 32, "invalid r", "value", e), p(this, Vs, O(e));
  }
  /**
   *  The ``s`` value for a signature.
   */
  get s() {
    return u(this, Ws);
  }
  set s(e) {
    y(Ps(e) === 32, "invalid s", "value", e);
    const t = O(e);
    y(parseInt(t.substring(0, 3)) < 8, "non-canonical s", "value", t), p(this, Ws, t);
  }
  /**
   *  The ``v`` value for a signature.
   *
   *  Since a given ``x`` value for ``r`` has two possible values for
   *  its correspondin ``y``, the ``v`` indicates which of the two ``y``
   *  values to use.
   *
   *  It is normalized to the values ``27`` or ``28`` for legacy
   *  purposes.
   */
  get v() {
    return u(this, Qs);
  }
  set v(e) {
    const t = H(e, "value");
    y(t === 27 || t === 28, "invalid v", "v", e), p(this, Qs, t);
  }
  /**
   *  The EIP-155 ``v`` for legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get networkV() {
    return u(this, Tr);
  }
  /**
   *  The chain ID for EIP-155 legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get legacyChainId() {
    const e = this.networkV;
    return e == null ? null : yt.getChainId(e);
  }
  /**
   *  The ``yParity`` for the signature.
   *
   *  See ``v`` for more details on how this value is used.
   */
  get yParity() {
    return this.v === 27 ? 0 : 1;
  }
  /**
   *  The [[link-eip-2098]] compact representation of the ``yParity``
   *  and ``s`` compacted into a single ``bytes32``.
   */
  get yParityAndS() {
    const e = W(this.s);
    return this.yParity && (e[0] |= 128), O(e);
  }
  /**
   *  The [[link-eip-2098]] compact representation.
   */
  get compactSerialized() {
    return ue([this.r, this.yParityAndS]);
  }
  /**
   *  The serialized representation.
   */
  get serialized() {
    return ue([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
  }
  /**
   *  Returns a new identical [[Signature]].
   */
  clone() {
    const e = new yt(hs, this.r, this.s, this.v);
    return this.networkV && p(e, Tr, this.networkV), e;
  }
  /**
   *  Returns a representation that is compatible with ``JSON.stringify``.
   */
  toJSON() {
    const e = this.networkV;
    return {
      _type: "signature",
      networkV: e != null ? e.toString() : null,
      r: this.r,
      s: this.s,
      v: this.v
    };
  }
  /**
   *  Compute the chain ID from the ``v`` in a legacy EIP-155 transactions.
   *
   *  @example:
   *    Signature.getChainId(45)
   *    //_result:
   *
   *    Signature.getChainId(46)
   *    //_result:
   */
  static getChainId(e) {
    const t = T(e, "v");
    return t == zu || t == Ju ? Vu : (y(t >= Zo, "invalid EIP-155 v", "v", e), (t - Zo) / Qu);
  }
  /**
   *  Compute the ``v`` for a chain ID for a legacy EIP-155 transactions.
   *
   *  Legacy transactions which use [[link-eip-155]] hijack the ``v``
   *  property to include the chain ID.
   *
   *  @example:
   *    Signature.getChainIdV(5, 27)
   *    //_result:
   *
   *    Signature.getChainIdV(5, 28)
   *    //_result:
   *
   */
  static getChainIdV(e, t) {
    return T(e) * Qu + BigInt(35 + t - 27);
  }
  /**
   *  Compute the normalized legacy transaction ``v`` from a ``yParirty``,
   *  a legacy transaction ``v`` or a legacy [[link-eip-155]] transaction.
   *
   *  @example:
   *    // The values 0 and 1 imply v is actually yParity
   *    Signature.getNormalizedV(0)
   *    //_result:
   *
   *    // Legacy non-EIP-1559 transaction (i.e. 27 or 28)
   *    Signature.getNormalizedV(27)
   *    //_result:
   *
   *    // Legacy EIP-155 transaction (i.e. >= 35)
   *    Signature.getNormalizedV(46)
   *    //_result:
   *
   *    // Invalid values throw
   *    Signature.getNormalizedV(5)
   *    //_error:
   */
  static getNormalizedV(e) {
    const t = T(e);
    return t === Vu || t === zu ? 27 : t === Wu || t === Ju ? 28 : (y(t >= Zo, "invalid v", "v", e), t & Wu ? 27 : 28);
  }
  /**
   *  Creates a new [[Signature]].
   *
   *  If no %%sig%% is provided, a new [[Signature]] is created
   *  with default values.
   *
   *  If %%sig%% is a string, it is parsed.
   */
  static from(e) {
    function t(l, h) {
      y(l, h, "signature", e);
    }
    if (e == null)
      return new yt(hs, ju, ju, 27);
    if (typeof e == "string") {
      const l = W(e, "signature");
      if (l.length === 64) {
        const h = O(l.slice(0, 32)), d = l.slice(32, 64), f = d[0] & 128 ? 28 : 27;
        return d[0] &= 127, new yt(hs, h, O(d), f);
      }
      if (l.length === 65) {
        const h = O(l.slice(0, 32)), d = l.slice(32, 64);
        t((d[0] & 128) === 0, "non-canonical s");
        const f = yt.getNormalizedV(l[64]);
        return new yt(hs, h, O(d), f);
      }
      t(!1, "invalid raw signature length");
    }
    if (e instanceof yt)
      return e.clone();
    const n = e.r;
    t(n != null, "missing r");
    const s = qu(n), i = function(l, h) {
      if (l != null)
        return qu(l);
      if (h != null) {
        t(X(h, 32), "invalid yParityAndS");
        const d = W(h);
        return d[0] &= 127, O(d);
      }
      t(!1, "missing s");
    }(e.s, e.yParityAndS);
    t((W(i)[0] & 128) == 0, "non-canonical s");
    const { networkV: o, v: a } = function(l, h, d) {
      if (l != null) {
        const f = T(l);
        return {
          networkV: f >= Zo ? f : void 0,
          v: yt.getNormalizedV(f)
        };
      }
      if (h != null)
        return t(X(h, 32), "invalid yParityAndS"), { v: W(h)[0] & 128 ? 28 : 27 };
      if (d != null) {
        switch (H(d, "sig.yParity")) {
          case 0:
            return { v: 27 };
          case 1:
            return { v: 28 };
        }
        t(!1, "invalid yParity");
      }
      t(!1, "missing v");
    }(e.v, e.yParityAndS, e.yParity), c = new yt(hs, s, i, a);
    return o && p(c, Tr, o), t(e.yParity == null || H(e.yParity, "sig.yParity") === c.yParity, "yParity mismatch"), t(e.yParityAndS == null || e.yParityAndS === c.yParityAndS, "yParityAndS mismatch"), c;
  }
};
Vs = new WeakMap(), Ws = new WeakMap(), Qs = new WeakMap(), Tr = new WeakMap();
let xt = yt;
var fn;
const mr = class mr {
  /**
   *  Creates a new **SigningKey** for %%privateKey%%.
   */
  constructor(e) {
    b(this, fn, void 0);
    y(Ps(e) === 32, "invalid private key", "privateKey", "[REDACTED]"), p(this, fn, O(e));
  }
  /**
   *  The private key.
   */
  get privateKey() {
    return u(this, fn);
  }
  /**
   *  The uncompressed public key.
   *
   * This will always begin with the prefix ``0x04`` and be 132
   * characters long (the ``0x`` prefix and 130 hexadecimal nibbles).
   */
  get publicKey() {
    return mr.computePublicKey(u(this, fn));
  }
  /**
   *  The compressed public key.
   *
   *  This will always begin with either the prefix ``0x02`` or ``0x03``
   *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
   *  nibbles)
   */
  get compressedPublicKey() {
    return mr.computePublicKey(u(this, fn), !0);
  }
  /**
   *  Return the signature of the signed %%digest%%.
   */
  sign(e) {
    y(Ps(e) === 32, "invalid digest length", "digest", e);
    const t = Un.sign(Le(e), Le(u(this, fn)), {
      lowS: !0
    });
    return xt.from({
      r: ar(t.r, 32),
      s: ar(t.s, 32),
      v: t.recovery ? 28 : 27
    });
  }
  /**
   *  Returns the [[link-wiki-ecdh]] shared secret between this
   *  private key and the %%other%% key.
   *
   *  The %%other%% key may be any type of key, a raw public key,
   *  a compressed/uncompressed pubic key or aprivate key.
   *
   *  Best practice is usually to use a cryptographic hash on the
   *  returned value before using it as a symetric secret.
   *
   *  @example:
   *    sign1 = new SigningKey(id("some-secret-1"))
   *    sign2 = new SigningKey(id("some-secret-2"))
   *
   *    // Notice that privA.computeSharedSecret(pubB)...
   *    sign1.computeSharedSecret(sign2.publicKey)
   *    //_result:
   *
   *    // ...is equal to privB.computeSharedSecret(pubA).
   *    sign2.computeSharedSecret(sign1.publicKey)
   *    //_result:
   */
  computeSharedSecret(e) {
    const t = mr.computePublicKey(e);
    return O(Un.getSharedSecret(Le(u(this, fn)), W(t), !1));
  }
  /**
   *  Compute the public key for %%key%%, optionally %%compressed%%.
   *
   *  The %%key%% may be any type of key, a raw public key, a
   *  compressed/uncompressed public key or private key.
   *
   *  @example:
   *    sign = new SigningKey(id("some-secret"));
   *
   *    // Compute the uncompressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey)
   *    //_result:
   *
   *    // Compute the compressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey, true)
   *    //_result:
   *
   *    // Compute the uncompressed public key
   *    SigningKey.computePublicKey(sign.publicKey, false);
   *    //_result:
   *
   *    // Compute the Compressed a public key
   *    SigningKey.computePublicKey(sign.publicKey, true);
   *    //_result:
   */
  static computePublicKey(e, t) {
    let n = W(e, "key");
    if (n.length === 32) {
      const i = Un.getPublicKey(n, !!t);
      return O(i);
    }
    if (n.length === 64) {
      const i = new Uint8Array(65);
      i[0] = 4, i.set(n, 1), n = i;
    }
    const s = Un.ProjectivePoint.fromHex(n);
    return O(s.toRawBytes(t));
  }
  /**
   *  Returns the public key for the private key which produced the
   *  %%signature%% for the given %%digest%%.
   *
   *  @example:
   *    key = new SigningKey(id("some-secret"))
   *    digest = id("hello world")
   *    sig = key.sign(digest)
   *
   *    // Notice the signer public key...
   *    key.publicKey
   *    //_result:
   *
   *    // ...is equal to the recovered public key
   *    SigningKey.recoverPublicKey(digest, sig)
   *    //_result:
   *
   */
  static recoverPublicKey(e, t) {
    y(Ps(e) === 32, "invalid digest length", "digest", e);
    const n = xt.from(t);
    let s = Un.Signature.fromCompact(Le(ue([n.r, n.s])));
    s = s.addRecoveryBit(n.yParity);
    const i = s.recoverPublicKey(Le(e));
    return y(i != null, "invalid signautre for digest", "signature", t), "0x" + i.toHex(!1);
  }
  /**
   *  Returns the point resulting from adding the ellipic curve points
   *  %%p0%% and %%p1%%.
   *
   *  This is not a common function most developers should require, but
   *  can be useful for certain privacy-specific techniques.
   *
   *  For example, it is used by [[HDNodeWallet]] to compute child
   *  addresses from parent public keys and chain codes.
   */
  static addPoints(e, t, n) {
    const s = Un.ProjectivePoint.fromHex(mr.computePublicKey(e).substring(2)), i = Un.ProjectivePoint.fromHex(mr.computePublicKey(t).substring(2));
    return "0x" + s.add(i).toHex(!!n);
  }
};
fn = new WeakMap();
let to = mr;
const M0 = BigInt(0), D0 = BigInt(36);
function Zu(r) {
  r = r.toLowerCase();
  const e = r.substring(2).split(""), t = new Uint8Array(40);
  for (let s = 0; s < 40; s++)
    t[s] = e[s].charCodeAt(0);
  const n = W(he(t));
  for (let s = 0; s < 40; s += 2)
    n[s >> 1] >> 4 >= 8 && (e[s] = e[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && (e[s + 1] = e[s + 1].toUpperCase());
  return "0x" + e.join("");
}
const zl = {};
for (let r = 0; r < 10; r++)
  zl[String(r)] = String(r);
for (let r = 0; r < 26; r++)
  zl[String.fromCharCode(65 + r)] = String(10 + r);
const $u = 15;
function U0(r) {
  r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
  let e = r.split("").map((n) => zl[n]).join("");
  for (; e.length >= $u; ) {
    let n = e.substring(0, $u);
    e = parseInt(n, 10) % 97 + e.substring(n.length);
  }
  let t = String(98 - parseInt(e, 10) % 97);
  for (; t.length < 2; )
    t = "0" + t;
  return t;
}
const F0 = function() {
  const r = {};
  for (let e = 0; e < 36; e++) {
    const t = "0123456789abcdefghijklmnopqrstuvwxyz"[e];
    r[t] = BigInt(e);
  }
  return r;
}();
function H0(r) {
  r = r.toLowerCase();
  let e = M0;
  for (let t = 0; t < r.length; t++)
    e = e * D0 + F0[r[t]];
  return e;
}
function $(r) {
  if (y(typeof r == "string", "invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    r.startsWith("0x") || (r = "0x" + r);
    const e = Zu(r);
    return y(!r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === r, "bad address checksum", "address", r), e;
  }
  if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    y(r.substring(2, 4) === U0(r), "bad icap checksum", "address", r);
    let e = H0(r.substring(4)).toString(16);
    for (; e.length < 40; )
      e = "0" + e;
    return Zu("0x" + e);
  }
  y(!1, "invalid address", "address", r);
}
function G0(r) {
  const e = $(r.from);
  let n = T(r.nonce, "tx.nonce").toString(16);
  return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, $(ie(he($r([e, n])), 12));
}
function Zd(r) {
  return r && typeof r.getAddress == "function";
}
async function Mc(r, e) {
  const t = await e;
  return (t == null || t === "0x0000000000000000000000000000000000000000") && (v(typeof r != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: r }), y(!1, "invalid AddressLike value; did not resolve to a value address", "target", r)), $(t);
}
function Ue(r, e) {
  if (typeof r == "string")
    return r.match(/^0x[0-9a-f]{40}$/i) ? $(r) : (v(e != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), Mc(r, e.resolveName(r)));
  if (Zd(r))
    return Mc(r, r.getAddress());
  if (r && typeof r.then == "function")
    return Mc(r, r);
  y(!1, "unsupported addressable value", "target", r);
}
const rn = {};
function R(r, e) {
  let t = !1;
  return e < 0 && (t = !0, e *= -1), new Pe(rn, `${t ? "" : "u"}int${e}`, r, { signed: t, width: e });
}
function J(r, e) {
  return new Pe(rn, `bytes${e || ""}`, r, { size: e });
}
const Yu = Symbol.for("_ethers_typed");
var _r;
const sn = class sn {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, s) {
    /**
     *  The type, as a Solidity-compatible type.
     */
    A(this, "type");
    /**
     *  The actual value.
     */
    A(this, "value");
    b(this, _r, void 0);
    /**
     *  @_ignore:
     */
    A(this, "_typedSymbol");
    s == null && (s = null), Lo(rn, e, "Typed"), U(this, { _typedSymbol: Yu, type: t, value: n }), p(this, _r, s), this.format();
  }
  /**
   *  Format the type as a Human-Readable type.
   */
  format() {
    if (this.type === "array")
      throw new Error("");
    if (this.type === "dynamicArray")
      throw new Error("");
    return this.type === "tuple" ? `tuple(${this.value.map((e) => e.format()).join(",")})` : this.type;
  }
  /**
   *  The default value returned by this type.
   */
  defaultValue() {
    return 0;
  }
  /**
   *  The minimum value for numeric types.
   */
  minValue() {
    return 0;
  }
  /**
   *  The maximum value for numeric types.
   */
  maxValue() {
    return 0;
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].
   */
  isBigInt() {
    return !!this.type.match(/^u?int[0-9]+$/);
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedData]].
   */
  isData() {
    return this.type.startsWith("bytes");
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedString]].
   */
  isString() {
    return this.type === "string";
  }
  /**
   *  Returns the tuple name, if this is a tuple. Throws otherwise.
   */
  get tupleName() {
    if (this.type !== "tuple")
      throw TypeError("not a tuple");
    return u(this, _r);
  }
  // Returns the length of this type as an array
  // - `null` indicates the length is unforced, it could be dynamic
  // - `-1` indicates the length is dynamic
  // - any other value indicates it is a static array and is its length
  /**
   *  Returns the length of the array type or ``-1`` if it is dynamic.
   *
   *  Throws if the type is not an array.
   */
  get arrayLength() {
    if (this.type !== "array")
      throw TypeError("not an array");
    return u(this, _r) === !0 ? -1 : u(this, _r) === !1 ? this.value.length : null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(e, t) {
    return new sn(rn, e, t);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(e) {
    return R(e, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(e) {
    return R(e, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(e) {
    return R(e, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(e) {
    return R(e, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(e) {
    return R(e, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(e) {
    return R(e, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(e) {
    return R(e, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(e) {
    return R(e, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(e) {
    return R(e, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(e) {
    return R(e, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(e) {
    return R(e, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(e) {
    return R(e, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(e) {
    return R(e, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(e) {
    return R(e, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(e) {
    return R(e, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(e) {
    return R(e, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(e) {
    return R(e, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(e) {
    return R(e, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(e) {
    return R(e, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(e) {
    return R(e, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(e) {
    return R(e, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(e) {
    return R(e, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(e) {
    return R(e, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(e) {
    return R(e, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(e) {
    return R(e, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(e) {
    return R(e, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(e) {
    return R(e, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(e) {
    return R(e, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(e) {
    return R(e, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(e) {
    return R(e, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(e) {
    return R(e, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(e) {
    return R(e, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(e) {
    return R(e, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(e) {
    return R(e, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(e) {
    return R(e, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(e) {
    return R(e, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(e) {
    return R(e, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(e) {
    return R(e, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(e) {
    return R(e, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(e) {
    return R(e, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(e) {
    return R(e, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(e) {
    return R(e, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(e) {
    return R(e, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(e) {
    return R(e, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(e) {
    return R(e, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(e) {
    return R(e, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(e) {
    return R(e, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(e) {
    return R(e, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(e) {
    return R(e, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(e) {
    return R(e, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(e) {
    return R(e, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(e) {
    return R(e, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(e) {
    return R(e, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(e) {
    return R(e, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(e) {
    return R(e, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(e) {
    return R(e, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(e) {
    return R(e, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(e) {
    return R(e, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(e) {
    return R(e, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(e) {
    return R(e, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(e) {
    return R(e, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(e) {
    return R(e, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(e) {
    return R(e, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(e) {
    return R(e, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(e) {
    return R(e, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(e) {
    return R(e, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(e) {
    return J(e, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(e) {
    return J(e, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(e) {
    return J(e, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(e) {
    return J(e, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(e) {
    return J(e, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(e) {
    return J(e, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(e) {
    return J(e, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(e) {
    return J(e, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(e) {
    return J(e, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(e) {
    return J(e, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(e) {
    return J(e, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(e) {
    return J(e, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(e) {
    return J(e, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(e) {
    return J(e, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(e) {
    return J(e, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(e) {
    return J(e, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(e) {
    return J(e, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(e) {
    return J(e, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(e) {
    return J(e, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(e) {
    return J(e, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(e) {
    return J(e, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(e) {
    return J(e, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(e) {
    return J(e, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(e) {
    return J(e, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(e) {
    return J(e, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(e) {
    return J(e, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(e) {
    return J(e, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(e) {
    return J(e, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(e) {
    return J(e, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(e) {
    return J(e, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(e) {
    return J(e, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(e) {
    return J(e, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(e) {
    return new sn(rn, "address", e);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(e) {
    return new sn(rn, "bool", !!e);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(e) {
    return new sn(rn, "bytes", e);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(e) {
    return new sn(rn, "string", e);
  }
  /**
   *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
   */
  static array(e, t) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
   */
  static tuple(e, t) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static overrides(e) {
    return new sn(rn, "overrides", Object.assign({}, e));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(e) {
    return e && typeof e == "object" && "_typedSymbol" in e && e._typedSymbol === Yu;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(e, t) {
    if (sn.isTyped(e)) {
      if (e.type !== t)
        throw new Error(`invalid type: expecetd ${t}, got ${e.type}`);
      return e.value;
    }
    return e;
  }
};
_r = new WeakMap();
let Pe = sn;
class K0 extends kn {
  constructor(e) {
    super("address", "address", e, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(e, t) {
    let n = Pe.dereference(t, "string");
    try {
      n = $(n);
    } catch (s) {
      return this._throwError(s.message, t);
    }
    return e.writeValue(n);
  }
  decode(e) {
    return $(ar(e.readValue(), 20));
  }
}
class j0 extends kn {
  constructor(t) {
    super(t.name, t.type, "_", t.dynamic);
    A(this, "coder");
    this.coder = t;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(t, n) {
    return this.coder.encode(t, n);
  }
  decode(t) {
    return this.coder.decode(t);
  }
}
function $d(r, e, t) {
  let n = [];
  if (Array.isArray(t))
    n = t;
  else if (t && typeof t == "object") {
    let c = {};
    n = e.map((l) => {
      const h = l.localName;
      return v(h, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder: l }, value: t }), v(!c[h], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder: l }, value: t }), c[h] = !0, t[h];
    });
  } else
    y(!1, "invalid tuple value", "tuple", t);
  y(e.length === n.length, "types/value length mismatch", "tuple", t);
  let s = new al(), i = new al(), o = [];
  e.forEach((c, l) => {
    let h = n[l];
    if (c.dynamic) {
      let d = i.length;
      c.encode(i, h);
      let f = s.writeUpdatableValue();
      o.push((g) => {
        f(g + d);
      });
    } else
      c.encode(s, h);
  }), o.forEach((c) => {
    c(s.length);
  });
  let a = r.appendWriter(s);
  return a += r.appendWriter(i), a;
}
function Yd(r, e) {
  let t = [], n = [], s = r.subReader(0);
  return e.forEach((i) => {
    let o = null;
    if (i.dynamic) {
      let a = r.readIndex(), c = s.subReader(a);
      try {
        o = i.decode(c);
      } catch (l) {
        if (xe(l, "BUFFER_OVERRUN"))
          throw l;
        o = l, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    } else
      try {
        o = i.decode(r);
      } catch (a) {
        if (xe(a, "BUFFER_OVERRUN"))
          throw a;
        o = a, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    if (o == null)
      throw new Error("investigate");
    t.push(o), n.push(i.localName || null);
  }), Si.fromItems(t, n);
}
class V0 extends kn {
  constructor(t, n, s) {
    const i = t.type + "[" + (n >= 0 ? n : "") + "]", o = n === -1 || t.dynamic;
    super("array", i, s, o);
    A(this, "coder");
    A(this, "length");
    U(this, { coder: t, length: n });
  }
  defaultValue() {
    const t = this.coder.defaultValue(), n = [];
    for (let s = 0; s < this.length; s++)
      n.push(t);
    return n;
  }
  encode(t, n) {
    const s = Pe.dereference(n, "array");
    Array.isArray(s) || this._throwError("expected array value", s);
    let i = this.length;
    i === -1 && (i = s.length, t.writeValue(s.length)), id(s.length, i, "coder array" + (this.localName ? " " + this.localName : ""));
    let o = [];
    for (let a = 0; a < s.length; a++)
      o.push(this.coder);
    return $d(t, o, s);
  }
  decode(t) {
    let n = this.length;
    n === -1 && (n = t.readIndex(), v(n * De <= t.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: t.bytes, offset: n * De, length: t.dataLength }));
    let s = [];
    for (let i = 0; i < n; i++)
      s.push(new j0(this.coder));
    return Yd(t, s);
  }
}
class W0 extends kn {
  constructor(e) {
    super("bool", "bool", e, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(e, t) {
    const n = Pe.dereference(t, "bool");
    return e.writeValue(n ? 1 : 0);
  }
  decode(e) {
    return !!e.readValue();
  }
}
class Xd extends kn {
  constructor(e, t) {
    super(e, e, t, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(e, t) {
    t = Le(t);
    let n = e.writeValue(t.length);
    return n += e.writeBytes(t), n;
  }
  decode(e) {
    return e.readBytes(e.readIndex(), !0);
  }
}
class Q0 extends Xd {
  constructor(e) {
    super("bytes", e);
  }
  decode(e) {
    return O(super.decode(e));
  }
}
class z0 extends kn {
  constructor(t, n) {
    let s = "bytes" + String(t);
    super(s, s, n, !1);
    A(this, "size");
    U(this, { size: t }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(t, n) {
    let s = Le(Pe.dereference(n, this.type));
    return s.length !== this.size && this._throwError("incorrect data length", n), t.writeBytes(s);
  }
  decode(t) {
    return O(t.readBytes(this.size));
  }
}
const J0 = new Uint8Array([]);
class q0 extends kn {
  constructor(e) {
    super("null", "", e, !1);
  }
  defaultValue() {
    return null;
  }
  encode(e, t) {
    return t != null && this._throwError("not null", t), e.writeBytes(J0);
  }
  decode(e) {
    return e.readBytes(0), null;
  }
}
const Z0 = BigInt(0), $0 = BigInt(1), Y0 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class X0 extends kn {
  constructor(t, n, s) {
    const i = (n ? "int" : "uint") + t * 8;
    super(i, i, s, !1);
    A(this, "size");
    A(this, "signed");
    U(this, { size: t, signed: n }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(t, n) {
    let s = T(Pe.dereference(n, this.type)), i = br(Y0, De * 8);
    if (this.signed) {
      let o = br(i, this.size * 8 - 1);
      (s > o || s < -(o + $0)) && this._throwError("value out-of-bounds", n), s = cd(s, 8 * De);
    } else
      (s < Z0 || s > br(i, this.size * 8)) && this._throwError("value out-of-bounds", n);
    return t.writeValue(s);
  }
  decode(t) {
    let n = br(t.readValue(), this.size * 8);
    return this.signed && (n = Ea(n, this.size * 8)), n;
  }
}
class em extends Xd {
  constructor(e) {
    super("string", e);
  }
  defaultValue() {
    return "";
  }
  encode(e, t) {
    return super.encode(e, qt(Pe.dereference(t, "string")));
  }
  decode(e) {
    return Ca(super.decode(e));
  }
}
class $o extends kn {
  constructor(t, n) {
    let s = !1;
    const i = [];
    t.forEach((a) => {
      a.dynamic && (s = !0), i.push(a.type);
    });
    const o = "tuple(" + i.join(",") + ")";
    super("tuple", o, n, s);
    A(this, "coders");
    U(this, { coders: Object.freeze(t.slice()) });
  }
  defaultValue() {
    const t = [];
    this.coders.forEach((s) => {
      t.push(s.defaultValue());
    });
    const n = this.coders.reduce((s, i) => {
      const o = i.localName;
      return o && (s[o] || (s[o] = 0), s[o]++), s;
    }, {});
    return this.coders.forEach((s, i) => {
      let o = s.localName;
      !o || n[o] !== 1 || (o === "length" && (o = "_length"), t[o] == null && (t[o] = t[i]));
    }), Object.freeze(t);
  }
  encode(t, n) {
    const s = Pe.dereference(n, "tuple");
    return $d(t, this.coders, s);
  }
  decode(t) {
    return Yd(t, this.coders);
  }
}
function Yr(r) {
  return he(qt(r));
}
var tm = "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";
const Xu = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]), eh = 4;
function nm(r) {
  let e = 0;
  function t() {
    return r[e++] << 8 | r[e++];
  }
  let n = t(), s = 1, i = [0, 1];
  for (let x = 1; x < n; x++)
    i.push(s += t());
  let o = t(), a = e;
  e += o;
  let c = 0, l = 0;
  function h() {
    return c == 0 && (l = l << 8 | r[e++], c = 8), l >> --c & 1;
  }
  const d = 31, f = 2 ** d, g = f >>> 1, w = g >> 1, m = f - 1;
  let E = 0;
  for (let x = 0; x < d; x++)
    E = E << 1 | h();
  let C = [], S = 0, N = f;
  for (; ; ) {
    let x = Math.floor(((E - S + 1) * s - 1) / N), P = 0, M = n;
    for (; M - P > 1; ) {
      let Q = P + M >>> 1;
      x < i[Q] ? M = Q : P = Q;
    }
    if (P == 0)
      break;
    C.push(P);
    let D = S + Math.floor(N * i[P] / s), q = S + Math.floor(N * i[P + 1] / s) - 1;
    for (; !((D ^ q) & g); )
      E = E << 1 & m | h(), D = D << 1 & m, q = q << 1 & m | 1;
    for (; D & ~q & w; )
      E = E & g | E << 1 & m >>> 1 | h(), D = D << 1 ^ g, q = (q ^ g) << 1 | g | 1;
    S = D, N = 1 + q - D;
  }
  let _ = n - 4;
  return C.map((x) => {
    switch (x - _) {
      case 3:
        return _ + 65792 + (r[a++] << 16 | r[a++] << 8 | r[a++]);
      case 2:
        return _ + 256 + (r[a++] << 8 | r[a++]);
      case 1:
        return _ + r[a++];
      default:
        return x - 1;
    }
  });
}
function rm(r) {
  let e = 0;
  return () => r[e++];
}
function ef(r) {
  return rm(nm(sm(r)));
}
function sm(r) {
  let e = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((s, i) => e[s.charCodeAt(0)] = i);
  let t = r.length, n = new Uint8Array(6 * t >> 3);
  for (let s = 0, i = 0, o = 0, a = 0; s < t; s++)
    a = a << 6 | e[r.charCodeAt(s)], o += 6, o >= 8 && (n[i++] = a >> (o -= 8));
  return n;
}
function im(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function om(r, e) {
  let t = Array(r);
  for (let n = 0, s = 0; n < r; n++)
    t[n] = s += im(e());
  return t;
}
function no(r, e = 0) {
  let t = [];
  for (; ; ) {
    let n = r(), s = r();
    if (!s)
      break;
    e += n;
    for (let i = 0; i < s; i++)
      t.push(e + i);
    e += s + 1;
  }
  return t;
}
function tf(r) {
  return ro(() => {
    let e = no(r);
    if (e.length)
      return e;
  });
}
function nf(r) {
  let e = [];
  for (; ; ) {
    let t = r();
    if (t == 0)
      break;
    e.push(am(t, r));
  }
  for (; ; ) {
    let t = r() - 1;
    if (t < 0)
      break;
    e.push(cm(t, r));
  }
  return e.flat();
}
function ro(r) {
  let e = [];
  for (; ; ) {
    let t = r(e.length);
    if (!t)
      break;
    e.push(t);
  }
  return e;
}
function rf(r, e, t) {
  let n = Array(r).fill().map(() => []);
  for (let s = 0; s < e; s++)
    om(r, t).forEach((i, o) => n[o].push(i));
  return n;
}
function am(r, e) {
  let t = 1 + e(), n = e(), s = ro(e);
  return rf(s.length, 1 + r, e).flatMap((o, a) => {
    let [c, ...l] = o;
    return Array(s[a]).fill().map((h, d) => {
      let f = d * n;
      return [c + d * t, l.map((g) => g + f)];
    });
  });
}
function cm(r, e) {
  let t = 1 + e();
  return rf(t, 1 + r, e).map((s) => [s[0], s.slice(1)]);
}
function lm(r) {
  let e = [], t = no(r);
  return s(n([]), []), e;
  function n(i) {
    let o = r(), a = ro(() => {
      let c = no(r).map((l) => t[l]);
      if (c.length)
        return n(c);
    });
    return { S: o, B: a, Q: i };
  }
  function s({ S: i, B: o }, a, c) {
    if (!(i & 4 && c === a[a.length - 1])) {
      i & 2 && (c = a[a.length - 1]), i & 1 && e.push(a);
      for (let l of o)
        for (let h of l.Q)
          s(l, [...a, h], c);
    }
  }
}
function um(r) {
  return r.toString(16).toUpperCase().padStart(2, "0");
}
function sf(r) {
  return `{${um(r)}}`;
}
function hm(r) {
  let e = [];
  for (let t = 0, n = r.length; t < n; ) {
    let s = r.codePointAt(t);
    t += s < 65536 ? 1 : 2, e.push(s);
  }
  return e;
}
function Oi(r) {
  let t = r.length;
  if (t < 4096)
    return String.fromCodePoint(...r);
  let n = [];
  for (let s = 0; s < t; )
    n.push(String.fromCodePoint(...r.slice(s, s += 4096)));
  return n.join("");
}
function dm(r, e) {
  let t = r.length, n = t - e.length;
  for (let s = 0; n == 0 && s < t; s++)
    n = r[s] - e[s];
  return n;
}
var fm = "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";
const so = 44032, Na = 4352, Sa = 4449, ka = 4519, of = 19, af = 21, Ti = 28, xa = af * Ti, pm = of * xa, gm = so + pm, mm = Na + of, ym = Sa + af, wm = ka + Ti;
function Wi(r) {
  return r >> 24 & 255;
}
function cf(r) {
  return r & 16777215;
}
let gl, th, ml, ua;
function bm() {
  let r = ef(fm);
  gl = new Map(tf(r).flatMap((e, t) => e.map((n) => [n, t + 1 << 24]))), th = new Set(no(r)), ml = /* @__PURE__ */ new Map(), ua = /* @__PURE__ */ new Map();
  for (let [e, t] of nf(r)) {
    if (!th.has(e) && t.length == 2) {
      let [n, s] = t, i = ua.get(n);
      i || (i = /* @__PURE__ */ new Map(), ua.set(n, i)), i.set(s, e);
    }
    ml.set(e, t.reverse());
  }
}
function lf(r) {
  return r >= so && r < gm;
}
function Am(r, e) {
  if (r >= Na && r < mm && e >= Sa && e < ym)
    return so + (r - Na) * xa + (e - Sa) * Ti;
  if (lf(r) && e > ka && e < wm && (r - so) % Ti == 0)
    return r + (e - ka);
  {
    let t = ua.get(r);
    return t && (t = t.get(e), t) ? t : -1;
  }
}
function uf(r) {
  gl || bm();
  let e = [], t = [], n = !1;
  function s(i) {
    let o = gl.get(i);
    o && (n = !0, i |= o), e.push(i);
  }
  for (let i of r)
    for (; ; ) {
      if (i < 128)
        e.push(i);
      else if (lf(i)) {
        let o = i - so, a = o / xa | 0, c = o % xa / Ti | 0, l = o % Ti;
        s(Na + a), s(Sa + c), l > 0 && s(ka + l);
      } else {
        let o = ml.get(i);
        o ? t.push(...o) : s(i);
      }
      if (!t.length)
        break;
      i = t.pop();
    }
  if (n && e.length > 1) {
    let i = Wi(e[0]);
    for (let o = 1; o < e.length; o++) {
      let a = Wi(e[o]);
      if (a == 0 || i <= a) {
        i = a;
        continue;
      }
      let c = o - 1;
      for (; ; ) {
        let l = e[c + 1];
        if (e[c + 1] = e[c], e[c] = l, !c || (i = Wi(e[--c]), i <= a))
          break;
      }
      i = Wi(e[o]);
    }
  }
  return e;
}
function Em(r) {
  let e = [], t = [], n = -1, s = 0;
  for (let i of r) {
    let o = Wi(i), a = cf(i);
    if (n == -1)
      o == 0 ? n = a : e.push(a);
    else if (s > 0 && s >= o)
      o == 0 ? (e.push(n, ...t), t.length = 0, n = a) : t.push(a), s = o;
    else {
      let c = Am(n, a);
      c >= 0 ? n = c : s == 0 && o == 0 ? (e.push(n), n = a) : (t.push(a), s = o);
    }
  }
  return n >= 0 && e.push(n, ...t), e;
}
function hf(r) {
  return uf(r).map(cf);
}
function Cm(r) {
  return Em(uf(r));
}
const nh = 45, df = ".", ff = 65039, pf = 1, Pa = (r) => Array.from(r);
function io(r, e) {
  return r.P.has(e) || r.Q.has(e);
}
class vm extends Array {
  get is_emoji() {
    return !0;
  }
  // free tagging system
}
let yl, gf, Er, wl, mf, Os, Dc, ws, dr, rh, bl;
function Jl() {
  if (yl)
    return;
  let r = ef(tm);
  const e = () => no(r), t = () => new Set(e()), n = (h, d) => d.forEach((f) => h.add(f));
  yl = new Map(nf(r)), gf = t(), Er = e(), wl = new Set(e().map((h) => Er[h])), Er = new Set(Er), mf = t(), t();
  let s = tf(r), i = r();
  const o = () => {
    let h = /* @__PURE__ */ new Set();
    return e().forEach((d) => n(h, s[d])), n(h, e()), h;
  };
  Os = ro((h) => {
    let d = ro(r).map((f) => f + 96);
    if (d.length) {
      let f = h >= i;
      d[0] -= 32, d = Oi(d), f && (d = `Restricted[${d}]`);
      let g = o(), w = o(), m = !r();
      return { N: d, P: g, Q: w, M: m, R: f };
    }
  }), Dc = t(), ws = /* @__PURE__ */ new Map();
  let a = e().concat(Pa(Dc)).sort((h, d) => h - d);
  a.forEach((h, d) => {
    let f = r(), g = a[d] = f ? a[d - f] : { V: [], M: /* @__PURE__ */ new Map() };
    g.V.push(h), Dc.has(h) || ws.set(h, g);
  });
  for (let { V: h, M: d } of new Set(ws.values())) {
    let f = [];
    for (let w of h) {
      let m = Os.filter((C) => io(C, w)), E = f.find(({ G: C }) => m.some((S) => C.has(S)));
      E || (E = { G: /* @__PURE__ */ new Set(), V: [] }, f.push(E)), E.V.push(w), n(E.G, m);
    }
    let g = f.flatMap((w) => Pa(w.G));
    for (let { G: w, V: m } of f) {
      let E = new Set(g.filter((C) => !w.has(C)));
      for (let C of m)
        d.set(C, E);
    }
  }
  dr = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set();
  const l = (h) => dr.has(h) ? c.add(h) : dr.add(h);
  for (let h of Os) {
    for (let d of h.P)
      l(d);
    for (let d of h.Q)
      l(d);
  }
  for (let h of dr)
    !ws.has(h) && !c.has(h) && ws.set(h, pf);
  n(dr, hf(dr)), rh = lm(r).map((h) => vm.from(h)).sort(dm), bl = /* @__PURE__ */ new Map();
  for (let h of rh) {
    let d = [bl];
    for (let f of h) {
      let g = d.map((w) => {
        let m = w.get(f);
        return m || (m = /* @__PURE__ */ new Map(), w.set(f, m)), m;
      });
      f === ff ? d.push(...g) : d = g;
    }
    for (let f of d)
      f.V = h;
  }
}
function ql(r) {
  return (yf(r) ? "" : `${Zl(Ya([r]))} `) + sf(r);
}
function Zl(r) {
  return `"${r}"‎`;
}
function Im(r) {
  if (r.length >= 4 && r[2] == nh && r[3] == nh)
    throw new Error(`invalid label extension: "${Oi(r.slice(0, 4))}"`);
}
function Nm(r) {
  for (let t = r.lastIndexOf(95); t > 0; )
    if (r[--t] !== 95)
      throw new Error("underscore allowed only at start");
}
function Sm(r) {
  let e = r[0], t = Xu.get(e);
  if (t)
    throw Zi(`leading ${t}`);
  let n = r.length, s = -1;
  for (let i = 1; i < n; i++) {
    e = r[i];
    let o = Xu.get(e);
    if (o) {
      if (s == i)
        throw Zi(`${t} + ${o}`);
      s = i + 1, t = o;
    }
  }
  if (s == n)
    throw Zi(`trailing ${t}`);
}
function Ya(r, e = 1 / 0, t = sf) {
  let n = [];
  km(r[0]) && n.push("◌"), r.length > e && (e >>= 1, r = [...r.slice(0, e), 8230, ...r.slice(-e)]);
  let s = 0, i = r.length;
  for (let o = 0; o < i; o++) {
    let a = r[o];
    yf(a) && (n.push(Oi(r.slice(s, o))), n.push(t(a)), s = o + 1);
  }
  return n.push(Oi(r.slice(s, i))), n.join("");
}
function km(r) {
  return Jl(), Er.has(r);
}
function yf(r) {
  return Jl(), mf.has(r);
}
function xm(r) {
  return Tm(Pm(r, Cm, Lm));
}
function Pm(r, e, t) {
  if (!r)
    return [];
  Jl();
  let n = 0;
  return r.split(df).map((s) => {
    let i = hm(s), o = {
      input: i,
      offset: n
      // codepoint, not substring!
    };
    n += i.length + 1;
    try {
      let a = o.tokens = Bm(i, e, t), c = a.length, l;
      if (!c)
        throw new Error("empty label");
      let h = o.output = a.flat();
      if (Nm(h), !(o.emoji = c > 1 || a[0].is_emoji) && h.every((f) => f < 128))
        Im(h), l = "ASCII";
      else {
        let f = a.flatMap((g) => g.is_emoji ? [] : g);
        if (!f.length)
          l = "Emoji";
        else {
          if (Er.has(h[0]))
            throw Zi("leading combining mark");
          for (let m = 1; m < c; m++) {
            let E = a[m];
            if (!E.is_emoji && Er.has(E[0]))
              throw Zi(`emoji + combining mark: "${Oi(a[m - 1])} + ${Ya([E[0]])}"`);
          }
          Sm(h);
          let g = Pa(new Set(f)), [w] = Om(g);
          _m(w, f), Rm(w, g), l = w.N;
        }
      }
      o.type = l;
    } catch (a) {
      o.error = a;
    }
    return o;
  });
}
function Rm(r, e) {
  let t, n = [];
  for (let s of e) {
    let i = ws.get(s);
    if (i === pf)
      return;
    if (i) {
      let o = i.M.get(s);
      if (t = t ? t.filter((a) => o.has(a)) : Pa(o), !t.length)
        return;
    } else
      n.push(s);
  }
  if (t) {
    for (let s of t)
      if (n.every((i) => io(s, i)))
        throw new Error(`whole-script confusable: ${r.N}/${s.N}`);
  }
}
function Om(r) {
  let e = Os;
  for (let t of r) {
    let n = e.filter((s) => io(s, t));
    if (!n.length)
      throw Os.some((s) => io(s, t)) ? bf(e[0], t) : wf(t);
    if (e = n, n.length == 1)
      break;
  }
  return e;
}
function Tm(r) {
  return r.map(({ input: e, error: t, output: n }) => {
    if (t) {
      let s = t.message;
      throw new Error(r.length == 1 ? s : `Invalid label ${Zl(Ya(e, 63))}: ${s}`);
    }
    return Oi(n);
  }).join(df);
}
function wf(r) {
  return new Error(`disallowed character: ${ql(r)}`);
}
function bf(r, e) {
  let t = ql(e), n = Os.find((s) => s.P.has(e));
  return n && (t = `${n.N} ${t}`), new Error(`illegal mixture: ${r.N} + ${t}`);
}
function Zi(r) {
  return new Error(`illegal placement: ${r}`);
}
function _m(r, e) {
  for (let t of e)
    if (!io(r, t))
      throw bf(r, t);
  if (r.M) {
    let t = hf(e);
    for (let n = 1, s = t.length; n < s; n++)
      if (wl.has(t[n])) {
        let i = n + 1;
        for (let o; i < s && wl.has(o = t[i]); i++)
          for (let a = n; a < i; a++)
            if (t[a] == o)
              throw new Error(`duplicate non-spacing marks: ${ql(o)}`);
        if (i - n > eh)
          throw new Error(`excessive non-spacing marks: ${Zl(Ya(t.slice(n - 1, i)))} (${i - n}/${eh})`);
        n = i;
      }
  }
}
function Bm(r, e, t) {
  let n = [], s = [];
  for (r = r.slice().reverse(); r.length; ) {
    let i = Mm(r);
    if (i)
      s.length && (n.push(e(s)), s = []), n.push(t(i));
    else {
      let o = r.pop();
      if (dr.has(o))
        s.push(o);
      else {
        let a = yl.get(o);
        if (a)
          s.push(...a);
        else if (!gf.has(o))
          throw wf(o);
      }
    }
  }
  return s.length && n.push(e(s)), n;
}
function Lm(r) {
  return r.filter((e) => e != ff);
}
function Mm(r, e) {
  let t = bl, n, s = r.length;
  for (; s && (t = t.get(r[--s]), !!t); ) {
    let { V: i } = t;
    i && (n = i, r.length = s);
  }
  return n;
}
const Af = new Uint8Array(32);
Af.fill(0);
function sh(r) {
  return y(r.length !== 0, "invalid ENS name; empty component", "comp", r), r;
}
function Ef(r) {
  const e = qt(Dm(r)), t = [];
  if (r.length === 0)
    return t;
  let n = 0;
  for (let s = 0; s < e.length; s++)
    e[s] === 46 && (t.push(sh(e.slice(n, s))), n = s + 1);
  return y(n < e.length, "invalid ENS name; empty component", "name", r), t.push(sh(e.slice(n))), t;
}
function Dm(r) {
  try {
    if (r.length === 0)
      throw new Error("empty label");
    return xm(r);
  } catch (e) {
    y(!1, `invalid ENS name (${e.message})`, "name", r);
  }
}
function Al(r) {
  y(typeof r == "string", "invalid ENS name; not a string", "name", r), y(r.length, "invalid ENS name (empty label)", "name", r);
  let e = Af;
  const t = Ef(r);
  for (; t.length; )
    e = he(ue([e, he(t.pop())]));
  return O(e);
}
function Um(r, e) {
  const t = e;
  return y(t <= 255, "DNS encoded label cannot exceed 255", "length", t), O(ue(Ef(r).map((n) => {
    y(n.length <= t, `label ${JSON.stringify(r)} exceeds ${t} bytes`, "name", r);
    const s = new Uint8Array(n.length + 1);
    return s.set(n, 1), s[0] = s.length - 1, s;
  }))) + "00";
}
function Uc(r, e) {
  return {
    address: $(r),
    storageKeys: e.map((t, n) => (y(X(t, 32), "invalid slot", `storageKeys[${n}]`, t), t.toLowerCase()))
  };
}
function rs(r) {
  if (Array.isArray(r))
    return r.map((t, n) => Array.isArray(t) ? (y(t.length === 2, "invalid slot set", `value[${n}]`, t), Uc(t[0], t[1])) : (y(t != null && typeof t == "object", "invalid address-slot set", "value", r), Uc(t.address, t.storageKeys)));
  y(r != null && typeof r == "object", "invalid access list", "value", r);
  const e = Object.keys(r).map((t) => {
    const n = r[t].reduce((s, i) => (s[i] = !0, s), {});
    return Uc(t, Object.keys(n).sort());
  });
  return e.sort((t, n) => t.address.localeCompare(n.address)), e;
}
function Fm(r) {
  let e;
  return typeof r == "string" ? e = to.computePublicKey(r, !1) : e = r.publicKey, $(he("0x" + e.substring(4)).substring(26));
}
function Hm(r, e) {
  return Fm(to.recoverPublicKey(r, e));
}
const ye = BigInt(0), Gm = BigInt(2), Km = BigInt(27), jm = BigInt(28), Vm = BigInt(35), Wm = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), Fc = 4096 * 32;
function ih(r, e) {
  let t = r.toString(16);
  for (; t.length < 2; )
    t = "0" + t;
  return t += Mi(e).substring(4), "0x" + t;
}
function Xa(r) {
  return r === "0x" ? null : $(r);
}
function $l(r, e) {
  try {
    return rs(r);
  } catch (t) {
    y(!1, t.message, e, r);
  }
}
function Do(r, e) {
  return r === "0x" ? 0 : H(r, e);
}
function le(r, e) {
  if (r === "0x")
    return ye;
  const t = T(r, e);
  return y(t <= Wm, "value exceeds uint size", e, t), t;
}
function te(r, e) {
  const t = T(r, "value"), n = Me(t);
  return y(n.length <= 32, "value too large", `tx.${e}`, t), n;
}
function Yl(r) {
  return rs(r).map((e) => [e.address, e.storageKeys]);
}
function Qm(r, e) {
  y(Array.isArray(r), `invalid ${e}`, "value", r);
  for (let t = 0; t < r.length; t++)
    y(X(r[t], 32), "invalid ${ param } hash", `value[${t}]`, r[t]);
  return r;
}
function zm(r) {
  const e = Ja(r);
  y(Array.isArray(e) && (e.length === 9 || e.length === 6), "invalid field count for legacy transaction", "data", r);
  const t = {
    type: 0,
    nonce: Do(e[0], "nonce"),
    gasPrice: le(e[1], "gasPrice"),
    gasLimit: le(e[2], "gasLimit"),
    to: Xa(e[3]),
    value: le(e[4], "value"),
    data: O(e[5]),
    chainId: ye
  };
  if (e.length === 6)
    return t;
  const n = le(e[6], "v"), s = le(e[7], "r"), i = le(e[8], "s");
  if (s === ye && i === ye)
    t.chainId = n;
  else {
    let o = (n - Vm) / Gm;
    o < ye && (o = ye), t.chainId = o, y(o !== ye || n === Km || n === jm, "non-canonical legacy v", "v", e[6]), t.signature = xt.from({
      r: Zr(e[7], 32),
      s: Zr(e[8], 32),
      v: n
    });
  }
  return t;
}
function Jm(r, e) {
  const t = [
    te(r.nonce, "nonce"),
    te(r.gasPrice || 0, "gasPrice"),
    te(r.gasLimit, "gasLimit"),
    r.to || "0x",
    te(r.value, "value"),
    r.data
  ];
  let n = ye;
  if (r.chainId != ye)
    n = T(r.chainId, "tx.chainId"), y(!e || e.networkV == null || e.legacyChainId === n, "tx.chainId/sig.v mismatch", "sig", e);
  else if (r.signature) {
    const i = r.signature.legacyChainId;
    i != null && (n = i);
  }
  if (!e)
    return n !== ye && (t.push(Me(n)), t.push("0x"), t.push("0x")), $r(t);
  let s = BigInt(27 + e.yParity);
  return n !== ye ? s = xt.getChainIdV(n, e.v) : BigInt(e.v) !== s && y(!1, "tx.chainId/sig.v mismatch", "sig", e), t.push(Me(s)), t.push(Me(e.r)), t.push(Me(e.s)), $r(t);
}
function Xl(r, e) {
  let t;
  try {
    if (t = Do(e[0], "yParity"), t !== 0 && t !== 1)
      throw new Error("bad yParity");
  } catch {
    y(!1, "invalid yParity", "yParity", e[0]);
  }
  const n = Zr(e[1], 32), s = Zr(e[2], 32), i = xt.from({ r: n, s, yParity: t });
  r.signature = i;
}
function qm(r) {
  const e = Ja(W(r).slice(1));
  y(Array.isArray(e) && (e.length === 9 || e.length === 12), "invalid field count for transaction type: 2", "data", O(r));
  const t = {
    type: 2,
    chainId: le(e[0], "chainId"),
    nonce: Do(e[1], "nonce"),
    maxPriorityFeePerGas: le(e[2], "maxPriorityFeePerGas"),
    maxFeePerGas: le(e[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: le(e[4], "gasLimit"),
    to: Xa(e[5]),
    value: le(e[6], "value"),
    data: O(e[7]),
    accessList: $l(e[8], "accessList")
  };
  return e.length === 9 || Xl(t, e.slice(9)), t;
}
function Zm(r, e) {
  const t = [
    te(r.chainId, "chainId"),
    te(r.nonce, "nonce"),
    te(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    te(r.maxFeePerGas || 0, "maxFeePerGas"),
    te(r.gasLimit, "gasLimit"),
    r.to || "0x",
    te(r.value, "value"),
    r.data,
    Yl(r.accessList || [])
  ];
  return e && (t.push(te(e.yParity, "yParity")), t.push(Me(e.r)), t.push(Me(e.s))), ue(["0x02", $r(t)]);
}
function $m(r) {
  const e = Ja(W(r).slice(1));
  y(Array.isArray(e) && (e.length === 8 || e.length === 11), "invalid field count for transaction type: 1", "data", O(r));
  const t = {
    type: 1,
    chainId: le(e[0], "chainId"),
    nonce: Do(e[1], "nonce"),
    gasPrice: le(e[2], "gasPrice"),
    gasLimit: le(e[3], "gasLimit"),
    to: Xa(e[4]),
    value: le(e[5], "value"),
    data: O(e[6]),
    accessList: $l(e[7], "accessList")
  };
  return e.length === 8 || Xl(t, e.slice(8)), t;
}
function Ym(r, e) {
  const t = [
    te(r.chainId, "chainId"),
    te(r.nonce, "nonce"),
    te(r.gasPrice || 0, "gasPrice"),
    te(r.gasLimit, "gasLimit"),
    r.to || "0x",
    te(r.value, "value"),
    r.data,
    Yl(r.accessList || [])
  ];
  return e && (t.push(te(e.yParity, "recoveryParam")), t.push(Me(e.r)), t.push(Me(e.s))), ue(["0x01", $r(t)]);
}
function Xm(r) {
  let e = Ja(W(r).slice(1)), t = "3", n = null;
  if (e.length === 4 && Array.isArray(e[0])) {
    t = "3 (network format)";
    const i = e[1], o = e[2], a = e[3];
    y(Array.isArray(i), "invalid network format: blobs not an array", "fields[1]", i), y(Array.isArray(o), "invalid network format: commitments not an array", "fields[2]", o), y(Array.isArray(a), "invalid network format: proofs not an array", "fields[3]", a), y(i.length === o.length, "invalid network format: blobs/commitments length mismatch", "fields", e), y(i.length === a.length, "invalid network format: blobs/proofs length mismatch", "fields", e), n = [];
    for (let c = 0; c < e[1].length; c++)
      n.push({
        data: i[c],
        commitment: o[c],
        proof: a[c]
      });
    e = e[0];
  }
  y(Array.isArray(e) && (e.length === 11 || e.length === 14), `invalid field count for transaction type: ${t}`, "data", O(r));
  const s = {
    type: 3,
    chainId: le(e[0], "chainId"),
    nonce: Do(e[1], "nonce"),
    maxPriorityFeePerGas: le(e[2], "maxPriorityFeePerGas"),
    maxFeePerGas: le(e[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: le(e[4], "gasLimit"),
    to: Xa(e[5]),
    value: le(e[6], "value"),
    data: O(e[7]),
    accessList: $l(e[8], "accessList"),
    maxFeePerBlobGas: le(e[9], "maxFeePerBlobGas"),
    blobVersionedHashes: e[10]
  };
  n && (s.blobs = n), y(s.to != null, `invalid address for transaction type: ${t}`, "data", r), y(Array.isArray(s.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", r);
  for (let i = 0; i < s.blobVersionedHashes.length; i++)
    y(X(s.blobVersionedHashes[i], 32), `invalid blobVersionedHash at index ${i}: must be length 32`, "data", r);
  return e.length === 11 || Xl(s, e.slice(11)), s;
}
function ey(r, e, t) {
  const n = [
    te(r.chainId, "chainId"),
    te(r.nonce, "nonce"),
    te(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    te(r.maxFeePerGas || 0, "maxFeePerGas"),
    te(r.gasLimit, "gasLimit"),
    r.to || eo,
    te(r.value, "value"),
    r.data,
    Yl(r.accessList || []),
    te(r.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
    Qm(r.blobVersionedHashes || [], "blobVersionedHashes")
  ];
  return e && (n.push(te(e.yParity, "yParity")), n.push(Me(e.r)), n.push(Me(e.s)), t) ? ue([
    "0x03",
    $r([
      n,
      t.map((s) => s.data),
      t.map((s) => s.commitment),
      t.map((s) => s.proof)
    ])
  ]) : ue(["0x03", $r(n)]);
}
var Ut, zs, Js, qs, Zs, $s, Ys, Xs, ei, ti, ni, ri, Br, jn, pn, Vn, si, ha;
const on = class on {
  /**
   *  Creates a new Transaction with default values.
   */
  constructor() {
    b(this, si);
    b(this, Ut, void 0);
    b(this, zs, void 0);
    b(this, Js, void 0);
    b(this, qs, void 0);
    b(this, Zs, void 0);
    b(this, $s, void 0);
    b(this, Ys, void 0);
    b(this, Xs, void 0);
    b(this, ei, void 0);
    b(this, ti, void 0);
    b(this, ni, void 0);
    b(this, ri, void 0);
    b(this, Br, void 0);
    b(this, jn, void 0);
    b(this, pn, void 0);
    b(this, Vn, void 0);
    p(this, Ut, null), p(this, zs, null), p(this, qs, 0), p(this, Zs, ye), p(this, $s, null), p(this, Ys, null), p(this, Xs, null), p(this, Js, "0x"), p(this, ei, ye), p(this, ti, ye), p(this, ni, null), p(this, ri, null), p(this, Br, null), p(this, jn, null), p(this, Vn, null), p(this, pn, null);
  }
  /**
   *  The transaction type.
   *
   *  If null, the type will be automatically inferred based on
   *  explicit properties.
   */
  get type() {
    return u(this, Ut);
  }
  set type(e) {
    switch (e) {
      case null:
        p(this, Ut, null);
        break;
      case 0:
      case "legacy":
        p(this, Ut, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        p(this, Ut, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        p(this, Ut, 2);
        break;
      case 3:
      case "cancun":
      case "eip-4844":
        p(this, Ut, 3);
        break;
      default:
        y(!1, "unsupported transaction type", "type", e);
    }
  }
  /**
   *  The name of the transaction type.
   */
  get typeName() {
    switch (this.type) {
      case 0:
        return "legacy";
      case 1:
        return "eip-2930";
      case 2:
        return "eip-1559";
      case 3:
        return "eip-4844";
    }
    return null;
  }
  /**
   *  The ``to`` address for the transaction or ``null`` if the
   *  transaction is an ``init`` transaction.
   */
  get to() {
    const e = u(this, zs);
    return e == null && this.type === 3 ? eo : e;
  }
  set to(e) {
    p(this, zs, e == null ? null : $(e));
  }
  /**
   *  The transaction nonce.
   */
  get nonce() {
    return u(this, qs);
  }
  set nonce(e) {
    p(this, qs, H(e, "value"));
  }
  /**
   *  The gas limit.
   */
  get gasLimit() {
    return u(this, Zs);
  }
  set gasLimit(e) {
    p(this, Zs, T(e));
  }
  /**
   *  The gas price.
   *
   *  On legacy networks this defines the fee that will be paid. On
   *  EIP-1559 networks, this should be ``null``.
   */
  get gasPrice() {
    const e = u(this, $s);
    return e == null && (this.type === 0 || this.type === 1) ? ye : e;
  }
  set gasPrice(e) {
    p(this, $s, e == null ? null : T(e, "gasPrice"));
  }
  /**
   *  The maximum priority fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxPriorityFeePerGas() {
    const e = u(this, Ys);
    return e ?? (this.type === 2 || this.type === 3 ? ye : null);
  }
  set maxPriorityFeePerGas(e) {
    p(this, Ys, e == null ? null : T(e, "maxPriorityFeePerGas"));
  }
  /**
   *  The maximum total fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxFeePerGas() {
    const e = u(this, Xs);
    return e ?? (this.type === 2 || this.type === 3 ? ye : null);
  }
  set maxFeePerGas(e) {
    p(this, Xs, e == null ? null : T(e, "maxFeePerGas"));
  }
  /**
   *  The transaction data. For ``init`` transactions this is the
   *  deployment code.
   */
  get data() {
    return u(this, Js);
  }
  set data(e) {
    p(this, Js, O(e));
  }
  /**
   *  The amount of ether (in wei) to send in this transactions.
   */
  get value() {
    return u(this, ei);
  }
  set value(e) {
    p(this, ei, T(e, "value"));
  }
  /**
   *  The chain ID this transaction is valid on.
   */
  get chainId() {
    return u(this, ti);
  }
  set chainId(e) {
    p(this, ti, T(e));
  }
  /**
   *  If signed, the signature for this transaction.
   */
  get signature() {
    return u(this, ni) || null;
  }
  set signature(e) {
    p(this, ni, e == null ? null : xt.from(e));
  }
  /**
   *  The access list.
   *
   *  An access list permits discounted (but pre-paid) access to
   *  bytecode and state variable access within contract execution.
   */
  get accessList() {
    const e = u(this, ri) || null;
    return e ?? (this.type === 1 || this.type === 2 || this.type === 3 ? [] : null);
  }
  set accessList(e) {
    p(this, ri, e == null ? null : rs(e));
  }
  /**
   *  The max fee per blob gas for Cancun transactions.
   */
  get maxFeePerBlobGas() {
    const e = u(this, Br);
    return e == null && this.type === 3 ? ye : e;
  }
  set maxFeePerBlobGas(e) {
    p(this, Br, e == null ? null : T(e, "maxFeePerBlobGas"));
  }
  /**
   *  The BLOb versioned hashes for Cancun transactions.
   */
  get blobVersionedHashes() {
    let e = u(this, jn);
    return e == null && this.type === 3 ? [] : e;
  }
  set blobVersionedHashes(e) {
    if (e != null) {
      y(Array.isArray(e), "blobVersionedHashes must be an Array", "value", e), e = e.slice();
      for (let t = 0; t < e.length; t++)
        y(X(e[t], 32), "invalid blobVersionedHash", `value[${t}]`, e[t]);
    }
    p(this, jn, e);
  }
  /**
   *  The BLObs for the Transaction, if any.
   *
   *  If ``blobs`` is non-``null``, then the [[seriailized]]
   *  will return the network formatted sidecar, otherwise it
   *  will return the standard [[link-eip-2718]] payload. The
   *  [[unsignedSerialized]] is unaffected regardless.
   *
   *  When setting ``blobs``, either fully valid [[Blob]] objects
   *  may be specified (i.e. correctly padded, with correct
   *  committments and proofs) or a raw [[BytesLike]] may
   *  be provided.
   *
   *  If raw [[BytesLike]] are provided, the [[kzg]] property **must**
   *  be already set. The blob will be correctly padded and the
   *  [[KzgLibrary]] will be used to compute the committment and
   *  proof for the blob.
   *
   *  A BLOb is a sequence of field elements, each of which must
   *  be within the BLS field modulo, so some additional processing
   *  may be required to encode arbitrary data to ensure each 32 byte
   *  field is within the valid range.
   *
   *  Setting this automatically populates [[blobVersionedHashes]],
   *  overwriting any existing values. Setting this to ``null``
   *  does **not** remove the [[blobVersionedHashes]], leaving them
   *  present.
   */
  get blobs() {
    return u(this, Vn) == null ? null : u(this, Vn).map((e) => Object.assign({}, e));
  }
  set blobs(e) {
    if (e == null) {
      p(this, Vn, null);
      return;
    }
    const t = [], n = [];
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      if (Ul(i)) {
        v(u(this, pn), "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
          operation: "set blobs()"
        });
        let o = W(i);
        if (y(o.length <= Fc, "blob is too large", `blobs[${s}]`, i), o.length !== Fc) {
          const l = new Uint8Array(Fc);
          l.set(o), o = l;
        }
        const a = u(this, pn).blobToKzgCommitment(o), c = O(u(this, pn).computeBlobKzgProof(o, a));
        t.push({
          data: O(o),
          commitment: O(a),
          proof: c
        }), n.push(ih(1, a));
      } else {
        const o = O(i.commitment);
        t.push({
          data: O(i.data),
          commitment: o,
          proof: O(i.proof)
        }), n.push(ih(1, o));
      }
    }
    p(this, Vn, t), p(this, jn, n);
  }
  get kzg() {
    return u(this, pn);
  }
  set kzg(e) {
    p(this, pn, e);
  }
  /**
   *  The transaction hash, if signed. Otherwise, ``null``.
   */
  get hash() {
    return this.signature == null ? null : he(I(this, si, ha).call(this, !0, !1));
  }
  /**
   *  The pre-image hash of this transaction.
   *
   *  This is the digest that a [[Signer]] must sign to authorize
   *  this transaction.
   */
  get unsignedHash() {
    return he(this.unsignedSerialized);
  }
  /**
   *  The sending address, if signed. Otherwise, ``null``.
   */
  get from() {
    return this.signature == null ? null : Hm(this.unsignedHash, this.signature);
  }
  /**
   *  The public key of the sender, if signed. Otherwise, ``null``.
   */
  get fromPublicKey() {
    return this.signature == null ? null : to.recoverPublicKey(this.unsignedHash, this.signature);
  }
  /**
   *  Returns true if signed.
   *
   *  This provides a Type Guard that properties requiring a signed
   *  transaction are non-null.
   */
  isSigned() {
    return this.signature != null;
  }
  /**
   *  The serialized transaction.
   *
   *  This throws if the transaction is unsigned. For the pre-image,
   *  use [[unsignedSerialized]].
   */
  get serialized() {
    return I(this, si, ha).call(this, !0, !0);
  }
  /**
   *  The transaction pre-image.
   *
   *  The hash of this is the digest which needs to be signed to
   *  authorize this transaction.
   */
  get unsignedSerialized() {
    return I(this, si, ha).call(this, !1, !1);
  }
  /**
   *  Return the most "likely" type; currently the highest
   *  supported transaction type.
   */
  inferType() {
    const e = this.inferTypes();
    return e.indexOf(2) >= 0 ? 2 : e.pop();
  }
  /**
   *  Validates the explicit properties and returns a list of compatible
   *  transaction types.
   */
  inferTypes() {
    const e = this.gasPrice != null, t = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null, n = this.accessList != null, s = u(this, Br) != null || u(this, jn);
    this.maxFeePerGas != null && this.maxPriorityFeePerGas != null && v(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this }), v(!t || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this }), v(this.type !== 0 || !n, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
    const i = [];
    return this.type != null ? i.push(this.type) : t ? i.push(2) : e ? (i.push(1), n || i.push(0)) : n ? (i.push(1), i.push(2)) : (s && this.to || (i.push(0), i.push(1), i.push(2)), i.push(3)), i.sort(), i;
  }
  /**
   *  Returns true if this transaction is a legacy transaction (i.e.
   *  ``type === 0``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if this transaction is berlin hardform transaction (i.e.
   *  ``type === 1``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if this transaction is london hardform transaction (i.e.
   *  ``type === 2``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns true if this transaction is an [[link-eip-4844]] BLOB
   *  transaction.
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isCancun() {
    return this.type === 3;
  }
  /**
   *  Create a copy of this transaciton.
   */
  clone() {
    return on.from(this);
  }
  /**
   *  Return a JSON-friendly object.
   */
  toJSON() {
    const e = (t) => t == null ? null : t.toString();
    return {
      type: this.type,
      to: this.to,
      //            from: this.from,
      data: this.data,
      nonce: this.nonce,
      gasLimit: e(this.gasLimit),
      gasPrice: e(this.gasPrice),
      maxPriorityFeePerGas: e(this.maxPriorityFeePerGas),
      maxFeePerGas: e(this.maxFeePerGas),
      value: e(this.value),
      chainId: e(this.chainId),
      sig: this.signature ? this.signature.toJSON() : null,
      accessList: this.accessList
    };
  }
  /**
   *  Create a **Transaction** from a serialized transaction or a
   *  Transaction-like object.
   */
  static from(e) {
    if (e == null)
      return new on();
    if (typeof e == "string") {
      const n = W(e);
      if (n[0] >= 127)
        return on.from(zm(n));
      switch (n[0]) {
        case 1:
          return on.from($m(n));
        case 2:
          return on.from(qm(n));
        case 3:
          return on.from(Xm(n));
      }
      v(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
    }
    const t = new on();
    return e.type != null && (t.type = e.type), e.to != null && (t.to = e.to), e.nonce != null && (t.nonce = e.nonce), e.gasLimit != null && (t.gasLimit = e.gasLimit), e.gasPrice != null && (t.gasPrice = e.gasPrice), e.maxPriorityFeePerGas != null && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas), e.maxFeePerGas != null && (t.maxFeePerGas = e.maxFeePerGas), e.maxFeePerBlobGas != null && (t.maxFeePerBlobGas = e.maxFeePerBlobGas), e.data != null && (t.data = e.data), e.value != null && (t.value = e.value), e.chainId != null && (t.chainId = e.chainId), e.signature != null && (t.signature = xt.from(e.signature)), e.accessList != null && (t.accessList = e.accessList), e.blobVersionedHashes != null && (t.blobVersionedHashes = e.blobVersionedHashes), e.kzg != null && (t.kzg = e.kzg), e.blobs != null && (t.blobs = e.blobs), e.hash != null && (y(t.isSigned(), "unsigned transaction cannot define '.hash'", "tx", e), y(t.hash === e.hash, "hash mismatch", "tx", e)), e.from != null && (y(t.isSigned(), "unsigned transaction cannot define '.from'", "tx", e), y(t.from.toLowerCase() === (e.from || "").toLowerCase(), "from mismatch", "tx", e)), t;
  }
};
Ut = new WeakMap(), zs = new WeakMap(), Js = new WeakMap(), qs = new WeakMap(), Zs = new WeakMap(), $s = new WeakMap(), Ys = new WeakMap(), Xs = new WeakMap(), ei = new WeakMap(), ti = new WeakMap(), ni = new WeakMap(), ri = new WeakMap(), Br = new WeakMap(), jn = new WeakMap(), pn = new WeakMap(), Vn = new WeakMap(), si = new WeakSet(), ha = function(e, t) {
  v(!e || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  const n = e ? this.signature : null;
  switch (this.inferType()) {
    case 0:
      return Jm(this, n);
    case 1:
      return Ym(this, n);
    case 2:
      return Zm(this, n);
    case 3:
      return ey(this, n, t ? this.blobs : null);
  }
  v(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
};
let Ra = on;
const Cf = new Uint8Array(32);
Cf.fill(0);
const ty = BigInt(-1), vf = BigInt(0), If = BigInt(1), ny = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function ry(r) {
  const e = W(r), t = e.length % 32;
  return t ? ue([e, Cf.slice(t)]) : O(e);
}
const sy = ar(If, 32), iy = ar(vf, 32), oh = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, Hc = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function ah(r) {
  return function(e) {
    return y(typeof e == "string", `invalid domain value for ${JSON.stringify(r)}`, `domain.${r}`, e), e;
  };
}
const oy = {
  name: ah("name"),
  version: ah("version"),
  chainId: function(r) {
    const e = T(r, "domain.chainId");
    return y(e >= 0, "invalid chain ID", "domain.chainId", r), Number.isSafeInteger(e) ? Number(e) : vs(e);
  },
  verifyingContract: function(r) {
    try {
      return $(r).toLowerCase();
    } catch {
    }
    y(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", r);
  },
  salt: function(r) {
    const e = W(r, "domain.salt");
    return y(e.length === 32, 'invalid domain value "salt"', "domain.salt", r), O(e);
  }
};
function Gc(r) {
  {
    const e = r.match(/^(u?)int(\d+)$/);
    if (e) {
      const t = e[1] === "", n = parseInt(e[2]);
      y(n % 8 === 0 && n !== 0 && n <= 256 && e[2] === String(n), "invalid numeric width", "type", r);
      const s = br(ny, t ? n - 1 : n), i = t ? (s + If) * ty : vf;
      return function(o) {
        const a = T(o, "value");
        return y(a >= i && a <= s, `value out-of-bounds for ${r}`, "value", a), ar(t ? cd(a, 256) : a, 32);
      };
    }
  }
  {
    const e = r.match(/^bytes(\d+)$/);
    if (e) {
      const t = parseInt(e[1]);
      return y(t !== 0 && t <= 32 && e[1] === String(t), "invalid bytes width", "type", r), function(n) {
        const s = W(n);
        return y(s.length === t, `invalid length for ${r}`, "value", n), ry(n);
      };
    }
  }
  switch (r) {
    case "address":
      return function(e) {
        return Zr($(e), 32);
      };
    case "bool":
      return function(e) {
        return e ? sy : iy;
      };
    case "bytes":
      return function(e) {
        return he(e);
      };
    case "string":
      return function(e) {
        return Yr(e);
      };
  }
  return null;
}
function ch(r, e) {
  return `${r}(${e.map(({ name: t, type: n }) => n + " " + t).join(",")})`;
}
function Yo(r) {
  const e = r.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
  return e ? {
    base: e[1],
    index: e[2] + e[4],
    array: {
      base: e[1],
      prefix: e[1] + e[2],
      count: e[5] ? parseInt(e[5]) : -1
    }
  } : { base: r };
}
var bo, gn, ii, Fa, Nf;
const rt = class rt {
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   *
   *  This performs all necessary checking that types are valid and
   *  do not violate the [[link-eip-712]] structural constraints as
   *  well as computes the [[primaryType]].
   */
  constructor(e) {
    b(this, Fa);
    /**
     *  The primary type for the structured [[types]].
     *
     *  This is derived automatically from the [[types]], since no
     *  recursion is possible, once the DAG for the types is consturcted
     *  internally, the primary type must be the only remaining type with
     *  no parent nodes.
     */
    A(this, "primaryType");
    b(this, bo, void 0);
    b(this, gn, void 0);
    b(this, ii, void 0);
    p(this, gn, /* @__PURE__ */ new Map()), p(this, ii, /* @__PURE__ */ new Map());
    const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = {};
    Object.keys(e).forEach((c) => {
      i[c] = e[c].map(({ name: l, type: h }) => {
        let { base: d, index: f } = Yo(h);
        return d === "int" && !e.int && (d = "int256"), d === "uint" && !e.uint && (d = "uint256"), { name: l, type: d + (f || "") };
      }), t.set(c, /* @__PURE__ */ new Set()), n.set(c, []), s.set(c, /* @__PURE__ */ new Set());
    }), p(this, bo, JSON.stringify(i));
    for (const c in i) {
      const l = /* @__PURE__ */ new Set();
      for (const h of i[c]) {
        y(!l.has(h.name), `duplicate variable name ${JSON.stringify(h.name)} in ${JSON.stringify(c)}`, "types", e), l.add(h.name);
        const d = Yo(h.type).base;
        y(d !== c, `circular type reference to ${JSON.stringify(d)}`, "types", e), !Gc(d) && (y(n.has(d), `unknown type ${JSON.stringify(d)}`, "types", e), n.get(d).push(c), t.get(c).add(d));
      }
    }
    const o = Array.from(n.keys()).filter((c) => n.get(c).length === 0);
    y(o.length !== 0, "missing primary type", "types", e), y(o.length === 1, `ambiguous primary types or unused types: ${o.map((c) => JSON.stringify(c)).join(", ")}`, "types", e), U(this, { primaryType: o[0] });
    function a(c, l) {
      y(!l.has(c), `circular type reference to ${JSON.stringify(c)}`, "types", e), l.add(c);
      for (const h of t.get(c))
        if (n.has(h)) {
          a(h, l);
          for (const d of l)
            s.get(d).add(h);
        }
      l.delete(c);
    }
    a(this.primaryType, /* @__PURE__ */ new Set());
    for (const [c, l] of s) {
      const h = Array.from(l);
      h.sort(), u(this, gn).set(c, ch(c, i[c]) + h.map((d) => ch(d, i[d])).join(""));
    }
  }
  /**
   *  The types.
   */
  get types() {
    return JSON.parse(u(this, bo));
  }
  /**
   *  Returnthe encoder for the specific %%type%%.
   */
  getEncoder(e) {
    let t = u(this, ii).get(e);
    return t || (t = I(this, Fa, Nf).call(this, e), u(this, ii).set(e, t)), t;
  }
  /**
   *  Return the full type for %%name%%.
   */
  encodeType(e) {
    const t = u(this, gn).get(e);
    return y(t, `unknown type: ${JSON.stringify(e)}`, "name", e), t;
  }
  /**
   *  Return the encoded %%value%% for the %%type%%.
   */
  encodeData(e, t) {
    return this.getEncoder(e)(t);
  }
  /**
   *  Returns the hash of %%value%% for the type of %%name%%.
   */
  hashStruct(e, t) {
    return he(this.encodeData(e, t));
  }
  /**
   *  Return the fulled encoded %%value%% for the [[types]].
   */
  encode(e) {
    return this.encodeData(this.primaryType, e);
  }
  /**
   *  Return the hash of the fully encoded %%value%% for the [[types]].
   */
  hash(e) {
    return this.hashStruct(this.primaryType, e);
  }
  /**
   *  @_ignore:
   */
  _visit(e, t, n) {
    if (Gc(e))
      return n(e, t);
    const s = Yo(e).array;
    if (s)
      return y(s.count === -1 || s.count === t.length, `array length mismatch; expected length ${s.count}`, "value", t), t.map((o) => this._visit(s.prefix, o, n));
    const i = this.types[e];
    if (i)
      return i.reduce((o, { name: a, type: c }) => (o[a] = this._visit(c, t[a], n), o), {});
    y(!1, `unknown type: ${e}`, "type", e);
  }
  /**
   *  Call %%calback%% for each value in %%value%%, passing the type and
   *  component within %%value%%.
   *
   *  This is useful for replacing addresses or other transformation that
   *  may be desired on each component, based on its type.
   */
  visit(e, t) {
    return this._visit(this.primaryType, e, t);
  }
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   */
  static from(e) {
    return new rt(e);
  }
  /**
   *  Return the primary type for %%types%%.
   */
  static getPrimaryType(e) {
    return rt.from(e).primaryType;
  }
  /**
   *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
   */
  static hashStruct(e, t, n) {
    return rt.from(t).hashStruct(e, n);
  }
  /**
   *  Return the domain hash for %%domain%%.
   */
  static hashDomain(e) {
    const t = [];
    for (const n in e) {
      if (e[n] == null)
        continue;
      const s = oh[n];
      y(s, `invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", e), t.push({ name: n, type: s });
    }
    return t.sort((n, s) => Hc.indexOf(n.name) - Hc.indexOf(s.name)), rt.hashStruct("EIP712Domain", { EIP712Domain: t }, e);
  }
  /**
   *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static encode(e, t, n) {
    return ue([
      "0x1901",
      rt.hashDomain(e),
      rt.from(t).hash(n)
    ]);
  }
  /**
   *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static hash(e, t, n) {
    return he(rt.encode(e, t, n));
  }
  // Replaces all address types with ENS names with their looked up address
  /**
   * Resolves to the value from resolving all addresses in %%value%% for
   * %%types%% and the %%domain%%.
   */
  static async resolveNames(e, t, n, s) {
    e = Object.assign({}, e);
    for (const a in e)
      e[a] == null && delete e[a];
    const i = {};
    e.verifyingContract && !X(e.verifyingContract, 20) && (i[e.verifyingContract] = "0x");
    const o = rt.from(t);
    o.visit(n, (a, c) => (a === "address" && !X(c, 20) && (i[c] = "0x"), c));
    for (const a in i)
      i[a] = await s(a);
    return e.verifyingContract && i[e.verifyingContract] && (e.verifyingContract = i[e.verifyingContract]), n = o.visit(n, (a, c) => a === "address" && i[c] ? i[c] : c), { domain: e, value: n };
  }
  /**
   *  Returns the JSON-encoded payload expected by nodes which implement
   *  the JSON-RPC [[link-eip-712]] method.
   */
  static getPayload(e, t, n) {
    rt.hashDomain(e);
    const s = {}, i = [];
    Hc.forEach((c) => {
      const l = e[c];
      l != null && (s[c] = oy[c](l), i.push({ name: c, type: oh[c] }));
    });
    const o = rt.from(t);
    t = o.types;
    const a = Object.assign({}, t);
    return y(a.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", t), a.EIP712Domain = i, o.encode(n), {
      types: a,
      domain: s,
      primaryType: o.primaryType,
      message: o.visit(n, (c, l) => {
        if (c.match(/^bytes(\d*)/))
          return O(W(l));
        if (c.match(/^u?int/))
          return T(l).toString();
        switch (c) {
          case "address":
            return l.toLowerCase();
          case "bool":
            return !!l;
          case "string":
            return y(typeof l == "string", "invalid string", "value", l), l;
        }
        y(!1, "unsupported type", "type", c);
      })
    };
  }
};
bo = new WeakMap(), gn = new WeakMap(), ii = new WeakMap(), Fa = new WeakSet(), Nf = function(e) {
  {
    const s = Gc(e);
    if (s)
      return s;
  }
  const t = Yo(e).array;
  if (t) {
    const s = t.prefix, i = this.getEncoder(s);
    return (o) => {
      y(t.count === -1 || t.count === o.length, `array length mismatch; expected length ${t.count}`, "value", o);
      let a = o.map(i);
      return u(this, gn).has(s) && (a = a.map(he)), he(ue(a));
    };
  }
  const n = this.types[e];
  if (n) {
    const s = Yr(u(this, gn).get(e));
    return (i) => {
      const o = n.map(({ name: a, type: c }) => {
        const l = this.getEncoder(c)(i[a]);
        return u(this, gn).has(c) ? he(l) : l;
      });
      return o.unshift(s), ue(o);
    };
  }
  y(!1, `unknown type: ${e}`, "type", e);
};
let Oa = rt;
function Fe(r) {
  const e = /* @__PURE__ */ new Set();
  return r.forEach((t) => e.add(t)), Object.freeze(e);
}
const ay = "external public payable override", cy = Fe(ay.split(" ")), Sf = "constant external internal payable private public pure view override", ly = Fe(Sf.split(" ")), kf = "constructor error event fallback function receive struct", xf = Fe(kf.split(" ")), Pf = "calldata memory storage payable indexed", uy = Fe(Pf.split(" ")), hy = "tuple returns", dy = [kf, Pf, hy, Sf].join(" "), fy = Fe(dy.split(" ")), py = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
}, gy = new RegExp("^(\\s*)"), my = new RegExp("^([0-9]+)"), yy = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), Rf = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), Of = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var Ee, vt, Ao, El;
const Ha = class Ha {
  constructor(e) {
    b(this, Ao);
    b(this, Ee, void 0);
    b(this, vt, void 0);
    p(this, Ee, 0), p(this, vt, e.slice());
  }
  get offset() {
    return u(this, Ee);
  }
  get length() {
    return u(this, vt).length - u(this, Ee);
  }
  clone() {
    return new Ha(u(this, vt));
  }
  reset() {
    p(this, Ee, 0);
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(e) {
    const t = this.peek();
    if (t.type !== "KEYWORD" || !e.has(t.text))
      throw new Error(`expected keyword ${t.text}`);
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(e) {
    if (this.peek().type !== e) {
      const t = this.peek();
      throw new Error(`expected ${e}; got ${t.type} ${JSON.stringify(t.text)}`);
    }
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const e = this.peek();
    if (e.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const t = I(this, Ao, El).call(this, u(this, Ee) + 1, e.match + 1);
    return p(this, Ee, e.match + 1), t;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const e = this.peek();
    if (e.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const t = [];
    for (; u(this, Ee) < e.match - 1; ) {
      const n = this.peek().linkNext;
      t.push(I(this, Ao, El).call(this, u(this, Ee) + 1, n)), p(this, Ee, n);
    }
    return p(this, Ee, e.match + 1), t;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (u(this, Ee) >= u(this, vt).length)
      throw new Error("out-of-bounds");
    return u(this, vt)[u(this, Ee)];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(e) {
    const t = this.peekType("KEYWORD");
    return t != null && e.has(t) ? t : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(e) {
    if (this.length === 0)
      return null;
    const t = this.peek();
    return t.type === e ? t.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const e = this.peek();
    return Fi(this, Ee)._++, e;
  }
  toString() {
    const e = [];
    for (let t = u(this, Ee); t < u(this, vt).length; t++) {
      const n = u(this, vt)[t];
      e.push(`${n.type}:${n.text}`);
    }
    return `<TokenString ${e.join(" ")}>`;
  }
};
Ee = new WeakMap(), vt = new WeakMap(), Ao = new WeakSet(), El = function(e = 0, t = 0) {
  return new Ha(u(this, vt).slice(e, t).map((n) => Object.freeze(Object.assign({}, n, {
    match: n.match - e,
    linkBack: n.linkBack - e,
    linkNext: n.linkNext - e
  }))));
};
let Pt = Ha;
function cr(r) {
  const e = [], t = (o) => {
    const a = i < r.length ? JSON.stringify(r[i]) : "$EOI";
    throw new Error(`invalid token ${a} at ${i}: ${o}`);
  };
  let n = [], s = [], i = 0;
  for (; i < r.length; ) {
    let o = r.substring(i), a = o.match(gy);
    a && (i += a[1].length, o = r.substring(i));
    const c = { depth: n.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: i, value: -1 };
    e.push(c);
    let l = py[o[0]] || "";
    if (l) {
      if (c.type = l, c.text = o[0], i++, l === "OPEN_PAREN")
        n.push(e.length - 1), s.push(e.length - 1);
      else if (l == "CLOSE_PAREN")
        n.length === 0 && t("no matching open bracket"), c.match = n.pop(), e[c.match].match = e.length - 1, c.depth--, c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1;
      else if (l === "COMMA")
        c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1, s.push(e.length - 1);
      else if (l === "OPEN_BRACKET")
        c.type = "BRACKET";
      else if (l === "CLOSE_BRACKET") {
        let h = e.pop().text;
        if (e.length > 0 && e[e.length - 1].type === "NUMBER") {
          const d = e.pop().text;
          h = d + h, e[e.length - 1].value = H(d);
        }
        if (e.length === 0 || e[e.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        e[e.length - 1].text += h;
      }
      continue;
    }
    if (a = o.match(yy), a) {
      if (c.text = a[1], i += c.text.length, fy.has(c.text)) {
        c.type = "KEYWORD";
        continue;
      }
      if (c.text.match(Of)) {
        c.type = "TYPE";
        continue;
      }
      c.type = "ID";
      continue;
    }
    if (a = o.match(my), a) {
      c.text = a[1], c.type = "NUMBER", i += c.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${i}`);
  }
  return new Pt(e.map((o) => Object.freeze(o)));
}
function lh(r, e) {
  let t = [];
  for (const n in e.keys())
    r.has(n) && t.push(n);
  if (t.length > 1)
    throw new Error(`conflicting types: ${t.join(", ")}`);
}
function ec(r, e) {
  if (e.peekKeyword(xf)) {
    const t = e.pop().text;
    if (t !== r)
      throw new Error(`expected ${r}, got ${t}`);
  }
  return e.popType("ID");
}
function Nn(r, e) {
  const t = /* @__PURE__ */ new Set();
  for (; ; ) {
    const n = r.peekType("KEYWORD");
    if (n == null || e && !e.has(n))
      break;
    if (r.pop(), t.has(n))
      throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
    t.add(n);
  }
  return Object.freeze(t);
}
function Tf(r) {
  let e = Nn(r, ly);
  return lh(e, Fe("constant payable nonpayable".split(" "))), lh(e, Fe("pure view payable nonpayable".split(" "))), e.has("view") ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable";
}
function In(r, e) {
  return r.popParams().map((t) => ve.from(t, e));
}
function _f(r) {
  if (r.peekType("AT")) {
    if (r.pop(), r.peekType("NUMBER"))
      return T(r.pop().text);
    throw new Error("invalid gas");
  }
  return null;
}
function Xr(r) {
  if (r.length)
    throw new Error(`unexpected tokens at offset ${r.offset}: ${r.toString()}`);
}
const wy = new RegExp(/^(.*)\[([0-9]*)\]$/);
function uh(r) {
  const e = r.match(Of);
  if (y(e, "invalid type", "type", r), r === "uint")
    return "uint256";
  if (r === "int")
    return "int256";
  if (e[2]) {
    const t = parseInt(e[2]);
    y(t !== 0 && t <= 32, "invalid bytes length", "type", r);
  } else if (e[3]) {
    const t = parseInt(e[3]);
    y(t !== 0 && t <= 256 && t % 8 === 0, "invalid numeric width", "type", r);
  }
  return r;
}
const se = {}, We = Symbol.for("_ethers_internal"), hh = "_ParamTypeInternal", dh = "_ErrorInternal", fh = "_EventInternal", ph = "_ConstructorInternal", gh = "_FallbackInternal", mh = "_FunctionInternal", yh = "_StructInternal";
var oi, da;
const st = class st {
  /**
   *  @private
   */
  constructor(e, t, n, s, i, o, a, c) {
    b(this, oi);
    /**
     *  The local name of the parameter (or ``""`` if unbound)
     */
    A(this, "name");
    /**
     *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
     *  ``"uint256[3][]"``)
     */
    A(this, "type");
    /**
     *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
     */
    A(this, "baseType");
    /**
     *  True if the parameters is indexed.
     *
     *  For non-indexable types this is ``null``.
     */
    A(this, "indexed");
    /**
     *  The components for the tuple.
     *
     *  For non-tuple types this is ``null``.
     */
    A(this, "components");
    /**
     *  The array length, or ``-1`` for dynamic-lengthed arrays.
     *
     *  For non-array types this is ``null``.
     */
    A(this, "arrayLength");
    /**
     *  The type of each child in the array.
     *
     *  For non-array types this is ``null``.
     */
    A(this, "arrayChildren");
    if (Lo(e, se, "ParamType"), Object.defineProperty(this, We, { value: hh }), o && (o = Object.freeze(o.slice())), s === "array") {
      if (a == null || c == null)
        throw new Error("");
    } else if (a != null || c != null)
      throw new Error("");
    if (s === "tuple") {
      if (o == null)
        throw new Error("");
    } else if (o != null)
      throw new Error("");
    U(this, {
      name: t,
      type: n,
      baseType: s,
      indexed: i,
      components: o,
      arrayLength: a,
      arrayChildren: c
    });
  }
  /**
   *  Return a string representation of this type.
   *
   *  For example,
   *
   *  ``sighash" => "(uint256,address)"``
   *
   *  ``"minimal" => "tuple(uint256,address) indexed"``
   *
   *  ``"full" => "tuple(uint256 foo, address bar) indexed baz"``
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json") {
      const n = this.name || "";
      if (this.isArray()) {
        const i = JSON.parse(this.arrayChildren.format("json"));
        return i.name = n, i.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(i);
      }
      const s = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: n
      };
      return typeof this.indexed == "boolean" && (s.indexed = this.indexed), this.isTuple() && (s.components = this.components.map((i) => JSON.parse(i.format(e)))), JSON.stringify(s);
    }
    let t = "";
    return this.isArray() ? (t += this.arrayChildren.format(e), t += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? t += "(" + this.components.map((n) => n.format(e)).join(e === "full" ? ", " : ",") + ")" : t += this.type, e !== "sighash" && (this.indexed === !0 && (t += " indexed"), e === "full" && this.name && (t += " " + this.name)), t;
  }
  /**
   *  Returns true if %%this%% is an Array type.
   *
   *  This provides a type gaurd ensuring that [[arrayChildren]]
   *  and [[arrayLength]] are non-null.
   */
  isArray() {
    return this.baseType === "array";
  }
  /**
   *  Returns true if %%this%% is a Tuple type.
   *
   *  This provides a type gaurd ensuring that [[components]]
   *  is non-null.
   */
  isTuple() {
    return this.baseType === "tuple";
  }
  /**
   *  Returns true if %%this%% is an Indexable type.
   *
   *  This provides a type gaurd ensuring that [[indexed]]
   *  is non-null.
   */
  isIndexable() {
    return this.indexed != null;
  }
  /**
   *  Walks the **ParamType** with %%value%%, calling %%process%%
   *  on each type, destructing the %%value%% recursively.
   */
  walk(e, t) {
    if (this.isArray()) {
      if (!Array.isArray(e))
        throw new Error("invalid array value");
      if (this.arrayLength !== -1 && e.length !== this.arrayLength)
        throw new Error("array is wrong length");
      const n = this;
      return e.map((s) => n.arrayChildren.walk(s, t));
    }
    if (this.isTuple()) {
      if (!Array.isArray(e))
        throw new Error("invalid tuple value");
      if (e.length !== this.components.length)
        throw new Error("array is wrong length");
      const n = this;
      return e.map((s, i) => n.components[i].walk(s, t));
    }
    return t(this.type, e);
  }
  /**
   *  Walks the **ParamType** with %%value%%, asynchronously calling
   *  %%process%% on each type, destructing the %%value%% recursively.
   *
   *  This can be used to resolve ENS names by walking and resolving each
   *  ``"address"`` type.
   */
  async walkAsync(e, t) {
    const n = [], s = [e];
    return I(this, oi, da).call(this, n, e, t, (i) => {
      s[0] = i;
    }), n.length && await Promise.all(n), s[0];
  }
  /**
   *  Creates a new **ParamType** for %%obj%%.
   *
   *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
   *  otherwise the ``indexed`` keyword will throw an error.
   */
  static from(e, t) {
    if (st.isParamType(e))
      return e;
    if (typeof e == "string")
      try {
        return st.from(cr(e), t);
      } catch {
        y(!1, "invalid param type", "obj", e);
      }
    else if (e instanceof Pt) {
      let a = "", c = "", l = null;
      Nn(e, Fe(["tuple"])).has("tuple") || e.peekType("OPEN_PAREN") ? (c = "tuple", l = e.popParams().map((m) => st.from(m)), a = `tuple(${l.map((m) => m.format()).join(",")})`) : (a = uh(e.popType("TYPE")), c = a);
      let h = null, d = null;
      for (; e.length && e.peekType("BRACKET"); ) {
        const m = e.pop();
        h = new st(se, "", a, c, null, l, d, h), d = m.value, a += m.text, c = "array", l = null;
      }
      let f = null;
      if (Nn(e, uy).has("indexed")) {
        if (!t)
          throw new Error("");
        f = !0;
      }
      const w = e.peekType("ID") ? e.pop().text : "";
      if (e.length)
        throw new Error("leftover tokens");
      return new st(se, w, a, c, f, l, d, h);
    }
    const n = e.name;
    y(!n || typeof n == "string" && n.match(Rf), "invalid name", "obj.name", n);
    let s = e.indexed;
    s != null && (y(t, "parameter cannot be indexed", "obj.indexed", e.indexed), s = !!s);
    let i = e.type, o = i.match(wy);
    if (o) {
      const a = parseInt(o[2] || "-1"), c = st.from({
        type: o[1],
        components: e.components
      });
      return new st(se, n || "", i, "array", s, null, a, c);
    }
    if (i === "tuple" || i.startsWith(
      "tuple("
      /* fix: ) */
    ) || i.startsWith(
      "("
      /* fix: ) */
    )) {
      const a = e.components != null ? e.components.map((l) => st.from(l)) : null;
      return new st(se, n || "", i, "tuple", s, a, null, null);
    }
    return i = uh(e.type), new st(se, n || "", i, i, s, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(e) {
    return e && e[We] === hh;
  }
};
oi = new WeakSet(), da = function(e, t, n, s) {
  if (this.isArray()) {
    if (!Array.isArray(t))
      throw new Error("invalid array value");
    if (this.arrayLength !== -1 && t.length !== this.arrayLength)
      throw new Error("array is wrong length");
    const o = this.arrayChildren, a = t.slice();
    a.forEach((c, l) => {
      var h;
      I(h = o, oi, da).call(h, e, c, n, (d) => {
        a[l] = d;
      });
    }), s(a);
    return;
  }
  if (this.isTuple()) {
    const o = this.components;
    let a;
    if (Array.isArray(t))
      a = t.slice();
    else {
      if (t == null || typeof t != "object")
        throw new Error("invalid tuple value");
      a = o.map((c) => {
        if (!c.name)
          throw new Error("cannot use object value with unnamed components");
        if (!(c.name in t))
          throw new Error(`missing value for component ${c.name}`);
        return t[c.name];
      });
    }
    if (a.length !== this.components.length)
      throw new Error("array is wrong length");
    a.forEach((c, l) => {
      var h;
      I(h = o[l], oi, da).call(h, e, c, n, (d) => {
        a[l] = d;
      });
    }), s(a);
    return;
  }
  const i = n(this.type, t);
  i.then ? e.push(async function() {
    s(await i);
  }()) : s(i);
};
let ve = st;
class es {
  /**
   *  @private
   */
  constructor(e, t, n) {
    /**
     *  The type of the fragment.
     */
    A(this, "type");
    /**
     *  The inputs for the fragment.
     */
    A(this, "inputs");
    Lo(e, se, "Fragment"), n = Object.freeze(n.slice()), U(this, { type: t, inputs: n });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(e) {
    if (typeof e == "string") {
      try {
        es.from(JSON.parse(e));
      } catch {
      }
      return es.from(cr(e));
    }
    if (e instanceof Pt)
      switch (e.peekKeyword(xf)) {
        case "constructor":
          return vn.from(e);
        case "error":
          return Ve.from(e);
        case "event":
          return Qt.from(e);
        case "fallback":
        case "receive":
          return an.from(e);
        case "function":
          return zt.from(e);
        case "struct":
          return qr.from(e);
      }
    else if (typeof e == "object") {
      switch (e.type) {
        case "constructor":
          return vn.from(e);
        case "error":
          return Ve.from(e);
        case "event":
          return Qt.from(e);
        case "fallback":
        case "receive":
          return an.from(e);
        case "function":
          return zt.from(e);
        case "struct":
          return qr.from(e);
      }
      v(!1, `unsupported type: ${e.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    y(!1, "unsupported frgament object", "obj", e);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(e) {
    return vn.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(e) {
    return Ve.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(e) {
    return Qt.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(e) {
    return zt.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(e) {
    return qr.isFragment(e);
  }
}
class tc extends es {
  /**
   *  @private
   */
  constructor(t, n, s, i) {
    super(t, n, i);
    /**
     *  The name of the fragment.
     */
    A(this, "name");
    y(typeof s == "string" && s.match(Rf), "invalid identifier", "name", s), i = Object.freeze(i.slice()), U(this, { name: s });
  }
}
function oo(r, e) {
  return "(" + e.map((t) => t.format(r)).join(r === "full" ? ", " : ",") + ")";
}
class Ve extends tc {
  /**
   *  @private
   */
  constructor(e, t, n) {
    super(e, "error", t, n), Object.defineProperty(this, We, { value: dh });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return Yr(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this fragment as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    const t = [];
    return e !== "sighash" && t.push("error"), t.push(this.name + oo(e, this.inputs)), t.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(e) {
    if (Ve.isFragment(e))
      return e;
    if (typeof e == "string")
      return Ve.from(cr(e));
    if (e instanceof Pt) {
      const t = ec("error", e), n = In(e);
      return Xr(e), new Ve(se, t, n);
    }
    return new Ve(se, e.name, e.inputs ? e.inputs.map(ve.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(e) {
    return e && e[We] === dh;
  }
}
class Qt extends tc {
  /**
   *  @private
   */
  constructor(t, n, s, i) {
    super(t, "event", n, s);
    /**
     *  Whether this event is anonymous.
     */
    A(this, "anonymous");
    Object.defineProperty(this, We, { value: fh }), U(this, { anonymous: i });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return Yr(this.format("sighash"));
  }
  /**
   *  Returns a string representation of this event as %%format%%.
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json")
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((s) => JSON.parse(s.format(t)))
      });
    const n = [];
    return t !== "sighash" && n.push("event"), n.push(this.name + oo(t, this.inputs)), t !== "sighash" && this.anonymous && n.push("anonymous"), n.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(t, n) {
    return n = (n || []).map((i) => ve.from(i)), new Qt(se, t, n, !1).topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(t) {
    if (Qt.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return Qt.from(cr(t));
      } catch {
        y(!1, "invalid event fragment", "obj", t);
      }
    else if (t instanceof Pt) {
      const n = ec("event", t), s = In(t, !0), i = !!Nn(t, Fe(["anonymous"])).has("anonymous");
      return Xr(t), new Qt(se, n, s, i);
    }
    return new Qt(se, t.name, t.inputs ? t.inputs.map((n) => ve.from(n, !0)) : [], !!t.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(t) {
    return t && t[We] === fh;
  }
}
class vn extends es {
  /**
   *  @private
   */
  constructor(t, n, s, i, o) {
    super(t, n, s);
    /**
     *  Whether the constructor can receive an endowment.
     */
    A(this, "payable");
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    A(this, "gas");
    Object.defineProperty(this, We, { value: ph }), U(this, { payable: i, gas: o });
  }
  /**
   *  Returns a string representation of this constructor as %%format%%.
   */
  format(t) {
    if (v(t != null && t !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" }), t === "json")
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(t)))
      });
    const n = [`constructor${oo(t, this.inputs)}`];
    return this.payable && n.push("payable"), this.gas != null && n.push(`@${this.gas.toString()}`), n.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(t) {
    if (vn.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return vn.from(cr(t));
      } catch {
        y(!1, "invalid constuctor fragment", "obj", t);
      }
    else if (t instanceof Pt) {
      Nn(t, Fe(["constructor"]));
      const n = In(t), s = !!Nn(t, cy).has("payable"), i = _f(t);
      return Xr(t), new vn(se, "constructor", n, s, i);
    }
    return new vn(se, "constructor", t.inputs ? t.inputs.map(ve.from) : [], !!t.payable, t.gas != null ? t.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(t) {
    return t && t[We] === ph;
  }
}
class an extends es {
  constructor(t, n, s) {
    super(t, "fallback", n);
    /**
     *  If the function can be sent value during invocation.
     */
    A(this, "payable");
    Object.defineProperty(this, We, { value: gh }), U(this, { payable: s });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(t) {
    const n = this.inputs.length === 0 ? "receive" : "fallback";
    if (t === "json") {
      const s = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type: n, stateMutability: s });
    }
    return `${n}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(t) {
    if (an.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return an.from(cr(t));
      } catch {
        y(!1, "invalid fallback fragment", "obj", t);
      }
    else if (t instanceof Pt) {
      const n = t.toString(), s = t.peekKeyword(Fe(["fallback", "receive"]));
      if (y(s, "type must be fallback or receive", "obj", n), t.popKeyword(Fe(["fallback", "receive"])) === "receive") {
        const c = In(t);
        return y(c.length === 0, "receive cannot have arguments", "obj.inputs", c), Nn(t, Fe(["payable"])), Xr(t), new an(se, [], !0);
      }
      let o = In(t);
      o.length ? y(o.length === 1 && o[0].type === "bytes", "invalid fallback inputs", "obj.inputs", o.map((c) => c.format("minimal")).join(", ")) : o = [ve.from("bytes")];
      const a = Tf(t);
      if (y(a === "nonpayable" || a === "payable", "fallback cannot be constants", "obj.stateMutability", a), Nn(t, Fe(["returns"])).has("returns")) {
        const c = In(t);
        y(c.length === 1 && c[0].type === "bytes", "invalid fallback outputs", "obj.outputs", c.map((l) => l.format("minimal")).join(", "));
      }
      return Xr(t), new an(se, o, a === "payable");
    }
    if (t.type === "receive")
      return new an(se, [], !0);
    if (t.type === "fallback") {
      const n = [ve.from("bytes")], s = t.stateMutability === "payable";
      return new an(se, n, s);
    }
    y(!1, "invalid fallback description", "obj", t);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(t) {
    return t && t[We] === gh;
  }
}
class zt extends tc {
  /**
   *  @private
   */
  constructor(t, n, s, i, o, a) {
    super(t, "function", n, i);
    /**
     *  If the function is constant (e.g. ``pure`` or ``view`` functions).
     */
    A(this, "constant");
    /**
     *  The returned types for the result of calling this function.
     */
    A(this, "outputs");
    /**
     *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
     *  or ``pure``)
     */
    A(this, "stateMutability");
    /**
     *  If the function can be sent value during invocation.
     */
    A(this, "payable");
    /**
     *  The recommended gas limit to send when calling this function.
     */
    A(this, "gas");
    Object.defineProperty(this, We, { value: mh }), o = Object.freeze(o.slice()), U(this, { constant: s === "view" || s === "pure", gas: a, outputs: o, payable: s === "payable", stateMutability: s });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return Yr(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this function as %%format%%.
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json")
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(t))),
        outputs: this.outputs.map((s) => JSON.parse(s.format(t)))
      });
    const n = [];
    return t !== "sighash" && n.push("function"), n.push(this.name + oo(t, this.inputs)), t !== "sighash" && (this.stateMutability !== "nonpayable" && n.push(this.stateMutability), this.outputs && this.outputs.length && (n.push("returns"), n.push(oo(t, this.outputs))), this.gas != null && n.push(`@${this.gas.toString()}`)), n.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(t, n) {
    return n = (n || []).map((i) => ve.from(i)), new zt(se, t, "view", n, [], null).selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(t) {
    if (zt.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return zt.from(cr(t));
      } catch {
        y(!1, "invalid function fragment", "obj", t);
      }
    else if (t instanceof Pt) {
      const s = ec("function", t), i = In(t), o = Tf(t);
      let a = [];
      Nn(t, Fe(["returns"])).has("returns") && (a = In(t));
      const c = _f(t);
      return Xr(t), new zt(se, s, o, i, a, c);
    }
    let n = t.stateMutability;
    return n == null && (n = "payable", typeof t.constant == "boolean" ? (n = "view", t.constant || (n = "payable", typeof t.payable == "boolean" && !t.payable && (n = "nonpayable"))) : typeof t.payable == "boolean" && !t.payable && (n = "nonpayable")), new zt(se, t.name, n, t.inputs ? t.inputs.map(ve.from) : [], t.outputs ? t.outputs.map(ve.from) : [], t.gas != null ? t.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(t) {
    return t && t[We] === mh;
  }
}
class qr extends tc {
  /**
   *  @private
   */
  constructor(e, t, n) {
    super(e, "struct", t, n), Object.defineProperty(this, We, { value: yh });
  }
  /**
   *  Returns a string representation of this struct as %%format%%.
   */
  format() {
    throw new Error("@TODO");
  }
  /**
   *  Returns a new **StructFragment** for %%obj%%.
   */
  static from(e) {
    if (typeof e == "string")
      try {
        return qr.from(cr(e));
      } catch {
        y(!1, "invalid struct fragment", "obj", e);
      }
    else if (e instanceof Pt) {
      const t = ec("struct", e), n = In(e);
      return Xr(e), new qr(se, t, n);
    }
    return new qr(se, e.name, e.inputs ? e.inputs.map(ve.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(e) {
    return e && e[We] === yh;
  }
}
const Rt = /* @__PURE__ */ new Map();
Rt.set(0, "GENERIC_PANIC");
Rt.set(1, "ASSERT_FALSE");
Rt.set(17, "OVERFLOW");
Rt.set(18, "DIVIDE_BY_ZERO");
Rt.set(33, "ENUM_RANGE_ERROR");
Rt.set(34, "BAD_STORAGE_DATA");
Rt.set(49, "STACK_UNDERFLOW");
Rt.set(50, "ARRAY_RANGE_ERROR");
Rt.set(65, "OUT_OF_MEMORY");
Rt.set(81, "UNINITIALIZED_FUNCTION_CALL");
const by = new RegExp(/^bytes([0-9]*)$/), Ay = new RegExp(/^(u?int)([0-9]*)$/);
let Kc = null, wh = 1024;
function Ey(r, e, t, n) {
  let s = "missing revert data", i = null;
  const o = null;
  let a = null;
  if (t) {
    s = "execution reverted";
    const l = W(t);
    if (t = O(t), l.length === 0)
      s += " (no data present; likely require(false) occurred", i = "require(false)";
    else if (l.length % 32 !== 4)
      s += " (could not decode reason; invalid data length)";
    else if (O(l.slice(0, 4)) === "0x08c379a0")
      try {
        i = n.decode(["string"], l.slice(4))[0], a = {
          signature: "Error(string)",
          name: "Error",
          args: [i]
        }, s += `: ${JSON.stringify(i)}`;
      } catch {
        s += " (could not decode reason; invalid string data)";
      }
    else if (O(l.slice(0, 4)) === "0x4e487b71")
      try {
        const h = Number(n.decode(["uint256"], l.slice(4))[0]);
        a = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [h]
        }, i = `Panic due to ${Rt.get(h) || "UNKNOWN"}(${h})`, s += `: ${i}`;
      } catch {
        s += " (could not decode panic code)";
      }
    else
      s += " (unknown custom error)";
  }
  const c = {
    to: e.to ? $(e.to) : null,
    data: e.data || "0x"
  };
  return e.from && (c.from = $(e.from)), re(s, "CALL_EXCEPTION", {
    action: r,
    data: t,
    reason: i,
    transaction: c,
    invocation: o,
    revert: a
  });
}
var Wn, bs;
const Ga = class Ga {
  constructor() {
    b(this, Wn);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(e) {
    const t = e.map((s) => I(this, Wn, bs).call(this, ve.from(s)));
    return new $o(t, "_").defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(e, t) {
    id(t.length, e.length, "types/values length mismatch");
    const n = e.map((o) => I(this, Wn, bs).call(this, ve.from(o))), s = new $o(n, "_"), i = new al();
    return s.encode(i, t), i.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(e, t, n) {
    const s = e.map((o) => I(this, Wn, bs).call(this, ve.from(o)));
    return new $o(s, "_").decode(new cl(t, n, wh));
  }
  static _setDefaultMaxInflation(e) {
    y(typeof e == "number" && Number.isInteger(e), "invalid defaultMaxInflation factor", "value", e), wh = e;
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    return Kc == null && (Kc = new Ga()), Kc;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(e, t, n) {
    return Ey(e, t, n, Ga.defaultAbiCoder());
  }
};
Wn = new WeakSet(), bs = function(e) {
  if (e.isArray())
    return new V0(I(this, Wn, bs).call(this, e.arrayChildren), e.arrayLength, e.name);
  if (e.isTuple())
    return new $o(e.components.map((n) => I(this, Wn, bs).call(this, n)), e.name);
  switch (e.baseType) {
    case "address":
      return new K0(e.name);
    case "bool":
      return new W0(e.name);
    case "string":
      return new em(e.name);
    case "bytes":
      return new Q0(e.name);
    case "":
      return new q0(e.name);
  }
  let t = e.type.match(Ay);
  if (t) {
    let n = parseInt(t[2] || "256");
    return y(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + t[1] + " bit length", "param", e), new X0(n / 8, t[1] === "int", e.name);
  }
  if (t = e.type.match(by), t) {
    let n = parseInt(t[1]);
    return y(n !== 0 && n <= 32, "invalid bytes length", "param", e), new z0(n, e.name);
  }
  y(!1, "invalid type", "type", e.type);
};
let ao = Ga;
class Cy {
  /**
   *  @_ignore:
   */
  constructor(e, t, n) {
    /**
     *  The matching fragment for the ``topic0``.
     */
    A(this, "fragment");
    /**
     *  The name of the Event.
     */
    A(this, "name");
    /**
     *  The full Event signature.
     */
    A(this, "signature");
    /**
     *  The topic hash for the Event.
     */
    A(this, "topic");
    /**
     *  The arguments passed into the Event with ``emit``.
     */
    A(this, "args");
    const s = e.name, i = e.format();
    U(this, {
      fragment: e,
      name: s,
      signature: i,
      topic: t,
      args: n
    });
  }
}
class vy {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, s) {
    /**
     *  The matching fragment from the transaction ``data``.
     */
    A(this, "fragment");
    /**
     *  The name of the Function from the transaction ``data``.
     */
    A(this, "name");
    /**
     *  The arguments passed to the Function from the transaction ``data``.
     */
    A(this, "args");
    /**
     *  The full Function signature from the transaction ``data``.
     */
    A(this, "signature");
    /**
     *  The selector for the Function from the transaction ``data``.
     */
    A(this, "selector");
    /**
     *  The ``value`` (in wei) from the transaction.
     */
    A(this, "value");
    const i = e.name, o = e.format();
    U(this, {
      fragment: e,
      name: i,
      args: n,
      signature: o,
      selector: t,
      value: s
    });
  }
}
class Iy {
  /**
   *  @_ignore:
   */
  constructor(e, t, n) {
    /**
     *  The matching fragment.
     */
    A(this, "fragment");
    /**
     *  The name of the Error.
     */
    A(this, "name");
    /**
     *  The arguments passed to the Error with ``revert``.
     */
    A(this, "args");
    /**
     *  The full Error signature.
     */
    A(this, "signature");
    /**
     *  The selector for the Error.
     */
    A(this, "selector");
    const s = e.name, i = e.format();
    U(this, {
      fragment: e,
      name: s,
      args: n,
      signature: i,
      selector: t
    });
  }
}
class bh {
  /**
   *  @_ignore:
   */
  constructor(e) {
    /**
     *  The ``keccak256`` of the value logged.
     */
    A(this, "hash");
    /**
     *  @_ignore:
     */
    A(this, "_isIndexed");
    U(this, { hash: e, _isIndexed: !0 });
  }
  /**
   *  Returns ``true`` if %%value%% is an **Indexed**.
   *
   *  This provides a Type Guard for property access.
   */
  static isIndexed(e) {
    return !!(e && e._isIndexed);
  }
}
const Ah = {
  0: "generic panic",
  1: "assert(false)",
  17: "arithmetic overflow",
  18: "division or modulo by zero",
  33: "enum overflow",
  34: "invalid encoded storage byte array accessed",
  49: "out-of-bounds array access; popping on an empty array",
  50: "out-of-bounds access of an array or bytesN",
  65: "out of memory",
  81: "uninitialized function"
}, Eh = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (r) => `reverted with reason string ${JSON.stringify(r)}`
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (r) => {
      let e = "unknown panic code";
      return r >= 0 && r <= 255 && Ah[r.toString()] && (e = Ah[r.toString()]), `reverted with panic code 0x${r.toString(16)} (${e})`;
    }
  }
};
var Ft, Ht, Gt, Ie, ai, fa, ci, pa;
const yr = class yr {
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(e) {
    // Find a function definition by any means necessary (unless it is ambiguous)
    b(this, ai);
    // Find an event definition by any means necessary (unless it is ambiguous)
    b(this, ci);
    /**
     *  All the Contract ABI members (i.e. methods, events, errors, etc).
     */
    A(this, "fragments");
    /**
     *  The Contract constructor.
     */
    A(this, "deploy");
    /**
     *  The Fallback method, if any.
     */
    A(this, "fallback");
    /**
     *  If receiving ether is supported.
     */
    A(this, "receive");
    b(this, Ft, void 0);
    b(this, Ht, void 0);
    b(this, Gt, void 0);
    //    #structs: Map<string, StructFragment>;
    b(this, Ie, void 0);
    let t = [];
    typeof e == "string" ? t = JSON.parse(e) : t = e, p(this, Gt, /* @__PURE__ */ new Map()), p(this, Ft, /* @__PURE__ */ new Map()), p(this, Ht, /* @__PURE__ */ new Map());
    const n = [];
    for (const o of t)
      try {
        n.push(es.from(o));
      } catch (a) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(o)}:`, a.message);
      }
    U(this, {
      fragments: Object.freeze(n)
    });
    let s = null, i = !1;
    p(this, Ie, this.getAbiCoder()), this.fragments.forEach((o, a) => {
      let c;
      switch (o.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          U(this, { deploy: o });
          return;
        case "fallback":
          o.inputs.length === 0 ? i = !0 : (y(!s || o.payable !== s.payable, "conflicting fallback fragments", `fragments[${a}]`, o), s = o, i = s.payable);
          return;
        case "function":
          c = u(this, Gt);
          break;
        case "event":
          c = u(this, Ht);
          break;
        case "error":
          c = u(this, Ft);
          break;
        default:
          return;
      }
      const l = o.format();
      c.has(l) || c.set(l, o);
    }), this.deploy || U(this, {
      deploy: vn.from("constructor()")
    }), U(this, { fallback: s, receive: i });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(e) {
    const t = e ? "minimal" : "full";
    return this.fragments.map((s) => s.format(t));
  }
  /**
   *  Return the JSON-encoded ABI. This is the format Solidiy
   *  returns.
   */
  formatJson() {
    const e = this.fragments.map((t) => t.format("json"));
    return JSON.stringify(e.map((t) => JSON.parse(t)));
  }
  /**
   *  The ABI coder that will be used to encode and decode binary
   *  data.
   */
  getAbiCoder() {
    return ao.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(e) {
    const t = I(this, ai, fa).call(this, e, null, !1);
    return y(t, "no matching function", "key", e), t.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(e) {
    return !!I(this, ai, fa).call(this, e, null, !1);
  }
  /**
   *  Get the [[FunctionFragment]] for %%key%%, which may be a function
   *  selector, function name or function signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple functions match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single function in
   *  the ABI, this will throw.
   */
  getFunction(e, t) {
    return I(this, ai, fa).call(this, e, t || null, !0);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(e) {
    const t = Array.from(u(this, Gt).keys());
    t.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      e(u(this, Gt).get(s), n);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(e) {
    const t = I(this, ci, pa).call(this, e, null, !1);
    return y(t, "no matching event", "key", e), t.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(e) {
    return !!I(this, ci, pa).call(this, e, null, !1);
  }
  /**
   *  Get the [[EventFragment]] for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple events match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single event in
   *  the ABI, this will throw.
   */
  getEvent(e, t) {
    return I(this, ci, pa).call(this, e, t || null, !0);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(e) {
    const t = Array.from(u(this, Ht).keys());
    t.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      e(u(this, Ht).get(s), n);
    }
  }
  /**
   *  Get the [[ErrorFragment]] for %%key%%, which may be an error
   *  selector, error name or error signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple errors match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single error in
   *  the ABI, this will throw.
   */
  getError(e, t) {
    if (X(e)) {
      const s = e.toLowerCase();
      if (Eh[s])
        return Ve.from(Eh[s].signature);
      for (const i of u(this, Ft).values())
        if (s === i.selector)
          return i;
      return null;
    }
    if (e.indexOf("(") === -1) {
      const s = [];
      for (const [i, o] of u(this, Ft))
        i.split(
          "("
          /* fix:) */
        )[0] === e && s.push(o);
      if (s.length === 0)
        return e === "Error" ? Ve.from("error Error(string)") : e === "Panic" ? Ve.from("error Panic(uint256)") : null;
      if (s.length > 1) {
        const i = s.map((o) => JSON.stringify(o.format())).join(", ");
        y(!1, `ambiguous error description (i.e. ${i})`, "name", e);
      }
      return s[0];
    }
    if (e = Ve.from(e).format(), e === "Error(string)")
      return Ve.from("error Error(string)");
    if (e === "Panic(uint256)")
      return Ve.from("error Panic(uint256)");
    const n = u(this, Ft).get(e);
    return n || null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(e) {
    const t = Array.from(u(this, Ft).keys());
    t.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      e(u(this, Ft).get(s), n);
    }
  }
  // Get the 4-byte selector used by Solidity to identify a function
  /*
  getSelector(fragment: ErrorFragment | FunctionFragment): string {
      if (typeof(fragment) === "string") {
          const matches: Array<Fragment> = [ ];
  
          try { matches.push(this.getFunction(fragment)); } catch (error) { }
          try { matches.push(this.getError(<string>fragment)); } catch (_) { }
  
          if (matches.length === 0) {
              logger.throwArgumentError("unknown fragment", "key", fragment);
          } else if (matches.length > 1) {
              logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
          }
  
          fragment = matches[0];
      }
  
      return dataSlice(id(fragment.format()), 0, 4);
  }
      */
  // Get the 32-byte topic hash used by Solidity to identify an event
  /*
  getEventTopic(fragment: EventFragment): string {
      //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
      return id(fragment.format());
  }
  */
  _decodeParams(e, t) {
    return u(this, Ie).decode(e, t);
  }
  _encodeParams(e, t) {
    return u(this, Ie).encode(e, t);
  }
  /**
   *  Encodes a ``tx.data`` object for deploying the Contract with
   *  the %%values%% as the constructor arguments.
   */
  encodeDeploy(e) {
    return this._encodeParams(this.deploy.inputs, e || []);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified error (see [[getError]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeErrorResult(e, t) {
    if (typeof e == "string") {
      const n = this.getError(e);
      y(n, "unknown error", "fragment", e), e = n;
    }
    return y(ie(t, 0, 4) === e.selector, `data signature does not match error ${e.name}.`, "data", t), this._decodeParams(e.inputs, ie(t, 4));
  }
  /**
   *  Encodes the transaction revert data for a call result that
   *  reverted from the the Contract with the sepcified %%error%%
   *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeErrorResult(e, t) {
    if (typeof e == "string") {
      const n = this.getError(e);
      y(n, "unknown error", "fragment", e), e = n;
    }
    return ue([
      e.selector,
      this._encodeParams(e.inputs, t || [])
    ]);
  }
  /**
   *  Decodes the %%data%% from a transaction ``tx.data`` for
   *  the function specified (see [[getFunction]] for valid values
   *  for %%fragment%%).
   *
   *  Most developers should prefer the [[parseTransaction]] method
   *  instead, which will automatically detect the fragment.
   */
  decodeFunctionData(e, t) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      y(n, "unknown function", "fragment", e), e = n;
    }
    return y(ie(t, 0, 4) === e.selector, `data signature does not match function ${e.name}.`, "data", t), this._decodeParams(e.inputs, ie(t, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(e, t) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      y(n, "unknown function", "fragment", e), e = n;
    }
    return ue([
      e.selector,
      this._encodeParams(e.inputs, t || [])
    ]);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeFunctionResult(e, t) {
    if (typeof e == "string") {
      const i = this.getFunction(e);
      y(i, "unknown function", "fragment", e), e = i;
    }
    let n = "invalid length for result data";
    const s = Le(t);
    if (s.length % 32 === 0)
      try {
        return u(this, Ie).decode(e.outputs, s);
      } catch {
        n = "could not decode result data";
      }
    v(!1, n, "BAD_DATA", {
      value: O(s),
      info: { method: e.name, signature: e.format() }
    });
  }
  makeError(e, t) {
    const n = W(e, "data"), s = ao.getBuiltinCallException("call", t, n);
    if (s.message.startsWith("execution reverted (unknown custom error)")) {
      const a = O(n.slice(0, 4)), c = this.getError(a);
      if (c)
        try {
          const l = u(this, Ie).decode(c.inputs, n.slice(4));
          s.revert = {
            name: c.name,
            signature: c.format(),
            args: l
          }, s.reason = s.revert.signature, s.message = `execution reverted: ${s.reason}`;
        } catch {
          s.message = "execution reverted (coult not decode custom error)";
        }
    }
    const o = this.parseTransaction(t);
    return o && (s.invocation = {
      method: o.name,
      signature: o.signature,
      args: o.args
    }), s;
  }
  /**
   *  Encodes the result data (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values
   *  for %%fragment%%) with %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeFunctionResult(e, t) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      y(n, "unknown function", "fragment", e), e = n;
    }
    return O(u(this, Ie).encode(e.outputs, t || []));
  }
  /*
      spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
          const promises: Array<Promise<>> = [ ];
          const process = function(type: ParamType, value: any): any {
              if (type.baseType === "array") {
                  return descend(type.child
              }
              if (type. === "address") {
              }
          };
  
          const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
              if (inputs.length !== values.length) { throw new Error("length mismatch"); }
              
          };
  
          const result: Array<any> = [ ];
          values.forEach((value, index) => {
              if (value == null) {
                  topics.push(null);
              } else if (param.baseType === "array" || param.baseType === "tuple") {
                  logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
              } else if (Array.isArray(value)) {
                  topics.push(value.map((value) => encodeTopic(param, value)));
              } else {
                  topics.push(encodeTopic(param, value));
              }
          });
      }
  */
  // Create the filter for the event with search criteria (e.g. for eth_filterLog)
  encodeFilterTopics(e, t) {
    if (typeof e == "string") {
      const i = this.getEvent(e);
      y(i, "unknown event", "eventFragment", e), e = i;
    }
    v(t.length <= e.inputs.length, `too many arguments for ${e.format()}`, "UNEXPECTED_ARGUMENT", { count: t.length, expectedCount: e.inputs.length });
    const n = [];
    e.anonymous || n.push(e.topicHash);
    const s = (i, o) => i.type === "string" ? Yr(o) : i.type === "bytes" ? he(O(o)) : (i.type === "bool" && typeof o == "boolean" ? o = o ? "0x01" : "0x00" : i.type.match(/^u?int/) ? o = ar(o) : i.type.match(/^bytes/) ? o = Wp(o, 32) : i.type === "address" && u(this, Ie).encode(["address"], [o]), Zr(O(o), 32));
    for (t.forEach((i, o) => {
      const a = e.inputs[o];
      if (!a.indexed) {
        y(i == null, "cannot filter non-indexed parameters; must be null", "contract." + a.name, i);
        return;
      }
      i == null ? n.push(null) : a.baseType === "array" || a.baseType === "tuple" ? y(!1, "filtering with tuples or arrays not supported", "contract." + a.name, i) : Array.isArray(i) ? n.push(i.map((c) => s(a, c))) : n.push(s(a, i));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(e, t) {
    if (typeof e == "string") {
      const o = this.getEvent(e);
      y(o, "unknown event", "eventFragment", e), e = o;
    }
    const n = [], s = [], i = [];
    return e.anonymous || n.push(e.topicHash), y(t.length === e.inputs.length, "event arguments/values mismatch", "values", t), e.inputs.forEach((o, a) => {
      const c = t[a];
      if (o.indexed)
        if (o.type === "string")
          n.push(Yr(c));
        else if (o.type === "bytes")
          n.push(he(c));
        else {
          if (o.baseType === "tuple" || o.baseType === "array")
            throw new Error("not implemented");
          n.push(u(this, Ie).encode([o.type], [c]));
        }
      else
        s.push(o), i.push(c);
    }), {
      data: u(this, Ie).encode(s, i),
      topics: n
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(e, t, n) {
    if (typeof e == "string") {
      const g = this.getEvent(e);
      y(g, "unknown event", "eventFragment", e), e = g;
    }
    if (n != null && !e.anonymous) {
      const g = e.topicHash;
      y(X(n[0], 32) && n[0].toLowerCase() === g, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
    }
    const s = [], i = [], o = [];
    e.inputs.forEach((g, w) => {
      g.indexed ? g.type === "string" || g.type === "bytes" || g.baseType === "tuple" || g.baseType === "array" ? (s.push(ve.from({ type: "bytes32", name: g.name })), o.push(!0)) : (s.push(g), o.push(!1)) : (i.push(g), o.push(!1));
    });
    const a = n != null ? u(this, Ie).decode(s, ue(n)) : null, c = u(this, Ie).decode(i, t, !0), l = [], h = [];
    let d = 0, f = 0;
    return e.inputs.forEach((g, w) => {
      let m = null;
      if (g.indexed)
        if (a == null)
          m = new bh(null);
        else if (o[w])
          m = new bh(a[f++]);
        else
          try {
            m = a[f++];
          } catch (E) {
            m = E;
          }
      else
        try {
          m = c[d++];
        } catch (E) {
          m = E;
        }
      l.push(m), h.push(g.name || null);
    }), Si.fromItems(l, h);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(e) {
    const t = W(e.data, "tx.data"), n = T(e.value != null ? e.value : 0, "tx.value"), s = this.getFunction(O(t.slice(0, 4)));
    if (!s)
      return null;
    const i = u(this, Ie).decode(s.inputs, t.slice(4));
    return new vy(s, s.selector, i, n);
  }
  parseCallResult(e) {
    throw new Error("@TODO");
  }
  /**
   *  Parses a receipt log, finding the matching event and extracts
   *  the parameter values along with other useful event details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseLog(e) {
    const t = this.getEvent(e.topics[0]);
    return !t || t.anonymous ? null : new Cy(t, t.topicHash, this.decodeEventLog(t, e.data, e.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(e) {
    const t = O(e), n = this.getError(ie(t, 0, 4));
    if (!n)
      return null;
    const s = u(this, Ie).decode(n.inputs, ie(t, 4));
    return new Iy(n, n.selector, s);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(e) {
    return e instanceof yr ? e : typeof e == "string" ? new yr(JSON.parse(e)) : typeof e.formatJson == "function" ? new yr(e.formatJson()) : typeof e.format == "function" ? new yr(e.format("json")) : new yr(e);
  }
};
Ft = new WeakMap(), Ht = new WeakMap(), Gt = new WeakMap(), Ie = new WeakMap(), ai = new WeakSet(), fa = function(e, t, n) {
  if (X(e)) {
    const i = e.toLowerCase();
    for (const o of u(this, Gt).values())
      if (i === o.selector)
        return o;
    return null;
  }
  if (e.indexOf("(") === -1) {
    const i = [];
    for (const [o, a] of u(this, Gt))
      o.split(
        "("
        /* fix:) */
      )[0] === e && i.push(a);
    if (t) {
      const o = t.length > 0 ? t[t.length - 1] : null;
      let a = t.length, c = !0;
      Pe.isTyped(o) && o.type === "overrides" && (c = !1, a--);
      for (let l = i.length - 1; l >= 0; l--) {
        const h = i[l].inputs.length;
        h !== a && (!c || h !== a - 1) && i.splice(l, 1);
      }
      for (let l = i.length - 1; l >= 0; l--) {
        const h = i[l].inputs;
        for (let d = 0; d < t.length; d++)
          if (Pe.isTyped(t[d])) {
            if (d >= h.length) {
              if (t[d].type === "overrides")
                continue;
              i.splice(l, 1);
              break;
            }
            if (t[d].type !== h[d].baseType) {
              i.splice(l, 1);
              break;
            }
          }
      }
    }
    if (i.length === 1 && t && t.length !== i[0].inputs.length) {
      const o = t[t.length - 1];
      (o == null || Array.isArray(o) || typeof o != "object") && i.splice(0, 1);
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const o = i.map((a) => JSON.stringify(a.format())).join(", ");
      y(!1, `ambiguous function description (i.e. matches ${o})`, "key", e);
    }
    return i[0];
  }
  const s = u(this, Gt).get(zt.from(e).format());
  return s || null;
}, ci = new WeakSet(), pa = function(e, t, n) {
  if (X(e)) {
    const i = e.toLowerCase();
    for (const o of u(this, Ht).values())
      if (i === o.topicHash)
        return o;
    return null;
  }
  if (e.indexOf("(") === -1) {
    const i = [];
    for (const [o, a] of u(this, Ht))
      o.split(
        "("
        /* fix:) */
      )[0] === e && i.push(a);
    if (t) {
      for (let o = i.length - 1; o >= 0; o--)
        i[o].inputs.length < t.length && i.splice(o, 1);
      for (let o = i.length - 1; o >= 0; o--) {
        const a = i[o].inputs;
        for (let c = 0; c < t.length; c++)
          if (Pe.isTyped(t[c]) && t[c].type !== a[c].baseType) {
            i.splice(o, 1);
            break;
          }
      }
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const o = i.map((a) => JSON.stringify(a.format())).join(", ");
      y(!1, `ambiguous event description (i.e. matches ${o})`, "key", e);
    }
    return i[0];
  }
  const s = u(this, Ht).get(Qt.from(e).format());
  return s || null;
};
let Cl = yr;
const Bf = BigInt(0);
function Ts(r) {
  return r ?? null;
}
function ae(r) {
  return r == null ? null : r.toString();
}
class Ch {
  /**
   *  Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
   *  %%maxPriorityFeePerGas%%.
   */
  constructor(e, t, n) {
    /**
     *  The gas price for legacy networks.
     */
    A(this, "gasPrice");
    /**
     *  The maximum fee to pay per gas.
     *
     *  The base fee per gas is defined by the network and based on
     *  congestion, increasing the cost during times of heavy load
     *  and lowering when less busy.
     *
     *  The actual fee per gas will be the base fee for the block
     *  and the priority fee, up to the max fee per gas.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    A(this, "maxFeePerGas");
    /**
     *  The additional amout to pay per gas to encourage a validator
     *  to include the transaction.
     *
     *  The purpose of this is to compensate the validator for the
     *  adjusted risk for including a given transaction.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    A(this, "maxPriorityFeePerGas");
    U(this, {
      gasPrice: Ts(e),
      maxFeePerGas: Ts(t),
      maxPriorityFeePerGas: Ts(n)
    });
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { gasPrice: e, maxFeePerGas: t, maxPriorityFeePerGas: n } = this;
    return {
      _type: "FeeData",
      gasPrice: ae(e),
      maxFeePerGas: ae(t),
      maxPriorityFeePerGas: ae(n)
    };
  }
}
function Ta(r) {
  const e = {};
  r.to && (e.to = r.to), r.from && (e.from = r.from), r.data && (e.data = O(r.data));
  const t = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const s of t)
    !(s in r) || r[s] == null || (e[s] = T(r[s], `request.${s}`));
  const n = "type,nonce".split(/,/);
  for (const s of n)
    !(s in r) || r[s] == null || (e[s] = H(r[s], `request.${s}`));
  return r.accessList && (e.accessList = rs(r.accessList)), "blockTag" in r && (e.blockTag = r.blockTag), "enableCcipRead" in r && (e.enableCcipRead = !!r.enableCcipRead), "customData" in r && (e.customData = r.customData), "blobVersionedHashes" in r && r.blobVersionedHashes && (e.blobVersionedHashes = r.blobVersionedHashes.slice()), "kzg" in r && (e.kzg = r.kzg), "blobs" in r && r.blobs && (e.blobs = r.blobs.map((s) => Ul(s) ? O(s) : Object.assign({}, s))), e;
}
var mn;
class Ny {
  /**
   *  Create a new **Block** object.
   *
   *  This should generally not be necessary as the unless implementing a
   *  low-level library.
   */
  constructor(e, t) {
    /**
     *  The provider connected to the block used to fetch additional details
     *  if necessary.
     */
    A(this, "provider");
    /**
     *  The block number, sometimes called the block height. This is a
     *  sequential number that is one higher than the parent block.
     */
    A(this, "number");
    /**
     *  The block hash.
     *
     *  This hash includes all properties, so can be safely used to identify
     *  an exact set of block properties.
     */
    A(this, "hash");
    /**
     *  The timestamp for this block, which is the number of seconds since
     *  epoch that this block was included.
     */
    A(this, "timestamp");
    /**
     *  The block hash of the parent block.
     */
    A(this, "parentHash");
    /**
     *  The hash tree root of the parent beacon block for the given
     *  execution block. See [[link-eip-4788]].
     */
    A(this, "parentBeaconBlockRoot");
    /**
     *  The nonce.
     *
     *  On legacy networks, this is the random number inserted which
     *  permitted the difficulty target to be reached.
     */
    A(this, "nonce");
    /**
     *  The difficulty target.
     *
     *  On legacy networks, this is the proof-of-work target required
     *  for a block to meet the protocol rules to be included.
     *
     *  On modern networks, this is a random number arrived at using
     *  randao.  @TODO: Find links?
     */
    A(this, "difficulty");
    /**
     *  The total gas limit for this block.
     */
    A(this, "gasLimit");
    /**
     *  The total gas used in this block.
     */
    A(this, "gasUsed");
    /**
     *  The root hash for the global state after applying changes
     *  in this block.
     */
    A(this, "stateRoot");
    /**
     *  The hash of the transaction receipts trie.
     */
    A(this, "receiptsRoot");
    /**
     *  The total amount of blob gas consumed by the transactions
     *  within the block. See [[link-eip-4844]].
     */
    A(this, "blobGasUsed");
    /**
     *  The running total of blob gas consumed in excess of the
     *  target, prior to the block. See [[link-eip-4844]].
     */
    A(this, "excessBlobGas");
    /**
     *  The miner coinbase address, wihch receives any subsidies for
     *  including this block.
     */
    A(this, "miner");
    /**
     *  The latest RANDAO mix of the post beacon state of
     *  the previous block.
     */
    A(this, "prevRandao");
    /**
     *  Any extra data the validator wished to include.
     */
    A(this, "extraData");
    /**
     *  The base fee per gas that all transactions in this block were
     *  charged.
     *
     *  This adjusts after each block, depending on how congested the network
     *  is.
     */
    A(this, "baseFeePerGas");
    b(this, mn, void 0);
    p(this, mn, e.transactions.map((n) => typeof n != "string" ? new co(n, t) : n)), U(this, {
      provider: t,
      hash: Ts(e.hash),
      number: e.number,
      timestamp: e.timestamp,
      parentHash: e.parentHash,
      parentBeaconBlockRoot: e.parentBeaconBlockRoot,
      nonce: e.nonce,
      difficulty: e.difficulty,
      gasLimit: e.gasLimit,
      gasUsed: e.gasUsed,
      blobGasUsed: e.blobGasUsed,
      excessBlobGas: e.excessBlobGas,
      miner: e.miner,
      prevRandao: Ts(e.prevRandao),
      extraData: e.extraData,
      baseFeePerGas: Ts(e.baseFeePerGas),
      stateRoot: e.stateRoot,
      receiptsRoot: e.receiptsRoot
    });
  }
  /**
   *  Returns the list of transaction hashes, in the order
   *  they were executed within the block.
   */
  get transactions() {
    return u(this, mn).map((e) => typeof e == "string" ? e : e.hash);
  }
  /**
   *  Returns the complete transactions, in the order they
   *  were executed within the block.
   *
   *  This is only available for blocks which prefetched
   *  transactions, by passing ``true`` to %%prefetchTxs%%
   *  into [[Provider-getBlock]].
   */
  get prefetchedTransactions() {
    const e = u(this, mn).slice();
    return e.length === 0 ? [] : (v(typeof e[0] == "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
      operation: "transactionResponses()"
    }), e);
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { baseFeePerGas: e, difficulty: t, extraData: n, gasLimit: s, gasUsed: i, hash: o, miner: a, prevRandao: c, nonce: l, number: h, parentHash: d, parentBeaconBlockRoot: f, stateRoot: g, receiptsRoot: w, timestamp: m, transactions: E } = this;
    return {
      _type: "Block",
      baseFeePerGas: ae(e),
      difficulty: ae(t),
      extraData: n,
      gasLimit: ae(s),
      gasUsed: ae(i),
      blobGasUsed: ae(this.blobGasUsed),
      excessBlobGas: ae(this.excessBlobGas),
      hash: o,
      miner: a,
      prevRandao: c,
      nonce: l,
      number: h,
      parentHash: d,
      timestamp: m,
      parentBeaconBlockRoot: f,
      stateRoot: g,
      receiptsRoot: w,
      transactions: E
    };
  }
  [Symbol.iterator]() {
    let e = 0;
    const t = this.transactions;
    return {
      next: () => e < this.length ? {
        value: t[e++],
        done: !1
      } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The number of transactions in this block.
   */
  get length() {
    return u(this, mn).length;
  }
  /**
   *  The [[link-js-date]] this block was included at.
   */
  get date() {
    return this.timestamp == null ? null : new Date(this.timestamp * 1e3);
  }
  /**
   *  Get the transaction at %%indexe%% within this block.
   */
  async getTransaction(e) {
    let t;
    if (typeof e == "number")
      t = u(this, mn)[e];
    else {
      const n = e.toLowerCase();
      for (const s of u(this, mn))
        if (typeof s == "string") {
          if (s !== n)
            continue;
          t = s;
          break;
        } else {
          if (s.hash === n)
            continue;
          t = s;
          break;
        }
    }
    if (t == null)
      throw new Error("no such tx");
    return typeof t == "string" ? await this.provider.getTransaction(t) : t;
  }
  /**
   *  If a **Block** was fetched with a request to include the transactions
   *  this will allow synchronous access to those transactions.
   *
   *  If the transactions were not prefetched, this will throw.
   */
  getPrefetchedTransaction(e) {
    const t = this.prefetchedTransactions;
    if (typeof e == "number")
      return t[e];
    e = e.toLowerCase();
    for (const n of t)
      if (n.hash === e)
        return n;
    y(!1, "no matching transaction", "indexOrHash", e);
  }
  /**
   *  Returns true if this block been mined. This provides a type guard
   *  for all properties on a [[MinedBlock]].
   */
  isMined() {
    return !!this.hash;
  }
  /**
   *  Returns true if this block is an [[link-eip-2930]] block.
   */
  isLondon() {
    return !!this.baseFeePerGas;
  }
  /**
   *  @_ignore:
   */
  orphanedEvent() {
    if (!this.isMined())
      throw new Error("");
    return Sy(this);
  }
}
mn = new WeakMap();
class Uo {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    A(this, "provider");
    /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */
    A(this, "transactionHash");
    /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */
    A(this, "blockHash");
    /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */
    A(this, "blockNumber");
    /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */
    A(this, "removed");
    /**
     *  The address of the contract that emitted this log.
     */
    A(this, "address");
    /**
     *  The data included in this log when it was emitted.
     */
    A(this, "data");
    /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */
    A(this, "topics");
    /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */
    A(this, "index");
    /**
     *  The index within the transaction of this log.
     */
    A(this, "transactionIndex");
    this.provider = t;
    const n = Object.freeze(e.topics.slice());
    U(this, {
      transactionHash: e.transactionHash,
      blockHash: e.blockHash,
      blockNumber: e.blockNumber,
      removed: e.removed,
      address: e.address,
      data: e.data,
      topics: n,
      index: e.index,
      transactionIndex: e.transactionIndex
    });
  }
  /**
   *  Returns a JSON-compatible object.
   */
  toJSON() {
    const { address: e, blockHash: t, blockNumber: n, data: s, index: i, removed: o, topics: a, transactionHash: c, transactionIndex: l } = this;
    return {
      _type: "log",
      address: e,
      blockHash: t,
      blockNumber: n,
      data: s,
      index: i,
      removed: o,
      topics: a,
      transactionHash: c,
      transactionIndex: l
    };
  }
  /**
   *  Returns the block that this log occurred in.
   */
  async getBlock() {
    const e = await this.provider.getBlock(this.blockHash);
    return v(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  Returns the transaction that this log occurred in.
   */
  async getTransaction() {
    const e = await this.provider.getTransaction(this.transactionHash);
    return v(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  Returns the transaction receipt fot the transaction that this
   *  log occurred in.
   */
  async getTransactionReceipt() {
    const e = await this.provider.getTransactionReceipt(this.transactionHash);
    return v(!!e, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return ky(this);
  }
}
var Eo;
class Lf {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    A(this, "provider");
    /**
     *  The address the transaction was sent to.
     */
    A(this, "to");
    /**
     *  The sender of the transaction.
     */
    A(this, "from");
    /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */
    A(this, "contractAddress");
    /**
     *  The transaction hash.
     */
    A(this, "hash");
    /**
     *  The index of this transaction within the block transactions.
     */
    A(this, "index");
    /**
     *  The block hash of the [[Block]] this transaction was included in.
     */
    A(this, "blockHash");
    /**
     *  The block number of the [[Block]] this transaction was included in.
     */
    A(this, "blockNumber");
    /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */
    A(this, "logsBloom");
    /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */
    A(this, "gasUsed");
    /**
     *  The gas used for BLObs. See [[link-eip-4844]].
     */
    A(this, "blobGasUsed");
    /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */
    A(this, "cumulativeGasUsed");
    /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */
    A(this, "gasPrice");
    /**
     *  The price paid per BLOB in gas. See [[link-eip-4844]].
     */
    A(this, "blobGasPrice");
    /**
     *  The [[link-eip-2718]] transaction type.
     */
    A(this, "type");
    //readonly byzantium!: boolean;
    /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */
    A(this, "status");
    /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */
    A(this, "root");
    b(this, Eo, void 0);
    p(this, Eo, Object.freeze(e.logs.map((s) => new Uo(s, t))));
    let n = Bf;
    e.effectiveGasPrice != null ? n = e.effectiveGasPrice : e.gasPrice != null && (n = e.gasPrice), U(this, {
      provider: t,
      to: e.to,
      from: e.from,
      contractAddress: e.contractAddress,
      hash: e.hash,
      index: e.index,
      blockHash: e.blockHash,
      blockNumber: e.blockNumber,
      logsBloom: e.logsBloom,
      gasUsed: e.gasUsed,
      cumulativeGasUsed: e.cumulativeGasUsed,
      blobGasUsed: e.blobGasUsed,
      gasPrice: n,
      blobGasPrice: e.blobGasPrice,
      type: e.type,
      //byzantium: tx.byzantium,
      status: e.status,
      root: e.root
    });
  }
  /**
   *  The logs for this transaction.
   */
  get logs() {
    return u(this, Eo);
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to: e,
      from: t,
      contractAddress: n,
      hash: s,
      index: i,
      blockHash: o,
      blockNumber: a,
      logsBloom: c,
      logs: l,
      //byzantium, 
      status: h,
      root: d
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash: o,
      blockNumber: a,
      //byzantium, 
      contractAddress: n,
      cumulativeGasUsed: ae(this.cumulativeGasUsed),
      from: t,
      gasPrice: ae(this.gasPrice),
      blobGasUsed: ae(this.blobGasUsed),
      blobGasPrice: ae(this.blobGasPrice),
      gasUsed: ae(this.gasUsed),
      hash: s,
      index: i,
      logs: l,
      logsBloom: c,
      root: d,
      status: h,
      to: e
    };
  }
  /**
   *  @_ignore:
   */
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.length ? { value: this.logs[e++], done: !1 } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The total fee for this transaction, in wei.
   */
  get fee() {
    return this.gasUsed * this.gasPrice;
  }
  /**
   *  Resolves to the block this transaction occurred in.
   */
  async getBlock() {
    const e = await this.provider.getBlock(this.blockHash);
    if (e == null)
      throw new Error("TODO");
    return e;
  }
  /**
   *  Resolves to the transaction this transaction occurred in.
   */
  async getTransaction() {
    const e = await this.provider.getTransaction(this.hash);
    if (e == null)
      throw new Error("TODO");
    return e;
  }
  /**
   *  Resolves to the return value of the execution of this transaction.
   *
   *  Support for this feature is limited, as it requires an archive node
   *  with the ``debug_`` or ``trace_`` API enabled.
   */
  async getResult() {
    return await this.provider.getTransactionResult(this.hash);
  }
  /**
   *  Resolves to the number of confirmations this transaction has.
   */
  async confirmations() {
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return Df(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(e) {
    return v(!e || e.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), Mf(this, e);
  }
}
Eo = new WeakMap();
var Qn;
const gu = class gu {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
    /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */
    A(this, "provider");
    /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    A(this, "blockNumber");
    /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    A(this, "blockHash");
    /**
     *  The index within the block that this transaction resides at.
     */
    A(this, "index");
    /**
     *  The transaction hash.
     */
    A(this, "hash");
    /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */
    A(this, "type");
    /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */
    A(this, "to");
    /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */
    A(this, "from");
    /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */
    A(this, "nonce");
    /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */
    A(this, "gasLimit");
    /**
     *  The gas price can have various values, depending on the network.
     *
     *  In modern networks, for transactions that are included this is
     *  the //effective gas price// (the fee per gas that was actually
     *  charged), while for transactions that have not been included yet
     *  is the [[maxFeePerGas]].
     *
     *  For legacy transactions, or transactions on legacy networks, this
     *  is the fee that will be charged per unit of gas the transaction
     *  consumes.
     */
    A(this, "gasPrice");
    /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */
    A(this, "maxPriorityFeePerGas");
    /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */
    A(this, "maxFeePerGas");
    /**
     *  The [[link-eip-4844]] max fee per BLOb gas.
     */
    A(this, "maxFeePerBlobGas");
    /**
     *  The data.
     */
    A(this, "data");
    /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */
    A(this, "value");
    /**
     *  The chain ID.
     */
    A(this, "chainId");
    /**
     *  The signature.
     */
    A(this, "signature");
    /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */
    A(this, "accessList");
    /**
     *  The [[link-eip-4844]] BLOb versioned hashes.
     */
    A(this, "blobVersionedHashes");
    b(this, Qn, void 0);
    this.provider = t, this.blockNumber = e.blockNumber != null ? e.blockNumber : null, this.blockHash = e.blockHash != null ? e.blockHash : null, this.hash = e.hash, this.index = e.index, this.type = e.type, this.from = e.from, this.to = e.to || null, this.gasLimit = e.gasLimit, this.nonce = e.nonce, this.data = e.data, this.value = e.value, this.gasPrice = e.gasPrice, this.maxPriorityFeePerGas = e.maxPriorityFeePerGas != null ? e.maxPriorityFeePerGas : null, this.maxFeePerGas = e.maxFeePerGas != null ? e.maxFeePerGas : null, this.maxFeePerBlobGas = e.maxFeePerBlobGas != null ? e.maxFeePerBlobGas : null, this.chainId = e.chainId, this.signature = e.signature, this.accessList = e.accessList != null ? e.accessList : null, this.blobVersionedHashes = e.blobVersionedHashes != null ? e.blobVersionedHashes : null, p(this, Qn, -1);
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber: e, blockHash: t, index: n, hash: s, type: i, to: o, from: a, nonce: c, data: l, signature: h, accessList: d, blobVersionedHashes: f } = this;
    return {
      _type: "TransactionResponse",
      accessList: d,
      blockNumber: e,
      blockHash: t,
      blobVersionedHashes: f,
      chainId: ae(this.chainId),
      data: l,
      from: a,
      gasLimit: ae(this.gasLimit),
      gasPrice: ae(this.gasPrice),
      hash: s,
      maxFeePerGas: ae(this.maxFeePerGas),
      maxPriorityFeePerGas: ae(this.maxPriorityFeePerGas),
      maxFeePerBlobGas: ae(this.maxFeePerBlobGas),
      nonce: c,
      signature: h,
      to: o,
      index: n,
      type: i,
      value: ae(this.value)
    };
  }
  /**
   *  Resolves to the Block that this transaction was included in.
   *
   *  This will return null if the transaction has not been included yet.
   */
  async getBlock() {
    let e = this.blockNumber;
    if (e == null) {
      const n = await this.getTransaction();
      n && (e = n.blockNumber);
    }
    if (e == null)
      return null;
    const t = this.provider.getBlock(e);
    if (t == null)
      throw new Error("TODO");
    return t;
  }
  /**
   *  Resolves to this transaction being re-requested from the
   *  provider. This can be used if you have an unmined transaction
   *  and wish to get an up-to-date populated instance.
   */
  async getTransaction() {
    return this.provider.getTransaction(this.hash);
  }
  /**
   *  Resolve to the number of confirmations this transaction has.
   */
  async confirmations() {
    if (this.blockNumber == null) {
      const { tx: t, blockNumber: n } = await _e({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber()
      });
      return t == null || t.blockNumber == null ? 0 : n - t.blockNumber + 1;
    }
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(e, t) {
    const n = e ?? 1, s = t ?? 0;
    let i = u(this, Qn), o = -1, a = i === -1;
    const c = async () => {
      if (a)
        return null;
      const { blockNumber: f, nonce: g } = await _e({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (g < this.nonce) {
        i = f;
        return;
      }
      if (a)
        return null;
      const w = await this.getTransaction();
      if (!(w && w.blockNumber != null))
        for (o === -1 && (o = i - 3, o < u(this, Qn) && (o = u(this, Qn))); o <= f; ) {
          if (a)
            return null;
          const m = await this.provider.getBlock(o, !0);
          if (m == null)
            return;
          for (const E of m)
            if (E === this.hash)
              return;
          for (let E = 0; E < m.length; E++) {
            const C = await m.getTransaction(E);
            if (C.from === this.from && C.nonce === this.nonce) {
              if (a)
                return null;
              const S = await this.provider.getTransactionReceipt(C.hash);
              if (S == null || f - S.blockNumber + 1 < n)
                return;
              let N = "replaced";
              C.data === this.data && C.to === this.to && C.value === this.value ? N = "repriced" : C.data === "0x" && C.from === C.to && C.value === Bf && (N = "cancelled"), v(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: N === "replaced" || N === "cancelled",
                reason: N,
                replacement: C.replaceableTransaction(i),
                hash: C.hash,
                receipt: S
              });
            }
          }
          o++;
        }
    }, l = (f) => {
      if (f == null || f.status !== 0)
        return f;
      v(!1, "transaction execution reverted", "CALL_EXCEPTION", {
        action: "sendTransaction",
        data: null,
        reason: null,
        invocation: null,
        revert: null,
        transaction: {
          to: f.to,
          from: f.from,
          data: ""
          // @TODO: in v7, split out sendTransaction properties
        },
        receipt: f
      });
    }, h = await this.provider.getTransactionReceipt(this.hash);
    if (n === 0)
      return l(h);
    if (h) {
      if (await h.confirmations() >= n)
        return l(h);
    } else if (await c(), n === 0)
      return null;
    return await new Promise((f, g) => {
      const w = [], m = () => {
        w.forEach((C) => C());
      };
      if (w.push(() => {
        a = !0;
      }), s > 0) {
        const C = setTimeout(() => {
          m(), g(re("wait for transaction timeout", "TIMEOUT"));
        }, s);
        w.push(() => {
          clearTimeout(C);
        });
      }
      const E = async (C) => {
        if (await C.confirmations() >= n) {
          m();
          try {
            f(l(C));
          } catch (S) {
            g(S);
          }
        }
      };
      if (w.push(() => {
        this.provider.off(this.hash, E);
      }), this.provider.on(this.hash, E), i >= 0) {
        const C = async () => {
          try {
            await c();
          } catch (S) {
            if (xe(S, "TRANSACTION_REPLACED")) {
              m(), g(S);
              return;
            }
          }
          a || this.provider.once("block", C);
        };
        w.push(() => {
          this.provider.off("block", C);
        }), this.provider.once("block", C);
      }
    });
  }
  /**
   *  Returns ``true`` if this transaction has been included.
   *
   *  This is effective only as of the time the TransactionResponse
   *  was instantiated. To get up-to-date information, use
   *  [[getTransaction]].
   *
   *  This provides a Type Guard that this transaction will have
   *  non-null property values for properties that are null for
   *  unmined transactions.
   */
  isMined() {
    return this.blockHash != null;
  }
  /**
   *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
   *  transaction.
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
   *  transaction. See [[link-eip-2070]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if the transaction is a London (i.e. ``type == 2``)
   *  transaction. See [[link-eip-1559]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
   *  transaction. See [[link-eip-4844]].
   */
  isCancun() {
    return this.type === 3;
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that evict this transaction.
   */
  removedEvent() {
    return v(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Df(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(e) {
    return v(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), v(!e || e.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Mf(this, e);
  }
  /**
   *  Returns a new TransactionResponse instance which has the ability to
   *  detect (and throw an error) if the transaction is replaced, which
   *  will begin scanning at %%startBlock%%.
   *
   *  This should generally not be used by developers and is intended
   *  primarily for internal use. Setting an incorrect %%startBlock%% can
   *  have devastating performance consequences if used incorrectly.
   */
  replaceableTransaction(e) {
    y(Number.isInteger(e) && e >= 0, "invalid startBlock", "startBlock", e);
    const t = new gu(this, this.provider);
    return p(t, Qn, e), t;
  }
};
Qn = new WeakMap();
let co = gu;
function Sy(r) {
  return { orphan: "drop-block", hash: r.hash, number: r.number };
}
function Mf(r, e) {
  return { orphan: "reorder-transaction", tx: r, other: e };
}
function Df(r) {
  return { orphan: "drop-transaction", tx: r };
}
function ky(r) {
  return { orphan: "drop-log", log: {
    transactionHash: r.transactionHash,
    blockHash: r.blockHash,
    blockNumber: r.blockNumber,
    address: r.address,
    data: r.data,
    topics: Object.freeze(r.topics.slice()),
    index: r.index
  } };
}
class eu extends Uo {
  /**
   * @_ignore:
   */
  constructor(t, n, s) {
    super(t, t.provider);
    /**
     *  The Contract Interface.
     */
    A(this, "interface");
    /**
     *  The matching event.
     */
    A(this, "fragment");
    /**
     *  The parsed arguments passed to the event by ``emit``.
     */
    A(this, "args");
    const i = n.decodeEventLog(s, t.data, t.topics);
    U(this, { args: i, fragment: s, interface: n });
  }
  /**
   *  The name of the event.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The signature of the event.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
class Uf extends Uo {
  /**
   * @_ignore:
   */
  constructor(t, n) {
    super(t, t.provider);
    /**
     *  The error encounted when trying to decode the log.
     */
    A(this, "error");
    U(this, { error: n });
  }
}
var li;
class xy extends Lf {
  /**
   *  @_ignore:
   */
  constructor(t, n, s) {
    super(s, n);
    b(this, li, void 0);
    p(this, li, t);
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((t) => {
      const n = t.topics.length ? u(this, li).getEvent(t.topics[0]) : null;
      if (n)
        try {
          return new eu(t, u(this, li), n);
        } catch (s) {
          return new Uf(t, s);
        }
      return t;
    });
  }
}
li = new WeakMap();
var Co;
class tu extends co {
  /**
   *  @_ignore:
   */
  constructor(t, n, s) {
    super(s, n);
    b(this, Co, void 0);
    p(this, Co, t);
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(t, n) {
    const s = await super.wait(t, n);
    return s == null ? null : new xy(u(this, Co), this.provider, s);
  }
}
Co = new WeakMap();
class Ff extends ld {
  /**
   *  @_event:
   */
  constructor(t, n, s, i) {
    super(t, n, s);
    /**
     *  The log with no matching events.
     */
    A(this, "log");
    U(this, { log: i });
  }
  /**
   *  Resolves to the block the event occured in.
   */
  async getBlock() {
    return await this.log.getBlock();
  }
  /**
   *  Resolves to the transaction the event occured in.
   */
  async getTransaction() {
    return await this.log.getTransaction();
  }
  /**
   *  Resolves to the transaction receipt the event occured in.
   */
  async getTransactionReceipt() {
    return await this.log.getTransactionReceipt();
  }
}
class Py extends Ff {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, s, i) {
    super(e, t, n, new eu(i, e.interface, s));
    const o = e.interface.decodeEventLog(s, this.log.data, this.log.topics);
    U(this, { args: o, fragment: s });
  }
  /**
   *  The event name.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The event signature.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
const vh = BigInt(0);
function Hf(r) {
  return r && typeof r.call == "function";
}
function Gf(r) {
  return r && typeof r.estimateGas == "function";
}
function nc(r) {
  return r && typeof r.resolveName == "function";
}
function Kf(r) {
  return r && typeof r.sendTransaction == "function";
}
function jf(r) {
  if (r != null) {
    if (nc(r))
      return r;
    if (r.provider)
      return r.provider;
  }
}
var vo;
class Ry {
  constructor(e, t, n) {
    b(this, vo, void 0);
    A(this, "fragment");
    if (U(this, { fragment: t }), t.inputs.length < n.length)
      throw new Error("too many arguments");
    const s = ts(e.runner, "resolveName"), i = nc(s) ? s : null;
    p(this, vo, async function() {
      const o = await Promise.all(t.inputs.map((a, c) => n[c] == null ? null : a.walkAsync(n[c], (h, d) => h === "address" ? Array.isArray(d) ? Promise.all(d.map((f) => Ue(f, i))) : Ue(d, i) : d)));
      return e.interface.encodeFilterTopics(t, o);
    }());
  }
  getTopicFilter() {
    return u(this, vo);
  }
}
vo = new WeakMap();
function ts(r, e) {
  return r == null ? null : typeof r[e] == "function" ? r : r.provider && typeof r.provider[e] == "function" ? r.provider : null;
}
function Cr(r) {
  return r == null ? null : r.provider || null;
}
async function Vf(r, e) {
  const t = Pe.dereference(r, "overrides");
  y(typeof t == "object", "invalid overrides parameter", "overrides", r);
  const n = Ta(t);
  return y(n.to == null || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), y(n.data == null || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
}
async function Oy(r, e, t) {
  const n = ts(r, "resolveName"), s = nc(n) ? n : null;
  return await Promise.all(e.map((i, o) => i.walkAsync(t[o], (a, c) => (c = Pe.dereference(c, a), a === "address" ? Ue(c, s) : c))));
}
function Ty(r) {
  const e = async function(o) {
    const a = await Vf(o, ["data"]);
    a.to = await r.getAddress(), a.from && (a.from = await Ue(a.from, jf(r.runner)));
    const c = r.interface, l = T(a.value || vh, "overrides.value") === vh, h = (a.data || "0x") === "0x";
    c.fallback && !c.fallback.payable && c.receive && !h && !l && y(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", o), y(c.fallback || h, "cannot send data to receive-only contract", "overrides.data", a.data);
    const d = c.receive || c.fallback && c.fallback.payable;
    return y(d || l, "cannot send value to non-payable fallback", "overrides.value", a.value), y(c.fallback || h, "cannot send data to receive-only contract", "overrides.data", a.data), a;
  }, t = async function(o) {
    const a = ts(r.runner, "call");
    v(Hf(a), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const c = await e(o);
    try {
      return await a.call(c);
    } catch (l) {
      throw Dl(l) && l.data ? r.interface.makeError(l.data, c) : l;
    }
  }, n = async function(o) {
    const a = r.runner;
    v(Kf(a), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const c = await a.sendTransaction(await e(o)), l = Cr(r.runner);
    return new tu(r.interface, l, c);
  }, s = async function(o) {
    const a = ts(r.runner, "estimateGas");
    return v(Gf(a), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await a.estimateGas(await e(o));
  }, i = async (o) => await n(o);
  return U(i, {
    _contract: r,
    estimateGas: s,
    populateTransaction: e,
    send: n,
    staticCall: t
  }), i;
}
function _y(r, e) {
  const t = function(...l) {
    const h = r.interface.getFunction(e, l);
    return v(h, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: e, args: l }
    }), h;
  }, n = async function(...l) {
    const h = t(...l);
    let d = {};
    if (h.inputs.length + 1 === l.length && (d = await Vf(l.pop()), d.from && (d.from = await Ue(d.from, jf(r.runner)))), h.inputs.length !== l.length)
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    const f = await Oy(r.runner, h.inputs, l);
    return Object.assign({}, d, await _e({
      to: r.getAddress(),
      data: r.interface.encodeFunctionData(h, f)
    }));
  }, s = async function(...l) {
    const h = await a(...l);
    return h.length === 1 ? h[0] : h;
  }, i = async function(...l) {
    const h = r.runner;
    v(Kf(h), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const d = await h.sendTransaction(await n(...l)), f = Cr(r.runner);
    return new tu(r.interface, f, d);
  }, o = async function(...l) {
    const h = ts(r.runner, "estimateGas");
    return v(Gf(h), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await h.estimateGas(await n(...l));
  }, a = async function(...l) {
    const h = ts(r.runner, "call");
    v(Hf(h), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const d = await n(...l);
    let f = "0x";
    try {
      f = await h.call(d);
    } catch (w) {
      throw Dl(w) && w.data ? r.interface.makeError(w.data, d) : w;
    }
    const g = t(...l);
    return r.interface.decodeFunctionResult(g, f);
  }, c = async (...l) => t(...l).constant ? await s(...l) : await i(...l);
  return U(c, {
    name: r.interface.getFunctionName(e),
    _contract: r,
    _key: e,
    getFragment: t,
    estimateGas: o,
    populateTransaction: n,
    send: i,
    staticCall: s,
    staticCallResult: a
  }), Object.defineProperty(c, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const l = r.interface.getFunction(e);
      return v(l, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: e }
      }), l;
    }
  }), c;
}
function By(r, e) {
  const t = function(...s) {
    const i = r.interface.getEvent(e, s);
    return v(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: e, args: s }
    }), i;
  }, n = function(...s) {
    return new Ry(r, t(...s), s);
  };
  return U(n, {
    name: r.interface.getEventName(e),
    _contract: r,
    _key: e,
    getFragment: t
  }), Object.defineProperty(n, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const s = r.interface.getEvent(e);
      return v(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: e }
      }), s;
    }
  }), n;
}
const _a = Symbol.for("_ethersInternal_contract"), Wf = /* @__PURE__ */ new WeakMap();
function Ly(r, e) {
  Wf.set(r[_a], e);
}
function qe(r) {
  return Wf.get(r[_a]);
}
function My(r) {
  return r && typeof r == "object" && "getTopicFilter" in r && typeof r.getTopicFilter == "function" && r.fragment;
}
async function nu(r, e) {
  let t, n = null;
  if (Array.isArray(e)) {
    const i = function(o) {
      if (X(o, 32))
        return o;
      const a = r.interface.getEvent(o);
      return y(a, "unknown fragment", "name", o), a.topicHash;
    };
    t = e.map((o) => o == null ? null : Array.isArray(o) ? o.map(i) : i(o));
  } else
    e === "*" ? t = [null] : typeof e == "string" ? X(e, 32) ? t = [e] : (n = r.interface.getEvent(e), y(n, "unknown fragment", "event", e), t = [n.topicHash]) : My(e) ? t = await e.getTopicFilter() : "fragment" in e ? (n = e.fragment, t = [n.topicHash]) : y(!1, "unknown event name", "event", e);
  t = t.map((i) => {
    if (i == null)
      return null;
    if (Array.isArray(i)) {
      const o = Array.from(new Set(i.map((a) => a.toLowerCase())).values());
      return o.length === 1 ? o[0] : (o.sort(), o);
    }
    return i.toLowerCase();
  });
  const s = t.map((i) => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
  return { fragment: n, tag: s, topics: t };
}
async function Qi(r, e) {
  const { subs: t } = qe(r);
  return t.get((await nu(r, e)).tag) || null;
}
async function Ih(r, e, t) {
  const n = Cr(r.runner);
  v(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: e });
  const { fragment: s, tag: i, topics: o } = await nu(r, t), { addr: a, subs: c } = qe(r);
  let l = c.get(i);
  if (!l) {
    const d = { address: a || r, topics: o }, f = (E) => {
      let C = s;
      if (C == null)
        try {
          C = r.interface.getEvent(E.topics[0]);
        } catch {
        }
      if (C) {
        const S = C, N = s ? r.interface.decodeEventLog(s, E.data, E.topics) : [];
        Il(r, t, N, (_) => new Py(r, _, t, S, E));
      } else
        Il(r, t, [], (S) => new Ff(r, S, t, E));
    };
    let g = [];
    l = { tag: i, listeners: [], start: () => {
      g.length || g.push(n.on(d, f));
    }, stop: async () => {
      if (g.length == 0)
        return;
      let E = g;
      g = [], await Promise.all(E), n.off(d, f);
    } }, c.set(i, l);
  }
  return l;
}
let vl = Promise.resolve();
async function Dy(r, e, t, n) {
  await vl;
  const s = await Qi(r, e);
  if (!s)
    return !1;
  const i = s.listeners.length;
  return s.listeners = s.listeners.filter(({ listener: o, once: a }) => {
    const c = Array.from(t);
    n && c.push(n(a ? null : o));
    try {
      o.call(r, ...c);
    } catch {
    }
    return !a;
  }), s.listeners.length === 0 && (s.stop(), qe(r).subs.delete(s.tag)), i > 0;
}
async function Il(r, e, t, n) {
  try {
    await vl;
  } catch {
  }
  const s = Dy(r, e, t, n);
  return vl = s, await s;
}
const Xo = ["then"];
var bA;
const Yi = class Yi {
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(e, t, n, s) {
    /**
     *  The target to connect to.
     *
     *  This can be an address, ENS name or any [[Addressable]], such as
     *  another contract. To get the resovled address, use the ``getAddress``
     *  method.
     */
    A(this, "target");
    /**
     *  The contract Interface.
     */
    A(this, "interface");
    /**
     *  The connected runner. This is generally a [[Provider]] or a
     *  [[Signer]], which dictates what operations are supported.
     *
     *  For example, a **Contract** connected to a [[Provider]] may
     *  only execute read-only operations.
     */
    A(this, "runner");
    /**
     *  All the Events available on this contract.
     */
    A(this, "filters");
    /**
     *  @_ignore:
     */
    A(this, bA);
    /**
     *  The fallback or receive function if any.
     */
    A(this, "fallback");
    y(typeof e == "string" || Zd(e), "invalid value for Contract target", "target", e), n == null && (n = null);
    const i = Cl.from(t);
    U(this, { target: e, runner: n, interface: i }), Object.defineProperty(this, _a, { value: {} });
    let o, a = null, c = null;
    if (s) {
      const d = Cr(n);
      c = new tu(this.interface, d, s);
    }
    let l = /* @__PURE__ */ new Map();
    if (typeof e == "string")
      if (X(e))
        a = e, o = Promise.resolve(e);
      else {
        const d = ts(n, "resolveName");
        if (!nc(d))
          throw re("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        o = d.resolveName(e).then((f) => {
          if (f == null)
            throw re("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: e
            });
          return qe(this).addr = f, f;
        });
      }
    else
      o = e.getAddress().then((d) => {
        if (d == null)
          throw new Error("TODO");
        return qe(this).addr = d, d;
      });
    Ly(this, { addrPromise: o, addr: a, deployTx: c, subs: l });
    const h = new Proxy({}, {
      get: (d, f, g) => {
        if (typeof f == "symbol" || Xo.indexOf(f) >= 0)
          return Reflect.get(d, f, g);
        try {
          return this.getEvent(f);
        } catch (w) {
          if (!xe(w, "INVALID_ARGUMENT") || w.argument !== "key")
            throw w;
        }
      },
      has: (d, f) => Xo.indexOf(f) >= 0 ? Reflect.has(d, f) : Reflect.has(d, f) || this.interface.hasEvent(String(f))
    });
    return U(this, { filters: h }), U(this, {
      fallback: i.receive || i.fallback ? Ty(this) : null
    }), new Proxy(this, {
      get: (d, f, g) => {
        if (typeof f == "symbol" || f in d || Xo.indexOf(f) >= 0)
          return Reflect.get(d, f, g);
        try {
          return d.getFunction(f);
        } catch (w) {
          if (!xe(w, "INVALID_ARGUMENT") || w.argument !== "key")
            throw w;
        }
      },
      has: (d, f) => typeof f == "symbol" || f in d || Xo.indexOf(f) >= 0 ? Reflect.has(d, f) : d.interface.hasFunction(f)
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(e) {
    return new Yi(this.target, this.interface, e);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(e) {
    return new Yi(e, this.interface, this.runner);
  }
  /**
   *  Return the resolved address of this Contract.
   */
  async getAddress() {
    return await qe(this).addrPromise;
  }
  /**
   *  Return the deployed bytecode or null if no bytecode is found.
   */
  async getDeployedCode() {
    const e = Cr(this.runner);
    v(e, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const t = await e.getCode(await this.getAddress());
    return t === "0x" ? null : t;
  }
  /**
   *  Resolve to this Contract once the bytecode has been deployed, or
   *  resolve immediately if already deployed.
   */
  async waitForDeployment() {
    const e = this.deploymentTransaction();
    if (e)
      return await e.wait(), this;
    if (await this.getDeployedCode() != null)
      return this;
    const n = Cr(this.runner);
    return v(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" }), new Promise((s, i) => {
      const o = async () => {
        try {
          if (await this.getDeployedCode() != null)
            return s(this);
          n.once("block", o);
        } catch (a) {
          i(a);
        }
      };
      o();
    });
  }
  /**
   *  Return the transaction used to deploy this contract.
   *
   *  This is only available if this instance was returned from a
   *  [[ContractFactory]].
   */
  deploymentTransaction() {
    return qe(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getFunction(e) {
    return typeof e != "string" && (e = e.format()), _y(this, e);
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(e) {
    return typeof e != "string" && (e = e.format()), By(this, e);
  }
  /**
   *  @_ignore:
   */
  async queryTransaction(e) {
    throw new Error("@TODO");
  }
  /*
      // @TODO: this is a non-backwards compatible change, but will be added
      //        in v7 and in a potential SmartContract class in an upcoming
      //        v6 release
      async getTransactionReceipt(hash: string): Promise<null | ContractTransactionReceipt> {
          const provider = getProvider(this.runner);
          assert(provider, "contract runner does not have a provider",
              "UNSUPPORTED_OPERATION", { operation: "queryTransaction" });
  
          const receipt = await provider.getTransactionReceipt(hash);
          if (receipt == null) { return null; }
  
          return new ContractTransactionReceipt(this.interface, provider, receipt);
      }
      */
  /**
   *  Provide historic access to event data for %%event%% in the range
   *  %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
   *  inclusive.
   */
  async queryFilter(e, t, n) {
    t == null && (t = 0), n == null && (n = "latest");
    const { addr: s, addrPromise: i } = qe(this), o = s || await i, { fragment: a, topics: c } = await nu(this, e), l = { address: o, topics: c, fromBlock: t, toBlock: n }, h = Cr(this.runner);
    return v(h, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await h.getLogs(l)).map((d) => {
      let f = a;
      if (f == null)
        try {
          f = this.interface.getEvent(d.topics[0]);
        } catch {
        }
      if (f)
        try {
          return new eu(d, this.interface, f);
        } catch (g) {
          return new Uf(d, g);
        }
      return new Uo(d, h);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(e, t) {
    const n = await Ih(this, "on", e);
    return n.listeners.push({ listener: t, once: !1 }), n.start(), this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(e, t) {
    const n = await Ih(this, "once", e);
    return n.listeners.push({ listener: t, once: !0 }), n.start(), this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(e, ...t) {
    return await Il(this, e, t, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(e) {
    if (e) {
      const s = await Qi(this, e);
      return s ? s.listeners.length : 0;
    }
    const { subs: t } = qe(this);
    let n = 0;
    for (const { listeners: s } of t.values())
      n += s.length;
    return n;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(e) {
    if (e) {
      const s = await Qi(this, e);
      return s ? s.listeners.map(({ listener: i }) => i) : [];
    }
    const { subs: t } = qe(this);
    let n = [];
    for (const { listeners: s } of t.values())
      n = n.concat(s.map(({ listener: i }) => i));
    return n;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(e, t) {
    const n = await Qi(this, e);
    if (!n)
      return this;
    if (t) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(t);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (t == null || n.listeners.length === 0) && (n.stop(), qe(this).subs.delete(n.tag)), this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(e) {
    if (e) {
      const t = await Qi(this, e);
      if (!t)
        return this;
      t.stop(), qe(this).subs.delete(t.tag);
    } else {
      const { subs: t } = qe(this);
      for (const { tag: n, stop: s } of t.values())
        s(), t.delete(n);
    }
    return this;
  }
  /**
   *  Alias for [on].
   */
  async addListener(e, t) {
    return await this.on(e, t);
  }
  /**
   *  Alias for [off].
   */
  async removeListener(e, t) {
    return await this.off(e, t);
  }
  /**
   *  Create a new Class for the %%abi%%.
   */
  static buildClass(e) {
    class t extends Yi {
      constructor(s, i = null) {
        super(s, e, i);
      }
    }
    return t;
  }
  /**
   *  Create a new BaseContract with a specified Interface.
   */
  static from(e, t, n) {
    return n == null && (n = null), new this(e, t, n);
  }
};
bA = _a;
let Nl = Yi;
function Uy() {
  return Nl;
}
class _s extends Uy() {
}
function jc(r) {
  return r.match(/^ipfs:\/\/ipfs\//i) ? r = r.substring(12) : r.match(/^ipfs:\/\//i) ? r = r.substring(7) : y(!1, "unsupported IPFS format", "link", r), `https://gateway.ipfs.io/ipfs/${r}`;
}
class Fy {
  /**
   *  Creates a new **MulticoinProviderPluing** for %%name%%.
   */
  constructor(e) {
    /**
     *  The name.
     */
    A(this, "name");
    U(this, { name: e });
  }
  connect(e) {
    return this;
  }
  /**
   *  Returns ``true`` if %%coinType%% is supported by this plugin.
   */
  supportsCoinType(e) {
    return !1;
  }
  /**
   *  Resolves to the encoded %%address%% for %%coinType%%.
   */
  async encodeAddress(e, t) {
    throw new Error("unsupported coin");
  }
  /**
   *  Resolves to the decoded %%data%% for %%coinType%%.
   */
  async decodeAddress(e, t) {
    throw new Error("unsupported coin");
  }
}
const Qf = new RegExp("^(ipfs)://(.*)$", "i"), Nh = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  Qf,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
var zn, Lr, Jn, As, Ka, zf;
const ks = class ks {
  constructor(e, t, n) {
    b(this, Jn);
    /**
     *  The connected provider.
     */
    A(this, "provider");
    /**
     *  The address of the resolver.
     */
    A(this, "address");
    /**
     *  The name this resolver was resolved against.
     */
    A(this, "name");
    // For EIP-2544 names, the ancestor that provided the resolver
    b(this, zn, void 0);
    b(this, Lr, void 0);
    U(this, { provider: e, address: t, name: n }), p(this, zn, null), p(this, Lr, new _s(t, [
      "function supportsInterface(bytes4) view returns (bool)",
      "function resolve(bytes, bytes) view returns (bytes)",
      "function addr(bytes32) view returns (address)",
      "function addr(bytes32, uint) view returns (bytes)",
      "function text(bytes32, string) view returns (string)",
      "function contenthash(bytes32) view returns (bytes)"
    ], e));
  }
  /**
   *  Resolves to true if the resolver supports wildcard resolution.
   */
  async supportsWildcard() {
    return u(this, zn) == null && p(this, zn, (async () => {
      try {
        return await u(this, Lr).supportsInterface("0x9061b923");
      } catch (e) {
        if (xe(e, "CALL_EXCEPTION"))
          return !1;
        throw p(this, zn, null), e;
      }
    })()), await u(this, zn);
  }
  /**
   *  Resolves to the address for %%coinType%% or null if the
   *  provided %%coinType%% has not been configured.
   */
  async getAddress(e) {
    if (e == null && (e = 60), e === 60)
      try {
        const i = await I(this, Jn, As).call(this, "addr(bytes32)");
        return i == null || i === eo ? null : i;
      } catch (i) {
        if (xe(i, "CALL_EXCEPTION"))
          return null;
        throw i;
      }
    if (e >= 0 && e < 2147483648) {
      let i = e + 2147483648;
      const o = await I(this, Jn, As).call(this, "addr(bytes32,uint)", [i]);
      if (X(o, 20))
        return $(o);
    }
    let t = null;
    for (const i of this.provider.plugins)
      if (i instanceof Fy && i.supportsCoinType(e)) {
        t = i;
        break;
      }
    if (t == null)
      return null;
    const n = await I(this, Jn, As).call(this, "addr(bytes32,uint)", [e]);
    if (n == null || n === "0x")
      return null;
    const s = await t.decodeAddress(e, n);
    if (s != null)
      return s;
    v(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
      operation: `getAddress(${e})`,
      info: { coinType: e, data: n }
    });
  }
  /**
   *  Resolves to the EIP-634 text record for %%key%%, or ``null``
   *  if unconfigured.
   */
  async getText(e) {
    const t = await I(this, Jn, As).call(this, "text(bytes32,string)", [e]);
    return t == null || t === "0x" ? null : t;
  }
  /**
   *  Rsolves to the content-hash or ``null`` if unconfigured.
   */
  async getContentHash() {
    const e = await I(this, Jn, As).call(this, "contenthash(bytes32)");
    if (e == null || e === "0x")
      return null;
    const t = e.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
    if (t) {
      const s = t[1] === "e3010170" ? "ipfs" : "ipns", i = parseInt(t[4], 16);
      if (t[5].length === i * 2)
        return `${s}://${zp("0x" + t[2])}`;
    }
    const n = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
    if (n && n[1].length === 64)
      return `bzz://${n[1]}`;
    v(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
      operation: "getContentHash()",
      info: { data: e }
    });
  }
  /**
   *  Resolves to the avatar url or ``null`` if the avatar is either
   *  unconfigured or incorrectly configured (e.g. references an NFT
   *  not owned by the address).
   *
   *  If diagnosing issues with configurations, the [[_getAvatar]]
   *  method may be useful.
   */
  async getAvatar() {
    return (await this._getAvatar()).url;
  }
  /**
   *  When resolving an avatar, there are many steps involved, such
   *  fetching metadata and possibly validating ownership of an
   *  NFT.
   *
   *  This method can be used to examine each step and the value it
   *  was working from.
   */
  async _getAvatar() {
    const e = [{ type: "name", value: this.name }];
    try {
      const t = await this.getText("avatar");
      if (t == null)
        return e.push({ type: "!avatar", value: "" }), { url: null, linkage: e };
      e.push({ type: "avatar", value: t });
      for (let n = 0; n < Nh.length; n++) {
        const s = t.match(Nh[n]);
        if (s == null)
          continue;
        const i = s[1].toLowerCase();
        switch (i) {
          case "https":
          case "data":
            return e.push({ type: "url", value: t }), { linkage: e, url: t };
          case "ipfs": {
            const o = jc(t);
            return e.push({ type: "ipfs", value: t }), e.push({ type: "url", value: o }), { linkage: e, url: o };
          }
          case "erc721":
          case "erc1155": {
            const o = i === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
            e.push({ type: i, value: t });
            const a = await this.getAddress();
            if (a == null)
              return e.push({ type: "!owner", value: "" }), { url: null, linkage: e };
            const c = (s[2] || "").split("/");
            if (c.length !== 2)
              return e.push({ type: `!${i}caip`, value: s[2] || "" }), { url: null, linkage: e };
            const l = c[1], h = new _s(c[0], [
              // ERC-721
              "function tokenURI(uint) view returns (string)",
              "function ownerOf(uint) view returns (address)",
              // ERC-1155
              "function uri(uint) view returns (string)",
              "function balanceOf(address, uint256) view returns (uint)"
            ], this.provider);
            if (i === "erc721") {
              const m = await h.ownerOf(l);
              if (a !== m)
                return e.push({ type: "!owner", value: m }), { url: null, linkage: e };
              e.push({ type: "owner", value: m });
            } else if (i === "erc1155") {
              const m = await h.balanceOf(a, l);
              if (!m)
                return e.push({ type: "!balance", value: "0" }), { url: null, linkage: e };
              e.push({ type: "balance", value: m.toString() });
            }
            let d = await h[o](l);
            if (d == null || d === "0x")
              return e.push({ type: "!metadata-url", value: "" }), { url: null, linkage: e };
            e.push({ type: "metadata-url-base", value: d }), i === "erc1155" && (d = d.replace("{id}", ar(l, 32).substring(2)), e.push({ type: "metadata-url-expanded", value: d })), d.match(/^ipfs:/i) && (d = jc(d)), e.push({ type: "metadata-url", value: d });
            let f = {};
            const g = await new Yt(d).send();
            g.assertOk();
            try {
              f = g.bodyJson;
            } catch {
              try {
                e.push({ type: "!metadata", value: g.bodyText });
              } catch {
                const C = g.body;
                return C && e.push({ type: "!metadata", value: O(C) }), { url: null, linkage: e };
              }
              return { url: null, linkage: e };
            }
            if (!f)
              return e.push({ type: "!metadata", value: "" }), { url: null, linkage: e };
            e.push({ type: "metadata", value: JSON.stringify(f) });
            let w = f.image;
            if (typeof w != "string")
              return e.push({ type: "!imageUrl", value: "" }), { url: null, linkage: e };
            if (!w.match(/^(https:\/\/|data:)/i)) {
              if (w.match(Qf) == null)
                return e.push({ type: "!imageUrl-ipfs", value: w }), { url: null, linkage: e };
              e.push({ type: "imageUrl-ipfs", value: w }), w = jc(w);
            }
            return e.push({ type: "url", value: w }), { linkage: e, url: w };
          }
        }
      }
    } catch {
    }
    return { linkage: e, url: null };
  }
  static async getEnsAddress(e) {
    const t = await e.getNetwork(), n = t.getPlugin("org.ethers.plugins.network.Ens");
    return v(n, "network does not support ENS", "UNSUPPORTED_OPERATION", {
      operation: "getEnsAddress",
      info: { network: t }
    }), n.address;
  }
  /**
   *  Resolve to the ENS resolver for %%name%% using %%provider%% or
   *  ``null`` if unconfigured.
   */
  static async fromName(e, t) {
    var s;
    let n = t;
    for (; ; ) {
      if (n === "" || n === "." || t !== "eth" && n === "eth")
        return null;
      const i = await I(s = ks, Ka, zf).call(s, e, n);
      if (i != null) {
        const o = new ks(e, i, t);
        return n !== t && !await o.supportsWildcard() ? null : o;
      }
      n = n.split(".").slice(1).join(".");
    }
  }
};
zn = new WeakMap(), Lr = new WeakMap(), Jn = new WeakSet(), As = async function(e, t) {
  t = (t || []).slice();
  const n = u(this, Lr).interface;
  t.unshift(Al(this.name));
  let s = null;
  await this.supportsWildcard() && (s = n.getFunction(e), v(s, "missing fragment", "UNKNOWN_ERROR", {
    info: { funcName: e }
  }), t = [
    Um(this.name, 255),
    n.encodeFunctionData(s, t)
  ], e = "resolve(bytes,bytes)"), t.push({
    enableCcipRead: !0
  });
  try {
    const i = await u(this, Lr)[e](...t);
    return s ? n.decodeFunctionResult(s, i)[0] : i;
  } catch (i) {
    if (!xe(i, "CALL_EXCEPTION"))
      throw i;
  }
  return null;
}, Ka = new WeakSet(), zf = async function(e, t) {
  const n = await ks.getEnsAddress(e);
  try {
    const i = await new _s(n, [
      "function resolver(bytes32) view returns (address)"
    ], e).resolver(Al(t), {
      enableCcipRead: !0
    });
    return i === eo ? null : i;
  } catch (s) {
    throw s;
  }
  return null;
}, b(ks, Ka);
let Ba = ks;
const Sh = BigInt(0);
function V(r, e) {
  return function(t) {
    return t == null ? e : r(t);
  };
}
function rc(r, e) {
  return (t) => {
    if (e && t == null)
      return null;
    if (!Array.isArray(t))
      throw new Error("not an array");
    return t.map((n) => r(n));
  };
}
function Fo(r, e) {
  return (t) => {
    const n = {};
    for (const s in r) {
      let i = s;
      if (e && s in e && !(i in t)) {
        for (const o of e[s])
          if (o in t) {
            i = o;
            break;
          }
      }
      try {
        const o = r[s](t[i]);
        o !== void 0 && (n[s] = o);
      } catch (o) {
        const a = o instanceof Error ? o.message : "not-an-error";
        v(!1, `invalid value for value.${s} (${a})`, "BAD_DATA", { value: t });
      }
    }
    return n;
  };
}
function Hy(r) {
  switch (r) {
    case !0:
    case "true":
      return !0;
    case !1:
    case "false":
      return !1;
  }
  y(!1, `invalid boolean; ${JSON.stringify(r)}`, "value", r);
}
function _i(r) {
  return y(X(r, !0), "invalid data", "value", r), r;
}
function Ce(r) {
  return y(X(r, 32), "invalid hash", "value", r), r;
}
const Gy = Fo({
  address: $,
  blockHash: Ce,
  blockNumber: H,
  data: _i,
  index: H,
  removed: V(Hy, !1),
  topics: rc(Ce),
  transactionHash: Ce,
  transactionIndex: H
}, {
  index: ["logIndex"]
});
function Ky(r) {
  return Gy(r);
}
const jy = Fo({
  hash: V(Ce),
  parentHash: Ce,
  parentBeaconBlockRoot: V(Ce, null),
  number: H,
  timestamp: H,
  nonce: V(_i),
  difficulty: T,
  gasLimit: T,
  gasUsed: T,
  stateRoot: V(Ce, null),
  receiptsRoot: V(Ce, null),
  blobGasUsed: V(T, null),
  excessBlobGas: V(T, null),
  miner: V($),
  prevRandao: V(Ce, null),
  extraData: _i,
  baseFeePerGas: V(T)
}, {
  prevRandao: ["mixHash"]
});
function Vy(r) {
  const e = jy(r);
  return e.transactions = r.transactions.map((t) => typeof t == "string" ? t : Jf(t)), e;
}
const Wy = Fo({
  transactionIndex: H,
  blockNumber: H,
  transactionHash: Ce,
  address: $,
  topics: rc(Ce),
  data: _i,
  index: H,
  blockHash: Ce
}, {
  index: ["logIndex"]
});
function Qy(r) {
  return Wy(r);
}
const zy = Fo({
  to: V($, null),
  from: V($, null),
  contractAddress: V($, null),
  // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
  index: H,
  root: V(O),
  gasUsed: T,
  blobGasUsed: V(T, null),
  logsBloom: V(_i),
  blockHash: Ce,
  hash: Ce,
  logs: rc(Qy),
  blockNumber: H,
  //confirmations: allowNull(getNumber, null),
  cumulativeGasUsed: T,
  effectiveGasPrice: V(T),
  blobGasPrice: V(T, null),
  status: V(H),
  type: V(H, 0)
}, {
  effectiveGasPrice: ["gasPrice"],
  hash: ["transactionHash"],
  index: ["transactionIndex"]
});
function Jy(r) {
  return zy(r);
}
function Jf(r) {
  r.to && T(r.to) === Sh && (r.to = "0x0000000000000000000000000000000000000000");
  const e = Fo({
    hash: Ce,
    // Some nodes do not return this, usually test nodes (like Ganache)
    index: V(H, void 0),
    type: (t) => t === "0x" || t == null ? 0 : H(t),
    accessList: V(rs, null),
    blobVersionedHashes: V(rc(Ce, !0), null),
    blockHash: V(Ce, null),
    blockNumber: V(H, null),
    transactionIndex: V(H, null),
    from: $,
    // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
    gasPrice: V(T),
    maxPriorityFeePerGas: V(T),
    maxFeePerGas: V(T),
    maxFeePerBlobGas: V(T, null),
    gasLimit: T,
    to: V($, null),
    value: T,
    nonce: H,
    data: _i,
    creates: V($, null),
    chainId: V(T, null)
  }, {
    data: ["input"],
    gasLimit: ["gas"],
    index: ["transactionIndex"]
  })(r);
  if (e.to == null && e.creates == null && (e.creates = G0(e)), (r.type === 1 || r.type === 2) && r.accessList == null && (e.accessList = []), r.signature ? e.signature = xt.from(r.signature) : e.signature = xt.from(r), e.chainId == null) {
    const t = e.signature.legacyChainId;
    t != null && (e.chainId = t);
  }
  return e.blockHash && T(e.blockHash) === Sh && (e.blockHash = null), e;
}
const qy = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class Ho {
  /**
   *  Creates a new **NetworkPlugin**.
   */
  constructor(e) {
    /**
     *  The name of the plugin.
     *
     *  It is recommended to use reverse-domain-notation, which permits
     *  unique names with a known authority as well as hierarchal entries.
     */
    A(this, "name");
    U(this, { name: e });
  }
  /**
   *  Creates a copy of this plugin.
   */
  clone() {
    return new Ho(this.name);
  }
}
class sc extends Ho {
  /**
   *  Creates a new GasCostPlugin from %%effectiveBlock%% until the
   *  latest block or another GasCostPlugin supercedes that block number,
   *  with the associated %%costs%%.
   */
  constructor(t, n) {
    t == null && (t = 0);
    super(`org.ethers.network.plugins.GasCost#${t || 0}`);
    /**
     *  The block number to treat these values as valid from.
     *
     *  This allows a hardfork to have updated values included as well as
     *  mulutiple hardforks to be supported.
     */
    A(this, "effectiveBlock");
    /**
     *  The transactions base fee.
     */
    A(this, "txBase");
    /**
     *  The fee for creating a new account.
     */
    A(this, "txCreate");
    /**
     *  The fee per zero-byte in the data.
     */
    A(this, "txDataZero");
    /**
     *  The fee per non-zero-byte in the data.
     */
    A(this, "txDataNonzero");
    /**
     *  The fee per storage key in the [[link-eip-2930]] access list.
     */
    A(this, "txAccessListStorageKey");
    /**
     *  The fee per address in the [[link-eip-2930]] access list.
     */
    A(this, "txAccessListAddress");
    const s = { effectiveBlock: t };
    function i(o, a) {
      let c = (n || {})[o];
      c == null && (c = a), y(typeof c == "number", `invalud value for ${o}`, "costs", n), s[o] = c;
    }
    i("txBase", 21e3), i("txCreate", 32e3), i("txDataZero", 4), i("txDataNonzero", 16), i("txAccessListStorageKey", 1900), i("txAccessListAddress", 2400), U(this, s);
  }
  clone() {
    return new sc(this.effectiveBlock, this);
  }
}
class ic extends Ho {
  /**
   *  Creates a new **EnsPlugin** connected to %%address%% on the
   *  %%targetNetwork%%. The default ENS address and mainnet is used
   *  if unspecified.
   */
  constructor(t, n) {
    super("org.ethers.plugins.network.Ens");
    /**
     *  The ENS Registrty Contract address.
     */
    A(this, "address");
    /**
     *  The chain ID that the ENS contract lives on.
     */
    A(this, "targetNetwork");
    U(this, {
      address: t || qy,
      targetNetwork: n ?? 1
    });
  }
  clone() {
    return new ic(this.address, this.targetNetwork);
  }
}
var Io, No;
class Zy extends Ho {
  /**
   *  Creates a new **FetchUrlFeeDataNetworkPlugin** which will
   *  be used when computing the fee data for the network.
   */
  constructor(t, n) {
    super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    b(this, Io, void 0);
    b(this, No, void 0);
    p(this, Io, t), p(this, No, n);
  }
  /**
   *  The URL to initialize the FetchRequest with in %%processFunc%%.
   */
  get url() {
    return u(this, Io);
  }
  /**
   *  The callback to use when computing the FeeData.
   */
  get processFunc() {
    return u(this, No);
  }
  // We are immutable, so we can serve as our own clone
  clone() {
    return this;
  }
}
Io = new WeakMap(), No = new WeakMap();
const Vc = /* @__PURE__ */ new Map();
var ui, hi, qn;
const xs = class xs {
  /**
   *  Creates a new **Network** for %%name%% and %%chainId%%.
   */
  constructor(e, t) {
    b(this, ui, void 0);
    b(this, hi, void 0);
    b(this, qn, void 0);
    p(this, ui, e), p(this, hi, T(t)), p(this, qn, /* @__PURE__ */ new Map());
  }
  /**
   *  Returns a JSON-compatible representation of a Network.
   */
  toJSON() {
    return { name: this.name, chainId: String(this.chainId) };
  }
  /**
   *  The network common name.
   *
   *  This is the canonical name, as networks migh have multiple
   *  names.
   */
  get name() {
    return u(this, ui);
  }
  set name(e) {
    p(this, ui, e);
  }
  /**
   *  The network chain ID.
   */
  get chainId() {
    return u(this, hi);
  }
  set chainId(e) {
    p(this, hi, T(e, "chainId"));
  }
  /**
   *  Returns true if %%other%% matches this network. Any chain ID
   *  must match, and if no chain ID is present, the name must match.
   *
   *  This method does not currently check for additional properties,
   *  such as ENS address or plug-in compatibility.
   */
  matches(e) {
    if (e == null)
      return !1;
    if (typeof e == "string") {
      try {
        return this.chainId === T(e);
      } catch {
      }
      return this.name === e;
    }
    if (typeof e == "number" || typeof e == "bigint") {
      try {
        return this.chainId === T(e);
      } catch {
      }
      return !1;
    }
    if (typeof e == "object") {
      if (e.chainId != null) {
        try {
          return this.chainId === T(e.chainId);
        } catch {
        }
        return !1;
      }
      return e.name != null ? this.name === e.name : !1;
    }
    return !1;
  }
  /**
   *  Returns the list of plugins currently attached to this Network.
   */
  get plugins() {
    return Array.from(u(this, qn).values());
  }
  /**
   *  Attach a new %%plugin%% to this Network. The network name
   *  must be unique, excluding any fragment.
   */
  attachPlugin(e) {
    if (u(this, qn).get(e.name))
      throw new Error(`cannot replace existing plugin: ${e.name} `);
    return u(this, qn).set(e.name, e.clone()), this;
  }
  /**
   *  Return the plugin, if any, matching %%name%% exactly. Plugins
   *  with fragments will not be returned unless %%name%% includes
   *  a fragment.
   */
  getPlugin(e) {
    return u(this, qn).get(e) || null;
  }
  /**
   *  Gets a list of all plugins that match %%name%%, with otr without
   *  a fragment.
   */
  getPlugins(e) {
    return this.plugins.filter((t) => t.name.split("#")[0] === e);
  }
  /**
   *  Create a copy of this Network.
   */
  clone() {
    const e = new xs(this.name, this.chainId);
    return this.plugins.forEach((t) => {
      e.attachPlugin(t.clone());
    }), e;
  }
  /**
   *  Compute the intrinsic gas required for a transaction.
   *
   *  A GasCostPlugin can be attached to override the default
   *  values.
   */
  computeIntrinsicGas(e) {
    const t = this.getPlugin("org.ethers.plugins.network.GasCost") || new sc();
    let n = t.txBase;
    if (e.to == null && (n += t.txCreate), e.data)
      for (let s = 2; s < e.data.length; s += 2)
        e.data.substring(s, s + 2) === "00" ? n += t.txDataZero : n += t.txDataNonzero;
    if (e.accessList) {
      const s = rs(e.accessList);
      for (const i in s)
        n += t.txAccessListAddress + t.txAccessListStorageKey * s[i].storageKeys.length;
    }
    return n;
  }
  /**
   *  Returns a new Network for the %%network%% name or chainId.
   */
  static from(e) {
    if ($y(), e == null)
      return xs.from("mainnet");
    if (typeof e == "number" && (e = BigInt(e)), typeof e == "string" || typeof e == "bigint") {
      const t = Vc.get(e);
      if (t)
        return t();
      if (typeof e == "bigint")
        return new xs("unknown", e);
      y(!1, "unknown network", "network", e);
    }
    if (typeof e.clone == "function")
      return e.clone();
    if (typeof e == "object") {
      y(typeof e.name == "string" && typeof e.chainId == "number", "invalid network object name or chainId", "network", e);
      const t = new xs(e.name, e.chainId);
      return (e.ensAddress || e.ensNetwork != null) && t.attachPlugin(new ic(e.ensAddress, e.ensNetwork)), t;
    }
    y(!1, "invalid network", "network", e);
  }
  /**
   *  Register %%nameOrChainId%% with a function which returns
   *  an instance of a Network representing that chain.
   */
  static register(e, t) {
    typeof e == "number" && (e = BigInt(e));
    const n = Vc.get(e);
    n && y(!1, `conflicting network for ${JSON.stringify(n.name)}`, "nameOrChainId", e), Vc.set(e, t);
  }
};
ui = new WeakMap(), hi = new WeakMap(), qn = new WeakMap();
let kt = xs;
function kh(r, e) {
  const t = String(r);
  if (!t.match(/^[0-9.]+$/))
    throw new Error(`invalid gwei value: ${r}`);
  const n = t.split(".");
  if (n.length === 1 && n.push(""), n.length !== 2)
    throw new Error(`invalid gwei value: ${r}`);
  for (; n[1].length < e; )
    n[1] += "0";
  if (n[1].length > 9) {
    let s = BigInt(n[1].substring(0, 9));
    n[1].substring(9).match(/^0+$/) || s++, n[1] = s.toString();
  }
  return BigInt(n[0] + n[1]);
}
function xh(r) {
  return new Zy(r, async (e, t, n) => {
    n.setHeader("User-Agent", "ethers");
    let s;
    try {
      const [i, o] = await Promise.all([
        n.send(),
        e()
      ]);
      s = i;
      const a = s.bodyJson.standard;
      return {
        gasPrice: o.gasPrice,
        maxFeePerGas: kh(a.maxFee, 9),
        maxPriorityFeePerGas: kh(a.maxPriorityFee, 9)
      };
    } catch (i) {
      v(!1, `error encountered with polygon gas station (${JSON.stringify(n.url)})`, "SERVER_ERROR", { request: n, response: s, error: i });
    }
  });
}
let Ph = !1;
function $y() {
  if (Ph)
    return;
  Ph = !0;
  function r(e, t, n) {
    const s = function() {
      const i = new kt(e, t);
      return n.ensNetwork != null && i.attachPlugin(new ic(null, n.ensNetwork)), i.attachPlugin(new sc()), (n.plugins || []).forEach((o) => {
        i.attachPlugin(o);
      }), i;
    };
    kt.register(e, s), kt.register(t, s), n.altNames && n.altNames.forEach((i) => {
      kt.register(i, s);
    });
  }
  r("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }), r("ropsten", 3, { ensNetwork: 3 }), r("rinkeby", 4, { ensNetwork: 4 }), r("goerli", 5, { ensNetwork: 5 }), r("kovan", 42, { ensNetwork: 42 }), r("sepolia", 11155111, { ensNetwork: 11155111 }), r("holesky", 17e3, { ensNetwork: 17e3 }), r("classic", 61, {}), r("classicKotti", 6, {}), r("arbitrum", 42161, {
    ensNetwork: 1
  }), r("arbitrum-goerli", 421613, {}), r("arbitrum-sepolia", 421614, {}), r("base", 8453, { ensNetwork: 1 }), r("base-goerli", 84531, {}), r("base-sepolia", 84532, {}), r("bnb", 56, { ensNetwork: 1 }), r("bnbt", 97, {}), r("linea", 59144, { ensNetwork: 1 }), r("linea-goerli", 59140, {}), r("linea-sepolia", 59141, {}), r("matic", 137, {
    ensNetwork: 1,
    plugins: [
      xh("https://gasstation.polygon.technology/v2")
    ]
  }), r("matic-amoy", 80002, {}), r("matic-mumbai", 80001, {
    altNames: ["maticMumbai", "maticmum"],
    plugins: [
      xh("https://gasstation-testnet.polygon.technology/v2")
    ]
  }), r("optimism", 10, {
    ensNetwork: 1,
    plugins: []
  }), r("optimism-goerli", 420, {}), r("optimism-sepolia", 11155420, {}), r("xdai", 100, { ensNetwork: 1 });
}
function Sl(r) {
  return JSON.parse(JSON.stringify(r));
}
var yn, it, Zn, Kt, di, ga;
class Yy {
  /**
   *  Create a new **PollingBlockSubscriber** attached to %%provider%%.
   */
  constructor(e) {
    b(this, di);
    b(this, yn, void 0);
    b(this, it, void 0);
    b(this, Zn, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    b(this, Kt, void 0);
    p(this, yn, e), p(this, it, null), p(this, Zn, 4e3), p(this, Kt, -2);
  }
  /**
   *  The polling interval.
   */
  get pollingInterval() {
    return u(this, Zn);
  }
  set pollingInterval(e) {
    p(this, Zn, e);
  }
  start() {
    u(this, it) || (p(this, it, u(this, yn)._setTimeout(I(this, di, ga).bind(this), u(this, Zn))), I(this, di, ga).call(this));
  }
  stop() {
    u(this, it) && (u(this, yn)._clearTimeout(u(this, it)), p(this, it, null));
  }
  pause(e) {
    this.stop(), e && p(this, Kt, -2);
  }
  resume() {
    this.start();
  }
}
yn = new WeakMap(), it = new WeakMap(), Zn = new WeakMap(), Kt = new WeakMap(), di = new WeakSet(), ga = async function() {
  try {
    const e = await u(this, yn).getBlockNumber();
    if (u(this, Kt) === -2) {
      p(this, Kt, e);
      return;
    }
    if (e !== u(this, Kt)) {
      for (let t = u(this, Kt) + 1; t <= e; t++) {
        if (u(this, it) == null)
          return;
        await u(this, yn).emit("block", t);
      }
      p(this, Kt, e);
    }
  } catch {
  }
  u(this, it) != null && p(this, it, u(this, yn)._setTimeout(I(this, di, ga).bind(this), u(this, Zn)));
};
var Mr, Dr, $n;
class ru {
  /**
   *  Create a new **OnBlockSubscriber** attached to %%provider%%.
   */
  constructor(e) {
    b(this, Mr, void 0);
    b(this, Dr, void 0);
    b(this, $n, void 0);
    p(this, Mr, e), p(this, $n, !1), p(this, Dr, (t) => {
      this._poll(t, u(this, Mr));
    });
  }
  /**
   *  Called on every new block.
   */
  async _poll(e, t) {
    throw new Error("sub-classes must override this");
  }
  start() {
    u(this, $n) || (p(this, $n, !0), u(this, Dr).call(this, -2), u(this, Mr).on("block", u(this, Dr)));
  }
  stop() {
    u(this, $n) && (p(this, $n, !1), u(this, Mr).off("block", u(this, Dr)));
  }
  pause(e) {
    this.stop();
  }
  resume() {
    this.start();
  }
}
Mr = new WeakMap(), Dr = new WeakMap(), $n = new WeakMap();
var fi, wn;
class Xy extends ru {
  constructor(t, n) {
    super(t);
    b(this, fi, void 0);
    b(this, wn, void 0);
    p(this, fi, n), p(this, wn, -2);
  }
  pause(t) {
    t && p(this, wn, -2), super.pause(t);
  }
  async _poll(t, n) {
    const s = await n.getBlock(u(this, fi));
    s != null && (u(this, wn) === -2 ? p(this, wn, s.number) : s.number > u(this, wn) && (n.emit(u(this, fi), s.number), p(this, wn, s.number)));
  }
}
fi = new WeakMap(), wn = new WeakMap();
var ja;
class ew extends ru {
  constructor(t, n) {
    super(t);
    b(this, ja, void 0);
    p(this, ja, Sl(n));
  }
  async _poll(t, n) {
    throw new Error("@TODO");
  }
}
ja = new WeakMap();
var pi;
class tw extends ru {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%hash%%.
   */
  constructor(t, n) {
    super(t);
    b(this, pi, void 0);
    p(this, pi, n);
  }
  async _poll(t, n) {
    const s = await n.getTransactionReceipt(u(this, pi));
    s && n.emit(u(this, pi), s);
  }
}
pi = new WeakMap();
var bn, gi, mi, Yn, ot, Va, qf;
class su {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%filter%%.
   */
  constructor(e, t) {
    b(this, Va);
    b(this, bn, void 0);
    b(this, gi, void 0);
    b(this, mi, void 0);
    b(this, Yn, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    b(this, ot, void 0);
    p(this, bn, e), p(this, gi, Sl(t)), p(this, mi, I(this, Va, qf).bind(this)), p(this, Yn, !1), p(this, ot, -2);
  }
  start() {
    u(this, Yn) || (p(this, Yn, !0), u(this, ot) === -2 && u(this, bn).getBlockNumber().then((e) => {
      p(this, ot, e);
    }), u(this, bn).on("block", u(this, mi)));
  }
  stop() {
    u(this, Yn) && (p(this, Yn, !1), u(this, bn).off("block", u(this, mi)));
  }
  pause(e) {
    this.stop(), e && p(this, ot, -2);
  }
  resume() {
    this.start();
  }
}
bn = new WeakMap(), gi = new WeakMap(), mi = new WeakMap(), Yn = new WeakMap(), ot = new WeakMap(), Va = new WeakSet(), qf = async function(e) {
  if (u(this, ot) === -2)
    return;
  const t = Sl(u(this, gi));
  t.fromBlock = u(this, ot) + 1, t.toBlock = e;
  const n = await u(this, bn).getLogs(t);
  if (n.length === 0) {
    u(this, ot) < e - 60 && p(this, ot, e - 60);
    return;
  }
  for (const s of n)
    u(this, bn).emit(u(this, gi), s), p(this, ot, s.blockNumber);
};
const nw = BigInt(2), rw = 10;
function ea(r) {
  return r && typeof r.then == "function";
}
function ma(r, e) {
  return r + ":" + JSON.stringify(e, (t, n) => {
    if (n == null)
      return "null";
    if (typeof n == "bigint")
      return `bigint:${n.toString()}`;
    if (typeof n == "string")
      return n.toLowerCase();
    if (typeof n == "object" && !Array.isArray(n)) {
      const s = Object.keys(n);
      return s.sort(), s.reduce((i, o) => (i[o] = n[o], i), {});
    }
    return n;
  });
}
class La {
  /**
   *  Create a new UnmanagedSubscriber with %%name%%.
   */
  constructor(e) {
    /**
     *  The name fof the event.
     */
    A(this, "name");
    U(this, { name: e });
  }
  start() {
  }
  stop() {
  }
  pause(e) {
  }
  resume() {
  }
}
function sw(r) {
  return JSON.parse(JSON.stringify(r));
}
function kl(r) {
  return r = Array.from(new Set(r).values()), r.sort(), r;
}
async function Wc(r, e) {
  if (r == null)
    throw new Error("invalid event");
  if (Array.isArray(r) && (r = { topics: r }), typeof r == "string")
    switch (r) {
      case "block":
      case "debug":
      case "error":
      case "finalized":
      case "network":
      case "pending":
      case "safe":
        return { type: r, tag: r };
    }
  if (X(r, 32)) {
    const t = r.toLowerCase();
    return { type: "transaction", tag: ma("tx", { hash: t }), hash: t };
  }
  if (r.orphan) {
    const t = r;
    return { type: "orphan", tag: ma("orphan", t), filter: sw(t) };
  }
  if (r.address || r.topics) {
    const t = r, n = {
      topics: (t.topics || []).map((s) => s == null ? null : Array.isArray(s) ? kl(s.map((i) => i.toLowerCase())) : s.toLowerCase())
    };
    if (t.address) {
      const s = [], i = [], o = (a) => {
        X(a) ? s.push(a) : i.push((async () => {
          s.push(await Ue(a, e));
        })());
      };
      Array.isArray(t.address) ? t.address.forEach(o) : o(t.address), i.length && await Promise.all(i), n.address = kl(s.map((a) => a.toLowerCase()));
    }
    return { filter: n, tag: ma("event", n), type: "event" };
  }
  y(!1, "unknown ProviderEvent", "event", r);
}
function Qc() {
  return (/* @__PURE__ */ new Date()).getTime();
}
const iw = {
  cacheTimeout: 250,
  pollingInterval: 4e3
};
var Ne, Xn, Se, yi, Xe, Ur, er, An, So, at, wi, bi, Oe, Je, ko, xl, xo, Pl, Fr, zi, Po, Rl, Hr, Ji, Ai, ya;
class ow {
  /**
   *  Create a new **AbstractProvider** connected to %%network%%, or
   *  use the various network detection capabilities to discover the
   *  [[Network]] if necessary.
   */
  constructor(e, t) {
    // Shares multiple identical requests made during the same 250ms
    b(this, Oe);
    b(this, ko);
    b(this, xo);
    // Account
    b(this, Fr);
    b(this, Po);
    b(this, Hr);
    b(this, Ai);
    b(this, Ne, void 0);
    b(this, Xn, void 0);
    // null=unpaused, true=paused+dropWhilePaused, false=paused
    b(this, Se, void 0);
    b(this, yi, void 0);
    b(this, Xe, void 0);
    b(this, Ur, void 0);
    b(this, er, void 0);
    // The most recent block number if running an event or -1 if no "block" event
    b(this, An, void 0);
    b(this, So, void 0);
    b(this, at, void 0);
    b(this, wi, void 0);
    b(this, bi, void 0);
    if (p(this, bi, Object.assign({}, iw, t || {})), e === "any")
      p(this, Ur, !0), p(this, Xe, null);
    else if (e) {
      const n = kt.from(e);
      p(this, Ur, !1), p(this, Xe, Promise.resolve(n)), setTimeout(() => {
        this.emit("network", n, null);
      }, 0);
    } else
      p(this, Ur, !1), p(this, Xe, null);
    p(this, An, -1), p(this, er, /* @__PURE__ */ new Map()), p(this, Ne, /* @__PURE__ */ new Map()), p(this, Xn, /* @__PURE__ */ new Map()), p(this, Se, null), p(this, yi, !1), p(this, So, 1), p(this, at, /* @__PURE__ */ new Map()), p(this, wi, !1);
  }
  get pollingInterval() {
    return u(this, bi).pollingInterval;
  }
  /**
   *  Returns ``this``, to allow an **AbstractProvider** to implement
   *  the [[ContractRunner]] interface.
   */
  get provider() {
    return this;
  }
  /**
   *  Returns all the registered plug-ins.
   */
  get plugins() {
    return Array.from(u(this, Xn).values());
  }
  /**
   *  Attach a new plug-in.
   */
  attachPlugin(e) {
    if (u(this, Xn).get(e.name))
      throw new Error(`cannot replace existing plugin: ${e.name} `);
    return u(this, Xn).set(e.name, e.connect(this)), this;
  }
  /**
   *  Get a plugin by name.
   */
  getPlugin(e) {
    return u(this, Xn).get(e) || null;
  }
  /**
   *  Prevent any CCIP-read operation, regardless of whether requested
   *  in a [[call]] using ``enableCcipRead``.
   */
  get disableCcipRead() {
    return u(this, wi);
  }
  set disableCcipRead(e) {
    p(this, wi, !!e);
  }
  /**
   *  Resolves to the data for executing the CCIP-read operations.
   */
  async ccipReadFetch(e, t, n) {
    if (this.disableCcipRead || n.length === 0 || e.to == null)
      return null;
    const s = e.to.toLowerCase(), i = t.toLowerCase(), o = [];
    for (let a = 0; a < n.length; a++) {
      const c = n[a], l = c.replace("{sender}", s).replace("{data}", i), h = new Yt(l);
      c.indexOf("{data}") === -1 && (h.body = { data: i, sender: s }), this.emit("debug", { action: "sendCcipReadFetchRequest", request: h, index: a, urls: n });
      let d = "unknown error";
      const f = await h.send();
      try {
        const g = f.bodyJson;
        if (g.data)
          return this.emit("debug", { action: "receiveCcipReadFetchResult", request: h, result: g }), g.data;
        g.message && (d = g.message), this.emit("debug", { action: "receiveCcipReadFetchError", request: h, result: g });
      } catch {
      }
      v(f.statusCode < 400 || f.statusCode >= 500, `response not found during CCIP fetch: ${d}`, "OFFCHAIN_FAULT", { reason: "404_MISSING_RESOURCE", transaction: e, info: { url: c, errorMessage: d } }), o.push(d);
    }
    v(!1, `error encountered during CCIP fetch: ${o.map((a) => JSON.stringify(a)).join(", ")}`, "OFFCHAIN_FAULT", {
      reason: "500_SERVER_ERROR",
      transaction: e,
      info: { urls: n, errorMessages: o }
    });
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a block before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Block]].
   */
  _wrapBlock(e, t) {
    return new Ny(Vy(e), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a log before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Log]].
   */
  _wrapLog(e, t) {
    return new Uo(Ky(e), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  receipt before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionReceipt]].
   */
  _wrapTransactionReceipt(e, t) {
    return new Lf(Jy(e), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  response before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionResponse]].
   */
  _wrapTransactionResponse(e, t) {
    return new co(Jf(e), this);
  }
  /**
   *  Resolves to the Network, forcing a network detection using whatever
   *  technique the sub-class requires.
   *
   *  Sub-classes **must** override this.
   */
  _detectNetwork() {
    v(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
      operation: "_detectNetwork"
    });
  }
  /**
   *  Sub-classes should use this to perform all built-in operations. All
   *  methods sanitizes and normalizes the values passed into this.
   *
   *  Sub-classes **must** override this.
   */
  async _perform(e) {
    v(!1, `unsupported method: ${e.method}`, "UNSUPPORTED_OPERATION", {
      operation: e.method,
      info: e
    });
  }
  // State
  async getBlockNumber() {
    const e = H(await I(this, Oe, Je).call(this, { method: "getBlockNumber" }), "%response");
    return u(this, An) >= 0 && p(this, An, e), e;
  }
  /**
   *  Returns or resolves to the address for %%address%%, resolving ENS
   *  names and [[Addressable]] objects and returning if already an
   *  address.
   */
  _getAddress(e) {
    return Ue(e, this);
  }
  /**
   *  Returns or resolves to a valid block tag for %%blockTag%%, resolving
   *  negative values and returning if already a valid block tag.
   */
  _getBlockTag(e) {
    if (e == null)
      return "latest";
    switch (e) {
      case "earliest":
        return "0x0";
      case "finalized":
      case "latest":
      case "pending":
      case "safe":
        return e;
    }
    if (X(e))
      return X(e, 32) ? e : vs(e);
    if (typeof e == "bigint" && (e = H(e, "blockTag")), typeof e == "number")
      return e >= 0 ? vs(e) : u(this, An) >= 0 ? vs(u(this, An) + e) : this.getBlockNumber().then((t) => vs(t + e));
    y(!1, "invalid blockTag", "blockTag", e);
  }
  /**
   *  Returns or resolves to a filter for %%filter%%, resolving any ENS
   *  names or [[Addressable]] object and returning if already a valid
   *  filter.
   */
  _getFilter(e) {
    const t = (e.topics || []).map((c) => c == null ? null : Array.isArray(c) ? kl(c.map((l) => l.toLowerCase())) : c.toLowerCase()), n = "blockHash" in e ? e.blockHash : void 0, s = (c, l, h) => {
      let d;
      switch (c.length) {
        case 0:
          break;
        case 1:
          d = c[0];
          break;
        default:
          c.sort(), d = c;
      }
      if (n && (l != null || h != null))
        throw new Error("invalid filter");
      const f = {};
      return d && (f.address = d), t.length && (f.topics = t), l && (f.fromBlock = l), h && (f.toBlock = h), n && (f.blockHash = n), f;
    };
    let i = [];
    if (e.address)
      if (Array.isArray(e.address))
        for (const c of e.address)
          i.push(this._getAddress(c));
      else
        i.push(this._getAddress(e.address));
    let o;
    "fromBlock" in e && (o = this._getBlockTag(e.fromBlock));
    let a;
    return "toBlock" in e && (a = this._getBlockTag(e.toBlock)), i.filter((c) => typeof c != "string").length || o != null && typeof o != "string" || a != null && typeof a != "string" ? Promise.all([Promise.all(i), o, a]).then((c) => s(c[0], c[1], c[2])) : s(i, o, a);
  }
  /**
   *  Returns or resolves to a transaction for %%request%%, resolving
   *  any ENS names or [[Addressable]] and returning if already a valid
   *  transaction.
   */
  _getTransactionRequest(e) {
    const t = Ta(e), n = [];
    if (["to", "from"].forEach((s) => {
      if (t[s] == null)
        return;
      const i = Ue(t[s], this);
      ea(i) ? n.push(async function() {
        t[s] = await i;
      }()) : t[s] = i;
    }), t.blockTag != null) {
      const s = this._getBlockTag(t.blockTag);
      ea(s) ? n.push(async function() {
        t.blockTag = await s;
      }()) : t.blockTag = s;
    }
    return n.length ? async function() {
      return await Promise.all(n), t;
    }() : t;
  }
  async getNetwork() {
    if (u(this, Xe) == null) {
      const s = (async () => {
        try {
          const i = await this._detectNetwork();
          return this.emit("network", i, null), i;
        } catch (i) {
          throw u(this, Xe) === s && p(this, Xe, null), i;
        }
      })();
      return p(this, Xe, s), (await s).clone();
    }
    const e = u(this, Xe), [t, n] = await Promise.all([
      e,
      this._detectNetwork()
      // The actual connected network
    ]);
    return t.chainId !== n.chainId && (u(this, Ur) ? (this.emit("network", n, t), u(this, Xe) === e && p(this, Xe, Promise.resolve(n))) : v(!1, `network changed: ${t.chainId} => ${n.chainId} `, "NETWORK_ERROR", {
      event: "changed"
    })), t.clone();
  }
  async getFeeData() {
    const e = await this.getNetwork(), t = async () => {
      const { _block: s, gasPrice: i, priorityFee: o } = await _e({
        _block: I(this, Po, Rl).call(this, "latest", !1),
        gasPrice: (async () => {
          try {
            const h = await I(this, Oe, Je).call(this, { method: "getGasPrice" });
            return T(h, "%response");
          } catch {
          }
          return null;
        })(),
        priorityFee: (async () => {
          try {
            const h = await I(this, Oe, Je).call(this, { method: "getPriorityFee" });
            return T(h, "%response");
          } catch {
          }
          return null;
        })()
      });
      let a = null, c = null;
      const l = this._wrapBlock(s, e);
      return l && l.baseFeePerGas && (c = o ?? BigInt("1000000000"), a = l.baseFeePerGas * nw + c), new Ch(i, a, c);
    }, n = e.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    if (n) {
      const s = new Yt(n.url), i = await n.processFunc(t, this, s);
      return new Ch(i.gasPrice, i.maxFeePerGas, i.maxPriorityFeePerGas);
    }
    return await t();
  }
  async estimateGas(e) {
    let t = this._getTransactionRequest(e);
    return ea(t) && (t = await t), T(await I(this, Oe, Je).call(this, {
      method: "estimateGas",
      transaction: t
    }), "%response");
  }
  async call(e) {
    const { tx: t, blockTag: n } = await _e({
      tx: this._getTransactionRequest(e),
      blockTag: this._getBlockTag(e.blockTag)
    });
    return await I(this, xo, Pl).call(this, I(this, ko, xl).call(this, t, n, e.enableCcipRead ? 0 : -1));
  }
  async getBalance(e, t) {
    return T(await I(this, Fr, zi).call(this, { method: "getBalance" }, e, t), "%response");
  }
  async getTransactionCount(e, t) {
    return H(await I(this, Fr, zi).call(this, { method: "getTransactionCount" }, e, t), "%response");
  }
  async getCode(e, t) {
    return O(await I(this, Fr, zi).call(this, { method: "getCode" }, e, t));
  }
  async getStorage(e, t, n) {
    const s = T(t, "position");
    return O(await I(this, Fr, zi).call(this, { method: "getStorage", position: s }, e, n));
  }
  // Write
  async broadcastTransaction(e) {
    const { blockNumber: t, hash: n, network: s } = await _e({
      blockNumber: this.getBlockNumber(),
      hash: this._perform({
        method: "broadcastTransaction",
        signedTransaction: e
      }),
      network: this.getNetwork()
    }), i = Ra.from(e);
    if (i.hash !== n)
      throw new Error("@TODO: the returned hash did not match");
    return this._wrapTransactionResponse(i, s).replaceableTransaction(t);
  }
  // Queries
  async getBlock(e, t) {
    const { network: n, params: s } = await _e({
      network: this.getNetwork(),
      params: I(this, Po, Rl).call(this, e, !!t)
    });
    return s == null ? null : this._wrapBlock(s, n);
  }
  async getTransaction(e) {
    const { network: t, params: n } = await _e({
      network: this.getNetwork(),
      params: I(this, Oe, Je).call(this, { method: "getTransaction", hash: e })
    });
    return n == null ? null : this._wrapTransactionResponse(n, t);
  }
  async getTransactionReceipt(e) {
    const { network: t, params: n } = await _e({
      network: this.getNetwork(),
      params: I(this, Oe, Je).call(this, { method: "getTransactionReceipt", hash: e })
    });
    if (n == null)
      return null;
    if (n.gasPrice == null && n.effectiveGasPrice == null) {
      const s = await I(this, Oe, Je).call(this, { method: "getTransaction", hash: e });
      if (s == null)
        throw new Error("report this; could not find tx or effectiveGasPrice");
      n.effectiveGasPrice = s.gasPrice;
    }
    return this._wrapTransactionReceipt(n, t);
  }
  async getTransactionResult(e) {
    const { result: t } = await _e({
      network: this.getNetwork(),
      result: I(this, Oe, Je).call(this, { method: "getTransactionResult", hash: e })
    });
    return t == null ? null : O(t);
  }
  // Bloom-filter Queries
  async getLogs(e) {
    let t = this._getFilter(e);
    ea(t) && (t = await t);
    const { network: n, params: s } = await _e({
      network: this.getNetwork(),
      params: I(this, Oe, Je).call(this, { method: "getLogs", filter: t })
    });
    return s.map((i) => this._wrapLog(i, n));
  }
  // ENS
  _getProvider(e) {
    v(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
      operation: "_getProvider()"
    });
  }
  async getResolver(e) {
    return await Ba.fromName(this, e);
  }
  async getAvatar(e) {
    const t = await this.getResolver(e);
    return t ? await t.getAvatar() : null;
  }
  async resolveName(e) {
    const t = await this.getResolver(e);
    return t ? await t.getAddress() : null;
  }
  async lookupAddress(e) {
    e = $(e);
    const t = Al(e.substring(2).toLowerCase() + ".addr.reverse");
    try {
      const n = await Ba.getEnsAddress(this), i = await new _s(n, [
        "function resolver(bytes32) view returns (address)"
      ], this).resolver(t);
      if (i == null || i === eo)
        return null;
      const a = await new _s(i, [
        "function name(bytes32) view returns (string)"
      ], this).name(t);
      return await this.resolveName(a) !== e ? null : a;
    } catch (n) {
      if (xe(n, "BAD_DATA") && n.value === "0x" || xe(n, "CALL_EXCEPTION"))
        return null;
      throw n;
    }
    return null;
  }
  async waitForTransaction(e, t, n) {
    const s = t ?? 1;
    return s === 0 ? this.getTransactionReceipt(e) : new Promise(async (i, o) => {
      let a = null;
      const c = async (l) => {
        try {
          const h = await this.getTransactionReceipt(e);
          if (h != null && l - h.blockNumber + 1 >= s) {
            i(h), a && (clearTimeout(a), a = null);
            return;
          }
        } catch (h) {
          console.log("EEE", h);
        }
        this.once("block", c);
      };
      n != null && (a = setTimeout(() => {
        a != null && (a = null, this.off("block", c), o(re("timeout", "TIMEOUT", { reason: "timeout" })));
      }, n)), c(await this.getBlockNumber());
    });
  }
  async waitForBlock(e) {
    v(!1, "not implemented yet", "NOT_IMPLEMENTED", {
      operation: "waitForBlock"
    });
  }
  /**
   *  Clear a timer created using the [[_setTimeout]] method.
   */
  _clearTimeout(e) {
    const t = u(this, at).get(e);
    t && (t.timer && clearTimeout(t.timer), u(this, at).delete(e));
  }
  /**
   *  Create a timer that will execute %%func%% after at least %%timeout%%
   *  (in ms). If %%timeout%% is unspecified, then %%func%% will execute
   *  in the next event loop.
   *
   *  [Pausing](AbstractProvider-paused) the provider will pause any
   *  associated timers.
   */
  _setTimeout(e, t) {
    t == null && (t = 0);
    const n = Fi(this, So)._++, s = () => {
      u(this, at).delete(n), e();
    };
    if (this.paused)
      u(this, at).set(n, { timer: null, func: s, time: t });
    else {
      const i = setTimeout(s, t);
      u(this, at).set(n, { timer: i, func: s, time: Qc() });
    }
    return n;
  }
  /**
   *  Perform %%func%% on each subscriber.
   */
  _forEachSubscriber(e) {
    for (const t of u(this, Ne).values())
      e(t.subscriber);
  }
  /**
   *  Sub-classes may override this to customize subscription
   *  implementations.
   */
  _getSubscriber(e) {
    switch (e.type) {
      case "debug":
      case "error":
      case "network":
        return new La(e.type);
      case "block": {
        const t = new Yy(this);
        return t.pollingInterval = this.pollingInterval, t;
      }
      case "safe":
      case "finalized":
        return new Xy(this, e.type);
      case "event":
        return new su(this, e.filter);
      case "transaction":
        return new tw(this, e.hash);
      case "orphan":
        return new ew(this, e.filter);
    }
    throw new Error(`unsupported event: ${e.type}`);
  }
  /**
   *  If a [[Subscriber]] fails and needs to replace itself, this
   *  method may be used.
   *
   *  For example, this is used for providers when using the
   *  ``eth_getFilterChanges`` method, which can return null if state
   *  filters are not supported by the backend, allowing the Subscriber
   *  to swap in a [[PollingEventSubscriber]].
   */
  _recoverSubscriber(e, t) {
    for (const n of u(this, Ne).values())
      if (n.subscriber === e) {
        n.started && n.subscriber.stop(), n.subscriber = t, n.started && t.start(), u(this, Se) != null && t.pause(u(this, Se));
        break;
      }
  }
  async on(e, t) {
    const n = await I(this, Ai, ya).call(this, e);
    return n.listeners.push({ listener: t, once: !1 }), n.started || (n.subscriber.start(), n.started = !0, u(this, Se) != null && n.subscriber.pause(u(this, Se))), this;
  }
  async once(e, t) {
    const n = await I(this, Ai, ya).call(this, e);
    return n.listeners.push({ listener: t, once: !0 }), n.started || (n.subscriber.start(), n.started = !0, u(this, Se) != null && n.subscriber.pause(u(this, Se))), this;
  }
  async emit(e, ...t) {
    const n = await I(this, Hr, Ji).call(this, e, t);
    if (!n || n.listeners.length === 0)
      return !1;
    const s = n.listeners.length;
    return n.listeners = n.listeners.filter(({ listener: i, once: o }) => {
      const a = new ld(this, o ? null : i, e);
      try {
        i.call(this, ...t, a);
      } catch {
      }
      return !o;
    }), n.listeners.length === 0 && (n.started && n.subscriber.stop(), u(this, Ne).delete(n.tag)), s > 0;
  }
  async listenerCount(e) {
    if (e) {
      const n = await I(this, Hr, Ji).call(this, e);
      return n ? n.listeners.length : 0;
    }
    let t = 0;
    for (const { listeners: n } of u(this, Ne).values())
      t += n.length;
    return t;
  }
  async listeners(e) {
    if (e) {
      const n = await I(this, Hr, Ji).call(this, e);
      return n ? n.listeners.map(({ listener: s }) => s) : [];
    }
    let t = [];
    for (const { listeners: n } of u(this, Ne).values())
      t = t.concat(n.map(({ listener: s }) => s));
    return t;
  }
  async off(e, t) {
    const n = await I(this, Hr, Ji).call(this, e);
    if (!n)
      return this;
    if (t) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(t);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (!t || n.listeners.length === 0) && (n.started && n.subscriber.stop(), u(this, Ne).delete(n.tag)), this;
  }
  async removeAllListeners(e) {
    if (e) {
      const { tag: t, started: n, subscriber: s } = await I(this, Ai, ya).call(this, e);
      n && s.stop(), u(this, Ne).delete(t);
    } else
      for (const [t, { started: n, subscriber: s }] of u(this, Ne))
        n && s.stop(), u(this, Ne).delete(t);
    return this;
  }
  // Alias for "on"
  async addListener(e, t) {
    return await this.on(e, t);
  }
  // Alias for "off"
  async removeListener(e, t) {
    return this.off(e, t);
  }
  /**
   *  If this provider has been destroyed using the [[destroy]] method.
   *
   *  Once destroyed, all resources are reclaimed, internal event loops
   *  and timers are cleaned up and no further requests may be sent to
   *  the provider.
   */
  get destroyed() {
    return u(this, yi);
  }
  /**
   *  Sub-classes may use this to shutdown any sockets or release their
   *  resources and reject any pending requests.
   *
   *  Sub-classes **must** call ``super.destroy()``.
   */
  destroy() {
    this.removeAllListeners();
    for (const e of u(this, at).keys())
      this._clearTimeout(e);
    p(this, yi, !0);
  }
  /**
   *  Whether the provider is currently paused.
   *
   *  A paused provider will not emit any events, and generally should
   *  not make any requests to the network, but that is up to sub-classes
   *  to manage.
   *
   *  Setting ``paused = true`` is identical to calling ``.pause(false)``,
   *  which will buffer any events that occur while paused until the
   *  provider is unpaused.
   */
  get paused() {
    return u(this, Se) != null;
  }
  set paused(e) {
    !!e !== this.paused && (this.paused ? this.resume() : this.pause(!1));
  }
  /**
   *  Pause the provider. If %%dropWhilePaused%%, any events that occur
   *  while paused are dropped, otherwise all events will be emitted once
   *  the provider is unpaused.
   */
  pause(e) {
    if (p(this, An, -1), u(this, Se) != null) {
      if (u(this, Se) == !!e)
        return;
      v(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
        operation: "pause"
      });
    }
    this._forEachSubscriber((t) => t.pause(e)), p(this, Se, !!e);
    for (const t of u(this, at).values())
      t.timer && clearTimeout(t.timer), t.time = Qc() - t.time;
  }
  /**
   *  Resume the provider.
   */
  resume() {
    if (u(this, Se) != null) {
      this._forEachSubscriber((e) => e.resume()), p(this, Se, null);
      for (const e of u(this, at).values()) {
        let t = e.time;
        t < 0 && (t = 0), e.time = Qc(), setTimeout(e.func, t);
      }
    }
  }
}
Ne = new WeakMap(), Xn = new WeakMap(), Se = new WeakMap(), yi = new WeakMap(), Xe = new WeakMap(), Ur = new WeakMap(), er = new WeakMap(), An = new WeakMap(), So = new WeakMap(), at = new WeakMap(), wi = new WeakMap(), bi = new WeakMap(), Oe = new WeakSet(), Je = async function(e) {
  const t = u(this, bi).cacheTimeout;
  if (t < 0)
    return await this._perform(e);
  const n = ma(e.method, e);
  let s = u(this, er).get(n);
  return s || (s = this._perform(e), u(this, er).set(n, s), setTimeout(() => {
    u(this, er).get(n) === s && u(this, er).delete(n);
  }, t)), await s;
}, ko = new WeakSet(), xl = async function(e, t, n) {
  v(n < rw, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
    reason: "TOO_MANY_REDIRECTS",
    transaction: Object.assign({}, e, { blockTag: t, enableCcipRead: !0 })
  });
  const s = Ta(e);
  try {
    return O(await this._perform({ method: "call", transaction: s, blockTag: t }));
  } catch (i) {
    if (!this.disableCcipRead && Dl(i) && i.data && n >= 0 && t === "latest" && s.to != null && ie(i.data, 0, 4) === "0x556f1830") {
      const o = i.data, a = await Ue(s.to, this);
      let c;
      try {
        c = hw(ie(i.data, 4));
      } catch (d) {
        v(!1, d.message, "OFFCHAIN_FAULT", {
          reason: "BAD_DATA",
          transaction: s,
          info: { data: o }
        });
      }
      v(c.sender.toLowerCase() === a.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
        action: "call",
        data: o,
        reason: "OffchainLookup",
        transaction: s,
        invocation: null,
        revert: {
          signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
          name: "OffchainLookup",
          args: c.errorArgs
        }
      });
      const l = await this.ccipReadFetch(s, c.calldata, c.urls);
      v(l != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
        reason: "FETCH_FAILED",
        transaction: s,
        info: { data: i.data, errorArgs: c.errorArgs }
      });
      const h = {
        to: a,
        data: ue([c.selector, uw([l, c.extraData])])
      };
      this.emit("debug", { action: "sendCcipReadCall", transaction: h });
      try {
        const d = await I(this, ko, xl).call(this, h, t, n + 1);
        return this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, h), result: d }), d;
      } catch (d) {
        throw this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, h), error: d }), d;
      }
    }
    throw i;
  }
}, xo = new WeakSet(), Pl = async function(e) {
  const { value: t } = await _e({
    network: this.getNetwork(),
    value: e
  });
  return t;
}, Fr = new WeakSet(), zi = async function(e, t, n) {
  let s = this._getAddress(t), i = this._getBlockTag(n);
  return (typeof s != "string" || typeof i != "string") && ([s, i] = await Promise.all([s, i])), await I(this, xo, Pl).call(this, I(this, Oe, Je).call(this, Object.assign(e, { address: s, blockTag: i })));
}, Po = new WeakSet(), Rl = async function(e, t) {
  if (X(e, 32))
    return await I(this, Oe, Je).call(this, {
      method: "getBlock",
      blockHash: e,
      includeTransactions: t
    });
  let n = this._getBlockTag(e);
  return typeof n != "string" && (n = await n), await I(this, Oe, Je).call(this, {
    method: "getBlock",
    blockTag: n,
    includeTransactions: t
  });
}, Hr = new WeakSet(), Ji = async function(e, t) {
  let n = await Wc(e, this);
  return n.type === "event" && t && t.length > 0 && t[0].removed === !0 && (n = await Wc({ orphan: "drop-log", log: t[0] }, this)), u(this, Ne).get(n.tag) || null;
}, Ai = new WeakSet(), ya = async function(e) {
  const t = await Wc(e, this), n = t.tag;
  let s = u(this, Ne).get(n);
  return s || (s = { subscriber: this._getSubscriber(t), tag: n, addressableMap: /* @__PURE__ */ new WeakMap(), nameMap: /* @__PURE__ */ new Map(), started: !1, listeners: [] }, u(this, Ne).set(n, s)), s;
};
function aw(r, e) {
  try {
    const t = Ol(r, e);
    if (t)
      return Ca(t);
  } catch {
  }
  return null;
}
function Ol(r, e) {
  if (r === "0x")
    return null;
  try {
    const t = H(ie(r, e, e + 32)), n = H(ie(r, t, t + 32));
    return ie(r, t + 32, t + 32 + n);
  } catch {
  }
  return null;
}
function Rh(r) {
  const e = Me(r);
  if (e.length > 32)
    throw new Error("internal; should not happen");
  const t = new Uint8Array(32);
  return t.set(e, 32 - e.length), t;
}
function cw(r) {
  if (r.length % 32 === 0)
    return r;
  const e = new Uint8Array(Math.ceil(r.length / 32) * 32);
  return e.set(r), e;
}
const lw = new Uint8Array([]);
function uw(r) {
  const e = [];
  let t = 0;
  for (let n = 0; n < r.length; n++)
    e.push(lw), t += 32;
  for (let n = 0; n < r.length; n++) {
    const s = W(r[n]);
    e[n] = Rh(t), e.push(Rh(s.length)), e.push(cw(s)), t += 32 + Math.ceil(s.length / 32) * 32;
  }
  return ue(e);
}
const Oh = "0x0000000000000000000000000000000000000000000000000000000000000000";
function hw(r) {
  const e = {
    sender: "",
    urls: [],
    calldata: "",
    selector: "",
    extraData: "",
    errorArgs: []
  };
  v(Ps(r) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
    reason: "insufficient OffchainLookup data"
  });
  const t = ie(r, 0, 32);
  v(ie(t, 0, 12) === ie(Oh, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup sender"
  }), e.sender = ie(t, 12);
  try {
    const n = [], s = H(ie(r, 32, 64)), i = H(ie(r, s, s + 32)), o = ie(r, s + 32);
    for (let a = 0; a < i; a++) {
      const c = aw(o, a * 32);
      if (c == null)
        throw new Error("abort");
      n.push(c);
    }
    e.urls = n;
  } catch {
    v(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup urls"
    });
  }
  try {
    const n = Ol(r, 64);
    if (n == null)
      throw new Error("abort");
    e.calldata = n;
  } catch {
    v(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup calldata"
    });
  }
  v(ie(r, 100, 128) === ie(Oh, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup callbaackSelector"
  }), e.selector = ie(r, 96, 100);
  try {
    const n = Ol(r, 128);
    if (n == null)
      throw new Error("abort");
    e.extraData = n;
  } catch {
    v(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup extraData"
    });
  }
  return e.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((n) => e[n]), e;
}
function ds(r, e) {
  if (r.provider)
    return r.provider;
  v(!1, "missing provider", "UNSUPPORTED_OPERATION", { operation: e });
}
async function Th(r, e) {
  let t = Ta(e);
  if (t.to != null && (t.to = Ue(t.to, r)), t.from != null) {
    const n = t.from;
    t.from = Promise.all([
      r.getAddress(),
      Ue(n, r)
    ]).then(([s, i]) => (y(s.toLowerCase() === i.toLowerCase(), "transaction from mismatch", "tx.from", i), s));
  } else
    t.from = r.getAddress();
  return await _e(t);
}
class dw {
  /**
   *  Creates a new Signer connected to %%provider%%.
   */
  constructor(e) {
    /**
     *  The provider this signer is connected to.
     */
    A(this, "provider");
    U(this, { provider: e || null });
  }
  async getNonce(e) {
    return ds(this, "getTransactionCount").getTransactionCount(await this.getAddress(), e);
  }
  async populateCall(e) {
    return await Th(this, e);
  }
  async populateTransaction(e) {
    const t = ds(this, "populateTransaction"), n = await Th(this, e);
    n.nonce == null && (n.nonce = await this.getNonce("pending")), n.gasLimit == null && (n.gasLimit = await this.estimateGas(n));
    const s = await this.provider.getNetwork();
    if (n.chainId != null) {
      const o = T(n.chainId);
      y(o === s.chainId, "transaction chainId mismatch", "tx.chainId", e.chainId);
    } else
      n.chainId = s.chainId;
    const i = n.maxFeePerGas != null || n.maxPriorityFeePerGas != null;
    if (n.gasPrice != null && (n.type === 2 || i) ? y(!1, "eip-1559 transaction do not support gasPrice", "tx", e) : (n.type === 0 || n.type === 1) && i && y(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", e), (n.type === 2 || n.type == null) && n.maxFeePerGas != null && n.maxPriorityFeePerGas != null)
      n.type = 2;
    else if (n.type === 0 || n.type === 1) {
      const o = await t.getFeeData();
      v(o.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
        operation: "getGasPrice"
      }), n.gasPrice == null && (n.gasPrice = o.gasPrice);
    } else {
      const o = await t.getFeeData();
      if (n.type == null)
        if (o.maxFeePerGas != null && o.maxPriorityFeePerGas != null)
          if (n.type = 2, n.gasPrice != null) {
            const a = n.gasPrice;
            delete n.gasPrice, n.maxFeePerGas = a, n.maxPriorityFeePerGas = a;
          } else
            n.maxFeePerGas == null && (n.maxFeePerGas = o.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = o.maxPriorityFeePerGas);
        else
          o.gasPrice != null ? (v(!i, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
            operation: "populateTransaction"
          }), n.gasPrice == null && (n.gasPrice = o.gasPrice), n.type = 0) : v(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
            operation: "signer.getFeeData"
          });
      else
        (n.type === 2 || n.type === 3) && (n.maxFeePerGas == null && (n.maxFeePerGas = o.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = o.maxPriorityFeePerGas));
    }
    return await _e(n);
  }
  async estimateGas(e) {
    return ds(this, "estimateGas").estimateGas(await this.populateCall(e));
  }
  async call(e) {
    return ds(this, "call").call(await this.populateCall(e));
  }
  async resolveName(e) {
    return await ds(this, "resolveName").resolveName(e);
  }
  async sendTransaction(e) {
    const t = ds(this, "sendTransaction"), n = await this.populateTransaction(e);
    delete n.from;
    const s = Ra.from(n);
    return await t.broadcastTransaction(await this.signTransaction(s));
  }
}
const _h = /* @__PURE__ */ new Set();
function fw(r) {
  _h.has(r) || (_h.add(r), console.log("========= NOTICE ========="), console.log(`Request-Rate Exceeded for ${r} (this message will not be repeated)`), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.org/api-keys/"), console.log("=========================="));
}
function pw(r) {
  return JSON.parse(JSON.stringify(r));
}
var Te, jt, Gr, tr, Kr, Ei, Ro, Tl, Oo, _l;
class Zf {
  /**
   *  Creates a new **FilterIdSubscriber** which will used [[_subscribe]]
   *  and [[_emitResults]] to setup the subscription and provide the event
   *  to the %%provider%%.
   */
  constructor(e) {
    b(this, Ro);
    b(this, Oo);
    b(this, Te, void 0);
    b(this, jt, void 0);
    b(this, Gr, void 0);
    b(this, tr, void 0);
    b(this, Kr, void 0);
    b(this, Ei, void 0);
    p(this, Te, e), p(this, jt, null), p(this, Gr, I(this, Ro, Tl).bind(this)), p(this, tr, !1), p(this, Kr, null), p(this, Ei, !1);
  }
  /**
   *  Sub-classes **must** override this to begin the subscription.
   */
  _subscribe(e) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle the events.
   */
  _emitResults(e, t) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle recovery on errors.
   */
  _recover(e) {
    throw new Error("subclasses must override this");
  }
  start() {
    u(this, tr) || (p(this, tr, !0), I(this, Ro, Tl).call(this, -2));
  }
  stop() {
    u(this, tr) && (p(this, tr, !1), p(this, Ei, !0), I(this, Oo, _l).call(this), u(this, Te).off("block", u(this, Gr)));
  }
  pause(e) {
    e && I(this, Oo, _l).call(this), u(this, Te).off("block", u(this, Gr));
  }
  resume() {
    this.start();
  }
}
Te = new WeakMap(), jt = new WeakMap(), Gr = new WeakMap(), tr = new WeakMap(), Kr = new WeakMap(), Ei = new WeakMap(), Ro = new WeakSet(), Tl = async function(e) {
  try {
    u(this, jt) == null && p(this, jt, this._subscribe(u(this, Te)));
    let t = null;
    try {
      t = await u(this, jt);
    } catch (i) {
      if (!xe(i, "UNSUPPORTED_OPERATION") || i.operation !== "eth_newFilter")
        throw i;
    }
    if (t == null) {
      p(this, jt, null), u(this, Te)._recoverSubscriber(this, this._recover(u(this, Te)));
      return;
    }
    const n = await u(this, Te).getNetwork();
    if (u(this, Kr) || p(this, Kr, n), u(this, Kr).chainId !== n.chainId)
      throw new Error("chaid changed");
    if (u(this, Ei))
      return;
    const s = await u(this, Te).send("eth_getFilterChanges", [t]);
    await this._emitResults(u(this, Te), s);
  } catch (t) {
    console.log("@TODO", t);
  }
  u(this, Te).once("block", u(this, Gr));
}, Oo = new WeakSet(), _l = function() {
  const e = u(this, jt);
  e && (p(this, jt, null), e.then((t) => {
    u(this, Te).destroyed || u(this, Te).send("eth_uninstallFilter", [t]);
  }));
};
var jr;
class gw extends Zf {
  /**
   *  Creates a new **FilterIdEventSubscriber** attached to %%provider%%
   *  listening for %%filter%%.
   */
  constructor(t, n) {
    super(t);
    b(this, jr, void 0);
    p(this, jr, pw(n));
  }
  _recover(t) {
    return new su(t, u(this, jr));
  }
  async _subscribe(t) {
    return await t.send("eth_newFilter", [u(this, jr)]);
  }
  async _emitResults(t, n) {
    for (const s of n)
      t.emit(u(this, jr), t._wrapLog(s, t._network));
  }
}
jr = new WeakMap();
class mw extends Zf {
  async _subscribe(e) {
    return await e.send("eth_newPendingTransactionFilter", []);
  }
  async _emitResults(e, t) {
    for (const n of t)
      e.emit("pending", n);
  }
}
const yw = "bigint,boolean,function,number,string,symbol".split(/,/g);
function wa(r) {
  if (r == null || yw.indexOf(typeof r) >= 0 || typeof r.getAddress == "function")
    return r;
  if (Array.isArray(r))
    return r.map(wa);
  if (typeof r == "object")
    return Object.keys(r).reduce((e, t) => (e[t] = r[t], e), {});
  throw new Error(`should not happen: ${r} (${typeof r})`);
}
function ww(r) {
  return new Promise((e) => {
    setTimeout(e, r);
  });
}
function fs(r) {
  return r && r.toLowerCase();
}
function Bh(r) {
  return r && typeof r.pollingInterval == "number";
}
const $f = {
  polling: !1,
  staticNetwork: null,
  batchStallTime: 10,
  batchMaxSize: 1 << 20,
  batchMaxCount: 100,
  cacheTimeout: 250,
  pollingInterval: 4e3
};
class Bs extends dw {
  constructor(t, n) {
    super(t);
    A(this, "address");
    n = $(n), U(this, { address: n });
  }
  connect(t) {
    v(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
      operation: "signer.connect"
    });
  }
  async getAddress() {
    return this.address;
  }
  // JSON-RPC will automatially fill in nonce, etc. so we just check from
  async populateTransaction(t) {
    return await this.populateCall(t);
  }
  // Returns just the hash of the transaction after sent, which is what
  // the bare JSON-RPC API does;
  async sendUncheckedTransaction(t) {
    const n = wa(t), s = [];
    if (n.from) {
      const o = n.from;
      s.push((async () => {
        const a = await Ue(o, this.provider);
        y(a != null && a.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), n.from = a;
      })());
    } else
      n.from = this.address;
    if (n.gasLimit == null && s.push((async () => {
      n.gasLimit = await this.provider.estimateGas({ ...n, from: this.address });
    })()), n.to != null) {
      const o = n.to;
      s.push((async () => {
        n.to = await Ue(o, this.provider);
      })());
    }
    s.length && await Promise.all(s);
    const i = this.provider.getRpcTransaction(n);
    return this.provider.send("eth_sendTransaction", [i]);
  }
  async sendTransaction(t) {
    const n = await this.provider.getBlockNumber(), s = await this.sendUncheckedTransaction(t);
    return await new Promise((i, o) => {
      const a = [1e3, 100];
      let c = 0;
      const l = async () => {
        try {
          const h = await this.provider.getTransaction(s);
          if (h != null) {
            i(h.replaceableTransaction(n));
            return;
          }
        } catch (h) {
          if (xe(h, "CANCELLED") || xe(h, "BAD_DATA") || xe(h, "NETWORK_ERROR")) {
            h.info == null && (h.info = {}), h.info.sendTransactionHash = s, o(h);
            return;
          }
          if (xe(h, "INVALID_ARGUMENT") && (c++, h.info == null && (h.info = {}), h.info.sendTransactionHash = s, c > 10)) {
            o(h);
            return;
          }
          this.provider.emit("error", re("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", { error: h }));
        }
        this.provider._setTimeout(() => {
          l();
        }, a.pop() || 4e3);
      };
      l();
    });
  }
  async signTransaction(t) {
    const n = wa(t);
    if (n.from) {
      const i = await Ue(n.from, this.provider);
      y(i != null && i.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), n.from = i;
    } else
      n.from = this.address;
    const s = this.provider.getRpcTransaction(n);
    return await this.provider.send("eth_signTransaction", [s]);
  }
  async signMessage(t) {
    const n = typeof t == "string" ? qt(t) : t;
    return await this.provider.send("personal_sign", [
      O(n),
      this.address.toLowerCase()
    ]);
  }
  async signTypedData(t, n, s) {
    const i = wa(s), o = await Oa.resolveNames(t, n, i, async (a) => {
      const c = await Ue(a);
      return y(c != null, "TypedData does not support null address", "value", a), c;
    });
    return await this.provider.send("eth_signTypedData_v4", [
      this.address.toLowerCase(),
      JSON.stringify(Oa.getPayload(o.domain, n, o.value))
    ]);
  }
  async unlock(t) {
    return this.provider.send("personal_unlockAccount", [
      this.address.toLowerCase(),
      t,
      null
    ]);
  }
  // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
  async _legacySignMessage(t) {
    const n = typeof t == "string" ? qt(t) : t;
    return await this.provider.send("eth_sign", [
      this.address.toLowerCase(),
      O(n)
    ]);
  }
}
var Vr, Ci, En, Vt, It, ct, Ke, To, Bl;
class Yf extends ow {
  constructor(t, n) {
    super(t, n);
    b(this, To);
    b(this, Vr, void 0);
    // The next ID to use for the JSON-RPC ID field
    b(this, Ci, void 0);
    // Payloads are queued and triggered in batches using the drainTimer
    b(this, En, void 0);
    b(this, Vt, void 0);
    b(this, It, void 0);
    b(this, ct, void 0);
    b(this, Ke, void 0);
    p(this, Ci, 1), p(this, Vr, Object.assign({}, $f, n || {})), p(this, En, []), p(this, Vt, null), p(this, ct, null), p(this, Ke, null);
    {
      let i = null;
      const o = new Promise((a) => {
        i = a;
      });
      p(this, It, { promise: o, resolve: i });
    }
    const s = this._getOption("staticNetwork");
    typeof s == "boolean" ? (y(!s || t !== "any", "staticNetwork cannot be used on special network 'any'", "options", n), s && t != null && p(this, ct, kt.from(t))) : s && (y(t == null || s.matches(t), "staticNetwork MUST match network object", "options", n), p(this, ct, s));
  }
  /**
   *  Returns the value associated with the option %%key%%.
   *
   *  Sub-classes can use this to inquire about configuration options.
   */
  _getOption(t) {
    return u(this, Vr)[t];
  }
  /**
   *  Gets the [[Network]] this provider has committed to. On each call, the network
   *  is detected, and if it has changed, the call will reject.
   */
  get _network() {
    return v(u(this, ct), "network is not available yet", "NETWORK_ERROR"), u(this, ct);
  }
  /**
   *  Resolves to the non-normalized value by performing %%req%%.
   *
   *  Sub-classes may override this to modify behavior of actions,
   *  and should generally call ``super._perform`` as a fallback.
   */
  async _perform(t) {
    if (t.method === "call" || t.method === "estimateGas") {
      let s = t.transaction;
      if (s && s.type != null && T(s.type) && s.maxFeePerGas == null && s.maxPriorityFeePerGas == null) {
        const i = await this.getFeeData();
        i.maxFeePerGas == null && i.maxPriorityFeePerGas == null && (t = Object.assign({}, t, {
          transaction: Object.assign({}, s, { type: void 0 })
        }));
      }
    }
    const n = this.getRpcRequest(t);
    return n != null ? await this.send(n.method, n.args) : super._perform(t);
  }
  /**
   *  Sub-classes may override this; it detects the *actual* network that
   *  we are **currently** connected to.
   *
   *  Keep in mind that [[send]] may only be used once [[ready]], otherwise the
   *  _send primitive must be used instead.
   */
  async _detectNetwork() {
    const t = this._getOption("staticNetwork");
    if (t)
      if (t === !0) {
        if (u(this, ct))
          return u(this, ct);
      } else
        return t;
    return u(this, Ke) ? await u(this, Ke) : this.ready ? (p(this, Ke, (async () => {
      try {
        const n = kt.from(T(await this.send("eth_chainId", [])));
        return p(this, Ke, null), n;
      } catch (n) {
        throw p(this, Ke, null), n;
      }
    })()), await u(this, Ke)) : (p(this, Ke, (async () => {
      const n = {
        id: Fi(this, Ci)._++,
        method: "eth_chainId",
        params: [],
        jsonrpc: "2.0"
      };
      this.emit("debug", { action: "sendRpcPayload", payload: n });
      let s;
      try {
        s = (await this._send(n))[0], p(this, Ke, null);
      } catch (i) {
        throw p(this, Ke, null), this.emit("debug", { action: "receiveRpcError", error: i }), i;
      }
      if (this.emit("debug", { action: "receiveRpcResult", result: s }), "result" in s)
        return kt.from(T(s.result));
      throw this.getRpcError(n, s);
    })()), await u(this, Ke));
  }
  /**
   *  Sub-classes **MUST** call this. Until [[_start]] has been called, no calls
   *  will be passed to [[_send]] from [[send]]. If it is overridden, then
   *  ``super._start()`` **MUST** be called.
   *
   *  Calling it multiple times is safe and has no effect.
   */
  _start() {
    u(this, It) == null || u(this, It).resolve == null || (u(this, It).resolve(), p(this, It, null), (async () => {
      for (; u(this, ct) == null && !this.destroyed; )
        try {
          p(this, ct, await this._detectNetwork());
        } catch (t) {
          if (this.destroyed)
            break;
          console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", re("failed to bootstrap network detection", "NETWORK_ERROR", { event: "initial-network-discovery", info: { error: t } })), await ww(1e3);
        }
      I(this, To, Bl).call(this);
    })());
  }
  /**
   *  Resolves once the [[_start]] has been called. This can be used in
   *  sub-classes to defer sending data until the connection has been
   *  established.
   */
  async _waitUntilReady() {
    if (u(this, It) != null)
      return await u(this, It).promise;
  }
  /**
   *  Return a Subscriber that will manage the %%sub%%.
   *
   *  Sub-classes may override this to modify the behavior of
   *  subscription management.
   */
  _getSubscriber(t) {
    return t.type === "pending" ? new mw(this) : t.type === "event" ? this._getOption("polling") ? new su(this, t.filter) : new gw(this, t.filter) : t.type === "orphan" && t.filter.orphan === "drop-log" ? new La("orphan") : super._getSubscriber(t);
  }
  /**
   *  Returns true only if the [[_start]] has been called.
   */
  get ready() {
    return u(this, It) == null;
  }
  /**
   *  Returns %%tx%% as a normalized JSON-RPC transaction request,
   *  which has all values hexlified and any numeric values converted
   *  to Quantity values.
   */
  getRpcTransaction(t) {
    const n = {};
    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((s) => {
      if (t[s] == null)
        return;
      let i = s;
      s === "gasLimit" && (i = "gas"), n[i] = vs(T(t[s], `tx.${s}`));
    }), ["from", "to", "data"].forEach((s) => {
      t[s] != null && (n[s] = O(t[s]));
    }), t.accessList && (n.accessList = rs(t.accessList)), t.blobVersionedHashes && (n.blobVersionedHashes = t.blobVersionedHashes.map((s) => s.toLowerCase())), n;
  }
  /**
   *  Returns the request method and arguments required to perform
   *  %%req%%.
   */
  getRpcRequest(t) {
    switch (t.method) {
      case "chainId":
        return { method: "eth_chainId", args: [] };
      case "getBlockNumber":
        return { method: "eth_blockNumber", args: [] };
      case "getGasPrice":
        return { method: "eth_gasPrice", args: [] };
      case "getPriorityFee":
        return { method: "eth_maxPriorityFeePerGas", args: [] };
      case "getBalance":
        return {
          method: "eth_getBalance",
          args: [fs(t.address), t.blockTag]
        };
      case "getTransactionCount":
        return {
          method: "eth_getTransactionCount",
          args: [fs(t.address), t.blockTag]
        };
      case "getCode":
        return {
          method: "eth_getCode",
          args: [fs(t.address), t.blockTag]
        };
      case "getStorage":
        return {
          method: "eth_getStorageAt",
          args: [
            fs(t.address),
            "0x" + t.position.toString(16),
            t.blockTag
          ]
        };
      case "broadcastTransaction":
        return {
          method: "eth_sendRawTransaction",
          args: [t.signedTransaction]
        };
      case "getBlock":
        if ("blockTag" in t)
          return {
            method: "eth_getBlockByNumber",
            args: [t.blockTag, !!t.includeTransactions]
          };
        if ("blockHash" in t)
          return {
            method: "eth_getBlockByHash",
            args: [t.blockHash, !!t.includeTransactions]
          };
        break;
      case "getTransaction":
        return {
          method: "eth_getTransactionByHash",
          args: [t.hash]
        };
      case "getTransactionReceipt":
        return {
          method: "eth_getTransactionReceipt",
          args: [t.hash]
        };
      case "call":
        return {
          method: "eth_call",
          args: [this.getRpcTransaction(t.transaction), t.blockTag]
        };
      case "estimateGas":
        return {
          method: "eth_estimateGas",
          args: [this.getRpcTransaction(t.transaction)]
        };
      case "getLogs":
        return t.filter && t.filter.address != null && (Array.isArray(t.filter.address) ? t.filter.address = t.filter.address.map(fs) : t.filter.address = fs(t.filter.address)), { method: "eth_getLogs", args: [t.filter] };
    }
    return null;
  }
  /**
   *  Returns an ethers-style Error for the given JSON-RPC error
   *  %%payload%%, coalescing the various strings and error shapes
   *  that different nodes return, coercing them into a machine-readable
   *  standardized error.
   */
  getRpcError(t, n) {
    const { method: s } = t, { error: i } = n;
    if (s === "eth_estimateGas" && i.message) {
      const c = i.message;
      if (!c.match(/revert/i) && c.match(/insufficient funds/i))
        return re("insufficient funds", "INSUFFICIENT_FUNDS", {
          transaction: t.params[0],
          info: { payload: t, error: i }
        });
    }
    if (s === "eth_call" || s === "eth_estimateGas") {
      const c = Ll(i), l = ao.getBuiltinCallException(s === "eth_call" ? "call" : "estimateGas", t.params[0], c ? c.data : null);
      return l.info = { error: i, payload: t }, l;
    }
    const o = JSON.stringify(bw(i));
    if (typeof i.message == "string" && i.message.match(/user denied|ethers-user-denied/i))
      return re("user rejected action", "ACTION_REJECTED", {
        action: {
          eth_sign: "signMessage",
          personal_sign: "signMessage",
          eth_signTypedData_v4: "signTypedData",
          eth_signTransaction: "signTransaction",
          eth_sendTransaction: "sendTransaction",
          eth_requestAccounts: "requestAccess",
          wallet_requestAccounts: "requestAccess"
        }[s] || "unknown",
        reason: "rejected",
        info: { payload: t, error: i }
      });
    if (s === "eth_sendRawTransaction" || s === "eth_sendTransaction") {
      const c = t.params[0];
      if (o.match(/insufficient funds|base fee exceeds gas limit/i))
        return re("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
          transaction: c,
          info: { error: i }
        });
      if (o.match(/nonce/i) && o.match(/too low/i))
        return re("nonce has already been used", "NONCE_EXPIRED", { transaction: c, info: { error: i } });
      if (o.match(/replacement transaction/i) && o.match(/underpriced/i))
        return re("replacement fee too low", "REPLACEMENT_UNDERPRICED", { transaction: c, info: { error: i } });
      if (o.match(/only replay-protected/i))
        return re("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
          operation: s,
          info: { transaction: c, info: { error: i } }
        });
    }
    let a = !!o.match(/the method .* does not exist/i);
    return a || i && i.details && i.details.startsWith("Unauthorized method:") && (a = !0), a ? re("unsupported operation", "UNSUPPORTED_OPERATION", {
      operation: t.method,
      info: { error: i, payload: t }
    }) : re("could not coalesce error", "UNKNOWN_ERROR", { error: i, payload: t });
  }
  /**
   *  Requests the %%method%% with %%params%% via the JSON-RPC protocol
   *  over the underlying channel. This can be used to call methods
   *  on the backend that do not have a high-level API within the Provider
   *  API.
   *
   *  This method queues requests according to the batch constraints
   *  in the options, assigns the request a unique ID.
   *
   *  **Do NOT override** this method in sub-classes; instead
   *  override [[_send]] or force the options values in the
   *  call to the constructor to modify this method's behavior.
   */
  send(t, n) {
    if (this.destroyed)
      return Promise.reject(re("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: t }));
    const s = Fi(this, Ci)._++, i = new Promise((o, a) => {
      u(this, En).push({
        resolve: o,
        reject: a,
        payload: { method: t, params: n, id: s, jsonrpc: "2.0" }
      });
    });
    return I(this, To, Bl).call(this), i;
  }
  /**
   *  Resolves to the [[Signer]] account for  %%address%% managed by
   *  the client.
   *
   *  If the %%address%% is a number, it is used as an index in the
   *  the accounts from [[listAccounts]].
   *
   *  This can only be used on clients which manage accounts (such as
   *  Geth with imported account or MetaMask).
   *
   *  Throws if the account doesn't exist.
   */
  async getSigner(t) {
    t == null && (t = 0);
    const n = this.send("eth_accounts", []);
    if (typeof t == "number") {
      const i = await n;
      if (t >= i.length)
        throw new Error("no such account");
      return new Bs(this, i[t]);
    }
    const { accounts: s } = await _e({
      network: this.getNetwork(),
      accounts: n
    });
    t = $(t);
    for (const i of s)
      if ($(i) === t)
        return new Bs(this, t);
    throw new Error("invalid account");
  }
  async listAccounts() {
    return (await this.send("eth_accounts", [])).map((n) => new Bs(this, n));
  }
  destroy() {
    u(this, Vt) && (clearTimeout(u(this, Vt)), p(this, Vt, null));
    for (const { payload: t, reject: n } of u(this, En))
      n(re("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: t.method }));
    p(this, En, []), super.destroy();
  }
}
Vr = new WeakMap(), Ci = new WeakMap(), En = new WeakMap(), Vt = new WeakMap(), It = new WeakMap(), ct = new WeakMap(), Ke = new WeakMap(), To = new WeakSet(), Bl = function() {
  if (u(this, Vt))
    return;
  const t = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
  p(this, Vt, setTimeout(() => {
    p(this, Vt, null);
    const n = u(this, En);
    for (p(this, En, []); n.length; ) {
      const s = [n.shift()];
      for (; n.length && s.length !== u(this, Vr).batchMaxCount; )
        if (s.push(n.shift()), JSON.stringify(s.map((o) => o.payload)).length > u(this, Vr).batchMaxSize) {
          n.unshift(s.pop());
          break;
        }
      (async () => {
        const i = s.length === 1 ? s[0].payload : s.map((o) => o.payload);
        this.emit("debug", { action: "sendRpcPayload", payload: i });
        try {
          const o = await this._send(i);
          this.emit("debug", { action: "receiveRpcResult", result: o });
          for (const { resolve: a, reject: c, payload: l } of s) {
            if (this.destroyed) {
              c(re("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: l.method }));
              continue;
            }
            const h = o.filter((d) => d.id === l.id)[0];
            if (h == null) {
              const d = re("missing response for request", "BAD_DATA", {
                value: o,
                info: { payload: l }
              });
              this.emit("error", d), c(d);
              continue;
            }
            if ("error" in h) {
              c(this.getRpcError(l, h));
              continue;
            }
            a(h.result);
          }
        } catch (o) {
          this.emit("debug", { action: "receiveRpcError", error: o });
          for (const { reject: a } of s)
            a(o);
        }
      })();
    }
  }, t));
};
var nr;
class Xf extends Yf {
  constructor(t, n) {
    super(t, n);
    b(this, nr, void 0);
    let s = this._getOption("pollingInterval");
    s == null && (s = $f.pollingInterval), p(this, nr, s);
  }
  _getSubscriber(t) {
    const n = super._getSubscriber(t);
    return Bh(n) && (n.pollingInterval = u(this, nr)), n;
  }
  /**
   *  The polling interval (default: 4000 ms)
   */
  get pollingInterval() {
    return u(this, nr);
  }
  set pollingInterval(t) {
    if (!Number.isInteger(t) || t < 0)
      throw new Error("invalid interval");
    p(this, nr, t), this._forEachSubscriber((n) => {
      Bh(n) && (n.pollingInterval = u(this, nr));
    });
  }
}
nr = new WeakMap();
var vi;
class ep extends Xf {
  constructor(t, n, s) {
    t == null && (t = "http://localhost:8545");
    super(n, s);
    b(this, vi, void 0);
    typeof t == "string" ? p(this, vi, new Yt(t)) : p(this, vi, t.clone());
  }
  _getConnection() {
    return u(this, vi).clone();
  }
  async send(t, n) {
    return await this._start(), await super.send(t, n);
  }
  async _send(t) {
    const n = this._getConnection();
    n.body = JSON.stringify(t), n.setHeader("content-type", "application/json");
    const s = await n.send();
    s.assertOk();
    let i = s.bodyJson;
    return Array.isArray(i) || (i = [i]), i;
  }
}
vi = new WeakMap();
function Ll(r) {
  if (r == null)
    return null;
  if (typeof r.message == "string" && r.message.match(/revert/i) && X(r.data))
    return { message: r.message, data: r.data };
  if (typeof r == "object") {
    for (const e in r) {
      const t = Ll(r[e]);
      if (t)
        return t;
    }
    return null;
  }
  if (typeof r == "string")
    try {
      return Ll(JSON.parse(r));
    } catch {
    }
  return null;
}
function Ml(r, e) {
  if (r != null) {
    if (typeof r.message == "string" && e.push(r.message), typeof r == "object")
      for (const t in r)
        Ml(r[t], e);
    if (typeof r == "string")
      try {
        return Ml(JSON.parse(r), e);
      } catch {
      }
  }
}
function bw(r) {
  const e = [];
  return Ml(r, e), e;
}
function Aw() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof Aa < "u")
    return Aa;
  throw new Error("unable to locate global object");
}
const Ew = Aw().WebSocket;
var Wt, _o, rr, Wr, sr;
class iu {
  /**
   *  Creates a new **SocketSubscriber** attached to %%provider%% listening
   *  to %%filter%%.
   */
  constructor(e, t) {
    b(this, Wt, void 0);
    b(this, _o, void 0);
    b(this, rr, void 0);
    b(this, Wr, void 0);
    b(this, sr, void 0);
    p(this, Wt, e), p(this, _o, JSON.stringify(t)), p(this, rr, null), p(this, Wr, null), p(this, sr, null);
  }
  /**
   *  The filter.
   */
  get filter() {
    return JSON.parse(u(this, _o));
  }
  start() {
    p(this, rr, u(this, Wt).send("eth_subscribe", this.filter).then((e) => (u(this, Wt)._register(e, this), e)));
  }
  stop() {
    u(this, rr).then((e) => {
      u(this, Wt).destroyed || u(this, Wt).send("eth_unsubscribe", [e]);
    }), p(this, rr, null);
  }
  // @TODO: pause should trap the current blockNumber, unsub, and on resume use getLogs
  //        and resume
  pause(e) {
    v(e, "preserve logs while paused not supported by SocketSubscriber yet", "UNSUPPORTED_OPERATION", { operation: "pause(false)" }), p(this, Wr, !!e);
  }
  resume() {
    p(this, Wr, null);
  }
  /**
   *  @_ignore:
   */
  _handleMessage(e) {
    if (u(this, rr) != null && u(this, Wr) === null) {
      let t = u(this, sr);
      t == null ? t = this._emit(u(this, Wt), e) : t = t.then(async () => {
        await this._emit(u(this, Wt), e);
      }), p(this, sr, t.then(() => {
        u(this, sr) === t && p(this, sr, null);
      }));
    }
  }
  /**
   *  Sub-classes **must** override this to emit the events on the
   *  provider.
   */
  async _emit(e, t) {
    throw new Error("sub-classes must implemente this; _emit");
  }
}
Wt = new WeakMap(), _o = new WeakMap(), rr = new WeakMap(), Wr = new WeakMap(), sr = new WeakMap();
class Cw extends iu {
  /**
   *  @_ignore:
   */
  constructor(e) {
    super(e, ["newHeads"]);
  }
  async _emit(e, t) {
    e.emit("block", parseInt(t.number));
  }
}
class vw extends iu {
  /**
   *  @_ignore:
   */
  constructor(e) {
    super(e, ["newPendingTransactions"]);
  }
  async _emit(e, t) {
    e.emit("pending", t);
  }
}
var Bo;
class Iw extends iu {
  /**
   *  @_ignore:
   */
  constructor(t, n) {
    super(t, ["logs", n]);
    b(this, Bo, void 0);
    p(this, Bo, JSON.stringify(n));
  }
  /**
   *  The filter.
   */
  get logFilter() {
    return JSON.parse(u(this, Bo));
  }
  async _emit(t, n) {
    t.emit(this.logFilter, t._wrapLog(n, t._network));
  }
}
Bo = new WeakMap();
var Qr, Ii, ir;
class Nw extends Yf {
  /**
   *  Creates a new **SocketProvider** connected to %%network%%.
   *
   *  If unspecified, the network will be discovered.
   */
  constructor(t, n) {
    const s = Object.assign({}, n ?? {});
    y(s.batchMaxCount == null || s.batchMaxCount === 1, "sockets-based providers do not support batches", "options.batchMaxCount", n), s.batchMaxCount = 1, s.staticNetwork == null && (s.staticNetwork = !0);
    super(t, s);
    b(this, Qr, void 0);
    // Maps each filterId to its subscriber
    b(this, Ii, void 0);
    // If any events come in before a subscriber has finished
    // registering, queue them
    b(this, ir, void 0);
    p(this, Qr, /* @__PURE__ */ new Map()), p(this, Ii, /* @__PURE__ */ new Map()), p(this, ir, /* @__PURE__ */ new Map());
  }
  // This value is only valid after _start has been called
  /*
  get _network(): Network {
      if (this.#network == null) {
          throw new Error("this shouldn't happen");
      }
      return this.#network.clone();
  }
  */
  _getSubscriber(t) {
    switch (t.type) {
      case "close":
        return new La("close");
      case "block":
        return new Cw(this);
      case "pending":
        return new vw(this);
      case "event":
        return new Iw(this, t.filter);
      case "orphan":
        if (t.filter.orphan === "drop-log")
          return new La("drop-log");
    }
    return super._getSubscriber(t);
  }
  /**
   *  Register a new subscriber. This is used internalled by Subscribers
   *  and generally is unecessary unless extending capabilities.
   */
  _register(t, n) {
    u(this, Ii).set(t, n);
    const s = u(this, ir).get(t);
    if (s) {
      for (const i of s)
        n._handleMessage(i);
      u(this, ir).delete(t);
    }
  }
  async _send(t) {
    y(!Array.isArray(t), "WebSocket does not support batch send", "payload", t);
    const n = new Promise((s, i) => {
      u(this, Qr).set(t.id, { payload: t, resolve: s, reject: i });
    });
    return await this._waitUntilReady(), await this._write(JSON.stringify(t)), [await n];
  }
  // Sub-classes must call this once they are connected
  /*
      async _start(): Promise<void> {
          if (this.#ready) { return; }
  
          for (const { payload } of this.#callbacks.values()) {
              await this._write(JSON.stringify(payload));
          }
  
          this.#ready = (async function() {
              await super._start();
          })();
      }
      */
  /**
   *  Sub-classes **must** call this with messages received over their
   *  transport to be processed and dispatched.
   */
  async _processMessage(t) {
    const n = JSON.parse(t);
    if (n && typeof n == "object" && "id" in n) {
      const s = u(this, Qr).get(n.id);
      if (s == null) {
        this.emit("error", re("received result for unknown id", "UNKNOWN_ERROR", {
          reasonCode: "UNKNOWN_ID",
          result: n
        }));
        return;
      }
      u(this, Qr).delete(n.id), s.resolve(n);
    } else if (n && n.method === "eth_subscription") {
      const s = n.params.subscription, i = u(this, Ii).get(s);
      if (i)
        i._handleMessage(n.params.result);
      else {
        let o = u(this, ir).get(s);
        o == null && (o = [], u(this, ir).set(s, o)), o.push(n.params.result);
      }
    } else {
      this.emit("error", re("received unexpected message", "UNKNOWN_ERROR", {
        reasonCode: "UNEXPECTED_MESSAGE",
        result: n
      }));
      return;
    }
  }
  /**
   *  Sub-classes **must** override this to send %%message%% over their
   *  transport.
   */
  async _write(t) {
    throw new Error("sub-classes must override this");
  }
}
Qr = new WeakMap(), Ii = new WeakMap(), ir = new WeakMap();
var zr, Nt;
class Sw extends Nw {
  constructor(t, n, s) {
    super(n, s);
    b(this, zr, void 0);
    b(this, Nt, void 0);
    typeof t == "string" ? (p(this, zr, () => new Ew(t)), p(this, Nt, u(this, zr).call(this))) : typeof t == "function" ? (p(this, zr, t), p(this, Nt, t())) : (p(this, zr, null), p(this, Nt, t)), this.websocket.onopen = async () => {
      try {
        await this._start(), this.resume();
      } catch (i) {
        console.log("failed to start WebsocketProvider", i);
      }
    }, this.websocket.onmessage = (i) => {
      this._processMessage(i.data);
    };
  }
  get websocket() {
    if (u(this, Nt) == null)
      throw new Error("websocket closed");
    return u(this, Nt);
  }
  async _write(t) {
    this.websocket.send(t);
  }
  async destroy() {
    u(this, Nt) != null && (u(this, Nt).close(), p(this, Nt, null)), super.destroy();
  }
}
zr = new WeakMap(), Nt = new WeakMap();
const qi = "84842078b09946638c03157f83405213";
function kw(r) {
  switch (r) {
    case "mainnet":
      return "mainnet.infura.io";
    case "goerli":
      return "goerli.infura.io";
    case "sepolia":
      return "sepolia.infura.io";
    case "arbitrum":
      return "arbitrum-mainnet.infura.io";
    case "arbitrum-goerli":
      return "arbitrum-goerli.infura.io";
    case "arbitrum-sepolia":
      return "arbitrum-sepolia.infura.io";
    case "base":
      return "base-mainnet.infura.io";
    case "base-goerlia":
      return "base-goerli.infura.io";
    case "base-sepolia":
      return "base-sepolia.infura.io";
    case "bnb":
      return "bnbsmartchain-mainnet.infura.io";
    case "bnbt":
      return "bnbsmartchain-testnet.infura.io";
    case "linea":
      return "linea-mainnet.infura.io";
    case "linea-goerli":
      return "linea-goerli.infura.io";
    case "linea-sepolia":
      return "linea-sepolia.infura.io";
    case "matic":
      return "polygon-mainnet.infura.io";
    case "matic-amoy":
      return "polygon-amoy.infura.io";
    case "matic-mumbai":
      return "polygon-mumbai.infura.io";
    case "optimism":
      return "optimism-mainnet.infura.io";
    case "optimism-goerli":
      return "optimism-goerli.infura.io";
    case "optimism-sepolia":
      return "optimism-sepolia.infura.io";
  }
  y(!1, "unsupported network", "network", r);
}
class xw extends Sw {
  /**
   *  Creates a new **InfuraWebSocketProvider**.
   */
  constructor(t, n) {
    const s = new ns(t, n), i = s._getConnection();
    v(!i.credentials, "INFURA WebSocket project secrets unsupported", "UNSUPPORTED_OPERATION", { operation: "InfuraProvider.getWebSocketProvider()" });
    const o = i.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
    super(o, s._network);
    /**
     *  The Project ID for the INFURA connection.
     */
    A(this, "projectId");
    /**
     *  The Project Secret.
     *
     *  If null, no authenticated requests are made. This should not
     *  be used outside of private contexts.
     */
    A(this, "projectSecret");
    U(this, {
      projectId: s.projectId,
      projectSecret: s.projectSecret
    });
  }
  isCommunityResource() {
    return this.projectId === qi;
  }
}
class ns extends ep {
  /**
   *  Creates a new **InfuraProvider**.
   */
  constructor(t, n, s) {
    t == null && (t = "mainnet");
    const i = kt.from(t);
    n == null && (n = qi), s == null && (s = null);
    const o = ns.getRequest(i, n, s);
    super(o, i, { staticNetwork: i });
    /**
     *  The Project ID for the INFURA connection.
     */
    A(this, "projectId");
    /**
     *  The Project Secret.
     *
     *  If null, no authenticated requests are made. This should not
     *  be used outside of private contexts.
     */
    A(this, "projectSecret");
    U(this, { projectId: n, projectSecret: s });
  }
  _getProvider(t) {
    try {
      return new ns(t, this.projectId, this.projectSecret);
    } catch {
    }
    return super._getProvider(t);
  }
  isCommunityResource() {
    return this.projectId === qi;
  }
  /**
   *  Creates a new **InfuraWebSocketProvider**.
   */
  static getWebSocketProvider(t, n) {
    return new xw(t, n);
  }
  /**
   *  Returns a prepared request for connecting to %%network%%
   *  with %%projectId%% and %%projectSecret%%.
   */
  static getRequest(t, n, s) {
    n == null && (n = qi), s == null && (s = null);
    const i = new Yt(`https://${kw(t.name)}/v3/${n}`);
    return i.allowGzip = !0, s && i.setCredentials("", s), n === qi && (i.retryFunc = async (o, a, c) => (fw("InfuraProvider"), !0)), i;
  }
}
var Ni;
class zc extends Xf {
  /**
   *  Connnect to the %%ethereum%% provider, optionally forcing the
   *  %%network%%.
   */
  constructor(t, n, s) {
    const i = Object.assign({}, s ?? {}, { batchMaxCount: 1 });
    y(t && t.request, "invalid EIP-1193 provider", "ethereum", t);
    super(n, i);
    b(this, Ni, void 0);
    p(this, Ni, async (o, a) => {
      const c = { method: o, params: a };
      this.emit("debug", { action: "sendEip1193Request", payload: c });
      try {
        const l = await t.request(c);
        return this.emit("debug", { action: "receiveEip1193Result", result: l }), l;
      } catch (l) {
        const h = new Error(l.message);
        throw h.code = l.code, h.data = l.data, h.payload = c, this.emit("debug", { action: "receiveEip1193Error", error: h }), h;
      }
    });
  }
  async send(t, n) {
    return await this._start(), await super.send(t, n);
  }
  async _send(t) {
    y(!Array.isArray(t), "EIP-1193 does not support batch request", "payload", t);
    try {
      const n = await u(this, Ni).call(this, t.method, t.params || []);
      return [{ id: t.id, result: n }];
    } catch (n) {
      return [{
        id: t.id,
        error: { code: n.code, data: n.data, message: n.message }
      }];
    }
  }
  getRpcError(t, n) {
    switch (n = JSON.parse(JSON.stringify(n)), n.error.code || -1) {
      case 4001:
        n.error.message = `ethers-user-denied: ${n.error.message}`;
        break;
      case 4200:
        n.error.message = `ethers-unsupported: ${n.error.message}`;
        break;
    }
    return super.getRpcError(t, n);
  }
  /**
   *  Resolves to ``true`` if the provider manages the %%address%%.
   */
  async hasSigner(t) {
    t == null && (t = 0);
    const n = await this.send("eth_accounts", []);
    return typeof t == "number" ? n.length > t : (t = t.toLowerCase(), n.filter((s) => s.toLowerCase() === t).length !== 0);
  }
  async getSigner(t) {
    if (t == null && (t = 0), !await this.hasSigner(t))
      try {
        await u(this, Ni).call(this, "eth_requestAccounts", []);
      } catch (n) {
        const s = n.payload;
        throw this.getRpcError(s, { id: s.id, error: n });
      }
    return await super.getSigner(t);
  }
}
Ni = new WeakMap();
const Dn = {
  signMessage: async (r, e, t) => {
    if (!e)
      throw new Error("signMessage - provider is undefined");
    const n = X(r) ? r : O(qt(r));
    return await e.request({
      method: "personal_sign",
      params: [n, t]
    });
  },
  estimateGas: async (r, e, t, n) => {
    if (!e)
      throw new Error("estimateGas - provider is undefined");
    if (!t)
      throw new Error("estimateGas - address is undefined");
    if (r.chainNamespace && r.chainNamespace !== "eip155")
      throw new Error("estimateGas - chainNamespace is not eip155");
    const s = {
      from: r.address,
      to: r.to,
      data: r.data,
      type: 0
    }, i = new zc(e, n);
    return await new Bs(i, t).estimateGas(s);
  },
  sendTransaction: async (r, e, t, n) => {
    if (!e)
      throw new Error("sendTransaction - provider is undefined");
    if (!t)
      throw new Error("sendTransaction - address is undefined");
    if (r.chainNamespace && r.chainNamespace !== "eip155")
      throw new Error("sendTransaction - chainNamespace is not eip155");
    const s = {
      to: r.to,
      value: r.value,
      gasLimit: r.gas,
      gasPrice: r.gasPrice,
      data: r.data,
      type: 0
    }, i = new zc(e, n), c = await (await new Bs(i, t).sendTransaction(s)).wait();
    return (c == null ? void 0 : c.hash) || null;
  },
  writeContract: async (r, e, t, n) => {
    if (!e)
      throw new Error("writeContract - provider is undefined");
    if (!t)
      throw new Error("writeContract - address is undefined");
    const s = new zc(e, n), i = new Bs(s, t), o = new _s(r.tokenAddress, r.abi, i);
    if (!o || !r.method)
      throw new Error("Contract method is undefined");
    const a = o[r.method];
    if (a)
      return await a(r.receiverAddress, r.tokenAmount);
    throw new Error("Contract method is undefined");
  },
  getEnsAddress: async (r, e) => {
    var t;
    try {
      const n = Number((t = e.getCaipNetwork()) == null ? void 0 : t.id);
      let s = null, i = !1;
      return Bp(r) && (i = await (e == null ? void 0 : e.resolveReownName(r)) || !1), n === 1 && (s = await new ns("mainnet").resolveName(r)), s || i || !1;
    } catch {
      return !1;
    }
  },
  getEnsAvatar: async (r, e) => e === 1 && await new ns("mainnet").getAvatar(r) || !1,
  parseUnits: dg,
  formatUnits: wd
};
var tp = {}, lo = {}, oc = {};
Object.defineProperty(oc, "__esModule", { value: !0 });
oc.walletLogo = void 0;
const Pw = (r, e) => {
  let t;
  switch (r) {
    case "standard":
      return t = e, `data:image/svg+xml,%3Csvg width='${e}' height='${t}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    case "circle":
      return t = e, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${t}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
    case "text":
      return t = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogo":
      return t = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    case "textLight":
      return t = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogoLight":
      return t = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    default:
      return t = e, `data:image/svg+xml,%3Csvg width='${e}' height='${t}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
  }
};
oc.walletLogo = Pw;
var ac = {}, Xt = {}, Sn = {};
Object.defineProperty(Sn, "__esModule", { value: !0 });
Sn.errorValues = Sn.standardErrorCodes = void 0;
Sn.standardErrorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
    unsupportedChain: 4902
  }
};
Sn.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  },
  4902: {
    standard: "EIP-3085",
    message: "Unrecognized chain ID."
  }
};
var cc = {}, ou = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.serialize = r.getErrorCode = r.isValidCode = r.getMessageFromCode = r.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const e = Sn, t = "Unspecified error message.";
  r.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function n(f, g = t) {
    if (f && Number.isInteger(f)) {
      const w = f.toString();
      if (h(e.errorValues, w))
        return e.errorValues[w].message;
      if (c(f))
        return r.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return g;
  }
  r.getMessageFromCode = n;
  function s(f) {
    if (!Number.isInteger(f))
      return !1;
    const g = f.toString();
    return !!(e.errorValues[g] || c(f));
  }
  r.isValidCode = s;
  function i(f) {
    var g;
    if (typeof f == "number")
      return f;
    if (o(f))
      return (g = f.code) !== null && g !== void 0 ? g : f.errorCode;
  }
  r.getErrorCode = i;
  function o(f) {
    return typeof f == "object" && f !== null && (typeof f.code == "number" || typeof f.errorCode == "number");
  }
  function a(f, { shouldIncludeStack: g = !1 } = {}) {
    const w = {};
    if (f && typeof f == "object" && !Array.isArray(f) && h(f, "code") && s(f.code)) {
      const m = f;
      w.code = m.code, m.message && typeof m.message == "string" ? (w.message = m.message, h(m, "data") && (w.data = m.data)) : (w.message = n(w.code), w.data = { originalError: l(f) });
    } else
      w.code = e.standardErrorCodes.rpc.internal, w.message = d(f, "message") ? f.message : t, w.data = { originalError: l(f) };
    return g && (w.stack = d(f, "stack") ? f.stack : void 0), w;
  }
  r.serialize = a;
  function c(f) {
    return f >= -32099 && f <= -32e3;
  }
  function l(f) {
    return f && typeof f == "object" && !Array.isArray(f) ? Object.assign({}, f) : f;
  }
  function h(f, g) {
    return Object.prototype.hasOwnProperty.call(f, g);
  }
  function d(f, g) {
    return typeof f == "object" && f !== null && g in f && typeof f[g] == "string";
  }
})(ou);
Object.defineProperty(cc, "__esModule", { value: !0 });
cc.standardErrors = void 0;
const Ae = Sn, np = ou;
cc.standardErrors = {
  rpc: {
    parse: (r) => nt(Ae.standardErrorCodes.rpc.parse, r),
    invalidRequest: (r) => nt(Ae.standardErrorCodes.rpc.invalidRequest, r),
    invalidParams: (r) => nt(Ae.standardErrorCodes.rpc.invalidParams, r),
    methodNotFound: (r) => nt(Ae.standardErrorCodes.rpc.methodNotFound, r),
    internal: (r) => nt(Ae.standardErrorCodes.rpc.internal, r),
    server: (r) => {
      if (!r || typeof r != "object" || Array.isArray(r))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: e } = r;
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return nt(e, r);
    },
    invalidInput: (r) => nt(Ae.standardErrorCodes.rpc.invalidInput, r),
    resourceNotFound: (r) => nt(Ae.standardErrorCodes.rpc.resourceNotFound, r),
    resourceUnavailable: (r) => nt(Ae.standardErrorCodes.rpc.resourceUnavailable, r),
    transactionRejected: (r) => nt(Ae.standardErrorCodes.rpc.transactionRejected, r),
    methodNotSupported: (r) => nt(Ae.standardErrorCodes.rpc.methodNotSupported, r),
    limitExceeded: (r) => nt(Ae.standardErrorCodes.rpc.limitExceeded, r)
  },
  provider: {
    userRejectedRequest: (r) => ps(Ae.standardErrorCodes.provider.userRejectedRequest, r),
    unauthorized: (r) => ps(Ae.standardErrorCodes.provider.unauthorized, r),
    unsupportedMethod: (r) => ps(Ae.standardErrorCodes.provider.unsupportedMethod, r),
    disconnected: (r) => ps(Ae.standardErrorCodes.provider.disconnected, r),
    chainDisconnected: (r) => ps(Ae.standardErrorCodes.provider.chainDisconnected, r),
    unsupportedChain: (r) => ps(Ae.standardErrorCodes.provider.unsupportedChain, r),
    custom: (r) => {
      if (!r || typeof r != "object" || Array.isArray(r))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: e, message: t, data: n } = r;
      if (!t || typeof t != "string")
        throw new Error('"message" must be a nonempty string');
      return new ip(e, t, n);
    }
  }
};
function nt(r, e) {
  const [t, n] = rp(e);
  return new sp(r, t || (0, np.getMessageFromCode)(r), n);
}
function ps(r, e) {
  const [t, n] = rp(e);
  return new ip(r, t || (0, np.getMessageFromCode)(r), n);
}
function rp(r) {
  if (r) {
    if (typeof r == "string")
      return [r];
    if (typeof r == "object" && !Array.isArray(r)) {
      const { message: e, data: t } = r;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e || void 0, t];
    }
  }
  return [];
}
class sp extends Error {
  constructor(e, t, n) {
    if (!Number.isInteger(e))
      throw new Error('"code" must be an integer.');
    if (!t || typeof t != "string")
      throw new Error('"message" must be a nonempty string.');
    super(t), this.code = e, n !== void 0 && (this.data = n);
  }
}
class ip extends sp {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(e, t, n) {
    if (!Rw(e))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(e, t, n);
  }
}
function Rw(r) {
  return Number.isInteger(r) && r >= 1e3 && r <= 4999;
}
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.standardErrors = r.standardErrorCodes = void 0;
  var e = Sn;
  Object.defineProperty(r, "standardErrorCodes", { enumerable: !0, get: function() {
    return e.standardErrorCodes;
  } });
  var t = cc;
  Object.defineProperty(r, "standardErrors", { enumerable: !0, get: function() {
    return t.standardErrors;
  } });
})(Xt);
var lc = {}, Di = {};
Object.defineProperty(Di, "__esModule", { value: !0 });
Di.isErrorResponse = void 0;
function Ow(r) {
  return r.errorMessage !== void 0;
}
Di.isErrorResponse = Ow;
var ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.LIB_VERSION = void 0;
ss.LIB_VERSION = "4.0.3";
Object.defineProperty(lc, "__esModule", { value: !0 });
lc.serializeError = void 0;
const Tw = Di, _w = ss, Bw = Sn, Lw = ou;
function Mw(r, e) {
  const t = (0, Lw.serialize)(Dw(r), {
    shouldIncludeStack: !0
  }), n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  n.searchParams.set("version", _w.LIB_VERSION), n.searchParams.set("code", t.code.toString());
  const s = Uw(t.data, e);
  return s && n.searchParams.set("method", s), n.searchParams.set("message", t.message), Object.assign(Object.assign({}, t), { docUrl: n.href });
}
lc.serializeError = Mw;
function Dw(r) {
  return typeof r == "string" ? {
    message: r,
    code: Bw.standardErrorCodes.rpc.internal
  } : (0, Tw.isErrorResponse)(r) ? Object.assign(Object.assign({}, r), { message: r.errorMessage, code: r.errorCode, data: { method: r.method } }) : r;
}
function Uw(r, e) {
  const t = r == null ? void 0 : r.method;
  if (t)
    return t;
  if (e !== void 0) {
    if (typeof e == "string")
      return e;
    if (Array.isArray(e)) {
      if (e.length > 0)
        return e[0].method;
    } else
      return e.method;
  }
}
var ke = {};
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.RegExpString = ke.IntNumber = ke.BigIntString = ke.AddressString = ke.HexString = ke.OpaqueType = void 0;
function Go() {
  return (r) => r;
}
ke.OpaqueType = Go;
ke.HexString = Go();
ke.AddressString = Go();
ke.BigIntString = Go();
function Fw(r) {
  return Math.floor(r);
}
ke.IntNumber = Fw;
ke.RegExpString = Go();
var L = {};
Object.defineProperty(L, "__esModule", { value: !0 });
L.areAddressArraysEqual = L.getFavicon = L.range = L.isBigNumber = L.ensureParsedJSONObject = L.ensureBigInt = L.ensureRegExpString = L.ensureIntNumber = L.ensureBuffer = L.ensureAddressString = L.ensureEvenLengthHexString = L.ensureHexString = L.isHexString = L.prepend0x = L.strip0x = L.has0xPrefix = L.hexStringFromIntNumber = L.intNumberFromHexString = L.bigIntStringFromBigInt = L.hexStringFromBuffer = L.hexStringToUint8Array = L.uint8ArrayToHex = L.randomBytesHex = void 0;
const is = Xt, ht = ke, op = /^[0-9]*$/, ap = /^[a-f0-9]*$/;
function Hw(r) {
  return cp(crypto.getRandomValues(new Uint8Array(r)));
}
L.randomBytesHex = Hw;
function cp(r) {
  return [...r].map((e) => e.toString(16).padStart(2, "0")).join("");
}
L.uint8ArrayToHex = cp;
function Gw(r) {
  return new Uint8Array(r.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
L.hexStringToUint8Array = Gw;
function Kw(r, e = !1) {
  const t = r.toString("hex");
  return (0, ht.HexString)(e ? `0x${t}` : t);
}
L.hexStringFromBuffer = Kw;
function jw(r) {
  return (0, ht.BigIntString)(r.toString(10));
}
L.bigIntStringFromBigInt = jw;
function Vw(r) {
  return (0, ht.IntNumber)(Number(BigInt(jo(r, !0))));
}
L.intNumberFromHexString = Vw;
function Ww(r) {
  return (0, ht.HexString)(`0x${BigInt(r).toString(16)}`);
}
L.hexStringFromIntNumber = Ww;
function au(r) {
  return r.startsWith("0x") || r.startsWith("0X");
}
L.has0xPrefix = au;
function uc(r) {
  return au(r) ? r.slice(2) : r;
}
L.strip0x = uc;
function lp(r) {
  return au(r) ? `0x${r.slice(2)}` : `0x${r}`;
}
L.prepend0x = lp;
function Ko(r) {
  if (typeof r != "string")
    return !1;
  const e = uc(r).toLowerCase();
  return ap.test(e);
}
L.isHexString = Ko;
function up(r, e = !1) {
  if (typeof r == "string") {
    const t = uc(r).toLowerCase();
    if (ap.test(t))
      return (0, ht.HexString)(e ? `0x${t}` : t);
  }
  throw is.standardErrors.rpc.invalidParams(`"${String(r)}" is not a hexadecimal string`);
}
L.ensureHexString = up;
function jo(r, e = !1) {
  let t = up(r, !1);
  return t.length % 2 === 1 && (t = (0, ht.HexString)(`0${t}`)), e ? (0, ht.HexString)(`0x${t}`) : t;
}
L.ensureEvenLengthHexString = jo;
function Qw(r) {
  if (typeof r == "string") {
    const e = uc(r).toLowerCase();
    if (Ko(e) && e.length === 40)
      return (0, ht.AddressString)(lp(e));
  }
  throw is.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(r)}`);
}
L.ensureAddressString = Qw;
function zw(r) {
  if (ne.isBuffer(r))
    return r;
  if (typeof r == "string") {
    if (Ko(r)) {
      const e = jo(r, !1);
      return ne.from(e, "hex");
    }
    return ne.from(r, "utf8");
  }
  throw is.standardErrors.rpc.invalidParams(`Not binary data: ${String(r)}`);
}
L.ensureBuffer = zw;
function hp(r) {
  if (typeof r == "number" && Number.isInteger(r))
    return (0, ht.IntNumber)(r);
  if (typeof r == "string") {
    if (op.test(r))
      return (0, ht.IntNumber)(Number(r));
    if (Ko(r))
      return (0, ht.IntNumber)(Number(BigInt(jo(r, !0))));
  }
  throw is.standardErrors.rpc.invalidParams(`Not an integer: ${String(r)}`);
}
L.ensureIntNumber = hp;
function Jw(r) {
  if (r instanceof RegExp)
    return (0, ht.RegExpString)(r.toString());
  throw is.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(r)}`);
}
L.ensureRegExpString = Jw;
function qw(r) {
  if (r !== null && (typeof r == "bigint" || dp(r)))
    return BigInt(r.toString(10));
  if (typeof r == "number")
    return BigInt(hp(r));
  if (typeof r == "string") {
    if (op.test(r))
      return BigInt(r);
    if (Ko(r))
      return BigInt(jo(r, !0));
  }
  throw is.standardErrors.rpc.invalidParams(`Not an integer: ${String(r)}`);
}
L.ensureBigInt = qw;
function Zw(r) {
  if (typeof r == "string")
    return JSON.parse(r);
  if (typeof r == "object")
    return r;
  throw is.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(r)}`);
}
L.ensureParsedJSONObject = Zw;
function dp(r) {
  if (r == null || typeof r.constructor != "function")
    return !1;
  const { constructor: e } = r;
  return typeof e.config == "function" && typeof e.EUCLID == "number";
}
L.isBigNumber = dp;
function $w(r, e) {
  return Array.from({ length: e - r }, (t, n) => r + n);
}
L.range = $w;
function Yw() {
  const r = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'), { protocol: e, host: t } = document.location, n = r ? r.getAttribute("href") : null;
  return !n || n.startsWith("javascript:") || n.startsWith("vbscript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? e + n : `${e}//${t}${n}`;
}
L.getFavicon = Yw;
function Xw(r, e) {
  return r.length === e.length && r.every((t, n) => t === e[n]);
}
L.areAddressArraysEqual = Xw;
var Jt = {}, hc = {}, dc = {}, de = {};
Object.defineProperty(de, "__esModule", { value: !0 });
de.decryptContent = de.encryptContent = de.importKeyFromHexString = de.exportKeyToHexString = de.decrypt = de.encrypt = de.deriveSharedSecret = de.generateKeyPair = void 0;
const fp = L;
async function eb() {
  return crypto.subtle.generateKey({
    name: "ECDH",
    namedCurve: "P-256"
  }, !0, ["deriveKey"]);
}
de.generateKeyPair = eb;
async function tb(r, e) {
  return crypto.subtle.deriveKey({
    name: "ECDH",
    public: e
  }, r, {
    name: "AES-GCM",
    length: 256
  }, !1, ["encrypt", "decrypt"]);
}
de.deriveSharedSecret = tb;
async function pp(r, e) {
  const t = crypto.getRandomValues(new Uint8Array(12)), n = await crypto.subtle.encrypt({
    name: "AES-GCM",
    iv: t
  }, r, new TextEncoder().encode(e));
  return { iv: t, cipherText: n };
}
de.encrypt = pp;
async function gp(r, { iv: e, cipherText: t }) {
  const n = await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv: e
  }, r, t);
  return new TextDecoder().decode(n);
}
de.decrypt = gp;
function mp(r) {
  switch (r) {
    case "public":
      return "spki";
    case "private":
      return "pkcs8";
  }
}
async function nb(r, e) {
  const t = mp(r), n = await crypto.subtle.exportKey(t, e);
  return (0, fp.uint8ArrayToHex)(new Uint8Array(n));
}
de.exportKeyToHexString = nb;
async function rb(r, e) {
  const t = mp(r), n = (0, fp.hexStringToUint8Array)(e).buffer;
  return await crypto.subtle.importKey(t, n, {
    name: "ECDH",
    namedCurve: "P-256"
  }, !0, r === "private" ? ["deriveKey"] : []);
}
de.importKeyFromHexString = rb;
async function sb(r, e) {
  const t = JSON.stringify(r, (n, s) => {
    if (!(s instanceof Error))
      return s;
    const i = s;
    return Object.assign(Object.assign({}, i.code ? { code: i.code } : {}), { message: i.message });
  });
  return pp(e, t);
}
de.encryptContent = sb;
async function ib(r, e) {
  return JSON.parse(await gp(e, r));
}
de.decryptContent = ib;
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
en.ScopedLocalStorage = void 0;
class Ma {
  constructor(e, t) {
    this.scope = e, this.module = t;
  }
  setItem(e, t) {
    localStorage.setItem(this.scopedKey(e), t);
  }
  getItem(e) {
    return localStorage.getItem(this.scopedKey(e));
  }
  removeItem(e) {
    localStorage.removeItem(this.scopedKey(e));
  }
  clear() {
    const e = this.scopedKey(""), t = [];
    for (let n = 0; n < localStorage.length; n++) {
      const s = localStorage.key(n);
      typeof s == "string" && s.startsWith(e) && t.push(s);
    }
    t.forEach((n) => localStorage.removeItem(n));
  }
  scopedKey(e) {
    return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
  }
  static clearAll() {
    new Ma("CBWSDK").clear(), new Ma("walletlink").clear();
  }
}
en.ScopedLocalStorage = Ma;
Object.defineProperty(dc, "__esModule", { value: !0 });
dc.SCWKeyManager = void 0;
const ta = de, ob = en, Jc = {
  storageKey: "ownPrivateKey",
  keyType: "private"
}, qc = {
  storageKey: "ownPublicKey",
  keyType: "public"
}, Zc = {
  storageKey: "peerPublicKey",
  keyType: "public"
};
class ab {
  constructor() {
    this.storage = new ob.ScopedLocalStorage("CBWSDK", "SCWKeyManager"), this.ownPrivateKey = null, this.ownPublicKey = null, this.peerPublicKey = null, this.sharedSecret = null;
  }
  async getOwnPublicKey() {
    return await this.loadKeysIfNeeded(), this.ownPublicKey;
  }
  // returns null if the shared secret is not yet derived
  async getSharedSecret() {
    return await this.loadKeysIfNeeded(), this.sharedSecret;
  }
  async setPeerPublicKey(e) {
    this.sharedSecret = null, this.peerPublicKey = e, await this.storeKey(Zc, e), await this.loadKeysIfNeeded();
  }
  async clear() {
    this.ownPrivateKey = null, this.ownPublicKey = null, this.peerPublicKey = null, this.sharedSecret = null, this.storage.removeItem(qc.storageKey), this.storage.removeItem(Jc.storageKey), this.storage.removeItem(Zc.storageKey);
  }
  async generateKeyPair() {
    const e = await (0, ta.generateKeyPair)();
    this.ownPrivateKey = e.privateKey, this.ownPublicKey = e.publicKey, await this.storeKey(Jc, e.privateKey), await this.storeKey(qc, e.publicKey);
  }
  async loadKeysIfNeeded() {
    if (this.ownPrivateKey === null && (this.ownPrivateKey = await this.loadKey(Jc)), this.ownPublicKey === null && (this.ownPublicKey = await this.loadKey(qc)), (this.ownPrivateKey === null || this.ownPublicKey === null) && await this.generateKeyPair(), this.peerPublicKey === null && (this.peerPublicKey = await this.loadKey(Zc)), this.sharedSecret === null) {
      if (this.ownPrivateKey === null || this.peerPublicKey === null)
        return;
      this.sharedSecret = await (0, ta.deriveSharedSecret)(this.ownPrivateKey, this.peerPublicKey);
    }
  }
  // storage methods
  async loadKey(e) {
    const t = this.storage.getItem(e.storageKey);
    return t ? (0, ta.importKeyFromHexString)(e.keyType, t) : null;
  }
  async storeKey(e, t) {
    const n = await (0, ta.exportKeyToHexString)(e.keyType, t);
    this.storage.setItem(e.storageKey, n);
  }
}
dc.SCWKeyManager = ab;
var fc = {};
Object.defineProperty(fc, "__esModule", { value: !0 });
fc.SCWStateManager = void 0;
const cb = en, Lh = "accounts", Mh = "activeChain", Dh = "availableChains", Uh = "walletCapabilities";
class lb {
  get accounts() {
    return this._accounts;
  }
  get activeChain() {
    return this._activeChain;
  }
  get walletCapabilities() {
    return this._walletCapabilities;
  }
  constructor(e) {
    var t, n;
    this.storage = new cb.ScopedLocalStorage("CBWSDK", "SCWStateManager"), this.updateListener = e.updateListener, this.availableChains = this.loadItemFromStorage(Dh), this._walletCapabilities = this.loadItemFromStorage(Uh);
    const s = this.loadItemFromStorage(Lh), i = this.loadItemFromStorage(Mh);
    s && this.updateListener.onAccountsUpdate({
      accounts: s,
      source: "storage"
    }), i && this.updateListener.onChainUpdate({
      chain: i,
      source: "storage"
    }), this._accounts = s || [], this._activeChain = i || { id: (n = (t = e.appChainIds) === null || t === void 0 ? void 0 : t[0]) !== null && n !== void 0 ? n : 1 };
  }
  updateAccounts(e) {
    this._accounts = e, this.storeItemToStorage(Lh, e), this.updateListener.onAccountsUpdate({
      accounts: e,
      source: "wallet"
    });
  }
  switchChain(e) {
    var t;
    const n = (t = this.availableChains) === null || t === void 0 ? void 0 : t.find((s) => s.id === e);
    return n ? (n === this._activeChain || (this._activeChain = n, this.storeItemToStorage(Mh, n), this.updateListener.onChainUpdate({
      chain: n,
      source: "wallet"
    })), !0) : !1;
  }
  updateAvailableChains(e) {
    if (!e || Object.keys(e).length === 0)
      return;
    const t = Object.entries(e).map(([n, s]) => ({ id: Number(n), rpcUrl: s }));
    this.availableChains = t, this.storeItemToStorage(Dh, t), this.switchChain(this._activeChain.id);
  }
  updateWalletCapabilities(e) {
    this._walletCapabilities = e, this.storeItemToStorage(Uh, e);
  }
  storeItemToStorage(e, t) {
    this.storage.setItem(e, JSON.stringify(t));
  }
  loadItemFromStorage(e) {
    const t = this.storage.getItem(e);
    return t ? JSON.parse(t) : void 0;
  }
  clear() {
    this.storage.clear();
  }
}
fc.SCWStateManager = lb;
Object.defineProperty(hc, "__esModule", { value: !0 });
hc.SCWSigner = void 0;
const ub = dc, hb = fc, na = Xt, Fh = L, ra = de;
class db {
  constructor(e) {
    this.metadata = e.metadata, this.communicator = e.communicator, this.keyManager = new ub.SCWKeyManager(), this.stateManager = new hb.SCWStateManager({
      appChainIds: this.metadata.appChainIds,
      updateListener: e.updateListener
    }), this.handshake = this.handshake.bind(this), this.request = this.request.bind(this), this.createRequestMessage = this.createRequestMessage.bind(this), this.decryptResponseMessage = this.decryptResponseMessage.bind(this);
  }
  async handshake() {
    const e = await this.createRequestMessage({
      handshake: {
        method: "eth_requestAccounts",
        params: this.metadata
      }
    }), t = await this.communicator.postRequestAndWaitForResponse(e);
    if ("failure" in t.content)
      throw t.content.failure;
    const n = await (0, ra.importKeyFromHexString)("public", t.sender);
    await this.keyManager.setPeerPublicKey(n);
    const s = await this.decryptResponseMessage(t);
    this.updateInternalState({ method: "eth_requestAccounts" }, s);
    const i = s.result;
    if ("error" in i)
      throw i.error;
    return this.stateManager.accounts;
  }
  async request(e) {
    const t = this.tryLocalHandling(e);
    if (t !== void 0) {
      if (t instanceof Error)
        throw t;
      return t;
    }
    await this.communicator.waitForPopupLoaded();
    const n = await this.sendEncryptedRequest(e), s = await this.decryptResponseMessage(n);
    this.updateInternalState(e, s);
    const i = s.result;
    if ("error" in i)
      throw i.error;
    return i.value;
  }
  async disconnect() {
    this.stateManager.clear(), await this.keyManager.clear();
  }
  tryLocalHandling(e) {
    var t;
    switch (e.method) {
      case "wallet_switchEthereumChain": {
        const n = e.params;
        if (!n || !(!((t = n[0]) === null || t === void 0) && t.chainId))
          throw na.standardErrors.rpc.invalidParams();
        const s = (0, Fh.ensureIntNumber)(n[0].chainId);
        return this.stateManager.switchChain(s) ? null : void 0;
      }
      case "wallet_getCapabilities": {
        const n = this.stateManager.walletCapabilities;
        if (!n)
          throw na.standardErrors.provider.unauthorized("No wallet capabilities found, please disconnect and reconnect");
        return n;
      }
      default:
        return;
    }
  }
  async sendEncryptedRequest(e) {
    const t = await this.keyManager.getSharedSecret();
    if (!t)
      throw na.standardErrors.provider.unauthorized("No valid session found, try requestAccounts before other methods");
    const n = await (0, ra.encryptContent)({
      action: e,
      chainId: this.stateManager.activeChain.id
    }, t), s = await this.createRequestMessage({ encrypted: n });
    return this.communicator.postRequestAndWaitForResponse(s);
  }
  async createRequestMessage(e) {
    const t = await (0, ra.exportKeyToHexString)("public", await this.keyManager.getOwnPublicKey());
    return {
      id: crypto.randomUUID(),
      sender: t,
      content: e,
      timestamp: /* @__PURE__ */ new Date()
    };
  }
  async decryptResponseMessage(e) {
    const t = e.content;
    if ("failure" in t)
      throw t.failure;
    const n = await this.keyManager.getSharedSecret();
    if (!n)
      throw na.standardErrors.provider.unauthorized("Invalid session");
    return (0, ra.decryptContent)(t.encrypted, n);
  }
  updateInternalState(e, t) {
    var n, s;
    const i = (n = t.data) === null || n === void 0 ? void 0 : n.chains;
    i && this.stateManager.updateAvailableChains(i);
    const o = (s = t.data) === null || s === void 0 ? void 0 : s.capabilities;
    o && this.stateManager.updateWalletCapabilities(o);
    const a = t.result;
    if (!("error" in a))
      switch (e.method) {
        case "eth_requestAccounts": {
          const c = a.value;
          this.stateManager.updateAccounts(c);
          break;
        }
        case "wallet_switchEthereumChain": {
          if (a.value !== null)
            return;
          const c = e.params, l = (0, Fh.ensureIntNumber)(c[0].chainId);
          this.stateManager.switchChain(l);
          break;
        }
      }
  }
}
hc.SCWSigner = db;
var pc = {};
const fb = Gp;
function yp(r) {
  return ne.allocUnsafe(r).fill(0);
}
function pb(r) {
  return r.toString(2).length;
}
function wp(r, e) {
  let t = r.toString(16);
  t.length % 2 !== 0 && (t = "0" + t);
  const n = t.match(/.{1,2}/g).map((s) => parseInt(s, 16));
  for (; n.length < e; )
    n.unshift(0);
  return ne.from(n);
}
function gb(r, e) {
  const t = r < 0n;
  let n;
  if (t) {
    const s = (1n << BigInt(e)) - 1n;
    n = (~r & s) + 1n;
  } else
    n = r;
  return n &= (1n << BigInt(e)) - 1n, n;
}
function bp(r, e, t) {
  const n = yp(e);
  return r = gc(r), t ? r.length < e ? (r.copy(n), n) : r.slice(0, e) : r.length < e ? (r.copy(n, e - r.length), n) : r.slice(-e);
}
function mb(r, e) {
  return bp(r, e, !0);
}
function gc(r) {
  if (!ne.isBuffer(r))
    if (Array.isArray(r))
      r = ne.from(r);
    else if (typeof r == "string")
      Ap(r) ? r = ne.from(bb(Ep(r)), "hex") : r = ne.from(r);
    else if (typeof r == "number")
      r = intToBuffer(r);
    else if (r == null)
      r = ne.allocUnsafe(0);
    else if (typeof r == "bigint")
      r = wp(r);
    else if (r.toArray)
      r = ne.from(r.toArray());
    else
      throw new Error("invalid type");
  return r;
}
function yb(r) {
  return r = gc(r), "0x" + r.toString("hex");
}
function wb(r, e) {
  return r = gc(r), e || (e = 256), fb("keccak" + e).update(r).digest();
}
function bb(r) {
  return r.length % 2 ? "0" + r : r;
}
function Ap(r) {
  return typeof r == "string" && r.match(/^0x[0-9A-Fa-f]*$/);
}
function Ep(r) {
  return typeof r == "string" && r.startsWith("0x") ? r.slice(2) : r;
}
var Cp = {
  zeros: yp,
  setLength: bp,
  setLengthRight: mb,
  isHexString: Ap,
  stripHexPrefix: Ep,
  toBuffer: gc,
  bufferToHex: yb,
  keccak: wb,
  bitLengthFromBigInt: pb,
  bufferBEFromBigInt: wp,
  twosFromBigInt: gb
};
const Be = Cp;
function vp(r) {
  return r.startsWith("int[") ? "int256" + r.slice(3) : r === "int" ? "int256" : r.startsWith("uint[") ? "uint256" + r.slice(4) : r === "uint" ? "uint256" : r.startsWith("fixed[") ? "fixed128x128" + r.slice(5) : r === "fixed" ? "fixed128x128" : r.startsWith("ufixed[") ? "ufixed128x128" + r.slice(6) : r === "ufixed" ? "ufixed128x128" : r;
}
function Ls(r) {
  return parseInt(/^\D+(\d+)$/.exec(r)[1], 10);
}
function Hh(r) {
  var e = /^\D+(\d+)x(\d+)$/.exec(r);
  return [parseInt(e[1], 10), parseInt(e[2], 10)];
}
function Ip(r) {
  var e = r.match(/(.*)\[(.*?)\]$/);
  return e ? e[2] === "" ? "dynamic" : parseInt(e[2], 10) : null;
}
function gr(r) {
  var e = typeof r;
  if (e === "string" || e === "number")
    return BigInt(r);
  if (e === "bigint")
    return r;
  throw new Error("Argument is not a number");
}
function Lt(r, e) {
  var t, n, s, i;
  if (r === "address")
    return Lt("uint160", gr(e));
  if (r === "bool")
    return Lt("uint8", e ? 1 : 0);
  if (r === "string")
    return Lt("bytes", new ne(e, "utf8"));
  if (Eb(r)) {
    if (typeof e.length > "u")
      throw new Error("Not an array?");
    if (t = Ip(r), t !== "dynamic" && t !== 0 && e.length > t)
      throw new Error("Elements exceed array size: " + t);
    s = [], r = r.slice(0, r.lastIndexOf("[")), typeof e == "string" && (e = JSON.parse(e));
    for (i in e)
      s.push(Lt(r, e[i]));
    if (t === "dynamic") {
      var o = Lt("uint256", e.length);
      s.unshift(o);
    }
    return ne.concat(s);
  } else {
    if (r === "bytes")
      return e = new ne(e), s = ne.concat([Lt("uint256", e.length), e]), e.length % 32 !== 0 && (s = ne.concat([s, Be.zeros(32 - e.length % 32)])), s;
    if (r.startsWith("bytes")) {
      if (t = Ls(r), t < 1 || t > 32)
        throw new Error("Invalid bytes<N> width: " + t);
      return Be.setLengthRight(e, 32);
    } else if (r.startsWith("uint")) {
      if (t = Ls(r), t % 8 || t < 8 || t > 256)
        throw new Error("Invalid uint<N> width: " + t);
      n = gr(e);
      const a = Be.bitLengthFromBigInt(n);
      if (a > t)
        throw new Error("Supplied uint exceeds width: " + t + " vs " + a);
      if (n < 0)
        throw new Error("Supplied uint is negative");
      return Be.bufferBEFromBigInt(n, 32);
    } else if (r.startsWith("int")) {
      if (t = Ls(r), t % 8 || t < 8 || t > 256)
        throw new Error("Invalid int<N> width: " + t);
      n = gr(e);
      const a = Be.bitLengthFromBigInt(n);
      if (a > t)
        throw new Error("Supplied int exceeds width: " + t + " vs " + a);
      const c = Be.twosFromBigInt(n, 256);
      return Be.bufferBEFromBigInt(c, 32);
    } else if (r.startsWith("ufixed")) {
      if (t = Hh(r), n = gr(e), n < 0)
        throw new Error("Supplied ufixed is negative");
      return Lt("uint256", n * BigInt(2) ** BigInt(t[1]));
    } else if (r.startsWith("fixed"))
      return t = Hh(r), Lt("int256", gr(e) * BigInt(2) ** BigInt(t[1]));
  }
  throw new Error("Unsupported or invalid type: " + r);
}
function Ab(r) {
  return r === "string" || r === "bytes" || Ip(r) === "dynamic";
}
function Eb(r) {
  return r.lastIndexOf("]") === r.length - 1;
}
function Cb(r, e) {
  var t = [], n = [], s = 32 * r.length;
  for (var i in r) {
    var o = vp(r[i]), a = e[i], c = Lt(o, a);
    Ab(o) ? (t.push(Lt("uint256", s)), n.push(c), s += c.length) : t.push(c);
  }
  return ne.concat(t.concat(n));
}
function Np(r, e) {
  if (r.length !== e.length)
    throw new Error("Number of types are not matching the values");
  for (var t, n, s = [], i = 0; i < r.length; i++) {
    var o = vp(r[i]), a = e[i];
    if (o === "bytes")
      s.push(a);
    else if (o === "string")
      s.push(new ne(a, "utf8"));
    else if (o === "bool")
      s.push(new ne(a ? "01" : "00", "hex"));
    else if (o === "address")
      s.push(Be.setLength(a, 20));
    else if (o.startsWith("bytes")) {
      if (t = Ls(o), t < 1 || t > 32)
        throw new Error("Invalid bytes<N> width: " + t);
      s.push(Be.setLengthRight(a, t));
    } else if (o.startsWith("uint")) {
      if (t = Ls(o), t % 8 || t < 8 || t > 256)
        throw new Error("Invalid uint<N> width: " + t);
      n = gr(a);
      const c = Be.bitLengthFromBigInt(n);
      if (c > t)
        throw new Error("Supplied uint exceeds width: " + t + " vs " + c);
      s.push(Be.bufferBEFromBigInt(n, t / 8));
    } else if (o.startsWith("int")) {
      if (t = Ls(o), t % 8 || t < 8 || t > 256)
        throw new Error("Invalid int<N> width: " + t);
      n = gr(a);
      const c = Be.bitLengthFromBigInt(n);
      if (c > t)
        throw new Error("Supplied int exceeds width: " + t + " vs " + c);
      const l = Be.twosFromBigInt(n, t);
      s.push(Be.bufferBEFromBigInt(l, t / 8));
    } else
      throw new Error("Unsupported or invalid type: " + o);
  }
  return ne.concat(s);
}
function vb(r, e) {
  return Be.keccak(Np(r, e));
}
var Ib = {
  rawEncode: Cb,
  solidityPack: Np,
  soliditySHA3: vb
};
const pt = Cp, $i = Ib, Sp = {
  type: "object",
  properties: {
    types: {
      type: "object",
      additionalProperties: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            type: { type: "string" }
          },
          required: ["name", "type"]
        }
      }
    },
    primaryType: { type: "string" },
    domain: { type: "object" },
    message: { type: "object" }
  },
  required: ["types", "primaryType", "domain", "message"]
}, $c = {
  /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */
  encodeData(r, e, t, n = !0) {
    const s = ["bytes32"], i = [this.hashType(r, t)];
    if (n) {
      const o = (a, c, l) => {
        if (t[c] !== void 0)
          return ["bytes32", l == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : pt.keccak(this.encodeData(c, l, t, n))];
        if (l === void 0)
          throw new Error(`missing value for field ${a} of type ${c}`);
        if (c === "bytes")
          return ["bytes32", pt.keccak(l)];
        if (c === "string")
          return typeof l == "string" && (l = ne.from(l, "utf8")), ["bytes32", pt.keccak(l)];
        if (c.lastIndexOf("]") === c.length - 1) {
          const h = c.slice(0, c.lastIndexOf("[")), d = l.map((f) => o(a, h, f));
          return ["bytes32", pt.keccak($i.rawEncode(
            d.map(([f]) => f),
            d.map(([, f]) => f)
          ))];
        }
        return [c, l];
      };
      for (const a of t[r]) {
        const [c, l] = o(a.name, a.type, e[a.name]);
        s.push(c), i.push(l);
      }
    } else
      for (const o of t[r]) {
        let a = e[o.name];
        if (a !== void 0)
          if (o.type === "bytes")
            s.push("bytes32"), a = pt.keccak(a), i.push(a);
          else if (o.type === "string")
            s.push("bytes32"), typeof a == "string" && (a = ne.from(a, "utf8")), a = pt.keccak(a), i.push(a);
          else if (t[o.type] !== void 0)
            s.push("bytes32"), a = pt.keccak(this.encodeData(o.type, a, t, n)), i.push(a);
          else {
            if (o.type.lastIndexOf("]") === o.type.length - 1)
              throw new Error("Arrays currently unimplemented in encodeData");
            s.push(o.type), i.push(a);
          }
      }
    return $i.rawEncode(s, i);
  },
  /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */
  encodeType(r, e) {
    let t = "", n = this.findTypeDependencies(r, e).filter((s) => s !== r);
    n = [r].concat(n.sort());
    for (const s of n) {
      if (!e[s])
        throw new Error("No type definition specified: " + s);
      t += s + "(" + e[s].map(({ name: o, type: a }) => a + " " + o).join(",") + ")";
    }
    return t;
  },
  /**
   * Finds all types within a type definition object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */
  findTypeDependencies(r, e, t = []) {
    if (r = r.match(/^\w*/)[0], t.includes(r) || e[r] === void 0)
      return t;
    t.push(r);
    for (const n of e[r])
      for (const s of this.findTypeDependencies(n.type, e, t))
        !t.includes(s) && t.push(s);
    return t;
  },
  /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {Buffer} - Hash of an object
   */
  hashStruct(r, e, t, n = !0) {
    return pt.keccak(this.encodeData(r, e, t, n));
  },
  /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */
  hashType(r, e) {
    return pt.keccak(this.encodeType(r, e));
  },
  /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */
  sanitizeData(r) {
    const e = {};
    for (const t in Sp.properties)
      r[t] && (e[t] = r[t]);
    return e.types && (e.types = Object.assign({ EIP712Domain: [] }, e.types)), e;
  },
  /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */
  hash(r, e = !0) {
    const t = this.sanitizeData(r), n = [ne.from("1901", "hex")];
    return n.push(this.hashStruct("EIP712Domain", t.domain, t.types, e)), t.primaryType !== "EIP712Domain" && n.push(this.hashStruct(t.primaryType, t.message, t.types, e)), pt.keccak(ne.concat(n));
  }
};
var Nb = {
  TYPED_MESSAGE_SCHEMA: Sp,
  TypedDataUtils: $c,
  hashForSignTypedDataLegacy: function(r) {
    return Sb(r.data);
  },
  hashForSignTypedData_v3: function(r) {
    return $c.hash(r.data, !1);
  },
  hashForSignTypedData_v4: function(r) {
    return $c.hash(r.data);
  }
};
function Sb(r) {
  const e = new Error("Expect argument to be non-empty array");
  if (typeof r != "object" || !r.length)
    throw e;
  const t = r.map(function(i) {
    return i.type === "bytes" ? pt.toBuffer(i.value) : i.value;
  }), n = r.map(function(i) {
    return i.type;
  }), s = r.map(function(i) {
    if (!i.name)
      throw e;
    return i.type + " " + i.name;
  });
  return $i.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      $i.soliditySHA3(new Array(r.length).fill("string"), s),
      $i.soliditySHA3(n, t)
    ]
  );
}
var Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.APP_VERSION_KEY = Zt.LOCAL_STORAGE_ADDRESSES_KEY = Zt.WALLET_USER_NAME_KEY = void 0;
Zt.WALLET_USER_NAME_KEY = "walletUsername";
Zt.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
Zt.APP_VERSION_KEY = "AppVersion";
var Vo = {};
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.RelayEventManager = void 0;
const kb = L;
class xb {
  constructor() {
    this._nextRequestId = 0, this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const e = this._nextRequestId, t = (0, kb.prepend0x)(e.toString(16));
    return this.callbacks.get(t) && this.callbacks.delete(t), e;
  }
}
Vo.RelayEventManager = xb;
var mc = {}, yc = {}, wc = {};
Object.defineProperty(wc, "__esModule", { value: !0 });
wc.WalletLinkCipher = void 0;
const sa = L;
class Pb {
  // @param secret hex representation of 32-byte secret
  constructor(e) {
    this.secret = e;
  }
  /**
   *
   * @param plainText string to be encrypted
   * returns hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
   * encrypted plainText.
   */
  async encrypt(e) {
    const t = this.secret;
    if (t.length !== 64)
      throw Error("secret must be 256 bits");
    const n = crypto.getRandomValues(new Uint8Array(12)), s = await crypto.subtle.importKey("raw", (0, sa.hexStringToUint8Array)(t), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), i = new TextEncoder(), o = await window.crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: n
    }, s, i.encode(e)), a = 16, c = o.slice(o.byteLength - a), l = o.slice(0, o.byteLength - a), h = new Uint8Array(c), d = new Uint8Array(l), f = new Uint8Array([...n, ...h, ...d]);
    return (0, sa.uint8ArrayToHex)(f);
  }
  /**
   *
   * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
   */
  async decrypt(e) {
    const t = this.secret;
    if (t.length !== 64)
      throw Error("secret must be 256 bits");
    return new Promise((n, s) => {
      (async function() {
        const i = await crypto.subtle.importKey("raw", (0, sa.hexStringToUint8Array)(t), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), o = (0, sa.hexStringToUint8Array)(e), a = o.slice(0, 12), c = o.slice(12, 28), l = o.slice(28), h = new Uint8Array([...l, ...c]), d = {
          name: "AES-GCM",
          iv: new Uint8Array(a)
        };
        try {
          const f = await window.crypto.subtle.decrypt(d, i, h), g = new TextDecoder();
          n(g.decode(f));
        } catch (f) {
          s(f);
        }
      })();
    });
  }
}
wc.WalletLinkCipher = Pb;
var bc = {};
Object.defineProperty(bc, "__esModule", { value: !0 });
bc.WalletLinkHTTP = void 0;
class Rb {
  constructor(e, t, n) {
    this.linkAPIUrl = e, this.sessionId = t;
    const s = `${t}:${n}`;
    this.auth = `Basic ${btoa(s)}`;
  }
  // mark unseen events as seen
  async markUnseenEventsAsSeen(e) {
    return Promise.all(e.map((t) => fetch(`${this.linkAPIUrl}/events/${t.eventId}/seen`, {
      method: "POST",
      headers: {
        Authorization: this.auth
      }
    }))).catch((t) => console.error("Unabled to mark event as failed:", t));
  }
  async fetchUnseenEvents() {
    var e;
    const t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: {
        Authorization: this.auth
      }
    });
    if (t.ok) {
      const { events: n, error: s } = await t.json();
      if (s)
        throw new Error(`Check unseen events failed: ${s}`);
      const i = (e = n == null ? void 0 : n.filter((o) => o.event === "Web3Response").map((o) => ({
        type: "Event",
        sessionId: this.sessionId,
        eventId: o.id,
        event: o.event,
        data: o.data
      }))) !== null && e !== void 0 ? e : [];
      return this.markUnseenEventsAsSeen(i), i;
    }
    throw new Error(`Check unseen events failed: ${t.status}`);
  }
}
bc.WalletLinkHTTP = Rb;
var Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.WalletLinkWebSocket = Bi.ConnectionState = void 0;
var Ns;
(function(r) {
  r[r.DISCONNECTED = 0] = "DISCONNECTED", r[r.CONNECTING = 1] = "CONNECTING", r[r.CONNECTED = 2] = "CONNECTED";
})(Ns || (Bi.ConnectionState = Ns = {}));
class Ob {
  setConnectionStateListener(e) {
    this.connectionStateListener = e;
  }
  setIncomingDataListener(e) {
    this.incomingDataListener = e;
  }
  /**
   * Constructor
   * @param url WebSocket server URL
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor(e, t = WebSocket) {
    this.WebSocketClass = t, this.webSocket = null, this.pendingData = [], this.url = e.replace(/^http/, "ws");
  }
  /**
   * Make a websocket connection
   * @returns a Promise that resolves when connected
   */
  async connect() {
    if (this.webSocket)
      throw new Error("webSocket object is not null");
    return new Promise((e, t) => {
      var n;
      let s;
      try {
        this.webSocket = s = new this.WebSocketClass(this.url);
      } catch (i) {
        t(i);
        return;
      }
      (n = this.connectionStateListener) === null || n === void 0 || n.call(this, Ns.CONNECTING), s.onclose = (i) => {
        var o;
        this.clearWebSocket(), t(new Error(`websocket error ${i.code}: ${i.reason}`)), (o = this.connectionStateListener) === null || o === void 0 || o.call(this, Ns.DISCONNECTED);
      }, s.onopen = (i) => {
        var o;
        e(), (o = this.connectionStateListener) === null || o === void 0 || o.call(this, Ns.CONNECTED), this.pendingData.length > 0 && ([...this.pendingData].forEach((c) => this.sendData(c)), this.pendingData = []);
      }, s.onmessage = (i) => {
        var o, a;
        if (i.data === "h")
          (o = this.incomingDataListener) === null || o === void 0 || o.call(this, {
            type: "Heartbeat"
          });
        else
          try {
            const c = JSON.parse(i.data);
            (a = this.incomingDataListener) === null || a === void 0 || a.call(this, c);
          } catch {
          }
      };
    });
  }
  /**
   * Disconnect from server
   */
  disconnect() {
    var e;
    const { webSocket: t } = this;
    if (t) {
      this.clearWebSocket(), (e = this.connectionStateListener) === null || e === void 0 || e.call(this, Ns.DISCONNECTED), this.connectionStateListener = void 0, this.incomingDataListener = void 0;
      try {
        t.close();
      } catch {
      }
    }
  }
  /**
   * Send data to server
   * @param data text to send
   */
  sendData(e) {
    const { webSocket: t } = this;
    if (!t) {
      this.pendingData.push(e), this.connect();
      return;
    }
    t.send(e);
  }
  clearWebSocket() {
    const { webSocket: e } = this;
    e && (this.webSocket = null, e.onclose = null, e.onerror = null, e.onmessage = null, e.onopen = null);
  }
}
Bi.WalletLinkWebSocket = Ob;
Object.defineProperty(yc, "__esModule", { value: !0 });
yc.WalletLinkConnection = void 0;
const Gh = Zt, Tb = wc, _b = bc, ia = Bi, gs = ke, Kh = 1e4, Bb = 6e4;
class Lb {
  /**
   * Constructor
   * @param session Session
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param listener WalletLinkConnectionUpdateListener
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor({ session: e, linkAPIUrl: t, listener: n, WebSocketClass: s = WebSocket }) {
    this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, gs.IntNumber)(1), this._connected = !1, this._linked = !1, this.shouldFetchUnseenEventsOnConnect = !1, this.requestResolutions = /* @__PURE__ */ new Map(), this.handleSessionMetadataUpdated = (o) => {
      if (!o)
        return;
      (/* @__PURE__ */ new Map([
        ["__destroyed", this.handleDestroyed],
        ["EthereumAddress", this.handleAccountUpdated],
        ["WalletUsername", this.handleWalletUsernameUpdated],
        ["AppVersion", this.handleAppVersionUpdated],
        [
          "ChainId",
          (c) => o.JsonRpcUrl && this.handleChainUpdated(c, o.JsonRpcUrl)
        ]
      ])).forEach((c, l) => {
        const h = o[l];
        h !== void 0 && c(h);
      });
    }, this.handleDestroyed = (o) => {
      var a;
      o === "1" && ((a = this.listener) === null || a === void 0 || a.resetAndReload());
    }, this.handleAccountUpdated = async (o) => {
      var a;
      {
        const c = await this.cipher.decrypt(o);
        (a = this.listener) === null || a === void 0 || a.accountUpdated(c);
      }
    }, this.handleMetadataUpdated = async (o, a) => {
      var c;
      {
        const l = await this.cipher.decrypt(a);
        (c = this.listener) === null || c === void 0 || c.metadataUpdated(o, l);
      }
    }, this.handleWalletUsernameUpdated = async (o) => {
      this.handleMetadataUpdated(Gh.WALLET_USER_NAME_KEY, o);
    }, this.handleAppVersionUpdated = async (o) => {
      this.handleMetadataUpdated(Gh.APP_VERSION_KEY, o);
    }, this.handleChainUpdated = async (o, a) => {
      var c;
      {
        const l = await this.cipher.decrypt(o), h = await this.cipher.decrypt(a);
        (c = this.listener) === null || c === void 0 || c.chainUpdated(l, h);
      }
    }, this.session = e, this.cipher = new Tb.WalletLinkCipher(e.secret), this.listener = n;
    const i = new ia.WalletLinkWebSocket(`${t}/rpc`, s);
    i.setConnectionStateListener(async (o) => {
      let a = !1;
      switch (o) {
        case ia.ConnectionState.DISCONNECTED:
          if (!this.destroyed) {
            const c = async () => {
              await new Promise((l) => setTimeout(l, 5e3)), this.destroyed || i.connect().catch(() => {
                c();
              });
            };
            c();
          }
          break;
        case ia.ConnectionState.CONNECTED:
          try {
            await this.authenticate(), this.sendIsLinked(), this.sendGetSessionConfig(), a = !0;
          } catch {
          }
          this.updateLastHeartbeat(), setInterval(() => {
            this.heartbeat();
          }, Kh), this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
          break;
        case ia.ConnectionState.CONNECTING:
          break;
      }
      this.connected !== a && (this.connected = a);
    }), i.setIncomingDataListener((o) => {
      var a;
      switch (o.type) {
        case "Heartbeat":
          this.updateLastHeartbeat();
          return;
        case "IsLinkedOK":
        case "Linked": {
          const c = o.type === "IsLinkedOK" ? o.linked : void 0;
          this.linked = c || o.onlineGuests > 0;
          break;
        }
        case "GetSessionConfigOK":
        case "SessionConfigUpdated": {
          this.handleSessionMetadataUpdated(o.metadata);
          break;
        }
        case "Event": {
          this.handleIncomingEvent(o);
          break;
        }
      }
      o.id !== void 0 && ((a = this.requestResolutions.get(o.id)) === null || a === void 0 || a(o));
    }), this.ws = i, this.http = new _b.WalletLinkHTTP(t, e.id, e.key);
  }
  /**
   * Make a connection to the server
   */
  connect() {
    if (this.destroyed)
      throw new Error("instance is destroyed");
    this.ws.connect();
  }
  /**
   * Terminate connection, and mark as destroyed. To reconnect, create a new
   * instance of WalletSDKConnection
   */
  destroy() {
    this.destroyed = !0, this.ws.disconnect(), this.listener = void 0;
  }
  get isDestroyed() {
    return this.destroyed;
  }
  get connected() {
    return this._connected;
  }
  set connected(e) {
    var t;
    this._connected = e, e && ((t = this.onceConnected) === null || t === void 0 || t.call(this));
  }
  setOnceConnected(e) {
    return new Promise((t) => {
      this.connected ? e().then(t) : this.onceConnected = () => {
        e().then(t), this.onceConnected = void 0;
      };
    });
  }
  get linked() {
    return this._linked;
  }
  set linked(e) {
    var t, n;
    this._linked = e, e && ((t = this.onceLinked) === null || t === void 0 || t.call(this)), (n = this.listener) === null || n === void 0 || n.linkedUpdated(e);
  }
  setOnceLinked(e) {
    return new Promise((t) => {
      this.linked ? e().then(t) : this.onceLinked = () => {
        e().then(t), this.onceLinked = void 0;
      };
    });
  }
  async handleIncomingEvent(e) {
    var t;
    if (!(e.type !== "Event" || e.event !== "Web3Response")) {
      const n = await this.cipher.decrypt(e.data), s = JSON.parse(n);
      if (s.type !== "WEB3_RESPONSE")
        return;
      (t = this.listener) === null || t === void 0 || t.handleWeb3ResponseMessage(s);
    }
  }
  async checkUnseenEvents() {
    if (!this.connected) {
      this.shouldFetchUnseenEventsOnConnect = !0;
      return;
    }
    await new Promise((e) => setTimeout(e, 250));
    try {
      await this.fetchUnseenEventsAPI();
    } catch (e) {
      console.error("Unable to check for unseen events", e);
    }
  }
  async fetchUnseenEventsAPI() {
    this.shouldFetchUnseenEventsOnConnect = !1, (await this.http.fetchUnseenEvents()).forEach((t) => this.handleIncomingEvent(t));
  }
  /**
   * Set session metadata in SessionConfig object
   * @param key
   * @param value
   * @returns a Promise that completes when successful
   */
  async setSessionMetadata(e, t) {
    const n = {
      type: "SetSessionConfig",
      id: (0, gs.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      metadata: { [e]: t }
    };
    return this.setOnceConnected(async () => {
      const s = await this.makeRequest(n);
      if (s.type === "Fail")
        throw new Error(s.error || "failed to set session metadata");
    });
  }
  /**
   * Publish an event and emit event ID when successful
   * @param event event name
   * @param unencryptedData unencrypted event data
   * @param callWebhook whether the webhook should be invoked
   * @returns a Promise that emits event ID when successful
   */
  async publishEvent(e, t, n = !1) {
    const s = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), { origin: location.origin, relaySource: "coinbaseWalletExtension" in window && window.coinbaseWalletExtension ? "injected_sdk" : "sdk" }))), i = {
      type: "PublishEvent",
      id: (0, gs.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      event: e,
      data: s,
      callWebhook: n
    };
    return this.setOnceLinked(async () => {
      const o = await this.makeRequest(i);
      if (o.type === "Fail")
        throw new Error(o.error || "failed to publish event");
      return o.eventId;
    });
  }
  sendData(e) {
    this.ws.sendData(JSON.stringify(e));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > Kh * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch {
    }
  }
  async makeRequest(e, t = Bb) {
    const n = e.id;
    this.sendData(e);
    let s;
    return Promise.race([
      new Promise((i, o) => {
        s = window.setTimeout(() => {
          o(new Error(`request ${n} timed out`));
        }, t);
      }),
      new Promise((i) => {
        this.requestResolutions.set(n, (o) => {
          clearTimeout(s), i(o), this.requestResolutions.delete(n);
        });
      })
    ]);
  }
  async authenticate() {
    const e = {
      type: "HostSession",
      id: (0, gs.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      sessionKey: this.session.key
    }, t = await this.makeRequest(e);
    if (t.type === "Fail")
      throw new Error(t.error || "failed to authenticate");
  }
  sendIsLinked() {
    const e = {
      type: "IsLinked",
      id: (0, gs.IntNumber)(this.nextReqId++),
      sessionId: this.session.id
    };
    this.sendData(e);
  }
  sendGetSessionConfig() {
    const e = {
      type: "GetSessionConfig",
      id: (0, gs.IntNumber)(this.nextReqId++),
      sessionId: this.session.id
    };
    this.sendData(e);
  }
}
yc.WalletLinkConnection = Lb;
var Ac = {};
Object.defineProperty(Ac, "__esModule", { value: !0 });
Ac.WalletLinkSession = void 0;
const Mb = Lp, jh = L, Vh = "session:id", Wh = "session:secret", Qh = "session:linked";
class cu {
  constructor(e, t, n, s) {
    this._storage = e, this._id = t || (0, jh.randomBytesHex)(16), this._secret = n || (0, jh.randomBytesHex)(32), this._key = new Mb.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!s;
  }
  static load(e) {
    const t = e.getItem(Vh), n = e.getItem(Qh), s = e.getItem(Wh);
    return t && s ? new cu(e, t, s, n === "1") : null;
  }
  get id() {
    return this._id;
  }
  get secret() {
    return this._secret;
  }
  get key() {
    return this._key;
  }
  get linked() {
    return this._linked;
  }
  set linked(e) {
    this._linked = e, this.persistLinked();
  }
  save() {
    return this._storage.setItem(Vh, this._id), this._storage.setItem(Wh, this._secret), this.persistLinked(), this;
  }
  persistLinked() {
    this._storage.setItem(Qh, this._linked ? "1" : "0");
  }
}
Ac.WalletLinkSession = cu;
var et = {};
Object.defineProperty(et, "__esModule", { value: !0 });
et.isDarkMode = et.isMobileWeb = et.getLocation = et.createQrUrl = void 0;
function Db(r, e, t, n, s, i) {
  const o = n ? "parent-id" : "id", a = new URLSearchParams({
    [o]: r,
    secret: e,
    server: t,
    v: s,
    chainId: i.toString()
  }).toString();
  return `${t}/#/link?${a}`;
}
et.createQrUrl = Db;
function Ub() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
function Fb() {
  try {
    return Ub() && window.top ? window.top.location : window.location;
  } catch {
    return window.location;
  }
}
et.getLocation = Fb;
function Hb() {
  var r;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((r = window == null ? void 0 : window.navigator) === null || r === void 0 ? void 0 : r.userAgent);
}
et.isMobileWeb = Hb;
function Gb() {
  var r, e;
  return (e = (r = window == null ? void 0 : window.matchMedia) === null || r === void 0 ? void 0 : r.call(window, "(prefers-color-scheme: dark)").matches) !== null && e !== void 0 ? e : !1;
}
et.isDarkMode = Gb;
var Ec = {}, Wo = {}, lu = {};
Object.defineProperty(lu, "__esModule", { value: !0 });
lu.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var Kb = dt && dt.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.injectCssReset = void 0;
const jb = Kb(lu);
function Vb() {
  const r = document.createElement("style");
  r.type = "text/css", r.appendChild(document.createTextNode(jb.default)), document.documentElement.appendChild(r);
}
Wo.injectCssReset = Vb;
var uu = {}, hu = {};
Object.defineProperty(hu, "__esModule", { value: !0 });
hu.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function(r) {
  var e = dt && dt.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), r.SnackbarInstance = r.SnackbarContainer = r.Snackbar = void 0;
  const t = e(rd), n = sd, s = Kp, i = et, o = e(hu), a = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+", c = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
  class l {
    constructor() {
      this.items = /* @__PURE__ */ new Map(), this.nextItemKey = 0, this.root = null, this.darkMode = (0, i.isDarkMode)();
    }
    attach(g) {
      this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", g.appendChild(this.root), this.render();
    }
    presentItem(g) {
      const w = this.nextItemKey++;
      return this.items.set(w, g), this.render(), () => {
        this.items.delete(w), this.render();
      };
    }
    clear() {
      this.items.clear(), this.render();
    }
    render() {
      this.root && (0, n.render)((0, n.h)(
        "div",
        null,
        (0, n.h)(r.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([g, w]) => (0, n.h)(r.SnackbarInstance, Object.assign({}, w, { key: g }))))
      ), this.root);
    }
  }
  r.Snackbar = l;
  const h = (f) => (0, n.h)(
    "div",
    { class: (0, t.default)("-cbwsdk-snackbar-container") },
    (0, n.h)("style", null, o.default),
    (0, n.h)("div", { class: "-cbwsdk-snackbar" }, f.children)
  );
  r.SnackbarContainer = h;
  const d = ({ autoExpand: f, message: g, menuItems: w }) => {
    const [m, E] = (0, s.useState)(!0), [C, S] = (0, s.useState)(f ?? !1);
    (0, s.useEffect)(() => {
      const _ = [
        window.setTimeout(() => {
          E(!1);
        }, 1),
        window.setTimeout(() => {
          S(!0);
        }, 1e4)
      ];
      return () => {
        _.forEach(window.clearTimeout);
      };
    });
    const N = () => {
      S(!C);
    };
    return (0, n.h)(
      "div",
      { class: (0, t.default)("-cbwsdk-snackbar-instance", m && "-cbwsdk-snackbar-instance-hidden", C && "-cbwsdk-snackbar-instance-expanded") },
      (0, n.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: N },
        (0, n.h)("img", { src: a, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
        " ",
        (0, n.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, g),
        (0, n.h)(
          "div",
          { class: "-gear-container" },
          !C && (0, n.h)(
            "svg",
            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, n.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
          ),
          (0, n.h)("img", { src: c, class: "-gear-icon", title: "Expand" })
        )
      ),
      w && w.length > 0 && (0, n.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, w.map((_, x) => (0, n.h)(
        "div",
        { class: (0, t.default)("-cbwsdk-snackbar-instance-menu-item", _.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: _.onClick, key: x },
        (0, n.h)(
          "svg",
          { width: _.svgWidth, height: _.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          (0, n.h)("path", { "fill-rule": _.defaultFillRule, "clip-rule": _.defaultClipRule, d: _.path, fill: "#AAAAAA" })
        ),
        (0, n.h)("span", { class: (0, t.default)("-cbwsdk-snackbar-instance-menu-item-info", _.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, _.info)
      )))
    );
  };
  r.SnackbarInstance = d;
})(uu);
Object.defineProperty(Ec, "__esModule", { value: !0 });
Ec.WalletLinkRelayUI = void 0;
const Wb = Wo, Qb = uu;
class zb {
  constructor() {
    this.attached = !1, this.snackbar = new Qb.Snackbar();
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    const e = document.documentElement, t = document.createElement("div");
    t.className = "-cbwsdk-css-reset", e.appendChild(t), this.snackbar.attach(t), this.attached = !0, (0, Wb.injectCssReset)();
  }
  showConnecting(e) {
    let t;
    return e.isUnlinkedErrorState ? t = {
      autoExpand: !0,
      message: "Connection lost",
      menuItems: [
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: e.onResetConnection
        }
      ]
    } : t = {
      message: "Confirm on phone",
      menuItems: [
        {
          isRed: !0,
          info: "Cancel transaction",
          svgWidth: "11",
          svgHeight: "11",
          path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
          defaultFillRule: "inherit",
          defaultClipRule: "inherit",
          onClick: e.onCancel
        },
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: e.onResetConnection
        }
      ]
    }, this.snackbar.presentItem(t);
  }
}
Ec.WalletLinkRelayUI = zb;
var Cc = {}, vc = {}, du = {};
Object.defineProperty(du, "__esModule", { value: !0 });
du.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}";
var kp = dt && dt.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(vc, "__esModule", { value: !0 });
vc.RedirectDialog = void 0;
const Jb = kp(rd), Mt = sd, qb = Wo, Zb = uu, $b = et, Yb = kp(du);
class Xb {
  constructor() {
    this.root = null, this.darkMode = (0, $b.isDarkMode)();
  }
  attach() {
    const e = document.documentElement;
    this.root = document.createElement("div"), this.root.className = "-cbwsdk-css-reset", e.appendChild(this.root), (0, qb.injectCssReset)();
  }
  present(e) {
    this.render(e);
  }
  clear() {
    this.render(null);
  }
  render(e) {
    this.root && ((0, Mt.render)(null, this.root), e && (0, Mt.render)((0, Mt.h)(e1, Object.assign({}, e, { onDismiss: () => {
      this.clear();
    }, darkMode: this.darkMode })), this.root));
  }
}
vc.RedirectDialog = Xb;
const e1 = ({ title: r, buttonText: e, darkMode: t, onButtonClick: n, onDismiss: s }) => {
  const i = t ? "dark" : "light";
  return (0, Mt.h)(
    Zb.SnackbarContainer,
    { darkMode: t },
    (0, Mt.h)(
      "div",
      { class: "-cbwsdk-redirect-dialog" },
      (0, Mt.h)("style", null, Yb.default),
      (0, Mt.h)("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: s }),
      (0, Mt.h)(
        "div",
        { class: (0, Jb.default)("-cbwsdk-redirect-dialog-box", i) },
        (0, Mt.h)("p", null, r),
        (0, Mt.h)("button", { onClick: n }, e)
      )
    )
  );
};
var $t = {};
Object.defineProperty($t, "__esModule", { value: !0 });
$t.CBW_MOBILE_DEEPLINK_URL = $t.WALLETLINK_URL = $t.CB_KEYS_URL = void 0;
$t.CB_KEYS_URL = "https://keys.coinbase.com/connect";
$t.WALLETLINK_URL = "https://www.walletlink.org";
$t.CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink";
Object.defineProperty(Cc, "__esModule", { value: !0 });
Cc.WLMobileRelayUI = void 0;
const t1 = vc, n1 = et, r1 = $t;
class s1 {
  constructor() {
    this.attached = !1, this.redirectDialog = new t1.RedirectDialog();
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    this.redirectDialog.attach(), this.attached = !0;
  }
  redirectToCoinbaseWallet(e) {
    const t = new URL(r1.CBW_MOBILE_DEEPLINK_URL);
    t.searchParams.append("redirect_url", (0, n1.getLocation)().href), e && t.searchParams.append("wl_url", e);
    const n = document.createElement("a");
    n.target = "cbw-opener", n.href = t.href, n.rel = "noreferrer noopener", n.click();
  }
  openCoinbaseWalletDeeplink(e) {
    this.redirectDialog.present({
      title: "Redirecting to Coinbase Wallet...",
      buttonText: "Open",
      onButtonClick: () => {
        this.redirectToCoinbaseWallet(e);
      }
    }), setTimeout(() => {
      this.redirectToCoinbaseWallet(e);
    }, 99);
  }
  showConnecting(e) {
    return () => {
      this.redirectDialog.clear();
    };
  }
}
Cc.WLMobileRelayUI = s1;
Object.defineProperty(mc, "__esModule", { value: !0 });
mc.WalletLinkRelay = void 0;
const i1 = yc, o1 = Zt, a1 = Vo, Yc = Ac, ms = Di, c1 = et, l1 = Ec, zh = Cc, u1 = Xt, oe = L, h1 = en;
class cn {
  constructor(e) {
    this.accountsCallback = null, this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }, this.chainCallback = null, this.dappDefaultChain = 1, this.isMobileWeb = (0, c1.isMobileWeb)(), this.appName = "", this.appLogoUrl = null, this.linkedUpdated = (i) => {
      this.isLinked = i;
      const o = this.storage.getItem(o1.LOCAL_STORAGE_ADDRESSES_KEY);
      if (i && (this._session.linked = i), this.isUnlinkedErrorState = !1, o) {
        const a = o.split(" "), c = this.storage.getItem("IsStandaloneSigning") === "true";
        a[0] !== "" && !i && this._session.linked && !c && (this.isUnlinkedErrorState = !0);
      }
    }, this.metadataUpdated = (i, o) => {
      this.storage.setItem(i, o);
    }, this.chainUpdated = (i, o) => {
      this.chainCallbackParams.chainId === i && this.chainCallbackParams.jsonRpcUrl === o || (this.chainCallbackParams = {
        chainId: i,
        jsonRpcUrl: o
      }, this.chainCallback && this.chainCallback(i, o));
    }, this.accountUpdated = (i) => {
      this.accountsCallback && this.accountsCallback([i]), cn.accountRequestCallbackIds.size > 0 && (Array.from(cn.accountRequestCallbackIds.values()).forEach((o) => {
        const a = {
          type: "WEB3_RESPONSE",
          id: o,
          response: {
            method: "requestEthereumAccounts",
            result: [i]
          }
        };
        this.invokeCallback(Object.assign(Object.assign({}, a), { id: o }));
      }), cn.accountRequestCallbackIds.clear());
    }, this.resetAndReload = this.resetAndReload.bind(this), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage;
    const { session: t, ui: n, connection: s } = this.subscribe();
    this._session = t, this.connection = s, this.relayEventManager = new a1.RelayEventManager(), this.ui = n;
  }
  subscribe() {
    const e = Yc.WalletLinkSession.load(this.storage) || new Yc.WalletLinkSession(this.storage).save(), { linkAPIUrl: t } = this, n = new i1.WalletLinkConnection({
      session: e,
      linkAPIUrl: t,
      listener: this
    }), s = this.isMobileWeb ? new zh.WLMobileRelayUI() : new l1.WalletLinkRelayUI();
    return n.connect(), { session: e, ui: s, connection: n };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    Promise.race([
      this.connection.setSessionMetadata("__destroyed", "1"),
      new Promise((e) => setTimeout(() => e(null), 1e3))
    ]).then(() => {
      this.connection.destroy();
      const e = Yc.WalletLinkSession.load(this.storage);
      (e == null ? void 0 : e.id) === this._session.id && h1.ScopedLocalStorage.clearAll(), document.location.reload();
    }).catch((e) => {
    });
  }
  setAppInfo(e, t) {
    this.appName = e, this.appLogoUrl = t;
  }
  getStorageItem(e) {
    return this.storage.getItem(e);
  }
  setStorageItem(e, t) {
    this.storage.setItem(e, t);
  }
  signEthereumMessage(e, t, n, s) {
    return this.sendRequest({
      method: "signEthereumMessage",
      params: {
        message: (0, oe.hexStringFromBuffer)(e, !0),
        address: t,
        addPrefix: n,
        typedDataJson: s || null
      }
    });
  }
  ethereumAddressFromSignedMessage(e, t, n) {
    return this.sendRequest({
      method: "ethereumAddressFromSignedMessage",
      params: {
        message: (0, oe.hexStringFromBuffer)(e, !0),
        signature: (0, oe.hexStringFromBuffer)(t, !0),
        addPrefix: n
      }
    });
  }
  signEthereumTransaction(e) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: (0, oe.bigIntStringFromBigInt)(e.weiValue),
        data: (0, oe.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? (0, oe.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
        maxFeePerGas: e.gasPriceInWei ? (0, oe.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
        maxPriorityFeePerGas: e.gasPriceInWei ? (0, oe.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
        gasLimit: e.gasLimit ? (0, oe.bigIntStringFromBigInt)(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !1
      }
    });
  }
  signAndSubmitEthereumTransaction(e) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: (0, oe.bigIntStringFromBigInt)(e.weiValue),
        data: (0, oe.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? (0, oe.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
        maxFeePerGas: e.maxFeePerGas ? (0, oe.bigIntStringFromBigInt)(e.maxFeePerGas) : null,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0, oe.bigIntStringFromBigInt)(e.maxPriorityFeePerGas) : null,
        gasLimit: e.gasLimit ? (0, oe.bigIntStringFromBigInt)(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !0
      }
    });
  }
  submitEthereumTransaction(e, t) {
    return this.sendRequest({
      method: "submitEthereumTransaction",
      params: {
        signedTransaction: (0, oe.hexStringFromBuffer)(e, !0),
        chainId: t
      }
    });
  }
  scanQRCode(e) {
    return this.sendRequest({
      method: "scanQRCode",
      params: {
        regExp: e
      }
    });
  }
  getWalletLinkSession() {
    return this._session;
  }
  genericRequest(e, t) {
    return this.sendRequest({
      method: "generic",
      params: {
        action: t,
        data: e
      }
    });
  }
  sendGenericMessage(e) {
    return this.sendRequest(e);
  }
  sendRequest(e) {
    let t = null;
    const n = (0, oe.randomBytesHex)(8), s = (i) => {
      this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, e.method, i), t == null || t();
    };
    return new Promise((i, o) => {
      t = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: s,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      }), this.relayEventManager.callbacks.set(n, (a) => {
        if (t == null || t(), (0, ms.isErrorResponse)(a))
          return o(new Error(a.errorMessage));
        i(a);
      }), this.publishWeb3RequestEvent(n, e);
    });
  }
  setAccountsCallback(e) {
    this.accountsCallback = e;
  }
  setChainCallback(e) {
    this.chainCallback = e;
  }
  setDappDefaultChainCallback(e) {
    this.dappDefaultChain = e;
  }
  publishWeb3RequestEvent(e, t) {
    const n = { type: "WEB3_REQUEST", id: e, request: t };
    this.publishEvent("Web3Request", n, !0).then((s) => {
    }).catch((s) => {
      this.handleWeb3ResponseMessage({
        type: "WEB3_RESPONSE",
        id: n.id,
        response: {
          method: t.method,
          errorMessage: s.message
        }
      });
    }), this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
  }
  // copied from MobileRelay
  openCoinbaseWalletDeeplink(e) {
    if (this.ui instanceof zh.WLMobileRelayUI)
      switch (e) {
        case "requestEthereumAccounts":
        case "switchEthereumChain":
          return;
        default:
          window.addEventListener("blur", () => {
            window.addEventListener("focus", () => {
              this.connection.checkUnseenEvents();
            }, { once: !0 });
          }, { once: !0 }), this.ui.openCoinbaseWalletDeeplink();
          break;
      }
  }
  publishWeb3RequestCanceledEvent(e) {
    const t = {
      type: "WEB3_REQUEST_CANCELED",
      id: e
    };
    this.publishEvent("Web3RequestCanceled", t, !1).then();
  }
  publishEvent(e, t, n) {
    return this.connection.publishEvent(e, t, n);
  }
  handleWeb3ResponseMessage(e) {
    const { response: t } = e;
    if (t.method === "requestEthereumAccounts") {
      cn.accountRequestCallbackIds.forEach((n) => this.invokeCallback(Object.assign(Object.assign({}, e), { id: n }))), cn.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(e);
  }
  handleErrorResponse(e, t, n) {
    var s;
    const i = (s = n == null ? void 0 : n.message) !== null && s !== void 0 ? s : "Unspecified error message.";
    this.handleWeb3ResponseMessage({
      type: "WEB3_RESPONSE",
      id: e,
      response: {
        method: t,
        errorMessage: i
      }
    });
  }
  invokeCallback(e) {
    const t = this.relayEventManager.callbacks.get(e.id);
    t && (t(e.response), this.relayEventManager.callbacks.delete(e.id));
  }
  requestEthereumAccounts() {
    const e = {
      method: "requestEthereumAccounts",
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl || null
      }
    }, t = (0, oe.randomBytesHex)(8);
    return new Promise((n, s) => {
      this.relayEventManager.callbacks.set(t, (i) => {
        if ((0, ms.isErrorResponse)(i))
          return s(new Error(i.errorMessage));
        n(i);
      }), cn.accountRequestCallbackIds.add(t), this.publishWeb3RequestEvent(t, e);
    });
  }
  watchAsset(e, t, n, s, i, o) {
    const a = {
      method: "watchAsset",
      params: {
        type: e,
        options: {
          address: t,
          symbol: n,
          decimals: s,
          image: i
        },
        chainId: o
      }
    };
    let c = null;
    const l = (0, oe.randomBytesHex)(8), h = (d) => {
      this.publishWeb3RequestCanceledEvent(l), this.handleErrorResponse(l, a.method, d), c == null || c();
    };
    return c = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: h,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    }), new Promise((d, f) => {
      this.relayEventManager.callbacks.set(l, (g) => {
        if (c == null || c(), (0, ms.isErrorResponse)(g))
          return f(new Error(g.errorMessage));
        d(g);
      }), this.publishWeb3RequestEvent(l, a);
    });
  }
  addEthereumChain(e, t, n, s, i, o) {
    const a = {
      method: "addEthereumChain",
      params: {
        chainId: e,
        rpcUrls: t,
        blockExplorerUrls: s,
        chainName: i,
        iconUrls: n,
        nativeCurrency: o
      }
    };
    let c = null;
    const l = (0, oe.randomBytesHex)(8), h = (d) => {
      this.publishWeb3RequestCanceledEvent(l), this.handleErrorResponse(l, a.method, d), c == null || c();
    };
    return c = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: h,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    }), new Promise((d, f) => {
      this.relayEventManager.callbacks.set(l, (g) => {
        if (c == null || c(), (0, ms.isErrorResponse)(g))
          return f(new Error(g.errorMessage));
        d(g);
      }), this.publishWeb3RequestEvent(l, a);
    });
  }
  switchEthereumChain(e, t) {
    const n = {
      method: "switchEthereumChain",
      params: Object.assign({ chainId: e }, { address: t })
    }, s = (0, oe.randomBytesHex)(8);
    return new Promise((i, o) => {
      this.relayEventManager.callbacks.set(s, (a) => {
        if ((0, ms.isErrorResponse)(a) && a.errorCode)
          return o(u1.standardErrors.provider.custom({
            code: a.errorCode,
            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
          }));
        if ((0, ms.isErrorResponse)(a))
          return o(new Error(a.errorMessage));
        i(a);
      }), this.publishWeb3RequestEvent(s, n);
    });
  }
}
mc.WalletLinkRelay = cn;
cn.accountRequestCallbackIds = /* @__PURE__ */ new Set();
var d1 = dt && dt.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(pc, "__esModule", { value: !0 });
pc.WalletLinkSigner = void 0;
const Xc = d1(Nb), Jh = Zt, f1 = Vo, tn = Di, p1 = mc, qh = $t, ge = Xt, j = L, g1 = en, el = "DefaultChainId", Zh = "DefaultJsonRpcUrl";
class m1 {
  constructor(e) {
    var t, n;
    this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1;
    const { appName: s, appLogoUrl: i } = e.metadata;
    this._appName = s, this._appLogoUrl = i, this._storage = new g1.ScopedLocalStorage("walletlink", qh.WALLETLINK_URL), this.updateListener = e.updateListener, this._relayEventManager = new f1.RelayEventManager(), this._jsonRpcUrlFromOpts = "";
    const o = this._storage.getItem(Jh.LOCAL_STORAGE_ADDRESSES_KEY);
    if (o) {
      const c = o.split(" ");
      c[0] !== "" && (this._addresses = c.map((l) => (0, j.ensureAddressString)(l)), (t = this.updateListener) === null || t === void 0 || t.onAccountsUpdate({
        accounts: this._addresses,
        source: "storage"
      }));
    }
    this._storage.getItem(el) && ((n = this.updateListener) === null || n === void 0 || n.onChainUpdate({
      chain: {
        id: this.getChainId(),
        rpcUrl: this.jsonRpcUrl
      },
      source: "storage"
    }), this.hasMadeFirstChainChangedEmission = !0), this.initializeRelay();
  }
  getSession() {
    const e = this.initializeRelay(), { id: t, secret: n } = e.getWalletLinkSession();
    return { id: t, secret: n };
  }
  async handshake() {
    return await this.request({ method: "eth_requestAccounts" });
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get jsonRpcUrl() {
    var e;
    return (e = this._storage.getItem(Zh)) !== null && e !== void 0 ? e : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(e) {
    this._storage.setItem(Zh, e);
  }
  updateProviderInfo(e, t) {
    var n;
    this.jsonRpcUrl = e;
    const s = this.getChainId();
    this._storage.setItem(el, t.toString(10)), ((0, j.ensureIntNumber)(t) !== s || !this.hasMadeFirstChainChangedEmission) && ((n = this.updateListener) === null || n === void 0 || n.onChainUpdate({
      chain: { id: t, rpcUrl: e },
      source: "wallet"
    }), this.hasMadeFirstChainChangedEmission = !0);
  }
  async watchAsset(e, t, n, s, i, o) {
    const c = await this.initializeRelay().watchAsset(e, t, n, s, i, o == null ? void 0 : o.toString());
    return (0, tn.isErrorResponse)(c) ? !1 : !!c.result;
  }
  async addEthereumChain(e, t, n, s, i, o) {
    var a, c;
    if ((0, j.ensureIntNumber)(e) === this.getChainId())
      return !1;
    const l = this.initializeRelay();
    this._isAuthorized() || await l.requestEthereumAccounts();
    const h = await l.addEthereumChain(e.toString(), t, i, n, s, o);
    return (0, tn.isErrorResponse)(h) ? !1 : (((a = h.result) === null || a === void 0 ? void 0 : a.isApproved) === !0 && this.updateProviderInfo(t[0], e), ((c = h.result) === null || c === void 0 ? void 0 : c.isApproved) === !0);
  }
  async switchEthereumChain(e) {
    const n = await this.initializeRelay().switchEthereumChain(e.toString(10), this.selectedAddress || void 0);
    if ((0, tn.isErrorResponse)(n)) {
      if (!n.errorCode)
        return;
      throw n.errorCode === ge.standardErrorCodes.provider.unsupportedChain ? ge.standardErrors.provider.unsupportedChain() : ge.standardErrors.provider.custom({
        message: n.errorMessage,
        code: n.errorCode
      });
    }
    const s = n.result;
    s.isApproved && s.rpcUrl.length > 0 && this.updateProviderInfo(s.rpcUrl, e);
  }
  async disconnect() {
    this._relay && this._relay.resetAndReload(), this._storage.clear();
  }
  async request(e) {
    try {
      return this._request(e).catch((t) => {
        throw t;
      });
    } catch (t) {
      return Promise.reject(t);
    }
  }
  async _request(e) {
    if (!e || typeof e != "object" || Array.isArray(e))
      throw ge.standardErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: e
      });
    const { method: t, params: n } = e;
    if (typeof t != "string" || t.length === 0)
      throw ge.standardErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: e
      });
    if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null))
      throw ge.standardErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: e
      });
    const s = n === void 0 ? [] : n, i = this._relayEventManager.makeRequestId();
    return (await this._sendRequestAsync({
      method: t,
      params: s,
      jsonrpc: "2.0",
      id: i
    })).result;
  }
  _setAddresses(e, t) {
    var n;
    if (!Array.isArray(e))
      throw new Error("addresses is not an array");
    const s = e.map((i) => (0, j.ensureAddressString)(i));
    JSON.stringify(s) !== JSON.stringify(this._addresses) && (this._addresses = s, (n = this.updateListener) === null || n === void 0 || n.onAccountsUpdate({
      accounts: s,
      source: "wallet"
    }), this._storage.setItem(Jh.LOCAL_STORAGE_ADDRESSES_KEY, s.join(" ")));
  }
  _sendRequestAsync(e) {
    return new Promise((t, n) => {
      try {
        const s = this._handleSynchronousMethods(e);
        if (s !== void 0)
          return t({
            jsonrpc: "2.0",
            id: e.id,
            result: s
          });
      } catch (s) {
        return n(s);
      }
      this._handleAsynchronousMethods(e).then((s) => s && t(Object.assign(Object.assign({}, s), { id: e.id }))).catch((s) => n(s));
    });
  }
  _handleSynchronousMethods(e) {
    const { method: t } = e;
    switch (t) {
      case "eth_accounts":
        return this._eth_accounts();
      case "eth_coinbase":
        return this._eth_coinbase();
      case "net_version":
        return this._net_version();
      case "eth_chainId":
        return this._eth_chainId();
      default:
        return;
    }
  }
  async _handleAsynchronousMethods(e) {
    const { method: t } = e, n = e.params || [];
    switch (t) {
      case "eth_requestAccounts":
        return this._eth_requestAccounts();
      case "eth_sign":
        return this._eth_sign(n);
      case "eth_ecRecover":
        return this._eth_ecRecover(n);
      case "personal_sign":
        return this._personal_sign(n);
      case "personal_ecRecover":
        return this._personal_ecRecover(n);
      case "eth_signTransaction":
        return this._eth_signTransaction(n);
      case "eth_sendRawTransaction":
        return this._eth_sendRawTransaction(n);
      case "eth_sendTransaction":
        return this._eth_sendTransaction(n);
      case "eth_signTypedData_v1":
        return this._eth_signTypedData_v1(n);
      case "eth_signTypedData_v2":
        return this._throwUnsupportedMethodError();
      case "eth_signTypedData_v3":
        return this._eth_signTypedData_v3(n);
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
        return this._eth_signTypedData_v4(n);
      case "wallet_addEthereumChain":
        return this._wallet_addEthereumChain(n);
      case "wallet_switchEthereumChain":
        return this._wallet_switchEthereumChain(n);
      case "wallet_watchAsset":
        return this._wallet_watchAsset(n);
      default:
        return this._throwUnsupportedMethodError();
    }
  }
  _isKnownAddress(e) {
    try {
      const t = (0, j.ensureAddressString)(e);
      return this._addresses.map((s) => (0, j.ensureAddressString)(s)).includes(t);
    } catch {
    }
    return !1;
  }
  _ensureKnownAddress(e) {
    if (!this._isKnownAddress(e))
      throw new Error("Unknown Ethereum address");
  }
  _prepareTransactionParams(e) {
    const t = e.from ? (0, j.ensureAddressString)(e.from) : this.selectedAddress;
    if (!t)
      throw new Error("Ethereum address is unavailable");
    this._ensureKnownAddress(t);
    const n = e.to ? (0, j.ensureAddressString)(e.to) : null, s = e.value != null ? (0, j.ensureBigInt)(e.value) : BigInt(0), i = e.data ? (0, j.ensureBuffer)(e.data) : ne.alloc(0), o = e.nonce != null ? (0, j.ensureIntNumber)(e.nonce) : null, a = e.gasPrice != null ? (0, j.ensureBigInt)(e.gasPrice) : null, c = e.maxFeePerGas != null ? (0, j.ensureBigInt)(e.maxFeePerGas) : null, l = e.maxPriorityFeePerGas != null ? (0, j.ensureBigInt)(e.maxPriorityFeePerGas) : null, h = e.gas != null ? (0, j.ensureBigInt)(e.gas) : null, d = e.chainId ? (0, j.ensureIntNumber)(e.chainId) : this.getChainId();
    return {
      fromAddress: t,
      toAddress: n,
      weiValue: s,
      data: i,
      nonce: o,
      gasPriceInWei: a,
      maxFeePerGas: c,
      maxPriorityFeePerGas: l,
      gasLimit: h,
      chainId: d
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized())
      throw ge.standardErrors.provider.unauthorized({});
  }
  _throwUnsupportedMethodError() {
    throw ge.standardErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(e, t, n, s) {
    this._ensureKnownAddress(t);
    try {
      const o = await this.initializeRelay().signEthereumMessage(e, t, n, s);
      if ((0, tn.isErrorResponse)(o))
        throw new Error(o.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: o.result };
    } catch (i) {
      throw typeof i.message == "string" && i.message.match(/(denied|rejected)/i) ? ge.standardErrors.provider.userRejectedRequest("User denied message signature") : i;
    }
  }
  async _ethereumAddressFromSignedMessage(e, t, n) {
    const i = await this.initializeRelay().ethereumAddressFromSignedMessage(e, t, n);
    if ((0, tn.isErrorResponse)(i))
      throw new Error(i.errorMessage);
    return { jsonrpc: "2.0", id: 0, result: i.result };
  }
  _eth_accounts() {
    return [...this._addresses];
  }
  _eth_coinbase() {
    return this.selectedAddress || null;
  }
  _net_version() {
    return this.getChainId().toString(10);
  }
  _eth_chainId() {
    return (0, j.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const e = this._storage.getItem(el);
    if (!e)
      return (0, j.ensureIntNumber)(1);
    const t = parseInt(e, 10);
    return (0, j.ensureIntNumber)(t);
  }
  async _eth_requestAccounts() {
    if (this._isAuthorized())
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses
      });
    let e;
    try {
      if (e = await this.initializeRelay().requestEthereumAccounts(), (0, tn.isErrorResponse)(e))
        throw new Error(e.errorMessage);
    } catch (t) {
      throw typeof t.message == "string" && t.message.match(/(denied|rejected)/i) ? ge.standardErrors.provider.userRejectedRequest("User denied account authorization") : t;
    }
    if (!e.result)
      throw new Error("accounts received is empty");
    return this._setAddresses(e.result), { jsonrpc: "2.0", id: 0, result: this._addresses };
  }
  _eth_sign(e) {
    this._requireAuthorization();
    const t = (0, j.ensureAddressString)(e[0]), n = (0, j.ensureBuffer)(e[1]);
    return this._signEthereumMessage(n, t, !1);
  }
  _eth_ecRecover(e) {
    const t = (0, j.ensureBuffer)(e[0]), n = (0, j.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(t, n, !1);
  }
  _personal_sign(e) {
    this._requireAuthorization();
    const t = (0, j.ensureBuffer)(e[0]), n = (0, j.ensureAddressString)(e[1]);
    return this._signEthereumMessage(t, n, !0);
  }
  _personal_ecRecover(e) {
    const t = (0, j.ensureBuffer)(e[0]), n = (0, j.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(t, n, !0);
  }
  async _eth_signTransaction(e) {
    this._requireAuthorization();
    const t = this._prepareTransactionParams(e[0] || {});
    try {
      const s = await this.initializeRelay().signEthereumTransaction(t);
      if ((0, tn.isErrorResponse)(s))
        throw new Error(s.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: s.result };
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? ge.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n;
    }
  }
  async _eth_sendRawTransaction(e) {
    const t = (0, j.ensureBuffer)(e[0]), s = await this.initializeRelay().submitEthereumTransaction(t, this.getChainId());
    if ((0, tn.isErrorResponse)(s))
      throw new Error(s.errorMessage);
    return { jsonrpc: "2.0", id: 0, result: s.result };
  }
  async _eth_sendTransaction(e) {
    this._requireAuthorization();
    const t = this._prepareTransactionParams(e[0] || {});
    try {
      const s = await this.initializeRelay().signAndSubmitEthereumTransaction(t);
      if ((0, tn.isErrorResponse)(s))
        throw new Error(s.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: s.result };
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? ge.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n;
    }
  }
  async _eth_signTypedData_v1(e) {
    this._requireAuthorization();
    const t = (0, j.ensureParsedJSONObject)(e[0]), n = (0, j.ensureAddressString)(e[1]);
    this._ensureKnownAddress(n);
    const s = Xc.default.hashForSignTypedDataLegacy({ data: t }), i = JSON.stringify(t, null, 2);
    return this._signEthereumMessage(s, n, !1, i);
  }
  async _eth_signTypedData_v3(e) {
    this._requireAuthorization();
    const t = (0, j.ensureAddressString)(e[0]), n = (0, j.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(t);
    const s = Xc.default.hashForSignTypedData_v3({ data: n }), i = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(s, t, !1, i);
  }
  async _eth_signTypedData_v4(e) {
    this._requireAuthorization();
    const t = (0, j.ensureAddressString)(e[0]), n = (0, j.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(t);
    const s = Xc.default.hashForSignTypedData_v4({ data: n }), i = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(s, t, !1, i);
  }
  async _wallet_addEthereumChain(e) {
    var t, n, s, i;
    const o = e[0];
    if (((t = o.rpcUrls) === null || t === void 0 ? void 0 : t.length) === 0)
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: "please pass in at least 1 rpcUrl" }
      };
    if (!o.chainName || o.chainName.trim() === "")
      throw ge.standardErrors.rpc.invalidParams("chainName is a required field");
    if (!o.nativeCurrency)
      throw ge.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
    const a = parseInt(o.chainId, 16);
    return await this.addEthereumChain(a, (n = o.rpcUrls) !== null && n !== void 0 ? n : [], (s = o.blockExplorerUrls) !== null && s !== void 0 ? s : [], o.chainName, (i = o.iconUrls) !== null && i !== void 0 ? i : [], o.nativeCurrency) ? { jsonrpc: "2.0", id: 0, result: null } : {
      jsonrpc: "2.0",
      id: 0,
      error: { code: 2, message: "unable to add ethereum chain" }
    };
  }
  async _wallet_switchEthereumChain(e) {
    const t = e[0];
    return await this.switchEthereumChain(parseInt(t.chainId, 16)), { jsonrpc: "2.0", id: 0, result: null };
  }
  async _wallet_watchAsset(e) {
    const t = Array.isArray(e) ? e[0] : e;
    if (!t.type)
      throw ge.standardErrors.rpc.invalidParams("Type is required");
    if ((t == null ? void 0 : t.type) !== "ERC20")
      throw ge.standardErrors.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);
    if (!(t != null && t.options))
      throw ge.standardErrors.rpc.invalidParams("Options are required");
    if (!(t != null && t.options.address))
      throw ge.standardErrors.rpc.invalidParams("Address is required");
    const n = this.getChainId(), { address: s, symbol: i, image: o, decimals: a } = t.options;
    return { jsonrpc: "2.0", id: 0, result: await this.watchAsset(t.type, s, i, a, o, n) };
  }
  initializeRelay() {
    if (!this._relay) {
      const e = new p1.WalletLinkRelay({
        linkAPIUrl: qh.WALLETLINK_URL,
        storage: this._storage
      });
      e.setAppInfo(this._appName, this._appLogoUrl), e.attachUI(), e.setAccountsCallback((t, n) => this._setAddresses(t, n)), e.setChainCallback((t, n) => {
        this.updateProviderInfo(n, parseInt(t, 10));
      }), this._relay = e;
    }
    return this._relay;
  }
}
pc.WalletLinkSigner = m1;
var ut = {};
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.checkErrorForInvalidRequestArgs = ut.getCoinbaseInjectedProvider = ut.getCoinbaseInjectedSigner = ut.fetchRPCRequest = void 0;
const y1 = ss, ba = Xt;
async function w1(r, e) {
  if (!e.rpcUrl)
    throw ba.standardErrors.rpc.internal("No RPC URL set for chain");
  const t = Object.assign(Object.assign({}, r), { jsonrpc: "2.0", id: crypto.randomUUID() });
  return (await (await window.fetch(e.rpcUrl, {
    method: "POST",
    body: JSON.stringify(t),
    mode: "cors",
    headers: { "Content-Type": "application/json", "X-Cbw-Sdk-Version": y1.LIB_VERSION }
  })).json()).result;
}
ut.fetchRPCRequest = w1;
function xp() {
  return globalThis.coinbaseWalletSigner;
}
ut.getCoinbaseInjectedSigner = xp;
function b1({ metadata: r, preference: e }) {
  var t, n, s;
  const i = globalThis;
  if (e.options !== "smartWalletOnly") {
    if (xp())
      return;
    const c = i.coinbaseWalletExtension;
    if (c) {
      const { appName: l, appLogoUrl: h, appChainIds: d } = r;
      return (t = c.setAppInfo) === null || t === void 0 || t.call(c, l, h, d), c;
    }
  }
  const o = (n = i.ethereum) !== null && n !== void 0 ? n : (s = i.top) === null || s === void 0 ? void 0 : s.ethereum;
  if (o != null && o.isCoinbaseBrowser)
    return o;
}
ut.getCoinbaseInjectedProvider = b1;
function A1(r) {
  if (!r || typeof r != "object" || Array.isArray(r))
    return ba.standardErrors.rpc.invalidParams({
      message: "Expected a single, non-array, object argument.",
      data: r
    });
  const { method: e, params: t } = r;
  if (typeof e != "string" || e.length === 0)
    return ba.standardErrors.rpc.invalidParams({
      message: "'args.method' must be a non-empty string.",
      data: r
    });
  if (t !== void 0 && !Array.isArray(t) && (typeof t != "object" || t === null))
    return ba.standardErrors.rpc.invalidParams({
      message: "'args.params' must be an object or array if provided.",
      data: r
    });
}
ut.checkErrorForInvalidRequestArgs = A1;
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.createSigner = Jt.fetchSignerType = Jt.storeSignerType = Jt.loadSignerType = void 0;
const E1 = hc, Pp = pc, C1 = Xt, v1 = ut, I1 = en, Rp = "SignerType", Op = new I1.ScopedLocalStorage("CBWSDK", "SignerConfigurator");
function N1() {
  return Op.getItem(Rp);
}
Jt.loadSignerType = N1;
function S1(r) {
  Op.setItem(Rp, r);
}
Jt.storeSignerType = S1;
async function k1(r) {
  const { communicator: e, metadata: t } = r;
  P1(e, t).catch(() => {
  });
  const n = {
    id: crypto.randomUUID(),
    event: "selectSignerType",
    data: r.preference
  }, { data: s } = await e.postRequestAndWaitForResponse(n);
  return s;
}
Jt.fetchSignerType = k1;
function x1(r) {
  const { signerType: e, metadata: t, communicator: n, updateListener: s } = r;
  switch (e) {
    case "scw":
      return new E1.SCWSigner({
        metadata: t,
        updateListener: s,
        communicator: n
      });
    case "walletlink":
      return new Pp.WalletLinkSigner({
        metadata: t,
        updateListener: s
      });
    case "extension": {
      const i = (0, v1.getCoinbaseInjectedSigner)();
      if (!i)
        throw C1.standardErrors.rpc.internal("injected signer not found");
      return i;
    }
  }
}
Jt.createSigner = x1;
async function P1(r, e) {
  await r.onMessage(({ event: n }) => n === "WalletLinkSessionRequest");
  const t = new Pp.WalletLinkSigner({
    metadata: e
  });
  r.postMessage({
    event: "WalletLinkUpdate",
    data: { session: t.getSession() }
  }), await t.handshake(), r.postMessage({
    event: "WalletLinkUpdate",
    data: { connected: !0 }
  });
}
var Ic = {}, Li = {};
Object.defineProperty(Li, "__esModule", { value: !0 });
Li.closePopup = Li.openPopup = void 0;
const R1 = Xt, $h = 420, Yh = 540;
function O1(r) {
  const e = (window.innerWidth - $h) / 2 + window.screenX, t = (window.innerHeight - Yh) / 2 + window.screenY, n = window.open(r, "Smart Wallet", `width=${$h}, height=${Yh}, left=${e}, top=${t}`);
  if (n == null || n.focus(), !n)
    throw R1.standardErrors.rpc.internal("Pop up window failed to open");
  return n;
}
Li.openPopup = O1;
function T1(r) {
  r && !r.closed && r.close();
}
Li.closePopup = T1;
Object.defineProperty(Ic, "__esModule", { value: !0 });
Ic.Communicator = void 0;
const _1 = ss, Xh = Li, B1 = $t, ed = Xt;
class L1 {
  constructor(e = B1.CB_KEYS_URL) {
    this.popup = null, this.listeners = /* @__PURE__ */ new Map(), this.postMessage = async (t) => {
      (await this.waitForPopupLoaded()).postMessage(t, this.url.origin);
    }, this.postRequestAndWaitForResponse = async (t) => {
      const n = this.onMessage(({ requestId: s }) => s === t.id);
      return this.postMessage(t), await n;
    }, this.onMessage = async (t) => new Promise((n, s) => {
      const i = (o) => {
        if (o.origin !== this.url.origin)
          return;
        const a = o.data;
        t(a) && (n(a), window.removeEventListener("message", i), this.listeners.delete(i));
      };
      window.addEventListener("message", i), this.listeners.set(i, { reject: s });
    }), this.disconnect = () => {
      (0, Xh.closePopup)(this.popup), this.popup = null, this.listeners.forEach(({ reject: t }, n) => {
        t(ed.standardErrors.provider.userRejectedRequest("Request rejected")), window.removeEventListener("message", n);
      }), this.listeners.clear();
    }, this.waitForPopupLoaded = async () => this.popup && !this.popup.closed ? this.popup : (this.popup = (0, Xh.openPopup)(this.url), this.onMessage(({ event: t }) => t === "PopupUnload").then(this.disconnect).catch(() => {
    }), this.onMessage(({ event: t }) => t === "PopupLoaded").then((t) => {
      this.postMessage({
        requestId: t.id,
        data: { version: _1.LIB_VERSION }
      });
    }).then(() => {
      if (!this.popup)
        throw ed.standardErrors.rpc.internal();
      return this.popup;
    })), this.url = new URL(e);
  }
}
Ic.Communicator = L1;
var Nc = {};
Object.defineProperty(Nc, "__esModule", { value: !0 });
Nc.determineMethodCategory = void 0;
const td = {
  handshake: ["eth_requestAccounts"],
  sign: [
    "eth_ecRecover",
    "personal_sign",
    "personal_ecRecover",
    "eth_signTransaction",
    "eth_sendTransaction",
    "eth_signTypedData_v1",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_signTypedData",
    "wallet_addEthereumChain",
    "wallet_switchEthereumChain",
    "wallet_watchAsset",
    "wallet_getCapabilities",
    "wallet_sendCalls",
    "wallet_showCallsStatus"
  ],
  state: [
    // internal state
    "eth_chainId",
    "eth_accounts",
    "eth_coinbase",
    "net_version"
  ],
  deprecated: ["eth_sign", "eth_signTypedData_v2"],
  unsupported: ["eth_subscribe", "eth_unsubscribe"],
  fetch: []
};
function M1(r) {
  for (const e in td) {
    const t = e;
    if (td[t].includes(r))
      return t;
  }
}
Nc.determineMethodCategory = M1;
var D1 = dt && dt.__rest || function(r, e) {
  var t = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(r); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[s]) && (t[n[s]] = r[n[s]]);
  return t;
}, U1 = dt && dt.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(ac, "__esModule", { value: !0 });
ac.CoinbaseWalletProvider = void 0;
const F1 = U1(Mp), ys = Xt, H1 = lc, oa = ke, ji = L, aa = Jt, nd = ut, G1 = Ic, K1 = Nc, j1 = en;
class V1 extends F1.default {
  constructor(e) {
    var t, n, { metadata: s } = e, i = e.preference, { keysUrl: o } = i, a = D1(i, ["keysUrl"]);
    super(), this.accounts = [], this.handlers = {
      // eth_requestAccounts
      handshake: async (l) => {
        try {
          if (this.connected)
            return this.emit("connect", { chainId: (0, ji.hexStringFromIntNumber)((0, oa.IntNumber)(this.chain.id)) }), this.accounts;
          const h = await this.requestSignerSelection(), d = this.initSigner(h), f = await d.handshake();
          return this.signer = d, (0, aa.storeSignerType)(h), this.emit("connect", { chainId: (0, ji.hexStringFromIntNumber)((0, oa.IntNumber)(this.chain.id)) }), f;
        } catch (h) {
          throw this.handleUnauthorizedError(h), h;
        }
      },
      sign: async (l) => {
        if (!this.connected || !this.signer)
          throw ys.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
        try {
          return await this.signer.request(l);
        } catch (h) {
          throw this.handleUnauthorizedError(h), h;
        }
      },
      fetch: (l) => (0, nd.fetchRPCRequest)(l, this.chain),
      state: (l) => {
        const h = () => {
          if (this.connected)
            return this.accounts;
          throw ys.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
        };
        switch (l.method) {
          case "eth_chainId":
            return (0, ji.hexStringFromIntNumber)((0, oa.IntNumber)(this.chain.id));
          case "net_version":
            return this.chain.id;
          case "eth_accounts":
            return h();
          case "eth_coinbase":
            return h()[0];
          default:
            return this.handlers.unsupported(l);
        }
      },
      deprecated: ({ method: l }) => {
        throw ys.standardErrors.rpc.methodNotSupported(`Method ${l} is deprecated.`);
      },
      unsupported: ({ method: l }) => {
        throw ys.standardErrors.rpc.methodNotSupported(`Method ${l} is not supported.`);
      }
    }, this.isCoinbaseWallet = !0, this.updateListener = {
      onAccountsUpdate: ({ accounts: l, source: h }) => {
        (0, ji.areAddressArraysEqual)(this.accounts, l) || (this.accounts = l, h !== "storage" && this.emit("accountsChanged", this.accounts));
      },
      onChainUpdate: ({ chain: l, source: h }) => {
        l.id === this.chain.id && l.rpcUrl === this.chain.rpcUrl || (this.chain = l, h !== "storage" && this.emit("chainChanged", (0, ji.hexStringFromIntNumber)((0, oa.IntNumber)(l.id))));
      }
    }, this.metadata = s, this.preference = a, this.communicator = new G1.Communicator(o), this.chain = {
      id: (n = (t = s.appChainIds) === null || t === void 0 ? void 0 : t[0]) !== null && n !== void 0 ? n : 1
    };
    const c = (0, aa.loadSignerType)();
    this.signer = c ? this.initSigner(c) : null;
  }
  get connected() {
    return this.accounts.length > 0;
  }
  async request(e) {
    var t;
    try {
      const n = (0, nd.checkErrorForInvalidRequestArgs)(e);
      if (n)
        throw n;
      const s = (t = (0, K1.determineMethodCategory)(e.method)) !== null && t !== void 0 ? t : "fetch";
      return this.handlers[s](e);
    } catch (n) {
      return Promise.reject((0, H1.serializeError)(n, e.method));
    }
  }
  handleUnauthorizedError(e) {
    e.code === ys.standardErrorCodes.provider.unauthorized && this.disconnect();
  }
  /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
  async enable() {
    return console.warn('.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'), await this.request({
      method: "eth_requestAccounts"
    });
  }
  async disconnect() {
    this.accounts = [], this.chain = { id: 1 }, j1.ScopedLocalStorage.clearAll(), this.emit("disconnect", ys.standardErrors.provider.disconnected("User initiated disconnection"));
  }
  requestSignerSelection() {
    return (0, aa.fetchSignerType)({
      communicator: this.communicator,
      preference: this.preference,
      metadata: this.metadata
    });
  }
  initSigner(e) {
    return (0, aa.createSigner)({
      signerType: e,
      metadata: this.metadata,
      communicator: this.communicator,
      updateListener: this.updateListener
    });
  }
}
ac.CoinbaseWalletProvider = V1;
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.CoinbaseWalletSDK = void 0;
const W1 = oc, Q1 = ac, z1 = en, J1 = ss, q1 = L, Z1 = ut;
class $1 {
  constructor(e) {
    this.metadata = {
      appName: e.appName || "Dapp",
      appLogoUrl: e.appLogoUrl || (0, q1.getFavicon)(),
      appChainIds: e.appChainIds || []
    }, this.storeLatestVersion();
  }
  makeWeb3Provider(e = { options: "all" }) {
    var t;
    const n = { metadata: this.metadata, preference: e };
    return (t = (0, Z1.getCoinbaseInjectedProvider)(n)) !== null && t !== void 0 ? t : new Q1.CoinbaseWalletProvider(n);
  }
  /**
   * Official Coinbase Wallet logo for developers to use on their frontend
   * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
   * @param width Width of the logo (Optional)
   * @returns SVG Data URI
   */
  getCoinbaseWalletLogo(e, t = 240) {
    return (0, W1.walletLogo)(e, t);
  }
  storeLatestVersion() {
    new z1.ScopedLocalStorage("CBWSDK").setItem("VERSION", J1.LIB_VERSION);
  }
}
lo.CoinbaseWalletSDK = $1;
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.CoinbaseWalletSDK = void 0;
  const e = lo;
  r.default = e.CoinbaseWalletSDK;
  var t = lo;
  Object.defineProperty(r, "CoinbaseWalletSDK", { enumerable: !0, get: function() {
    return t.CoinbaseWalletSDK;
  } });
})(tp);
class Y1 {
  createEthersConfig(e) {
    if (!e.metadata)
      return;
    let t, n;
    function s() {
      if (t)
        return t;
      if (!(typeof window > "u") && window.ethereum)
        return t = window.ethereum, t;
    }
    function i() {
      var c, l, h;
      return n || (typeof window > "u" ? void 0 : (n = new tp.CoinbaseWalletSDK({
        appName: (c = e == null ? void 0 : e.metadata) == null ? void 0 : c.name,
        appLogoUrl: (l = e == null ? void 0 : e.metadata) == null ? void 0 : l.icons[0],
        appChainIds: ((h = e.networks) == null ? void 0 : h.map((d) => d.chainId)) || [
          1,
          84532
        ]
      }).makeWeb3Provider({
        options: e.coinbasePreference ?? "all"
      }), n));
    }
    const o = { metadata: e.metadata };
    return e.enableInjected !== !1 && (o.injected = s()), e.enableCoinbase !== !1 && (o.coinbase = i()), o.EIP6963 = e.enableEIP6963 !== !1, o;
  }
  constructor() {
    var e, t;
    this.appKit = void 0, this.EIP6963Providers = [], this.options = void 0, this.caipNetworks = [], this.chainNamespace = ca.CHAIN.EVM, this.siweControllerClient = (e = this.options) == null ? void 0 : e.siweConfig, this.tokens = bu.getCaipTokens((t = this.options) == null ? void 0 : t.tokens), this.defaultCaipNetwork = void 0, this.adapterType = "ethers", this.providerHandlers = null, On.subscribeKey("activeCaipNetwork", (n) => {
      var a;
      const s = (a = this.appKit) == null ? void 0 : a.getCaipAddress(this.chainNamespace), i = s == null ? void 0 : s.startsWith("eip155:"), o = (n == null ? void 0 : n.chainNamespace) === this.chainNamespace;
      i && o && s && (this.syncBalance(Tn.getPlainAddress(s), n), this.syncAccount({
        address: Tn.getPlainAddress(s),
        caipNetwork: n
      }));
    }), On.subscribeKey("activeCaipAddress", (n) => {
      const s = n == null ? void 0 : n.startsWith("eip155:"), i = On.state.activeCaipNetwork, o = (i == null ? void 0 : i.chainNamespace) === this.chainNamespace;
      s && (o && this.syncBalance(Tn.getPlainAddress(n), i), this.syncAccount({ address: Tn.getPlainAddress(n) }));
    }), Dp.subscribeKey("shouldUpdateToAddress", (n) => {
      (n == null ? void 0 : n.startsWith("0x")) && this.syncAccount({ address: n });
    }, this.chainNamespace);
  }
  construct(e, t) {
    var i, o, a, c, l, h, d;
    if (!t.projectId)
      throw new Error("appkit:ethers-client:initialize - projectId is undefined");
    this.appKit = e, this.options = t, this.caipNetworks = t.networks, this.defaultCaipNetwork = t.defaultNetwork || t.networks[0], this.tokens = bu.getCaipTokens(t.tokens), this.ethersConfig = this.createEthersConfig(t), this.networkControllerClient = {
      switchCaipNetwork: async (f) => {
        if (f != null && f.chainId)
          try {
            await this.switchNetwork(f);
          } catch {
            throw new Error("networkControllerClient:switchCaipNetwork - unable to switch chain");
          }
      },
      getApprovedCaipNetworksData: async () => this.getApprovedCaipNetworksData()
    }, this.connectionControllerClient = {
      connectWalletConnect: async (f) => {
        var g, w, m, E;
        await ((E = (m = (w = (g = this.appKit) == null ? void 0 : g.universalAdapter) == null ? void 0 : w.connectionControllerClient) == null ? void 0 : m.connectWalletConnect) == null ? void 0 : E.call(m, f));
      },
      connectExternal: async ({ id: f, info: g, provider: w }) => {
        var S;
        (S = this.appKit) == null || S.setClientId(null);
        const E = {
          [F.INJECTED_CONNECTOR_ID]: {
            getProvider: () => {
              var N;
              return (N = this.ethersConfig) == null ? void 0 : N.injected;
            },
            providerType: "injected"
          },
          [F.EIP6963_CONNECTOR_ID]: {
            getProvider: () => w,
            providerType: "eip6963"
          },
          [F.COINBASE_SDK_CONNECTOR_ID]: {
            getProvider: () => {
              var N;
              return (N = this.ethersConfig) == null ? void 0 : N.coinbase;
            },
            providerType: "coinbase"
          },
          [F.AUTH_CONNECTOR_ID]: {
            getProvider: () => this.authProvider,
            providerType: "w3mAuth"
          }
        }[f];
        if (!E)
          throw new Error(`Unsupported connector ID: ${f}`);
        const C = E.getProvider();
        if (!C)
          throw new Error(`Provider for connector ${f} is undefined`);
        try {
          C && f !== F.AUTH_CONNECTOR_ID && await C.request({ method: "eth_requestAccounts" }), await this.setProvider(C, E.providerType, g == null ? void 0 : g.name);
        } catch (N) {
          if (f === F.COINBASE_SDK_CONNECTOR_ID)
            throw new Error(N.message);
        }
      },
      checkInstalled: (f) => {
        var g;
        return f ? (g = this.ethersConfig) != null && g.injected && !(window != null && window.ethereum) ? !1 : f.some((w) => {
          var m;
          return !!((m = window.ethereum) != null && m[String(w)]);
        }) : !!window.ethereum;
      },
      disconnect: async () => {
        var E, C, S, N, _;
        const f = He.getProvider("eip155"), g = He.state.providerIds.eip155;
        if ((E = this.appKit) == null || E.setClientId(null), (N = (S = (C = this.options) == null ? void 0 : C.siweConfig) == null ? void 0 : S.options) != null && N.signOutOnDisconnect) {
          const { SIWEController: x } = await import("./index-DAWldXKo.js");
          await x.signOut();
        }
        const m = {
          [F.WALLET_CONNECT_CONNECTOR_ID]: async () => {
            var x, P, M;
            return await ((M = (P = (x = this.appKit) == null ? void 0 : x.universalAdapter) == null ? void 0 : P.connectionControllerClient) == null ? void 0 : M.disconnect());
          },
          coinbaseWalletSDK: async () => {
            var x, P, M;
            return await ((M = (P = (x = this.appKit) == null ? void 0 : x.universalAdapter) == null ? void 0 : P.connectionControllerClient) == null ? void 0 : M.disconnect());
          },
          [F.AUTH_CONNECTOR_ID]: async () => {
            var x;
            await ((x = this.authProvider) == null ? void 0 : x.disconnect());
          },
          [F.EIP6963_CONNECTOR_ID]: async () => {
            f && await this.revokeProviderPermissions(f);
          },
          [F.INJECTED_CONNECTOR_ID]: async () => {
            f && (f.emit("disconnect"), await this.revokeProviderPermissions(f));
          }
        }[g];
        m ? await m() : console.warn(`No disconnect function found for provider type: ${g}`), Tt.removeItem(_t.WALLET_ID), (_ = this.appKit) == null || _.resetAccount(this.chainNamespace);
      },
      signMessage: async (f) => {
        const g = He.getProvider(this.chainNamespace), w = On.state.activeCaipAddress, m = Tn.getPlainAddress(w);
        if (!m)
          throw new Error("Address is undefined");
        if (!g)
          throw new Error("Provider is undefined");
        return await Dn.signMessage(f, g, m);
      },
      parseUnits: Dn.parseUnits,
      formatUnits: Dn.formatUnits,
      estimateGas: async (f) => {
        var C;
        if (f.chainNamespace && f.chainNamespace !== "eip155")
          throw new Error(`Invalid chain namespace - Expected eip155, got ${f.chainNamespace}`);
        const g = He.getProvider("eip155"), w = On.state.activeCaipAddress, m = Tn.getPlainAddress(w), E = (C = this.appKit) == null ? void 0 : C.getCaipNetwork();
        if (!m)
          throw new Error("Address is undefined");
        if (!g)
          throw new Error("Provider is undefined");
        return await Dn.estimateGas(f, g, m, Number(E == null ? void 0 : E.chainId));
      },
      sendTransaction: async (f) => {
        var C;
        if (f.chainNamespace && f.chainNamespace !== "eip155")
          throw new Error(`Invalid chain namespace - Expected eip155, got ${f.chainNamespace}`);
        const g = He.getProvider("eip155"), w = On.state.activeCaipAddress, m = Tn.getPlainAddress(w), E = (C = this.appKit) == null ? void 0 : C.getCaipNetwork();
        if (!m)
          throw new Error("Address is undefined");
        if (!g)
          throw new Error("Provider is undefined");
        return await Dn.sendTransaction(f, g, m, Number(E == null ? void 0 : E.chainId));
      },
      writeContract: async (f) => {
        var C;
        const g = He.getProvider("eip155"), w = On.state.activeCaipAddress, m = Tn.getPlainAddress(w), E = (C = this.appKit) == null ? void 0 : C.getCaipNetwork();
        if (!m)
          throw new Error("Address is undefined");
        if (!g)
          throw new Error("Provider is undefined");
        return await Dn.writeContract(f, g, m, Number(E == null ? void 0 : E.chainId));
      },
      getEnsAddress: async (f) => this.appKit ? await Dn.getEnsAddress(f, this.appKit) : !1,
      getEnsAvatar: async (f) => {
        var w;
        const g = (w = this.appKit) == null ? void 0 : w.getCaipNetwork();
        return await Dn.getEnsAvatar(f, Number(g == null ? void 0 : g.chainId));
      }
    }, On.state.chains.set(this.chainNamespace, {
      chainNamespace: this.chainNamespace,
      connectionControllerClient: this.connectionControllerClient,
      networkControllerClient: this.networkControllerClient,
      adapterType: this.adapterType,
      caipNetworks: this.caipNetworks
    }), this.ethersConfig && this.syncConnectors(this.ethersConfig), typeof window < "u" && this.listenConnectors(!0), (o = this.appKit) == null || o.setEIP6963Enabled((i = this.ethersConfig) == null ? void 0 : i.EIP6963);
    const n = ((a = t.features) == null ? void 0 : a.email) === void 0 ? Au.DEFAULT_FEATURES.email : (c = t.features) == null ? void 0 : c.email, s = (l = t.features) != null && l.socials ? ((d = (h = t.features) == null ? void 0 : h.socials) == null ? void 0 : d.length) > 0 : Au.DEFAULT_FEATURES.socials;
    (n || s) && this.syncAuthConnector(this.options.projectId), this.ethersConfig && this.checkActiveProviders(this.ethersConfig), this.syncRequestedNetworks(this.caipNetworks);
  }
  subscribeState(e) {
    var t;
    return (t = this.appKit) == null ? void 0 : t.subscribeState((n) => e(n));
  }
  async disconnect() {
    var e;
    await ((e = this.connectionControllerClient) == null ? void 0 : e.disconnect());
  }
  async revokeProviderPermissions(e) {
    try {
      (await e.request({
        method: "wallet_getPermissions"
      })).find((s) => s.parentCapability === "eth_accounts") && await e.request({
        method: "wallet_revokePermissions",
        params: [{ eth_accounts: {} }]
      });
    } catch (t) {
      console.info("Could not revoke permissions from wallet. Disconnecting...", t);
    }
  }
  getApprovedCaipNetworksData() {
    return new Promise((e) => {
      const t = Tt.getItem(_t.WALLET_ID);
      if (!t)
        throw new Error("No wallet id found to get approved networks data");
      const s = {
        [F.AUTH_CONNECTOR_ID]: {
          supportsAllNetworks: !0,
          approvedCaipNetworkIds: gt.WalletConnectRpcChainIds.map((i) => `${F.EIP155}:${i}`)
        }
      }[t];
      e(s || {
        supportsAllNetworks: !0,
        approvedCaipNetworkIds: []
      });
    });
  }
  checkActiveProviders(e) {
    var o;
    const t = Tt.getItem(_t.WALLET_ID), n = Tt.getItem(_t.WALLET_NAME);
    if (!t)
      return;
    const i = {
      [F.INJECTED_CONNECTOR_ID]: {
        provider: e.injected
      },
      [F.COINBASE_SDK_CONNECTOR_ID]: {
        provider: e.coinbase
      },
      [F.EIP6963_CONNECTOR_ID]: {
        provider: (o = this.EIP6963Providers.find((a) => a.info.name === n)) == null ? void 0 : o.provider
      }
    }[t];
    i != null && i.provider && (this.setProvider(i.provider, t), this.setupProviderListeners(i.provider, t));
  }
  async setProvider(e, t, n) {
    var s, i, o;
    if (t === "w3mAuth")
      this.setAuthProvider();
    else {
      const a = t;
      if (Tt.setItem(_t.WALLET_ID, a), n && Tt.setItem(_t.WALLET_NAME, n), e) {
        const { addresses: c, chainId: l } = await wr.getUserInfo(e), h = c == null ? void 0 : c[0], d = `${this.chainNamespace}:${l}:${h}`;
        h && l && ((s = this.appKit) == null || s.setCaipAddress(d, this.chainNamespace), He.setProviderId("eip155", t), He.setProvider("eip155", e), (i = this.appKit) == null || i.setStatus("connected", this.chainNamespace), (o = this.appKit) == null || o.setAllAccounts(c.map((f) => ({ address: f, type: "eoa" })), this.chainNamespace));
      }
    }
  }
  async setAuthProvider() {
    var e, t, n, s, i, o, a, c, l, h, d;
    if (Tt.setItem(_t.WALLET_ID, F.AUTH_CONNECTOR_ID), this.authProvider) {
      (e = this.appKit) == null || e.setLoading(!0);
      const { address: f, chainId: g, smartAccountDeployed: w, preferredAccountType: m, accounts: E = [] } = await this.authProvider.connect({
        chainId: Number(Eu.caipNetworkIdToNumber((n = (t = this.appKit) == null ? void 0 : t.getCaipNetwork()) == null ? void 0 : n.id) ?? ((s = this.caipNetworks[0]) == null ? void 0 : s.chainId))
      }), { smartAccountEnabledNetworks: C } = await this.authProvider.getSmartAccountEnabledNetworks();
      (i = this.appKit) == null || i.setSmartAccountEnabledNetworks(C, this.chainNamespace), f && g && ((o = this.appKit) == null || o.setAllAccounts(E.length > 0 ? E : [{ address: f, type: m }], this.chainNamespace), (a = this.appKit) == null || a.setStatus("connected", this.chainNamespace), (c = this.appKit) == null || c.setCaipAddress(`${this.chainNamespace}:${g}:${f}`, this.chainNamespace), (l = this.appKit) == null || l.setPreferredAccountType(m, this.chainNamespace), (h = this.appKit) == null || h.setSmartAccountDeployed(!!w, this.chainNamespace), He.setProvider("eip155", this.authProvider), He.setProviderId("eip155", F.AUTH_CONNECTOR_ID), this.setupProviderListeners(this.authProvider, "w3mAuth"), this.watchModal()), (d = this.appKit) == null || d.setLoading(!1);
    }
  }
  watchModal() {
    this.authProvider && this.subscribeState((e) => {
      var t;
      e.open || (t = this.authProvider) == null || t.rejectRpcRequests();
    });
  }
  setupProviderListeners(e, t) {
    const n = () => {
      Tt.removeItem(_t.WALLET_ID), this.removeListeners(e);
    }, s = (o) => {
      var c, l, h, d;
      const a = o == null ? void 0 : o[0];
      a ? ((c = this.appKit) == null || c.setCaipAddress(a, this.chainNamespace), t === F.EIP6963_CONNECTOR_ID && ((l = this.appKit) == null || l.setAllAccounts(o.map((f) => ({ address: f, type: "eoa" })), this.chainNamespace))) : (t === F.EIP6963_CONNECTOR_ID && ((h = this.appKit) == null || h.setAllAccounts([], this.chainNamespace)), Tt.removeItem(_t.WALLET_ID), (d = this.appKit) == null || d.resetAccount(this.chainNamespace));
    }, i = (o) => {
      var h, d;
      const a = typeof o == "string" ? wr.hexStringToNumber(o) : Number(o), c = this.caipNetworks.find((f) => f.chainId === a), l = (h = this.appKit) == null ? void 0 : h.getCaipNetwork();
      (!l || (l == null ? void 0 : l.id) !== (c == null ? void 0 : c.id)) && ((d = this.appKit) == null || d.setCaipNetwork(c));
    };
    t === F.AUTH_CONNECTOR_ID ? this.setupAuthListeners(e) : (e.on("disconnect", n), e.on("accountsChanged", s), e.on("chainChanged", i)), this.providerHandlers = {
      disconnect: n,
      accountsChanged: s,
      chainChanged: i
    };
  }
  removeListeners(e) {
    this.providerHandlers && (e.removeListener("disconnect", this.providerHandlers.disconnect), e.removeListener("accountsChanged", this.providerHandlers.accountsChanged), e.removeListener("chainChanged", this.providerHandlers.chainChanged), this.providerHandlers = null);
  }
  setupAuthListeners(e) {
    e.onRpcRequest((t) => {
      var n;
      xc.checkIfRequestExists(t) ? xc.checkIfRequestIsSafe(t) || (n = this.appKit) == null || n.handleUnsafeRPCRequest() : this.handleInvalidAuthRequest();
    }), e.onRpcError(() => this.handleAuthRpcError()), e.onRpcSuccess((t, n) => this.handleAuthRpcSuccess(t, n)), e.onNotConnected(() => this.handleAuthNotConnected()), e.onConnect(({ preferredAccountType: t }) => this.handleAuthIsConnected(t)), e.onSetPreferredAccount(({ address: t, type: n }) => {
      t && this.handleAuthSetPreferredAccount(t, n);
    });
  }
  handleInvalidAuthRequest() {
    var e;
    (e = this.appKit) == null || e.open(), setTimeout(() => {
      var t;
      (t = this.appKit) == null || t.showErrorMessage(Up.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE);
    }, 300);
  }
  handleAuthRpcError() {
    var e, t, n, s;
    (e = this.appKit) != null && e.isOpen() && ((t = this.appKit) != null && t.isTransactionStackEmpty() ? (n = this.appKit) == null || n.close() : (s = this.appKit) == null || s.popTransactionStack(!0));
  }
  handleAuthRpcSuccess(e, t) {
    var s, i, o;
    xc.checkIfRequestIsSafe(t) || ((s = this.appKit) != null && s.isTransactionStackEmpty() ? (i = this.appKit) == null || i.close() : (o = this.appKit) == null || o.popTransactionStack());
  }
  handleAuthNotConnected() {
    var e;
    (e = this.appKit) == null || e.setCaipAddress(void 0, this.chainNamespace);
  }
  handleAuthIsConnected(e) {
    var n, s;
    ((n = this.appKit) == null ? void 0 : n.getActiveChainNamespace()) === this.chainNamespace && ((s = this.appKit) == null || s.setPreferredAccountType(e, this.chainNamespace));
  }
  handleAuthSetPreferredAccount(e, t) {
    var s, i, o, a, c, l, h;
    if (!e)
      return;
    (s = this.appKit) == null || s.setLoading(!0);
    const n = Eu.caipNetworkIdToNumber((o = (i = this.appKit) == null ? void 0 : i.getCaipNetwork()) == null ? void 0 : o.id);
    (a = this.appKit) == null || a.setCaipAddress(`eip155:${n}:${e}`, this.chainNamespace), (c = this.appKit) == null || c.setStatus("connected", this.chainNamespace), (l = this.appKit) == null || l.setPreferredAccountType(t, this.chainNamespace), this.syncAccount({
      address: e
    }).then(() => {
      var d;
      return (d = this.appKit) == null ? void 0 : d.setLoading(!1);
    }), (h = this.appKit) == null || h.setLoading(!1);
  }
  async syncReownName(e) {
    var t, n, s, i;
    try {
      const o = await ((t = this.appKit) == null ? void 0 : t.getReownName(e));
      if (o != null && o[0]) {
        const a = o[0];
        (n = this.appKit) == null || n.setProfileName(a.name, this.chainNamespace);
      } else
        (s = this.appKit) == null || s.setProfileName(null, this.chainNamespace);
    } catch {
      (i = this.appKit) == null || i.setProfileName(null, this.chainNamespace);
    }
  }
  async syncAccount({ address: e, caipNetwork: t }) {
    var a, c, l, h, d, f, g, w, m;
    const n = t || ((a = this.appKit) == null ? void 0 : a.getCaipNetwork()), s = (c = this.appKit) == null ? void 0 : c.getPreferredAccountType(), i = (n == null ? void 0 : n.chainNamespace) === ca.CHAIN.EVM, o = n == null ? void 0 : n.id;
    e ? i && ((l = this.appKit) == null || l.setPreferredAccountType(s, this.chainNamespace), (h = this.appKit) == null || h.setCaipAddress(`${o}:${e}`, this.chainNamespace), this.syncConnectedWalletInfo(), this.ethersConfig && this.checkActiveProviders(this.ethersConfig), n != null && n.explorerUrl && ((d = this.appKit) == null || d.setAddressExplorerUrl(`${n.explorerUrl}/address/${e}`, this.chainNamespace)), await Promise.all([
      this.syncProfile(e),
      (f = this.appKit) == null ? void 0 : f.setApprovedCaipNetworksData(this.chainNamespace)
    ])) : ((g = this.appKit) == null || g.resetWcConnection(), (w = this.appKit) == null || w.resetNetwork(), (m = this.appKit) == null || m.setAllAccounts([], this.chainNamespace));
  }
  async syncProfile(e) {
    var n, s, i, o, a, c, l;
    const t = (n = this.appKit) == null ? void 0 : n.getCaipNetwork();
    try {
      const h = await ((s = this.appKit) == null ? void 0 : s.fetchIdentity({
        address: e
      })), d = h == null ? void 0 : h.name, f = h == null ? void 0 : h.avatar;
      (i = this.appKit) == null || i.setProfileName(d, this.chainNamespace), (o = this.appKit) == null || o.setProfileImage(f, this.chainNamespace), d || await this.syncReownName(e);
    } catch {
      if ((t == null ? void 0 : t.chainId) === 1) {
        const h = new ns("mainnet"), d = await h.lookupAddress(e), f = await h.getAvatar(e);
        d ? (a = this.appKit) == null || a.setProfileName(d, this.chainNamespace) : await this.syncReownName(e), f && ((c = this.appKit) == null || c.setProfileImage(f, this.chainNamespace));
      } else
        await this.syncReownName(e), (l = this.appKit) == null || l.setProfileImage(null, this.chainNamespace);
    }
  }
  async syncBalance(e, t) {
    var i, o;
    const n = (i = this.appKit) == null ? void 0 : i.getCaipNetworks().find((a) => a.id === t.id), s = t.chainNamespace === ca.CHAIN.EVM;
    if (t && n && s) {
      const a = new ep(t.rpcUrl, {
        chainId: t.chainId,
        name: t.name
      });
      if (a) {
        const c = await a.getBalance(e), l = fg(c);
        (o = this.appKit) == null || o.setBalance(l, t.currency, this.chainNamespace);
      }
    }
  }
  syncConnectedWalletInfo() {
    var n, s, i, o, a, c, l;
    const e = Tt.getItem(_t.WALLET_ID), t = He.state.providerIds.eip155;
    if (t === F.EIP6963_CONNECTOR_ID) {
      if (e) {
        const h = this.EIP6963Providers.find((d) => d.info.name === e);
        h && ((n = this.appKit) == null || n.setConnectedWalletInfo({ ...h.info }, this.chainNamespace));
      }
    } else if (t === F.WALLET_CONNECT_CONNECTOR_ID) {
      const h = He.getProvider("eip155");
      h != null && h.session && ((i = this.appKit) == null || i.setConnectedWalletInfo({
        ...h.session.peer.metadata,
        name: h.session.peer.metadata.name,
        icon: (s = h.session.peer.metadata.icons) == null ? void 0 : s[0]
      }, this.chainNamespace));
    } else if (t === F.COINBASE_SDK_CONNECTOR_ID) {
      const h = (o = this.appKit) == null ? void 0 : o.getConnectors().find((d) => d.id === F.COINBASE_SDK_CONNECTOR_ID);
      (c = this.appKit) == null || c.setConnectedWalletInfo({ name: "Coinbase Wallet", icon: (a = this.appKit) == null ? void 0 : a.getConnectorImage(h) }, this.chainNamespace);
    } else
      e && ((l = this.appKit) == null || l.setConnectedWalletInfo({ name: e }, this.chainNamespace));
  }
  syncRequestedNetworks(e) {
    [
      ...new Set(e.map((n) => n.chainNamespace))
    ].forEach((n) => {
      var s;
      (s = this.appKit) == null || s.setRequestedCaipNetworks(e.filter((i) => i.chainNamespace === n), n);
    });
  }
  async switchNetwork(e) {
    var i, o, a, c, l, h, d, f;
    async function t(g) {
      var w, m;
      try {
        await g.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: wr.numberToHexString(e.chainId) }]
        });
      } catch (E) {
        if (E.code === Pc.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || E.code === Pc.ERROR_CODE_DEFAULT || ((m = (w = E == null ? void 0 : E.data) == null ? void 0 : w.originalError) == null ? void 0 : m.code) === Pc.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)
          await wr.addEthereumChain(g, e);
        else
          throw new Error("Chain is not supported");
      }
    }
    const n = He.getProvider("eip155"), s = He.state.providerIds.eip155;
    if (n)
      switch (s) {
        case F.WALLET_CONNECT_CONNECTOR_ID:
          (o = (i = this.appKit) == null ? void 0 : i.universalAdapter) == null || o.networkControllerClient.switchCaipNetwork(e);
          break;
        case F.INJECTED_CONNECTOR_ID:
        case F.EIP6963_CONNECTOR_ID:
        case F.COINBASE_SDK_CONNECTOR_ID:
          n && await t(n);
          break;
        case F.AUTH_CONNECTOR_ID:
          if (this.authProvider)
            try {
              (a = this.appKit) == null || a.setLoading(!0);
              const { chainId: g } = await this.authProvider.switchNetwork(e.chainId), { address: w, preferredAccountType: m } = await this.authProvider.connect({
                chainId: e.chainId
              }), E = `${this.chainNamespace}:${g}:${w}`;
              (c = this.appKit) == null || c.setCaipNetwork(e), (l = this.appKit) == null || l.setCaipAddress(E, this.chainNamespace), (h = this.appKit) == null || h.setPreferredAccountType(m, this.chainNamespace), await this.syncAccount({ address: w }), (d = this.appKit) == null || d.setLoading(!1);
            } catch {
              throw new Error("Switching chain failed");
            } finally {
              (f = this.appKit) == null || f.setLoading(!1);
            }
          break;
        default:
          throw new Error("Unsupported provider type");
      }
  }
  syncConnectors(e) {
    var n, s, i, o, a;
    const t = [];
    if (e.injected) {
      const c = gt.ConnectorTypesMap[F.INJECTED_CONNECTOR_ID];
      t.push({
        id: F.INJECTED_CONNECTOR_ID,
        explorerId: gt.ConnectorExplorerIds[F.INJECTED_CONNECTOR_ID],
        imageId: gt.ConnectorImageIds[F.INJECTED_CONNECTOR_ID],
        imageUrl: (s = (n = this.options) == null ? void 0 : n.connectorImages) == null ? void 0 : s[F.INJECTED_CONNECTOR_ID],
        name: gt.ConnectorNamesMap[F.INJECTED_CONNECTOR_ID],
        type: c,
        chain: this.chainNamespace
      });
    }
    e.coinbase && t.push({
      id: F.COINBASE_SDK_CONNECTOR_ID,
      explorerId: gt.ConnectorExplorerIds[F.COINBASE_SDK_CONNECTOR_ID],
      imageId: gt.ConnectorImageIds[F.COINBASE_SDK_CONNECTOR_ID],
      imageUrl: (o = (i = this.options) == null ? void 0 : i.connectorImages) == null ? void 0 : o[F.COINBASE_SDK_CONNECTOR_ID],
      name: gt.ConnectorNamesMap[F.COINBASE_SDK_CONNECTOR_ID],
      type: "EXTERNAL",
      chain: this.chainNamespace
    }), (a = this.appKit) == null || a.setConnectors(t);
  }
  async syncAuthConnector(e, t = !1) {
    var n, s, i, o;
    if (t || typeof window < "u") {
      this.authProvider = Fp.getInstance(e), (n = this.appKit) == null || n.addConnector({
        id: F.AUTH_CONNECTOR_ID,
        type: "AUTH",
        name: "Auth",
        provider: this.authProvider,
        chain: this.chainNamespace
      }), (s = this.appKit) == null || s.setLoading(!0);
      const a = this.authProvider.getLoginEmailUsed();
      (i = this.appKit) == null || i.setLoading(a);
      const { isConnected: c } = await this.authProvider.isConnected();
      c ? await this.setAuthProvider() : (o = this.appKit) == null || o.setLoading(!1);
    }
  }
  eip6963EventHandler(e) {
    var t, n, s, i;
    if (e.detail) {
      const { info: o, provider: a } = e.detail, c = (t = this.appKit) == null ? void 0 : t.getConnectors(), l = c == null ? void 0 : c.find((f) => f.name === o.name), d = (c == null ? void 0 : c.find((f) => f.id === F.COINBASE_SDK_CONNECTOR_ID)) && e.detail.info.rdns === F.CONNECTOR_RDNS_MAP[F.COINBASE_SDK_CONNECTOR_ID];
      if (!l && !d) {
        const f = gt.ConnectorTypesMap[F.EIP6963_CONNECTOR_ID];
        {
          (i = this.appKit) == null || i.addConnector({
            id: F.EIP6963_CONNECTOR_ID,
            type: f,
            imageUrl: o.icon ?? ((s = (n = this.options) == null ? void 0 : n.connectorImages) == null ? void 0 : s[F.EIP6963_CONNECTOR_ID]),
            name: o.name,
            provider: a,
            info: o,
            chain: this.chainNamespace
          });
          const g = {
            provider: a,
            info: o
          };
          this.EIP6963Providers.push(g);
        }
      }
    }
  }
  listenConnectors(e) {
    if (typeof window < "u" && e) {
      const t = this.eip6963EventHandler.bind(this);
      window.addEventListener(F.EIP6963_ANNOUNCE_EVENT, t), window.dispatchEvent(new Event(F.EIP6963_REQUEST_EVENT));
    }
  }
}
const X1 = "@reown/appkit-ethers", eA = "1.0.4", tA = "module", nA = "./dist/esm/exports/index.js", rA = "./dist/types/exports/index.d.ts", sA = [
  "dist",
  "!tsconfig.tsbuildinfo"
], iA = {
  ".": {
    types: "./dist/types/exports/index.d.ts",
    import: "./dist/esm/exports/index.js",
    default: "./dist/esm/exports/index.js"
  },
  "./react": {
    types: "./dist/types/exports/react.d.ts",
    import: "./dist/esm/exports/react.js",
    default: "./dist/esm/exports/react.js"
  },
  "./vue": {
    types: "./dist/types/exports/vue.d.ts",
    import: "./dist/esm/exports/vue.js",
    default: "./dist/esm/exports/vue.js"
  }
}, oA = {
  "*": {
    react: [
      "./dist/types/exports/react.d.ts"
    ],
    vue: [
      "./dist/types/exports/vue.d.ts"
    ]
  }
}, aA = {
  "build:clean": "rm -rf dist",
  build: "tsc --build",
  watch: "tsc --watch",
  typecheck: "tsc --noEmit",
  lint: "eslint . --ext .js,.jsx,.ts,.tsx"
}, cA = {
  "@coinbase/wallet-sdk": "4.0.3",
  "@walletconnect/utils": "2.16.1",
  "@reown/appkit": "workspace:*",
  "@reown/appkit-adapter-ethers": "workspace:*",
  "@reown/appkit-common": "workspace:*",
  "@reown/appkit-wallet": "workspace:*",
  "@reown/appkit-polyfills": "workspace:*",
  "@reown/appkit-utils": "workspace:*",
  "@reown/appkit-siwe": "workspace:*",
  valtio: "1.11.2"
}, lA = {
  ethers: ">=6.0.0",
  react: ">=17",
  "react-dom": ">=17",
  vue: ">=3"
}, uA = {
  react: "18.2.0",
  "react-dom": "18.2.0",
  vue: "3.4.3"
}, hA = {
  react: {
    optional: !0
  },
  "react-dom": {
    optional: !0
  },
  vue: {
    optional: !0
  }
}, dA = "Reown <support@reown.com> (https://reown.com)", fA = "Apache-2.0", pA = "https://github.com/WalletConnect/web3modal", gA = {
  type: "git",
  url: "git+https://github.com/WalletConnect/web3modal.git"
}, mA = {
  url: "https://github.com/WalletConnect/web3modal/issues"
}, yA = {
  name: X1,
  version: eA,
  type: tA,
  main: nA,
  types: rA,
  files: sA,
  exports: iA,
  typesVersions: oA,
  scripts: aA,
  dependencies: cA,
  peerDependencies: lA,
  devDependencies: uA,
  peerDependenciesMeta: hA,
  author: dA,
  license: fA,
  homepage: pA,
  repository: gA,
  bugs: mA
};
function wA(r) {
  const e = new Y1();
  return new Hp({
    ...r,
    sdkVersion: `html-ethers-${yA.version}`,
    adapters: [e]
  });
}
const IA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createAppKit: wA
}, Symbol.toStringTag, { value: "Module" }));
export {
  IA as AppKit
};
