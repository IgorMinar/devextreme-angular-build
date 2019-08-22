/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
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
        /**
         * Specifies whether columns should adjust their widths to the content.
         */
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
         * Specifies date-time values' serialization format. Use it only if you do not specify the dataSource at design time.
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
         * Specifies whether to highlight rows and cells whose data changed.
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxDataGridComponent.prototype, "accessKey", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "activeStateEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "allowColumnReordering", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "allowColumnResizing", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "cacheEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "cellHintEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "columnAutoWidth", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "columnChooser", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "columnFixing", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "columnHidingEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxDataGridComponent.prototype, "columnMinWidth", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxDataGridComponent.prototype, "columnResizingMode", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], DxDataGridComponent.prototype, "columns", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxDataGridComponent.prototype, "columnWidth", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Function])
    ], DxDataGridComponent.prototype, "customizeColumns", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Function])
    ], DxDataGridComponent.prototype, "customizeExportData", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "dataSource", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxDataGridComponent.prototype, "dateSerializationFormat", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "editing", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "elementAttr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "errorRowEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "export", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "filterBuilder", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "filterBuilderPopup", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "filterPanel", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "filterRow", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "filterSyncEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "filterValue", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxDataGridComponent.prototype, "focusedColumnIndex", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "focusedRowEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxDataGridComponent.prototype, "focusedRowIndex", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "focusedRowKey", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "focusStateEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "grouping", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "groupPanel", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "headerFilter", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "height", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "highlightChanges", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxDataGridComponent.prototype, "hint", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "hoverStateEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "keyboardNavigation", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "keyExpr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "loadPanel", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "masterDetail", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxDataGridComponent.prototype, "noDataText", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "pager", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "paging", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "remoteOperations", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "renderAsync", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "repaintChangesOnly", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "rowAlternationEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "rowTemplate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "rtlEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "scrolling", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "searchPanel", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], DxDataGridComponent.prototype, "selectedRowKeys", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "selection", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "selectionFilter", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "showBorders", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "showColumnHeaders", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "showColumnLines", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "showRowLines", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], DxDataGridComponent.prototype, "sortByGroupSummaryInfo", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "sorting", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "stateStoring", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "summary", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxDataGridComponent.prototype, "tabIndex", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "twoWayBindingEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "visible", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "width", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxDataGridComponent.prototype, "wordWrapEnabled", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onAdaptiveDetailRowPreparing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onCellClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onCellDblClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onCellHoverChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onCellPrepared", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onContentReady", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onContextMenuPreparing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onDataErrorOccurred", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onDisposing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onEditingStart", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onEditorPrepared", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onEditorPreparing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onExported", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onExporting", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onFileSaving", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onFocusedCellChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onFocusedCellChanging", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onFocusedRowChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onFocusedRowChanging", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onInitialized", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onInitNewRow", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onKeyDown", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onOptionChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowCollapsed", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowCollapsing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowDblClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowExpanded", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowExpanding", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowInserted", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowInserting", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowPrepared", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowRemoved", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowRemoving", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowUpdated", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowUpdating", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onRowValidating", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onSelectionChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "onToolbarPreparing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "accessKeyChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "activeStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "allowColumnReorderingChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "allowColumnResizingChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "cacheEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "cellHintEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "columnAutoWidthChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "columnChooserChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "columnFixingChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "columnHidingEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "columnMinWidthChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "columnResizingModeChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "columnsChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "columnWidthChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "customizeColumnsChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "customizeExportDataChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "dataSourceChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "dateSerializationFormatChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "disabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "editingChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "elementAttrChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "errorRowEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "exportChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "filterBuilderChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "filterBuilderPopupChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "filterPanelChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "filterRowChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "filterSyncEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "filterValueChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "focusedColumnIndexChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "focusedRowEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "focusedRowIndexChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "focusedRowKeyChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "focusStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "groupingChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "groupPanelChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "headerFilterChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "heightChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "highlightChangesChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "hintChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "hoverStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "keyboardNavigationChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "keyExprChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "loadPanelChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "masterDetailChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "noDataTextChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "pagerChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "pagingChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "remoteOperationsChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "renderAsyncChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "repaintChangesOnlyChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "rowAlternationEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "rowTemplateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "rtlEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "scrollingChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "searchPanelChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "selectedRowKeysChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "selectionChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "selectionFilterChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "showBordersChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "showColumnHeadersChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "showColumnLinesChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "showRowLinesChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "sortByGroupSummaryInfoChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "sortingChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "stateStoringChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "summaryChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "tabIndexChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "twoWayBindingEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "visibleChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "widthChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxDataGridComponent.prototype, "wordWrapEnabledChange", void 0);
    tslib_1.__decorate([
        ContentChildren(DxiColumnComponent),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxDataGridComponent.prototype, "columnsChildren", null);
    tslib_1.__decorate([
        ContentChildren(DxiSortByGroupSummaryInfoComponent),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
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
        tslib_1.__param(7, Inject(PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
            WatcherHelper,
            IterableDifferHelper, NestedOptionHost,
            TransferState, Object])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvZGF0YS1ncmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFZcEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFJWixlQUFlLEVBQ2YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sVUFBVSxNQUFNLDJCQUEyQixDQUFDO0FBRW5ELE9BQU8sVUFBVSxNQUFNLHlCQUF5QixDQUFDO0FBR2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxF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LGdCQUFnQjtnQkFDaEIscUJBQXFCO2dCQUNyQixnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjtnQkFDbEIsb0JBQW9CO2dCQUNwQixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIE5nWm9uZSxcclxuICAgIFBMQVRGT1JNX0lELFxyXG4gICAgSW5qZWN0LFxyXG5cclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgRG9DaGVjayxcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCBEeERhdGFHcmlkIGZyb20gJ2RldmV4dHJlbWUvdWkvZGF0YV9ncmlkJztcclxuXHJcblxyXG5pbXBvcnQgeyBEeENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBEeEludGVncmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9pbnRlZ3JhdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IFdhdGNoZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL3dhdGNoZXItaGVscGVyJztcclxuaW1wb3J0IHsgSXRlcmFibGVEaWZmZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL2l0ZXJhYmxlLWRpZmZlci1oZWxwZXInO1xyXG5cclxuaW1wb3J0IHsgRHhvQ29sdW1uQ2hvb3Nlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbHVtbi1jaG9vc2VyJztcclxuaW1wb3J0IHsgRHhvQ29sdW1uRml4aW5nTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29sdW1uLWZpeGluZyc7XHJcbmltcG9ydCB7IER4b1RleHRzTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdGV4dHMnO1xyXG5pbXBvcnQgeyBEeGlDb2x1bW5Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb2x1bW4tZHhpJztcclxuaW1wb3J0IHsgRHhpQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYnV0dG9uLWR4aSc7XHJcbmltcG9ydCB7IER4b0hlYWRlckZpbHRlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2hlYWRlci1maWx0ZXInO1xyXG5pbXBvcnQgeyBEeG9Mb29rdXBNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sb29rdXAnO1xyXG5pbXBvcnQgeyBEeG9Gb3JtYXRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBEeG9Gb3JtSXRlbU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Zvcm0taXRlbSc7XHJcbmltcG9ydCB7IER4b0xhYmVsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbGFiZWwnO1xyXG5pbXBvcnQgeyBEeGlWYWxpZGF0aW9uUnVsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3ZhbGlkYXRpb24tcnVsZS1keGknO1xyXG5pbXBvcnQgeyBEeG9FZGl0aW5nTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZWRpdGluZyc7XHJcbmltcG9ydCB7IER4b0Zvcm1Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mb3JtJztcclxuaW1wb3J0IHsgRHhvQ29sQ291bnRCeVNjcmVlbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbC1jb3VudC1ieS1zY3JlZW4nO1xyXG5pbXBvcnQgeyBEeGlJdGVtTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaXRlbS1keGknO1xyXG5pbXBvcnQgeyBEeG9UYWJQYW5lbE9wdGlvbnNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC90YWItcGFuZWwtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aVRhYk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RhYi1keGknO1xyXG5pbXBvcnQgeyBEeG9CdXR0b25PcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYnV0dG9uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBEeG9Qb3B1cE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3BvcHVwJztcclxuaW1wb3J0IHsgRHhvQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgRHhvSGlkZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2hpZGUnO1xyXG5pbXBvcnQgeyBEeG9TaG93TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2hvdyc7XHJcbmltcG9ydCB7IER4b1Bvc2l0aW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcG9zaXRpb24nO1xyXG5pbXBvcnQgeyBEeG9BdE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2F0JztcclxuaW1wb3J0IHsgRHhvQm91bmRhcnlPZmZzZXRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9ib3VuZGFyeS1vZmZzZXQnO1xyXG5pbXBvcnQgeyBEeG9Db2xsaXNpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb2xsaXNpb24nO1xyXG5pbXBvcnQgeyBEeG9NeU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL215JztcclxuaW1wb3J0IHsgRHhvT2Zmc2V0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvb2Zmc2V0JztcclxuaW1wb3J0IHsgRHhpVG9vbGJhckl0ZW1Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC90b29sYmFyLWl0ZW0tZHhpJztcclxuaW1wb3J0IHsgRHhvRXhwb3J0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZXhwb3J0JztcclxuaW1wb3J0IHsgRHhvRmlsdGVyQnVpbGRlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ZpbHRlci1idWlsZGVyJztcclxuaW1wb3J0IHsgRHhpQ3VzdG9tT3BlcmF0aW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY3VzdG9tLW9wZXJhdGlvbi1keGknO1xyXG5pbXBvcnQgeyBEeGlGaWVsZE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ZpZWxkLWR4aSc7XHJcbmltcG9ydCB7IER4b0ZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ZpbHRlci1vcGVyYXRpb24tZGVzY3JpcHRpb25zJztcclxuaW1wb3J0IHsgRHhvR3JvdXBPcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9ncm91cC1vcGVyYXRpb24tZGVzY3JpcHRpb25zJztcclxuaW1wb3J0IHsgRHhvRmlsdGVyQnVpbGRlclBvcHVwTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZmlsdGVyLWJ1aWxkZXItcG9wdXAnO1xyXG5pbXBvcnQgeyBEeG9GaWx0ZXJQYW5lbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ZpbHRlci1wYW5lbCc7XHJcbmltcG9ydCB7IER4b0ZpbHRlclJvd01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ZpbHRlci1yb3cnO1xyXG5pbXBvcnQgeyBEeG9PcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9vcGVyYXRpb24tZGVzY3JpcHRpb25zJztcclxuaW1wb3J0IHsgRHhvR3JvdXBpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9ncm91cGluZyc7XHJcbmltcG9ydCB7IER4b0dyb3VwUGFuZWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9ncm91cC1wYW5lbCc7XHJcbmltcG9ydCB7IER4b0tleWJvYXJkTmF2aWdhdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2tleWJvYXJkLW5hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBEeG9Mb2FkUGFuZWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sb2FkLXBhbmVsJztcclxuaW1wb3J0IHsgRHhvTWFzdGVyRGV0YWlsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWFzdGVyLWRldGFpbCc7XHJcbmltcG9ydCB7IER4b1BhZ2VyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcGFnZXInO1xyXG5pbXBvcnQgeyBEeG9QYWdpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9wYWdpbmcnO1xyXG5pbXBvcnQgeyBEeG9SZW1vdGVPcGVyYXRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcmVtb3RlLW9wZXJhdGlvbnMnO1xyXG5pbXBvcnQgeyBEeG9TY3JvbGxpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zY3JvbGxpbmcnO1xyXG5pbXBvcnQgeyBEeG9TZWFyY2hQYW5lbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NlYXJjaC1wYW5lbCc7XHJcbmltcG9ydCB7IER4b1NlbGVjdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NlbGVjdGlvbic7XHJcbmltcG9ydCB7IER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zb3J0LWJ5LWdyb3VwLXN1bW1hcnktaW5mby1keGknO1xyXG5pbXBvcnQgeyBEeG9Tb3J0aW5nTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc29ydGluZyc7XHJcbmltcG9ydCB7IER4b1N0YXRlU3RvcmluZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0YXRlLXN0b3JpbmcnO1xyXG5pbXBvcnQgeyBEeG9TdW1tYXJ5TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc3VtbWFyeSc7XHJcbmltcG9ydCB7IER4aUdyb3VwSXRlbU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2dyb3VwLWl0ZW0tZHhpJztcclxuaW1wb3J0IHsgRHhvVmFsdWVGb3JtYXRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC92YWx1ZS1mb3JtYXQnO1xyXG5pbXBvcnQgeyBEeGlUb3RhbEl0ZW1Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC90b3RhbC1pdGVtLWR4aSc7XHJcblxyXG5pbXBvcnQgeyBEeGlDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL25lc3RlZC9jb2x1bW4tZHhpJztcclxuaW1wb3J0IHsgRHhpU29ydEJ5R3JvdXBTdW1tYXJ5SW5mb0NvbXBvbmVudCB9IGZyb20gJy4vbmVzdGVkL3NvcnQtYnktZ3JvdXAtc3VtbWFyeS1pbmZvLWR4aSc7XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIERhdGFHcmlkIGlzIGEgd2lkZ2V0IHRoYXQgcmVwcmVzZW50cyBkYXRhIGZyb20gYSBsb2NhbCBvciByZW1vdGUgc291cmNlIGluIHRoZSBmb3JtIG9mIGEgZ3JpZC4gVGhpcyB3aWRnZXQgb2ZmZXJzIHN1Y2ggYmFzaWMgZmVhdHVyZXMgYXMgc29ydGluZywgZ3JvdXBpbmcsIGZpbHRlcmluZywgYXMgd2VsbCBhcyBtb3JlIGFkdmFuY2VkIGNhcGFiaWxpdGllcywgbGlrZSBzdGF0ZSBzdG9yaW5nLCBleHBvcnQgdG8gRXhjZWwsIG1hc3Rlci1kZXRhaWwgaW50ZXJmYWNlLCBhbmQgbWFueSBvdGhlcnMuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHgtZGF0YS1ncmlkJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICBJdGVyYWJsZURpZmZlckhlbHBlclxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhEYXRhR3JpZENvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgaW5zdGFuY2U6IER4RGF0YUdyaWQ7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBzaG9ydGN1dCBrZXkgdGhhdCBzZXRzIGZvY3VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWNjZXNzS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWNjZXNzS2V5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWNjZXNzS2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjY2Vzc0tleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGludGVyYWN0aW5nIHdpdGggYSB1c2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBhY3RpdmVTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhIHVzZXIgY2FuIHJlb3JkZXIgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0NvbHVtblJlb3JkZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dDb2x1bW5SZW9yZGVyaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dDb2x1bW5SZW9yZGVyaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0NvbHVtblJlb3JkZXJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgYSB1c2VyIGNhbiByZXNpemUgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0NvbHVtblJlc2l6aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93Q29sdW1uUmVzaXppbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0NvbHVtblJlc2l6aW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0NvbHVtblJlc2l6aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGRhdGEgc2hvdWxkIGJlIGNhY2hlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjYWNoZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FjaGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FjaGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYWNoZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlcyBhIGhpbnQgdGhhdCBhcHBlYXJzIHdoZW4gYSB1c2VyIGhvdmVycyB0aGUgbW91c2UgcG9pbnRlciBvdmVyIGEgY2VsbCB3aXRoIHRydW5jYXRlZCBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNlbGxIaW50RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjZWxsSGludEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBjZWxsSGludEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NlbGxIaW50RW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBjb2x1bW5zIHNob3VsZCBhZGp1c3QgdGhlaXIgd2lkdGhzIHRvIHRoZSBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbkF1dG9XaWR0aCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5BdXRvV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5BdXRvV2lkdGgodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbkF1dG9XaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBjb2x1bW4gY2hvb3Nlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5DaG9vc2VyKCk6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBlbXB0eVBhbmVsVGV4dD86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgbW9kZT86IHN0cmluZywgc2VhcmNoVGltZW91dD86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbkNob29zZXInKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5DaG9vc2VyKHZhbHVlOiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgZW1wdHlQYW5lbFRleHQ/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIG1vZGU/OiBzdHJpbmcsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRpdGxlPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5DaG9vc2VyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgY29sdW1uIGZpeGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5GaXhpbmcoKTogeyBlbmFibGVkPzogYm9vbGVhbiwgdGV4dHM/OiB7IGZpeD86IHN0cmluZywgbGVmdFBvc2l0aW9uPzogc3RyaW5nLCByaWdodFBvc2l0aW9uPzogc3RyaW5nLCB1bmZpeD86IHN0cmluZyB9IH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbkZpeGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbkZpeGluZyh2YWx1ZTogeyBlbmFibGVkPzogYm9vbGVhbiwgdGV4dHM/OiB7IGZpeD86IHN0cmluZywgbGVmdFBvc2l0aW9uPzogc3RyaW5nLCByaWdodFBvc2l0aW9uPzogc3RyaW5nLCB1bmZpeD86IHN0cmluZyB9IH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbkZpeGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHNob3VsZCBoaWRlIGNvbHVtbnMgdG8gYWRhcHQgdG8gdGhlIHNjcmVlbiBvciBjb250YWluZXIgc2l6ZS4gSWdub3JlZCBpZiBhbGxvd0NvbHVtblJlc2l6aW5nIGlzIHRydWUgYW5kIGNvbHVtblJlc2l6aW5nTW9kZSBpcyBcIndpZGdldFwiLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbkhpZGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uSGlkaW5nRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbkhpZGluZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbkhpZGluZ0VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBtaW5pbXVtIHdpZHRoIG9mIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uTWluV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5NaW5XaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbk1pbldpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbk1pbldpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBob3cgdGhlIHdpZGdldCByZXNpemVzIGNvbHVtbnMuIEFwcGxpZXMgb25seSBpZiBhbGxvd0NvbHVtblJlc2l6aW5nIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uUmVzaXppbmdNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uUmVzaXppbmdNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uUmVzaXppbmdNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtblJlc2l6aW5nTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBncmlkIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1ucygpOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4RGF0YUdyaWRDb2x1bW4gfCBzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1ucyh2YWx1ZTogQXJyYXk8RGV2RXhwcmVzcy51aS5keERhdGFHcmlkQ29sdW1uIHwgc3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZHRoIGZvciBhbGwgZGF0YSBjb2x1bW5zLiBIYXMgYSBsb3dlciBwcmlvcml0eSB0aGFuIHRoZSBjb2x1bW4ud2lkdGggb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5XaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5XaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXN0b21pemVzIGNvbHVtbnMgYWZ0ZXIgdGhleSBhcmUgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVDb2x1bW5zKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVDb2x1bW5zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplQ29sdW1ucyh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZUNvbHVtbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9taXplcyBkYXRhIGJlZm9yZSBleHBvcnQuIFlvdSBjYW4gdXNlIHRoZSBleHBvcnQuY3VzdG9taXplRXhjZWxDZWxsIGZ1bmN0aW9uIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9taXplRXhwb3J0RGF0YSgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9taXplRXhwb3J0RGF0YScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZUV4cG9ydERhdGEodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVFeHBvcnREYXRhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmRzIHRoZSB3aWRnZXQgdG8gZGF0YS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhU291cmNlKCk6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVNvdXJjZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFTb3VyY2UodmFsdWU6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVNvdXJjZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgZGF0ZS10aW1lIHZhbHVlcycgc2VyaWFsaXphdGlvbiBmb3JtYXQuIFVzZSBpdCBvbmx5IGlmIHlvdSBkbyBub3Qgc3BlY2lmeSB0aGUgZGF0YVNvdXJjZSBhdCBkZXNpZ24gdGltZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGVTZXJpYWxpemF0aW9uRm9ybWF0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgZWRpdGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlZGl0aW5nKCk6IHsgYWxsb3dBZGRpbmc/OiBib29sZWFuLCBhbGxvd0RlbGV0aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBhbGxvd1VwZGF0aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBmb3JtPzogRGV2RXhwcmVzcy51aS5keEZvcm1PcHRpb25zLCBtb2RlPzogc3RyaW5nLCBwb3B1cD86IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMsIHJlZnJlc2hNb2RlPzogc3RyaW5nLCBzZWxlY3RUZXh0T25FZGl0U3RhcnQ/OiBib29sZWFuLCBzdGFydEVkaXRBY3Rpb24/OiBzdHJpbmcsIHRleHRzPzogeyBhZGRSb3c/OiBzdHJpbmcsIGNhbmNlbEFsbENoYW5nZXM/OiBzdHJpbmcsIGNhbmNlbFJvd0NoYW5nZXM/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVNZXNzYWdlPzogc3RyaW5nLCBjb25maXJtRGVsZXRlVGl0bGU/OiBzdHJpbmcsIGRlbGV0ZVJvdz86IHN0cmluZywgZWRpdFJvdz86IHN0cmluZywgc2F2ZUFsbENoYW5nZXM/OiBzdHJpbmcsIHNhdmVSb3dDaGFuZ2VzPzogc3RyaW5nLCB1bmRlbGV0ZVJvdz86IHN0cmluZywgdmFsaWRhdGlvbkNhbmNlbENoYW5nZXM/OiBzdHJpbmcgfSwgdXNlSWNvbnM/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VkaXRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBlZGl0aW5nKHZhbHVlOiB7IGFsbG93QWRkaW5nPzogYm9vbGVhbiwgYWxsb3dEZWxldGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgYWxsb3dVcGRhdGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgZm9ybT86IERldkV4cHJlc3MudWkuZHhGb3JtT3B0aW9ucywgbW9kZT86IHN0cmluZywgcG9wdXA/OiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zLCByZWZyZXNoTW9kZT86IHN0cmluZywgc2VsZWN0VGV4dE9uRWRpdFN0YXJ0PzogYm9vbGVhbiwgc3RhcnRFZGl0QWN0aW9uPzogc3RyaW5nLCB0ZXh0cz86IHsgYWRkUm93Pzogc3RyaW5nLCBjYW5jZWxBbGxDaGFuZ2VzPzogc3RyaW5nLCBjYW5jZWxSb3dDaGFuZ2VzPzogc3RyaW5nLCBjb25maXJtRGVsZXRlTWVzc2FnZT86IHN0cmluZywgY29uZmlybURlbGV0ZVRpdGxlPzogc3RyaW5nLCBkZWxldGVSb3c/OiBzdHJpbmcsIGVkaXRSb3c/OiBzdHJpbmcsIHNhdmVBbGxDaGFuZ2VzPzogc3RyaW5nLCBzYXZlUm93Q2hhbmdlcz86IHN0cmluZywgdW5kZWxldGVSb3c/OiBzdHJpbmcsIHZhbGlkYXRpb25DYW5jZWxDaGFuZ2VzPzogc3RyaW5nIH0sIHVzZUljb25zPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlZGl0aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0byBzaG93IHRoZSBlcnJvciByb3cuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXJyb3JSb3dFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Vycm9yUm93RW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVycm9yUm93RW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXJyb3JSb3dFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgY2xpZW50LXNpZGUgZXhwb3J0aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGV4cG9ydCgpOiB7IGFsbG93RXhwb3J0U2VsZWN0ZWREYXRhPzogYm9vbGVhbiwgY3VzdG9taXplRXhjZWxDZWxsPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBleGNlbEZpbHRlckVuYWJsZWQ/OiBib29sZWFuLCBleGNlbFdyYXBUZXh0RW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBpZ25vcmVFeGNlbEVycm9ycz86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nLCB0ZXh0cz86IHsgZXhwb3J0QWxsPzogc3RyaW5nLCBleHBvcnRTZWxlY3RlZFJvd3M/OiBzdHJpbmcsIGV4cG9ydFRvPzogc3RyaW5nIH0gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwb3J0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwb3J0KHZhbHVlOiB7IGFsbG93RXhwb3J0U2VsZWN0ZWREYXRhPzogYm9vbGVhbiwgY3VzdG9taXplRXhjZWxDZWxsPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBleGNlbEZpbHRlckVuYWJsZWQ/OiBib29sZWFuLCBleGNlbFdyYXBUZXh0RW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBpZ25vcmVFeGNlbEVycm9ycz86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nLCB0ZXh0cz86IHsgZXhwb3J0QWxsPzogc3RyaW5nLCBleHBvcnRTZWxlY3RlZFJvd3M/OiBzdHJpbmcsIGV4cG9ydFRvPzogc3RyaW5nIH0gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwb3J0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGludGVncmF0ZWQgZmlsdGVyIGJ1aWxkZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyQnVpbGRlcigpOiBEZXZFeHByZXNzLnVpLmR4RmlsdGVyQnVpbGRlck9wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlckJ1aWxkZXInKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJCdWlsZGVyKHZhbHVlOiBEZXZFeHByZXNzLnVpLmR4RmlsdGVyQnVpbGRlck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlckJ1aWxkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgcG9wdXAgaW4gd2hpY2ggdGhlIGludGVncmF0ZWQgZmlsdGVyIGJ1aWxkZXIgaXMgc2hvd24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyQnVpbGRlclBvcHVwKCk6IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlckJ1aWxkZXJQb3B1cCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlckJ1aWxkZXJQb3B1cCh2YWx1ZTogRGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyQnVpbGRlclBvcHVwJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGZpbHRlciBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJQYW5lbCgpOiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZmlsdGVyRW5hYmxlZD86IGJvb2xlYW4sIHRleHRzPzogeyBjbGVhckZpbHRlcj86IHN0cmluZywgY3JlYXRlRmlsdGVyPzogc3RyaW5nLCBmaWx0ZXJFbmFibGVkSGludD86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJQYW5lbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlclBhbmVsKHZhbHVlOiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZmlsdGVyRW5hYmxlZD86IGJvb2xlYW4sIHRleHRzPzogeyBjbGVhckZpbHRlcj86IHN0cmluZywgY3JlYXRlRmlsdGVyPzogc3RyaW5nLCBmaWx0ZXJFbmFibGVkSGludD86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJQYW5lbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBmaWx0ZXIgcm93LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlclJvdygpOiB7IGFwcGx5RmlsdGVyPzogc3RyaW5nLCBhcHBseUZpbHRlclRleHQ/OiBzdHJpbmcsIGJldHdlZW5FbmRUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuU3RhcnRUZXh0Pzogc3RyaW5nLCBvcGVyYXRpb25EZXNjcmlwdGlvbnM/OiB7IGJldHdlZW4/OiBzdHJpbmcsIGNvbnRhaW5zPzogc3RyaW5nLCBlbmRzV2l0aD86IHN0cmluZywgZXF1YWw/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuPzogc3RyaW5nLCBncmVhdGVyVGhhbk9yRXF1YWw/OiBzdHJpbmcsIGxlc3NUaGFuPzogc3RyaW5nLCBsZXNzVGhhbk9yRXF1YWw/OiBzdHJpbmcsIG5vdENvbnRhaW5zPzogc3RyaW5nLCBub3RFcXVhbD86IHN0cmluZywgc3RhcnRzV2l0aD86IHN0cmluZyB9LCByZXNldE9wZXJhdGlvblRleHQ/OiBzdHJpbmcsIHNob3dBbGxUZXh0Pzogc3RyaW5nLCBzaG93T3BlcmF0aW9uQ2hvb3Nlcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlclJvdycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlclJvdyh2YWx1ZTogeyBhcHBseUZpbHRlcj86IHN0cmluZywgYXBwbHlGaWx0ZXJUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuRW5kVGV4dD86IHN0cmluZywgYmV0d2VlblN0YXJ0VGV4dD86IHN0cmluZywgb3BlcmF0aW9uRGVzY3JpcHRpb25zPzogeyBiZXR3ZWVuPzogc3RyaW5nLCBjb250YWlucz86IHN0cmluZywgZW5kc1dpdGg/OiBzdHJpbmcsIGVxdWFsPzogc3RyaW5nLCBncmVhdGVyVGhhbj86IHN0cmluZywgZ3JlYXRlclRoYW5PckVxdWFsPzogc3RyaW5nLCBsZXNzVGhhbj86IHN0cmluZywgbGVzc1RoYW5PckVxdWFsPzogc3RyaW5nLCBub3RDb250YWlucz86IHN0cmluZywgbm90RXF1YWw/OiBzdHJpbmcsIHN0YXJ0c1dpdGg/OiBzdHJpbmcgfSwgcmVzZXRPcGVyYXRpb25UZXh0Pzogc3RyaW5nLCBzaG93QWxsVGV4dD86IHN0cmluZywgc2hvd09wZXJhdGlvbkNob29zZXI/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJSb3cnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gc3luY2hyb25pemUgdGhlIGZpbHRlciByb3csIGhlYWRlciBmaWx0ZXIsIGFuZCBmaWx0ZXIgYnVpbGRlci4gVGhlIHN5bmNocm9uaXplZCBmaWx0ZXIgZXhwcmVzc2lvbiBpcyBzdG9yZWQgaW4gdGhlIGZpbHRlclZhbHVlIG9wdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJTeW5jRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJTeW5jRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlclN5bmNFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJTeW5jRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBmaWx0ZXIgZXhwcmVzc2lvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJWYWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlclZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyVmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBpbmRleCBvZiB0aGUgY29sdW1uIGZvY3VzZWQgaW5pdGlhbGx5IG9yIGN1cnJlbnRseSBpbiB0aGUgZGF0YSByb3cgYXJlYS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1c2VkQ29sdW1uSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb2N1c2VkQ29sdW1uSW5kZXgnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c2VkQ29sdW1uSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNlZENvbHVtbkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmb2N1c2VkIHJvdyBmZWF0dXJlIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNlZFJvd0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNlZFJvd0VuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c2VkUm93RW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNlZFJvd0VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBpbml0aWFsbHkgb3IgY3VycmVudGx5IGZvY3VzZWQgZ3JpZCByb3cncyBpbmRleC4gVXNlIGl0IHdoZW4gZm9jdXNlZFJvd0VuYWJsZWQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1c2VkUm93SW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb2N1c2VkUm93SW5kZXgnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c2VkUm93SW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNlZFJvd0luZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBpbml0aWFsbHkgb3IgY3VycmVudGx5IGZvY3VzZWQgZ3JpZCByb3cncyBrZXkuIFVzZSBpdCB3aGVuIGZvY3VzZWRSb3dFbmFibGVkIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNlZFJvd0tleSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzZWRSb3dLZXknKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c2VkUm93S2V5KHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzZWRSb3dLZXknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjYW4gYmUgZm9jdXNlZCB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgZ3JvdXBpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JvdXBpbmcoKTogeyBhbGxvd0NvbGxhcHNpbmc/OiBib29sZWFuLCBhdXRvRXhwYW5kQWxsPzogYm9vbGVhbiwgY29udGV4dE1lbnVFbmFibGVkPzogYm9vbGVhbiwgZXhwYW5kTW9kZT86IHN0cmluZywgdGV4dHM/OiB7IGdyb3VwQnlUaGlzQ29sdW1uPzogc3RyaW5nLCBncm91cENvbnRpbnVlZE1lc3NhZ2U/OiBzdHJpbmcsIGdyb3VwQ29udGludWVzTWVzc2FnZT86IHN0cmluZywgdW5ncm91cD86IHN0cmluZywgdW5ncm91cEFsbD86IHN0cmluZyB9IH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBpbmcodmFsdWU6IHsgYWxsb3dDb2xsYXBzaW5nPzogYm9vbGVhbiwgYXV0b0V4cGFuZEFsbD86IGJvb2xlYW4sIGNvbnRleHRNZW51RW5hYmxlZD86IGJvb2xlYW4sIGV4cGFuZE1vZGU/OiBzdHJpbmcsIHRleHRzPzogeyBncm91cEJ5VGhpc0NvbHVtbj86IHN0cmluZywgZ3JvdXBDb250aW51ZWRNZXNzYWdlPzogc3RyaW5nLCBncm91cENvbnRpbnVlc01lc3NhZ2U/OiBzdHJpbmcsIHVuZ3JvdXA/OiBzdHJpbmcsIHVuZ3JvdXBBbGw/OiBzdHJpbmcgfSB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBncm91cCBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBncm91cFBhbmVsKCk6IHsgYWxsb3dDb2x1bW5EcmFnZ2luZz86IGJvb2xlYW4sIGVtcHR5UGFuZWxUZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB8IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cFBhbmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBQYW5lbCh2YWx1ZTogeyBhbGxvd0NvbHVtbkRyYWdnaW5nPzogYm9vbGVhbiwgZW1wdHlQYW5lbFRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIHwgc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwUGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgaGVhZGVyIGZpbHRlciBmZWF0dXJlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlYWRlckZpbHRlcigpOiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCB0ZXh0cz86IHsgY2FuY2VsPzogc3RyaW5nLCBlbXB0eVZhbHVlPzogc3RyaW5nLCBvaz86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVhZGVyRmlsdGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVhZGVyRmlsdGVyKHZhbHVlOiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCB0ZXh0cz86IHsgY2FuY2VsPzogc3RyaW5nLCBlbXB0eVZhbHVlPzogc3RyaW5nLCBvaz86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVhZGVyRmlsdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3MgaGVpZ2h0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGhpZ2hsaWdodCByb3dzIGFuZCBjZWxscyB3aG9zZSBkYXRhIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGlnaGxpZ2h0Q2hhbmdlcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaWdobGlnaHRDaGFuZ2VzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGlnaGxpZ2h0Q2hhbmdlcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGlnaGxpZ2h0Q2hhbmdlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGV4dCBmb3IgYSBoaW50IHRoYXQgYXBwZWFycyB3aGVuIGEgdXNlciBwYXVzZXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhpbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNoYW5nZXMgaXRzIHN0YXRlIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiBpdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3ZlclN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvdmVyU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQga2V5Ym9hcmROYXZpZ2F0aW9uKCk6IHsgZWRpdE9uS2V5UHJlc3M/OiBib29sZWFuLCBlbnRlcktleUFjdGlvbj86IHN0cmluZywgZW50ZXJLZXlEaXJlY3Rpb24/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigna2V5Ym9hcmROYXZpZ2F0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQga2V5Ym9hcmROYXZpZ2F0aW9uKHZhbHVlOiB7IGVkaXRPbktleVByZXNzPzogYm9vbGVhbiwgZW50ZXJLZXlBY3Rpb24/OiBzdHJpbmcsIGVudGVyS2V5RGlyZWN0aW9uPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2tleWJvYXJkTmF2aWdhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hpY2ggZGF0YSBmaWVsZCBwcm92aWRlcyBrZXlzIGZvciBkYXRhIGl0ZW1zLiBBcHBsaWVzIG9ubHkgaWYgZGF0YSBpcyBhIHNpbXBsZSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBrZXlFeHByKCk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2tleUV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBrZXlFeHByKHZhbHVlOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdrZXlFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGxvYWQgcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9hZFBhbmVsKCk6IHsgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgaW5kaWNhdG9yU3JjPzogc3RyaW5nLCBzaGFkaW5nPzogYm9vbGVhbiwgc2hhZGluZ0NvbG9yPzogc3RyaW5nLCBzaG93SW5kaWNhdG9yPzogYm9vbGVhbiwgc2hvd1BhbmU/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2FkUGFuZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBsb2FkUGFuZWwodmFsdWU6IHsgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgaW5kaWNhdG9yU3JjPzogc3RyaW5nLCBzaGFkaW5nPzogYm9vbGVhbiwgc2hhZGluZ0NvbG9yPzogc3RyaW5nLCBzaG93SW5kaWNhdG9yPzogYm9vbGVhbiwgc2hvd1BhbmU/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2FkUGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHlvdSB0byBidWlsZCBhIG1hc3Rlci1kZXRhaWwgaW50ZXJmYWNlIGluIHRoZSBncmlkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1hc3RlckRldGFpbCgpOiB7IGF1dG9FeHBhbmRBbGw/OiBib29sZWFuLCBlbmFibGVkPzogYm9vbGVhbiwgdGVtcGxhdGU/OiBhbnkgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWFzdGVyRGV0YWlsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWFzdGVyRGV0YWlsKHZhbHVlOiB7IGF1dG9FeHBhbmRBbGw/OiBib29sZWFuLCBlbmFibGVkPzogYm9vbGVhbiwgdGVtcGxhdGU/OiBhbnkgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWFzdGVyRGV0YWlsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IHNob3duIHdoZW4gdGhlIHdpZGdldCBkb2VzIG5vdCBkaXNwbGF5IGFueSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG5vRGF0YVRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdub0RhdGFUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbm9EYXRhVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdub0RhdGFUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIHBhZ2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhZ2VyKCk6IHsgYWxsb3dlZFBhZ2VTaXplcz86IEFycmF5PG51bWJlcj4sIGluZm9UZXh0Pzogc3RyaW5nLCBzaG93SW5mbz86IGJvb2xlYW4sIHNob3dOYXZpZ2F0aW9uQnV0dG9ucz86IGJvb2xlYW4sIHNob3dQYWdlU2l6ZVNlbGVjdG9yPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFnZXInKTtcclxuICAgIH1cclxuICAgIHNldCBwYWdlcih2YWx1ZTogeyBhbGxvd2VkUGFnZVNpemVzPzogQXJyYXk8bnVtYmVyPiwgaW5mb1RleHQ/OiBzdHJpbmcsIHNob3dJbmZvPzogYm9vbGVhbiwgc2hvd05hdmlnYXRpb25CdXR0b25zPzogYm9vbGVhbiwgc2hvd1BhZ2VTaXplU2VsZWN0b3I/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYWdlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHBhZ2luZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWdpbmcoKTogeyBlbmFibGVkPzogYm9vbGVhbiwgcGFnZUluZGV4PzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYWdpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBwYWdpbmcodmFsdWU6IHsgZW5hYmxlZD86IGJvb2xlYW4sIHBhZ2VJbmRleD86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFnaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoZSBEYXRhR3JpZCBvZiB0aGUgc2VydmVyJ3MgZGF0YSBwcm9jZXNzaW5nIG9wZXJhdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVtb3RlT3BlcmF0aW9ucygpOiBib29sZWFuIHwgeyBmaWx0ZXJpbmc/OiBib29sZWFuLCBncm91cGluZz86IGJvb2xlYW4sIGdyb3VwUGFnaW5nPzogYm9vbGVhbiwgcGFnaW5nPzogYm9vbGVhbiwgc29ydGluZz86IGJvb2xlYW4sIHN1bW1hcnk/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlbW90ZU9wZXJhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCByZW1vdGVPcGVyYXRpb25zKHZhbHVlOiBib29sZWFuIHwgeyBmaWx0ZXJpbmc/OiBib29sZWFuLCBncm91cGluZz86IGJvb2xlYW4sIGdyb3VwUGFnaW5nPzogYm9vbGVhbiwgcGFnaW5nPzogYm9vbGVhbiwgc29ydGluZz86IGJvb2xlYW4sIHN1bW1hcnk/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlbW90ZU9wZXJhdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVuZGVyIHRoZSBmaWx0ZXIgcm93LCBjb21tYW5kIGNvbHVtbnMsIGFuZCBjb2x1bW5zIHdpdGggc2hvd0VkaXRvckFsd2F5cyBzZXQgdG8gdHJ1ZSBhZnRlciBvdGhlciBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZW5kZXJBc3luYygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZW5kZXJBc3luYycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlbmRlckFzeW5jKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZW5kZXJBc3luYycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byByZXBhaW50IG9ubHkgdGhvc2UgY2VsbHMgd2hvc2UgZGF0YSBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlcGFpbnRDaGFuZ2VzT25seSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXBhaW50Q2hhbmdlc09ubHknKTtcclxuICAgIH1cclxuICAgIHNldCByZXBhaW50Q2hhbmdlc09ubHkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlcGFpbnRDaGFuZ2VzT25seScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciByb3dzIHNob3VsZCBiZSBzaGFkZWQgZGlmZmVyZW50bHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcm93QWx0ZXJuYXRpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jvd0FsdGVybmF0aW9uRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJvd0FsdGVybmF0aW9uRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncm93QWx0ZXJuYXRpb25FbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3Igcm93cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByb3dUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jvd1RlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm93VGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncm93VGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHNjcm9sbGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzY3JvbGxpbmcoKTogeyBjb2x1bW5SZW5kZXJpbmdNb2RlPzogc3RyaW5nLCBtb2RlPzogc3RyaW5nLCBwcmVsb2FkRW5hYmxlZD86IGJvb2xlYW4sIHJvd1JlbmRlcmluZ01vZGU/OiBzdHJpbmcsIHNjcm9sbEJ5Q29udGVudD86IGJvb2xlYW4sIHNjcm9sbEJ5VGh1bWI/OiBib29sZWFuLCBzaG93U2Nyb2xsYmFyPzogc3RyaW5nLCB1c2VOYXRpdmU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Njcm9sbGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNjcm9sbGluZyh2YWx1ZTogeyBjb2x1bW5SZW5kZXJpbmdNb2RlPzogc3RyaW5nLCBtb2RlPzogc3RyaW5nLCBwcmVsb2FkRW5hYmxlZD86IGJvb2xlYW4sIHJvd1JlbmRlcmluZ01vZGU/OiBzdHJpbmcsIHNjcm9sbEJ5Q29udGVudD86IGJvb2xlYW4sIHNjcm9sbEJ5VGh1bWI/OiBib29sZWFuLCBzaG93U2Nyb2xsYmFyPzogc3RyaW5nLCB1c2VOYXRpdmU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Njcm9sbGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBzZWFyY2ggcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VhcmNoUGFuZWwoKTogeyBoaWdobGlnaHRDYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiwgaGlnaGxpZ2h0U2VhcmNoVGV4dD86IGJvb2xlYW4sIHBsYWNlaG9sZGVyPzogc3RyaW5nLCBzZWFyY2hWaXNpYmxlQ29sdW1uc09ubHk/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VhcmNoUGFuZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWFyY2hQYW5lbCh2YWx1ZTogeyBoaWdobGlnaHRDYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiwgaGlnaGxpZ2h0U2VhcmNoVGV4dD86IGJvb2xlYW4sIHBsYWNlaG9sZGVyPzogc3RyaW5nLCBzZWFyY2hWaXNpYmxlQ29sdW1uc09ubHk/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VhcmNoUGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHlvdSB0byBzZWxlY3Qgcm93cyBvciBkZXRlcm1pbmUgd2hpY2ggcm93cyBhcmUgc2VsZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0ZWRSb3dLZXlzKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdGVkUm93S2V5cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGVkUm93S2V5cyh2YWx1ZTogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0ZWRSb3dLZXlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgcnVudGltZSBzZWxlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0aW9uKCk6IHsgYWxsb3dTZWxlY3RBbGw/OiBib29sZWFuLCBkZWZlcnJlZD86IGJvb2xlYW4sIG1vZGU/OiBzdHJpbmcsIHNlbGVjdEFsbE1vZGU/OiBzdHJpbmcsIHNob3dDaGVja0JveGVzTW9kZT86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3Rpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3Rpb24odmFsdWU6IHsgYWxsb3dTZWxlY3RBbGw/OiBib29sZWFuLCBkZWZlcnJlZD86IGJvb2xlYW4sIG1vZGU/OiBzdHJpbmcsIHNlbGVjdEFsbE1vZGU/OiBzdHJpbmcsIHNob3dDaGVja0JveGVzTW9kZT86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGZpbHRlcnMgZm9yIHRoZSByb3dzIHRoYXQgbXVzdCBiZSBzZWxlY3RlZCBpbml0aWFsbHkuIEFwcGxpZXMgb25seSBpZiBzZWxlY3Rpb24uZGVmZXJyZWQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3Rpb25GaWx0ZXIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3Rpb25GaWx0ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3Rpb25GaWx0ZXIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0aW9uRmlsdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBvdXRlciBib3JkZXJzIG9mIHRoZSB3aWRnZXQgYXJlIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0JvcmRlcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0JvcmRlcnMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Qm9yZGVycyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0JvcmRlcnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgY29sdW1uIGhlYWRlcnMgYXJlIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0NvbHVtbkhlYWRlcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NvbHVtbkhlYWRlcnMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q29sdW1uSGVhZGVycyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0NvbHVtbkhlYWRlcnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdmVydGljYWwgbGluZXMgdGhhdCBzZXBhcmF0ZSBvbmUgY29sdW1uIGZyb20gYW5vdGhlciBhcmUgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Q29sdW1uTGluZXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NvbHVtbkxpbmVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0NvbHVtbkxpbmVzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q29sdW1uTGluZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgaG9yaXpvbnRhbCBsaW5lcyB0aGF0IHNlcGFyYXRlIG9uZSByb3cgZnJvbSBhbm90aGVyIGFyZSB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dSb3dMaW5lcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Um93TGluZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Um93TGluZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dSb3dMaW5lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgeW91IHRvIHNvcnQgZ3JvdXBzIGFjY29yZGluZyB0byB0aGUgdmFsdWVzIG9mIGdyb3VwIHN1bW1hcnkgaXRlbXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc29ydEJ5R3JvdXBTdW1tYXJ5SW5mbygpOiBBcnJheTxhbnkgfCB7IGdyb3VwQ29sdW1uPzogc3RyaW5nLCBzb3J0T3JkZXI/OiBzdHJpbmcsIHN1bW1hcnlJdGVtPzogbnVtYmVyIHwgc3RyaW5nIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzb3J0QnlHcm91cFN1bW1hcnlJbmZvJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydEJ5R3JvdXBTdW1tYXJ5SW5mbyh2YWx1ZTogQXJyYXk8YW55IHwgeyBncm91cENvbHVtbj86IHN0cmluZywgc29ydE9yZGVyPzogc3RyaW5nLCBzdW1tYXJ5SXRlbT86IG51bWJlciB8IHN0cmluZyB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc29ydEJ5R3JvdXBTdW1tYXJ5SW5mbycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHJ1bnRpbWUgc29ydGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzb3J0aW5nKCk6IHsgYXNjZW5kaW5nVGV4dD86IHN0cmluZywgY2xlYXJUZXh0Pzogc3RyaW5nLCBkZXNjZW5kaW5nVGV4dD86IHN0cmluZywgbW9kZT86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzb3J0aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydGluZyh2YWx1ZTogeyBhc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBjbGVhclRleHQ/OiBzdHJpbmcsIGRlc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBtb2RlPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBzdGF0ZSBzdG9yaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0YXRlU3RvcmluZygpOiB7IGN1c3RvbUxvYWQ/OiBGdW5jdGlvbiwgY3VzdG9tU2F2ZT86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgc2F2aW5nVGltZW91dD86IG51bWJlciwgc3RvcmFnZUtleT86IHN0cmluZywgdHlwZT86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGF0ZVN0b3JpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGF0ZVN0b3JpbmcodmFsdWU6IHsgY3VzdG9tTG9hZD86IEZ1bmN0aW9uLCBjdXN0b21TYXZlPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBzYXZpbmdUaW1lb3V0PzogbnVtYmVyLCBzdG9yYWdlS2V5Pzogc3RyaW5nLCB0eXBlPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YXRlU3RvcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG9wdGlvbnMgb2YgdGhlIGdyaWQgc3VtbWFyeS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdW1tYXJ5KCk6IHsgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeT86IEZ1bmN0aW9uLCBncm91cEl0ZW1zPzogQXJyYXk8YW55IHwgeyBhbGlnbkJ5Q29sdW1uPzogYm9vbGVhbiwgY29sdW1uPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2hvd0luR3JvdXBGb290ZXI/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmFsdWVGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9PiwgcmVjYWxjdWxhdGVXaGlsZUVkaXRpbmc/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCB0ZXh0cz86IHsgYXZnPzogc3RyaW5nLCBhdmdPdGhlckNvbHVtbj86IHN0cmluZywgY291bnQ/OiBzdHJpbmcsIG1heD86IHN0cmluZywgbWF4T3RoZXJDb2x1bW4/OiBzdHJpbmcsIG1pbj86IHN0cmluZywgbWluT3RoZXJDb2x1bW4/OiBzdHJpbmcsIHN1bT86IHN0cmluZywgc3VtT3RoZXJDb2x1bW4/OiBzdHJpbmcgfSwgdG90YWxJdGVtcz86IEFycmF5PGFueSB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjb2x1bW4/OiBzdHJpbmcsIGNzc0NsYXNzPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2tpcEVtcHR5VmFsdWVzPzogYm9vbGVhbiwgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZhbHVlRm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfT4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3VtbWFyeScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN1bW1hcnkodmFsdWU6IHsgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeT86IEZ1bmN0aW9uLCBncm91cEl0ZW1zPzogQXJyYXk8YW55IHwgeyBhbGlnbkJ5Q29sdW1uPzogYm9vbGVhbiwgY29sdW1uPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2hvd0luR3JvdXBGb290ZXI/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmFsdWVGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9PiwgcmVjYWxjdWxhdGVXaGlsZUVkaXRpbmc/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCB0ZXh0cz86IHsgYXZnPzogc3RyaW5nLCBhdmdPdGhlckNvbHVtbj86IHN0cmluZywgY291bnQ/OiBzdHJpbmcsIG1heD86IHN0cmluZywgbWF4T3RoZXJDb2x1bW4/OiBzdHJpbmcsIG1pbj86IHN0cmluZywgbWluT3RoZXJDb2x1bW4/OiBzdHJpbmcsIHN1bT86IHN0cmluZywgc3VtT3RoZXJDb2x1bW4/OiBzdHJpbmcgfSwgdG90YWxJdGVtcz86IEFycmF5PGFueSB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjb2x1bW4/OiBzdHJpbmcsIGNzc0NsYXNzPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2tpcEVtcHR5VmFsdWVzPzogYm9vbGVhbiwgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZhbHVlRm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfT4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3VtbWFyeScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudCB3aGVuIHRoZSBUYWIga2V5IGlzIHVzZWQgZm9yIG5hdmlnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSB0d28td2F5IGRhdGEgYmluZGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0d29XYXlCaW5kaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0d29XYXlCaW5kaW5nRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHR3b1dheUJpbmRpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0d29XYXlCaW5kaW5nRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGV4dCB0aGF0IGRvZXMgbm90IGZpdCBpbnRvIGEgY29sdW1uIHNob3VsZCBiZSB3cmFwcGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdvcmRXcmFwRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3b3JkV3JhcEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCB3b3JkV3JhcEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dvcmRXcmFwRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYW4gYWRhcHRpdmUgZGV0YWlsIHJvdyBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQWRhcHRpdmVEZXRhaWxSb3dQcmVwYXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBjZWxsIGlzIGNsaWNrZWQgb3IgdGFwcGVkLiBFeGVjdXRlZCBiZWZvcmUgb25Sb3dDbGljay5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgY2VsbCBpcyBkb3VibGUtY2xpY2tlZCBvciBkb3VibGUtdGFwcGVkLiBFeGVjdXRlZCBiZWZvcmUgb25Sb3dEYmxDbGljay5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbERibENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgcG9pbnRlciBlbnRlcnMgb3IgbGVhdmVzIGEgY2VsbC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbEhvdmVyQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSBjZWxsIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNlbGxQcmVwYXJlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgY29udGVudCBpcyByZWFkeSBhbmQgZWFjaCB0aW1lIHRoZSBjb250ZW50IGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNvbnRlbnRSZWFkeTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSBjb250ZXh0IG1lbnUgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51UHJlcGFyaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRhdGFFcnJvck9jY3VycmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBkaXNwb3NlZCBvZi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGlzcG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSBjZWxsIG9yIHJvdyBzd2l0Y2hlcyB0byB0aGUgZWRpdGluZyBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRWRpdGluZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhbiBlZGl0b3IgaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRWRpdG9yUHJlcGFyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIGNlbGwncyBlZGl0b3IgaXMgY3JlYXRlZC4gTm90IGV4ZWN1dGVkIGZvciBjZWxscyB3aXRoIGFuIGVkaXRDZWxsVGVtcGxhdGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkVkaXRvclByZXBhcmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgZGF0YSBpcyBleHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRXhwb3J0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBkYXRhIGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIGZpbGUgd2l0aCBleHBvcnRlZCBkYXRhIGlzIHNhdmVkIHRvIHRoZSB1c2VyJ3MgbG9jYWwgc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRmlsZVNhdmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIGZvY3VzZWQgY2VsbCBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c2VkQ2VsbENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgZm9jdXNlZCBjZWxsIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZvY3VzZWRDZWxsQ2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHRoZSBmb2N1c2VkIHJvdyBjaGFuZ2VzLiBBcHBsaWVzIG9ubHkgd2hlbiBmb2N1c2VkUm93RW5hYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c2VkUm93Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSBmb2N1c2VkIHJvdyBjaGFuZ2VzLiBBcHBsaWVzIG9ubHkgd2hlbiBmb2N1c2VkUm93RW5hYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c2VkUm93Q2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSBuZXcgcm93IGlzIGFkZGVkIHRvIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXROZXdSb3c6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCBpcyBpbiBmb2N1cyBhbmQgYSBrZXkgaGFzIGJlZW4gcHJlc3NlZCBkb3duLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25LZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHJvdyBpcyBjbGlja2VkIG9yIHRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgcm93IGlzIGNvbGxhcHNlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93Q29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSByb3cgaXMgY29sbGFwc2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dDb2xsYXBzaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgcm93IGlzIGRvdWJsZS1jbGlja2VkIG9yIGRvdWJsZS10YXBwZWQuIEV4ZWN1dGVkIGFmdGVyIG9uQ2VsbERibENsaWNrLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dEYmxDbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSByb3cgaXMgZXhwYW5kZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0V4cGFuZGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSByb3cgaXMgZXhwYW5kZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0V4cGFuZGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSBuZXcgcm93IGhhcyBiZWVuIGluc2VydGVkIGludG8gdGhlIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dJbnNlcnRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgbmV3IHJvdyBpcyBpbnNlcnRlZCBpbnRvIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93SW5zZXJ0aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHJvdyBpcyBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dQcmVwYXJlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSByb3cgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93UmVtb3ZlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgcm93IGlzIHJlbW92ZWQgZnJvbSB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd1JlbW92aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHJvdyBoYXMgYmVlbiB1cGRhdGVkIGluIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93VXBkYXRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgcm93IGlzIHVwZGF0ZWQgaW4gdGhlIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dVcGRhdGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgY2VsbHMgaW4gYSByb3cgYXJlIHZhbGlkYXRlZCBhZ2FpbnN0IHZhbGlkYXRpb24gcnVsZXMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd1ZhbGlkYXRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHNlbGVjdGluZyBhIHJvdyBvciBjbGVhcmluZyBpdHMgc2VsZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHRvb2xiYXIgaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uVG9vbGJhclByZXBhcmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhbGxvd0NvbHVtblJlb3JkZXJpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbGxvd0NvbHVtblJlb3JkZXJpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFsbG93Q29sdW1uUmVzaXppbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbGxvd0NvbHVtblJlc2l6aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjYWNoZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjYWNoZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNlbGxIaW50RW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNlbGxIaW50RW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uQXV0b1dpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uQXV0b1dpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb2x1bW5DaG9vc2VyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uQ2hvb3NlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBlbXB0eVBhbmVsVGV4dD86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgbW9kZT86IHN0cmluZywgc2VhcmNoVGltZW91dD86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uRml4aW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uRml4aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBlbmFibGVkPzogYm9vbGVhbiwgdGV4dHM/OiB7IGZpeD86IHN0cmluZywgbGVmdFBvc2l0aW9uPzogc3RyaW5nLCByaWdodFBvc2l0aW9uPzogc3RyaW5nLCB1bmZpeD86IHN0cmluZyB9IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uSGlkaW5nRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbkhpZGluZ0VuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbHVtbk1pbldpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uTWluV2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uUmVzaXppbmdNb2RlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uUmVzaXppbmdNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbHVtbnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8RGV2RXhwcmVzcy51aS5keERhdGFHcmlkQ29sdW1uIHwgc3RyaW5nPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb2x1bW5XaWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbldpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGN1c3RvbWl6ZUNvbHVtbnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjdXN0b21pemVDb2x1bW5zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY3VzdG9taXplRXhwb3J0RGF0YUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbWl6ZUV4cG9ydERhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhU291cmNlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YVNvdXJjZUNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRpc2FibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGlzYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVkaXRpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlZGl0aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd0FkZGluZz86IGJvb2xlYW4sIGFsbG93RGVsZXRpbmc/OiBib29sZWFuIHwgRnVuY3Rpb24sIGFsbG93VXBkYXRpbmc/OiBib29sZWFuIHwgRnVuY3Rpb24sIGZvcm0/OiBEZXZFeHByZXNzLnVpLmR4Rm9ybU9wdGlvbnMsIG1vZGU/OiBzdHJpbmcsIHBvcHVwPzogRGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucywgcmVmcmVzaE1vZGU/OiBzdHJpbmcsIHNlbGVjdFRleHRPbkVkaXRTdGFydD86IGJvb2xlYW4sIHN0YXJ0RWRpdEFjdGlvbj86IHN0cmluZywgdGV4dHM/OiB7IGFkZFJvdz86IHN0cmluZywgY2FuY2VsQWxsQ2hhbmdlcz86IHN0cmluZywgY2FuY2VsUm93Q2hhbmdlcz86IHN0cmluZywgY29uZmlybURlbGV0ZU1lc3NhZ2U/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVUaXRsZT86IHN0cmluZywgZGVsZXRlUm93Pzogc3RyaW5nLCBlZGl0Um93Pzogc3RyaW5nLCBzYXZlQWxsQ2hhbmdlcz86IHN0cmluZywgc2F2ZVJvd0NoYW5nZXM/OiBzdHJpbmcsIHVuZGVsZXRlUm93Pzogc3RyaW5nLCB2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcz86IHN0cmluZyB9LCB1c2VJY29ucz86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVycm9yUm93RW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVycm9yUm93RW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZXhwb3J0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZXhwb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd0V4cG9ydFNlbGVjdGVkRGF0YT86IGJvb2xlYW4sIGN1c3RvbWl6ZUV4Y2VsQ2VsbD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZXhjZWxGaWx0ZXJFbmFibGVkPzogYm9vbGVhbiwgZXhjZWxXcmFwVGV4dEVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgaWdub3JlRXhjZWxFcnJvcnM/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZywgdGV4dHM/OiB7IGV4cG9ydEFsbD86IHN0cmluZywgZXhwb3J0U2VsZWN0ZWRSb3dzPzogc3RyaW5nLCBleHBvcnRUbz86IHN0cmluZyB9IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyQnVpbGRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlckJ1aWxkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLnVpLmR4RmlsdGVyQnVpbGRlck9wdGlvbnM+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyQnVpbGRlclBvcHVwQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyQnVpbGRlclBvcHVwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaWx0ZXJQYW5lbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlclBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZpbHRlckVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgY2xlYXJGaWx0ZXI/OiBzdHJpbmcsIGNyZWF0ZUZpbHRlcj86IHN0cmluZywgZmlsdGVyRW5hYmxlZEhpbnQ/OiBzdHJpbmcgfSwgdmlzaWJsZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaWx0ZXJSb3dDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJSb3dDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFwcGx5RmlsdGVyPzogc3RyaW5nLCBhcHBseUZpbHRlclRleHQ/OiBzdHJpbmcsIGJldHdlZW5FbmRUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuU3RhcnRUZXh0Pzogc3RyaW5nLCBvcGVyYXRpb25EZXNjcmlwdGlvbnM/OiB7IGJldHdlZW4/OiBzdHJpbmcsIGNvbnRhaW5zPzogc3RyaW5nLCBlbmRzV2l0aD86IHN0cmluZywgZXF1YWw/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuPzogc3RyaW5nLCBncmVhdGVyVGhhbk9yRXF1YWw/OiBzdHJpbmcsIGxlc3NUaGFuPzogc3RyaW5nLCBsZXNzVGhhbk9yRXF1YWw/OiBzdHJpbmcsIG5vdENvbnRhaW5zPzogc3RyaW5nLCBub3RFcXVhbD86IHN0cmluZywgc3RhcnRzV2l0aD86IHN0cmluZyB9LCByZXNldE9wZXJhdGlvblRleHQ/OiBzdHJpbmcsIHNob3dBbGxUZXh0Pzogc3RyaW5nLCBzaG93T3BlcmF0aW9uQ2hvb3Nlcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyU3luY0VuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJTeW5jRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyVmFsdWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmb2N1c2VkQ29sdW1uSW5kZXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c2VkQ29sdW1uSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNlZFJvd0VuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c2VkUm93RW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNlZFJvd0luZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNlZFJvd0luZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzZWRSb3dLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c2VkUm93S2V5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGdyb3VwaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZ3JvdXBpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93Q29sbGFwc2luZz86IGJvb2xlYW4sIGF1dG9FeHBhbmRBbGw/OiBib29sZWFuLCBjb250ZXh0TWVudUVuYWJsZWQ/OiBib29sZWFuLCBleHBhbmRNb2RlPzogc3RyaW5nLCB0ZXh0cz86IHsgZ3JvdXBCeVRoaXNDb2x1bW4/OiBzdHJpbmcsIGdyb3VwQ29udGludWVkTWVzc2FnZT86IHN0cmluZywgZ3JvdXBDb250aW51ZXNNZXNzYWdlPzogc3RyaW5nLCB1bmdyb3VwPzogc3RyaW5nLCB1bmdyb3VwQWxsPzogc3RyaW5nIH0gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBncm91cFBhbmVsQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZ3JvdXBQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dDb2x1bW5EcmFnZ2luZz86IGJvb2xlYW4sIGVtcHR5UGFuZWxUZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB8IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlYWRlckZpbHRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlYWRlckZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRleHRzPzogeyBjYW5jZWw/OiBzdHJpbmcsIGVtcHR5VmFsdWU/OiBzdHJpbmcsIG9rPzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlaWdodENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhpZ2hsaWdodENoYW5nZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaWdobGlnaHRDaGFuZ2VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoaW50Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGludENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBrZXlib2FyZE5hdmlnYXRpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBrZXlib2FyZE5hdmlnYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVkaXRPbktleVByZXNzPzogYm9vbGVhbiwgZW50ZXJLZXlBY3Rpb24/OiBzdHJpbmcsIGVudGVyS2V5RGlyZWN0aW9uPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUga2V5RXhwckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGtleUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBBcnJheTxzdHJpbmc+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGxvYWRQYW5lbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGxvYWRQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgaW5kaWNhdG9yU3JjPzogc3RyaW5nLCBzaGFkaW5nPzogYm9vbGVhbiwgc2hhZGluZ0NvbG9yPzogc3RyaW5nLCBzaG93SW5kaWNhdG9yPzogYm9vbGVhbiwgc2hvd1BhbmU/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1hc3RlckRldGFpbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1hc3RlckRldGFpbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYXV0b0V4cGFuZEFsbD86IGJvb2xlYW4sIGVuYWJsZWQ/OiBib29sZWFuLCB0ZW1wbGF0ZT86IGFueSB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG5vRGF0YVRleHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBub0RhdGFUZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBhZ2VyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGFnZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93ZWRQYWdlU2l6ZXM/OiBBcnJheTxudW1iZXI+LCBpbmZvVGV4dD86IHN0cmluZywgc2hvd0luZm8/OiBib29sZWFuLCBzaG93TmF2aWdhdGlvbkJ1dHRvbnM/OiBib29sZWFuLCBzaG93UGFnZVNpemVTZWxlY3Rvcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcGFnaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGFnaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBlbmFibGVkPzogYm9vbGVhbiwgcGFnZUluZGV4PzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlbW90ZU9wZXJhdGlvbnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZW1vdGVPcGVyYXRpb25zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHsgZmlsdGVyaW5nPzogYm9vbGVhbiwgZ3JvdXBpbmc/OiBib29sZWFuLCBncm91cFBhZ2luZz86IGJvb2xlYW4sIHBhZ2luZz86IGJvb2xlYW4sIHNvcnRpbmc/OiBib29sZWFuLCBzdW1tYXJ5PzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlbmRlckFzeW5jQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVuZGVyQXN5bmNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlcGFpbnRDaGFuZ2VzT25seUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlcGFpbnRDaGFuZ2VzT25seUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcm93QWx0ZXJuYXRpb25FbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcm93QWx0ZXJuYXRpb25FbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByb3dUZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJvd1RlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJ0bEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBydGxFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzY3JvbGxpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzY3JvbGxpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGNvbHVtblJlbmRlcmluZ01vZGU/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcsIHByZWxvYWRFbmFibGVkPzogYm9vbGVhbiwgcm93UmVuZGVyaW5nTW9kZT86IHN0cmluZywgc2Nyb2xsQnlDb250ZW50PzogYm9vbGVhbiwgc2Nyb2xsQnlUaHVtYj86IGJvb2xlYW4sIHNob3dTY3JvbGxiYXI/OiBzdHJpbmcsIHVzZU5hdGl2ZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWFyY2hQYW5lbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlYXJjaFBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBoaWdobGlnaHRDYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiwgaGlnaGxpZ2h0U2VhcmNoVGV4dD86IGJvb2xlYW4sIHBsYWNlaG9sZGVyPzogc3RyaW5nLCBzZWFyY2hWaXNpYmxlQ29sdW1uc09ubHk/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWxlY3RlZFJvd0tleXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZFJvd0tleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGlvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dTZWxlY3RBbGw/OiBib29sZWFuLCBkZWZlcnJlZD86IGJvb2xlYW4sIG1vZGU/OiBzdHJpbmcsIHNlbGVjdEFsbE1vZGU/OiBzdHJpbmcsIHNob3dDaGVja0JveGVzTW9kZT86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGlvbkZpbHRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbkZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Qm9yZGVyc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dCb3JkZXJzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Q29sdW1uSGVhZGVyc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dDb2x1bW5IZWFkZXJzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Q29sdW1uTGluZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93Q29sdW1uTGluZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dSb3dMaW5lc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dSb3dMaW5lc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc29ydEJ5R3JvdXBTdW1tYXJ5SW5mb0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNvcnRCeUdyb3VwU3VtbWFyeUluZm9DaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGdyb3VwQ29sdW1uPzogc3RyaW5nLCBzb3J0T3JkZXI/OiBzdHJpbmcsIHN1bW1hcnlJdGVtPzogbnVtYmVyIHwgc3RyaW5nIH0+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNvcnRpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzb3J0aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBjbGVhclRleHQ/OiBzdHJpbmcsIGRlc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBtb2RlPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc3RhdGVTdG9yaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3RhdGVTdG9yaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjdXN0b21Mb2FkPzogRnVuY3Rpb24sIGN1c3RvbVNhdmU/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIHNhdmluZ1RpbWVvdXQ/OiBudW1iZXIsIHN0b3JhZ2VLZXk/OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzdW1tYXJ5Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3VtbWFyeUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeT86IEZ1bmN0aW9uLCBncm91cEl0ZW1zPzogQXJyYXk8YW55IHwgeyBhbGlnbkJ5Q29sdW1uPzogYm9vbGVhbiwgY29sdW1uPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2hvd0luR3JvdXBGb290ZXI/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmFsdWVGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9PiwgcmVjYWxjdWxhdGVXaGlsZUVkaXRpbmc/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCB0ZXh0cz86IHsgYXZnPzogc3RyaW5nLCBhdmdPdGhlckNvbHVtbj86IHN0cmluZywgY291bnQ/OiBzdHJpbmcsIG1heD86IHN0cmluZywgbWF4T3RoZXJDb2x1bW4/OiBzdHJpbmcsIG1pbj86IHN0cmluZywgbWluT3RoZXJDb2x1bW4/OiBzdHJpbmcsIHN1bT86IHN0cmluZywgc3VtT3RoZXJDb2x1bW4/OiBzdHJpbmcgfSwgdG90YWxJdGVtcz86IEFycmF5PGFueSB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjb2x1bW4/OiBzdHJpbmcsIGNzc0NsYXNzPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2tpcEVtcHR5VmFsdWVzPzogYm9vbGVhbiwgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZhbHVlRm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfT4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0YWJJbmRleENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRhYkluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHR3b1dheUJpbmRpbmdFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdHdvV2F5QmluZGluZ0VuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpc2libGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB3aWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgd29yZFdyYXBFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd29yZFdyYXBFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG5cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlDb2x1bW5Db21wb25lbnQpXHJcbiAgICBnZXQgY29sdW1uc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlDb2x1bW5Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignY29sdW1ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Db21wb25lbnQpXHJcbiAgICBnZXQgc29ydEJ5R3JvdXBTdW1tYXJ5SW5mb0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc29ydEJ5R3JvdXBTdW1tYXJ5SW5mbycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNvcnRCeUdyb3VwU3VtbWFyeUluZm9DaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3NvcnRCeUdyb3VwU3VtbWFyeUluZm8nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYWRhcHRpdmVEZXRhaWxSb3dQcmVwYXJpbmcnLCBlbWl0OiAnb25BZGFwdGl2ZURldGFpbFJvd1ByZXBhcmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjZWxsQ2xpY2snLCBlbWl0OiAnb25DZWxsQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2VsbERibENsaWNrJywgZW1pdDogJ29uQ2VsbERibENsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NlbGxIb3ZlckNoYW5nZWQnLCBlbWl0OiAnb25DZWxsSG92ZXJDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NlbGxQcmVwYXJlZCcsIGVtaXQ6ICdvbkNlbGxQcmVwYXJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjb250ZW50UmVhZHknLCBlbWl0OiAnb25Db250ZW50UmVhZHknIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGV4dE1lbnVQcmVwYXJpbmcnLCBlbWl0OiAnb25Db250ZXh0TWVudVByZXBhcmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkYXRhRXJyb3JPY2N1cnJlZCcsIGVtaXQ6ICdvbkRhdGFFcnJvck9jY3VycmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdlZGl0aW5nU3RhcnQnLCBlbWl0OiAnb25FZGl0aW5nU3RhcnQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZWRpdG9yUHJlcGFyZWQnLCBlbWl0OiAnb25FZGl0b3JQcmVwYXJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdlZGl0b3JQcmVwYXJpbmcnLCBlbWl0OiAnb25FZGl0b3JQcmVwYXJpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZXhwb3J0ZWQnLCBlbWl0OiAnb25FeHBvcnRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRpbmcnLCBlbWl0OiAnb25FeHBvcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZmlsZVNhdmluZycsIGVtaXQ6ICdvbkZpbGVTYXZpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZm9jdXNlZENlbGxDaGFuZ2VkJywgZW1pdDogJ29uRm9jdXNlZENlbGxDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZvY3VzZWRDZWxsQ2hhbmdpbmcnLCBlbWl0OiAnb25Gb2N1c2VkQ2VsbENoYW5naW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZvY3VzZWRSb3dDaGFuZ2VkJywgZW1pdDogJ29uRm9jdXNlZFJvd0NoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZm9jdXNlZFJvd0NoYW5naW5nJywgZW1pdDogJ29uRm9jdXNlZFJvd0NoYW5naW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luaXRpYWxpemVkJywgZW1pdDogJ29uSW5pdGlhbGl6ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdE5ld1JvdycsIGVtaXQ6ICdvbkluaXROZXdSb3cnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAna2V5RG93bicsIGVtaXQ6ICdvbktleURvd24nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnb3B0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvbk9wdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93Q2xpY2snLCBlbWl0OiAnb25Sb3dDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dDb2xsYXBzZWQnLCBlbWl0OiAnb25Sb3dDb2xsYXBzZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93Q29sbGFwc2luZycsIGVtaXQ6ICdvblJvd0NvbGxhcHNpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93RGJsQ2xpY2snLCBlbWl0OiAnb25Sb3dEYmxDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dFeHBhbmRlZCcsIGVtaXQ6ICdvblJvd0V4cGFuZGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0V4cGFuZGluZycsIGVtaXQ6ICdvblJvd0V4cGFuZGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dJbnNlcnRlZCcsIGVtaXQ6ICdvblJvd0luc2VydGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0luc2VydGluZycsIGVtaXQ6ICdvblJvd0luc2VydGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dQcmVwYXJlZCcsIGVtaXQ6ICdvblJvd1ByZXBhcmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd1JlbW92ZWQnLCBlbWl0OiAnb25Sb3dSZW1vdmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd1JlbW92aW5nJywgZW1pdDogJ29uUm93UmVtb3ZpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93VXBkYXRlZCcsIGVtaXQ6ICdvblJvd1VwZGF0ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93VXBkYXRpbmcnLCBlbWl0OiAnb25Sb3dVcGRhdGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dWYWxpZGF0aW5nJywgZW1pdDogJ29uUm93VmFsaWRhdGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdzZWxlY3Rpb25DaGFuZ2VkJywgZW1pdDogJ29uU2VsZWN0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd0b29sYmFyUHJlcGFyaW5nJywgZW1pdDogJ29uVG9vbGJhclByZXBhcmluZycgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWNjZXNzS2V5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY3RpdmVTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FsbG93Q29sdW1uUmVvcmRlcmluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWxsb3dDb2x1bW5SZXNpemluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY2FjaGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjZWxsSGludEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtbkF1dG9XaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uQ2hvb3NlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uRml4aW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5IaWRpbmdFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5NaW5XaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uUmVzaXppbmdNb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5XaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VzdG9taXplQ29sdW1uc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VzdG9taXplRXhwb3J0RGF0YUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0YVNvdXJjZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc2FibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlZGl0aW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlbGVtZW50QXR0ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZXJyb3JSb3dFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdleHBvcnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlckJ1aWxkZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlckJ1aWxkZXJQb3B1cENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyUGFuZWxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlclJvd0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyU3luY0VuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlclZhbHVlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c2VkQ29sdW1uSW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzZWRSb3dFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c2VkUm93SW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzZWRSb3dLZXlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdncm91cGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBQYW5lbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVhZGVyRmlsdGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpZ2hsaWdodENoYW5nZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hvdmVyU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdrZXlib2FyZE5hdmlnYXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2tleUV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2xvYWRQYW5lbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWFzdGVyRGV0YWlsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdub0RhdGFUZXh0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYWdlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGFnaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZW1vdGVPcGVyYXRpb25zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZW5kZXJBc3luY0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVwYWludENoYW5nZXNPbmx5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyb3dBbHRlcm5hdGlvbkVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Jvd1RlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzY3JvbGxpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlYXJjaFBhbmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWxlY3RlZFJvd0tleXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0aW9uRmlsdGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93Qm9yZGVyc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0NvbHVtbkhlYWRlcnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dDb2x1bW5MaW5lc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd1Jvd0xpbmVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzb3J0QnlHcm91cFN1bW1hcnlJbmZvQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzb3J0aW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdGF0ZVN0b3JpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N1bW1hcnlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RhYkluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0d29XYXlCaW5kaW5nRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmlzaWJsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnd2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dvcmRXcmFwRW5hYmxlZENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pZGguc2V0SG9zdCh0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEeERhdGFHcmlkKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2NvbHVtbnMnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnZGF0YVNvdXJjZScsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdrZXlFeHByJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3NlbGVjdGVkUm93S2V5cycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdzb3J0QnlHcm91cFN1bW1hcnlJbmZvJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnY29sdW1ucycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdkYXRhU291cmNlJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2tleUV4cHInKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnc2VsZWN0ZWRSb3dLZXlzJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3NvcnRCeUdyb3VwU3VtbWFyeUluZm8nKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhvQ29sdW1uQ2hvb3Nlck1vZHVsZSxcclxuICAgIER4b0NvbHVtbkZpeGluZ01vZHVsZSxcclxuICAgIER4b1RleHRzTW9kdWxlLFxyXG4gICAgRHhpQ29sdW1uTW9kdWxlLFxyXG4gICAgRHhpQnV0dG9uTW9kdWxlLFxyXG4gICAgRHhvSGVhZGVyRmlsdGVyTW9kdWxlLFxyXG4gICAgRHhvTG9va3VwTW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvRm9ybUl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4aVZhbGlkYXRpb25SdWxlTW9kdWxlLFxyXG4gICAgRHhvRWRpdGluZ01vZHVsZSxcclxuICAgIER4b0Zvcm1Nb2R1bGUsXHJcbiAgICBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4b1RhYlBhbmVsT3B0aW9uc01vZHVsZSxcclxuICAgIER4aVRhYk1vZHVsZSxcclxuICAgIER4b0J1dHRvbk9wdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Qb3B1cE1vZHVsZSxcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0hpZGVNb2R1bGUsXHJcbiAgICBEeG9TaG93TW9kdWxlLFxyXG4gICAgRHhvUG9zaXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BdE1vZHVsZSxcclxuICAgIER4b0JvdW5kYXJ5T2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhvQ29sbGlzaW9uTW9kdWxlLFxyXG4gICAgRHhvTXlNb2R1bGUsXHJcbiAgICBEeG9PZmZzZXRNb2R1bGUsXHJcbiAgICBEeGlUb29sYmFySXRlbU1vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJNb2R1bGUsXHJcbiAgICBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUsXHJcbiAgICBEeGlGaWVsZE1vZHVsZSxcclxuICAgIER4b0ZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIER4b0dyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyQnVpbGRlclBvcHVwTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJSb3dNb2R1bGUsXHJcbiAgICBEeG9PcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Hcm91cGluZ01vZHVsZSxcclxuICAgIER4b0dyb3VwUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9LZXlib2FyZE5hdmlnYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9Mb2FkUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9NYXN0ZXJEZXRhaWxNb2R1bGUsXHJcbiAgICBEeG9QYWdlck1vZHVsZSxcclxuICAgIER4b1BhZ2luZ01vZHVsZSxcclxuICAgIER4b1JlbW90ZU9wZXJhdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9TY3JvbGxpbmdNb2R1bGUsXHJcbiAgICBEeG9TZWFyY2hQYW5lbE1vZHVsZSxcclxuICAgIER4b1NlbGVjdGlvbk1vZHVsZSxcclxuICAgIER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Nb2R1bGUsXHJcbiAgICBEeG9Tb3J0aW5nTW9kdWxlLFxyXG4gICAgRHhvU3RhdGVTdG9yaW5nTW9kdWxlLFxyXG4gICAgRHhvU3VtbWFyeU1vZHVsZSxcclxuICAgIER4aUdyb3VwSXRlbU1vZHVsZSxcclxuICAgIER4b1ZhbHVlRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhpVG90YWxJdGVtTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeERhdGFHcmlkQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeERhdGFHcmlkQ29tcG9uZW50LFxyXG4gICAgRHhvQ29sdW1uQ2hvb3Nlck1vZHVsZSxcclxuICAgIER4b0NvbHVtbkZpeGluZ01vZHVsZSxcclxuICAgIER4b1RleHRzTW9kdWxlLFxyXG4gICAgRHhpQ29sdW1uTW9kdWxlLFxyXG4gICAgRHhpQnV0dG9uTW9kdWxlLFxyXG4gICAgRHhvSGVhZGVyRmlsdGVyTW9kdWxlLFxyXG4gICAgRHhvTG9va3VwTW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvRm9ybUl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4aVZhbGlkYXRpb25SdWxlTW9kdWxlLFxyXG4gICAgRHhvRWRpdGluZ01vZHVsZSxcclxuICAgIER4b0Zvcm1Nb2R1bGUsXHJcbiAgICBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4b1RhYlBhbmVsT3B0aW9uc01vZHVsZSxcclxuICAgIER4aVRhYk1vZHVsZSxcclxuICAgIER4b0J1dHRvbk9wdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Qb3B1cE1vZHVsZSxcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0hpZGVNb2R1bGUsXHJcbiAgICBEeG9TaG93TW9kdWxlLFxyXG4gICAgRHhvUG9zaXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BdE1vZHVsZSxcclxuICAgIER4b0JvdW5kYXJ5T2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhvQ29sbGlzaW9uTW9kdWxlLFxyXG4gICAgRHhvTXlNb2R1bGUsXHJcbiAgICBEeG9PZmZzZXRNb2R1bGUsXHJcbiAgICBEeGlUb29sYmFySXRlbU1vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJNb2R1bGUsXHJcbiAgICBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUsXHJcbiAgICBEeGlGaWVsZE1vZHVsZSxcclxuICAgIER4b0ZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIER4b0dyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyQnVpbGRlclBvcHVwTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJSb3dNb2R1bGUsXHJcbiAgICBEeG9PcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Hcm91cGluZ01vZHVsZSxcclxuICAgIER4b0dyb3VwUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9LZXlib2FyZE5hdmlnYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9Mb2FkUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9NYXN0ZXJEZXRhaWxNb2R1bGUsXHJcbiAgICBEeG9QYWdlck1vZHVsZSxcclxuICAgIER4b1BhZ2luZ01vZHVsZSxcclxuICAgIER4b1JlbW90ZU9wZXJhdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9TY3JvbGxpbmdNb2R1bGUsXHJcbiAgICBEeG9TZWFyY2hQYW5lbE1vZHVsZSxcclxuICAgIER4b1NlbGVjdGlvbk1vZHVsZSxcclxuICAgIER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Nb2R1bGUsXHJcbiAgICBEeG9Tb3J0aW5nTW9kdWxlLFxyXG4gICAgRHhvU3RhdGVTdG9yaW5nTW9kdWxlLFxyXG4gICAgRHhvU3VtbWFyeU1vZHVsZSxcclxuICAgIER4aUdyb3VwSXRlbU1vZHVsZSxcclxuICAgIER4b1ZhbHVlRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhpVG90YWxJdGVtTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4RGF0YUdyaWRNb2R1bGUgeyB9XHJcbiJdfQ==