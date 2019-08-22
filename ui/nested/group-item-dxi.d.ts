import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiGroupItemComponent extends CollectionNestedOption {
    alignByColumn: boolean;
    column: string;
    customizeText: Function;
    displayFormat: string;
    name: string;
    showInColumn: string;
    showInGroupFooter: boolean;
    skipEmptyValues: boolean;
    summaryType: string;
    valueFormat: DevExpress.ui.format | string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiGroupItemModule {
}
