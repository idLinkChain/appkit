import { ethers } from 'ethers5';
import { type Provider } from '@web3inno/appkit-utils/ethers';
import type { EstimateGasTransactionArgs, SendTransactionArgs, WriteContractArgs } from '@web3inno/appkit-core';
import type { AppKit } from '@web3inno/appkit';
export declare const Ethers5Methods: {
    signMessage: (message: string, provider: Provider, address: string) => Promise<`0x${string}`>;
    estimateGas: (data: EstimateGasTransactionArgs, provider: Provider, address: string, networkId: number) => Promise<bigint>;
    sendTransaction: (data: SendTransactionArgs, provider: Provider, address: string, networkId: number) => Promise<`0x${string}`>;
    writeContract: (data: WriteContractArgs, provider: Provider, address: string, chainId: number) => Promise<any>;
    getEnsAddress: (value: string, appKit: AppKit) => Promise<string | false>;
    getEnsAvatar: (value: string, chainId: number) => Promise<string | false>;
    parseUnits: (value: string, _: number) => bigint;
    formatUnits: typeof ethers.utils.formatUnits;
};
