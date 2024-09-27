import { getAppKit } from '@reown/appkit/library/vue';
import { AppKit } from '@reown/appkit';
import { SolanaAdapter, useAppKitConnection } from '@reown/appkit-adapter-solana/vue';
import packageJson from '../package.json' assert { type: 'json' };
let appkit = undefined;
let solanaAdapter = undefined;
export function createAppKit(options) {
    solanaAdapter = new SolanaAdapter({
        wallets: options.wallets
    });
    appkit = new AppKit({
        ...options,
        sdkVersion: `vue-solana-${packageJson.version}`,
        adapters: [solanaAdapter]
    });
    getAppKit(appkit);
    return appkit;
}
export function useDisconnect() {
    async function disconnect() {
        await solanaAdapter?.connectionControllerClient?.disconnect();
    }
    return {
        disconnect
    };
}
export function useSwitchNetwork() {
    async function switchNetwork(chainId) {
        await solanaAdapter?.switchNetwork({ id: chainId });
    }
    return {
        switchNetwork
    };
}
export function useAppKitError() {
}
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents } from '@reown/appkit/library/vue';
export { useAppKitConnection };
//# sourceMappingURL=vue.js.map