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
}(nested_option_1.CollectionNestedOption));
exports.DxiDataGridColumn = DxiDataGridColumn;
//# sourceMappingURL=data-grid-column-dxi.js.map