'use client';
import { AppKit } from '@web3inno/appkit';
import { SolanaAdapter, useAppKitConnection } from '@web3inno/appkit-adapter-solana/react';
import { getAppKit } from '@web3inno/appkit/library/react';
import packageJson from '../package.json' assert { type: 'json' };
let appkit = undefined;
let solanaAdapter = undefined;
export function createAppKit(options) {
    solanaAdapter = new SolanaAdapter({
        wallets: options.wallets
    });
    appkit = new AppKit({
        ...options,
        sdkVersion: `react-solana-${packageJson.version}`,
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
export { useAppKitTheme, useAppKit, useAppKitState, useAppKitEvents } from '@web3inno/appkit/library/react';
export { useAppKitConnection };
//# sourceMappingURL=react.js.map