/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxTreeList from 'devextreme/ui/tree_list';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiColumnComponent } from './nested/column-dxi';
/**
 * The TreeList is a widget that represents data from a local or remote source in the form of a multi-column tree view. This widget offers such features as sorting, filtering, editing, selection, etc.
 */
export declare class DxTreeListComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxTreeList;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies whether a user can reorder columns.
     */
    allowColumnReordering: boolean;
    /**
     * Specifies whether a user can resize columns.
     */
    allowColumnResizing: boolean;
    /**
     * Specifies whether all rows are expanded initially.
     */
    autoExpandAll: boolean;
    /**
     * Specifies whether data should be cached.
     */
    cacheEnabled: boolean;
    /**
     * Enables a hint that appears when a user hovers the mouse pointer over a cell with truncated content.
     */
    cellHintEnabled: boolean;
    columnAutoWidth: boolean;
    /**
     * Configures the column chooser.
     */
    columnChooser: {
        allowSearch?: boolean;
        emptyPanelText?: string;
        enabled?: boolean;
        height?: number;
        mode?: string;
        searchTimeout?: number;
        title?: string;
        width?: number;
    };
    /**
     * Configures column fixing.
     */
    columnFixing: {
        enabled?: boolean;
        texts?: {
            fix?: string;
            leftPosition?: string;
            rightPosition?: string;
            unfix?: string;
        };
    };
    /**
     * Specifies whether the widget should hide columns to adapt to the screen or container size. Ignored if allowColumnResizing is true and columnResizingMode is "widget".
     */
    columnHidingEnabled: boolean;
    /**
     * Specifies the minimum width of columns.
     */
    columnMinWidth: number;
    /**
     * Specifies how the widget resizes columns. Applies only if allowColumnResizing is true.
     */
    columnResizingMode: string;
    /**
     * Configures columns.
     */
    columns: Array<DevExpress.ui.dxTreeListColumn | string>;
    /**
     * Specifies the width for all data columns. Has a lower priority than the column.width option.
     */
    columnWidth: number;
    /**
     * Customizes columns after they are created.
     */
    customizeColumns: Function;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    /**
     * Notifies the widget of the used data structure.
     */
    dataStructure: string;
    /**
     * Specifies the format in which date-time values should be sent to the server. Use it only if you do not specify the dataSource at design time.
     */
    dateSerializationFormat: string;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Configures editing.
     */
    editing: {
        allowAdding?: boolean | Function;
        allowDeleting?: boolean | Function;
        allowUpdating?: boolean | Function;
        form?: DevExpress.ui.dxFormOptions;
        mode?: string;
        popup?: DevExpress.ui.dxPopupOptions;
        refreshMode?: string;
        selectTextOnEditStart?: boolean;
        startEditAction?: string;
        texts?: {
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
        useIcons?: boolean;
    };
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Indicates whether to show the error row.
     */
    errorRowEnabled: boolean;
    /**
     * Specifies keys of the initially expanded rows.
     */
    expandedRowKeys: Array<any>;
    /**
     * Specifies whether nodes appear expanded or collapsed after filtering is applied.
     */
    expandNodesOnFiltering: boolean;
    /**
     * Configures the integrated filter builder.
     */
    filterBuilder: DevExpress.ui.dxFilterBuilderOptions;
    /**
     * Configures the popup in which the integrated filter builder is shown.
     */
    filterBuilderPopup: DevExpress.ui.dxPopupOptions;
    /**
     * Specifies whether to show filtered rows with ancestors and descendants (full branch) or with ancestors only.
     */
    filterMode: string;
    /**
     * Configures the filter panel.
     */
    filterPanel: {
        customizeText?: Function;
        filterEnabled?: boolean;
        texts?: {
            clearFilter?: string;
            createFilter?: string;
            filterEnabledHint?: string;
        };
        visible?: boolean;
    };
    /**
     * Configures the filter row.
     */
    filterRow: {
        applyFilter?: string;
        applyFilterText?: string;
        betweenEndText?: string;
        betweenStartText?: string;
        operationDescriptions?: {
            between?: string;
            contains?: string;
            endsWith?: string;
            equal?: string;
            greaterThan?: string;
            greaterThanOrEqual?: string;
            lessThan?: string;
            lessThanOrEqual?: string;
            notContains?: string;
            notEqual?: string;
            startsWith?: string;
        };
        resetOperationText?: string;
        showAllText?: string;
        showOperationChooser?: boolean;
        visible?: boolean;
    };
    /**
     * Specifies whether to synchronize the filter row, header filter, and filter builder. The synchronized filter expression is stored in the filterValue option.
     */
    filterSyncEnabled: boolean;
    /**
     * Specifies a filter expression.
     */
    filterValue: any;
    /**
     * Specifies the index of the column focused initially or currently in the data row area.
     */
    focusedColumnIndex: number;
    /**
     * Specifies whether the focused row feature is enabled.
     */
    focusedRowEnabled: boolean;
    /**
     * Specifies the initially or currently focused grid row's index. Use it when focusedRowEnabled is true.
     */
    focusedRowIndex: number;
    /**
     * Specifies initially or currently focused grid row's key. Use it when focusedRowEnabled is true.
     */
    focusedRowKey: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies which data field defines whether the node has children.
     */
    hasItemsExpr: Function | string;
    /**
     * Configures the header filter feature.
     */
    headerFilter: {
        allowSearch?: boolean;
        height?: number;
        searchTimeout?: number;
        texts?: {
            cancel?: string;
            emptyValue?: string;
            ok?: string;
        };
        visible?: boolean;
        width?: number;
    };
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies whether to highlight rows and cells with edited data. repaintChangesOnly should be true.
     */
    highlightChanges: boolean;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    hoverStateEnabled: boolean;
    /**
     * Specifies which data field contains nested items. Set this option when your data has a hierarchical structure.
     */
    itemsExpr: Function | string;
    /**
     * Configures keyboard navigation.
     */
    keyboardNavigation: {
        editOnKeyPress?: boolean;
        enterKeyAction?: string;
        enterKeyDirection?: string;
    };
    /**
     * Specifies which data field provides keys for nodes.
     */
    keyExpr: Function | string;
    /**
     * Configures the load panel.
     */
    loadPanel: {
        enabled?: boolean;
        height?: number;
        indicatorSrc?: string;
        shading?: boolean;
        shadingColor?: string;
        showIndicator?: boolean;
        showPane?: boolean;
        text?: string;
        width?: number;
    };
    /**
     * Specifies text shown when the widget does not display any data.
     */
    noDataText: string;
    /**
     * Configures the pager.
     */
    pager: {
        allowedPageSizes?: Array<number>;
        infoText?: string;
        showInfo?: boolean;
        showNavigationButtons?: boolean;
        showPageSizeSelector?: boolean;
        visible?: boolean;
    };
    /**
     * Configures paging.
     */
    paging: {
        enabled?: boolean;
        pageIndex?: number;
        pageSize?: number;
    };
    /**
     * Specifies which data field provides parent keys.
     */
    parentIdExpr: Function | string;
    /**
     * Notifies the TreeList of the server's data processing operations. Applies only if data has a plain structure.
     */
    remoteOperations: {
        filtering?: boolean;
        grouping?: boolean;
        sorting?: boolean;
    };
    /**
     * Specifies whether to render the filter row, command columns, and columns with showEditorAlways set to true after other elements.
     */
    renderAsync: boolean;
    /**
     * Specifies whether to repaint only those cells whose data changed.
     */
    repaintChangesOnly: boolean;
    /**
     * Specifies the root node's identifier. Applies if dataStructure is "plain".
     */
    rootValue: any;
    /**
     * Specifies whether rows should be shaded differently.
     */
    rowAlternationEnabled: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Configures scrolling.
     */
    scrolling: {
        columnRenderingMode?: string;
        mode?: string;
        preloadEnabled?: boolean;
        rowRenderingMode?: string;
        scrollByContent?: boolean;
        scrollByThumb?: boolean;
        showScrollbar?: string;
        useNative?: boolean;
    };
    /**
     * Configures the search panel.
     */
    searchPanel: {
        highlightCaseSensitive?: boolean;
        highlightSearchText?: boolean;
        placeholder?: string;
        searchVisibleColumnsOnly?: boolean;
        text?: string;
        visible?: boolean;
        width?: number;
    };
    /**
     * Allows you to select rows or determine which rows are selected.
     */
    selectedRowKeys: Array<any>;
    /**
     * Configures runtime selection.
     */
    selection: {
        allowSelectAll?: boolean;
        mode?: string;
        recursive?: boolean;
    };
    /**
     * Specifies whether the outer borders of the widget are visible.
     */
    showBorders: boolean;
    /**
     * Specifies whether column headers are visible.
     */
    showColumnHeaders: boolean;
    /**
     * Specifies whether vertical lines that separate one column from another are visible.
     */
    showColumnLines: boolean;
    /**
     * Specifies whether horizontal lines that separate one row from another are visible.
     */
    showRowLines: boolean;
    /**
     * Configures runtime sorting.
     */
    sorting: {
        ascendingText?: string;
        clearText?: string;
        descendingText?: string;
        mode?: string;
    };
    /**
     * Configures state storing.
     */
    stateStoring: {
        customLoad?: Function;
        customSave?: Function;
        enabled?: boolean;
        savingTimeout?: number;
        storageKey?: string;
        type?: string;
    };
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies whether to enable two-way data binding.
     */
    twoWayBindingEnabled: boolean;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * Specifies whether text that does not fit into a column should be wrapped.
     */
    wordWrapEnabled: boolean;
    /**
     * A function that is executed before an adaptive detail row is rendered.
     */
    onAdaptiveDetailRowPreparing: EventEmitter<any>;
    /**
     * A function that is executed when a cell is clicked or tapped. Executed before onRowClick.
     */
    onCellClick: EventEmitter<any>;
    /**
     * A function that is executed when a cell is double-clicked or double-tapped. Executed before onRowDblClick.
     */
    onCellDblClick: EventEmitter<any>;
    /**
     * A function that is executed after the pointer enters or leaves a cell.
     */
    onCellHoverChanged: EventEmitter<any>;
    /**
     * A function that is executed after a grid cell is created.
     */
    onCellPrepared: EventEmitter<any>;
    /**
     * A function that is executed when the widget's content is ready and each time the content is changed.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A function that is executed before the context menu is rendered.
     */
    onContextMenuPreparing: EventEmitter<any>;
    /**
     * A function that is executed when an error occurs in the data source.
     */
    onDataErrorOccurred: EventEmitter<any>;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function that is executed before a cell or row switches to the editing state.
     */
    onEditingStart: EventEmitter<any>;
    /**
     * A function that is executed after an editor is created. Not executed for cells with an editCellTemplate.
     */
    onEditorPrepared: EventEmitter<any>;
    /**
     * A function used to customize or replace default editors. Not executed for cells with an editCellTemplate.
     */
    onEditorPreparing: EventEmitter<any>;
    /**
     * A function that is executed after the focused cell changes.
     */
    onFocusedCellChanged: EventEmitter<any>;
    /**
     * A function that is executed before the focused cell changes.
     */
    onFocusedCellChanging: EventEmitter<any>;
    /**
     * A function that executed when the focused row changes. Applies only when focusedRowEnabled is true.
     */
    onFocusedRowChanged: EventEmitter<any>;
    /**
     * A function that is executed before the focused row changes. Applies only when focusedRowEnabled is true.
     */
    onFocusedRowChanging: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed before a new row is added to the widget.
     */
    onInitNewRow: EventEmitter<any>;
    /**
     * A function that is executed when the widget is in focus and a key has been pressed down.
     */
    onKeyDown: EventEmitter<any>;
    /**
     * A function that is executed after the loaded nodes are initialized.
     */
    onNodesInitialized: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when a grid row is clicked or tapped.
     */
    onRowClick: EventEmitter<any>;
    /**
     * A function that is executed after a row is collapsed.
     */
    onRowCollapsed: EventEmitter<any>;
    /**
     * A function that is executed before a row is collapsed.
     */
    onRowCollapsing: EventEmitter<any>;
    /**
     * A function that is executed when a row is double-clicked or double-tapped. Executed after onCellDblClick.
     */
    onRowDblClick: EventEmitter<any>;
    /**
     * A function that is executed after a row is expanded.
     */
    onRowExpanded: EventEmitter<any>;
    /**
     * A function that is executed before a row is expanded.
     */
    onRowExpanding: EventEmitter<any>;
    /**
     * A function that is executed after a new row has been inserted into the data source.
     */
    onRowInserted: EventEmitter<any>;
    /**
     * A function that is executed before a new row is inserted into the data source.
     */
    onRowInserting: EventEmitter<any>;
    /**
     * A function that is executed after a row is created.
     */
    onRowPrepared: EventEmitter<any>;
    /**
     * A function that is executed after a row has been removed from the data source.
     */
    onRowRemoved: EventEmitter<any>;
    /**
     * A function that is executed before a row is removed from the data source.
     */
    onRowRemoving: EventEmitter<any>;
    /**
     * A function that is executed after a row has been updated in the data source.
     */
    onRowUpdated: EventEmitter<any>;
    /**
     * A function that is executed before a row is updated in the data source.
     */
    onRowUpdating: EventEmitter<any>;
    /**
     * A function that is executed after cells in a row are validated against validation rules.
     */
    onRowValidating: EventEmitter<any>;
    /**
     * A function that is executed after selecting a row or clearing its selection.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A function that is executed before the toolbar is created.
     */
    onToolbarPreparing: EventEmitter<any>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the allowColumnReorderingChange event.
     */
    allowColumnReorderingChange: EventEmitter<boolean>;
    /**
     * A handler for the allowColumnResizingChange event.
     */
    allowColumnResizingChange: EventEmitter<boolean>;
    /**
     * A handler for the autoExpandAllChange event.
     */
    autoExpandAllChange: EventEmitter<boolean>;
    /**
     * A handler for the cacheEnabledChange event.
     */
    cacheEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the cellHintEnabledChange event.
     */
    cellHintEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the columnAutoWidthChange event.
     */
    columnAutoWidthChange: EventEmitter<boolean>;
    /**
     * A handler for the columnChooserChange event.
     */
    columnChooserChange: EventEmitter<{
        allowSearch?: boolean;
        emptyPanelText?: string;
        enabled?: boolean;
        height?: number;
        mode?: string;
        searchTimeout?: number;
        title?: string;
        width?: number;
    }>;
    /**
     * A handler for the columnFixingChange event.
     */
    columnFixingChange: EventEmitter<{
        enabled?: boolean;
        texts?: {
            fix?: string;
            leftPosition?: string;
            rightPosition?: string;
            unfix?: string;
        };
    }>;
    /**
     * A handler for the columnHidingEnabledChange event.
     */
    columnHidingEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the columnMinWidthChange event.
     */
    columnMinWidthChange: EventEmitter<number>;
    /**
     * A handler for the columnResizingModeChange event.
     */
    columnResizingModeChange: EventEmitter<string>;
    /**
     * A handler for the columnsChange event.
     */
    columnsChange: EventEmitter<Array<DevExpress.ui.dxTreeListColumn | string>>;
    /**
     * A handler for the columnWidthChange event.
     */
    columnWidthChange: EventEmitter<number>;
    /**
     * A handler for the customizeColumnsChange event.
     */
    customizeColumnsChange: EventEmitter<Function>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
    /**
     * A handler for the dataStructureChange event.
     */
    dataStructureChange: EventEmitter<string>;
    /**
     * A handler for the dateSerializationFormatChange event.
     */
    dateSerializationFormatChange: EventEmitter<string>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the editingChange event.
     */
    editingChange: EventEmitter<{
        allowAdding?: boolean | Function;
        allowDeleting?: boolean | Function;
        allowUpdating?: boolean | Function;
        form?: DevExpress.ui.dxFormOptions;
        mode?: string;
        popup?: DevExpress.ui.dxPopupOptions;
        refreshMode?: string;
        selectTextOnEditStart?: boolean;
        startEditAction?: string;
        texts?: {
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
        useIcons?: boolean;
    }>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the errorRowEnabledChange event.
     */
    errorRowEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the expandedRowKeysChange event.
     */
    expandedRowKeysChange: EventEmitter<Array<any>>;
    /**
     * A handler for the expandNodesOnFilteringChange event.
     */
    expandNodesOnFilteringChange: EventEmitter<boolean>;
    /**
     * A handler for the filterBuilderChange event.
     */
    filterBuilderChange: EventEmitter<DevExpress.ui.dxFilterBuilderOptions>;
    /**
     * A handler for the filterBuilderPopupChange event.
     */
    filterBuilderPopupChange: EventEmitter<DevExpress.ui.dxPopupOptions>;
    /**
     * A handler for the filterModeChange event.
     */
    filterModeChange: EventEmitter<string>;
    /**
     * A handler for the filterPanelChange event.
     */
    filterPanelChange: EventEmitter<{
        customizeText?: Function;
        filterEnabled?: boolean;
        texts?: {
            clearFilter?: string;
            createFilter?: string;
            filterEnabledHint?: string;
        };
        visible?: boolean;
    }>;
    /**
     * A handler for the filterRowChange event.
     */
    filterRowChange: EventEmitter<{
        applyFilter?: string;
        applyFilterText?: string;
        betweenEndText?: string;
        betweenStartText?: string;
        operationDescriptions?: {
            between?: string;
            contains?: string;
            endsWith?: string;
            equal?: string;
            greaterThan?: string;
            greaterThanOrEqual?: string;
            lessThan?: string;
            lessThanOrEqual?: string;
            notContains?: string;
            notEqual?: string;
            startsWith?: string;
        };
        resetOperationText?: string;
        showAllText?: string;
        showOperationChooser?: boolean;
        visible?: boolean;
    }>;
    /**
     * A handler for the filterSyncEnabledChange event.
     */
    filterSyncEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the filterValueChange event.
     */
    filterValueChange: EventEmitter<any>;
    /**
     * A handler for the focusedColumnIndexChange event.
     */
    focusedColumnIndexChange: EventEmitter<number>;
    /**
     * A handler for the focusedRowEnabledChange event.
     */
    focusedRowEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the focusedRowIndexChange event.
     */
    focusedRowIndexChange: EventEmitter<number>;
    /**
     * A handler for the focusedRowKeyChange event.
     */
    focusedRowKeyChange: EventEmitter<any>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the hasItemsExprChange event.
     */
    hasItemsExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the headerFilterChange event.
     */
    headerFilterChange: EventEmitter<{
        allowSearch?: boolean;
        height?: number;
        searchTimeout?: number;
        texts?: {
            cancel?: string;
            emptyValue?: string;
            ok?: string;
        };
        visible?: boolean;
        width?: number;
    }>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the highlightChangesChange event.
     */
    highlightChangesChange: EventEmitter<boolean>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the hoverStateEnabledChange event.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the itemsExprChange event.
     */
    itemsExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the keyboardNavigationChange event.
     */
    keyboardNavigationChange: EventEmitter<{
        editOnKeyPress?: boolean;
        enterKeyAction?: string;
        enterKeyDirection?: string;
    }>;
    /**
     * A handler for the keyExprChange event.
     */
    keyExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the loadPanelChange event.
     */
    loadPanelChange: EventEmitter<{
        enabled?: boolean;
        height?: number;
        indicatorSrc?: string;
        shading?: boolean;
        shadingColor?: string;
        showIndicator?: boolean;
        showPane?: boolean;
        text?: string;
        width?: number;
    }>;
    /**
     * A handler for the noDataTextChange event.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * A handler for the pagerChange event.
     */
    pagerChange: EventEmitter<{
        allowedPageSizes?: Array<number>;
        infoText?: string;
        showInfo?: boolean;
        showNavigationButtons?: boolean;
        showPageSizeSelector?: boolean;
        visible?: boolean;
    }>;
    /**
     * A handler for the pagingChange event.
     */
    pagingChange: EventEmitter<{
        enabled?: boolean;
        pageIndex?: number;
        pageSize?: number;
    }>;
    /**
     * A handler for the parentIdExprChange event.
     */
    parentIdExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the remoteOperationsChange event.
     */
    remoteOperationsChange: EventEmitter<{
        filtering?: boolean;
        grouping?: boolean;
        sorting?: boolean;
    }>;
    /**
     * A handler for the renderAsyncChange event.
     */
    renderAsyncChange: EventEmitter<boolean>;
    /**
     * A handler for the repaintChangesOnlyChange event.
     */
    repaintChangesOnlyChange: EventEmitter<boolean>;
    /**
     * A handler for the rootValueChange event.
     */
    rootValueChange: EventEmitter<any>;
    /**
     * A handler for the rowAlternationEnabledChange event.
     */
    rowAlternationEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollingChange event.
     */
    scrollingChange: EventEmitter<{
        columnRenderingMode?: string;
        mode?: string;
        preloadEnabled?: boolean;
        rowRenderingMode?: string;
        scrollByContent?: boolean;
        scrollByThumb?: boolean;
        showScrollbar?: string;
        useNative?: boolean;
    }>;
    /**
     * A handler for the searchPanelChange event.
     */
    searchPanelChange: EventEmitter<{
        highlightCaseSensitive?: boolean;
        highlightSearchText?: boolean;
        placeholder?: string;
        searchVisibleColumnsOnly?: boolean;
        text?: string;
        visible?: boolean;
        width?: number;
    }>;
    /**
     * A handler for the selectedRowKeysChange event.
     */
    selectedRowKeysChange: EventEmitter<Array<any>>;
    /**
     * A handler for the selectionChange event.
     */
    selectionChange: EventEmitter<{
        allowSelectAll?: boolean;
        mode?: string;
        recursive?: boolean;
    }>;
    /**
     * A handler for the showBordersChange event.
     */
    showBordersChange: EventEmitter<boolean>;
    /**
     * A handler for the showColumnHeadersChange event.
     */
    showColumnHeadersChange: EventEmitter<boolean>;
    /**
     * A handler for the showColumnLinesChange event.
     */
    showColumnLinesChange: EventEmitter<boolean>;
    /**
     * A handler for the showRowLinesChange event.
     */
    showRowLinesChange: EventEmitter<boolean>;
    /**
     * A handler for the sortingChange event.
     */
    sortingChange: EventEmitter<{
        ascendingText?: string;
        clearText?: string;
        descendingText?: string;
        mode?: string;
    }>;
    /**
     * A handler for the stateStoringChange event.
     */
    stateStoringChange: EventEmitter<{
        customLoad?: Function;
        customSave?: Function;
        enabled?: boolean;
        savingTimeout?: number;
        storageKey?: string;
        type?: string;
    }>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the twoWayBindingEnabledChange event.
     */
    twoWayBindingEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the wordWrapEnabledChange event.
     */
    wordWrapEnabledChange: EventEmitter<boolean>;
    columnsChildren: QueryList<DxiColumnComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxTreeList;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxTreeListModule {
}
