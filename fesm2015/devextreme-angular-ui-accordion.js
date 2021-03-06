import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxAccordion from 'devextreme/ui/accordion';
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
 * The Accordion widget contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this widget very useful for presenting information in a limited amount of space.
 */
let DxAccordionComponent = class DxAccordionComponent extends DxComponent {
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
            { subscribe: 'itemTitleClick', emit: 'onItemTitleClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationDurationChange' },
            { emit: 'collapsibleChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'itemTitleTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'multipleChange' },
            { emit: 'noDataTextChange' },
            { emit: 'repaintChangesOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectedItemKeysChange' },
            { emit: 'selectedItemsChange' },
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
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * A number specifying the time in milliseconds spent on the animation of the expanding or collapsing of a panel.
     */
    get animationDuration() {
        return this._getOption('animationDuration');
    }
    set animationDuration(value) {
        this._setOption('animationDuration', value);
    }
    /**
     * Specifies whether all items can be collapsed or whether at least one item must always be expanded.
     */
    get collapsible() {
        return this._getOption('collapsible');
    }
    set collapsible(value) {
        this._setOption('collapsible', value);
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
     * Specifies whether to render the panel's content when it is displayed. If false, the content is rendered immediately.
     */
    get deferRendering() {
        return this._getOption('deferRendering');
    }
    set deferRendering(value) {
        this._setOption('deferRendering', value);
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
     * Specifies a custom template for item titles.
     */
    get itemTitleTemplate() {
        return this._getOption('itemTitleTemplate');
    }
    set itemTitleTemplate(value) {
        this._setOption('itemTitleTemplate', value);
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
     * Specifies whether the widget can expand several items or only a single item at once.
     */
    get multiple() {
        return this._getOption('multiple');
    }
    set multiple(value) {
        this._setOption('multiple', value);
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
        return new DxAccordion(element, options);
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
DxAccordionComponent.ctorParameters = () => [
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
], DxAccordionComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "animationDuration", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "collapsible", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "deferRendering", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "height", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "hint", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "items", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "itemTitleTemplate", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "keyExpr", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "multiple", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "repaintChangesOnly", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "selectedIndex", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "selectedItem", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "selectedItemKeys", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "selectedItems", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "visible", null);
__decorate([
    Input()
], DxAccordionComponent.prototype, "width", null);
__decorate([
    Output()
], DxAccordionComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "onItemTitleClick", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "animationDurationChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "collapsibleChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "deferRenderingChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "itemTitleTemplateChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "keyExprChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "multipleChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "repaintChangesOnlyChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "selectedIndexChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "selectedItemChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "selectedItemKeysChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "selectedItemsChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxAccordionComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxAccordionComponent.prototype, "itemsChildren", null);
DxAccordionComponent = __decorate([
    Component({
        selector: 'dx-accordion',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxAccordionComponent);
let DxAccordionModule = class DxAccordionModule {
};
DxAccordionModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxAccordionComponent
        ],
        exports: [
            DxAccordionComponent,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxAccordionModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxAccordionComponent, DxAccordionModule };
//# sourceMappingURL=devextreme-angular-ui-accordion.js.map
