import { AppKit } from '@web3inno/appkit'
import type { AppKitOptions } from '@web3inno/appkit'
import { WagmiAdapter, type AdapterOptions } from '@web3inno/appkit-adapter-wagmi'
import { getAppKit } from '@web3inno/appkit/library/react'
import { type Config, type CreateConfigParameters } from 'wagmi'
import packageJson from '../../package.json' assert { type: 'json' }

// -- Setup -------------------------------------------------------------------
let appkit: AppKit | undefined = undefined

export type WagmiAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> &
  AdapterOptions<Config> & {
    wagmiConfig?: CreateConfigParameters
  }

export function createAppKit(options: WagmiAppKitOptions) {
  const wagmiAdapter = new WagmiAdapter({
    ...options.wagmiConfig,
    networks: options.networks,
    projectId: options.projectId
  })

  appkit = new AppKit({
    ...options,
    sdkVersion: `react-wagmi-${packageJson.version}`,
    adapters: [wagmiAdapter]
  })
  getAppKit(appkit)

  return appkit
}

// -- Hooks -------------------------------------------------------------------
export {
  useAppKitTheme,
  useAppKit,
  useAppKitState,
  useAppKitEvents,
  useWalletInfo
} from '@web3inno/appkit/library/react'
