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
var nested_option_1 = require("../../../core/nested-option");
var DxiChartSeries = (function (_super) {
    __extends(DxiChartSeries, _super);
    function DxiChartSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxiChartSeries.prototype, "aggregation", {
        get: function () {
            return this._getOption('aggregation');
        },
        set: function (value) {
            this._setOption('aggregation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "argumentField", {
        get: function () {
            return this._getOption('argumentField');
        },
        set: function (value) {
            this._setOption('argumentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "axis", {
        get: function () {
            return this._getOption('axis');
        },
        set: function (value) {
            this._setOption('axis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "barOverlapGroup", {
        get: function () {
            return this._getOption('barOverlapGroup');
        },
        set: function (value) {
            this._setOption('barOverlapGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "barPadding", {
        get: function () {
            return this._getOption('barPadding');
        },
        set: function (value) {
            this._setOption('barPadding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "barWidth", {
        get: function () {
            return this._getOption('barWidth');
        },
        set: function (value) {
            this._setOption('barWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "closeValueField", {
        get: function () {
            return this._getOption('closeValueField');
        },
        set: function (value) {
            this._setOption('closeValueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "cornerRadius", {
        get: function () {
            return this._getOption('cornerRadius');
        },
        set: function (value) {
            this._setOption('cornerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "highValueField", {
        get: function () {
            return this._getOption('highValueField');
        },
        set: function (value) {
            this._setOption('highValueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "hoverMode", {
        get: function () {
            return this._getOption('hoverMode');
        },
        set: function (value) {
            this._setOption('hoverMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "hoverStyle", {
        get: function () {
            return this._getOption('hoverStyle');
        },
        set: function (value) {
            this._setOption('hoverStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "ignoreEmptyPoints", {
        get: function () {
            return this._getOption('ignoreEmptyPoints');
        },
        set: function (value) {
            this._setOption('ignoreEmptyPoints', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "innerColor", {
        get: function () {
            return this._getOption('innerColor');
        },
        set: function (value) {
            this._setOption('innerColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "lowValueField", {
        get: function () {
            return this._getOption('lowValueField');
        },
        set: function (value) {
            this._setOption('lowValueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "maxLabelCount", {
        get: function () {
            return this._getOption('maxLabelCount');
        },
        set: function (value) {
            this._setOption('maxLabelCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "minBarSize", {
        get: function () {
            return this._getOption('minBarSize');
        },
        set: function (value) {
            this._setOption('minBarSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "openValueField", {
        get: function () {
            return this._getOption('openValueField');
        },
        set: function (value) {
            this._setOption('openValueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "pane", {
        get: function () {
            return this._getOption('pane');
        },
        set: function (value) {
            this._setOption('pane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "point", {
        get: function () {
            return this._getOption('point');
        },
        set: function (value) {
            this._setOption('point', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "rangeValue1Field", {
        get: function () {
            return this._getOption('rangeValue1Field');
        },
        set: function (value) {
            this._setOption('rangeValue1Field', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "rangeValue2Field", {
        get: function () {
            return this._getOption('rangeValue2Field');
        },
        set: function (value) {
            this._setOption('rangeValue2Field', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "reduction", {
        get: function () {
            return this._getOption('reduction');
        },
        set: function (value) {
            this._setOption('reduction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "selectionStyle", {
        get: function () {
            return this._getOption('selectionStyle');
        },
        set: function (value) {
            this._setOption('selectionStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "showInLegend", {
        get: function () {
            return this._getOption('showInLegend');
        },
        set: function (value) {
            this._setOption('showInLegend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "sizeField", {
        get: function () {
            return this._getOption('sizeField');
        },
        set: function (value) {
            this._setOption('sizeField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "stack", {
        get: function () {
            return this._getOption('stack');
        },
        set: function (value) {
            this._setOption('stack', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "tag", {
        get: function () {
            return this._getOption('tag');
        },
        set: function (value) {
            this._setOption('tag', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "tagField", {
        get: function () {
            return this._getOption('tagField');
        },
        set: function (value) {
            this._setOption('tagField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "valueErrorBar", {
        get: function () {
            return this._getOption('valueErrorBar');
        },
        set: function (value) {
            this._setOption('valueErrorBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "valueField", {
        get: function () {
            return this._getOption('valueField');
        },
        set: function (value) {
            this._setOption('valueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "argumentType", {
        get: function () {
            return this._getOption('argumentType');
        },
        set: function (value) {
            this._setOption('argumentType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "minSegmentSize", {
        get: function () {
            return this._getOption('minSegmentSize');
        },
        set: function (value) {
            this._setOption('minSegmentSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "smallValuesGrouping", {
        get: function () {
            return this._getOption('smallValuesGrouping');
        },
        set: function (value) {
            this._setOption('smallValuesGrouping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiChartSeries.prototype, "closed", {
        get: function () {
            return this._getOption('closed');
        },
        set: function (value) {
            this._setOption('closed', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxiChartSeries;
}(nested_option_1.CollectionNestedOption));
exports.DxiChartSeries = DxiChartSeries;
//# sourceMappingURL=chart-series-dxi.js.map