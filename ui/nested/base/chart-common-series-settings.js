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
var DxoChartCommonSeriesSettings = (function (_super) {
    __extends(DxoChartCommonSeriesSettings, _super);
    function DxoChartCommonSeriesSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "aggregation", {
        get: function () {
            return this._getOption('aggregation');
        },
        set: function (value) {
            this._setOption('aggregation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "area", {
        get: function () {
            return this._getOption('area');
        },
        set: function (value) {
            this._setOption('area', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "argumentField", {
        get: function () {
            return this._getOption('argumentField');
        },
        set: function (value) {
            this._setOption('argumentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "axis", {
        get: function () {
            return this._getOption('axis');
        },
        set: function (value) {
            this._setOption('axis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "bar", {
        get: function () {
            return this._getOption('bar');
        },
        set: function (value) {
            this._setOption('bar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "barOverlapGroup", {
        get: function () {
            return this._getOption('barOverlapGroup');
        },
        set: function (value) {
            this._setOption('barOverlapGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "barPadding", {
        get: function () {
            return this._getOption('barPadding');
        },
        set: function (value) {
            this._setOption('barPadding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "barWidth", {
        get: function () {
            return this._getOption('barWidth');
        },
        set: function (value) {
            this._setOption('barWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "bubble", {
        get: function () {
            return this._getOption('bubble');
        },
        set: function (value) {
            this._setOption('bubble', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "candlestick", {
        get: function () {
            return this._getOption('candlestick');
        },
        set: function (value) {
            this._setOption('candlestick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "closeValueField", {
        get: function () {
            return this._getOption('closeValueField');
        },
        set: function (value) {
            this._setOption('closeValueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "cornerRadius", {
        get: function () {
            return this._getOption('cornerRadius');
        },
        set: function (value) {
            this._setOption('cornerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "fullstackedarea", {
        get: function () {
            return this._getOption('fullstackedarea');
        },
        set: function (value) {
            this._setOption('fullstackedarea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "fullstackedbar", {
        get: function () {
            return this._getOption('fullstackedbar');
        },
        set: function (value) {
            this._setOption('fullstackedbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "fullstackedline", {
        get: function () {
            return this._getOption('fullstackedline');
        },
        set: function (value) {
            this._setOption('fullstackedline', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "fullstackedspline", {
        get: function () {
            return this._getOption('fullstackedspline');
        },
        set: function (value) {
            this._setOption('fullstackedspline', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "fullstackedsplinearea", {
        get: function () {
            return this._getOption('fullstackedsplinearea');
        },
        set: function (value) {
            this._setOption('fullstackedsplinearea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "highValueField", {
        get: function () {
            return this._getOption('highValueField');
        },
        set: function (value) {
            this._setOption('highValueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "hoverMode", {
        get: function () {
            return this._getOption('hoverMode');
        },
        set: function (value) {
            this._setOption('hoverMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "hoverStyle", {
        get: function () {
            return this._getOption('hoverStyle');
        },
        set: function (value) {
            this._setOption('hoverStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "ignoreEmptyPoints", {
        get: function () {
            return this._getOption('ignoreEmptyPoints');
        },
        set: function (value) {
            this._setOption('ignoreEmptyPoints', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "innerColor", {
        get: function () {
            return this._getOption('innerColor');
        },
        set: function (value) {
            this._setOption('innerColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "line", {
        get: function () {
            return this._getOption('line');
        },
        set: function (value) {
            this._setOption('line', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "lowValueField", {
        get: function () {
            return this._getOption('lowValueField');
        },
        set: function (value) {
            this._setOption('lowValueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "maxLabelCount", {
        get: function () {
            return this._getOption('maxLabelCount');
        },
        set: function (value) {
            this._setOption('maxLabelCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "minBarSize", {
        get: function () {
            return this._getOption('minBarSize');
        },
        set: function (value) {
            this._setOption('minBarSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "openValueField", {
        get: function () {
            return this._getOption('openValueField');
        },
        set: function (value) {
            this._setOption('openValueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "pane", {
        get: function () {
            return this._getOption('pane');
        },
        set: function (value) {
            this._setOption('pane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "point", {
        get: function () {
            return this._getOption('point');
        },
        set: function (value) {
            this._setOption('point', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "rangearea", {
        get: function () {
            return this._getOption('rangearea');
        },
        set: function (value) {
            this._setOption('rangearea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "rangebar", {
        get: function () {
            return this._getOption('rangebar');
        },
        set: function (value) {
            this._setOption('rangebar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "rangeValue1Field", {
        get: function () {
            return this._getOption('rangeValue1Field');
        },
        set: function (value) {
            this._setOption('rangeValue1Field', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "rangeValue2Field", {
        get: function () {
            return this._getOption('rangeValue2Field');
        },
        set: function (value) {
            this._setOption('rangeValue2Field', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "reduction", {
        get: function () {
            return this._getOption('reduction');
        },
        set: function (value) {
            this._setOption('reduction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "scatter", {
        get: function () {
            return this._getOption('scatter');
        },
        set: function (value) {
            this._setOption('scatter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "selectionStyle", {
        get: function () {
            return this._getOption('selectionStyle');
        },
        set: function (value) {
            this._setOption('selectionStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "showInLegend", {
        get: function () {
            return this._getOption('showInLegend');
        },
        set: function (value) {
            this._setOption('showInLegend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "sizeField", {
        get: function () {
            return this._getOption('sizeField');
        },
        set: function (value) {
            this._setOption('sizeField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "spline", {
        get: function () {
            return this._getOption('spline');
        },
        set: function (value) {
            this._setOption('spline', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "splinearea", {
        get: function () {
            return this._getOption('splinearea');
        },
        set: function (value) {
            this._setOption('splinearea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "stack", {
        get: function () {
            return this._getOption('stack');
        },
        set: function (value) {
            this._setOption('stack', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "stackedarea", {
        get: function () {
            return this._getOption('stackedarea');
        },
        set: function (value) {
            this._setOption('stackedarea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "stackedbar", {
        get: function () {
            return this._getOption('stackedbar');
        },
        set: function (value) {
            this._setOption('stackedbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "stackedline", {
        get: function () {
            return this._getOption('stackedline');
        },
        set: function (value) {
            this._setOption('stackedline', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "stackedspline", {
        get: function () {
            return this._getOption('stackedspline');
        },
        set: function (value) {
            this._setOption('stackedspline', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "stackedsplinearea", {
        get: function () {
            return this._getOption('stackedsplinearea');
        },
        set: function (value) {
            this._setOption('stackedsplinearea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "steparea", {
        get: function () {
            return this._getOption('steparea');
        },
        set: function (value) {
            this._setOption('steparea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "stepline", {
        get: function () {
            return this._getOption('stepline');
        },
        set: function (value) {
            this._setOption('stepline', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "stock", {
        get: function () {
            return this._getOption('stock');
        },
        set: function (value) {
            this._setOption('stock', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "tagField", {
        get: function () {
            return this._getOption('tagField');
        },
        set: function (value) {
            this._setOption('tagField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "valueErrorBar", {
        get: function () {
            return this._getOption('valueErrorBar');
        },
        set: function (value) {
            this._setOption('valueErrorBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "valueField", {
        get: function () {
            return this._getOption('valueField');
        },
        set: function (value) {
            this._setOption('valueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "argumentType", {
        get: function () {
            return this._getOption('argumentType');
        },
        set: function (value) {
            this._setOption('argumentType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "minSegmentSize", {
        get: function () {
            return this._getOption('minSegmentSize');
        },
        set: function (value) {
            this._setOption('minSegmentSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "smallValuesGrouping", {
        get: function () {
            return this._getOption('smallValuesGrouping');
        },
        set: function (value) {
            this._setOption('smallValuesGrouping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartCommonSeriesSettings.prototype, "closed", {
        get: function () {
            return this._getOption('closed');
        },
        set: function (value) {
            this._setOption('closed', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoChartCommonSeriesSettings;
}(nested_option_1.NestedOption));
exports.DxoChartCommonSeriesSettings = DxoChartCommonSeriesSettings;
//# sourceMappingURL=chart-common-series-settings.js.map