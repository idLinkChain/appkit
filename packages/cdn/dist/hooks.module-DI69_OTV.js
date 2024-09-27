import { B as D, be as tn, bc as Zt } from "./W3MFrameProviderSingleton-C9zzHw2W.js";
const { Transform: xn } = tn;
var $n = (t) => class en extends xn {
  constructor(n, _, o, i, c) {
    super(c), this._rate = n, this._capacity = _, this._delimitedSuffix = o, this._hashBitLength = i, this._options = c, this._state = new t(), this._state.initialize(n, _), this._finalized = !1;
  }
  _transform(n, _, o) {
    let i = null;
    try {
      this.update(n, _);
    } catch (c) {
      i = c;
    }
    o(i);
  }
  _flush(n) {
    let _ = null;
    try {
      this.push(this.digest());
    } catch (o) {
      _ = o;
    }
    n(_);
  }
  update(n, _) {
    if (!D.isBuffer(n) && typeof n != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Digest already called");
    return D.isBuffer(n) || (n = D.from(n, _)), this._state.absorb(n), this;
  }
  digest(n) {
    if (this._finalized)
      throw new Error("Digest already called");
    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
    let _ = this._state.squeeze(this._hashBitLength / 8);
    return n !== void 0 && (_ = _.toString(n)), this._resetState(), _;
  }
  // remove result from memory
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  // because sometimes we need hash right now and little later
  _clone() {
    const n = new en(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
    return this._state.copy(n._state), n._finalized = this._finalized, n;
  }
};
const { Transform: zn } = tn;
var Cn = (t) => class nn extends zn {
  constructor(n, _, o, i) {
    super(i), this._rate = n, this._capacity = _, this._delimitedSuffix = o, this._options = i, this._state = new t(), this._state.initialize(n, _), this._finalized = !1;
  }
  _transform(n, _, o) {
    let i = null;
    try {
      this.update(n, _);
    } catch (c) {
      i = c;
    }
    o(i);
  }
  _flush() {
  }
  _read(n) {
    this.push(this.squeeze(n));
  }
  update(n, _) {
    if (!D.isBuffer(n) && typeof n != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Squeeze already called");
    return D.isBuffer(n) || (n = D.from(n, _)), this._state.absorb(n), this;
  }
  squeeze(n, _) {
    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
    let o = this._state.squeeze(n);
    return _ !== void 0 && (o = o.toString(_)), o;
  }
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  _clone() {
    const n = new nn(this._rate, this._capacity, this._delimitedSuffix, this._options);
    return this._state.copy(n._state), n._finalized = this._finalized, n;
  }
};
const En = $n, Pn = Cn;
var Hn = function(t) {
  const e = En(t), n = Pn(t);
  return function(_, o) {
    switch (typeof _ == "string" ? _.toLowerCase() : _) {
      case "keccak224":
        return new e(1152, 448, null, 224, o);
      case "keccak256":
        return new e(1088, 512, null, 256, o);
      case "keccak384":
        return new e(832, 768, null, 384, o);
      case "keccak512":
        return new e(576, 1024, null, 512, o);
      case "sha3-224":
        return new e(1152, 448, 6, 224, o);
      case "sha3-256":
        return new e(1088, 512, 6, 256, o);
      case "sha3-384":
        return new e(832, 768, 6, 384, o);
      case "sha3-512":
        return new e(576, 1024, 6, 512, o);
      case "shake128":
        return new n(1344, 256, 31, o);
      case "shake256":
        return new n(1088, 512, 31, o);
      default:
        throw new Error("Invald algorithm: " + _);
    }
  };
}, _n = {};
const Oe = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
_n.p1600 = function(t) {
  for (let e = 0; e < 24; ++e) {
    const n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], _ = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], o = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], i = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], c = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], a = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], l = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], h = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], r = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49];
    let f = h ^ (o << 1 | i >>> 31), s = r ^ (i << 1 | o >>> 31);
    const b = t[0] ^ f, k = t[1] ^ s, g = t[10] ^ f, p = t[11] ^ s, v = t[20] ^ f, z = t[21] ^ s, S = t[30] ^ f, E = t[31] ^ s, C = t[40] ^ f, F = t[41] ^ s;
    f = n ^ (c << 1 | u >>> 31), s = _ ^ (u << 1 | c >>> 31);
    const P = t[2] ^ f, q = t[3] ^ s, w = t[12] ^ f, H = t[13] ^ s, ie = t[22] ^ f, re = t[23] ^ s, se = t[32] ^ f, ce = t[33] ^ s, ue = t[42] ^ f, le = t[43] ^ s;
    f = o ^ (a << 1 | l >>> 31), s = i ^ (l << 1 | a >>> 31);
    const fe = t[4] ^ f, ae = t[5] ^ s, he = t[14] ^ f, pe = t[15] ^ s, de = t[24] ^ f, ve = t[25] ^ s, me = t[34] ^ f, ye = t[35] ^ s, ge = t[44] ^ f, be = t[45] ^ s;
    f = c ^ (h << 1 | r >>> 31), s = u ^ (r << 1 | h >>> 31);
    const ke = t[6] ^ f, we = t[7] ^ s, Se = t[16] ^ f, xe = t[17] ^ s, $e = t[26] ^ f, ze = t[27] ^ s, Ce = t[36] ^ f, Ee = t[37] ^ s, Pe = t[46] ^ f, He = t[47] ^ s;
    f = a ^ (n << 1 | _ >>> 31), s = l ^ (_ << 1 | n >>> 31);
    const Te = t[8] ^ f, De = t[9] ^ s, Ne = t[18] ^ f, Ue = t[19] ^ s, qe = t[28] ^ f, Le = t[29] ^ s, Be = t[38] ^ f, Fe = t[39] ^ s, Me = t[48] ^ f, Ae = t[49] ^ s, J = b, Q = k, X = p << 4 | g >>> 28, Y = g << 4 | p >>> 28, Z = v << 3 | z >>> 29, tt = z << 3 | v >>> 29, et = E << 9 | S >>> 23, nt = S << 9 | E >>> 23, _t = C << 18 | F >>> 14, ot = F << 18 | C >>> 14, it = P << 1 | q >>> 31, rt = q << 1 | P >>> 31, st = H << 12 | w >>> 20, ct = w << 12 | H >>> 20, ut = ie << 10 | re >>> 22, lt = re << 10 | ie >>> 22, ft = ce << 13 | se >>> 19, at = se << 13 | ce >>> 19, ht = ue << 2 | le >>> 30, pt = le << 2 | ue >>> 30, dt = ae << 30 | fe >>> 2, vt = fe << 30 | ae >>> 2, mt = he << 6 | pe >>> 26, yt = pe << 6 | he >>> 26, gt = ve << 11 | de >>> 21, bt = de << 11 | ve >>> 21, kt = me << 15 | ye >>> 17, wt = ye << 15 | me >>> 17, St = be << 29 | ge >>> 3, xt = ge << 29 | be >>> 3, $t = ke << 28 | we >>> 4, zt = we << 28 | ke >>> 4, Ct = xe << 23 | Se >>> 9, Et = Se << 23 | xe >>> 9, Pt = $e << 25 | ze >>> 7, Ht = ze << 25 | $e >>> 7, Tt = Ce << 21 | Ee >>> 11, Dt = Ee << 21 | Ce >>> 11, Nt = He << 24 | Pe >>> 8, Ut = Pe << 24 | He >>> 8, qt = Te << 27 | De >>> 5, Lt = De << 27 | Te >>> 5, Bt = Ne << 20 | Ue >>> 12, Ft = Ue << 20 | Ne >>> 12, Mt = Le << 7 | qe >>> 25, At = qe << 7 | Le >>> 25, Ot = Be << 8 | Fe >>> 24, Wt = Fe << 8 | Be >>> 24, jt = Me << 14 | Ae >>> 18, It = Ae << 14 | Me >>> 18;
    t[0] = J ^ ~st & gt, t[1] = Q ^ ~ct & bt, t[10] = $t ^ ~Bt & Z, t[11] = zt ^ ~Ft & tt, t[20] = it ^ ~mt & Pt, t[21] = rt ^ ~yt & Ht, t[30] = qt ^ ~X & ut, t[31] = Lt ^ ~Y & lt, t[40] = dt ^ ~Ct & Mt, t[41] = vt ^ ~Et & At, t[2] = st ^ ~gt & Tt, t[3] = ct ^ ~bt & Dt, t[12] = Bt ^ ~Z & ft, t[13] = Ft ^ ~tt & at, t[22] = mt ^ ~Pt & Ot, t[23] = yt ^ ~Ht & Wt, t[32] = X ^ ~ut & kt, t[33] = Y ^ ~lt & wt, t[42] = Ct ^ ~Mt & et, t[43] = Et ^ ~At & nt, t[4] = gt ^ ~Tt & jt, t[5] = bt ^ ~Dt & It, t[14] = Z ^ ~ft & St, t[15] = tt ^ ~at & xt, t[24] = Pt ^ ~Ot & _t, t[25] = Ht ^ ~Wt & ot, t[34] = ut ^ ~kt & Nt, t[35] = lt ^ ~wt & Ut, t[44] = Mt ^ ~et & ht, t[45] = At ^ ~nt & pt, t[6] = Tt ^ ~jt & J, t[7] = Dt ^ ~It & Q, t[16] = ft ^ ~St & $t, t[17] = at ^ ~xt & zt, t[26] = Ot ^ ~_t & it, t[27] = Wt ^ ~ot & rt, t[36] = kt ^ ~Nt & qt, t[37] = wt ^ ~Ut & Lt, t[46] = et ^ ~ht & dt, t[47] = nt ^ ~pt & vt, t[8] = jt ^ ~J & st, t[9] = It ^ ~Q & ct, t[18] = St ^ ~$t & Bt, t[19] = xt ^ ~zt & Ft, t[28] = _t ^ ~it & mt, t[29] = ot ^ ~rt & yt, t[38] = Nt ^ ~qt & X, t[39] = Ut ^ ~Lt & Y, t[48] = ht ^ ~dt & Ct, t[49] = pt ^ ~vt & Et, t[0] ^= Oe[e * 2], t[1] ^= Oe[e * 2 + 1];
  }
};
const V = _n;
function B() {
  this.state = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ], this.blockSize = null, this.count = 0, this.squeezing = !1;
}
B.prototype.initialize = function(t, e) {
  for (let n = 0; n < 50; ++n)
    this.state[n] = 0;
  this.blockSize = t / 8, this.count = 0, this.squeezing = !1;
};
B.prototype.absorb = function(t) {
  for (let e = 0; e < t.length; ++e)
    this.state[~~(this.count / 4)] ^= t[e] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (V.p1600(this.state), this.count = 0);
};
B.prototype.absorbLastFewBits = function(t) {
  this.state[~~(this.count / 4)] ^= t << 8 * (this.count % 4), t & 128 && this.count === this.blockSize - 1 && V.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), V.p1600(this.state), this.count = 0, this.squeezing = !0;
};
B.prototype.squeeze = function(t) {
  this.squeezing || this.absorbLastFewBits(1);
  const e = D.alloc(t);
  for (let n = 0; n < t; ++n)
    e[n] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (V.p1600(this.state), this.count = 0);
  return e;
};
B.prototype.copy = function(t) {
  for (let e = 0; e < 50; ++e)
    t.state[e] = this.state[e];
  t.blockSize = this.blockSize, t.count = this.count, t.squeezing = this.squeezing;
};
var Tn = B, t_ = Hn(Tn);
function on(t) {
  var e, n, _ = "";
  if (typeof t == "string" || typeof t == "number")
    _ += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = on(t[e])) && (_ && (_ += " "), _ += n);
    else
      for (e in t)
        t[e] && (_ && (_ += " "), _ += e);
  return _;
}
function We() {
  for (var t, e, n = 0, _ = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = on(t)) && (_ && (_ += " "), _ += e);
  return _;
}
const Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: We,
  default: We
}, Symbol.toStringTag, { value: "Module" })), e_ = /* @__PURE__ */ Zt(Dn);
var W, m, rn, sn, T, je, cn, Vt, te, Kt, Gt, un, O = {}, ln = [], Nn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, G = Array.isArray;
function x(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function fn(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Jt(t, e, n) {
  var _, o, i, c = {};
  for (i in e)
    i == "key" ? _ = e[i] : i == "ref" ? o = e[i] : c[i] = e[i];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? W.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      c[i] === void 0 && (c[i] = t.defaultProps[i]);
  return M(t, c, _, o, null);
}
function M(t, e, n, _, o) {
  var i = { type: t, props: e, key: n, ref: _, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++rn, __i: -1, __u: 0 };
  return o == null && m.vnode != null && m.vnode(i), i;
}
function Un() {
  return { current: null };
}
function j(t) {
  return t.children;
}
function A(t, e) {
  this.props = t, this.context = e;
}
function N(t, e) {
  if (e == null)
    return t.__ ? N(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? N(t) : null;
}
function an(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return an(t);
  }
}
function Qt(t) {
  (!t.__d && (t.__d = !0) && T.push(t) && !K.__r++ || je !== m.debounceRendering) && ((je = m.debounceRendering) || cn)(K);
}
function K() {
  var t, e, n, _, o, i, c, u;
  for (T.sort(Vt); t = T.shift(); )
    t.__d && (e = T.length, _ = void 0, i = (o = (n = t).__v).__e, c = [], u = [], n.__P && ((_ = x({}, o)).__v = o.__v + 1, m.vnode && m.vnode(_), ee(n.__P, _, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, c, i ?? N(o), !!(32 & o.__u), u), _.__v = o.__v, _.__.__k[_.__i] = _, vn(c, _, u), _.__e != i && an(_)), T.length > e && T.sort(Vt));
  K.__r = 0;
}
function hn(t, e, n, _, o, i, c, u, a, l, h) {
  var r, f, s, b, k, g = _ && _.__k || ln, p = e.length;
  for (n.__d = a, qn(n, e, g), a = n.__d, r = 0; r < p; r++)
    (s = n.__k[r]) != null && typeof s != "boolean" && typeof s != "function" && (f = s.__i === -1 ? O : g[s.__i] || O, s.__i = r, ee(t, s, f, o, i, c, u, a, l, h), b = s.__e, s.ref && f.ref != s.ref && (f.ref && ne(f.ref, null, s), h.push(s.ref, s.__c || b, s)), k == null && b != null && (k = b), 65536 & s.__u || f.__k === s.__k ? a = pn(s, a, t) : typeof s.type == "function" && s.__d !== void 0 ? a = s.__d : b && (a = b.nextSibling), s.__d = void 0, s.__u &= -196609);
  n.__d = a, n.__e = k;
}
function qn(t, e, n) {
  var _, o, i, c, u, a = e.length, l = n.length, h = l, r = 0;
  for (t.__k = [], _ = 0; _ < a; _++)
    c = _ + r, (o = t.__k[_] = (o = e[_]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? M(null, o, null, null, null) : G(o) ? M(j, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? M(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = t, o.__b = t.__b + 1, u = Ln(o, n, c, h), o.__i = u, i = null, u !== -1 && (h--, (i = n[u]) && (i.__u |= 131072)), i == null || i.__v === null ? (u == -1 && r--, typeof o.type != "function" && (o.__u |= 65536)) : u !== c && (u == c - 1 ? r-- : u == c + 1 ? r++ : u > c ? h > a - c ? r += u - c : r-- : u < c && (u == c - r ? r -= u - c : r++), u !== _ + r && (o.__u |= 65536))) : (i = n[c]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == t.__d && (t.__d = N(i)), Xt(i, i, !1), n[c] = null, h--);
  if (h)
    for (_ = 0; _ < l; _++)
      (i = n[_]) != null && !(131072 & i.__u) && (i.__e == t.__d && (t.__d = N(i)), Xt(i, i));
}
function pn(t, e, n) {
  var _, o;
  if (typeof t.type == "function") {
    for (_ = t.__k, o = 0; _ && o < _.length; o++)
      _[o] && (_[o].__ = t, e = pn(_[o], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !n.contains(e) && (e = N(t)), n.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function dn(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (G(t) ? t.some(function(n) {
    dn(n, e);
  }) : e.push(t)), e;
}
function Ln(t, e, n, _) {
  var o = t.key, i = t.type, c = n - 1, u = n + 1, a = e[n];
  if (a === null || a && o == a.key && i === a.type && !(131072 & a.__u))
    return n;
  if (_ > (a != null && !(131072 & a.__u) ? 1 : 0))
    for (; c >= 0 || u < e.length; ) {
      if (c >= 0) {
        if ((a = e[c]) && !(131072 & a.__u) && o == a.key && i === a.type)
          return c;
        c--;
      }
      if (u < e.length) {
        if ((a = e[u]) && !(131072 & a.__u) && o == a.key && i === a.type)
          return u;
        u++;
      }
    }
  return -1;
}
function Ie(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Nn.test(e) ? n : n + "px";
}
function I(t, e, n, _, o) {
  var i;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof _ == "string" && (t.style.cssText = _ = ""), _)
          for (e in _)
            n && e in n || Ie(t.style, e, "");
        if (n)
          for (e in n)
            _ && n[e] === _[e] || Ie(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      i = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in t || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? _ ? n.u = _.u : (n.u = te, t.addEventListener(e, i ? Gt : Kt, i)) : t.removeEventListener(e, i ? Gt : Kt, i);
    else {
      if (o == "http://www.w3.org/2000/svg")
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
    }
}
function Re(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e.t == null)
        e.t = te++;
      else if (e.t < n.u)
        return;
      return n(m.event ? m.event(e) : e);
    }
  };
}
function ee(t, e, n, _, o, i, c, u, a, l) {
  var h, r, f, s, b, k, g, p, v, z, S, E, C, F, P, q, w = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & n.__u && (a = !!(32 & n.__u), i = [u = e.__e = n.__e]), (h = m.__b) && h(e);
  t:
    if (typeof w == "function")
      try {
        if (p = e.props, v = "prototype" in w && w.prototype.render, z = (h = w.contextType) && _[h.__c], S = h ? z ? z.props.value : h.__ : _, n.__c ? g = (r = e.__c = n.__c).__ = r.__E : (v ? e.__c = r = new w(p, S) : (e.__c = r = new A(p, S), r.constructor = w, r.render = Fn), z && z.sub(r), r.props = p, r.state || (r.state = {}), r.context = S, r.__n = _, f = r.__d = !0, r.__h = [], r._sb = []), v && r.__s == null && (r.__s = r.state), v && w.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = x({}, r.__s)), x(r.__s, w.getDerivedStateFromProps(p, r.__s))), s = r.props, b = r.state, r.__v = e, f)
          v && w.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), v && r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (v && w.getDerivedStateFromProps == null && p !== s && r.componentWillReceiveProps != null && r.componentWillReceiveProps(p, S), !r.__e && (r.shouldComponentUpdate != null && r.shouldComponentUpdate(p, r.__s, S) === !1 || e.__v === n.__v)) {
            for (e.__v !== n.__v && (r.props = p, r.state = r.__s, r.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(H) {
              H && (H.__ = e);
            }), E = 0; E < r._sb.length; E++)
              r.__h.push(r._sb[E]);
            r._sb = [], r.__h.length && c.push(r);
            break t;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(p, r.__s, S), v && r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(s, b, k);
          });
        }
        if (r.context = S, r.props = p, r.__P = t, r.__e = !1, C = m.__r, F = 0, v) {
          for (r.state = r.__s, r.__d = !1, C && C(e), h = r.render(r.props, r.state, r.context), P = 0; P < r._sb.length; P++)
            r.__h.push(r._sb[P]);
          r._sb = [];
        } else
          do
            r.__d = !1, C && C(e), h = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++F < 25);
        r.state = r.__s, r.getChildContext != null && (_ = x(x({}, _), r.getChildContext())), v && !f && r.getSnapshotBeforeUpdate != null && (k = r.getSnapshotBeforeUpdate(s, b)), hn(t, G(q = h != null && h.type === j && h.key == null ? h.props.children : h) ? q : [q], e, n, _, o, i, c, u, a, l), r.base = e.__e, e.__u &= -161, r.__h.length && c.push(r), g && (r.__E = r.__ = null);
      } catch (H) {
        if (e.__v = null, a || i != null) {
          for (e.__u |= a ? 160 : 32; u && u.nodeType === 8 && u.nextSibling; )
            u = u.nextSibling;
          i[i.indexOf(u)] = null, e.__e = u;
        } else
          e.__e = n.__e, e.__k = n.__k;
        m.__e(H, e, n);
      }
    else
      i == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Bn(n.__e, e, n, _, o, i, c, a, l);
  (h = m.diffed) && h(e);
}
function vn(t, e, n) {
  e.__d = void 0;
  for (var _ = 0; _ < n.length; _++)
    ne(n[_], n[++_], n[++_]);
  m.__c && m.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      m.__e(i, o.__v);
    }
  });
}
function Bn(t, e, n, _, o, i, c, u, a) {
  var l, h, r, f, s, b, k, g = n.props, p = e.props, v = e.type;
  if (v === "svg" ? o = "http://www.w3.org/2000/svg" : v === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (l = 0; l < i.length; l++)
      if ((s = i[l]) && "setAttribute" in s == !!v && (v ? s.localName === v : s.nodeType === 3)) {
        t = s, i[l] = null;
        break;
      }
  }
  if (t == null) {
    if (v === null)
      return document.createTextNode(p);
    t = document.createElementNS(o, v, p.is && p), i = null, u = !1;
  }
  if (v === null)
    g === p || u && t.data === p || (t.data = p);
  else {
    if (i = i && W.call(t.childNodes), g = n.props || O, !u && i != null)
      for (g = {}, l = 0; l < t.attributes.length; l++)
        g[(s = t.attributes[l]).name] = s.value;
    for (l in g)
      if (s = g[l], l != "children") {
        if (l == "dangerouslySetInnerHTML")
          r = s;
        else if (l !== "key" && !(l in p)) {
          if (l == "value" && "defaultValue" in p || l == "checked" && "defaultChecked" in p)
            continue;
          I(t, l, null, s, o);
        }
      }
    for (l in p)
      s = p[l], l == "children" ? f = s : l == "dangerouslySetInnerHTML" ? h = s : l == "value" ? b = s : l == "checked" ? k = s : l === "key" || u && typeof s != "function" || g[l] === s || I(t, l, s, g[l], o);
    if (h)
      u || r && (h.__html === r.__html || h.__html === t.innerHTML) || (t.innerHTML = h.__html), e.__k = [];
    else if (r && (t.innerHTML = ""), hn(t, G(f) ? f : [f], e, n, _, v === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, c, i ? i[0] : n.__k && N(n, 0), u, a), i != null)
      for (l = i.length; l--; )
        i[l] != null && fn(i[l]);
    u || (l = "value", b !== void 0 && (b !== t[l] || v === "progress" && !b || v === "option" && b !== g[l]) && I(t, l, b, g[l], o), l = "checked", k !== void 0 && k !== t[l] && I(t, l, k, g[l], o));
  }
  return t;
}
function ne(t, e, n) {
  try {
    if (typeof t == "function") {
      var _ = typeof t.__u == "function";
      _ && t.__u(), _ && e == null || (t.__u = t(e));
    } else
      t.current = e;
  } catch (o) {
    m.__e(o, n);
  }
}
function Xt(t, e, n) {
  var _, o;
  if (m.unmount && m.unmount(t), (_ = t.ref) && (_.current && _.current !== t.__e || ne(_, null, e)), (_ = t.__c) != null) {
    if (_.componentWillUnmount)
      try {
        _.componentWillUnmount();
      } catch (i) {
        m.__e(i, e);
      }
    _.base = _.__P = null;
  }
  if (_ = t.__k)
    for (o = 0; o < _.length; o++)
      _[o] && Xt(_[o], e, n || typeof t.type != "function");
  n || t.__e == null || fn(t.__e), t.__c = t.__ = t.__e = t.__d = void 0;
}
function Fn(t, e, n) {
  return this.constructor(t, n);
}
function mn(t, e, n) {
  var _, o, i, c;
  m.__ && m.__(t, e), o = (_ = typeof n == "function") ? null : n && n.__k || e.__k, i = [], c = [], ee(e, t = (!_ && n || e).__k = Jt(j, null, [t]), o || O, O, e.namespaceURI, !_ && n ? [n] : o ? null : e.firstChild ? W.call(e.childNodes) : null, i, !_ && n ? n : o ? o.__e : e.firstChild, _, c), vn(i, t, c);
}
function yn(t, e) {
  mn(t, e, yn);
}
function Mn(t, e, n) {
  var _, o, i, c, u = x({}, t.props);
  for (i in t.type && t.type.defaultProps && (c = t.type.defaultProps), e)
    i == "key" ? _ = e[i] : i == "ref" ? o = e[i] : u[i] = e[i] === void 0 && c !== void 0 ? c[i] : e[i];
  return arguments.length > 2 && (u.children = arguments.length > 3 ? W.call(arguments, 2) : n), M(t.type, u, _ || t.key, o || t.ref, null);
}
function An(t, e) {
  var n = { __c: e = "__cC" + un++, __: t, Consumer: function(_, o) {
    return _.children(o);
  }, Provider: function(_) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[e] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(c) {
      this.props.value !== c.value && o.some(function(u) {
        u.__e = !0, Qt(u);
      });
    }, this.sub = function(c) {
      o.push(c);
      var u = c.componentWillUnmount;
      c.componentWillUnmount = function() {
        o && o.splice(o.indexOf(c), 1), u && u.call(c);
      };
    }), _.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
W = ln.slice, m = { __e: function(t, e, n, _) {
  for (var o, i, c; e = e.__; )
    if ((o = e.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), c = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, _ || {}), c = o.__d), c)
          return o.__E = o;
      } catch (u) {
        t = u;
      }
  throw t;
} }, rn = 0, sn = function(t) {
  return t != null && t.constructor == null;
}, A.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = x({}, this.state), typeof t == "function" && (t = t(x({}, n), this.props)), t && x(n, t), t != null && this.__v && (e && this._sb.push(e), Qt(this));
}, A.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Qt(this));
}, A.prototype.render = j, T = [], cn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Vt = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, K.__r = 0, te = 0, Kt = Re(!1), Gt = Re(!0), un = 0;
const On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: A,
  Fragment: j,
  cloneElement: Mn,
  createContext: An,
  createElement: Jt,
  createRef: Un,
  h: Jt,
  hydrate: yn,
  get isValidElement() {
    return sn;
  },
  get options() {
    return m;
  },
  render: mn,
  toChildArray: dn
}, Symbol.toStringTag, { value: "Module" })), n_ = /* @__PURE__ */ Zt(On);
var $, d, Rt, Ve, L = 0, gn = [], y = m, Ke = y.__b, Ge = y.__r, Je = y.diffed, Qe = y.__c, Xe = y.unmount, Ye = y.__;
function U(t, e) {
  y.__h && y.__h(d, t, L || e), L = 0;
  var n = d.__H || (d.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function bn(t) {
  return L = 1, kn(Sn, t);
}
function kn(t, e, n) {
  var _ = U($++, 2);
  if (_.t = t, !_.__c && (_.__ = [n ? n(e) : Sn(void 0, e), function(u) {
    var a = _.__N ? _.__N[0] : _.__[0], l = _.t(a, u);
    a !== l && (_.__N = [l, _.__[1]], _.__c.setState({}));
  }], _.__c = d, !d.u)) {
    var o = function(u, a, l) {
      if (!_.__c.__H)
        return !0;
      var h = _.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (h.every(function(f) {
        return !f.__N;
      }))
        return !i || i.call(this, u, a, l);
      var r = !1;
      return h.forEach(function(f) {
        if (f.__N) {
          var s = f.__[0];
          f.__ = f.__N, f.__N = void 0, s !== f.__[0] && (r = !0);
        }
      }), !(!r && _.__c.props === u) && (!i || i.call(this, u, a, l));
    };
    d.u = !0;
    var i = d.shouldComponentUpdate, c = d.componentWillUpdate;
    d.componentWillUpdate = function(u, a, l) {
      if (this.__e) {
        var h = i;
        i = void 0, o(u, a, l), i = h;
      }
      c && c.call(this, u, a, l);
    }, d.shouldComponentUpdate = o;
  }
  return _.__N || _.__;
}
function Wn(t, e) {
  var n = U($++, 3);
  !y.__s && oe(n.__H, e) && (n.__ = t, n.i = e, d.__H.__h.push(n));
}
function wn(t, e) {
  var n = U($++, 4);
  !y.__s && oe(n.__H, e) && (n.__ = t, n.i = e, d.__h.push(n));
}
function jn(t) {
  return L = 5, _e(function() {
    return { current: t };
  }, []);
}
function In(t, e, n) {
  L = 6, wn(function() {
    return typeof t == "function" ? (t(e()), function() {
      return t(null);
    }) : t ? (t.current = e(), function() {
      return t.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(t));
}
function _e(t, e) {
  var n = U($++, 7);
  return oe(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function Rn(t, e) {
  return L = 8, _e(function() {
    return t;
  }, e);
}
function Vn(t) {
  var e = d.context[t.__c], n = U($++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(d)), e.props.value) : t.__;
}
function Kn(t, e) {
  y.useDebugValue && y.useDebugValue(e ? e(t) : t);
}
function Gn(t) {
  var e = U($++, 10), n = bn();
  return e.__ = t, d.componentDidCatch || (d.componentDidCatch = function(_, o) {
    e.__ && e.__(_, o), n[1](_);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Jn() {
  var t = U($++, 11);
  if (!t.__) {
    for (var e = d.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function Qn() {
  for (var t; t = gn.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(R), t.__H.__h.forEach(Yt), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], y.__e(e, t.__v);
      }
}
y.__b = function(t) {
  d = null, Ke && Ke(t);
}, y.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ye && Ye(t, e);
}, y.__r = function(t) {
  Ge && Ge(t), $ = 0;
  var e = (d = t.__c).__H;
  e && (Rt === d ? (e.__h = [], d.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (e.__h.forEach(R), e.__h.forEach(Yt), e.__h = [], $ = 0)), Rt = d;
}, y.diffed = function(t) {
  Je && Je(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (gn.push(e) !== 1 && Ve === y.requestAnimationFrame || ((Ve = y.requestAnimationFrame) || Xn)(Qn)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), Rt = d = null;
}, y.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(R), n.__h = n.__h.filter(function(_) {
        return !_.__ || Yt(_);
      });
    } catch (_) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], y.__e(_, n.__v);
    }
  }), Qe && Qe(t, e);
}, y.unmount = function(t) {
  Xe && Xe(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(_) {
    try {
      R(_);
    } catch (o) {
      e = o;
    }
  }), n.__H = void 0, e && y.__e(e, n.__v));
};
var Ze = typeof requestAnimationFrame == "function";
function Xn(t) {
  var e, n = function() {
    clearTimeout(_), Ze && cancelAnimationFrame(e), setTimeout(t);
  }, _ = setTimeout(n, 100);
  Ze && (e = requestAnimationFrame(n));
}
function R(t) {
  var e = d, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), d = e;
}
function Yt(t) {
  var e = d;
  t.__c = t.__(), d = e;
}
function oe(t, e) {
  return !t || t.length !== e.length || e.some(function(n, _) {
    return n !== t[_];
  });
}
function Sn(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useCallback: Rn,
  useContext: Vn,
  useDebugValue: Kn,
  useEffect: Wn,
  useErrorBoundary: Gn,
  useId: Jn,
  useImperativeHandle: In,
  useLayoutEffect: wn,
  useMemo: _e,
  useReducer: kn,
  useRef: jn,
  useState: bn
}, Symbol.toStringTag, { value: "Module" })), __ = /* @__PURE__ */ Zt(Yn);
export {
  n_ as a,
  __ as b,
  t_ as j,
  e_ as r
};
