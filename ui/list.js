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

var list_1 = require("devextreme/ui/list");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var item_dxi_1 = require("./nested/item-dxi");
var menu_item_dxi_1 = require("./nested/menu-item-dxi");
var search_editor_options_1 = require("./nested/search-editor-options");
var button_dxi_1 = require("./nested/button-dxi");
var options_1 = require("./nested/options");
var item_dxi_2 = require("./nested/item-dxi");
var menu_item_dxi_2 = require("./nested/menu-item-dxi");
/**
 * The List is a widget that represents a collection of items in a scrollable list.
 */
var DxListComponent = (function (_super) {
    __extends(DxListComponent, _super);
    function DxListComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'groupRendered', emit: 'onGroupRendered' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemDeleted', emit: 'onItemDeleted' },
            { subscribe: 'itemDeleting', emit: 'onItemDeleting' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'itemReordered', emit: 'onItemReordered' },
            { subscribe: 'itemSwipe', emit: 'onItemSwipe' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pageLoading', emit: 'onPageLoading' },
            { subscribe: 'pullRefresh', emit: 'onPullRefresh' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'selectAllValueChanged', emit: 'onSelectAllValueChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'allowItemDeletingChange' },
            { emit: 'allowItemReorderingChange' },
            { emit: 'bounceEnabledChange' },
            { emit: 'collapsibleGroupsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'indicateLoadingChange' },
            { emit: 'itemDeleteModeChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'menuItemsChange' },
            { emit: 'menuModeChange' },
            { emit: 'nextButtonTextChange' },
            { emit: 'noDataTextChange' },
            { emit: 'pageLoadingTextChange' },
            { emit: 'pageLoadModeChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'pullRefreshEnabledChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'repaintChangesOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollByThumbChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'searchEditorOptionsChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'searchValueChange' },
            { emit: 'selectAllModeChange' },
            { emit: 'selectedItemKeysChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'selectionModeChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'showSelectionControlsChange' },
            { emit: 'tabIndexChange' },
            { emit: 'useNativeScrollingChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxListComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxListComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxListComponent.prototype, "allowItemDeleting", {
        get: /**
             * Specifies whether or not an end user can delete list items.
             */
        function () {
            return this._getOption('allowItemDeleting');
        },
        set: function (value) {
            this._setOption('allowItemDeleting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "allowItemReordering", {
        get: /**
             * Specifies whether a user can reorder list items. Grouped items cannot be moved from one group to another.
             */
        function () {
            return this._getOption('allowItemReordering');
        },
        set: function (value) {
            this._setOption('allowItemReordering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "bounceEnabled", {
        get: /**
             * A Boolean value specifying whether to enable or disable the bounce-back effect.
             */
        function () {
            return this._getOption('bounceEnabled');
        },
        set: function (value) {
            this._setOption('bounceEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "collapsibleGroups", {
        get: /**
             * Specifies whether or not an end-user can collapse groups.
             */
        function () {
            return this._getOption('collapsibleGroups');
        },
        set: function (value) {
            this._setOption('collapsibleGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxListComponent.prototype, "disabled", {
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
    Object.defineProperty(DxListComponent.prototype, "displayExpr", {
        get: /**
             * Specifies the data field whose values should be displayed. Defaults to "text" when the data source contains objects.
             */
        function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxListComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxListComponent.prototype, "grouped", {
        get: /**
             * Specifies whether data items should be grouped.
             */
        function () {
            return this._getOption('grouped');
        },
        set: function (value) {
            this._setOption('grouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "groupTemplate", {
        get: /**
             * Specifies a custom template for group captions.
             */
        function () {
            return this._getOption('groupTemplate');
        },
        set: function (value) {
            this._setOption('groupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "height", {
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
    Object.defineProperty(DxListComponent.prototype, "hint", {
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
    Object.defineProperty(DxListComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxListComponent.prototype, "indicateLoading", {
        get: /**
             * Specifies whether or not to show the loading panel when the DataSource bound to the widget is loading data.
             */
        function () {
            return this._getOption('indicateLoading');
        },
        set: function (value) {
            this._setOption('indicateLoading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "itemDeleteMode", {
        get: /**
             * Specifies the way a user can delete items from the list.
             */
        function () {
            return this._getOption('itemDeleteMode');
        },
        set: function (value) {
            this._setOption('itemDeleteMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "itemHoldTimeout", {
        get: /**
             * The time period in milliseconds before the onItemHold event is raised.
             */
        function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "items", {
        get: /**
             * An array of items displayed by the widget.
             */
        function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "itemTemplate", {
        get: /**
             * Specifies a custom template for items.
             */
        function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "keyExpr", {
        get: /**
             * Specifies which data field provides keys for widget items.
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
    Object.defineProperty(DxListComponent.prototype, "menuItems", {
        get: /**
             * Specifies the array of items for a context menu called for a list item.
             */
        function () {
            return this._getOption('menuItems');
        },
        set: function (value) {
            this._setOption('menuItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "menuMode", {
        get: /**
             * Specifies whether an item context menu is shown when a user holds or swipes an item.
             */
        function () {
            return this._getOption('menuMode');
        },
        set: function (value) {
            this._setOption('menuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "nextButtonText", {
        get: /**
             * The text displayed on the button used to load the next page from the data source.
             */
        function () {
            return this._getOption('nextButtonText');
        },
        set: function (value) {
            this._setOption('nextButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "noDataText", {
        get: /**
             * The text or HTML markup displayed by the widget if the item collection is empty.
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
    Object.defineProperty(DxListComponent.prototype, "pageLoadingText", {
        get: /**
             * Specifies the text shown in the pullDown panel, which is displayed when the list is scrolled to the bottom.
             */
        function () {
            return this._getOption('pageLoadingText');
        },
        set: function (value) {
            this._setOption('pageLoadingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pageLoadMode", {
        get: /**
             * Specifies whether the next page is loaded when a user scrolls the widget to the bottom or when the "next" button is clicked.
             */
        function () {
            return this._getOption('pageLoadMode');
        },
        set: function (value) {
            this._setOption('pageLoadMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pulledDownText", {
        get: /**
             * Specifies the text displayed in the pullDown panel when the list is pulled below the refresh threshold.
             */
        function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pullingDownText", {
        get: /**
             * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
             */
        function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pullRefreshEnabled", {
        get: /**
             * A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture.
             */
        function () {
            return this._getOption('pullRefreshEnabled');
        },
        set: function (value) {
            this._setOption('pullRefreshEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "refreshingText", {
        get: /**
             * Specifies the text displayed in the pullDown panel while the list is being refreshed.
             */
        function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "repaintChangesOnly", {
        get: /**
             * Specifies whether to repaint only those elements whose data changed.
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
    Object.defineProperty(DxListComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxListComponent.prototype, "scrollByContent", {
        get: /**
             * A Boolean value specifying if the list is scrolled by content.
             */
        function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "scrollByThumb", {
        get: /**
             * A Boolean value specifying if the list is scrolled using the scrollbar.
             */
        function () {
            return this._getOption('scrollByThumb');
        },
        set: function (value) {
            this._setOption('scrollByThumb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "scrollingEnabled", {
        get: /**
             * A Boolean value specifying whether to enable or disable list scrolling.
             */
        function () {
            return this._getOption('scrollingEnabled');
        },
        set: function (value) {
            this._setOption('scrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "searchEditorOptions", {
        get: /**
             * Configures the search panel.
             */
        function () {
            return this._getOption('searchEditorOptions');
        },
        set: function (value) {
            this._setOption('searchEditorOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "searchEnabled", {
        get: /**
             * Specifies whether the search panel is visible.
             */
        function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "searchExpr", {
        get: /**
             * Specifies a data object's field name or an expression whose value is compared to the search string.
             */
        function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "searchMode", {
        get: /**
             * Specifies a comparison operation used to search widget items.
             */
        function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "searchTimeout", {
        get: /**
             * Specifies a delay in milliseconds between when a user finishes typing, and the search is executed.
             */
        function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "searchValue", {
        get: /**
             * Specifies the current search string.
             */
        function () {
            return this._getOption('searchValue');
        },
        set: function (value) {
            this._setOption('searchValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "selectAllMode", {
        get: /**
             * Specifies the mode in which all items are selected.
             */
        function () {
            return this._getOption('selectAllMode');
        },
        set: function (value) {
            this._setOption('selectAllMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "selectedItemKeys", {
        get: /**
             * Specifies an array of currently selected item keys.
             */
        function () {
            return this._getOption('selectedItemKeys');
        },
        set: function (value) {
            this._setOption('selectedItemKeys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "selectedItems", {
        get: /**
             * An array of currently selected item objects.
             */
        function () {
            return this._getOption('selectedItems');
        },
        set: function (value) {
            this._setOption('selectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "selectionMode", {
        get: /**
             * Specifies item selection mode.
             */
        function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "showScrollbar", {
        get: /**
             * Specifies when the widget shows the scrollbar.
             */
        function () {
            return this._getOption('showScrollbar');
        },
        set: function (value) {
            this._setOption('showScrollbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "showSelectionControls", {
        get: /**
             * Specifies whether or not to display controls used to select list items.
             */
        function () {
            return this._getOption('showSelectionControls');
        },
        set: function (value) {
            this._setOption('showSelectionControls', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxListComponent.prototype, "useNativeScrolling", {
        get: /**
             * Specifies whether or not the widget uses native scrolling.
             */
        function () {
            return this._getOption('useNativeScrolling');
        },
        set: function (value) {
            this._setOption('useNativeScrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "visible", {
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
    Object.defineProperty(DxListComponent.prototype, "width", {
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
    Object.defineProperty(DxListComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "menuItemsChildren", {
        get: function () {
            return this._getOption('menuItems');
        },
        set: function (value) {
            this.setChildren('menuItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxListComponent.prototype._createInstance = function (element, options) {
        return new list_1.default(element, options);
    };
    DxListComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxListComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('menuItems', changes);
        this.setupChanges('searchExpr', changes);
        this.setupChanges('selectedItemKeys', changes);
        this.setupChanges('selectedItems', changes);
    };
    DxListComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxListComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('menuItems');
        this._idh.doCheck('searchExpr');
        this._idh.doCheck('selectedItemKeys');
        this._idh.doCheck('selectedItems');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxListComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxListComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-list',
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
    DxListComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxListComponent.propDecorators = {
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "allowItemDeleting": [{ type: core_1.Input },],
        "allowItemReordering": [{ type: core_1.Input },],
        "bounceEnabled": [{ type: core_1.Input },],
        "collapsibleGroups": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "displayExpr": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "grouped": [{ type: core_1.Input },],
        "groupTemplate": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "indicateLoading": [{ type: core_1.Input },],
        "itemDeleteMode": [{ type: core_1.Input },],
        "itemHoldTimeout": [{ type: core_1.Input },],
        "items": [{ type: core_1.Input },],
        "itemTemplate": [{ type: core_1.Input },],
        "keyExpr": [{ type: core_1.Input },],
        "menuItems": [{ type: core_1.Input },],
        "menuMode": [{ type: core_1.Input },],
        "nextButtonText": [{ type: core_1.Input },],
        "noDataText": [{ type: core_1.Input },],
        "pageLoadingText": [{ type: core_1.Input },],
        "pageLoadMode": [{ type: core_1.Input },],
        "pulledDownText": [{ type: core_1.Input },],
        "pullingDownText": [{ type: core_1.Input },],
        "pullRefreshEnabled": [{ type: core_1.Input },],
        "refreshingText": [{ type: core_1.Input },],
        "repaintChangesOnly": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "scrollByContent": [{ type: core_1.Input },],
        "scrollByThumb": [{ type: core_1.Input },],
        "scrollingEnabled": [{ type: core_1.Input },],
        "searchEditorOptions": [{ type: core_1.Input },],
        "searchEnabled": [{ type: core_1.Input },],
        "searchExpr": [{ type: core_1.Input },],
        "searchMode": [{ type: core_1.Input },],
        "searchTimeout": [{ type: core_1.Input },],
        "searchValue": [{ type: core_1.Input },],
        "selectAllMode": [{ type: core_1.Input },],
        "selectedItemKeys": [{ type: core_1.Input },],
        "selectedItems": [{ type: core_1.Input },],
        "selectionMode": [{ type: core_1.Input },],
        "showScrollbar": [{ type: core_1.Input },],
        "showSelectionControls": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "useNativeScrolling": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onGroupRendered": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onItemClick": [{ type: core_1.Output },],
        "onItemContextMenu": [{ type: core_1.Output },],
        "onItemDeleted": [{ type: core_1.Output },],
        "onItemDeleting": [{ type: core_1.Output },],
        "onItemHold": [{ type: core_1.Output },],
        "onItemRendered": [{ type: core_1.Output },],
        "onItemReordered": [{ type: core_1.Output },],
        "onItemSwipe": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onPageLoading": [{ type: core_1.Output },],
        "onPullRefresh": [{ type: core_1.Output },],
        "onScroll": [{ type: core_1.Output },],
        "onSelectAllValueChanged": [{ type: core_1.Output },],
        "onSelectionChanged": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "allowItemDeletingChange": [{ type: core_1.Output },],
        "allowItemReorderingChange": [{ type: core_1.Output },],
        "bounceEnabledChange": [{ type: core_1.Output },],
        "collapsibleGroupsChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "displayExprChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "groupedChange": [{ type: core_1.Output },],
        "groupTemplateChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "indicateLoadingChange": [{ type: core_1.Output },],
        "itemDeleteModeChange": [{ type: core_1.Output },],
        "itemHoldTimeoutChange": [{ type: core_1.Output },],
        "itemsChange": [{ type: core_1.Output },],
        "itemTemplateChange": [{ type: core_1.Output },],
        "keyExprChange": [{ type: core_1.Output },],
        "menuItemsChange": [{ type: core_1.Output },],
        "menuModeChange": [{ type: core_1.Output },],
        "nextButtonTextChange": [{ type: core_1.Output },],
        "noDataTextChange": [{ type: core_1.Output },],
        "pageLoadingTextChange": [{ type: core_1.Output },],
        "pageLoadModeChange": [{ type: core_1.Output },],
        "pulledDownTextChange": [{ type: core_1.Output },],
        "pullingDownTextChange": [{ type: core_1.Output },],
        "pullRefreshEnabledChange": [{ type: core_1.Output },],
        "refreshingTextChange": [{ type: core_1.Output },],
        "repaintChangesOnlyChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "scrollByContentChange": [{ type: core_1.Output },],
        "scrollByThumbChange": [{ type: core_1.Output },],
        "scrollingEnabledChange": [{ type: core_1.Output },],
        "searchEditorOptionsChange": [{ type: core_1.Output },],
        "searchEnabledChange": [{ type: core_1.Output },],
        "searchExprChange": [{ type: core_1.Output },],
        "searchModeChange": [{ type: core_1.Output },],
        "searchTimeoutChange": [{ type: core_1.Output },],
        "searchValueChange": [{ type: core_1.Output },],
        "selectAllModeChange": [{ type: core_1.Output },],
        "selectedItemKeysChange": [{ type: core_1.Output },],
        "selectedItemsChange": [{ type: core_1.Output },],
        "selectionModeChange": [{ type: core_1.Output },],
        "showScrollbarChange": [{ type: core_1.Output },],
        "showSelectionControlsChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "useNativeScrollingChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "itemsChildren": [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
        "menuItemsChildren": [{ type: core_1.ContentChildren, args: [menu_item_dxi_2.DxiMenuItemComponent,] },],
    };
    return DxListComponent;
}(component_1.DxComponent));
exports.DxListComponent = DxListComponent;
var DxListModule = (function () {
    function DxListModule() {
    }
    DxListModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        menu_item_dxi_1.DxiMenuItemModule,
                        search_editor_options_1.DxoSearchEditorOptionsModule,
                        button_dxi_1.DxiButtonModule,
                        options_1.DxoOptionsModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxListComponent
                    ],
                    exports: [
                        DxListComponent,
                        item_dxi_1.DxiItemModule,
                        menu_item_dxi_1.DxiMenuItemModule,
                        search_editor_options_1.DxoSearchEditorOptionsModule,
                        button_dxi_1.DxiButtonModule,
                        options_1.DxoOptionsModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxListModule;
}());
exports.DxListModule = DxListModule;
//# sourceMappingURL=list.js.map