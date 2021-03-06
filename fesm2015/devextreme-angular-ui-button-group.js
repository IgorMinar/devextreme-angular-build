import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxButtonGroup from 'devextreme/ui/button_group';
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
 * The ButtonGroup is a widget that contains a set of toggle buttons and can be used as a mode switcher.
 */
let DxButtonGroupComponent = class DxButtonGroupComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedItemKeysChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'selectionModeChange' },
            { emit: 'stylingModeChange' },
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
     * Configures buttons in the group.
     */
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
    /**
     * Specifies a custom button template.
     */
    get itemTemplate() {
        return this._getOption('itemTemplate');
    }
    set itemTemplate(value) {
        this._setOption('itemTemplate', value);
    }
    /**
     * Specifies which data field provides keys used to distinguish between the selected buttons.
     */
    get keyExpr() {
        return this._getOption('keyExpr');
    }
    set keyExpr(value) {
        this._setOption('keyExpr', value);
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
     * Contains the keys of the selected buttons and allows selecting buttons initially.
     */
    get selectedItemKeys() {
        return this._getOption('selectedItemKeys');
    }
    set selectedItemKeys(value) {
        this._setOption('selectedItemKeys', value);
    }
    /**
     * Contains the data objects that correspond to the selected buttons. The data objects are taken from the items array.
     */
    get selectedItems() {
        return this._getOption('selectedItems');
    }
    set selectedItems(value) {
        this._setOption('selectedItems', value);
    }
    /**
     * Specifies whether a single or multiple buttons can be in the selected state simultaneously.
     */
    get selectionMode() {
        return this._getOption('selectionMode');
    }
    set selectionMode(value) {
        this._setOption('selectionMode', value);
    }
    /**
     * Specifies how buttons in the group are styled.
     */
    get stylingMode() {
        return this._getOption('stylingMode');
    }
    set stylingMode(value) {
        this._setOption('stylingMode', value);
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
        return new DxButtonGroup(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
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
DxButtonGroupComponent.ctorParameters = () => [
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
], DxButtonGroupComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "height", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "hint", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "items", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "keyExpr", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "selectedItemKeys", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "selectedItems", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "stylingMode", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "visible", null);
__decorate([
    Input()
], DxButtonGroupComponent.prototype, "width", null);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "keyExprChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "selectedItemKeysChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "selectedItemsChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "selectionModeChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "stylingModeChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxButtonGroupComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxButtonGroupComponent.prototype, "itemsChildren", null);
DxButtonGroupComponent = __decorate([
    Component({
        selector: 'dx-button-group',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxButtonGroupComponent);
let DxButtonGroupModule = class DxButtonGroupModule {
};
DxButtonGroupModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxButtonGroupComponent
        ],
        exports: [
            DxButtonGroupComponent,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxButtonGroupModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxButtonGroupComponent, DxButtonGroupModule };
//# sourceMappingURL=devextreme-angular-ui-button-group.js.map
