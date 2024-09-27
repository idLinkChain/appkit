'use client'

import { createAppKit } from '@web3inno/appkit/react'
import { EthersAdapter } from '@web3inno/appkit-adapter-ethers'
import { mainnet, arbitrum, avalanche, base, optimism, polygon } from '@web3inno/appkit/networks'
import { type ReactNode } from 'react'

const projectId = 'Your project ID'

const ethersAdapter = new EthersAdapter()

createAppKit({
  adapters: [ethersAdapter],
  projectId,
  networks: [mainnet, arbitrum, avalanche, base, optimism, polygon],
  metadata: {
    name: 'My App',
    description: 'My app description',
    url: 'https://myapp.com',
    icons: ['https://myapp.com/favicon.ico']
  },
  enableEIP6963: true,
  enableCoinbase: true
})

function ContextProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export default ContextProvider
