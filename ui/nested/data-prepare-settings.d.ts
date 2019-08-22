import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoDataPrepareSettingsComponent extends NestedOption {
    checkTypeForAllData: boolean;
    convertToAxisDataType: boolean;
    sortingMethod: boolean | Function;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoDataPrepareSettingsModule {
}
