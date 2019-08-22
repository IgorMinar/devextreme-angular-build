import { TransferState } from '@angular/platform-browser';
export declare class DxServerTransferStateModule {
    private state;
    private platformId;
    constructor(state: TransferState, platformId: any);
    generateKey(args: any): string;
}
