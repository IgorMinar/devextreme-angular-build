import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxTooltip from 'devextreme/ui/tooltip';
import { DxTemplateHost, WatcherHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoAnimationModule, DxoHideModule, DxoShowModule, DxoHideEventModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxoShowEventModule } from 'devextreme-angular/ui/nested';

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
 * The Tooltip widget displays a tooltip for a specified element on the page.
 */
var DxTooltipComponent = /** @class */ (function (_super) {
    __extends(DxTooltipComponent, _super);
    function DxTooltipComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
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
            { emit: 'closeOnBackButtonChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'containerChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hideEventChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'showEventChange' },
            { emit: 'targetChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTooltipComponent.prototype, "animation", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "closeOnBackButton", {
        /**
         * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
         */
        get: function () {
            return this._getOption('closeOnBackButton');
        },
        set: function (value) {
            this._setOption('closeOnBackButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTooltipComponent.prototype, "closeOnOutsideClick", {
        /**
         * A Boolean value specifying whether or not the widget is closed if a user clicks outside of the popover window and outside the target element.
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
    Object.defineProperty(DxTooltipComponent.prototype, "container", {
        /**
         * Specifies the container in which to place the widget.
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
    Object.defineProperty(DxTooltipComponent.prototype, "contentTemplate", {
        /**
         * Specifies a custom template for the widget content.
         */
        get: function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTooltipComponent.prototype, "deferRendering", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "height", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "hideEvent", {
        /**
         * Specifies options of popover hiding.
         */
        get: function () {
            return this._getOption('hideEvent');
        },
        set: function (value) {
            this._setOption('hideEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTooltipComponent.prototype, "hint", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "maxHeight", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "maxWidth", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "minHeight", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "minWidth", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "position", {
        /**
         * An object defining widget positioning options.
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
    Object.defineProperty(DxTooltipComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "shading", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "shadingColor", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "showEvent", {
        /**
         * Specifies options for displaying the widget.
         */
        get: function () {
            return this._getOption('showEvent');
        },
        set: function (value) {
            this._setOption('showEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTooltipComponent.prototype, "target", {
        /**
         * The target element associated with the widget.
         */
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTooltipComponent.prototype, "visible", {
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
    Object.defineProperty(DxTooltipComponent.prototype, "width", {
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
    DxTooltipComponent.prototype._createInstance = function (element, options) {
        return new DxTooltip(element, options);
    };
    DxTooltipComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTooltipComponent.ctorParameters = function () { return [
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
    ], DxTooltipComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "closeOnBackButton", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "closeOnOutsideClick", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "container", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "contentTemplate", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "hideEvent", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "maxHeight", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "maxWidth", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "minHeight", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "minWidth", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "position", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "shading", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "shadingColor", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "showEvent", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "target", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxTooltipComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "onHidden", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "onHiding", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "onShowing", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "onShown", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "closeOnBackButtonChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "closeOnOutsideClickChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "containerChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "contentTemplateChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "hideEventChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "maxHeightChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "maxWidthChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "minHeightChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "minWidthChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "positionChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "shadingChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "shadingColorChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "showEventChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "targetChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxTooltipComponent.prototype, "widthChange", void 0);
    DxTooltipComponent = __decorate([
        Component({
            selector: 'dx-tooltip',
            template: '<ng-content></ng-content>',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxTooltipComponent);
    return DxTooltipComponent;
}(DxComponent));
var DxTooltipModule = /** @class */ (function () {
    function DxTooltipModule() {
    }
    DxTooltipModule = __decorate([
        NgModule({
            imports: [
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoHideEventModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxoShowEventModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxTooltipComponent
            ],
            exports: [
                DxTooltipComponent,
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoHideEventModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxoShowEventModule,
                DxTemplateModule
            ]
        })
    ], DxTooltipModule);
    return DxTooltipModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxTooltipComponent, DxTooltipModule };
//# sourceMappingURL=devextreme-angular-ui-tooltip.js.map
