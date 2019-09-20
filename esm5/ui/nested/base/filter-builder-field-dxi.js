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
var DxiFilterBuilderField = (function (_super) {
    __extends(DxiFilterBuilderField, _super);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ1aWxkZXItZmllbGQtZHhpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdWkvbmVzdGVkL2Jhc2UvZmlsdGVyLWJ1aWxkZXItZmllbGQtZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUlyRSxJQUFBO0lBQW9ELHlDQUFzQjs7OztJQUN0RSxzQkFBSSw0REFBeUI7YUFBN0I7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQ3ZEO2FBQ0QsVUFBOEIsS0FBZTtZQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZEOzs7T0FIQTtJQUtELHNCQUFJLDBDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQzthQUNELFVBQVksS0FBYTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQzs7O09BSEE7SUFLRCxzQkFBSSxnREFBYTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzNDO2FBQ0QsVUFBa0IsS0FBZTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQzs7O09BSEE7SUFLRCxzQkFBSSw0Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7YUFDRCxVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7OztPQUhBO0lBS0Qsc0JBQUks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QWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekM7OztPQUhBO0lBS0Qsc0JBQUksMENBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JDO2FBQ0QsVUFBWSxLQUFjO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7T0FIQTtJQUtELHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQzthQUNELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BSEE7SUFLRCxzQkFBSSxrREFBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDN0M7YUFDRCxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0M7OztPQUhBO2dDQXhWTDtFQW1Cb0Qsc0JBQXNCLEVBeVV6RSxDQUFBO0FBelVELGlDQXlVQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbmltcG9ydCB7IENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHhpRmlsdGVyQnVpbGRlckZpZWxkIGV4dGVuZHMgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB7XHJcbiAgICBnZXQgY2FsY3VsYXRlRmlsdGVyRXhwcmVzc2lvbigpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FsY3VsYXRlRmlsdGVyRXhwcmVzc2lvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhbGN1bGF0ZUZpbHRlckV4cHJlc3Npb24odmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYWxjdWxhdGVGaWx0ZXJFeHByZXNzaW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FwdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhcHRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FwdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VzdG9taXplVGV4dCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9taXplVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZVRleHQodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkYXRhRmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YUZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkYXRhVHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFUeXBlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YVR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVR5cGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVkaXRvck9wdGlvbnMoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlZGl0b3JPcHRpb25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWRpdG9yT3B0aW9ucyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlZGl0b3JPcHRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlZGl0b3JUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VkaXRvclRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWRpdG9yVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWRpdG9yVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZhbHNlVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZhbHNlVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZhbHNlVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmYWxzZVRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpbHRlck9wZXJhdGlvbnMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyT3BlcmF0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlck9wZXJhdGlvbnModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlck9wZXJhdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvcm1hdCgpOiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9ybWF0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9ybWF0KHZhbHVlOiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9ybWF0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsb29rdXAoKTogeyBhbGxvd0NsZWFyaW5nPzogYm9vbGVhbiwgZGF0YVNvdXJjZT86IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IEFycmF5PGFueT4sIGRpc3BsYXlFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcsIHZhbHVlRXhwcj86IEZ1bmN0aW9uIHwgc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvb2t1cCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvb2t1cCh2YWx1ZTogeyBhbGxvd0NsZWFyaW5nPzogYm9vbGVhbiwgZGF0YVNvdXJjZT86IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IEFycmF5PGFueT4sIGRpc3BsYXlFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcsIHZhbHVlRXhwcj86IEZ1bmN0aW9uIHwgc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvb2t1cCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ25hbWUnKTtcclxuICAgIH1cclxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ25hbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRydWVUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndHJ1ZVRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCB0cnVlVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0cnVlVGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsb3dDcm9zc0dyb3VwQ2FsY3VsYXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dDcm9zc0dyb3VwQ2FsY3VsYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0Nyb3NzR3JvdXBDYWxjdWxhdGlvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dDcm9zc0dyb3VwQ2FsY3VsYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbG93RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93RXhwYW5kQWxsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93RXhwYW5kQWxsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxvd0ZpbHRlcmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0ZpbHRlcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93RmlsdGVyaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0ZpbHRlcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsb3dTb3J0aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93U29ydGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93U29ydGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dTb3J0aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxvd1NvcnRpbmdCeVN1bW1hcnkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dTb3J0aW5nQnlTdW1tYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dTb3J0aW5nQnlTdW1tYXJ5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd1NvcnRpbmdCeVN1bW1hcnknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFyZWEoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcmVhJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXJlYSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcmVhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhcmVhSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcmVhSW5kZXgnKTtcclxuICAgIH1cclxuICAgIHNldCBhcmVhSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXJlYUluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYWxjdWxhdGVDdXN0b21TdW1tYXJ5KCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYWxjdWxhdGVDdXN0b21TdW1tYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeSh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhbGN1bGF0ZUN1c3RvbVN1bW1hcnknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhbGN1bGF0ZVN1bW1hcnlWYWx1ZSgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FsY3VsYXRlU3VtbWFyeVZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FsY3VsYXRlU3VtbWFyeVZhbHVlKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FsY3VsYXRlU3VtbWFyeVZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkaXNwbGF5Rm9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzcGxheUZvbGRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc3BsYXlGb2xkZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzcGxheUZvbGRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXhwYW5kZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwYW5kZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBleHBhbmRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwYW5kZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpbHRlclR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJUeXBlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyVHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWx0ZXJWYWx1ZXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyVmFsdWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyVmFsdWVzKHZhbHVlOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJWYWx1ZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdyb3VwSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cEluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cEluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBncm91cEludGVydmFsKCk6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBJbnRlcnZhbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwSW50ZXJ2YWwodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JvdXBJbnRlcnZhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ3JvdXBOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBOYW1lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwTmFtZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVhZGVyRmlsdGVyKCk6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlYWRlckZpbHRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlYWRlckZpbHRlcih2YWx1ZTogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVhZGVyRmlsdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc01lYXN1cmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXNNZWFzdXJlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXNNZWFzdXJlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpc01lYXN1cmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByZWNpc2lvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ByZWNpc2lvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHByZWNpc2lvbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwcmVjaXNpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJ1bm5pbmdUb3RhbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J1bm5pbmdUb3RhbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJ1bm5pbmdUb3RhbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydW5uaW5nVG90YWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlbGVjdG9yKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3RvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdG9yKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0b3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dHcmFuZFRvdGFscygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93R3JhbmRUb3RhbHMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93R3JhbmRUb3RhbHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dHcmFuZFRvdGFscycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2hvd1RvdGFscygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93VG90YWxzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd1RvdGFscyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd1RvdGFscycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2hvd1ZhbHVlcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93VmFsdWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd1ZhbHVlcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd1ZhbHVlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc29ydEJ5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc29ydEJ5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydEJ5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRCeScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc29ydEJ5U3VtbWFyeUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc29ydEJ5U3VtbWFyeUZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydEJ5U3VtbWFyeUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRCeVN1bW1hcnlGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc29ydEJ5U3VtbWFyeVBhdGgoKTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc29ydEJ5U3VtbWFyeVBhdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0QnlTdW1tYXJ5UGF0aCh2YWx1ZTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc29ydEJ5U3VtbWFyeVBhdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvcnRpbmdNZXRob2QoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRpbmdNZXRob2QnKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0aW5nTWV0aG9kKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc29ydGluZ01ldGhvZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc29ydE9yZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc29ydE9yZGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydE9yZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRPcmRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3VtbWFyeURpc3BsYXlNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3VtbWFyeURpc3BsYXlNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3VtbWFyeURpc3BsYXlNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N1bW1hcnlEaXNwbGF5TW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3VtbWFyeVR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdW1tYXJ5VHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN1bW1hcnlUeXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N1bW1hcnlUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdvcmRXcmFwRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3b3JkV3JhcEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCB3b3JkV3JhcEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dvcmRXcmFwRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=