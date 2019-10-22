/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
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
