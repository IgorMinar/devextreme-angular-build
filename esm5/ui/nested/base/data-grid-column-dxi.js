/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { CollectionNestedOption } from '../../../core/nested-option';
var DxiDataGridColumn = /** @class */ (function (_super) {
    tslib_1.__extends(DxiDataGridColumn, _super);
    function DxiDataGridColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxiDataGridColumn.prototype, "alignment", {
        get: function () {
            return this._getOption('alignment');
        },
        set: function (value) {
            this._setOption('alignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "allowEditing", {
        get: function () {
            return this._getOption('allowEditing');
        },
        set: function (value) {
            this._setOption('allowEditing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "allowExporting", {
        get: function () {
            return this._getOption('allowExporting');
        },
        set: function (value) {
            this._setOption('allowExporting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "allowFiltering", {
        get: function () {
            return this._getOption('allowFiltering');
        },
        set: function (value) {
            this._setOption('allowFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "allowFixing", {
        get: function () {
            return this._getOption('allowFixing');
        },
        set: function (value) {
            this._setOption('allowFixing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "allowGrouping", {
        get: function () {
            return this._getOption('allowGrouping');
        },
        set: function (value) {
            this._setOption('allowGrouping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "allowHeaderFiltering", {
        get: function () {
            return this._getOption('allowHeaderFiltering');
        },
        set: function (value) {
            this._setOption('allowHeaderFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "allowHiding", {
        get: function () {
            return this._getOption('allowHiding');
        },
        set: function (value) {
            this._setOption('allowHiding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "allowReordering", {
        get: function () {
            return this._getOption('allowReordering');
        },
        set: function (value) {
            this._setOption('allowReordering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "allowResizing", {
        get: function () {
            return this._getOption('allowResizing');
        },
        set: function (value) {
            this._setOption('allowResizing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "allowSearch", {
        get: function () {
            return this._getOption('allowSearch');
        },
        set: function (value) {
            this._setOption('allowSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "allowSorting", {
        get: function () {
            return this._getOption('allowSorting');
        },
        set: function (value) {
            this._setOption('allowSorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "autoExpandGroup", {
        get: function () {
            return this._getOption('autoExpandGroup');
        },
        set: function (value) {
            this._setOption('autoExpandGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "buttons", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this._setOption('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "calculateCellValue", {
        get: function () {
            return this._getOption('calculateCellValue');
        },
        set: function (value) {
            this._setOption('calculateCellValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "calculateDisplayValue", {
        get: function () {
            return this._getOption('calculateDisplayValue');
        },
        set: function (value) {
            this._setOption('calculateDisplayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "calculateFilterExpression", {
        get: function () {
            return this._getOption('calculateFilterExpression');
        },
        set: function (value) {
            this._setOption('calculateFilterExpression', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "calculateGroupValue", {
        get: function () {
            return this._getOption('calculateGroupValue');
        },
        set: function (value) {
            this._setOption('calculateGroupValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "calculateSortValue", {
        get: function () {
            return this._getOption('calculateSortValue');
        },
        set: function (value) {
            this._setOption('calculateSortValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "caption", {
        get: function () {
            return this._getOption('caption');
        },
        set: function (value) {
            this._setOption('caption', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "cellTemplate", {
        get: function () {
            return this._getOption('cellTemplate');
        },
        set: function (value) {
            this._setOption('cellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "columns", {
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this._setOption('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "cssClass", {
        get: function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "dataType", {
        get: function () {
            return this._getOption('dataType');
        },
        set: function (value) {
            this._setOption('dataType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "editCellTemplate", {
        get: function () {
            return this._getOption('editCellTemplate');
        },
        set: function (value) {
            this._setOption('editCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "editorOptions", {
        get: function () {
            return this._getOption('editorOptions');
        },
        set: function (value) {
            this._setOption('editorOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "encodeHtml", {
        get: function () {
            return this._getOption('encodeHtml');
        },
        set: function (value) {
            this._setOption('encodeHtml', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "falseText", {
        get: function () {
            return this._getOption('falseText');
        },
        set: function (value) {
            this._setOption('falseText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "filterOperations", {
        get: function () {
            return this._getOption('filterOperations');
        },
        set: function (value) {
            this._setOption('filterOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "filterType", {
        get: function () {
            return this._getOption('filterType');
        },
        set: function (value) {
            this._setOption('filterType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "filterValue", {
        get: function () {
            return this._getOption('filterValue');
        },
        set: function (value) {
            this._setOption('filterValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "filterValues", {
        get: function () {
            return this._getOption('filterValues');
        },
        set: function (value) {
            this._setOption('filterValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "fixed", {
        get: function () {
            return this._getOption('fixed');
        },
        set: function (value) {
            this._setOption('fixed', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "fixedPosition", {
        get: function () {
            return this._getOption('fixedPosition');
        },
        set: function (value) {
            this._setOption('fixedPosition', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "formItem", {
        get: function () {
            return this._getOption('formItem');
        },
        set: function (value) {
            this._setOption('formItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "groupCellTemplate", {
        get: function () {
            return this._getOption('groupCellTemplate');
        },
        set: function (value) {
            this._setOption('groupCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "groupIndex", {
        get: function () {
            return this._getOption('groupIndex');
        },
        set: function (value) {
            this._setOption('groupIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "headerCellTemplate", {
        get: function () {
            return this._getOption('headerCellTemplate');
        },
        set: function (value) {
            this._setOption('headerCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "headerFilter", {
        get: function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "hidingPriority", {
        get: function () {
            return this._getOption('hidingPriority');
        },
        set: function (value) {
            this._setOption('hidingPriority', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "isBand", {
        get: function () {
            return this._getOption('isBand');
        },
        set: function (value) {
            this._setOption('isBand', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "lookup", {
        get: function () {
            return this._getOption('lookup');
        },
        set: function (value) {
            this._setOption('lookup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "minWidth", {
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "ownerBand", {
        get: function () {
            return this._getOption('ownerBand');
        },
        set: function (value) {
            this._setOption('ownerBand', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "renderAsync", {
        get: function () {
            return this._getOption('renderAsync');
        },
        set: function (value) {
            this._setOption('renderAsync', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "selectedFilterOperation", {
        get: function () {
            return this._getOption('selectedFilterOperation');
        },
        set: function (value) {
            this._setOption('selectedFilterOperation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "setCellValue", {
        get: function () {
            return this._getOption('setCellValue');
        },
        set: function (value) {
            this._setOption('setCellValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "showEditorAlways", {
        get: function () {
            return this._getOption('showEditorAlways');
        },
        set: function (value) {
            this._setOption('showEditorAlways', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "showInColumnChooser", {
        get: function () {
            return this._getOption('showInColumnChooser');
        },
        set: function (value) {
            this._setOption('showInColumnChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "showWhenGrouped", {
        get: function () {
            return this._getOption('showWhenGrouped');
        },
        set: function (value) {
            this._setOption('showWhenGrouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "sortIndex", {
        get: function () {
            return this._getOption('sortIndex');
        },
        set: function (value) {
            this._setOption('sortIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "sortingMethod", {
        get: function () {
            return this._getOption('sortingMethod');
        },
        set: function (value) {
            this._setOption('sortingMethod', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "sortOrder", {
        get: function () {
            return this._getOption('sortOrder');
        },
        set: function (value) {
            this._setOption('sortOrder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "trueText", {
        get: function () {
            return this._getOption('trueText');
        },
        set: function (value) {
            this._setOption('trueText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "validationRules", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "visibleIndex", {
        get: function () {
            return this._getOption('visibleIndex');
        },
        set: function (value) {
            this._setOption('visibleIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiDataGridColumn.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxiDataGridColumn;
}(CollectionNestedOption));
export { DxiDataGridColumn };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNvbHVtbi1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvYmFzZS9kYXRhLWdyaWQtY29sdW1uLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSXJFO0lBQWdELDZDQUFzQjtJQUF0RTs7SUF5YkEsQ0FBQztJQXhiRyxzQkFBSSx3Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsQ0FBQzthQUNELFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLDJDQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsQ0FBQzthQUNELFVBQWlCLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BSEE7SUFLRCxzQkFBSSw2Q0FBYzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0MsQ0FBQzthQUNELFVBQW1CLEtBQWM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLDZDQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3QyxDQUFDO2FBQ0QsVUFBbUIsS0FBYztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFn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Q0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQzthQUNELFVBQVUsS0FBc0I7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQzs7O09BSEE7SUFJTCx3QkFBQztBQUFELENBQUMsQUF6YkQsQ0FBZ0Qsc0JBQXNCLEdBeWJyRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuaW1wb3J0IHsgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeGlEYXRhR3JpZENvbHVtbiBleHRlbmRzIENvbGxlY3Rpb25OZXN0ZWRPcHRpb24ge1xyXG4gICAgZ2V0IGFsaWdubWVudCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsaWdubWVudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsaWdubWVudCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGlnbm1lbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbG93RWRpdGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0VkaXRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0VkaXRpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93RWRpdGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsb3dFeHBvcnRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dFeHBvcnRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0V4cG9ydGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dFeHBvcnRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbG93RmlsdGVyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93RmlsdGVyaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dGaWx0ZXJpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93RmlsdGVyaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxvd0ZpeGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0ZpeGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93Rml4aW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0ZpeGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsb3dHcm91cGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0dyb3VwaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dHcm91cGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dHcm91cGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsb3dIZWFkZXJGaWx0ZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dIZWFkZXJGaWx0ZXJpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0hlYWRlckZpbHRlcmluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dIZWFkZXJGaWx0ZXJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbG93SGlkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93SGlkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dIaWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93SGlkaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxvd1Jlb3JkZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dSZW9yZGVyaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dSZW9yZGVyaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd1Jlb3JkZXJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbG93UmVzaXppbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dSZXNpemluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93UmVzaXppbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93UmVzaXppbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbG93U2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93U2VhcmNoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93U2VhcmNoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxvd1NvcnRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dTb3J0aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dTb3J0aW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd1NvcnRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGF1dG9FeHBhbmRHcm91cCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhdXRvRXhwYW5kR3JvdXAnKTtcclxuICAgIH1cclxuICAgIHNldCBhdXRvRXhwYW5kR3JvdXAodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2F1dG9FeHBhbmRHcm91cCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYnV0dG9ucygpOiBBcnJheTxzdHJpbmcgfCBEZXZFeHByZXNzLnVpLmR4RGF0YUdyaWRDb2x1bW5CdXR0b24gfCBEZXZFeHByZXNzLnVpLmR4VHJlZUxpc3RDb2x1bW5CdXR0b24+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdidXR0b25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnV0dG9ucyh2YWx1ZTogQXJyYXk8c3RyaW5nIHwgRGV2RXhwcmVzcy51aS5keERhdGFHcmlkQ29sdW1uQnV0dG9uIHwgRGV2RXhwcmVzcy51aS5keFRyZWVMaXN0Q29sdW1uQnV0dG9uPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYnV0dG9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FsY3VsYXRlQ2VsbFZhbHVlKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYWxjdWxhdGVDZWxsVmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBjYWxjdWxhdGVDZWxsVmFsdWUodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYWxjdWxhdGVDZWxsVmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhbGN1bGF0ZURpc3BsYXlWYWx1ZSgpOiBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FsY3VsYXRlRGlzcGxheVZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FsY3VsYXRlRGlzcGxheVZhbHVlKHZhbHVlOiBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FsY3VsYXRlRGlzcGxheVZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYWxjdWxhdGVGaWx0ZXJFeHByZXNzaW9uKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYWxjdWxhdGVGaWx0ZXJFeHByZXNzaW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FsY3VsYXRlRmlsdGVyRXhwcmVzc2lvbih2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhbGN1bGF0ZUZpbHRlckV4cHJlc3Npb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhbGN1bGF0ZUdyb3VwVmFsdWUoKTogRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NhbGN1bGF0ZUdyb3VwVmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBjYWxjdWxhdGVHcm91cFZhbHVlKHZhbHVlOiBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FsY3VsYXRlR3JvdXBWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FsY3VsYXRlU29ydFZhbHVlKCk6IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYWxjdWxhdGVTb3J0VmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBjYWxjdWxhdGVTb3J0VmFsdWUodmFsdWU6IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYWxjdWxhdGVTb3J0VmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhcHRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYXB0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FwdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYXB0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjZWxsVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjZWxsVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBjZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2VsbFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2x1bW5zKCk6IEFycmF5PERldkV4cHJlc3MudWkuZHhEYXRhR3JpZENvbHVtbiB8IHN0cmluZyB8IERldkV4cHJlc3MudWkuZHhUcmVlTGlzdENvbHVtbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5zKHZhbHVlOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4RGF0YUdyaWRDb2x1bW4gfCBzdHJpbmcgfCBEZXZFeHByZXNzLnVpLmR4VHJlZUxpc3RDb2x1bW4+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjc3NDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nzc0NsYXNzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3NzQ2xhc3ModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3NzQ2xhc3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1c3RvbWl6ZVRleHQoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbWl6ZVRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21pemVUZXh0KHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9taXplVGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGF0YUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YUZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YUZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGF0YVR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhVHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFUeXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlZGl0Q2VsbFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWRpdENlbGxUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVkaXRDZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWRpdENlbGxUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWRpdG9yT3B0aW9ucygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VkaXRvck9wdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBlZGl0b3JPcHRpb25zKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VkaXRvck9wdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVuY29kZUh0bWwoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5jb2RlSHRtbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVuY29kZUh0bWwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VuY29kZUh0bWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZhbHNlVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZhbHNlVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZhbHNlVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmYWxzZVRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpbHRlck9wZXJhdGlvbnMoKTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyT3BlcmF0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlck9wZXJhdGlvbnModmFsdWU6IHN0cmluZyB8IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlck9wZXJhdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpbHRlclR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJUeXBlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyVHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWx0ZXJWYWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlclZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyVmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpbHRlclZhbHVlcygpOiBBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJWYWx1ZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJWYWx1ZXModmFsdWU6IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlclZhbHVlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZml4ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZml4ZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmaXhlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZml4ZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpeGVkUG9zaXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaXhlZFBvc2l0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZml4ZWRQb3NpdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaXhlZFBvc2l0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmb3JtYXQoKTogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Zvcm1hdCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvcm1hdCh2YWx1ZTogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Zvcm1hdCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZm9ybUl0ZW0oKTogRGV2RXhwcmVzcy51aS5keEZvcm1TaW1wbGVJdGVtIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb3JtSXRlbScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvcm1JdGVtKHZhbHVlOiBEZXZFeHByZXNzLnVpLmR4Rm9ybVNpbXBsZUl0ZW0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Zvcm1JdGVtJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBncm91cENlbGxUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwQ2VsbFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBDZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JvdXBDZWxsVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdyb3VwSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cEluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cEluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWFkZXJDZWxsVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWFkZXJDZWxsVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBoZWFkZXJDZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVhZGVyQ2VsbFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWFkZXJGaWx0ZXIoKTogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGRhdGFTb3VyY2U/OiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBGdW5jdGlvbiB8IEFycmF5PGFueT4sIGdyb3VwSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcsIGhlaWdodD86IG51bWJlciwgc2VhcmNoTW9kZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVhZGVyRmlsdGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVhZGVyRmlsdGVyKHZhbHVlOiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgZGF0YVNvdXJjZT86IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IEZ1bmN0aW9uIHwgQXJyYXk8YW55PiwgZ3JvdXBJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZywgaGVpZ2h0PzogbnVtYmVyLCBzZWFyY2hNb2RlPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWFkZXJGaWx0ZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhpZGluZ1ByaW9yaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGlkaW5nUHJpb3JpdHknKTtcclxuICAgIH1cclxuICAgIHNldCBoaWRpbmdQcmlvcml0eSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaWRpbmdQcmlvcml0eScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNCYW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2lzQmFuZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGlzQmFuZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXNCYW5kJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsb29rdXAoKTogeyBhbGxvd0NsZWFyaW5nPzogYm9vbGVhbiwgZGF0YVNvdXJjZT86IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IERldkV4cHJlc3MuZGF0YS5TdG9yZSB8IEZ1bmN0aW9uIHwgQXJyYXk8YW55PiwgZGlzcGxheUV4cHI/OiBGdW5jdGlvbiB8IHN0cmluZywgdmFsdWVFeHByPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvb2t1cCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvb2t1cCh2YWx1ZTogeyBhbGxvd0NsZWFyaW5nPzogYm9vbGVhbiwgZGF0YVNvdXJjZT86IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IERldkV4cHJlc3MuZGF0YS5TdG9yZSB8IEZ1bmN0aW9uIHwgQXJyYXk8YW55PiwgZGlzcGxheUV4cHI/OiBGdW5jdGlvbiB8IHN0cmluZywgdmFsdWVFeHByPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvb2t1cCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWluV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5XaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbldpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pbldpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbmFtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbmFtZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3duZXJCYW5kKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb3duZXJCYW5kJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb3duZXJCYW5kKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ293bmVyQmFuZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVuZGVyQXN5bmMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVuZGVyQXN5bmMnKTtcclxuICAgIH1cclxuICAgIHNldCByZW5kZXJBc3luYyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVuZGVyQXN5bmMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlbGVjdGVkRmlsdGVyT3BlcmF0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0ZWRGaWx0ZXJPcGVyYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RlZEZpbHRlck9wZXJhdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3RlZEZpbHRlck9wZXJhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2V0Q2VsbFZhbHVlKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZXRDZWxsVmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBzZXRDZWxsVmFsdWUodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZXRDZWxsVmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dFZGl0b3JBbHdheXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0VkaXRvckFsd2F5cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dFZGl0b3JBbHdheXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dFZGl0b3JBbHdheXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dJbkNvbHVtbkNob29zZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0luQ29sdW1uQ2hvb3NlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dJbkNvbHVtbkNob29zZXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dJbkNvbHVtbkNob29zZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dXaGVuR3JvdXBlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93V2hlbkdyb3VwZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93V2hlbkdyb3VwZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dXaGVuR3JvdXBlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc29ydEluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc29ydEluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydEluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRJbmRleCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc29ydGluZ01ldGhvZCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc29ydGluZ01ldGhvZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNvcnRpbmdNZXRob2QodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzb3J0aW5nTWV0aG9kJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzb3J0T3JkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzb3J0T3JkZXInKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0T3JkZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc29ydE9yZGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0cnVlVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RydWVUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdHJ1ZVRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndHJ1ZVRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0eXBlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0eXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWxpZGF0aW9uUnVsZXMoKTogQXJyYXk8RGV2RXhwcmVzcy51aS5SZXF1aXJlZFJ1bGUgfCBEZXZFeHByZXNzLnVpLk51bWVyaWNSdWxlIHwgRGV2RXhwcmVzcy51aS5SYW5nZVJ1bGUgfCBEZXZFeHByZXNzLnVpLlN0cmluZ0xlbmd0aFJ1bGUgfCBEZXZFeHByZXNzLnVpLkN1c3RvbVJ1bGUgfCBEZXZFeHByZXNzLnVpLkNvbXBhcmVSdWxlIHwgRGV2RXhwcmVzcy51aS5QYXR0ZXJuUnVsZSB8IERldkV4cHJlc3MudWkuRW1haWxSdWxlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvblJ1bGVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsaWRhdGlvblJ1bGVzKHZhbHVlOiBBcnJheTxEZXZFeHByZXNzLnVpLlJlcXVpcmVkUnVsZSB8IERldkV4cHJlc3MudWkuTnVtZXJpY1J1bGUgfCBEZXZFeHByZXNzLnVpLlJhbmdlUnVsZSB8IERldkV4cHJlc3MudWkuU3RyaW5nTGVuZ3RoUnVsZSB8IERldkV4cHJlc3MudWkuQ3VzdG9tUnVsZSB8IERldkV4cHJlc3MudWkuQ29tcGFyZVJ1bGUgfCBEZXZFeHByZXNzLnVpLlBhdHRlcm5SdWxlIHwgRGV2RXhwcmVzcy51aS5FbWFpbFJ1bGU+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uUnVsZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZpc2libGVJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGVJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGVJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlSW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=