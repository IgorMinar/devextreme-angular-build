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
var constant_line_dxi_1 = require("./constant-line-dxi");
var strip_dxi_1 = require("./strip-dxi");
var DxoValueAxisComponent = (function (_super) {
    __extends(DxoValueAxisComponent, _super);
    function DxoValueAxisComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoValueAxisComponent.prototype, "allowDecimals", {
        get: function () {
            return this._getOption('allowDecimals');
        },
        set: function (value) {
            this._setOption('allowDecimals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "axisDivisionFactor", {
        get: function () {
            return this._getOption('axisDivisionFactor');
        },
        set: function (value) {
            this._setOption('axisDivisionFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "categories", {
        get: function () {
            return this._getOption('categories');
        },
        set: function (value) {
            this._setOption('categories', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "constantLines", {
        get: function () {
            return this._getOption('constantLines');
        },
        set: function (value) {
            this._setOption('constantLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "constantLineStyle", {
        get: function () {
            return this._getOption('constantLineStyle');
        },
        set: function (value) {
            this._setOption('constantLineStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "discreteAxisDivisionMode", {
        get: function () {
            return this._getOption('discreteAxisDivisionMode');
        },
        set: function (value) {
            this._setOption('discreteAxisDivisionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "endOnTick", {
        get: function () {
            return this._getOption('endOnTick');
        },
        set: function (value) {
            this._setOption('endOnTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "grid", {
        get: function () {
            return this._getOption('grid');
        },
        set: function (value) {
            this._setOption('grid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "inverted", {
        get: function () {
            return this._getOption('inverted');
        },
        set: function (value) {
            this._setOption('inverted', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "logarithmBase", {
        get: function () {
            return this._getOption('logarithmBase');
        },
        set: function (value) {
            this._setOption('logarithmBase', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "maxValueMargin", {
        get: function () {
            return this._getOption('maxValueMargin');
        },
        set: function (value) {
            this._setOption('maxValueMargin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "minorGrid", {
        get: function () {
            return this._getOption('minorGrid');
        },
        set: function (value) {
            this._setOption('minorGrid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "minorTick", {
        get: function () {
            return this._getOption('minorTick');
        },
        set: function (value) {
            this._setOption('minorTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "minorTickCount", {
        get: function () {
            return this._getOption('minorTickCount');
        },
        set: function (value) {
            this._setOption('minorTickCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "minorTickInterval", {
        get: function () {
            return this._getOption('minorTickInterval');
        },
        set: function (value) {
            this._setOption('minorTickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "minValueMargin", {
        get: function () {
            return this._getOption('minValueMargin');
        },
        set: function (value) {
            this._setOption('minValueMargin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "showZero", {
        get: function () {
            return this._getOption('showZero');
        },
        set: function (value) {
            this._setOption('showZero', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "strips", {
        get: function () {
            return this._getOption('strips');
        },
        set: function (value) {
            this._setOption('strips', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "stripStyle", {
        get: function () {
            return this._getOption('stripStyle');
        },
        set: function (value) {
            this._setOption('stripStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "tick", {
        get: function () {
            return this._getOption('tick');
        },
        set: function (value) {
            this._setOption('tick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "tickInterval", {
        get: function () {
            return this._getOption('tickInterval');
        },
        set: function (value) {
            this._setOption('tickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "valueMarginsEnabled", {
        get: function () {
            return this._getOption('valueMarginsEnabled');
        },
        set: function (value) {
            this._setOption('valueMarginsEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "valueType", {
        get: function () {
            return this._getOption('valueType');
        },
        set: function (value) {
            this._setOption('valueType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "_optionPath", {
        get: function () {
            return 'valueAxis';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "constantLinesChildren", {
        get: function () {
            return this._getOption('constantLines');
        },
        set: function (value) {
            this.setChildren('constantLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueAxisComponent.prototype, "stripsChildren", {
        get: function () {
            return this._getOption('strips');
        },
        set: function (value) {
            this.setChildren('strips', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoValueAxisComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-value-axis',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoValueAxisComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoValueAxisComponent.propDecorators = {
        "allowDecimals": [{ type: core_1.Input },],
        "axisDivisionFactor": [{ type: core_1.Input },],
        "categories": [{ type: core_1.Input },],
        "color": [{ type: core_1.Input },],
        "constantLines": [{ type: core_1.Input },],
        "constantLineStyle": [{ type: core_1.Input },],
        "discreteAxisDivisionMode": [{ type: core_1.Input },],
        "endOnTick": [{ type: core_1.Input },],
        "grid": [{ type: core_1.Input },],
        "inverted": [{ type: core_1.Input },],
        "label": [{ type: core_1.Input },],
        "logarithmBase": [{ type: core_1.Input },],
        "maxValueMargin": [{ type: core_1.Input },],
        "minorGrid": [{ type: core_1.Input },],
        "minorTick": [{ type: core_1.Input },],
        "minorTickCount": [{ type: core_1.Input },],
        "minorTickInterval": [{ type: core_1.Input },],
        "minValueMargin": [{ type: core_1.Input },],
        "opacity": [{ type: core_1.Input },],
        "showZero": [{ type: core_1.Input },],
        "strips": [{ type: core_1.Input },],
        "stripStyle": [{ type: core_1.Input },],
        "tick": [{ type: core_1.Input },],
        "tickInterval": [{ type: core_1.Input },],
        "type": [{ type: core_1.Input },],
        "valueMarginsEnabled": [{ type: core_1.Input },],
        "valueType": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "max": [{ type: core_1.Input },],
        "min": [{ type: core_1.Input },],
        "constantLinesChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return constant_line_dxi_1.DxiConstantLineComponent; }),] },],
        "stripsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return strip_dxi_1.DxiStripComponent; }),] },],
    };
    return DxoValueAxisComponent;
}(nested_option_2.NestedOption));
exports.DxoValueAxisComponent = DxoValueAxisComponent;
var DxoValueAxisModule = (function () {
    function DxoValueAxisModule() {
    }
    DxoValueAxisModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoValueAxisComponent
                    ],
                    exports: [
                        DxoValueAxisComponent
                    ],
                },] },
    ];
    return DxoValueAxisModule;
}());
exports.DxoValueAxisModule = DxoValueAxisModule;
//# sourceMappingURL=value-axis.js.map