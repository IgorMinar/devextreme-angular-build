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
import { CollectionNestedOption } from '../../../core/nested-option';
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
}(CollectionNestedOption));
export { DxiChartSeries };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc2VyaWVzLWR4aS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VpL25lc3RlZC9iYXNlL2NoYXJ0LXNlcmllcy1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSXJFLElBQUE7SUFBNkMsa0NBQXNCOzs7O0lBQy9ELHNCQUFJLHVDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QzthQUNELFVBQWdCLEtBQW1FO1lBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pDOzs7T0FIQTtJQUtELHNCQUFJLHlDQUFhO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDM0M7YUFDRCxVQUFrQixLQUFhO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDOzs7T0FIQTtJQUtELHNCQUFJLGdDQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQzthQUNELFVBQVMsS0FBYTtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsQzs7O09BSEE7SUFLRCxzQkFBSSwyQ0FBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDN0M7YUFDRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0M7OztPQUhBO0lBS0Qsc0JBQUksc0NBQVU7YUFBZDtZQUNJ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QUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEM7OztPQUhBO3lCQW5VTDtFQW1CNkMsc0JBQXNCLEVBb1RsRSxDQUFBO0FBcFRELDBCQW9UQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbmltcG9ydCB7IENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHhpQ2hhcnRTZXJpZXMgZXh0ZW5kcyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIHtcclxuICAgIGdldCBhZ2dyZWdhdGlvbigpOiB7IGNhbGN1bGF0ZT86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgbWV0aG9kPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FnZ3JlZ2F0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWdncmVnYXRpb24odmFsdWU6IHsgY2FsY3VsYXRlPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBtZXRob2Q/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWdncmVnYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFyZ3VtZW50RmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcmd1bWVudEZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXJndW1lbnRGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcmd1bWVudEZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBheGlzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXhpcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGF4aXModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXhpcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYmFyT3ZlcmxhcEdyb3VwKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFyT3ZlcmxhcEdyb3VwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyT3ZlcmxhcEdyb3VwKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Jhck92ZXJsYXBHcm91cCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYmFyUGFkZGluZygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JhclBhZGRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBiYXJQYWRkaW5nKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JhclBhZGRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJhcldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFyV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBiYXJXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJXaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYm9yZGVyKCk6IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JvcmRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJvcmRlcih2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYm9yZGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjbG9zZVZhbHVlRmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjbG9zZVZhbHVlRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCBjbG9zZVZhbHVlRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2xvc2VWYWx1ZUZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvcm5lclJhZGl1cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nvcm5lclJhZGl1cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvcm5lclJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb3JuZXJSYWRpdXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRhc2hTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rhc2hTdHlsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhc2hTdHlsZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXNoU3R5bGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhpZ2hWYWx1ZUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGlnaFZhbHVlRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCBoaWdoVmFsdWVGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaWdoVmFsdWVGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaG92ZXJNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG92ZXJNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hvdmVyTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaG92ZXJTdHlsZSgpOiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGhhdGNoaW5nPzogeyBkaXJlY3Rpb24/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHN0ZXA/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIHdpZHRoPzogbnVtYmVyIH0gfCB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBoYXRjaGluZz86IHsgZGlyZWN0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBzdGVwPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9IH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyU3R5bGUnKTtcclxuICAgIH1cclxuICAgIHNldCBob3ZlclN0eWxlKHZhbHVlOiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGhhdGNoaW5nPzogeyBkaXJlY3Rpb24/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHN0ZXA/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0sIHdpZHRoPzogbnVtYmVyIH0gfCB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBoYXRjaGluZz86IHsgZGlyZWN0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBzdGVwPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9IH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hvdmVyU3R5bGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlnbm9yZUVtcHR5UG9pbnRzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2lnbm9yZUVtcHR5UG9pbnRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaWdub3JlRW1wdHlQb2ludHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2lnbm9yZUVtcHR5UG9pbnRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbm5lckNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaW5uZXJDb2xvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGlubmVyQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaW5uZXJDb2xvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFiZWwoKTogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGFyZ3VtZW50Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29ubmVjdG9yPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBob3Jpem9udGFsT2Zmc2V0PzogbnVtYmVyLCBwb3NpdGlvbj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc2hvd0Zvclplcm9WYWx1ZXM/OiBib29sZWFuLCB2ZXJ0aWNhbE9mZnNldD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4gfSB8IHsgYXJndW1lbnRGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb25uZWN0b3I/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCByYWRpYWxPZmZzZXQ/OiBudW1iZXIsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdvcmRXcmFwPzogc3RyaW5nIH0gfCB7IGFyZ3VtZW50Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29ubmVjdG9yPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc2hvd0Zvclplcm9WYWx1ZXM/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsYWJlbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxhYmVsKHZhbHVlOiB7IGFsaWdubWVudD86IHN0cmluZywgYXJndW1lbnRGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb25uZWN0b3I/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGhvcml6b250YWxPZmZzZXQ/OiBudW1iZXIsIHBvc2l0aW9uPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzaG93Rm9yWmVyb1ZhbHVlcz86IGJvb2xlYW4sIHZlcnRpY2FsT2Zmc2V0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9IHwgeyBhcmd1bWVudEZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbm5lY3Rvcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHJhZGlhbE9mZnNldD86IG51bWJlciwgcm90YXRpb25BbmdsZT86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSB8IHsgYXJndW1lbnRGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb25uZWN0b3I/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzaG93Rm9yWmVyb1ZhbHVlcz86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xhYmVsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsb3dWYWx1ZUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbG93VmFsdWVGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvd1ZhbHVlRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbG93VmFsdWVGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWF4TGFiZWxDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heExhYmVsQ291bnQnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXhMYWJlbENvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heExhYmVsQ291bnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1pbkJhclNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5CYXJTaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluQmFyU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5CYXJTaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbmFtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbmFtZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3BhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29wYWNpdHknKTtcclxuICAgIH1cclxuICAgIHNldCBvcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wYWNpdHknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9wZW5WYWx1ZUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb3BlblZhbHVlRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCBvcGVuVmFsdWVGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvcGVuVmFsdWVGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGFuZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbmUnKTtcclxuICAgIH1cclxuICAgIHNldCBwYW5lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhbmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvaW50KCk6IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBob3Zlck1vZGU/OiBzdHJpbmcsIGhvdmVyU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgc2l6ZT86IG51bWJlciB9LCBpbWFnZT86IHN0cmluZyB8IHsgaGVpZ2h0PzogbnVtYmVyIHwgeyByYW5nZU1heFBvaW50PzogbnVtYmVyLCByYW5nZU1pblBvaW50PzogbnVtYmVyIH0sIHVybD86IHN0cmluZyB8IHsgcmFuZ2VNYXhQb2ludD86IHN0cmluZywgcmFuZ2VNaW5Qb2ludD86IHN0cmluZyB9LCB3aWR0aD86IG51bWJlciB8IHsgcmFuZ2VNYXhQb2ludD86IG51bWJlciwgcmFuZ2VNaW5Qb2ludD86IG51bWJlciB9IH0sIHNlbGVjdGlvbk1vZGU/OiBzdHJpbmcsIHNlbGVjdGlvblN0eWxlPzogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIHNpemU/OiBudW1iZXIgfSwgc2l6ZT86IG51bWJlciwgc3ltYm9sPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9IHwgeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhvdmVyTW9kZT86IHN0cmluZywgaG92ZXJTdHlsZT86IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBzaXplPzogbnVtYmVyIH0sIGltYWdlPzogc3RyaW5nIHwgeyBoZWlnaHQ/OiBudW1iZXIsIHVybD86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgc2VsZWN0aW9uTW9kZT86IHN0cmluZywgc2VsZWN0aW9uU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgc2l6ZT86IG51bWJlciB9LCBzaXplPzogbnVtYmVyLCBzeW1ib2w/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BvaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcG9pbnQodmFsdWU6IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBob3Zlck1vZGU/OiBzdHJpbmcsIGhvdmVyU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgc2l6ZT86IG51bWJlciB9LCBpbWFnZT86IHN0cmluZyB8IHsgaGVpZ2h0PzogbnVtYmVyIHwgeyByYW5nZU1heFBvaW50PzogbnVtYmVyLCByYW5nZU1pblBvaW50PzogbnVtYmVyIH0sIHVybD86IHN0cmluZyB8IHsgcmFuZ2VNYXhQb2ludD86IHN0cmluZywgcmFuZ2VNaW5Qb2ludD86IHN0cmluZyB9LCB3aWR0aD86IG51bWJlciB8IHsgcmFuZ2VNYXhQb2ludD86IG51bWJlciwgcmFuZ2VNaW5Qb2ludD86IG51bWJlciB9IH0sIHNlbGVjdGlvbk1vZGU/OiBzdHJpbmcsIHNlbGVjdGlvblN0eWxlPzogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIHNpemU/OiBudW1iZXIgfSwgc2l6ZT86IG51bWJlciwgc3ltYm9sPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9IHwgeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhvdmVyTW9kZT86IHN0cmluZywgaG92ZXJTdHlsZT86IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBzaXplPzogbnVtYmVyIH0sIGltYWdlPzogc3RyaW5nIHwgeyBoZWlnaHQ/OiBudW1iZXIsIHVybD86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgc2VsZWN0aW9uTW9kZT86IHN0cmluZywgc2VsZWN0aW9uU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgc2l6ZT86IG51bWJlciB9LCBzaXplPzogbnVtYmVyLCBzeW1ib2w/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BvaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByYW5nZVZhbHVlMUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmFuZ2VWYWx1ZTFGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJhbmdlVmFsdWUxRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmFuZ2VWYWx1ZTFGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmFuZ2VWYWx1ZTJGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JhbmdlVmFsdWUyRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCByYW5nZVZhbHVlMkZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JhbmdlVmFsdWUyRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJlZHVjdGlvbigpOiB7IGNvbG9yPzogc3RyaW5nLCBsZXZlbD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWR1Y3Rpb24nKTtcclxuICAgIH1cclxuICAgIHNldCByZWR1Y3Rpb24odmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIGxldmVsPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlZHVjdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VsZWN0aW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdGlvbk1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3Rpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlbGVjdGlvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlbGVjdGlvblN0eWxlKCk6IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgaGF0Y2hpbmc/OiB7IGRpcmVjdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgc3RlcD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgd2lkdGg/OiBudW1iZXIgfSB8IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhhdGNoaW5nPzogeyBkaXJlY3Rpb24/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHN0ZXA/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0aW9uU3R5bGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3Rpb25TdHlsZSh2YWx1ZTogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBoYXRjaGluZz86IHsgZGlyZWN0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBzdGVwPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCB3aWR0aD86IG51bWJlciB9IHwgeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgaGF0Y2hpbmc/OiB7IGRpcmVjdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgc3RlcD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3Rpb25TdHlsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2hvd0luTGVnZW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dJbkxlZ2VuZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dJbkxlZ2VuZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0luTGVnZW5kJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaXplRmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaXplRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCBzaXplRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2l6ZUZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGFjaygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YWNrJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhY2sodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRhZygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhZyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0YWcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRhZ0ZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGFnRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCB0YWdGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0YWdGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3R5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3R5cGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlRXJyb3JCYXIoKTogeyBjb2xvcj86IHN0cmluZywgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGVkZ2VMZW5ndGg/OiBudW1iZXIsIGhpZ2hWYWx1ZUZpZWxkPzogc3RyaW5nLCBsaW5lV2lkdGg/OiBudW1iZXIsIGxvd1ZhbHVlRmllbGQ/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHR5cGU/OiBzdHJpbmcsIHZhbHVlPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlRXJyb3JCYXInKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZUVycm9yQmFyKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZWRnZUxlbmd0aD86IG51bWJlciwgaGlnaFZhbHVlRmllbGQ/OiBzdHJpbmcsIGxpbmVXaWR0aD86IG51bWJlciwgbG93VmFsdWVGaWVsZD86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdHlwZT86IHN0cmluZywgdmFsdWU/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVFcnJvckJhcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWVGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbHVlRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXJndW1lbnRUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJndW1lbnRUeXBlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXJndW1lbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FyZ3VtZW50VHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWluU2VnbWVudFNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5TZWdtZW50U2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pblNlZ21lbnRTaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pblNlZ21lbnRTaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzbWFsbFZhbHVlc0dyb3VwaW5nKCk6IHsgZ3JvdXBOYW1lPzogc3RyaW5nLCBtb2RlPzogc3RyaW5nLCB0aHJlc2hvbGQ/OiBudW1iZXIsIHRvcENvdW50PzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NtYWxsVmFsdWVzR3JvdXBpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBzbWFsbFZhbHVlc0dyb3VwaW5nKHZhbHVlOiB7IGdyb3VwTmFtZT86IHN0cmluZywgbW9kZT86IHN0cmluZywgdGhyZXNob2xkPzogbnVtYmVyLCB0b3BDb3VudD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzbWFsbFZhbHVlc0dyb3VwaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjbG9zZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2xvc2VkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2xvc2VkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjbG9zZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19