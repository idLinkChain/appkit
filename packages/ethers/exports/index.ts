import { AppKit } from '@web3inno/appkit'
import type { AppKitOptions } from '@web3inno/appkit'
import { EthersAdapter, type AdapterOptions } from '@web3inno/appkit-adapter-ethers'
import packageJson from '../package.json' assert { type: 'json' }

// -- Types -------------------------------------------------------------
export type { AdapterOptions } from '@web3inno/appkit-adapter-ethers'

// -- Setup -------------------------------------------------------------
export type EthersAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> &
  AdapterOptions

export function createAppKit(options: EthersAppKitOptions) {
  const ethersAdapter = new EthersAdapter()

  return new AppKit({
    ...options,
    sdkVersion: `html-ethers-${packageJson.version}`,
    adapters: [ethersAdapter]
  })
}
