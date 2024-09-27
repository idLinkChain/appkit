import { AppKit } from '../src/client.js'
import type { AppKitOptions } from '../src/utils/TypesUtil.js'
import { getAppKit } from '../src/library/react/index.js'
import packageJson from '../package.json' assert { type: 'json' }
import { CoreHelperUtil } from '@web3inno/appkit-core'

// -- Views ------------------------------------------------------------
export * from '@web3inno/appkit-scaffold-ui'

// -- Hooks ------------------------------------------------------------
export * from '../src/library/react/index.js'

// -- Utils & Other -----------------------------------------------------
export * from '../src/utils/index.js'
export type * from '@web3inno/appkit-core'
export type { CaipNetwork, CaipAddress, CaipNetworkId } from '@web3inno/appkit-common'
export { CoreHelperUtil, AccountController, NetworkController } from '@web3inno/appkit-core'

export let modal: AppKit | undefined = undefined

type CreateAppKit = Omit<AppKitOptions, 'sdkType' | 'sdkVersion'>

export function createAppKit(options: CreateAppKit) {
  if (!modal) {
    modal = new AppKit({
      ...options,
      sdkVersion: CoreHelperUtil.generateSdkVersion(
        options.adapters ?? [],
        'react',
        packageJson.version
      )
    })
    getAppKit(modal)
  }

  return modal
}

export { AppKit }
export type { AppKitOptions }

// -- Hooks ------------------------------------------------------------
export * from '../src/library/react/index.js'
export { useAppKitAccount, useAppKitNetwork } from '@web3inno/appkit-core/react'
