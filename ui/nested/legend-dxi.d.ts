import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiLegendComponent extends CollectionNestedOption {
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
    itemTextPosition: string;
    margin: number | {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    };
    markerColor: string;
    markerShape: string;
    markerSize: number;
    orientation: string;
    paddingLeftRight: number;
    paddingTopBottom: number;
    rowCount: number;
    rowItemSpacing: number;
    source: {
        grouping?: string;
        layer?: string;
    };
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
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiLegendModule {
}
