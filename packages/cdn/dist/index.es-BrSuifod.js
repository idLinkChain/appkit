import { bd as Ns, m as be, bf as yb, bg as tt, bh as Th, bi as xa, bj as Wr, bk as qr, bl as Wp, B as Os, bm as Xp, bn as Zp, bo as wb, bp as td, bq as Ef, br as vh, bs as ba, bt as bb, bu as _b, bv as Ab, bw as Eb, bx as dn, by as Ib, bz as tr, bA as _r, bb as gs, bB as Na, bC as Sb, bD as Pb, bE as Mb, bF as If, bG as Cb, bH as xb, bI as Nb, bJ as Rb, bK as an, bL as Fh, bM as ti, bN as Ob, bO as Dh, bP as qh, bQ as Ra, bR as kh, bS as ed, bT as Vi, bU as gi, bV as ro, bW as lo, bX as en, bY as Mi } from "./W3MFrameProviderSingleton-C9zzHw2W.js";
const Tb = ":";
function io(i) {
  const [t, e] = i.split(Tb);
  return { namespace: t, reference: e };
}
function Sf(i, t = []) {
  const e = [];
  return Object.keys(i).forEach((s) => {
    if (t.length && !t.includes(s))
      return;
    const o = i[s];
    e.push(...o.accounts);
  }), e;
}
function rd(i, t) {
  return i.includes(":") ? [i] : t.chains || [];
}
var Fb = Object.defineProperty, Pf = Object.getOwnPropertySymbols, Db = Object.prototype.hasOwnProperty, qb = Object.prototype.propertyIsEnumerable, Mf = (i, t, e) => t in i ? Fb(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, Cf = (i, t) => {
  for (var e in t || (t = {}))
    Db.call(t, e) && Mf(i, e, t[e]);
  if (Pf)
    for (var e of Pf(t))
      qb.call(t, e) && Mf(i, e, t[e]);
  return i;
};
const kb = "ReactNative", yr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Bb = "js";
function ao() {
  return typeof Ns < "u" && typeof Ns.versions < "u" && typeof Ns.versions.node < "u";
}
function fo() {
  return !Th() && !!Wp() && navigator.product === kb;
}
function po() {
  return !ao() && !!Wp() && !!Th();
}
function go() {
  return fo() ? yr.reactNative : ao() ? yr.node : po() ? yr.browser : yr.unknown;
}
function Ub() {
  var i;
  try {
    return fo() && typeof be < "u" && typeof (be == null ? void 0 : be.Application) < "u" ? (i = be.Application) == null ? void 0 : i.applicationId : void 0;
  } catch {
    return;
  }
}
function $b(i, t) {
  let e = ba.parse(i);
  return e = Cf(Cf({}, e), t), i = ba.stringify(e), i;
}
function jb() {
  return yb() || { name: "", description: "", url: "", icons: [""] };
}
function zb() {
  if (go() === yr.reactNative && typeof be < "u" && typeof (be == null ? void 0 : be.Platform) < "u") {
    const { OS: e, Version: s } = be.Platform;
    return [e, s].join("-");
  }
  const i = Ab();
  if (i === null)
    return "unknown";
  const t = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
  return i.type === "browser" ? [t, i.name, i.version].join("-") : [t, i.version].join("-");
}
function Lb() {
  var i;
  const t = go();
  return t === yr.browser ? [t, ((i = Eb()) == null ? void 0 : i.host) || "unknown"].join(":") : t;
}
function Kb(i, t, e) {
  const s = zb(), o = Lb();
  return [[i, t].join("-"), [Bb, e].join("-"), s, o].join("/");
}
function Hb({ protocol: i, version: t, relayUrl: e, sdkVersion: s, auth: o, projectId: a, useOnCloseEvent: h, bundleId: p }) {
  const v = e.split("?"), y = Kb(i, t, s), P = { auth: o, ua: y, projectId: a, useOnCloseEvent: h || void 0, origin: p || void 0 }, S = $b(v[1] || "", P);
  return v[0] + "?" + S;
}
function xs(i, t) {
  return i.filter((e) => t.includes(e)).length === i.length;
}
function id(i) {
  return Object.fromEntries(i.entries());
}
function sd(i) {
  return new Map(Object.entries(i));
}
function Cs(i = tt.FIVE_MINUTES, t) {
  const e = tt.toMiliseconds(i || tt.FIVE_MINUTES);
  let s, o, a;
  return { resolve: (h) => {
    a && s && (clearTimeout(a), s(h));
  }, reject: (h) => {
    a && o && (clearTimeout(a), o(h));
  }, done: () => new Promise((h, p) => {
    a = setTimeout(() => {
      p(new Error(t));
    }, e), s = h, o = p;
  }) };
}
function hn(i, t, e) {
  return new Promise(async (s, o) => {
    const a = setTimeout(() => o(new Error(e)), t);
    try {
      const h = await i;
      s(h);
    } catch (h) {
      o(h);
    }
    clearTimeout(a);
  });
}
function nd(i, t) {
  if (typeof t == "string" && t.startsWith(`${i}:`))
    return t;
  if (i.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (i.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${i}`);
}
function Vb(i) {
  return nd("topic", i);
}
function Qb(i) {
  return nd("id", i);
}
function od(i) {
  const [t, e] = i.split(":"), s = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof e == "string")
    s.topic = e;
  else if (t === "id" && Number.isInteger(Number(e)))
    s.id = Number(e);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${e}`);
  return s;
}
function je(i, t) {
  return tt.fromMiliseconds(Date.now() + tt.toMiliseconds(i));
}
function ls(i) {
  return Date.now() >= tt.toMiliseconds(i);
}
function It(i, t) {
  return `${i}${t ? `:${t}` : ""}`;
}
function pa(i = [], t = []) {
  return [.../* @__PURE__ */ new Set([...i, ...t])];
}
async function Gb({ id: i, topic: t, wcDeepLink: e }) {
  var s;
  try {
    if (!e)
      return;
    const o = typeof e == "string" ? JSON.parse(e) : e;
    let a = o == null ? void 0 : o.href;
    if (typeof a != "string")
      return;
    a.endsWith("/") && (a = a.slice(0, -1));
    const h = `${a}/wc?requestId=${i}&sessionTopic=${t}`, p = go();
    if (p === yr.browser) {
      if (!((s = Th()) != null && s.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      h.startsWith("https://") || h.startsWith("http://") ? window.open(h, "_blank", "noreferrer noopener") : window.open(h, "_self", "noreferrer noopener");
    } else
      p === yr.reactNative && typeof (be == null ? void 0 : be.Linking) < "u" && await be.Linking.openURL(h);
  } catch (o) {
    console.error(o);
  }
}
async function Jb(i, t) {
  try {
    return await i.getItem(t) || (po() ? localStorage.getItem(t) : void 0);
  } catch (e) {
    console.error(e);
  }
}
function Yb() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (i) => {
    const t = Math.random() * 16 | 0;
    return (i === "x" ? t : t & 3 | 8).toString(16);
  });
}
var ad = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof be < "u" ? be : typeof self < "u" ? self : {};
function Wb(i) {
  var t = i.default;
  if (typeof t == "function") {
    var e = function() {
      return t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(i).forEach(function(s) {
    var o = Object.getOwnPropertyDescriptor(i, s);
    Object.defineProperty(e, s, o.get ? o : { enumerable: !0, get: function() {
      return i[s];
    } });
  }), e;
}
var cd = { exports: {} };
/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/
(function(i) {
  (function() {
    var t = "input is invalid type", e = "finalize already called", s = typeof window == "object", o = s ? window : {};
    o.JS_SHA3_NO_WINDOW && (s = !1);
    var a = !s && typeof self == "object", h = !o.JS_SHA3_NO_NODE_JS && typeof Ns == "object" && Ns.versions && Ns.versions.node;
    h ? o = ad : a && (o = self);
    var p = !o.JS_SHA3_NO_COMMON_JS && !0 && i.exports, v = !o.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", y = "0123456789abcdef".split(""), P = [31, 7936, 2031616, 520093696], S = [4, 1024, 262144, 67108864], O = [1, 256, 65536, 16777216], F = [6, 1536, 393216, 100663296], q = [0, 8, 16, 24], K = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], H = [224, 256, 384, 512], Q = [128, 256], ht = ["hex", "buffer", "arrayBuffer", "array", "digest"], ut = { 128: 168, 256: 136 };
    (o.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(m) {
      return Object.prototype.toString.call(m) === "[object Array]";
    }), v && (o.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(m) {
      return typeof m == "object" && m.buffer && m.buffer.constructor === ArrayBuffer;
    });
    for (var Y = function(m, $, B) {
      return function(L) {
        return new A(m, $, m).update(L)[B]();
      };
    }, et = function(m, $, B) {
      return function(L, rt) {
        return new A(m, $, rt).update(L)[B]();
      };
    }, ct = function(m, $, B) {
      return function(L, rt, X, Z) {
        return d["cshake" + m].update(L, rt, X, Z)[B]();
      };
    }, st = function(m, $, B) {
      return function(L, rt, X, Z) {
        return d["kmac" + m].update(L, rt, X, Z)[B]();
      };
    }, gt = function(m, $, B, L) {
      for (var rt = 0; rt < ht.length; ++rt) {
        var X = ht[rt];
        m[X] = $(B, L, X);
      }
      return m;
    }, kt = function(m, $) {
      var B = Y(m, $, "hex");
      return B.create = function() {
        return new A(m, $, m);
      }, B.update = function(L) {
        return B.create().update(L);
      }, gt(B, Y, m, $);
    }, Fe = function(m, $) {
      var B = et(m, $, "hex");
      return B.create = function(L) {
        return new A(m, $, L);
      }, B.update = function(L, rt) {
        return B.create(rt).update(L);
      }, gt(B, et, m, $);
    }, Ct = function(m, $) {
      var B = ut[m], L = ct(m, $, "hex");
      return L.create = function(rt, X, Z) {
        return !X && !Z ? d["shake" + m].create(rt) : new A(m, $, rt).bytepad([X, Z], B);
      }, L.update = function(rt, X, Z, at) {
        return L.create(X, Z, at).update(rt);
      }, gt(L, ct, m, $);
    }, Ce = function(m, $) {
      var B = ut[m], L = st(m, $, "hex");
      return L.create = function(rt, X, Z) {
        return new lt(m, $, X).bytepad(["KMAC", Z], B).bytepad([rt], B);
      }, L.update = function(rt, X, Z, at) {
        return L.create(rt, Z, at).update(X);
      }, gt(L, st, m, $);
    }, u = [{ name: "keccak", padding: O, bits: H, createMethod: kt }, { name: "sha3", padding: F, bits: H, createMethod: kt }, { name: "shake", padding: P, bits: Q, createMethod: Fe }, { name: "cshake", padding: S, bits: Q, createMethod: Ct }, { name: "kmac", padding: S, bits: Q, createMethod: Ce }], d = {}, b = [], E = 0; E < u.length; ++E)
      for (var M = u[E], N = M.bits, D = 0; D < N.length; ++D) {
        var I = M.name + "_" + N[D];
        if (b.push(I), d[I] = M.createMethod(N[D], M.padding), M.name !== "sha3") {
          var f = M.name + N[D];
          b.push(f), d[f] = d[I];
        }
      }
    function A(m, $, B) {
      this.blocks = [], this.s = [], this.padding = $, this.outputBits = B, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (m << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = B >> 5, this.extraBytes = (B & 31) >> 3;
      for (var L = 0; L < 50; ++L)
        this.s[L] = 0;
    }
    A.prototype.update = function(m) {
      if (this.finalized)
        throw new Error(e);
      var $, B = typeof m;
      if (B !== "string") {
        if (B === "object") {
          if (m === null)
            throw new Error(t);
          if (v && m.constructor === ArrayBuffer)
            m = new Uint8Array(m);
          else if (!Array.isArray(m) && (!v || !ArrayBuffer.isView(m)))
            throw new Error(t);
        } else
          throw new Error(t);
        $ = !0;
      }
      for (var L = this.blocks, rt = this.byteCount, X = m.length, Z = this.blockCount, at = 0, mt = this.s, J, Ot; at < X; ) {
        if (this.reset)
          for (this.reset = !1, L[0] = this.block, J = 1; J < Z + 1; ++J)
            L[J] = 0;
        if ($)
          for (J = this.start; at < X && J < rt; ++at)
            L[J >> 2] |= m[at] << q[J++ & 3];
        else
          for (J = this.start; at < X && J < rt; ++at)
            Ot = m.charCodeAt(at), Ot < 128 ? L[J >> 2] |= Ot << q[J++ & 3] : Ot < 2048 ? (L[J >> 2] |= (192 | Ot >> 6) << q[J++ & 3], L[J >> 2] |= (128 | Ot & 63) << q[J++ & 3]) : Ot < 55296 || Ot >= 57344 ? (L[J >> 2] |= (224 | Ot >> 12) << q[J++ & 3], L[J >> 2] |= (128 | Ot >> 6 & 63) << q[J++ & 3], L[J >> 2] |= (128 | Ot & 63) << q[J++ & 3]) : (Ot = 65536 + ((Ot & 1023) << 10 | m.charCodeAt(++at) & 1023), L[J >> 2] |= (240 | Ot >> 18) << q[J++ & 3], L[J >> 2] |= (128 | Ot >> 12 & 63) << q[J++ & 3], L[J >> 2] |= (128 | Ot >> 6 & 63) << q[J++ & 3], L[J >> 2] |= (128 | Ot & 63) << q[J++ & 3]);
        if (this.lastByteIndex = J, J >= rt) {
          for (this.start = J - rt, this.block = L[Z], J = 0; J < Z; ++J)
            mt[J] ^= L[J];
          ot(mt), this.reset = !0;
        } else
          this.start = J;
      }
      return this;
    }, A.prototype.encode = function(m, $) {
      var B = m & 255, L = 1, rt = [B];
      for (m = m >> 8, B = m & 255; B > 0; )
        rt.unshift(B), m = m >> 8, B = m & 255, ++L;
      return $ ? rt.push(L) : rt.unshift(L), this.update(rt), rt.length;
    }, A.prototype.encodeString = function(m) {
      var $, B = typeof m;
      if (B !== "string") {
        if (B === "object") {
          if (m === null)
            throw new Error(t);
          if (v && m.constructor === ArrayBuffer)
            m = new Uint8Array(m);
          else if (!Array.isArray(m) && (!v || !ArrayBuffer.isView(m)))
            throw new Error(t);
        } else
          throw new Error(t);
        $ = !0;
      }
      var L = 0, rt = m.length;
      if ($)
        L = rt;
      else
        for (var X = 0; X < m.length; ++X) {
          var Z = m.charCodeAt(X);
          Z < 128 ? L += 1 : Z < 2048 ? L += 2 : Z < 55296 || Z >= 57344 ? L += 3 : (Z = 65536 + ((Z & 1023) << 10 | m.charCodeAt(++X) & 1023), L += 4);
        }
      return L += this.encode(L * 8), this.update(m), L;
    }, A.prototype.bytepad = function(m, $) {
      for (var B = this.encode($), L = 0; L < m.length; ++L)
        B += this.encodeString(m[L]);
      var rt = $ - B % $, X = [];
      return X.length = rt, this.update(X), this;
    }, A.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var m = this.blocks, $ = this.lastByteIndex, B = this.blockCount, L = this.s;
        if (m[$ >> 2] |= this.padding[$ & 3], this.lastByteIndex === this.byteCount)
          for (m[0] = m[B], $ = 1; $ < B + 1; ++$)
            m[$] = 0;
        for (m[B - 1] |= 2147483648, $ = 0; $ < B; ++$)
          L[$] ^= m[$];
        ot(L);
      }
    }, A.prototype.toString = A.prototype.hex = function() {
      this.finalize();
      for (var m = this.blockCount, $ = this.s, B = this.outputBlocks, L = this.extraBytes, rt = 0, X = 0, Z = "", at; X < B; ) {
        for (rt = 0; rt < m && X < B; ++rt, ++X)
          at = $[rt], Z += y[at >> 4 & 15] + y[at & 15] + y[at >> 12 & 15] + y[at >> 8 & 15] + y[at >> 20 & 15] + y[at >> 16 & 15] + y[at >> 28 & 15] + y[at >> 24 & 15];
        X % m === 0 && (ot($), rt = 0);
      }
      return L && (at = $[rt], Z += y[at >> 4 & 15] + y[at & 15], L > 1 && (Z += y[at >> 12 & 15] + y[at >> 8 & 15]), L > 2 && (Z += y[at >> 20 & 15] + y[at >> 16 & 15])), Z;
    }, A.prototype.arrayBuffer = function() {
      this.finalize();
      var m = this.blockCount, $ = this.s, B = this.outputBlocks, L = this.extraBytes, rt = 0, X = 0, Z = this.outputBits >> 3, at;
      L ? at = new ArrayBuffer(B + 1 << 2) : at = new ArrayBuffer(Z);
      for (var mt = new Uint32Array(at); X < B; ) {
        for (rt = 0; rt < m && X < B; ++rt, ++X)
          mt[X] = $[rt];
        X % m === 0 && ot($);
      }
      return L && (mt[rt] = $[rt], at = at.slice(0, Z)), at;
    }, A.prototype.buffer = A.prototype.arrayBuffer, A.prototype.digest = A.prototype.array = function() {
      this.finalize();
      for (var m = this.blockCount, $ = this.s, B = this.outputBlocks, L = this.extraBytes, rt = 0, X = 0, Z = [], at, mt; X < B; ) {
        for (rt = 0; rt < m && X < B; ++rt, ++X)
          at = X << 2, mt = $[rt], Z[at] = mt & 255, Z[at + 1] = mt >> 8 & 255, Z[at + 2] = mt >> 16 & 255, Z[at + 3] = mt >> 24 & 255;
        X % m === 0 && ot($);
      }
      return L && (at = X << 2, mt = $[rt], Z[at] = mt & 255, L > 1 && (Z[at + 1] = mt >> 8 & 255), L > 2 && (Z[at + 2] = mt >> 16 & 255)), Z;
    };
    function lt(m, $, B) {
      A.call(this, m, $, B);
    }
    lt.prototype = new A(), lt.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), A.prototype.finalize.call(this);
    };
    var ot = function(m) {
      var $, B, L, rt, X, Z, at, mt, J, Ot, Zt, xt, ri, te, Tt, xe, Ft, Bt, xi, Dt, ee, lr, Rt, jt, kr, zt, Lt, Br, Kt, Ht, Ur, Vt, re, Ni, ie, Yt, ii, se, ne, Ri, oe, Wt, Oi, ae, ce, $r, he, Qt, Ti, ue, le, Fi, fe, pe, Di, de, Xt, si, ni, oi, ai, ci, hi;
      for (L = 0; L < 48; L += 2)
        rt = m[0] ^ m[10] ^ m[20] ^ m[30] ^ m[40], X = m[1] ^ m[11] ^ m[21] ^ m[31] ^ m[41], Z = m[2] ^ m[12] ^ m[22] ^ m[32] ^ m[42], at = m[3] ^ m[13] ^ m[23] ^ m[33] ^ m[43], mt = m[4] ^ m[14] ^ m[24] ^ m[34] ^ m[44], J = m[5] ^ m[15] ^ m[25] ^ m[35] ^ m[45], Ot = m[6] ^ m[16] ^ m[26] ^ m[36] ^ m[46], Zt = m[7] ^ m[17] ^ m[27] ^ m[37] ^ m[47], xt = m[8] ^ m[18] ^ m[28] ^ m[38] ^ m[48], ri = m[9] ^ m[19] ^ m[29] ^ m[39] ^ m[49], $ = xt ^ (Z << 1 | at >>> 31), B = ri ^ (at << 1 | Z >>> 31), m[0] ^= $, m[1] ^= B, m[10] ^= $, m[11] ^= B, m[20] ^= $, m[21] ^= B, m[30] ^= $, m[31] ^= B, m[40] ^= $, m[41] ^= B, $ = rt ^ (mt << 1 | J >>> 31), B = X ^ (J << 1 | mt >>> 31), m[2] ^= $, m[3] ^= B, m[12] ^= $, m[13] ^= B, m[22] ^= $, m[23] ^= B, m[32] ^= $, m[33] ^= B, m[42] ^= $, m[43] ^= B, $ = Z ^ (Ot << 1 | Zt >>> 31), B = at ^ (Zt << 1 | Ot >>> 31), m[4] ^= $, m[5] ^= B, m[14] ^= $, m[15] ^= B, m[24] ^= $, m[25] ^= B, m[34] ^= $, m[35] ^= B, m[44] ^= $, m[45] ^= B, $ = mt ^ (xt << 1 | ri >>> 31), B = J ^ (ri << 1 | xt >>> 31), m[6] ^= $, m[7] ^= B, m[16] ^= $, m[17] ^= B, m[26] ^= $, m[27] ^= B, m[36] ^= $, m[37] ^= B, m[46] ^= $, m[47] ^= B, $ = Ot ^ (rt << 1 | X >>> 31), B = Zt ^ (X << 1 | rt >>> 31), m[8] ^= $, m[9] ^= B, m[18] ^= $, m[19] ^= B, m[28] ^= $, m[29] ^= B, m[38] ^= $, m[39] ^= B, m[48] ^= $, m[49] ^= B, te = m[0], Tt = m[1], $r = m[11] << 4 | m[10] >>> 28, he = m[10] << 4 | m[11] >>> 28, Br = m[20] << 3 | m[21] >>> 29, Kt = m[21] << 3 | m[20] >>> 29, oi = m[31] << 9 | m[30] >>> 23, ai = m[30] << 9 | m[31] >>> 23, Wt = m[40] << 18 | m[41] >>> 14, Oi = m[41] << 18 | m[40] >>> 14, Ni = m[2] << 1 | m[3] >>> 31, ie = m[3] << 1 | m[2] >>> 31, xe = m[13] << 12 | m[12] >>> 20, Ft = m[12] << 12 | m[13] >>> 20, Qt = m[22] << 10 | m[23] >>> 22, Ti = m[23] << 10 | m[22] >>> 22, Ht = m[33] << 13 | m[32] >>> 19, Ur = m[32] << 13 | m[33] >>> 19, ci = m[42] << 2 | m[43] >>> 30, hi = m[43] << 2 | m[42] >>> 30, pe = m[5] << 30 | m[4] >>> 2, Di = m[4] << 30 | m[5] >>> 2, Yt = m[14] << 6 | m[15] >>> 26, ii = m[15] << 6 | m[14] >>> 26, Bt = m[25] << 11 | m[24] >>> 21, xi = m[24] << 11 | m[25] >>> 21, ue = m[34] << 15 | m[35] >>> 17, le = m[35] << 15 | m[34] >>> 17, Vt = m[45] << 29 | m[44] >>> 3, re = m[44] << 29 | m[45] >>> 3, jt = m[6] << 28 | m[7] >>> 4, kr = m[7] << 28 | m[6] >>> 4, de = m[17] << 23 | m[16] >>> 9, Xt = m[16] << 23 | m[17] >>> 9, se = m[26] << 25 | m[27] >>> 7, ne = m[27] << 25 | m[26] >>> 7, Dt = m[36] << 21 | m[37] >>> 11, ee = m[37] << 21 | m[36] >>> 11, Fi = m[47] << 24 | m[46] >>> 8, fe = m[46] << 24 | m[47] >>> 8, ae = m[8] << 27 | m[9] >>> 5, ce = m[9] << 27 | m[8] >>> 5, zt = m[18] << 20 | m[19] >>> 12, Lt = m[19] << 20 | m[18] >>> 12, si = m[29] << 7 | m[28] >>> 25, ni = m[28] << 7 | m[29] >>> 25, Ri = m[38] << 8 | m[39] >>> 24, oe = m[39] << 8 | m[38] >>> 24, lr = m[48] << 14 | m[49] >>> 18, Rt = m[49] << 14 | m[48] >>> 18, m[0] = te ^ ~xe & Bt, m[1] = Tt ^ ~Ft & xi, m[10] = jt ^ ~zt & Br, m[11] = kr ^ ~Lt & Kt, m[20] = Ni ^ ~Yt & se, m[21] = ie ^ ~ii & ne, m[30] = ae ^ ~$r & Qt, m[31] = ce ^ ~he & Ti, m[40] = pe ^ ~de & si, m[41] = Di ^ ~Xt & ni, m[2] = xe ^ ~Bt & Dt, m[3] = Ft ^ ~xi & ee, m[12] = zt ^ ~Br & Ht, m[13] = Lt ^ ~Kt & Ur, m[22] = Yt ^ ~se & Ri, m[23] = ii ^ ~ne & oe, m[32] = $r ^ ~Qt & ue, m[33] = he ^ ~Ti & le, m[42] = de ^ ~si & oi, m[43] = Xt ^ ~ni & ai, m[4] = Bt ^ ~Dt & lr, m[5] = xi ^ ~ee & Rt, m[14] = Br ^ ~Ht & Vt, m[15] = Kt ^ ~Ur & re, m[24] = se ^ ~Ri & Wt, m[25] = ne ^ ~oe & Oi, m[34] = Qt ^ ~ue & Fi, m[35] = Ti ^ ~le & fe, m[44] = si ^ ~oi & ci, m[45] = ni ^ ~ai & hi, m[6] = Dt ^ ~lr & te, m[7] = ee ^ ~Rt & Tt, m[16] = Ht ^ ~Vt & jt, m[17] = Ur ^ ~re & kr, m[26] = Ri ^ ~Wt & Ni, m[27] = oe ^ ~Oi & ie, m[36] = ue ^ ~Fi & ae, m[37] = le ^ ~fe & ce, m[46] = oi ^ ~ci & pe, m[47] = ai ^ ~hi & Di, m[8] = lr ^ ~te & xe, m[9] = Rt ^ ~Tt & Ft, m[18] = Vt ^ ~jt & zt, m[19] = re ^ ~kr & Lt, m[28] = Wt ^ ~Ni & Yt, m[29] = Oi ^ ~ie & ii, m[38] = Fi ^ ~ae & $r, m[39] = fe ^ ~ce & he, m[48] = ci ^ ~pe & de, m[49] = hi ^ ~Di & Xt, m[0] ^= K[L], m[1] ^= K[L + 1];
    };
    if (p)
      i.exports = d;
    else
      for (E = 0; E < b.length; ++E)
        o[b[E]] = d[b[E]];
  })();
})(cd);
var Xb = cd.exports;
const Zb = "logger/5.7.0";
let xf = !1, Nf = !1;
const da = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Rf = da.default, Hc = null;
function t2() {
  try {
    const i = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
      try {
        if ("test".normalize(t) !== "test")
          throw new Error("bad normalize");
      } catch {
        i.push(t);
      }
    }), i.length)
      throw new Error("missing " + i.join(", "));
    if ("é".normalize("NFD") !== "é")
      throw new Error("broken implementation");
  } catch (i) {
    return i.message;
  }
  return null;
}
const Of = t2();
var yh;
(function(i) {
  i.DEBUG = "DEBUG", i.INFO = "INFO", i.WARNING = "WARNING", i.ERROR = "ERROR", i.OFF = "OFF";
})(yh || (yh = {}));
var Jr;
(function(i) {
  i.UNKNOWN_ERROR = "UNKNOWN_ERROR", i.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", i.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", i.NETWORK_ERROR = "NETWORK_ERROR", i.SERVER_ERROR = "SERVER_ERROR", i.TIMEOUT = "TIMEOUT", i.BUFFER_OVERRUN = "BUFFER_OVERRUN", i.NUMERIC_FAULT = "NUMERIC_FAULT", i.MISSING_NEW = "MISSING_NEW", i.INVALID_ARGUMENT = "INVALID_ARGUMENT", i.MISSING_ARGUMENT = "MISSING_ARGUMENT", i.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", i.CALL_EXCEPTION = "CALL_EXCEPTION", i.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", i.NONCE_EXPIRED = "NONCE_EXPIRED", i.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", i.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", i.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", i.ACTION_REJECTED = "ACTION_REJECTED";
})(Jr || (Jr = {}));
const Tf = "0123456789abcdef";
let ze = class Te {
  constructor(t) {
    Object.defineProperty(this, "version", { enumerable: !0, value: t, writable: !1 });
  }
  _log(t, e) {
    const s = t.toLowerCase();
    da[s] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(Rf > da[s]) && console.log.apply(console, e);
  }
  debug(...t) {
    this._log(Te.levels.DEBUG, t);
  }
  info(...t) {
    this._log(Te.levels.INFO, t);
  }
  warn(...t) {
    this._log(Te.levels.WARNING, t);
  }
  makeError(t, e, s) {
    if (Nf)
      return this.makeError("censored error", e, {});
    e || (e = Te.errors.UNKNOWN_ERROR), s || (s = {});
    const o = [];
    Object.keys(s).forEach((v) => {
      const y = s[v];
      try {
        if (y instanceof Uint8Array) {
          let P = "";
          for (let S = 0; S < y.length; S++)
            P += Tf[y[S] >> 4], P += Tf[y[S] & 15];
          o.push(v + "=Uint8Array(0x" + P + ")");
        } else
          o.push(v + "=" + JSON.stringify(y));
      } catch {
        o.push(v + "=" + JSON.stringify(s[v].toString()));
      }
    }), o.push(`code=${e}`), o.push(`version=${this.version}`);
    const a = t;
    let h = "";
    switch (e) {
      case Jr.NUMERIC_FAULT: {
        h = "NUMERIC_FAULT";
        const v = t;
        switch (v) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            h += "-" + v;
            break;
          case "negative-power":
          case "negative-width":
            h += "-unsupported";
            break;
          case "unbound-bitwise-result":
            h += "-unbound-result";
            break;
        }
        break;
      }
      case Jr.CALL_EXCEPTION:
      case Jr.INSUFFICIENT_FUNDS:
      case Jr.MISSING_NEW:
      case Jr.NONCE_EXPIRED:
      case Jr.REPLACEMENT_UNDERPRICED:
      case Jr.TRANSACTION_REPLACED:
      case Jr.UNPREDICTABLE_GAS_LIMIT:
        h = e;
        break;
    }
    h && (t += " [ See: https://links.ethers.org/v5-errors-" + h + " ]"), o.length && (t += " (" + o.join(", ") + ")");
    const p = new Error(t);
    return p.reason = a, p.code = e, Object.keys(s).forEach(function(v) {
      p[v] = s[v];
    }), p;
  }
  throwError(t, e, s) {
    throw this.makeError(t, e, s);
  }
  throwArgumentError(t, e, s) {
    return this.throwError(t, Te.errors.INVALID_ARGUMENT, { argument: e, value: s });
  }
  assert(t, e, s, o) {
    t || this.throwError(e, s, o);
  }
  assertArgument(t, e, s, o) {
    t || this.throwArgumentError(e, s, o);
  }
  checkNormalize(t) {
    Of && this.throwError("platform missing String.prototype.normalize", Te.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: Of });
  }
  checkSafeUint53(t, e) {
    typeof t == "number" && (e == null && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, Te.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: t }), t % 1 && this.throwError(e, Te.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t }));
  }
  checkArgumentCount(t, e, s) {
    s ? s = ": " + s : s = "", t < e && this.throwError("missing argument" + s, Te.errors.MISSING_ARGUMENT, { count: t, expectedCount: e }), t > e && this.throwError("too many arguments" + s, Te.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: e });
  }
  checkNew(t, e) {
    (t === Object || t == null) && this.throwError("missing new", Te.errors.MISSING_NEW, { name: e.name });
  }
  checkAbstract(t, e) {
    t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", Te.errors.UNSUPPORTED_OPERATION, { name: t.name, operation: "new" }) : (t === Object || t == null) && this.throwError("missing new", Te.errors.MISSING_NEW, { name: e.name });
  }
  static globalLogger() {
    return Hc || (Hc = new Te(Zb)), Hc;
  }
  static setCensorship(t, e) {
    if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", Te.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), xf) {
      if (!t)
        return;
      this.globalLogger().throwError("error censorship permanent", Te.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    Nf = !!t, xf = !!e;
  }
  static setLogLevel(t) {
    const e = da[t.toLowerCase()];
    if (e == null) {
      Te.globalLogger().warn("invalid log level - " + t);
      return;
    }
    Rf = e;
  }
  static from(t) {
    return new Te(t);
  }
};
ze.errors = Jr, ze.levels = yh;
const e2 = "bytes/5.7.0", Pe = new ze(e2);
function hd(i) {
  return !!i.toHexString;
}
function un(i) {
  return i.slice || (i.slice = function() {
    const t = Array.prototype.slice.call(arguments);
    return un(new Uint8Array(Array.prototype.slice.apply(i, t)));
  }), i;
}
function r2(i) {
  return wr(i) && !(i.length % 2) || gn(i);
}
function Ff(i) {
  return typeof i == "number" && i == i && i % 1 === 0;
}
function gn(i) {
  if (i == null)
    return !1;
  if (i.constructor === Uint8Array)
    return !0;
  if (typeof i == "string" || !Ff(i.length) || i.length < 0)
    return !1;
  for (let t = 0; t < i.length; t++) {
    const e = i[t];
    if (!Ff(e) || e < 0 || e >= 256)
      return !1;
  }
  return !0;
}
function Ee(i, t) {
  if (t || (t = {}), typeof i == "number") {
    Pe.checkSafeUint53(i, "invalid arrayify value");
    const e = [];
    for (; i; )
      e.unshift(i & 255), i = parseInt(String(i / 256));
    return e.length === 0 && e.push(0), un(new Uint8Array(e));
  }
  if (t.allowMissingPrefix && typeof i == "string" && i.substring(0, 2) !== "0x" && (i = "0x" + i), hd(i) && (i = i.toHexString()), wr(i)) {
    let e = i.substring(2);
    e.length % 2 && (t.hexPad === "left" ? e = "0" + e : t.hexPad === "right" ? e += "0" : Pe.throwArgumentError("hex data is odd-length", "value", i));
    const s = [];
    for (let o = 0; o < e.length; o += 2)
      s.push(parseInt(e.substring(o, o + 2), 16));
    return un(new Uint8Array(s));
  }
  return gn(i) ? un(new Uint8Array(i)) : Pe.throwArgumentError("invalid arrayify value", "value", i);
}
function i2(i) {
  const t = i.map((o) => Ee(o)), e = t.reduce((o, a) => o + a.length, 0), s = new Uint8Array(e);
  return t.reduce((o, a) => (s.set(a, o), o + a.length), 0), un(s);
}
function s2(i, t) {
  i = Ee(i), i.length > t && Pe.throwArgumentError("value out of range", "value", arguments[0]);
  const e = new Uint8Array(t);
  return e.set(i, t - i.length), un(e);
}
function wr(i, t) {
  return !(typeof i != "string" || !i.match(/^0x[0-9A-Fa-f]*$/) || t && i.length !== 2 + 2 * t);
}
const Vc = "0123456789abcdef";
function ar(i, t) {
  if (t || (t = {}), typeof i == "number") {
    Pe.checkSafeUint53(i, "invalid hexlify value");
    let e = "";
    for (; i; )
      e = Vc[i & 15] + e, i = Math.floor(i / 16);
    return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
  }
  if (typeof i == "bigint")
    return i = i.toString(16), i.length % 2 ? "0x0" + i : "0x" + i;
  if (t.allowMissingPrefix && typeof i == "string" && i.substring(0, 2) !== "0x" && (i = "0x" + i), hd(i))
    return i.toHexString();
  if (wr(i))
    return i.length % 2 && (t.hexPad === "left" ? i = "0x0" + i.substring(2) : t.hexPad === "right" ? i += "0" : Pe.throwArgumentError("hex data is odd-length", "value", i)), i.toLowerCase();
  if (gn(i)) {
    let e = "0x";
    for (let s = 0; s < i.length; s++) {
      let o = i[s];
      e += Vc[(o & 240) >> 4] + Vc[o & 15];
    }
    return e;
  }
  return Pe.throwArgumentError("invalid hexlify value", "value", i);
}
function n2(i) {
  if (typeof i != "string")
    i = ar(i);
  else if (!wr(i) || i.length % 2)
    return null;
  return (i.length - 2) / 2;
}
function Df(i, t, e) {
  return typeof i != "string" ? i = ar(i) : (!wr(i) || i.length % 2) && Pe.throwArgumentError("invalid hexData", "value", i), t = 2 + 2 * t, e != null ? "0x" + i.substring(t, 2 + 2 * e) : "0x" + i.substring(t);
}
function _i(i, t) {
  for (typeof i != "string" ? i = ar(i) : wr(i) || Pe.throwArgumentError("invalid hex string", "value", i), i.length > 2 * t + 2 && Pe.throwArgumentError("value out of range", "value", arguments[1]); i.length < 2 * t + 2; )
    i = "0x0" + i.substring(2);
  return i;
}
function ud(i) {
  const t = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0, yParityAndS: "0x", compact: "0x" };
  if (r2(i)) {
    let e = Ee(i);
    e.length === 64 ? (t.v = 27 + (e[32] >> 7), e[32] &= 127, t.r = ar(e.slice(0, 32)), t.s = ar(e.slice(32, 64))) : e.length === 65 ? (t.r = ar(e.slice(0, 32)), t.s = ar(e.slice(32, 64)), t.v = e[64]) : Pe.throwArgumentError("invalid signature string", "signature", i), t.v < 27 && (t.v === 0 || t.v === 1 ? t.v += 27 : Pe.throwArgumentError("signature invalid v byte", "signature", i)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (e[32] |= 128), t._vs = ar(e.slice(32, 64));
  } else {
    if (t.r = i.r, t.s = i.s, t.v = i.v, t.recoveryParam = i.recoveryParam, t._vs = i._vs, t._vs != null) {
      const o = s2(Ee(t._vs), 32);
      t._vs = ar(o);
      const a = o[0] >= 128 ? 1 : 0;
      t.recoveryParam == null ? t.recoveryParam = a : t.recoveryParam !== a && Pe.throwArgumentError("signature recoveryParam mismatch _vs", "signature", i), o[0] &= 127;
      const h = ar(o);
      t.s == null ? t.s = h : t.s !== h && Pe.throwArgumentError("signature v mismatch _vs", "signature", i);
    }
    if (t.recoveryParam == null)
      t.v == null ? Pe.throwArgumentError("signature missing v and recoveryParam", "signature", i) : t.v === 0 || t.v === 1 ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2;
    else if (t.v == null)
      t.v = 27 + t.recoveryParam;
    else {
      const o = t.v === 0 || t.v === 1 ? t.v : 1 - t.v % 2;
      t.recoveryParam !== o && Pe.throwArgumentError("signature recoveryParam mismatch v", "signature", i);
    }
    t.r == null || !wr(t.r) ? Pe.throwArgumentError("signature missing or invalid r", "signature", i) : t.r = _i(t.r, 32), t.s == null || !wr(t.s) ? Pe.throwArgumentError("signature missing or invalid s", "signature", i) : t.s = _i(t.s, 32);
    const e = Ee(t.s);
    e[0] >= 128 && Pe.throwArgumentError("signature s out of range", "signature", i), t.recoveryParam && (e[0] |= 128);
    const s = ar(e);
    t._vs && (wr(t._vs) || Pe.throwArgumentError("signature invalid _vs", "signature", i), t._vs = _i(t._vs, 32)), t._vs == null ? t._vs = s : t._vs !== s && Pe.throwArgumentError("signature _vs mismatch v and s", "signature", i);
  }
  return t.yParityAndS = t._vs, t.compact = t.r + t.yParityAndS.substring(2), t;
}
function Bh(i) {
  return "0x" + Xb.keccak_256(Ee(i));
}
var ld = { exports: {} }, o2 = {}, a2 = Object.freeze({ __proto__: null, default: o2 }), c2 = Wb(a2);
(function(i) {
  (function(t, e) {
    function s(u, d) {
      if (!u)
        throw new Error(d || "Assertion failed");
    }
    function o(u, d) {
      u.super_ = d;
      var b = function() {
      };
      b.prototype = d.prototype, u.prototype = new b(), u.prototype.constructor = u;
    }
    function a(u, d, b) {
      if (a.isBN(u))
        return u;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, u !== null && ((d === "le" || d === "be") && (b = d, d = 10), this._init(u || 0, d || 10, b || "be"));
    }
    typeof t == "object" ? t.exports = a : e.BN = a, a.BN = a, a.wordSize = 26;
    var h;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h = window.Buffer : h = c2.Buffer;
    } catch {
    }
    a.isBN = function(u) {
      return u instanceof a ? !0 : u !== null && typeof u == "object" && u.constructor.wordSize === a.wordSize && Array.isArray(u.words);
    }, a.max = function(u, d) {
      return u.cmp(d) > 0 ? u : d;
    }, a.min = function(u, d) {
      return u.cmp(d) < 0 ? u : d;
    }, a.prototype._init = function(u, d, b) {
      if (typeof u == "number")
        return this._initNumber(u, d, b);
      if (typeof u == "object")
        return this._initArray(u, d, b);
      d === "hex" && (d = 16), s(d === (d | 0) && d >= 2 && d <= 36), u = u.toString().replace(/\s+/g, "");
      var E = 0;
      u[0] === "-" && (E++, this.negative = 1), E < u.length && (d === 16 ? this._parseHex(u, E, b) : (this._parseBase(u, d, E), b === "le" && this._initArray(this.toArray(), d, b)));
    }, a.prototype._initNumber = function(u, d, b) {
      u < 0 && (this.negative = 1, u = -u), u < 67108864 ? (this.words = [u & 67108863], this.length = 1) : u < 4503599627370496 ? (this.words = [u & 67108863, u / 67108864 & 67108863], this.length = 2) : (s(u < 9007199254740992), this.words = [u & 67108863, u / 67108864 & 67108863, 1], this.length = 3), b === "le" && this._initArray(this.toArray(), d, b);
    }, a.prototype._initArray = function(u, d, b) {
      if (s(typeof u.length == "number"), u.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(u.length / 3), this.words = new Array(this.length);
      for (var E = 0; E < this.length; E++)
        this.words[E] = 0;
      var M, N, D = 0;
      if (b === "be")
        for (E = u.length - 1, M = 0; E >= 0; E -= 3)
          N = u[E] | u[E - 1] << 8 | u[E - 2] << 16, this.words[M] |= N << D & 67108863, this.words[M + 1] = N >>> 26 - D & 67108863, D += 24, D >= 26 && (D -= 26, M++);
      else if (b === "le")
        for (E = 0, M = 0; E < u.length; E += 3)
          N = u[E] | u[E + 1] << 8 | u[E + 2] << 16, this.words[M] |= N << D & 67108863, this.words[M + 1] = N >>> 26 - D & 67108863, D += 24, D >= 26 && (D -= 26, M++);
      return this._strip();
    };
    function p(u, d) {
      var b = u.charCodeAt(d);
      if (b >= 48 && b <= 57)
        return b - 48;
      if (b >= 65 && b <= 70)
        return b - 55;
      if (b >= 97 && b <= 102)
        return b - 87;
      s(!1, "Invalid character in " + u);
    }
    function v(u, d, b) {
      var E = p(u, b);
      return b - 1 >= d && (E |= p(u, b - 1) << 4), E;
    }
    a.prototype._parseHex = function(u, d, b) {
      this.length = Math.ceil((u.length - d) / 6), this.words = new Array(this.length);
      for (var E = 0; E < this.length; E++)
        this.words[E] = 0;
      var M = 0, N = 0, D;
      if (b === "be")
        for (E = u.length - 1; E >= d; E -= 2)
          D = v(u, d, E) << M, this.words[N] |= D & 67108863, M >= 18 ? (M -= 18, N += 1, this.words[N] |= D >>> 26) : M += 8;
      else {
        var I = u.length - d;
        for (E = I % 2 === 0 ? d + 1 : d; E < u.length; E += 2)
          D = v(u, d, E) << M, this.words[N] |= D & 67108863, M >= 18 ? (M -= 18, N += 1, this.words[N] |= D >>> 26) : M += 8;
      }
      this._strip();
    };
    function y(u, d, b, E) {
      for (var M = 0, N = 0, D = Math.min(u.length, b), I = d; I < D; I++) {
        var f = u.charCodeAt(I) - 48;
        M *= E, f >= 49 ? N = f - 49 + 10 : f >= 17 ? N = f - 17 + 10 : N = f, s(f >= 0 && N < E, "Invalid character"), M += N;
      }
      return M;
    }
    a.prototype._parseBase = function(u, d, b) {
      this.words = [0], this.length = 1;
      for (var E = 0, M = 1; M <= 67108863; M *= d)
        E++;
      E--, M = M / d | 0;
      for (var N = u.length - b, D = N % E, I = Math.min(N, N - D) + b, f = 0, A = b; A < I; A += E)
        f = y(u, A, A + E, d), this.imuln(M), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
      if (D !== 0) {
        var lt = 1;
        for (f = y(u, A, u.length, d), A = 0; A < D; A++)
          lt *= d;
        this.imuln(lt), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
      }
      this._strip();
    }, a.prototype.copy = function(u) {
      u.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        u.words[d] = this.words[d];
      u.length = this.length, u.negative = this.negative, u.red = this.red;
    };
    function P(u, d) {
      u.words = d.words, u.length = d.length, u.negative = d.negative, u.red = d.red;
    }
    if (a.prototype._move = function(u) {
      P(u, this);
    }, a.prototype.clone = function() {
      var u = new a(null);
      return this.copy(u), u;
    }, a.prototype._expand = function(u) {
      for (; this.length < u; )
        this.words[this.length++] = 0;
      return this;
    }, a.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, a.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        a.prototype[Symbol.for("nodejs.util.inspect.custom")] = S;
      } catch {
        a.prototype.inspect = S;
      }
    else
      a.prototype.inspect = S;
    function S() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var O = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], F = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], q = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    a.prototype.toString = function(u, d) {
      u = u || 10, d = d | 0 || 1;
      var b;
      if (u === 16 || u === "hex") {
        b = "";
        for (var E = 0, M = 0, N = 0; N < this.length; N++) {
          var D = this.words[N], I = ((D << E | M) & 16777215).toString(16);
          M = D >>> 24 - E & 16777215, E += 2, E >= 26 && (E -= 26, N--), M !== 0 || N !== this.length - 1 ? b = O[6 - I.length] + I + b : b = I + b;
        }
        for (M !== 0 && (b = M.toString(16) + b); b.length % d !== 0; )
          b = "0" + b;
        return this.negative !== 0 && (b = "-" + b), b;
      }
      if (u === (u | 0) && u >= 2 && u <= 36) {
        var f = F[u], A = q[u];
        b = "";
        var lt = this.clone();
        for (lt.negative = 0; !lt.isZero(); ) {
          var ot = lt.modrn(A).toString(u);
          lt = lt.idivn(A), lt.isZero() ? b = ot + b : b = O[f - ot.length] + ot + b;
        }
        for (this.isZero() && (b = "0" + b); b.length % d !== 0; )
          b = "0" + b;
        return this.negative !== 0 && (b = "-" + b), b;
      }
      s(!1, "Base should be between 2 and 36");
    }, a.prototype.toNumber = function() {
      var u = this.words[0];
      return this.length === 2 ? u += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? u += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && s(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -u : u;
    }, a.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, h && (a.prototype.toBuffer = function(u, d) {
      return this.toArrayLike(h, u, d);
    }), a.prototype.toArray = function(u, d) {
      return this.toArrayLike(Array, u, d);
    };
    var K = function(u, d) {
      return u.allocUnsafe ? u.allocUnsafe(d) : new u(d);
    };
    a.prototype.toArrayLike = function(u, d, b) {
      this._strip();
      var E = this.byteLength(), M = b || Math.max(1, E);
      s(E <= M, "byte array longer than desired length"), s(M > 0, "Requested array length <= 0");
      var N = K(u, M), D = d === "le" ? "LE" : "BE";
      return this["_toArrayLike" + D](N, E), N;
    }, a.prototype._toArrayLikeLE = function(u, d) {
      for (var b = 0, E = 0, M = 0, N = 0; M < this.length; M++) {
        var D = this.words[M] << N | E;
        u[b++] = D & 255, b < u.length && (u[b++] = D >> 8 & 255), b < u.length && (u[b++] = D >> 16 & 255), N === 6 ? (b < u.length && (u[b++] = D >> 24 & 255), E = 0, N = 0) : (E = D >>> 24, N += 2);
      }
      if (b < u.length)
        for (u[b++] = E; b < u.length; )
          u[b++] = 0;
    }, a.prototype._toArrayLikeBE = function(u, d) {
      for (var b = u.length - 1, E = 0, M = 0, N = 0; M < this.length; M++) {
        var D = this.words[M] << N | E;
        u[b--] = D & 255, b >= 0 && (u[b--] = D >> 8 & 255), b >= 0 && (u[b--] = D >> 16 & 255), N === 6 ? (b >= 0 && (u[b--] = D >> 24 & 255), E = 0, N = 0) : (E = D >>> 24, N += 2);
      }
      if (b >= 0)
        for (u[b--] = E; b >= 0; )
          u[b--] = 0;
    }, Math.clz32 ? a.prototype._countBits = function(u) {
      return 32 - Math.clz32(u);
    } : a.prototype._countBits = function(u) {
      var d = u, b = 0;
      return d >= 4096 && (b += 13, d >>>= 13), d >= 64 && (b += 7, d >>>= 7), d >= 8 && (b += 4, d >>>= 4), d >= 2 && (b += 2, d >>>= 2), b + d;
    }, a.prototype._zeroBits = function(u) {
      if (u === 0)
        return 26;
      var d = u, b = 0;
      return d & 8191 || (b += 13, d >>>= 13), d & 127 || (b += 7, d >>>= 7), d & 15 || (b += 4, d >>>= 4), d & 3 || (b += 2, d >>>= 2), d & 1 || b++, b;
    }, a.prototype.bitLength = function() {
      var u = this.words[this.length - 1], d = this._countBits(u);
      return (this.length - 1) * 26 + d;
    };
    function H(u) {
      for (var d = new Array(u.bitLength()), b = 0; b < d.length; b++) {
        var E = b / 26 | 0, M = b % 26;
        d[b] = u.words[E] >>> M & 1;
      }
      return d;
    }
    a.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var u = 0, d = 0; d < this.length; d++) {
        var b = this._zeroBits(this.words[d]);
        if (u += b, b !== 26)
          break;
      }
      return u;
    }, a.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, a.prototype.toTwos = function(u) {
      return this.negative !== 0 ? this.abs().inotn(u).iaddn(1) : this.clone();
    }, a.prototype.fromTwos = function(u) {
      return this.testn(u - 1) ? this.notn(u).iaddn(1).ineg() : this.clone();
    }, a.prototype.isNeg = function() {
      return this.negative !== 0;
    }, a.prototype.neg = function() {
      return this.clone().ineg();
    }, a.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, a.prototype.iuor = function(u) {
      for (; this.length < u.length; )
        this.words[this.length++] = 0;
      for (var d = 0; d < u.length; d++)
        this.words[d] = this.words[d] | u.words[d];
      return this._strip();
    }, a.prototype.ior = function(u) {
      return s((this.negative | u.negative) === 0), this.iuor(u);
    }, a.prototype.or = function(u) {
      return this.length > u.length ? this.clone().ior(u) : u.clone().ior(this);
    }, a.prototype.uor = function(u) {
      return this.length > u.length ? this.clone().iuor(u) : u.clone().iuor(this);
    }, a.prototype.iuand = function(u) {
      var d;
      this.length > u.length ? d = u : d = this;
      for (var b = 0; b < d.length; b++)
        this.words[b] = this.words[b] & u.words[b];
      return this.length = d.length, this._strip();
    }, a.prototype.iand = function(u) {
      return s((this.negative | u.negative) === 0), this.iuand(u);
    }, a.prototype.and = function(u) {
      return this.length > u.length ? this.clone().iand(u) : u.clone().iand(this);
    }, a.prototype.uand = function(u) {
      return this.length > u.length ? this.clone().iuand(u) : u.clone().iuand(this);
    }, a.prototype.iuxor = function(u) {
      var d, b;
      this.length > u.length ? (d = this, b = u) : (d = u, b = this);
      for (var E = 0; E < b.length; E++)
        this.words[E] = d.words[E] ^ b.words[E];
      if (this !== d)
        for (; E < d.length; E++)
          this.words[E] = d.words[E];
      return this.length = d.length, this._strip();
    }, a.prototype.ixor = function(u) {
      return s((this.negative | u.negative) === 0), this.iuxor(u);
    }, a.prototype.xor = function(u) {
      return this.length > u.length ? this.clone().ixor(u) : u.clone().ixor(this);
    }, a.prototype.uxor = function(u) {
      return this.length > u.length ? this.clone().iuxor(u) : u.clone().iuxor(this);
    }, a.prototype.inotn = function(u) {
      s(typeof u == "number" && u >= 0);
      var d = Math.ceil(u / 26) | 0, b = u % 26;
      this._expand(d), b > 0 && d--;
      for (var E = 0; E < d; E++)
        this.words[E] = ~this.words[E] & 67108863;
      return b > 0 && (this.words[E] = ~this.words[E] & 67108863 >> 26 - b), this._strip();
    }, a.prototype.notn = function(u) {
      return this.clone().inotn(u);
    }, a.prototype.setn = function(u, d) {
      s(typeof u == "number" && u >= 0);
      var b = u / 26 | 0, E = u % 26;
      return this._expand(b + 1), d ? this.words[b] = this.words[b] | 1 << E : this.words[b] = this.words[b] & ~(1 << E), this._strip();
    }, a.prototype.iadd = function(u) {
      var d;
      if (this.negative !== 0 && u.negative === 0)
        return this.negative = 0, d = this.isub(u), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && u.negative !== 0)
        return u.negative = 0, d = this.isub(u), u.negative = 1, d._normSign();
      var b, E;
      this.length > u.length ? (b = this, E = u) : (b = u, E = this);
      for (var M = 0, N = 0; N < E.length; N++)
        d = (b.words[N] | 0) + (E.words[N] | 0) + M, this.words[N] = d & 67108863, M = d >>> 26;
      for (; M !== 0 && N < b.length; N++)
        d = (b.words[N] | 0) + M, this.words[N] = d & 67108863, M = d >>> 26;
      if (this.length = b.length, M !== 0)
        this.words[this.length] = M, this.length++;
      else if (b !== this)
        for (; N < b.length; N++)
          this.words[N] = b.words[N];
      return this;
    }, a.prototype.add = function(u) {
      var d;
      return u.negative !== 0 && this.negative === 0 ? (u.negative = 0, d = this.sub(u), u.negative ^= 1, d) : u.negative === 0 && this.negative !== 0 ? (this.negative = 0, d = u.sub(this), this.negative = 1, d) : this.length > u.length ? this.clone().iadd(u) : u.clone().iadd(this);
    }, a.prototype.isub = function(u) {
      if (u.negative !== 0) {
        u.negative = 0;
        var d = this.iadd(u);
        return u.negative = 1, d._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(u), this.negative = 1, this._normSign();
      var b = this.cmp(u);
      if (b === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var E, M;
      b > 0 ? (E = this, M = u) : (E = u, M = this);
      for (var N = 0, D = 0; D < M.length; D++)
        d = (E.words[D] | 0) - (M.words[D] | 0) + N, N = d >> 26, this.words[D] = d & 67108863;
      for (; N !== 0 && D < E.length; D++)
        d = (E.words[D] | 0) + N, N = d >> 26, this.words[D] = d & 67108863;
      if (N === 0 && D < E.length && E !== this)
        for (; D < E.length; D++)
          this.words[D] = E.words[D];
      return this.length = Math.max(this.length, D), E !== this && (this.negative = 1), this._strip();
    }, a.prototype.sub = function(u) {
      return this.clone().isub(u);
    };
    function Q(u, d, b) {
      b.negative = d.negative ^ u.negative;
      var E = u.length + d.length | 0;
      b.length = E, E = E - 1 | 0;
      var M = u.words[0] | 0, N = d.words[0] | 0, D = M * N, I = D & 67108863, f = D / 67108864 | 0;
      b.words[0] = I;
      for (var A = 1; A < E; A++) {
        for (var lt = f >>> 26, ot = f & 67108863, m = Math.min(A, d.length - 1), $ = Math.max(0, A - u.length + 1); $ <= m; $++) {
          var B = A - $ | 0;
          M = u.words[B] | 0, N = d.words[$] | 0, D = M * N + ot, lt += D / 67108864 | 0, ot = D & 67108863;
        }
        b.words[A] = ot | 0, f = lt | 0;
      }
      return f !== 0 ? b.words[A] = f | 0 : b.length--, b._strip();
    }
    var ht = function(u, d, b) {
      var E = u.words, M = d.words, N = b.words, D = 0, I, f, A, lt = E[0] | 0, ot = lt & 8191, m = lt >>> 13, $ = E[1] | 0, B = $ & 8191, L = $ >>> 13, rt = E[2] | 0, X = rt & 8191, Z = rt >>> 13, at = E[3] | 0, mt = at & 8191, J = at >>> 13, Ot = E[4] | 0, Zt = Ot & 8191, xt = Ot >>> 13, ri = E[5] | 0, te = ri & 8191, Tt = ri >>> 13, xe = E[6] | 0, Ft = xe & 8191, Bt = xe >>> 13, xi = E[7] | 0, Dt = xi & 8191, ee = xi >>> 13, lr = E[8] | 0, Rt = lr & 8191, jt = lr >>> 13, kr = E[9] | 0, zt = kr & 8191, Lt = kr >>> 13, Br = M[0] | 0, Kt = Br & 8191, Ht = Br >>> 13, Ur = M[1] | 0, Vt = Ur & 8191, re = Ur >>> 13, Ni = M[2] | 0, ie = Ni & 8191, Yt = Ni >>> 13, ii = M[3] | 0, se = ii & 8191, ne = ii >>> 13, Ri = M[4] | 0, oe = Ri & 8191, Wt = Ri >>> 13, Oi = M[5] | 0, ae = Oi & 8191, ce = Oi >>> 13, $r = M[6] | 0, he = $r & 8191, Qt = $r >>> 13, Ti = M[7] | 0, ue = Ti & 8191, le = Ti >>> 13, Fi = M[8] | 0, fe = Fi & 8191, pe = Fi >>> 13, Di = M[9] | 0, de = Di & 8191, Xt = Di >>> 13;
      b.negative = u.negative ^ d.negative, b.length = 19, I = Math.imul(ot, Kt), f = Math.imul(ot, Ht), f = f + Math.imul(m, Kt) | 0, A = Math.imul(m, Ht);
      var si = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (si >>> 26) | 0, si &= 67108863, I = Math.imul(B, Kt), f = Math.imul(B, Ht), f = f + Math.imul(L, Kt) | 0, A = Math.imul(L, Ht), I = I + Math.imul(ot, Vt) | 0, f = f + Math.imul(ot, re) | 0, f = f + Math.imul(m, Vt) | 0, A = A + Math.imul(m, re) | 0;
      var ni = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (ni >>> 26) | 0, ni &= 67108863, I = Math.imul(X, Kt), f = Math.imul(X, Ht), f = f + Math.imul(Z, Kt) | 0, A = Math.imul(Z, Ht), I = I + Math.imul(B, Vt) | 0, f = f + Math.imul(B, re) | 0, f = f + Math.imul(L, Vt) | 0, A = A + Math.imul(L, re) | 0, I = I + Math.imul(ot, ie) | 0, f = f + Math.imul(ot, Yt) | 0, f = f + Math.imul(m, ie) | 0, A = A + Math.imul(m, Yt) | 0;
      var oi = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (oi >>> 26) | 0, oi &= 67108863, I = Math.imul(mt, Kt), f = Math.imul(mt, Ht), f = f + Math.imul(J, Kt) | 0, A = Math.imul(J, Ht), I = I + Math.imul(X, Vt) | 0, f = f + Math.imul(X, re) | 0, f = f + Math.imul(Z, Vt) | 0, A = A + Math.imul(Z, re) | 0, I = I + Math.imul(B, ie) | 0, f = f + Math.imul(B, Yt) | 0, f = f + Math.imul(L, ie) | 0, A = A + Math.imul(L, Yt) | 0, I = I + Math.imul(ot, se) | 0, f = f + Math.imul(ot, ne) | 0, f = f + Math.imul(m, se) | 0, A = A + Math.imul(m, ne) | 0;
      var ai = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (ai >>> 26) | 0, ai &= 67108863, I = Math.imul(Zt, Kt), f = Math.imul(Zt, Ht), f = f + Math.imul(xt, Kt) | 0, A = Math.imul(xt, Ht), I = I + Math.imul(mt, Vt) | 0, f = f + Math.imul(mt, re) | 0, f = f + Math.imul(J, Vt) | 0, A = A + Math.imul(J, re) | 0, I = I + Math.imul(X, ie) | 0, f = f + Math.imul(X, Yt) | 0, f = f + Math.imul(Z, ie) | 0, A = A + Math.imul(Z, Yt) | 0, I = I + Math.imul(B, se) | 0, f = f + Math.imul(B, ne) | 0, f = f + Math.imul(L, se) | 0, A = A + Math.imul(L, ne) | 0, I = I + Math.imul(ot, oe) | 0, f = f + Math.imul(ot, Wt) | 0, f = f + Math.imul(m, oe) | 0, A = A + Math.imul(m, Wt) | 0;
      var ci = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (ci >>> 26) | 0, ci &= 67108863, I = Math.imul(te, Kt), f = Math.imul(te, Ht), f = f + Math.imul(Tt, Kt) | 0, A = Math.imul(Tt, Ht), I = I + Math.imul(Zt, Vt) | 0, f = f + Math.imul(Zt, re) | 0, f = f + Math.imul(xt, Vt) | 0, A = A + Math.imul(xt, re) | 0, I = I + Math.imul(mt, ie) | 0, f = f + Math.imul(mt, Yt) | 0, f = f + Math.imul(J, ie) | 0, A = A + Math.imul(J, Yt) | 0, I = I + Math.imul(X, se) | 0, f = f + Math.imul(X, ne) | 0, f = f + Math.imul(Z, se) | 0, A = A + Math.imul(Z, ne) | 0, I = I + Math.imul(B, oe) | 0, f = f + Math.imul(B, Wt) | 0, f = f + Math.imul(L, oe) | 0, A = A + Math.imul(L, Wt) | 0, I = I + Math.imul(ot, ae) | 0, f = f + Math.imul(ot, ce) | 0, f = f + Math.imul(m, ae) | 0, A = A + Math.imul(m, ce) | 0;
      var hi = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (hi >>> 26) | 0, hi &= 67108863, I = Math.imul(Ft, Kt), f = Math.imul(Ft, Ht), f = f + Math.imul(Bt, Kt) | 0, A = Math.imul(Bt, Ht), I = I + Math.imul(te, Vt) | 0, f = f + Math.imul(te, re) | 0, f = f + Math.imul(Tt, Vt) | 0, A = A + Math.imul(Tt, re) | 0, I = I + Math.imul(Zt, ie) | 0, f = f + Math.imul(Zt, Yt) | 0, f = f + Math.imul(xt, ie) | 0, A = A + Math.imul(xt, Yt) | 0, I = I + Math.imul(mt, se) | 0, f = f + Math.imul(mt, ne) | 0, f = f + Math.imul(J, se) | 0, A = A + Math.imul(J, ne) | 0, I = I + Math.imul(X, oe) | 0, f = f + Math.imul(X, Wt) | 0, f = f + Math.imul(Z, oe) | 0, A = A + Math.imul(Z, Wt) | 0, I = I + Math.imul(B, ae) | 0, f = f + Math.imul(B, ce) | 0, f = f + Math.imul(L, ae) | 0, A = A + Math.imul(L, ce) | 0, I = I + Math.imul(ot, he) | 0, f = f + Math.imul(ot, Qt) | 0, f = f + Math.imul(m, he) | 0, A = A + Math.imul(m, Qt) | 0;
      var Zi = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (Zi >>> 26) | 0, Zi &= 67108863, I = Math.imul(Dt, Kt), f = Math.imul(Dt, Ht), f = f + Math.imul(ee, Kt) | 0, A = Math.imul(ee, Ht), I = I + Math.imul(Ft, Vt) | 0, f = f + Math.imul(Ft, re) | 0, f = f + Math.imul(Bt, Vt) | 0, A = A + Math.imul(Bt, re) | 0, I = I + Math.imul(te, ie) | 0, f = f + Math.imul(te, Yt) | 0, f = f + Math.imul(Tt, ie) | 0, A = A + Math.imul(Tt, Yt) | 0, I = I + Math.imul(Zt, se) | 0, f = f + Math.imul(Zt, ne) | 0, f = f + Math.imul(xt, se) | 0, A = A + Math.imul(xt, ne) | 0, I = I + Math.imul(mt, oe) | 0, f = f + Math.imul(mt, Wt) | 0, f = f + Math.imul(J, oe) | 0, A = A + Math.imul(J, Wt) | 0, I = I + Math.imul(X, ae) | 0, f = f + Math.imul(X, ce) | 0, f = f + Math.imul(Z, ae) | 0, A = A + Math.imul(Z, ce) | 0, I = I + Math.imul(B, he) | 0, f = f + Math.imul(B, Qt) | 0, f = f + Math.imul(L, he) | 0, A = A + Math.imul(L, Qt) | 0, I = I + Math.imul(ot, ue) | 0, f = f + Math.imul(ot, le) | 0, f = f + Math.imul(m, ue) | 0, A = A + Math.imul(m, le) | 0;
      var _n = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (_n >>> 26) | 0, _n &= 67108863, I = Math.imul(Rt, Kt), f = Math.imul(Rt, Ht), f = f + Math.imul(jt, Kt) | 0, A = Math.imul(jt, Ht), I = I + Math.imul(Dt, Vt) | 0, f = f + Math.imul(Dt, re) | 0, f = f + Math.imul(ee, Vt) | 0, A = A + Math.imul(ee, re) | 0, I = I + Math.imul(Ft, ie) | 0, f = f + Math.imul(Ft, Yt) | 0, f = f + Math.imul(Bt, ie) | 0, A = A + Math.imul(Bt, Yt) | 0, I = I + Math.imul(te, se) | 0, f = f + Math.imul(te, ne) | 0, f = f + Math.imul(Tt, se) | 0, A = A + Math.imul(Tt, ne) | 0, I = I + Math.imul(Zt, oe) | 0, f = f + Math.imul(Zt, Wt) | 0, f = f + Math.imul(xt, oe) | 0, A = A + Math.imul(xt, Wt) | 0, I = I + Math.imul(mt, ae) | 0, f = f + Math.imul(mt, ce) | 0, f = f + Math.imul(J, ae) | 0, A = A + Math.imul(J, ce) | 0, I = I + Math.imul(X, he) | 0, f = f + Math.imul(X, Qt) | 0, f = f + Math.imul(Z, he) | 0, A = A + Math.imul(Z, Qt) | 0, I = I + Math.imul(B, ue) | 0, f = f + Math.imul(B, le) | 0, f = f + Math.imul(L, ue) | 0, A = A + Math.imul(L, le) | 0, I = I + Math.imul(ot, fe) | 0, f = f + Math.imul(ot, pe) | 0, f = f + Math.imul(m, fe) | 0, A = A + Math.imul(m, pe) | 0;
      var ts = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (ts >>> 26) | 0, ts &= 67108863, I = Math.imul(zt, Kt), f = Math.imul(zt, Ht), f = f + Math.imul(Lt, Kt) | 0, A = Math.imul(Lt, Ht), I = I + Math.imul(Rt, Vt) | 0, f = f + Math.imul(Rt, re) | 0, f = f + Math.imul(jt, Vt) | 0, A = A + Math.imul(jt, re) | 0, I = I + Math.imul(Dt, ie) | 0, f = f + Math.imul(Dt, Yt) | 0, f = f + Math.imul(ee, ie) | 0, A = A + Math.imul(ee, Yt) | 0, I = I + Math.imul(Ft, se) | 0, f = f + Math.imul(Ft, ne) | 0, f = f + Math.imul(Bt, se) | 0, A = A + Math.imul(Bt, ne) | 0, I = I + Math.imul(te, oe) | 0, f = f + Math.imul(te, Wt) | 0, f = f + Math.imul(Tt, oe) | 0, A = A + Math.imul(Tt, Wt) | 0, I = I + Math.imul(Zt, ae) | 0, f = f + Math.imul(Zt, ce) | 0, f = f + Math.imul(xt, ae) | 0, A = A + Math.imul(xt, ce) | 0, I = I + Math.imul(mt, he) | 0, f = f + Math.imul(mt, Qt) | 0, f = f + Math.imul(J, he) | 0, A = A + Math.imul(J, Qt) | 0, I = I + Math.imul(X, ue) | 0, f = f + Math.imul(X, le) | 0, f = f + Math.imul(Z, ue) | 0, A = A + Math.imul(Z, le) | 0, I = I + Math.imul(B, fe) | 0, f = f + Math.imul(B, pe) | 0, f = f + Math.imul(L, fe) | 0, A = A + Math.imul(L, pe) | 0, I = I + Math.imul(ot, de) | 0, f = f + Math.imul(ot, Xt) | 0, f = f + Math.imul(m, de) | 0, A = A + Math.imul(m, Xt) | 0;
      var An = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (An >>> 26) | 0, An &= 67108863, I = Math.imul(zt, Vt), f = Math.imul(zt, re), f = f + Math.imul(Lt, Vt) | 0, A = Math.imul(Lt, re), I = I + Math.imul(Rt, ie) | 0, f = f + Math.imul(Rt, Yt) | 0, f = f + Math.imul(jt, ie) | 0, A = A + Math.imul(jt, Yt) | 0, I = I + Math.imul(Dt, se) | 0, f = f + Math.imul(Dt, ne) | 0, f = f + Math.imul(ee, se) | 0, A = A + Math.imul(ee, ne) | 0, I = I + Math.imul(Ft, oe) | 0, f = f + Math.imul(Ft, Wt) | 0, f = f + Math.imul(Bt, oe) | 0, A = A + Math.imul(Bt, Wt) | 0, I = I + Math.imul(te, ae) | 0, f = f + Math.imul(te, ce) | 0, f = f + Math.imul(Tt, ae) | 0, A = A + Math.imul(Tt, ce) | 0, I = I + Math.imul(Zt, he) | 0, f = f + Math.imul(Zt, Qt) | 0, f = f + Math.imul(xt, he) | 0, A = A + Math.imul(xt, Qt) | 0, I = I + Math.imul(mt, ue) | 0, f = f + Math.imul(mt, le) | 0, f = f + Math.imul(J, ue) | 0, A = A + Math.imul(J, le) | 0, I = I + Math.imul(X, fe) | 0, f = f + Math.imul(X, pe) | 0, f = f + Math.imul(Z, fe) | 0, A = A + Math.imul(Z, pe) | 0, I = I + Math.imul(B, de) | 0, f = f + Math.imul(B, Xt) | 0, f = f + Math.imul(L, de) | 0, A = A + Math.imul(L, Xt) | 0;
      var En = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (En >>> 26) | 0, En &= 67108863, I = Math.imul(zt, ie), f = Math.imul(zt, Yt), f = f + Math.imul(Lt, ie) | 0, A = Math.imul(Lt, Yt), I = I + Math.imul(Rt, se) | 0, f = f + Math.imul(Rt, ne) | 0, f = f + Math.imul(jt, se) | 0, A = A + Math.imul(jt, ne) | 0, I = I + Math.imul(Dt, oe) | 0, f = f + Math.imul(Dt, Wt) | 0, f = f + Math.imul(ee, oe) | 0, A = A + Math.imul(ee, Wt) | 0, I = I + Math.imul(Ft, ae) | 0, f = f + Math.imul(Ft, ce) | 0, f = f + Math.imul(Bt, ae) | 0, A = A + Math.imul(Bt, ce) | 0, I = I + Math.imul(te, he) | 0, f = f + Math.imul(te, Qt) | 0, f = f + Math.imul(Tt, he) | 0, A = A + Math.imul(Tt, Qt) | 0, I = I + Math.imul(Zt, ue) | 0, f = f + Math.imul(Zt, le) | 0, f = f + Math.imul(xt, ue) | 0, A = A + Math.imul(xt, le) | 0, I = I + Math.imul(mt, fe) | 0, f = f + Math.imul(mt, pe) | 0, f = f + Math.imul(J, fe) | 0, A = A + Math.imul(J, pe) | 0, I = I + Math.imul(X, de) | 0, f = f + Math.imul(X, Xt) | 0, f = f + Math.imul(Z, de) | 0, A = A + Math.imul(Z, Xt) | 0;
      var In = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (In >>> 26) | 0, In &= 67108863, I = Math.imul(zt, se), f = Math.imul(zt, ne), f = f + Math.imul(Lt, se) | 0, A = Math.imul(Lt, ne), I = I + Math.imul(Rt, oe) | 0, f = f + Math.imul(Rt, Wt) | 0, f = f + Math.imul(jt, oe) | 0, A = A + Math.imul(jt, Wt) | 0, I = I + Math.imul(Dt, ae) | 0, f = f + Math.imul(Dt, ce) | 0, f = f + Math.imul(ee, ae) | 0, A = A + Math.imul(ee, ce) | 0, I = I + Math.imul(Ft, he) | 0, f = f + Math.imul(Ft, Qt) | 0, f = f + Math.imul(Bt, he) | 0, A = A + Math.imul(Bt, Qt) | 0, I = I + Math.imul(te, ue) | 0, f = f + Math.imul(te, le) | 0, f = f + Math.imul(Tt, ue) | 0, A = A + Math.imul(Tt, le) | 0, I = I + Math.imul(Zt, fe) | 0, f = f + Math.imul(Zt, pe) | 0, f = f + Math.imul(xt, fe) | 0, A = A + Math.imul(xt, pe) | 0, I = I + Math.imul(mt, de) | 0, f = f + Math.imul(mt, Xt) | 0, f = f + Math.imul(J, de) | 0, A = A + Math.imul(J, Xt) | 0;
      var Bs = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (Bs >>> 26) | 0, Bs &= 67108863, I = Math.imul(zt, oe), f = Math.imul(zt, Wt), f = f + Math.imul(Lt, oe) | 0, A = Math.imul(Lt, Wt), I = I + Math.imul(Rt, ae) | 0, f = f + Math.imul(Rt, ce) | 0, f = f + Math.imul(jt, ae) | 0, A = A + Math.imul(jt, ce) | 0, I = I + Math.imul(Dt, he) | 0, f = f + Math.imul(Dt, Qt) | 0, f = f + Math.imul(ee, he) | 0, A = A + Math.imul(ee, Qt) | 0, I = I + Math.imul(Ft, ue) | 0, f = f + Math.imul(Ft, le) | 0, f = f + Math.imul(Bt, ue) | 0, A = A + Math.imul(Bt, le) | 0, I = I + Math.imul(te, fe) | 0, f = f + Math.imul(te, pe) | 0, f = f + Math.imul(Tt, fe) | 0, A = A + Math.imul(Tt, pe) | 0, I = I + Math.imul(Zt, de) | 0, f = f + Math.imul(Zt, Xt) | 0, f = f + Math.imul(xt, de) | 0, A = A + Math.imul(xt, Xt) | 0;
      var Us = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (Us >>> 26) | 0, Us &= 67108863, I = Math.imul(zt, ae), f = Math.imul(zt, ce), f = f + Math.imul(Lt, ae) | 0, A = Math.imul(Lt, ce), I = I + Math.imul(Rt, he) | 0, f = f + Math.imul(Rt, Qt) | 0, f = f + Math.imul(jt, he) | 0, A = A + Math.imul(jt, Qt) | 0, I = I + Math.imul(Dt, ue) | 0, f = f + Math.imul(Dt, le) | 0, f = f + Math.imul(ee, ue) | 0, A = A + Math.imul(ee, le) | 0, I = I + Math.imul(Ft, fe) | 0, f = f + Math.imul(Ft, pe) | 0, f = f + Math.imul(Bt, fe) | 0, A = A + Math.imul(Bt, pe) | 0, I = I + Math.imul(te, de) | 0, f = f + Math.imul(te, Xt) | 0, f = f + Math.imul(Tt, de) | 0, A = A + Math.imul(Tt, Xt) | 0;
      var $s = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + ($s >>> 26) | 0, $s &= 67108863, I = Math.imul(zt, he), f = Math.imul(zt, Qt), f = f + Math.imul(Lt, he) | 0, A = Math.imul(Lt, Qt), I = I + Math.imul(Rt, ue) | 0, f = f + Math.imul(Rt, le) | 0, f = f + Math.imul(jt, ue) | 0, A = A + Math.imul(jt, le) | 0, I = I + Math.imul(Dt, fe) | 0, f = f + Math.imul(Dt, pe) | 0, f = f + Math.imul(ee, fe) | 0, A = A + Math.imul(ee, pe) | 0, I = I + Math.imul(Ft, de) | 0, f = f + Math.imul(Ft, Xt) | 0, f = f + Math.imul(Bt, de) | 0, A = A + Math.imul(Bt, Xt) | 0;
      var Sn = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (Sn >>> 26) | 0, Sn &= 67108863, I = Math.imul(zt, ue), f = Math.imul(zt, le), f = f + Math.imul(Lt, ue) | 0, A = Math.imul(Lt, le), I = I + Math.imul(Rt, fe) | 0, f = f + Math.imul(Rt, pe) | 0, f = f + Math.imul(jt, fe) | 0, A = A + Math.imul(jt, pe) | 0, I = I + Math.imul(Dt, de) | 0, f = f + Math.imul(Dt, Xt) | 0, f = f + Math.imul(ee, de) | 0, A = A + Math.imul(ee, Xt) | 0;
      var Pn = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (Pn >>> 26) | 0, Pn &= 67108863, I = Math.imul(zt, fe), f = Math.imul(zt, pe), f = f + Math.imul(Lt, fe) | 0, A = Math.imul(Lt, pe), I = I + Math.imul(Rt, de) | 0, f = f + Math.imul(Rt, Xt) | 0, f = f + Math.imul(jt, de) | 0, A = A + Math.imul(jt, Xt) | 0;
      var Mn = (D + I | 0) + ((f & 8191) << 13) | 0;
      D = (A + (f >>> 13) | 0) + (Mn >>> 26) | 0, Mn &= 67108863, I = Math.imul(zt, de), f = Math.imul(zt, Xt), f = f + Math.imul(Lt, de) | 0, A = Math.imul(Lt, Xt);
      var Cn = (D + I | 0) + ((f & 8191) << 13) | 0;
      return D = (A + (f >>> 13) | 0) + (Cn >>> 26) | 0, Cn &= 67108863, N[0] = si, N[1] = ni, N[2] = oi, N[3] = ai, N[4] = ci, N[5] = hi, N[6] = Zi, N[7] = _n, N[8] = ts, N[9] = An, N[10] = En, N[11] = In, N[12] = Bs, N[13] = Us, N[14] = $s, N[15] = Sn, N[16] = Pn, N[17] = Mn, N[18] = Cn, D !== 0 && (N[19] = D, b.length++), b;
    };
    Math.imul || (ht = Q);
    function ut(u, d, b) {
      b.negative = d.negative ^ u.negative, b.length = u.length + d.length;
      for (var E = 0, M = 0, N = 0; N < b.length - 1; N++) {
        var D = M;
        M = 0;
        for (var I = E & 67108863, f = Math.min(N, d.length - 1), A = Math.max(0, N - u.length + 1); A <= f; A++) {
          var lt = N - A, ot = u.words[lt] | 0, m = d.words[A] | 0, $ = ot * m, B = $ & 67108863;
          D = D + ($ / 67108864 | 0) | 0, B = B + I | 0, I = B & 67108863, D = D + (B >>> 26) | 0, M += D >>> 26, D &= 67108863;
        }
        b.words[N] = I, E = D, D = M;
      }
      return E !== 0 ? b.words[N] = E : b.length--, b._strip();
    }
    function Y(u, d, b) {
      return ut(u, d, b);
    }
    a.prototype.mulTo = function(u, d) {
      var b, E = this.length + u.length;
      return this.length === 10 && u.length === 10 ? b = ht(this, u, d) : E < 63 ? b = Q(this, u, d) : E < 1024 ? b = ut(this, u, d) : b = Y(this, u, d), b;
    }, a.prototype.mul = function(u) {
      var d = new a(null);
      return d.words = new Array(this.length + u.length), this.mulTo(u, d);
    }, a.prototype.mulf = function(u) {
      var d = new a(null);
      return d.words = new Array(this.length + u.length), Y(this, u, d);
    }, a.prototype.imul = function(u) {
      return this.clone().mulTo(u, this);
    }, a.prototype.imuln = function(u) {
      var d = u < 0;
      d && (u = -u), s(typeof u == "number"), s(u < 67108864);
      for (var b = 0, E = 0; E < this.length; E++) {
        var M = (this.words[E] | 0) * u, N = (M & 67108863) + (b & 67108863);
        b >>= 26, b += M / 67108864 | 0, b += N >>> 26, this.words[E] = N & 67108863;
      }
      return b !== 0 && (this.words[E] = b, this.length++), d ? this.ineg() : this;
    }, a.prototype.muln = function(u) {
      return this.clone().imuln(u);
    }, a.prototype.sqr = function() {
      return this.mul(this);
    }, a.prototype.isqr = function() {
      return this.imul(this.clone());
    }, a.prototype.pow = function(u) {
      var d = H(u);
      if (d.length === 0)
        return new a(1);
      for (var b = this, E = 0; E < d.length && d[E] === 0; E++, b = b.sqr())
        ;
      if (++E < d.length)
        for (var M = b.sqr(); E < d.length; E++, M = M.sqr())
          d[E] !== 0 && (b = b.mul(M));
      return b;
    }, a.prototype.iushln = function(u) {
      s(typeof u == "number" && u >= 0);
      var d = u % 26, b = (u - d) / 26, E = 67108863 >>> 26 - d << 26 - d, M;
      if (d !== 0) {
        var N = 0;
        for (M = 0; M < this.length; M++) {
          var D = this.words[M] & E, I = (this.words[M] | 0) - D << d;
          this.words[M] = I | N, N = D >>> 26 - d;
        }
        N && (this.words[M] = N, this.length++);
      }
      if (b !== 0) {
        for (M = this.length - 1; M >= 0; M--)
          this.words[M + b] = this.words[M];
        for (M = 0; M < b; M++)
          this.words[M] = 0;
        this.length += b;
      }
      return this._strip();
    }, a.prototype.ishln = function(u) {
      return s(this.negative === 0), this.iushln(u);
    }, a.prototype.iushrn = function(u, d, b) {
      s(typeof u == "number" && u >= 0);
      var E;
      d ? E = (d - d % 26) / 26 : E = 0;
      var M = u % 26, N = Math.min((u - M) / 26, this.length), D = 67108863 ^ 67108863 >>> M << M, I = b;
      if (E -= N, E = Math.max(0, E), I) {
        for (var f = 0; f < N; f++)
          I.words[f] = this.words[f];
        I.length = N;
      }
      if (N !== 0)
        if (this.length > N)
          for (this.length -= N, f = 0; f < this.length; f++)
            this.words[f] = this.words[f + N];
        else
          this.words[0] = 0, this.length = 1;
      var A = 0;
      for (f = this.length - 1; f >= 0 && (A !== 0 || f >= E); f--) {
        var lt = this.words[f] | 0;
        this.words[f] = A << 26 - M | lt >>> M, A = lt & D;
      }
      return I && A !== 0 && (I.words[I.length++] = A), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, a.prototype.ishrn = function(u, d, b) {
      return s(this.negative === 0), this.iushrn(u, d, b);
    }, a.prototype.shln = function(u) {
      return this.clone().ishln(u);
    }, a.prototype.ushln = function(u) {
      return this.clone().iushln(u);
    }, a.prototype.shrn = function(u) {
      return this.clone().ishrn(u);
    }, a.prototype.ushrn = function(u) {
      return this.clone().iushrn(u);
    }, a.prototype.testn = function(u) {
      s(typeof u == "number" && u >= 0);
      var d = u % 26, b = (u - d) / 26, E = 1 << d;
      if (this.length <= b)
        return !1;
      var M = this.words[b];
      return !!(M & E);
    }, a.prototype.imaskn = function(u) {
      s(typeof u == "number" && u >= 0);
      var d = u % 26, b = (u - d) / 26;
      if (s(this.negative === 0, "imaskn works only with positive numbers"), this.length <= b)
        return this;
      if (d !== 0 && b++, this.length = Math.min(b, this.length), d !== 0) {
        var E = 67108863 ^ 67108863 >>> d << d;
        this.words[this.length - 1] &= E;
      }
      return this._strip();
    }, a.prototype.maskn = function(u) {
      return this.clone().imaskn(u);
    }, a.prototype.iaddn = function(u) {
      return s(typeof u == "number"), s(u < 67108864), u < 0 ? this.isubn(-u) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= u ? (this.words[0] = u - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(u), this.negative = 1, this) : this._iaddn(u);
    }, a.prototype._iaddn = function(u) {
      this.words[0] += u;
      for (var d = 0; d < this.length && this.words[d] >= 67108864; d++)
        this.words[d] -= 67108864, d === this.length - 1 ? this.words[d + 1] = 1 : this.words[d + 1]++;
      return this.length = Math.max(this.length, d + 1), this;
    }, a.prototype.isubn = function(u) {
      if (s(typeof u == "number"), s(u < 67108864), u < 0)
        return this.iaddn(-u);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(u), this.negative = 1, this;
      if (this.words[0] -= u, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var d = 0; d < this.length && this.words[d] < 0; d++)
          this.words[d] += 67108864, this.words[d + 1] -= 1;
      return this._strip();
    }, a.prototype.addn = function(u) {
      return this.clone().iaddn(u);
    }, a.prototype.subn = function(u) {
      return this.clone().isubn(u);
    }, a.prototype.iabs = function() {
      return this.negative = 0, this;
    }, a.prototype.abs = function() {
      return this.clone().iabs();
    }, a.prototype._ishlnsubmul = function(u, d, b) {
      var E = u.length + b, M;
      this._expand(E);
      var N, D = 0;
      for (M = 0; M < u.length; M++) {
        N = (this.words[M + b] | 0) + D;
        var I = (u.words[M] | 0) * d;
        N -= I & 67108863, D = (N >> 26) - (I / 67108864 | 0), this.words[M + b] = N & 67108863;
      }
      for (; M < this.length - b; M++)
        N = (this.words[M + b] | 0) + D, D = N >> 26, this.words[M + b] = N & 67108863;
      if (D === 0)
        return this._strip();
      for (s(D === -1), D = 0, M = 0; M < this.length; M++)
        N = -(this.words[M] | 0) + D, D = N >> 26, this.words[M] = N & 67108863;
      return this.negative = 1, this._strip();
    }, a.prototype._wordDiv = function(u, d) {
      var b = this.length - u.length, E = this.clone(), M = u, N = M.words[M.length - 1] | 0, D = this._countBits(N);
      b = 26 - D, b !== 0 && (M = M.ushln(b), E.iushln(b), N = M.words[M.length - 1] | 0);
      var I = E.length - M.length, f;
      if (d !== "mod") {
        f = new a(null), f.length = I + 1, f.words = new Array(f.length);
        for (var A = 0; A < f.length; A++)
          f.words[A] = 0;
      }
      var lt = E.clone()._ishlnsubmul(M, 1, I);
      lt.negative === 0 && (E = lt, f && (f.words[I] = 1));
      for (var ot = I - 1; ot >= 0; ot--) {
        var m = (E.words[M.length + ot] | 0) * 67108864 + (E.words[M.length + ot - 1] | 0);
        for (m = Math.min(m / N | 0, 67108863), E._ishlnsubmul(M, m, ot); E.negative !== 0; )
          m--, E.negative = 0, E._ishlnsubmul(M, 1, ot), E.isZero() || (E.negative ^= 1);
        f && (f.words[ot] = m);
      }
      return f && f._strip(), E._strip(), d !== "div" && b !== 0 && E.iushrn(b), { div: f || null, mod: E };
    }, a.prototype.divmod = function(u, d, b) {
      if (s(!u.isZero()), this.isZero())
        return { div: new a(0), mod: new a(0) };
      var E, M, N;
      return this.negative !== 0 && u.negative === 0 ? (N = this.neg().divmod(u, d), d !== "mod" && (E = N.div.neg()), d !== "div" && (M = N.mod.neg(), b && M.negative !== 0 && M.iadd(u)), { div: E, mod: M }) : this.negative === 0 && u.negative !== 0 ? (N = this.divmod(u.neg(), d), d !== "mod" && (E = N.div.neg()), { div: E, mod: N.mod }) : this.negative & u.negative ? (N = this.neg().divmod(u.neg(), d), d !== "div" && (M = N.mod.neg(), b && M.negative !== 0 && M.isub(u)), { div: N.div, mod: M }) : u.length > this.length || this.cmp(u) < 0 ? { div: new a(0), mod: this } : u.length === 1 ? d === "div" ? { div: this.divn(u.words[0]), mod: null } : d === "mod" ? { div: null, mod: new a(this.modrn(u.words[0])) } : { div: this.divn(u.words[0]), mod: new a(this.modrn(u.words[0])) } : this._wordDiv(u, d);
    }, a.prototype.div = function(u) {
      return this.divmod(u, "div", !1).div;
    }, a.prototype.mod = function(u) {
      return this.divmod(u, "mod", !1).mod;
    }, a.prototype.umod = function(u) {
      return this.divmod(u, "mod", !0).mod;
    }, a.prototype.divRound = function(u) {
      var d = this.divmod(u);
      if (d.mod.isZero())
        return d.div;
      var b = d.div.negative !== 0 ? d.mod.isub(u) : d.mod, E = u.ushrn(1), M = u.andln(1), N = b.cmp(E);
      return N < 0 || M === 1 && N === 0 ? d.div : d.div.negative !== 0 ? d.div.isubn(1) : d.div.iaddn(1);
    }, a.prototype.modrn = function(u) {
      var d = u < 0;
      d && (u = -u), s(u <= 67108863);
      for (var b = (1 << 26) % u, E = 0, M = this.length - 1; M >= 0; M--)
        E = (b * E + (this.words[M] | 0)) % u;
      return d ? -E : E;
    }, a.prototype.modn = function(u) {
      return this.modrn(u);
    }, a.prototype.idivn = function(u) {
      var d = u < 0;
      d && (u = -u), s(u <= 67108863);
      for (var b = 0, E = this.length - 1; E >= 0; E--) {
        var M = (this.words[E] | 0) + b * 67108864;
        this.words[E] = M / u | 0, b = M % u;
      }
      return this._strip(), d ? this.ineg() : this;
    }, a.prototype.divn = function(u) {
      return this.clone().idivn(u);
    }, a.prototype.egcd = function(u) {
      s(u.negative === 0), s(!u.isZero());
      var d = this, b = u.clone();
      d.negative !== 0 ? d = d.umod(u) : d = d.clone();
      for (var E = new a(1), M = new a(0), N = new a(0), D = new a(1), I = 0; d.isEven() && b.isEven(); )
        d.iushrn(1), b.iushrn(1), ++I;
      for (var f = b.clone(), A = d.clone(); !d.isZero(); ) {
        for (var lt = 0, ot = 1; !(d.words[0] & ot) && lt < 26; ++lt, ot <<= 1)
          ;
        if (lt > 0)
          for (d.iushrn(lt); lt-- > 0; )
            (E.isOdd() || M.isOdd()) && (E.iadd(f), M.isub(A)), E.iushrn(1), M.iushrn(1);
        for (var m = 0, $ = 1; !(b.words[0] & $) && m < 26; ++m, $ <<= 1)
          ;
        if (m > 0)
          for (b.iushrn(m); m-- > 0; )
            (N.isOdd() || D.isOdd()) && (N.iadd(f), D.isub(A)), N.iushrn(1), D.iushrn(1);
        d.cmp(b) >= 0 ? (d.isub(b), E.isub(N), M.isub(D)) : (b.isub(d), N.isub(E), D.isub(M));
      }
      return { a: N, b: D, gcd: b.iushln(I) };
    }, a.prototype._invmp = function(u) {
      s(u.negative === 0), s(!u.isZero());
      var d = this, b = u.clone();
      d.negative !== 0 ? d = d.umod(u) : d = d.clone();
      for (var E = new a(1), M = new a(0), N = b.clone(); d.cmpn(1) > 0 && b.cmpn(1) > 0; ) {
        for (var D = 0, I = 1; !(d.words[0] & I) && D < 26; ++D, I <<= 1)
          ;
        if (D > 0)
          for (d.iushrn(D); D-- > 0; )
            E.isOdd() && E.iadd(N), E.iushrn(1);
        for (var f = 0, A = 1; !(b.words[0] & A) && f < 26; ++f, A <<= 1)
          ;
        if (f > 0)
          for (b.iushrn(f); f-- > 0; )
            M.isOdd() && M.iadd(N), M.iushrn(1);
        d.cmp(b) >= 0 ? (d.isub(b), E.isub(M)) : (b.isub(d), M.isub(E));
      }
      var lt;
      return d.cmpn(1) === 0 ? lt = E : lt = M, lt.cmpn(0) < 0 && lt.iadd(u), lt;
    }, a.prototype.gcd = function(u) {
      if (this.isZero())
        return u.abs();
      if (u.isZero())
        return this.abs();
      var d = this.clone(), b = u.clone();
      d.negative = 0, b.negative = 0;
      for (var E = 0; d.isEven() && b.isEven(); E++)
        d.iushrn(1), b.iushrn(1);
      do {
        for (; d.isEven(); )
          d.iushrn(1);
        for (; b.isEven(); )
          b.iushrn(1);
        var M = d.cmp(b);
        if (M < 0) {
          var N = d;
          d = b, b = N;
        } else if (M === 0 || b.cmpn(1) === 0)
          break;
        d.isub(b);
      } while (!0);
      return b.iushln(E);
    }, a.prototype.invm = function(u) {
      return this.egcd(u).a.umod(u);
    }, a.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, a.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, a.prototype.andln = function(u) {
      return this.words[0] & u;
    }, a.prototype.bincn = function(u) {
      s(typeof u == "number");
      var d = u % 26, b = (u - d) / 26, E = 1 << d;
      if (this.length <= b)
        return this._expand(b + 1), this.words[b] |= E, this;
      for (var M = E, N = b; M !== 0 && N < this.length; N++) {
        var D = this.words[N] | 0;
        D += M, M = D >>> 26, D &= 67108863, this.words[N] = D;
      }
      return M !== 0 && (this.words[N] = M, this.length++), this;
    }, a.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, a.prototype.cmpn = function(u) {
      var d = u < 0;
      if (this.negative !== 0 && !d)
        return -1;
      if (this.negative === 0 && d)
        return 1;
      this._strip();
      var b;
      if (this.length > 1)
        b = 1;
      else {
        d && (u = -u), s(u <= 67108863, "Number is too big");
        var E = this.words[0] | 0;
        b = E === u ? 0 : E < u ? -1 : 1;
      }
      return this.negative !== 0 ? -b | 0 : b;
    }, a.prototype.cmp = function(u) {
      if (this.negative !== 0 && u.negative === 0)
        return -1;
      if (this.negative === 0 && u.negative !== 0)
        return 1;
      var d = this.ucmp(u);
      return this.negative !== 0 ? -d | 0 : d;
    }, a.prototype.ucmp = function(u) {
      if (this.length > u.length)
        return 1;
      if (this.length < u.length)
        return -1;
      for (var d = 0, b = this.length - 1; b >= 0; b--) {
        var E = this.words[b] | 0, M = u.words[b] | 0;
        if (E !== M) {
          E < M ? d = -1 : E > M && (d = 1);
          break;
        }
      }
      return d;
    }, a.prototype.gtn = function(u) {
      return this.cmpn(u) === 1;
    }, a.prototype.gt = function(u) {
      return this.cmp(u) === 1;
    }, a.prototype.gten = function(u) {
      return this.cmpn(u) >= 0;
    }, a.prototype.gte = function(u) {
      return this.cmp(u) >= 0;
    }, a.prototype.ltn = function(u) {
      return this.cmpn(u) === -1;
    }, a.prototype.lt = function(u) {
      return this.cmp(u) === -1;
    }, a.prototype.lten = function(u) {
      return this.cmpn(u) <= 0;
    }, a.prototype.lte = function(u) {
      return this.cmp(u) <= 0;
    }, a.prototype.eqn = function(u) {
      return this.cmpn(u) === 0;
    }, a.prototype.eq = function(u) {
      return this.cmp(u) === 0;
    }, a.red = function(u) {
      return new Ct(u);
    }, a.prototype.toRed = function(u) {
      return s(!this.red, "Already a number in reduction context"), s(this.negative === 0, "red works only with positives"), u.convertTo(this)._forceRed(u);
    }, a.prototype.fromRed = function() {
      return s(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, a.prototype._forceRed = function(u) {
      return this.red = u, this;
    }, a.prototype.forceRed = function(u) {
      return s(!this.red, "Already a number in reduction context"), this._forceRed(u);
    }, a.prototype.redAdd = function(u) {
      return s(this.red, "redAdd works only with red numbers"), this.red.add(this, u);
    }, a.prototype.redIAdd = function(u) {
      return s(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, u);
    }, a.prototype.redSub = function(u) {
      return s(this.red, "redSub works only with red numbers"), this.red.sub(this, u);
    }, a.prototype.redISub = function(u) {
      return s(this.red, "redISub works only with red numbers"), this.red.isub(this, u);
    }, a.prototype.redShl = function(u) {
      return s(this.red, "redShl works only with red numbers"), this.red.shl(this, u);
    }, a.prototype.redMul = function(u) {
      return s(this.red, "redMul works only with red numbers"), this.red._verify2(this, u), this.red.mul(this, u);
    }, a.prototype.redIMul = function(u) {
      return s(this.red, "redMul works only with red numbers"), this.red._verify2(this, u), this.red.imul(this, u);
    }, a.prototype.redSqr = function() {
      return s(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, a.prototype.redISqr = function() {
      return s(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, a.prototype.redSqrt = function() {
      return s(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, a.prototype.redInvm = function() {
      return s(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, a.prototype.redNeg = function() {
      return s(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, a.prototype.redPow = function(u) {
      return s(this.red && !u.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, u);
    };
    var et = { k256: null, p224: null, p192: null, p25519: null };
    function ct(u, d) {
      this.name = u, this.p = new a(d, 16), this.n = this.p.bitLength(), this.k = new a(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    ct.prototype._tmp = function() {
      var u = new a(null);
      return u.words = new Array(Math.ceil(this.n / 13)), u;
    }, ct.prototype.ireduce = function(u) {
      var d = u, b;
      do
        this.split(d, this.tmp), d = this.imulK(d), d = d.iadd(this.tmp), b = d.bitLength();
      while (b > this.n);
      var E = b < this.n ? -1 : d.ucmp(this.p);
      return E === 0 ? (d.words[0] = 0, d.length = 1) : E > 0 ? d.isub(this.p) : d.strip !== void 0 ? d.strip() : d._strip(), d;
    }, ct.prototype.split = function(u, d) {
      u.iushrn(this.n, 0, d);
    }, ct.prototype.imulK = function(u) {
      return u.imul(this.k);
    };
    function st() {
      ct.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    o(st, ct), st.prototype.split = function(u, d) {
      for (var b = 4194303, E = Math.min(u.length, 9), M = 0; M < E; M++)
        d.words[M] = u.words[M];
      if (d.length = E, u.length <= 9) {
        u.words[0] = 0, u.length = 1;
        return;
      }
      var N = u.words[9];
      for (d.words[d.length++] = N & b, M = 10; M < u.length; M++) {
        var D = u.words[M] | 0;
        u.words[M - 10] = (D & b) << 4 | N >>> 22, N = D;
      }
      N >>>= 22, u.words[M - 10] = N, N === 0 && u.length > 10 ? u.length -= 10 : u.length -= 9;
    }, st.prototype.imulK = function(u) {
      u.words[u.length] = 0, u.words[u.length + 1] = 0, u.length += 2;
      for (var d = 0, b = 0; b < u.length; b++) {
        var E = u.words[b] | 0;
        d += E * 977, u.words[b] = d & 67108863, d = E * 64 + (d / 67108864 | 0);
      }
      return u.words[u.length - 1] === 0 && (u.length--, u.words[u.length - 1] === 0 && u.length--), u;
    };
    function gt() {
      ct.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    o(gt, ct);
    function kt() {
      ct.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    o(kt, ct);
    function Fe() {
      ct.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    o(Fe, ct), Fe.prototype.imulK = function(u) {
      for (var d = 0, b = 0; b < u.length; b++) {
        var E = (u.words[b] | 0) * 19 + d, M = E & 67108863;
        E >>>= 26, u.words[b] = M, d = E;
      }
      return d !== 0 && (u.words[u.length++] = d), u;
    }, a._prime = function(u) {
      if (et[u])
        return et[u];
      var d;
      if (u === "k256")
        d = new st();
      else if (u === "p224")
        d = new gt();
      else if (u === "p192")
        d = new kt();
      else if (u === "p25519")
        d = new Fe();
      else
        throw new Error("Unknown prime " + u);
      return et[u] = d, d;
    };
    function Ct(u) {
      if (typeof u == "string") {
        var d = a._prime(u);
        this.m = d.p, this.prime = d;
      } else
        s(u.gtn(1), "modulus must be greater than 1"), this.m = u, this.prime = null;
    }
    Ct.prototype._verify1 = function(u) {
      s(u.negative === 0, "red works only with positives"), s(u.red, "red works only with red numbers");
    }, Ct.prototype._verify2 = function(u, d) {
      s((u.negative | d.negative) === 0, "red works only with positives"), s(u.red && u.red === d.red, "red works only with red numbers");
    }, Ct.prototype.imod = function(u) {
      return this.prime ? this.prime.ireduce(u)._forceRed(this) : (P(u, u.umod(this.m)._forceRed(this)), u);
    }, Ct.prototype.neg = function(u) {
      return u.isZero() ? u.clone() : this.m.sub(u)._forceRed(this);
    }, Ct.prototype.add = function(u, d) {
      this._verify2(u, d);
      var b = u.add(d);
      return b.cmp(this.m) >= 0 && b.isub(this.m), b._forceRed(this);
    }, Ct.prototype.iadd = function(u, d) {
      this._verify2(u, d);
      var b = u.iadd(d);
      return b.cmp(this.m) >= 0 && b.isub(this.m), b;
    }, Ct.prototype.sub = function(u, d) {
      this._verify2(u, d);
      var b = u.sub(d);
      return b.cmpn(0) < 0 && b.iadd(this.m), b._forceRed(this);
    }, Ct.prototype.isub = function(u, d) {
      this._verify2(u, d);
      var b = u.isub(d);
      return b.cmpn(0) < 0 && b.iadd(this.m), b;
    }, Ct.prototype.shl = function(u, d) {
      return this._verify1(u), this.imod(u.ushln(d));
    }, Ct.prototype.imul = function(u, d) {
      return this._verify2(u, d), this.imod(u.imul(d));
    }, Ct.prototype.mul = function(u, d) {
      return this._verify2(u, d), this.imod(u.mul(d));
    }, Ct.prototype.isqr = function(u) {
      return this.imul(u, u.clone());
    }, Ct.prototype.sqr = function(u) {
      return this.mul(u, u);
    }, Ct.prototype.sqrt = function(u) {
      if (u.isZero())
        return u.clone();
      var d = this.m.andln(3);
      if (s(d % 2 === 1), d === 3) {
        var b = this.m.add(new a(1)).iushrn(2);
        return this.pow(u, b);
      }
      for (var E = this.m.subn(1), M = 0; !E.isZero() && E.andln(1) === 0; )
        M++, E.iushrn(1);
      s(!E.isZero());
      var N = new a(1).toRed(this), D = N.redNeg(), I = this.m.subn(1).iushrn(1), f = this.m.bitLength();
      for (f = new a(2 * f * f).toRed(this); this.pow(f, I).cmp(D) !== 0; )
        f.redIAdd(D);
      for (var A = this.pow(f, E), lt = this.pow(u, E.addn(1).iushrn(1)), ot = this.pow(u, E), m = M; ot.cmp(N) !== 0; ) {
        for (var $ = ot, B = 0; $.cmp(N) !== 0; B++)
          $ = $.redSqr();
        s(B < m);
        var L = this.pow(A, new a(1).iushln(m - B - 1));
        lt = lt.redMul(L), A = L.redSqr(), ot = ot.redMul(A), m = B;
      }
      return lt;
    }, Ct.prototype.invm = function(u) {
      var d = u._invmp(this.m);
      return d.negative !== 0 ? (d.negative = 0, this.imod(d).redNeg()) : this.imod(d);
    }, Ct.prototype.pow = function(u, d) {
      if (d.isZero())
        return new a(1).toRed(this);
      if (d.cmpn(1) === 0)
        return u.clone();
      var b = 4, E = new Array(1 << b);
      E[0] = new a(1).toRed(this), E[1] = u;
      for (var M = 2; M < E.length; M++)
        E[M] = this.mul(E[M - 1], u);
      var N = E[0], D = 0, I = 0, f = d.bitLength() % 26;
      for (f === 0 && (f = 26), M = d.length - 1; M >= 0; M--) {
        for (var A = d.words[M], lt = f - 1; lt >= 0; lt--) {
          var ot = A >> lt & 1;
          if (N !== E[0] && (N = this.sqr(N)), ot === 0 && D === 0) {
            I = 0;
            continue;
          }
          D <<= 1, D |= ot, I++, !(I !== b && (M !== 0 || lt !== 0)) && (N = this.mul(N, E[D]), I = 0, D = 0);
        }
        f = 26;
      }
      return N;
    }, Ct.prototype.convertTo = function(u) {
      var d = u.umod(this.m);
      return d === u ? d.clone() : d;
    }, Ct.prototype.convertFrom = function(u) {
      var d = u.clone();
      return d.red = null, d;
    }, a.mont = function(u) {
      return new Ce(u);
    };
    function Ce(u) {
      Ct.call(this, u), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new a(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    o(Ce, Ct), Ce.prototype.convertTo = function(u) {
      return this.imod(u.ushln(this.shift));
    }, Ce.prototype.convertFrom = function(u) {
      var d = this.imod(u.mul(this.rinv));
      return d.red = null, d;
    }, Ce.prototype.imul = function(u, d) {
      if (u.isZero() || d.isZero())
        return u.words[0] = 0, u.length = 1, u;
      var b = u.imul(d), E = b.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), M = b.isub(E).iushrn(this.shift), N = M;
      return M.cmp(this.m) >= 0 ? N = M.isub(this.m) : M.cmpn(0) < 0 && (N = M.iadd(this.m)), N._forceRed(this);
    }, Ce.prototype.mul = function(u, d) {
      if (u.isZero() || d.isZero())
        return new a(0)._forceRed(this);
      var b = u.mul(d), E = b.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), M = b.isub(E).iushrn(this.shift), N = M;
      return M.cmp(this.m) >= 0 ? N = M.isub(this.m) : M.cmpn(0) < 0 && (N = M.iadd(this.m)), N._forceRed(this);
    }, Ce.prototype.invm = function(u) {
      var d = this.imod(u._invmp(this.m).mul(this.r2));
      return d._forceRed(this);
    };
  })(i, ad);
})(ld);
var wt = ld.exports;
const fd = "bignumber/5.7.0";
var _a = wt.BN;
const Gi = new ze(fd), Qc = {}, qf = 9007199254740991;
function h2(i) {
  return i != null && (Ze.isBigNumber(i) || typeof i == "number" && i % 1 === 0 || typeof i == "string" && !!i.match(/^-?[0-9]+$/) || wr(i) || typeof i == "bigint" || gn(i));
}
let kf = !1, Ze = class Gr {
  constructor(t, e) {
    t !== Qc && Gi.throwError("cannot call constructor directly; use BigNumber.from", ze.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = e, this._isBigNumber = !0, Object.freeze(this);
  }
  fromTwos(t) {
    return nr(Pt(this).fromTwos(t));
  }
  toTwos(t) {
    return nr(Pt(this).toTwos(t));
  }
  abs() {
    return this._hex[0] === "-" ? Gr.from(this._hex.substring(1)) : this;
  }
  add(t) {
    return nr(Pt(this).add(Pt(t)));
  }
  sub(t) {
    return nr(Pt(this).sub(Pt(t)));
  }
  div(t) {
    return Gr.from(t).isZero() && Nr("division-by-zero", "div"), nr(Pt(this).div(Pt(t)));
  }
  mul(t) {
    return nr(Pt(this).mul(Pt(t)));
  }
  mod(t) {
    const e = Pt(t);
    return e.isNeg() && Nr("division-by-zero", "mod"), nr(Pt(this).umod(e));
  }
  pow(t) {
    const e = Pt(t);
    return e.isNeg() && Nr("negative-power", "pow"), nr(Pt(this).pow(e));
  }
  and(t) {
    const e = Pt(t);
    return (this.isNegative() || e.isNeg()) && Nr("unbound-bitwise-result", "and"), nr(Pt(this).and(e));
  }
  or(t) {
    const e = Pt(t);
    return (this.isNegative() || e.isNeg()) && Nr("unbound-bitwise-result", "or"), nr(Pt(this).or(e));
  }
  xor(t) {
    const e = Pt(t);
    return (this.isNegative() || e.isNeg()) && Nr("unbound-bitwise-result", "xor"), nr(Pt(this).xor(e));
  }
  mask(t) {
    return (this.isNegative() || t < 0) && Nr("negative-width", "mask"), nr(Pt(this).maskn(t));
  }
  shl(t) {
    return (this.isNegative() || t < 0) && Nr("negative-width", "shl"), nr(Pt(this).shln(t));
  }
  shr(t) {
    return (this.isNegative() || t < 0) && Nr("negative-width", "shr"), nr(Pt(this).shrn(t));
  }
  eq(t) {
    return Pt(this).eq(Pt(t));
  }
  lt(t) {
    return Pt(this).lt(Pt(t));
  }
  lte(t) {
    return Pt(this).lte(Pt(t));
  }
  gt(t) {
    return Pt(this).gt(Pt(t));
  }
  gte(t) {
    return Pt(this).gte(Pt(t));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return Pt(this).isZero();
  }
  toNumber() {
    try {
      return Pt(this).toNumber();
    } catch {
      Nr("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Gi.throwError("this platform does not support BigInt", ze.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? kf || (kf = !0, Gi.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Gi.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", ze.errors.UNEXPECTED_ARGUMENT, {}) : Gi.throwError("BigNumber.toString does not accept parameters", ze.errors.UNEXPECTED_ARGUMENT, {})), Pt(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(t) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(t) {
    if (t instanceof Gr)
      return t;
    if (typeof t == "string")
      return t.match(/^-?0x[0-9a-f]+$/i) ? new Gr(Qc, co(t)) : t.match(/^-?[0-9]+$/) ? new Gr(Qc, co(new _a(t))) : Gi.throwArgumentError("invalid BigNumber string", "value", t);
    if (typeof t == "number")
      return t % 1 && Nr("underflow", "BigNumber.from", t), (t >= qf || t <= -qf) && Nr("overflow", "BigNumber.from", t), Gr.from(String(t));
    const e = t;
    if (typeof e == "bigint")
      return Gr.from(e.toString());
    if (gn(e))
      return Gr.from(ar(e));
    if (e)
      if (e.toHexString) {
        const s = e.toHexString();
        if (typeof s == "string")
          return Gr.from(s);
      } else {
        let s = e._hex;
        if (s == null && e.type === "BigNumber" && (s = e.hex), typeof s == "string" && (wr(s) || s[0] === "-" && wr(s.substring(1))))
          return Gr.from(s);
      }
    return Gi.throwArgumentError("invalid BigNumber value", "value", t);
  }
  static isBigNumber(t) {
    return !!(t && t._isBigNumber);
  }
};
function co(i) {
  if (typeof i != "string")
    return co(i.toString(16));
  if (i[0] === "-")
    return i = i.substring(1), i[0] === "-" && Gi.throwArgumentError("invalid hex", "value", i), i = co(i), i === "0x00" ? i : "-" + i;
  if (i.substring(0, 2) !== "0x" && (i = "0x" + i), i === "0x")
    return "0x00";
  for (i.length % 2 && (i = "0x0" + i.substring(2)); i.length > 4 && i.substring(0, 4) === "0x00"; )
    i = "0x" + i.substring(4);
  return i;
}
function nr(i) {
  return Ze.from(co(i));
}
function Pt(i) {
  const t = Ze.from(i).toHexString();
  return t[0] === "-" ? new _a("-" + t.substring(3), 16) : new _a(t.substring(2), 16);
}
function Nr(i, t, e) {
  const s = { fault: i, operation: t };
  return e != null && (s.value = e), Gi.throwError(i, ze.errors.NUMERIC_FAULT, s);
}
function u2(i) {
  return new _a(i, 36).toString(16);
}
const We = new ze(fd), so = {}, pd = Ze.from(0), dd = Ze.from(-1);
function gd(i, t, e, s) {
  const o = { fault: t, operation: e };
  return s !== void 0 && (o.value = s), We.throwError(i, ze.errors.NUMERIC_FAULT, o);
}
let no = "0";
for (; no.length < 256; )
  no += no;
function Uh(i) {
  if (typeof i != "number")
    try {
      i = Ze.from(i).toNumber();
    } catch {
    }
  return typeof i == "number" && i >= 0 && i <= 256 && !(i % 1) ? "1" + no.substring(0, i) : We.throwArgumentError("invalid decimal size", "decimals", i);
}
function Gc(i, t) {
  t == null && (t = 0);
  const e = Uh(t);
  i = Ze.from(i);
  const s = i.lt(pd);
  s && (i = i.mul(dd));
  let o = i.mod(e).toString();
  for (; o.length < e.length - 1; )
    o = "0" + o;
  o = o.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const a = i.div(e).toString();
  return e.length === 1 ? i = a : i = a + "." + o, s && (i = "-" + i), i;
}
function Hi(i, t) {
  t == null && (t = 0);
  const e = Uh(t);
  (typeof i != "string" || !i.match(/^-?[0-9.]+$/)) && We.throwArgumentError("invalid decimal value", "value", i);
  const s = i.substring(0, 1) === "-";
  s && (i = i.substring(1)), i === "." && We.throwArgumentError("missing value", "value", i);
  const o = i.split(".");
  o.length > 2 && We.throwArgumentError("too many decimal points", "value", i);
  let a = o[0], h = o[1];
  for (a || (a = "0"), h || (h = "0"); h[h.length - 1] === "0"; )
    h = h.substring(0, h.length - 1);
  for (h.length > e.length - 1 && gd("fractional component exceeds decimals", "underflow", "parseFixed"), h === "" && (h = "0"); h.length < e.length - 1; )
    h += "0";
  const p = Ze.from(a), v = Ze.from(h);
  let y = p.mul(e).add(v);
  return s && (y = y.mul(dd)), y;
}
let Jc = class wh {
  constructor(t, e, s, o) {
    t !== so && We.throwError("cannot use FixedFormat constructor; use FixedFormat.from", ze.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = e, this.width = s, this.decimals = o, this.name = (e ? "" : "u") + "fixed" + String(s) + "x" + String(o), this._multiplier = Uh(o), Object.freeze(this);
  }
  static from(t) {
    if (t instanceof wh)
      return t;
    typeof t == "number" && (t = `fixed128x${t}`);
    let e = !0, s = 128, o = 18;
    if (typeof t == "string") {
      if (t !== "fixed")
        if (t === "ufixed")
          e = !1;
        else {
          const a = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
          a || We.throwArgumentError("invalid fixed format", "format", t), e = a[1] !== "u", s = parseInt(a[2]), o = parseInt(a[3]);
        }
    } else if (t) {
      const a = (h, p, v) => t[h] == null ? v : (typeof t[h] !== p && We.throwArgumentError("invalid fixed format (" + h + " not " + p + ")", "format." + h, t[h]), t[h]);
      e = a("signed", "boolean", e), s = a("width", "number", s), o = a("decimals", "number", o);
    }
    return s % 8 && We.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", s), o > 80 && We.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", o), new wh(so, e, s, o);
  }
}, md = class Ye {
  constructor(t, e, s, o) {
    t !== so && We.throwError("cannot use FixedNumber constructor; use FixedNumber.from", ze.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = o, this._hex = e, this._value = s, this._isFixedNumber = !0, Object.freeze(this);
  }
  _checkFormat(t) {
    this.format.name !== t.format.name && We.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t);
  }
  addUnsafe(t) {
    this._checkFormat(t);
    const e = Hi(this._value, this.format.decimals), s = Hi(t._value, t.format.decimals);
    return Ye.fromValue(e.add(s), this.format.decimals, this.format);
  }
  subUnsafe(t) {
    this._checkFormat(t);
    const e = Hi(this._value, this.format.decimals), s = Hi(t._value, t.format.decimals);
    return Ye.fromValue(e.sub(s), this.format.decimals, this.format);
  }
  mulUnsafe(t) {
    this._checkFormat(t);
    const e = Hi(this._value, this.format.decimals), s = Hi(t._value, t.format.decimals);
    return Ye.fromValue(e.mul(s).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(t) {
    this._checkFormat(t);
    const e = Hi(this._value, this.format.decimals), s = Hi(t._value, t.format.decimals);
    return Ye.fromValue(e.mul(this.format._multiplier).div(s), this.format.decimals, this.format);
  }
  floor() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let e = Ye.from(t[0], this.format);
    const s = !t[1].match(/^(0*)$/);
    return this.isNegative() && s && (e = e.subUnsafe(Bf.toFormat(e.format))), e;
  }
  ceiling() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let e = Ye.from(t[0], this.format);
    const s = !t[1].match(/^(0*)$/);
    return !this.isNegative() && s && (e = e.addUnsafe(Bf.toFormat(e.format))), e;
  }
  round(t) {
    t == null && (t = 0);
    const e = this.toString().split(".");
    if (e.length === 1 && e.push("0"), (t < 0 || t > 80 || t % 1) && We.throwArgumentError("invalid decimal count", "decimals", t), e[1].length <= t)
      return this;
    const s = Ye.from("1" + no.substring(0, t), this.format), o = l2.toFormat(this.format);
    return this.mulUnsafe(s).addUnsafe(o).floor().divUnsafe(s);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(t) {
    if (t == null)
      return this._hex;
    t % 8 && We.throwArgumentError("invalid byte width", "width", t);
    const e = Ze.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
    return _i(e, t / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(t) {
    return Ye.fromString(this._value, t);
  }
  static fromValue(t, e, s) {
    return s == null && e != null && !h2(e) && (s = e, e = null), e == null && (e = 0), s == null && (s = "fixed"), Ye.fromString(Gc(t, e), Jc.from(s));
  }
  static fromString(t, e) {
    e == null && (e = "fixed");
    const s = Jc.from(e), o = Hi(t, s.decimals);
    !s.signed && o.lt(pd) && gd("unsigned value cannot be negative", "overflow", "value", t);
    let a = null;
    s.signed ? a = o.toTwos(s.width).toHexString() : (a = o.toHexString(), a = _i(a, s.width / 8));
    const h = Gc(o, s.decimals);
    return new Ye(so, a, h, s);
  }
  static fromBytes(t, e) {
    e == null && (e = "fixed");
    const s = Jc.from(e);
    if (Ee(t).length > s.width / 8)
      throw new Error("overflow");
    let o = Ze.from(t);
    s.signed && (o = o.fromTwos(s.width));
    const a = o.toTwos((s.signed ? 0 : 1) + s.width).toHexString(), h = Gc(o, s.decimals);
    return new Ye(so, a, h, s);
  }
  static from(t, e) {
    if (typeof t == "string")
      return Ye.fromString(t, e);
    if (gn(t))
      return Ye.fromBytes(t, e);
    try {
      return Ye.fromValue(t, 0, e);
    } catch (s) {
      if (s.code !== ze.errors.INVALID_ARGUMENT)
        throw s;
    }
    return We.throwArgumentError("invalid FixedNumber value", "value", t);
  }
  static isFixedNumber(t) {
    return !!(t && t._isFixedNumber);
  }
};
const Bf = md.from(1), l2 = md.from("0.5"), f2 = "strings/5.7.0", p2 = new ze(f2);
var Aa;
(function(i) {
  i.current = "", i.NFC = "NFC", i.NFD = "NFD", i.NFKC = "NFKC", i.NFKD = "NFKD";
})(Aa || (Aa = {}));
var Uf;
(function(i) {
  i.UNEXPECTED_CONTINUE = "unexpected continuation byte", i.BAD_PREFIX = "bad codepoint prefix", i.OVERRUN = "string overrun", i.MISSING_CONTINUE = "missing continuation byte", i.OUT_OF_RANGE = "out of UTF-8 range", i.UTF16_SURROGATE = "UTF-16 surrogate", i.OVERLONG = "overlong representation";
})(Uf || (Uf = {}));
function Yc(i, t = Aa.current) {
  t != Aa.current && (p2.checkNormalize(), i = i.normalize(t));
  let e = [];
  for (let s = 0; s < i.length; s++) {
    const o = i.charCodeAt(s);
    if (o < 128)
      e.push(o);
    else if (o < 2048)
      e.push(o >> 6 | 192), e.push(o & 63 | 128);
    else if ((o & 64512) == 55296) {
      s++;
      const a = i.charCodeAt(s);
      if (s >= i.length || (a & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const h = 65536 + ((o & 1023) << 10) + (a & 1023);
      e.push(h >> 18 | 240), e.push(h >> 12 & 63 | 128), e.push(h >> 6 & 63 | 128), e.push(h & 63 | 128);
    } else
      e.push(o >> 12 | 224), e.push(o >> 6 & 63 | 128), e.push(o & 63 | 128);
  }
  return Ee(e);
}
function d2(i) {
  if (i.length % 4 !== 0)
    throw new Error("bad data");
  let t = [];
  for (let e = 0; e < i.length; e += 4)
    t.push(parseInt(i.substring(e, e + 4), 16));
  return t;
}
function Wc(i, t) {
  t || (t = function(o) {
    return [parseInt(o, 16)];
  });
  let e = 0, s = {};
  return i.split(",").forEach((o) => {
    let a = o.split(":");
    e += parseInt(a[0], 16), s[e] = t(a[1]);
  }), s;
}
function $f(i) {
  let t = 0;
  return i.split(",").map((e) => {
    let s = e.split("-");
    s.length === 1 ? s[1] = "0" : s[1] === "" && (s[1] = "1");
    let o = t + parseInt(s[0], 16);
    return t = parseInt(s[1], 16), { l: o, h: t };
  });
}
$f("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((i) => parseInt(i, 16)), Wc("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Wc("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Wc("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", d2), $f("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function g2(i) {
  i = atob(i);
  const t = [];
  for (let e = 0; e < i.length; e++)
    t.push(i.charCodeAt(e));
  return Ee(t);
}
function vd(i, t) {
  t == null && (t = 1);
  const e = [], s = e.forEach, o = function(a, h) {
    s.call(a, function(p) {
      h > 0 && Array.isArray(p) ? o(p, h - 1) : e.push(p);
    });
  };
  return o(i, t), e;
}
function m2(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const s = i[e];
    t[s[0]] = s[1];
  }
  return t;
}
function v2(i) {
  let t = 0;
  function e() {
    return i[t++] << 8 | i[t++];
  }
  let s = e(), o = 1, a = [0, 1];
  for (let et = 1; et < s; et++)
    a.push(o += e());
  let h = e(), p = t;
  t += h;
  let v = 0, y = 0;
  function P() {
    return v == 0 && (y = y << 8 | i[t++], v = 8), y >> --v & 1;
  }
  const S = 31, O = Math.pow(2, S), F = O >>> 1, q = F >> 1, K = O - 1;
  let H = 0;
  for (let et = 0; et < S; et++)
    H = H << 1 | P();
  let Q = [], ht = 0, ut = O;
  for (; ; ) {
    let et = Math.floor(((H - ht + 1) * o - 1) / ut), ct = 0, st = s;
    for (; st - ct > 1; ) {
      let Fe = ct + st >>> 1;
      et < a[Fe] ? st = Fe : ct = Fe;
    }
    if (ct == 0)
      break;
    Q.push(ct);
    let gt = ht + Math.floor(ut * a[ct] / o), kt = ht + Math.floor(ut * a[ct + 1] / o) - 1;
    for (; !((gt ^ kt) & F); )
      H = H << 1 & K | P(), gt = gt << 1 & K, kt = kt << 1 & K | 1;
    for (; gt & ~kt & q; )
      H = H & F | H << 1 & K >>> 1 | P(), gt = gt << 1 ^ F, kt = (kt ^ F) << 1 | F | 1;
    ht = gt, ut = 1 + kt - gt;
  }
  let Y = s - 4;
  return Q.map((et) => {
    switch (et - Y) {
      case 3:
        return Y + 65792 + (i[p++] << 16 | i[p++] << 8 | i[p++]);
      case 2:
        return Y + 256 + (i[p++] << 8 | i[p++]);
      case 1:
        return Y + i[p++];
      default:
        return et - 1;
    }
  });
}
function y2(i) {
  let t = 0;
  return () => i[t++];
}
function w2(i) {
  return y2(v2(i));
}
function b2(i) {
  return i & 1 ? ~i >> 1 : i >> 1;
}
function _2(i, t) {
  let e = Array(i);
  for (let s = 0; s < i; s++)
    e[s] = 1 + t();
  return e;
}
function jf(i, t) {
  let e = Array(i);
  for (let s = 0, o = -1; s < i; s++)
    e[s] = o += 1 + t();
  return e;
}
function A2(i, t) {
  let e = Array(i);
  for (let s = 0, o = 0; s < i; s++)
    e[s] = o += b2(t());
  return e;
}
function Ea(i, t) {
  let e = jf(i(), i), s = i(), o = jf(s, i), a = _2(s, i);
  for (let h = 0; h < s; h++)
    for (let p = 0; p < a[h]; p++)
      e.push(o[h] + p);
  return t ? e.map((h) => t[h]) : e;
}
function E2(i) {
  let t = [];
  for (; ; ) {
    let e = i();
    if (e == 0)
      break;
    t.push(S2(e, i));
  }
  for (; ; ) {
    let e = i() - 1;
    if (e < 0)
      break;
    t.push(P2(e, i));
  }
  return m2(vd(t));
}
function I2(i) {
  let t = [];
  for (; ; ) {
    let e = i();
    if (e == 0)
      break;
    t.push(e);
  }
  return t;
}
function yd(i, t, e) {
  let s = Array(i).fill(void 0).map(() => []);
  for (let o = 0; o < t; o++)
    A2(i, e).forEach((a, h) => s[h].push(a));
  return s;
}
function S2(i, t) {
  let e = 1 + t(), s = t(), o = I2(t), a = yd(o.length, 1 + i, t);
  return vd(a.map((h, p) => {
    const v = h[0], y = h.slice(1);
    return Array(o[p]).fill(void 0).map((P, S) => {
      let O = S * s;
      return [v + S * e, y.map((F) => F + O)];
    });
  }));
}
function P2(i, t) {
  let e = 1 + t();
  return yd(e, 1 + i, t).map((s) => [s[0], s.slice(1)]);
}
function M2(i) {
  let t = Ea(i).sort((s, o) => s - o);
  return e();
  function e() {
    let s = [];
    for (; ; ) {
      let y = Ea(i, t);
      if (y.length == 0)
        break;
      s.push({ set: new Set(y), node: e() });
    }
    s.sort((y, P) => P.set.size - y.set.size);
    let o = i(), a = o % 3;
    o = o / 3 | 0;
    let h = !!(o & 1);
    o >>= 1;
    let p = o == 1, v = o == 2;
    return { branches: s, valid: a, fe0f: h, save: p, check: v };
  }
}
function C2() {
  return w2(g2("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
const na = C2();
new Set(Ea(na)), new Set(Ea(na)), E2(na), M2(na);
const x2 = new Uint8Array(32);
x2.fill(0);
const N2 = `Ethereum Signed Message:
`;
function wd(i) {
  return typeof i == "string" && (i = Yc(i)), Bh(i2([Yc(N2), Yc(String(i.length)), i]));
}
const R2 = "address/5.7.0", Zn = new ze(R2);
function zf(i) {
  wr(i, 20) || Zn.throwArgumentError("invalid address", "address", i), i = i.toLowerCase();
  const t = i.substring(2).split(""), e = new Uint8Array(40);
  for (let o = 0; o < 40; o++)
    e[o] = t[o].charCodeAt(0);
  const s = Ee(Bh(e));
  for (let o = 0; o < 40; o += 2)
    s[o >> 1] >> 4 >= 8 && (t[o] = t[o].toUpperCase()), (s[o >> 1] & 15) >= 8 && (t[o + 1] = t[o + 1].toUpperCase());
  return "0x" + t.join("");
}
const O2 = 9007199254740991;
function T2(i) {
  return Math.log10 ? Math.log10(i) : Math.log(i) / Math.LN10;
}
const $h = {};
for (let i = 0; i < 10; i++)
  $h[String(i)] = String(i);
for (let i = 0; i < 26; i++)
  $h[String.fromCharCode(65 + i)] = String(10 + i);
const Lf = Math.floor(T2(O2));
function F2(i) {
  i = i.toUpperCase(), i = i.substring(4) + i.substring(0, 2) + "00";
  let t = i.split("").map((s) => $h[s]).join("");
  for (; t.length >= Lf; ) {
    let s = t.substring(0, Lf);
    t = parseInt(s, 10) % 97 + t.substring(s.length);
  }
  let e = String(98 - parseInt(t, 10) % 97);
  for (; e.length < 2; )
    e = "0" + e;
  return e;
}
function D2(i) {
  let t = null;
  if (typeof i != "string" && Zn.throwArgumentError("invalid address", "address", i), i.match(/^(0x)?[0-9a-fA-F]{40}$/))
    i.substring(0, 2) !== "0x" && (i = "0x" + i), t = zf(i), i.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== i && Zn.throwArgumentError("bad address checksum", "address", i);
  else if (i.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (i.substring(2, 4) !== F2(i) && Zn.throwArgumentError("bad icap checksum", "address", i), t = u2(i.substring(4)); t.length < 40; )
      t = "0" + t;
    t = zf("0x" + t);
  } else
    Zn.throwArgumentError("invalid address", "address", i);
  return t;
}
function Kn(i, t, e) {
  Object.defineProperty(i, t, { enumerable: !0, value: e, writable: !1 });
}
const q2 = new Uint8Array(32);
q2.fill(0), Ze.from(-1);
const k2 = Ze.from(0), B2 = Ze.from(1);
Ze.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), _i(B2.toHexString(), 32), _i(k2.toHexString(), 32);
var mi = {}, Mt = {}, mo = bd;
function bd(i, t) {
  if (!i)
    throw new Error(t || "Assertion failed");
}
bd.equal = function(i, t, e) {
  if (i != t)
    throw new Error(e || "Assertion failed: " + i + " != " + t);
};
var bh = { exports: {} };
typeof Object.create == "function" ? bh.exports = function(i, t) {
  t && (i.super_ = t, i.prototype = Object.create(t.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }));
} : bh.exports = function(i, t) {
  if (t) {
    i.super_ = t;
    var e = function() {
    };
    e.prototype = t.prototype, i.prototype = new e(), i.prototype.constructor = i;
  }
};
var U2 = mo, $2 = bh.exports;
Mt.inherits = $2;
function j2(i, t) {
  return (i.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= i.length ? !1 : (i.charCodeAt(t + 1) & 64512) === 56320;
}
function z2(i, t) {
  if (Array.isArray(i))
    return i.slice();
  if (!i)
    return [];
  var e = [];
  if (typeof i == "string")
    if (t) {
      if (t === "hex")
        for (i = i.replace(/[^a-z0-9]+/ig, ""), i.length % 2 !== 0 && (i = "0" + i), o = 0; o < i.length; o += 2)
          e.push(parseInt(i[o] + i[o + 1], 16));
    } else
      for (var s = 0, o = 0; o < i.length; o++) {
        var a = i.charCodeAt(o);
        a < 128 ? e[s++] = a : a < 2048 ? (e[s++] = a >> 6 | 192, e[s++] = a & 63 | 128) : j2(i, o) ? (a = 65536 + ((a & 1023) << 10) + (i.charCodeAt(++o) & 1023), e[s++] = a >> 18 | 240, e[s++] = a >> 12 & 63 | 128, e[s++] = a >> 6 & 63 | 128, e[s++] = a & 63 | 128) : (e[s++] = a >> 12 | 224, e[s++] = a >> 6 & 63 | 128, e[s++] = a & 63 | 128);
      }
  else
    for (o = 0; o < i.length; o++)
      e[o] = i[o] | 0;
  return e;
}
Mt.toArray = z2;
function L2(i) {
  for (var t = "", e = 0; e < i.length; e++)
    t += Ad(i[e].toString(16));
  return t;
}
Mt.toHex = L2;
function _d(i) {
  var t = i >>> 24 | i >>> 8 & 65280 | i << 8 & 16711680 | (i & 255) << 24;
  return t >>> 0;
}
Mt.htonl = _d;
function K2(i, t) {
  for (var e = "", s = 0; s < i.length; s++) {
    var o = i[s];
    t === "little" && (o = _d(o)), e += Ed(o.toString(16));
  }
  return e;
}
Mt.toHex32 = K2;
function Ad(i) {
  return i.length === 1 ? "0" + i : i;
}
Mt.zero2 = Ad;
function Ed(i) {
  return i.length === 7 ? "0" + i : i.length === 6 ? "00" + i : i.length === 5 ? "000" + i : i.length === 4 ? "0000" + i : i.length === 3 ? "00000" + i : i.length === 2 ? "000000" + i : i.length === 1 ? "0000000" + i : i;
}
Mt.zero8 = Ed;
function H2(i, t, e, s) {
  var o = e - t;
  U2(o % 4 === 0);
  for (var a = new Array(o / 4), h = 0, p = t; h < a.length; h++, p += 4) {
    var v;
    s === "big" ? v = i[p] << 24 | i[p + 1] << 16 | i[p + 2] << 8 | i[p + 3] : v = i[p + 3] << 24 | i[p + 2] << 16 | i[p + 1] << 8 | i[p], a[h] = v >>> 0;
  }
  return a;
}
Mt.join32 = H2;
function V2(i, t) {
  for (var e = new Array(i.length * 4), s = 0, o = 0; s < i.length; s++, o += 4) {
    var a = i[s];
    t === "big" ? (e[o] = a >>> 24, e[o + 1] = a >>> 16 & 255, e[o + 2] = a >>> 8 & 255, e[o + 3] = a & 255) : (e[o + 3] = a >>> 24, e[o + 2] = a >>> 16 & 255, e[o + 1] = a >>> 8 & 255, e[o] = a & 255);
  }
  return e;
}
Mt.split32 = V2;
function Q2(i, t) {
  return i >>> t | i << 32 - t;
}
Mt.rotr32 = Q2;
function G2(i, t) {
  return i << t | i >>> 32 - t;
}
Mt.rotl32 = G2;
function J2(i, t) {
  return i + t >>> 0;
}
Mt.sum32 = J2;
function Y2(i, t, e) {
  return i + t + e >>> 0;
}
Mt.sum32_3 = Y2;
function W2(i, t, e, s) {
  return i + t + e + s >>> 0;
}
Mt.sum32_4 = W2;
function X2(i, t, e, s, o) {
  return i + t + e + s + o >>> 0;
}
Mt.sum32_5 = X2;
function Z2(i, t, e, s) {
  var o = i[t], a = i[t + 1], h = s + a >>> 0, p = (h < s ? 1 : 0) + e + o;
  i[t] = p >>> 0, i[t + 1] = h;
}
Mt.sum64 = Z2;
function t_(i, t, e, s) {
  var o = t + s >>> 0, a = (o < t ? 1 : 0) + i + e;
  return a >>> 0;
}
Mt.sum64_hi = t_;
function e_(i, t, e, s) {
  var o = t + s;
  return o >>> 0;
}
Mt.sum64_lo = e_;
function r_(i, t, e, s, o, a, h, p) {
  var v = 0, y = t;
  y = y + s >>> 0, v += y < t ? 1 : 0, y = y + a >>> 0, v += y < a ? 1 : 0, y = y + p >>> 0, v += y < p ? 1 : 0;
  var P = i + e + o + h + v;
  return P >>> 0;
}
Mt.sum64_4_hi = r_;
function i_(i, t, e, s, o, a, h, p) {
  var v = t + s + a + p;
  return v >>> 0;
}
Mt.sum64_4_lo = i_;
function s_(i, t, e, s, o, a, h, p, v, y) {
  var P = 0, S = t;
  S = S + s >>> 0, P += S < t ? 1 : 0, S = S + a >>> 0, P += S < a ? 1 : 0, S = S + p >>> 0, P += S < p ? 1 : 0, S = S + y >>> 0, P += S < y ? 1 : 0;
  var O = i + e + o + h + v + P;
  return O >>> 0;
}
Mt.sum64_5_hi = s_;
function n_(i, t, e, s, o, a, h, p, v, y) {
  var P = t + s + a + p + y;
  return P >>> 0;
}
Mt.sum64_5_lo = n_;
function o_(i, t, e) {
  var s = t << 32 - e | i >>> e;
  return s >>> 0;
}
Mt.rotr64_hi = o_;
function a_(i, t, e) {
  var s = i << 32 - e | t >>> e;
  return s >>> 0;
}
Mt.rotr64_lo = a_;
function c_(i, t, e) {
  return i >>> e;
}
Mt.shr64_hi = c_;
function h_(i, t, e) {
  var s = i << 32 - e | t >>> e;
  return s >>> 0;
}
Mt.shr64_lo = h_;
var mn = {}, Kf = Mt, u_ = mo;
function oa() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
mn.BlockHash = oa, oa.prototype.update = function(i, t) {
  if (i = Kf.toArray(i, t), this.pending ? this.pending = this.pending.concat(i) : this.pending = i, this.pendingTotal += i.length, this.pending.length >= this._delta8) {
    i = this.pending;
    var e = i.length % this._delta8;
    this.pending = i.slice(i.length - e, i.length), this.pending.length === 0 && (this.pending = null), i = Kf.join32(i, 0, i.length - e, this.endian);
    for (var s = 0; s < i.length; s += this._delta32)
      this._update(i, s, s + this._delta32);
  }
  return this;
}, oa.prototype.digest = function(i) {
  return this.update(this._pad()), u_(this.pending === null), this._digest(i);
}, oa.prototype._pad = function() {
  var i = this.pendingTotal, t = this._delta8, e = t - (i + this.padLength) % t, s = new Array(e + this.padLength);
  s[0] = 128;
  for (var o = 1; o < e; o++)
    s[o] = 0;
  if (i <<= 3, this.endian === "big") {
    for (var a = 8; a < this.padLength; a++)
      s[o++] = 0;
    s[o++] = 0, s[o++] = 0, s[o++] = 0, s[o++] = 0, s[o++] = i >>> 24 & 255, s[o++] = i >>> 16 & 255, s[o++] = i >>> 8 & 255, s[o++] = i & 255;
  } else
    for (s[o++] = i & 255, s[o++] = i >>> 8 & 255, s[o++] = i >>> 16 & 255, s[o++] = i >>> 24 & 255, s[o++] = 0, s[o++] = 0, s[o++] = 0, s[o++] = 0, a = 8; a < this.padLength; a++)
      s[o++] = 0;
  return s;
};
var sn = {}, Ci = {}, l_ = Mt, Ai = l_.rotr32;
function f_(i, t, e, s) {
  if (i === 0)
    return Id(t, e, s);
  if (i === 1 || i === 3)
    return Pd(t, e, s);
  if (i === 2)
    return Sd(t, e, s);
}
Ci.ft_1 = f_;
function Id(i, t, e) {
  return i & t ^ ~i & e;
}
Ci.ch32 = Id;
function Sd(i, t, e) {
  return i & t ^ i & e ^ t & e;
}
Ci.maj32 = Sd;
function Pd(i, t, e) {
  return i ^ t ^ e;
}
Ci.p32 = Pd;
function p_(i) {
  return Ai(i, 2) ^ Ai(i, 13) ^ Ai(i, 22);
}
Ci.s0_256 = p_;
function d_(i) {
  return Ai(i, 6) ^ Ai(i, 11) ^ Ai(i, 25);
}
Ci.s1_256 = d_;
function g_(i) {
  return Ai(i, 7) ^ Ai(i, 18) ^ i >>> 3;
}
Ci.g0_256 = g_;
function m_(i) {
  return Ai(i, 17) ^ Ai(i, 19) ^ i >>> 10;
}
Ci.g1_256 = m_;
var fn = Mt, v_ = mn, y_ = Ci, Xc = fn.rotl32, Hn = fn.sum32, w_ = fn.sum32_5, b_ = y_.ft_1, Md = v_.BlockHash, __ = [1518500249, 1859775393, 2400959708, 3395469782];
function wi() {
  if (!(this instanceof wi))
    return new wi();
  Md.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
fn.inherits(wi, Md);
var A_ = wi;
wi.blockSize = 512, wi.outSize = 160, wi.hmacStrength = 80, wi.padLength = 64, wi.prototype._update = function(i, t) {
  for (var e = this.W, s = 0; s < 16; s++)
    e[s] = i[t + s];
  for (; s < e.length; s++)
    e[s] = Xc(e[s - 3] ^ e[s - 8] ^ e[s - 14] ^ e[s - 16], 1);
  var o = this.h[0], a = this.h[1], h = this.h[2], p = this.h[3], v = this.h[4];
  for (s = 0; s < e.length; s++) {
    var y = ~~(s / 20), P = w_(Xc(o, 5), b_(y, a, h, p), v, e[s], __[y]);
    v = p, p = h, h = Xc(a, 30), a = o, o = P;
  }
  this.h[0] = Hn(this.h[0], o), this.h[1] = Hn(this.h[1], a), this.h[2] = Hn(this.h[2], h), this.h[3] = Hn(this.h[3], p), this.h[4] = Hn(this.h[4], v);
}, wi.prototype._digest = function(i) {
  return i === "hex" ? fn.toHex32(this.h, "big") : fn.split32(this.h, "big");
};
var pn = Mt, E_ = mn, vn = Ci, I_ = mo, Hr = pn.sum32, S_ = pn.sum32_4, P_ = pn.sum32_5, M_ = vn.ch32, C_ = vn.maj32, x_ = vn.s0_256, N_ = vn.s1_256, R_ = vn.g0_256, O_ = vn.g1_256, Cd = E_.BlockHash, T_ = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function bi() {
  if (!(this instanceof bi))
    return new bi();
  Cd.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = T_, this.W = new Array(64);
}
pn.inherits(bi, Cd);
var xd = bi;
bi.blockSize = 512, bi.outSize = 256, bi.hmacStrength = 192, bi.padLength = 64, bi.prototype._update = function(i, t) {
  for (var e = this.W, s = 0; s < 16; s++)
    e[s] = i[t + s];
  for (; s < e.length; s++)
    e[s] = S_(O_(e[s - 2]), e[s - 7], R_(e[s - 15]), e[s - 16]);
  var o = this.h[0], a = this.h[1], h = this.h[2], p = this.h[3], v = this.h[4], y = this.h[5], P = this.h[6], S = this.h[7];
  for (I_(this.k.length === e.length), s = 0; s < e.length; s++) {
    var O = P_(S, N_(v), M_(v, y, P), this.k[s], e[s]), F = Hr(x_(o), C_(o, a, h));
    S = P, P = y, y = v, v = Hr(p, O), p = h, h = a, a = o, o = Hr(O, F);
  }
  this.h[0] = Hr(this.h[0], o), this.h[1] = Hr(this.h[1], a), this.h[2] = Hr(this.h[2], h), this.h[3] = Hr(this.h[3], p), this.h[4] = Hr(this.h[4], v), this.h[5] = Hr(this.h[5], y), this.h[6] = Hr(this.h[6], P), this.h[7] = Hr(this.h[7], S);
}, bi.prototype._digest = function(i) {
  return i === "hex" ? pn.toHex32(this.h, "big") : pn.split32(this.h, "big");
};
var _h = Mt, Nd = xd;
function Yi() {
  if (!(this instanceof Yi))
    return new Yi();
  Nd.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
_h.inherits(Yi, Nd);
var F_ = Yi;
Yi.blockSize = 512, Yi.outSize = 224, Yi.hmacStrength = 192, Yi.padLength = 64, Yi.prototype._digest = function(i) {
  return i === "hex" ? _h.toHex32(this.h.slice(0, 7), "big") : _h.split32(this.h.slice(0, 7), "big");
};
var ur = Mt, D_ = mn, q_ = mo, Ei = ur.rotr64_hi, Ii = ur.rotr64_lo, Rd = ur.shr64_hi, Od = ur.shr64_lo, us = ur.sum64, Zc = ur.sum64_hi, th = ur.sum64_lo, k_ = ur.sum64_4_hi, B_ = ur.sum64_4_lo, U_ = ur.sum64_5_hi, $_ = ur.sum64_5_lo, Td = D_.BlockHash, j_ = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function Yr() {
  if (!(this instanceof Yr))
    return new Yr();
  Td.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = j_, this.W = new Array(160);
}
ur.inherits(Yr, Td);
var Fd = Yr;
Yr.blockSize = 1024, Yr.outSize = 512, Yr.hmacStrength = 192, Yr.padLength = 128, Yr.prototype._prepareBlock = function(i, t) {
  for (var e = this.W, s = 0; s < 32; s++)
    e[s] = i[t + s];
  for (; s < e.length; s += 2) {
    var o = X_(e[s - 4], e[s - 3]), a = Z_(e[s - 4], e[s - 3]), h = e[s - 14], p = e[s - 13], v = Y_(e[s - 30], e[s - 29]), y = W_(e[s - 30], e[s - 29]), P = e[s - 32], S = e[s - 31];
    e[s] = k_(o, a, h, p, v, y, P, S), e[s + 1] = B_(o, a, h, p, v, y, P, S);
  }
}, Yr.prototype._update = function(i, t) {
  this._prepareBlock(i, t);
  var e = this.W, s = this.h[0], o = this.h[1], a = this.h[2], h = this.h[3], p = this.h[4], v = this.h[5], y = this.h[6], P = this.h[7], S = this.h[8], O = this.h[9], F = this.h[10], q = this.h[11], K = this.h[12], H = this.h[13], Q = this.h[14], ht = this.h[15];
  q_(this.k.length === e.length);
  for (var ut = 0; ut < e.length; ut += 2) {
    var Y = Q, et = ht, ct = G_(S, O), st = J_(S, O), gt = z_(S, O, F, q, K), kt = L_(S, O, F, q, K, H), Fe = this.k[ut], Ct = this.k[ut + 1], Ce = e[ut], u = e[ut + 1], d = U_(Y, et, ct, st, gt, kt, Fe, Ct, Ce, u), b = $_(Y, et, ct, st, gt, kt, Fe, Ct, Ce, u);
    Y = V_(s, o), et = Q_(s, o), ct = K_(s, o, a, h, p), st = H_(s, o, a, h, p, v);
    var E = Zc(Y, et, ct, st), M = th(Y, et, ct, st);
    Q = K, ht = H, K = F, H = q, F = S, q = O, S = Zc(y, P, d, b), O = th(P, P, d, b), y = p, P = v, p = a, v = h, a = s, h = o, s = Zc(d, b, E, M), o = th(d, b, E, M);
  }
  us(this.h, 0, s, o), us(this.h, 2, a, h), us(this.h, 4, p, v), us(this.h, 6, y, P), us(this.h, 8, S, O), us(this.h, 10, F, q), us(this.h, 12, K, H), us(this.h, 14, Q, ht);
}, Yr.prototype._digest = function(i) {
  return i === "hex" ? ur.toHex32(this.h, "big") : ur.split32(this.h, "big");
};
function z_(i, t, e, s, o) {
  var a = i & e ^ ~i & o;
  return a < 0 && (a += 4294967296), a;
}
function L_(i, t, e, s, o, a) {
  var h = t & s ^ ~t & a;
  return h < 0 && (h += 4294967296), h;
}
function K_(i, t, e, s, o) {
  var a = i & e ^ i & o ^ e & o;
  return a < 0 && (a += 4294967296), a;
}
function H_(i, t, e, s, o, a) {
  var h = t & s ^ t & a ^ s & a;
  return h < 0 && (h += 4294967296), h;
}
function V_(i, t) {
  var e = Ei(i, t, 28), s = Ei(t, i, 2), o = Ei(t, i, 7), a = e ^ s ^ o;
  return a < 0 && (a += 4294967296), a;
}
function Q_(i, t) {
  var e = Ii(i, t, 28), s = Ii(t, i, 2), o = Ii(t, i, 7), a = e ^ s ^ o;
  return a < 0 && (a += 4294967296), a;
}
function G_(i, t) {
  var e = Ei(i, t, 14), s = Ei(i, t, 18), o = Ei(t, i, 9), a = e ^ s ^ o;
  return a < 0 && (a += 4294967296), a;
}
function J_(i, t) {
  var e = Ii(i, t, 14), s = Ii(i, t, 18), o = Ii(t, i, 9), a = e ^ s ^ o;
  return a < 0 && (a += 4294967296), a;
}
function Y_(i, t) {
  var e = Ei(i, t, 1), s = Ei(i, t, 8), o = Rd(i, t, 7), a = e ^ s ^ o;
  return a < 0 && (a += 4294967296), a;
}
function W_(i, t) {
  var e = Ii(i, t, 1), s = Ii(i, t, 8), o = Od(i, t, 7), a = e ^ s ^ o;
  return a < 0 && (a += 4294967296), a;
}
function X_(i, t) {
  var e = Ei(i, t, 19), s = Ei(t, i, 29), o = Rd(i, t, 6), a = e ^ s ^ o;
  return a < 0 && (a += 4294967296), a;
}
function Z_(i, t) {
  var e = Ii(i, t, 19), s = Ii(t, i, 29), o = Od(i, t, 6), a = e ^ s ^ o;
  return a < 0 && (a += 4294967296), a;
}
var Ah = Mt, Dd = Fd;
function Wi() {
  if (!(this instanceof Wi))
    return new Wi();
  Dd.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
Ah.inherits(Wi, Dd);
var t3 = Wi;
Wi.blockSize = 1024, Wi.outSize = 384, Wi.hmacStrength = 192, Wi.padLength = 128, Wi.prototype._digest = function(i) {
  return i === "hex" ? Ah.toHex32(this.h.slice(0, 12), "big") : Ah.split32(this.h.slice(0, 12), "big");
}, sn.sha1 = A_, sn.sha224 = F_, sn.sha256 = xd, sn.sha384 = t3, sn.sha512 = Fd;
var qd = {}, Rs = Mt, e3 = mn, aa = Rs.rotl32, Hf = Rs.sum32, Vn = Rs.sum32_3, Vf = Rs.sum32_4, kd = e3.BlockHash;
function vi() {
  if (!(this instanceof vi))
    return new vi();
  kd.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Rs.inherits(vi, kd), qd.ripemd160 = vi, vi.blockSize = 512, vi.outSize = 160, vi.hmacStrength = 192, vi.padLength = 64, vi.prototype._update = function(i, t) {
  for (var e = this.h[0], s = this.h[1], o = this.h[2], a = this.h[3], h = this.h[4], p = e, v = s, y = o, P = a, S = h, O = 0; O < 80; O++) {
    var F = Hf(aa(Vf(e, Qf(O, s, o, a), i[s3[O] + t], r3(O)), o3[O]), h);
    e = h, h = a, a = aa(o, 10), o = s, s = F, F = Hf(aa(Vf(p, Qf(79 - O, v, y, P), i[n3[O] + t], i3(O)), a3[O]), S), p = S, S = P, P = aa(y, 10), y = v, v = F;
  }
  F = Vn(this.h[1], o, P), this.h[1] = Vn(this.h[2], a, S), this.h[2] = Vn(this.h[3], h, p), this.h[3] = Vn(this.h[4], e, v), this.h[4] = Vn(this.h[0], s, y), this.h[0] = F;
}, vi.prototype._digest = function(i) {
  return i === "hex" ? Rs.toHex32(this.h, "little") : Rs.split32(this.h, "little");
};
function Qf(i, t, e, s) {
  return i <= 15 ? t ^ e ^ s : i <= 31 ? t & e | ~t & s : i <= 47 ? (t | ~e) ^ s : i <= 63 ? t & s | e & ~s : t ^ (e | ~s);
}
function r3(i) {
  return i <= 15 ? 0 : i <= 31 ? 1518500249 : i <= 47 ? 1859775393 : i <= 63 ? 2400959708 : 2840853838;
}
function i3(i) {
  return i <= 15 ? 1352829926 : i <= 31 ? 1548603684 : i <= 47 ? 1836072691 : i <= 63 ? 2053994217 : 0;
}
var s3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], n3 = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], o3 = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], a3 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], c3 = Mt, h3 = mo;
function ln(i, t, e) {
  if (!(this instanceof ln))
    return new ln(i, t, e);
  this.Hash = i, this.blockSize = i.blockSize / 8, this.outSize = i.outSize / 8, this.inner = null, this.outer = null, this._init(c3.toArray(t, e));
}
var u3 = ln;
ln.prototype._init = function(i) {
  i.length > this.blockSize && (i = new this.Hash().update(i).digest()), h3(i.length <= this.blockSize);
  for (var t = i.length; t < this.blockSize; t++)
    i.push(0);
  for (t = 0; t < i.length; t++)
    i[t] ^= 54;
  for (this.inner = new this.Hash().update(i), t = 0; t < i.length; t++)
    i[t] ^= 106;
  this.outer = new this.Hash().update(i);
}, ln.prototype.update = function(i, t) {
  return this.inner.update(i, t), this;
}, ln.prototype.digest = function(i) {
  return this.outer.update(this.inner.digest()), this.outer.digest(i);
}, function(i) {
  var t = i;
  t.utils = Mt, t.common = mn, t.sha = sn, t.ripemd = qd, t.hmac = u3, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
}(mi);
function yn(i, t, e) {
  return e = { path: t, exports: {}, require: function(s, o) {
    return l3(s, o ?? e.path);
  } }, i(e, e.exports), e.exports;
}
function l3() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var jh = Bd;
function Bd(i, t) {
  if (!i)
    throw new Error(t || "Assertion failed");
}
Bd.equal = function(i, t, e) {
  if (i != t)
    throw new Error(e || "Assertion failed: " + i + " != " + t);
};
var Xr = yn(function(i, t) {
  var e = t;
  function s(h, p) {
    if (Array.isArray(h))
      return h.slice();
    if (!h)
      return [];
    var v = [];
    if (typeof h != "string") {
      for (var y = 0; y < h.length; y++)
        v[y] = h[y] | 0;
      return v;
    }
    if (p === "hex") {
      h = h.replace(/[^a-z0-9]+/ig, ""), h.length % 2 !== 0 && (h = "0" + h);
      for (var y = 0; y < h.length; y += 2)
        v.push(parseInt(h[y] + h[y + 1], 16));
    } else
      for (var y = 0; y < h.length; y++) {
        var P = h.charCodeAt(y), S = P >> 8, O = P & 255;
        S ? v.push(S, O) : v.push(O);
      }
    return v;
  }
  e.toArray = s;
  function o(h) {
    return h.length === 1 ? "0" + h : h;
  }
  e.zero2 = o;
  function a(h) {
    for (var p = "", v = 0; v < h.length; v++)
      p += o(h[v].toString(16));
    return p;
  }
  e.toHex = a, e.encode = function(h, p) {
    return p === "hex" ? a(h) : h;
  };
}), br = yn(function(i, t) {
  var e = t;
  e.assert = jh, e.toArray = Xr.toArray, e.zero2 = Xr.zero2, e.toHex = Xr.toHex, e.encode = Xr.encode;
  function s(v, y, P) {
    var S = new Array(Math.max(v.bitLength(), P) + 1);
    S.fill(0);
    for (var O = 1 << y + 1, F = v.clone(), q = 0; q < S.length; q++) {
      var K, H = F.andln(O - 1);
      F.isOdd() ? (H > (O >> 1) - 1 ? K = (O >> 1) - H : K = H, F.isubn(K)) : K = 0, S[q] = K, F.iushrn(1);
    }
    return S;
  }
  e.getNAF = s;
  function o(v, y) {
    var P = [[], []];
    v = v.clone(), y = y.clone();
    for (var S = 0, O = 0, F; v.cmpn(-S) > 0 || y.cmpn(-O) > 0; ) {
      var q = v.andln(3) + S & 3, K = y.andln(3) + O & 3;
      q === 3 && (q = -1), K === 3 && (K = -1);
      var H;
      q & 1 ? (F = v.andln(7) + S & 7, (F === 3 || F === 5) && K === 2 ? H = -q : H = q) : H = 0, P[0].push(H);
      var Q;
      K & 1 ? (F = y.andln(7) + O & 7, (F === 3 || F === 5) && q === 2 ? Q = -K : Q = K) : Q = 0, P[1].push(Q), 2 * S === H + 1 && (S = 1 - S), 2 * O === Q + 1 && (O = 1 - O), v.iushrn(1), y.iushrn(1);
    }
    return P;
  }
  e.getJSF = o;
  function a(v, y, P) {
    var S = "_" + y;
    v.prototype[y] = function() {
      return this[S] !== void 0 ? this[S] : this[S] = P.call(this);
    };
  }
  e.cachedProperty = a;
  function h(v) {
    return typeof v == "string" ? e.toArray(v, "hex") : v;
  }
  e.parseBytes = h;
  function p(v) {
    return new wt(v, "hex", "le");
  }
  e.intFromLE = p;
}), ca = br.getNAF, f3 = br.getJSF, Ia = br.assert;
function ps(i, t) {
  this.type = i, this.p = new wt(t.p, 16), this.red = t.prime ? wt.red(t.prime) : wt.mont(this.p), this.zero = new wt(0).toRed(this.red), this.one = new wt(1).toRed(this.red), this.two = new wt(2).toRed(this.red), this.n = t.n && new wt(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var e = this.n && this.p.div(this.n);
  !e || e.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var Fs = ps;
ps.prototype.point = function() {
  throw new Error("Not implemented");
}, ps.prototype.validate = function() {
  throw new Error("Not implemented");
}, ps.prototype._fixedNafMul = function(i, t) {
  Ia(i.precomputed);
  var e = i._getDoubles(), s = ca(t, 1, this._bitLength), o = (1 << e.step + 1) - (e.step % 2 === 0 ? 2 : 1);
  o /= 3;
  var a = [], h, p;
  for (h = 0; h < s.length; h += e.step) {
    p = 0;
    for (var v = h + e.step - 1; v >= h; v--)
      p = (p << 1) + s[v];
    a.push(p);
  }
  for (var y = this.jpoint(null, null, null), P = this.jpoint(null, null, null), S = o; S > 0; S--) {
    for (h = 0; h < a.length; h++)
      p = a[h], p === S ? P = P.mixedAdd(e.points[h]) : p === -S && (P = P.mixedAdd(e.points[h].neg()));
    y = y.add(P);
  }
  return y.toP();
}, ps.prototype._wnafMul = function(i, t) {
  var e = 4, s = i._getNAFPoints(e);
  e = s.wnd;
  for (var o = s.points, a = ca(t, e, this._bitLength), h = this.jpoint(null, null, null), p = a.length - 1; p >= 0; p--) {
    for (var v = 0; p >= 0 && a[p] === 0; p--)
      v++;
    if (p >= 0 && v++, h = h.dblp(v), p < 0)
      break;
    var y = a[p];
    Ia(y !== 0), i.type === "affine" ? y > 0 ? h = h.mixedAdd(o[y - 1 >> 1]) : h = h.mixedAdd(o[-y - 1 >> 1].neg()) : y > 0 ? h = h.add(o[y - 1 >> 1]) : h = h.add(o[-y - 1 >> 1].neg());
  }
  return i.type === "affine" ? h.toP() : h;
}, ps.prototype._wnafMulAdd = function(i, t, e, s, o) {
  var a = this._wnafT1, h = this._wnafT2, p = this._wnafT3, v = 0, y, P, S;
  for (y = 0; y < s; y++) {
    S = t[y];
    var O = S._getNAFPoints(i);
    a[y] = O.wnd, h[y] = O.points;
  }
  for (y = s - 1; y >= 1; y -= 2) {
    var F = y - 1, q = y;
    if (a[F] !== 1 || a[q] !== 1) {
      p[F] = ca(e[F], a[F], this._bitLength), p[q] = ca(e[q], a[q], this._bitLength), v = Math.max(p[F].length, v), v = Math.max(p[q].length, v);
      continue;
    }
    var K = [t[F], null, null, t[q]];
    t[F].y.cmp(t[q].y) === 0 ? (K[1] = t[F].add(t[q]), K[2] = t[F].toJ().mixedAdd(t[q].neg())) : t[F].y.cmp(t[q].y.redNeg()) === 0 ? (K[1] = t[F].toJ().mixedAdd(t[q]), K[2] = t[F].add(t[q].neg())) : (K[1] = t[F].toJ().mixedAdd(t[q]), K[2] = t[F].toJ().mixedAdd(t[q].neg()));
    var H = [-3, -1, -5, -7, 0, 7, 5, 1, 3], Q = f3(e[F], e[q]);
    for (v = Math.max(Q[0].length, v), p[F] = new Array(v), p[q] = new Array(v), P = 0; P < v; P++) {
      var ht = Q[0][P] | 0, ut = Q[1][P] | 0;
      p[F][P] = H[(ht + 1) * 3 + (ut + 1)], p[q][P] = 0, h[F] = K;
    }
  }
  var Y = this.jpoint(null, null, null), et = this._wnafT4;
  for (y = v; y >= 0; y--) {
    for (var ct = 0; y >= 0; ) {
      var st = !0;
      for (P = 0; P < s; P++)
        et[P] = p[P][y] | 0, et[P] !== 0 && (st = !1);
      if (!st)
        break;
      ct++, y--;
    }
    if (y >= 0 && ct++, Y = Y.dblp(ct), y < 0)
      break;
    for (P = 0; P < s; P++) {
      var gt = et[P];
      gt !== 0 && (gt > 0 ? S = h[P][gt - 1 >> 1] : gt < 0 && (S = h[P][-gt - 1 >> 1].neg()), S.type === "affine" ? Y = Y.mixedAdd(S) : Y = Y.add(S));
    }
  }
  for (y = 0; y < s; y++)
    h[y] = null;
  return o ? Y : Y.toP();
};
function Rr(i, t) {
  this.curve = i, this.type = t, this.precomputed = null;
}
ps.BasePoint = Rr, Rr.prototype.eq = function() {
  throw new Error("Not implemented");
}, Rr.prototype.validate = function() {
  return this.curve.validate(this);
}, ps.prototype.decodePoint = function(i, t) {
  i = br.toArray(i, t);
  var e = this.p.byteLength();
  if ((i[0] === 4 || i[0] === 6 || i[0] === 7) && i.length - 1 === 2 * e) {
    i[0] === 6 ? Ia(i[i.length - 1] % 2 === 0) : i[0] === 7 && Ia(i[i.length - 1] % 2 === 1);
    var s = this.point(i.slice(1, 1 + e), i.slice(1 + e, 1 + 2 * e));
    return s;
  } else if ((i[0] === 2 || i[0] === 3) && i.length - 1 === e)
    return this.pointFromX(i.slice(1, 1 + e), i[0] === 3);
  throw new Error("Unknown point format");
}, Rr.prototype.encodeCompressed = function(i) {
  return this.encode(i, !0);
}, Rr.prototype._encode = function(i) {
  var t = this.curve.p.byteLength(), e = this.getX().toArray("be", t);
  return i ? [this.getY().isEven() ? 2 : 3].concat(e) : [4].concat(e, this.getY().toArray("be", t));
}, Rr.prototype.encode = function(i, t) {
  return br.encode(this._encode(t), i);
}, Rr.prototype.precompute = function(i) {
  if (this.precomputed)
    return this;
  var t = { doubles: null, naf: null, beta: null };
  return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, i), t.beta = this._getBeta(), this.precomputed = t, this;
}, Rr.prototype._hasDoubles = function(i) {
  if (!this.precomputed)
    return !1;
  var t = this.precomputed.doubles;
  return t ? t.points.length >= Math.ceil((i.bitLength() + 1) / t.step) : !1;
}, Rr.prototype._getDoubles = function(i, t) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var e = [this], s = this, o = 0; o < t; o += i) {
    for (var a = 0; a < i; a++)
      s = s.dbl();
    e.push(s);
  }
  return { step: i, points: e };
}, Rr.prototype._getNAFPoints = function(i) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var t = [this], e = (1 << i) - 1, s = e === 1 ? null : this.dbl(), o = 1; o < e; o++)
    t[o] = t[o - 1].add(s);
  return { wnd: i, points: t };
}, Rr.prototype._getBeta = function() {
  return null;
}, Rr.prototype.dblp = function(i) {
  for (var t = this, e = 0; e < i; e++)
    t = t.dbl();
  return t;
};
var zh = yn(function(i) {
  typeof Object.create == "function" ? i.exports = function(t, e) {
    e && (t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }));
  } : i.exports = function(t, e) {
    if (e) {
      t.super_ = e;
      var s = function() {
      };
      s.prototype = e.prototype, t.prototype = new s(), t.prototype.constructor = t;
    }
  };
}), p3 = br.assert;
function Dr(i) {
  Fs.call(this, "short", i), this.a = new wt(i.a, 16).toRed(this.red), this.b = new wt(i.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(i), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
zh(Dr, Fs);
var d3 = Dr;
Dr.prototype._getEndomorphism = function(i) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var t, e;
    if (i.beta)
      t = new wt(i.beta, 16).toRed(this.red);
    else {
      var s = this._getEndoRoots(this.p);
      t = s[0].cmp(s[1]) < 0 ? s[0] : s[1], t = t.toRed(this.red);
    }
    if (i.lambda)
      e = new wt(i.lambda, 16);
    else {
      var o = this._getEndoRoots(this.n);
      this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) === 0 ? e = o[0] : (e = o[1], p3(this.g.mul(e).x.cmp(this.g.x.redMul(t)) === 0));
    }
    var a;
    return i.basis ? a = i.basis.map(function(h) {
      return { a: new wt(h.a, 16), b: new wt(h.b, 16) };
    }) : a = this._getEndoBasis(e), { beta: t, lambda: e, basis: a };
  }
}, Dr.prototype._getEndoRoots = function(i) {
  var t = i === this.p ? this.red : wt.mont(i), e = new wt(2).toRed(t).redInvm(), s = e.redNeg(), o = new wt(3).toRed(t).redNeg().redSqrt().redMul(e), a = s.redAdd(o).fromRed(), h = s.redSub(o).fromRed();
  return [a, h];
}, Dr.prototype._getEndoBasis = function(i) {
  for (var t = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), e = i, s = this.n.clone(), o = new wt(1), a = new wt(0), h = new wt(0), p = new wt(1), v, y, P, S, O, F, q, K = 0, H, Q; e.cmpn(0) !== 0; ) {
    var ht = s.div(e);
    H = s.sub(ht.mul(e)), Q = h.sub(ht.mul(o));
    var ut = p.sub(ht.mul(a));
    if (!P && H.cmp(t) < 0)
      v = q.neg(), y = o, P = H.neg(), S = Q;
    else if (P && ++K === 2)
      break;
    q = H, s = e, e = H, h = o, o = Q, p = a, a = ut;
  }
  O = H.neg(), F = Q;
  var Y = P.sqr().add(S.sqr()), et = O.sqr().add(F.sqr());
  return et.cmp(Y) >= 0 && (O = v, F = y), P.negative && (P = P.neg(), S = S.neg()), O.negative && (O = O.neg(), F = F.neg()), [{ a: P, b: S }, { a: O, b: F }];
}, Dr.prototype._endoSplit = function(i) {
  var t = this.endo.basis, e = t[0], s = t[1], o = s.b.mul(i).divRound(this.n), a = e.b.neg().mul(i).divRound(this.n), h = o.mul(e.a), p = a.mul(s.a), v = o.mul(e.b), y = a.mul(s.b), P = i.sub(h).sub(p), S = v.add(y).neg();
  return { k1: P, k2: S };
}, Dr.prototype.pointFromX = function(i, t) {
  i = new wt(i, 16), i.red || (i = i.toRed(this.red));
  var e = i.redSqr().redMul(i).redIAdd(i.redMul(this.a)).redIAdd(this.b), s = e.redSqrt();
  if (s.redSqr().redSub(e).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var o = s.fromRed().isOdd();
  return (t && !o || !t && o) && (s = s.redNeg()), this.point(i, s);
}, Dr.prototype.validate = function(i) {
  if (i.inf)
    return !0;
  var t = i.x, e = i.y, s = this.a.redMul(t), o = t.redSqr().redMul(t).redIAdd(s).redIAdd(this.b);
  return e.redSqr().redISub(o).cmpn(0) === 0;
}, Dr.prototype._endoWnafMulAdd = function(i, t, e) {
  for (var s = this._endoWnafT1, o = this._endoWnafT2, a = 0; a < i.length; a++) {
    var h = this._endoSplit(t[a]), p = i[a], v = p._getBeta();
    h.k1.negative && (h.k1.ineg(), p = p.neg(!0)), h.k2.negative && (h.k2.ineg(), v = v.neg(!0)), s[a * 2] = p, s[a * 2 + 1] = v, o[a * 2] = h.k1, o[a * 2 + 1] = h.k2;
  }
  for (var y = this._wnafMulAdd(1, s, o, a * 2, e), P = 0; P < a * 2; P++)
    s[P] = null, o[P] = null;
  return y;
};
function qe(i, t, e, s) {
  Fs.BasePoint.call(this, i, "affine"), t === null && e === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new wt(t, 16), this.y = new wt(e, 16), s && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
zh(qe, Fs.BasePoint), Dr.prototype.point = function(i, t, e) {
  return new qe(this, i, t, e);
}, Dr.prototype.pointFromJSON = function(i, t) {
  return qe.fromJSON(this, i, t);
}, qe.prototype._getBeta = function() {
  if (this.curve.endo) {
    var i = this.precomputed;
    if (i && i.beta)
      return i.beta;
    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (i) {
      var e = this.curve, s = function(o) {
        return e.point(o.x.redMul(e.endo.beta), o.y);
      };
      i.beta = t, t.precomputed = { beta: null, naf: i.naf && { wnd: i.naf.wnd, points: i.naf.points.map(s) }, doubles: i.doubles && { step: i.doubles.step, points: i.doubles.points.map(s) } };
    }
    return t;
  }
}, qe.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, qe.fromJSON = function(i, t, e) {
  typeof t == "string" && (t = JSON.parse(t));
  var s = i.point(t[0], t[1], e);
  if (!t[2])
    return s;
  function o(h) {
    return i.point(h[0], h[1], e);
  }
  var a = t[2];
  return s.precomputed = { beta: null, doubles: a.doubles && { step: a.doubles.step, points: [s].concat(a.doubles.points.map(o)) }, naf: a.naf && { wnd: a.naf.wnd, points: [s].concat(a.naf.points.map(o)) } }, s;
}, qe.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, qe.prototype.isInfinity = function() {
  return this.inf;
}, qe.prototype.add = function(i) {
  if (this.inf)
    return i;
  if (i.inf)
    return this;
  if (this.eq(i))
    return this.dbl();
  if (this.neg().eq(i))
    return this.curve.point(null, null);
  if (this.x.cmp(i.x) === 0)
    return this.curve.point(null, null);
  var t = this.y.redSub(i.y);
  t.cmpn(0) !== 0 && (t = t.redMul(this.x.redSub(i.x).redInvm()));
  var e = t.redSqr().redISub(this.x).redISub(i.x), s = t.redMul(this.x.redSub(e)).redISub(this.y);
  return this.curve.point(e, s);
}, qe.prototype.dbl = function() {
  if (this.inf)
    return this;
  var i = this.y.redAdd(this.y);
  if (i.cmpn(0) === 0)
    return this.curve.point(null, null);
  var t = this.curve.a, e = this.x.redSqr(), s = i.redInvm(), o = e.redAdd(e).redIAdd(e).redIAdd(t).redMul(s), a = o.redSqr().redISub(this.x.redAdd(this.x)), h = o.redMul(this.x.redSub(a)).redISub(this.y);
  return this.curve.point(a, h);
}, qe.prototype.getX = function() {
  return this.x.fromRed();
}, qe.prototype.getY = function() {
  return this.y.fromRed();
}, qe.prototype.mul = function(i) {
  return i = new wt(i, 16), this.isInfinity() ? this : this._hasDoubles(i) ? this.curve._fixedNafMul(this, i) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [i]) : this.curve._wnafMul(this, i);
}, qe.prototype.mulAdd = function(i, t, e) {
  var s = [this, t], o = [i, e];
  return this.curve.endo ? this.curve._endoWnafMulAdd(s, o) : this.curve._wnafMulAdd(1, s, o, 2);
}, qe.prototype.jmulAdd = function(i, t, e) {
  var s = [this, t], o = [i, e];
  return this.curve.endo ? this.curve._endoWnafMulAdd(s, o, !0) : this.curve._wnafMulAdd(1, s, o, 2, !0);
}, qe.prototype.eq = function(i) {
  return this === i || this.inf === i.inf && (this.inf || this.x.cmp(i.x) === 0 && this.y.cmp(i.y) === 0);
}, qe.prototype.neg = function(i) {
  if (this.inf)
    return this;
  var t = this.curve.point(this.x, this.y.redNeg());
  if (i && this.precomputed) {
    var e = this.precomputed, s = function(o) {
      return o.neg();
    };
    t.precomputed = { naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(s) }, doubles: e.doubles && { step: e.doubles.step, points: e.doubles.points.map(s) } };
  }
  return t;
}, qe.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var i = this.curve.jpoint(this.x, this.y, this.curve.one);
  return i;
};
function Ue(i, t, e, s) {
  Fs.BasePoint.call(this, i, "jacobian"), t === null && e === null && s === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new wt(0)) : (this.x = new wt(t, 16), this.y = new wt(e, 16), this.z = new wt(s, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
zh(Ue, Fs.BasePoint), Dr.prototype.jpoint = function(i, t, e) {
  return new Ue(this, i, t, e);
}, Ue.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var i = this.z.redInvm(), t = i.redSqr(), e = this.x.redMul(t), s = this.y.redMul(t).redMul(i);
  return this.curve.point(e, s);
}, Ue.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Ue.prototype.add = function(i) {
  if (this.isInfinity())
    return i;
  if (i.isInfinity())
    return this;
  var t = i.z.redSqr(), e = this.z.redSqr(), s = this.x.redMul(t), o = i.x.redMul(e), a = this.y.redMul(t.redMul(i.z)), h = i.y.redMul(e.redMul(this.z)), p = s.redSub(o), v = a.redSub(h);
  if (p.cmpn(0) === 0)
    return v.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var y = p.redSqr(), P = y.redMul(p), S = s.redMul(y), O = v.redSqr().redIAdd(P).redISub(S).redISub(S), F = v.redMul(S.redISub(O)).redISub(a.redMul(P)), q = this.z.redMul(i.z).redMul(p);
  return this.curve.jpoint(O, F, q);
}, Ue.prototype.mixedAdd = function(i) {
  if (this.isInfinity())
    return i.toJ();
  if (i.isInfinity())
    return this;
  var t = this.z.redSqr(), e = this.x, s = i.x.redMul(t), o = this.y, a = i.y.redMul(t).redMul(this.z), h = e.redSub(s), p = o.redSub(a);
  if (h.cmpn(0) === 0)
    return p.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var v = h.redSqr(), y = v.redMul(h), P = e.redMul(v), S = p.redSqr().redIAdd(y).redISub(P).redISub(P), O = p.redMul(P.redISub(S)).redISub(o.redMul(y)), F = this.z.redMul(h);
  return this.curve.jpoint(S, O, F);
}, Ue.prototype.dblp = function(i) {
  if (i === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!i)
    return this.dbl();
  var t;
  if (this.curve.zeroA || this.curve.threeA) {
    var e = this;
    for (t = 0; t < i; t++)
      e = e.dbl();
    return e;
  }
  var s = this.curve.a, o = this.curve.tinv, a = this.x, h = this.y, p = this.z, v = p.redSqr().redSqr(), y = h.redAdd(h);
  for (t = 0; t < i; t++) {
    var P = a.redSqr(), S = y.redSqr(), O = S.redSqr(), F = P.redAdd(P).redIAdd(P).redIAdd(s.redMul(v)), q = a.redMul(S), K = F.redSqr().redISub(q.redAdd(q)), H = q.redISub(K), Q = F.redMul(H);
    Q = Q.redIAdd(Q).redISub(O);
    var ht = y.redMul(p);
    t + 1 < i && (v = v.redMul(O)), a = K, p = ht, y = Q;
  }
  return this.curve.jpoint(a, y.redMul(o), p);
}, Ue.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Ue.prototype._zeroDbl = function() {
  var i, t, e;
  if (this.zOne) {
    var s = this.x.redSqr(), o = this.y.redSqr(), a = o.redSqr(), h = this.x.redAdd(o).redSqr().redISub(s).redISub(a);
    h = h.redIAdd(h);
    var p = s.redAdd(s).redIAdd(s), v = p.redSqr().redISub(h).redISub(h), y = a.redIAdd(a);
    y = y.redIAdd(y), y = y.redIAdd(y), i = v, t = p.redMul(h.redISub(v)).redISub(y), e = this.y.redAdd(this.y);
  } else {
    var P = this.x.redSqr(), S = this.y.redSqr(), O = S.redSqr(), F = this.x.redAdd(S).redSqr().redISub(P).redISub(O);
    F = F.redIAdd(F);
    var q = P.redAdd(P).redIAdd(P), K = q.redSqr(), H = O.redIAdd(O);
    H = H.redIAdd(H), H = H.redIAdd(H), i = K.redISub(F).redISub(F), t = q.redMul(F.redISub(i)).redISub(H), e = this.y.redMul(this.z), e = e.redIAdd(e);
  }
  return this.curve.jpoint(i, t, e);
}, Ue.prototype._threeDbl = function() {
  var i, t, e;
  if (this.zOne) {
    var s = this.x.redSqr(), o = this.y.redSqr(), a = o.redSqr(), h = this.x.redAdd(o).redSqr().redISub(s).redISub(a);
    h = h.redIAdd(h);
    var p = s.redAdd(s).redIAdd(s).redIAdd(this.curve.a), v = p.redSqr().redISub(h).redISub(h);
    i = v;
    var y = a.redIAdd(a);
    y = y.redIAdd(y), y = y.redIAdd(y), t = p.redMul(h.redISub(v)).redISub(y), e = this.y.redAdd(this.y);
  } else {
    var P = this.z.redSqr(), S = this.y.redSqr(), O = this.x.redMul(S), F = this.x.redSub(P).redMul(this.x.redAdd(P));
    F = F.redAdd(F).redIAdd(F);
    var q = O.redIAdd(O);
    q = q.redIAdd(q);
    var K = q.redAdd(q);
    i = F.redSqr().redISub(K), e = this.y.redAdd(this.z).redSqr().redISub(S).redISub(P);
    var H = S.redSqr();
    H = H.redIAdd(H), H = H.redIAdd(H), H = H.redIAdd(H), t = F.redMul(q.redISub(i)).redISub(H);
  }
  return this.curve.jpoint(i, t, e);
}, Ue.prototype._dbl = function() {
  var i = this.curve.a, t = this.x, e = this.y, s = this.z, o = s.redSqr().redSqr(), a = t.redSqr(), h = e.redSqr(), p = a.redAdd(a).redIAdd(a).redIAdd(i.redMul(o)), v = t.redAdd(t);
  v = v.redIAdd(v);
  var y = v.redMul(h), P = p.redSqr().redISub(y.redAdd(y)), S = y.redISub(P), O = h.redSqr();
  O = O.redIAdd(O), O = O.redIAdd(O), O = O.redIAdd(O);
  var F = p.redMul(S).redISub(O), q = e.redAdd(e).redMul(s);
  return this.curve.jpoint(P, F, q);
}, Ue.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var i = this.x.redSqr(), t = this.y.redSqr(), e = this.z.redSqr(), s = t.redSqr(), o = i.redAdd(i).redIAdd(i), a = o.redSqr(), h = this.x.redAdd(t).redSqr().redISub(i).redISub(s);
  h = h.redIAdd(h), h = h.redAdd(h).redIAdd(h), h = h.redISub(a);
  var p = h.redSqr(), v = s.redIAdd(s);
  v = v.redIAdd(v), v = v.redIAdd(v), v = v.redIAdd(v);
  var y = o.redIAdd(h).redSqr().redISub(a).redISub(p).redISub(v), P = t.redMul(y);
  P = P.redIAdd(P), P = P.redIAdd(P);
  var S = this.x.redMul(p).redISub(P);
  S = S.redIAdd(S), S = S.redIAdd(S);
  var O = this.y.redMul(y.redMul(v.redISub(y)).redISub(h.redMul(p)));
  O = O.redIAdd(O), O = O.redIAdd(O), O = O.redIAdd(O);
  var F = this.z.redAdd(h).redSqr().redISub(e).redISub(p);
  return this.curve.jpoint(S, O, F);
}, Ue.prototype.mul = function(i, t) {
  return i = new wt(i, t), this.curve._wnafMul(this, i);
}, Ue.prototype.eq = function(i) {
  if (i.type === "affine")
    return this.eq(i.toJ());
  if (this === i)
    return !0;
  var t = this.z.redSqr(), e = i.z.redSqr();
  if (this.x.redMul(e).redISub(i.x.redMul(t)).cmpn(0) !== 0)
    return !1;
  var s = t.redMul(this.z), o = e.redMul(i.z);
  return this.y.redMul(o).redISub(i.y.redMul(s)).cmpn(0) === 0;
}, Ue.prototype.eqXToP = function(i) {
  var t = this.z.redSqr(), e = i.toRed(this.curve.red).redMul(t);
  if (this.x.cmp(e) === 0)
    return !0;
  for (var s = i.clone(), o = this.curve.redN.redMul(t); ; ) {
    if (s.iadd(this.curve.n), s.cmp(this.curve.p) >= 0)
      return !1;
    if (e.redIAdd(o), this.x.cmp(e) === 0)
      return !0;
  }
}, Ue.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Ue.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var ga = yn(function(i, t) {
  var e = t;
  e.base = Fs, e.short = d3, e.mont = null, e.edwards = null;
}), ma = yn(function(i, t) {
  var e = t, s = br.assert;
  function o(p) {
    p.type === "short" ? this.curve = new ga.short(p) : p.type === "edwards" ? this.curve = new ga.edwards(p) : this.curve = new ga.mont(p), this.g = this.curve.g, this.n = this.curve.n, this.hash = p.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  e.PresetCurve = o;
  function a(p, v) {
    Object.defineProperty(e, p, { configurable: !0, enumerable: !0, get: function() {
      var y = new o(v);
      return Object.defineProperty(e, p, { configurable: !0, enumerable: !0, value: y }), y;
    } });
  }
  a("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: mi.sha256, gRed: !1, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), a("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: mi.sha256, gRed: !1, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), a("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: mi.sha256, gRed: !1, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), a("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: mi.sha384, gRed: !1, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), a("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: mi.sha512, gRed: !1, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), a("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: mi.sha256, gRed: !1, g: ["9"] }), a("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: mi.sha256, gRed: !1, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var h;
  try {
    h = null.crash();
  } catch {
    h = void 0;
  }
  a("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: mi.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: !1, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", h] });
});
function ds(i) {
  if (!(this instanceof ds))
    return new ds(i);
  this.hash = i.hash, this.predResist = !!i.predResist, this.outLen = this.hash.outSize, this.minEntropy = i.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var t = Xr.toArray(i.entropy, i.entropyEnc || "hex"), e = Xr.toArray(i.nonce, i.nonceEnc || "hex"), s = Xr.toArray(i.pers, i.persEnc || "hex");
  jh(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, e, s);
}
var Gf = ds;
ds.prototype._init = function(i, t, e) {
  var s = i.concat(t).concat(e);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var o = 0; o < this.V.length; o++)
    this.K[o] = 0, this.V[o] = 1;
  this._update(s), this._reseed = 1, this.reseedInterval = 281474976710656;
}, ds.prototype._hmac = function() {
  return new mi.hmac(this.hash, this.K);
}, ds.prototype._update = function(i) {
  var t = this._hmac().update(this.V).update([0]);
  i && (t = t.update(i)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), i && (this.K = this._hmac().update(this.V).update([1]).update(i).digest(), this.V = this._hmac().update(this.V).digest());
}, ds.prototype.reseed = function(i, t, e, s) {
  typeof t != "string" && (s = e, e = t, t = null), i = Xr.toArray(i, t), e = Xr.toArray(e, s), jh(i.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(i.concat(e || [])), this._reseed = 1;
}, ds.prototype.generate = function(i, t, e, s) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof t != "string" && (s = e, e = t, t = null), e && (e = Xr.toArray(e, s || "hex"), this._update(e));
  for (var o = []; o.length < i; )
    this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
  var a = o.slice(0, i);
  return this._update(e), this._reseed++, Xr.encode(a, t);
};
var eh = br.assert;
function Ve(i, t) {
  this.ec = i, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var rh = Ve;
Ve.fromPublic = function(i, t, e) {
  return t instanceof Ve ? t : new Ve(i, { pub: t, pubEnc: e });
}, Ve.fromPrivate = function(i, t, e) {
  return t instanceof Ve ? t : new Ve(i, { priv: t, privEnc: e });
}, Ve.prototype.validate = function() {
  var i = this.getPublic();
  return i.isInfinity() ? { result: !1, reason: "Invalid public key" } : i.validate() ? i.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
}, Ve.prototype.getPublic = function(i, t) {
  return typeof i == "string" && (t = i, i = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, i) : this.pub;
}, Ve.prototype.getPrivate = function(i) {
  return i === "hex" ? this.priv.toString(16, 2) : this.priv;
}, Ve.prototype._importPrivate = function(i, t) {
  this.priv = new wt(i, t || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, Ve.prototype._importPublic = function(i, t) {
  if (i.x || i.y) {
    this.ec.curve.type === "mont" ? eh(i.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && eh(i.x && i.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(i.x, i.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(i, t);
}, Ve.prototype.derive = function(i) {
  return i.validate() || eh(i.validate(), "public point not validated"), i.mul(this.priv).getX();
}, Ve.prototype.sign = function(i, t, e) {
  return this.ec.sign(i, this, t, e);
}, Ve.prototype.verify = function(i, t) {
  return this.ec.verify(i, t, this);
}, Ve.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var g3 = br.assert;
function Oa(i, t) {
  if (i instanceof Oa)
    return i;
  this._importDER(i, t) || (g3(i.r && i.s, "Signature without r or s"), this.r = new wt(i.r, 16), this.s = new wt(i.s, 16), i.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = i.recoveryParam);
}
var ha = Oa;
function m3() {
  this.place = 0;
}
function ih(i, t) {
  var e = i[t.place++];
  if (!(e & 128))
    return e;
  var s = e & 15;
  if (s === 0 || s > 4)
    return !1;
  for (var o = 0, a = 0, h = t.place; a < s; a++, h++)
    o <<= 8, o |= i[h], o >>>= 0;
  return o <= 127 ? !1 : (t.place = h, o);
}
function Jf(i) {
  for (var t = 0, e = i.length - 1; !i[t] && !(i[t + 1] & 128) && t < e; )
    t++;
  return t === 0 ? i : i.slice(t);
}
Oa.prototype._importDER = function(i, t) {
  i = br.toArray(i, t);
  var e = new m3();
  if (i[e.place++] !== 48)
    return !1;
  var s = ih(i, e);
  if (s === !1 || s + e.place !== i.length || i[e.place++] !== 2)
    return !1;
  var o = ih(i, e);
  if (o === !1)
    return !1;
  var a = i.slice(e.place, o + e.place);
  if (e.place += o, i[e.place++] !== 2)
    return !1;
  var h = ih(i, e);
  if (h === !1 || i.length !== h + e.place)
    return !1;
  var p = i.slice(e.place, h + e.place);
  if (a[0] === 0)
    if (a[1] & 128)
      a = a.slice(1);
    else
      return !1;
  if (p[0] === 0)
    if (p[1] & 128)
      p = p.slice(1);
    else
      return !1;
  return this.r = new wt(a), this.s = new wt(p), this.recoveryParam = null, !0;
};
function sh(i, t) {
  if (t < 128) {
    i.push(t);
    return;
  }
  var e = 1 + (Math.log(t) / Math.LN2 >>> 3);
  for (i.push(e | 128); --e; )
    i.push(t >>> (e << 3) & 255);
  i.push(t);
}
Oa.prototype.toDER = function(i) {
  var t = this.r.toArray(), e = this.s.toArray();
  for (t[0] & 128 && (t = [0].concat(t)), e[0] & 128 && (e = [0].concat(e)), t = Jf(t), e = Jf(e); !e[0] && !(e[1] & 128); )
    e = e.slice(1);
  var s = [2];
  sh(s, t.length), s = s.concat(t), s.push(2), sh(s, e.length);
  var o = s.concat(e), a = [48];
  return sh(a, o.length), a = a.concat(o), br.encode(a, i);
};
var v3 = function() {
  throw new Error("unsupported");
}, Ud = br.assert;
function Fr(i) {
  if (!(this instanceof Fr))
    return new Fr(i);
  typeof i == "string" && (Ud(Object.prototype.hasOwnProperty.call(ma, i), "Unknown curve " + i), i = ma[i]), i instanceof ma.PresetCurve && (i = { curve: i }), this.curve = i.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = i.curve.g, this.g.precompute(i.curve.n.bitLength() + 1), this.hash = i.hash || i.curve.hash;
}
var y3 = Fr;
Fr.prototype.keyPair = function(i) {
  return new rh(this, i);
}, Fr.prototype.keyFromPrivate = function(i, t) {
  return rh.fromPrivate(this, i, t);
}, Fr.prototype.keyFromPublic = function(i, t) {
  return rh.fromPublic(this, i, t);
}, Fr.prototype.genKeyPair = function(i) {
  i || (i = {});
  for (var t = new Gf({ hash: this.hash, pers: i.pers, persEnc: i.persEnc || "utf8", entropy: i.entropy || v3(this.hash.hmacStrength), entropyEnc: i.entropy && i.entropyEnc || "utf8", nonce: this.n.toArray() }), e = this.n.byteLength(), s = this.n.sub(new wt(2)); ; ) {
    var o = new wt(t.generate(e));
    if (!(o.cmp(s) > 0))
      return o.iaddn(1), this.keyFromPrivate(o);
  }
}, Fr.prototype._truncateToN = function(i, t) {
  var e = i.byteLength() * 8 - this.n.bitLength();
  return e > 0 && (i = i.ushrn(e)), !t && i.cmp(this.n) >= 0 ? i.sub(this.n) : i;
}, Fr.prototype.sign = function(i, t, e, s) {
  typeof e == "object" && (s = e, e = null), s || (s = {}), t = this.keyFromPrivate(t, e), i = this._truncateToN(new wt(i, 16));
  for (var o = this.n.byteLength(), a = t.getPrivate().toArray("be", o), h = i.toArray("be", o), p = new Gf({ hash: this.hash, entropy: a, nonce: h, pers: s.pers, persEnc: s.persEnc || "utf8" }), v = this.n.sub(new wt(1)), y = 0; ; y++) {
    var P = s.k ? s.k(y) : new wt(p.generate(this.n.byteLength()));
    if (P = this._truncateToN(P, !0), !(P.cmpn(1) <= 0 || P.cmp(v) >= 0)) {
      var S = this.g.mul(P);
      if (!S.isInfinity()) {
        var O = S.getX(), F = O.umod(this.n);
        if (F.cmpn(0) !== 0) {
          var q = P.invm(this.n).mul(F.mul(t.getPrivate()).iadd(i));
          if (q = q.umod(this.n), q.cmpn(0) !== 0) {
            var K = (S.getY().isOdd() ? 1 : 0) | (O.cmp(F) !== 0 ? 2 : 0);
            return s.canonical && q.cmp(this.nh) > 0 && (q = this.n.sub(q), K ^= 1), new ha({ r: F, s: q, recoveryParam: K });
          }
        }
      }
    }
  }
}, Fr.prototype.verify = function(i, t, e, s) {
  i = this._truncateToN(new wt(i, 16)), e = this.keyFromPublic(e, s), t = new ha(t, "hex");
  var o = t.r, a = t.s;
  if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0 || a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
    return !1;
  var h = a.invm(this.n), p = h.mul(i).umod(this.n), v = h.mul(o).umod(this.n), y;
  return this.curve._maxwellTrick ? (y = this.g.jmulAdd(p, e.getPublic(), v), y.isInfinity() ? !1 : y.eqXToP(o)) : (y = this.g.mulAdd(p, e.getPublic(), v), y.isInfinity() ? !1 : y.getX().umod(this.n).cmp(o) === 0);
}, Fr.prototype.recoverPubKey = function(i, t, e, s) {
  Ud((3 & e) === e, "The recovery param is more than two bits"), t = new ha(t, s);
  var o = this.n, a = new wt(i), h = t.r, p = t.s, v = e & 1, y = e >> 1;
  if (h.cmp(this.curve.p.umod(this.curve.n)) >= 0 && y)
    throw new Error("Unable to find sencond key candinate");
  y ? h = this.curve.pointFromX(h.add(this.curve.n), v) : h = this.curve.pointFromX(h, v);
  var P = t.r.invm(o), S = o.sub(a).mul(P).umod(o), O = p.mul(P).umod(o);
  return this.g.mulAdd(S, h, O);
}, Fr.prototype.getKeyRecoveryParam = function(i, t, e, s) {
  if (t = new ha(t, s), t.recoveryParam !== null)
    return t.recoveryParam;
  for (var o = 0; o < 4; o++) {
    var a;
    try {
      a = this.recoverPubKey(i, t, o);
    } catch {
      continue;
    }
    if (a.eq(e))
      return o;
  }
  throw new Error("Unable to find valid recovery factor");
};
var w3 = yn(function(i, t) {
  var e = t;
  e.version = "6.5.4", e.utils = br, e.rand = function() {
    throw new Error("unsupported");
  }, e.curve = ga, e.curves = ma, e.ec = y3, e.eddsa = null;
}), b3 = w3.ec;
const _3 = "signing-key/5.7.0", Eh = new ze(_3);
let nh = null;
function fs() {
  return nh || (nh = new b3("secp256k1")), nh;
}
class A3 {
  constructor(t) {
    Kn(this, "curve", "secp256k1"), Kn(this, "privateKey", ar(t)), n2(this.privateKey) !== 32 && Eh.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const e = fs().keyFromPrivate(Ee(this.privateKey));
    Kn(this, "publicKey", "0x" + e.getPublic(!1, "hex")), Kn(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), Kn(this, "_isSigningKey", !0);
  }
  _addPoint(t) {
    const e = fs().keyFromPublic(Ee(this.publicKey)), s = fs().keyFromPublic(Ee(t));
    return "0x" + e.pub.add(s.pub).encodeCompressed("hex");
  }
  signDigest(t) {
    const e = fs().keyFromPrivate(Ee(this.privateKey)), s = Ee(t);
    s.length !== 32 && Eh.throwArgumentError("bad digest length", "digest", t);
    const o = e.sign(s, { canonical: !0 });
    return ud({ recoveryParam: o.recoveryParam, r: _i("0x" + o.r.toString(16), 32), s: _i("0x" + o.s.toString(16), 32) });
  }
  computeSharedSecret(t) {
    const e = fs().keyFromPrivate(Ee(this.privateKey)), s = fs().keyFromPublic(Ee($d(t)));
    return _i("0x" + e.derive(s.getPublic()).toString(16), 32);
  }
  static isSigningKey(t) {
    return !!(t && t._isSigningKey);
  }
}
function E3(i, t) {
  const e = ud(t), s = { r: Ee(e.r), s: Ee(e.s) };
  return "0x" + fs().recoverPubKey(Ee(i), s, e.recoveryParam).encode("hex", !1);
}
function $d(i, t) {
  const e = Ee(i);
  return e.length === 32 ? new A3(e).publicKey : e.length === 33 ? "0x" + fs().keyFromPublic(e).getPublic(!1, "hex") : e.length === 65 ? ar(e) : Eh.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
var Yf;
(function(i) {
  i[i.legacy = 0] = "legacy", i[i.eip2930 = 1] = "eip2930", i[i.eip1559 = 2] = "eip1559";
})(Yf || (Yf = {}));
function I3(i) {
  const t = $d(i);
  return D2(Df(Bh(Df(t, 1)), 12));
}
function S3(i, t) {
  return I3(E3(Ee(i), t));
}
const P3 = "https://rpc.walletconnect.com/v1";
async function M3(i, t, e, s, o, a) {
  switch (e.t) {
    case "eip191":
      return C3(i, t, e.s);
    case "eip1271":
      return await x3(i, t, e.s, s, o, a);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${e.t}`);
  }
}
function C3(i, t, e) {
  return S3(wd(t), e).toLowerCase() === i.toLowerCase();
}
async function x3(i, t, e, s, o, a) {
  try {
    const h = "0x1626ba7e", p = "0000000000000000000000000000000000000000000000000000000000000040", v = "0000000000000000000000000000000000000000000000000000000000000041", y = e.substring(2), P = wd(t).substring(2), S = h + P + p + v + y, O = await fetch(`${a || P3}/?chainId=${s}&projectId=${o}`, { method: "POST", body: JSON.stringify({ id: N3(), jsonrpc: "2.0", method: "eth_call", params: [{ to: i, data: S }, "latest"] }) }), { result: F } = await O.json();
    return F ? F.slice(0, h.length).toLowerCase() === h.toLowerCase() : !1;
  } catch (h) {
    return console.error("isValidEip1271Signature: ", h), !1;
  }
}
function N3() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var R3 = Object.defineProperty, O3 = Object.defineProperties, T3 = Object.getOwnPropertyDescriptors, Wf = Object.getOwnPropertySymbols, F3 = Object.prototype.hasOwnProperty, D3 = Object.prototype.propertyIsEnumerable, Xf = (i, t, e) => t in i ? R3(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, q3 = (i, t) => {
  for (var e in t || (t = {}))
    F3.call(t, e) && Xf(i, e, t[e]);
  if (Wf)
    for (var e of Wf(t))
      D3.call(t, e) && Xf(i, e, t[e]);
  return i;
}, k3 = (i, t) => O3(i, T3(t));
const B3 = "did:pkh:", Lh = (i) => i == null ? void 0 : i.split(":"), jd = (i) => {
  const t = i && Lh(i);
  if (t)
    return i.includes(B3) ? t[3] : t[1];
}, Zf = (i) => {
  const t = i && Lh(i);
  if (t)
    return t[2] + ":" + t[3];
}, Sa = (i) => {
  const t = i && Lh(i);
  if (t)
    return t.pop();
};
async function tp(i) {
  const { cacao: t, projectId: e } = i, { s, p: o } = t, a = zd(o, o.iss), h = Sa(o.iss);
  return await M3(h, a, s, jd(o.iss), e);
}
const zd = (i, t) => {
  const e = `${i.domain} wants you to sign in with your Ethereum account:`, s = Sa(t);
  if (!i.aud && !i.uri)
    throw new Error("Either `aud` or `uri` is required to construct the message");
  let o = i.statement || void 0;
  const a = `URI: ${i.aud || i.uri}`, h = `Version: ${i.version}`, p = `Chain ID: ${jd(t)}`, v = `Nonce: ${i.nonce}`, y = `Issued At: ${i.iat}`, P = i.exp ? `Expiration Time: ${i.exp}` : void 0, S = i.nbf ? `Not Before: ${i.nbf}` : void 0, O = i.requestId ? `Request ID: ${i.requestId}` : void 0, F = i.resources ? `Resources:${i.resources.map((K) => `
- ${K}`).join("")}` : void 0, q = va(i.resources);
  if (q) {
    const K = ho(q);
    o = Q3(o, K);
  }
  return [e, s, "", o, "", a, h, p, v, y, P, S, O, F].filter((K) => K != null).join(`
`);
};
function U3(i) {
  return Os.from(JSON.stringify(i)).toString("base64");
}
function $3(i) {
  return JSON.parse(Os.from(i, "base64").toString("utf-8"));
}
function Ts(i) {
  if (!i)
    throw new Error("No recap provided, value is undefined");
  if (!i.att)
    throw new Error("No `att` property found");
  const t = Object.keys(i.att);
  if (!(t != null && t.length))
    throw new Error("No resources found in `att` property");
  t.forEach((e) => {
    const s = i.att[e];
    if (Array.isArray(s))
      throw new Error(`Resource must be an object: ${e}`);
    if (typeof s != "object")
      throw new Error(`Resource must be an object: ${e}`);
    if (!Object.keys(s).length)
      throw new Error(`Resource object is empty: ${e}`);
    Object.keys(s).forEach((o) => {
      const a = s[o];
      if (!Array.isArray(a))
        throw new Error(`Ability limits ${o} must be an array of objects, found: ${a}`);
      if (!a.length)
        throw new Error(`Value of ${o} is empty array, must be an array with objects`);
      a.forEach((h) => {
        if (typeof h != "object")
          throw new Error(`Ability limits (${o}) must be an array of objects, found: ${h}`);
      });
    });
  });
}
function j3(i, t, e, s = {}) {
  return e == null || e.sort((o, a) => o.localeCompare(a)), { att: { [i]: z3(t, e, s) } };
}
function z3(i, t, e = {}) {
  t = t == null ? void 0 : t.sort((o, a) => o.localeCompare(a));
  const s = t.map((o) => ({ [`${i}/${o}`]: [e] }));
  return Object.assign({}, ...s);
}
function Ld(i) {
  return Ts(i), `urn:recap:${U3(i).replace(/=/g, "")}`;
}
function ho(i) {
  const t = $3(i.replace("urn:recap:", ""));
  return Ts(t), t;
}
function L3(i, t, e) {
  const s = j3(i, t, e);
  return Ld(s);
}
function K3(i) {
  return i && i.includes("urn:recap:");
}
function H3(i, t) {
  const e = ho(i), s = ho(t), o = V3(e, s);
  return Ld(o);
}
function V3(i, t) {
  Ts(i), Ts(t);
  const e = Object.keys(i.att).concat(Object.keys(t.att)).sort((o, a) => o.localeCompare(a)), s = { att: {} };
  return e.forEach((o) => {
    var a, h;
    Object.keys(((a = i.att) == null ? void 0 : a[o]) || {}).concat(Object.keys(((h = t.att) == null ? void 0 : h[o]) || {})).sort((p, v) => p.localeCompare(v)).forEach((p) => {
      var v, y;
      s.att[o] = k3(q3({}, s.att[o]), { [p]: ((v = i.att[o]) == null ? void 0 : v[p]) || ((y = t.att[o]) == null ? void 0 : y[p]) });
    });
  }), s;
}
function Q3(i = "", t) {
  Ts(t);
  const e = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (i.includes(e))
    return i;
  const s = [];
  let o = 0;
  Object.keys(t.att).forEach((p) => {
    const v = Object.keys(t.att[p]).map((S) => ({ ability: S.split("/")[0], action: S.split("/")[1] }));
    v.sort((S, O) => S.action.localeCompare(O.action));
    const y = {};
    v.forEach((S) => {
      y[S.ability] || (y[S.ability] = []), y[S.ability].push(S.action);
    });
    const P = Object.keys(y).map((S) => (o++, `(${o}) '${S}': '${y[S].join("', '")}' for '${p}'.`));
    s.push(P.join(", ").replace(".,", "."));
  });
  const a = s.join(" "), h = `${e}${a}`;
  return `${i ? i + " " : ""}${h}`;
}
function ep(i) {
  var t;
  const e = ho(i);
  Ts(e);
  const s = (t = e.att) == null ? void 0 : t.eip155;
  return s ? Object.keys(s).map((o) => o.split("/")[1]) : [];
}
function rp(i) {
  const t = ho(i);
  Ts(t);
  const e = [];
  return Object.values(t.att).forEach((s) => {
    Object.values(s).forEach((o) => {
      var a;
      (a = o == null ? void 0 : o[0]) != null && a.chains && e.push(o[0].chains);
    });
  }), [...new Set(e.flat())];
}
function va(i) {
  if (!i)
    return;
  const t = i == null ? void 0 : i[i.length - 1];
  return K3(t) ? t : void 0;
}
const Kd = "base10", Xe = "base16", Ih = "base64pad", Kh = "utf8", Hd = 0, Xi = 1, G3 = 0, ip = 1, Sh = 12, Hh = 32;
function J3() {
  const i = Xp.generateKeyPair();
  return { privateKey: qr(i.secretKey, Xe), publicKey: qr(i.publicKey, Xe) };
}
function Ph() {
  const i = Zp.randomBytes(Hh);
  return qr(i, Xe);
}
function Y3(i, t) {
  const e = Xp.sharedKey(Wr(i, Xe), Wr(t, Xe), !0), s = new wb(xa.SHA256, e).expand(Hh);
  return qr(s, Xe);
}
function ya(i) {
  const t = xa.hash(Wr(i, Xe));
  return qr(t, Xe);
}
function Ji(i) {
  const t = xa.hash(Wr(i, Kh));
  return qr(t, Xe);
}
function W3(i) {
  return Wr(`${i}`, Kd);
}
function vo(i) {
  return Number(qr(i, Kd));
}
function X3(i) {
  const t = W3(typeof i.type < "u" ? i.type : Hd);
  if (vo(t) === Xi && typeof i.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const e = typeof i.senderPublicKey < "u" ? Wr(i.senderPublicKey, Xe) : void 0, s = typeof i.iv < "u" ? Wr(i.iv, Xe) : Zp.randomBytes(Sh), o = new td.ChaCha20Poly1305(Wr(i.symKey, Xe)).seal(s, Wr(i.message, Kh));
  return tA({ type: t, sealed: o, iv: s, senderPublicKey: e });
}
function Z3(i) {
  const t = new td.ChaCha20Poly1305(Wr(i.symKey, Xe)), { sealed: e, iv: s } = Pa(i.encoded), o = t.open(s, e);
  if (o === null)
    throw new Error("Failed to decrypt");
  return qr(o, Kh);
}
function tA(i) {
  if (vo(i.type) === Xi) {
    if (typeof i.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return qr(Ef([i.type, i.senderPublicKey, i.iv, i.sealed]), Ih);
  }
  return qr(Ef([i.type, i.iv, i.sealed]), Ih);
}
function Pa(i) {
  const t = Wr(i, Ih), e = t.slice(G3, ip), s = ip;
  if (vo(e) === Xi) {
    const p = s + Hh, v = p + Sh, y = t.slice(s, p), P = t.slice(p, v), S = t.slice(v);
    return { type: e, sealed: S, iv: P, senderPublicKey: y };
  }
  const o = s + Sh, a = t.slice(s, o), h = t.slice(o);
  return { type: e, sealed: h, iv: a };
}
function eA(i, t) {
  const e = Pa(i);
  return Vd({ type: vo(e.type), senderPublicKey: typeof e.senderPublicKey < "u" ? qr(e.senderPublicKey, Xe) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function Vd(i) {
  const t = (i == null ? void 0 : i.type) || Hd;
  if (t === Xi) {
    if (typeof (i == null ? void 0 : i.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (i == null ? void 0 : i.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: i == null ? void 0 : i.senderPublicKey, receiverPublicKey: i == null ? void 0 : i.receiverPublicKey };
}
function sp(i) {
  return i.type === Xi && typeof i.senderPublicKey == "string" && typeof i.receiverPublicKey == "string";
}
function rA(i) {
  return new bb.ec("p256").keyFromPublic({ x: Os.from(i.x, "base64").toString("hex"), y: Os.from(i.y, "base64").toString("hex") }, "hex");
}
function iA(i) {
  let t = i.replace(/-/g, "+").replace(/_/g, "/");
  const e = t.length % 4;
  return e > 0 && (t += "=".repeat(4 - e)), t;
}
function sA(i) {
  return Os.from(iA(i), "base64");
}
function nA(i, t) {
  const [e, s, o] = i.split("."), a = sA(o);
  if (a.length !== 64)
    throw new Error("Invalid signature length");
  const h = a.slice(0, 32).toString("hex"), p = a.slice(32, 64).toString("hex"), v = `${e}.${s}`, y = new xa.SHA256().update(Os.from(v)).digest(), P = rA(t), S = Os.from(y).toString("hex");
  if (!P.verify(S, { r: h, s: p }))
    throw new Error("Invalid signature");
  return vh(i).payload;
}
const oA = "irn";
function Mh(i) {
  return (i == null ? void 0 : i.relay) || { protocol: oA };
}
function to(i) {
  const t = _b[i];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${i}`);
  return t;
}
var aA = Object.defineProperty, cA = Object.defineProperties, hA = Object.getOwnPropertyDescriptors, np = Object.getOwnPropertySymbols, uA = Object.prototype.hasOwnProperty, lA = Object.prototype.propertyIsEnumerable, op = (i, t, e) => t in i ? aA(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, ap = (i, t) => {
  for (var e in t || (t = {}))
    uA.call(t, e) && op(i, e, t[e]);
  if (np)
    for (var e of np(t))
      lA.call(t, e) && op(i, e, t[e]);
  return i;
}, fA = (i, t) => cA(i, hA(t));
function pA(i, t = "-") {
  const e = {}, s = "relay" + t;
  return Object.keys(i).forEach((o) => {
    if (o.startsWith(s)) {
      const a = o.replace(s, ""), h = i[o];
      e[a] = h;
    }
  }), e;
}
function cp(i) {
  i = i.includes("wc://") ? i.replace("wc://", "") : i, i = i.includes("wc:") ? i.replace("wc:", "") : i;
  const t = i.indexOf(":"), e = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0, s = i.substring(0, t), o = i.substring(t + 1, e).split("@"), a = typeof e < "u" ? i.substring(e) : "", h = ba.parse(a), p = typeof h.methods == "string" ? h.methods.split(",") : void 0;
  return { protocol: s, topic: dA(o[0]), version: parseInt(o[1], 10), symKey: h.symKey, relay: pA(h), methods: p, expiryTimestamp: h.expiryTimestamp ? parseInt(h.expiryTimestamp, 10) : void 0 };
}
function dA(i) {
  return i.startsWith("//") ? i.substring(2) : i;
}
function gA(i, t = "-") {
  const e = "relay", s = {};
  return Object.keys(i).forEach((o) => {
    const a = e + t + o;
    i[o] && (s[a] = i[o]);
  }), s;
}
function mA(i) {
  return `${i.protocol}:${i.topic}@${i.version}?` + ba.stringify(ap(fA(ap({ symKey: i.symKey }, gA(i.relay)), { expiryTimestamp: i.expiryTimestamp }), i.methods ? { methods: i.methods.join(",") } : {}));
}
function wn(i) {
  const t = [];
  return i.forEach((e) => {
    const [s, o] = e.split(":");
    t.push(`${s}:${o}`);
  }), t;
}
function vA(i) {
  const t = [];
  return Object.values(i).forEach((e) => {
    t.push(...wn(e.accounts));
  }), t;
}
function yA(i, t) {
  const e = [];
  return Object.values(i).forEach((s) => {
    wn(s.accounts).includes(t) && e.push(...s.methods);
  }), e;
}
function wA(i, t) {
  const e = [];
  return Object.values(i).forEach((s) => {
    wn(s.accounts).includes(t) && e.push(...s.events);
  }), e;
}
function Vh(i) {
  return i.includes(":");
}
function eo(i) {
  return Vh(i) ? i.split(":")[0] : i;
}
function bA(i) {
  const t = {};
  return i == null || i.forEach((e) => {
    const [s, o] = e.split(":");
    t[s] || (t[s] = { accounts: [], chains: [], events: [] }), t[s].accounts.push(e), t[s].chains.push(`${s}:${o}`);
  }), t;
}
function hp(i, t) {
  t = t.map((s) => s.replace("did:pkh:", ""));
  const e = bA(t);
  for (const [s, o] of Object.entries(e))
    o.methods ? o.methods = pa(o.methods, i) : o.methods = i, o.events = ["chainChanged", "accountsChanged"];
  return e;
}
const _A = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, AA = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function G(i, t) {
  const { message: e, code: s } = AA[i];
  return { message: t ? `${e} ${t}` : e, code: s };
}
function Jt(i, t) {
  const { message: e, code: s } = _A[i];
  return { message: t ? `${e} ${t}` : e, code: s };
}
function Si(i, t) {
  return !!Array.isArray(i);
}
function uo(i) {
  return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length;
}
function cr(i) {
  return typeof i > "u";
}
function Me(i, t) {
  return t && cr(i) ? !0 : typeof i == "string" && !!i.trim().length;
}
function Qh(i, t) {
  return typeof i == "number" && !isNaN(i);
}
function EA(i, t) {
  const { requiredNamespaces: e } = t, s = Object.keys(i.namespaces), o = Object.keys(e);
  let a = !0;
  return xs(o, s) ? (s.forEach((h) => {
    const { accounts: p, methods: v, events: y } = i.namespaces[h], P = wn(p), S = e[h];
    (!xs(rd(h, S), P) || !xs(S.methods, v) || !xs(S.events, y)) && (a = !1);
  }), a) : !1;
}
function Ma(i) {
  return Me(i, !1) && i.includes(":") ? i.split(":").length === 2 : !1;
}
function IA(i) {
  if (Me(i, !1) && i.includes(":")) {
    const t = i.split(":");
    if (t.length === 3) {
      const e = t[0] + ":" + t[1];
      return !!t[2] && Ma(e);
    }
  }
  return !1;
}
function SA(i) {
  if (Me(i, !1))
    try {
      return typeof new URL(i) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function PA(i) {
  var t;
  return (t = i == null ? void 0 : i.proposer) == null ? void 0 : t.publicKey;
}
function MA(i) {
  return i == null ? void 0 : i.topic;
}
function CA(i, t) {
  let e = null;
  return Me(i == null ? void 0 : i.publicKey, !1) || (e = G("MISSING_OR_INVALID", `${t} controller public key should be a string`)), e;
}
function up(i) {
  let t = !0;
  return Si(i) ? i.length && (t = i.every((e) => Me(e, !1))) : t = !1, t;
}
function xA(i, t, e) {
  let s = null;
  return Si(t) && t.length ? t.forEach((o) => {
    s || Ma(o) || (s = Jt("UNSUPPORTED_CHAINS", `${e}, chain ${o} should be a string and conform to "namespace:chainId" format`));
  }) : Ma(i) || (s = Jt("UNSUPPORTED_CHAINS", `${e}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s;
}
function NA(i, t, e) {
  let s = null;
  return Object.entries(i).forEach(([o, a]) => {
    if (s)
      return;
    const h = xA(o, rd(o, a), `${t} ${e}`);
    h && (s = h);
  }), s;
}
function RA(i, t) {
  let e = null;
  return Si(i) ? i.forEach((s) => {
    e || IA(s) || (e = Jt("UNSUPPORTED_ACCOUNTS", `${t}, account ${s} should be a string and conform to "namespace:chainId:address" format`));
  }) : e = Jt("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), e;
}
function OA(i, t) {
  let e = null;
  return Object.values(i).forEach((s) => {
    if (e)
      return;
    const o = RA(s == null ? void 0 : s.accounts, `${t} namespace`);
    o && (e = o);
  }), e;
}
function TA(i, t) {
  let e = null;
  return up(i == null ? void 0 : i.methods) ? up(i == null ? void 0 : i.events) || (e = Jt("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : e = Jt("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), e;
}
function Qd(i, t) {
  let e = null;
  return Object.values(i).forEach((s) => {
    if (e)
      return;
    const o = TA(s, `${t}, namespace`);
    o && (e = o);
  }), e;
}
function FA(i, t, e) {
  let s = null;
  if (i && uo(i)) {
    const o = Qd(i, t);
    o && (s = o);
    const a = NA(i, t, e);
    a && (s = a);
  } else
    s = G("MISSING_OR_INVALID", `${t}, ${e} should be an object with data`);
  return s;
}
function oh(i, t) {
  let e = null;
  if (i && uo(i)) {
    const s = Qd(i, t);
    s && (e = s);
    const o = OA(i, t);
    o && (e = o);
  } else
    e = G("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return e;
}
function Gd(i) {
  return Me(i.protocol, !0);
}
function DA(i, t) {
  let e = !1;
  return i ? i && Si(i) && i.length && i.forEach((s) => {
    e = Gd(s);
  }) : e = !0, e;
}
function qA(i) {
  return typeof i == "number";
}
function or(i) {
  return typeof i < "u" && typeof i !== null;
}
function kA(i) {
  return !(!i || typeof i != "object" || !i.code || !Qh(i.code) || !i.message || !Me(i.message, !1));
}
function BA(i) {
  return !(cr(i) || !Me(i.method, !1));
}
function UA(i) {
  return !(cr(i) || cr(i.result) && cr(i.error) || !Qh(i.id) || !Me(i.jsonrpc, !1));
}
function $A(i) {
  return !(cr(i) || !Me(i.name, !1));
}
function lp(i, t) {
  return !(!Ma(t) || !vA(i).includes(t));
}
function jA(i, t, e) {
  return Me(e, !1) ? yA(i, t).includes(e) : !1;
}
function zA(i, t, e) {
  return Me(e, !1) ? wA(i, t).includes(e) : !1;
}
function fp(i, t, e) {
  let s = null;
  const o = LA(i), a = KA(t), h = Object.keys(o), p = Object.keys(a), v = pp(Object.keys(i)), y = pp(Object.keys(t)), P = v.filter((S) => !y.includes(S));
  return P.length && (s = G("NON_CONFORMING_NAMESPACES", `${e} namespaces keys don't satisfy requiredNamespaces.
      Required: ${P.toString()}
      Received: ${Object.keys(t).toString()}`)), xs(h, p) || (s = G("NON_CONFORMING_NAMESPACES", `${e} namespaces chains don't satisfy required namespaces.
      Required: ${h.toString()}
      Approved: ${p.toString()}`)), Object.keys(t).forEach((S) => {
    if (!S.includes(":") || s)
      return;
    const O = wn(t[S].accounts);
    O.includes(S) || (s = G("NON_CONFORMING_NAMESPACES", `${e} namespaces accounts don't satisfy namespace accounts for ${S}
        Required: ${S}
        Approved: ${O.toString()}`));
  }), h.forEach((S) => {
    s || (xs(o[S].methods, a[S].methods) ? xs(o[S].events, a[S].events) || (s = G("NON_CONFORMING_NAMESPACES", `${e} namespaces events don't satisfy namespace events for ${S}`)) : s = G("NON_CONFORMING_NAMESPACES", `${e} namespaces methods don't satisfy namespace methods for ${S}`));
  }), s;
}
function LA(i) {
  const t = {};
  return Object.keys(i).forEach((e) => {
    var s;
    e.includes(":") ? t[e] = i[e] : (s = i[e].chains) == null || s.forEach((o) => {
      t[o] = { methods: i[e].methods, events: i[e].events };
    });
  }), t;
}
function pp(i) {
  return [...new Set(i.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function KA(i) {
  const t = {};
  return Object.keys(i).forEach((e) => {
    if (e.includes(":"))
      t[e] = i[e];
    else {
      const s = wn(i[e].accounts);
      s == null || s.forEach((o) => {
        t[o] = { accounts: i[e].accounts.filter((a) => a.includes(`${o}:`)), methods: i[e].methods, events: i[e].events };
      });
    }
  }), t;
}
function HA(i, t) {
  return Qh(i) && i <= t.max && i >= t.min;
}
function dp() {
  const i = go();
  return new Promise((t) => {
    switch (i) {
      case yr.browser:
        t(VA());
        break;
      case yr.reactNative:
        t(QA());
        break;
      case yr.node:
        t(GA());
        break;
      default:
        t(!0);
    }
  });
}
function VA() {
  return po() && (navigator == null ? void 0 : navigator.onLine);
}
async function QA() {
  if (fo() && typeof be < "u" && be != null && be.NetInfo) {
    const i = await (be == null ? void 0 : be.NetInfo.fetch());
    return i == null ? void 0 : i.isConnected;
  }
  return !0;
}
function GA() {
  return !0;
}
function JA(i) {
  switch (go()) {
    case yr.browser:
      YA(i);
      break;
    case yr.reactNative:
      WA(i);
      break;
  }
}
function YA(i) {
  !fo() && po() && (window.addEventListener("online", () => i(!0)), window.addEventListener("offline", () => i(!1)));
}
function WA(i) {
  var t;
  fo() && typeof be < "u" && be != null && be.NetInfo && ((t = be) == null || t.NetInfo.addEventListener((e) => i(e == null ? void 0 : e.isConnected)));
}
const ah = {};
class Qn {
  static get(t) {
    return ah[t];
  }
  static set(t, e) {
    ah[t] = e;
  }
  static delete(t) {
    delete ah[t];
  }
}
class XA extends dn {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}
class ZA extends dn {
  constructor(t, e) {
    super(), this.core = t, this.logger = e, this.records = /* @__PURE__ */ new Map();
  }
}
class t6 {
  constructor(t, e) {
    this.logger = t, this.core = e;
  }
}
let e6 = class extends dn {
  constructor(t, e) {
    super(), this.relayer = t, this.logger = e;
  }
}, r6 = class extends dn {
  constructor(t) {
    super();
  }
}, i6 = class {
  constructor(t, e, s, o) {
    this.core = t, this.logger = e, this.name = s;
  }
};
class s6 extends dn {
  constructor(t, e) {
    super(), this.relayer = t, this.logger = e;
  }
}
let n6 = class extends dn {
  constructor(t, e) {
    super(), this.core = t, this.logger = e;
  }
}, o6 = class {
  constructor(t, e, s) {
    this.core = t, this.logger = e, this.store = s;
  }
}, a6 = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, c6 = class {
  constructor(t, e, s) {
    this.core = t, this.logger = e, this.telemetryEnabled = s;
  }
}, h6 = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, u6 = class {
  constructor(t) {
    this.client = t;
  }
};
function l6(i, t) {
  if (i.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), s = 0; s < e.length; s++)
    e[s] = 255;
  for (var o = 0; o < i.length; o++) {
    var a = i.charAt(o), h = a.charCodeAt(0);
    if (e[h] !== 255)
      throw new TypeError(a + " is ambiguous");
    e[h] = o;
  }
  var p = i.length, v = i.charAt(0), y = Math.log(p) / Math.log(256), P = Math.log(256) / Math.log(p);
  function S(q) {
    if (q instanceof Uint8Array || (ArrayBuffer.isView(q) ? q = new Uint8Array(q.buffer, q.byteOffset, q.byteLength) : Array.isArray(q) && (q = Uint8Array.from(q))), !(q instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (q.length === 0)
      return "";
    for (var K = 0, H = 0, Q = 0, ht = q.length; Q !== ht && q[Q] === 0; )
      Q++, K++;
    for (var ut = (ht - Q) * P + 1 >>> 0, Y = new Uint8Array(ut); Q !== ht; ) {
      for (var et = q[Q], ct = 0, st = ut - 1; (et !== 0 || ct < H) && st !== -1; st--, ct++)
        et += 256 * Y[st] >>> 0, Y[st] = et % p >>> 0, et = et / p >>> 0;
      if (et !== 0)
        throw new Error("Non-zero carry");
      H = ct, Q++;
    }
    for (var gt = ut - H; gt !== ut && Y[gt] === 0; )
      gt++;
    for (var kt = v.repeat(K); gt < ut; ++gt)
      kt += i.charAt(Y[gt]);
    return kt;
  }
  function O(q) {
    if (typeof q != "string")
      throw new TypeError("Expected String");
    if (q.length === 0)
      return new Uint8Array();
    var K = 0;
    if (q[K] !== " ") {
      for (var H = 0, Q = 0; q[K] === v; )
        H++, K++;
      for (var ht = (q.length - K) * y + 1 >>> 0, ut = new Uint8Array(ht); q[K]; ) {
        var Y = e[q.charCodeAt(K)];
        if (Y === 255)
          return;
        for (var et = 0, ct = ht - 1; (Y !== 0 || et < Q) && ct !== -1; ct--, et++)
          Y += p * ut[ct] >>> 0, ut[ct] = Y % 256 >>> 0, Y = Y / 256 >>> 0;
        if (Y !== 0)
          throw new Error("Non-zero carry");
        Q = et, K++;
      }
      if (q[K] !== " ") {
        for (var st = ht - Q; st !== ht && ut[st] === 0; )
          st++;
        for (var gt = new Uint8Array(H + (ht - st)), kt = H; st !== ht; )
          gt[kt++] = ut[st++];
        return gt;
      }
    }
  }
  function F(q) {
    var K = O(q);
    if (K)
      return K;
    throw new Error(`Non-${t} character`);
  }
  return { encode: S, decodeUnsafe: O, decode: F };
}
var f6 = l6, p6 = f6;
const Jd = (i) => {
  if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
    return i;
  if (i instanceof ArrayBuffer)
    return new Uint8Array(i);
  if (ArrayBuffer.isView(i))
    return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
  throw new Error("Unknown type, must be binary type");
}, d6 = (i) => new TextEncoder().encode(i), g6 = (i) => new TextDecoder().decode(i);
class m6 {
  constructor(t, e, s) {
    this.name = t, this.prefix = e, this.baseEncode = s;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class v6 {
  constructor(t, e, s) {
    if (this.name = t, this.prefix = e, e.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = e.codePointAt(0), this.baseDecode = s;
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(t.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(t) {
    return Yd(this, t);
  }
}
class y6 {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Yd(this, t);
  }
  decode(t) {
    const e = t[0], s = this.decoders[e];
    if (s)
      return s.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Yd = (i, t) => new y6({ ...i.decoders || { [i.prefix]: i }, ...t.decoders || { [t.prefix]: t } });
class w6 {
  constructor(t, e, s, o) {
    this.name = t, this.prefix = e, this.baseEncode = s, this.baseDecode = o, this.encoder = new m6(t, e, s), this.decoder = new v6(t, e, o);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Ta = ({ name: i, prefix: t, encode: e, decode: s }) => new w6(i, t, e, s), yo = ({ prefix: i, name: t, alphabet: e }) => {
  const { encode: s, decode: o } = p6(e, t);
  return Ta({ prefix: i, name: t, encode: s, decode: (a) => Jd(o(a)) });
}, b6 = (i, t, e, s) => {
  const o = {};
  for (let P = 0; P < t.length; ++P)
    o[t[P]] = P;
  let a = i.length;
  for (; i[a - 1] === "="; )
    --a;
  const h = new Uint8Array(a * e / 8 | 0);
  let p = 0, v = 0, y = 0;
  for (let P = 0; P < a; ++P) {
    const S = o[i[P]];
    if (S === void 0)
      throw new SyntaxError(`Non-${s} character`);
    v = v << e | S, p += e, p >= 8 && (p -= 8, h[y++] = 255 & v >> p);
  }
  if (p >= e || 255 & v << 8 - p)
    throw new SyntaxError("Unexpected end of data");
  return h;
}, _6 = (i, t, e) => {
  const s = t[t.length - 1] === "=", o = (1 << e) - 1;
  let a = "", h = 0, p = 0;
  for (let v = 0; v < i.length; ++v)
    for (p = p << 8 | i[v], h += 8; h > e; )
      h -= e, a += t[o & p >> h];
  if (h && (a += t[o & p << e - h]), s)
    for (; a.length * e & 7; )
      a += "=";
  return a;
}, Le = ({ name: i, prefix: t, bitsPerChar: e, alphabet: s }) => Ta({ prefix: t, name: i, encode(o) {
  return _6(o, s, e);
}, decode(o) {
  return b6(o, s, e, i);
} }), A6 = Ta({ prefix: "\0", name: "identity", encode: (i) => g6(i), decode: (i) => d6(i) });
var E6 = Object.freeze({ __proto__: null, identity: A6 });
const I6 = Le({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var S6 = Object.freeze({ __proto__: null, base2: I6 });
const P6 = Le({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var M6 = Object.freeze({ __proto__: null, base8: P6 });
const C6 = yo({ prefix: "9", name: "base10", alphabet: "0123456789" });
var x6 = Object.freeze({ __proto__: null, base10: C6 });
const N6 = Le({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), R6 = Le({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var O6 = Object.freeze({ __proto__: null, base16: N6, base16upper: R6 });
const T6 = Le({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), F6 = Le({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), D6 = Le({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), q6 = Le({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), k6 = Le({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), B6 = Le({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), U6 = Le({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), $6 = Le({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), j6 = Le({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var z6 = Object.freeze({ __proto__: null, base32: T6, base32upper: F6, base32pad: D6, base32padupper: q6, base32hex: k6, base32hexupper: B6, base32hexpad: U6, base32hexpadupper: $6, base32z: j6 });
const L6 = yo({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), K6 = yo({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var H6 = Object.freeze({ __proto__: null, base36: L6, base36upper: K6 });
const V6 = yo({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Q6 = yo({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var G6 = Object.freeze({ __proto__: null, base58btc: V6, base58flickr: Q6 });
const J6 = Le({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Y6 = Le({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), W6 = Le({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), X6 = Le({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Z6 = Object.freeze({ __proto__: null, base64: J6, base64pad: Y6, base64url: W6, base64urlpad: X6 });
const Wd = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), tE = Wd.reduce((i, t, e) => (i[e] = t, i), []), eE = Wd.reduce((i, t, e) => (i[t.codePointAt(0)] = e, i), []);
function rE(i) {
  return i.reduce((t, e) => (t += tE[e], t), "");
}
function iE(i) {
  const t = [];
  for (const e of i) {
    const s = eE[e.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${e}`);
    t.push(s);
  }
  return new Uint8Array(t);
}
const sE = Ta({ prefix: "🚀", name: "base256emoji", encode: rE, decode: iE });
var nE = Object.freeze({ __proto__: null, base256emoji: sE }), oE = Xd, gp = 128, aE = 127, cE = ~aE, hE = Math.pow(2, 31);
function Xd(i, t, e) {
  t = t || [], e = e || 0;
  for (var s = e; i >= hE; )
    t[e++] = i & 255 | gp, i /= 128;
  for (; i & cE; )
    t[e++] = i & 255 | gp, i >>>= 7;
  return t[e] = i | 0, Xd.bytes = e - s + 1, t;
}
var uE = Ch, lE = 128, mp = 127;
function Ch(i, s) {
  var e = 0, s = s || 0, o = 0, a = s, h, p = i.length;
  do {
    if (a >= p)
      throw Ch.bytes = 0, new RangeError("Could not decode varint");
    h = i[a++], e += o < 28 ? (h & mp) << o : (h & mp) * Math.pow(2, o), o += 7;
  } while (h >= lE);
  return Ch.bytes = a - s, e;
}
var fE = Math.pow(2, 7), pE = Math.pow(2, 14), dE = Math.pow(2, 21), gE = Math.pow(2, 28), mE = Math.pow(2, 35), vE = Math.pow(2, 42), yE = Math.pow(2, 49), wE = Math.pow(2, 56), bE = Math.pow(2, 63), _E = function(i) {
  return i < fE ? 1 : i < pE ? 2 : i < dE ? 3 : i < gE ? 4 : i < mE ? 5 : i < vE ? 6 : i < yE ? 7 : i < wE ? 8 : i < bE ? 9 : 10;
}, AE = { encode: oE, decode: uE, encodingLength: _E }, Zd = AE;
const vp = (i, t, e = 0) => (Zd.encode(i, t, e), t), yp = (i) => Zd.encodingLength(i), xh = (i, t) => {
  const e = t.byteLength, s = yp(i), o = s + yp(e), a = new Uint8Array(o + e);
  return vp(i, a, 0), vp(e, a, s), a.set(t, o), new EE(i, e, t, a);
};
class EE {
  constructor(t, e, s, o) {
    this.code = t, this.size = e, this.digest = s, this.bytes = o;
  }
}
const t0 = ({ name: i, code: t, encode: e }) => new IE(i, t, e);
class IE {
  constructor(t, e, s) {
    this.name = t, this.code = e, this.encode = s;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const e = this.encode(t);
      return e instanceof Uint8Array ? xh(this.code, e) : e.then((s) => xh(this.code, s));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const e0 = (i) => async (t) => new Uint8Array(await crypto.subtle.digest(i, t)), SE = t0({ name: "sha2-256", code: 18, encode: e0("SHA-256") }), PE = t0({ name: "sha2-512", code: 19, encode: e0("SHA-512") });
var ME = Object.freeze({ __proto__: null, sha256: SE, sha512: PE });
const r0 = 0, CE = "identity", i0 = Jd, xE = (i) => xh(r0, i0(i)), NE = { code: r0, name: CE, encode: i0, digest: xE };
var RE = Object.freeze({ __proto__: null, identity: NE });
new TextEncoder(), new TextDecoder();
const wp = { ...E6, ...S6, ...M6, ...x6, ...O6, ...z6, ...H6, ...G6, ...Z6, ...nE };
({ ...ME, ...RE });
function OE(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(i) : new Uint8Array(i);
}
function s0(i, t, e, s) {
  return { name: i, prefix: t, encoder: { name: i, prefix: t, encode: e }, decoder: { decode: s } };
}
const bp = s0("utf8", "u", (i) => "u" + new TextDecoder("utf8").decode(i), (i) => new TextEncoder().encode(i.substring(1))), ch = s0("ascii", "a", (i) => {
  let t = "a";
  for (let e = 0; e < i.length; e++)
    t += String.fromCharCode(i[e]);
  return t;
}, (i) => {
  i = i.substring(1);
  const t = OE(i.length);
  for (let e = 0; e < i.length; e++)
    t[e] = i.charCodeAt(e);
  return t;
}), TE = { utf8: bp, "utf-8": bp, hex: wp.base16, latin1: ch, ascii: ch, binary: ch, ...wp };
function FE(i, t = "utf8") {
  const e = TE[t];
  if (!e)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(i, "utf8") : e.decoder.decode(`${e.prefix}${i}`);
}
const n0 = "wc", o0 = 2, Gh = "core", Pi = `${n0}@2:${Gh}:`, DE = { name: Gh, logger: "error" }, qE = { database: ":memory:" }, kE = "crypto", _p = "client_ed25519_seed", BE = tt.ONE_DAY, UE = "keychain", $E = "0.3", jE = "messages", zE = "0.3", LE = tt.SIX_HOURS, KE = "publisher", a0 = "irn", HE = "error", c0 = "wss://relay.walletconnect.org", VE = "relayer", hr = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, QE = "_subscription", Or = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, GE = 0.1, h0 = "2.15.3", JE = 1e4, YE = "0.3", WE = "WALLETCONNECT_CLIENT_ID", yi = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, XE = "subscription", ZE = "0.3", tI = tt.FIVE_SECONDS * 1e3, eI = "pairing", rI = "0.3", Gn = { wc_pairingDelete: { req: { ttl: tt.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: tt.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: tt.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: tt.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: tt.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: tt.ONE_DAY, prompt: !1, tag: 0 } } }, cn = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Vr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, iI = "history", sI = "0.3", nI = "expirer", Tr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, oI = "0.3", aI = "verify-api", cI = "https://verify.walletconnect.com", u0 = "https://verify.walletconnect.org", oo = u0, hI = `${oo}/v3`, uI = [cI, u0], lI = "echo", fI = "https://echo.walletconnect.com", di = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" }, Qi = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" }, Qr = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" }, Ss = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" }, Ps = { authenticated_session_approve_started: "authenticated_session_approve_started", authenticated_session_not_expired: "authenticated_session_not_expired", chains_caip2_compliant: "chains_caip2_compliant", chains_evm_compliant: "chains_evm_compliant", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve", authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success" }, Jn = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", missing_session_authenticate_request: "missing_session_authenticate_request", session_authenticate_request_expired: "session_authenticate_request_expired", chains_caip2_compliant_failure: "chains_caip2_compliant_failure", chains_evm_compliant_failure: "chains_evm_compliant_failure", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" }, pI = 0.1, dI = "event-client", gI = 86400, mI = "https://pulse.walletconnect.com/batch";
class vI {
  constructor(t, e) {
    this.core = t, this.logger = e, this.keychain = /* @__PURE__ */ new Map(), this.name = UE, this.version = $E, this.initialized = !1, this.storagePrefix = Pi, this.init = async () => {
      if (!this.initialized) {
        const s = await this.getKeyChain();
        typeof s < "u" && (this.keychain = s), this.initialized = !0;
      }
    }, this.has = (s) => (this.isInitialized(), this.keychain.has(s)), this.set = async (s, o) => {
      this.isInitialized(), this.keychain.set(s, o), await this.persist();
    }, this.get = (s) => {
      this.isInitialized();
      const o = this.keychain.get(s);
      if (typeof o > "u") {
        const { message: a } = G("NO_MATCHING_KEY", `${this.name}: ${s}`);
        throw new Error(a);
      }
      return o;
    }, this.del = async (s) => {
      this.isInitialized(), this.keychain.delete(s), await this.persist();
    }, this.core = t, this.logger = tr(e, this.name);
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, id(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? sd(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class yI {
  constructor(t, e, s) {
    this.core = t, this.logger = e, this.name = kE, this.randomSessionIdentifier = Ph(), this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (o) => (this.isInitialized(), this.keychain.has(o)), this.getClientId = async () => {
      this.isInitialized();
      const o = await this.getClientSeed(), a = If(o);
      return Cb(a.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const o = J3();
      return this.setPrivateKey(o.publicKey, o.privateKey);
    }, this.signJWT = async (o) => {
      this.isInitialized();
      const a = await this.getClientSeed(), h = If(a), p = this.randomSessionIdentifier;
      return await xb(p, o, BE, h);
    }, this.generateSharedKey = (o, a, h) => {
      this.isInitialized();
      const p = this.getPrivateKey(o), v = Y3(p, a);
      return this.setSymKey(v, h);
    }, this.setSymKey = async (o, a) => {
      this.isInitialized();
      const h = a || ya(o);
      return await this.keychain.set(h, o), h;
    }, this.deleteKeyPair = async (o) => {
      this.isInitialized(), await this.keychain.del(o);
    }, this.deleteSymKey = async (o) => {
      this.isInitialized(), await this.keychain.del(o);
    }, this.encode = async (o, a, h) => {
      this.isInitialized();
      const p = Vd(h), v = Nb(a);
      if (sp(p)) {
        const O = p.senderPublicKey, F = p.receiverPublicKey;
        o = await this.generateSharedKey(O, F);
      }
      const y = this.getSymKey(o), { type: P, senderPublicKey: S } = p;
      return X3({ type: P, symKey: y, message: v, senderPublicKey: S });
    }, this.decode = async (o, a, h) => {
      this.isInitialized();
      const p = eA(a, h);
      if (sp(p)) {
        const v = p.receiverPublicKey, y = p.senderPublicKey;
        o = await this.generateSharedKey(v, y);
      }
      try {
        const v = this.getSymKey(o), y = Z3({ symKey: v, encoded: a });
        return Rb(y);
      } catch (v) {
        this.logger.error(`Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`), this.logger.error(v);
      }
    }, this.getPayloadType = (o) => {
      const a = Pa(o);
      return vo(a.type);
    }, this.getPayloadSenderPublicKey = (o) => {
      const a = Pa(o);
      return a.senderPublicKey ? qr(a.senderPublicKey, Xe) : void 0;
    }, this.core = t, this.logger = tr(e, this.name), this.keychain = s || new vI(this.core, this.logger);
  }
  get context() {
    return _r(this.logger);
  }
  async setPrivateKey(t, e) {
    return await this.keychain.set(t, e), t;
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  async getClientSeed() {
    let t = "";
    try {
      t = this.keychain.get(_p);
    } catch {
      t = Ph(), await this.keychain.set(_p, t);
    }
    return FE(t, "base16");
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class wI extends t6 {
  constructor(t, e) {
    super(t, e), this.logger = t, this.core = e, this.messages = /* @__PURE__ */ new Map(), this.name = jE, this.version = zE, this.initialized = !1, this.storagePrefix = Pi, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s = await this.getRelayerMessages();
          typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (s, o) => {
      this.isInitialized();
      const a = Ji(o);
      let h = this.messages.get(s);
      return typeof h > "u" && (h = {}), typeof h[a] < "u" || (h[a] = o, this.messages.set(s, h), await this.persist()), a;
    }, this.get = (s) => {
      this.isInitialized();
      let o = this.messages.get(s);
      return typeof o > "u" && (o = {}), o;
    }, this.has = (s, o) => {
      this.isInitialized();
      const a = this.get(s), h = Ji(o);
      return typeof a[h] < "u";
    }, this.del = async (s) => {
      this.isInitialized(), this.messages.delete(s), await this.persist();
    }, this.logger = tr(t, this.name), this.core = e;
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, id(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? sd(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class bI extends e6 {
  constructor(t, e) {
    super(t, e), this.relayer = t, this.logger = e, this.events = new gs.EventEmitter(), this.name = KE, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = tt.toMiliseconds(tt.ONE_MINUTE), this.failedPublishTimeout = tt.toMiliseconds(tt.ONE_SECOND), this.needsTransportRestart = !1, this.publish = async (s, o, a) => {
      var h;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: o, opts: a } });
      const p = (a == null ? void 0 : a.ttl) || LE, v = Mh(a), y = (a == null ? void 0 : a.prompt) || !1, P = (a == null ? void 0 : a.tag) || 0, S = (a == null ? void 0 : a.id) || an().toString(), O = { topic: s, message: o, opts: { ttl: p, relay: v, prompt: y, tag: P, id: S, attestation: a == null ? void 0 : a.attestation } }, F = `Failed to publish payload, please try again. id:${S} tag:${P}`, q = Date.now();
      let K, H = 1;
      try {
        for (; K === void 0; ) {
          if (Date.now() - q > this.publishTimeout)
            throw new Error(F);
          this.logger.trace({ id: S, attempts: H }, `publisher.publish - attempt ${H}`), K = await await hn(this.rpcPublish(s, o, p, v, y, P, S, a == null ? void 0 : a.attestation).catch((Q) => this.logger.warn(Q)), this.publishTimeout, F), H++, K || await new Promise((Q) => setTimeout(Q, this.failedPublishTimeout));
        }
        this.relayer.events.emit(hr.publish, O), this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { id: S, topic: s, message: o, opts: a } });
      } catch (Q) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(Q), (h = a == null ? void 0 : a.internal) != null && h.throwOnFailedPublish)
          throw Q;
        this.queue.set(S, O);
      }
    }, this.on = (s, o) => {
      this.events.on(s, o);
    }, this.once = (s, o) => {
      this.events.once(s, o);
    }, this.off = (s, o) => {
      this.events.off(s, o);
    }, this.removeListener = (s, o) => {
      this.events.removeListener(s, o);
    }, this.relayer = t, this.logger = tr(e, this.name), this.registerEventListeners();
  }
  get context() {
    return _r(this.logger);
  }
  rpcPublish(t, e, s, o, a, h, p, v) {
    var y, P, S, O;
    const F = { method: to(o.protocol).publish, params: { topic: t, message: e, ttl: s, prompt: a, tag: h, attestation: v }, id: p };
    return cr((y = F.params) == null ? void 0 : y.prompt) && ((P = F.params) == null || delete P.prompt), cr((S = F.params) == null ? void 0 : S.tag) && ((O = F.params) == null || delete O.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: F }), this.relayer.request(F);
  }
  removeRequestFromQueue(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: e, message: s, opts: o } = t;
      await this.publish(e, s, o);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(lo.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(hr.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(hr.message_ack, (t) => {
      this.removeRequestFromQueue(t.id.toString());
    });
  }
}
class _I {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (t, e) => {
      const s = this.get(t);
      this.exists(t, e) || this.map.set(t, [...s, e]);
    }, this.get = (t) => this.map.get(t) || [], this.exists = (t, e) => this.get(t).includes(e), this.delete = (t, e) => {
      if (typeof e > "u") {
        this.map.delete(t);
        return;
      }
      if (!this.map.has(t))
        return;
      const s = this.get(t);
      if (!this.exists(t, e))
        return;
      const o = s.filter((a) => a !== e);
      if (!o.length) {
        this.map.delete(t);
        return;
      }
      this.map.set(t, o);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var AI = Object.defineProperty, EI = Object.defineProperties, II = Object.getOwnPropertyDescriptors, Ap = Object.getOwnPropertySymbols, SI = Object.prototype.hasOwnProperty, PI = Object.prototype.propertyIsEnumerable, Ep = (i, t, e) => t in i ? AI(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, Yn = (i, t) => {
  for (var e in t || (t = {}))
    SI.call(t, e) && Ep(i, e, t[e]);
  if (Ap)
    for (var e of Ap(t))
      PI.call(t, e) && Ep(i, e, t[e]);
  return i;
}, hh = (i, t) => EI(i, II(t));
class MI extends s6 {
  constructor(t, e) {
    super(t, e), this.relayer = t, this.logger = e, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new _I(), this.events = new gs.EventEmitter(), this.name = XE, this.version = ZE, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Pi, this.subscribeTimeout = tt.toMiliseconds(tt.ONE_MINUTE), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (s, o) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: o } });
      try {
        const a = Mh(o), h = { topic: s, relay: a };
        this.pending.set(s, h);
        const p = await this.rpcSubscribe(s, a);
        return typeof p == "string" && (this.onSubscribe(p, h), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: o } })), p;
      } catch (a) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(a), a;
      }
    }, this.unsubscribe = async (s, o) => {
      await this.restartToComplete(), this.isInitialized(), typeof (o == null ? void 0 : o.id) < "u" ? await this.unsubscribeById(s, o.id, o) : await this.unsubscribeByTopic(s, o);
    }, this.isSubscribed = async (s) => {
      if (this.topics.includes(s))
        return !0;
      const o = `${this.pendingSubscriptionWatchLabel}_${s}`;
      return await new Promise((a, h) => {
        const p = new tt.Watch();
        p.start(o);
        const v = setInterval(() => {
          !this.pending.has(s) && this.topics.includes(s) && (clearInterval(v), p.stop(o), a(!0)), p.elapsed(o) >= tI && (clearInterval(v), p.stop(o), h(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => !1);
    }, this.on = (s, o) => {
      this.events.on(s, o);
    }, this.once = (s, o) => {
      this.events.once(s, o);
    }, this.off = (s, o) => {
      this.events.off(s, o);
    }, this.removeListener = (s, o) => {
      this.events.removeListener(s, o);
    }, this.start = async () => {
      await this.onConnect();
    }, this.stop = async () => {
      await this.onDisconnect();
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = t, this.logger = tr(e, this.name), this.clientId = "";
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(t, e) {
    let s = !1;
    try {
      s = this.getSubscription(t).topic === e;
    } catch {
    }
    return s;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(t, e) {
    const s = this.topicMap.get(t);
    await Promise.all(s.map(async (o) => await this.unsubscribeById(t, o, e)));
  }
  async unsubscribeById(t, e, s) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: e, opts: s } });
    try {
      const o = Mh(s);
      await this.rpcUnsubscribe(t, e, o);
      const a = Jt("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, e, a), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: e, opts: s } });
    } catch (o) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(o), o;
    }
  }
  async rpcSubscribe(t, e) {
    const s = { method: to(e.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await hn(this.relayer.request(s).catch((o) => this.logger.warn(o)), this.subscribeTimeout) ? Ji(t + this.clientId) : null;
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(hr.connection_stalled);
    }
    return null;
  }
  async rpcBatchSubscribe(t) {
    if (!t.length)
      return;
    const e = t[0].relay, s = { method: to(e.protocol).batchSubscribe, params: { topics: t.map((o) => o.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await hn(this.relayer.request(s).catch((o) => this.logger.warn(o)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(hr.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(t) {
    if (!t.length)
      return;
    const e = t[0].relay, s = { method: to(e.protocol).batchFetchMessages, params: { topics: t.map((a) => a.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    let o;
    try {
      o = await await hn(this.relayer.request(s).catch((a) => this.logger.warn(a)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(hr.connection_stalled);
    }
    return o;
  }
  rpcUnsubscribe(t, e, s) {
    const o = { method: to(s.protocol).unsubscribe, params: { topic: t, id: e } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: o }), this.relayer.request(o);
  }
  onSubscribe(t, e) {
    this.setSubscription(t, hh(Yn({}, e), { id: t })), this.pending.delete(e.topic);
  }
  onBatchSubscribe(t) {
    t.length && t.forEach((e) => {
      this.setSubscription(e.id, Yn({}, e)), this.pending.delete(e.topic);
    });
  }
  async onUnsubscribe(t, e, s) {
    this.events.removeAllListeners(e), this.hasSubscription(e, t) && this.deleteSubscription(e, s), await this.relayer.messages.del(t);
  }
  async setRelayerSubscriptions(t) {
    await this.relayer.core.storage.setItem(this.storageKey, t);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(t, e) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: t, subscription: e }), this.addSubscription(t, e);
  }
  addSubscription(t, e) {
    this.subscriptions.set(t, Yn({}, e)), this.topicMap.set(e.topic, t), this.events.emit(yi.created, e);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const e = this.subscriptions.get(t);
    if (!e) {
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return e;
  }
  deleteSubscription(t, e) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: t, reason: e });
    const s = this.getSubscription(t);
    this.subscriptions.delete(t), this.topicMap.delete(s.topic, t), this.events.emit(yi.deleted, hh(Yn({}, s), { reason: e }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(yi.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let e = 0; e < t; e++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchFetchMessages(s), await this.batchSubscribe(s);
      }
    }
    this.events.emit(yi.resubscribed);
  }
  async restore() {
    try {
      const t = await this.getRelayerSubscriptions();
      if (typeof t > "u" || !t.length)
        return;
      if (this.subscriptions.size) {
        const { message: e } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(e);
      }
      this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t);
    }
  }
  async batchSubscribe(t) {
    if (!t.length)
      return;
    const e = await this.rpcBatchSubscribe(t);
    Si(e) && this.onBatchSubscribe(e.map((s, o) => hh(Yn({}, t[o]), { id: s })));
  }
  async batchFetchMessages(t) {
    if (!t.length)
      return;
    this.logger.trace(`Fetching batch messages for ${t.length} subscriptions`);
    const e = await this.rpcBatchFetchMessages(t);
    e && e.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(e.messages));
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || !this.relayer.connected)
      return;
    const t = [];
    this.pending.forEach((e) => {
      t.push(e);
    }), await this.batchSubscribe(t), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = []);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(lo.pulse, async () => {
      await this.checkPending();
    }), this.events.on(yi.created, async (t) => {
      const e = yi.created;
      this.logger.info(`Emitting ${e}`), this.logger.debug({ type: "event", event: e, data: t }), await this.persist();
    }), this.events.on(yi.deleted, async (t) => {
      const e = yi.deleted;
      this.logger.info(`Emitting ${e}`), this.logger.debug({ type: "event", event: e, data: t }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((t) => {
      const e = setInterval(() => {
        this.restartInProgress || (clearInterval(e), t());
      }, this.pollingInterval);
    });
  }
}
var CI = Object.defineProperty, Ip = Object.getOwnPropertySymbols, xI = Object.prototype.hasOwnProperty, NI = Object.prototype.propertyIsEnumerable, Sp = (i, t, e) => t in i ? CI(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, RI = (i, t) => {
  for (var e in t || (t = {}))
    xI.call(t, e) && Sp(i, e, t[e]);
  if (Ip)
    for (var e of Ip(t))
      NI.call(t, e) && Sp(i, e, t[e]);
  return i;
};
class OI extends r6 {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new gs.EventEmitter(), this.name = VE, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.heartBeatTimeout = tt.toMiliseconds(tt.THIRTY_SECONDS + tt.ONE_SECOND), this.request = async (e) => {
      var s, o;
      this.logger.debug("Publishing Request Payload");
      const a = e.id || an().toString();
      await this.toEstablishConnection();
      try {
        const h = this.provider.request(e);
        this.requestsInFlight.set(a, { promise: h, request: e }), this.logger.trace({ id: a, method: e.method, topic: (s = e.params) == null ? void 0 : s.topic }, "relayer.request - attempt to publish...");
        const p = await new Promise(async (v, y) => {
          const P = () => {
            y(new Error(`relayer.request - publish interrupted, id: ${a}`));
          };
          this.provider.on(Or.disconnect, P);
          const S = await h;
          this.provider.off(Or.disconnect, P), v(S);
        });
        return this.logger.trace({ id: a, method: e.method, topic: (o = e.params) == null ? void 0 : o.topic }, "relayer.request - published"), p;
      } catch (h) {
        throw this.logger.debug(`Failed to Publish Request: ${a}`), h;
      } finally {
        this.requestsInFlight.delete(a);
      }
    }, this.resetPingTimeout = () => {
      if (ao())
        try {
          clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
            var e, s, o;
            (o = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null || o.terminate();
          }, this.heartBeatTimeout);
        } catch (e) {
          this.logger.warn(e);
        }
    }, this.onPayloadHandler = (e) => {
      this.onProviderPayload(e), this.resetPingTimeout();
    }, this.onConnectHandler = () => {
      this.logger.trace("relayer connected"), this.startPingTimeout(), this.events.emit(hr.connect);
    }, this.onDisconnectHandler = () => {
      this.logger.trace("relayer disconnected"), this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (e) => {
      this.logger.error(e), this.events.emit(hr.error, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(Or.payload, this.onPayloadHandler), this.provider.on(Or.connect, this.onConnectHandler), this.provider.on(Or.disconnect, this.onDisconnectHandler), this.provider.on(Or.error, this.onProviderErrorHandler);
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? tr(t.logger, this.name) : Fh(Na({ level: t.logger || HE })), this.messages = new wI(this.logger, t.core), this.subscriber = new MI(this, this.logger), this.publisher = new bI(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || c0, this.projectId = t.projectId, this.bundleId = Ub(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), await this.transportOpen(), this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && this.subscriber.pending.size === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, JE);
  }
  get context() {
    return _r(this.logger);
  }
  get connected() {
    var t, e, s;
    return ((s = (e = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : e.socket) == null ? void 0 : s.readyState) === 1;
  }
  get connecting() {
    var t, e, s;
    return ((s = (e = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : e.socket) == null ? void 0 : s.readyState) === 0;
  }
  async publish(t, e, s) {
    this.isInitialized(), await this.publisher.publish(t, e, s), await this.recordMessageEvent({ topic: t, message: e, publishedAt: Date.now() });
  }
  async subscribe(t, e) {
    var s;
    this.isInitialized();
    let o = ((s = this.subscriber.topicMap.get(t)) == null ? void 0 : s[0]) || "", a;
    const h = (p) => {
      p.topic === t && (this.subscriber.off(yi.created, h), a());
    };
    return await Promise.all([new Promise((p) => {
      a = p, this.subscriber.on(yi.created, h);
    }), new Promise(async (p) => {
      o = await this.subscriber.subscribe(t, e) || o, p();
    })]), o;
  }
  async unsubscribe(t, e) {
    this.isInitialized(), await this.subscriber.unsubscribe(t, e);
  }
  on(t, e) {
    this.events.on(t, e);
  }
  once(t, e) {
    this.events.once(t, e);
  }
  off(t, e) {
    this.events.off(t, e);
  }
  removeListener(t, e) {
    this.events.removeListener(t, e);
  }
  async transportDisconnect() {
    if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0)
      try {
        await Promise.all(Array.from(this.requestsInFlight.values()).map((t) => t.promise));
      } catch (t) {
        this.logger.warn(t);
      }
    this.hasExperiencedNetworkDisruption || this.connected ? await hn(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, await this.transportDisconnect();
  }
  async transportOpen(t) {
    await this.confirmOnlineStateOrThrow(), t && t !== this.relayUrl && (this.relayUrl = t, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
    try {
      await new Promise(async (e, s) => {
        const o = () => {
          this.provider.off(Or.disconnect, o), s(new Error("Connection interrupted while trying to subscribe"));
        };
        this.provider.on(Or.disconnect, o), await hn(this.provider.connect(), tt.toMiliseconds(tt.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((a) => {
          s(a);
        }).finally(() => {
          clearTimeout(this.reconnectTimeout), this.reconnectTimeout = void 0;
        }), this.subscriber.start().catch((a) => {
          this.logger.error(a), this.onDisconnectHandler();
        }), this.hasExperiencedNetworkDisruption = !1, e();
      });
    } catch (e) {
      this.logger.error(e);
      const s = e;
      if (this.hasExperiencedNetworkDisruption = !0, !this.isConnectionStalled(s.message))
        throw e;
    } finally {
      this.connectionAttemptInProgress = !1;
    }
  }
  async restartTransport(t) {
    this.connectionAttemptInProgress || (this.relayUrl = t || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await dp())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(t) {
    if ((t == null ? void 0 : t.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const e = t.sort((s, o) => s.publishedAt - o.publishedAt);
    this.logger.trace(`Batch of ${e.length} message events sorted`);
    for (const s of e)
      try {
        await this.onMessageEvent(s);
      } catch (o) {
        this.logger.warn(o);
      }
    this.logger.trace(`Batch of ${e.length} message events processed`);
  }
  startPingTimeout() {
    var t, e, s, o, a;
    if (ao())
      try {
        (e = (t = this.provider) == null ? void 0 : t.connection) != null && e.socket && ((a = (o = (s = this.provider) == null ? void 0 : s.connection) == null ? void 0 : o.socket) == null || a.once("ping", () => {
          this.resetPingTimeout();
        })), this.resetPingTimeout();
      } catch (h) {
        this.logger.warn(h);
      }
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((e) => t.includes(e));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const t = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new ti(new Ob(Hb({ sdkVersion: h0, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: e, message: s } = t;
    await this.messages.set(e, s);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: e, message: s } = t;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!await this.subscriber.isSubscribed(e))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${e}`), !0;
    const o = this.messages.has(e, s);
    return o && this.logger.debug(`Ignoring duplicate message: ${s}`), o;
  }
  async onProviderPayload(t) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: t }), Dh(t)) {
      if (!t.method.endsWith(QE))
        return;
      const e = t.params, { topic: s, message: o, publishedAt: a, attestation: h } = e.data, p = { topic: s, message: o, publishedAt: a, attestation: h };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(RI({ type: "event", event: e.id }, p)), this.events.emit(e.id, p), await this.acknowledgePayload(t), await this.onMessageEvent(p);
    } else
      qh(t) && this.events.emit(hr.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(hr.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const e = Ra(t.id, !0);
    await this.provider.connection.send(e);
  }
  unregisterProviderListeners() {
    this.provider.off(Or.payload, this.onPayloadHandler), this.provider.off(Or.connect, this.onConnectHandler), this.provider.off(Or.disconnect, this.onDisconnectHandler), this.provider.off(Or.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let t = await dp();
    JA(async (e) => {
      t !== e && (t = e, e ? await this.restartTransport().catch((s) => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
    });
  }
  async onProviderDisconnect() {
    await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(hr.disconnect), this.connectionAttemptInProgress = !1, !this.transportExplicitlyClosed && (this.reconnectTimeout || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((t) => this.logger.error(t));
    }, tt.toMiliseconds(GE))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((t) => {
      const e = setInterval(() => {
        this.connected && (clearInterval(e), t());
      }, this.connectionStatusPollingInterval);
    }), await this.transportOpen());
  }
}
var TI = Object.defineProperty, Pp = Object.getOwnPropertySymbols, FI = Object.prototype.hasOwnProperty, DI = Object.prototype.propertyIsEnumerable, Mp = (i, t, e) => t in i ? TI(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, Cp = (i, t) => {
  for (var e in t || (t = {}))
    FI.call(t, e) && Mp(i, e, t[e]);
  if (Pp)
    for (var e of Pp(t))
      DI.call(t, e) && Mp(i, e, t[e]);
  return i;
};
class Ds extends i6 {
  constructor(t, e, s, o = Pi, a = void 0) {
    super(t, e, s, o), this.core = t, this.logger = e, this.name = s, this.map = /* @__PURE__ */ new Map(), this.version = YE, this.cached = [], this.initialized = !1, this.storagePrefix = Pi, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((h) => {
        this.getKey && h !== null && !cr(h) ? this.map.set(this.getKey(h), h) : PA(h) ? this.map.set(h.id, h) : MA(h) && this.map.set(h.topic, h);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (h, p) => {
      this.isInitialized(), this.map.has(h) ? await this.update(h, p) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: h, value: p }), this.map.set(h, p), await this.persist());
    }, this.get = (h) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: h }), this.getData(h)), this.getAll = (h) => (this.isInitialized(), h ? this.values.filter((p) => Object.keys(h).every((v) => Ib(p[v], h[v]))) : this.values), this.update = async (h, p) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: h, update: p });
      const v = Cp(Cp({}, this.getData(h)), p);
      this.map.set(h, v), await this.persist();
    }, this.delete = async (h, p) => {
      this.isInitialized(), this.map.has(h) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: h, reason: p }), this.map.delete(h), this.addToRecentlyDeleted(h), await this.persist());
    }, this.logger = tr(e, this.name), this.storagePrefix = o, this.getKey = a;
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(t) {
    this.recentlyDeleted.push(t), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(t) {
    const e = this.map.get(t);
    if (!e) {
      if (this.recentlyDeleted.includes(t)) {
        const { message: o } = G("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${t}`);
        throw this.logger.error(o), new Error(o);
      }
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(s), new Error(s);
    }
    return e;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const t = await this.getDataStore();
      if (typeof t > "u" || !t.length)
        return;
      if (this.map.size) {
        const { message: e } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(e), new Error(e);
      }
      this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class qI {
  constructor(t, e) {
    this.core = t, this.logger = e, this.name = eI, this.version = rI, this.events = new kh(), this.initialized = !1, this.storagePrefix = Pi, this.ignoredPayloadTypes = [Xi], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: s }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s])];
    }, this.create = async (s) => {
      this.isInitialized();
      const o = Ph(), a = await this.core.crypto.setSymKey(o), h = je(tt.FIVE_MINUTES), p = { protocol: a0 }, v = { topic: a, expiry: h, relay: p, active: !1 }, y = mA({ protocol: this.core.protocol, version: this.core.version, topic: a, symKey: o, relay: p, expiryTimestamp: h, methods: s == null ? void 0 : s.methods });
      return this.core.expirer.set(a, h), await this.pairings.set(a, v), await this.core.relayer.subscribe(a), { topic: a, uri: y };
    }, this.pair = async (s) => {
      this.isInitialized();
      const o = this.core.eventClient.createEvent({ properties: { topic: s == null ? void 0 : s.uri, trace: [di.pairing_started] } });
      this.isValidPair(s, o);
      const { topic: a, symKey: h, relay: p, expiryTimestamp: v, methods: y } = cp(s.uri);
      o.props.properties.topic = a, o.addTrace(di.pairing_uri_validation_success), o.addTrace(di.pairing_uri_not_expired);
      let P;
      if (this.pairings.keys.includes(a)) {
        if (P = this.pairings.get(a), o.addTrace(di.existing_pairing), P.active)
          throw o.setError(Qi.active_pairing_already_exists), new Error(`Pairing already exists: ${a}. Please try again with a new connection URI.`);
        o.addTrace(di.pairing_not_expired);
      }
      const S = v || je(tt.FIVE_MINUTES), O = { topic: a, relay: p, expiry: S, active: !1, methods: y };
      this.core.expirer.set(a, S), await this.pairings.set(a, O), o.addTrace(di.store_new_pairing), s.activatePairing && await this.activate({ topic: a }), this.events.emit(cn.create, O), o.addTrace(di.emit_inactive_pairing), this.core.crypto.keychain.has(a) || await this.core.crypto.setSymKey(h, a), o.addTrace(di.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        o.setError(Qi.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(a, { relay: p });
      } catch (F) {
        throw o.setError(Qi.subscribe_pairing_topic_failure), F;
      }
      return o.addTrace(di.subscribe_pairing_topic_success), O;
    }, this.activate = async ({ topic: s }) => {
      this.isInitialized();
      const o = je(tt.THIRTY_DAYS);
      this.core.expirer.set(s, o), await this.pairings.update(s, { active: !0, expiry: o });
    }, this.ping = async (s) => {
      this.isInitialized(), await this.isValidPing(s);
      const { topic: o } = s;
      if (this.pairings.keys.includes(o)) {
        const a = await this.sendRequest(o, "wc_pairingPing", {}), { done: h, resolve: p, reject: v } = Cs();
        this.events.once(It("pairing_ping", a), ({ error: y }) => {
          y ? v(y) : p();
        }), await h();
      }
    }, this.updateExpiry = async ({ topic: s, expiry: o }) => {
      this.isInitialized(), await this.pairings.update(s, { expiry: o });
    }, this.updateMetadata = async ({ topic: s, metadata: o }) => {
      this.isInitialized(), await this.pairings.update(s, { peerMetadata: o });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (s) => {
      this.isInitialized(), await this.isValidDisconnect(s);
      const { topic: o } = s;
      this.pairings.keys.includes(o) && (await this.sendRequest(o, "wc_pairingDelete", Jt("USER_DISCONNECTED")), await this.deletePairing(o));
    }, this.sendRequest = async (s, o, a) => {
      const h = ro(o, a), p = await this.core.crypto.encode(s, h), v = Gn[o].req;
      return this.core.history.set(s, h), this.core.relayer.publish(s, p, v), h.id;
    }, this.sendResult = async (s, o, a) => {
      const h = Ra(s, a), p = await this.core.crypto.encode(o, h), v = await this.core.history.get(o, s), y = Gn[v.request.method].res;
      await this.core.relayer.publish(o, p, y), await this.core.history.resolve(h);
    }, this.sendError = async (s, o, a) => {
      const h = ed(s, a), p = await this.core.crypto.encode(o, h), v = await this.core.history.get(o, s), y = Gn[v.request.method] ? Gn[v.request.method].res : Gn.unregistered_method.res;
      await this.core.relayer.publish(o, p, y), await this.core.history.resolve(h);
    }, this.deletePairing = async (s, o) => {
      await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, Jt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), o ? Promise.resolve() : this.core.expirer.del(s)]);
    }, this.cleanup = async () => {
      const s = this.pairings.getAll().filter((o) => ls(o.expiry));
      await Promise.all(s.map((o) => this.deletePairing(o.topic)));
    }, this.onRelayEventRequest = (s) => {
      const { topic: o, payload: a } = s;
      switch (a.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(o, a);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(o, a);
        default:
          return this.onUnknownRpcMethodRequest(o, a);
      }
    }, this.onRelayEventResponse = async (s) => {
      const { topic: o, payload: a } = s, h = (await this.core.history.get(o, a.id)).request.method;
      switch (h) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(o, a);
        default:
          return this.onUnknownRpcMethodResponse(h);
      }
    }, this.onPairingPingRequest = async (s, o) => {
      const { id: a } = o;
      try {
        this.isValidPing({ topic: s }), await this.sendResult(a, s, !0), this.events.emit(cn.ping, { id: a, topic: s });
      } catch (h) {
        await this.sendError(a, s, h), this.logger.error(h);
      }
    }, this.onPairingPingResponse = (s, o) => {
      const { id: a } = o;
      setTimeout(() => {
        Vi(o) ? this.events.emit(It("pairing_ping", a), {}) : gi(o) && this.events.emit(It("pairing_ping", a), { error: o.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (s, o) => {
      const { id: a } = o;
      try {
        this.isValidDisconnect({ topic: s }), await this.deletePairing(s), this.events.emit(cn.delete, { id: a, topic: s });
      } catch (h) {
        await this.sendError(a, s, h), this.logger.error(h);
      }
    }, this.onUnknownRpcMethodRequest = async (s, o) => {
      const { id: a, method: h } = o;
      try {
        if (this.registeredMethods.includes(h))
          return;
        const p = Jt("WC_METHOD_UNSUPPORTED", h);
        await this.sendError(a, s, p), this.logger.error(p);
      } catch (p) {
        await this.sendError(a, s, p), this.logger.error(p);
      }
    }, this.onUnknownRpcMethodResponse = (s) => {
      this.registeredMethods.includes(s) || this.logger.error(Jt("WC_METHOD_UNSUPPORTED", s));
    }, this.isValidPair = (s, o) => {
      var a;
      if (!or(s)) {
        const { message: p } = G("MISSING_OR_INVALID", `pair() params: ${s}`);
        throw o.setError(Qi.malformed_pairing_uri), new Error(p);
      }
      if (!SA(s.uri)) {
        const { message: p } = G("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
        throw o.setError(Qi.malformed_pairing_uri), new Error(p);
      }
      const h = cp(s == null ? void 0 : s.uri);
      if (!((a = h == null ? void 0 : h.relay) != null && a.protocol)) {
        const { message: p } = G("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw o.setError(Qi.malformed_pairing_uri), new Error(p);
      }
      if (!(h != null && h.symKey)) {
        const { message: p } = G("MISSING_OR_INVALID", "pair() uri#symKey");
        throw o.setError(Qi.malformed_pairing_uri), new Error(p);
      }
      if (h != null && h.expiryTimestamp && tt.toMiliseconds(h == null ? void 0 : h.expiryTimestamp) < Date.now()) {
        o.setError(Qi.pairing_expired);
        const { message: p } = G("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(p);
      }
    }, this.isValidPing = async (s) => {
      if (!or(s)) {
        const { message: a } = G("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(a);
      }
      const { topic: o } = s;
      await this.isValidPairingTopic(o);
    }, this.isValidDisconnect = async (s) => {
      if (!or(s)) {
        const { message: a } = G("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(a);
      }
      const { topic: o } = s;
      await this.isValidPairingTopic(o);
    }, this.isValidPairingTopic = async (s) => {
      if (!Me(s, !1)) {
        const { message: o } = G("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
        throw new Error(o);
      }
      if (!this.pairings.keys.includes(s)) {
        const { message: o } = G("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
        throw new Error(o);
      }
      if (ls(this.pairings.get(s).expiry)) {
        await this.deletePairing(s);
        const { message: o } = G("EXPIRED", `pairing topic: ${s}`);
        throw new Error(o);
      }
    }, this.core = t, this.logger = tr(e, this.name), this.pairings = new Ds(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return _r(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(hr.message, async (t) => {
      const { topic: e, message: s } = t;
      if (!this.pairings.keys.includes(e) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
        return;
      const o = await this.core.crypto.decode(e, s);
      try {
        Dh(o) ? (this.core.history.set(e, o), this.onRelayEventRequest({ topic: e, payload: o })) : qh(o) && (await this.core.history.resolve(o), await this.onRelayEventResponse({ topic: e, payload: o }), this.core.history.delete(e, o.id));
      } catch (a) {
        this.logger.error(a);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Tr.expired, async (t) => {
      const { topic: e } = od(t.target);
      e && this.pairings.keys.includes(e) && (await this.deletePairing(e, !0), this.events.emit(cn.expire, { topic: e }));
    });
  }
}
class kI extends ZA {
  constructor(t, e) {
    super(t, e), this.core = t, this.logger = e, this.records = /* @__PURE__ */ new Map(), this.events = new gs.EventEmitter(), this.name = iI, this.version = sI, this.cached = [], this.initialized = !1, this.storagePrefix = Pi, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (s, o, a) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s, request: o, chainId: a }), this.records.has(o.id))
        return;
      const h = { id: o.id, topic: s, request: { method: o.method, params: o.params || null }, chainId: a, expiry: je(tt.THIRTY_DAYS) };
      this.records.set(h.id, h), this.persist(), this.events.emit(Vr.created, h);
    }, this.resolve = async (s) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s }), !this.records.has(s.id))
        return;
      const o = await this.getRecord(s.id);
      typeof o.response > "u" && (o.response = gi(s) ? { error: s.error } : { result: s.result }, this.records.set(o.id, o), this.persist(), this.events.emit(Vr.updated, o));
    }, this.get = async (s, o) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s, id: o }), await this.getRecord(o)), this.delete = (s, o) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: o }), this.values.forEach((a) => {
        if (a.topic === s) {
          if (typeof o < "u" && a.id !== o)
            return;
          this.records.delete(a.id), this.events.emit(Vr.deleted, a);
        }
      }), this.persist();
    }, this.exists = async (s, o) => (this.isInitialized(), this.records.has(o) ? (await this.getRecord(o)).topic === s : !1), this.on = (s, o) => {
      this.events.on(s, o);
    }, this.once = (s, o) => {
      this.events.once(s, o);
    }, this.off = (s, o) => {
      this.events.off(s, o);
    }, this.removeListener = (s, o) => {
      this.events.removeListener(s, o);
    }, this.logger = tr(e, this.name);
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const t = [];
    return this.values.forEach((e) => {
      if (typeof e.response < "u")
        return;
      const s = { topic: e.topic, request: ro(e.request.method, e.request.params, e.id), chainId: e.chainId };
      return t.push(s);
    }), t;
  }
  async setJsonRpcRecords(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(t) {
    this.isInitialized();
    const e = this.records.get(t);
    if (!e) {
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return e;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Vr.sync);
  }
  async restore() {
    try {
      const t = await this.getJsonRpcRecords();
      if (typeof t > "u" || !t.length)
        return;
      if (this.records.size) {
        const { message: e } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(e), new Error(e);
      }
      this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t);
    }
  }
  registerEventListeners() {
    this.events.on(Vr.created, (t) => {
      const e = Vr.created;
      this.logger.info(`Emitting ${e}`), this.logger.debug({ type: "event", event: e, record: t });
    }), this.events.on(Vr.updated, (t) => {
      const e = Vr.updated;
      this.logger.info(`Emitting ${e}`), this.logger.debug({ type: "event", event: e, record: t });
    }), this.events.on(Vr.deleted, (t) => {
      const e = Vr.deleted;
      this.logger.info(`Emitting ${e}`), this.logger.debug({ type: "event", event: e, record: t });
    }), this.core.heartbeat.on(lo.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let t = !1;
      this.records.forEach((e) => {
        tt.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.records.delete(e.id), this.events.emit(Vr.deleted, e, !1), t = !0);
      }), t && this.persist();
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class BI extends n6 {
  constructor(t, e) {
    super(t, e), this.core = t, this.logger = e, this.expirations = /* @__PURE__ */ new Map(), this.events = new gs.EventEmitter(), this.name = nI, this.version = oI, this.cached = [], this.initialized = !1, this.storagePrefix = Pi, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (s) => {
      try {
        const o = this.formatTarget(s);
        return typeof this.getExpiration(o) < "u";
      } catch {
        return !1;
      }
    }, this.set = (s, o) => {
      this.isInitialized();
      const a = this.formatTarget(s), h = { target: a, expiry: o };
      this.expirations.set(a, h), this.checkExpiry(a, h), this.events.emit(Tr.created, { target: a, expiration: h });
    }, this.get = (s) => {
      this.isInitialized();
      const o = this.formatTarget(s);
      return this.getExpiration(o);
    }, this.del = (s) => {
      if (this.isInitialized(), this.has(s)) {
        const o = this.formatTarget(s), a = this.getExpiration(o);
        this.expirations.delete(o), this.events.emit(Tr.deleted, { target: o, expiration: a });
      }
    }, this.on = (s, o) => {
      this.events.on(s, o);
    }, this.once = (s, o) => {
      this.events.once(s, o);
    }, this.off = (s, o) => {
      this.events.off(s, o);
    }, this.removeListener = (s, o) => {
      this.events.removeListener(s, o);
    }, this.logger = tr(e, this.name);
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(t) {
    if (typeof t == "string")
      return Vb(t);
    if (typeof t == "number")
      return Qb(t);
    const { message: e } = G("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(e);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Tr.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > "u" || !t.length)
        return;
      if (this.expirations.size) {
        const { message: e } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(e), new Error(e);
      }
      this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t);
    }
  }
  getExpiration(t) {
    const e = this.expirations.get(t);
    if (!e) {
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.warn(s), new Error(s);
    }
    return e;
  }
  checkExpiry(t, e) {
    const { expiry: s } = e;
    tt.toMiliseconds(s) - Date.now() <= 0 && this.expire(t, e);
  }
  expire(t, e) {
    this.expirations.delete(t), this.events.emit(Tr.expired, { target: t, expiration: e });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, e) => this.checkExpiry(e, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(lo.pulse, () => this.checkExpirations()), this.events.on(Tr.created, (t) => {
      const e = Tr.created;
      this.logger.info(`Emitting ${e}`), this.logger.debug({ type: "event", event: e, data: t }), this.persist();
    }), this.events.on(Tr.expired, (t) => {
      const e = Tr.expired;
      this.logger.info(`Emitting ${e}`), this.logger.debug({ type: "event", event: e, data: t }), this.persist();
    }), this.events.on(Tr.deleted, (t) => {
      const e = Tr.deleted;
      this.logger.info(`Emitting ${e}`), this.logger.debug({ type: "event", event: e, data: t }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
var ye = {};
Object.defineProperty(ye, "__esModule", { value: !0 }), ye.getLocalStorage = ye.getLocalStorageOrThrow = ye.getCrypto = ye.getCryptoOrThrow = ye.getLocation = ye.getLocationOrThrow = ye.getNavigator = ye.getNavigatorOrThrow = l0 = ye.getDocument = ye.getDocumentOrThrow = ye.getFromWindowOrThrow = ye.getFromWindow = void 0;
function qs(i) {
  let t;
  return typeof window < "u" && typeof window[i] < "u" && (t = window[i]), t;
}
ye.getFromWindow = qs;
function bn(i) {
  const t = qs(i);
  if (!t)
    throw new Error(`${i} is not defined in Window`);
  return t;
}
ye.getFromWindowOrThrow = bn;
function UI() {
  return bn("document");
}
ye.getDocumentOrThrow = UI;
function $I() {
  return qs("document");
}
var l0 = ye.getDocument = $I;
function jI() {
  return bn("navigator");
}
ye.getNavigatorOrThrow = jI;
function zI() {
  return qs("navigator");
}
ye.getNavigator = zI;
function LI() {
  return bn("location");
}
ye.getLocationOrThrow = LI;
function KI() {
  return qs("location");
}
ye.getLocation = KI;
function HI() {
  return bn("crypto");
}
ye.getCryptoOrThrow = HI;
function VI() {
  return qs("crypto");
}
ye.getCrypto = VI;
function QI() {
  return bn("localStorage");
}
ye.getLocalStorageOrThrow = QI;
function GI() {
  return qs("localStorage");
}
ye.getLocalStorage = GI;
class JI extends o6 {
  constructor(t, e, s) {
    super(t, e, s), this.core = t, this.logger = e, this.store = s, this.name = aI, this.verifyUrlV3 = hI, this.storagePrefix = Pi, this.version = o0, this.init = async () => {
      var o;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && tt.toMiliseconds((o = this.publicKey) == null ? void 0 : o.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }, this.register = async (o) => {
      if (!po() || this.isDevEnv)
        return;
      const a = window.location.origin, { id: h, decryptedId: p } = o, v = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${a}&id=${h}&decryptedId=${p}`;
      try {
        const y = l0(), P = this.startAbortTimer(tt.ONE_SECOND * 5), S = await new Promise((O, F) => {
          const q = () => {
            window.removeEventListener("message", H), y.body.removeChild(K), F("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", q);
          const K = y.createElement("iframe");
          K.src = v, K.style.display = "none", K.addEventListener("error", q, { signal: this.abortController.signal });
          const H = (Q) => {
            if (!Q.data)
              return;
            const ht = JSON.parse(Q.data);
            if (ht.type === "verify_attestation") {
              if (vh(ht.attestation).payload.id !== h)
                return;
              clearInterval(P), y.body.removeChild(K), this.abortController.signal.removeEventListener("abort", q), window.removeEventListener("message", H), O(ht.attestation === null ? "" : ht.attestation);
            }
          };
          y.body.appendChild(K), window.addEventListener("message", H, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", S), S;
      } catch (y) {
        this.logger.warn(y);
      }
      return "";
    }, this.resolve = async (o) => {
      if (this.isDevEnv)
        return "";
      const { attestationId: a, hash: h, encryptedId: p } = o;
      if (a === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (a) {
        if (vh(a).payload.id !== p)
          return;
        const y = await this.isValidJwtAttestation(a);
        if (y) {
          if (!y.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return y;
        }
      }
      if (!h)
        return;
      const v = this.getVerifyUrl(o == null ? void 0 : o.verifyUrl);
      return this.fetchAttestation(h, v);
    }, this.fetchAttestation = async (o, a) => {
      this.logger.debug(`resolving attestation: ${o} from url: ${a}`);
      const h = this.startAbortTimer(tt.ONE_SECOND * 5), p = await fetch(`${a}/attestation/${o}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(h), p.status === 200 ? await p.json() : void 0;
    }, this.getVerifyUrl = (o) => {
      let a = o || oo;
      return uI.includes(a) || (this.logger.info(`verify url: ${a}, not included in trusted list, assigning default: ${oo}`), a = oo), a;
    }, this.fetchPublicKey = async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const o = this.startAbortTimer(tt.FIVE_SECONDS), a = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(o), await a.json();
      } catch (o) {
        this.logger.warn(o);
      }
    }, this.persistPublicKey = async (o) => {
      this.logger.debug("persisting public key to local storage", o), await this.store.setItem(this.storeKey, o), this.publicKey = o;
    }, this.removePublicKey = async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }, this.isValidJwtAttestation = async (o) => {
      const a = await this.getPublicKey();
      try {
        if (a)
          return this.validateAttestation(o, a);
      } catch (p) {
        this.logger.error(p), this.logger.warn("error validating attestation");
      }
      const h = await this.fetchAndPersistPublicKey();
      try {
        if (h)
          return this.validateAttestation(o, h);
      } catch (p) {
        this.logger.error(p), this.logger.warn("error validating attestation");
      }
    }, this.getPublicKey = async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey(), this.fetchAndPersistPublicKey = async () => {
      if (this.fetchPromise)
        return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (a) => {
        const h = await this.fetchPublicKey();
        h && (await this.persistPublicKey(h), a(h));
      });
      const o = await this.fetchPromise;
      return this.fetchPromise = void 0, o;
    }, this.validateAttestation = (o, a) => {
      const h = nA(o, a.publicKey), p = { hasExpired: tt.toMiliseconds(h.exp) < Date.now(), payload: h };
      if (p.hasExpired)
        throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: p.payload.origin, isScam: p.payload.isScam, isVerified: p.payload.isVerified };
    }, this.logger = tr(e, this.name), this.abortController = new AbortController(), this.isDevEnv = ao() && Ns.env.IS_VITEST, this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return _r(this.logger);
  }
  startAbortTimer(t) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), tt.toMiliseconds(t));
  }
}
class YI extends a6 {
  constructor(t, e) {
    super(t, e), this.projectId = t, this.logger = e, this.context = lI, this.registerDeviceToken = async (s) => {
      const { clientId: o, token: a, notificationType: h, enableEncrypted: p = !1 } = s, v = `${fI}/${this.projectId}/clients`;
      await fetch(v, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: o, type: h, token: a, always_raw: p }) });
    }, this.logger = tr(e, this.context);
  }
}
var WI = Object.defineProperty, xp = Object.getOwnPropertySymbols, XI = Object.prototype.hasOwnProperty, ZI = Object.prototype.propertyIsEnumerable, Np = (i, t, e) => t in i ? WI(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, Wn = (i, t) => {
  for (var e in t || (t = {}))
    XI.call(t, e) && Np(i, e, t[e]);
  if (xp)
    for (var e of xp(t))
      ZI.call(t, e) && Np(i, e, t[e]);
  return i;
};
class t8 extends c6 {
  constructor(t, e, s = !0) {
    super(t, e, s), this.core = t, this.logger = e, this.context = dI, this.storagePrefix = Pi, this.storageVersion = pI, this.events = /* @__PURE__ */ new Map(), this.shouldPersist = !1, this.createEvent = (o) => {
      const { event: a = "ERROR", type: h = "", properties: { topic: p, trace: v } } = o, y = Yb(), P = this.core.projectId || "", S = Date.now(), O = Wn({ eventId: y, bundleId: P, timestamp: S, props: { event: a, type: h, properties: { topic: p, trace: v } } }, this.setMethods(y));
      return this.telemetryEnabled && (this.events.set(y, O), this.shouldPersist = !0), O;
    }, this.getEvent = (o) => {
      const { eventId: a, topic: h } = o;
      if (a)
        return this.events.get(a);
      const p = Array.from(this.events.values()).find((v) => v.props.properties.topic === h);
      if (p)
        return Wn(Wn({}, p), this.setMethods(p.eventId));
    }, this.deleteEvent = (o) => {
      const { eventId: a } = o;
      this.events.delete(a), this.shouldPersist = !0;
    }, this.setEventListeners = () => {
      this.core.heartbeat.on(lo.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((o) => {
          tt.fromMiliseconds(Date.now()) - tt.fromMiliseconds(o.timestamp) > gI && (this.events.delete(o.eventId), this.shouldPersist = !0);
        });
      });
    }, this.setMethods = (o) => ({ addTrace: (a) => this.addTrace(o, a), setError: (a) => this.setError(o, a) }), this.addTrace = (o, a) => {
      const h = this.events.get(o);
      h && (h.props.properties.trace.push(a), this.events.set(o, h), this.shouldPersist = !0);
    }, this.setError = (o, a) => {
      const h = this.events.get(o);
      h && (h.props.type = a, h.timestamp = Date.now(), this.events.set(o, h), this.shouldPersist = !0);
    }, this.persist = async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1;
    }, this.restore = async () => {
      try {
        const o = await this.core.storage.getItem(this.storageKey) || [];
        if (!o.length)
          return;
        o.forEach((a) => {
          this.events.set(a.eventId, Wn(Wn({}, a), this.setMethods(a.eventId)));
        });
      } catch (o) {
        this.logger.warn(o);
      }
    }, this.submit = async () => {
      if (!this.telemetryEnabled || this.events.size === 0)
        return;
      const o = [];
      for (const [a, h] of this.events)
        h.props.type && o.push(h);
      if (o.length !== 0)
        try {
          if ((await fetch(`${mI}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${h0}`, { method: "POST", body: JSON.stringify(o) })).ok)
            for (const a of o)
              this.events.delete(a.eventId), this.shouldPersist = !0;
        } catch (a) {
          this.logger.warn(a);
        }
    }, this.logger = tr(e, this.context), s ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
}
var e8 = Object.defineProperty, Rp = Object.getOwnPropertySymbols, r8 = Object.prototype.hasOwnProperty, i8 = Object.prototype.propertyIsEnumerable, Op = (i, t, e) => t in i ? e8(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, Tp = (i, t) => {
  for (var e in t || (t = {}))
    r8.call(t, e) && Op(i, e, t[e]);
  if (Rp)
    for (var e of Rp(t))
      i8.call(t, e) && Op(i, e, t[e]);
  return i;
};
class Jh extends XA {
  constructor(t) {
    var e;
    super(t), this.protocol = n0, this.version = o0, this.name = Gh, this.events = new gs.EventEmitter(), this.initialized = !1, this.on = (h, p) => this.events.on(h, p), this.once = (h, p) => this.events.once(h, p), this.off = (h, p) => this.events.off(h, p), this.removeListener = (h, p) => this.events.removeListener(h, p), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || c0, this.customStoragePrefix = t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
    const s = Na({ level: typeof (t == null ? void 0 : t.logger) == "string" && t.logger ? t.logger : DE.logger }), { logger: o, chunkLoggerController: a } = Sb({ opts: s, maxSizeInBytes: t == null ? void 0 : t.maxLogBlobSizeInBytes, loggerOverride: t == null ? void 0 : t.logger });
    this.logChunkController = a, (e = this.logChunkController) != null && e.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var h, p;
      (h = this.logChunkController) != null && h.downloadLogsBlobInBrowser && ((p = this.logChunkController) == null || p.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = tr(o, this.name), this.heartbeat = new Pb(), this.crypto = new yI(this, this.logger, t == null ? void 0 : t.keychain), this.history = new kI(this, this.logger), this.expirer = new BI(this, this.logger), this.storage = t != null && t.storage ? t.storage : new Mb(Tp(Tp({}, qE), t == null ? void 0 : t.storageOptions)), this.relayer = new OI({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new qI(this, this.logger), this.verify = new JI(this, this.logger, this.storage), this.echoClient = new YI(this.projectId || "", this.logger), this.eventClient = new t8(this, this.logger, t == null ? void 0 : t.telemetryEnabled);
  }
  static async init(t) {
    const e = new Jh(t);
    await e.initialize();
    const s = await e.crypto.getClientId();
    return await e.storage.setItem(WE, s), e;
  }
  get context() {
    return _r(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var t;
    return (t = this.logChunkController) == null ? void 0 : t.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (t) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t;
    }
  }
}
const s8 = Jh, f0 = "wc", p0 = 2, d0 = "client", Yh = `${f0}@${p0}:${d0}:`, uh = { name: d0, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Fp = "WALLETCONNECT_DEEPLINK_CHOICE", n8 = "proposal", g0 = "Proposal expired", o8 = "session", rn = tt.SEVEN_DAYS, a8 = "engine", $e = { wc_sessionPropose: { req: { ttl: tt.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: tt.FIVE_MINUTES, prompt: !1, tag: 1101 }, reject: { ttl: tt.FIVE_MINUTES, prompt: !1, tag: 1120 }, autoReject: { ttl: tt.FIVE_MINUTES, prompt: !1, tag: 1121 } }, wc_sessionSettle: { req: { ttl: tt.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: tt.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: tt.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: tt.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: tt.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: tt.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: tt.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: tt.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: tt.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: tt.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: tt.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: tt.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: tt.ONE_DAY, prompt: !1, tag: 1114 }, res: { ttl: tt.ONE_DAY, prompt: !1, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: tt.ONE_HOUR, prompt: !0, tag: 1116 }, res: { ttl: tt.ONE_HOUR, prompt: !1, tag: 1117 }, reject: { ttl: tt.FIVE_MINUTES, prompt: !1, tag: 1118 }, autoReject: { ttl: tt.FIVE_MINUTES, prompt: !1, tag: 1119 } } }, lh = { min: tt.FIVE_MINUTES, max: tt.SEVEN_DAYS }, pi = { idle: "IDLE", active: "ACTIVE" }, c8 = "request", h8 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"], u8 = "wc", l8 = "auth", f8 = "authKeys", p8 = "pairingTopics", d8 = "requests", Fa = `${u8}@${1.5}:${l8}:`, wa = `${Fa}:PUB_KEY`;
var g8 = Object.defineProperty, m8 = Object.defineProperties, v8 = Object.getOwnPropertyDescriptors, Dp = Object.getOwnPropertySymbols, y8 = Object.prototype.hasOwnProperty, w8 = Object.prototype.propertyIsEnumerable, qp = (i, t, e) => t in i ? g8(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, Oe = (i, t) => {
  for (var e in t || (t = {}))
    y8.call(t, e) && qp(i, e, t[e]);
  if (Dp)
    for (var e of Dp(t))
      w8.call(t, e) && qp(i, e, t[e]);
  return i;
}, Ms = (i, t) => m8(i, v8(t));
class b8 extends u6 {
  constructor(t) {
    super(t), this.name = a8, this.events = new kh(), this.initialized = !1, this.requestQueue = { state: pi.idle, queue: [] }, this.sessionRequestQueue = { state: pi.idle, queue: [] }, this.requestQueueDelay = tt.ONE_SECOND, this.expectedPairingMethodMap = /* @__PURE__ */ new Map(), this.recentlyDeletedMap = /* @__PURE__ */ new Map(), this.recentlyDeletedLimit = 200, this.relayMessageCache = [], this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys($e) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, tt.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (e) => {
      await this.isInitialized();
      const s = Ms(Oe({}, e), { requiredNamespaces: e.requiredNamespaces || {}, optionalNamespaces: e.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: o, requiredNamespaces: a, optionalNamespaces: h, sessionProperties: p, relays: v } = s;
      let y = o, P, S = !1;
      try {
        y && (S = this.client.core.pairing.pairings.get(y).active);
      } catch (Y) {
        throw this.client.logger.error(`connect() -> pairing.get(${y}) failed`), Y;
      }
      if (!y || !S) {
        const { topic: Y, uri: et } = await this.client.core.pairing.create();
        y = Y, P = et;
      }
      if (!y) {
        const { message: Y } = G("NO_MATCHING_KEY", `connect() pairing topic: ${y}`);
        throw new Error(Y);
      }
      const O = await this.client.core.crypto.generateKeyPair(), F = $e.wc_sessionPropose.req.ttl || tt.FIVE_MINUTES, q = je(F), K = Oe({ requiredNamespaces: a, optionalNamespaces: h, relays: v ?? [{ protocol: a0 }], proposer: { publicKey: O, metadata: this.client.metadata }, expiryTimestamp: q, pairingTopic: y }, p && { sessionProperties: p }), { reject: H, resolve: Q, done: ht } = Cs(F, g0);
      this.events.once(It("session_connect"), async ({ error: Y, session: et }) => {
        if (Y)
          H(Y);
        else if (et) {
          et.self.publicKey = O;
          const ct = Ms(Oe({}, et), { pairingTopic: K.pairingTopic, requiredNamespaces: K.requiredNamespaces, optionalNamespaces: K.optionalNamespaces });
          await this.client.session.set(et.topic, ct), await this.setExpiry(et.topic, et.expiry), y && await this.client.core.pairing.updateMetadata({ topic: y, metadata: et.peer.metadata }), this.cleanupDuplicatePairings(ct), Q(ct);
        }
      });
      const ut = await this.sendRequest({ topic: y, method: "wc_sessionPropose", params: K, throwOnFailedPublish: !0 });
      return await this.setProposal(ut, Oe({ id: ut }, K)), { uri: P, approval: ht };
    }, this.pair = async (e) => {
      await this.isInitialized();
      try {
        return await this.client.core.pairing.pair(e);
      } catch (s) {
        throw this.client.logger.error("pair() failed"), s;
      }
    }, this.approve = async (e) => {
      var s, o, a;
      const h = this.client.core.eventClient.createEvent({ properties: { topic: (s = e == null ? void 0 : e.id) == null ? void 0 : s.toString(), trace: [Qr.session_approve_started] } });
      try {
        await this.isInitialized();
      } catch (st) {
        throw h.setError(Ss.no_internet_connection), st;
      }
      try {
        await this.isValidProposalId(e == null ? void 0 : e.id);
      } catch (st) {
        throw this.client.logger.error(`approve() -> proposal.get(${e == null ? void 0 : e.id}) failed`), h.setError(Ss.proposal_not_found), st;
      }
      try {
        await this.isValidApprove(e);
      } catch (st) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), h.setError(Ss.session_approve_namespace_validation_failure), st;
      }
      const { id: p, relayProtocol: v, namespaces: y, sessionProperties: P, sessionConfig: S } = e, O = this.client.proposal.get(p);
      this.client.core.eventClient.deleteEvent({ eventId: h.eventId });
      const { pairingTopic: F, proposer: q, requiredNamespaces: K, optionalNamespaces: H } = O;
      let Q = (o = this.client.core.eventClient) == null ? void 0 : o.getEvent({ topic: F });
      Q || (Q = (a = this.client.core.eventClient) == null ? void 0 : a.createEvent({ type: Qr.session_approve_started, properties: { topic: F, trace: [Qr.session_approve_started, Qr.session_namespaces_validation_success] } }));
      const ht = await this.client.core.crypto.generateKeyPair(), ut = q.publicKey, Y = await this.client.core.crypto.generateSharedKey(ht, ut), et = Oe(Oe({ relay: { protocol: v ?? "irn" }, namespaces: y, controller: { publicKey: ht, metadata: this.client.metadata }, expiry: je(rn) }, P && { sessionProperties: P }), S && { sessionConfig: S });
      Q.addTrace(Qr.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(Y);
      } catch (st) {
        throw Q.setError(Ss.subscribe_session_topic_failure), st;
      }
      Q.addTrace(Qr.subscribe_session_topic_success);
      const ct = Ms(Oe({}, et), { topic: Y, requiredNamespaces: K, optionalNamespaces: H, pairingTopic: F, acknowledged: !1, self: et.controller, peer: { publicKey: q.publicKey, metadata: q.metadata }, controller: ht });
      await this.client.session.set(Y, ct), Q.addTrace(Qr.store_session);
      try {
        Q.addTrace(Qr.publishing_session_settle), await this.sendRequest({ topic: Y, method: "wc_sessionSettle", params: et, throwOnFailedPublish: !0 }).catch((st) => {
          throw Q == null || Q.setError(Ss.session_settle_publish_failure), st;
        }), Q.addTrace(Qr.session_settle_publish_success), Q.addTrace(Qr.publishing_session_approve), await this.sendResult({ id: p, topic: F, result: { relay: { protocol: v ?? "irn" }, responderPublicKey: ht }, throwOnFailedPublish: !0 }).catch((st) => {
          throw Q == null || Q.setError(Ss.session_approve_publish_failure), st;
        }), Q.addTrace(Qr.session_approve_publish_success);
      } catch (st) {
        throw this.client.logger.error(st), this.client.session.delete(Y, Jt("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(Y), st;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: Q.eventId }), await this.client.core.pairing.updateMetadata({ topic: F, metadata: q.metadata }), await this.client.proposal.delete(p, Jt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: F }), await this.setExpiry(Y, je(rn)), { topic: Y, acknowledged: () => Promise.resolve(this.client.session.get(Y)) };
    }, this.reject = async (e) => {
      await this.isInitialized();
      try {
        await this.isValidReject(e);
      } catch (h) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), h;
      }
      const { id: s, reason: o } = e;
      let a;
      try {
        a = this.client.proposal.get(s).pairingTopic;
      } catch (h) {
        throw this.client.logger.error(`reject() -> proposal.get(${s}) failed`), h;
      }
      a && (await this.sendError({ id: s, topic: a, error: o, rpcOpts: $e.wc_sessionPropose.reject }), await this.client.proposal.delete(s, Jt("USER_DISCONNECTED")));
    }, this.update = async (e) => {
      await this.isInitialized();
      try {
        await this.isValidUpdate(e);
      } catch (S) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), S;
      }
      const { topic: s, namespaces: o } = e, { done: a, resolve: h, reject: p } = Cs(), v = en(), y = an().toString(), P = this.client.session.get(s).namespaces;
      return this.events.once(It("session_update", v), ({ error: S }) => {
        S ? p(S) : h();
      }), await this.client.session.update(s, { namespaces: o }), await this.sendRequest({ topic: s, method: "wc_sessionUpdate", params: { namespaces: o }, throwOnFailedPublish: !0, clientRpcId: v, relayRpcId: y }).catch((S) => {
        this.client.logger.error(S), this.client.session.update(s, { namespaces: P }), p(S);
      }), { acknowledged: a };
    }, this.extend = async (e) => {
      await this.isInitialized();
      try {
        await this.isValidExtend(e);
      } catch (v) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), v;
      }
      const { topic: s } = e, o = en(), { done: a, resolve: h, reject: p } = Cs();
      return this.events.once(It("session_extend", o), ({ error: v }) => {
        v ? p(v) : h();
      }), await this.setExpiry(s, je(rn)), this.sendRequest({ topic: s, method: "wc_sessionExtend", params: {}, clientRpcId: o, throwOnFailedPublish: !0 }).catch((v) => {
        p(v);
      }), { acknowledged: a };
    }, this.request = async (e) => {
      await this.isInitialized();
      try {
        await this.isValidRequest(e);
      } catch (F) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), F;
      }
      const { chainId: s, request: o, topic: a, expiry: h = $e.wc_sessionRequest.req.ttl } = e, p = this.client.session.get(a), v = en(), y = an().toString(), { done: P, resolve: S, reject: O } = Cs(h, "Request expired. Please try again.");
      return this.events.once(It("session_request", v), ({ error: F, result: q }) => {
        F ? O(F) : S(q);
      }), await Promise.all([new Promise(async (F) => {
        await this.sendRequest({ clientRpcId: v, relayRpcId: y, topic: a, method: "wc_sessionRequest", params: { request: Ms(Oe({}, o), { expiryTimestamp: je(h) }), chainId: s }, expiry: h, throwOnFailedPublish: !0 }).catch((q) => O(q)), this.client.events.emit("session_request_sent", { topic: a, request: o, chainId: s, id: v }), F();
      }), new Promise(async (F) => {
        var q;
        if (!((q = p.sessionConfig) != null && q.disableDeepLink)) {
          const K = await Jb(this.client.core.storage, Fp);
          Gb({ id: v, topic: a, wcDeepLink: K });
        }
        F();
      }), P()]).then((F) => F[2]);
    }, this.respond = async (e) => {
      await this.isInitialized(), await this.isValidRespond(e);
      const { topic: s, response: o } = e, { id: a } = o;
      Vi(o) ? await this.sendResult({ id: a, topic: s, result: o.result, throwOnFailedPublish: !0 }) : gi(o) && await this.sendError({ id: a, topic: s, error: o.error }), this.cleanupAfterResponse(e);
    }, this.ping = async (e) => {
      await this.isInitialized();
      try {
        await this.isValidPing(e);
      } catch (o) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), o;
      }
      const { topic: s } = e;
      if (this.client.session.keys.includes(s)) {
        const o = en(), a = an().toString(), { done: h, resolve: p, reject: v } = Cs();
        this.events.once(It("session_ping", o), ({ error: y }) => {
          y ? v(y) : p();
        }), await Promise.all([this.sendRequest({ topic: s, method: "wc_sessionPing", params: {}, throwOnFailedPublish: !0, clientRpcId: o, relayRpcId: a }), h()]);
      } else
        this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (e) => {
      await this.isInitialized(), await this.isValidEmit(e);
      const { topic: s, event: o, chainId: a } = e, h = an().toString();
      await this.sendRequest({ topic: s, method: "wc_sessionEvent", params: { event: o, chainId: a }, throwOnFailedPublish: !0, relayRpcId: h });
    }, this.disconnect = async (e) => {
      await this.isInitialized(), await this.isValidDisconnect(e);
      const { topic: s } = e;
      if (this.client.session.keys.includes(s))
        await this.sendRequest({ topic: s, method: "wc_sessionDelete", params: Jt("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: s, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(s))
        await this.client.core.pairing.disconnect({ topic: s });
      else {
        const { message: o } = G("MISMATCHED_TOPIC", `Session or pairing topic not found: ${s}`);
        throw new Error(o);
      }
    }, this.find = (e) => (this.isInitialized(), this.client.session.getAll().filter((s) => EA(s, e))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async (e) => {
      this.isInitialized(), this.isValidAuthenticate(e);
      const { chains: s, statement: o = "", uri: a, domain: h, nonce: p, type: v, exp: y, nbf: P, methods: S = [], expiry: O } = e, F = [...e.resources || []], { topic: q, uri: K } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"] });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: q, uri: K } });
      const H = await this.client.core.crypto.generateKeyPair(), Q = ya(H);
      if (await Promise.all([this.client.auth.authKeys.set(wa, { responseTopic: Q, publicKey: H }), this.client.auth.pairingTopics.set(Q, { topic: Q, pairingTopic: q })]), await this.client.core.relayer.subscribe(Q), this.client.logger.info(`sending request to new pairing topic: ${q}`), S.length > 0) {
        const { namespace: u } = io(s[0]);
        let d = L3(u, "request", S);
        va(F) && (d = H3(d, F.pop())), F.push(d);
      }
      const ht = O && O > $e.wc_sessionAuthenticate.req.ttl ? O : $e.wc_sessionAuthenticate.req.ttl, ut = { authPayload: { type: v ?? "caip122", chains: s, statement: o, aud: a, domain: h, version: "1", nonce: p, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: y, nbf: P, resources: F }, requester: { publicKey: H, metadata: this.client.metadata }, expiryTimestamp: je(ht) }, Y = { eip155: { chains: s, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...S])], events: ["chainChanged", "accountsChanged"] } }, et = { requiredNamespaces: {}, optionalNamespaces: Y, relays: [{ protocol: "irn" }], pairingTopic: q, proposer: { publicKey: H, metadata: this.client.metadata }, expiryTimestamp: je($e.wc_sessionPropose.req.ttl) }, { done: ct, resolve: st, reject: gt } = Cs(ht, "Request expired"), kt = async ({ error: u, session: d }) => {
        if (this.events.off(It("session_request", Ct), Fe), u)
          gt(u);
        else if (d) {
          d.self.publicKey = H, await this.client.session.set(d.topic, d), await this.setExpiry(d.topic, d.expiry), q && await this.client.core.pairing.updateMetadata({ topic: q, metadata: d.peer.metadata });
          const b = this.client.session.get(d.topic);
          await this.deleteProposal(Ce), st({ session: b });
        }
      }, Fe = async (u) => {
        if (await this.deletePendingAuthRequest(Ct, { message: "fulfilled", code: 0 }), u.error) {
          const I = Jt("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return u.error.code === I.code ? void 0 : (this.events.off(It("session_connect"), kt), gt(u.error.message));
        }
        await this.deleteProposal(Ce), this.events.off(It("session_connect"), kt);
        const { cacaos: d, responder: b } = u.result, E = [], M = [];
        for (const I of d) {
          await tp({ cacao: I, projectId: this.client.core.projectId }) || (this.client.logger.error(I, "Signature verification failed"), gt(Jt("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: f } = I, A = va(f.resources), lt = [Zf(f.iss)], ot = Sa(f.iss);
          if (A) {
            const m = ep(A), $ = rp(A);
            E.push(...m), lt.push(...$);
          }
          for (const m of lt)
            M.push(`${m}:${ot}`);
        }
        const N = await this.client.core.crypto.generateSharedKey(H, b.publicKey);
        let D;
        E.length > 0 && (D = { topic: N, acknowledged: !0, self: { publicKey: H, metadata: this.client.metadata }, peer: b, controller: b.publicKey, expiry: je(rn), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: q, namespaces: hp([...new Set(E)], [...new Set(M)]) }, await this.client.core.relayer.subscribe(N), await this.client.session.set(N, D), q && await this.client.core.pairing.updateMetadata({ topic: q, metadata: b.metadata }), D = this.client.session.get(N)), st({ auths: d, session: D });
      }, Ct = en(), Ce = en();
      this.events.once(It("session_connect"), kt), this.events.once(It("session_request", Ct), Fe);
      try {
        await Promise.all([this.sendRequest({ topic: q, method: "wc_sessionAuthenticate", params: ut, expiry: e.expiry, throwOnFailedPublish: !0, clientRpcId: Ct }), this.sendRequest({ topic: q, method: "wc_sessionPropose", params: et, expiry: $e.wc_sessionPropose.req.ttl, throwOnFailedPublish: !0, clientRpcId: Ce })]);
      } catch (u) {
        throw this.events.off(It("session_connect"), kt), this.events.off(It("session_request", Ct), Fe), u;
      }
      return await this.setProposal(Ce, Oe({ id: Ce }, et)), await this.setAuthRequest(Ct, { request: Ms(Oe({}, ut), { verifyContext: {} }), pairingTopic: q }), { uri: K, response: ct };
    }, this.approveSessionAuthenticate = async (e) => {
      const { id: s, auths: o } = e, a = this.client.core.eventClient.createEvent({ properties: { topic: s.toString(), trace: [Ps.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (K) {
        throw a.setError(Jn.no_internet_connection), K;
      }
      const h = this.getPendingAuthRequest(s);
      if (!h)
        throw a.setError(Jn.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${s}`);
      const p = h.requester.publicKey, v = await this.client.core.crypto.generateKeyPair(), y = ya(p), P = { type: Xi, receiverPublicKey: p, senderPublicKey: v }, S = [], O = [];
      for (const K of o) {
        if (!await tp({ cacao: K, projectId: this.client.core.projectId })) {
          a.setError(Jn.invalid_cacao);
          const Y = Jt("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: s, topic: y, error: Y, encodeOpts: P }), new Error(Y.message);
        }
        a.addTrace(Ps.cacaos_verified);
        const { p: H } = K, Q = va(H.resources), ht = [Zf(H.iss)], ut = Sa(H.iss);
        if (Q) {
          const Y = ep(Q), et = rp(Q);
          S.push(...Y), ht.push(...et);
        }
        for (const Y of ht)
          O.push(`${Y}:${ut}`);
      }
      const F = await this.client.core.crypto.generateSharedKey(v, p);
      a.addTrace(Ps.create_authenticated_session_topic);
      let q;
      if ((S == null ? void 0 : S.length) > 0) {
        q = { topic: F, acknowledged: !0, self: { publicKey: v, metadata: this.client.metadata }, peer: { publicKey: p, metadata: h.requester.metadata }, controller: p, expiry: je(rn), authentication: o, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: h.pairingTopic, namespaces: hp([...new Set(S)], [...new Set(O)]) }, a.addTrace(Ps.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(F);
        } catch (K) {
          throw a.setError(Jn.subscribe_authenticated_session_topic_failure), K;
        }
        a.addTrace(Ps.subscribe_authenticated_session_topic_success), await this.client.session.set(F, q), a.addTrace(Ps.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: h.pairingTopic, metadata: h.requester.metadata });
      }
      a.addTrace(Ps.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: y, id: s, result: { cacaos: o, responder: { publicKey: v, metadata: this.client.metadata } }, encodeOpts: P, throwOnFailedPublish: !0 });
      } catch (K) {
        throw a.setError(Jn.authenticated_session_approve_publish_failure), K;
      }
      return await this.client.auth.requests.delete(s, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: h.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: a.eventId }), { session: q };
    }, this.rejectSessionAuthenticate = async (e) => {
      await this.isInitialized();
      const { id: s, reason: o } = e, a = this.getPendingAuthRequest(s);
      if (!a)
        throw new Error(`Could not find pending auth request with id ${s}`);
      const h = a.requester.publicKey, p = await this.client.core.crypto.generateKeyPair(), v = ya(h), y = { type: Xi, receiverPublicKey: h, senderPublicKey: p };
      await this.sendError({ id: s, topic: v, error: o, encodeOpts: y, rpcOpts: $e.wc_sessionAuthenticate.reject }), await this.client.auth.requests.delete(s, { message: "rejected", code: 0 }), await this.client.proposal.delete(s, Jt("USER_DISCONNECTED"));
    }, this.formatAuthMessage = (e) => {
      this.isInitialized();
      const { request: s, iss: o } = e;
      return zd(s, o);
    }, this.processRelayMessageCache = () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0)
          for (; this.relayMessageCache.length > 0; )
            try {
              const e = this.relayMessageCache.shift();
              e && await this.onRelayMessage(e);
            } catch (e) {
              this.client.logger.error(e);
            }
      }, 50);
    }, this.cleanupDuplicatePairings = async (e) => {
      if (e.pairingTopic)
        try {
          const s = this.client.core.pairing.pairings.get(e.pairingTopic), o = this.client.core.pairing.pairings.getAll().filter((a) => {
            var h, p;
            return ((h = a.peerMetadata) == null ? void 0 : h.url) && ((p = a.peerMetadata) == null ? void 0 : p.url) === e.peer.metadata.url && a.topic && a.topic !== s.topic;
          });
          if (o.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${o.length} duplicate pairing(s)`), await Promise.all(o.map((a) => this.client.core.pairing.disconnect({ topic: a.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s) {
          this.client.logger.error(s);
        }
    }, this.deleteSession = async (e) => {
      var s;
      const { topic: o, expirerHasDeleted: a = !1, emitEvent: h = !0, id: p = 0 } = e, { self: v } = this.client.session.get(o);
      await this.client.core.relayer.unsubscribe(o), await this.client.session.delete(o, Jt("USER_DISCONNECTED")), this.addToRecentlyDeleted(o, "session"), this.client.core.crypto.keychain.has(v.publicKey) && await this.client.core.crypto.deleteKeyPair(v.publicKey), this.client.core.crypto.keychain.has(o) && await this.client.core.crypto.deleteSymKey(o), a || this.client.core.expirer.del(o), this.client.core.storage.removeItem(Fp).catch((y) => this.client.logger.warn(y)), this.getPendingSessionRequests().forEach((y) => {
        y.topic === o && this.deletePendingSessionRequest(y.id, Jt("USER_DISCONNECTED"));
      }), o === ((s = this.sessionRequestQueue.queue[0]) == null ? void 0 : s.topic) && (this.sessionRequestQueue.state = pi.idle), h && this.client.events.emit("session_delete", { id: p, topic: o });
    }, this.deleteProposal = async (e, s) => {
      if (s)
        try {
          const o = this.client.proposal.get(e), a = this.client.core.eventClient.getEvent({ topic: o.pairingTopic });
          a == null || a.setError(Ss.proposal_expired);
        } catch {
        }
      await Promise.all([this.client.proposal.delete(e, Jt("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "proposal");
    }, this.deletePendingSessionRequest = async (e, s, o = !1) => {
      await Promise.all([this.client.pendingRequest.delete(e, s), o ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((a) => a.id !== e), o && (this.sessionRequestQueue.state = pi.idle, this.client.events.emit("session_request_expire", { id: e }));
    }, this.deletePendingAuthRequest = async (e, s, o = !1) => {
      await Promise.all([this.client.auth.requests.delete(e, s), o ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.setExpiry = async (e, s) => {
      this.client.session.keys.includes(e) && (this.client.core.expirer.set(e, s), await this.client.session.update(e, { expiry: s }));
    }, this.setProposal = async (e, s) => {
      this.client.core.expirer.set(e, je($e.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e, s);
    }, this.setAuthRequest = async (e, s) => {
      const { request: o, pairingTopic: a } = s;
      this.client.core.expirer.set(e, o.expiryTimestamp), await this.client.auth.requests.set(e, { authPayload: o.authPayload, requester: o.requester, expiryTimestamp: o.expiryTimestamp, id: e, pairingTopic: a, verifyContext: o.verifyContext });
    }, this.setPendingSessionRequest = async (e) => {
      const { id: s, topic: o, params: a, verifyContext: h } = e, p = a.request.expiryTimestamp || je($e.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(s, p), await this.client.pendingRequest.set(s, { id: s, topic: o, params: a, verifyContext: h });
    }, this.sendRequest = async (e) => {
      const { topic: s, method: o, params: a, expiry: h, relayRpcId: p, clientRpcId: v, throwOnFailedPublish: y } = e, P = ro(o, a, v);
      let S;
      try {
        S = await this.client.core.crypto.encode(s, P);
      } catch (q) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${s} failed`), q;
      }
      let O;
      if (h8.includes(o)) {
        const q = Ji(JSON.stringify(P)), K = Ji(S);
        O = await this.client.core.verify.register({ id: K, decryptedId: q });
      }
      const F = $e[o].req;
      return F.attestation = O, h && (F.ttl = h), p && (F.id = p), this.client.core.history.set(s, P), y ? (F.internal = Ms(Oe({}, F.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, S, F)) : this.client.core.relayer.publish(s, S, F).catch((q) => this.client.logger.error(q)), P.id;
    }, this.sendResult = async (e) => {
      const { id: s, topic: o, result: a, throwOnFailedPublish: h, encodeOpts: p } = e, v = Ra(s, a);
      let y;
      try {
        y = await this.client.core.crypto.encode(o, v, p);
      } catch (O) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${o} failed`), O;
      }
      let P;
      try {
        P = await this.client.core.history.get(o, s);
      } catch (O) {
        throw this.client.logger.error(`sendResult() -> history.get(${o}, ${s}) failed`), O;
      }
      const S = $e[P.request.method].res;
      h ? (S.internal = Ms(Oe({}, S.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(o, y, S)) : this.client.core.relayer.publish(o, y, S).catch((O) => this.client.logger.error(O)), await this.client.core.history.resolve(v);
    }, this.sendError = async (e) => {
      const { id: s, topic: o, error: a, encodeOpts: h, rpcOpts: p } = e, v = ed(s, a);
      let y;
      try {
        y = await this.client.core.crypto.encode(o, v, h);
      } catch (O) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${o} failed`), O;
      }
      let P;
      try {
        P = await this.client.core.history.get(o, s);
      } catch (O) {
        throw this.client.logger.error(`sendError() -> history.get(${o}, ${s}) failed`), O;
      }
      const S = p || $e[P.request.method].res;
      this.client.core.relayer.publish(o, y, S), await this.client.core.history.resolve(v);
    }, this.cleanup = async () => {
      const e = [], s = [];
      this.client.session.getAll().forEach((o) => {
        let a = !1;
        ls(o.expiry) && (a = !0), this.client.core.crypto.keychain.has(o.topic) || (a = !0), a && e.push(o.topic);
      }), this.client.proposal.getAll().forEach((o) => {
        ls(o.expiryTimestamp) && s.push(o.id);
      }), await Promise.all([...e.map((o) => this.deleteSession({ topic: o })), ...s.map((o) => this.deleteProposal(o))]);
    }, this.onRelayEventRequest = async (e) => {
      this.requestQueue.queue.push(e), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === pi.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = pi.active;
        const e = this.requestQueue.queue.shift();
        if (e)
          try {
            await this.processRequest(e);
          } catch (s) {
            this.client.logger.warn(s);
          }
      }
      this.requestQueue.state = pi.idle;
    }, this.processRequest = async (e) => {
      const { topic: s, payload: o, attestation: a, encryptedId: h } = e, p = o.method;
      if (!this.shouldIgnorePairingRequest({ topic: s, requestMethod: p }))
        switch (p) {
          case "wc_sessionPropose":
            return await this.onSessionProposeRequest({ topic: s, payload: o, attestation: a, encryptedId: h });
          case "wc_sessionSettle":
            return await this.onSessionSettleRequest(s, o);
          case "wc_sessionUpdate":
            return await this.onSessionUpdateRequest(s, o);
          case "wc_sessionExtend":
            return await this.onSessionExtendRequest(s, o);
          case "wc_sessionPing":
            return await this.onSessionPingRequest(s, o);
          case "wc_sessionDelete":
            return await this.onSessionDeleteRequest(s, o);
          case "wc_sessionRequest":
            return await this.onSessionRequest({ topic: s, payload: o, attestation: a, encryptedId: h });
          case "wc_sessionEvent":
            return await this.onSessionEventRequest(s, o);
          case "wc_sessionAuthenticate":
            return await this.onSessionAuthenticateRequest({ topic: s, payload: o, attestation: a, encryptedId: h });
          default:
            return this.client.logger.info(`Unsupported request method ${p}`);
        }
    }, this.onRelayEventResponse = async (e) => {
      const { topic: s, payload: o } = e, a = (await this.client.core.history.get(s, o.id)).request.method;
      switch (a) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, o);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, o);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, o);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, o);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, o);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, o);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(s, o);
        default:
          return this.client.logger.info(`Unsupported response method ${a}`);
      }
    }, this.onRelayEventUnknownPayload = (e) => {
      const { topic: s } = e, { message: o } = G("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(o);
    }, this.shouldIgnorePairingRequest = (e) => {
      const { topic: s, requestMethod: o } = e, a = this.expectedPairingMethodMap.get(s);
      return !a || a.includes(o) ? !1 : !!(a.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }, this.onSessionProposeRequest = async (e) => {
      const { topic: s, payload: o, attestation: a, encryptedId: h } = e, { params: p, id: v } = o;
      try {
        const y = this.client.core.eventClient.getEvent({ topic: s });
        this.isValidConnect(Oe({}, o.params));
        const P = p.expiryTimestamp || je($e.wc_sessionPropose.req.ttl), S = Oe({ id: v, pairingTopic: s, expiryTimestamp: P }, p);
        await this.setProposal(v, S);
        const O = await this.getVerifyContext({ attestationId: a, hash: Ji(JSON.stringify(o)), encryptedId: h, metadata: S.proposer.metadata });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), y == null || y.setError(Qi.proposal_listener_not_found)), y == null || y.addTrace(di.emit_session_proposal), this.client.events.emit("session_proposal", { id: v, params: S, verifyContext: O });
      } catch (y) {
        await this.sendError({ id: v, topic: s, error: y, rpcOpts: $e.wc_sessionPropose.autoReject }), this.client.logger.error(y);
      }
    }, this.onSessionProposeResponse = async (e, s) => {
      const { id: o } = s;
      if (Vi(s)) {
        const { result: a } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: a });
        const h = this.client.proposal.get(o);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: h });
        const p = h.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: p });
        const v = a.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: v });
        const y = await this.client.core.crypto.generateSharedKey(p, v);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: y });
        const P = await this.client.core.relayer.subscribe(y);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: P }), await this.client.core.pairing.activate({ topic: e });
      } else if (gi(s)) {
        await this.client.proposal.delete(o, Jt("USER_DISCONNECTED"));
        const a = It("session_connect");
        if (this.events.listenerCount(a) === 0)
          throw new Error(`emitting ${a} without any listeners, 954`);
        this.events.emit(It("session_connect"), { error: s.error });
      }
    }, this.onSessionSettleRequest = async (e, s) => {
      const { id: o, params: a } = s;
      try {
        this.isValidSessionSettleRequest(a);
        const { relay: h, controller: p, expiry: v, namespaces: y, sessionProperties: P, sessionConfig: S } = s.params, O = Oe(Oe({ topic: e, relay: h, expiry: v, namespaces: y, acknowledged: !0, pairingTopic: "", requiredNamespaces: {}, optionalNamespaces: {}, controller: p.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: p.publicKey, metadata: p.metadata } }, P && { sessionProperties: P }), S && { sessionConfig: S }), F = It("session_connect");
        if (this.events.listenerCount(F) === 0)
          throw new Error(`emitting ${F} without any listeners 997`);
        this.events.emit(It("session_connect"), { session: O }), await this.sendResult({ id: s.id, topic: e, result: !0, throwOnFailedPublish: !0 });
      } catch (h) {
        await this.sendError({ id: o, topic: e, error: h }), this.client.logger.error(h);
      }
    }, this.onSessionSettleResponse = async (e, s) => {
      const { id: o } = s;
      Vi(s) ? (await this.client.session.update(e, { acknowledged: !0 }), this.events.emit(It("session_approve", o), {})) : gi(s) && (await this.client.session.delete(e, Jt("USER_DISCONNECTED")), this.events.emit(It("session_approve", o), { error: s.error }));
    }, this.onSessionUpdateRequest = async (e, s) => {
      const { params: o, id: a } = s;
      try {
        const h = `${e}_session_update`, p = Qn.get(h);
        if (p && this.isRequestOutOfSync(p, a)) {
          this.client.logger.info(`Discarding out of sync request - ${a}`), this.sendError({ id: a, topic: e, error: Jt("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(Oe({ topic: e }, o));
        try {
          Qn.set(h, a), await this.client.session.update(e, { namespaces: o.namespaces }), await this.sendResult({ id: a, topic: e, result: !0, throwOnFailedPublish: !0 });
        } catch (v) {
          throw Qn.delete(h), v;
        }
        this.client.events.emit("session_update", { id: a, topic: e, params: o });
      } catch (h) {
        await this.sendError({ id: a, topic: e, error: h }), this.client.logger.error(h);
      }
    }, this.isRequestOutOfSync = (e, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, s) => {
      const { id: o } = s, a = It("session_update", o);
      if (this.events.listenerCount(a) === 0)
        throw new Error(`emitting ${a} without any listeners`);
      Vi(s) ? this.events.emit(It("session_update", o), {}) : gi(s) && this.events.emit(It("session_update", o), { error: s.error });
    }, this.onSessionExtendRequest = async (e, s) => {
      const { id: o } = s;
      try {
        this.isValidExtend({ topic: e }), await this.setExpiry(e, je(rn)), await this.sendResult({ id: o, topic: e, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_extend", { id: o, topic: e });
      } catch (a) {
        await this.sendError({ id: o, topic: e, error: a }), this.client.logger.error(a);
      }
    }, this.onSessionExtendResponse = (e, s) => {
      const { id: o } = s, a = It("session_extend", o);
      if (this.events.listenerCount(a) === 0)
        throw new Error(`emitting ${a} without any listeners`);
      Vi(s) ? this.events.emit(It("session_extend", o), {}) : gi(s) && this.events.emit(It("session_extend", o), { error: s.error });
    }, this.onSessionPingRequest = async (e, s) => {
      const { id: o } = s;
      try {
        this.isValidPing({ topic: e }), await this.sendResult({ id: o, topic: e, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_ping", { id: o, topic: e });
      } catch (a) {
        await this.sendError({ id: o, topic: e, error: a }), this.client.logger.error(a);
      }
    }, this.onSessionPingResponse = (e, s) => {
      const { id: o } = s, a = It("session_ping", o);
      if (this.events.listenerCount(a) === 0)
        throw new Error(`emitting ${a} without any listeners`);
      setTimeout(() => {
        Vi(s) ? this.events.emit(It("session_ping", o), {}) : gi(s) && this.events.emit(It("session_ping", o), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (e, s) => {
      const { id: o } = s;
      try {
        this.isValidDisconnect({ topic: e, reason: s.params }), await Promise.all([new Promise((a) => {
          this.client.core.relayer.once(hr.publish, async () => {
            a(await this.deleteSession({ topic: e, id: o }));
          });
        }), this.sendResult({ id: o, topic: e, result: !0, throwOnFailedPublish: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: e, error: Jt("USER_DISCONNECTED") })]);
      } catch (a) {
        this.client.logger.error(a);
      }
    }, this.onSessionRequest = async (e) => {
      var s;
      const { topic: o, payload: a, attestation: h, encryptedId: p } = e, { id: v, params: y } = a;
      try {
        await this.isValidRequest(Oe({ topic: o }, y));
        const P = this.client.session.get(o), S = await this.getVerifyContext({ attestationId: h, hash: Ji(JSON.stringify(ro("wc_sessionRequest", y, v))), encryptedId: p, metadata: P.peer.metadata }), O = { id: v, topic: o, params: y, verifyContext: S };
        await this.setPendingSessionRequest(O), (s = this.client.signConfig) != null && s.disableRequestQueue ? this.emitSessionRequest(O) : (this.addSessionRequestToSessionRequestQueue(O), this.processSessionRequestQueue());
      } catch (P) {
        await this.sendError({ id: v, topic: o, error: P }), this.client.logger.error(P);
      }
    }, this.onSessionRequestResponse = (e, s) => {
      const { id: o } = s, a = It("session_request", o);
      if (this.events.listenerCount(a) === 0)
        throw new Error(`emitting ${a} without any listeners`);
      Vi(s) ? this.events.emit(It("session_request", o), { result: s.result }) : gi(s) && this.events.emit(It("session_request", o), { error: s.error });
    }, this.onSessionEventRequest = async (e, s) => {
      const { id: o, params: a } = s;
      try {
        const h = `${e}_session_event_${a.event.name}`, p = Qn.get(h);
        if (p && this.isRequestOutOfSync(p, o)) {
          this.client.logger.info(`Discarding out of sync request - ${o}`);
          return;
        }
        this.isValidEmit(Oe({ topic: e }, a)), this.client.events.emit("session_event", { id: o, topic: e, params: a }), Qn.set(h, o);
      } catch (h) {
        await this.sendError({ id: o, topic: e, error: h }), this.client.logger.error(h);
      }
    }, this.onSessionAuthenticateResponse = (e, s) => {
      const { id: o } = s;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: e, payload: s }), Vi(s) ? this.events.emit(It("session_request", o), { result: s.result }) : gi(s) && this.events.emit(It("session_request", o), { error: s.error });
    }, this.onSessionAuthenticateRequest = async (e) => {
      const { topic: s, payload: o, attestation: a, encryptedId: h } = e;
      try {
        const { requester: p, authPayload: v, expiryTimestamp: y } = o.params, P = await this.getVerifyContext({ attestationId: a, hash: Ji(JSON.stringify(o)), encryptedId: h, metadata: p.metadata }), S = { requester: p, pairingTopic: s, id: o.id, authPayload: v, verifyContext: P, expiryTimestamp: y };
        await this.setAuthRequest(o.id, { request: S, pairingTopic: s }), this.client.events.emit("session_authenticate", { topic: s, params: o.params, id: o.id, verifyContext: P });
      } catch (p) {
        this.client.logger.error(p);
        const v = o.params.requester.publicKey, y = await this.client.core.crypto.generateKeyPair(), P = { type: Xi, receiverPublicKey: v, senderPublicKey: y };
        await this.sendError({ id: o.id, topic: s, error: p, encodeOpts: P, rpcOpts: $e.wc_sessionAuthenticate.autoReject });
      }
    }, this.addSessionRequestToSessionRequestQueue = (e) => {
      this.sessionRequestQueue.queue.push(e);
    }, this.cleanupAfterResponse = (e) => {
      this.deletePendingSessionRequest(e.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = pi.idle, this.processSessionRequestQueue();
      }, tt.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: e, error: s }) => {
      const o = this.client.core.history.pending;
      o.length > 0 && o.filter((a) => a.topic === e && a.request.method === "wc_sessionRequest").forEach((a) => {
        const h = a.request.id, p = It("session_request", h);
        if (this.events.listenerCount(p) === 0)
          throw new Error(`emitting ${p} without any listeners`);
        this.events.emit(It("session_request", a.request.id), { error: s });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === pi.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e = this.sessionRequestQueue.queue[0];
      if (!e) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = pi.active, this.emitSessionRequest(e);
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.emitSessionRequest = (e) => {
      this.client.events.emit("session_request", e);
    }, this.onPairingCreated = (e) => {
      if (e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active)
        return;
      const s = this.client.proposal.getAll().find((o) => o.pairingTopic === e.topic);
      s && this.onSessionProposeRequest({ topic: e.topic, payload: ro("wc_sessionPropose", { requiredNamespaces: s.requiredNamespaces, optionalNamespaces: s.optionalNamespaces, relays: s.relays, proposer: s.proposer, sessionProperties: s.sessionProperties }, s.id) });
    }, this.isValidConnect = async (e) => {
      if (!or(e)) {
        const { message: v } = G("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
        throw new Error(v);
      }
      const { pairingTopic: s, requiredNamespaces: o, optionalNamespaces: a, sessionProperties: h, relays: p } = e;
      if (cr(s) || await this.isValidPairingTopic(s), !DA(p)) {
        const { message: v } = G("MISSING_OR_INVALID", `connect() relays: ${p}`);
        throw new Error(v);
      }
      !cr(o) && uo(o) !== 0 && this.validateNamespaces(o, "requiredNamespaces"), !cr(a) && uo(a) !== 0 && this.validateNamespaces(a, "optionalNamespaces"), cr(h) || this.validateSessionProps(h, "sessionProperties");
    }, this.validateNamespaces = (e, s) => {
      const o = FA(e, "connect()", s);
      if (o)
        throw new Error(o.message);
    }, this.isValidApprove = async (e) => {
      if (!or(e))
        throw new Error(G("MISSING_OR_INVALID", `approve() params: ${e}`).message);
      const { id: s, namespaces: o, relayProtocol: a, sessionProperties: h } = e;
      this.checkRecentlyDeleted(s), await this.isValidProposalId(s);
      const p = this.client.proposal.get(s), v = oh(o, "approve()");
      if (v)
        throw new Error(v.message);
      const y = fp(p.requiredNamespaces, o, "approve()");
      if (y)
        throw new Error(y.message);
      if (!Me(a, !0)) {
        const { message: P } = G("MISSING_OR_INVALID", `approve() relayProtocol: ${a}`);
        throw new Error(P);
      }
      cr(h) || this.validateSessionProps(h, "sessionProperties");
    }, this.isValidReject = async (e) => {
      if (!or(e)) {
        const { message: a } = G("MISSING_OR_INVALID", `reject() params: ${e}`);
        throw new Error(a);
      }
      const { id: s, reason: o } = e;
      if (this.checkRecentlyDeleted(s), await this.isValidProposalId(s), !kA(o)) {
        const { message: a } = G("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(o)}`);
        throw new Error(a);
      }
    }, this.isValidSessionSettleRequest = (e) => {
      if (!or(e)) {
        const { message: y } = G("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
        throw new Error(y);
      }
      const { relay: s, controller: o, namespaces: a, expiry: h } = e;
      if (!Gd(s)) {
        const { message: y } = G("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(y);
      }
      const p = CA(o, "onSessionSettleRequest()");
      if (p)
        throw new Error(p.message);
      const v = oh(a, "onSessionSettleRequest()");
      if (v)
        throw new Error(v.message);
      if (ls(h)) {
        const { message: y } = G("EXPIRED", "onSessionSettleRequest()");
        throw new Error(y);
      }
    }, this.isValidUpdate = async (e) => {
      if (!or(e)) {
        const { message: v } = G("MISSING_OR_INVALID", `update() params: ${e}`);
        throw new Error(v);
      }
      const { topic: s, namespaces: o } = e;
      this.checkRecentlyDeleted(s), await this.isValidSessionTopic(s);
      const a = this.client.session.get(s), h = oh(o, "update()");
      if (h)
        throw new Error(h.message);
      const p = fp(a.requiredNamespaces, o, "update()");
      if (p)
        throw new Error(p.message);
    }, this.isValidExtend = async (e) => {
      if (!or(e)) {
        const { message: o } = G("MISSING_OR_INVALID", `extend() params: ${e}`);
        throw new Error(o);
      }
      const { topic: s } = e;
      this.checkRecentlyDeleted(s), await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (e) => {
      if (!or(e)) {
        const { message: v } = G("MISSING_OR_INVALID", `request() params: ${e}`);
        throw new Error(v);
      }
      const { topic: s, request: o, chainId: a, expiry: h } = e;
      this.checkRecentlyDeleted(s), await this.isValidSessionTopic(s);
      const { namespaces: p } = this.client.session.get(s);
      if (!lp(p, a)) {
        const { message: v } = G("MISSING_OR_INVALID", `request() chainId: ${a}`);
        throw new Error(v);
      }
      if (!BA(o)) {
        const { message: v } = G("MISSING_OR_INVALID", `request() ${JSON.stringify(o)}`);
        throw new Error(v);
      }
      if (!jA(p, a, o.method)) {
        const { message: v } = G("MISSING_OR_INVALID", `request() method: ${o.method}`);
        throw new Error(v);
      }
      if (h && !HA(h, lh)) {
        const { message: v } = G("MISSING_OR_INVALID", `request() expiry: ${h}. Expiry must be a number (in seconds) between ${lh.min} and ${lh.max}`);
        throw new Error(v);
      }
    }, this.isValidRespond = async (e) => {
      var s;
      if (!or(e)) {
        const { message: h } = G("MISSING_OR_INVALID", `respond() params: ${e}`);
        throw new Error(h);
      }
      const { topic: o, response: a } = e;
      try {
        await this.isValidSessionTopic(o);
      } catch (h) {
        throw (s = e == null ? void 0 : e.response) != null && s.id && this.cleanupAfterResponse(e), h;
      }
      if (!UA(a)) {
        const { message: h } = G("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(a)}`);
        throw new Error(h);
      }
    }, this.isValidPing = async (e) => {
      if (!or(e)) {
        const { message: o } = G("MISSING_OR_INVALID", `ping() params: ${e}`);
        throw new Error(o);
      }
      const { topic: s } = e;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (e) => {
      if (!or(e)) {
        const { message: p } = G("MISSING_OR_INVALID", `emit() params: ${e}`);
        throw new Error(p);
      }
      const { topic: s, event: o, chainId: a } = e;
      await this.isValidSessionTopic(s);
      const { namespaces: h } = this.client.session.get(s);
      if (!lp(h, a)) {
        const { message: p } = G("MISSING_OR_INVALID", `emit() chainId: ${a}`);
        throw new Error(p);
      }
      if (!$A(o)) {
        const { message: p } = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
        throw new Error(p);
      }
      if (!zA(h, a, o.name)) {
        const { message: p } = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
        throw new Error(p);
      }
    }, this.isValidDisconnect = async (e) => {
      if (!or(e)) {
        const { message: o } = G("MISSING_OR_INVALID", `disconnect() params: ${e}`);
        throw new Error(o);
      }
      const { topic: s } = e;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidAuthenticate = (e) => {
      const { chains: s, uri: o, domain: a, nonce: h } = e;
      if (!Array.isArray(s) || s.length === 0)
        throw new Error("chains is required and must be a non-empty array");
      if (!Me(o, !1))
        throw new Error("uri is required parameter");
      if (!Me(a, !1))
        throw new Error("domain is required parameter");
      if (!Me(h, !1))
        throw new Error("nonce is required parameter");
      if ([...new Set(s.map((v) => io(v).namespace))].length > 1)
        throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: p } = io(s[0]);
      if (p !== "eip155")
        throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }, this.getVerifyContext = async (e) => {
      const { attestationId: s, hash: o, encryptedId: a, metadata: h } = e, p = { verified: { verifyUrl: h.verifyUrl || oo, validation: "UNKNOWN", origin: h.url || "" } };
      try {
        const v = await this.client.core.verify.resolve({ attestationId: s, hash: o, encryptedId: a, verifyUrl: h.verifyUrl });
        v && (p.verified.origin = v.origin, p.verified.isScam = v.isScam, p.verified.validation = v.origin === new URL(h.url).origin ? "VALID" : "INVALID");
      } catch (v) {
        this.client.logger.warn(v);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(p)}`), p;
    }, this.validateSessionProps = (e, s) => {
      Object.values(e).forEach((o) => {
        if (!Me(o, !1)) {
          const { message: a } = G("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(o)}`);
          throw new Error(a);
        }
      });
    }, this.getPendingAuthRequest = (e) => {
      const s = this.client.auth.requests.get(e);
      return typeof s == "object" ? s : void 0;
    }, this.addToRecentlyDeleted = (e, s) => {
      if (this.recentlyDeletedMap.set(e, s), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let o = 0;
        const a = this.recentlyDeletedLimit / 2;
        for (const h of this.recentlyDeletedMap.keys()) {
          if (o++ >= a)
            break;
          this.recentlyDeletedMap.delete(h);
        }
      }
    }, this.checkRecentlyDeleted = (e) => {
      const s = this.recentlyDeletedMap.get(e);
      if (s) {
        const { message: o } = G("MISSING_OR_INVALID", `Record was recently deleted - ${s}: ${e}`);
        throw new Error(o);
      }
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(hr.message, (t) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(t) : this.onRelayMessage(t);
    });
  }
  async onRelayMessage(t) {
    const { topic: e, message: s, attestation: o } = t, { publicKey: a } = this.client.auth.authKeys.keys.includes(wa) ? this.client.auth.authKeys.get(wa) : { responseTopic: void 0, publicKey: void 0 }, h = await this.client.core.crypto.decode(e, s, { receiverPublicKey: a });
    try {
      Dh(h) ? (this.client.core.history.set(e, h), this.onRelayEventRequest({ topic: e, payload: h, attestation: o, encryptedId: Ji(s) })) : qh(h) ? (await this.client.core.history.resolve(h), await this.onRelayEventResponse({ topic: e, payload: h }), this.client.core.history.delete(e, h.id)) : this.onRelayEventUnknownPayload({ topic: e, payload: h });
    } catch (p) {
      this.client.logger.error(p);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Tr.expired, async (t) => {
      const { topic: e, id: s } = od(t.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, G("EXPIRED"), !0);
      if (s && this.client.auth.requests.keys.includes(s))
        return await this.deletePendingAuthRequest(s, G("EXPIRED"), !0);
      e ? this.client.session.keys.includes(e) && (await this.deleteSession({ topic: e, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: e })) : s && (await this.deleteProposal(s, !0), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(cn.create, (t) => this.onPairingCreated(t)), this.client.core.pairing.events.on(cn.delete, (t) => {
      this.addToRecentlyDeleted(t.topic, "pairing");
    });
  }
  isValidPairingTopic(t) {
    if (!Me(t, !1)) {
      const { message: e } = G("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
      throw new Error(e);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: e } = G("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
      throw new Error(e);
    }
    if (ls(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: e } = G("EXPIRED", `pairing topic: ${t}`);
      throw new Error(e);
    }
  }
  async isValidSessionTopic(t) {
    if (!Me(t, !1)) {
      const { message: e } = G("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
      throw new Error(e);
    }
    if (this.checkRecentlyDeleted(t), !this.client.session.keys.includes(t)) {
      const { message: e } = G("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
      throw new Error(e);
    }
    if (ls(this.client.session.get(t).expiry)) {
      await this.deleteSession({ topic: t });
      const { message: e } = G("EXPIRED", `session topic: ${t}`);
      throw new Error(e);
    }
    if (!this.client.core.crypto.keychain.has(t)) {
      const { message: e } = G("MISSING_OR_INVALID", `session topic does not exist in keychain: ${t}`);
      throw await this.deleteSession({ topic: t }), new Error(e);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.checkRecentlyDeleted(t), this.client.session.keys.includes(t))
      await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t))
      this.isValidPairingTopic(t);
    else if (Me(t, !1)) {
      const { message: e } = G("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
      throw new Error(e);
    } else {
      const { message: e } = G("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
      throw new Error(e);
    }
  }
  async isValidProposalId(t) {
    if (!qA(t)) {
      const { message: e } = G("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
      throw new Error(e);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: e } = G("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
      throw new Error(e);
    }
    if (ls(this.client.proposal.get(t).expiryTimestamp)) {
      await this.deleteProposal(t);
      const { message: e } = G("EXPIRED", `proposal id: ${t}`);
      throw new Error(e);
    }
  }
}
class _8 extends Ds {
  constructor(t, e) {
    super(t, e, n8, Yh), this.core = t, this.logger = e;
  }
}
class A8 extends Ds {
  constructor(t, e) {
    super(t, e, o8, Yh), this.core = t, this.logger = e;
  }
}
class E8 extends Ds {
  constructor(t, e) {
    super(t, e, c8, Yh, (s) => s.id), this.core = t, this.logger = e;
  }
}
class I8 extends Ds {
  constructor(t, e) {
    super(t, e, f8, Fa, () => wa), this.core = t, this.logger = e;
  }
}
class S8 extends Ds {
  constructor(t, e) {
    super(t, e, p8, Fa), this.core = t, this.logger = e;
  }
}
class P8 extends Ds {
  constructor(t, e) {
    super(t, e, d8, Fa, (s) => s.id), this.core = t, this.logger = e;
  }
}
class M8 {
  constructor(t, e) {
    this.core = t, this.logger = e, this.authKeys = new I8(this.core, this.logger), this.pairingTopics = new S8(this.core, this.logger), this.requests = new P8(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
}
class Wh extends h6 {
  constructor(t) {
    super(t), this.protocol = f0, this.version = p0, this.name = uh.name, this.events = new gs.EventEmitter(), this.on = (s, o) => this.events.on(s, o), this.once = (s, o) => this.events.once(s, o), this.off = (s, o) => this.events.off(s, o), this.removeListener = (s, o) => this.events.removeListener(s, o), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.authenticate = async (s) => {
      try {
        return await this.engine.authenticate(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.formatAuthMessage = (s) => {
      try {
        return this.engine.formatAuthMessage(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.approveSessionAuthenticate = async (s) => {
      try {
        return await this.engine.approveSessionAuthenticate(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.rejectSessionAuthenticate = async (s) => {
      try {
        return await this.engine.rejectSessionAuthenticate(s);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.name = (t == null ? void 0 : t.name) || uh.name, this.metadata = (t == null ? void 0 : t.metadata) || jb(), this.signConfig = t == null ? void 0 : t.signConfig;
    const e = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Fh(Na({ level: (t == null ? void 0 : t.logger) || uh.logger }));
    this.core = (t == null ? void 0 : t.core) || new s8(t), this.logger = tr(e, this.name), this.session = new A8(this.core, this.logger), this.proposal = new _8(this.core, this.logger), this.pendingRequest = new E8(this.core, this.logger), this.engine = new b8(this), this.auth = new M8(this.core, this.logger);
  }
  static async init(t) {
    const e = new Wh(t);
    return await e.initialize(), e;
  }
  get context() {
    return _r(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), await this.auth.init(), this.logger.info("SignClient Initialization Success"), this.engine.processRelayMessageCache();
    } catch (t) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t;
    }
  }
}
const kp = "error", C8 = "wss://relay.walletconnect.com", x8 = "wc", N8 = "universal_provider", Bp = `${x8}@2:${N8}:`, R8 = "https://rpc.walletconnect.com/v1/", nn = "generic", ei = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var Xn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof be < "u" ? be : typeof self < "u" ? self : {}, Nh = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(i, t) {
  (function() {
    var e, s = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", h = "Expected a function", p = "Invalid `variable` option passed into `_.template`", v = "__lodash_hash_undefined__", y = 500, P = "__lodash_placeholder__", S = 1, O = 2, F = 4, q = 1, K = 2, H = 1, Q = 2, ht = 4, ut = 8, Y = 16, et = 32, ct = 64, st = 128, gt = 256, kt = 512, Fe = 30, Ct = "...", Ce = 800, u = 16, d = 1, b = 2, E = 3, M = 1 / 0, N = 9007199254740991, D = 17976931348623157e292, I = NaN, f = 4294967295, A = f - 1, lt = f >>> 1, ot = [["ary", st], ["bind", H], ["bindKey", Q], ["curry", ut], ["curryRight", Y], ["flip", kt], ["partial", et], ["partialRight", ct], ["rearg", gt]], m = "[object Arguments]", $ = "[object Array]", B = "[object AsyncFunction]", L = "[object Boolean]", rt = "[object Date]", X = "[object DOMException]", Z = "[object Error]", at = "[object Function]", mt = "[object GeneratorFunction]", J = "[object Map]", Ot = "[object Number]", Zt = "[object Null]", xt = "[object Object]", ri = "[object Promise]", te = "[object Proxy]", Tt = "[object RegExp]", xe = "[object Set]", Ft = "[object String]", Bt = "[object Symbol]", xi = "[object Undefined]", Dt = "[object WeakMap]", ee = "[object WeakSet]", lr = "[object ArrayBuffer]", Rt = "[object DataView]", jt = "[object Float32Array]", kr = "[object Float64Array]", zt = "[object Int8Array]", Lt = "[object Int16Array]", Br = "[object Int32Array]", Kt = "[object Uint8Array]", Ht = "[object Uint8ClampedArray]", Ur = "[object Uint16Array]", Vt = "[object Uint32Array]", re = /\b__p \+= '';/g, Ni = /\b(__p \+=) '' \+/g, ie = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Yt = /&(?:amp|lt|gt|quot|#39);/g, ii = /[&<>"']/g, se = RegExp(Yt.source), ne = RegExp(ii.source), Ri = /<%-([\s\S]+?)%>/g, oe = /<%([\s\S]+?)%>/g, Wt = /<%=([\s\S]+?)%>/g, Oi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ae = /^\w*$/, ce = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $r = /[\\^$.*+?()[\]{}|]/g, he = RegExp($r.source), Qt = /^\s+/, Ti = /\s/, ue = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, le = /\{\n\/\* \[wrapped with (.+)\] \*/, Fi = /,? & /, fe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, pe = /[()=,{}\[\]\/\s]/, Di = /\\(\\)?/g, de = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Xt = /\w*$/, si = /^[-+]0x[0-9a-f]+$/i, ni = /^0b[01]+$/i, oi = /^\[object .+?Constructor\]$/, ai = /^0o[0-7]+$/i, ci = /^(?:0|[1-9]\d*)$/, hi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Zi = /($^)/, _n = /['\n\r\u2028\u2029\\]/g, ts = "\\ud800-\\udfff", An = "\\u0300-\\u036f", En = "\\ufe20-\\ufe2f", In = "\\u20d0-\\u20ff", Bs = An + En + In, Us = "\\u2700-\\u27bf", $s = "a-z\\xdf-\\xf6\\xf8-\\xff", Sn = "\\xac\\xb1\\xd7\\xf7", Pn = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Mn = "\\u2000-\\u206f", Cn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", tu = "A-Z\\xc0-\\xd6\\xd8-\\xde", eu = "\\ufe0e\\ufe0f", ru = Sn + Pn + Mn + Cn, Da = "['’]", y0 = "[" + ts + "]", iu = "[" + ru + "]", wo = "[" + Bs + "]", su = "\\d+", w0 = "[" + Us + "]", nu = "[" + $s + "]", ou = "[^" + ts + ru + su + Us + $s + tu + "]", qa = "\\ud83c[\\udffb-\\udfff]", b0 = "(?:" + wo + "|" + qa + ")", au = "[^" + ts + "]", ka = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ba = "[\\ud800-\\udbff][\\udc00-\\udfff]", js = "[" + tu + "]", cu = "\\u200d", hu = "(?:" + nu + "|" + ou + ")", _0 = "(?:" + js + "|" + ou + ")", uu = "(?:" + Da + "(?:d|ll|m|re|s|t|ve))?", lu = "(?:" + Da + "(?:D|LL|M|RE|S|T|VE))?", fu = b0 + "?", pu = "[" + eu + "]?", A0 = "(?:" + cu + "(?:" + [au, ka, Ba].join("|") + ")" + pu + fu + ")*", E0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", I0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", du = pu + fu + A0, S0 = "(?:" + [w0, ka, Ba].join("|") + ")" + du, P0 = "(?:" + [au + wo + "?", wo, ka, Ba, y0].join("|") + ")", M0 = RegExp(Da, "g"), C0 = RegExp(wo, "g"), Ua = RegExp(qa + "(?=" + qa + ")|" + P0 + du, "g"), x0 = RegExp([js + "?" + nu + "+" + uu + "(?=" + [iu, js, "$"].join("|") + ")", _0 + "+" + lu + "(?=" + [iu, js + hu, "$"].join("|") + ")", js + "?" + hu + "+" + uu, js + "+" + lu, I0, E0, su, S0].join("|"), "g"), N0 = RegExp("[" + cu + ts + Bs + eu + "]"), R0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, O0 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], T0 = -1, ve = {};
    ve[jt] = ve[kr] = ve[zt] = ve[Lt] = ve[Br] = ve[Kt] = ve[Ht] = ve[Ur] = ve[Vt] = !0, ve[m] = ve[$] = ve[lr] = ve[L] = ve[Rt] = ve[rt] = ve[Z] = ve[at] = ve[J] = ve[Ot] = ve[xt] = ve[Tt] = ve[xe] = ve[Ft] = ve[Dt] = !1;
    var me = {};
    me[m] = me[$] = me[lr] = me[Rt] = me[L] = me[rt] = me[jt] = me[kr] = me[zt] = me[Lt] = me[Br] = me[J] = me[Ot] = me[xt] = me[Tt] = me[xe] = me[Ft] = me[Bt] = me[Kt] = me[Ht] = me[Ur] = me[Vt] = !0, me[Z] = me[at] = me[Dt] = !1;
    var F0 = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, D0 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, q0 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, k0 = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, B0 = parseFloat, U0 = parseInt, gu = typeof Xn == "object" && Xn && Xn.Object === Object && Xn, $0 = typeof self == "object" && self && self.Object === Object && self, ke = gu || $0 || Function("return this")(), $a = t && !t.nodeType && t, ms = $a && !0 && i && !i.nodeType && i, mu = ms && ms.exports === $a, ja = mu && gu.process, Ar = function() {
      try {
        var R = ms && ms.require && ms.require("util").types;
        return R || ja && ja.binding && ja.binding("util");
      } catch {
      }
    }(), vu = Ar && Ar.isArrayBuffer, yu = Ar && Ar.isDate, wu = Ar && Ar.isMap, bu = Ar && Ar.isRegExp, _u = Ar && Ar.isSet, Au = Ar && Ar.isTypedArray;
    function fr(R, U, k) {
      switch (k.length) {
        case 0:
          return R.call(U);
        case 1:
          return R.call(U, k[0]);
        case 2:
          return R.call(U, k[0], k[1]);
        case 3:
          return R.call(U, k[0], k[1], k[2]);
      }
      return R.apply(U, k);
    }
    function j0(R, U, k, it) {
      for (var vt = -1, qt = R == null ? 0 : R.length; ++vt < qt; ) {
        var Ne = R[vt];
        U(it, Ne, k(Ne), R);
      }
      return it;
    }
    function Er(R, U) {
      for (var k = -1, it = R == null ? 0 : R.length; ++k < it && U(R[k], k, R) !== !1; )
        ;
      return R;
    }
    function z0(R, U) {
      for (var k = R == null ? 0 : R.length; k-- && U(R[k], k, R) !== !1; )
        ;
      return R;
    }
    function Eu(R, U) {
      for (var k = -1, it = R == null ? 0 : R.length; ++k < it; )
        if (!U(R[k], k, R))
          return !1;
      return !0;
    }
    function es(R, U) {
      for (var k = -1, it = R == null ? 0 : R.length, vt = 0, qt = []; ++k < it; ) {
        var Ne = R[k];
        U(Ne, k, R) && (qt[vt++] = Ne);
      }
      return qt;
    }
    function bo(R, U) {
      var k = R == null ? 0 : R.length;
      return !!k && zs(R, U, 0) > -1;
    }
    function za(R, U, k) {
      for (var it = -1, vt = R == null ? 0 : R.length; ++it < vt; )
        if (k(U, R[it]))
          return !0;
      return !1;
    }
    function we(R, U) {
      for (var k = -1, it = R == null ? 0 : R.length, vt = Array(it); ++k < it; )
        vt[k] = U(R[k], k, R);
      return vt;
    }
    function rs(R, U) {
      for (var k = -1, it = U.length, vt = R.length; ++k < it; )
        R[vt + k] = U[k];
      return R;
    }
    function La(R, U, k, it) {
      var vt = -1, qt = R == null ? 0 : R.length;
      for (it && qt && (k = R[++vt]); ++vt < qt; )
        k = U(k, R[vt], vt, R);
      return k;
    }
    function L0(R, U, k, it) {
      var vt = R == null ? 0 : R.length;
      for (it && vt && (k = R[--vt]); vt--; )
        k = U(k, R[vt], vt, R);
      return k;
    }
    function Ka(R, U) {
      for (var k = -1, it = R == null ? 0 : R.length; ++k < it; )
        if (U(R[k], k, R))
          return !0;
      return !1;
    }
    var K0 = Ha("length");
    function H0(R) {
      return R.split("");
    }
    function V0(R) {
      return R.match(fe) || [];
    }
    function Iu(R, U, k) {
      var it;
      return k(R, function(vt, qt, Ne) {
        if (U(vt, qt, Ne))
          return it = qt, !1;
      }), it;
    }
    function _o(R, U, k, it) {
      for (var vt = R.length, qt = k + (it ? 1 : -1); it ? qt-- : ++qt < vt; )
        if (U(R[qt], qt, R))
          return qt;
      return -1;
    }
    function zs(R, U, k) {
      return U === U ? sg(R, U, k) : _o(R, Su, k);
    }
    function Q0(R, U, k, it) {
      for (var vt = k - 1, qt = R.length; ++vt < qt; )
        if (it(R[vt], U))
          return vt;
      return -1;
    }
    function Su(R) {
      return R !== R;
    }
    function Pu(R, U) {
      var k = R == null ? 0 : R.length;
      return k ? Qa(R, U) / k : I;
    }
    function Ha(R) {
      return function(U) {
        return U == null ? e : U[R];
      };
    }
    function Va(R) {
      return function(U) {
        return R == null ? e : R[U];
      };
    }
    function Mu(R, U, k, it, vt) {
      return vt(R, function(qt, Ne, ge) {
        k = it ? (it = !1, qt) : U(k, qt, Ne, ge);
      }), k;
    }
    function G0(R, U) {
      var k = R.length;
      for (R.sort(U); k--; )
        R[k] = R[k].value;
      return R;
    }
    function Qa(R, U) {
      for (var k, it = -1, vt = R.length; ++it < vt; ) {
        var qt = U(R[it]);
        qt !== e && (k = k === e ? qt : k + qt);
      }
      return k;
    }
    function Ga(R, U) {
      for (var k = -1, it = Array(R); ++k < R; )
        it[k] = U(k);
      return it;
    }
    function J0(R, U) {
      return we(U, function(k) {
        return [k, R[k]];
      });
    }
    function Cu(R) {
      return R && R.slice(0, Ou(R) + 1).replace(Qt, "");
    }
    function pr(R) {
      return function(U) {
        return R(U);
      };
    }
    function Ja(R, U) {
      return we(U, function(k) {
        return R[k];
      });
    }
    function xn(R, U) {
      return R.has(U);
    }
    function xu(R, U) {
      for (var k = -1, it = R.length; ++k < it && zs(U, R[k], 0) > -1; )
        ;
      return k;
    }
    function Nu(R, U) {
      for (var k = R.length; k-- && zs(U, R[k], 0) > -1; )
        ;
      return k;
    }
    function Y0(R, U) {
      for (var k = R.length, it = 0; k--; )
        R[k] === U && ++it;
      return it;
    }
    var W0 = Va(F0), X0 = Va(D0);
    function Z0(R) {
      return "\\" + k0[R];
    }
    function tg(R, U) {
      return R == null ? e : R[U];
    }
    function Ls(R) {
      return N0.test(R);
    }
    function eg(R) {
      return R0.test(R);
    }
    function rg(R) {
      for (var U, k = []; !(U = R.next()).done; )
        k.push(U.value);
      return k;
    }
    function Ya(R) {
      var U = -1, k = Array(R.size);
      return R.forEach(function(it, vt) {
        k[++U] = [vt, it];
      }), k;
    }
    function Ru(R, U) {
      return function(k) {
        return R(U(k));
      };
    }
    function is(R, U) {
      for (var k = -1, it = R.length, vt = 0, qt = []; ++k < it; ) {
        var Ne = R[k];
        (Ne === U || Ne === P) && (R[k] = P, qt[vt++] = k);
      }
      return qt;
    }
    function Ao(R) {
      var U = -1, k = Array(R.size);
      return R.forEach(function(it) {
        k[++U] = it;
      }), k;
    }
    function ig(R) {
      var U = -1, k = Array(R.size);
      return R.forEach(function(it) {
        k[++U] = [it, it];
      }), k;
    }
    function sg(R, U, k) {
      for (var it = k - 1, vt = R.length; ++it < vt; )
        if (R[it] === U)
          return it;
      return -1;
    }
    function ng(R, U, k) {
      for (var it = k + 1; it--; )
        if (R[it] === U)
          return it;
      return it;
    }
    function Ks(R) {
      return Ls(R) ? ag(R) : K0(R);
    }
    function jr(R) {
      return Ls(R) ? cg(R) : H0(R);
    }
    function Ou(R) {
      for (var U = R.length; U-- && Ti.test(R.charAt(U)); )
        ;
      return U;
    }
    var og = Va(q0);
    function ag(R) {
      for (var U = Ua.lastIndex = 0; Ua.test(R); )
        ++U;
      return U;
    }
    function cg(R) {
      return R.match(Ua) || [];
    }
    function hg(R) {
      return R.match(x0) || [];
    }
    var ug = function R(U) {
      U = U == null ? ke : Hs.defaults(ke.Object(), U, Hs.pick(ke, O0));
      var k = U.Array, it = U.Date, vt = U.Error, qt = U.Function, Ne = U.Math, ge = U.Object, Wa = U.RegExp, lg = U.String, Ir = U.TypeError, Eo = k.prototype, fg = qt.prototype, Vs = ge.prototype, Io = U["__core-js_shared__"], So = fg.toString, Gt = Vs.hasOwnProperty, pg = 0, Tu = function() {
        var r = /[^.]+$/.exec(Io && Io.keys && Io.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), Po = Vs.toString, dg = So.call(ge), gg = ke._, mg = Wa("^" + So.call(Gt).replace($r, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Mo = mu ? U.Buffer : e, ss = U.Symbol, Co = U.Uint8Array, Fu = Mo ? Mo.allocUnsafe : e, xo = Ru(ge.getPrototypeOf, ge), Du = ge.create, qu = Vs.propertyIsEnumerable, No = Eo.splice, ku = ss ? ss.isConcatSpreadable : e, Nn = ss ? ss.iterator : e, vs = ss ? ss.toStringTag : e, Ro = function() {
        try {
          var r = As(ge, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), vg = U.clearTimeout !== ke.clearTimeout && U.clearTimeout, yg = it && it.now !== ke.Date.now && it.now, wg = U.setTimeout !== ke.setTimeout && U.setTimeout, Oo = Ne.ceil, To = Ne.floor, Xa = ge.getOwnPropertySymbols, bg = Mo ? Mo.isBuffer : e, Bu = U.isFinite, _g = Eo.join, Ag = Ru(ge.keys, ge), Re = Ne.max, Ke = Ne.min, Eg = it.now, Ig = U.parseInt, Uu = Ne.random, Sg = Eo.reverse, Za = As(U, "DataView"), Rn = As(U, "Map"), tc = As(U, "Promise"), Qs = As(U, "Set"), On = As(U, "WeakMap"), Tn = As(ge, "create"), Fo = On && new On(), Gs = {}, Pg = Es(Za), Mg = Es(Rn), Cg = Es(tc), xg = Es(Qs), Ng = Es(On), Do = ss ? ss.prototype : e, Fn = Do ? Do.valueOf : e, $u = Do ? Do.toString : e;
      function w(r) {
        if (Ae(r) && !yt(r) && !(r instanceof St)) {
          if (r instanceof Sr)
            return r;
          if (Gt.call(r, "__wrapped__"))
            return jl(r);
        }
        return new Sr(r);
      }
      var Js = /* @__PURE__ */ function() {
        function r() {
        }
        return function(n) {
          if (!_e(n))
            return {};
          if (Du)
            return Du(n);
          r.prototype = n;
          var c = new r();
          return r.prototype = e, c;
        };
      }();
      function qo() {
      }
      function Sr(r, n) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = e;
      }
      w.templateSettings = { escape: Ri, evaluate: oe, interpolate: Wt, variable: "", imports: { _: w } }, w.prototype = qo.prototype, w.prototype.constructor = w, Sr.prototype = Js(qo.prototype), Sr.prototype.constructor = Sr;
      function St(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = f, this.__views__ = [];
      }
      function Rg() {
        var r = new St(this.__wrapped__);
        return r.__actions__ = er(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = er(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = er(this.__views__), r;
      }
      function Og() {
        if (this.__filtered__) {
          var r = new St(this);
          r.__dir__ = -1, r.__filtered__ = !0;
        } else
          r = this.clone(), r.__dir__ *= -1;
        return r;
      }
      function Tg() {
        var r = this.__wrapped__.value(), n = this.__dir__, c = yt(r), l = n < 0, g = c ? r.length : 0, _ = H1(0, g, this.__views__), C = _.start, x = _.end, T = x - C, j = l ? x : C - 1, z = this.__iteratees__, V = z.length, W = 0, nt = Ke(T, this.__takeCount__);
        if (!c || !l && g == T && nt == T)
          return ul(r, this.__actions__);
        var pt = [];
        t:
          for (; T-- && W < nt; ) {
            j += n;
            for (var _t = -1, dt = r[j]; ++_t < V; ) {
              var Et = z[_t], Nt = Et.iteratee, mr = Et.type, Je = Nt(dt);
              if (mr == b)
                dt = Je;
              else if (!Je) {
                if (mr == d)
                  continue t;
                break t;
              }
            }
            pt[W++] = dt;
          }
        return pt;
      }
      St.prototype = Js(qo.prototype), St.prototype.constructor = St;
      function ys(r) {
        var n = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++n < c; ) {
          var l = r[n];
          this.set(l[0], l[1]);
        }
      }
      function Fg() {
        this.__data__ = Tn ? Tn(null) : {}, this.size = 0;
      }
      function Dg(r) {
        var n = this.has(r) && delete this.__data__[r];
        return this.size -= n ? 1 : 0, n;
      }
      function qg(r) {
        var n = this.__data__;
        if (Tn) {
          var c = n[r];
          return c === v ? e : c;
        }
        return Gt.call(n, r) ? n[r] : e;
      }
      function kg(r) {
        var n = this.__data__;
        return Tn ? n[r] !== e : Gt.call(n, r);
      }
      function Bg(r, n) {
        var c = this.__data__;
        return this.size += this.has(r) ? 0 : 1, c[r] = Tn && n === e ? v : n, this;
      }
      ys.prototype.clear = Fg, ys.prototype.delete = Dg, ys.prototype.get = qg, ys.prototype.has = kg, ys.prototype.set = Bg;
      function qi(r) {
        var n = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++n < c; ) {
          var l = r[n];
          this.set(l[0], l[1]);
        }
      }
      function Ug() {
        this.__data__ = [], this.size = 0;
      }
      function $g(r) {
        var n = this.__data__, c = ko(n, r);
        if (c < 0)
          return !1;
        var l = n.length - 1;
        return c == l ? n.pop() : No.call(n, c, 1), --this.size, !0;
      }
      function jg(r) {
        var n = this.__data__, c = ko(n, r);
        return c < 0 ? e : n[c][1];
      }
      function zg(r) {
        return ko(this.__data__, r) > -1;
      }
      function Lg(r, n) {
        var c = this.__data__, l = ko(c, r);
        return l < 0 ? (++this.size, c.push([r, n])) : c[l][1] = n, this;
      }
      qi.prototype.clear = Ug, qi.prototype.delete = $g, qi.prototype.get = jg, qi.prototype.has = zg, qi.prototype.set = Lg;
      function ki(r) {
        var n = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++n < c; ) {
          var l = r[n];
          this.set(l[0], l[1]);
        }
      }
      function Kg() {
        this.size = 0, this.__data__ = { hash: new ys(), map: new (Rn || qi)(), string: new ys() };
      }
      function Hg(r) {
        var n = Jo(this, r).delete(r);
        return this.size -= n ? 1 : 0, n;
      }
      function Vg(r) {
        return Jo(this, r).get(r);
      }
      function Qg(r) {
        return Jo(this, r).has(r);
      }
      function Gg(r, n) {
        var c = Jo(this, r), l = c.size;
        return c.set(r, n), this.size += c.size == l ? 0 : 1, this;
      }
      ki.prototype.clear = Kg, ki.prototype.delete = Hg, ki.prototype.get = Vg, ki.prototype.has = Qg, ki.prototype.set = Gg;
      function ws(r) {
        var n = -1, c = r == null ? 0 : r.length;
        for (this.__data__ = new ki(); ++n < c; )
          this.add(r[n]);
      }
      function Jg(r) {
        return this.__data__.set(r, v), this;
      }
      function Yg(r) {
        return this.__data__.has(r);
      }
      ws.prototype.add = ws.prototype.push = Jg, ws.prototype.has = Yg;
      function zr(r) {
        var n = this.__data__ = new qi(r);
        this.size = n.size;
      }
      function Wg() {
        this.__data__ = new qi(), this.size = 0;
      }
      function Xg(r) {
        var n = this.__data__, c = n.delete(r);
        return this.size = n.size, c;
      }
      function Zg(r) {
        return this.__data__.get(r);
      }
      function t1(r) {
        return this.__data__.has(r);
      }
      function e1(r, n) {
        var c = this.__data__;
        if (c instanceof qi) {
          var l = c.__data__;
          if (!Rn || l.length < o - 1)
            return l.push([r, n]), this.size = ++c.size, this;
          c = this.__data__ = new ki(l);
        }
        return c.set(r, n), this.size = c.size, this;
      }
      zr.prototype.clear = Wg, zr.prototype.delete = Xg, zr.prototype.get = Zg, zr.prototype.has = t1, zr.prototype.set = e1;
      function ju(r, n) {
        var c = yt(r), l = !c && Is(r), g = !c && !l && hs(r), _ = !c && !l && !g && Zs(r), C = c || l || g || _, x = C ? Ga(r.length, lg) : [], T = x.length;
        for (var j in r)
          (n || Gt.call(r, j)) && !(C && (j == "length" || g && (j == "offset" || j == "parent") || _ && (j == "buffer" || j == "byteLength" || j == "byteOffset") || ji(j, T))) && x.push(j);
        return x;
      }
      function zu(r) {
        var n = r.length;
        return n ? r[lc(0, n - 1)] : e;
      }
      function r1(r, n) {
        return Yo(er(r), bs(n, 0, r.length));
      }
      function i1(r) {
        return Yo(er(r));
      }
      function ec(r, n, c) {
        (c !== e && !Lr(r[n], c) || c === e && !(n in r)) && Bi(r, n, c);
      }
      function Dn(r, n, c) {
        var l = r[n];
        (!(Gt.call(r, n) && Lr(l, c)) || c === e && !(n in r)) && Bi(r, n, c);
      }
      function ko(r, n) {
        for (var c = r.length; c--; )
          if (Lr(r[c][0], n))
            return c;
        return -1;
      }
      function s1(r, n, c, l) {
        return ns(r, function(g, _, C) {
          n(l, g, c(g), C);
        }), l;
      }
      function Lu(r, n) {
        return r && li(n, De(n), r);
      }
      function n1(r, n) {
        return r && li(n, ir(n), r);
      }
      function Bi(r, n, c) {
        n == "__proto__" && Ro ? Ro(r, n, { configurable: !0, enumerable: !0, value: c, writable: !0 }) : r[n] = c;
      }
      function rc(r, n) {
        for (var c = -1, l = n.length, g = k(l), _ = r == null; ++c < l; )
          g[c] = _ ? e : qc(r, n[c]);
        return g;
      }
      function bs(r, n, c) {
        return r === r && (c !== e && (r = r <= c ? r : c), n !== e && (r = r >= n ? r : n)), r;
      }
      function Pr(r, n, c, l, g, _) {
        var C, x = n & S, T = n & O, j = n & F;
        if (c && (C = g ? c(r, l, g, _) : c(r)), C !== e)
          return C;
        if (!_e(r))
          return r;
        var z = yt(r);
        if (z) {
          if (C = Q1(r), !x)
            return er(r, C);
        } else {
          var V = He(r), W = V == at || V == mt;
          if (hs(r))
            return pl(r, x);
          if (V == xt || V == m || W && !g) {
            if (C = T || W ? {} : Ol(r), !x)
              return T ? q1(r, n1(C, r)) : D1(r, Lu(C, r));
          } else {
            if (!me[V])
              return g ? r : {};
            C = G1(r, V, x);
          }
        }
        _ || (_ = new zr());
        var nt = _.get(r);
        if (nt)
          return nt;
        _.set(r, C), cf(r) ? r.forEach(function(dt) {
          C.add(Pr(dt, n, c, dt, r, _));
        }) : of(r) && r.forEach(function(dt, Et) {
          C.set(Et, Pr(dt, n, c, Et, r, _));
        });
        var pt = j ? T ? Ac : _c : T ? ir : De, _t = z ? e : pt(r);
        return Er(_t || r, function(dt, Et) {
          _t && (Et = dt, dt = r[Et]), Dn(C, Et, Pr(dt, n, c, Et, r, _));
        }), C;
      }
      function o1(r) {
        var n = De(r);
        return function(c) {
          return Ku(c, r, n);
        };
      }
      function Ku(r, n, c) {
        var l = c.length;
        if (r == null)
          return !l;
        for (r = ge(r); l--; ) {
          var g = c[l], _ = n[g], C = r[g];
          if (C === e && !(g in r) || !_(C))
            return !1;
        }
        return !0;
      }
      function Hu(r, n, c) {
        if (typeof r != "function")
          throw new Ir(h);
        return zn(function() {
          r.apply(e, c);
        }, n);
      }
      function qn(r, n, c, l) {
        var g = -1, _ = bo, C = !0, x = r.length, T = [], j = n.length;
        if (!x)
          return T;
        c && (n = we(n, pr(c))), l ? (_ = za, C = !1) : n.length >= o && (_ = xn, C = !1, n = new ws(n));
        t:
          for (; ++g < x; ) {
            var z = r[g], V = c == null ? z : c(z);
            if (z = l || z !== 0 ? z : 0, C && V === V) {
              for (var W = j; W--; )
                if (n[W] === V)
                  continue t;
              T.push(z);
            } else
              _(n, V, l) || T.push(z);
          }
        return T;
      }
      var ns = yl(ui), Vu = yl(sc, !0);
      function a1(r, n) {
        var c = !0;
        return ns(r, function(l, g, _) {
          return c = !!n(l, g, _), c;
        }), c;
      }
      function Bo(r, n, c) {
        for (var l = -1, g = r.length; ++l < g; ) {
          var _ = r[l], C = n(_);
          if (C != null && (x === e ? C === C && !gr(C) : c(C, x)))
            var x = C, T = _;
        }
        return T;
      }
      function c1(r, n, c, l) {
        var g = r.length;
        for (c = bt(c), c < 0 && (c = -c > g ? 0 : g + c), l = l === e || l > g ? g : bt(l), l < 0 && (l += g), l = c > l ? 0 : uf(l); c < l; )
          r[c++] = n;
        return r;
      }
      function Qu(r, n) {
        var c = [];
        return ns(r, function(l, g, _) {
          n(l, g, _) && c.push(l);
        }), c;
      }
      function Be(r, n, c, l, g) {
        var _ = -1, C = r.length;
        for (c || (c = Y1), g || (g = []); ++_ < C; ) {
          var x = r[_];
          n > 0 && c(x) ? n > 1 ? Be(x, n - 1, c, l, g) : rs(g, x) : l || (g[g.length] = x);
        }
        return g;
      }
      var ic = wl(), Gu = wl(!0);
      function ui(r, n) {
        return r && ic(r, n, De);
      }
      function sc(r, n) {
        return r && Gu(r, n, De);
      }
      function Uo(r, n) {
        return es(n, function(c) {
          return zi(r[c]);
        });
      }
      function _s(r, n) {
        n = as(n, r);
        for (var c = 0, l = n.length; r != null && c < l; )
          r = r[fi(n[c++])];
        return c && c == l ? r : e;
      }
      function Ju(r, n, c) {
        var l = n(r);
        return yt(r) ? l : rs(l, c(r));
      }
      function Qe(r) {
        return r == null ? r === e ? xi : Zt : vs && vs in ge(r) ? K1(r) : im(r);
      }
      function nc(r, n) {
        return r > n;
      }
      function h1(r, n) {
        return r != null && Gt.call(r, n);
      }
      function u1(r, n) {
        return r != null && n in ge(r);
      }
      function l1(r, n, c) {
        return r >= Ke(n, c) && r < Re(n, c);
      }
      function oc(r, n, c) {
        for (var l = c ? za : bo, g = r[0].length, _ = r.length, C = _, x = k(_), T = 1 / 0, j = []; C--; ) {
          var z = r[C];
          C && n && (z = we(z, pr(n))), T = Ke(z.length, T), x[C] = !c && (n || g >= 120 && z.length >= 120) ? new ws(C && z) : e;
        }
        z = r[0];
        var V = -1, W = x[0];
        t:
          for (; ++V < g && j.length < T; ) {
            var nt = z[V], pt = n ? n(nt) : nt;
            if (nt = c || nt !== 0 ? nt : 0, !(W ? xn(W, pt) : l(j, pt, c))) {
              for (C = _; --C; ) {
                var _t = x[C];
                if (!(_t ? xn(_t, pt) : l(r[C], pt, c)))
                  continue t;
              }
              W && W.push(pt), j.push(nt);
            }
          }
        return j;
      }
      function f1(r, n, c, l) {
        return ui(r, function(g, _, C) {
          n(l, c(g), _, C);
        }), l;
      }
      function kn(r, n, c) {
        n = as(n, r), r = ql(r, n);
        var l = r == null ? r : r[fi(Cr(n))];
        return l == null ? e : fr(l, r, c);
      }
      function Yu(r) {
        return Ae(r) && Qe(r) == m;
      }
      function p1(r) {
        return Ae(r) && Qe(r) == lr;
      }
      function d1(r) {
        return Ae(r) && Qe(r) == rt;
      }
      function Bn(r, n, c, l, g) {
        return r === n ? !0 : r == null || n == null || !Ae(r) && !Ae(n) ? r !== r && n !== n : g1(r, n, c, l, Bn, g);
      }
      function g1(r, n, c, l, g, _) {
        var C = yt(r), x = yt(n), T = C ? $ : He(r), j = x ? $ : He(n);
        T = T == m ? xt : T, j = j == m ? xt : j;
        var z = T == xt, V = j == xt, W = T == j;
        if (W && hs(r)) {
          if (!hs(n))
            return !1;
          C = !0, z = !1;
        }
        if (W && !z)
          return _ || (_ = new zr()), C || Zs(r) ? xl(r, n, c, l, g, _) : z1(r, n, T, c, l, g, _);
        if (!(c & q)) {
          var nt = z && Gt.call(r, "__wrapped__"), pt = V && Gt.call(n, "__wrapped__");
          if (nt || pt) {
            var _t = nt ? r.value() : r, dt = pt ? n.value() : n;
            return _ || (_ = new zr()), g(_t, dt, c, l, _);
          }
        }
        return W ? (_ || (_ = new zr()), L1(r, n, c, l, g, _)) : !1;
      }
      function m1(r) {
        return Ae(r) && He(r) == J;
      }
      function ac(r, n, c, l) {
        var g = c.length, _ = g, C = !l;
        if (r == null)
          return !_;
        for (r = ge(r); g--; ) {
          var x = c[g];
          if (C && x[2] ? x[1] !== r[x[0]] : !(x[0] in r))
            return !1;
        }
        for (; ++g < _; ) {
          x = c[g];
          var T = x[0], j = r[T], z = x[1];
          if (C && x[2]) {
            if (j === e && !(T in r))
              return !1;
          } else {
            var V = new zr();
            if (l)
              var W = l(j, z, T, r, n, V);
            if (!(W === e ? Bn(z, j, q | K, l, V) : W))
              return !1;
          }
        }
        return !0;
      }
      function Wu(r) {
        if (!_e(r) || X1(r))
          return !1;
        var n = zi(r) ? mg : oi;
        return n.test(Es(r));
      }
      function v1(r) {
        return Ae(r) && Qe(r) == Tt;
      }
      function y1(r) {
        return Ae(r) && He(r) == xe;
      }
      function w1(r) {
        return Ae(r) && ra(r.length) && !!ve[Qe(r)];
      }
      function Xu(r) {
        return typeof r == "function" ? r : r == null ? sr : typeof r == "object" ? yt(r) ? el(r[0], r[1]) : tl(r) : _f(r);
      }
      function cc(r) {
        if (!jn(r))
          return Ag(r);
        var n = [];
        for (var c in ge(r))
          Gt.call(r, c) && c != "constructor" && n.push(c);
        return n;
      }
      function b1(r) {
        if (!_e(r))
          return rm(r);
        var n = jn(r), c = [];
        for (var l in r)
          l == "constructor" && (n || !Gt.call(r, l)) || c.push(l);
        return c;
      }
      function hc(r, n) {
        return r < n;
      }
      function Zu(r, n) {
        var c = -1, l = rr(r) ? k(r.length) : [];
        return ns(r, function(g, _, C) {
          l[++c] = n(g, _, C);
        }), l;
      }
      function tl(r) {
        var n = Ic(r);
        return n.length == 1 && n[0][2] ? Fl(n[0][0], n[0][1]) : function(c) {
          return c === r || ac(c, r, n);
        };
      }
      function el(r, n) {
        return Pc(r) && Tl(n) ? Fl(fi(r), n) : function(c) {
          var l = qc(c, r);
          return l === e && l === n ? kc(c, r) : Bn(n, l, q | K);
        };
      }
      function $o(r, n, c, l, g) {
        r !== n && ic(n, function(_, C) {
          if (g || (g = new zr()), _e(_))
            _1(r, n, C, c, $o, l, g);
          else {
            var x = l ? l(Cc(r, C), _, C + "", r, n, g) : e;
            x === e && (x = _), ec(r, C, x);
          }
        }, ir);
      }
      function _1(r, n, c, l, g, _, C) {
        var x = Cc(r, c), T = Cc(n, c), j = C.get(T);
        if (j) {
          ec(r, c, j);
          return;
        }
        var z = _ ? _(x, T, c + "", r, n, C) : e, V = z === e;
        if (V) {
          var W = yt(T), nt = !W && hs(T), pt = !W && !nt && Zs(T);
          z = T, W || nt || pt ? yt(x) ? z = x : Ie(x) ? z = er(x) : nt ? (V = !1, z = pl(T, !0)) : pt ? (V = !1, z = dl(T, !0)) : z = [] : Ln(T) || Is(T) ? (z = x, Is(x) ? z = lf(x) : (!_e(x) || zi(x)) && (z = Ol(T))) : V = !1;
        }
        V && (C.set(T, z), g(z, T, l, _, C), C.delete(T)), ec(r, c, z);
      }
      function rl(r, n) {
        var c = r.length;
        if (c)
          return n += n < 0 ? c : 0, ji(n, c) ? r[n] : e;
      }
      function il(r, n, c) {
        n.length ? n = we(n, function(_) {
          return yt(_) ? function(C) {
            return _s(C, _.length === 1 ? _[0] : _);
          } : _;
        }) : n = [sr];
        var l = -1;
        n = we(n, pr(ft()));
        var g = Zu(r, function(_, C, x) {
          var T = we(n, function(j) {
            return j(_);
          });
          return { criteria: T, index: ++l, value: _ };
        });
        return G0(g, function(_, C) {
          return F1(_, C, c);
        });
      }
      function A1(r, n) {
        return sl(r, n, function(c, l) {
          return kc(r, l);
        });
      }
      function sl(r, n, c) {
        for (var l = -1, g = n.length, _ = {}; ++l < g; ) {
          var C = n[l], x = _s(r, C);
          c(x, C) && Un(_, as(C, r), x);
        }
        return _;
      }
      function E1(r) {
        return function(n) {
          return _s(n, r);
        };
      }
      function uc(r, n, c, l) {
        var g = l ? Q0 : zs, _ = -1, C = n.length, x = r;
        for (r === n && (n = er(n)), c && (x = we(r, pr(c))); ++_ < C; )
          for (var T = 0, j = n[_], z = c ? c(j) : j; (T = g(x, z, T, l)) > -1; )
            x !== r && No.call(x, T, 1), No.call(r, T, 1);
        return r;
      }
      function nl(r, n) {
        for (var c = r ? n.length : 0, l = c - 1; c--; ) {
          var g = n[c];
          if (c == l || g !== _) {
            var _ = g;
            ji(g) ? No.call(r, g, 1) : dc(r, g);
          }
        }
        return r;
      }
      function lc(r, n) {
        return r + To(Uu() * (n - r + 1));
      }
      function I1(r, n, c, l) {
        for (var g = -1, _ = Re(Oo((n - r) / (c || 1)), 0), C = k(_); _--; )
          C[l ? _ : ++g] = r, r += c;
        return C;
      }
      function fc(r, n) {
        var c = "";
        if (!r || n < 1 || n > N)
          return c;
        do
          n % 2 && (c += r), n = To(n / 2), n && (r += r);
        while (n);
        return c;
      }
      function At(r, n) {
        return xc(Dl(r, n, sr), r + "");
      }
      function S1(r) {
        return zu(tn(r));
      }
      function P1(r, n) {
        var c = tn(r);
        return Yo(c, bs(n, 0, c.length));
      }
      function Un(r, n, c, l) {
        if (!_e(r))
          return r;
        n = as(n, r);
        for (var g = -1, _ = n.length, C = _ - 1, x = r; x != null && ++g < _; ) {
          var T = fi(n[g]), j = c;
          if (T === "__proto__" || T === "constructor" || T === "prototype")
            return r;
          if (g != C) {
            var z = x[T];
            j = l ? l(z, T, x) : e, j === e && (j = _e(z) ? z : ji(n[g + 1]) ? [] : {});
          }
          Dn(x, T, j), x = x[T];
        }
        return r;
      }
      var ol = Fo ? function(r, n) {
        return Fo.set(r, n), r;
      } : sr, M1 = Ro ? function(r, n) {
        return Ro(r, "toString", { configurable: !0, enumerable: !1, value: Uc(n), writable: !0 });
      } : sr;
      function C1(r) {
        return Yo(tn(r));
      }
      function Mr(r, n, c) {
        var l = -1, g = r.length;
        n < 0 && (n = -n > g ? 0 : g + n), c = c > g ? g : c, c < 0 && (c += g), g = n > c ? 0 : c - n >>> 0, n >>>= 0;
        for (var _ = k(g); ++l < g; )
          _[l] = r[l + n];
        return _;
      }
      function x1(r, n) {
        var c;
        return ns(r, function(l, g, _) {
          return c = n(l, g, _), !c;
        }), !!c;
      }
      function jo(r, n, c) {
        var l = 0, g = r == null ? l : r.length;
        if (typeof n == "number" && n === n && g <= lt) {
          for (; l < g; ) {
            var _ = l + g >>> 1, C = r[_];
            C !== null && !gr(C) && (c ? C <= n : C < n) ? l = _ + 1 : g = _;
          }
          return g;
        }
        return pc(r, n, sr, c);
      }
      function pc(r, n, c, l) {
        var g = 0, _ = r == null ? 0 : r.length;
        if (_ === 0)
          return 0;
        n = c(n);
        for (var C = n !== n, x = n === null, T = gr(n), j = n === e; g < _; ) {
          var z = To((g + _) / 2), V = c(r[z]), W = V !== e, nt = V === null, pt = V === V, _t = gr(V);
          if (C)
            var dt = l || pt;
          else
            j ? dt = pt && (l || W) : x ? dt = pt && W && (l || !nt) : T ? dt = pt && W && !nt && (l || !_t) : nt || _t ? dt = !1 : dt = l ? V <= n : V < n;
          dt ? g = z + 1 : _ = z;
        }
        return Ke(_, A);
      }
      function al(r, n) {
        for (var c = -1, l = r.length, g = 0, _ = []; ++c < l; ) {
          var C = r[c], x = n ? n(C) : C;
          if (!c || !Lr(x, T)) {
            var T = x;
            _[g++] = C === 0 ? 0 : C;
          }
        }
        return _;
      }
      function cl(r) {
        return typeof r == "number" ? r : gr(r) ? I : +r;
      }
      function dr(r) {
        if (typeof r == "string")
          return r;
        if (yt(r))
          return we(r, dr) + "";
        if (gr(r))
          return $u ? $u.call(r) : "";
        var n = r + "";
        return n == "0" && 1 / r == -M ? "-0" : n;
      }
      function os(r, n, c) {
        var l = -1, g = bo, _ = r.length, C = !0, x = [], T = x;
        if (c)
          C = !1, g = za;
        else if (_ >= o) {
          var j = n ? null : $1(r);
          if (j)
            return Ao(j);
          C = !1, g = xn, T = new ws();
        } else
          T = n ? [] : x;
        t:
          for (; ++l < _; ) {
            var z = r[l], V = n ? n(z) : z;
            if (z = c || z !== 0 ? z : 0, C && V === V) {
              for (var W = T.length; W--; )
                if (T[W] === V)
                  continue t;
              n && T.push(V), x.push(z);
            } else
              g(T, V, c) || (T !== x && T.push(V), x.push(z));
          }
        return x;
      }
      function dc(r, n) {
        return n = as(n, r), r = ql(r, n), r == null || delete r[fi(Cr(n))];
      }
      function hl(r, n, c, l) {
        return Un(r, n, c(_s(r, n)), l);
      }
      function zo(r, n, c, l) {
        for (var g = r.length, _ = l ? g : -1; (l ? _-- : ++_ < g) && n(r[_], _, r); )
          ;
        return c ? Mr(r, l ? 0 : _, l ? _ + 1 : g) : Mr(r, l ? _ + 1 : 0, l ? g : _);
      }
      function ul(r, n) {
        var c = r;
        return c instanceof St && (c = c.value()), La(n, function(l, g) {
          return g.func.apply(g.thisArg, rs([l], g.args));
        }, c);
      }
      function gc(r, n, c) {
        var l = r.length;
        if (l < 2)
          return l ? os(r[0]) : [];
        for (var g = -1, _ = k(l); ++g < l; )
          for (var C = r[g], x = -1; ++x < l; )
            x != g && (_[g] = qn(_[g] || C, r[x], n, c));
        return os(Be(_, 1), n, c);
      }
      function ll(r, n, c) {
        for (var l = -1, g = r.length, _ = n.length, C = {}; ++l < g; ) {
          var x = l < _ ? n[l] : e;
          c(C, r[l], x);
        }
        return C;
      }
      function mc(r) {
        return Ie(r) ? r : [];
      }
      function vc(r) {
        return typeof r == "function" ? r : sr;
      }
      function as(r, n) {
        return yt(r) ? r : Pc(r, n) ? [r] : $l(Ut(r));
      }
      var N1 = At;
      function cs(r, n, c) {
        var l = r.length;
        return c = c === e ? l : c, !n && c >= l ? r : Mr(r, n, c);
      }
      var fl = vg || function(r) {
        return ke.clearTimeout(r);
      };
      function pl(r, n) {
        if (n)
          return r.slice();
        var c = r.length, l = Fu ? Fu(c) : new r.constructor(c);
        return r.copy(l), l;
      }
      function yc(r) {
        var n = new r.constructor(r.byteLength);
        return new Co(n).set(new Co(r)), n;
      }
      function R1(r, n) {
        var c = n ? yc(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.byteLength);
      }
      function O1(r) {
        var n = new r.constructor(r.source, Xt.exec(r));
        return n.lastIndex = r.lastIndex, n;
      }
      function T1(r) {
        return Fn ? ge(Fn.call(r)) : {};
      }
      function dl(r, n) {
        var c = n ? yc(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.length);
      }
      function gl(r, n) {
        if (r !== n) {
          var c = r !== e, l = r === null, g = r === r, _ = gr(r), C = n !== e, x = n === null, T = n === n, j = gr(n);
          if (!x && !j && !_ && r > n || _ && C && T && !x && !j || l && C && T || !c && T || !g)
            return 1;
          if (!l && !_ && !j && r < n || j && c && g && !l && !_ || x && c && g || !C && g || !T)
            return -1;
        }
        return 0;
      }
      function F1(r, n, c) {
        for (var l = -1, g = r.criteria, _ = n.criteria, C = g.length, x = c.length; ++l < C; ) {
          var T = gl(g[l], _[l]);
          if (T) {
            if (l >= x)
              return T;
            var j = c[l];
            return T * (j == "desc" ? -1 : 1);
          }
        }
        return r.index - n.index;
      }
      function ml(r, n, c, l) {
        for (var g = -1, _ = r.length, C = c.length, x = -1, T = n.length, j = Re(_ - C, 0), z = k(T + j), V = !l; ++x < T; )
          z[x] = n[x];
        for (; ++g < C; )
          (V || g < _) && (z[c[g]] = r[g]);
        for (; j--; )
          z[x++] = r[g++];
        return z;
      }
      function vl(r, n, c, l) {
        for (var g = -1, _ = r.length, C = -1, x = c.length, T = -1, j = n.length, z = Re(_ - x, 0), V = k(z + j), W = !l; ++g < z; )
          V[g] = r[g];
        for (var nt = g; ++T < j; )
          V[nt + T] = n[T];
        for (; ++C < x; )
          (W || g < _) && (V[nt + c[C]] = r[g++]);
        return V;
      }
      function er(r, n) {
        var c = -1, l = r.length;
        for (n || (n = k(l)); ++c < l; )
          n[c] = r[c];
        return n;
      }
      function li(r, n, c, l) {
        var g = !c;
        c || (c = {});
        for (var _ = -1, C = n.length; ++_ < C; ) {
          var x = n[_], T = l ? l(c[x], r[x], x, c, r) : e;
          T === e && (T = r[x]), g ? Bi(c, x, T) : Dn(c, x, T);
        }
        return c;
      }
      function D1(r, n) {
        return li(r, Sc(r), n);
      }
      function q1(r, n) {
        return li(r, Nl(r), n);
      }
      function Lo(r, n) {
        return function(c, l) {
          var g = yt(c) ? j0 : s1, _ = n ? n() : {};
          return g(c, r, ft(l, 2), _);
        };
      }
      function Ys(r) {
        return At(function(n, c) {
          var l = -1, g = c.length, _ = g > 1 ? c[g - 1] : e, C = g > 2 ? c[2] : e;
          for (_ = r.length > 3 && typeof _ == "function" ? (g--, _) : e, C && Ge(c[0], c[1], C) && (_ = g < 3 ? e : _, g = 1), n = ge(n); ++l < g; ) {
            var x = c[l];
            x && r(n, x, l, _);
          }
          return n;
        });
      }
      function yl(r, n) {
        return function(c, l) {
          if (c == null)
            return c;
          if (!rr(c))
            return r(c, l);
          for (var g = c.length, _ = n ? g : -1, C = ge(c); (n ? _-- : ++_ < g) && l(C[_], _, C) !== !1; )
            ;
          return c;
        };
      }
      function wl(r) {
        return function(n, c, l) {
          for (var g = -1, _ = ge(n), C = l(n), x = C.length; x--; ) {
            var T = C[r ? x : ++g];
            if (c(_[T], T, _) === !1)
              break;
          }
          return n;
        };
      }
      function k1(r, n, c) {
        var l = n & H, g = $n(r);
        function _() {
          var C = this && this !== ke && this instanceof _ ? g : r;
          return C.apply(l ? c : this, arguments);
        }
        return _;
      }
      function bl(r) {
        return function(n) {
          n = Ut(n);
          var c = Ls(n) ? jr(n) : e, l = c ? c[0] : n.charAt(0), g = c ? cs(c, 1).join("") : n.slice(1);
          return l[r]() + g;
        };
      }
      function Ws(r) {
        return function(n) {
          return La(wf(yf(n).replace(M0, "")), r, "");
        };
      }
      function $n(r) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new r();
            case 1:
              return new r(n[0]);
            case 2:
              return new r(n[0], n[1]);
            case 3:
              return new r(n[0], n[1], n[2]);
            case 4:
              return new r(n[0], n[1], n[2], n[3]);
            case 5:
              return new r(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new r(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new r(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var c = Js(r.prototype), l = r.apply(c, n);
          return _e(l) ? l : c;
        };
      }
      function B1(r, n, c) {
        var l = $n(r);
        function g() {
          for (var _ = arguments.length, C = k(_), x = _, T = Xs(g); x--; )
            C[x] = arguments[x];
          var j = _ < 3 && C[0] !== T && C[_ - 1] !== T ? [] : is(C, T);
          if (_ -= j.length, _ < c)
            return Sl(r, n, Ko, g.placeholder, e, C, j, e, e, c - _);
          var z = this && this !== ke && this instanceof g ? l : r;
          return fr(z, this, C);
        }
        return g;
      }
      function _l(r) {
        return function(n, c, l) {
          var g = ge(n);
          if (!rr(n)) {
            var _ = ft(c, 3);
            n = De(n), c = function(x) {
              return _(g[x], x, g);
            };
          }
          var C = r(n, c, l);
          return C > -1 ? g[_ ? n[C] : C] : e;
        };
      }
      function Al(r) {
        return $i(function(n) {
          var c = n.length, l = c, g = Sr.prototype.thru;
          for (r && n.reverse(); l--; ) {
            var _ = n[l];
            if (typeof _ != "function")
              throw new Ir(h);
            if (g && !C && Go(_) == "wrapper")
              var C = new Sr([], !0);
          }
          for (l = C ? l : c; ++l < c; ) {
            _ = n[l];
            var x = Go(_), T = x == "wrapper" ? Ec(_) : e;
            T && Mc(T[0]) && T[1] == (st | ut | et | gt) && !T[4].length && T[9] == 1 ? C = C[Go(T[0])].apply(C, T[3]) : C = _.length == 1 && Mc(_) ? C[x]() : C.thru(_);
          }
          return function() {
            var j = arguments, z = j[0];
            if (C && j.length == 1 && yt(z))
              return C.plant(z).value();
            for (var V = 0, W = c ? n[V].apply(this, j) : z; ++V < c; )
              W = n[V].call(this, W);
            return W;
          };
        });
      }
      function Ko(r, n, c, l, g, _, C, x, T, j) {
        var z = n & st, V = n & H, W = n & Q, nt = n & (ut | Y), pt = n & kt, _t = W ? e : $n(r);
        function dt() {
          for (var Et = arguments.length, Nt = k(Et), mr = Et; mr--; )
            Nt[mr] = arguments[mr];
          if (nt)
            var Je = Xs(dt), vr = Y0(Nt, Je);
          if (l && (Nt = ml(Nt, l, g, nt)), _ && (Nt = vl(Nt, _, C, nt)), Et -= vr, nt && Et < j) {
            var Se = is(Nt, Je);
            return Sl(r, n, Ko, dt.placeholder, c, Nt, Se, x, T, j - Et);
          }
          var Kr = V ? c : this, Ki = W ? Kr[r] : r;
          return Et = Nt.length, x ? Nt = sm(Nt, x) : pt && Et > 1 && Nt.reverse(), z && T < Et && (Nt.length = T), this && this !== ke && this instanceof dt && (Ki = _t || $n(Ki)), Ki.apply(Kr, Nt);
        }
        return dt;
      }
      function El(r, n) {
        return function(c, l) {
          return f1(c, r, n(l), {});
        };
      }
      function Ho(r, n) {
        return function(c, l) {
          var g;
          if (c === e && l === e)
            return n;
          if (c !== e && (g = c), l !== e) {
            if (g === e)
              return l;
            typeof c == "string" || typeof l == "string" ? (c = dr(c), l = dr(l)) : (c = cl(c), l = cl(l)), g = r(c, l);
          }
          return g;
        };
      }
      function wc(r) {
        return $i(function(n) {
          return n = we(n, pr(ft())), At(function(c) {
            var l = this;
            return r(n, function(g) {
              return fr(g, l, c);
            });
          });
        });
      }
      function Vo(r, n) {
        n = n === e ? " " : dr(n);
        var c = n.length;
        if (c < 2)
          return c ? fc(n, r) : n;
        var l = fc(n, Oo(r / Ks(n)));
        return Ls(n) ? cs(jr(l), 0, r).join("") : l.slice(0, r);
      }
      function U1(r, n, c, l) {
        var g = n & H, _ = $n(r);
        function C() {
          for (var x = -1, T = arguments.length, j = -1, z = l.length, V = k(z + T), W = this && this !== ke && this instanceof C ? _ : r; ++j < z; )
            V[j] = l[j];
          for (; T--; )
            V[j++] = arguments[++x];
          return fr(W, g ? c : this, V);
        }
        return C;
      }
      function Il(r) {
        return function(n, c, l) {
          return l && typeof l != "number" && Ge(n, c, l) && (c = l = e), n = Li(n), c === e ? (c = n, n = 0) : c = Li(c), l = l === e ? n < c ? 1 : -1 : Li(l), I1(n, c, l, r);
        };
      }
      function Qo(r) {
        return function(n, c) {
          return typeof n == "string" && typeof c == "string" || (n = xr(n), c = xr(c)), r(n, c);
        };
      }
      function Sl(r, n, c, l, g, _, C, x, T, j) {
        var z = n & ut, V = z ? C : e, W = z ? e : C, nt = z ? _ : e, pt = z ? e : _;
        n |= z ? et : ct, n &= ~(z ? ct : et), n & ht || (n &= ~(H | Q));
        var _t = [r, n, g, nt, V, pt, W, x, T, j], dt = c.apply(e, _t);
        return Mc(r) && kl(dt, _t), dt.placeholder = l, Bl(dt, r, n);
      }
      function bc(r) {
        var n = Ne[r];
        return function(c, l) {
          if (c = xr(c), l = l == null ? 0 : Ke(bt(l), 292), l && Bu(c)) {
            var g = (Ut(c) + "e").split("e"), _ = n(g[0] + "e" + (+g[1] + l));
            return g = (Ut(_) + "e").split("e"), +(g[0] + "e" + (+g[1] - l));
          }
          return n(c);
        };
      }
      var $1 = Qs && 1 / Ao(new Qs([, -0]))[1] == M ? function(r) {
        return new Qs(r);
      } : zc;
      function Pl(r) {
        return function(n) {
          var c = He(n);
          return c == J ? Ya(n) : c == xe ? ig(n) : J0(n, r(n));
        };
      }
      function Ui(r, n, c, l, g, _, C, x) {
        var T = n & Q;
        if (!T && typeof r != "function")
          throw new Ir(h);
        var j = l ? l.length : 0;
        if (j || (n &= ~(et | ct), l = g = e), C = C === e ? C : Re(bt(C), 0), x = x === e ? x : bt(x), j -= g ? g.length : 0, n & ct) {
          var z = l, V = g;
          l = g = e;
        }
        var W = T ? e : Ec(r), nt = [r, n, c, l, g, z, V, _, C, x];
        if (W && em(nt, W), r = nt[0], n = nt[1], c = nt[2], l = nt[3], g = nt[4], x = nt[9] = nt[9] === e ? T ? 0 : r.length : Re(nt[9] - j, 0), !x && n & (ut | Y) && (n &= ~(ut | Y)), !n || n == H)
          var pt = k1(r, n, c);
        else
          n == ut || n == Y ? pt = B1(r, n, x) : (n == et || n == (H | et)) && !g.length ? pt = U1(r, n, c, l) : pt = Ko.apply(e, nt);
        var _t = W ? ol : kl;
        return Bl(_t(pt, nt), r, n);
      }
      function Ml(r, n, c, l) {
        return r === e || Lr(r, Vs[c]) && !Gt.call(l, c) ? n : r;
      }
      function Cl(r, n, c, l, g, _) {
        return _e(r) && _e(n) && (_.set(n, r), $o(r, n, e, Cl, _), _.delete(n)), r;
      }
      function j1(r) {
        return Ln(r) ? e : r;
      }
      function xl(r, n, c, l, g, _) {
        var C = c & q, x = r.length, T = n.length;
        if (x != T && !(C && T > x))
          return !1;
        var j = _.get(r), z = _.get(n);
        if (j && z)
          return j == n && z == r;
        var V = -1, W = !0, nt = c & K ? new ws() : e;
        for (_.set(r, n), _.set(n, r); ++V < x; ) {
          var pt = r[V], _t = n[V];
          if (l)
            var dt = C ? l(_t, pt, V, n, r, _) : l(pt, _t, V, r, n, _);
          if (dt !== e) {
            if (dt)
              continue;
            W = !1;
            break;
          }
          if (nt) {
            if (!Ka(n, function(Et, Nt) {
              if (!xn(nt, Nt) && (pt === Et || g(pt, Et, c, l, _)))
                return nt.push(Nt);
            })) {
              W = !1;
              break;
            }
          } else if (!(pt === _t || g(pt, _t, c, l, _))) {
            W = !1;
            break;
          }
        }
        return _.delete(r), _.delete(n), W;
      }
      function z1(r, n, c, l, g, _, C) {
        switch (c) {
          case Rt:
            if (r.byteLength != n.byteLength || r.byteOffset != n.byteOffset)
              return !1;
            r = r.buffer, n = n.buffer;
          case lr:
            return !(r.byteLength != n.byteLength || !_(new Co(r), new Co(n)));
          case L:
          case rt:
          case Ot:
            return Lr(+r, +n);
          case Z:
            return r.name == n.name && r.message == n.message;
          case Tt:
          case Ft:
            return r == n + "";
          case J:
            var x = Ya;
          case xe:
            var T = l & q;
            if (x || (x = Ao), r.size != n.size && !T)
              return !1;
            var j = C.get(r);
            if (j)
              return j == n;
            l |= K, C.set(r, n);
            var z = xl(x(r), x(n), l, g, _, C);
            return C.delete(r), z;
          case Bt:
            if (Fn)
              return Fn.call(r) == Fn.call(n);
        }
        return !1;
      }
      function L1(r, n, c, l, g, _) {
        var C = c & q, x = _c(r), T = x.length, j = _c(n), z = j.length;
        if (T != z && !C)
          return !1;
        for (var V = T; V--; ) {
          var W = x[V];
          if (!(C ? W in n : Gt.call(n, W)))
            return !1;
        }
        var nt = _.get(r), pt = _.get(n);
        if (nt && pt)
          return nt == n && pt == r;
        var _t = !0;
        _.set(r, n), _.set(n, r);
        for (var dt = C; ++V < T; ) {
          W = x[V];
          var Et = r[W], Nt = n[W];
          if (l)
            var mr = C ? l(Nt, Et, W, n, r, _) : l(Et, Nt, W, r, n, _);
          if (!(mr === e ? Et === Nt || g(Et, Nt, c, l, _) : mr)) {
            _t = !1;
            break;
          }
          dt || (dt = W == "constructor");
        }
        if (_t && !dt) {
          var Je = r.constructor, vr = n.constructor;
          Je != vr && "constructor" in r && "constructor" in n && !(typeof Je == "function" && Je instanceof Je && typeof vr == "function" && vr instanceof vr) && (_t = !1);
        }
        return _.delete(r), _.delete(n), _t;
      }
      function $i(r) {
        return xc(Dl(r, e, Kl), r + "");
      }
      function _c(r) {
        return Ju(r, De, Sc);
      }
      function Ac(r) {
        return Ju(r, ir, Nl);
      }
      var Ec = Fo ? function(r) {
        return Fo.get(r);
      } : zc;
      function Go(r) {
        for (var n = r.name + "", c = Gs[n], l = Gt.call(Gs, n) ? c.length : 0; l--; ) {
          var g = c[l], _ = g.func;
          if (_ == null || _ == r)
            return g.name;
        }
        return n;
      }
      function Xs(r) {
        var n = Gt.call(w, "placeholder") ? w : r;
        return n.placeholder;
      }
      function ft() {
        var r = w.iteratee || $c;
        return r = r === $c ? Xu : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function Jo(r, n) {
        var c = r.__data__;
        return W1(n) ? c[typeof n == "string" ? "string" : "hash"] : c.map;
      }
      function Ic(r) {
        for (var n = De(r), c = n.length; c--; ) {
          var l = n[c], g = r[l];
          n[c] = [l, g, Tl(g)];
        }
        return n;
      }
      function As(r, n) {
        var c = tg(r, n);
        return Wu(c) ? c : e;
      }
      function K1(r) {
        var n = Gt.call(r, vs), c = r[vs];
        try {
          r[vs] = e;
          var l = !0;
        } catch {
        }
        var g = Po.call(r);
        return l && (n ? r[vs] = c : delete r[vs]), g;
      }
      var Sc = Xa ? function(r) {
        return r == null ? [] : (r = ge(r), es(Xa(r), function(n) {
          return qu.call(r, n);
        }));
      } : Lc, Nl = Xa ? function(r) {
        for (var n = []; r; )
          rs(n, Sc(r)), r = xo(r);
        return n;
      } : Lc, He = Qe;
      (Za && He(new Za(new ArrayBuffer(1))) != Rt || Rn && He(new Rn()) != J || tc && He(tc.resolve()) != ri || Qs && He(new Qs()) != xe || On && He(new On()) != Dt) && (He = function(r) {
        var n = Qe(r), c = n == xt ? r.constructor : e, l = c ? Es(c) : "";
        if (l)
          switch (l) {
            case Pg:
              return Rt;
            case Mg:
              return J;
            case Cg:
              return ri;
            case xg:
              return xe;
            case Ng:
              return Dt;
          }
        return n;
      });
      function H1(r, n, c) {
        for (var l = -1, g = c.length; ++l < g; ) {
          var _ = c[l], C = _.size;
          switch (_.type) {
            case "drop":
              r += C;
              break;
            case "dropRight":
              n -= C;
              break;
            case "take":
              n = Ke(n, r + C);
              break;
            case "takeRight":
              r = Re(r, n - C);
              break;
          }
        }
        return { start: r, end: n };
      }
      function V1(r) {
        var n = r.match(le);
        return n ? n[1].split(Fi) : [];
      }
      function Rl(r, n, c) {
        n = as(n, r);
        for (var l = -1, g = n.length, _ = !1; ++l < g; ) {
          var C = fi(n[l]);
          if (!(_ = r != null && c(r, C)))
            break;
          r = r[C];
        }
        return _ || ++l != g ? _ : (g = r == null ? 0 : r.length, !!g && ra(g) && ji(C, g) && (yt(r) || Is(r)));
      }
      function Q1(r) {
        var n = r.length, c = new r.constructor(n);
        return n && typeof r[0] == "string" && Gt.call(r, "index") && (c.index = r.index, c.input = r.input), c;
      }
      function Ol(r) {
        return typeof r.constructor == "function" && !jn(r) ? Js(xo(r)) : {};
      }
      function G1(r, n, c) {
        var l = r.constructor;
        switch (n) {
          case lr:
            return yc(r);
          case L:
          case rt:
            return new l(+r);
          case Rt:
            return R1(r, c);
          case jt:
          case kr:
          case zt:
          case Lt:
          case Br:
          case Kt:
          case Ht:
          case Ur:
          case Vt:
            return dl(r, c);
          case J:
            return new l();
          case Ot:
          case Ft:
            return new l(r);
          case Tt:
            return O1(r);
          case xe:
            return new l();
          case Bt:
            return T1(r);
        }
      }
      function J1(r, n) {
        var c = n.length;
        if (!c)
          return r;
        var l = c - 1;
        return n[l] = (c > 1 ? "& " : "") + n[l], n = n.join(c > 2 ? ", " : " "), r.replace(ue, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Y1(r) {
        return yt(r) || Is(r) || !!(ku && r && r[ku]);
      }
      function ji(r, n) {
        var c = typeof r;
        return n = n ?? N, !!n && (c == "number" || c != "symbol" && ci.test(r)) && r > -1 && r % 1 == 0 && r < n;
      }
      function Ge(r, n, c) {
        if (!_e(c))
          return !1;
        var l = typeof n;
        return (l == "number" ? rr(c) && ji(n, c.length) : l == "string" && n in c) ? Lr(c[n], r) : !1;
      }
      function Pc(r, n) {
        if (yt(r))
          return !1;
        var c = typeof r;
        return c == "number" || c == "symbol" || c == "boolean" || r == null || gr(r) ? !0 : ae.test(r) || !Oi.test(r) || n != null && r in ge(n);
      }
      function W1(r) {
        var n = typeof r;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? r !== "__proto__" : r === null;
      }
      function Mc(r) {
        var n = Go(r), c = w[n];
        if (typeof c != "function" || !(n in St.prototype))
          return !1;
        if (r === c)
          return !0;
        var l = Ec(c);
        return !!l && r === l[0];
      }
      function X1(r) {
        return !!Tu && Tu in r;
      }
      var Z1 = Io ? zi : Kc;
      function jn(r) {
        var n = r && r.constructor, c = typeof n == "function" && n.prototype || Vs;
        return r === c;
      }
      function Tl(r) {
        return r === r && !_e(r);
      }
      function Fl(r, n) {
        return function(c) {
          return c == null ? !1 : c[r] === n && (n !== e || r in ge(c));
        };
      }
      function tm(r) {
        var n = ta(r, function(l) {
          return c.size === y && c.clear(), l;
        }), c = n.cache;
        return n;
      }
      function em(r, n) {
        var c = r[1], l = n[1], g = c | l, _ = g < (H | Q | st), C = l == st && c == ut || l == st && c == gt && r[7].length <= n[8] || l == (st | gt) && n[7].length <= n[8] && c == ut;
        if (!(_ || C))
          return r;
        l & H && (r[2] = n[2], g |= c & H ? 0 : ht);
        var x = n[3];
        if (x) {
          var T = r[3];
          r[3] = T ? ml(T, x, n[4]) : x, r[4] = T ? is(r[3], P) : n[4];
        }
        return x = n[5], x && (T = r[5], r[5] = T ? vl(T, x, n[6]) : x, r[6] = T ? is(r[5], P) : n[6]), x = n[7], x && (r[7] = x), l & st && (r[8] = r[8] == null ? n[8] : Ke(r[8], n[8])), r[9] == null && (r[9] = n[9]), r[0] = n[0], r[1] = g, r;
      }
      function rm(r) {
        var n = [];
        if (r != null)
          for (var c in ge(r))
            n.push(c);
        return n;
      }
      function im(r) {
        return Po.call(r);
      }
      function Dl(r, n, c) {
        return n = Re(n === e ? r.length - 1 : n, 0), function() {
          for (var l = arguments, g = -1, _ = Re(l.length - n, 0), C = k(_); ++g < _; )
            C[g] = l[n + g];
          g = -1;
          for (var x = k(n + 1); ++g < n; )
            x[g] = l[g];
          return x[n] = c(C), fr(r, this, x);
        };
      }
      function ql(r, n) {
        return n.length < 2 ? r : _s(r, Mr(n, 0, -1));
      }
      function sm(r, n) {
        for (var c = r.length, l = Ke(n.length, c), g = er(r); l--; ) {
          var _ = n[l];
          r[l] = ji(_, c) ? g[_] : e;
        }
        return r;
      }
      function Cc(r, n) {
        if (!(n === "constructor" && typeof r[n] == "function") && n != "__proto__")
          return r[n];
      }
      var kl = Ul(ol), zn = wg || function(r, n) {
        return ke.setTimeout(r, n);
      }, xc = Ul(M1);
      function Bl(r, n, c) {
        var l = n + "";
        return xc(r, J1(l, nm(V1(l), c)));
      }
      function Ul(r) {
        var n = 0, c = 0;
        return function() {
          var l = Eg(), g = u - (l - c);
          if (c = l, g > 0) {
            if (++n >= Ce)
              return arguments[0];
          } else
            n = 0;
          return r.apply(e, arguments);
        };
      }
      function Yo(r, n) {
        var c = -1, l = r.length, g = l - 1;
        for (n = n === e ? l : n; ++c < n; ) {
          var _ = lc(c, g), C = r[_];
          r[_] = r[c], r[c] = C;
        }
        return r.length = n, r;
      }
      var $l = tm(function(r) {
        var n = [];
        return r.charCodeAt(0) === 46 && n.push(""), r.replace(ce, function(c, l, g, _) {
          n.push(g ? _.replace(Di, "$1") : l || c);
        }), n;
      });
      function fi(r) {
        if (typeof r == "string" || gr(r))
          return r;
        var n = r + "";
        return n == "0" && 1 / r == -M ? "-0" : n;
      }
      function Es(r) {
        if (r != null) {
          try {
            return So.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function nm(r, n) {
        return Er(ot, function(c) {
          var l = "_." + c[0];
          n & c[1] && !bo(r, l) && r.push(l);
        }), r.sort();
      }
      function jl(r) {
        if (r instanceof St)
          return r.clone();
        var n = new Sr(r.__wrapped__, r.__chain__);
        return n.__actions__ = er(r.__actions__), n.__index__ = r.__index__, n.__values__ = r.__values__, n;
      }
      function om(r, n, c) {
        (c ? Ge(r, n, c) : n === e) ? n = 1 : n = Re(bt(n), 0);
        var l = r == null ? 0 : r.length;
        if (!l || n < 1)
          return [];
        for (var g = 0, _ = 0, C = k(Oo(l / n)); g < l; )
          C[_++] = Mr(r, g, g += n);
        return C;
      }
      function am(r) {
        for (var n = -1, c = r == null ? 0 : r.length, l = 0, g = []; ++n < c; ) {
          var _ = r[n];
          _ && (g[l++] = _);
        }
        return g;
      }
      function cm() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var n = k(r - 1), c = arguments[0], l = r; l--; )
          n[l - 1] = arguments[l];
        return rs(yt(c) ? er(c) : [c], Be(n, 1));
      }
      var hm = At(function(r, n) {
        return Ie(r) ? qn(r, Be(n, 1, Ie, !0)) : [];
      }), um = At(function(r, n) {
        var c = Cr(n);
        return Ie(c) && (c = e), Ie(r) ? qn(r, Be(n, 1, Ie, !0), ft(c, 2)) : [];
      }), lm = At(function(r, n) {
        var c = Cr(n);
        return Ie(c) && (c = e), Ie(r) ? qn(r, Be(n, 1, Ie, !0), e, c) : [];
      });
      function fm(r, n, c) {
        var l = r == null ? 0 : r.length;
        return l ? (n = c || n === e ? 1 : bt(n), Mr(r, n < 0 ? 0 : n, l)) : [];
      }
      function pm(r, n, c) {
        var l = r == null ? 0 : r.length;
        return l ? (n = c || n === e ? 1 : bt(n), n = l - n, Mr(r, 0, n < 0 ? 0 : n)) : [];
      }
      function dm(r, n) {
        return r && r.length ? zo(r, ft(n, 3), !0, !0) : [];
      }
      function gm(r, n) {
        return r && r.length ? zo(r, ft(n, 3), !0) : [];
      }
      function mm(r, n, c, l) {
        var g = r == null ? 0 : r.length;
        return g ? (c && typeof c != "number" && Ge(r, n, c) && (c = 0, l = g), c1(r, n, c, l)) : [];
      }
      function zl(r, n, c) {
        var l = r == null ? 0 : r.length;
        if (!l)
          return -1;
        var g = c == null ? 0 : bt(c);
        return g < 0 && (g = Re(l + g, 0)), _o(r, ft(n, 3), g);
      }
      function Ll(r, n, c) {
        var l = r == null ? 0 : r.length;
        if (!l)
          return -1;
        var g = l - 1;
        return c !== e && (g = bt(c), g = c < 0 ? Re(l + g, 0) : Ke(g, l - 1)), _o(r, ft(n, 3), g, !0);
      }
      function Kl(r) {
        var n = r == null ? 0 : r.length;
        return n ? Be(r, 1) : [];
      }
      function vm(r) {
        var n = r == null ? 0 : r.length;
        return n ? Be(r, M) : [];
      }
      function ym(r, n) {
        var c = r == null ? 0 : r.length;
        return c ? (n = n === e ? 1 : bt(n), Be(r, n)) : [];
      }
      function wm(r) {
        for (var n = -1, c = r == null ? 0 : r.length, l = {}; ++n < c; ) {
          var g = r[n];
          l[g[0]] = g[1];
        }
        return l;
      }
      function Hl(r) {
        return r && r.length ? r[0] : e;
      }
      function bm(r, n, c) {
        var l = r == null ? 0 : r.length;
        if (!l)
          return -1;
        var g = c == null ? 0 : bt(c);
        return g < 0 && (g = Re(l + g, 0)), zs(r, n, g);
      }
      function _m(r) {
        var n = r == null ? 0 : r.length;
        return n ? Mr(r, 0, -1) : [];
      }
      var Am = At(function(r) {
        var n = we(r, mc);
        return n.length && n[0] === r[0] ? oc(n) : [];
      }), Em = At(function(r) {
        var n = Cr(r), c = we(r, mc);
        return n === Cr(c) ? n = e : c.pop(), c.length && c[0] === r[0] ? oc(c, ft(n, 2)) : [];
      }), Im = At(function(r) {
        var n = Cr(r), c = we(r, mc);
        return n = typeof n == "function" ? n : e, n && c.pop(), c.length && c[0] === r[0] ? oc(c, e, n) : [];
      });
      function Sm(r, n) {
        return r == null ? "" : _g.call(r, n);
      }
      function Cr(r) {
        var n = r == null ? 0 : r.length;
        return n ? r[n - 1] : e;
      }
      function Pm(r, n, c) {
        var l = r == null ? 0 : r.length;
        if (!l)
          return -1;
        var g = l;
        return c !== e && (g = bt(c), g = g < 0 ? Re(l + g, 0) : Ke(g, l - 1)), n === n ? ng(r, n, g) : _o(r, Su, g, !0);
      }
      function Mm(r, n) {
        return r && r.length ? rl(r, bt(n)) : e;
      }
      var Cm = At(Vl);
      function Vl(r, n) {
        return r && r.length && n && n.length ? uc(r, n) : r;
      }
      function xm(r, n, c) {
        return r && r.length && n && n.length ? uc(r, n, ft(c, 2)) : r;
      }
      function Nm(r, n, c) {
        return r && r.length && n && n.length ? uc(r, n, e, c) : r;
      }
      var Rm = $i(function(r, n) {
        var c = r == null ? 0 : r.length, l = rc(r, n);
        return nl(r, we(n, function(g) {
          return ji(g, c) ? +g : g;
        }).sort(gl)), l;
      });
      function Om(r, n) {
        var c = [];
        if (!(r && r.length))
          return c;
        var l = -1, g = [], _ = r.length;
        for (n = ft(n, 3); ++l < _; ) {
          var C = r[l];
          n(C, l, r) && (c.push(C), g.push(l));
        }
        return nl(r, g), c;
      }
      function Nc(r) {
        return r == null ? r : Sg.call(r);
      }
      function Tm(r, n, c) {
        var l = r == null ? 0 : r.length;
        return l ? (c && typeof c != "number" && Ge(r, n, c) ? (n = 0, c = l) : (n = n == null ? 0 : bt(n), c = c === e ? l : bt(c)), Mr(r, n, c)) : [];
      }
      function Fm(r, n) {
        return jo(r, n);
      }
      function Dm(r, n, c) {
        return pc(r, n, ft(c, 2));
      }
      function qm(r, n) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var l = jo(r, n);
          if (l < c && Lr(r[l], n))
            return l;
        }
        return -1;
      }
      function km(r, n) {
        return jo(r, n, !0);
      }
      function Bm(r, n, c) {
        return pc(r, n, ft(c, 2), !0);
      }
      function Um(r, n) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var l = jo(r, n, !0) - 1;
          if (Lr(r[l], n))
            return l;
        }
        return -1;
      }
      function $m(r) {
        return r && r.length ? al(r) : [];
      }
      function jm(r, n) {
        return r && r.length ? al(r, ft(n, 2)) : [];
      }
      function zm(r) {
        var n = r == null ? 0 : r.length;
        return n ? Mr(r, 1, n) : [];
      }
      function Lm(r, n, c) {
        return r && r.length ? (n = c || n === e ? 1 : bt(n), Mr(r, 0, n < 0 ? 0 : n)) : [];
      }
      function Km(r, n, c) {
        var l = r == null ? 0 : r.length;
        return l ? (n = c || n === e ? 1 : bt(n), n = l - n, Mr(r, n < 0 ? 0 : n, l)) : [];
      }
      function Hm(r, n) {
        return r && r.length ? zo(r, ft(n, 3), !1, !0) : [];
      }
      function Vm(r, n) {
        return r && r.length ? zo(r, ft(n, 3)) : [];
      }
      var Qm = At(function(r) {
        return os(Be(r, 1, Ie, !0));
      }), Gm = At(function(r) {
        var n = Cr(r);
        return Ie(n) && (n = e), os(Be(r, 1, Ie, !0), ft(n, 2));
      }), Jm = At(function(r) {
        var n = Cr(r);
        return n = typeof n == "function" ? n : e, os(Be(r, 1, Ie, !0), e, n);
      });
      function Ym(r) {
        return r && r.length ? os(r) : [];
      }
      function Wm(r, n) {
        return r && r.length ? os(r, ft(n, 2)) : [];
      }
      function Xm(r, n) {
        return n = typeof n == "function" ? n : e, r && r.length ? os(r, e, n) : [];
      }
      function Rc(r) {
        if (!(r && r.length))
          return [];
        var n = 0;
        return r = es(r, function(c) {
          if (Ie(c))
            return n = Re(c.length, n), !0;
        }), Ga(n, function(c) {
          return we(r, Ha(c));
        });
      }
      function Ql(r, n) {
        if (!(r && r.length))
          return [];
        var c = Rc(r);
        return n == null ? c : we(c, function(l) {
          return fr(n, e, l);
        });
      }
      var Zm = At(function(r, n) {
        return Ie(r) ? qn(r, n) : [];
      }), tv = At(function(r) {
        return gc(es(r, Ie));
      }), ev = At(function(r) {
        var n = Cr(r);
        return Ie(n) && (n = e), gc(es(r, Ie), ft(n, 2));
      }), rv = At(function(r) {
        var n = Cr(r);
        return n = typeof n == "function" ? n : e, gc(es(r, Ie), e, n);
      }), iv = At(Rc);
      function sv(r, n) {
        return ll(r || [], n || [], Dn);
      }
      function nv(r, n) {
        return ll(r || [], n || [], Un);
      }
      var ov = At(function(r) {
        var n = r.length, c = n > 1 ? r[n - 1] : e;
        return c = typeof c == "function" ? (r.pop(), c) : e, Ql(r, c);
      });
      function Gl(r) {
        var n = w(r);
        return n.__chain__ = !0, n;
      }
      function av(r, n) {
        return n(r), r;
      }
      function Wo(r, n) {
        return n(r);
      }
      var cv = $i(function(r) {
        var n = r.length, c = n ? r[0] : 0, l = this.__wrapped__, g = function(_) {
          return rc(_, r);
        };
        return n > 1 || this.__actions__.length || !(l instanceof St) || !ji(c) ? this.thru(g) : (l = l.slice(c, +c + (n ? 1 : 0)), l.__actions__.push({ func: Wo, args: [g], thisArg: e }), new Sr(l, this.__chain__).thru(function(_) {
          return n && !_.length && _.push(e), _;
        }));
      });
      function hv() {
        return Gl(this);
      }
      function uv() {
        return new Sr(this.value(), this.__chain__);
      }
      function lv() {
        this.__values__ === e && (this.__values__ = hf(this.value()));
        var r = this.__index__ >= this.__values__.length, n = r ? e : this.__values__[this.__index__++];
        return { done: r, value: n };
      }
      function fv() {
        return this;
      }
      function pv(r) {
        for (var n, c = this; c instanceof qo; ) {
          var l = jl(c);
          l.__index__ = 0, l.__values__ = e, n ? g.__wrapped__ = l : n = l;
          var g = l;
          c = c.__wrapped__;
        }
        return g.__wrapped__ = r, n;
      }
      function dv() {
        var r = this.__wrapped__;
        if (r instanceof St) {
          var n = r;
          return this.__actions__.length && (n = new St(this)), n = n.reverse(), n.__actions__.push({ func: Wo, args: [Nc], thisArg: e }), new Sr(n, this.__chain__);
        }
        return this.thru(Nc);
      }
      function gv() {
        return ul(this.__wrapped__, this.__actions__);
      }
      var mv = Lo(function(r, n, c) {
        Gt.call(r, c) ? ++r[c] : Bi(r, c, 1);
      });
      function vv(r, n, c) {
        var l = yt(r) ? Eu : a1;
        return c && Ge(r, n, c) && (n = e), l(r, ft(n, 3));
      }
      function yv(r, n) {
        var c = yt(r) ? es : Qu;
        return c(r, ft(n, 3));
      }
      var wv = _l(zl), bv = _l(Ll);
      function _v(r, n) {
        return Be(Xo(r, n), 1);
      }
      function Av(r, n) {
        return Be(Xo(r, n), M);
      }
      function Ev(r, n, c) {
        return c = c === e ? 1 : bt(c), Be(Xo(r, n), c);
      }
      function Jl(r, n) {
        var c = yt(r) ? Er : ns;
        return c(r, ft(n, 3));
      }
      function Yl(r, n) {
        var c = yt(r) ? z0 : Vu;
        return c(r, ft(n, 3));
      }
      var Iv = Lo(function(r, n, c) {
        Gt.call(r, c) ? r[c].push(n) : Bi(r, c, [n]);
      });
      function Sv(r, n, c, l) {
        r = rr(r) ? r : tn(r), c = c && !l ? bt(c) : 0;
        var g = r.length;
        return c < 0 && (c = Re(g + c, 0)), ia(r) ? c <= g && r.indexOf(n, c) > -1 : !!g && zs(r, n, c) > -1;
      }
      var Pv = At(function(r, n, c) {
        var l = -1, g = typeof n == "function", _ = rr(r) ? k(r.length) : [];
        return ns(r, function(C) {
          _[++l] = g ? fr(n, C, c) : kn(C, n, c);
        }), _;
      }), Mv = Lo(function(r, n, c) {
        Bi(r, c, n);
      });
      function Xo(r, n) {
        var c = yt(r) ? we : Zu;
        return c(r, ft(n, 3));
      }
      function Cv(r, n, c, l) {
        return r == null ? [] : (yt(n) || (n = n == null ? [] : [n]), c = l ? e : c, yt(c) || (c = c == null ? [] : [c]), il(r, n, c));
      }
      var xv = Lo(function(r, n, c) {
        r[c ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Nv(r, n, c) {
        var l = yt(r) ? La : Mu, g = arguments.length < 3;
        return l(r, ft(n, 4), c, g, ns);
      }
      function Rv(r, n, c) {
        var l = yt(r) ? L0 : Mu, g = arguments.length < 3;
        return l(r, ft(n, 4), c, g, Vu);
      }
      function Ov(r, n) {
        var c = yt(r) ? es : Qu;
        return c(r, ea(ft(n, 3)));
      }
      function Tv(r) {
        var n = yt(r) ? zu : S1;
        return n(r);
      }
      function Fv(r, n, c) {
        (c ? Ge(r, n, c) : n === e) ? n = 1 : n = bt(n);
        var l = yt(r) ? r1 : P1;
        return l(r, n);
      }
      function Dv(r) {
        var n = yt(r) ? i1 : C1;
        return n(r);
      }
      function qv(r) {
        if (r == null)
          return 0;
        if (rr(r))
          return ia(r) ? Ks(r) : r.length;
        var n = He(r);
        return n == J || n == xe ? r.size : cc(r).length;
      }
      function kv(r, n, c) {
        var l = yt(r) ? Ka : x1;
        return c && Ge(r, n, c) && (n = e), l(r, ft(n, 3));
      }
      var Bv = At(function(r, n) {
        if (r == null)
          return [];
        var c = n.length;
        return c > 1 && Ge(r, n[0], n[1]) ? n = [] : c > 2 && Ge(n[0], n[1], n[2]) && (n = [n[0]]), il(r, Be(n, 1), []);
      }), Zo = yg || function() {
        return ke.Date.now();
      };
      function Uv(r, n) {
        if (typeof n != "function")
          throw new Ir(h);
        return r = bt(r), function() {
          if (--r < 1)
            return n.apply(this, arguments);
        };
      }
      function Wl(r, n, c) {
        return n = c ? e : n, n = r && n == null ? r.length : n, Ui(r, st, e, e, e, e, n);
      }
      function Xl(r, n) {
        var c;
        if (typeof n != "function")
          throw new Ir(h);
        return r = bt(r), function() {
          return --r > 0 && (c = n.apply(this, arguments)), r <= 1 && (n = e), c;
        };
      }
      var Oc = At(function(r, n, c) {
        var l = H;
        if (c.length) {
          var g = is(c, Xs(Oc));
          l |= et;
        }
        return Ui(r, l, n, c, g);
      }), Zl = At(function(r, n, c) {
        var l = H | Q;
        if (c.length) {
          var g = is(c, Xs(Zl));
          l |= et;
        }
        return Ui(n, l, r, c, g);
      });
      function tf(r, n, c) {
        n = c ? e : n;
        var l = Ui(r, ut, e, e, e, e, e, n);
        return l.placeholder = tf.placeholder, l;
      }
      function ef(r, n, c) {
        n = c ? e : n;
        var l = Ui(r, Y, e, e, e, e, e, n);
        return l.placeholder = ef.placeholder, l;
      }
      function rf(r, n, c) {
        var l, g, _, C, x, T, j = 0, z = !1, V = !1, W = !0;
        if (typeof r != "function")
          throw new Ir(h);
        n = xr(n) || 0, _e(c) && (z = !!c.leading, V = "maxWait" in c, _ = V ? Re(xr(c.maxWait) || 0, n) : _, W = "trailing" in c ? !!c.trailing : W);
        function nt(Se) {
          var Kr = l, Ki = g;
          return l = g = e, j = Se, C = r.apply(Ki, Kr), C;
        }
        function pt(Se) {
          return j = Se, x = zn(Et, n), z ? nt(Se) : C;
        }
        function _t(Se) {
          var Kr = Se - T, Ki = Se - j, Af = n - Kr;
          return V ? Ke(Af, _ - Ki) : Af;
        }
        function dt(Se) {
          var Kr = Se - T, Ki = Se - j;
          return T === e || Kr >= n || Kr < 0 || V && Ki >= _;
        }
        function Et() {
          var Se = Zo();
          if (dt(Se))
            return Nt(Se);
          x = zn(Et, _t(Se));
        }
        function Nt(Se) {
          return x = e, W && l ? nt(Se) : (l = g = e, C);
        }
        function mr() {
          x !== e && fl(x), j = 0, l = T = g = x = e;
        }
        function Je() {
          return x === e ? C : Nt(Zo());
        }
        function vr() {
          var Se = Zo(), Kr = dt(Se);
          if (l = arguments, g = this, T = Se, Kr) {
            if (x === e)
              return pt(T);
            if (V)
              return fl(x), x = zn(Et, n), nt(T);
          }
          return x === e && (x = zn(Et, n)), C;
        }
        return vr.cancel = mr, vr.flush = Je, vr;
      }
      var $v = At(function(r, n) {
        return Hu(r, 1, n);
      }), jv = At(function(r, n, c) {
        return Hu(r, xr(n) || 0, c);
      });
      function zv(r) {
        return Ui(r, kt);
      }
      function ta(r, n) {
        if (typeof r != "function" || n != null && typeof n != "function")
          throw new Ir(h);
        var c = function() {
          var l = arguments, g = n ? n.apply(this, l) : l[0], _ = c.cache;
          if (_.has(g))
            return _.get(g);
          var C = r.apply(this, l);
          return c.cache = _.set(g, C) || _, C;
        };
        return c.cache = new (ta.Cache || ki)(), c;
      }
      ta.Cache = ki;
      function ea(r) {
        if (typeof r != "function")
          throw new Ir(h);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !r.call(this);
            case 1:
              return !r.call(this, n[0]);
            case 2:
              return !r.call(this, n[0], n[1]);
            case 3:
              return !r.call(this, n[0], n[1], n[2]);
          }
          return !r.apply(this, n);
        };
      }
      function Lv(r) {
        return Xl(2, r);
      }
      var Kv = N1(function(r, n) {
        n = n.length == 1 && yt(n[0]) ? we(n[0], pr(ft())) : we(Be(n, 1), pr(ft()));
        var c = n.length;
        return At(function(l) {
          for (var g = -1, _ = Ke(l.length, c); ++g < _; )
            l[g] = n[g].call(this, l[g]);
          return fr(r, this, l);
        });
      }), Tc = At(function(r, n) {
        var c = is(n, Xs(Tc));
        return Ui(r, et, e, n, c);
      }), sf = At(function(r, n) {
        var c = is(n, Xs(sf));
        return Ui(r, ct, e, n, c);
      }), Hv = $i(function(r, n) {
        return Ui(r, gt, e, e, e, n);
      });
      function Vv(r, n) {
        if (typeof r != "function")
          throw new Ir(h);
        return n = n === e ? n : bt(n), At(r, n);
      }
      function Qv(r, n) {
        if (typeof r != "function")
          throw new Ir(h);
        return n = n == null ? 0 : Re(bt(n), 0), At(function(c) {
          var l = c[n], g = cs(c, 0, n);
          return l && rs(g, l), fr(r, this, g);
        });
      }
      function Gv(r, n, c) {
        var l = !0, g = !0;
        if (typeof r != "function")
          throw new Ir(h);
        return _e(c) && (l = "leading" in c ? !!c.leading : l, g = "trailing" in c ? !!c.trailing : g), rf(r, n, { leading: l, maxWait: n, trailing: g });
      }
      function Jv(r) {
        return Wl(r, 1);
      }
      function Yv(r, n) {
        return Tc(vc(n), r);
      }
      function Wv() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return yt(r) ? r : [r];
      }
      function Xv(r) {
        return Pr(r, F);
      }
      function Zv(r, n) {
        return n = typeof n == "function" ? n : e, Pr(r, F, n);
      }
      function ty(r) {
        return Pr(r, S | F);
      }
      function ey(r, n) {
        return n = typeof n == "function" ? n : e, Pr(r, S | F, n);
      }
      function ry(r, n) {
        return n == null || Ku(r, n, De(n));
      }
      function Lr(r, n) {
        return r === n || r !== r && n !== n;
      }
      var iy = Qo(nc), sy = Qo(function(r, n) {
        return r >= n;
      }), Is = Yu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Yu : function(r) {
        return Ae(r) && Gt.call(r, "callee") && !qu.call(r, "callee");
      }, yt = k.isArray, ny = vu ? pr(vu) : p1;
      function rr(r) {
        return r != null && ra(r.length) && !zi(r);
      }
      function Ie(r) {
        return Ae(r) && rr(r);
      }
      function oy(r) {
        return r === !0 || r === !1 || Ae(r) && Qe(r) == L;
      }
      var hs = bg || Kc, ay = yu ? pr(yu) : d1;
      function cy(r) {
        return Ae(r) && r.nodeType === 1 && !Ln(r);
      }
      function hy(r) {
        if (r == null)
          return !0;
        if (rr(r) && (yt(r) || typeof r == "string" || typeof r.splice == "function" || hs(r) || Zs(r) || Is(r)))
          return !r.length;
        var n = He(r);
        if (n == J || n == xe)
          return !r.size;
        if (jn(r))
          return !cc(r).length;
        for (var c in r)
          if (Gt.call(r, c))
            return !1;
        return !0;
      }
      function uy(r, n) {
        return Bn(r, n);
      }
      function ly(r, n, c) {
        c = typeof c == "function" ? c : e;
        var l = c ? c(r, n) : e;
        return l === e ? Bn(r, n, e, c) : !!l;
      }
      function Fc(r) {
        if (!Ae(r))
          return !1;
        var n = Qe(r);
        return n == Z || n == X || typeof r.message == "string" && typeof r.name == "string" && !Ln(r);
      }
      function fy(r) {
        return typeof r == "number" && Bu(r);
      }
      function zi(r) {
        if (!_e(r))
          return !1;
        var n = Qe(r);
        return n == at || n == mt || n == B || n == te;
      }
      function nf(r) {
        return typeof r == "number" && r == bt(r);
      }
      function ra(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= N;
      }
      function _e(r) {
        var n = typeof r;
        return r != null && (n == "object" || n == "function");
      }
      function Ae(r) {
        return r != null && typeof r == "object";
      }
      var of = wu ? pr(wu) : m1;
      function py(r, n) {
        return r === n || ac(r, n, Ic(n));
      }
      function dy(r, n, c) {
        return c = typeof c == "function" ? c : e, ac(r, n, Ic(n), c);
      }
      function gy(r) {
        return af(r) && r != +r;
      }
      function my(r) {
        if (Z1(r))
          throw new vt(a);
        return Wu(r);
      }
      function vy(r) {
        return r === null;
      }
      function yy(r) {
        return r == null;
      }
      function af(r) {
        return typeof r == "number" || Ae(r) && Qe(r) == Ot;
      }
      function Ln(r) {
        if (!Ae(r) || Qe(r) != xt)
          return !1;
        var n = xo(r);
        if (n === null)
          return !0;
        var c = Gt.call(n, "constructor") && n.constructor;
        return typeof c == "function" && c instanceof c && So.call(c) == dg;
      }
      var Dc = bu ? pr(bu) : v1;
      function wy(r) {
        return nf(r) && r >= -N && r <= N;
      }
      var cf = _u ? pr(_u) : y1;
      function ia(r) {
        return typeof r == "string" || !yt(r) && Ae(r) && Qe(r) == Ft;
      }
      function gr(r) {
        return typeof r == "symbol" || Ae(r) && Qe(r) == Bt;
      }
      var Zs = Au ? pr(Au) : w1;
      function by(r) {
        return r === e;
      }
      function _y(r) {
        return Ae(r) && He(r) == Dt;
      }
      function Ay(r) {
        return Ae(r) && Qe(r) == ee;
      }
      var Ey = Qo(hc), Iy = Qo(function(r, n) {
        return r <= n;
      });
      function hf(r) {
        if (!r)
          return [];
        if (rr(r))
          return ia(r) ? jr(r) : er(r);
        if (Nn && r[Nn])
          return rg(r[Nn]());
        var n = He(r), c = n == J ? Ya : n == xe ? Ao : tn;
        return c(r);
      }
      function Li(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = xr(r), r === M || r === -M) {
          var n = r < 0 ? -1 : 1;
          return n * D;
        }
        return r === r ? r : 0;
      }
      function bt(r) {
        var n = Li(r), c = n % 1;
        return n === n ? c ? n - c : n : 0;
      }
      function uf(r) {
        return r ? bs(bt(r), 0, f) : 0;
      }
      function xr(r) {
        if (typeof r == "number")
          return r;
        if (gr(r))
          return I;
        if (_e(r)) {
          var n = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = _e(n) ? n + "" : n;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = Cu(r);
        var c = ni.test(r);
        return c || ai.test(r) ? U0(r.slice(2), c ? 2 : 8) : si.test(r) ? I : +r;
      }
      function lf(r) {
        return li(r, ir(r));
      }
      function Sy(r) {
        return r ? bs(bt(r), -N, N) : r === 0 ? r : 0;
      }
      function Ut(r) {
        return r == null ? "" : dr(r);
      }
      var Py = Ys(function(r, n) {
        if (jn(n) || rr(n)) {
          li(n, De(n), r);
          return;
        }
        for (var c in n)
          Gt.call(n, c) && Dn(r, c, n[c]);
      }), ff = Ys(function(r, n) {
        li(n, ir(n), r);
      }), sa = Ys(function(r, n, c, l) {
        li(n, ir(n), r, l);
      }), My = Ys(function(r, n, c, l) {
        li(n, De(n), r, l);
      }), Cy = $i(rc);
      function xy(r, n) {
        var c = Js(r);
        return n == null ? c : Lu(c, n);
      }
      var Ny = At(function(r, n) {
        r = ge(r);
        var c = -1, l = n.length, g = l > 2 ? n[2] : e;
        for (g && Ge(n[0], n[1], g) && (l = 1); ++c < l; )
          for (var _ = n[c], C = ir(_), x = -1, T = C.length; ++x < T; ) {
            var j = C[x], z = r[j];
            (z === e || Lr(z, Vs[j]) && !Gt.call(r, j)) && (r[j] = _[j]);
          }
        return r;
      }), Ry = At(function(r) {
        return r.push(e, Cl), fr(pf, e, r);
      });
      function Oy(r, n) {
        return Iu(r, ft(n, 3), ui);
      }
      function Ty(r, n) {
        return Iu(r, ft(n, 3), sc);
      }
      function Fy(r, n) {
        return r == null ? r : ic(r, ft(n, 3), ir);
      }
      function Dy(r, n) {
        return r == null ? r : Gu(r, ft(n, 3), ir);
      }
      function qy(r, n) {
        return r && ui(r, ft(n, 3));
      }
      function ky(r, n) {
        return r && sc(r, ft(n, 3));
      }
      function By(r) {
        return r == null ? [] : Uo(r, De(r));
      }
      function Uy(r) {
        return r == null ? [] : Uo(r, ir(r));
      }
      function qc(r, n, c) {
        var l = r == null ? e : _s(r, n);
        return l === e ? c : l;
      }
      function $y(r, n) {
        return r != null && Rl(r, n, h1);
      }
      function kc(r, n) {
        return r != null && Rl(r, n, u1);
      }
      var jy = El(function(r, n, c) {
        n != null && typeof n.toString != "function" && (n = Po.call(n)), r[n] = c;
      }, Uc(sr)), zy = El(function(r, n, c) {
        n != null && typeof n.toString != "function" && (n = Po.call(n)), Gt.call(r, n) ? r[n].push(c) : r[n] = [c];
      }, ft), Ly = At(kn);
      function De(r) {
        return rr(r) ? ju(r) : cc(r);
      }
      function ir(r) {
        return rr(r) ? ju(r, !0) : b1(r);
      }
      function Ky(r, n) {
        var c = {};
        return n = ft(n, 3), ui(r, function(l, g, _) {
          Bi(c, n(l, g, _), l);
        }), c;
      }
      function Hy(r, n) {
        var c = {};
        return n = ft(n, 3), ui(r, function(l, g, _) {
          Bi(c, g, n(l, g, _));
        }), c;
      }
      var Vy = Ys(function(r, n, c) {
        $o(r, n, c);
      }), pf = Ys(function(r, n, c, l) {
        $o(r, n, c, l);
      }), Qy = $i(function(r, n) {
        var c = {};
        if (r == null)
          return c;
        var l = !1;
        n = we(n, function(_) {
          return _ = as(_, r), l || (l = _.length > 1), _;
        }), li(r, Ac(r), c), l && (c = Pr(c, S | O | F, j1));
        for (var g = n.length; g--; )
          dc(c, n[g]);
        return c;
      });
      function Gy(r, n) {
        return df(r, ea(ft(n)));
      }
      var Jy = $i(function(r, n) {
        return r == null ? {} : A1(r, n);
      });
      function df(r, n) {
        if (r == null)
          return {};
        var c = we(Ac(r), function(l) {
          return [l];
        });
        return n = ft(n), sl(r, c, function(l, g) {
          return n(l, g[0]);
        });
      }
      function Yy(r, n, c) {
        n = as(n, r);
        var l = -1, g = n.length;
        for (g || (g = 1, r = e); ++l < g; ) {
          var _ = r == null ? e : r[fi(n[l])];
          _ === e && (l = g, _ = c), r = zi(_) ? _.call(r) : _;
        }
        return r;
      }
      function Wy(r, n, c) {
        return r == null ? r : Un(r, n, c);
      }
      function Xy(r, n, c, l) {
        return l = typeof l == "function" ? l : e, r == null ? r : Un(r, n, c, l);
      }
      var gf = Pl(De), mf = Pl(ir);
      function Zy(r, n, c) {
        var l = yt(r), g = l || hs(r) || Zs(r);
        if (n = ft(n, 4), c == null) {
          var _ = r && r.constructor;
          g ? c = l ? new _() : [] : _e(r) ? c = zi(_) ? Js(xo(r)) : {} : c = {};
        }
        return (g ? Er : ui)(r, function(C, x, T) {
          return n(c, C, x, T);
        }), c;
      }
      function tw(r, n) {
        return r == null ? !0 : dc(r, n);
      }
      function ew(r, n, c) {
        return r == null ? r : hl(r, n, vc(c));
      }
      function rw(r, n, c, l) {
        return l = typeof l == "function" ? l : e, r == null ? r : hl(r, n, vc(c), l);
      }
      function tn(r) {
        return r == null ? [] : Ja(r, De(r));
      }
      function iw(r) {
        return r == null ? [] : Ja(r, ir(r));
      }
      function sw(r, n, c) {
        return c === e && (c = n, n = e), c !== e && (c = xr(c), c = c === c ? c : 0), n !== e && (n = xr(n), n = n === n ? n : 0), bs(xr(r), n, c);
      }
      function nw(r, n, c) {
        return n = Li(n), c === e ? (c = n, n = 0) : c = Li(c), r = xr(r), l1(r, n, c);
      }
      function ow(r, n, c) {
        if (c && typeof c != "boolean" && Ge(r, n, c) && (n = c = e), c === e && (typeof n == "boolean" ? (c = n, n = e) : typeof r == "boolean" && (c = r, r = e)), r === e && n === e ? (r = 0, n = 1) : (r = Li(r), n === e ? (n = r, r = 0) : n = Li(n)), r > n) {
          var l = r;
          r = n, n = l;
        }
        if (c || r % 1 || n % 1) {
          var g = Uu();
          return Ke(r + g * (n - r + B0("1e-" + ((g + "").length - 1))), n);
        }
        return lc(r, n);
      }
      var aw = Ws(function(r, n, c) {
        return n = n.toLowerCase(), r + (c ? vf(n) : n);
      });
      function vf(r) {
        return Bc(Ut(r).toLowerCase());
      }
      function yf(r) {
        return r = Ut(r), r && r.replace(hi, W0).replace(C0, "");
      }
      function cw(r, n, c) {
        r = Ut(r), n = dr(n);
        var l = r.length;
        c = c === e ? l : bs(bt(c), 0, l);
        var g = c;
        return c -= n.length, c >= 0 && r.slice(c, g) == n;
      }
      function hw(r) {
        return r = Ut(r), r && ne.test(r) ? r.replace(ii, X0) : r;
      }
      function uw(r) {
        return r = Ut(r), r && he.test(r) ? r.replace($r, "\\$&") : r;
      }
      var lw = Ws(function(r, n, c) {
        return r + (c ? "-" : "") + n.toLowerCase();
      }), fw = Ws(function(r, n, c) {
        return r + (c ? " " : "") + n.toLowerCase();
      }), pw = bl("toLowerCase");
      function dw(r, n, c) {
        r = Ut(r), n = bt(n);
        var l = n ? Ks(r) : 0;
        if (!n || l >= n)
          return r;
        var g = (n - l) / 2;
        return Vo(To(g), c) + r + Vo(Oo(g), c);
      }
      function gw(r, n, c) {
        r = Ut(r), n = bt(n);
        var l = n ? Ks(r) : 0;
        return n && l < n ? r + Vo(n - l, c) : r;
      }
      function mw(r, n, c) {
        r = Ut(r), n = bt(n);
        var l = n ? Ks(r) : 0;
        return n && l < n ? Vo(n - l, c) + r : r;
      }
      function vw(r, n, c) {
        return c || n == null ? n = 0 : n && (n = +n), Ig(Ut(r).replace(Qt, ""), n || 0);
      }
      function yw(r, n, c) {
        return (c ? Ge(r, n, c) : n === e) ? n = 1 : n = bt(n), fc(Ut(r), n);
      }
      function ww() {
        var r = arguments, n = Ut(r[0]);
        return r.length < 3 ? n : n.replace(r[1], r[2]);
      }
      var bw = Ws(function(r, n, c) {
        return r + (c ? "_" : "") + n.toLowerCase();
      });
      function _w(r, n, c) {
        return c && typeof c != "number" && Ge(r, n, c) && (n = c = e), c = c === e ? f : c >>> 0, c ? (r = Ut(r), r && (typeof n == "string" || n != null && !Dc(n)) && (n = dr(n), !n && Ls(r)) ? cs(jr(r), 0, c) : r.split(n, c)) : [];
      }
      var Aw = Ws(function(r, n, c) {
        return r + (c ? " " : "") + Bc(n);
      });
      function Ew(r, n, c) {
        return r = Ut(r), c = c == null ? 0 : bs(bt(c), 0, r.length), n = dr(n), r.slice(c, c + n.length) == n;
      }
      function Iw(r, n, c) {
        var l = w.templateSettings;
        c && Ge(r, n, c) && (n = e), r = Ut(r), n = sa({}, n, l, Ml);
        var g = sa({}, n.imports, l.imports, Ml), _ = De(g), C = Ja(g, _), x, T, j = 0, z = n.interpolate || Zi, V = "__p += '", W = Wa((n.escape || Zi).source + "|" + z.source + "|" + (z === Wt ? de : Zi).source + "|" + (n.evaluate || Zi).source + "|$", "g"), nt = "//# sourceURL=" + (Gt.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++T0 + "]") + `
`;
        r.replace(W, function(dt, Et, Nt, mr, Je, vr) {
          return Nt || (Nt = mr), V += r.slice(j, vr).replace(_n, Z0), Et && (x = !0, V += `' +
__e(` + Et + `) +
'`), Je && (T = !0, V += `';
` + Je + `;
__p += '`), Nt && (V += `' +
((__t = (` + Nt + `)) == null ? '' : __t) +
'`), j = vr + dt.length, dt;
        }), V += `';
`;
        var pt = Gt.call(n, "variable") && n.variable;
        if (!pt)
          V = `with (obj) {
` + V + `
}
`;
        else if (pe.test(pt))
          throw new vt(p);
        V = (T ? V.replace(re, "") : V).replace(Ni, "$1").replace(ie, "$1;"), V = "function(" + (pt || "obj") + `) {
` + (pt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (x ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
        var _t = bf(function() {
          return qt(_, nt + "return " + V).apply(e, C);
        });
        if (_t.source = V, Fc(_t))
          throw _t;
        return _t;
      }
      function Sw(r) {
        return Ut(r).toLowerCase();
      }
      function Pw(r) {
        return Ut(r).toUpperCase();
      }
      function Mw(r, n, c) {
        if (r = Ut(r), r && (c || n === e))
          return Cu(r);
        if (!r || !(n = dr(n)))
          return r;
        var l = jr(r), g = jr(n), _ = xu(l, g), C = Nu(l, g) + 1;
        return cs(l, _, C).join("");
      }
      function Cw(r, n, c) {
        if (r = Ut(r), r && (c || n === e))
          return r.slice(0, Ou(r) + 1);
        if (!r || !(n = dr(n)))
          return r;
        var l = jr(r), g = Nu(l, jr(n)) + 1;
        return cs(l, 0, g).join("");
      }
      function xw(r, n, c) {
        if (r = Ut(r), r && (c || n === e))
          return r.replace(Qt, "");
        if (!r || !(n = dr(n)))
          return r;
        var l = jr(r), g = xu(l, jr(n));
        return cs(l, g).join("");
      }
      function Nw(r, n) {
        var c = Fe, l = Ct;
        if (_e(n)) {
          var g = "separator" in n ? n.separator : g;
          c = "length" in n ? bt(n.length) : c, l = "omission" in n ? dr(n.omission) : l;
        }
        r = Ut(r);
        var _ = r.length;
        if (Ls(r)) {
          var C = jr(r);
          _ = C.length;
        }
        if (c >= _)
          return r;
        var x = c - Ks(l);
        if (x < 1)
          return l;
        var T = C ? cs(C, 0, x).join("") : r.slice(0, x);
        if (g === e)
          return T + l;
        if (C && (x += T.length - x), Dc(g)) {
          if (r.slice(x).search(g)) {
            var j, z = T;
            for (g.global || (g = Wa(g.source, Ut(Xt.exec(g)) + "g")), g.lastIndex = 0; j = g.exec(z); )
              var V = j.index;
            T = T.slice(0, V === e ? x : V);
          }
        } else if (r.indexOf(dr(g), x) != x) {
          var W = T.lastIndexOf(g);
          W > -1 && (T = T.slice(0, W));
        }
        return T + l;
      }
      function Rw(r) {
        return r = Ut(r), r && se.test(r) ? r.replace(Yt, og) : r;
      }
      var Ow = Ws(function(r, n, c) {
        return r + (c ? " " : "") + n.toUpperCase();
      }), Bc = bl("toUpperCase");
      function wf(r, n, c) {
        return r = Ut(r), n = c ? e : n, n === e ? eg(r) ? hg(r) : V0(r) : r.match(n) || [];
      }
      var bf = At(function(r, n) {
        try {
          return fr(r, e, n);
        } catch (c) {
          return Fc(c) ? c : new vt(c);
        }
      }), Tw = $i(function(r, n) {
        return Er(n, function(c) {
          c = fi(c), Bi(r, c, Oc(r[c], r));
        }), r;
      });
      function Fw(r) {
        var n = r == null ? 0 : r.length, c = ft();
        return r = n ? we(r, function(l) {
          if (typeof l[1] != "function")
            throw new Ir(h);
          return [c(l[0]), l[1]];
        }) : [], At(function(l) {
          for (var g = -1; ++g < n; ) {
            var _ = r[g];
            if (fr(_[0], this, l))
              return fr(_[1], this, l);
          }
        });
      }
      function Dw(r) {
        return o1(Pr(r, S));
      }
      function Uc(r) {
        return function() {
          return r;
        };
      }
      function qw(r, n) {
        return r == null || r !== r ? n : r;
      }
      var kw = Al(), Bw = Al(!0);
      function sr(r) {
        return r;
      }
      function $c(r) {
        return Xu(typeof r == "function" ? r : Pr(r, S));
      }
      function Uw(r) {
        return tl(Pr(r, S));
      }
      function $w(r, n) {
        return el(r, Pr(n, S));
      }
      var jw = At(function(r, n) {
        return function(c) {
          return kn(c, r, n);
        };
      }), zw = At(function(r, n) {
        return function(c) {
          return kn(r, c, n);
        };
      });
      function jc(r, n, c) {
        var l = De(n), g = Uo(n, l);
        c == null && !(_e(n) && (g.length || !l.length)) && (c = n, n = r, r = this, g = Uo(n, De(n)));
        var _ = !(_e(c) && "chain" in c) || !!c.chain, C = zi(r);
        return Er(g, function(x) {
          var T = n[x];
          r[x] = T, C && (r.prototype[x] = function() {
            var j = this.__chain__;
            if (_ || j) {
              var z = r(this.__wrapped__), V = z.__actions__ = er(this.__actions__);
              return V.push({ func: T, args: arguments, thisArg: r }), z.__chain__ = j, z;
            }
            return T.apply(r, rs([this.value()], arguments));
          });
        }), r;
      }
      function Lw() {
        return ke._ === this && (ke._ = gg), this;
      }
      function zc() {
      }
      function Kw(r) {
        return r = bt(r), At(function(n) {
          return rl(n, r);
        });
      }
      var Hw = wc(we), Vw = wc(Eu), Qw = wc(Ka);
      function _f(r) {
        return Pc(r) ? Ha(fi(r)) : E1(r);
      }
      function Gw(r) {
        return function(n) {
          return r == null ? e : _s(r, n);
        };
      }
      var Jw = Il(), Yw = Il(!0);
      function Lc() {
        return [];
      }
      function Kc() {
        return !1;
      }
      function Ww() {
        return {};
      }
      function Xw() {
        return "";
      }
      function Zw() {
        return !0;
      }
      function tb(r, n) {
        if (r = bt(r), r < 1 || r > N)
          return [];
        var c = f, l = Ke(r, f);
        n = ft(n), r -= f;
        for (var g = Ga(l, n); ++c < r; )
          n(c);
        return g;
      }
      function eb(r) {
        return yt(r) ? we(r, fi) : gr(r) ? [r] : er($l(Ut(r)));
      }
      function rb(r) {
        var n = ++pg;
        return Ut(r) + n;
      }
      var ib = Ho(function(r, n) {
        return r + n;
      }, 0), sb = bc("ceil"), nb = Ho(function(r, n) {
        return r / n;
      }, 1), ob = bc("floor");
      function ab(r) {
        return r && r.length ? Bo(r, sr, nc) : e;
      }
      function cb(r, n) {
        return r && r.length ? Bo(r, ft(n, 2), nc) : e;
      }
      function hb(r) {
        return Pu(r, sr);
      }
      function ub(r, n) {
        return Pu(r, ft(n, 2));
      }
      function lb(r) {
        return r && r.length ? Bo(r, sr, hc) : e;
      }
      function fb(r, n) {
        return r && r.length ? Bo(r, ft(n, 2), hc) : e;
      }
      var pb = Ho(function(r, n) {
        return r * n;
      }, 1), db = bc("round"), gb = Ho(function(r, n) {
        return r - n;
      }, 0);
      function mb(r) {
        return r && r.length ? Qa(r, sr) : 0;
      }
      function vb(r, n) {
        return r && r.length ? Qa(r, ft(n, 2)) : 0;
      }
      return w.after = Uv, w.ary = Wl, w.assign = Py, w.assignIn = ff, w.assignInWith = sa, w.assignWith = My, w.at = Cy, w.before = Xl, w.bind = Oc, w.bindAll = Tw, w.bindKey = Zl, w.castArray = Wv, w.chain = Gl, w.chunk = om, w.compact = am, w.concat = cm, w.cond = Fw, w.conforms = Dw, w.constant = Uc, w.countBy = mv, w.create = xy, w.curry = tf, w.curryRight = ef, w.debounce = rf, w.defaults = Ny, w.defaultsDeep = Ry, w.defer = $v, w.delay = jv, w.difference = hm, w.differenceBy = um, w.differenceWith = lm, w.drop = fm, w.dropRight = pm, w.dropRightWhile = dm, w.dropWhile = gm, w.fill = mm, w.filter = yv, w.flatMap = _v, w.flatMapDeep = Av, w.flatMapDepth = Ev, w.flatten = Kl, w.flattenDeep = vm, w.flattenDepth = ym, w.flip = zv, w.flow = kw, w.flowRight = Bw, w.fromPairs = wm, w.functions = By, w.functionsIn = Uy, w.groupBy = Iv, w.initial = _m, w.intersection = Am, w.intersectionBy = Em, w.intersectionWith = Im, w.invert = jy, w.invertBy = zy, w.invokeMap = Pv, w.iteratee = $c, w.keyBy = Mv, w.keys = De, w.keysIn = ir, w.map = Xo, w.mapKeys = Ky, w.mapValues = Hy, w.matches = Uw, w.matchesProperty = $w, w.memoize = ta, w.merge = Vy, w.mergeWith = pf, w.method = jw, w.methodOf = zw, w.mixin = jc, w.negate = ea, w.nthArg = Kw, w.omit = Qy, w.omitBy = Gy, w.once = Lv, w.orderBy = Cv, w.over = Hw, w.overArgs = Kv, w.overEvery = Vw, w.overSome = Qw, w.partial = Tc, w.partialRight = sf, w.partition = xv, w.pick = Jy, w.pickBy = df, w.property = _f, w.propertyOf = Gw, w.pull = Cm, w.pullAll = Vl, w.pullAllBy = xm, w.pullAllWith = Nm, w.pullAt = Rm, w.range = Jw, w.rangeRight = Yw, w.rearg = Hv, w.reject = Ov, w.remove = Om, w.rest = Vv, w.reverse = Nc, w.sampleSize = Fv, w.set = Wy, w.setWith = Xy, w.shuffle = Dv, w.slice = Tm, w.sortBy = Bv, w.sortedUniq = $m, w.sortedUniqBy = jm, w.split = _w, w.spread = Qv, w.tail = zm, w.take = Lm, w.takeRight = Km, w.takeRightWhile = Hm, w.takeWhile = Vm, w.tap = av, w.throttle = Gv, w.thru = Wo, w.toArray = hf, w.toPairs = gf, w.toPairsIn = mf, w.toPath = eb, w.toPlainObject = lf, w.transform = Zy, w.unary = Jv, w.union = Qm, w.unionBy = Gm, w.unionWith = Jm, w.uniq = Ym, w.uniqBy = Wm, w.uniqWith = Xm, w.unset = tw, w.unzip = Rc, w.unzipWith = Ql, w.update = ew, w.updateWith = rw, w.values = tn, w.valuesIn = iw, w.without = Zm, w.words = wf, w.wrap = Yv, w.xor = tv, w.xorBy = ev, w.xorWith = rv, w.zip = iv, w.zipObject = sv, w.zipObjectDeep = nv, w.zipWith = ov, w.entries = gf, w.entriesIn = mf, w.extend = ff, w.extendWith = sa, jc(w, w), w.add = ib, w.attempt = bf, w.camelCase = aw, w.capitalize = vf, w.ceil = sb, w.clamp = sw, w.clone = Xv, w.cloneDeep = ty, w.cloneDeepWith = ey, w.cloneWith = Zv, w.conformsTo = ry, w.deburr = yf, w.defaultTo = qw, w.divide = nb, w.endsWith = cw, w.eq = Lr, w.escape = hw, w.escapeRegExp = uw, w.every = vv, w.find = wv, w.findIndex = zl, w.findKey = Oy, w.findLast = bv, w.findLastIndex = Ll, w.findLastKey = Ty, w.floor = ob, w.forEach = Jl, w.forEachRight = Yl, w.forIn = Fy, w.forInRight = Dy, w.forOwn = qy, w.forOwnRight = ky, w.get = qc, w.gt = iy, w.gte = sy, w.has = $y, w.hasIn = kc, w.head = Hl, w.identity = sr, w.includes = Sv, w.indexOf = bm, w.inRange = nw, w.invoke = Ly, w.isArguments = Is, w.isArray = yt, w.isArrayBuffer = ny, w.isArrayLike = rr, w.isArrayLikeObject = Ie, w.isBoolean = oy, w.isBuffer = hs, w.isDate = ay, w.isElement = cy, w.isEmpty = hy, w.isEqual = uy, w.isEqualWith = ly, w.isError = Fc, w.isFinite = fy, w.isFunction = zi, w.isInteger = nf, w.isLength = ra, w.isMap = of, w.isMatch = py, w.isMatchWith = dy, w.isNaN = gy, w.isNative = my, w.isNil = yy, w.isNull = vy, w.isNumber = af, w.isObject = _e, w.isObjectLike = Ae, w.isPlainObject = Ln, w.isRegExp = Dc, w.isSafeInteger = wy, w.isSet = cf, w.isString = ia, w.isSymbol = gr, w.isTypedArray = Zs, w.isUndefined = by, w.isWeakMap = _y, w.isWeakSet = Ay, w.join = Sm, w.kebabCase = lw, w.last = Cr, w.lastIndexOf = Pm, w.lowerCase = fw, w.lowerFirst = pw, w.lt = Ey, w.lte = Iy, w.max = ab, w.maxBy = cb, w.mean = hb, w.meanBy = ub, w.min = lb, w.minBy = fb, w.stubArray = Lc, w.stubFalse = Kc, w.stubObject = Ww, w.stubString = Xw, w.stubTrue = Zw, w.multiply = pb, w.nth = Mm, w.noConflict = Lw, w.noop = zc, w.now = Zo, w.pad = dw, w.padEnd = gw, w.padStart = mw, w.parseInt = vw, w.random = ow, w.reduce = Nv, w.reduceRight = Rv, w.repeat = yw, w.replace = ww, w.result = Yy, w.round = db, w.runInContext = R, w.sample = Tv, w.size = qv, w.snakeCase = bw, w.some = kv, w.sortedIndex = Fm, w.sortedIndexBy = Dm, w.sortedIndexOf = qm, w.sortedLastIndex = km, w.sortedLastIndexBy = Bm, w.sortedLastIndexOf = Um, w.startCase = Aw, w.startsWith = Ew, w.subtract = gb, w.sum = mb, w.sumBy = vb, w.template = Iw, w.times = tb, w.toFinite = Li, w.toInteger = bt, w.toLength = uf, w.toLower = Sw, w.toNumber = xr, w.toSafeInteger = Sy, w.toString = Ut, w.toUpper = Pw, w.trim = Mw, w.trimEnd = Cw, w.trimStart = xw, w.truncate = Nw, w.unescape = Rw, w.uniqueId = rb, w.upperCase = Ow, w.upperFirst = Bc, w.each = Jl, w.eachRight = Yl, w.first = Hl, jc(w, function() {
        var r = {};
        return ui(w, function(n, c) {
          Gt.call(w.prototype, c) || (r[c] = n);
        }), r;
      }(), { chain: !1 }), w.VERSION = s, Er(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        w[r].placeholder = w;
      }), Er(["drop", "take"], function(r, n) {
        St.prototype[r] = function(c) {
          c = c === e ? 1 : Re(bt(c), 0);
          var l = this.__filtered__ && !n ? new St(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Ke(c, l.__takeCount__) : l.__views__.push({ size: Ke(c, f), type: r + (l.__dir__ < 0 ? "Right" : "") }), l;
        }, St.prototype[r + "Right"] = function(c) {
          return this.reverse()[r](c).reverse();
        };
      }), Er(["filter", "map", "takeWhile"], function(r, n) {
        var c = n + 1, l = c == d || c == E;
        St.prototype[r] = function(g) {
          var _ = this.clone();
          return _.__iteratees__.push({ iteratee: ft(g, 3), type: c }), _.__filtered__ = _.__filtered__ || l, _;
        };
      }), Er(["head", "last"], function(r, n) {
        var c = "take" + (n ? "Right" : "");
        St.prototype[r] = function() {
          return this[c](1).value()[0];
        };
      }), Er(["initial", "tail"], function(r, n) {
        var c = "drop" + (n ? "" : "Right");
        St.prototype[r] = function() {
          return this.__filtered__ ? new St(this) : this[c](1);
        };
      }), St.prototype.compact = function() {
        return this.filter(sr);
      }, St.prototype.find = function(r) {
        return this.filter(r).head();
      }, St.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, St.prototype.invokeMap = At(function(r, n) {
        return typeof r == "function" ? new St(this) : this.map(function(c) {
          return kn(c, r, n);
        });
      }), St.prototype.reject = function(r) {
        return this.filter(ea(ft(r)));
      }, St.prototype.slice = function(r, n) {
        r = bt(r);
        var c = this;
        return c.__filtered__ && (r > 0 || n < 0) ? new St(c) : (r < 0 ? c = c.takeRight(-r) : r && (c = c.drop(r)), n !== e && (n = bt(n), c = n < 0 ? c.dropRight(-n) : c.take(n - r)), c);
      }, St.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, St.prototype.toArray = function() {
        return this.take(f);
      }, ui(St.prototype, function(r, n) {
        var c = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), g = w[l ? "take" + (n == "last" ? "Right" : "") : n], _ = l || /^find/.test(n);
        g && (w.prototype[n] = function() {
          var C = this.__wrapped__, x = l ? [1] : arguments, T = C instanceof St, j = x[0], z = T || yt(C), V = function(Et) {
            var Nt = g.apply(w, rs([Et], x));
            return l && W ? Nt[0] : Nt;
          };
          z && c && typeof j == "function" && j.length != 1 && (T = z = !1);
          var W = this.__chain__, nt = !!this.__actions__.length, pt = _ && !W, _t = T && !nt;
          if (!_ && z) {
            C = _t ? C : new St(this);
            var dt = r.apply(C, x);
            return dt.__actions__.push({ func: Wo, args: [V], thisArg: e }), new Sr(dt, W);
          }
          return pt && _t ? r.apply(this, x) : (dt = this.thru(V), pt ? l ? dt.value()[0] : dt.value() : dt);
        });
      }), Er(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var n = Eo[r], c = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(r);
        w.prototype[r] = function() {
          var g = arguments;
          if (l && !this.__chain__) {
            var _ = this.value();
            return n.apply(yt(_) ? _ : [], g);
          }
          return this[c](function(C) {
            return n.apply(yt(C) ? C : [], g);
          });
        };
      }), ui(St.prototype, function(r, n) {
        var c = w[n];
        if (c) {
          var l = c.name + "";
          Gt.call(Gs, l) || (Gs[l] = []), Gs[l].push({ name: n, func: c });
        }
      }), Gs[Ko(e, Q).name] = [{ name: "wrapper", func: e }], St.prototype.clone = Rg, St.prototype.reverse = Og, St.prototype.value = Tg, w.prototype.at = cv, w.prototype.chain = hv, w.prototype.commit = uv, w.prototype.next = lv, w.prototype.plant = pv, w.prototype.reverse = dv, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = gv, w.prototype.first = w.prototype.head, Nn && (w.prototype[Nn] = fv), w;
    }, Hs = ug();
    ms ? ((ms.exports = Hs)._ = Hs, $a._ = Hs) : ke._ = Hs;
  }).call(Xn);
})(Nh, Nh.exports);
var O8 = Object.defineProperty, T8 = Object.defineProperties, F8 = Object.getOwnPropertyDescriptors, Up = Object.getOwnPropertySymbols, D8 = Object.prototype.hasOwnProperty, q8 = Object.prototype.propertyIsEnumerable, $p = (i, t, e) => t in i ? O8(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, ua = (i, t) => {
  for (var e in t || (t = {}))
    D8.call(t, e) && $p(i, e, t[e]);
  if (Up)
    for (var e of Up(t))
      q8.call(t, e) && $p(i, e, t[e]);
  return i;
}, k8 = (i, t) => T8(i, F8(t));
function Zr(i, t, e) {
  var s;
  const o = io(i);
  return ((s = t.rpcMap) == null ? void 0 : s[o.reference]) || `${R8}?chainId=${o.namespace}:${o.reference}&projectId=${e}`;
}
function ks(i) {
  return i.includes(":") ? i.split(":")[1] : i;
}
function m0(i) {
  return i.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
}
function B8(i, t) {
  const e = Object.keys(t.namespaces).filter((o) => o.includes(i));
  if (!e.length)
    return [];
  const s = [];
  return e.forEach((o) => {
    const a = t.namespaces[o].accounts;
    s.push(...a);
  }), s;
}
function fh(i = {}, t = {}) {
  const e = jp(i), s = jp(t);
  return Nh.exports.merge(e, s);
}
function jp(i) {
  var t, e, s, o;
  const a = {};
  if (!uo(i))
    return a;
  for (const [h, p] of Object.entries(i)) {
    const v = Vh(h) ? [h] : p.chains, y = p.methods || [], P = p.events || [], S = p.rpcMap || {}, O = eo(h);
    a[O] = k8(ua(ua({}, a[O]), p), { chains: pa(v, (t = a[O]) == null ? void 0 : t.chains), methods: pa(y, (e = a[O]) == null ? void 0 : e.methods), events: pa(P, (s = a[O]) == null ? void 0 : s.events), rpcMap: ua(ua({}, S), (o = a[O]) == null ? void 0 : o.rpcMap) });
  }
  return a;
}
function U8(i) {
  return i.includes(":") ? i.split(":")[2] : i;
}
function zp(i) {
  const t = {};
  for (const [e, s] of Object.entries(i)) {
    const o = s.methods || [], a = s.events || [], h = s.accounts || [], p = Vh(e) ? [e] : s.chains ? s.chains : m0(s.accounts);
    t[e] = { chains: p, methods: o, events: a, accounts: h };
  }
  return t;
}
function ph(i) {
  return typeof i == "number" ? i : i.includes("0x") ? parseInt(i, 16) : (i = i.includes(":") ? i.split(":")[1] : i, isNaN(Number(i)) ? i : Number(i));
}
const v0 = {}, $t = (i) => v0[i], dh = (i, t) => {
  v0[i] = t;
};
class $8 {
  constructor(t) {
    this.name = "polkadot", this.namespace = t.namespace, this.events = $t("events"), this.client = $t("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(ei.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var s;
      const o = ks(e);
      t[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || Zr(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new ti(new Mi(s, $t("disableProviderPing")));
  }
}
var j8 = Object.defineProperty, z8 = Object.defineProperties, L8 = Object.getOwnPropertyDescriptors, Lp = Object.getOwnPropertySymbols, K8 = Object.prototype.hasOwnProperty, H8 = Object.prototype.propertyIsEnumerable, Kp = (i, t, e) => t in i ? j8(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, Hp = (i, t) => {
  for (var e in t || (t = {}))
    K8.call(t, e) && Kp(i, e, t[e]);
  if (Lp)
    for (var e of Lp(t))
      H8.call(t, e) && Kp(i, e, t[e]);
  return i;
}, Vp = (i, t) => z8(i, L8(t));
class V8 {
  constructor(t) {
    this.name = "eip155", this.namespace = t.namespace, this.events = $t("events"), this.client = $t("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(t) {
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(t);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(t);
    }
    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), e), this.chainId = parseInt(t), this.events.emit(ei.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  createHttpProvider(t, e) {
    const s = e || Zr(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new ti(new Mi(s, $t("disableProviderPing")));
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var s;
      const o = parseInt(ks(e));
      t[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[e]);
    }), t;
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const t = this.chainId, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  async handleSwitchChain(t) {
    var e, s;
    let o = t.request.params ? (e = t.request.params[0]) == null ? void 0 : e.chainId : "0x0";
    o = o.startsWith("0x") ? o : `0x${o}`;
    const a = parseInt(o, 16);
    if (this.isChainApproved(a))
      this.setDefaultChain(`${a}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({ topic: t.topic, request: { method: t.request.method, params: [{ chainId: o }] }, chainId: (s = this.namespace.chains) == null ? void 0 : s[0] }), this.setDefaultChain(`${a}`);
    else
      throw new Error(`Failed to switch to chain 'eip155:${a}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
  async getCapabilities(t) {
    var e, s, o;
    const a = (s = (e = t.request) == null ? void 0 : e.params) == null ? void 0 : s[0];
    if (!a)
      throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const h = this.client.session.get(t.topic), p = ((o = h == null ? void 0 : h.sessionProperties) == null ? void 0 : o.capabilities) || {};
    if (p != null && p[a])
      return p == null ? void 0 : p[a];
    const v = await this.client.request(t);
    try {
      await this.client.session.update(t.topic, { sessionProperties: Vp(Hp({}, h.sessionProperties || {}), { capabilities: Vp(Hp({}, p || {}), { [a]: v }) }) });
    } catch (y) {
      console.warn("Failed to update session with capabilities", y);
    }
    return v;
  }
}
class Q8 {
  constructor(t) {
    this.name = "solana", this.namespace = t.namespace, this.events = $t("events"), this.client = $t("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(ei.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var s;
      const o = ks(e);
      t[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || Zr(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new ti(new Mi(s, $t("disableProviderPing")));
  }
}
class G8 {
  constructor(t) {
    this.name = "cosmos", this.namespace = t.namespace, this.events = $t("events"), this.client = $t("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(ei.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var s;
      const o = ks(e);
      t[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || Zr(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new ti(new Mi(s, $t("disableProviderPing")));
  }
}
class J8 {
  constructor(t) {
    this.name = "algorand", this.namespace = t.namespace, this.events = $t("events"), this.client = $t("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    if (!this.httpProviders[t]) {
      const s = e || Zr(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
      if (!s)
        throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.chainId = t, this.events.emit(ei.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var s;
      t[e] = this.createHttpProvider(e, (s = this.namespace.rpcMap) == null ? void 0 : s[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || Zr(t, this.namespace, this.client.core.projectId);
    return typeof s > "u" ? void 0 : new ti(new Mi(s, $t("disableProviderPing")));
  }
}
class Y8 {
  constructor(t) {
    this.name = "cip34", this.namespace = t.namespace, this.events = $t("events"), this.client = $t("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(ei.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      const s = this.getCardanoRPCUrl(e), o = ks(e);
      t[o] = this.createHttpProvider(o, s);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  getCardanoRPCUrl(t) {
    const e = this.namespace.rpcMap;
    if (e)
      return e[t];
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || this.getCardanoRPCUrl(t);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new ti(new Mi(s, $t("disableProviderPing")));
  }
}
class W8 {
  constructor(t) {
    this.name = "elrond", this.namespace = t.namespace, this.events = $t("events"), this.client = $t("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(ei.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var s;
      const o = ks(e);
      t[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || Zr(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new ti(new Mi(s, $t("disableProviderPing")));
  }
}
class X8 {
  constructor(t) {
    this.name = "multiversx", this.namespace = t.namespace, this.events = $t("events"), this.client = $t("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(ei.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var s;
      const o = ks(e);
      t[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || Zr(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new ti(new Mi(s, $t("disableProviderPing")));
  }
}
class Z8 {
  constructor(t) {
    this.name = "near", this.namespace = t.namespace, this.events = $t("events"), this.client = $t("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const s = e || Zr(`${this.name}:${t}`, this.namespace);
      if (!s)
        throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.events.emit(ei.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var s;
      t[e] = this.createHttpProvider(e, (s = this.namespace.rpcMap) == null ? void 0 : s[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || Zr(t, this.namespace);
    return typeof s > "u" ? void 0 : new ti(new Mi(s, $t("disableProviderPing")));
  }
}
class t4 {
  constructor(t) {
    this.name = nn, this.namespace = t.namespace, this.events = $t("events"), this.client = $t("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(t.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(t.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(t.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(t.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider(t.chainId).request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(ei.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var t, e;
    const s = {};
    return (e = (t = this.namespace) == null ? void 0 : t.accounts) == null || e.forEach((o) => {
      const a = io(o);
      s[`${a.namespace}:${a.reference}`] = this.createHttpProvider(o);
    }), s;
  }
  getHttpProvider(t) {
    const e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || Zr(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new ti(new Mi(s, $t("disableProviderPing")));
  }
}
var e4 = Object.defineProperty, r4 = Object.defineProperties, i4 = Object.getOwnPropertyDescriptors, Qp = Object.getOwnPropertySymbols, s4 = Object.prototype.hasOwnProperty, n4 = Object.prototype.propertyIsEnumerable, Gp = (i, t, e) => t in i ? e4(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, la = (i, t) => {
  for (var e in t || (t = {}))
    s4.call(t, e) && Gp(i, e, t[e]);
  if (Qp)
    for (var e of Qp(t))
      n4.call(t, e) && Gp(i, e, t[e]);
  return i;
}, gh = (i, t) => r4(i, i4(t));
class Xh {
  constructor(t) {
    this.events = new kh(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Fh(Na({ level: (t == null ? void 0 : t.logger) || kp })), this.disableProviderPing = (t == null ? void 0 : t.disableProviderPing) || !1;
  }
  static async init(t) {
    const e = new Xh(t);
    return await e.initialize(), e;
  }
  async request(t, e, s) {
    const [o, a] = this.validateChain(e);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(o).request({ request: la({}, t), chainId: `${o}:${a}`, topic: this.session.topic, expiry: s });
  }
  sendAsync(t, e, s, o) {
    const a = (/* @__PURE__ */ new Date()).getTime();
    this.request(t, s, o).then((h) => e(null, Ra(a, h))).catch((h) => e(h, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var t;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (t = this.session) == null ? void 0 : t.topic, reason: Jt("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(t) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing)
      return await this.pair(t.pairingTopic);
  }
  async authenticate(t) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    this.setNamespaces(t), await this.cleanupPendingPairings();
    const { uri: e, response: s } = await this.client.authenticate(t);
    e && (this.uri = e, this.events.emit("display_uri", e));
    const o = await s();
    if (this.session = o.session, this.session) {
      const a = zp(this.session.namespaces);
      this.namespaces = fh(this.namespaces, a), this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return o;
  }
  on(t, e) {
    this.events.on(t, e);
  }
  once(t, e) {
    this.events.once(t, e);
  }
  removeListener(t, e) {
    this.events.removeListener(t, e);
  }
  off(t, e) {
    this.events.off(t, e);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(t) {
    this.shouldAbortPairingAttempt = !1;
    let e = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (e >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: s, approval: o } = await this.client.connect({ pairingTopic: t, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      s && (this.uri = s, this.events.emit("display_uri", s)), await o().then((a) => {
        this.session = a;
        const h = zp(a.namespaces);
        this.namespaces = fh(this.namespaces, h), this.persist("namespaces", this.namespaces);
      }).catch((a) => {
        if (a.message !== g0)
          throw a;
        e++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(t, e) {
    try {
      if (!this.session)
        return;
      const [s, o] = this.validateChain(t), a = this.getProvider(s);
      a.name === nn ? a.setDefaultChain(`${s}:${o}`, e) : a.setDefaultChain(o, e);
    } catch (s) {
      if (!/Please call connect/.test(s.message))
        throw s;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const e = this.client.pairing.getAll();
    if (Si(e)) {
      for (const s of e)
        t.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${e.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const t = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await Wh.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || kp, relayUrl: this.providerOpts.relayUrl || C8, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    const t = [...new Set(Object.keys(this.session.namespaces).map((e) => eo(e)))];
    dh("client", this.client), dh("events", this.events), dh("disableProviderPing", this.disableProviderPing), t.forEach((e) => {
      if (!this.session)
        return;
      const s = B8(e, this.session), o = m0(s), a = fh(this.namespaces, this.optionalNamespaces), h = gh(la({}, a[e]), { accounts: s, chains: o });
      switch (e) {
        case "eip155":
          this.rpcProviders[e] = new V8({ namespace: h });
          break;
        case "algorand":
          this.rpcProviders[e] = new J8({ namespace: h });
          break;
        case "solana":
          this.rpcProviders[e] = new Q8({ namespace: h });
          break;
        case "cosmos":
          this.rpcProviders[e] = new G8({ namespace: h });
          break;
        case "polkadot":
          this.rpcProviders[e] = new $8({ namespace: h });
          break;
        case "cip34":
          this.rpcProviders[e] = new Y8({ namespace: h });
          break;
        case "elrond":
          this.rpcProviders[e] = new W8({ namespace: h });
          break;
        case "multiversx":
          this.rpcProviders[e] = new X8({ namespace: h });
          break;
        case "near":
          this.rpcProviders[e] = new Z8({ namespace: h });
          break;
        default:
          this.rpcProviders[nn] ? this.rpcProviders[nn].updateNamespace(h) : this.rpcProviders[nn] = new t4({ namespace: h });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      this.events.emit("session_ping", t);
    }), this.client.on("session_event", (t) => {
      const { params: e } = t, { event: s } = e;
      if (s.name === "accountsChanged") {
        const o = s.data;
        o && Si(o) && this.events.emit("accountsChanged", o.map(U8));
      } else if (s.name === "chainChanged") {
        const o = e.chainId, a = e.event.data, h = eo(o), p = ph(o) !== ph(a) ? `${h}:${ph(a)}` : o;
        this.onChainChanged(p);
      } else
        this.events.emit(s.name, s.data);
      this.events.emit("session_event", t);
    }), this.client.on("session_update", ({ topic: t, params: e }) => {
      var s;
      const { namespaces: o } = e, a = (s = this.client) == null ? void 0 : s.session.get(t);
      this.session = gh(la({}, a), { namespaces: o }), this.onSessionUpdate(), this.events.emit("session_update", { topic: t, params: e });
    }), this.client.on("session_delete", async (t) => {
      await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", gh(la({}, Jt("USER_DISCONNECTED")), { data: t.topic }));
    }), this.on(ei.DEFAULT_CHAIN_CHANGED, (t) => {
      this.onChainChanged(t, !0);
    });
  }
  getProvider(t) {
    return this.rpcProviders[t] || this.rpcProviders[nn];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var e;
      this.getProvider(t).updateNamespace((e = this.session) == null ? void 0 : e.namespaces[t]);
    });
  }
  setNamespaces(t) {
    const { namespaces: e, optionalNamespaces: s, sessionProperties: o } = t;
    e && Object.keys(e).length && (this.namespaces = e), s && Object.keys(s).length && (this.optionalNamespaces = s), this.sessionProperties = o, this.persist("namespaces", e), this.persist("optionalNamespaces", s);
  }
  validateChain(t) {
    const [e, s] = (t == null ? void 0 : t.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length)
      return [e, s];
    if (e && !Object.keys(this.namespaces || {}).map((h) => eo(h)).includes(e))
      throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
    if (e && s)
      return [e, s];
    const o = eo(Object.keys(this.namespaces)[0]), a = this.rpcProviders[o].getDefaultChain();
    return [o, a];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  onChainChanged(t, e = !1) {
    if (!this.namespaces)
      return;
    const [s, o] = this.validateChain(t);
    o && (e || this.getProvider(s).setDefaultChain(o), this.namespaces[s] ? this.namespaces[s].defaultChain = o : this.namespaces[`${s}:${o}`] ? this.namespaces[`${s}:${o}`].defaultChain = o : this.namespaces[`${s}:${o}`] = { defaultChain: o }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", o));
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(t, e) {
    this.client.core.storage.setItem(`${Bp}/${t}`, e);
  }
  async getFromStore(t) {
    return await this.client.core.storage.getItem(`${Bp}/${t}`);
  }
}
const o4 = Xh, a4 = "wc", c4 = "ethereum_provider", h4 = `${a4}@2:${c4}:`, u4 = "https://rpc.walletconnect.com/v1/", Rh = ["eth_sendTransaction", "personal_sign"], l4 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"], Oh = ["chainChanged", "accountsChanged"], f4 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var p4 = Object.defineProperty, d4 = Object.defineProperties, g4 = Object.getOwnPropertyDescriptors, Jp = Object.getOwnPropertySymbols, m4 = Object.prototype.hasOwnProperty, v4 = Object.prototype.propertyIsEnumerable, Yp = (i, t, e) => t in i ? p4(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, on = (i, t) => {
  for (var e in t || (t = {}))
    m4.call(t, e) && Yp(i, e, t[e]);
  if (Jp)
    for (var e of Jp(t))
      v4.call(t, e) && Yp(i, e, t[e]);
  return i;
}, mh = (i, t) => d4(i, g4(t));
function Ca(i) {
  return Number(i[0].split(":")[1]);
}
function fa(i) {
  return `0x${i.toString(16)}`;
}
function y4(i) {
  const { chains: t, optionalChains: e, methods: s, optionalMethods: o, events: a, optionalEvents: h, rpcMap: p } = i;
  if (!Si(t))
    throw new Error("Invalid chains");
  const v = { chains: t, methods: s || Rh, events: a || Oh, rpcMap: on({}, t.length ? { [Ca(t)]: p[Ca(t)] } : {}) }, y = a == null ? void 0 : a.filter((F) => !Oh.includes(F)), P = s == null ? void 0 : s.filter((F) => !Rh.includes(F));
  if (!e && !h && !o && !(y != null && y.length) && !(P != null && P.length))
    return { required: t.length ? v : void 0 };
  const S = (y == null ? void 0 : y.length) && (P == null ? void 0 : P.length) || !e, O = { chains: [...new Set(S ? v.chains.concat(e || []) : e)], methods: [...new Set(v.methods.concat(o != null && o.length ? o : l4))], events: [...new Set(v.events.concat(h != null && h.length ? h : f4))], rpcMap: p };
  return { required: t.length ? v : void 0, optional: e.length ? O : void 0 };
}
class Zh {
  constructor() {
    this.events = new gs.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = h4, this.on = (t, e) => (this.events.on(t, e), this), this.once = (t, e) => (this.events.once(t, e), this), this.removeListener = (t, e) => (this.events.removeListener(t, e), this), this.off = (t, e) => (this.events.off(t, e), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const e = new Zh();
    return await e.initialize(t), e;
  }
  async request(t, e) {
    return await this.signer.request(t, this.formatChainId(this.chainId), e);
  }
  sendAsync(t, e, s) {
    this.signer.sendAsync(t, e, this.formatChainId(this.chainId), s);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: e, optional: s } = y4(this.rpc);
    try {
      const o = await new Promise(async (h, p) => {
        var v;
        this.rpc.showQrModal && ((v = this.modal) == null || v.subscribeModal((y) => {
          !y.open && !this.signer.session && (this.signer.abortPairingAttempt(), p(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(mh(on({ namespaces: on({}, e && { [this.namespace]: e }) }, s && { optionalNamespaces: { [this.namespace]: s } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((y) => {
          h(y);
        }).catch((y) => {
          p(new Error(y.message));
        });
      });
      if (!o)
        return;
      const a = Sf(o.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : a), this.setAccounts(a), this.events.emit("connect", { chainId: fa(this.chainId) });
    } catch (o) {
      throw this.signer.logger.error(o), o;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async authenticate(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: t == null ? void 0 : t.chains });
    try {
      const e = await new Promise(async (o, a) => {
        var h;
        this.rpc.showQrModal && ((h = this.modal) == null || h.subscribeModal((p) => {
          !p.open && !this.signer.session && (this.signer.abortPairingAttempt(), a(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(mh(on({}, t), { chains: this.rpc.chains })).then((p) => {
          o(p);
        }).catch((p) => {
          a(new Error(p.message));
        });
      }), s = e.session;
      if (s) {
        const o = Sf(s.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o), this.setAccounts(o), this.events.emit("connect", { chainId: fa(this.chainId) });
      }
      return e;
    } catch (e) {
      throw this.signer.logger.error(e), e;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: e } = t, { event: s } = e;
      s.name === "accountsChanged" ? (this.accounts = this.parseAccounts(s.data), this.events.emit("accountsChanged", this.accounts)) : s.name === "chainChanged" ? this.setChainId(this.formatChainId(s.data)) : this.events.emit(s.name, s.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const e = parseInt(t);
      this.chainId = e, this.events.emit("chainChanged", fa(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", mh(on({}, Jt("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var e, s;
      this.rpc.showQrModal && ((e = this.modal) == null || e.closeModal(), (s = this.modal) == null || s.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const e = t.filter((s) => this.isCompatibleChainId(s)).map((s) => this.parseChainId(s));
    e.length && (this.chainId = e[0], this.events.emit("chainChanged", fa(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const e = this.parseChainId(t);
      this.chainId = e, this.switchEthereumChain(e);
    }
  }
  parseAccountId(t) {
    const [e, s, o] = t.split(":");
    return { chainId: `${e}:${s}`, address: o };
  }
  setAccounts(t) {
    this.accounts = t.filter((e) => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map((e) => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var e, s;
    const o = (e = t == null ? void 0 : t.chains) != null ? e : [], a = (s = t == null ? void 0 : t.optionalChains) != null ? s : [], h = o.concat(a);
    if (!h.length)
      throw new Error("No chains specified in either `chains` or `optionalChains`");
    const p = o.length ? (t == null ? void 0 : t.methods) || Rh : [], v = o.length ? (t == null ? void 0 : t.events) || Oh : [], y = (t == null ? void 0 : t.optionalMethods) || [], P = (t == null ? void 0 : t.optionalEvents) || [], S = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(h, t.projectId), O = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: o == null ? void 0 : o.map((F) => this.formatChainId(F)), optionalChains: a.map((F) => this.formatChainId(F)), methods: p, events: v, optionalMethods: y, optionalEvents: P, rpcMap: S, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: O, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, e) {
    const s = {};
    return t.forEach((o) => {
      s[o] = this.getRpcUrl(o, e);
    }), s;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? Ca(this.rpc.chains) : Ca(this.rpc.optionalChains), this.signer = await o4.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions, customStoragePrefix: t.customStoragePrefix, telemetryEnabled: t.telemetryEnabled }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let e;
      try {
        const { WalletConnectModal: s } = await import("./index-Du_luu6j.js").then((o) => o.i);
        e = s;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (e)
        try {
          this.modal = new e(on({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
        } catch (s) {
          throw this.signer.logger.error(s), new Error("Could not generate WalletConnectModal Instance");
        }
    }
  }
  loadConnectOpts(t) {
    if (!t)
      return;
    const { chains: e, optionalChains: s, rpcMap: o } = t;
    e && Si(e) && (this.rpc.chains = e.map((a) => this.formatChainId(a)), e.forEach((a) => {
      this.rpc.rpcMap[a] = (o == null ? void 0 : o[a]) || this.getRpcUrl(a);
    })), s && Si(s) && (this.rpc.optionalChains = [], this.rpc.optionalChains = s == null ? void 0 : s.map((a) => this.formatChainId(a)), s.forEach((a) => {
      this.rpc.rpcMap[a] = (o == null ? void 0 : o[a]) || this.getRpcUrl(a);
    }));
  }
  getRpcUrl(t, e) {
    var s;
    return ((s = this.rpc.rpcMap) == null ? void 0 : s[t]) || `${u4}?chainId=eip155:${t}&projectId=${e || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session)
      try {
        const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), e = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
        this.setChainIds(t ? [this.formatChainId(t)] : e == null ? void 0 : e.accounts), this.setAccounts(e == null ? void 0 : e.accounts);
      } catch (t) {
        this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch((e) => this.signer.logger.warn(e));
      }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((e) => this.parseAccount(e));
  }
}
const x4 = Zh;
export {
  x4 as EthereumProvider,
  f4 as OPTIONAL_EVENTS,
  l4 as OPTIONAL_METHODS,
  Oh as REQUIRED_EVENTS,
  Rh as REQUIRED_METHODS,
  Zh as default
};
