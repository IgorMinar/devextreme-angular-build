import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoSliderMarkerComponent extends NestedOption {
    color: string;
    customizeText: Function;
    font: DevExpress.viz.Font;
    format: DevExpress.ui.format | string;
    invalidRangeColor: string;
    paddingLeftRight: number;
    paddingTopBottom: number;
    placeholderHeight: number;
    visible: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoSliderMarkerModule {
}
