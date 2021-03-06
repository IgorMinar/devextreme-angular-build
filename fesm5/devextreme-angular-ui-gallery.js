import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxGallery from 'devextreme/ui/gallery';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
var DxGalleryComponent = /** @class */ (function (_super) {
    __extends(DxGalleryComponent, _super);
    function DxGalleryComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxGalleryComponent.prototype, "accessKey", {
        /**
         * Specifies the shortcut key that sets focus on the widget.
         */
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "animationDuration", {
        /**
         * The time, in milliseconds, spent on slide animation.
         */
        get: function () {
            return this._getOption('animationDuration');
        },
        set: function (value) {
            this._setOption('animationDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "animationEnabled", {
        /**
         * Specifies whether or not to animate the displayed item change.
         */
        get: function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "dataSource", {
        /**
         * Binds the widget to data.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether the widget can be focused using keyboard navigation.
         */
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "hint", {
        /**
         * Specifies text for a hint that appears when a user pauses on the widget.
         */
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "hoverStateEnabled", {
        /**
         * Specifies whether the widget changes its state when a user pauses on it.
         */
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "indicatorEnabled", {
        /**
         * A Boolean value specifying whether or not to allow users to switch between items by clicking an indicator.
         */
        get: function () {
            return this._getOption('indicatorEnabled');
        },
        set: function (value) {
            this._setOption('indicatorEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "initialItemWidth", {
        /**
         * Specifies the width of an area used to display a single image.
         */
        get: function () {
            return this._getOption('initialItemWidth');
        },
        set: function (value) {
            this._setOption('initialItemWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "itemHoldTimeout", {
        /**
         * The time period in milliseconds before the onItemHold event is raised.
         */
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "items", {
        /**
         * An array of items displayed by the widget.
         */
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "itemTemplate", {
        /**
         * Specifies a custom template for items.
         */
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "loop", {
        /**
         * A Boolean value specifying whether or not to scroll back to the first item after the last item is swiped.
         */
        get: function () {
            return this._getOption('loop');
        },
        set: function (value) {
            this._setOption('loop', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "selectedIndex", {
        /**
         * The index of the currently active gallery item.
         */
        get: function () {
            return this._getOption('selectedIndex');
        },
        set: function (value) {
            this._setOption('selectedIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "selectedItem", {
        /**
         * The selected item object.
         */
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "showIndicator", {
        /**
         * A Boolean value specifying whether or not to display an indicator that points to the selected gallery item.
         */
        get: function () {
            return this._getOption('showIndicator');
        },
        set: function (value) {
            this._setOption('showIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "showNavButtons", {
        /**
         * A Boolean value that specifies the availability of the "Forward" and "Back" navigation buttons.
         */
        get: function () {
            return this._getOption('showNavButtons');
        },
        set: function (value) {
            this._setOption('showNavButtons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "slideshowDelay", {
        /**
         * The time interval in milliseconds, after which the gallery switches to the next item.
         */
        get: function () {
            return this._getOption('slideshowDelay');
        },
        set: function (value) {
            this._setOption('slideshowDelay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "stretchImages", {
        /**
         * Specifies if the widget stretches images to fit the total gallery width.
         */
        get: function () {
            return this._getOption('stretchImages');
        },
        set: function (value) {
            this._setOption('stretchImages', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "swipeEnabled", {
        /**
         * A Boolean value specifying whether or not to allow users to switch between items by swiping.
         */
        get: function () {
            return this._getOption('swipeEnabled');
        },
        set: function (value) {
            this._setOption('swipeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "tabIndex", {
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "visible", {
        /**
         * Specifies whether the widget is visible.
         */
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "wrapAround", {
        /**
         * Specifies whether or not to display parts of previous and next images along the sides of the current image.
         */
        get: function () {
            return this._getOption('wrapAround');
        },
        set: function (value) {
            this._setOption('wrapAround', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxGalleryComponent.prototype._createInstance = function (element, options) {
        return new DxGallery(element, options);
    };
    DxGalleryComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxGalleryComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxGalleryComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxGalleryComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxGalleryComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxGalleryComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: IterableDifferHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
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
    return DxGalleryComponent;
}(DxComponent));
var DxGalleryModule = /** @class */ (function () {
    function DxGalleryModule() {
    }
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
    return DxGalleryModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxGalleryComponent, DxGalleryModule };
//# sourceMappingURL=devextreme-angular-ui-gallery.js.map
