import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormat } from './base/format';
export declare class DxoValueFormatComponent extends DxoFormat {
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoValueFormatModule {
}
