import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxScrollView from 'devextreme/ui/scroll_view';
import { DxTemplateHost, WatcherHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';

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
 * The ScrollView is a widget that enables a user to scroll its content.
 */
var DxScrollViewComponent = /** @class */ (function (_super) {
    __extends(DxScrollViewComponent, _super);
    function DxScrollViewComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pullDown', emit: 'onPullDown' },
            { subscribe: 'reachBottom', emit: 'onReachBottom' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'updated', emit: 'onUpdated' },
            { emit: 'bounceEnabledChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'reachBottomTextChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollByThumbChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'useNativeChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxScrollViewComponent.prototype, "bounceEnabled", {
        /**
         * A Boolean value specifying whether to enable or disable the bounce-back effect.
         */
        get: function () {
            return this._getOption('bounceEnabled');
        },
        set: function (value) {
            this._setOption('bounceEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "direction", {
        /**
         * A string value specifying the available scrolling directions.
         */
        get: function () {
            return this._getOption('direction');
        },
        set: function (value) {
            this._setOption('direction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "disabled", {
        /**
         * A Boolean value specifying whether or not the widget can respond to user interaction.
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
    Object.defineProperty(DxScrollViewComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxScrollViewComponent.prototype, "height", {
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
    Object.defineProperty(DxScrollViewComponent.prototype, "pulledDownText", {
        /**
         * Specifies the text shown in the pullDown panel when pulling the content down lowers the refresh threshold.
         */
        get: function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "pullingDownText", {
        /**
         * Specifies the text shown in the pullDown panel while pulling the content down to the refresh threshold.
         */
        get: function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "reachBottomText", {
        /**
         * Specifies the text shown in the pullDown panel displayed when content is scrolled to the bottom.
         */
        get: function () {
            return this._getOption('reachBottomText');
        },
        set: function (value) {
            this._setOption('reachBottomText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "refreshingText", {
        /**
         * Specifies the text shown in the pullDown panel displayed when the content is being refreshed.
         */
        get: function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByContent", {
        /**
         * A Boolean value specifying whether or not an end-user can scroll the widget content swiping it up or down. Applies only if useNative is false
         */
        get: function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByThumb", {
        /**
         * A Boolean value specifying whether or not an end-user can scroll the widget content using the scrollbar.
         */
        get: function () {
            return this._getOption('scrollByThumb');
        },
        set: function (value) {
            this._setOption('scrollByThumb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "showScrollbar", {
        /**
         * Specifies when the widget shows the scrollbar.
         */
        get: function () {
            return this._getOption('showScrollbar');
        },
        set: function (value) {
            this._setOption('showScrollbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "useNative", {
        /**
         * Indicates whether to use native or simulated scrolling.
         */
        get: function () {
            return this._getOption('useNative');
        },
        set: function (value) {
            this._setOption('useNative', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "width", {
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
    DxScrollViewComponent.prototype._createInstance = function (element, options) {
        return new DxScrollView(element, options);
    };
    DxScrollViewComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxScrollViewComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "bounceEnabled", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "direction", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "pulledDownText", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "pullingDownText", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "reachBottomText", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "refreshingText", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "scrollByContent", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "scrollByThumb", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "showScrollbar", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "useNative", null);
    __decorate([
        Input()
    ], DxScrollViewComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "onPullDown", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "onReachBottom", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "onScroll", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "onUpdated", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "bounceEnabledChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "directionChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "pulledDownTextChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "pullingDownTextChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "reachBottomTextChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "refreshingTextChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "scrollByContentChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "scrollByThumbChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "showScrollbarChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "useNativeChange", void 0);
    __decorate([
        Output()
    ], DxScrollViewComponent.prototype, "widthChange", void 0);
    DxScrollViewComponent = __decorate([
        Component({
            selector: 'dx-scroll-view',
            template: '<ng-content></ng-content>',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxScrollViewComponent);
    return DxScrollViewComponent;
}(DxComponent));
var DxScrollViewModule = /** @class */ (function () {
    function DxScrollViewModule() {
    }
    DxScrollViewModule = __decorate([
        NgModule({
            imports: [
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxScrollViewComponent
            ],
            exports: [
                DxScrollViewComponent,
                DxTemplateModule
            ]
        })
    ], DxScrollViewModule);
    return DxScrollViewModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxScrollViewComponent, DxScrollViewModule };
//# sourceMappingURL=devextreme-angular-ui-scroll-view.js.map
