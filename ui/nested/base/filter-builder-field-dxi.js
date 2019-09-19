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
 * Build date: Thu Sep 19 2019
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
//# sourceMappingURL=filter-builder-field-dxi.js.map