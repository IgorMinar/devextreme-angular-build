import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoSubtitleComponent extends NestedOption {
    font: DevExpress.viz.Font;
    offset: number;
    text: string;
    textOverflow: string;
    wordWrap: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoSubtitleModule {
}
