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
var series_dxi_1 = require("./series-dxi");
var DxoChartComponent = (function (_super) {
    __extends(DxoChartComponent, _super);
    function DxoChartComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoChartComponent.prototype, "barGroupPadding", {
        get: function () {
            return this._getOption('barGroupPadding');
        },
        set: function (value) {
            this._setOption('barGroupPadding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "barGroupWidth", {
        get: function () {
            return this._getOption('barGroupWidth');
        },
        set: function (value) {
            this._setOption('barGroupWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "barWidth", {
        get: function () {
            return this._getOption('barWidth');
        },
        set: function (value) {
            this._setOption('barWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "bottomIndent", {
        get: function () {
            return this._getOption('bottomIndent');
        },
        set: function (value) {
            this._setOption('bottomIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "commonSeriesSettings", {
        get: function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "dataPrepareSettings", {
        get: function () {
            return this._getOption('dataPrepareSettings');
        },
        set: function (value) {
            this._setOption('dataPrepareSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "equalBarWidth", {
        get: function () {
            return this._getOption('equalBarWidth');
        },
        set: function (value) {
            this._setOption('equalBarWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "maxBubbleSize", {
        get: function () {
            return this._getOption('maxBubbleSize');
        },
        set: function (value) {
            this._setOption('maxBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "minBubbleSize", {
        get: function () {
            return this._getOption('minBubbleSize');
        },
        set: function (value) {
            this._setOption('minBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "negativesAsZeroes", {
        get: function () {
            return this._getOption('negativesAsZeroes');
        },
        set: function (value) {
            this._setOption('negativesAsZeroes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "paletteExtensionMode", {
        get: function () {
            return this._getOption('paletteExtensionMode');
        },
        set: function (value) {
            this._setOption('paletteExtensionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "series", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "seriesTemplate", {
        get: function () {
            return this._getOption('seriesTemplate');
        },
        set: function (value) {
            this._setOption('seriesTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "topIndent", {
        get: function () {
            return this._getOption('topIndent');
        },
        set: function (value) {
            this._setOption('topIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "useAggregation", {
        get: function () {
            return this._getOption('useAggregation');
        },
        set: function (value) {
            this._setOption('useAggregation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "valueAxis", {
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this._setOption('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "_optionPath", {
        get: function () {
            return 'chart';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-chart',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoChartComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoChartComponent.propDecorators = {
        "barGroupPadding": [{ type: core_1.Input },],
        "barGroupWidth": [{ type: core_1.Input },],
        "barWidth": [{ type: core_1.Input },],
        "bottomIndent": [{ type: core_1.Input },],
        "commonSeriesSettings": [{ type: core_1.Input },],
        "dataPrepareSettings": [{ type: core_1.Input },],
        "equalBarWidth": [{ type: core_1.Input },],
        "maxBubbleSize": [{ type: core_1.Input },],
        "minBubbleSize": [{ type: core_1.Input },],
        "negativesAsZeroes": [{ type: core_1.Input },],
        "palette": [{ type: core_1.Input },],
        "paletteExtensionMode": [{ type: core_1.Input },],
        "series": [{ type: core_1.Input },],
        "seriesTemplate": [{ type: core_1.Input },],
        "topIndent": [{ type: core_1.Input },],
        "useAggregation": [{ type: core_1.Input },],
        "valueAxis": [{ type: core_1.Input },],
        "seriesChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return series_dxi_1.DxiSeriesComponent; }),] },],
    };
    return DxoChartComponent;
}(nested_option_2.NestedOption));
exports.DxoChartComponent = DxoChartComponent;
var DxoChartModule = (function () {
    function DxoChartModule() {
    }
    DxoChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoChartComponent
                    ],
                    exports: [
                        DxoChartComponent
                    ],
                },] },
    ];
    return DxoChartModule;
}());
exports.DxoChartModule = DxoChartModule;
//# sourceMappingURL=chart.js.map