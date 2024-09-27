import { n as I, ba as Rr, B, s as Ba, bb as Bi, bc as Di, bd as Qe, o as Da, b9 as Ha } from "./W3MFrameProviderSingleton-C9zzHw2W.js";
import { a as ce, b as Ir, r as Dt, j as Ua } from "./hooks.module-DI69_OTV.js";
var Hi = {}, Ft = {}, Ar = {};
Object.defineProperty(Ar, "__esModule", { value: !0 });
Ar.walletLogo = void 0;
const Va = (t, e) => {
  let r;
  switch (t) {
    case "standard":
      return r = e, `data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    case "circle":
      return r = e, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
    case "text":
      return r = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogo":
      return r = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    case "textLight":
      return r = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogoLight":
      return r = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    default:
      return r = e, `data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
  }
};
Ar.walletLogo = Va;
var Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.LINK_API_URL = void 0;
Nr.LINK_API_URL = "https://www.walletlink.org";
var _ = {}, Ht = {}, Fe = {};
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.errorValues = Fe.standardErrorCodes = void 0;
Fe.standardErrorCodes = {
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
Fe.errorValues = {
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
var Mr = {}, Lr = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.serialize = t.getErrorCode = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const e = Fe, r = "Unspecified error message.";
  t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function n(h, f = r) {
    if (h && Number.isInteger(h)) {
      const g = h.toString();
      if (u(e.errorValues, g))
        return e.errorValues[g].message;
      if (l(h))
        return t.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return f;
  }
  t.getMessageFromCode = n;
  function s(h) {
    if (!Number.isInteger(h))
      return !1;
    const f = h.toString();
    return !!(e.errorValues[f] || l(h));
  }
  t.isValidCode = s;
  function i(h) {
    var f;
    if (typeof h == "number")
      return h;
    if (o(h))
      return (f = h.code) !== null && f !== void 0 ? f : h.errorCode;
  }
  t.getErrorCode = i;
  function o(h) {
    return typeof h == "object" && h !== null && (typeof h.code == "number" || typeof h.errorCode == "number");
  }
  function a(h, { shouldIncludeStack: f = !1 } = {}) {
    const g = {};
    if (h && typeof h == "object" && !Array.isArray(h) && u(h, "code") && s(h.code)) {
      const b = h;
      g.code = b.code, b.message && typeof b.message == "string" ? (g.message = b.message, u(b, "data") && (g.data = b.data)) : (g.message = n(g.code), g.data = { originalError: c(h) });
    } else
      g.code = e.standardErrorCodes.rpc.internal, g.message = d(h, "message") ? h.message : r, g.data = { originalError: c(h) };
    return f && (g.stack = d(h, "stack") ? h.stack : void 0), g;
  }
  t.serialize = a;
  function l(h) {
    return h >= -32099 && h <= -32e3;
  }
  function c(h) {
    return h && typeof h == "object" && !Array.isArray(h) ? Object.assign({}, h) : h;
  }
  function u(h, f) {
    return Object.prototype.hasOwnProperty.call(h, f);
  }
  function d(h, f) {
    return typeof h == "object" && h !== null && f in h && typeof h[f] == "string";
  }
})(Lr);
Object.defineProperty(Mr, "__esModule", { value: !0 });
Mr.standardErrors = void 0;
const ee = Fe, Ui = Lr;
Mr.standardErrors = {
  rpc: {
    parse: (t) => me(ee.standardErrorCodes.rpc.parse, t),
    invalidRequest: (t) => me(ee.standardErrorCodes.rpc.invalidRequest, t),
    invalidParams: (t) => me(ee.standardErrorCodes.rpc.invalidParams, t),
    methodNotFound: (t) => me(ee.standardErrorCodes.rpc.methodNotFound, t),
    internal: (t) => me(ee.standardErrorCodes.rpc.internal, t),
    server: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: e } = t;
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return me(e, t);
    },
    invalidInput: (t) => me(ee.standardErrorCodes.rpc.invalidInput, t),
    resourceNotFound: (t) => me(ee.standardErrorCodes.rpc.resourceNotFound, t),
    resourceUnavailable: (t) => me(ee.standardErrorCodes.rpc.resourceUnavailable, t),
    transactionRejected: (t) => me(ee.standardErrorCodes.rpc.transactionRejected, t),
    methodNotSupported: (t) => me(ee.standardErrorCodes.rpc.methodNotSupported, t),
    limitExceeded: (t) => me(ee.standardErrorCodes.rpc.limitExceeded, t)
  },
  provider: {
    userRejectedRequest: (t) => it(ee.standardErrorCodes.provider.userRejectedRequest, t),
    unauthorized: (t) => it(ee.standardErrorCodes.provider.unauthorized, t),
    unsupportedMethod: (t) => it(ee.standardErrorCodes.provider.unsupportedMethod, t),
    disconnected: (t) => it(ee.standardErrorCodes.provider.disconnected, t),
    chainDisconnected: (t) => it(ee.standardErrorCodes.provider.chainDisconnected, t),
    unsupportedChain: (t) => it(ee.standardErrorCodes.provider.unsupportedChain, t),
    custom: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: e, message: r, data: n } = t;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new zi(e, r, n);
    }
  }
};
function me(t, e) {
  const [r, n] = Vi(e);
  return new Wi(t, r || (0, Ui.getMessageFromCode)(t), n);
}
function it(t, e) {
  const [r, n] = Vi(e);
  return new zi(t, r || (0, Ui.getMessageFromCode)(t), n);
}
function Vi(t) {
  if (t) {
    if (typeof t == "string")
      return [t];
    if (typeof t == "object" && !Array.isArray(t)) {
      const { message: e, data: r } = t;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e || void 0, r];
    }
  }
  return [];
}
let Wi = class extends Error {
  constructor(e, r, n) {
    if (!Number.isInteger(e))
      throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), this.code = e, n !== void 0 && (this.data = n);
  }
}, zi = class extends Wi {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(e, r, n) {
    if (!Wa(e))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(e, r, n);
  }
};
function Wa(t) {
  return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}
var Tr = {}, Ct = {};
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.isErrorResponse = void 0;
function za(t) {
  return t.errorMessage !== void 0;
}
Ct.isErrorResponse = za;
var kt = {};
Object.defineProperty(kt, "__esModule", { value: !0 });
kt.LIB_VERSION = void 0;
kt.LIB_VERSION = "3.9.3";
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.serializeError = void 0;
const Ja = Ct, qa = kt, Ga = Fe, Za = Lr;
function Qa(t, e) {
  const r = (0, Za.serialize)(Ka(t), {
    shouldIncludeStack: !0
  }), n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  n.searchParams.set("version", qa.LIB_VERSION), n.searchParams.set("code", r.code.toString());
  const s = Xa(r.data, e);
  return s && n.searchParams.set("method", s), n.searchParams.set("message", r.message), Object.assign(Object.assign({}, r), { docUrl: n.href });
}
Tr.serializeError = Qa;
function Ka(t) {
  return typeof t == "string" ? {
    message: t,
    code: Ga.standardErrorCodes.rpc.internal
  } : (0, Ja.isErrorResponse)(t) ? Object.assign(Object.assign({}, t), { message: t.errorMessage, code: t.errorCode, data: { method: t.method } }) : t;
}
function Xa(t, e) {
  const r = t == null ? void 0 : t.method;
  if (r)
    return r;
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
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.standardErrors = t.standardErrorCodes = t.serializeError = t.getMessageFromCode = t.getErrorCode = void 0;
  const e = Fe;
  Object.defineProperty(t, "standardErrorCodes", { enumerable: !0, get: function() {
    return e.standardErrorCodes;
  } });
  const r = Mr;
  Object.defineProperty(t, "standardErrors", { enumerable: !0, get: function() {
    return r.standardErrors;
  } });
  const n = Tr;
  Object.defineProperty(t, "serializeError", { enumerable: !0, get: function() {
    return n.serializeError;
  } });
  const s = Lr;
  Object.defineProperty(t, "getErrorCode", { enumerable: !0, get: function() {
    return s.getErrorCode;
  } }), Object.defineProperty(t, "getMessageFromCode", { enumerable: !0, get: function() {
    return s.getMessageFromCode;
  } });
})(Ht);
var Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.ProviderType = Z.RegExpString = Z.IntNumber = Z.BigIntString = Z.AddressString = Z.HexString = Z.OpaqueType = void 0;
function Ut() {
  return (t) => t;
}
Z.OpaqueType = Ut;
Z.HexString = Ut();
Z.AddressString = Ut();
Z.BigIntString = Ut();
function Ya(t) {
  return Math.floor(t);
}
Z.IntNumber = Ya;
Z.RegExpString = Ut();
var As;
(function(t) {
  t.CoinbaseWallet = "CoinbaseWallet", t.MetaMask = "MetaMask", t.Unselected = "";
})(As || (Z.ProviderType = As = {}));
var ec = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(_, "__esModule", { value: !0 });
_.isMobileWeb = _.getLocation = _.isInIFrame = _.createQrUrl = _.getFavicon = _.range = _.isBigNumber = _.ensureParsedJSONObject = _.ensureBN = _.ensureRegExpString = _.ensureIntNumber = _.ensureBuffer = _.ensureAddressString = _.ensureEvenLengthHexString = _.ensureHexString = _.isHexString = _.prepend0x = _.strip0x = _.has0xPrefix = _.hexStringFromIntNumber = _.intNumberFromHexString = _.bigIntStringFromBN = _.hexStringFromBuffer = _.hexStringToUint8Array = _.uint8ArrayToHex = _.randomBytesHex = void 0;
const De = ec(Rr), rt = Ht, Ee = Z, Ji = /^[0-9]*$/, qi = /^[a-f0-9]*$/;
function tc(t) {
  return Gi(crypto.getRandomValues(new Uint8Array(t)));
}
_.randomBytesHex = tc;
function Gi(t) {
  return [...t].map((e) => e.toString(16).padStart(2, "0")).join("");
}
_.uint8ArrayToHex = Gi;
function rc(t) {
  return new Uint8Array(t.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
_.hexStringToUint8Array = rc;
function nc(t, e = !1) {
  const r = t.toString("hex");
  return (0, Ee.HexString)(e ? `0x${r}` : r);
}
_.hexStringFromBuffer = nc;
function sc(t) {
  return (0, Ee.BigIntString)(t.toString(10));
}
_.bigIntStringFromBN = sc;
function ic(t) {
  return (0, Ee.IntNumber)(new De.default(Wt(t, !1), 16).toNumber());
}
_.intNumberFromHexString = ic;
function oc(t) {
  return (0, Ee.HexString)(`0x${new De.default(t).toString(16)}`);
}
_.hexStringFromIntNumber = oc;
function zn(t) {
  return t.startsWith("0x") || t.startsWith("0X");
}
_.has0xPrefix = zn;
function Pr(t) {
  return zn(t) ? t.slice(2) : t;
}
_.strip0x = Pr;
function Zi(t) {
  return zn(t) ? `0x${t.slice(2)}` : `0x${t}`;
}
_.prepend0x = Zi;
function Vt(t) {
  if (typeof t != "string")
    return !1;
  const e = Pr(t).toLowerCase();
  return qi.test(e);
}
_.isHexString = Vt;
function Qi(t, e = !1) {
  if (typeof t == "string") {
    const r = Pr(t).toLowerCase();
    if (qi.test(r))
      return (0, Ee.HexString)(e ? `0x${r}` : r);
  }
  throw rt.standardErrors.rpc.invalidParams(`"${String(t)}" is not a hexadecimal string`);
}
_.ensureHexString = Qi;
function Wt(t, e = !1) {
  let r = Qi(t, !1);
  return r.length % 2 === 1 && (r = (0, Ee.HexString)(`0${r}`)), e ? (0, Ee.HexString)(`0x${r}`) : r;
}
_.ensureEvenLengthHexString = Wt;
function ac(t) {
  if (typeof t == "string") {
    const e = Pr(t).toLowerCase();
    if (Vt(e) && e.length === 40)
      return (0, Ee.AddressString)(Zi(e));
  }
  throw rt.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(t)}`);
}
_.ensureAddressString = ac;
function cc(t) {
  if (B.isBuffer(t))
    return t;
  if (typeof t == "string") {
    if (Vt(t)) {
      const e = Wt(t, !1);
      return B.from(e, "hex");
    }
    return B.from(t, "utf8");
  }
  throw rt.standardErrors.rpc.invalidParams(`Not binary data: ${String(t)}`);
}
_.ensureBuffer = cc;
function Ki(t) {
  if (typeof t == "number" && Number.isInteger(t))
    return (0, Ee.IntNumber)(t);
  if (typeof t == "string") {
    if (Ji.test(t))
      return (0, Ee.IntNumber)(Number(t));
    if (Vt(t))
      return (0, Ee.IntNumber)(new De.default(Wt(t, !1), 16).toNumber());
  }
  throw rt.standardErrors.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
_.ensureIntNumber = Ki;
function lc(t) {
  if (t instanceof RegExp)
    return (0, Ee.RegExpString)(t.toString());
  throw rt.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(t)}`);
}
_.ensureRegExpString = lc;
function uc(t) {
  if (t !== null && (De.default.isBN(t) || Xi(t)))
    return new De.default(t.toString(10), 10);
  if (typeof t == "number")
    return new De.default(Ki(t));
  if (typeof t == "string") {
    if (Ji.test(t))
      return new De.default(t, 10);
    if (Vt(t))
      return new De.default(Wt(t, !1), 16);
  }
  throw rt.standardErrors.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
_.ensureBN = uc;
function dc(t) {
  if (typeof t == "string")
    return JSON.parse(t);
  if (typeof t == "object")
    return t;
  throw rt.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(t)}`);
}
_.ensureParsedJSONObject = dc;
function Xi(t) {
  if (t == null || typeof t.constructor != "function")
    return !1;
  const { constructor: e } = t;
  return typeof e.config == "function" && typeof e.EUCLID == "number";
}
_.isBigNumber = Xi;
function hc(t, e) {
  return Array.from({ length: e - t }, (r, n) => t + n);
}
_.range = hc;
function fc() {
  const t = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'), { protocol: e, host: r } = document.location, n = t ? t.getAttribute("href") : null;
  return !n || n.startsWith("javascript:") || n.startsWith("vbscript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? e + n : `${e}//${r}${n}`;
}
_.getFavicon = fc;
function gc(t, e, r, n, s, i) {
  const o = n ? "parent-id" : "id", a = new URLSearchParams({
    [o]: t,
    secret: e,
    server: r,
    v: s,
    chainId: i.toString()
  }).toString();
  return `${r}/#/link?${a}`;
}
_.createQrUrl = gc;
function Yi() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
_.isInIFrame = Yi;
function pc() {
  try {
    return Yi() && window.top ? window.top.location : window.location;
  } catch {
    return window.location;
  }
}
_.getLocation = pc;
function mc() {
  var t;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((t = window == null ? void 0 : window.navigator) === null || t === void 0 ? void 0 : t.userAgent);
}
_.isMobileWeb = mc;
var Or = {};
Object.defineProperty(Or, "__esModule", { value: !0 });
Or.ScopedLocalStorage = void 0;
class bc {
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    this.scope = e;
  }
  setItem(e, r) {
    localStorage.setItem(this.scopedKey(e), r);
  }
  getItem(e) {
    return localStorage.getItem(this.scopedKey(e));
  }
  removeItem(e) {
    localStorage.removeItem(this.scopedKey(e));
  }
  clear() {
    const e = this.scopedKey(""), r = [];
    for (let n = 0; n < localStorage.length; n++) {
      const s = localStorage.key(n);
      typeof s == "string" && s.startsWith(e) && r.push(s);
    }
    r.forEach((n) => localStorage.removeItem(n));
  }
  scopedKey(e) {
    return `${this.scope}:${e}`;
  }
}
Or.ScopedLocalStorage = bc;
var bt = {}, zt = {}, Jt = {}, Rt = {};
Object.defineProperty(Rt, "__esModule", { value: !0 });
Rt.EVENTS = void 0;
Rt.EVENTS = {
  STARTED_CONNECTING: "walletlink_sdk.started.connecting",
  CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
  DISCONNECTED: "walletlink_sdk.disconnected",
  METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
  LINKED: "walletlink_sdk.linked",
  FAILURE: "walletlink_sdk.generic_failure",
  SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
  ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
  SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
  UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
  SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
  GENERAL_ERROR: "walletlink_sdk.general_error",
  WEB3_REQUEST: "walletlink_sdk.web3.request",
  WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
  WEB3_RESPONSE: "walletlink_sdk.web3.response",
  METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
  UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
};
var we = {};
Object.defineProperty(we, "__esModule", { value: !0 });
we.RelayAbstract = we.APP_VERSION_KEY = we.LOCAL_STORAGE_ADDRESSES_KEY = we.WALLET_USER_NAME_KEY = void 0;
const Ns = Ht;
we.WALLET_USER_NAME_KEY = "walletUsername";
we.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
we.APP_VERSION_KEY = "AppVersion";
class yc {
  async makeEthereumJSONRPCRequest(e, r) {
    if (!r)
      throw new Error("Error: No jsonRpcUrl provided");
    return window.fetch(r, {
      method: "POST",
      body: JSON.stringify(e),
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    }).then((n) => n.json()).then((n) => {
      if (!n)
        throw Ns.standardErrors.rpc.parse({});
      const s = n, { error: i } = s;
      if (i)
        throw (0, Ns.serializeError)(i, e.method);
      return s;
    });
  }
}
we.RelayAbstract = yc;
var It = {};
Object.defineProperty(It, "__esModule", { value: !0 });
It.Session = void 0;
const Ms = Ba, Ls = _, Ts = "session:id", Ps = "session:secret", Os = "session:linked";
class Jn {
  constructor(e, r, n, s) {
    this._storage = e, this._id = r || (0, Ls.randomBytesHex)(16), this._secret = n || (0, Ls.randomBytesHex)(32), this._key = new Ms.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!s;
  }
  static load(e) {
    const r = e.getItem(Ts), n = e.getItem(Os), s = e.getItem(Ps);
    return r && s ? new Jn(e, r, s, n === "1") : null;
  }
  /**
   * Takes in a session ID and returns the sha256 hash of it.
   * @param sessionId session ID
   */
  static hash(e) {
    return new Ms.sha256().update(e).digest("hex");
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
    return this._storage.setItem(Ts, this._id), this._storage.setItem(Ps, this._secret), this.persistLinked(), this;
  }
  persistLinked() {
    this._storage.setItem(Os, this._linked ? "1" : "0");
  }
}
It.Session = Jn;
var $r = {}, xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.Cipher = void 0;
const cr = _;
class wc {
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
    const r = this.secret;
    if (r.length !== 64)
      throw Error("secret must be 256 bits");
    const n = crypto.getRandomValues(new Uint8Array(12)), s = await crypto.subtle.importKey("raw", (0, cr.hexStringToUint8Array)(r), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), i = new TextEncoder(), o = await window.crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: n
    }, s, i.encode(e)), a = 16, l = o.slice(o.byteLength - a), c = o.slice(0, o.byteLength - a), u = new Uint8Array(l), d = new Uint8Array(c), h = new Uint8Array([...n, ...u, ...d]);
    return (0, cr.uint8ArrayToHex)(h);
  }
  /**
   *
   * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
   */
  async decrypt(e) {
    const r = this.secret;
    if (r.length !== 64)
      throw Error("secret must be 256 bits");
    return new Promise((n, s) => {
      (async function() {
        const i = await crypto.subtle.importKey("raw", (0, cr.hexStringToUint8Array)(r), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), o = (0, cr.hexStringToUint8Array)(e), a = o.slice(0, 12), l = o.slice(12, 28), c = o.slice(28), u = new Uint8Array([...c, ...l]), d = {
          name: "AES-GCM",
          iv: new Uint8Array(a)
        };
        try {
          const h = await window.crypto.subtle.decrypt(d, i, u), f = new TextDecoder();
          n(f.decode(h));
        } catch (h) {
          s(h);
        }
      })();
    });
  }
}
xr.Cipher = wc;
var Fr = {};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.WalletLinkHTTP = void 0;
class Ec {
  constructor(e, r, n) {
    this.linkAPIUrl = e, this.sessionId = r;
    const s = `${r}:${n}`;
    this.auth = `Basic ${btoa(s)}`;
  }
  // mark unseen events as seen
  async markUnseenEventsAsSeen(e) {
    return Promise.all(e.map((r) => fetch(`${this.linkAPIUrl}/events/${r.eventId}/seen`, {
      method: "POST",
      headers: {
        Authorization: this.auth
      }
    }))).catch((r) => console.error("Unabled to mark event as failed:", r));
  }
  async fetchUnseenEvents() {
    var e;
    const r = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: {
        Authorization: this.auth
      }
    });
    if (r.ok) {
      const { events: n, error: s } = await r.json();
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
    throw new Error(`Check unseen events failed: ${r.status}`);
  }
}
Fr.WalletLinkHTTP = Ec;
var yt = {};
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.WalletLinkWebSocket = yt.ConnectionState = void 0;
var ht;
(function(t) {
  t[t.DISCONNECTED = 0] = "DISCONNECTED", t[t.CONNECTING = 1] = "CONNECTING", t[t.CONNECTED = 2] = "CONNECTED";
})(ht || (yt.ConnectionState = ht = {}));
class _c {
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
  constructor(e, r = WebSocket) {
    this.WebSocketClass = r, this.webSocket = null, this.pendingData = [], this.url = e.replace(/^http/, "ws");
  }
  /**
   * Make a websocket connection
   * @returns a Promise that resolves when connected
   */
  async connect() {
    if (this.webSocket)
      throw new Error("webSocket object is not null");
    return new Promise((e, r) => {
      var n;
      let s;
      try {
        this.webSocket = s = new this.WebSocketClass(this.url);
      } catch (i) {
        r(i);
        return;
      }
      (n = this.connectionStateListener) === null || n === void 0 || n.call(this, ht.CONNECTING), s.onclose = (i) => {
        var o;
        this.clearWebSocket(), r(new Error(`websocket error ${i.code}: ${i.reason}`)), (o = this.connectionStateListener) === null || o === void 0 || o.call(this, ht.DISCONNECTED);
      }, s.onopen = (i) => {
        var o;
        e(), (o = this.connectionStateListener) === null || o === void 0 || o.call(this, ht.CONNECTED), this.pendingData.length > 0 && ([...this.pendingData].forEach((l) => this.sendData(l)), this.pendingData = []);
      }, s.onmessage = (i) => {
        var o, a;
        if (i.data === "h")
          (o = this.incomingDataListener) === null || o === void 0 || o.call(this, {
            type: "Heartbeat"
          });
        else
          try {
            const l = JSON.parse(i.data);
            (a = this.incomingDataListener) === null || a === void 0 || a.call(this, l);
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
    const { webSocket: r } = this;
    if (r) {
      this.clearWebSocket(), (e = this.connectionStateListener) === null || e === void 0 || e.call(this, ht.DISCONNECTED), this.connectionStateListener = void 0, this.incomingDataListener = void 0;
      try {
        r.close();
      } catch {
      }
    }
  }
  /**
   * Send data to server
   * @param data text to send
   */
  sendData(e) {
    const { webSocket: r } = this;
    if (!r) {
      this.pendingData.push(e), this.connect();
      return;
    }
    r.send(e);
  }
  clearWebSocket() {
    const { webSocket: e } = this;
    e && (this.webSocket = null, e.onclose = null, e.onerror = null, e.onmessage = null, e.onopen = null);
  }
}
yt.WalletLinkWebSocket = _c;
Object.defineProperty($r, "__esModule", { value: !0 });
$r.WalletLinkConnection = void 0;
const ot = Z, vc = xr, Re = Rt, $s = we, at = It, Sc = Fr, lr = yt, xs = 1e4, Cc = 6e4;
class kc {
  /**
   * Constructor
   * @param session Session
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param listener WalletLinkConnectionUpdateListener
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor({ session: e, linkAPIUrl: r, listener: n, diagnostic: s, WebSocketClass: i = WebSocket }) {
    this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, ot.IntNumber)(1), this._connected = !1, this._linked = !1, this.shouldFetchUnseenEventsOnConnect = !1, this.requestResolutions = /* @__PURE__ */ new Map(), this.handleSessionMetadataUpdated = (a) => {
      if (!a)
        return;
      (/* @__PURE__ */ new Map([
        ["__destroyed", this.handleDestroyed],
        ["EthereumAddress", this.handleAccountUpdated],
        ["WalletUsername", this.handleWalletUsernameUpdated],
        ["AppVersion", this.handleAppVersionUpdated],
        [
          "ChainId",
          (c) => a.JsonRpcUrl && this.handleChainUpdated(c, a.JsonRpcUrl)
        ]
      ])).forEach((c, u) => {
        const d = a[u];
        d !== void 0 && c(d);
      });
    }, this.handleDestroyed = (a) => {
      var l, c;
      a === "1" && ((l = this.listener) === null || l === void 0 || l.resetAndReload(), (c = this.diagnostic) === null || c === void 0 || c.log(Re.EVENTS.METADATA_DESTROYED, {
        alreadyDestroyed: this.isDestroyed,
        sessionIdHash: at.Session.hash(this.session.id)
      }));
    }, this.handleAccountUpdated = async (a) => {
      var l, c;
      try {
        const u = await this.cipher.decrypt(a);
        (l = this.listener) === null || l === void 0 || l.accountUpdated(u);
      } catch {
        (c = this.diagnostic) === null || c === void 0 || c.log(Re.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "selectedAddress"
        });
      }
    }, this.handleMetadataUpdated = async (a, l) => {
      var c, u;
      try {
        const d = await this.cipher.decrypt(l);
        (c = this.listener) === null || c === void 0 || c.metadataUpdated(a, d);
      } catch {
        (u = this.diagnostic) === null || u === void 0 || u.log(Re.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: a
        });
      }
    }, this.handleWalletUsernameUpdated = async (a) => {
      this.handleMetadataUpdated($s.WALLET_USER_NAME_KEY, a);
    }, this.handleAppVersionUpdated = async (a) => {
      this.handleMetadataUpdated($s.APP_VERSION_KEY, a);
    }, this.handleChainUpdated = async (a, l) => {
      var c, u;
      try {
        const d = await this.cipher.decrypt(a), h = await this.cipher.decrypt(l);
        (c = this.listener) === null || c === void 0 || c.chainUpdated(d, h);
      } catch {
        (u = this.diagnostic) === null || u === void 0 || u.log(Re.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "chainId|jsonRpcUrl"
        });
      }
    }, this.session = e, this.cipher = new vc.Cipher(e.secret), this.diagnostic = s, this.listener = n;
    const o = new lr.WalletLinkWebSocket(`${r}/rpc`, i);
    o.setConnectionStateListener(async (a) => {
      var l;
      (l = this.diagnostic) === null || l === void 0 || l.log(Re.EVENTS.CONNECTED_STATE_CHANGE, {
        state: a,
        sessionIdHash: at.Session.hash(e.id)
      });
      let c = !1;
      switch (a) {
        case lr.ConnectionState.DISCONNECTED:
          if (!this.destroyed) {
            const u = async () => {
              await new Promise((d) => setTimeout(d, 5e3)), this.destroyed || o.connect().catch(() => {
                u();
              });
            };
            u();
          }
          break;
        case lr.ConnectionState.CONNECTED:
          try {
            await this.authenticate(), this.sendIsLinked(), this.sendGetSessionConfig(), c = !0;
          } catch {
          }
          this.updateLastHeartbeat(), setInterval(() => {
            this.heartbeat();
          }, xs), this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
          break;
        case lr.ConnectionState.CONNECTING:
          break;
      }
      this.connected !== c && (this.connected = c);
    }), o.setIncomingDataListener((a) => {
      var l, c, u;
      switch (a.type) {
        case "Heartbeat":
          this.updateLastHeartbeat();
          return;
        case "IsLinkedOK":
        case "Linked": {
          const d = a.type === "IsLinkedOK" ? a.linked : void 0;
          (l = this.diagnostic) === null || l === void 0 || l.log(Re.EVENTS.LINKED, {
            sessionIdHash: at.Session.hash(e.id),
            linked: d,
            type: a.type,
            onlineGuests: a.onlineGuests
          }), this.linked = d || a.onlineGuests > 0;
          break;
        }
        case "GetSessionConfigOK":
        case "SessionConfigUpdated": {
          (c = this.diagnostic) === null || c === void 0 || c.log(Re.EVENTS.SESSION_CONFIG_RECEIVED, {
            sessionIdHash: at.Session.hash(e.id),
            metadata_keys: a && a.metadata ? Object.keys(a.metadata) : void 0
          }), this.handleSessionMetadataUpdated(a.metadata);
          break;
        }
        case "Event": {
          this.handleIncomingEvent(a);
          break;
        }
      }
      a.id !== void 0 && ((u = this.requestResolutions.get(a.id)) === null || u === void 0 || u(a));
    }), this.ws = o, this.http = new Sc.WalletLinkHTTP(r, e.id, e.key);
  }
  /**
   * Make a connection to the server
   */
  connect() {
    var e;
    if (this.destroyed)
      throw new Error("instance is destroyed");
    (e = this.diagnostic) === null || e === void 0 || e.log(Re.EVENTS.STARTED_CONNECTING, {
      sessionIdHash: at.Session.hash(this.session.id)
    }), this.ws.connect();
  }
  /**
   * Terminate connection, and mark as destroyed. To reconnect, create a new
   * instance of WalletSDKConnection
   */
  destroy() {
    var e;
    this.destroyed = !0, this.ws.disconnect(), (e = this.diagnostic) === null || e === void 0 || e.log(Re.EVENTS.DISCONNECTED, {
      sessionIdHash: at.Session.hash(this.session.id)
    }), this.listener = void 0;
  }
  get isDestroyed() {
    return this.destroyed;
  }
  get connected() {
    return this._connected;
  }
  set connected(e) {
    var r, n;
    this._connected = e, e && ((r = this.onceConnected) === null || r === void 0 || r.call(this)), (n = this.listener) === null || n === void 0 || n.connectedUpdated(e);
  }
  setOnceConnected(e) {
    return new Promise((r) => {
      this.connected ? e().then(r) : this.onceConnected = () => {
        e().then(r), this.onceConnected = void 0;
      };
    });
  }
  get linked() {
    return this._linked;
  }
  set linked(e) {
    var r, n;
    this._linked = e, e && ((r = this.onceLinked) === null || r === void 0 || r.call(this)), (n = this.listener) === null || n === void 0 || n.linkedUpdated(e);
  }
  setOnceLinked(e) {
    return new Promise((r) => {
      this.linked ? e().then(r) : this.onceLinked = () => {
        e().then(r), this.onceLinked = void 0;
      };
    });
  }
  async handleIncomingEvent(e) {
    var r, n;
    if (!(e.type !== "Event" || e.event !== "Web3Response"))
      try {
        const s = await this.cipher.decrypt(e.data), i = JSON.parse(s);
        if (i.type !== "WEB3_RESPONSE")
          return;
        (r = this.listener) === null || r === void 0 || r.handleWeb3ResponseMessage(i);
      } catch {
        (n = this.diagnostic) === null || n === void 0 || n.log(Re.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "incomingEvent"
        });
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
    this.shouldFetchUnseenEventsOnConnect = !1, (await this.http.fetchUnseenEvents()).forEach((r) => this.handleIncomingEvent(r));
  }
  /**
   * Set session metadata in SessionConfig object
   * @param key
   * @param value
   * @returns a Promise that completes when successful
   */
  async setSessionMetadata(e, r) {
    const n = {
      type: "SetSessionConfig",
      id: (0, ot.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      metadata: { [e]: r }
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
  async publishEvent(e, r, n = !1) {
    const s = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, r), { origin: location.origin, relaySource: window.coinbaseWalletExtension ? "injected_sdk" : "sdk" }))), i = {
      type: "PublishEvent",
      id: (0, ot.IntNumber)(this.nextReqId++),
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
    if (Date.now() - this.lastHeartbeatResponse > xs * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch {
    }
  }
  async makeRequest(e, r = Cc) {
    const n = e.id;
    this.sendData(e);
    let s;
    return Promise.race([
      new Promise((i, o) => {
        s = window.setTimeout(() => {
          o(new Error(`request ${n} timed out`));
        }, r);
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
      id: (0, ot.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      sessionKey: this.session.key
    }, r = await this.makeRequest(e);
    if (r.type === "Fail")
      throw new Error(r.error || "failed to authentcate");
  }
  sendIsLinked() {
    const e = {
      type: "IsLinked",
      id: (0, ot.IntNumber)(this.nextReqId++),
      sessionId: this.session.id
    };
    this.sendData(e);
  }
  sendGetSessionConfig() {
    const e = {
      type: "GetSessionConfig",
      id: (0, ot.IntNumber)(this.nextReqId++),
      sessionId: this.session.id
    };
    this.sendData(e);
  }
}
$r.WalletLinkConnection = kc;
var qt = {}, Gt = {}, qn = {};
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var Rc = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.injectCssReset = void 0;
const Ic = Rc(qn);
function Ac() {
  const t = document.createElement("style");
  t.type = "text/css", t.appendChild(document.createTextNode(Ic.default)), document.documentElement.appendChild(t);
}
Gt.injectCssReset = Ac;
var jr = {}, Br = {}, wt = {}, Dr = {};
Object.defineProperty(Dr, "__esModule", { value: !0 });
Dr.CloseIcon = void 0;
const Fs = ce;
function Nc(t) {
  return (0, Fs.h)(
    "svg",
    Object.assign({ width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Fs.h)("path", { d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z" })
  );
}
Dr.CloseIcon = Nc;
var Hr = {};
Object.defineProperty(Hr, "__esModule", { value: !0 });
Hr.CoinbaseWalletRound = void 0;
const ur = ce;
function Mc(t) {
  return (0, ur.h)(
    "svg",
    Object.assign({ width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, ur.h)("circle", { cx: "14", cy: "14", r: "14", fill: "#0052FF" }),
    (0, ur.h)("path", { d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z", fill: "white" }),
    (0, ur.h)("path", { d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z", fill: "#0052FF" })
  );
}
Hr.CoinbaseWalletRound = Mc;
var Ur = {};
Object.defineProperty(Ur, "__esModule", { value: !0 });
Ur.QRCodeIcon = void 0;
const Tt = ce;
function Lc(t) {
  return (0, Tt.h)(
    "svg",
    Object.assign({ width: "18", height: "18", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Tt.h)("path", { d: "M3 3V8.99939L5 8.99996V5H9V3H3Z" }),
    (0, Tt.h)("path", { d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z" }),
    (0, Tt.h)("path", { d: "M21 9H19V5H15.0006L15 3H21V9Z" }),
    (0, Tt.h)("path", { d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z" })
  );
}
Ur.QRCodeIcon = Lc;
var Vr = {};
function eo(t) {
  this.mode = fe.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
  for (var e = 0, r = this.data.length; e < r; e++) {
    var n = [], s = this.data.charCodeAt(e);
    s > 65536 ? (n[0] = 240 | (s & 1835008) >>> 18, n[1] = 128 | (s & 258048) >>> 12, n[2] = 128 | (s & 4032) >>> 6, n[3] = 128 | s & 63) : s > 2048 ? (n[0] = 224 | (s & 61440) >>> 12, n[1] = 128 | (s & 4032) >>> 6, n[2] = 128 | s & 63) : s > 128 ? (n[0] = 192 | (s & 1984) >>> 6, n[1] = 128 | s & 63) : n[0] = s, this.parsedData.push(n);
  }
  this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
}
eo.prototype = {
  getLength: function(t) {
    return this.parsedData.length;
  },
  write: function(t) {
    for (var e = 0, r = this.parsedData.length; e < r; e++)
      t.put(this.parsedData[e], 8);
  }
};
function Te(t, e) {
  this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
}
Te.prototype = { addData: function(t) {
  var e = new eo(t);
  this.dataList.push(e), this.dataCache = null;
}, isDark: function(t, e) {
  if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
    throw new Error(t + "," + e);
  return this.modules[t][e];
}, getModuleCount: function() {
  return this.moduleCount;
}, make: function() {
  this.makeImpl(!1, this.getBestMaskPattern());
}, makeImpl: function(t, e) {
  this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
  for (var r = 0; r < this.moduleCount; r++) {
    this.modules[r] = new Array(this.moduleCount);
    for (var n = 0; n < this.moduleCount; n++)
      this.modules[r][n] = null;
  }
  this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), this.dataCache == null && (this.dataCache = Te.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e);
}, setupPositionProbePattern: function(t, e) {
  for (var r = -1; r <= 7; r++)
    if (!(t + r <= -1 || this.moduleCount <= t + r))
      for (var n = -1; n <= 7; n++)
        e + n <= -1 || this.moduleCount <= e + n || (0 <= r && r <= 6 && (n == 0 || n == 6) || 0 <= n && n <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= n && n <= 4 ? this.modules[t + r][e + n] = !0 : this.modules[t + r][e + n] = !1);
}, getBestMaskPattern: function() {
  for (var t = 0, e = 0, r = 0; r < 8; r++) {
    this.makeImpl(!0, r);
    var n = V.getLostPoint(this);
    (r == 0 || t > n) && (t = n, e = r);
  }
  return e;
}, createMovieClip: function(t, e, r) {
  var n = t.createEmptyMovieClip(e, r), s = 1;
  this.make();
  for (var i = 0; i < this.modules.length; i++)
    for (var o = i * s, a = 0; a < this.modules[i].length; a++) {
      var l = a * s, c = this.modules[i][a];
      c && (n.beginFill(0, 100), n.moveTo(l, o), n.lineTo(l + s, o), n.lineTo(l + s, o + s), n.lineTo(l, o + s), n.endFill());
    }
  return n;
}, setupTimingPattern: function() {
  for (var t = 8; t < this.moduleCount - 8; t++)
    this.modules[t][6] == null && (this.modules[t][6] = t % 2 == 0);
  for (var e = 8; e < this.moduleCount - 8; e++)
    this.modules[6][e] == null && (this.modules[6][e] = e % 2 == 0);
}, setupPositionAdjustPattern: function() {
  for (var t = V.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
    for (var r = 0; r < t.length; r++) {
      var n = t[e], s = t[r];
      if (this.modules[n][s] == null)
        for (var i = -2; i <= 2; i++)
          for (var o = -2; o <= 2; o++)
            i == -2 || i == 2 || o == -2 || o == 2 || i == 0 && o == 0 ? this.modules[n + i][s + o] = !0 : this.modules[n + i][s + o] = !1;
    }
}, setupTypeNumber: function(t) {
  for (var e = V.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
    var n = !t && (e >> r & 1) == 1;
    this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n;
  }
  for (var r = 0; r < 18; r++) {
    var n = !t && (e >> r & 1) == 1;
    this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n;
  }
}, setupTypeInfo: function(t, e) {
  for (var r = this.errorCorrectLevel << 3 | e, n = V.getBCHTypeInfo(r), s = 0; s < 15; s++) {
    var i = !t && (n >> s & 1) == 1;
    s < 6 ? this.modules[s][8] = i : s < 8 ? this.modules[s + 1][8] = i : this.modules[this.moduleCount - 15 + s][8] = i;
  }
  for (var s = 0; s < 15; s++) {
    var i = !t && (n >> s & 1) == 1;
    s < 8 ? this.modules[8][this.moduleCount - s - 1] = i : s < 9 ? this.modules[8][15 - s - 1 + 1] = i : this.modules[8][15 - s - 1] = i;
  }
  this.modules[this.moduleCount - 8][8] = !t;
}, mapData: function(t, e) {
  for (var r = -1, n = this.moduleCount - 1, s = 7, i = 0, o = this.moduleCount - 1; o > 0; o -= 2)
    for (o == 6 && o--; ; ) {
      for (var a = 0; a < 2; a++)
        if (this.modules[n][o - a] == null) {
          var l = !1;
          i < t.length && (l = (t[i] >>> s & 1) == 1);
          var c = V.getMask(e, n, o - a);
          c && (l = !l), this.modules[n][o - a] = l, s--, s == -1 && (i++, s = 7);
        }
      if (n += r, n < 0 || this.moduleCount <= n) {
        n -= r, r = -r;
        break;
      }
    }
} };
Te.PAD0 = 236;
Te.PAD1 = 17;
Te.createData = function(t, e, r) {
  for (var n = Le.getRSBlocks(t, e), s = new to(), i = 0; i < r.length; i++) {
    var o = r[i];
    s.put(o.mode, 4), s.put(o.getLength(), V.getLengthInBits(o.mode, t)), o.write(s);
  }
  for (var a = 0, i = 0; i < n.length; i++)
    a += n[i].dataCount;
  if (s.getLengthInBits() > a * 8)
    throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + a * 8 + ")");
  for (s.getLengthInBits() + 4 <= a * 8 && s.put(0, 4); s.getLengthInBits() % 8 != 0; )
    s.putBit(!1);
  for (; !(s.getLengthInBits() >= a * 8 || (s.put(Te.PAD0, 8), s.getLengthInBits() >= a * 8)); )
    s.put(Te.PAD1, 8);
  return Te.createBytes(s, n);
};
Te.createBytes = function(t, e) {
  for (var r = 0, n = 0, s = 0, i = new Array(e.length), o = new Array(e.length), a = 0; a < e.length; a++) {
    var l = e[a].dataCount, c = e[a].totalCount - l;
    n = Math.max(n, l), s = Math.max(s, c), i[a] = new Array(l);
    for (var u = 0; u < i[a].length; u++)
      i[a][u] = 255 & t.buffer[u + r];
    r += l;
    var d = V.getErrorCorrectPolynomial(c), h = new ft(i[a], d.getLength() - 1), f = h.mod(d);
    o[a] = new Array(d.getLength() - 1);
    for (var u = 0; u < o[a].length; u++) {
      var g = u + f.getLength() - o[a].length;
      o[a][u] = g >= 0 ? f.get(g) : 0;
    }
  }
  for (var b = 0, u = 0; u < e.length; u++)
    b += e[u].totalCount;
  for (var y = new Array(b), v = 0, u = 0; u < n; u++)
    for (var a = 0; a < e.length; a++)
      u < i[a].length && (y[v++] = i[a][u]);
  for (var u = 0; u < s; u++)
    for (var a = 0; a < e.length; a++)
      u < o[a].length && (y[v++] = o[a][u]);
  return y;
};
var fe = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, He = { L: 1, M: 0, Q: 3, H: 2 }, je = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, V = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function(t) {
  for (var e = t << 10; V.getBCHDigit(e) - V.getBCHDigit(V.G15) >= 0; )
    e ^= V.G15 << V.getBCHDigit(e) - V.getBCHDigit(V.G15);
  return (t << 10 | e) ^ V.G15_MASK;
}, getBCHTypeNumber: function(t) {
  for (var e = t << 12; V.getBCHDigit(e) - V.getBCHDigit(V.G18) >= 0; )
    e ^= V.G18 << V.getBCHDigit(e) - V.getBCHDigit(V.G18);
  return t << 12 | e;
}, getBCHDigit: function(t) {
  for (var e = 0; t != 0; )
    e++, t >>>= 1;
  return e;
}, getPatternPosition: function(t) {
  return V.PATTERN_POSITION_TABLE[t - 1];
}, getMask: function(t, e, r) {
  switch (t) {
    case je.PATTERN000:
      return (e + r) % 2 == 0;
    case je.PATTERN001:
      return e % 2 == 0;
    case je.PATTERN010:
      return r % 3 == 0;
    case je.PATTERN011:
      return (e + r) % 3 == 0;
    case je.PATTERN100:
      return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
    case je.PATTERN101:
      return e * r % 2 + e * r % 3 == 0;
    case je.PATTERN110:
      return (e * r % 2 + e * r % 3) % 2 == 0;
    case je.PATTERN111:
      return (e * r % 3 + (e + r) % 2) % 2 == 0;
    default:
      throw new Error("bad maskPattern:" + t);
  }
}, getErrorCorrectPolynomial: function(t) {
  for (var e = new ft([1], 0), r = 0; r < t; r++)
    e = e.multiply(new ft([1, Y.gexp(r)], 0));
  return e;
}, getLengthInBits: function(t, e) {
  if (1 <= e && e < 10)
    switch (t) {
      case fe.MODE_NUMBER:
        return 10;
      case fe.MODE_ALPHA_NUM:
        return 9;
      case fe.MODE_8BIT_BYTE:
        return 8;
      case fe.MODE_KANJI:
        return 8;
      default:
        throw new Error("mode:" + t);
    }
  else if (e < 27)
    switch (t) {
      case fe.MODE_NUMBER:
        return 12;
      case fe.MODE_ALPHA_NUM:
        return 11;
      case fe.MODE_8BIT_BYTE:
        return 16;
      case fe.MODE_KANJI:
        return 10;
      default:
        throw new Error("mode:" + t);
    }
  else if (e < 41)
    switch (t) {
      case fe.MODE_NUMBER:
        return 14;
      case fe.MODE_ALPHA_NUM:
        return 13;
      case fe.MODE_8BIT_BYTE:
        return 16;
      case fe.MODE_KANJI:
        return 12;
      default:
        throw new Error("mode:" + t);
    }
  else
    throw new Error("type:" + e);
}, getLostPoint: function(t) {
  for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n++)
    for (var s = 0; s < e; s++) {
      for (var i = 0, o = t.isDark(n, s), a = -1; a <= 1; a++)
        if (!(n + a < 0 || e <= n + a))
          for (var l = -1; l <= 1; l++)
            s + l < 0 || e <= s + l || a == 0 && l == 0 || o == t.isDark(n + a, s + l) && i++;
      i > 5 && (r += 3 + i - 5);
    }
  for (var n = 0; n < e - 1; n++)
    for (var s = 0; s < e - 1; s++) {
      var c = 0;
      t.isDark(n, s) && c++, t.isDark(n + 1, s) && c++, t.isDark(n, s + 1) && c++, t.isDark(n + 1, s + 1) && c++, (c == 0 || c == 4) && (r += 3);
    }
  for (var n = 0; n < e; n++)
    for (var s = 0; s < e - 6; s++)
      t.isDark(n, s) && !t.isDark(n, s + 1) && t.isDark(n, s + 2) && t.isDark(n, s + 3) && t.isDark(n, s + 4) && !t.isDark(n, s + 5) && t.isDark(n, s + 6) && (r += 40);
  for (var s = 0; s < e; s++)
    for (var n = 0; n < e - 6; n++)
      t.isDark(n, s) && !t.isDark(n + 1, s) && t.isDark(n + 2, s) && t.isDark(n + 3, s) && t.isDark(n + 4, s) && !t.isDark(n + 5, s) && t.isDark(n + 6, s) && (r += 40);
  for (var u = 0, s = 0; s < e; s++)
    for (var n = 0; n < e; n++)
      t.isDark(n, s) && u++;
  var d = Math.abs(100 * u / e / e - 50) / 5;
  return r += d * 10, r;
} }, Y = { glog: function(t) {
  if (t < 1)
    throw new Error("glog(" + t + ")");
  return Y.LOG_TABLE[t];
}, gexp: function(t) {
  for (; t < 0; )
    t += 255;
  for (; t >= 256; )
    t -= 255;
  return Y.EXP_TABLE[t];
}, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) };
for (var te = 0; te < 8; te++)
  Y.EXP_TABLE[te] = 1 << te;
for (var te = 8; te < 256; te++)
  Y.EXP_TABLE[te] = Y.EXP_TABLE[te - 4] ^ Y.EXP_TABLE[te - 5] ^ Y.EXP_TABLE[te - 6] ^ Y.EXP_TABLE[te - 8];
for (var te = 0; te < 255; te++)
  Y.LOG_TABLE[Y.EXP_TABLE[te]] = te;
function ft(t, e) {
  if (t.length == null)
    throw new Error(t.length + "/" + e);
  for (var r = 0; r < t.length && t[r] == 0; )
    r++;
  this.num = new Array(t.length - r + e);
  for (var n = 0; n < t.length - r; n++)
    this.num[n] = t[n + r];
}
ft.prototype = { get: function(t) {
  return this.num[t];
}, getLength: function() {
  return this.num.length;
}, multiply: function(t) {
  for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++)
    for (var n = 0; n < t.getLength(); n++)
      e[r + n] ^= Y.gexp(Y.glog(this.get(r)) + Y.glog(t.get(n)));
  return new ft(e, 0);
}, mod: function(t) {
  if (this.getLength() - t.getLength() < 0)
    return this;
  for (var e = Y.glog(this.get(0)) - Y.glog(t.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++)
    r[n] = this.get(n);
  for (var n = 0; n < t.getLength(); n++)
    r[n] ^= Y.gexp(Y.glog(t.get(n)) + e);
  return new ft(r, 0).mod(t);
} };
function Le(t, e) {
  this.totalCount = t, this.dataCount = e;
}
Le.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
Le.getRSBlocks = function(t, e) {
  var r = Le.getRsBlockTable(t, e);
  if (r == null)
    throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
  for (var n = r.length / 3, s = [], i = 0; i < n; i++)
    for (var o = r[i * 3 + 0], a = r[i * 3 + 1], l = r[i * 3 + 2], c = 0; c < o; c++)
      s.push(new Le(a, l));
  return s;
};
Le.getRsBlockTable = function(t, e) {
  switch (e) {
    case He.L:
      return Le.RS_BLOCK_TABLE[(t - 1) * 4 + 0];
    case He.M:
      return Le.RS_BLOCK_TABLE[(t - 1) * 4 + 1];
    case He.Q:
      return Le.RS_BLOCK_TABLE[(t - 1) * 4 + 2];
    case He.H:
      return Le.RS_BLOCK_TABLE[(t - 1) * 4 + 3];
    default:
      return;
  }
};
function to() {
  this.buffer = [], this.length = 0;
}
to.prototype = { get: function(t) {
  var e = Math.floor(t / 8);
  return (this.buffer[e] >>> 7 - t % 8 & 1) == 1;
}, put: function(t, e) {
  for (var r = 0; r < e; r++)
    this.putBit((t >>> e - r - 1 & 1) == 1);
}, getLengthInBits: function() {
  return this.length;
}, putBit: function(t) {
  var e = Math.floor(this.length / 8);
  this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
} };
var wn = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
function ro(t) {
  if (this.options = {
    padding: 4,
    width: 256,
    height: 256,
    typeNumber: 4,
    color: "#000000",
    background: "#ffffff",
    ecl: "M",
    image: {
      svg: "",
      width: 0,
      height: 0
    }
  }, typeof t == "string" && (t = {
    content: t
  }), t)
    for (var e in t)
      this.options[e] = t[e];
  if (typeof this.options.content != "string")
    throw new Error("Expected 'content' as string!");
  if (this.options.content.length === 0)
    throw new Error("Expected 'content' to be non-empty!");
  if (!(this.options.padding >= 0))
    throw new Error("Expected 'padding' value to be non-negative!");
  if (!(this.options.width > 0) || !(this.options.height > 0))
    throw new Error("Expected 'width' or 'height' value to be higher than zero!");
  function r(l) {
    switch (l) {
      case "L":
        return He.L;
      case "M":
        return He.M;
      case "Q":
        return He.Q;
      case "H":
        return He.H;
      default:
        throw new Error("Unknwon error correction level: " + l);
    }
  }
  function n(l, c) {
    for (var u = s(l), d = 1, h = 0, f = 0, g = wn.length; f <= g; f++) {
      var b = wn[f];
      if (!b)
        throw new Error("Content too long: expected " + h + " but got " + u);
      switch (c) {
        case "L":
          h = b[0];
          break;
        case "M":
          h = b[1];
          break;
        case "Q":
          h = b[2];
          break;
        case "H":
          h = b[3];
          break;
        default:
          throw new Error("Unknwon error correction level: " + c);
      }
      if (u <= h)
        break;
      d++;
    }
    if (d > wn.length)
      throw new Error("Content too long");
    return d;
  }
  function s(l) {
    var c = encodeURI(l).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
    return c.length + (c.length != l ? 3 : 0);
  }
  var i = this.options.content, o = n(i, this.options.ecl), a = r(this.options.ecl);
  this.qrcode = new Te(o, a), this.qrcode.addData(i), this.qrcode.make();
}
ro.prototype.svg = function(t) {
  var e = this.options || {}, r = this.qrcode.modules;
  typeof t > "u" && (t = { container: e.container || "svg" });
  for (var n = typeof e.pretty < "u" ? !!e.pretty : !0, s = n ? "  " : "", i = n ? `\r
` : "", o = e.width, a = e.height, l = r.length, c = o / (l + 2 * e.padding), u = a / (l + 2 * e.padding), d = typeof e.join < "u" ? !!e.join : !1, h = typeof e.swap < "u" ? !!e.swap : !1, f = typeof e.xmlDeclaration < "u" ? !!e.xmlDeclaration : !0, g = typeof e.predefined < "u" ? !!e.predefined : !1, b = g ? s + '<defs><path id="qrmodule" d="M0 0 h' + u + " v" + c + ' H0 z" style="fill:' + e.color + ';shape-rendering:crispEdges;" /></defs>' + i : "", y = s + '<rect x="0" y="0" width="' + o + '" height="' + a + '" style="fill:' + e.background + ';shape-rendering:crispEdges;"/>' + i, v = "", S = "", p = 0; p < l; p++)
    for (var j = 0; j < l; j++) {
      var E = r[j][p];
      if (E) {
        var M = j * c + e.padding * c, z = p * u + e.padding * u;
        if (h) {
          var ne = M;
          M = z, z = ne;
        }
        if (d) {
          var ue = c + M, K = u + z;
          M = Number.isInteger(M) ? Number(M) : M.toFixed(2), z = Number.isInteger(z) ? Number(z) : z.toFixed(2), ue = Number.isInteger(ue) ? Number(ue) : ue.toFixed(2), K = Number.isInteger(K) ? Number(K) : K.toFixed(2), S += "M" + M + "," + z + " V" + K + " H" + ue + " V" + z + " H" + M + " Z ";
        } else
          g ? v += s + '<use x="' + M.toString() + '" y="' + z.toString() + '" href="#qrmodule" />' + i : v += s + '<rect x="' + M.toString() + '" y="' + z.toString() + '" width="' + c + '" height="' + u + '" style="fill:' + e.color + ';shape-rendering:crispEdges;"/>' + i;
      }
    }
  d && (v = s + '<path x="0" y="0" style="fill:' + e.color + ';shape-rendering:crispEdges;" d="' + S + '" />');
  let pe = "";
  if (this.options.image !== void 0 && this.options.image.svg) {
    const ar = o * this.options.image.width / 100, w = a * this.options.image.height / 100, m = o / 2 - ar / 2, R = a / 2 - w / 2;
    pe += `<svg x="${m}" y="${R}" width="${ar}" height="${w}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`, pe += this.options.image.svg + i, pe += "</svg>";
  }
  var X = "";
  switch (t.container) {
    case "svg":
      f && (X += '<?xml version="1.0" standalone="yes"?>' + i), X += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + o + '" height="' + a + '">' + i, X += b + y + v, X += pe, X += "</svg>";
      break;
    case "svg-viewbox":
      f && (X += '<?xml version="1.0" standalone="yes"?>' + i), X += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + o + " " + a + '">' + i, X += b + y + v, X += pe, X += "</svg>";
      break;
    case "g":
      X += '<g width="' + o + '" height="' + a + '">' + i, X += b + y + v, X += pe, X += "</g>";
      break;
    default:
      X += (b + y + v + pe).replace(/^\s+/, "");
      break;
  }
  return X;
};
var Tc = ro, Pc = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Vr, "__esModule", { value: !0 });
Vr.QRCode = void 0;
const Oc = ce, js = Ir, $c = Pc(Tc), xc = (t) => {
  const [e, r] = (0, js.useState)("");
  return (0, js.useEffect)(() => {
    var n, s;
    const i = new $c.default({
      content: t.content,
      background: t.bgColor || "#ffffff",
      color: t.fgColor || "#000000",
      container: "svg",
      ecl: "M",
      width: (n = t.width) !== null && n !== void 0 ? n : 256,
      height: (s = t.height) !== null && s !== void 0 ? s : 256,
      padding: 0,
      image: t.image
    }), o = B.from(i.svg(), "utf8").toString("base64");
    r(`data:image/svg+xml;base64,${o}`);
  }, [t.bgColor, t.content, t.fgColor, t.height, t.image, t.width]), e ? (0, Oc.h)("img", { src: e, alt: "QR Code" }) : null;
};
Vr.QRCode = xc;
var Wr = {}, Gn = {};
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
var Fc = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Wr, "__esModule", { value: !0 });
Wr.Spinner = void 0;
const dr = ce, jc = Fc(Gn), Bc = (t) => {
  var e;
  const r = (e = t.size) !== null && e !== void 0 ? e : 64, n = t.color || "#000";
  return (0, dr.h)(
    "div",
    { class: "-cbwsdk-spinner" },
    (0, dr.h)("style", null, jc.default),
    (0, dr.h)(
      "svg",
      { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", style: { width: r, height: r } },
      (0, dr.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: n } })
    )
  );
};
Wr.Spinner = Bc;
var Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}";
var no = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.CoinbaseWalletSteps = wt.ConnectContent = void 0;
const Ye = no(Dt), x = ce, Dc = _, Hc = kt, Uc = Dr, Vc = Hr, Wc = Ur, zc = Vr, Jc = Wr, qc = no(Zn), En = {
  title: "Coinbase Wallet app",
  description: "Connect with your self-custody wallet",
  steps: so
}, Gc = (t) => t === "light" ? "#FFFFFF" : "#0A0B0D";
function Zc(t) {
  const { theme: e } = t, r = (0, Dc.createQrUrl)(t.sessionId, t.sessionSecret, t.linkAPIUrl, t.isParentConnection, t.version, t.chainId), n = En.steps;
  return (0, x.h)(
    "div",
    { "data-testid": "connect-content", className: (0, Ye.default)("-cbwsdk-connect-content", e) },
    (0, x.h)("style", null, qc.default),
    (0, x.h)(
      "div",
      { className: "-cbwsdk-connect-content-header" },
      (0, x.h)("h2", { className: (0, Ye.default)("-cbwsdk-connect-content-heading", e) }, "Scan to connect with our mobile app"),
      t.onCancel && (0, x.h)(
        "button",
        { type: "button", className: "-cbwsdk-cancel-button", onClick: t.onCancel },
        (0, x.h)(Uc.CloseIcon, { fill: e === "light" ? "#0A0B0D" : "#FFFFFF" })
      )
    ),
    (0, x.h)(
      "div",
      { className: "-cbwsdk-connect-content-layout" },
      (0, x.h)(
        "div",
        { className: "-cbwsdk-connect-content-column-left" },
        (0, x.h)(Qc, { title: En.title, description: En.description, theme: e })
      ),
      (0, x.h)(
        "div",
        { className: "-cbwsdk-connect-content-column-right" },
        (0, x.h)(
          "div",
          { className: "-cbwsdk-connect-content-qr-wrapper" },
          (0, x.h)(zc.QRCode, { content: r, width: 200, height: 200, fgColor: "#000", bgColor: "transparent" }),
          (0, x.h)("input", { type: "hidden", name: "cbw-cbwsdk-version", value: Hc.LIB_VERSION }),
          (0, x.h)("input", { type: "hidden", value: r })
        ),
        (0, x.h)(n, { theme: e }),
        !t.isConnected && (0, x.h)(
          "div",
          { "data-testid": "connecting-spinner", className: (0, Ye.default)("-cbwsdk-connect-content-qr-connecting", e) },
          (0, x.h)(Jc.Spinner, { size: 36, color: e === "dark" ? "#FFF" : "#000" }),
          (0, x.h)("p", null, "Connecting...")
        )
      )
    )
  );
}
wt.ConnectContent = Zc;
function Qc({ title: t, description: e, theme: r }) {
  return (0, x.h)(
    "div",
    { className: (0, Ye.default)("-cbwsdk-connect-item", r) },
    (0, x.h)(
      "div",
      null,
      (0, x.h)(Vc.CoinbaseWalletRound, null)
    ),
    (0, x.h)(
      "div",
      { className: "-cbwsdk-connect-item-copy-wrapper" },
      (0, x.h)("h3", { className: "-cbwsdk-connect-item-title" }, t),
      (0, x.h)("p", { className: "-cbwsdk-connect-item-description" }, e)
    )
  );
}
function so({ theme: t }) {
  return (0, x.h)(
    "ol",
    { className: "-cbwsdk-wallet-steps" },
    (0, x.h)(
      "li",
      { className: (0, Ye.default)("-cbwsdk-wallet-steps-item", t) },
      (0, x.h)("div", { className: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase Wallet app")
    ),
    (0, x.h)(
      "li",
      { className: (0, Ye.default)("-cbwsdk-wallet-steps-item", t) },
      (0, x.h)(
        "div",
        { className: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, x.h)(
          "span",
          null,
          "Tap ",
          (0, x.h)("strong", null, "Scan"),
          " "
        ),
        (0, x.h)(
          "span",
          { className: (0, Ye.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", t) },
          (0, x.h)(Wc.QRCodeIcon, { fill: Gc(t) })
        )
      )
    )
  );
}
wt.CoinbaseWalletSteps = so;
var zr = {}, Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.ArrowLeftIcon = void 0;
const Bs = ce;
function Kc(t) {
  return (0, Bs.h)(
    "svg",
    Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Bs.h)("path", { d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z" })
  );
}
Jr.ArrowLeftIcon = Kc;
var qr = {};
Object.defineProperty(qr, "__esModule", { value: !0 });
qr.LaptopIcon = void 0;
const _n = ce;
function Xc(t) {
  return (0, _n.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, _n.h)("path", { d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z" }),
    (0, _n.h)("path", { d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z" })
  );
}
qr.LaptopIcon = Xc;
var Gr = {};
Object.defineProperty(Gr, "__esModule", { value: !0 });
Gr.SafeIcon = void 0;
const Ds = ce;
function Yc(t) {
  return (0, Ds.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Ds.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z" })
  );
}
Gr.SafeIcon = Yc;
var Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}";
var io = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.TryExtensionContent = void 0;
const We = io(Dt), G = ce, vn = Ir, el = Jr, tl = qr, rl = Gr, nl = io(Qn);
function sl({ theme: t }) {
  const [e, r] = (0, vn.useState)(!1), n = (0, vn.useCallback)(() => {
    window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank");
  }, []), s = (0, vn.useCallback)(() => {
    e ? window.location.reload() : (n(), r(!0));
  }, [n, e]);
  return (0, G.h)(
    "div",
    { class: (0, We.default)("-cbwsdk-try-extension", t) },
    (0, G.h)("style", null, nl.default),
    (0, G.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, G.h)("h3", { class: (0, We.default)("-cbwsdk-try-extension-heading", t) }, "Or try the Coinbase Wallet browser extension"),
      (0, G.h)(
        "div",
        { class: "-cbwsdk-try-extension-cta-wrapper" },
        (0, G.h)("button", { class: (0, We.default)("-cbwsdk-try-extension-cta", t), onClick: s }, e ? "Refresh" : "Install"),
        (0, G.h)("div", null, !e && (0, G.h)(el.ArrowLeftIcon, { class: "-cbwsdk-try-extension-cta-icon", fill: t === "light" ? "#0052FF" : "#588AF5" }))
      )
    ),
    (0, G.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, G.h)(
        "ul",
        { class: "-cbwsdk-try-extension-list" },
        (0, G.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, G.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, G.h)(
              "span",
              { class: (0, We.default)("-cbwsdk-try-extension-list-item-icon", t) },
              (0, G.h)(tl.LaptopIcon, { fill: t === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, G.h)("div", { class: (0, We.default)("-cbwsdk-try-extension-list-item-copy", t) }, "Connect with dapps with just one click on your desktop browser")
        ),
        (0, G.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, G.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, G.h)(
              "span",
              { class: (0, We.default)("-cbwsdk-try-extension-list-item-icon", t) },
              (0, G.h)(rl.SafeIcon, { fill: t === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, G.h)("div", { class: (0, We.default)("-cbwsdk-try-extension-list-item-copy", t) }, "Add an additional layer of security by using a supported Ledger hardware wallet")
        )
      )
    )
  );
}
zr.TryExtensionContent = sl;
var Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}";
var oo = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Br, "__esModule", { value: !0 });
Br.ConnectDialog = void 0;
const Sn = oo(Dt), ze = ce, Cn = Ir, il = wt, ol = zr, al = oo(Kn), cl = (t) => {
  const { isOpen: e, darkMode: r } = t, [n, s] = (0, Cn.useState)(!e), [i, o] = (0, Cn.useState)(!e);
  (0, Cn.useEffect)(() => {
    const l = [
      window.setTimeout(() => {
        o(!e);
      }, 10)
    ];
    return e ? s(!1) : l.push(window.setTimeout(() => {
      s(!0);
    }, 360)), () => {
      l.forEach(window.clearTimeout);
    };
  }, [e]);
  const a = r ? "dark" : "light";
  return (0, ze.h)(
    "div",
    { class: (0, Sn.default)("-cbwsdk-connect-dialog-container", n && "-cbwsdk-connect-dialog-container-hidden") },
    (0, ze.h)("style", null, al.default),
    (0, ze.h)("div", { class: (0, Sn.default)("-cbwsdk-connect-dialog-backdrop", a, i && "-cbwsdk-connect-dialog-backdrop-hidden") }),
    (0, ze.h)(
      "div",
      { class: "-cbwsdk-connect-dialog" },
      (0, ze.h)(
        "div",
        { class: (0, Sn.default)("-cbwsdk-connect-dialog-box", i && "-cbwsdk-connect-dialog-box-hidden") },
        t.connectDisabled ? null : (0, ze.h)(il.ConnectContent, { theme: a, version: t.version, sessionId: t.sessionId, sessionSecret: t.sessionSecret, linkAPIUrl: t.linkAPIUrl, isConnected: t.isConnected, isParentConnection: t.isParentConnection, chainId: t.chainId, onCancel: t.onCancel }),
        (0, ze.h)(ol.TryExtensionContent, { theme: a })
      )
    )
  );
};
Br.ConnectDialog = cl;
Object.defineProperty(jr, "__esModule", { value: !0 });
jr.LinkFlow = void 0;
const kn = ce, ll = Br;
class ul {
  constructor(e) {
    this.connected = !1, this.chainId = 1, this.isOpen = !1, this.onCancel = null, this.root = null, this.connectDisabled = !1, this.darkMode = e.darkMode, this.version = e.version, this.sessionId = e.sessionId, this.sessionSecret = e.sessionSecret, this.linkAPIUrl = e.linkAPIUrl, this.isParentConnection = e.isParentConnection;
  }
  attach(e) {
    this.root = document.createElement("div"), this.root.className = "-cbwsdk-link-flow-root", e.appendChild(this.root), this.render();
  }
  setConnected(e) {
    this.connected !== e && (this.connected = e, this.render());
  }
  setChainId(e) {
    this.chainId !== e && (this.chainId = e, this.render());
  }
  detach() {
    var e;
    this.root && ((0, kn.render)(null, this.root), (e = this.root.parentElement) === null || e === void 0 || e.removeChild(this.root));
  }
  setConnectDisabled(e) {
    this.connectDisabled = e;
  }
  open(e) {
    this.isOpen = !0, this.onCancel = e.onCancel, this.render();
  }
  close() {
    this.isOpen = !1, this.onCancel = null, this.render();
  }
  render() {
    this.root && (0, kn.render)((0, kn.h)(ll.ConnectDialog, { darkMode: this.darkMode, version: this.version, sessionId: this.sessionId, sessionSecret: this.sessionSecret, linkAPIUrl: this.linkAPIUrl, isOpen: this.isOpen, isConnected: this.connected, isParentConnection: this.isParentConnection, chainId: this.chainId, onCancel: this.onCancel, connectDisabled: this.connectDisabled }), this.root);
  }
}
jr.LinkFlow = ul;
var Xn = {}, Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function(t) {
  var e = I && I.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0;
  const r = e(Dt), n = ce, s = Ir, i = e(Yn), o = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+", a = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
  class l {
    constructor(h) {
      this.items = /* @__PURE__ */ new Map(), this.nextItemKey = 0, this.root = null, this.darkMode = h.darkMode;
    }
    attach(h) {
      this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", h.appendChild(this.root), this.render();
    }
    presentItem(h) {
      const f = this.nextItemKey++;
      return this.items.set(f, h), this.render(), () => {
        this.items.delete(f), this.render();
      };
    }
    clear() {
      this.items.clear(), this.render();
    }
    render() {
      this.root && (0, n.render)((0, n.h)(
        "div",
        null,
        (0, n.h)(t.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([h, f]) => (0, n.h)(t.SnackbarInstance, Object.assign({}, f, { key: h }))))
      ), this.root);
    }
  }
  t.Snackbar = l;
  const c = (d) => (0, n.h)(
    "div",
    { class: (0, r.default)("-cbwsdk-snackbar-container") },
    (0, n.h)("style", null, i.default),
    (0, n.h)("div", { class: "-cbwsdk-snackbar" }, d.children)
  );
  t.SnackbarContainer = c;
  const u = ({ autoExpand: d, message: h, menuItems: f }) => {
    const [g, b] = (0, s.useState)(!0), [y, v] = (0, s.useState)(d ?? !1);
    (0, s.useEffect)(() => {
      const p = [
        window.setTimeout(() => {
          b(!1);
        }, 1),
        window.setTimeout(() => {
          v(!0);
        }, 1e4)
      ];
      return () => {
        p.forEach(window.clearTimeout);
      };
    });
    const S = () => {
      v(!y);
    };
    return (0, n.h)(
      "div",
      { class: (0, r.default)("-cbwsdk-snackbar-instance", g && "-cbwsdk-snackbar-instance-hidden", y && "-cbwsdk-snackbar-instance-expanded") },
      (0, n.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: S },
        (0, n.h)("img", { src: o, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
        " ",
        (0, n.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, h),
        (0, n.h)(
          "div",
          { class: "-gear-container" },
          !y && (0, n.h)(
            "svg",
            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, n.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
          ),
          (0, n.h)("img", { src: a, class: "-gear-icon", title: "Expand" })
        )
      ),
      f && f.length > 0 && (0, n.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, f.map((p, j) => (0, n.h)(
        "div",
        { class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item", p.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: p.onClick, key: j },
        (0, n.h)(
          "svg",
          { width: p.svgWidth, height: p.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          (0, n.h)("path", { "fill-rule": p.defaultFillRule, "clip-rule": p.defaultClipRule, d: p.path, fill: "#AAAAAA" })
        ),
        (0, n.h)("span", { class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item-info", p.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, p.info)
      )))
    );
  };
  t.SnackbarInstance = u;
})(Xn);
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.WalletLinkRelayUI = void 0;
const dl = Gt, hl = jr, fl = Xn;
class gl {
  constructor(e) {
    this.standalone = null, this.attached = !1, this.snackbar = new fl.Snackbar({
      darkMode: e.darkMode
    }), this.linkFlow = new hl.LinkFlow({
      darkMode: e.darkMode,
      version: e.version,
      sessionId: e.session.id,
      sessionSecret: e.session.secret,
      linkAPIUrl: e.linkAPIUrl,
      isParentConnection: !1
    });
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    const e = document.documentElement, r = document.createElement("div");
    r.className = "-cbwsdk-css-reset", e.appendChild(r), this.linkFlow.attach(r), this.snackbar.attach(r), this.attached = !0, (0, dl.injectCssReset)();
  }
  setConnected(e) {
    this.linkFlow.setConnected(e);
  }
  setChainId(e) {
    this.linkFlow.setChainId(e);
  }
  setConnectDisabled(e) {
    this.linkFlow.setConnectDisabled(e);
  }
  /* istanbul ignore next */
  addEthereumChain() {
  }
  // no-op
  /* istanbul ignore next */
  watchAsset() {
  }
  // no-op
  /* istanbul ignore next */
  switchEthereumChain() {
  }
  // no-op
  requestEthereumAccounts(e) {
    this.linkFlow.open({ onCancel: e.onCancel });
  }
  hideRequestEthereumAccounts() {
    this.linkFlow.close();
  }
  /* istanbul ignore next */
  signEthereumMessage() {
  }
  // no-op
  /* istanbul ignore next */
  signEthereumTransaction() {
  }
  // no-op
  /* istanbul ignore next */
  submitEthereumTransaction() {
  }
  // no-op
  /* istanbul ignore next */
  ethereumAddressFromSignedMessage() {
  }
  // no-op
  showConnecting(e) {
    let r;
    return e.isUnlinkedErrorState ? r = {
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
    } : r = {
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
    }, this.snackbar.presentItem(r);
  }
  /* istanbul ignore next */
  reloadUI() {
    document.location.reload();
  }
  /* istanbul ignore next */
  inlineAccountsResponse() {
    return !1;
  }
  /* istanbul ignore next */
  inlineAddEthereumChain() {
    return !1;
  }
  /* istanbul ignore next */
  inlineWatchAsset() {
    return !1;
  }
  /* istanbul ignore next */
  inlineSwitchEthereumChain() {
    return !1;
  }
  /* istanbul ignore next */
  setStandalone(e) {
    this.standalone = e;
  }
  /* istanbul ignore next */
  isStandalone() {
    var e;
    return (e = this.standalone) !== null && e !== void 0 ? e : !1;
  }
}
qt.WalletLinkRelayUI = gl;
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.WalletLinkRelay = void 0;
const ct = Ht, pl = Z, U = _, Je = Rt, Hs = we, Be = It, ml = $r, qe = Ct, bl = qt;
class xe extends Hs.RelayAbstract {
  constructor(e) {
    var r;
    super(), this.accountsCallback = null, this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }, this.chainCallback = null, this.dappDefaultChain = 1, this.appName = "", this.appLogoUrl = null, this.linkedUpdated = (o) => {
      var a;
      this.isLinked = o;
      const l = this.storage.getItem(Hs.LOCAL_STORAGE_ADDRESSES_KEY);
      if (o && (this.session.linked = o), this.isUnlinkedErrorState = !1, l) {
        const c = l.split(" "), u = this.storage.getItem("IsStandaloneSigning") === "true";
        if (c[0] !== "" && !o && this.session.linked && !u) {
          this.isUnlinkedErrorState = !0;
          const d = this.getSessionIdHash();
          (a = this.diagnostic) === null || a === void 0 || a.log(Je.EVENTS.UNLINKED_ERROR_STATE, {
            sessionIdHash: d
          });
        }
      }
    }, this.metadataUpdated = (o, a) => {
      this.storage.setItem(o, a);
    }, this.chainUpdated = (o, a) => {
      this.chainCallbackParams.chainId === o && this.chainCallbackParams.jsonRpcUrl === a || (this.chainCallbackParams = {
        chainId: o,
        jsonRpcUrl: a
      }, this.chainCallback && this.chainCallback(o, a));
    }, this.accountUpdated = (o) => {
      this.accountsCallback && this.accountsCallback([o]), xe.accountRequestCallbackIds.size > 0 && (Array.from(xe.accountRequestCallbackIds.values()).forEach((a) => {
        const l = {
          type: "WEB3_RESPONSE",
          id: a,
          response: {
            method: "requestEthereumAccounts",
            result: [o]
          }
        };
        this.invokeCallback(Object.assign(Object.assign({}, l), { id: a }));
      }), xe.accountRequestCallbackIds.clear());
    }, this.connectedUpdated = (o) => {
      this.ui.setConnected(o);
    }, this.resetAndReload = this.resetAndReload.bind(this), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage, this.options = e;
    const { session: n, ui: s, connection: i } = this.subscribe();
    this._session = n, this.connection = i, this.relayEventManager = e.relayEventManager, this.diagnostic = e.diagnosticLogger, this._reloadOnDisconnect = (r = e.reloadOnDisconnect) !== null && r !== void 0 ? r : !0, this.ui = s;
  }
  subscribe() {
    const e = Be.Session.load(this.storage) || new Be.Session(this.storage).save(), { linkAPIUrl: r, diagnostic: n } = this, s = new ml.WalletLinkConnection({
      session: e,
      linkAPIUrl: r,
      diagnostic: n,
      listener: this
    }), { version: i, darkMode: o } = this.options, a = this.options.uiConstructor({
      linkAPIUrl: r,
      version: i,
      darkMode: o,
      session: e
    });
    return s.connect(), { session: e, ui: a, connection: s };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    Promise.race([
      this.connection.setSessionMetadata("__destroyed", "1"),
      new Promise((e) => setTimeout(() => e(null), 1e3))
    ]).then(() => {
      var e, r;
      const n = this.ui.isStandalone();
      (e = this.diagnostic) === null || e === void 0 || e.log(Je.EVENTS.SESSION_STATE_CHANGE, {
        method: "relay::resetAndReload",
        sessionMetadataChange: "__destroyed, 1",
        sessionIdHash: this.getSessionIdHash()
      }), this.connection.destroy();
      const s = Be.Session.load(this.storage);
      if ((s == null ? void 0 : s.id) === this._session.id ? this.storage.clear() : s && ((r = this.diagnostic) === null || r === void 0 || r.log(Je.EVENTS.SKIPPED_CLEARING_SESSION, {
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: Be.Session.hash(s.id)
      })), this._reloadOnDisconnect) {
        this.ui.reloadUI();
        return;
      }
      this.accountsCallback && this.accountsCallback([], !0);
      const { session: i, ui: o, connection: a } = this.subscribe();
      this._session = i, this.connection = a, this.ui = o, n && this.ui.setStandalone && this.ui.setStandalone(!0), this.options.headlessMode || this.attachUI();
    }).catch((e) => {
      var r;
      (r = this.diagnostic) === null || r === void 0 || r.log(Je.EVENTS.FAILURE, {
        method: "relay::resetAndReload",
        message: `failed to reset and reload with ${e}`,
        sessionIdHash: this.getSessionIdHash()
      });
    });
  }
  setAppInfo(e, r) {
    this.appName = e, this.appLogoUrl = r;
  }
  getStorageItem(e) {
    return this.storage.getItem(e);
  }
  get session() {
    return this._session;
  }
  setStorageItem(e, r) {
    this.storage.setItem(e, r);
  }
  signEthereumMessage(e, r, n, s) {
    return this.sendRequest({
      method: "signEthereumMessage",
      params: {
        message: (0, U.hexStringFromBuffer)(e, !0),
        address: r,
        addPrefix: n,
        typedDataJson: s || null
      }
    });
  }
  ethereumAddressFromSignedMessage(e, r, n) {
    return this.sendRequest({
      method: "ethereumAddressFromSignedMessage",
      params: {
        message: (0, U.hexStringFromBuffer)(e, !0),
        signature: (0, U.hexStringFromBuffer)(r, !0),
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
        weiValue: (0, U.bigIntStringFromBN)(e.weiValue),
        data: (0, U.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? (0, U.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxFeePerGas: e.gasPriceInWei ? (0, U.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxPriorityFeePerGas: e.gasPriceInWei ? (0, U.bigIntStringFromBN)(e.gasPriceInWei) : null,
        gasLimit: e.gasLimit ? (0, U.bigIntStringFromBN)(e.gasLimit) : null,
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
        weiValue: (0, U.bigIntStringFromBN)(e.weiValue),
        data: (0, U.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? (0, U.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxFeePerGas: e.maxFeePerGas ? (0, U.bigIntStringFromBN)(e.maxFeePerGas) : null,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0, U.bigIntStringFromBN)(e.maxPriorityFeePerGas) : null,
        gasLimit: e.gasLimit ? (0, U.bigIntStringFromBN)(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !0
      }
    });
  }
  submitEthereumTransaction(e, r) {
    return this.sendRequest({
      method: "submitEthereumTransaction",
      params: {
        signedTransaction: (0, U.hexStringFromBuffer)(e, !0),
        chainId: r
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
  getQRCodeUrl() {
    return (0, U.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain);
  }
  genericRequest(e, r) {
    return this.sendRequest({
      method: "generic",
      params: {
        action: r,
        data: e
      }
    });
  }
  sendGenericMessage(e) {
    return this.sendRequest(e);
  }
  sendRequest(e) {
    let r = null;
    const n = (0, U.randomBytesHex)(8), s = (o) => {
      this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, e.method, o), r == null || r();
    };
    return { promise: new Promise((o, a) => {
      this.ui.isStandalone() || (r = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: s,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      })), this.relayEventManager.callbacks.set(n, (l) => {
        if (r == null || r(), (0, qe.isErrorResponse)(l))
          return a(new Error(l.errorMessage));
        o(l);
      }), this.ui.isStandalone() ? this.sendRequestStandalone(n, e) : this.publishWeb3RequestEvent(n, e);
    }), cancel: s };
  }
  setConnectDisabled(e) {
    this.ui.setConnectDisabled(e);
  }
  setAccountsCallback(e) {
    this.accountsCallback = e;
  }
  setChainCallback(e) {
    this.chainCallback = e;
  }
  setDappDefaultChainCallback(e) {
    this.dappDefaultChain = e, this.ui instanceof bl.WalletLinkRelayUI && this.ui.setChainId(e);
  }
  publishWeb3RequestEvent(e, r) {
    var n;
    const s = { type: "WEB3_REQUEST", id: e, request: r }, i = Be.Session.load(this.storage);
    (n = this.diagnostic) === null || n === void 0 || n.log(Je.EVENTS.WEB3_REQUEST, {
      eventId: s.id,
      method: `relay::${r.method}`,
      sessionIdHash: this.getSessionIdHash(),
      storedSessionIdHash: i ? Be.Session.hash(i.id) : "",
      isSessionMismatched: ((i == null ? void 0 : i.id) !== this._session.id).toString()
    }), this.publishEvent("Web3Request", s, !0).then((o) => {
      var a;
      (a = this.diagnostic) === null || a === void 0 || a.log(Je.EVENTS.WEB3_REQUEST_PUBLISHED, {
        eventId: s.id,
        method: `relay::${r.method}`,
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: i ? Be.Session.hash(i.id) : "",
        isSessionMismatched: ((i == null ? void 0 : i.id) !== this._session.id).toString()
      });
    }).catch((o) => {
      this.handleWeb3ResponseMessage({
        type: "WEB3_RESPONSE",
        id: s.id,
        response: {
          method: r.method,
          errorMessage: o.message
        }
      });
    });
  }
  publishWeb3RequestCanceledEvent(e) {
    const r = {
      type: "WEB3_REQUEST_CANCELED",
      id: e
    };
    this.publishEvent("Web3RequestCanceled", r, !1).then();
  }
  publishEvent(e, r, n) {
    return this.connection.publishEvent(e, r, n);
  }
  handleWeb3ResponseMessage(e) {
    var r;
    const { response: n } = e;
    if ((r = this.diagnostic) === null || r === void 0 || r.log(Je.EVENTS.WEB3_RESPONSE, {
      eventId: e.id,
      method: `relay::${n.method}`,
      sessionIdHash: this.getSessionIdHash()
    }), n.method === "requestEthereumAccounts") {
      xe.accountRequestCallbackIds.forEach((s) => this.invokeCallback(Object.assign(Object.assign({}, e), { id: s }))), xe.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(e);
  }
  handleErrorResponse(e, r, n, s) {
    var i;
    const o = (i = n == null ? void 0 : n.message) !== null && i !== void 0 ? i : (0, ct.getMessageFromCode)(s);
    this.handleWeb3ResponseMessage({
      type: "WEB3_RESPONSE",
      id: e,
      response: {
        method: r,
        errorMessage: o,
        errorCode: s
      }
    });
  }
  invokeCallback(e) {
    const r = this.relayEventManager.callbacks.get(e.id);
    r && (r(e.response), this.relayEventManager.callbacks.delete(e.id));
  }
  requestEthereumAccounts() {
    const e = {
      method: "requestEthereumAccounts",
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl || null
      }
    }, r = (0, U.randomBytesHex)(8), n = (i) => {
      this.publishWeb3RequestCanceledEvent(r), this.handleErrorResponse(r, e.method, i);
    };
    return { promise: new Promise((i, o) => {
      if (this.relayEventManager.callbacks.set(r, (a) => {
        if (this.ui.hideRequestEthereumAccounts(), (0, qe.isErrorResponse)(a))
          return o(new Error(a.errorMessage));
        i(a);
      }), this.ui.inlineAccountsResponse()) {
        const a = (l) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: r,
            response: { method: "requestEthereumAccounts", result: l }
          });
        };
        this.ui.requestEthereumAccounts({
          onCancel: n,
          onAccounts: a
        });
      } else {
        const a = ct.standardErrors.provider.userRejectedRequest("User denied account authorization");
        this.ui.requestEthereumAccounts({
          onCancel: () => n(a)
        });
      }
      xe.accountRequestCallbackIds.add(r), !this.ui.inlineAccountsResponse() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(r, e);
    }), cancel: n };
  }
  selectProvider(e) {
    const r = {
      method: "selectProvider",
      params: {
        providerOptions: e
      }
    }, n = (0, U.randomBytesHex)(8), s = (o) => {
      this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, r.method, o);
    }, i = new Promise((o, a) => {
      this.relayEventManager.callbacks.set(n, (u) => {
        if ((0, qe.isErrorResponse)(u))
          return a(new Error(u.errorMessage));
        o(u);
      });
      const l = (u) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: n,
          response: { method: "selectProvider", result: pl.ProviderType.Unselected }
        });
      }, c = (u) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: n,
          response: { method: "selectProvider", result: u }
        });
      };
      this.ui.selectProvider && this.ui.selectProvider({
        onApprove: c,
        onCancel: l,
        providerOptions: e
      });
    });
    return { cancel: s, promise: i };
  }
  watchAsset(e, r, n, s, i, o) {
    const a = {
      method: "watchAsset",
      params: {
        type: e,
        options: {
          address: r,
          symbol: n,
          decimals: s,
          image: i
        },
        chainId: o
      }
    };
    let l = null;
    const c = (0, U.randomBytesHex)(8), u = (h) => {
      this.publishWeb3RequestCanceledEvent(c), this.handleErrorResponse(c, a.method, h), l == null || l();
    };
    this.ui.inlineWatchAsset() || (l = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: u,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    }));
    const d = new Promise((h, f) => {
      this.relayEventManager.callbacks.set(c, (y) => {
        if (l == null || l(), (0, qe.isErrorResponse)(y))
          return f(new Error(y.errorMessage));
        h(y);
      });
      const g = (y) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: c,
          response: {
            method: "watchAsset",
            result: !1
          }
        });
      }, b = () => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: c,
          response: {
            method: "watchAsset",
            result: !0
          }
        });
      };
      this.ui.inlineWatchAsset() && this.ui.watchAsset({
        onApprove: b,
        onCancel: g,
        type: e,
        address: r,
        symbol: n,
        decimals: s,
        image: i,
        chainId: o
      }), !this.ui.inlineWatchAsset() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(c, a);
    });
    return { cancel: u, promise: d };
  }
  addEthereumChain(e, r, n, s, i, o) {
    const a = {
      method: "addEthereumChain",
      params: {
        chainId: e,
        rpcUrls: r,
        blockExplorerUrls: s,
        chainName: i,
        iconUrls: n,
        nativeCurrency: o
      }
    };
    let l = null;
    const c = (0, U.randomBytesHex)(8), u = (h) => {
      this.publishWeb3RequestCanceledEvent(c), this.handleErrorResponse(c, a.method, h), l == null || l();
    };
    return this.ui.inlineAddEthereumChain(e) || (l = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: u,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    })), { promise: new Promise((h, f) => {
      this.relayEventManager.callbacks.set(c, (y) => {
        if (l == null || l(), (0, qe.isErrorResponse)(y))
          return f(new Error(y.errorMessage));
        h(y);
      });
      const g = (y) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: c,
          response: {
            method: "addEthereumChain",
            result: {
              isApproved: !1,
              rpcUrl: ""
            }
          }
        });
      }, b = (y) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: c,
          response: {
            method: "addEthereumChain",
            result: {
              isApproved: !0,
              rpcUrl: y
            }
          }
        });
      };
      this.ui.inlineAddEthereumChain(e) && this.ui.addEthereumChain({
        onCancel: g,
        onApprove: b,
        chainId: a.params.chainId,
        rpcUrls: a.params.rpcUrls,
        blockExplorerUrls: a.params.blockExplorerUrls,
        chainName: a.params.chainName,
        iconUrls: a.params.iconUrls,
        nativeCurrency: a.params.nativeCurrency
      }), !this.ui.inlineAddEthereumChain(e) && !this.ui.isStandalone() && this.publishWeb3RequestEvent(c, a);
    }), cancel: u };
  }
  switchEthereumChain(e, r) {
    const n = {
      method: "switchEthereumChain",
      params: Object.assign({ chainId: e }, { address: r })
    }, s = (0, U.randomBytesHex)(8), i = (a) => {
      this.publishWeb3RequestCanceledEvent(s), this.handleErrorResponse(s, n.method, a);
    };
    return { promise: new Promise((a, l) => {
      this.relayEventManager.callbacks.set(s, (d) => {
        if ((0, qe.isErrorResponse)(d) && d.errorCode)
          return l(ct.standardErrors.provider.custom({
            code: d.errorCode,
            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
          }));
        if ((0, qe.isErrorResponse)(d))
          return l(new Error(d.errorMessage));
        a(d);
      });
      const c = (d) => {
        var h;
        if (d) {
          const f = (h = (0, ct.getErrorCode)(d)) !== null && h !== void 0 ? h : ct.standardErrorCodes.provider.unsupportedChain;
          this.handleErrorResponse(s, "switchEthereumChain", d instanceof Error ? d : ct.standardErrors.provider.unsupportedChain(e), f);
        } else
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: s,
            response: {
              method: "switchEthereumChain",
              result: {
                isApproved: !1,
                rpcUrl: ""
              }
            }
          });
      }, u = (d) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: s,
          response: {
            method: "switchEthereumChain",
            result: {
              isApproved: !0,
              rpcUrl: d
            }
          }
        });
      };
      this.ui.switchEthereumChain({
        onCancel: c,
        onApprove: u,
        chainId: n.params.chainId,
        address: n.params.address
      }), !this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(s, n);
    }), cancel: i };
  }
  inlineAddEthereumChain(e) {
    return this.ui.inlineAddEthereumChain(e);
  }
  getSessionIdHash() {
    return Be.Session.hash(this._session.id);
  }
  sendRequestStandalone(e, r) {
    const n = (i) => {
      this.handleErrorResponse(e, r.method, i);
    }, s = (i) => {
      this.handleWeb3ResponseMessage({
        type: "WEB3_RESPONSE",
        id: e,
        response: i
      });
    };
    switch (r.method) {
      case "signEthereumMessage":
        this.ui.signEthereumMessage({
          request: r,
          onSuccess: s,
          onCancel: n
        });
        break;
      case "signEthereumTransaction":
        this.ui.signEthereumTransaction({
          request: r,
          onSuccess: s,
          onCancel: n
        });
        break;
      case "submitEthereumTransaction":
        this.ui.submitEthereumTransaction({
          request: r,
          onSuccess: s,
          onCancel: n
        });
        break;
      case "ethereumAddressFromSignedMessage":
        this.ui.ethereumAddressFromSignedMessage({
          request: r,
          onSuccess: s
        });
        break;
      default:
        n();
        break;
    }
  }
}
Jt.WalletLinkRelay = xe;
xe.accountRequestCallbackIds = /* @__PURE__ */ new Set();
var Zt = {}, Zr = {}, ao = {};
(function(t) {
  var e = I && I.__createBinding || (Object.create ? function(n, s, i, o) {
    o === void 0 && (o = i);
    var a = Object.getOwnPropertyDescriptor(s, i);
    (!a || ("get" in a ? !s.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
      return s[i];
    } }), Object.defineProperty(n, o, a);
  } : function(n, s, i, o) {
    o === void 0 && (o = i), n[o] = s[i];
  }), r = I && I.__exportStar || function(n, s) {
    for (var i in n)
      i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && e(s, n, i);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(Xn, t);
})(ao);
var es = {};
Object.defineProperty(es, "__esModule", { value: !0 });
es.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}";
var co = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Zr, "__esModule", { value: !0 });
Zr.RedirectDialog = void 0;
const yl = co(Dt), Me = ce, wl = Gt, El = ao, _l = co(es);
class vl {
  constructor() {
    this.root = null;
  }
  attach() {
    const e = document.documentElement;
    this.root = document.createElement("div"), this.root.className = "-cbwsdk-css-reset", e.appendChild(this.root), (0, wl.injectCssReset)();
  }
  present(e) {
    this.render(e);
  }
  clear() {
    this.render(null);
  }
  render(e) {
    this.root && ((0, Me.render)(null, this.root), e && (0, Me.render)((0, Me.h)(Sl, Object.assign({}, e, { onDismiss: () => {
      this.clear();
    } })), this.root));
  }
}
Zr.RedirectDialog = vl;
const Sl = ({ title: t, buttonText: e, darkMode: r, onButtonClick: n, onDismiss: s }) => {
  const i = r ? "dark" : "light";
  return (0, Me.h)(
    El.SnackbarContainer,
    { darkMode: r },
    (0, Me.h)(
      "div",
      { class: "-cbwsdk-redirect-dialog" },
      (0, Me.h)("style", null, _l.default),
      (0, Me.h)("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: s }),
      (0, Me.h)(
        "div",
        { class: (0, yl.default)("-cbwsdk-redirect-dialog-box", i) },
        (0, Me.h)("p", null, t),
        (0, Me.h)("button", { onClick: n }, e)
      )
    )
  );
};
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.MobileRelayUI = void 0;
const Cl = Zr;
class kl {
  constructor(e) {
    this.attached = !1, this.darkMode = !1, this.redirectDialog = new Cl.RedirectDialog(), this.darkMode = e.darkMode;
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    this.redirectDialog.attach(), this.attached = !0;
  }
  setConnected(e) {
  }
  // no-op
  redirectToCoinbaseWallet(e) {
    const r = new URL("https://go.cb-w.com/walletlink");
    r.searchParams.append("redirect_url", window.location.href), e && r.searchParams.append("wl_url", e);
    const n = document.createElement("a");
    n.target = "cbw-opener", n.href = r.href, n.rel = "noreferrer noopener", n.click();
  }
  openCoinbaseWalletDeeplink(e) {
    this.redirectDialog.present({
      title: "Redirecting to Coinbase Wallet...",
      buttonText: "Open",
      darkMode: this.darkMode,
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
  hideRequestEthereumAccounts() {
    this.redirectDialog.clear();
  }
  // -- Methods below are not needed for mobile
  requestEthereumAccounts() {
  }
  // no-op
  addEthereumChain() {
  }
  // no-op
  watchAsset() {
  }
  // no-op
  selectProvider() {
  }
  // no-op
  switchEthereumChain() {
  }
  // no-op
  signEthereumMessage() {
  }
  // no-op
  signEthereumTransaction() {
  }
  // no-op
  submitEthereumTransaction() {
  }
  // no-op
  ethereumAddressFromSignedMessage() {
  }
  // no-op
  reloadUI() {
  }
  // no-op
  setStandalone() {
  }
  // no-op
  setConnectDisabled() {
  }
  // no-op
  inlineAccountsResponse() {
    return !1;
  }
  inlineAddEthereumChain() {
    return !1;
  }
  inlineWatchAsset() {
    return !1;
  }
  inlineSwitchEthereumChain() {
    return !1;
  }
  isStandalone() {
    return !1;
  }
}
Zt.MobileRelayUI = kl;
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.MobileRelay = void 0;
const Rl = _, Il = Jt, Al = Zt;
class Nl extends Il.WalletLinkRelay {
  constructor(e) {
    var r;
    super(e), this._enableMobileWalletLink = (r = e.enableMobileWalletLink) !== null && r !== void 0 ? r : !1;
  }
  // override
  requestEthereumAccounts() {
    return this._enableMobileWalletLink ? super.requestEthereumAccounts() : {
      promise: new Promise(() => {
        const e = (0, Rl.getLocation)();
        e.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(e.href)}`;
      }),
      cancel: () => {
      }
    };
  }
  // override
  publishWeb3RequestEvent(e, r) {
    if (super.publishWeb3RequestEvent(e, r), !(this._enableMobileWalletLink && this.ui instanceof Al.MobileRelayUI))
      return;
    let n = !1;
    switch (r.method) {
      case "requestEthereumAccounts":
      case "connectAndSignIn":
        n = !0, this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
        break;
      case "switchEthereumChain":
        return;
      default:
        n = !0, this.ui.openCoinbaseWalletDeeplink();
        break;
    }
    n && window.addEventListener("blur", () => {
      window.addEventListener("focus", () => {
        this.connection.checkUnseenEvents();
      }, { once: !0 });
    }, { once: !0 });
  }
  // override
  handleWeb3ResponseMessage(e) {
    super.handleWeb3ResponseMessage(e);
  }
  connectAndSignIn(e) {
    if (!this._enableMobileWalletLink)
      throw new Error("connectAndSignIn is supported only when enableMobileWalletLink is on");
    return this.sendRequest({
      method: "connectAndSignIn",
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl,
        domain: window.location.hostname,
        aud: window.location.href,
        version: "1",
        type: "eip4361",
        nonce: e.nonce,
        iat: (/* @__PURE__ */ new Date()).toISOString(),
        chainId: `eip155:${this.dappDefaultChain}`,
        statement: e.statement,
        resources: e.resources
      }
    });
  }
}
zt.MobileRelay = Nl;
const Ml = Ua, Ll = Rr;
function lo(t) {
  return B.allocUnsafe(t).fill(0);
}
function uo(t, e, r) {
  const n = lo(e);
  return t = Qr(t), r ? t.length < e ? (t.copy(n), n) : t.slice(0, e) : t.length < e ? (t.copy(n, e - t.length), n) : t.slice(-e);
}
function Tl(t, e) {
  return uo(t, e, !0);
}
function Qr(t) {
  if (!B.isBuffer(t))
    if (Array.isArray(t))
      t = B.from(t);
    else if (typeof t == "string")
      ho(t) ? t = B.from($l(fo(t)), "hex") : t = B.from(t);
    else if (typeof t == "number")
      t = intToBuffer(t);
    else if (t == null)
      t = B.allocUnsafe(0);
    else if (Ll.isBN(t))
      t = t.toArrayLike(B);
    else if (t.toArray)
      t = B.from(t.toArray());
    else
      throw new Error("invalid type");
  return t;
}
function Pl(t) {
  return t = Qr(t), "0x" + t.toString("hex");
}
function Ol(t, e) {
  return t = Qr(t), e || (e = 256), Ml("keccak" + e).update(t).digest();
}
function $l(t) {
  return t.length % 2 ? "0" + t : t;
}
function ho(t) {
  return typeof t == "string" && t.match(/^0x[0-9A-Fa-f]*$/);
}
function fo(t) {
  return typeof t == "string" && t.startsWith("0x") ? t.slice(2) : t;
}
var go = {
  zeros: lo,
  setLength: uo,
  setLengthRight: Tl,
  isHexString: ho,
  stripHexPrefix: fo,
  toBuffer: Qr,
  bufferToHex: Pl,
  keccak: Ol
};
const et = go, Ke = Rr;
function po(t) {
  return t.startsWith("int[") ? "int256" + t.slice(3) : t === "int" ? "int256" : t.startsWith("uint[") ? "uint256" + t.slice(4) : t === "uint" ? "uint256" : t.startsWith("fixed[") ? "fixed128x128" + t.slice(5) : t === "fixed" ? "fixed128x128" : t.startsWith("ufixed[") ? "ufixed128x128" + t.slice(6) : t === "ufixed" ? "ufixed128x128" : t;
}
function gt(t) {
  return parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
}
function Us(t) {
  var e = /^\D+(\d+)x(\d+)$/.exec(t);
  return [parseInt(e[1], 10), parseInt(e[2], 10)];
}
function mo(t) {
  var e = t.match(/(.*)\[(.*?)\]$/);
  return e ? e[2] === "" ? "dynamic" : parseInt(e[2], 10) : null;
}
function Ge(t) {
  var e = typeof t;
  if (e === "string")
    return et.isHexString(t) ? new Ke(et.stripHexPrefix(t), 16) : new Ke(t, 10);
  if (e === "number")
    return new Ke(t);
  if (t.toArray)
    return t;
  throw new Error("Argument is not a number");
}
function Ne(t, e) {
  var r, n, s, i;
  if (t === "address")
    return Ne("uint160", Ge(e));
  if (t === "bool")
    return Ne("uint8", e ? 1 : 0);
  if (t === "string")
    return Ne("bytes", new B(e, "utf8"));
  if (Fl(t)) {
    if (typeof e.length > "u")
      throw new Error("Not an array?");
    if (r = mo(t), r !== "dynamic" && r !== 0 && e.length > r)
      throw new Error("Elements exceed array size: " + r);
    s = [], t = t.slice(0, t.lastIndexOf("[")), typeof e == "string" && (e = JSON.parse(e));
    for (i in e)
      s.push(Ne(t, e[i]));
    if (r === "dynamic") {
      var o = Ne("uint256", e.length);
      s.unshift(o);
    }
    return B.concat(s);
  } else {
    if (t === "bytes")
      return e = new B(e), s = B.concat([Ne("uint256", e.length), e]), e.length % 32 !== 0 && (s = B.concat([s, et.zeros(32 - e.length % 32)])), s;
    if (t.startsWith("bytes")) {
      if (r = gt(t), r < 1 || r > 32)
        throw new Error("Invalid bytes<N> width: " + r);
      return et.setLengthRight(e, 32);
    } else if (t.startsWith("uint")) {
      if (r = gt(t), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid uint<N> width: " + r);
      if (n = Ge(e), n.bitLength() > r)
        throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
      if (n < 0)
        throw new Error("Supplied uint is negative");
      return n.toArrayLike(B, "be", 32);
    } else if (t.startsWith("int")) {
      if (r = gt(t), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid int<N> width: " + r);
      if (n = Ge(e), n.bitLength() > r)
        throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
      return n.toTwos(256).toArrayLike(B, "be", 32);
    } else if (t.startsWith("ufixed")) {
      if (r = Us(t), n = Ge(e), n < 0)
        throw new Error("Supplied ufixed is negative");
      return Ne("uint256", n.mul(new Ke(2).pow(new Ke(r[1]))));
    } else if (t.startsWith("fixed"))
      return r = Us(t), Ne("int256", Ge(e).mul(new Ke(2).pow(new Ke(r[1]))));
  }
  throw new Error("Unsupported or invalid type: " + t);
}
function xl(t) {
  return t === "string" || t === "bytes" || mo(t) === "dynamic";
}
function Fl(t) {
  return t.lastIndexOf("]") === t.length - 1;
}
function jl(t, e) {
  var r = [], n = [], s = 32 * t.length;
  for (var i in t) {
    var o = po(t[i]), a = e[i], l = Ne(o, a);
    xl(o) ? (r.push(Ne("uint256", s)), n.push(l), s += l.length) : r.push(l);
  }
  return B.concat(r.concat(n));
}
function bo(t, e) {
  if (t.length !== e.length)
    throw new Error("Number of types are not matching the values");
  for (var r, n, s = [], i = 0; i < t.length; i++) {
    var o = po(t[i]), a = e[i];
    if (o === "bytes")
      s.push(a);
    else if (o === "string")
      s.push(new B(a, "utf8"));
    else if (o === "bool")
      s.push(new B(a ? "01" : "00", "hex"));
    else if (o === "address")
      s.push(et.setLength(a, 20));
    else if (o.startsWith("bytes")) {
      if (r = gt(o), r < 1 || r > 32)
        throw new Error("Invalid bytes<N> width: " + r);
      s.push(et.setLengthRight(a, r));
    } else if (o.startsWith("uint")) {
      if (r = gt(o), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid uint<N> width: " + r);
      if (n = Ge(a), n.bitLength() > r)
        throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
      s.push(n.toArrayLike(B, "be", r / 8));
    } else if (o.startsWith("int")) {
      if (r = gt(o), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid int<N> width: " + r);
      if (n = Ge(a), n.bitLength() > r)
        throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
      s.push(n.toTwos(r).toArrayLike(B, "be", r / 8));
    } else
      throw new Error("Unsupported or invalid type: " + o);
  }
  return B.concat(s);
}
function Bl(t, e) {
  return et.keccak(bo(t, e));
}
var Dl = {
  rawEncode: jl,
  solidityPack: bo,
  soliditySHA3: Bl
};
const Se = go, xt = Dl, yo = {
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
}, Rn = {
  /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */
  encodeData(t, e, r, n = !0) {
    const s = ["bytes32"], i = [this.hashType(t, r)];
    if (n) {
      const o = (a, l, c) => {
        if (r[l] !== void 0)
          return ["bytes32", c == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : Se.keccak(this.encodeData(l, c, r, n))];
        if (c === void 0)
          throw new Error(`missing value for field ${a} of type ${l}`);
        if (l === "bytes")
          return ["bytes32", Se.keccak(c)];
        if (l === "string")
          return typeof c == "string" && (c = B.from(c, "utf8")), ["bytes32", Se.keccak(c)];
        if (l.lastIndexOf("]") === l.length - 1) {
          const u = l.slice(0, l.lastIndexOf("[")), d = c.map((h) => o(a, u, h));
          return ["bytes32", Se.keccak(xt.rawEncode(
            d.map(([h]) => h),
            d.map(([, h]) => h)
          ))];
        }
        return [l, c];
      };
      for (const a of r[t]) {
        const [l, c] = o(a.name, a.type, e[a.name]);
        s.push(l), i.push(c);
      }
    } else
      for (const o of r[t]) {
        let a = e[o.name];
        if (a !== void 0)
          if (o.type === "bytes")
            s.push("bytes32"), a = Se.keccak(a), i.push(a);
          else if (o.type === "string")
            s.push("bytes32"), typeof a == "string" && (a = B.from(a, "utf8")), a = Se.keccak(a), i.push(a);
          else if (r[o.type] !== void 0)
            s.push("bytes32"), a = Se.keccak(this.encodeData(o.type, a, r, n)), i.push(a);
          else {
            if (o.type.lastIndexOf("]") === o.type.length - 1)
              throw new Error("Arrays currently unimplemented in encodeData");
            s.push(o.type), i.push(a);
          }
      }
    return xt.rawEncode(s, i);
  },
  /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */
  encodeType(t, e) {
    let r = "", n = this.findTypeDependencies(t, e).filter((s) => s !== t);
    n = [t].concat(n.sort());
    for (const s of n) {
      if (!e[s])
        throw new Error("No type definition specified: " + s);
      r += s + "(" + e[s].map(({ name: o, type: a }) => a + " " + o).join(",") + ")";
    }
    return r;
  },
  /**
   * Finds all types within a type defintion object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */
  findTypeDependencies(t, e, r = []) {
    if (t = t.match(/^\w*/)[0], r.includes(t) || e[t] === void 0)
      return r;
    r.push(t);
    for (const n of e[t])
      for (const s of this.findTypeDependencies(n.type, e, r))
        !r.includes(s) && r.push(s);
    return r;
  },
  /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {Buffer} - Hash of an object
   */
  hashStruct(t, e, r, n = !0) {
    return Se.keccak(this.encodeData(t, e, r, n));
  },
  /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */
  hashType(t, e) {
    return Se.keccak(this.encodeType(t, e));
  },
  /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */
  sanitizeData(t) {
    const e = {};
    for (const r in yo.properties)
      t[r] && (e[r] = t[r]);
    return e.types && (e.types = Object.assign({ EIP712Domain: [] }, e.types)), e;
  },
  /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */
  hash(t, e = !0) {
    const r = this.sanitizeData(t), n = [B.from("1901", "hex")];
    return n.push(this.hashStruct("EIP712Domain", r.domain, r.types, e)), r.primaryType !== "EIP712Domain" && n.push(this.hashStruct(r.primaryType, r.message, r.types, e)), Se.keccak(B.concat(n));
  }
};
var Hl = {
  TYPED_MESSAGE_SCHEMA: yo,
  TypedDataUtils: Rn,
  hashForSignTypedDataLegacy: function(t) {
    return Ul(t.data);
  },
  hashForSignTypedData_v3: function(t) {
    return Rn.hash(t.data, !1);
  },
  hashForSignTypedData_v4: function(t) {
    return Rn.hash(t.data);
  }
};
function Ul(t) {
  const e = new Error("Expect argument to be non-empty array");
  if (typeof t != "object" || !t.length)
    throw e;
  const r = t.map(function(i) {
    return i.type === "bytes" ? Se.toBuffer(i.value) : i.value;
  }), n = t.map(function(i) {
    return i.type;
  }), s = t.map(function(i) {
    if (!i.name)
      throw e;
    return i.type + " " + i.name;
  });
  return xt.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      xt.soliditySHA3(new Array(t.length).fill("string"), s),
      xt.soliditySHA3(n, r)
    ]
  );
}
var Et = {};
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.filterFromParam = Et.FilterPolyfill = void 0;
const dt = Z, ie = _, Vl = 5 * 60 * 1e3, Ze = {
  jsonrpc: "2.0",
  id: 0
};
class Wl {
  constructor(e) {
    this.logFilters = /* @__PURE__ */ new Map(), this.blockFilters = /* @__PURE__ */ new Set(), this.pendingTransactionFilters = /* @__PURE__ */ new Set(), this.cursors = /* @__PURE__ */ new Map(), this.timeouts = /* @__PURE__ */ new Map(), this.nextFilterId = (0, dt.IntNumber)(1), this.REQUEST_THROTTLE_INTERVAL = 1e3, this.lastFetchTimestamp = /* @__PURE__ */ new Date(0), this.resolvers = [], this.provider = e;
  }
  async newFilter(e) {
    const r = wo(e), n = this.makeFilterId(), s = await this.setInitialCursorPosition(n, r.fromBlock);
    return console.info(`Installing new log filter(${n}):`, r, "initial cursor position:", s), this.logFilters.set(n, r), this.setFilterTimeout(n), (0, ie.hexStringFromIntNumber)(n);
  }
  async newBlockFilter() {
    const e = this.makeFilterId(), r = await this.setInitialCursorPosition(e, "latest");
    return console.info(`Installing new block filter (${e}) with initial cursor position:`, r), this.blockFilters.add(e), this.setFilterTimeout(e), (0, ie.hexStringFromIntNumber)(e);
  }
  async newPendingTransactionFilter() {
    const e = this.makeFilterId(), r = await this.setInitialCursorPosition(e, "latest");
    return console.info(`Installing new block filter (${e}) with initial cursor position:`, r), this.pendingTransactionFilters.add(e), this.setFilterTimeout(e), (0, ie.hexStringFromIntNumber)(e);
  }
  uninstallFilter(e) {
    const r = (0, ie.intNumberFromHexString)(e);
    return console.info(`Uninstalling filter (${r})`), this.deleteFilter(r), !0;
  }
  getFilterChanges(e) {
    const r = (0, ie.intNumberFromHexString)(e);
    return this.timeouts.has(r) && this.setFilterTimeout(r), this.logFilters.has(r) ? this.getLogFilterChanges(r) : this.blockFilters.has(r) ? this.getBlockFilterChanges(r) : this.pendingTransactionFilters.has(r) ? this.getPendingTransactionFilterChanges(r) : Promise.resolve(hr());
  }
  async getFilterLogs(e) {
    const r = (0, ie.intNumberFromHexString)(e), n = this.logFilters.get(r);
    return n ? this.sendAsyncPromise(Object.assign(Object.assign({}, Ze), { method: "eth_getLogs", params: [Vs(n)] })) : hr();
  }
  makeFilterId() {
    return (0, dt.IntNumber)(++this.nextFilterId);
  }
  sendAsyncPromise(e) {
    return new Promise((r, n) => {
      this.provider.sendAsync(e, (s, i) => {
        if (s)
          return n(s);
        if (Array.isArray(i) || i == null)
          return n(new Error(`unexpected response received: ${JSON.stringify(i)}`));
        r(i);
      });
    });
  }
  deleteFilter(e) {
    console.info(`Deleting filter (${e})`), this.logFilters.delete(e), this.blockFilters.delete(e), this.pendingTransactionFilters.delete(e), this.cursors.delete(e), this.timeouts.delete(e);
  }
  async getLogFilterChanges(e) {
    const r = this.logFilters.get(e), n = this.cursors.get(e);
    if (!n || !r)
      return hr();
    const s = await this.getCurrentBlockHeight(), i = r.toBlock === "latest" ? s : r.toBlock;
    if (n > s || n > Number(r.toBlock))
      return fr();
    console.info(`Fetching logs from ${n} to ${i} for filter ${e}`);
    const o = await this.sendAsyncPromise(Object.assign(Object.assign({}, Ze), { method: "eth_getLogs", params: [
      Vs(Object.assign(Object.assign({}, r), { fromBlock: n, toBlock: i }))
    ] }));
    if (Array.isArray(o.result)) {
      const a = o.result.map((c) => (0, ie.intNumberFromHexString)(c.blockNumber || "0x0")), l = Math.max(...a);
      if (l && l > n) {
        const c = (0, dt.IntNumber)(l + 1);
        console.info(`Moving cursor position for filter (${e}) from ${n} to ${c}`), this.cursors.set(e, c);
      }
    }
    return o;
  }
  async getBlockFilterChanges(e) {
    const r = this.cursors.get(e);
    if (!r)
      return hr();
    const n = await this.getCurrentBlockHeight();
    if (r > n)
      return fr();
    console.info(`Fetching blocks from ${r} to ${n} for filter (${e})`);
    const s = (await Promise.all(
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      (0, ie.range)(r, n + 1).map((o) => this.getBlockHashByNumber((0, dt.IntNumber)(o)))
    )).filter((o) => !!o), i = (0, dt.IntNumber)(r + s.length);
    return console.info(`Moving cursor position for filter (${e}) from ${r} to ${i}`), this.cursors.set(e, i), Object.assign(Object.assign({}, Ze), { result: s });
  }
  async getPendingTransactionFilterChanges(e) {
    return Promise.resolve(fr());
  }
  async setInitialCursorPosition(e, r) {
    const n = await this.getCurrentBlockHeight(), s = typeof r == "number" && r > n ? r : n;
    return this.cursors.set(e, s), s;
  }
  setFilterTimeout(e) {
    const r = this.timeouts.get(e);
    r && window.clearTimeout(r);
    const n = window.setTimeout(() => {
      console.info(`Filter (${e}) timed out`), this.deleteFilter(e);
    }, Vl);
    this.timeouts.set(e, n);
  }
  // throttle eth_blockNumber requests
  async getCurrentBlockHeight() {
    const e = /* @__PURE__ */ new Date();
    if (e.getTime() - this.lastFetchTimestamp.getTime() > this.REQUEST_THROTTLE_INTERVAL) {
      this.lastFetchTimestamp = e;
      const r = await this._getCurrentBlockHeight();
      this.currentBlockHeight = r, this.resolvers.forEach((n) => n(r)), this.resolvers = [];
    }
    return this.currentBlockHeight ? this.currentBlockHeight : new Promise((r) => this.resolvers.push(r));
  }
  async _getCurrentBlockHeight() {
    const { result: e } = await this.sendAsyncPromise(Object.assign(Object.assign({}, Ze), { method: "eth_blockNumber", params: [] }));
    return (0, ie.intNumberFromHexString)((0, ie.ensureHexString)(e));
  }
  async getBlockHashByNumber(e) {
    const r = await this.sendAsyncPromise(Object.assign(Object.assign({}, Ze), { method: "eth_getBlockByNumber", params: [(0, ie.hexStringFromIntNumber)(e), !1] }));
    return r.result && typeof r.result.hash == "string" ? (0, ie.ensureHexString)(r.result.hash) : null;
  }
}
Et.FilterPolyfill = Wl;
function wo(t) {
  return {
    fromBlock: Ws(t.fromBlock),
    toBlock: Ws(t.toBlock),
    addresses: t.address === void 0 ? null : Array.isArray(t.address) ? t.address : [t.address],
    topics: t.topics || []
  };
}
Et.filterFromParam = wo;
function Vs(t) {
  const e = {
    fromBlock: zs(t.fromBlock),
    toBlock: zs(t.toBlock),
    topics: t.topics
  };
  return t.addresses !== null && (e.address = t.addresses), e;
}
function Ws(t) {
  if (t === void 0 || t === "latest" || t === "pending")
    return "latest";
  if (t === "earliest")
    return (0, dt.IntNumber)(0);
  if ((0, ie.isHexString)(t))
    return (0, ie.intNumberFromHexString)(t);
  throw new Error(`Invalid block option: ${String(t)}`);
}
function zs(t) {
  return t === "latest" ? t : (0, ie.hexStringFromIntNumber)(t);
}
function hr() {
  return Object.assign(Object.assign({}, Ze), { error: { code: -32e3, message: "filter not found" } });
}
function fr() {
  return Object.assign(Object.assign({}, Ze), { result: [] });
}
var Kr = {}, Eo = {}, Xr = {}, ts = zl;
function zl(t) {
  t = t || {};
  var e = t.max || Number.MAX_SAFE_INTEGER, r = typeof t.start < "u" ? t.start : Math.floor(Math.random() * e);
  return function() {
    return r = r % e, r++;
  };
}
const Js = (t, e) => function() {
  const r = e.promiseModule, n = new Array(arguments.length);
  for (let s = 0; s < arguments.length; s++)
    n[s] = arguments[s];
  return new r((s, i) => {
    e.errorFirst ? n.push(function(o, a) {
      if (e.multiArgs) {
        const l = new Array(arguments.length - 1);
        for (let c = 1; c < arguments.length; c++)
          l[c - 1] = arguments[c];
        o ? (l.unshift(o), i(l)) : s(l);
      } else
        o ? i(o) : s(a);
    }) : n.push(function(o) {
      if (e.multiArgs) {
        const a = new Array(arguments.length - 1);
        for (let l = 0; l < arguments.length; l++)
          a[l] = arguments[l];
        s(a);
      } else
        s(o);
    }), t.apply(this, n);
  });
};
var Jl = (t, e) => {
  e = Object.assign({
    exclude: [/.+(Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise
  }, e);
  const r = (s) => {
    const i = (o) => typeof o == "string" ? s === o : o.test(s);
    return e.include ? e.include.some(i) : !e.exclude.some(i);
  };
  let n;
  typeof t == "function" ? n = function() {
    return e.excludeMain ? t.apply(this, arguments) : Js(t, e).apply(this, arguments);
  } : n = Object.create(Object.getPrototypeOf(t));
  for (const s in t) {
    const i = t[s];
    n[s] = typeof i == "function" && r(s) ? Js(i, e) : i;
  }
  return n;
}, Qt = {}, Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
const ql = Bi;
function qs(t, e, r) {
  try {
    Reflect.apply(t, e, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function Gl(t) {
  const e = t.length, r = new Array(e);
  for (let n = 0; n < e; n += 1)
    r[n] = t[n];
  return r;
}
let Zl = class extends ql.EventEmitter {
  emit(e, ...r) {
    let n = e === "error";
    const s = this._events;
    if (s !== void 0)
      n = n && s.error === void 0;
    else if (!n)
      return !1;
    if (n) {
      let o;
      if (r.length > 0 && ([o] = r), o instanceof Error)
        throw o;
      const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
      throw a.context = o, a;
    }
    const i = s[e];
    if (i === void 0)
      return !1;
    if (typeof i == "function")
      qs(i, this, r);
    else {
      const o = i.length, a = Gl(i);
      for (let l = 0; l < o; l += 1)
        qs(a[l], this, r);
    }
    return !0;
  }
};
Kt.default = Zl;
var Ql = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.BaseBlockTracker = void 0;
const Kl = Ql(Kt), Xl = 1e3, Yl = (t, e) => t + e, Gs = ["sync", "latest"];
class eu extends Kl.default {
  constructor(e) {
    super(), this._blockResetDuration = e.blockResetDuration || 20 * Xl, this._usePastBlocks = e.usePastBlocks || !1, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents();
  }
  async destroy() {
    this._cancelBlockResetTimeout(), await this._maybeEnd(), super.removeAllListeners();
  }
  isRunning() {
    return this._isRunning;
  }
  getCurrentBlock() {
    return this._currentBlock;
  }
  async getLatestBlock() {
    return this._currentBlock ? this._currentBlock : await new Promise((r) => this.once("latest", r));
  }
  // dont allow module consumer to remove our internal event listeners
  removeAllListeners(e) {
    return e ? super.removeAllListeners(e) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener(), this;
  }
  _setupInternalEvents() {
    this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener);
  }
  _onNewListener(e) {
    Gs.includes(e) && this._maybeStart();
  }
  _onRemoveListener() {
    this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
  }
  async _maybeStart() {
    this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), await this._start(), this.emit("_started"));
  }
  async _maybeEnd() {
    this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), await this._end(), this.emit("_ended"));
  }
  _getBlockTrackerEventCount() {
    return Gs.map((e) => this.listenerCount(e)).reduce(Yl);
  }
  _shouldUseNewBlock(e) {
    const r = this._currentBlock;
    if (!r)
      return !0;
    const n = Zs(e), s = Zs(r);
    return this._usePastBlocks && n < s || n > s;
  }
  _newPotentialLatest(e) {
    this._shouldUseNewBlock(e) && this._setCurrentBlock(e);
  }
  _setCurrentBlock(e) {
    const r = this._currentBlock;
    this._currentBlock = e, this.emit("latest", e), this.emit("sync", { oldBlock: r, newBlock: e });
  }
  _setupBlockResetTimeout() {
    this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref();
  }
  _cancelBlockResetTimeout() {
    this._blockResetTimeout && clearTimeout(this._blockResetTimeout);
  }
  _resetCurrentBlock() {
    this._currentBlock = null;
  }
}
Qt.BaseBlockTracker = eu;
function Zs(t) {
  return Number.parseInt(t, 16);
}
var _o = {}, vo = {}, re = {};
class So extends TypeError {
  constructor(e, r) {
    let n;
    const { message: s, explanation: i, ...o } = e, { path: a } = e, l = a.length === 0 ? s : `At path: ${a.join(".")} -- ${s}`;
    super(i ?? l), i != null && (this.cause = l), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => n ?? (n = [e, ...r()]);
  }
}
function tu(t) {
  return _e(t) && typeof t[Symbol.iterator] == "function";
}
function _e(t) {
  return typeof t == "object" && t != null;
}
function Qs(t) {
  if (Object.prototype.toString.call(t) !== "[object Object]")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
function Q(t) {
  return typeof t == "symbol" ? t.toString() : typeof t == "string" ? JSON.stringify(t) : `${t}`;
}
function ru(t) {
  const { done: e, value: r } = t.next();
  return e ? void 0 : r;
}
function nu(t, e, r, n) {
  if (t === !0)
    return;
  t === !1 ? t = {} : typeof t == "string" && (t = { message: t });
  const { path: s, branch: i } = e, { type: o } = r, { refinement: a, message: l = `Expected a value of type \`${o}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${Q(n)}\`` } = t;
  return {
    value: n,
    type: o,
    refinement: a,
    key: s[s.length - 1],
    path: s,
    branch: i,
    ...t,
    message: l
  };
}
function* jn(t, e, r, n) {
  tu(t) || (t = [t]);
  for (const s of t) {
    const i = nu(s, e, r, n);
    i && (yield i);
  }
}
function* rs(t, e, r = {}) {
  const { path: n = [], branch: s = [t], coerce: i = !1, mask: o = !1 } = r, a = { path: n, branch: s };
  if (i && (t = e.coercer(t, a), o && e.type !== "type" && _e(e.schema) && _e(t) && !Array.isArray(t)))
    for (const c in t)
      e.schema[c] === void 0 && delete t[c];
  let l = "valid";
  for (const c of e.validator(t, a))
    c.explanation = r.message, l = "not_valid", yield [c, void 0];
  for (let [c, u, d] of e.entries(t, a)) {
    const h = rs(u, d, {
      path: c === void 0 ? n : [...n, c],
      branch: c === void 0 ? s : [...s, u],
      coerce: i,
      mask: o,
      message: r.message
    });
    for (const f of h)
      f[0] ? (l = f[0].refinement != null ? "not_refined" : "not_valid", yield [f[0], void 0]) : i && (u = f[1], c === void 0 ? t = u : t instanceof Map ? t.set(c, u) : t instanceof Set ? t.add(u) : _e(t) && (u !== void 0 || c in t) && (t[c] = u));
  }
  if (l !== "not_valid")
    for (const c of e.refiner(t, a))
      c.explanation = r.message, l = "not_refined", yield [c, void 0];
  l === "valid" && (yield [void 0, t]);
}
class J {
  constructor(e) {
    const { type: r, schema: n, validator: s, refiner: i, coercer: o = (l) => l, entries: a = function* () {
    } } = e;
    this.type = r, this.schema = n, this.entries = a, this.coercer = o, s ? this.validator = (l, c) => {
      const u = s(l, c);
      return jn(u, c, this, l);
    } : this.validator = () => [], i ? this.refiner = (l, c) => {
      const u = i(l, c);
      return jn(u, c, this, l);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(e, r) {
    return Co(e, this, r);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(e, r) {
    return ko(e, this, r);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(e) {
    return ns(e, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(e, r) {
    return Ro(e, this, r);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(e, r = {}) {
    return At(e, this, r);
  }
}
function Co(t, e, r) {
  const n = At(t, e, { message: r });
  if (n[0])
    throw n[0];
}
function ko(t, e, r) {
  const n = At(t, e, { coerce: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function Ro(t, e, r) {
  const n = At(t, e, { coerce: !0, mask: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function ns(t, e) {
  return !At(t, e)[0];
}
function At(t, e, r = {}) {
  const n = rs(t, e, r), s = ru(n);
  return s[0] ? [new So(s[0], function* () {
    for (const o of n)
      o[0] && (yield o[0]);
  }), void 0] : [void 0, s[1]];
}
function su(...t) {
  const e = t[0].type === "type", r = t.map((s) => s.schema), n = Object.assign({}, ...r);
  return e ? Yt(n) : Xt(n);
}
function le(t, e) {
  return new J({ type: t, schema: null, validator: e });
}
function iu(t, e) {
  return new J({
    ...t,
    refiner: (r, n) => r === void 0 || t.refiner(r, n),
    validator(r, n) {
      return r === void 0 ? !0 : (e(r, n), t.validator(r, n));
    }
  });
}
function ou(t) {
  return new J({
    type: "dynamic",
    schema: null,
    *entries(e, r) {
      yield* t(e, r).entries(e, r);
    },
    validator(e, r) {
      return t(e, r).validator(e, r);
    },
    coercer(e, r) {
      return t(e, r).coercer(e, r);
    },
    refiner(e, r) {
      return t(e, r).refiner(e, r);
    }
  });
}
function au(t) {
  let e;
  return new J({
    type: "lazy",
    schema: null,
    *entries(r, n) {
      e ?? (e = t()), yield* e.entries(r, n);
    },
    validator(r, n) {
      return e ?? (e = t()), e.validator(r, n);
    },
    coercer(r, n) {
      return e ?? (e = t()), e.coercer(r, n);
    },
    refiner(r, n) {
      return e ?? (e = t()), e.refiner(r, n);
    }
  });
}
function cu(t, e) {
  const { schema: r } = t, n = { ...r };
  for (const s of e)
    delete n[s];
  switch (t.type) {
    case "type":
      return Yt(n);
    default:
      return Xt(n);
  }
}
function lu(t) {
  const e = t instanceof J, r = e ? { ...t.schema } : { ...t };
  for (const n in r)
    r[n] = Io(r[n]);
  return e && t.type === "type" ? Yt(r) : Xt(r);
}
function uu(t, e) {
  const { schema: r } = t, n = {};
  for (const s of e)
    n[s] = r[s];
  switch (t.type) {
    case "type":
      return Yt(n);
    default:
      return Xt(n);
  }
}
function du(t, e) {
  return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), le(t, e);
}
function hu() {
  return le("any", () => !0);
}
function fu(t) {
  return new J({
    type: "array",
    schema: t,
    *entries(e) {
      if (t && Array.isArray(e))
        for (const [r, n] of e.entries())
          yield [r, n, t];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || `Expected an array value, but received: ${Q(e)}`;
    }
  });
}
function gu() {
  return le("bigint", (t) => typeof t == "bigint");
}
function pu() {
  return le("boolean", (t) => typeof t == "boolean");
}
function mu() {
  return le("date", (t) => t instanceof Date && !isNaN(t.getTime()) || `Expected a valid \`Date\` object, but received: ${Q(t)}`);
}
function bu(t) {
  const e = {}, r = t.map((n) => Q(n)).join();
  for (const n of t)
    e[n] = n;
  return new J({
    type: "enums",
    schema: e,
    validator(n) {
      return t.includes(n) || `Expected one of \`${r}\`, but received: ${Q(n)}`;
    }
  });
}
function yu() {
  return le("func", (t) => typeof t == "function" || `Expected a function, but received: ${Q(t)}`);
}
function wu(t) {
  return le("instance", (e) => e instanceof t || `Expected a \`${t.name}\` instance, but received: ${Q(e)}`);
}
function Eu() {
  return le("integer", (t) => typeof t == "number" && !isNaN(t) && Number.isInteger(t) || `Expected an integer, but received: ${Q(t)}`);
}
function _u(t) {
  return new J({
    type: "intersection",
    schema: null,
    *entries(e, r) {
      for (const n of t)
        yield* n.entries(e, r);
    },
    *validator(e, r) {
      for (const n of t)
        yield* n.validator(e, r);
    },
    *refiner(e, r) {
      for (const n of t)
        yield* n.refiner(e, r);
    }
  });
}
function vu(t) {
  const e = Q(t), r = typeof t;
  return new J({
    type: "literal",
    schema: r === "string" || r === "number" || r === "boolean" ? t : null,
    validator(n) {
      return n === t || `Expected the literal \`${e}\`, but received: ${Q(n)}`;
    }
  });
}
function Su(t, e) {
  return new J({
    type: "map",
    schema: null,
    *entries(r) {
      if (t && e && r instanceof Map)
        for (const [n, s] of r.entries())
          yield [n, n, t], yield [n, s, e];
    },
    coercer(r) {
      return r instanceof Map ? new Map(r) : r;
    },
    validator(r) {
      return r instanceof Map || `Expected a \`Map\` object, but received: ${Q(r)}`;
    }
  });
}
function ss() {
  return le("never", () => !1);
}
function Cu(t) {
  return new J({
    ...t,
    validator: (e, r) => e === null || t.validator(e, r),
    refiner: (e, r) => e === null || t.refiner(e, r)
  });
}
function ku() {
  return le("number", (t) => typeof t == "number" && !isNaN(t) || `Expected a number, but received: ${Q(t)}`);
}
function Xt(t) {
  const e = t ? Object.keys(t) : [], r = ss();
  return new J({
    type: "object",
    schema: t || null,
    *entries(n) {
      if (t && _e(n)) {
        const s = new Set(Object.keys(n));
        for (const i of e)
          s.delete(i), yield [i, n[i], t[i]];
        for (const i of s)
          yield [i, n[i], r];
      }
    },
    validator(n) {
      return _e(n) || `Expected an object, but received: ${Q(n)}`;
    },
    coercer(n) {
      return _e(n) ? { ...n } : n;
    }
  });
}
function Io(t) {
  return new J({
    ...t,
    validator: (e, r) => e === void 0 || t.validator(e, r),
    refiner: (e, r) => e === void 0 || t.refiner(e, r)
  });
}
function Ru(t, e) {
  return new J({
    type: "record",
    schema: null,
    *entries(r) {
      if (_e(r))
        for (const n in r) {
          const s = r[n];
          yield [n, n, t], yield [n, s, e];
        }
    },
    validator(r) {
      return _e(r) || `Expected an object, but received: ${Q(r)}`;
    }
  });
}
function Iu() {
  return le("regexp", (t) => t instanceof RegExp);
}
function Au(t) {
  return new J({
    type: "set",
    schema: null,
    *entries(e) {
      if (t && e instanceof Set)
        for (const r of e)
          yield [r, r, t];
    },
    coercer(e) {
      return e instanceof Set ? new Set(e) : e;
    },
    validator(e) {
      return e instanceof Set || `Expected a \`Set\` object, but received: ${Q(e)}`;
    }
  });
}
function Ao() {
  return le("string", (t) => typeof t == "string" || `Expected a string, but received: ${Q(t)}`);
}
function Nu(t) {
  const e = ss();
  return new J({
    type: "tuple",
    schema: null,
    *entries(r) {
      if (Array.isArray(r)) {
        const n = Math.max(t.length, r.length);
        for (let s = 0; s < n; s++)
          yield [s, r[s], t[s] || e];
      }
    },
    validator(r) {
      return Array.isArray(r) || `Expected an array, but received: ${Q(r)}`;
    }
  });
}
function Yt(t) {
  const e = Object.keys(t);
  return new J({
    type: "type",
    schema: t,
    *entries(r) {
      if (_e(r))
        for (const n of e)
          yield [n, r[n], t[n]];
    },
    validator(r) {
      return _e(r) || `Expected an object, but received: ${Q(r)}`;
    },
    coercer(r) {
      return _e(r) ? { ...r } : r;
    }
  });
}
function Mu(t) {
  const e = t.map((r) => r.type).join(" | ");
  return new J({
    type: "union",
    schema: null,
    coercer(r) {
      for (const n of t) {
        const [s, i] = n.validate(r, { coerce: !0 });
        if (!s)
          return i;
      }
      return r;
    },
    validator(r, n) {
      const s = [];
      for (const i of t) {
        const [...o] = rs(r, i, n), [a] = o;
        if (a[0])
          for (const [l] of o)
            l && s.push(l);
        else
          return [];
      }
      return [
        `Expected the value to satisfy a union of \`${e}\`, but received: ${Q(r)}`,
        ...s
      ];
    }
  });
}
function No() {
  return le("unknown", () => !0);
}
function is(t, e, r) {
  return new J({
    ...t,
    coercer: (n, s) => ns(n, e) ? t.coercer(r(n, s), s) : t.coercer(n, s)
  });
}
function Lu(t, e, r = {}) {
  return is(t, No(), (n) => {
    const s = typeof e == "function" ? e() : e;
    if (n === void 0)
      return s;
    if (!r.strict && Qs(n) && Qs(s)) {
      const i = { ...n };
      let o = !1;
      for (const a in s)
        i[a] === void 0 && (i[a] = s[a], o = !0);
      if (o)
        return i;
    }
    return n;
  });
}
function Tu(t) {
  return is(t, Ao(), (e) => e.trim());
}
function Pu(t) {
  return nt(t, "empty", (e) => {
    const r = Mo(e);
    return r === 0 || `Expected an empty ${t.type} but received one with a size of \`${r}\``;
  });
}
function Mo(t) {
  return t instanceof Map || t instanceof Set ? t.size : t.length;
}
function Ou(t, e, r = {}) {
  const { exclusive: n } = r;
  return nt(t, "max", (s) => n ? s < e : s <= e || `Expected a ${t.type} less than ${n ? "" : "or equal to "}${e} but received \`${s}\``);
}
function $u(t, e, r = {}) {
  const { exclusive: n } = r;
  return nt(t, "min", (s) => n ? s > e : s >= e || `Expected a ${t.type} greater than ${n ? "" : "or equal to "}${e} but received \`${s}\``);
}
function xu(t) {
  return nt(t, "nonempty", (e) => Mo(e) > 0 || `Expected a nonempty ${t.type} but received an empty one`);
}
function Fu(t, e) {
  return nt(t, "pattern", (r) => e.test(r) || `Expected a ${t.type} matching \`/${e.source}/\` but received "${r}"`);
}
function ju(t, e, r = e) {
  const n = `Expected a ${t.type}`, s = e === r ? `of \`${e}\`` : `between \`${e}\` and \`${r}\``;
  return nt(t, "size", (i) => {
    if (typeof i == "number" || i instanceof Date)
      return e <= i && i <= r || `${n} ${s} but received \`${i}\``;
    if (i instanceof Map || i instanceof Set) {
      const { size: o } = i;
      return e <= o && o <= r || `${n} with a size ${s} but received one with a size of \`${o}\``;
    } else {
      const { length: o } = i;
      return e <= o && o <= r || `${n} with a length ${s} but received one with a length of \`${o}\``;
    }
  });
}
function nt(t, e, r) {
  return new J({
    ...t,
    *refiner(n, s) {
      yield* t.refiner(n, s);
      const i = r(n, s), o = jn(i, s, t, n);
      for (const a of o)
        yield { ...a, refinement: e };
    }
  });
}
const Bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Struct: J,
  StructError: So,
  any: hu,
  array: fu,
  assert: Co,
  assign: su,
  bigint: gu,
  boolean: pu,
  coerce: is,
  create: ko,
  date: mu,
  defaulted: Lu,
  define: le,
  deprecated: iu,
  dynamic: ou,
  empty: Pu,
  enums: bu,
  func: yu,
  instance: wu,
  integer: Eu,
  intersection: _u,
  is: ns,
  lazy: au,
  literal: vu,
  map: Su,
  mask: Ro,
  max: Ou,
  min: $u,
  never: ss,
  nonempty: xu,
  nullable: Cu,
  number: ku,
  object: Xt,
  omit: cu,
  optional: Io,
  partial: lu,
  pattern: Fu,
  pick: uu,
  record: Ru,
  refine: nt,
  regexp: Iu,
  set: Au,
  size: ju,
  string: Ao,
  struct: du,
  trimmed: Tu,
  tuple: Nu,
  type: Yt,
  union: Mu,
  unknown: No,
  validate: At
}, Symbol.toStringTag, { value: "Module" })), st = /* @__PURE__ */ Di(Bu);
Object.defineProperty(re, "__esModule", { value: !0 });
re.assertExhaustive = re.assertStruct = re.assert = re.AssertionError = void 0;
const Du = st;
function Hu(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function Uu(t) {
  var e, r;
  return typeof ((r = (e = t == null ? void 0 : t.prototype) === null || e === void 0 ? void 0 : e.constructor) === null || r === void 0 ? void 0 : r.name) == "string";
}
function Vu(t) {
  const e = Hu(t) ? t.message : String(t);
  return e.endsWith(".") ? e.slice(0, -1) : e;
}
function Lo(t, e) {
  return Uu(t) ? new t({
    message: e
  }) : t({
    message: e
  });
}
class os extends Error {
  constructor(e) {
    super(e.message), this.code = "ERR_ASSERTION";
  }
}
re.AssertionError = os;
function Wu(t, e = "Assertion failed.", r = os) {
  if (!t)
    throw e instanceof Error ? e : Lo(r, e);
}
re.assert = Wu;
function zu(t, e, r = "Assertion failed", n = os) {
  try {
    (0, Du.assert)(t, e);
  } catch (s) {
    throw Lo(n, `${r}: ${Vu(s)}.`);
  }
}
re.assertStruct = zu;
function Ju(t) {
  throw new Error("Invalid branch reached. Should be detected during compilation.");
}
re.assertExhaustive = Ju;
var er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
er.base64 = void 0;
const qu = st, Gu = re, Zu = (t, e = {}) => {
  var r, n;
  const s = (r = e.paddingRequired) !== null && r !== void 0 ? r : !1, i = (n = e.characterSet) !== null && n !== void 0 ? n : "base64";
  let o;
  i === "base64" ? o = String.raw`[A-Za-z0-9+\/]` : ((0, Gu.assert)(i === "base64url"), o = String.raw`[-_A-Za-z0-9]`);
  let a;
  return s ? a = new RegExp(`^(?:${o}{4})*(?:${o}{3}=|${o}{2}==)?$`, "u") : a = new RegExp(`^(?:${o}{4})*(?:${o}{2,3}|${o}{3}=|${o}{2}==)?$`, "u"), (0, qu.pattern)(t, a);
};
er.base64 = Zu;
var F = {}, tr = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.remove0x = t.add0x = t.assertIsStrictHexString = t.assertIsHexString = t.isStrictHexString = t.isHexString = t.StrictHexStruct = t.HexStruct = void 0;
  const e = st, r = re;
  t.HexStruct = (0, e.pattern)((0, e.string)(), /^(?:0x)?[0-9a-f]+$/iu), t.StrictHexStruct = (0, e.pattern)((0, e.string)(), /^0x[0-9a-f]+$/iu);
  function n(c) {
    return (0, e.is)(c, t.HexStruct);
  }
  t.isHexString = n;
  function s(c) {
    return (0, e.is)(c, t.StrictHexStruct);
  }
  t.isStrictHexString = s;
  function i(c) {
    (0, r.assert)(n(c), "Value must be a hexadecimal string.");
  }
  t.assertIsHexString = i;
  function o(c) {
    (0, r.assert)(s(c), 'Value must be a hexadecimal string, starting with "0x".');
  }
  t.assertIsStrictHexString = o;
  function a(c) {
    return c.startsWith("0x") ? c : c.startsWith("0X") ? `0x${c.substring(2)}` : `0x${c}`;
  }
  t.add0x = a;
  function l(c) {
    return c.startsWith("0x") || c.startsWith("0X") ? c.substring(2) : c;
  }
  t.remove0x = l;
})(tr);
Object.defineProperty(F, "__esModule", { value: !0 });
F.createDataView = F.concatBytes = F.valueToBytes = F.stringToBytes = F.numberToBytes = F.signedBigIntToBytes = F.bigIntToBytes = F.hexToBytes = F.bytesToString = F.bytesToNumber = F.bytesToSignedBigInt = F.bytesToBigInt = F.bytesToHex = F.assertIsBytes = F.isBytes = void 0;
const ge = re, Bn = tr, Ks = 48, Xs = 58, Ys = 87;
function Qu() {
  const t = [];
  return () => {
    if (t.length === 0)
      for (let e = 0; e < 256; e++)
        t.push(e.toString(16).padStart(2, "0"));
    return t;
  };
}
const Ku = Qu();
function as(t) {
  return t instanceof Uint8Array;
}
F.isBytes = as;
function Nt(t) {
  (0, ge.assert)(as(t), "Value must be a Uint8Array.");
}
F.assertIsBytes = Nt;
function To(t) {
  if (Nt(t), t.length === 0)
    return "0x";
  const e = Ku(), r = new Array(t.length);
  for (let n = 0; n < t.length; n++)
    r[n] = e[t[n]];
  return (0, Bn.add0x)(r.join(""));
}
F.bytesToHex = To;
function Po(t) {
  Nt(t);
  const e = To(t);
  return BigInt(e);
}
F.bytesToBigInt = Po;
function Xu(t) {
  Nt(t);
  let e = BigInt(0);
  for (const r of t)
    e = (e << BigInt(8)) + BigInt(r);
  return BigInt.asIntN(t.length * 8, e);
}
F.bytesToSignedBigInt = Xu;
function Yu(t) {
  Nt(t);
  const e = Po(t);
  return (0, ge.assert)(e <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."), Number(e);
}
F.bytesToNumber = Yu;
function ed(t) {
  return Nt(t), new TextDecoder().decode(t);
}
F.bytesToString = ed;
function Yr(t) {
  var e;
  if (((e = t == null ? void 0 : t.toLowerCase) === null || e === void 0 ? void 0 : e.call(t)) === "0x")
    return new Uint8Array();
  (0, Bn.assertIsHexString)(t);
  const r = (0, Bn.remove0x)(t).toLowerCase(), n = r.length % 2 === 0 ? r : `0${r}`, s = new Uint8Array(n.length / 2);
  for (let i = 0; i < s.length; i++) {
    const o = n.charCodeAt(i * 2), a = n.charCodeAt(i * 2 + 1), l = o - (o < Xs ? Ks : Ys), c = a - (a < Xs ? Ks : Ys);
    s[i] = l * 16 + c;
  }
  return s;
}
F.hexToBytes = Yr;
function Oo(t) {
  (0, ge.assert)(typeof t == "bigint", "Value must be a bigint."), (0, ge.assert)(t >= BigInt(0), "Value must be a non-negative bigint.");
  const e = t.toString(16);
  return Yr(e);
}
F.bigIntToBytes = Oo;
function td(t, e) {
  (0, ge.assert)(e > 0);
  const r = t >> BigInt(31);
  return !((~t & r) + (t & ~r) >> BigInt(e * 8 + -1));
}
function rd(t, e) {
  (0, ge.assert)(typeof t == "bigint", "Value must be a bigint."), (0, ge.assert)(typeof e == "number", "Byte length must be a number."), (0, ge.assert)(e > 0, "Byte length must be greater than 0."), (0, ge.assert)(td(t, e), "Byte length is too small to represent the given value.");
  let r = t;
  const n = new Uint8Array(e);
  for (let s = 0; s < n.length; s++)
    n[s] = Number(BigInt.asUintN(8, r)), r >>= BigInt(8);
  return n.reverse();
}
F.signedBigIntToBytes = rd;
function $o(t) {
  (0, ge.assert)(typeof t == "number", "Value must be a number."), (0, ge.assert)(t >= 0, "Value must be a non-negative number."), (0, ge.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `bigIntToBytes` instead.");
  const e = t.toString(16);
  return Yr(e);
}
F.numberToBytes = $o;
function xo(t) {
  return (0, ge.assert)(typeof t == "string", "Value must be a string."), new TextEncoder().encode(t);
}
F.stringToBytes = xo;
function Fo(t) {
  if (typeof t == "bigint")
    return Oo(t);
  if (typeof t == "number")
    return $o(t);
  if (typeof t == "string")
    return t.startsWith("0x") ? Yr(t) : xo(t);
  if (as(t))
    return t;
  throw new TypeError(`Unsupported value type: "${typeof t}".`);
}
F.valueToBytes = Fo;
function nd(t) {
  const e = new Array(t.length);
  let r = 0;
  for (let s = 0; s < t.length; s++) {
    const i = Fo(t[s]);
    e[s] = i, r += i.length;
  }
  const n = new Uint8Array(r);
  for (let s = 0, i = 0; s < e.length; s++)
    n.set(e[s], i), i += e[s].length;
  return n;
}
F.concatBytes = nd;
function sd(t) {
  if (typeof B < "u" && t instanceof B) {
    const e = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
    return new DataView(e);
  }
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
F.createDataView = sd;
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
en.ChecksumStruct = void 0;
const ei = st, id = er;
en.ChecksumStruct = (0, ei.size)((0, id.base64)((0, ei.string)(), { paddingRequired: !0 }), 44, 44);
var Pe = {};
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.createHex = Pe.createBytes = Pe.createBigInt = Pe.createNumber = void 0;
const W = st, od = re, jo = F, tn = tr, Bo = (0, W.union)([(0, W.number)(), (0, W.bigint)(), (0, W.string)(), tn.StrictHexStruct]), ad = (0, W.coerce)((0, W.number)(), Bo, Number), cd = (0, W.coerce)((0, W.bigint)(), Bo, BigInt);
(0, W.union)([tn.StrictHexStruct, (0, W.instance)(Uint8Array)]);
const ld = (0, W.coerce)((0, W.instance)(Uint8Array), (0, W.union)([tn.StrictHexStruct]), jo.hexToBytes), ud = (0, W.coerce)(tn.StrictHexStruct, (0, W.instance)(Uint8Array), jo.bytesToHex);
function dd(t) {
  try {
    const e = (0, W.create)(t, ad);
    return (0, od.assert)(Number.isFinite(e), `Expected a number-like value, got "${t}".`), e;
  } catch (e) {
    throw e instanceof W.StructError ? new Error(`Expected a number-like value, got "${t}".`) : e;
  }
}
Pe.createNumber = dd;
function hd(t) {
  try {
    return (0, W.create)(t, cd);
  } catch (e) {
    throw e instanceof W.StructError ? new Error(`Expected a number-like value, got "${String(e.value)}".`) : e;
  }
}
Pe.createBigInt = hd;
function fd(t) {
  if (typeof t == "string" && t.toLowerCase() === "0x")
    return new Uint8Array();
  try {
    return (0, W.create)(t, ld);
  } catch (e) {
    throw e instanceof W.StructError ? new Error(`Expected a bytes-like value, got "${String(e.value)}".`) : e;
  }
}
Pe.createBytes = fd;
function gd(t) {
  if (t instanceof Uint8Array && t.length === 0 || typeof t == "string" && t.toLowerCase() === "0x")
    return "0x";
  try {
    return (0, W.create)(t, ud);
  } catch (e) {
    throw e instanceof W.StructError ? new Error(`Expected a bytes-like value, got "${String(e.value)}".`) : e;
  }
}
Pe.createHex = gd;
var _t = {}, Do = I && I.__classPrivateFieldSet || function(t, e, r, n, s) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !s : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? s.call(t, r) : s ? s.value = r : e.set(t, r), r;
}, oe = I && I.__classPrivateFieldGet || function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, ve, Ie;
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.FrozenSet = _t.FrozenMap = void 0;
class cs {
  constructor(e) {
    ve.set(this, void 0), Do(this, ve, new Map(e), "f"), Object.freeze(this);
  }
  get size() {
    return oe(this, ve, "f").size;
  }
  [(ve = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return oe(this, ve, "f")[Symbol.iterator]();
  }
  entries() {
    return oe(this, ve, "f").entries();
  }
  forEach(e, r) {
    return oe(this, ve, "f").forEach((n, s, i) => e.call(r, n, s, this));
  }
  get(e) {
    return oe(this, ve, "f").get(e);
  }
  has(e) {
    return oe(this, ve, "f").has(e);
  }
  keys() {
    return oe(this, ve, "f").keys();
  }
  values() {
    return oe(this, ve, "f").values();
  }
  toString() {
    return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([e, r]) => `${String(e)} => ${String(r)}`).join(", ")} ` : ""}}`;
  }
}
_t.FrozenMap = cs;
class ls {
  constructor(e) {
    Ie.set(this, void 0), Do(this, Ie, new Set(e), "f"), Object.freeze(this);
  }
  get size() {
    return oe(this, Ie, "f").size;
  }
  [(Ie = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return oe(this, Ie, "f")[Symbol.iterator]();
  }
  entries() {
    return oe(this, Ie, "f").entries();
  }
  forEach(e, r) {
    return oe(this, Ie, "f").forEach((n, s, i) => e.call(r, n, s, this));
  }
  has(e) {
    return oe(this, Ie, "f").has(e);
  }
  keys() {
    return oe(this, Ie, "f").keys();
  }
  values() {
    return oe(this, Ie, "f").values();
  }
  toString() {
    return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((e) => String(e)).join(", ")} ` : ""}}`;
  }
}
_t.FrozenSet = ls;
Object.freeze(cs);
Object.freeze(cs.prototype);
Object.freeze(ls);
Object.freeze(ls.prototype);
var Ho = {};
Object.defineProperty(Ho, "__esModule", { value: !0 });
var Uo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getJsonRpcIdValidator = t.assertIsJsonRpcError = t.isJsonRpcError = t.assertIsJsonRpcFailure = t.isJsonRpcFailure = t.assertIsJsonRpcSuccess = t.isJsonRpcSuccess = t.assertIsJsonRpcResponse = t.isJsonRpcResponse = t.assertIsPendingJsonRpcResponse = t.isPendingJsonRpcResponse = t.JsonRpcResponseStruct = t.JsonRpcFailureStruct = t.JsonRpcSuccessStruct = t.PendingJsonRpcResponseStruct = t.assertIsJsonRpcRequest = t.isJsonRpcRequest = t.assertIsJsonRpcNotification = t.isJsonRpcNotification = t.JsonRpcNotificationStruct = t.JsonRpcRequestStruct = t.JsonRpcParamsStruct = t.JsonRpcErrorStruct = t.JsonRpcIdStruct = t.JsonRpcVersionStruct = t.jsonrpc2 = t.getJsonSize = t.isValidJson = t.JsonStruct = t.UnsafeJsonStruct = void 0;
  const e = st, r = re, n = () => (0, e.define)("finite number", (E) => (0, e.is)(E, (0, e.number)()) && Number.isFinite(E));
  t.UnsafeJsonStruct = (0, e.union)([
    (0, e.literal)(null),
    (0, e.boolean)(),
    n(),
    (0, e.string)(),
    (0, e.array)((0, e.lazy)(() => t.UnsafeJsonStruct)),
    (0, e.record)((0, e.string)(), (0, e.lazy)(() => t.UnsafeJsonStruct))
  ]), t.JsonStruct = (0, e.define)("Json", (E, M) => {
    function z(ne, ue) {
      const pe = [...ue.validator(ne, M)];
      return pe.length > 0 ? pe : !0;
    }
    try {
      const ne = z(E, t.UnsafeJsonStruct);
      return ne !== !0 ? ne : z(JSON.parse(JSON.stringify(E)), t.UnsafeJsonStruct);
    } catch (ne) {
      return ne instanceof RangeError ? "Circular reference detected" : !1;
    }
  });
  function s(E) {
    return (0, e.is)(E, t.JsonStruct);
  }
  t.isValidJson = s;
  function i(E) {
    (0, r.assertStruct)(E, t.JsonStruct, "Invalid JSON value");
    const M = JSON.stringify(E);
    return new TextEncoder().encode(M).byteLength;
  }
  t.getJsonSize = i, t.jsonrpc2 = "2.0", t.JsonRpcVersionStruct = (0, e.literal)(t.jsonrpc2), t.JsonRpcIdStruct = (0, e.nullable)((0, e.union)([(0, e.number)(), (0, e.string)()])), t.JsonRpcErrorStruct = (0, e.object)({
    code: (0, e.integer)(),
    message: (0, e.string)(),
    data: (0, e.optional)(t.JsonStruct),
    stack: (0, e.optional)((0, e.string)())
  }), t.JsonRpcParamsStruct = (0, e.optional)((0, e.union)([(0, e.record)((0, e.string)(), t.JsonStruct), (0, e.array)(t.JsonStruct)])), t.JsonRpcRequestStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    method: (0, e.string)(),
    params: t.JsonRpcParamsStruct
  }), t.JsonRpcNotificationStruct = (0, e.omit)(t.JsonRpcRequestStruct, ["id"]);
  function o(E) {
    return (0, e.is)(E, t.JsonRpcNotificationStruct);
  }
  t.isJsonRpcNotification = o;
  function a(E, M) {
    (0, r.assertStruct)(E, t.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", M);
  }
  t.assertIsJsonRpcNotification = a;
  function l(E) {
    return (0, e.is)(E, t.JsonRpcRequestStruct);
  }
  t.isJsonRpcRequest = l;
  function c(E, M) {
    (0, r.assertStruct)(E, t.JsonRpcRequestStruct, "Invalid JSON-RPC request", M);
  }
  t.assertIsJsonRpcRequest = c, t.PendingJsonRpcResponseStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    result: (0, e.optional)((0, e.unknown)()),
    error: (0, e.optional)(t.JsonRpcErrorStruct)
  }), t.JsonRpcSuccessStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    result: t.JsonStruct
  }), t.JsonRpcFailureStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    error: t.JsonRpcErrorStruct
  }), t.JsonRpcResponseStruct = (0, e.union)([
    t.JsonRpcSuccessStruct,
    t.JsonRpcFailureStruct
  ]);
  function u(E) {
    return (0, e.is)(E, t.PendingJsonRpcResponseStruct);
  }
  t.isPendingJsonRpcResponse = u;
  function d(E, M) {
    (0, r.assertStruct)(E, t.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", M);
  }
  t.assertIsPendingJsonRpcResponse = d;
  function h(E) {
    return (0, e.is)(E, t.JsonRpcResponseStruct);
  }
  t.isJsonRpcResponse = h;
  function f(E, M) {
    (0, r.assertStruct)(E, t.JsonRpcResponseStruct, "Invalid JSON-RPC response", M);
  }
  t.assertIsJsonRpcResponse = f;
  function g(E) {
    return (0, e.is)(E, t.JsonRpcSuccessStruct);
  }
  t.isJsonRpcSuccess = g;
  function b(E, M) {
    (0, r.assertStruct)(E, t.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", M);
  }
  t.assertIsJsonRpcSuccess = b;
  function y(E) {
    return (0, e.is)(E, t.JsonRpcFailureStruct);
  }
  t.isJsonRpcFailure = y;
  function v(E, M) {
    (0, r.assertStruct)(E, t.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", M);
  }
  t.assertIsJsonRpcFailure = v;
  function S(E) {
    return (0, e.is)(E, t.JsonRpcErrorStruct);
  }
  t.isJsonRpcError = S;
  function p(E, M) {
    (0, r.assertStruct)(E, t.JsonRpcErrorStruct, "Invalid JSON-RPC error", M);
  }
  t.assertIsJsonRpcError = p;
  function j(E) {
    const { permitEmptyString: M, permitFractions: z, permitNull: ne } = Object.assign({ permitEmptyString: !0, permitFractions: !1, permitNull: !0 }, E);
    return (K) => !!(typeof K == "number" && (z || Number.isInteger(K)) || typeof K == "string" && (M || K.length > 0) || ne && K === null);
  }
  t.getJsonRpcIdValidator = j;
})(Uo);
var Vo = {};
Object.defineProperty(Vo, "__esModule", { value: !0 });
var vt = {}, Dn = { exports: {} }, In, ti;
function pd() {
  if (ti)
    return In;
  ti = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, s = n * 7, i = n * 365.25;
  In = function(u, d) {
    d = d || {};
    var h = typeof u;
    if (h === "string" && u.length > 0)
      return o(u);
    if (h === "number" && isFinite(u))
      return d.long ? l(u) : a(u);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(u)
    );
  };
  function o(u) {
    if (u = String(u), !(u.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        u
      );
      if (d) {
        var h = parseFloat(d[1]), f = (d[2] || "ms").toLowerCase();
        switch (f) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return h * i;
          case "weeks":
          case "week":
          case "w":
            return h * s;
          case "days":
          case "day":
          case "d":
            return h * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return h * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return h * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return h * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return h;
          default:
            return;
        }
      }
    }
  }
  function a(u) {
    var d = Math.abs(u);
    return d >= n ? Math.round(u / n) + "d" : d >= r ? Math.round(u / r) + "h" : d >= e ? Math.round(u / e) + "m" : d >= t ? Math.round(u / t) + "s" : u + "ms";
  }
  function l(u) {
    var d = Math.abs(u);
    return d >= n ? c(u, d, n, "day") : d >= r ? c(u, d, r, "hour") : d >= e ? c(u, d, e, "minute") : d >= t ? c(u, d, t, "second") : u + " ms";
  }
  function c(u, d, h, f) {
    var g = d >= h * 1.5;
    return Math.round(u / h) + " " + f + (g ? "s" : "");
  }
  return In;
}
function md(t) {
  r.debug = r, r.default = r, r.coerce = l, r.disable = i, r.enable = s, r.enabled = o, r.humanize = pd(), r.destroy = c, Object.keys(t).forEach((u) => {
    r[u] = t[u];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(u) {
    let d = 0;
    for (let h = 0; h < u.length; h++)
      d = (d << 5) - d + u.charCodeAt(h), d |= 0;
    return r.colors[Math.abs(d) % r.colors.length];
  }
  r.selectColor = e;
  function r(u) {
    let d, h = null, f, g;
    function b(...y) {
      if (!b.enabled)
        return;
      const v = b, S = Number(/* @__PURE__ */ new Date()), p = S - (d || S);
      v.diff = p, v.prev = d, v.curr = S, d = S, y[0] = r.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
      let j = 0;
      y[0] = y[0].replace(/%([a-zA-Z%])/g, (M, z) => {
        if (M === "%%")
          return "%";
        j++;
        const ne = r.formatters[z];
        if (typeof ne == "function") {
          const ue = y[j];
          M = ne.call(v, ue), y.splice(j, 1), j--;
        }
        return M;
      }), r.formatArgs.call(v, y), (v.log || r.log).apply(v, y);
    }
    return b.namespace = u, b.useColors = r.useColors(), b.color = r.selectColor(u), b.extend = n, b.destroy = r.destroy, Object.defineProperty(b, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => h !== null ? h : (f !== r.namespaces && (f = r.namespaces, g = r.enabled(u)), g),
      set: (y) => {
        h = y;
      }
    }), typeof r.init == "function" && r.init(b), b;
  }
  function n(u, d) {
    const h = r(this.namespace + (typeof d > "u" ? ":" : d) + u);
    return h.log = this.log, h;
  }
  function s(u) {
    r.save(u), r.namespaces = u, r.names = [], r.skips = [];
    let d;
    const h = (typeof u == "string" ? u : "").split(/[\s,]+/), f = h.length;
    for (d = 0; d < f; d++)
      h[d] && (u = h[d].replace(/\*/g, ".*?"), u[0] === "-" ? r.skips.push(new RegExp("^" + u.slice(1) + "$")) : r.names.push(new RegExp("^" + u + "$")));
  }
  function i() {
    const u = [
      ...r.names.map(a),
      ...r.skips.map(a).map((d) => "-" + d)
    ].join(",");
    return r.enable(""), u;
  }
  function o(u) {
    if (u[u.length - 1] === "*")
      return !0;
    let d, h;
    for (d = 0, h = r.skips.length; d < h; d++)
      if (r.skips[d].test(u))
        return !1;
    for (d = 0, h = r.names.length; d < h; d++)
      if (r.names[d].test(u))
        return !0;
    return !1;
  }
  function a(u) {
    return u.toString().substring(2, u.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(u) {
    return u instanceof Error ? u.stack || u.message : u;
  }
  function c() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var bd = md;
(function(t, e) {
  e.formatArgs = n, e.save = s, e.load = i, e.useColors = r, e.storage = o(), e.destroy = /* @__PURE__ */ (() => {
    let l = !1;
    return () => {
      l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
      return !0;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
      return !1;
    let l;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && (l = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(l) {
    if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const c = "color: " + this.color;
    l.splice(1, 0, c, "color: inherit");
    let u = 0, d = 0;
    l[0].replace(/%[a-zA-Z%]/g, (h) => {
      h !== "%%" && (u++, h === "%c" && (d = u));
    }), l.splice(d, 0, c);
  }
  e.log = console.debug || console.log || (() => {
  });
  function s(l) {
    try {
      l ? e.storage.setItem("debug", l) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function i() {
    let l;
    try {
      l = e.storage.getItem("debug");
    } catch {
    }
    return !l && typeof Qe < "u" && "env" in Qe && (l = Qe.env.DEBUG), l;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = bd(e);
  const { formatters: a } = t.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(Dn, Dn.exports);
var yd = Dn.exports, wd = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.createModuleLogger = vt.createProjectLogger = void 0;
const Ed = wd(yd), _d = (0, Ed.default)("metamask");
function vd(t) {
  return _d.extend(t);
}
vt.createProjectLogger = vd;
function Sd(t, e) {
  return t.extend(e);
}
vt.createModuleLogger = Sd;
var Wo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.calculateNumberSize = t.calculateStringSize = t.isASCII = t.isPlainObject = t.ESCAPE_CHARACTERS_REGEXP = t.JsonSize = t.hasProperty = t.isObject = t.isNullOrUndefined = t.isNonEmptyArray = void 0;
  function e(c) {
    return Array.isArray(c) && c.length > 0;
  }
  t.isNonEmptyArray = e;
  function r(c) {
    return c == null;
  }
  t.isNullOrUndefined = r;
  function n(c) {
    return !!c && typeof c == "object" && !Array.isArray(c);
  }
  t.isObject = n;
  const s = (c, u) => Object.hasOwnProperty.call(c, u);
  t.hasProperty = s, function(c) {
    c[c.Null = 4] = "Null", c[c.Comma = 1] = "Comma", c[c.Wrapper = 1] = "Wrapper", c[c.True = 4] = "True", c[c.False = 5] = "False", c[c.Quote = 1] = "Quote", c[c.Colon = 1] = "Colon", c[c.Date = 24] = "Date";
  }(t.JsonSize || (t.JsonSize = {})), t.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
  function i(c) {
    if (typeof c != "object" || c === null)
      return !1;
    try {
      let u = c;
      for (; Object.getPrototypeOf(u) !== null; )
        u = Object.getPrototypeOf(u);
      return Object.getPrototypeOf(c) === u;
    } catch {
      return !1;
    }
  }
  t.isPlainObject = i;
  function o(c) {
    return c.charCodeAt(0) <= 127;
  }
  t.isASCII = o;
  function a(c) {
    var u;
    return c.split("").reduce((h, f) => o(f) ? h + 1 : h + 2, 0) + ((u = c.match(t.ESCAPE_CHARACTERS_REGEXP)) !== null && u !== void 0 ? u : []).length;
  }
  t.calculateStringSize = a;
  function l(c) {
    return c.toString().length;
  }
  t.calculateNumberSize = l;
})(Wo);
var Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.hexToBigInt = Oe.hexToNumber = Oe.bigIntToHex = Oe.numberToHex = void 0;
const pt = re, jt = tr, Cd = (t) => ((0, pt.assert)(typeof t == "number", "Value must be a number."), (0, pt.assert)(t >= 0, "Value must be a non-negative number."), (0, pt.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `bigIntToHex` instead."), (0, jt.add0x)(t.toString(16)));
Oe.numberToHex = Cd;
const kd = (t) => ((0, pt.assert)(typeof t == "bigint", "Value must be a bigint."), (0, pt.assert)(t >= 0, "Value must be a non-negative bigint."), (0, jt.add0x)(t.toString(16)));
Oe.bigIntToHex = kd;
const Rd = (t) => {
  (0, jt.assertIsHexString)(t);
  const e = parseInt(t, 16);
  return (0, pt.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `hexToBigInt` instead."), e;
};
Oe.hexToNumber = Rd;
const Id = (t) => ((0, jt.assertIsHexString)(t), BigInt((0, jt.add0x)(t)));
Oe.hexToBigInt = Id;
var zo = {};
Object.defineProperty(zo, "__esModule", { value: !0 });
var Jo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.timeSince = t.inMilliseconds = t.Duration = void 0, function(i) {
    i[i.Millisecond = 1] = "Millisecond", i[i.Second = 1e3] = "Second", i[i.Minute = 6e4] = "Minute", i[i.Hour = 36e5] = "Hour", i[i.Day = 864e5] = "Day", i[i.Week = 6048e5] = "Week", i[i.Year = 31536e6] = "Year";
  }(t.Duration || (t.Duration = {}));
  const e = (i) => Number.isInteger(i) && i >= 0, r = (i, o) => {
    if (!e(i))
      throw new Error(`"${o}" must be a non-negative integer. Received: "${i}".`);
  };
  function n(i, o) {
    return r(i, "count"), i * o;
  }
  t.inMilliseconds = n;
  function s(i) {
    return r(i, "timestamp"), Date.now() - i;
  }
  t.timeSince = s;
})(Jo);
var qo = {};
Object.defineProperty(qo, "__esModule", { value: !0 });
var Go = {}, Hn = { exports: {} };
const Ad = "2.0.0", Zo = 256, Nd = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Md = 16, Ld = Zo - 6, Td = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var rn = {
  MAX_LENGTH: Zo,
  MAX_SAFE_COMPONENT_LENGTH: Md,
  MAX_SAFE_BUILD_LENGTH: Ld,
  MAX_SAFE_INTEGER: Nd,
  RELEASE_TYPES: Td,
  SEMVER_SPEC_VERSION: Ad,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const Pd = typeof Qe == "object" && Qe.env && Qe.env.NODE_DEBUG && /\bsemver\b/i.test(Qe.env.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {
};
var nn = Pd;
(function(t, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: n,
    MAX_LENGTH: s
  } = rn, i = nn;
  e = t.exports = {};
  const o = e.re = [], a = e.safeRe = [], l = e.src = [], c = e.t = {};
  let u = 0;
  const d = "[a-zA-Z0-9-]", h = [
    ["\\s", 1],
    ["\\d", s],
    [d, n]
  ], f = (b) => {
    for (const [y, v] of h)
      b = b.split(`${y}*`).join(`${y}{0,${v}}`).split(`${y}+`).join(`${y}{1,${v}}`);
    return b;
  }, g = (b, y, v) => {
    const S = f(y), p = u++;
    i(b, p, y), c[b] = p, l[p] = y, o[p] = new RegExp(y, v ? "g" : void 0), a[p] = new RegExp(S, v ? "g" : void 0);
  };
  g("NUMERICIDENTIFIER", "0|[1-9]\\d*"), g("NUMERICIDENTIFIERLOOSE", "\\d+"), g("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${d}*`), g("MAINVERSION", `(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})`), g("MAINVERSIONLOOSE", `(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})`), g("PRERELEASEIDENTIFIER", `(?:${l[c.NUMERICIDENTIFIER]}|${l[c.NONNUMERICIDENTIFIER]})`), g("PRERELEASEIDENTIFIERLOOSE", `(?:${l[c.NUMERICIDENTIFIERLOOSE]}|${l[c.NONNUMERICIDENTIFIER]})`), g("PRERELEASE", `(?:-(${l[c.PRERELEASEIDENTIFIER]}(?:\\.${l[c.PRERELEASEIDENTIFIER]})*))`), g("PRERELEASELOOSE", `(?:-?(${l[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[c.PRERELEASEIDENTIFIERLOOSE]})*))`), g("BUILDIDENTIFIER", `${d}+`), g("BUILD", `(?:\\+(${l[c.BUILDIDENTIFIER]}(?:\\.${l[c.BUILDIDENTIFIER]})*))`), g("FULLPLAIN", `v?${l[c.MAINVERSION]}${l[c.PRERELEASE]}?${l[c.BUILD]}?`), g("FULL", `^${l[c.FULLPLAIN]}$`), g("LOOSEPLAIN", `[v=\\s]*${l[c.MAINVERSIONLOOSE]}${l[c.PRERELEASELOOSE]}?${l[c.BUILD]}?`), g("LOOSE", `^${l[c.LOOSEPLAIN]}$`), g("GTLT", "((?:<|>)?=?)"), g("XRANGEIDENTIFIERLOOSE", `${l[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), g("XRANGEIDENTIFIER", `${l[c.NUMERICIDENTIFIER]}|x|X|\\*`), g("XRANGEPLAIN", `[v=\\s]*(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:${l[c.PRERELEASE]})?${l[c.BUILD]}?)?)?`), g("XRANGEPLAINLOOSE", `[v=\\s]*(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:${l[c.PRERELEASELOOSE]})?${l[c.BUILD]}?)?)?`), g("XRANGE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAIN]}$`), g("XRANGELOOSE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAINLOOSE]}$`), g("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), g("COERCE", `${l[c.COERCEPLAIN]}(?:$|[^\\d])`), g("COERCEFULL", l[c.COERCEPLAIN] + `(?:${l[c.PRERELEASE]})?(?:${l[c.BUILD]})?(?:$|[^\\d])`), g("COERCERTL", l[c.COERCE], !0), g("COERCERTLFULL", l[c.COERCEFULL], !0), g("LONETILDE", "(?:~>?)"), g("TILDETRIM", `(\\s*)${l[c.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", g("TILDE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAIN]}$`), g("TILDELOOSE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAINLOOSE]}$`), g("LONECARET", "(?:\\^)"), g("CARETTRIM", `(\\s*)${l[c.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", g("CARET", `^${l[c.LONECARET]}${l[c.XRANGEPLAIN]}$`), g("CARETLOOSE", `^${l[c.LONECARET]}${l[c.XRANGEPLAINLOOSE]}$`), g("COMPARATORLOOSE", `^${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]})$|^$`), g("COMPARATOR", `^${l[c.GTLT]}\\s*(${l[c.FULLPLAIN]})$|^$`), g("COMPARATORTRIM", `(\\s*)${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]}|${l[c.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", g("HYPHENRANGE", `^\\s*(${l[c.XRANGEPLAIN]})\\s+-\\s+(${l[c.XRANGEPLAIN]})\\s*$`), g("HYPHENRANGELOOSE", `^\\s*(${l[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[c.XRANGEPLAINLOOSE]})\\s*$`), g("STAR", "(<|>)?=?\\s*\\*"), g("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), g("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Hn, Hn.exports);
var rr = Hn.exports;
const Od = Object.freeze({ loose: !0 }), $d = Object.freeze({}), xd = (t) => t ? typeof t != "object" ? Od : t : $d;
var us = xd;
const ri = /^[0-9]+$/, Qo = (t, e) => {
  const r = ri.test(t), n = ri.test(e);
  return r && n && (t = +t, e = +e), t === e ? 0 : r && !n ? -1 : n && !r ? 1 : t < e ? -1 : 1;
}, Fd = (t, e) => Qo(e, t);
var Ko = {
  compareIdentifiers: Qo,
  rcompareIdentifiers: Fd
};
const gr = nn, { MAX_LENGTH: ni, MAX_SAFE_INTEGER: pr } = rn, { safeRe: si, t: ii } = rr, jd = us, { compareIdentifiers: lt } = Ko;
let Bd = class Ae {
  constructor(e, r) {
    if (r = jd(r), e instanceof Ae) {
      if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > ni)
      throw new TypeError(
        `version is longer than ${ni} characters`
      );
    gr("SemVer", e, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const n = e.trim().match(r.loose ? si[ii.LOOSE] : si[ii.FULL]);
    if (!n)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > pr || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > pr || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > pr || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4] ? this.prerelease = n[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const i = +s;
        if (i >= 0 && i < pr)
          return i;
      }
      return s;
    }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (gr("SemVer.compare", this.version, this.options, e), !(e instanceof Ae)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new Ae(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof Ae || (e = new Ae(e, this.options)), lt(this.major, e.major) || lt(this.minor, e.minor) || lt(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof Ae || (e = new Ae(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let r = 0;
    do {
      const n = this.prerelease[r], s = e.prerelease[r];
      if (gr("prerelease compare", r, n, s), n === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === s)
        continue;
      return lt(n, s);
    } while (++r);
  }
  compareBuild(e) {
    e instanceof Ae || (e = new Ae(e, this.options));
    let r = 0;
    do {
      const n = this.build[r], s = e.build[r];
      if (gr("build compare", r, n, s), n === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === s)
        continue;
      return lt(n, s);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, r, n) {
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, n);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, n);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const s = Number(n) ? 1 : 0;
        if (!r && n === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [s];
        else {
          let i = this.prerelease.length;
          for (; --i >= 0; )
            typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
          if (i === -1) {
            if (r === this.prerelease.join(".") && n === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(s);
          }
        }
        if (r) {
          let i = [r, s];
          n === !1 && (i = [r]), lt(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var ae = Bd;
const oi = ae, Dd = (t, e, r = !1) => {
  if (t instanceof oi)
    return t;
  try {
    return new oi(t, e);
  } catch (n) {
    if (!r)
      return null;
    throw n;
  }
};
var Mt = Dd;
const Hd = Mt, Ud = (t, e) => {
  const r = Hd(t, e);
  return r ? r.version : null;
};
var Vd = Ud;
const Wd = Mt, zd = (t, e) => {
  const r = Wd(t.trim().replace(/^[=v]+/, ""), e);
  return r ? r.version : null;
};
var Jd = zd;
const ai = ae, qd = (t, e, r, n, s) => {
  typeof r == "string" && (s = n, n = r, r = void 0);
  try {
    return new ai(
      t instanceof ai ? t.version : t,
      r
    ).inc(e, n, s).version;
  } catch {
    return null;
  }
};
var Gd = qd;
const ci = Mt, Zd = (t, e) => {
  const r = ci(t, null, !0), n = ci(e, null, !0), s = r.compare(n);
  if (s === 0)
    return null;
  const i = s > 0, o = i ? r : n, a = i ? n : r, l = !!o.prerelease.length;
  if (!!a.prerelease.length && !l)
    return !a.patch && !a.minor ? "major" : o.patch ? "patch" : o.minor ? "minor" : "major";
  const u = l ? "pre" : "";
  return r.major !== n.major ? u + "major" : r.minor !== n.minor ? u + "minor" : r.patch !== n.patch ? u + "patch" : "prerelease";
};
var Qd = Zd;
const Kd = ae, Xd = (t, e) => new Kd(t, e).major;
var Yd = Xd;
const eh = ae, th = (t, e) => new eh(t, e).minor;
var rh = th;
const nh = ae, sh = (t, e) => new nh(t, e).patch;
var ih = sh;
const oh = Mt, ah = (t, e) => {
  const r = oh(t, e);
  return r && r.prerelease.length ? r.prerelease : null;
};
var ch = ah;
const li = ae, lh = (t, e, r) => new li(t, r).compare(new li(e, r));
var Ce = lh;
const uh = Ce, dh = (t, e, r) => uh(e, t, r);
var hh = dh;
const fh = Ce, gh = (t, e) => fh(t, e, !0);
var ph = gh;
const ui = ae, mh = (t, e, r) => {
  const n = new ui(t, r), s = new ui(e, r);
  return n.compare(s) || n.compareBuild(s);
};
var ds = mh;
const bh = ds, yh = (t, e) => t.sort((r, n) => bh(r, n, e));
var wh = yh;
const Eh = ds, _h = (t, e) => t.sort((r, n) => Eh(n, r, e));
var vh = _h;
const Sh = Ce, Ch = (t, e, r) => Sh(t, e, r) > 0;
var sn = Ch;
const kh = Ce, Rh = (t, e, r) => kh(t, e, r) < 0;
var hs = Rh;
const Ih = Ce, Ah = (t, e, r) => Ih(t, e, r) === 0;
var Xo = Ah;
const Nh = Ce, Mh = (t, e, r) => Nh(t, e, r) !== 0;
var Yo = Mh;
const Lh = Ce, Th = (t, e, r) => Lh(t, e, r) >= 0;
var fs = Th;
const Ph = Ce, Oh = (t, e, r) => Ph(t, e, r) <= 0;
var gs = Oh;
const $h = Xo, xh = Yo, Fh = sn, jh = fs, Bh = hs, Dh = gs, Hh = (t, e, r, n) => {
  switch (e) {
    case "===":
      return typeof t == "object" && (t = t.version), typeof r == "object" && (r = r.version), t === r;
    case "!==":
      return typeof t == "object" && (t = t.version), typeof r == "object" && (r = r.version), t !== r;
    case "":
    case "=":
    case "==":
      return $h(t, r, n);
    case "!=":
      return xh(t, r, n);
    case ">":
      return Fh(t, r, n);
    case ">=":
      return jh(t, r, n);
    case "<":
      return Bh(t, r, n);
    case "<=":
      return Dh(t, r, n);
    default:
      throw new TypeError(`Invalid operator: ${e}`);
  }
};
var ea = Hh;
const Uh = ae, Vh = Mt, { safeRe: mr, t: br } = rr, Wh = (t, e) => {
  if (t instanceof Uh)
    return t;
  if (typeof t == "number" && (t = String(t)), typeof t != "string")
    return null;
  e = e || {};
  let r = null;
  if (!e.rtl)
    r = t.match(e.includePrerelease ? mr[br.COERCEFULL] : mr[br.COERCE]);
  else {
    const l = e.includePrerelease ? mr[br.COERCERTLFULL] : mr[br.COERCERTL];
    let c;
    for (; (c = l.exec(t)) && (!r || r.index + r[0].length !== t.length); )
      (!r || c.index + c[0].length !== r.index + r[0].length) && (r = c), l.lastIndex = c.index + c[1].length + c[2].length;
    l.lastIndex = -1;
  }
  if (r === null)
    return null;
  const n = r[2], s = r[3] || "0", i = r[4] || "0", o = e.includePrerelease && r[5] ? `-${r[5]}` : "", a = e.includePrerelease && r[6] ? `+${r[6]}` : "";
  return Vh(`${n}.${s}.${i}${o}${a}`, e);
};
var zh = Wh;
class Jh {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(e) {
    const r = this.map.get(e);
    if (r !== void 0)
      return this.map.delete(e), this.map.set(e, r), r;
  }
  delete(e) {
    return this.map.delete(e);
  }
  set(e, r) {
    if (!this.delete(e) && r !== void 0) {
      if (this.map.size >= this.max) {
        const s = this.map.keys().next().value;
        this.delete(s);
      }
      this.map.set(e, r);
    }
    return this;
  }
}
var qh = Jh, An, di;
function ke() {
  if (di)
    return An;
  di = 1;
  const t = /\s+/g;
  class e {
    constructor(m, R) {
      if (R = s(R), m instanceof e)
        return m.loose === !!R.loose && m.includePrerelease === !!R.includePrerelease ? m : new e(m.raw, R);
      if (m instanceof i)
        return this.raw = m.value, this.set = [[m]], this.formatted = void 0, this;
      if (this.options = R, this.loose = !!R.loose, this.includePrerelease = !!R.includePrerelease, this.raw = m.trim().replace(t, " "), this.set = this.raw.split("||").map((C) => this.parseRange(C.trim())).filter((C) => C.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const C = this.set[0];
        if (this.set = this.set.filter((A) => !b(A[0])), this.set.length === 0)
          this.set = [C];
        else if (this.set.length > 1) {
          for (const A of this.set)
            if (A.length === 1 && y(A[0])) {
              this.set = [A];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let m = 0; m < this.set.length; m++) {
          m > 0 && (this.formatted += "||");
          const R = this.set[m];
          for (let C = 0; C < R.length; C++)
            C > 0 && (this.formatted += " "), this.formatted += R[C].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(m) {
      const C = ((this.options.includePrerelease && f) | (this.options.loose && g)) + ":" + m, A = n.get(C);
      if (A)
        return A;
      const k = this.options.loose, L = k ? l[c.HYPHENRANGELOOSE] : l[c.HYPHENRANGE];
      m = m.replace(L, X(this.options.includePrerelease)), o("hyphen replace", m), m = m.replace(l[c.COMPARATORTRIM], u), o("comparator trim", m), m = m.replace(l[c.TILDETRIM], d), o("tilde trim", m), m = m.replace(l[c.CARETTRIM], h), o("caret trim", m);
      let D = m.split(" ").map((q) => S(q, this.options)).join(" ").split(/\s+/).map((q) => pe(q, this.options));
      k && (D = D.filter((q) => (o("loose invalid filter", q, this.options), !!q.match(l[c.COMPARATORLOOSE])))), o("range list", D);
      const O = /* @__PURE__ */ new Map(), H = D.map((q) => new i(q, this.options));
      for (const q of H) {
        if (b(q))
          return [q];
        O.set(q.value, q);
      }
      O.size > 1 && O.has("") && O.delete("");
      const de = [...O.values()];
      return n.set(C, de), de;
    }
    intersects(m, R) {
      if (!(m instanceof e))
        throw new TypeError("a Range is required");
      return this.set.some((C) => v(C, R) && m.set.some((A) => v(A, R) && C.every((k) => A.every((L) => k.intersects(L, R)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(m) {
      if (!m)
        return !1;
      if (typeof m == "string")
        try {
          m = new a(m, this.options);
        } catch {
          return !1;
        }
      for (let R = 0; R < this.set.length; R++)
        if (ar(this.set[R], m, this.options))
          return !0;
      return !1;
    }
  }
  An = e;
  const r = qh, n = new r(), s = us, i = on(), o = nn, a = ae, {
    safeRe: l,
    t: c,
    comparatorTrimReplace: u,
    tildeTrimReplace: d,
    caretTrimReplace: h
  } = rr, { FLAG_INCLUDE_PRERELEASE: f, FLAG_LOOSE: g } = rn, b = (w) => w.value === "<0.0.0-0", y = (w) => w.value === "", v = (w, m) => {
    let R = !0;
    const C = w.slice();
    let A = C.pop();
    for (; R && C.length; )
      R = C.every((k) => A.intersects(k, m)), A = C.pop();
    return R;
  }, S = (w, m) => (o("comp", w, m), w = M(w, m), o("caret", w), w = j(w, m), o("tildes", w), w = ne(w, m), o("xrange", w), w = K(w, m), o("stars", w), w), p = (w) => !w || w.toLowerCase() === "x" || w === "*", j = (w, m) => w.trim().split(/\s+/).map((R) => E(R, m)).join(" "), E = (w, m) => {
    const R = m.loose ? l[c.TILDELOOSE] : l[c.TILDE];
    return w.replace(R, (C, A, k, L, D) => {
      o("tilde", w, C, A, k, L, D);
      let O;
      return p(A) ? O = "" : p(k) ? O = `>=${A}.0.0 <${+A + 1}.0.0-0` : p(L) ? O = `>=${A}.${k}.0 <${A}.${+k + 1}.0-0` : D ? (o("replaceTilde pr", D), O = `>=${A}.${k}.${L}-${D} <${A}.${+k + 1}.0-0`) : O = `>=${A}.${k}.${L} <${A}.${+k + 1}.0-0`, o("tilde return", O), O;
    });
  }, M = (w, m) => w.trim().split(/\s+/).map((R) => z(R, m)).join(" "), z = (w, m) => {
    o("caret", w, m);
    const R = m.loose ? l[c.CARETLOOSE] : l[c.CARET], C = m.includePrerelease ? "-0" : "";
    return w.replace(R, (A, k, L, D, O) => {
      o("caret", w, A, k, L, D, O);
      let H;
      return p(k) ? H = "" : p(L) ? H = `>=${k}.0.0${C} <${+k + 1}.0.0-0` : p(D) ? k === "0" ? H = `>=${k}.${L}.0${C} <${k}.${+L + 1}.0-0` : H = `>=${k}.${L}.0${C} <${+k + 1}.0.0-0` : O ? (o("replaceCaret pr", O), k === "0" ? L === "0" ? H = `>=${k}.${L}.${D}-${O} <${k}.${L}.${+D + 1}-0` : H = `>=${k}.${L}.${D}-${O} <${k}.${+L + 1}.0-0` : H = `>=${k}.${L}.${D}-${O} <${+k + 1}.0.0-0`) : (o("no pr"), k === "0" ? L === "0" ? H = `>=${k}.${L}.${D}${C} <${k}.${L}.${+D + 1}-0` : H = `>=${k}.${L}.${D}${C} <${k}.${+L + 1}.0-0` : H = `>=${k}.${L}.${D} <${+k + 1}.0.0-0`), o("caret return", H), H;
    });
  }, ne = (w, m) => (o("replaceXRanges", w, m), w.split(/\s+/).map((R) => ue(R, m)).join(" ")), ue = (w, m) => {
    w = w.trim();
    const R = m.loose ? l[c.XRANGELOOSE] : l[c.XRANGE];
    return w.replace(R, (C, A, k, L, D, O) => {
      o("xRange", w, C, A, k, L, D, O);
      const H = p(k), de = H || p(L), q = de || p(D), Lt = q;
      return A === "=" && Lt && (A = ""), O = m.includePrerelease ? "-0" : "", H ? A === ">" || A === "<" ? C = "<0.0.0-0" : C = "*" : A && Lt ? (de && (L = 0), D = 0, A === ">" ? (A = ">=", de ? (k = +k + 1, L = 0, D = 0) : (L = +L + 1, D = 0)) : A === "<=" && (A = "<", de ? k = +k + 1 : L = +L + 1), A === "<" && (O = "-0"), C = `${A + k}.${L}.${D}${O}`) : de ? C = `>=${k}.0.0${O} <${+k + 1}.0.0-0` : q && (C = `>=${k}.${L}.0${O} <${k}.${+L + 1}.0-0`), o("xRange return", C), C;
    });
  }, K = (w, m) => (o("replaceStars", w, m), w.trim().replace(l[c.STAR], "")), pe = (w, m) => (o("replaceGTE0", w, m), w.trim().replace(l[m.includePrerelease ? c.GTE0PRE : c.GTE0], "")), X = (w) => (m, R, C, A, k, L, D, O, H, de, q, Lt) => (p(C) ? R = "" : p(A) ? R = `>=${C}.0.0${w ? "-0" : ""}` : p(k) ? R = `>=${C}.${A}.0${w ? "-0" : ""}` : L ? R = `>=${R}` : R = `>=${R}${w ? "-0" : ""}`, p(H) ? O = "" : p(de) ? O = `<${+H + 1}.0.0-0` : p(q) ? O = `<${H}.${+de + 1}.0-0` : Lt ? O = `<=${H}.${de}.${q}-${Lt}` : w ? O = `<${H}.${de}.${+q + 1}-0` : O = `<=${O}`, `${R} ${O}`.trim()), ar = (w, m, R) => {
    for (let C = 0; C < w.length; C++)
      if (!w[C].test(m))
        return !1;
    if (m.prerelease.length && !R.includePrerelease) {
      for (let C = 0; C < w.length; C++)
        if (o(w[C].semver), w[C].semver !== i.ANY && w[C].semver.prerelease.length > 0) {
          const A = w[C].semver;
          if (A.major === m.major && A.minor === m.minor && A.patch === m.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return An;
}
var Nn, hi;
function on() {
  if (hi)
    return Nn;
  hi = 1;
  const t = Symbol("SemVer ANY");
  class e {
    static get ANY() {
      return t;
    }
    constructor(u, d) {
      if (d = r(d), u instanceof e) {
        if (u.loose === !!d.loose)
          return u;
        u = u.value;
      }
      u = u.trim().split(/\s+/).join(" "), o("comparator", u, d), this.options = d, this.loose = !!d.loose, this.parse(u), this.semver === t ? this.value = "" : this.value = this.operator + this.semver.version, o("comp", this);
    }
    parse(u) {
      const d = this.options.loose ? n[s.COMPARATORLOOSE] : n[s.COMPARATOR], h = u.match(d);
      if (!h)
        throw new TypeError(`Invalid comparator: ${u}`);
      this.operator = h[1] !== void 0 ? h[1] : "", this.operator === "=" && (this.operator = ""), h[2] ? this.semver = new a(h[2], this.options.loose) : this.semver = t;
    }
    toString() {
      return this.value;
    }
    test(u) {
      if (o("Comparator.test", u, this.options.loose), this.semver === t || u === t)
        return !0;
      if (typeof u == "string")
        try {
          u = new a(u, this.options);
        } catch {
          return !1;
        }
      return i(u, this.operator, this.semver, this.options);
    }
    intersects(u, d) {
      if (!(u instanceof e))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new l(u.value, d).test(this.value) : u.operator === "" ? u.value === "" ? !0 : new l(this.value, d).test(u.semver) : (d = r(d), d.includePrerelease && (this.value === "<0.0.0-0" || u.value === "<0.0.0-0") || !d.includePrerelease && (this.value.startsWith("<0.0.0") || u.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && u.operator.startsWith(">") || this.operator.startsWith("<") && u.operator.startsWith("<") || this.semver.version === u.semver.version && this.operator.includes("=") && u.operator.includes("=") || i(this.semver, "<", u.semver, d) && this.operator.startsWith(">") && u.operator.startsWith("<") || i(this.semver, ">", u.semver, d) && this.operator.startsWith("<") && u.operator.startsWith(">")));
    }
  }
  Nn = e;
  const r = us, { safeRe: n, t: s } = rr, i = ea, o = nn, a = ae, l = ke();
  return Nn;
}
const Gh = ke(), Zh = (t, e, r) => {
  try {
    e = new Gh(e, r);
  } catch {
    return !1;
  }
  return e.test(t);
};
var an = Zh;
const Qh = ke(), Kh = (t, e) => new Qh(t, e).set.map((r) => r.map((n) => n.value).join(" ").trim().split(" "));
var Xh = Kh;
const Yh = ae, ef = ke(), tf = (t, e, r) => {
  let n = null, s = null, i = null;
  try {
    i = new ef(e, r);
  } catch {
    return null;
  }
  return t.forEach((o) => {
    i.test(o) && (!n || s.compare(o) === -1) && (n = o, s = new Yh(n, r));
  }), n;
};
var rf = tf;
const nf = ae, sf = ke(), of = (t, e, r) => {
  let n = null, s = null, i = null;
  try {
    i = new sf(e, r);
  } catch {
    return null;
  }
  return t.forEach((o) => {
    i.test(o) && (!n || s.compare(o) === 1) && (n = o, s = new nf(n, r));
  }), n;
};
var af = of;
const Mn = ae, cf = ke(), fi = sn, lf = (t, e) => {
  t = new cf(t, e);
  let r = new Mn("0.0.0");
  if (t.test(r) || (r = new Mn("0.0.0-0"), t.test(r)))
    return r;
  r = null;
  for (let n = 0; n < t.set.length; ++n) {
    const s = t.set[n];
    let i = null;
    s.forEach((o) => {
      const a = new Mn(o.semver.version);
      switch (o.operator) {
        case ">":
          a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
        case "":
        case ">=":
          (!i || fi(a, i)) && (i = a);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${o.operator}`);
      }
    }), i && (!r || fi(r, i)) && (r = i);
  }
  return r && t.test(r) ? r : null;
};
var uf = lf;
const df = ke(), hf = (t, e) => {
  try {
    return new df(t, e).range || "*";
  } catch {
    return null;
  }
};
var ff = hf;
const gf = ae, ta = on(), { ANY: pf } = ta, mf = ke(), bf = an, gi = sn, pi = hs, yf = gs, wf = fs, Ef = (t, e, r, n) => {
  t = new gf(t, n), e = new mf(e, n);
  let s, i, o, a, l;
  switch (r) {
    case ">":
      s = gi, i = yf, o = pi, a = ">", l = ">=";
      break;
    case "<":
      s = pi, i = wf, o = gi, a = "<", l = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (bf(t, e, n))
    return !1;
  for (let c = 0; c < e.set.length; ++c) {
    const u = e.set[c];
    let d = null, h = null;
    if (u.forEach((f) => {
      f.semver === pf && (f = new ta(">=0.0.0")), d = d || f, h = h || f, s(f.semver, d.semver, n) ? d = f : o(f.semver, h.semver, n) && (h = f);
    }), d.operator === a || d.operator === l || (!h.operator || h.operator === a) && i(t, h.semver))
      return !1;
    if (h.operator === l && o(t, h.semver))
      return !1;
  }
  return !0;
};
var ps = Ef;
const _f = ps, vf = (t, e, r) => _f(t, e, ">", r);
var Sf = vf;
const Cf = ps, kf = (t, e, r) => Cf(t, e, "<", r);
var Rf = kf;
const mi = ke(), If = (t, e, r) => (t = new mi(t, r), e = new mi(e, r), t.intersects(e, r));
var Af = If;
const Nf = an, Mf = Ce;
var Lf = (t, e, r) => {
  const n = [];
  let s = null, i = null;
  const o = t.sort((u, d) => Mf(u, d, r));
  for (const u of o)
    Nf(u, e, r) ? (i = u, s || (s = u)) : (i && n.push([s, i]), i = null, s = null);
  s && n.push([s, null]);
  const a = [];
  for (const [u, d] of n)
    u === d ? a.push(u) : !d && u === o[0] ? a.push("*") : d ? u === o[0] ? a.push(`<=${d}`) : a.push(`${u} - ${d}`) : a.push(`>=${u}`);
  const l = a.join(" || "), c = typeof e.raw == "string" ? e.raw : String(e);
  return l.length < c.length ? l : e;
};
const bi = ke(), ms = on(), { ANY: Ln } = ms, Pt = an, bs = Ce, Tf = (t, e, r = {}) => {
  if (t === e)
    return !0;
  t = new bi(t, r), e = new bi(e, r);
  let n = !1;
  e:
    for (const s of t.set) {
      for (const i of e.set) {
        const o = Of(s, i, r);
        if (n = n || o !== null, o)
          continue e;
      }
      if (n)
        return !1;
    }
  return !0;
}, Pf = [new ms(">=0.0.0-0")], yi = [new ms(">=0.0.0")], Of = (t, e, r) => {
  if (t === e)
    return !0;
  if (t.length === 1 && t[0].semver === Ln) {
    if (e.length === 1 && e[0].semver === Ln)
      return !0;
    r.includePrerelease ? t = Pf : t = yi;
  }
  if (e.length === 1 && e[0].semver === Ln) {
    if (r.includePrerelease)
      return !0;
    e = yi;
  }
  const n = /* @__PURE__ */ new Set();
  let s, i;
  for (const f of t)
    f.operator === ">" || f.operator === ">=" ? s = wi(s, f, r) : f.operator === "<" || f.operator === "<=" ? i = Ei(i, f, r) : n.add(f.semver);
  if (n.size > 1)
    return null;
  let o;
  if (s && i) {
    if (o = bs(s.semver, i.semver, r), o > 0)
      return null;
    if (o === 0 && (s.operator !== ">=" || i.operator !== "<="))
      return null;
  }
  for (const f of n) {
    if (s && !Pt(f, String(s), r) || i && !Pt(f, String(i), r))
      return null;
    for (const g of e)
      if (!Pt(f, String(g), r))
        return !1;
    return !0;
  }
  let a, l, c, u, d = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1, h = s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1;
  d && d.prerelease.length === 1 && i.operator === "<" && d.prerelease[0] === 0 && (d = !1);
  for (const f of e) {
    if (u = u || f.operator === ">" || f.operator === ">=", c = c || f.operator === "<" || f.operator === "<=", s) {
      if (h && f.semver.prerelease && f.semver.prerelease.length && f.semver.major === h.major && f.semver.minor === h.minor && f.semver.patch === h.patch && (h = !1), f.operator === ">" || f.operator === ">=") {
        if (a = wi(s, f, r), a === f && a !== s)
          return !1;
      } else if (s.operator === ">=" && !Pt(s.semver, String(f), r))
        return !1;
    }
    if (i) {
      if (d && f.semver.prerelease && f.semver.prerelease.length && f.semver.major === d.major && f.semver.minor === d.minor && f.semver.patch === d.patch && (d = !1), f.operator === "<" || f.operator === "<=") {
        if (l = Ei(i, f, r), l === f && l !== i)
          return !1;
      } else if (i.operator === "<=" && !Pt(i.semver, String(f), r))
        return !1;
    }
    if (!f.operator && (i || s) && o !== 0)
      return !1;
  }
  return !(s && c && !i && o !== 0 || i && u && !s && o !== 0 || h || d);
}, wi = (t, e, r) => {
  if (!t)
    return e;
  const n = bs(t.semver, e.semver, r);
  return n > 0 ? t : n < 0 || e.operator === ">" && t.operator === ">=" ? e : t;
}, Ei = (t, e, r) => {
  if (!t)
    return e;
  const n = bs(t.semver, e.semver, r);
  return n < 0 ? t : n > 0 || e.operator === "<" && t.operator === "<=" ? e : t;
};
var $f = Tf;
const Tn = rr, _i = rn, xf = ae, vi = Ko, Ff = Mt, jf = Vd, Bf = Jd, Df = Gd, Hf = Qd, Uf = Yd, Vf = rh, Wf = ih, zf = ch, Jf = Ce, qf = hh, Gf = ph, Zf = ds, Qf = wh, Kf = vh, Xf = sn, Yf = hs, e0 = Xo, t0 = Yo, r0 = fs, n0 = gs, s0 = ea, i0 = zh, o0 = on(), a0 = ke(), c0 = an, l0 = Xh, u0 = rf, d0 = af, h0 = uf, f0 = ff, g0 = ps, p0 = Sf, m0 = Rf, b0 = Af, y0 = Lf, w0 = $f;
var E0 = {
  parse: Ff,
  valid: jf,
  clean: Bf,
  inc: Df,
  diff: Hf,
  major: Uf,
  minor: Vf,
  patch: Wf,
  prerelease: zf,
  compare: Jf,
  rcompare: qf,
  compareLoose: Gf,
  compareBuild: Zf,
  sort: Qf,
  rsort: Kf,
  gt: Xf,
  lt: Yf,
  eq: e0,
  neq: t0,
  gte: r0,
  lte: n0,
  cmp: s0,
  coerce: i0,
  Comparator: o0,
  Range: a0,
  satisfies: c0,
  toComparators: l0,
  maxSatisfying: u0,
  minSatisfying: d0,
  minVersion: h0,
  validRange: f0,
  outside: g0,
  gtr: p0,
  ltr: m0,
  intersects: b0,
  simplifyRange: y0,
  subset: w0,
  SemVer: xf,
  re: Tn.re,
  src: Tn.src,
  tokens: Tn.t,
  SEMVER_SPEC_VERSION: _i.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: _i.RELEASE_TYPES,
  compareIdentifiers: vi.compareIdentifiers,
  rcompareIdentifiers: vi.rcompareIdentifiers
};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.satisfiesVersionRange = t.gtRange = t.gtVersion = t.assertIsSemVerRange = t.assertIsSemVerVersion = t.isValidSemVerRange = t.isValidSemVerVersion = t.VersionRangeStruct = t.VersionStruct = void 0;
  const e = E0, r = st, n = re;
  t.VersionStruct = (0, r.refine)((0, r.string)(), "Version", (d) => (0, e.valid)(d) === null ? `Expected SemVer version, got "${d}"` : !0), t.VersionRangeStruct = (0, r.refine)((0, r.string)(), "Version range", (d) => (0, e.validRange)(d) === null ? `Expected SemVer range, got "${d}"` : !0);
  function s(d) {
    return (0, r.is)(d, t.VersionStruct);
  }
  t.isValidSemVerVersion = s;
  function i(d) {
    return (0, r.is)(d, t.VersionRangeStruct);
  }
  t.isValidSemVerRange = i;
  function o(d) {
    (0, n.assertStruct)(d, t.VersionStruct);
  }
  t.assertIsSemVerVersion = o;
  function a(d) {
    (0, n.assertStruct)(d, t.VersionRangeStruct);
  }
  t.assertIsSemVerRange = a;
  function l(d, h) {
    return (0, e.gt)(d, h);
  }
  t.gtVersion = l;
  function c(d, h) {
    return (0, e.gtr)(d, h);
  }
  t.gtRange = c;
  function u(d, h) {
    return (0, e.satisfies)(d, h, {
      includePrerelease: !0
    });
  }
  t.satisfiesVersionRange = u;
})(Go);
(function(t) {
  var e = I && I.__createBinding || (Object.create ? function(n, s, i, o) {
    o === void 0 && (o = i);
    var a = Object.getOwnPropertyDescriptor(s, i);
    (!a || ("get" in a ? !s.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
      return s[i];
    } }), Object.defineProperty(n, o, a);
  } : function(n, s, i, o) {
    o === void 0 && (o = i), n[o] = s[i];
  }), r = I && I.__exportStar || function(n, s) {
    for (var i in n)
      i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && e(s, n, i);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(re, t), r(er, t), r(F, t), r(en, t), r(Pe, t), r(_t, t), r(Ho, t), r(tr, t), r(Uo, t), r(Vo, t), r(vt, t), r(Wo, t), r(Oe, t), r(zo, t), r(Jo, t), r(qo, t), r(Go, t);
})(vo);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.createModuleLogger = t.projectLogger = void 0;
  const e = vo;
  Object.defineProperty(t, "createModuleLogger", { enumerable: !0, get: function() {
    return e.createModuleLogger;
  } }), t.projectLogger = (0, e.createProjectLogger)("eth-block-tracker");
})(_o);
var ra = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Xr, "__esModule", { value: !0 });
Xr.PollingBlockTracker = void 0;
const _0 = ra(ts), v0 = ra(Jl), S0 = Qt, Si = _o, Ci = (0, Si.createModuleLogger)(Si.projectLogger, "polling-block-tracker"), C0 = (0, _0.default)(), k0 = 1e3;
class R0 extends S0.BaseBlockTracker {
  constructor(e = {}) {
    var r;
    if (!e.provider)
      throw new Error("PollingBlockTracker - no provider specified.");
    super(Object.assign(Object.assign({}, e), { blockResetDuration: (r = e.blockResetDuration) !== null && r !== void 0 ? r : e.pollingInterval })), this._provider = e.provider, this._pollingInterval = e.pollingInterval || 20 * k0, this._retryTimeout = e.retryTimeout || this._pollingInterval / 10, this._keepEventLoopActive = e.keepEventLoopActive === void 0 ? !0 : e.keepEventLoopActive, this._setSkipCacheFlag = e.setSkipCacheFlag || !1;
  }
  // trigger block polling
  async checkForLatestBlock() {
    return await this._updateLatestBlock(), await this.getLatestBlock();
  }
  async _start() {
    this._synchronize();
  }
  async _end() {
  }
  async _synchronize() {
    for (var e; this._isRunning; )
      try {
        await this._updateLatestBlock();
        const r = ki(this._pollingInterval, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await r;
      } catch (r) {
        const n = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(e = r.stack) !== null && e !== void 0 ? e : r}`);
        try {
          this.emit("error", n);
        } catch {
          console.error(n);
        }
        const s = ki(this._retryTimeout, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await s;
      }
  }
  async _updateLatestBlock() {
    const e = await this._fetchLatestBlock();
    this._newPotentialLatest(e);
  }
  async _fetchLatestBlock() {
    const e = {
      jsonrpc: "2.0",
      id: C0(),
      method: "eth_blockNumber",
      params: []
    };
    this._setSkipCacheFlag && (e.skipCache = !0), Ci("Making request", e);
    const r = await (0, v0.default)((n) => this._provider.sendAsync(e, n))();
    if (Ci("Got response", r), r.error)
      throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error.message}`);
    return r.result;
  }
}
Xr.PollingBlockTracker = R0;
function ki(t, e) {
  return new Promise((r) => {
    const n = setTimeout(r, t);
    n.unref && e && n.unref();
  });
}
var cn = {}, I0 = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.SubscribeBlockTracker = void 0;
const A0 = I0(ts), N0 = Qt, M0 = (0, A0.default)();
class L0 extends N0.BaseBlockTracker {
  constructor(e = {}) {
    if (!e.provider)
      throw new Error("SubscribeBlockTracker - no provider specified.");
    super(e), this._provider = e.provider, this._subscriptionId = null;
  }
  async checkForLatestBlock() {
    return await this.getLatestBlock();
  }
  async _start() {
    if (this._subscriptionId === void 0 || this._subscriptionId === null)
      try {
        const e = await this._call("eth_blockNumber");
        this._subscriptionId = await this._call("eth_subscribe", "newHeads"), this._provider.on("data", this._handleSubData.bind(this)), this._newPotentialLatest(e);
      } catch (e) {
        this.emit("error", e);
      }
  }
  async _end() {
    if (this._subscriptionId !== null && this._subscriptionId !== void 0)
      try {
        await this._call("eth_unsubscribe", this._subscriptionId), this._subscriptionId = null;
      } catch (e) {
        this.emit("error", e);
      }
  }
  _call(e, ...r) {
    return new Promise((n, s) => {
      this._provider.sendAsync({
        id: M0(),
        method: e,
        params: r,
        jsonrpc: "2.0"
      }, (i, o) => {
        i ? s(i) : n(o.result);
      });
    });
  }
  _handleSubData(e, r) {
    var n;
    r.method === "eth_subscription" && ((n = r.params) === null || n === void 0 ? void 0 : n.subscription) === this._subscriptionId && this._newPotentialLatest(r.params.result.number);
  }
}
cn.SubscribeBlockTracker = L0;
(function(t) {
  var e = I && I.__createBinding || (Object.create ? function(n, s, i, o) {
    o === void 0 && (o = i), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return s[i];
    } });
  } : function(n, s, i, o) {
    o === void 0 && (o = i), n[o] = s[i];
  }), r = I && I.__exportStar || function(n, s) {
    for (var i in n)
      i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && e(s, n, i);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(Xr, t), r(cn, t);
})(Eo);
var ys = {}, ln = {}, nr = {};
Object.defineProperty(nr, "__esModule", { value: !0 });
nr.getUniqueId = void 0;
const na = 4294967295;
let Pn = Math.floor(Math.random() * na);
function T0() {
  return Pn = (Pn + 1) % na, Pn;
}
nr.getUniqueId = T0;
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.createIdRemapMiddleware = void 0;
const P0 = nr;
function O0() {
  return (t, e, r, n) => {
    const s = t.id, i = P0.getUniqueId();
    t.id = i, e.id = i, r((o) => {
      t.id = s, e.id = s, o();
    });
  };
}
ln.createIdRemapMiddleware = O0;
var un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
un.createAsyncMiddleware = void 0;
function $0(t) {
  return async (e, r, n, s) => {
    let i;
    const o = new Promise((u) => {
      i = u;
    });
    let a = null, l = !1;
    const c = async () => {
      l = !0, n((u) => {
        a = u, i();
      }), await o;
    };
    try {
      await t(e, r, c), l ? (await o, a(null)) : s(null);
    } catch (u) {
      a ? a(u) : s(u);
    }
  };
}
un.createAsyncMiddleware = $0;
var dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.createScaffoldMiddleware = void 0;
function x0(t) {
  return (e, r, n, s) => {
    const i = t[e.method];
    return i === void 0 ? n() : typeof i == "function" ? i(e, r, n, s) : (r.result = i, s());
  };
}
dn.createScaffoldMiddleware = x0;
var sr = {}, ws = {};
Object.defineProperty(ws, "__esModule", { value: !0 });
const F0 = Bi;
function Ri(t, e, r) {
  try {
    Reflect.apply(t, e, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function j0(t) {
  const e = t.length, r = new Array(e);
  for (let n = 0; n < e; n += 1)
    r[n] = t[n];
  return r;
}
let B0 = class extends F0.EventEmitter {
  emit(e, ...r) {
    let n = e === "error";
    const s = this._events;
    if (s !== void 0)
      n = n && s.error === void 0;
    else if (!n)
      return !1;
    if (n) {
      let o;
      if (r.length > 0 && ([o] = r), o instanceof Error)
        throw o;
      const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
      throw a.context = o, a;
    }
    const i = s[e];
    if (i === void 0)
      return !1;
    if (typeof i == "function")
      Ri(i, this, r);
    else {
      const o = i.length, a = j0(i);
      for (let l = 0; l < o; l += 1)
        Ri(a[l], this, r);
    }
    return !0;
  }
};
ws.default = B0;
var sa = {}, Ue = {}, D0 = Bt;
Bt.default = Bt;
Bt.stable = aa;
Bt.stableStringify = aa;
var vr = "[...]", ia = "[Circular]", tt = [], Xe = [];
function oa() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  };
}
function Bt(t, e, r, n) {
  typeof n > "u" && (n = oa()), Un(t, "", 0, [], void 0, 0, n);
  var s;
  try {
    Xe.length === 0 ? s = JSON.stringify(t, e, r) : s = JSON.stringify(t, ca(e), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; tt.length !== 0; ) {
      var i = tt.pop();
      i.length === 4 ? Object.defineProperty(i[0], i[1], i[3]) : i[0][i[1]] = i[2];
    }
  }
  return s;
}
function mt(t, e, r, n) {
  var s = Object.getOwnPropertyDescriptor(n, r);
  s.get !== void 0 ? s.configurable ? (Object.defineProperty(n, r, { value: t }), tt.push([n, r, e, s])) : Xe.push([e, r, t]) : (n[r] = t, tt.push([n, r, e]));
}
function Un(t, e, r, n, s, i, o) {
  i += 1;
  var a;
  if (typeof t == "object" && t !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === t) {
        mt(ia, t, e, s);
        return;
      }
    if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      mt(vr, t, e, s);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      mt(vr, t, e, s);
      return;
    }
    if (n.push(t), Array.isArray(t))
      for (a = 0; a < t.length; a++)
        Un(t[a], a, a, n, t, i, o);
    else {
      var l = Object.keys(t);
      for (a = 0; a < l.length; a++) {
        var c = l[a];
        Un(t[c], c, a, n, t, i, o);
      }
    }
    n.pop();
  }
}
function H0(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function aa(t, e, r, n) {
  typeof n > "u" && (n = oa());
  var s = Vn(t, "", 0, [], void 0, 0, n) || t, i;
  try {
    Xe.length === 0 ? i = JSON.stringify(s, e, r) : i = JSON.stringify(s, ca(e), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; tt.length !== 0; ) {
      var o = tt.pop();
      o.length === 4 ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2];
    }
  }
  return i;
}
function Vn(t, e, r, n, s, i, o) {
  i += 1;
  var a;
  if (typeof t == "object" && t !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === t) {
        mt(ia, t, e, s);
        return;
      }
    try {
      if (typeof t.toJSON == "function")
        return;
    } catch {
      return;
    }
    if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      mt(vr, t, e, s);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      mt(vr, t, e, s);
      return;
    }
    if (n.push(t), Array.isArray(t))
      for (a = 0; a < t.length; a++)
        Vn(t[a], a, a, n, t, i, o);
    else {
      var l = {}, c = Object.keys(t).sort(H0);
      for (a = 0; a < c.length; a++) {
        var u = c[a];
        Vn(t[u], u, a, n, t, i, o), l[u] = t[u];
      }
      if (typeof s < "u")
        tt.push([s, e, t]), s[e] = l;
      else
        return l;
    }
    n.pop();
  }
}
function ca(t) {
  return t = typeof t < "u" ? t : function(e, r) {
    return r;
  }, function(e, r) {
    if (Xe.length > 0)
      for (var n = 0; n < Xe.length; n++) {
        var s = Xe[n];
        if (s[1] === e && s[0] === r) {
          r = s[2], Xe.splice(n, 1);
          break;
        }
      }
    return t.call(this, e, r);
  };
}
Object.defineProperty(Ue, "__esModule", { value: !0 });
Ue.EthereumProviderError = Ue.EthereumRpcError = void 0;
const U0 = D0;
class la extends Error {
  constructor(e, r, n) {
    if (!Number.isInteger(e))
      throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), this.code = e, n !== void 0 && (this.data = n);
  }
  /**
   * Returns a plain object with all public class properties.
   */
  serialize() {
    const e = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (e.data = this.data), this.stack && (e.stack = this.stack), e;
  }
  /**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   */
  toString() {
    return U0.default(this.serialize(), z0, 2);
  }
}
Ue.EthereumRpcError = la;
class V0 extends la {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(e, r, n) {
    if (!W0(e))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(e, r, n);
  }
}
Ue.EthereumProviderError = V0;
function W0(t) {
  return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}
function z0(t, e) {
  if (e !== "[Circular]")
    return e;
}
var Es = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.errorValues = Ve.errorCodes = void 0;
Ve.errorCodes = {
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
    chainDisconnected: 4901
  }
};
Ve.errorValues = {
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
  }
};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const e = Ve, r = Ue, n = e.errorCodes.rpc.internal, s = "Unspecified error message. This is a bug, please report it.", i = {
    code: n,
    message: o(n)
  };
  t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function o(h, f = s) {
    if (Number.isInteger(h)) {
      const g = h.toString();
      if (d(e.errorValues, g))
        return e.errorValues[g].message;
      if (c(h))
        return t.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return f;
  }
  t.getMessageFromCode = o;
  function a(h) {
    if (!Number.isInteger(h))
      return !1;
    const f = h.toString();
    return !!(e.errorValues[f] || c(h));
  }
  t.isValidCode = a;
  function l(h, { fallbackError: f = i, shouldIncludeStack: g = !1 } = {}) {
    var b, y;
    if (!f || !Number.isInteger(f.code) || typeof f.message != "string")
      throw new Error("Must provide fallback error with integer number code and string message.");
    if (h instanceof r.EthereumRpcError)
      return h.serialize();
    const v = {};
    if (h && typeof h == "object" && !Array.isArray(h) && d(h, "code") && a(h.code)) {
      const p = h;
      v.code = p.code, p.message && typeof p.message == "string" ? (v.message = p.message, d(p, "data") && (v.data = p.data)) : (v.message = o(v.code), v.data = { originalError: u(h) });
    } else {
      v.code = f.code;
      const p = (b = h) === null || b === void 0 ? void 0 : b.message;
      v.message = p && typeof p == "string" ? p : f.message, v.data = { originalError: u(h) };
    }
    const S = (y = h) === null || y === void 0 ? void 0 : y.stack;
    return g && h && S && typeof S == "string" && (v.stack = S), v;
  }
  t.serializeError = l;
  function c(h) {
    return h >= -32099 && h <= -32e3;
  }
  function u(h) {
    return h && typeof h == "object" && !Array.isArray(h) ? Object.assign({}, h) : h;
  }
  function d(h, f) {
    return Object.prototype.hasOwnProperty.call(h, f);
  }
})(Es);
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.ethErrors = void 0;
const _s = Ue, ua = Es, se = Ve;
hn.ethErrors = {
  rpc: {
    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     */
    parse: (t) => be(se.errorCodes.rpc.parse, t),
    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     */
    invalidRequest: (t) => be(se.errorCodes.rpc.invalidRequest, t),
    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     */
    invalidParams: (t) => be(se.errorCodes.rpc.invalidParams, t),
    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     */
    methodNotFound: (t) => be(se.errorCodes.rpc.methodNotFound, t),
    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     */
    internal: (t) => be(se.errorCodes.rpc.internal, t),
    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP-1474.
     */
    server: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: e } = t;
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return be(e, t);
    },
    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     */
    invalidInput: (t) => be(se.errorCodes.rpc.invalidInput, t),
    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     */
    resourceNotFound: (t) => be(se.errorCodes.rpc.resourceNotFound, t),
    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     */
    resourceUnavailable: (t) => be(se.errorCodes.rpc.resourceUnavailable, t),
    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     */
    transactionRejected: (t) => be(se.errorCodes.rpc.transactionRejected, t),
    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     */
    methodNotSupported: (t) => be(se.errorCodes.rpc.methodNotSupported, t),
    /**
     * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
     */
    limitExceeded: (t) => be(se.errorCodes.rpc.limitExceeded, t)
  },
  provider: {
    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     */
    userRejectedRequest: (t) => Ot(se.errorCodes.provider.userRejectedRequest, t),
    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     */
    unauthorized: (t) => Ot(se.errorCodes.provider.unauthorized, t),
    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     */
    unsupportedMethod: (t) => Ot(se.errorCodes.provider.unsupportedMethod, t),
    /**
     * Get an Ethereum Provider Not Connected (4900) error.
     */
    disconnected: (t) => Ot(se.errorCodes.provider.disconnected, t),
    /**
     * Get an Ethereum Provider Chain Not Connected (4901) error.
     */
    chainDisconnected: (t) => Ot(se.errorCodes.provider.chainDisconnected, t),
    /**
     * Get a custom Ethereum Provider error.
     */
    custom: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: e, message: r, data: n } = t;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new _s.EthereumProviderError(e, r, n);
    }
  }
};
function be(t, e) {
  const [r, n] = da(e);
  return new _s.EthereumRpcError(t, r || ua.getMessageFromCode(t), n);
}
function Ot(t, e) {
  const [r, n] = da(e);
  return new _s.EthereumProviderError(t, r || ua.getMessageFromCode(t), n);
}
function da(t) {
  if (t) {
    if (typeof t == "string")
      return [t];
    if (typeof t == "object" && !Array.isArray(t)) {
      const { message: e, data: r } = t;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e || void 0, r];
    }
  }
  return [];
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
  const e = Ue;
  Object.defineProperty(t, "EthereumRpcError", { enumerable: !0, get: function() {
    return e.EthereumRpcError;
  } }), Object.defineProperty(t, "EthereumProviderError", { enumerable: !0, get: function() {
    return e.EthereumProviderError;
  } });
  const r = Es;
  Object.defineProperty(t, "serializeError", { enumerable: !0, get: function() {
    return r.serializeError;
  } }), Object.defineProperty(t, "getMessageFromCode", { enumerable: !0, get: function() {
    return r.getMessageFromCode;
  } });
  const n = hn;
  Object.defineProperty(t, "ethErrors", { enumerable: !0, get: function() {
    return n.ethErrors;
  } });
  const s = Ve;
  Object.defineProperty(t, "errorCodes", { enumerable: !0, get: function() {
    return s.errorCodes;
  } });
})(sa);
var J0 = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.JsonRpcEngine = void 0;
const q0 = J0(ws), ye = sa;
class $e extends q0.default {
  constructor() {
    super(), this._middleware = [];
  }
  /**
   * Add a middleware function to the engine's middleware stack.
   *
   * @param middleware - The middleware function to add.
   */
  push(e) {
    this._middleware.push(e);
  }
  handle(e, r) {
    if (r && typeof r != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(e) ? r ? this._handleBatch(e, r) : this._handleBatch(e) : r ? this._handle(e, r) : this._promiseHandle(e);
  }
  /**
   * Returns this engine as a middleware function that can be pushed to other
   * engines.
   *
   * @returns This engine as a middleware function.
   */
  asMiddleware() {
    return async (e, r, n, s) => {
      try {
        const [i, o, a] = await $e._runAllMiddleware(e, r, this._middleware);
        return o ? (await $e._runReturnHandlers(a), s(i)) : n(async (l) => {
          try {
            await $e._runReturnHandlers(a);
          } catch (c) {
            return l(c);
          }
          return l();
        });
      } catch (i) {
        return s(i);
      }
    };
  }
  async _handleBatch(e, r) {
    try {
      const n = await Promise.all(
        // 1. Begin executing each request in the order received
        e.map(this._promiseHandle.bind(this))
      );
      return r ? r(null, n) : n;
    } catch (n) {
      if (r)
        return r(n);
      throw n;
    }
  }
  /**
   * A promise-wrapped _handle.
   */
  _promiseHandle(e) {
    return new Promise((r) => {
      this._handle(e, (n, s) => {
        r(s);
      });
    });
  }
  /**
   * Ensures that the request object is valid, processes it, and passes any
   * error and the response object to the given callback.
   *
   * Does not reject.
   */
  async _handle(e, r) {
    if (!e || Array.isArray(e) || typeof e != "object") {
      const o = new ye.EthereumRpcError(ye.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof e}`, { request: e });
      return r(o, { id: void 0, jsonrpc: "2.0", error: o });
    }
    if (typeof e.method != "string") {
      const o = new ye.EthereumRpcError(ye.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof e.method}`, { request: e });
      return r(o, { id: e.id, jsonrpc: "2.0", error: o });
    }
    const n = Object.assign({}, e), s = {
      id: n.id,
      jsonrpc: n.jsonrpc
    };
    let i = null;
    try {
      await this._processRequest(n, s);
    } catch (o) {
      i = o;
    }
    return i && (delete s.result, s.error || (s.error = ye.serializeError(i))), r(i, s);
  }
  /**
   * For the given request and response, runs all middleware and their return
   * handlers, if any, and ensures that internal request processing semantics
   * are satisfied.
   */
  async _processRequest(e, r) {
    const [n, s, i] = await $e._runAllMiddleware(e, r, this._middleware);
    if ($e._checkForCompletion(e, r, s), await $e._runReturnHandlers(i), n)
      throw n;
  }
  /**
   * Serially executes the given stack of middleware.
   *
   * @returns An array of any error encountered during middleware execution,
   * a boolean indicating whether the request was completed, and an array of
   * middleware-defined return handlers.
   */
  static async _runAllMiddleware(e, r, n) {
    const s = [];
    let i = null, o = !1;
    for (const a of n)
      if ([i, o] = await $e._runMiddleware(e, r, a, s), o)
        break;
    return [i, o, s.reverse()];
  }
  /**
   * Runs an individual middleware.
   *
   * @returns An array of any error encountered during middleware exection,
   * and a boolean indicating whether the request should end.
   */
  static _runMiddleware(e, r, n, s) {
    return new Promise((i) => {
      const o = (l) => {
        const c = l || r.error;
        c && (r.error = ye.serializeError(c)), i([c, !0]);
      }, a = (l) => {
        r.error ? o(r.error) : (l && (typeof l != "function" && o(new ye.EthereumRpcError(ye.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof l}" for request:
${On(e)}`, { request: e })), s.push(l)), i([null, !1]));
      };
      try {
        n(e, r, a, o);
      } catch (l) {
        o(l);
      }
    });
  }
  /**
   * Serially executes array of return handlers. The request and response are
   * assumed to be in their scope.
   */
  static async _runReturnHandlers(e) {
    for (const r of e)
      await new Promise((n, s) => {
        r((i) => i ? s(i) : n());
      });
  }
  /**
   * Throws an error if the response has neither a result nor an error, or if
   * the "isComplete" flag is falsy.
   */
  static _checkForCompletion(e, r, n) {
    if (!("result" in r) && !("error" in r))
      throw new ye.EthereumRpcError(ye.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${On(e)}`, { request: e });
    if (!n)
      throw new ye.EthereumRpcError(ye.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${On(e)}`, { request: e });
  }
}
sr.JsonRpcEngine = $e;
function On(t) {
  return JSON.stringify(t, null, 2);
}
var fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.mergeMiddleware = void 0;
const G0 = sr;
function Z0(t) {
  const e = new G0.JsonRpcEngine();
  return t.forEach((r) => e.push(r)), e.asMiddleware();
}
fn.mergeMiddleware = Z0;
(function(t) {
  var e = I && I.__createBinding || (Object.create ? function(n, s, i, o) {
    o === void 0 && (o = i), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return s[i];
    } });
  } : function(n, s, i, o) {
    o === void 0 && (o = i), n[o] = s[i];
  }), r = I && I.__exportStar || function(n, s) {
    for (var i in n)
      i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && e(s, n, i);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(ln, t), r(un, t), r(dn, t), r(nr, t), r(sr, t), r(fn, t);
})(ys);
var ha = {}, vs = {}, Wn = function(t, e) {
  return Wn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n)
      Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s]);
  }, Wn(t, e);
};
function fa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Wn(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Sr = function() {
  return Sr = Object.assign || function(e) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Sr.apply(this, arguments);
};
function ga(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function pa(t, e, r, n) {
  var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(e, r, i) : o(e, r)) || i);
  return s > 3 && i && Object.defineProperty(e, r, i), i;
}
function ma(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function Q0(t, e, r, n, s, i) {
  function o(v) {
    if (v !== void 0 && typeof v != "function")
      throw new TypeError("Function expected");
    return v;
  }
  for (var a = n.kind, l = a === "getter" ? "get" : a === "setter" ? "set" : "value", c = !e && t ? n.static ? t : t.prototype : null, u = e || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}), d, h = !1, f = r.length - 1; f >= 0; f--) {
    var g = {};
    for (var b in n)
      g[b] = b === "access" ? {} : n[b];
    for (var b in n.access)
      g.access[b] = n.access[b];
    g.addInitializer = function(v) {
      if (h)
        throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(o(v || null));
    };
    var y = (0, r[f])(a === "accessor" ? { get: u.get, set: u.set } : u[l], g);
    if (a === "accessor") {
      if (y === void 0)
        continue;
      if (y === null || typeof y != "object")
        throw new TypeError("Object expected");
      (d = o(y.get)) && (u.get = d), (d = o(y.set)) && (u.set = d), (d = o(y.init)) && s.unshift(d);
    } else
      (d = o(y)) && (a === "field" ? s.unshift(d) : u[l] = d);
  }
  c && Object.defineProperty(c, n.name, u), h = !0;
}
function K0(t, e, r) {
  for (var n = arguments.length > 2, s = 0; s < e.length; s++)
    r = n ? e[s].call(t, r) : e[s].call(t);
  return n ? r : void 0;
}
function X0(t) {
  return typeof t == "symbol" ? t : "".concat(t);
}
function Y0(t, e, r) {
  return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", { configurable: !0, value: r ? "".concat(r, " ", e) : e });
}
function ba(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function ya(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (d) {
        o(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        o(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : s(u.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function wa(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, s, i, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = a(0), o.throw = a(1), o.return = a(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, s && (i = c[0] & 2 ? s.return : c[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, c[1])).done)
          return i;
        switch (s = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, s = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = c;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(c);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (u) {
        c = [6, u], s = 0;
      } finally {
        n = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
var gn = Object.create ? function(t, e, r, n) {
  n === void 0 && (n = r);
  var s = Object.getOwnPropertyDescriptor(e, r);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[r];
  } }), Object.defineProperty(t, n, s);
} : function(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
};
function Ea(t, e) {
  for (var r in t)
    r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && gn(e, t, r);
}
function Cr(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ss(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}
function _a() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Ss(arguments[e]));
  return t;
}
function va() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var i = arguments[e], o = 0, a = i.length; o < a; o++, s++)
      n[s] = i[o];
  return n;
}
function Sa(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function St(t) {
  return this instanceof St ? (this.v = t, this) : new St(t);
}
function Ca(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), s, i = [];
  return s = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(f) {
    return function(g) {
      return Promise.resolve(g).then(f, d);
    };
  }
  function a(f, g) {
    n[f] && (s[f] = function(b) {
      return new Promise(function(y, v) {
        i.push([f, b, y, v]) > 1 || l(f, b);
      });
    }, g && (s[f] = g(s[f])));
  }
  function l(f, g) {
    try {
      c(n[f](g));
    } catch (b) {
      h(i[0][3], b);
    }
  }
  function c(f) {
    f.value instanceof St ? Promise.resolve(f.value.v).then(u, d) : h(i[0][2], f);
  }
  function u(f) {
    l("next", f);
  }
  function d(f) {
    l("throw", f);
  }
  function h(f, g) {
    f(g), i.shift(), i.length && l(i[0][0], i[0][1]);
  }
}
function ka(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(s, i) {
    e[s] = t[s] ? function(o) {
      return (r = !r) ? { value: St(t[s](o)), done: !1 } : i ? i(o) : o;
    } : i;
  }
}
function Ra(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Cr == "function" ? Cr(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(i) {
    r[i] = t[i] && function(o) {
      return new Promise(function(a, l) {
        o = t[i](o), s(a, l, o.done, o.value);
      });
    };
  }
  function s(i, o, a, l) {
    Promise.resolve(l).then(function(c) {
      i({ value: c, done: a });
    }, o);
  }
}
function Ia(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var e1 = Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
};
function Aa(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && gn(e, t, r);
  return e1(e, t), e;
}
function Na(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ma(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}
function La(t, e, r, n, s) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !s : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? s.call(t, r) : s ? s.value = r : e.set(t, r), r;
}
function Ta(t, e) {
  if (e === null || typeof e != "object" && typeof e != "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof t == "function" ? e === t : t.has(e);
}
function Pa(t, e, r) {
  if (e != null) {
    if (typeof e != "object" && typeof e != "function")
      throw new TypeError("Object expected.");
    var n, s;
    if (r) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      n = e[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      n = e[Symbol.dispose], r && (s = n);
    }
    if (typeof n != "function")
      throw new TypeError("Object not disposable.");
    s && (n = function() {
      try {
        s.call(this);
      } catch (i) {
        return Promise.reject(i);
      }
    }), t.stack.push({ value: e, dispose: n, async: r });
  } else
    r && t.stack.push({ async: !0 });
  return e;
}
var t1 = typeof SuppressedError == "function" ? SuppressedError : function(t, e, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = t, n.suppressed = e, n;
};
function Oa(t) {
  function e(i) {
    t.error = t.hasError ? new t1(i, t.error, "An error was suppressed during disposal.") : i, t.hasError = !0;
  }
  var r, n = 0;
  function s() {
    for (; r = t.stack.pop(); )
      try {
        if (!r.async && n === 1)
          return n = 0, t.stack.push(r), Promise.resolve().then(s);
        if (r.dispose) {
          var i = r.dispose.call(r.value);
          if (r.async)
            return n |= 2, Promise.resolve(i).then(s, function(o) {
              return e(o), s();
            });
        } else
          n |= 1;
      } catch (o) {
        e(o);
      }
    if (n === 1)
      return t.hasError ? Promise.reject(t.error) : Promise.resolve();
    if (t.hasError)
      throw t.error;
  }
  return s();
}
const r1 = {
  __extends: fa,
  __assign: Sr,
  __rest: ga,
  __decorate: pa,
  __param: ma,
  __metadata: ba,
  __awaiter: ya,
  __generator: wa,
  __createBinding: gn,
  __exportStar: Ea,
  __values: Cr,
  __read: Ss,
  __spread: _a,
  __spreadArrays: va,
  __spreadArray: Sa,
  __await: St,
  __asyncGenerator: Ca,
  __asyncDelegator: ka,
  __asyncValues: Ra,
  __makeTemplateObject: Ia,
  __importStar: Aa,
  __importDefault: Na,
  __classPrivateFieldGet: Ma,
  __classPrivateFieldSet: La,
  __classPrivateFieldIn: Ta,
  __addDisposableResource: Pa,
  __disposeResources: Oa
}, n1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: Pa,
  get __assign() {
    return Sr;
  },
  __asyncDelegator: ka,
  __asyncGenerator: Ca,
  __asyncValues: Ra,
  __await: St,
  __awaiter: ya,
  __classPrivateFieldGet: Ma,
  __classPrivateFieldIn: Ta,
  __classPrivateFieldSet: La,
  __createBinding: gn,
  __decorate: pa,
  __disposeResources: Oa,
  __esDecorate: Q0,
  __exportStar: Ea,
  __extends: fa,
  __generator: wa,
  __importDefault: Na,
  __importStar: Aa,
  __makeTemplateObject: Ia,
  __metadata: ba,
  __param: ma,
  __propKey: X0,
  __read: Ss,
  __rest: ga,
  __runInitializers: K0,
  __setFunctionName: Y0,
  __spread: _a,
  __spreadArray: Sa,
  __spreadArrays: va,
  __values: Cr,
  default: r1
}, Symbol.toStringTag, { value: "Module" })), Cs = /* @__PURE__ */ Di(n1);
var pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
var Ii = Cs, s1 = (
  /** @class */
  function() {
    function t(e) {
      if (this._maxConcurrency = e, this._queue = [], e <= 0)
        throw new Error("semaphore must be initialized to a positive value");
      this._value = e;
    }
    return t.prototype.acquire = function() {
      var e = this, r = this.isLocked(), n = new Promise(function(s) {
        return e._queue.push(s);
      });
      return r || this._dispatch(), n;
    }, t.prototype.runExclusive = function(e) {
      return Ii.__awaiter(this, void 0, void 0, function() {
        var r, n, s;
        return Ii.__generator(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.acquire()];
            case 1:
              r = i.sent(), n = r[0], s = r[1], i.label = 2;
            case 2:
              return i.trys.push([2, , 4, 5]), [4, e(n)];
            case 3:
              return [2, i.sent()];
            case 4:
              return s(), [
                7
                /*endfinally*/
              ];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.isLocked = function() {
      return this._value <= 0;
    }, t.prototype.release = function() {
      if (this._maxConcurrency > 1)
        throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
      if (this._currentReleaser) {
        var e = this._currentReleaser;
        this._currentReleaser = void 0, e();
      }
    }, t.prototype._dispatch = function() {
      var e = this, r = this._queue.shift();
      if (r) {
        var n = !1;
        this._currentReleaser = function() {
          n || (n = !0, e._value++, e._dispatch());
        }, r([this._value--, this._currentReleaser]);
      }
    }, t;
  }()
);
pn.default = s1;
Object.defineProperty(vs, "__esModule", { value: !0 });
var Ai = Cs, i1 = pn, o1 = (
  /** @class */
  function() {
    function t() {
      this._semaphore = new i1.default(1);
    }
    return t.prototype.acquire = function() {
      return Ai.__awaiter(this, void 0, void 0, function() {
        var e, r;
        return Ai.__generator(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this._semaphore.acquire()];
            case 1:
              return e = n.sent(), r = e[1], [2, r];
          }
        });
      });
    }, t.prototype.runExclusive = function(e) {
      return this._semaphore.runExclusive(function() {
        return e();
      });
    }, t.prototype.isLocked = function() {
      return this._semaphore.isLocked();
    }, t.prototype.release = function() {
      this._semaphore.release();
    }, t;
  }()
);
vs.default = o1;
var mn = {};
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.withTimeout = void 0;
var yr = Cs;
function a1(t, e, r) {
  var n = this;
  return r === void 0 && (r = new Error("timeout")), {
    acquire: function() {
      return new Promise(function(s, i) {
        return yr.__awaiter(n, void 0, void 0, function() {
          var o, a, l;
          return yr.__generator(this, function(c) {
            switch (c.label) {
              case 0:
                return o = !1, setTimeout(function() {
                  o = !0, i(r);
                }, e), [4, t.acquire()];
              case 1:
                return a = c.sent(), o ? (l = Array.isArray(a) ? a[1] : a, l()) : s(a), [
                  2
                  /*return*/
                ];
            }
          });
        });
      });
    },
    runExclusive: function(s) {
      return yr.__awaiter(this, void 0, void 0, function() {
        var i, o;
        return yr.__generator(this, function(a) {
          switch (a.label) {
            case 0:
              i = function() {
              }, a.label = 1;
            case 1:
              return a.trys.push([1, , 7, 8]), [4, this.acquire()];
            case 2:
              return o = a.sent(), Array.isArray(o) ? (i = o[1], [4, s(o[0])]) : [3, 4];
            case 3:
              return [2, a.sent()];
            case 4:
              return i = o, [4, s()];
            case 5:
              return [2, a.sent()];
            case 6:
              return [3, 8];
            case 7:
              return i(), [
                7
                /*endfinally*/
              ];
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    },
    release: function() {
      t.release();
    },
    isLocked: function() {
      return t.isLocked();
    }
  };
}
mn.withTimeout = a1;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.withTimeout = t.Semaphore = t.Mutex = void 0;
  var e = vs;
  Object.defineProperty(t, "Mutex", { enumerable: !0, get: function() {
    return e.default;
  } });
  var r = pn;
  Object.defineProperty(t, "Semaphore", { enumerable: !0, get: function() {
    return r.default;
  } });
  var n = mn;
  Object.defineProperty(t, "withTimeout", { enumerable: !0, get: function() {
    return n.withTimeout;
  } });
})(ha);
var c1 = u1, l1 = Object.prototype.hasOwnProperty;
function u1() {
  for (var t = {}, e = 0; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      l1.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
const d1 = c1, h1 = ts();
var f1 = N;
function N(t) {
  const e = this;
  e.currentProvider = t;
}
N.prototype.getBalance = ir(2, "eth_getBalance");
N.prototype.getCode = ir(2, "eth_getCode");
N.prototype.getTransactionCount = ir(2, "eth_getTransactionCount");
N.prototype.getStorageAt = ir(3, "eth_getStorageAt");
N.prototype.call = ir(2, "eth_call");
N.prototype.protocolVersion = P("eth_protocolVersion");
N.prototype.syncing = P("eth_syncing");
N.prototype.coinbase = P("eth_coinbase");
N.prototype.mining = P("eth_mining");
N.prototype.hashrate = P("eth_hashrate");
N.prototype.gasPrice = P("eth_gasPrice");
N.prototype.accounts = P("eth_accounts");
N.prototype.blockNumber = P("eth_blockNumber");
N.prototype.getBlockTransactionCountByHash = P("eth_getBlockTransactionCountByHash");
N.prototype.getBlockTransactionCountByNumber = P("eth_getBlockTransactionCountByNumber");
N.prototype.getUncleCountByBlockHash = P("eth_getUncleCountByBlockHash");
N.prototype.getUncleCountByBlockNumber = P("eth_getUncleCountByBlockNumber");
N.prototype.sign = P("eth_sign");
N.prototype.sendTransaction = P("eth_sendTransaction");
N.prototype.sendRawTransaction = P("eth_sendRawTransaction");
N.prototype.estimateGas = P("eth_estimateGas");
N.prototype.getBlockByHash = P("eth_getBlockByHash");
N.prototype.getBlockByNumber = P("eth_getBlockByNumber");
N.prototype.getTransactionByHash = P("eth_getTransactionByHash");
N.prototype.getTransactionByBlockHashAndIndex = P("eth_getTransactionByBlockHashAndIndex");
N.prototype.getTransactionByBlockNumberAndIndex = P("eth_getTransactionByBlockNumberAndIndex");
N.prototype.getTransactionReceipt = P("eth_getTransactionReceipt");
N.prototype.getUncleByBlockHashAndIndex = P("eth_getUncleByBlockHashAndIndex");
N.prototype.getUncleByBlockNumberAndIndex = P("eth_getUncleByBlockNumberAndIndex");
N.prototype.getCompilers = P("eth_getCompilers");
N.prototype.compileLLL = P("eth_compileLLL");
N.prototype.compileSolidity = P("eth_compileSolidity");
N.prototype.compileSerpent = P("eth_compileSerpent");
N.prototype.newFilter = P("eth_newFilter");
N.prototype.newBlockFilter = P("eth_newBlockFilter");
N.prototype.newPendingTransactionFilter = P("eth_newPendingTransactionFilter");
N.prototype.uninstallFilter = P("eth_uninstallFilter");
N.prototype.getFilterChanges = P("eth_getFilterChanges");
N.prototype.getFilterLogs = P("eth_getFilterLogs");
N.prototype.getLogs = P("eth_getLogs");
N.prototype.getWork = P("eth_getWork");
N.prototype.submitWork = P("eth_submitWork");
N.prototype.submitHashrate = P("eth_submitHashrate");
N.prototype.sendAsync = function(t, e) {
  this.currentProvider.sendAsync(g1(t), function(n, s) {
    if (!n && s.error && (n = new Error("EthQuery - RPC Error - " + s.error.message)), n)
      return e(n);
    e(null, s.result);
  });
};
function P(t) {
  return function() {
    const e = this;
    var r = [].slice.call(arguments), n = r.pop();
    e.sendAsync({
      method: t,
      params: r
    }, n);
  };
}
function ir(t, e) {
  return function() {
    const r = this;
    var n = [].slice.call(arguments), s = n.pop();
    n.length < t && n.push("latest"), r.sendAsync({
      method: e,
      params: n
    }, s);
  };
}
function g1(t) {
  return d1({
    // defaults
    id: h1(),
    jsonrpc: "2.0",
    params: []
    // user-specified
  }, t);
}
const Ni = (t, e, r, n) => function(...s) {
  const i = e.promiseModule;
  return new i((o, a) => {
    e.multiArgs ? s.push((...c) => {
      e.errorFirst ? c[0] ? a(c) : (c.shift(), o(c)) : o(c);
    }) : e.errorFirst ? s.push((c, u) => {
      c ? a(c) : o(u);
    }) : s.push(o), Reflect.apply(t, this === r ? n : this, s);
  });
}, Mi = /* @__PURE__ */ new WeakMap();
var p1 = (t, e) => {
  e = {
    exclude: [/.+(?:Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise,
    ...e
  };
  const r = typeof t;
  if (!(t !== null && (r === "object" || r === "function")))
    throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${t === null ? "null" : r}\``);
  const n = (o, a) => {
    let l = Mi.get(o);
    if (l || (l = {}, Mi.set(o, l)), a in l)
      return l[a];
    const c = (g) => typeof g == "string" || typeof a == "symbol" ? a === g : g.test(a), u = Reflect.getOwnPropertyDescriptor(o, a), d = u === void 0 || u.writable || u.configurable, f = (e.include ? e.include.some(c) : !e.exclude.some(c)) && d;
    return l[a] = f, f;
  }, s = /* @__PURE__ */ new WeakMap(), i = new Proxy(t, {
    apply(o, a, l) {
      const c = s.get(o);
      if (c)
        return Reflect.apply(c, a, l);
      const u = e.excludeMain ? o : Ni(o, e, i, o);
      return s.set(o, u), Reflect.apply(u, a, l);
    },
    get(o, a) {
      const l = o[a];
      if (!n(o, a) || l === Function.prototype[a])
        return l;
      const c = s.get(l);
      if (c)
        return c;
      if (typeof l == "function") {
        const u = Ni(l, e, i, o);
        return s.set(l, u), u;
      }
      return l;
    }
  });
  return i;
};
const m1 = Kt.default;
let b1 = class extends m1 {
  constructor() {
    super(), this.updates = [];
  }
  async initialize() {
  }
  async update() {
    throw new Error("BaseFilter - no update method specified");
  }
  addResults(e) {
    this.updates = this.updates.concat(e), e.forEach((r) => this.emit("update", r));
  }
  addInitialResults(e) {
  }
  getChangesAndClear() {
    const e = this.updates;
    return this.updates = [], e;
  }
};
var ks = b1;
const y1 = ks;
let w1 = class extends y1 {
  constructor() {
    super(), this.allResults = [];
  }
  async update() {
    throw new Error("BaseFilterWithHistory - no update method specified");
  }
  addResults(e) {
    this.allResults = this.allResults.concat(e), super.addResults(e);
  }
  addInitialResults(e) {
    this.allResults = this.allResults.concat(e), super.addInitialResults(e);
  }
  getAllResults() {
    return this.allResults;
  }
};
var E1 = w1, or = {
  minBlockRef: _1,
  maxBlockRef: v1,
  sortBlockRefs: Rs,
  bnToHex: S1,
  blockRefIsNumber: C1,
  hexToInt: kr,
  incrementHexInt: k1,
  intToHex: $a,
  unsafeRandomBytes: R1
};
function _1(...t) {
  return Rs(t)[0];
}
function v1(...t) {
  const e = Rs(t);
  return e[e.length - 1];
}
function Rs(t) {
  return t.sort((e, r) => e === "latest" || r === "earliest" ? 1 : r === "latest" || e === "earliest" ? -1 : kr(e) - kr(r));
}
function S1(t) {
  return "0x" + t.toString(16);
}
function C1(t) {
  return t && !["earliest", "latest", "pending"].includes(t);
}
function kr(t) {
  return t == null ? t : Number.parseInt(t, 16);
}
function k1(t) {
  if (t == null)
    return t;
  const e = kr(t);
  return $a(e + 1);
}
function $a(t) {
  if (t == null)
    return t;
  let e = t.toString(16);
  return e.length % 2 && (e = "0" + e), "0x" + e;
}
function R1(t) {
  let e = "0x";
  for (let r = 0; r < t; r++)
    e += Li(), e += Li();
  return e;
}
function Li() {
  return Math.floor(Math.random() * 16).toString(16);
}
const I1 = f1, A1 = p1, N1 = E1, { bnToHex: Ug, hexToInt: wr, incrementHexInt: M1, minBlockRef: L1, blockRefIsNumber: T1 } = or;
let P1 = class extends N1 {
  constructor({ provider: e, params: r }) {
    super(), this.type = "log", this.ethQuery = new I1(e), this.params = Object.assign({
      fromBlock: "latest",
      toBlock: "latest",
      address: void 0,
      topics: []
    }, r), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map((n) => n.toLowerCase()));
  }
  async initialize({ currentBlock: e }) {
    let r = this.params.fromBlock;
    ["latest", "pending"].includes(r) && (r = e), r === "earliest" && (r = "0x0"), this.params.fromBlock = r;
    const n = L1(this.params.toBlock, e), s = Object.assign({}, this.params, { toBlock: n }), i = await this._fetchLogs(s);
    this.addInitialResults(i);
  }
  async update({ oldBlock: e, newBlock: r }) {
    const n = r;
    let s;
    e ? s = M1(e) : s = r;
    const i = Object.assign({}, this.params, { fromBlock: s, toBlock: n }), a = (await this._fetchLogs(i)).filter((l) => this.matchLog(l));
    this.addResults(a);
  }
  async _fetchLogs(e) {
    return await A1((n) => this.ethQuery.getLogs(e, n))();
  }
  matchLog(e) {
    if (wr(this.params.fromBlock) >= wr(e.blockNumber) || T1(this.params.toBlock) && wr(this.params.toBlock) <= wr(e.blockNumber))
      return !1;
    const r = e.address && e.address.toLowerCase();
    return this.params.address && r && !this.params.address.includes(r) ? !1 : this.params.topics.every((s, i) => {
      let o = e.topics[i];
      if (!o)
        return !1;
      o = o.toLowerCase();
      let a = Array.isArray(s) ? s : [s];
      return a.includes(null) ? !0 : (a = a.map((u) => u.toLowerCase()), a.includes(o));
    });
  }
};
var O1 = P1, Is = $1;
async function $1({ provider: t, fromBlock: e, toBlock: r }) {
  e || (e = r);
  const n = Ti(e), i = Ti(r) - n + 1, o = Array(i).fill().map((l, c) => n + c).map(x1);
  let a = await Promise.all(
    o.map((l) => j1(t, "eth_getBlockByNumber", [l, !1]))
  );
  return a = a.filter((l) => l !== null), a;
}
function Ti(t) {
  return t == null ? t : Number.parseInt(t, 16);
}
function x1(t) {
  return t == null ? t : "0x" + t.toString(16);
}
function F1(t, e) {
  return new Promise((r, n) => {
    t.sendAsync(e, (s, i) => {
      s ? n(s) : i.error ? n(i.error) : i.result ? r(i.result) : n(new Error("Result was empty"));
    });
  });
}
async function j1(t, e, r) {
  for (let n = 0; n < 3; n++)
    try {
      return await F1(t, {
        id: 1,
        jsonrpc: "2.0",
        method: e,
        params: r
      });
    } catch (s) {
      console.error(
        `provider.sendAsync failed: ${s.stack || s.message || s}`
      );
    }
  return null;
}
const B1 = ks, D1 = Is, { incrementHexInt: H1 } = or;
let U1 = class extends B1 {
  constructor({ provider: e, params: r }) {
    super(), this.type = "block", this.provider = e;
  }
  async update({ oldBlock: e, newBlock: r }) {
    const n = r, s = H1(e), o = (await D1({ provider: this.provider, fromBlock: s, toBlock: n })).map((a) => a.hash);
    this.addResults(o);
  }
};
var V1 = U1;
const W1 = ks, z1 = Is, { incrementHexInt: J1 } = or;
let q1 = class extends W1 {
  constructor({ provider: e }) {
    super(), this.type = "tx", this.provider = e;
  }
  async update({ oldBlock: e }) {
    const r = e, n = J1(e), s = await z1({ provider: this.provider, fromBlock: n, toBlock: r }), i = [];
    for (const o of s)
      i.push(...o.transactions);
    this.addResults(i);
  }
};
var G1 = q1;
const Z1 = ha.Mutex, { createAsyncMiddleware: Q1, createScaffoldMiddleware: K1 } = ys, X1 = O1, Y1 = V1, eg = G1, { intToHex: xa, hexToInt: $n } = or;
var tg = rg;
function rg({ blockTracker: t, provider: e }) {
  let r = 0, n = {};
  const s = new Z1(), i = ng({ mutex: s }), o = K1({
    // install filters
    eth_newFilter: i(xn(l)),
    eth_newBlockFilter: i(xn(c)),
    eth_newPendingTransactionFilter: i(xn(u)),
    // uninstall filters
    eth_uninstallFilter: i(_r(f)),
    // checking filter changes
    eth_getFilterChanges: i(_r(d)),
    eth_getFilterLogs: i(_r(h))
  }), a = async ({ oldBlock: S, newBlock: p }) => {
    if (n.length === 0)
      return;
    const j = await s.acquire();
    try {
      await Promise.all(ut(n).map(async (E) => {
        try {
          await E.update({ oldBlock: S, newBlock: p });
        } catch (M) {
          console.error(M);
        }
      }));
    } catch (E) {
      console.error(E);
    }
    j();
  };
  return o.newLogFilter = l, o.newBlockFilter = c, o.newPendingTransactionFilter = u, o.uninstallFilter = f, o.getFilterChanges = d, o.getFilterLogs = h, o.destroy = () => {
    y();
  }, o;
  async function l(S) {
    const p = new X1({ provider: e, params: S });
    return await g(p), p;
  }
  async function c() {
    const S = new Y1({ provider: e });
    return await g(S), S;
  }
  async function u() {
    const S = new eg({ provider: e });
    return await g(S), S;
  }
  async function d(S) {
    const p = $n(S), j = n[p];
    if (!j)
      throw new Error(`No filter for index "${p}"`);
    return j.getChangesAndClear();
  }
  async function h(S) {
    const p = $n(S), j = n[p];
    if (!j)
      throw new Error(`No filter for index "${p}"`);
    let E = [];
    return j.type === "log" && (E = j.getAllResults()), E;
  }
  async function f(S) {
    const p = $n(S), E = !!n[p];
    return E && await b(p), E;
  }
  async function g(S) {
    const p = ut(n).length, j = await t.getLatestBlock();
    await S.initialize({ currentBlock: j }), r++, n[r] = S, S.id = r, S.idHex = xa(r);
    const E = ut(n).length;
    return v({ prevFilterCount: p, newFilterCount: E }), r;
  }
  async function b(S) {
    const p = ut(n).length;
    delete n[S];
    const j = ut(n).length;
    v({ prevFilterCount: p, newFilterCount: j });
  }
  async function y() {
    const S = ut(n).length;
    n = {}, v({ prevFilterCount: S, newFilterCount: 0 });
  }
  function v({ prevFilterCount: S, newFilterCount: p }) {
    if (S === 0 && p > 0) {
      t.on("sync", a);
      return;
    }
    if (S > 0 && p === 0) {
      t.removeListener("sync", a);
      return;
    }
  }
}
function xn(t) {
  return _r(async (...e) => {
    const r = await t(...e);
    return xa(r.id);
  });
}
function _r(t) {
  return Q1(async (e, r) => {
    const n = await t.apply(null, e.params);
    r.result = n;
  });
}
function ng({ mutex: t }) {
  return (e) => async (r, n, s, i) => {
    (await t.acquire())(), e(r, n, s, i);
  };
}
function ut(t, e) {
  const r = [];
  for (let n in t)
    r.push(t[n]);
  return r;
}
const sg = Kt.default, { createAsyncMiddleware: Pi, createScaffoldMiddleware: ig } = ys, og = tg, { unsafeRandomBytes: ag, incrementHexInt: cg } = or, lg = Is;
var ug = dg;
function dg({ blockTracker: t, provider: e }) {
  const r = {}, n = og({ blockTracker: t, provider: e });
  let s = !1;
  const i = new sg(), o = ig({
    eth_subscribe: Pi(a),
    eth_unsubscribe: Pi(l)
  });
  return o.destroy = u, { events: i, middleware: o };
  async function a(d, h) {
    if (s)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const f = d.params[0], g = ag(16);
    let b;
    switch (f) {
      case "newHeads":
        b = y({ subId: g });
        break;
      case "logs":
        const S = d.params[1], p = await n.newLogFilter(S);
        b = v({ subId: g, filter: p });
        break;
      default:
        throw new Error(`SubscriptionManager - unsupported subscription type "${f}"`);
    }
    r[g] = b, h.result = g;
    return;
    function y({ subId: S }) {
      const p = {
        type: f,
        destroy: async () => {
          t.removeListener("sync", p.update);
        },
        update: async ({ oldBlock: j, newBlock: E }) => {
          const M = E, z = cg(j);
          (await lg({ provider: e, fromBlock: z, toBlock: M })).map(hg).filter((K) => K !== null).forEach((K) => {
            c(S, K);
          });
        }
      };
      return t.on("sync", p.update), p;
    }
    function v({ subId: S, filter: p }) {
      return p.on("update", (E) => c(S, E)), {
        type: f,
        destroy: async () => await n.uninstallFilter(p.idHex)
      };
    }
  }
  async function l(d, h) {
    if (s)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const f = d.params[0], g = r[f];
    if (!g) {
      h.result = !1;
      return;
    }
    delete r[f], await g.destroy(), h.result = !0;
  }
  function c(d, h) {
    i.emit("notification", {
      jsonrpc: "2.0",
      method: "eth_subscription",
      params: {
        subscription: d,
        result: h
      }
    });
  }
  function u() {
    i.removeAllListeners();
    for (const d in r)
      r[d].destroy(), delete r[d];
    s = !0;
  }
}
function hg(t) {
  return t == null ? null : {
    hash: t.hash,
    parentHash: t.parentHash,
    sha3Uncles: t.sha3Uncles,
    miner: t.miner,
    stateRoot: t.stateRoot,
    transactionsRoot: t.transactionsRoot,
    receiptsRoot: t.receiptsRoot,
    logsBloom: t.logsBloom,
    difficulty: t.difficulty,
    number: t.number,
    gasLimit: t.gasLimit,
    gasUsed: t.gasUsed,
    nonce: t.nonce,
    mixHash: t.mixHash,
    timestamp: t.timestamp,
    extraData: t.extraData
  };
}
Object.defineProperty(Kr, "__esModule", { value: !0 });
Kr.SubscriptionManager = void 0;
const fg = Eo, gg = ug, Oi = () => {
};
class pg {
  constructor(e) {
    const r = new fg.PollingBlockTracker({
      provider: e,
      pollingInterval: 15e3,
      setSkipCacheFlag: !0
    }), { events: n, middleware: s } = gg({
      blockTracker: r,
      provider: e
    });
    this.events = n, this.subscriptionMiddleware = s;
  }
  async handleRequest(e) {
    const r = {};
    return await this.subscriptionMiddleware(e, r, Oi, Oi), r;
  }
  destroy() {
    this.subscriptionMiddleware.destroy();
  }
}
Kr.SubscriptionManager = pg;
var Fa = I && I.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(bt, "__esModule", { value: !0 });
bt.CoinbaseWalletProvider = void 0;
const mg = Fa(Rr), bg = Da, $ = Ht, T = _, yg = zt, $i = we, Er = It, he = Ct, Fn = Fa(Hl), $t = Rt, wg = Et, Eg = Kr, xi = "DefaultChainId", Fi = "DefaultJsonRpcUrl";
class _g extends bg.EventEmitter {
  constructor(e) {
    var r, n;
    super(), this._filterPolyfill = new wg.FilterPolyfill(this), this._subscriptionManager = new Eg.SubscriptionManager(this), this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1, this.setProviderInfo = this.setProviderInfo.bind(this), this.updateProviderInfo = this.updateProviderInfo.bind(this), this.getChainId = this.getChainId.bind(this), this.setAppInfo = this.setAppInfo.bind(this), this.enable = this.enable.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this.request = this.request.bind(this), this._setAddresses = this._setAddresses.bind(this), this.scanQRCode = this.scanQRCode.bind(this), this.genericRequest = this.genericRequest.bind(this), this._chainIdFromOpts = e.chainId, this._jsonRpcUrlFromOpts = e.jsonRpcUrl, this._overrideIsMetaMask = e.overrideIsMetaMask, this._relayProvider = e.relayProvider, this._storage = e.storage, this._relayEventManager = e.relayEventManager, this.diagnostic = e.diagnosticLogger, this.reloadOnDisconnect = !0, this.isCoinbaseWallet = (r = e.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this.isCoinbaseBrowser = (n = e.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, this.qrUrl = e.qrUrl;
    const s = this.getChainId(), i = (0, T.prepend0x)(s.toString(16));
    this.emit("connect", { chainIdStr: i });
    const o = this._storage.getItem($i.LOCAL_STORAGE_ADDRESSES_KEY);
    if (o) {
      const a = o.split(" ");
      a[0] !== "" && (this._addresses = a.map((l) => (0, T.ensureAddressString)(l)), this.emit("accountsChanged", a));
    }
    this._subscriptionManager.events.on("notification", (a) => {
      this.emit("message", {
        type: a.method,
        data: a.params
      });
    }), this._isAuthorized() && this.initializeRelay(), window.addEventListener("message", (a) => {
      var l;
      if (!(a.origin !== location.origin || a.source !== window) && a.data.type === "walletLinkMessage" && a.data.data.action === "dappChainSwitched") {
        const c = a.data.data.chainId, u = (l = a.data.data.jsonRpcUrl) !== null && l !== void 0 ? l : this.jsonRpcUrl;
        this.updateProviderInfo(u, Number(c));
      }
    });
  }
  /** @deprecated Use `.request({ method: 'eth_accounts' })` instead. */
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  /** @deprecated Use the chain ID. If you still need the network ID, use `.request({ method: 'net_version' })`. */
  get networkVersion() {
    return this.getChainId().toString(10);
  }
  /** @deprecated Use `.request({ method: 'eth_chainId' })` instead. */
  get chainId() {
    return (0, T.prepend0x)(this.getChainId().toString(16));
  }
  get isWalletLink() {
    return !0;
  }
  /**
   * Some DApps (i.e. Alpha Homora) seem to require the window.ethereum object return
   * true for this method.
   */
  get isMetaMask() {
    return this._overrideIsMetaMask;
  }
  get host() {
    return this.jsonRpcUrl;
  }
  get connected() {
    return !0;
  }
  isConnected() {
    return !0;
  }
  get jsonRpcUrl() {
    var e;
    return (e = this._storage.getItem(Fi)) !== null && e !== void 0 ? e : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(e) {
    this._storage.setItem(Fi, e);
  }
  disableReloadOnDisconnect() {
    this.reloadOnDisconnect = !1;
  }
  setProviderInfo(e, r) {
    this.isCoinbaseBrowser || (this._chainIdFromOpts = r, this._jsonRpcUrlFromOpts = e), this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
  }
  updateProviderInfo(e, r) {
    this.jsonRpcUrl = e;
    const n = this.getChainId();
    this._storage.setItem(xi, r.toString(10)), ((0, T.ensureIntNumber)(r) !== n || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()), this.hasMadeFirstChainChangedEmission = !0);
  }
  async watchAsset(e, r, n, s, i, o) {
    const l = await (await this.initializeRelay()).watchAsset(e, r, n, s, i, o == null ? void 0 : o.toString()).promise;
    return (0, he.isErrorResponse)(l) ? !1 : !!l.result;
  }
  async addEthereumChain(e, r, n, s, i, o) {
    var a, l;
    if ((0, T.ensureIntNumber)(e) === this.getChainId())
      return !1;
    const c = await this.initializeRelay(), u = c.inlineAddEthereumChain(e.toString());
    !this._isAuthorized() && !u && await c.requestEthereumAccounts().promise;
    const d = await c.addEthereumChain(e.toString(), r, i, n, s, o).promise;
    return (0, he.isErrorResponse)(d) ? !1 : (((a = d.result) === null || a === void 0 ? void 0 : a.isApproved) === !0 && this.updateProviderInfo(r[0], e), ((l = d.result) === null || l === void 0 ? void 0 : l.isApproved) === !0);
  }
  async switchEthereumChain(e) {
    const n = await (await this.initializeRelay()).switchEthereumChain(e.toString(10), this.selectedAddress || void 0).promise;
    if ((0, he.isErrorResponse)(n)) {
      if (!n.errorCode)
        return;
      throw n.errorCode === $.standardErrorCodes.provider.unsupportedChain ? $.standardErrors.provider.unsupportedChain() : $.standardErrors.provider.custom({
        message: n.errorMessage,
        code: n.errorCode
      });
    }
    const s = n.result;
    s.isApproved && s.rpcUrl.length > 0 && this.updateProviderInfo(s.rpcUrl, e);
  }
  setAppInfo(e, r) {
    this.initializeRelay().then((n) => n.setAppInfo(e, r));
  }
  /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
  async enable() {
    var e;
    return (e = this.diagnostic) === null || e === void 0 || e.log($t.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::enable",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? Er.Session.hash(this._relay.session.id) : void 0
    }), this._isAuthorized() ? [...this._addresses] : await this.send("eth_requestAccounts");
  }
  async close() {
    (await this.initializeRelay()).resetAndReload();
  }
  send(e, r) {
    try {
      const n = this._send(e, r);
      if (n instanceof Promise)
        return n.catch((s) => {
          throw (0, $.serializeError)(s, e);
        });
    } catch (n) {
      throw (0, $.serializeError)(n, e);
    }
  }
  _send(e, r) {
    if (typeof e == "string") {
      const s = e, i = Array.isArray(r) ? r : r !== void 0 ? [r] : [], o = {
        jsonrpc: "2.0",
        id: 0,
        method: s,
        params: i
      };
      return this._sendRequestAsync(o).then((a) => a.result);
    }
    if (typeof r == "function") {
      const s = e, i = r;
      return this._sendAsync(s, i);
    }
    if (Array.isArray(e))
      return e.map((i) => this._sendRequest(i));
    const n = e;
    return this._sendRequest(n);
  }
  async sendAsync(e, r) {
    try {
      return this._sendAsync(e, r).catch((n) => {
        throw (0, $.serializeError)(n, e);
      });
    } catch (n) {
      return Promise.reject((0, $.serializeError)(n, e));
    }
  }
  async _sendAsync(e, r) {
    if (typeof r != "function")
      throw new Error("callback is required");
    if (Array.isArray(e)) {
      const s = r;
      this._sendMultipleRequestsAsync(e).then((i) => s(null, i)).catch((i) => s(i, null));
      return;
    }
    const n = r;
    return this._sendRequestAsync(e).then((s) => n(null, s)).catch((s) => n(s, null));
  }
  async request(e) {
    try {
      return this._request(e).catch((r) => {
        throw (0, $.serializeError)(r, e.method);
      });
    } catch (r) {
      return Promise.reject((0, $.serializeError)(r, e.method));
    }
  }
  async _request(e) {
    if (!e || typeof e != "object" || Array.isArray(e))
      throw $.standardErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: e
      });
    const { method: r, params: n } = e;
    if (typeof r != "string" || r.length === 0)
      throw $.standardErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: e
      });
    if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null))
      throw $.standardErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: e
      });
    const s = n === void 0 ? [] : n, i = this._relayEventManager.makeRequestId();
    return (await this._sendRequestAsync({
      method: r,
      params: s,
      jsonrpc: "2.0",
      id: i
    })).result;
  }
  async scanQRCode(e) {
    const n = await (await this.initializeRelay()).scanQRCode((0, T.ensureRegExpString)(e)).promise;
    if ((0, he.isErrorResponse)(n))
      throw (0, $.serializeError)(n.errorMessage, "scanQRCode");
    if (typeof n.result != "string")
      throw (0, $.serializeError)("result was not a string", "scanQRCode");
    return n.result;
  }
  async genericRequest(e, r) {
    const s = await (await this.initializeRelay()).genericRequest(e, r).promise;
    if ((0, he.isErrorResponse)(s))
      throw (0, $.serializeError)(s.errorMessage, "generic");
    if (typeof s.result != "string")
      throw (0, $.serializeError)("result was not a string", "generic");
    return s.result;
  }
  /**
   * @beta
   * This method is currently in beta. While it is available for use, please note that it is still under testing and may undergo significant changes.
   *
   * @remarks
   * IMPORTANT: Signature validation is not performed by this method. Users of this method are advised to perform their own signature validation.
   * Common web3 frontend libraries such as ethers.js and viem provide the `verifyMessage` utility function that can be used for signature validation.
   *
   * It combines `eth_requestAccounts` and "Sign-In with Ethereum" (EIP-4361) into a single call.
   * The returned account and signed message can be used to authenticate the user.
   *
   * @param {Object} params - An object with the following properties:
   * - `nonce` {string}: A unique string to prevent replay attacks.
   * - `statement` {string}: An optional human-readable ASCII assertion that the user will sign.
   * - `resources` {string[]}: An optional list of information the user wishes to have resolved as part of authentication by the relying party.
   *
   * @returns {Promise<ConnectAndSignInResponse>} A promise that resolves to an object with the following properties:
   * - `accounts` {string[]}: The Ethereum accounts of the user.
   * - `message` {string}: The overall message that the user signed. Hex encoded.
   * - `signature` {string}: The signature of the message, signed with the user's private key. Hex encoded.
   */
  async connectAndSignIn(e) {
    var r;
    (r = this.diagnostic) === null || r === void 0 || r.log($t.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::connectAndSignIn",
      sessionIdHash: this._relay ? Er.Session.hash(this._relay.session.id) : void 0
    });
    let n;
    try {
      const i = await this.initializeRelay();
      if (!(i instanceof yg.MobileRelay))
        throw new Error("connectAndSignIn is only supported on mobile");
      if (n = await i.connectAndSignIn(e).promise, (0, he.isErrorResponse)(n))
        throw new Error(n.errorMessage);
    } catch (i) {
      throw typeof i.message == "string" && i.message.match(/(denied|rejected)/i) ? $.standardErrors.provider.userRejectedRequest("User denied account authorization") : i;
    }
    if (!n.result)
      throw new Error("accounts received is empty");
    const { accounts: s } = n.result;
    return this._setAddresses(s), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), n.result;
  }
  async selectProvider(e) {
    const n = await (await this.initializeRelay()).selectProvider(e).promise;
    if ((0, he.isErrorResponse)(n))
      throw (0, $.serializeError)(n.errorMessage, "selectProvider");
    if (typeof n.result != "string")
      throw (0, $.serializeError)("result was not a string", "selectProvider");
    return n.result;
  }
  supportsSubscriptions() {
    return !1;
  }
  subscribe() {
    throw new Error("Subscriptions are not supported");
  }
  unsubscribe() {
    throw new Error("Subscriptions are not supported");
  }
  disconnect() {
    return !0;
  }
  _sendRequest(e) {
    const r = {
      jsonrpc: "2.0",
      id: e.id
    }, { method: n } = e;
    if (r.result = this._handleSynchronousMethods(e), r.result === void 0)
      throw new Error(`Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`);
    return r;
  }
  _setAddresses(e, r) {
    if (!Array.isArray(e))
      throw new Error("addresses is not an array");
    const n = e.map((s) => (0, T.ensureAddressString)(s));
    JSON.stringify(n) !== JSON.stringify(this._addresses) && (this._addresses = n, this.emit("accountsChanged", this._addresses), this._storage.setItem($i.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")));
  }
  _sendRequestAsync(e) {
    return new Promise((r, n) => {
      try {
        const s = this._handleSynchronousMethods(e);
        if (s !== void 0)
          return r({
            jsonrpc: "2.0",
            id: e.id,
            result: s
          });
        const i = this._handleAsynchronousFilterMethods(e);
        if (i !== void 0) {
          i.then((a) => r(Object.assign(Object.assign({}, a), { id: e.id }))).catch((a) => n(a));
          return;
        }
        const o = this._handleSubscriptionMethods(e);
        if (o !== void 0) {
          o.then((a) => r({
            jsonrpc: "2.0",
            id: e.id,
            result: a.result
          })).catch((a) => n(a));
          return;
        }
      } catch (s) {
        return n(s);
      }
      this._handleAsynchronousMethods(e).then((s) => s && r(Object.assign(Object.assign({}, s), { id: e.id }))).catch((s) => n(s));
    });
  }
  _sendMultipleRequestsAsync(e) {
    return Promise.all(e.map((r) => this._sendRequestAsync(r)));
  }
  _handleSynchronousMethods(e) {
    const { method: r } = e, n = e.params || [];
    switch (r) {
      case "eth_accounts":
        return this._eth_accounts();
      case "eth_coinbase":
        return this._eth_coinbase();
      case "eth_uninstallFilter":
        return this._eth_uninstallFilter(n);
      case "net_version":
        return this._net_version();
      case "eth_chainId":
        return this._eth_chainId();
      default:
        return;
    }
  }
  async _handleAsynchronousMethods(e) {
    const { method: r } = e, n = e.params || [];
    switch (r) {
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
      case "cbWallet_arbitrary":
        return this._cbwallet_arbitrary(n);
      case "wallet_addEthereumChain":
        return this._wallet_addEthereumChain(n);
      case "wallet_switchEthereumChain":
        return this._wallet_switchEthereumChain(n);
      case "wallet_watchAsset":
        return this._wallet_watchAsset(n);
    }
    return (await this.initializeRelay()).makeEthereumJSONRPCRequest(e, this.jsonRpcUrl).catch((i) => {
      var o;
      throw (i.code === $.standardErrorCodes.rpc.methodNotFound || i.code === $.standardErrorCodes.rpc.methodNotSupported) && ((o = this.diagnostic) === null || o === void 0 || o.log($t.EVENTS.METHOD_NOT_IMPLEMENTED, {
        method: e.method,
        sessionIdHash: this._relay ? Er.Session.hash(this._relay.session.id) : void 0
      })), i;
    });
  }
  _handleAsynchronousFilterMethods(e) {
    const { method: r } = e, n = e.params || [];
    switch (r) {
      case "eth_newFilter":
        return this._eth_newFilter(n);
      case "eth_newBlockFilter":
        return this._eth_newBlockFilter();
      case "eth_newPendingTransactionFilter":
        return this._eth_newPendingTransactionFilter();
      case "eth_getFilterChanges":
        return this._eth_getFilterChanges(n);
      case "eth_getFilterLogs":
        return this._eth_getFilterLogs(n);
    }
  }
  _handleSubscriptionMethods(e) {
    switch (e.method) {
      case "eth_subscribe":
      case "eth_unsubscribe":
        return this._subscriptionManager.handleRequest(e);
    }
  }
  _isKnownAddress(e) {
    try {
      const r = (0, T.ensureAddressString)(e);
      return this._addresses.map((s) => (0, T.ensureAddressString)(s)).includes(r);
    } catch {
    }
    return !1;
  }
  _ensureKnownAddress(e) {
    var r;
    if (!this._isKnownAddress(e))
      throw (r = this.diagnostic) === null || r === void 0 || r.log($t.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED), new Error("Unknown Ethereum address");
  }
  _prepareTransactionParams(e) {
    const r = e.from ? (0, T.ensureAddressString)(e.from) : this.selectedAddress;
    if (!r)
      throw new Error("Ethereum address is unavailable");
    this._ensureKnownAddress(r);
    const n = e.to ? (0, T.ensureAddressString)(e.to) : null, s = e.value != null ? (0, T.ensureBN)(e.value) : new mg.default(0), i = e.data ? (0, T.ensureBuffer)(e.data) : B.alloc(0), o = e.nonce != null ? (0, T.ensureIntNumber)(e.nonce) : null, a = e.gasPrice != null ? (0, T.ensureBN)(e.gasPrice) : null, l = e.maxFeePerGas != null ? (0, T.ensureBN)(e.maxFeePerGas) : null, c = e.maxPriorityFeePerGas != null ? (0, T.ensureBN)(e.maxPriorityFeePerGas) : null, u = e.gas != null ? (0, T.ensureBN)(e.gas) : null, d = e.chainId ? (0, T.ensureIntNumber)(e.chainId) : this.getChainId();
    return {
      fromAddress: r,
      toAddress: n,
      weiValue: s,
      data: i,
      nonce: o,
      gasPriceInWei: a,
      maxFeePerGas: l,
      maxPriorityFeePerGas: c,
      gasLimit: u,
      chainId: d
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized())
      throw $.standardErrors.provider.unauthorized({});
  }
  _throwUnsupportedMethodError() {
    throw $.standardErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(e, r, n, s) {
    this._ensureKnownAddress(r);
    try {
      const o = await (await this.initializeRelay()).signEthereumMessage(e, r, n, s).promise;
      if ((0, he.isErrorResponse)(o))
        throw new Error(o.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: o.result };
    } catch (i) {
      throw typeof i.message == "string" && i.message.match(/(denied|rejected)/i) ? $.standardErrors.provider.userRejectedRequest("User denied message signature") : i;
    }
  }
  async _ethereumAddressFromSignedMessage(e, r, n) {
    const i = await (await this.initializeRelay()).ethereumAddressFromSignedMessage(e, r, n).promise;
    if ((0, he.isErrorResponse)(i))
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
    return (0, T.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const e = this._storage.getItem(xi);
    if (!e)
      return (0, T.ensureIntNumber)(this._chainIdFromOpts);
    const r = parseInt(e, 10);
    return (0, T.ensureIntNumber)(r);
  }
  async _eth_requestAccounts() {
    var e;
    if ((e = this.diagnostic) === null || e === void 0 || e.log($t.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::_eth_requestAccounts",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? Er.Session.hash(this._relay.session.id) : void 0
    }), this._isAuthorized())
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses
      });
    let r;
    try {
      if (r = await (await this.initializeRelay()).requestEthereumAccounts().promise, (0, he.isErrorResponse)(r))
        throw new Error(r.errorMessage);
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? $.standardErrors.provider.userRejectedRequest("User denied account authorization") : n;
    }
    if (!r.result)
      throw new Error("accounts received is empty");
    return this._setAddresses(r.result), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), { jsonrpc: "2.0", id: 0, result: this._addresses };
  }
  _eth_sign(e) {
    this._requireAuthorization();
    const r = (0, T.ensureAddressString)(e[0]), n = (0, T.ensureBuffer)(e[1]);
    return this._signEthereumMessage(n, r, !1);
  }
  _eth_ecRecover(e) {
    const r = (0, T.ensureBuffer)(e[0]), n = (0, T.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !1);
  }
  _personal_sign(e) {
    this._requireAuthorization();
    const r = (0, T.ensureBuffer)(e[0]), n = (0, T.ensureAddressString)(e[1]);
    return this._signEthereumMessage(r, n, !0);
  }
  _personal_ecRecover(e) {
    const r = (0, T.ensureBuffer)(e[0]), n = (0, T.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !0);
  }
  async _eth_signTransaction(e) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(e[0] || {});
    try {
      const s = await (await this.initializeRelay()).signEthereumTransaction(r).promise;
      if ((0, he.isErrorResponse)(s))
        throw new Error(s.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: s.result };
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? $.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n;
    }
  }
  async _eth_sendRawTransaction(e) {
    const r = (0, T.ensureBuffer)(e[0]), s = await (await this.initializeRelay()).submitEthereumTransaction(r, this.getChainId()).promise;
    if ((0, he.isErrorResponse)(s))
      throw new Error(s.errorMessage);
    return { jsonrpc: "2.0", id: 0, result: s.result };
  }
  async _eth_sendTransaction(e) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(e[0] || {});
    try {
      const s = await (await this.initializeRelay()).signAndSubmitEthereumTransaction(r).promise;
      if ((0, he.isErrorResponse)(s))
        throw new Error(s.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: s.result };
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? $.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n;
    }
  }
  async _eth_signTypedData_v1(e) {
    this._requireAuthorization();
    const r = (0, T.ensureParsedJSONObject)(e[0]), n = (0, T.ensureAddressString)(e[1]);
    this._ensureKnownAddress(n);
    const s = Fn.default.hashForSignTypedDataLegacy({ data: r }), i = JSON.stringify(r, null, 2);
    return this._signEthereumMessage(s, n, !1, i);
  }
  async _eth_signTypedData_v3(e) {
    this._requireAuthorization();
    const r = (0, T.ensureAddressString)(e[0]), n = (0, T.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(r);
    const s = Fn.default.hashForSignTypedData_v3({ data: n }), i = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(s, r, !1, i);
  }
  async _eth_signTypedData_v4(e) {
    this._requireAuthorization();
    const r = (0, T.ensureAddressString)(e[0]), n = (0, T.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(r);
    const s = Fn.default.hashForSignTypedData_v4({ data: n }), i = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(s, r, !1, i);
  }
  /** @deprecated */
  async _cbwallet_arbitrary(e) {
    const r = e[0], n = e[1];
    if (typeof n != "string")
      throw new Error("parameter must be a string");
    if (typeof r != "object" || r === null)
      throw new Error("parameter must be an object");
    return { jsonrpc: "2.0", id: 0, result: await this.genericRequest(r, n) };
  }
  async _wallet_addEthereumChain(e) {
    var r, n, s, i;
    const o = e[0];
    if (((r = o.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0)
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: "please pass in at least 1 rpcUrl" }
      };
    if (!o.chainName || o.chainName.trim() === "")
      throw $.standardErrors.rpc.invalidParams("chainName is a required field");
    if (!o.nativeCurrency)
      throw $.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
    const a = parseInt(o.chainId, 16);
    return await this.addEthereumChain(a, (n = o.rpcUrls) !== null && n !== void 0 ? n : [], (s = o.blockExplorerUrls) !== null && s !== void 0 ? s : [], o.chainName, (i = o.iconUrls) !== null && i !== void 0 ? i : [], o.nativeCurrency) ? { jsonrpc: "2.0", id: 0, result: null } : {
      jsonrpc: "2.0",
      id: 0,
      error: { code: 2, message: "unable to add ethereum chain" }
    };
  }
  async _wallet_switchEthereumChain(e) {
    const r = e[0];
    return await this.switchEthereumChain(parseInt(r.chainId, 16)), { jsonrpc: "2.0", id: 0, result: null };
  }
  async _wallet_watchAsset(e) {
    const r = Array.isArray(e) ? e[0] : e;
    if (!r.type)
      throw $.standardErrors.rpc.invalidParams("Type is required");
    if ((r == null ? void 0 : r.type) !== "ERC20")
      throw $.standardErrors.rpc.invalidParams(`Asset of type '${r.type}' is not supported`);
    if (!(r != null && r.options))
      throw $.standardErrors.rpc.invalidParams("Options are required");
    if (!(r != null && r.options.address))
      throw $.standardErrors.rpc.invalidParams("Address is required");
    const n = this.getChainId(), { address: s, symbol: i, image: o, decimals: a } = r.options;
    return { jsonrpc: "2.0", id: 0, result: await this.watchAsset(r.type, s, i, a, o, n) };
  }
  _eth_uninstallFilter(e) {
    const r = (0, T.ensureHexString)(e[0]);
    return this._filterPolyfill.uninstallFilter(r);
  }
  async _eth_newFilter(e) {
    const r = e[0];
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newFilter(r) };
  }
  async _eth_newBlockFilter() {
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newBlockFilter() };
  }
  async _eth_newPendingTransactionFilter() {
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newPendingTransactionFilter() };
  }
  _eth_getFilterChanges(e) {
    const r = (0, T.ensureHexString)(e[0]);
    return this._filterPolyfill.getFilterChanges(r);
  }
  _eth_getFilterLogs(e) {
    const r = (0, T.ensureHexString)(e[0]);
    return this._filterPolyfill.getFilterLogs(r);
  }
  initializeRelay() {
    return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then((e) => (e.setAccountsCallback((r, n) => this._setAddresses(r, n)), e.setChainCallback((r, n) => {
      this.updateProviderInfo(n, parseInt(r, 10));
    }), e.setDappDefaultChainCallback(this._chainIdFromOpts), this._relay = e, e));
  }
}
bt.CoinbaseWalletProvider = _g;
var bn = {};
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.RelayEventManager = void 0;
const vg = _;
class Sg {
  constructor() {
    this._nextRequestId = 0, this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const e = this._nextRequestId, r = (0, vg.prepend0x)(e.toString(16));
    return this.callbacks.get(r) && this.callbacks.delete(r), e;
  }
}
bn.RelayEventManager = Sg;
Object.defineProperty(Ft, "__esModule", { value: !0 });
Ft.CoinbaseWalletSDK = void 0;
const Cg = Ar, kg = Nr, ji = _, Rg = Or, Ig = bt, Ag = zt, Ng = Zt, Mg = bn, Lg = qt, Tg = Jt, ja = kt;
class yn {
  /**
   * Constructor
   * @param options Coinbase Wallet SDK constructor options
   */
  constructor(e) {
    var r, n, s;
    this._appName = "", this._appLogoUrl = null, this._relay = null, this._relayEventManager = null;
    const i = e.linkAPIUrl || kg.LINK_API_URL;
    typeof e.overrideIsMetaMask > "u" ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = e.overrideIsMetaMask, this._overrideIsCoinbaseWallet = (r = e.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this._overrideIsCoinbaseBrowser = (n = e.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, this._diagnosticLogger = e.diagnosticLogger, this._reloadOnDisconnect = (s = e.reloadOnDisconnect) !== null && s !== void 0 ? s : !0;
    const o = new URL(i), a = `${o.protocol}//${o.host}`;
    if (this._storage = new Rg.ScopedLocalStorage(`-walletlink:${a}`), this._storage.setItem("version", yn.VERSION), this.walletExtension || this.coinbaseBrowser)
      return;
    this._relayEventManager = new Mg.RelayEventManager();
    const l = (0, ji.isMobileWeb)(), c = e.uiConstructor || ((d) => l ? new Ng.MobileRelayUI(d) : new Lg.WalletLinkRelayUI(d)), u = {
      linkAPIUrl: i,
      version: ja.LIB_VERSION,
      darkMode: !!e.darkMode,
      headlessMode: !!e.headlessMode,
      uiConstructor: c,
      storage: this._storage,
      relayEventManager: this._relayEventManager,
      diagnosticLogger: this._diagnosticLogger,
      reloadOnDisconnect: this._reloadOnDisconnect,
      enableMobileWalletLink: e.enableMobileWalletLink
    };
    this._relay = l ? new Ag.MobileRelay(u) : new Tg.WalletLinkRelay(u), this.setAppInfo(e.appName, e.appLogoUrl), !e.headlessMode && this._relay.attachUI();
  }
  /**
   * Create a Web3 Provider object
   * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
   * @param chainId Ethereum Chain ID (Default: 1)
   * @returns A Web3 Provider
   */
  makeWeb3Provider(e = "", r = 1) {
    const n = this.walletExtension;
    if (n)
      return this.isCipherProvider(n) || n.setProviderInfo(e, r), this._reloadOnDisconnect === !1 && typeof n.disableReloadOnDisconnect == "function" && n.disableReloadOnDisconnect(), n;
    const s = this.coinbaseBrowser;
    if (s)
      return s;
    const i = this._relay;
    if (!i || !this._relayEventManager || !this._storage)
      throw new Error("Relay not initialized, should never happen");
    return e || i.setConnectDisabled(!0), new Ig.CoinbaseWalletProvider({
      relayProvider: () => Promise.resolve(i),
      relayEventManager: this._relayEventManager,
      storage: this._storage,
      jsonRpcUrl: e,
      chainId: r,
      qrUrl: this.getQrUrl(),
      diagnosticLogger: this._diagnosticLogger,
      overrideIsMetaMask: this._overrideIsMetaMask,
      overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
      overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
    });
  }
  /**
   * Set application information
   * @param appName Application name
   * @param appLogoUrl Application logo image URL
   */
  setAppInfo(e, r) {
    var n;
    this._appName = e || "DApp", this._appLogoUrl = r || (0, ji.getFavicon)();
    const s = this.walletExtension;
    s ? this.isCipherProvider(s) || s.setAppInfo(this._appName, this._appLogoUrl) : (n = this._relay) === null || n === void 0 || n.setAppInfo(this._appName, this._appLogoUrl);
  }
  /**
   * Disconnect. After disconnecting, this will reload the web page to ensure
   * all potential stale state is cleared.
   */
  disconnect() {
    var e;
    const r = this === null || this === void 0 ? void 0 : this.walletExtension;
    r ? r.close() : (e = this._relay) === null || e === void 0 || e.resetAndReload();
  }
  /**
   * Return QR URL for mobile wallet connection, will return null if extension is installed
   */
  getQrUrl() {
    var e, r;
    return (r = (e = this._relay) === null || e === void 0 ? void 0 : e.getQRCodeUrl()) !== null && r !== void 0 ? r : null;
  }
  /**
   * Official Coinbase Wallet logo for developers to use on their frontend
   * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
   * @param width Width of the logo (Optional)
   * @returns SVG Data URI
   */
  getCoinbaseWalletLogo(e, r = 240) {
    return (0, Cg.walletLogo)(e, r);
  }
  get walletExtension() {
    var e;
    return (e = window.coinbaseWalletExtension) !== null && e !== void 0 ? e : window.walletLinkExtension;
  }
  get coinbaseBrowser() {
    var e, r;
    try {
      const n = (e = window.ethereum) !== null && e !== void 0 ? e : (r = window.top) === null || r === void 0 ? void 0 : r.ethereum;
      return n && "isCoinbaseBrowser" in n && n.isCoinbaseBrowser ? n : void 0;
    } catch {
      return;
    }
  }
  isCipherProvider(e) {
    return typeof e.isCipher == "boolean" && e.isCipher;
  }
}
Ft.CoinbaseWalletSDK = yn;
yn.VERSION = ja.LIB_VERSION;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.CoinbaseWalletProvider = t.CoinbaseWalletSDK = void 0;
  const e = Ft, r = bt;
  var n = Ft;
  Object.defineProperty(t, "CoinbaseWalletSDK", { enumerable: !0, get: function() {
    return n.CoinbaseWalletSDK;
  } });
  var s = bt;
  Object.defineProperty(t, "CoinbaseWalletProvider", { enumerable: !0, get: function() {
    return s.CoinbaseWalletProvider;
  } }), t.default = e.CoinbaseWalletSDK, typeof window < "u" && (window.CoinbaseWalletSDK = e.CoinbaseWalletSDK, window.CoinbaseWalletProvider = r.CoinbaseWalletProvider, window.WalletLink = e.CoinbaseWalletSDK, window.WalletLinkProvider = r.CoinbaseWalletProvider);
})(Hi);
const Pg = /* @__PURE__ */ Ha(Hi), Jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pg
}, Symbol.toStringTag, { value: "Module" }));
export {
  Jg as i
};
