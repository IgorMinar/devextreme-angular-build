import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoBehaviorComponent extends NestedOption {
    allowSlidersSwap: boolean;
    animationEnabled: boolean;
    callValueChanged: string;
    manualRangeSelectionEnabled: boolean;
    moveSelectedRangeByClick: boolean;
    snapToTicks: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoBehaviorModule {
}
