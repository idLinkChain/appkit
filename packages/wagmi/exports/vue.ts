import { AppKit } from '@web3inno/appkit'
import type { AppKitOptions } from '@web3inno/appkit'
import { WagmiAdapter, type AdapterOptions } from '@web3inno/appkit-adapter-wagmi'
import { getAppKit } from '@web3inno/appkit/library/vue'
import type { Config } from '@wagmi/core'
import packageJson from '../package.json' assert { type: 'json' }

// -- Setup -------------------------------------------------------------------
let appkit: AppKit | undefined = undefined

export type WagmiAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> &
  AdapterOptions<Config>

export function createAppKit(options: WagmiAppKitOptions) {
  const wagmiAdapter = new WagmiAdapter({
    networks: options.networks,
    projectId: options.projectId
  })
  appkit = new AppKit({
    ...options,
    sdkVersion: `vue-wagmi-${packageJson.version}`,
    adapters: [wagmiAdapter]
  })
  getAppKit(appkit)

  return appkit
}

// -- Composites --------------------------------------------------------------
export {
  useAppKitTheme,
  useAppKit,
  useAppKitState,
  useAppKitEvents,
  useWalletInfo
} from '@web3inno/appkit/library/vue'
