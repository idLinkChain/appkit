import { AppKit } from '@reown/appkit';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import packageJson from '../package.json' assert { type: 'json' };
export function createAppKit(options) {
    const solanaAdapter = new SolanaAdapter({
        wallets: options.wallets
    });
    return new AppKit({
        ...options,
        sdkVersion: `html-solana-${packageJson.version}`,
        adapters: [solanaAdapter]
    });
}
//# sourceMappingURL=index.js.map