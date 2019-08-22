import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoEditingComponent extends NestedOption {
    allowAdding: boolean | Function;
    allowDeleting: boolean | Function;
    allowUpdating: boolean | Function;
    form: DevExpress.ui.dxFormOptions;
    mode: string;
    popup: DevExpress.ui.dxPopupOptions;
    refreshMode: string;
    selectTextOnEditStart: boolean;
    startEditAction: string;
    texts: {
        addRow?: string;
        cancelAllChanges?: string;
        cancelRowChanges?: string;
        confirmDeleteMessage?: string;
        confirmDeleteTitle?: string;
        deleteRow?: string;
        editRow?: string;
        saveAllChanges?: string;
        saveRowChanges?: string;
        undeleteRow?: string;
        validationCancelChanges?: string;
    } | {
        addRow?: string;
        addRowToNode?: string;
        cancelAllChanges?: string;
        cancelRowChanges?: string;
        confirmDeleteMessage?: string;
        confirmDeleteTitle?: string;
        deleteRow?: string;
        editRow?: string;
        saveAllChanges?: string;
        saveRowChanges?: string;
        undeleteRow?: string;
        validationCancelChanges?: string;
    };
    useIcons: boolean;
    allowDragging: boolean;
    allowResizing: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoEditingModule {
}
