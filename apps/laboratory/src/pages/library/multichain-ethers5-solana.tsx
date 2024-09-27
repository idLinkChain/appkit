import { createAppKit } from '@web3inno/appkit/react'
import { EthersAdapter } from '@web3inno/appkit-adapter-ethers'
import { SolanaAdapter } from '@web3inno/appkit-adapter-solana'
import { ThemeStore } from '../../utils/StoreUtil'
import { ConstantsUtil } from '../../utils/ConstantsUtil'
import { mainnet } from '@web3inno/appkit/networks'
import { AppKitButtons } from '../../components/AppKitButtons'
import { HuobiWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { MultiChainTestsEthersSolana } from '../../components/MultiChainTestsEthersSolana'

const networks = ConstantsUtil.AllNetworks

const etherAdapter = new EthersAdapter()

const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new HuobiWalletAdapter(), new SolflareWalletAdapter()]
})

const modal = createAppKit({
  adapters: [etherAdapter, solanaWeb3JsAdapter],
  projectId: ConstantsUtil.ProjectId,
  networks,
  defaultNetwork: mainnet,
  features: {
    analytics: true
  },
  termsConditionsUrl: 'https://reown.com/terms-of-service',
  privacyPolicyUrl: 'https://reown.com/privacy-policy'
})

ThemeStore.setModal(modal)

export default function MultiChainEthers5Solana() {
  return (
    <>
      <AppKitButtons />
      <MultiChainTestsEthersSolana />
    </>
  )
}
