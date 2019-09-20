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
var bullet_1 = require("devextreme/viz/bullet");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var margin_1 = require("./nested/margin");
var size_1 = require("./nested/size");
var tooltip_1 = require("./nested/tooltip");
var border_1 = require("./nested/border");
var font_1 = require("./nested/font");
var format_1 = require("./nested/format");
var shadow_1 = require("./nested/shadow");
/**
 * The Bullet widget is useful when you need to compare a single measure to a target value. The widget comprises a horizontal bar indicating the measure and a vertical line indicating the target value.
 */
var DxBulletComponent = (function (_super) {
    __extends(DxBulletComponent, _super);
    function DxBulletComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'colorChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'endScaleValueChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showTargetChange' },
            { emit: 'showZeroLevelChange' },
            { emit: 'sizeChange' },
            { emit: 'startScaleValueChange' },
            { emit: 'targetChange' },
            { emit: 'targetColorChange' },
            { emit: 'targetWidthChange' },
            { emit: 'themeChange' },
            { emit: 'tooltipChange' },
            { emit: 'valueChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxBulletComponent.prototype, "color", {
        get: /**
             * Specifies a color for the bullet bar.
             */
        function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to the user interaction.
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
    Object.defineProperty(DxBulletComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxBulletComponent.prototype, "endScaleValue", {
        get: /**
             * Specifies an end value for the invisible scale.
             */
        function () {
            return this._getOption('endScaleValue');
        },
        set: function (value) {
            this._setOption('endScaleValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "margin", {
        get: /**
             * Generates space around the widget.
             */
        function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "pathModified", {
        get: /**
             * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
             */
        function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxBulletComponent.prototype, "showTarget", {
        get: /**
             * Specifies whether or not to show the target line.
             */
        function () {
            return this._getOption('showTarget');
        },
        set: function (value) {
            this._setOption('showTarget', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "showZeroLevel", {
        get: /**
             * Specifies whether or not to show the line indicating zero on the invisible scale.
             */
        function () {
            return this._getOption('showZeroLevel');
        },
        set: function (value) {
            this._setOption('showZeroLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "size", {
        get: /**
             * Specifies the widget's size in pixels.
             */
        function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "startScaleValue", {
        get: /**
             * Specifies a start value for the invisible scale.
             */
        function () {
            return this._getOption('startScaleValue');
        },
        set: function (value) {
            this._setOption('startScaleValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "target", {
        get: /**
             * Specifies the value indicated by the target line.
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
    Object.defineProperty(DxBulletComponent.prototype, "targetColor", {
        get: /**
             * Specifies a color for both the target and zero level lines.
             */
        function () {
            return this._getOption('targetColor');
        },
        set: function (value) {
            this._setOption('targetColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "targetWidth", {
        get: /**
             * Specifies the width of the target line.
             */
        function () {
            return this._getOption('targetWidth');
        },
        set: function (value) {
            this._setOption('targetWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "theme", {
        get: /**
             * Sets the name of the theme the widget uses.
             */
        function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "tooltip", {
        get: /**
             * Configures the tooltip.
             */
        function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "value", {
        get: /**
             * Specifies the primary value indicated by the bullet bar.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    DxBulletComponent.prototype._createInstance = function (element, options) {
        return new bullet_1.default(element, options);
    };
    DxBulletComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxBulletComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-bullet',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxBulletComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxBulletComponent.propDecorators = {
        "color": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "endScaleValue": [{ type: core_1.Input },],
        "margin": [{ type: core_1.Input },],
        "pathModified": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "showTarget": [{ type: core_1.Input },],
        "showZeroLevel": [{ type: core_1.Input },],
        "size": [{ type: core_1.Input },],
        "startScaleValue": [{ type: core_1.Input },],
        "target": [{ type: core_1.Input },],
        "targetColor": [{ type: core_1.Input },],
        "targetWidth": [{ type: core_1.Input },],
        "theme": [{ type: core_1.Input },],
        "tooltip": [{ type: core_1.Input },],
        "value": [{ type: core_1.Input },],
        "onDisposing": [{ type: core_1.Output },],
        "onDrawn": [{ type: core_1.Output },],
        "onExported": [{ type: core_1.Output },],
        "onExporting": [{ type: core_1.Output },],
        "onFileSaving": [{ type: core_1.Output },],
        "onIncidentOccurred": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onTooltipHidden": [{ type: core_1.Output },],
        "onTooltipShown": [{ type: core_1.Output },],
        "colorChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "endScaleValueChange": [{ type: core_1.Output },],
        "marginChange": [{ type: core_1.Output },],
        "pathModifiedChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "showTargetChange": [{ type: core_1.Output },],
        "showZeroLevelChange": [{ type: core_1.Output },],
        "sizeChange": [{ type: core_1.Output },],
        "startScaleValueChange": [{ type: core_1.Output },],
        "targetChange": [{ type: core_1.Output },],
        "targetColorChange": [{ type: core_1.Output },],
        "targetWidthChange": [{ type: core_1.Output },],
        "themeChange": [{ type: core_1.Output },],
        "tooltipChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
    };
    return DxBulletComponent;
}(component_1.DxComponent));
exports.DxBulletComponent = DxBulletComponent;
var DxBulletModule = (function () {
    function DxBulletModule() {
    }
    DxBulletModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxBulletComponent
                    ],
                    exports: [
                        DxBulletComponent,
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxBulletModule;
}());
exports.DxBulletModule = DxBulletModule;
//# sourceMappingURL=bullet.js.map