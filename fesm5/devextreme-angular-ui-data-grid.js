import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxDataGrid from 'devextreme/ui/data_grid';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiColumnComponent, DxiSortByGroupSummaryInfoComponent, DxoColumnChooserModule, DxoColumnFixingModule, DxoTextsModule, DxiColumnModule, DxiButtonModule, DxoHeaderFilterModule, DxoLookupModule, DxoFormatModule, DxoFormItemModule, DxoLabelModule, DxiValidationRuleModule, DxoEditingModule, DxoFormModule, DxoColCountByScreenModule, DxiItemModule, DxoTabPanelOptionsModule, DxiTabModule, DxoButtonOptionsModule, DxoPopupModule, DxoAnimationModule, DxoHideModule, DxoShowModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxiToolbarItemModule, DxoExportModule, DxoFilterBuilderModule, DxiCustomOperationModule, DxiFieldModule, DxoFilterOperationDescriptionsModule, DxoGroupOperationDescriptionsModule, DxoFilterBuilderPopupModule, DxoFilterPanelModule, DxoFilterRowModule, DxoOperationDescriptionsModule, DxoGroupingModule, DxoGroupPanelModule, DxoKeyboardNavigationModule, DxoLoadPanelModule, DxoMasterDetailModule, DxoPagerModule, DxoPagingModule, DxoRemoteOperationsModule, DxoScrollingModule, DxoSearchPanelModule, DxoSelectionModule, DxiSortByGroupSummaryInfoModule, DxoSortingModule, DxoStateStoringModule, DxoSummaryModule, DxiGroupItemModule, DxoValueFormatModule, DxiTotalItemModule } from 'devextreme-angular/ui/nested';

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
 * The DataGrid is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as sorting, grouping, filtering, as well as more advanced capabilities, like state storing, export to Excel, master-detail interface, and many others.
 */
var DxDataGridComponent = /** @class */ (function (_super) {
    __extends(DxDataGridComponent, _super);
    function DxDataGridComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
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
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'focusedCellChanged', emit: 'onFocusedCellChanged' },
            { subscribe: 'focusedCellChanging', emit: 'onFocusedCellChanging' },
            { subscribe: 'focusedRowChanged', emit: 'onFocusedRowChanged' },
            { subscribe: 'focusedRowChanging', emit: 'onFocusedRowChanging' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'initNewRow', emit: 'onInitNewRow' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
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
            { emit: 'customizeExportDataChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dateSerializationFormatChange' },
            { emit: 'disabledChange' },
            { emit: 'editingChange' },
            { emit: 'elementAttrChange' },
            { emit: 'errorRowEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'filterBuilderChange' },
            { emit: 'filterBuilderPopupChange' },
            { emit: 'filterPanelChange' },
            { emit: 'filterRowChange' },
            { emit: 'filterSyncEnabledChange' },
            { emit: 'filterValueChange' },
            { emit: 'focusedColumnIndexChange' },
            { emit: 'focusedRowEnabledChange' },
            { emit: 'focusedRowIndexChange' },
            { emit: 'focusedRowKeyChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupingChange' },
            { emit: 'groupPanelChange' },
            { emit: 'headerFilterChange' },
            { emit: 'heightChange' },
            { emit: 'highlightChangesChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'keyboardNavigationChange' },
            { emit: 'keyExprChange' },
            { emit: 'loadPanelChange' },
            { emit: 'masterDetailChange' },
            { emit: 'noDataTextChange' },
            { emit: 'pagerChange' },
            { emit: 'pagingChange' },
            { emit: 'remoteOperationsChange' },
            { emit: 'renderAsyncChange' },
            { emit: 'repaintChangesOnlyChange' },
            { emit: 'rowAlternationEnabledChange' },
            { emit: 'rowTemplateChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollingChange' },
            { emit: 'searchPanelChange' },
            { emit: 'selectedRowKeysChange' },
            { emit: 'selectionChange' },
            { emit: 'selectionFilterChange' },
            { emit: 'showBordersChange' },
            { emit: 'showColumnHeadersChange' },
            { emit: 'showColumnLinesChange' },
            { emit: 'showRowLinesChange' },
            { emit: 'sortByGroupSummaryInfoChange' },
            { emit: 'sortingChange' },
            { emit: 'stateStoringChange' },
            { emit: 'summaryChange' },
            { emit: 'tabIndexChange' },
            { emit: 'twoWayBindingEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'wordWrapEnabledChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxDataGridComponent.prototype, "accessKey", {
        /**
         * Specifies the shortcut key that sets focus on the widget.
         */
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "activeStateEnabled", {
        /**
         * Specifies whether or not the widget changes its state when interacting with a user.
         */
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "allowColumnReordering", {
        /**
         * Specifies whether a user can reorder columns.
         */
        get: function () {
            return this._getOption('allowColumnReordering');
        },
        set: function (value) {
            this._setOption('allowColumnReordering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "allowColumnResizing", {
        /**
         * Specifies whether a user can resize columns.
         */
        get: function () {
            return this._getOption('allowColumnResizing');
        },
        set: function (value) {
            this._setOption('allowColumnResizing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "cacheEnabled", {
        /**
         * Specifies whether data should be cached.
         */
        get: function () {
            return this._getOption('cacheEnabled');
        },
        set: function (value) {
            this._setOption('cacheEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "cellHintEnabled", {
        /**
         * Enables a hint that appears when a user hovers the mouse pointer over a cell with truncated content.
         */
        get: function () {
            return this._getOption('cellHintEnabled');
        },
        set: function (value) {
            this._setOption('cellHintEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnAutoWidth", {
        get: function () {
            return this._getOption('columnAutoWidth');
        },
        set: function (value) {
            this._setOption('columnAutoWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnChooser", {
        /**
         * Configures the column chooser.
         */
        get: function () {
            return this._getOption('columnChooser');
        },
        set: function (value) {
            this._setOption('columnChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnFixing", {
        /**
         * Configures column fixing.
         */
        get: function () {
            return this._getOption('columnFixing');
        },
        set: function (value) {
            this._setOption('columnFixing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnHidingEnabled", {
        /**
         * Specifies whether the widget should hide columns to adapt to the screen or container size. Ignored if allowColumnResizing is true and columnResizingMode is "widget".
         */
        get: function () {
            return this._getOption('columnHidingEnabled');
        },
        set: function (value) {
            this._setOption('columnHidingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnMinWidth", {
        /**
         * Specifies the minimum width of columns.
         */
        get: function () {
            return this._getOption('columnMinWidth');
        },
        set: function (value) {
            this._setOption('columnMinWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnResizingMode", {
        /**
         * Specifies how the widget resizes columns. Applies only if allowColumnResizing is true.
         */
        get: function () {
            return this._getOption('columnResizingMode');
        },
        set: function (value) {
            this._setOption('columnResizingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columns", {
        /**
         * An array of grid columns.
         */
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this._setOption('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnWidth", {
        /**
         * Specifies the width for all data columns. Has a lower priority than the column.width option.
         */
        get: function () {
            return this._getOption('columnWidth');
        },
        set: function (value) {
            this._setOption('columnWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "customizeColumns", {
        /**
         * Customizes columns after they are created.
         */
        get: function () {
            return this._getOption('customizeColumns');
        },
        set: function (value) {
            this._setOption('customizeColumns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "customizeExportData", {
        /**
         * Customizes data before export. You can use the export.customizeExcelCell function instead.
         */
        get: function () {
            return this._getOption('customizeExportData');
        },
        set: function (value) {
            this._setOption('customizeExportData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "dataSource", {
        /**
         * Binds the widget to data.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "dateSerializationFormat", {
        /**
         * Specifies the format in which date-time values should be sent to the server. Use it only if you do not specify the dataSource at design time.
         */
        get: function () {
            return this._getOption('dateSerializationFormat');
        },
        set: function (value) {
            this._setOption('dateSerializationFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "editing", {
        /**
         * Configures editing.
         */
        get: function () {
            return this._getOption('editing');
        },
        set: function (value) {
            this._setOption('editing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "errorRowEnabled", {
        /**
         * Indicates whether to show the error row.
         */
        get: function () {
            return this._getOption('errorRowEnabled');
        },
        set: function (value) {
            this._setOption('errorRowEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "export", {
        /**
         * Configures client-side exporting.
         */
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterBuilder", {
        /**
         * Configures the integrated filter builder.
         */
        get: function () {
            return this._getOption('filterBuilder');
        },
        set: function (value) {
            this._setOption('filterBuilder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterBuilderPopup", {
        /**
         * Configures the popup in which the integrated filter builder is shown.
         */
        get: function () {
            return this._getOption('filterBuilderPopup');
        },
        set: function (value) {
            this._setOption('filterBuilderPopup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterPanel", {
        /**
         * Configures the filter panel.
         */
        get: function () {
            return this._getOption('filterPanel');
        },
        set: function (value) {
            this._setOption('filterPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterRow", {
        /**
         * Configures the filter row.
         */
        get: function () {
            return this._getOption('filterRow');
        },
        set: function (value) {
            this._setOption('filterRow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterSyncEnabled", {
        /**
         * Specifies whether to synchronize the filter row, header filter, and filter builder. The synchronized filter expression is stored in the filterValue option.
         */
        get: function () {
            return this._getOption('filterSyncEnabled');
        },
        set: function (value) {
            this._setOption('filterSyncEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterValue", {
        /**
         * Specifies a filter expression.
         */
        get: function () {
            return this._getOption('filterValue');
        },
        set: function (value) {
            this._setOption('filterValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusedColumnIndex", {
        /**
         * Specifies the index of the column focused initially or currently in the data row area.
         */
        get: function () {
            return this._getOption('focusedColumnIndex');
        },
        set: function (value) {
            this._setOption('focusedColumnIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusedRowEnabled", {
        /**
         * Specifies whether the focused row feature is enabled.
         */
        get: function () {
            return this._getOption('focusedRowEnabled');
        },
        set: function (value) {
            this._setOption('focusedRowEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusedRowIndex", {
        /**
         * Specifies the initially or currently focused grid row's index. Use it when focusedRowEnabled is true.
         */
        get: function () {
            return this._getOption('focusedRowIndex');
        },
        set: function (value) {
            this._setOption('focusedRowIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusedRowKey", {
        /**
         * Specifies initially or currently focused grid row's key. Use it when focusedRowEnabled is true.
         */
        get: function () {
            return this._getOption('focusedRowKey');
        },
        set: function (value) {
            this._setOption('focusedRowKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether the widget can be focused using keyboard navigation.
         */
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "grouping", {
        /**
         * Configures grouping.
         */
        get: function () {
            return this._getOption('grouping');
        },
        set: function (value) {
            this._setOption('grouping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "groupPanel", {
        /**
         * Configures the group panel.
         */
        get: function () {
            return this._getOption('groupPanel');
        },
        set: function (value) {
            this._setOption('groupPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "headerFilter", {
        /**
         * Configures the header filter feature.
         */
        get: function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "highlightChanges", {
        /**
         * Specifies whether to highlight rows and cells with edited data. repaintChangesOnly should be true.
         */
        get: function () {
            return this._getOption('highlightChanges');
        },
        set: function (value) {
            this._setOption('highlightChanges', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "hint", {
        /**
         * Specifies text for a hint that appears when a user pauses on the widget.
         */
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "hoverStateEnabled", {
        /**
         * Specifies whether the widget changes its state when a user pauses on it.
         */
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "keyboardNavigation", {
        /**
         * Configures keyboard navigation.
         */
        get: function () {
            return this._getOption('keyboardNavigation');
        },
        set: function (value) {
            this._setOption('keyboardNavigation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "keyExpr", {
        /**
         * Specifies which data field provides keys for data items. Applies only if data is a simple array.
         */
        get: function () {
            return this._getOption('keyExpr');
        },
        set: function (value) {
            this._setOption('keyExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "loadPanel", {
        /**
         * Configures the load panel.
         */
        get: function () {
            return this._getOption('loadPanel');
        },
        set: function (value) {
            this._setOption('loadPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "masterDetail", {
        /**
         * Allows you to build a master-detail interface in the grid.
         */
        get: function () {
            return this._getOption('masterDetail');
        },
        set: function (value) {
            this._setOption('masterDetail', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "noDataText", {
        /**
         * Specifies text shown when the widget does not display any data.
         */
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "pager", {
        /**
         * Configures the pager.
         */
        get: function () {
            return this._getOption('pager');
        },
        set: function (value) {
            this._setOption('pager', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "paging", {
        /**
         * Configures paging.
         */
        get: function () {
            return this._getOption('paging');
        },
        set: function (value) {
            this._setOption('paging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "remoteOperations", {
        /**
         * Notifies the DataGrid of the server's data processing operations.
         */
        get: function () {
            return this._getOption('remoteOperations');
        },
        set: function (value) {
            this._setOption('remoteOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "renderAsync", {
        /**
         * Specifies whether to render the filter row, command columns, and columns with showEditorAlways set to true after other elements.
         */
        get: function () {
            return this._getOption('renderAsync');
        },
        set: function (value) {
            this._setOption('renderAsync', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "repaintChangesOnly", {
        /**
         * Specifies whether to repaint only those cells whose data changed.
         */
        get: function () {
            return this._getOption('repaintChangesOnly');
        },
        set: function (value) {
            this._setOption('repaintChangesOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rowAlternationEnabled", {
        /**
         * Specifies whether rows should be shaded differently.
         */
        get: function () {
            return this._getOption('rowAlternationEnabled');
        },
        set: function (value) {
            this._setOption('rowAlternationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rowTemplate", {
        /**
         * Specifies a custom template for rows.
         */
        get: function () {
            return this._getOption('rowTemplate');
        },
        set: function (value) {
            this._setOption('rowTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "scrolling", {
        /**
         * Configures scrolling.
         */
        get: function () {
            return this._getOption('scrolling');
        },
        set: function (value) {
            this._setOption('scrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "searchPanel", {
        /**
         * Configures the search panel.
         */
        get: function () {
            return this._getOption('searchPanel');
        },
        set: function (value) {
            this._setOption('searchPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selectedRowKeys", {
        /**
         * Allows you to select rows or determine which rows are selected.
         */
        get: function () {
            return this._getOption('selectedRowKeys');
        },
        set: function (value) {
            this._setOption('selectedRowKeys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selection", {
        /**
         * Configures runtime selection.
         */
        get: function () {
            return this._getOption('selection');
        },
        set: function (value) {
            this._setOption('selection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selectionFilter", {
        /**
         * Specifies filters for the rows that must be selected initially. Applies only if selection.deferred is true.
         */
        get: function () {
            return this._getOption('selectionFilter');
        },
        set: function (value) {
            this._setOption('selectionFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showBorders", {
        /**
         * Specifies whether the outer borders of the widget are visible.
         */
        get: function () {
            return this._getOption('showBorders');
        },
        set: function (value) {
            this._setOption('showBorders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showColumnHeaders", {
        /**
         * Specifies whether column headers are visible.
         */
        get: function () {
            return this._getOption('showColumnHeaders');
        },
        set: function (value) {
            this._setOption('showColumnHeaders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showColumnLines", {
        /**
         * Specifies whether vertical lines that separate one column from another are visible.
         */
        get: function () {
            return this._getOption('showColumnLines');
        },
        set: function (value) {
            this._setOption('showColumnLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showRowLines", {
        /**
         * Specifies whether horizontal lines that separate one row from another are visible.
         */
        get: function () {
            return this._getOption('showRowLines');
        },
        set: function (value) {
            this._setOption('showRowLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sortByGroupSummaryInfo", {
        /**
         * Allows you to sort groups according to the values of group summary items.
         */
        get: function () {
            return this._getOption('sortByGroupSummaryInfo');
        },
        set: function (value) {
            this._setOption('sortByGroupSummaryInfo', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sorting", {
        /**
         * Configures runtime sorting.
         */
        get: function () {
            return this._getOption('sorting');
        },
        set: function (value) {
            this._setOption('sorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "stateStoring", {
        /**
         * Configures state storing.
         */
        get: function () {
            return this._getOption('stateStoring');
        },
        set: function (value) {
            this._setOption('stateStoring', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "summary", {
        /**
         * Specifies the options of the grid summary.
         */
        get: function () {
            return this._getOption('summary');
        },
        set: function (value) {
            this._setOption('summary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "tabIndex", {
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "twoWayBindingEnabled", {
        /**
         * Specifies whether to enable two-way data binding.
         */
        get: function () {
            return this._getOption('twoWayBindingEnabled');
        },
        set: function (value) {
            this._setOption('twoWayBindingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "visible", {
        /**
         * Specifies whether the widget is visible.
         */
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "wordWrapEnabled", {
        /**
         * Specifies whether text that does not fit into a column should be wrapped.
         */
        get: function () {
            return this._getOption('wordWrapEnabled');
        },
        set: function (value) {
            this._setOption('wordWrapEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnsChildren", {
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this.setChildren('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sortByGroupSummaryInfoChildren", {
        get: function () {
            return this._getOption('sortByGroupSummaryInfo');
        },
        set: function (value) {
            this.setChildren('sortByGroupSummaryInfo', value);
        },
        enumerable: true,
        configurable: true
    });
    DxDataGridComponent.prototype._createInstance = function (element, options) {
        return new DxDataGrid(element, options);
    };
    DxDataGridComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDataGridComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('columns', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('keyExpr', changes);
        this.setupChanges('selectedRowKeys', changes);
        this.setupChanges('sortByGroupSummaryInfo', changes);
    };
    DxDataGridComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxDataGridComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('columns');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('keyExpr');
        this._idh.doCheck('selectedRowKeys');
        this._idh.doCheck('sortByGroupSummaryInfo');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxDataGridComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxDataGridComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: IterableDifferHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "allowColumnReordering", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "allowColumnResizing", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "cacheEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "cellHintEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnAutoWidth", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnChooser", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnFixing", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnHidingEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnMinWidth", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnResizingMode", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "columns", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnWidth", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "customizeColumns", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "customizeExportData", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "dateSerializationFormat", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "editing", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "errorRowEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "export", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterBuilder", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterBuilderPopup", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterPanel", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterRow", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterSyncEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterValue", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "focusedColumnIndex", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "focusedRowEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "focusedRowIndex", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "focusedRowKey", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "grouping", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "groupPanel", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "headerFilter", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "highlightChanges", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "keyboardNavigation", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "keyExpr", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "loadPanel", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "masterDetail", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "pager", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "paging", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "remoteOperations", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "renderAsync", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "repaintChangesOnly", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "rowAlternationEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "rowTemplate", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "scrolling", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "searchPanel", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "selectedRowKeys", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "selection", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "selectionFilter", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "showBorders", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "showColumnHeaders", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "showColumnLines", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "showRowLines", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "sortByGroupSummaryInfo", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "sorting", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "stateStoring", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "summary", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "twoWayBindingEnabled", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "width", null);
    __decorate([
        Input()
    ], DxDataGridComponent.prototype, "wordWrapEnabled", null);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onAdaptiveDetailRowPreparing", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onCellClick", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onCellDblClick", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onCellHoverChanged", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onCellPrepared", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onContextMenuPreparing", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onDataErrorOccurred", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onEditingStart", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onEditorPrepared", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onEditorPreparing", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onFocusedCellChanged", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onFocusedCellChanging", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onFocusedRowChanged", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onFocusedRowChanging", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onInitNewRow", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onKeyDown", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowClick", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowCollapsed", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowCollapsing", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowDblClick", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowExpanded", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowExpanding", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowInserted", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowInserting", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowPrepared", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowRemoved", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowRemoving", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowUpdated", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowUpdating", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowValidating", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "onToolbarPreparing", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "allowColumnReorderingChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "allowColumnResizingChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "cacheEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "cellHintEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnAutoWidthChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnChooserChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnFixingChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnHidingEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnMinWidthChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnResizingModeChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnsChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnWidthChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "customizeColumnsChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "customizeExportDataChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "dateSerializationFormatChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "editingChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "errorRowEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "exportChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterBuilderChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterBuilderPopupChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterPanelChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterRowChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterSyncEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterValueChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "focusedColumnIndexChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "focusedRowEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "focusedRowIndexChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "focusedRowKeyChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "groupingChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "groupPanelChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "headerFilterChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "highlightChangesChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "keyboardNavigationChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "keyExprChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "loadPanelChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "masterDetailChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "pagerChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "pagingChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "remoteOperationsChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "renderAsyncChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "repaintChangesOnlyChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "rowAlternationEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "rowTemplateChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "scrollingChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "searchPanelChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "selectedRowKeysChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "selectionChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "selectionFilterChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "showBordersChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "showColumnHeadersChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "showColumnLinesChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "showRowLinesChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "sortByGroupSummaryInfoChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "sortingChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "stateStoringChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "summaryChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "twoWayBindingEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxDataGridComponent.prototype, "wordWrapEnabledChange", void 0);
    __decorate([
        ContentChildren(DxiColumnComponent)
    ], DxDataGridComponent.prototype, "columnsChildren", null);
    __decorate([
        ContentChildren(DxiSortByGroupSummaryInfoComponent)
    ], DxDataGridComponent.prototype, "sortByGroupSummaryInfoChildren", null);
    DxDataGridComponent = __decorate([
        Component({
            selector: 'dx-data-grid',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxDataGridComponent);
    return DxDataGridComponent;
}(DxComponent));
var DxDataGridModule = /** @class */ (function () {
    function DxDataGridModule() {
    }
    DxDataGridModule = __decorate([
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
                DxoExportModule,
                DxoFilterBuilderModule,
                DxiCustomOperationModule,
                DxiFieldModule,
                DxoFilterOperationDescriptionsModule,
                DxoGroupOperationDescriptionsModule,
                DxoFilterBuilderPopupModule,
                DxoFilterPanelModule,
                DxoFilterRowModule,
                DxoOperationDescriptionsModule,
                DxoGroupingModule,
                DxoGroupPanelModule,
                DxoKeyboardNavigationModule,
                DxoLoadPanelModule,
                DxoMasterDetailModule,
                DxoPagerModule,
                DxoPagingModule,
                DxoRemoteOperationsModule,
                DxoScrollingModule,
                DxoSearchPanelModule,
                DxoSelectionModule,
                DxiSortByGroupSummaryInfoModule,
                DxoSortingModule,
                DxoStateStoringModule,
                DxoSummaryModule,
                DxiGroupItemModule,
                DxoValueFormatModule,
                DxiTotalItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxDataGridComponent
            ],
            exports: [
                DxDataGridComponent,
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
                DxoExportModule,
                DxoFilterBuilderModule,
                DxiCustomOperationModule,
                DxiFieldModule,
                DxoFilterOperationDescriptionsModule,
                DxoGroupOperationDescriptionsModule,
                DxoFilterBuilderPopupModule,
                DxoFilterPanelModule,
                DxoFilterRowModule,
                DxoOperationDescriptionsModule,
                DxoGroupingModule,
                DxoGroupPanelModule,
                DxoKeyboardNavigationModule,
                DxoLoadPanelModule,
                DxoMasterDetailModule,
                DxoPagerModule,
                DxoPagingModule,
                DxoRemoteOperationsModule,
                DxoScrollingModule,
                DxoSearchPanelModule,
                DxoSelectionModule,
                DxiSortByGroupSummaryInfoModule,
                DxoSortingModule,
                DxoStateStoringModule,
                DxoSummaryModule,
                DxiGroupItemModule,
                DxoValueFormatModule,
                DxiTotalItemModule,
                DxTemplateModule
            ]
        })
    ], DxDataGridModule);
    return DxDataGridModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxDataGridComponent, DxDataGridModule };
//# sourceMappingURL=devextreme-angular-ui-data-grid.js.map
