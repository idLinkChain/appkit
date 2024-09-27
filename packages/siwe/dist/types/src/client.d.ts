import { type SIWEControllerClient } from '../core/controller/SIWEController.js';
import type { SIWEClientMethods, SIWEConfig, SIWECreateMessageArgs, SIWEMessageArgs, SIWESession, SIWEVerifyMessageArgs } from '../core/utils/TypeUtils.js';
export declare class AppKitSIWEClient {
    options: SIWEControllerClient['options'];
    methods: SIWEClientMethods;
    constructor(siweConfig: SIWEConfig);
    getNonce(address?: string): Promise<string>;
    getMessageParams?(): Promise<SIWEMessageArgs>;
    createMessage(args: SIWECreateMessageArgs): string;
    verifyMessage(args: SIWEVerifyMessageArgs): Promise<boolean>;
    getSession(): Promise<SIWESession>;
    signIn(): Promise<SIWESession>;
    signOut(): Promise<boolean>;
}
