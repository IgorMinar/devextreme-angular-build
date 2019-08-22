import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoAdapterComponent extends NestedOption {
    applyValidationResults: Function;
    bypass: Function;
    focus: Function;
    getValue: Function;
    reset: Function;
    validationRequestsCallbacks: any | Array<Function>;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoAdapterModule {
}
