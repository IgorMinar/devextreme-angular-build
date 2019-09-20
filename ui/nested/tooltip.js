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
var core_1 = require("@angular/core");

var nested_option_1 = require("../../core/nested-option");
var nested_option_2 = require("../../core/nested-option");
var DxoTooltipComponent = (function (_super) {
    __extends(DxoTooltipComponent, _super);
    function DxoTooltipComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoTooltipComponent.prototype, "arrowLength", {
        get: function () {
            return this._getOption('arrowLength');
        },
        set: function (value) {
            this._setOption('arrowLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "container", {
        get: function () {
            return this._getOption('container');
        },
        set: function (value) {
            this._setOption('container', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "cornerRadius", {
        get: function () {
            return this._getOption('cornerRadius');
        },
        set: function (value) {
            this._setOption('cornerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "customizeTooltip", {
        get: function () {
            return this._getOption('customizeTooltip');
        },
        set: function (value) {
            this._setOption('customizeTooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "paddingLeftRight", {
        get: function () {
            return this._getOption('paddingLeftRight');
        },
        set: function (value) {
            this._setOption('paddingLeftRight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "paddingTopBottom", {
        get: function () {
            return this._getOption('paddingTopBottom');
        },
        set: function (value) {
            this._setOption('paddingTopBottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "shadow", {
        get: function () {
            return this._getOption('shadow');
        },
        set: function (value) {
            this._setOption('shadow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "zIndex", {
        get: function () {
            return this._getOption('zIndex');
        },
        set: function (value) {
            this._setOption('zIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "argumentFormat", {
        get: function () {
            return this._getOption('argumentFormat');
        },
        set: function (value) {
            this._setOption('argumentFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "shared", {
        get: function () {
            return this._getOption('shared');
        },
        set: function (value) {
            this._setOption('shared', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "isShown", {
        get: function () {
            return this._getOption('isShown');
        },
        set: function (value) {
            this._setOption('isShown', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "showMode", {
        get: function () {
            return this._getOption('showMode');
        },
        set: function (value) {
            this._setOption('showMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "customizeLinkTooltip", {
        get: function () {
            return this._getOption('customizeLinkTooltip');
        },
        set: function (value) {
            this._setOption('customizeLinkTooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "customizeNodeTooltip", {
        get: function () {
            return this._getOption('customizeNodeTooltip');
        },
        set: function (value) {
            this._setOption('customizeNodeTooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "_optionPath", {
        get: function () {
            return 'tooltip';
        },
        enumerable: true,
        configurable: true
    });
    DxoTooltipComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-tooltip',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoTooltipComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoTooltipComponent.propDecorators = {
        "arrowLength": [{ type: core_1.Input },],
        "border": [{ type: core_1.Input },],
        "color": [{ type: core_1.Input },],
        "container": [{ type: core_1.Input },],
        "cornerRadius": [{ type: core_1.Input },],
        "customizeTooltip": [{ type: core_1.Input },],
        "enabled": [{ type: core_1.Input },],
        "font": [{ type: core_1.Input },],
        "format": [{ type: core_1.Input },],
        "opacity": [{ type: core_1.Input },],
        "paddingLeftRight": [{ type: core_1.Input },],
        "paddingTopBottom": [{ type: core_1.Input },],
        "shadow": [{ type: core_1.Input },],
        "zIndex": [{ type: core_1.Input },],
        "argumentFormat": [{ type: core_1.Input },],
        "location": [{ type: core_1.Input },],
        "shared": [{ type: core_1.Input },],
        "isShown": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "position": [{ type: core_1.Input },],
        "showMode": [{ type: core_1.Input },],
        "customizeLinkTooltip": [{ type: core_1.Input },],
        "customizeNodeTooltip": [{ type: core_1.Input },],
    };
    return DxoTooltipComponent;
}(nested_option_2.NestedOption));
exports.DxoTooltipComponent = DxoTooltipComponent;
var DxoTooltipModule = (function () {
    function DxoTooltipModule() {
    }
    DxoTooltipModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoTooltipComponent
                    ],
                    exports: [
                        DxoTooltipComponent
                    ],
                },] },
    ];
    return DxoTooltipModule;
}());
exports.DxoTooltipModule = DxoTooltipModule;
//# sourceMappingURL=tooltip.js.map