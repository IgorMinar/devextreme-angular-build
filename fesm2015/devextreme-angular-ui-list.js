import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxList from 'devextreme/ui/list';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
let DxListComponent = class DxListComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
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
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Specifies whether or not an end user can delete list items.
     */
    get allowItemDeleting() {
        return this._getOption('allowItemDeleting');
    }
    set allowItemDeleting(value) {
        this._setOption('allowItemDeleting', value);
    }
    /**
     * Specifies whether a user can reorder list items. Grouped items cannot be moved from one group to another.
     */
    get allowItemReordering() {
        return this._getOption('allowItemReordering');
    }
    set allowItemReordering(value) {
        this._setOption('allowItemReordering', value);
    }
    /**
     * A Boolean value specifying whether to enable or disable the bounce-back effect.
     */
    get bounceEnabled() {
        return this._getOption('bounceEnabled');
    }
    set bounceEnabled(value) {
        this._setOption('bounceEnabled', value);
    }
    /**
     * Specifies whether or not an end-user can collapse groups.
     */
    get collapsibleGroups() {
        return this._getOption('collapsibleGroups');
    }
    set collapsibleGroups(value) {
        this._setOption('collapsibleGroups', value);
    }
    /**
     * Binds the widget to data.
     */
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    /**
     * Specifies whether the widget responds to user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    /**
     * Specifies the data field whose values should be displayed. Defaults to "text" when the data source contains objects.
     */
    get displayExpr() {
        return this._getOption('displayExpr');
    }
    set displayExpr(value) {
        this._setOption('displayExpr', value);
    }
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    /**
     * Specifies whether data items should be grouped.
     */
    get grouped() {
        return this._getOption('grouped');
    }
    set grouped(value) {
        this._setOption('grouped', value);
    }
    /**
     * Specifies a custom template for group captions.
     */
    get groupTemplate() {
        return this._getOption('groupTemplate');
    }
    set groupTemplate(value) {
        this._setOption('groupTemplate', value);
    }
    /**
     * Specifies the widget's height.
     */
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    /**
     * Specifies whether or not to show the loading panel when the DataSource bound to the widget is loading data.
     */
    get indicateLoading() {
        return this._getOption('indicateLoading');
    }
    set indicateLoading(value) {
        this._setOption('indicateLoading', value);
    }
    /**
     * Specifies the way a user can delete items from the list.
     */
    get itemDeleteMode() {
        return this._getOption('itemDeleteMode');
    }
    set itemDeleteMode(value) {
        this._setOption('itemDeleteMode', value);
    }
    /**
     * The time period in milliseconds before the onItemHold event is raised.
     */
    get itemHoldTimeout() {
        return this._getOption('itemHoldTimeout');
    }
    set itemHoldTimeout(value) {
        this._setOption('itemHoldTimeout', value);
    }
    /**
     * An array of items displayed by the widget.
     */
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
    /**
     * Specifies a custom template for items.
     */
    get itemTemplate() {
        return this._getOption('itemTemplate');
    }
    set itemTemplate(value) {
        this._setOption('itemTemplate', value);
    }
    /**
     * Specifies which data field provides keys for widget items.
     */
    get keyExpr() {
        return this._getOption('keyExpr');
    }
    set keyExpr(value) {
        this._setOption('keyExpr', value);
    }
    /**
     * Specifies the array of items for a context menu called for a list item.
     */
    get menuItems() {
        return this._getOption('menuItems');
    }
    set menuItems(value) {
        this._setOption('menuItems', value);
    }
    /**
     * Specifies whether an item context menu is shown when a user holds or swipes an item.
     */
    get menuMode() {
        return this._getOption('menuMode');
    }
    set menuMode(value) {
        this._setOption('menuMode', value);
    }
    /**
     * The text displayed on the button used to load the next page from the data source.
     */
    get nextButtonText() {
        return this._getOption('nextButtonText');
    }
    set nextButtonText(value) {
        this._setOption('nextButtonText', value);
    }
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    get noDataText() {
        return this._getOption('noDataText');
    }
    set noDataText(value) {
        this._setOption('noDataText', value);
    }
    /**
     * Specifies the text shown in the pullDown panel, which is displayed when the list is scrolled to the bottom.
     */
    get pageLoadingText() {
        return this._getOption('pageLoadingText');
    }
    set pageLoadingText(value) {
        this._setOption('pageLoadingText', value);
    }
    /**
     * Specifies whether the next page is loaded when a user scrolls the widget to the bottom or when the "next" button is clicked.
     */
    get pageLoadMode() {
        return this._getOption('pageLoadMode');
    }
    set pageLoadMode(value) {
        this._setOption('pageLoadMode', value);
    }
    /**
     * Specifies the text displayed in the pullDown panel when the list is pulled below the refresh threshold.
     */
    get pulledDownText() {
        return this._getOption('pulledDownText');
    }
    set pulledDownText(value) {
        this._setOption('pulledDownText', value);
    }
    /**
     * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
     */
    get pullingDownText() {
        return this._getOption('pullingDownText');
    }
    set pullingDownText(value) {
        this._setOption('pullingDownText', value);
    }
    /**
     * A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture.
     */
    get pullRefreshEnabled() {
        return this._getOption('pullRefreshEnabled');
    }
    set pullRefreshEnabled(value) {
        this._setOption('pullRefreshEnabled', value);
    }
    /**
     * Specifies the text displayed in the pullDown panel while the list is being refreshed.
     */
    get refreshingText() {
        return this._getOption('refreshingText');
    }
    set refreshingText(value) {
        this._setOption('refreshingText', value);
    }
    /**
     * Specifies whether to repaint only those elements whose data changed.
     */
    get repaintChangesOnly() {
        return this._getOption('repaintChangesOnly');
    }
    set repaintChangesOnly(value) {
        this._setOption('repaintChangesOnly', value);
    }
    /**
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * A Boolean value specifying if the list is scrolled by content.
     */
    get scrollByContent() {
        return this._getOption('scrollByContent');
    }
    set scrollByContent(value) {
        this._setOption('scrollByContent', value);
    }
    /**
     * A Boolean value specifying if the list is scrolled using the scrollbar.
     */
    get scrollByThumb() {
        return this._getOption('scrollByThumb');
    }
    set scrollByThumb(value) {
        this._setOption('scrollByThumb', value);
    }
    /**
     * A Boolean value specifying whether to enable or disable list scrolling.
     */
    get scrollingEnabled() {
        return this._getOption('scrollingEnabled');
    }
    set scrollingEnabled(value) {
        this._setOption('scrollingEnabled', value);
    }
    /**
     * Configures the search panel.
     */
    get searchEditorOptions() {
        return this._getOption('searchEditorOptions');
    }
    set searchEditorOptions(value) {
        this._setOption('searchEditorOptions', value);
    }
    /**
     * Specifies whether the search panel is visible.
     */
    get searchEnabled() {
        return this._getOption('searchEnabled');
    }
    set searchEnabled(value) {
        this._setOption('searchEnabled', value);
    }
    /**
     * Specifies a data object's field name or an expression whose value is compared to the search string.
     */
    get searchExpr() {
        return this._getOption('searchExpr');
    }
    set searchExpr(value) {
        this._setOption('searchExpr', value);
    }
    /**
     * Specifies a comparison operation used to search widget items.
     */
    get searchMode() {
        return this._getOption('searchMode');
    }
    set searchMode(value) {
        this._setOption('searchMode', value);
    }
    /**
     * Specifies a delay in milliseconds between when a user finishes typing, and the search is executed.
     */
    get searchTimeout() {
        return this._getOption('searchTimeout');
    }
    set searchTimeout(value) {
        this._setOption('searchTimeout', value);
    }
    /**
     * Specifies the current search string.
     */
    get searchValue() {
        return this._getOption('searchValue');
    }
    set searchValue(value) {
        this._setOption('searchValue', value);
    }
    /**
     * Specifies the mode in which all items are selected.
     */
    get selectAllMode() {
        return this._getOption('selectAllMode');
    }
    set selectAllMode(value) {
        this._setOption('selectAllMode', value);
    }
    /**
     * Specifies an array of currently selected item keys.
     */
    get selectedItemKeys() {
        return this._getOption('selectedItemKeys');
    }
    set selectedItemKeys(value) {
        this._setOption('selectedItemKeys', value);
    }
    /**
     * An array of currently selected item objects.
     */
    get selectedItems() {
        return this._getOption('selectedItems');
    }
    set selectedItems(value) {
        this._setOption('selectedItems', value);
    }
    /**
     * Specifies item selection mode.
     */
    get selectionMode() {
        return this._getOption('selectionMode');
    }
    set selectionMode(value) {
        this._setOption('selectionMode', value);
    }
    /**
     * Specifies when the widget shows the scrollbar.
     */
    get showScrollbar() {
        return this._getOption('showScrollbar');
    }
    set showScrollbar(value) {
        this._setOption('showScrollbar', value);
    }
    /**
     * Specifies whether or not to display controls used to select list items.
     */
    get showSelectionControls() {
        return this._getOption('showSelectionControls');
    }
    set showSelectionControls(value) {
        this._setOption('showSelectionControls', value);
    }
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    /**
     * Specifies whether or not the widget uses native scrolling.
     */
    get useNativeScrolling() {
        return this._getOption('useNativeScrolling');
    }
    set useNativeScrolling(value) {
        this._setOption('useNativeScrolling', value);
    }
    /**
     * Specifies whether the widget is visible.
     */
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    /**
     * Specifies the widget's width.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
    get menuItemsChildren() {
        return this._getOption('menuItems');
    }
    set menuItemsChildren(value) {
        this.setChildren('menuItems', value);
    }
    _createInstance(element, options) {
        return new DxList(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('menuItems', changes);
        this.setupChanges('searchExpr', changes);
        this.setupChanges('selectedItemKeys', changes);
        this.setupChanges('selectedItems', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('menuItems');
        this._idh.doCheck('searchExpr');
        this._idh.doCheck('selectedItemKeys');
        this._idh.doCheck('selectedItems');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }
    _setOption(name, value) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
};
DxListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
let DxListModule = class DxListModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxListComponent, DxListModule };
//# sourceMappingURL=devextreme-angular-ui-list.js.map
