import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxTreeList from 'devextreme/ui/tree_list';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiColumnComponent, DxoColumnChooserModule, DxoColumnFixingModule, DxoTextsModule, DxiColumnModule, DxiButtonModule, DxoHeaderFilterModule, DxoLookupModule, DxoFormatModule, DxoFormItemModule, DxoLabelModule, DxiValidationRuleModule, DxoEditingModule, DxoFormModule, DxoColCountByScreenModule, DxiItemModule, DxoTabPanelOptionsModule, DxiTabModule, DxoButtonOptionsModule, DxoPopupModule, DxoAnimationModule, DxoHideModule, DxoShowModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxiToolbarItemModule, DxoFilterBuilderModule, DxiCustomOperationModule, DxiFieldModule, DxoFilterOperationDescriptionsModule, DxoGroupOperationDescriptionsModule, DxoFilterBuilderPopupModule, DxoFilterPanelModule, DxoFilterRowModule, DxoOperationDescriptionsModule, DxoKeyboardNavigationModule, DxoLoadPanelModule, DxoPagerModule, DxoPagingModule, DxoRemoteOperationsModule, DxoScrollingModule, DxoSearchPanelModule, DxoSelectionModule, DxoSortingModule, DxoStateStoringModule } from 'devextreme-angular/ui/nested';

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
/**
 * The TreeList is a widget that represents data from a local or remote source in the form of a multi-column tree view. This widget offers such features as sorting, filtering, editing, selection, etc.
 */
let DxTreeListComponent = class DxTreeListComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'adaptiveDetailRowPreparing', emit: 'onAdaptiveDetailRowPreparing' },
            { subscribe: 'cellClick', emit: 'onCellClick' },
            { subscribe: 'cellDblClick', emit: 'onCellDblClick' },
            { subscribe: 'cellHoverChanged', emit: 'onCellHoverChanged' },
            { subscribe: 'cellPrepared', emit: 'onCellPrepared' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
            { subscribe: 'dataErrorOccurred', emit: 'onDataErrorOccurred' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'editingStart', emit: 'onEditingStart' },
            { subscribe: 'editorPrepared', emit: 'onEditorPrepared' },
            { subscribe: 'editorPreparing', emit: 'onEditorPreparing' },
            { subscribe: 'focusedCellChanged', emit: 'onFocusedCellChanged' },
            { subscribe: 'focusedCellChanging', emit: 'onFocusedCellChanging' },
            { subscribe: 'focusedRowChanged', emit: 'onFocusedRowChanged' },
            { subscribe: 'focusedRowChanging', emit: 'onFocusedRowChanging' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'initNewRow', emit: 'onInitNewRow' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'nodesInitialized', emit: 'onNodesInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'rowClick', emit: 'onRowClick' },
            { subscribe: 'rowCollapsed', emit: 'onRowCollapsed' },
            { subscribe: 'rowCollapsing', emit: 'onRowCollapsing' },
            { subscribe: 'rowDblClick', emit: 'onRowDblClick' },
            { subscribe: 'rowExpanded', emit: 'onRowExpanded' },
            { subscribe: 'rowExpanding', emit: 'onRowExpanding' },
            { subscribe: 'rowInserted', emit: 'onRowInserted' },
            { subscribe: 'rowInserting', emit: 'onRowInserting' },
            { subscribe: 'rowPrepared', emit: 'onRowPrepared' },
            { subscribe: 'rowRemoved', emit: 'onRowRemoved' },
            { subscribe: 'rowRemoving', emit: 'onRowRemoving' },
            { subscribe: 'rowUpdated', emit: 'onRowUpdated' },
            { subscribe: 'rowUpdating', emit: 'onRowUpdating' },
            { subscribe: 'rowValidating', emit: 'onRowValidating' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'toolbarPreparing', emit: 'onToolbarPreparing' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'allowColumnReorderingChange' },
            { emit: 'allowColumnResizingChange' },
            { emit: 'autoExpandAllChange' },
            { emit: 'cacheEnabledChange' },
            { emit: 'cellHintEnabledChange' },
            { emit: 'columnAutoWidthChange' },
            { emit: 'columnChooserChange' },
            { emit: 'columnFixingChange' },
            { emit: 'columnHidingEnabledChange' },
            { emit: 'columnMinWidthChange' },
            { emit: 'columnResizingModeChange' },
            { emit: 'columnsChange' },
            { emit: 'columnWidthChange' },
            { emit: 'customizeColumnsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dataStructureChange' },
            { emit: 'dateSerializationFormatChange' },
            { emit: 'disabledChange' },
            { emit: 'editingChange' },
            { emit: 'elementAttrChange' },
            { emit: 'errorRowEnabledChange' },
            { emit: 'expandedRowKeysChange' },
            { emit: 'expandNodesOnFilteringChange' },
            { emit: 'filterBuilderChange' },
            { emit: 'filterBuilderPopupChange' },
            { emit: 'filterModeChange' },
            { emit: 'filterPanelChange' },
            { emit: 'filterRowChange' },
            { emit: 'filterSyncEnabledChange' },
            { emit: 'filterValueChange' },
            { emit: 'focusedColumnIndexChange' },
            { emit: 'focusedRowEnabledChange' },
            { emit: 'focusedRowIndexChange' },
            { emit: 'focusedRowKeyChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hasItemsExprChange' },
            { emit: 'headerFilterChange' },
            { emit: 'heightChange' },
            { emit: 'highlightChangesChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsExprChange' },
            { emit: 'keyboardNavigationChange' },
            { emit: 'keyExprChange' },
            { emit: 'loadPanelChange' },
            { emit: 'noDataTextChange' },
            { emit: 'pagerChange' },
            { emit: 'pagingChange' },
            { emit: 'parentIdExprChange' },
            { emit: 'remoteOperationsChange' },
            { emit: 'renderAsyncChange' },
            { emit: 'repaintChangesOnlyChange' },
            { emit: 'rootValueChange' },
            { emit: 'rowAlternationEnabledChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollingChange' },
            { emit: 'searchPanelChange' },
            { emit: 'selectedRowKeysChange' },
            { emit: 'selectionChange' },
            { emit: 'showBordersChange' },
            { emit: 'showColumnHeadersChange' },
            { emit: 'showColumnLinesChange' },
            { emit: 'showRowLinesChange' },
            { emit: 'sortingChange' },
            { emit: 'stateStoringChange' },
            { emit: 'tabIndexChange' },
            { emit: 'twoWayBindingEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'wordWrapEnabledChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Specifies whether a user can reorder columns.
     */
    get allowColumnReordering() {
        return this._getOption('allowColumnReordering');
    }
    set allowColumnReordering(value) {
        this._setOption('allowColumnReordering', value);
    }
    /**
     * Specifies whether a user can resize columns.
     */
    get allowColumnResizing() {
        return this._getOption('allowColumnResizing');
    }
    set allowColumnResizing(value) {
        this._setOption('allowColumnResizing', value);
    }
    /**
     * Specifies whether all rows are expanded initially.
     */
    get autoExpandAll() {
        return this._getOption('autoExpandAll');
    }
    set autoExpandAll(value) {
        this._setOption('autoExpandAll', value);
    }
    /**
     * Specifies whether data should be cached.
     */
    get cacheEnabled() {
        return this._getOption('cacheEnabled');
    }
    set cacheEnabled(value) {
        this._setOption('cacheEnabled', value);
    }
    /**
     * Enables a hint that appears when a user hovers the mouse pointer over a cell with truncated content.
     */
    get cellHintEnabled() {
        return this._getOption('cellHintEnabled');
    }
    set cellHintEnabled(value) {
        this._setOption('cellHintEnabled', value);
    }
    get columnAutoWidth() {
        return this._getOption('columnAutoWidth');
    }
    set columnAutoWidth(value) {
        this._setOption('columnAutoWidth', value);
    }
    /**
     * Configures the column chooser.
     */
    get columnChooser() {
        return this._getOption('columnChooser');
    }
    set columnChooser(value) {
        this._setOption('columnChooser', value);
    }
    /**
     * Configures column fixing.
     */
    get columnFixing() {
        return this._getOption('columnFixing');
    }
    set columnFixing(value) {
        this._setOption('columnFixing', value);
    }
    /**
     * Specifies whether the widget should hide columns to adapt to the screen or container size. Ignored if allowColumnResizing is true and columnResizingMode is "widget".
     */
    get columnHidingEnabled() {
        return this._getOption('columnHidingEnabled');
    }
    set columnHidingEnabled(value) {
        this._setOption('columnHidingEnabled', value);
    }
    /**
     * Specifies the minimum width of columns.
     */
    get columnMinWidth() {
        return this._getOption('columnMinWidth');
    }
    set columnMinWidth(value) {
        this._setOption('columnMinWidth', value);
    }
    /**
     * Specifies how the widget resizes columns. Applies only if allowColumnResizing is true.
     */
    get columnResizingMode() {
        return this._getOption('columnResizingMode');
    }
    set columnResizingMode(value) {
        this._setOption('columnResizingMode', value);
    }
    /**
     * Configures columns.
     */
    get columns() {
        return this._getOption('columns');
    }
    set columns(value) {
        this._setOption('columns', value);
    }
    /**
     * Specifies the width for all data columns. Has a lower priority than the column.width option.
     */
    get columnWidth() {
        return this._getOption('columnWidth');
    }
    set columnWidth(value) {
        this._setOption('columnWidth', value);
    }
    /**
     * Customizes columns after they are created.
     */
    get customizeColumns() {
        return this._getOption('customizeColumns');
    }
    set customizeColumns(value) {
        this._setOption('customizeColumns', value);
    }
    /**
     * Binds the widget to data.
     */
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    /**
     * Notifies the widget of the used data structure.
     */
    get dataStructure() {
        return this._getOption('dataStructure');
    }
    set dataStructure(value) {
        this._setOption('dataStructure', value);
    }
    /**
     * Specifies the format in which date-time values should be sent to the server. Use it only if you do not specify the dataSource at design time.
     */
    get dateSerializationFormat() {
        return this._getOption('dateSerializationFormat');
    }
    set dateSerializationFormat(value) {
        this._setOption('dateSerializationFormat', value);
    }
    /**
     * Specifies whether the widget responds to user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    /**
     * Configures editing.
     */
    get editing() {
        return this._getOption('editing');
    }
    set editing(value) {
        this._setOption('editing', value);
    }
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    /**
     * Indicates whether to show the error row.
     */
    get errorRowEnabled() {
        return this._getOption('errorRowEnabled');
    }
    set errorRowEnabled(value) {
        this._setOption('errorRowEnabled', value);
    }
    /**
     * Specifies keys of the initially expanded rows.
     */
    get expandedRowKeys() {
        return this._getOption('expandedRowKeys');
    }
    set expandedRowKeys(value) {
        this._setOption('expandedRowKeys', value);
    }
    /**
     * Specifies whether nodes appear expanded or collapsed after filtering is applied.
     */
    get expandNodesOnFiltering() {
        return this._getOption('expandNodesOnFiltering');
    }
    set expandNodesOnFiltering(value) {
        this._setOption('expandNodesOnFiltering', value);
    }
    /**
     * Configures the integrated filter builder.
     */
    get filterBuilder() {
        return this._getOption('filterBuilder');
    }
    set filterBuilder(value) {
        this._setOption('filterBuilder', value);
    }
    /**
     * Configures the popup in which the integrated filter builder is shown.
     */
    get filterBuilderPopup() {
        return this._getOption('filterBuilderPopup');
    }
    set filterBuilderPopup(value) {
        this._setOption('filterBuilderPopup', value);
    }
    /**
     * Specifies whether to show filtered rows with ancestors and descendants (full branch) or with ancestors only.
     */
    get filterMode() {
        return this._getOption('filterMode');
    }
    set filterMode(value) {
        this._setOption('filterMode', value);
    }
    /**
     * Configures the filter panel.
     */
    get filterPanel() {
        return this._getOption('filterPanel');
    }
    set filterPanel(value) {
        this._setOption('filterPanel', value);
    }
    /**
     * Configures the filter row.
     */
    get filterRow() {
        return this._getOption('filterRow');
    }
    set filterRow(value) {
        this._setOption('filterRow', value);
    }
    /**
     * Specifies whether to synchronize the filter row, header filter, and filter builder. The synchronized filter expression is stored in the filterValue option.
     */
    get filterSyncEnabled() {
        return this._getOption('filterSyncEnabled');
    }
    set filterSyncEnabled(value) {
        this._setOption('filterSyncEnabled', value);
    }
    /**
     * Specifies a filter expression.
     */
    get filterValue() {
        return this._getOption('filterValue');
    }
    set filterValue(value) {
        this._setOption('filterValue', value);
    }
    /**
     * Specifies the index of the column focused initially or currently in the data row area.
     */
    get focusedColumnIndex() {
        return this._getOption('focusedColumnIndex');
    }
    set focusedColumnIndex(value) {
        this._setOption('focusedColumnIndex', value);
    }
    /**
     * Specifies whether the focused row feature is enabled.
     */
    get focusedRowEnabled() {
        return this._getOption('focusedRowEnabled');
    }
    set focusedRowEnabled(value) {
        this._setOption('focusedRowEnabled', value);
    }
    /**
     * Specifies the initially or currently focused grid row's index. Use it when focusedRowEnabled is true.
     */
    get focusedRowIndex() {
        return this._getOption('focusedRowIndex');
    }
    set focusedRowIndex(value) {
        this._setOption('focusedRowIndex', value);
    }
    /**
     * Specifies initially or currently focused grid row's key. Use it when focusedRowEnabled is true.
     */
    get focusedRowKey() {
        return this._getOption('focusedRowKey');
    }
    set focusedRowKey(value) {
        this._setOption('focusedRowKey', value);
    }
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    /**
     * Specifies which data field defines whether the node has children.
     */
    get hasItemsExpr() {
        return this._getOption('hasItemsExpr');
    }
    set hasItemsExpr(value) {
        this._setOption('hasItemsExpr', value);
    }
    /**
     * Configures the header filter feature.
     */
    get headerFilter() {
        return this._getOption('headerFilter');
    }
    set headerFilter(value) {
        this._setOption('headerFilter', value);
    }
    /**
     * Specifies the widget's height.
     */
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    /**
     * Specifies whether to highlight rows and cells with edited data. repaintChangesOnly should be true.
     */
    get highlightChanges() {
        return this._getOption('highlightChanges');
    }
    set highlightChanges(value) {
        this._setOption('highlightChanges', value);
    }
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    /**
     * Specifies which data field contains nested items. Set this option when your data has a hierarchical structure.
     */
    get itemsExpr() {
        return this._getOption('itemsExpr');
    }
    set itemsExpr(value) {
        this._setOption('itemsExpr', value);
    }
    /**
     * Configures keyboard navigation.
     */
    get keyboardNavigation() {
        return this._getOption('keyboardNavigation');
    }
    set keyboardNavigation(value) {
        this._setOption('keyboardNavigation', value);
    }
    /**
     * Specifies which data field provides keys for nodes.
     */
    get keyExpr() {
        return this._getOption('keyExpr');
    }
    set keyExpr(value) {
        this._setOption('keyExpr', value);
    }
    /**
     * Configures the load panel.
     */
    get loadPanel() {
        return this._getOption('loadPanel');
    }
    set loadPanel(value) {
        this._setOption('loadPanel', value);
    }
    /**
     * Specifies text shown when the widget does not display any data.
     */
    get noDataText() {
        return this._getOption('noDataText');
    }
    set noDataText(value) {
        this._setOption('noDataText', value);
    }
    /**
     * Configures the pager.
     */
    get pager() {
        return this._getOption('pager');
    }
    set pager(value) {
        this._setOption('pager', value);
    }
    /**
     * Configures paging.
     */
    get paging() {
        return this._getOption('paging');
    }
    set paging(value) {
        this._setOption('paging', value);
    }
    /**
     * Specifies which data field provides parent keys.
     */
    get parentIdExpr() {
        return this._getOption('parentIdExpr');
    }
    set parentIdExpr(value) {
        this._setOption('parentIdExpr', value);
    }
    /**
     * Notifies the TreeList of the server's data processing operations. Applies only if data has a plain structure.
     */
    get remoteOperations() {
        return this._getOption('remoteOperations');
    }
    set remoteOperations(value) {
        this._setOption('remoteOperations', value);
    }
    /**
     * Specifies whether to render the filter row, command columns, and columns with showEditorAlways set to true after other elements.
     */
    get renderAsync() {
        return this._getOption('renderAsync');
    }
    set renderAsync(value) {
        this._setOption('renderAsync', value);
    }
    /**
     * Specifies whether to repaint only those cells whose data changed.
     */
    get repaintChangesOnly() {
        return this._getOption('repaintChangesOnly');
    }
    set repaintChangesOnly(value) {
        this._setOption('repaintChangesOnly', value);
    }
    /**
     * Specifies the root node's identifier. Applies if dataStructure is "plain".
     */
    get rootValue() {
        return this._getOption('rootValue');
    }
    set rootValue(value) {
        this._setOption('rootValue', value);
    }
    /**
     * Specifies whether rows should be shaded differently.
     */
    get rowAlternationEnabled() {
        return this._getOption('rowAlternationEnabled');
    }
    set rowAlternationEnabled(value) {
        this._setOption('rowAlternationEnabled', value);
    }
    /**
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * Configures scrolling.
     */
    get scrolling() {
        return this._getOption('scrolling');
    }
    set scrolling(value) {
        this._setOption('scrolling', value);
    }
    /**
     * Configures the search panel.
     */
    get searchPanel() {
        return this._getOption('searchPanel');
    }
    set searchPanel(value) {
        this._setOption('searchPanel', value);
    }
    /**
     * Allows you to select rows or determine which rows are selected.
     */
    get selectedRowKeys() {
        return this._getOption('selectedRowKeys');
    }
    set selectedRowKeys(value) {
        this._setOption('selectedRowKeys', value);
    }
    /**
     * Configures runtime selection.
     */
    get selection() {
        return this._getOption('selection');
    }
    set selection(value) {
        this._setOption('selection', value);
    }
    /**
     * Specifies whether the outer borders of the widget are visible.
     */
    get showBorders() {
        return this._getOption('showBorders');
    }
    set showBorders(value) {
        this._setOption('showBorders', value);
    }
    /**
     * Specifies whether column headers are visible.
     */
    get showColumnHeaders() {
        return this._getOption('showColumnHeaders');
    }
    set showColumnHeaders(value) {
        this._setOption('showColumnHeaders', value);
    }
    /**
     * Specifies whether vertical lines that separate one column from another are visible.
     */
    get showColumnLines() {
        return this._getOption('showColumnLines');
    }
    set showColumnLines(value) {
        this._setOption('showColumnLines', value);
    }
    /**
     * Specifies whether horizontal lines that separate one row from another are visible.
     */
    get showRowLines() {
        return this._getOption('showRowLines');
    }
    set showRowLines(value) {
        this._setOption('showRowLines', value);
    }
    /**
     * Configures runtime sorting.
     */
    get sorting() {
        return this._getOption('sorting');
    }
    set sorting(value) {
        this._setOption('sorting', value);
    }
    /**
     * Configures state storing.
     */
    get stateStoring() {
        return this._getOption('stateStoring');
    }
    set stateStoring(value) {
        this._setOption('stateStoring', value);
    }
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    /**
     * Specifies whether to enable two-way data binding.
     */
    get twoWayBindingEnabled() {
        return this._getOption('twoWayBindingEnabled');
    }
    set twoWayBindingEnabled(value) {
        this._setOption('twoWayBindingEnabled', value);
    }
    /**
     * Specifies whether the widget is visible.
     */
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    /**
     * Specifies the widget's width.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    /**
     * Specifies whether text that does not fit into a column should be wrapped.
     */
    get wordWrapEnabled() {
        return this._getOption('wordWrapEnabled');
    }
    set wordWrapEnabled(value) {
        this._setOption('wordWrapEnabled', value);
    }
    get columnsChildren() {
        return this._getOption('columns');
    }
    set columnsChildren(value) {
        this.setChildren('columns', value);
    }
    _createInstance(element, options) {
        return new DxTreeList(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('columns', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('expandedRowKeys', changes);
        this.setupChanges('selectedRowKeys', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('columns');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('expandedRowKeys');
        this._idh.doCheck('selectedRowKeys');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }
    _setOption(name, value) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
};
DxTreeListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    Input()
], DxTreeListComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "allowColumnReordering", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "allowColumnResizing", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "autoExpandAll", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "cacheEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "cellHintEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "columnAutoWidth", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "columnChooser", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "columnFixing", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "columnHidingEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "columnMinWidth", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "columnResizingMode", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "columns", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "columnWidth", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "customizeColumns", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "dataStructure", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "dateSerializationFormat", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "editing", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "errorRowEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "expandedRowKeys", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "expandNodesOnFiltering", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "filterBuilder", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "filterBuilderPopup", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "filterMode", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "filterPanel", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "filterRow", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "filterSyncEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "filterValue", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "focusedColumnIndex", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "focusedRowEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "focusedRowIndex", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "focusedRowKey", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "hasItemsExpr", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "headerFilter", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "height", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "highlightChanges", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "hint", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "itemsExpr", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "keyboardNavigation", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "keyExpr", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "loadPanel", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "pager", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "paging", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "parentIdExpr", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "remoteOperations", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "renderAsync", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "repaintChangesOnly", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "rootValue", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "rowAlternationEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "scrolling", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "searchPanel", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "selectedRowKeys", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "selection", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "showBorders", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "showColumnHeaders", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "showColumnLines", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "showRowLines", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "sorting", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "stateStoring", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "twoWayBindingEnabled", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "visible", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "width", null);
__decorate([
    Input()
], DxTreeListComponent.prototype, "wordWrapEnabled", null);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onAdaptiveDetailRowPreparing", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onCellClick", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onCellDblClick", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onCellHoverChanged", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onCellPrepared", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onContextMenuPreparing", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onDataErrorOccurred", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onEditingStart", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onEditorPrepared", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onEditorPreparing", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onFocusedCellChanged", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onFocusedCellChanging", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onFocusedRowChanged", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onFocusedRowChanging", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onInitNewRow", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onKeyDown", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onNodesInitialized", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowClick", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowCollapsed", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowCollapsing", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowDblClick", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowExpanded", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowExpanding", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowInserted", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowInserting", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowPrepared", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowRemoved", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowRemoving", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowUpdated", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowUpdating", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onRowValidating", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "onToolbarPreparing", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "allowColumnReorderingChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "allowColumnResizingChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "autoExpandAllChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "cacheEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "cellHintEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "columnAutoWidthChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "columnChooserChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "columnFixingChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "columnHidingEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "columnMinWidthChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "columnResizingModeChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "columnsChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "columnWidthChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "customizeColumnsChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "dataStructureChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "dateSerializationFormatChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "editingChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "errorRowEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "expandedRowKeysChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "expandNodesOnFilteringChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "filterBuilderChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "filterBuilderPopupChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "filterModeChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "filterPanelChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "filterRowChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "filterSyncEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "filterValueChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "focusedColumnIndexChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "focusedRowEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "focusedRowIndexChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "focusedRowKeyChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "hasItemsExprChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "headerFilterChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "highlightChangesChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "itemsExprChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "keyboardNavigationChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "keyExprChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "loadPanelChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "pagerChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "pagingChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "parentIdExprChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "remoteOperationsChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "renderAsyncChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "repaintChangesOnlyChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "rootValueChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "rowAlternationEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "scrollingChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "searchPanelChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "selectedRowKeysChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "selectionChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "showBordersChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "showColumnHeadersChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "showColumnLinesChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "showRowLinesChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "sortingChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "stateStoringChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "twoWayBindingEnabledChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxTreeListComponent.prototype, "wordWrapEnabledChange", void 0);
__decorate([
    ContentChildren(DxiColumnComponent)
], DxTreeListComponent.prototype, "columnsChildren", null);
DxTreeListComponent = __decorate([
    Component({
        selector: 'dx-tree-list',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxTreeListComponent);
let DxTreeListModule = class DxTreeListModule {
};
DxTreeListModule = __decorate([
    NgModule({
        imports: [
            DxoColumnChooserModule,
            DxoColumnFixingModule,
            DxoTextsModule,
            DxiColumnModule,
            DxiButtonModule,
            DxoHeaderFilterModule,
            DxoLookupModule,
            DxoFormatModule,
            DxoFormItemModule,
            DxoLabelModule,
            DxiValidationRuleModule,
            DxoEditingModule,
            DxoFormModule,
            DxoColCountByScreenModule,
            DxiItemModule,
            DxoTabPanelOptionsModule,
            DxiTabModule,
            DxoButtonOptionsModule,
            DxoPopupModule,
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxoPositionModule,
            DxoAtModule,
            DxoBoundaryOffsetModule,
            DxoCollisionModule,
            DxoMyModule,
            DxoOffsetModule,
            DxiToolbarItemModule,
            DxoFilterBuilderModule,
            DxiCustomOperationModule,
            DxiFieldModule,
            DxoFilterOperationDescriptionsModule,
            DxoGroupOperationDescriptionsModule,
            DxoFilterBuilderPopupModule,
            DxoFilterPanelModule,
            DxoFilterRowModule,
            DxoOperationDescriptionsModule,
            DxoKeyboardNavigationModule,
            DxoLoadPanelModule,
            DxoPagerModule,
            DxoPagingModule,
            DxoRemoteOperationsModule,
            DxoScrollingModule,
            DxoSearchPanelModule,
            DxoSelectionModule,
            DxoSortingModule,
            DxoStateStoringModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxTreeListComponent
        ],
        exports: [
            DxTreeListComponent,
            DxoColumnChooserModule,
            DxoColumnFixingModule,
            DxoTextsModule,
            DxiColumnModule,
            DxiButtonModule,
            DxoHeaderFilterModule,
            DxoLookupModule,
            DxoFormatModule,
            DxoFormItemModule,
            DxoLabelModule,
            DxiValidationRuleModule,
            DxoEditingModule,
            DxoFormModule,
            DxoColCountByScreenModule,
            DxiItemModule,
            DxoTabPanelOptionsModule,
            DxiTabModule,
            DxoButtonOptionsModule,
            DxoPopupModule,
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxoPositionModule,
            DxoAtModule,
            DxoBoundaryOffsetModule,
            DxoCollisionModule,
            DxoMyModule,
            DxoOffsetModule,
            DxiToolbarItemModule,
            DxoFilterBuilderModule,
            DxiCustomOperationModule,
            DxiFieldModule,
            DxoFilterOperationDescriptionsModule,
            DxoGroupOperationDescriptionsModule,
            DxoFilterBuilderPopupModule,
            DxoFilterPanelModule,
            DxoFilterRowModule,
            DxoOperationDescriptionsModule,
            DxoKeyboardNavigationModule,
            DxoLoadPanelModule,
            DxoPagerModule,
            DxoPagingModule,
            DxoRemoteOperationsModule,
            DxoScrollingModule,
            DxoSearchPanelModule,
            DxoSelectionModule,
            DxoSortingModule,
            DxoStateStoringModule,
            DxTemplateModule
        ]
    })
], DxTreeListModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxTreeListComponent, DxTreeListModule };
//# sourceMappingURL=devextreme-angular-ui-tree-list.js.map
