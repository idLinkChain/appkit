import { AppKit } from '@web3inno/appkit'
import type { AppKitOptions } from '@web3inno/appkit'
import { Ethers5Adapter, type AdapterOptions } from '@web3inno/appkit-adapter-ethers5'
import packageJson from '../package.json' assert { type: 'json' }

// -- Types -------------------------------------------------------------
export type { AdapterOptions } from '@web3inno/appkit-adapter-ethers5'

// -- Setup -------------------------------------------------------------
type EthersAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> &
  AdapterOptions

export function createAppKit(options: EthersAppKitOptions) {
  const ethers5Adapter = new Ethers5Adapter()

  return new AppKit({
    ...options,
    sdkVersion: `html-ethers5-${packageJson.version}`,
    adapters: [ethers5Adapter]
  })
}
