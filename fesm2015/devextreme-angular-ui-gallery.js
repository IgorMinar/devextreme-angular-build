import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxGallery from 'devextreme/ui/gallery';
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
 * The Gallery is a widget that displays a collection of images in a carousel. The widget is supplied with various navigation controls that allow a user to switch between images.
 */
let DxGalleryComponent = class DxGalleryComponent extends DxComponent {
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
            { emit: 'animationDurationChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'indicatorEnabledChange' },
            { emit: 'initialItemWidthChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'loopChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showIndicatorChange' },
            { emit: 'showNavButtonsChange' },
            { emit: 'slideshowDelayChange' },
            { emit: 'stretchImagesChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'wrapAroundChange' }
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
     * The time, in milliseconds, spent on slide animation.
     */
    get animationDuration() {
        return this._getOption('animationDuration');
    }
    set animationDuration(value) {
        this._setOption('animationDuration', value);
    }
    /**
     * Specifies whether or not to animate the displayed item change.
     */
    get animationEnabled() {
        return this._getOption('animationEnabled');
    }
    set animationEnabled(value) {
        this._setOption('animationEnabled', value);
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
     * A Boolean value specifying whether or not to allow users to switch between items by clicking an indicator.
     */
    get indicatorEnabled() {
        return this._getOption('indicatorEnabled');
    }
    set indicatorEnabled(value) {
        this._setOption('indicatorEnabled', value);
    }
    /**
     * Specifies the width of an area used to display a single image.
     */
    get initialItemWidth() {
        return this._getOption('initialItemWidth');
    }
    set initialItemWidth(value) {
        this._setOption('initialItemWidth', value);
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
     * A Boolean value specifying whether or not to scroll back to the first item after the last item is swiped.
     */
    get loop() {
        return this._getOption('loop');
    }
    set loop(value) {
        this._setOption('loop', value);
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
     * The index of the currently active gallery item.
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
     * A Boolean value specifying whether or not to display an indicator that points to the selected gallery item.
     */
    get showIndicator() {
        return this._getOption('showIndicator');
    }
    set showIndicator(value) {
        this._setOption('showIndicator', value);
    }
    /**
     * A Boolean value that specifies the availability of the "Forward" and "Back" navigation buttons.
     */
    get showNavButtons() {
        return this._getOption('showNavButtons');
    }
    set showNavButtons(value) {
        this._setOption('showNavButtons', value);
    }
    /**
     * The time interval in milliseconds, after which the gallery switches to the next item.
     */
    get slideshowDelay() {
        return this._getOption('slideshowDelay');
    }
    set slideshowDelay(value) {
        this._setOption('slideshowDelay', value);
    }
    /**
     * Specifies if the widget stretches images to fit the total gallery width.
     */
    get stretchImages() {
        return this._getOption('stretchImages');
    }
    set stretchImages(value) {
        this._setOption('stretchImages', value);
    }
    /**
     * A Boolean value specifying whether or not to allow users to switch between items by swiping.
     */
    get swipeEnabled() {
        return this._getOption('swipeEnabled');
    }
    set swipeEnabled(value) {
        this._setOption('swipeEnabled', value);
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
    /**
     * Specifies whether or not to display parts of previous and next images along the sides of the current image.
     */
    get wrapAround() {
        return this._getOption('wrapAround');
    }
    set wrapAround(value) {
        this._setOption('wrapAround', value);
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
    _createInstance(element, options) {
        return new DxGallery(element, options);
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
DxGalleryComponent.ctorParameters = () => [
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
], DxGalleryComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "animationDuration", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "animationEnabled", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "height", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "hint", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "indicatorEnabled", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "initialItemWidth", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "itemHoldTimeout", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "items", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "loop", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "selectedIndex", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "selectedItem", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "showIndicator", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "showNavButtons", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "slideshowDelay", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "stretchImages", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "swipeEnabled", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "visible", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "width", null);
__decorate([
    Input()
], DxGalleryComponent.prototype, "wrapAround", null);
__decorate([
    Output()
], DxGalleryComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "onItemContextMenu", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "onItemHold", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "onItemRendered", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "animationDurationChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "animationEnabledChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "indicatorEnabledChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "initialItemWidthChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "itemHoldTimeoutChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "loopChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "selectedIndexChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "selectedItemChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "showIndicatorChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "showNavButtonsChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "slideshowDelayChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "stretchImagesChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "swipeEnabledChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxGalleryComponent.prototype, "wrapAroundChange", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxGalleryComponent.prototype, "itemsChildren", null);
DxGalleryComponent = __decorate([
    Component({
        selector: 'dx-gallery',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxGalleryComponent);
let DxGalleryModule = class DxGalleryModule {
};
DxGalleryModule = __decorate([
    NgModule({
        imports: [
            DxiItemModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxGalleryComponent
        ],
        exports: [
            DxGalleryComponent,
            DxiItemModule,
            DxTemplateModule
        ]
    })
], DxGalleryModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxGalleryComponent, DxGalleryModule };
//# sourceMappingURL=devextreme-angular-ui-gallery.js.map
