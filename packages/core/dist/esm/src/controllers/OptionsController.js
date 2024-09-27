import { subscribeKey as subKey } from 'valtio/vanilla/utils';
import { proxy } from 'valtio/vanilla';
import { ConstantsUtil } from '../utils/ConstantsUtil.js';
// -- State --------------------------------------------- //
const state = proxy({
    features: ConstantsUtil.DEFAULT_FEATURES,
    projectId: '',
    sdkType: 'appkit',
    sdkVersion: 'html-wagmi-undefined'
});
// -- Controller ---------------------------------------- //
export const OptionsController = {
    state,
    subscribeKey(key, callback) {
        return subKey(state, key, callback);
    },
    setOptions(options) {
        Object.assign(state, options);
    },
    setFeatures(features) {
        if (!features) {
            return;
        }
        Object.entries(features).forEach(([key, value]) => {
            if (!state.features) {
                state.features = ConstantsUtil.DEFAULT_FEATURES;
            }
            if (key in state.features) {
                ;
                state.features[key] = value;
            }
        });
    },
    setProjectId(projectId) {
        state.projectId = projectId;
    },
    setAllWallets(allWallets) {
        state.allWallets = allWallets;
    },
    setAllEthWallets(allEthWallets) {
        state.allEthWallets = allEthWallets;
    },
    setIncludeWalletIds(includeWalletIds) {
        state.includeWalletIds = includeWalletIds;
    },
    setExcludeWalletIds(excludeWalletIds) {
        state.excludeWalletIds = excludeWalletIds;
    },
    setFeaturedWalletIds(featuredWalletIds) {
        state.featuredWalletIds = featuredWalletIds;
    },
    setTokens(tokens) {
        state.tokens = tokens;
    },
    setTermsConditionsUrl(termsConditionsUrl) {
        state.termsConditionsUrl = termsConditionsUrl;
    },
    setPrivacyPolicyUrl(privacyPolicyUrl) {
        state.privacyPolicyUrl = privacyPolicyUrl;
    },
    setCustomWallets(customWallets) {
        state.customWallets = customWallets;
    },
    setIsSiweEnabled(isSiweEnabled) {
        state.isSiweEnabled = isSiweEnabled;
    },
    setIsUniversalProvider(isUniversalProvider) {
        state.isUniversalProvider = isUniversalProvider;
    },
    setSdkVersion(sdkVersion) {
        state.sdkVersion = sdkVersion;
    },
    setMetadata(metadata) {
        state.metadata = metadata;
    },
    setDisableAppend(disableAppend) {
        state.disableAppend = disableAppend;
    },
    setEIP6963Enabled(enableEIP6963) {
        state.enableEIP6963 = enableEIP6963;
    },
    setEnableWalletConnect(enableWalletConnect) {
        state.enableWalletConnect = enableWalletConnect;
    },
    setEnableWallets(enableWallets) {
        state.enableWallets = enableWallets;
    },
    setHasMultipleAddresses(hasMultipleAddresses) {
        state.hasMultipleAddresses = hasMultipleAddresses;
    }
};
//# sourceMappingURL=OptionsController.js.map