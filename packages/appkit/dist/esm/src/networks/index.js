export function getBlockchainApiRpcUrl(chainId, namespace) {
    return `https://rpc.walletconnect.org/v1/?chainId=${namespace}:${chainId}`;
}
export const mainnet = {
    id: 'eip155:1',
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: getBlockchainApiRpcUrl(1, 'eip155'),
    chainNamespace: 'eip155'
};
export const arbitrum = {
    id: 'eip155:42161',
    chainId: 42161,
    name: 'Arbitrum',
    currency: 'ETH',
    explorerUrl: 'https://arbiscan.io',
    rpcUrl: getBlockchainApiRpcUrl(42161, 'eip155'),
    chainNamespace: 'eip155'
};
export const avalanche = {
    id: 'eip155:43114',
    chainId: 43114,
    name: 'Avalanche',
    currency: 'AVAX',
    explorerUrl: 'https://snowtrace.io',
    rpcUrl: getBlockchainApiRpcUrl(43114, 'eip155'),
    chainNamespace: 'eip155'
};
export const binanceSmartChain = {
    id: 'eip155:56',
    chainId: 56,
    name: 'Binance Smart Chain',
    currency: 'BNB',
    explorerUrl: 'https://bscscan.com',
    rpcUrl: getBlockchainApiRpcUrl(56, 'eip155'),
    chainNamespace: 'eip155'
};
export const optimism = {
    id: 'eip155:10',
    chainId: 10,
    name: 'Optimism',
    currency: 'ETH',
    explorerUrl: 'https://optimistic.etherscan.io',
    rpcUrl: getBlockchainApiRpcUrl(10, 'eip155'),
    chainNamespace: 'eip155'
};
export const polygon = {
    id: 'eip155:137',
    chainId: 137,
    name: 'Polygon',
    currency: 'MATIC',
    explorerUrl: 'https://polygonscan.com',
    rpcUrl: getBlockchainApiRpcUrl(137, 'eip155'),
    chainNamespace: 'eip155'
};
export const gnosis = {
    id: 'eip155:100',
    chainId: 100,
    name: 'Gnosis',
    currency: 'xDAI',
    explorerUrl: 'https://gnosis.blockscout.com',
    rpcUrl: getBlockchainApiRpcUrl(100, 'eip155'),
    chainNamespace: 'eip155'
};
export const zkSync = {
    id: 'eip155:324',
    chainId: 324,
    name: 'ZkSync',
    currency: 'ETH',
    explorerUrl: 'https://explorer.zksync.io',
    rpcUrl: getBlockchainApiRpcUrl(324, 'eip155'),
    chainNamespace: 'eip155'
};
export const zora = {
    id: 'eip155:7777777',
    chainId: 7777777,
    name: 'Zora',
    currency: 'ETH',
    explorerUrl: 'https://explorer.zora.energy',
    rpcUrl: getBlockchainApiRpcUrl(7777777, 'eip155'),
    chainNamespace: 'eip155'
};
export const celo = {
    id: 'eip155:42220',
    chainId: 42220,
    name: 'Celo',
    currency: 'CELO',
    explorerUrl: 'https://explorer.celo.org/mainnet',
    rpcUrl: getBlockchainApiRpcUrl(42220, 'eip155'),
    chainNamespace: 'eip155'
};
export const base = {
    id: 'eip155:8453',
    chainId: 8453,
    name: 'Base',
    currency: 'BASE',
    explorerUrl: 'https://basescan.org',
    rpcUrl: getBlockchainApiRpcUrl(8453, 'eip155'),
    chainNamespace: 'eip155'
};
export const aurora = {
    id: 'eip155:1313161554',
    chainId: 1313161554,
    name: 'Aurora',
    currency: 'ETH',
    explorerUrl: 'https://explorer.aurora.dev',
    rpcUrl: getBlockchainApiRpcUrl(1313161554, 'eip155'),
    chainNamespace: 'eip155'
};
export const sepolia = {
    id: 'eip155:11155111',
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://sepolia.etherscan.io',
    rpcUrl: getBlockchainApiRpcUrl(11155111, 'eip155'),
    chainNamespace: 'eip155'
};
export const baseSepolia = {
    id: 'eip155:84532',
    chainId: 84532,
    name: 'Base Sepolia',
    currency: 'BASE',
    explorerUrl: 'https://sepolia.basescan.org',
    rpcUrl: getBlockchainApiRpcUrl(84532, 'eip155'),
    chainNamespace: 'eip155'
};
export const solana = {
    id: 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    chainId: '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    name: 'Solana',
    currency: 'SOL',
    explorerUrl: 'https://solscan.io',
    rpcUrl: getBlockchainApiRpcUrl('5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp', 'solana'),
    chainNamespace: 'solana'
};
export const solanaTestnet = {
    id: 'solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
    chainId: '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
    name: 'Solana Testnet',
    currency: 'SOL',
    explorerUrl: 'https://explorer.solana.com/?cluster=testnet',
    rpcUrl: getBlockchainApiRpcUrl('4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z', 'solana'),
    chainNamespace: 'solana'
};
export const solanaDevnet = {
    id: 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
    chainId: 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
    name: 'Solana Devnet',
    currency: 'SOL',
    explorerUrl: 'https://explorer.solana.com/?cluster=devnet',
    rpcUrl: getBlockchainApiRpcUrl('EtWTRABZaYq6iMfeYKouRu166VU2xqa1', 'solana'),
    chainNamespace: 'solana'
};
export const allChains = [
    mainnet,
    arbitrum,
    avalanche,
    binanceSmartChain,
    optimism,
    polygon,
    gnosis,
    zkSync,
    zora,
    celo,
    base,
    aurora,
    sepolia,
    baseSepolia,
    solana,
    solanaTestnet,
    solanaDevnet
];
//# sourceMappingURL=index.js.map