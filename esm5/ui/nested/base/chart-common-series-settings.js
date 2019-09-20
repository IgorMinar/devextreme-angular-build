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
import { NestedOption } from '../../../core/nested-option';
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
}(NestedOption));
export { DxoChartCommonSeriesSettings };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtY29tbW9uLXNlcmllcy1zZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VpL25lc3RlZC9iYXNlL2NoYXJ0LWNvbW1vbi1zZXJpZXMtc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUkzRCxJQUFBO0lBQTJELGdEQUFZOzs7O0lBQ25FLHNCQUFJLHFEQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QzthQUNELFVBQWdCLEtBQW1FO1lBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pDOzs7T0FIQTtJQUtELHNCQUFJLDhDQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQzthQUNELFVBQVMsS0FBVTtZQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xDOzs7T0FIQTtJQUtELHNCQUFJLHVEQUFhO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDM0M7YUFDRCxVQUFrQixLQUFhO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDOzs7T0FIQTtJQUtELHNCQUFJLDhDQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQzthQUNELFVBQVMsS0FBYTtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsQzs7O09BSEE7SUFLRCxzQkFBSSw2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Q0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FIQTtJQUtELHNCQUFJLHNEQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDMUM7YUFDRCxVQUFpQixLQUFhO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFDOzs7T0FIQTtJQUtELHNCQUFJLHdEQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM1QzthQUNELFVBQW1CLEtBQWE7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM1Qzs7O09BSEE7SUFLRCxzQkFBSSw2REFBbUI7YUFBdkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ2pEO2FBQ0QsVUFBd0IsS0FBbUY7WUFDdkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqRDs7O09BSEE7SUFLRCxzQkFBSSxnREFBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEM7YUFDRCxVQUFXLEtBQWM7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEM7OztPQUhBO3VDQXRkTDtFQW1CMkQsWUFBWSxFQXVjdEUsQ0FBQTtBQXZjRCx3Q0F1Y0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHhvQ2hhcnRDb21tb25TZXJpZXNTZXR0aW5ncyBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBnZXQgYWdncmVnYXRpb24oKTogeyBjYWxjdWxhdGU/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIG1ldGhvZD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhZ2dyZWdhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFnZ3JlZ2F0aW9uKHZhbHVlOiB7IGNhbGN1bGF0ZT86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgbWV0aG9kPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FnZ3JlZ2F0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhcmVhKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJlYScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFyZWEodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXJlYScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXJndW1lbnRGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FyZ3VtZW50RmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCBhcmd1bWVudEZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FyZ3VtZW50RmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGF4aXMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdheGlzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXhpcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdheGlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBiYXIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXInKTtcclxuICAgIH1cclxuICAgIHNldCBiYXIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmFyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBiYXJPdmVybGFwR3JvdXAoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXJPdmVybGFwR3JvdXAnKTtcclxuICAgIH1cclxuICAgIHNldCBiYXJPdmVybGFwR3JvdXAodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmFyT3ZlcmxhcEdyb3VwJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBiYXJQYWRkaW5nKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFyUGFkZGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhclBhZGRpbmcodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmFyUGFkZGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYmFyV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXJXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhcldpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JhcldpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBib3JkZXIoKTogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYm9yZGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYm9yZGVyKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdib3JkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJ1YmJsZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2J1YmJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJ1YmJsZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdidWJibGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhbmRsZXN0aWNrKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FuZGxlc3RpY2snKTtcclxuICAgIH1cclxuICAgIHNldCBjYW5kbGVzdGljayh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYW5kbGVzdGljaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2xvc2VWYWx1ZUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2xvc2VWYWx1ZUZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2xvc2VWYWx1ZUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Nsb3NlVmFsdWVGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2xvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb3JuZXJSYWRpdXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb3JuZXJSYWRpdXMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb3JuZXJSYWRpdXModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29ybmVyUmFkaXVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkYXNoU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXNoU3R5bGUnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXNoU3R5bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGFzaFN0eWxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmdWxsc3RhY2tlZGFyZWEoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmdWxsc3RhY2tlZGFyZWEnKTtcclxuICAgIH1cclxuICAgIHNldCBmdWxsc3RhY2tlZGFyZWEodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZnVsbHN0YWNrZWRhcmVhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmdWxsc3RhY2tlZGJhcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Z1bGxzdGFja2VkYmFyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZnVsbHN0YWNrZWRiYXIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZnVsbHN0YWNrZWRiYXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZ1bGxzdGFja2VkbGluZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Z1bGxzdGFja2VkbGluZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZ1bGxzdGFja2VkbGluZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmdWxsc3RhY2tlZGxpbmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZ1bGxzdGFja2Vkc3BsaW5lKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZnVsbHN0YWNrZWRzcGxpbmUnKTtcclxuICAgIH1cclxuICAgIHNldCBmdWxsc3RhY2tlZHNwbGluZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmdWxsc3RhY2tlZHNwbGluZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZnVsbHN0YWNrZWRzcGxpbmVhcmVhKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZnVsbHN0YWNrZWRzcGxpbmVhcmVhJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZnVsbHN0YWNrZWRzcGxpbmVhcmVhKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Z1bGxzdGFja2Vkc3BsaW5lYXJlYScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGlnaFZhbHVlRmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaWdoVmFsdWVGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhpZ2hWYWx1ZUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpZ2hWYWx1ZUZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBob3Zlck1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3Zlck1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBob3Zlck1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG92ZXJNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBob3ZlclN0eWxlKCk6IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgaGF0Y2hpbmc/OiB7IGRpcmVjdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgc3RlcD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgd2lkdGg/OiBudW1iZXIgfSB8IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhhdGNoaW5nPzogeyBkaXJlY3Rpb24/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHN0ZXA/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG92ZXJTdHlsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvdmVyU3R5bGUodmFsdWU6IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgaGF0Y2hpbmc/OiB7IGRpcmVjdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgc3RlcD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgd2lkdGg/OiBudW1iZXIgfSB8IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhhdGNoaW5nPzogeyBkaXJlY3Rpb24/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHN0ZXA/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG92ZXJTdHlsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWdub3JlRW1wdHlQb2ludHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaWdub3JlRW1wdHlQb2ludHMnKTtcclxuICAgIH1cclxuICAgIHNldCBpZ25vcmVFbXB0eVBvaW50cyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaWdub3JlRW1wdHlQb2ludHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlubmVyQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpbm5lckNvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaW5uZXJDb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpbm5lckNvbG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYWJlbCgpOiB7IGFsaWdubWVudD86IHN0cmluZywgYXJndW1lbnRGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb25uZWN0b3I/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGhvcml6b250YWxPZmZzZXQ/OiBudW1iZXIsIHBvc2l0aW9uPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzaG93Rm9yWmVyb1ZhbHVlcz86IGJvb2xlYW4sIHZlcnRpY2FsT2Zmc2V0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9IHwgeyBhcmd1bWVudEZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbm5lY3Rvcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHJhZGlhbE9mZnNldD86IG51bWJlciwgcm90YXRpb25BbmdsZT86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSB8IHsgYXJndW1lbnRGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb25uZWN0b3I/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzaG93Rm9yWmVyb1ZhbHVlcz86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xhYmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGFiZWwodmFsdWU6IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBhcmd1bWVudEZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbm5lY3Rvcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaG9yaXpvbnRhbE9mZnNldD86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHNob3dGb3JaZXJvVmFsdWVzPzogYm9vbGVhbiwgdmVydGljYWxPZmZzZXQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuIH0gfCB7IGFyZ3VtZW50Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29ubmVjdG9yPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgcmFkaWFsT2Zmc2V0PzogbnVtYmVyLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3b3JkV3JhcD86IHN0cmluZyB9IHwgeyBhcmd1bWVudEZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbm5lY3Rvcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHNob3dGb3JaZXJvVmFsdWVzPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbGFiZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxpbmUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsaW5lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGluZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsaW5lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsb3dWYWx1ZUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbG93VmFsdWVGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvd1ZhbHVlRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbG93VmFsdWVGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWF4TGFiZWxDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heExhYmVsQ291bnQnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXhMYWJlbENvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heExhYmVsQ291bnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1pbkJhclNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5CYXJTaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluQmFyU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5CYXJTaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb3BhY2l0eScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9wYWNpdHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb3BhY2l0eScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3BlblZhbHVlRmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcGVuVmFsdWVGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9wZW5WYWx1ZUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wZW5WYWx1ZUZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwYW5lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFuZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhbmUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFuZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcG9pbnQoKTogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhvdmVyTW9kZT86IHN0cmluZywgaG92ZXJTdHlsZT86IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBzaXplPzogbnVtYmVyIH0sIGltYWdlPzogc3RyaW5nIHwgeyBoZWlnaHQ/OiBudW1iZXIgfCB7IHJhbmdlTWF4UG9pbnQ/OiBudW1iZXIsIHJhbmdlTWluUG9pbnQ/OiBudW1iZXIgfSwgdXJsPzogc3RyaW5nIHwgeyByYW5nZU1heFBvaW50Pzogc3RyaW5nLCByYW5nZU1pblBvaW50Pzogc3RyaW5nIH0sIHdpZHRoPzogbnVtYmVyIHwgeyByYW5nZU1heFBvaW50PzogbnVtYmVyLCByYW5nZU1pblBvaW50PzogbnVtYmVyIH0gfSwgc2VsZWN0aW9uTW9kZT86IHN0cmluZywgc2VsZWN0aW9uU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgc2l6ZT86IG51bWJlciB9LCBzaXplPzogbnVtYmVyLCBzeW1ib2w/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0gfCB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgaG92ZXJNb2RlPzogc3RyaW5nLCBob3ZlclN0eWxlPzogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIHNpemU/OiBudW1iZXIgfSwgaW1hZ2U/OiBzdHJpbmcgfCB7IGhlaWdodD86IG51bWJlciwgdXJsPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBzZWxlY3Rpb25Nb2RlPzogc3RyaW5nLCBzZWxlY3Rpb25TdHlsZT86IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBzaXplPzogbnVtYmVyIH0sIHNpemU/OiBudW1iZXIsIHN5bWJvbD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncG9pbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBwb2ludCh2YWx1ZTogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhvdmVyTW9kZT86IHN0cmluZywgaG92ZXJTdHlsZT86IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBzaXplPzogbnVtYmVyIH0sIGltYWdlPzogc3RyaW5nIHwgeyBoZWlnaHQ/OiBudW1iZXIgfCB7IHJhbmdlTWF4UG9pbnQ/OiBudW1iZXIsIHJhbmdlTWluUG9pbnQ/OiBudW1iZXIgfSwgdXJsPzogc3RyaW5nIHwgeyByYW5nZU1heFBvaW50Pzogc3RyaW5nLCByYW5nZU1pblBvaW50Pzogc3RyaW5nIH0sIHdpZHRoPzogbnVtYmVyIHwgeyByYW5nZU1heFBvaW50PzogbnVtYmVyLCByYW5nZU1pblBvaW50PzogbnVtYmVyIH0gfSwgc2VsZWN0aW9uTW9kZT86IHN0cmluZywgc2VsZWN0aW9uU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgc2l6ZT86IG51bWJlciB9LCBzaXplPzogbnVtYmVyLCBzeW1ib2w/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0gfCB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgaG92ZXJNb2RlPzogc3RyaW5nLCBob3ZlclN0eWxlPzogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIHNpemU/OiBudW1iZXIgfSwgaW1hZ2U/OiBzdHJpbmcgfCB7IGhlaWdodD86IG51bWJlciwgdXJsPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBzZWxlY3Rpb25Nb2RlPzogc3RyaW5nLCBzZWxlY3Rpb25TdHlsZT86IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBzaXplPzogbnVtYmVyIH0sIHNpemU/OiBudW1iZXIsIHN5bWJvbD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncG9pbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJhbmdlYXJlYSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JhbmdlYXJlYScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJhbmdlYXJlYSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyYW5nZWFyZWEnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJhbmdlYmFyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmFuZ2ViYXInKTtcclxuICAgIH1cclxuICAgIHNldCByYW5nZWJhcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyYW5nZWJhcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmFuZ2VWYWx1ZTFGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JhbmdlVmFsdWUxRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCByYW5nZVZhbHVlMUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JhbmdlVmFsdWUxRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJhbmdlVmFsdWUyRmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyYW5nZVZhbHVlMkZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmFuZ2VWYWx1ZTJGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyYW5nZVZhbHVlMkZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWR1Y3Rpb24oKTogeyBjb2xvcj86IHN0cmluZywgbGV2ZWw/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVkdWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVkdWN0aW9uKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBsZXZlbD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWR1Y3Rpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjYXR0ZXIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzY2F0dGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2NhdHRlcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzY2F0dGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3Rpb25Nb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0aW9uTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGlvbk1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0aW9uTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VsZWN0aW9uU3R5bGUoKTogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBoYXRjaGluZz86IHsgZGlyZWN0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBzdGVwPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCB3aWR0aD86IG51bWJlciB9IHwgeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgaGF0Y2hpbmc/OiB7IGRpcmVjdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgc3RlcD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3Rpb25TdHlsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGlvblN0eWxlKHZhbHVlOiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGhhdGNoaW5nPzogeyBkaXJlY3Rpb24/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHN0ZXA/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIHdpZHRoPzogbnVtYmVyIH0gfCB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBoYXRjaGluZz86IHsgZGlyZWN0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBzdGVwPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9IH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlbGVjdGlvblN0eWxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93SW5MZWdlbmQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0luTGVnZW5kJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0luTGVnZW5kKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93SW5MZWdlbmQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpemVGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NpemVGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNpemVGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaXplRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNwbGluZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NwbGluZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNwbGluZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzcGxpbmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNwbGluZWFyZWEoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzcGxpbmVhcmVhJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3BsaW5lYXJlYSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzcGxpbmVhcmVhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGFjaygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YWNrJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhY2sodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YWNrZWRhcmVhKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RhY2tlZGFyZWEnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFja2VkYXJlYSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGFja2VkYXJlYScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhY2tlZGJhcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YWNrZWRiYXInKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFja2VkYmFyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YWNrZWRiYXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YWNrZWRsaW5lKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RhY2tlZGxpbmUnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFja2VkbGluZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGFja2VkbGluZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhY2tlZHNwbGluZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YWNrZWRzcGxpbmUnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFja2Vkc3BsaW5lKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YWNrZWRzcGxpbmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YWNrZWRzcGxpbmVhcmVhKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RhY2tlZHNwbGluZWFyZWEnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFja2Vkc3BsaW5lYXJlYSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGFja2Vkc3BsaW5lYXJlYScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RlcGFyZWEoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGVwYXJlYScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0ZXBhcmVhKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0ZXBhcmVhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGVwbGluZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0ZXBsaW5lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RlcGxpbmUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RlcGxpbmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0b2NrKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RvY2snKTtcclxuICAgIH1cclxuICAgIHNldCBzdG9jayh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdG9jaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGFnRmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWdGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhZ0ZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhZ0ZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWVFcnJvckJhcigpOiB7IGNvbG9yPzogc3RyaW5nLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZWRnZUxlbmd0aD86IG51bWJlciwgaGlnaFZhbHVlRmllbGQ/OiBzdHJpbmcsIGxpbmVXaWR0aD86IG51bWJlciwgbG93VmFsdWVGaWVsZD86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdHlwZT86IHN0cmluZywgdmFsdWU/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVFcnJvckJhcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlRXJyb3JCYXIodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBlZGdlTGVuZ3RoPzogbnVtYmVyLCBoaWdoVmFsdWVGaWVsZD86IHN0cmluZywgbGluZVdpZHRoPzogbnVtYmVyLCBsb3dWYWx1ZUZpZWxkPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB0eXBlPzogc3RyaW5nLCB2YWx1ZT86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWx1ZUVycm9yQmFyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhcmd1bWVudFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcmd1bWVudFR5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCBhcmd1bWVudFR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXJndW1lbnRUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtaW5TZWdtZW50U2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pblNlZ21lbnRTaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluU2VnbWVudFNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWluU2VnbWVudFNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNtYWxsVmFsdWVzR3JvdXBpbmcoKTogeyBncm91cE5hbWU/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcsIHRocmVzaG9sZD86IG51bWJlciwgdG9wQ291bnQ/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc21hbGxWYWx1ZXNHcm91cGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNtYWxsVmFsdWVzR3JvdXBpbmcodmFsdWU6IHsgZ3JvdXBOYW1lPzogc3RyaW5nLCBtb2RlPzogc3RyaW5nLCB0aHJlc2hvbGQ/OiBudW1iZXIsIHRvcENvdW50PzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NtYWxsVmFsdWVzR3JvdXBpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNsb3NlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjbG9zZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBjbG9zZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Nsb3NlZCcsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=