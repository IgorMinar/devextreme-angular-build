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
var DxoSliderMarkerComponent = (function (_super) {
    __extends(DxoSliderMarkerComponent, _super);
    function DxoSliderMarkerComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSliderMarkerComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSliderMarkerComponent.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSliderMarkerComponent.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSliderMarkerComponent.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSliderMarkerComponent.prototype, "invalidRangeColor", {
        get: function () {
            return this._getOption('invalidRangeColor');
        },
        set: function (value) {
            this._setOption('invalidRangeColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSliderMarkerComponent.prototype, "paddingLeftRight", {
        get: function () {
            return this._getOption('paddingLeftRight');
        },
        set: function (value) {
            this._setOption('paddingLeftRight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSliderMarkerComponent.prototype, "paddingTopBottom", {
        get: function () {
            return this._getOption('paddingTopBottom');
        },
        set: function (value) {
            this._setOption('paddingTopBottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSliderMarkerComponent.prototype, "placeholderHeight", {
        get: function () {
            return this._getOption('placeholderHeight');
        },
        set: function (value) {
            this._setOption('placeholderHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSliderMarkerComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSliderMarkerComponent.prototype, "_optionPath", {
        get: function () {
            return 'sliderMarker';
        },
        enumerable: true,
        configurable: true
    });
    DxoSliderMarkerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-slider-marker',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSliderMarkerComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSliderMarkerComponent.propDecorators = {
        "color": [{ type: core_1.Input },],
        "customizeText": [{ type: core_1.Input },],
        "font": [{ type: core_1.Input },],
        "format": [{ type: core_1.Input },],
        "invalidRangeColor": [{ type: core_1.Input },],
        "paddingLeftRight": [{ type: core_1.Input },],
        "paddingTopBottom": [{ type: core_1.Input },],
        "placeholderHeight": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
    };
    return DxoSliderMarkerComponent;
}(nested_option_2.NestedOption));
exports.DxoSliderMarkerComponent = DxoSliderMarkerComponent;
var DxoSliderMarkerModule = (function () {
    function DxoSliderMarkerModule() {
    }
    DxoSliderMarkerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSliderMarkerComponent
                    ],
                    exports: [
                        DxoSliderMarkerComponent
                    ],
                },] },
    ];
    return DxoSliderMarkerModule;
}());
exports.DxoSliderMarkerModule = DxoSliderMarkerModule;
//# sourceMappingURL=slider-marker.js.map