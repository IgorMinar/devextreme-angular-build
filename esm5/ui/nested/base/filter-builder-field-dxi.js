/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { CollectionNestedOption } from '../../../core/nested-option';
var DxiFilterBuilderField = /** @class */ (function (_super) {
    tslib_1.__extends(DxiFilterBuilderField, _super);
    function DxiFilterBuilderField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxiFilterBuilderField.prototype, "calculateFilterExpression", {
        get: function () {
            return this._getOption('calculateFilterExpression');
        },
        set: function (value) {
            this._setOption('calculateFilterExpression', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "caption", {
        get: function () {
            return this._getOption('caption');
        },
        set: function (value) {
            this._setOption('caption', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "dataType", {
        get: function () {
            return this._getOption('dataType');
        },
        set: function (value) {
            this._setOption('dataType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "editorOptions", {
        get: function () {
            return this._getOption('editorOptions');
        },
        set: function (value) {
            this._setOption('editorOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "editorTemplate", {
        get: function () {
            return this._getOption('editorTemplate');
        },
        set: function (value) {
            this._setOption('editorTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "falseText", {
        get: function () {
            return this._getOption('falseText');
        },
        set: function (value) {
            this._setOption('falseText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "filterOperations", {
        get: function () {
            return this._getOption('filterOperations');
        },
        set: function (value) {
            this._setOption('filterOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "lookup", {
        get: function () {
            return this._getOption('lookup');
        },
        set: function (value) {
            this._setOption('lookup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "trueText", {
        get: function () {
            return this._getOption('trueText');
        },
        set: function (value) {
            this._setOption('trueText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "allowCrossGroupCalculation", {
        get: function () {
            return this._getOption('allowCrossGroupCalculation');
        },
        set: function (value) {
            this._setOption('allowCrossGroupCalculation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "allowExpandAll", {
        get: function () {
            return this._getOption('allowExpandAll');
        },
        set: function (value) {
            this._setOption('allowExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "allowFiltering", {
        get: function () {
            return this._getOption('allowFiltering');
        },
        set: function (value) {
            this._setOption('allowFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "allowSorting", {
        get: function () {
            return this._getOption('allowSorting');
        },
        set: function (value) {
            this._setOption('allowSorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "allowSortingBySummary", {
        get: function () {
            return this._getOption('allowSortingBySummary');
        },
        set: function (value) {
            this._setOption('allowSortingBySummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "area", {
        get: function () {
            return this._getOption('area');
        },
        set: function (value) {
            this._setOption('area', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "areaIndex", {
        get: function () {
            return this._getOption('areaIndex');
        },
        set: function (value) {
            this._setOption('areaIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "calculateCustomSummary", {
        get: function () {
            return this._getOption('calculateCustomSummary');
        },
        set: function (value) {
            this._setOption('calculateCustomSummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "calculateSummaryValue", {
        get: function () {
            return this._getOption('calculateSummaryValue');
        },
        set: function (value) {
            this._setOption('calculateSummaryValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "displayFolder", {
        get: function () {
            return this._getOption('displayFolder');
        },
        set: function (value) {
            this._setOption('displayFolder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "expanded", {
        get: function () {
            return this._getOption('expanded');
        },
        set: function (value) {
            this._setOption('expanded', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "filterType", {
        get: function () {
            return this._getOption('filterType');
        },
        set: function (value) {
            this._setOption('filterType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "filterValues", {
        get: function () {
            return this._getOption('filterValues');
        },
        set: function (value) {
            this._setOption('filterValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "groupIndex", {
        get: function () {
            return this._getOption('groupIndex');
        },
        set: function (value) {
            this._setOption('groupIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "groupInterval", {
        get: function () {
            return this._getOption('groupInterval');
        },
        set: function (value) {
            this._setOption('groupInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "groupName", {
        get: function () {
            return this._getOption('groupName');
        },
        set: function (value) {
            this._setOption('groupName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "headerFilter", {
        get: function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "isMeasure", {
        get: function () {
            return this._getOption('isMeasure');
        },
        set: function (value) {
            this._setOption('isMeasure', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "precision", {
        get: function () {
            return this._getOption('precision');
        },
        set: function (value) {
            this._setOption('precision', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "runningTotal", {
        get: function () {
            return this._getOption('runningTotal');
        },
        set: function (value) {
            this._setOption('runningTotal', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "selector", {
        get: function () {
            return this._getOption('selector');
        },
        set: function (value) {
            this._setOption('selector', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "showGrandTotals", {
        get: function () {
            return this._getOption('showGrandTotals');
        },
        set: function (value) {
            this._setOption('showGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "showTotals", {
        get: function () {
            return this._getOption('showTotals');
        },
        set: function (value) {
            this._setOption('showTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "showValues", {
        get: function () {
            return this._getOption('showValues');
        },
        set: function (value) {
            this._setOption('showValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "sortBy", {
        get: function () {
            return this._getOption('sortBy');
        },
        set: function (value) {
            this._setOption('sortBy', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "sortBySummaryField", {
        get: function () {
            return this._getOption('sortBySummaryField');
        },
        set: function (value) {
            this._setOption('sortBySummaryField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "sortBySummaryPath", {
        get: function () {
            return this._getOption('sortBySummaryPath');
        },
        set: function (value) {
            this._setOption('sortBySummaryPath', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "sortingMethod", {
        get: function () {
            return this._getOption('sortingMethod');
        },
        set: function (value) {
            this._setOption('sortingMethod', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "sortOrder", {
        get: function () {
            return this._getOption('sortOrder');
        },
        set: function (value) {
            this._setOption('sortOrder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "summaryDisplayMode", {
        get: function () {
            return this._getOption('summaryDisplayMode');
        },
        set: function (value) {
            this._setOption('summaryDisplayMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "summaryType", {
        get: function () {
            return this._getOption('summaryType');
        },
        set: function (value) {
            this._setOption('summaryType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFilterBuilderField.prototype, "wordWrapEnabled", {
        get: function () {
            return this._getOption('wordWrapEnabled');
        },
        set: function (value) {
            this._setOption('wordWrapEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxiFilterBuilderField;
}(CollectionNestedOption));
export { DxiFilterBuilderField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ1aWxkZXItZmllbGQtZHhpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2Jhc2UvZmlsdGVyLWJ1aWxkZXItZmllbGQtZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFFcEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJckU7SUFBb0QsaURBQXNCO0lBQTFFOztJQXlVQSxDQUFDO0lBeFVHLHNCQUFJLDREQUF5QjthQUE3QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsQ0FBQzthQUNELFVBQThCLEtBQWU7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLDBDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxDQUFDO2FBQ0QsVUFBWSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksZ0RBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxDQUFDO2FBQ0QsVUFBa0IsS0FBZTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLDRDQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDO2FBQ0QsVUFBYyxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMs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QUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUMsQ0FBQzthQUNELFVBQW9CLEtBQWM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FIQTtJQUlMLDRCQUFDO0FBQUQsQ0FBQyxBQXpVRCxDQUFvRCxzQkFBc0IsR0F5VXpFIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5pbXBvcnQgeyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIER4aUZpbHRlckJ1aWxkZXJGaWVsZCBleHRlbmRzIENvbGxlY3Rpb25OZXN0ZWRPcHRpb24ge1xyXG4gICAgZ2V0IGNhbGN1bGF0ZUZpbHRlckV4cHJlc3Npb24oKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NhbGN1bGF0ZUZpbHRlckV4cHJlc3Npb24nKTtcclxuICAgIH1cclxuICAgIHNldCBjYWxjdWxhdGVGaWx0ZXJFeHByZXNzaW9uKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FsY3VsYXRlRmlsdGVyRXhwcmVzc2lvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NhcHRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBjYXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhcHRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1c3RvbWl6ZVRleHQoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbWl6ZVRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21pemVUZXh0KHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9taXplVGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGF0YUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YUZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGF0YVR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhVHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFUeXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlZGl0b3JPcHRpb25zKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWRpdG9yT3B0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVkaXRvck9wdGlvbnModmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWRpdG9yT3B0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWRpdG9yVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlZGl0b3JUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVkaXRvclRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VkaXRvclRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmYWxzZVRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmYWxzZVRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBmYWxzZVRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmFsc2VUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWx0ZXJPcGVyYXRpb25zKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlck9wZXJhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJPcGVyYXRpb25zKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJPcGVyYXRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmb3JtYXQoKTogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Zvcm1hdCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvcm1hdCh2YWx1ZTogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Zvcm1hdCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbG9va3VwKCk6IHsgYWxsb3dDbGVhcmluZz86IGJvb2xlYW4sIGRhdGFTb3VyY2U/OiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBBcnJheTxhbnk+LCBkaXNwbGF5RXhwcj86IEZ1bmN0aW9uIHwgc3RyaW5nLCB2YWx1ZUV4cHI/OiBGdW5jdGlvbiB8IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb29rdXAnKTtcclxuICAgIH1cclxuICAgIHNldCBsb29rdXAodmFsdWU6IHsgYWxsb3dDbGVhcmluZz86IGJvb2xlYW4sIGRhdGFTb3VyY2U/OiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBBcnJheTxhbnk+LCBkaXNwbGF5RXhwcj86IEZ1bmN0aW9uIHwgc3RyaW5nLCB2YWx1ZUV4cHI/OiBGdW5jdGlvbiB8IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb29rdXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCduYW1lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCduYW1lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0cnVlVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RydWVUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdHJ1ZVRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndHJ1ZVRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbG93Q3Jvc3NHcm91cENhbGN1bGF0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93Q3Jvc3NHcm91cENhbGN1bGF0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dDcm9zc0dyb3VwQ2FsY3VsYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93Q3Jvc3NHcm91cENhbGN1bGF0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxvd0V4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0V4cGFuZEFsbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0V4cGFuZEFsbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsb3dGaWx0ZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dGaWx0ZXJpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0ZpbHRlcmluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dGaWx0ZXJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbG93U29ydGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd1NvcnRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd1NvcnRpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93U29ydGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsb3dTb3J0aW5nQnlTdW1tYXJ5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93U29ydGluZ0J5U3VtbWFyeScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93U29ydGluZ0J5U3VtbWFyeSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dTb3J0aW5nQnlTdW1tYXJ5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhcmVhKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJlYScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFyZWEodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXJlYScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXJlYUluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJlYUluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXJlYUluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FyZWFJbmRleCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeSgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhbGN1bGF0ZUN1c3RvbVN1bW1hcnkodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYWxjdWxhdGVDdXN0b21TdW1tYXJ5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYWxjdWxhdGVTdW1tYXJ5VmFsdWUoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NhbGN1bGF0ZVN1bW1hcnlWYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhbGN1bGF0ZVN1bW1hcnlWYWx1ZSh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhbGN1bGF0ZVN1bW1hcnlWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGlzcGxheUZvbGRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc3BsYXlGb2xkZXInKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNwbGF5Rm9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc3BsYXlGb2xkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGV4cGFuZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2V4cGFuZGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2V4cGFuZGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWx0ZXJUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyVHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlclR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyVHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmlsdGVyVmFsdWVzKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlclZhbHVlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlclZhbHVlcyh2YWx1ZTogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyVmFsdWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBncm91cEluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JvdXBJbmRleCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ3JvdXBJbnRlcnZhbCgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwSW50ZXJ2YWwnKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cEludGVydmFsKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwSW50ZXJ2YWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdyb3VwTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwTmFtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cE5hbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlYWRlckZpbHRlcigpOiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWFkZXJGaWx0ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBoZWFkZXJGaWx0ZXIodmFsdWU6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlYWRlckZpbHRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNNZWFzdXJlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2lzTWVhc3VyZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGlzTWVhc3VyZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXNNZWFzdXJlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmVjaXNpb24oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwcmVjaXNpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBwcmVjaXNpb24odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncHJlY2lzaW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBydW5uaW5nVG90YWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydW5uaW5nVG90YWwnKTtcclxuICAgIH1cclxuICAgIHNldCBydW5uaW5nVG90YWwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnVubmluZ1RvdGFsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RvcigpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0b3InKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3Rvcih2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlbGVjdG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93R3JhbmRUb3RhbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0dyYW5kVG90YWxzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0dyYW5kVG90YWxzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93R3JhbmRUb3RhbHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dUb3RhbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd1RvdGFscycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dUb3RhbHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dUb3RhbHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dWYWx1ZXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd1ZhbHVlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dWYWx1ZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dWYWx1ZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvcnRCeSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRCeScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNvcnRCeSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzb3J0QnknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvcnRCeVN1bW1hcnlGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRCeVN1bW1hcnlGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNvcnRCeVN1bW1hcnlGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzb3J0QnlTdW1tYXJ5RmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvcnRCeVN1bW1hcnlQYXRoKCk6IEFycmF5PG51bWJlciB8IHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRCeVN1bW1hcnlQYXRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydEJ5U3VtbWFyeVBhdGgodmFsdWU6IEFycmF5PG51bWJlciB8IHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRCeVN1bW1hcnlQYXRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzb3J0aW5nTWV0aG9kKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzb3J0aW5nTWV0aG9kJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydGluZ01ldGhvZCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRpbmdNZXRob2QnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvcnRPcmRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRPcmRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNvcnRPcmRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzb3J0T3JkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN1bW1hcnlEaXNwbGF5TW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N1bW1hcnlEaXNwbGF5TW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN1bW1hcnlEaXNwbGF5TW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdW1tYXJ5RGlzcGxheU1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN1bW1hcnlUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3VtbWFyeVR5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzdW1tYXJ5VHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdW1tYXJ5VHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3b3JkV3JhcEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd29yZFdyYXBFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd29yZFdyYXBFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3b3JkV3JhcEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19