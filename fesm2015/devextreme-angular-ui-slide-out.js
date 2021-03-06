import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxSlideOut from 'devextreme/ui/slide_out';
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
 * The SlideOut widget is a classic slide-out menu paired with a view. An end user opens the menu by swiping away the view.
 */
let DxSlideOutComponent = class DxSlideOutComponent extends DxComponent {
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
            { subscribe: 'menuGroupRendered', emit: 'onMenuGroupRendered' },
            { subscribe: 'menuItemRendered', emit: 'onMenuItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'menuGroupedChange' },
            { emit: 'menuGroupTemplateChange' },
            { emit: 'menuItemTemplateChange' },
            { emit: 'menuPositionChange' },
            { emit: 'menuVisibleChange' },
            { emit: 'noDataTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Specifies a custom template for the widget content. Rendered only once - when the widget is created.
     */
    get contentTemplate() {
        return this._getOption('contentTemplate');
    }
    set contentTemplate(value) {
        this._setOption('contentTemplate', value);
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
     * A Boolean value specifying whether or not to display a grouped menu.
     */
    get menuGrouped() {
        return this._getOption('menuGrouped');
    }
    set menuGrouped(value) {
        this._setOption('menuGrouped', value);
    }
    /**
     * Specifies a custom template for group captions.
     */
    get menuGroupTemplate() {
        return this._getOption('menuGroupTemplate');
    }
    set menuGroupTemplate(value) {
        this._setOption('menuGroupTemplate', value);
    }
    /**
     * Specifies a custom template for menu items.
     */
    get menuItemTemplate() {
        return this._getOption('menuItemTemplate');
    }
    set menuItemTemplate(value) {
        this._setOption('menuItemTemplate', value);
    }
    /**
     * Specifies the current menu position.
     */
    get menuPosition() {
        return this._getOption('menuPosition');
    }
    set menuPosition(value) {
        this._setOption('menuPosition', value);
    }
    /**
     * Specifies whether or not the slide-out menu is displayed.
     */
    get menuVisible() {
        return this._getOption('menuVisible');
    }
    set menuVisible(value) {
        this._setOption('menuVisible', value);
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
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * The index number of the currently selected item.
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
     * Indicates whether the menu can be shown/hidden by swiping the widget's main panel.
     */
    get swipeEnabled() {
        return this._getOption('swipeEnabled');
    }
    set swipeEnabled(value) {
        this._setOption('swipeEnabled', value);
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
        return new DxSlideOut(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
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
DxSlideOutComponent.ctorParameters = () => [
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
], DxSlideOutComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "contentTemplate", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "height", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "hint", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "items", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "menuGrouped", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "menuGroupTemplate", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "menuItemTemplate", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "menuPosition", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "menuVisible", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "selectedIndex", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "selectedItem", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "swipeEnabled", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "visible", null);
__decorate([
    Input()
], DxSlideOutComponent.prototype, "width", null);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "onMenuGroupRendered", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "onMenuItemRendered", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "contentTemplateChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "menuGroupedChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "menuGroupTemplateChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "menuItemTemplateChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "menuPositionChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "menuVisibleChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "selectedIndexChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "selectedItemChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "swipeEnabledChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxSlideOutComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxSlideOutComponent.prototype, "itemsChildren", null);
DxSlideOutComponent = __decorate([
    Component({
        selector: 'dx-slide-out',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxSlideOutComponent);
let DxSlideOutModule = class DxSlideOutModule {
};
DxSlideOutModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxSlideOutComponent
        ],
        exports: [
            DxSlideOutComponent,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxSlideOutModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxSlideOutComponent, DxSlideOutModule };
//# sourceMappingURL=devextreme-angular-ui-slide-out.js.map
