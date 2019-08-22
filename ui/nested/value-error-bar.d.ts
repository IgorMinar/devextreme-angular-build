import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoValueErrorBarComponent extends NestedOption {
    color: string;
    displayMode: string;
    edgeLength: number;
    highValueField: string;
    lineWidth: number;
    lowValueField: string;
    opacity: number;
    type: string;
    value: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoValueErrorBarModule {
}
