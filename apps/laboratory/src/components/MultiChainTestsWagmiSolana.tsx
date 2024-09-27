import * as React from 'react'
import { useAppKitState } from '@web3inno/appkit/react'

import { SolanaTests } from './Solana/SolanaTests'
import { WagmiTests } from './Wagmi/WagmiTests'
import { AppKitNetworkInfo } from './AppKitNetworkInfo'

export function MultiChainTestsWagmiSolana() {
  const { activeChain } = useAppKitState()

  return (
    <>
      <AppKitNetworkInfo />
      {activeChain === 'eip155' ? <WagmiTests /> : null}
      {activeChain === 'solana' ? <SolanaTests /> : null}
    </>
  )
}
