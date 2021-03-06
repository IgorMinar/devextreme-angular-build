import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxTabs from 'devextreme/ui/tabs';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxiItemModule } from 'devextreme-angular/ui/nested';

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
 * The Tabs is a tab strip used to switch between pages or views. This widget is included in the TabPanel widget, but you can use the Tabs separately as well.
 */
let DxTabsComponent = class DxTabsComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'noDataTextChange' },
            { emit: 'repaintChangesOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectedItemKeysChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'selectionModeChange' },
            { emit: 'showNavButtonsChange' },
            { emit: 'tabIndexChange' },
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
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    get noDataText() {
        return this._getOption('noDataText');
    }
    set noDataText(value) {
        this._setOption('noDataText', value);
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
     * Specifies whether or not an end-user can scroll tabs by swiping.
     */
    get scrollByContent() {
        return this._getOption('scrollByContent');
    }
    set scrollByContent(value) {
        this._setOption('scrollByContent', value);
    }
    /**
     * Specifies whether or not an end-user can scroll tabs.
     */
    get scrollingEnabled() {
        return this._getOption('scrollingEnabled');
    }
    set scrollingEnabled(value) {
        this._setOption('scrollingEnabled', value);
    }
    /**
     * The index of the currently selected widget item.
     */
    get selectedIndex() {
        return this._getOption('selectedIndex');
    }
    set selectedIndex(value) {
        this._setOption('selectedIndex', value);
    }
    /**
     * The selected item object.
     */
    get selectedItem() {
        return this._getOption('selectedItem');
    }
    set selectedItem(value) {
        this._setOption('selectedItem', value);
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
     * Specifies whether the widget enables an end-user to select only a single item or multiple items.
     */
    get selectionMode() {
        return this._getOption('selectionMode');
    }
    set selectionMode(value) {
        this._setOption('selectionMode', value);
    }
    /**
     * Specifies whether navigation buttons should be available when tabs exceed the widget's width.
     */
    get showNavButtons() {
        return this._getOption('showNavButtons');
    }
    set showNavButtons(value) {
        this._setOption('showNavButtons', value);
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
    _createInstance(element, options) {
        return new DxTabs(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
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
DxTabsComponent.ctorParameters = () => [
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
], DxTabsComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "height", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "hint", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "items", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "keyExpr", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "repaintChangesOnly", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "scrollByContent", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "scrollingEnabled", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "selectedIndex", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "selectedItem", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "selectedItemKeys", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "selectedItems", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "showNavButtons", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "visible", null);
__decorate([
    Input()
], DxTabsComponent.prototype, "width", null);
__decorate([
    Output()
], DxTabsComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "keyExprChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "repaintChangesOnlyChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "scrollByContentChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "scrollingEnabledChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "selectedIndexChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "selectedItemChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "selectedItemKeysChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "selectedItemsChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "selectionModeChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "showNavButtonsChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxTabsComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxTabsComponent.prototype, "itemsChildren", null);
DxTabsComponent = __decorate([
    Component({
        selector: 'dx-tabs',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxTabsComponent);
let DxTabsModule = class DxTabsModule {
};
DxTabsModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxTabsComponent
        ],
        exports: [
            DxTabsComponent,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxTabsModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxTabsComponent, DxTabsModule };
//# sourceMappingURL=devextreme-angular-ui-tabs.js.map
