import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxToolbar from 'devextreme/ui/toolbar';
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
 * The Toolbar is a widget containing items that usually manage screen content. Those items can be plain text or widgets.
 */
let DxToolbarComponent = class DxToolbarComponent extends DxComponent {
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
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'menuItemTemplateChange' },
            { emit: 'noDataTextChange' },
            { emit: 'renderAsChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
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
     * Specifies a custom template for menu items.
     */
    get menuItemTemplate() {
        return this._getOption('menuItemTemplate');
    }
    set menuItemTemplate(value) {
        this._setOption('menuItemTemplate', value);
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
     * Informs the widget about its location in a view HTML markup.
     */
    get renderAs() {
        return this._getOption('renderAs');
    }
    set renderAs(value) {
        this._setOption('renderAs', value);
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
        return new DxToolbar(element, options);
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
DxToolbarComponent.ctorParameters = () => [
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
], DxToolbarComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "height", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "hint", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "items", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "menuItemTemplate", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "renderAs", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "visible", null);
__decorate([
    Input()
], DxToolbarComponent.prototype, "width", null);
__decorate([
    Output()
], DxToolbarComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "menuItemTemplateChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "renderAsChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxToolbarComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxToolbarComponent.prototype, "itemsChildren", null);
DxToolbarComponent = __decorate([
    Component({
        selector: 'dx-toolbar',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxToolbarComponent);
let DxToolbarModule = class DxToolbarModule {
};
DxToolbarModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxToolbarComponent
        ],
        exports: [
            DxToolbarComponent,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxToolbarModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxToolbarComponent, DxToolbarModule };
//# sourceMappingURL=devextreme-angular-ui-toolbar.js.map
