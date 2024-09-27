import { AppKit } from '../src/client.js'
import type { AppKitOptions } from '../src/utils/TypesUtil.js'
import packageJson from '../package.json' assert { type: 'json' }
import { CoreHelperUtil } from '@web3inno/appkit-core'

// -- Views ------------------------------------------------------------
export * from '@web3inno/appkit-scaffold-ui'

// -- Utils & Other -----------------------------------------------------
export * from '../src/utils/index.js'
export type * from '@web3inno/appkit-core'
export type { CaipNetwork, CaipAddress, CaipNetworkId } from '@web3inno/appkit-common'
export { CoreHelperUtil, AccountController, NetworkController } from '@web3inno/appkit-core'

type CreateAppKit = Omit<AppKitOptions, 'sdkType' | 'sdkVersion'>

export function createAppKit(options: CreateAppKit) {
  return new AppKit({
    ...options,
    sdkVersion: CoreHelperUtil.generateSdkVersion(
      options.adapters ?? [],
      'html',
      packageJson.version
    )
  })
}

export { AppKit }
export type { AppKitOptions }
