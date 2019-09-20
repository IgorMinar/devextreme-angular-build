var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';

import DxDataGrid from 'devextreme/ui/data_grid';
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
import { DxoExportModule } from './nested/export';
import { DxoFilterBuilderModule } from './nested/filter-builder';
import { DxiCustomOperationModule } from './nested/custom-operation-dxi';
import { DxiFieldModule } from './nested/field-dxi';
import { DxoFilterOperationDescriptionsModule } from './nested/filter-operation-descriptions';
import { DxoGroupOperationDescriptionsModule } from './nested/group-operation-descriptions';
import { DxoFilterBuilderPopupModule } from './nested/filter-builder-popup';
import { DxoFilterPanelModule } from './nested/filter-panel';
import { DxoFilterRowModule } from './nested/filter-row';
import { DxoOperationDescriptionsModule } from './nested/operation-descriptions';
import { DxoGroupingModule } from './nested/grouping';
import { DxoGroupPanelModule } from './nested/group-panel';
import { DxoKeyboardNavigationModule } from './nested/keyboard-navigation';
import { DxoLoadPanelModule } from './nested/load-panel';
import { DxoMasterDetailModule } from './nested/master-detail';
import { DxoPagerModule } from './nested/pager';
import { DxoPagingModule } from './nested/paging';
import { DxoRemoteOperationsModule } from './nested/remote-operations';
import { DxoScrollingModule } from './nested/scrolling';
import { DxoSearchPanelModule } from './nested/search-panel';
import { DxoSelectionModule } from './nested/selection';
import { DxiSortByGroupSummaryInfoModule } from './nested/sort-by-group-summary-info-dxi';
import { DxoSortingModule } from './nested/sorting';
import { DxoStateStoringModule } from './nested/state-storing';
import { DxoSummaryModule } from './nested/summary';
import { DxiGroupItemModule } from './nested/group-item-dxi';
import { DxoValueFormatModule } from './nested/value-format';
import { DxiTotalItemModule } from './nested/total-item-dxi';
import { DxiColumnComponent } from './nested/column-dxi';
import { DxiSortByGroupSummaryInfoComponent } from './nested/sort-by-group-summary-info-dxi';
/**
 * The DataGrid is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as sorting, grouping, filtering, as well as more advanced capabilities, like state storing, export to Excel, master-detail interface, and many others.
 */
var DxDataGridComponent = (function (_super) {
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
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "allowColumnReordering", {
        get: /**
             * Specifies whether a user can reorder columns.
             */
        function () {
            return this._getOption('allowColumnReordering');
        },
        set: function (value) {
            this._setOption('allowColumnReordering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "allowColumnResizing", {
        get: /**
             * Specifies whether a user can resize columns.
             */
        function () {
            return this._getOption('allowColumnResizing');
        },
        set: function (value) {
            this._setOption('allowColumnResizing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "cacheEnabled", {
        get: /**
             * Specifies whether data should be cached.
             */
        function () {
            return this._getOption('cacheEnabled');
        },
        set: function (value) {
            this._setOption('cacheEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "cellHintEnabled", {
        get: /**
             * Enables a hint that appears when a user hovers the mouse pointer over a cell with truncated content.
             */
        function () {
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
        get: /**
             * Configures the column chooser.
             */
        function () {
            return this._getOption('columnChooser');
        },
        set: function (value) {
            this._setOption('columnChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnFixing", {
        get: /**
             * Configures column fixing.
             */
        function () {
            return this._getOption('columnFixing');
        },
        set: function (value) {
            this._setOption('columnFixing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnHidingEnabled", {
        get: /**
             * Specifies whether the widget should hide columns to adapt to the screen or container size. Ignored if allowColumnResizing is true and columnResizingMode is "widget".
             */
        function () {
            return this._getOption('columnHidingEnabled');
        },
        set: function (value) {
            this._setOption('columnHidingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnMinWidth", {
        get: /**
             * Specifies the minimum width of columns.
             */
        function () {
            return this._getOption('columnMinWidth');
        },
        set: function (value) {
            this._setOption('columnMinWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnResizingMode", {
        get: /**
             * Specifies how the widget resizes columns. Applies only if allowColumnResizing is true.
             */
        function () {
            return this._getOption('columnResizingMode');
        },
        set: function (value) {
            this._setOption('columnResizingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columns", {
        get: /**
             * An array of grid columns.
             */
        function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this._setOption('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnWidth", {
        get: /**
             * Specifies the width for all data columns. Has a lower priority than the column.width option.
             */
        function () {
            return this._getOption('columnWidth');
        },
        set: function (value) {
            this._setOption('columnWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "customizeColumns", {
        get: /**
             * Customizes columns after they are created.
             */
        function () {
            return this._getOption('customizeColumns');
        },
        set: function (value) {
            this._setOption('customizeColumns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "customizeExportData", {
        get: /**
             * Customizes data before export. You can use the export.customizeExcelCell function instead.
             */
        function () {
            return this._getOption('customizeExportData');
        },
        set: function (value) {
            this._setOption('customizeExportData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "dataSource", {
        get: /**
             * Binds the widget to data.
             */
        function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "dateSerializationFormat", {
        get: /**
             * Specifies the format in which date-time values should be sent to the server. Use it only if you do not specify the dataSource at design time.
             */
        function () {
            return this._getOption('dateSerializationFormat');
        },
        set: function (value) {
            this._setOption('dateSerializationFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "editing", {
        get: /**
             * Configures editing.
             */
        function () {
            return this._getOption('editing');
        },
        set: function (value) {
            this._setOption('editing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "errorRowEnabled", {
        get: /**
             * Indicates whether to show the error row.
             */
        function () {
            return this._getOption('errorRowEnabled');
        },
        set: function (value) {
            this._setOption('errorRowEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "export", {
        get: /**
             * Configures client-side exporting.
             */
        function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterBuilder", {
        get: /**
             * Configures the integrated filter builder.
             */
        function () {
            return this._getOption('filterBuilder');
        },
        set: function (value) {
            this._setOption('filterBuilder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterBuilderPopup", {
        get: /**
             * Configures the popup in which the integrated filter builder is shown.
             */
        function () {
            return this._getOption('filterBuilderPopup');
        },
        set: function (value) {
            this._setOption('filterBuilderPopup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterPanel", {
        get: /**
             * Configures the filter panel.
             */
        function () {
            return this._getOption('filterPanel');
        },
        set: function (value) {
            this._setOption('filterPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterRow", {
        get: /**
             * Configures the filter row.
             */
        function () {
            return this._getOption('filterRow');
        },
        set: function (value) {
            this._setOption('filterRow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterSyncEnabled", {
        get: /**
             * Specifies whether to synchronize the filter row, header filter, and filter builder. The synchronized filter expression is stored in the filterValue option.
             */
        function () {
            return this._getOption('filterSyncEnabled');
        },
        set: function (value) {
            this._setOption('filterSyncEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterValue", {
        get: /**
             * Specifies a filter expression.
             */
        function () {
            return this._getOption('filterValue');
        },
        set: function (value) {
            this._setOption('filterValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusedColumnIndex", {
        get: /**
             * Specifies the index of the column focused initially or currently in the data row area.
             */
        function () {
            return this._getOption('focusedColumnIndex');
        },
        set: function (value) {
            this._setOption('focusedColumnIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusedRowEnabled", {
        get: /**
             * Specifies whether the focused row feature is enabled.
             */
        function () {
            return this._getOption('focusedRowEnabled');
        },
        set: function (value) {
            this._setOption('focusedRowEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusedRowIndex", {
        get: /**
             * Specifies the initially or currently focused grid row's index. Use it when focusedRowEnabled is true.
             */
        function () {
            return this._getOption('focusedRowIndex');
        },
        set: function (value) {
            this._setOption('focusedRowIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusedRowKey", {
        get: /**
             * Specifies initially or currently focused grid row's key. Use it when focusedRowEnabled is true.
             */
        function () {
            return this._getOption('focusedRowKey');
        },
        set: function (value) {
            this._setOption('focusedRowKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "grouping", {
        get: /**
             * Configures grouping.
             */
        function () {
            return this._getOption('grouping');
        },
        set: function (value) {
            this._setOption('grouping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "groupPanel", {
        get: /**
             * Configures the group panel.
             */
        function () {
            return this._getOption('groupPanel');
        },
        set: function (value) {
            this._setOption('groupPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "headerFilter", {
        get: /**
             * Configures the header filter feature.
             */
        function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "highlightChanges", {
        get: /**
             * Specifies whether to highlight rows and cells with edited data. repaintChangesOnly should be true.
             */
        function () {
            return this._getOption('highlightChanges');
        },
        set: function (value) {
            this._setOption('highlightChanges', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "keyboardNavigation", {
        get: /**
             * Configures keyboard navigation.
             */
        function () {
            return this._getOption('keyboardNavigation');
        },
        set: function (value) {
            this._setOption('keyboardNavigation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "keyExpr", {
        get: /**
             * Specifies which data field provides keys for data items. Applies only if data is a simple array.
             */
        function () {
            return this._getOption('keyExpr');
        },
        set: function (value) {
            this._setOption('keyExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "loadPanel", {
        get: /**
             * Configures the load panel.
             */
        function () {
            return this._getOption('loadPanel');
        },
        set: function (value) {
            this._setOption('loadPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "masterDetail", {
        get: /**
             * Allows you to build a master-detail interface in the grid.
             */
        function () {
            return this._getOption('masterDetail');
        },
        set: function (value) {
            this._setOption('masterDetail', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "noDataText", {
        get: /**
             * Specifies text shown when the widget does not display any data.
             */
        function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "pager", {
        get: /**
             * Configures the pager.
             */
        function () {
            return this._getOption('pager');
        },
        set: function (value) {
            this._setOption('pager', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "paging", {
        get: /**
             * Configures paging.
             */
        function () {
            return this._getOption('paging');
        },
        set: function (value) {
            this._setOption('paging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "remoteOperations", {
        get: /**
             * Notifies the DataGrid of the server's data processing operations.
             */
        function () {
            return this._getOption('remoteOperations');
        },
        set: function (value) {
            this._setOption('remoteOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "renderAsync", {
        get: /**
             * Specifies whether to render the filter row, command columns, and columns with showEditorAlways set to true after other elements.
             */
        function () {
            return this._getOption('renderAsync');
        },
        set: function (value) {
            this._setOption('renderAsync', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "repaintChangesOnly", {
        get: /**
             * Specifies whether to repaint only those cells whose data changed.
             */
        function () {
            return this._getOption('repaintChangesOnly');
        },
        set: function (value) {
            this._setOption('repaintChangesOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rowAlternationEnabled", {
        get: /**
             * Specifies whether rows should be shaded differently.
             */
        function () {
            return this._getOption('rowAlternationEnabled');
        },
        set: function (value) {
            this._setOption('rowAlternationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rowTemplate", {
        get: /**
             * Specifies a custom template for rows.
             */
        function () {
            return this._getOption('rowTemplate');
        },
        set: function (value) {
            this._setOption('rowTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "scrolling", {
        get: /**
             * Configures scrolling.
             */
        function () {
            return this._getOption('scrolling');
        },
        set: function (value) {
            this._setOption('scrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "searchPanel", {
        get: /**
             * Configures the search panel.
             */
        function () {
            return this._getOption('searchPanel');
        },
        set: function (value) {
            this._setOption('searchPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selectedRowKeys", {
        get: /**
             * Allows you to select rows or determine which rows are selected.
             */
        function () {
            return this._getOption('selectedRowKeys');
        },
        set: function (value) {
            this._setOption('selectedRowKeys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selection", {
        get: /**
             * Configures runtime selection.
             */
        function () {
            return this._getOption('selection');
        },
        set: function (value) {
            this._setOption('selection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selectionFilter", {
        get: /**
             * Specifies filters for the rows that must be selected initially. Applies only if selection.deferred is true.
             */
        function () {
            return this._getOption('selectionFilter');
        },
        set: function (value) {
            this._setOption('selectionFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showBorders", {
        get: /**
             * Specifies whether the outer borders of the widget are visible.
             */
        function () {
            return this._getOption('showBorders');
        },
        set: function (value) {
            this._setOption('showBorders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showColumnHeaders", {
        get: /**
             * Specifies whether column headers are visible.
             */
        function () {
            return this._getOption('showColumnHeaders');
        },
        set: function (value) {
            this._setOption('showColumnHeaders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showColumnLines", {
        get: /**
             * Specifies whether vertical lines that separate one column from another are visible.
             */
        function () {
            return this._getOption('showColumnLines');
        },
        set: function (value) {
            this._setOption('showColumnLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showRowLines", {
        get: /**
             * Specifies whether horizontal lines that separate one row from another are visible.
             */
        function () {
            return this._getOption('showRowLines');
        },
        set: function (value) {
            this._setOption('showRowLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sortByGroupSummaryInfo", {
        get: /**
             * Allows you to sort groups according to the values of group summary items.
             */
        function () {
            return this._getOption('sortByGroupSummaryInfo');
        },
        set: function (value) {
            this._setOption('sortByGroupSummaryInfo', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sorting", {
        get: /**
             * Configures runtime sorting.
             */
        function () {
            return this._getOption('sorting');
        },
        set: function (value) {
            this._setOption('sorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "stateStoring", {
        get: /**
             * Configures state storing.
             */
        function () {
            return this._getOption('stateStoring');
        },
        set: function (value) {
            this._setOption('stateStoring', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "summary", {
        get: /**
             * Specifies the options of the grid summary.
             */
        function () {
            return this._getOption('summary');
        },
        set: function (value) {
            this._setOption('summary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "twoWayBindingEnabled", {
        get: /**
             * Specifies whether to enable two-way data binding.
             */
        function () {
            return this._getOption('twoWayBindingEnabled');
        },
        set: function (value) {
            this._setOption('twoWayBindingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "wordWrapEnabled", {
        get: /**
             * Specifies whether text that does not fit into a column should be wrapped.
             */
        function () {
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
    DxDataGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-data-grid',
                    template: '',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxDataGridComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxDataGridComponent.propDecorators = {
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "allowColumnReordering": [{ type: Input },],
        "allowColumnResizing": [{ type: Input },],
        "cacheEnabled": [{ type: Input },],
        "cellHintEnabled": [{ type: Input },],
        "columnAutoWidth": [{ type: Input },],
        "columnChooser": [{ type: Input },],
        "columnFixing": [{ type: Input },],
        "columnHidingEnabled": [{ type: Input },],
        "columnMinWidth": [{ type: Input },],
        "columnResizingMode": [{ type: Input },],
        "columns": [{ type: Input },],
        "columnWidth": [{ type: Input },],
        "customizeColumns": [{ type: Input },],
        "customizeExportData": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "dateSerializationFormat": [{ type: Input },],
        "disabled": [{ type: Input },],
        "editing": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "errorRowEnabled": [{ type: Input },],
        "export": [{ type: Input },],
        "filterBuilder": [{ type: Input },],
        "filterBuilderPopup": [{ type: Input },],
        "filterPanel": [{ type: Input },],
        "filterRow": [{ type: Input },],
        "filterSyncEnabled": [{ type: Input },],
        "filterValue": [{ type: Input },],
        "focusedColumnIndex": [{ type: Input },],
        "focusedRowEnabled": [{ type: Input },],
        "focusedRowIndex": [{ type: Input },],
        "focusedRowKey": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "grouping": [{ type: Input },],
        "groupPanel": [{ type: Input },],
        "headerFilter": [{ type: Input },],
        "height": [{ type: Input },],
        "highlightChanges": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "keyboardNavigation": [{ type: Input },],
        "keyExpr": [{ type: Input },],
        "loadPanel": [{ type: Input },],
        "masterDetail": [{ type: Input },],
        "noDataText": [{ type: Input },],
        "pager": [{ type: Input },],
        "paging": [{ type: Input },],
        "remoteOperations": [{ type: Input },],
        "renderAsync": [{ type: Input },],
        "repaintChangesOnly": [{ type: Input },],
        "rowAlternationEnabled": [{ type: Input },],
        "rowTemplate": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "scrolling": [{ type: Input },],
        "searchPanel": [{ type: Input },],
        "selectedRowKeys": [{ type: Input },],
        "selection": [{ type: Input },],
        "selectionFilter": [{ type: Input },],
        "showBorders": [{ type: Input },],
        "showColumnHeaders": [{ type: Input },],
        "showColumnLines": [{ type: Input },],
        "showRowLines": [{ type: Input },],
        "sortByGroupSummaryInfo": [{ type: Input },],
        "sorting": [{ type: Input },],
        "stateStoring": [{ type: Input },],
        "summary": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "twoWayBindingEnabled": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "wordWrapEnabled": [{ type: Input },],
        "onAdaptiveDetailRowPreparing": [{ type: Output },],
        "onCellClick": [{ type: Output },],
        "onCellDblClick": [{ type: Output },],
        "onCellHoverChanged": [{ type: Output },],
        "onCellPrepared": [{ type: Output },],
        "onContentReady": [{ type: Output },],
        "onContextMenuPreparing": [{ type: Output },],
        "onDataErrorOccurred": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onEditingStart": [{ type: Output },],
        "onEditorPrepared": [{ type: Output },],
        "onEditorPreparing": [{ type: Output },],
        "onExported": [{ type: Output },],
        "onExporting": [{ type: Output },],
        "onFileSaving": [{ type: Output },],
        "onFocusedCellChanged": [{ type: Output },],
        "onFocusedCellChanging": [{ type: Output },],
        "onFocusedRowChanged": [{ type: Output },],
        "onFocusedRowChanging": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onInitNewRow": [{ type: Output },],
        "onKeyDown": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onRowClick": [{ type: Output },],
        "onRowCollapsed": [{ type: Output },],
        "onRowCollapsing": [{ type: Output },],
        "onRowDblClick": [{ type: Output },],
        "onRowExpanded": [{ type: Output },],
        "onRowExpanding": [{ type: Output },],
        "onRowInserted": [{ type: Output },],
        "onRowInserting": [{ type: Output },],
        "onRowPrepared": [{ type: Output },],
        "onRowRemoved": [{ type: Output },],
        "onRowRemoving": [{ type: Output },],
        "onRowUpdated": [{ type: Output },],
        "onRowUpdating": [{ type: Output },],
        "onRowValidating": [{ type: Output },],
        "onSelectionChanged": [{ type: Output },],
        "onToolbarPreparing": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "allowColumnReorderingChange": [{ type: Output },],
        "allowColumnResizingChange": [{ type: Output },],
        "cacheEnabledChange": [{ type: Output },],
        "cellHintEnabledChange": [{ type: Output },],
        "columnAutoWidthChange": [{ type: Output },],
        "columnChooserChange": [{ type: Output },],
        "columnFixingChange": [{ type: Output },],
        "columnHidingEnabledChange": [{ type: Output },],
        "columnMinWidthChange": [{ type: Output },],
        "columnResizingModeChange": [{ type: Output },],
        "columnsChange": [{ type: Output },],
        "columnWidthChange": [{ type: Output },],
        "customizeColumnsChange": [{ type: Output },],
        "customizeExportDataChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "dateSerializationFormatChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "editingChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "errorRowEnabledChange": [{ type: Output },],
        "exportChange": [{ type: Output },],
        "filterBuilderChange": [{ type: Output },],
        "filterBuilderPopupChange": [{ type: Output },],
        "filterPanelChange": [{ type: Output },],
        "filterRowChange": [{ type: Output },],
        "filterSyncEnabledChange": [{ type: Output },],
        "filterValueChange": [{ type: Output },],
        "focusedColumnIndexChange": [{ type: Output },],
        "focusedRowEnabledChange": [{ type: Output },],
        "focusedRowIndexChange": [{ type: Output },],
        "focusedRowKeyChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "groupingChange": [{ type: Output },],
        "groupPanelChange": [{ type: Output },],
        "headerFilterChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "highlightChangesChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "keyboardNavigationChange": [{ type: Output },],
        "keyExprChange": [{ type: Output },],
        "loadPanelChange": [{ type: Output },],
        "masterDetailChange": [{ type: Output },],
        "noDataTextChange": [{ type: Output },],
        "pagerChange": [{ type: Output },],
        "pagingChange": [{ type: Output },],
        "remoteOperationsChange": [{ type: Output },],
        "renderAsyncChange": [{ type: Output },],
        "repaintChangesOnlyChange": [{ type: Output },],
        "rowAlternationEnabledChange": [{ type: Output },],
        "rowTemplateChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "scrollingChange": [{ type: Output },],
        "searchPanelChange": [{ type: Output },],
        "selectedRowKeysChange": [{ type: Output },],
        "selectionChange": [{ type: Output },],
        "selectionFilterChange": [{ type: Output },],
        "showBordersChange": [{ type: Output },],
        "showColumnHeadersChange": [{ type: Output },],
        "showColumnLinesChange": [{ type: Output },],
        "showRowLinesChange": [{ type: Output },],
        "sortByGroupSummaryInfoChange": [{ type: Output },],
        "sortingChange": [{ type: Output },],
        "stateStoringChange": [{ type: Output },],
        "summaryChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "twoWayBindingEnabledChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "wordWrapEnabledChange": [{ type: Output },],
        "columnsChildren": [{ type: ContentChildren, args: [DxiColumnComponent,] },],
        "sortByGroupSummaryInfoChildren": [{ type: ContentChildren, args: [DxiSortByGroupSummaryInfoComponent,] },],
    };
    return DxDataGridComponent;
}(DxComponent));
export { DxDataGridComponent };
var DxDataGridModule = (function () {
    function DxDataGridModule() {
    }
    DxDataGridModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxDataGridModule;
}());
export { DxDataGridModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdWkvZGF0YS1ncmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFJWixlQUFlLEVBQ2YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sVUFBVSxNQUFNLDJCQUEyQixDQUFDO0FBRW5ELE9BQU8sVUFBVSxNQUFNLHlCQUF5QixDQUFDO0FBR2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztJQWtCcEQsdUNBQVc7SUErNUNoRCw2QkFBWSxVQUFzQixFQUFFLE1BQWMsRUFBRSxZQUE0QixFQUNoRSxjQUE2QixFQUM3QixJQUEwQixFQUFFLFVBQTRCLEVBQ2hFLGFBQTRCLEVBQ1A7UUFKN0IsWUFNSSxrQkFBTSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxTQXNIckY7UUEzSGUsb0JBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsVUFBSSxHQUFKLElBQUksQ0FBc0I7UUFNdEMsS0FBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsU0FBUyxFQUFFLDRCQUE0QixFQUFFLElBQUksRUFBRSw4QkFBOEIsRUFBRTtZQUNqRixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUMvQyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ3JELEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTtZQUM3RCxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ3JELEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDckQsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFO1lBQ3JFLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUMvRCxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUMvQyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ3JELEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUN6RCxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDM0QsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDN0MsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDL0MsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDakQsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFO1lBQ2pFLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTtZQUNuRSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDL0QsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFO1lBQ2pFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ25ELEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ2pELEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzNDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDdkQsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDN0MsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUNyRCxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQ3ZELEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ25ELEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ25ELEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDckQsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDbkQsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUNyRCxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUNuRCxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUNqRCxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUNuRCxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUNqRCxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUNuRCxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQ3ZELEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTtZQUM3RCxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDN0QsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUU7WUFDcEMsRUFBRSxJQUFJLEVBQUUsNkJBQTZCLEVBQUU7WUFDdkMsRUFBRSxJQUFJLEVBQUUsMkJBQTJCLEVBQUU7WUFDckMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7WUFDakMsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7WUFDakMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsMkJBQTJCLEVBQUU7WUFDckMsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUU7WUFDaEMsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUU7WUFDcEMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQzdCLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFO1lBQ2xDLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFO1lBQ3JDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO1lBQzVCLEVBQUUsSUFBSSxFQUFFLCtCQUErQixFQUFFO1lBQ3pDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzFCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN6QixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUM3QixFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTtZQUNqQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDeEIsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUU7WUFDcEMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDN0IsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUU7WUFDbkMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDN0IsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUU7WUFDcEMsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUU7WUFDbkMsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7WUFDakMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUU7WUFDbkMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDMUIsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDNUIsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3hCLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFO1lBQ2xDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN0QixFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRTtZQUNuQyxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRTtZQUNwQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDNUIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3ZCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4QixFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRTtZQUNsQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUM3QixFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRTtZQUNwQyxFQUFFLElBQUksRUFBRSw2QkFBNkIsRUFBRTtZQUN2QyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUM3QixFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUM1QixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUMzQixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUM3QixFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTtZQUNqQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUMzQixFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTtZQUNqQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUM3QixFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRTtZQUNuQyxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTtZQUNqQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSw4QkFBOEIsRUFBRTtZQUN4QyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzFCLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN6QixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDdkIsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDeEIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQzs7S0FDNUI7MEJBbmhERywwQ0FBUzs7Ozs7WUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7YUFFeEMsVUFBYyxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDOzs7OzBCQU9HLG1EQUFrQjs7Ozs7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7YUFFakQsVUFBdUIsS0FBYztZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hEOzs7OzBCQU9HLHNEQUFxQjs7Ozs7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7YUFFcEQsVUFBMEIsS0FBYztZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25EOzs7OzBCQU9HLG9EQUFtQjs7Ozs7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7YUFFbEQsVUFBd0IsS0FBYztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pEOzs7OzBCQU9HLDZDQUFZOzs7OztZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzthQUUzQyxVQUFpQixLQUFjO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFDOzs7OzBCQU9HLGdEQUFlOzs7OztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O2FBRTlDLFVBQW9CLEtBQWM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3Qzs7OzswQkFJRyxnREFBZTs7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzthQUU5QyxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0M7Ozs7MEJBT0csOENBQWE7Ozs7O1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7O2FBRTVDLFVBQWtCLEtBQW9LO1lBQ2xMLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDOzs7OzBCQU9HLDZDQUFZOzs7OztZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzthQUUzQyxVQUFpQixLQUFxSDtZQUNsSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQzs7OzswQkFPRyxvREFBbUI7Ozs7O1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7O2FBRWxELFVBQXdCLEtBQWM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqRDs7OzswQkFPRywrQ0FBYzs7Ozs7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzthQUU3QyxVQUFtQixLQUFhO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUM7Ozs7MEJBT0csbURBQWtCOzs7OztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOzthQUVqRCxVQUF1QixLQUFhO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEQ7Ozs7MEJBT0csd0NBQU87Ozs7O1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7O2FBRXRDLFVBQVksS0FBcUQ7WUFDN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckM7Ozs7MEJBT0csNENBQVc7Ozs7O1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7O2FBRTFDLFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekM7Ozs7MEJBT0csaURBQWdCOzs7OztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOzthQUUvQyxVQUFxQixLQUFlO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDOUM7Ozs7MEJBT0csb0RBQW1COzs7OztZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzthQUVsRCxVQUF3QixLQUFlO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakQ7Ozs7MEJBT0csMkNBQVU7Ozs7O1lBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7O2FBRXpDLFVBQWUsS0FBMkY7WUFDdEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEM7Ozs7MEJBT0csd0RBQXVCOzs7OztZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOzthQUV0RCxVQUE0QixLQUFhO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckQ7Ozs7MEJBT0cseUNBQVE7Ozs7O1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7O2FBRXZDLFVBQWEsS0FBYztZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN0Qzs7OzswQkFPRyx3Q0FBTzs7Ozs7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7YUFFdEMsVUFBWSxLQUFxa0I7WUFDN2tCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OzBCQU9HLDRDQUFXOzs7OztZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzthQUUxQyxVQUFnQixLQUFVO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pDOzs7OzBCQU9HLGdEQUFlOzs7OztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O2FBRTlDLFVBQW9CLEtBQWM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3Qzs7OzswQkFPRyx1Q0FBTTs7Ozs7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7YUFFckMsVUFBVyxLQUErUztZQUN0VCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQzs7OzswQkFPRyw4Q0FBYTs7Ozs7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7YUFFNUMsVUFBa0IsS0FBMkM7WUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0M7Ozs7MEJBT0csbURBQWtCOzs7OztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOzthQUVqRCxVQUF1QixLQUFtQztZQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hEOzs7OzBCQU9HLDRDQUFXOzs7OztZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzthQUUxQyxVQUFnQixLQUFvSztZQUNoTCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7OzswQkFPRywwQ0FBUzs7Ozs7WUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7YUFFeEMsVUFBYyxLQUFxZDtZQUMvZCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2Qzs7OzswQkFPRyxrREFBaUI7Ozs7O1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2FBRWhELFVBQXNCLEtBQWM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMvQzs7OzswQkFPRyw0Q0FBVzs7Ozs7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7YUFFMUMsVUFBZ0IsS0FBVTtZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7OzswQkFPRyxtREFBa0I7Ozs7O1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7O2FBRWpELFVBQXVCLEtBQWE7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRDs7OzswQkFPRyxrREFBaUI7Ozs7O1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2FBRWhELFVBQXNCLEtBQWM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMvQzs7OzswQkFPRyxnREFBZTs7Ozs7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzthQUU5QyxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0M7Ozs7MEJBT0csOENBQWE7Ozs7O1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7O2FBRTVDLFVBQWtCLEtBQVU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0M7Ozs7MEJBT0csa0RBQWlCOzs7OztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOzthQUVoRCxVQUFzQixLQUFjO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0M7Ozs7MEJBT0cseUNBQVE7Ozs7O1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7O2FBRXZDLFVBQWEsS0FBK1A7WUFDeFEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7Ozs7MEJBT0csMkNBQVU7Ozs7O1lBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7O2FBRXpDLFVBQWUsS0FBNkY7WUFDeEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEM7Ozs7MEJBT0csNkNBQVk7Ozs7O1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7O2FBRTNDLFVBQWlCLEtBQTJLO1lBQ3hMLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFDOzs7OzBCQU9HLHVDQUFNOzs7OztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzthQUVyQyxVQUFXLEtBQWlDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7OzBCQU9HLGlEQUFnQjs7Ozs7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7YUFFL0MsVUFBcUIsS0FBYztZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlDOzs7OzBCQU9HLHFDQUFJOzs7OztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzthQUVuQyxVQUFTLEtBQWE7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbEM7Ozs7MEJBT0csa0RBQWlCOzs7OztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOzthQUVoRCxVQUFzQixLQUFjO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0M7Ozs7MEJBT0csbURBQWtCOzs7OztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOzthQUVqRCxVQUF1QixLQUF3RjtZQUMzRyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hEOzs7OzBCQU9HLHdDQUFPOzs7OztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzthQUV0QyxVQUFZLEtBQTZCO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OzBCQU9HLDBDQUFTOzs7OztZQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzthQUV4QyxVQUFjLEtBQTBMO1lBQ3BNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDOzs7OzBCQU9HLDZDQUFZOzs7OztZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzthQUUzQyxVQUFpQixLQUFxRTtZQUNsRixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQzs7OzswQkFPRywyQ0FBVTs7Ozs7WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7YUFFekMsVUFBZSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hDOzs7OzBCQU9HLHNDQUFLOzs7OztZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzthQUVwQyxVQUFVLEtBQXNLO1lBQzVLLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7OzBCQU9HLHVDQUFNOzs7OztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzthQUVyQyxVQUFXLEtBQW1FO1lBQzFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7OzBCQU9HLGlEQUFnQjs7Ozs7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7YUFFL0MsVUFBcUIsS0FBMkk7WUFDNUosSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5Qzs7OzswQkFPRyw0Q0FBVzs7Ozs7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7YUFFMUMsVUFBZ0IsS0FBYztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7OzswQkFPRyxtREFBa0I7Ozs7O1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7O2FBRWpELFVBQXVCLEtBQWM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRDs7OzswQkFPRyxzREFBcUI7Ozs7O1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2FBRXBELFVBQTBCLEtBQWM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRDs7OzswQkFPRyw0Q0FBVzs7Ozs7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7YUFFMUMsVUFBZ0IsS0FBVTtZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7OzswQkFPRywyQ0FBVTs7Ozs7WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7YUFFekMsVUFBZSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hDOzs7OzBCQU9HLDBDQUFTOzs7OztZQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzthQUV4QyxVQUFjLEtBQTRNO1lBQ3ROLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDOzs7OzBCQU9HLDRDQUFXOzs7OztZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzthQUUxQyxVQUFnQixLQUFzTDtZQUNsTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7OzswQkFPRyxnREFBZTs7Ozs7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzthQUU5QyxVQUFvQixLQUFpQjtZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdDOzs7OzBCQU9HLDBDQUFTOzs7OztZQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzthQUV4QyxVQUFjLEtBQTJIO1lBQ3JJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDOzs7OzBCQU9HLGdEQUFlOzs7OztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O2FBRTlDLFVBQW9CLEtBQVU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3Qzs7OzswQkFPRyw0Q0FBVzs7Ozs7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7YUFFMUMsVUFBZ0IsS0FBYztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7OzswQkFPRyxrREFBaUI7Ozs7O1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2FBRWhELFVBQXNCLEtBQWM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMvQzs7OzswQkFPRyxnREFBZTs7Ozs7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzthQUU5QyxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0M7Ozs7MEJBT0csNkNBQVk7Ozs7O1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7O2FBRTNDLFVBQWlCLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUM7Ozs7MEJBT0csdURBQXNCOzs7OztZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzthQUVyRCxVQUEyQixLQUErRjtZQUN0SCxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BEOzs7OzBCQU9HLHdDQUFPOzs7OztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzthQUV0QyxVQUFZLEtBQTZGO1lBQ3JHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OzBCQU9HLDZDQUFZOzs7OztZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzthQUUzQyxVQUFpQixLQUFzSTtZQUNuSixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQzs7OzswQkFPRyx3Q0FBTzs7Ozs7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7YUFFdEMsVUFBWSxLQUF5MEI7WUFDajFCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OzBCQU9HLHlDQUFROzs7OztZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzthQUV2QyxVQUFhLEtBQWE7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7Ozs7MEJBT0cscURBQW9COzs7OztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzthQUVuRCxVQUF5QixLQUFjO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbEQ7Ozs7MEJBT0csd0NBQU87Ozs7O1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7O2FBRXRDLFVBQVksS0FBYztZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQzs7OzswQkFPRyxzQ0FBSzs7Ozs7WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7YUFFcEMsVUFBVSxLQUFpQztZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuQzs7OzswQkFPRyxnREFBZTs7Ozs7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzthQUU5QyxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0M7Ozs7MEJBaWpCRyxnREFBZTs7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7YUFFdEMsVUFBb0IsS0FBSztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN0Qzs7OzswQkFHRywrREFBOEI7O1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUM7O2FBRXJELFVBQW1DLEtBQUs7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyRDs7OztJQWlJUyw2Q0FBZSxHQUF6QixVQUEwQixPQUFPLEVBQUUsT0FBTztRQUN0QyxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNDO0lBRUQseUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN6QjtJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixpQkFBTSxXQUFXLFlBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3hEO0lBRUQsMENBQVksR0FBWixVQUFhLElBQVksRUFBRSxPQUFzQjtRQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbEM7S0FDSjtJQUVELHVDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQyxpQkFBTSxTQUFTLFdBQUUsQ0FBQztRQUNsQixpQkFBTSxtQkFBbUIsV0FBRSxDQUFDO0tBQy9CO0lBRUQsd0NBQVUsR0FBVixVQUFXLElBQVksRUFBRSxLQUFVO1FBQy9CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDO1FBRTNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLGlCQUFNLFVBQVUsWUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakM7S0FDSjs7Z0JBaGxESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLFNBQVMsRUFBRTt3QkFDUCxjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixvQkFBb0I7cUJBQ3ZCO2lCQUNKOzs7O2dCQTFHRyxVQUFVO2dCQUNWLE1BQU07Z0JBc0JELGNBQWM7Z0JBSWQsYUFBYTtnQkFDYixvQkFBb0I7Z0JBRnBCLGdCQUFnQjtnQkEvQmhCLGFBQWE7Z0RBbWhEVCxNQUFNLFNBQUMsV0FBVzs7OzhCQTU1QzFCLEtBQUs7dUNBWUwsS0FBSzswQ0FZTCxLQUFLO3dDQVlMLEtBQUs7aUNBWUwsS0FBSztvQ0FZTCxLQUFLO29DQVNMLEtBQUs7a0NBWUwsS0FBSztpQ0FZTCxLQUFLO3dDQVlMLEtBQUs7bUNBWUwsS0FBSzt1Q0FZTCxLQUFLOzRCQVlMLEtBQUs7Z0NBWUwsS0FBSztxQ0FZTCxLQUFLO3dDQVlMLEtBQUs7K0JBWUwsS0FBSzs0Q0FZTCxLQUFLOzZCQVlMLEtBQUs7NEJBWUwsS0FBSztnQ0FZTCxLQUFLO29DQVlMLEtBQUs7MkJBWUwsS0FBSztrQ0FZTCxLQUFLO3VDQVlMLEtBQUs7Z0NBWUwsS0FBSzs4QkFZTCxLQUFLO3NDQVlMLEtBQUs7Z0NBWUwsS0FBSzt1Q0FZTCxLQUFLO3NDQVlMLEtBQUs7b0NBWUwsS0FBSztrQ0FZTCxLQUFLO3NDQVlMLEtBQUs7NkJBWUwsS0FBSzsrQkFZTCxLQUFLO2lDQVlMLEtBQUs7MkJBWUwsS0FBSztxQ0FZTCxLQUFLO3lCQVlMLEtBQUs7c0NBWUwsS0FBSzt1Q0FZTCxLQUFLOzRCQVlMLEtBQUs7OEJBWUwsS0FBSztpQ0FZTCxLQUFLOytCQVlMLEtBQUs7MEJBWUwsS0FBSzsyQkFZTCxLQUFLO3FDQVlMLEtBQUs7Z0NBWUwsS0FBSzt1Q0FZTCxLQUFLOzBDQVlMLEtBQUs7Z0NBWUwsS0FBSzsrQkFZTCxLQUFLOzhCQVlMLEtBQUs7Z0NBWUwsS0FBSztvQ0FZTCxLQUFLOzhCQVlMLEtBQUs7b0NBWUwsS0FBSztnQ0FZTCxLQUFLO3NDQVlMLEtBQUs7b0NBWUwsS0FBSztpQ0FZTCxLQUFLOzJDQVlMLEtBQUs7NEJBWUwsS0FBSztpQ0FZTCxLQUFLOzRCQVlMLEtBQUs7NkJBWUwsS0FBSzt5Q0FZTCxLQUFLOzRCQVlMLEtBQUs7MEJBWUwsS0FBSztvQ0FZTCxLQUFLO2lEQVdMLE1BQU07Z0NBS04sTUFBTTttQ0FLTixNQUFNO3VDQUtOLE1BQU07bUNBS04sTUFBTTttQ0FLTixNQUFNOzJDQUtOLE1BQU07d0NBS04sTUFBTTtnQ0FLTixNQUFNO21DQUtOLE1BQU07cUNBS04sTUFBTTtzQ0FLTixNQUFNOytCQUtOLE1BQU07Z0NBS04sTUFBTTtpQ0FLTixNQUFNO3lDQUtOLE1BQU07MENBS04sTUFBTTt3Q0FLTixNQUFNO3lDQUtOLE1BQU07a0NBS04sTUFBTTtpQ0FLTixNQUFNOzhCQUtOLE1BQU07b0NBS04sTUFBTTsrQkFLTixNQUFNO21DQUtOLE1BQU07b0NBS04sTUFBTTtrQ0FLTixNQUFNO2tDQUtOLE1BQU07bUNBS04sTUFBTTtrQ0FLTixNQUFNO21DQUtOLE1BQU07a0NBS04sTUFBTTtpQ0FLTixNQUFNO2tDQUtOLE1BQU07aUNBS04sTUFBTTtrQ0FLTixNQUFNO29DQUtOLE1BQU07dUNBS04sTUFBTTt1Q0FLTixNQUFNO29DQUtOLE1BQU07NkNBS04sTUFBTTtnREFLTixNQUFNOzhDQUtOLE1BQU07dUNBS04sTUFBTTswQ0FLTixNQUFNOzBDQUtOLE1BQU07d0NBS04sTUFBTTt1Q0FLTixNQUFNOzhDQUtOLE1BQU07eUNBS04sTUFBTTs2Q0FLTixNQUFNO2tDQUtOLE1BQU07c0NBS04sTUFBTTsyQ0FLTixNQUFNOzhDQUtOLE1BQU07cUNBS04sTUFBTTtrREFLTixNQUFNO21DQUtOLE1BQU07a0NBS04sTUFBTTtzQ0FLTixNQUFNOzBDQUtOLE1BQU07aUNBS04sTUFBTTt3Q0FLTixNQUFNOzZDQUtOLE1BQU07c0NBS04sTUFBTTtvQ0FLTixNQUFNOzRDQUtOLE1BQU07c0NBS04sTUFBTTs2Q0FLTixNQUFNOzRDQUtOLE1BQU07MENBS04sTUFBTTt3Q0FLTixNQUFNOzRDQUtOLE1BQU07bUNBS04sTUFBTTtxQ0FLTixNQUFNO3VDQUtOLE1BQU07aUNBS04sTUFBTTsyQ0FLTixNQUFNOytCQUtOLE1BQU07NENBS04sTUFBTTs2Q0FLTixNQUFNO2tDQUtOLE1BQU07b0NBS04sTUFBTTt1Q0FLTixNQUFNO3FDQUtOLE1BQU07Z0NBS04sTUFBTTtpQ0FLTixNQUFNOzJDQUtOLE1BQU07c0NBS04sTUFBTTs2Q0FLTixNQUFNO2dEQUtOLE1BQU07c0NBS04sTUFBTTtxQ0FLTixNQUFNO29DQUtOLE1BQU07c0NBS04sTUFBTTswQ0FLTixNQUFNO29DQUtOLE1BQU07MENBS04sTUFBTTtzQ0FLTixNQUFNOzRDQUtOLE1BQU07MENBS04sTUFBTTt1Q0FLTixNQUFNO2lEQUtOLE1BQU07a0NBS04sTUFBTTt1Q0FLTixNQUFNO2tDQUtOLE1BQU07bUNBS04sTUFBTTsrQ0FLTixNQUFNO2tDQUtOLE1BQU07Z0NBS04sTUFBTTswQ0FLTixNQUFNO29DQUtOLGVBQWUsU0FBQyxrQkFBa0I7bURBUWxDLGVBQWUsU0FBQyxrQ0FBa0M7OzhCQWhpRHZEO0VBMEl5QyxXQUFXO1NBQXZDLG1CQUFtQjs7Ozs7Z0JBMGtEL0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLHVCQUF1Qjt3QkFDdkIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLHlCQUF5Qjt3QkFDekIsYUFBYTt3QkFDYix3QkFBd0I7d0JBQ3hCLFlBQVk7d0JBQ1osc0JBQXNCO3dCQUN0QixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCx1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsY0FBYzt3QkFDZCxvQ0FBb0M7d0JBQ3BDLG1DQUFtQzt3QkFDbkMsMkJBQTJCO3dCQUMzQixvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsOEJBQThCO3dCQUM5QixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQixrQkFBa0I7d0JBQ2xCLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsK0JBQStCO3dCQUMvQixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsMEJBQTBCO3FCQUMzQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLHVCQUF1Qjt3QkFDdkIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLHlCQUF5Qjt3QkFDekIsYUFBYTt3QkFDYix3QkFBd0I7d0JBQ3hCLFlBQVk7d0JBQ1osc0JBQXNCO3dCQUN0QixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCx1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsY0FBYzt3QkFDZCxvQ0FBb0M7d0JBQ3BDLG1DQUFtQzt3QkFDbkMsMkJBQTJCO3dCQUMzQixvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsOEJBQThCO3dCQUM5QixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQixrQkFBa0I7d0JBQ2xCLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsK0JBQStCO3dCQUMvQixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7cUJBQ2pCO2lCQUNGOzsyQkFuMUREOztTQW8xRGEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhEYXRhR3JpZCBmcm9tICdkZXZleHRyZW1lL3VpL2RhdGFfZ3JpZCc7XHJcblxyXG5cclxuaW1wb3J0IHsgRHhDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVIb3N0IH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZS1ob3N0JztcclxuaW1wb3J0IHsgRHhJbnRlZ3JhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvaW50ZWdyYXRpb24nO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBXYXRjaGVySGVscGVyIH0gZnJvbSAnLi4vY29yZS93YXRjaGVyLWhlbHBlcic7XHJcbmltcG9ydCB7IEl0ZXJhYmxlRGlmZmVySGVscGVyIH0gZnJvbSAnLi4vY29yZS9pdGVyYWJsZS1kaWZmZXItaGVscGVyJztcclxuXHJcbmltcG9ydCB7IER4b0NvbHVtbkNob29zZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb2x1bW4tY2hvb3Nlcic7XHJcbmltcG9ydCB7IER4b0NvbHVtbkZpeGluZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbHVtbi1maXhpbmcnO1xyXG5pbXBvcnQgeyBEeG9UZXh0c01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RleHRzJztcclxuaW1wb3J0IHsgRHhpQ29sdW1uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29sdW1uLWR4aSc7XHJcbmltcG9ydCB7IER4aUJ1dHRvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2J1dHRvbi1keGknO1xyXG5pbXBvcnQgeyBEeG9IZWFkZXJGaWx0ZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9oZWFkZXItZmlsdGVyJztcclxuaW1wb3J0IHsgRHhvTG9va3VwTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbG9va3VwJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9ybWF0JztcclxuaW1wb3J0IHsgRHhvRm9ybUl0ZW1Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mb3JtLWl0ZW0nO1xyXG5pbXBvcnQgeyBEeG9MYWJlbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2xhYmVsJztcclxuaW1wb3J0IHsgRHhpVmFsaWRhdGlvblJ1bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC92YWxpZGF0aW9uLXJ1bGUtZHhpJztcclxuaW1wb3J0IHsgRHhvRWRpdGluZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2VkaXRpbmcnO1xyXG5pbXBvcnQgeyBEeG9Gb3JtTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9ybSc7XHJcbmltcG9ydCB7IER4b0NvbENvdW50QnlTY3JlZW5Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb2wtY291bnQtYnktc2NyZWVuJztcclxuaW1wb3J0IHsgRHhpSXRlbU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2l0ZW0tZHhpJztcclxuaW1wb3J0IHsgRHhvVGFiUGFuZWxPcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdGFiLXBhbmVsLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBEeGlUYWJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC90YWItZHhpJztcclxuaW1wb3J0IHsgRHhvQnV0dG9uT3B0aW9uc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2J1dHRvbi1vcHRpb25zJztcclxuaW1wb3J0IHsgRHhvUG9wdXBNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9wb3B1cCc7XHJcbmltcG9ydCB7IER4b0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IER4b0hpZGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9oaWRlJztcclxuaW1wb3J0IHsgRHhvU2hvd01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Nob3cnO1xyXG5pbXBvcnQgeyBEeG9Qb3NpdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Bvc2l0aW9uJztcclxuaW1wb3J0IHsgRHhvQXRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hdCc7XHJcbmltcG9ydCB7IER4b0JvdW5kYXJ5T2Zmc2V0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYm91bmRhcnktb2Zmc2V0JztcclxuaW1wb3J0IHsgRHhvQ29sbGlzaW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29sbGlzaW9uJztcclxuaW1wb3J0IHsgRHhvTXlNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9teSc7XHJcbmltcG9ydCB7IER4b09mZnNldE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL29mZnNldCc7XHJcbmltcG9ydCB7IER4aVRvb2xiYXJJdGVtTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdG9vbGJhci1pdGVtLWR4aSc7XHJcbmltcG9ydCB7IER4b0V4cG9ydE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2V4cG9ydCc7XHJcbmltcG9ydCB7IER4b0ZpbHRlckJ1aWxkZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9maWx0ZXItYnVpbGRlcic7XHJcbmltcG9ydCB7IER4aUN1c3RvbU9wZXJhdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2N1c3RvbS1vcGVyYXRpb24tZHhpJztcclxuaW1wb3J0IHsgRHhpRmllbGRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9maWVsZC1keGknO1xyXG5pbXBvcnQgeyBEeG9GaWx0ZXJPcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9maWx0ZXItb3BlcmF0aW9uLWRlc2NyaXB0aW9ucyc7XHJcbmltcG9ydCB7IER4b0dyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZ3JvdXAtb3BlcmF0aW9uLWRlc2NyaXB0aW9ucyc7XHJcbmltcG9ydCB7IER4b0ZpbHRlckJ1aWxkZXJQb3B1cE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ZpbHRlci1idWlsZGVyLXBvcHVwJztcclxuaW1wb3J0IHsgRHhvRmlsdGVyUGFuZWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9maWx0ZXItcGFuZWwnO1xyXG5pbXBvcnQgeyBEeG9GaWx0ZXJSb3dNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9maWx0ZXItcm93JztcclxuaW1wb3J0IHsgRHhvT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvb3BlcmF0aW9uLWRlc2NyaXB0aW9ucyc7XHJcbmltcG9ydCB7IER4b0dyb3VwaW5nTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZ3JvdXBpbmcnO1xyXG5pbXBvcnQgeyBEeG9Hcm91cFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZ3JvdXAtcGFuZWwnO1xyXG5pbXBvcnQgeyBEeG9LZXlib2FyZE5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9rZXlib2FyZC1uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgRHhvTG9hZFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbG9hZC1wYW5lbCc7XHJcbmltcG9ydCB7IER4b01hc3RlckRldGFpbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL21hc3Rlci1kZXRhaWwnO1xyXG5pbXBvcnQgeyBEeG9QYWdlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3BhZ2VyJztcclxuaW1wb3J0IHsgRHhvUGFnaW5nTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcGFnaW5nJztcclxuaW1wb3J0IHsgRHhvUmVtb3RlT3BlcmF0aW9uc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3JlbW90ZS1vcGVyYXRpb25zJztcclxuaW1wb3J0IHsgRHhvU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHsgRHhvU2VhcmNoUGFuZWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zZWFyY2gtcGFuZWwnO1xyXG5pbXBvcnQgeyBEeG9TZWxlY3Rpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zZWxlY3Rpb24nO1xyXG5pbXBvcnQgeyBEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc29ydC1ieS1ncm91cC1zdW1tYXJ5LWluZm8tZHhpJztcclxuaW1wb3J0IHsgRHhvU29ydGluZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NvcnRpbmcnO1xyXG5pbXBvcnQgeyBEeG9TdGF0ZVN0b3JpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGF0ZS1zdG9yaW5nJztcclxuaW1wb3J0IHsgRHhvU3VtbWFyeU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N1bW1hcnknO1xyXG5pbXBvcnQgeyBEeGlHcm91cEl0ZW1Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9ncm91cC1pdGVtLWR4aSc7XHJcbmltcG9ydCB7IER4b1ZhbHVlRm9ybWF0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdmFsdWUtZm9ybWF0JztcclxuaW1wb3J0IHsgRHhpVG90YWxJdGVtTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdG90YWwtaXRlbS1keGknO1xyXG5cclxuaW1wb3J0IHsgRHhpQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9uZXN0ZWQvY29sdW1uLWR4aSc7XHJcbmltcG9ydCB7IER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Db21wb25lbnQgfSBmcm9tICcuL25lc3RlZC9zb3J0LWJ5LWdyb3VwLXN1bW1hcnktaW5mby1keGknO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBEYXRhR3JpZCBpcyBhIHdpZGdldCB0aGF0IHJlcHJlc2VudHMgZGF0YSBmcm9tIGEgbG9jYWwgb3IgcmVtb3RlIHNvdXJjZSBpbiB0aGUgZm9ybSBvZiBhIGdyaWQuIFRoaXMgd2lkZ2V0IG9mZmVycyBzdWNoIGJhc2ljIGZlYXR1cmVzIGFzIHNvcnRpbmcsIGdyb3VwaW5nLCBmaWx0ZXJpbmcsIGFzIHdlbGwgYXMgbW9yZSBhZHZhbmNlZCBjYXBhYmlsaXRpZXMsIGxpa2Ugc3RhdGUgc3RvcmluZywgZXhwb3J0IHRvIEV4Y2VsLCBtYXN0ZXItZGV0YWlsIGludGVyZmFjZSwgYW5kIG1hbnkgb3RoZXJzLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4LWRhdGEtZ3JpZCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4RGF0YUdyaWRDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeERhdGFHcmlkO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgc2hvcnRjdXQga2V5IHRoYXQgc2V0cyBmb2N1cyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjY2Vzc0tleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjY2Vzc0tleScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjY2Vzc0tleSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY2Nlc3NLZXknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBpbnRlcmFjdGluZyB3aXRoIGEgdXNlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY3RpdmVTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWN0aXZlU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWN0aXZlU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgYSB1c2VyIGNhbiByZW9yZGVyIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxsb3dDb2x1bW5SZW9yZGVyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93Q29sdW1uUmVvcmRlcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93Q29sdW1uUmVvcmRlcmluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dDb2x1bW5SZW9yZGVyaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGEgdXNlciBjYW4gcmVzaXplIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxsb3dDb2x1bW5SZXNpemluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0NvbHVtblJlc2l6aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dDb2x1bW5SZXNpemluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dDb2x1bW5SZXNpemluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBkYXRhIHNob3VsZCBiZSBjYWNoZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2FjaGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NhY2hlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhY2hlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FjaGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZXMgYSBoaW50IHRoYXQgYXBwZWFycyB3aGVuIGEgdXNlciBob3ZlcnMgdGhlIG1vdXNlIHBvaW50ZXIgb3ZlciBhIGNlbGwgd2l0aCB0cnVuY2F0ZWQgY29udGVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjZWxsSGludEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2VsbEhpbnRFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2VsbEhpbnRFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjZWxsSGludEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uQXV0b1dpZHRoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbkF1dG9XaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbkF1dG9XaWR0aCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uQXV0b1dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGNvbHVtbiBjaG9vc2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbkNob29zZXIoKTogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGVtcHR5UGFuZWxUZXh0Pzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBtb2RlPzogc3RyaW5nLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCB0aXRsZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uQ2hvb3NlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbkNob29zZXIodmFsdWU6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBlbXB0eVBhbmVsVGV4dD86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgbW9kZT86IHN0cmluZywgc2VhcmNoVGltZW91dD86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbkNob29zZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBjb2x1bW4gZml4aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbkZpeGluZygpOiB7IGVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgZml4Pzogc3RyaW5nLCBsZWZ0UG9zaXRpb24/OiBzdHJpbmcsIHJpZ2h0UG9zaXRpb24/OiBzdHJpbmcsIHVuZml4Pzogc3RyaW5nIH0gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uRml4aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uRml4aW5nKHZhbHVlOiB7IGVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgZml4Pzogc3RyaW5nLCBsZWZ0UG9zaXRpb24/OiBzdHJpbmcsIHJpZ2h0UG9zaXRpb24/OiBzdHJpbmcsIHVuZml4Pzogc3RyaW5nIH0gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uRml4aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgc2hvdWxkIGhpZGUgY29sdW1ucyB0byBhZGFwdCB0byB0aGUgc2NyZWVuIG9yIGNvbnRhaW5lciBzaXplLiBJZ25vcmVkIGlmIGFsbG93Q29sdW1uUmVzaXppbmcgaXMgdHJ1ZSBhbmQgY29sdW1uUmVzaXppbmdNb2RlIGlzIFwid2lkZ2V0XCIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uSGlkaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5IaWRpbmdFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uSGlkaW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uSGlkaW5nRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG1pbmltdW0gd2lkdGggb2YgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5NaW5XaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbk1pbldpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uTWluV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uTWluV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgd2lkZ2V0IHJlc2l6ZXMgY29sdW1ucy4gQXBwbGllcyBvbmx5IGlmIGFsbG93Q29sdW1uUmVzaXppbmcgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5SZXNpemluZ01vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5SZXNpemluZ01vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5SZXNpemluZ01vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uUmVzaXppbmdNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIGFycmF5IG9mIGdyaWQgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5zKCk6IEFycmF5PERldkV4cHJlc3MudWkuZHhEYXRhR3JpZENvbHVtbiB8IHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5zKHZhbHVlOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4RGF0YUdyaWRDb2x1bW4gfCBzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkdGggZm9yIGFsbCBkYXRhIGNvbHVtbnMuIEhhcyBhIGxvd2VyIHByaW9yaXR5IHRoYW4gdGhlIGNvbHVtbi53aWR0aCBvcHRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5XaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbldpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbldpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1c3RvbWl6ZXMgY29sdW1ucyBhZnRlciB0aGV5IGFyZSBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1c3RvbWl6ZUNvbHVtbnMoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbWl6ZUNvbHVtbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21pemVDb2x1bW5zKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9taXplQ29sdW1ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXN0b21pemVzIGRhdGEgYmVmb3JlIGV4cG9ydC4gWW91IGNhbiB1c2UgdGhlIGV4cG9ydC5jdXN0b21pemVFeGNlbENlbGwgZnVuY3Rpb24gaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVFeHBvcnREYXRhKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVFeHBvcnREYXRhJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplRXhwb3J0RGF0YSh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZUV4cG9ydERhdGEnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmluZHMgdGhlIHdpZGdldCB0byBkYXRhLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFTb3VyY2UoKTogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhU291cmNlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YVNvdXJjZSh2YWx1ZTogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhU291cmNlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZm9ybWF0IGluIHdoaWNoIGRhdGUtdGltZSB2YWx1ZXMgc2hvdWxkIGJlIHNlbnQgdG8gdGhlIHNlcnZlci4gVXNlIGl0IG9ubHkgaWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoZSBkYXRhU291cmNlIGF0IGRlc2lnbiB0aW1lLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHJlc3BvbmRzIHRvIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBlZGl0aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVkaXRpbmcoKTogeyBhbGxvd0FkZGluZz86IGJvb2xlYW4sIGFsbG93RGVsZXRpbmc/OiBib29sZWFuIHwgRnVuY3Rpb24sIGFsbG93VXBkYXRpbmc/OiBib29sZWFuIHwgRnVuY3Rpb24sIGZvcm0/OiBEZXZFeHByZXNzLnVpLmR4Rm9ybU9wdGlvbnMsIG1vZGU/OiBzdHJpbmcsIHBvcHVwPzogRGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucywgcmVmcmVzaE1vZGU/OiBzdHJpbmcsIHNlbGVjdFRleHRPbkVkaXRTdGFydD86IGJvb2xlYW4sIHN0YXJ0RWRpdEFjdGlvbj86IHN0cmluZywgdGV4dHM/OiB7IGFkZFJvdz86IHN0cmluZywgY2FuY2VsQWxsQ2hhbmdlcz86IHN0cmluZywgY2FuY2VsUm93Q2hhbmdlcz86IHN0cmluZywgY29uZmlybURlbGV0ZU1lc3NhZ2U/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVUaXRsZT86IHN0cmluZywgZGVsZXRlUm93Pzogc3RyaW5nLCBlZGl0Um93Pzogc3RyaW5nLCBzYXZlQWxsQ2hhbmdlcz86IHN0cmluZywgc2F2ZVJvd0NoYW5nZXM/OiBzdHJpbmcsIHVuZGVsZXRlUm93Pzogc3RyaW5nLCB2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcz86IHN0cmluZyB9LCB1c2VJY29ucz86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWRpdGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVkaXRpbmcodmFsdWU6IHsgYWxsb3dBZGRpbmc/OiBib29sZWFuLCBhbGxvd0RlbGV0aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBhbGxvd1VwZGF0aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBmb3JtPzogRGV2RXhwcmVzcy51aS5keEZvcm1PcHRpb25zLCBtb2RlPzogc3RyaW5nLCBwb3B1cD86IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMsIHJlZnJlc2hNb2RlPzogc3RyaW5nLCBzZWxlY3RUZXh0T25FZGl0U3RhcnQ/OiBib29sZWFuLCBzdGFydEVkaXRBY3Rpb24/OiBzdHJpbmcsIHRleHRzPzogeyBhZGRSb3c/OiBzdHJpbmcsIGNhbmNlbEFsbENoYW5nZXM/OiBzdHJpbmcsIGNhbmNlbFJvd0NoYW5nZXM/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVNZXNzYWdlPzogc3RyaW5nLCBjb25maXJtRGVsZXRlVGl0bGU/OiBzdHJpbmcsIGRlbGV0ZVJvdz86IHN0cmluZywgZWRpdFJvdz86IHN0cmluZywgc2F2ZUFsbENoYW5nZXM/OiBzdHJpbmcsIHNhdmVSb3dDaGFuZ2VzPzogc3RyaW5nLCB1bmRlbGV0ZVJvdz86IHN0cmluZywgdmFsaWRhdGlvbkNhbmNlbENoYW5nZXM/OiBzdHJpbmcgfSwgdXNlSWNvbnM/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VkaXRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB3aWRnZXQncyByb290IGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWxlbWVudEF0dHIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbGVtZW50QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVsZW1lbnRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VsZW1lbnRBdHRyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRvIHNob3cgdGhlIGVycm9yIHJvdy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlcnJvclJvd0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXJyb3JSb3dFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXJyb3JSb3dFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlcnJvclJvd0VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBjbGllbnQtc2lkZSBleHBvcnRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXhwb3J0KCk6IHsgYWxsb3dFeHBvcnRTZWxlY3RlZERhdGE/OiBib29sZWFuLCBjdXN0b21pemVFeGNlbENlbGw/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIGV4Y2VsRmlsdGVyRW5hYmxlZD86IGJvb2xlYW4sIGV4Y2VsV3JhcFRleHRFbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGlnbm9yZUV4Y2VsRXJyb3JzPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcsIHRleHRzPzogeyBleHBvcnRBbGw/OiBzdHJpbmcsIGV4cG9ydFNlbGVjdGVkUm93cz86IHN0cmluZywgZXhwb3J0VG8/OiBzdHJpbmcgfSB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdleHBvcnQnKTtcclxuICAgIH1cclxuICAgIHNldCBleHBvcnQodmFsdWU6IHsgYWxsb3dFeHBvcnRTZWxlY3RlZERhdGE/OiBib29sZWFuLCBjdXN0b21pemVFeGNlbENlbGw/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIGV4Y2VsRmlsdGVyRW5hYmxlZD86IGJvb2xlYW4sIGV4Y2VsV3JhcFRleHRFbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGlnbm9yZUV4Y2VsRXJyb3JzPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcsIHRleHRzPzogeyBleHBvcnRBbGw/OiBzdHJpbmcsIGV4cG9ydFNlbGVjdGVkUm93cz86IHN0cmluZywgZXhwb3J0VG8/OiBzdHJpbmcgfSB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdleHBvcnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgaW50ZWdyYXRlZCBmaWx0ZXIgYnVpbGRlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJCdWlsZGVyKCk6IERldkV4cHJlc3MudWkuZHhGaWx0ZXJCdWlsZGVyT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyQnVpbGRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlckJ1aWxkZXIodmFsdWU6IERldkV4cHJlc3MudWkuZHhGaWx0ZXJCdWlsZGVyT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyQnVpbGRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBwb3B1cCBpbiB3aGljaCB0aGUgaW50ZWdyYXRlZCBmaWx0ZXIgYnVpbGRlciBpcyBzaG93bi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJCdWlsZGVyUG9wdXAoKTogRGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyQnVpbGRlclBvcHVwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyQnVpbGRlclBvcHVwKHZhbHVlOiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJCdWlsZGVyUG9wdXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgZmlsdGVyIHBhbmVsLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlclBhbmVsKCk6IHsgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmaWx0ZXJFbmFibGVkPzogYm9vbGVhbiwgdGV4dHM/OiB7IGNsZWFyRmlsdGVyPzogc3RyaW5nLCBjcmVhdGVGaWx0ZXI/OiBzdHJpbmcsIGZpbHRlckVuYWJsZWRIaW50Pzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlclBhbmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyUGFuZWwodmFsdWU6IHsgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmaWx0ZXJFbmFibGVkPzogYm9vbGVhbiwgdGV4dHM/OiB7IGNsZWFyRmlsdGVyPzogc3RyaW5nLCBjcmVhdGVGaWx0ZXI/OiBzdHJpbmcsIGZpbHRlckVuYWJsZWRIaW50Pzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlclBhbmVsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGZpbHRlciByb3cuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyUm93KCk6IHsgYXBwbHlGaWx0ZXI/OiBzdHJpbmcsIGFwcGx5RmlsdGVyVGV4dD86IHN0cmluZywgYmV0d2VlbkVuZFRleHQ/OiBzdHJpbmcsIGJldHdlZW5TdGFydFRleHQ/OiBzdHJpbmcsIG9wZXJhdGlvbkRlc2NyaXB0aW9ucz86IHsgYmV0d2Vlbj86IHN0cmluZywgY29udGFpbnM/OiBzdHJpbmcsIGVuZHNXaXRoPzogc3RyaW5nLCBlcXVhbD86IHN0cmluZywgZ3JlYXRlclRoYW4/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuT3JFcXVhbD86IHN0cmluZywgbGVzc1RoYW4/OiBzdHJpbmcsIGxlc3NUaGFuT3JFcXVhbD86IHN0cmluZywgbm90Q29udGFpbnM/OiBzdHJpbmcsIG5vdEVxdWFsPzogc3RyaW5nLCBzdGFydHNXaXRoPzogc3RyaW5nIH0sIHJlc2V0T3BlcmF0aW9uVGV4dD86IHN0cmluZywgc2hvd0FsbFRleHQ/OiBzdHJpbmcsIHNob3dPcGVyYXRpb25DaG9vc2VyPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyUm93Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyUm93KHZhbHVlOiB7IGFwcGx5RmlsdGVyPzogc3RyaW5nLCBhcHBseUZpbHRlclRleHQ/OiBzdHJpbmcsIGJldHdlZW5FbmRUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuU3RhcnRUZXh0Pzogc3RyaW5nLCBvcGVyYXRpb25EZXNjcmlwdGlvbnM/OiB7IGJldHdlZW4/OiBzdHJpbmcsIGNvbnRhaW5zPzogc3RyaW5nLCBlbmRzV2l0aD86IHN0cmluZywgZXF1YWw/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuPzogc3RyaW5nLCBncmVhdGVyVGhhbk9yRXF1YWw/OiBzdHJpbmcsIGxlc3NUaGFuPzogc3RyaW5nLCBsZXNzVGhhbk9yRXF1YWw/OiBzdHJpbmcsIG5vdENvbnRhaW5zPzogc3RyaW5nLCBub3RFcXVhbD86IHN0cmluZywgc3RhcnRzV2l0aD86IHN0cmluZyB9LCByZXNldE9wZXJhdGlvblRleHQ/OiBzdHJpbmcsIHNob3dBbGxUZXh0Pzogc3RyaW5nLCBzaG93T3BlcmF0aW9uQ2hvb3Nlcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlclJvdycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBzeW5jaHJvbml6ZSB0aGUgZmlsdGVyIHJvdywgaGVhZGVyIGZpbHRlciwgYW5kIGZpbHRlciBidWlsZGVyLiBUaGUgc3luY2hyb25pemVkIGZpbHRlciBleHByZXNzaW9uIGlzIHN0b3JlZCBpbiB0aGUgZmlsdGVyVmFsdWUgb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlclN5bmNFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlclN5bmNFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyU3luY0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlclN5bmNFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGZpbHRlciBleHByZXNzaW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlclZhbHVlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyVmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gZm9jdXNlZCBpbml0aWFsbHkgb3IgY3VycmVudGx5IGluIHRoZSBkYXRhIHJvdyBhcmVhLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzZWRDb2x1bW5JbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzZWRDb2x1bW5JbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzZWRDb2x1bW5JbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb2N1c2VkQ29sdW1uSW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZvY3VzZWQgcm93IGZlYXR1cmUgaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1c2VkUm93RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb2N1c2VkUm93RW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzZWRSb3dFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb2N1c2VkUm93RW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGluaXRpYWxseSBvciBjdXJyZW50bHkgZm9jdXNlZCBncmlkIHJvdydzIGluZGV4LiBVc2UgaXQgd2hlbiBmb2N1c2VkUm93RW5hYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzZWRSb3dJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzZWRSb3dJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzZWRSb3dJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb2N1c2VkUm93SW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGluaXRpYWxseSBvciBjdXJyZW50bHkgZm9jdXNlZCBncmlkIHJvdydzIGtleS4gVXNlIGl0IHdoZW4gZm9jdXNlZFJvd0VuYWJsZWQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1c2VkUm93S2V5KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNlZFJvd0tleScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzZWRSb3dLZXkodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNlZFJvd0tleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNhbiBiZSBmb2N1c2VkIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c1N0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBncm91cGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBncm91cGluZygpOiB7IGFsbG93Q29sbGFwc2luZz86IGJvb2xlYW4sIGF1dG9FeHBhbmRBbGw/OiBib29sZWFuLCBjb250ZXh0TWVudUVuYWJsZWQ/OiBib29sZWFuLCBleHBhbmRNb2RlPzogc3RyaW5nLCB0ZXh0cz86IHsgZ3JvdXBCeVRoaXNDb2x1bW4/OiBzdHJpbmcsIGdyb3VwQ29udGludWVkTWVzc2FnZT86IHN0cmluZywgZ3JvdXBDb250aW51ZXNNZXNzYWdlPzogc3RyaW5nLCB1bmdyb3VwPzogc3RyaW5nLCB1bmdyb3VwQWxsPzogc3RyaW5nIH0gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cGluZyh2YWx1ZTogeyBhbGxvd0NvbGxhcHNpbmc/OiBib29sZWFuLCBhdXRvRXhwYW5kQWxsPzogYm9vbGVhbiwgY29udGV4dE1lbnVFbmFibGVkPzogYm9vbGVhbiwgZXhwYW5kTW9kZT86IHN0cmluZywgdGV4dHM/OiB7IGdyb3VwQnlUaGlzQ29sdW1uPzogc3RyaW5nLCBncm91cENvbnRpbnVlZE1lc3NhZ2U/OiBzdHJpbmcsIGdyb3VwQ29udGludWVzTWVzc2FnZT86IHN0cmluZywgdW5ncm91cD86IHN0cmluZywgdW5ncm91cEFsbD86IHN0cmluZyB9IH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGdyb3VwIHBhbmVsLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwUGFuZWwoKTogeyBhbGxvd0NvbHVtbkRyYWdnaW5nPzogYm9vbGVhbiwgZW1wdHlQYW5lbFRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIHwgc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwUGFuZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cFBhbmVsKHZhbHVlOiB7IGFsbG93Q29sdW1uRHJhZ2dpbmc/OiBib29sZWFuLCBlbXB0eVBhbmVsVGV4dD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfCBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JvdXBQYW5lbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBoZWFkZXIgZmlsdGVyIGZlYXR1cmUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVhZGVyRmlsdGVyKCk6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRleHRzPzogeyBjYW5jZWw/OiBzdHJpbmcsIGVtcHR5VmFsdWU/OiBzdHJpbmcsIG9rPzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWFkZXJGaWx0ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBoZWFkZXJGaWx0ZXIodmFsdWU6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRleHRzPzogeyBjYW5jZWw/OiBzdHJpbmcsIGVtcHR5VmFsdWU/OiBzdHJpbmcsIG9rPzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWFkZXJGaWx0ZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBoZWlnaHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gaGlnaGxpZ2h0IHJvd3MgYW5kIGNlbGxzIHdpdGggZWRpdGVkIGRhdGEuIHJlcGFpbnRDaGFuZ2VzT25seSBzaG91bGQgYmUgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaWdobGlnaHRDaGFuZ2VzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpZ2hsaWdodENoYW5nZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBoaWdobGlnaHRDaGFuZ2VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaWdobGlnaHRDaGFuZ2VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IGZvciBhIGhpbnQgdGhhdCBhcHBlYXJzIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGludCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIGl0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvdmVyU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMga2V5Ym9hcmQgbmF2aWdhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBrZXlib2FyZE5hdmlnYXRpb24oKTogeyBlZGl0T25LZXlQcmVzcz86IGJvb2xlYW4sIGVudGVyS2V5QWN0aW9uPzogc3RyaW5nLCBlbnRlcktleURpcmVjdGlvbj86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdrZXlib2FyZE5hdmlnYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBrZXlib2FyZE5hdmlnYXRpb24odmFsdWU6IHsgZWRpdE9uS2V5UHJlc3M/OiBib29sZWFuLCBlbnRlcktleUFjdGlvbj86IHN0cmluZywgZW50ZXJLZXlEaXJlY3Rpb24/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigna2V5Ym9hcmROYXZpZ2F0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGljaCBkYXRhIGZpZWxkIHByb3ZpZGVzIGtleXMgZm9yIGRhdGEgaXRlbXMuIEFwcGxpZXMgb25seSBpZiBkYXRhIGlzIGEgc2ltcGxlIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGtleUV4cHIoKTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigna2V5RXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGtleUV4cHIodmFsdWU6IHN0cmluZyB8IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2tleUV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgbG9hZCBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsb2FkUGFuZWwoKTogeyBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBpbmRpY2F0b3JTcmM/OiBzdHJpbmcsIHNoYWRpbmc/OiBib29sZWFuLCBzaGFkaW5nQ29sb3I/OiBzdHJpbmcsIHNob3dJbmRpY2F0b3I/OiBib29sZWFuLCBzaG93UGFuZT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvYWRQYW5lbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvYWRQYW5lbCh2YWx1ZTogeyBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBpbmRpY2F0b3JTcmM/OiBzdHJpbmcsIHNoYWRpbmc/OiBib29sZWFuLCBzaGFkaW5nQ29sb3I/OiBzdHJpbmcsIHNob3dJbmRpY2F0b3I/OiBib29sZWFuLCBzaG93UGFuZT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvYWRQYW5lbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgeW91IHRvIGJ1aWxkIGEgbWFzdGVyLWRldGFpbCBpbnRlcmZhY2UgaW4gdGhlIGdyaWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWFzdGVyRGV0YWlsKCk6IHsgYXV0b0V4cGFuZEFsbD86IGJvb2xlYW4sIGVuYWJsZWQ/OiBib29sZWFuLCB0ZW1wbGF0ZT86IGFueSB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXN0ZXJEZXRhaWwnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXN0ZXJEZXRhaWwodmFsdWU6IHsgYXV0b0V4cGFuZEFsbD86IGJvb2xlYW4sIGVuYWJsZWQ/OiBib29sZWFuLCB0ZW1wbGF0ZT86IGFueSB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXN0ZXJEZXRhaWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRleHQgc2hvd24gd2hlbiB0aGUgd2lkZ2V0IGRvZXMgbm90IGRpc3BsYXkgYW55IGRhdGEuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbm9EYXRhVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ25vRGF0YVRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBub0RhdGFUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ25vRGF0YVRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgcGFnZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGFnZXIoKTogeyBhbGxvd2VkUGFnZVNpemVzPzogQXJyYXk8bnVtYmVyPiwgaW5mb1RleHQ/OiBzdHJpbmcsIHNob3dJbmZvPzogYm9vbGVhbiwgc2hvd05hdmlnYXRpb25CdXR0b25zPzogYm9vbGVhbiwgc2hvd1BhZ2VTaXplU2VsZWN0b3I/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYWdlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhZ2VyKHZhbHVlOiB7IGFsbG93ZWRQYWdlU2l6ZXM/OiBBcnJheTxudW1iZXI+LCBpbmZvVGV4dD86IHN0cmluZywgc2hvd0luZm8/OiBib29sZWFuLCBzaG93TmF2aWdhdGlvbkJ1dHRvbnM/OiBib29sZWFuLCBzaG93UGFnZVNpemVTZWxlY3Rvcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhZ2VyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgcGFnaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhZ2luZygpOiB7IGVuYWJsZWQ/OiBib29sZWFuLCBwYWdlSW5kZXg/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhZ2luZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhZ2luZyh2YWx1ZTogeyBlbmFibGVkPzogYm9vbGVhbiwgcGFnZUluZGV4PzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYWdpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhlIERhdGFHcmlkIG9mIHRoZSBzZXJ2ZXIncyBkYXRhIHByb2Nlc3Npbmcgb3BlcmF0aW9ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZW1vdGVPcGVyYXRpb25zKCk6IGJvb2xlYW4gfCB7IGZpbHRlcmluZz86IGJvb2xlYW4sIGdyb3VwaW5nPzogYm9vbGVhbiwgZ3JvdXBQYWdpbmc/OiBib29sZWFuLCBwYWdpbmc/OiBib29sZWFuLCBzb3J0aW5nPzogYm9vbGVhbiwgc3VtbWFyeT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVtb3RlT3BlcmF0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlbW90ZU9wZXJhdGlvbnModmFsdWU6IGJvb2xlYW4gfCB7IGZpbHRlcmluZz86IGJvb2xlYW4sIGdyb3VwaW5nPzogYm9vbGVhbiwgZ3JvdXBQYWdpbmc/OiBib29sZWFuLCBwYWdpbmc/OiBib29sZWFuLCBzb3J0aW5nPzogYm9vbGVhbiwgc3VtbWFyeT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVtb3RlT3BlcmF0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byByZW5kZXIgdGhlIGZpbHRlciByb3csIGNvbW1hbmQgY29sdW1ucywgYW5kIGNvbHVtbnMgd2l0aCBzaG93RWRpdG9yQWx3YXlzIHNldCB0byB0cnVlIGFmdGVyIG90aGVyIGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlbmRlckFzeW5jKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlbmRlckFzeW5jJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVuZGVyQXN5bmModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlbmRlckFzeW5jJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJlcGFpbnQgb25seSB0aG9zZSBjZWxscyB3aG9zZSBkYXRhIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVwYWludENoYW5nZXNPbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlcGFpbnRDaGFuZ2VzT25seScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlcGFpbnRDaGFuZ2VzT25seSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVwYWludENoYW5nZXNPbmx5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHJvd3Mgc2hvdWxkIGJlIHNoYWRlZCBkaWZmZXJlbnRseS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByb3dBbHRlcm5hdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncm93QWx0ZXJuYXRpb25FbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm93QWx0ZXJuYXRpb25FbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyb3dBbHRlcm5hdGlvbkVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciByb3dzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJvd1RlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncm93VGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCByb3dUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyb3dUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2hlcyB0aGUgd2lkZ2V0IHRvIGEgcmlnaHQtdG8tbGVmdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBydGxFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J0bEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBydGxFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydGxFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgc2Nyb2xsaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNjcm9sbGluZygpOiB7IGNvbHVtblJlbmRlcmluZ01vZGU/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcsIHByZWxvYWRFbmFibGVkPzogYm9vbGVhbiwgcm93UmVuZGVyaW5nTW9kZT86IHN0cmluZywgc2Nyb2xsQnlDb250ZW50PzogYm9vbGVhbiwgc2Nyb2xsQnlUaHVtYj86IGJvb2xlYW4sIHNob3dTY3JvbGxiYXI/OiBzdHJpbmcsIHVzZU5hdGl2ZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2Nyb2xsaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2Nyb2xsaW5nKHZhbHVlOiB7IGNvbHVtblJlbmRlcmluZ01vZGU/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcsIHByZWxvYWRFbmFibGVkPzogYm9vbGVhbiwgcm93UmVuZGVyaW5nTW9kZT86IHN0cmluZywgc2Nyb2xsQnlDb250ZW50PzogYm9vbGVhbiwgc2Nyb2xsQnlUaHVtYj86IGJvb2xlYW4sIHNob3dTY3JvbGxiYXI/OiBzdHJpbmcsIHVzZU5hdGl2ZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2Nyb2xsaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIHNlYXJjaCBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWFyY2hQYW5lbCgpOiB7IGhpZ2hsaWdodENhc2VTZW5zaXRpdmU/OiBib29sZWFuLCBoaWdobGlnaHRTZWFyY2hUZXh0PzogYm9vbGVhbiwgcGxhY2Vob2xkZXI/OiBzdHJpbmcsIHNlYXJjaFZpc2libGVDb2x1bW5zT25seT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWFyY2hQYW5lbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlYXJjaFBhbmVsKHZhbHVlOiB7IGhpZ2hsaWdodENhc2VTZW5zaXRpdmU/OiBib29sZWFuLCBoaWdobGlnaHRTZWFyY2hUZXh0PzogYm9vbGVhbiwgcGxhY2Vob2xkZXI/OiBzdHJpbmcsIHNlYXJjaFZpc2libGVDb2x1bW5zT25seT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWFyY2hQYW5lbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgeW91IHRvIHNlbGVjdCByb3dzIG9yIGRldGVybWluZSB3aGljaCByb3dzIGFyZSBzZWxlY3RlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3RlZFJvd0tleXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0ZWRSb3dLZXlzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0ZWRSb3dLZXlzKHZhbHVlOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3RlZFJvd0tleXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBydW50aW1lIHNlbGVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3Rpb24oKTogeyBhbGxvd1NlbGVjdEFsbD86IGJvb2xlYW4sIGRlZmVycmVkPzogYm9vbGVhbiwgbW9kZT86IHN0cmluZywgc2VsZWN0QWxsTW9kZT86IHN0cmluZywgc2hvd0NoZWNrQm94ZXNNb2RlPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGlvbih2YWx1ZTogeyBhbGxvd1NlbGVjdEFsbD86IGJvb2xlYW4sIGRlZmVycmVkPzogYm9vbGVhbiwgbW9kZT86IHN0cmluZywgc2VsZWN0QWxsTW9kZT86IHN0cmluZywgc2hvd0NoZWNrQm94ZXNNb2RlPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlbGVjdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgZmlsdGVycyBmb3IgdGhlIHJvd3MgdGhhdCBtdXN0IGJlIHNlbGVjdGVkIGluaXRpYWxseS4gQXBwbGllcyBvbmx5IGlmIHNlbGVjdGlvbi5kZWZlcnJlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGlvbkZpbHRlcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdGlvbkZpbHRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGlvbkZpbHRlcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3Rpb25GaWx0ZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIG91dGVyIGJvcmRlcnMgb2YgdGhlIHdpZGdldCBhcmUgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Qm9yZGVycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Qm9yZGVycycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dCb3JkZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Qm9yZGVycycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBjb2x1bW4gaGVhZGVycyBhcmUgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Q29sdW1uSGVhZGVycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Q29sdW1uSGVhZGVycycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dDb2x1bW5IZWFkZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q29sdW1uSGVhZGVycycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB2ZXJ0aWNhbCBsaW5lcyB0aGF0IHNlcGFyYXRlIG9uZSBjb2x1bW4gZnJvbSBhbm90aGVyIGFyZSB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dDb2x1bW5MaW5lcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Q29sdW1uTGluZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q29sdW1uTGluZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dDb2x1bW5MaW5lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBob3Jpem9udGFsIGxpbmVzIHRoYXQgc2VwYXJhdGUgb25lIHJvdyBmcm9tIGFub3RoZXIgYXJlIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd1Jvd0xpbmVzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dSb3dMaW5lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dSb3dMaW5lcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd1Jvd0xpbmVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyB5b3UgdG8gc29ydCBncm91cHMgYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZXMgb2YgZ3JvdXAgc3VtbWFyeSBpdGVtcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzb3J0QnlHcm91cFN1bW1hcnlJbmZvKCk6IEFycmF5PGFueSB8IHsgZ3JvdXBDb2x1bW4/OiBzdHJpbmcsIHNvcnRPcmRlcj86IHN0cmluZywgc3VtbWFyeUl0ZW0/OiBudW1iZXIgfCBzdHJpbmcgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRCeUdyb3VwU3VtbWFyeUluZm8nKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0QnlHcm91cFN1bW1hcnlJbmZvKHZhbHVlOiBBcnJheTxhbnkgfCB7IGdyb3VwQ29sdW1uPzogc3RyaW5nLCBzb3J0T3JkZXI/OiBzdHJpbmcsIHN1bW1hcnlJdGVtPzogbnVtYmVyIHwgc3RyaW5nIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzb3J0QnlHcm91cFN1bW1hcnlJbmZvJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgcnVudGltZSBzb3J0aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNvcnRpbmcoKTogeyBhc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBjbGVhclRleHQ/OiBzdHJpbmcsIGRlc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBtb2RlPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0aW5nKHZhbHVlOiB7IGFzY2VuZGluZ1RleHQ/OiBzdHJpbmcsIGNsZWFyVGV4dD86IHN0cmluZywgZGVzY2VuZGluZ1RleHQ/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc29ydGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHN0YXRlIHN0b3JpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhdGVTdG9yaW5nKCk6IHsgY3VzdG9tTG9hZD86IEZ1bmN0aW9uLCBjdXN0b21TYXZlPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBzYXZpbmdUaW1lb3V0PzogbnVtYmVyLCBzdG9yYWdlS2V5Pzogc3RyaW5nLCB0eXBlPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YXRlU3RvcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXRlU3RvcmluZyh2YWx1ZTogeyBjdXN0b21Mb2FkPzogRnVuY3Rpb24sIGN1c3RvbVNhdmU/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIHNhdmluZ1RpbWVvdXQ/OiBudW1iZXIsIHN0b3JhZ2VLZXk/OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhdGVTdG9yaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgb3B0aW9ucyBvZiB0aGUgZ3JpZCBzdW1tYXJ5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN1bW1hcnkoKTogeyBjYWxjdWxhdGVDdXN0b21TdW1tYXJ5PzogRnVuY3Rpb24sIGdyb3VwSXRlbXM/OiBBcnJheTxhbnkgfCB7IGFsaWduQnlDb2x1bW4/OiBib29sZWFuLCBjb2x1bW4/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheUZvcm1hdD86IHN0cmluZywgbmFtZT86IHN0cmluZywgc2hvd0luQ29sdW1uPzogc3RyaW5nLCBzaG93SW5Hcm91cEZvb3Rlcj86IGJvb2xlYW4sIHNraXBFbXB0eVZhbHVlcz86IGJvb2xlYW4sIHN1bW1hcnlUeXBlPzogc3RyaW5nLCB2YWx1ZUZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nIH0+LCByZWNhbGN1bGF0ZVdoaWxlRWRpdGluZz86IGJvb2xlYW4sIHNraXBFbXB0eVZhbHVlcz86IGJvb2xlYW4sIHRleHRzPzogeyBhdmc/OiBzdHJpbmcsIGF2Z090aGVyQ29sdW1uPzogc3RyaW5nLCBjb3VudD86IHN0cmluZywgbWF4Pzogc3RyaW5nLCBtYXhPdGhlckNvbHVtbj86IHN0cmluZywgbWluPzogc3RyaW5nLCBtaW5PdGhlckNvbHVtbj86IHN0cmluZywgc3VtPzogc3RyaW5nLCBzdW1PdGhlckNvbHVtbj86IHN0cmluZyB9LCB0b3RhbEl0ZW1zPzogQXJyYXk8YW55IHwgeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGNvbHVtbj86IHN0cmluZywgY3NzQ2xhc3M/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheUZvcm1hdD86IHN0cmluZywgbmFtZT86IHN0cmluZywgc2hvd0luQ29sdW1uPzogc3RyaW5nLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmFsdWVGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9PiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdW1tYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3VtbWFyeSh2YWx1ZTogeyBjYWxjdWxhdGVDdXN0b21TdW1tYXJ5PzogRnVuY3Rpb24sIGdyb3VwSXRlbXM/OiBBcnJheTxhbnkgfCB7IGFsaWduQnlDb2x1bW4/OiBib29sZWFuLCBjb2x1bW4/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheUZvcm1hdD86IHN0cmluZywgbmFtZT86IHN0cmluZywgc2hvd0luQ29sdW1uPzogc3RyaW5nLCBzaG93SW5Hcm91cEZvb3Rlcj86IGJvb2xlYW4sIHNraXBFbXB0eVZhbHVlcz86IGJvb2xlYW4sIHN1bW1hcnlUeXBlPzogc3RyaW5nLCB2YWx1ZUZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nIH0+LCByZWNhbGN1bGF0ZVdoaWxlRWRpdGluZz86IGJvb2xlYW4sIHNraXBFbXB0eVZhbHVlcz86IGJvb2xlYW4sIHRleHRzPzogeyBhdmc/OiBzdHJpbmcsIGF2Z090aGVyQ29sdW1uPzogc3RyaW5nLCBjb3VudD86IHN0cmluZywgbWF4Pzogc3RyaW5nLCBtYXhPdGhlckNvbHVtbj86IHN0cmluZywgbWluPzogc3RyaW5nLCBtaW5PdGhlckNvbHVtbj86IHN0cmluZywgc3VtPzogc3RyaW5nLCBzdW1PdGhlckNvbHVtbj86IHN0cmluZyB9LCB0b3RhbEl0ZW1zPzogQXJyYXk8YW55IHwgeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGNvbHVtbj86IHN0cmluZywgY3NzQ2xhc3M/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheUZvcm1hdD86IHN0cmluZywgbmFtZT86IHN0cmluZywgc2hvd0luQ29sdW1uPzogc3RyaW5nLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmFsdWVGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9PiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdW1tYXJ5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50IHdoZW4gdGhlIFRhYiBrZXkgaXMgdXNlZCBmb3IgbmF2aWdhdGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhYkluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGFiSW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIHR3by13YXkgZGF0YSBiaW5kaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHR3b1dheUJpbmRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3R3b1dheUJpbmRpbmdFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdHdvV2F5QmluZGluZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3R3b1dheUJpbmRpbmdFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgaXMgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgd2lkdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0ZXh0IHRoYXQgZG9lcyBub3QgZml0IGludG8gYSBjb2x1bW4gc2hvdWxkIGJlIHdyYXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd29yZFdyYXBFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dvcmRXcmFwRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdvcmRXcmFwRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd29yZFdyYXBFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhbiBhZGFwdGl2ZSBkZXRhaWwgcm93IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25BZGFwdGl2ZURldGFpbFJvd1ByZXBhcmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIGNlbGwgaXMgY2xpY2tlZCBvciB0YXBwZWQuIEV4ZWN1dGVkIGJlZm9yZSBvblJvd0NsaWNrLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBjZWxsIGlzIGRvdWJsZS1jbGlja2VkIG9yIGRvdWJsZS10YXBwZWQuIEV4ZWN1dGVkIGJlZm9yZSBvblJvd0RibENsaWNrLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHRoZSBwb2ludGVyIGVudGVycyBvciBsZWF2ZXMgYSBjZWxsLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsSG92ZXJDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIGNlbGwgaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbFByZXBhcmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyBjb250ZW50IGlzIHJlYWR5IGFuZCBlYWNoIHRpbWUgdGhlIGNvbnRlbnQgaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ29udGVudFJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIGNvbnRleHQgbWVudSBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ29udGV4dE1lbnVQcmVwYXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGluIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGF0YUVycm9yT2NjdXJyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIGNlbGwgb3Igcm93IHN3aXRjaGVzIHRvIHRoZSBlZGl0aW5nIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FZGl0aW5nU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGFuIGVkaXRvciBpcyBjcmVhdGVkLiBOb3QgZXhlY3V0ZWQgZm9yIGNlbGxzIHdpdGggYW4gZWRpdENlbGxUZW1wbGF0ZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRWRpdG9yUHJlcGFyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIHRvIGN1c3RvbWl6ZSBvciByZXBsYWNlIGRlZmF1bHQgZWRpdG9ycy4gTm90IGV4ZWN1dGVkIGZvciBjZWxscyB3aXRoIGFuIGVkaXRDZWxsVGVtcGxhdGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkVkaXRvclByZXBhcmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgZGF0YSBpcyBleHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRXhwb3J0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBkYXRhIGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIGZpbGUgd2l0aCBleHBvcnRlZCBkYXRhIGlzIHNhdmVkIHRvIHRoZSB1c2VyJ3MgbG9jYWwgc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRmlsZVNhdmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIGZvY3VzZWQgY2VsbCBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c2VkQ2VsbENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgZm9jdXNlZCBjZWxsIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZvY3VzZWRDZWxsQ2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHRoZSBmb2N1c2VkIHJvdyBjaGFuZ2VzLiBBcHBsaWVzIG9ubHkgd2hlbiBmb2N1c2VkUm93RW5hYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c2VkUm93Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSBmb2N1c2VkIHJvdyBjaGFuZ2VzLiBBcHBsaWVzIG9ubHkgd2hlbiBmb2N1c2VkUm93RW5hYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c2VkUm93Q2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSBuZXcgcm93IGlzIGFkZGVkIHRvIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXROZXdSb3c6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCBpcyBpbiBmb2N1cyBhbmQgYSBrZXkgaGFzIGJlZW4gcHJlc3NlZCBkb3duLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25LZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHJvdyBpcyBjbGlja2VkIG9yIHRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgcm93IGlzIGNvbGxhcHNlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93Q29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSByb3cgaXMgY29sbGFwc2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dDb2xsYXBzaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgcm93IGlzIGRvdWJsZS1jbGlja2VkIG9yIGRvdWJsZS10YXBwZWQuIEV4ZWN1dGVkIGFmdGVyIG9uQ2VsbERibENsaWNrLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dEYmxDbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSByb3cgaXMgZXhwYW5kZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0V4cGFuZGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSByb3cgaXMgZXhwYW5kZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0V4cGFuZGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSBuZXcgcm93IGhhcyBiZWVuIGluc2VydGVkIGludG8gdGhlIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dJbnNlcnRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgbmV3IHJvdyBpcyBpbnNlcnRlZCBpbnRvIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93SW5zZXJ0aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHJvdyBpcyBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dQcmVwYXJlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSByb3cgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93UmVtb3ZlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgcm93IGlzIHJlbW92ZWQgZnJvbSB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd1JlbW92aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHJvdyBoYXMgYmVlbiB1cGRhdGVkIGluIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93VXBkYXRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgcm93IGlzIHVwZGF0ZWQgaW4gdGhlIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dVcGRhdGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgY2VsbHMgaW4gYSByb3cgYXJlIHZhbGlkYXRlZCBhZ2FpbnN0IHZhbGlkYXRpb24gcnVsZXMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd1ZhbGlkYXRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHNlbGVjdGluZyBhIHJvdyBvciBjbGVhcmluZyBpdHMgc2VsZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHRvb2xiYXIgaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uVG9vbGJhclByZXBhcmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhbGxvd0NvbHVtblJlb3JkZXJpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbGxvd0NvbHVtblJlb3JkZXJpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFsbG93Q29sdW1uUmVzaXppbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbGxvd0NvbHVtblJlc2l6aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjYWNoZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjYWNoZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNlbGxIaW50RW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNlbGxIaW50RW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uQXV0b1dpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uQXV0b1dpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb2x1bW5DaG9vc2VyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uQ2hvb3NlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBlbXB0eVBhbmVsVGV4dD86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgbW9kZT86IHN0cmluZywgc2VhcmNoVGltZW91dD86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uRml4aW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uRml4aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBlbmFibGVkPzogYm9vbGVhbiwgdGV4dHM/OiB7IGZpeD86IHN0cmluZywgbGVmdFBvc2l0aW9uPzogc3RyaW5nLCByaWdodFBvc2l0aW9uPzogc3RyaW5nLCB1bmZpeD86IHN0cmluZyB9IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uSGlkaW5nRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbkhpZGluZ0VuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbHVtbk1pbldpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uTWluV2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uUmVzaXppbmdNb2RlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uUmVzaXppbmdNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbHVtbnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8RGV2RXhwcmVzcy51aS5keERhdGFHcmlkQ29sdW1uIHwgc3RyaW5nPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb2x1bW5XaWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbldpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGN1c3RvbWl6ZUNvbHVtbnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjdXN0b21pemVDb2x1bW5zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY3VzdG9taXplRXhwb3J0RGF0YUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbWl6ZUV4cG9ydERhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhU291cmNlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YVNvdXJjZUNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRpc2FibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGlzYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVkaXRpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlZGl0aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd0FkZGluZz86IGJvb2xlYW4sIGFsbG93RGVsZXRpbmc/OiBib29sZWFuIHwgRnVuY3Rpb24sIGFsbG93VXBkYXRpbmc/OiBib29sZWFuIHwgRnVuY3Rpb24sIGZvcm0/OiBEZXZFeHByZXNzLnVpLmR4Rm9ybU9wdGlvbnMsIG1vZGU/OiBzdHJpbmcsIHBvcHVwPzogRGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucywgcmVmcmVzaE1vZGU/OiBzdHJpbmcsIHNlbGVjdFRleHRPbkVkaXRTdGFydD86IGJvb2xlYW4sIHN0YXJ0RWRpdEFjdGlvbj86IHN0cmluZywgdGV4dHM/OiB7IGFkZFJvdz86IHN0cmluZywgY2FuY2VsQWxsQ2hhbmdlcz86IHN0cmluZywgY2FuY2VsUm93Q2hhbmdlcz86IHN0cmluZywgY29uZmlybURlbGV0ZU1lc3NhZ2U/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVUaXRsZT86IHN0cmluZywgZGVsZXRlUm93Pzogc3RyaW5nLCBlZGl0Um93Pzogc3RyaW5nLCBzYXZlQWxsQ2hhbmdlcz86IHN0cmluZywgc2F2ZVJvd0NoYW5nZXM/OiBzdHJpbmcsIHVuZGVsZXRlUm93Pzogc3RyaW5nLCB2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcz86IHN0cmluZyB9LCB1c2VJY29ucz86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVycm9yUm93RW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVycm9yUm93RW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZXhwb3J0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZXhwb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd0V4cG9ydFNlbGVjdGVkRGF0YT86IGJvb2xlYW4sIGN1c3RvbWl6ZUV4Y2VsQ2VsbD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZXhjZWxGaWx0ZXJFbmFibGVkPzogYm9vbGVhbiwgZXhjZWxXcmFwVGV4dEVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgaWdub3JlRXhjZWxFcnJvcnM/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZywgdGV4dHM/OiB7IGV4cG9ydEFsbD86IHN0cmluZywgZXhwb3J0U2VsZWN0ZWRSb3dzPzogc3RyaW5nLCBleHBvcnRUbz86IHN0cmluZyB9IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyQnVpbGRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlckJ1aWxkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLnVpLmR4RmlsdGVyQnVpbGRlck9wdGlvbnM+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyQnVpbGRlclBvcHVwQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyQnVpbGRlclBvcHVwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaWx0ZXJQYW5lbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlclBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZpbHRlckVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgY2xlYXJGaWx0ZXI/OiBzdHJpbmcsIGNyZWF0ZUZpbHRlcj86IHN0cmluZywgZmlsdGVyRW5hYmxlZEhpbnQ/OiBzdHJpbmcgfSwgdmlzaWJsZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaWx0ZXJSb3dDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJSb3dDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFwcGx5RmlsdGVyPzogc3RyaW5nLCBhcHBseUZpbHRlclRleHQ/OiBzdHJpbmcsIGJldHdlZW5FbmRUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuU3RhcnRUZXh0Pzogc3RyaW5nLCBvcGVyYXRpb25EZXNjcmlwdGlvbnM/OiB7IGJldHdlZW4/OiBzdHJpbmcsIGNvbnRhaW5zPzogc3RyaW5nLCBlbmRzV2l0aD86IHN0cmluZywgZXF1YWw/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuPzogc3RyaW5nLCBncmVhdGVyVGhhbk9yRXF1YWw/OiBzdHJpbmcsIGxlc3NUaGFuPzogc3RyaW5nLCBsZXNzVGhhbk9yRXF1YWw/OiBzdHJpbmcsIG5vdENvbnRhaW5zPzogc3RyaW5nLCBub3RFcXVhbD86IHN0cmluZywgc3RhcnRzV2l0aD86IHN0cmluZyB9LCByZXNldE9wZXJhdGlvblRleHQ/OiBzdHJpbmcsIHNob3dBbGxUZXh0Pzogc3RyaW5nLCBzaG93T3BlcmF0aW9uQ2hvb3Nlcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyU3luY0VuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJTeW5jRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyVmFsdWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmb2N1c2VkQ29sdW1uSW5kZXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c2VkQ29sdW1uSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNlZFJvd0VuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c2VkUm93RW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNlZFJvd0luZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNlZFJvd0luZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzZWRSb3dLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c2VkUm93S2V5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGdyb3VwaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZ3JvdXBpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93Q29sbGFwc2luZz86IGJvb2xlYW4sIGF1dG9FeHBhbmRBbGw/OiBib29sZWFuLCBjb250ZXh0TWVudUVuYWJsZWQ/OiBib29sZWFuLCBleHBhbmRNb2RlPzogc3RyaW5nLCB0ZXh0cz86IHsgZ3JvdXBCeVRoaXNDb2x1bW4/OiBzdHJpbmcsIGdyb3VwQ29udGludWVkTWVzc2FnZT86IHN0cmluZywgZ3JvdXBDb250aW51ZXNNZXNzYWdlPzogc3RyaW5nLCB1bmdyb3VwPzogc3RyaW5nLCB1bmdyb3VwQWxsPzogc3RyaW5nIH0gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBncm91cFBhbmVsQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZ3JvdXBQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dDb2x1bW5EcmFnZ2luZz86IGJvb2xlYW4sIGVtcHR5UGFuZWxUZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB8IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlYWRlckZpbHRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlYWRlckZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRleHRzPzogeyBjYW5jZWw/OiBzdHJpbmcsIGVtcHR5VmFsdWU/OiBzdHJpbmcsIG9rPzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlaWdodENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhpZ2hsaWdodENoYW5nZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaWdobGlnaHRDaGFuZ2VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoaW50Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGludENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBrZXlib2FyZE5hdmlnYXRpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBrZXlib2FyZE5hdmlnYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVkaXRPbktleVByZXNzPzogYm9vbGVhbiwgZW50ZXJLZXlBY3Rpb24/OiBzdHJpbmcsIGVudGVyS2V5RGlyZWN0aW9uPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUga2V5RXhwckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGtleUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBBcnJheTxzdHJpbmc+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGxvYWRQYW5lbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGxvYWRQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgaW5kaWNhdG9yU3JjPzogc3RyaW5nLCBzaGFkaW5nPzogYm9vbGVhbiwgc2hhZGluZ0NvbG9yPzogc3RyaW5nLCBzaG93SW5kaWNhdG9yPzogYm9vbGVhbiwgc2hvd1BhbmU/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1hc3RlckRldGFpbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1hc3RlckRldGFpbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYXV0b0V4cGFuZEFsbD86IGJvb2xlYW4sIGVuYWJsZWQ/OiBib29sZWFuLCB0ZW1wbGF0ZT86IGFueSB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG5vRGF0YVRleHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBub0RhdGFUZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBhZ2VyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGFnZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93ZWRQYWdlU2l6ZXM/OiBBcnJheTxudW1iZXI+LCBpbmZvVGV4dD86IHN0cmluZywgc2hvd0luZm8/OiBib29sZWFuLCBzaG93TmF2aWdhdGlvbkJ1dHRvbnM/OiBib29sZWFuLCBzaG93UGFnZVNpemVTZWxlY3Rvcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcGFnaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGFnaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBlbmFibGVkPzogYm9vbGVhbiwgcGFnZUluZGV4PzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlbW90ZU9wZXJhdGlvbnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZW1vdGVPcGVyYXRpb25zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHsgZmlsdGVyaW5nPzogYm9vbGVhbiwgZ3JvdXBpbmc/OiBib29sZWFuLCBncm91cFBhZ2luZz86IGJvb2xlYW4sIHBhZ2luZz86IGJvb2xlYW4sIHNvcnRpbmc/OiBib29sZWFuLCBzdW1tYXJ5PzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlbmRlckFzeW5jQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVuZGVyQXN5bmNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlcGFpbnRDaGFuZ2VzT25seUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlcGFpbnRDaGFuZ2VzT25seUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcm93QWx0ZXJuYXRpb25FbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcm93QWx0ZXJuYXRpb25FbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByb3dUZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJvd1RlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJ0bEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBydGxFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzY3JvbGxpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzY3JvbGxpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGNvbHVtblJlbmRlcmluZ01vZGU/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcsIHByZWxvYWRFbmFibGVkPzogYm9vbGVhbiwgcm93UmVuZGVyaW5nTW9kZT86IHN0cmluZywgc2Nyb2xsQnlDb250ZW50PzogYm9vbGVhbiwgc2Nyb2xsQnlUaHVtYj86IGJvb2xlYW4sIHNob3dTY3JvbGxiYXI/OiBzdHJpbmcsIHVzZU5hdGl2ZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWFyY2hQYW5lbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlYXJjaFBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBoaWdobGlnaHRDYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiwgaGlnaGxpZ2h0U2VhcmNoVGV4dD86IGJvb2xlYW4sIHBsYWNlaG9sZGVyPzogc3RyaW5nLCBzZWFyY2hWaXNpYmxlQ29sdW1uc09ubHk/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWxlY3RlZFJvd0tleXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZFJvd0tleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGlvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dTZWxlY3RBbGw/OiBib29sZWFuLCBkZWZlcnJlZD86IGJvb2xlYW4sIG1vZGU/OiBzdHJpbmcsIHNlbGVjdEFsbE1vZGU/OiBzdHJpbmcsIHNob3dDaGVja0JveGVzTW9kZT86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGlvbkZpbHRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbkZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Qm9yZGVyc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dCb3JkZXJzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Q29sdW1uSGVhZGVyc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dDb2x1bW5IZWFkZXJzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Q29sdW1uTGluZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93Q29sdW1uTGluZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dSb3dMaW5lc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dSb3dMaW5lc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc29ydEJ5R3JvdXBTdW1tYXJ5SW5mb0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNvcnRCeUdyb3VwU3VtbWFyeUluZm9DaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGdyb3VwQ29sdW1uPzogc3RyaW5nLCBzb3J0T3JkZXI/OiBzdHJpbmcsIHN1bW1hcnlJdGVtPzogbnVtYmVyIHwgc3RyaW5nIH0+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNvcnRpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzb3J0aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBjbGVhclRleHQ/OiBzdHJpbmcsIGRlc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBtb2RlPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc3RhdGVTdG9yaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3RhdGVTdG9yaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjdXN0b21Mb2FkPzogRnVuY3Rpb24sIGN1c3RvbVNhdmU/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIHNhdmluZ1RpbWVvdXQ/OiBudW1iZXIsIHN0b3JhZ2VLZXk/OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzdW1tYXJ5Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3VtbWFyeUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeT86IEZ1bmN0aW9uLCBncm91cEl0ZW1zPzogQXJyYXk8YW55IHwgeyBhbGlnbkJ5Q29sdW1uPzogYm9vbGVhbiwgY29sdW1uPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2hvd0luR3JvdXBGb290ZXI/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmFsdWVGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9PiwgcmVjYWxjdWxhdGVXaGlsZUVkaXRpbmc/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCB0ZXh0cz86IHsgYXZnPzogc3RyaW5nLCBhdmdPdGhlckNvbHVtbj86IHN0cmluZywgY291bnQ/OiBzdHJpbmcsIG1heD86IHN0cmluZywgbWF4T3RoZXJDb2x1bW4/OiBzdHJpbmcsIG1pbj86IHN0cmluZywgbWluT3RoZXJDb2x1bW4/OiBzdHJpbmcsIHN1bT86IHN0cmluZywgc3VtT3RoZXJDb2x1bW4/OiBzdHJpbmcgfSwgdG90YWxJdGVtcz86IEFycmF5PGFueSB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjb2x1bW4/OiBzdHJpbmcsIGNzc0NsYXNzPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2tpcEVtcHR5VmFsdWVzPzogYm9vbGVhbiwgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZhbHVlRm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfT4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0YWJJbmRleENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRhYkluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHR3b1dheUJpbmRpbmdFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdHdvV2F5QmluZGluZ0VuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpc2libGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB3aWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgd29yZFdyYXBFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd29yZFdyYXBFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG5cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlDb2x1bW5Db21wb25lbnQpXHJcbiAgICBnZXQgY29sdW1uc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlDb2x1bW5Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignY29sdW1ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Db21wb25lbnQpXHJcbiAgICBnZXQgc29ydEJ5R3JvdXBTdW1tYXJ5SW5mb0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc29ydEJ5R3JvdXBTdW1tYXJ5SW5mbycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNvcnRCeUdyb3VwU3VtbWFyeUluZm9DaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3NvcnRCeUdyb3VwU3VtbWFyeUluZm8nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYWRhcHRpdmVEZXRhaWxSb3dQcmVwYXJpbmcnLCBlbWl0OiAnb25BZGFwdGl2ZURldGFpbFJvd1ByZXBhcmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjZWxsQ2xpY2snLCBlbWl0OiAnb25DZWxsQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2VsbERibENsaWNrJywgZW1pdDogJ29uQ2VsbERibENsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NlbGxIb3ZlckNoYW5nZWQnLCBlbWl0OiAnb25DZWxsSG92ZXJDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NlbGxQcmVwYXJlZCcsIGVtaXQ6ICdvbkNlbGxQcmVwYXJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjb250ZW50UmVhZHknLCBlbWl0OiAnb25Db250ZW50UmVhZHknIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGV4dE1lbnVQcmVwYXJpbmcnLCBlbWl0OiAnb25Db250ZXh0TWVudVByZXBhcmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkYXRhRXJyb3JPY2N1cnJlZCcsIGVtaXQ6ICdvbkRhdGFFcnJvck9jY3VycmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdlZGl0aW5nU3RhcnQnLCBlbWl0OiAnb25FZGl0aW5nU3RhcnQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZWRpdG9yUHJlcGFyZWQnLCBlbWl0OiAnb25FZGl0b3JQcmVwYXJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdlZGl0b3JQcmVwYXJpbmcnLCBlbWl0OiAnb25FZGl0b3JQcmVwYXJpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZXhwb3J0ZWQnLCBlbWl0OiAnb25FeHBvcnRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRpbmcnLCBlbWl0OiAnb25FeHBvcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZmlsZVNhdmluZycsIGVtaXQ6ICdvbkZpbGVTYXZpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZm9jdXNlZENlbGxDaGFuZ2VkJywgZW1pdDogJ29uRm9jdXNlZENlbGxDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZvY3VzZWRDZWxsQ2hhbmdpbmcnLCBlbWl0OiAnb25Gb2N1c2VkQ2VsbENoYW5naW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZvY3VzZWRSb3dDaGFuZ2VkJywgZW1pdDogJ29uRm9jdXNlZFJvd0NoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZm9jdXNlZFJvd0NoYW5naW5nJywgZW1pdDogJ29uRm9jdXNlZFJvd0NoYW5naW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luaXRpYWxpemVkJywgZW1pdDogJ29uSW5pdGlhbGl6ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdE5ld1JvdycsIGVtaXQ6ICdvbkluaXROZXdSb3cnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAna2V5RG93bicsIGVtaXQ6ICdvbktleURvd24nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnb3B0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvbk9wdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93Q2xpY2snLCBlbWl0OiAnb25Sb3dDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dDb2xsYXBzZWQnLCBlbWl0OiAnb25Sb3dDb2xsYXBzZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93Q29sbGFwc2luZycsIGVtaXQ6ICdvblJvd0NvbGxhcHNpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93RGJsQ2xpY2snLCBlbWl0OiAnb25Sb3dEYmxDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dFeHBhbmRlZCcsIGVtaXQ6ICdvblJvd0V4cGFuZGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0V4cGFuZGluZycsIGVtaXQ6ICdvblJvd0V4cGFuZGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dJbnNlcnRlZCcsIGVtaXQ6ICdvblJvd0luc2VydGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0luc2VydGluZycsIGVtaXQ6ICdvblJvd0luc2VydGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dQcmVwYXJlZCcsIGVtaXQ6ICdvblJvd1ByZXBhcmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd1JlbW92ZWQnLCBlbWl0OiAnb25Sb3dSZW1vdmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd1JlbW92aW5nJywgZW1pdDogJ29uUm93UmVtb3ZpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93VXBkYXRlZCcsIGVtaXQ6ICdvblJvd1VwZGF0ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93VXBkYXRpbmcnLCBlbWl0OiAnb25Sb3dVcGRhdGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dWYWxpZGF0aW5nJywgZW1pdDogJ29uUm93VmFsaWRhdGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdzZWxlY3Rpb25DaGFuZ2VkJywgZW1pdDogJ29uU2VsZWN0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd0b29sYmFyUHJlcGFyaW5nJywgZW1pdDogJ29uVG9vbGJhclByZXBhcmluZycgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWNjZXNzS2V5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY3RpdmVTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FsbG93Q29sdW1uUmVvcmRlcmluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWxsb3dDb2x1bW5SZXNpemluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY2FjaGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjZWxsSGludEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtbkF1dG9XaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uQ2hvb3NlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uRml4aW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5IaWRpbmdFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5NaW5XaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uUmVzaXppbmdNb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5XaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VzdG9taXplQ29sdW1uc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VzdG9taXplRXhwb3J0RGF0YUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0YVNvdXJjZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc2FibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlZGl0aW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlbGVtZW50QXR0ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZXJyb3JSb3dFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdleHBvcnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlckJ1aWxkZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlckJ1aWxkZXJQb3B1cENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyUGFuZWxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlclJvd0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyU3luY0VuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlclZhbHVlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c2VkQ29sdW1uSW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzZWRSb3dFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c2VkUm93SW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzZWRSb3dLZXlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdncm91cGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBQYW5lbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVhZGVyRmlsdGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpZ2hsaWdodENoYW5nZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hvdmVyU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdrZXlib2FyZE5hdmlnYXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2tleUV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2xvYWRQYW5lbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWFzdGVyRGV0YWlsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdub0RhdGFUZXh0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYWdlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGFnaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZW1vdGVPcGVyYXRpb25zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZW5kZXJBc3luY0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVwYWludENoYW5nZXNPbmx5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyb3dBbHRlcm5hdGlvbkVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Jvd1RlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzY3JvbGxpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlYXJjaFBhbmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWxlY3RlZFJvd0tleXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0aW9uRmlsdGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93Qm9yZGVyc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0NvbHVtbkhlYWRlcnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dDb2x1bW5MaW5lc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd1Jvd0xpbmVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzb3J0QnlHcm91cFN1bW1hcnlJbmZvQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzb3J0aW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdGF0ZVN0b3JpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N1bW1hcnlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RhYkluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0d29XYXlCaW5kaW5nRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmlzaWJsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnd2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dvcmRXcmFwRW5hYmxlZENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pZGguc2V0SG9zdCh0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEeERhdGFHcmlkKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2NvbHVtbnMnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnZGF0YVNvdXJjZScsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdrZXlFeHByJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3NlbGVjdGVkUm93S2V5cycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdzb3J0QnlHcm91cFN1bW1hcnlJbmZvJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnY29sdW1ucycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdkYXRhU291cmNlJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2tleUV4cHInKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnc2VsZWN0ZWRSb3dLZXlzJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3NvcnRCeUdyb3VwU3VtbWFyeUluZm8nKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhvQ29sdW1uQ2hvb3Nlck1vZHVsZSxcclxuICAgIER4b0NvbHVtbkZpeGluZ01vZHVsZSxcclxuICAgIER4b1RleHRzTW9kdWxlLFxyXG4gICAgRHhpQ29sdW1uTW9kdWxlLFxyXG4gICAgRHhpQnV0dG9uTW9kdWxlLFxyXG4gICAgRHhvSGVhZGVyRmlsdGVyTW9kdWxlLFxyXG4gICAgRHhvTG9va3VwTW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvRm9ybUl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4aVZhbGlkYXRpb25SdWxlTW9kdWxlLFxyXG4gICAgRHhvRWRpdGluZ01vZHVsZSxcclxuICAgIER4b0Zvcm1Nb2R1bGUsXHJcbiAgICBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4b1RhYlBhbmVsT3B0aW9uc01vZHVsZSxcclxuICAgIER4aVRhYk1vZHVsZSxcclxuICAgIER4b0J1dHRvbk9wdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Qb3B1cE1vZHVsZSxcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0hpZGVNb2R1bGUsXHJcbiAgICBEeG9TaG93TW9kdWxlLFxyXG4gICAgRHhvUG9zaXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BdE1vZHVsZSxcclxuICAgIER4b0JvdW5kYXJ5T2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhvQ29sbGlzaW9uTW9kdWxlLFxyXG4gICAgRHhvTXlNb2R1bGUsXHJcbiAgICBEeG9PZmZzZXRNb2R1bGUsXHJcbiAgICBEeGlUb29sYmFySXRlbU1vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJNb2R1bGUsXHJcbiAgICBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUsXHJcbiAgICBEeGlGaWVsZE1vZHVsZSxcclxuICAgIER4b0ZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIER4b0dyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyQnVpbGRlclBvcHVwTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJSb3dNb2R1bGUsXHJcbiAgICBEeG9PcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Hcm91cGluZ01vZHVsZSxcclxuICAgIER4b0dyb3VwUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9LZXlib2FyZE5hdmlnYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9Mb2FkUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9NYXN0ZXJEZXRhaWxNb2R1bGUsXHJcbiAgICBEeG9QYWdlck1vZHVsZSxcclxuICAgIER4b1BhZ2luZ01vZHVsZSxcclxuICAgIER4b1JlbW90ZU9wZXJhdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9TY3JvbGxpbmdNb2R1bGUsXHJcbiAgICBEeG9TZWFyY2hQYW5lbE1vZHVsZSxcclxuICAgIER4b1NlbGVjdGlvbk1vZHVsZSxcclxuICAgIER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Nb2R1bGUsXHJcbiAgICBEeG9Tb3J0aW5nTW9kdWxlLFxyXG4gICAgRHhvU3RhdGVTdG9yaW5nTW9kdWxlLFxyXG4gICAgRHhvU3VtbWFyeU1vZHVsZSxcclxuICAgIER4aUdyb3VwSXRlbU1vZHVsZSxcclxuICAgIER4b1ZhbHVlRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhpVG90YWxJdGVtTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeERhdGFHcmlkQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeERhdGFHcmlkQ29tcG9uZW50LFxyXG4gICAgRHhvQ29sdW1uQ2hvb3Nlck1vZHVsZSxcclxuICAgIER4b0NvbHVtbkZpeGluZ01vZHVsZSxcclxuICAgIER4b1RleHRzTW9kdWxlLFxyXG4gICAgRHhpQ29sdW1uTW9kdWxlLFxyXG4gICAgRHhpQnV0dG9uTW9kdWxlLFxyXG4gICAgRHhvSGVhZGVyRmlsdGVyTW9kdWxlLFxyXG4gICAgRHhvTG9va3VwTW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvRm9ybUl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4aVZhbGlkYXRpb25SdWxlTW9kdWxlLFxyXG4gICAgRHhvRWRpdGluZ01vZHVsZSxcclxuICAgIER4b0Zvcm1Nb2R1bGUsXHJcbiAgICBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4b1RhYlBhbmVsT3B0aW9uc01vZHVsZSxcclxuICAgIER4aVRhYk1vZHVsZSxcclxuICAgIER4b0J1dHRvbk9wdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Qb3B1cE1vZHVsZSxcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0hpZGVNb2R1bGUsXHJcbiAgICBEeG9TaG93TW9kdWxlLFxyXG4gICAgRHhvUG9zaXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BdE1vZHVsZSxcclxuICAgIER4b0JvdW5kYXJ5T2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhvQ29sbGlzaW9uTW9kdWxlLFxyXG4gICAgRHhvTXlNb2R1bGUsXHJcbiAgICBEeG9PZmZzZXRNb2R1bGUsXHJcbiAgICBEeGlUb29sYmFySXRlbU1vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJNb2R1bGUsXHJcbiAgICBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUsXHJcbiAgICBEeGlGaWVsZE1vZHVsZSxcclxuICAgIER4b0ZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIER4b0dyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyQnVpbGRlclBvcHVwTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJSb3dNb2R1bGUsXHJcbiAgICBEeG9PcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Hcm91cGluZ01vZHVsZSxcclxuICAgIER4b0dyb3VwUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9LZXlib2FyZE5hdmlnYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9Mb2FkUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9NYXN0ZXJEZXRhaWxNb2R1bGUsXHJcbiAgICBEeG9QYWdlck1vZHVsZSxcclxuICAgIER4b1BhZ2luZ01vZHVsZSxcclxuICAgIER4b1JlbW90ZU9wZXJhdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9TY3JvbGxpbmdNb2R1bGUsXHJcbiAgICBEeG9TZWFyY2hQYW5lbE1vZHVsZSxcclxuICAgIER4b1NlbGVjdGlvbk1vZHVsZSxcclxuICAgIER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Nb2R1bGUsXHJcbiAgICBEeG9Tb3J0aW5nTW9kdWxlLFxyXG4gICAgRHhvU3RhdGVTdG9yaW5nTW9kdWxlLFxyXG4gICAgRHhvU3VtbWFyeU1vZHVsZSxcclxuICAgIER4aUdyb3VwSXRlbU1vZHVsZSxcclxuICAgIER4b1ZhbHVlRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhpVG90YWxJdGVtTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4RGF0YUdyaWRNb2R1bGUgeyB9XHJcbiJdfQ==