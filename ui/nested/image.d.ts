import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoImageComponent extends NestedOption {
    height: number | {
        rangeMaxPoint?: number;
        rangeMinPoint?: number;
    };
    url: string | {
        rangeMaxPoint?: string;
        rangeMinPoint?: string;
    };
    width: number | {
        rangeMaxPoint?: number;
        rangeMinPoint?: number;
    };
    location: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoImageModule {
}
