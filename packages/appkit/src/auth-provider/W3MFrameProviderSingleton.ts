import type { CaipNetworkId } from '@web3inno/appkit-common'
import { W3mFrameProvider } from '@web3inno/appkit-wallet'

export class W3mFrameProviderSingleton {
  private static instance: W3mFrameProvider

  // eslint-disable-next-line @typescript-eslint/no-empty-function -- This is a singleton
  private constructor() {}

  public static getInstance(projectId: string, chainId?: number | CaipNetworkId): W3mFrameProvider {
    if (!W3mFrameProviderSingleton.instance) {
      W3mFrameProviderSingleton.instance = new W3mFrameProvider(projectId, chainId)
    }

    return W3mFrameProviderSingleton.instance
  }
}
