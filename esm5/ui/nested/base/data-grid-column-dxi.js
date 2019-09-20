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
var DxiDataGridColumn = (function (_super) {
    __extends(DxiDataGridColumn, _super);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNvbHVtbi1keGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi91aS9uZXN0ZWQvYmFzZS9kYXRhLWdyaWQtY29sdW1uLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJckUsSUFBQTtJQUFnRCxxQ0FBc0I7Ozs7SUFDbEUsc0JBQUksd0NBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQ0QsVUFBYyxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDOzs7T0FIQTtJQUtELHNCQUFJLDJDQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDMUM7YUFDRCxVQUFpQixLQUFjO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFDOzs7T0FIQTtJQUtELHNCQUFJLDZDQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM1QzthQUNELFVBQW1CLEtBQWM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM1Qzs7O09BSEE7SUFLRCxzQkFBSSw2Q0FBYzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDNUM7YUFDRCxVQUFtQixLQUFjO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUM7OztPQUhBO0lBS0Qsc0JBQUksMENB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Q0FBQyxDQUFDO1NBQ3JDO2FBQ0QsVUFBWSxLQUFjO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7T0FIQTtJQUtELHNCQUFJLDJDQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDMUM7YUFDRCxVQUFpQixLQUFhO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFDOzs7T0FIQTtJQUtELHNCQUFJLG9DQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQzthQUNELFVBQVUsS0FBc0I7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUhBOzRCQXhjTDtFQW1CZ0Qsc0JBQXNCLEVBeWJyRSxDQUFBO0FBemJELDZCQXliQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbmltcG9ydCB7IENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHhpRGF0YUdyaWRDb2x1bW4gZXh0ZW5kcyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIHtcclxuICAgIGdldCBhbGlnbm1lbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGlnbm1lbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGlnbm1lbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxpZ25tZW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxvd0VkaXRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dFZGl0aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dFZGl0aW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0VkaXRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbG93RXhwb3J0aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93RXhwb3J0aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dFeHBvcnRpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93RXhwb3J0aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxvd0ZpbHRlcmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0ZpbHRlcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93RmlsdGVyaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0ZpbHRlcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsb3dGaXhpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dGaXhpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0ZpeGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dGaXhpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbG93R3JvdXBpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dHcm91cGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93R3JvdXBpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93R3JvdXBpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbG93SGVhZGVyRmlsdGVyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93SGVhZGVyRmlsdGVyaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dIZWFkZXJGaWx0ZXJpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93SGVhZGVyRmlsdGVyaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxvd0hpZGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0hpZGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93SGlkaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0hpZGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsb3dSZW9yZGVyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93UmVvcmRlcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93UmVvcmRlcmluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dSZW9yZGVyaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxvd1Jlc2l6aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93UmVzaXppbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd1Jlc2l6aW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd1Jlc2l6aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxvd1NlYXJjaCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd1NlYXJjaCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93U2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd1NlYXJjaCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsb3dTb3J0aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93U29ydGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93U29ydGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dTb3J0aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhdXRvRXhwYW5kR3JvdXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXV0b0V4cGFuZEdyb3VwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXV0b0V4cGFuZEdyb3VwKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhdXRvRXhwYW5kR3JvdXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJ1dHRvbnMoKTogQXJyYXk8c3RyaW5nIHwgRGV2RXhwcmVzcy51aS5keERhdGFHcmlkQ29sdW1uQnV0dG9uIHwgRGV2RXhwcmVzcy51aS5keFRyZWVMaXN0Q29sdW1uQnV0dG9uPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnV0dG9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJ1dHRvbnModmFsdWU6IEFycmF5PHN0cmluZyB8IERldkV4cHJlc3MudWkuZHhEYXRhR3JpZENvbHVtbkJ1dHRvbiB8IERldkV4cHJlc3MudWkuZHhUcmVlTGlzdENvbHVtbkJ1dHRvbj4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2J1dHRvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhbGN1bGF0ZUNlbGxWYWx1ZSgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FsY3VsYXRlQ2VsbFZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FsY3VsYXRlQ2VsbFZhbHVlKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FsY3VsYXRlQ2VsbFZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYWxjdWxhdGVEaXNwbGF5VmFsdWUoKTogRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NhbGN1bGF0ZURpc3BsYXlWYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhbGN1bGF0ZURpc3BsYXlWYWx1ZSh2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhbGN1bGF0ZURpc3BsYXlWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FsY3VsYXRlRmlsdGVyRXhwcmVzc2lvbigpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FsY3VsYXRlRmlsdGVyRXhwcmVzc2lvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhbGN1bGF0ZUZpbHRlckV4cHJlc3Npb24odmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYWxjdWxhdGVGaWx0ZXJFeHByZXNzaW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYWxjdWxhdGVHcm91cFZhbHVlKCk6IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYWxjdWxhdGVHcm91cFZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FsY3VsYXRlR3JvdXBWYWx1ZSh2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhbGN1bGF0ZUdyb3VwVmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhbGN1bGF0ZVNvcnRWYWx1ZSgpOiBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FsY3VsYXRlU29ydFZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FsY3VsYXRlU29ydFZhbHVlKHZhbHVlOiBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FsY3VsYXRlU29ydFZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FwdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhcHRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FwdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2VsbFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2VsbFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2VsbFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NlbGxUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sdW1ucygpOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4RGF0YUdyaWRDb2x1bW4gfCBzdHJpbmcgfCBEZXZFeHByZXNzLnVpLmR4VHJlZUxpc3RDb2x1bW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1ucyh2YWx1ZTogQXJyYXk8RGV2RXhwcmVzcy51aS5keERhdGFHcmlkQ29sdW1uIHwgc3RyaW5nIHwgRGV2RXhwcmVzcy51aS5keFRyZWVMaXN0Q29sdW1uPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjc3NDbGFzcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNzc0NsYXNzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Nzc0NsYXNzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXN0b21pemVUZXh0KCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplVGV4dCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZVRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRhdGFGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRhdGFUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVR5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhVHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhVHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWRpdENlbGxUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VkaXRDZWxsVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBlZGl0Q2VsbFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VkaXRDZWxsVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVkaXRvck9wdGlvbnMoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlZGl0b3JPcHRpb25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWRpdG9yT3B0aW9ucyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlZGl0b3JPcHRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbmNvZGVIdG1sKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VuY29kZUh0bWwnKTtcclxuICAgIH1cclxuICAgIHNldCBlbmNvZGVIdG1sKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbmNvZGVIdG1sJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmYWxzZVRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmYWxzZVRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBmYWxzZVRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmFsc2VUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWx0ZXJPcGVyYXRpb25zKCk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlck9wZXJhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJPcGVyYXRpb25zKHZhbHVlOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJPcGVyYXRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWx0ZXJUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyVHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlclR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyVHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmlsdGVyVmFsdWUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJWYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlclZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlclZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWx0ZXJWYWx1ZXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyVmFsdWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyVmFsdWVzKHZhbHVlOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJWYWx1ZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpeGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpeGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZml4ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpeGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaXhlZFBvc2l0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZml4ZWRQb3NpdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpeGVkUG9zaXRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZml4ZWRQb3NpdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZm9ybWF0KCk6IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb3JtYXQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb3JtYXQodmFsdWU6IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb3JtYXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvcm1JdGVtKCk6IERldkV4cHJlc3MudWkuZHhGb3JtU2ltcGxlSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9ybUl0ZW0nKTtcclxuICAgIH1cclxuICAgIHNldCBmb3JtSXRlbSh2YWx1ZTogRGV2RXhwcmVzcy51aS5keEZvcm1TaW1wbGVJdGVtKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb3JtSXRlbScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ3JvdXBDZWxsVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cENlbGxUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwQ2VsbFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwQ2VsbFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBncm91cEluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JvdXBJbmRleCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVhZGVyQ2VsbFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVhZGVyQ2VsbFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVhZGVyQ2VsbFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlYWRlckNlbGxUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVhZGVyRmlsdGVyKCk6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBkYXRhU291cmNlPzogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgRnVuY3Rpb24gfCBBcnJheTxhbnk+LCBncm91cEludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaE1vZGU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlYWRlckZpbHRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlYWRlckZpbHRlcih2YWx1ZTogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGRhdGFTb3VyY2U/OiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBGdW5jdGlvbiB8IEFycmF5PGFueT4sIGdyb3VwSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcsIGhlaWdodD86IG51bWJlciwgc2VhcmNoTW9kZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVhZGVyRmlsdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoaWRpbmdQcmlvcml0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpZGluZ1ByaW9yaXR5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGlkaW5nUHJpb3JpdHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGlkaW5nUHJpb3JpdHknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzQmFuZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpc0JhbmQnKTtcclxuICAgIH1cclxuICAgIHNldCBpc0JhbmQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2lzQmFuZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbG9va3VwKCk6IHsgYWxsb3dDbGVhcmluZz86IGJvb2xlYW4sIGRhdGFTb3VyY2U/OiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBEZXZFeHByZXNzLmRhdGEuU3RvcmUgfCBGdW5jdGlvbiB8IEFycmF5PGFueT4sIGRpc3BsYXlFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcsIHZhbHVlRXhwcj86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb29rdXAnKTtcclxuICAgIH1cclxuICAgIHNldCBsb29rdXAodmFsdWU6IHsgYWxsb3dDbGVhcmluZz86IGJvb2xlYW4sIGRhdGFTb3VyY2U/OiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBEZXZFeHByZXNzLmRhdGEuU3RvcmUgfCBGdW5jdGlvbiB8IEFycmF5PGFueT4sIGRpc3BsYXlFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcsIHZhbHVlRXhwcj86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb29rdXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1pbldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWluV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5XaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5XaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ25hbWUnKTtcclxuICAgIH1cclxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ25hbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bmVyQmFuZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ293bmVyQmFuZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG93bmVyQmFuZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvd25lckJhbmQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJlbmRlckFzeW5jKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlbmRlckFzeW5jJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVuZGVyQXN5bmModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlbmRlckFzeW5jJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RlZEZpbHRlck9wZXJhdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdGVkRmlsdGVyT3BlcmF0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0ZWRGaWx0ZXJPcGVyYXRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0ZWRGaWx0ZXJPcGVyYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNldENlbGxWYWx1ZSgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2V0Q2VsbFZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0Q2VsbFZhbHVlKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2V0Q2VsbFZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93RWRpdG9yQWx3YXlzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dFZGl0b3JBbHdheXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93RWRpdG9yQWx3YXlzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93RWRpdG9yQWx3YXlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93SW5Db2x1bW5DaG9vc2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dJbkNvbHVtbkNob29zZXInKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93SW5Db2x1bW5DaG9vc2VyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93SW5Db2x1bW5DaG9vc2VyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93V2hlbkdyb3VwZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd1doZW5Hcm91cGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd1doZW5Hcm91cGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93V2hlbkdyb3VwZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvcnRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNvcnRJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzb3J0SW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvcnRpbmdNZXRob2QoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRpbmdNZXRob2QnKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0aW5nTWV0aG9kKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc29ydGluZ01ldGhvZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc29ydE9yZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc29ydE9yZGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydE9yZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRPcmRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHJ1ZVRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0cnVlVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRydWVUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RydWVUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsaWRhdGlvblJ1bGVzKCk6IEFycmF5PERldkV4cHJlc3MudWkuUmVxdWlyZWRSdWxlIHwgRGV2RXhwcmVzcy51aS5OdW1lcmljUnVsZSB8IERldkV4cHJlc3MudWkuUmFuZ2VSdWxlIHwgRGV2RXhwcmVzcy51aS5TdHJpbmdMZW5ndGhSdWxlIHwgRGV2RXhwcmVzcy51aS5DdXN0b21SdWxlIHwgRGV2RXhwcmVzcy51aS5Db21wYXJlUnVsZSB8IERldkV4cHJlc3MudWkuUGF0dGVyblJ1bGUgfCBEZXZFeHByZXNzLnVpLkVtYWlsUnVsZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25SdWxlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25SdWxlcyh2YWx1ZTogQXJyYXk8RGV2RXhwcmVzcy51aS5SZXF1aXJlZFJ1bGUgfCBEZXZFeHByZXNzLnVpLk51bWVyaWNSdWxlIHwgRGV2RXhwcmVzcy51aS5SYW5nZVJ1bGUgfCBEZXZFeHByZXNzLnVpLlN0cmluZ0xlbmd0aFJ1bGUgfCBEZXZFeHByZXNzLnVpLkN1c3RvbVJ1bGUgfCBEZXZFeHByZXNzLnVpLkNvbXBhcmVSdWxlIHwgRGV2RXhwcmVzcy51aS5QYXR0ZXJuUnVsZSB8IERldkV4cHJlc3MudWkuRW1haWxSdWxlPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsaWRhdGlvblJ1bGVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2aXNpYmxlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlSW5kZXgnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZUluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19