'use client'

import { AppKit } from '@web3inno/appkit'
import {
  SolanaAdapter,
  type Provider,
  useAppKitConnection
} from '@web3inno/appkit-adapter-solana/react'
import { getAppKit } from '@web3inno/appkit/library/react'
import type { SolanaAppKitOptions } from './options.js'
import packageJson from '../package.json' assert { type: 'json' }

// -- Types -------------------------------------------------------------------
export type { SolanaAppKitOptions, Provider }

// -- Setup -------------------------------------------------------------
let appkit: AppKit | undefined = undefined
let solanaAdapter: SolanaAdapter | undefined = undefined

export function createAppKit(options: SolanaAppKitOptions) {
  solanaAdapter = new SolanaAdapter({
    wallets: options.wallets
  })
  appkit = new AppKit({
    ...options,
    sdkVersion: `react-solana-${packageJson.version}`,
    adapters: [solanaAdapter]
  })
  getAppKit(appkit)

  return appkit
}

// -- Hooks -------------------------------------------------------------------
export function useDisconnect() {
  async function disconnect() {
    await solanaAdapter?.connectionControllerClient?.disconnect()
  }

  return {
    disconnect
  }
}

export {
  useAppKitTheme,
  useAppKit,
  useAppKitState,
  useAppKitEvents
} from '@web3inno/appkit/library/react'
export { useAppKitConnection }
