import { m as e } from "./W3MFrameProviderSingleton-C9zzHw2W.js";
function t() {
  if (typeof WebSocket < "u")
    return WebSocket;
  if (typeof e.WebSocket < "u")
    return e.WebSocket;
  if (typeof window.WebSocket < "u")
    return window.WebSocket;
  if (typeof self.WebSocket < "u")
    return self.WebSocket;
  throw new Error("`WebSocket` is not supported in this environment");
}
const n = t();
export {
  n as WebSocket
};
