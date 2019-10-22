import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxList from 'devextreme/ui/list';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxiMenuItemComponent, DxiItemModule, DxiMenuItemModule, DxoSearchEditorOptionsModule, DxiButtonModule, DxoOptionsModule } from 'devextreme-angular/ui/nested';

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
 * The List is a widget that represents a collection of items in a scrollable list.
 */
var DxListComponent = /** @class */ (function (_super) {
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
    Object.defineProperty(DxListComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxListComponent.prototype, "allowItemDeleting", {
        /**
         * Specifies whether or not an end user can delete list items.
         */
        get: function () {
            return this._getOption('allowItemDeleting');
        },
        set: function (value) {
            this._setOption('allowItemDeleting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "allowItemReordering", {
        /**
         * Specifies whether a user can reorder list items. Grouped items cannot be moved from one group to another.
         */
        get: function () {
            return this._getOption('allowItemReordering');
        },
        set: function (value) {
            this._setOption('allowItemReordering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "bounceEnabled", {
        /**
         * A Boolean value specifying whether to enable or disable the bounce-back effect.
         */
        get: function () {
            return this._getOption('bounceEnabled');
        },
        set: function (value) {
            this._setOption('bounceEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "collapsibleGroups", {
        /**
         * Specifies whether or not an end-user can collapse groups.
         */
        get: function () {
            return this._getOption('collapsibleGroups');
        },
        set: function (value) {
            this._setOption('collapsibleGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxListComponent.prototype, "disabled", {
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
    Object.defineProperty(DxListComponent.prototype, "displayExpr", {
        /**
         * Specifies the data field whose values should be displayed. Defaults to "text" when the data source contains objects.
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
    Object.defineProperty(DxListComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxListComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxListComponent.prototype, "grouped", {
        /**
         * Specifies whether data items should be grouped.
         */
        get: function () {
            return this._getOption('grouped');
        },
        set: function (value) {
            this._setOption('grouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "groupTemplate", {
        /**
         * Specifies a custom template for group captions.
         */
        get: function () {
            return this._getOption('groupTemplate');
        },
        set: function (value) {
            this._setOption('groupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "height", {
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
    Object.defineProperty(DxListComponent.prototype, "hint", {
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
    Object.defineProperty(DxListComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxListComponent.prototype, "indicateLoading", {
        /**
         * Specifies whether or not to show the loading panel when the DataSource bound to the widget is loading data.
         */
        get: function () {
            return this._getOption('indicateLoading');
        },
        set: function (value) {
            this._setOption('indicateLoading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "itemDeleteMode", {
        /**
         * Specifies the way a user can delete items from the list.
         */
        get: function () {
            return this._getOption('itemDeleteMode');
        },
        set: function (value) {
            this._setOption('itemDeleteMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "itemHoldTimeout", {
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
    Object.defineProperty(DxListComponent.prototype, "items", {
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
    Object.defineProperty(DxListComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxListComponent.prototype, "keyExpr", {
        /**
         * Specifies which data field provides keys for widget items.
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
    Object.defineProperty(DxListComponent.prototype, "menuItems", {
        /**
         * Specifies the array of items for a context menu called for a list item.
         */
        get: function () {
            return this._getOption('menuItems');
        },
        set: function (value) {
            this._setOption('menuItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "menuMode", {
        /**
         * Specifies whether an item context menu is shown when a user holds or swipes an item.
         */
        get: function () {
            return this._getOption('menuMode');
        },
        set: function (value) {
            this._setOption('menuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "nextButtonText", {
        /**
         * The text displayed on the button used to load the next page from the data source.
         */
        get: function () {
            return this._getOption('nextButtonText');
        },
        set: function (value) {
            this._setOption('nextButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "noDataText", {
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
    Object.defineProperty(DxListComponent.prototype, "pageLoadingText", {
        /**
         * Specifies the text shown in the pullDown panel, which is displayed when the list is scrolled to the bottom.
         */
        get: function () {
            return this._getOption('pageLoadingText');
        },
        set: function (value) {
            this._setOption('pageLoadingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pageLoadMode", {
        /**
         * Specifies whether the next page is loaded when a user scrolls the widget to the bottom or when the "next" button is clicked.
         */
        get: function () {
            return this._getOption('pageLoadMode');
        },
        set: function (value) {
            this._setOption('pageLoadMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pulledDownText", {
        /**
         * Specifies the text displayed in the pullDown panel when the list is pulled below the refresh threshold.
         */
        get: function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pullingDownText", {
        /**
         * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
         */
        get: function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pullRefreshEnabled", {
        /**
         * A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture.
         */
        get: function () {
            return this._getOption('pullRefreshEnabled');
        },
        set: function (value) {
            this._setOption('pullRefreshEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "refreshingText", {
        /**
         * Specifies the text displayed in the pullDown panel while the list is being refreshed.
         */
        get: function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "repaintChangesOnly", {
        /**
         * Specifies whether to repaint only those elements whose data changed.
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
    Object.defineProperty(DxListComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxListComponent.prototype, "scrollByContent", {
        /**
         * A Boolean value specifying if the list is scrolled by content.
         */
        get: function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "scrollByThumb", {
        /**
         * A Boolean value specifying if the list is scrolled using the scrollbar.
         */
        get: function () {
            return this._getOption('scrollByThumb');
        },
        set: function (value) {
            this._setOption('scrollByThumb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "scrollingEnabled", {
        /**
         * A Boolean value specifying whether to enable or disable list scrolling.
         */
        get: function () {
            return this._getOption('scrollingEnabled');
        },
        set: function (value) {
            this._setOption('scrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "searchEditorOptions", {
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
    Object.defineProperty(DxListComponent.prototype, "searchEnabled", {
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
    Object.defineProperty(DxListComponent.prototype, "searchExpr", {
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
    Object.defineProperty(DxListComponent.prototype, "searchMode", {
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
    Object.defineProperty(DxListComponent.prototype, "searchTimeout", {
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
    Object.defineProperty(DxListComponent.prototype, "searchValue", {
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
    Object.defineProperty(DxListComponent.prototype, "selectAllMode", {
        /**
         * Specifies the mode in which all items are selected.
         */
        get: function () {
            return this._getOption('selectAllMode');
        },
        set: function (value) {
            this._setOption('selectAllMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "selectedItemKeys", {
        /**
         * Specifies an array of currently selected item keys.
         */
        get: function () {
            return this._getOption('selectedItemKeys');
        },
        set: function (value) {
            this._setOption('selectedItemKeys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "selectedItems", {
        /**
         * An array of currently selected item objects.
         */
        get: function () {
            return this._getOption('selectedItems');
        },
        set: function (value) {
            this._setOption('selectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "selectionMode", {
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
    Object.defineProperty(DxListComponent.prototype, "showScrollbar", {
        /**
         * Specifies when the widget shows the scrollbar.
         */
        get: function () {
            return this._getOption('showScrollbar');
        },
        set: function (value) {
            this._setOption('showScrollbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "showSelectionControls", {
        /**
         * Specifies whether or not to display controls used to select list items.
         */
        get: function () {
            return this._getOption('showSelectionControls');
        },
        set: function (value) {
            this._setOption('showSelectionControls', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxListComponent.prototype, "useNativeScrolling", {
        /**
         * Specifies whether or not the widget uses native scrolling.
         */
        get: function () {
            return this._getOption('useNativeScrolling');
        },
        set: function (value) {
            this._setOption('useNativeScrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "visible", {
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
    Object.defineProperty(DxListComponent.prototype, "width", {
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
        return new DxList(element, options);
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
    DxListComponent.ctorParameters = function () { return [
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
    ], DxListComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "allowItemDeleting", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "allowItemReordering", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "bounceEnabled", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "collapsibleGroups", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "displayExpr", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "grouped", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "groupTemplate", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "indicateLoading", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "itemDeleteMode", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "keyExpr", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "menuItems", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "menuMode", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "nextButtonText", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "pageLoadingText", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "pageLoadMode", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "pulledDownText", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "pullingDownText", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "pullRefreshEnabled", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "refreshingText", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "repaintChangesOnly", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "scrollByContent", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "scrollByThumb", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "scrollingEnabled", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "searchEditorOptions", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "searchEnabled", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "searchExpr", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "searchMode", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "searchTimeout", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "searchValue", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "selectAllMode", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "selectedItemKeys", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "selectedItems", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "selectionMode", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "showScrollbar", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "showSelectionControls", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "useNativeScrolling", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxListComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onGroupRendered", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onItemDeleted", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onItemDeleting", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onItemReordered", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onItemSwipe", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onPageLoading", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onPullRefresh", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onScroll", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onSelectAllValueChanged", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "allowItemDeletingChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "allowItemReorderingChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "bounceEnabledChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "collapsibleGroupsChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "displayExprChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "groupedChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "groupTemplateChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "indicateLoadingChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "itemDeleteModeChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "keyExprChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "menuItemsChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "menuModeChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "nextButtonTextChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "pageLoadingTextChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "pageLoadModeChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "pulledDownTextChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "pullingDownTextChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "pullRefreshEnabledChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "refreshingTextChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "repaintChangesOnlyChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "scrollByContentChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "scrollByThumbChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "scrollingEnabledChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "searchEditorOptionsChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "searchEnabledChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "searchExprChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "searchModeChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "searchTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "searchValueChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "selectAllModeChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "selectedItemKeysChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "selectedItemsChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "selectionModeChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "showScrollbarChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "showSelectionControlsChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "useNativeScrollingChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxListComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxListComponent.prototype, "itemsChildren", null);
    __decorate([
        ContentChildren(DxiMenuItemComponent)
    ], DxListComponent.prototype, "menuItemsChildren", null);
    DxListComponent = __decorate([
        Component({
            selector: 'dx-list',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxListComponent);
    return DxListComponent;
}(DxComponent));
var DxListModule = /** @class */ (function () {
    function DxListModule() {
    }
    DxListModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxiMenuItemModule,
                DxoSearchEditorOptionsModule,
                DxiButtonModule,
                DxoOptionsModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxListComponent
            ],
            exports: [
                DxListComponent,
                DxiItemModule,
                DxiMenuItemModule,
                DxoSearchEditorOptionsModule,
                DxiButtonModule,
                DxoOptionsModule,
                DxTemplateModule
            ]
        })
    ], DxListModule);
    return DxListModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxListComponent, DxListModule };
//# sourceMappingURL=devextreme-angular-ui-list.js.map
