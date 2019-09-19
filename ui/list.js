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

import DxList from 'devextreme/ui/list';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemModule } from './nested/item-dxi';
import { DxiMenuItemModule } from './nested/menu-item-dxi';
import { DxoSearchEditorOptionsModule } from './nested/search-editor-options';
import { DxiButtonModule } from './nested/button-dxi';
import { DxoOptionsModule } from './nested/options';
import { DxiItemComponent } from './nested/item-dxi';
import { DxiMenuItemComponent } from './nested/menu-item-dxi';
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
    DxListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-list',
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
    DxListComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxListComponent.propDecorators = {
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "allowItemDeleting": [{ type: Input },],
        "allowItemReordering": [{ type: Input },],
        "bounceEnabled": [{ type: Input },],
        "collapsibleGroups": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "disabled": [{ type: Input },],
        "displayExpr": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "grouped": [{ type: Input },],
        "groupTemplate": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "indicateLoading": [{ type: Input },],
        "itemDeleteMode": [{ type: Input },],
        "itemHoldTimeout": [{ type: Input },],
        "items": [{ type: Input },],
        "itemTemplate": [{ type: Input },],
        "keyExpr": [{ type: Input },],
        "menuItems": [{ type: Input },],
        "menuMode": [{ type: Input },],
        "nextButtonText": [{ type: Input },],
        "noDataText": [{ type: Input },],
        "pageLoadingText": [{ type: Input },],
        "pageLoadMode": [{ type: Input },],
        "pulledDownText": [{ type: Input },],
        "pullingDownText": [{ type: Input },],
        "pullRefreshEnabled": [{ type: Input },],
        "refreshingText": [{ type: Input },],
        "repaintChangesOnly": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "scrollByContent": [{ type: Input },],
        "scrollByThumb": [{ type: Input },],
        "scrollingEnabled": [{ type: Input },],
        "searchEditorOptions": [{ type: Input },],
        "searchEnabled": [{ type: Input },],
        "searchExpr": [{ type: Input },],
        "searchMode": [{ type: Input },],
        "searchTimeout": [{ type: Input },],
        "searchValue": [{ type: Input },],
        "selectAllMode": [{ type: Input },],
        "selectedItemKeys": [{ type: Input },],
        "selectedItems": [{ type: Input },],
        "selectionMode": [{ type: Input },],
        "showScrollbar": [{ type: Input },],
        "showSelectionControls": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "useNativeScrolling": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onContentReady": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onGroupRendered": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onItemClick": [{ type: Output },],
        "onItemContextMenu": [{ type: Output },],
        "onItemDeleted": [{ type: Output },],
        "onItemDeleting": [{ type: Output },],
        "onItemHold": [{ type: Output },],
        "onItemRendered": [{ type: Output },],
        "onItemReordered": [{ type: Output },],
        "onItemSwipe": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onPageLoading": [{ type: Output },],
        "onPullRefresh": [{ type: Output },],
        "onScroll": [{ type: Output },],
        "onSelectAllValueChanged": [{ type: Output },],
        "onSelectionChanged": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "allowItemDeletingChange": [{ type: Output },],
        "allowItemReorderingChange": [{ type: Output },],
        "bounceEnabledChange": [{ type: Output },],
        "collapsibleGroupsChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "displayExprChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "groupedChange": [{ type: Output },],
        "groupTemplateChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "indicateLoadingChange": [{ type: Output },],
        "itemDeleteModeChange": [{ type: Output },],
        "itemHoldTimeoutChange": [{ type: Output },],
        "itemsChange": [{ type: Output },],
        "itemTemplateChange": [{ type: Output },],
        "keyExprChange": [{ type: Output },],
        "menuItemsChange": [{ type: Output },],
        "menuModeChange": [{ type: Output },],
        "nextButtonTextChange": [{ type: Output },],
        "noDataTextChange": [{ type: Output },],
        "pageLoadingTextChange": [{ type: Output },],
        "pageLoadModeChange": [{ type: Output },],
        "pulledDownTextChange": [{ type: Output },],
        "pullingDownTextChange": [{ type: Output },],
        "pullRefreshEnabledChange": [{ type: Output },],
        "refreshingTextChange": [{ type: Output },],
        "repaintChangesOnlyChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "scrollByContentChange": [{ type: Output },],
        "scrollByThumbChange": [{ type: Output },],
        "scrollingEnabledChange": [{ type: Output },],
        "searchEditorOptionsChange": [{ type: Output },],
        "searchEnabledChange": [{ type: Output },],
        "searchExprChange": [{ type: Output },],
        "searchModeChange": [{ type: Output },],
        "searchTimeoutChange": [{ type: Output },],
        "searchValueChange": [{ type: Output },],
        "selectAllModeChange": [{ type: Output },],
        "selectedItemKeysChange": [{ type: Output },],
        "selectedItemsChange": [{ type: Output },],
        "selectionModeChange": [{ type: Output },],
        "showScrollbarChange": [{ type: Output },],
        "showSelectionControlsChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "useNativeScrollingChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "itemsChildren": [{ type: ContentChildren, args: [DxiItemComponent,] },],
        "menuItemsChildren": [{ type: ContentChildren, args: [DxiMenuItemComponent,] },],
    };
    return DxListComponent;
}(DxComponent));
export { DxListComponent };
var DxListModule = (function () {
    function DxListModule() {
    }
    DxListModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxListModule;
}());
export { DxListModule };
//# sourceMappingURL=list.js.map