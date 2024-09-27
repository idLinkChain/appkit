import { ApiController } from '../controllers/ApiController.js';
import { AssetController } from '../controllers/AssetController.js';
const namespaceImageIds = {
    // Ethereum
    eip155: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
    // Solana
    solana: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
    // Polkadot
    polkadot: ''
};
export const AssetUtil = {
    async fetchWalletImage(imageId) {
        if (!imageId) {
            return undefined;
        }
        await ApiController._fetchWalletImage(imageId);
        return this.getWalletImageById(imageId);
    },
    getWalletImageById(imageId) {
        if (!imageId) {
            return undefined;
        }
        return AssetController.state.walletImages[imageId];
    },
    getWalletImage(wallet) {
        if (wallet?.image_url) {
            return wallet?.image_url;
        }
        if (wallet?.image_id) {
            return AssetController.state.walletImages[wallet.image_id];
        }
        return undefined;
    },
    getNetworkImage(network) {
        if (network?.imageUrl) {
            return network?.imageUrl;
        }
        if (network?.imageId) {
            return AssetController.state.networkImages[network.imageId];
        }
        return undefined;
    },
    getNetworkImageById(imageId) {
        if (!imageId) {
            return undefined;
        }
        return AssetController.state.networkImages[imageId];
    },
    getConnectorImage(connector) {
        if (connector?.imageUrl) {
            return connector.imageUrl;
        }
        if (connector?.imageId) {
            return AssetController.state.connectorImages[connector.imageId];
        }
        return undefined;
    },
    getChainImage(chain) {
        return AssetController.state.networkImages[namespaceImageIds[chain]];
    }
};
//# sourceMappingURL=AssetUtil.js.map