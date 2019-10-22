import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxTreeList from 'devextreme/ui/tree_list';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
var DxTreeListComponent = /** @class */ (function (_super) {
    __extends(DxTreeListComponent, _super);
    function DxTreeListComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTreeListComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "allowColumnReordering", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "allowColumnResizing", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "autoExpandAll", {
        /**
         * Specifies whether all rows are expanded initially.
         */
        get: function () {
            return this._getOption('autoExpandAll');
        },
        set: function (value) {
            this._setOption('autoExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "cacheEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "cellHintEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnAutoWidth", {
        get: function () {
            return this._getOption('columnAutoWidth');
        },
        set: function (value) {
            this._setOption('columnAutoWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "columnChooser", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnFixing", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnHidingEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnMinWidth", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnResizingMode", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columns", {
        /**
         * Configures columns.
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnWidth", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "customizeColumns", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "dataStructure", {
        /**
         * Notifies the widget of the used data structure.
         */
        get: function () {
            return this._getOption('dataStructure');
        },
        set: function (value) {
            this._setOption('dataStructure', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "dateSerializationFormat", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "editing", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "errorRowEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "expandedRowKeys", {
        /**
         * Specifies keys of the initially expanded rows.
         */
        get: function () {
            return this._getOption('expandedRowKeys');
        },
        set: function (value) {
            this._setOption('expandedRowKeys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "expandNodesOnFiltering", {
        /**
         * Specifies whether nodes appear expanded or collapsed after filtering is applied.
         */
        get: function () {
            return this._getOption('expandNodesOnFiltering');
        },
        set: function (value) {
            this._setOption('expandNodesOnFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "filterBuilder", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "filterBuilderPopup", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "filterMode", {
        /**
         * Specifies whether to show filtered rows with ancestors and descendants (full branch) or with ancestors only.
         */
        get: function () {
            return this._getOption('filterMode');
        },
        set: function (value) {
            this._setOption('filterMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "filterPanel", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "filterRow", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "filterSyncEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "filterValue", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "focusedColumnIndex", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "focusedRowEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "focusedRowIndex", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "focusedRowKey", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "hasItemsExpr", {
        /**
         * Specifies which data field defines whether the node has children.
         */
        get: function () {
            return this._getOption('hasItemsExpr');
        },
        set: function (value) {
            this._setOption('hasItemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "headerFilter", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "height", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "highlightChanges", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "hint", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "itemsExpr", {
        /**
         * Specifies which data field contains nested items. Set this option when your data has a hierarchical structure.
         */
        get: function () {
            return this._getOption('itemsExpr');
        },
        set: function (value) {
            this._setOption('itemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "keyboardNavigation", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "keyExpr", {
        /**
         * Specifies which data field provides keys for nodes.
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
    Object.defineProperty(DxTreeListComponent.prototype, "loadPanel", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "noDataText", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "pager", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "paging", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "parentIdExpr", {
        /**
         * Specifies which data field provides parent keys.
         */
        get: function () {
            return this._getOption('parentIdExpr');
        },
        set: function (value) {
            this._setOption('parentIdExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "remoteOperations", {
        /**
         * Notifies the TreeList of the server's data processing operations. Applies only if data has a plain structure.
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
    Object.defineProperty(DxTreeListComponent.prototype, "renderAsync", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "repaintChangesOnly", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "rootValue", {
        /**
         * Specifies the root node's identifier. Applies if dataStructure is "plain".
         */
        get: function () {
            return this._getOption('rootValue');
        },
        set: function (value) {
            this._setOption('rootValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "rowAlternationEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "scrolling", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "searchPanel", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "selectedRowKeys", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "selection", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "showBorders", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "showColumnHeaders", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "showColumnLines", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "showRowLines", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "sorting", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "stateStoring", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "twoWayBindingEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "visible", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "width", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "wordWrapEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnsChildren", {
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this.setChildren('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTreeListComponent.prototype._createInstance = function (element, options) {
        return new DxTreeList(element, options);
    };
    DxTreeListComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTreeListComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('columns', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('expandedRowKeys', changes);
        this.setupChanges('selectedRowKeys', changes);
    };
    DxTreeListComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxTreeListComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('columns');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('expandedRowKeys');
        this._idh.doCheck('selectedRowKeys');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxTreeListComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxTreeListComponent.ctorParameters = function () { return [
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
    return DxTreeListComponent;
}(DxComponent));
var DxTreeListModule = /** @class */ (function () {
    function DxTreeListModule() {
    }
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
    return DxTreeListModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxTreeListComponent, DxTreeListModule };
//# sourceMappingURL=devextreme-angular-ui-tree-list.js.map
