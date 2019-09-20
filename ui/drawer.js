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
var drawer_1 = require("devextreme/ui/drawer");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
/**
 * The Drawer is a dismissible or permanently visible panel used for navigation in responsive web application layouts.
 */
var DxDrawerComponent = (function (_super) {
    __extends(DxDrawerComponent, _super);
    function DxDrawerComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationDurationChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxSizeChange' },
            { emit: 'minSizeChange' },
            { emit: 'openedChange' },
            { emit: 'openedStateModeChange' },
            { emit: 'positionChange' },
            { emit: 'revealModeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'targetChange' },
            { emit: 'templateChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxDrawerComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "animationDuration", {
        get: /**
             * Specifies the duration of the drawer's opening and closing animation (in milliseconds). Applies only if animationEnabled is true.
             */
        function () {
            return this._getOption('animationDuration');
        },
        set: function (value) {
            this._setOption('animationDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "animationEnabled", {
        get: /**
             * Specifies whether to use an opening and closing animation.
             */
        function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "closeOnOutsideClick", {
        get: /**
             * Specifies whether to close the drawer if a user clicks or taps the view area.
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
    Object.defineProperty(DxDrawerComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
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
    Object.defineProperty(DxDrawerComponent.prototype, "hint", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "maxSize", {
        get: /**
             * Specifies the drawer's width or height (depending on the drawer's position) in the opened state.
             */
        function () {
            return this._getOption('maxSize');
        },
        set: function (value) {
            this._setOption('maxSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "minSize", {
        get: /**
             * Specifies the drawer's width or height (depending on the drawer's position) in the closed state.
             */
        function () {
            return this._getOption('minSize');
        },
        set: function (value) {
            this._setOption('minSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "opened", {
        get: /**
             * Specifies whether the drawer is opened.
             */
        function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "openedStateMode", {
        get: /**
             * Specifies how the drawer interacts with the view in the opened state.
             */
        function () {
            return this._getOption('openedStateMode');
        },
        set: function (value) {
            this._setOption('openedStateMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "position", {
        get: /**
             * Specifies the drawer's position in relation to the view.
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
    Object.defineProperty(DxDrawerComponent.prototype, "revealMode", {
        get: /**
             * Specifies the drawer's reveal mode.
             */
        function () {
            return this._getOption('revealMode');
        },
        set: function (value) {
            this._setOption('revealMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxDrawerComponent.prototype, "shading", {
        get: /**
             * Specifies whether to shade the view when the drawer is opened.
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
    Object.defineProperty(DxDrawerComponent.prototype, "target", {
        get: /**
             * Specifies the target element associated with the drawer. Applies only when the openedStateMode is "overlap".
             */
        function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "template", {
        get: /**
             * Specifies the drawer's content.
             */
        function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDrawerComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
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
    Object.defineProperty(DxDrawerComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
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
    DxDrawerComponent.prototype._createInstance = function (element, options) {
        return new drawer_1.default(element, options);
    };
    DxDrawerComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDrawerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-drawer',
                    template: '<ng-content></ng-content>',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxDrawerComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxDrawerComponent.propDecorators = {
        "activeStateEnabled": [{ type: core_1.Input },],
        "animationDuration": [{ type: core_1.Input },],
        "animationEnabled": [{ type: core_1.Input },],
        "closeOnOutsideClick": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "maxSize": [{ type: core_1.Input },],
        "minSize": [{ type: core_1.Input },],
        "opened": [{ type: core_1.Input },],
        "openedStateMode": [{ type: core_1.Input },],
        "position": [{ type: core_1.Input },],
        "revealMode": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "shading": [{ type: core_1.Input },],
        "target": [{ type: core_1.Input },],
        "template": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "animationDurationChange": [{ type: core_1.Output },],
        "animationEnabledChange": [{ type: core_1.Output },],
        "closeOnOutsideClickChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "maxSizeChange": [{ type: core_1.Output },],
        "minSizeChange": [{ type: core_1.Output },],
        "openedChange": [{ type: core_1.Output },],
        "openedStateModeChange": [{ type: core_1.Output },],
        "positionChange": [{ type: core_1.Output },],
        "revealModeChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "shadingChange": [{ type: core_1.Output },],
        "targetChange": [{ type: core_1.Output },],
        "templateChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
    };
    return DxDrawerComponent;
}(component_1.DxComponent));
exports.DxDrawerComponent = DxDrawerComponent;
var DxDrawerModule = (function () {
    function DxDrawerModule() {
    }
    DxDrawerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxDrawerComponent
                    ],
                    exports: [
                        DxDrawerComponent,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxDrawerModule;
}());
exports.DxDrawerModule = DxDrawerModule;
//# sourceMappingURL=drawer.js.map