import { E as zl, W as _l, P as Ct, C as me, a as _f, S as Hl, b as ta, c as Hf, N as je, H as yc, d as $f, e as wc, f as Dn, g as Rn, i as jf, h as gc, j as xc, k as Io, l as Cc, A as qf } from "./W3MFrameProviderSingleton-C9zzHw2W.js";
const $l = "2.21.4";
let Jt = {
  getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: n }) => t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
  version: $l
};
function Gf(e) {
  Jt = e;
}
let S = class na extends Error {
  constructor(t, n = {}) {
    var i;
    const r = (() => {
      var c;
      return n.cause instanceof na ? n.cause.details : (c = n.cause) != null && c.message ? n.cause.message : n.details;
    })(), s = n.cause instanceof na && n.cause.docsPath || n.docsPath, o = (i = Jt.getDocsUrl) == null ? void 0 : i.call(Jt, { ...n, docsPath: s }), a = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...o ? [`Docs: ${o}`] : [],
      ...r ? [`Details: ${r}`] : [],
      ...Jt.version ? [`Version: ${Jt.version}`] : []
    ].join(`
`);
    super(a, n.cause ? { cause: n.cause } : void 0), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BaseError"
    }), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.name = n.name ?? this.name, this.shortMessage = t, this.version = $l;
  }
  walk(t) {
    return jl(this, t);
  }
};
function jl(e, t) {
  return t != null && t(e) ? e : e && typeof e == "object" && "cause" in e ? jl(e.cause, t) : t ? null : e;
}
class ql extends S {
  constructor({ max: t, min: n, signed: r, size: s, value: o }) {
    super(`Number "${o}" is not in safe ${s ? `${s * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`, { name: "IntegerOutOfRangeError" });
  }
}
class Gl extends S {
  constructor(t) {
    super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
      name: "InvalidBytesBooleanError"
    });
  }
}
class Kl extends S {
  constructor(t) {
    super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, { name: "InvalidHexBooleanError" });
  }
}
class Ql extends S {
  constructor(t) {
    super(`Hex value "${t}" is an odd length (${t.length}). It must be an even length.`, { name: "InvalidHexValueError" });
  }
}
class Vl extends S {
  constructor({ givenSize: t, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`, { name: "SizeOverflowError" });
  }
}
class Ma extends S {
  constructor({ offset: t, position: n, size: r }) {
    super(`Slice ${n === "start" ? "starting" : "ending"} at offset "${t}" is out-of-bounds (size: ${r}).`, { name: "SliceOffsetOutOfBoundsError" });
  }
}
class Fa extends S {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`, { name: "SizeExceedsPaddingSizeError" });
  }
}
class Ac extends S {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${t} ${r} long.`, { name: "InvalidBytesLengthError" });
  }
}
function Ee(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == "string" ? Me(e, { dir: t, size: n }) : Wl(e, { dir: t, size: n });
}
function Me(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  const r = e.replace("0x", "");
  if (r.length > n * 2)
    throw new Fa({
      size: Math.ceil(r.length / 2),
      targetSize: n,
      type: "hex"
    });
  return `0x${r[t === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
function Wl(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  if (e.length > n)
    throw new Fa({
      size: e.length,
      targetSize: n,
      type: "bytes"
    });
  const r = new Uint8Array(n);
  for (let s = 0; s < n; s++) {
    const o = t === "right";
    r[o ? s : n - s - 1] = e[o ? s : e.length - s - 1];
  }
  return r;
}
function _(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x");
}
function X(e) {
  return _(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
function se(e, { dir: t = "left" } = {}) {
  let n = typeof e == "string" ? e.replace("0x", "") : e, r = 0;
  for (let s = 0; s < n.length - 1 && n[t === "left" ? s : n.length - s - 1].toString() === "0"; s++)
    r++;
  return n = t === "left" ? n.slice(r) : n.slice(0, n.length - r), typeof e == "string" ? (n.length === 1 && t === "right" && (n = `${n}0`), `0x${n.length % 2 === 1 ? `0${n}` : n}`) : n;
}
const Kf = /* @__PURE__ */ new TextEncoder();
function oe(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? Jl(e, t) : typeof e == "boolean" ? Zl(e, t) : _(e) ? ne(e, t) : st(e, t);
}
function Zl(e, t = {}) {
  const n = new Uint8Array(1);
  return n[0] = Number(e), typeof t.size == "number" ? (Be(n, { size: t.size }), Ee(n, { size: t.size })) : n;
}
const He = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function vc(e) {
  if (e >= He.zero && e <= He.nine)
    return e - He.zero;
  if (e >= He.A && e <= He.F)
    return e - (He.A - 10);
  if (e >= He.a && e <= He.f)
    return e - (He.a - 10);
}
function ne(e, t = {}) {
  let n = e;
  t.size && (Be(n, { size: t.size }), n = Ee(n, { dir: "right", size: t.size }));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  const s = r.length / 2, o = new Uint8Array(s);
  for (let a = 0, i = 0; a < s; a++) {
    const c = vc(r.charCodeAt(i++)), l = vc(r.charCodeAt(i++));
    if (c === void 0 || l === void 0)
      throw new S(`Invalid byte sequence ("${r[i - 2]}${r[i - 1]}" in "${r}").`);
    o[a] = c * 16 + l;
  }
  return o;
}
function Jl(e, t) {
  const n = U(e, t);
  return ne(n);
}
function st(e, t = {}) {
  const n = Kf.encode(e);
  return typeof t.size == "number" ? (Be(n, { size: t.size }), Ee(n, { dir: "right", size: t.size })) : n;
}
function Be(e, { size: t }) {
  if (X(e) > t)
    throw new Vl({
      givenSize: X(e),
      maxSize: t
    });
}
function ra(e, t) {
  const n = typeof t == "string" ? { to: t } : t, r = n.to;
  return r === "number" ? V(e, n) : r === "bigint" ? L(e, n) : r === "string" ? at(e, n) : r === "boolean" ? Xl(e, n) : ne(e, n);
}
function L(e, t = {}) {
  const { signed: n } = t;
  t.size && Be(e, { size: t.size });
  const r = BigInt(e);
  if (!n)
    return r;
  const s = (e.length - 2) / 2, o = (1n << BigInt(s) * 8n - 1n) - 1n;
  return r <= o ? r : r - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n;
}
function Xl(e, t = {}) {
  let n = e;
  if (t.size && (Be(n, { size: t.size }), n = se(n)), se(n) === "0x00")
    return !1;
  if (se(n) === "0x01")
    return !0;
  throw new Kl(n);
}
function V(e, t = {}) {
  return Number(L(e, t));
}
function at(e, t = {}) {
  let n = ne(e);
  return t.size && (Be(n, { size: t.size }), n = se(n, { dir: "right" })), new TextDecoder().decode(n);
}
const Qf = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function M(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? U(e, t) : typeof e == "string" ? Ke(e, t) : typeof e == "boolean" ? Os(e, t) : W(e, t);
}
function Os(e, t = {}) {
  const n = `0x${Number(e)}`;
  return typeof t.size == "number" ? (Be(n, { size: t.size }), Ee(n, { size: t.size })) : n;
}
function W(e, t = {}) {
  let n = "";
  for (let s = 0; s < e.length; s++)
    n += Qf[e[s]];
  const r = `0x${n}`;
  return typeof t.size == "number" ? (Be(r, { size: t.size }), Ee(r, { dir: "right", size: t.size })) : r;
}
function U(e, t = {}) {
  const { signed: n, size: r } = t, s = BigInt(e);
  let o;
  r ? n ? o = (1n << BigInt(r) * 8n - 1n) - 1n : o = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const a = typeof o == "bigint" && n ? -o - 1n : 0;
  if (o && s > o || s < a) {
    const c = typeof e == "bigint" ? "n" : "";
    throw new ql({
      max: o ? `${o}${c}` : void 0,
      min: `${a}${c}`,
      signed: n,
      size: r,
      value: `${e}${c}`
    });
  }
  const i = `0x${(n && s < 0 ? (1n << BigInt(r * 8)) + BigInt(s) : s).toString(16)}`;
  return r ? Ee(i, { size: r }) : i;
}
const Vf = /* @__PURE__ */ new TextEncoder();
function Ke(e, t = {}) {
  const n = Vf.encode(e);
  return W(n, t);
}
async function Wf(e, { chain: t }) {
  const { id: n, name: r, nativeCurrency: s, rpcUrls: o, blockExplorers: a } = t;
  await e.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: U(n),
        chainName: r,
        nativeCurrency: s,
        rpcUrls: o.default.http,
        blockExplorerUrls: a ? Object.values(a).map(({ url: i }) => i) : void 0
      }
    ]
  }, { dedupe: !0, retryCount: 0 });
}
function De(e, { includeName: t = !1 } = {}) {
  if (e.type !== "function" && e.type !== "event" && e.type !== "error")
    throw new iu(e.type);
  return `${e.name}(${Ls(e.inputs, { includeName: t })})`;
}
function Ls(e, { includeName: t = !1 } = {}) {
  return e ? e.map((n) => Zf(n, { includeName: t })).join(t ? ", " : ",") : "";
}
function Zf(e, { includeName: t }) {
  return e.type.startsWith("tuple") ? `(${Ls(e.components, { includeName: t })})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "");
}
class Da extends S {
  constructor({ docsPath: t }) {
    super([
      "A constructor was not found on the ABI.",
      "Make sure you are using the correct ABI and that the constructor exists on it."
    ].join(`
`), {
      docsPath: t,
      name: "AbiConstructorNotFoundError"
    });
  }
}
class Wn extends S {
  constructor({ docsPath: t }) {
    super([
      "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
      "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
    ].join(`
`), {
      docsPath: t,
      name: "AbiConstructorParamsNotFoundError"
    });
  }
}
class Jf extends S {
  constructor({ data: t, size: n }) {
    super([
      `Data size of ${n} bytes is invalid.`,
      "Size must be in increments of 32 bytes (size % 32 === 0)."
    ].join(`
`), {
      metaMessages: [`Data: ${t} (${n} bytes)`],
      name: "AbiDecodingDataSizeInvalidError"
    });
  }
}
class Ra extends S {
  constructor({ data: t, params: n, size: r }) {
    super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`), {
      metaMessages: [
        `Params: (${Ls(n, { includeName: !0 })})`,
        `Data:   ${t} (${r} bytes)`
      ],
      name: "AbiDecodingDataSizeTooSmallError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = t, this.params = n, this.size = r;
  }
}
class cr extends S {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.', {
      name: "AbiDecodingZeroDataError"
    });
  }
}
class Yl extends S {
  constructor({ expectedLength: t, givenLength: n, type: r }) {
    super([
      `ABI encoding array length mismatch for type ${r}.`,
      `Expected length: ${t}`,
      `Given length: ${n}`
    ].join(`
`), { name: "AbiEncodingArrayLengthMismatchError" });
  }
}
class eu extends S {
  constructor({ expectedSize: t, value: n }) {
    super(`Size of bytes "${n}" (bytes${X(n)}) does not match expected size (bytes${t}).`, { name: "AbiEncodingBytesSizeMismatchError" });
  }
}
class Oa extends S {
  constructor({ expectedLength: t, givenLength: n }) {
    super([
      "ABI encoding params/values length mismatch.",
      `Expected length (params): ${t}`,
      `Given length (values): ${n}`
    ].join(`
`), { name: "AbiEncodingLengthMismatchError" });
  }
}
class tu extends S {
  constructor(t, { docsPath: n }) {
    super([
      `Arguments (\`args\`) were provided to "${t}", but "${t}" on the ABI does not contain any parameters (\`inputs\`).`,
      "Cannot encode error result without knowing what the parameter types are.",
      "Make sure you are using the correct ABI and that the inputs exist on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiErrorInputsNotFoundError"
    });
  }
}
class sa extends S {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Error ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiErrorNotFoundError"
    });
  }
}
class La extends S {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded error signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiErrorSignatureNotFoundError"
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.signature = t;
  }
}
class nu extends S {
  constructor({ docsPath: t }) {
    super("Cannot extract event signature from empty topics.", {
      docsPath: t,
      name: "AbiEventSignatureEmptyTopicsError"
    });
  }
}
class za extends S {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded event signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it.",
      `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventSignatureNotFoundError"
    });
  }
}
class oa extends S {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Event ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventNotFoundError"
    });
  }
}
class Bt extends S {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Function ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionNotFoundError"
    });
  }
}
class _a extends S {
  constructor(t, { docsPath: n }) {
    super([
      `Function "${t}" does not contain any \`outputs\` on ABI.`,
      "Cannot decode function result without knowing what the parameter types are.",
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionOutputsNotFoundError"
    });
  }
}
class ru extends S {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded function signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the function exists on it.",
      `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionSignatureNotFoundError"
    });
  }
}
class Xf extends S {
  constructor(t, n) {
    super("Found ambiguous types in overloaded ABI items.", {
      metaMessages: [
        `\`${t.type}\` in \`${De(t.abiItem)}\`, and`,
        `\`${n.type}\` in \`${De(n.abiItem)}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ],
      name: "AbiItemAmbiguityError"
    });
  }
}
class Ha extends S {
  constructor({ expectedSize: t, givenSize: n }) {
    super(`Expected bytes${t}, got bytes${n}.`, {
      name: "BytesSizeMismatchError"
    });
  }
}
class sn extends S {
  constructor({ abiItem: t, data: n, params: r, size: s }) {
    super([
      `Data size of ${s} bytes is too small for non-indexed event parameters.`
    ].join(`
`), {
      metaMessages: [
        `Params: (${Ls(r, { includeName: !0 })})`,
        `Data:   ${n} (${s} bytes)`
      ],
      name: "DecodeLogDataMismatch"
    }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = t, this.data = n, this.params = r, this.size = s;
  }
}
class lr extends S {
  constructor({ abiItem: t, param: n }) {
    super([
      `Expected a topic for indexed event parameter${n.name ? ` "${n.name}"` : ""} on event "${De(t, { includeName: !0 })}".`
    ].join(`
`), { name: "DecodeLogTopicsMismatch" }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = t;
  }
}
class su extends S {
  constructor(t, { docsPath: n }) {
    super([
      `Type "${t}" is not a valid encoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiEncodingType" });
  }
}
class ou extends S {
  constructor(t, { docsPath: n }) {
    super([
      `Type "${t}" is not a valid decoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiDecodingType" });
  }
}
class au extends S {
  constructor(t) {
    super([`Value "${t}" is not a valid array.`].join(`
`), {
      name: "InvalidArrayError"
    });
  }
}
class iu extends S {
  constructor(t) {
    super([
      `"${t}" is not a valid definition type.`,
      'Valid types: "function", "event", "error"'
    ].join(`
`), { name: "InvalidDefinitionTypeError" });
  }
}
class cu extends S {
  constructor(t) {
    super(`Type "${t}" is not supported for packed encoding.`, {
      name: "UnsupportedPackedAbiType"
    });
  }
}
function ke(e) {
  return typeof e[0] == "string" ? ue(e) : lu(e);
}
function lu(e) {
  let t = 0;
  for (const s of e)
    t += s.length;
  const n = new Uint8Array(t);
  let r = 0;
  for (const s of e)
    n.set(s, r), r += s.length;
  return n;
}
function ue(e) {
  return `0x${e.reduce((t, n) => t + n.replace("0x", ""), "")}`;
}
class ee extends S {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart."
      ],
      name: "InvalidAddressError"
    });
  }
}
class zs extends Map {
  constructor(t) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = t;
  }
  get(t) {
    const n = super.get(t);
    return super.has(t) && n !== void 0 && (this.delete(t), super.set(t, n)), n;
  }
  set(t, n) {
    if (super.set(t, n), this.maxSize && this.size > this.maxSize) {
      const r = this.keys().next().value;
      r && this.delete(r);
    }
    return this;
  }
}
function ds(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
function Yf(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function ur(e, ...t) {
  if (!Yf(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function eh(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  ds(e.outputLen), ds(e.blockLen);
}
function on(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function uu(e, t) {
  ur(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const Br = /* @__PURE__ */ BigInt(2 ** 32 - 1), Ec = /* @__PURE__ */ BigInt(32);
function th(e, t = !1) {
  return t ? { h: Number(e & Br), l: Number(e >> Ec & Br) } : { h: Number(e >> Ec & Br) | 0, l: Number(e & Br) | 0 };
}
function nh(e, t = !1) {
  let n = new Uint32Array(e.length), r = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: o, l: a } = th(e[s], t);
    [n[s], r[s]] = [o, a];
  }
  return [n, r];
}
const rh = (e, t, n) => e << n | t >>> 32 - n, sh = (e, t, n) => t << n | e >>> 32 - n, oh = (e, t, n) => t << n - 32 | e >>> 64 - n, ah = (e, t, n) => e << n - 32 | t >>> 64 - n, So = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ih = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), Bo = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), Re = (e, t) => e << 32 - t | e >>> t, Tr = (e, t) => e << t | e >>> 32 - t >>> 0, kc = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, ch = (e) => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
function Ic(e) {
  for (let t = 0; t < e.length; t++)
    e[t] = ch(e[t]);
}
function lh(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function _s(e) {
  return typeof e == "string" && (e = lh(e)), ur(e), e;
}
function uh(...e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    ur(s), t += s.length;
  }
  const n = new Uint8Array(t);
  for (let r = 0, s = 0; r < e.length; r++) {
    const o = e[r];
    n.set(o, s), s += o.length;
  }
  return n;
}
class $a {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function ja(e) {
  const t = (r) => e().update(_s(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function dh(e = 32) {
  if (So && typeof So.getRandomValues == "function")
    return So.getRandomValues(new Uint8Array(e));
  throw new Error("crypto.getRandomValues must be defined");
}
const du = [], pu = [], fu = [], ph = /* @__PURE__ */ BigInt(0), On = /* @__PURE__ */ BigInt(1), fh = /* @__PURE__ */ BigInt(2), hh = /* @__PURE__ */ BigInt(7), mh = /* @__PURE__ */ BigInt(256), bh = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = On, n = 1, r = 0; e < 24; e++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], du.push(2 * (5 * r + n)), pu.push((e + 1) * (e + 2) / 2 % 64);
  let s = ph;
  for (let o = 0; o < 7; o++)
    t = (t << On ^ (t >> hh) * bh) % mh, t & fh && (s ^= On << (On << /* @__PURE__ */ BigInt(o)) - On);
  fu.push(s);
}
const [yh, wh] = /* @__PURE__ */ nh(fu, !0), Sc = (e, t, n) => n > 32 ? oh(e, t, n) : rh(e, t, n), Bc = (e, t, n) => n > 32 ? ah(e, t, n) : sh(e, t, n);
function gh(e, t = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let a = 0; a < 10; a++)
      n[a] = e[a] ^ e[a + 10] ^ e[a + 20] ^ e[a + 30] ^ e[a + 40];
    for (let a = 0; a < 10; a += 2) {
      const i = (a + 8) % 10, c = (a + 2) % 10, l = n[c], u = n[c + 1], d = Sc(l, u, 1) ^ n[i], p = Bc(l, u, 1) ^ n[i + 1];
      for (let f = 0; f < 50; f += 10)
        e[a + f] ^= d, e[a + f + 1] ^= p;
    }
    let s = e[2], o = e[3];
    for (let a = 0; a < 24; a++) {
      const i = pu[a], c = Sc(s, o, i), l = Bc(s, o, i), u = du[a];
      s = e[u], o = e[u + 1], e[u] = c, e[u + 1] = l;
    }
    for (let a = 0; a < 50; a += 10) {
      for (let i = 0; i < 10; i++)
        n[i] = e[a + i];
      for (let i = 0; i < 10; i++)
        e[a + i] ^= ~n[(i + 2) % 10] & n[(i + 4) % 10];
    }
    e[0] ^= yh[r], e[1] ^= wh[r];
  }
  n.fill(0);
}
class qa extends $a {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, n, r, s = !1, o = 24) {
    if (super(), this.blockLen = t, this.suffix = n, this.outputLen = r, this.enableXOF = s, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, ds(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = ih(this.state);
  }
  keccak() {
    kc || Ic(this.state32), gh(this.state32, this.rounds), kc || Ic(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    on(this);
    const { blockLen: n, state: r } = this;
    t = _s(t);
    const s = t.length;
    for (let o = 0; o < s; ) {
      const a = Math.min(n - this.pos, s - o);
      for (let i = 0; i < a; i++)
        r[this.pos++] ^= t[o++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: n, pos: r, blockLen: s } = this;
    t[r] ^= n, n & 128 && r === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    on(this, !1), ur(t), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let s = 0, o = t.length; s < o; ) {
      this.posOut >= r && this.keccak();
      const a = Math.min(r - this.posOut, o - s);
      t.set(n.subarray(this.posOut, this.posOut + a), s), this.posOut += a, s += a;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return ds(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (uu(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: n, suffix: r, outputLen: s, rounds: o, enableXOF: a } = this;
    return t || (t = new qa(n, r, s, a, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = r, t.outputLen = s, t.enableXOF = a, t.destroyed = this.destroyed, t;
  }
}
const xh = (e, t, n) => ja(() => new qa(t, e, n)), Ch = /* @__PURE__ */ xh(1, 136, 256 / 8);
function Y(e, t) {
  const n = t || "hex", r = Ch(_(e, { strict: !1 }) ? oe(e) : e);
  return n === "bytes" ? r : M(r);
}
const To = /* @__PURE__ */ new zs(8192);
function An(e, t) {
  if (To.has(`${e}.${t}`))
    return To.get(`${e}.${t}`);
  const n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(), r = Y(st(n), "bytes"), s = (t ? n.substring(`${t}0x`.length) : n).split("");
  for (let a = 0; a < 40; a += 2)
    r[a >> 1] >> 4 >= 8 && s[a] && (s[a] = s[a].toUpperCase()), (r[a >> 1] & 15) >= 8 && s[a + 1] && (s[a + 1] = s[a + 1].toUpperCase());
  const o = `0x${s.join("")}`;
  return To.set(`${e}.${t}`, o), o;
}
function H(e, t) {
  if (!Z(e, { strict: !1 }))
    throw new ee({ address: e });
  return An(e, t);
}
const Ah = /^0x[a-fA-F0-9]{40}$/, Uo = /* @__PURE__ */ new zs(8192);
function Z(e, t) {
  const { strict: n = !0 } = t ?? {}, r = `${e}.${n}`;
  if (Uo.has(r))
    return Uo.get(r);
  const s = Ah.test(e) ? e.toLowerCase() === e ? !0 : n ? An(e) === e : !0 : !1;
  return Uo.set(r, s), s;
}
function Qe(e, t, n, { strict: r } = {}) {
  return _(e, { strict: !1 }) ? Hs(e, t, n, {
    strict: r
  }) : Ga(e, t, n, {
    strict: r
  });
}
function hu(e, t) {
  if (typeof t == "number" && t > 0 && t > X(e) - 1)
    throw new Ma({
      offset: t,
      position: "start",
      size: X(e)
    });
}
function mu(e, t, n) {
  if (typeof t == "number" && typeof n == "number" && X(e) !== n - t)
    throw new Ma({
      offset: n,
      position: "end",
      size: X(e)
    });
}
function Ga(e, t, n, { strict: r } = {}) {
  hu(e, t);
  const s = e.slice(t, n);
  return r && mu(s, t, n), s;
}
function Hs(e, t, n, { strict: r } = {}) {
  hu(e, t);
  const s = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return r && mu(s, t, n), s;
}
function ze(e, t) {
  if (e.length !== t.length)
    throw new Oa({
      expectedLength: e.length,
      givenLength: t.length
    });
  const n = vh({
    params: e,
    values: t
  }), r = Qa(n);
  return r.length === 0 ? "0x" : r;
}
function vh({ params: e, values: t }) {
  const n = [];
  for (let r = 0; r < e.length; r++)
    n.push(Ka({ param: e[r], value: t[r] }));
  return n;
}
function Ka({ param: e, value: t }) {
  const n = Va(e.type);
  if (n) {
    const [r, s] = n;
    return kh(t, { length: r, param: { ...e, type: s } });
  }
  if (e.type === "tuple")
    return Uh(t, {
      param: e
    });
  if (e.type === "address")
    return Eh(t);
  if (e.type === "bool")
    return Sh(t);
  if (e.type.startsWith("uint") || e.type.startsWith("int")) {
    const r = e.type.startsWith("int");
    return Bh(t, { signed: r });
  }
  if (e.type.startsWith("bytes"))
    return Ih(t, { param: e });
  if (e.type === "string")
    return Th(t);
  throw new su(e.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function Qa(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: a, encoded: i } = e[o];
    a ? t += 32 : t += X(i);
  }
  const n = [], r = [];
  let s = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: a, encoded: i } = e[o];
    a ? (n.push(U(t + s, { size: 32 })), r.push(i), s += X(i)) : n.push(i);
  }
  return ke([...n, ...r]);
}
function Eh(e) {
  if (!Z(e))
    throw new ee({ address: e });
  return { dynamic: !1, encoded: Me(e.toLowerCase()) };
}
function kh(e, { length: t, param: n }) {
  const r = t === null;
  if (!Array.isArray(e))
    throw new au(e);
  if (!r && e.length !== t)
    throw new Yl({
      expectedLength: t,
      givenLength: e.length,
      type: `${n.type}[${t}]`
    });
  let s = !1;
  const o = [];
  for (let a = 0; a < e.length; a++) {
    const i = Ka({ param: n, value: e[a] });
    i.dynamic && (s = !0), o.push(i);
  }
  if (r || s) {
    const a = Qa(o);
    if (r) {
      const i = U(o.length, { size: 32 });
      return {
        dynamic: !0,
        encoded: o.length > 0 ? ke([i, a]) : i
      };
    }
    if (s)
      return { dynamic: !0, encoded: a };
  }
  return {
    dynamic: !1,
    encoded: ke(o.map(({ encoded: a }) => a))
  };
}
function Ih(e, { param: t }) {
  const [, n] = t.type.split("bytes"), r = X(e);
  if (!n) {
    let s = e;
    return r % 32 !== 0 && (s = Me(s, {
      dir: "right",
      size: Math.ceil((e.length - 2) / 2 / 32) * 32
    })), {
      dynamic: !0,
      encoded: ke([Me(U(r, { size: 32 })), s])
    };
  }
  if (r !== Number.parseInt(n))
    throw new eu({
      expectedSize: Number.parseInt(n),
      value: e
    });
  return { dynamic: !1, encoded: Me(e, { dir: "right" }) };
}
function Sh(e) {
  if (typeof e != "boolean")
    throw new S(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
  return { dynamic: !1, encoded: Me(Os(e)) };
}
function Bh(e, { signed: t }) {
  return {
    dynamic: !1,
    encoded: U(e, {
      size: 32,
      signed: t
    })
  };
}
function Th(e) {
  const t = Ke(e), n = Math.ceil(X(t) / 32), r = [];
  for (let s = 0; s < n; s++)
    r.push(Me(Qe(t, s * 32, (s + 1) * 32), {
      dir: "right"
    }));
  return {
    dynamic: !0,
    encoded: ke([
      Me(U(X(t), { size: 32 })),
      ...r
    ])
  };
}
function Uh(e, { param: t }) {
  let n = !1;
  const r = [];
  for (let s = 0; s < t.components.length; s++) {
    const o = t.components[s], a = Array.isArray(e) ? s : o.name, i = Ka({
      param: o,
      value: e[a]
    });
    r.push(i), i.dynamic && (n = !0);
  }
  return {
    dynamic: n,
    encoded: n ? Qa(r) : ke(r.map(({ encoded: s }) => s))
  };
}
function Va(e) {
  const t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? (
    // Return `null` if the array is dynamic.
    [t[2] ? Number(t[2]) : null, t[1]]
  ) : void 0;
}
const Po = "/docs/contract/encodeDeployData";
function dr(e) {
  const { abi: t, args: n, bytecode: r } = e;
  if (!n || n.length === 0)
    return r;
  const s = t.find((a) => "type" in a && a.type === "constructor");
  if (!s)
    throw new Da({ docsPath: Po });
  if (!("inputs" in s))
    throw new Wn({ docsPath: Po });
  if (!s.inputs || s.inputs.length === 0)
    throw new Wn({ docsPath: Po });
  const o = ze(s.inputs, n);
  return ue([r, o]);
}
function de(e) {
  return typeof e == "string" ? { address: e, type: "json-rpc" } : e;
}
class vn extends S {
  constructor({ docsPath: t } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."
    ].join(`
`), {
      docsPath: t,
      docsSlug: "account",
      name: "AccountNotFoundError"
    });
  }
}
class No extends S {
  constructor({ docsPath: t, metaMessages: n, type: r }) {
    super(`Account type "${r}" is not supported.`, {
      docsPath: t,
      metaMessages: n,
      name: "AccountTypeNotSupportedError"
    });
  }
}
function Ph(e) {
  const t = Y(`0x${e.substring(4)}`).substring(26);
  return An(`0x${t}`);
}
async function bu({ hash: e, signature: t }) {
  const n = _(e) ? e : M(e), { secp256k1: r } = await Promise.resolve().then(() => Uw);
  return `0x${(() => {
    if (typeof t == "object" && "r" in t && "s" in t) {
      const { r: l, s: u, v: d, yParity: p } = t, f = Number(p ?? d), m = Tc(f);
      return new r.Signature(L(l), L(u)).addRecoveryBit(m);
    }
    const a = _(t) ? t : M(t), i = V(`0x${a.slice(130)}`), c = Tc(i);
    return r.Signature.fromCompact(a.substring(2, 130)).addRecoveryBit(c);
  })().recoverPublicKey(n.substring(2)).toHex(!1)}`;
}
function Tc(e) {
  if (e === 0 || e === 1)
    return e;
  if (e === 27)
    return 0;
  if (e === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}
async function Ot({ hash: e, signature: t }) {
  return Ph(await bu({ hash: e, signature: t }));
}
class Uc extends S {
  constructor({ offset: t }) {
    super(`Offset \`${t}\` cannot be negative.`, {
      name: "NegativeOffsetError"
    });
  }
}
class yu extends S {
  constructor({ length: t, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`, { name: "PositionOutOfBoundsError" });
  }
}
class Nh extends S {
  constructor({ count: t, limit: n }) {
    super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`, { name: "RecursiveReadLimitExceededError" });
  }
}
const Mh = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new Nh({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new yu({
        length: this.bytes.length,
        position: e
      });
  },
  decrementPosition(e) {
    if (e < 0)
      throw new Uc({ offset: e });
    const t = this.position - e;
    this.assertPosition(t), this.position = t;
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0;
  },
  incrementPosition(e) {
    if (e < 0)
      throw new Uc({ offset: e });
    const t = this.position + e;
    this.assertPosition(t), this.position = t;
  },
  inspectByte(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    const n = t ?? this.position;
    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
  },
  inspectUint8(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2);
  },
  inspectUint32(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length;
  },
  pushUint8(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2;
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3;
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4;
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e, t) {
    this.assertReadLimit(), this._touch();
    const n = this.inspectBytes(e);
    return this.position += t ?? e, n;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint8();
    return this.position += 1, e;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint16();
    return this.position += 2, e;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint24();
    return this.position += 3, e;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint32();
    return this.position += 4, e;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(e) {
    const t = this.position;
    return this.assertPosition(e), this.position = e, () => this.position = t;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const e = this.getReadCount();
    this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++;
  }
};
function an(e, { recursiveReadLimit: t = 8192 } = {}) {
  const n = Object.create(Mh);
  return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = /* @__PURE__ */ new Map(), n.recursiveReadLimit = t, n;
}
function we(e, t = "hex") {
  const n = wu(e), r = an(new Uint8Array(n.length));
  return n.encode(r), t === "hex" ? W(r.bytes) : r.bytes;
}
function Fh(e, t = "bytes") {
  return we(e, t);
}
function Dh(e, t = "hex") {
  return we(e, t);
}
function wu(e) {
  return Array.isArray(e) ? Rh(e.map((t) => wu(t))) : Oh(e);
}
function Rh(e) {
  const t = e.reduce((s, o) => s + o.length, 0), n = gu(t);
  return {
    length: t <= 55 ? 1 + t : 1 + n + t,
    encode(s) {
      t <= 55 ? s.pushByte(192 + t) : (s.pushByte(247 + n), n === 1 ? s.pushUint8(t) : n === 2 ? s.pushUint16(t) : n === 3 ? s.pushUint24(t) : s.pushUint32(t));
      for (const { encode: o } of e)
        o(s);
    }
  };
}
function Oh(e) {
  const t = typeof e == "string" ? ne(e) : e, n = gu(t.length);
  return {
    length: t.length === 1 && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + n + t.length,
    encode(s) {
      t.length === 1 && t[0] < 128 ? s.pushBytes(t) : t.length <= 55 ? (s.pushByte(128 + t.length), s.pushBytes(t)) : (s.pushByte(183 + n), n === 1 ? s.pushUint8(t.length) : n === 2 ? s.pushUint16(t.length) : n === 3 ? s.pushUint24(t.length) : s.pushUint32(t.length), s.pushBytes(t));
    }
  };
}
function gu(e) {
  if (e < 2 ** 8)
    return 1;
  if (e < 2 ** 16)
    return 2;
  if (e < 2 ** 24)
    return 3;
  if (e < 2 ** 32)
    return 4;
  throw new S("Length is too large.");
}
function Lh(e) {
  const { chainId: t, contractAddress: n, nonce: r, to: s } = e, o = Y(ue([
    "0x05",
    we([U(t), n, U(r)])
  ]));
  return s === "bytes" ? ne(o) : o;
}
async function xu(e) {
  const { authorization: t, signature: n } = e;
  return Ot({
    hash: Lh(t),
    signature: n ?? t
  });
}
class ps extends S {
  constructor({ blockNumber: t, chain: n, contract: r }) {
    super(`Chain "${n.name}" does not support contract "${r.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...t && r.blockCreated && r.blockCreated > t ? [
          `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`
        ] : [
          `- The chain does not have the contract "${r.name}" configured.`
        ]
      ],
      name: "ChainDoesNotSupportContract"
    });
  }
}
class Cu extends S {
  constructor({ chain: t, currentChainId: n }) {
    super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`, {
      metaMessages: [
        `Current Chain ID:  ${n}`,
        `Expected Chain ID: ${t.id} – ${t.name}`
      ],
      name: "ChainMismatchError"
    });
  }
}
class Au extends S {
  constructor() {
    super([
      "No chain was provided to the request.",
      "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
    ].join(`
`), {
      name: "ChainNotFoundError"
    });
  }
}
class Wa extends S {
  constructor() {
    super("No chain was provided to the Client.", {
      name: "ClientChainNotConfiguredError"
    });
  }
}
class Lt extends S {
  constructor({ chainId: t }) {
    super(typeof t == "number" ? `Chain ID "${t}" is invalid.` : "Chain ID is invalid.", { name: "InvalidChainIdError" });
  }
}
function Za({ chain: e, currentChainId: t }) {
  if (!e)
    throw new Au();
  if (t !== e.id)
    throw new Cu({ chain: e, currentChainId: t });
}
const Ja = {
  gwei: 9,
  wei: 18
}, Xa = {
  ether: -9,
  wei: 9
}, Ya = {
  ether: -18,
  gwei: -9
};
function Ce(e, t) {
  let n = e.toString();
  const r = n.startsWith("-");
  r && (n = n.slice(1)), n = n.padStart(t, "0");
  let [s, o] = [
    n.slice(0, n.length - t),
    n.slice(n.length - t)
  ];
  return o = o.replace(/(0+)$/, ""), `${r ? "-" : ""}${s || "0"}${o ? `.${o}` : ""}`;
}
function pe(e, t = "wei") {
  return Ce(e, Xa[t]);
}
class vt extends S {
  constructor({ cause: t, message: n } = {}) {
    var s;
    const r = (s = n == null ? void 0 : n.replace("execution reverted: ", "")) == null ? void 0 : s.replace("execution reverted", "");
    super(`Execution reverted ${r ? `with reason: ${r}` : "for an unknown reason"}.`, {
      cause: t,
      name: "ExecutionRevertedError"
    });
  }
}
Object.defineProperty(vt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3
});
Object.defineProperty(vt, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/
});
class Ve extends S {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${pe(n)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
      cause: t,
      name: "FeeCapTooHighError"
    });
  }
}
Object.defineProperty(Ve, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class fs extends S {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${pe(n)}` : ""} gwei) cannot be lower than the block base fee.`, {
      cause: t,
      name: "FeeCapTooLowError"
    });
  }
}
Object.defineProperty(fs, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class hs extends S {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is higher than the next one expected.`, { cause: t, name: "NonceTooHighError" });
  }
}
Object.defineProperty(hs, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/
});
class ms extends S {
  constructor({ cause: t, nonce: n } = {}) {
    super([
      `Nonce provided for the transaction ${n ? `(${n}) ` : ""}is lower than the current nonce of the account.`,
      "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
    ].join(`
`), { cause: t, name: "NonceTooLowError" });
  }
}
Object.defineProperty(ms, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/
});
class bs extends S {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}exceeds the maximum allowed nonce.`, { cause: t, name: "NonceMaxValueError" });
  }
}
Object.defineProperty(bs, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/
});
class ys extends S {
  constructor({ cause: t } = {}) {
    super([
      "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
    ].join(`
`), {
      cause: t,
      metaMessages: [
        "This error could arise when the account does not have enough funds to:",
        " - pay for the total gas fee,",
        " - pay for the value to send.",
        " ",
        "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
        " - `gas` is the amount of gas needed for transaction to execute,",
        " - `gas fee` is the gas fee,",
        " - `value` is the amount of ether to send to the recipient."
      ],
      name: "InsufficientFundsError"
    });
  }
}
Object.defineProperty(ys, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds|exceeds transaction sender account balance/
});
class ws extends S {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
      cause: t,
      name: "IntrinsicGasTooHighError"
    });
  }
}
Object.defineProperty(ws, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/
});
class gs extends S {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction is too low.`, {
      cause: t,
      name: "IntrinsicGasTooLowError"
    });
  }
}
Object.defineProperty(gs, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/
});
class xs extends S {
  constructor({ cause: t }) {
    super("The transaction type is not supported for this chain.", {
      cause: t,
      name: "TransactionTypeNotSupportedError"
    });
  }
}
Object.defineProperty(xs, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/
});
class Tt extends S {
  constructor({ cause: t, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${n ? ` = ${pe(n)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${pe(r)} gwei` : ""}).`
    ].join(`
`), {
      cause: t,
      name: "TipAboveFeeCapError"
    });
  }
}
Object.defineProperty(Tt, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class pr extends S {
  constructor({ cause: t }) {
    super(`An error occurred while executing: ${t == null ? void 0 : t.shortMessage}`, {
      cause: t,
      name: "UnknownNodeError"
    });
  }
}
function $s(e, t = "wei") {
  return Ce(e, Ja[t]);
}
function fr(e) {
  const t = Object.entries(e).map(([r, s]) => s === void 0 || s === !1 ? null : [r, s]).filter(Boolean), n = t.reduce((r, [s]) => Math.max(r, s.length), 0);
  return t.map(([r, s]) => `  ${`${r}:`.padEnd(n + 1)}  ${s}`).join(`
`);
}
class vu extends S {
  constructor() {
    super([
      "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
      "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
    ].join(`
`), { name: "FeeConflictError" });
  }
}
class ei extends S {
  constructor({ v: t }) {
    super(`Invalid \`v\` value "${t}". Expected 27 or 28.`, {
      name: "InvalidLegacyVError"
    });
  }
}
class Eu extends S {
  constructor({ transaction: t }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        fr(t),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
        "- an EIP-7702 Transaction with `authorizationList`, or",
        "- a Legacy Transaction with `gasPrice`"
      ],
      name: "InvalidSerializableTransactionError"
    });
  }
}
class ku extends S {
  constructor({ serializedType: t }) {
    super(`Serialized transaction type "${t}" is invalid.`, {
      name: "InvalidSerializedTransactionType"
    }), Object.defineProperty(this, "serializedType", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.serializedType = t;
  }
}
class En extends S {
  constructor({ attributes: t, serializedTransaction: n, type: r }) {
    const s = Object.entries(t).map(([o, a]) => typeof a > "u" ? o : void 0).filter(Boolean);
    super(`Invalid serialized transaction of type "${r}" was provided.`, {
      metaMessages: [
        `Serialized Transaction: "${n}"`,
        s.length > 0 ? `Missing Attributes: ${s.join(", ")}` : ""
      ].filter(Boolean),
      name: "InvalidSerializedTransactionError"
    }), Object.defineProperty(this, "serializedTransaction", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "type", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.serializedTransaction = n, this.type = r;
  }
}
class Iu extends S {
  constructor({ storageKey: t }) {
    super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length - 2) / 2)} bytes.`, { name: "InvalidStorageKeySizeError" });
  }
}
class Su extends S {
  constructor(t, { account: n, docsPath: r, chain: s, data: o, gas: a, gasPrice: i, maxFeePerGas: c, maxPriorityFeePerGas: l, nonce: u, to: d, value: p }) {
    var m;
    const f = fr({
      chain: s && `${s == null ? void 0 : s.name} (id: ${s == null ? void 0 : s.id})`,
      from: n == null ? void 0 : n.address,
      to: d,
      value: typeof p < "u" && `${$s(p)} ${((m = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : m.symbol) || "ETH"}`,
      data: o,
      gas: a,
      gasPrice: typeof i < "u" && `${pe(i)} gwei`,
      maxFeePerGas: typeof c < "u" && `${pe(c)} gwei`,
      maxPriorityFeePerGas: typeof l < "u" && `${pe(l)} gwei`,
      nonce: u
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Request Arguments:",
        f
      ].filter(Boolean),
      name: "TransactionExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = t;
  }
}
class ti extends S {
  constructor({ blockHash: t, blockNumber: n, blockTag: r, hash: s, index: o }) {
    let a = "Transaction";
    r && o !== void 0 && (a = `Transaction at block time "${r}" at index "${o}"`), t && o !== void 0 && (a = `Transaction at block hash "${t}" at index "${o}"`), n && o !== void 0 && (a = `Transaction at block number "${n}" at index "${o}"`), s && (a = `Transaction with hash "${s}"`), super(`${a} could not be found.`, {
      name: "TransactionNotFoundError"
    });
  }
}
class ni extends S {
  constructor({ hash: t }) {
    super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`, {
      name: "TransactionReceiptNotFoundError"
    });
  }
}
class aa extends S {
  constructor({ hash: t }) {
    super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`, { name: "WaitForTransactionReceiptTimeoutError" });
  }
}
const re = (e, t, n) => JSON.stringify(e, (r, s) => {
  const o = typeof s == "bigint" ? s.toString() : s;
  return typeof t == "function" ? t(r, o) : o;
}, n), zh = (e) => e, zt = (e) => e;
class ot extends S {
  constructor({ body: t, cause: n, details: r, headers: s, status: o, url: a }) {
    super("HTTP request failed.", {
      cause: n,
      details: r,
      metaMessages: [
        o && `Status: ${o}`,
        `URL: ${zt(a)}`,
        t && `Request body: ${re(t)}`
      ].filter(Boolean),
      name: "HttpRequestError"
    }), Object.defineProperty(this, "body", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "headers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "status", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.body = t, this.headers = s, this.status = o, this.url = a;
  }
}
class ia extends S {
  constructor({ body: t, cause: n, details: r, url: s }) {
    super("WebSocket request failed.", {
      cause: n,
      details: r,
      metaMessages: [
        `URL: ${zt(s)}`,
        t && `Request body: ${re(t)}`
      ].filter(Boolean),
      name: "WebSocketRequestError"
    });
  }
}
class It extends S {
  constructor({ body: t, error: n, url: r }) {
    super("RPC Request failed.", {
      cause: n,
      details: n.message,
      metaMessages: [`URL: ${zt(r)}`, `Request body: ${re(t)}`],
      name: "RpcRequestError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.code = n.code;
  }
}
class Zn extends S {
  constructor({ url: t } = {}) {
    super("The socket has been closed.", {
      metaMessages: [t && `URL: ${zt(t)}`].filter(Boolean),
      name: "SocketClosedError"
    });
  }
}
class Cs extends S {
  constructor({ body: t, url: n }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${zt(n)}`, `Request body: ${re(t)}`],
      name: "TimeoutError"
    });
  }
}
const _h = -1;
class fe extends S {
  constructor(t, { code: n, docsPath: r, metaMessages: s, name: o, shortMessage: a }) {
    super(a, {
      cause: t,
      docsPath: r,
      metaMessages: s || (t == null ? void 0 : t.metaMessages),
      name: o || "RpcError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = o || t.name, this.code = t instanceof It ? t.code : n ?? _h;
  }
}
let _t = class extends fe {
  constructor(t, n) {
    super(t, n), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = n.data;
  }
};
class cn extends fe {
  constructor(t) {
    super(t, {
      code: cn.code,
      name: "ParseRpcError",
      shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    });
  }
}
Object.defineProperty(cn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700
});
class ln extends fe {
  constructor(t) {
    super(t, {
      code: ln.code,
      name: "InvalidRequestRpcError",
      shortMessage: "JSON is not a valid request object."
    });
  }
}
Object.defineProperty(ln, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600
});
class un extends fe {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: un.code,
      name: "MethodNotFoundRpcError",
      shortMessage: `The method${n ? ` "${n}"` : ""} does not exist / is not available.`
    });
  }
}
Object.defineProperty(un, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601
});
class dn extends fe {
  constructor(t) {
    super(t, {
      code: dn.code,
      name: "InvalidParamsRpcError",
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(dn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602
});
class it extends fe {
  constructor(t) {
    super(t, {
      code: it.code,
      name: "InternalRpcError",
      shortMessage: "An internal error was received."
    });
  }
}
Object.defineProperty(it, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603
});
class ct extends fe {
  constructor(t) {
    super(t, {
      code: ct.code,
      name: "InvalidInputRpcError",
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(ct, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3
});
class pn extends fe {
  constructor(t) {
    super(t, {
      code: pn.code,
      name: "ResourceNotFoundRpcError",
      shortMessage: "Requested resource not found."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceNotFoundRpcError"
    });
  }
}
Object.defineProperty(pn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001
});
class ye extends fe {
  constructor(t) {
    super(t, {
      code: ye.code,
      name: "ResourceUnavailableRpcError",
      shortMessage: "Requested resource not available."
    });
  }
}
Object.defineProperty(ye, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002
});
class Ut extends fe {
  constructor(t) {
    super(t, {
      code: Ut.code,
      name: "TransactionRejectedRpcError",
      shortMessage: "Transaction creation failed."
    });
  }
}
Object.defineProperty(Ut, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003
});
class fn extends fe {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: fn.code,
      name: "MethodNotSupportedRpcError",
      shortMessage: `Method${n ? ` "${n}"` : ""} is not implemented.`
    });
  }
}
Object.defineProperty(fn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004
});
class Pt extends fe {
  constructor(t) {
    super(t, {
      code: Pt.code,
      name: "LimitExceededRpcError",
      shortMessage: "Request exceeds defined limit."
    });
  }
}
Object.defineProperty(Pt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005
});
class hn extends fe {
  constructor(t) {
    super(t, {
      code: hn.code,
      name: "JsonRpcVersionUnsupportedError",
      shortMessage: "Version of JSON-RPC protocol is not supported."
    });
  }
}
Object.defineProperty(hn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006
});
class D extends _t {
  constructor(t) {
    super(t, {
      code: D.code,
      name: "UserRejectedRequestError",
      shortMessage: "User rejected the request."
    });
  }
}
Object.defineProperty(D, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001
});
class mn extends _t {
  constructor(t) {
    super(t, {
      code: mn.code,
      name: "UnauthorizedProviderError",
      shortMessage: "The requested method and/or account has not been authorized by the user."
    });
  }
}
Object.defineProperty(mn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100
});
class bn extends _t {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: bn.code,
      name: "UnsupportedProviderMethodError",
      shortMessage: `The Provider does not support the requested method${n ? ` " ${n}"` : ""}.`
    });
  }
}
Object.defineProperty(bn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200
});
class lt extends _t {
  constructor(t) {
    super(t, {
      code: lt.code,
      name: "ProviderDisconnectedError",
      shortMessage: "The Provider is disconnected from all chains."
    });
  }
}
Object.defineProperty(lt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900
});
class Nt extends _t {
  constructor(t) {
    super(t, {
      code: Nt.code,
      name: "ChainDisconnectedError",
      shortMessage: "The Provider is not connected to the requested chain."
    });
  }
}
Object.defineProperty(Nt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901
});
class J extends _t {
  constructor(t) {
    super(t, {
      code: J.code,
      name: "SwitchChainError",
      shortMessage: "An error occurred when attempting to switch chain."
    });
  }
}
Object.defineProperty(J, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902
});
class Bu extends fe {
  constructor(t) {
    super(t, {
      name: "UnknownRpcError",
      shortMessage: "An unknown RPC error occurred."
    });
  }
}
function ri(e, t) {
  const n = (e.details || "").toLowerCase(), r = e instanceof S ? e.walk((s) => s.code === vt.code) : e;
  return r instanceof S ? new vt({
    cause: e,
    message: r.details
  }) : vt.nodeMessage.test(n) ? new vt({
    cause: e,
    message: e.details
  }) : Ve.nodeMessage.test(n) ? new Ve({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : fs.nodeMessage.test(n) ? new fs({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : hs.nodeMessage.test(n) ? new hs({ cause: e, nonce: t == null ? void 0 : t.nonce }) : ms.nodeMessage.test(n) ? new ms({ cause: e, nonce: t == null ? void 0 : t.nonce }) : bs.nodeMessage.test(n) ? new bs({ cause: e, nonce: t == null ? void 0 : t.nonce }) : ys.nodeMessage.test(n) ? new ys({ cause: e }) : ws.nodeMessage.test(n) ? new ws({ cause: e, gas: t == null ? void 0 : t.gas }) : gs.nodeMessage.test(n) ? new gs({ cause: e, gas: t == null ? void 0 : t.gas }) : xs.nodeMessage.test(n) ? new xs({ cause: e }) : Tt.nodeMessage.test(n) ? new Tt({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
    maxPriorityFeePerGas: t == null ? void 0 : t.maxPriorityFeePerGas
  }) : new pr({
    cause: e
  });
}
function Hh(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = ri(e, n);
    return s instanceof pr ? e : s;
  })();
  return new Su(r, {
    docsPath: t,
    ...n
  });
}
function hr(e, { format: t }) {
  if (!t)
    return {};
  const n = {};
  function r(o) {
    const a = Object.keys(o);
    for (const i of a)
      i in e && (n[i] = e[i]), o[i] && typeof o[i] == "object" && !Array.isArray(o[i]) && r(o[i]);
  }
  const s = t(e || {});
  return r(s), n;
}
function js(e, t) {
  return ({ exclude: n, format: r }) => ({
    exclude: n,
    format: (s) => {
      const o = t(s);
      if (n)
        for (const a of n)
          delete o[a];
      return {
        ...o,
        ...r(s)
      };
    },
    type: e
  });
}
const Tu = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4"
};
function ft(e) {
  const t = {};
  return typeof e.authorizationList < "u" && (t.authorizationList = $h(e.authorizationList)), typeof e.accessList < "u" && (t.accessList = e.accessList), typeof e.blobVersionedHashes < "u" && (t.blobVersionedHashes = e.blobVersionedHashes), typeof e.blobs < "u" && (typeof e.blobs[0] != "string" ? t.blobs = e.blobs.map((n) => W(n)) : t.blobs = e.blobs), typeof e.data < "u" && (t.data = e.data), typeof e.from < "u" && (t.from = e.from), typeof e.gas < "u" && (t.gas = U(e.gas)), typeof e.gasPrice < "u" && (t.gasPrice = U(e.gasPrice)), typeof e.maxFeePerBlobGas < "u" && (t.maxFeePerBlobGas = U(e.maxFeePerBlobGas)), typeof e.maxFeePerGas < "u" && (t.maxFeePerGas = U(e.maxFeePerGas)), typeof e.maxPriorityFeePerGas < "u" && (t.maxPriorityFeePerGas = U(e.maxPriorityFeePerGas)), typeof e.nonce < "u" && (t.nonce = U(e.nonce)), typeof e.to < "u" && (t.to = e.to), typeof e.type < "u" && (t.type = Tu[e.type]), typeof e.value < "u" && (t.value = U(e.value)), t;
}
const si = /* @__PURE__ */ js("transactionRequest", ft);
function $h(e) {
  return e.map((t) => ({
    address: t.contractAddress,
    r: t.r,
    s: t.s,
    chainId: U(t.chainId),
    nonce: U(t.nonce),
    ...typeof t.yParity < "u" ? { yParity: U(t.yParity) } : {},
    ...typeof t.v < "u" && typeof t.yParity > "u" ? { v: U(t.v) } : {}
  }));
}
function R(e, t, n) {
  const r = e[t.name];
  if (typeof r == "function")
    return r;
  const s = e[n];
  return typeof s == "function" ? s : (o) => t(e, o);
}
const jh = 2n ** (8n - 1n) - 1n, qh = 2n ** (16n - 1n) - 1n, Gh = 2n ** (24n - 1n) - 1n, Kh = 2n ** (32n - 1n) - 1n, Qh = 2n ** (40n - 1n) - 1n, Vh = 2n ** (48n - 1n) - 1n, Wh = 2n ** (56n - 1n) - 1n, Zh = 2n ** (64n - 1n) - 1n, Jh = 2n ** (72n - 1n) - 1n, Xh = 2n ** (80n - 1n) - 1n, Yh = 2n ** (88n - 1n) - 1n, em = 2n ** (96n - 1n) - 1n, tm = 2n ** (104n - 1n) - 1n, nm = 2n ** (112n - 1n) - 1n, rm = 2n ** (120n - 1n) - 1n, sm = 2n ** (128n - 1n) - 1n, om = 2n ** (136n - 1n) - 1n, am = 2n ** (144n - 1n) - 1n, im = 2n ** (152n - 1n) - 1n, cm = 2n ** (160n - 1n) - 1n, lm = 2n ** (168n - 1n) - 1n, um = 2n ** (176n - 1n) - 1n, dm = 2n ** (184n - 1n) - 1n, pm = 2n ** (192n - 1n) - 1n, fm = 2n ** (200n - 1n) - 1n, hm = 2n ** (208n - 1n) - 1n, mm = 2n ** (216n - 1n) - 1n, bm = 2n ** (224n - 1n) - 1n, ym = 2n ** (232n - 1n) - 1n, wm = 2n ** (240n - 1n) - 1n, gm = 2n ** (248n - 1n) - 1n, xm = 2n ** (256n - 1n) - 1n, Cm = -(2n ** (8n - 1n)), Am = -(2n ** (16n - 1n)), vm = -(2n ** (24n - 1n)), Em = -(2n ** (32n - 1n)), km = -(2n ** (40n - 1n)), Im = -(2n ** (48n - 1n)), Sm = -(2n ** (56n - 1n)), Bm = -(2n ** (64n - 1n)), Tm = -(2n ** (72n - 1n)), Um = -(2n ** (80n - 1n)), Pm = -(2n ** (88n - 1n)), Nm = -(2n ** (96n - 1n)), Mm = -(2n ** (104n - 1n)), Fm = -(2n ** (112n - 1n)), Dm = -(2n ** (120n - 1n)), Rm = -(2n ** (128n - 1n)), Om = -(2n ** (136n - 1n)), Lm = -(2n ** (144n - 1n)), zm = -(2n ** (152n - 1n)), _m = -(2n ** (160n - 1n)), Hm = -(2n ** (168n - 1n)), $m = -(2n ** (176n - 1n)), jm = -(2n ** (184n - 1n)), qm = -(2n ** (192n - 1n)), Gm = -(2n ** (200n - 1n)), Km = -(2n ** (208n - 1n)), Qm = -(2n ** (216n - 1n)), Vm = -(2n ** (224n - 1n)), Wm = -(2n ** (232n - 1n)), Zm = -(2n ** (240n - 1n)), Jm = -(2n ** (248n - 1n)), Xm = -(2n ** (256n - 1n)), Ym = 2n ** 8n - 1n, Uu = 2n ** 16n - 1n, e0 = 2n ** 24n - 1n, t0 = 2n ** 32n - 1n, n0 = 2n ** 40n - 1n, r0 = 2n ** 48n - 1n, s0 = 2n ** 56n - 1n, o0 = 2n ** 64n - 1n, a0 = 2n ** 72n - 1n, i0 = 2n ** 80n - 1n, c0 = 2n ** 88n - 1n, l0 = 2n ** 96n - 1n, u0 = 2n ** 104n - 1n, d0 = 2n ** 112n - 1n, p0 = 2n ** 120n - 1n, f0 = 2n ** 128n - 1n, h0 = 2n ** 136n - 1n, m0 = 2n ** 144n - 1n, b0 = 2n ** 152n - 1n, y0 = 2n ** 160n - 1n, w0 = 2n ** 168n - 1n, g0 = 2n ** 176n - 1n, x0 = 2n ** 184n - 1n, C0 = 2n ** 192n - 1n, A0 = 2n ** 200n - 1n, v0 = 2n ** 208n - 1n, E0 = 2n ** 216n - 1n, k0 = 2n ** 224n - 1n, I0 = 2n ** 232n - 1n, S0 = 2n ** 240n - 1n, B0 = 2n ** 248n - 1n, kn = 2n ** 256n - 1n;
function Ht(e) {
  const { account: t, gasPrice: n, maxFeePerGas: r, maxPriorityFeePerGas: s, to: o } = e, a = t ? de(t) : void 0;
  if (a && !Z(a.address))
    throw new ee({ address: a.address });
  if (o && !Z(o))
    throw new ee({ address: o });
  if (typeof n < "u" && (typeof r < "u" || typeof s < "u"))
    throw new vu();
  if (r && r > kn)
    throw new Ve({ maxFeePerGas: r });
  if (s && r && s > r)
    throw new Tt({ maxFeePerGas: r, maxPriorityFeePerGas: s });
}
async function mr(e) {
  const t = await e.request({
    method: "eth_chainId"
  }, { dedupe: !0 });
  return V(t);
}
class Pu extends S {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.", {
      name: "BaseFeeScalarError"
    });
  }
}
class qs extends S {
  constructor() {
    super("Chain does not support EIP-1559 fees.", {
      name: "Eip1559FeesNotSupportedError"
    });
  }
}
class Nu extends S {
  constructor({ maxPriorityFeePerGas: t }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${pe(t)} gwei).`, { name: "MaxFeePerGasTooLowError" });
  }
}
class oi extends S {
  constructor({ blockHash: t, blockNumber: n }) {
    let r = "Block";
    t && (r = `Block at hash "${t}"`), n && (r = `Block at number "${n}"`), super(`${r} could not be found.`, { name: "BlockNotFoundError" });
  }
}
const ai = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function In(e) {
  const t = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? V(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
    nonce: e.nonce ? V(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? ai[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0
  };
  return e.authorizationList && (t.authorizationList = T0(e.authorizationList)), t.yParity = (() => {
    if (e.yParity)
      return Number(e.yParity);
    if (typeof t.v == "bigint") {
      if (t.v === 0n || t.v === 27n)
        return 0;
      if (t.v === 1n || t.v === 28n)
        return 1;
      if (t.v >= 35n)
        return t.v % 2n === 0n ? 1 : 0;
    }
  })(), t.type === "legacy" && (delete t.accessList, delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), t.type === "eip2930" && (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), t.type === "eip1559" && delete t.maxFeePerBlobGas, t;
}
const Gs = /* @__PURE__ */ js("transaction", In);
function T0(e) {
  return e.map((t) => ({
    contractAddress: t.address,
    r: t.r,
    s: t.s,
    chainId: Number(t.chainId),
    nonce: Number(t.nonce),
    ...typeof t.yParity < "u" ? { yParity: Number(t.yParity) } : {},
    ...typeof t.v < "u" && typeof t.yParity > "u" ? { v: Number(t.v) } : {}
  }));
}
function Ks(e) {
  var n;
  const t = (n = e.transactions) == null ? void 0 : n.map((r) => typeof r == "string" ? r : In(r));
  return {
    ...e,
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: t,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
  };
}
const Qs = /* @__PURE__ */ js("block", Ks);
async function We(e, { blockHash: t, blockNumber: n, blockTag: r, includeTransactions: s } = {}) {
  var u, d, p;
  const o = r ?? "latest", a = s ?? !1, i = n !== void 0 ? U(n) : void 0;
  let c = null;
  if (t ? c = await e.request({
    method: "eth_getBlockByHash",
    params: [t, a]
  }, { dedupe: !0 }) : c = await e.request({
    method: "eth_getBlockByNumber",
    params: [i || o, a]
  }, { dedupe: !!i }), !c)
    throw new oi({ blockHash: t, blockNumber: n });
  return (((p = (d = (u = e.chain) == null ? void 0 : u.formatters) == null ? void 0 : d.block) == null ? void 0 : p.format) || Ks)(c);
}
async function Vs(e) {
  const t = await e.request({
    method: "eth_gasPrice"
  });
  return BigInt(t);
}
async function Mu(e, t) {
  return Fu(e, t);
}
async function Fu(e, t) {
  var o, a;
  const { block: n, chain: r = e.chain, request: s } = t || {};
  try {
    const i = ((o = r == null ? void 0 : r.fees) == null ? void 0 : o.maxPriorityFeePerGas) ?? ((a = r == null ? void 0 : r.fees) == null ? void 0 : a.defaultPriorityFee);
    if (typeof i == "function") {
      const l = n || await R(e, We, "getBlock")({}), u = await i({
        block: l,
        client: e,
        request: s
      });
      if (u === null)
        throw new Error();
      return u;
    }
    if (typeof i < "u")
      return i;
    const c = await e.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return L(c);
  } catch {
    const [i, c] = await Promise.all([
      n ? Promise.resolve(n) : R(e, We, "getBlock")({}),
      R(e, Vs, "getGasPrice")({})
    ]);
    if (typeof i.baseFeePerGas != "bigint")
      throw new qs();
    const l = c - i.baseFeePerGas;
    return l < 0n ? 0n : l;
  }
}
async function Du(e, t) {
  return ca(e, t);
}
async function ca(e, t) {
  var p, f;
  const { block: n, chain: r = e.chain, request: s, type: o = "eip1559" } = t || {}, a = await (async () => {
    var m, h;
    return typeof ((m = r == null ? void 0 : r.fees) == null ? void 0 : m.baseFeeMultiplier) == "function" ? r.fees.baseFeeMultiplier({
      block: n,
      client: e,
      request: s
    }) : ((h = r == null ? void 0 : r.fees) == null ? void 0 : h.baseFeeMultiplier) ?? 1.2;
  })();
  if (a < 1)
    throw new Pu();
  const c = 10 ** (((p = a.toString().split(".")[1]) == null ? void 0 : p.length) ?? 0), l = (m) => m * BigInt(Math.ceil(a * c)) / BigInt(c), u = n || await R(e, We, "getBlock")({});
  if (typeof ((f = r == null ? void 0 : r.fees) == null ? void 0 : f.estimateFeesPerGas) == "function") {
    const m = await r.fees.estimateFeesPerGas({
      block: n,
      client: e,
      multiply: l,
      request: s,
      type: o
    });
    if (m !== null)
      return m;
  }
  if (o === "eip1559") {
    if (typeof u.baseFeePerGas != "bigint")
      throw new qs();
    const m = typeof (s == null ? void 0 : s.maxPriorityFeePerGas) == "bigint" ? s.maxPriorityFeePerGas : await Fu(e, {
      block: u,
      chain: r,
      request: s
    }), h = l(u.baseFeePerGas);
    return {
      maxFeePerGas: (s == null ? void 0 : s.maxFeePerGas) ?? h + m,
      maxPriorityFeePerGas: m
    };
  }
  return {
    gasPrice: (s == null ? void 0 : s.gasPrice) ?? l(await R(e, Vs, "getGasPrice")({}))
  };
}
class Ru extends S {
  constructor(t, { account: n, docsPath: r, chain: s, data: o, gas: a, gasPrice: i, maxFeePerGas: c, maxPriorityFeePerGas: l, nonce: u, to: d, value: p }) {
    var m;
    const f = fr({
      from: n == null ? void 0 : n.address,
      to: d,
      value: typeof p < "u" && `${$s(p)} ${((m = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : m.symbol) || "ETH"}`,
      data: o,
      gas: a,
      gasPrice: typeof i < "u" && `${pe(i)} gwei`,
      maxFeePerGas: typeof c < "u" && `${pe(c)} gwei`,
      maxPriorityFeePerGas: typeof l < "u" && `${pe(l)} gwei`,
      nonce: u
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        f
      ].filter(Boolean),
      name: "EstimateGasExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = t;
  }
}
function U0(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = ri(e, n);
    return s instanceof pr ? e : s;
  })();
  return new Ru(r, {
    docsPath: t,
    ...n
  });
}
class Ou extends S {
  constructor({ address: t }) {
    super(`State for account "${t}" is set multiple times.`, {
      name: "AccountStateConflictError"
    });
  }
}
class Lu extends S {
  constructor() {
    super("state and stateDiff are set on the same account.", {
      name: "StateAssignmentConflictError"
    });
  }
}
function Pc(e) {
  return e.reduce((t, { slot: n, value: r }) => `${t}        ${n}: ${r}
`, "");
}
function P0(e) {
  return e.reduce((t, { address: n, ...r }) => {
    let s = `${t}    ${n}:
`;
    return r.nonce && (s += `      nonce: ${r.nonce}
`), r.balance && (s += `      balance: ${r.balance}
`), r.code && (s += `      code: ${r.code}
`), r.state && (s += `      state:
`, s += Pc(r.state)), r.stateDiff && (s += `      stateDiff:
`, s += Pc(r.stateDiff)), s;
  }, `  State Override:
`).slice(0, -1);
}
function Nc(e) {
  if (!(!e || e.length === 0))
    return e.reduce((t, { slot: n, value: r }) => {
      if (n.length !== 66)
        throw new Ac({
          size: n.length,
          targetSize: 66,
          type: "hex"
        });
      if (r.length !== 66)
        throw new Ac({
          size: r.length,
          targetSize: 66,
          type: "hex"
        });
      return t[n] = r, t;
    }, {});
}
function N0(e) {
  const { balance: t, nonce: n, state: r, stateDiff: s, code: o } = e, a = {};
  if (o !== void 0 && (a.code = o), t !== void 0 && (a.balance = U(t)), n !== void 0 && (a.nonce = U(n)), r !== void 0 && (a.state = Nc(r)), s !== void 0) {
    if (a.state)
      throw new Lu();
    a.stateDiff = Nc(s);
  }
  return a;
}
function zu(e) {
  if (!e)
    return;
  const t = {};
  for (const { address: n, ...r } of e) {
    if (!Z(n, { strict: !1 }))
      throw new ee({ address: n });
    if (t[n])
      throw new Ou({ address: n });
    t[n] = N0(r);
  }
  return t;
}
async function Ws(e, { address: t, blockNumber: n, blockTag: r = "latest" }) {
  const s = n ? U(n) : void 0, o = await e.request({
    method: "eth_getBalance",
    params: [t, s || r]
  });
  return BigInt(o);
}
async function $t(e, t) {
  var s, o, a;
  const n = t.account ?? e.account, r = n ? de(n) : void 0;
  try {
    let K = function(B) {
      const { block: O, request: j, rpcStateOverride: G } = B;
      return e.request({
        method: "eth_estimateGas",
        params: G ? [j, O ?? "latest", G] : O ? [j, O] : [j]
      });
    };
    const { accessList: i, authorizationList: c, blobs: l, blobVersionedHashes: u, blockNumber: d, blockTag: p, data: f, gas: m, gasPrice: h, maxFeePerBlobGas: b, maxFeePerGas: y, maxPriorityFeePerGas: w, nonce: v, value: E, stateOverride: g, ...C } = await jt(e, {
      ...t,
      parameters: (
        // Some RPC Providers do not compute versioned hashes from blobs. We will need
        // to compute them.
        (r == null ? void 0 : r.type) === "local" ? void 0 : ["blobVersionedHashes"]
      )
    }), k = (d ? U(d) : void 0) || p, I = zu(g), P = await (async () => {
      if (C.to)
        return C.to;
      if (c && c.length > 0)
        return await xu({
          authorization: c[0]
        }).catch(() => {
          throw new S("`to` is required. Could not infer from `authorizationList`");
        });
    })();
    Ht(t);
    const N = (a = (o = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : o.transactionRequest) == null ? void 0 : a.format, F = (N || ft)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...hr(C, { format: N }),
      from: r == null ? void 0 : r.address,
      accessList: i,
      authorizationList: c,
      blobs: l,
      blobVersionedHashes: u,
      data: f,
      gas: m,
      gasPrice: h,
      maxFeePerBlobGas: b,
      maxFeePerGas: y,
      maxPriorityFeePerGas: w,
      nonce: v,
      to: P,
      value: E
    });
    let T = BigInt(await K({ block: k, request: F, rpcStateOverride: I }));
    if (c) {
      const B = await Ws(e, { address: F.from }), O = await Promise.all(c.map(async (j) => {
        const { contractAddress: G } = j, Q = await K({
          block: k,
          request: {
            authorizationList: void 0,
            data: f,
            from: r == null ? void 0 : r.address,
            to: G,
            value: U(B)
          },
          rpcStateOverride: I
        }).catch(() => 100000n);
        return 2n * BigInt(Q);
      }));
      T += O.reduce((j, G) => j + G, 0n);
    }
    return T;
  } catch (i) {
    throw U0(i, {
      ...t,
      account: r,
      chain: e.chain
    });
  }
}
async function Zs(e, { address: t, blockTag: n = "latest", blockNumber: r }) {
  const s = await e.request({
    method: "eth_getTransactionCount",
    params: [t, r ? U(r) : n]
  }, { dedupe: !!r });
  return V(s);
}
function Js(e) {
  const { kzg: t } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map((o) => ne(o)) : e.blobs, s = [];
  for (const o of r)
    s.push(Uint8Array.from(t.blobToKzgCommitment(o)));
  return n === "bytes" ? s : s.map((o) => W(o));
}
function Xs(e) {
  const { kzg: t } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map((a) => ne(a)) : e.blobs, s = typeof e.commitments[0] == "string" ? e.commitments.map((a) => ne(a)) : e.commitments, o = [];
  for (let a = 0; a < r.length; a++) {
    const i = r[a], c = s[a];
    o.push(Uint8Array.from(t.computeBlobKzgProof(i, c)));
  }
  return n === "bytes" ? o : o.map((a) => W(a));
}
function M0(e, t, n, r) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, r);
  const s = BigInt(32), o = BigInt(4294967295), a = Number(n >> s & o), i = Number(n & o), c = r ? 4 : 0, l = r ? 0 : 4;
  e.setUint32(t + c, a, r), e.setUint32(t + l, i, r);
}
const F0 = (e, t, n) => e & t ^ ~e & n, D0 = (e, t, n) => e & t ^ e & n ^ t & n;
class _u extends $a {
  constructor(t, n, r, s) {
    super(), this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Bo(this.buffer);
  }
  update(t) {
    on(this);
    const { view: n, buffer: r, blockLen: s } = this;
    t = _s(t);
    const o = t.length;
    for (let a = 0; a < o; ) {
      const i = Math.min(s - this.pos, o - a);
      if (i === s) {
        const c = Bo(t);
        for (; s <= o - a; a += s)
          this.process(c, a);
        continue;
      }
      r.set(t.subarray(a, a + i), this.pos), this.pos += i, a += i, this.pos === s && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    on(this), uu(t, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: s, isLE: o } = this;
    let { pos: a } = this;
    n[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > s - a && (this.process(r, 0), a = 0);
    for (let d = a; d < s; d++)
      n[d] = 0;
    M0(r, s - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const i = Bo(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l = c / 4, u = this.get();
    if (l > u.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < l; d++)
      i.setUint32(4 * d, u[d], o);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const r = t.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: r, length: s, finished: o, destroyed: a, pos: i } = this;
    return t.length = s, t.pos = i, t.finished = o, t.destroyed = a, s % n && t.buffer.set(r), t;
  }
}
const R0 = /* @__PURE__ */ new Uint32Array([
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
]), tt = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), nt = /* @__PURE__ */ new Uint32Array(64);
class O0 extends _u {
  constructor() {
    super(64, 32, 8, !1), this.A = tt[0] | 0, this.B = tt[1] | 0, this.C = tt[2] | 0, this.D = tt[3] | 0, this.E = tt[4] | 0, this.F = tt[5] | 0, this.G = tt[6] | 0, this.H = tt[7] | 0;
  }
  get() {
    const { A: t, B: n, C: r, D: s, E: o, F: a, G: i, H: c } = this;
    return [t, n, r, s, o, a, i, c];
  }
  // prettier-ignore
  set(t, n, r, s, o, a, i, c) {
    this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = s | 0, this.E = o | 0, this.F = a | 0, this.G = i | 0, this.H = c | 0;
  }
  process(t, n) {
    for (let d = 0; d < 16; d++, n += 4)
      nt[d] = t.getUint32(n, !1);
    for (let d = 16; d < 64; d++) {
      const p = nt[d - 15], f = nt[d - 2], m = Re(p, 7) ^ Re(p, 18) ^ p >>> 3, h = Re(f, 17) ^ Re(f, 19) ^ f >>> 10;
      nt[d] = h + nt[d - 7] + m + nt[d - 16] | 0;
    }
    let { A: r, B: s, C: o, D: a, E: i, F: c, G: l, H: u } = this;
    for (let d = 0; d < 64; d++) {
      const p = Re(i, 6) ^ Re(i, 11) ^ Re(i, 25), f = u + p + F0(i, c, l) + R0[d] + nt[d] | 0, h = (Re(r, 2) ^ Re(r, 13) ^ Re(r, 22)) + D0(r, s, o) | 0;
      u = l, l = c, c = i, i = a + f | 0, a = o, o = s, s = r, r = f + h | 0;
    }
    r = r + this.A | 0, s = s + this.B | 0, o = o + this.C | 0, a = a + this.D | 0, i = i + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, u = u + this.H | 0, this.set(r, s, o, a, i, c, l, u);
  }
  roundClean() {
    nt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Hu = /* @__PURE__ */ ja(() => new O0());
function ii(e, t) {
  const n = t || "hex", r = Hu(_(e, { strict: !1 }) ? oe(e) : e);
  return n === "bytes" ? r : M(r);
}
function ci(e) {
  const { commitment: t, version: n = 1 } = e, r = e.to ?? (typeof t == "string" ? "hex" : "bytes"), s = ii(t, "bytes");
  return s.set([n], 0), r === "bytes" ? s : W(s);
}
function li(e) {
  const { commitments: t, version: n } = e, r = e.to ?? (typeof t[0] == "string" ? "hex" : "bytes"), s = [];
  for (const o of t)
    s.push(ci({
      commitment: o,
      to: r,
      version: n
    }));
  return s;
}
const Mc = 6, $u = 32, ui = 4096, ju = $u * ui, Fc = ju * Mc - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * ui * Mc, qu = 1;
class L0 extends S {
  constructor({ maxSize: t, size: n }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${t} bytes`, `Given: ${n} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
}
class Gu extends S {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
}
class z0 extends S {
  constructor({ hash: t, size: n }) {
    super(`Versioned hash "${t}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${n}`],
      name: "InvalidVersionedHashSizeError"
    });
  }
}
class _0 extends S {
  constructor({ hash: t, version: n }) {
    super(`Versioned hash "${t}" version is invalid.`, {
      metaMessages: [
        `Expected: ${qu}`,
        `Received: ${n}`
      ],
      name: "InvalidVersionedHashVersionError"
    });
  }
}
function Ku(e) {
  const t = e.to ?? (typeof e.data == "string" ? "hex" : "bytes"), n = typeof e.data == "string" ? ne(e.data) : e.data, r = X(n);
  if (!r)
    throw new Gu();
  if (r > Fc)
    throw new L0({
      maxSize: Fc,
      size: r
    });
  const s = [];
  let o = !0, a = 0;
  for (; o; ) {
    const i = an(new Uint8Array(ju));
    let c = 0;
    for (; c < ui; ) {
      const l = n.slice(a, a + ($u - 1));
      if (i.pushByte(0), i.pushBytes(l), l.length < 31) {
        i.pushByte(128), o = !1;
        break;
      }
      c++, a += 31;
    }
    s.push(i);
  }
  return t === "bytes" ? s.map((i) => i.bytes) : s.map((i) => W(i.bytes));
}
function Ys(e) {
  const { data: t, kzg: n, to: r } = e, s = e.blobs ?? Ku({ data: t, to: r }), o = e.commitments ?? Js({ blobs: s, kzg: n, to: r }), a = e.proofs ?? Xs({ blobs: s, commitments: o, kzg: n, to: r }), i = [];
  for (let c = 0; c < s.length; c++)
    i.push({
      blob: s[c],
      commitment: o[c],
      proof: a[c]
    });
  return i;
}
function di(e) {
  if (e.type)
    return e.type;
  if (typeof e.authorizationList < "u")
    return "eip7702";
  if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u")
    return "eip4844";
  if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof e.gasPrice < "u")
    return typeof e.accessList < "u" ? "eip2930" : "legacy";
  throw new Eu({ transaction: e });
}
const Qu = [
  "blobVersionedHashes",
  "chainId",
  "fees",
  "gas",
  "nonce",
  "type"
];
async function jt(e, t) {
  const { account: n = e.account, blobs: r, chain: s, gas: o, kzg: a, nonce: i, nonceManager: c, parameters: l = Qu, type: u } = t, d = n ? de(n) : void 0, p = { ...t, ...d ? { from: d == null ? void 0 : d.address } : {} };
  let f;
  async function m() {
    return f || (f = await R(e, We, "getBlock")({ blockTag: "latest" }), f);
  }
  let h;
  async function b() {
    return h || (s ? s.id : typeof t.chainId < "u" ? t.chainId : (h = await R(e, mr, "getChainId")({}), h));
  }
  if ((l.includes("blobVersionedHashes") || l.includes("sidecars")) && r && a) {
    const y = Js({ blobs: r, kzg: a });
    if (l.includes("blobVersionedHashes")) {
      const w = li({
        commitments: y,
        to: "hex"
      });
      p.blobVersionedHashes = w;
    }
    if (l.includes("sidecars")) {
      const w = Xs({ blobs: r, commitments: y, kzg: a }), v = Ys({
        blobs: r,
        commitments: y,
        proofs: w,
        to: "hex"
      });
      p.sidecars = v;
    }
  }
  if (l.includes("chainId") && (p.chainId = await b()), l.includes("nonce") && typeof i > "u" && d)
    if (c) {
      const y = await b();
      p.nonce = await c.consume({
        address: d.address,
        chainId: y,
        client: e
      });
    } else
      p.nonce = await R(e, Zs, "getTransactionCount")({
        address: d.address,
        blockTag: "pending"
      });
  if ((l.includes("fees") || l.includes("type")) && typeof u > "u")
    try {
      p.type = di(p);
    } catch {
      const y = await m();
      p.type = typeof (y == null ? void 0 : y.baseFeePerGas) == "bigint" ? "eip1559" : "legacy";
    }
  if (l.includes("fees"))
    if (p.type !== "legacy" && p.type !== "eip2930") {
      if (typeof p.maxFeePerGas > "u" || typeof p.maxPriorityFeePerGas > "u") {
        const y = await m(), { maxFeePerGas: w, maxPriorityFeePerGas: v } = await ca(e, {
          block: y,
          chain: s,
          request: p
        });
        if (typeof t.maxPriorityFeePerGas > "u" && t.maxFeePerGas && t.maxFeePerGas < v)
          throw new Nu({
            maxPriorityFeePerGas: v
          });
        p.maxPriorityFeePerGas = v, p.maxFeePerGas = w;
      }
    } else {
      if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u")
        throw new qs();
      const y = await m(), { gasPrice: w } = await ca(e, {
        block: y,
        chain: s,
        request: p,
        type: "legacy"
      });
      p.gasPrice = w;
    }
  return l.includes("gas") && typeof o > "u" && (p.gas = await R(e, $t, "estimateGas")({
    ...p,
    account: d ? { address: d.address, type: "json-rpc" } : void 0
  })), Ht(p), delete p.parameters, p;
}
async function pi(e, { serializedTransaction: t }) {
  return e.request({
    method: "eth_sendRawTransaction",
    params: [t]
  }, { retryCount: 0 });
}
async function br(e, t) {
  var y, w, v, E;
  const { account: n = e.account, chain: r = e.chain, accessList: s, authorizationList: o, blobs: a, data: i, gas: c, gasPrice: l, maxFeePerBlobGas: u, maxFeePerGas: d, maxPriorityFeePerGas: p, nonce: f, value: m, ...h } = t;
  if (!n)
    throw new vn({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const b = de(n);
  try {
    Ht(t);
    const g = await (async () => {
      if (t.to)
        return t.to;
      if (o && o.length > 0)
        return await xu({
          authorization: o[0]
        }).catch(() => {
          throw new S("`to` is required. Could not infer from `authorizationList`.");
        });
    })();
    if (b.type === "json-rpc") {
      let C;
      r !== null && (C = await R(e, mr, "getChainId")({}), Za({
        currentChainId: C,
        chain: r
      }));
      const A = (v = (w = (y = e.chain) == null ? void 0 : y.formatters) == null ? void 0 : w.transactionRequest) == null ? void 0 : v.format, I = (A || ft)({
        // Pick out extra data that might exist on the chain's transaction request type.
        ...hr(h, { format: A }),
        accessList: s,
        authorizationList: o,
        blobs: a,
        chainId: C,
        data: i,
        from: b.address,
        gas: c,
        gasPrice: l,
        maxFeePerBlobGas: u,
        maxFeePerGas: d,
        maxPriorityFeePerGas: p,
        nonce: f,
        to: g,
        value: m
      });
      return await e.request({
        method: "eth_sendTransaction",
        params: [I]
      }, { retryCount: 0 });
    }
    if (b.type === "local") {
      const C = await R(e, jt, "prepareTransactionRequest")({
        account: b,
        accessList: s,
        authorizationList: o,
        blobs: a,
        chain: r,
        data: i,
        gas: c,
        gasPrice: l,
        maxFeePerBlobGas: u,
        maxFeePerGas: d,
        maxPriorityFeePerGas: p,
        nonce: f,
        nonceManager: b.nonceManager,
        parameters: [...Qu, "sidecars"],
        value: m,
        ...h,
        to: g
      }), A = (E = r == null ? void 0 : r.serializers) == null ? void 0 : E.transaction, k = await b.signTransaction(C, {
        serializer: A
      });
      return await R(e, pi, "sendRawTransaction")({
        serializedTransaction: k
      });
    }
    throw b.type === "smart" ? new No({
      metaMessages: [
        "Consider using the `sendUserOperation` Action instead."
      ],
      docsPath: "/docs/actions/bundler/sendUserOperation",
      type: "smart"
    }) : new No({
      docsPath: "/docs/actions/wallet/sendTransaction",
      type: b.type
    });
  } catch (g) {
    throw g instanceof No ? g : Hh(g, {
      ...t,
      account: b,
      chain: t.chain || void 0
    });
  }
}
function Vu(e, t) {
  const { abi: n, args: r, bytecode: s, ...o } = t, a = dr({ abi: n, args: r, bytecode: s });
  return br(e, {
    ...o,
    data: a
  });
}
const As = [
  {
    inputs: [
      {
        components: [
          {
            name: "target",
            type: "address"
          },
          {
            name: "allowFailure",
            type: "bool"
          },
          {
            name: "callData",
            type: "bytes"
          }
        ],
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            name: "success",
            type: "bool"
          },
          {
            name: "returnData",
            type: "bytes"
          }
        ],
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], Wu = [
  {
    inputs: [],
    name: "ResolverNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverWildcardNotSupported",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverNotContract",
    type: "error"
  },
  {
    inputs: [
      {
        name: "returnData",
        type: "bytes"
      }
    ],
    name: "ResolverError",
    type: "error"
  },
  {
    inputs: [
      {
        components: [
          {
            name: "status",
            type: "uint16"
          },
          {
            name: "message",
            type: "string"
          }
        ],
        name: "errors",
        type: "tuple[]"
      }
    ],
    name: "HttpError",
    type: "error"
  }
], Zu = [
  ...Wu,
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  },
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" },
      { name: "gateways", type: "string[]" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  }
], H0 = [
  ...Wu,
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [{ type: "bytes", name: "reverseName" }],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  },
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [
      { type: "bytes", name: "reverseName" },
      { type: "string[]", name: "gateways" }
    ],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  }
], Dc = [
  {
    name: "text",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "key", type: "string" }
    ],
    outputs: [{ name: "", type: "string" }]
  }
], Rc = [
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "name", type: "bytes32" }],
    outputs: [{ name: "", type: "address" }]
  },
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "coinType", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bytes" }]
  }
], Ju = [
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  }
], $0 = [
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        indexed: !0,
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "uint8"
      }
    ]
  },
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ]
  }
], j0 = [
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        indexed: !0,
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "uint8"
      }
    ]
  },
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "bytes32"
      }
    ]
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "bytes32"
      }
    ]
  },
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ]
  }
], q0 = [
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "spender",
        type: "address"
      },
      {
        indexed: !0,
        name: "tokenId",
        type: "uint256"
      }
    ]
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "operator",
        type: "address"
      },
      {
        indexed: !1,
        name: "approved",
        type: "bool"
      }
    ]
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        indexed: !0,
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        name: "to",
        type: "address"
      },
      {
        indexed: !0,
        name: "tokenId",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "payable",
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "getApproved",
    stateMutability: "view",
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "address"
      }
    ]
  },
  {
    type: "function",
    name: "isApprovedForAll",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "operator",
        type: "address"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "ownerOf",
    stateMutability: "view",
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "owner",
        type: "address"
      }
    ]
  },
  {
    type: "function",
    name: "safeTransferFrom",
    stateMutability: "payable",
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "safeTransferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "id",
        type: "uint256"
      },
      {
        name: "data",
        type: "bytes"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "setApprovalForAll",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "operator",
        type: "address"
      },
      {
        name: "approved",
        type: "bool"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "tokenByIndex",
    stateMutability: "view",
    inputs: [
      {
        name: "index",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "tokenByIndex",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "index",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "tokenURI",
    stateMutability: "view",
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "payable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "tokeId",
        type: "uint256"
      }
    ],
    outputs: []
  }
], G0 = [
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "sender",
        type: "address"
      },
      {
        indexed: !0,
        name: "receiver",
        type: "address"
      },
      {
        indexed: !1,
        name: "assets",
        type: "uint256"
      },
      {
        indexed: !1,
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "sender",
        type: "address"
      },
      {
        indexed: !0,
        name: "receiver",
        type: "address"
      },
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !1,
        name: "assets",
        type: "uint256"
      },
      {
        indexed: !1,
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        name: "assetTokenAddress",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    name: "convertToAssets",
    outputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    name: "convertToShares",
    outputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      }
    ],
    name: "deposit",
    outputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "caller",
        type: "address"
      }
    ],
    name: "maxDeposit",
    outputs: [
      {
        name: "maxAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "caller",
        type: "address"
      }
    ],
    name: "maxMint",
    outputs: [
      {
        name: "maxShares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "maxRedeem",
    outputs: [
      {
        name: "maxShares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "maxWithdraw",
    outputs: [
      {
        name: "maxAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewDeposit",
    outputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewMint",
    outputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewRedeem",
    outputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewWithdraw",
    outputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      },
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "redeem",
    outputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        name: "totalManagedAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "to",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      },
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "withdraw",
    outputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
function K0(e, t) {
  const n = typeof t == "string" ? { to: t } : t, r = n.to;
  return r === "number" ? Fe(e, n) : r === "bigint" ? fi(e, n) : r === "boolean" ? hi(e, n) : r === "string" ? mi(e, n) : W(e, n);
}
function fi(e, t = {}) {
  typeof t.size < "u" && Be(e, { size: t.size });
  const n = W(e, t);
  return L(n, t);
}
function hi(e, t = {}) {
  let n = e;
  if (typeof t.size < "u" && (Be(n, { size: t.size }), n = se(n)), n.length > 1 || n[0] > 1)
    throw new Gl(n);
  return !!n[0];
}
function Fe(e, t = {}) {
  typeof t.size < "u" && Be(e, { size: t.size });
  const n = W(e, t);
  return V(n, t);
}
function mi(e, t = {}) {
  let n = e;
  return typeof t.size < "u" && (Be(n, { size: t.size }), n = se(n, { dir: "right" })), new TextDecoder().decode(n);
}
function ht(e, t) {
  const n = typeof t == "string" ? ne(t) : t, r = an(n);
  if (X(n) === 0 && e.length > 0)
    throw new cr();
  if (X(t) && X(t) < 32)
    throw new Ra({
      data: typeof t == "string" ? t : W(t),
      params: e,
      size: X(t)
    });
  let s = 0;
  const o = [];
  for (let a = 0; a < e.length; ++a) {
    const i = e[a];
    r.setPosition(s);
    const [c, l] = nn(r, i, {
      staticPosition: 0
    });
    s += l, o.push(c);
  }
  return o;
}
function nn(e, t, { staticPosition: n }) {
  const r = Va(t.type);
  if (r) {
    const [s, o] = r;
    return V0(e, { ...t, type: o }, { length: s, staticPosition: n });
  }
  if (t.type === "tuple")
    return X0(e, t, { staticPosition: n });
  if (t.type === "address")
    return Q0(e);
  if (t.type === "bool")
    return W0(e);
  if (t.type.startsWith("bytes"))
    return Z0(e, t, { staticPosition: n });
  if (t.type.startsWith("uint") || t.type.startsWith("int"))
    return J0(e, t);
  if (t.type === "string")
    return Y0(e, { staticPosition: n });
  throw new ou(t.type, {
    docsPath: "/docs/contract/decodeAbiParameters"
  });
}
const Oc = 32, la = 32;
function Q0(e) {
  const t = e.readBytes(32);
  return [An(W(Ga(t, -20))), 32];
}
function V0(e, t, { length: n, staticPosition: r }) {
  if (!n) {
    const a = Fe(e.readBytes(la)), i = r + a, c = i + Oc;
    e.setPosition(i);
    const l = Fe(e.readBytes(Oc)), u = Jn(t);
    let d = 0;
    const p = [];
    for (let f = 0; f < l; ++f) {
      e.setPosition(c + (u ? f * 32 : d));
      const [m, h] = nn(e, t, {
        staticPosition: c
      });
      d += h, p.push(m);
    }
    return e.setPosition(r + 32), [p, 32];
  }
  if (Jn(t)) {
    const a = Fe(e.readBytes(la)), i = r + a, c = [];
    for (let l = 0; l < n; ++l) {
      e.setPosition(i + l * 32);
      const [u] = nn(e, t, {
        staticPosition: i
      });
      c.push(u);
    }
    return e.setPosition(r + 32), [c, 32];
  }
  let s = 0;
  const o = [];
  for (let a = 0; a < n; ++a) {
    const [i, c] = nn(e, t, {
      staticPosition: r + s
    });
    s += c, o.push(i);
  }
  return [o, s];
}
function W0(e) {
  return [hi(e.readBytes(32), { size: 32 }), 32];
}
function Z0(e, t, { staticPosition: n }) {
  const [r, s] = t.type.split("bytes");
  if (!s) {
    const a = Fe(e.readBytes(32));
    e.setPosition(n + a);
    const i = Fe(e.readBytes(32));
    if (i === 0)
      return e.setPosition(n + 32), ["0x", 32];
    const c = e.readBytes(i);
    return e.setPosition(n + 32), [W(c), 32];
  }
  return [W(e.readBytes(Number.parseInt(s), 32)), 32];
}
function J0(e, t) {
  const n = t.type.startsWith("int"), r = Number.parseInt(t.type.split("int")[1] || "256"), s = e.readBytes(32);
  return [
    r > 48 ? fi(s, { signed: n }) : Fe(s, { signed: n }),
    32
  ];
}
function X0(e, t, { staticPosition: n }) {
  const r = t.components.length === 0 || t.components.some(({ name: a }) => !a), s = r ? [] : {};
  let o = 0;
  if (Jn(t)) {
    const a = Fe(e.readBytes(la)), i = n + a;
    for (let c = 0; c < t.components.length; ++c) {
      const l = t.components[c];
      e.setPosition(i + o);
      const [u, d] = nn(e, l, {
        staticPosition: i
      });
      o += d, s[r ? c : l == null ? void 0 : l.name] = u;
    }
    return e.setPosition(n + 32), [s, 32];
  }
  for (let a = 0; a < t.components.length; ++a) {
    const i = t.components[a], [c, l] = nn(e, i, {
      staticPosition: n
    });
    s[r ? a : i == null ? void 0 : i.name] = c, o += l;
  }
  return [s, o];
}
function Y0(e, { staticPosition: t }) {
  const n = Fe(e.readBytes(32)), r = t + n;
  e.setPosition(r);
  const s = Fe(e.readBytes(32));
  if (s === 0)
    return e.setPosition(t + 32), ["", 32];
  const o = e.readBytes(s, 32), a = mi(se(o));
  return e.setPosition(t + 32), [a, 32];
}
function Jn(e) {
  var r;
  const { type: t } = e;
  if (t === "string" || t === "bytes" || t.endsWith("[]"))
    return !0;
  if (t === "tuple")
    return (r = e.components) == null ? void 0 : r.some(Jn);
  const n = Va(e.type);
  return !!(n && Jn({ ...e, type: n[1] }));
}
const eb = (e) => Y(oe(e));
function tb(e) {
  return eb(e);
}
const nb = "1.0.5";
let he = class ua extends Error {
  constructor(t, n = {}) {
    var a;
    const r = n.cause instanceof ua ? n.cause.details : (a = n.cause) != null && a.message ? n.cause.message : n.details, s = n.cause instanceof ua && n.cause.docsPath || n.docsPath, o = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...s ? [`Docs: https://abitype.dev${s}`] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: abitype@${nb}`
    ].join(`
`);
    super(o), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiTypeError"
    }), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.shortMessage = t;
  }
};
function mt(e, t) {
  const n = e.exec(t);
  return n == null ? void 0 : n.groups;
}
const Xu = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, Yu = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/, ed = /^\(.+?\).*?$/, Lc = /^tuple(?<array>(\[(\d*)\])*)$/;
function da(e) {
  let t = e.type;
  if (Lc.test(e.type) && "components" in e) {
    t = "(";
    const n = e.components.length;
    for (let s = 0; s < n; s++) {
      const o = e.components[s];
      t += da(o), s < n - 1 && (t += ", ");
    }
    const r = mt(Lc, e.type);
    return t += `)${(r == null ? void 0 : r.array) ?? ""}`, da({
      ...e,
      type: t
    });
  }
  return "indexed" in e && e.indexed && (t = `${t} indexed`), e.name ? `${t} ${e.name}` : t;
}
function Ln(e) {
  let t = "";
  const n = e.length;
  for (let r = 0; r < n; r++) {
    const s = e[r];
    t += da(s), r !== n - 1 && (t += ", ");
  }
  return t;
}
function rb(e) {
  return e.type === "function" ? `function ${e.name}(${Ln(e.inputs)})${e.stateMutability && e.stateMutability !== "nonpayable" ? ` ${e.stateMutability}` : ""}${e.outputs.length ? ` returns (${Ln(e.outputs)})` : ""}` : e.type === "event" ? `event ${e.name}(${Ln(e.inputs)})` : e.type === "error" ? `error ${e.name}(${Ln(e.inputs)})` : e.type === "constructor" ? `constructor(${Ln(e.inputs)})${e.stateMutability === "payable" ? " payable" : ""}` : e.type === "fallback" ? "fallback()" : "receive() external payable";
}
const td = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function sb(e) {
  return td.test(e);
}
function ob(e) {
  return mt(td, e);
}
const nd = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function ab(e) {
  return nd.test(e);
}
function ib(e) {
  return mt(nd, e);
}
const rd = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function cb(e) {
  return rd.test(e);
}
function lb(e) {
  return mt(rd, e);
}
const sd = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function yr(e) {
  return sd.test(e);
}
function ub(e) {
  return mt(sd, e);
}
const od = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function db(e) {
  return od.test(e);
}
function pb(e) {
  return mt(od, e);
}
const fb = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function hb(e) {
  return fb.test(e);
}
const mb = /^receive\(\) external payable$/;
function bb(e) {
  return mb.test(e);
}
const vs = /* @__PURE__ */ new Set([
  "memory",
  "indexed",
  "storage",
  "calldata"
]), yb = /* @__PURE__ */ new Set(["indexed"]), pa = /* @__PURE__ */ new Set([
  "calldata",
  "memory",
  "storage"
]);
class ad extends he {
  constructor({ signature: t }) {
    super("Failed to parse ABI item.", {
      details: `parseAbiItem(${JSON.stringify(t, null, 2)})`,
      docsPath: "/api/human#parseabiitem-1"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiItemError"
    });
  }
}
class id extends he {
  constructor({ type: t }) {
    super("Unknown type.", {
      metaMessages: [
        `Type "${t}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownTypeError"
    });
  }
}
class wb extends he {
  constructor({ type: t }) {
    super("Unknown type.", {
      metaMessages: [`Type "${t}" is not a valid ABI type.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSolidityTypeError"
    });
  }
}
class cd extends he {
  constructor({ param: t }) {
    super("Failed to parse ABI parameter.", {
      details: `parseAbiParameter(${JSON.stringify(t, null, 2)})`,
      docsPath: "/api/human#parseabiparameter-1"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiParameterError"
    });
  }
}
class ld extends he {
  constructor({ params: t }) {
    super("Failed to parse ABI parameters.", {
      details: `parseAbiParameters(${JSON.stringify(t, null, 2)})`,
      docsPath: "/api/human#parseabiparameters-1"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiParametersError"
    });
  }
}
class ud extends he {
  constructor({ param: t }) {
    super("Invalid ABI parameter.", {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParameterError"
    });
  }
}
class dd extends he {
  constructor({ param: t, name: n }) {
    super("Invalid ABI parameter.", {
      details: t,
      metaMessages: [
        `"${n}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SolidityProtectedKeywordError"
    });
  }
}
class pd extends he {
  constructor({ param: t, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: t,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidModifierError"
    });
  }
}
class fd extends he {
  constructor({ param: t, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: t,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`,
        `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidFunctionModifierError"
    });
  }
}
class hd extends he {
  constructor({ abiParameter: t }) {
    super("Invalid ABI parameter.", {
      details: JSON.stringify(t, null, 2),
      metaMessages: ["ABI parameter type is invalid."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiTypeParameterError"
    });
  }
}
class en extends he {
  constructor({ signature: t, type: n }) {
    super(`Invalid ${n} signature.`, {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidSignatureError"
    });
  }
}
class md extends he {
  constructor({ signature: t }) {
    super("Unknown signature.", {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSignatureError"
    });
  }
}
class bd extends he {
  constructor({ signature: t }) {
    super("Invalid struct signature.", {
      details: t,
      metaMessages: ["No properties exist."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidStructSignatureError"
    });
  }
}
class yd extends he {
  constructor({ type: t }) {
    super("Circular reference detected.", {
      metaMessages: [`Struct "${t}" is a circular reference.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "CircularReferenceError"
    });
  }
}
class wd extends he {
  constructor({ current: t, depth: n }) {
    super("Unbalanced parentheses.", {
      metaMessages: [
        `"${t.trim()}" has too many ${n > 0 ? "opening" : "closing"} parentheses.`
      ],
      details: `Depth "${n}"`
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParenthesisError"
    });
  }
}
function gb(e, t) {
  return t ? `${t}:${e}` : e;
}
const Mo = /* @__PURE__ */ new Map([
  // Unnamed
  ["address", { type: "address" }],
  ["bool", { type: "bool" }],
  ["bytes", { type: "bytes" }],
  ["bytes32", { type: "bytes32" }],
  ["int", { type: "int256" }],
  ["int256", { type: "int256" }],
  ["string", { type: "string" }],
  ["uint", { type: "uint256" }],
  ["uint8", { type: "uint8" }],
  ["uint16", { type: "uint16" }],
  ["uint24", { type: "uint24" }],
  ["uint32", { type: "uint32" }],
  ["uint64", { type: "uint64" }],
  ["uint96", { type: "uint96" }],
  ["uint112", { type: "uint112" }],
  ["uint160", { type: "uint160" }],
  ["uint192", { type: "uint192" }],
  ["uint256", { type: "uint256" }],
  // Named
  ["address owner", { type: "address", name: "owner" }],
  ["address to", { type: "address", name: "to" }],
  ["bool approved", { type: "bool", name: "approved" }],
  ["bytes _data", { type: "bytes", name: "_data" }],
  ["bytes data", { type: "bytes", name: "data" }],
  ["bytes signature", { type: "bytes", name: "signature" }],
  ["bytes32 hash", { type: "bytes32", name: "hash" }],
  ["bytes32 r", { type: "bytes32", name: "r" }],
  ["bytes32 root", { type: "bytes32", name: "root" }],
  ["bytes32 s", { type: "bytes32", name: "s" }],
  ["string name", { type: "string", name: "name" }],
  ["string symbol", { type: "string", name: "symbol" }],
  ["string tokenURI", { type: "string", name: "tokenURI" }],
  ["uint tokenId", { type: "uint256", name: "tokenId" }],
  ["uint8 v", { type: "uint8", name: "v" }],
  ["uint256 balance", { type: "uint256", name: "balance" }],
  ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
  ["uint256 value", { type: "uint256", name: "value" }],
  // Indexed
  [
    "event:address indexed from",
    { type: "address", name: "from", indexed: !0 }
  ],
  ["event:address indexed to", { type: "address", name: "to", indexed: !0 }],
  [
    "event:uint indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ],
  [
    "event:uint256 indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ]
]);
function fa(e, t = {}) {
  if (cb(e)) {
    const n = lb(e);
    if (!n)
      throw new en({ signature: e, type: "function" });
    const r = xe(n.parameters), s = [], o = r.length;
    for (let i = 0; i < o; i++)
      s.push(Ne(r[i], {
        modifiers: pa,
        structs: t,
        type: "function"
      }));
    const a = [];
    if (n.returns) {
      const i = xe(n.returns), c = i.length;
      for (let l = 0; l < c; l++)
        a.push(Ne(i[l], {
          modifiers: pa,
          structs: t,
          type: "function"
        }));
    }
    return {
      name: n.name,
      type: "function",
      stateMutability: n.stateMutability ?? "nonpayable",
      inputs: s,
      outputs: a
    };
  }
  if (ab(e)) {
    const n = ib(e);
    if (!n)
      throw new en({ signature: e, type: "event" });
    const r = xe(n.parameters), s = [], o = r.length;
    for (let a = 0; a < o; a++)
      s.push(Ne(r[a], {
        modifiers: yb,
        structs: t,
        type: "event"
      }));
    return { name: n.name, type: "event", inputs: s };
  }
  if (sb(e)) {
    const n = ob(e);
    if (!n)
      throw new en({ signature: e, type: "error" });
    const r = xe(n.parameters), s = [], o = r.length;
    for (let a = 0; a < o; a++)
      s.push(Ne(r[a], { structs: t, type: "error" }));
    return { name: n.name, type: "error", inputs: s };
  }
  if (db(e)) {
    const n = pb(e);
    if (!n)
      throw new en({ signature: e, type: "constructor" });
    const r = xe(n.parameters), s = [], o = r.length;
    for (let a = 0; a < o; a++)
      s.push(Ne(r[a], { structs: t, type: "constructor" }));
    return {
      type: "constructor",
      stateMutability: n.stateMutability ?? "nonpayable",
      inputs: s
    };
  }
  if (hb(e))
    return { type: "fallback" };
  if (bb(e))
    return {
      type: "receive",
      stateMutability: "payable"
    };
  throw new md({ signature: e });
}
const xb = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, Cb = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, Ab = /^u?int$/;
function Ne(e, t) {
  var d, p;
  const n = gb(e, t == null ? void 0 : t.type);
  if (Mo.has(n))
    return Mo.get(n);
  const r = ed.test(e), s = mt(r ? Cb : xb, e);
  if (!s)
    throw new ud({ param: e });
  if (s.name && Eb(s.name))
    throw new dd({ param: e, name: s.name });
  const o = s.name ? { name: s.name } : {}, a = s.modifier === "indexed" ? { indexed: !0 } : {}, i = (t == null ? void 0 : t.structs) ?? {};
  let c, l = {};
  if (r) {
    c = "tuple";
    const f = xe(s.type), m = [], h = f.length;
    for (let b = 0; b < h; b++)
      m.push(Ne(f[b], { structs: i }));
    l = { components: m };
  } else if (s.type in i)
    c = "tuple", l = { components: i[s.type] };
  else if (Ab.test(s.type))
    c = `${s.type}256`;
  else if (c = s.type, (t == null ? void 0 : t.type) !== "struct" && !gd(c))
    throw new wb({ type: c });
  if (s.modifier) {
    if (!((p = (d = t == null ? void 0 : t.modifiers) == null ? void 0 : d.has) != null && p.call(d, s.modifier)))
      throw new pd({
        param: e,
        type: t == null ? void 0 : t.type,
        modifier: s.modifier
      });
    if (pa.has(s.modifier) && !kb(c, !!s.array))
      throw new fd({
        param: e,
        type: t == null ? void 0 : t.type,
        modifier: s.modifier
      });
  }
  const u = {
    type: `${c}${s.array ?? ""}`,
    ...o,
    ...a,
    ...l
  };
  return Mo.set(n, u), u;
}
function xe(e, t = [], n = "", r = 0) {
  const s = e.trim().length;
  for (let o = 0; o < s; o++) {
    const a = e[o], i = e.slice(o + 1);
    switch (a) {
      case ",":
        return r === 0 ? xe(i, [...t, n.trim()]) : xe(i, t, `${n}${a}`, r);
      case "(":
        return xe(i, t, `${n}${a}`, r + 1);
      case ")":
        return xe(i, t, `${n}${a}`, r - 1);
      default:
        return xe(i, t, `${n}${a}`, r);
    }
  }
  if (n === "")
    return t;
  if (r !== 0)
    throw new wd({ current: n, depth: r });
  return t.push(n.trim()), t;
}
function gd(e) {
  return e === "address" || e === "bool" || e === "function" || e === "string" || Xu.test(e) || Yu.test(e);
}
const vb = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function Eb(e) {
  return e === "address" || e === "bool" || e === "function" || e === "string" || e === "tuple" || Xu.test(e) || Yu.test(e) || vb.test(e);
}
function kb(e, t) {
  return t || e === "bytes" || e === "string" || e === "tuple";
}
function eo(e) {
  const t = {}, n = e.length;
  for (let a = 0; a < n; a++) {
    const i = e[a];
    if (!yr(i))
      continue;
    const c = ub(i);
    if (!c)
      throw new en({ signature: i, type: "struct" });
    const l = c.properties.split(";"), u = [], d = l.length;
    for (let p = 0; p < d; p++) {
      const m = l[p].trim();
      if (!m)
        continue;
      const h = Ne(m, {
        type: "struct"
      });
      u.push(h);
    }
    if (!u.length)
      throw new bd({ signature: i });
    t[c.name] = u;
  }
  const r = {}, s = Object.entries(t), o = s.length;
  for (let a = 0; a < o; a++) {
    const [i, c] = s[a];
    r[i] = xd(c, t);
  }
  return r;
}
const Ib = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function xd(e, t, n = /* @__PURE__ */ new Set()) {
  const r = [], s = e.length;
  for (let o = 0; o < s; o++) {
    const a = e[o];
    if (ed.test(a.type))
      r.push(a);
    else {
      const c = mt(Ib, a.type);
      if (!(c != null && c.type))
        throw new hd({ abiParameter: a });
      const { array: l, type: u } = c;
      if (u in t) {
        if (n.has(u))
          throw new yd({ type: u });
        r.push({
          ...a,
          type: `tuple${l ?? ""}`,
          components: xd(t[u] ?? [], t, /* @__PURE__ */ new Set([...n, u]))
        });
      } else if (gd(u))
        r.push(a);
      else
        throw new id({ type: u });
    }
  }
  return r;
}
function bi(e) {
  const t = eo(e), n = [], r = e.length;
  for (let s = 0; s < r; s++) {
    const o = e[s];
    yr(o) || n.push(fa(o, t));
  }
  return n;
}
function Sb(e) {
  let t;
  if (typeof e == "string")
    t = fa(e);
  else {
    const n = eo(e), r = e.length;
    for (let s = 0; s < r; s++) {
      const o = e[s];
      if (!yr(o)) {
        t = fa(o, n);
        break;
      }
    }
  }
  if (!t)
    throw new ad({ signature: e });
  return t;
}
function Bb(e) {
  let t;
  if (typeof e == "string")
    t = Ne(e, {
      modifiers: vs
    });
  else {
    const n = eo(e), r = e.length;
    for (let s = 0; s < r; s++) {
      const o = e[s];
      if (!yr(o)) {
        t = Ne(o, { modifiers: vs, structs: n });
        break;
      }
    }
  }
  if (!t)
    throw new cd({ param: e });
  return t;
}
function Tb(e) {
  const t = [];
  if (typeof e == "string") {
    const n = xe(e), r = n.length;
    for (let s = 0; s < r; s++)
      t.push(Ne(n[s], { modifiers: vs }));
  } else {
    const n = eo(e), r = e.length;
    for (let s = 0; s < r; s++) {
      const o = e[s];
      if (yr(o))
        continue;
      const a = xe(o), i = a.length;
      for (let c = 0; c < i; c++)
        t.push(Ne(a[c], { modifiers: vs, structs: n }));
    }
  }
  if (t.length === 0)
    throw new ld({ params: e });
  return t;
}
function Ub(e) {
  let t = !0, n = "", r = 0, s = "", o = !1;
  for (let a = 0; a < e.length; a++) {
    const i = e[a];
    if (["(", ")", ","].includes(i) && (t = !0), i === "(" && r++, i === ")" && r--, !!t) {
      if (r === 0) {
        if (i === " " && ["event", "function", ""].includes(s))
          s = "";
        else if (s += i, i === ")") {
          o = !0;
          break;
        }
        continue;
      }
      if (i === " ") {
        e[a - 1] !== "," && n !== "," && n !== ",(" && (n = "", t = !1);
        continue;
      }
      s += i, n += i;
    }
  }
  if (!o)
    throw new S("Unable to normalize signature.");
  return s;
}
const $n = (e) => {
  const t = typeof e == "string" ? e : rb(e);
  return Ub(t);
};
function Es(e) {
  return tb($n(e));
}
const Xn = Es, Mt = (e) => Qe(Es(e), 0, 4);
function Ze(e) {
  const { abi: t, args: n = [], name: r } = e, s = _(r, { strict: !1 }), o = t.filter((i) => s ? i.type === "function" ? Mt(i) === r : i.type === "event" ? Xn(i) === r : !1 : "name" in i && i.name === r);
  if (o.length === 0)
    return;
  if (o.length === 1)
    return o[0];
  let a;
  for (const i of o) {
    if (!("inputs" in i))
      continue;
    if (!n || n.length === 0) {
      if (!i.inputs || i.inputs.length === 0)
        return i;
      continue;
    }
    if (!i.inputs || i.inputs.length === 0 || i.inputs.length !== n.length)
      continue;
    if (n.every((l, u) => {
      const d = "inputs" in i && i.inputs[u];
      return d ? ha(l, d) : !1;
    })) {
      if (a && "inputs" in a && a.inputs) {
        const l = Cd(i.inputs, a.inputs, n);
        if (l)
          throw new Xf({
            abiItem: i,
            type: l[0]
          }, {
            abiItem: a,
            type: l[1]
          });
      }
      a = i;
    }
  }
  return a || o[0];
}
function ha(e, t) {
  const n = typeof e, r = t.type;
  switch (r) {
    case "address":
      return Z(e, { strict: !1 });
    case "bool":
      return n === "boolean";
    case "function":
      return n === "string";
    case "string":
      return n === "string";
    default:
      return r === "tuple" && "components" in t ? Object.values(t.components).every((s, o) => ha(Object.values(e)[o], s)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(e) && e.every((s) => ha(s, {
        ...t,
        // Pop off `[]` or `[M]` from end of type
        type: r.replace(/(\[[0-9]{0,}\])$/, "")
      })) : !1;
  }
}
function Cd(e, t, n) {
  for (const r in e) {
    const s = e[r], o = t[r];
    if (s.type === "tuple" && o.type === "tuple" && "components" in s && "components" in o)
      return Cd(s.components, o.components, n[r]);
    const a = [s.type, o.type];
    if (a.includes("address") && a.includes("bytes20") ? !0 : a.includes("address") && a.includes("string") ? Z(n[r], { strict: !1 }) : a.includes("address") && a.includes("bytes") ? Z(n[r], { strict: !1 }) : !1)
      return a;
  }
}
const Fo = "/docs/contract/decodeFunctionResult";
function qt(e) {
  const { abi: t, args: n, functionName: r, data: s } = e;
  let o = t[0];
  if (r) {
    const i = Ze({ abi: t, args: n, name: r });
    if (!i)
      throw new Bt(r, { docsPath: Fo });
    o = i;
  }
  if (o.type !== "function")
    throw new Bt(void 0, { docsPath: Fo });
  if (!o.outputs)
    throw new _a(o.name, { docsPath: Fo });
  const a = ht(o.outputs, s);
  if (a && a.length > 1)
    return a;
  if (a && a.length === 1)
    return a[0];
}
const zc = "/docs/contract/encodeFunctionData";
function Ad(e) {
  const { abi: t, args: n, functionName: r } = e;
  let s = t[0];
  if (r) {
    const o = Ze({
      abi: t,
      args: n,
      name: r
    });
    if (!o)
      throw new Bt(r, { docsPath: zc });
    s = o;
  }
  if (s.type !== "function")
    throw new Bt(void 0, { docsPath: zc });
  return {
    abi: [s],
    functionName: Mt(De(s))
  };
}
function Je(e) {
  const { args: t } = e, { abi: n, functionName: r } = (() => {
    var i;
    return e.abi.length === 1 && ((i = e.functionName) != null && i.startsWith("0x")) ? e : Ad(e);
  })(), s = n[0], o = r, a = "inputs" in s && s.inputs ? ze(s.inputs, t ?? []) : void 0;
  return ue([o, a ?? "0x"]);
}
function Gt({ blockNumber: e, chain: t, contract: n }) {
  var s;
  const r = (s = t == null ? void 0 : t.contracts) == null ? void 0 : s[n];
  if (!r)
    throw new ps({
      chain: t,
      contract: { name: n }
    });
  if (e && r.blockCreated && r.blockCreated > e)
    throw new ps({
      blockNumber: e,
      chain: t,
      contract: {
        name: n,
        blockCreated: r.blockCreated
      }
    });
  return r.address;
}
const vd = {
  1: "An `assert` condition failed.",
  17: "Arithmetic operation resulted in underflow or overflow.",
  18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
  33: "Attempted to convert to an invalid type.",
  34: "Attempted to access a storage byte array that is incorrectly encoded.",
  49: "Performed `.pop()` on an empty array",
  50: "Array index is out of bounds.",
  65: "Allocated too much memory or created an array which is too large.",
  81: "Attempted to call a zero-initialized variable of internal function type."
}, Pb = {
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
}, Nb = {
  inputs: [
    {
      name: "reason",
      type: "uint256"
    }
  ],
  name: "Panic",
  type: "error"
};
function yi(e) {
  const { abi: t, data: n } = e, r = Qe(n, 0, 4);
  if (r === "0x")
    throw new cr();
  const o = [...t || [], Pb, Nb].find((a) => a.type === "error" && r === Mt(De(a)));
  if (!o)
    throw new La(r, {
      docsPath: "/docs/contract/decodeErrorResult"
    });
  return {
    abiItem: o,
    args: "inputs" in o && o.inputs && o.inputs.length > 0 ? ht(o.inputs, Qe(n, 4)) : void 0,
    errorName: o.name
  };
}
function Ed({ abiItem: e, args: t, includeFunctionName: n = !0, includeName: r = !1 }) {
  if ("name" in e && "inputs" in e && e.inputs)
    return `${n ? e.name : ""}(${e.inputs.map((s, o) => `${r && s.name ? `${s.name}: ` : ""}${typeof t[o] == "object" ? re(t[o]) : t[o]}`).join(", ")})`;
}
class wi extends S {
  constructor(t, { account: n, docsPath: r, chain: s, data: o, gas: a, gasPrice: i, maxFeePerGas: c, maxPriorityFeePerGas: l, nonce: u, to: d, value: p, stateOverride: f }) {
    var b;
    const m = n ? de(n) : void 0;
    let h = fr({
      from: m == null ? void 0 : m.address,
      to: d,
      value: typeof p < "u" && `${$s(p)} ${((b = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : b.symbol) || "ETH"}`,
      data: o,
      gas: a,
      gasPrice: typeof i < "u" && `${pe(i)} gwei`,
      maxFeePerGas: typeof c < "u" && `${pe(c)} gwei`,
      maxPriorityFeePerGas: typeof l < "u" && `${pe(l)} gwei`,
      nonce: u
    });
    f && (h += `
${P0(f)}`), super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Raw Call Arguments:",
        h
      ].filter(Boolean),
      name: "CallExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = t;
  }
}
class Ge extends S {
  constructor(t, { abi: n, args: r, contractAddress: s, docsPath: o, functionName: a, sender: i }) {
    const c = Ze({ abi: n, args: r, name: a }), l = c ? Ed({
      abiItem: c,
      args: r,
      includeFunctionName: !1,
      includeName: !1
    }) : void 0, u = c ? De(c, { includeName: !0 }) : void 0, d = fr({
      address: s && zh(s),
      function: u,
      args: l && l !== "()" && `${[...Array((a == null ? void 0 : a.length) ?? 0).keys()].map(() => " ").join("")}${l}`,
      sender: i
    });
    super(t.shortMessage || `An unknown error occurred while executing the contract function "${a}".`, {
      cause: t,
      docsPath: o,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        d && "Contract Call:",
        d
      ].filter(Boolean),
      name: "ContractFunctionExecutionError"
    }), Object.defineProperty(this, "abi", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "contractAddress", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "formattedArgs", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "functionName", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "sender", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abi = n, this.args = r, this.cause = t, this.contractAddress = s, this.functionName = a, this.sender = i;
  }
}
class ks extends S {
  constructor({ abi: t, data: n, functionName: r, message: s }) {
    let o, a, i, c;
    if (n && n !== "0x")
      try {
        a = yi({ abi: t, data: n });
        const { abiItem: u, errorName: d, args: p } = a;
        if (d === "Error")
          c = p[0];
        else if (d === "Panic") {
          const [f] = p;
          c = vd[f];
        } else {
          const f = u ? De(u, { includeName: !0 }) : void 0, m = u && p ? Ed({
            abiItem: u,
            args: p,
            includeFunctionName: !1,
            includeName: !1
          }) : void 0;
          i = [
            f ? `Error: ${f}` : "",
            m && m !== "()" ? `       ${[...Array((d == null ? void 0 : d.length) ?? 0).keys()].map(() => " ").join("")}${m}` : ""
          ];
        }
      } catch (u) {
        o = u;
      }
    else
      s && (c = s);
    let l;
    o instanceof La && (l = o.signature, i = [
      `Unable to decode signature "${l}" as it was not found on the provided ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`
    ]), super(c && c !== "execution reverted" || l ? [
      `The contract function "${r}" reverted with the following ${l ? "signature" : "reason"}:`,
      c || l
    ].join(`
`) : `The contract function "${r}" reverted.`, {
      cause: o,
      metaMessages: i,
      name: "ContractFunctionRevertedError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "reason", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = a, this.reason = c, this.signature = l;
  }
}
class kd extends S {
  constructor({ functionName: t }) {
    super(`The contract function "${t}" returned no data ("0x").`, {
      metaMessages: [
        "This could be due to any of the following:",
        `  - The contract does not have the function "${t}",`,
        "  - The parameters passed to the contract function may be invalid, or",
        "  - The address is not a contract."
      ],
      name: "ContractFunctionZeroDataError"
    });
  }
}
class Id extends S {
  constructor({ factory: t }) {
    super(`Deployment for counterfactual contract call failed${t ? ` for factory "${t}".` : ""}`, {
      metaMessages: [
        "Please ensure:",
        "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
        "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."
      ],
      name: "CounterfactualDeploymentFailedError"
    });
  }
}
class to extends S {
  constructor({ data: t, message: n }) {
    super(n || "", { name: "RawContractError" }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = t;
  }
}
function gi(e, t) {
  var r, s, o, a, i, c;
  if (!(e instanceof S))
    return !1;
  const n = e.walk((l) => l instanceof ks);
  return n instanceof ks ? !!(((r = n.data) == null ? void 0 : r.errorName) === "ResolverNotFound" || ((s = n.data) == null ? void 0 : s.errorName) === "ResolverWildcardNotSupported" || ((o = n.data) == null ? void 0 : o.errorName) === "ResolverNotContract" || ((a = n.data) == null ? void 0 : a.errorName) === "ResolverError" || ((i = n.data) == null ? void 0 : i.errorName) === "HttpError" || (c = n.reason) != null && c.includes("Wildcard on non-extended resolvers is not supported") || t === "reverse" && n.reason === vd[50]) : !1;
}
function Sd(e) {
  if (e.length !== 66 || e.indexOf("[") !== 0 || e.indexOf("]") !== 65)
    return null;
  const t = `0x${e.slice(1, 65)}`;
  return _(t) ? t : null;
}
function Gn(e) {
  let t = new Uint8Array(32).fill(0);
  if (!e)
    return W(t);
  const n = e.split(".");
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = Sd(n[r]), o = s ? oe(s) : Y(st(n[r]), "bytes");
    t = Y(ke([t, o]), "bytes");
  }
  return W(t);
}
function Mb(e) {
  return `[${e.slice(2)}]`;
}
function Bd(e) {
  const t = new Uint8Array(32).fill(0);
  return e ? Sd(e) || Y(st(e)) : W(t);
}
function no(e) {
  const t = e.replace(/^\.|\.$/gm, "");
  if (t.length === 0)
    return new Uint8Array(1);
  const n = new Uint8Array(st(t).byteLength + 2);
  let r = 0;
  const s = t.split(".");
  for (let o = 0; o < s.length; o++) {
    let a = st(s[o]);
    a.byteLength > 255 && (a = st(Mb(Bd(s[o])))), n[r] = a.length, n.set(a, r + 1), r += a.length + 1;
  }
  return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n;
}
const Fb = 3;
function Ft(e, { abi: t, address: n, args: r, docsPath: s, functionName: o, sender: a }) {
  const { code: i, data: c, message: l, shortMessage: u } = e instanceof to ? e : e instanceof S ? e.walk((p) => "data" in p) || e.walk() : {}, d = e instanceof cr ? new kd({ functionName: o }) : [Fb, it.code].includes(i) && (c || l || u) ? new ks({
    abi: t,
    data: typeof c == "object" ? c.data : c,
    functionName: o,
    message: u ?? l
  }) : e;
  return new Ge(d, {
    abi: t,
    args: r,
    contractAddress: n,
    docsPath: s,
    functionName: o,
    sender: a
  });
}
const Db = "0x82ad56cb", Td = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe", Ud = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe", Pd = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
function Nd(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = ri(e, n);
    return s instanceof pr ? e : s;
  })();
  return new wi(r, {
    docsPath: t,
    ...n
  });
}
const Do = /* @__PURE__ */ new Map();
function xi({ fn: e, id: t, shouldSplitBatch: n, wait: r = 0, sort: s }) {
  const o = async () => {
    const u = c();
    a();
    const d = u.map(({ args: p }) => p);
    d.length !== 0 && e(d).then((p) => {
      var f;
      s && Array.isArray(p) && p.sort(s);
      for (let m = 0; m < u.length; m++) {
        const { pendingPromise: h } = u[m];
        (f = h.resolve) == null || f.call(h, [p[m], p]);
      }
    }).catch((p) => {
      var f;
      for (let m = 0; m < u.length; m++) {
        const { pendingPromise: h } = u[m];
        (f = h.reject) == null || f.call(h, p);
      }
    });
  }, a = () => Do.delete(t), i = () => c().map(({ args: u }) => u), c = () => Do.get(t) || [], l = (u) => Do.set(t, [...c(), u]);
  return {
    flush: a,
    async schedule(u) {
      const d = {}, p = new Promise((h, b) => {
        d.resolve = h, d.reject = b;
      });
      return (n == null ? void 0 : n([...i(), u])) && o(), c().length > 0 ? (l({ args: u, pendingPromise: d }), p) : (l({ args: u, pendingPromise: d }), setTimeout(o, r), p);
    }
  };
}
async function bt(e, t) {
  var N, q, F, K;
  const { account: n = e.account, batch: r = !!((N = e.batch) != null && N.multicall), blockNumber: s, blockTag: o = "latest", accessList: a, blobs: i, code: c, data: l, factory: u, factoryData: d, gas: p, gasPrice: f, maxFeePerBlobGas: m, maxFeePerGas: h, maxPriorityFeePerGas: b, nonce: y, to: w, value: v, stateOverride: E, ...g } = t, C = n ? de(n) : void 0;
  if (c && (u || d))
    throw new S("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
  if (c && w)
    throw new S("Cannot provide both `code` & `to` as parameters.");
  const A = c && l, k = u && d && w && l, I = A || k, P = A ? Lb({
    code: c,
    data: l
  }) : k ? zb({
    data: l,
    factory: u,
    factoryData: d,
    to: w
  }) : l;
  try {
    Ht(t);
    const B = (s ? U(s) : void 0) || o, O = zu(E), j = (K = (F = (q = e.chain) == null ? void 0 : q.formatters) == null ? void 0 : F.transactionRequest) == null ? void 0 : K.format, Q = (j || ft)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...hr(g, { format: j }),
      from: C == null ? void 0 : C.address,
      accessList: a,
      blobs: i,
      data: P,
      gas: p,
      gasPrice: f,
      maxFeePerBlobGas: m,
      maxFeePerGas: h,
      maxPriorityFeePerGas: b,
      nonce: y,
      to: I ? void 0 : w,
      value: v
    });
    if (r && Rb({ request: Q }) && !O)
      try {
        return await Ob(e, {
          ...Q,
          blockNumber: s,
          blockTag: o
        });
      } catch (ae) {
        if (!(ae instanceof Wa) && !(ae instanceof ps))
          throw ae;
      }
    const ce = await e.request({
      method: "eth_call",
      params: O ? [
        Q,
        B,
        O
      ] : [Q, B]
    });
    return ce === "0x" ? { data: void 0 } : { data: ce };
  } catch (T) {
    const B = _b(T), { offchainLookup: O, offchainLookupSignature: j } = await Promise.resolve().then(() => By);
    if (e.ccipRead !== !1 && (B == null ? void 0 : B.slice(0, 10)) === j && w)
      return { data: await O(e, { data: B, to: w }) };
    throw I && (B == null ? void 0 : B.slice(0, 10)) === "0x101bb98d" ? new Id({ factory: u }) : Nd(T, {
      ...t,
      account: C,
      chain: e.chain
    });
  }
}
function Rb({ request: e }) {
  const { data: t, to: n, ...r } = e;
  return !(!t || t.startsWith(Db) || !n || Object.values(r).filter((s) => typeof s < "u").length > 0);
}
async function Ob(e, t) {
  var h;
  const { batchSize: n = 1024, wait: r = 0 } = typeof ((h = e.batch) == null ? void 0 : h.multicall) == "object" ? e.batch.multicall : {}, { blockNumber: s, blockTag: o = "latest", data: a, multicallAddress: i, to: c } = t;
  let l = i;
  if (!l) {
    if (!e.chain)
      throw new Wa();
    l = Gt({
      blockNumber: s,
      chain: e.chain,
      contract: "multicall3"
    });
  }
  const d = (s ? U(s) : void 0) || o, { schedule: p } = xi({
    id: `${e.uid}.${d}`,
    wait: r,
    shouldSplitBatch(b) {
      return b.reduce((w, { data: v }) => w + (v.length - 2), 0) > n * 2;
    },
    fn: async (b) => {
      const y = b.map((E) => ({
        allowFailure: !0,
        callData: E.data,
        target: E.to
      })), w = Je({
        abi: As,
        args: [y],
        functionName: "aggregate3"
      }), v = await e.request({
        method: "eth_call",
        params: [
          {
            data: w,
            to: l
          },
          d
        ]
      });
      return qt({
        abi: As,
        args: [y],
        functionName: "aggregate3",
        data: v || "0x"
      });
    }
  }), [{ returnData: f, success: m }] = await p({ data: a, to: c });
  if (!m)
    throw new to({ data: f });
  return f === "0x" ? { data: void 0 } : { data: f };
}
function Lb(e) {
  const { code: t, data: n } = e;
  return dr({
    abi: bi(["constructor(bytes, bytes)"]),
    bytecode: Td,
    args: [t, n]
  });
}
function zb(e) {
  const { data: t, factory: n, factoryData: r, to: s } = e;
  return dr({
    abi: bi(["constructor(address, bytes, address, bytes)"]),
    bytecode: Ud,
    args: [s, t, n, r]
  });
}
function _b(e) {
  var n;
  if (!(e instanceof S))
    return;
  const t = e.walk();
  return typeof (t == null ? void 0 : t.data) == "object" ? (n = t.data) == null ? void 0 : n.data : t.data;
}
async function Ie(e, t) {
  const { abi: n, address: r, args: s, functionName: o, ...a } = t, i = Je({
    abi: n,
    args: s,
    functionName: o
  });
  try {
    const { data: c } = await R(e, bt, "call")({
      ...a,
      data: i,
      to: r
    });
    return qt({
      abi: n,
      args: s,
      functionName: o,
      data: c || "0x"
    });
  } catch (c) {
    throw Ft(c, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/readContract",
      functionName: o
    });
  }
}
async function Ci(e, { blockNumber: t, blockTag: n, coinType: r, name: s, gatewayUrls: o, strict: a, universalResolverAddress: i }) {
  let c = i;
  if (!c) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = Gt({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const l = Je({
      abi: Rc,
      functionName: "addr",
      ...r != null ? { args: [Gn(s), BigInt(r)] } : { args: [Gn(s)] }
    }), u = {
      address: c,
      abi: Zu,
      functionName: "resolve",
      args: [M(no(s)), l],
      blockNumber: t,
      blockTag: n
    }, d = R(e, Ie, "readContract"), p = o ? await d({
      ...u,
      args: [...u.args, o]
    }) : await d(u);
    if (p[0] === "0x")
      return null;
    const f = qt({
      abi: Rc,
      args: r != null ? [Gn(s), BigInt(r)] : void 0,
      functionName: "addr",
      data: p[0]
    });
    return f === "0x" || se(f) === "0x00" ? null : f;
  } catch (l) {
    if (a)
      throw l;
    if (gi(l, "resolve"))
      return null;
    throw l;
  }
}
class Hb extends S {
  constructor({ data: t }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(t)}`
      ],
      name: "EnsAvatarInvalidMetadataError"
    });
  }
}
class Xt extends S {
  constructor({ reason: t }) {
    super(`ENS NFT avatar URI is invalid. ${t}`, {
      name: "EnsAvatarInvalidNftUriError"
    });
  }
}
class ro extends S {
  constructor({ uri: t }) {
    super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: "EnsAvatarUriResolutionError" });
  }
}
class Md extends S {
  constructor({ namespace: t }) {
    super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`, { name: "EnsAvatarUnsupportedNamespaceError" });
  }
}
const $b = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/, jb = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/, qb = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/, Gb = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function Kb(e) {
  try {
    const t = await fetch(e, { method: "HEAD" });
    if (t.status === 200) {
      const n = t.headers.get("content-type");
      return n == null ? void 0 : n.startsWith("image/");
    }
    return !1;
  } catch (t) {
    return typeof t == "object" && typeof t.response < "u" || !globalThis.hasOwnProperty("Image") ? !1 : new Promise((n) => {
      const r = new Image();
      r.onload = () => {
        n(!0);
      }, r.onerror = () => {
        n(!1);
      }, r.src = e;
    });
  }
}
function _c(e, t) {
  return e ? e.endsWith("/") ? e.slice(0, -1) : e : t;
}
function Fd({ uri: e, gatewayUrls: t }) {
  const n = qb.test(e);
  if (n)
    return { uri: e, isOnChain: !0, isEncoded: n };
  const r = _c(t == null ? void 0 : t.ipfs, "https://ipfs.io"), s = _c(t == null ? void 0 : t.arweave, "https://arweave.net"), o = e.match($b), { protocol: a, subpath: i, target: c, subtarget: l = "" } = (o == null ? void 0 : o.groups) || {}, u = a === "ipns:/" || i === "ipns/", d = a === "ipfs:/" || i === "ipfs/" || jb.test(e);
  if (e.startsWith("http") && !u && !d) {
    let f = e;
    return t != null && t.arweave && (f = e.replace(/https:\/\/arweave.net/g, t == null ? void 0 : t.arweave)), { uri: f, isOnChain: !1, isEncoded: !1 };
  }
  if ((u || d) && c)
    return {
      uri: `${r}/${u ? "ipns" : "ipfs"}/${c}${l}`,
      isOnChain: !1,
      isEncoded: !1
    };
  if (a === "ar:/" && c)
    return {
      uri: `${s}/${c}${l || ""}`,
      isOnChain: !1,
      isEncoded: !1
    };
  let p = e.replace(Gb, "");
  if (p.startsWith("<svg") && (p = `data:image/svg+xml;base64,${btoa(p)}`), p.startsWith("data:") || p.startsWith("{"))
    return {
      uri: p,
      isOnChain: !0,
      isEncoded: !1
    };
  throw new ro({ uri: e });
}
function Dd(e) {
  if (typeof e != "object" || !("image" in e) && !("image_url" in e) && !("image_data" in e))
    throw new Hb({ data: e });
  return e.image || e.image_url || e.image_data;
}
async function Qb({ gatewayUrls: e, uri: t }) {
  try {
    const n = await fetch(t).then((s) => s.json());
    return await Ai({
      gatewayUrls: e,
      uri: Dd(n)
    });
  } catch {
    throw new ro({ uri: t });
  }
}
async function Ai({ gatewayUrls: e, uri: t }) {
  const { uri: n, isOnChain: r } = Fd({ uri: t, gatewayUrls: e });
  if (r || await Kb(n))
    return n;
  throw new ro({ uri: t });
}
function Vb(e) {
  let t = e;
  t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
  const [n, r, s] = t.split("/"), [o, a] = n.split(":"), [i, c] = r.split(":");
  if (!o || o.toLowerCase() !== "eip155")
    throw new Xt({ reason: "Only EIP-155 supported" });
  if (!a)
    throw new Xt({ reason: "Chain ID not found" });
  if (!c)
    throw new Xt({
      reason: "Contract address not found"
    });
  if (!s)
    throw new Xt({ reason: "Token ID not found" });
  if (!i)
    throw new Xt({ reason: "ERC namespace not found" });
  return {
    chainID: Number.parseInt(a),
    namespace: i.toLowerCase(),
    contractAddress: c,
    tokenID: s
  };
}
async function Wb(e, { nft: t }) {
  if (t.namespace === "erc721")
    return Ie(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(t.tokenID)]
    });
  if (t.namespace === "erc1155")
    return Ie(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(t.tokenID)]
    });
  throw new Md({ namespace: t.namespace });
}
async function Zb(e, { gatewayUrls: t, record: n }) {
  return /eip155:/i.test(n) ? Jb(e, { gatewayUrls: t, record: n }) : Ai({ uri: n, gatewayUrls: t });
}
async function Jb(e, { gatewayUrls: t, record: n }) {
  const r = Vb(n), s = await Wb(e, { nft: r }), { uri: o, isOnChain: a, isEncoded: i } = Fd({ uri: s, gatewayUrls: t });
  if (a && (o.includes("data:application/json;base64,") || o.startsWith("{"))) {
    const l = i ? (
      // if it is encoded, decode it
      atob(o.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      o
    ), u = JSON.parse(l);
    return Ai({ uri: Dd(u), gatewayUrls: t });
  }
  let c = r.tokenID;
  return r.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), Qb({
    gatewayUrls: t,
    uri: o.replace(/(?:0x)?{id}/, c)
  });
}
async function vi(e, { blockNumber: t, blockTag: n, name: r, key: s, gatewayUrls: o, strict: a, universalResolverAddress: i }) {
  let c = i;
  if (!c) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = Gt({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const l = {
      address: c,
      abi: Zu,
      functionName: "resolve",
      args: [
        M(no(r)),
        Je({
          abi: Dc,
          functionName: "text",
          args: [Gn(r), s]
        })
      ],
      blockNumber: t,
      blockTag: n
    }, u = R(e, Ie, "readContract"), d = o ? await u({
      ...l,
      args: [...l.args, o]
    }) : await u(l);
    if (d[0] === "0x")
      return null;
    const p = qt({
      abi: Dc,
      functionName: "text",
      data: d[0]
    });
    return p === "" ? null : p;
  } catch (l) {
    if (a)
      throw l;
    if (gi(l, "resolve"))
      return null;
    throw l;
  }
}
async function Ei(e, { blockNumber: t, blockTag: n, assetGatewayUrls: r, name: s, gatewayUrls: o, strict: a, universalResolverAddress: i }) {
  const c = await R(e, vi, "getEnsText")({
    blockNumber: t,
    blockTag: n,
    key: "avatar",
    name: s,
    universalResolverAddress: i,
    gatewayUrls: o,
    strict: a
  });
  if (!c)
    return null;
  try {
    return await Zb(e, {
      record: c,
      gatewayUrls: r
    });
  } catch {
    return null;
  }
}
async function ki(e, { address: t, blockNumber: n, blockTag: r, gatewayUrls: s, strict: o, universalResolverAddress: a }) {
  let i = a;
  if (!i) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    i = Gt({
      blockNumber: n,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  const c = `${t.toLowerCase().substring(2)}.addr.reverse`;
  try {
    const l = {
      address: i,
      abi: H0,
      functionName: "reverse",
      args: [M(no(c))],
      blockNumber: n,
      blockTag: r
    }, u = R(e, Ie, "readContract"), [d, p] = s ? await u({
      ...l,
      args: [...l.args, s]
    }) : await u(l);
    return t.toLowerCase() !== p.toLowerCase() ? null : d;
  } catch (l) {
    if (o)
      throw l;
    if (gi(l, "reverse"))
      return null;
    throw l;
  }
}
async function Rd(e, { blockNumber: t, blockTag: n, name: r, universalResolverAddress: s }) {
  let o = s;
  if (!o) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    o = Gt({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  const [a] = await R(e, Ie, "readContract")({
    address: o,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [{ type: "address" }, { type: "bytes32" }],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [M(no(r))],
    blockNumber: t,
    blockTag: n
  });
  return a;
}
function so(e, { method: t }) {
  var r, s;
  const n = {};
  return e.transport.type === "fallback" && ((s = (r = e.transport).onResponse) == null || s.call(r, ({ method: o, response: a, status: i, transport: c }) => {
    i === "success" && t === o && (n[a] = c.request);
  })), (o) => n[o] || e.request;
}
async function Xb(e) {
  const t = so(e, {
    method: "eth_newBlockFilter"
  }), n = await e.request({
    method: "eth_newBlockFilter"
  });
  return { id: n, request: t(n), type: "block" };
}
class Od extends S {
  constructor(t) {
    super(`Filter type "${t}" is not supported.`, {
      name: "FilterTypeNotSupportedError"
    });
  }
}
const Hc = "/docs/contract/encodeEventTopics";
function Sn(e) {
  var c;
  const { abi: t, eventName: n, args: r } = e;
  let s = t[0];
  if (n) {
    const l = Ze({ abi: t, name: n });
    if (!l)
      throw new oa(n, { docsPath: Hc });
    s = l;
  }
  if (s.type !== "event")
    throw new oa(void 0, { docsPath: Hc });
  const o = De(s), a = Xn(o);
  let i = [];
  if (r && "inputs" in s) {
    const l = (c = s.inputs) == null ? void 0 : c.filter((d) => "indexed" in d && d.indexed), u = Array.isArray(r) ? r : Object.values(r).length > 0 ? (l == null ? void 0 : l.map((d) => r[d.name])) ?? [] : [];
    u.length > 0 && (i = (l == null ? void 0 : l.map((d, p) => Array.isArray(u[p]) ? u[p].map((f, m) => $c({ param: d, value: u[p][m] })) : u[p] ? $c({ param: d, value: u[p] }) : null)) ?? []);
  }
  return [a, ...i];
}
function $c({ param: e, value: t }) {
  if (e.type === "string" || e.type === "bytes")
    return Y(oe(t));
  if (e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/))
    throw new Od(e.type);
  return ze([e], [t]);
}
async function Ii(e, t) {
  const { address: n, abi: r, args: s, eventName: o, fromBlock: a, strict: i, toBlock: c } = t, l = so(e, {
    method: "eth_newFilter"
  }), u = o ? Sn({
    abi: r,
    args: s,
    eventName: o
  }) : void 0, d = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: n,
        fromBlock: typeof a == "bigint" ? U(a) : a,
        toBlock: typeof c == "bigint" ? U(c) : c,
        topics: u
      }
    ]
  });
  return {
    abi: r,
    args: s,
    eventName: o,
    id: d,
    request: l(d),
    strict: !!i,
    type: "event"
  };
}
async function Ld(e, { address: t, args: n, event: r, events: s, fromBlock: o, strict: a, toBlock: i } = {}) {
  const c = s ?? (r ? [r] : void 0), l = so(e, {
    method: "eth_newFilter"
  });
  let u = [];
  c && (u = [c.flatMap((f) => Sn({
    abi: [f],
    eventName: f.name,
    args: n
  }))], r && (u = u[0]));
  const d = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: t,
        fromBlock: typeof o == "bigint" ? U(o) : o,
        toBlock: typeof i == "bigint" ? U(i) : i,
        ...u.length ? { topics: u } : {}
      }
    ]
  });
  return {
    abi: c,
    args: n,
    eventName: r ? r.name : void 0,
    fromBlock: o,
    id: d,
    request: l(d),
    strict: !!a,
    toBlock: i,
    type: "event"
  };
}
async function zd(e) {
  const t = so(e, {
    method: "eth_newPendingTransactionFilter"
  }), n = await e.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id: n, request: t(n), type: "transaction" };
}
async function Yb(e) {
  return e.request({
    method: `${e.mode}_dumpState`
  });
}
async function _d(e, t) {
  const { abi: n, address: r, args: s, functionName: o, ...a } = t, i = Je({
    abi: n,
    args: s,
    functionName: o
  });
  try {
    return await R(e, $t, "estimateGas")({
      data: i,
      to: r,
      ...a
    });
  } catch (c) {
    const l = a.account ? de(a.account) : void 0;
    throw Ft(c, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/estimateContractGas",
      functionName: o,
      sender: l == null ? void 0 : l.address
    });
  }
}
async function ey(e) {
  const t = await e.request({
    method: "eth_blobBaseFee"
  });
  return BigInt(t);
}
const ty = /* @__PURE__ */ new Map(), ny = /* @__PURE__ */ new Map();
function ry(e) {
  const t = (s, o) => ({
    clear: () => o.delete(s),
    get: () => o.get(s),
    set: (a) => o.set(s, a)
  }), n = t(e, ty), r = t(e, ny);
  return {
    clear: () => {
      n.clear(), r.clear();
    },
    promise: n,
    response: r
  };
}
async function sy(e, { cacheKey: t, cacheTime: n = Number.POSITIVE_INFINITY }) {
  const r = ry(t), s = r.response.get();
  if (s && n > 0 && (/* @__PURE__ */ new Date()).getTime() - s.created.getTime() < n)
    return s.data;
  let o = r.promise.get();
  o || (o = e(), r.promise.set(o));
  try {
    const a = await o;
    return r.response.set({ created: /* @__PURE__ */ new Date(), data: a }), a;
  } finally {
    r.promise.clear();
  }
}
const oy = (e) => `blockNumber.${e}`;
async function Bn(e, { cacheTime: t = e.cacheTime } = {}) {
  const n = await sy(() => e.request({
    method: "eth_blockNumber"
  }), { cacheKey: oy(e.uid), cacheTime: t });
  return BigInt(n);
}
async function Hd(e, { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}) {
  const s = n !== void 0 ? U(n) : void 0;
  let o;
  return t ? o = await e.request({
    method: "eth_getBlockTransactionCountByHash",
    params: [t]
  }, { dedupe: !0 }) : o = await e.request({
    method: "eth_getBlockTransactionCountByNumber",
    params: [s || r]
  }, { dedupe: !!s }), V(o);
}
async function ma(e, { address: t, blockNumber: n, blockTag: r = "latest" }) {
  const s = n !== void 0 ? U(n) : void 0, o = await e.request({
    method: "eth_getCode",
    params: [t, s || r]
  }, { dedupe: !!s });
  if (o !== "0x")
    return o;
}
function yt(e, t) {
  if (!Z(e, { strict: !1 }))
    throw new ee({ address: e });
  if (!Z(t, { strict: !1 }))
    throw new ee({ address: t });
  return e.toLowerCase() === t.toLowerCase();
}
const jc = "/docs/contract/decodeEventLog";
function oo(e) {
  const { abi: t, data: n, strict: r, topics: s } = e, o = r ?? !0, [a, ...i] = s;
  if (!a)
    throw new nu({ docsPath: jc });
  const c = t.find((h) => h.type === "event" && a === Xn(De(h)));
  if (!(c && "name" in c) || c.type !== "event")
    throw new za(a, { docsPath: jc });
  const { name: l, inputs: u } = c, d = u == null ? void 0 : u.some((h) => !("name" in h && h.name));
  let p = d ? [] : {};
  const f = u.filter((h) => "indexed" in h && h.indexed);
  for (let h = 0; h < f.length; h++) {
    const b = f[h], y = i[h];
    if (!y)
      throw new lr({
        abiItem: c,
        param: b
      });
    p[d ? h : b.name || h] = ay({ param: b, value: y });
  }
  const m = u.filter((h) => !("indexed" in h && h.indexed));
  if (m.length > 0) {
    if (n && n !== "0x")
      try {
        const h = ht(m, n);
        if (h)
          if (d)
            p = [...p, ...h];
          else
            for (let b = 0; b < m.length; b++)
              p[m[b].name] = h[b];
      } catch (h) {
        if (o)
          throw h instanceof Ra || h instanceof yu ? new sn({
            abiItem: c,
            data: n,
            params: m,
            size: X(n)
          }) : h;
      }
    else if (o)
      throw new sn({
        abiItem: c,
        data: "0x",
        params: m,
        size: 0
      });
  }
  return {
    eventName: l,
    args: Object.values(p).length > 0 ? p : void 0
  };
}
function ay({ param: e, value: t }) {
  return e.type === "string" || e.type === "bytes" || e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/) ? t : (ht([e], t) || [])[0];
}
function ao(e) {
  const { abi: t, args: n, logs: r, strict: s = !0 } = e, o = (() => {
    if (e.eventName)
      return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
  })();
  return r.map((a) => {
    var i;
    try {
      const c = Ze({
        abi: t,
        name: a.topics[0]
      });
      if (!c)
        return null;
      const l = oo({
        ...a,
        abi: [c],
        strict: s
      });
      return o && !o.includes(l.eventName) || !iy({
        args: l.args,
        inputs: c.inputs,
        matchArgs: n
      }) ? null : { ...l, ...a };
    } catch (c) {
      let l, u;
      if (c instanceof za)
        return null;
      if (c instanceof sn || c instanceof lr) {
        if (s)
          return null;
        l = c.abiItem.name, u = (i = c.abiItem.inputs) == null ? void 0 : i.some((d) => !("name" in d && d.name));
      }
      return { ...a, args: u ? [] : {}, eventName: l };
    }
  }).filter(Boolean);
}
function iy(e) {
  const { args: t, inputs: n, matchArgs: r } = e;
  if (!r)
    return !0;
  if (!t)
    return !1;
  function s(o, a, i) {
    try {
      return o.type === "address" ? yt(a, i) : o.type === "string" || o.type === "bytes" ? Y(oe(a)) === i : a === i;
    } catch {
      return !1;
    }
  }
  return Array.isArray(t) && Array.isArray(r) ? r.every((o, a) => {
    if (!o)
      return !0;
    const i = n[a];
    return i ? (Array.isArray(o) ? o : [o]).some((l) => s(i, l, t[a])) : !1;
  }) : typeof t == "object" && !Array.isArray(t) && typeof r == "object" && !Array.isArray(r) ? Object.entries(r).every(([o, a]) => {
    if (!a)
      return !0;
    const i = n.find((l) => l.name === o);
    return i ? (Array.isArray(a) ? a : [a]).some((l) => s(i, l, t[o])) : !1;
  }) : !1;
}
function Oe(e, { args: t, eventName: n } = {}) {
  return {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    logIndex: e.logIndex ? Number(e.logIndex) : null,
    transactionHash: e.transactionHash ? e.transactionHash : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    ...n ? { args: t, eventName: n } : {}
  };
}
async function Si(e, { address: t, blockHash: n, fromBlock: r, toBlock: s, event: o, events: a, args: i, strict: c } = {}) {
  const l = c ?? !1, u = a ?? (o ? [o] : void 0);
  let d = [];
  u && (d = [u.flatMap((h) => Sn({
    abi: [h],
    eventName: h.name,
    args: a ? void 0 : i
  }))], o && (d = d[0]));
  let p;
  n ? p = await e.request({
    method: "eth_getLogs",
    params: [{ address: t, topics: d, blockHash: n }]
  }) : p = await e.request({
    method: "eth_getLogs",
    params: [
      {
        address: t,
        topics: d,
        fromBlock: typeof r == "bigint" ? U(r) : r,
        toBlock: typeof s == "bigint" ? U(s) : s
      }
    ]
  });
  const f = p.map((m) => Oe(m));
  return u ? ao({
    abi: u,
    args: i,
    logs: f,
    strict: l
  }) : f;
}
async function Bi(e, t) {
  const { abi: n, address: r, args: s, blockHash: o, eventName: a, fromBlock: i, toBlock: c, strict: l } = t, u = a ? Ze({ abi: n, name: a }) : void 0, d = u ? void 0 : n.filter((p) => p.type === "event");
  return R(e, Si, "getLogs")({
    address: r,
    args: s,
    blockHash: o,
    event: u,
    events: d,
    fromBlock: i,
    toBlock: c,
    strict: l
  });
}
class cy extends S {
  constructor({ address: t }) {
    super(`No EIP-712 domain found on contract "${t}".`, {
      metaMessages: [
        "Ensure that:",
        `- The contract is deployed at the address "${t}".`,
        "- `eip712Domain()` function exists on the contract.",
        "- `eip712Domain()` function matches signature to ERC-5267 specification."
      ],
      name: "Eip712DomainNotFoundError"
    });
  }
}
async function ly(e, t) {
  const { address: n, factory: r, factoryData: s } = t;
  try {
    const [o, a, i, c, l, u, d] = await R(e, Ie, "readContract")({
      abi: uy,
      address: n,
      functionName: "eip712Domain",
      factory: r,
      factoryData: s
    });
    return {
      domain: {
        name: a,
        version: i,
        chainId: Number(c),
        verifyingContract: l,
        salt: u
      },
      extensions: d,
      fields: o
    };
  } catch (o) {
    const a = o;
    throw a.name === "ContractFunctionExecutionError" && a.cause.name === "ContractFunctionZeroDataError" ? new cy({ address: n }) : a;
  }
}
const uy = [
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", type: "bytes1" },
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
      { name: "salt", type: "bytes32" },
      { name: "extensions", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  }
];
function dy(e) {
  var t;
  return {
    baseFeePerGas: e.baseFeePerGas.map((n) => BigInt(n)),
    gasUsedRatio: e.gasUsedRatio,
    oldestBlock: BigInt(e.oldestBlock),
    reward: (t = e.reward) == null ? void 0 : t.map((n) => n.map((r) => BigInt(r)))
  };
}
async function $d(e, { blockCount: t, blockNumber: n, blockTag: r = "latest", rewardPercentiles: s }) {
  const o = n ? U(n) : void 0, a = await e.request({
    method: "eth_feeHistory",
    params: [
      U(t),
      o || r,
      s
    ]
  }, { dedupe: !!o });
  return dy(a);
}
async function io(e, { filter: t }) {
  const n = "strict" in t && t.strict, r = await t.request({
    method: "eth_getFilterChanges",
    params: [t.id]
  });
  if (typeof r[0] == "string")
    return r;
  const s = r.map((o) => Oe(o));
  return !("abi" in t) || !t.abi ? s : ao({
    abi: t.abi,
    logs: s,
    strict: n
  });
}
async function py(e, { filter: t }) {
  const n = t.strict ?? !1, s = (await t.request({
    method: "eth_getFilterLogs",
    params: [t.id]
  })).map((o) => Oe(o));
  return t.abi ? ao({
    abi: t.abi,
    logs: s,
    strict: n
  }) : s;
}
async function jd(e, { address: t, blockNumber: n, blockTag: r = "latest", slot: s }) {
  const o = n !== void 0 ? U(n) : void 0;
  return await e.request({
    method: "eth_getStorageAt",
    params: [t, s, o || r]
  });
}
async function Tn(e, { blockHash: t, blockNumber: n, blockTag: r, hash: s, index: o }) {
  var u, d, p;
  const a = r || "latest", i = n !== void 0 ? U(n) : void 0;
  let c = null;
  if (s ? c = await e.request({
    method: "eth_getTransactionByHash",
    params: [s]
  }, { dedupe: !0 }) : t ? c = await e.request({
    method: "eth_getTransactionByBlockHashAndIndex",
    params: [t, U(o)]
  }, { dedupe: !0 }) : (i || a) && (c = await e.request({
    method: "eth_getTransactionByBlockNumberAndIndex",
    params: [i || a, U(o)]
  }, { dedupe: !!i })), !c)
    throw new ti({
      blockHash: t,
      blockNumber: n,
      blockTag: a,
      hash: s,
      index: o
    });
  return (((p = (d = (u = e.chain) == null ? void 0 : u.formatters) == null ? void 0 : d.transaction) == null ? void 0 : p.format) || In)(c);
}
async function qd(e, { hash: t, transactionReceipt: n }) {
  const [r, s] = await Promise.all([
    R(e, Bn, "getBlockNumber")({}),
    t ? R(e, Tn, "getTransaction")({ hash: t }) : void 0
  ]), o = (n == null ? void 0 : n.blockNumber) || (s == null ? void 0 : s.blockNumber);
  return o ? r - o + 1n : 0n;
}
const fy = {
  "0x0": "reverted",
  "0x1": "success"
};
function Ti(e) {
  const t = {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((n) => Oe(n)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? V(e.transactionIndex) : null,
    status: e.status ? fy[e.status] : null,
    type: e.type ? ai[e.type] || e.type : null
  };
  return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)), t;
}
const Ui = /* @__PURE__ */ js("transactionReceipt", Ti);
async function Is(e, { hash: t }) {
  var s, o, a;
  const n = await e.request({
    method: "eth_getTransactionReceipt",
    params: [t]
  }, { dedupe: !0 });
  if (!n)
    throw new ni({ hash: t });
  return (((a = (o = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : o.transactionReceipt) == null ? void 0 : a.format) || Ti)(n);
}
async function hy(e, { address: t }) {
  await e.request({
    method: `${e.mode}_impersonateAccount`,
    params: [t]
  });
}
async function my(e, { seconds: t }) {
  return await e.request({
    method: "evm_increaseTime",
    params: [U(t)]
  });
}
async function by(e, { state: t }) {
  await e.request({
    method: `${e.mode}_loadState`,
    params: [t]
  });
}
async function yy(e, { blocks: t, interval: n }) {
  e.mode === "ganache" ? await e.request({
    method: "evm_mine",
    params: [{ blocks: U(t) }]
  }) : await e.request({
    method: `${e.mode}_mine`,
    params: [U(t), U(n || 0)]
  });
}
async function Pi(e, t) {
  var b;
  const { allowFailure: n = !0, batchSize: r, blockNumber: s, blockTag: o, multicallAddress: a, stateOverride: i } = t, c = t.contracts, l = r ?? (typeof ((b = e.batch) == null ? void 0 : b.multicall) == "object" && e.batch.multicall.batchSize || 1024);
  let u = a;
  if (!u) {
    if (!e.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    u = Gt({
      blockNumber: s,
      chain: e.chain,
      contract: "multicall3"
    });
  }
  const d = [[]];
  let p = 0, f = 0;
  for (let y = 0; y < c.length; y++) {
    const { abi: w, address: v, args: E, functionName: g } = c[y];
    try {
      const C = Je({ abi: w, args: E, functionName: g });
      f += (C.length - 2) / 2, // Check if batching is enabled.
      l > 0 && // Check if the current size of the batch exceeds the size limit.
      f > l && // Check if the current chunk is not already empty.
      d[p].length > 0 && (p++, f = (C.length - 2) / 2, d[p] = []), d[p] = [
        ...d[p],
        {
          allowFailure: !0,
          callData: C,
          target: v
        }
      ];
    } catch (C) {
      const A = Ft(C, {
        abi: w,
        address: v,
        args: E,
        docsPath: "/docs/contract/multicall",
        functionName: g
      });
      if (!n)
        throw A;
      d[p] = [
        ...d[p],
        {
          allowFailure: !0,
          callData: "0x",
          target: v
        }
      ];
    }
  }
  const m = await Promise.allSettled(d.map((y) => R(e, Ie, "readContract")({
    abi: As,
    address: u,
    args: [y],
    blockNumber: s,
    blockTag: o,
    functionName: "aggregate3",
    stateOverride: i
  }))), h = [];
  for (let y = 0; y < m.length; y++) {
    const w = m[y];
    if (w.status === "rejected") {
      if (!n)
        throw w.reason;
      for (let E = 0; E < d[y].length; E++)
        h.push({
          status: "failure",
          error: w.reason,
          result: void 0
        });
      continue;
    }
    const v = w.value;
    for (let E = 0; E < v.length; E++) {
      const { returnData: g, success: C } = v[E], { callData: A } = d[y][E], { abi: k, address: I, functionName: P, args: N } = c[h.length];
      try {
        if (A === "0x")
          throw new cr();
        if (!C)
          throw new to({ data: g });
        const q = qt({
          abi: k,
          args: N,
          data: g,
          functionName: P
        });
        h.push(n ? { result: q, status: "success" } : q);
      } catch (q) {
        const F = Ft(q, {
          abi: k,
          address: I,
          args: N,
          docsPath: "/docs/contract/multicall",
          functionName: P
        });
        if (!n)
          throw F;
        h.push({ error: F, result: void 0, status: "failure" });
      }
    }
  }
  if (h.length !== c.length)
    throw new S("multicall results mismatch");
  return h;
}
const Ro = /* @__PURE__ */ new Map(), qc = /* @__PURE__ */ new Map();
let wy = 0;
function ut(e, t, n) {
  const r = ++wy, s = () => Ro.get(e) || [], o = () => {
    const u = s();
    Ro.set(e, u.filter((d) => d.id !== r));
  }, a = () => {
    const u = qc.get(e);
    s().length === 1 && u && u(), o();
  }, i = s();
  if (Ro.set(e, [
    ...i,
    { id: r, fns: t }
  ]), i && i.length > 0)
    return a;
  const c = {};
  for (const u in t)
    c[u] = (...d) => {
      var f, m;
      const p = s();
      if (p.length !== 0)
        for (const h of p)
          (m = (f = h.fns)[u]) == null || m.call(f, ...d);
    };
  const l = n(c);
  return typeof l == "function" && qc.set(e, l), a;
}
async function Ss(e) {
  return new Promise((t) => setTimeout(t, e));
}
function wr(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
  let s = !0;
  const o = () => s = !1;
  return (async () => {
    let i;
    t && (i = await e({ unpoll: o }));
    const c = await (n == null ? void 0 : n(i)) ?? r;
    await Ss(c);
    const l = async () => {
      s && (await e({ unpoll: o }), await Ss(r), l());
    };
    l();
  })(), o;
}
function Gd(e, { blockTag: t = "latest", emitMissed: n = !1, emitOnBegin: r = !1, onBlock: s, onError: o, includeTransactions: a, poll: i, pollingInterval: c = e.pollingInterval }) {
  const l = typeof i < "u" ? i : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"), u = a ?? !1;
  let d;
  return l ? (() => {
    const m = re([
      "watchBlocks",
      e.uid,
      t,
      n,
      r,
      u,
      c
    ]);
    return ut(m, { onBlock: s, onError: o }, (h) => wr(async () => {
      var b;
      try {
        const y = await R(e, We, "getBlock")({
          blockTag: t,
          includeTransactions: u
        });
        if (y.number && (d != null && d.number)) {
          if (y.number === d.number)
            return;
          if (y.number - d.number > 1 && n)
            for (let w = (d == null ? void 0 : d.number) + 1n; w < y.number; w++) {
              const v = await R(e, We, "getBlock")({
                blockNumber: w,
                includeTransactions: u
              });
              h.onBlock(v, d), d = v;
            }
        }
        // If no previous block exists, emit.
        (!(d != null && d.number) || // If the block tag is "pending" with no block number, emit.
        t === "pending" && !(y != null && y.number) || // If the next block number is greater than the previous block number, emit.
        // We don't want to emit blocks in the past.
        y.number && y.number > d.number) && (h.onBlock(y, d), d = y);
      } catch (y) {
        (b = h.onError) == null || b.call(h, y);
      }
    }, {
      emitOnBegin: r,
      interval: c
    }));
  })() : (() => {
    let m = !0, h = () => m = !1;
    return (async () => {
      try {
        const b = (() => {
          if (e.transport.type === "fallback") {
            const w = e.transport.transports.find((v) => v.config.type === "webSocket");
            return w ? w.value : e.transport;
          }
          return e.transport;
        })(), { unsubscribe: y } = await b.subscribe({
          params: ["newHeads"],
          onData(w) {
            var g, C, A;
            if (!m)
              return;
            const E = (((A = (C = (g = e.chain) == null ? void 0 : g.formatters) == null ? void 0 : C.block) == null ? void 0 : A.format) || Ks)(w.result);
            s(E, d), d = E;
          },
          onError(w) {
            o == null || o(w);
          }
        });
        h = y, m || h();
      } catch (b) {
        o == null || o(b);
      }
    })(), () => h();
  })();
}
function Ni(e, { emitOnBegin: t = !1, emitMissed: n = !1, onBlockNumber: r, onError: s, poll: o, pollingInterval: a = e.pollingInterval }) {
  const i = typeof o < "u" ? o : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket");
  let c;
  return i ? (() => {
    const d = re([
      "watchBlockNumber",
      e.uid,
      t,
      n,
      a
    ]);
    return ut(d, { onBlockNumber: r, onError: s }, (p) => wr(async () => {
      var f;
      try {
        const m = await R(e, Bn, "getBlockNumber")({ cacheTime: 0 });
        if (c) {
          if (m === c)
            return;
          if (m - c > 1 && n)
            for (let h = c + 1n; h < m; h++)
              p.onBlockNumber(h, c), c = h;
        }
        (!c || m > c) && (p.onBlockNumber(m, c), c = m);
      } catch (m) {
        (f = p.onError) == null || f.call(p, m);
      }
    }, {
      emitOnBegin: t,
      interval: a
    }));
  })() : (() => {
    const d = re([
      "watchBlockNumber",
      e.uid,
      t,
      n
    ]);
    return ut(d, { onBlockNumber: r, onError: s }, (p) => {
      let f = !0, m = () => f = !1;
      return (async () => {
        try {
          const h = (() => {
            if (e.transport.type === "fallback") {
              const y = e.transport.transports.find((w) => w.config.type === "webSocket");
              return y ? y.value : e.transport;
            }
            return e.transport;
          })(), { unsubscribe: b } = await h.subscribe({
            params: ["newHeads"],
            onData(y) {
              var v;
              if (!f)
                return;
              const w = L((v = y.result) == null ? void 0 : v.number);
              p.onBlockNumber(w, c), c = w;
            },
            onError(y) {
              var w;
              (w = p.onError) == null || w.call(p, y);
            }
          });
          m = b, f || m();
        } catch (h) {
          s == null || s(h);
        }
      })(), () => m();
    });
  })();
}
async function co(e, { filter: t }) {
  return t.request({
    method: "eth_uninstallFilter",
    params: [t.id]
  });
}
function gy(e, { address: t, args: n, batch: r = !0, event: s, events: o, fromBlock: a, onError: i, onLogs: c, poll: l, pollingInterval: u = e.pollingInterval, strict: d }) {
  const p = typeof l < "u" ? l : typeof a == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"), f = d ?? !1;
  return p ? (() => {
    const b = re([
      "watchEvent",
      t,
      n,
      r,
      e.uid,
      s,
      u,
      a
    ]);
    return ut(b, { onLogs: c, onError: i }, (y) => {
      let w;
      a !== void 0 && (w = a - 1n);
      let v, E = !1;
      const g = wr(async () => {
        var C;
        if (!E) {
          try {
            v = await R(e, Ld, "createEventFilter")({
              address: t,
              args: n,
              event: s,
              events: o,
              strict: f,
              fromBlock: a
            });
          } catch {
          }
          E = !0;
          return;
        }
        try {
          let A;
          if (v)
            A = await R(e, io, "getFilterChanges")({ filter: v });
          else {
            const k = await R(e, Bn, "getBlockNumber")({});
            w && w !== k ? A = await R(e, Si, "getLogs")({
              address: t,
              args: n,
              event: s,
              events: o,
              fromBlock: w + 1n,
              toBlock: k
            }) : A = [], w = k;
          }
          if (A.length === 0)
            return;
          if (r)
            y.onLogs(A);
          else
            for (const k of A)
              y.onLogs([k]);
        } catch (A) {
          v && A instanceof ct && (E = !1), (C = y.onError) == null || C.call(y, A);
        }
      }, {
        emitOnBegin: !0,
        interval: u
      });
      return async () => {
        v && await R(e, co, "uninstallFilter")({ filter: v }), g();
      };
    });
  })() : (() => {
    let b = !0, y = () => b = !1;
    return (async () => {
      try {
        const w = (() => {
          if (e.transport.type === "fallback") {
            const C = e.transport.transports.find((A) => A.config.type === "webSocket");
            return C ? C.value : e.transport;
          }
          return e.transport;
        })(), v = o ?? (s ? [s] : void 0);
        let E = [];
        v && (E = [v.flatMap((A) => Sn({
          abi: [A],
          eventName: A.name,
          args: n
        }))], s && (E = E[0]));
        const { unsubscribe: g } = await w.subscribe({
          params: ["logs", { address: t, topics: E }],
          onData(C) {
            var k;
            if (!b)
              return;
            const A = C.result;
            try {
              const { eventName: I, args: P } = oo({
                abi: v ?? [],
                data: A.data,
                topics: A.topics,
                strict: f
              }), N = Oe(A, { args: P, eventName: I });
              c([N]);
            } catch (I) {
              let P, N;
              if (I instanceof sn || I instanceof lr) {
                if (d)
                  return;
                P = I.abiItem.name, N = (k = I.abiItem.inputs) == null ? void 0 : k.some((F) => !("name" in F && F.name));
              }
              const q = Oe(A, {
                args: N ? [] : {},
                eventName: P
              });
              c([q]);
            }
          },
          onError(C) {
            i == null || i(C);
          }
        });
        y = g, b || y();
      } catch (w) {
        i == null || i(w);
      }
    })(), () => y();
  })();
}
function Kd(e, { batch: t = !0, onError: n, onTransactions: r, poll: s, pollingInterval: o = e.pollingInterval }) {
  return (typeof s < "u" ? s : e.transport.type !== "webSocket") ? (() => {
    const l = re([
      "watchPendingTransactions",
      e.uid,
      t,
      o
    ]);
    return ut(l, { onTransactions: r, onError: n }, (u) => {
      let d;
      const p = wr(async () => {
        var f;
        try {
          if (!d)
            try {
              d = await R(e, zd, "createPendingTransactionFilter")({});
              return;
            } catch (h) {
              throw p(), h;
            }
          const m = await R(e, io, "getFilterChanges")({ filter: d });
          if (m.length === 0)
            return;
          if (t)
            u.onTransactions(m);
          else
            for (const h of m)
              u.onTransactions([h]);
        } catch (m) {
          (f = u.onError) == null || f.call(u, m);
        }
      }, {
        emitOnBegin: !0,
        interval: o
      });
      return async () => {
        d && await R(e, co, "uninstallFilter")({ filter: d }), p();
      };
    });
  })() : (() => {
    let l = !0, u = () => l = !1;
    return (async () => {
      try {
        const { unsubscribe: d } = await e.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(p) {
            if (!l)
              return;
            const f = p.result;
            r([f]);
          },
          onError(p) {
            n == null || n(p);
          }
        });
        u = d, l || u();
      } catch (d) {
        n == null || n(d);
      }
    })(), () => u();
  })();
}
async function xy(e) {
  var n;
  return ((n = e.account) == null ? void 0 : n.type) === "local" ? [e.account.address] : (await e.request({ method: "eth_accounts" }, { dedupe: !0 })).map((r) => An(r));
}
async function Cy(e) {
  return await e.request({ method: "wallet_getPermissions" }, { dedupe: !0 });
}
const Ur = /* @__PURE__ */ new zs(8192);
function Ay(e, { enabled: t = !0, id: n }) {
  if (!t || !n)
    return e();
  if (Ur.get(n))
    return Ur.get(n);
  const r = e().finally(() => Ur.delete(n));
  return Ur.set(n, r), r;
}
function dt(e, { delay: t = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {}) {
  return new Promise((s, o) => {
    const a = async ({ count: i = 0 } = {}) => {
      const c = async ({ error: l }) => {
        const u = typeof t == "function" ? t({ count: i, error: l }) : t;
        u && await Ss(u), a({ count: i + 1 });
      };
      try {
        const l = await e();
        s(l);
      } catch (l) {
        if (i < n && await r({ count: i, error: l }))
          return c({ error: l });
        o(l);
      }
    };
    a();
  });
}
function vy(e, t = {}) {
  return async (n, r = {}) => {
    const { dedupe: s = !1, retryDelay: o = 150, retryCount: a = 3, uid: i } = {
      ...t,
      ...r
    }, c = s ? Y(Ke(`${i}.${re(n)}`)) : void 0;
    return Ay(() => dt(async () => {
      try {
        return await e(n);
      } catch (l) {
        const u = l;
        switch (u.code) {
          case cn.code:
            throw new cn(u);
          case ln.code:
            throw new ln(u);
          case un.code:
            throw new un(u, { method: n.method });
          case dn.code:
            throw new dn(u);
          case it.code:
            throw new it(u);
          case ct.code:
            throw new ct(u);
          case pn.code:
            throw new pn(u);
          case ye.code:
            throw new ye(u);
          case Ut.code:
            throw new Ut(u);
          case fn.code:
            throw new fn(u, {
              method: n.method
            });
          case Pt.code:
            throw new Pt(u);
          case hn.code:
            throw new hn(u);
          case D.code:
            throw new D(u);
          case mn.code:
            throw new mn(u);
          case bn.code:
            throw new bn(u);
          case lt.code:
            throw new lt(u);
          case Nt.code:
            throw new Nt(u);
          case J.code:
            throw new J(u);
          case 5e3:
            throw new D(u);
          default:
            throw l instanceof S ? l : new Bu(u);
        }
      }
    }, {
      delay: ({ count: l, error: u }) => {
        var d;
        if (u && u instanceof ot) {
          const p = (d = u == null ? void 0 : u.headers) == null ? void 0 : d.get("Retry-After");
          if (p != null && p.match(/\d/))
            return Number.parseInt(p) * 1e3;
        }
        return ~~(1 << l) * o;
      },
      retryCount: a,
      shouldRetry: ({ error: l }) => Ey(l)
    }), { enabled: s, id: c });
  };
}
function Ey(e) {
  return "code" in e && typeof e.code == "number" ? e.code === -1 || e.code === Pt.code || e.code === it.code : e instanceof ot && e.status ? e.status === 403 || e.status === 408 || e.status === 413 || e.status === 429 || e.status === 500 || e.status === 502 || e.status === 503 || e.status === 504 : !0;
}
class ky extends S {
  constructor({ callbackSelector: t, cause: n, data: r, extraData: s, sender: o, urls: a }) {
    var i;
    super(n.shortMessage || "An error occurred while fetching for an offchain result.", {
      cause: n,
      metaMessages: [
        ...n.metaMessages || [],
        (i = n.metaMessages) != null && i.length ? "" : [],
        "Offchain Gateway Call:",
        a && [
          "  Gateway URL(s):",
          ...a.map((c) => `    ${zt(c)}`)
        ],
        `  Sender: ${o}`,
        `  Data: ${r}`,
        `  Callback selector: ${t}`,
        `  Extra data: ${s}`
      ].flat(),
      name: "OffchainLookupError"
    });
  }
}
class Iy extends S {
  constructor({ result: t, url: n }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", {
      metaMessages: [
        `Gateway URL: ${zt(n)}`,
        `Response: ${re(t)}`
      ],
      name: "OffchainLookupResponseMalformedError"
    });
  }
}
class Sy extends S {
  constructor({ sender: t, to: n }) {
    super("Reverted sender address does not match target contract address (`to`).", {
      metaMessages: [
        `Contract address: ${n}`,
        `OffchainLookup sender address: ${t}`
      ],
      name: "OffchainLookupSenderMismatchError"
    });
  }
}
const Qd = "0x556f1830", Mi = {
  name: "OffchainLookup",
  type: "error",
  inputs: [
    {
      name: "sender",
      type: "address"
    },
    {
      name: "urls",
      type: "string[]"
    },
    {
      name: "callData",
      type: "bytes"
    },
    {
      name: "callbackFunction",
      type: "bytes4"
    },
    {
      name: "extraData",
      type: "bytes"
    }
  ]
};
async function Vd(e, { blockNumber: t, blockTag: n, data: r, to: s }) {
  const { args: o } = yi({
    data: r,
    abi: [Mi]
  }), [a, i, c, l, u] = o, { ccipRead: d } = e, p = d && typeof (d == null ? void 0 : d.request) == "function" ? d.request : Bs;
  try {
    if (!yt(s, a))
      throw new Sy({ sender: a, to: s });
    const f = await p({ data: c, sender: a, urls: i }), { data: m } = await bt(e, {
      blockNumber: t,
      blockTag: n,
      data: ke([
        l,
        ze([{ type: "bytes" }, { type: "bytes" }], [f, u])
      ]),
      to: s
    });
    return m;
  } catch (f) {
    throw new ky({
      callbackSelector: l,
      cause: f,
      data: r,
      extraData: u,
      sender: a,
      urls: i
    });
  }
}
async function Bs({ data: e, sender: t, urls: n }) {
  var s;
  let r = new Error("An unknown error occurred.");
  for (let o = 0; o < n.length; o++) {
    const a = n[o], i = a.includes("{data}") ? "GET" : "POST", c = i === "POST" ? { data: e, sender: t } : void 0;
    try {
      const l = await fetch(a.replace("{sender}", t).replace("{data}", e), {
        body: JSON.stringify(c),
        method: i
      });
      let u;
      if ((s = l.headers.get("Content-Type")) != null && s.startsWith("application/json") ? u = (await l.json()).data : u = await l.text(), !l.ok) {
        r = new ot({
          body: c,
          details: u != null && u.error ? re(u.error) : l.statusText,
          headers: l.headers,
          status: l.status,
          url: a
        });
        continue;
      }
      if (!_(u)) {
        r = new Iy({
          result: u,
          url: a
        });
        continue;
      }
      return u;
    } catch (l) {
      r = new ot({
        body: c,
        details: l.message,
        url: a
      });
    }
  }
  throw r;
}
const By = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ccipRequest: Bs,
  offchainLookup: Vd,
  offchainLookupAbiItem: Mi,
  offchainLookupSignature: Qd
}, Symbol.toStringTag, { value: "Module" }));
function x(e) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...e
  };
}
function Ty({ chains: e, id: t }) {
  return e.find((n) => n.id === t);
}
const Uy = /^(.*)\[([0-9]*)\]$/, Wd = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, Zd = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function wt(e, { errorInstance: t = new Error("timed out"), timeout: n, signal: r }) {
  return new Promise((s, o) => {
    (async () => {
      let a;
      try {
        const i = new AbortController();
        n > 0 && (a = setTimeout(() => {
          r ? i.abort() : o(t);
        }, n)), s(await e({ signal: (i == null ? void 0 : i.signal) || null }));
      } catch (i) {
        (i == null ? void 0 : i.name) === "AbortError" && o(t), o(i);
      } finally {
        clearTimeout(a);
      }
    })();
  });
}
function Py() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    }
  };
}
const ba = /* @__PURE__ */ Py();
function Jd(e, t = {}) {
  return {
    async request(n) {
      var d;
      const { body: r, onRequest: s = t.onRequest, onResponse: o = t.onResponse, timeout: a = t.timeout ?? 1e4 } = n, i = {
        ...t.fetchOptions ?? {},
        ...n.fetchOptions ?? {}
      }, { headers: c, method: l, signal: u } = i;
      try {
        const p = await wt(async ({ signal: m }) => {
          const h = {
            ...i,
            body: Array.isArray(r) ? re(r.map((w) => ({
              jsonrpc: "2.0",
              id: w.id ?? ba.take(),
              ...w
            }))) : re({
              jsonrpc: "2.0",
              id: r.id ?? ba.take(),
              ...r
            }),
            headers: {
              "Content-Type": "application/json",
              ...c
            },
            method: l || "POST",
            signal: u || (a > 0 ? m : null)
          }, b = new Request(e, h);
          return s && await s(b), await fetch(e, h);
        }, {
          errorInstance: new Cs({ body: r, url: e }),
          timeout: a,
          signal: !0
        });
        o && await o(p);
        let f;
        if ((d = p.headers.get("Content-Type")) != null && d.startsWith("application/json") ? f = await p.json() : (f = await p.text(), f = JSON.parse(f || "{}")), !p.ok)
          throw new ot({
            body: r,
            details: re(f.error) || p.statusText,
            headers: p.headers,
            status: p.status,
            url: e
          });
        return f;
      } catch (p) {
        throw p instanceof ot || p instanceof Cs ? p : new ot({
          body: r,
          cause: p,
          url: e
        });
      }
    }
  };
}
const Oo = /* @__PURE__ */ new Map();
async function Ny(e) {
  const { getSocket: t, keepAlive: n = !0, key: r = "socket", reconnect: s = !0, url: o } = e, { interval: a = 3e4 } = typeof n == "object" ? n : {}, { attempts: i = 5, delay: c = 2e3 } = typeof s == "object" ? s : {};
  let l = Oo.get(`${r}:${o}`);
  if (l)
    return l;
  let u = 0;
  const { schedule: d } = xi({
    id: `${r}:${o}`,
    fn: async () => {
      const m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
      let b, y, w;
      async function v() {
        const E = await t({
          onClose() {
            var g, C;
            for (const A of m.values())
              (g = A.onError) == null || g.call(A, new Zn({ url: o }));
            for (const A of h.values())
              (C = A.onError) == null || C.call(A, new Zn({ url: o }));
            m.clear(), h.clear(), s && u < i && setTimeout(async () => {
              u++, await v().catch(console.error);
            }, c);
          },
          onError(g) {
            var C, A;
            b = g;
            for (const k of m.values())
              (C = k.onError) == null || C.call(k, b);
            for (const k of h.values())
              (A = k.onError) == null || A.call(k, b);
            m.clear(), h.clear(), s && u < i && setTimeout(async () => {
              u++, await v().catch(console.error);
            }, c);
          },
          onOpen() {
            b = void 0, u = 0;
          },
          onResponse(g) {
            const C = g.method === "eth_subscription", A = C ? g.params.subscription : g.id, k = C ? h : m, I = k.get(A);
            I && I.onResponse(g), C || k.delete(A);
          }
        });
        return y = E, n && (w && clearInterval(w), w = setInterval(() => {
          var g;
          return (g = y.ping) == null ? void 0 : g.call(y);
        }, a)), E;
      }
      return await v(), b = void 0, l = {
        close() {
          w && clearInterval(w), y.close(), Oo.delete(`${r}:${o}`);
        },
        get socket() {
          return y;
        },
        request({ body: E, onError: g, onResponse: C }) {
          b && g && g(b);
          const A = E.id ?? ba.take(), k = (I) => {
            var P;
            typeof I.id == "number" && A !== I.id || (E.method === "eth_subscribe" && typeof I.result == "string" && h.set(I.result, {
              onResponse: k,
              onError: g
            }), E.method === "eth_unsubscribe" && h.delete((P = E.params) == null ? void 0 : P[0]), C(I));
          };
          m.set(A, { onResponse: k, onError: g });
          try {
            y.request({
              body: {
                jsonrpc: "2.0",
                id: A,
                ...E
              }
            });
          } catch (I) {
            g == null || g(I);
          }
        },
        requestAsync({ body: E, timeout: g = 1e4 }) {
          return wt(() => new Promise((C, A) => this.request({
            body: E,
            onError: A,
            onResponse: C
          })), {
            errorInstance: new Cs({ body: E, url: o }),
            timeout: g
          });
        },
        requests: m,
        subscriptions: h,
        url: o
      }, Oo.set(`${r}:${o}`, l), [l];
    }
  }), [p, [f]] = await d();
  return f;
}
async function as(e, t = {}) {
  const { keepAlive: n, reconnect: r } = t;
  return Ny({
    async getSocket({ onClose: s, onError: o, onOpen: a, onResponse: i }) {
      const c = await import("./native-t-svWl2o.js").then((f) => f.WebSocket), l = new c(e);
      function u() {
        s(), l.removeEventListener("close", u), l.removeEventListener("message", d), l.removeEventListener("error", o), l.removeEventListener("open", a);
      }
      function d({ data: f }) {
        i(JSON.parse(f));
      }
      l.addEventListener("close", u), l.addEventListener("message", d), l.addEventListener("error", o), l.addEventListener("open", a), l.readyState === c.CONNECTING && await new Promise((f, m) => {
        l && (l.onopen = f, l.onerror = m);
      });
      const { close: p } = l;
      return Object.assign(l, {
        close() {
          p.bind(l)(), s();
        },
        ping() {
          try {
            if (l.readyState === l.CLOSED || l.readyState === l.CLOSING)
              throw new ia({
                url: l.url,
                cause: new Zn({ url: l.url })
              });
            const f = {
              jsonrpc: "2.0",
              method: "net_version",
              params: []
            };
            l.send(JSON.stringify(f));
          } catch (f) {
            o(f);
          }
        },
        request({ body: f }) {
          if (l.readyState === l.CLOSED || l.readyState === l.CLOSING)
            throw new ia({
              body: f,
              url: l.url,
              cause: new Zn({ url: l.url })
            });
          return l.send(JSON.stringify(f));
        }
      });
    },
    keepAlive: n,
    reconnect: r,
    url: e
  });
}
function My(e, { body: t, onError: n, onResponse: r }) {
  return e.request({
    body: t,
    onError: n,
    onResponse: r
  }), e;
}
async function Fy(e, { body: t, timeout: n = 1e4 }) {
  return e.requestAsync({
    body: t,
    timeout: n
  });
}
async function Dy(e) {
  const t = await as(e);
  return Object.assign(t.socket, {
    requests: t.requests,
    subscriptions: t.subscriptions
  });
}
const Lo = {
  /**
   * @deprecated use `getHttpRpcClient` instead.
   *
   * ```diff
   * -import { rpc } from 'viem/utils'
   * +import { getHttpRpcClient } from 'viem/utils'
   *
   * -rpc.http(url, params)
   * +const httpClient = getHttpRpcClient(url)
   * +httpClient.request(params)
   * ```
   */
  http(e, t) {
    return Jd(e).request(t);
  },
  /**
   * @deprecated use `getWebSocketRpcClient` instead.
   *
   * ```diff
   * -import { rpc } from 'viem/utils'
   * +import { getWebSocketRpcClient } from 'viem/utils'
   *
   * -rpc.webSocket(url, params)
   * +const webSocketClient = getWebSocketRpcClient(url)
   * +webSocketClient.request(params)
   * ```
   */
  webSocket: My,
  /**
   * @deprecated use `getWebSocketRpcClient` instead.
   *
   * ```diff
   * -import { rpc } from 'viem/utils'
   * +import { getWebSocketRpcClient } from 'viem/utils'
   *
   * -const response = await rpc.webSocketAsync(url, params)
   * +const webSocketClient = getWebSocketRpcClient(url)
   * +const response = await webSocketClient.requestAsync(params)
   * ```
   */
  webSocketAsync: Fy
};
function Fi(e) {
  const { domain: t = {}, message: n, primaryType: r } = e, s = {
    EIP712Domain: lo({ domain: t }),
    ...e.types
  };
  Ri({
    domain: t,
    message: n,
    primaryType: r,
    types: s
  });
  const o = ["0x1901"];
  return t && o.push(Di({
    domain: t,
    types: s
  })), r !== "EIP712Domain" && o.push(Xd({
    data: n,
    primaryType: r,
    types: s
  })), Y(ke(o));
}
function Di({ domain: e, types: t }) {
  return Xd({
    data: e,
    primaryType: "EIP712Domain",
    types: t
  });
}
function Xd({ data: e, primaryType: t, types: n }) {
  const r = Yd({
    data: e,
    primaryType: t,
    types: n
  });
  return Y(r);
}
function Yd({ data: e, primaryType: t, types: n }) {
  const r = [{ type: "bytes32" }], s = [Ry({ primaryType: t, types: n })];
  for (const o of n[t]) {
    const [a, i] = tp({
      types: n,
      name: o.name,
      type: o.type,
      value: e[o.name]
    });
    r.push(a), s.push(i);
  }
  return ze(r, s);
}
function Ry({ primaryType: e, types: t }) {
  const n = M(Oy({ primaryType: e, types: t }));
  return Y(n);
}
function Oy({ primaryType: e, types: t }) {
  let n = "";
  const r = ep({ primaryType: e, types: t });
  r.delete(e);
  const s = [e, ...Array.from(r).sort()];
  for (const o of s)
    n += `${o}(${t[o].map(({ name: a, type: i }) => `${i} ${a}`).join(",")})`;
  return n;
}
function ep({ primaryType: e, types: t }, n = /* @__PURE__ */ new Set()) {
  const r = e.match(/^\w*/u), s = r == null ? void 0 : r[0];
  if (n.has(s) || t[s] === void 0)
    return n;
  n.add(s);
  for (const o of t[s])
    ep({ primaryType: o.type, types: t }, n);
  return n;
}
function tp({ types: e, name: t, type: n, value: r }) {
  if (e[n] !== void 0)
    return [
      { type: "bytes32" },
      Y(Yd({ data: r, primaryType: n, types: e }))
    ];
  if (n === "bytes")
    return r = `0x${(r.length % 2 ? "0" : "") + r.slice(2)}`, [{ type: "bytes32" }, Y(r)];
  if (n === "string")
    return [{ type: "bytes32" }, Y(M(r))];
  if (n.lastIndexOf("]") === n.length - 1) {
    const s = n.slice(0, n.lastIndexOf("[")), o = r.map((a) => tp({
      name: t,
      type: s,
      types: e,
      value: a
    }));
    return [
      { type: "bytes32" },
      Y(ze(o.map(([a]) => a), o.map(([, a]) => a)))
    ];
  }
  return [{ type: n }, r];
}
function np(e) {
  const { domain: t, message: n, primaryType: r, types: s } = e, o = (c, l) => {
    const u = { ...l };
    for (const d of c) {
      const { name: p, type: f } = d;
      f === "address" && (u[p] = u[p].toLowerCase());
    }
    return u;
  }, a = s.EIP712Domain ? t ? o(s.EIP712Domain, t) : {} : {}, i = (() => {
    if (r !== "EIP712Domain")
      return o(s[r], n);
  })();
  return re({ domain: a, message: i, primaryType: r, types: s });
}
function Ri(e) {
  const { domain: t, message: n, primaryType: r, types: s } = e, o = (a, i) => {
    for (const c of a) {
      const { name: l, type: u } = c, d = i[l], p = u.match(Zd);
      if (p && (typeof d == "number" || typeof d == "bigint")) {
        const [h, b, y] = p;
        U(d, {
          signed: b === "int",
          size: Number.parseInt(y) / 8
        });
      }
      if (u === "address" && typeof d == "string" && !Z(d))
        throw new ee({ address: d });
      const f = u.match(Wd);
      if (f) {
        const [h, b] = f;
        if (b && X(d) !== Number.parseInt(b))
          throw new Ha({
            expectedSize: Number.parseInt(b),
            givenSize: X(d)
          });
      }
      const m = s[u];
      m && o(m, d);
    }
  };
  s.EIP712Domain && t && o(s.EIP712Domain, t), r !== "EIP712Domain" && o(s[r], n);
}
function lo({ domain: e }) {
  return [
    typeof (e == null ? void 0 : e.name) == "string" && { name: "name", type: "string" },
    (e == null ? void 0 : e.version) && { name: "version", type: "string" },
    typeof (e == null ? void 0 : e.chainId) == "number" && {
      name: "chainId",
      type: "uint256"
    },
    (e == null ? void 0 : e.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (e == null ? void 0 : e.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function Ly({ domain: e }) {
  return Di({
    domain: e,
    types: {
      EIP712Domain: lo({ domain: e })
    }
  });
}
function zy(e) {
  const { abi: t, data: n } = e, r = Qe(n, 0, 4), s = t.find((o) => o.type === "function" && r === Mt(De(o)));
  if (!s)
    throw new ru(r, {
      docsPath: "/docs/contract/decodeFunctionData"
    });
  return {
    functionName: s.name,
    args: "inputs" in s && s.inputs && s.inputs.length > 0 ? ht(s.inputs, Qe(n, 4)) : void 0
  };
}
const zo = "/docs/contract/encodeErrorResult";
function _y(e) {
  const { abi: t, errorName: n, args: r } = e;
  let s = t[0];
  if (n) {
    const c = Ze({ abi: t, args: r, name: n });
    if (!c)
      throw new sa(n, { docsPath: zo });
    s = c;
  }
  if (s.type !== "error")
    throw new sa(void 0, { docsPath: zo });
  const o = De(s), a = Mt(o);
  let i = "0x";
  if (r && r.length > 0) {
    if (!s.inputs)
      throw new tu(s.name, { docsPath: zo });
    i = ze(s.inputs, r);
  }
  return ue([a, i]);
}
const _o = "/docs/contract/encodeFunctionResult";
function Hy(e) {
  const { abi: t, functionName: n, result: r } = e;
  let s = t[0];
  if (n) {
    const a = Ze({ abi: t, name: n });
    if (!a)
      throw new Bt(n, { docsPath: _o });
    s = a;
  }
  if (s.type !== "function")
    throw new Bt(void 0, { docsPath: _o });
  if (!s.outputs)
    throw new _a(s.name, { docsPath: _o });
  let o = Array.isArray(r) ? r : [r];
  return s.outputs.length === 0 && !o[0] && (o = []), ze(s.outputs, o);
}
function $y(e, t) {
  if (e.length !== t.length)
    throw new Oa({
      expectedLength: e.length,
      givenLength: t.length
    });
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r], o = t[r];
    n.push(rp(s, o));
  }
  return ue(n);
}
function rp(e, t, n = !1) {
  if (e === "address") {
    const a = t;
    if (!Z(a))
      throw new ee({ address: a });
    return Ee(a.toLowerCase(), {
      size: n ? 32 : null
    });
  }
  if (e === "string")
    return Ke(t);
  if (e === "bytes")
    return t;
  if (e === "bool")
    return Ee(Os(t), { size: n ? 32 : 1 });
  const r = e.match(Zd);
  if (r) {
    const [a, i, c = "256"] = r, l = Number.parseInt(c) / 8;
    return U(t, {
      size: n ? 32 : l,
      signed: i === "int"
    });
  }
  const s = e.match(Wd);
  if (s) {
    const [a, i] = s;
    if (Number.parseInt(i) !== (t.length - 2) / 2)
      throw new Ha({
        expectedSize: Number.parseInt(i),
        givenSize: (t.length - 2) / 2
      });
    return Ee(t, { dir: "right", size: n ? 32 : null });
  }
  const o = e.match(Uy);
  if (o && Array.isArray(t)) {
    const [a, i] = o, c = [];
    for (let l = 0; l < t.length; l++)
      c.push(rp(i, t[l], !0));
    return c.length === 0 ? "0x" : ue(c);
  }
  throw new cu(e);
}
function ya(e) {
  return !e || typeof e != "object" || !("BYTES_PER_ELEMENT" in e) ? !1 : e.BYTES_PER_ELEMENT === 1 && e.constructor.name === "Uint8Array";
}
function jy(e) {
  return e.opcode === "CREATE2" ? op(e) : sp(e);
}
function sp(e) {
  const t = oe(H(e.from));
  let n = oe(e.nonce);
  return n[0] === 0 && (n = new Uint8Array([])), H(`0x${Y(we([t, n], "bytes")).slice(26)}`);
}
function op(e) {
  const t = oe(H(e.from)), n = Ee(ya(e.salt) ? e.salt : oe(e.salt), {
    size: 32
  }), r = "bytecodeHash" in e ? ya(e.bytecodeHash) ? e.bytecodeHash : oe(e.bytecodeHash) : Y(e.bytecode, "bytes");
  return H(Qe(Y(ke([oe("0xff"), t, n, r])), 12));
}
function Oi(e, t = "hex") {
  const n = (() => {
    if (typeof e == "string") {
      if (e.length > 3 && e.length % 2 !== 0)
        throw new Ql(e);
      return ne(e);
    }
    return e;
  })(), r = an(n, {
    recursiveReadLimit: Number.POSITIVE_INFINITY
  });
  return ap(r, t);
}
function ap(e, t = "hex") {
  if (e.bytes.length === 0)
    return t === "hex" ? W(e.bytes) : e.bytes;
  const n = e.readByte();
  if (n < 128 && e.decrementPosition(1), n < 192) {
    const s = Gc(e, n, 128), o = e.readBytes(s);
    return t === "hex" ? W(o) : o;
  }
  const r = Gc(e, n, 192);
  return qy(e, r, t);
}
function Gc(e, t, n) {
  if (n === 128 && t < 128)
    return 1;
  if (t <= n + 55)
    return t - n;
  if (t === n + 55 + 1)
    return e.readUint8();
  if (t === n + 55 + 2)
    return e.readUint16();
  if (t === n + 55 + 3)
    return e.readUint24();
  if (t === n + 55 + 4)
    return e.readUint32();
  throw new S("Invalid RLP prefix");
}
function qy(e, t, n) {
  const r = e.position, s = [];
  for (; e.position - r < t; )
    s.push(ap(e, n));
  return s;
}
function ip(e) {
  return _(e) && X(e) === 32;
}
const Gy = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]), cp = /* @__PURE__ */ new Uint8Array(new Array(16).fill(0).map((e, t) => t)), Ky = /* @__PURE__ */ cp.map((e) => (9 * e + 5) % 16);
let Li = [cp], zi = [Ky];
for (let e = 0; e < 4; e++)
  for (let t of [Li, zi])
    t.push(t[e].map((n) => Gy[n]));
const lp = /* @__PURE__ */ [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((e) => new Uint8Array(e)), Qy = /* @__PURE__ */ Li.map((e, t) => e.map((n) => lp[t][n])), Vy = /* @__PURE__ */ zi.map((e, t) => e.map((n) => lp[t][n])), Wy = /* @__PURE__ */ new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]), Zy = /* @__PURE__ */ new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
function Kc(e, t, n, r) {
  return e === 0 ? t ^ n ^ r : e === 1 ? t & n | ~t & r : e === 2 ? (t | ~n) ^ r : e === 3 ? t & r | n & ~r : t ^ (n | ~r);
}
const Pr = /* @__PURE__ */ new Uint32Array(16);
class Jy extends _u {
  constructor() {
    super(64, 20, 8, !0), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
  }
  get() {
    const { h0: t, h1: n, h2: r, h3: s, h4: o } = this;
    return [t, n, r, s, o];
  }
  set(t, n, r, s, o) {
    this.h0 = t | 0, this.h1 = n | 0, this.h2 = r | 0, this.h3 = s | 0, this.h4 = o | 0;
  }
  process(t, n) {
    for (let f = 0; f < 16; f++, n += 4)
      Pr[f] = t.getUint32(n, !0);
    let r = this.h0 | 0, s = r, o = this.h1 | 0, a = o, i = this.h2 | 0, c = i, l = this.h3 | 0, u = l, d = this.h4 | 0, p = d;
    for (let f = 0; f < 5; f++) {
      const m = 4 - f, h = Wy[f], b = Zy[f], y = Li[f], w = zi[f], v = Qy[f], E = Vy[f];
      for (let g = 0; g < 16; g++) {
        const C = Tr(r + Kc(f, o, i, l) + Pr[y[g]] + h, v[g]) + d | 0;
        r = d, d = l, l = Tr(i, 10) | 0, i = o, o = C;
      }
      for (let g = 0; g < 16; g++) {
        const C = Tr(s + Kc(m, a, c, u) + Pr[w[g]] + b, E[g]) + p | 0;
        s = p, p = u, u = Tr(c, 10) | 0, c = a, a = C;
      }
    }
    this.set(this.h1 + i + u | 0, this.h2 + l + p | 0, this.h3 + d + s | 0, this.h4 + r + a | 0, this.h0 + o + c | 0);
  }
  roundClean() {
    Pr.fill(0);
  }
  destroy() {
    this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
}
const Xy = /* @__PURE__ */ ja(() => new Jy());
function Yy(e, t) {
  const n = t || "hex", r = Xy(_(e, { strict: !1 }) ? oe(e) : e);
  return n === "bytes" ? r : M(r);
}
const up = `Ethereum Signed Message:
`;
function dp(e) {
  const t = typeof e == "string" ? Ke(e) : typeof e.raw == "string" ? e.raw : W(e.raw), n = Ke(`${up}${X(t)}`);
  return ke([n, t]);
}
function uo(e, t) {
  return Y(dp(e), t);
}
async function pp({ message: e, signature: t }) {
  return Ot({ hash: uo(e), signature: t });
}
async function fp(e) {
  const { domain: t, message: n, primaryType: r, signature: s, types: o } = e;
  return Ot({
    hash: Fi({
      domain: t,
      message: n,
      primaryType: r,
      types: o
    }),
    signature: s
  });
}
async function e1({ address: e, hash: t, signature: n }) {
  return yt(H(e), await Ot({ hash: t, signature: n }));
}
async function t1({ address: e, message: t, signature: n }) {
  return yt(H(e), await pp({ message: t, signature: n }));
}
async function n1(e) {
  const { address: t, domain: n, message: r, primaryType: s, signature: o, types: a } = e;
  return yt(H(t), await fp({
    domain: n,
    message: r,
    primaryType: s,
    signature: o,
    types: a
  }));
}
const hp = "0x6492649264926492649264926492649264926492649264926492649264926492", r1 = "0x0000000000000000000000000000000000000000000000000000000000000000";
function _i(e) {
  return Hs(e, -32) === hp;
}
function s1(e) {
  if (!_i(e))
    return { signature: e };
  const [t, n, r] = ht([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], e);
  return { address: t, data: n, signature: r };
}
function mp(e) {
  const { address: t, data: n, signature: r, to: s = "hex" } = e, o = ue([
    ze([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], [t, n, r]),
    hp
  ]);
  return s === "hex" ? o : ne(o);
}
function bp(e) {
  const t = Hs(e, 0, 1);
  if (t === "0x04")
    return "eip7702";
  if (t === "0x03")
    return "eip4844";
  if (t === "0x02")
    return "eip1559";
  if (t === "0x01")
    return "eip2930";
  if (t !== "0x" && V(t) >= 192)
    return "legacy";
  throw new ku({ serializedType: t });
}
function yp(e) {
  const { authorizationList: t } = e;
  if (t)
    for (const n of t) {
      const { contractAddress: r, chainId: s } = n;
      if (!Z(r))
        throw new ee({ address: r });
      if (s <= 0)
        throw new Lt({ chainId: s });
    }
  gr(e);
}
function wp(e) {
  const { blobVersionedHashes: t } = e;
  if (t) {
    if (t.length === 0)
      throw new Gu();
    for (const n of t) {
      const r = X(n), s = V(Qe(n, 0, 1));
      if (r !== 32)
        throw new z0({ hash: n, size: r });
      if (s !== qu)
        throw new _0({
          hash: n,
          version: s
        });
    }
  }
  gr(e);
}
function gr(e) {
  const { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: r, to: s } = e;
  if (t <= 0)
    throw new Lt({ chainId: t });
  if (s && !Z(s))
    throw new ee({ address: s });
  if (r && r > kn)
    throw new Ve({ maxFeePerGas: r });
  if (n && r && n > r)
    throw new Tt({ maxFeePerGas: r, maxPriorityFeePerGas: n });
}
function Hi(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: o } = e;
  if (t <= 0)
    throw new Lt({ chainId: t });
  if (o && !Z(o))
    throw new ee({ address: o });
  if (n || s)
    throw new S("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (r && r > kn)
    throw new Ve({ maxFeePerGas: r });
}
function $i(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: o } = e;
  if (o && !Z(o))
    throw new ee({ address: o });
  if (typeof t < "u" && t <= 0)
    throw new Lt({ chainId: t });
  if (n || s)
    throw new S("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (r && r > kn)
    throw new Ve({ maxFeePerGas: r });
}
function gp(e) {
  const t = bp(e);
  return t === "eip1559" ? i1(e) : t === "eip2930" ? c1(e) : t === "eip4844" ? a1(e) : t === "eip7702" ? o1(e) : l1(e);
}
function o1(e) {
  const t = po(e), [n, r, s, o, a, i, c, l, u, d, p, f, m] = t;
  if (t.length !== 10 && t.length !== 13)
    throw new En({
      attributes: {
        chainId: n,
        nonce: r,
        maxPriorityFeePerGas: s,
        maxFeePerGas: o,
        gas: a,
        to: i,
        value: c,
        data: l,
        accessList: u,
        authorizationList: d,
        ...t.length > 9 ? {
          v: p,
          r: f,
          s: m
        } : {}
      },
      serializedTransaction: e,
      type: "eip7702"
    });
  const h = {
    chainId: V(n),
    type: "eip7702"
  };
  return _(i) && i !== "0x" && (h.to = i), _(a) && a !== "0x" && (h.gas = L(a)), _(l) && l !== "0x" && (h.data = l), _(r) && r !== "0x" && (h.nonce = V(r)), _(c) && c !== "0x" && (h.value = L(c)), _(o) && o !== "0x" && (h.maxFeePerGas = L(o)), _(s) && s !== "0x" && (h.maxPriorityFeePerGas = L(s)), u.length !== 0 && u !== "0x" && (h.accessList = fo(u)), d.length !== 0 && d !== "0x" && (h.authorizationList = u1(d)), yp(h), { ...t.length === 13 ? xr(t) : void 0, ...h };
}
function a1(e) {
  const t = po(e), n = t.length === 4, r = n ? t[0] : t, s = n ? t.slice(1) : [], [o, a, i, c, l, u, d, p, f, m, h, b, y, w] = r, [v, E, g] = s;
  if (!(r.length === 11 || r.length === 14))
    throw new En({
      attributes: {
        chainId: o,
        nonce: a,
        maxPriorityFeePerGas: i,
        maxFeePerGas: c,
        gas: l,
        to: u,
        value: d,
        data: p,
        accessList: f,
        ...r.length > 9 ? {
          v: b,
          r: y,
          s: w
        } : {}
      },
      serializedTransaction: e,
      type: "eip4844"
    });
  const C = {
    blobVersionedHashes: h,
    chainId: V(o),
    type: "eip4844"
  };
  return _(u) && u !== "0x" && (C.to = u), _(l) && l !== "0x" && (C.gas = L(l)), _(p) && p !== "0x" && (C.data = p), _(a) && a !== "0x" && (C.nonce = V(a)), _(d) && d !== "0x" && (C.value = L(d)), _(m) && m !== "0x" && (C.maxFeePerBlobGas = L(m)), _(c) && c !== "0x" && (C.maxFeePerGas = L(c)), _(i) && i !== "0x" && (C.maxPriorityFeePerGas = L(i)), f.length !== 0 && f !== "0x" && (C.accessList = fo(f)), v && E && g && (C.sidecars = Ys({
    blobs: v,
    commitments: E,
    proofs: g
  })), wp(C), { ...r.length === 14 ? xr(r) : void 0, ...C };
}
function i1(e) {
  const t = po(e), [n, r, s, o, a, i, c, l, u, d, p, f] = t;
  if (!(t.length === 9 || t.length === 12))
    throw new En({
      attributes: {
        chainId: n,
        nonce: r,
        maxPriorityFeePerGas: s,
        maxFeePerGas: o,
        gas: a,
        to: i,
        value: c,
        data: l,
        accessList: u,
        ...t.length > 9 ? {
          v: d,
          r: p,
          s: f
        } : {}
      },
      serializedTransaction: e,
      type: "eip1559"
    });
  const m = {
    chainId: V(n),
    type: "eip1559"
  };
  return _(i) && i !== "0x" && (m.to = i), _(a) && a !== "0x" && (m.gas = L(a)), _(l) && l !== "0x" && (m.data = l), _(r) && r !== "0x" && (m.nonce = V(r)), _(c) && c !== "0x" && (m.value = L(c)), _(o) && o !== "0x" && (m.maxFeePerGas = L(o)), _(s) && s !== "0x" && (m.maxPriorityFeePerGas = L(s)), u.length !== 0 && u !== "0x" && (m.accessList = fo(u)), gr(m), { ...t.length === 12 ? xr(t) : void 0, ...m };
}
function c1(e) {
  const t = po(e), [n, r, s, o, a, i, c, l, u, d, p] = t;
  if (!(t.length === 8 || t.length === 11))
    throw new En({
      attributes: {
        chainId: n,
        nonce: r,
        gasPrice: s,
        gas: o,
        to: a,
        value: i,
        data: c,
        accessList: l,
        ...t.length > 8 ? {
          v: u,
          r: d,
          s: p
        } : {}
      },
      serializedTransaction: e,
      type: "eip2930"
    });
  const f = {
    chainId: V(n),
    type: "eip2930"
  };
  return _(a) && a !== "0x" && (f.to = a), _(o) && o !== "0x" && (f.gas = L(o)), _(c) && c !== "0x" && (f.data = c), _(r) && r !== "0x" && (f.nonce = V(r)), _(i) && i !== "0x" && (f.value = L(i)), _(s) && s !== "0x" && (f.gasPrice = L(s)), l.length !== 0 && l !== "0x" && (f.accessList = fo(l)), Hi(f), { ...t.length === 11 ? xr(t) : void 0, ...f };
}
function l1(e) {
  const t = Oi(e, "hex"), [n, r, s, o, a, i, c, l, u] = t;
  if (!(t.length === 6 || t.length === 9))
    throw new En({
      attributes: {
        nonce: n,
        gasPrice: r,
        gas: s,
        to: o,
        value: a,
        data: i,
        ...t.length > 6 ? {
          v: c,
          r: l,
          s: u
        } : {}
      },
      serializedTransaction: e,
      type: "legacy"
    });
  const d = {
    type: "legacy"
  };
  if (_(o) && o !== "0x" && (d.to = o), _(s) && s !== "0x" && (d.gas = L(s)), _(i) && i !== "0x" && (d.data = i), _(n) && n !== "0x" && (d.nonce = V(n)), _(a) && a !== "0x" && (d.value = L(a)), _(r) && r !== "0x" && (d.gasPrice = L(r)), $i(d), t.length === 6)
    return d;
  const p = _(c) && c !== "0x" ? L(c) : 0n;
  if (u === "0x" && l === "0x")
    return p > 0 && (d.chainId = Number(p)), d;
  const f = p, m = Number((f - 35n) / 2n);
  if (m > 0)
    d.chainId = m;
  else if (f !== 27n && f !== 28n)
    throw new ei({ v: f });
  return d.v = f, d.s = u, d.r = l, d.yParity = f % 2n === 0n ? 1 : 0, d;
}
function po(e) {
  return Oi(`0x${e.slice(4)}`, "hex");
}
function fo(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const [r, s] = e[n];
    if (!Z(r, { strict: !1 }))
      throw new ee({ address: r });
    t.push({
      address: r,
      storageKeys: s.map((o) => ip(o) ? o : se(o))
    });
  }
  return t;
}
function u1(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const [r, s, o, a, i, c] = e[n];
    t.push({
      chainId: V(r),
      contractAddress: s,
      nonce: V(o),
      ...xr([a, i, c])
    });
  }
  return t;
}
function xr(e) {
  const t = e.slice(-3), n = t[0] === "0x" || L(t[0]) === 0n ? 27n : 28n;
  return {
    r: Me(t[1], { size: 32 }),
    s: Me(t[2], { size: 32 }),
    v: n,
    yParity: n === 27n ? 0 : 1
  };
}
function d1(e) {
  if (!e || e.length === 0)
    return [];
  const t = [];
  for (const n of e) {
    const { contractAddress: r, chainId: s, nonce: o, ...a } = n;
    t.push([
      M(s),
      r,
      M(o),
      ...Pn({}, a)
    ]);
  }
  return t;
}
function Un(e) {
  if (!e || e.length === 0)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const { address: r, storageKeys: s } = e[n];
    for (let o = 0; o < s.length; o++)
      if (s[o].length - 2 !== 64)
        throw new Iu({ storageKey: s[o] });
    if (!Z(r, { strict: !1 }))
      throw new ee({ address: r });
    t.push([r, s]);
  }
  return t;
}
function ho(e, t) {
  const n = di(e);
  return n === "eip1559" ? h1(e, t) : n === "eip2930" ? m1(e, t) : n === "eip4844" ? f1(e, t) : n === "eip7702" ? p1(e, t) : b1(e, t);
}
function p1(e, t) {
  const { authorizationList: n, chainId: r, gas: s, nonce: o, to: a, value: i, maxFeePerGas: c, maxPriorityFeePerGas: l, accessList: u, data: d } = e;
  yp(e);
  const p = Un(u), f = d1(n);
  return ue([
    "0x04",
    we([
      M(r),
      o ? M(o) : "0x",
      l ? M(l) : "0x",
      c ? M(c) : "0x",
      s ? M(s) : "0x",
      a ?? "0x",
      i ? M(i) : "0x",
      d ?? "0x",
      p,
      f,
      ...Pn(e, t)
    ])
  ]);
}
function f1(e, t) {
  const { chainId: n, gas: r, nonce: s, to: o, value: a, maxFeePerBlobGas: i, maxFeePerGas: c, maxPriorityFeePerGas: l, accessList: u, data: d } = e;
  wp(e);
  let p = e.blobVersionedHashes, f = e.sidecars;
  if (e.blobs && (typeof p > "u" || typeof f > "u")) {
    const v = typeof e.blobs[0] == "string" ? e.blobs : e.blobs.map((C) => W(C)), E = e.kzg, g = Js({
      blobs: v,
      kzg: E
    });
    if (typeof p > "u" && (p = li({
      commitments: g
    })), typeof f > "u") {
      const C = Xs({ blobs: v, commitments: g, kzg: E });
      f = Ys({ blobs: v, commitments: g, proofs: C });
    }
  }
  const m = Un(u), h = [
    M(n),
    s ? M(s) : "0x",
    l ? M(l) : "0x",
    c ? M(c) : "0x",
    r ? M(r) : "0x",
    o ?? "0x",
    a ? M(a) : "0x",
    d ?? "0x",
    m,
    i ? M(i) : "0x",
    p ?? [],
    ...Pn(e, t)
  ], b = [], y = [], w = [];
  if (f)
    for (let v = 0; v < f.length; v++) {
      const { blob: E, commitment: g, proof: C } = f[v];
      b.push(E), y.push(g), w.push(C);
    }
  return ue([
    "0x03",
    // If sidecars are enabled, envelope turns into a "wrapper":
    we(f ? [h, b, y, w] : h)
  ]);
}
function h1(e, t) {
  const { chainId: n, gas: r, nonce: s, to: o, value: a, maxFeePerGas: i, maxPriorityFeePerGas: c, accessList: l, data: u } = e;
  gr(e);
  const d = Un(l), p = [
    M(n),
    s ? M(s) : "0x",
    c ? M(c) : "0x",
    i ? M(i) : "0x",
    r ? M(r) : "0x",
    o ?? "0x",
    a ? M(a) : "0x",
    u ?? "0x",
    d,
    ...Pn(e, t)
  ];
  return ue([
    "0x02",
    we(p)
  ]);
}
function m1(e, t) {
  const { chainId: n, gas: r, data: s, nonce: o, to: a, value: i, accessList: c, gasPrice: l } = e;
  Hi(e);
  const u = Un(c), d = [
    M(n),
    o ? M(o) : "0x",
    l ? M(l) : "0x",
    r ? M(r) : "0x",
    a ?? "0x",
    i ? M(i) : "0x",
    s ?? "0x",
    u,
    ...Pn(e, t)
  ];
  return ue([
    "0x01",
    we(d)
  ]);
}
function b1(e, t) {
  const { chainId: n = 0, gas: r, data: s, nonce: o, to: a, value: i, gasPrice: c } = e;
  $i(e);
  let l = [
    o ? M(o) : "0x",
    c ? M(c) : "0x",
    r ? M(r) : "0x",
    a ?? "0x",
    i ? M(i) : "0x",
    s ?? "0x"
  ];
  if (t) {
    const u = (() => {
      if (t.v >= 35n)
        return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n);
      if (n > 0)
        return BigInt(n * 2) + BigInt(35n + t.v - 27n);
      const f = 27n + (t.v === 27n ? 0n : 1n);
      if (t.v !== f)
        throw new ei({ v: t.v });
      return f;
    })(), d = se(t.r), p = se(t.s);
    l = [
      ...l,
      M(u),
      d === "0x00" ? "0x" : d,
      p === "0x00" ? "0x" : p
    ];
  } else
    n > 0 && (l = [
      ...l,
      M(n),
      "0x",
      "0x"
    ]);
  return we(l);
}
function Pn(e, t) {
  const n = t ?? e, { v: r, yParity: s } = n;
  if (typeof n.r > "u")
    return [];
  if (typeof n.s > "u")
    return [];
  if (typeof r > "u" && typeof s > "u")
    return [];
  const o = se(n.r), a = se(n.s);
  return [typeof s == "number" ? s ? M(1) : "0x" : r === 0n ? "0x" : r === 1n ? M(1) : r === 27n ? "0x" : M(1), o === "0x00" ? "0x" : o, a === "0x00" ? "0x" : a];
}
class xp extends S {
  constructor({ value: t }) {
    super(`Number \`${t}\` is not a valid decimal number.`, {
      name: "InvalidDecimalNumberError"
    });
  }
}
function mo(e, t) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))
    throw new xp({ value: e });
  let [n, r = "0"] = e.split(".");
  const s = n.startsWith("-");
  if (s && (n = n.slice(1)), r = r.replace(/(0+)$/, ""), t === 0)
    Math.round(+`.${r}`) === 1 && (n = `${BigInt(n) + 1n}`), r = "";
  else if (r.length > t) {
    const [o, a, i] = [
      r.slice(0, t - 1),
      r.slice(t - 1, t),
      r.slice(t)
    ], c = Math.round(+`${a}.${i}`);
    c > 9 ? r = `${BigInt(o) + BigInt(1)}0`.padStart(o.length + 1, "0") : r = `${o}${c}`, r.length > t && (r = r.slice(1), n = `${BigInt(n) + 1n}`), r = r.slice(0, t);
  } else
    r = r.padEnd(t, "0");
  return BigInt(`${s ? "-" : ""}${n}${r}`);
}
function y1(e, t = "wei") {
  return mo(e, Ja[t]);
}
function w1(e, t = "wei") {
  return mo(e, Xa[t]);
}
function Cp(e) {
  const { source: t } = e, n = /* @__PURE__ */ new Map(), r = new zs(8192), s = /* @__PURE__ */ new Map(), o = ({ address: a, chainId: i }) => `${a}.${i}`;
  return {
    async consume({ address: a, chainId: i, client: c }) {
      const l = o({ address: a, chainId: i }), u = this.get({ address: a, chainId: i, client: c });
      this.increment({ address: a, chainId: i });
      const d = await u;
      return await t.set({ address: a, chainId: i }, d), r.set(l, d), d;
    },
    async increment({ address: a, chainId: i }) {
      const c = o({ address: a, chainId: i }), l = n.get(c) ?? 0;
      n.set(c, l + 1);
    },
    async get({ address: a, chainId: i, client: c }) {
      const l = o({ address: a, chainId: i });
      let u = s.get(l);
      return u || (u = (async () => {
        try {
          const p = await t.get({ address: a, chainId: i, client: c }), f = r.get(l) ?? 0;
          return f > 0 && p <= f ? f + 1 : (r.delete(l), p);
        } finally {
          this.reset({ address: a, chainId: i });
        }
      })(), s.set(l, u)), (n.get(l) ?? 0) + await u;
    },
    reset({ address: a, chainId: i }) {
      const c = o({ address: a, chainId: i });
      n.delete(c), s.delete(c);
    }
  };
}
function g1() {
  return {
    async get(e) {
      const { address: t, client: n } = e;
      return Zs(n, {
        address: t,
        blockTag: "pending"
      });
    },
    set() {
    }
  };
}
const x1 = /* @__PURE__ */ Cp({
  source: g1()
});
function C1(e) {
  return e.map((t) => ({
    ...t,
    value: BigInt(t.value)
  }));
}
function A1(e) {
  return {
    ...e,
    balance: e.balance ? BigInt(e.balance) : void 0,
    nonce: e.nonce ? V(e.nonce) : void 0,
    storageProof: e.storageProof ? C1(e.storageProof) : void 0
  };
}
async function Ap(e, { address: t, blockNumber: n, blockTag: r, storageKeys: s }) {
  const o = r ?? "latest", a = n !== void 0 ? U(n) : void 0, i = await e.request({
    method: "eth_getProof",
    params: [t, s, a || o]
  });
  return A1(i);
}
async function ji(e, {
  confirmations: t = 1,
  hash: n,
  onReplaced: r,
  pollingInterval: s = e.pollingInterval,
  retryCount: o = 6,
  retryDelay: a = ({ count: c }) => ~~(1 << c) * 200,
  // exponential backoff
  timeout: i
}) {
  const c = re(["waitForTransactionReceipt", e.uid, n]);
  let l = 0, u, d, p, f = !1;
  return new Promise((m, h) => {
    i && setTimeout(() => h(new aa({ hash: n })), i);
    const b = ut(c, { onReplaced: r, resolve: m, reject: h }, (y) => {
      const w = R(e, Ni, "watchBlockNumber")({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: s,
        async onBlockNumber(v) {
          const E = (C) => {
            w(), C(), b();
          };
          let g = v;
          if (!f) {
            l > o && E(() => y.reject(new aa({ hash: n })));
            try {
              if (p) {
                if (t > 1 && (!p.blockNumber || g - p.blockNumber + 1n < t))
                  return;
                E(() => y.resolve(p));
                return;
              }
              if (u || (f = !0, await dt(async () => {
                u = await R(e, Tn, "getTransaction")({ hash: n }), u.blockNumber && (g = u.blockNumber);
              }, {
                delay: a,
                retryCount: o
              }), f = !1), p = await R(e, Is, "getTransactionReceipt")({ hash: n }), t > 1 && (!p.blockNumber || g - p.blockNumber + 1n < t))
                return;
              E(() => y.resolve(p));
            } catch (C) {
              if (C instanceof ti || C instanceof ni) {
                if (!u) {
                  f = !1;
                  return;
                }
                try {
                  d = u, f = !0;
                  const A = await dt(() => R(e, We, "getBlock")({
                    blockNumber: g,
                    includeTransactions: !0
                  }), {
                    delay: a,
                    retryCount: o,
                    shouldRetry: ({ error: P }) => P instanceof oi
                  });
                  f = !1;
                  const k = A.transactions.find(({ from: P, nonce: N }) => P === d.from && N === d.nonce);
                  if (!k || (p = await R(e, Is, "getTransactionReceipt")({
                    hash: k.hash
                  }), t > 1 && (!p.blockNumber || g - p.blockNumber + 1n < t)))
                    return;
                  let I = "replaced";
                  k.to === d.to && k.value === d.value ? I = "repriced" : k.from === k.to && k.value === 0n && (I = "cancelled"), E(() => {
                    var P;
                    (P = y.onReplaced) == null || P.call(y, {
                      reason: I,
                      replacedTransaction: d,
                      transaction: k,
                      transactionReceipt: p
                    }), y.resolve(p);
                  });
                } catch (A) {
                  E(() => y.reject(A));
                }
              } else
                E(() => y.reject(C));
            } finally {
              l++;
            }
          }
        }
      });
    });
  });
}
async function v1(e) {
  return (await e.request({ method: "eth_requestAccounts" }, { dedupe: !0, retryCount: 0 })).map((n) => H(n));
}
async function E1(e, t) {
  return e.request({
    method: "wallet_requestPermissions",
    params: [t]
  }, { retryCount: 0 });
}
async function k1(e, { hash: t }) {
  await e.request({
    method: `${e.mode}_dropTransaction`,
    params: [t]
  });
}
async function I1(e) {
  return e.mode === "ganache" ? await e.request({
    method: "eth_mining"
  }) : await e.request({
    method: `${e.mode}_getAutomine`
  });
}
async function S1(e) {
  return await e.request({
    method: "txpool_content"
  });
}
async function B1(e) {
  const { pending: t, queued: n } = await e.request({
    method: "txpool_status"
  });
  return {
    pending: V(t),
    queued: V(n)
  };
}
async function T1(e) {
  return await e.request({
    method: "txpool_inspect"
  });
}
async function U1(e) {
  await e.request({
    method: `${e.mode}_removeBlockTimestampInterval`
  });
}
async function P1(e, { blockNumber: t, jsonRpcUrl: n } = {}) {
  await e.request({
    method: `${e.mode}_reset`,
    params: [{ forking: { blockNumber: Number(t), jsonRpcUrl: n } }]
  });
}
async function N1(e, { id: t }) {
  await e.request({
    method: "evm_revert",
    params: [t]
  });
}
async function M1(e, t) {
  var l, u, d, p;
  const { account: n = e.account, chain: r = e.chain, ...s } = t;
  if (!n)
    throw new vn({
      docsPath: "/docs/actions/wallet/signTransaction"
    });
  const o = de(n);
  Ht({
    account: o,
    ...t
  });
  const a = await R(e, mr, "getChainId")({});
  r !== null && Za({
    currentChainId: a,
    chain: r
  });
  const i = (r == null ? void 0 : r.formatters) || ((l = e.chain) == null ? void 0 : l.formatters), c = ((u = i == null ? void 0 : i.transactionRequest) == null ? void 0 : u.format) || ft;
  return o.signTransaction ? o.signTransaction({
    ...s,
    chainId: a
  }, { serializer: (p = (d = e.chain) == null ? void 0 : d.serializers) == null ? void 0 : p.transaction }) : await e.request({
    method: "eth_signTransaction",
    params: [
      {
        ...c(s),
        chainId: U(a),
        from: o.address
      }
    ]
  }, { retryCount: 0 });
}
async function F1(e, t) {
  var y, w, v;
  const { accessList: n, data: r, from: s, gas: o, gasPrice: a, maxFeePerGas: i, maxPriorityFeePerGas: c, nonce: l, to: u, value: d, ...p } = t, f = (v = (w = (y = e.chain) == null ? void 0 : y.formatters) == null ? void 0 : w.transactionRequest) == null ? void 0 : v.format, h = (f || ft)({
    // Pick out extra data that might exist on the chain's transaction request type.
    ...hr(p, { format: f }),
    accessList: n,
    data: r,
    from: s,
    gas: o,
    gasPrice: a,
    maxFeePerGas: i,
    maxPriorityFeePerGas: c,
    nonce: l,
    to: u,
    value: d
  });
  return await e.request({
    method: "eth_sendUnsignedTransaction",
    params: [h]
  });
}
async function D1(e, { address: t, value: n }) {
  e.mode === "ganache" ? await e.request({
    method: "evm_setAccountBalance",
    params: [t, U(n)]
  }) : await e.request({
    method: `${e.mode}_setBalance`,
    params: [t, U(n)]
  });
}
async function R1(e, t) {
  e.mode === "ganache" ? t ? await e.request({ method: "miner_start" }) : await e.request({ method: "miner_stop" }) : await e.request({
    method: "evm_setAutomine",
    params: [t]
  });
}
async function O1(e, { gasLimit: t }) {
  await e.request({
    method: "evm_setBlockGasLimit",
    params: [U(t)]
  });
}
async function L1(e, { interval: t }) {
  const n = e.mode === "hardhat" ? t * 1e3 : t;
  await e.request({
    method: `${e.mode}_setBlockTimestampInterval`,
    params: [n]
  });
}
async function z1(e, { address: t, bytecode: n }) {
  e.mode === "ganache" ? await e.request({
    method: "evm_setAccountCode",
    params: [t, n]
  }) : await e.request({
    method: `${e.mode}_setCode`,
    params: [t, n]
  });
}
async function _1(e, { address: t }) {
  await e.request({
    method: `${e.mode}_setCoinbase`,
    params: [t]
  });
}
async function H1(e, { interval: t }) {
  const n = e.mode === "hardhat" ? t * 1e3 : t;
  await e.request({
    method: "evm_setIntervalMining",
    params: [n]
  });
}
async function $1(e, t) {
  await e.request({
    method: `${e.mode}_setLoggingEnabled`,
    params: [t]
  });
}
async function j1(e, { gasPrice: t }) {
  await e.request({
    method: `${e.mode}_setMinGasPrice`,
    params: [U(t)]
  });
}
async function q1(e, { baseFeePerGas: t }) {
  await e.request({
    method: `${e.mode}_setNextBlockBaseFeePerGas`,
    params: [U(t)]
  });
}
async function G1(e, { timestamp: t }) {
  await e.request({
    method: "evm_setNextBlockTimestamp",
    params: [U(t)]
  });
}
async function K1(e, { address: t, nonce: n }) {
  await e.request({
    method: `${e.mode}_setNonce`,
    params: [t, U(n)]
  });
}
async function Q1(e, t) {
  await e.request({
    method: `${e.mode}_setRpcUrl`,
    params: [t]
  });
}
async function V1(e, { address: t, index: n, value: r }) {
  await e.request({
    method: `${e.mode}_setStorageAt`,
    params: [
      t,
      typeof n == "number" ? U(n) : n,
      r
    ]
  });
}
async function W1(e) {
  return await e.request({
    method: "evm_snapshot"
  });
}
async function qi(e, { account: t = e.account, message: n }) {
  if (!t)
    throw new vn({
      docsPath: "/docs/actions/wallet/signMessage"
    });
  const r = de(t);
  if (r.signMessage)
    return r.signMessage({ message: n });
  const s = typeof n == "string" ? Ke(n) : n.raw instanceof Uint8Array ? M(n.raw) : n.raw;
  return e.request({
    method: "personal_sign",
    params: [s, r.address]
  }, { retryCount: 0 });
}
async function vp(e, t) {
  const { account: n = e.account, domain: r, message: s, primaryType: o } = t;
  if (!n)
    throw new vn({
      docsPath: "/docs/actions/wallet/signTypedData"
    });
  const a = de(n), i = {
    EIP712Domain: lo({ domain: r }),
    ...t.types
  };
  if (Ri({ domain: r, message: s, primaryType: o, types: i }), a.signTypedData)
    return a.signTypedData({ domain: r, message: s, primaryType: o, types: i });
  const c = np({ domain: r, message: s, primaryType: o, types: i });
  return e.request({
    method: "eth_signTypedData_v4",
    params: [a.address, c]
  }, { retryCount: 0 });
}
async function bo(e, t) {
  const { abi: n, address: r, args: s, dataSuffix: o, functionName: a, ...i } = t, c = i.account ? de(i.account) : e.account, l = Je({ abi: n, args: s, functionName: a });
  try {
    const { data: u } = await R(e, bt, "call")({
      batch: !1,
      data: `${l}${o ? o.replace("0x", "") : ""}`,
      to: r,
      ...i,
      account: c
    }), d = qt({
      abi: n,
      args: s,
      functionName: a,
      data: u || "0x"
    }), p = n.filter((f) => "name" in f && f.name === t.functionName);
    return {
      result: d,
      request: {
        abi: p,
        address: r,
        args: s,
        dataSuffix: o,
        functionName: a,
        ...i,
        account: c
      }
    };
  } catch (u) {
    throw Ft(u, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/simulateContract",
      functionName: a,
      sender: c == null ? void 0 : c.address
    });
  }
}
async function Z1(e, { address: t }) {
  await e.request({
    method: `${e.mode}_stopImpersonatingAccount`,
    params: [t]
  });
}
async function J1(e, { id: t }) {
  await e.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: U(t)
      }
    ]
  }, { retryCount: 0 });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ep = BigInt(0), yo = BigInt(1), X1 = BigInt(2);
function Dt(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Cr(e) {
  if (!Dt(e))
    throw new Error("Uint8Array expected");
}
const Y1 = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function yn(e) {
  Cr(e);
  let t = "";
  for (let n = 0; n < e.length; n++)
    t += Y1[e[n]];
  return t;
}
function kp(e) {
  const t = e.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function Gi(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  return BigInt(e === "" ? "0" : `0x${e}`);
}
const $e = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function Qc(e) {
  if (e >= $e._0 && e <= $e._9)
    return e - $e._0;
  if (e >= $e._A && e <= $e._F)
    return e - ($e._A - 10);
  if (e >= $e._a && e <= $e._f)
    return e - ($e._a - 10);
}
function wn(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  const t = e.length, n = t / 2;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const r = new Uint8Array(n);
  for (let s = 0, o = 0; s < n; s++, o += 2) {
    const a = Qc(e.charCodeAt(o)), i = Qc(e.charCodeAt(o + 1));
    if (a === void 0 || i === void 0) {
      const c = e[o] + e[o + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + o);
    }
    r[s] = a * 16 + i;
  }
  return r;
}
function St(e) {
  return Gi(yn(e));
}
function Ki(e) {
  return Cr(e), Gi(yn(Uint8Array.from(e).reverse()));
}
function gn(e, t) {
  return wn(e.toString(16).padStart(t * 2, "0"));
}
function Qi(e, t) {
  return gn(e, t).reverse();
}
function ew(e) {
  return wn(kp(e));
}
function Pe(e, t, n) {
  let r;
  if (typeof t == "string")
    try {
      r = wn(t);
    } catch (o) {
      throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${o}`);
    }
  else if (Dt(t))
    r = Uint8Array.from(t);
  else
    throw new Error(`${e} must be hex string or Uint8Array`);
  const s = r.length;
  if (typeof n == "number" && s !== n)
    throw new Error(`${e} expected ${n} bytes, got ${s}`);
  return r;
}
function Yn(...e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    Cr(s), t += s.length;
  }
  const n = new Uint8Array(t);
  for (let r = 0, s = 0; r < e.length; r++) {
    const o = e[r];
    n.set(o, s), s += o.length;
  }
  return n;
}
function Ip(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = 0;
  for (let r = 0; r < e.length; r++)
    n |= e[r] ^ t[r];
  return n === 0;
}
function tw(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function nw(e) {
  let t;
  for (t = 0; e > Ep; e >>= yo, t += 1)
    ;
  return t;
}
function rw(e, t) {
  return e >> BigInt(t) & yo;
}
function sw(e, t, n) {
  return e | (n ? yo : Ep) << BigInt(t);
}
const Vi = (e) => (X1 << BigInt(e - 1)) - yo, Ho = (e) => new Uint8Array(e), Vc = (e) => Uint8Array.from(e);
function Sp(e, t, n) {
  if (typeof e != "number" || e < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  let r = Ho(e), s = Ho(e), o = 0;
  const a = () => {
    r.fill(1), s.fill(0), o = 0;
  }, i = (...d) => n(s, r, ...d), c = (d = Ho()) => {
    s = i(Vc([0]), d), r = i(), d.length !== 0 && (s = i(Vc([1]), d), r = i());
  }, l = () => {
    if (o++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let d = 0;
    const p = [];
    for (; d < t; ) {
      r = i();
      const f = r.slice();
      p.push(f), d += r.length;
    }
    return Yn(...p);
  };
  return (d, p) => {
    a(), c(d);
    let f;
    for (; !(f = p(l())); )
      c();
    return a(), f;
  };
}
const ow = {
  bigint: (e) => typeof e == "bigint",
  function: (e) => typeof e == "function",
  boolean: (e) => typeof e == "boolean",
  string: (e) => typeof e == "string",
  stringOrUint8Array: (e) => typeof e == "string" || Dt(e),
  isSafeInteger: (e) => Number.isSafeInteger(e),
  array: (e) => Array.isArray(e),
  field: (e, t) => t.Fp.isValid(e),
  hash: (e) => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};
function Ar(e, t, n = {}) {
  const r = (s, o, a) => {
    const i = ow[o];
    if (typeof i != "function")
      throw new Error(`Invalid validator "${o}", expected function`);
    const c = e[s];
    if (!(a && c === void 0) && !i(c, e))
      throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${o}`);
  };
  for (const [s, o] of Object.entries(t))
    r(s, o, !1);
  for (const [s, o] of Object.entries(n))
    r(s, o, !0);
  return e;
}
const aw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  abytes: Cr,
  bitGet: rw,
  bitLen: nw,
  bitMask: Vi,
  bitSet: sw,
  bytesToHex: yn,
  bytesToNumberBE: St,
  bytesToNumberLE: Ki,
  concatBytes: Yn,
  createHmacDrbg: Sp,
  ensureBytes: Pe,
  equalBytes: Ip,
  hexToBytes: wn,
  hexToNumber: Gi,
  isBytes: Dt,
  numberToBytesBE: gn,
  numberToBytesLE: Qi,
  numberToHexUnpadded: kp,
  numberToVarBytesBE: ew,
  utf8ToBytes: tw,
  validateObject: Ar
}, Symbol.toStringTag, { value: "Module" }));
function iw(e, t) {
  const n = _(e) ? oe(e) : e, r = _(t) ? oe(t) : t;
  return Ip(n, r);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ie = BigInt(0), te = BigInt(1), At = BigInt(2), cw = BigInt(3), wa = BigInt(4), Wc = BigInt(5), Zc = BigInt(8);
BigInt(9);
BigInt(16);
function be(e, t) {
  const n = e % t;
  return n >= ie ? n : t + n;
}
function lw(e, t, n) {
  if (n <= ie || t < ie)
    throw new Error("Expected power/modulo > 0");
  if (n === te)
    return ie;
  let r = te;
  for (; t > ie; )
    t & te && (r = r * e % n), e = e * e % n, t >>= te;
  return r;
}
function Ae(e, t, n) {
  let r = e;
  for (; t-- > ie; )
    r *= r, r %= n;
  return r;
}
function ga(e, t) {
  if (e === ie || t <= ie)
    throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
  let n = be(e, t), r = t, s = ie, o = te;
  for (; n !== ie; ) {
    const i = r / n, c = r % n, l = s - o * i;
    r = n, n = c, s = o, o = l;
  }
  if (r !== te)
    throw new Error("invert: does not exist");
  return be(s, t);
}
function uw(e) {
  const t = (e - te) / At;
  let n, r, s;
  for (n = e - te, r = 0; n % At === ie; n /= At, r++)
    ;
  for (s = At; s < e && lw(s, t, e) !== e - te; s++)
    ;
  if (r === 1) {
    const a = (e + te) / wa;
    return function(c, l) {
      const u = c.pow(l, a);
      if (!c.eql(c.sqr(u), l))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  const o = (n + te) / At;
  return function(i, c) {
    if (i.pow(c, t) === i.neg(i.ONE))
      throw new Error("Cannot find square root");
    let l = r, u = i.pow(i.mul(i.ONE, s), n), d = i.pow(c, o), p = i.pow(c, n);
    for (; !i.eql(p, i.ONE); ) {
      if (i.eql(p, i.ZERO))
        return i.ZERO;
      let f = 1;
      for (let h = i.sqr(p); f < l && !i.eql(h, i.ONE); f++)
        h = i.sqr(h);
      const m = i.pow(u, te << BigInt(l - f - 1));
      u = i.sqr(m), d = i.mul(d, m), p = i.mul(p, u), l = f;
    }
    return d;
  };
}
function dw(e) {
  if (e % wa === cw) {
    const t = (e + te) / wa;
    return function(r, s) {
      const o = r.pow(s, t);
      if (!r.eql(r.sqr(o), s))
        throw new Error("Cannot find square root");
      return o;
    };
  }
  if (e % Zc === Wc) {
    const t = (e - Wc) / Zc;
    return function(r, s) {
      const o = r.mul(s, At), a = r.pow(o, t), i = r.mul(s, a), c = r.mul(r.mul(i, At), a), l = r.mul(i, r.sub(c, r.ONE));
      if (!r.eql(r.sqr(l), s))
        throw new Error("Cannot find square root");
      return l;
    };
  }
  return uw(e);
}
const pw = [
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
function fw(e) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = pw.reduce((r, s) => (r[s] = "function", r), t);
  return Ar(e, n);
}
function hw(e, t, n) {
  if (n < ie)
    throw new Error("Expected power > 0");
  if (n === ie)
    return e.ONE;
  if (n === te)
    return t;
  let r = e.ONE, s = t;
  for (; n > ie; )
    n & te && (r = e.mul(r, s)), s = e.sqr(s), n >>= te;
  return r;
}
function mw(e, t) {
  const n = new Array(t.length), r = t.reduce((o, a, i) => e.is0(a) ? o : (n[i] = o, e.mul(o, a)), e.ONE), s = e.inv(r);
  return t.reduceRight((o, a, i) => e.is0(a) ? o : (n[i] = e.mul(o, n[i]), e.mul(o, a)), s), n;
}
function Bp(e, t) {
  const n = t !== void 0 ? t : e.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function bw(e, t, n = !1, r = {}) {
  if (e <= ie)
    throw new Error(`Expected Field ORDER > 0, got ${e}`);
  const { nBitLength: s, nByteLength: o } = Bp(e, t);
  if (o > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const a = dw(e), i = Object.freeze({
    ORDER: e,
    BITS: s,
    BYTES: o,
    MASK: Vi(s),
    ZERO: ie,
    ONE: te,
    create: (c) => be(c, e),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return ie <= c && c < e;
    },
    is0: (c) => c === ie,
    isOdd: (c) => (c & te) === te,
    neg: (c) => be(-c, e),
    eql: (c, l) => c === l,
    sqr: (c) => be(c * c, e),
    add: (c, l) => be(c + l, e),
    sub: (c, l) => be(c - l, e),
    mul: (c, l) => be(c * l, e),
    pow: (c, l) => hw(i, c, l),
    div: (c, l) => be(c * ga(l, e), e),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, l) => c + l,
    subN: (c, l) => c - l,
    mulN: (c, l) => c * l,
    inv: (c) => ga(c, e),
    sqrt: r.sqrt || ((c) => a(i, c)),
    invertBatch: (c) => mw(i, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, l, u) => u ? l : c,
    toBytes: (c) => n ? Qi(c, o) : gn(c, o),
    fromBytes: (c) => {
      if (c.length !== o)
        throw new Error(`Fp.fromBytes: expected ${o}, got ${c.length}`);
      return n ? Ki(c) : St(c);
    }
  });
  return Object.freeze(i);
}
function Tp(e) {
  if (typeof e != "bigint")
    throw new Error("field order must be bigint");
  const t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function Up(e) {
  const t = Tp(e);
  return t + Math.ceil(t / 2);
}
function yw(e, t, n = !1) {
  const r = e.length, s = Tp(t), o = Up(t);
  if (r < 16 || r < o || r > 1024)
    throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);
  const a = n ? St(e) : Ki(e), i = be(a, t - te) + te;
  return n ? Qi(i, s) : gn(i, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ww = BigInt(0), $o = BigInt(1);
function gw(e, t) {
  const n = (s, o) => {
    const a = o.negate();
    return s ? a : o;
  }, r = (s) => {
    const o = Math.ceil(t / s) + 1, a = 2 ** (s - 1);
    return { windows: o, windowSize: a };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(s, o) {
      let a = e.ZERO, i = s;
      for (; o > ww; )
        o & $o && (a = a.add(i)), i = i.double(), o >>= $o;
      return a;
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
    precomputeWindow(s, o) {
      const { windows: a, windowSize: i } = r(o), c = [];
      let l = s, u = l;
      for (let d = 0; d < a; d++) {
        u = l, c.push(u);
        for (let p = 1; p < i; p++)
          u = u.add(l), c.push(u);
        l = u.double();
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
    wNAF(s, o, a) {
      const { windows: i, windowSize: c } = r(s);
      let l = e.ZERO, u = e.BASE;
      const d = BigInt(2 ** s - 1), p = 2 ** s, f = BigInt(s);
      for (let m = 0; m < i; m++) {
        const h = m * c;
        let b = Number(a & d);
        a >>= f, b > c && (b -= p, a += $o);
        const y = h, w = h + Math.abs(b) - 1, v = m % 2 !== 0, E = b < 0;
        b === 0 ? u = u.add(n(v, o[y])) : l = l.add(n(E, o[w]));
      }
      return { p: l, f: u };
    },
    wNAFCached(s, o, a, i) {
      const c = s._WINDOW_SIZE || 1;
      let l = o.get(s);
      return l || (l = this.precomputeWindow(s, c), c !== 1 && o.set(s, i(l))), this.wNAF(c, l, a);
    }
  };
}
function Pp(e) {
  return fw(e.Fp), Ar(e, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Bp(e.n, e.nBitLength),
    ...e,
    p: e.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function xw(e) {
  const t = Pp(e);
  Ar(t, {
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
  const { endo: n, Fp: r, a: s } = t;
  if (n) {
    if (!r.eql(s, r.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: Cw, hexToBytes: Aw } = aw, Et = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(t = "") {
      super(t);
    }
  },
  _parseInt(e) {
    const { Err: t } = Et;
    if (e.length < 2 || e[0] !== 2)
      throw new t("Invalid signature integer tag");
    const n = e[1], r = e.subarray(2, n + 2);
    if (!n || r.length !== n)
      throw new t("Invalid signature integer: wrong length");
    if (r[0] & 128)
      throw new t("Invalid signature integer: negative");
    if (r[0] === 0 && !(r[1] & 128))
      throw new t("Invalid signature integer: unnecessary leading zero");
    return { d: Cw(r), l: e.subarray(n + 2) };
  },
  toSig(e) {
    const { Err: t } = Et, n = typeof e == "string" ? Aw(e) : e;
    Cr(n);
    let r = n.length;
    if (r < 2 || n[0] != 48)
      throw new t("Invalid signature tag");
    if (n[1] !== r - 2)
      throw new t("Invalid signature: incorrect length");
    const { d: s, l: o } = Et._parseInt(n.subarray(2)), { d: a, l: i } = Et._parseInt(o);
    if (i.length)
      throw new t("Invalid signature: left bytes after parsing");
    return { r: s, s: a };
  },
  hexFromSig(e) {
    const t = (l) => Number.parseInt(l[0], 16) & 8 ? "00" + l : l, n = (l) => {
      const u = l.toString(16);
      return u.length & 1 ? `0${u}` : u;
    }, r = t(n(e.s)), s = t(n(e.r)), o = r.length / 2, a = s.length / 2, i = n(o), c = n(a);
    return `30${n(a + o + 4)}02${c}${s}02${i}${r}`;
  }
}, qe = BigInt(0), ve = BigInt(1);
BigInt(2);
const Jc = BigInt(3);
BigInt(4);
function vw(e) {
  const t = xw(e), { Fp: n } = t, r = t.toBytes || ((m, h, b) => {
    const y = h.toAffine();
    return Yn(Uint8Array.from([4]), n.toBytes(y.x), n.toBytes(y.y));
  }), s = t.fromBytes || ((m) => {
    const h = m.subarray(1), b = n.fromBytes(h.subarray(0, n.BYTES)), y = n.fromBytes(h.subarray(n.BYTES, 2 * n.BYTES));
    return { x: b, y };
  });
  function o(m) {
    const { a: h, b } = t, y = n.sqr(m), w = n.mul(y, m);
    return n.add(n.add(w, n.mul(m, h)), b);
  }
  if (!n.eql(n.sqr(t.Gy), o(t.Gx)))
    throw new Error("bad generator point: equation left != right");
  function a(m) {
    return typeof m == "bigint" && qe < m && m < t.n;
  }
  function i(m) {
    if (!a(m))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(m) {
    const { allowedPrivateKeyLengths: h, nByteLength: b, wrapPrivateKey: y, n: w } = t;
    if (h && typeof m != "bigint") {
      if (Dt(m) && (m = yn(m)), typeof m != "string" || !h.includes(m.length))
        throw new Error("Invalid key");
      m = m.padStart(b * 2, "0");
    }
    let v;
    try {
      v = typeof m == "bigint" ? m : St(Pe("private key", m, b));
    } catch {
      throw new Error(`private key must be ${b} bytes, hex or bigint, not ${typeof m}`);
    }
    return y && (v = be(v, w)), i(v), v;
  }
  const l = /* @__PURE__ */ new Map();
  function u(m) {
    if (!(m instanceof d))
      throw new Error("ProjectivePoint expected");
  }
  class d {
    constructor(h, b, y) {
      if (this.px = h, this.py = b, this.pz = y, h == null || !n.isValid(h))
        throw new Error("x required");
      if (b == null || !n.isValid(b))
        throw new Error("y required");
      if (y == null || !n.isValid(y))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(h) {
      const { x: b, y } = h || {};
      if (!h || !n.isValid(b) || !n.isValid(y))
        throw new Error("invalid affine point");
      if (h instanceof d)
        throw new Error("projective point not allowed");
      const w = (v) => n.eql(v, n.ZERO);
      return w(b) && w(y) ? d.ZERO : new d(b, y, n.ONE);
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
    static normalizeZ(h) {
      const b = n.invertBatch(h.map((y) => y.pz));
      return h.map((y, w) => y.toAffine(b[w])).map(d.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(h) {
      const b = d.fromAffine(s(Pe("pointHex", h)));
      return b.assertValidity(), b;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(h) {
      return d.BASE.multiply(c(h));
    }
    // "Private method", don't use it directly
    _setWindowSize(h) {
      this._WINDOW_SIZE = h, l.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (t.allowInfinityPoint && !n.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: h, y: b } = this.toAffine();
      if (!n.isValid(h) || !n.isValid(b))
        throw new Error("bad point: x or y not FE");
      const y = n.sqr(b), w = o(h);
      if (!n.eql(y, w))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: h } = this.toAffine();
      if (n.isOdd)
        return !n.isOdd(h);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(h) {
      u(h);
      const { px: b, py: y, pz: w } = this, { px: v, py: E, pz: g } = h, C = n.eql(n.mul(b, g), n.mul(v, w)), A = n.eql(n.mul(y, g), n.mul(E, w));
      return C && A;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new d(this.px, n.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: h, b } = t, y = n.mul(b, Jc), { px: w, py: v, pz: E } = this;
      let g = n.ZERO, C = n.ZERO, A = n.ZERO, k = n.mul(w, w), I = n.mul(v, v), P = n.mul(E, E), N = n.mul(w, v);
      return N = n.add(N, N), A = n.mul(w, E), A = n.add(A, A), g = n.mul(h, A), C = n.mul(y, P), C = n.add(g, C), g = n.sub(I, C), C = n.add(I, C), C = n.mul(g, C), g = n.mul(N, g), A = n.mul(y, A), P = n.mul(h, P), N = n.sub(k, P), N = n.mul(h, N), N = n.add(N, A), A = n.add(k, k), k = n.add(A, k), k = n.add(k, P), k = n.mul(k, N), C = n.add(C, k), P = n.mul(v, E), P = n.add(P, P), k = n.mul(P, N), g = n.sub(g, k), A = n.mul(P, I), A = n.add(A, A), A = n.add(A, A), new d(g, C, A);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(h) {
      u(h);
      const { px: b, py: y, pz: w } = this, { px: v, py: E, pz: g } = h;
      let C = n.ZERO, A = n.ZERO, k = n.ZERO;
      const I = t.a, P = n.mul(t.b, Jc);
      let N = n.mul(b, v), q = n.mul(y, E), F = n.mul(w, g), K = n.add(b, y), T = n.add(v, E);
      K = n.mul(K, T), T = n.add(N, q), K = n.sub(K, T), T = n.add(b, w);
      let B = n.add(v, g);
      return T = n.mul(T, B), B = n.add(N, F), T = n.sub(T, B), B = n.add(y, w), C = n.add(E, g), B = n.mul(B, C), C = n.add(q, F), B = n.sub(B, C), k = n.mul(I, T), C = n.mul(P, F), k = n.add(C, k), C = n.sub(q, k), k = n.add(q, k), A = n.mul(C, k), q = n.add(N, N), q = n.add(q, N), F = n.mul(I, F), T = n.mul(P, T), q = n.add(q, F), F = n.sub(N, F), F = n.mul(I, F), T = n.add(T, F), N = n.mul(q, T), A = n.add(A, N), N = n.mul(B, T), C = n.mul(K, C), C = n.sub(C, N), N = n.mul(K, q), k = n.mul(B, k), k = n.add(k, N), new d(C, A, k);
    }
    subtract(h) {
      return this.add(h.negate());
    }
    is0() {
      return this.equals(d.ZERO);
    }
    wNAF(h) {
      return f.wNAFCached(this, l, h, (b) => {
        const y = n.invertBatch(b.map((w) => w.pz));
        return b.map((w, v) => w.toAffine(y[v])).map(d.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(h) {
      const b = d.ZERO;
      if (h === qe)
        return b;
      if (i(h), h === ve)
        return this;
      const { endo: y } = t;
      if (!y)
        return f.unsafeLadder(this, h);
      let { k1neg: w, k1: v, k2neg: E, k2: g } = y.splitScalar(h), C = b, A = b, k = this;
      for (; v > qe || g > qe; )
        v & ve && (C = C.add(k)), g & ve && (A = A.add(k)), k = k.double(), v >>= ve, g >>= ve;
      return w && (C = C.negate()), E && (A = A.negate()), A = new d(n.mul(A.px, y.beta), A.py, A.pz), C.add(A);
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
    multiply(h) {
      i(h);
      let b = h, y, w;
      const { endo: v } = t;
      if (v) {
        const { k1neg: E, k1: g, k2neg: C, k2: A } = v.splitScalar(b);
        let { p: k, f: I } = this.wNAF(g), { p: P, f: N } = this.wNAF(A);
        k = f.constTimeNegate(E, k), P = f.constTimeNegate(C, P), P = new d(n.mul(P.px, v.beta), P.py, P.pz), y = k.add(P), w = I.add(N);
      } else {
        const { p: E, f: g } = this.wNAF(b);
        y = E, w = g;
      }
      return d.normalizeZ([y, w])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(h, b, y) {
      const w = d.BASE, v = (g, C) => C === qe || C === ve || !g.equals(w) ? g.multiplyUnsafe(C) : g.multiply(C), E = v(this, b).add(v(h, y));
      return E.is0() ? void 0 : E;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(h) {
      const { px: b, py: y, pz: w } = this, v = this.is0();
      h == null && (h = v ? n.ONE : n.inv(w));
      const E = n.mul(b, h), g = n.mul(y, h), C = n.mul(w, h);
      if (v)
        return { x: n.ZERO, y: n.ZERO };
      if (!n.eql(C, n.ONE))
        throw new Error("invZ was invalid");
      return { x: E, y: g };
    }
    isTorsionFree() {
      const { h, isTorsionFree: b } = t;
      if (h === ve)
        return !0;
      if (b)
        return b(d, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h, clearCofactor: b } = t;
      return h === ve ? this : b ? b(d, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(h = !0) {
      return this.assertValidity(), r(d, this, h);
    }
    toHex(h = !0) {
      return yn(this.toRawBytes(h));
    }
  }
  d.BASE = new d(t.Gx, t.Gy, n.ONE), d.ZERO = new d(n.ZERO, n.ONE, n.ZERO);
  const p = t.nBitLength, f = gw(d, t.endo ? Math.ceil(p / 2) : p);
  return {
    CURVE: t,
    ProjectivePoint: d,
    normPrivateKeyToScalar: c,
    weierstrassEquation: o,
    isWithinCurveOrder: a
  };
}
function Ew(e) {
  const t = Pp(e);
  return Ar(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function kw(e) {
  const t = Ew(e), { Fp: n, n: r } = t, s = n.BYTES + 1, o = 2 * n.BYTES + 1;
  function a(T) {
    return qe < T && T < n.ORDER;
  }
  function i(T) {
    return be(T, r);
  }
  function c(T) {
    return ga(T, r);
  }
  const { ProjectivePoint: l, normPrivateKeyToScalar: u, weierstrassEquation: d, isWithinCurveOrder: p } = vw({
    ...t,
    toBytes(T, B, O) {
      const j = B.toAffine(), G = n.toBytes(j.x), Q = Yn;
      return O ? Q(Uint8Array.from([B.hasEvenY() ? 2 : 3]), G) : Q(Uint8Array.from([4]), G, n.toBytes(j.y));
    },
    fromBytes(T) {
      const B = T.length, O = T[0], j = T.subarray(1);
      if (B === s && (O === 2 || O === 3)) {
        const G = St(j);
        if (!a(G))
          throw new Error("Point is not on curve");
        const Q = d(G);
        let ce;
        try {
          ce = n.sqrt(Q);
        } catch (Te) {
          const Ye = Te instanceof Error ? ": " + Te.message : "";
          throw new Error("Point is not on curve" + Ye);
        }
        const ae = (ce & ve) === ve;
        return (O & 1) === 1 !== ae && (ce = n.neg(ce)), { x: G, y: ce };
      } else if (B === o && O === 4) {
        const G = n.fromBytes(j.subarray(0, n.BYTES)), Q = n.fromBytes(j.subarray(n.BYTES, 2 * n.BYTES));
        return { x: G, y: Q };
      } else
        throw new Error(`Point of length ${B} was invalid. Expected ${s} compressed bytes or ${o} uncompressed bytes`);
    }
  }), f = (T) => yn(gn(T, t.nByteLength));
  function m(T) {
    const B = r >> ve;
    return T > B;
  }
  function h(T) {
    return m(T) ? i(-T) : T;
  }
  const b = (T, B, O) => St(T.slice(B, O));
  class y {
    constructor(B, O, j) {
      this.r = B, this.s = O, this.recovery = j, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(B) {
      const O = t.nByteLength;
      return B = Pe("compactSignature", B, O * 2), new y(b(B, 0, O), b(B, O, 2 * O));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(B) {
      const { r: O, s: j } = Et.toSig(Pe("DER", B));
      return new y(O, j);
    }
    assertValidity() {
      if (!p(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!p(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(B) {
      return new y(this.r, this.s, B);
    }
    recoverPublicKey(B) {
      const { r: O, s: j, recovery: G } = this, Q = A(Pe("msgHash", B));
      if (G == null || ![0, 1, 2, 3].includes(G))
        throw new Error("recovery id invalid");
      const ce = G === 2 || G === 3 ? O + t.n : O;
      if (ce >= n.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const ae = G & 1 ? "03" : "02", Xe = l.fromHex(ae + f(ce)), Te = c(ce), Ye = i(-Q * Te), Fn = i(j * Te), et = l.BASE.multiplyAndAddUnsafe(Xe, Ye, Fn);
      if (!et)
        throw new Error("point at infinify");
      return et.assertValidity(), et;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return m(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new y(this.r, i(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return wn(this.toDERHex());
    }
    toDERHex() {
      return Et.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return wn(this.toCompactHex());
    }
    toCompactHex() {
      return f(this.r) + f(this.s);
    }
  }
  const w = {
    isValidPrivateKey(T) {
      try {
        return u(T), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: u,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const T = Up(t.n);
      return yw(t.randomBytes(T), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(T = 8, B = l.BASE) {
      return B._setWindowSize(T), B.multiply(BigInt(3)), B;
    }
  };
  function v(T, B = !0) {
    return l.fromPrivateKey(T).toRawBytes(B);
  }
  function E(T) {
    const B = Dt(T), O = typeof T == "string", j = (B || O) && T.length;
    return B ? j === s || j === o : O ? j === 2 * s || j === 2 * o : T instanceof l;
  }
  function g(T, B, O = !0) {
    if (E(T))
      throw new Error("first arg must be private key");
    if (!E(B))
      throw new Error("second arg must be public key");
    return l.fromHex(B).multiply(u(T)).toRawBytes(O);
  }
  const C = t.bits2int || function(T) {
    const B = St(T), O = T.length * 8 - t.nBitLength;
    return O > 0 ? B >> BigInt(O) : B;
  }, A = t.bits2int_modN || function(T) {
    return i(C(T));
  }, k = Vi(t.nBitLength);
  function I(T) {
    if (typeof T != "bigint")
      throw new Error("bigint expected");
    if (!(qe <= T && T < k))
      throw new Error(`bigint expected < 2^${t.nBitLength}`);
    return gn(T, t.nByteLength);
  }
  function P(T, B, O = N) {
    if (["recovered", "canonical"].some((xt) => xt in O))
      throw new Error("sign() legacy options not supported");
    const { hash: j, randomBytes: G } = t;
    let { lowS: Q, prehash: ce, extraEntropy: ae } = O;
    Q == null && (Q = !0), T = Pe("msgHash", T), ce && (T = Pe("prehashed msgHash", j(T)));
    const Xe = A(T), Te = u(B), Ye = [I(Te), I(Xe)];
    if (ae != null && ae !== !1) {
      const xt = ae === !0 ? G(n.BYTES) : ae;
      Ye.push(Pe("extraEntropy", xt));
    }
    const Fn = Yn(...Ye), et = Xe;
    function ko(xt) {
      const Vt = C(xt);
      if (!p(Vt))
        return;
      const hc = c(Vt), Wt = l.BASE.multiply(Vt).toAffine(), Ue = i(Wt.x);
      if (Ue === qe)
        return;
      const Zt = i(hc * i(et + Ue * Te));
      if (Zt === qe)
        return;
      let mc = (Wt.x === Ue ? 0 : 2) | Number(Wt.y & ve), bc = Zt;
      return Q && m(Zt) && (bc = h(Zt), mc ^= 1), new y(Ue, bc, mc);
    }
    return { seed: Fn, k2sig: ko };
  }
  const N = { lowS: t.lowS, prehash: !1 }, q = { lowS: t.lowS, prehash: !1 };
  function F(T, B, O = N) {
    const { seed: j, k2sig: G } = P(T, B, O), Q = t;
    return Sp(Q.hash.outputLen, Q.nByteLength, Q.hmac)(j, G);
  }
  l.BASE._setWindowSize(8);
  function K(T, B, O, j = q) {
    var Wt;
    const G = T;
    if (B = Pe("msgHash", B), O = Pe("publicKey", O), "strict" in j)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: Q, prehash: ce } = j;
    let ae, Xe;
    try {
      if (typeof G == "string" || Dt(G))
        try {
          ae = y.fromDER(G);
        } catch (Ue) {
          if (!(Ue instanceof Et.Err))
            throw Ue;
          ae = y.fromCompact(G);
        }
      else if (typeof G == "object" && typeof G.r == "bigint" && typeof G.s == "bigint") {
        const { r: Ue, s: Zt } = G;
        ae = new y(Ue, Zt);
      } else
        throw new Error("PARSE");
      Xe = l.fromHex(O);
    } catch (Ue) {
      if (Ue.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (Q && ae.hasHighS())
      return !1;
    ce && (B = t.hash(B));
    const { r: Te, s: Ye } = ae, Fn = A(B), et = c(Ye), ko = i(Fn * et), xt = i(Te * et), Vt = (Wt = l.BASE.multiplyAndAddUnsafe(Xe, ko, xt)) == null ? void 0 : Wt.toAffine();
    return Vt ? i(Vt.x) === Te : !1;
  }
  return {
    CURVE: t,
    getPublicKey: v,
    getSharedSecret: g,
    sign: F,
    verify: K,
    ProjectivePoint: l,
    Signature: y,
    utils: w
  };
}
class Np extends $a {
  constructor(t, n) {
    super(), this.finished = !1, this.destroyed = !1, eh(t);
    const r = _s(n);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, o = new Uint8Array(s);
    o.set(r.length > s ? t.create().update(r).digest() : r);
    for (let a = 0; a < o.length; a++)
      o[a] ^= 54;
    this.iHash.update(o), this.oHash = t.create();
    for (let a = 0; a < o.length; a++)
      o[a] ^= 106;
    this.oHash.update(o), o.fill(0);
  }
  update(t) {
    return on(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    on(this), ur(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: s, destroyed: o, blockLen: a, outputLen: i } = this;
    return t = t, t.finished = s, t.destroyed = o, t.blockLen = a, t.outputLen = i, t.oHash = n._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const Mp = (e, t, n) => new Np(e, t).update(n).digest();
Mp.create = (e, t) => new Np(e, t);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Iw(e) {
  return {
    hash: e,
    hmac: (t, ...n) => Mp(e, t, uh(...n)),
    randomBytes: dh
  };
}
function Sw(e, t) {
  const n = (r) => kw({ ...e, ...Iw(r) });
  return Object.freeze({ ...n(t), create: n });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Fp = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Xc = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Bw = BigInt(1), xa = BigInt(2), Yc = (e, t) => (e + t / xa) / t;
function Tw(e) {
  const t = Fp, n = BigInt(3), r = BigInt(6), s = BigInt(11), o = BigInt(22), a = BigInt(23), i = BigInt(44), c = BigInt(88), l = e * e * e % t, u = l * l * e % t, d = Ae(u, n, t) * u % t, p = Ae(d, n, t) * u % t, f = Ae(p, xa, t) * l % t, m = Ae(f, s, t) * f % t, h = Ae(m, o, t) * m % t, b = Ae(h, i, t) * h % t, y = Ae(b, c, t) * b % t, w = Ae(y, i, t) * h % t, v = Ae(w, n, t) * u % t, E = Ae(v, a, t) * m % t, g = Ae(E, r, t) * l % t, C = Ae(g, xa, t);
  if (!Ca.eql(Ca.sqr(C), e))
    throw new Error("Cannot find square root");
  return C;
}
const Ca = bw(Fp, void 0, void 0, { sqrt: Tw }), Nn = Sw({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
  Fp: Ca,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: Xc,
  // Curve order, total count of valid points in the field
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  // Cofactor
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (e) => {
      const t = Xc, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -Bw * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), o = n, a = BigInt("0x100000000000000000000000000000000"), i = Yc(o * e, t), c = Yc(-r * e, t);
      let l = be(e - i * n - c * s, t), u = be(-i * r - c * o, t);
      const d = l > a, p = u > a;
      if (d && (l = t - l), p && (u = t - u), l > a || u > a)
        throw new Error("splitScalar: Endomorphism failed, k=" + e);
      return { k1neg: d, k1: l, k2neg: p, k2: u };
    }
  }
}, Hu);
BigInt(0);
Nn.ProjectivePoint;
const Uw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  secp256k1: Nn
}, Symbol.toStringTag, { value: "Module" }));
function Aa({ r: e, s: t, to: n = "hex", v: r, yParity: s }) {
  const o = (() => {
    if (s === 0 || s === 1)
      return s;
    if (r && (r === 27n || r === 28n || r >= 35n))
      return r % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })(), a = `0x${new Nn.Signature(L(e), L(t)).toCompactHex()}${o === 0 ? "1b" : "1c"}`;
  return n === "hex" ? a : ne(a);
}
async function Wi(e, t) {
  const { address: n, factory: r, factoryData: s, hash: o, signature: a, ...i } = t, c = _(a) ? a : typeof a == "object" && "r" in a && "s" in a ? Aa(a) : W(a), l = await (async () => !r && !s || _i(c) ? c : mp({
    address: r,
    data: s,
    signature: c
  }))();
  try {
    const { data: u } = await R(e, bt, "call")({
      data: dr({
        abi: Ju,
        args: [n, o, l],
        bytecode: Pd
      }),
      ...i
    });
    return iw(u ?? "0x0", "0x1");
  } catch (u) {
    try {
      if (yt(H(n), await Ot({ hash: o, signature: a })))
        return !0;
    } catch {
    }
    if (u instanceof wi)
      return !1;
    throw u;
  }
}
async function Dp(e, { address: t, message: n, factory: r, factoryData: s, signature: o, ...a }) {
  const i = uo(n);
  return Wi(e, {
    address: t,
    factory: r,
    factoryData: s,
    hash: i,
    signature: o,
    ...a
  });
}
async function Rp(e, t) {
  const { address: n, factory: r, factoryData: s, signature: o, message: a, primaryType: i, types: c, domain: l, ...u } = t, d = Fi({ message: a, primaryType: i, types: c, domain: l });
  return Wi(e, {
    address: n,
    factory: r,
    factoryData: s,
    hash: d,
    signature: o,
    ...u
  });
}
async function Op(e, t) {
  return await e.request({
    method: "wallet_watchAsset",
    params: t
  }, { retryCount: 0 });
}
function Zi(e, t) {
  const { abi: n, address: r, args: s, batch: o = !0, eventName: a, fromBlock: i, onError: c, onLogs: l, poll: u, pollingInterval: d = e.pollingInterval, strict: p } = t;
  return (typeof u < "u" ? u : typeof i == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket")) ? (() => {
    const b = p ?? !1, y = re([
      "watchContractEvent",
      r,
      s,
      o,
      e.uid,
      a,
      d,
      b,
      i
    ]);
    return ut(y, { onLogs: l, onError: c }, (w) => {
      let v;
      i !== void 0 && (v = i - 1n);
      let E, g = !1;
      const C = wr(async () => {
        var A;
        if (!g) {
          try {
            E = await R(e, Ii, "createContractEventFilter")({
              abi: n,
              address: r,
              args: s,
              eventName: a,
              strict: b,
              fromBlock: i
            });
          } catch {
          }
          g = !0;
          return;
        }
        try {
          let k;
          if (E)
            k = await R(e, io, "getFilterChanges")({ filter: E });
          else {
            const I = await R(e, Bn, "getBlockNumber")({});
            v && v < I ? k = await R(e, Bi, "getContractEvents")({
              abi: n,
              address: r,
              args: s,
              eventName: a,
              fromBlock: v + 1n,
              toBlock: I,
              strict: b
            }) : k = [], v = I;
          }
          if (k.length === 0)
            return;
          if (o)
            w.onLogs(k);
          else
            for (const I of k)
              w.onLogs([I]);
        } catch (k) {
          E && k instanceof ct && (g = !1), (A = w.onError) == null || A.call(w, k);
        }
      }, {
        emitOnBegin: !0,
        interval: d
      });
      return async () => {
        E && await R(e, co, "uninstallFilter")({ filter: E }), C();
      };
    });
  })() : (() => {
    const b = p ?? !1, y = re([
      "watchContractEvent",
      r,
      s,
      o,
      e.uid,
      a,
      d,
      b
    ]);
    let w = !0, v = () => w = !1;
    return ut(y, { onLogs: l, onError: c }, (E) => ((async () => {
      try {
        const g = (() => {
          if (e.transport.type === "fallback") {
            const k = e.transport.transports.find((I) => I.config.type === "webSocket");
            return k ? k.value : e.transport;
          }
          return e.transport;
        })(), C = a ? Sn({
          abi: n,
          eventName: a,
          args: s
        }) : [], { unsubscribe: A } = await g.subscribe({
          params: ["logs", { address: r, topics: C }],
          onData(k) {
            var P;
            if (!w)
              return;
            const I = k.result;
            try {
              const { eventName: N, args: q } = oo({
                abi: n,
                data: I.data,
                topics: I.topics,
                strict: p
              }), F = Oe(I, {
                args: q,
                eventName: N
              });
              E.onLogs([F]);
            } catch (N) {
              let q, F;
              if (N instanceof sn || N instanceof lr) {
                if (p)
                  return;
                q = N.abiItem.name, F = (P = N.abiItem.inputs) == null ? void 0 : P.some((T) => !("name" in T && T.name));
              }
              const K = Oe(I, {
                args: F ? [] : {},
                eventName: q
              });
              E.onLogs([K]);
            }
          },
          onError(k) {
            var I;
            (I = E.onError) == null || I.call(E, k);
          }
        });
        v = A, w || v();
      } catch (g) {
        c == null || c(g);
      }
    })(), () => v()));
  })();
}
async function wo(e, t) {
  const { abi: n, account: r = e.account, address: s, args: o, dataSuffix: a, functionName: i, ...c } = t;
  if (!r)
    throw new vn({
      docsPath: "/docs/contract/writeContract"
    });
  const l = de(r), u = Je({
    abi: n,
    args: o,
    functionName: i
  });
  try {
    return await R(e, br, "sendTransaction")({
      data: `${u}${a ? a.replace("0x", "") : ""}`,
      to: s,
      account: l,
      ...c
    });
  } catch (d) {
    throw Ft(d, {
      abi: n,
      address: s,
      args: o,
      docsPath: "/docs/contract/writeContract",
      functionName: i,
      sender: l.address
    });
  }
}
function le(e, t, n) {
  const r = e[t.name];
  if (typeof r == "function")
    return r;
  const s = e[n];
  return typeof s == "function" ? s : (o) => t(e, o);
}
const is = "2.13.4", Pw = () => `@wagmi/core@${is}`;
var Lp = function(e, t, n, r) {
  if (n === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}, Ts, zp;
let Kt = class va extends Error {
  get docsBaseUrl() {
    return "https://wagmi.sh/core";
  }
  get version() {
    return Pw();
  }
  constructor(t, n = {}) {
    var o;
    super(), Ts.add(this), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "WagmiCoreError"
    });
    const r = n.cause instanceof va ? n.cause.details : (o = n.cause) != null && o.message ? n.cause.message : n.details, s = n.cause instanceof va && n.cause.docsPath || n.docsPath;
    this.message = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...s ? [
        `Docs: ${this.docsBaseUrl}${s}.html${n.docsSlug ? `#${n.docsSlug}` : ""}`
      ] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: ${this.version}`
    ].join(`
`), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.shortMessage = t;
  }
  walk(t) {
    return Lp(this, Ts, "m", zp).call(this, this, t);
  }
};
Ts = /* @__PURE__ */ new WeakSet(), zp = function e(t, n) {
  return n != null && n(t) ? t : t.cause ? Lp(this, Ts, "m", e).call(this, t.cause, n) : t;
};
let Rt = class extends Kt {
  constructor() {
    super("Chain not configured."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainNotConfiguredError"
    });
  }
}, Nw = class extends Kt {
  constructor() {
    super("Connector already connected."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ConnectorAlreadyConnectedError"
    });
  }
}, _p = class extends Kt {
  constructor() {
    super("Connector not connected."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ConnectorNotConnectedError"
    });
  }
}, Mw = class extends Kt {
  constructor({ address: t, connector: n }) {
    super(`Account "${t}" not found for connector "${n.name}".`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ConnectorAccountNotFoundError"
    });
  }
}, Fw = class extends Kt {
  constructor({ connectionChainId: t, connectorChainId: n }) {
    super(`The current chain of the connector (id: ${n}) does not match the connection's chain (id: ${t}).`, {
      metaMessages: [
        `Current Chain ID:  ${n}`,
        `Expected Chain ID: ${t}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ConnectorChainMismatchError"
    });
  }
};
async function el(e, t) {
  var r;
  let n;
  if (typeof t.connector == "function" ? n = e._internal.connectors.setup(t.connector) : n = t.connector, n.uid === e.state.current)
    throw new Nw();
  try {
    e.setState((a) => ({ ...a, status: "connecting" })), n.emitter.emit("message", { type: "connecting" });
    const s = await n.connect({ chainId: t.chainId }), o = s.accounts;
    return n.emitter.off("connect", e._internal.events.connect), n.emitter.on("change", e._internal.events.change), n.emitter.on("disconnect", e._internal.events.disconnect), await ((r = e.storage) == null ? void 0 : r.setItem("recentConnectorId", n.id)), e.setState((a) => ({
      ...a,
      connections: new Map(a.connections).set(n.uid, {
        accounts: o,
        chainId: s.chainId,
        connector: n
      }),
      current: n.uid,
      status: "connected"
    })), { accounts: o, chainId: s.chainId };
  } catch (s) {
    throw e.setState((o) => ({
      ...o,
      // Keep existing connector connected in case of error
      status: o.current ? "connected" : "disconnected"
    })), s;
  }
}
function Dw({ abi: e, address: t, client: n }) {
  const r = n, [s, o] = r ? "public" in r && "wallet" in r ? [r.public, r.wallet] : "public" in r ? [r.public, void 0] : "wallet" in r ? [void 0, r.wallet] : [r, r] : [void 0, void 0], a = s != null, i = o != null, c = {};
  let l = !1, u = !1, d = !1;
  for (const p of e)
    if (p.type === "function" ? p.stateMutability === "view" || p.stateMutability === "pure" ? l = !0 : u = !0 : p.type === "event" && (d = !0), l && u && d)
      break;
  return a && (l && (c.read = new Proxy({}, {
    get(p, f) {
      return (...m) => {
        const { args: h, options: b } = Nr(m);
        return R(s, Ie, "readContract")({
          abi: e,
          address: t,
          functionName: f,
          args: h,
          ...b
        });
      };
    }
  })), u && (c.simulate = new Proxy({}, {
    get(p, f) {
      return (...m) => {
        const { args: h, options: b } = Nr(m);
        return R(s, bo, "simulateContract")({
          abi: e,
          address: t,
          functionName: f,
          args: h,
          ...b
        });
      };
    }
  })), d && (c.createEventFilter = new Proxy({}, {
    get(p, f) {
      return (...m) => {
        const h = e.find((w) => w.type === "event" && w.name === f), { args: b, options: y } = jo(m, h);
        return R(s, Ii, "createContractEventFilter")({
          abi: e,
          address: t,
          eventName: f,
          args: b,
          ...y
        });
      };
    }
  }), c.getEvents = new Proxy({}, {
    get(p, f) {
      return (...m) => {
        const h = e.find((w) => w.type === "event" && w.name === f), { args: b, options: y } = jo(m, h);
        return R(s, Bi, "getContractEvents")({
          abi: e,
          address: t,
          eventName: f,
          args: b,
          ...y
        });
      };
    }
  }), c.watchEvent = new Proxy({}, {
    get(p, f) {
      return (...m) => {
        const h = e.find((w) => w.type === "event" && w.name === f), { args: b, options: y } = jo(m, h);
        return R(s, Zi, "watchContractEvent")({
          abi: e,
          address: t,
          eventName: f,
          args: b,
          ...y
        });
      };
    }
  }))), i && u && (c.write = new Proxy({}, {
    get(p, f) {
      return (...m) => {
        const { args: h, options: b } = Nr(m);
        return R(o, wo, "writeContract")({
          abi: e,
          address: t,
          functionName: f,
          args: h,
          ...b
        });
      };
    }
  })), (a || i) && u && (c.estimateGas = new Proxy({}, {
    get(p, f) {
      return (...m) => {
        const { args: h, options: b } = Nr(m);
        return R(s ?? o, _d, "estimateContractGas")({
          abi: e,
          address: t,
          functionName: f,
          args: h,
          ...b,
          account: b.account ?? o.account
        });
      };
    }
  })), c.address = t, c.abi = e, c;
}
function Nr(e) {
  const t = e.length && Array.isArray(e[0]), n = t ? e[0] : [], r = (t ? e[1] : e[0]) ?? {};
  return { args: n, options: r };
}
function jo(e, t) {
  let n = !1;
  Array.isArray(e[0]) ? n = !0 : e.length === 1 ? n = t.inputs.some((o) => o.indexed) : e.length === 2 && (n = !0);
  const r = n ? e[0] : void 0, s = (n ? e[1] : e[0]) ?? {};
  return { args: r, options: s };
}
const Ea = 256;
let Mr = Ea, Fr;
function Hp(e = 11) {
  if (!Fr || Mr + e > Ea * 2) {
    Fr = "", Mr = 0;
    for (let t = 0; t < Ea; t++)
      Fr += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return Fr.substring(Mr, Mr++ + e);
}
function gt(e) {
  const { batch: t, cacheTime: n = e.pollingInterval ?? 4e3, ccipRead: r, key: s = "base", name: o = "Base Client", pollingInterval: a = 4e3, type: i = "base" } = e, c = e.chain, l = e.account ? de(e.account) : void 0, { config: u, request: d, value: p } = e.transport({
    chain: c,
    pollingInterval: a
  }), f = { ...u, ...p }, m = {
    account: l,
    batch: t,
    cacheTime: n,
    ccipRead: r,
    chain: c,
    key: s,
    name: o,
    pollingInterval: a,
    request: d,
    transport: f,
    type: i,
    uid: Hp()
  };
  function h(b) {
    return (y) => {
      const w = y(b);
      for (const E in m)
        delete w[E];
      const v = { ...b, ...w };
      return Object.assign(v, { extend: h(v) });
    };
  }
  return Object.assign(m, { extend: h(m) });
}
function Rw() {
  return null;
}
function Mn({ key: e, name: t, request: n, retryCount: r = 3, retryDelay: s = 150, timeout: o, type: a }, i) {
  const c = Hp();
  return {
    config: {
      key: e,
      name: t,
      request: n,
      retryCount: r,
      retryDelay: s,
      timeout: o,
      type: a
    },
    request: vy(n, { retryCount: r, retryDelay: s, uid: c }),
    value: i
  };
}
function vr(e, t = {}) {
  const { key: n = "custom", name: r = "Custom Provider", retryDelay: s } = t;
  return ({ retryCount: o }) => Mn({
    key: n,
    name: r,
    request: e.request.bind(e),
    retryCount: t.retryCount ?? o,
    retryDelay: s,
    type: "custom"
  });
}
function Ji(e, t = {}) {
  const { key: n = "fallback", name: r = "Fallback", rank: s = !1, retryCount: o, retryDelay: a } = t;
  return ({ chain: i, pollingInterval: c = 4e3, timeout: l, ...u }) => {
    let d = e, p = () => {
    };
    const f = Mn({
      key: n,
      name: r,
      async request({ method: m, params: h }) {
        const b = async (y = 0) => {
          const w = d[y]({
            ...u,
            chain: i,
            retryCount: 0,
            timeout: l
          });
          try {
            const v = await w.request({
              method: m,
              params: h
            });
            return p({
              method: m,
              params: h,
              response: v,
              transport: w,
              status: "success"
            }), v;
          } catch (v) {
            if (p({
              error: v,
              method: m,
              params: h,
              transport: w,
              status: "error"
            }), Ow(v) || y === d.length - 1)
              throw v;
            return b(y + 1);
          }
        };
        return b();
      },
      retryCount: o,
      retryDelay: a,
      type: "fallback"
    }, {
      onResponse: (m) => p = m,
      transports: d.map((m) => m({ chain: i, retryCount: 0 }))
    });
    if (s) {
      const m = typeof s == "object" ? s : {};
      Lw({
        chain: i,
        interval: m.interval ?? c,
        onTransports: (h) => d = h,
        sampleCount: m.sampleCount,
        timeout: m.timeout,
        transports: d,
        weights: m.weights
      });
    }
    return f;
  };
}
function Ow(e) {
  return "code" in e && typeof e.code == "number" && (e.code === Ut.code || e.code === D.code || e.code === 5e3);
}
function Lw({ chain: e, interval: t = 4e3, onTransports: n, sampleCount: r = 10, timeout: s = 1e3, transports: o, weights: a = {} }) {
  const { stability: i = 0.7, latency: c = 0.3 } = a, l = [], u = async () => {
    const d = await Promise.all(o.map(async (m) => {
      const h = m({ chain: e, retryCount: 0, timeout: s }), b = Date.now();
      let y, w;
      try {
        await h.request({ method: "net_listening" }), w = 1;
      } catch {
        w = 0;
      } finally {
        y = Date.now();
      }
      return { latency: y - b, success: w };
    }));
    l.push(d), l.length > r && l.shift();
    const p = Math.max(...l.map((m) => Math.max(...m.map(({ latency: h }) => h)))), f = o.map((m, h) => {
      const b = l.map((g) => g[h].latency), w = 1 - b.reduce((g, C) => g + C, 0) / b.length / p, v = l.map((g) => g[h].success), E = v.reduce((g, C) => g + C, 0) / v.length;
      return E === 0 ? [0, h] : [
        c * w + i * E,
        h
      ];
    }).sort((m, h) => h[0] - m[0]);
    n(f.map(([, m]) => o[m])), await Ss(t), u();
  };
  u();
}
class Xi extends S {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro",
      name: "UrlRequiredError"
    });
  }
}
function Kn(e, t = {}) {
  const { batch: n, fetchOptions: r, key: s = "http", name: o = "HTTP JSON-RPC", onFetchRequest: a, onFetchResponse: i, retryDelay: c } = t;
  return ({ chain: l, retryCount: u, timeout: d }) => {
    const { batchSize: p = 1e3, wait: f = 0 } = typeof n == "object" ? n : {}, m = t.retryCount ?? u, h = d ?? t.timeout ?? 1e4, b = e || (l == null ? void 0 : l.rpcUrls.default.http[0]);
    if (!b)
      throw new Xi();
    const y = Jd(b, {
      fetchOptions: r,
      onRequest: a,
      onResponse: i,
      timeout: h
    });
    return Mn({
      key: s,
      name: o,
      async request({ method: w, params: v }) {
        const E = { method: w, params: v }, { schedule: g } = xi({
          id: b,
          wait: f,
          shouldSplitBatch(I) {
            return I.length > p;
          },
          fn: (I) => y.request({
            body: I
          }),
          sort: (I, P) => I.id - P.id
        }), C = async (I) => n ? g(I) : [
          await y.request({
            body: I
          })
        ], [{ error: A, result: k }] = await C(E);
        if (A)
          throw new It({
            body: E,
            error: A,
            url: b
          });
        return k;
      },
      retryCount: m,
      retryDelay: c,
      timeout: h,
      type: "http"
    }, {
      fetchOptions: r,
      url: b
    });
  };
}
function zw(e) {
  var d, p, f;
  const { scheme: t, statement: n, ...r } = ((d = e.match(_w)) == null ? void 0 : d.groups) ?? {}, { chainId: s, expirationTime: o, issuedAt: a, notBefore: i, requestId: c, ...l } = ((p = e.match(Hw)) == null ? void 0 : p.groups) ?? {}, u = (f = e.split("Resources:")[1]) == null ? void 0 : f.split(`
- `).slice(1);
  return {
    ...r,
    ...l,
    ...s ? { chainId: Number(s) } : {},
    ...o ? { expirationTime: new Date(o) } : {},
    ...a ? { issuedAt: new Date(a) } : {},
    ...i ? { notBefore: new Date(i) } : {},
    ...c ? { requestId: c } : {},
    ...u ? { resources: u } : {},
    ...t ? { scheme: t } : {},
    ...n ? { statement: n } : {}
  };
}
const _w = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/, Hw = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function $w(e) {
  const { address: t, domain: n, message: r, nonce: s, scheme: o, time: a = /* @__PURE__ */ new Date() } = e;
  if (n && r.domain !== n || s && r.nonce !== s || o && r.scheme !== o || r.expirationTime && a >= r.expirationTime || r.notBefore && a < r.notBefore)
    return !1;
  try {
    if (!r.address || t && !yt(r.address, t))
      return !1;
  } catch {
    return !1;
  }
  return !0;
}
async function jw(e, t) {
  const { address: n, domain: r, message: s, nonce: o, scheme: a, signature: i, time: c = /* @__PURE__ */ new Date(), ...l } = t, u = zw(s);
  if (!u.address || !$w({
    address: n,
    domain: r,
    message: u,
    nonce: o,
    scheme: a,
    time: c
  }))
    return !1;
  const p = uo(s);
  return Wi(e, {
    address: u.address,
    hash: p,
    signature: i,
    ...l
  });
}
function Yi(e) {
  return {
    call: (t) => bt(e, t),
    createBlockFilter: () => Xb(e),
    createContractEventFilter: (t) => Ii(e, t),
    createEventFilter: (t) => Ld(e, t),
    createPendingTransactionFilter: () => zd(e),
    estimateContractGas: (t) => _d(e, t),
    estimateGas: (t) => $t(e, t),
    getBalance: (t) => Ws(e, t),
    getBlobBaseFee: () => ey(e),
    getBlock: (t) => We(e, t),
    getBlockNumber: (t) => Bn(e, t),
    getBlockTransactionCount: (t) => Hd(e, t),
    getBytecode: (t) => ma(e, t),
    getChainId: () => mr(e),
    getCode: (t) => ma(e, t),
    getContractEvents: (t) => Bi(e, t),
    getEip712Domain: (t) => ly(e, t),
    getEnsAddress: (t) => Ci(e, t),
    getEnsAvatar: (t) => Ei(e, t),
    getEnsName: (t) => ki(e, t),
    getEnsResolver: (t) => Rd(e, t),
    getEnsText: (t) => vi(e, t),
    getFeeHistory: (t) => $d(e, t),
    estimateFeesPerGas: (t) => Du(e, t),
    getFilterChanges: (t) => io(e, t),
    getFilterLogs: (t) => py(e, t),
    getGasPrice: () => Vs(e),
    getLogs: (t) => Si(e, t),
    getProof: (t) => Ap(e, t),
    estimateMaxPriorityFeePerGas: (t) => Mu(e, t),
    getStorageAt: (t) => jd(e, t),
    getTransaction: (t) => Tn(e, t),
    getTransactionConfirmations: (t) => qd(e, t),
    getTransactionCount: (t) => Zs(e, t),
    getTransactionReceipt: (t) => Is(e, t),
    multicall: (t) => Pi(e, t),
    prepareTransactionRequest: (t) => jt(e, t),
    readContract: (t) => Ie(e, t),
    sendRawTransaction: (t) => pi(e, t),
    simulateContract: (t) => bo(e, t),
    verifyMessage: (t) => Dp(e, t),
    verifySiweMessage: (t) => jw(e, t),
    verifyTypedData: (t) => Rp(e, t),
    uninstallFilter: (t) => co(e, t),
    waitForTransactionReceipt: (t) => ji(e, t),
    watchBlocks: (t) => Gd(e, t),
    watchBlockNumber: (t) => Ni(e, t),
    watchContractEvent: (t) => Zi(e, t),
    watchEvent: (t) => gy(e, t),
    watchPendingTransactions: (t) => Kd(e, t)
  };
}
function qw(e) {
  const { key: t = "public", name: n = "Public Client" } = e;
  return gt({
    ...e,
    key: t,
    name: n,
    type: "publicClient"
  }).extend(Yi);
}
function $p({ mode: e }) {
  return (t) => {
    const n = t.extend(() => ({
      mode: e
    }));
    return {
      dropTransaction: (r) => k1(n, r),
      dumpState: () => Yb(n),
      getAutomine: () => I1(n),
      getTxpoolContent: () => S1(n),
      getTxpoolStatus: () => B1(n),
      impersonateAccount: (r) => hy(n, r),
      increaseTime: (r) => my(n, r),
      inspectTxpool: () => T1(n),
      loadState: (r) => by(n, r),
      mine: (r) => yy(n, r),
      removeBlockTimestampInterval: () => U1(n),
      reset: (r) => P1(n, r),
      revert: (r) => N1(n, r),
      sendUnsignedTransaction: (r) => F1(n, r),
      setAutomine: (r) => R1(n, r),
      setBalance: (r) => D1(n, r),
      setBlockGasLimit: (r) => O1(n, r),
      setBlockTimestampInterval: (r) => L1(n, r),
      setCode: (r) => z1(n, r),
      setCoinbase: (r) => _1(n, r),
      setIntervalMining: (r) => H1(n, r),
      setLoggingEnabled: (r) => $1(n, r),
      setMinGasPrice: (r) => j1(n, r),
      setNextBlockBaseFeePerGas: (r) => q1(n, r),
      setNextBlockTimestamp: (r) => G1(n, r),
      setNonce: (r) => K1(n, r),
      setRpcUrl: (r) => Q1(n, r),
      setStorageAt: (r) => V1(n, r),
      snapshot: () => W1(n),
      stopImpersonatingAccount: (r) => Z1(n, r)
    };
  };
}
function Gw(e) {
  const { key: t = "test", name: n = "Test Client", mode: r } = e;
  return gt({
    ...e,
    key: t,
    name: n,
    type: "testClient"
  }).extend((o) => ({
    mode: r,
    ...$p({ mode: r })(o)
  }));
}
function Us(e) {
  return {
    addChain: (t) => Wf(e, t),
    deployContract: (t) => Vu(e, t),
    getAddresses: () => xy(e),
    getChainId: () => mr(e),
    getPermissions: () => Cy(e),
    prepareTransactionRequest: (t) => jt(e, t),
    requestAddresses: () => v1(e),
    requestPermissions: (t) => E1(e, t),
    sendRawTransaction: (t) => pi(e, t),
    sendTransaction: (t) => br(e, t),
    signMessage: (t) => qi(e, t),
    signTransaction: (t) => M1(e, t),
    signTypedData: (t) => vp(e, t),
    switchChain: (t) => J1(e, t),
    watchAsset: (t) => Op(e, t),
    writeContract: (t) => wo(e, t)
  };
}
function Kw(e) {
  const { key: t = "wallet", name: n = "Wallet Client", transport: r } = e;
  return gt({
    ...e,
    key: t,
    name: n,
    transport: r,
    type: "walletClient"
  }).extend(Us);
}
function jp(e, t = {}) {
  const { keepAlive: n, key: r = "webSocket", name: s = "WebSocket JSON-RPC", reconnect: o, retryDelay: a } = t;
  return ({ chain: i, retryCount: c, timeout: l }) => {
    var f;
    const u = t.retryCount ?? c, d = l ?? t.timeout ?? 1e4, p = e || ((f = i == null ? void 0 : i.rpcUrls.default.webSocket) == null ? void 0 : f[0]);
    if (!p)
      throw new Xi();
    return Mn({
      key: r,
      name: s,
      async request({ method: m, params: h }) {
        const b = { method: m, params: h }, y = await as(p, {
          keepAlive: n,
          reconnect: o
        }), { error: w, result: v } = await y.requestAsync({
          body: b,
          timeout: d
        });
        if (w)
          throw new It({
            body: b,
            error: w,
            url: p
          });
        return v;
      },
      retryCount: u,
      retryDelay: a,
      timeout: d,
      type: "webSocket"
    }, {
      getSocket() {
        return Dy(p);
      },
      getRpcClient() {
        return as(p);
      },
      async subscribe({ params: m, onData: h, onError: b }) {
        const y = await as(p), { result: w } = await new Promise((v, E) => y.request({
          body: {
            method: "eth_subscribe",
            params: m
          },
          onError(g) {
            E(g), b == null || b(g);
          },
          onResponse(g) {
            if (g.error) {
              E(g.error), b == null || b(g.error);
              return;
            }
            if (typeof g.id == "number") {
              v(g);
              return;
            }
            g.method === "eth_subscription" && h(g.params);
          }
        }));
        return {
          subscriptionId: w,
          async unsubscribe() {
            return new Promise((v) => y.request({
              body: {
                method: "eth_unsubscribe",
                params: [w]
              },
              onResponse: v
            }));
          }
        };
      }
    });
  };
}
const Qw = "0x0000000000000000000000000000000000000000";
class Vw extends Error {
  constructor(t, n) {
    super(n), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.code = t, this.details = n;
  }
}
const qo = "/docs/contract/decodeDeployData";
function Ww(e) {
  const { abi: t, bytecode: n, data: r } = e;
  if (r === n)
    return { bytecode: n };
  const s = t.find((a) => "type" in a && a.type === "constructor");
  if (!s)
    throw new Da({ docsPath: qo });
  if (!("inputs" in s))
    throw new Wn({ docsPath: qo });
  if (!s.inputs || s.inputs.length === 0)
    throw new Wn({ docsPath: qo });
  return { args: ht(s.inputs, `0x${r.replace(n, "")}`), bytecode: n };
}
function Zw({ r: e, yParityAndS: t }) {
  const n = ne(t), r = n[0] & 128 ? 1 : 0, s = n;
  return r === 1 && (s[0] &= 127), { r: e, s: W(s), yParity: r };
}
function tl(e) {
  const { r: t, s: n } = Nn.Signature.fromCompact(e.slice(2, 130));
  return {
    r: U(t, { size: 32 }),
    yParityAndS: U(n, { size: 32 })
  };
}
function nl(e) {
  const { r: t, s: n } = Nn.Signature.fromCompact(e.slice(2, 130)), r = +`0x${e.slice(130)}`, [s, o] = (() => {
    if (r === 0 || r === 1)
      return [void 0, r];
    if (r === 27)
      return [BigInt(r), 0];
    if (r === 28)
      return [BigInt(r), 1];
    throw new Error("Invalid yParityOrV value");
  })();
  return typeof s < "u" ? {
    r: U(t, { size: 32 }),
    s: U(n, { size: 32 }),
    v: s,
    yParity: o
  } : {
    r: U(t, { size: 32 }),
    s: U(n, { size: 32 }),
    yParity: o
  };
}
async function Jw(e) {
  const { serializedTransaction: t, signature: n } = e, r = gp(t), s = n ?? {
    r: r.r,
    s: r.s,
    v: r.v,
    yParity: r.yParity
  }, o = ho({
    ...r,
    r: void 0,
    s: void 0,
    v: void 0,
    yParity: void 0,
    sidecars: void 0
  });
  return await Ot({
    hash: Y(o),
    signature: s
  });
}
function Xw(e) {
  const { r: t, s: n, v: r, yParity: s } = e, o = Number(s ?? r - 27n);
  let a = n;
  if (o === 1) {
    const i = ne(n);
    i[0] |= 128, a = W(i);
  }
  return { r: t, yParityAndS: a };
}
function rl({ r: e, yParityAndS: t }) {
  return `0x${new Nn.Signature(L(e), L(t)).toCompactHex()}`;
}
function Yw(e) {
  const { sidecars: t, version: n } = e, r = e.to ?? (typeof t[0].blob == "string" ? "hex" : "bytes"), s = [];
  for (const { commitment: o } of t)
    s.push(ci({
      commitment: o,
      to: r,
      version: n
    }));
  return s;
}
function eg(e) {
  const t = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), n = typeof e.blobs[0] == "string" ? e.blobs.map((i) => ne(i)) : e.blobs, r = n.reduce((i, c) => i + c.length, 0), s = an(new Uint8Array(r));
  let o = !0;
  for (const i of n) {
    const c = an(i);
    for (; o && c.position < i.length; ) {
      c.incrementPosition(1);
      let l = 31;
      i.length - c.position < 31 && (l = i.length - c.position);
      for (const u in Array.from({ length: l })) {
        const d = c.readByte();
        if (d === 128 && !c.inspectBytes(c.remaining).includes(128)) {
          o = !1;
          break;
        }
        s.pushByte(d);
      }
    }
  }
  const a = s.bytes.slice(0, s.position);
  return t === "hex" ? W(a) : a;
}
function qp({ blobToKzgCommitment: e, computeBlobKzgProof: t }) {
  return {
    blobToKzgCommitment: e,
    computeBlobKzgProof: t
  };
}
function tg(e, t) {
  try {
    e.loadTrustedSetup(t);
  } catch (n) {
    const r = n;
    if (!r.message.includes("trusted setup is already loaded"))
      throw r;
  }
  return qp(e);
}
const n3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbiConstructorNotFoundError: Da,
  AbiConstructorParamsNotFoundError: Wn,
  AbiDecodingDataSizeInvalidError: Jf,
  AbiDecodingDataSizeTooSmallError: Ra,
  AbiDecodingZeroDataError: cr,
  AbiEncodingArrayLengthMismatchError: Yl,
  AbiEncodingBytesSizeMismatchError: eu,
  AbiEncodingLengthMismatchError: Oa,
  AbiErrorInputsNotFoundError: tu,
  AbiErrorNotFoundError: sa,
  AbiErrorSignatureNotFoundError: La,
  AbiEventNotFoundError: oa,
  AbiEventSignatureEmptyTopicsError: nu,
  AbiEventSignatureNotFoundError: za,
  AbiFunctionNotFoundError: Bt,
  AbiFunctionOutputsNotFoundError: _a,
  AbiFunctionSignatureNotFoundError: ru,
  AccountStateConflictError: Ou,
  BaseError: S,
  BaseFeeScalarError: Pu,
  BlockNotFoundError: oi,
  BytesSizeMismatchError: Ha,
  CallExecutionError: wi,
  ChainDisconnectedError: Nt,
  ChainDoesNotSupportContract: ps,
  ChainMismatchError: Cu,
  ChainNotFoundError: Au,
  CircularReferenceError: yd,
  ClientChainNotConfiguredError: Wa,
  ContractFunctionExecutionError: Ge,
  ContractFunctionRevertedError: ks,
  ContractFunctionZeroDataError: kd,
  CounterfactualDeploymentFailedError: Id,
  DecodeLogDataMismatch: sn,
  DecodeLogTopicsMismatch: lr,
  EIP1193ProviderRpcError: Vw,
  Eip1559FeesNotSupportedError: qs,
  EnsAvatarInvalidNftUriError: Xt,
  EnsAvatarUnsupportedNamespaceError: Md,
  EnsAvatarUriResolutionError: ro,
  EstimateGasExecutionError: Ru,
  ExecutionRevertedError: vt,
  FeeCapTooHighError: Ve,
  FeeCapTooLowError: fs,
  FeeConflictError: vu,
  FilterTypeNotSupportedError: Od,
  HttpRequestError: ot,
  InsufficientFundsError: ys,
  IntegerOutOfRangeError: ql,
  InternalRpcError: it,
  IntrinsicGasTooHighError: ws,
  IntrinsicGasTooLowError: gs,
  InvalidAbiDecodingTypeError: ou,
  InvalidAbiEncodingTypeError: su,
  InvalidAbiItemError: ad,
  InvalidAbiParameterError: cd,
  InvalidAbiParametersError: ld,
  InvalidAbiTypeParameterError: hd,
  InvalidAddressError: ee,
  InvalidArrayError: au,
  InvalidBytesBooleanError: Gl,
  InvalidChainIdError: Lt,
  InvalidDecimalNumberError: xp,
  InvalidDefinitionTypeError: iu,
  InvalidFunctionModifierError: fd,
  InvalidHexBooleanError: Kl,
  InvalidHexValueError: Ql,
  InvalidInputRpcError: ct,
  InvalidLegacyVError: ei,
  InvalidModifierError: pd,
  InvalidParameterError: ud,
  InvalidParamsRpcError: dn,
  InvalidParenthesisError: wd,
  InvalidRequestRpcError: ln,
  InvalidSerializableTransactionError: Eu,
  InvalidSerializedTransactionError: En,
  InvalidSerializedTransactionTypeError: ku,
  InvalidSignatureError: en,
  InvalidStorageKeySizeError: Iu,
  InvalidStructSignatureError: bd,
  JsonRpcVersionUnsupportedError: hn,
  LimitExceededRpcError: Pt,
  MaxFeePerGasTooLowError: Nu,
  MethodNotFoundRpcError: un,
  MethodNotSupportedRpcError: fn,
  NonceMaxValueError: bs,
  NonceTooHighError: hs,
  NonceTooLowError: ms,
  ParseRpcError: cn,
  ProviderDisconnectedError: lt,
  ProviderRpcError: _t,
  RawContractError: to,
  ResourceNotFoundRpcError: pn,
  ResourceUnavailableRpcError: ye,
  RpcError: fe,
  RpcRequestError: It,
  SizeExceedsPaddingSizeError: Fa,
  SizeOverflowError: Vl,
  SliceOffsetOutOfBoundsError: Ma,
  SocketClosedError: Zn,
  SolidityProtectedKeywordError: dd,
  StateAssignmentConflictError: Lu,
  SwitchChainError: J,
  TimeoutError: Cs,
  TipAboveFeeCapError: Tt,
  TransactionExecutionError: Su,
  TransactionNotFoundError: ti,
  TransactionReceiptNotFoundError: ni,
  TransactionRejectedRpcError: Ut,
  TransactionTypeNotSupportedError: xs,
  UnauthorizedProviderError: mn,
  UnknownNodeError: pr,
  UnknownRpcError: Bu,
  UnknownSignatureError: md,
  UnknownTypeError: id,
  UnsupportedPackedAbiType: cu,
  UnsupportedProviderMethodError: bn,
  UrlRequiredError: Xi,
  UserRejectedRequestError: D,
  WaitForTransactionReceiptTimeoutError: aa,
  WebSocketRequestError: ia,
  assertCurrentChain: Za,
  assertRequest: Ht,
  assertTransactionEIP1559: gr,
  assertTransactionEIP2930: Hi,
  assertTransactionLegacy: $i,
  blobsToCommitments: Js,
  blobsToProofs: Xs,
  boolToBytes: Zl,
  boolToHex: Os,
  bytesToBigInt: fi,
  bytesToBool: hi,
  bytesToHex: W,
  bytesToNumber: Fe,
  bytesToRlp: Fh,
  bytesToString: mi,
  ccipFetch: Bs,
  ccipRequest: Bs,
  checksumAddress: An,
  commitmentToVersionedHash: ci,
  commitmentsToVersionedHashes: li,
  compactSignatureToHex: rl,
  compactSignatureToSignature: Zw,
  concat: ke,
  concatBytes: lu,
  concatHex: ue,
  createClient: gt,
  createNonceManager: Cp,
  createPublicClient: qw,
  createTestClient: Gw,
  createTransport: Mn,
  createWalletClient: Kw,
  custom: vr,
  decodeAbiParameters: ht,
  decodeDeployData: Ww,
  decodeErrorResult: yi,
  decodeEventLog: oo,
  decodeFunctionData: zy,
  decodeFunctionResult: qt,
  defineBlock: Qs,
  defineChain: x,
  defineKzg: qp,
  defineTransaction: Gs,
  defineTransactionReceipt: Ui,
  defineTransactionRequest: si,
  deploylessCallViaBytecodeBytecode: Td,
  deploylessCallViaFactoryBytecode: Ud,
  domainSeparator: Ly,
  encodeAbiParameters: ze,
  encodeDeployData: dr,
  encodeErrorResult: _y,
  encodeEventTopics: Sn,
  encodeFunctionData: Je,
  encodeFunctionResult: Hy,
  encodePacked: $y,
  erc20Abi: $0,
  erc20Abi_bytes32: j0,
  erc4626Abi: G0,
  erc721Abi: q0,
  etherUnits: Ja,
  extractChain: Ty,
  fallback: Ji,
  formatBlock: Ks,
  formatEther: $s,
  formatGwei: pe,
  formatLog: Oe,
  formatTransaction: In,
  formatTransactionReceipt: Ti,
  formatTransactionRequest: ft,
  formatUnits: Ce,
  fromBlobs: eg,
  fromBytes: K0,
  fromHex: ra,
  fromRlp: Oi,
  getAbiItem: Ze,
  getAddress: H,
  getChainContractAddress: Gt,
  getContract: Dw,
  getContractAddress: jy,
  getContractError: Ft,
  getCreate2Address: op,
  getCreateAddress: sp,
  getEventSelector: Xn,
  getEventSignature: $n,
  getFunctionSelector: Mt,
  getFunctionSignature: $n,
  getSerializedTransactionType: bp,
  getTransactionType: di,
  getTypesForEIP712Domain: lo,
  gweiUnits: Xa,
  hashDomain: Di,
  hashMessage: uo,
  hashTypedData: Fi,
  hexToBigInt: L,
  hexToBool: Xl,
  hexToBytes: ne,
  hexToCompactSignature: tl,
  hexToNumber: V,
  hexToRlp: Dh,
  hexToSignature: nl,
  hexToString: at,
  http: Kn,
  isAddress: Z,
  isAddressEqual: yt,
  isBytes: ya,
  isErc6492Signature: _i,
  isHash: ip,
  isHex: _,
  keccak256: Y,
  labelhash: Bd,
  maxInt104: tm,
  maxInt112: nm,
  maxInt120: rm,
  maxInt128: sm,
  maxInt136: om,
  maxInt144: am,
  maxInt152: im,
  maxInt16: qh,
  maxInt160: cm,
  maxInt168: lm,
  maxInt176: um,
  maxInt184: dm,
  maxInt192: pm,
  maxInt200: fm,
  maxInt208: hm,
  maxInt216: mm,
  maxInt224: bm,
  maxInt232: ym,
  maxInt24: Gh,
  maxInt240: wm,
  maxInt248: gm,
  maxInt256: xm,
  maxInt32: Kh,
  maxInt40: Qh,
  maxInt48: Vh,
  maxInt56: Wh,
  maxInt64: Zh,
  maxInt72: Jh,
  maxInt8: jh,
  maxInt80: Xh,
  maxInt88: Yh,
  maxInt96: em,
  maxUint104: u0,
  maxUint112: d0,
  maxUint120: p0,
  maxUint128: f0,
  maxUint136: h0,
  maxUint144: m0,
  maxUint152: b0,
  maxUint16: Uu,
  maxUint160: y0,
  maxUint168: w0,
  maxUint176: g0,
  maxUint184: x0,
  maxUint192: C0,
  maxUint200: A0,
  maxUint208: v0,
  maxUint216: E0,
  maxUint224: k0,
  maxUint232: I0,
  maxUint24: e0,
  maxUint240: S0,
  maxUint248: B0,
  maxUint256: kn,
  maxUint32: t0,
  maxUint40: n0,
  maxUint48: r0,
  maxUint56: s0,
  maxUint64: o0,
  maxUint72: a0,
  maxUint8: Ym,
  maxUint80: i0,
  maxUint88: c0,
  maxUint96: l0,
  minInt104: Mm,
  minInt112: Fm,
  minInt120: Dm,
  minInt128: Rm,
  minInt136: Om,
  minInt144: Lm,
  minInt152: zm,
  minInt16: Am,
  minInt160: _m,
  minInt168: Hm,
  minInt176: $m,
  minInt184: jm,
  minInt192: qm,
  minInt200: Gm,
  minInt208: Km,
  minInt216: Qm,
  minInt224: Vm,
  minInt232: Wm,
  minInt24: vm,
  minInt240: Zm,
  minInt248: Jm,
  minInt256: Xm,
  minInt32: Em,
  minInt40: km,
  minInt48: Im,
  minInt56: Sm,
  minInt64: Bm,
  minInt72: Tm,
  minInt8: Cm,
  minInt80: Um,
  minInt88: Pm,
  minInt96: Nm,
  multicall3Abi: As,
  namehash: Gn,
  nonceManager: x1,
  numberToBytes: Jl,
  numberToHex: U,
  offchainLookup: Vd,
  offchainLookupAbiItem: Mi,
  offchainLookupSignature: Qd,
  pad: Ee,
  padBytes: Wl,
  padHex: Me,
  parseAbi: bi,
  parseAbiItem: Sb,
  parseAbiParameter: Bb,
  parseAbiParameters: Tb,
  parseCompactSignature: tl,
  parseErc6492Signature: s1,
  parseEther: y1,
  parseEventLogs: ao,
  parseGwei: w1,
  parseSignature: nl,
  parseTransaction: gp,
  parseUnits: mo,
  prepareEncodeFunctionData: Ad,
  presignMessagePrefix: up,
  publicActions: Yi,
  recoverAddress: Ot,
  recoverMessageAddress: pp,
  recoverPublicKey: bu,
  recoverTransactionAddress: Jw,
  recoverTypedDataAddress: fp,
  ripemd160: Yy,
  rpcSchema: Rw,
  rpcTransactionType: Tu,
  serializeAccessList: Un,
  serializeCompactSignature: rl,
  serializeErc6492Signature: mp,
  serializeSignature: Aa,
  serializeTransaction: ho,
  serializeTypedData: np,
  setErrorConfig: Gf,
  setupKzg: tg,
  sha256: ii,
  sidecarsToVersionedHashes: Yw,
  signatureToCompactSignature: Xw,
  signatureToHex: Aa,
  size: X,
  slice: Qe,
  sliceBytes: Ga,
  sliceHex: Hs,
  stringToBytes: st,
  stringToHex: Ke,
  stringify: re,
  testActions: $p,
  toBlobSidecars: Ys,
  toBlobs: Ku,
  toBytes: oe,
  toEventHash: Es,
  toEventSelector: Xn,
  toEventSignature: $n,
  toFunctionHash: Es,
  toFunctionSelector: Mt,
  toFunctionSignature: $n,
  toHex: M,
  toPrefixedMessage: dp,
  toRlp: we,
  transactionType: ai,
  trim: se,
  universalSignatureValidatorAbi: Ju,
  universalSignatureValidatorByteCode: Pd,
  validateTypedData: Ri,
  verifyHash: e1,
  verifyMessage: t1,
  verifyTypedData: n1,
  walletActions: Us,
  webSocket: jp,
  weiUnits: Ya,
  withRetry: dt,
  withTimeout: wt,
  zeroAddress: Qw,
  zeroHash: r1
}, Symbol.toStringTag, { value: "Module" }));
async function Er(e, t = {}) {
  let n;
  if (t.connector) {
    const { connector: l } = t, [u, d] = await Promise.all([
      l.getAccounts(),
      l.getChainId()
    ]);
    n = {
      accounts: u,
      chainId: d,
      connector: l
    };
  } else
    n = e.state.connections.get(e.state.current);
  if (!n)
    throw new _p();
  const r = t.chainId ?? n.chainId, s = await n.connector.getChainId();
  if (s !== n.chainId)
    throw new Fw({
      connectionChainId: n.chainId,
      connectorChainId: s
    });
  const o = n.connector;
  if (o.getClient)
    return o.getClient({ chainId: r });
  const a = de(t.account ?? n.accounts[0]);
  a.address = H(a.address);
  const i = e.chains.find((l) => l.id === r), c = await n.connector.getProvider({ chainId: r });
  if (t.account && !n.accounts.some((l) => l.toLowerCase() === a.address.toLowerCase()))
    throw new Mw({
      address: a.address,
      connector: o
    });
  return gt({
    account: a,
    chain: i,
    name: "Connector Client",
    transport: (l) => vr(c)({ ...l, retryCount: 0 })
  });
}
async function ng(e, t = {}) {
  var s, o;
  let n;
  if (t.connector)
    n = t.connector;
  else {
    const { connections: a, current: i } = e.state, c = a.get(i);
    n = c == null ? void 0 : c.connector;
  }
  const r = e.state.connections;
  n && (await n.disconnect(), n.emitter.off("change", e._internal.events.change), n.emitter.off("disconnect", e._internal.events.disconnect), n.emitter.on("connect", e._internal.events.connect), r.delete(n.uid)), e.setState((a) => {
    if (r.size === 0)
      return {
        ...a,
        connections: /* @__PURE__ */ new Map(),
        current: null,
        status: "disconnected"
      };
    const i = r.values().next().value;
    return {
      ...a,
      connections: new Map(r),
      current: i.connector.uid
    };
  });
  {
    const a = e.state.current;
    if (!a)
      return;
    const i = (s = e.state.connections.get(a)) == null ? void 0 : s.connector;
    if (!i)
      return;
    await ((o = e.storage) == null ? void 0 : o.setItem("recentConnectorId", i.id));
  }
}
async function rg(e, t) {
  const { chainId: n, connector: r, ...s } = t;
  let o;
  t.account ? o = t.account : o = (await Er(e, {
    account: t.account,
    chainId: n,
    connector: r
  })).account;
  const a = e.getClient({ chainId: n });
  return le(a, $t, "estimateGas")({ ...s, account: o });
}
function Gp(e) {
  return typeof e == "number" ? e : e === "wei" ? 0 : Math.abs(Ya[e]);
}
function kr(e) {
  const t = e.state.current, n = e.state.connections.get(t), r = n == null ? void 0 : n.accounts, s = r == null ? void 0 : r[0], o = e.chains.find((i) => i.id === (n == null ? void 0 : n.chainId)), a = e.state.status;
  switch (a) {
    case "connected":
      return {
        address: s,
        addresses: r,
        chain: o,
        chainId: n == null ? void 0 : n.chainId,
        connector: n == null ? void 0 : n.connector,
        isConnected: !0,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !1,
        status: a
      };
    case "reconnecting":
      return {
        address: s,
        addresses: r,
        chain: o,
        chainId: n == null ? void 0 : n.chainId,
        connector: n == null ? void 0 : n.connector,
        isConnected: !!s,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !0,
        status: a
      };
    case "connecting":
      return {
        address: s,
        addresses: r,
        chain: o,
        chainId: n == null ? void 0 : n.chainId,
        connector: n == null ? void 0 : n.connector,
        isConnected: !1,
        isConnecting: !0,
        isDisconnected: !1,
        isReconnecting: !1,
        status: a
      };
    case "disconnected":
      return {
        address: void 0,
        addresses: void 0,
        chain: void 0,
        chainId: void 0,
        connector: void 0,
        isConnected: !1,
        isConnecting: !1,
        isDisconnected: !0,
        isReconnecting: !1,
        status: a
      };
  }
}
async function sg(e, t) {
  const { allowFailure: n = !0, chainId: r, contracts: s, ...o } = t, a = e.getClient({ chainId: r });
  return le(a, Pi, "multicall")({
    allowFailure: n,
    contracts: s,
    ...o
  });
}
function og(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return le(s, Ie, "readContract")(r);
}
async function ag(e, t) {
  var i;
  const { allowFailure: n = !0, blockNumber: r, blockTag: s, ...o } = t, a = t.contracts;
  try {
    const c = {};
    for (const [p, f] of a.entries()) {
      const m = f.chainId ?? e.state.chainId;
      c[m] || (c[m] = []), (i = c[m]) == null || i.push({ contract: f, index: p });
    }
    const l = () => Object.entries(c).map(([p, f]) => sg(e, {
      ...o,
      allowFailure: n,
      blockNumber: r,
      blockTag: s,
      chainId: Number.parseInt(p),
      contracts: f.map(({ contract: m }) => m)
    })), u = (await Promise.all(l())).flat(), d = Object.values(c).flatMap((p) => p.map(({ index: f }) => f));
    return u.reduce((p, f, m) => (p && (p[d[m]] = f), p), []);
  } catch (c) {
    if (c instanceof Ge)
      throw c;
    const l = () => a.map((u) => og(e, { ...u, blockNumber: r, blockTag: s }));
    return n ? (await Promise.allSettled(l())).map((u) => u.status === "fulfilled" ? { result: u.value, status: "success" } : { error: u.reason, result: void 0, status: "failure" }) : await Promise.all(l());
  }
}
async function ig(e, t) {
  const { address: n, blockNumber: r, blockTag: s, chainId: o, token: a, unit: i = "ether" } = t;
  if (a)
    try {
      return sl(e, {
        balanceAddress: n,
        chainId: o,
        symbolType: "string",
        tokenAddress: a
      });
    } catch (p) {
      if (p instanceof Ge) {
        const f = await sl(e, {
          balanceAddress: n,
          chainId: o,
          symbolType: "bytes32",
          tokenAddress: a
        }), m = at(se(f.symbol, { dir: "right" }));
        return { ...f, symbol: m };
      }
      throw p;
    }
  const c = e.getClient({ chainId: o }), u = await le(c, Ws, "getBalance")(r ? { address: n, blockNumber: r } : { address: n, blockTag: s }), d = e.chains.find((p) => p.id === o) ?? c.chain;
  return {
    decimals: d.nativeCurrency.decimals,
    formatted: Ce(u, Gp(i)),
    symbol: d.nativeCurrency.symbol,
    value: u
  };
}
async function sl(e, t) {
  const { balanceAddress: n, chainId: r, symbolType: s, tokenAddress: o, unit: a } = t, i = {
    abi: [
      {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [{ type: "address" }],
        outputs: [{ type: "uint256" }]
      },
      {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint8" }]
      },
      {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: s }]
      }
    ],
    address: o
  }, [c, l, u] = await ag(e, {
    allowFailure: !1,
    contracts: [
      {
        ...i,
        functionName: "balanceOf",
        args: [n],
        chainId: r
      },
      { ...i, functionName: "decimals", chainId: r },
      { ...i, functionName: "symbol", chainId: r }
    ]
  }), d = Ce(c ?? "0", Gp(a ?? l));
  return { decimals: l, formatted: d, symbol: u, value: c };
}
function er(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    let n, r;
    if (Array.isArray(e) && Array.isArray(t)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!er(e[r], t[r]))
          return !1;
      return !0;
    }
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const s = Object.keys(e);
    if (n = s.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, s[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const o = s[r];
      if (o && !er(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
let Dr = [];
function cg(e) {
  const t = [...e.state.connections.values()];
  return e.state.status === "reconnecting" || er(Dr, t) ? Dr : (Dr = t, t);
}
let Go = [];
function lg(e) {
  const t = e.connectors;
  return er(Go, t) ? Go : (Go = t, t);
}
function ug(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return le(s, Ci, "getEnsAddress")(r);
}
function ol(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return le(s, Ei, "getEnsAvatar")(r);
}
function dg(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return le(s, ki, "getEnsName")(r);
}
async function pg(e, t) {
  const { account: n, chainId: r, ...s } = t, o = n ?? kr(e).address, a = e.getClient({ chainId: r });
  return le(a, jt, "prepareTransactionRequest")({
    ...s,
    ...o ? { account: o } : {}
  });
}
let Ko = !1;
async function al(e, t = {}) {
  var l, u;
  if (Ko)
    return [];
  Ko = !0, e.setState((d) => ({
    ...d,
    status: d.current ? "reconnecting" : "connecting"
  }));
  const n = [];
  if ((l = t.connectors) != null && l.length)
    for (const d of t.connectors) {
      let p;
      typeof d == "function" ? p = e._internal.connectors.setup(d) : p = d, n.push(p);
    }
  else
    n.push(...e.connectors);
  let r;
  try {
    r = await ((u = e.storage) == null ? void 0 : u.getItem("recentConnectorId"));
  } catch {
  }
  const s = {};
  for (const [, d] of e.state.connections)
    s[d.connector.id] = 1;
  r && (s[r] = 0);
  const o = Object.keys(s).length > 0 ? (
    // .toSorted()
    [...n].sort((d, p) => (s[d.id] ?? 10) - (s[p.id] ?? 10))
  ) : n;
  let a = !1;
  const i = [], c = [];
  for (const d of o) {
    const p = await d.getProvider().catch(() => {
    });
    if (!p || c.some((h) => h === p) || !await d.isAuthorized())
      continue;
    const m = await d.connect({ isReconnecting: !0 }).catch(() => null);
    m && (d.emitter.off("connect", e._internal.events.connect), d.emitter.on("change", e._internal.events.change), d.emitter.on("disconnect", e._internal.events.disconnect), e.setState((h) => {
      const b = new Map(a ? h.connections : /* @__PURE__ */ new Map()).set(d.uid, { accounts: m.accounts, chainId: m.chainId, connector: d });
      return {
        ...h,
        current: a ? h.current : d.uid,
        connections: b
      };
    }), i.push({
      accounts: m.accounts,
      chainId: m.chainId,
      connector: d
    }), c.push(p), a = !0);
  }
  return (e.state.status === "reconnecting" || e.state.status === "connecting") && (a ? e.setState((d) => ({ ...d, status: "connected" })) : e.setState((d) => ({
    ...d,
    connections: /* @__PURE__ */ new Map(),
    current: null,
    status: "disconnected"
  }))), Ko = !1, i;
}
async function fg(e, t) {
  const { account: n, chainId: r, connector: s, gas: o, ...a } = t;
  let i;
  typeof n == "object" && n.type === "local" ? i = e.getClient({ chainId: r }) : i = await Er(e, { account: n, chainId: r, connector: s });
  const { connector: c } = kr(e), l = await (async () => {
    var p;
    if (!(!("data" in t) || !t.data) && !((p = s ?? c) != null && p.supportsSimulation) && o !== null)
      return o === void 0 ? le(i, $t, "estimateGas")({
        ...a,
        account: n,
        chain: r ? { id: r } : null
      }) : o;
  })();
  return await le(i, br, "sendTransaction")({
    ...a,
    ...n ? { account: n } : {},
    gas: l,
    chain: r ? { id: r } : null
  });
}
async function hg(e, t) {
  const { account: n, connector: r, ...s } = t;
  let o;
  return typeof n == "object" && n.type === "local" ? o = e.getClient() : o = await Er(e, { account: n, connector: r }), le(o, qi, "signMessage")({
    ...s,
    ...n ? { account: n } : {}
  });
}
async function mg(e, t) {
  const { abi: n, chainId: r, connector: s, ...o } = t;
  let a;
  t.account ? a = t.account : a = (await Er(e, {
    chainId: r,
    connector: s
  })).account;
  const i = e.getClient({ chainId: r }), c = le(i, bo, "simulateContract"), { result: l, request: u } = await c({ ...o, abi: n, account: a });
  return {
    chainId: i.chain.id,
    result: l,
    request: { __mode: "prepared", ...u, chainId: r }
  };
}
async function bg(e, t) {
  var s;
  const { connector: n } = t, r = e.state.connections.get(n.uid);
  if (!r)
    throw new _p();
  return await ((s = e.storage) == null ? void 0 : s.setItem("recentConnectorId", n.id)), e.setState((o) => ({
    ...o,
    current: n.uid
  })), {
    accounts: r.accounts,
    chainId: r.chainId
  };
}
let rt = class extends Kt {
  constructor() {
    super("Provider not found."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ProviderNotFoundError"
    });
  }
}, yg = class extends Kt {
  constructor({ connector: t }) {
    super(`"${t.name}" does not support programmatic chain switching.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SwitchChainNotSupportedError"
    });
  }
};
async function wg(e, t) {
  var a;
  const { addEthereumChainParameter: n, chainId: r } = t, s = e.state.connections.get(((a = t.connector) == null ? void 0 : a.uid) ?? e.state.current);
  if (s) {
    const i = s.connector;
    if (!i.switchChain)
      throw new yg({ connector: i });
    return await i.switchChain({
      addEthereumChainParameter: n,
      chainId: r
    });
  }
  const o = e.chains.find((i) => i.id === r);
  if (!o)
    throw new Rt();
  return e.setState((i) => ({ ...i, chainId: r })), o;
}
function gg(e, t) {
  const { onChange: n } = t;
  return e.subscribe(() => kr(e), n, {
    equalityFn(r, s) {
      const { connector: o, ...a } = r, { connector: i, ...c } = s;
      return er(a, c) && // check connector separately
      (o == null ? void 0 : o.id) === (i == null ? void 0 : i.id) && (o == null ? void 0 : o.uid) === (i == null ? void 0 : i.uid);
    }
  });
}
function xg(e, t) {
  const { onChange: n } = t;
  return e._internal.connectors.subscribe((r, s) => {
    n(Object.values(r), s);
  });
}
async function Cg(e, t) {
  const { chainId: n, timeout: r = 0, ...s } = t, o = e.getClient({ chainId: n }), i = await le(o, ji, "waitForTransactionReceipt")({ ...s, timeout: r });
  if (i.status === "reverted") {
    const l = await le(o, Tn, "getTransaction")({ hash: i.transactionHash }), d = await le(o, bt, "call")({
      ...l,
      gasPrice: l.type !== "eip1559" ? l.gasPrice : void 0,
      maxFeePerGas: l.type === "eip1559" ? l.maxFeePerGas : void 0,
      maxPriorityFeePerGas: l.type === "eip1559" ? l.maxPriorityFeePerGas : void 0
    }), p = d != null && d.data ? at(`0x${d.data.substring(138)}`) : "unknown reason";
    throw new Error(p);
  }
  return {
    ...i,
    chainId: o.chain.id
  };
}
async function Ag(e, t) {
  const { account: n, chainId: r, connector: s, __mode: o, ...a } = t;
  let i;
  typeof n == "object" && n.type === "local" ? i = e.getClient({ chainId: r }) : i = await Er(e, { account: n, chainId: r, connector: s });
  const { connector: c } = kr(e);
  let l;
  if (o === "prepared" || c != null && c.supportsSimulation)
    l = a;
  else {
    const { request: p } = await mg(e, {
      ...a,
      account: n,
      chainId: r
    });
    l = p;
  }
  return await le(i, wo, "writeContract")({
    ...l,
    ...n ? { account: n } : {},
    chain: r ? { id: r } : null
  });
}
const vg = /(rabby|trustwallet)/, Eg = {
  coinbaseWallet: {
    id: "coinbaseWallet",
    name: "Coinbase Wallet",
    provider(e) {
      return e != null && e.coinbaseWalletExtension ? e.coinbaseWalletExtension : cs(e, "isCoinbaseWallet");
    }
  },
  metaMask: {
    id: "metaMask",
    name: "MetaMask",
    provider(e) {
      return cs(e, (t) => {
        if (!t.isMetaMask || t.isBraveWallet && !t._events && !t._state)
          return !1;
        const n = [
          "isApexWallet",
          "isAvalanche",
          "isBitKeep",
          "isBlockWallet",
          "isKuCoinWallet",
          "isMathWallet",
          "isOkxWallet",
          "isOKExWallet",
          "isOneInchIOSWallet",
          "isOneInchAndroidWallet",
          "isOpera",
          "isPortal",
          "isRabby",
          "isTokenPocket",
          "isTokenary",
          "isZerion"
        ];
        for (const r of n)
          if (t[r])
            return !1;
        return !0;
      });
    }
  },
  phantom: {
    id: "phantom",
    name: "Phantom",
    provider(e) {
      var t, n;
      return (t = e == null ? void 0 : e.phantom) != null && t.ethereum ? (n = e.phantom) == null ? void 0 : n.ethereum : cs(e, "isPhantom");
    }
  }
};
go.type = "injected";
function go(e = {}) {
  const { shimDisconnect: t = !0, unstable_shimAsyncInject: n } = e;
  function r() {
    const c = e.target;
    if (typeof c == "function") {
      const l = c();
      if (l)
        return l;
    }
    return typeof c == "object" ? c : typeof c == "string" ? {
      ...Eg[c] ?? {
        id: c,
        name: `${c[0].toUpperCase()}${c.slice(1)}`,
        provider: `is${c[0].toUpperCase()}${c.slice(1)}`
      }
    } : {
      id: "injected",
      name: "Injected",
      provider(l) {
        return l == null ? void 0 : l.ethereum;
      }
    };
  }
  let s, o, a, i;
  return (c) => ({
    get icon() {
      return r().icon;
    },
    get id() {
      return r().id;
    },
    get name() {
      return r().name;
    },
    get supportsSimulation() {
      return vg.test(this.id.toLowerCase());
    },
    type: go.type,
    async setup() {
      const l = await this.getProvider();
      l && e.target && (a || (a = this.onConnect.bind(this), l.on("connect", a)), s || (s = this.onAccountsChanged.bind(this), l.on("accountsChanged", s)));
    },
    async connect({ chainId: l, isReconnecting: u } = {}) {
      var f, m, h, b, y, w;
      const d = await this.getProvider();
      if (!d)
        throw new rt();
      let p = [];
      if (u)
        p = await this.getAccounts().catch(() => []);
      else if (t)
        try {
          p = (b = (h = (m = (f = (await d.request({
            method: "wallet_requestPermissions",
            params: [{ eth_accounts: {} }]
          }))[0]) == null ? void 0 : f.caveats) == null ? void 0 : m[0]) == null ? void 0 : h.value) == null ? void 0 : b.map((E) => H(E)), p.length > 0 && (p = await this.getAccounts());
        } catch (v) {
          const E = v;
          if (E.code === D.code)
            throw new D(E);
          if (E.code === ye.code)
            throw E;
        }
      try {
        !(p != null && p.length) && !u && (p = (await d.request({
          method: "eth_requestAccounts"
        })).map((g) => H(g))), a && (d.removeListener("connect", a), a = void 0), s || (s = this.onAccountsChanged.bind(this), d.on("accountsChanged", s)), o || (o = this.onChainChanged.bind(this), d.on("chainChanged", o)), i || (i = this.onDisconnect.bind(this), d.on("disconnect", i));
        let v = await this.getChainId();
        if (l && v !== l) {
          const E = await this.switchChain({ chainId: l }).catch((g) => {
            if (g.code === D.code)
              throw g;
            return { id: v };
          });
          v = (E == null ? void 0 : E.id) ?? v;
        }
        return t && await ((y = c.storage) == null ? void 0 : y.removeItem(`${this.id}.disconnected`)), e.target || await ((w = c.storage) == null ? void 0 : w.setItem("injected.connected", !0)), { accounts: p, chainId: v };
      } catch (v) {
        const E = v;
        throw E.code === D.code ? new D(E) : E.code === ye.code ? new ye(E) : E;
      }
    },
    async disconnect() {
      var u, d;
      const l = await this.getProvider();
      if (!l)
        throw new rt();
      o && (l.removeListener("chainChanged", o), o = void 0), i && (l.removeListener("disconnect", i), i = void 0), a || (a = this.onConnect.bind(this), l.on("connect", a));
      try {
        await wt(() => (
          // TODO: Remove explicit type for viem@3
          l.request({
            // `'wallet_revokePermissions'` added in `viem@2.10.3`
            method: "wallet_revokePermissions",
            params: [{ eth_accounts: {} }]
          })
        ), { timeout: 100 });
      } catch {
      }
      t && await ((u = c.storage) == null ? void 0 : u.setItem(`${this.id}.disconnected`, !0)), e.target || await ((d = c.storage) == null ? void 0 : d.removeItem("injected.connected"));
    },
    async getAccounts() {
      const l = await this.getProvider();
      if (!l)
        throw new rt();
      return (await l.request({ method: "eth_accounts" })).map((d) => H(d));
    },
    async getChainId() {
      const l = await this.getProvider();
      if (!l)
        throw new rt();
      const u = await l.request({ method: "eth_chainId" });
      return Number(u);
    },
    async getProvider() {
      if (typeof window > "u")
        return;
      let l;
      const u = r();
      return typeof u.provider == "function" ? l = u.provider(window) : typeof u.provider == "string" ? l = cs(window, u.provider) : l = u.provider, l && !l.removeListener && ("off" in l && typeof l.off == "function" ? l.removeListener = l.off : l.removeListener = () => {
      }), l;
    },
    async isAuthorized() {
      var l, u;
      try {
        if (t && // If shim exists in storage, connector is disconnected
        await ((l = c.storage) == null ? void 0 : l.getItem(`${this.id}.disconnected`)) || !e.target && !await ((u = c.storage) == null ? void 0 : u.getItem("injected.connected")))
          return !1;
        if (!await this.getProvider()) {
          if (n !== void 0 && n !== !1) {
            const m = async () => (typeof window < "u" && window.removeEventListener("ethereum#initialized", m), !!await this.getProvider()), h = typeof n == "number" ? n : 1e3;
            if (await Promise.race([
              ...typeof window < "u" ? [
                new Promise((y) => window.addEventListener("ethereum#initialized", () => y(m()), { once: !0 }))
              ] : [],
              new Promise((y) => setTimeout(() => y(m()), h))
            ]))
              return !0;
          }
          throw new rt();
        }
        return !!(await dt(() => this.getAccounts())).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: l, chainId: u }) {
      var f, m, h, b;
      const d = await this.getProvider();
      if (!d)
        throw new rt();
      const p = c.chains.find((y) => y.id === u);
      if (!p)
        throw new J(new Rt());
      try {
        return await Promise.all([
          d.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: U(u) }]
          }).then(async () => {
            await this.getChainId() === u && c.emitter.emit("change", { chainId: u });
          }),
          new Promise((y) => c.emitter.once("change", ({ chainId: w }) => {
            w === u && y();
          }))
        ]), p;
      } catch (y) {
        const w = y;
        if (w.code === 4902 || // Unwrapping for MetaMask Mobile
        // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
        ((m = (f = w == null ? void 0 : w.data) == null ? void 0 : f.originalError) == null ? void 0 : m.code) === 4902)
          try {
            const { default: v, ...E } = p.blockExplorers ?? {};
            let g;
            l != null && l.blockExplorerUrls ? g = l.blockExplorerUrls : v && (g = [
              v.url,
              ...Object.values(E).map((I) => I.url)
            ]);
            let C;
            (h = l == null ? void 0 : l.rpcUrls) != null && h.length ? C = l.rpcUrls : C = [((b = p.rpcUrls.default) == null ? void 0 : b.http[0]) ?? ""];
            const A = {
              blockExplorerUrls: g,
              chainId: U(u),
              chainName: (l == null ? void 0 : l.chainName) ?? p.name,
              iconUrls: l == null ? void 0 : l.iconUrls,
              nativeCurrency: (l == null ? void 0 : l.nativeCurrency) ?? p.nativeCurrency,
              rpcUrls: C
            };
            if (await d.request({
              method: "wallet_addEthereumChain",
              params: [A]
            }), await this.getChainId() !== u)
              throw new D(new Error("User rejected switch after adding network."));
            return p;
          } catch (v) {
            throw new D(v);
          }
        throw w.code === D.code ? new D(w) : new J(w);
      }
    },
    async onAccountsChanged(l) {
      var u;
      if (l.length === 0)
        this.onDisconnect();
      else if (c.emitter.listenerCount("connect")) {
        const d = (await this.getChainId()).toString();
        this.onConnect({ chainId: d }), t && await ((u = c.storage) == null ? void 0 : u.removeItem(`${this.id}.disconnected`));
      } else
        c.emitter.emit("change", {
          accounts: l.map((d) => H(d))
        });
    },
    onChainChanged(l) {
      const u = Number(l);
      c.emitter.emit("change", { chainId: u });
    },
    async onConnect(l) {
      const u = await this.getAccounts();
      if (u.length === 0)
        return;
      const d = Number(l.chainId);
      c.emitter.emit("connect", { accounts: u, chainId: d });
      const p = await this.getProvider();
      p && (a && (p.removeListener("connect", a), a = void 0), s || (s = this.onAccountsChanged.bind(this), p.on("accountsChanged", s)), o || (o = this.onChainChanged.bind(this), p.on("chainChanged", o)), i || (i = this.onDisconnect.bind(this), p.on("disconnect", i)));
    },
    async onDisconnect(l) {
      const u = await this.getProvider();
      l && l.code === 1013 && u && (await this.getAccounts()).length || (c.emitter.emit("disconnect"), u && (o && (u.removeListener("chainChanged", o), o = void 0), i && (u.removeListener("disconnect", i), i = void 0), a || (a = this.onConnect.bind(this), u.on("connect", a))));
    }
  });
}
function cs(e, t) {
  function n(s) {
    return typeof t == "function" ? t(s) : typeof t == "string" ? s[t] : !0;
  }
  const r = e.ethereum;
  if (r != null && r.providers)
    return r.providers.find((s) => n(s));
  if (r && n(r))
    return r;
}
function kg(e) {
  if (typeof window > "u")
    return;
  const t = (n) => e(n.detail);
  return window.addEventListener("eip6963:announceProvider", t), window.dispatchEvent(new CustomEvent("eip6963:requestProvider")), () => window.removeEventListener("eip6963:announceProvider", t);
}
function Kp() {
  const e = /* @__PURE__ */ new Set();
  let t = [];
  const n = () => kg((s) => {
    t.some(({ info: o }) => o.uuid === s.info.uuid) || (t = [...t, s], e.forEach((o) => o(t, { added: [s] })));
  });
  let r = n();
  return {
    _listeners() {
      return e;
    },
    clear() {
      e.forEach((s) => s([], { removed: [...t] })), t = [];
    },
    destroy() {
      this.clear(), e.clear(), r == null || r();
    },
    findProvider({ rdns: s }) {
      return t.find((o) => o.info.rdns === s);
    },
    getProviders() {
      return t;
    },
    reset() {
      this.clear(), r == null || r(), r = n();
    },
    subscribe(s, { emitImmediately: o } = {}) {
      return e.add(s), o && s(t, { added: t }), () => e.delete(s);
    }
  };
}
var Ig = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Sg = (e) => (t, n, r) => {
  const s = r.subscribe;
  return r.subscribe = (a, i, c) => {
    let l = a;
    if (i) {
      const u = (c == null ? void 0 : c.equalityFn) || Object.is;
      let d = a(r.getState());
      l = (p) => {
        const f = a(p);
        if (!u(d, f)) {
          const m = d;
          i(d = f, m);
        }
      }, c != null && c.fireImmediately && i(d, d);
    }
    return s(l);
  }, e(t, n, r);
}, Bg = Sg;
function Tg(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var o;
      const a = (c) => c === null ? null : JSON.parse(c, void 0), i = (o = n.getItem(s)) != null ? o : null;
      return i instanceof Promise ? i.then(a) : a(i);
    },
    setItem: (s, o) => n.setItem(
      s,
      JSON.stringify(o, void 0)
    ),
    removeItem: (s) => n.removeItem(s)
  };
}
const tr = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return tr(r)(n);
      },
      catch(r) {
        return this;
      }
    };
  } catch (n) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return tr(r)(n);
      }
    };
  }
}, Ug = (e, t) => (n, r, s) => {
  let o = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (b) => b,
    version: 0,
    merge: (b, y) => ({
      ...y,
      ...b
    }),
    ...t
  }, a = !1;
  const i = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l;
  try {
    l = o.getStorage();
  } catch {
  }
  if (!l)
    return e(
      (...b) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), n(...b);
      },
      r,
      s
    );
  const u = tr(o.serialize), d = () => {
    const b = o.partialize({ ...r() });
    let y;
    const w = u({ state: b, version: o.version }).then(
      (v) => l.setItem(o.name, v)
    ).catch((v) => {
      y = v;
    });
    if (y)
      throw y;
    return w;
  }, p = s.setState;
  s.setState = (b, y) => {
    p(b, y), d();
  };
  const f = e(
    (...b) => {
      n(...b), d();
    },
    r,
    s
  );
  let m;
  const h = () => {
    var b;
    if (!l)
      return;
    a = !1, i.forEach((w) => w(r()));
    const y = ((b = o.onRehydrateStorage) == null ? void 0 : b.call(o, r())) || void 0;
    return tr(l.getItem.bind(l))(o.name).then((w) => {
      if (w)
        return o.deserialize(w);
    }).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== o.version) {
          if (o.migrate)
            return o.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var v;
      return m = o.merge(
        w,
        (v = r()) != null ? v : f
      ), n(m, !0), d();
    }).then(() => {
      y == null || y(m, void 0), a = !0, c.forEach((w) => w(m));
    }).catch((w) => {
      y == null || y(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (b) => {
      o = {
        ...o,
        ...b
      }, b.getStorage && (l = b.getStorage());
    },
    clearStorage: () => {
      l == null || l.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => h(),
    hasHydrated: () => a,
    onHydrate: (b) => (i.add(b), () => {
      i.delete(b);
    }),
    onFinishHydration: (b) => (c.add(b), () => {
      c.delete(b);
    })
  }, h(), m || f;
}, Pg = (e, t) => (n, r, s) => {
  let o = {
    storage: Tg(() => localStorage),
    partialize: (h) => h,
    version: 0,
    merge: (h, b) => ({
      ...b,
      ...h
    }),
    ...t
  }, a = !1;
  const i = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l = o.storage;
  if (!l)
    return e(
      (...h) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), n(...h);
      },
      r,
      s
    );
  const u = () => {
    const h = o.partialize({ ...r() });
    return l.setItem(o.name, {
      state: h,
      version: o.version
    });
  }, d = s.setState;
  s.setState = (h, b) => {
    d(h, b), u();
  };
  const p = e(
    (...h) => {
      n(...h), u();
    },
    r,
    s
  );
  let f;
  const m = () => {
    var h, b;
    if (!l)
      return;
    a = !1, i.forEach((w) => {
      var v;
      return w((v = r()) != null ? v : p);
    });
    const y = ((b = o.onRehydrateStorage) == null ? void 0 : b.call(o, (h = r()) != null ? h : p)) || void 0;
    return tr(l.getItem.bind(l))(o.name).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== o.version) {
          if (o.migrate)
            return o.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var v;
      return f = o.merge(
        w,
        (v = r()) != null ? v : p
      ), n(f, !0), u();
    }).then(() => {
      y == null || y(f, void 0), f = r(), a = !0, c.forEach((w) => w(f));
    }).catch((w) => {
      y == null || y(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (h) => {
      o = {
        ...o,
        ...h
      }, h.storage && (l = h.storage);
    },
    clearStorage: () => {
      l == null || l.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => m(),
    hasHydrated: () => a,
    onHydrate: (h) => (i.add(h), () => {
      i.delete(h);
    }),
    onFinishHydration: (h) => (c.add(h), () => {
      c.delete(h);
    })
  }, o.skipHydration || m(), f || p;
}, Ng = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ((Ig ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), Ug(e, t)) : Pg(e, t), Mg = Ng;
var Fg = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const il = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (c, l) => {
    const u = typeof c == "function" ? c(t) : c;
    if (!Object.is(u, t)) {
      const d = t;
      t = l ?? typeof u != "object" ? u : Object.assign({}, t, u), n.forEach((p) => p(t, d));
    }
  }, s = () => t, i = { setState: r, getState: s, subscribe: (c) => (n.add(c), () => n.delete(c)), destroy: () => {
    (Fg ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } };
  return t = e(r, s, i), i;
}, Qo = (e) => e ? il(e) : il;
let Dg = class {
  constructor(t) {
    Object.defineProperty(this, "uid", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "_emitter", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: new zl()
    });
  }
  on(t, n) {
    this._emitter.on(t, n);
  }
  once(t, n) {
    this._emitter.once(t, n);
  }
  off(t, n) {
    this._emitter.off(t, n);
  }
  emit(t, ...n) {
    const r = n[0];
    this._emitter.emit(t, { uid: this.uid, ...r });
  }
  listenerCount(t) {
    return this._emitter.listenerCount(t);
  }
};
function Rg(e) {
  return new Dg(e);
}
function Og(e, t) {
  return JSON.parse(e, (n, r) => {
    let s = r;
    return (s == null ? void 0 : s.__type) === "bigint" && (s = BigInt(s.value)), (s == null ? void 0 : s.__type) === "Map" && (s = new Map(s.value)), (t == null ? void 0 : t(n, s)) ?? s;
  });
}
function cl(e, t) {
  return e.slice(0, t).join(".") || ".";
}
function ll(e, t) {
  const { length: n } = e;
  for (let r = 0; r < n; ++r)
    if (e[r] === t)
      return r + 1;
  return 0;
}
function Lg(e, t) {
  const n = typeof e == "function", r = typeof t == "function", s = [], o = [];
  return function(i, c) {
    if (typeof c == "object")
      if (s.length) {
        const l = ll(s, this);
        l === 0 ? s[s.length] = this : (s.splice(l), o.splice(l)), o[o.length] = i;
        const u = ll(s, c);
        if (u !== 0)
          return r ? t.call(this, i, c, cl(o, u)) : `[ref=${cl(o, u)}]`;
      } else
        s[0] = c, o[0] = i;
    return n ? e.call(this, i, c) : c;
  };
}
function zg(e, t, n, r) {
  return JSON.stringify(e, Lg((s, o) => {
    let a = o;
    return typeof a == "bigint" && (a = { __type: "bigint", value: o.toString() }), a instanceof Map && (a = { __type: "Map", value: Array.from(o.entries()) }), (t == null ? void 0 : t(s, a)) ?? a;
  }, r), n ?? void 0);
}
function _g(e) {
  const { deserialize: t = Og, key: n = "wagmi", serialize: r = zg, storage: s = Qp } = e;
  function o(a) {
    return a instanceof Promise ? a.then((i) => i).catch(() => null) : a;
  }
  return {
    ...s,
    key: n,
    async getItem(a, i) {
      const c = s.getItem(`${n}.${a}`), l = await o(c);
      return l ? t(l) ?? null : i ?? null;
    },
    async setItem(a, i) {
      const c = `${n}.${a}`;
      i === null ? await o(s.removeItem(c)) : await o(s.setItem(c, r(i)));
    },
    async removeItem(a) {
      await o(s.removeItem(`${n}.${a}`));
    }
  };
}
const Qp = {
  getItem: () => null,
  setItem: () => {
  },
  removeItem: () => {
  }
}, ka = 256;
let Rr = ka, Or;
function Hg(e = 11) {
  if (!Or || Rr + e > ka * 2) {
    Or = "", Rr = 0;
    for (let t = 0; t < ka; t++)
      Or += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return Or.substring(Rr, Rr++ + e);
}
function $g(e) {
  const { multiInjectedProviderDiscovery: t = !0, storage: n = _g({
    storage: typeof window < "u" && window.localStorage ? window.localStorage : Qp
  }), syncConnectedChain: r = !0, ssr: s = !1, ...o } = e, a = typeof window < "u" && t ? Kp() : void 0, i = Qo(() => o.chains), c = Qo(() => [
    ...o.connectors ?? [],
    ...s ? [] : (a == null ? void 0 : a.getProviders().map(u)) ?? []
  ].map(l));
  function l(g) {
    var k;
    const C = Rg(Hg()), A = {
      ...g({
        emitter: C,
        chains: i.getState(),
        storage: n,
        transports: o.transports
      }),
      emitter: C,
      uid: C.uid
    };
    return C.on("connect", v), (k = A.setup) == null || k.call(A), A;
  }
  function u(g) {
    const { info: C } = g, A = g.provider;
    return go({ target: { ...C, id: C.rdns, provider: A } });
  }
  const d = /* @__PURE__ */ new Map();
  function p(g = {}) {
    const C = g.chainId ?? b.getState().chainId, A = i.getState().find((I) => I.id === C);
    if (g.chainId && !A)
      throw new Rt();
    {
      const I = d.get(b.getState().chainId);
      if (I && !A)
        return I;
      if (!A)
        throw new Rt();
    }
    {
      const I = d.get(C);
      if (I)
        return I;
    }
    let k;
    if (o.client)
      k = o.client({ chain: A });
    else {
      const I = A.id, P = i.getState().map((F) => F.id), N = {}, q = Object.entries(o);
      for (const [F, K] of q)
        if (!(F === "chains" || F === "client" || F === "connectors" || F === "transports"))
          if (typeof K == "object")
            if (I in K)
              N[F] = K[I];
            else {
              if (P.some((B) => B in K))
                continue;
              N[F] = K;
            }
          else
            N[F] = K;
      k = gt({
        ...N,
        chain: A,
        batch: N.batch ?? { multicall: !0 },
        transport: (F) => o.transports[I]({ ...F, connectors: c })
      });
    }
    return d.set(C, k), k;
  }
  function f() {
    return {
      chainId: i.getState()[0].id,
      connections: /* @__PURE__ */ new Map(),
      current: null,
      status: "disconnected"
    };
  }
  let m;
  const h = "0.0.0-canary-";
  is.startsWith(h) ? m = Number.parseInt(is.replace(h, "")) : m = Number.parseInt(is.split(".")[0] ?? "0");
  const b = Qo(Bg(
    // only use persist middleware if storage exists
    n ? Mg(f, {
      migrate(g, C) {
        if (C === m)
          return g;
        const A = f(), k = y(g, A.chainId);
        return { ...A, chainId: k };
      },
      name: "store",
      partialize(g) {
        return {
          connections: {
            __type: "Map",
            value: Array.from(g.connections.entries()).map(([C, A]) => {
              const { id: k, name: I, type: P, uid: N } = A.connector;
              return [C, { ...A, connector: { id: k, name: I, type: P, uid: N } }];
            })
          },
          chainId: g.chainId,
          current: g.current
        };
      },
      merge(g, C) {
        typeof g == "object" && g && "status" in g && delete g.status;
        const A = y(g, C.chainId);
        return {
          ...C,
          ...g,
          chainId: A
        };
      },
      skipHydration: s,
      storage: n,
      version: m
    }) : f
  ));
  function y(g, C) {
    return g && typeof g == "object" && "chainId" in g && typeof g.chainId == "number" && i.getState().some((A) => A.id === g.chainId) ? g.chainId : C;
  }
  r && b.subscribe(({ connections: g, current: C }) => {
    var A;
    return C ? (A = g.get(C)) == null ? void 0 : A.chainId : void 0;
  }, (g) => {
    if (i.getState().some((A) => A.id === g))
      return b.setState((A) => ({
        ...A,
        chainId: g ?? A.chainId
      }));
  }), a == null || a.subscribe((g) => {
    const C = /* @__PURE__ */ new Map();
    for (const k of c.getState())
      C.set(k.id, !0);
    const A = [];
    for (const k of g) {
      const I = l(u(k));
      C.has(I.id) || A.push(I);
    }
    n && !b.persist.hasHydrated() || c.setState((k) => [...k, ...A], !0);
  });
  function w(g) {
    b.setState((C) => {
      const A = C.connections.get(g.uid);
      return A ? {
        ...C,
        connections: new Map(C.connections).set(g.uid, {
          accounts: g.accounts ?? A.accounts,
          chainId: g.chainId ?? A.chainId,
          connector: A.connector
        })
      } : C;
    });
  }
  function v(g) {
    b.getState().status === "connecting" || b.getState().status === "reconnecting" || b.setState((C) => {
      const A = c.getState().find((k) => k.uid === g.uid);
      return A ? (A.emitter.listenerCount("connect") && A.emitter.off("connect", w), A.emitter.listenerCount("change") || A.emitter.on("change", w), A.emitter.listenerCount("disconnect") || A.emitter.on("disconnect", E), {
        ...C,
        connections: new Map(C.connections).set(g.uid, {
          accounts: g.accounts,
          chainId: g.chainId,
          connector: A
        }),
        current: g.uid,
        status: "connected"
      }) : C;
    });
  }
  function E(g) {
    b.setState((C) => {
      const A = C.connections.get(g.uid);
      if (A) {
        const I = A.connector;
        I.emitter.listenerCount("change") && A.connector.emitter.off("change", w), I.emitter.listenerCount("disconnect") && A.connector.emitter.off("disconnect", E), I.emitter.listenerCount("connect") || A.connector.emitter.on("connect", v);
      }
      if (C.connections.delete(g.uid), C.connections.size === 0)
        return {
          ...C,
          connections: /* @__PURE__ */ new Map(),
          current: null,
          status: "disconnected"
        };
      const k = C.connections.values().next().value;
      return {
        ...C,
        connections: new Map(C.connections),
        current: k.connector.uid
      };
    });
  }
  return {
    get chains() {
      return i.getState();
    },
    get connectors() {
      return c.getState();
    },
    storage: n,
    getClient: p,
    get state() {
      return b.getState();
    },
    setState(g) {
      let C;
      typeof g == "function" ? C = g(b.getState()) : C = g;
      const A = f();
      typeof C != "object" && (C = A), Object.keys(A).some((I) => !(I in C)) && (C = A), b.setState(C, !0);
    },
    subscribe(g, C, A) {
      return b.subscribe(g, C, A ? {
        ...A,
        fireImmediately: A.emitImmediately
        // Workaround cast since Zustand does not support `'exactOptionalPropertyTypes'`
      } : void 0);
    },
    _internal: {
      mipd: a,
      store: b,
      ssr: !!s,
      syncConnectedChain: r,
      transports: o.transports,
      chains: {
        setState(g) {
          const C = typeof g == "function" ? g(i.getState()) : g;
          if (C.length !== 0)
            return i.setState(C, !0);
        },
        subscribe(g) {
          return i.subscribe(g);
        }
      },
      connectors: {
        providerDetailToConnector: u,
        setup: l,
        setState(g) {
          return c.setState(typeof g == "function" ? g(c.getState()) : g, !0);
        },
        subscribe(g) {
          return c.subscribe(g);
        }
      },
      events: { change: w, connect: v, disconnect: E }
    }
  };
}
const ec = 50000n, ul = Uu * 32n, Vp = {
  block: /* @__PURE__ */ Qs({
    format(e) {
      var n;
      const t = (n = e.transactions) == null ? void 0 : n.map((r) => {
        var o;
        if (typeof r == "string")
          return r;
        const s = (o = Vp.transaction) == null ? void 0 : o.format(r);
        return s.typeHex === "0x71" ? s.type = "eip712" : s.typeHex === "0xff" && (s.type = "priority"), s;
      });
      return {
        l1BatchNumber: e.l1BatchNumber ? L(e.l1BatchNumber) : null,
        l1BatchTimestamp: e.l1BatchTimestamp ? L(e.l1BatchTimestamp) : null,
        transactions: t
      };
    }
  }),
  transaction: /* @__PURE__ */ Gs({
    format(e) {
      const t = {};
      return e.type === "0x71" ? t.type = "eip712" : e.type === "0xff" && (t.type = "priority"), {
        ...t,
        l1BatchNumber: e.l1BatchNumber ? L(e.l1BatchNumber) : null,
        l1BatchTxIndex: e.l1BatchTxIndex ? L(e.l1BatchTxIndex) : null
      };
    }
  }),
  transactionReceipt: /* @__PURE__ */ Ui({
    format(e) {
      return {
        l1BatchNumber: e.l1BatchNumber ? L(e.l1BatchNumber) : null,
        l1BatchTxIndex: e.l1BatchTxIndex ? L(e.l1BatchTxIndex) : null,
        logs: e.logs.map((t) => ({
          ...Oe(t),
          l1BatchNumber: t.l1BatchNumber ? L(t.l1BatchNumber) : null,
          transactionLogIndex: V(t.transactionLogIndex),
          logType: t.logType
        })),
        l2ToL1Logs: e.l2ToL1Logs.map((t) => ({
          blockNumber: L(t.blockHash),
          blockHash: t.blockHash,
          l1BatchNumber: L(t.l1BatchNumber),
          transactionIndex: L(t.transactionIndex),
          shardId: L(t.shardId),
          isService: t.isService,
          sender: t.sender,
          key: t.key,
          value: t.value,
          transactionHash: t.transactionHash,
          logIndex: L(t.logIndex)
        }))
      };
    }
  }),
  transactionRequest: /* @__PURE__ */ si({
    exclude: [
      "customSignature",
      "factoryDeps",
      "gasPerPubdata",
      "paymaster",
      "paymasterInput"
    ],
    format(e) {
      return e.gasPerPubdata || e.paymaster && e.paymasterInput || e.factoryDeps || e.customSignature ? {
        eip712Meta: {
          ...e.gasPerPubdata ? { gasPerPubdata: M(e.gasPerPubdata) } : { gasPerPubdata: M(ec) },
          ...e.paymaster && e.paymasterInput ? {
            paymasterParams: {
              paymaster: e.paymaster,
              paymasterInput: Array.from(ne(e.paymasterInput))
            }
          } : {},
          ...e.factoryDeps ? {
            factoryDeps: e.factoryDeps.map((t) => Array.from(ne(t)))
          } : {},
          ...e.customSignature ? {
            customSignature: Array.from(ne(e.customSignature))
          } : {}
        },
        type: "0x71"
      } : {};
    }
  })
};
class jg extends S {
  constructor() {
    super([
      "Transaction is not an EIP712 transaction.",
      "",
      "Transaction must:",
      '  - include `type: "eip712"`',
      "  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`"
    ].join(`
`), { name: "InvalidEip712TransactionError" });
  }
}
function Wp(e) {
  return !!(e.type === "eip712" || "customSignature" in e && e.customSignature || "paymaster" in e && e.paymaster || "paymasterInput" in e && e.paymasterInput || "gasPerPubdata" in e && typeof e.gasPerPubdata == "bigint" || "factoryDeps" in e && e.factoryDeps);
}
function Zp(e) {
  const { chainId: t, to: n, from: r, paymaster: s, paymasterInput: o } = e;
  if (!Wp(e))
    throw new jg();
  if (!t || t <= 0)
    throw new Lt({ chainId: t });
  if (n && !Z(n))
    throw new ee({ address: n });
  if (r && !Z(r))
    throw new ee({ address: r });
  if (s && !Z(s))
    throw new ee({ address: s });
  if (s && !o)
    throw new S("`paymasterInput` must be provided when `paymaster` is defined");
  if (!s && o)
    throw new S("`paymaster` must be provided when `paymasterInput` is defined");
}
function qg(e, t) {
  return Wp(e) ? Kg(e) : ho(e, t);
}
const Gg = {
  transaction: qg
};
function Kg(e) {
  const { chainId: t, gas: n, nonce: r, to: s, from: o, value: a, maxFeePerGas: i, maxPriorityFeePerGas: c, customSignature: l, factoryDeps: u, paymaster: d, paymasterInput: p, gasPerPubdata: f, data: m } = e;
  Zp(e);
  const h = [
    r ? M(r) : "0x",
    c ? M(c) : "0x",
    i ? M(i) : "0x",
    n ? M(n) : "0x",
    s ?? "0x",
    a ? M(a) : "0x",
    m ?? "0x0",
    M(t),
    M(""),
    M(""),
    M(t),
    o ?? "0x",
    M(f || ec),
    u ?? [],
    l ?? "0x",
    // EIP712 signature
    d && p ? [d, p] : []
  ];
  return ue([
    "0x71",
    we(h)
  ]);
}
class Qg extends S {
  constructor({ givenLength: t, maxBytecodeSize: n }) {
    super(`Bytecode cannot be longer than ${n} bytes. Given length: ${t}`, { name: "BytecodeLengthExceedsMaxSizeError" });
  }
}
class Vg extends S {
  constructor({ givenLengthInWords: t }) {
    super(`Bytecode length in 32-byte words must be odd. Given length in words: ${t}`, { name: "BytecodeLengthInWordsMustBeOddError" });
  }
}
class Wg extends S {
  constructor({ givenLength: t }) {
    super(`The bytecode length in bytes must be divisible by 32. Given length: ${t}`, { name: "BytecodeLengthMustBeDivisibleBy32Error" });
  }
}
function Zg(e) {
  const t = oe(e);
  if (t.length % 32 !== 0)
    throw new Wg({
      givenLength: t.length
    });
  if (t.length > ul)
    throw new Qg({
      givenLength: t.length,
      maxBytecodeSize: ul
    });
  const n = ii(t), r = oe(n), s = t.length / 32;
  if (s % 2 === 0)
    throw new Vg({
      givenLengthInWords: s
    });
  const o = oe(s), a = Ee(o, { size: 2 }), i = new Uint8Array([1, 0]);
  return r.set(i, 0), r.set(a, 2), r;
}
const Jg = (e) => {
  Zp(e);
  const t = Jp(e);
  return {
    domain: {
      name: "zkSync",
      version: "2",
      chainId: e.chainId
    },
    types: {
      Transaction: [
        { name: "txType", type: "uint256" },
        { name: "from", type: "uint256" },
        { name: "to", type: "uint256" },
        { name: "gasLimit", type: "uint256" },
        { name: "gasPerPubdataByteLimit", type: "uint256" },
        { name: "maxFeePerGas", type: "uint256" },
        { name: "maxPriorityFeePerGas", type: "uint256" },
        { name: "paymaster", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "value", type: "uint256" },
        { name: "data", type: "bytes" },
        { name: "factoryDeps", type: "bytes32[]" },
        { name: "paymasterInput", type: "bytes" }
      ]
    },
    primaryType: "Transaction",
    message: t
  };
};
function Jp(e) {
  const { gas: t, nonce: n, to: r, from: s, value: o, maxFeePerGas: a, maxPriorityFeePerGas: i, factoryDeps: c, paymaster: l, paymasterInput: u, gasPerPubdata: d, data: p } = e;
  return {
    txType: 113n,
    from: BigInt(s),
    to: r ? BigInt(r) : 0n,
    gasLimit: t ?? 0n,
    gasPerPubdataByteLimit: d ?? ec,
    maxFeePerGas: a ?? 0n,
    maxPriorityFeePerGas: i ?? 0n,
    paymaster: l ? BigInt(l) : 0n,
    nonce: n ? BigInt(n) : 0n,
    value: o ?? 0n,
    data: p || "0x0",
    factoryDeps: (c == null ? void 0 : c.map((f) => M(Zg(f)))) ?? [],
    paymasterInput: u || "0x"
  };
}
const Qt = {
  formatters: Vp,
  serializers: Gg,
  custom: {
    getEip712Domain: Jg
  }
}, Xg = /* @__PURE__ */ x({
  ...Qt,
  id: 11124,
  name: "Abstract Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://api.testnet.abs.xyz"] }
  },
  blockExplorers: {
    default: {
      name: "Abstract Block Explorer",
      url: "https://explorer.testnet.abs.xyz"
    }
  },
  testnet: !0,
  custom: {
    getEip712Domain(e) {
      const t = Jp(e);
      return {
        domain: {
          name: "Abstract",
          // Use 'Abstract' rather than 'zkSync'
          version: "2",
          chainId: e.chainId
        },
        types: {
          Transaction: [
            { name: "txType", type: "uint256" },
            { name: "from", type: "uint256" },
            { name: "to", type: "uint256" },
            { name: "gasLimit", type: "uint256" },
            { name: "gasPerPubdataByteLimit", type: "uint256" },
            { name: "maxFeePerGas", type: "uint256" },
            { name: "maxPriorityFeePerGas", type: "uint256" },
            { name: "paymaster", type: "uint256" },
            { name: "nonce", type: "uint256" },
            { name: "value", type: "uint256" },
            { name: "data", type: "bytes" },
            { name: "factoryDeps", type: "bytes32[]" },
            { name: "paymasterInput", type: "bytes" }
          ]
        },
        primaryType: "Transaction",
        message: t
      };
    }
  }
}), Yg = /* @__PURE__ */ x({
  id: 787,
  name: "Acala",
  network: "acala",
  nativeCurrency: {
    name: "Acala",
    symbol: "ACA",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://eth-rpc-acala.aca-api.network"],
      webSocket: ["wss://eth-rpc-acala.aca-api.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Acala Blockscout",
      url: "https://blockscout.acala.network",
      apiUrl: "https://blockscout.acala.network/api"
    }
  },
  testnet: !1
}), ex = {
  gasPriceOracle: { address: "0x420000000000000000000000000000000000000F" },
  l1Block: { address: "0x4200000000000000000000000000000000000015" },
  l2CrossDomainMessenger: {
    address: "0x4200000000000000000000000000000000000007"
  },
  l2Erc721Bridge: { address: "0x4200000000000000000000000000000000000014" },
  l2StandardBridge: { address: "0x4200000000000000000000000000000000000010" },
  l2ToL1MessagePasser: {
    address: "0x4200000000000000000000000000000000000016"
  }
}, tc = {
  block: /* @__PURE__ */ Qs({
    format(e) {
      var n;
      return {
        transactions: (n = e.transactions) == null ? void 0 : n.map((r) => {
          if (typeof r == "string")
            return r;
          const s = In(r);
          return s.typeHex === "0x7e" && (s.isSystemTx = r.isSystemTx, s.mint = r.mint ? L(r.mint) : void 0, s.sourceHash = r.sourceHash, s.type = "deposit"), s;
        }),
        stateRoot: e.stateRoot
      };
    }
  }),
  transaction: /* @__PURE__ */ Gs({
    format(e) {
      const t = {};
      return e.type === "0x7e" && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? L(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t;
    }
  }),
  transactionReceipt: /* @__PURE__ */ Ui({
    format(e) {
      return {
        l1GasPrice: e.l1GasPrice ? L(e.l1GasPrice) : null,
        l1GasUsed: e.l1GasUsed ? L(e.l1GasUsed) : null,
        l1Fee: e.l1Fee ? L(e.l1Fee) : null,
        l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null
      };
    }
  })
};
function Xp(e, t) {
  return rx(e) ? nx(e) : ho(e, t);
}
const tx = {
  transaction: Xp
};
function nx(e) {
  sx(e);
  const { sourceHash: t, data: n, from: r, gas: s, isSystemTx: o, mint: a, to: i, value: c } = e, l = [
    t,
    r,
    i ?? "0x",
    a ? M(a) : "0x",
    c ? M(c) : "0x",
    s ? M(s) : "0x",
    o ? "0x1" : "0x",
    n ?? "0x"
  ];
  return ue([
    "0x7e",
    we(l)
  ]);
}
function rx(e) {
  return e.type === "deposit" || typeof e.sourceHash < "u";
}
function sx(e) {
  const { from: t, to: n } = e;
  if (t && !Z(t))
    throw new ee({ address: t });
  if (n && !Z(n))
    throw new ee({ address: n });
}
const z = {
  contracts: ex,
  formatters: tc,
  serializers: tx
}, Lr = 1, ox = /* @__PURE__ */ x({
  ...z,
  id: 888888888,
  name: "Ancient8",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.ancient8.gg"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ancient8 explorer",
      url: "https://scan.ancient8.gg",
      apiUrl: "https://scan.ancient8.gg/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [Lr]: {
        address: "0xB09DC08428C8b4EFB4ff9C0827386CDF34277996"
      }
    },
    portal: {
      [Lr]: {
        address: "0x639F2AECE398Aa76b07e59eF6abe2cFe32bacb68",
        blockCreated: 19070571
      }
    },
    l1StandardBridge: {
      [Lr]: {
        address: "0xd5e3eDf5b68135D559D572E26bF863FBC1950033",
        blockCreated: 19070571
      }
    }
  },
  sourceId: Lr
}), zr = 11155111, ax = /* @__PURE__ */ x({
  ...z,
  id: 28122024,
  name: "Ancient8 Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpcv2-testnet.ancient8.gg"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ancient8 Celestia Testnet explorer",
      url: "https://scanv2-testnet.ancient8.gg",
      apiUrl: "https://scanv2-testnet.ancient8.gg/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [zr]: {
        address: "0x942fD5017c0F60575930D8574Eaca13BEcD6e1bB"
      }
    },
    portal: {
      [zr]: {
        address: "0xfa1d9E26A6aCD7b22115D27572c1221B9803c960",
        blockCreated: 4972908
      }
    },
    l1StandardBridge: {
      [zr]: {
        address: "0xF6Bc0146d3c74D48306e79Ae134A260E418C9335",
        blockCreated: 4972908
      }
    }
  },
  sourceId: zr
}), ix = /* @__PURE__ */ x({
  id: 31337,
  name: "Anvil",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
      webSocket: ["ws://127.0.0.1:8545"]
    }
  }
}), cx = /* @__PURE__ */ x({
  id: 3993,
  name: "APEX Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.apexlayer.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://exp-testnet.apexlayer.xyz",
      apiUrl: "https://exp-testnet.apexlayer.xyz/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xf7642be33a6b18D16a995657adb5a68CD0438aE2",
      blockCreated: 283775
    }
  },
  testnet: !0
}), lx = /* @__PURE__ */ x({
  id: 42161,
  name: "Arbitrum One",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://arb1.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Arbiscan",
      url: "https://arbiscan.io",
      apiUrl: "https://api.arbiscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7654707
    }
  }
}), ux = /* @__PURE__ */ x({
  id: 421613,
  name: "Arbitrum Goerli",
  nativeCurrency: {
    name: "Arbitrum Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Arbiscan",
      url: "https://goerli.arbiscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 88114
    }
  },
  testnet: !0
}), dx = /* @__PURE__ */ x({
  id: 42170,
  name: "Arbitrum Nova",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://nova.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Arbiscan",
      url: "https://nova.arbiscan.io",
      apiUrl: "https://api-nova.arbiscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1746963
    }
  }
}), px = /* @__PURE__ */ x({
  id: 42421,
  name: "AssetChain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Real World Asset",
    symbol: "RWA"
  },
  rpcUrls: {
    default: { http: ["https://enugu-rpc.assetchain.org"] }
  },
  blockExplorers: {
    default: {
      name: "Asset Chain Testnet Explorer",
      url: "https://scan-testnet.assetchain.org",
      apiUrl: "https://scan-testnet.assetchain.org/api"
    }
  },
  testnet: !0,
  contracts: {
    multicall3: {
      address: "0x989F832D35988cb5e3eB001Fa2Fe789469EC31Ea",
      blockCreated: 17177
    }
  }
}), fx = /* @__PURE__ */ x({
  id: 592,
  name: "Astar",
  network: "astar-mainnet",
  nativeCurrency: {
    name: "Astar",
    symbol: "ASTR",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://astar.api.onfinality.io/public"] }
  },
  blockExplorers: {
    default: {
      name: "Astar Subscan",
      url: "https://astar.subscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 761794
    }
  },
  testnet: !1
}), hx = /* @__PURE__ */ x({
  id: 3776,
  name: "Astar zkEVM",
  network: "AstarZkEVM",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.startale.com/astar-zkevm"]
    }
  },
  blockExplorers: {
    default: {
      name: "Astar zkEVM Explorer",
      url: "https://astar-zkevm.explorer.startale.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 93528
    }
  },
  testnet: !1
}), mx = /* @__PURE__ */ x({
  id: 6038361,
  name: "Astar zkEVM Testnet zKyoto",
  network: "zKyoto",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.startale.com/zkyoto"]
    }
  },
  blockExplorers: {
    default: {
      name: "zKyoto Explorer",
      url: "https://zkyoto.explorer.startale.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 196153
    }
  },
  testnet: !0
}), bx = /* @__PURE__ */ x({
  id: 421614,
  name: "Arbitrum Sepolia",
  nativeCurrency: {
    name: "Arbitrum Sepolia Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rollup.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Arbiscan",
      url: "https://sepolia.arbiscan.io",
      apiUrl: "https://api-sepolia.arbiscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 81930
    }
  },
  testnet: !0
}), yx = /* @__PURE__ */ x({
  id: 463,
  name: "Areon Network",
  nativeCurrency: { decimals: 18, name: "AREA", symbol: "AREA" },
  rpcUrls: {
    default: {
      http: ["https://mainnet-rpc.areon.network"],
      webSocket: ["wss://mainnet-ws.areon.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Areonscan",
      url: "https://areonscan.com"
    }
  },
  testnet: !1
}), wx = /* @__PURE__ */ x({
  id: 462,
  name: "Areon Network Testnet",
  nativeCurrency: { decimals: 18, name: "TAREA", symbol: "TAREA" },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.areon.network"],
      webSocket: ["wss://testnet-ws.areon.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Areonscan",
      url: "https://areonscan.com"
    }
  },
  testnet: !0
}), gx = /* @__PURE__ */ x({
  id: 11822,
  name: "Artela Testnet",
  nativeCurrency: { name: "ART", symbol: "ART", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://betanet-rpc1.artela.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Artela",
      url: "https://betanet-scan.artela.network",
      apiUrl: "https://betanet-scan.artela.network/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xd07c8635f76e8745Ee7092fbb6e8fbc5FeF09DD7",
      blockCreated: 7001871
    }
  },
  testnet: !0
}), xx = /* @__PURE__ */ x({
  id: 2340,
  name: "Atleta Olympia",
  nativeCurrency: { decimals: 18, name: "Atla", symbol: "ATLA" },
  rpcUrls: {
    default: {
      http: [
        "https://testnet-rpc.atleta.network:9944",
        "https://testnet-rpc.atleta.network"
      ],
      ws: ["wss://testnet-rpc.atleta.network:9944"]
    }
  },
  blockExplorers: {
    default: {
      name: "Atleta Olympia Explorer",
      url: "https://blockscout.atleta.network",
      apiUrl: "https://blockscout.atleta.network/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0x1472ec6392180fb84F345d2455bCC75B26577115",
      blockCreated: 1076473
    }
  },
  testnet: !0
}), Cx = /* @__PURE__ */ x({
  id: 1313161554,
  name: "Aurora",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.aurora.dev"] }
  },
  blockExplorers: {
    default: {
      name: "Aurorascan",
      url: "https://aurorascan.dev",
      apiUrl: "https://aurorascan.dev/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 62907816
    }
  }
}), Ax = /* @__PURE__ */ x({
  id: 1313161555,
  name: "Aurora Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://testnet.aurora.dev"] }
  },
  blockExplorers: {
    default: {
      name: "Aurorascan",
      url: "https://testnet.aurorascan.dev",
      apiUrl: "https://testnet.aurorascan.dev/api"
    }
  },
  testnet: !0
}), vx = /* @__PURE__ */ x({
  id: 205205,
  name: "Auroria Testnet",
  network: "auroria",
  nativeCurrency: {
    name: "Auroria Stratis",
    symbol: "tSTRAX",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://auroria.rpc.stratisevm.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Auroria Testnet Explorer",
      url: "https://auroria.explorer.stratisevm.com"
    }
  },
  testnet: !0
}), Ex = /* @__PURE__ */ x({
  id: 43114,
  name: "Avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "SnowTrace",
      url: "https://snowtrace.io",
      apiUrl: "https://api.snowtrace.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11907934
    }
  }
}), kx = /* @__PURE__ */ x({
  id: 43113,
  name: "Avalanche Fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche Fuji",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io",
      apiUrl: "https://api-testnet.snowtrace.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7096959
    }
  },
  testnet: !0
}), Ix = 168587773, Sx = /* @__PURE__ */ x({
  id: 1993,
  name: "B3 Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.b3.fun/http"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia.explorer.b3.fun"
    }
  },
  testnet: !0,
  sourceId: Ix
}), Bx = 8453, Tx = /* @__PURE__ */ x({
  id: 8333,
  name: "B3",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet-rpc.b3.fun/http"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.b3.fun"
    }
  },
  sourceId: Bx
}), Ux = /* @__PURE__ */ x({
  id: 5165,
  network: "bahamut",
  name: "Bahamut",
  nativeCurrency: { name: "Fasttoken", symbol: "FTN", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://rpc1.bahamut.io",
        "https://bahamut-rpc.publicnode.com",
        "https://rpc2.bahamut.io"
      ],
      webSocket: [
        "wss://ws1.sahara.bahamutchain.com",
        "wss://bahamut-rpc.publicnode.com",
        "wss://ws2.sahara.bahamutchain.com"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Ftnscan",
      url: "https://www.ftnscan.com",
      apiUrl: "https://www.ftnscan.com/api"
    }
  }
}), _r = 1, Px = /* @__PURE__ */ x({
  ...z,
  id: 8453,
  name: "Base",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.base.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://basescan.org",
      apiUrl: "https://api.basescan.org/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [_r]: {
        address: "0x56315b90c40730925ec5485cf004d835058518A0"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 5022
    },
    portal: {
      [_r]: {
        address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
        blockCreated: 17482143
      }
    },
    l1StandardBridge: {
      [_r]: {
        address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
        blockCreated: 17482143
      }
    }
  },
  sourceId: _r
}), Hr = 5, Nx = /* @__PURE__ */ x({
  ...z,
  id: 84531,
  name: "Base Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://goerli.base.org"] }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://goerli.basescan.org",
      apiUrl: "https://goerli.basescan.org/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [Hr]: {
        address: "0x2A35891ff30313CcFa6CE88dcf3858bb075A2298"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1376988
    },
    portal: {
      [Hr]: {
        address: "0xe93c8cD0D409341205A592f8c4Ac1A5fe5585cfA"
      }
    },
    l1StandardBridge: {
      [Hr]: {
        address: "0xfA6D8Ee5BE770F84FC001D098C4bD604Fe01284a"
      }
    }
  },
  testnet: !0,
  sourceId: Hr
}), zn = 11155111, Mx = /* @__PURE__ */ x({
  ...z,
  id: 84532,
  network: "base-sepolia",
  name: "Base Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://sepolia.basescan.org",
      apiUrl: "https://api-sepolia.basescan.org/api"
    }
  },
  contracts: {
    ...z.contracts,
    disputeGameFactory: {
      [zn]: {
        address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1"
      }
    },
    l2OutputOracle: {
      [zn]: {
        address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254"
      }
    },
    portal: {
      [zn]: {
        address: "0x49f53e41452c74589e85ca1677426ba426459e85",
        blockCreated: 4446677
      }
    },
    l1StandardBridge: {
      [zn]: {
        address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",
        blockCreated: 4446677
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1059647
    }
  },
  testnet: !0,
  sourceId: zn
}), Fx = /* @__PURE__ */ x({
  id: 4337,
  name: "Beam",
  network: "beam",
  nativeCurrency: {
    decimals: 18,
    name: "Beam",
    symbol: "BEAM"
  },
  rpcUrls: {
    default: {
      http: ["https://build.onbeam.com/rpc"],
      webSocket: ["wss://build.onbeam.com/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Beam Explorer",
      url: "https://subnets.avax.network/beam"
    }
  },
  contracts: {
    multicall3: {
      address: "0x4956f15efdc3dc16645e90cc356eafa65ffc65ec",
      blockCreated: 1
    }
  }
}), Dx = /* @__PURE__ */ x({
  id: 13337,
  name: "Beam Testnet",
  network: "beam",
  nativeCurrency: {
    decimals: 18,
    name: "Beam",
    symbol: "BEAM"
  },
  rpcUrls: {
    default: {
      http: ["https://build.onbeam.com/rpc/testnet"],
      webSocket: ["wss://build.onbeam.com/ws/testnet"]
    }
  },
  blockExplorers: {
    default: {
      name: "Beam Explorer",
      url: "https://subnets-test.avax.network/beam"
    }
  },
  contracts: {
    multicall3: {
      address: "0x9bf49b704ee2a095b95c1f2d4eb9010510c41c9e",
      blockCreated: 3
    }
  },
  testnet: !0
}), Rx = /* @__PURE__ */ x({
  id: 641230,
  name: "Bear Network Chain Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "BearNetworkChain",
    symbol: "BRNKC"
  },
  rpcUrls: {
    default: { http: ["https://brnkc-mainnet.bearnetwork.net"] }
  },
  blockExplorers: {
    default: {
      name: "BrnkScan",
      url: "https://brnkscan.bearnetwork.net",
      apiUrl: "https://brnkscan.bearnetwork.net/api"
    }
  }
}), Ox = /* @__PURE__ */ x({
  id: 751230,
  name: "Bear Network Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "tBRNKC",
    symbol: "tBRNKC"
  },
  rpcUrls: {
    default: { http: ["https://brnkc-test.bearnetwork.net"] }
  },
  blockExplorers: {
    default: {
      name: "BrnkTestScan",
      url: "https://brnktest-scan.bearnetwork.net",
      apiUrl: "https://brnktest-scan.bearnetwork.net/api"
    }
  },
  testnet: !0
}), Lx = /* @__PURE__ */ x({
  id: 80085,
  name: "Berachain Artio",
  nativeCurrency: {
    decimals: 18,
    name: "BERA Token",
    symbol: "BERA"
  },
  rpcUrls: {
    default: { http: ["https://artio.rpc.berachain.com"] }
  },
  blockExplorers: {
    default: {
      name: "Berachain",
      url: "https://artio.beratrail.io"
    }
  },
  testnet: !0
}), zx = /* @__PURE__ */ x({
  id: 80084,
  name: "Berachain bArtio",
  nativeCurrency: {
    decimals: 18,
    name: "BERA Token",
    symbol: "BERA"
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 109269
    }
  },
  rpcUrls: {
    default: { http: ["https://bartio.rpc.berachain.com"] }
  },
  blockExplorers: {
    default: {
      name: "Berachain bArtio Beratrail",
      url: "https://bartio.beratrail.io"
    }
  },
  testnet: !0
}), _x = /* @__PURE__ */ x({
  id: 11501,
  name: "BEVM Mainnet",
  nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc-mainnet-1.bevm.io"] }
  },
  blockExplorers: {
    default: {
      name: "Bevmscan",
      url: "https://scan-mainnet.bevm.io",
      apiUrl: "https://scan-mainnet-api.bevm.io/api"
    }
  }
}), Hx = /* @__PURE__ */ x({
  id: 96,
  name: "Bitkub",
  nativeCurrency: { name: "Bitkub", symbol: "KUB", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.bitkubchain.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Bitkub Chain Mainnet Explorer",
      url: "https://www.bkcscan.com",
      apiUrl: "https://www.bkcscan.com/api"
    }
  }
}), $x = /* @__PURE__ */ x({
  id: 25925,
  name: "Bitkub Testnet",
  network: "Bitkub Testnet",
  nativeCurrency: { name: "Bitkub Test", symbol: "tKUB", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.bitkubchain.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Bitkub Chain Testnet Explorer",
      url: "https://testnet.bkcscan.com",
      apiUrl: "https://testnet.bkcscan.com/api"
    }
  },
  testnet: !0
}), jx = /* @__PURE__ */ x({
  id: 199,
  name: "BitTorrent",
  network: "bittorrent-chain-mainnet",
  nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.bittorrentchain.io"] }
  },
  blockExplorers: {
    default: {
      name: "Bttcscan",
      url: "https://bttcscan.com",
      apiUrl: "https://api.bttcscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 31078552
    }
  }
}), qx = /* @__PURE__ */ x({
  id: 1028,
  name: "BitTorrent Chain Testnet",
  network: "bittorrent-chain-testnet",
  nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://testrpc.bittorrentchain.io"] }
  },
  blockExplorers: {
    default: {
      name: "Bttcscan",
      url: "https://testnet.bttcscan.com",
      apiUrl: "https://testnet.bttcscan.com/api"
    }
  },
  testnet: !0
}), Gx = 1, Kx = /* @__PURE__ */ x({
  id: 81457,
  name: "Blast",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://rpc.blast.io"] }
  },
  blockExplorers: {
    default: {
      name: "Blastscan",
      url: "https://blastscan.io",
      apiUrl: "https://api.blastscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 212929
    }
  },
  sourceId: Gx
}), Qx = 11155111, Vx = /* @__PURE__ */ x({
  id: 168587773,
  name: "Blast Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.blast.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blastscan",
      url: "https://sepolia.blastscan.io",
      apiUrl: "https://api-sepolia.blastscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 756690
    }
  },
  testnet: !0,
  sourceId: Qx
}), Vo = 1, Wx = x({
  ...z,
  id: 60808,
  name: "BOB",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.gobob.xyz"],
      webSocket: ["wss://rpc.gobob.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "BOB Explorer",
      url: "https://explorer.gobob.xyz"
    }
  },
  contracts: {
    ...z.contracts,
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 23131
    },
    l2OutputOracle: {
      [Vo]: {
        address: "0xdDa53E23f8a32640b04D7256e651C1db98dB11C1",
        blockCreated: 4462615
      }
    },
    portal: {
      [Vo]: {
        address: "0x8AdeE124447435fE03e3CD24dF3f4cAE32E65a3E",
        blockCreated: 4462615
      }
    }
  },
  sourceId: Vo
}), Wo = 11155111, Zx = x({
  ...z,
  id: 808813,
  name: "BOB Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://bob-sepolia.rpc.gobob.xyz"],
      webSocket: ["wss://bob-sepolia.rpc.gobob.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "BOB Sepolia Explorer",
      url: "https://bob-sepolia.explorer.gobob.xyz"
    }
  },
  contracts: {
    ...z.contracts,
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 35677
    },
    l2OutputOracle: {
      [Wo]: {
        address: "0x14D0069452b4AE2b250B395b8adAb771E4267d2f",
        blockCreated: 4462615
      }
    },
    portal: {
      [Wo]: {
        address: "0x867B1Aa872b9C8cB5E9F7755feDC45BB24Ad0ae4",
        blockCreated: 4462615
      }
    }
  },
  testnet: !0,
  sourceId: Wo
}), Jx = /* @__PURE__ */ x({
  id: 288,
  name: "Boba Network",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.boba.network"] }
  },
  blockExplorers: {
    default: {
      name: "BOBAScan",
      url: "https://bobascan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 446859
    }
  }
}), Xx = /* @__PURE__ */ x({
  id: 28882,
  name: "Boba Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://sepolia.boba.network"] }
  },
  blockExplorers: {
    default: {
      name: "BOBAScan",
      url: "https://testnet.bobascan.com"
    }
  },
  testnet: !0
}), Yx = /* @__PURE__ */ x({
  id: 3636,
  name: "Botanix Testnet",
  nativeCurrency: { name: "Botanix", symbol: "BTC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://poa-node.botanixlabs.dev"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://blockscout.botanixlabs.dev",
      apiUrl: "https://blockscout.botanixlabs.dev"
    }
  },
  testnet: !0
}), e2 = /* @__PURE__ */ x({
  id: 1039,
  name: "Bronos",
  nativeCurrency: {
    decimals: 18,
    name: "BRO",
    symbol: "BRO"
  },
  rpcUrls: {
    default: { http: ["https://evm.bronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "BronoScan",
      url: "https://broscan.bronos.org"
    }
  }
}), t2 = /* @__PURE__ */ x({
  id: 1038,
  name: "Bronos Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Bronos Coin",
    symbol: "tBRO"
  },
  rpcUrls: {
    default: { http: ["https://evm-testnet.bronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "BronoScan",
      url: "https://tbroscan.bronos.org"
    }
  },
  testnet: !0
}), n2 = /* @__PURE__ */ x({
  id: 56,
  name: "BNB Smart Chain",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB"
  },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/bsc"] }
  },
  blockExplorers: {
    default: {
      name: "BscScan",
      url: "https://bscscan.com",
      apiUrl: "https://api.bscscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 15921452
    }
  }
}), r2 = /* @__PURE__ */ x({
  id: 97,
  name: "Binance Smart Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    default: { http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"] }
  },
  blockExplorers: {
    default: {
      name: "BscScan",
      url: "https://testnet.bscscan.com",
      apiUrl: "https://testnet.bscscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 17422483
    }
  },
  testnet: !0
}), s2 = /* @__PURE__ */ x({
  id: 1017,
  name: "BNB Greenfield Chain",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB"
  },
  rpcUrls: {
    default: { http: ["https://greenfield-chain.bnbchain.org"] }
  },
  blockExplorers: {
    default: {
      name: "BNB Greenfield Mainnet Scan",
      url: "https://greenfieldscan.com"
    }
  },
  testnet: !1
}), o2 = /* @__PURE__ */ x({
  id: 200901,
  name: "Bitlayer",
  nativeCurrency: {
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: [
        "https://rpc.bitlayer.org",
        "https://rpc.bitlayer-rpc.com",
        "https://rpc.ankr.com/bitlayer"
      ],
      webSocket: ["wss://ws.bitlayer.org", "wss://ws.bitlayer-rpc.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Bitlayer(BTR) Scan",
      url: "https://www.btrscan.com"
    }
  }
}), a2 = /* @__PURE__ */ x({
  id: 200810,
  name: "Bitlayer Testnet",
  nativeCurrency: {
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.bitlayer.org"],
      webSocket: [
        "wss://testnet-ws.bitlayer.org",
        "wss://testnet-ws.bitlayer-rpc.com"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Bitlayer(BTR) Scan",
      url: "https://testnet.btrscan.com"
    }
  },
  testnet: !0
}), i2 = /* @__PURE__ */ x({
  id: 4999,
  name: "BlackFort Exchange Network",
  nativeCurrency: { name: "BlackFort Token", symbol: "BXN", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.blackfort.network/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.blackfort.network",
      apiUrl: "https://explorer.blackfort.network/api"
    }
  }
}), c2 = /* @__PURE__ */ x({
  id: 4777,
  name: "BlackFort Exchange Network Testnet",
  nativeCurrency: {
    name: "BlackFort Testnet Token",
    symbol: "TBXN",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.blackfort.network/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://testnet-explorer.blackfort.network",
      apiUrl: "https://testnet-explorer.blackfort.network/api"
    }
  },
  testnet: !0
}), l2 = /* @__PURE__ */ x({
  id: 7700,
  name: "Canto",
  nativeCurrency: {
    decimals: 18,
    name: "Canto",
    symbol: "CANTO"
  },
  rpcUrls: {
    default: { http: ["https://canto.gravitychain.io"] }
  },
  blockExplorers: {
    default: {
      name: "Tuber.Build (Blockscout)",
      url: "https://tuber.build"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2905789
    }
  }
}), u2 = {
  /*
     * Estimates the fees per gas for a transaction.
  
     * If the transaction is to be paid in a token (feeCurrency is present) then the fees
     * are estimated in the value of the token. Otherwise falls back to the default
     * estimation by returning null.
     *
     * @param params fee estimation function parameters
     */
  estimateFeesPerGas: async (e) => {
    var r;
    if (!((r = e.request) != null && r.feeCurrency))
      return null;
    const [t, n] = await Promise.all([
      d2(e.client, e.request.feeCurrency),
      p2(e.client, e.request.feeCurrency)
    ]);
    return {
      maxFeePerGas: t,
      maxPriorityFeePerGas: n
    };
  }
};
async function d2(e, t) {
  const n = await e.request({
    method: "eth_gasPrice",
    params: [t]
  });
  return BigInt(n);
}
async function p2(e, t) {
  const n = await e.request({
    method: "eth_maxPriorityFeePerGas",
    params: [t]
  });
  return BigInt(n);
}
function Yp(e) {
  return e === 0 || e === 0n || e === void 0 || e === null || e === "0" || e === "" || typeof e == "string" && (se(e).toLowerCase() === "0x" || se(e).toLowerCase() === "0x00");
}
function jn(e) {
  return !Yp(e);
}
function f2(e) {
  return typeof e.maxFeePerGas < "u" && typeof e.maxPriorityFeePerGas < "u";
}
function ef(e) {
  return e.type === "cip64" ? !0 : f2(e) && jn(e.feeCurrency);
}
const h2 = {
  block: /* @__PURE__ */ Qs({
    format(e) {
      var n;
      return {
        transactions: (n = e.transactions) == null ? void 0 : n.map((r) => typeof r == "string" ? r : {
          ...In(r),
          ...r.gatewayFee ? {
            gatewayFee: L(r.gatewayFee),
            gatewayFeeRecipient: r.gatewayFeeRecipient
          } : {},
          feeCurrency: r.feeCurrency
        }),
        ...e.randomness ? { randomness: e.randomness } : {}
      };
    }
  }),
  transaction: /* @__PURE__ */ Gs({
    format(e) {
      if (e.type === "0x7e")
        return {
          isSystemTx: e.isSystemTx,
          mint: e.mint ? L(e.mint) : void 0,
          sourceHash: e.sourceHash,
          type: "deposit"
        };
      const t = { feeCurrency: e.feeCurrency };
      return e.type === "0x7b" ? t.type = "cip64" : (e.type === "0x7c" && (t.type = "cip42"), t.gatewayFee = e.gatewayFee ? L(e.gatewayFee) : null, t.gatewayFeeRecipient = e.gatewayFeeRecipient), t;
    }
  }),
  transactionRequest: /* @__PURE__ */ si({
    format(e) {
      const t = {};
      return e.feeCurrency && (t.feeCurrency = e.feeCurrency), ef(e) && (t.type = "0x7b"), t;
    }
  })
};
function m2(e, t) {
  return ef(e) ? y2(e, t) : Xp(e, t);
}
const b2 = {
  transaction: m2
};
function y2(e, t) {
  g2(e);
  const { chainId: n, gas: r, nonce: s, to: o, value: a, maxFeePerGas: i, maxPriorityFeePerGas: c, accessList: l, feeCurrency: u, data: d } = e, p = [
    M(n),
    s ? M(s) : "0x",
    c ? M(c) : "0x",
    i ? M(i) : "0x",
    r ? M(r) : "0x",
    o ?? "0x",
    a ? M(a) : "0x",
    d ?? "0x",
    Un(l),
    u,
    ...Pn(e, t)
  ];
  return ue([
    "0x7b",
    we(p)
  ]);
}
const w2 = kn;
function g2(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: o, feeCurrency: a } = e;
  if (t <= 0)
    throw new Lt({ chainId: t });
  if (o && !Z(o))
    throw new ee({ address: o });
  if (r)
    throw new S("`gasPrice` is not a valid CIP-64 Transaction attribute.");
  if (jn(s) && s > w2)
    throw new Ve({ maxFeePerGas: s });
  if (jn(n) && jn(s) && n > s)
    throw new Tt({ maxFeePerGas: s, maxPriorityFeePerGas: n });
  if (jn(a) && !Z(a))
    throw new S("`feeCurrency` MUST be a token address for CIP-64 transactions.");
  if (Yp(a))
    throw new S("`feeCurrency` must be provided for CIP-64 transactions.");
}
const tf = {
  formatters: h2,
  serializers: b2,
  fees: u2
}, x2 = /* @__PURE__ */ x({
  ...tf,
  id: 42220,
  name: "Celo",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO"
  },
  rpcUrls: {
    default: { http: ["https://forno.celo.org"] }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://celoscan.io",
      apiUrl: "https://api.celoscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 13112599
    }
  },
  testnet: !1
}), C2 = /* @__PURE__ */ x({
  ...tf,
  id: 44787,
  name: "Alfajores",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "A-CELO"
  },
  rpcUrls: {
    default: {
      http: ["https://alfajores-forno.celo-testnet.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/alfajores",
      apiUrl: "https://explorer.celo.org/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14569001
    }
  },
  testnet: !0
}), A2 = /* @__PURE__ */ x({
  id: 88888,
  name: "Chiliz Chain",
  network: "chiliz-chain",
  nativeCurrency: {
    decimals: 18,
    name: "CHZ",
    symbol: "CHZ"
  },
  rpcUrls: {
    default: {
      http: [
        "https://rpc.ankr.com/chiliz",
        "https://chiliz-rpc.publicnode.com"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Chiliz Explorer",
      url: "https://scan.chiliz.com",
      apiUrl: "https://scan.chiliz.com/api"
    }
  }
}), v2 = /* @__PURE__ */ x({
  id: 2882,
  name: "Chips Network",
  network: "CHIPS",
  nativeCurrency: {
    decimals: 18,
    name: "IOTA",
    symbol: "IOTA"
  },
  rpcUrls: {
    default: {
      http: [
        "https://node.chips.ooo/wasp/api/v1/chains/iota1pp3d3mnap3ufmgqnjsnw344sqmf5svjh26y2khnmc89sv6788y3r207a8fn/evm"
      ]
    }
  }
}), E2 = /* @__PURE__ */ x({
  id: 61,
  name: "Ethereum Classic",
  nativeCurrency: {
    decimals: 18,
    name: "ETC",
    symbol: "ETC"
  },
  rpcUrls: {
    default: { http: ["https://etc.rivet.link"] }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.com/etc/mainnet"
    }
  }
}), k2 = /* @__PURE__ */ x({
  id: 1030,
  name: "Conflux eSpace",
  nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evm.confluxrpc.com"],
      webSocket: ["wss://evm.confluxrpc.com/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "ConfluxScan",
      url: "https://evm.confluxscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
      blockCreated: 68602935
    }
  }
}), I2 = /* @__PURE__ */ x({
  id: 71,
  name: "Conflux eSpace Testnet",
  network: "cfx-espace-testnet",
  testnet: !0,
  nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evmtestnet.confluxrpc.com"],
      webSocket: ["wss://evmtestnet.confluxrpc.com/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "ConfluxScan",
      url: "https://evmtestnet.confluxscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
      blockCreated: 117499050
    }
  }
}), S2 = /* @__PURE__ */ x({
  id: 1116,
  name: "Core Dao",
  nativeCurrency: {
    decimals: 18,
    name: "Core",
    symbol: "CORE"
  },
  rpcUrls: {
    default: { http: ["https://rpc.coredao.org"] }
  },
  blockExplorers: {
    default: {
      name: "CoreDao",
      url: "https://scan.coredao.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 11907934
    }
  },
  testnet: !1
}), B2 = x({
  id: 44,
  name: "Crab Network",
  nativeCurrency: {
    decimals: 18,
    name: "Crab Network Native Token",
    symbol: "CRAB"
  },
  rpcUrls: {
    default: {
      http: ["https://crab-rpc.darwinia.network"],
      webSocket: ["wss://crab-rpc.darwinia.network"]
    }
  },
  blockExplorers: {
    default: { name: "Blockscout", url: "https://crab-scan.darwinia.network" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 3032593
    }
  }
}), T2 = /* @__PURE__ */ x({
  id: 25,
  name: "Cronos Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Cronos",
    symbol: "CRO"
  },
  rpcUrls: {
    default: { http: ["https://evm.cronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "Cronos Explorer",
      url: "https://explorer.cronos.org",
      apiUrl: "https://explorer-api.cronos.org/mainnet/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1963112
    }
  }
}), U2 = /* @__PURE__ */ x({
  id: 388,
  name: "Cronos zkEVM Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Cronos zkEVM CRO",
    symbol: "zkCRO"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.zkevm.cronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "Cronos zkEVM (Mainnet) Chain Explorer",
      url: "https://explorer.zkevm.cronos.org"
    }
  }
}), P2 = /* @__PURE__ */ x({
  id: 282,
  name: "Cronos zkEVM Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Cronos zkEVM Test Coin",
    symbol: "zkTCRO"
  },
  rpcUrls: {
    default: { http: ["https://testnet.zkevm.cronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "Cronos zkEVM Testnet Explorer",
      url: "https://explorer.zkevm.cronos.org/testnet"
    }
  },
  testnet: !0
}), N2 = /* @__PURE__ */ x({
  id: 338,
  name: "Cronos Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "CRO",
    symbol: "tCRO"
  },
  rpcUrls: {
    default: { http: ["https://evm-t3.cronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "Cronos Explorer",
      url: "https://cronos.org/explorer/testnet3"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 10191251
    }
  },
  testnet: !0
}), M2 = /* @__PURE__ */ x({
  id: 3737,
  name: "Crossbell",
  nativeCurrency: {
    decimals: 18,
    name: "CSB",
    symbol: "CSB"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.crossbell.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "CrossScan",
      url: "https://scan.crossbell.io",
      apiUrl: "https://scan.crossbell.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 38246031
    }
  }
}), F2 = /* @__PURE__ */ x({
  id: 33111,
  name: "Curtis",
  nativeCurrency: { name: "ApeCoin", symbol: "APE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.curtis.apechain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Curtis Explorer",
      url: "https://explorer.curtis.apechain.com"
    }
  },
  testnet: !0
}), D2 = /* @__PURE__ */ x({
  id: 7560,
  name: "Cyber",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://cyber.alt.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://cyberscan.co",
      apiUrl: "https://cyberscan.co/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0
    }
  }
}), R2 = /* @__PURE__ */ x({
  id: 111557560,
  name: "Cyber Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://cyber-testnet.alt.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://testnet.cyberscan.co",
      apiUrl: "https://testnet.cyberscan.co/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xffc391F0018269d4758AEA1a144772E8FB99545E",
      blockCreated: 304545
    }
  },
  testnet: !0
}), O2 = /* @__PURE__ */ x({
  id: 46,
  name: "Darwinia Network",
  nativeCurrency: {
    decimals: 18,
    name: "RING",
    symbol: "RING"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.darwinia.network"],
      webSocket: ["wss://rpc.darwinia.network"]
    }
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.darwinia.network" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 69420
    }
  }
}), L2 = /* @__PURE__ */ x({
  ...z,
  id: 2716446429837e3,
  name: "Dchain",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://dchain-2716446429837000-1.jsonrpc.sagarpc.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Dchain Explorer",
      url: "https://dchain-2716446429837000-1.sagaexplorer.io",
      apiUrl: "https://api-dchain-2716446429837000-1.sagaexplorer.io/api"
    }
  },
  contracts: {
    ...z.contracts
  }
}), z2 = /* @__PURE__ */ x({
  ...z,
  id: 2713017997578e3,
  name: "Dchain Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://dchaintestnet-2713017997578000-1.jsonrpc.testnet.sagarpc.io"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Dchain Explorer",
      url: "https://dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io",
      apiUrl: "https://api-dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io/api"
    }
  },
  contracts: {
    ...z.contracts
  }
}), _2 = /* @__PURE__ */ x({
  id: 1130,
  network: "defichain-evm",
  name: "DeFiChain EVM Mainnet",
  nativeCurrency: {
    name: "DeFiChain",
    symbol: "DFI",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://eth.mainnet.ocean.jellyfishsdk.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "DeFiScan",
      url: "https://meta.defiscan.live"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 137852
    }
  }
}), H2 = /* @__PURE__ */ x({
  id: 1131,
  network: "defichain-evm-testnet",
  name: "DeFiChain EVM Testnet",
  nativeCurrency: {
    name: "DeFiChain",
    symbol: "DFI",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://eth.testnet.ocean.jellyfishsdk.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "DeFiScan",
      url: "https://meta.defiscan.live/?network=TestNet"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 156462
    }
  },
  testnet: !0
}), $2 = /* @__PURE__ */ x({
  id: 666666666,
  name: "Degen",
  nativeCurrency: {
    decimals: 18,
    name: "Degen",
    symbol: "DEGEN"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.degen.tips"],
      webSocket: ["wss://rpc.degen.tips"]
    }
  },
  blockExplorers: {
    default: {
      name: "Degen Chain Explorer",
      url: "https://explorer.degen.tips",
      apiUrl: "https://explorer.degen.tips/api/v2"
    }
  }
}), j2 = /* @__PURE__ */ x({
  id: 53935,
  name: "DFK Chain",
  nativeCurrency: {
    decimals: 18,
    name: "Jewel",
    symbol: "JEWEL"
  },
  rpcUrls: {
    default: {
      http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "DFKSubnetScan",
      url: "https://subnets.avax.network/defi-kingdoms"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14790551
    }
  }
}), q2 = x({
  id: 53457,
  name: "DODOchain Testnet",
  nativeCurrency: { decimals: 18, name: "DODO", symbol: "DODO" },
  rpcUrls: {
    default: {
      http: ["https://dodochain-testnet.alt.technology"],
      webSocket: ["wss://dodochain-testnet.alt.technology/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "DODOchain Testnet (Sepolia) Explorer",
      url: "https://testnet-scan.dodochain.com"
    }
  },
  testnet: !0
}), G2 = /* @__PURE__ */ x({
  id: 2e3,
  name: "Dogechain",
  nativeCurrency: {
    decimals: 18,
    name: "Wrapped Dogecoin",
    symbol: "WDOGE"
  },
  rpcUrls: {
    default: { http: ["https://rpc.dogechain.dog"] }
  },
  blockExplorers: {
    default: {
      name: "DogeChainExplorer",
      url: "https://explorer.dogechain.dog",
      apiUrl: "https://explorer.dogechain.dog/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0x68a8609a60a008EFA633dfdec592c03B030cC508",
      blockCreated: 25384031
    }
  }
}), K2 = /* @__PURE__ */ x({
  id: 23451,
  name: "DreyerX Mainnet",
  nativeCurrency: {
    name: "DreyerX",
    symbol: "DRX",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.dreyerx.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "DreyerX Scan",
      url: "https://scan.dreyerx.com"
    }
  }
}), Q2 = /* @__PURE__ */ x({
  id: 23452,
  name: "DreyerX Testnet",
  nativeCurrency: {
    name: "DreyerX",
    symbol: "DRX",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["http://testnet-rpc.dreyerx.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "DreyerX Testnet Scan",
      url: "https://testnet-scan.dreyerx.com"
    }
  },
  testnet: !0
}), V2 = /* @__PURE__ */ x({
  id: 2026,
  name: "Edgeless Network",
  nativeCurrency: {
    name: "Edgeless Wrapped ETH",
    symbol: "EwETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.edgeless.network/http"],
      webSocket: ["wss://rpc.edgeless.network/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Edgeless Explorer",
      url: "https://explorer.edgeless.network"
    }
  }
}), W2 = /* @__PURE__ */ x({
  id: 202,
  name: "Edgeless Testnet",
  nativeCurrency: {
    name: "Edgeless Wrapped ETH",
    symbol: "EwETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://edgeless-testnet.rpc.caldera.xyz/http"],
      webSocket: ["wss://edgeless-testnet.rpc.caldera.xyz/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Edgeless Testnet Explorer",
      url: "https://testnet.explorer.edgeless.network"
    }
  }
}), Z2 = /* @__PURE__ */ x({
  id: 2021,
  name: "Edgeware EdgeEVM Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Edgeware",
    symbol: "EDG"
  },
  rpcUrls: {
    default: { http: ["https://edgeware-evm.jelliedowl.net"] }
  },
  blockExplorers: {
    default: {
      name: "Edgscan by Bharathcoorg",
      url: "https://edgscan.live",
      apiUrl: "https://edgscan.live/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 18117872
    }
  }
}), J2 = /* @__PURE__ */ x({
  id: 2022,
  name: "Beresheet BereEVM Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Testnet EDG",
    symbol: "tEDG"
  },
  rpcUrls: {
    default: { http: ["https://beresheet-evm.jelliedowl.net"] }
  },
  blockExplorers: {
    default: {
      name: "Edgscan by Bharathcoorg",
      url: "https://testnet.edgscan.live",
      apiUrl: "https://testnet.edgscan.live/api"
    }
  }
}), X2 = /* @__PURE__ */ x({
  id: 7332,
  name: "Horizen EON",
  nativeCurrency: {
    decimals: 18,
    name: "ZEN",
    symbol: "ZEN"
  },
  rpcUrls: {
    default: { http: ["https://eon-rpc.horizenlabs.io/ethv1"] }
  },
  blockExplorers: {
    default: {
      name: "EON Explorer",
      url: "https://eon-explorer.horizenlabs.io"
    }
  },
  contracts: {}
}), Y2 = /* @__PURE__ */ x({
  id: 17777,
  name: "EOS EVM",
  nativeCurrency: {
    decimals: 18,
    name: "EOS",
    symbol: "EOS"
  },
  rpcUrls: {
    default: { http: ["https://api.evm.eosnetwork.com"] }
  },
  blockExplorers: {
    default: {
      name: "EOS EVM Explorer",
      url: "https://explorer.evm.eosnetwork.com",
      apiUrl: "https://explorer.evm.eosnetwork.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7943933
    }
  }
}), eC = /* @__PURE__ */ x({
  id: 15557,
  name: "EOS EVM Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "EOS",
    symbol: "EOS"
  },
  rpcUrls: {
    default: { http: ["https://api.testnet.evm.eosnetwork.com"] }
  },
  blockExplorers: {
    default: {
      name: "EOS EVM Testnet Explorer",
      url: "https://explorer.testnet.evm.eosnetwork.com",
      apiUrl: "https://explorer.testnet.evm.eosnetwork.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 9067940
    }
  },
  testnet: !0
}), tC = /* @__PURE__ */ x({
  id: 42793,
  name: "Etherlink",
  nativeCurrency: {
    decimals: 18,
    name: "Tez",
    symbol: "XTZ"
  },
  rpcUrls: {
    default: { http: ["https://node.mainnet.etherlink.com"] }
  },
  blockExplorers: {
    default: {
      name: "Etherlink",
      url: "https://explorer.etherlink.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 33899
    }
  }
}), nC = /* @__PURE__ */ x({
  id: 128123,
  name: "Etherlink Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Tez",
    symbol: "XTZ"
  },
  rpcUrls: {
    default: { http: ["https://node.ghostnet.etherlink.com"] }
  },
  blockExplorers: {
    default: {
      name: "Etherlink Testnet",
      url: "https://testnet-explorer.etherlink.com"
    }
  },
  testnet: !0
}), rC = /* @__PURE__ */ x({
  id: 9001,
  name: "Evmos",
  nativeCurrency: {
    decimals: 18,
    name: "Evmos",
    symbol: "EVMOS"
  },
  rpcUrls: {
    default: { http: ["https://eth.bd.evmos.org:8545"] }
  },
  blockExplorers: {
    default: {
      name: "Evmos Block Explorer",
      url: "https://escan.live"
    }
  }
}), sC = /* @__PURE__ */ x({
  id: 9e3,
  name: "Evmos Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Evmos",
    symbol: "EVMOS"
  },
  rpcUrls: {
    default: { http: ["https://eth.bd.evmos.dev:8545"] }
  },
  blockExplorers: {
    default: {
      name: "Evmos Testnet Block Explorer",
      url: "https://evm.evmos.dev/"
    }
  }
}), oC = /* @__PURE__ */ x({
  id: 1994,
  name: "Ekta",
  nativeCurrency: {
    decimals: 18,
    name: "EKTA",
    symbol: "EKTA"
  },
  rpcUrls: {
    default: { http: ["https://main.ekta.io"] }
  },
  blockExplorers: {
    default: {
      name: "Ektascan",
      url: "https://ektascan.io",
      apiUrl: "https://ektascan.io/api"
    }
  }
}), aC = /* @__PURE__ */ x({
  id: 1004,
  name: "Ekta Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "EKTA",
    symbol: "EKTA"
  },
  rpcUrls: {
    default: { http: ["https://test.ekta.io:8545"] }
  },
  blockExplorers: {
    default: {
      name: "Test Ektascan",
      url: "https://test.ektascan.io",
      apiUrl: "https://test.ektascan.io/api"
    }
  },
  testnet: !0
}), iC = /* @__PURE__ */ x({
  id: 250,
  name: "Fantom",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/fantom"] }
  },
  blockExplorers: {
    default: {
      name: "FTMScan",
      url: "https://ftmscan.com",
      apiUrl: "https://api.ftmscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 33001987
    }
  }
}), cC = /* @__PURE__ */ x({
  id: 64240,
  name: "Fantom Sonic Open Testnet",
  network: "fantom-sonic-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: { http: ["https://rpcapi.sonic.fantom.network"] }
  },
  blockExplorers: {
    default: {
      name: "Fantom Sonic Open Testnet Explorer",
      url: "https://public-sonic.fantom.network"
    }
  },
  testnet: !0
}), lC = /* @__PURE__ */ x({
  id: 4002,
  name: "Fantom Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.fantom.network"] }
  },
  blockExplorers: {
    default: {
      name: "FTMScan",
      url: "https://testnet.ftmscan.com",
      apiUrl: "https://testnet.ftmscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 8328688
    }
  },
  testnet: !0
}), uC = /* @__PURE__ */ x({
  id: 12306,
  name: "Fibo Chain",
  nativeCurrency: {
    decimals: 18,
    name: "fibo",
    symbol: "FIBO"
  },
  rpcUrls: {
    default: { http: ["https://network.hzroc.art"] }
  },
  blockExplorers: {
    default: {
      name: "FiboScan",
      url: "https://scan.fibochain.org"
    }
  }
}), dC = /* @__PURE__ */ x({
  id: 314,
  name: "Filecoin Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "filecoin",
    symbol: "FIL"
  },
  rpcUrls: {
    default: { http: ["https://api.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: {
      name: "Filfox",
      url: "https://filfox.info/en"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3328594
    }
  }
}), pC = /* @__PURE__ */ x({
  id: 314159,
  name: "Filecoin Calibration",
  nativeCurrency: {
    decimals: 18,
    name: "testnet filecoin",
    symbol: "tFIL"
  },
  rpcUrls: {
    default: { http: ["https://api.calibration.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: {
      name: "Filscan",
      url: "https://calibration.filscan.io"
    }
  },
  testnet: !0
}), fC = /* @__PURE__ */ x({
  id: 3141,
  name: "Filecoin Hyperspace",
  nativeCurrency: {
    decimals: 18,
    name: "testnet filecoin",
    symbol: "tFIL"
  },
  rpcUrls: {
    default: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: {
      name: "Filfox",
      url: "https://hyperspace.filfox.info/en"
    }
  },
  testnet: !0
}), hC = /* @__PURE__ */ x({
  id: 14,
  name: "Flare Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "flare",
    symbol: "FLR"
  },
  rpcUrls: {
    default: { http: ["https://flare-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Flare Explorer",
      url: "https://flare-explorer.flare.network",
      apiUrl: "https://flare-explorer.flare.network/api"
    }
  }
}), mC = /* @__PURE__ */ x({
  id: 114,
  name: "Coston2",
  nativeCurrency: {
    decimals: 18,
    name: "coston2flare",
    symbol: "C2FLR"
  },
  rpcUrls: {
    default: { http: ["https://coston2-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Coston2 Explorer",
      url: "https://coston2-explorer.flare.network",
      apiUrl: "https://coston2-explorer.flare.network/api"
    }
  },
  testnet: !0
}), bC = /* @__PURE__ */ x({
  id: 646,
  name: "FlowEVM Previewnet",
  nativeCurrency: {
    decimals: 18,
    name: "Flow",
    symbol: "FLOW"
  },
  rpcUrls: {
    default: {
      http: ["https://previewnet.evm.nodes.onflow.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Previewnet Explorer",
      url: "https://previewnet.flowdiver.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6205
    }
  }
}), yC = /* @__PURE__ */ x({
  id: 747,
  name: "FlowEVM Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Flow",
    symbol: "FLOW"
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.evm.nodes.onflow.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Mainnet Explorer",
      url: "https://flowdiver.io"
    }
  }
}), wC = /* @__PURE__ */ x({
  id: 545,
  name: "FlowEVM Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Flow",
    symbol: "FLOW"
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.evm.nodes.onflow.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Flow Diver",
      url: "https://testnet.flowdiver.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 137518
    }
  }
}), gC = /* @__PURE__ */ x({
  id: 9999999,
  name: "Fluence",
  nativeCurrency: { name: "FLT", symbol: "FLT", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.fluence.dev"],
      webSocket: ["wss://ws.mainnet.fluence.dev"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.mainnet.fluence.dev",
      apiUrl: "https://blockscout.mainnet.fluence.dev/api"
    }
  }
}), xC = /* @__PURE__ */ x({
  id: 123420000220,
  name: "Fluence Stage",
  nativeCurrency: { name: "tFLT", symbol: "tFLT", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.stage.fluence.dev"],
      webSocket: ["wss://ws.stage.fluence.dev"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.stage.fluence.dev",
      apiUrl: "https://blockscout.stage.fluence.dev/api"
    }
  },
  testnet: !0
}), CC = /* @__PURE__ */ x({
  id: 52164803,
  name: "Fluence Testnet",
  nativeCurrency: { name: "tFLT", symbol: "tFLT", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.fluence.dev"],
      webSocket: ["wss://ws.testnet.fluence.dev"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.testnet.fluence.dev",
      apiUrl: "https://blockscout.testnet.fluence.dev/api"
    }
  },
  testnet: !0
}), AC = /* @__PURE__ */ x({
  id: 984122,
  name: "Forma",
  network: "forma",
  nativeCurrency: {
    symbol: "TIA",
    name: "TIA",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.forma.art"],
      webSocket: ["wss://ws.forma.art"]
    }
  },
  blockExplorers: {
    default: {
      name: "Forma Explorer",
      url: "https://explorer.forma.art"
    }
  },
  contracts: {
    multicall3: {
      address: "0xd53C6FFB123F7349A32980F87faeD8FfDc9ef079",
      blockCreated: 252705
    }
  }
}), vC = /* @__PURE__ */ x({
  id: 31337,
  name: "Foundry",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
      webSocket: ["ws://127.0.0.1:8545"]
    }
  }
}), $r = 1, EC = /* @__PURE__ */ x({
  ...z,
  id: 252,
  name: "Fraxtal",
  nativeCurrency: { name: "Frax Ether", symbol: "frxETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.frax.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "fraxscan",
      url: "https://fraxscan.com",
      apiUrl: "https://api.fraxscan.com/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [$r]: {
        address: "0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11"
    },
    portal: {
      [$r]: {
        address: "0x36cb65c1967A0Fb0EEE11569C51C2f2aA1Ca6f6D",
        blockCreated: 19135323
      }
    },
    l1StandardBridge: {
      [$r]: {
        address: "0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2",
        blockCreated: 19135323
      }
    }
  },
  sourceId: $r
}), jr = 17e3, kC = /* @__PURE__ */ x({
  ...z,
  id: 2522,
  name: "Fraxtal Testnet",
  nativeCurrency: { name: "Frax Ether", symbol: "frxETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.frax.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "fraxscan testnet",
      url: "https://holesky.fraxscan.com",
      apiUrl: "https://api-holesky.fraxscan.com/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [jr]: {
        address: "0x715EA64DA13F4d0831ece4Ad3E8c1aa013167F32"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11"
    },
    portal: {
      [jr]: {
        address: "0xB9c64BfA498d5b9a8398Ed6f46eb76d90dE5505d",
        blockCreated: 318416
      }
    },
    l1StandardBridge: {
      [jr]: {
        address: "0x0BaafC217162f64930909aD9f2B27125121d6332",
        blockCreated: 318416
      }
    }
  },
  sourceId: jr
}), IC = 1, SC = /* @__PURE__ */ x({
  ...z,
  id: 33979,
  name: "Funki",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-mainnet.funkichain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Funki Mainnet Explorer",
      url: "https://funkiscan.io"
    }
  },
  contracts: {
    ...z.contracts
  },
  sourceId: IC
}), BC = 11155111, TC = x({
  ...z,
  id: 3397901,
  network: "funkiSepolia",
  name: "Funki Sepolia Sandbox",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://funki-testnet.alt.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "Funki Sepolia Sandbox Explorer",
      url: "https://sepolia-sandbox.funkichain.com/"
    }
  },
  testnet: !0,
  contracts: {
    ...z.contracts,
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1620204
    }
  },
  sourceId: BC
}), UC = /* @__PURE__ */ x({
  id: 122,
  name: "Fuse",
  nativeCurrency: { name: "Fuse", symbol: "FUSE", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.fuse.io"] }
  },
  blockExplorers: {
    default: {
      name: "Fuse Explorer",
      url: "https://explorer.fuse.io",
      apiUrl: "https://explorer.fuse.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 16146628
    }
  }
}), PC = /* @__PURE__ */ x({
  id: 123,
  name: "Fuse Sparknet",
  nativeCurrency: { name: "Spark", symbol: "SPARK", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.fusespark.io"] }
  },
  blockExplorers: {
    default: {
      name: "Sparkent Explorer",
      url: "https://explorer.fusespark.io",
      apiUrl: "https://explorer.fusespark.io/api"
    }
  }
}), NC = /* @__PURE__ */ x({
  id: 4689,
  name: "IoTeX",
  nativeCurrency: {
    decimals: 18,
    name: "IoTeX",
    symbol: "IOTX"
  },
  rpcUrls: {
    default: {
      http: ["https://babel-api.mainnet.iotex.io"],
      webSocket: ["wss://babel-api.mainnet.iotex.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "IoTeXScan",
      url: "https://iotexscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 22163670
    }
  }
}), MC = /* @__PURE__ */ x({
  id: 4690,
  name: "IoTeX Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "IoTeX",
    symbol: "IOTX"
  },
  rpcUrls: {
    default: {
      http: ["https://babel-api.testnet.iotex.io"],
      webSocket: ["wss://babel-api.testnet.iotex.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "IoTeXScan",
      url: "https://testnet.iotexscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xb5cecD6894c6f473Ec726A176f1512399A2e355d",
      blockCreated: 24347592
    }
  },
  testnet: !0
}), FC = /* @__PURE__ */ x({
  id: 8899,
  name: "JIBCHAIN L1",
  network: "jbc",
  nativeCurrency: { name: "JBC", symbol: "JBC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-l1.jibchain.net"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://exp-l1.jibchain.net",
      apiUrl: "https://exp-l1.jibchain.net/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xc0C8C486D1466C57Efe13C2bf000d4c56F47CBdC",
      blockCreated: 2299048
    }
  },
  testnet: !1
}), DC = /* @__PURE__ */ x({
  id: 88991,
  name: "Jibchain Testnet",
  nativeCurrency: { name: "tJBC", symbol: "tJBC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.jibchain.net"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://exp.testnet.jibchain.net",
      apiUrl: "https://exp.testnet.jibchain.net/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xa1a858ad9041B4741e620355a3F96B3c78e70ecE",
      blockCreated: 32848
    }
  },
  testnet: !0
}), RC = /* @__PURE__ */ x({
  id: 686,
  name: "Karura",
  network: "karura",
  nativeCurrency: {
    name: "Karura",
    symbol: "KAR",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://eth-rpc-karura.aca-api.network"],
      webSocket: ["wss://eth-rpc-karura.aca-api.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Karura Blockscout",
      url: "https://blockscout.karura.network",
      apiUrl: "https://blockscout.karura.network/api"
    }
  },
  testnet: !1
}), OC = /* @__PURE__ */ x({
  id: 1663,
  name: "Horizen Gobi Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Test ZEN",
    symbol: "tZEN"
  },
  rpcUrls: {
    default: { http: ["https://gobi-testnet.horizenlabs.io/ethv1"] }
  },
  blockExplorers: {
    default: {
      name: "Gobi Explorer",
      url: "https://gobi-explorer.horizen.io"
    }
  },
  contracts: {},
  testnet: !0
}), LC = /* @__PURE__ */ x({
  id: 5,
  name: "Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io",
      apiUrl: "https://api-goerli.etherscan.io/api"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0xfc4AC75C46C914aF5892d6d3eFFcebD7917293F1",
      blockCreated: 10339206
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6507670
    }
  },
  testnet: !0
}), zC = /* @__PURE__ */ x({
  id: 100,
  name: "Gnosis",
  nativeCurrency: {
    decimals: 18,
    name: "Gnosis",
    symbol: "xDAI"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.gnosischain.com"],
      webSocket: ["wss://rpc.gnosischain.com/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "Gnosisscan",
      url: "https://gnosisscan.io",
      apiUrl: "https://api.gnosisscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 21022491
    }
  }
}), _C = /* @__PURE__ */ x({
  id: 10200,
  name: "Gnosis Chiado",
  nativeCurrency: {
    decimals: 18,
    name: "Gnosis",
    symbol: "xDAI"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.chiadochain.net"],
      webSocket: ["wss://rpc.chiadochain.net/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.chiadochain.net",
      apiUrl: "https://blockscout.chiadochain.net/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4967313
    }
  },
  testnet: !0
}), HC = /* @__PURE__ */ x({
  id: 1625,
  name: "Gravity Alpha Mainnet",
  nativeCurrency: { name: "G", symbol: "G", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.gravity.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "Gravity Explorer",
      url: "https://explorer.gravity.xyz",
      apiUrl: "https://explorer.gravity.xyz/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xf8ac4BEB2F75d2cFFb588c63251347fdD629B92c",
      blockCreated: 16851
    }
  }
}), $C = /* @__PURE__ */ x({
  id: 5112,
  name: "Ham",
  nativeCurrency: {
    decimals: 18,
    name: "Ham",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.ham.fun"],
      webSocket: ["wss://rpc.ham.fun"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ham Chain Explorer",
      url: "https://explorer.ham.fun",
      apiUrl: "https://explorer.ham.fun/api/v2"
    }
  }
}), jC = /* @__PURE__ */ x({
  id: 31337,
  name: "Hardhat",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] }
  }
}), qC = /* @__PURE__ */ x({
  id: 16666e5,
  name: "Harmony One",
  nativeCurrency: {
    name: "Harmony",
    symbol: "ONE",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/harmony"] }
  },
  blockExplorers: {
    default: {
      name: "Harmony Explorer",
      url: "https://explorer.harmony.one"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 24185753
    }
  }
}), GC = /* @__PURE__ */ x({
  id: 133,
  name: "HashKey Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "HashKey EcoPoints",
    symbol: "HSK"
  },
  rpcUrls: {
    default: {
      http: ["https://hashkeychain-testnet.alt.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "HashKey Chain Explorer",
      url: "https://hashkeychain-testnet-explorer.alt.technology"
    }
  }
}), KC = /* @__PURE__ */ x({
  id: 11235,
  name: "HAQQ Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Islamic Coin",
    symbol: "ISLM"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.eth.haqq.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "HAQQ Explorer",
      url: "https://explorer.haqq.network",
      apiUrl: "https://explorer.haqq.network/api"
    }
  }
}), QC = /* @__PURE__ */ x({
  id: 54211,
  name: "HAQQ Testedge 2",
  nativeCurrency: {
    decimals: 18,
    name: "Islamic Coin",
    symbol: "ISLMT"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.eth.testedge2.haqq.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "HAQQ Explorer",
      url: "https://explorer.testedge2.haqq.network",
      apiUrl: "https://explorer.testedge2.haqq.network/api"
    }
  }
}), VC = /* @__PURE__ */ x({
  id: 295,
  name: "Hedera Mainnet",
  network: "hedera-mainnet",
  nativeCurrency: {
    symbol: "HBAR",
    name: "HBAR",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.hashio.io/api"]
    }
  },
  blockExplorers: {
    default: {
      name: "Hashscan",
      url: "https://hashscan.io/mainnet"
    }
  },
  testnet: !1
}), WC = /* @__PURE__ */ x({
  id: 296,
  name: "Hedera Testnet",
  network: "hedera-testnet",
  nativeCurrency: {
    symbol: "HBAR",
    name: "HBAR",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.hashio.io/api"]
    }
  },
  blockExplorers: {
    default: {
      name: "Hashscan",
      url: "https://hashscan.io/testnet"
    }
  },
  testnet: !0
}), ZC = /* @__PURE__ */ x({
  id: 297,
  name: "Hedera Previewnet",
  network: "hedera-previewnet",
  nativeCurrency: {
    symbol: "HBAR",
    name: "HBAR",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://previewnet.hashio.io/api"]
    }
  },
  blockExplorers: {
    default: {
      name: "Hashscan",
      url: "https://hashscan.io/previewnet"
    }
  },
  testnet: !0
}), JC = /* @__PURE__ */ x({
  id: 17e3,
  name: "Holesky",
  nativeCurrency: { name: "Holesky Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://ethereum-holesky-rpc.publicnode.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://holesky.etherscan.io",
      apiUrl: "https://api-holesky.etherscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 77
    },
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
      blockCreated: 801613
    },
    ensUniversalResolver: {
      address: "0xa6AC935D4971E3CD133b950aE053bECD16fE7f3b",
      blockCreated: 973484
    }
  },
  testnet: !0
}), XC = /* @__PURE__ */ x({
  id: 13371,
  name: "Immutable zkEVM",
  nativeCurrency: {
    decimals: 18,
    name: "Immutable Coin",
    symbol: "IMX"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.immutable.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Immutable Explorer",
      url: "https://explorer.immutable.com",
      apiUrl: "https://explorer.immutable.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0x236bdA4589e44e6850f5aC6a74BfCa398a86c6c0",
      blockCreated: 4335972
    }
  }
}), YC = /* @__PURE__ */ x({
  id: 13473,
  name: "Immutable zkEVM Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Immutable Coin",
    symbol: "IMX"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.immutable.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Immutable Testnet Explorer",
      url: "https://explorer.testnet.immutable.com/"
    }
  },
  contracts: {
    multicall3: {
      address: "0x2CC787Ed364600B0222361C4188308Fa8E68bA60",
      blockCreated: 5977391
    }
  },
  testnet: !0
}), eA = /* @__PURE__ */ x({
  id: 2525,
  name: "inEVM Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Injective",
    symbol: "INJ"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.rpc.inevm.com/http"] }
  },
  blockExplorers: {
    default: {
      name: "inEVM Explorer",
      url: "https://inevm.calderaexplorer.xyz",
      apiUrl: "https://inevm.calderaexplorer.xyz/api/v2"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 118606
    }
  }
}), tA = /* @__PURE__ */ x({
  id: 8822,
  name: "IOTA EVM",
  network: "iotaevm",
  nativeCurrency: {
    decimals: 18,
    name: "IOTA",
    symbol: "IOTA"
  },
  rpcUrls: {
    default: {
      http: ["https://json-rpc.evm.iotaledger.net"],
      webSocket: ["wss://ws.json-rpc.evm.iotaledger.net"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.evm.iota.org",
      apiUrl: "https://explorer.evm.iota.org/api"
    }
  }
}), nA = /* @__PURE__ */ x({
  id: 1075,
  name: "IOTA EVM Testnet",
  network: "iotaevm-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "IOTA",
    symbol: "IOTA"
  },
  rpcUrls: {
    default: {
      http: ["https://json-rpc.evm.testnet.iotaledger.net"],
      webSocket: ["wss://ws.json-rpc.evm.testnet.iotaledger.net"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.evm.testnet.iotaledger.net",
      apiUrl: "https://explorer.evm.testnet.iotaledger.net/api"
    }
  },
  testnet: !0
}), rA = /* @__PURE__ */ x({
  id: 1802203764,
  name: "Kakarot Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rpc.kakarot.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Kakarot Scan",
      url: "https://sepolia.kakarotscan.org"
    }
  },
  testnet: !0
}), sA = /* @__PURE__ */ x({
  id: 2222,
  name: "Kava EVM",
  network: "kava-mainnet",
  nativeCurrency: {
    name: "Kava",
    symbol: "KAVA",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://evm.kava.io"] }
  },
  blockExplorers: {
    default: {
      name: "Kava EVM Explorer",
      url: "https://kavascan.com",
      apiUrl: "https://kavascan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 3661165
    }
  },
  testnet: !1
}), oA = /* @__PURE__ */ x({
  id: 2221,
  name: "Kava EVM Testnet",
  network: "kava-testnet",
  nativeCurrency: {
    name: "Kava",
    symbol: "KAVA",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://evm.testnet.kava.io"] }
  },
  blockExplorers: {
    default: {
      name: "Kava EVM Testnet Explorer",
      url: "https://testnet.kavascan.com/",
      apiUrl: "https://testnet.kavascan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6",
      blockCreated: 7242179
    }
  },
  testnet: !0
}), aA = /* @__PURE__ */ x({
  id: 321,
  name: "KCC Mainnet",
  network: "KCC Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "KCS",
    symbol: "KCS"
  },
  rpcUrls: {
    default: {
      http: ["https://kcc-rpc.com"]
    }
  },
  blockExplorers: {
    default: { name: "KCC Explorer", url: "https://explorer.kcc.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11760430
    }
  },
  testnet: !1
}), iA = /* @__PURE__ */ x({
  id: 8217,
  name: "Klaytn",
  nativeCurrency: {
    decimals: 18,
    name: "Klaytn",
    symbol: "KLAY"
  },
  rpcUrls: {
    default: { http: ["https://public-en-cypress.klaytn.net"] }
  },
  blockExplorers: {
    default: {
      name: "KlaytnScope",
      url: "https://scope.klaytn.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 96002415
    }
  }
}), cA = /* @__PURE__ */ x({
  id: 1001,
  name: "Klaytn Baobab Testnet",
  network: "klaytn-baobab",
  nativeCurrency: {
    decimals: 18,
    name: "Baobab Klaytn",
    symbol: "KLAY"
  },
  rpcUrls: {
    default: { http: ["https://public-en-baobab.klaytn.net"] }
  },
  blockExplorers: {
    default: {
      name: "KlaytnScope",
      url: "https://baobab.klaytnscope.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 123390593
    }
  },
  testnet: !0
}), lA = /* @__PURE__ */ x({
  id: 8217,
  name: "Kaia",
  nativeCurrency: {
    decimals: 18,
    name: "Kaia",
    symbol: "KAIA"
  },
  rpcUrls: {
    default: { http: ["https://public-en.node.kaia.io"] }
  },
  blockExplorers: {
    default: {
      name: "KaiaScope",
      url: "https://kaiascope.com",
      apiUrl: "https://api-cypress.klaytnscope.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 96002415
    }
  }
}), uA = /* @__PURE__ */ x({
  id: 1001,
  name: "Kairos Testnet",
  network: "kairos",
  nativeCurrency: {
    decimals: 18,
    name: "Kairos KAIA",
    symbol: "KAIA"
  },
  rpcUrls: {
    default: { http: ["https://public-en-kairos.node.kaia.io"] }
  },
  blockExplorers: {
    default: {
      name: "KaiaScope",
      url: "https://kairos.kaiascope.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 123390593
    }
  },
  testnet: !0
}), dA = x({
  id: 701,
  name: "Koi Network",
  nativeCurrency: {
    decimals: 18,
    name: "Koi Network Native Token",
    symbol: "KRING"
  },
  rpcUrls: {
    default: {
      http: ["https://koi-rpc.darwinia.network"],
      webSocket: ["wss://koi-rpc.darwinia.network"]
    }
  },
  blockExplorers: {
    default: { name: "Blockscout", url: "https://koi-scan.darwinia.network" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 180001
    }
  },
  testnet: !0
}), pA = /* @__PURE__ */ x({
  id: 255,
  name: "Kroma",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.kroma.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Kroma Explorer",
      url: "https://blockscout.kroma.network",
      apiUrl: "https://blockscout.kroma.network/api"
    }
  },
  testnet: !1
}), fA = /* @__PURE__ */ x({
  id: 2358,
  name: "Kroma Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.sepolia.kroma.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Kroma Sepolia Explorer",
      url: "https://blockscout.sepolia.kroma.network",
      apiUrl: "https://blockscout.sepolia.kroma.network/api"
    }
  },
  testnet: !0
}), hA = /* @__PURE__ */ x({
  id: 12324,
  name: "L3X Protocol",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-mainnet.l3x.com"],
      webSocket: ["wss://rpc-mainnet.l3x.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "L3X Mainnet Explorer",
      url: "https://explorer.l3x.com",
      apiUrl: "https://explorer.l3x.com/api/v2"
    }
  },
  testnet: !1
}), mA = /* @__PURE__ */ x({
  id: 12325,
  name: "L3X Protocol Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.l3x.com"],
      webSocket: ["wss://rpc-testnet.l3x.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "L3X Testnet Explorer",
      url: "https://explorer-testnet.l3x.com",
      apiUrl: "https://explorer-testnet.l3x.com/api/v2"
    }
  },
  testnet: !0
}), bA = /* @__PURE__ */ x({
  id: 1891,
  name: "LightLink Pegasus Testnet",
  network: "lightlink-pegasus",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://replicator.pegasus.lightlink.io/rpc/v1"]
    }
  },
  blockExplorers: {
    default: {
      name: "LightLink Pegasus Explorer",
      url: "https://pegasus.lightlink.io"
    }
  },
  testnet: !0
}), yA = /* @__PURE__ */ x({
  id: 1890,
  name: "LightLink Phoenix Mainnet",
  network: "lightlink-phoenix",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://replicator.phoenix.lightlink.io/rpc/v1"]
    }
  },
  blockExplorers: {
    default: {
      name: "LightLink Phoenix Explorer",
      url: "https://phoenix.lightlink.io"
    }
  },
  testnet: !1
});
async function wA(e, t) {
  var s, o, a;
  const { account: n = e.account } = t;
  if (!n)
    throw new vn();
  const r = de(n);
  try {
    const { accessList: i, blockNumber: c, blockTag: l, data: u, gas: d, gasPrice: p, maxFeePerGas: f, maxPriorityFeePerGas: m, nonce: h, to: b, value: y, ...w } = (r == null ? void 0 : r.type) === "local" ? await jt(e, t) : t, E = (c ? U(c) : void 0) || l;
    Ht(t);
    const g = (a = (o = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : o.transactionRequest) == null ? void 0 : a.format, A = (g || ft)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...hr(w, { format: g }),
      from: r == null ? void 0 : r.address,
      accessList: i,
      data: u,
      gas: d,
      gasPrice: p,
      maxFeePerGas: f,
      maxPriorityFeePerGas: m,
      nonce: h,
      to: b,
      value: y
    }), { baseFeePerGas: k, gasLimit: I, priorityFeePerGas: P } = await e.request({
      method: "linea_estimateGas",
      params: E ? [A, E] : [A]
    });
    return {
      baseFeePerGas: BigInt(k),
      gasLimit: BigInt(I),
      priorityFeePerGas: BigInt(P)
    };
  } catch (i) {
    throw Nd(i, {
      ...t,
      account: r,
      chain: e.chain
    });
  }
}
const nf = {
  fees: {
    estimateFeesPerGas: dl,
    async maxPriorityFeePerGas({ block: e, client: t, request: n }) {
      const r = await dl({
        block: e,
        client: t,
        multiply: (s) => s,
        request: n,
        type: "eip1559"
      });
      return r != null && r.maxPriorityFeePerGas ? r.maxPriorityFeePerGas : null;
    }
  }
};
async function dl({ client: e, multiply: t, request: n, type: r }) {
  try {
    const s = await wA(e, {
      ...n,
      account: n == null ? void 0 : n.account
    }), { priorityFeePerGas: o } = s, i = t(BigInt(s.baseFeePerGas)) + o;
    return r === "legacy" ? { gasPrice: i } : {
      maxFeePerGas: i,
      maxPriorityFeePerGas: o
    };
  } catch {
    return null;
  }
}
const gA = /* @__PURE__ */ x({
  ...nf,
  id: 59144,
  name: "Linea Mainnet",
  nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.linea.build"],
      webSocket: ["wss://rpc.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://lineascan.build",
      apiUrl: "https://api.lineascan.build/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 42
    }
  },
  testnet: !1
}), xA = /* @__PURE__ */ x({
  id: 59140,
  name: "Linea Goerli Testnet",
  nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.goerli.linea.build"],
      webSocket: ["wss://rpc.goerli.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://goerli.lineascan.build",
      apiUrl: "https://api-goerli.lineascan.build/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 498623
    }
  },
  testnet: !0
}), CA = /* @__PURE__ */ x({
  ...nf,
  id: 59141,
  name: "Linea Sepolia Testnet",
  nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia.linea.build"],
      webSocket: ["wss://rpc.sepolia.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia.lineascan.build",
      apiUrl: "https://api-sepolia.lineascan.build/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 227427
    }
  },
  testnet: !0
}), AA = /* @__PURE__ */ x({
  id: 59140,
  name: "Linea Goerli Testnet",
  nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.goerli.linea.build"],
      webSocket: ["wss://rpc.goerli.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://goerli.lineascan.build",
      apiUrl: "https://goerli.lineascan.build/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 498623
    }
  },
  testnet: !0
}), vA = /* @__PURE__ */ x({
  ...z,
  id: 1135,
  name: "Lisk",
  network: "lisk",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.api.lisk.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.lisk.com",
      apiUrl: "https://blockscout.lisk.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"
    }
  }
}), qr = 11155111, EA = /* @__PURE__ */ x({
  ...z,
  id: 4202,
  network: "lisk-sepolia",
  name: "Lisk Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia-api.lisk.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com",
      apiUrl: "https://sepolia-blockscout.lisk.com/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [qr]: {
        address: "0xA0E35F56C318DE1bD5D9ca6A94Fe7e37C5663348"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11"
    },
    portal: {
      [qr]: {
        address: "0xe3d90F21490686Ec7eF37BE788E02dfC12787264"
      }
    },
    l1StandardBridge: {
      [qr]: {
        address: "0x1Fb30e446eA791cd1f011675E5F3f5311b70faF5"
      }
    }
  },
  testnet: !0,
  sourceId: qr
}), kA = /* @__PURE__ */ x({
  id: 1337,
  name: "Localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] }
  }
}), IA = /* @__PURE__ */ x({
  id: 42,
  network: "lukso",
  name: "LUKSO",
  nativeCurrency: {
    name: "LUKSO",
    symbol: "LYX",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.lukso.network"],
      webSocket: ["wss://ws-rpc.mainnet.lukso.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "LUKSO Mainnet Explorer",
      url: "https://explorer.execution.mainnet.lukso.network",
      apiUrl: "https://api.explorer.execution.mainnet.lukso.network/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 468183
    }
  }
}), SA = /* @__PURE__ */ x({
  id: 4201,
  name: "LUKSO Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "LUKSO Testnet",
    symbol: "LYXt"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.lukso.network"],
      webSocket: ["wss://ws-rpc.testnet.lukso.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "LUKSO Testnet Explorer",
      url: "https://explorer.execution.testnet.lukso.network",
      apiUrl: "https://api.explorer.execution.testnet.lukso.network/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 605348
    }
  },
  testnet: !0
}), BA = /* @__PURE__ */ x({
  id: 721,
  name: "Lycan",
  nativeCurrency: {
    decimals: 18,
    name: "Lycan",
    symbol: "LYC"
  },
  rpcUrls: {
    default: {
      http: [
        "https://rpc.lycanchain.com",
        "https://us-east.lycanchain.com",
        "https://us-west.lycanchain.com",
        "https://eu-north.lycanchain.com",
        "https://eu-west.lycanchain.com",
        "https://asia-southeast.lycanchain.com"
      ],
      webSocket: [
        "wss://rpc.lycanchain.com",
        "wss://us-east.lycanchain.com",
        "wss://us-west.lycanchain.com",
        "wss://eu-north.lycanchain.com",
        "wss://eu-west.lycanchain.com",
        "wss://asia-southeast.lycanchain.com"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Lycan Explorer",
      url: "https://explorer.lycanchain.com"
    }
  }
}), TA = /* @__PURE__ */ x({
  id: 957,
  name: "Lyra Chain",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.lyra.finance"]
    }
  },
  blockExplorers: {
    default: {
      name: "Lyra Explorer",
      url: "https://explorer.lyra.finance",
      apiUrl: "https://explorer.lyra.finance/api/v2"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1935198
    }
  }
}), Ia = /* @__PURE__ */ x({
  id: 1,
  name: "Ethereum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://cloudflare-eth.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://etherscan.io",
      apiUrl: "https://api.etherscan.io/api"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
      blockCreated: 19258213
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
}), UA = /* @__PURE__ */ x({
  id: 595,
  name: "Mandala TC9",
  network: "mandala",
  nativeCurrency: {
    name: "Mandala",
    symbol: "mACA",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://eth-rpc-tc9.aca-staging.network"],
      webSocket: ["wss://eth-rpc-tc9.aca-staging.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Mandala Blockscout",
      url: "https://blockscout.mandala.aca-staging.network",
      apiUrl: "https://blockscout.mandala.aca-staging.network/api"
    }
  },
  testnet: !0
}), PA = /* @__PURE__ */ x({
  id: 169,
  name: "Manta Pacific Mainnet",
  network: "manta",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://pacific-rpc.manta.network/http"] }
  },
  blockExplorers: {
    default: {
      name: "Manta Explorer",
      url: "https://pacific-explorer.manta.network",
      apiUrl: "https://pacific-explorer.manta.network/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 332890
    }
  }
}), NA = /* @__PURE__ */ x({
  id: 3441006,
  name: "Manta Pacific Sepolia Testnet",
  network: "manta-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://pacific-rpc.sepolia-testnet.manta.network/http"]
    }
  },
  blockExplorers: {
    default: {
      name: "Manta Sepolia Testnet Explorer",
      url: "https://pacific-explorer.sepolia-testnet.manta.network",
      apiUrl: "https://pacific-explorer.sepolia-testnet.manta.network/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca54918f7B525C8df894668846506767412b53E3",
      blockCreated: 479584
    }
  },
  testnet: !0
}), MA = /* @__PURE__ */ x({
  id: 3441005,
  name: "Manta Pacific Testnet",
  network: "manta-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://manta-testnet.calderachain.xyz/http"] }
  },
  blockExplorers: {
    default: {
      name: "Manta Testnet Explorer",
      url: "https://pacific-explorer.testnet.manta.network",
      apiUrl: "https://pacific-explorer.testnet.manta.network/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C",
      blockCreated: 419915
    }
  },
  testnet: !0
}), FA = /* @__PURE__ */ x({
  id: 5e3,
  name: "Mantle",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT"
  },
  rpcUrls: {
    default: { http: ["https://rpc.mantle.xyz"] }
  },
  blockExplorers: {
    default: {
      name: "Mantle Explorer",
      url: "https://mantlescan.xyz/",
      apiUrl: "https://api.mantlescan.xyz/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 304717
    }
  }
}), DA = /* @__PURE__ */ x({
  id: 5003,
  name: "Mantle Sepolia Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT"
  },
  rpcUrls: {
    default: { http: ["https://rpc.sepolia.mantle.xyz"] }
  },
  blockExplorers: {
    default: {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.sepolia.mantle.xyz/",
      apiUrl: "https://explorer.sepolia.mantle.xyz/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4584012
    }
  },
  testnet: !0
}), RA = /* @__PURE__ */ x({
  id: 5001,
  name: "Mantle Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT"
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.mantle.xyz"] }
  },
  blockExplorers: {
    default: {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.testnet.mantle.xyz",
      apiUrl: "https://explorer.testnet.mantle.xyz/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 561333
    }
  },
  testnet: !0
}), OA = /* @__PURE__ */ x({
  id: 4200,
  name: "Merlin",
  nativeCurrency: {
    name: "BTC",
    symbol: "BTC",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://rpc.merlinchain.io"] }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://scan.merlinchain.io",
      apiUrl: "https://scan.merlinchain.io/api"
    }
  }
}), LA = /* @__PURE__ */ x({
  id: 571,
  name: "MetaChain Mainnet",
  nativeCurrency: { name: "Metatime Coin", symbol: "MTC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.metatime.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "MetaExplorer",
      url: "https://explorer.metatime.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0000000000000000000000000000000000003001",
      blockCreated: 0
    }
  }
}), zA = /* @__PURE__ */ x({
  id: 1453,
  name: "MetaChain Istanbul",
  nativeCurrency: { name: "Metatime Coin", symbol: "MTC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://istanbul-rpc.metachain.dev"]
    }
  },
  blockExplorers: {
    default: {
      name: "MetaExplorer",
      url: "https://istanbul-explorer.metachain.dev"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0000000000000000000000000000000000003001",
      blockCreated: 0
    }
  },
  testnet: !0
}), Gr = 1, _A = /* @__PURE__ */ x({
  ...z,
  id: 1750,
  name: "Metal L2",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.metall2.com"],
      webSocket: ["wss://rpc.metall2.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.metall2.com",
      apiUrl: "https://explorer.metall2.com/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [Gr]: {
        address: "0x3B1F7aDa0Fcc26B13515af752Dd07fB1CAc11426"
      }
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0
    },
    portal: {
      [Gr]: {
        address: "0x3F37aBdE2C6b5B2ed6F8045787Df1ED1E3753956"
      }
    },
    l1StandardBridge: {
      [Gr]: {
        address: "0x6d0f65D59b55B0FEC5d2d15365154DcADC140BF3"
      }
    }
  },
  sourceId: Gr
}), HA = /* @__PURE__ */ x({
  id: 82,
  name: "Meter",
  nativeCurrency: {
    decimals: 18,
    name: "MTR",
    symbol: "MTR"
  },
  rpcUrls: {
    default: { http: ["https://rpc.meter.io"] }
  },
  blockExplorers: {
    default: {
      name: "MeterScan",
      url: "https://scan.meter.io"
    }
  }
}), $A = /* @__PURE__ */ x({
  id: 83,
  name: "Meter Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MTR",
    symbol: "MTR"
  },
  rpcUrls: {
    default: { http: ["https://rpctest.meter.io"] }
  },
  blockExplorers: {
    default: {
      name: "MeterTestnetScan",
      url: "https://scan-warringstakes.meter.io"
    }
  }
}), jA = /* @__PURE__ */ x({
  id: 1088,
  name: "Metis",
  nativeCurrency: {
    decimals: 18,
    name: "Metis",
    symbol: "METIS"
  },
  rpcUrls: {
    default: { http: ["https://andromeda.metis.io/?owner=1088"] }
  },
  blockExplorers: {
    default: {
      name: "Metis Explorer",
      url: "https://explorer.metis.io",
      apiUrl: "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2338552
    }
  }
}), qA = /* @__PURE__ */ x({
  id: 599,
  name: "Metis Goerli",
  nativeCurrency: {
    decimals: 18,
    name: "Metis Goerli",
    symbol: "METIS"
  },
  rpcUrls: {
    default: { http: ["https://goerli.gateway.metisdevops.link"] }
  },
  blockExplorers: {
    default: {
      name: "Metis Goerli Explorer",
      url: "https://goerli.explorer.metisdevops.link",
      apiUrl: "https://goerli.explorer.metisdevops.link/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1006207
    }
  }
}), GA = /* @__PURE__ */ x({
  id: 7518,
  name: "MEVerse Chain Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "MEVerse",
    symbol: "MEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.meversemainnet.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://www.meversescan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 86881340
    }
  }
}), KA = /* @__PURE__ */ x({
  id: 4759,
  name: "MEVerse Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MEVerse",
    symbol: "MEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.meversetestnet.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://testnet.meversescan.io/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 64371115
    }
  },
  testnet: !0
}), QA = /* @__PURE__ */ x({
  id: 1686,
  name: "Mint Sepolia Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.mintchain.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Mintchain Testnet explorer",
      url: "https://testnet-explorer.mintchain.io"
    }
  },
  testnet: !0
}), Kr = 1, VA = /* @__PURE__ */ x({
  id: 34443,
  name: "Mode Mainnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.mode.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Modescan",
      url: "https://modescan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2465882
    },
    l2OutputOracle: {
      [Kr]: {
        address: "0x4317ba146D4933D889518a3e5E11Fe7a53199b04"
      }
    },
    portal: {
      [Kr]: {
        address: "0x8B34b14c7c7123459Cf3076b8Cb929BE097d0C07"
      }
    },
    l1StandardBridge: {
      [Kr]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21"
      }
    }
  },
  sourceId: Kr
}), Qr = 11155111, WA = /* @__PURE__ */ x({
  ...z,
  id: 919,
  name: "Mode Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.mode.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia.explorer.mode.network",
      apiUrl: "https://sepolia.explorer.mode.network/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [Qr]: {
        address: "0x2634BD65ba27AB63811c74A63118ACb312701Bfa",
        blockCreated: 3778393
      }
    },
    portal: {
      [Qr]: {
        address: "0x320e1580effF37E008F1C92700d1eBa47c1B23fD",
        blockCreated: 3778395
      }
    },
    l1StandardBridge: {
      [Qr]: {
        address: "0xbC5C679879B2965296756CD959C3C739769995E2",
        blockCreated: 3778392
      }
    },
    multicall3: {
      address: "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF",
      blockCreated: 3019007
    }
  },
  testnet: !0,
  sourceId: Qr
}), ZA = /* @__PURE__ */ x({
  id: 1287,
  name: "Moonbase Alpha",
  nativeCurrency: {
    decimals: 18,
    name: "DEV",
    symbol: "DEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.api.moonbase.moonbeam.network"],
      webSocket: ["wss://wss.api.moonbase.moonbeam.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonbase.moonscan.io",
      apiUrl: "https://moonbase.moonscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1850686
    }
  },
  testnet: !0
}), JA = /* @__PURE__ */ x({
  id: 1284,
  name: "Moonbeam",
  nativeCurrency: {
    decimals: 18,
    name: "GLMR",
    symbol: "GLMR"
  },
  rpcUrls: {
    default: {
      http: ["https://moonbeam.public.blastapi.io"],
      webSocket: ["wss://moonbeam.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonscan.io",
      apiUrl: "https://api-moonbeam.moonscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 609002
    }
  },
  testnet: !1
}), XA = /* @__PURE__ */ x({
  id: 1281,
  name: "Moonbeam Development Node",
  nativeCurrency: {
    decimals: 18,
    name: "DEV",
    symbol: "DEV"
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:9944"],
      webSocket: ["wss://127.0.0.1:9944"]
    }
  }
}), YA = /* @__PURE__ */ x({
  id: 1285,
  name: "Moonriver",
  nativeCurrency: {
    decimals: 18,
    name: "MOVR",
    symbol: "MOVR"
  },
  rpcUrls: {
    default: {
      http: ["https://moonriver.public.blastapi.io"],
      webSocket: ["wss://moonriver.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonriver.moonscan.io",
      apiUrl: "https://api-moonriver.moonscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1597904
    }
  },
  testnet: !1
}), ev = /* @__PURE__ */ x({
  id: 2810,
  name: "Morph Holesky",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-quicknode-holesky.morphl2.io"],
      webSocket: ["wss://rpc-quicknode-holesky.morphl2.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Morph Holesky Explorer",
      url: "https://explorer-holesky.morphl2.io",
      apiUrl: "https://explorer-api-holesky.morphl2.io/api?"
    }
  },
  testnet: !0
}), tv = /* @__PURE__ */ x({
  id: 2710,
  name: "Morph Sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.morphl2.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Morph Testnet Explorer",
      url: "https://explorer-testnet.morphl2.io",
      apiUrl: "https://explorer-api-testnet.morphl2.io/api"
    }
  },
  testnet: !0
}), nv = /* @__PURE__ */ x({
  id: 22222,
  name: "Nautilus Mainnet",
  nativeCurrency: { name: "ZBC", symbol: "ZBC", decimals: 9 },
  rpcUrls: {
    default: {
      http: ["https://api.nautilus.nautchain.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "NautScan",
      url: "https://nautscan.com"
    }
  }
}), rv = /* @__PURE__ */ x({
  id: 245022926,
  name: "Neon EVM DevNet",
  nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://devnet.neonevm.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Neonscan",
      url: "https://devnet.neonscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 205206112
    }
  },
  testnet: !0
}), sv = /* @__PURE__ */ x({
  id: 245022934,
  network: "neonMainnet",
  name: "Neon EVM MainNet",
  nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://neon-proxy-mainnet.solana.p2p.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Neonscan",
      url: "https://neonscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 206545524
    }
  },
  testnet: !1
}), ov = /* @__PURE__ */ x({
  id: 4242,
  name: "Nexi",
  nativeCurrency: { name: "Nexi", symbol: "NEXI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.chain.nexi.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "NexiScan",
      url: "https://www.nexiscan.com",
      apiUrl: "https://www.nexiscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E",
      blockCreated: 25770160
    }
  }
}), av = /* @__PURE__ */ x({
  id: 240,
  name: "Nexilix Smart Chain",
  nativeCurrency: {
    decimals: 18,
    name: "Nexilix",
    symbol: "NEXILIX"
  },
  rpcUrls: {
    default: { http: ["https://rpcurl.pos.nexilix.com"] }
  },
  blockExplorers: {
    default: {
      name: "NexilixScan",
      url: "https://scan.nexilix.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244",
      blockCreated: 74448
    }
  }
}), iv = /* @__PURE__ */ x({
  id: 248,
  name: "Oasys",
  nativeCurrency: { name: "Oasys", symbol: "OAS", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.oasys.games"]
    }
  },
  blockExplorers: {
    default: {
      name: "OasysScan",
      url: "https://scan.oasys.games",
      apiUrl: "https://scan.oasys.games/api"
    }
  }
}), cv = /* @__PURE__ */ x({
  id: 4090,
  network: "oasis-testnet",
  name: "Oasis Testnet",
  nativeCurrency: { name: "Fasttoken", symbol: "FTN", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc1.oasis.bahamutchain.com"] }
  },
  blockExplorers: {
    default: {
      name: "Ftnscan",
      url: "https://oasis.ftnscan.com",
      apiUrl: "https://oasis.ftnscan.com/api"
    }
  },
  testnet: !0
}), lv = /* @__PURE__ */ x({
  id: 66,
  name: "OKC",
  nativeCurrency: {
    decimals: 18,
    name: "OKT",
    symbol: "OKT"
  },
  rpcUrls: {
    default: { http: ["https://exchainrpc.okex.org"] }
  },
  blockExplorers: {
    default: {
      name: "oklink",
      url: "https://www.oklink.com/okc"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 10364792
    }
  }
}), _n = 1, uv = /* @__PURE__ */ x({
  ...z,
  id: 10,
  name: "OP Mainnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Optimism Explorer",
      url: "https://optimistic.etherscan.io",
      apiUrl: "https://api-optimistic.etherscan.io/api"
    }
  },
  contracts: {
    ...z.contracts,
    disputeGameFactory: {
      [_n]: {
        address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9"
      }
    },
    l2OutputOracle: {
      [_n]: {
        address: "0xdfe97868233d1aa22e815a266982f2cf17685a27"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 4286263
    },
    portal: {
      [_n]: {
        address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"
      }
    },
    l1StandardBridge: {
      [_n]: {
        address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    }
  },
  sourceId: _n
}), Vr = 5, dv = /* @__PURE__ */ x({
  ...z,
  id: 420,
  name: "Optimism Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://goerli.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io",
      apiUrl: "https://goerli-optimism.etherscan.io/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [Vr]: {
        address: "0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 49461
    },
    portal: {
      [Vr]: {
        address: "0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383"
      }
    },
    l1StandardBridge: {
      [Vr]: {
        address: "0x636Af16bf2f682dD3109e60102b8E1A089FedAa8"
      }
    }
  },
  testnet: !0,
  sourceId: Vr
}), Hn = 11155111, pv = /* @__PURE__ */ x({
  ...z,
  id: 11155420,
  name: "OP Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com",
      apiUrl: "https://optimism-sepolia.blockscout.com/api"
    }
  },
  contracts: {
    ...z.contracts,
    disputeGameFactory: {
      [Hn]: {
        address: "0x05F9613aDB30026FFd634f38e5C4dFd30a197Fa1"
      }
    },
    l2OutputOracle: {
      [Hn]: {
        address: "0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1620204
    },
    portal: {
      [Hn]: {
        address: "0x16Fc5058F25648194471939df75CF27A2fdC48BC"
      }
    },
    l1StandardBridge: {
      [Hn]: {
        address: "0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1"
      }
    }
  },
  testnet: !0,
  sourceId: Hn
}), Wr = 56, fv = /* @__PURE__ */ x({
  id: 204,
  name: "opBNB",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://opbnb-mainnet-rpc.bnbchain.org"] }
  },
  blockExplorers: {
    default: {
      name: "opbnbscan",
      url: "https://mainnet.opbnbscan.com"
    }
  },
  contracts: {
    ...z.contracts,
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 512881
    },
    l2OutputOracle: {
      [Wr]: {
        address: "0x153CAB79f4767E2ff862C94aa49573294B13D169"
      }
    },
    portal: {
      [Wr]: {
        address: "0x1876EA7702C0ad0C6A2ae6036DE7733edfBca519"
      }
    },
    l1StandardBridge: {
      [Wr]: {
        address: "0xF05F0e4362859c3331Cb9395CBC201E3Fa6757Ea"
      }
    }
  },
  sourceId: Wr
}), Zr = 97, hv = /* @__PURE__ */ x({
  id: 5611,
  name: "opBNB Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "tBNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    default: { http: ["https://opbnb-testnet-rpc.bnbchain.org"] }
  },
  blockExplorers: {
    default: {
      name: "opbnbscan",
      url: "https://testnet.opbnbscan.com"
    }
  },
  contracts: {
    ...z.contracts,
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3705108
    },
    l2OutputOracle: {
      [Zr]: {
        address: "0xFf2394Bb843012562f4349C6632a0EcB92fC8810"
      }
    },
    portal: {
      [Zr]: {
        address: "0x4386C8ABf2009aC0c263462Da568DD9d46e52a31"
      }
    },
    l1StandardBridge: {
      [Zr]: {
        address: "0x677311Fd2cCc511Bbc0f581E8d9a07B033D5E840"
      }
    }
  },
  testnet: !0,
  sourceId: Zr
}), mv = /* @__PURE__ */ x({
  id: 9700,
  name: "OORT MainnetDev",
  nativeCurrency: {
    decimals: 18,
    name: "OORT",
    symbol: "OORT"
  },
  rpcUrls: {
    default: { http: ["https://dev-rpc.oortech.com"] }
  },
  blockExplorers: {
    default: {
      name: "OORT MainnetDev Explorer",
      url: "https://dev-scan.oortech.com"
    }
  }
}), bv = /* @__PURE__ */ x({
  id: 41144114,
  name: "Otim Devnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["http://devnet.otim.xyz"]
    }
  },
  contracts: {
    batchInvoker: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    }
  }
}), yv = /* @__PURE__ */ x({
  id: 11297108109,
  name: "Palm",
  nativeCurrency: {
    decimals: 18,
    name: "PALM",
    symbol: "PALM"
  },
  rpcUrls: {
    default: {
      http: ["https://palm-mainnet.public.blastapi.io"],
      webSocket: ["wss://palm-mainnet.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Chainlens",
      url: "https://palm.chainlens.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 15429248
    }
  }
}), wv = /* @__PURE__ */ x({
  id: 11297108099,
  name: "Palm Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "PALM",
    symbol: "PALM"
  },
  rpcUrls: {
    default: {
      http: ["https://palm-mainnet.public.blastapi.io"],
      webSocket: ["wss://palm-mainnet.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Chainlens",
      url: "https://palm.chainlens.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 15429248
    }
  },
  testnet: !0
}), gv = /* @__PURE__ */ x({
  ...Qt,
  id: 1612127,
  name: "PlayFi Albireo Testnet",
  network: "albireo",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://albireo-rpc.playfi.ai"],
      webSocket: ["wss://albireo-rpc-ws.playfi.ai/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "PlayFi Albireo Explorer",
      url: "https://albireo-explorer.playfi.ai"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    }
  },
  testnet: !0
}), Jr = 1, xv = /* @__PURE__ */ x({
  id: 424,
  network: "pgn",
  name: "PGN",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.publicgoods.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "PGN Explorer",
      url: "https://explorer.publicgoods.network",
      apiUrl: "https://explorer.publicgoods.network/api"
    }
  },
  contracts: {
    l2OutputOracle: {
      [Jr]: {
        address: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c"
      }
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3380209
    },
    portal: {
      [Jr]: {
        address: "0xb26Fd985c5959bBB382BAFdD0b879E149e48116c"
      }
    },
    l1StandardBridge: {
      [Jr]: {
        address: "0xD0204B9527C1bA7bD765Fa5CCD9355d38338272b"
      }
    }
  },
  formatters: tc,
  sourceId: Jr
}), Xr = 11155111, Cv = /* @__PURE__ */ x({
  id: 58008,
  network: "pgn-testnet",
  name: "PGN ",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.publicgoods.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "PGN Testnet Explorer",
      url: "https://explorer.sepolia.publicgoods.network",
      apiUrl: "https://explorer.sepolia.publicgoods.network/api"
    }
  },
  contracts: {
    l2OutputOracle: {
      [Xr]: {
        address: "0xD5bAc3152ffC25318F848B3DD5dA6C85171BaEEe"
      }
    },
    portal: {
      [Xr]: {
        address: "0xF04BdD5353Bb0EFF6CA60CfcC78594278eBfE179"
      }
    },
    l1StandardBridge: {
      [Xr]: {
        address: "0xFaE6abCAF30D23e233AC7faF747F2fC3a5a6Bfa3"
      }
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3754925
    }
  },
  formatters: tc,
  sourceId: Xr,
  testnet: !0
}), Av = /* @__PURE__ */ x({
  id: 13381,
  name: "Phoenix Blockchain",
  nativeCurrency: { name: "Phoenix", symbol: "PHX", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.phoenixplorer.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Phoenixplorer",
      url: "https://phoenixplorer.com",
      apiUrl: "https://phoenixplorer.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0x498cF757a575cFF2c2Ed9f532f56Efa797f86442",
      blockCreated: 5620192
    }
  }
}), vv = /* @__PURE__ */ x({
  id: 242,
  name: "Plinga",
  nativeCurrency: { name: "Plinga", symbol: "PLINGA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpcurl.mainnet.plgchain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Plgscan",
      url: "https://www.plgscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0989576160f2e7092908BB9479631b901060b6e4",
      blockCreated: 204489
    }
  }
}), Ev = 11155111, kv = /* @__PURE__ */ x({
  id: 161221135,
  name: "Plume Testnet",
  nativeCurrency: {
    name: "Plume Sepolia Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.plumenetwork.xyz/http"],
      webSocket: ["wss://testnet-rpc.plumenetwork.xyz/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://testnet-explorer.plumenetwork.xyz",
      apiUrl: "https://testnet-explorer.plumenetwork.xyz/api"
    }
  },
  testnet: !0,
  sourceId: Ev
}), Iv = /* @__PURE__ */ x({
  id: 137,
  name: "Polygon",
  nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://polygon-rpc.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://polygonscan.com",
      apiUrl: "https://api.polygonscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  }
}), Sv = /* @__PURE__ */ x({
  id: 80002,
  name: "Polygon Amoy",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-amoy.polygon.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://amoy.polygonscan.com",
      apiUrl: "https://api-amoy.polygonscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 3127388
    }
  },
  testnet: !0
}), Bv = /* @__PURE__ */ x({
  id: 80001,
  name: "Polygon Mumbai",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/polygon_mumbai"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com",
      apiUrl: "https://api-testnet.polygonscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  },
  testnet: !0
}), Tv = /* @__PURE__ */ x({
  id: 1101,
  name: "Polygon zkEVM",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://zkevm-rpc.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://zkevm.polygonscan.com",
      apiUrl: "https://api-zkevm.polygonscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 57746
    }
  }
}), Uv = /* @__PURE__ */ x({
  id: 2442,
  name: "Polygon zkEVM Cardona",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.cardona.zkevm-rpc.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://cardona-zkevm.polygonscan.com",
      apiUrl: "https://cardona-zkevm.polygonscan.com/api"
    }
  },
  testnet: !0,
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 114091
    }
  }
}), Pv = /* @__PURE__ */ x({
  id: 1442,
  name: "Polygon zkEVM Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.public.zkevm-test.net"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://testnet-zkevm.polygonscan.com",
      apiUrl: "https://testnet-zkevm.polygonscan.com/api"
    }
  },
  testnet: !0,
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 525686
    }
  }
}), Nv = /* @__PURE__ */ x({
  id: 369,
  name: "PulseChain",
  nativeCurrency: { name: "Pulse", symbol: "PLS", decimals: 18 },
  testnet: !1,
  rpcUrls: {
    default: {
      http: ["https://rpc.pulsechain.com"],
      webSocket: ["wss://ws.pulsechain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PulseScan",
      url: "https://scan.pulsechain.com",
      apiUrl: "https://api.scan.pulsechain.com/api"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
}), Mv = /* @__PURE__ */ x({
  id: 943,
  name: "PulseChain V4",
  testnet: !0,
  nativeCurrency: { name: "V4 Pulse", symbol: "v4PLS", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.v4.testnet.pulsechain.com"],
      webSocket: ["wss://ws.v4.testnet.pulsechain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PulseScan",
      url: "https://scan.v4.testnet.pulsechain.com",
      apiUrl: "https://scan.v4.testnet.pulsechain.com/api"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
}), Fv = /* @__PURE__ */ x({
  id: 35441,
  name: "Q Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Q",
    symbol: "Q"
  },
  rpcUrls: {
    default: { http: ["https://rpc.q.org"] }
  },
  blockExplorers: {
    default: {
      name: "Q Mainnet Explorer",
      url: "https://explorer.q.org",
      apiUrl: "https://explorer.q.org/api"
    }
  }
}), Dv = /* @__PURE__ */ x({
  id: 35443,
  name: "Q Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Q",
    symbol: "Q"
  },
  rpcUrls: {
    default: { http: ["https://rpc.qtestnet.org"] }
  },
  blockExplorers: {
    default: {
      name: "Q Testnet Explorer",
      url: "https://explorer.qtestnet.org",
      apiUrl: "https://explorer.qtestnet.org/api"
    }
  },
  testnet: !0
}), Rv = /* @__PURE__ */ x({
  id: 111188,
  name: "re.al",
  nativeCurrency: {
    name: "reETH",
    decimals: 18,
    symbol: "reETH"
  },
  rpcUrls: {
    default: { http: ["https://real.drpc.org"] }
  },
  blockExplorers: {
    default: {
      name: "re.al Explorer",
      url: "https://explorer.re.al",
      apiUrl: "https://explorer.re.al/api/v2"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 695
    }
  }
}), Ov = /* @__PURE__ */ x({
  id: 153,
  name: "Redbelly Network Testnet",
  nativeCurrency: {
    name: "Redbelly Native Coin",
    symbol: "RBNT",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://governors.testnet.redbelly.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ethernal",
      url: "https://explorer.testnet.redbelly.network",
      apiUrl: "https://ethernal.fly.dev/api"
    }
  },
  testnet: !0
}), Lv = x({
  id: 690,
  name: "Redstone",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.redstonechain.com"],
      webSocket: ["wss://rpc.redstonechain.com"]
    }
  },
  blockExplorers: {
    default: { name: "Explorer", url: "	https://explorer.redstone.xyz" }
  }
}), zv = /* @__PURE__ */ x({
  id: 1729,
  name: "Reya Network",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
  rpcUrls: {
    default: {
      http: ["https://rpc.reya.network"],
      webSocket: ["wss://ws.reya.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Reya Network Explorer",
      url: "https://explorer.reya.network"
    }
  },
  testnet: !1
}), _v = /* @__PURE__ */ x({
  id: 570,
  name: "Rollux Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.rollux.com"],
      webSocket: ["wss://rpc.rollux.com/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "RolluxExplorer",
      url: "https://explorer.rollux.com",
      apiUrl: "https://explorer.rollux.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 119222
    }
  }
}), Hv = /* @__PURE__ */ x({
  id: 57e3,
  name: "Rollux Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-tanenbaum.rollux.com/"],
      webSocket: ["wss://rpc-tanenbaum.rollux.com/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "RolluxTestnetExplorer",
      url: "https://rollux.tanenbaum.io",
      apiUrl: "https://rollux.tanenbaum.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1813675
    }
  }
}), $v = /* @__PURE__ */ x({
  id: 2020,
  name: "Ronin",
  nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.roninchain.com/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ronin Explorer",
      url: "https://app.roninchain.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 26023535
    }
  }
}), jv = /* @__PURE__ */ x({
  id: 7668,
  name: "The Root Network",
  nativeCurrency: {
    decimals: 18,
    name: "XRP",
    symbol: "XRP"
  },
  rpcUrls: {
    default: {
      http: ["https://root.rootnet.live/archive"],
      webSocket: ["wss://root.rootnet.live/archive/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Rootscan",
      url: "https://rootscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xc9C2E2429AeC354916c476B30d729deDdC94988d",
      blockCreated: 9218338
    }
  }
}), qv = /* @__PURE__ */ x({
  id: 7672,
  name: "The Root Network - Porcini",
  nativeCurrency: {
    decimals: 18,
    name: "XRP",
    symbol: "XRP"
  },
  rpcUrls: {
    default: {
      http: ["https://porcini.rootnet.app/archive"],
      webSocket: ["wss://porcini.rootnet.app/archive/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Rootscan",
      url: "https://porcini.rootscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xc9C2E2429AeC354916c476B30d729deDdC94988d",
      blockCreated: 10555692
    }
  },
  testnet: !0
}), Gv = /* @__PURE__ */ x({
  id: 30,
  name: "Rootstock Mainnet",
  network: "rootstock",
  nativeCurrency: {
    decimals: 18,
    name: "Rootstock Bitcoin",
    symbol: "RBTC"
  },
  rpcUrls: {
    default: { http: ["https://public-node.rsk.co"] }
  },
  blockExplorers: {
    default: {
      name: "RSK Explorer",
      url: "https://explorer.rsk.co"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4249540
    }
  }
}), Kv = /* @__PURE__ */ x({
  id: 31,
  name: "Rootstock Testnet",
  network: "rootstock",
  nativeCurrency: {
    decimals: 18,
    name: "Rootstock Bitcoin",
    symbol: "tRBTC"
  },
  rpcUrls: {
    default: { http: ["https://public-node.testnet.rsk.co"] }
  },
  blockExplorers: {
    default: {
      name: "RSK Explorer",
      url: "https://explorer.testnet.rootstock.io"
    }
  },
  testnet: !0
}), Yr = 1, Qv = /* @__PURE__ */ x({
  ...z,
  id: 12553,
  name: "RSS3 VSL Mainnet",
  nativeCurrency: { name: "RSS3", symbol: "RSS3", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.rss3.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "RSS3 VSL Mainnet Scan",
      url: "https://scan.rss3.io",
      apiUrl: "https://scan.rss3.io/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [Yr]: {
        address: "0xE6f24d2C32B3109B18ed33cF08eFb490b1e09C10"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14193
    },
    portal: {
      [Yr]: {
        address: "0x6A12432491bbbE8d3babf75F759766774C778Db4",
        blockCreated: 19387057
      }
    },
    l1StandardBridge: {
      [Yr]: {
        address: "0x4cbab69108Aa72151EDa5A3c164eA86845f18438"
      }
    }
  },
  sourceId: Yr
}), es = 11155111, Vv = /* @__PURE__ */ x({
  ...z,
  id: 2331,
  name: "RSS3 VSL Sepolia Testnet",
  nativeCurrency: { name: "RSS3", symbol: "RSS3", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.rss3.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "RSS3 VSL Sepolia Testnet Scan",
      url: "https://scan.testnet.rss3.io",
      apiUrl: "https://scan.testnet.rss3.io/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [es]: {
        address: "0xDb5c46C3Eaa6Ed6aE8b2379785DF7dd029C0dC81"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 55697
    },
    portal: {
      [es]: {
        address: "0xcBD77E8E1E7F06B25baDe67142cdE82652Da7b57",
        blockCreated: 5345035
      }
    },
    l1StandardBridge: {
      [es]: {
        address: "0xdDD29bb63B0839FB1cE0eE439Ff027738595D07B"
      }
    }
  },
  testnet: !0,
  sourceId: es
}), Wv = /* @__PURE__ */ x({
  id: 2021,
  name: "Saigon Testnet",
  nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://saigon-testnet.roninchain.com/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Saigon Explorer",
      url: "https://saigon-app.roninchain.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 18736871
    }
  },
  testnet: !0
}), Zv = /* @__PURE__ */ x({
  id: 23294,
  name: "Oasis Sapphire",
  network: "sapphire",
  nativeCurrency: { name: "Sapphire Rose", symbol: "ROSE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sapphire.oasis.io"],
      webSocket: ["wss://sapphire.oasis.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Oasis Explorer",
      url: "https://explorer.oasis.io/mainnet/sapphire"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 734531
    }
  }
}), Jv = /* @__PURE__ */ x({
  id: 23295,
  name: "Oasis Sapphire Testnet",
  network: "sapphire-testnet",
  nativeCurrency: { name: "Sapphire Test Rose", symbol: "TEST", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.sapphire.oasis.dev"],
      webSocket: ["wss://testnet.sapphire.oasis.dev/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Oasis Explorer",
      url: "https://explorer.oasis.io/testnet/sapphire"
    }
  },
  testnet: !0
}), Xv = /* @__PURE__ */ x({
  id: 3109,
  name: "SatoshiVM Alpha Mainnet",
  nativeCurrency: {
    name: "BTC",
    symbol: "BTC",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://alpha-rpc-node-http.svmscan.io"] }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://svmscan.io",
      apiUrl: "https://svmscan.io/api"
    }
  }
}), Yv = /* @__PURE__ */ x({
  id: 3110,
  name: "SatoshiVM Testnet",
  nativeCurrency: {
    name: "BTC",
    symbol: "BTC",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://test-rpc-node-http.svmscan.io"] }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://testnet.svmscan.io",
      apiUrl: "https://testnet.svmscan.io/api"
    }
  },
  testnet: !0
}), e6 = /* @__PURE__ */ x({
  id: 534352,
  name: "Scroll",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.scroll.io"],
      webSocket: ["wss://wss-rpc.scroll.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Scrollscan",
      url: "https://scrollscan.com",
      apiUrl: "https://api.scrollscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14
    }
  },
  testnet: !1
}), t6 = /* @__PURE__ */ x({
  id: 534351,
  name: "Scroll Sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rpc.scroll.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Scrollscan",
      url: "https://sepolia.scrollscan.com",
      apiUrl: "https://api-sepolia.scrollscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 9473
    }
  },
  testnet: !0
}), n6 = /* @__PURE__ */ x({
  id: 1329,
  name: "Sei Network",
  nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evm-rpc.sei-apis.com/"],
      webSocket: ["wss://evm-ws.sei-apis.com/"]
    }
  },
  blockExplorers: {
    default: {
      name: "Seitrace",
      url: "https://seitrace.com",
      apiUrl: "https://seitrace.com/pacific-1/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11"
    }
  }
}), r6 = /* @__PURE__ */ x({
  id: 713715,
  name: "Sei Devnet",
  nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evm-rpc-arctic-1.sei-apis.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Seitrace",
      url: "https://seitrace.com"
    }
  },
  testnet: !0
}), s6 = /* @__PURE__ */ x({
  id: 1328,
  name: "Sei Testnet",
  nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evm-rpc-testnet.sei-apis.com"],
      webSocket: ["wss://evm-ws-testnet.sei-apis.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Seitrace",
      url: "https://seitrace.com"
    }
  },
  testnet: !0
}), o6 = /* @__PURE__ */ x({
  id: 11155111,
  name: "Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io",
      apiUrl: "https://api-sepolia.etherscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 751532
    },
    ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    ensUniversalResolver: {
      address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
      blockCreated: 5317080
    }
  },
  testnet: !0
}), a6 = 11155111, i6 = /* @__PURE__ */ x({
  ...z,
  id: 11011,
  name: "Shape Sepolia Testnet",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.shape.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer-sepolia.shape.network/",
      apiUrl: "https://explorer-sepolia.shape.network/api/v2"
    }
  },
  contracts: {
    ...z.contracts,
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1
    }
  },
  testnet: !0,
  sourceId: a6
}), c6 = /* @__PURE__ */ x({
  id: 148,
  name: "Shimmer",
  network: "shimmer",
  nativeCurrency: {
    decimals: 18,
    name: "Shimmer",
    symbol: "SMR"
  },
  rpcUrls: {
    default: {
      http: ["https://json-rpc.evm.shimmer.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Shimmer Network Explorer",
      url: "https://explorer.evm.shimmer.network",
      apiUrl: "https://explorer.evm.shimmer.network/api"
    }
  }
}), l6 = /* @__PURE__ */ x({
  id: 1073,
  name: "Shimmer Testnet",
  network: "shimmer-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Shimmer",
    symbol: "SMR"
  },
  rpcUrls: {
    default: {
      http: ["https://json-rpc.evm.testnet.shimmer.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Shimmer Network Explorer",
      url: "https://explorer.evm.testnet.shimmer.network",
      apiUrl: "https://explorer.evm.testnet.shimmer.network/api"
    }
  },
  testnet: !0
}), u6 = /* @__PURE__ */ x({
  id: 391845894,
  name: "SKALE | Block Brawlers",
  nativeCurrency: { name: "BRAWL", symbol: "BRAWL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), d6 = /* @__PURE__ */ x({
  id: 1564830818,
  name: "SKALE | Calypso NFT Hub",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3107626
    }
  }
}), p6 = /* @__PURE__ */ x({
  id: 974399131,
  name: "SKALE Calypso Testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.skalenodes.com/v1/giant-half-dual-testnet"],
      webSocket: ["wss://testnet.skalenodes.com/v1/ws/giant-half-dual-testnet"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 103220
    }
  },
  testnet: !0
}), f6 = /* @__PURE__ */ x({
  id: 1026062157,
  name: "SKALE | CryptoBlades",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), h6 = /* @__PURE__ */ x({
  id: 1032942172,
  name: "SKALE | Crypto Colosseum",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), m6 = /* @__PURE__ */ x({
  id: 2046399126,
  name: "SKALE | Europa Liquidity Hub",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3113495
    }
  }
}), b6 = /* @__PURE__ */ x({
  id: 1444673419,
  name: "SKALE Europa Testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.skalenodes.com/v1/juicy-low-small-testnet"],
      webSocket: ["wss://testnet.skalenodes.com/v1/ws/juicy-low-small-testnet"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 110858
    }
  },
  testnet: !0
}), y6 = /* @__PURE__ */ x({
  id: 2139927552,
  name: "SKALE | Exorde",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), w6 = /* @__PURE__ */ x({
  id: 1273227453,
  name: "SKALE | Human Protocol",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://wan-red-ain.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), g6 = /* @__PURE__ */ x({
  id: 1482601649,
  name: "SKALE | Nebula Gaming Hub",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2372986
    }
  }
}), x6 = /* @__PURE__ */ x({
  id: 37084624,
  name: "SKALE Nebula Testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet"],
      webSocket: ["wss://testnet.skalenodes.com/v1/ws/lanky-ill-funny-testnet"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 105141
    }
  },
  testnet: !0
}), C6 = /* @__PURE__ */ x({
  id: 278611351,
  name: "SKALE | Razor Network",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), A6 = /* @__PURE__ */ x({
  id: 1350216234,
  name: "SKALE | Titan Community Hub",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2076458
    }
  }
}), v6 = /* @__PURE__ */ x({
  id: 1020352220,
  name: "SKALE Titan Hub",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.skalenodes.com/v1/aware-fake-trim-testnet"],
      webSocket: ["wss://testnet.skalenodes.com/v1/ws/aware-fake-trim-testnet"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 104072
    }
  },
  testnet: !0
}), E6 = /* @__PURE__ */ x({
  id: 984123,
  name: "Forma Sketchpad",
  network: "sketchpad",
  nativeCurrency: {
    symbol: "TIA",
    name: "TIA",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.sketchpad-1.forma.art"],
      webSocket: ["wss://ws.sketchpad-1.forma.art"]
    }
  },
  blockExplorers: {
    default: {
      name: "Sketchpad Explorer",
      url: "https://explorer.sketchpad-1.forma.art"
    }
  },
  testnet: !0
}), k6 = x({
  id: 1946,
  name: "Soneium Minato",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.minato.soneium.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Minato Explorer",
      url: "https://explorer-testnet.soneium.org",
      apiUrl: "https://explorer-testnet.soneium.org/api/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1
    }
  },
  testnet: !0
}), I6 = /* @__PURE__ */ x({
  id: 19,
  name: "Songbird Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "songbird",
    symbol: "SGB"
  },
  rpcUrls: {
    default: { http: ["https://songbird-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Songbird Explorer",
      url: "https://songbird-explorer.flare.network",
      apiUrl: "https://songbird-explorer.flare.network/api"
    }
  }
}), S6 = /* @__PURE__ */ x({
  id: 16,
  name: "Coston",
  nativeCurrency: {
    decimals: 18,
    name: "costonflare",
    symbol: "CFLR"
  },
  rpcUrls: {
    default: { http: ["https://coston-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Coston Explorer",
      url: "https://coston-explorer.flare.network",
      apiUrl: "https://coston-explorer.flare.network/api"
    }
  },
  testnet: !0
}), B6 = /* @__PURE__ */ x({
  ...Qt,
  id: 531050104,
  name: "Sophon Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Sophon",
    symbol: "SOPH"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.sophon.xyz"],
      webSocket: ["wss://rpc.testnet.sophon.xyz/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Sophon Block Explorer",
      url: "https://explorer.testnet.sophon.xyz"
    }
  },
  contracts: {
    multicall3: {
      address: "0x83c04d112adedA2C6D9037bb6ecb42E7f0b108Af",
      blockCreated: 15642
    }
  },
  testnet: !0
}), T6 = /* @__PURE__ */ x({
  id: 88882,
  name: "Chiliz Spicy Testnet",
  network: "chiliz-spicy-Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "CHZ",
    symbol: "CHZ"
  },
  rpcUrls: {
    default: {
      http: [
        "https://spicy-rpc.chiliz.com",
        "https://chiliz-spicy-rpc.publicnode.com"
      ],
      webSocket: [
        "wss://spicy-rpc-ws.chiliz.com",
        "wss://chiliz-spicy-rpc.publicnode.com"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Chiliz Explorer",
      url: "http://spicy-explorer.chiliz.com",
      apiUrl: "http://spicy-explorer.chiliz.com/api"
    }
  },
  testnet: !0
}), U6 = /* @__PURE__ */ x({
  id: 8082,
  name: "Shardeum Sphinx",
  nativeCurrency: { name: "SHARDEUM", symbol: "SHM", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sphinx.shardeum.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Shardeum Explorer",
      url: "https://explorer-sphinx.shardeum.org"
    }
  },
  testnet: !0
}), P6 = /* @__PURE__ */ x({
  id: 109,
  name: "Shibarium",
  network: "shibarium",
  nativeCurrency: { name: "Bone", symbol: "BONE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.shibrpc.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://shibariumscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0x864Bf681ADD6052395188A89101A1B37d3B4C961",
      blockCreated: 265900
    }
  }
}), N6 = /* @__PURE__ */ x({
  id: 157,
  name: "Puppynet Shibarium",
  nativeCurrency: {
    decimals: 18,
    name: "Bone",
    symbol: "BONE"
  },
  rpcUrls: {
    default: { http: ["https://puppynet.shibrpc.com"] }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://puppyscan.shib.io",
      apiUrl: "https://puppyscan.shib.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xA4029b74FBA366c926eDFA7Dd10B21C621170a4c",
      blockCreated: 3035769
    }
  },
  testnet: !0
}), M6 = /* @__PURE__ */ x({
  id: 1513,
  name: "Story Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "IP",
    symbol: "IP"
  },
  rpcUrls: {
    default: { http: ["https://testnet.storyrpc.io"] }
  },
  blockExplorers: {
    default: {
      name: "Story Testnet Explorer",
      url: "https://testnet.storyscan.xyz"
    }
  },
  testnet: !0
}), F6 = /* @__PURE__ */ x({
  id: 105105,
  name: "Stratis Mainnet",
  network: "stratis",
  nativeCurrency: {
    name: "Stratis",
    symbol: "STRAX",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.stratisevm.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Stratis Explorer",
      url: "https://explorer.stratisevm.com"
    }
  }
}), D6 = /* @__PURE__ */ x({
  id: 57,
  name: "Syscoin Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.syscoin.org"],
      webSocket: ["wss://rpc.syscoin.org/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "SyscoinExplorer",
      url: "https://explorer.syscoin.org",
      apiUrl: "https://explorer.syscoin.org/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 287139
    }
  }
}), R6 = /* @__PURE__ */ x({
  id: 5700,
  name: "Syscoin Tanenbaum Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.tanenbaum.io"],
      webSocket: ["wss://rpc.tanenbaum.io/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "SyscoinTestnetExplorer",
      url: "https://tanenbaum.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 271288
    }
  }
}), O6 = /* @__PURE__ */ x({
  id: 841,
  name: "Taraxa Mainnet",
  nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.taraxa.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Taraxa Explorer",
      url: "https://explorer.mainnet.taraxa.io"
    }
  }
}), L6 = /* @__PURE__ */ x({
  id: 167e3,
  name: "Taiko Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.taiko.xyz"],
      webSocket: ["wss://ws.mainnet.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "Taikoscan",
      url: "https://taikoscan.io",
      apiUrl: "https://api.taikoscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D"
    }
  }
}), z6 = /* @__PURE__ */ x({
  id: 167009,
  name: "Taiko Hekla L2",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.hekla.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "Taikoscan",
      url: "https://hekla.taikoscan.network"
    }
  },
  testnet: !0
}), _6 = /* @__PURE__ */ x({
  id: 167007,
  name: "Taiko Jolnir (Alpha-5 Testnet)",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.jolnir.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer.jolnir.taiko.xyz"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 732706
    }
  },
  testnet: !0
}), H6 = /* @__PURE__ */ x({
  id: 167008,
  name: "Taiko Katla (Alpha-6 Testnet)",
  network: "tko-katla",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.katla.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer.katla.taiko.xyz"
    }
  }
}), $6 = /* @__PURE__ */ x({
  id: 167005,
  name: "Taiko (Alpha-3 Testnet)",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.test.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer.test.taiko.xyz"
    }
  }
}), j6 = /* @__PURE__ */ x({
  id: 842,
  name: "Taraxa Testnet",
  nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.taraxa.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Taraxa Explorer",
      url: "https://explorer.testnet.taraxa.io"
    }
  },
  testnet: !0
}), q6 = /* @__PURE__ */ x({
  id: 2017,
  name: "Telcoin Adiri Testnet",
  nativeCurrency: { name: "Telcoin", symbol: "TEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.telcoin.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "telscan",
      url: "https://telscan.io"
    }
  },
  testnet: !0
}), G6 = /* @__PURE__ */ x({
  id: 40,
  name: "Telos",
  nativeCurrency: {
    decimals: 18,
    name: "Telos",
    symbol: "TLOS"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.telos.net/evm"] }
  },
  blockExplorers: {
    default: {
      name: "Teloscan",
      url: "https://www.teloscan.io/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 246530709
    }
  }
}), K6 = /* @__PURE__ */ x({
  id: 41,
  name: "Telos",
  nativeCurrency: {
    decimals: 18,
    name: "Telos",
    symbol: "TLOS"
  },
  rpcUrls: {
    default: { http: ["https://testnet.telos.net/evm"] }
  },
  blockExplorers: {
    default: {
      name: "Teloscan (testnet)",
      url: "https://testnet.teloscan.io/"
    }
  },
  testnet: !0
}), Q6 = /* @__PURE__ */ x({
  id: 1559,
  name: "Tenet",
  network: "tenet-mainnet",
  nativeCurrency: {
    name: "TENET",
    symbol: "TENET",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://rpc.tenet.org"] }
  },
  blockExplorers: {
    default: {
      name: "TenetScan Mainnet",
      url: "https://tenetscan.io",
      apiUrl: "https://tenetscan.io/api"
    }
  },
  testnet: !1
}), V6 = /* @__PURE__ */ x({
  id: 7,
  name: "ThaiChain",
  nativeCurrency: { name: "TCH", symbol: "TCH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.thaichain.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://exp.thaichain.org",
      apiUrl: "https://exp.thaichain.org/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0DaD6130e832c21719C5CE3bae93454E16A84826",
      blockCreated: 4806386
    }
  },
  testnet: !1
}), W6 = /* @__PURE__ */ x({
  id: 997,
  name: "5ireChain Thunder Testnet",
  nativeCurrency: { name: "5ire Token", symbol: "5IRE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.5ire.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "5ireChain Explorer",
      url: "https://explorer.5ire.network"
    }
  },
  testnet: !0
}), Z6 = /* @__PURE__ */ x({
  id: 728126428,
  name: "Tron",
  nativeCurrency: { name: "TRON", symbol: "TRX", decimals: 6 },
  rpcUrls: {
    default: {
      http: ["https://api.trongrid.io/jsonrpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Tronscan",
      url: "https://tronscan.org",
      apiUrl: "https://apilist.tronscanapi.com/api"
    }
  }
}), J6 = /* @__PURE__ */ x({
  id: 18233,
  name: "Unreal",
  nativeCurrency: {
    name: "reETH",
    decimals: 18,
    symbol: "reETH"
  },
  rpcUrls: {
    default: { http: ["https://rpc.unreal-orbit.gelato.digital"] }
  },
  blockExplorers: {
    default: {
      name: "Unreal Explorer",
      url: "https://unreal.blockscout.com",
      apiUrl: "https://unreal.blockscout.com/api/v2"
    }
  },
  testnet: !0,
  contracts: {
    multicall3: {
      address: "0x8b6B0e60D8CD84898Ea8b981065A12F876eA5677",
      blockCreated: 1745
    }
  }
}), X6 = /* @__PURE__ */ x({
  id: 100009,
  name: "Vechain",
  nativeCurrency: { name: "VeChain", symbol: "VET", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.vechain.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Vechain Explorer",
      url: "https://explore.vechain.org"
    },
    vechainStats: {
      name: "Vechain Stats",
      url: "https://vechainstats.com"
    }
  }
}), Y6 = /* @__PURE__ */ x({
  id: 888,
  name: "Wanchain",
  nativeCurrency: { name: "WANCHAIN", symbol: "WAN", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://gwan-ssl.wandevs.org:56891",
        "https://gwan2-ssl.wandevs.org"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "WanScan",
      url: "https://wanscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB",
      blockCreated: 25312390
    }
  }
}), eE = /* @__PURE__ */ x({
  id: 999,
  name: "Wanchain Testnet",
  nativeCurrency: { name: "WANCHAIN", symbol: "WANt", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://gwan-ssl.wandevs.org:46891"]
    }
  },
  blockExplorers: {
    default: {
      name: "WanScanTest",
      url: "https://wanscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0x11c89bF4496c39FB80535Ffb4c92715839CC5324",
      blockCreated: 24743448
    }
  },
  testnet: !0
}), tE = /* @__PURE__ */ x({
  id: 1111,
  name: "WEMIX",
  network: "wemix-mainnet",
  nativeCurrency: { name: "WEMIX", symbol: "WEMIX", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://api.wemix.com"] }
  },
  blockExplorers: {
    default: {
      name: "wemixExplorer",
      url: "https://explorer.wemix.com"
    }
  }
}), nE = /* @__PURE__ */ x({
  id: 1112,
  name: "WEMIX Testnet",
  network: "wemix-testnet",
  nativeCurrency: { name: "WEMIX", symbol: "tWEMIX", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://api.test.wemix.com"] }
  },
  blockExplorers: {
    default: {
      name: "wemixExplorer",
      url: "https://testnet.wemixscan.com",
      apiUrl: "https://testnet.wemixscan.com/api"
    }
  },
  testnet: !0
}), pl = /* @__PURE__ */ x({
  id: 195,
  name: "X1 Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "OKB",
    symbol: "OKB"
  },
  rpcUrls: {
    default: { http: ["https://xlayertestrpc.okx.com"] }
  },
  blockExplorers: {
    default: {
      name: "OKLink",
      url: "https://www.oklink.com/xlayer-test"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 624344
    }
  },
  testnet: !0
}), rE = /* @__PURE__ */ x({
  id: 196,
  name: "X Layer Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "OKB",
    symbol: "OKB"
  },
  rpcUrls: {
    default: { http: ["https://rpc.xlayer.tech"] }
  },
  blockExplorers: {
    default: {
      name: "OKLink",
      url: "https://www.oklink.com/xlayer"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 47416
    }
  }
}), sE = /* @__PURE__ */ x({
  id: 660279,
  name: "Xai Mainnet",
  nativeCurrency: { name: "Xai", symbol: "XAI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://xai-chain.net/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.xai-chain.net"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 222549
    }
  },
  testnet: !1
}), oE = /* @__PURE__ */ x({
  id: 37714555429,
  name: "Xai Testnet",
  nativeCurrency: { name: "sXai", symbol: "sXAI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet-v2.xai-chain.net/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://testnet-explorer-v2.xai-chain.net"
    }
  },
  testnet: !0
}), aE = /* @__PURE__ */ x({
  id: 50,
  name: "XinFin Network",
  nativeCurrency: {
    decimals: 18,
    name: "XDC",
    symbol: "XDC"
  },
  rpcUrls: {
    default: { http: ["https://rpc.xinfin.network"] }
  },
  blockExplorers: {
    default: {
      name: "Blocksscan",
      url: "https://xdc.blocksscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 71542788
    }
  }
}), iE = /* @__PURE__ */ x({
  id: 51,
  name: "Apothem Network",
  nativeCurrency: {
    decimals: 18,
    name: "TXDC",
    symbol: "TXDC"
  },
  rpcUrls: {
    default: { http: ["https://erpc.apothem.network"] }
  },
  blockExplorers: {
    default: {
      name: "Blocksscan",
      url: "https://apothem.blocksscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 59765389
    }
  }
}), cE = /* @__PURE__ */ x({
  id: 2730,
  name: "XR Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "tXR",
    symbol: "tXR"
  },
  rpcUrls: {
    default: { http: ["https://xr-sepolia-testnet.rpc.caldera.xyz/http"] }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://xr-sepolia-testnet.explorer.caldera.xyz"
    }
  },
  testnet: !0
}), lE = /* @__PURE__ */ x({
  id: 50005,
  name: "Yooldo Verse",
  nativeCurrency: { name: "OAS", symbol: "OAS", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.yooldo-verse.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "Yooldo Verse Explorer",
      url: "https://explorer.yooldo-verse.xyz"
    }
  }
}), uE = /* @__PURE__ */ x({
  id: 50006,
  name: "Yooldo Verse Testnet",
  nativeCurrency: { name: "OAS", symbol: "OAS", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.yooldo-verse.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "Yooldo Verse Testnet Explorer",
      url: "https://explorer.testnet.yooldo-verse.xyz"
    }
  },
  testnet: !0
}), dE = /* @__PURE__ */ x({
  id: 7e3,
  name: "ZetaChain",
  nativeCurrency: {
    decimals: 18,
    name: "Zeta",
    symbol: "ZETA"
  },
  rpcUrls: {
    default: {
      http: ["https://zetachain-evm.blockpi.network/v1/rpc/public"]
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1632781
    }
  },
  blockExplorers: {
    default: {
      name: "ZetaScan",
      url: "https://explorer.zetachain.com"
    }
  },
  testnet: !1
}), pE = /* @__PURE__ */ x({
  id: 7001,
  name: "ZetaChain Athens Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Zeta",
    symbol: "aZETA"
  },
  rpcUrls: {
    default: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2715217
    }
  },
  blockExplorers: {
    default: {
      name: "ZetaScan",
      url: "https://athens.explorer.zetachain.com"
    }
  },
  testnet: !0
}), fE = /* @__PURE__ */ x({
  id: 1337803,
  name: "Zhejiang",
  nativeCurrency: { name: "Zhejiang Ether", symbol: "ZhejETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.zhejiang.ethpandaops.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Beaconchain",
      url: "https://zhejiang.beaconcha.in"
    }
  },
  testnet: !0
}), hE = /* @__PURE__ */ x({
  id: 32769,
  name: "Zilliqa",
  network: "zilliqa",
  nativeCurrency: { name: "Zilliqa", symbol: "ZIL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.zilliqa.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ethernal",
      url: "https://evmx.zilliqa.com"
    }
  },
  testnet: !1
}), mE = /* @__PURE__ */ x({
  id: 33101,
  name: "Zilliqa Testnet",
  network: "zilliqa-testnet",
  nativeCurrency: { name: "Zilliqa", symbol: "ZIL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://dev-api.zilliqa.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ethernal",
      url: "https://evmx.testnet.zilliqa.com"
    }
  },
  testnet: !0
}), bE = /* @__PURE__ */ x({
  id: 42766,
  name: "ZKFair Mainnet",
  network: "zkfair-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "USD Coin",
    symbol: "USDC"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.zkfair.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkFair Explorer",
      url: "https://scan.zkfair.io",
      apiUrl: "https://scan.zkfair.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6090959
    }
  },
  testnet: !1
}), yE = /* @__PURE__ */ x({
  id: 43851,
  name: "ZKFair Testnet",
  network: "zkfair-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "USD Coin",
    symbol: "USDC"
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.zkfair.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkFair Explorer",
      url: "https://testnet-scan.zkfair.io"
    }
  },
  testnet: !0
}), wE = /* @__PURE__ */ x({
  id: 810180,
  name: "zkLink Nova",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://rpc.zklink.io"] }
  },
  blockExplorers: {
    default: {
      name: "zkLink Nova Block Explorer",
      url: "https://explorer.zklink.io"
    }
  }
}), gE = /* @__PURE__ */ x({
  id: 810181,
  name: "zkLink Nova Sepolia Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://sepolia.rpc.zklink.io"] }
  },
  blockExplorers: {
    default: {
      name: "zkLink Nova Block Explorer",
      url: "https://sepolia.explorer.zklink.io"
    }
  }
}), fl = /* @__PURE__ */ x({
  ...Qt,
  id: 324,
  name: "ZKsync Era",
  network: "zksync-era",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.era.zksync.io"],
      webSocket: ["wss://mainnet.era.zksync.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://era.zksync.network/",
      apiUrl: "https://api-era.zksync.network/api"
    },
    native: {
      name: "ZKsync Explorer",
      url: "https://explorer.zksync.io/",
      apiUrl: "https://block-explorer-api.mainnet.zksync.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    }
  }
}), hl = /* @__PURE__ */ x({
  ...Qt,
  id: 260,
  name: "ZKsync InMemory Node",
  network: "zksync-in-memory-node",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://localhost:8011"]
    }
  },
  testnet: !0
}), ml = /* @__PURE__ */ x({
  ...Qt,
  id: 270,
  name: "ZKsync CLI Local Node",
  network: "zksync-cli-local-node",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://localhost:3050"]
    }
  },
  testnet: !0
}), bl = /* @__PURE__ */ x({
  ...Qt,
  id: 300,
  name: "ZKsync Sepolia Testnet",
  network: "zksync-sepolia-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.era.zksync.dev"],
      webSocket: ["wss://sepolia.era.zksync.dev/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia-era.zksync.network/",
      apiUrl: "https://api-sepolia-era.zksync.network/api"
    },
    native: {
      name: "ZKsync Explorer",
      url: "https://sepolia.explorer.zksync.io/",
      blockExplorerApi: "https://block-explorer-api.sepolia.zksync.dev/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    }
  },
  testnet: !0
}), ts = 1, xE = /* @__PURE__ */ x({
  ...z,
  id: 7777777,
  name: "Zora",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.zora.energy"],
      webSocket: ["wss://rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.zora.energy",
      apiUrl: "https://explorer.zora.energy/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [ts]: {
        address: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c"
      }
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 5882
    },
    portal: {
      [ts]: {
        address: "0x1a0ad011913A150f69f6A19DF447A0CfD9551054"
      }
    },
    l1StandardBridge: {
      [ts]: {
        address: "0x3e2Ea9B92B7E48A52296fD261dc26fd995284631"
      }
    }
  },
  sourceId: ts
}), ns = 11155111, CE = /* @__PURE__ */ x({
  ...z,
  id: 999999999,
  name: "Zora Sepolia",
  network: "zora-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Zora Sepolia",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.rpc.zora.energy"],
      webSocket: ["wss://sepolia.rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: {
      name: "Zora Sepolia Explorer",
      url: "https://sepolia.explorer.zora.energy/",
      apiUrl: "https://sepolia.explorer.zora.energy/api"
    }
  },
  contracts: {
    ...z.contracts,
    l2OutputOracle: {
      [ns]: {
        address: "0x2615B481Bd3E5A1C0C7Ca3Da1bdc663E8615Ade9"
      }
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 83160
    },
    portal: {
      [ns]: {
        address: "0xeffE2C6cA9Ab797D418f0D91eA60807713f3536f"
      }
    },
    l1StandardBridge: {
      [ns]: {
        address: "0x5376f1D543dcbB5BD416c56C189e4cB7399fCcCB"
      }
    }
  },
  sourceId: ns,
  testnet: !0
}), yl = 5, AE = /* @__PURE__ */ x({
  ...z,
  id: 999,
  name: "Zora Goerli Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Zora Goerli",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.rpc.zora.energy"],
      webSocket: ["wss://testnet.rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://testnet.explorer.zora.energy",
      apiUrl: "https://testnet.explorer.zora.energy/api"
    }
  },
  contracts: {
    ...z.contracts,
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 189123
    },
    portal: {
      [yl]: {
        address: "0xDb9F51790365e7dc196e7D072728df39Be958ACe"
      }
    }
  },
  sourceId: yl,
  testnet: !0
}), vE = /* @__PURE__ */ x({
  id: 48899,
  name: "Zircuit Testnet",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://zircuit1.p2pify.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Zircuit Explorer",
      url: "https://explorer.zircuit.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 6040287
    }
  }
}), a3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  abstractTestnet: Xg,
  acala: Yg,
  ancient8: ox,
  ancient8Sepolia: ax,
  anvil: ix,
  apexTestnet: cx,
  arbitrum: lx,
  arbitrumGoerli: ux,
  arbitrumNova: dx,
  arbitrumSepolia: bx,
  areonNetwork: yx,
  areonNetworkTestnet: wx,
  artelaTestnet: gx,
  assetChainTestnet: px,
  astar: fx,
  astarZkEVM: hx,
  astarZkyoto: mx,
  atletaOlympia: xx,
  aurora: Cx,
  auroraTestnet: Ax,
  auroria: vx,
  avalanche: Ex,
  avalancheFuji: kx,
  b3: Tx,
  b3Sepolia: Sx,
  bahamut: Ux,
  base: Px,
  baseGoerli: Nx,
  baseSepolia: Mx,
  beam: Fx,
  beamTestnet: Dx,
  bearNetworkChainMainnet: Rx,
  bearNetworkChainTestnet: Ox,
  berachainTestnet: Lx,
  berachainTestnetbArtio: zx,
  bevmMainnet: _x,
  bitTorrent: jx,
  bitTorrentTestnet: qx,
  bitkub: Hx,
  bitkubTestnet: $x,
  blast: Kx,
  blastSepolia: Vx,
  bob: Wx,
  bobSepolia: Zx,
  boba: Jx,
  bobaSepolia: Xx,
  botanixTestnet: Yx,
  bronos: e2,
  bronosTestnet: t2,
  bsc: n2,
  bscGreenfield: s2,
  bscTestnet: r2,
  btr: o2,
  btrTestnet: a2,
  bxn: i2,
  bxnTestnet: c2,
  canto: l2,
  celo: x2,
  celoAlfajores: C2,
  chiliz: A2,
  chips: v2,
  classic: E2,
  confluxESpace: k2,
  confluxESpaceTestnet: I2,
  coreDao: S2,
  crab: B2,
  cronos: T2,
  cronosTestnet: N2,
  cronoszkEVM: U2,
  cronoszkEVMTestnet: P2,
  crossbell: M2,
  curtis: F2,
  cyber: D2,
  cyberTestnet: R2,
  darwinia: O2,
  dchain: L2,
  dchainTestnet: z2,
  defichainEvm: _2,
  defichainEvmTestnet: H2,
  degen: $2,
  dfk: j2,
  dodochainTestnet: q2,
  dogechain: G2,
  dreyerxMainnet: K2,
  dreyerxTestnet: Q2,
  edgeless: V2,
  edgelessTestnet: W2,
  edgeware: Z2,
  edgewareTestnet: J2,
  ekta: oC,
  ektaTestnet: aC,
  eon: X2,
  eos: Y2,
  eosTestnet: eC,
  etherlink: tC,
  etherlinkTestnet: nC,
  evmos: rC,
  evmosTestnet: sC,
  fantom: iC,
  fantomSonicTestnet: cC,
  fantomTestnet: lC,
  fibo: uC,
  filecoin: dC,
  filecoinCalibration: pC,
  filecoinHyperspace: fC,
  flare: hC,
  flareTestnet: mC,
  flowMainnet: yC,
  flowPreviewnet: bC,
  flowTestnet: wC,
  fluence: gC,
  fluenceStage: xC,
  fluenceTestnet: CC,
  forma: AC,
  foundry: vC,
  fraxtal: EC,
  fraxtalTestnet: kC,
  funkiMainnet: SC,
  funkiSepolia: TC,
  fuse: UC,
  fuseSparknet: PC,
  gnosis: zC,
  gnosisChiado: _C,
  gobi: OC,
  goerli: LC,
  gravity: HC,
  ham: $C,
  haqqMainnet: KC,
  haqqTestedge2: QC,
  hardhat: jC,
  harmonyOne: qC,
  hashkeyTestnet: GC,
  hedera: VC,
  hederaPreviewnet: ZC,
  hederaTestnet: WC,
  holesky: JC,
  immutableZkEvm: XC,
  immutableZkEvmTestnet: YC,
  inEVM: eA,
  iota: tA,
  iotaTestnet: nA,
  iotex: NC,
  iotexTestnet: MC,
  jbc: FC,
  jbcTestnet: DC,
  kaia: lA,
  kairos: uA,
  kakarotSepolia: rA,
  karura: RC,
  kava: sA,
  kavaTestnet: oA,
  kcc: aA,
  klaytn: iA,
  klaytnBaobab: cA,
  koi: dA,
  kroma: pA,
  kromaSepolia: fA,
  l3x: hA,
  l3xTestnet: mA,
  lightlinkPegasus: bA,
  lightlinkPhoenix: yA,
  linea: gA,
  lineaGoerli: xA,
  lineaSepolia: CA,
  lineaTestnet: AA,
  lisk: vA,
  liskSepolia: EA,
  localhost: kA,
  lukso: IA,
  luksoTestnet: SA,
  lycan: BA,
  lyra: TA,
  mainnet: Ia,
  mandala: UA,
  manta: PA,
  mantaSepoliaTestnet: NA,
  mantaTestnet: MA,
  mantle: FA,
  mantleSepoliaTestnet: DA,
  mantleTestnet: RA,
  merlin: OA,
  metachain: LA,
  metachainIstanbul: zA,
  metalL2: _A,
  meter: HA,
  meterTestnet: $A,
  metis: jA,
  metisGoerli: qA,
  mev: GA,
  mevTestnet: KA,
  mintSepoliaTestnet: QA,
  mode: VA,
  modeTestnet: WA,
  moonbaseAlpha: ZA,
  moonbeam: JA,
  moonbeamDev: XA,
  moonriver: YA,
  morphHolesky: ev,
  morphSepolia: tv,
  nautilus: nv,
  neonDevnet: rv,
  neonMainnet: sv,
  nexi: ov,
  nexilix: av,
  oasisTestnet: cv,
  oasys: iv,
  okc: lv,
  oortMainnetDev: mv,
  opBNB: fv,
  opBNBTestnet: hv,
  optimism: uv,
  optimismGoerli: dv,
  optimismSepolia: pv,
  otimDevnet: bv,
  palm: yv,
  palmTestnet: wv,
  pgn: xv,
  pgnTestnet: Cv,
  phoenix: Av,
  playfiAlbireo: gv,
  plinga: vv,
  plumeTestnet: kv,
  polygon: Iv,
  polygonAmoy: Sv,
  polygonMumbai: Bv,
  polygonZkEvm: Tv,
  polygonZkEvmCardona: Uv,
  polygonZkEvmTestnet: Pv,
  pulsechain: Nv,
  pulsechainV4: Mv,
  qMainnet: Fv,
  qTestnet: Dv,
  real: Rv,
  redbellyTestnet: Ov,
  redstone: Lv,
  reyaNetwork: zv,
  rollux: _v,
  rolluxTestnet: Hv,
  ronin: $v,
  root: jv,
  rootPorcini: qv,
  rootstock: Gv,
  rootstockTestnet: Kv,
  rss3: Qv,
  rss3Sepolia: Vv,
  saigon: Wv,
  sapphire: Zv,
  sapphireTestnet: Jv,
  satoshiVM: Xv,
  satoshiVMTestnet: Yv,
  scroll: e6,
  scrollSepolia: t6,
  sei: n6,
  seiDevnet: r6,
  seiTestnet: s6,
  sepolia: o6,
  shapeSepolia: i6,
  shardeumSphinx: U6,
  shibarium: P6,
  shibariumTestnet: N6,
  shimmer: c6,
  shimmerTestnet: l6,
  skaleBlockBrawlers: u6,
  skaleCalypso: d6,
  skaleCalypsoTestnet: p6,
  skaleCryptoBlades: f6,
  skaleCryptoColosseum: h6,
  skaleEuropa: m6,
  skaleEuropaTestnet: b6,
  skaleExorde: y6,
  skaleHumanProtocol: w6,
  skaleNebula: g6,
  skaleNebulaTestnet: x6,
  skaleRazor: C6,
  skaleTitan: A6,
  skaleTitanTestnet: v6,
  sketchpad: E6,
  soneiumMinato: k6,
  songbird: I6,
  songbirdTestnet: S6,
  sophonTestnet: B6,
  spicy: T6,
  storyTestnet: M6,
  stratis: F6,
  syscoin: D6,
  syscoinTestnet: R6,
  taiko: L6,
  taikoHekla: z6,
  taikoJolnir: _6,
  taikoKatla: H6,
  taikoTestnetSepolia: $6,
  taraxa: O6,
  taraxaTestnet: j6,
  telcoinTestnet: q6,
  telos: G6,
  telosTestnet: K6,
  tenet: Q6,
  thaiChain: V6,
  thunderTestnet: W6,
  tron: Z6,
  unreal: J6,
  vechain: X6,
  wanchain: Y6,
  wanchainTestnet: eE,
  wemix: tE,
  wemixTestnet: nE,
  x1Testnet: pl,
  xLayer: rE,
  xLayerTestnet: pl,
  xai: sE,
  xaiTestnet: oE,
  xdc: aE,
  xdcTestnet: iE,
  xrSepolia: cE,
  yooldoVerse: lE,
  yooldoVerseTestnet: uE,
  zetachain: dE,
  zetachainAthensTestnet: pE,
  zhejiang: fE,
  zilliqa: hE,
  zilliqaTestnet: mE,
  zircuitTestnet: vE,
  zkFair: bE,
  zkFairTestnet: yE,
  zkLinkNova: wE,
  zkLinkNovaSepoliaTestnet: gE,
  zkSync: fl,
  zkSyncInMemoryNode: hl,
  zkSyncLocalNode: ml,
  zkSyncSepoliaTestnet: bl,
  zksync: fl,
  zksyncInMemoryNode: hl,
  zksyncLocalNode: ml,
  zksyncSepoliaTestnet: bl,
  zora: xE,
  zoraSepolia: CE,
  zoraTestnet: AE
}, Symbol.toStringTag, { value: "Module" }));
async function EE(e) {
  var r;
  if (!e)
    throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");
  const t = await (e == null ? void 0 : e.getProvider());
  return {
    supportsAllNetworks: !1,
    approvedCaipNetworkIds: _l.getChainsFromNamespaces((r = t == null ? void 0 : t.session) == null ? void 0 : r.namespaces)
  };
}
function kE() {
  return {
    supportsAllNetworks: !0,
    approvedCaipNetworkIds: Ct.WalletConnectRpcChainIds.map((e) => `${me.EIP155}:${e}`)
  };
}
function IE({ chain: e, projectId: t }) {
  var s, o;
  const n = _f.getBlockchainApiUrl(), r = (o = (s = e.rpcUrls[0]) == null ? void 0 : s.http) == null ? void 0 : o[0];
  return Ct.WalletConnectRpcChainIds.includes(e.id) ? Ji([
    Kn(`${n}/v1/?chainId=${me.EIP155}:${e.id}&projectId=${t}`, {
      fetchOptions: {
        headers: {
          "Content-Type": "text/plain"
        }
      }
    }),
    Kn(r)
  ]) : Kn(r);
}
function wl(e) {
  if (!e)
    throw new Error("No CAIP address provided");
  const t = e.split(":")[2];
  if (!t)
    throw new Error("Invalid CAIP address");
  return t;
}
function rf(e) {
  return e.map((n) => ({
    blockExplorers: {
      default: {
        apiUrl: "",
        name: "",
        url: n.explorerUrl || ""
      }
    },
    fees: void 0,
    formatters: void 0,
    id: Number(n.chainId),
    name: n.name,
    nativeCurrency: {
      decimals: 18,
      name: n.currency,
      symbol: n.currency
    },
    rpcUrls: {
      default: {
        http: [n.rpcUrl]
      }
    },
    serializers: void 0
  }));
}
var SE = "AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI";
const gl = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]), xl = 4;
function BE(e) {
  let t = 0;
  function n() {
    return e[t++] << 8 | e[t++];
  }
  let r = n(), s = 1, o = [0, 1];
  for (let g = 1; g < r; g++)
    o.push(s += n());
  let a = n(), i = t;
  t += a;
  let c = 0, l = 0;
  function u() {
    return c == 0 && (l = l << 8 | e[t++], c = 8), l >> --c & 1;
  }
  const d = 31, p = 2 ** d, f = p >>> 1, m = f >> 1, h = p - 1;
  let b = 0;
  for (let g = 0; g < d; g++)
    b = b << 1 | u();
  let y = [], w = 0, v = p;
  for (; ; ) {
    let g = Math.floor(((b - w + 1) * s - 1) / v), C = 0, A = r;
    for (; A - C > 1; ) {
      let P = C + A >>> 1;
      g < o[P] ? A = P : C = P;
    }
    if (C == 0)
      break;
    y.push(C);
    let k = w + Math.floor(v * o[C] / s), I = w + Math.floor(v * o[C + 1] / s) - 1;
    for (; !((k ^ I) & f); )
      b = b << 1 & h | u(), k = k << 1 & h, I = I << 1 & h | 1;
    for (; k & ~I & m; )
      b = b & f | b << 1 & h >>> 1 | u(), k = k << 1 ^ f, I = (I ^ f) << 1 | f | 1;
    w = k, v = 1 + I - k;
  }
  let E = r - 4;
  return y.map((g) => {
    switch (g - E) {
      case 3:
        return E + 65792 + (e[i++] << 16 | e[i++] << 8 | e[i++]);
      case 2:
        return E + 256 + (e[i++] << 8 | e[i++]);
      case 1:
        return E + e[i++];
      default:
        return g - 1;
    }
  });
}
function TE(e) {
  let t = 0;
  return () => e[t++];
}
function sf(e) {
  return TE(BE(UE(e)));
}
function UE(e) {
  let t = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((s, o) => t[s.charCodeAt(0)] = o);
  let n = e.length, r = new Uint8Array(6 * n >> 3);
  for (let s = 0, o = 0, a = 0, i = 0; s < n; s++)
    i = i << 6 | t[e.charCodeAt(s)], a += 6, a >= 8 && (r[o++] = i >> (a -= 8));
  return r;
}
function PE(e) {
  return e & 1 ? ~e >> 1 : e >> 1;
}
function NE(e, t) {
  let n = Array(e);
  for (let r = 0, s = 0; r < e; r++)
    n[r] = s += PE(t());
  return n;
}
function nr(e, t = 0) {
  let n = [];
  for (; ; ) {
    let r = e(), s = e();
    if (!s)
      break;
    t += r;
    for (let o = 0; o < s; o++)
      n.push(t + o);
    t += s + 1;
  }
  return n;
}
function of(e) {
  return rr(() => {
    let t = nr(e);
    if (t.length)
      return t;
  });
}
function af(e) {
  let t = [];
  for (; ; ) {
    let n = e();
    if (n == 0)
      break;
    t.push(ME(n, e));
  }
  for (; ; ) {
    let n = e() - 1;
    if (n < 0)
      break;
    t.push(FE(n, e));
  }
  return t.flat();
}
function rr(e) {
  let t = [];
  for (; ; ) {
    let n = e(t.length);
    if (!n)
      break;
    t.push(n);
  }
  return t;
}
function cf(e, t, n) {
  let r = Array(e).fill().map(() => []);
  for (let s = 0; s < t; s++)
    NE(e, n).forEach((o, a) => r[a].push(o));
  return r;
}
function ME(e, t) {
  let n = 1 + t(), r = t(), s = rr(t);
  return cf(s.length, 1 + e, t).flatMap((a, i) => {
    let [c, ...l] = a;
    return Array(s[i]).fill().map((u, d) => {
      let p = d * r;
      return [c + d * n, l.map((f) => f + p)];
    });
  });
}
function FE(e, t) {
  let n = 1 + t();
  return cf(n, 1 + e, t).map((s) => [s[0], s.slice(1)]);
}
function DE(e) {
  let t = [], n = nr(e);
  return s(r([]), []), t;
  function r(o) {
    let a = e(), i = rr(() => {
      let c = nr(e).map((l) => n[l]);
      if (c.length)
        return r(c);
    });
    return { S: a, B: i, Q: o };
  }
  function s({ S: o, B: a }, i, c) {
    if (!(o & 4 && c === i[i.length - 1])) {
      o & 2 && (c = i[i.length - 1]), o & 1 && t.push(i);
      for (let l of a)
        for (let u of l.Q)
          s(l, [...i, u], c);
    }
  }
}
function RE(e) {
  return e.toString(16).toUpperCase().padStart(2, "0");
}
function lf(e) {
  return `{${RE(e)}}`;
}
function OE(e) {
  let t = [];
  for (let n = 0, r = e.length; n < r; ) {
    let s = e.codePointAt(n);
    n += s < 65536 ? 1 : 2, t.push(s);
  }
  return t;
}
function xn(e) {
  let n = e.length;
  if (n < 4096)
    return String.fromCodePoint(...e);
  let r = [];
  for (let s = 0; s < n; )
    r.push(String.fromCodePoint(...e.slice(s, s += 4096)));
  return r.join("");
}
function LE(e, t) {
  let n = e.length, r = n - t.length;
  for (let s = 0; r == 0 && s < n; s++)
    r = e[s] - t[s];
  return r;
}
var zE = "AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g";
const sr = 44032, Ps = 4352, Ns = 4449, Ms = 4519, uf = 19, df = 21, Cn = 28, Fs = df * Cn, _E = uf * Fs, HE = sr + _E, $E = Ps + uf, jE = Ns + df, qE = Ms + Cn;
function qn(e) {
  return e >> 24 & 255;
}
function pf(e) {
  return e & 16777215;
}
let Sa, Cl, Ba, ls;
function GE() {
  let e = sf(zE);
  Sa = new Map(of(e).flatMap((t, n) => t.map((r) => [r, n + 1 << 24]))), Cl = new Set(nr(e)), Ba = /* @__PURE__ */ new Map(), ls = /* @__PURE__ */ new Map();
  for (let [t, n] of af(e)) {
    if (!Cl.has(t) && n.length == 2) {
      let [r, s] = n, o = ls.get(r);
      o || (o = /* @__PURE__ */ new Map(), ls.set(r, o)), o.set(s, t);
    }
    Ba.set(t, n.reverse());
  }
}
function ff(e) {
  return e >= sr && e < HE;
}
function KE(e, t) {
  if (e >= Ps && e < $E && t >= Ns && t < jE)
    return sr + (e - Ps) * Fs + (t - Ns) * Cn;
  if (ff(e) && t > Ms && t < qE && (e - sr) % Cn == 0)
    return e + (t - Ms);
  {
    let n = ls.get(e);
    return n && (n = n.get(t), n) ? n : -1;
  }
}
function hf(e) {
  Sa || GE();
  let t = [], n = [], r = !1;
  function s(o) {
    let a = Sa.get(o);
    a && (r = !0, o |= a), t.push(o);
  }
  for (let o of e)
    for (; ; ) {
      if (o < 128)
        t.push(o);
      else if (ff(o)) {
        let a = o - sr, i = a / Fs | 0, c = a % Fs / Cn | 0, l = a % Cn;
        s(Ps + i), s(Ns + c), l > 0 && s(Ms + l);
      } else {
        let a = Ba.get(o);
        a ? n.push(...a) : s(o);
      }
      if (!n.length)
        break;
      o = n.pop();
    }
  if (r && t.length > 1) {
    let o = qn(t[0]);
    for (let a = 1; a < t.length; a++) {
      let i = qn(t[a]);
      if (i == 0 || o <= i) {
        o = i;
        continue;
      }
      let c = a - 1;
      for (; ; ) {
        let l = t[c + 1];
        if (t[c + 1] = t[c], t[c] = l, !c || (o = qn(t[--c]), o <= i))
          break;
      }
      o = qn(t[a]);
    }
  }
  return t;
}
function QE(e) {
  let t = [], n = [], r = -1, s = 0;
  for (let o of e) {
    let a = qn(o), i = pf(o);
    if (r == -1)
      a == 0 ? r = i : t.push(i);
    else if (s > 0 && s >= a)
      a == 0 ? (t.push(r, ...n), n.length = 0, r = i) : n.push(i), s = a;
    else {
      let c = KE(r, i);
      c >= 0 ? r = c : s == 0 && a == 0 ? (t.push(r), r = i) : (n.push(i), s = a);
    }
  }
  return r >= 0 && t.push(r, ...n), t;
}
function mf(e) {
  return hf(e).map(pf);
}
function VE(e) {
  return QE(hf(e));
}
const Al = 45, bf = ".", yf = 65039, wf = 1, tn = (e) => Array.from(e);
function or(e, t) {
  return e.P.has(t) || e.Q.has(t);
}
class WE extends Array {
  get is_emoji() {
    return !0;
  }
  // free tagging system
}
let Ta, gf, kt, Ua, xf, rn, Zo, Yt, Cf, vl, Pa;
function nc() {
  if (Ta)
    return;
  let e = sf(SE);
  const t = () => nr(e), n = () => new Set(t());
  Ta = new Map(af(e)), gf = n(), kt = t(), Ua = new Set(t().map((u) => kt[u])), kt = new Set(kt), xf = n(), n();
  let r = of(e), s = e();
  const o = () => new Set(t().flatMap((u) => r[u]).concat(t()));
  rn = rr((u) => {
    let d = rr(e).map((p) => p + 96);
    if (d.length) {
      let p = u >= s;
      d[0] -= 32, d = xn(d), p && (d = `Restricted[${d}]`);
      let f = o(), m = o(), h = !e();
      return { N: d, P: f, Q: m, M: h, R: p };
    }
  }), Zo = n(), Yt = /* @__PURE__ */ new Map();
  let a = t().concat(tn(Zo)).sort((u, d) => u - d);
  a.forEach((u, d) => {
    let p = e(), f = a[d] = p ? a[d - p] : { V: [], M: /* @__PURE__ */ new Map() };
    f.V.push(u), Zo.has(u) || Yt.set(u, f);
  });
  for (let { V: u, M: d } of new Set(Yt.values())) {
    let p = [];
    for (let m of u) {
      let h = rn.filter((y) => or(y, m)), b = p.find(({ G: y }) => h.some((w) => y.has(w)));
      b || (b = { G: /* @__PURE__ */ new Set(), V: [] }, p.push(b)), b.V.push(m), h.forEach((y) => b.G.add(y));
    }
    let f = p.flatMap((m) => tn(m.G));
    for (let { G: m, V: h } of p) {
      let b = new Set(f.filter((y) => !m.has(y)));
      for (let y of h)
        d.set(y, b);
    }
  }
  let i = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  const l = (u) => i.has(u) ? c.add(u) : i.add(u);
  for (let u of rn) {
    for (let d of u.P)
      l(d);
    for (let d of u.Q)
      l(d);
  }
  for (let u of i)
    !Yt.has(u) && !c.has(u) && Yt.set(u, wf);
  Cf = new Set(tn(i).concat(tn(mf(i)))), vl = DE(e).map((u) => WE.from(u)).sort(LE), Pa = /* @__PURE__ */ new Map();
  for (let u of vl) {
    let d = [Pa];
    for (let p of u) {
      let f = d.map((m) => {
        let h = m.get(p);
        return h || (h = /* @__PURE__ */ new Map(), m.set(p, h)), h;
      });
      p === yf ? d.push(...f) : d = f;
    }
    for (let p of d)
      p.V = u;
  }
}
function rc(e) {
  return (Af(e) ? "" : `${sc(xo([e]))} `) + lf(e);
}
function sc(e) {
  return `"${e}"‎`;
}
function ZE(e) {
  if (e.length >= 4 && e[2] == Al && e[3] == Al)
    throw new Error(`invalid label extension: "${xn(e.slice(0, 4))}"`);
}
function JE(e) {
  for (let n = e.lastIndexOf(95); n > 0; )
    if (e[--n] !== 95)
      throw new Error("underscore allowed only at start");
}
function XE(e) {
  let t = e[0], n = gl.get(t);
  if (n)
    throw Qn(`leading ${n}`);
  let r = e.length, s = -1;
  for (let o = 1; o < r; o++) {
    t = e[o];
    let a = gl.get(t);
    if (a) {
      if (s == o)
        throw Qn(`${n} + ${a}`);
      s = o + 1, n = a;
    }
  }
  if (s == r)
    throw Qn(`trailing ${n}`);
}
function xo(e, t = lf) {
  let n = [];
  YE(e[0]) && n.push("◌");
  let r = 0, s = e.length;
  for (let o = 0; o < s; o++) {
    let a = e[o];
    Af(a) && (n.push(xn(e.slice(r, o))), n.push(t(a)), r = o + 1);
  }
  return n.push(xn(e.slice(r, s))), n.join("");
}
function YE(e) {
  return nc(), kt.has(e);
}
function Af(e) {
  return nc(), xf.has(e);
}
function ek(e) {
  return sk(tk(e, VE, ik));
}
function tk(e, t, n) {
  if (!e)
    return [];
  nc();
  let r = 0;
  return e.split(bf).map((s) => {
    let o = OE(s), a = {
      input: o,
      offset: r
      // codepoint, not substring!
    };
    r += o.length + 1;
    try {
      let i = a.tokens = ak(o, t, n), c = i.length, l;
      if (!c)
        throw new Error("empty label");
      let u = a.output = i.flat();
      if (JE(u), !(a.emoji = c > 1 || i[0].is_emoji) && u.every((p) => p < 128))
        ZE(u), l = "ASCII";
      else {
        let p = i.flatMap((f) => f.is_emoji ? [] : f);
        if (!p.length)
          l = "Emoji";
        else {
          if (kt.has(u[0]))
            throw Qn("leading combining mark");
          for (let h = 1; h < c; h++) {
            let b = i[h];
            if (!b.is_emoji && kt.has(b[0]))
              throw Qn(`emoji + combining mark: "${xn(i[h - 1])} + ${xo([b[0]])}"`);
          }
          XE(u);
          let f = tn(new Set(p)), [m] = rk(f);
          ok(m, p), nk(m, f), l = m.N;
        }
      }
      a.type = l;
    } catch (i) {
      a.error = i;
    }
    return a;
  });
}
function nk(e, t) {
  let n, r = [];
  for (let s of t) {
    let o = Yt.get(s);
    if (o === wf)
      return;
    if (o) {
      let a = o.M.get(s);
      if (n = n ? n.filter((i) => a.has(i)) : tn(a), !n.length)
        return;
    } else
      r.push(s);
  }
  if (n) {
    for (let s of n)
      if (r.every((o) => or(s, o)))
        throw new Error(`whole-script confusable: ${e.N}/${s.N}`);
  }
}
function rk(e) {
  let t = rn;
  for (let n of e) {
    let r = t.filter((s) => or(s, n));
    if (!r.length)
      throw rn.some((s) => or(s, n)) ? Ef(t[0], n) : vf(n);
    if (t = r, r.length == 1)
      break;
  }
  return t;
}
function sk(e) {
  return e.map(({ input: t, error: n, output: r }) => {
    if (n) {
      let s = n.message;
      throw new Error(e.length == 1 ? s : `Invalid label ${sc(xo(t))}: ${s}`);
    }
    return xn(r);
  }).join(bf);
}
function vf(e) {
  return new Error(`disallowed character: ${rc(e)}`);
}
function Ef(e, t) {
  let n = rc(t), r = rn.find((s) => s.P.has(t));
  return r && (n = `${r.N} ${n}`), new Error(`illegal mixture: ${e.N} + ${n}`);
}
function Qn(e) {
  return new Error(`illegal placement: ${e}`);
}
function ok(e, t) {
  for (let n of t)
    if (!or(e, n))
      throw Ef(e, n);
  if (e.M) {
    let n = mf(t);
    for (let r = 1, s = n.length; r < s; r++)
      if (Ua.has(n[r])) {
        let o = r + 1;
        for (let a; o < s && Ua.has(a = n[o]); o++)
          for (let i = r; i < o; i++)
            if (n[i] == a)
              throw new Error(`duplicate non-spacing marks: ${rc(a)}`);
        if (o - r > xl)
          throw new Error(`excessive non-spacing marks: ${sc(xo(n.slice(r - 1, o)))} (${o - r}/${xl})`);
        r = o;
      }
  }
}
function ak(e, t, n) {
  let r = [], s = [];
  for (e = e.slice().reverse(); e.length; ) {
    let o = ck(e);
    if (o)
      s.length && (r.push(t(s)), s = []), r.push(n(o));
    else {
      let a = e.pop();
      if (Cf.has(a))
        s.push(a);
      else {
        let i = Ta.get(a);
        if (i)
          s.push(...i);
        else if (!gf.has(a))
          throw vf(a);
      }
    }
  }
  return s.length && r.push(t(s)), r;
}
function ik(e) {
  return e.filter((t) => t != yf);
}
function ck(e, t) {
  let n = Pa, r, s = e.length;
  for (; s && (n = n.get(e[--s]), !!n); ) {
    let { V: o } = n;
    o && (r = o, e.length = s);
  }
  return r;
}
function El(e) {
  return ek(e);
}
oc.type = "walletConnect";
function oc(e, t) {
  const n = e.isNewChainsStale ?? !0;
  let r, s, o, a, i, c, l, u;
  return (d) => ({
    id: "walletConnect",
    name: "WalletConnect",
    type: oc.type,
    async setup() {
      const p = await this.getProvider().catch(() => null);
      p && (i || (i = this.onConnect.bind(this), p.on("connect", i)), l || (l = this.onSessionDelete.bind(this), p.on("session_delete", l)));
    },
    async connect({ ...p } = {}) {
      try {
        const f = await this.getProvider();
        if (!f)
          throw new rt();
        c || (c = this.onDisplayUri, f.on("display_uri", c));
        const m = await this.isChainsStale();
        if (f.session && m && await f.disconnect(), !f.session || m) {
          const y = _l.createNamespaces(e.networks);
          await f.connect({
            optionalNamespaces: y,
            ..."pairingTopic" in p ? { pairingTopic: p.pairingTopic } : {}
          }), this.setRequestedChainsIds(e.networks.map((w) => Number(w.chainId)));
        }
        const h = (await f.enable()).map((y) => H(y)), b = await this.getChainId();
        return c && (f.removeListener("display_uri", c), c = void 0), i && (f.removeListener("connect", i), i = void 0), o || (o = this.onAccountsChanged.bind(this), f.on("accountsChanged", o)), a || (a = this.onChainChanged.bind(this), f.on("chainChanged", a)), u || (u = this.onDisconnect.bind(this), f.on("disconnect", u)), l || (l = this.onSessionDelete.bind(this), f.on("session_delete", l)), { accounts: h, chainId: b };
      } catch (f) {
        throw /(user rejected|connection request reset)/i.test(f == null ? void 0 : f.message) ? new D(f) : f;
      }
    },
    async disconnect() {
      const p = await this.getProvider();
      try {
        await (p == null ? void 0 : p.disconnect());
      } catch (f) {
        if (!/No matching key/i.test(f.message))
          throw f;
      } finally {
        a && (p == null || p.removeListener("chainChanged", a), a = void 0), u && (p == null || p.removeListener("disconnect", u), u = void 0), i || (i = this.onConnect.bind(this), p == null || p.on("connect", i)), o && (p == null || p.removeListener("accountsChanged", o), o = void 0), l && (p == null || p.removeListener("session_delete", l), l = void 0), this.setRequestedChainsIds([]);
      }
    },
    async getAccounts() {
      var h, b, y;
      const p = await this.getProvider();
      if (!((h = p == null ? void 0 : p.session) != null && h.namespaces))
        return [];
      const f = (y = (b = p == null ? void 0 : p.session) == null ? void 0 : b.namespaces.eip155) == null ? void 0 : y.accounts;
      return (f == null ? void 0 : f.map((w) => w.split(":")[2])) ?? [];
    },
    async getProvider({ chainId: p } = {}) {
      var h, b, y;
      async function f() {
        var E;
        if (!e.networks.map((g) => Number(g.chainId)).length)
          return;
        const v = (E = t.universalAdapter) == null ? void 0 : E.getWalletConnectProvider();
        if (!v)
          throw new Error("Provider not found");
        return v;
      }
      r || (s || (s = f()), r = await s, r == null || r.events.setMaxListeners(Number.POSITIVE_INFINITY));
      const m = (h = t.getCaipNetwork()) == null ? void 0 : h.chainId;
      if (p && m !== p) {
        const w = Hl.getStoredActiveCaipNetwork();
        w && w.chainNamespace === "eip155" ? await ((b = this.switchChain) == null ? void 0 : b.call(this, { chainId: Number(w.chainId) })) : await ((y = this.switchChain) == null ? void 0 : y.call(this, { chainId: p }));
      }
      return r;
    },
    async getChainId() {
      var b, y, w, v;
      const p = (b = t.getCaipNetwork()) == null ? void 0 : b.chainId;
      if (p)
        return p;
      const m = (v = (w = (y = (await this.getProvider()).session) == null ? void 0 : y.namespaces.eip155) == null ? void 0 : w.chains) == null ? void 0 : v[0], h = e.networks.find((E) => E.id === m);
      return h == null ? void 0 : h.chainId;
    },
    async isAuthorized() {
      try {
        const [p, f] = await Promise.all([this.getAccounts(), this.getProvider()]);
        return p.length ? await this.isChainsStale() && f.session ? (await f.disconnect().catch(() => {
        }), !1) : !0 : !1;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: p, chainId: f }) {
      var y, w;
      const m = await this.getProvider();
      if (!m)
        throw new rt();
      const h = e.networks.find((v) => v.chainId === f), [b] = h ? rf([h]) : [];
      if (!b)
        throw new J(new Rt());
      try {
        h != null && h.id && m.setDefaultChain(h == null ? void 0 : h.id), await m.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: U(f) }]
        }), d.emitter.emit("change", { chainId: Number(f) });
        const v = await this.getRequestedChainsIds();
        return this.setRequestedChainsIds([...v, f]), b;
      } catch (v) {
        const E = v;
        if (/(?:user rejected)/iu.test(E.message))
          throw new D(E);
        try {
          let g;
          p != null && p.blockExplorerUrls ? g = p.blockExplorerUrls : g = (y = b.blockExplorers) != null && y.default.url ? [(w = b.blockExplorers) == null ? void 0 : w.default.url] : [];
          const C = {
            blockExplorerUrls: g,
            chainId: U(f),
            chainName: b.name,
            iconUrls: p == null ? void 0 : p.iconUrls,
            nativeCurrency: b.nativeCurrency,
            rpcUrls: b.rpcUrls.default.http
          };
          await m.request({
            method: "wallet_addEthereumChain",
            params: [C]
          });
          const A = await this.getRequestedChainsIds();
          return this.setRequestedChainsIds([...A, f]), b;
        } catch (g) {
          throw new D(g);
        }
      }
    },
    onAccountsChanged(p) {
      p.length === 0 ? this.onDisconnect() : d.emitter.emit("change", {
        accounts: p.map((f) => H(f))
      });
    },
    onChainChanged(p) {
      const f = Number(p);
      d.emitter.emit("change", { chainId: f });
    },
    async onConnect(p) {
      const f = Number(p.chainId), m = await this.getAccounts();
      d.emitter.emit("connect", { accounts: m, chainId: f });
    },
    async onDisconnect(p) {
      this.setRequestedChainsIds([]), d.emitter.emit("disconnect");
      const f = await this.getProvider();
      o && (f.removeListener("accountsChanged", o), o = void 0), a && (f.removeListener("chainChanged", a), a = void 0), u && (f.removeListener("disconnect", u), u = void 0), l && (f.removeListener("session_delete", l), l = void 0), i || (i = this.onConnect.bind(this), f.on("connect", i));
    },
    onDisplayUri(p) {
      d.emitter.emit("message", { type: "display_uri", data: p });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      var m, h, b;
      if (!((m = r == null ? void 0 : r.session) != null && m.namespaces))
        return [];
      const p = (b = (h = r == null ? void 0 : r.session) == null ? void 0 : h.namespaces.eip155) == null ? void 0 : b.accounts;
      return (p == null ? void 0 : p.map((y) => Number.parseInt(y.split(":")[1] ?? ""))) ?? [];
    },
    async getRequestedChainsIds() {
      var f;
      const p = await ((f = d.storage) == null ? void 0 : f.getItem(this.requestedChainsStorageKey)) ?? [];
      return [...new Set(p)];
    },
    async isChainsStale() {
      if (!n)
        return !1;
      const p = d.chains.map((h) => h.id), f = this.getNamespaceChainsIds();
      if (f.length && !f.some((h) => p.includes(h)))
        return !1;
      const m = await this.getRequestedChainsIds();
      return !p.every((h) => m.includes(Number(h)));
    },
    async setRequestedChainsIds(p) {
      var f;
      await ((f = d.storage) == null ? void 0 : f.setItem(this.requestedChainsStorageKey, p));
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    }
  });
}
Co.type = "coinbaseWallet";
function Co(e = {}) {
  return e.version === "3" || e.headlessMode ? uk(e) : lk(e);
}
function lk(e) {
  let t, n, r, s, o;
  return (a) => ({
    id: "coinbaseWalletSDK",
    name: "Coinbase Wallet",
    supportsSimulation: !0,
    type: Co.type,
    async connect({ chainId: i } = {}) {
      try {
        const c = await this.getProvider(), l = (await c.request({
          method: "eth_requestAccounts"
        })).map((d) => H(d));
        r || (r = this.onAccountsChanged.bind(this), c.on("accountsChanged", r)), s || (s = this.onChainChanged.bind(this), c.on("chainChanged", s)), o || (o = this.onDisconnect.bind(this), c.on("disconnect", o));
        let u = await this.getChainId();
        if (i && u !== i) {
          const d = await this.switchChain({ chainId: i }).catch((p) => {
            if (p.code === D.code)
              throw p;
            return { id: u };
          });
          u = (d == null ? void 0 : d.id) ?? u;
        }
        return { accounts: l, chainId: u };
      } catch (c) {
        throw /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(c.message) ? new D(c) : c;
      }
    },
    async disconnect() {
      var c;
      const i = await this.getProvider();
      r && (i.removeListener("accountsChanged", r), r = void 0), s && (i.removeListener("chainChanged", s), s = void 0), o && (i.removeListener("disconnect", o), o = void 0), i.disconnect(), (c = i.close) == null || c.call(i);
    },
    async getAccounts() {
      return (await (await this.getProvider()).request({
        method: "eth_accounts"
      })).map((c) => H(c));
    },
    async getChainId() {
      const c = await (await this.getProvider()).request({
        method: "eth_chainId"
      });
      return Number(c);
    },
    async getProvider() {
      if (!n) {
        const i = await (async () => {
          const { default: c } = await import("./index-je6Gyuxx.js").then((l) => l.i);
          return typeof c != "function" && typeof c.default == "function" ? c.default : c;
        })();
        t = new i({
          ...e,
          appChainIds: a.chains.map((c) => c.id)
        }), n = t.makeWeb3Provider({
          ...e,
          options: e.preference ?? "all"
        });
      }
      return n;
    },
    async isAuthorized() {
      try {
        return !!(await this.getAccounts()).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: i, chainId: c }) {
      var d, p, f, m;
      const l = a.chains.find((h) => h.id === c);
      if (!l)
        throw new J(new Rt());
      const u = await this.getProvider();
      try {
        return await u.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: U(l.id) }]
        }), l;
      } catch (h) {
        if (h.code === 4902)
          try {
            let b;
            i != null && i.blockExplorerUrls ? b = i.blockExplorerUrls : b = (d = l.blockExplorers) != null && d.default.url ? [(p = l.blockExplorers) == null ? void 0 : p.default.url] : [];
            let y;
            (f = i == null ? void 0 : i.rpcUrls) != null && f.length ? y = i.rpcUrls : y = [((m = l.rpcUrls.default) == null ? void 0 : m.http[0]) ?? ""];
            const w = {
              blockExplorerUrls: b,
              chainId: U(c),
              chainName: (i == null ? void 0 : i.chainName) ?? l.name,
              iconUrls: i == null ? void 0 : i.iconUrls,
              nativeCurrency: (i == null ? void 0 : i.nativeCurrency) ?? l.nativeCurrency,
              rpcUrls: y
            };
            return await u.request({
              method: "wallet_addEthereumChain",
              params: [w]
            }), l;
          } catch (b) {
            throw new D(b);
          }
        throw new J(h);
      }
    },
    onAccountsChanged(i) {
      i.length === 0 ? this.onDisconnect() : a.emitter.emit("change", {
        accounts: i.map((c) => H(c))
      });
    },
    onChainChanged(i) {
      const c = Number(i);
      a.emitter.emit("change", { chainId: c });
    },
    async onDisconnect(i) {
      a.emitter.emit("disconnect");
      const c = await this.getProvider();
      r && (c.removeListener("accountsChanged", r), r = void 0), s && (c.removeListener("chainChanged", s), s = void 0), o && (c.removeListener("disconnect", o), o = void 0);
    }
  });
}
function uk(e) {
  let n, r, s, o, a;
  return (i) => ({
    id: "coinbaseWalletSDK",
    name: "Coinbase Wallet",
    supportsSimulation: !0,
    type: Co.type,
    async connect({ chainId: c } = {}) {
      try {
        const l = await this.getProvider(), u = (await l.request({
          method: "eth_requestAccounts"
        })).map((p) => H(p));
        s || (s = this.onAccountsChanged.bind(this), l.on("accountsChanged", s)), o || (o = this.onChainChanged.bind(this), l.on("chainChanged", o)), a || (a = this.onDisconnect.bind(this), l.on("disconnect", a));
        let d = await this.getChainId();
        if (c && d !== c) {
          const p = await this.switchChain({ chainId: c }).catch((f) => {
            if (f.code === D.code)
              throw f;
            return { id: d };
          });
          d = (p == null ? void 0 : p.id) ?? d;
        }
        return { accounts: u, chainId: d };
      } catch (l) {
        throw /(user closed modal|accounts received is empty|user denied account)/i.test(l.message) ? new D(l) : l;
      }
    },
    async disconnect() {
      const c = await this.getProvider();
      s && (c.removeListener("accountsChanged", s), s = void 0), o && (c.removeListener("chainChanged", o), o = void 0), a && (c.removeListener("disconnect", a), a = void 0), c.disconnect(), c.close();
    },
    async getAccounts() {
      return (await (await this.getProvider()).request({
        method: "eth_accounts"
      })).map((l) => H(l));
    },
    async getChainId() {
      const l = await (await this.getProvider()).request({
        method: "eth_chainId"
      });
      return Number(l);
    },
    async getProvider() {
      var c;
      if (!r) {
        const l = await (async () => {
          const { default: m } = await import("./index-D0Wm78mg.js").then((h) => h.i);
          return typeof m != "function" && typeof m.default == "function" ? m.default : m;
        })();
        n = new l({ ...e, reloadOnDisconnect: !1 });
        const u = (c = n.walletExtension) == null ? void 0 : c.getChainId(), d = i.chains.find((m) => e.chainId ? m.id === e.chainId : m.id === u) || i.chains[0], p = e.chainId || (d == null ? void 0 : d.id), f = e.jsonRpcUrl || (d == null ? void 0 : d.rpcUrls.default.http[0]);
        r = n.makeWeb3Provider(f, p);
      }
      return r;
    },
    async isAuthorized() {
      try {
        return !!(await this.getAccounts()).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: c, chainId: l }) {
      var p, f, m, h;
      const u = i.chains.find((b) => b.id === l);
      if (!u)
        throw new J(new Rt());
      const d = await this.getProvider();
      try {
        return await d.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: U(u.id) }]
        }), u;
      } catch (b) {
        if (b.code === 4902)
          try {
            let y;
            c != null && c.blockExplorerUrls ? y = c.blockExplorerUrls : y = (p = u.blockExplorers) != null && p.default.url ? [(f = u.blockExplorers) == null ? void 0 : f.default.url] : [];
            let w;
            (m = c == null ? void 0 : c.rpcUrls) != null && m.length ? w = c.rpcUrls : w = [((h = u.rpcUrls.default) == null ? void 0 : h.http[0]) ?? ""];
            const v = {
              blockExplorerUrls: y,
              chainId: U(l),
              chainName: (c == null ? void 0 : c.chainName) ?? u.name,
              iconUrls: c == null ? void 0 : c.iconUrls,
              nativeCurrency: (c == null ? void 0 : c.nativeCurrency) ?? u.nativeCurrency,
              rpcUrls: w
            };
            return await d.request({
              method: "wallet_addEthereumChain",
              params: [v]
            }), u;
          } catch (y) {
            throw new D(y);
          }
        throw new J(b);
      }
    },
    onAccountsChanged(c) {
      c.length === 0 ? this.onDisconnect() : i.emitter.emit("change", {
        accounts: c.map((l) => H(l))
      });
    },
    onChainChanged(c) {
      const l = Number(c);
      i.emitter.emit("change", { chainId: l });
    },
    async onDisconnect(c) {
      i.emitter.emit("disconnect");
      const l = await this.getProvider();
      s && (l.removeListener("accountsChanged", s), s = void 0), o && (l.removeListener("chainChanged", o), o = void 0), a && (l.removeListener("disconnect", a), a = void 0);
    }
  });
}
function kf(e) {
  function t(n) {
    return je.parseEvmChainId(n) || 1;
  }
  return (n) => ({
    id: me.AUTH_CONNECTOR_ID,
    name: "AppKit Auth",
    type: "w3mAuth",
    chain: ta.CHAIN.EVM,
    async connect(r = {}) {
      const s = await this.getProvider();
      let o = r.chainId;
      if (r.isReconnecting && (o = s.getLastUsedChainId(), !o))
        throw new Error("ChainId not found in provider");
      const { address: a, chainId: i } = await s.connect({
        chainId: o
      });
      await s.getSmartAccountEnabledNetworks();
      const c = t(i);
      return {
        accounts: [a],
        account: a,
        chainId: c,
        chain: {
          id: c,
          unsuported: !1
        }
      };
    },
    async disconnect() {
      await (await this.getProvider()).disconnect();
    },
    async getAccounts() {
      const r = await this.getProvider(), { address: s } = await r.connect();
      return n.emitter.emit("change", { accounts: [s] }), [s];
    },
    async getProvider() {
      return this.provider || (this.provider = Hf.getInstance(e.options.projectId)), Promise.resolve(this.provider);
    },
    async getChainId() {
      const r = await this.getProvider(), { chainId: s } = await r.getChainId();
      return t(s);
    },
    async isAuthorized() {
      const r = await this.getProvider(), { isConnected: s } = await r.isConnected();
      return s;
    },
    async switchChain({ chainId: r }) {
      try {
        const s = n.chains.find((i) => i.id === r);
        if (!s)
          throw new J(new Error("chain not found on connector."));
        const a = await (await this.getProvider()).connect({ chainId: r });
        return n.emitter.emit("change", {
          chainId: Number(r),
          accounts: [a.address]
        }), s;
      } catch (s) {
        throw s instanceof Error ? new J(s) : s;
      }
    },
    onAccountsChanged(r) {
      r.length === 0 ? this.onDisconnect() : n.emitter.emit("change", { accounts: r.map(H) });
    },
    onChainChanged(r) {
      const s = Number(r);
      n.emitter.emit("change", { chainId: s });
    },
    async onDisconnect(r) {
      await (await this.getProvider()).disconnect();
    }
  });
}
const dk = [
  "eth_accounts",
  "eth_requestAccounts",
  "eth_sendRawTransaction",
  "eth_sign",
  "eth_signTransaction",
  "eth_signTypedData",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "eth_sendTransaction",
  "personal_sign",
  "wallet_switchEthereumChain",
  "wallet_addEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode"
];
class pk {
  constructor(t) {
    var o, a, i;
    this.appKit = void 0, this.options = void 0, this.chainNamespace = ta.CHAIN.EVM, this.defaultCaipNetwork = void 0, this.tokens = yc.getCaipTokens((o = this.options) == null ? void 0 : o.tokens), this.siweControllerClient = (a = this.options) == null ? void 0 : a.siweConfig, this.adapterType = "wagmi", this.caipNetworks = t.networks.map((c) => ({
      ...c,
      rpcUrl: $f.extendRpcUrlWithProjectId(c.rpcUrl, t.projectId)
    })), this.wagmiChains = rf(this.caipNetworks.filter((c) => c.chainNamespace === ta.CHAIN.EVM));
    const n = this.wagmiChains.map((c) => [
      c.id,
      IE({ chain: c, projectId: t.projectId })
    ]), r = Object.fromEntries(n), s = [...t.connectors ?? []];
    this.wagmiConfig = $g({
      ...this.createConfigParams,
      chains: this.wagmiChains,
      transports: r,
      connectors: [...s, ...((i = this.createConfigParams) == null ? void 0 : i.connectors) ?? []]
    });
  }
  setCustomConnectors(t, n) {
    var a, i, c, l, u, d, p;
    const r = [];
    t.enableWalletConnect !== !1 && r.push(oc(t, n)), t.enableInjected !== !1 && r.push(go({ shimDisconnect: !0 })), t.enableCoinbase !== !1 && r.push(Co({
      version: "4",
      appName: ((a = t.metadata) == null ? void 0 : a.name) ?? "Unknown",
      appLogoUrl: ((i = t.metadata) == null ? void 0 : i.icons[0]) ?? "Unknown",
      preference: t.coinbasePreference ?? "all"
    }));
    const s = ((c = t.features) == null ? void 0 : c.email) === void 0 ? wc.DEFAULT_FEATURES.email : (l = t.features) == null ? void 0 : l.email, o = (u = t.features) != null && u.socials ? ((p = (d = t.features) == null ? void 0 : d.socials) == null ? void 0 : p.length) > 0 : wc.DEFAULT_FEATURES.socials;
    (s || o) && r.push(kf({
      chains: this.wagmiChains,
      options: { projectId: t.projectId }
    })), r.forEach((f) => {
      const m = this.wagmiConfig._internal.connectors.setup(f);
      this.wagmiConfig._internal.connectors.setState((h) => [...h, m]);
    });
  }
  construct(t, n) {
    var r, s, o;
    if (!n.projectId)
      throw new Error("appkit:initialize - projectId is undefined");
    if (this.appKit = t, this.options = n, this.caipNetworks = n.networks, this.defaultCaipNetwork = n.defaultNetwork || n.networks[0], this.tokens = yc.getCaipTokens(n.tokens), this.setCustomConnectors(n, t), !this.wagmiConfig)
      throw new Error("appkit:wagmiConfig - is undefined");
    this.networkControllerClient = {
      switchCaipNetwork: async (a) => {
        const i = Number(je.caipNetworkIdToNumber(a == null ? void 0 : a.id));
        i && this.wagmiConfig && await wg(this.wagmiConfig, { chainId: i });
      },
      getApprovedCaipNetworksData: async () => {
        if (!this.wagmiConfig)
          throw new Error("networkControllerClient:getApprovedCaipNetworksData - wagmiConfig is undefined");
        return new Promise((a) => {
          var l, u;
          const c = new Map(this.wagmiConfig.state.connections).get(this.wagmiConfig.state.current || "");
          if (((l = c == null ? void 0 : c.connector) == null ? void 0 : l.id) === me.AUTH_CONNECTOR_ID)
            a(kE());
          else if (((u = c == null ? void 0 : c.connector) == null ? void 0 : u.id) === me.WALLET_CONNECT_CONNECTOR_ID) {
            const d = this.wagmiConfig.connectors.find((p) => p.id === me.WALLET_CONNECT_CONNECTOR_ID);
            a(EE(d));
          }
          a({ approvedCaipNetworkIds: void 0, supportsAllNetworks: !0 });
        });
      }
    }, this.connectionControllerClient = {
      connectWalletConnect: async () => {
        var m, h, b, y, w, v, E, g, C, A, k, I;
        if (!this.wagmiConfig)
          throw new Error("connectionControllerClient:getWalletConnectUri - wagmiConfig is undefined");
        const a = this.wagmiConfig.connectors.find((P) => P.id === me.WALLET_CONNECT_CONNECTOR_ID);
        if (!a)
          throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");
        const i = await a.getProvider(), c = await ((b = (h = (m = this.options) == null ? void 0 : m.siweConfig) == null ? void 0 : h.getMessageParams) == null ? void 0 : b.call(h)), l = (v = (w = (y = this.options) == null ? void 0 : y.siweConfig) == null ? void 0 : w.options) == null ? void 0 : v.enabled, u = typeof (i == null ? void 0 : i.authenticate) == "function", d = c && Object.keys(c || {}).length > 0, p = (E = this.options) == null ? void 0 : E.siweConfig;
        if (l && u && d && p) {
          await a.setRequestedChainsIds(c.chains);
          const { SIWEController: P, getDidChainId: N, getDidAddress: q } = await import("./index-DAWldXKo.js"), F = (g = this.caipNetworks) == null ? void 0 : g.filter((B) => B.chainNamespace === "eip155").map((B) => B.id);
          c.chains = (C = this.caipNetworks) == null ? void 0 : C.filter((B) => B.chainNamespace === "eip155").map((B) => B.chainId);
          const K = await i.authenticate({
            nonce: await p.getNonce(),
            methods: [...dk],
            ...c,
            chains: F
          }), T = (A = K == null ? void 0 : K.auths) == null ? void 0 : A[0];
          if (T) {
            const { p: B, s: O } = T, j = N(B.iss), G = q(B.iss);
            G && j && P.setSession({
              address: G,
              chainId: parseInt(j, 10)
            });
            try {
              const Q = i.client.formatAuthMessage({
                request: B,
                iss: B.iss
              });
              await P.verifyMessage({
                message: Q,
                signature: O.s,
                cacao: T
              });
            } catch (Q) {
              throw console.error("Error verifying message", Q), await i.disconnect().catch(console.error), await P.signOut().catch(console.error), Q;
            }
          }
        }
        const f = Number(je.caipNetworkIdToNumber((I = (k = this.appKit) == null ? void 0 : k.getCaipNetwork()) == null ? void 0 : I.id));
        await el(this.wagmiConfig, { connector: a, chainId: f });
      },
      connectExternal: async ({ id: a, provider: i, info: c }) => {
        var d, p, f, m;
        if (!this.wagmiConfig)
          throw new Error("networkControllerClient:getApprovedCaipNetworksData - wagmiConfig is undefined");
        const l = this.wagmiConfig.connectors.find((h) => h.id === a);
        if (!l)
          throw new Error("connectionControllerClient:connectExternal - connector is undefined");
        (d = this.appKit) == null || d.setClientId(null), i && c && l.id === me.EIP6963_CONNECTOR_ID && ((p = l.setEip6963Wallet) == null || p.call(l, { provider: i, info: c }));
        const u = Number(je.caipNetworkIdToNumber((m = (f = this.appKit) == null ? void 0 : f.getCaipNetwork()) == null ? void 0 : m.id));
        await el(this.wagmiConfig, { connector: l, chainId: u });
      },
      checkInstalled: (a) => {
        var c;
        const i = (c = this.appKit) == null ? void 0 : c.getConnectors().find((l) => l.type === "INJECTED");
        return a ? i && window != null && window.ethereum ? a.some((l) => {
          var u;
          return !!((u = window.ethereum) != null && u[String(l)]);
        }) : !1 : !!window.ethereum;
      },
      disconnect: async () => {
        var a, i, c, l, u;
        if (await ng(this.wagmiConfig), (c = (i = (a = this.options) == null ? void 0 : a.siweConfig) == null ? void 0 : i.options) != null && c.signOutOnDisconnect) {
          const { SIWEController: d } = await import("./index-DAWldXKo.js");
          await d.signOut();
        }
        Dn.removeItem(Rn.WALLET_ID), Dn.removeItem(Rn.CONNECTED_CONNECTOR), Dn.removeItem(Rn.WALLET_NAME), (l = this.appKit) == null || l.setClientId(null), this.syncAccount({
          address: void 0,
          chainId: void 0,
          connector: void 0,
          addresses: void 0,
          status: "disconnected"
        }), (u = this.appKit) == null || u.resetAccount("solana");
      },
      signMessage: async (a) => {
        var l;
        const i = ((l = this.appKit) == null ? void 0 : l.getCaipAddress()) || "", c = wl(i);
        return hg(this.wagmiConfig, { message: a, account: c });
      },
      estimateGas: async (a) => {
        if (a.chainNamespace && a.chainNamespace !== "eip155")
          throw new Error(`Invalid chain namespace - Expected eip155, got ${a.chainNamespace}`);
        try {
          return await rg(this.wagmiConfig, {
            account: a.address,
            to: a.to,
            data: a.data,
            type: "legacy"
          });
        } catch {
          return BigInt(0);
        }
      },
      sendTransaction: async (a) => {
        if (a.chainNamespace && a.chainNamespace !== "eip155")
          throw new Error(`Invalid chain namespace - Expected eip155, got ${a.chainNamespace}`);
        const { chainId: i } = kr(this.wagmiConfig), c = {
          account: a.address,
          to: a.to,
          value: a.value,
          gas: a.gas,
          gasPrice: a.gasPrice,
          data: a.data,
          chainId: i,
          type: "legacy"
        };
        await pg(this.wagmiConfig, c);
        const l = await fg(this.wagmiConfig, c);
        return await Cg(this.wagmiConfig, { hash: l, timeout: 25e3 }), l;
      },
      writeContract: async (a) => {
        var d, p, f, m;
        const i = ((d = this.appKit) == null ? void 0 : d.getCaipAddress()) || "", c = wl(i), l = Number(je.caipNetworkIdToNumber((f = (p = this.appKit) == null ? void 0 : p.getCaipNetwork()) == null ? void 0 : f.id));
        return await Ag(this.wagmiConfig, {
          chain: (m = this.wagmiChains) == null ? void 0 : m[l],
          chainId: l,
          address: a.tokenAddress,
          account: c,
          abi: a.abi,
          functionName: a.method,
          args: [a.receiverAddress, a.tokenAmount]
        });
      },
      getEnsAddress: async (a) => {
        var i, c, l;
        try {
          if (!this.wagmiConfig)
            throw new Error("networkControllerClient:getApprovedCaipNetworksData - wagmiConfig is undefined");
          const u = Number(je.caipNetworkIdToNumber((c = (i = this.appKit) == null ? void 0 : i.getCaipNetwork()) == null ? void 0 : c.id));
          let d = !1, p = !1;
          return jf(a) && (p = await ((l = this.appKit) == null ? void 0 : l.resolveReownName(a)) || !1), u === 1 && (d = await ug(this.wagmiConfig, {
            name: El(a),
            chainId: u
          })), d || p || !1;
        } catch {
          return !1;
        }
      },
      getEnsAvatar: async (a) => {
        var l, u;
        const i = Number(je.caipNetworkIdToNumber((u = (l = this.appKit) == null ? void 0 : l.getCaipNetwork()) == null ? void 0 : u.id));
        return i !== Ia.id ? !1 : await ol(this.wagmiConfig, {
          name: El(a),
          chainId: i
        }) || !1;
      },
      parseUnits: mo,
      formatUnits: Ce
    }, gc.state.chains.set(this.chainNamespace, {
      chainNamespace: this.chainNamespace,
      connectionControllerClient: this.connectionControllerClient,
      networkControllerClient: this.networkControllerClient,
      adapterType: this.adapterType,
      caipNetworks: this.caipNetworks
    }), this.syncConnectors(this.wagmiConfig.connectors), this.syncAuthConnector((r = this.wagmiConfig) == null ? void 0 : r.connectors.find((a) => a.id === me.AUTH_CONNECTOR_ID)), this.syncRequestedNetworks(this.caipNetworks), xg(this.wagmiConfig, {
      onChange: (a) => {
        this.syncConnectors(a), this.syncAuthConnector(a.find((i) => i.id === me.AUTH_CONNECTOR_ID));
      }
    }), gg(this.wagmiConfig, {
      onChange: (a) => {
        this.syncAccount(a);
      }
    }), (s = this.appKit) == null || s.setEIP6963Enabled(n.enableEIP6963 !== !1), (o = this.appKit) == null || o.subscribeShouldUpdateToAddress((a) => {
      var i;
      if (a) {
        const l = (i = cg(this.wagmiConfig)[0]) == null ? void 0 : i.connector;
        l && bg(this.wagmiConfig, {
          connector: l
        }).then((u) => this.syncAccount({
          address: a,
          isConnected: !0,
          addresses: u.accounts,
          connector: l,
          chainId: u.chainId,
          status: "connected"
        }));
      }
    });
  }
  subscribeState(t) {
    var n;
    return (n = this.appKit) == null ? void 0 : n.subscribeState((r) => t({
      ...r,
      selectedNetworkId: Number(je.caipNetworkIdToNumber(r.selectedNetworkId))
    }));
  }
  syncRequestedNetworks(t) {
    Array.from(new Set(t.map((r) => r.chainNamespace))).filter((r) => !!r).forEach((r) => {
      var s;
      (s = this.appKit) == null || s.setRequestedCaipNetworks(t.filter((o) => o.chainNamespace === r), r);
    });
  }
  async syncAccount({ address: t, chainId: n, connector: r, addresses: s, status: o }) {
    var i, c, l, u, d, p, f, m, h, b, y, w, v, E, g, C;
    const a = gc.state.activeCaipAddress;
    if (o === "disconnected" && !a) {
      (i = this.appKit) == null || i.resetAccount(this.chainNamespace), (c = this.appKit) == null || c.resetWcConnection(), (l = this.appKit) == null || l.resetNetwork(), (u = this.appKit) == null || u.setAllAccounts([], this.chainNamespace), Dn.removeItem(Rn.WALLET_ID);
      return;
    }
    if (this.wagmiConfig && r) {
      if (r && r.name === "WalletConnect" && r.getProvider && t) {
        const A = n || Number(je.caipNetworkIdToNumber((p = (d = this.appKit) == null ? void 0 : d.getCaipNetwork()) == null ? void 0 : p.id)), k = await r.getProvider(), I = ((f = k == null ? void 0 : k.session) == null ? void 0 : f.namespaces) || {}, P = I ? Object.keys(I) : [], N = (m = this.appKit) == null ? void 0 : m.getPreferredAccountType();
        P.forEach((q) => {
          var T, B, O;
          const F = q, K = (T = I == null ? void 0 : I[q]) == null ? void 0 : T.accounts[0];
          xc.setProvider(F, k), xc.setProviderId(F, "walletConnect"), (B = this.appKit) == null || B.setPreferredAccountType(N, F), (O = this.appKit) == null || O.setCaipAddress(K, F);
        }), ((b = (h = this.appKit) == null ? void 0 : h.getCaipNetwork()) == null ? void 0 : b.chainNamespace) !== "solana" && (this.syncNetwork(t, A, !0), await Promise.all([
          this.syncProfile(t, A),
          this.syncBalance(t, A),
          this.syncConnectedWalletInfo(r),
          (y = this.appKit) == null ? void 0 : y.setApprovedCaipNetworksData(this.chainNamespace)
        ]));
      } else if (o === "connected" && t && n) {
        const A = `eip155:${n}:${t}`;
        this.syncNetwork(t, n, !0), (w = this.appKit) == null || w.setCaipAddress(A, this.chainNamespace), await Promise.all([
          this.syncProfile(t, n),
          this.syncBalance(t, n),
          this.syncConnectedWalletInfo(r),
          (v = this.appKit) == null ? void 0 : v.setApprovedCaipNetworksData(this.chainNamespace)
        ]), r && this.syncConnectedWalletInfo(r), !((r == null ? void 0 : r.id) === me.AUTH_CONNECTOR_ID) && (s != null && s.length) && ((E = this.appKit) == null || E.setAllAccounts(s.map((I) => ({ address: I, type: "eoa" })), this.chainNamespace));
      } else if (o === "reconnecting") {
        (g = this.appKit) == null || g.setLoading(!0);
        const k = lg(this.wagmiConfig).find((I) => I.id === r.id);
        k && (await al(this.wagmiConfig, {
          connectors: [k]
        }), (C = this.appKit) == null || C.setLoading(!1));
      }
    }
  }
  async syncNetwork(t, n, r) {
    var o, a, i, c, l, u;
    const s = this.caipNetworks.find((d) => d.chainId === n);
    if (s && n && ((i = this.appKit) == null || i.setCaipNetwork({
      chainId: s.chainId,
      id: s.id,
      name: s.name || "",
      imageId: Ct.NetworkImageIds[s.chainId],
      imageUrl: (a = (o = this.options) == null ? void 0 : o.chainImages) == null ? void 0 : a[s.chainId],
      chainNamespace: this.chainNamespace,
      currency: (s == null ? void 0 : s.currency) || "",
      explorerUrl: (s == null ? void 0 : s.explorerUrl) || "",
      rpcUrl: (s == null ? void 0 : s.rpcUrl) || ""
    }), r && t && n)) {
      const d = `eip155:${n}:${t}`;
      if ((c = this.appKit) == null || c.setCaipAddress(d, this.chainNamespace), s != null && s.explorerUrl) {
        const p = `${s.explorerUrl}/address/${t}`;
        (l = this.appKit) == null || l.setAddressExplorerUrl(p, this.chainNamespace);
      } else
        (u = this.appKit) == null || u.setAddressExplorerUrl(void 0, this.chainNamespace);
      await this.syncBalance(t, n);
    }
  }
  async syncReownName(t) {
    var n, r, s;
    if (!this.appKit)
      throw new Error("syncReownName - appKit is undefined");
    try {
      const o = await this.appKit.getReownName(t);
      if (o[0]) {
        const a = o[0];
        (n = this.appKit) == null || n.setProfileName(a.name, this.chainNamespace);
      } else
        (r = this.appKit) == null || r.setProfileName(null, this.chainNamespace);
    } catch {
      (s = this.appKit) == null || s.setProfileName(null, this.chainNamespace);
    }
  }
  async syncProfile(t, n) {
    var r, s, o, a, i, c;
    if (!this.appKit)
      throw new Error("syncProfile - appKit is undefined");
    try {
      const { name: l, avatar: u } = await this.appKit.fetchIdentity({
        address: t
      });
      (r = this.appKit) == null || r.setProfileName(l, this.chainNamespace), (s = this.appKit) == null || s.setProfileImage(u, this.chainNamespace), l || await this.syncReownName(t);
    } catch {
      if (n === Ia.id) {
        const l = await dg(this.wagmiConfig, { address: t, chainId: n });
        if (l) {
          (o = this.appKit) == null || o.setProfileName(l, this.chainNamespace);
          const u = await ol(this.wagmiConfig, {
            name: l,
            chainId: n
          });
          u && ((a = this.appKit) == null || a.setProfileImage(u, this.chainNamespace));
        } else
          await this.syncReownName(t), (i = this.appKit) == null || i.setProfileImage(null, this.chainNamespace);
      } else
        await this.syncReownName(t), (c = this.appKit) == null || c.setProfileImage(null, this.chainNamespace);
    }
  }
  async syncBalance(t, n) {
    var s, o, a, i, c;
    const r = this.caipNetworks.find((l) => l.chainId === n);
    if (r && this.wagmiConfig) {
      const l = await ig(this.wagmiConfig, {
        address: t,
        chainId: n,
        token: (a = (o = (s = this.options) == null ? void 0 : s.tokens) == null ? void 0 : o[r.id]) == null ? void 0 : a.address
      });
      (i = this.appKit) == null || i.setBalance(l.formatted, l.symbol, this.chainNamespace);
      return;
    }
    (c = this.appKit) == null || c.setBalance(void 0, void 0, this.chainNamespace);
  }
  async syncConnectedWalletInfo(t) {
    var n, r, s, o;
    if (!t)
      throw Error("syncConnectedWalletInfo - connector is undefined");
    if (t.id === me.WALLET_CONNECT_CONNECTOR_ID && t.getProvider) {
      const a = await t.getProvider();
      a.session && ((r = this.appKit) == null || r.setConnectedWalletInfo({
        ...a.session.peer.metadata,
        name: a.session.peer.metadata.name,
        icon: (n = a.session.peer.metadata.icons) == null ? void 0 : n[0]
      }, this.chainNamespace));
    } else {
      const a = (s = this.appKit) == null ? void 0 : s.getConnectors().find((i) => i.id === t.id);
      (o = this.appKit) == null || o.setConnectedWalletInfo({
        name: t.name,
        icon: t.icon || this.appKit.getConnectorImage(a)
      }, this.chainNamespace);
    }
  }
  syncConnectors(t) {
    var a;
    const n = t.map((i) => ({ ...i, chain: this.chainNamespace })), r = /* @__PURE__ */ new Set(), s = n.filter((i) => {
      const c = r.has(i.id);
      return r.add(i.id), !c;
    }), o = [];
    s.forEach(({ id: i, name: c, type: l, icon: u }) => {
      var p, f;
      me.AUTH_CONNECTOR_ID === i || o.push({
        id: i,
        explorerId: Ct.ConnectorExplorerIds[i],
        imageUrl: ((f = (p = this.options) == null ? void 0 : p.connectorImages) == null ? void 0 : f[i]) ?? u,
        name: Ct.ConnectorNamesMap[i] ?? c,
        imageId: Ct.ConnectorImageIds[i],
        type: Ct.ConnectorTypesMap[l] ?? "EXTERNAL",
        info: {
          rdns: i
        },
        chain: this.chainNamespace
      });
    }), (a = this.appKit) == null || a.setConnectors(o);
  }
  async syncAuthConnector(t) {
    var r;
    const n = t;
    if (n) {
      const s = await n.getProvider();
      (r = this.appKit) == null || r.addConnector({
        id: me.AUTH_CONNECTOR_ID,
        type: "AUTH",
        name: "w3mAuth",
        provider: s,
        chain: this.chainNamespace
      }), this.initAuthConnectorListeners(t);
    }
  }
  async initAuthConnectorListeners(t) {
    t && (await this.listenAuthConnector(t), await this.listenModal(t));
  }
  async listenAuthConnector(t, n = !1) {
    var r, s;
    if (n || typeof window < "u" && t) {
      (r = this.appKit) == null || r.setLoading(!0);
      const o = await t.getProvider(), a = o.getLoginEmailUsed();
      (s = this.appKit) == null || s.setLoading(a), o.onRpcRequest((i) => {
        var c, l;
        Io.checkIfRequestExists(i) ? Io.checkIfRequestIsSafe(i) || (c = this.appKit) == null || c.handleUnsafeRPCRequest() : ((l = this.appKit) == null || l.open(), console.error(Cc.RPC_METHOD_NOT_ALLOWED_MESSAGE, {
          method: i.method
        }), setTimeout(() => {
          var u;
          (u = this.appKit) == null || u.showErrorMessage(Cc.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE);
        }, 300), o.rejectRpcRequests());
      }), o.onRpcError(() => {
        var c, l, u, d;
        ((c = this.appKit) == null ? void 0 : c.isOpen()) && ((l = this.appKit) != null && l.isTransactionStackEmpty() ? (u = this.appKit) == null || u.close() : (d = this.appKit) == null || d.popTransactionStack(!0));
      }), o.onRpcSuccess((i, c) => {
        var u, d, p;
        Io.checkIfRequestIsSafe(c) || ((u = this.appKit) != null && u.isTransactionStackEmpty() ? (d = this.appKit) == null || d.close() : (p = this.appKit) == null || p.popTransactionStack());
      }), o.onNotConnected(() => {
        var u, d, p;
        const i = (u = this.appKit) == null ? void 0 : u.getIsConnectedState(), l = Dn.getItem(Rn.CONNECTED_CONNECTOR) === "AUTH";
        !i && l && ((d = this.appKit) == null || d.setCaipAddress(void 0, this.chainNamespace), (p = this.appKit) == null || p.setLoading(!1));
      }), o.onIsConnected(() => {
        o.connect();
      }), o.onConnect((i) => {
        var l, u, d, p, f;
        const c = `eip155:${i.chainId}:${i.address}`;
        (l = this.appKit) == null || l.setCaipAddress(c, this.chainNamespace), (u = this.appKit) == null || u.setSmartAccountDeployed(!!i.smartAccountDeployed, this.chainNamespace), (d = this.appKit) == null || d.setPreferredAccountType(i.preferredAccountType, this.chainNamespace), (p = this.appKit) == null || p.setAllAccounts(i.accounts || [
          {
            address: i.address,
            type: i.preferredAccountType || "eoa"
          }
        ], this.chainNamespace), Hl.setConnectedConnector("AUTH"), (f = this.appKit) == null || f.setLoading(!1);
      }), o.onGetSmartAccountEnabledNetworks((i) => {
        var c;
        (c = this.appKit) == null || c.setSmartAccountEnabledNetworks(i, this.chainNamespace);
      }), o.onSetPreferredAccount(({ address: i, type: c }) => {
        var l;
        i && ((l = this.appKit) == null || l.setPreferredAccountType(c, this.chainNamespace), this.wagmiConfig && al(this.wagmiConfig, { connectors: [t] }));
      });
    }
  }
  async listenModal(t) {
    const n = await t.getProvider();
    this.subscribeState((r) => {
      r.open || n.rejectRpcRequests();
    });
  }
}
const fk = "@reown/appkit-wagmi", hk = "1.0.4", mk = "module", bk = "./dist/esm/exports/index.js", yk = "./dist/types/exports/index.d.ts", wk = [
  "dist",
  "!tsconfig.tsbuildinfo"
], gk = {
  ".": {
    types: "./dist/types/exports/index.d.ts",
    import: "./dist/esm/exports/index.js",
    default: "./dist/esm/exports/index.js"
  },
  "./react": {
    types: "./dist/types/exports/react/index.d.ts",
    import: "./dist/esm/exports/react/index.js",
    default: "./dist/esm/exports/react/index.js"
  },
  "./react/config": {
    types: "./dist/types/exports/react/config.d.ts",
    import: "./dist/esm/exports/react/config.js",
    default: "./dist/esm/exports/react/config.js"
  },
  "./vue": {
    types: "./dist/types/exports/vue.d.ts",
    import: "./dist/esm/exports/vue.js",
    default: "./dist/esm/exports/vue.js"
  }
}, xk = {
  "*": {
    react: [
      "./dist/types/exports/react/index.d.ts"
    ],
    "react/config": [
      "./dist/types/exports/react/config.d.ts"
    ],
    vue: [
      "./dist/types/exports/vue.d.ts"
    ]
  }
}, Ck = {
  "build:clean": "rm -rf dist",
  build: "tsc --build",
  watch: "tsc --watch",
  typecheck: "tsc --noEmit",
  lint: "eslint . --ext .js,.jsx,.ts,.tsx"
}, Ak = {
  "@walletconnect/utils": "2.16.1",
  "@reown/appkit-polyfills": "workspace:*",
  "@reown/appkit-adapter-wagmi": "workspace:*",
  "@reown/appkit": "workspace:*",
  "@reown/appkit-wallet": "workspace:*",
  "@reown/appkit-common": "workspace:*",
  "@reown/appkit-utils": "workspace:*",
  "@reown/appkit-siwe": "workspace:*"
}, vk = {
  "@wagmi/connectors": "5.1.9",
  "@wagmi/core": "2.13.4",
  react: "18.2.0",
  "react-dom": "18.2.0",
  viem: "2.21.4",
  vue: "3.4.3",
  wagmi: "2.12.9",
  vitest: "2.0.5"
}, Ek = {
  "@wagmi/connectors": ">=4",
  "@wagmi/core": ">=2.0.0",
  react: ">=17",
  "react-dom": ">=17",
  viem: ">=2.0.0",
  vue: ">=3",
  wagmi: ">=2.0.0"
}, kk = {
  react: {
    optional: !0
  },
  "react-dom": {
    optional: !0
  },
  vue: {
    optional: !0
  }
}, Ik = "Reown <support@reown.com> (https://reown.com)", Sk = "Apache-2.0", Bk = "https://github.com/WalletConnect/web3modal", Tk = {
  type: "git",
  url: "git+https://github.com/WalletConnect/web3modal.git"
}, Uk = {
  url: "https://github.com/WalletConnect/web3modal/issues"
}, Pk = {
  name: fk,
  version: hk,
  type: mk,
  main: bk,
  types: yk,
  files: wk,
  exports: gk,
  typesVersions: xk,
  scripts: Ck,
  dependencies: Ak,
  devDependencies: vk,
  peerDependencies: Ek,
  peerDependenciesMeta: kk,
  author: Ik,
  license: Sk,
  homepage: Bk,
  repository: Tk,
  bugs: Uk
};
function Nk(e) {
  const t = new pk({
    networks: e.networks,
    projectId: e.projectId
  });
  return new qf({
    ...e,
    sdkVersion: `html-wagmi-${Pk.version}`,
    adapters: [t]
  });
}
const i3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  authConnector: kf,
  createAppKit: Nk
}, Symbol.toStringTag, { value: "Module" }));
function $(e, t, n) {
  const r = e[t.name];
  if (typeof r == "function")
    return r;
  const s = e[n];
  return typeof s == "function" ? s : (o) => t(e, o);
}
async function Mk(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, bt, "call")(r);
}
const Vn = "2.13.4", Fk = () => `@wagmi/core@${Vn}`;
var If = function(e, t, n, r) {
  if (n === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}, Ds, Sf;
class Se extends Error {
  get docsBaseUrl() {
    return "https://wagmi.sh/core";
  }
  get version() {
    return Fk();
  }
  constructor(t, n = {}) {
    var o;
    super(), Ds.add(this), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "WagmiCoreError"
    });
    const r = n.cause instanceof Se ? n.cause.details : (o = n.cause) != null && o.message ? n.cause.message : n.details, s = n.cause instanceof Se && n.cause.docsPath || n.docsPath;
    this.message = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...s ? [
        `Docs: ${this.docsBaseUrl}${s}.html${n.docsSlug ? `#${n.docsSlug}` : ""}`
      ] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: ${this.version}`
    ].join(`
`), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.shortMessage = t;
  }
  walk(t) {
    return If(this, Ds, "m", Sf).call(this, this, t);
  }
}
Ds = /* @__PURE__ */ new WeakSet(), Sf = function e(t, n) {
  return n != null && n(t) ? t : t.cause ? If(this, Ds, "m", e).call(this, t.cause, n) : t;
};
class Le extends Se {
  constructor() {
    super("Chain not configured."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainNotConfiguredError"
    });
  }
}
class Bf extends Se {
  constructor() {
    super("Connector already connected."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ConnectorAlreadyConnectedError"
    });
  }
}
class Ao extends Se {
  constructor() {
    super("Connector not connected."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ConnectorNotConnectedError"
    });
  }
}
class Dk extends Se {
  constructor() {
    super("Connector not found."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ConnectorNotFoundError"
    });
  }
}
class Tf extends Se {
  constructor({ address: t, connector: n }) {
    super(`Account "${t}" not found for connector "${n.name}".`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ConnectorAccountNotFoundError"
    });
  }
}
class Uf extends Se {
  constructor({ connectionChainId: t, connectorChainId: n }) {
    super(`The current chain of the connector (id: ${n}) does not match the connection's chain (id: ${t}).`, {
      metaMessages: [
        `Current Chain ID:  ${n}`,
        `Expected Chain ID: ${t}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ConnectorChainMismatchError"
    });
  }
}
async function Rk(e, t) {
  var r;
  let n;
  if (typeof t.connector == "function" ? n = e._internal.connectors.setup(t.connector) : n = t.connector, n.uid === e.state.current)
    throw new Bf();
  try {
    e.setState((a) => ({ ...a, status: "connecting" })), n.emitter.emit("message", { type: "connecting" });
    const s = await n.connect({ chainId: t.chainId }), o = s.accounts;
    return n.emitter.off("connect", e._internal.events.connect), n.emitter.on("change", e._internal.events.change), n.emitter.on("disconnect", e._internal.events.disconnect), await ((r = e.storage) == null ? void 0 : r.setItem("recentConnectorId", n.id)), e.setState((a) => ({
      ...a,
      connections: new Map(a.connections).set(n.uid, {
        accounts: o,
        chainId: s.chainId,
        connector: n
      }),
      current: n.uid,
      status: "connected"
    })), { accounts: o, chainId: s.chainId };
  } catch (s) {
    throw e.setState((o) => ({
      ...o,
      // Keep existing connector connected in case of error
      status: o.current ? "connected" : "disconnected"
    })), s;
  }
}
async function _e(e, t = {}) {
  let n;
  if (t.connector) {
    const { connector: l } = t, [u, d] = await Promise.all([
      l.getAccounts(),
      l.getChainId()
    ]);
    n = {
      accounts: u,
      chainId: d,
      connector: l
    };
  } else
    n = e.state.connections.get(e.state.current);
  if (!n)
    throw new Ao();
  const r = t.chainId ?? n.chainId, s = await n.connector.getChainId();
  if (s !== n.chainId)
    throw new Uf({
      connectionChainId: n.chainId,
      connectorChainId: s
    });
  const o = n.connector;
  if (o.getClient)
    return o.getClient({ chainId: r });
  const a = de(t.account ?? n.accounts[0]);
  a.address = H(a.address);
  const i = e.chains.find((l) => l.id === r), c = await n.connector.getProvider({ chainId: r });
  if (t.account && !n.accounts.some((l) => l.toLowerCase() === a.address.toLowerCase()))
    throw new Tf({
      address: a.address,
      connector: o
    });
  return gt({
    account: a,
    chain: i,
    name: "Connector Client",
    transport: (l) => vr(c)({ ...l, retryCount: 0 })
  });
}
async function Ok(e, t) {
  const { account: n, chainId: r, connector: s, ...o } = t;
  let a;
  return typeof n == "object" && n.type === "local" ? a = e.getClient({ chainId: r }) : a = await _e(e, { account: n, chainId: r, connector: s }), await $(a, Vu, "deployContract")({
    ...o,
    ...n ? { account: n } : {},
    chain: r ? { id: r } : null
  });
}
async function Lk(e, t = {}) {
  var s, o;
  let n;
  if (t.connector)
    n = t.connector;
  else {
    const { connections: a, current: i } = e.state, c = a.get(i);
    n = c == null ? void 0 : c.connector;
  }
  const r = e.state.connections;
  n && (await n.disconnect(), n.emitter.off("change", e._internal.events.change), n.emitter.off("disconnect", e._internal.events.disconnect), n.emitter.on("connect", e._internal.events.connect), r.delete(n.uid)), e.setState((a) => {
    if (r.size === 0)
      return {
        ...a,
        connections: /* @__PURE__ */ new Map(),
        current: null,
        status: "disconnected"
      };
    const i = r.values().next().value;
    return {
      ...a,
      connections: new Map(r),
      current: i.connector.uid
    };
  });
  {
    const a = e.state.current;
    if (!a)
      return;
    const i = (s = e.state.connections.get(a)) == null ? void 0 : s.connector;
    if (!i)
      return;
    await ((o = e.storage) == null ? void 0 : o.setItem("recentConnectorId", i.id));
  }
}
async function zk(e, t) {
  const { chainId: n, connector: r, ...s } = t;
  let o;
  t.account ? o = t.account : o = (await _e(e, {
    account: t.account,
    chainId: n,
    connector: r
  })).account;
  const a = e.getClient({ chainId: n });
  return $(a, $t, "estimateGas")({ ...s, account: o });
}
function ar(e) {
  return typeof e == "number" ? e : e === "wei" ? 0 : Math.abs(Ya[e]);
}
async function _k(e, t = {}) {
  const { chainId: n, formatUnits: r = "gwei", ...s } = t, o = e.getClient({ chainId: n }), a = $(o, Du, "estimateFeesPerGas"), { gasPrice: i, maxFeePerGas: c, maxPriorityFeePerGas: l } = await a({
    ...s,
    chain: o.chain
  }), u = ar(r);
  return {
    formatted: {
      gasPrice: i ? Ce(i, u) : void 0,
      maxFeePerGas: c ? Ce(c, u) : void 0,
      maxPriorityFeePerGas: l ? Ce(l, u) : void 0
    },
    gasPrice: i,
    maxFeePerGas: c,
    maxPriorityFeePerGas: l
  };
}
async function Hk(e, t = {}) {
  const { chainId: n } = t, r = e.getClient({ chainId: n });
  return $(r, Mu, "estimateMaxPriorityFeePerGas")({ chain: r.chain });
}
function Ir(e) {
  const t = e.state.current, n = e.state.connections.get(t), r = n == null ? void 0 : n.accounts, s = r == null ? void 0 : r[0], o = e.chains.find((i) => i.id === (n == null ? void 0 : n.chainId)), a = e.state.status;
  switch (a) {
    case "connected":
      return {
        address: s,
        addresses: r,
        chain: o,
        chainId: n == null ? void 0 : n.chainId,
        connector: n == null ? void 0 : n.connector,
        isConnected: !0,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !1,
        status: a
      };
    case "reconnecting":
      return {
        address: s,
        addresses: r,
        chain: o,
        chainId: n == null ? void 0 : n.chainId,
        connector: n == null ? void 0 : n.connector,
        isConnected: !!s,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !0,
        status: a
      };
    case "connecting":
      return {
        address: s,
        addresses: r,
        chain: o,
        chainId: n == null ? void 0 : n.chainId,
        connector: n == null ? void 0 : n.connector,
        isConnected: !1,
        isConnecting: !0,
        isDisconnected: !1,
        isReconnecting: !1,
        status: a
      };
    case "disconnected":
      return {
        address: void 0,
        addresses: void 0,
        chain: void 0,
        chainId: void 0,
        connector: void 0,
        isConnected: !1,
        isConnecting: !1,
        isDisconnected: !0,
        isReconnecting: !1,
        status: a
      };
  }
}
async function Pf(e, t) {
  const { allowFailure: n = !0, chainId: r, contracts: s, ...o } = t, a = e.getClient({ chainId: r });
  return $(a, Pi, "multicall")({
    allowFailure: n,
    contracts: s,
    ...o
  });
}
function Nf(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, Ie, "readContract")(r);
}
async function Rs(e, t) {
  var i;
  const { allowFailure: n = !0, blockNumber: r, blockTag: s, ...o } = t, a = t.contracts;
  try {
    const c = {};
    for (const [p, f] of a.entries()) {
      const m = f.chainId ?? e.state.chainId;
      c[m] || (c[m] = []), (i = c[m]) == null || i.push({ contract: f, index: p });
    }
    const l = () => Object.entries(c).map(([p, f]) => Pf(e, {
      ...o,
      allowFailure: n,
      blockNumber: r,
      blockTag: s,
      chainId: Number.parseInt(p),
      contracts: f.map(({ contract: m }) => m)
    })), u = (await Promise.all(l())).flat(), d = Object.values(c).flatMap((p) => p.map(({ index: f }) => f));
    return u.reduce((p, f, m) => (p && (p[d[m]] = f), p), []);
  } catch (c) {
    if (c instanceof Ge)
      throw c;
    const l = () => a.map((u) => Nf(e, { ...u, blockNumber: r, blockTag: s }));
    return n ? (await Promise.allSettled(l())).map((u) => u.status === "fulfilled" ? { result: u.value, status: "success" } : { error: u.reason, result: void 0, status: "failure" }) : await Promise.all(l());
  }
}
async function kl(e, t) {
  const { address: n, blockNumber: r, blockTag: s, chainId: o, token: a, unit: i = "ether" } = t;
  if (a)
    try {
      return Il(e, {
        balanceAddress: n,
        chainId: o,
        symbolType: "string",
        tokenAddress: a
      });
    } catch (p) {
      if (p instanceof Ge) {
        const f = await Il(e, {
          balanceAddress: n,
          chainId: o,
          symbolType: "bytes32",
          tokenAddress: a
        }), m = at(se(f.symbol, { dir: "right" }));
        return { ...f, symbol: m };
      }
      throw p;
    }
  const c = e.getClient({ chainId: o }), u = await $(c, Ws, "getBalance")(r ? { address: n, blockNumber: r } : { address: n, blockTag: s }), d = e.chains.find((p) => p.id === o) ?? c.chain;
  return {
    decimals: d.nativeCurrency.decimals,
    formatted: Ce(u, ar(i)),
    symbol: d.nativeCurrency.symbol,
    value: u
  };
}
async function Il(e, t) {
  const { balanceAddress: n, chainId: r, symbolType: s, tokenAddress: o, unit: a } = t, i = {
    abi: [
      {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [{ type: "address" }],
        outputs: [{ type: "uint256" }]
      },
      {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint8" }]
      },
      {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: s }]
      }
    ],
    address: o
  }, [c, l, u] = await Rs(e, {
    allowFailure: !1,
    contracts: [
      {
        ...i,
        functionName: "balanceOf",
        args: [n],
        chainId: r
      },
      { ...i, functionName: "decimals", chainId: r },
      { ...i, functionName: "symbol", chainId: r }
    ]
  }), d = Ce(c ?? "0", ar(a ?? l));
  return { decimals: l, formatted: d, symbol: u, value: c };
}
async function $k(e, t = {}) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return {
    ...await $(s, We, "getBlock")(r),
    chainId: s.chain.id
  };
}
function Sl(e, t = {}) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, Bn, "getBlockNumber")(r);
}
function jk(e, t = {}) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, Hd, "getBlockTransactionCount")(r);
}
async function qk(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, ma, "getBytecode")(r);
}
function Gk(e) {
  return e.state.chainId;
}
function pt(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    let n, r;
    if (Array.isArray(e) && Array.isArray(t)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!pt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const s = Object.keys(e);
    if (n = s.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, s[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const o = s[r];
      if (o && !pt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
let Jo = [];
function Kk(e) {
  const t = e.chains;
  return pt(Jo, t) ? Jo : (Jo = t, t);
}
function ac(e, t = {}) {
  let n;
  try {
    n = e.getClient(t);
  } catch {
  }
  return n;
}
let rs = [];
function Mf(e) {
  const t = [...e.state.connections.values()];
  return e.state.status === "reconnecting" || pt(rs, t) ? rs : (rs = t, t);
}
let Xo = [];
function Qk(e) {
  const t = e.connectors;
  return pt(Xo, t) ? Xo : (Xo = t, t);
}
function Bl(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, Ci, "getEnsAddress")(r);
}
function Tl(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, Ei, "getEnsAvatar")(r);
}
function Ul(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, ki, "getEnsName")(r);
}
function Pl(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, Rd, "getEnsResolver")(r);
}
function Vk(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, vi, "getEnsText")(r);
}
function Wk(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, $d, "getFeeHistory")(r);
}
function Zk(e, t = {}) {
  const { chainId: n } = t, r = e.getClient({ chainId: n });
  return $(r, Vs, "getGasPrice")({});
}
async function Jk(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, Ap, "getProof")(r);
}
function Ff(e, t = {}) {
  const n = ac(e, t);
  return n == null ? void 0 : n.extend(Yi);
}
async function Xk(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, jd, "getStorageAt")(r);
}
async function Nl(e, t) {
  const { address: n, chainId: r, formatUnits: s = 18 } = t;
  function o(a) {
    return [
      {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint8" }]
      },
      {
        type: "function",
        name: "name",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: a }]
      },
      {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: a }]
      },
      {
        type: "function",
        name: "totalSupply",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint256" }]
      }
    ];
  }
  try {
    const a = o("string"), i = { address: n, abi: a, chainId: r }, [c, l, u, d] = await Rs(e, {
      allowFailure: !0,
      contracts: [
        { ...i, functionName: "decimals" },
        { ...i, functionName: "name" },
        { ...i, functionName: "symbol" },
        { ...i, functionName: "totalSupply" }
      ]
    });
    if (l.error instanceof Ge)
      throw l.error;
    if (u.error instanceof Ge)
      throw u.error;
    if (c.error)
      throw c.error;
    if (d.error)
      throw d.error;
    return {
      address: n,
      decimals: c.result,
      name: l.result,
      symbol: u.result,
      totalSupply: {
        formatted: Ce(d.result, ar(s)),
        value: d.result
      }
    };
  } catch (a) {
    if (a instanceof Ge) {
      const i = o("bytes32"), c = { address: n, abi: i, chainId: r }, [l, u, d, p] = await Rs(e, {
        allowFailure: !1,
        contracts: [
          { ...c, functionName: "decimals" },
          { ...c, functionName: "name" },
          { ...c, functionName: "symbol" },
          { ...c, functionName: "totalSupply" }
        ]
      });
      return {
        address: n,
        decimals: l,
        name: at(se(u, { dir: "right" })),
        symbol: at(se(d, { dir: "right" })),
        totalSupply: {
          formatted: Ce(p, ar(s)),
          value: p
        }
      };
    }
    throw a;
  }
}
function Ml(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, Tn, "getTransaction")(r);
}
function Yk(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, qd, "getTransactionConfirmations")(r);
}
async function e8(e, t) {
  const { address: n, blockNumber: r, blockTag: s, chainId: o } = t, a = e.getClient({ chainId: o });
  return $(a, Zs, "getTransactionCount")(r ? { address: n, blockNumber: r } : { address: n, blockTag: s });
}
async function t8(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, Is, "getTransactionReceipt")(r);
}
async function n8(e, t = {}) {
  const n = await _e(e, t);
  return n.extend(Us), n.extend(Us);
}
async function r8(e, t) {
  const { account: n, chainId: r, ...s } = t, o = n ?? Ir(e).address, a = e.getClient({ chainId: r });
  return $(a, jt, "prepareTransactionRequest")({
    ...s,
    ...o ? { account: o } : {}
  });
}
let Yo = !1;
async function Df(e, t = {}) {
  var l, u;
  if (Yo)
    return [];
  Yo = !0, e.setState((d) => ({
    ...d,
    status: d.current ? "reconnecting" : "connecting"
  }));
  const n = [];
  if ((l = t.connectors) != null && l.length)
    for (const d of t.connectors) {
      let p;
      typeof d == "function" ? p = e._internal.connectors.setup(d) : p = d, n.push(p);
    }
  else
    n.push(...e.connectors);
  let r;
  try {
    r = await ((u = e.storage) == null ? void 0 : u.getItem("recentConnectorId"));
  } catch {
  }
  const s = {};
  for (const [, d] of e.state.connections)
    s[d.connector.id] = 1;
  r && (s[r] = 0);
  const o = Object.keys(s).length > 0 ? (
    // .toSorted()
    [...n].sort((d, p) => (s[d.id] ?? 10) - (s[p.id] ?? 10))
  ) : n;
  let a = !1;
  const i = [], c = [];
  for (const d of o) {
    const p = await d.getProvider().catch(() => {
    });
    if (!p || c.some((h) => h === p) || !await d.isAuthorized())
      continue;
    const m = await d.connect({ isReconnecting: !0 }).catch(() => null);
    m && (d.emitter.off("connect", e._internal.events.connect), d.emitter.on("change", e._internal.events.change), d.emitter.on("disconnect", e._internal.events.disconnect), e.setState((h) => {
      const b = new Map(a ? h.connections : /* @__PURE__ */ new Map()).set(d.uid, { accounts: m.accounts, chainId: m.chainId, connector: d });
      return {
        ...h,
        current: a ? h.current : d.uid,
        connections: b
      };
    }), i.push({
      accounts: m.accounts,
      chainId: m.chainId,
      connector: d
    }), c.push(p), a = !0);
  }
  return (e.state.status === "reconnecting" || e.state.status === "connecting") && (a ? e.setState((d) => ({ ...d, status: "connected" })) : e.setState((d) => ({
    ...d,
    connections: /* @__PURE__ */ new Map(),
    current: null,
    status: "disconnected"
  }))), Yo = !1, i;
}
async function s8(e, t) {
  const { account: n, chainId: r, connector: s, gas: o, ...a } = t;
  let i;
  typeof n == "object" && n.type === "local" ? i = e.getClient({ chainId: r }) : i = await _e(e, { account: n, chainId: r, connector: s });
  const { connector: c } = Ir(e), l = await (async () => {
    var p;
    if (!(!("data" in t) || !t.data) && !((p = s ?? c) != null && p.supportsSimulation) && o !== null)
      return o === void 0 ? $(i, $t, "estimateGas")({
        ...a,
        account: n,
        chain: r ? { id: r } : null
      }) : o;
  })();
  return await $(i, br, "sendTransaction")({
    ...a,
    ...n ? { account: n } : {},
    gas: l,
    chain: r ? { id: r } : null
  });
}
async function o8(e, t) {
  const { account: n, connector: r, ...s } = t;
  let o;
  return typeof n == "object" && n.type === "local" ? o = e.getClient() : o = await _e(e, { account: n, connector: r }), $(o, qi, "signMessage")({
    ...s,
    ...n ? { account: n } : {}
  });
}
async function a8(e, t) {
  const { account: n, connector: r, ...s } = t;
  let o;
  return typeof n == "object" && n.type === "local" ? o = e.getClient() : o = await _e(e, { account: n, connector: r }), $(o, vp, "signTypedData")({
    ...s,
    ...n ? { account: n } : {}
  });
}
async function Rf(e, t) {
  const { abi: n, chainId: r, connector: s, ...o } = t;
  let a;
  t.account ? a = t.account : a = (await _e(e, {
    chainId: r,
    connector: s
  })).account;
  const i = e.getClient({ chainId: r }), c = $(i, bo, "simulateContract"), { result: l, request: u } = await c({ ...o, abi: n, account: a });
  return {
    chainId: i.chain.id,
    result: l,
    request: { __mode: "prepared", ...u, chainId: r }
  };
}
async function i8(e, t) {
  var s;
  const { connector: n } = t, r = e.state.connections.get(n.uid);
  if (!r)
    throw new Ao();
  return await ((s = e.storage) == null ? void 0 : s.setItem("recentConnectorId", n.id)), e.setState((o) => ({
    ...o,
    current: n.uid
  })), {
    accounts: r.accounts,
    chainId: r.chainId
  };
}
class ge extends Se {
  constructor() {
    super("Provider not found."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ProviderNotFoundError"
    });
  }
}
class Of extends Se {
  constructor({ connector: t }) {
    super(`"${t.name}" does not support programmatic chain switching.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SwitchChainNotSupportedError"
    });
  }
}
async function Fl(e, t) {
  var a;
  const { addEthereumChainParameter: n, chainId: r } = t, s = e.state.connections.get(((a = t.connector) == null ? void 0 : a.uid) ?? e.state.current);
  if (s) {
    const i = s.connector;
    if (!i.switchChain)
      throw new Of({ connector: i });
    return await i.switchChain({
      addEthereumChainParameter: n,
      chainId: r
    });
  }
  const o = e.chains.find((i) => i.id === r);
  if (!o)
    throw new Le();
  return e.setState((i) => ({ ...i, chainId: r })), o;
}
async function c8(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, Dp, "verifyMessage")(r);
}
async function l8(e, t) {
  const { chainId: n, ...r } = t, s = e.getClient({ chainId: n });
  return $(s, Rp, "verifyTypedData")(r);
}
function u8(e, t) {
  const { onChange: n } = t;
  return e.subscribe(() => Ir(e), n, {
    equalityFn(r, s) {
      const { connector: o, ...a } = r, { connector: i, ...c } = s;
      return pt(a, c) && // check connector separately
      (o == null ? void 0 : o.id) === (i == null ? void 0 : i.id) && (o == null ? void 0 : o.uid) === (i == null ? void 0 : i.uid);
    }
  });
}
async function d8(e, t) {
  const { connector: n, ...r } = t, s = await _e(e, { connector: n });
  return $(s, Op, "watchAsset")(r);
}
function p8(e, t) {
  const { syncConnectedChain: n = e._internal.syncConnectedChain, ...r } = t;
  let s;
  const o = (c) => {
    s && s();
    const l = e.getClient({ chainId: c });
    return s = $(l, Gd, "watchBlocks")(r), s;
  }, a = o(t.chainId);
  let i;
  return n && !t.chainId && (i = e.subscribe(({ chainId: c }) => c, async (c) => o(c))), () => {
    a == null || a(), i == null || i();
  };
}
function f8(e, t) {
  const { syncConnectedChain: n = e._internal.syncConnectedChain, ...r } = t;
  let s;
  const o = (c) => {
    s && s();
    const l = e.getClient({ chainId: c });
    return s = $(l, Ni, "watchBlockNumber")(r), s;
  }, a = o(t.chainId);
  let i;
  return n && !t.chainId && (i = e.subscribe(({ chainId: c }) => c, async (c) => o(c))), () => {
    a == null || a(), i == null || i();
  };
}
function h8(e, t) {
  const { onChange: n } = t;
  return e.subscribe((r) => r.chainId, n);
}
function m8(e, t) {
  const { onChange: n } = t;
  return e.subscribe(() => ac(e), n, {
    equalityFn(r, s) {
      return (r == null ? void 0 : r.uid) === (s == null ? void 0 : s.uid);
    }
  });
}
function b8(e, t) {
  const { onChange: n } = t;
  return e.subscribe(() => Mf(e), n, {
    equalityFn: pt
  });
}
function y8(e, t) {
  const { onChange: n } = t;
  return e._internal.connectors.subscribe((r, s) => {
    n(Object.values(r), s);
  });
}
function w8(e, t) {
  const { syncConnectedChain: n = e._internal.syncConnectedChain, ...r } = t;
  let s;
  const o = (c) => {
    s && s();
    const l = e.getClient({ chainId: c });
    return s = $(l, Zi, "watchContractEvent")(r), s;
  }, a = o(t.chainId);
  let i;
  return n && !t.chainId && (i = e.subscribe(({ chainId: c }) => c, async (c) => o(c))), () => {
    a == null || a(), i == null || i();
  };
}
function g8(e, t) {
  const { syncConnectedChain: n = e._internal.syncConnectedChain, ...r } = t;
  let s;
  const o = (c) => {
    s && s();
    const l = e.getClient({ chainId: c });
    return s = $(l, Kd, "watchPendingTransactions")(r), s;
  }, a = o(t.chainId);
  let i;
  return n && !t.chainId && (i = e.subscribe(({ chainId: c }) => c, async (c) => o(c))), () => {
    a == null || a(), i == null || i();
  };
}
function x8(e, t) {
  const { onChange: n } = t;
  return e.subscribe(() => Ff(e), n, {
    equalityFn(r, s) {
      return (r == null ? void 0 : r.uid) === (s == null ? void 0 : s.uid);
    }
  });
}
async function Dl(e, t) {
  const { chainId: n, timeout: r = 0, ...s } = t, o = e.getClient({ chainId: n }), i = await $(o, ji, "waitForTransactionReceipt")({ ...s, timeout: r });
  if (i.status === "reverted") {
    const l = await $(o, Tn, "getTransaction")({ hash: i.transactionHash }), d = await $(o, bt, "call")({
      ...l,
      gasPrice: l.type !== "eip1559" ? l.gasPrice : void 0,
      maxFeePerGas: l.type === "eip1559" ? l.maxFeePerGas : void 0,
      maxPriorityFeePerGas: l.type === "eip1559" ? l.maxPriorityFeePerGas : void 0
    }), p = d != null && d.data ? at(`0x${d.data.substring(138)}`) : "unknown reason";
    throw new Error(p);
  }
  return {
    ...i,
    chainId: o.chain.id
  };
}
async function C8(e, t) {
  const { account: n, chainId: r, connector: s, __mode: o, ...a } = t;
  let i;
  typeof n == "object" && n.type === "local" ? i = e.getClient({ chainId: r }) : i = await _e(e, { account: n, chainId: r, connector: s });
  const { connector: c } = Ir(e);
  let l;
  if (o === "prepared" || c != null && c.supportsSimulation)
    l = a;
  else {
    const { request: p } = await Rf(e, {
      ...a,
      account: n,
      chainId: r
    });
    l = p;
  }
  return await $(i, wo, "writeContract")({
    ...l,
    ...n ? { account: n } : {},
    chain: r ? { id: r } : null
  });
}
function A8(e) {
  return e;
}
const v8 = /(rabby|trustwallet)/, E8 = {
  coinbaseWallet: {
    id: "coinbaseWallet",
    name: "Coinbase Wallet",
    provider(e) {
      return e != null && e.coinbaseWalletExtension ? e.coinbaseWalletExtension : us(e, "isCoinbaseWallet");
    }
  },
  metaMask: {
    id: "metaMask",
    name: "MetaMask",
    provider(e) {
      return us(e, (t) => {
        if (!t.isMetaMask || t.isBraveWallet && !t._events && !t._state)
          return !1;
        const n = [
          "isApexWallet",
          "isAvalanche",
          "isBitKeep",
          "isBlockWallet",
          "isKuCoinWallet",
          "isMathWallet",
          "isOkxWallet",
          "isOKExWallet",
          "isOneInchIOSWallet",
          "isOneInchAndroidWallet",
          "isOpera",
          "isPortal",
          "isRabby",
          "isTokenPocket",
          "isTokenary",
          "isZerion"
        ];
        for (const r of n)
          if (t[r])
            return !1;
        return !0;
      });
    }
  },
  phantom: {
    id: "phantom",
    name: "Phantom",
    provider(e) {
      var t, n;
      return (t = e == null ? void 0 : e.phantom) != null && t.ethereum ? (n = e.phantom) == null ? void 0 : n.ethereum : us(e, "isPhantom");
    }
  }
};
Sr.type = "injected";
function Sr(e = {}) {
  const { shimDisconnect: t = !0, unstable_shimAsyncInject: n } = e;
  function r() {
    const c = e.target;
    if (typeof c == "function") {
      const l = c();
      if (l)
        return l;
    }
    return typeof c == "object" ? c : typeof c == "string" ? {
      ...E8[c] ?? {
        id: c,
        name: `${c[0].toUpperCase()}${c.slice(1)}`,
        provider: `is${c[0].toUpperCase()}${c.slice(1)}`
      }
    } : {
      id: "injected",
      name: "Injected",
      provider(l) {
        return l == null ? void 0 : l.ethereum;
      }
    };
  }
  let s, o, a, i;
  return (c) => ({
    get icon() {
      return r().icon;
    },
    get id() {
      return r().id;
    },
    get name() {
      return r().name;
    },
    get supportsSimulation() {
      return v8.test(this.id.toLowerCase());
    },
    type: Sr.type,
    async setup() {
      const l = await this.getProvider();
      l && e.target && (a || (a = this.onConnect.bind(this), l.on("connect", a)), s || (s = this.onAccountsChanged.bind(this), l.on("accountsChanged", s)));
    },
    async connect({ chainId: l, isReconnecting: u } = {}) {
      var f, m, h, b, y, w;
      const d = await this.getProvider();
      if (!d)
        throw new ge();
      let p = [];
      if (u)
        p = await this.getAccounts().catch(() => []);
      else if (t)
        try {
          p = (b = (h = (m = (f = (await d.request({
            method: "wallet_requestPermissions",
            params: [{ eth_accounts: {} }]
          }))[0]) == null ? void 0 : f.caveats) == null ? void 0 : m[0]) == null ? void 0 : h.value) == null ? void 0 : b.map((E) => H(E)), p.length > 0 && (p = await this.getAccounts());
        } catch (v) {
          const E = v;
          if (E.code === D.code)
            throw new D(E);
          if (E.code === ye.code)
            throw E;
        }
      try {
        !(p != null && p.length) && !u && (p = (await d.request({
          method: "eth_requestAccounts"
        })).map((g) => H(g))), a && (d.removeListener("connect", a), a = void 0), s || (s = this.onAccountsChanged.bind(this), d.on("accountsChanged", s)), o || (o = this.onChainChanged.bind(this), d.on("chainChanged", o)), i || (i = this.onDisconnect.bind(this), d.on("disconnect", i));
        let v = await this.getChainId();
        if (l && v !== l) {
          const E = await this.switchChain({ chainId: l }).catch((g) => {
            if (g.code === D.code)
              throw g;
            return { id: v };
          });
          v = (E == null ? void 0 : E.id) ?? v;
        }
        return t && await ((y = c.storage) == null ? void 0 : y.removeItem(`${this.id}.disconnected`)), e.target || await ((w = c.storage) == null ? void 0 : w.setItem("injected.connected", !0)), { accounts: p, chainId: v };
      } catch (v) {
        const E = v;
        throw E.code === D.code ? new D(E) : E.code === ye.code ? new ye(E) : E;
      }
    },
    async disconnect() {
      var u, d;
      const l = await this.getProvider();
      if (!l)
        throw new ge();
      o && (l.removeListener("chainChanged", o), o = void 0), i && (l.removeListener("disconnect", i), i = void 0), a || (a = this.onConnect.bind(this), l.on("connect", a));
      try {
        await wt(() => (
          // TODO: Remove explicit type for viem@3
          l.request({
            // `'wallet_revokePermissions'` added in `viem@2.10.3`
            method: "wallet_revokePermissions",
            params: [{ eth_accounts: {} }]
          })
        ), { timeout: 100 });
      } catch {
      }
      t && await ((u = c.storage) == null ? void 0 : u.setItem(`${this.id}.disconnected`, !0)), e.target || await ((d = c.storage) == null ? void 0 : d.removeItem("injected.connected"));
    },
    async getAccounts() {
      const l = await this.getProvider();
      if (!l)
        throw new ge();
      return (await l.request({ method: "eth_accounts" })).map((d) => H(d));
    },
    async getChainId() {
      const l = await this.getProvider();
      if (!l)
        throw new ge();
      const u = await l.request({ method: "eth_chainId" });
      return Number(u);
    },
    async getProvider() {
      if (typeof window > "u")
        return;
      let l;
      const u = r();
      return typeof u.provider == "function" ? l = u.provider(window) : typeof u.provider == "string" ? l = us(window, u.provider) : l = u.provider, l && !l.removeListener && ("off" in l && typeof l.off == "function" ? l.removeListener = l.off : l.removeListener = () => {
      }), l;
    },
    async isAuthorized() {
      var l, u;
      try {
        if (t && // If shim exists in storage, connector is disconnected
        await ((l = c.storage) == null ? void 0 : l.getItem(`${this.id}.disconnected`)) || !e.target && !await ((u = c.storage) == null ? void 0 : u.getItem("injected.connected")))
          return !1;
        if (!await this.getProvider()) {
          if (n !== void 0 && n !== !1) {
            const m = async () => (typeof window < "u" && window.removeEventListener("ethereum#initialized", m), !!await this.getProvider()), h = typeof n == "number" ? n : 1e3;
            if (await Promise.race([
              ...typeof window < "u" ? [
                new Promise((y) => window.addEventListener("ethereum#initialized", () => y(m()), { once: !0 }))
              ] : [],
              new Promise((y) => setTimeout(() => y(m()), h))
            ]))
              return !0;
          }
          throw new ge();
        }
        return !!(await dt(() => this.getAccounts())).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: l, chainId: u }) {
      var f, m, h, b;
      const d = await this.getProvider();
      if (!d)
        throw new ge();
      const p = c.chains.find((y) => y.id === u);
      if (!p)
        throw new J(new Le());
      try {
        return await Promise.all([
          d.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: U(u) }]
          }).then(async () => {
            await this.getChainId() === u && c.emitter.emit("change", { chainId: u });
          }),
          new Promise((y) => c.emitter.once("change", ({ chainId: w }) => {
            w === u && y();
          }))
        ]), p;
      } catch (y) {
        const w = y;
        if (w.code === 4902 || // Unwrapping for MetaMask Mobile
        // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
        ((m = (f = w == null ? void 0 : w.data) == null ? void 0 : f.originalError) == null ? void 0 : m.code) === 4902)
          try {
            const { default: v, ...E } = p.blockExplorers ?? {};
            let g;
            l != null && l.blockExplorerUrls ? g = l.blockExplorerUrls : v && (g = [
              v.url,
              ...Object.values(E).map((I) => I.url)
            ]);
            let C;
            (h = l == null ? void 0 : l.rpcUrls) != null && h.length ? C = l.rpcUrls : C = [((b = p.rpcUrls.default) == null ? void 0 : b.http[0]) ?? ""];
            const A = {
              blockExplorerUrls: g,
              chainId: U(u),
              chainName: (l == null ? void 0 : l.chainName) ?? p.name,
              iconUrls: l == null ? void 0 : l.iconUrls,
              nativeCurrency: (l == null ? void 0 : l.nativeCurrency) ?? p.nativeCurrency,
              rpcUrls: C
            };
            if (await d.request({
              method: "wallet_addEthereumChain",
              params: [A]
            }), await this.getChainId() !== u)
              throw new D(new Error("User rejected switch after adding network."));
            return p;
          } catch (v) {
            throw new D(v);
          }
        throw w.code === D.code ? new D(w) : new J(w);
      }
    },
    async onAccountsChanged(l) {
      var u;
      if (l.length === 0)
        this.onDisconnect();
      else if (c.emitter.listenerCount("connect")) {
        const d = (await this.getChainId()).toString();
        this.onConnect({ chainId: d }), t && await ((u = c.storage) == null ? void 0 : u.removeItem(`${this.id}.disconnected`));
      } else
        c.emitter.emit("change", {
          accounts: l.map((d) => H(d))
        });
    },
    onChainChanged(l) {
      const u = Number(l);
      c.emitter.emit("change", { chainId: u });
    },
    async onConnect(l) {
      const u = await this.getAccounts();
      if (u.length === 0)
        return;
      const d = Number(l.chainId);
      c.emitter.emit("connect", { accounts: u, chainId: d });
      const p = await this.getProvider();
      p && (a && (p.removeListener("connect", a), a = void 0), s || (s = this.onAccountsChanged.bind(this), p.on("accountsChanged", s)), o || (o = this.onChainChanged.bind(this), p.on("chainChanged", o)), i || (i = this.onDisconnect.bind(this), p.on("disconnect", i)));
    },
    async onDisconnect(l) {
      const u = await this.getProvider();
      l && l.code === 1013 && u && (await this.getAccounts()).length || (c.emitter.emit("disconnect"), u && (o && (u.removeListener("chainChanged", o), o = void 0), i && (u.removeListener("disconnect", i), i = void 0), a || (a = this.onConnect.bind(this), u.on("connect", a))));
    }
  });
}
function us(e, t) {
  function n(s) {
    return typeof t == "function" ? t(s) : typeof t == "string" ? s[t] : !0;
  }
  const r = e.ethereum;
  if (r != null && r.providers)
    return r.providers.find((s) => n(s));
  if (r && n(r))
    return r;
}
vo.type = "mock";
function vo(e) {
  const t = /* @__PURE__ */ new Map(), n = e.features ?? {};
  let r = !1, s;
  return (o) => ({
    id: "mock",
    name: "Mock Connector",
    type: vo.type,
    async setup() {
      s = o.chains[0].id;
    },
    async connect({ chainId: a } = {}) {
      if (n.connectError)
        throw typeof n.connectError == "boolean" ? new D(new Error("Failed to connect.")) : n.connectError;
      const c = await (await this.getProvider()).request({
        method: "eth_requestAccounts"
      });
      let l = await this.getChainId();
      return a && l !== a && (l = (await this.switchChain({ chainId: a })).id), r = !0, {
        accounts: c.map((u) => H(u)),
        chainId: l
      };
    },
    async disconnect() {
      r = !1;
    },
    async getAccounts() {
      if (!r)
        throw new Ao();
      return (await (await this.getProvider()).request({ method: "eth_accounts" })).map((c) => H(c));
    },
    async getChainId() {
      const i = await (await this.getProvider()).request({ method: "eth_chainId" });
      return ra(i, "number");
    },
    async isAuthorized() {
      return !n.reconnect || !r ? !1 : !!(await this.getAccounts()).length;
    },
    async switchChain({ chainId: a }) {
      const i = await this.getProvider(), c = o.chains.find((l) => l.id === a);
      if (!c)
        throw new J(new Le());
      return await i.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: U(a) }]
      }), c;
    },
    onAccountsChanged(a) {
      a.length === 0 ? this.onDisconnect() : o.emitter.emit("change", {
        accounts: a.map((i) => H(i))
      });
    },
    onChainChanged(a) {
      const i = Number(a);
      o.emitter.emit("change", { chainId: i });
    },
    async onDisconnect(a) {
      o.emitter.emit("disconnect"), r = !1;
    },
    async getProvider({ chainId: a } = {}) {
      const c = (o.chains.find((u) => u.id === a) ?? o.chains[0]).rpcUrls.default.http[0];
      return vr({ request: async ({ method: u, params: d }) => {
        if (u === "eth_chainId")
          return U(s);
        if (u === "eth_requestAccounts")
          return e.accounts;
        if (u === "eth_signTypedData_v4" && n.signTypedDataError)
          throw typeof n.signTypedDataError == "boolean" ? new D(new Error("Failed to sign typed data.")) : n.signTypedDataError;
        if (u === "wallet_switchEthereumChain") {
          if (n.switchChainError)
            throw typeof n.switchChainError == "boolean" ? new D(new Error("Failed to switch chain.")) : n.switchChainError;
          s = ra(d[0].chainId, "number"), this.onChainChanged(s.toString());
          return;
        }
        if (u === "wallet_watchAsset") {
          if (n.watchAssetError)
            throw typeof n.watchAssetError == "boolean" ? new D(new Error("Failed to switch chain.")) : n.watchAssetError;
          return r;
        }
        if (u === "wallet_getCapabilities")
          return {
            "0x2105": {
              paymasterService: {
                supported: d[0] === "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
              },
              sessionKeys: {
                supported: !0
              }
            },
            "0x14A34": {
              paymasterService: {
                supported: d[0] === "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
              }
            }
          };
        if (u === "wallet_sendCalls") {
          const h = [], b = d[0].calls;
          for (const w of b) {
            const { result: v, error: E } = await Lo.http(c, {
              body: {
                method: "eth_sendTransaction",
                params: [w]
              }
            });
            if (E)
              throw new It({
                body: { method: u, params: d },
                error: E,
                url: c
              });
            h.push(v);
          }
          const y = Y(Ke(JSON.stringify(b)));
          return t.set(y, h), y;
        }
        if (u === "wallet_getCallsStatus") {
          const h = t.get(d[0]);
          if (!h)
            return null;
          const b = await Promise.all(h.map(async (y) => {
            const { result: w, error: v } = await Lo.http(c, {
              body: {
                method: "eth_getTransactionReceipt",
                params: [y],
                id: 0
              }
            });
            if (v)
              throw new It({
                body: { method: u, params: d },
                error: v,
                url: c
              });
            return w ? {
              blockHash: w.blockHash,
              blockNumber: w.blockNumber,
              gasUsed: w.gasUsed,
              logs: w.logs,
              status: w.status,
              transactionHash: w.transactionHash
            } : null;
          }));
          return b.some((y) => !y) ? { status: "PENDING", receipts: [] } : { status: "CONFIRMED", receipts: b };
        }
        if (u === "wallet_showCallsStatus")
          return;
        if (u === "personal_sign") {
          if (n.signMessageError)
            throw typeof n.signMessageError == "boolean" ? new D(new Error("Failed to sign message.")) : n.signMessageError;
          u = "eth_sign", d = [d[1], d[0]];
        }
        const p = { method: u, params: d }, { error: f, result: m } = await Lo.http(c, { body: p });
        if (f)
          throw new It({ body: p, error: f, url: c });
        return m;
      } })({ retryCount: 0 });
    }
  });
}
var k8 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const I8 = (e) => (t, n, r) => {
  const s = r.subscribe;
  return r.subscribe = (a, i, c) => {
    let l = a;
    if (i) {
      const u = (c == null ? void 0 : c.equalityFn) || Object.is;
      let d = a(r.getState());
      l = (p) => {
        const f = a(p);
        if (!u(d, f)) {
          const m = d;
          i(d = f, m);
        }
      }, c != null && c.fireImmediately && i(d, d);
    }
    return s(l);
  }, e(t, n, r);
}, S8 = I8;
function B8(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var o;
      const a = (c) => c === null ? null : JSON.parse(c, void 0), i = (o = n.getItem(s)) != null ? o : null;
      return i instanceof Promise ? i.then(a) : a(i);
    },
    setItem: (s, o) => n.setItem(
      s,
      JSON.stringify(o, void 0)
    ),
    removeItem: (s) => n.removeItem(s)
  };
}
const ir = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return ir(r)(n);
      },
      catch(r) {
        return this;
      }
    };
  } catch (n) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return ir(r)(n);
      }
    };
  }
}, T8 = (e, t) => (n, r, s) => {
  let o = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (b) => b,
    version: 0,
    merge: (b, y) => ({
      ...y,
      ...b
    }),
    ...t
  }, a = !1;
  const i = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l;
  try {
    l = o.getStorage();
  } catch {
  }
  if (!l)
    return e(
      (...b) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), n(...b);
      },
      r,
      s
    );
  const u = ir(o.serialize), d = () => {
    const b = o.partialize({ ...r() });
    let y;
    const w = u({ state: b, version: o.version }).then(
      (v) => l.setItem(o.name, v)
    ).catch((v) => {
      y = v;
    });
    if (y)
      throw y;
    return w;
  }, p = s.setState;
  s.setState = (b, y) => {
    p(b, y), d();
  };
  const f = e(
    (...b) => {
      n(...b), d();
    },
    r,
    s
  );
  let m;
  const h = () => {
    var b;
    if (!l)
      return;
    a = !1, i.forEach((w) => w(r()));
    const y = ((b = o.onRehydrateStorage) == null ? void 0 : b.call(o, r())) || void 0;
    return ir(l.getItem.bind(l))(o.name).then((w) => {
      if (w)
        return o.deserialize(w);
    }).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== o.version) {
          if (o.migrate)
            return o.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var v;
      return m = o.merge(
        w,
        (v = r()) != null ? v : f
      ), n(m, !0), d();
    }).then(() => {
      y == null || y(m, void 0), a = !0, c.forEach((w) => w(m));
    }).catch((w) => {
      y == null || y(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (b) => {
      o = {
        ...o,
        ...b
      }, b.getStorage && (l = b.getStorage());
    },
    clearStorage: () => {
      l == null || l.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => h(),
    hasHydrated: () => a,
    onHydrate: (b) => (i.add(b), () => {
      i.delete(b);
    }),
    onFinishHydration: (b) => (c.add(b), () => {
      c.delete(b);
    })
  }, h(), m || f;
}, U8 = (e, t) => (n, r, s) => {
  let o = {
    storage: B8(() => localStorage),
    partialize: (h) => h,
    version: 0,
    merge: (h, b) => ({
      ...b,
      ...h
    }),
    ...t
  }, a = !1;
  const i = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l = o.storage;
  if (!l)
    return e(
      (...h) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), n(...h);
      },
      r,
      s
    );
  const u = () => {
    const h = o.partialize({ ...r() });
    return l.setItem(o.name, {
      state: h,
      version: o.version
    });
  }, d = s.setState;
  s.setState = (h, b) => {
    d(h, b), u();
  };
  const p = e(
    (...h) => {
      n(...h), u();
    },
    r,
    s
  );
  let f;
  const m = () => {
    var h, b;
    if (!l)
      return;
    a = !1, i.forEach((w) => {
      var v;
      return w((v = r()) != null ? v : p);
    });
    const y = ((b = o.onRehydrateStorage) == null ? void 0 : b.call(o, (h = r()) != null ? h : p)) || void 0;
    return ir(l.getItem.bind(l))(o.name).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== o.version) {
          if (o.migrate)
            return o.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var v;
      return f = o.merge(
        w,
        (v = r()) != null ? v : p
      ), n(f, !0), u();
    }).then(() => {
      y == null || y(f, void 0), f = r(), a = !0, c.forEach((w) => w(f));
    }).catch((w) => {
      y == null || y(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (h) => {
      o = {
        ...o,
        ...h
      }, h.storage && (l = h.storage);
    },
    clearStorage: () => {
      l == null || l.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => m(),
    hasHydrated: () => a,
    onHydrate: (h) => (i.add(h), () => {
      i.delete(h);
    }),
    onFinishHydration: (h) => (c.add(h), () => {
      c.delete(h);
    })
  }, o.skipHydration || m(), f || p;
}, P8 = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ((k8 ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), T8(e, t)) : U8(e, t), N8 = P8;
var M8 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Rl = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (c, l) => {
    const u = typeof c == "function" ? c(t) : c;
    if (!Object.is(u, t)) {
      const d = t;
      t = l ?? typeof u != "object" ? u : Object.assign({}, t, u), n.forEach((p) => p(t, d));
    }
  }, s = () => t, i = { setState: r, getState: s, subscribe: (c) => (n.add(c), () => n.delete(c)), destroy: () => {
    (M8 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } };
  return t = e(r, s, i), i;
}, ea = (e) => e ? Rl(e) : Rl;
class F8 {
  constructor(t) {
    Object.defineProperty(this, "uid", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "_emitter", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: new zl()
    });
  }
  on(t, n) {
    this._emitter.on(t, n);
  }
  once(t, n) {
    this._emitter.once(t, n);
  }
  off(t, n) {
    this._emitter.off(t, n);
  }
  emit(t, ...n) {
    const r = n[0];
    this._emitter.emit(t, { uid: this.uid, ...r });
  }
  listenerCount(t) {
    return this._emitter.listenerCount(t);
  }
}
function D8(e) {
  return new F8(e);
}
function ic(e, t) {
  return JSON.parse(e, (n, r) => {
    let s = r;
    return (s == null ? void 0 : s.__type) === "bigint" && (s = BigInt(s.value)), (s == null ? void 0 : s.__type) === "Map" && (s = new Map(s.value)), (t == null ? void 0 : t(n, s)) ?? s;
  });
}
function Ol(e, t) {
  return e.slice(0, t).join(".") || ".";
}
function Ll(e, t) {
  const { length: n } = e;
  for (let r = 0; r < n; ++r)
    if (e[r] === t)
      return r + 1;
  return 0;
}
function R8(e, t) {
  const n = typeof e == "function", r = typeof t == "function", s = [], o = [];
  return function(i, c) {
    if (typeof c == "object")
      if (s.length) {
        const l = Ll(s, this);
        l === 0 ? s[s.length] = this : (s.splice(l), o.splice(l)), o[o.length] = i;
        const u = Ll(s, c);
        if (u !== 0)
          return r ? t.call(this, i, c, Ol(o, u)) : `[ref=${Ol(o, u)}]`;
      } else
        s[0] = c, o[0] = i;
    return n ? e.call(this, i, c) : c;
  };
}
function Lf(e, t, n, r) {
  return JSON.stringify(e, R8((s, o) => {
    let a = o;
    return typeof a == "bigint" && (a = { __type: "bigint", value: o.toString() }), a instanceof Map && (a = { __type: "Map", value: Array.from(o.entries()) }), (t == null ? void 0 : t(s, a)) ?? a;
  }, r), n ?? void 0);
}
function zf(e) {
  const { deserialize: t = ic, key: n = "wagmi", serialize: r = Lf, storage: s = cc } = e;
  function o(a) {
    return a instanceof Promise ? a.then((i) => i).catch(() => null) : a;
  }
  return {
    ...s,
    key: n,
    async getItem(a, i) {
      const c = s.getItem(`${n}.${a}`), l = await o(c);
      return l ? t(l) ?? null : i ?? null;
    },
    async setItem(a, i) {
      const c = `${n}.${a}`;
      i === null ? await o(s.removeItem(c)) : await o(s.setItem(c, r(i)));
    },
    async removeItem(a) {
      await o(s.removeItem(`${n}.${a}`));
    }
  };
}
const cc = {
  getItem: () => null,
  setItem: () => {
  },
  removeItem: () => {
  }
}, Na = 256;
let ss = Na, os;
function O8(e = 11) {
  if (!os || ss + e > Na * 2) {
    os = "", ss = 0;
    for (let t = 0; t < Na; t++)
      os += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return os.substring(ss, ss++ + e);
}
function L8(e) {
  const { multiInjectedProviderDiscovery: t = !0, storage: n = zf({
    storage: typeof window < "u" && window.localStorage ? window.localStorage : cc
  }), syncConnectedChain: r = !0, ssr: s = !1, ...o } = e, a = typeof window < "u" && t ? Kp() : void 0, i = ea(() => o.chains), c = ea(() => [
    ...o.connectors ?? [],
    ...s ? [] : (a == null ? void 0 : a.getProviders().map(u)) ?? []
  ].map(l));
  function l(g) {
    var k;
    const C = D8(O8()), A = {
      ...g({
        emitter: C,
        chains: i.getState(),
        storage: n,
        transports: o.transports
      }),
      emitter: C,
      uid: C.uid
    };
    return C.on("connect", v), (k = A.setup) == null || k.call(A), A;
  }
  function u(g) {
    const { info: C } = g, A = g.provider;
    return Sr({ target: { ...C, id: C.rdns, provider: A } });
  }
  const d = /* @__PURE__ */ new Map();
  function p(g = {}) {
    const C = g.chainId ?? b.getState().chainId, A = i.getState().find((I) => I.id === C);
    if (g.chainId && !A)
      throw new Le();
    {
      const I = d.get(b.getState().chainId);
      if (I && !A)
        return I;
      if (!A)
        throw new Le();
    }
    {
      const I = d.get(C);
      if (I)
        return I;
    }
    let k;
    if (o.client)
      k = o.client({ chain: A });
    else {
      const I = A.id, P = i.getState().map((F) => F.id), N = {}, q = Object.entries(o);
      for (const [F, K] of q)
        if (!(F === "chains" || F === "client" || F === "connectors" || F === "transports"))
          if (typeof K == "object")
            if (I in K)
              N[F] = K[I];
            else {
              if (P.some((B) => B in K))
                continue;
              N[F] = K;
            }
          else
            N[F] = K;
      k = gt({
        ...N,
        chain: A,
        batch: N.batch ?? { multicall: !0 },
        transport: (F) => o.transports[I]({ ...F, connectors: c })
      });
    }
    return d.set(C, k), k;
  }
  function f() {
    return {
      chainId: i.getState()[0].id,
      connections: /* @__PURE__ */ new Map(),
      current: null,
      status: "disconnected"
    };
  }
  let m;
  const h = "0.0.0-canary-";
  Vn.startsWith(h) ? m = Number.parseInt(Vn.replace(h, "")) : m = Number.parseInt(Vn.split(".")[0] ?? "0");
  const b = ea(S8(
    // only use persist middleware if storage exists
    n ? N8(f, {
      migrate(g, C) {
        if (C === m)
          return g;
        const A = f(), k = y(g, A.chainId);
        return { ...A, chainId: k };
      },
      name: "store",
      partialize(g) {
        return {
          connections: {
            __type: "Map",
            value: Array.from(g.connections.entries()).map(([C, A]) => {
              const { id: k, name: I, type: P, uid: N } = A.connector;
              return [C, { ...A, connector: { id: k, name: I, type: P, uid: N } }];
            })
          },
          chainId: g.chainId,
          current: g.current
        };
      },
      merge(g, C) {
        typeof g == "object" && g && "status" in g && delete g.status;
        const A = y(g, C.chainId);
        return {
          ...C,
          ...g,
          chainId: A
        };
      },
      skipHydration: s,
      storage: n,
      version: m
    }) : f
  ));
  function y(g, C) {
    return g && typeof g == "object" && "chainId" in g && typeof g.chainId == "number" && i.getState().some((A) => A.id === g.chainId) ? g.chainId : C;
  }
  r && b.subscribe(({ connections: g, current: C }) => {
    var A;
    return C ? (A = g.get(C)) == null ? void 0 : A.chainId : void 0;
  }, (g) => {
    if (i.getState().some((A) => A.id === g))
      return b.setState((A) => ({
        ...A,
        chainId: g ?? A.chainId
      }));
  }), a == null || a.subscribe((g) => {
    const C = /* @__PURE__ */ new Map();
    for (const k of c.getState())
      C.set(k.id, !0);
    const A = [];
    for (const k of g) {
      const I = l(u(k));
      C.has(I.id) || A.push(I);
    }
    n && !b.persist.hasHydrated() || c.setState((k) => [...k, ...A], !0);
  });
  function w(g) {
    b.setState((C) => {
      const A = C.connections.get(g.uid);
      return A ? {
        ...C,
        connections: new Map(C.connections).set(g.uid, {
          accounts: g.accounts ?? A.accounts,
          chainId: g.chainId ?? A.chainId,
          connector: A.connector
        })
      } : C;
    });
  }
  function v(g) {
    b.getState().status === "connecting" || b.getState().status === "reconnecting" || b.setState((C) => {
      const A = c.getState().find((k) => k.uid === g.uid);
      return A ? (A.emitter.listenerCount("connect") && A.emitter.off("connect", w), A.emitter.listenerCount("change") || A.emitter.on("change", w), A.emitter.listenerCount("disconnect") || A.emitter.on("disconnect", E), {
        ...C,
        connections: new Map(C.connections).set(g.uid, {
          accounts: g.accounts,
          chainId: g.chainId,
          connector: A
        }),
        current: g.uid,
        status: "connected"
      }) : C;
    });
  }
  function E(g) {
    b.setState((C) => {
      const A = C.connections.get(g.uid);
      if (A) {
        const I = A.connector;
        I.emitter.listenerCount("change") && A.connector.emitter.off("change", w), I.emitter.listenerCount("disconnect") && A.connector.emitter.off("disconnect", E), I.emitter.listenerCount("connect") || A.connector.emitter.on("connect", v);
      }
      if (C.connections.delete(g.uid), C.connections.size === 0)
        return {
          ...C,
          connections: /* @__PURE__ */ new Map(),
          current: null,
          status: "disconnected"
        };
      const k = C.connections.values().next().value;
      return {
        ...C,
        connections: new Map(C.connections),
        current: k.connector.uid
      };
    });
  }
  return {
    get chains() {
      return i.getState();
    },
    get connectors() {
      return c.getState();
    },
    storage: n,
    getClient: p,
    get state() {
      return b.getState();
    },
    setState(g) {
      let C;
      typeof g == "function" ? C = g(b.getState()) : C = g;
      const A = f();
      typeof C != "object" && (C = A), Object.keys(A).some((I) => !(I in C)) && (C = A), b.setState(C, !0);
    },
    subscribe(g, C, A) {
      return b.subscribe(g, C, A ? {
        ...A,
        fireImmediately: A.emitImmediately
        // Workaround cast since Zustand does not support `'exactOptionalPropertyTypes'`
      } : void 0);
    },
    _internal: {
      mipd: a,
      store: b,
      ssr: !!s,
      syncConnectedChain: r,
      transports: o.transports,
      chains: {
        setState(g) {
          const C = typeof g == "function" ? g(i.getState()) : g;
          if (C.length !== 0)
            return i.setState(C, !0);
        },
        subscribe(g) {
          return i.subscribe(g);
        }
      },
      connectors: {
        providerDetailToConnector: u,
        setup: l,
        setState(g) {
          return c.setState(typeof g == "function" ? g(c.getState()) : g, !0);
        },
        subscribe(g) {
          return c.subscribe(g);
        }
      },
      events: { change: w, connect: v, disconnect: E }
    }
  };
}
function z8(e, t) {
  const { initialState: n, reconnectOnMount: r } = t;
  return n && !e._internal.store.persist.hasHydrated() && e.setState({
    ...n,
    chainId: e.chains.some((s) => s.id === n.chainId) ? n.chainId : e.chains[0].id,
    connections: r ? n.connections : /* @__PURE__ */ new Map(),
    status: r ? "reconnecting" : "disconnected"
  }), {
    async onMount() {
      var s;
      if (e._internal.ssr) {
        await e._internal.store.persist.rehydrate();
        const o = (s = e._internal.mipd) == null ? void 0 : s.getProviders().map(e._internal.connectors.providerDetailToConnector).map(e._internal.connectors.setup);
        e._internal.connectors.setState((a) => [
          ...a,
          ...o ?? []
        ]);
      }
      r ? Df(e) : e.storage && e.setState((o) => ({
        ...o,
        connections: /* @__PURE__ */ new Map()
      }));
    }
  };
}
function _8(e, t = {}) {
  const { type: n } = e, { key: r = "connector", name: s = "Connector", retryDelay: o } = t;
  return (a) => {
    const { chain: i, connectors: c } = a, l = t.retryCount ?? a.retryCount;
    return Mn({
      key: r,
      name: s,
      request: async ({ method: d, params: p }) => {
        const f = c == null ? void 0 : c.getState().find((y) => y.type === n);
        if (!f)
          throw new lt(new Error(`Could not find connector of type "${n}" in \`connectors\` passed to \`createConfig\`.`));
        const m = await f.getProvider({
          chainId: i == null ? void 0 : i.id
        });
        if (!m)
          throw new lt(new Error("Provider is disconnected."));
        const h = V(await dt(() => wt(() => m.request({ method: "eth_chainId" }), {
          timeout: 100
        })));
        if (i && h !== i.id)
          throw new Nt(new Error(`The current chain of the connector (id: ${h}) does not match the target chain for the request (id: ${i.id} – ${i.name}).`));
        const b = { method: d, params: p };
        return m.request(b);
      },
      retryCount: l,
      retryDelay: o,
      type: "connector"
    });
  };
}
function H8(e, t) {
  return Ji(e, t);
}
const $8 = {
  getItem(e) {
    return typeof window > "u" ? null : lc(document.cookie, e) ?? null;
  },
  setItem(e, t) {
    typeof window > "u" || (document.cookie = `${e}=${t};path=/;samesite=Lax`);
  },
  removeItem(e) {
    typeof window > "u" || (document.cookie = `${e}=;max-age=-1;path=/`);
  }
};
function j8(e, t) {
  var s;
  if (!t)
    return;
  const n = `${(s = e.storage) == null ? void 0 : s.key}.store`, r = lc(t, n);
  if (r)
    return ic(r).state;
}
function lc(e, t) {
  const n = e.split("; ").find((r) => r.startsWith(`${t}=`));
  if (n)
    return n.substring(t.length + 1);
}
function uc(e) {
  var o, a, i;
  const { chain: t } = e, n = t.rpcUrls.default.http[0];
  if (!e.transports)
    return [n];
  const r = (a = (o = e.transports) == null ? void 0 : o[t.id]) == null ? void 0 : a.call(o, { chain: t });
  return (((i = r == null ? void 0 : r.value) == null ? void 0 : i.transports) || [r]).map(({ value: c }) => (c == null ? void 0 : c.url) || n);
}
function q8(e) {
  if (typeof e == "string")
    return Number.parseInt(e, e.trim().substring(0, 2) === "0x" ? 16 : 10);
  if (typeof e == "bigint")
    return Number(e);
  if (typeof e == "number")
    return e;
  throw new Error(`Cannot normalize chainId "${e}" of type "${typeof e}"`);
}
const c3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseError: Se,
  ChainNotConfiguredError: Le,
  ConnectorAccountNotFoundError: Tf,
  ConnectorAlreadyConnectedError: Bf,
  ConnectorChainMismatchError: Uf,
  ConnectorNotConnectedError: Ao,
  ConnectorNotFoundError: Dk,
  ProviderNotFoundError: ge,
  SwitchChainNotSupportedError: Of,
  call: Mk,
  connect: Rk,
  cookieStorage: $8,
  cookieToInitialState: j8,
  createConfig: L8,
  createConnector: A8,
  createStorage: zf,
  custom: vr,
  deepEqual: pt,
  deployContract: Ok,
  deserialize: ic,
  disconnect: Lk,
  estimateFeesPerGas: _k,
  estimateGas: zk,
  estimateMaxPriorityFeePerGas: Hk,
  extractRpcUrls: uc,
  fallback: H8,
  fetchBalance: kl,
  fetchBlockNumber: Sl,
  fetchEnsAddress: Bl,
  fetchEnsAvatar: Tl,
  fetchEnsName: Ul,
  fetchEnsResolver: Pl,
  fetchToken: Nl,
  fetchTransaction: Ml,
  getAccount: Ir,
  getBalance: kl,
  getBlock: $k,
  getBlockNumber: Sl,
  getBlockTransactionCount: jk,
  getBytecode: qk,
  getChainId: Gk,
  getChains: Kk,
  getClient: ac,
  getConnections: Mf,
  getConnectorClient: _e,
  getConnectors: Qk,
  getEnsAddress: Bl,
  getEnsAvatar: Tl,
  getEnsName: Ul,
  getEnsResolver: Pl,
  getEnsText: Vk,
  getFeeHistory: Wk,
  getGasPrice: Zk,
  getProof: Jk,
  getPublicClient: Ff,
  getStorageAt: Xk,
  getToken: Nl,
  getTransaction: Ml,
  getTransactionConfirmations: Yk,
  getTransactionCount: e8,
  getTransactionReceipt: t8,
  getWalletClient: n8,
  http: Kn,
  hydrate: z8,
  injected: Sr,
  mock: vo,
  multicall: Pf,
  noopStorage: cc,
  normalizeChainId: q8,
  parseCookie: lc,
  prepareTransactionRequest: r8,
  readContract: Nf,
  readContracts: Rs,
  reconnect: Df,
  sendTransaction: s8,
  serialize: Lf,
  signMessage: o8,
  signTypedData: a8,
  simulateContract: Rf,
  switchAccount: i8,
  switchChain: Fl,
  switchNetwork: Fl,
  unstable_connector: _8,
  verifyMessage: c8,
  verifyTypedData: l8,
  version: Vn,
  waitForTransaction: Dl,
  waitForTransactionReceipt: Dl,
  watchAccount: u8,
  watchAsset: d8,
  watchBlockNumber: f8,
  watchBlocks: p8,
  watchChainId: h8,
  watchClient: m8,
  watchConnections: b8,
  watchConnectors: y8,
  watchContractEvent: w8,
  watchPendingTransactions: g8,
  watchPublicClient: x8,
  webSocket: jp,
  writeContract: C8
}, Symbol.toStringTag, { value: "Module" }));
Eo.type = "coinbaseWallet";
function Eo(e = {}) {
  return e.version === "3" || e.headlessMode ? K8(e) : G8(e);
}
function G8(e) {
  let t, n, r, s, o;
  return (a) => ({
    id: "coinbaseWalletSDK",
    name: "Coinbase Wallet",
    supportsSimulation: !0,
    type: Eo.type,
    async connect({ chainId: i } = {}) {
      try {
        const c = await this.getProvider(), l = (await c.request({
          method: "eth_requestAccounts"
        })).map((d) => H(d));
        r || (r = this.onAccountsChanged.bind(this), c.on("accountsChanged", r)), s || (s = this.onChainChanged.bind(this), c.on("chainChanged", s)), o || (o = this.onDisconnect.bind(this), c.on("disconnect", o));
        let u = await this.getChainId();
        if (i && u !== i) {
          const d = await this.switchChain({ chainId: i }).catch((p) => {
            if (p.code === D.code)
              throw p;
            return { id: u };
          });
          u = (d == null ? void 0 : d.id) ?? u;
        }
        return { accounts: l, chainId: u };
      } catch (c) {
        throw /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(c.message) ? new D(c) : c;
      }
    },
    async disconnect() {
      var c;
      const i = await this.getProvider();
      r && (i.removeListener("accountsChanged", r), r = void 0), s && (i.removeListener("chainChanged", s), s = void 0), o && (i.removeListener("disconnect", o), o = void 0), i.disconnect(), (c = i.close) == null || c.call(i);
    },
    async getAccounts() {
      return (await (await this.getProvider()).request({
        method: "eth_accounts"
      })).map((c) => H(c));
    },
    async getChainId() {
      const c = await (await this.getProvider()).request({
        method: "eth_chainId"
      });
      return Number(c);
    },
    async getProvider() {
      if (!n) {
        const i = await (async () => {
          const { default: c } = await import("./index-je6Gyuxx.js").then((l) => l.i);
          return typeof c != "function" && typeof c.default == "function" ? c.default : c;
        })();
        t = new i({
          ...e,
          appChainIds: a.chains.map((c) => c.id)
        }), n = t.makeWeb3Provider({
          ...e,
          options: e.preference ?? "all"
        });
      }
      return n;
    },
    async isAuthorized() {
      try {
        return !!(await this.getAccounts()).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: i, chainId: c }) {
      var d, p, f, m;
      const l = a.chains.find((h) => h.id === c);
      if (!l)
        throw new J(new Le());
      const u = await this.getProvider();
      try {
        return await u.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: U(l.id) }]
        }), l;
      } catch (h) {
        if (h.code === 4902)
          try {
            let b;
            i != null && i.blockExplorerUrls ? b = i.blockExplorerUrls : b = (d = l.blockExplorers) != null && d.default.url ? [(p = l.blockExplorers) == null ? void 0 : p.default.url] : [];
            let y;
            (f = i == null ? void 0 : i.rpcUrls) != null && f.length ? y = i.rpcUrls : y = [((m = l.rpcUrls.default) == null ? void 0 : m.http[0]) ?? ""];
            const w = {
              blockExplorerUrls: b,
              chainId: U(c),
              chainName: (i == null ? void 0 : i.chainName) ?? l.name,
              iconUrls: i == null ? void 0 : i.iconUrls,
              nativeCurrency: (i == null ? void 0 : i.nativeCurrency) ?? l.nativeCurrency,
              rpcUrls: y
            };
            return await u.request({
              method: "wallet_addEthereumChain",
              params: [w]
            }), l;
          } catch (b) {
            throw new D(b);
          }
        throw new J(h);
      }
    },
    onAccountsChanged(i) {
      i.length === 0 ? this.onDisconnect() : a.emitter.emit("change", {
        accounts: i.map((c) => H(c))
      });
    },
    onChainChanged(i) {
      const c = Number(i);
      a.emitter.emit("change", { chainId: c });
    },
    async onDisconnect(i) {
      a.emitter.emit("disconnect");
      const c = await this.getProvider();
      r && (c.removeListener("accountsChanged", r), r = void 0), s && (c.removeListener("chainChanged", s), s = void 0), o && (c.removeListener("disconnect", o), o = void 0);
    }
  });
}
function K8(e) {
  let n, r, s, o, a;
  return (i) => ({
    id: "coinbaseWalletSDK",
    name: "Coinbase Wallet",
    supportsSimulation: !0,
    type: Eo.type,
    async connect({ chainId: c } = {}) {
      try {
        const l = await this.getProvider(), u = (await l.request({
          method: "eth_requestAccounts"
        })).map((p) => H(p));
        s || (s = this.onAccountsChanged.bind(this), l.on("accountsChanged", s)), o || (o = this.onChainChanged.bind(this), l.on("chainChanged", o)), a || (a = this.onDisconnect.bind(this), l.on("disconnect", a));
        let d = await this.getChainId();
        if (c && d !== c) {
          const p = await this.switchChain({ chainId: c }).catch((f) => {
            if (f.code === D.code)
              throw f;
            return { id: d };
          });
          d = (p == null ? void 0 : p.id) ?? d;
        }
        return { accounts: u, chainId: d };
      } catch (l) {
        throw /(user closed modal|accounts received is empty|user denied account)/i.test(l.message) ? new D(l) : l;
      }
    },
    async disconnect() {
      const c = await this.getProvider();
      s && (c.removeListener("accountsChanged", s), s = void 0), o && (c.removeListener("chainChanged", o), o = void 0), a && (c.removeListener("disconnect", a), a = void 0), c.disconnect(), c.close();
    },
    async getAccounts() {
      return (await (await this.getProvider()).request({
        method: "eth_accounts"
      })).map((l) => H(l));
    },
    async getChainId() {
      const l = await (await this.getProvider()).request({
        method: "eth_chainId"
      });
      return Number(l);
    },
    async getProvider() {
      var c;
      if (!r) {
        const l = await (async () => {
          const { default: m } = await import("./index-D0Wm78mg.js").then((h) => h.i);
          return typeof m != "function" && typeof m.default == "function" ? m.default : m;
        })();
        n = new l({ ...e, reloadOnDisconnect: !1 });
        const u = (c = n.walletExtension) == null ? void 0 : c.getChainId(), d = i.chains.find((m) => e.chainId ? m.id === e.chainId : m.id === u) || i.chains[0], p = e.chainId || (d == null ? void 0 : d.id), f = e.jsonRpcUrl || (d == null ? void 0 : d.rpcUrls.default.http[0]);
        r = n.makeWeb3Provider(f, p);
      }
      return r;
    },
    async isAuthorized() {
      try {
        return !!(await this.getAccounts()).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: c, chainId: l }) {
      var p, f, m, h;
      const u = i.chains.find((b) => b.id === l);
      if (!u)
        throw new J(new Le());
      const d = await this.getProvider();
      try {
        return await d.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: U(u.id) }]
        }), u;
      } catch (b) {
        if (b.code === 4902)
          try {
            let y;
            c != null && c.blockExplorerUrls ? y = c.blockExplorerUrls : y = (p = u.blockExplorers) != null && p.default.url ? [(f = u.blockExplorers) == null ? void 0 : f.default.url] : [];
            let w;
            (m = c == null ? void 0 : c.rpcUrls) != null && m.length ? w = c.rpcUrls : w = [((h = u.rpcUrls.default) == null ? void 0 : h.http[0]) ?? ""];
            const v = {
              blockExplorerUrls: y,
              chainId: U(l),
              chainName: (c == null ? void 0 : c.chainName) ?? u.name,
              iconUrls: c == null ? void 0 : c.iconUrls,
              nativeCurrency: (c == null ? void 0 : c.nativeCurrency) ?? u.nativeCurrency,
              rpcUrls: w
            };
            return await d.request({
              method: "wallet_addEthereumChain",
              params: [v]
            }), u;
          } catch (y) {
            throw new D(y);
          }
        throw new J(b);
      }
    },
    onAccountsChanged(c) {
      c.length === 0 ? this.onDisconnect() : i.emitter.emit("change", {
        accounts: c.map((l) => H(l))
      });
    },
    onChainChanged(c) {
      const l = Number(c);
      i.emitter.emit("change", { chainId: l });
    },
    async onDisconnect(c) {
      i.emitter.emit("disconnect");
      const l = await this.getProvider();
      s && (l.removeListener("accountsChanged", s), s = void 0), o && (l.removeListener("chainChanged", o), o = void 0), a && (l.removeListener("disconnect", a), a = void 0);
    }
  });
}
dc.type = "metaMask";
function dc(e = {}) {
  let t, n, r, s, o, a, i, c;
  return (l) => ({
    id: "metaMaskSDK",
    name: "MetaMask",
    type: dc.type,
    async setup() {
      const u = await this.getProvider();
      u && !a && (a = this.onConnect.bind(this), u.on("connect", a));
    },
    async connect({ chainId: u, isReconnecting: d } = {}) {
      const p = await this.getProvider();
      i || (i = this.onDisplayUri, p.on("display_uri", i));
      let f = [];
      d && (f = await this.getAccounts().catch(() => []));
      try {
        f != null && f.length || (f = (await t.connect()).map((b) => H(b)));
        let m = await this.getChainId();
        if (u && m !== u) {
          const h = await this.switchChain({ chainId: u }).catch((b) => {
            if (b.code === D.code)
              throw b;
            return { id: m };
          });
          m = (h == null ? void 0 : h.id) ?? m;
        }
        return i && (p.removeListener("display_uri", i), i = void 0), a && (p.removeListener("connect", a), a = void 0), s || (s = this.onAccountsChanged.bind(this), p.on("accountsChanged", s)), o || (o = this.onChainChanged.bind(this), p.on("chainChanged", o)), c || (c = this.onDisconnect.bind(this), p.on("disconnect", c)), { accounts: f, chainId: m };
      } catch (m) {
        const h = m;
        throw h.code === D.code ? new D(h) : h.code === ye.code ? new ye(h) : h;
      }
    },
    async disconnect() {
      const u = await this.getProvider();
      s && (u.removeListener("accountsChanged", s), s = void 0), o && (u.removeListener("chainChanged", o), o = void 0), c && (u.removeListener("disconnect", c), c = void 0), a || (a = this.onConnect.bind(this), u.on("connect", a)), await t.terminate();
    },
    async getAccounts() {
      return (await (await this.getProvider()).request({
        method: "eth_accounts"
      })).map((p) => H(p));
    },
    async getChainId() {
      const u = await this.getProvider(), d = u.getChainId() || await (u == null ? void 0 : u.request({ method: "eth_chainId" }));
      return Number(d);
    },
    async getProvider() {
      async function u() {
        const d = await (async () => {
          const { default: p } = await import("./metamask-sdk-DWxEeu6-.js").then((f) => f.m);
          return typeof p != "function" && typeof p.default == "function" ? p.default : p;
        })();
        return t = new d({
          _source: "wagmi",
          // Workaround cast since MetaMask SDK does not support `'exactOptionalPropertyTypes'`
          ...e,
          readonlyRPCMap: Object.fromEntries(l.chains.map((p) => {
            const [f] = uc({
              chain: p,
              transports: l.transports
            });
            return [p.id, f];
          })),
          dappMetadata: e.dappMetadata ?? { name: "wagmi" },
          useDeeplink: e.useDeeplink ?? !0
        }), await t.init(), t.getProvider();
      }
      return n || (r || (r = u()), n = await r), n;
    },
    async isAuthorized() {
      try {
        return !!(await dt(() => wt(() => this.getAccounts(), { timeout: 200 }), {
          delay: 201,
          retryCount: 3
        })).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: u, chainId: d }) {
      var m, h, b, y;
      const p = await this.getProvider(), f = l.chains.find((w) => w.id === d);
      if (!f)
        throw new J(new Le());
      try {
        return await Promise.all([
          p.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: U(d) }]
          }).then(async () => {
            await this.getChainId() === d && l.emitter.emit("change", { chainId: d });
          }),
          new Promise((w) => l.emitter.once("change", ({ chainId: v }) => {
            v === d && w();
          }))
        ]), f;
      } catch (w) {
        const v = w;
        if (v.code === 4902 || // Unwrapping for MetaMask Mobile
        // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
        ((h = (m = v == null ? void 0 : v.data) == null ? void 0 : m.originalError) == null ? void 0 : h.code) === 4902)
          try {
            const { default: E, ...g } = f.blockExplorers ?? {};
            let C;
            u != null && u.blockExplorerUrls ? C = u.blockExplorerUrls : E && (C = [
              E.url,
              ...Object.values(g).map((P) => P.url)
            ]);
            let A;
            (b = u == null ? void 0 : u.rpcUrls) != null && b.length ? A = u.rpcUrls : A = [((y = f.rpcUrls.default) == null ? void 0 : y.http[0]) ?? ""];
            const k = {
              blockExplorerUrls: C,
              chainId: U(d),
              chainName: (u == null ? void 0 : u.chainName) ?? f.name,
              iconUrls: u == null ? void 0 : u.iconUrls,
              nativeCurrency: (u == null ? void 0 : u.nativeCurrency) ?? f.nativeCurrency,
              rpcUrls: A
            };
            if (await p.request({
              method: "wallet_addEthereumChain",
              params: [k]
            }), await this.getChainId() !== d)
              throw new D(new Error("User rejected switch after adding network."));
            return f;
          } catch (E) {
            throw new D(E);
          }
        throw v.code === D.code ? new D(v) : new J(v);
      }
    },
    async onAccountsChanged(u) {
      if (u.length === 0)
        this.onDisconnect();
      else if (l.emitter.listenerCount("connect")) {
        const d = (await this.getChainId()).toString();
        this.onConnect({ chainId: d });
      } else
        l.emitter.emit("change", {
          accounts: u.map((d) => H(d))
        });
    },
    onChainChanged(u) {
      const d = Number(u);
      l.emitter.emit("change", { chainId: d });
    },
    async onConnect(u) {
      const d = await this.getAccounts();
      if (d.length === 0)
        return;
      const p = Number(u.chainId);
      l.emitter.emit("connect", { accounts: d, chainId: p });
      const f = await this.getProvider();
      a && (f.removeListener("connect", a), a = void 0), s || (s = this.onAccountsChanged.bind(this), f.on("accountsChanged", s)), o || (o = this.onChainChanged.bind(this), f.on("chainChanged", o)), c || (c = this.onDisconnect.bind(this), f.on("disconnect", c));
    },
    async onDisconnect(u) {
      const d = await this.getProvider();
      u && u.code === 1013 && d && (await this.getAccounts()).length || (l.emitter.emit("disconnect"), s || (s = this.onAccountsChanged.bind(this), d.on("accountsChanged", s)), o && (d.removeListener("chainChanged", o), o = void 0), c && (d.removeListener("disconnect", c), c = void 0), a || (a = this.onConnect.bind(this), d.on("connect", a)));
    },
    onDisplayUri(u) {
      l.emitter.emit("message", { type: "display_uri", data: u });
    }
  });
}
pc.type = "safe";
function pc(e = {}) {
  const { shimDisconnect: t = !1 } = e;
  let n, r;
  return (s) => ({
    id: "safe",
    name: "Safe",
    type: pc.type,
    async connect() {
      var c;
      const o = await this.getProvider();
      if (!o)
        throw new ge();
      const a = await this.getAccounts(), i = await this.getChainId();
      return r || (r = this.onDisconnect.bind(this), o.on("disconnect", r)), t && await ((c = s.storage) == null ? void 0 : c.removeItem("safe.disconnected")), { accounts: a, chainId: i };
    },
    async disconnect() {
      var a;
      const o = await this.getProvider();
      if (!o)
        throw new ge();
      r && (o.removeListener("disconnect", r), r = void 0), t && await ((a = s.storage) == null ? void 0 : a.setItem("safe.disconnected", !0));
    },
    async getAccounts() {
      const o = await this.getProvider();
      if (!o)
        throw new ge();
      return (await o.request({ method: "eth_accounts" })).map(H);
    },
    async getProvider() {
      if (typeof window < "u" && (window == null ? void 0 : window.parent) !== window) {
        if (!n) {
          const { default: a } = await import("./index-C7hpwChh.js"), i = new a(e), c = await wt(() => i.safe.getInfo(), {
            timeout: e.unstable_getInfoTimeout ?? 10
          });
          if (!c)
            throw new Error("Could not load Safe information");
          const { SafeAppProvider: l } = await import("./index-CgRt0nTT.js").then((u) => u.i);
          n = new l(c, i);
        }
        return n;
      }
    },
    async getChainId() {
      const o = await this.getProvider();
      if (!o)
        throw new ge();
      return Number(o.chainId);
    },
    async isAuthorized() {
      var o;
      try {
        return t && // If shim exists in storage, connector is disconnected
        await ((o = s.storage) == null ? void 0 : o.getItem("safe.disconnected")) ? !1 : !!(await this.getAccounts()).length;
      } catch {
        return !1;
      }
    },
    onAccountsChanged() {
    },
    onChainChanged() {
    },
    onDisconnect() {
      s.emitter.emit("disconnect");
    }
  });
}
fc.type = "walletConnect";
function fc(e) {
  const t = e.isNewChainsStale ?? !0;
  let n, r;
  const s = "eip155";
  let o, a, i, c, l, u;
  return (d) => ({
    id: "walletConnect",
    name: "WalletConnect",
    type: fc.type,
    async setup() {
      const p = await this.getProvider().catch(() => null);
      p && (i || (i = this.onConnect.bind(this), p.on("connect", i)), l || (l = this.onSessionDelete.bind(this), p.on("session_delete", l)));
    },
    async connect({ chainId: p, ...f } = {}) {
      var m, h;
      try {
        const b = await this.getProvider();
        if (!b)
          throw new ge();
        c || (c = this.onDisplayUri, b.on("display_uri", c));
        let y = p;
        if (!y) {
          const g = await ((m = d.storage) == null ? void 0 : m.getItem("state")) ?? {};
          d.chains.some((A) => A.id === g.chainId) ? y = g.chainId : y = (h = d.chains[0]) == null ? void 0 : h.id;
        }
        if (!y)
          throw new Error("No chains found on connector.");
        const w = await this.isChainsStale();
        if (b.session && w && await b.disconnect(), !b.session || w) {
          const g = d.chains.filter((C) => C.id !== y).map((C) => C.id);
          await b.connect({
            optionalChains: [y, ...g],
            ..."pairingTopic" in f ? { pairingTopic: f.pairingTopic } : {}
          }), this.setRequestedChainsIds(d.chains.map((C) => C.id));
        }
        const v = (await b.enable()).map((g) => H(g)), E = await this.getChainId();
        return c && (b.removeListener("display_uri", c), c = void 0), i && (b.removeListener("connect", i), i = void 0), o || (o = this.onAccountsChanged.bind(this), b.on("accountsChanged", o)), a || (a = this.onChainChanged.bind(this), b.on("chainChanged", a)), u || (u = this.onDisconnect.bind(this), b.on("disconnect", u)), l || (l = this.onSessionDelete.bind(this), b.on("session_delete", l)), { accounts: v, chainId: E };
      } catch (b) {
        throw /(user rejected|connection request reset)/i.test(b == null ? void 0 : b.message) ? new D(b) : b;
      }
    },
    async disconnect() {
      const p = await this.getProvider();
      try {
        await (p == null ? void 0 : p.disconnect());
      } catch (f) {
        if (!/No matching key/i.test(f.message))
          throw f;
      } finally {
        a && (p == null || p.removeListener("chainChanged", a), a = void 0), u && (p == null || p.removeListener("disconnect", u), u = void 0), i || (i = this.onConnect.bind(this), p == null || p.on("connect", i)), o && (p == null || p.removeListener("accountsChanged", o), o = void 0), l && (p == null || p.removeListener("session_delete", l), l = void 0), this.setRequestedChainsIds([]);
      }
    },
    async getAccounts() {
      return (await this.getProvider()).accounts.map((f) => H(f));
    },
    async getProvider({ chainId: p } = {}) {
      var m;
      async function f() {
        const h = d.chains.map((y) => y.id);
        if (!h.length)
          return;
        const { EthereumProvider: b } = await import("./index.es-BrSuifod.js");
        return await b.init({
          ...e,
          disableProviderPing: !0,
          optionalChains: h,
          projectId: e.projectId,
          rpcMap: Object.fromEntries(d.chains.map((y) => {
            const [w] = uc({
              chain: y,
              transports: d.transports
            });
            return [y.id, w];
          })),
          showQrModal: e.showQrModal ?? !0
        });
      }
      return n || (r || (r = f()), n = await r, n == null || n.events.setMaxListeners(Number.POSITIVE_INFINITY)), p && await ((m = this.switchChain) == null ? void 0 : m.call(this, { chainId: p })), n;
    },
    async getChainId() {
      return (await this.getProvider()).chainId;
    },
    async isAuthorized() {
      try {
        const [p, f] = await Promise.all([
          this.getAccounts(),
          this.getProvider()
        ]);
        return p.length ? await this.isChainsStale() && f.session ? (await f.disconnect().catch(() => {
        }), !1) : !0 : !1;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: p, chainId: f }) {
      var b, y, w;
      const m = await this.getProvider();
      if (!m)
        throw new ge();
      const h = d.chains.find((v) => v.id === f);
      if (!h)
        throw new J(new Le());
      try {
        await Promise.all([
          new Promise((E) => {
            const g = ({ chainId: C }) => {
              C === f && (d.emitter.off("change", g), E());
            };
            d.emitter.on("change", g);
          }),
          m.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: U(f) }]
          })
        ]);
        const v = await this.getRequestedChainsIds();
        return this.setRequestedChainsIds([...v, f]), h;
      } catch (v) {
        const E = v;
        if (/(user rejected)/i.test(E.message))
          throw new D(E);
        try {
          let g;
          p != null && p.blockExplorerUrls ? g = p.blockExplorerUrls : g = (b = h.blockExplorers) != null && b.default.url ? [(y = h.blockExplorers) == null ? void 0 : y.default.url] : [];
          let C;
          (w = p == null ? void 0 : p.rpcUrls) != null && w.length ? C = p.rpcUrls : C = [...h.rpcUrls.default.http];
          const A = {
            blockExplorerUrls: g,
            chainId: U(f),
            chainName: (p == null ? void 0 : p.chainName) ?? h.name,
            iconUrls: p == null ? void 0 : p.iconUrls,
            nativeCurrency: (p == null ? void 0 : p.nativeCurrency) ?? h.nativeCurrency,
            rpcUrls: C
          };
          await m.request({
            method: "wallet_addEthereumChain",
            params: [A]
          });
          const k = await this.getRequestedChainsIds();
          return this.setRequestedChainsIds([...k, f]), h;
        } catch (g) {
          throw new D(g);
        }
      }
    },
    onAccountsChanged(p) {
      p.length === 0 ? this.onDisconnect() : d.emitter.emit("change", {
        accounts: p.map((f) => H(f))
      });
    },
    onChainChanged(p) {
      const f = Number(p);
      d.emitter.emit("change", { chainId: f });
    },
    async onConnect(p) {
      const f = Number(p.chainId), m = await this.getAccounts();
      d.emitter.emit("connect", { accounts: m, chainId: f });
    },
    async onDisconnect(p) {
      this.setRequestedChainsIds([]), d.emitter.emit("disconnect");
      const f = await this.getProvider();
      o && (f.removeListener("accountsChanged", o), o = void 0), a && (f.removeListener("chainChanged", a), a = void 0), u && (f.removeListener("disconnect", u), u = void 0), l && (f.removeListener("session_delete", l), l = void 0), i || (i = this.onConnect.bind(this), f.on("connect", i));
    },
    onDisplayUri(p) {
      d.emitter.emit("message", { type: "display_uri", data: p });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      var f, m, h;
      return n ? ((h = (m = (f = n.session) == null ? void 0 : f.namespaces[s]) == null ? void 0 : m.accounts) == null ? void 0 : h.map((b) => Number.parseInt(b.split(":")[1] || ""))) ?? [] : [];
    },
    async getRequestedChainsIds() {
      var p;
      return await ((p = d.storage) == null ? void 0 : p.getItem(this.requestedChainsStorageKey)) ?? [];
    },
    /**
     * Checks if the target chains match the chains that were
     * initially requested by the connector for the WalletConnect session.
     * If there is a mismatch, this means that the chains on the connector
     * are considered stale, and need to be revalidated at a later point (via
     * connection).
     *
     * There may be a scenario where a dapp adds a chain to the
     * connector later on, however, this chain will not have been approved or rejected
     * by the wallet. In this case, the chain is considered stale.
     */
    async isChainsStale() {
      if (!t)
        return !1;
      const p = d.chains.map((h) => h.id), f = this.getNamespaceChainsIds();
      if (f.length && !f.some((h) => p.includes(h)))
        return !1;
      const m = await this.getRequestedChainsIds();
      return !p.every((h) => m.includes(h));
    },
    async setRequestedChainsIds(p) {
      var f;
      await ((f = d.storage) == null ? void 0 : f.setItem(this.requestedChainsStorageKey, p));
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    }
  });
}
const Q8 = "5.1.9", l3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  coinbaseWallet: Eo,
  injected: Sr,
  metaMask: dc,
  mock: vo,
  safe: pc,
  version: Q8,
  walletConnect: fc
}, Symbol.toStringTag, { value: "Module" }));
export {
  Fi as a,
  n3 as b,
  a3 as c,
  l3 as d,
  Je as e,
  c3 as f,
  uo as h,
  i3 as i
};
