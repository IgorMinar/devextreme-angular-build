import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoMarkerComponent extends NestedOption {
    label: {
        customizeText?: Function;
        format?: DevExpress.ui.format | string;
    };
    separatorHeight: number;
    textLeftIndent: number;
    textTopIndent: number;
    topIndent: number;
    visible: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoMarkerModule {
}
