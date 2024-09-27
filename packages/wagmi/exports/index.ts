import { AppKit } from '@web3inno/appkit'
import type { AppKitOptions } from '@web3inno/appkit'
import { WagmiAdapter, type AdapterOptions } from '@web3inno/appkit-adapter-wagmi'
import type { Config } from 'wagmi'
import packageJson from '../package.json' assert { type: 'json' }

// -- Types -------------------------------------------------------------
export type { AdapterOptions } from '@web3inno/appkit-adapter-wagmi'

// -- Connectors --------------------------------------------------------
export { authConnector } from '@web3inno/appkit-adapter-wagmi'

// -- Setup -------------------------------------------------------------
export type WagmiAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> &
  AdapterOptions<Config>

export function createAppKit(options: WagmiAppKitOptions) {
  const wagmiAdapter = new WagmiAdapter({
    networks: options.networks,
    projectId: options.projectId
  })

  return new AppKit({
    ...options,
    sdkVersion: `html-wagmi-${packageJson.version}`,
    adapters: [wagmiAdapter]
  })
}
