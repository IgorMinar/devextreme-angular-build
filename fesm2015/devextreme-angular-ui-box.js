import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxBox from 'devextreme/ui/box';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxiItemModule, DxoBoxModule } from 'devextreme-angular/ui/nested';

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
 * The Box widget allows you to arrange various elements within it. Separate and adaptive, the Box widget acts as a building block for the layout.
 */
let DxBoxComponent = class DxBoxComponent extends DxComponent {
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
            { emit: 'alignChange' },
            { emit: 'crossAlignChange' },
            { emit: 'dataSourceChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies how widget items are aligned along the main direction.
     */
    get align() {
        return this._getOption('align');
    }
    set align(value) {
        this._setOption('align', value);
    }
    /**
     * Specifies how widget items are aligned cross-wise.
     */
    get crossAlign() {
        return this._getOption('crossAlign');
    }
    set crossAlign(value) {
        this._setOption('crossAlign', value);
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
     * Specifies the direction of item positioning in the widget.
     */
    get direction() {
        return this._getOption('direction');
    }
    set direction(value) {
        this._setOption('direction', value);
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
        return new DxBox(element, options);
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
DxBoxComponent.ctorParameters = () => [
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
], DxBoxComponent.prototype, "align", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "crossAlign", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "direction", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "height", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "items", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "visible", null);
__decorate([
    Input()
], DxBoxComponent.prototype, "width", null);
__decorate([
    Output()
], DxBoxComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "alignChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "crossAlignChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "directionChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxBoxComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxBoxComponent.prototype, "itemsChildren", null);
DxBoxComponent = __decorate([
    Component({
        selector: 'dx-box',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxBoxComponent);
let DxBoxModule = class DxBoxModule {
};
DxBoxModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxoBoxModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxBoxComponent
        ],
        exports: [
            DxBoxComponent,
            DxiItemModule,
            DxoBoxModule,
            DxTemplateModule
        ]
    })
], DxBoxModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxBoxComponent, DxBoxModule };
//# sourceMappingURL=devextreme-angular-ui-box.js.map
