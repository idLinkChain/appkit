import { http } from '@wagmi/core'
import type { Chain } from '@wagmi/core/chains'
import { CoreHelperUtil } from '@web3inno/appkit-core'
import { ConstantsUtil, PresetsUtil } from '@web3inno/appkit-utils'

// -- Helpers ------------------------------------------------------------------
const RPC_URL = CoreHelperUtil.getBlockchainApiUrl()

// -- Types --------------------------------------------------------------------
interface Options {
  projectId: string
}

// -- Provider -----------------------------------------------------------------
export function walletConnectProvider({ projectId }: Options) {
  return function provider(chain: Chain) {
    if (!PresetsUtil.WalletConnectRpcChainIds.includes(chain.id)) {
      return null
    }

    const baseHttpUrl = `${RPC_URL}/v1/?chainId=${ConstantsUtil.EIP155}:${chain.id}&projectId=${projectId}`

    return http(baseHttpUrl)
  }
}
