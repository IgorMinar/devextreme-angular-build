import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoTitleComponent extends NestedOption {
    font: DevExpress.viz.Font;
    horizontalAlignment: string;
    margin: {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    } | number;
    placeholderSize: number;
    subtitle: string | {
        font?: DevExpress.viz.Font;
        offset?: number;
        text?: string;
    } | {
        font?: DevExpress.viz.Font;
        offset?: number;
        text?: string;
        textOverflow?: string;
        wordWrap?: string;
    };
    text: string;
    verticalAlignment: string;
    textOverflow: string;
    wordWrap: string;
    alignment: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoTitleModule {
}
