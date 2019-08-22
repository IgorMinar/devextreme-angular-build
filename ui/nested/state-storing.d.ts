import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoStateStoringComponent extends NestedOption {
    customLoad: Function;
    customSave: Function;
    enabled: boolean;
    savingTimeout: number;
    storageKey: string;
    type: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoStateStoringModule {
}
