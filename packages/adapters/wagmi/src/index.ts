import '@web3inno/appkit-polyfills'

export { WagmiAdapter } from './client.js'

// -- Types
export type { AdapterOptions } from './client.js'

// -- Connectors
export { authConnector } from './connectors/AuthConnector.js'

// -- Utils
export { convertToAppKitChains } from './utils/helpers.js'
