import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoZoomAndPanComponent extends NestedOption {
    allowMouseWheel: boolean;
    allowTouchGestures: boolean;
    argumentAxis: string;
    dragBoxStyle: {
        color?: string;
        opacity?: number;
    };
    dragToZoom: boolean;
    panKey: string;
    valueAxis: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoZoomAndPanModule {
}
