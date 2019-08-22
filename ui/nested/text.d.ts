import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoTextComponent extends NestedOption {
    customizeText: Function;
    font: DevExpress.viz.Font;
    format: DevExpress.ui.format | string;
    indent: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoTextModule {
}
