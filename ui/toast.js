"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_2 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var toast_1 = require("devextreme/ui/toast");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var animation_1 = require("./nested/animation");
var hide_1 = require("./nested/hide");
var show_1 = require("./nested/show");
var position_1 = require("./nested/position");
var at_1 = require("./nested/at");
var boundary_offset_1 = require("./nested/boundary-offset");
var collision_1 = require("./nested/collision");
var my_1 = require("./nested/my");
var offset_1 = require("./nested/offset");
/**
 * The Toast is a widget that provides pop-up notifications.
 */
var DxToastComponent = (function (_super) {
    __extends(DxToastComponent, _super);
    function DxToastComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
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
            { emit: 'accessKeyChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnBackButtonChange' },
            { emit: 'closeOnClickChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'closeOnSwipeChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'displayTimeChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'messageChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'tabIndexChange' },
            { emit: 'typeChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxToastComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "animation", {
        get: /**
             * Configures widget visibility animations. This object contains two fields: show and hide.
             */
        function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "closeOnBackButton", {
        get: /**
             * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
             */
        function () {
            return this._getOption('closeOnBackButton');
        },
        set: function (value) {
            this._setOption('closeOnBackButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "closeOnClick", {
        get: /**
             * A Boolean value specifying whether or not the toast is closed if a user clicks it.
             */
        function () {
            return this._getOption('closeOnClick');
        },
        set: function (value) {
            this._setOption('closeOnClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "closeOnOutsideClick", {
        get: /**
             * Specifies whether to close the widget if a user clicks outside it.
             */
        function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "closeOnSwipe", {
        get: /**
             * A Boolean value specifying whether or not the toast is closed if a user swipes it out of the screen boundaries.
             */
        function () {
            return this._getOption('closeOnSwipe');
        },
        set: function (value) {
            this._setOption('closeOnSwipe', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "contentTemplate", {
        get: /**
             * Specifies a custom template for the widget content.
             */
        function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to render the widget's content when it is displayed. If false, the content is rendered immediately.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "displayTime", {
        get: /**
             * The time span in milliseconds during which the Toast widget is visible.
             */
        function () {
            return this._getOption('displayTime');
        },
        set: function (value) {
            this._setOption('displayTime', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height in pixels.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "maxHeight", {
        get: /**
             * Specifies the maximum height the widget can reach while resizing.
             */
        function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "maxWidth", {
        get: /**
             * Specifies the maximum width the widget can reach while resizing.
             */
        function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "message", {
        get: /**
             * The Toast message text.
             */
        function () {
            return this._getOption('message');
        },
        set: function (value) {
            this._setOption('message', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "minHeight", {
        get: /**
             * Specifies the minimum height the widget can reach while resizing.
             */
        function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "minWidth", {
        get: /**
             * Specifies the minimum width the widget can reach while resizing.
             */
        function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "position", {
        get: /**
             * Positions the widget.
             */
        function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "shading", {
        get: /**
             * Specifies whether to shade the background when the widget is active.
             */
        function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "shadingColor", {
        get: /**
             * Specifies the shading color.
             */
        function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "type", {
        get: /**
             * Specifies the Toast widget type.
             */
        function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "visible", {
        get: /**
             * A Boolean value specifying whether or not the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxToastComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width in pixels.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxToastComponent.prototype._createInstance = function (element, options) {
        return new toast_1.default(element, options);
    };
    DxToastComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxToastComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-toast',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxToastComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxToastComponent.propDecorators = {
        "accessKey": [{ type: core_1.Input },],
        "animation": [{ type: core_1.Input },],
        "closeOnBackButton": [{ type: core_1.Input },],
        "closeOnClick": [{ type: core_1.Input },],
        "closeOnOutsideClick": [{ type: core_1.Input },],
        "closeOnSwipe": [{ type: core_1.Input },],
        "contentTemplate": [{ type: core_1.Input },],
        "deferRendering": [{ type: core_1.Input },],
        "displayTime": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "maxHeight": [{ type: core_1.Input },],
        "maxWidth": [{ type: core_1.Input },],
        "message": [{ type: core_1.Input },],
        "minHeight": [{ type: core_1.Input },],
        "minWidth": [{ type: core_1.Input },],
        "position": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "shading": [{ type: core_1.Input },],
        "shadingColor": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "type": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onHidden": [{ type: core_1.Output },],
        "onHiding": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onShowing": [{ type: core_1.Output },],
        "onShown": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "animationChange": [{ type: core_1.Output },],
        "closeOnBackButtonChange": [{ type: core_1.Output },],
        "closeOnClickChange": [{ type: core_1.Output },],
        "closeOnOutsideClickChange": [{ type: core_1.Output },],
        "closeOnSwipeChange": [{ type: core_1.Output },],
        "contentTemplateChange": [{ type: core_1.Output },],
        "deferRenderingChange": [{ type: core_1.Output },],
        "displayTimeChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "maxHeightChange": [{ type: core_1.Output },],
        "maxWidthChange": [{ type: core_1.Output },],
        "messageChange": [{ type: core_1.Output },],
        "minHeightChange": [{ type: core_1.Output },],
        "minWidthChange": [{ type: core_1.Output },],
        "positionChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "shadingChange": [{ type: core_1.Output },],
        "shadingColorChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "typeChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
    };
    return DxToastComponent;
}(component_1.DxComponent));
exports.DxToastComponent = DxToastComponent;
var DxToastModule = (function () {
    function DxToastModule() {
    }
    DxToastModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxToastComponent
                    ],
                    exports: [
                        DxToastComponent,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxToastModule;
}());
exports.DxToastModule = DxToastModule;
//# sourceMappingURL=toast.js.map