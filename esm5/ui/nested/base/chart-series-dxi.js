/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { CollectionNestedOption } from '../../../core/nested-option';
var DxiChartSeries = /** @class */ (function (_super) {
    tslib_1.__extends(DxiChartSeries, _super);
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
}(CollectionNestedOption));
export { DxiChartSeries };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc2VyaWVzLWR4aS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9iYXNlL2NoYXJ0LXNlcmllcy1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUlyRTtJQUE2QywwQ0FBc0I7SUFBbkU7O0lBb1RBLENBQUM7SUFuVEcsc0JBQUksdUNBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7YUFDRCxVQUFnQixLQUFtRTtZQUMvRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLHlDQUFhO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUMsQ0FBQzthQUNELFVBQWtCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BSEE7SUFLRCxzQkFBSSxnQ0FBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQzthQUNELFVBQVMsS0FBYTtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLDJDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxDQUFDO2FBQ0QsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEtBQUss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QUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0MsQ0FBQzthQUNELFVBQW1CLEtBQWE7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLCtDQUFtQjthQUF2QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbEQsQ0FBQzthQUNELFVBQXdCLEtBQW1GO1lBQ3ZHLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQzs7O09BSEE7SUFLRCxzQkFBSSxrQ0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQzthQUNELFVBQVcsS0FBYztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FIQTtJQUlMLHFCQUFDO0FBQUQsQ0FBQyxBQXBURCxDQUE2QyxzQkFBc0IsR0FvVGxFIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5pbXBvcnQgeyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIER4aUNoYXJ0U2VyaWVzIGV4dGVuZHMgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB7XHJcbiAgICBnZXQgYWdncmVnYXRpb24oKTogeyBjYWxjdWxhdGU/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIG1ldGhvZD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhZ2dyZWdhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFnZ3JlZ2F0aW9uKHZhbHVlOiB7IGNhbGN1bGF0ZT86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgbWV0aG9kPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FnZ3JlZ2F0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhcmd1bWVudEZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJndW1lbnRGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFyZ3VtZW50RmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXJndW1lbnRGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXhpcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2F4aXMnKTtcclxuICAgIH1cclxuICAgIHNldCBheGlzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2F4aXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJhck92ZXJsYXBHcm91cCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Jhck92ZXJsYXBHcm91cCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhck92ZXJsYXBHcm91cCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJPdmVybGFwR3JvdXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJhclBhZGRpbmcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXJQYWRkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyUGFkZGluZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJQYWRkaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBiYXJXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JhcldpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmFyV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJvcmRlcigpOiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdib3JkZXInKTtcclxuICAgIH1cclxuICAgIHNldCBib3JkZXIodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JvcmRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2xvc2VWYWx1ZUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2xvc2VWYWx1ZUZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2xvc2VWYWx1ZUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Nsb3NlVmFsdWVGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2xvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb3JuZXJSYWRpdXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb3JuZXJSYWRpdXMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb3JuZXJSYWRpdXModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29ybmVyUmFkaXVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkYXNoU3R5bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXNoU3R5bGUnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXNoU3R5bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGFzaFN0eWxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoaWdoVmFsdWVGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpZ2hWYWx1ZUZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGlnaFZhbHVlRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGlnaFZhbHVlRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhvdmVyTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvdmVyTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3Zlck1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhvdmVyU3R5bGUoKTogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBoYXRjaGluZz86IHsgZGlyZWN0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBzdGVwPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCB3aWR0aD86IG51bWJlciB9IHwgeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgaGF0Y2hpbmc/OiB7IGRpcmVjdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgc3RlcD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3ZlclN0eWxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJTdHlsZSh2YWx1ZTogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBoYXRjaGluZz86IHsgZGlyZWN0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBzdGVwPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCB3aWR0aD86IG51bWJlciB9IHwgeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgaGF0Y2hpbmc/OiB7IGRpcmVjdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgc3RlcD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3ZlclN0eWxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZ25vcmVFbXB0eVBvaW50cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpZ25vcmVFbXB0eVBvaW50cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGlnbm9yZUVtcHR5UG9pbnRzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpZ25vcmVFbXB0eVBvaW50cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5uZXJDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2lubmVyQ29sb3InKTtcclxuICAgIH1cclxuICAgIHNldCBpbm5lckNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2lubmVyQ29sb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxhYmVsKCk6IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBhcmd1bWVudEZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbm5lY3Rvcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaG9yaXpvbnRhbE9mZnNldD86IG51bWJlciwgcG9zaXRpb24/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHNob3dGb3JaZXJvVmFsdWVzPzogYm9vbGVhbiwgdmVydGljYWxPZmZzZXQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuIH0gfCB7IGFyZ3VtZW50Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29ubmVjdG9yPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgcmFkaWFsT2Zmc2V0PzogbnVtYmVyLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3b3JkV3JhcD86IHN0cmluZyB9IHwgeyBhcmd1bWVudEZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbm5lY3Rvcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHNob3dGb3JaZXJvVmFsdWVzPzogYm9vbGVhbiwgdmlzaWJsZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbGFiZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBsYWJlbCh2YWx1ZTogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGFyZ3VtZW50Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29ubmVjdG9yPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBob3Jpem9udGFsT2Zmc2V0PzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc2hvd0Zvclplcm9WYWx1ZXM/OiBib29sZWFuLCB2ZXJ0aWNhbE9mZnNldD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4gfSB8IHsgYXJndW1lbnRGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb25uZWN0b3I/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCByYWRpYWxPZmZzZXQ/OiBudW1iZXIsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdvcmRXcmFwPzogc3RyaW5nIH0gfCB7IGFyZ3VtZW50Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29ubmVjdG9yPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc2hvd0Zvclplcm9WYWx1ZXM/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsYWJlbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbG93VmFsdWVGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvd1ZhbHVlRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCBsb3dWYWx1ZUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvd1ZhbHVlRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1heExhYmVsQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhMYWJlbENvdW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWF4TGFiZWxDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhMYWJlbENvdW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtaW5CYXJTaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWluQmFyU2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbkJhclNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWluQmFyU2l6ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ25hbWUnKTtcclxuICAgIH1cclxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ25hbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9wYWNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcGFjaXR5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb3BhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvcGFjaXR5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvcGVuVmFsdWVGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29wZW5WYWx1ZUZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb3BlblZhbHVlRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb3BlblZhbHVlRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhbmUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYW5lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFuZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYW5lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwb2ludCgpOiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgaG92ZXJNb2RlPzogc3RyaW5nLCBob3ZlclN0eWxlPzogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIHNpemU/OiBudW1iZXIgfSwgaW1hZ2U/OiBzdHJpbmcgfCB7IGhlaWdodD86IG51bWJlciB8IHsgcmFuZ2VNYXhQb2ludD86IG51bWJlciwgcmFuZ2VNaW5Qb2ludD86IG51bWJlciB9LCB1cmw/OiBzdHJpbmcgfCB7IHJhbmdlTWF4UG9pbnQ/OiBzdHJpbmcsIHJhbmdlTWluUG9pbnQ/OiBzdHJpbmcgfSwgd2lkdGg/OiBudW1iZXIgfCB7IHJhbmdlTWF4UG9pbnQ/OiBudW1iZXIsIHJhbmdlTWluUG9pbnQ/OiBudW1iZXIgfSB9LCBzZWxlY3Rpb25Nb2RlPzogc3RyaW5nLCBzZWxlY3Rpb25TdHlsZT86IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBzaXplPzogbnVtYmVyIH0sIHNpemU/OiBudW1iZXIsIHN5bWJvbD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSB8IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBob3Zlck1vZGU/OiBzdHJpbmcsIGhvdmVyU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgc2l6ZT86IG51bWJlciB9LCBpbWFnZT86IHN0cmluZyB8IHsgaGVpZ2h0PzogbnVtYmVyLCB1cmw/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIHNlbGVjdGlvbk1vZGU/OiBzdHJpbmcsIHNlbGVjdGlvblN0eWxlPzogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIHNpemU/OiBudW1iZXIgfSwgc2l6ZT86IG51bWJlciwgc3ltYm9sPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwb2ludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvaW50KHZhbHVlOiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgaG92ZXJNb2RlPzogc3RyaW5nLCBob3ZlclN0eWxlPzogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIHNpemU/OiBudW1iZXIgfSwgaW1hZ2U/OiBzdHJpbmcgfCB7IGhlaWdodD86IG51bWJlciB8IHsgcmFuZ2VNYXhQb2ludD86IG51bWJlciwgcmFuZ2VNaW5Qb2ludD86IG51bWJlciB9LCB1cmw/OiBzdHJpbmcgfCB7IHJhbmdlTWF4UG9pbnQ/OiBzdHJpbmcsIHJhbmdlTWluUG9pbnQ/OiBzdHJpbmcgfSwgd2lkdGg/OiBudW1iZXIgfCB7IHJhbmdlTWF4UG9pbnQ/OiBudW1iZXIsIHJhbmdlTWluUG9pbnQ/OiBudW1iZXIgfSB9LCBzZWxlY3Rpb25Nb2RlPzogc3RyaW5nLCBzZWxlY3Rpb25TdHlsZT86IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBzaXplPzogbnVtYmVyIH0sIHNpemU/OiBudW1iZXIsIHN5bWJvbD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSB8IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBob3Zlck1vZGU/OiBzdHJpbmcsIGhvdmVyU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgc2l6ZT86IG51bWJlciB9LCBpbWFnZT86IHN0cmluZyB8IHsgaGVpZ2h0PzogbnVtYmVyLCB1cmw/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIHNlbGVjdGlvbk1vZGU/OiBzdHJpbmcsIHNlbGVjdGlvblN0eWxlPzogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIHNpemU/OiBudW1iZXIgfSwgc2l6ZT86IG51bWJlciwgc3ltYm9sPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwb2ludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmFuZ2VWYWx1ZTFGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JhbmdlVmFsdWUxRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCByYW5nZVZhbHVlMUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JhbmdlVmFsdWUxRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJhbmdlVmFsdWUyRmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyYW5nZVZhbHVlMkZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmFuZ2VWYWx1ZTJGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyYW5nZVZhbHVlMkZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWR1Y3Rpb24oKTogeyBjb2xvcj86IHN0cmluZywgbGV2ZWw/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVkdWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVkdWN0aW9uKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBsZXZlbD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWR1Y3Rpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlbGVjdGlvbk1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3Rpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0aW9uTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3Rpb25Nb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3Rpb25TdHlsZSgpOiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGhhdGNoaW5nPzogeyBkaXJlY3Rpb24/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHN0ZXA/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIHdpZHRoPzogbnVtYmVyIH0gfCB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBoYXRjaGluZz86IHsgZGlyZWN0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBzdGVwPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9IH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdGlvblN0eWxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0aW9uU3R5bGUodmFsdWU6IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgaGF0Y2hpbmc/OiB7IGRpcmVjdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgc3RlcD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgd2lkdGg/OiBudW1iZXIgfSB8IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhhdGNoaW5nPzogeyBkaXJlY3Rpb24/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHN0ZXA/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0aW9uU3R5bGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dJbkxlZ2VuZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93SW5MZWdlbmQnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93SW5MZWdlbmQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dJbkxlZ2VuZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2l6ZUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2l6ZUZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2l6ZUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NpemVGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhY2soKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGFjaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YWNrKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YWNrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0YWcoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWcnKTtcclxuICAgIH1cclxuICAgIHNldCB0YWcodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGFnJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0YWdGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhZ0ZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFnRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGFnRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0eXBlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0eXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZUVycm9yQmFyKCk6IHsgY29sb3I/OiBzdHJpbmcsIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBlZGdlTGVuZ3RoPzogbnVtYmVyLCBoaWdoVmFsdWVGaWVsZD86IHN0cmluZywgbGluZVdpZHRoPzogbnVtYmVyLCBsb3dWYWx1ZUZpZWxkPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB0eXBlPzogc3RyaW5nLCB2YWx1ZT86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZUVycm9yQmFyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWVFcnJvckJhcih2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGVkZ2VMZW5ndGg/OiBudW1iZXIsIGhpZ2hWYWx1ZUZpZWxkPzogc3RyaW5nLCBsaW5lV2lkdGg/OiBudW1iZXIsIGxvd1ZhbHVlRmllbGQ/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHR5cGU/OiBzdHJpbmcsIHZhbHVlPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbHVlRXJyb3JCYXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlRmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZUZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWVGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWx1ZUZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFyZ3VtZW50VHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FyZ3VtZW50VHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFyZ3VtZW50VHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcmd1bWVudFR5cGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1pblNlZ21lbnRTaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWluU2VnbWVudFNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5TZWdtZW50U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5TZWdtZW50U2l6ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc21hbGxWYWx1ZXNHcm91cGluZygpOiB7IGdyb3VwTmFtZT86IHN0cmluZywgbW9kZT86IHN0cmluZywgdGhyZXNob2xkPzogbnVtYmVyLCB0b3BDb3VudD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzbWFsbFZhbHVlc0dyb3VwaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc21hbGxWYWx1ZXNHcm91cGluZyh2YWx1ZTogeyBncm91cE5hbWU/OiBzdHJpbmcsIG1vZGU/OiBzdHJpbmcsIHRocmVzaG9sZD86IG51bWJlciwgdG9wQ291bnQ/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc21hbGxWYWx1ZXNHcm91cGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2xvc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nsb3NlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsb3NlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2xvc2VkJywgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==