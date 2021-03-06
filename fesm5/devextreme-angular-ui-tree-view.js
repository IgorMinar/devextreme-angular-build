import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxTreeView from 'devextreme/ui/tree_view';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxiItemModule, DxoSearchEditorOptionsModule, DxiButtonModule, DxoOptionsModule } from 'devextreme-angular/ui/nested';

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
 * The TreeView widget is a tree-like representation of textual data.
 */
var DxTreeViewComponent = /** @class */ (function (_super) {
    __extends(DxTreeViewComponent, _super);
    function DxTreeViewComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemCollapsed', emit: 'onItemCollapsed' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemExpanded', emit: 'onItemExpanded' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'itemSelectionChanged', emit: 'onItemSelectionChanged' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectAllValueChanged', emit: 'onSelectAllValueChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'createChildrenChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dataStructureChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'expandAllEnabledChange' },
            { emit: 'expandedExprChange' },
            { emit: 'expandEventChange' },
            { emit: 'expandNodesRecursiveChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hasItemsExprChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemsExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'noDataTextChange' },
            { emit: 'parentIdExprChange' },
            { emit: 'rootValueChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollDirectionChange' },
            { emit: 'searchEditorOptionsChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'searchValueChange' },
            { emit: 'selectAllTextChange' },
            { emit: 'selectByClickChange' },
            { emit: 'selectedExprChange' },
            { emit: 'selectionModeChange' },
            { emit: 'selectNodesRecursiveChange' },
            { emit: 'showCheckBoxesModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'virtualModeEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTreeViewComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "animationEnabled", {
        /**
         * Specifies whether or not to animate item collapsing and expanding.
         */
        get: function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "createChildren", {
        /**
         * Allows you to load nodes on demand.
         */
        get: function () {
            return this._getOption('createChildren');
        },
        set: function (value) {
            this._setOption('createChildren', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "dataStructure", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "disabledExpr", {
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding widget item is disabled.
         */
        get: function () {
            return this._getOption('disabledExpr');
        },
        set: function (value) {
            this._setOption('disabledExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "displayExpr", {
        /**
         * Specifies the data field whose values should be displayed.
         */
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "expandAllEnabled", {
        /**
         * Specifies whether or not a user can expand all tree view items by the "*" hot key.
         */
        get: function () {
            return this._getOption('expandAllEnabled');
        },
        set: function (value) {
            this._setOption('expandAllEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "expandedExpr", {
        /**
         * Specifies which data source field specifies whether an item is expanded.
         */
        get: function () {
            return this._getOption('expandedExpr');
        },
        set: function (value) {
            this._setOption('expandedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "expandEvent", {
        /**
         * Specifies the event on which to expand/collapse a node.
         */
        get: function () {
            return this._getOption('expandEvent');
        },
        set: function (value) {
            this._setOption('expandEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "expandNodesRecursive", {
        /**
         * Specifies whether or not all parent nodes of an initially expanded node are displayed expanded.
         */
        get: function () {
            return this._getOption('expandNodesRecursive');
        },
        set: function (value) {
            this._setOption('expandNodesRecursive', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "hasItemsExpr", {
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding node includes child nodes.
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
    Object.defineProperty(DxTreeViewComponent.prototype, "height", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "hint", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "itemHoldTimeout", {
        /**
         * The time period in milliseconds before the onItemHold event is raised.
         */
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "items", {
        /**
         * An array of items displayed by the widget.
         */
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "itemsExpr", {
        /**
         * Specifies which data field contains nested items.
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
    Object.defineProperty(DxTreeViewComponent.prototype, "itemTemplate", {
        /**
         * Specifies a custom template for items.
         */
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "keyExpr", {
        /**
         * Specifies which data field provides keys for TreeView items.
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
    Object.defineProperty(DxTreeViewComponent.prototype, "noDataText", {
        /**
         * The text or HTML markup displayed by the widget if the item collection is empty.
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
    Object.defineProperty(DxTreeViewComponent.prototype, "parentIdExpr", {
        /**
         * Specifies the name of the data source item field for holding the parent key of the corresponding node.
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
    Object.defineProperty(DxTreeViewComponent.prototype, "rootValue", {
        /**
         * Specifies the parent ID value of the root item.
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
    Object.defineProperty(DxTreeViewComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "scrollDirection", {
        /**
         * A string value specifying available scrolling directions.
         */
        get: function () {
            return this._getOption('scrollDirection');
        },
        set: function (value) {
            this._setOption('scrollDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchEditorOptions", {
        /**
         * Configures the search panel.
         */
        get: function () {
            return this._getOption('searchEditorOptions');
        },
        set: function (value) {
            this._setOption('searchEditorOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchEnabled", {
        /**
         * Specifies whether the search panel is visible.
         */
        get: function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchExpr", {
        /**
         * Specifies a data object's field name or an expression whose value is compared to the search string.
         */
        get: function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchMode", {
        /**
         * Specifies a comparison operation used to search widget items.
         */
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchTimeout", {
        /**
         * Specifies a delay in milliseconds between when a user finishes typing, and the search is executed.
         */
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchValue", {
        /**
         * Specifies the current search string.
         */
        get: function () {
            return this._getOption('searchValue');
        },
        set: function (value) {
            this._setOption('searchValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectAllText", {
        /**
         * Specifies the text displayed at the "Select All" check box.
         */
        get: function () {
            return this._getOption('selectAllText');
        },
        set: function (value) {
            this._setOption('selectAllText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectByClick", {
        /**
         * Specifies whether or not an item becomes selected if a user clicks it.
         */
        get: function () {
            return this._getOption('selectByClick');
        },
        set: function (value) {
            this._setOption('selectByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectedExpr", {
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding widget items is selected.
         */
        get: function () {
            return this._getOption('selectedExpr');
        },
        set: function (value) {
            this._setOption('selectedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectionMode", {
        /**
         * Specifies item selection mode.
         */
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectNodesRecursive", {
        /**
         * Specifies whether or not to select nodes recursively.
         */
        get: function () {
            return this._getOption('selectNodesRecursive');
        },
        set: function (value) {
            this._setOption('selectNodesRecursive', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "showCheckBoxesMode", {
        /**
         * Specifies the current check boxes display mode.
         */
        get: function () {
            return this._getOption('showCheckBoxesMode');
        },
        set: function (value) {
            this._setOption('showCheckBoxesMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "virtualModeEnabled", {
        /**
         * Enables the virtual mode in which nodes are loaded on demand. Use it to enhance the performance on large datasets.
         */
        get: function () {
            return this._getOption('virtualModeEnabled');
        },
        set: function (value) {
            this._setOption('virtualModeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "visible", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "width", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTreeViewComponent.prototype._createInstance = function (element, options) {
        return new DxTreeView(element, options);
    };
    DxTreeViewComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTreeViewComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
    };
    DxTreeViewComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxTreeViewComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxTreeViewComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxTreeViewComponent.ctorParameters = function () { return [
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
    ], DxTreeViewComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "animationEnabled", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "createChildren", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "dataStructure", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "disabledExpr", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "displayExpr", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "expandAllEnabled", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "expandedExpr", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "expandEvent", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "expandNodesRecursive", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "hasItemsExpr", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "itemsExpr", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "keyExpr", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "parentIdExpr", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "rootValue", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "scrollDirection", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "searchEditorOptions", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "searchEnabled", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "searchExpr", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "searchMode", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "searchTimeout", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "searchValue", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "selectAllText", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "selectByClick", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "selectedExpr", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "selectionMode", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "selectNodesRecursive", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "showCheckBoxesMode", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "virtualModeEnabled", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxTreeViewComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onItemCollapsed", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onItemExpanded", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onItemSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onSelectAllValueChanged", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "animationEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "createChildrenChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "dataStructureChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "disabledExprChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "displayExprChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "expandAllEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "expandedExprChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "expandEventChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "expandNodesRecursiveChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "hasItemsExprChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "itemsExprChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "keyExprChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "parentIdExprChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "rootValueChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "scrollDirectionChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "searchEditorOptionsChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "searchEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "searchExprChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "searchModeChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "searchTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "searchValueChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "selectAllTextChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "selectByClickChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "selectedExprChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "selectionModeChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "selectNodesRecursiveChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "showCheckBoxesModeChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "virtualModeEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxTreeViewComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxTreeViewComponent.prototype, "itemsChildren", null);
    DxTreeViewComponent = __decorate([
        Component({
            selector: 'dx-tree-view',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxTreeViewComponent);
    return DxTreeViewComponent;
}(DxComponent));
var DxTreeViewModule = /** @class */ (function () {
    function DxTreeViewModule() {
    }
    DxTreeViewModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxoSearchEditorOptionsModule,
                DxiButtonModule,
                DxoOptionsModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxTreeViewComponent
            ],
            exports: [
                DxTreeViewComponent,
                DxiItemModule,
                DxoSearchEditorOptionsModule,
                DxiButtonModule,
                DxoOptionsModule,
                DxTemplateModule
            ]
        })
    ], DxTreeViewModule);
    return DxTreeViewModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxTreeViewComponent, DxTreeViewModule };
//# sourceMappingURL=devextreme-angular-ui-tree-view.js.map
