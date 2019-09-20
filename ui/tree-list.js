"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_2 = require("@angular/platform-browser");
var core_1 = require("@angular/core");

var tree_list_1 = require("devextreme/ui/tree_list");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var column_chooser_1 = require("./nested/column-chooser");
var column_fixing_1 = require("./nested/column-fixing");
var texts_1 = require("./nested/texts");
var column_dxi_1 = require("./nested/column-dxi");
var button_dxi_1 = require("./nested/button-dxi");
var header_filter_1 = require("./nested/header-filter");
var lookup_1 = require("./nested/lookup");
var format_1 = require("./nested/format");
var form_item_1 = require("./nested/form-item");
var label_1 = require("./nested/label");
var validation_rule_dxi_1 = require("./nested/validation-rule-dxi");
var editing_1 = require("./nested/editing");
var form_1 = require("./nested/form");
var col_count_by_screen_1 = require("./nested/col-count-by-screen");
var item_dxi_1 = require("./nested/item-dxi");
var tab_panel_options_1 = require("./nested/tab-panel-options");
var tab_dxi_1 = require("./nested/tab-dxi");
var button_options_1 = require("./nested/button-options");
var popup_1 = require("./nested/popup");
var animation_1 = require("./nested/animation");
var hide_1 = require("./nested/hide");
var show_1 = require("./nested/show");
var position_1 = require("./nested/position");
var at_1 = require("./nested/at");
var boundary_offset_1 = require("./nested/boundary-offset");
var collision_1 = require("./nested/collision");
var my_1 = require("./nested/my");
var offset_1 = require("./nested/offset");
var toolbar_item_dxi_1 = require("./nested/toolbar-item-dxi");
var filter_builder_1 = require("./nested/filter-builder");
var custom_operation_dxi_1 = require("./nested/custom-operation-dxi");
var field_dxi_1 = require("./nested/field-dxi");
var filter_operation_descriptions_1 = require("./nested/filter-operation-descriptions");
var group_operation_descriptions_1 = require("./nested/group-operation-descriptions");
var filter_builder_popup_1 = require("./nested/filter-builder-popup");
var filter_panel_1 = require("./nested/filter-panel");
var filter_row_1 = require("./nested/filter-row");
var operation_descriptions_1 = require("./nested/operation-descriptions");
var keyboard_navigation_1 = require("./nested/keyboard-navigation");
var load_panel_1 = require("./nested/load-panel");
var pager_1 = require("./nested/pager");
var paging_1 = require("./nested/paging");
var remote_operations_1 = require("./nested/remote-operations");
var scrolling_1 = require("./nested/scrolling");
var search_panel_1 = require("./nested/search-panel");
var selection_1 = require("./nested/selection");
var sorting_1 = require("./nested/sorting");
var state_storing_1 = require("./nested/state-storing");
var column_dxi_2 = require("./nested/column-dxi");
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
        return new tree_list_1.default(element, options);
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
        { type: core_1.Component, args: [{
                    selector: 'dx-tree-list',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxTreeListComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxTreeListComponent.propDecorators = {
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "allowColumnReordering": [{ type: core_1.Input },],
        "allowColumnResizing": [{ type: core_1.Input },],
        "autoExpandAll": [{ type: core_1.Input },],
        "cacheEnabled": [{ type: core_1.Input },],
        "cellHintEnabled": [{ type: core_1.Input },],
        "columnAutoWidth": [{ type: core_1.Input },],
        "columnChooser": [{ type: core_1.Input },],
        "columnFixing": [{ type: core_1.Input },],
        "columnHidingEnabled": [{ type: core_1.Input },],
        "columnMinWidth": [{ type: core_1.Input },],
        "columnResizingMode": [{ type: core_1.Input },],
        "columns": [{ type: core_1.Input },],
        "columnWidth": [{ type: core_1.Input },],
        "customizeColumns": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "dataStructure": [{ type: core_1.Input },],
        "dateSerializationFormat": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "editing": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "errorRowEnabled": [{ type: core_1.Input },],
        "expandedRowKeys": [{ type: core_1.Input },],
        "expandNodesOnFiltering": [{ type: core_1.Input },],
        "filterBuilder": [{ type: core_1.Input },],
        "filterBuilderPopup": [{ type: core_1.Input },],
        "filterMode": [{ type: core_1.Input },],
        "filterPanel": [{ type: core_1.Input },],
        "filterRow": [{ type: core_1.Input },],
        "filterSyncEnabled": [{ type: core_1.Input },],
        "filterValue": [{ type: core_1.Input },],
        "focusedColumnIndex": [{ type: core_1.Input },],
        "focusedRowEnabled": [{ type: core_1.Input },],
        "focusedRowIndex": [{ type: core_1.Input },],
        "focusedRowKey": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "hasItemsExpr": [{ type: core_1.Input },],
        "headerFilter": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "highlightChanges": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "itemsExpr": [{ type: core_1.Input },],
        "keyboardNavigation": [{ type: core_1.Input },],
        "keyExpr": [{ type: core_1.Input },],
        "loadPanel": [{ type: core_1.Input },],
        "noDataText": [{ type: core_1.Input },],
        "pager": [{ type: core_1.Input },],
        "paging": [{ type: core_1.Input },],
        "parentIdExpr": [{ type: core_1.Input },],
        "remoteOperations": [{ type: core_1.Input },],
        "renderAsync": [{ type: core_1.Input },],
        "repaintChangesOnly": [{ type: core_1.Input },],
        "rootValue": [{ type: core_1.Input },],
        "rowAlternationEnabled": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "scrolling": [{ type: core_1.Input },],
        "searchPanel": [{ type: core_1.Input },],
        "selectedRowKeys": [{ type: core_1.Input },],
        "selection": [{ type: core_1.Input },],
        "showBorders": [{ type: core_1.Input },],
        "showColumnHeaders": [{ type: core_1.Input },],
        "showColumnLines": [{ type: core_1.Input },],
        "showRowLines": [{ type: core_1.Input },],
        "sorting": [{ type: core_1.Input },],
        "stateStoring": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "twoWayBindingEnabled": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "wordWrapEnabled": [{ type: core_1.Input },],
        "onAdaptiveDetailRowPreparing": [{ type: core_1.Output },],
        "onCellClick": [{ type: core_1.Output },],
        "onCellDblClick": [{ type: core_1.Output },],
        "onCellHoverChanged": [{ type: core_1.Output },],
        "onCellPrepared": [{ type: core_1.Output },],
        "onContentReady": [{ type: core_1.Output },],
        "onContextMenuPreparing": [{ type: core_1.Output },],
        "onDataErrorOccurred": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onEditingStart": [{ type: core_1.Output },],
        "onEditorPrepared": [{ type: core_1.Output },],
        "onEditorPreparing": [{ type: core_1.Output },],
        "onFocusedCellChanged": [{ type: core_1.Output },],
        "onFocusedCellChanging": [{ type: core_1.Output },],
        "onFocusedRowChanged": [{ type: core_1.Output },],
        "onFocusedRowChanging": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onInitNewRow": [{ type: core_1.Output },],
        "onKeyDown": [{ type: core_1.Output },],
        "onNodesInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onRowClick": [{ type: core_1.Output },],
        "onRowCollapsed": [{ type: core_1.Output },],
        "onRowCollapsing": [{ type: core_1.Output },],
        "onRowDblClick": [{ type: core_1.Output },],
        "onRowExpanded": [{ type: core_1.Output },],
        "onRowExpanding": [{ type: core_1.Output },],
        "onRowInserted": [{ type: core_1.Output },],
        "onRowInserting": [{ type: core_1.Output },],
        "onRowPrepared": [{ type: core_1.Output },],
        "onRowRemoved": [{ type: core_1.Output },],
        "onRowRemoving": [{ type: core_1.Output },],
        "onRowUpdated": [{ type: core_1.Output },],
        "onRowUpdating": [{ type: core_1.Output },],
        "onRowValidating": [{ type: core_1.Output },],
        "onSelectionChanged": [{ type: core_1.Output },],
        "onToolbarPreparing": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "allowColumnReorderingChange": [{ type: core_1.Output },],
        "allowColumnResizingChange": [{ type: core_1.Output },],
        "autoExpandAllChange": [{ type: core_1.Output },],
        "cacheEnabledChange": [{ type: core_1.Output },],
        "cellHintEnabledChange": [{ type: core_1.Output },],
        "columnAutoWidthChange": [{ type: core_1.Output },],
        "columnChooserChange": [{ type: core_1.Output },],
        "columnFixingChange": [{ type: core_1.Output },],
        "columnHidingEnabledChange": [{ type: core_1.Output },],
        "columnMinWidthChange": [{ type: core_1.Output },],
        "columnResizingModeChange": [{ type: core_1.Output },],
        "columnsChange": [{ type: core_1.Output },],
        "columnWidthChange": [{ type: core_1.Output },],
        "customizeColumnsChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "dataStructureChange": [{ type: core_1.Output },],
        "dateSerializationFormatChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "editingChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "errorRowEnabledChange": [{ type: core_1.Output },],
        "expandedRowKeysChange": [{ type: core_1.Output },],
        "expandNodesOnFilteringChange": [{ type: core_1.Output },],
        "filterBuilderChange": [{ type: core_1.Output },],
        "filterBuilderPopupChange": [{ type: core_1.Output },],
        "filterModeChange": [{ type: core_1.Output },],
        "filterPanelChange": [{ type: core_1.Output },],
        "filterRowChange": [{ type: core_1.Output },],
        "filterSyncEnabledChange": [{ type: core_1.Output },],
        "filterValueChange": [{ type: core_1.Output },],
        "focusedColumnIndexChange": [{ type: core_1.Output },],
        "focusedRowEnabledChange": [{ type: core_1.Output },],
        "focusedRowIndexChange": [{ type: core_1.Output },],
        "focusedRowKeyChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "hasItemsExprChange": [{ type: core_1.Output },],
        "headerFilterChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "highlightChangesChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "itemsExprChange": [{ type: core_1.Output },],
        "keyboardNavigationChange": [{ type: core_1.Output },],
        "keyExprChange": [{ type: core_1.Output },],
        "loadPanelChange": [{ type: core_1.Output },],
        "noDataTextChange": [{ type: core_1.Output },],
        "pagerChange": [{ type: core_1.Output },],
        "pagingChange": [{ type: core_1.Output },],
        "parentIdExprChange": [{ type: core_1.Output },],
        "remoteOperationsChange": [{ type: core_1.Output },],
        "renderAsyncChange": [{ type: core_1.Output },],
        "repaintChangesOnlyChange": [{ type: core_1.Output },],
        "rootValueChange": [{ type: core_1.Output },],
        "rowAlternationEnabledChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "scrollingChange": [{ type: core_1.Output },],
        "searchPanelChange": [{ type: core_1.Output },],
        "selectedRowKeysChange": [{ type: core_1.Output },],
        "selectionChange": [{ type: core_1.Output },],
        "showBordersChange": [{ type: core_1.Output },],
        "showColumnHeadersChange": [{ type: core_1.Output },],
        "showColumnLinesChange": [{ type: core_1.Output },],
        "showRowLinesChange": [{ type: core_1.Output },],
        "sortingChange": [{ type: core_1.Output },],
        "stateStoringChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "twoWayBindingEnabledChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "wordWrapEnabledChange": [{ type: core_1.Output },],
        "columnsChildren": [{ type: core_1.ContentChildren, args: [column_dxi_2.DxiColumnComponent,] },],
    };
    return DxTreeListComponent;
}(component_1.DxComponent));
exports.DxTreeListComponent = DxTreeListComponent;
var DxTreeListModule = (function () {
    function DxTreeListModule() {
    }
    DxTreeListModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        column_chooser_1.DxoColumnChooserModule,
                        column_fixing_1.DxoColumnFixingModule,
                        texts_1.DxoTextsModule,
                        column_dxi_1.DxiColumnModule,
                        button_dxi_1.DxiButtonModule,
                        header_filter_1.DxoHeaderFilterModule,
                        lookup_1.DxoLookupModule,
                        format_1.DxoFormatModule,
                        form_item_1.DxoFormItemModule,
                        label_1.DxoLabelModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        editing_1.DxoEditingModule,
                        form_1.DxoFormModule,
                        col_count_by_screen_1.DxoColCountByScreenModule,
                        item_dxi_1.DxiItemModule,
                        tab_panel_options_1.DxoTabPanelOptionsModule,
                        tab_dxi_1.DxiTabModule,
                        button_options_1.DxoButtonOptionsModule,
                        popup_1.DxoPopupModule,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        toolbar_item_dxi_1.DxiToolbarItemModule,
                        filter_builder_1.DxoFilterBuilderModule,
                        custom_operation_dxi_1.DxiCustomOperationModule,
                        field_dxi_1.DxiFieldModule,
                        filter_operation_descriptions_1.DxoFilterOperationDescriptionsModule,
                        group_operation_descriptions_1.DxoGroupOperationDescriptionsModule,
                        filter_builder_popup_1.DxoFilterBuilderPopupModule,
                        filter_panel_1.DxoFilterPanelModule,
                        filter_row_1.DxoFilterRowModule,
                        operation_descriptions_1.DxoOperationDescriptionsModule,
                        keyboard_navigation_1.DxoKeyboardNavigationModule,
                        load_panel_1.DxoLoadPanelModule,
                        pager_1.DxoPagerModule,
                        paging_1.DxoPagingModule,
                        remote_operations_1.DxoRemoteOperationsModule,
                        scrolling_1.DxoScrollingModule,
                        search_panel_1.DxoSearchPanelModule,
                        selection_1.DxoSelectionModule,
                        sorting_1.DxoSortingModule,
                        state_storing_1.DxoStateStoringModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxTreeListComponent
                    ],
                    exports: [
                        DxTreeListComponent,
                        column_chooser_1.DxoColumnChooserModule,
                        column_fixing_1.DxoColumnFixingModule,
                        texts_1.DxoTextsModule,
                        column_dxi_1.DxiColumnModule,
                        button_dxi_1.DxiButtonModule,
                        header_filter_1.DxoHeaderFilterModule,
                        lookup_1.DxoLookupModule,
                        format_1.DxoFormatModule,
                        form_item_1.DxoFormItemModule,
                        label_1.DxoLabelModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        editing_1.DxoEditingModule,
                        form_1.DxoFormModule,
                        col_count_by_screen_1.DxoColCountByScreenModule,
                        item_dxi_1.DxiItemModule,
                        tab_panel_options_1.DxoTabPanelOptionsModule,
                        tab_dxi_1.DxiTabModule,
                        button_options_1.DxoButtonOptionsModule,
                        popup_1.DxoPopupModule,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        toolbar_item_dxi_1.DxiToolbarItemModule,
                        filter_builder_1.DxoFilterBuilderModule,
                        custom_operation_dxi_1.DxiCustomOperationModule,
                        field_dxi_1.DxiFieldModule,
                        filter_operation_descriptions_1.DxoFilterOperationDescriptionsModule,
                        group_operation_descriptions_1.DxoGroupOperationDescriptionsModule,
                        filter_builder_popup_1.DxoFilterBuilderPopupModule,
                        filter_panel_1.DxoFilterPanelModule,
                        filter_row_1.DxoFilterRowModule,
                        operation_descriptions_1.DxoOperationDescriptionsModule,
                        keyboard_navigation_1.DxoKeyboardNavigationModule,
                        load_panel_1.DxoLoadPanelModule,
                        pager_1.DxoPagerModule,
                        paging_1.DxoPagingModule,
                        remote_operations_1.DxoRemoteOperationsModule,
                        scrolling_1.DxoScrollingModule,
                        search_panel_1.DxoSearchPanelModule,
                        selection_1.DxoSelectionModule,
                        sorting_1.DxoSortingModule,
                        state_storing_1.DxoStateStoringModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxTreeListModule;
}());
exports.DxTreeListModule = DxTreeListModule;
//# sourceMappingURL=tree-list.js.map