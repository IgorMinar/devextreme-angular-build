import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxDeferRendering from 'devextreme/ui/defer_rendering';
import { DxTemplateHost, WatcherHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoAnimationModule } from 'devextreme-angular/ui/nested';

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
 * The DeferRendering is a widget that waits for its content to be ready before rendering it. While the content is getting ready, the DeferRendering displays a loading indicator.
 */
var DxDeferRenderingComponent = /** @class */ (function (_super) {
    __extends(DxDeferRenderingComponent, _super);
    function DxDeferRenderingComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'rendered', emit: 'onRendered' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'renderWhenChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showLoadIndicatorChange' },
            { emit: 'staggerItemSelectorChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxDeferRenderingComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxDeferRenderingComponent.prototype, "activeStateEnabled", {
        /**
         * Specifies whether or not the widget changes its state when interacting with a user.
         */
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDeferRenderingComponent.prototype, "animation", {
        /**
         * Specifies the animation to be used to show the rendered content.
         */
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDeferRenderingComponent.prototype, "disabled", {
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
    Object.defineProperty(DxDeferRenderingComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxDeferRenderingComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxDeferRenderingComponent.prototype, "height", {
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
    Object.defineProperty(DxDeferRenderingComponent.prototype, "hint", {
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
    Object.defineProperty(DxDeferRenderingComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxDeferRenderingComponent.prototype, "renderWhen", {
        /**
         * Specifies when the widget content is rendered.
         */
        get: function () {
            return this._getOption('renderWhen');
        },
        set: function (value) {
            this._setOption('renderWhen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDeferRenderingComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxDeferRenderingComponent.prototype, "showLoadIndicator", {
        /**
         * Indicates if a load indicator should be shown until the widget's content is rendered.
         */
        get: function () {
            return this._getOption('showLoadIndicator');
        },
        set: function (value) {
            this._setOption('showLoadIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDeferRenderingComponent.prototype, "staggerItemSelector", {
        /**
         * Specifies a jQuery selector of items that should be rendered using a staggered animation.
         */
        get: function () {
            return this._getOption('staggerItemSelector');
        },
        set: function (value) {
            this._setOption('staggerItemSelector', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDeferRenderingComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxDeferRenderingComponent.prototype, "visible", {
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
    Object.defineProperty(DxDeferRenderingComponent.prototype, "width", {
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
    DxDeferRenderingComponent.prototype._createInstance = function (element, options) {
        return new DxDeferRendering(element, options);
    };
    DxDeferRenderingComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDeferRenderingComponent.ctorParameters = function () { return [
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
    ], DxDeferRenderingComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "renderWhen", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "showLoadIndicator", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "staggerItemSelector", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxDeferRenderingComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "onRendered", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "onShown", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "renderWhenChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "showLoadIndicatorChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "staggerItemSelectorChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxDeferRenderingComponent.prototype, "widthChange", void 0);
    DxDeferRenderingComponent = __decorate([
        Component({
            selector: 'dx-defer-rendering',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxDeferRenderingComponent);
    return DxDeferRenderingComponent;
}(DxComponent));
var DxDeferRenderingModule = /** @class */ (function () {
    function DxDeferRenderingModule() {
    }
    DxDeferRenderingModule = __decorate([
        NgModule({
            imports: [
                DxoAnimationModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxDeferRenderingComponent
            ],
            exports: [
                DxDeferRenderingComponent,
                DxoAnimationModule,
                DxTemplateModule
            ]
        })
    ], DxDeferRenderingModule);
    return DxDeferRenderingModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxDeferRenderingComponent, DxDeferRenderingModule };
//# sourceMappingURL=devextreme-angular-ui-defer-rendering.js.map
