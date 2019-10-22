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
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, ContentChildren, QueryList } from '@angular/core';
import DxDataGrid from 'devextreme/ui/data_grid';
import { DxComponent, DxTemplateHost, DxIntegrationModule, DxTemplateModule, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxoColumnChooserModule } from 'devextreme-angular/ui/nested';
import { DxoColumnFixingModule } from 'devextreme-angular/ui/nested';
import { DxoTextsModule } from 'devextreme-angular/ui/nested';
import { DxiColumnModule } from 'devextreme-angular/ui/nested';
import { DxiButtonModule } from 'devextreme-angular/ui/nested';
import { DxoHeaderFilterModule } from 'devextreme-angular/ui/nested';
import { DxoLookupModule } from 'devextreme-angular/ui/nested';
import { DxoFormatModule } from 'devextreme-angular/ui/nested';
import { DxoFormItemModule } from 'devextreme-angular/ui/nested';
import { DxoLabelModule } from 'devextreme-angular/ui/nested';
import { DxiValidationRuleModule } from 'devextreme-angular/ui/nested';
import { DxoEditingModule } from 'devextreme-angular/ui/nested';
import { DxoFormModule } from 'devextreme-angular/ui/nested';
import { DxoColCountByScreenModule } from 'devextreme-angular/ui/nested';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { DxoTabPanelOptionsModule } from 'devextreme-angular/ui/nested';
import { DxiTabModule } from 'devextreme-angular/ui/nested';
import { DxoButtonOptionsModule } from 'devextreme-angular/ui/nested';
import { DxoPopupModule } from 'devextreme-angular/ui/nested';
import { DxoAnimationModule } from 'devextreme-angular/ui/nested';
import { DxoHideModule } from 'devextreme-angular/ui/nested';
import { DxoShowModule } from 'devextreme-angular/ui/nested';
import { DxoPositionModule } from 'devextreme-angular/ui/nested';
import { DxoAtModule } from 'devextreme-angular/ui/nested';
import { DxoBoundaryOffsetModule } from 'devextreme-angular/ui/nested';
import { DxoCollisionModule } from 'devextreme-angular/ui/nested';
import { DxoMyModule } from 'devextreme-angular/ui/nested';
import { DxoOffsetModule } from 'devextreme-angular/ui/nested';
import { DxiToolbarItemModule } from 'devextreme-angular/ui/nested';
import { DxoExportModule } from 'devextreme-angular/ui/nested';
import { DxoFilterBuilderModule } from 'devextreme-angular/ui/nested';
import { DxiCustomOperationModule } from 'devextreme-angular/ui/nested';
import { DxiFieldModule } from 'devextreme-angular/ui/nested';
import { DxoFilterOperationDescriptionsModule } from 'devextreme-angular/ui/nested';
import { DxoGroupOperationDescriptionsModule } from 'devextreme-angular/ui/nested';
import { DxoFilterBuilderPopupModule } from 'devextreme-angular/ui/nested';
import { DxoFilterPanelModule } from 'devextreme-angular/ui/nested';
import { DxoFilterRowModule } from 'devextreme-angular/ui/nested';
import { DxoOperationDescriptionsModule } from 'devextreme-angular/ui/nested';
import { DxoGroupingModule } from 'devextreme-angular/ui/nested';
import { DxoGroupPanelModule } from 'devextreme-angular/ui/nested';
import { DxoKeyboardNavigationModule } from 'devextreme-angular/ui/nested';
import { DxoLoadPanelModule } from 'devextreme-angular/ui/nested';
import { DxoMasterDetailModule } from 'devextreme-angular/ui/nested';
import { DxoPagerModule } from 'devextreme-angular/ui/nested';
import { DxoPagingModule } from 'devextreme-angular/ui/nested';
import { DxoRemoteOperationsModule } from 'devextreme-angular/ui/nested';
import { DxoScrollingModule } from 'devextreme-angular/ui/nested';
import { DxoSearchPanelModule } from 'devextreme-angular/ui/nested';
import { DxoSelectionModule } from 'devextreme-angular/ui/nested';
import { DxiSortByGroupSummaryInfoModule } from 'devextreme-angular/ui/nested';
import { DxoSortingModule } from 'devextreme-angular/ui/nested';
import { DxoStateStoringModule } from 'devextreme-angular/ui/nested';
import { DxoSummaryModule } from 'devextreme-angular/ui/nested';
import { DxiGroupItemModule } from 'devextreme-angular/ui/nested';
import { DxoValueFormatModule } from 'devextreme-angular/ui/nested';
import { DxiTotalItemModule } from 'devextreme-angular/ui/nested';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested';
import { DxiSortByGroupSummaryInfoComponent } from 'devextreme-angular/ui/nested';
/**
 * The DataGrid is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as sorting, grouping, filtering, as well as more advanced capabilities, like state storing, export to Excel, master-detail interface, and many others.
 */
var DxDataGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxDataGridComponent, _super);
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
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "accessKey", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "activeStateEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "allowColumnReordering", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "allowColumnResizing", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "cacheEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "cellHintEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnAutoWidth", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnChooser", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnFixing", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnHidingEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnMinWidth", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnResizingMode", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "columns", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "columnWidth", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "customizeColumns", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "customizeExportData", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "dataSource", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "dateSerializationFormat", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "editing", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "elementAttr", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "errorRowEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "export", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterBuilder", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterBuilderPopup", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterPanel", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterRow", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterSyncEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "filterValue", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "focusedColumnIndex", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "focusedRowEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "focusedRowIndex", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "focusedRowKey", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "focusStateEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "grouping", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "groupPanel", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "headerFilter", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "height", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "highlightChanges", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "hint", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "hoverStateEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "keyboardNavigation", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "keyExpr", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "loadPanel", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "masterDetail", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "noDataText", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "pager", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "paging", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "remoteOperations", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "renderAsync", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "repaintChangesOnly", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "rowAlternationEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "rowTemplate", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "rtlEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "scrolling", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "searchPanel", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "selectedRowKeys", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "selection", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "selectionFilter", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "showBorders", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "showColumnHeaders", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "showColumnLines", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "showRowLines", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "sortByGroupSummaryInfo", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "sorting", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "stateStoring", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "summary", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "tabIndex", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "twoWayBindingEnabled", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "visible", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "width", null);
    tslib_1.__decorate([
        Input()
    ], DxDataGridComponent.prototype, "wordWrapEnabled", null);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onAdaptiveDetailRowPreparing", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onCellClick", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onCellDblClick", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onCellHoverChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onCellPrepared", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onContentReady", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onContextMenuPreparing", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onDataErrorOccurred", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onDisposing", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onEditingStart", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onEditorPrepared", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onEditorPreparing", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onExported", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onExporting", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onFileSaving", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onFocusedCellChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onFocusedCellChanging", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onFocusedRowChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onFocusedRowChanging", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onInitialized", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onInitNewRow", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onKeyDown", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onOptionChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowClick", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowCollapsed", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowCollapsing", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowDblClick", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowExpanded", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowExpanding", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowInserted", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowInserting", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowPrepared", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowRemoved", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowRemoving", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowUpdated", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowUpdating", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onRowValidating", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onSelectionChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "onToolbarPreparing", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "accessKeyChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "activeStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "allowColumnReorderingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "allowColumnResizingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "cacheEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "cellHintEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnAutoWidthChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnChooserChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnFixingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnHidingEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnMinWidthChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnResizingModeChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnsChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "columnWidthChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "customizeColumnsChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "customizeExportDataChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "dataSourceChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "dateSerializationFormatChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "disabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "editingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "elementAttrChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "errorRowEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "exportChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterBuilderChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterBuilderPopupChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterPanelChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterRowChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterSyncEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "filterValueChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "focusedColumnIndexChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "focusedRowEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "focusedRowIndexChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "focusedRowKeyChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "focusStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "groupingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "groupPanelChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "headerFilterChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "heightChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "highlightChangesChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "hintChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "hoverStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "keyboardNavigationChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "keyExprChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "loadPanelChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "masterDetailChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "noDataTextChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "pagerChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "pagingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "remoteOperationsChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "renderAsyncChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "repaintChangesOnlyChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "rowAlternationEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "rowTemplateChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "rtlEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "scrollingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "searchPanelChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "selectedRowKeysChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "selectionChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "selectionFilterChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "showBordersChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "showColumnHeadersChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "showColumnLinesChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "showRowLinesChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "sortByGroupSummaryInfoChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "sortingChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "stateStoringChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "summaryChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "tabIndexChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "twoWayBindingEnabledChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "visibleChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "widthChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxDataGridComponent.prototype, "wordWrapEnabledChange", void 0);
    tslib_1.__decorate([
        ContentChildren(DxiColumnComponent)
    ], DxDataGridComponent.prototype, "columnsChildren", null);
    tslib_1.__decorate([
        ContentChildren(DxiSortByGroupSummaryInfoComponent)
    ], DxDataGridComponent.prototype, "sortByGroupSummaryInfoChildren", null);
    DxDataGridComponent = tslib_1.__decorate([
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
        tslib_1.__param(7, Inject(PLATFORM_ID))
    ], DxDataGridComponent);
    return DxDataGridComponent;
}(DxComponent));
export { DxDataGridComponent };
var DxDataGridModule = /** @class */ (function () {
    function DxDataGridModule() {
    }
    DxDataGridModule = tslib_1.__decorate([
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
export { DxDataGridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvZGF0YS1ncmlkLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBR3BDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxPQUFPLEVBQ1AsYUFBYSxFQUNiLGVBQWUsRUFDZixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxVQUFVLE1BQU0seUJBQXlCLENBQUM7QUFHakQsT0FBTyxFQUNILFdBQVcsRUFDWCxjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDaEIsTUFBTSx5QkFBeUIsQ0FBQztBQUVqQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxF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QUNyQixjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsZUFBZTtnQkFDZixxQkFBcUI7Z0JBQ3JCLGVBQWU7Z0JBQ2YsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2QsdUJBQXVCO2dCQUN2QixnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2IseUJBQXlCO2dCQUN6QixhQUFhO2dCQUNiLHdCQUF3QjtnQkFDeEIsWUFBWTtnQkFDWixzQkFBc0I7Z0JBQ3RCLGNBQWM7Z0JBQ2Qsa0JBQWtCO2dCQUNsQixhQUFhO2dCQUNiLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixXQUFXO2dCQUNYLHVCQUF1QjtnQkFDdkIsa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLGVBQWU7Z0JBQ2Ysb0JBQW9CO2dCQUNwQixlQUFlO2dCQUNmLHNCQUFzQjtnQkFDdEIsd0JBQXdCO2dCQUN4QixjQUFjO2dCQUNkLG9DQUFvQztnQkFDcEMsbUNBQW1DO2dCQUNuQywyQkFBMkI7Z0JBQzNCLG9CQUFvQjtnQkFDcEIsa0JBQWtCO2dCQUNsQiw4QkFBOEI7Z0JBQzlCLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQiwyQkFBMkI7Z0JBQzNCLGtCQUFrQjtnQkFDbEIscUJBQXFCO2dCQUNyQixjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YseUJBQXlCO2dCQUN6QixrQkFBa0I7Z0JBQ2xCLG9CQUFvQjtnQkFDcEIsa0JBQWtCO2dCQUNsQiwrQkFBK0I7Z0JBQy9CLGdCQUFnQjtnQkFDaEIscUJBQXFCO2dCQUNyQixnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjtnQkFDbEIsb0JBQW9CO2dCQUNwQixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7IEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhEYXRhR3JpZCBmcm9tICdkZXZleHRyZW1lL3VpL2RhdGFfZ3JpZCc7XHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIER4Q29tcG9uZW50LFxyXG4gICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICBJdGVyYWJsZURpZmZlckhlbHBlcixcclxuICAgIFdhdGNoZXJIZWxwZXJcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEeG9Db2x1bW5DaG9vc2VyTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0NvbHVtbkZpeGluZ01vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9UZXh0c01vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeGlDb2x1bW5Nb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpQnV0dG9uTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0hlYWRlckZpbHRlck1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9Mb29rdXBNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0Zvcm1JdGVtTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0xhYmVsTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4aVZhbGlkYXRpb25SdWxlTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0VkaXRpbmdNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRm9ybU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4aUl0ZW1Nb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvVGFiUGFuZWxPcHRpb25zTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4aVRhYk1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9CdXR0b25PcHRpb25zTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1BvcHVwTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9IaWRlTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1Nob3dNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvUG9zaXRpb25Nb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQXRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQm91bmRhcnlPZmZzZXRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvQ29sbGlzaW9uTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b015TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b09mZnNldE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeGlUb29sYmFySXRlbU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9FeHBvcnRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRmlsdGVyQnVpbGRlck1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpRmllbGRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRmlsdGVyT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0dyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0ZpbHRlckJ1aWxkZXJQb3B1cE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9GaWx0ZXJQYW5lbE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9GaWx0ZXJSb3dNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0dyb3VwaW5nTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0dyb3VwUGFuZWxNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvS2V5Ym9hcmROYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0xvYWRQYW5lbE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9NYXN0ZXJEZXRhaWxNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvUGFnZXJNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvUGFnaW5nTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1JlbW90ZU9wZXJhdGlvbnNNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1NlYXJjaFBhbmVsTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1NlbGVjdGlvbk1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1NvcnRpbmdNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvU3RhdGVTdG9yaW5nTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1N1bW1hcnlNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpR3JvdXBJdGVtTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1ZhbHVlRm9ybWF0TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4aVRvdGFsSXRlbU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5cclxuaW1wb3J0IHsgRHhpQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Db21wb25lbnQgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRGF0YUdyaWQgaXMgYSB3aWRnZXQgdGhhdCByZXByZXNlbnRzIGRhdGEgZnJvbSBhIGxvY2FsIG9yIHJlbW90ZSBzb3VyY2UgaW4gdGhlIGZvcm0gb2YgYSBncmlkLiBUaGlzIHdpZGdldCBvZmZlcnMgc3VjaCBiYXNpYyBmZWF0dXJlcyBhcyBzb3J0aW5nLCBncm91cGluZywgZmlsdGVyaW5nLCBhcyB3ZWxsIGFzIG1vcmUgYWR2YW5jZWQgY2FwYWJpbGl0aWVzLCBsaWtlIHN0YXRlIHN0b3JpbmcsIGV4cG9ydCB0byBFeGNlbCwgbWFzdGVyLWRldGFpbCBpbnRlcmZhY2UsIGFuZCBtYW55IG90aGVycy5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC1kYXRhLWdyaWQnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgV2F0Y2hlckhlbHBlcixcclxuICAgICAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgIEl0ZXJhYmxlRGlmZmVySGVscGVyXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeERhdGFHcmlkQ29tcG9uZW50IGV4dGVuZHMgRHhDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgRG9DaGVjayB7XHJcbiAgICBpbnN0YW5jZTogRHhEYXRhR3JpZDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHNob3J0Y3V0IGtleSB0aGF0IHNldHMgZm9jdXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY2Nlc3NLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY2Nlc3NLZXknKTtcclxuICAgIH1cclxuICAgIHNldCBhY2Nlc3NLZXkodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWNjZXNzS2V5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgd2lkZ2V0IGNoYW5nZXMgaXRzIHN0YXRlIHdoZW4gaW50ZXJhY3Rpbmcgd2l0aCBhIHVzZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWN0aXZlU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWN0aXZlU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGEgdXNlciBjYW4gcmVvcmRlciBjb2x1bW5zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93Q29sdW1uUmVvcmRlcmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0NvbHVtblJlb3JkZXJpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0NvbHVtblJlb3JkZXJpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93Q29sdW1uUmVvcmRlcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhIHVzZXIgY2FuIHJlc2l6ZSBjb2x1bW5zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93Q29sdW1uUmVzaXppbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dDb2x1bW5SZXNpemluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93Q29sdW1uUmVzaXppbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93Q29sdW1uUmVzaXppbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgZGF0YSBzaG91bGQgYmUgY2FjaGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNhY2hlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYWNoZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBjYWNoZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhY2hlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGVzIGEgaGludCB0aGF0IGFwcGVhcnMgd2hlbiBhIHVzZXIgaG92ZXJzIHRoZSBtb3VzZSBwb2ludGVyIG92ZXIgYSBjZWxsIHdpdGggdHJ1bmNhdGVkIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2VsbEhpbnRFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NlbGxIaW50RW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNlbGxIaW50RW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2VsbEhpbnRFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbkF1dG9XaWR0aCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5BdXRvV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5BdXRvV2lkdGgodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbkF1dG9XaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBjb2x1bW4gY2hvb3Nlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5DaG9vc2VyKCk6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBlbXB0eVBhbmVsVGV4dD86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgbW9kZT86IHN0cmluZywgc2VhcmNoVGltZW91dD86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbkNob29zZXInKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5DaG9vc2VyKHZhbHVlOiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgZW1wdHlQYW5lbFRleHQ/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIG1vZGU/OiBzdHJpbmcsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRpdGxlPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5DaG9vc2VyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgY29sdW1uIGZpeGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5GaXhpbmcoKTogeyBlbmFibGVkPzogYm9vbGVhbiwgdGV4dHM/OiB7IGZpeD86IHN0cmluZywgbGVmdFBvc2l0aW9uPzogc3RyaW5nLCByaWdodFBvc2l0aW9uPzogc3RyaW5nLCB1bmZpeD86IHN0cmluZyB9IH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbkZpeGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbkZpeGluZyh2YWx1ZTogeyBlbmFibGVkPzogYm9vbGVhbiwgdGV4dHM/OiB7IGZpeD86IHN0cmluZywgbGVmdFBvc2l0aW9uPzogc3RyaW5nLCByaWdodFBvc2l0aW9uPzogc3RyaW5nLCB1bmZpeD86IHN0cmluZyB9IH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbkZpeGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHNob3VsZCBoaWRlIGNvbHVtbnMgdG8gYWRhcHQgdG8gdGhlIHNjcmVlbiBvciBjb250YWluZXIgc2l6ZS4gSWdub3JlZCBpZiBhbGxvd0NvbHVtblJlc2l6aW5nIGlzIHRydWUgYW5kIGNvbHVtblJlc2l6aW5nTW9kZSBpcyBcIndpZGdldFwiLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbkhpZGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uSGlkaW5nRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbkhpZGluZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbkhpZGluZ0VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBtaW5pbXVtIHdpZHRoIG9mIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uTWluV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5NaW5XaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbk1pbldpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbk1pbldpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBob3cgdGhlIHdpZGdldCByZXNpemVzIGNvbHVtbnMuIEFwcGxpZXMgb25seSBpZiBhbGxvd0NvbHVtblJlc2l6aW5nIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uUmVzaXppbmdNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uUmVzaXppbmdNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uUmVzaXppbmdNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtblJlc2l6aW5nTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBncmlkIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1ucygpOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4RGF0YUdyaWRDb2x1bW4gfCBzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1ucyh2YWx1ZTogQXJyYXk8RGV2RXhwcmVzcy51aS5keERhdGFHcmlkQ29sdW1uIHwgc3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZHRoIGZvciBhbGwgZGF0YSBjb2x1bW5zLiBIYXMgYSBsb3dlciBwcmlvcml0eSB0aGFuIHRoZSBjb2x1bW4ud2lkdGggb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5XaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5XaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXN0b21pemVzIGNvbHVtbnMgYWZ0ZXIgdGhleSBhcmUgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVDb2x1bW5zKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVDb2x1bW5zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplQ29sdW1ucyh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZUNvbHVtbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9taXplcyBkYXRhIGJlZm9yZSBleHBvcnQuIFlvdSBjYW4gdXNlIHRoZSBleHBvcnQuY3VzdG9taXplRXhjZWxDZWxsIGZ1bmN0aW9uIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9taXplRXhwb3J0RGF0YSgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9taXplRXhwb3J0RGF0YScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZUV4cG9ydERhdGEodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVFeHBvcnREYXRhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmRzIHRoZSB3aWRnZXQgdG8gZGF0YS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhU291cmNlKCk6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVNvdXJjZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFTb3VyY2UodmFsdWU6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVNvdXJjZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGZvcm1hdCBpbiB3aGljaCBkYXRlLXRpbWUgdmFsdWVzIHNob3VsZCBiZSBzZW50IHRvIHRoZSBzZXJ2ZXIuIFVzZSBpdCBvbmx5IGlmIHlvdSBkbyBub3Qgc3BlY2lmeSB0aGUgZGF0YVNvdXJjZSBhdCBkZXNpZ24gdGltZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGVTZXJpYWxpemF0aW9uRm9ybWF0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgZWRpdGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlZGl0aW5nKCk6IHsgYWxsb3dBZGRpbmc/OiBib29sZWFuLCBhbGxvd0RlbGV0aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBhbGxvd1VwZGF0aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBmb3JtPzogRGV2RXhwcmVzcy51aS5keEZvcm1PcHRpb25zLCBtb2RlPzogc3RyaW5nLCBwb3B1cD86IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMsIHJlZnJlc2hNb2RlPzogc3RyaW5nLCBzZWxlY3RUZXh0T25FZGl0U3RhcnQ/OiBib29sZWFuLCBzdGFydEVkaXRBY3Rpb24/OiBzdHJpbmcsIHRleHRzPzogeyBhZGRSb3c/OiBzdHJpbmcsIGNhbmNlbEFsbENoYW5nZXM/OiBzdHJpbmcsIGNhbmNlbFJvd0NoYW5nZXM/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVNZXNzYWdlPzogc3RyaW5nLCBjb25maXJtRGVsZXRlVGl0bGU/OiBzdHJpbmcsIGRlbGV0ZVJvdz86IHN0cmluZywgZWRpdFJvdz86IHN0cmluZywgc2F2ZUFsbENoYW5nZXM/OiBzdHJpbmcsIHNhdmVSb3dDaGFuZ2VzPzogc3RyaW5nLCB1bmRlbGV0ZVJvdz86IHN0cmluZywgdmFsaWRhdGlvbkNhbmNlbENoYW5nZXM/OiBzdHJpbmcgfSwgdXNlSWNvbnM/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VkaXRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBlZGl0aW5nKHZhbHVlOiB7IGFsbG93QWRkaW5nPzogYm9vbGVhbiwgYWxsb3dEZWxldGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgYWxsb3dVcGRhdGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgZm9ybT86IERldkV4cHJlc3MudWkuZHhGb3JtT3B0aW9ucywgbW9kZT86IHN0cmluZywgcG9wdXA/OiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zLCByZWZyZXNoTW9kZT86IHN0cmluZywgc2VsZWN0VGV4dE9uRWRpdFN0YXJ0PzogYm9vbGVhbiwgc3RhcnRFZGl0QWN0aW9uPzogc3RyaW5nLCB0ZXh0cz86IHsgYWRkUm93Pzogc3RyaW5nLCBjYW5jZWxBbGxDaGFuZ2VzPzogc3RyaW5nLCBjYW5jZWxSb3dDaGFuZ2VzPzogc3RyaW5nLCBjb25maXJtRGVsZXRlTWVzc2FnZT86IHN0cmluZywgY29uZmlybURlbGV0ZVRpdGxlPzogc3RyaW5nLCBkZWxldGVSb3c/OiBzdHJpbmcsIGVkaXRSb3c/OiBzdHJpbmcsIHNhdmVBbGxDaGFuZ2VzPzogc3RyaW5nLCBzYXZlUm93Q2hhbmdlcz86IHN0cmluZywgdW5kZWxldGVSb3c/OiBzdHJpbmcsIHZhbGlkYXRpb25DYW5jZWxDaGFuZ2VzPzogc3RyaW5nIH0sIHVzZUljb25zPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlZGl0aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0byBzaG93IHRoZSBlcnJvciByb3cuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXJyb3JSb3dFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Vycm9yUm93RW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVycm9yUm93RW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXJyb3JSb3dFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgY2xpZW50LXNpZGUgZXhwb3J0aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGV4cG9ydCgpOiB7IGFsbG93RXhwb3J0U2VsZWN0ZWREYXRhPzogYm9vbGVhbiwgY3VzdG9taXplRXhjZWxDZWxsPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBleGNlbEZpbHRlckVuYWJsZWQ/OiBib29sZWFuLCBleGNlbFdyYXBUZXh0RW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBpZ25vcmVFeGNlbEVycm9ycz86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nLCB0ZXh0cz86IHsgZXhwb3J0QWxsPzogc3RyaW5nLCBleHBvcnRTZWxlY3RlZFJvd3M/OiBzdHJpbmcsIGV4cG9ydFRvPzogc3RyaW5nIH0gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwb3J0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwb3J0KHZhbHVlOiB7IGFsbG93RXhwb3J0U2VsZWN0ZWREYXRhPzogYm9vbGVhbiwgY3VzdG9taXplRXhjZWxDZWxsPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBleGNlbEZpbHRlckVuYWJsZWQ/OiBib29sZWFuLCBleGNlbFdyYXBUZXh0RW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBpZ25vcmVFeGNlbEVycm9ycz86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nLCB0ZXh0cz86IHsgZXhwb3J0QWxsPzogc3RyaW5nLCBleHBvcnRTZWxlY3RlZFJvd3M/OiBzdHJpbmcsIGV4cG9ydFRvPzogc3RyaW5nIH0gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwb3J0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGludGVncmF0ZWQgZmlsdGVyIGJ1aWxkZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyQnVpbGRlcigpOiBEZXZFeHByZXNzLnVpLmR4RmlsdGVyQnVpbGRlck9wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlckJ1aWxkZXInKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJCdWlsZGVyKHZhbHVlOiBEZXZFeHByZXNzLnVpLmR4RmlsdGVyQnVpbGRlck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlckJ1aWxkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgcG9wdXAgaW4gd2hpY2ggdGhlIGludGVncmF0ZWQgZmlsdGVyIGJ1aWxkZXIgaXMgc2hvd24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyQnVpbGRlclBvcHVwKCk6IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlckJ1aWxkZXJQb3B1cCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlckJ1aWxkZXJQb3B1cCh2YWx1ZTogRGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyQnVpbGRlclBvcHVwJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGZpbHRlciBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJQYW5lbCgpOiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZmlsdGVyRW5hYmxlZD86IGJvb2xlYW4sIHRleHRzPzogeyBjbGVhckZpbHRlcj86IHN0cmluZywgY3JlYXRlRmlsdGVyPzogc3RyaW5nLCBmaWx0ZXJFbmFibGVkSGludD86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJQYW5lbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlclBhbmVsKHZhbHVlOiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZmlsdGVyRW5hYmxlZD86IGJvb2xlYW4sIHRleHRzPzogeyBjbGVhckZpbHRlcj86IHN0cmluZywgY3JlYXRlRmlsdGVyPzogc3RyaW5nLCBmaWx0ZXJFbmFibGVkSGludD86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJQYW5lbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBmaWx0ZXIgcm93LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlclJvdygpOiB7IGFwcGx5RmlsdGVyPzogc3RyaW5nLCBhcHBseUZpbHRlclRleHQ/OiBzdHJpbmcsIGJldHdlZW5FbmRUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuU3RhcnRUZXh0Pzogc3RyaW5nLCBvcGVyYXRpb25EZXNjcmlwdGlvbnM/OiB7IGJldHdlZW4/OiBzdHJpbmcsIGNvbnRhaW5zPzogc3RyaW5nLCBlbmRzV2l0aD86IHN0cmluZywgZXF1YWw/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuPzogc3RyaW5nLCBncmVhdGVyVGhhbk9yRXF1YWw/OiBzdHJpbmcsIGxlc3NUaGFuPzogc3RyaW5nLCBsZXNzVGhhbk9yRXF1YWw/OiBzdHJpbmcsIG5vdENvbnRhaW5zPzogc3RyaW5nLCBub3RFcXVhbD86IHN0cmluZywgc3RhcnRzV2l0aD86IHN0cmluZyB9LCByZXNldE9wZXJhdGlvblRleHQ/OiBzdHJpbmcsIHNob3dBbGxUZXh0Pzogc3RyaW5nLCBzaG93T3BlcmF0aW9uQ2hvb3Nlcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlclJvdycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlclJvdyh2YWx1ZTogeyBhcHBseUZpbHRlcj86IHN0cmluZywgYXBwbHlGaWx0ZXJUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuRW5kVGV4dD86IHN0cmluZywgYmV0d2VlblN0YXJ0VGV4dD86IHN0cmluZywgb3BlcmF0aW9uRGVzY3JpcHRpb25zPzogeyBiZXR3ZWVuPzogc3RyaW5nLCBjb250YWlucz86IHN0cmluZywgZW5kc1dpdGg/OiBzdHJpbmcsIGVxdWFsPzogc3RyaW5nLCBncmVhdGVyVGhhbj86IHN0cmluZywgZ3JlYXRlclRoYW5PckVxdWFsPzogc3RyaW5nLCBsZXNzVGhhbj86IHN0cmluZywgbGVzc1RoYW5PckVxdWFsPzogc3RyaW5nLCBub3RDb250YWlucz86IHN0cmluZywgbm90RXF1YWw/OiBzdHJpbmcsIHN0YXJ0c1dpdGg/OiBzdHJpbmcgfSwgcmVzZXRPcGVyYXRpb25UZXh0Pzogc3RyaW5nLCBzaG93QWxsVGV4dD86IHN0cmluZywgc2hvd09wZXJhdGlvbkNob29zZXI/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJSb3cnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gc3luY2hyb25pemUgdGhlIGZpbHRlciByb3csIGhlYWRlciBmaWx0ZXIsIGFuZCBmaWx0ZXIgYnVpbGRlci4gVGhlIHN5bmNocm9uaXplZCBmaWx0ZXIgZXhwcmVzc2lvbiBpcyBzdG9yZWQgaW4gdGhlIGZpbHRlclZhbHVlIG9wdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJTeW5jRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJTeW5jRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlclN5bmNFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJTeW5jRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBmaWx0ZXIgZXhwcmVzc2lvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJWYWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlclZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyVmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBpbmRleCBvZiB0aGUgY29sdW1uIGZvY3VzZWQgaW5pdGlhbGx5IG9yIGN1cnJlbnRseSBpbiB0aGUgZGF0YSByb3cgYXJlYS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1c2VkQ29sdW1uSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb2N1c2VkQ29sdW1uSW5kZXgnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c2VkQ29sdW1uSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNlZENvbHVtbkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmb2N1c2VkIHJvdyBmZWF0dXJlIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNlZFJvd0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNlZFJvd0VuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c2VkUm93RW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNlZFJvd0VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBpbml0aWFsbHkgb3IgY3VycmVudGx5IGZvY3VzZWQgZ3JpZCByb3cncyBpbmRleC4gVXNlIGl0IHdoZW4gZm9jdXNlZFJvd0VuYWJsZWQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1c2VkUm93SW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb2N1c2VkUm93SW5kZXgnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c2VkUm93SW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNlZFJvd0luZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBpbml0aWFsbHkgb3IgY3VycmVudGx5IGZvY3VzZWQgZ3JpZCByb3cncyBrZXkuIFVzZSBpdCB3aGVuIGZvY3VzZWRSb3dFbmFibGVkIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNlZFJvd0tleSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzZWRSb3dLZXknKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c2VkUm93S2V5KHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzZWRSb3dLZXknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjYW4gYmUgZm9jdXNlZCB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgZ3JvdXBpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JvdXBpbmcoKTogeyBhbGxvd0NvbGxhcHNpbmc/OiBib29sZWFuLCBhdXRvRXhwYW5kQWxsPzogYm9vbGVhbiwgY29udGV4dE1lbnVFbmFibGVkPzogYm9vbGVhbiwgZXhwYW5kTW9kZT86IHN0cmluZywgdGV4dHM/OiB7IGdyb3VwQnlUaGlzQ29sdW1uPzogc3RyaW5nLCBncm91cENvbnRpbnVlZE1lc3NhZ2U/OiBzdHJpbmcsIGdyb3VwQ29udGludWVzTWVzc2FnZT86IHN0cmluZywgdW5ncm91cD86IHN0cmluZywgdW5ncm91cEFsbD86IHN0cmluZyB9IH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBpbmcodmFsdWU6IHsgYWxsb3dDb2xsYXBzaW5nPzogYm9vbGVhbiwgYXV0b0V4cGFuZEFsbD86IGJvb2xlYW4sIGNvbnRleHRNZW51RW5hYmxlZD86IGJvb2xlYW4sIGV4cGFuZE1vZGU/OiBzdHJpbmcsIHRleHRzPzogeyBncm91cEJ5VGhpc0NvbHVtbj86IHN0cmluZywgZ3JvdXBDb250aW51ZWRNZXNzYWdlPzogc3RyaW5nLCBncm91cENvbnRpbnVlc01lc3NhZ2U/OiBzdHJpbmcsIHVuZ3JvdXA/OiBzdHJpbmcsIHVuZ3JvdXBBbGw/OiBzdHJpbmcgfSB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBncm91cCBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBncm91cFBhbmVsKCk6IHsgYWxsb3dDb2x1bW5EcmFnZ2luZz86IGJvb2xlYW4sIGVtcHR5UGFuZWxUZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB8IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cFBhbmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBQYW5lbCh2YWx1ZTogeyBhbGxvd0NvbHVtbkRyYWdnaW5nPzogYm9vbGVhbiwgZW1wdHlQYW5lbFRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIHwgc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwUGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgaGVhZGVyIGZpbHRlciBmZWF0dXJlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlYWRlckZpbHRlcigpOiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCB0ZXh0cz86IHsgY2FuY2VsPzogc3RyaW5nLCBlbXB0eVZhbHVlPzogc3RyaW5nLCBvaz86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVhZGVyRmlsdGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVhZGVyRmlsdGVyKHZhbHVlOiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCB0ZXh0cz86IHsgY2FuY2VsPzogc3RyaW5nLCBlbXB0eVZhbHVlPzogc3RyaW5nLCBvaz86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVhZGVyRmlsdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3MgaGVpZ2h0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGhpZ2hsaWdodCByb3dzIGFuZCBjZWxscyB3aXRoIGVkaXRlZCBkYXRhLiByZXBhaW50Q2hhbmdlc09ubHkgc2hvdWxkIGJlIHRydWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGlnaGxpZ2h0Q2hhbmdlcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaWdobGlnaHRDaGFuZ2VzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGlnaGxpZ2h0Q2hhbmdlcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGlnaGxpZ2h0Q2hhbmdlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGV4dCBmb3IgYSBoaW50IHRoYXQgYXBwZWFycyB3aGVuIGEgdXNlciBwYXVzZXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhpbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNoYW5nZXMgaXRzIHN0YXRlIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiBpdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3ZlclN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvdmVyU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQga2V5Ym9hcmROYXZpZ2F0aW9uKCk6IHsgZWRpdE9uS2V5UHJlc3M/OiBib29sZWFuLCBlbnRlcktleUFjdGlvbj86IHN0cmluZywgZW50ZXJLZXlEaXJlY3Rpb24/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigna2V5Ym9hcmROYXZpZ2F0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQga2V5Ym9hcmROYXZpZ2F0aW9uKHZhbHVlOiB7IGVkaXRPbktleVByZXNzPzogYm9vbGVhbiwgZW50ZXJLZXlBY3Rpb24/OiBzdHJpbmcsIGVudGVyS2V5RGlyZWN0aW9uPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2tleWJvYXJkTmF2aWdhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hpY2ggZGF0YSBmaWVsZCBwcm92aWRlcyBrZXlzIGZvciBkYXRhIGl0ZW1zLiBBcHBsaWVzIG9ubHkgaWYgZGF0YSBpcyBhIHNpbXBsZSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBrZXlFeHByKCk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2tleUV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBrZXlFeHByKHZhbHVlOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdrZXlFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGxvYWQgcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9hZFBhbmVsKCk6IHsgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgaW5kaWNhdG9yU3JjPzogc3RyaW5nLCBzaGFkaW5nPzogYm9vbGVhbiwgc2hhZGluZ0NvbG9yPzogc3RyaW5nLCBzaG93SW5kaWNhdG9yPzogYm9vbGVhbiwgc2hvd1BhbmU/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2FkUGFuZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBsb2FkUGFuZWwodmFsdWU6IHsgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgaW5kaWNhdG9yU3JjPzogc3RyaW5nLCBzaGFkaW5nPzogYm9vbGVhbiwgc2hhZGluZ0NvbG9yPzogc3RyaW5nLCBzaG93SW5kaWNhdG9yPzogYm9vbGVhbiwgc2hvd1BhbmU/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2FkUGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHlvdSB0byBidWlsZCBhIG1hc3Rlci1kZXRhaWwgaW50ZXJmYWNlIGluIHRoZSBncmlkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1hc3RlckRldGFpbCgpOiB7IGF1dG9FeHBhbmRBbGw/OiBib29sZWFuLCBlbmFibGVkPzogYm9vbGVhbiwgdGVtcGxhdGU/OiBhbnkgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWFzdGVyRGV0YWlsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWFzdGVyRGV0YWlsKHZhbHVlOiB7IGF1dG9FeHBhbmRBbGw/OiBib29sZWFuLCBlbmFibGVkPzogYm9vbGVhbiwgdGVtcGxhdGU/OiBhbnkgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWFzdGVyRGV0YWlsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IHNob3duIHdoZW4gdGhlIHdpZGdldCBkb2VzIG5vdCBkaXNwbGF5IGFueSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG5vRGF0YVRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdub0RhdGFUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbm9EYXRhVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdub0RhdGFUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIHBhZ2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhZ2VyKCk6IHsgYWxsb3dlZFBhZ2VTaXplcz86IEFycmF5PG51bWJlcj4sIGluZm9UZXh0Pzogc3RyaW5nLCBzaG93SW5mbz86IGJvb2xlYW4sIHNob3dOYXZpZ2F0aW9uQnV0dG9ucz86IGJvb2xlYW4sIHNob3dQYWdlU2l6ZVNlbGVjdG9yPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFnZXInKTtcclxuICAgIH1cclxuICAgIHNldCBwYWdlcih2YWx1ZTogeyBhbGxvd2VkUGFnZVNpemVzPzogQXJyYXk8bnVtYmVyPiwgaW5mb1RleHQ/OiBzdHJpbmcsIHNob3dJbmZvPzogYm9vbGVhbiwgc2hvd05hdmlnYXRpb25CdXR0b25zPzogYm9vbGVhbiwgc2hvd1BhZ2VTaXplU2VsZWN0b3I/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYWdlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHBhZ2luZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWdpbmcoKTogeyBlbmFibGVkPzogYm9vbGVhbiwgcGFnZUluZGV4PzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYWdpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBwYWdpbmcodmFsdWU6IHsgZW5hYmxlZD86IGJvb2xlYW4sIHBhZ2VJbmRleD86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFnaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoZSBEYXRhR3JpZCBvZiB0aGUgc2VydmVyJ3MgZGF0YSBwcm9jZXNzaW5nIG9wZXJhdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVtb3RlT3BlcmF0aW9ucygpOiBib29sZWFuIHwgeyBmaWx0ZXJpbmc/OiBib29sZWFuLCBncm91cGluZz86IGJvb2xlYW4sIGdyb3VwUGFnaW5nPzogYm9vbGVhbiwgcGFnaW5nPzogYm9vbGVhbiwgc29ydGluZz86IGJvb2xlYW4sIHN1bW1hcnk/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlbW90ZU9wZXJhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCByZW1vdGVPcGVyYXRpb25zKHZhbHVlOiBib29sZWFuIHwgeyBmaWx0ZXJpbmc/OiBib29sZWFuLCBncm91cGluZz86IGJvb2xlYW4sIGdyb3VwUGFnaW5nPzogYm9vbGVhbiwgcGFnaW5nPzogYm9vbGVhbiwgc29ydGluZz86IGJvb2xlYW4sIHN1bW1hcnk/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlbW90ZU9wZXJhdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVuZGVyIHRoZSBmaWx0ZXIgcm93LCBjb21tYW5kIGNvbHVtbnMsIGFuZCBjb2x1bW5zIHdpdGggc2hvd0VkaXRvckFsd2F5cyBzZXQgdG8gdHJ1ZSBhZnRlciBvdGhlciBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZW5kZXJBc3luYygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZW5kZXJBc3luYycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlbmRlckFzeW5jKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZW5kZXJBc3luYycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byByZXBhaW50IG9ubHkgdGhvc2UgY2VsbHMgd2hvc2UgZGF0YSBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlcGFpbnRDaGFuZ2VzT25seSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXBhaW50Q2hhbmdlc09ubHknKTtcclxuICAgIH1cclxuICAgIHNldCByZXBhaW50Q2hhbmdlc09ubHkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlcGFpbnRDaGFuZ2VzT25seScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciByb3dzIHNob3VsZCBiZSBzaGFkZWQgZGlmZmVyZW50bHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcm93QWx0ZXJuYXRpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jvd0FsdGVybmF0aW9uRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJvd0FsdGVybmF0aW9uRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncm93QWx0ZXJuYXRpb25FbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3Igcm93cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByb3dUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jvd1RlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm93VGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncm93VGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHNjcm9sbGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzY3JvbGxpbmcoKTogeyBjb2x1bW5SZW5kZXJpbmdNb2RlPzogc3RyaW5nLCBtb2RlPzogc3RyaW5nLCBwcmVsb2FkRW5hYmxlZD86IGJvb2xlYW4sIHJvd1JlbmRlcmluZ01vZGU/OiBzdHJpbmcsIHNjcm9sbEJ5Q29udGVudD86IGJvb2xlYW4sIHNjcm9sbEJ5VGh1bWI/OiBib29sZWFuLCBzaG93U2Nyb2xsYmFyPzogc3RyaW5nLCB1c2VOYXRpdmU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Njcm9sbGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNjcm9sbGluZyh2YWx1ZTogeyBjb2x1bW5SZW5kZXJpbmdNb2RlPzogc3RyaW5nLCBtb2RlPzogc3RyaW5nLCBwcmVsb2FkRW5hYmxlZD86IGJvb2xlYW4sIHJvd1JlbmRlcmluZ01vZGU/OiBzdHJpbmcsIHNjcm9sbEJ5Q29udGVudD86IGJvb2xlYW4sIHNjcm9sbEJ5VGh1bWI/OiBib29sZWFuLCBzaG93U2Nyb2xsYmFyPzogc3RyaW5nLCB1c2VOYXRpdmU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Njcm9sbGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBzZWFyY2ggcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VhcmNoUGFuZWwoKTogeyBoaWdobGlnaHRDYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiwgaGlnaGxpZ2h0U2VhcmNoVGV4dD86IGJvb2xlYW4sIHBsYWNlaG9sZGVyPzogc3RyaW5nLCBzZWFyY2hWaXNpYmxlQ29sdW1uc09ubHk/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VhcmNoUGFuZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWFyY2hQYW5lbCh2YWx1ZTogeyBoaWdobGlnaHRDYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiwgaGlnaGxpZ2h0U2VhcmNoVGV4dD86IGJvb2xlYW4sIHBsYWNlaG9sZGVyPzogc3RyaW5nLCBzZWFyY2hWaXNpYmxlQ29sdW1uc09ubHk/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VhcmNoUGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHlvdSB0byBzZWxlY3Qgcm93cyBvciBkZXRlcm1pbmUgd2hpY2ggcm93cyBhcmUgc2VsZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0ZWRSb3dLZXlzKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdGVkUm93S2V5cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGVkUm93S2V5cyh2YWx1ZTogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0ZWRSb3dLZXlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgcnVudGltZSBzZWxlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0aW9uKCk6IHsgYWxsb3dTZWxlY3RBbGw/OiBib29sZWFuLCBkZWZlcnJlZD86IGJvb2xlYW4sIG1vZGU/OiBzdHJpbmcsIHNlbGVjdEFsbE1vZGU/OiBzdHJpbmcsIHNob3dDaGVja0JveGVzTW9kZT86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3Rpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3Rpb24odmFsdWU6IHsgYWxsb3dTZWxlY3RBbGw/OiBib29sZWFuLCBkZWZlcnJlZD86IGJvb2xlYW4sIG1vZGU/OiBzdHJpbmcsIHNlbGVjdEFsbE1vZGU/OiBzdHJpbmcsIHNob3dDaGVja0JveGVzTW9kZT86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGZpbHRlcnMgZm9yIHRoZSByb3dzIHRoYXQgbXVzdCBiZSBzZWxlY3RlZCBpbml0aWFsbHkuIEFwcGxpZXMgb25seSBpZiBzZWxlY3Rpb24uZGVmZXJyZWQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3Rpb25GaWx0ZXIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3Rpb25GaWx0ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3Rpb25GaWx0ZXIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0aW9uRmlsdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBvdXRlciBib3JkZXJzIG9mIHRoZSB3aWRnZXQgYXJlIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0JvcmRlcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0JvcmRlcnMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Qm9yZGVycyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0JvcmRlcnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgY29sdW1uIGhlYWRlcnMgYXJlIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0NvbHVtbkhlYWRlcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NvbHVtbkhlYWRlcnMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q29sdW1uSGVhZGVycyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0NvbHVtbkhlYWRlcnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdmVydGljYWwgbGluZXMgdGhhdCBzZXBhcmF0ZSBvbmUgY29sdW1uIGZyb20gYW5vdGhlciBhcmUgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Q29sdW1uTGluZXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NvbHVtbkxpbmVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0NvbHVtbkxpbmVzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q29sdW1uTGluZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgaG9yaXpvbnRhbCBsaW5lcyB0aGF0IHNlcGFyYXRlIG9uZSByb3cgZnJvbSBhbm90aGVyIGFyZSB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dSb3dMaW5lcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Um93TGluZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Um93TGluZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dSb3dMaW5lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgeW91IHRvIHNvcnQgZ3JvdXBzIGFjY29yZGluZyB0byB0aGUgdmFsdWVzIG9mIGdyb3VwIHN1bW1hcnkgaXRlbXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc29ydEJ5R3JvdXBTdW1tYXJ5SW5mbygpOiBBcnJheTxhbnkgfCB7IGdyb3VwQ29sdW1uPzogc3RyaW5nLCBzb3J0T3JkZXI/OiBzdHJpbmcsIHN1bW1hcnlJdGVtPzogbnVtYmVyIHwgc3RyaW5nIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzb3J0QnlHcm91cFN1bW1hcnlJbmZvJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydEJ5R3JvdXBTdW1tYXJ5SW5mbyh2YWx1ZTogQXJyYXk8YW55IHwgeyBncm91cENvbHVtbj86IHN0cmluZywgc29ydE9yZGVyPzogc3RyaW5nLCBzdW1tYXJ5SXRlbT86IG51bWJlciB8IHN0cmluZyB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc29ydEJ5R3JvdXBTdW1tYXJ5SW5mbycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHJ1bnRpbWUgc29ydGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzb3J0aW5nKCk6IHsgYXNjZW5kaW5nVGV4dD86IHN0cmluZywgY2xlYXJUZXh0Pzogc3RyaW5nLCBkZXNjZW5kaW5nVGV4dD86IHN0cmluZywgbW9kZT86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzb3J0aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydGluZyh2YWx1ZTogeyBhc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBjbGVhclRleHQ/OiBzdHJpbmcsIGRlc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBtb2RlPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBzdGF0ZSBzdG9yaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0YXRlU3RvcmluZygpOiB7IGN1c3RvbUxvYWQ/OiBGdW5jdGlvbiwgY3VzdG9tU2F2ZT86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgc2F2aW5nVGltZW91dD86IG51bWJlciwgc3RvcmFnZUtleT86IHN0cmluZywgdHlwZT86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGF0ZVN0b3JpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGF0ZVN0b3JpbmcodmFsdWU6IHsgY3VzdG9tTG9hZD86IEZ1bmN0aW9uLCBjdXN0b21TYXZlPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBzYXZpbmdUaW1lb3V0PzogbnVtYmVyLCBzdG9yYWdlS2V5Pzogc3RyaW5nLCB0eXBlPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YXRlU3RvcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG9wdGlvbnMgb2YgdGhlIGdyaWQgc3VtbWFyeS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdW1tYXJ5KCk6IHsgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeT86IEZ1bmN0aW9uLCBncm91cEl0ZW1zPzogQXJyYXk8YW55IHwgeyBhbGlnbkJ5Q29sdW1uPzogYm9vbGVhbiwgY29sdW1uPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2hvd0luR3JvdXBGb290ZXI/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmFsdWVGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9PiwgcmVjYWxjdWxhdGVXaGlsZUVkaXRpbmc/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCB0ZXh0cz86IHsgYXZnPzogc3RyaW5nLCBhdmdPdGhlckNvbHVtbj86IHN0cmluZywgY291bnQ/OiBzdHJpbmcsIG1heD86IHN0cmluZywgbWF4T3RoZXJDb2x1bW4/OiBzdHJpbmcsIG1pbj86IHN0cmluZywgbWluT3RoZXJDb2x1bW4/OiBzdHJpbmcsIHN1bT86IHN0cmluZywgc3VtT3RoZXJDb2x1bW4/OiBzdHJpbmcgfSwgdG90YWxJdGVtcz86IEFycmF5PGFueSB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjb2x1bW4/OiBzdHJpbmcsIGNzc0NsYXNzPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2tpcEVtcHR5VmFsdWVzPzogYm9vbGVhbiwgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZhbHVlRm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfT4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3VtbWFyeScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN1bW1hcnkodmFsdWU6IHsgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeT86IEZ1bmN0aW9uLCBncm91cEl0ZW1zPzogQXJyYXk8YW55IHwgeyBhbGlnbkJ5Q29sdW1uPzogYm9vbGVhbiwgY29sdW1uPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2hvd0luR3JvdXBGb290ZXI/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmFsdWVGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9PiwgcmVjYWxjdWxhdGVXaGlsZUVkaXRpbmc/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCB0ZXh0cz86IHsgYXZnPzogc3RyaW5nLCBhdmdPdGhlckNvbHVtbj86IHN0cmluZywgY291bnQ/OiBzdHJpbmcsIG1heD86IHN0cmluZywgbWF4T3RoZXJDb2x1bW4/OiBzdHJpbmcsIG1pbj86IHN0cmluZywgbWluT3RoZXJDb2x1bW4/OiBzdHJpbmcsIHN1bT86IHN0cmluZywgc3VtT3RoZXJDb2x1bW4/OiBzdHJpbmcgfSwgdG90YWxJdGVtcz86IEFycmF5PGFueSB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjb2x1bW4/OiBzdHJpbmcsIGNzc0NsYXNzPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2tpcEVtcHR5VmFsdWVzPzogYm9vbGVhbiwgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZhbHVlRm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfT4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3VtbWFyeScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudCB3aGVuIHRoZSBUYWIga2V5IGlzIHVzZWQgZm9yIG5hdmlnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSB0d28td2F5IGRhdGEgYmluZGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0d29XYXlCaW5kaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0d29XYXlCaW5kaW5nRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHR3b1dheUJpbmRpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0d29XYXlCaW5kaW5nRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGV4dCB0aGF0IGRvZXMgbm90IGZpdCBpbnRvIGEgY29sdW1uIHNob3VsZCBiZSB3cmFwcGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdvcmRXcmFwRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3b3JkV3JhcEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCB3b3JkV3JhcEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dvcmRXcmFwRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYW4gYWRhcHRpdmUgZGV0YWlsIHJvdyBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQWRhcHRpdmVEZXRhaWxSb3dQcmVwYXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBjZWxsIGlzIGNsaWNrZWQgb3IgdGFwcGVkLiBFeGVjdXRlZCBiZWZvcmUgb25Sb3dDbGljay5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgY2VsbCBpcyBkb3VibGUtY2xpY2tlZCBvciBkb3VibGUtdGFwcGVkLiBFeGVjdXRlZCBiZWZvcmUgb25Sb3dEYmxDbGljay5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbERibENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgcG9pbnRlciBlbnRlcnMgb3IgbGVhdmVzIGEgY2VsbC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbEhvdmVyQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSBjZWxsIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNlbGxQcmVwYXJlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgY29udGVudCBpcyByZWFkeSBhbmQgZWFjaCB0aW1lIHRoZSBjb250ZW50IGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNvbnRlbnRSZWFkeTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSBjb250ZXh0IG1lbnUgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51UHJlcGFyaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRhdGFFcnJvck9jY3VycmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBkaXNwb3NlZCBvZi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGlzcG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSBjZWxsIG9yIHJvdyBzd2l0Y2hlcyB0byB0aGUgZWRpdGluZyBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRWRpdGluZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhbiBlZGl0b3IgaXMgY3JlYXRlZC4gTm90IGV4ZWN1dGVkIGZvciBjZWxscyB3aXRoIGFuIGVkaXRDZWxsVGVtcGxhdGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkVkaXRvclByZXBhcmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCB0byBjdXN0b21pemUgb3IgcmVwbGFjZSBkZWZhdWx0IGVkaXRvcnMuIE5vdCBleGVjdXRlZCBmb3IgY2VsbHMgd2l0aCBhbiBlZGl0Q2VsbFRlbXBsYXRlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FZGl0b3JQcmVwYXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGRhdGEgaXMgZXhwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkV4cG9ydGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgZGF0YSBpcyBleHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRXhwb3J0aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSBmaWxlIHdpdGggZXhwb3J0ZWQgZGF0YSBpcyBzYXZlZCB0byB0aGUgdXNlcidzIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZpbGVTYXZpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHRoZSBmb2N1c2VkIGNlbGwgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRm9jdXNlZENlbGxDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIGZvY3VzZWQgY2VsbCBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c2VkQ2VsbENoYW5naW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgZm9jdXNlZCByb3cgY2hhbmdlcy4gQXBwbGllcyBvbmx5IHdoZW4gZm9jdXNlZFJvd0VuYWJsZWQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRm9jdXNlZFJvd0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgZm9jdXNlZCByb3cgY2hhbmdlcy4gQXBwbGllcyBvbmx5IHdoZW4gZm9jdXNlZFJvd0VuYWJsZWQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRm9jdXNlZFJvd0NoYW5naW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgbmV3IHJvdyBpcyBhZGRlZCB0byB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0TmV3Um93OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQgaXMgaW4gZm9jdXMgYW5kIGEga2V5IGhhcyBiZWVuIHByZXNzZWQgZG93bi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uS2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSByb3cgaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHJvdyBpcyBjb2xsYXBzZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0NvbGxhcHNlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgcm93IGlzIGNvbGxhcHNlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93Q29sbGFwc2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHJvdyBpcyBkb3VibGUtY2xpY2tlZCBvciBkb3VibGUtdGFwcGVkLiBFeGVjdXRlZCBhZnRlciBvbkNlbGxEYmxDbGljay5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgcm93IGlzIGV4cGFuZGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dFeHBhbmRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgcm93IGlzIGV4cGFuZGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dFeHBhbmRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgbmV3IHJvdyBoYXMgYmVlbiBpbnNlcnRlZCBpbnRvIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93SW5zZXJ0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIG5ldyByb3cgaXMgaW5zZXJ0ZWQgaW50byB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0luc2VydGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSByb3cgaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93UHJlcGFyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgcm93IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd1JlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIHJvdyBpcyByZW1vdmVkIGZyb20gdGhlIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dSZW1vdmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSByb3cgaGFzIGJlZW4gdXBkYXRlZCBpbiB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd1VwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIHJvdyBpcyB1cGRhdGVkIGluIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93VXBkYXRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGNlbGxzIGluIGEgcm93IGFyZSB2YWxpZGF0ZWQgYWdhaW5zdCB2YWxpZGF0aW9uIHJ1bGVzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dWYWxpZGF0aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBzZWxlY3RpbmcgYSByb3cgb3IgY2xlYXJpbmcgaXRzIHNlbGVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB0b29sYmFyIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblRvb2xiYXJQcmVwYXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFjY2Vzc0tleUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWxsb3dDb2x1bW5SZW9yZGVyaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWxsb3dDb2x1bW5SZXNpemluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNhY2hlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNlbGxIaW50RW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbkF1dG9XaWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbkNob29zZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgZW1wdHlQYW5lbFRleHQ/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIG1vZGU/OiBzdHJpbmcsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRpdGxlPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5GaXhpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgZml4Pzogc3RyaW5nLCBsZWZ0UG9zaXRpb24/OiBzdHJpbmcsIHJpZ2h0UG9zaXRpb24/OiBzdHJpbmcsIHVuZml4Pzogc3RyaW5nIH0gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uSGlkaW5nRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbk1pbldpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5SZXNpemluZ01vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxEZXZFeHByZXNzLnVpLmR4RGF0YUdyaWRDb2x1bW4gfCBzdHJpbmc+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5XaWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY3VzdG9taXplQ29sdW1uc0NoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjdXN0b21pemVFeHBvcnREYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGFTb3VyY2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVkaXRpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93QWRkaW5nPzogYm9vbGVhbiwgYWxsb3dEZWxldGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgYWxsb3dVcGRhdGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgZm9ybT86IERldkV4cHJlc3MudWkuZHhGb3JtT3B0aW9ucywgbW9kZT86IHN0cmluZywgcG9wdXA/OiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zLCByZWZyZXNoTW9kZT86IHN0cmluZywgc2VsZWN0VGV4dE9uRWRpdFN0YXJ0PzogYm9vbGVhbiwgc3RhcnRFZGl0QWN0aW9uPzogc3RyaW5nLCB0ZXh0cz86IHsgYWRkUm93Pzogc3RyaW5nLCBjYW5jZWxBbGxDaGFuZ2VzPzogc3RyaW5nLCBjYW5jZWxSb3dDaGFuZ2VzPzogc3RyaW5nLCBjb25maXJtRGVsZXRlTWVzc2FnZT86IHN0cmluZywgY29uZmlybURlbGV0ZVRpdGxlPzogc3RyaW5nLCBkZWxldGVSb3c/OiBzdHJpbmcsIGVkaXRSb3c/OiBzdHJpbmcsIHNhdmVBbGxDaGFuZ2VzPzogc3RyaW5nLCBzYXZlUm93Q2hhbmdlcz86IHN0cmluZywgdW5kZWxldGVSb3c/OiBzdHJpbmcsIHZhbGlkYXRpb25DYW5jZWxDaGFuZ2VzPzogc3RyaW5nIH0sIHVzZUljb25zPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbGVtZW50QXR0ckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZXJyb3JSb3dFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZXhwb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd0V4cG9ydFNlbGVjdGVkRGF0YT86IGJvb2xlYW4sIGN1c3RvbWl6ZUV4Y2VsQ2VsbD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZXhjZWxGaWx0ZXJFbmFibGVkPzogYm9vbGVhbiwgZXhjZWxXcmFwVGV4dEVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgaWdub3JlRXhjZWxFcnJvcnM/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZywgdGV4dHM/OiB7IGV4cG9ydEFsbD86IHN0cmluZywgZXhwb3J0U2VsZWN0ZWRSb3dzPzogc3RyaW5nLCBleHBvcnRUbz86IHN0cmluZyB9IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlckJ1aWxkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLnVpLmR4RmlsdGVyQnVpbGRlck9wdGlvbnM+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlckJ1aWxkZXJQb3B1cENoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnM+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlclBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZpbHRlckVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgY2xlYXJGaWx0ZXI/OiBzdHJpbmcsIGNyZWF0ZUZpbHRlcj86IHN0cmluZywgZmlsdGVyRW5hYmxlZEhpbnQ/OiBzdHJpbmcgfSwgdmlzaWJsZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyUm93Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhcHBseUZpbHRlcj86IHN0cmluZywgYXBwbHlGaWx0ZXJUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuRW5kVGV4dD86IHN0cmluZywgYmV0d2VlblN0YXJ0VGV4dD86IHN0cmluZywgb3BlcmF0aW9uRGVzY3JpcHRpb25zPzogeyBiZXR3ZWVuPzogc3RyaW5nLCBjb250YWlucz86IHN0cmluZywgZW5kc1dpdGg/OiBzdHJpbmcsIGVxdWFsPzogc3RyaW5nLCBncmVhdGVyVGhhbj86IHN0cmluZywgZ3JlYXRlclRoYW5PckVxdWFsPzogc3RyaW5nLCBsZXNzVGhhbj86IHN0cmluZywgbGVzc1RoYW5PckVxdWFsPzogc3RyaW5nLCBub3RDb250YWlucz86IHN0cmluZywgbm90RXF1YWw/OiBzdHJpbmcsIHN0YXJ0c1dpdGg/OiBzdHJpbmcgfSwgcmVzZXRPcGVyYXRpb25UZXh0Pzogc3RyaW5nLCBzaG93QWxsVGV4dD86IHN0cmluZywgc2hvd09wZXJhdGlvbkNob29zZXI/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJTeW5jRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlclZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c2VkQ29sdW1uSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZvY3VzZWRSb3dFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNlZFJvd0luZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c2VkUm93S2V5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGdyb3VwaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd0NvbGxhcHNpbmc/OiBib29sZWFuLCBhdXRvRXhwYW5kQWxsPzogYm9vbGVhbiwgY29udGV4dE1lbnVFbmFibGVkPzogYm9vbGVhbiwgZXhwYW5kTW9kZT86IHN0cmluZywgdGV4dHM/OiB7IGdyb3VwQnlUaGlzQ29sdW1uPzogc3RyaW5nLCBncm91cENvbnRpbnVlZE1lc3NhZ2U/OiBzdHJpbmcsIGdyb3VwQ29udGludWVzTWVzc2FnZT86IHN0cmluZywgdW5ncm91cD86IHN0cmluZywgdW5ncm91cEFsbD86IHN0cmluZyB9IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGdyb3VwUGFuZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93Q29sdW1uRHJhZ2dpbmc/OiBib29sZWFuLCBlbXB0eVBhbmVsVGV4dD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfCBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGVhZGVyRmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgc2VhcmNoVGltZW91dD86IG51bWJlciwgdGV4dHM/OiB7IGNhbmNlbD86IHN0cmluZywgZW1wdHlWYWx1ZT86IHN0cmluZywgb2s/OiBzdHJpbmcgfSwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaWdobGlnaHRDaGFuZ2VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGludENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBrZXlib2FyZE5hdmlnYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVkaXRPbktleVByZXNzPzogYm9vbGVhbiwgZW50ZXJLZXlBY3Rpb24/OiBzdHJpbmcsIGVudGVyS2V5RGlyZWN0aW9uPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGtleUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBBcnJheTxzdHJpbmc+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBsb2FkUGFuZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVuYWJsZWQ/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIGluZGljYXRvclNyYz86IHN0cmluZywgc2hhZGluZz86IGJvb2xlYW4sIHNoYWRpbmdDb2xvcj86IHN0cmluZywgc2hvd0luZGljYXRvcj86IGJvb2xlYW4sIHNob3dQYW5lPzogYm9vbGVhbiwgdGV4dD86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWFzdGVyRGV0YWlsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhdXRvRXhwYW5kQWxsPzogYm9vbGVhbiwgZW5hYmxlZD86IGJvb2xlYW4sIHRlbXBsYXRlPzogYW55IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG5vRGF0YVRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBhZ2VyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd2VkUGFnZVNpemVzPzogQXJyYXk8bnVtYmVyPiwgaW5mb1RleHQ/OiBzdHJpbmcsIHNob3dJbmZvPzogYm9vbGVhbiwgc2hvd05hdmlnYXRpb25CdXR0b25zPzogYm9vbGVhbiwgc2hvd1BhZ2VTaXplU2VsZWN0b3I/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYWdpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVuYWJsZWQ/OiBib29sZWFuLCBwYWdlSW5kZXg/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlbW90ZU9wZXJhdGlvbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgeyBmaWx0ZXJpbmc/OiBib29sZWFuLCBncm91cGluZz86IGJvb2xlYW4sIGdyb3VwUGFnaW5nPzogYm9vbGVhbiwgcGFnaW5nPzogYm9vbGVhbiwgc29ydGluZz86IGJvb2xlYW4sIHN1bW1hcnk/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlbmRlckFzeW5jQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVwYWludENoYW5nZXNPbmx5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcm93QWx0ZXJuYXRpb25FbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcm93VGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzY3JvbGxpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGNvbHVtblJlbmRlcmluZ01vZGU/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcsIHByZWxvYWRFbmFibGVkPzogYm9vbGVhbiwgcm93UmVuZGVyaW5nTW9kZT86IHN0cmluZywgc2Nyb2xsQnlDb250ZW50PzogYm9vbGVhbiwgc2Nyb2xsQnlUaHVtYj86IGJvb2xlYW4sIHNob3dTY3JvbGxiYXI/OiBzdHJpbmcsIHVzZU5hdGl2ZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoUGFuZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGhpZ2hsaWdodENhc2VTZW5zaXRpdmU/OiBib29sZWFuLCBoaWdobGlnaHRTZWFyY2hUZXh0PzogYm9vbGVhbiwgcGxhY2Vob2xkZXI/OiBzdHJpbmcsIHNlYXJjaFZpc2libGVDb2x1bW5zT25seT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZFJvd0tleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93U2VsZWN0QWxsPzogYm9vbGVhbiwgZGVmZXJyZWQ/OiBib29sZWFuLCBtb2RlPzogc3RyaW5nLCBzZWxlY3RBbGxNb2RlPzogc3RyaW5nLCBzaG93Q2hlY2tCb3hlc01vZGU/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uRmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93Qm9yZGVyc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dDb2x1bW5IZWFkZXJzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0NvbHVtbkxpbmVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd1Jvd0xpbmVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc29ydEJ5R3JvdXBTdW1tYXJ5SW5mb0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PGFueSB8IHsgZ3JvdXBDb2x1bW4/OiBzdHJpbmcsIHNvcnRPcmRlcj86IHN0cmluZywgc3VtbWFyeUl0ZW0/OiBudW1iZXIgfCBzdHJpbmcgfT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNvcnRpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFzY2VuZGluZ1RleHQ/OiBzdHJpbmcsIGNsZWFyVGV4dD86IHN0cmluZywgZGVzY2VuZGluZ1RleHQ/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3RhdGVTdG9yaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjdXN0b21Mb2FkPzogRnVuY3Rpb24sIGN1c3RvbVNhdmU/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIHNhdmluZ1RpbWVvdXQ/OiBudW1iZXIsIHN0b3JhZ2VLZXk/OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3VtbWFyeUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeT86IEZ1bmN0aW9uLCBncm91cEl0ZW1zPzogQXJyYXk8YW55IHwgeyBhbGlnbkJ5Q29sdW1uPzogYm9vbGVhbiwgY29sdW1uPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2hvd0luR3JvdXBGb290ZXI/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmFsdWVGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9PiwgcmVjYWxjdWxhdGVXaGlsZUVkaXRpbmc/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCB0ZXh0cz86IHsgYXZnPzogc3RyaW5nLCBhdmdPdGhlckNvbHVtbj86IHN0cmluZywgY291bnQ/OiBzdHJpbmcsIG1heD86IHN0cmluZywgbWF4T3RoZXJDb2x1bW4/OiBzdHJpbmcsIG1pbj86IHN0cmluZywgbWluT3RoZXJDb2x1bW4/OiBzdHJpbmcsIHN1bT86IHN0cmluZywgc3VtT3RoZXJDb2x1bW4/OiBzdHJpbmcgfSwgdG90YWxJdGVtcz86IEFycmF5PGFueSB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjb2x1bW4/OiBzdHJpbmcsIGNzc0NsYXNzPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2tpcEVtcHR5VmFsdWVzPzogYm9vbGVhbiwgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZhbHVlRm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfT4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGFiSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHR3b1dheUJpbmRpbmdFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdvcmRXcmFwRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuXHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpQ29sdW1uQ29tcG9uZW50KVxyXG4gICAgZ2V0IGNvbHVtbnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpQ29sdW1uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2NvbHVtbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvQ29tcG9uZW50KVxyXG4gICAgZ2V0IHNvcnRCeUdyb3VwU3VtbWFyeUluZm9DaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpU29ydEJ5R3JvdXBTdW1tYXJ5SW5mb0NvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRCeUdyb3VwU3VtbWFyeUluZm8nKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0QnlHcm91cFN1bW1hcnlJbmZvQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdzb3J0QnlHcm91cFN1bW1hcnlJbmZvJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgdGVtcGxhdGVIb3N0OiBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICAgICAgcHJpdmF0ZSBfd2F0Y2hlckhlbHBlcjogV2F0Y2hlckhlbHBlcixcclxuICAgICAgICAgICAgcHJpdmF0ZSBfaWRoOiBJdGVyYWJsZURpZmZlckhlbHBlciwgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcclxuICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogYW55KSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSwgdGVtcGxhdGVIb3N0LCBfd2F0Y2hlckhlbHBlciwgdHJhbnNmZXJTdGF0ZSwgcGxhdGZvcm1JZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FkYXB0aXZlRGV0YWlsUm93UHJlcGFyaW5nJywgZW1pdDogJ29uQWRhcHRpdmVEZXRhaWxSb3dQcmVwYXJpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2VsbENsaWNrJywgZW1pdDogJ29uQ2VsbENsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NlbGxEYmxDbGljaycsIGVtaXQ6ICdvbkNlbGxEYmxDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjZWxsSG92ZXJDaGFuZ2VkJywgZW1pdDogJ29uQ2VsbEhvdmVyQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjZWxsUHJlcGFyZWQnLCBlbWl0OiAnb25DZWxsUHJlcGFyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGVudFJlYWR5JywgZW1pdDogJ29uQ29udGVudFJlYWR5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NvbnRleHRNZW51UHJlcGFyaW5nJywgZW1pdDogJ29uQ29udGV4dE1lbnVQcmVwYXJpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZGF0YUVycm9yT2NjdXJyZWQnLCBlbWl0OiAnb25EYXRhRXJyb3JPY2N1cnJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZWRpdGluZ1N0YXJ0JywgZW1pdDogJ29uRWRpdGluZ1N0YXJ0JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2VkaXRvclByZXBhcmVkJywgZW1pdDogJ29uRWRpdG9yUHJlcGFyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZWRpdG9yUHJlcGFyaW5nJywgZW1pdDogJ29uRWRpdG9yUHJlcGFyaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2V4cG9ydGVkJywgZW1pdDogJ29uRXhwb3J0ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZXhwb3J0aW5nJywgZW1pdDogJ29uRXhwb3J0aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZpbGVTYXZpbmcnLCBlbWl0OiAnb25GaWxlU2F2aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZvY3VzZWRDZWxsQ2hhbmdlZCcsIGVtaXQ6ICdvbkZvY3VzZWRDZWxsQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmb2N1c2VkQ2VsbENoYW5naW5nJywgZW1pdDogJ29uRm9jdXNlZENlbGxDaGFuZ2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmb2N1c2VkUm93Q2hhbmdlZCcsIGVtaXQ6ICdvbkZvY3VzZWRSb3dDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZvY3VzZWRSb3dDaGFuZ2luZycsIGVtaXQ6ICdvbkZvY3VzZWRSb3dDaGFuZ2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luaXROZXdSb3cnLCBlbWl0OiAnb25Jbml0TmV3Um93JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2tleURvd24nLCBlbWl0OiAnb25LZXlEb3duJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0NsaWNrJywgZW1pdDogJ29uUm93Q2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93Q29sbGFwc2VkJywgZW1pdDogJ29uUm93Q29sbGFwc2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0NvbGxhcHNpbmcnLCBlbWl0OiAnb25Sb3dDb2xsYXBzaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0RibENsaWNrJywgZW1pdDogJ29uUm93RGJsQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93RXhwYW5kZWQnLCBlbWl0OiAnb25Sb3dFeHBhbmRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dFeHBhbmRpbmcnLCBlbWl0OiAnb25Sb3dFeHBhbmRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93SW5zZXJ0ZWQnLCBlbWl0OiAnb25Sb3dJbnNlcnRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dJbnNlcnRpbmcnLCBlbWl0OiAnb25Sb3dJbnNlcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93UHJlcGFyZWQnLCBlbWl0OiAnb25Sb3dQcmVwYXJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dSZW1vdmVkJywgZW1pdDogJ29uUm93UmVtb3ZlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dSZW1vdmluZycsIGVtaXQ6ICdvblJvd1JlbW92aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd1VwZGF0ZWQnLCBlbWl0OiAnb25Sb3dVcGRhdGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd1VwZGF0aW5nJywgZW1pdDogJ29uUm93VXBkYXRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93VmFsaWRhdGluZycsIGVtaXQ6ICdvblJvd1ZhbGlkYXRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc2VsZWN0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvblNlbGVjdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAndG9vbGJhclByZXBhcmluZycsIGVtaXQ6ICdvblRvb2xiYXJQcmVwYXJpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FjY2Vzc0tleUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbGxvd0NvbHVtblJlb3JkZXJpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FsbG93Q29sdW1uUmVzaXppbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NhY2hlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY2VsbEhpbnRFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5BdXRvV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtbkNob29zZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtbkZpeGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uSGlkaW5nRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uTWluV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtblJlc2l6aW5nTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2N1c3RvbWl6ZUNvbHVtbnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2N1c3RvbWl6ZUV4cG9ydERhdGFDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGFTb3VyY2VDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGVTZXJpYWxpemF0aW9uRm9ybWF0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWRpdGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Vycm9yUm93RW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZXhwb3J0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJCdWlsZGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJCdWlsZGVyUG9wdXBDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlclBhbmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJSb3dDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlclN5bmNFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJWYWx1ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9jdXNlZENvbHVtbkluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c2VkUm93RW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9jdXNlZFJvd0luZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c2VkUm93S2V5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c1N0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2dyb3VwUGFuZWxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hlYWRlckZpbHRlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVpZ2h0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoaWdobGlnaHRDaGFuZ2VzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoaW50Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdob3ZlclN0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAna2V5Ym9hcmROYXZpZ2F0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdrZXlFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdsb2FkUGFuZWxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21hc3RlckRldGFpbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbm9EYXRhVGV4dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGFnZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BhZ2luZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVtb3RlT3BlcmF0aW9uc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVuZGVyQXN5bmNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlcGFpbnRDaGFuZ2VzT25seUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncm93QWx0ZXJuYXRpb25FbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyb3dUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncnRsRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2Nyb2xsaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWFyY2hQYW5lbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0ZWRSb3dLZXlzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWxlY3Rpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGlvbkZpbHRlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0JvcmRlcnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dDb2x1bW5IZWFkZXJzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93Q29sdW1uTGluZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dSb3dMaW5lc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc29ydEJ5R3JvdXBTdW1tYXJ5SW5mb0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc29ydGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3RhdGVTdG9yaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdW1tYXJ5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0YWJJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndHdvV2F5QmluZGluZ0VuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dpZHRoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3b3JkV3JhcEVuYWJsZWRDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5faWRoLnNldEhvc3QodGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHhEYXRhR3JpZChlbGVtZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kZXN0cm95V2lkZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdjb2x1bW5zJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2RhdGFTb3VyY2UnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygna2V5RXhwcicsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdzZWxlY3RlZFJvd0tleXMnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnc29ydEJ5R3JvdXBTdW1tYXJ5SW5mbycsIGNoYW5nZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQ2hhbmdlcyhwcm9wOiBzdHJpbmcsIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoIShwcm9wIGluIHRoaXMuX29wdGlvbnNUb1VwZGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faWRoLnNldHVwKHByb3AsIGNoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2NvbHVtbnMnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnZGF0YVNvdXJjZScpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdrZXlFeHByJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3NlbGVjdGVkUm93S2V5cycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdzb3J0QnlHcm91cFN1bW1hcnlJbmZvJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4b0NvbHVtbkNob29zZXJNb2R1bGUsXHJcbiAgICBEeG9Db2x1bW5GaXhpbmdNb2R1bGUsXHJcbiAgICBEeG9UZXh0c01vZHVsZSxcclxuICAgIER4aUNvbHVtbk1vZHVsZSxcclxuICAgIER4aUJ1dHRvbk1vZHVsZSxcclxuICAgIER4b0hlYWRlckZpbHRlck1vZHVsZSxcclxuICAgIER4b0xvb2t1cE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b0Zvcm1JdGVtTW9kdWxlLFxyXG4gICAgRHhvTGFiZWxNb2R1bGUsXHJcbiAgICBEeGlWYWxpZGF0aW9uUnVsZU1vZHVsZSxcclxuICAgIER4b0VkaXRpbmdNb2R1bGUsXHJcbiAgICBEeG9Gb3JtTW9kdWxlLFxyXG4gICAgRHhvQ29sQ291bnRCeVNjcmVlbk1vZHVsZSxcclxuICAgIER4aUl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9UYWJQYW5lbE9wdGlvbnNNb2R1bGUsXHJcbiAgICBEeGlUYWJNb2R1bGUsXHJcbiAgICBEeG9CdXR0b25PcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvUG9wdXBNb2R1bGUsXHJcbiAgICBEeG9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9IaWRlTW9kdWxlLFxyXG4gICAgRHhvU2hvd01vZHVsZSxcclxuICAgIER4b1Bvc2l0aW9uTW9kdWxlLFxyXG4gICAgRHhvQXRNb2R1bGUsXHJcbiAgICBEeG9Cb3VuZGFyeU9mZnNldE1vZHVsZSxcclxuICAgIER4b0NvbGxpc2lvbk1vZHVsZSxcclxuICAgIER4b015TW9kdWxlLFxyXG4gICAgRHhvT2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhpVG9vbGJhckl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9FeHBvcnRNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJCdWlsZGVyTW9kdWxlLFxyXG4gICAgRHhpQ3VzdG9tT3BlcmF0aW9uTW9kdWxlLFxyXG4gICAgRHhpRmllbGRNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJPcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Hcm91cE9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJQb3B1cE1vZHVsZSxcclxuICAgIER4b0ZpbHRlclBhbmVsTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyUm93TW9kdWxlLFxyXG4gICAgRHhvT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvR3JvdXBpbmdNb2R1bGUsXHJcbiAgICBEeG9Hcm91cFBhbmVsTW9kdWxlLFxyXG4gICAgRHhvS2V5Ym9hcmROYXZpZ2F0aW9uTW9kdWxlLFxyXG4gICAgRHhvTG9hZFBhbmVsTW9kdWxlLFxyXG4gICAgRHhvTWFzdGVyRGV0YWlsTW9kdWxlLFxyXG4gICAgRHhvUGFnZXJNb2R1bGUsXHJcbiAgICBEeG9QYWdpbmdNb2R1bGUsXHJcbiAgICBEeG9SZW1vdGVPcGVyYXRpb25zTW9kdWxlLFxyXG4gICAgRHhvU2Nyb2xsaW5nTW9kdWxlLFxyXG4gICAgRHhvU2VhcmNoUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9TZWxlY3Rpb25Nb2R1bGUsXHJcbiAgICBEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvTW9kdWxlLFxyXG4gICAgRHhvU29ydGluZ01vZHVsZSxcclxuICAgIER4b1N0YXRlU3RvcmluZ01vZHVsZSxcclxuICAgIER4b1N1bW1hcnlNb2R1bGUsXHJcbiAgICBEeGlHcm91cEl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9WYWx1ZUZvcm1hdE1vZHVsZSxcclxuICAgIER4aVRvdGFsSXRlbU1vZHVsZSxcclxuICAgIER4SW50ZWdyYXRpb25Nb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlLFxyXG4gICAgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhEYXRhR3JpZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhEYXRhR3JpZENvbXBvbmVudCxcclxuICAgIER4b0NvbHVtbkNob29zZXJNb2R1bGUsXHJcbiAgICBEeG9Db2x1bW5GaXhpbmdNb2R1bGUsXHJcbiAgICBEeG9UZXh0c01vZHVsZSxcclxuICAgIER4aUNvbHVtbk1vZHVsZSxcclxuICAgIER4aUJ1dHRvbk1vZHVsZSxcclxuICAgIER4b0hlYWRlckZpbHRlck1vZHVsZSxcclxuICAgIER4b0xvb2t1cE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b0Zvcm1JdGVtTW9kdWxlLFxyXG4gICAgRHhvTGFiZWxNb2R1bGUsXHJcbiAgICBEeGlWYWxpZGF0aW9uUnVsZU1vZHVsZSxcclxuICAgIER4b0VkaXRpbmdNb2R1bGUsXHJcbiAgICBEeG9Gb3JtTW9kdWxlLFxyXG4gICAgRHhvQ29sQ291bnRCeVNjcmVlbk1vZHVsZSxcclxuICAgIER4aUl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9UYWJQYW5lbE9wdGlvbnNNb2R1bGUsXHJcbiAgICBEeGlUYWJNb2R1bGUsXHJcbiAgICBEeG9CdXR0b25PcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvUG9wdXBNb2R1bGUsXHJcbiAgICBEeG9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9IaWRlTW9kdWxlLFxyXG4gICAgRHhvU2hvd01vZHVsZSxcclxuICAgIER4b1Bvc2l0aW9uTW9kdWxlLFxyXG4gICAgRHhvQXRNb2R1bGUsXHJcbiAgICBEeG9Cb3VuZGFyeU9mZnNldE1vZHVsZSxcclxuICAgIER4b0NvbGxpc2lvbk1vZHVsZSxcclxuICAgIER4b015TW9kdWxlLFxyXG4gICAgRHhvT2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhpVG9vbGJhckl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9FeHBvcnRNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJCdWlsZGVyTW9kdWxlLFxyXG4gICAgRHhpQ3VzdG9tT3BlcmF0aW9uTW9kdWxlLFxyXG4gICAgRHhpRmllbGRNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJPcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Hcm91cE9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJQb3B1cE1vZHVsZSxcclxuICAgIER4b0ZpbHRlclBhbmVsTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyUm93TW9kdWxlLFxyXG4gICAgRHhvT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvR3JvdXBpbmdNb2R1bGUsXHJcbiAgICBEeG9Hcm91cFBhbmVsTW9kdWxlLFxyXG4gICAgRHhvS2V5Ym9hcmROYXZpZ2F0aW9uTW9kdWxlLFxyXG4gICAgRHhvTG9hZFBhbmVsTW9kdWxlLFxyXG4gICAgRHhvTWFzdGVyRGV0YWlsTW9kdWxlLFxyXG4gICAgRHhvUGFnZXJNb2R1bGUsXHJcbiAgICBEeG9QYWdpbmdNb2R1bGUsXHJcbiAgICBEeG9SZW1vdGVPcGVyYXRpb25zTW9kdWxlLFxyXG4gICAgRHhvU2Nyb2xsaW5nTW9kdWxlLFxyXG4gICAgRHhvU2VhcmNoUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9TZWxlY3Rpb25Nb2R1bGUsXHJcbiAgICBEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvTW9kdWxlLFxyXG4gICAgRHhvU29ydGluZ01vZHVsZSxcclxuICAgIER4b1N0YXRlU3RvcmluZ01vZHVsZSxcclxuICAgIER4b1N1bW1hcnlNb2R1bGUsXHJcbiAgICBEeGlHcm91cEl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9WYWx1ZUZvcm1hdE1vZHVsZSxcclxuICAgIER4aVRvdGFsSXRlbU1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeERhdGFHcmlkTW9kdWxlIHsgfVxyXG4iXX0=