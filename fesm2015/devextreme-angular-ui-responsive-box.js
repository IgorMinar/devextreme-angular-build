import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxResponsiveBox from 'devextreme/ui/responsive_box';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiColComponent, DxiItemComponent, DxiRowComponent, DxiColModule, DxiItemModule, DxiLocationModule, DxiRowModule } from 'devextreme-angular/ui/nested';

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
 * The ResponsiveBox widget allows you to create an application or a website with a layout adapted to different screen sizes.
 */
let DxResponsiveBoxComponent = class DxResponsiveBoxComponent extends DxComponent {
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
            { emit: 'colsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'rowsChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'screenByWidthChange' },
            { emit: 'singleColumnScreenChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the collection of columns for the grid used to position layout elements.
     */
    get cols() {
        return this._getOption('cols');
    }
    set cols(value) {
        this._setOption('cols', value);
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
     * Specifies the collection of rows for the grid used to position layout elements.
     */
    get rows() {
        return this._getOption('rows');
    }
    set rows(value) {
        this._setOption('rows', value);
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
     * Specifies the function returning the size qualifier depending on the screen's width.
     */
    get screenByWidth() {
        return this._getOption('screenByWidth');
    }
    set screenByWidth(value) {
        this._setOption('screenByWidth', value);
    }
    /**
     * Specifies on which screens all layout elements should be arranged in a single column. Accepts a single or several size qualifiers separated by a space.
     */
    get singleColumnScreen() {
        return this._getOption('singleColumnScreen');
    }
    set singleColumnScreen(value) {
        this._setOption('singleColumnScreen', value);
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
    get colsChildren() {
        return this._getOption('cols');
    }
    set colsChildren(value) {
        this.setChildren('cols', value);
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
    get rowsChildren() {
        return this._getOption('rows');
    }
    set rowsChildren(value) {
        this.setChildren('rows', value);
    }
    _createInstance(element, options) {
        return new DxResponsiveBox(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('cols', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('rows', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('cols');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('rows');
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
DxResponsiveBoxComponent.ctorParameters = () => [
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
], DxResponsiveBoxComponent.prototype, "cols", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "height", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "items", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "rows", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "screenByWidth", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "singleColumnScreen", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "visible", null);
__decorate([
    Input()
], DxResponsiveBoxComponent.prototype, "width", null);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "colsChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "rowsChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "screenByWidthChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "singleColumnScreenChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxResponsiveBoxComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiColComponent)
], DxResponsiveBoxComponent.prototype, "colsChildren", null);
__decorate([
    ContentChildren(DxiItemComponent)
], DxResponsiveBoxComponent.prototype, "itemsChildren", null);
__decorate([
    ContentChildren(DxiRowComponent)
], DxResponsiveBoxComponent.prototype, "rowsChildren", null);
DxResponsiveBoxComponent = __decorate([
    Component({
        selector: 'dx-responsive-box',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxResponsiveBoxComponent);
let DxResponsiveBoxModule = class DxResponsiveBoxModule {
};
DxResponsiveBoxModule = __decorate([
    NgModule({
        imports: [
            DxiColModule,
            DxiItemModule,
            DxiLocationModule,
            DxiRowModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxResponsiveBoxComponent
        ],
        exports: [
            DxResponsiveBoxComponent,
            DxiColModule,
            DxiItemModule,
            DxiLocationModule,
            DxiRowModule,
            DxTemplateModule
        ]
    })
], DxResponsiveBoxModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxResponsiveBoxComponent, DxResponsiveBoxModule };
//# sourceMappingURL=devextreme-angular-ui-responsive-box.js.map
