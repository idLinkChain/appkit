import { AppKit } from '@web3inno/appkit'
import { SolanaAdapter } from '@web3inno/appkit-adapter-solana'
import type { SolanaAppKitOptions } from './options'
import type { Provider } from '@web3inno/appkit-adapter-solana'
import packageJson from '../package.json' assert { type: 'json' }

// -- Types -------------------------------------------------------------
export type { SolanaAppKitOptions, Provider }

// -- Setup -------------------------------------------------------------
export function createAppKit(options: SolanaAppKitOptions) {
  const solanaAdapter = new SolanaAdapter({
    wallets: options.wallets
  })

  return new AppKit({
    ...options,
    sdkVersion: `html-solana-${packageJson.version}`,
    adapters: [solanaAdapter]
  })
}
