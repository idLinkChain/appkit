'use client'

import { AppKit, AccountController, CoreHelperUtil } from '@web3inno/appkit'
import type { AppKitOptions } from '@web3inno/appkit'
import { EthersAdapter, type AdapterOptions } from '@web3inno/appkit-adapter-ethers'
import { getAppKit } from '@web3inno/appkit/library/react'
import { useSnapshot } from 'valtio'
import type { CaipNetwork } from '@web3inno/appkit-common'
import packageJson from '../package.json' assert { type: 'json' }

// -- Types -------------------------------------------------------------
export type { AdapterOptions } from '@web3inno/appkit-adapter-ethers'

// -- Setup -------------------------------------------------------------------
let appkit: AppKit | undefined = undefined
let ethersAdapter: EthersAdapter | undefined = undefined

export type EthersAppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> &
  AdapterOptions

export function createAppKit(options: EthersAppKitOptions) {
  ethersAdapter = new EthersAdapter()
  appkit = new AppKit({
    ...options,
    sdkVersion: `react-ethers-${packageJson.version}`,
    adapters: [ethersAdapter]
  })
  getAppKit(appkit)

  return appkit
}

// -- Hooks -------------------------------------------------------------------
export function useDisconnect() {
  async function disconnect() {
    await ethersAdapter?.disconnect()
  }

  return {
    disconnect
  }
}

export function useSwitchNetwork() {
  // Breaking change
  async function switchNetwork(caipNetwork: CaipNetwork) {
    await ethersAdapter?.switchNetwork(caipNetwork)
  }

  return {
    switchNetwork
  }
}

export function useAppkitAccount() {
  const { caipAddress, status } = useSnapshot(AccountController.state)

  return {
    address: CoreHelperUtil.getPlainAddress(caipAddress),
    isConnected: Boolean(caipAddress),
    status
  }
}

export {
  useAppKitTheme,
  useAppKit,
  useAppKitState,
  useAppKitEvents,
  useWalletInfo
} from '@web3inno/appkit/library/react'
