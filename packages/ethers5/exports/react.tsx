'use client'

import { AppKit } from '@web3inno/appkit'
import type { AppKitOptions } from '@web3inno/appkit'
import type { CaipNetwork } from '@web3inno/appkit-common'
import { ProviderUtil } from '@web3inno/appkit/store'
import { Ethers5Adapter, type AdapterOptions } from '@web3inno/appkit-adapter-ethers5'
import { getAppKit } from '@web3inno/appkit/library/react'
import { useSnapshot } from 'valtio'
import { ethers } from 'ethers'
import packageJson from '../package.json' assert { type: 'json' }

// -- Setup -------------------------------------------------------------------
let appkit: AppKit | undefined = undefined
let ethersAdapter: Ethers5Adapter | undefined = undefined

export type Ethers5AppKitOptions = Omit<AppKitOptions, 'adapters' | 'sdkType' | 'sdkVersion'> &
  AdapterOptions

export function createAppKit(options: Ethers5AppKitOptions) {
  ethersAdapter = new Ethers5Adapter()
  appkit = new AppKit({
    ...options,
    sdkVersion: `react-ethers5-${packageJson.version}`,
    adapters: [ethersAdapter]
  })
  getAppKit(appkit)

  return appkit
}

// -- Hooks -------------------------------------------------------------------
export function useAppKitProvider() {
  const { providers, providerIds } = useSnapshot(ProviderUtil.state)

  const walletProvider = providers['eip155'] as ethers.providers.ExternalProvider | undefined
  const walletProviderType = providerIds['eip155']

  return {
    walletProvider,
    walletProviderType
  }
}

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

export {
  useAppKitTheme,
  useAppKit,
  useAppKitState,
  useAppKitEvents,
  useWalletInfo
} from '@web3inno/appkit/library/react'
