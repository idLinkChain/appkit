import { getAppKit } from '@web3inno/appkit/library/vue'
import { AppKit } from '@web3inno/appkit'
import { SolanaAdapter, useAppKitConnection } from '@web3inno/appkit-adapter-solana/vue'
import type { Provider } from '@web3inno/appkit-adapter-solana/vue'
import type { CaipNetwork } from '@web3inno/appkit-common'
import type { SolanaAppKitOptions } from './options'
import packageJson from '../package.json' assert { type: 'json' }

// -- Types -------------------------------------------------------------------
export type { SolanaAppKitOptions, Provider }

// -- Setup -------------------------------------------------------------------
let appkit: AppKit | undefined = undefined
let solanaAdapter: SolanaAdapter | undefined = undefined

export function createAppKit(options: SolanaAppKitOptions) {
  solanaAdapter = new SolanaAdapter({
    wallets: options.wallets
  })
  appkit = new AppKit({
    ...options,
    sdkVersion: `vue-solana-${packageJson.version}`,
    adapters: [solanaAdapter]
  })
  getAppKit(appkit)

  return appkit
}

// -- Composites --------------------------------------------------------------
export function useDisconnect() {
  async function disconnect() {
    await solanaAdapter?.connectionControllerClient?.disconnect()
  }

  return {
    disconnect
  }
}

export function useSwitchNetwork() {
  async function switchNetwork(chainId: string) {
    await solanaAdapter?.switchNetwork({ id: chainId } as CaipNetwork)
  }

  return {
    switchNetwork
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function useAppKitError() {
  // eslint-disable-next-line no-warning-comments
  // TODO fix error hook
}

export {
  useAppKitTheme,
  useAppKit,
  useAppKitState,
  useAppKitEvents
} from '@web3inno/appkit/library/vue'
export { useAppKitConnection }
