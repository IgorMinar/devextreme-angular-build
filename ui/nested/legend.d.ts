import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoLegendComponent extends NestedOption {
    backgroundColor: string;
    border: {
        color?: string;
        cornerRadius?: number;
        dashStyle?: string;
        opacity?: number;
        visible?: boolean;
        width?: number;
    };
    columnCount: number;
    columnItemSpacing: number;
    customizeHint: Function;
    customizeItems: Function;
    customizeText: Function;
    font: DevExpress.viz.Font;
    horizontalAlignment: string;
    itemsAlignment: string;
    itemTextFormat: DevExpress.ui.format | string;
    itemTextPosition: string;
    margin: number | {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    };
    markerSize: number;
    orientation: string;
    paddingLeftRight: number;
    paddingTopBottom: number;
    rowCount: number;
    rowItemSpacing: number;
    title: string | {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        margin?: {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        placeholderSize?: number;
        subtitle?: string | {
            font?: DevExpress.viz.Font;
            offset?: number;
            text?: string;
        };
        text?: string;
        verticalAlignment?: string;
    };
    verticalAlignment: string;
    visible: boolean;
    hoverMode: string;
    position: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoLegendModule {
}
