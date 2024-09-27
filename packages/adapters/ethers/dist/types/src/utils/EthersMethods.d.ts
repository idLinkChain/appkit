import { parseUnits, formatUnits } from 'ethers';
import { type Provider } from '@reown/appkit-utils/ethers';
import type { EstimateGasTransactionArgs, SendTransactionArgs, WriteContractArgs } from '@reown/appkit-core';
import type { AppKit } from '@reown/appkit';
export declare const EthersMethods: {
    signMessage: (message: string, provider: Provider, address: string) => Promise<`0x${string}`>;
    estimateGas: (data: EstimateGasTransactionArgs, provider: Provider, address: string, networkId: number) => Promise<bigint>;
    sendTransaction: (data: SendTransactionArgs, provider: Provider, address: string, networkId: number) => Promise<`0x${string}`>;
    writeContract: (data: WriteContractArgs, provider: Provider, address: string, chainId: number) => Promise<any>;
    getEnsAddress: (value: string, appKit: AppKit) => Promise<string | false>;
    getEnsAvatar: (value: string, chainId: number) => Promise<string | false>;
    parseUnits: typeof parseUnits;
    formatUnits: typeof formatUnits;
};
