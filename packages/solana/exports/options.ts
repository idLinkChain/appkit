import type { AppKitOptions } from '@web3inno/appkit'
import type { AdapterOptions } from '@web3inno/appkit-adapter-solana'

export type SolanaAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> &
  AdapterOptions
