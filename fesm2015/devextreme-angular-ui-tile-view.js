import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxTileView from 'devextreme/ui/tile_view';
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
 * The TileView widget contains a collection of tiles. Tiles can store much more information than ordinary buttons, that is why they are very popular in apps designed for touch devices.
 */
let DxTileViewComponent = class DxTileViewComponent extends DxComponent {
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
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'baseItemHeightChange' },
            { emit: 'baseItemWidthChange' },
            { emit: 'dataSourceChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemMarginChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'noDataTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showScrollbarChange' },
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
     * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Specifies the height of the base tile view item.
     */
    get baseItemHeight() {
        return this._getOption('baseItemHeight');
    }
    set baseItemHeight(value) {
        this._setOption('baseItemHeight', value);
    }
    /**
     * Specifies the width of the base tile view item.
     */
    get baseItemWidth() {
        return this._getOption('baseItemWidth');
    }
    set baseItemWidth(value) {
        this._setOption('baseItemWidth', value);
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
     * Specifies whether tiles are placed horizontally or vertically.
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
     * Specifies the distance in pixels between adjacent tiles.
     */
    get itemMargin() {
        return this._getOption('itemMargin');
    }
    set itemMargin(value) {
        this._setOption('itemMargin', value);
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
     * A Boolean value specifying whether or not to display a scrollbar.
     */
    get showScrollbar() {
        return this._getOption('showScrollbar');
    }
    set showScrollbar(value) {
        this._setOption('showScrollbar', value);
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
        return new DxTileView(element, options);
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
DxTileViewComponent.ctorParameters = () => [
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
], DxTileViewComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "baseItemHeight", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "baseItemWidth", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "direction", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "height", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "hint", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "itemMargin", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "items", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "showScrollbar", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "visible", null);
__decorate([
    Input()
], DxTileViewComponent.prototype, "width", null);
__decorate([
    Output()
], DxTileViewComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "baseItemHeightChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "baseItemWidthChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "directionChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "itemMarginChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "showScrollbarChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxTileViewComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxTileViewComponent.prototype, "itemsChildren", null);
DxTileViewComponent = __decorate([
    Component({
        selector: 'dx-tile-view',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxTileViewComponent);
let DxTileViewModule = class DxTileViewModule {
};
DxTileViewModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxTileViewComponent
        ],
        exports: [
            DxTileViewComponent,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxTileViewModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxTileViewComponent, DxTileViewModule };
//# sourceMappingURL=devextreme-angular-ui-tile-view.js.map
