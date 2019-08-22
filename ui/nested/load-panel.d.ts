import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoLoadPanelComponent extends NestedOption {
    enabled: boolean;
    height: number;
    indicatorSrc: string;
    shading: boolean;
    shadingColor: string;
    showIndicator: boolean;
    showPane: boolean;
    text: string;
    width: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoLoadPanelModule {
}
