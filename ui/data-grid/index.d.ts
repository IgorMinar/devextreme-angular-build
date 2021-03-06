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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxDataGrid from 'devextreme/ui/data_grid';
import { DxComponent, DxTemplateHost, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested';
import { DxiSortByGroupSummaryInfoComponent } from 'devextreme-angular/ui/nested';
/**
 * The DataGrid is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as sorting, grouping, filtering, as well as more advanced capabilities, like state storing, export to Excel, master-detail interface, and many others.
 */
export declare class DxDataGridComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxDataGrid;
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
     * An array of grid columns.
     */
    columns: Array<DevExpress.ui.dxDataGridColumn | string>;
    /**
     * Specifies the width for all data columns. Has a lower priority than the column.width option.
     */
    columnWidth: number;
    /**
     * Customizes columns after they are created.
     */
    customizeColumns: Function;
    /**
     * Customizes data before export. You can use the export.customizeExcelCell function instead.
     */
    customizeExportData: Function;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
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
        allowAdding?: boolean;
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
     * Configures client-side exporting.
     */
    export: {
        allowExportSelectedData?: boolean;
        customizeExcelCell?: Function;
        enabled?: boolean;
        excelFilterEnabled?: boolean;
        excelWrapTextEnabled?: boolean;
        fileName?: string;
        ignoreExcelErrors?: boolean;
        proxyUrl?: string;
        texts?: {
            exportAll?: string;
            exportSelectedRows?: string;
            exportTo?: string;
        };
    };
    /**
     * Configures the integrated filter builder.
     */
    filterBuilder: DevExpress.ui.dxFilterBuilderOptions;
    /**
     * Configures the popup in which the integrated filter builder is shown.
     */
    filterBuilderPopup: DevExpress.ui.dxPopupOptions;
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
     * Configures grouping.
     */
    grouping: {
        allowCollapsing?: boolean;
        autoExpandAll?: boolean;
        contextMenuEnabled?: boolean;
        expandMode?: string;
        texts?: {
            groupByThisColumn?: string;
            groupContinuedMessage?: string;
            groupContinuesMessage?: string;
            ungroup?: string;
            ungroupAll?: string;
        };
    };
    /**
     * Configures the group panel.
     */
    groupPanel: {
        allowColumnDragging?: boolean;
        emptyPanelText?: string;
        visible?: boolean | string;
    };
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
     * Configures keyboard navigation.
     */
    keyboardNavigation: {
        editOnKeyPress?: boolean;
        enterKeyAction?: string;
        enterKeyDirection?: string;
    };
    /**
     * Specifies which data field provides keys for data items. Applies only if data is a simple array.
     */
    keyExpr: string | Array<string>;
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
     * Allows you to build a master-detail interface in the grid.
     */
    masterDetail: {
        autoExpandAll?: boolean;
        enabled?: boolean;
        template?: any;
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
     * Notifies the DataGrid of the server's data processing operations.
     */
    remoteOperations: boolean | {
        filtering?: boolean;
        grouping?: boolean;
        groupPaging?: boolean;
        paging?: boolean;
        sorting?: boolean;
        summary?: boolean;
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
     * Specifies whether rows should be shaded differently.
     */
    rowAlternationEnabled: boolean;
    /**
     * Specifies a custom template for rows.
     */
    rowTemplate: any;
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
        deferred?: boolean;
        mode?: string;
        selectAllMode?: string;
        showCheckBoxesMode?: string;
    };
    /**
     * Specifies filters for the rows that must be selected initially. Applies only if selection.deferred is true.
     */
    selectionFilter: any;
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
     * Allows you to sort groups according to the values of group summary items.
     */
    sortByGroupSummaryInfo: Array<any | {
        groupColumn?: string;
        sortOrder?: string;
        summaryItem?: number | string;
    }>;
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
     * Specifies the options of the grid summary.
     */
    summary: {
        calculateCustomSummary?: Function;
        groupItems?: Array<any | {
            alignByColumn?: boolean;
            column?: string;
            customizeText?: Function;
            displayFormat?: string;
            name?: string;
            showInColumn?: string;
            showInGroupFooter?: boolean;
            skipEmptyValues?: boolean;
            summaryType?: string;
            valueFormat?: DevExpress.ui.format | string;
        }>;
        recalculateWhileEditing?: boolean;
        skipEmptyValues?: boolean;
        texts?: {
            avg?: string;
            avgOtherColumn?: string;
            count?: string;
            max?: string;
            maxOtherColumn?: string;
            min?: string;
            minOtherColumn?: string;
            sum?: string;
            sumOtherColumn?: string;
        };
        totalItems?: Array<any | {
            alignment?: string;
            column?: string;
            cssClass?: string;
            customizeText?: Function;
            displayFormat?: string;
            name?: string;
            showInColumn?: string;
            skipEmptyValues?: boolean;
            summaryType?: string;
            valueFormat?: DevExpress.ui.format | string;
        }>;
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
     * A function that is executed after a cell is created.
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
     * A function that is executed after data is exported.
     */
    onExported: EventEmitter<any>;
    /**
     * A function that is executed before data is exported.
     */
    onExporting: EventEmitter<any>;
    /**
     * A function that is executed before a file with exported data is saved to the user's local storage.
     */
    onFileSaving: EventEmitter<any>;
    /**
     * A function that is executed after the focused cell changes.
     */
    onFocusedCellChanged: EventEmitter<any>;
    /**
     * A function that is executed before the focused cell changes.
     */
    onFocusedCellChanging: EventEmitter<any>;
    /**
     * A function that is executed after the focused row changes. Applies only when focusedRowEnabled is true.
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
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when a row is clicked or tapped.
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    allowColumnReorderingChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    allowColumnResizingChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    cacheEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    cellHintEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    columnAutoWidthChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    columnHidingEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    columnMinWidthChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    columnResizingModeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    columnsChange: EventEmitter<Array<DevExpress.ui.dxDataGridColumn | string>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    columnWidthChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    customizeColumnsChange: EventEmitter<Function>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    customizeExportDataChange: EventEmitter<Function>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dateSerializationFormatChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    editingChange: EventEmitter<{
        allowAdding?: boolean;
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    errorRowEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    exportChange: EventEmitter<{
        allowExportSelectedData?: boolean;
        customizeExcelCell?: Function;
        enabled?: boolean;
        excelFilterEnabled?: boolean;
        excelWrapTextEnabled?: boolean;
        fileName?: string;
        ignoreExcelErrors?: boolean;
        proxyUrl?: string;
        texts?: {
            exportAll?: string;
            exportSelectedRows?: string;
            exportTo?: string;
        };
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    filterBuilderChange: EventEmitter<DevExpress.ui.dxFilterBuilderOptions>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    filterBuilderPopupChange: EventEmitter<DevExpress.ui.dxPopupOptions>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    filterSyncEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    filterValueChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    focusedColumnIndexChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    focusedRowEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    focusedRowIndexChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    focusedRowKeyChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    groupingChange: EventEmitter<{
        allowCollapsing?: boolean;
        autoExpandAll?: boolean;
        contextMenuEnabled?: boolean;
        expandMode?: string;
        texts?: {
            groupByThisColumn?: string;
            groupContinuedMessage?: string;
            groupContinuesMessage?: string;
            ungroup?: string;
            ungroupAll?: string;
        };
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    groupPanelChange: EventEmitter<{
        allowColumnDragging?: boolean;
        emptyPanelText?: string;
        visible?: boolean | string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    highlightChangesChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hintChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    keyboardNavigationChange: EventEmitter<{
        editOnKeyPress?: boolean;
        enterKeyAction?: string;
        enterKeyDirection?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    keyExprChange: EventEmitter<string | Array<string>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    masterDetailChange: EventEmitter<{
        autoExpandAll?: boolean;
        enabled?: boolean;
        template?: any;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    pagingChange: EventEmitter<{
        enabled?: boolean;
        pageIndex?: number;
        pageSize?: number;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    remoteOperationsChange: EventEmitter<boolean | {
        filtering?: boolean;
        grouping?: boolean;
        groupPaging?: boolean;
        paging?: boolean;
        sorting?: boolean;
        summary?: boolean;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    renderAsyncChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    repaintChangesOnlyChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rowAlternationEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rowTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectedRowKeysChange: EventEmitter<Array<any>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectionChange: EventEmitter<{
        allowSelectAll?: boolean;
        deferred?: boolean;
        mode?: string;
        selectAllMode?: string;
        showCheckBoxesMode?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectionFilterChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showBordersChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showColumnHeadersChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showColumnLinesChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showRowLinesChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    sortByGroupSummaryInfoChange: EventEmitter<Array<any | {
        groupColumn?: string;
        sortOrder?: string;
        summaryItem?: number | string;
    }>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    sortingChange: EventEmitter<{
        ascendingText?: string;
        clearText?: string;
        descendingText?: string;
        mode?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
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
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    summaryChange: EventEmitter<{
        calculateCustomSummary?: Function;
        groupItems?: Array<any | {
            alignByColumn?: boolean;
            column?: string;
            customizeText?: Function;
            displayFormat?: string;
            name?: string;
            showInColumn?: string;
            showInGroupFooter?: boolean;
            skipEmptyValues?: boolean;
            summaryType?: string;
            valueFormat?: DevExpress.ui.format | string;
        }>;
        recalculateWhileEditing?: boolean;
        skipEmptyValues?: boolean;
        texts?: {
            avg?: string;
            avgOtherColumn?: string;
            count?: string;
            max?: string;
            maxOtherColumn?: string;
            min?: string;
            minOtherColumn?: string;
            sum?: string;
            sumOtherColumn?: string;
        };
        totalItems?: Array<any | {
            alignment?: string;
            column?: string;
            cssClass?: string;
            customizeText?: Function;
            displayFormat?: string;
            name?: string;
            showInColumn?: string;
            skipEmptyValues?: boolean;
            summaryType?: string;
            valueFormat?: DevExpress.ui.format | string;
        }>;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    twoWayBindingEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    widthChange: EventEmitter<number | Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    wordWrapEnabledChange: EventEmitter<boolean>;
    columnsChildren: QueryList<DxiColumnComponent>;
    sortByGroupSummaryInfoChildren: QueryList<DxiSortByGroupSummaryInfoComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxDataGrid;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxDataGridModule {
}
