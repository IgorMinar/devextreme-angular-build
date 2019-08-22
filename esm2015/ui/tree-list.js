/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxTreeList from 'devextreme/ui/tree_list';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoColumnChooserModule } from './nested/column-chooser';
import { DxoColumnFixingModule } from './nested/column-fixing';
import { DxoTextsModule } from './nested/texts';
import { DxiColumnModule } from './nested/column-dxi';
import { DxiButtonModule } from './nested/button-dxi';
import { DxoHeaderFilterModule } from './nested/header-filter';
import { DxoLookupModule } from './nested/lookup';
import { DxoFormatModule } from './nested/format';
import { DxoFormItemModule } from './nested/form-item';
import { DxoLabelModule } from './nested/label';
import { DxiValidationRuleModule } from './nested/validation-rule-dxi';
import { DxoEditingModule } from './nested/editing';
import { DxoFormModule } from './nested/form';
import { DxoColCountByScreenModule } from './nested/col-count-by-screen';
import { DxiItemModule } from './nested/item-dxi';
import { DxoTabPanelOptionsModule } from './nested/tab-panel-options';
import { DxiTabModule } from './nested/tab-dxi';
import { DxoButtonOptionsModule } from './nested/button-options';
import { DxoPopupModule } from './nested/popup';
import { DxoAnimationModule } from './nested/animation';
import { DxoHideModule } from './nested/hide';
import { DxoShowModule } from './nested/show';
import { DxoPositionModule } from './nested/position';
import { DxoAtModule } from './nested/at';
import { DxoBoundaryOffsetModule } from './nested/boundary-offset';
import { DxoCollisionModule } from './nested/collision';
import { DxoMyModule } from './nested/my';
import { DxoOffsetModule } from './nested/offset';
import { DxiToolbarItemModule } from './nested/toolbar-item-dxi';
import { DxoFilterBuilderModule } from './nested/filter-builder';
import { DxiCustomOperationModule } from './nested/custom-operation-dxi';
import { DxiFieldModule } from './nested/field-dxi';
import { DxoFilterOperationDescriptionsModule } from './nested/filter-operation-descriptions';
import { DxoGroupOperationDescriptionsModule } from './nested/group-operation-descriptions';
import { DxoFilterBuilderPopupModule } from './nested/filter-builder-popup';
import { DxoFilterPanelModule } from './nested/filter-panel';
import { DxoFilterRowModule } from './nested/filter-row';
import { DxoOperationDescriptionsModule } from './nested/operation-descriptions';
import { DxoKeyboardNavigationModule } from './nested/keyboard-navigation';
import { DxoLoadPanelModule } from './nested/load-panel';
import { DxoPagerModule } from './nested/pager';
import { DxoPagingModule } from './nested/paging';
import { DxoRemoteOperationsModule } from './nested/remote-operations';
import { DxoScrollingModule } from './nested/scrolling';
import { DxoSearchPanelModule } from './nested/search-panel';
import { DxoSelectionModule } from './nested/selection';
import { DxoSortingModule } from './nested/sorting';
import { DxoStateStoringModule } from './nested/state-storing';
import { DxiColumnComponent } from './nested/column-dxi';
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
    /**
     * Specifies whether columns should adjust their widths to the content.
     */
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
     * Specifies date-time values' serialization format. Use it only if you do not specify the dataSource at design time.
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
     * Specifies whether to highlight rows and cells whose data changed.
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeListComponent.prototype, "accessKey", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "activeStateEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "allowColumnReordering", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "allowColumnResizing", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "autoExpandAll", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "cacheEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "cellHintEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "columnAutoWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "columnChooser", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "columnFixing", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "columnHidingEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxTreeListComponent.prototype, "columnMinWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeListComponent.prototype, "columnResizingMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxTreeListComponent.prototype, "columns", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxTreeListComponent.prototype, "columnWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Function])
], DxTreeListComponent.prototype, "customizeColumns", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeListComponent.prototype, "dataStructure", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeListComponent.prototype, "dateSerializationFormat", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "editing", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "errorRowEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxTreeListComponent.prototype, "expandedRowKeys", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "expandNodesOnFiltering", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "filterBuilder", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "filterBuilderPopup", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeListComponent.prototype, "filterMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "filterPanel", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "filterRow", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "filterSyncEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "filterValue", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxTreeListComponent.prototype, "focusedColumnIndex", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "focusedRowEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxTreeListComponent.prototype, "focusedRowIndex", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "focusedRowKey", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "focusStateEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "hasItemsExpr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "headerFilter", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "height", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "highlightChanges", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeListComponent.prototype, "hint", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "hoverStateEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "itemsExpr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "keyboardNavigation", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "keyExpr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "loadPanel", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeListComponent.prototype, "noDataText", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "pager", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "paging", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "parentIdExpr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "remoteOperations", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "renderAsync", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "repaintChangesOnly", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "rootValue", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "rowAlternationEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "scrolling", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "searchPanel", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxTreeListComponent.prototype, "selectedRowKeys", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "selection", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "showBorders", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "showColumnHeaders", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "showColumnLines", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "showRowLines", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "sorting", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "stateStoring", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxTreeListComponent.prototype, "tabIndex", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "twoWayBindingEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "visible", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "width", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeListComponent.prototype, "wordWrapEnabled", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onAdaptiveDetailRowPreparing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onCellClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onCellDblClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onCellHoverChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onCellPrepared", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onContentReady", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onContextMenuPreparing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onDataErrorOccurred", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onEditingStart", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onEditorPrepared", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onEditorPreparing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onFocusedCellChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onFocusedCellChanging", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onFocusedRowChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onFocusedRowChanging", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onInitNewRow", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onKeyDown", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onNodesInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowCollapsed", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowCollapsing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowDblClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowExpanded", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowExpanding", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowInserted", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowInserting", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowPrepared", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowRemoved", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowRemoving", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowUpdated", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowUpdating", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onRowValidating", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onSelectionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "onToolbarPreparing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "accessKeyChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "activeStateEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "allowColumnReorderingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "allowColumnResizingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "autoExpandAllChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "cacheEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "cellHintEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "columnAutoWidthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "columnChooserChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "columnFixingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "columnHidingEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "columnMinWidthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "columnResizingModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "columnsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "columnWidthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "customizeColumnsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "dataSourceChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "dataStructureChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "dateSerializationFormatChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "editingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "errorRowEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "expandedRowKeysChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "expandNodesOnFilteringChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "filterBuilderChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "filterBuilderPopupChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "filterModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "filterPanelChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "filterRowChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "filterSyncEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "filterValueChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "focusedColumnIndexChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "focusedRowEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "focusedRowIndexChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "focusedRowKeyChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "focusStateEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "hasItemsExprChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "headerFilterChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "heightChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "highlightChangesChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "hintChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "hoverStateEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "itemsExprChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "keyboardNavigationChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "keyExprChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "loadPanelChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "noDataTextChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "pagerChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "pagingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "parentIdExprChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "remoteOperationsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "renderAsyncChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "repaintChangesOnlyChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "rootValueChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "rowAlternationEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "scrollingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "searchPanelChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "selectedRowKeysChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "selectionChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "showBordersChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "showColumnHeadersChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "showColumnLinesChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "showRowLinesChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "sortingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "stateStoringChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "tabIndexChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "twoWayBindingEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "visibleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "widthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeListComponent.prototype, "wordWrapEnabledChange", void 0);
tslib_1.__decorate([
    ContentChildren(DxiColumnComponent),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeListComponent.prototype, "columnsChildren", null);
DxTreeListComponent = tslib_1.__decorate([
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
    tslib_1.__param(7, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
        WatcherHelper,
        IterableDifferHelper, NestedOptionHost,
        TransferState, Object])
], DxTreeListComponent);
export { DxTreeListComponent };
let DxTreeListModule = class DxTreeListModule {
};
DxTreeListModule = tslib_1.__decorate([
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
export { DxTreeListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1saXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvdHJlZS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFZcEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFJWixlQUFlLEVBQ2YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sVUFBVSxNQUFNLDJCQUEyQixDQUFDO0FBRW5ELE9BQU8sVUFBVSxNQUFNLHlCQUF5QixDQUFDO0FBR2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxF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QUU7OztrREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7c0RBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7OzBEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7c0NBQ2UsS0FBSzs2Q0FHRCxLQUFLOzBEQUQvQjtBQVVEO0lBREMsS0FBSyxFQUFFOzs7aUVBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O3dEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozs2REFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7cURBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O3NEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OztvREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7NERBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O3NEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozs2REFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7NERBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7OzBEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozt3REFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7NERBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O3VEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozt1REFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7aURBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7OzJEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OzsrQ0FHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7NERBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O29EQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozs2REFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7a0RBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O29EQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OztxREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7Z0RBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O2lEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozt1REFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7MkRBR1A7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O1lBQ3RCLHdCQUF3QjtZQUN4QixjQUFjO1lBQ2Qsb0NBQW9DO1lBQ3BDLG1DQUFtQztZQUNuQywyQkFBMkI7WUFDM0Isb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQUNsQiw4QkFBOEI7WUFDOUIsMkJBQTJCO1lBQzNCLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCLGdCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4VHJlZUxpc3QgZnJvbSAnZGV2ZXh0cmVtZS91aS90cmVlX2xpc3QnO1xyXG5cclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlcic7XHJcblxyXG5pbXBvcnQgeyBEeG9Db2x1bW5DaG9vc2VyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29sdW1uLWNob29zZXInO1xyXG5pbXBvcnQgeyBEeG9Db2x1bW5GaXhpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb2x1bW4tZml4aW5nJztcclxuaW1wb3J0IHsgRHhvVGV4dHNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC90ZXh0cyc7XHJcbmltcG9ydCB7IER4aUNvbHVtbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbHVtbi1keGknO1xyXG5pbXBvcnQgeyBEeGlCdXR0b25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9idXR0b24tZHhpJztcclxuaW1wb3J0IHsgRHhvSGVhZGVyRmlsdGVyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaGVhZGVyLWZpbHRlcic7XHJcbmltcG9ydCB7IER4b0xvb2t1cE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2xvb2t1cCc7XHJcbmltcG9ydCB7IER4b0Zvcm1hdE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Zvcm1hdCc7XHJcbmltcG9ydCB7IER4b0Zvcm1JdGVtTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9ybS1pdGVtJztcclxuaW1wb3J0IHsgRHhvTGFiZWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sYWJlbCc7XHJcbmltcG9ydCB7IER4aVZhbGlkYXRpb25SdWxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdmFsaWRhdGlvbi1ydWxlLWR4aSc7XHJcbmltcG9ydCB7IER4b0VkaXRpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9lZGl0aW5nJztcclxuaW1wb3J0IHsgRHhvRm9ybU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Zvcm0nO1xyXG5pbXBvcnQgeyBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29sLWNvdW50LWJ5LXNjcmVlbic7XHJcbmltcG9ydCB7IER4aUl0ZW1Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9pdGVtLWR4aSc7XHJcbmltcG9ydCB7IER4b1RhYlBhbmVsT3B0aW9uc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RhYi1wYW5lbC1vcHRpb25zJztcclxuaW1wb3J0IHsgRHhpVGFiTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdGFiLWR4aSc7XHJcbmltcG9ydCB7IER4b0J1dHRvbk9wdGlvbnNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9idXR0b24tb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4b1BvcHVwTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcG9wdXAnO1xyXG5pbXBvcnQgeyBEeG9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBEeG9IaWRlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaGlkZSc7XHJcbmltcG9ydCB7IER4b1Nob3dNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zaG93JztcclxuaW1wb3J0IHsgRHhvUG9zaXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9wb3NpdGlvbic7XHJcbmltcG9ydCB7IER4b0F0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYXQnO1xyXG5pbXBvcnQgeyBEeG9Cb3VuZGFyeU9mZnNldE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2JvdW5kYXJ5LW9mZnNldCc7XHJcbmltcG9ydCB7IER4b0NvbGxpc2lvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbGxpc2lvbic7XHJcbmltcG9ydCB7IER4b015TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbXknO1xyXG5pbXBvcnQgeyBEeG9PZmZzZXRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9vZmZzZXQnO1xyXG5pbXBvcnQgeyBEeGlUb29sYmFySXRlbU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Rvb2xiYXItaXRlbS1keGknO1xyXG5pbXBvcnQgeyBEeG9GaWx0ZXJCdWlsZGVyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZmlsdGVyLWJ1aWxkZXInO1xyXG5pbXBvcnQgeyBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jdXN0b20tb3BlcmF0aW9uLWR4aSc7XHJcbmltcG9ydCB7IER4aUZpZWxkTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZmllbGQtZHhpJztcclxuaW1wb3J0IHsgRHhvRmlsdGVyT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZmlsdGVyLW9wZXJhdGlvbi1kZXNjcmlwdGlvbnMnO1xyXG5pbXBvcnQgeyBEeG9Hcm91cE9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2dyb3VwLW9wZXJhdGlvbi1kZXNjcmlwdGlvbnMnO1xyXG5pbXBvcnQgeyBEeG9GaWx0ZXJCdWlsZGVyUG9wdXBNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9maWx0ZXItYnVpbGRlci1wb3B1cCc7XHJcbmltcG9ydCB7IER4b0ZpbHRlclBhbmVsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZmlsdGVyLXBhbmVsJztcclxuaW1wb3J0IHsgRHhvRmlsdGVyUm93TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZmlsdGVyLXJvdyc7XHJcbmltcG9ydCB7IER4b09wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL29wZXJhdGlvbi1kZXNjcmlwdGlvbnMnO1xyXG5pbXBvcnQgeyBEeG9LZXlib2FyZE5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9rZXlib2FyZC1uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgRHhvTG9hZFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbG9hZC1wYW5lbCc7XHJcbmltcG9ydCB7IER4b1BhZ2VyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcGFnZXInO1xyXG5pbXBvcnQgeyBEeG9QYWdpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9wYWdpbmcnO1xyXG5pbXBvcnQgeyBEeG9SZW1vdGVPcGVyYXRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcmVtb3RlLW9wZXJhdGlvbnMnO1xyXG5pbXBvcnQgeyBEeG9TY3JvbGxpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zY3JvbGxpbmcnO1xyXG5pbXBvcnQgeyBEeG9TZWFyY2hQYW5lbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NlYXJjaC1wYW5lbCc7XHJcbmltcG9ydCB7IER4b1NlbGVjdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NlbGVjdGlvbic7XHJcbmltcG9ydCB7IER4b1NvcnRpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zb3J0aW5nJztcclxuaW1wb3J0IHsgRHhvU3RhdGVTdG9yaW5nTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc3RhdGUtc3RvcmluZyc7XHJcblxyXG5pbXBvcnQgeyBEeGlDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL25lc3RlZC9jb2x1bW4tZHhpJztcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVHJlZUxpc3QgaXMgYSB3aWRnZXQgdGhhdCByZXByZXNlbnRzIGRhdGEgZnJvbSBhIGxvY2FsIG9yIHJlbW90ZSBzb3VyY2UgaW4gdGhlIGZvcm0gb2YgYSBtdWx0aS1jb2x1bW4gdHJlZSB2aWV3LiBUaGlzIHdpZGdldCBvZmZlcnMgc3VjaCBmZWF0dXJlcyBhcyBzb3J0aW5nLCBmaWx0ZXJpbmcsIGVkaXRpbmcsIHNlbGVjdGlvbiwgZXRjLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4LXRyZWUtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4VHJlZUxpc3RDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeFRyZWVMaXN0O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgc2hvcnRjdXQga2V5IHRoYXQgc2V0cyBmb2N1cyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjY2Vzc0tleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjY2Vzc0tleScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjY2Vzc0tleSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY2Nlc3NLZXknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBpbnRlcmFjdGluZyB3aXRoIGEgdXNlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY3RpdmVTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWN0aXZlU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWN0aXZlU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgYSB1c2VyIGNhbiByZW9yZGVyIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxsb3dDb2x1bW5SZW9yZGVyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93Q29sdW1uUmVvcmRlcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93Q29sdW1uUmVvcmRlcmluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dDb2x1bW5SZW9yZGVyaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGEgdXNlciBjYW4gcmVzaXplIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxsb3dDb2x1bW5SZXNpemluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0NvbHVtblJlc2l6aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dDb2x1bW5SZXNpemluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dDb2x1bW5SZXNpemluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhbGwgcm93cyBhcmUgZXhwYW5kZWQgaW5pdGlhbGx5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGF1dG9FeHBhbmRBbGwoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXV0b0V4cGFuZEFsbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGF1dG9FeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2F1dG9FeHBhbmRBbGwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgZGF0YSBzaG91bGQgYmUgY2FjaGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNhY2hlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYWNoZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBjYWNoZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhY2hlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGVzIGEgaGludCB0aGF0IGFwcGVhcnMgd2hlbiBhIHVzZXIgaG92ZXJzIHRoZSBtb3VzZSBwb2ludGVyIG92ZXIgYSBjZWxsIHdpdGggdHJ1bmNhdGVkIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2VsbEhpbnRFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NlbGxIaW50RW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNlbGxIaW50RW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2VsbEhpbnRFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGNvbHVtbnMgc2hvdWxkIGFkanVzdCB0aGVpciB3aWR0aHMgdG8gdGhlIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uQXV0b1dpZHRoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbkF1dG9XaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbkF1dG9XaWR0aCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uQXV0b1dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGNvbHVtbiBjaG9vc2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbkNob29zZXIoKTogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGVtcHR5UGFuZWxUZXh0Pzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBtb2RlPzogc3RyaW5nLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCB0aXRsZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uQ2hvb3NlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbkNob29zZXIodmFsdWU6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBlbXB0eVBhbmVsVGV4dD86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgbW9kZT86IHN0cmluZywgc2VhcmNoVGltZW91dD86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbkNob29zZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBjb2x1bW4gZml4aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbkZpeGluZygpOiB7IGVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgZml4Pzogc3RyaW5nLCBsZWZ0UG9zaXRpb24/OiBzdHJpbmcsIHJpZ2h0UG9zaXRpb24/OiBzdHJpbmcsIHVuZml4Pzogc3RyaW5nIH0gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uRml4aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uRml4aW5nKHZhbHVlOiB7IGVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgZml4Pzogc3RyaW5nLCBsZWZ0UG9zaXRpb24/OiBzdHJpbmcsIHJpZ2h0UG9zaXRpb24/OiBzdHJpbmcsIHVuZml4Pzogc3RyaW5nIH0gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uRml4aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgc2hvdWxkIGhpZGUgY29sdW1ucyB0byBhZGFwdCB0byB0aGUgc2NyZWVuIG9yIGNvbnRhaW5lciBzaXplLiBJZ25vcmVkIGlmIGFsbG93Q29sdW1uUmVzaXppbmcgaXMgdHJ1ZSBhbmQgY29sdW1uUmVzaXppbmdNb2RlIGlzIFwid2lkZ2V0XCIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uSGlkaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5IaWRpbmdFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uSGlkaW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uSGlkaW5nRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG1pbmltdW0gd2lkdGggb2YgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5NaW5XaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbk1pbldpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uTWluV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uTWluV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgd2lkZ2V0IHJlc2l6ZXMgY29sdW1ucy4gQXBwbGllcyBvbmx5IGlmIGFsbG93Q29sdW1uUmVzaXppbmcgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5SZXNpemluZ01vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5SZXNpemluZ01vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5SZXNpemluZ01vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uUmVzaXppbmdNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5zKCk6IEFycmF5PERldkV4cHJlc3MudWkuZHhUcmVlTGlzdENvbHVtbiB8IHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5zKHZhbHVlOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4VHJlZUxpc3RDb2x1bW4gfCBzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkdGggZm9yIGFsbCBkYXRhIGNvbHVtbnMuIEhhcyBhIGxvd2VyIHByaW9yaXR5IHRoYW4gdGhlIGNvbHVtbi53aWR0aCBvcHRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5XaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbldpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbldpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1c3RvbWl6ZXMgY29sdW1ucyBhZnRlciB0aGV5IGFyZSBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1c3RvbWl6ZUNvbHVtbnMoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbWl6ZUNvbHVtbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21pemVDb2x1bW5zKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9taXplQ29sdW1ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kcyB0aGUgd2lkZ2V0IHRvIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YVNvdXJjZSgpOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFTb3VyY2UnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhU291cmNlKHZhbHVlOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFTb3VyY2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhlIHdpZGdldCBvZiB0aGUgdXNlZCBkYXRhIHN0cnVjdHVyZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhU3RydWN0dXJlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVN0cnVjdHVyZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFTdHJ1Y3R1cmUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVN0cnVjdHVyZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgZGF0ZS10aW1lIHZhbHVlcycgc2VyaWFsaXphdGlvbiBmb3JtYXQuIFVzZSBpdCBvbmx5IGlmIHlvdSBkbyBub3Qgc3BlY2lmeSB0aGUgZGF0YVNvdXJjZSBhdCBkZXNpZ24gdGltZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGVTZXJpYWxpemF0aW9uRm9ybWF0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgZWRpdGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlZGl0aW5nKCk6IHsgYWxsb3dBZGRpbmc/OiBib29sZWFuIHwgRnVuY3Rpb24sIGFsbG93RGVsZXRpbmc/OiBib29sZWFuIHwgRnVuY3Rpb24sIGFsbG93VXBkYXRpbmc/OiBib29sZWFuIHwgRnVuY3Rpb24sIGZvcm0/OiBEZXZFeHByZXNzLnVpLmR4Rm9ybU9wdGlvbnMsIG1vZGU/OiBzdHJpbmcsIHBvcHVwPzogRGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucywgcmVmcmVzaE1vZGU/OiBzdHJpbmcsIHNlbGVjdFRleHRPbkVkaXRTdGFydD86IGJvb2xlYW4sIHN0YXJ0RWRpdEFjdGlvbj86IHN0cmluZywgdGV4dHM/OiB7IGFkZFJvdz86IHN0cmluZywgYWRkUm93VG9Ob2RlPzogc3RyaW5nLCBjYW5jZWxBbGxDaGFuZ2VzPzogc3RyaW5nLCBjYW5jZWxSb3dDaGFuZ2VzPzogc3RyaW5nLCBjb25maXJtRGVsZXRlTWVzc2FnZT86IHN0cmluZywgY29uZmlybURlbGV0ZVRpdGxlPzogc3RyaW5nLCBkZWxldGVSb3c/OiBzdHJpbmcsIGVkaXRSb3c/OiBzdHJpbmcsIHNhdmVBbGxDaGFuZ2VzPzogc3RyaW5nLCBzYXZlUm93Q2hhbmdlcz86IHN0cmluZywgdW5kZWxldGVSb3c/OiBzdHJpbmcsIHZhbGlkYXRpb25DYW5jZWxDaGFuZ2VzPzogc3RyaW5nIH0sIHVzZUljb25zPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlZGl0aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWRpdGluZyh2YWx1ZTogeyBhbGxvd0FkZGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgYWxsb3dEZWxldGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgYWxsb3dVcGRhdGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgZm9ybT86IERldkV4cHJlc3MudWkuZHhGb3JtT3B0aW9ucywgbW9kZT86IHN0cmluZywgcG9wdXA/OiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zLCByZWZyZXNoTW9kZT86IHN0cmluZywgc2VsZWN0VGV4dE9uRWRpdFN0YXJ0PzogYm9vbGVhbiwgc3RhcnRFZGl0QWN0aW9uPzogc3RyaW5nLCB0ZXh0cz86IHsgYWRkUm93Pzogc3RyaW5nLCBhZGRSb3dUb05vZGU/OiBzdHJpbmcsIGNhbmNlbEFsbENoYW5nZXM/OiBzdHJpbmcsIGNhbmNlbFJvd0NoYW5nZXM/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVNZXNzYWdlPzogc3RyaW5nLCBjb25maXJtRGVsZXRlVGl0bGU/OiBzdHJpbmcsIGRlbGV0ZVJvdz86IHN0cmluZywgZWRpdFJvdz86IHN0cmluZywgc2F2ZUFsbENoYW5nZXM/OiBzdHJpbmcsIHNhdmVSb3dDaGFuZ2VzPzogc3RyaW5nLCB1bmRlbGV0ZVJvdz86IHN0cmluZywgdmFsaWRhdGlvbkNhbmNlbENoYW5nZXM/OiBzdHJpbmcgfSwgdXNlSWNvbnM/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VkaXRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB3aWRnZXQncyByb290IGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWxlbWVudEF0dHIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbGVtZW50QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVsZW1lbnRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VsZW1lbnRBdHRyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRvIHNob3cgdGhlIGVycm9yIHJvdy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlcnJvclJvd0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXJyb3JSb3dFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXJyb3JSb3dFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlcnJvclJvd0VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGtleXMgb2YgdGhlIGluaXRpYWxseSBleHBhbmRlZCByb3dzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGV4cGFuZGVkUm93S2V5cygpOiBBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdleHBhbmRlZFJvd0tleXMnKTtcclxuICAgIH1cclxuICAgIHNldCBleHBhbmRlZFJvd0tleXModmFsdWU6IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2V4cGFuZGVkUm93S2V5cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBub2RlcyBhcHBlYXIgZXhwYW5kZWQgb3IgY29sbGFwc2VkIGFmdGVyIGZpbHRlcmluZyBpcyBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGV4cGFuZE5vZGVzT25GaWx0ZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwYW5kTm9kZXNPbkZpbHRlcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4cGFuZE5vZGVzT25GaWx0ZXJpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2V4cGFuZE5vZGVzT25GaWx0ZXJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgaW50ZWdyYXRlZCBmaWx0ZXIgYnVpbGRlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJCdWlsZGVyKCk6IERldkV4cHJlc3MudWkuZHhGaWx0ZXJCdWlsZGVyT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyQnVpbGRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlckJ1aWxkZXIodmFsdWU6IERldkV4cHJlc3MudWkuZHhGaWx0ZXJCdWlsZGVyT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyQnVpbGRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBwb3B1cCBpbiB3aGljaCB0aGUgaW50ZWdyYXRlZCBmaWx0ZXIgYnVpbGRlciBpcyBzaG93bi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJCdWlsZGVyUG9wdXAoKTogRGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyQnVpbGRlclBvcHVwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyQnVpbGRlclBvcHVwKHZhbHVlOiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJCdWlsZGVyUG9wdXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gc2hvdyBmaWx0ZXJlZCByb3dzIHdpdGggYW5jZXN0b3JzIGFuZCBkZXNjZW5kYW50cyAoZnVsbCBicmFuY2gpIG9yIHdpdGggYW5jZXN0b3JzIG9ubHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlck1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlck1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgZmlsdGVyIHBhbmVsLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlclBhbmVsKCk6IHsgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmaWx0ZXJFbmFibGVkPzogYm9vbGVhbiwgdGV4dHM/OiB7IGNsZWFyRmlsdGVyPzogc3RyaW5nLCBjcmVhdGVGaWx0ZXI/OiBzdHJpbmcsIGZpbHRlckVuYWJsZWRIaW50Pzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlclBhbmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyUGFuZWwodmFsdWU6IHsgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmaWx0ZXJFbmFibGVkPzogYm9vbGVhbiwgdGV4dHM/OiB7IGNsZWFyRmlsdGVyPzogc3RyaW5nLCBjcmVhdGVGaWx0ZXI/OiBzdHJpbmcsIGZpbHRlckVuYWJsZWRIaW50Pzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlclBhbmVsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGZpbHRlciByb3cuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyUm93KCk6IHsgYXBwbHlGaWx0ZXI/OiBzdHJpbmcsIGFwcGx5RmlsdGVyVGV4dD86IHN0cmluZywgYmV0d2VlbkVuZFRleHQ/OiBzdHJpbmcsIGJldHdlZW5TdGFydFRleHQ/OiBzdHJpbmcsIG9wZXJhdGlvbkRlc2NyaXB0aW9ucz86IHsgYmV0d2Vlbj86IHN0cmluZywgY29udGFpbnM/OiBzdHJpbmcsIGVuZHNXaXRoPzogc3RyaW5nLCBlcXVhbD86IHN0cmluZywgZ3JlYXRlclRoYW4/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuT3JFcXVhbD86IHN0cmluZywgbGVzc1RoYW4/OiBzdHJpbmcsIGxlc3NUaGFuT3JFcXVhbD86IHN0cmluZywgbm90Q29udGFpbnM/OiBzdHJpbmcsIG5vdEVxdWFsPzogc3RyaW5nLCBzdGFydHNXaXRoPzogc3RyaW5nIH0sIHJlc2V0T3BlcmF0aW9uVGV4dD86IHN0cmluZywgc2hvd0FsbFRleHQ/OiBzdHJpbmcsIHNob3dPcGVyYXRpb25DaG9vc2VyPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyUm93Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyUm93KHZhbHVlOiB7IGFwcGx5RmlsdGVyPzogc3RyaW5nLCBhcHBseUZpbHRlclRleHQ/OiBzdHJpbmcsIGJldHdlZW5FbmRUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuU3RhcnRUZXh0Pzogc3RyaW5nLCBvcGVyYXRpb25EZXNjcmlwdGlvbnM/OiB7IGJldHdlZW4/OiBzdHJpbmcsIGNvbnRhaW5zPzogc3RyaW5nLCBlbmRzV2l0aD86IHN0cmluZywgZXF1YWw/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuPzogc3RyaW5nLCBncmVhdGVyVGhhbk9yRXF1YWw/OiBzdHJpbmcsIGxlc3NUaGFuPzogc3RyaW5nLCBsZXNzVGhhbk9yRXF1YWw/OiBzdHJpbmcsIG5vdENvbnRhaW5zPzogc3RyaW5nLCBub3RFcXVhbD86IHN0cmluZywgc3RhcnRzV2l0aD86IHN0cmluZyB9LCByZXNldE9wZXJhdGlvblRleHQ/OiBzdHJpbmcsIHNob3dBbGxUZXh0Pzogc3RyaW5nLCBzaG93T3BlcmF0aW9uQ2hvb3Nlcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlclJvdycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBzeW5jaHJvbml6ZSB0aGUgZmlsdGVyIHJvdywgaGVhZGVyIGZpbHRlciwgYW5kIGZpbHRlciBidWlsZGVyLiBUaGUgc3luY2hyb25pemVkIGZpbHRlciBleHByZXNzaW9uIGlzIHN0b3JlZCBpbiB0aGUgZmlsdGVyVmFsdWUgb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlclN5bmNFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlclN5bmNFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyU3luY0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlclN5bmNFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGZpbHRlciBleHByZXNzaW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlclZhbHVlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyVmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gZm9jdXNlZCBpbml0aWFsbHkgb3IgY3VycmVudGx5IGluIHRoZSBkYXRhIHJvdyBhcmVhLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzZWRDb2x1bW5JbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzZWRDb2x1bW5JbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzZWRDb2x1bW5JbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb2N1c2VkQ29sdW1uSW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZvY3VzZWQgcm93IGZlYXR1cmUgaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1c2VkUm93RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb2N1c2VkUm93RW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzZWRSb3dFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb2N1c2VkUm93RW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGluaXRpYWxseSBvciBjdXJyZW50bHkgZm9jdXNlZCBncmlkIHJvdydzIGluZGV4LiBVc2UgaXQgd2hlbiBmb2N1c2VkUm93RW5hYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzZWRSb3dJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzZWRSb3dJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzZWRSb3dJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb2N1c2VkUm93SW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGluaXRpYWxseSBvciBjdXJyZW50bHkgZm9jdXNlZCBncmlkIHJvdydzIGtleS4gVXNlIGl0IHdoZW4gZm9jdXNlZFJvd0VuYWJsZWQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1c2VkUm93S2V5KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNlZFJvd0tleScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzZWRSb3dLZXkodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNlZFJvd0tleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNhbiBiZSBmb2N1c2VkIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c1N0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoaWNoIGRhdGEgZmllbGQgZGVmaW5lcyB3aGV0aGVyIHRoZSBub2RlIGhhcyBjaGlsZHJlbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoYXNJdGVtc0V4cHIoKTogRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hhc0l0ZW1zRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhhc0l0ZW1zRXhwcih2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hhc0l0ZW1zRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBoZWFkZXIgZmlsdGVyIGZlYXR1cmUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVhZGVyRmlsdGVyKCk6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRleHRzPzogeyBjYW5jZWw/OiBzdHJpbmcsIGVtcHR5VmFsdWU/OiBzdHJpbmcsIG9rPzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWFkZXJGaWx0ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBoZWFkZXJGaWx0ZXIodmFsdWU6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRleHRzPzogeyBjYW5jZWw/OiBzdHJpbmcsIGVtcHR5VmFsdWU/OiBzdHJpbmcsIG9rPzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWFkZXJGaWx0ZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBoZWlnaHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gaGlnaGxpZ2h0IHJvd3MgYW5kIGNlbGxzIHdob3NlIGRhdGEgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaWdobGlnaHRDaGFuZ2VzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpZ2hsaWdodENoYW5nZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBoaWdobGlnaHRDaGFuZ2VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaWdobGlnaHRDaGFuZ2VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IGZvciBhIGhpbnQgdGhhdCBhcHBlYXJzIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGludCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIGl0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvdmVyU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGljaCBkYXRhIGZpZWxkIGNvbnRhaW5zIG5lc3RlZCBpdGVtcy4gU2V0IHRoaXMgb3B0aW9uIHdoZW4geW91ciBkYXRhIGhhcyBhIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaXRlbXNFeHByKCk6IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtc0V4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtc0V4cHIodmFsdWU6IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpdGVtc0V4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGtleWJvYXJkTmF2aWdhdGlvbigpOiB7IGVkaXRPbktleVByZXNzPzogYm9vbGVhbiwgZW50ZXJLZXlBY3Rpb24/OiBzdHJpbmcsIGVudGVyS2V5RGlyZWN0aW9uPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2tleWJvYXJkTmF2aWdhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGtleWJvYXJkTmF2aWdhdGlvbih2YWx1ZTogeyBlZGl0T25LZXlQcmVzcz86IGJvb2xlYW4sIGVudGVyS2V5QWN0aW9uPzogc3RyaW5nLCBlbnRlcktleURpcmVjdGlvbj86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdrZXlib2FyZE5hdmlnYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoaWNoIGRhdGEgZmllbGQgcHJvdmlkZXMga2V5cyBmb3Igbm9kZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQga2V5RXhwcigpOiBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigna2V5RXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGtleUV4cHIodmFsdWU6IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdrZXlFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGxvYWQgcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9hZFBhbmVsKCk6IHsgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgaW5kaWNhdG9yU3JjPzogc3RyaW5nLCBzaGFkaW5nPzogYm9vbGVhbiwgc2hhZGluZ0NvbG9yPzogc3RyaW5nLCBzaG93SW5kaWNhdG9yPzogYm9vbGVhbiwgc2hvd1BhbmU/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2FkUGFuZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBsb2FkUGFuZWwodmFsdWU6IHsgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgaW5kaWNhdG9yU3JjPzogc3RyaW5nLCBzaGFkaW5nPzogYm9vbGVhbiwgc2hhZGluZ0NvbG9yPzogc3RyaW5nLCBzaG93SW5kaWNhdG9yPzogYm9vbGVhbiwgc2hvd1BhbmU/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2FkUGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRleHQgc2hvd24gd2hlbiB0aGUgd2lkZ2V0IGRvZXMgbm90IGRpc3BsYXkgYW55IGRhdGEuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbm9EYXRhVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ25vRGF0YVRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBub0RhdGFUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ25vRGF0YVRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgcGFnZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGFnZXIoKTogeyBhbGxvd2VkUGFnZVNpemVzPzogQXJyYXk8bnVtYmVyPiwgaW5mb1RleHQ/OiBzdHJpbmcsIHNob3dJbmZvPzogYm9vbGVhbiwgc2hvd05hdmlnYXRpb25CdXR0b25zPzogYm9vbGVhbiwgc2hvd1BhZ2VTaXplU2VsZWN0b3I/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYWdlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhZ2VyKHZhbHVlOiB7IGFsbG93ZWRQYWdlU2l6ZXM/OiBBcnJheTxudW1iZXI+LCBpbmZvVGV4dD86IHN0cmluZywgc2hvd0luZm8/OiBib29sZWFuLCBzaG93TmF2aWdhdGlvbkJ1dHRvbnM/OiBib29sZWFuLCBzaG93UGFnZVNpemVTZWxlY3Rvcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhZ2VyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgcGFnaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhZ2luZygpOiB7IGVuYWJsZWQ/OiBib29sZWFuLCBwYWdlSW5kZXg/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhZ2luZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhZ2luZyh2YWx1ZTogeyBlbmFibGVkPzogYm9vbGVhbiwgcGFnZUluZGV4PzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYWdpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoaWNoIGRhdGEgZmllbGQgcHJvdmlkZXMgcGFyZW50IGtleXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGFyZW50SWRFeHByKCk6IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYXJlbnRJZEV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBwYXJlbnRJZEV4cHIodmFsdWU6IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYXJlbnRJZEV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhlIFRyZWVMaXN0IG9mIHRoZSBzZXJ2ZXIncyBkYXRhIHByb2Nlc3Npbmcgb3BlcmF0aW9ucy4gQXBwbGllcyBvbmx5IGlmIGRhdGEgaGFzIGEgcGxhaW4gc3RydWN0dXJlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlbW90ZU9wZXJhdGlvbnMoKTogeyBmaWx0ZXJpbmc/OiBib29sZWFuLCBncm91cGluZz86IGJvb2xlYW4sIHNvcnRpbmc/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlbW90ZU9wZXJhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCByZW1vdGVPcGVyYXRpb25zKHZhbHVlOiB7IGZpbHRlcmluZz86IGJvb2xlYW4sIGdyb3VwaW5nPzogYm9vbGVhbiwgc29ydGluZz86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVtb3RlT3BlcmF0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byByZW5kZXIgdGhlIGZpbHRlciByb3csIGNvbW1hbmQgY29sdW1ucywgYW5kIGNvbHVtbnMgd2l0aCBzaG93RWRpdG9yQWx3YXlzIHNldCB0byB0cnVlIGFmdGVyIG90aGVyIGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlbmRlckFzeW5jKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlbmRlckFzeW5jJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVuZGVyQXN5bmModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlbmRlckFzeW5jJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJlcGFpbnQgb25seSB0aG9zZSBjZWxscyB3aG9zZSBkYXRhIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVwYWludENoYW5nZXNPbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlcGFpbnRDaGFuZ2VzT25seScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlcGFpbnRDaGFuZ2VzT25seSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVwYWludENoYW5nZXNPbmx5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgcm9vdCBub2RlJ3MgaWRlbnRpZmllci4gQXBwbGllcyBpZiBkYXRhU3RydWN0dXJlIGlzIFwicGxhaW5cIi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByb290VmFsdWUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyb290VmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCByb290VmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncm9vdFZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHJvd3Mgc2hvdWxkIGJlIHNoYWRlZCBkaWZmZXJlbnRseS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByb3dBbHRlcm5hdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncm93QWx0ZXJuYXRpb25FbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm93QWx0ZXJuYXRpb25FbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyb3dBbHRlcm5hdGlvbkVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHNjcm9sbGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzY3JvbGxpbmcoKTogeyBjb2x1bW5SZW5kZXJpbmdNb2RlPzogc3RyaW5nLCBtb2RlPzogc3RyaW5nLCBwcmVsb2FkRW5hYmxlZD86IGJvb2xlYW4sIHJvd1JlbmRlcmluZ01vZGU/OiBzdHJpbmcsIHNjcm9sbEJ5Q29udGVudD86IGJvb2xlYW4sIHNjcm9sbEJ5VGh1bWI/OiBib29sZWFuLCBzaG93U2Nyb2xsYmFyPzogc3RyaW5nLCB1c2VOYXRpdmU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Njcm9sbGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNjcm9sbGluZyh2YWx1ZTogeyBjb2x1bW5SZW5kZXJpbmdNb2RlPzogc3RyaW5nLCBtb2RlPzogc3RyaW5nLCBwcmVsb2FkRW5hYmxlZD86IGJvb2xlYW4sIHJvd1JlbmRlcmluZ01vZGU/OiBzdHJpbmcsIHNjcm9sbEJ5Q29udGVudD86IGJvb2xlYW4sIHNjcm9sbEJ5VGh1bWI/OiBib29sZWFuLCBzaG93U2Nyb2xsYmFyPzogc3RyaW5nLCB1c2VOYXRpdmU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Njcm9sbGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBzZWFyY2ggcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VhcmNoUGFuZWwoKTogeyBoaWdobGlnaHRDYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiwgaGlnaGxpZ2h0U2VhcmNoVGV4dD86IGJvb2xlYW4sIHBsYWNlaG9sZGVyPzogc3RyaW5nLCBzZWFyY2hWaXNpYmxlQ29sdW1uc09ubHk/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VhcmNoUGFuZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWFyY2hQYW5lbCh2YWx1ZTogeyBoaWdobGlnaHRDYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiwgaGlnaGxpZ2h0U2VhcmNoVGV4dD86IGJvb2xlYW4sIHBsYWNlaG9sZGVyPzogc3RyaW5nLCBzZWFyY2hWaXNpYmxlQ29sdW1uc09ubHk/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VhcmNoUGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHlvdSB0byBzZWxlY3Qgcm93cyBvciBkZXRlcm1pbmUgd2hpY2ggcm93cyBhcmUgc2VsZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0ZWRSb3dLZXlzKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdGVkUm93S2V5cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGVkUm93S2V5cyh2YWx1ZTogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0ZWRSb3dLZXlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgcnVudGltZSBzZWxlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0aW9uKCk6IHsgYWxsb3dTZWxlY3RBbGw/OiBib29sZWFuLCBtb2RlPzogc3RyaW5nLCByZWN1cnNpdmU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGlvbih2YWx1ZTogeyBhbGxvd1NlbGVjdEFsbD86IGJvb2xlYW4sIG1vZGU/OiBzdHJpbmcsIHJlY3Vyc2l2ZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBvdXRlciBib3JkZXJzIG9mIHRoZSB3aWRnZXQgYXJlIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0JvcmRlcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0JvcmRlcnMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Qm9yZGVycyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0JvcmRlcnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgY29sdW1uIGhlYWRlcnMgYXJlIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0NvbHVtbkhlYWRlcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NvbHVtbkhlYWRlcnMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q29sdW1uSGVhZGVycyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0NvbHVtbkhlYWRlcnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdmVydGljYWwgbGluZXMgdGhhdCBzZXBhcmF0ZSBvbmUgY29sdW1uIGZyb20gYW5vdGhlciBhcmUgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Q29sdW1uTGluZXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NvbHVtbkxpbmVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0NvbHVtbkxpbmVzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q29sdW1uTGluZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgaG9yaXpvbnRhbCBsaW5lcyB0aGF0IHNlcGFyYXRlIG9uZSByb3cgZnJvbSBhbm90aGVyIGFyZSB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dSb3dMaW5lcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Um93TGluZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Um93TGluZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dSb3dMaW5lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHJ1bnRpbWUgc29ydGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzb3J0aW5nKCk6IHsgYXNjZW5kaW5nVGV4dD86IHN0cmluZywgY2xlYXJUZXh0Pzogc3RyaW5nLCBkZXNjZW5kaW5nVGV4dD86IHN0cmluZywgbW9kZT86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzb3J0aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydGluZyh2YWx1ZTogeyBhc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBjbGVhclRleHQ/OiBzdHJpbmcsIGRlc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBtb2RlPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBzdGF0ZSBzdG9yaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0YXRlU3RvcmluZygpOiB7IGN1c3RvbUxvYWQ/OiBGdW5jdGlvbiwgY3VzdG9tU2F2ZT86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgc2F2aW5nVGltZW91dD86IG51bWJlciwgc3RvcmFnZUtleT86IHN0cmluZywgdHlwZT86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGF0ZVN0b3JpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGF0ZVN0b3JpbmcodmFsdWU6IHsgY3VzdG9tTG9hZD86IEZ1bmN0aW9uLCBjdXN0b21TYXZlPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBzYXZpbmdUaW1lb3V0PzogbnVtYmVyLCBzdG9yYWdlS2V5Pzogc3RyaW5nLCB0eXBlPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YXRlU3RvcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudCB3aGVuIHRoZSBUYWIga2V5IGlzIHVzZWQgZm9yIG5hdmlnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSB0d28td2F5IGRhdGEgYmluZGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0d29XYXlCaW5kaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0d29XYXlCaW5kaW5nRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHR3b1dheUJpbmRpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0d29XYXlCaW5kaW5nRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGV4dCB0aGF0IGRvZXMgbm90IGZpdCBpbnRvIGEgY29sdW1uIHNob3VsZCBiZSB3cmFwcGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdvcmRXcmFwRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3b3JkV3JhcEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCB3b3JkV3JhcEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dvcmRXcmFwRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYW4gYWRhcHRpdmUgZGV0YWlsIHJvdyBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQWRhcHRpdmVEZXRhaWxSb3dQcmVwYXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBjZWxsIGlzIGNsaWNrZWQgb3IgdGFwcGVkLiBFeGVjdXRlZCBiZWZvcmUgb25Sb3dDbGljay5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgY2VsbCBpcyBkb3VibGUtY2xpY2tlZCBvciBkb3VibGUtdGFwcGVkLiBFeGVjdXRlZCBiZWZvcmUgb25Sb3dEYmxDbGljay5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbERibENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgcG9pbnRlciBlbnRlcnMgb3IgbGVhdmVzIGEgY2VsbC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbEhvdmVyQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSBncmlkIGNlbGwgaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbFByZXBhcmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyBjb250ZW50IGlzIHJlYWR5IGFuZCBlYWNoIHRpbWUgdGhlIGNvbnRlbnQgaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ29udGVudFJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIGNvbnRleHQgbWVudSBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ29udGV4dE1lbnVQcmVwYXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGluIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGF0YUVycm9yT2NjdXJyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIGNlbGwgb3Igcm93IHN3aXRjaGVzIHRvIHRoZSBlZGl0aW5nIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FZGl0aW5nU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGFuIGVkaXRvciBpcyBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FZGl0b3JQcmVwYXJlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgY2VsbCdzIGVkaXRvciBpcyBjcmVhdGVkLiBOb3QgZXhlY3V0ZWQgZm9yIGNlbGxzIHdpdGggYW4gZWRpdENlbGxUZW1wbGF0ZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRWRpdG9yUHJlcGFyaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgZm9jdXNlZCBjZWxsIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZvY3VzZWRDZWxsQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSBmb2N1c2VkIGNlbGwgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRm9jdXNlZENlbGxDaGFuZ2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZWQgd2hlbiB0aGUgZm9jdXNlZCByb3cgY2hhbmdlcy4gQXBwbGllcyBvbmx5IHdoZW4gZm9jdXNlZFJvd0VuYWJsZWQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRm9jdXNlZFJvd0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgZm9jdXNlZCByb3cgY2hhbmdlcy4gQXBwbGllcyBvbmx5IHdoZW4gZm9jdXNlZFJvd0VuYWJsZWQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRm9jdXNlZFJvd0NoYW5naW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgbmV3IHJvdyBpcyBhZGRlZCB0byB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0TmV3Um93OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQgaXMgaW4gZm9jdXMgYW5kIGEga2V5IGhhcyBiZWVuIHByZXNzZWQgZG93bi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uS2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIGxvYWRlZCBub2RlcyBhcmUgaW5pdGlhbGl6ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk5vZGVzSW5pdGlhbGl6ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgd2lkZ2V0IG9wdGlvbiBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25PcHRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgZ3JpZCByb3cgaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHJvdyBpcyBjb2xsYXBzZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0NvbGxhcHNlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgcm93IGlzIGNvbGxhcHNlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93Q29sbGFwc2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHJvdyBpcyBkb3VibGUtY2xpY2tlZCBvciBkb3VibGUtdGFwcGVkLiBFeGVjdXRlZCBhZnRlciBvbkNlbGxEYmxDbGljay5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgcm93IGlzIGV4cGFuZGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dFeHBhbmRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgcm93IGlzIGV4cGFuZGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dFeHBhbmRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgbmV3IHJvdyBoYXMgYmVlbiBpbnNlcnRlZCBpbnRvIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93SW5zZXJ0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIG5ldyByb3cgaXMgaW5zZXJ0ZWQgaW50byB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0luc2VydGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSByb3cgaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93UHJlcGFyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgcm93IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd1JlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIHJvdyBpcyByZW1vdmVkIGZyb20gdGhlIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dSZW1vdmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSByb3cgaGFzIGJlZW4gdXBkYXRlZCBpbiB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd1VwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIHJvdyBpcyB1cGRhdGVkIGluIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93VXBkYXRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGNlbGxzIGluIGEgcm93IGFyZSB2YWxpZGF0ZWQgYWdhaW5zdCB2YWxpZGF0aW9uIHJ1bGVzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dWYWxpZGF0aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBzZWxlY3RpbmcgYSByb3cgb3IgY2xlYXJpbmcgaXRzIHNlbGVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB0b29sYmFyIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblRvb2xiYXJQcmVwYXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWNjZXNzS2V5Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWNjZXNzS2V5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFjdGl2ZVN0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFjdGl2ZVN0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWxsb3dDb2x1bW5SZW9yZGVyaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWxsb3dDb2x1bW5SZW9yZGVyaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhbGxvd0NvbHVtblJlc2l6aW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWxsb3dDb2x1bW5SZXNpemluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYXV0b0V4cGFuZEFsbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGF1dG9FeHBhbmRBbGxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNhY2hlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNhY2hlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY2VsbEhpbnRFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY2VsbEhpbnRFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb2x1bW5BdXRvV2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5BdXRvV2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbHVtbkNob29zZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5DaG9vc2VyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGVtcHR5UGFuZWxUZXh0Pzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBtb2RlPzogc3RyaW5nLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCB0aXRsZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb2x1bW5GaXhpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5GaXhpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgZml4Pzogc3RyaW5nLCBsZWZ0UG9zaXRpb24/OiBzdHJpbmcsIHJpZ2h0UG9zaXRpb24/OiBzdHJpbmcsIHVuZml4Pzogc3RyaW5nIH0gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb2x1bW5IaWRpbmdFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uSGlkaW5nRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uTWluV2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5NaW5XaWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb2x1bW5SZXNpemluZ01vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5SZXNpemluZ01vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxEZXZFeHByZXNzLnVpLmR4VHJlZUxpc3RDb2x1bW4gfCBzdHJpbmc+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbHVtbldpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uV2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY3VzdG9taXplQ29sdW1uc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbWl6ZUNvbHVtbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhU291cmNlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YVNvdXJjZUNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhU3RydWN0dXJlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YVN0cnVjdHVyZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRpc2FibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGlzYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVkaXRpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlZGl0aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd0FkZGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgYWxsb3dEZWxldGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgYWxsb3dVcGRhdGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgZm9ybT86IERldkV4cHJlc3MudWkuZHhGb3JtT3B0aW9ucywgbW9kZT86IHN0cmluZywgcG9wdXA/OiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zLCByZWZyZXNoTW9kZT86IHN0cmluZywgc2VsZWN0VGV4dE9uRWRpdFN0YXJ0PzogYm9vbGVhbiwgc3RhcnRFZGl0QWN0aW9uPzogc3RyaW5nLCB0ZXh0cz86IHsgYWRkUm93Pzogc3RyaW5nLCBhZGRSb3dUb05vZGU/OiBzdHJpbmcsIGNhbmNlbEFsbENoYW5nZXM/OiBzdHJpbmcsIGNhbmNlbFJvd0NoYW5nZXM/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVNZXNzYWdlPzogc3RyaW5nLCBjb25maXJtRGVsZXRlVGl0bGU/OiBzdHJpbmcsIGRlbGV0ZVJvdz86IHN0cmluZywgZWRpdFJvdz86IHN0cmluZywgc2F2ZUFsbENoYW5nZXM/OiBzdHJpbmcsIHNhdmVSb3dDaGFuZ2VzPzogc3RyaW5nLCB1bmRlbGV0ZVJvdz86IHN0cmluZywgdmFsaWRhdGlvbkNhbmNlbENoYW5nZXM/OiBzdHJpbmcgfSwgdXNlSWNvbnM/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZWxlbWVudEF0dHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbGVtZW50QXR0ckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlcnJvclJvd0VuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlcnJvclJvd0VuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGV4cGFuZGVkUm93S2V5c0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGV4cGFuZGVkUm93S2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZXhwYW5kTm9kZXNPbkZpbHRlcmluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGV4cGFuZE5vZGVzT25GaWx0ZXJpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZpbHRlckJ1aWxkZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJCdWlsZGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy51aS5keEZpbHRlckJ1aWxkZXJPcHRpb25zPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZpbHRlckJ1aWxkZXJQb3B1cENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlckJ1aWxkZXJQb3B1cENoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnM+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlck1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyUGFuZWxDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmaWx0ZXJFbmFibGVkPzogYm9vbGVhbiwgdGV4dHM/OiB7IGNsZWFyRmlsdGVyPzogc3RyaW5nLCBjcmVhdGVGaWx0ZXI/OiBzdHJpbmcsIGZpbHRlckVuYWJsZWRIaW50Pzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyUm93Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyUm93Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhcHBseUZpbHRlcj86IHN0cmluZywgYXBwbHlGaWx0ZXJUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuRW5kVGV4dD86IHN0cmluZywgYmV0d2VlblN0YXJ0VGV4dD86IHN0cmluZywgb3BlcmF0aW9uRGVzY3JpcHRpb25zPzogeyBiZXR3ZWVuPzogc3RyaW5nLCBjb250YWlucz86IHN0cmluZywgZW5kc1dpdGg/OiBzdHJpbmcsIGVxdWFsPzogc3RyaW5nLCBncmVhdGVyVGhhbj86IHN0cmluZywgZ3JlYXRlclRoYW5PckVxdWFsPzogc3RyaW5nLCBsZXNzVGhhbj86IHN0cmluZywgbGVzc1RoYW5PckVxdWFsPzogc3RyaW5nLCBub3RDb250YWlucz86IHN0cmluZywgbm90RXF1YWw/OiBzdHJpbmcsIHN0YXJ0c1dpdGg/OiBzdHJpbmcgfSwgcmVzZXRPcGVyYXRpb25UZXh0Pzogc3RyaW5nLCBzaG93QWxsVGV4dD86IHN0cmluZywgc2hvd09wZXJhdGlvbkNob29zZXI/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZpbHRlclN5bmNFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyU3luY0VuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZpbHRlclZhbHVlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNlZENvbHVtbkluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNlZENvbHVtbkluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzZWRSb3dFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNlZFJvd0VuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzZWRSb3dJbmRleENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZvY3VzZWRSb3dJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmb2N1c2VkUm93S2V5Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNlZFJvd0tleUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoYXNJdGVtc0V4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoYXNJdGVtc0V4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoZWFkZXJGaWx0ZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoZWFkZXJGaWx0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCB0ZXh0cz86IHsgY2FuY2VsPzogc3RyaW5nLCBlbXB0eVZhbHVlPzogc3RyaW5nLCBvaz86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoZWlnaHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoZWlnaHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoaWdobGlnaHRDaGFuZ2VzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGlnaGxpZ2h0Q2hhbmdlc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGludENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhpbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaXRlbXNFeHByQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaXRlbXNFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUga2V5Ym9hcmROYXZpZ2F0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkga2V5Ym9hcmROYXZpZ2F0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBlZGl0T25LZXlQcmVzcz86IGJvb2xlYW4sIGVudGVyS2V5QWN0aW9uPzogc3RyaW5nLCBlbnRlcktleURpcmVjdGlvbj86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGtleUV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBrZXlFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbG9hZFBhbmVsQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbG9hZFBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBpbmRpY2F0b3JTcmM/OiBzdHJpbmcsIHNoYWRpbmc/OiBib29sZWFuLCBzaGFkaW5nQ29sb3I/OiBzdHJpbmcsIHNob3dJbmRpY2F0b3I/OiBib29sZWFuLCBzaG93UGFuZT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbm9EYXRhVGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG5vRGF0YVRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcGFnZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYWdlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dlZFBhZ2VTaXplcz86IEFycmF5PG51bWJlcj4sIGluZm9UZXh0Pzogc3RyaW5nLCBzaG93SW5mbz86IGJvb2xlYW4sIHNob3dOYXZpZ2F0aW9uQnV0dG9ucz86IGJvb2xlYW4sIHNob3dQYWdlU2l6ZVNlbGVjdG9yPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYWdpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYWdpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVuYWJsZWQ/OiBib29sZWFuLCBwYWdlSW5kZXg/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcGFyZW50SWRFeHByQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGFyZW50SWRFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVtb3RlT3BlcmF0aW9uc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlbW90ZU9wZXJhdGlvbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGZpbHRlcmluZz86IGJvb2xlYW4sIGdyb3VwaW5nPzogYm9vbGVhbiwgc29ydGluZz86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZW5kZXJBc3luY0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlbmRlckFzeW5jQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZXBhaW50Q2hhbmdlc09ubHlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZXBhaW50Q2hhbmdlc09ubHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJvb3RWYWx1ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJvb3RWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByb3dBbHRlcm5hdGlvbkVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByb3dBbHRlcm5hdGlvbkVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJ0bEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBydGxFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzY3JvbGxpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzY3JvbGxpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGNvbHVtblJlbmRlcmluZ01vZGU/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcsIHByZWxvYWRFbmFibGVkPzogYm9vbGVhbiwgcm93UmVuZGVyaW5nTW9kZT86IHN0cmluZywgc2Nyb2xsQnlDb250ZW50PzogYm9vbGVhbiwgc2Nyb2xsQnlUaHVtYj86IGJvb2xlYW4sIHNob3dTY3JvbGxiYXI/OiBzdHJpbmcsIHVzZU5hdGl2ZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWFyY2hQYW5lbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlYXJjaFBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBoaWdobGlnaHRDYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiwgaGlnaGxpZ2h0U2VhcmNoVGV4dD86IGJvb2xlYW4sIHBsYWNlaG9sZGVyPzogc3RyaW5nLCBzZWFyY2hWaXNpYmxlQ29sdW1uc09ubHk/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWxlY3RlZFJvd0tleXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZFJvd0tleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGlvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dTZWxlY3RBbGw/OiBib29sZWFuLCBtb2RlPzogc3RyaW5nLCByZWN1cnNpdmU/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd0JvcmRlcnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93Qm9yZGVyc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd0NvbHVtbkhlYWRlcnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93Q29sdW1uSGVhZGVyc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd0NvbHVtbkxpbmVzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0NvbHVtbkxpbmVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Um93TGluZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93Um93TGluZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNvcnRpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzb3J0aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBjbGVhclRleHQ/OiBzdHJpbmcsIGRlc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBtb2RlPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc3RhdGVTdG9yaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3RhdGVTdG9yaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjdXN0b21Mb2FkPzogRnVuY3Rpb24sIGN1c3RvbVNhdmU/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIHNhdmluZ1RpbWVvdXQ/OiBudW1iZXIsIHN0b3JhZ2VLZXk/OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0YWJJbmRleENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRhYkluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHR3b1dheUJpbmRpbmdFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdHdvV2F5QmluZGluZ0VuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpc2libGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB3aWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgd29yZFdyYXBFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd29yZFdyYXBFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG5cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlDb2x1bW5Db21wb25lbnQpXHJcbiAgICBnZXQgY29sdW1uc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlDb2x1bW5Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignY29sdW1ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX3dhdGNoZXJIZWxwZXI6IFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX2lkaDogSXRlcmFibGVEaWZmZXJIZWxwZXIsIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXHJcbiAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IGFueSkge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBuZ1pvbmUsIHRlbXBsYXRlSG9zdCwgX3dhdGNoZXJIZWxwZXIsIHRyYW5zZmVyU3RhdGUsIHBsYXRmb3JtSWQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdhZGFwdGl2ZURldGFpbFJvd1ByZXBhcmluZycsIGVtaXQ6ICdvbkFkYXB0aXZlRGV0YWlsUm93UHJlcGFyaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NlbGxDbGljaycsIGVtaXQ6ICdvbkNlbGxDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjZWxsRGJsQ2xpY2snLCBlbWl0OiAnb25DZWxsRGJsQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2VsbEhvdmVyQ2hhbmdlZCcsIGVtaXQ6ICdvbkNlbGxIb3ZlckNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2VsbFByZXBhcmVkJywgZW1pdDogJ29uQ2VsbFByZXBhcmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NvbnRlbnRSZWFkeScsIGVtaXQ6ICdvbkNvbnRlbnRSZWFkeScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjb250ZXh0TWVudVByZXBhcmluZycsIGVtaXQ6ICdvbkNvbnRleHRNZW51UHJlcGFyaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2RhdGFFcnJvck9jY3VycmVkJywgZW1pdDogJ29uRGF0YUVycm9yT2NjdXJyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZGlzcG9zaW5nJywgZW1pdDogJ29uRGlzcG9zaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2VkaXRpbmdTdGFydCcsIGVtaXQ6ICdvbkVkaXRpbmdTdGFydCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdlZGl0b3JQcmVwYXJlZCcsIGVtaXQ6ICdvbkVkaXRvclByZXBhcmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2VkaXRvclByZXBhcmluZycsIGVtaXQ6ICdvbkVkaXRvclByZXBhcmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmb2N1c2VkQ2VsbENoYW5nZWQnLCBlbWl0OiAnb25Gb2N1c2VkQ2VsbENoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZm9jdXNlZENlbGxDaGFuZ2luZycsIGVtaXQ6ICdvbkZvY3VzZWRDZWxsQ2hhbmdpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZm9jdXNlZFJvd0NoYW5nZWQnLCBlbWl0OiAnb25Gb2N1c2VkUm93Q2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmb2N1c2VkUm93Q2hhbmdpbmcnLCBlbWl0OiAnb25Gb2N1c2VkUm93Q2hhbmdpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Jbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0TmV3Um93JywgZW1pdDogJ29uSW5pdE5ld1JvdycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdrZXlEb3duJywgZW1pdDogJ29uS2V5RG93bicgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdub2Rlc0luaXRpYWxpemVkJywgZW1pdDogJ29uTm9kZXNJbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dDbGljaycsIGVtaXQ6ICdvblJvd0NsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0NvbGxhcHNlZCcsIGVtaXQ6ICdvblJvd0NvbGxhcHNlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dDb2xsYXBzaW5nJywgZW1pdDogJ29uUm93Q29sbGFwc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dEYmxDbGljaycsIGVtaXQ6ICdvblJvd0RibENsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0V4cGFuZGVkJywgZW1pdDogJ29uUm93RXhwYW5kZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93RXhwYW5kaW5nJywgZW1pdDogJ29uUm93RXhwYW5kaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0luc2VydGVkJywgZW1pdDogJ29uUm93SW5zZXJ0ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93SW5zZXJ0aW5nJywgZW1pdDogJ29uUm93SW5zZXJ0aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd1ByZXBhcmVkJywgZW1pdDogJ29uUm93UHJlcGFyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93UmVtb3ZlZCcsIGVtaXQ6ICdvblJvd1JlbW92ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93UmVtb3ZpbmcnLCBlbWl0OiAnb25Sb3dSZW1vdmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dVcGRhdGVkJywgZW1pdDogJ29uUm93VXBkYXRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dVcGRhdGluZycsIGVtaXQ6ICdvblJvd1VwZGF0aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd1ZhbGlkYXRpbmcnLCBlbWl0OiAnb25Sb3dWYWxpZGF0aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3NlbGVjdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25TZWxlY3Rpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Rvb2xiYXJQcmVwYXJpbmcnLCBlbWl0OiAnb25Ub29sYmFyUHJlcGFyaW5nJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY2Nlc3NLZXlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FjdGl2ZVN0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWxsb3dDb2x1bW5SZW9yZGVyaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbGxvd0NvbHVtblJlc2l6aW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhdXRvRXhwYW5kQWxsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjYWNoZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NlbGxIaW50RW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uQXV0b1dpZHRoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5DaG9vc2VyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5GaXhpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtbkhpZGluZ0VuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtbk1pbldpZHRoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5SZXNpemluZ01vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtbnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtbldpZHRoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjdXN0b21pemVDb2x1bW5zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhU291cmNlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhU3RydWN0dXJlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRlU2VyaWFsaXphdGlvbkZvcm1hdENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VkaXRpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlcnJvclJvd0VuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2V4cGFuZGVkUm93S2V5c0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZXhwYW5kTm9kZXNPbkZpbHRlcmluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyQnVpbGRlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyQnVpbGRlclBvcHVwQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJNb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJQYW5lbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyUm93Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJTeW5jRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyVmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzZWRDb2x1bW5JbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9jdXNlZFJvd0VuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzZWRSb3dJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9jdXNlZFJvd0tleUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hhc0l0ZW1zRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVhZGVyRmlsdGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpZ2hsaWdodENoYW5nZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hvdmVyU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpdGVtc0V4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2tleWJvYXJkTmF2aWdhdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAna2V5RXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbG9hZFBhbmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdub0RhdGFUZXh0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYWdlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGFnaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYXJlbnRJZEV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlbW90ZU9wZXJhdGlvbnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlbmRlckFzeW5jQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZXBhaW50Q2hhbmdlc09ubHlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Jvb3RWYWx1ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncm93QWx0ZXJuYXRpb25FbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzY3JvbGxpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlYXJjaFBhbmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWxlY3RlZFJvd0tleXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0JvcmRlcnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dDb2x1bW5IZWFkZXJzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93Q29sdW1uTGluZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dSb3dMaW5lc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc29ydGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3RhdGVTdG9yaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0YWJJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndHdvV2F5QmluZGluZ0VuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dpZHRoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3b3JkV3JhcEVuYWJsZWRDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5faWRoLnNldEhvc3QodGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHhUcmVlTGlzdChlbGVtZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kZXN0cm95V2lkZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdjb2x1bW5zJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2RhdGFTb3VyY2UnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnZXhwYW5kZWRSb3dLZXlzJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3NlbGVjdGVkUm93S2V5cycsIGNoYW5nZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQ2hhbmdlcyhwcm9wOiBzdHJpbmcsIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoIShwcm9wIGluIHRoaXMuX29wdGlvbnNUb1VwZGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faWRoLnNldHVwKHByb3AsIGNoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2NvbHVtbnMnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnZGF0YVNvdXJjZScpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdleHBhbmRlZFJvd0tleXMnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnc2VsZWN0ZWRSb3dLZXlzJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4b0NvbHVtbkNob29zZXJNb2R1bGUsXHJcbiAgICBEeG9Db2x1bW5GaXhpbmdNb2R1bGUsXHJcbiAgICBEeG9UZXh0c01vZHVsZSxcclxuICAgIER4aUNvbHVtbk1vZHVsZSxcclxuICAgIER4aUJ1dHRvbk1vZHVsZSxcclxuICAgIER4b0hlYWRlckZpbHRlck1vZHVsZSxcclxuICAgIER4b0xvb2t1cE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b0Zvcm1JdGVtTW9kdWxlLFxyXG4gICAgRHhvTGFiZWxNb2R1bGUsXHJcbiAgICBEeGlWYWxpZGF0aW9uUnVsZU1vZHVsZSxcclxuICAgIER4b0VkaXRpbmdNb2R1bGUsXHJcbiAgICBEeG9Gb3JtTW9kdWxlLFxyXG4gICAgRHhvQ29sQ291bnRCeVNjcmVlbk1vZHVsZSxcclxuICAgIER4aUl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9UYWJQYW5lbE9wdGlvbnNNb2R1bGUsXHJcbiAgICBEeGlUYWJNb2R1bGUsXHJcbiAgICBEeG9CdXR0b25PcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvUG9wdXBNb2R1bGUsXHJcbiAgICBEeG9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9IaWRlTW9kdWxlLFxyXG4gICAgRHhvU2hvd01vZHVsZSxcclxuICAgIER4b1Bvc2l0aW9uTW9kdWxlLFxyXG4gICAgRHhvQXRNb2R1bGUsXHJcbiAgICBEeG9Cb3VuZGFyeU9mZnNldE1vZHVsZSxcclxuICAgIER4b0NvbGxpc2lvbk1vZHVsZSxcclxuICAgIER4b015TW9kdWxlLFxyXG4gICAgRHhvT2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhpVG9vbGJhckl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJCdWlsZGVyTW9kdWxlLFxyXG4gICAgRHhpQ3VzdG9tT3BlcmF0aW9uTW9kdWxlLFxyXG4gICAgRHhpRmllbGRNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJPcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Hcm91cE9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJQb3B1cE1vZHVsZSxcclxuICAgIER4b0ZpbHRlclBhbmVsTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyUm93TW9kdWxlLFxyXG4gICAgRHhvT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvS2V5Ym9hcmROYXZpZ2F0aW9uTW9kdWxlLFxyXG4gICAgRHhvTG9hZFBhbmVsTW9kdWxlLFxyXG4gICAgRHhvUGFnZXJNb2R1bGUsXHJcbiAgICBEeG9QYWdpbmdNb2R1bGUsXHJcbiAgICBEeG9SZW1vdGVPcGVyYXRpb25zTW9kdWxlLFxyXG4gICAgRHhvU2Nyb2xsaW5nTW9kdWxlLFxyXG4gICAgRHhvU2VhcmNoUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9TZWxlY3Rpb25Nb2R1bGUsXHJcbiAgICBEeG9Tb3J0aW5nTW9kdWxlLFxyXG4gICAgRHhvU3RhdGVTdG9yaW5nTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeFRyZWVMaXN0Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeFRyZWVMaXN0Q29tcG9uZW50LFxyXG4gICAgRHhvQ29sdW1uQ2hvb3Nlck1vZHVsZSxcclxuICAgIER4b0NvbHVtbkZpeGluZ01vZHVsZSxcclxuICAgIER4b1RleHRzTW9kdWxlLFxyXG4gICAgRHhpQ29sdW1uTW9kdWxlLFxyXG4gICAgRHhpQnV0dG9uTW9kdWxlLFxyXG4gICAgRHhvSGVhZGVyRmlsdGVyTW9kdWxlLFxyXG4gICAgRHhvTG9va3VwTW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvRm9ybUl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4aVZhbGlkYXRpb25SdWxlTW9kdWxlLFxyXG4gICAgRHhvRWRpdGluZ01vZHVsZSxcclxuICAgIER4b0Zvcm1Nb2R1bGUsXHJcbiAgICBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4b1RhYlBhbmVsT3B0aW9uc01vZHVsZSxcclxuICAgIER4aVRhYk1vZHVsZSxcclxuICAgIER4b0J1dHRvbk9wdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Qb3B1cE1vZHVsZSxcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0hpZGVNb2R1bGUsXHJcbiAgICBEeG9TaG93TW9kdWxlLFxyXG4gICAgRHhvUG9zaXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BdE1vZHVsZSxcclxuICAgIER4b0JvdW5kYXJ5T2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhvQ29sbGlzaW9uTW9kdWxlLFxyXG4gICAgRHhvTXlNb2R1bGUsXHJcbiAgICBEeG9PZmZzZXRNb2R1bGUsXHJcbiAgICBEeGlUb29sYmFySXRlbU1vZHVsZSxcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJNb2R1bGUsXHJcbiAgICBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUsXHJcbiAgICBEeGlGaWVsZE1vZHVsZSxcclxuICAgIER4b0ZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIER4b0dyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyQnVpbGRlclBvcHVwTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJSb3dNb2R1bGUsXHJcbiAgICBEeG9PcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9LZXlib2FyZE5hdmlnYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9Mb2FkUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9QYWdlck1vZHVsZSxcclxuICAgIER4b1BhZ2luZ01vZHVsZSxcclxuICAgIER4b1JlbW90ZU9wZXJhdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9TY3JvbGxpbmdNb2R1bGUsXHJcbiAgICBEeG9TZWFyY2hQYW5lbE1vZHVsZSxcclxuICAgIER4b1NlbGVjdGlvbk1vZHVsZSxcclxuICAgIER4b1NvcnRpbmdNb2R1bGUsXHJcbiAgICBEeG9TdGF0ZVN0b3JpbmdNb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhUcmVlTGlzdE1vZHVsZSB7IH1cclxuIl19