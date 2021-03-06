import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxLoadPanel from 'devextreme/ui/load_panel';
import { DxTemplateHost, WatcherHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoAnimationModule, DxoHideModule, DxoShowModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule } from 'devextreme-angular/ui/nested';

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
 * The LoadPanel is an overlay widget notifying the viewer that loading is in progress.
 */
var DxLoadPanelComponent = /** @class */ (function (_super) {
    __extends(DxLoadPanelComponent, _super);
    function DxLoadPanelComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'animationChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'containerChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'delayChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'indicatorSrcChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'messageChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'showIndicatorChange' },
            { emit: 'showPaneChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxLoadPanelComponent.prototype, "animation", {
        /**
         * Configures widget visibility animations. This object contains two fields: show and hide.
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "closeOnOutsideClick", {
        /**
         * Specifies whether to close the widget if a user clicks outside it.
         */
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "container", {
        /**
         * Specifies the widget's container.
         */
        get: function () {
            return this._getOption('container');
        },
        set: function (value) {
            this._setOption('container', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "deferRendering", {
        /**
         * Specifies whether to render the widget's content when it is displayed. If false, the content is rendered immediately.
         */
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "delay", {
        /**
         * The delay in milliseconds after which the load panel is displayed.
         */
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether or not the widget can be focused.
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "height", {
        /**
         * Specifies the widget's height in pixels.
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "hint", {
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "indicatorSrc", {
        /**
         * A URL pointing to an image to be used as a load indicator.
         */
        get: function () {
            return this._getOption('indicatorSrc');
        },
        set: function (value) {
            this._setOption('indicatorSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "maxHeight", {
        /**
         * Specifies the maximum height the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "maxWidth", {
        /**
         * Specifies the maximum width the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "message", {
        /**
         * Specifies the text displayed in the load panel. Ignored in the Material Design theme.
         */
        get: function () {
            return this._getOption('message');
        },
        set: function (value) {
            this._setOption('message', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "minHeight", {
        /**
         * Specifies the minimum height the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "minWidth", {
        /**
         * Specifies the minimum width the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "position", {
        /**
         * Positions the widget.
         */
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "shading", {
        /**
         * Specifies whether to shade the background when the widget is active.
         */
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "shadingColor", {
        /**
         * Specifies the shading color.
         */
        get: function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "showIndicator", {
        /**
         * A Boolean value specifying whether or not to show a load indicator.
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "showPane", {
        /**
         * A Boolean value specifying whether or not to show the pane behind the load indicator.
         */
        get: function () {
            return this._getOption('showPane');
        },
        set: function (value) {
            this._setOption('showPane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "visible", {
        /**
         * A Boolean value specifying whether or not the widget is visible.
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "width", {
        /**
         * Specifies the widget's width in pixels.
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
    DxLoadPanelComponent.prototype._createInstance = function (element, options) {
        return new DxLoadPanel(element, options);
    };
    DxLoadPanelComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxLoadPanelComponent.ctorParameters = function () { return [
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
    ], DxLoadPanelComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "closeOnOutsideClick", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "container", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "delay", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "indicatorSrc", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "maxHeight", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "maxWidth", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "message", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "minHeight", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "minWidth", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "position", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "shading", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "shadingColor", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "showIndicator", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "showPane", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxLoadPanelComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onHidden", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onHiding", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onShowing", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "onShown", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "closeOnOutsideClickChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "containerChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "delayChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "indicatorSrcChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "maxHeightChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "maxWidthChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "messageChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "minHeightChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "minWidthChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "positionChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "shadingChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "shadingColorChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "showIndicatorChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "showPaneChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxLoadPanelComponent.prototype, "widthChange", void 0);
    DxLoadPanelComponent = __decorate([
        Component({
            selector: 'dx-load-panel',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxLoadPanelComponent);
    return DxLoadPanelComponent;
}(DxComponent));
var DxLoadPanelModule = /** @class */ (function () {
    function DxLoadPanelModule() {
    }
    DxLoadPanelModule = __decorate([
        NgModule({
            imports: [
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxLoadPanelComponent
            ],
            exports: [
                DxLoadPanelComponent,
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxTemplateModule
            ]
        })
    ], DxLoadPanelModule);
    return DxLoadPanelModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxLoadPanelComponent, DxLoadPanelModule };
//# sourceMappingURL=devextreme-angular-ui-load-panel.js.map
