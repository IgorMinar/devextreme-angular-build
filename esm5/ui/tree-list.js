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
var DxTreeListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxTreeListComponent, _super);
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
    return DxTreeListComponent;
}(DxComponent));
export { DxTreeListComponent };
var DxTreeListModule = /** @class */ (function () {
    function DxTreeListModule() {
    }
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
    return DxTreeListModule;
}());
export { DxTreeListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1saXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvdHJlZS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFZcEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFJWixlQUFlLEVBQ2YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sVUFBVSxNQUFNLDJCQUEyQixDQUFDO0FBRW5ELE9BQU8sVUFBVSxNQUFNLHlCQUF5QixDQUFDO0FBR2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxF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bUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsbUJBQW1CO2dCQUNuQixzQkFBc0I7Z0JBQ3RCLHFCQUFxQjtnQkFDckIsY0FBYztnQkFDZCxlQUFlO2dCQUNmLGVBQWU7Z0JBQ2YscUJBQXFCO2dCQUNyQixlQUFlO2dCQUNmLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLHVCQUF1QjtnQkFDdkIsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLHlCQUF5QjtnQkFDekIsYUFBYTtnQkFDYix3QkFBd0I7Z0JBQ3hCLFlBQVk7Z0JBQ1osc0JBQXNCO2dCQUN0QixjQUFjO2dCQUNkLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsV0FBVztnQkFDWCx1QkFBdUI7Z0JBQ3ZCLGtCQUFrQjtnQkFDbEIsV0FBVztnQkFDWCxlQUFlO2dCQUNmLG9CQUFvQjtnQkFDcEIsc0JBQXNCO2dCQUN0Qix3QkFBd0I7Z0JBQ3hCLGNBQWM7Z0JBQ2Qsb0NBQW9DO2dCQUNwQyxtQ0FBbUM7Z0JBQ25DLDJCQUEyQjtnQkFDM0Isb0JBQW9CO2dCQUNwQixrQkFBa0I7Z0JBQ2xCLDhCQUE4QjtnQkFDOUIsMkJBQTJCO2dCQUMzQixrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZix5QkFBeUI7Z0JBQ3pCLGtCQUFrQjtnQkFDbEIsb0JBQW9CO2dCQUNwQixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtnQkFDaEIscUJBQXFCO2dCQUNyQixnQkFBZ0I7YUFDakI7U0FDRixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhUcmVlTGlzdCBmcm9tICdkZXZleHRyZW1lL3VpL3RyZWVfbGlzdCc7XHJcblxyXG5cclxuaW1wb3J0IHsgRHhDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVIb3N0IH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZS1ob3N0JztcclxuaW1wb3J0IHsgRHhJbnRlZ3JhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvaW50ZWdyYXRpb24nO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBXYXRjaGVySGVscGVyIH0gZnJvbSAnLi4vY29yZS93YXRjaGVyLWhlbHBlcic7XHJcbmltcG9ydCB7IEl0ZXJhYmxlRGlmZmVySGVscGVyIH0gZnJvbSAnLi4vY29yZS9pdGVyYWJsZS1kaWZmZXItaGVscGVyJztcclxuXHJcbmltcG9ydCB7IER4b0NvbHVtbkNob29zZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb2x1bW4tY2hvb3Nlcic7XHJcbmltcG9ydCB7IER4b0NvbHVtbkZpeGluZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbHVtbi1maXhpbmcnO1xyXG5pbXBvcnQgeyBEeG9UZXh0c01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RleHRzJztcclxuaW1wb3J0IHsgRHhpQ29sdW1uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29sdW1uLWR4aSc7XHJcbmltcG9ydCB7IER4aUJ1dHRvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2J1dHRvbi1keGknO1xyXG5pbXBvcnQgeyBEeG9IZWFkZXJGaWx0ZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9oZWFkZXItZmlsdGVyJztcclxuaW1wb3J0IHsgRHhvTG9va3VwTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbG9va3VwJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9ybWF0JztcclxuaW1wb3J0IHsgRHhvRm9ybUl0ZW1Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mb3JtLWl0ZW0nO1xyXG5pbXBvcnQgeyBEeG9MYWJlbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2xhYmVsJztcclxuaW1wb3J0IHsgRHhpVmFsaWRhdGlvblJ1bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC92YWxpZGF0aW9uLXJ1bGUtZHhpJztcclxuaW1wb3J0IHsgRHhvRWRpdGluZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2VkaXRpbmcnO1xyXG5pbXBvcnQgeyBEeG9Gb3JtTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9ybSc7XHJcbmltcG9ydCB7IER4b0NvbENvdW50QnlTY3JlZW5Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb2wtY291bnQtYnktc2NyZWVuJztcclxuaW1wb3J0IHsgRHhpSXRlbU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2l0ZW0tZHhpJztcclxuaW1wb3J0IHsgRHhvVGFiUGFuZWxPcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdGFiLXBhbmVsLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBEeGlUYWJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC90YWItZHhpJztcclxuaW1wb3J0IHsgRHhvQnV0dG9uT3B0aW9uc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2J1dHRvbi1vcHRpb25zJztcclxuaW1wb3J0IHsgRHhvUG9wdXBNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9wb3B1cCc7XHJcbmltcG9ydCB7IER4b0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IER4b0hpZGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9oaWRlJztcclxuaW1wb3J0IHsgRHhvU2hvd01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Nob3cnO1xyXG5pbXBvcnQgeyBEeG9Qb3NpdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Bvc2l0aW9uJztcclxuaW1wb3J0IHsgRHhvQXRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hdCc7XHJcbmltcG9ydCB7IER4b0JvdW5kYXJ5T2Zmc2V0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYm91bmRhcnktb2Zmc2V0JztcclxuaW1wb3J0IHsgRHhvQ29sbGlzaW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29sbGlzaW9uJztcclxuaW1wb3J0IHsgRHhvTXlNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9teSc7XHJcbmltcG9ydCB7IER4b09mZnNldE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL29mZnNldCc7XHJcbmltcG9ydCB7IER4aVRvb2xiYXJJdGVtTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdG9vbGJhci1pdGVtLWR4aSc7XHJcbmltcG9ydCB7IER4b0ZpbHRlckJ1aWxkZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9maWx0ZXItYnVpbGRlcic7XHJcbmltcG9ydCB7IER4aUN1c3RvbU9wZXJhdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2N1c3RvbS1vcGVyYXRpb24tZHhpJztcclxuaW1wb3J0IHsgRHhpRmllbGRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9maWVsZC1keGknO1xyXG5pbXBvcnQgeyBEeG9GaWx0ZXJPcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9maWx0ZXItb3BlcmF0aW9uLWRlc2NyaXB0aW9ucyc7XHJcbmltcG9ydCB7IER4b0dyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZ3JvdXAtb3BlcmF0aW9uLWRlc2NyaXB0aW9ucyc7XHJcbmltcG9ydCB7IER4b0ZpbHRlckJ1aWxkZXJQb3B1cE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ZpbHRlci1idWlsZGVyLXBvcHVwJztcclxuaW1wb3J0IHsgRHhvRmlsdGVyUGFuZWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9maWx0ZXItcGFuZWwnO1xyXG5pbXBvcnQgeyBEeG9GaWx0ZXJSb3dNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9maWx0ZXItcm93JztcclxuaW1wb3J0IHsgRHhvT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvb3BlcmF0aW9uLWRlc2NyaXB0aW9ucyc7XHJcbmltcG9ydCB7IER4b0tleWJvYXJkTmF2aWdhdGlvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2tleWJvYXJkLW5hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBEeG9Mb2FkUGFuZWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sb2FkLXBhbmVsJztcclxuaW1wb3J0IHsgRHhvUGFnZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9wYWdlcic7XHJcbmltcG9ydCB7IER4b1BhZ2luZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3BhZ2luZyc7XHJcbmltcG9ydCB7IER4b1JlbW90ZU9wZXJhdGlvbnNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9yZW1vdGUtb3BlcmF0aW9ucyc7XHJcbmltcG9ydCB7IER4b1Njcm9sbGluZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Njcm9sbGluZyc7XHJcbmltcG9ydCB7IER4b1NlYXJjaFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2VhcmNoLXBhbmVsJztcclxuaW1wb3J0IHsgRHhvU2VsZWN0aW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2VsZWN0aW9uJztcclxuaW1wb3J0IHsgRHhvU29ydGluZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NvcnRpbmcnO1xyXG5pbXBvcnQgeyBEeG9TdGF0ZVN0b3JpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGF0ZS1zdG9yaW5nJztcclxuXHJcbmltcG9ydCB7IER4aUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vbmVzdGVkL2NvbHVtbi1keGknO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUcmVlTGlzdCBpcyBhIHdpZGdldCB0aGF0IHJlcHJlc2VudHMgZGF0YSBmcm9tIGEgbG9jYWwgb3IgcmVtb3RlIHNvdXJjZSBpbiB0aGUgZm9ybSBvZiBhIG11bHRpLWNvbHVtbiB0cmVlIHZpZXcuIFRoaXMgd2lkZ2V0IG9mZmVycyBzdWNoIGZlYXR1cmVzIGFzIHNvcnRpbmcsIGZpbHRlcmluZywgZWRpdGluZywgc2VsZWN0aW9uLCBldGMuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHgtdHJlZS1saXN0JyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICBJdGVyYWJsZURpZmZlckhlbHBlclxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhUcmVlTGlzdENvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgaW5zdGFuY2U6IER4VHJlZUxpc3Q7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBzaG9ydGN1dCBrZXkgdGhhdCBzZXRzIGZvY3VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWNjZXNzS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWNjZXNzS2V5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWNjZXNzS2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjY2Vzc0tleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGludGVyYWN0aW5nIHdpdGggYSB1c2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBhY3RpdmVTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhIHVzZXIgY2FuIHJlb3JkZXIgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0NvbHVtblJlb3JkZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dDb2x1bW5SZW9yZGVyaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dDb2x1bW5SZW9yZGVyaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0NvbHVtblJlb3JkZXJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgYSB1c2VyIGNhbiByZXNpemUgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0NvbHVtblJlc2l6aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93Q29sdW1uUmVzaXppbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0NvbHVtblJlc2l6aW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0NvbHVtblJlc2l6aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGFsbCByb3dzIGFyZSBleHBhbmRlZCBpbml0aWFsbHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXV0b0V4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhdXRvRXhwYW5kQWxsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXV0b0V4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXV0b0V4cGFuZEFsbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBkYXRhIHNob3VsZCBiZSBjYWNoZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2FjaGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NhY2hlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhY2hlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FjaGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZXMgYSBoaW50IHRoYXQgYXBwZWFycyB3aGVuIGEgdXNlciBob3ZlcnMgdGhlIG1vdXNlIHBvaW50ZXIgb3ZlciBhIGNlbGwgd2l0aCB0cnVuY2F0ZWQgY29udGVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjZWxsSGludEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2VsbEhpbnRFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2VsbEhpbnRFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjZWxsSGludEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgY29sdW1ucyBzaG91bGQgYWRqdXN0IHRoZWlyIHdpZHRocyB0byB0aGUgY29udGVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5BdXRvV2lkdGgoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uQXV0b1dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uQXV0b1dpZHRoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5BdXRvV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgY29sdW1uIGNob29zZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uQ2hvb3NlcigpOiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgZW1wdHlQYW5lbFRleHQ/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIG1vZGU/OiBzdHJpbmcsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRpdGxlPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5DaG9vc2VyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uQ2hvb3Nlcih2YWx1ZTogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGVtcHR5UGFuZWxUZXh0Pzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBtb2RlPzogc3RyaW5nLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCB0aXRsZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uQ2hvb3NlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIGNvbHVtbiBmaXhpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uRml4aW5nKCk6IHsgZW5hYmxlZD86IGJvb2xlYW4sIHRleHRzPzogeyBmaXg/OiBzdHJpbmcsIGxlZnRQb3NpdGlvbj86IHN0cmluZywgcmlnaHRQb3NpdGlvbj86IHN0cmluZywgdW5maXg/OiBzdHJpbmcgfSB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5GaXhpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5GaXhpbmcodmFsdWU6IHsgZW5hYmxlZD86IGJvb2xlYW4sIHRleHRzPzogeyBmaXg/OiBzdHJpbmcsIGxlZnRQb3NpdGlvbj86IHN0cmluZywgcmlnaHRQb3NpdGlvbj86IHN0cmluZywgdW5maXg/OiBzdHJpbmcgfSB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5GaXhpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBzaG91bGQgaGlkZSBjb2x1bW5zIHRvIGFkYXB0IHRvIHRoZSBzY3JlZW4gb3IgY29udGFpbmVyIHNpemUuIElnbm9yZWQgaWYgYWxsb3dDb2x1bW5SZXNpemluZyBpcyB0cnVlIGFuZCBjb2x1bW5SZXNpemluZ01vZGUgaXMgXCJ3aWRnZXRcIi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5IaWRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbkhpZGluZ0VuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5IaWRpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5IaWRpbmdFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbWluaW11bSB3aWR0aCBvZiBjb2x1bW5zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbk1pbldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uTWluV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5NaW5XaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5NaW5XaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgaG93IHRoZSB3aWRnZXQgcmVzaXplcyBjb2x1bW5zLiBBcHBsaWVzIG9ubHkgaWYgYWxsb3dDb2x1bW5SZXNpemluZyBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtblJlc2l6aW5nTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtblJlc2l6aW5nTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtblJlc2l6aW5nTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5SZXNpemluZ01vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBjb2x1bW5zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbnMoKTogQXJyYXk8RGV2RXhwcmVzcy51aS5keFRyZWVMaXN0Q29sdW1uIHwgc3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbnModmFsdWU6IEFycmF5PERldkV4cHJlc3MudWkuZHhUcmVlTGlzdENvbHVtbiB8IHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWR0aCBmb3IgYWxsIGRhdGEgY29sdW1ucy4gSGFzIGEgbG93ZXIgcHJpb3JpdHkgdGhhbiB0aGUgY29sdW1uLndpZHRoIG9wdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5XaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbldpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9taXplcyBjb2x1bW5zIGFmdGVyIHRoZXkgYXJlIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9taXplQ29sdW1ucygpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9taXplQ29sdW1ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZUNvbHVtbnModmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVDb2x1bW5zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmRzIHRoZSB3aWRnZXQgdG8gZGF0YS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhU291cmNlKCk6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVNvdXJjZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFTb3VyY2UodmFsdWU6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVNvdXJjZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGUgd2lkZ2V0IG9mIHRoZSB1c2VkIGRhdGEgc3RydWN0dXJlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFTdHJ1Y3R1cmUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhU3RydWN0dXJlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YVN0cnVjdHVyZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhU3RydWN0dXJlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBkYXRlLXRpbWUgdmFsdWVzJyBzZXJpYWxpemF0aW9uIGZvcm1hdC4gVXNlIGl0IG9ubHkgaWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoZSBkYXRhU291cmNlIGF0IGRlc2lnbiB0aW1lLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHJlc3BvbmRzIHRvIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBlZGl0aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVkaXRpbmcoKTogeyBhbGxvd0FkZGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgYWxsb3dEZWxldGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgYWxsb3dVcGRhdGluZz86IGJvb2xlYW4gfCBGdW5jdGlvbiwgZm9ybT86IERldkV4cHJlc3MudWkuZHhGb3JtT3B0aW9ucywgbW9kZT86IHN0cmluZywgcG9wdXA/OiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zLCByZWZyZXNoTW9kZT86IHN0cmluZywgc2VsZWN0VGV4dE9uRWRpdFN0YXJ0PzogYm9vbGVhbiwgc3RhcnRFZGl0QWN0aW9uPzogc3RyaW5nLCB0ZXh0cz86IHsgYWRkUm93Pzogc3RyaW5nLCBhZGRSb3dUb05vZGU/OiBzdHJpbmcsIGNhbmNlbEFsbENoYW5nZXM/OiBzdHJpbmcsIGNhbmNlbFJvd0NoYW5nZXM/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVNZXNzYWdlPzogc3RyaW5nLCBjb25maXJtRGVsZXRlVGl0bGU/OiBzdHJpbmcsIGRlbGV0ZVJvdz86IHN0cmluZywgZWRpdFJvdz86IHN0cmluZywgc2F2ZUFsbENoYW5nZXM/OiBzdHJpbmcsIHNhdmVSb3dDaGFuZ2VzPzogc3RyaW5nLCB1bmRlbGV0ZVJvdz86IHN0cmluZywgdmFsaWRhdGlvbkNhbmNlbENoYW5nZXM/OiBzdHJpbmcgfSwgdXNlSWNvbnM/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VkaXRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBlZGl0aW5nKHZhbHVlOiB7IGFsbG93QWRkaW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBhbGxvd0RlbGV0aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBhbGxvd1VwZGF0aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBmb3JtPzogRGV2RXhwcmVzcy51aS5keEZvcm1PcHRpb25zLCBtb2RlPzogc3RyaW5nLCBwb3B1cD86IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMsIHJlZnJlc2hNb2RlPzogc3RyaW5nLCBzZWxlY3RUZXh0T25FZGl0U3RhcnQ/OiBib29sZWFuLCBzdGFydEVkaXRBY3Rpb24/OiBzdHJpbmcsIHRleHRzPzogeyBhZGRSb3c/OiBzdHJpbmcsIGFkZFJvd1RvTm9kZT86IHN0cmluZywgY2FuY2VsQWxsQ2hhbmdlcz86IHN0cmluZywgY2FuY2VsUm93Q2hhbmdlcz86IHN0cmluZywgY29uZmlybURlbGV0ZU1lc3NhZ2U/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVUaXRsZT86IHN0cmluZywgZGVsZXRlUm93Pzogc3RyaW5nLCBlZGl0Um93Pzogc3RyaW5nLCBzYXZlQWxsQ2hhbmdlcz86IHN0cmluZywgc2F2ZVJvd0NoYW5nZXM/OiBzdHJpbmcsIHVuZGVsZXRlUm93Pzogc3RyaW5nLCB2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcz86IHN0cmluZyB9LCB1c2VJY29ucz86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWRpdGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdG8gc2hvdyB0aGUgZXJyb3Igcm93LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVycm9yUm93RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlcnJvclJvd0VuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBlcnJvclJvd0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Vycm9yUm93RW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMga2V5cyBvZiB0aGUgaW5pdGlhbGx5IGV4cGFuZGVkIHJvd3MuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXhwYW5kZWRSb3dLZXlzKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2V4cGFuZGVkUm93S2V5cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4cGFuZGVkUm93S2V5cyh2YWx1ZTogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwYW5kZWRSb3dLZXlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG5vZGVzIGFwcGVhciBleHBhbmRlZCBvciBjb2xsYXBzZWQgYWZ0ZXIgZmlsdGVyaW5nIGlzIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXhwYW5kTm9kZXNPbkZpbHRlcmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdleHBhbmROb2Rlc09uRmlsdGVyaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwYW5kTm9kZXNPbkZpbHRlcmluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwYW5kTm9kZXNPbkZpbHRlcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBpbnRlZ3JhdGVkIGZpbHRlciBidWlsZGVyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlckJ1aWxkZXIoKTogRGV2RXhwcmVzcy51aS5keEZpbHRlckJ1aWxkZXJPcHRpb25zIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJCdWlsZGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyQnVpbGRlcih2YWx1ZTogRGV2RXhwcmVzcy51aS5keEZpbHRlckJ1aWxkZXJPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJCdWlsZGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIHBvcHVwIGluIHdoaWNoIHRoZSBpbnRlZ3JhdGVkIGZpbHRlciBidWlsZGVyIGlzIHNob3duLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlckJ1aWxkZXJQb3B1cCgpOiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJCdWlsZGVyUG9wdXAnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJCdWlsZGVyUG9wdXAodmFsdWU6IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlckJ1aWxkZXJQb3B1cCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBzaG93IGZpbHRlcmVkIHJvd3Mgd2l0aCBhbmNlc3RvcnMgYW5kIGRlc2NlbmRhbnRzIChmdWxsIGJyYW5jaCkgb3Igd2l0aCBhbmNlc3RvcnMgb25seS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlck1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBmaWx0ZXIgcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyUGFuZWwoKTogeyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZpbHRlckVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgY2xlYXJGaWx0ZXI/OiBzdHJpbmcsIGNyZWF0ZUZpbHRlcj86IHN0cmluZywgZmlsdGVyRW5hYmxlZEhpbnQ/OiBzdHJpbmcgfSwgdmlzaWJsZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyUGFuZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJQYW5lbCh2YWx1ZTogeyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZpbHRlckVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgY2xlYXJGaWx0ZXI/OiBzdHJpbmcsIGNyZWF0ZUZpbHRlcj86IHN0cmluZywgZmlsdGVyRW5hYmxlZEhpbnQ/OiBzdHJpbmcgfSwgdmlzaWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyUGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgZmlsdGVyIHJvdy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJSb3coKTogeyBhcHBseUZpbHRlcj86IHN0cmluZywgYXBwbHlGaWx0ZXJUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuRW5kVGV4dD86IHN0cmluZywgYmV0d2VlblN0YXJ0VGV4dD86IHN0cmluZywgb3BlcmF0aW9uRGVzY3JpcHRpb25zPzogeyBiZXR3ZWVuPzogc3RyaW5nLCBjb250YWlucz86IHN0cmluZywgZW5kc1dpdGg/OiBzdHJpbmcsIGVxdWFsPzogc3RyaW5nLCBncmVhdGVyVGhhbj86IHN0cmluZywgZ3JlYXRlclRoYW5PckVxdWFsPzogc3RyaW5nLCBsZXNzVGhhbj86IHN0cmluZywgbGVzc1RoYW5PckVxdWFsPzogc3RyaW5nLCBub3RDb250YWlucz86IHN0cmluZywgbm90RXF1YWw/OiBzdHJpbmcsIHN0YXJ0c1dpdGg/OiBzdHJpbmcgfSwgcmVzZXRPcGVyYXRpb25UZXh0Pzogc3RyaW5nLCBzaG93QWxsVGV4dD86IHN0cmluZywgc2hvd09wZXJhdGlvbkNob29zZXI/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJSb3cnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJSb3codmFsdWU6IHsgYXBwbHlGaWx0ZXI/OiBzdHJpbmcsIGFwcGx5RmlsdGVyVGV4dD86IHN0cmluZywgYmV0d2VlbkVuZFRleHQ/OiBzdHJpbmcsIGJldHdlZW5TdGFydFRleHQ/OiBzdHJpbmcsIG9wZXJhdGlvbkRlc2NyaXB0aW9ucz86IHsgYmV0d2Vlbj86IHN0cmluZywgY29udGFpbnM/OiBzdHJpbmcsIGVuZHNXaXRoPzogc3RyaW5nLCBlcXVhbD86IHN0cmluZywgZ3JlYXRlclRoYW4/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuT3JFcXVhbD86IHN0cmluZywgbGVzc1RoYW4/OiBzdHJpbmcsIGxlc3NUaGFuT3JFcXVhbD86IHN0cmluZywgbm90Q29udGFpbnM/OiBzdHJpbmcsIG5vdEVxdWFsPzogc3RyaW5nLCBzdGFydHNXaXRoPzogc3RyaW5nIH0sIHJlc2V0T3BlcmF0aW9uVGV4dD86IHN0cmluZywgc2hvd0FsbFRleHQ/OiBzdHJpbmcsIHNob3dPcGVyYXRpb25DaG9vc2VyPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyUm93JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIHN5bmNocm9uaXplIHRoZSBmaWx0ZXIgcm93LCBoZWFkZXIgZmlsdGVyLCBhbmQgZmlsdGVyIGJ1aWxkZXIuIFRoZSBzeW5jaHJvbml6ZWQgZmlsdGVyIGV4cHJlc3Npb24gaXMgc3RvcmVkIGluIHRoZSBmaWx0ZXJWYWx1ZSBvcHRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyU3luY0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyU3luY0VuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJTeW5jRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyU3luY0VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgZmlsdGVyIGV4cHJlc3Npb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyVmFsdWUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJWYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlclZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlclZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgaW5kZXggb2YgdGhlIGNvbHVtbiBmb2N1c2VkIGluaXRpYWxseSBvciBjdXJyZW50bHkgaW4gdGhlIGRhdGEgcm93IGFyZWEuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNlZENvbHVtbkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNlZENvbHVtbkluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNlZENvbHVtbkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzZWRDb2x1bW5JbmRleCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZm9jdXNlZCByb3cgZmVhdHVyZSBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzZWRSb3dFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzZWRSb3dFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNlZFJvd0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzZWRSb3dFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgaW5pdGlhbGx5IG9yIGN1cnJlbnRseSBmb2N1c2VkIGdyaWQgcm93J3MgaW5kZXguIFVzZSBpdCB3aGVuIGZvY3VzZWRSb3dFbmFibGVkIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNlZFJvd0luZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNlZFJvd0luZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNlZFJvd0luZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzZWRSb3dJbmRleCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgaW5pdGlhbGx5IG9yIGN1cnJlbnRseSBmb2N1c2VkIGdyaWQgcm93J3Mga2V5LiBVc2UgaXQgd2hlbiBmb2N1c2VkUm93RW5hYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzZWRSb3dLZXkoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb2N1c2VkUm93S2V5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNlZFJvd0tleSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb2N1c2VkUm93S2V5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgY2FuIGJlIGZvY3VzZWQgdXNpbmcga2V5Ym9hcmQgbmF2aWdhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1c1N0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb2N1c1N0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb2N1c1N0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hpY2ggZGF0YSBmaWVsZCBkZWZpbmVzIHdoZXRoZXIgdGhlIG5vZGUgaGFzIGNoaWxkcmVuLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhhc0l0ZW1zRXhwcigpOiBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGFzSXRlbXNFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGFzSXRlbXNFeHByKHZhbHVlOiBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGFzSXRlbXNFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGhlYWRlciBmaWx0ZXIgZmVhdHVyZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoZWFkZXJGaWx0ZXIoKTogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgc2VhcmNoVGltZW91dD86IG51bWJlciwgdGV4dHM/OiB7IGNhbmNlbD86IHN0cmluZywgZW1wdHlWYWx1ZT86IHN0cmluZywgb2s/OiBzdHJpbmcgfSwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlYWRlckZpbHRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlYWRlckZpbHRlcih2YWx1ZTogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgc2VhcmNoVGltZW91dD86IG51bWJlciwgdGV4dHM/OiB7IGNhbmNlbD86IHN0cmluZywgZW1wdHlWYWx1ZT86IHN0cmluZywgb2s/OiBzdHJpbmcgfSwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlYWRlckZpbHRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIGhlaWdodC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlaWdodCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBoaWdobGlnaHQgcm93cyBhbmQgY2VsbHMgd2hvc2UgZGF0YSBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhpZ2hsaWdodENoYW5nZXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGlnaGxpZ2h0Q2hhbmdlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhpZ2hsaWdodENoYW5nZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpZ2hsaWdodENoYW5nZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRleHQgZm9yIGEgaGludCB0aGF0IGFwcGVhcnMgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBoaW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGEgdXNlciBwYXVzZXMgb24gaXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaG92ZXJTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBob3ZlclN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoaWNoIGRhdGEgZmllbGQgY29udGFpbnMgbmVzdGVkIGl0ZW1zLiBTZXQgdGhpcyBvcHRpb24gd2hlbiB5b3VyIGRhdGEgaGFzIGEgaGllcmFyY2hpY2FsIHN0cnVjdHVyZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpdGVtc0V4cHIoKTogRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1zRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zRXhwcih2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2l0ZW1zRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQga2V5Ym9hcmROYXZpZ2F0aW9uKCk6IHsgZWRpdE9uS2V5UHJlc3M/OiBib29sZWFuLCBlbnRlcktleUFjdGlvbj86IHN0cmluZywgZW50ZXJLZXlEaXJlY3Rpb24/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigna2V5Ym9hcmROYXZpZ2F0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQga2V5Ym9hcmROYXZpZ2F0aW9uKHZhbHVlOiB7IGVkaXRPbktleVByZXNzPzogYm9vbGVhbiwgZW50ZXJLZXlBY3Rpb24/OiBzdHJpbmcsIGVudGVyS2V5RGlyZWN0aW9uPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2tleWJvYXJkTmF2aWdhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hpY2ggZGF0YSBmaWVsZCBwcm92aWRlcyBrZXlzIGZvciBub2Rlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBrZXlFeHByKCk6IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdrZXlFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQga2V5RXhwcih2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2tleUV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgbG9hZCBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsb2FkUGFuZWwoKTogeyBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBpbmRpY2F0b3JTcmM/OiBzdHJpbmcsIHNoYWRpbmc/OiBib29sZWFuLCBzaGFkaW5nQ29sb3I/OiBzdHJpbmcsIHNob3dJbmRpY2F0b3I/OiBib29sZWFuLCBzaG93UGFuZT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvYWRQYW5lbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvYWRQYW5lbCh2YWx1ZTogeyBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBpbmRpY2F0b3JTcmM/OiBzdHJpbmcsIHNoYWRpbmc/OiBib29sZWFuLCBzaGFkaW5nQ29sb3I/OiBzdHJpbmcsIHNob3dJbmRpY2F0b3I/OiBib29sZWFuLCBzaG93UGFuZT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvYWRQYW5lbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGV4dCBzaG93biB3aGVuIHRoZSB3aWRnZXQgZG9lcyBub3QgZGlzcGxheSBhbnkgZGF0YS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBub0RhdGFUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbm9EYXRhVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5vRGF0YVRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbm9EYXRhVGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBwYWdlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWdlcigpOiB7IGFsbG93ZWRQYWdlU2l6ZXM/OiBBcnJheTxudW1iZXI+LCBpbmZvVGV4dD86IHN0cmluZywgc2hvd0luZm8/OiBib29sZWFuLCBzaG93TmF2aWdhdGlvbkJ1dHRvbnM/OiBib29sZWFuLCBzaG93UGFnZVNpemVTZWxlY3Rvcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhZ2VyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFnZXIodmFsdWU6IHsgYWxsb3dlZFBhZ2VTaXplcz86IEFycmF5PG51bWJlcj4sIGluZm9UZXh0Pzogc3RyaW5nLCBzaG93SW5mbz86IGJvb2xlYW4sIHNob3dOYXZpZ2F0aW9uQnV0dG9ucz86IGJvb2xlYW4sIHNob3dQYWdlU2l6ZVNlbGVjdG9yPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFnZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBwYWdpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGFnaW5nKCk6IHsgZW5hYmxlZD86IGJvb2xlYW4sIHBhZ2VJbmRleD86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFnaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFnaW5nKHZhbHVlOiB7IGVuYWJsZWQ/OiBib29sZWFuLCBwYWdlSW5kZXg/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhZ2luZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hpY2ggZGF0YSBmaWVsZCBwcm92aWRlcyBwYXJlbnQga2V5cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYXJlbnRJZEV4cHIoKTogRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhcmVudElkRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhcmVudElkRXhwcih2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhcmVudElkRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGUgVHJlZUxpc3Qgb2YgdGhlIHNlcnZlcidzIGRhdGEgcHJvY2Vzc2luZyBvcGVyYXRpb25zLiBBcHBsaWVzIG9ubHkgaWYgZGF0YSBoYXMgYSBwbGFpbiBzdHJ1Y3R1cmUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVtb3RlT3BlcmF0aW9ucygpOiB7IGZpbHRlcmluZz86IGJvb2xlYW4sIGdyb3VwaW5nPzogYm9vbGVhbiwgc29ydGluZz86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVtb3RlT3BlcmF0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlbW90ZU9wZXJhdGlvbnModmFsdWU6IHsgZmlsdGVyaW5nPzogYm9vbGVhbiwgZ3JvdXBpbmc/OiBib29sZWFuLCBzb3J0aW5nPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZW1vdGVPcGVyYXRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJlbmRlciB0aGUgZmlsdGVyIHJvdywgY29tbWFuZCBjb2x1bW5zLCBhbmQgY29sdW1ucyB3aXRoIHNob3dFZGl0b3JBbHdheXMgc2V0IHRvIHRydWUgYWZ0ZXIgb3RoZXIgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVuZGVyQXN5bmMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVuZGVyQXN5bmMnKTtcclxuICAgIH1cclxuICAgIHNldCByZW5kZXJBc3luYyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVuZGVyQXN5bmMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVwYWludCBvbmx5IHRob3NlIGNlbGxzIHdob3NlIGRhdGEgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZXBhaW50Q2hhbmdlc09ubHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVwYWludENoYW5nZXNPbmx5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVwYWludENoYW5nZXNPbmx5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZXBhaW50Q2hhbmdlc09ubHknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSByb290IG5vZGUncyBpZGVudGlmaWVyLiBBcHBsaWVzIGlmIGRhdGFTdHJ1Y3R1cmUgaXMgXCJwbGFpblwiLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJvb3RWYWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jvb3RWYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJvb3RWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyb290VmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgcm93cyBzaG91bGQgYmUgc2hhZGVkIGRpZmZlcmVudGx5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJvd0FsdGVybmF0aW9uRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyb3dBbHRlcm5hdGlvbkVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCByb3dBbHRlcm5hdGlvbkVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Jvd0FsdGVybmF0aW9uRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2hlcyB0aGUgd2lkZ2V0IHRvIGEgcmlnaHQtdG8tbGVmdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBydGxFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J0bEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBydGxFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydGxFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgc2Nyb2xsaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNjcm9sbGluZygpOiB7IGNvbHVtblJlbmRlcmluZ01vZGU/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcsIHByZWxvYWRFbmFibGVkPzogYm9vbGVhbiwgcm93UmVuZGVyaW5nTW9kZT86IHN0cmluZywgc2Nyb2xsQnlDb250ZW50PzogYm9vbGVhbiwgc2Nyb2xsQnlUaHVtYj86IGJvb2xlYW4sIHNob3dTY3JvbGxiYXI/OiBzdHJpbmcsIHVzZU5hdGl2ZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2Nyb2xsaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2Nyb2xsaW5nKHZhbHVlOiB7IGNvbHVtblJlbmRlcmluZ01vZGU/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcsIHByZWxvYWRFbmFibGVkPzogYm9vbGVhbiwgcm93UmVuZGVyaW5nTW9kZT86IHN0cmluZywgc2Nyb2xsQnlDb250ZW50PzogYm9vbGVhbiwgc2Nyb2xsQnlUaHVtYj86IGJvb2xlYW4sIHNob3dTY3JvbGxiYXI/OiBzdHJpbmcsIHVzZU5hdGl2ZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2Nyb2xsaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIHNlYXJjaCBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWFyY2hQYW5lbCgpOiB7IGhpZ2hsaWdodENhc2VTZW5zaXRpdmU/OiBib29sZWFuLCBoaWdobGlnaHRTZWFyY2hUZXh0PzogYm9vbGVhbiwgcGxhY2Vob2xkZXI/OiBzdHJpbmcsIHNlYXJjaFZpc2libGVDb2x1bW5zT25seT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWFyY2hQYW5lbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlYXJjaFBhbmVsKHZhbHVlOiB7IGhpZ2hsaWdodENhc2VTZW5zaXRpdmU/OiBib29sZWFuLCBoaWdobGlnaHRTZWFyY2hUZXh0PzogYm9vbGVhbiwgcGxhY2Vob2xkZXI/OiBzdHJpbmcsIHNlYXJjaFZpc2libGVDb2x1bW5zT25seT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWFyY2hQYW5lbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgeW91IHRvIHNlbGVjdCByb3dzIG9yIGRldGVybWluZSB3aGljaCByb3dzIGFyZSBzZWxlY3RlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3RlZFJvd0tleXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0ZWRSb3dLZXlzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0ZWRSb3dLZXlzKHZhbHVlOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3RlZFJvd0tleXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBydW50aW1lIHNlbGVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3Rpb24oKTogeyBhbGxvd1NlbGVjdEFsbD86IGJvb2xlYW4sIG1vZGU/OiBzdHJpbmcsIHJlY3Vyc2l2ZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0aW9uKHZhbHVlOiB7IGFsbG93U2VsZWN0QWxsPzogYm9vbGVhbiwgbW9kZT86IHN0cmluZywgcmVjdXJzaXZlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIG91dGVyIGJvcmRlcnMgb2YgdGhlIHdpZGdldCBhcmUgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Qm9yZGVycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Qm9yZGVycycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dCb3JkZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Qm9yZGVycycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBjb2x1bW4gaGVhZGVycyBhcmUgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Q29sdW1uSGVhZGVycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Q29sdW1uSGVhZGVycycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dDb2x1bW5IZWFkZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q29sdW1uSGVhZGVycycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB2ZXJ0aWNhbCBsaW5lcyB0aGF0IHNlcGFyYXRlIG9uZSBjb2x1bW4gZnJvbSBhbm90aGVyIGFyZSB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dDb2x1bW5MaW5lcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Q29sdW1uTGluZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q29sdW1uTGluZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dDb2x1bW5MaW5lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBob3Jpem9udGFsIGxpbmVzIHRoYXQgc2VwYXJhdGUgb25lIHJvdyBmcm9tIGFub3RoZXIgYXJlIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd1Jvd0xpbmVzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dSb3dMaW5lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dSb3dMaW5lcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd1Jvd0xpbmVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgcnVudGltZSBzb3J0aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNvcnRpbmcoKTogeyBhc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBjbGVhclRleHQ/OiBzdHJpbmcsIGRlc2NlbmRpbmdUZXh0Pzogc3RyaW5nLCBtb2RlPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0aW5nKHZhbHVlOiB7IGFzY2VuZGluZ1RleHQ/OiBzdHJpbmcsIGNsZWFyVGV4dD86IHN0cmluZywgZGVzY2VuZGluZ1RleHQ/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc29ydGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHN0YXRlIHN0b3JpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhdGVTdG9yaW5nKCk6IHsgY3VzdG9tTG9hZD86IEZ1bmN0aW9uLCBjdXN0b21TYXZlPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBzYXZpbmdUaW1lb3V0PzogbnVtYmVyLCBzdG9yYWdlS2V5Pzogc3RyaW5nLCB0eXBlPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YXRlU3RvcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXRlU3RvcmluZyh2YWx1ZTogeyBjdXN0b21Mb2FkPzogRnVuY3Rpb24sIGN1c3RvbVNhdmU/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIHNhdmluZ1RpbWVvdXQ/OiBudW1iZXIsIHN0b3JhZ2VLZXk/OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhdGVTdG9yaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50IHdoZW4gdGhlIFRhYiBrZXkgaXMgdXNlZCBmb3IgbmF2aWdhdGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhYkluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGFiSW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIHR3by13YXkgZGF0YSBiaW5kaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHR3b1dheUJpbmRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3R3b1dheUJpbmRpbmdFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdHdvV2F5QmluZGluZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3R3b1dheUJpbmRpbmdFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgaXMgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgd2lkdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0ZXh0IHRoYXQgZG9lcyBub3QgZml0IGludG8gYSBjb2x1bW4gc2hvdWxkIGJlIHdyYXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd29yZFdyYXBFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dvcmRXcmFwRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdvcmRXcmFwRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd29yZFdyYXBFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhbiBhZGFwdGl2ZSBkZXRhaWwgcm93IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25BZGFwdGl2ZURldGFpbFJvd1ByZXBhcmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIGNlbGwgaXMgY2xpY2tlZCBvciB0YXBwZWQuIEV4ZWN1dGVkIGJlZm9yZSBvblJvd0NsaWNrLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBjZWxsIGlzIGRvdWJsZS1jbGlja2VkIG9yIGRvdWJsZS10YXBwZWQuIEV4ZWN1dGVkIGJlZm9yZSBvblJvd0RibENsaWNrLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHRoZSBwb2ludGVyIGVudGVycyBvciBsZWF2ZXMgYSBjZWxsLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsSG92ZXJDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIGdyaWQgY2VsbCBpcyBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsUHJlcGFyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIGNvbnRlbnQgaXMgcmVhZHkgYW5kIGVhY2ggdGltZSB0aGUgY29udGVudCBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Db250ZW50UmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgY29udGV4dCBtZW51IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Db250ZXh0TWVudVByZXBhcmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EYXRhRXJyb3JPY2N1cnJlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZGlzcG9zZWQgb2YuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRpc3Bvc2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgY2VsbCBvciByb3cgc3dpdGNoZXMgdG8gdGhlIGVkaXRpbmcgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkVkaXRpbmdTdGFydDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYW4gZWRpdG9yIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkVkaXRvclByZXBhcmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSBjZWxsJ3MgZWRpdG9yIGlzIGNyZWF0ZWQuIE5vdCBleGVjdXRlZCBmb3IgY2VsbHMgd2l0aCBhbiBlZGl0Q2VsbFRlbXBsYXRlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FZGl0b3JQcmVwYXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHRoZSBmb2N1c2VkIGNlbGwgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRm9jdXNlZENlbGxDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIGZvY3VzZWQgY2VsbCBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c2VkQ2VsbENoYW5naW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBleGVjdXRlZCB3aGVuIHRoZSBmb2N1c2VkIHJvdyBjaGFuZ2VzLiBBcHBsaWVzIG9ubHkgd2hlbiBmb2N1c2VkUm93RW5hYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c2VkUm93Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSBmb2N1c2VkIHJvdyBjaGFuZ2VzLiBBcHBsaWVzIG9ubHkgd2hlbiBmb2N1c2VkUm93RW5hYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c2VkUm93Q2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSBuZXcgcm93IGlzIGFkZGVkIHRvIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXROZXdSb3c6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCBpcyBpbiBmb2N1cyBhbmQgYSBrZXkgaGFzIGJlZW4gcHJlc3NlZCBkb3duLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25LZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgbG9hZGVkIG5vZGVzIGFyZSBpbml0aWFsaXplZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uTm9kZXNJbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBncmlkIHJvdyBpcyBjbGlja2VkIG9yIHRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgcm93IGlzIGNvbGxhcHNlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93Q29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSByb3cgaXMgY29sbGFwc2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dDb2xsYXBzaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgcm93IGlzIGRvdWJsZS1jbGlja2VkIG9yIGRvdWJsZS10YXBwZWQuIEV4ZWN1dGVkIGFmdGVyIG9uQ2VsbERibENsaWNrLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dEYmxDbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSByb3cgaXMgZXhwYW5kZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0V4cGFuZGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSByb3cgaXMgZXhwYW5kZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd0V4cGFuZGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSBuZXcgcm93IGhhcyBiZWVuIGluc2VydGVkIGludG8gdGhlIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dJbnNlcnRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgbmV3IHJvdyBpcyBpbnNlcnRlZCBpbnRvIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93SW5zZXJ0aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHJvdyBpcyBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dQcmVwYXJlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSByb3cgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93UmVtb3ZlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgcm93IGlzIHJlbW92ZWQgZnJvbSB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd1JlbW92aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHJvdyBoYXMgYmVlbiB1cGRhdGVkIGluIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUm93VXBkYXRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgcm93IGlzIHVwZGF0ZWQgaW4gdGhlIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Sb3dVcGRhdGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgY2VsbHMgaW4gYSByb3cgYXJlIHZhbGlkYXRlZCBhZ2FpbnN0IHZhbGlkYXRpb24gcnVsZXMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJvd1ZhbGlkYXRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHNlbGVjdGluZyBhIHJvdyBvciBjbGVhcmluZyBpdHMgc2VsZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHRvb2xiYXIgaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uVG9vbGJhclByZXBhcmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhbGxvd0NvbHVtblJlb3JkZXJpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbGxvd0NvbHVtblJlb3JkZXJpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFsbG93Q29sdW1uUmVzaXppbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbGxvd0NvbHVtblJlc2l6aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhdXRvRXhwYW5kQWxsQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYXV0b0V4cGFuZEFsbENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY2FjaGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY2FjaGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjZWxsSGludEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjZWxsSGludEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbHVtbkF1dG9XaWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbkF1dG9XaWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uQ2hvb3NlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbkNob29zZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgZW1wdHlQYW5lbFRleHQ/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIG1vZGU/OiBzdHJpbmcsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRpdGxlPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbHVtbkZpeGluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbkZpeGluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgZW5hYmxlZD86IGJvb2xlYW4sIHRleHRzPzogeyBmaXg/OiBzdHJpbmcsIGxlZnRQb3NpdGlvbj86IHN0cmluZywgcmlnaHRQb3NpdGlvbj86IHN0cmluZywgdW5maXg/OiBzdHJpbmcgfSB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbHVtbkhpZGluZ0VuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5IaWRpbmdFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb2x1bW5NaW5XaWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtbk1pbldpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbHVtblJlc2l6aW5nTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbHVtblJlc2l6aW5nTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb2x1bW5zQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29sdW1uc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PERldkV4cHJlc3MudWkuZHhUcmVlTGlzdENvbHVtbiB8IHN0cmluZz4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29sdW1uV2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2x1bW5XaWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjdXN0b21pemVDb2x1bW5zQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY3VzdG9taXplQ29sdW1uc0NoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRhdGFTb3VyY2VDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRhU291cmNlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRhdGFTdHJ1Y3R1cmVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRhU3RydWN0dXJlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZWRpdGluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVkaXRpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93QWRkaW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBhbGxvd0RlbGV0aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBhbGxvd1VwZGF0aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uLCBmb3JtPzogRGV2RXhwcmVzcy51aS5keEZvcm1PcHRpb25zLCBtb2RlPzogc3RyaW5nLCBwb3B1cD86IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMsIHJlZnJlc2hNb2RlPzogc3RyaW5nLCBzZWxlY3RUZXh0T25FZGl0U3RhcnQ/OiBib29sZWFuLCBzdGFydEVkaXRBY3Rpb24/OiBzdHJpbmcsIHRleHRzPzogeyBhZGRSb3c/OiBzdHJpbmcsIGFkZFJvd1RvTm9kZT86IHN0cmluZywgY2FuY2VsQWxsQ2hhbmdlcz86IHN0cmluZywgY2FuY2VsUm93Q2hhbmdlcz86IHN0cmluZywgY29uZmlybURlbGV0ZU1lc3NhZ2U/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVUaXRsZT86IHN0cmluZywgZGVsZXRlUm93Pzogc3RyaW5nLCBlZGl0Um93Pzogc3RyaW5nLCBzYXZlQWxsQ2hhbmdlcz86IHN0cmluZywgc2F2ZVJvd0NoYW5nZXM/OiBzdHJpbmcsIHVuZGVsZXRlUm93Pzogc3RyaW5nLCB2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcz86IHN0cmluZyB9LCB1c2VJY29ucz86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVycm9yUm93RW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVycm9yUm93RW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZXhwYW5kZWRSb3dLZXlzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZXhwYW5kZWRSb3dLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBleHBhbmROb2Rlc09uRmlsdGVyaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZXhwYW5kTm9kZXNPbkZpbHRlcmluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyQnVpbGRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlckJ1aWxkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLnVpLmR4RmlsdGVyQnVpbGRlck9wdGlvbnM+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyQnVpbGRlclBvcHVwQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyQnVpbGRlclBvcHVwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaWx0ZXJNb2RlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaWx0ZXJQYW5lbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlclBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZpbHRlckVuYWJsZWQ/OiBib29sZWFuLCB0ZXh0cz86IHsgY2xlYXJGaWx0ZXI/OiBzdHJpbmcsIGNyZWF0ZUZpbHRlcj86IHN0cmluZywgZmlsdGVyRW5hYmxlZEhpbnQ/OiBzdHJpbmcgfSwgdmlzaWJsZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaWx0ZXJSb3dDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJSb3dDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFwcGx5RmlsdGVyPzogc3RyaW5nLCBhcHBseUZpbHRlclRleHQ/OiBzdHJpbmcsIGJldHdlZW5FbmRUZXh0Pzogc3RyaW5nLCBiZXR3ZWVuU3RhcnRUZXh0Pzogc3RyaW5nLCBvcGVyYXRpb25EZXNjcmlwdGlvbnM/OiB7IGJldHdlZW4/OiBzdHJpbmcsIGNvbnRhaW5zPzogc3RyaW5nLCBlbmRzV2l0aD86IHN0cmluZywgZXF1YWw/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuPzogc3RyaW5nLCBncmVhdGVyVGhhbk9yRXF1YWw/OiBzdHJpbmcsIGxlc3NUaGFuPzogc3RyaW5nLCBsZXNzVGhhbk9yRXF1YWw/OiBzdHJpbmcsIG5vdENvbnRhaW5zPzogc3RyaW5nLCBub3RFcXVhbD86IHN0cmluZywgc3RhcnRzV2l0aD86IHN0cmluZyB9LCByZXNldE9wZXJhdGlvblRleHQ/OiBzdHJpbmcsIHNob3dBbGxUZXh0Pzogc3RyaW5nLCBzaG93T3BlcmF0aW9uQ2hvb3Nlcj86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyU3luY0VuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJTeW5jRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyVmFsdWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmb2N1c2VkQ29sdW1uSW5kZXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c2VkQ29sdW1uSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNlZFJvd0VuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c2VkUm93RW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNlZFJvd0luZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNlZFJvd0luZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzZWRSb3dLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c2VkUm93S2V5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhhc0l0ZW1zRXhwckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhhc0l0ZW1zRXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlYWRlckZpbHRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlYWRlckZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRleHRzPzogeyBjYW5jZWw/OiBzdHJpbmcsIGVtcHR5VmFsdWU/OiBzdHJpbmcsIG9rPzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlaWdodENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhpZ2hsaWdodENoYW5nZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaWdobGlnaHRDaGFuZ2VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoaW50Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGludENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBpdGVtc0V4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBpdGVtc0V4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBrZXlib2FyZE5hdmlnYXRpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBrZXlib2FyZE5hdmlnYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVkaXRPbktleVByZXNzPzogYm9vbGVhbiwgZW50ZXJLZXlBY3Rpb24/OiBzdHJpbmcsIGVudGVyS2V5RGlyZWN0aW9uPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUga2V5RXhwckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGtleUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsb2FkUGFuZWxDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBsb2FkUGFuZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVuYWJsZWQ/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIGluZGljYXRvclNyYz86IHN0cmluZywgc2hhZGluZz86IGJvb2xlYW4sIHNoYWRpbmdDb2xvcj86IHN0cmluZywgc2hvd0luZGljYXRvcj86IGJvb2xlYW4sIHNob3dQYW5lPzogYm9vbGVhbiwgdGV4dD86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBub0RhdGFUZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbm9EYXRhVGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYWdlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBhZ2VyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd2VkUGFnZVNpemVzPzogQXJyYXk8bnVtYmVyPiwgaW5mb1RleHQ/OiBzdHJpbmcsIHNob3dJbmZvPzogYm9vbGVhbiwgc2hvd05hdmlnYXRpb25CdXR0b25zPzogYm9vbGVhbiwgc2hvd1BhZ2VTaXplU2VsZWN0b3I/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBhZ2luZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBhZ2luZ0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgZW5hYmxlZD86IGJvb2xlYW4sIHBhZ2VJbmRleD86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYXJlbnRJZEV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYXJlbnRJZEV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZW1vdGVPcGVyYXRpb25zQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVtb3RlT3BlcmF0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgZmlsdGVyaW5nPzogYm9vbGVhbiwgZ3JvdXBpbmc/OiBib29sZWFuLCBzb3J0aW5nPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlbmRlckFzeW5jQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVuZGVyQXN5bmNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlcGFpbnRDaGFuZ2VzT25seUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlcGFpbnRDaGFuZ2VzT25seUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcm9vdFZhbHVlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcm9vdFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJvd0FsdGVybmF0aW9uRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJvd0FsdGVybmF0aW9uRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNjcm9sbGluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbGluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29sdW1uUmVuZGVyaW5nTW9kZT86IHN0cmluZywgbW9kZT86IHN0cmluZywgcHJlbG9hZEVuYWJsZWQ/OiBib29sZWFuLCByb3dSZW5kZXJpbmdNb2RlPzogc3RyaW5nLCBzY3JvbGxCeUNvbnRlbnQ/OiBib29sZWFuLCBzY3JvbGxCeVRodW1iPzogYm9vbGVhbiwgc2hvd1Njcm9sbGJhcj86IHN0cmluZywgdXNlTmF0aXZlPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlYXJjaFBhbmVsQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoUGFuZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGhpZ2hsaWdodENhc2VTZW5zaXRpdmU/OiBib29sZWFuLCBoaWdobGlnaHRTZWFyY2hUZXh0PzogYm9vbGVhbiwgcGxhY2Vob2xkZXI/OiBzdHJpbmcsIHNlYXJjaFZpc2libGVDb2x1bW5zT25seT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGVkUm93S2V5c0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkUm93S2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2VsZWN0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd1NlbGVjdEFsbD86IGJvb2xlYW4sIG1vZGU/OiBzdHJpbmcsIHJlY3Vyc2l2ZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Qm9yZGVyc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dCb3JkZXJzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Q29sdW1uSGVhZGVyc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dDb2x1bW5IZWFkZXJzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Q29sdW1uTGluZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93Q29sdW1uTGluZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dSb3dMaW5lc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dSb3dMaW5lc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc29ydGluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNvcnRpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFzY2VuZGluZ1RleHQ/OiBzdHJpbmcsIGNsZWFyVGV4dD86IHN0cmluZywgZGVzY2VuZGluZ1RleHQ/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzdGF0ZVN0b3JpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdGF0ZVN0b3JpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGN1c3RvbUxvYWQ/OiBGdW5jdGlvbiwgY3VzdG9tU2F2ZT86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgc2F2aW5nVGltZW91dD86IG51bWJlciwgc3RvcmFnZUtleT86IHN0cmluZywgdHlwZT86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRhYkluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGFiSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdHdvV2F5QmluZGluZ0VuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0d29XYXlCaW5kaW5nRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmlzaWJsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHdpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB3b3JkV3JhcEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB3b3JkV3JhcEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcblxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aUNvbHVtbkNvbXBvbmVudClcclxuICAgIGdldCBjb2x1bW5zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUNvbHVtbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdjb2x1bW5zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgdGVtcGxhdGVIb3N0OiBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICAgICAgcHJpdmF0ZSBfd2F0Y2hlckhlbHBlcjogV2F0Y2hlckhlbHBlcixcclxuICAgICAgICAgICAgcHJpdmF0ZSBfaWRoOiBJdGVyYWJsZURpZmZlckhlbHBlciwgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcclxuICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogYW55KSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSwgdGVtcGxhdGVIb3N0LCBfd2F0Y2hlckhlbHBlciwgdHJhbnNmZXJTdGF0ZSwgcGxhdGZvcm1JZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FkYXB0aXZlRGV0YWlsUm93UHJlcGFyaW5nJywgZW1pdDogJ29uQWRhcHRpdmVEZXRhaWxSb3dQcmVwYXJpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2VsbENsaWNrJywgZW1pdDogJ29uQ2VsbENsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NlbGxEYmxDbGljaycsIGVtaXQ6ICdvbkNlbGxEYmxDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjZWxsSG92ZXJDaGFuZ2VkJywgZW1pdDogJ29uQ2VsbEhvdmVyQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjZWxsUHJlcGFyZWQnLCBlbWl0OiAnb25DZWxsUHJlcGFyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGVudFJlYWR5JywgZW1pdDogJ29uQ29udGVudFJlYWR5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NvbnRleHRNZW51UHJlcGFyaW5nJywgZW1pdDogJ29uQ29udGV4dE1lbnVQcmVwYXJpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZGF0YUVycm9yT2NjdXJyZWQnLCBlbWl0OiAnb25EYXRhRXJyb3JPY2N1cnJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZWRpdGluZ1N0YXJ0JywgZW1pdDogJ29uRWRpdGluZ1N0YXJ0JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2VkaXRvclByZXBhcmVkJywgZW1pdDogJ29uRWRpdG9yUHJlcGFyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZWRpdG9yUHJlcGFyaW5nJywgZW1pdDogJ29uRWRpdG9yUHJlcGFyaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZvY3VzZWRDZWxsQ2hhbmdlZCcsIGVtaXQ6ICdvbkZvY3VzZWRDZWxsQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmb2N1c2VkQ2VsbENoYW5naW5nJywgZW1pdDogJ29uRm9jdXNlZENlbGxDaGFuZ2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmb2N1c2VkUm93Q2hhbmdlZCcsIGVtaXQ6ICdvbkZvY3VzZWRSb3dDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZvY3VzZWRSb3dDaGFuZ2luZycsIGVtaXQ6ICdvbkZvY3VzZWRSb3dDaGFuZ2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luaXROZXdSb3cnLCBlbWl0OiAnb25Jbml0TmV3Um93JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2tleURvd24nLCBlbWl0OiAnb25LZXlEb3duJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ25vZGVzSW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Ob2Rlc0luaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0NsaWNrJywgZW1pdDogJ29uUm93Q2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93Q29sbGFwc2VkJywgZW1pdDogJ29uUm93Q29sbGFwc2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0NvbGxhcHNpbmcnLCBlbWl0OiAnb25Sb3dDb2xsYXBzaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd0RibENsaWNrJywgZW1pdDogJ29uUm93RGJsQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93RXhwYW5kZWQnLCBlbWl0OiAnb25Sb3dFeHBhbmRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dFeHBhbmRpbmcnLCBlbWl0OiAnb25Sb3dFeHBhbmRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93SW5zZXJ0ZWQnLCBlbWl0OiAnb25Sb3dJbnNlcnRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dJbnNlcnRpbmcnLCBlbWl0OiAnb25Sb3dJbnNlcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93UHJlcGFyZWQnLCBlbWl0OiAnb25Sb3dQcmVwYXJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dSZW1vdmVkJywgZW1pdDogJ29uUm93UmVtb3ZlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdyb3dSZW1vdmluZycsIGVtaXQ6ICdvblJvd1JlbW92aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd1VwZGF0ZWQnLCBlbWl0OiAnb25Sb3dVcGRhdGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Jvd1VwZGF0aW5nJywgZW1pdDogJ29uUm93VXBkYXRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncm93VmFsaWRhdGluZycsIGVtaXQ6ICdvblJvd1ZhbGlkYXRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnc2VsZWN0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvblNlbGVjdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAndG9vbGJhclByZXBhcmluZycsIGVtaXQ6ICdvblRvb2xiYXJQcmVwYXJpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FjY2Vzc0tleUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbGxvd0NvbHVtblJlb3JkZXJpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FsbG93Q29sdW1uUmVzaXppbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2F1dG9FeHBhbmRBbGxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NhY2hlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY2VsbEhpbnRFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2x1bW5BdXRvV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtbkNob29zZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtbkZpeGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uSGlkaW5nRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uTWluV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NvbHVtblJlc2l6aW5nTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sdW1uV2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2N1c3RvbWl6ZUNvbHVtbnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGFTb3VyY2VDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGFTdHJ1Y3R1cmVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGVTZXJpYWxpemF0aW9uRm9ybWF0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWRpdGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Vycm9yUm93RW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZXhwYW5kZWRSb3dLZXlzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdleHBhbmROb2Rlc09uRmlsdGVyaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJCdWlsZGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJCdWlsZGVyUG9wdXBDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlck1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlclBhbmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJSb3dDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlclN5bmNFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJWYWx1ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9jdXNlZENvbHVtbkluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c2VkUm93RW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9jdXNlZFJvd0luZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c2VkUm93S2V5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c1N0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGFzSXRlbXNFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWFkZXJGaWx0ZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hlaWdodENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGlnaGxpZ2h0Q2hhbmdlc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGludENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2l0ZW1zRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAna2V5Ym9hcmROYXZpZ2F0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdrZXlFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdsb2FkUGFuZWxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ25vRGF0YVRleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BhZ2VyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYWdpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BhcmVudElkRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVtb3RlT3BlcmF0aW9uc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVuZGVyQXN5bmNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlcGFpbnRDaGFuZ2VzT25seUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncm9vdFZhbHVlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyb3dBbHRlcm5hdGlvbkVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Njcm9sbGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VhcmNoUGFuZWxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGVkUm93S2V5c0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93Qm9yZGVyc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0NvbHVtbkhlYWRlcnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dDb2x1bW5MaW5lc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd1Jvd0xpbmVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzb3J0aW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdGF0ZVN0b3JpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RhYkluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0d29XYXlCaW5kaW5nRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmlzaWJsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnd2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dvcmRXcmFwRW5hYmxlZENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pZGguc2V0SG9zdCh0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEeFRyZWVMaXN0KGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2NvbHVtbnMnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnZGF0YVNvdXJjZScsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdleHBhbmRlZFJvd0tleXMnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnc2VsZWN0ZWRSb3dLZXlzJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnY29sdW1ucycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdkYXRhU291cmNlJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2V4cGFuZGVkUm93S2V5cycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdzZWxlY3RlZFJvd0tleXMnKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhvQ29sdW1uQ2hvb3Nlck1vZHVsZSxcclxuICAgIER4b0NvbHVtbkZpeGluZ01vZHVsZSxcclxuICAgIER4b1RleHRzTW9kdWxlLFxyXG4gICAgRHhpQ29sdW1uTW9kdWxlLFxyXG4gICAgRHhpQnV0dG9uTW9kdWxlLFxyXG4gICAgRHhvSGVhZGVyRmlsdGVyTW9kdWxlLFxyXG4gICAgRHhvTG9va3VwTW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvRm9ybUl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4aVZhbGlkYXRpb25SdWxlTW9kdWxlLFxyXG4gICAgRHhvRWRpdGluZ01vZHVsZSxcclxuICAgIER4b0Zvcm1Nb2R1bGUsXHJcbiAgICBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4b1RhYlBhbmVsT3B0aW9uc01vZHVsZSxcclxuICAgIER4aVRhYk1vZHVsZSxcclxuICAgIER4b0J1dHRvbk9wdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9Qb3B1cE1vZHVsZSxcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0hpZGVNb2R1bGUsXHJcbiAgICBEeG9TaG93TW9kdWxlLFxyXG4gICAgRHhvUG9zaXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BdE1vZHVsZSxcclxuICAgIER4b0JvdW5kYXJ5T2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhvQ29sbGlzaW9uTW9kdWxlLFxyXG4gICAgRHhvTXlNb2R1bGUsXHJcbiAgICBEeG9PZmZzZXRNb2R1bGUsXHJcbiAgICBEeGlUb29sYmFySXRlbU1vZHVsZSxcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJNb2R1bGUsXHJcbiAgICBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUsXHJcbiAgICBEeGlGaWVsZE1vZHVsZSxcclxuICAgIER4b0ZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIER4b0dyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyQnVpbGRlclBvcHVwTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJSb3dNb2R1bGUsXHJcbiAgICBEeG9PcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9LZXlib2FyZE5hdmlnYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9Mb2FkUGFuZWxNb2R1bGUsXHJcbiAgICBEeG9QYWdlck1vZHVsZSxcclxuICAgIER4b1BhZ2luZ01vZHVsZSxcclxuICAgIER4b1JlbW90ZU9wZXJhdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9TY3JvbGxpbmdNb2R1bGUsXHJcbiAgICBEeG9TZWFyY2hQYW5lbE1vZHVsZSxcclxuICAgIER4b1NlbGVjdGlvbk1vZHVsZSxcclxuICAgIER4b1NvcnRpbmdNb2R1bGUsXHJcbiAgICBEeG9TdGF0ZVN0b3JpbmdNb2R1bGUsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4VHJlZUxpc3RDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4VHJlZUxpc3RDb21wb25lbnQsXHJcbiAgICBEeG9Db2x1bW5DaG9vc2VyTW9kdWxlLFxyXG4gICAgRHhvQ29sdW1uRml4aW5nTW9kdWxlLFxyXG4gICAgRHhvVGV4dHNNb2R1bGUsXHJcbiAgICBEeGlDb2x1bW5Nb2R1bGUsXHJcbiAgICBEeGlCdXR0b25Nb2R1bGUsXHJcbiAgICBEeG9IZWFkZXJGaWx0ZXJNb2R1bGUsXHJcbiAgICBEeG9Mb29rdXBNb2R1bGUsXHJcbiAgICBEeG9Gb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9Gb3JtSXRlbU1vZHVsZSxcclxuICAgIER4b0xhYmVsTW9kdWxlLFxyXG4gICAgRHhpVmFsaWRhdGlvblJ1bGVNb2R1bGUsXHJcbiAgICBEeG9FZGl0aW5nTW9kdWxlLFxyXG4gICAgRHhvRm9ybU1vZHVsZSxcclxuICAgIER4b0NvbENvdW50QnlTY3JlZW5Nb2R1bGUsXHJcbiAgICBEeGlJdGVtTW9kdWxlLFxyXG4gICAgRHhvVGFiUGFuZWxPcHRpb25zTW9kdWxlLFxyXG4gICAgRHhpVGFiTW9kdWxlLFxyXG4gICAgRHhvQnV0dG9uT3B0aW9uc01vZHVsZSxcclxuICAgIER4b1BvcHVwTW9kdWxlLFxyXG4gICAgRHhvQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgRHhvSGlkZU1vZHVsZSxcclxuICAgIER4b1Nob3dNb2R1bGUsXHJcbiAgICBEeG9Qb3NpdGlvbk1vZHVsZSxcclxuICAgIER4b0F0TW9kdWxlLFxyXG4gICAgRHhvQm91bmRhcnlPZmZzZXRNb2R1bGUsXHJcbiAgICBEeG9Db2xsaXNpb25Nb2R1bGUsXHJcbiAgICBEeG9NeU1vZHVsZSxcclxuICAgIER4b09mZnNldE1vZHVsZSxcclxuICAgIER4aVRvb2xiYXJJdGVtTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyQnVpbGRlck1vZHVsZSxcclxuICAgIER4aUN1c3RvbU9wZXJhdGlvbk1vZHVsZSxcclxuICAgIER4aUZpZWxkTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvR3JvdXBPcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJCdWlsZGVyUG9wdXBNb2R1bGUsXHJcbiAgICBEeG9GaWx0ZXJQYW5lbE1vZHVsZSxcclxuICAgIER4b0ZpbHRlclJvd01vZHVsZSxcclxuICAgIER4b09wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIER4b0tleWJvYXJkTmF2aWdhdGlvbk1vZHVsZSxcclxuICAgIER4b0xvYWRQYW5lbE1vZHVsZSxcclxuICAgIER4b1BhZ2VyTW9kdWxlLFxyXG4gICAgRHhvUGFnaW5nTW9kdWxlLFxyXG4gICAgRHhvUmVtb3RlT3BlcmF0aW9uc01vZHVsZSxcclxuICAgIER4b1Njcm9sbGluZ01vZHVsZSxcclxuICAgIER4b1NlYXJjaFBhbmVsTW9kdWxlLFxyXG4gICAgRHhvU2VsZWN0aW9uTW9kdWxlLFxyXG4gICAgRHhvU29ydGluZ01vZHVsZSxcclxuICAgIER4b1N0YXRlU3RvcmluZ01vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFRyZWVMaXN0TW9kdWxlIHsgfVxyXG4iXX0=