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
 * Build date: Thu Sep 19 2019
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
var DxTreeListComponent = (function (_super) {
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
    Object.defineProperty(DxTreeListComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "allowColumnReordering", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "allowColumnResizing", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "autoExpandAll", {
        get: /**
             * Specifies whether all rows are expanded initially.
             */
        function () {
            return this._getOption('autoExpandAll');
        },
        set: function (value) {
            this._setOption('autoExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "cacheEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "cellHintEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnFixing", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnHidingEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnMinWidth", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnResizingMode", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "columns", {
        get: /**
             * Configures columns.
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
    Object.defineProperty(DxTreeListComponent.prototype, "columnWidth", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "customizeColumns", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "dataStructure", {
        get: /**
             * Notifies the widget of the used data structure.
             */
        function () {
            return this._getOption('dataStructure');
        },
        set: function (value) {
            this._setOption('dataStructure', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "dateSerializationFormat", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "editing", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "errorRowEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "expandedRowKeys", {
        get: /**
             * Specifies keys of the initially expanded rows.
             */
        function () {
            return this._getOption('expandedRowKeys');
        },
        set: function (value) {
            this._setOption('expandedRowKeys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "expandNodesOnFiltering", {
        get: /**
             * Specifies whether nodes appear expanded or collapsed after filtering is applied.
             */
        function () {
            return this._getOption('expandNodesOnFiltering');
        },
        set: function (value) {
            this._setOption('expandNodesOnFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "filterBuilder", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "filterBuilderPopup", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "filterMode", {
        get: /**
             * Specifies whether to show filtered rows with ancestors and descendants (full branch) or with ancestors only.
             */
        function () {
            return this._getOption('filterMode');
        },
        set: function (value) {
            this._setOption('filterMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "filterPanel", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "filterRow", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "filterSyncEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "filterValue", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "focusedColumnIndex", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "focusedRowEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "focusedRowIndex", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "focusedRowKey", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "hasItemsExpr", {
        get: /**
             * Specifies which data field defines whether the node has children.
             */
        function () {
            return this._getOption('hasItemsExpr');
        },
        set: function (value) {
            this._setOption('hasItemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "headerFilter", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "height", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "highlightChanges", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "hint", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "itemsExpr", {
        get: /**
             * Specifies which data field contains nested items. Set this option when your data has a hierarchical structure.
             */
        function () {
            return this._getOption('itemsExpr');
        },
        set: function (value) {
            this._setOption('itemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "keyboardNavigation", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "keyExpr", {
        get: /**
             * Specifies which data field provides keys for nodes.
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
    Object.defineProperty(DxTreeListComponent.prototype, "loadPanel", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "noDataText", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "pager", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "paging", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "parentIdExpr", {
        get: /**
             * Specifies which data field provides parent keys.
             */
        function () {
            return this._getOption('parentIdExpr');
        },
        set: function (value) {
            this._setOption('parentIdExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "remoteOperations", {
        get: /**
             * Notifies the TreeList of the server's data processing operations. Applies only if data has a plain structure.
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
    Object.defineProperty(DxTreeListComponent.prototype, "renderAsync", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "repaintChangesOnly", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "rootValue", {
        get: /**
             * Specifies the root node's identifier. Applies if dataStructure is "plain".
             */
        function () {
            return this._getOption('rootValue');
        },
        set: function (value) {
            this._setOption('rootValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeListComponent.prototype, "rowAlternationEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "scrolling", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "searchPanel", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "selectedRowKeys", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "selection", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "showBorders", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "showColumnHeaders", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "showColumnLines", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "showRowLines", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "sorting", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "stateStoring", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "twoWayBindingEnabled", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "visible", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "width", {
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
    Object.defineProperty(DxTreeListComponent.prototype, "wordWrapEnabled", {
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
    DxTreeListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-tree-list',
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
    DxTreeListComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxTreeListComponent.propDecorators = {
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "allowColumnReordering": [{ type: Input },],
        "allowColumnResizing": [{ type: Input },],
        "autoExpandAll": [{ type: Input },],
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
        "dataSource": [{ type: Input },],
        "dataStructure": [{ type: Input },],
        "dateSerializationFormat": [{ type: Input },],
        "disabled": [{ type: Input },],
        "editing": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "errorRowEnabled": [{ type: Input },],
        "expandedRowKeys": [{ type: Input },],
        "expandNodesOnFiltering": [{ type: Input },],
        "filterBuilder": [{ type: Input },],
        "filterBuilderPopup": [{ type: Input },],
        "filterMode": [{ type: Input },],
        "filterPanel": [{ type: Input },],
        "filterRow": [{ type: Input },],
        "filterSyncEnabled": [{ type: Input },],
        "filterValue": [{ type: Input },],
        "focusedColumnIndex": [{ type: Input },],
        "focusedRowEnabled": [{ type: Input },],
        "focusedRowIndex": [{ type: Input },],
        "focusedRowKey": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "hasItemsExpr": [{ type: Input },],
        "headerFilter": [{ type: Input },],
        "height": [{ type: Input },],
        "highlightChanges": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "itemsExpr": [{ type: Input },],
        "keyboardNavigation": [{ type: Input },],
        "keyExpr": [{ type: Input },],
        "loadPanel": [{ type: Input },],
        "noDataText": [{ type: Input },],
        "pager": [{ type: Input },],
        "paging": [{ type: Input },],
        "parentIdExpr": [{ type: Input },],
        "remoteOperations": [{ type: Input },],
        "renderAsync": [{ type: Input },],
        "repaintChangesOnly": [{ type: Input },],
        "rootValue": [{ type: Input },],
        "rowAlternationEnabled": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "scrolling": [{ type: Input },],
        "searchPanel": [{ type: Input },],
        "selectedRowKeys": [{ type: Input },],
        "selection": [{ type: Input },],
        "showBorders": [{ type: Input },],
        "showColumnHeaders": [{ type: Input },],
        "showColumnLines": [{ type: Input },],
        "showRowLines": [{ type: Input },],
        "sorting": [{ type: Input },],
        "stateStoring": [{ type: Input },],
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
        "onFocusedCellChanged": [{ type: Output },],
        "onFocusedCellChanging": [{ type: Output },],
        "onFocusedRowChanged": [{ type: Output },],
        "onFocusedRowChanging": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onInitNewRow": [{ type: Output },],
        "onKeyDown": [{ type: Output },],
        "onNodesInitialized": [{ type: Output },],
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
        "autoExpandAllChange": [{ type: Output },],
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
        "dataSourceChange": [{ type: Output },],
        "dataStructureChange": [{ type: Output },],
        "dateSerializationFormatChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "editingChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "errorRowEnabledChange": [{ type: Output },],
        "expandedRowKeysChange": [{ type: Output },],
        "expandNodesOnFilteringChange": [{ type: Output },],
        "filterBuilderChange": [{ type: Output },],
        "filterBuilderPopupChange": [{ type: Output },],
        "filterModeChange": [{ type: Output },],
        "filterPanelChange": [{ type: Output },],
        "filterRowChange": [{ type: Output },],
        "filterSyncEnabledChange": [{ type: Output },],
        "filterValueChange": [{ type: Output },],
        "focusedColumnIndexChange": [{ type: Output },],
        "focusedRowEnabledChange": [{ type: Output },],
        "focusedRowIndexChange": [{ type: Output },],
        "focusedRowKeyChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "hasItemsExprChange": [{ type: Output },],
        "headerFilterChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "highlightChangesChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "itemsExprChange": [{ type: Output },],
        "keyboardNavigationChange": [{ type: Output },],
        "keyExprChange": [{ type: Output },],
        "loadPanelChange": [{ type: Output },],
        "noDataTextChange": [{ type: Output },],
        "pagerChange": [{ type: Output },],
        "pagingChange": [{ type: Output },],
        "parentIdExprChange": [{ type: Output },],
        "remoteOperationsChange": [{ type: Output },],
        "renderAsyncChange": [{ type: Output },],
        "repaintChangesOnlyChange": [{ type: Output },],
        "rootValueChange": [{ type: Output },],
        "rowAlternationEnabledChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "scrollingChange": [{ type: Output },],
        "searchPanelChange": [{ type: Output },],
        "selectedRowKeysChange": [{ type: Output },],
        "selectionChange": [{ type: Output },],
        "showBordersChange": [{ type: Output },],
        "showColumnHeadersChange": [{ type: Output },],
        "showColumnLinesChange": [{ type: Output },],
        "showRowLinesChange": [{ type: Output },],
        "sortingChange": [{ type: Output },],
        "stateStoringChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "twoWayBindingEnabledChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "wordWrapEnabledChange": [{ type: Output },],
        "columnsChildren": [{ type: ContentChildren, args: [DxiColumnComponent,] },],
    };
    return DxTreeListComponent;
}(DxComponent));
export { DxTreeListComponent };
var DxTreeListModule = (function () {
    function DxTreeListModule() {
    }
    DxTreeListModule.decorators = [
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
                },] },
    ];
    return DxTreeListModule;
}());
export { DxTreeListModule };
//# sourceMappingURL=tree-list.js.map