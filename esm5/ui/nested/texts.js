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
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoTextsComponent = (function (_super) {
    __extends(DxoTextsComponent, _super);
    function DxoTextsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoTextsComponent.prototype, "fix", {
        get: function () {
            return this._getOption('fix');
        },
        set: function (value) {
            this._setOption('fix', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "leftPosition", {
        get: function () {
            return this._getOption('leftPosition');
        },
        set: function (value) {
            this._setOption('leftPosition', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "rightPosition", {
        get: function () {
            return this._getOption('rightPosition');
        },
        set: function (value) {
            this._setOption('rightPosition', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "unfix", {
        get: function () {
            return this._getOption('unfix');
        },
        set: function (value) {
            this._setOption('unfix', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "addRow", {
        get: function () {
            return this._getOption('addRow');
        },
        set: function (value) {
            this._setOption('addRow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "cancelAllChanges", {
        get: function () {
            return this._getOption('cancelAllChanges');
        },
        set: function (value) {
            this._setOption('cancelAllChanges', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "cancelRowChanges", {
        get: function () {
            return this._getOption('cancelRowChanges');
        },
        set: function (value) {
            this._setOption('cancelRowChanges', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "confirmDeleteMessage", {
        get: function () {
            return this._getOption('confirmDeleteMessage');
        },
        set: function (value) {
            this._setOption('confirmDeleteMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "confirmDeleteTitle", {
        get: function () {
            return this._getOption('confirmDeleteTitle');
        },
        set: function (value) {
            this._setOption('confirmDeleteTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "deleteRow", {
        get: function () {
            return this._getOption('deleteRow');
        },
        set: function (value) {
            this._setOption('deleteRow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "editRow", {
        get: function () {
            return this._getOption('editRow');
        },
        set: function (value) {
            this._setOption('editRow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "saveAllChanges", {
        get: function () {
            return this._getOption('saveAllChanges');
        },
        set: function (value) {
            this._setOption('saveAllChanges', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "saveRowChanges", {
        get: function () {
            return this._getOption('saveRowChanges');
        },
        set: function (value) {
            this._setOption('saveRowChanges', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "undeleteRow", {
        get: function () {
            return this._getOption('undeleteRow');
        },
        set: function (value) {
            this._setOption('undeleteRow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "validationCancelChanges", {
        get: function () {
            return this._getOption('validationCancelChanges');
        },
        set: function (value) {
            this._setOption('validationCancelChanges', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "exportAll", {
        get: function () {
            return this._getOption('exportAll');
        },
        set: function (value) {
            this._setOption('exportAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "exportSelectedRows", {
        get: function () {
            return this._getOption('exportSelectedRows');
        },
        set: function (value) {
            this._setOption('exportSelectedRows', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "exportTo", {
        get: function () {
            return this._getOption('exportTo');
        },
        set: function (value) {
            this._setOption('exportTo', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "clearFilter", {
        get: function () {
            return this._getOption('clearFilter');
        },
        set: function (value) {
            this._setOption('clearFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "createFilter", {
        get: function () {
            return this._getOption('createFilter');
        },
        set: function (value) {
            this._setOption('createFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "filterEnabledHint", {
        get: function () {
            return this._getOption('filterEnabledHint');
        },
        set: function (value) {
            this._setOption('filterEnabledHint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "groupByThisColumn", {
        get: function () {
            return this._getOption('groupByThisColumn');
        },
        set: function (value) {
            this._setOption('groupByThisColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "groupContinuedMessage", {
        get: function () {
            return this._getOption('groupContinuedMessage');
        },
        set: function (value) {
            this._setOption('groupContinuedMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "groupContinuesMessage", {
        get: function () {
            return this._getOption('groupContinuesMessage');
        },
        set: function (value) {
            this._setOption('groupContinuesMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "ungroup", {
        get: function () {
            return this._getOption('ungroup');
        },
        set: function (value) {
            this._setOption('ungroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "ungroupAll", {
        get: function () {
            return this._getOption('ungroupAll');
        },
        set: function (value) {
            this._setOption('ungroupAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "cancel", {
        get: function () {
            return this._getOption('cancel');
        },
        set: function (value) {
            this._setOption('cancel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "emptyValue", {
        get: function () {
            return this._getOption('emptyValue');
        },
        set: function (value) {
            this._setOption('emptyValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "ok", {
        get: function () {
            return this._getOption('ok');
        },
        set: function (value) {
            this._setOption('ok', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "avg", {
        get: function () {
            return this._getOption('avg');
        },
        set: function (value) {
            this._setOption('avg', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "avgOtherColumn", {
        get: function () {
            return this._getOption('avgOtherColumn');
        },
        set: function (value) {
            this._setOption('avgOtherColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "count", {
        get: function () {
            return this._getOption('count');
        },
        set: function (value) {
            this._setOption('count', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "maxOtherColumn", {
        get: function () {
            return this._getOption('maxOtherColumn');
        },
        set: function (value) {
            this._setOption('maxOtherColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "minOtherColumn", {
        get: function () {
            return this._getOption('minOtherColumn');
        },
        set: function (value) {
            this._setOption('minOtherColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "sum", {
        get: function () {
            return this._getOption('sum');
        },
        set: function (value) {
            this._setOption('sum', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "sumOtherColumn", {
        get: function () {
            return this._getOption('sumOtherColumn');
        },
        set: function (value) {
            this._setOption('sumOtherColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "allFields", {
        get: function () {
            return this._getOption('allFields');
        },
        set: function (value) {
            this._setOption('allFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "columnFields", {
        get: function () {
            return this._getOption('columnFields');
        },
        set: function (value) {
            this._setOption('columnFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "dataFields", {
        get: function () {
            return this._getOption('dataFields');
        },
        set: function (value) {
            this._setOption('dataFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "filterFields", {
        get: function () {
            return this._getOption('filterFields');
        },
        set: function (value) {
            this._setOption('filterFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "rowFields", {
        get: function () {
            return this._getOption('rowFields');
        },
        set: function (value) {
            this._setOption('rowFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "columnFieldArea", {
        get: function () {
            return this._getOption('columnFieldArea');
        },
        set: function (value) {
            this._setOption('columnFieldArea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "dataFieldArea", {
        get: function () {
            return this._getOption('dataFieldArea');
        },
        set: function (value) {
            this._setOption('dataFieldArea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "filterFieldArea", {
        get: function () {
            return this._getOption('filterFieldArea');
        },
        set: function (value) {
            this._setOption('filterFieldArea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "rowFieldArea", {
        get: function () {
            return this._getOption('rowFieldArea');
        },
        set: function (value) {
            this._setOption('rowFieldArea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "collapseAll", {
        get: function () {
            return this._getOption('collapseAll');
        },
        set: function (value) {
            this._setOption('collapseAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "dataNotAvailable", {
        get: function () {
            return this._getOption('dataNotAvailable');
        },
        set: function (value) {
            this._setOption('dataNotAvailable', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "expandAll", {
        get: function () {
            return this._getOption('expandAll');
        },
        set: function (value) {
            this._setOption('expandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "exportToExcel", {
        get: function () {
            return this._getOption('exportToExcel');
        },
        set: function (value) {
            this._setOption('exportToExcel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "grandTotal", {
        get: function () {
            return this._getOption('grandTotal');
        },
        set: function (value) {
            this._setOption('grandTotal', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "noData", {
        get: function () {
            return this._getOption('noData');
        },
        set: function (value) {
            this._setOption('noData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "removeAllSorting", {
        get: function () {
            return this._getOption('removeAllSorting');
        },
        set: function (value) {
            this._setOption('removeAllSorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "showFieldChooser", {
        get: function () {
            return this._getOption('showFieldChooser');
        },
        set: function (value) {
            this._setOption('showFieldChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "sortColumnBySummary", {
        get: function () {
            return this._getOption('sortColumnBySummary');
        },
        set: function (value) {
            this._setOption('sortColumnBySummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "sortRowBySummary", {
        get: function () {
            return this._getOption('sortRowBySummary');
        },
        set: function (value) {
            this._setOption('sortRowBySummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "total", {
        get: function () {
            return this._getOption('total');
        },
        set: function (value) {
            this._setOption('total', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "addRowToNode", {
        get: function () {
            return this._getOption('addRowToNode');
        },
        set: function (value) {
            this._setOption('addRowToNode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTextsComponent.prototype, "_optionPath", {
        get: function () {
            return 'texts';
        },
        enumerable: true,
        configurable: true
    });
    DxoTextsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-texts',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoTextsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoTextsComponent.propDecorators = {
        "fix": [{ type: Input },],
        "leftPosition": [{ type: Input },],
        "rightPosition": [{ type: Input },],
        "unfix": [{ type: Input },],
        "addRow": [{ type: Input },],
        "cancelAllChanges": [{ type: Input },],
        "cancelRowChanges": [{ type: Input },],
        "confirmDeleteMessage": [{ type: Input },],
        "confirmDeleteTitle": [{ type: Input },],
        "deleteRow": [{ type: Input },],
        "editRow": [{ type: Input },],
        "saveAllChanges": [{ type: Input },],
        "saveRowChanges": [{ type: Input },],
        "undeleteRow": [{ type: Input },],
        "validationCancelChanges": [{ type: Input },],
        "exportAll": [{ type: Input },],
        "exportSelectedRows": [{ type: Input },],
        "exportTo": [{ type: Input },],
        "clearFilter": [{ type: Input },],
        "createFilter": [{ type: Input },],
        "filterEnabledHint": [{ type: Input },],
        "groupByThisColumn": [{ type: Input },],
        "groupContinuedMessage": [{ type: Input },],
        "groupContinuesMessage": [{ type: Input },],
        "ungroup": [{ type: Input },],
        "ungroupAll": [{ type: Input },],
        "cancel": [{ type: Input },],
        "emptyValue": [{ type: Input },],
        "ok": [{ type: Input },],
        "avg": [{ type: Input },],
        "avgOtherColumn": [{ type: Input },],
        "count": [{ type: Input },],
        "max": [{ type: Input },],
        "maxOtherColumn": [{ type: Input },],
        "min": [{ type: Input },],
        "minOtherColumn": [{ type: Input },],
        "sum": [{ type: Input },],
        "sumOtherColumn": [{ type: Input },],
        "allFields": [{ type: Input },],
        "columnFields": [{ type: Input },],
        "dataFields": [{ type: Input },],
        "filterFields": [{ type: Input },],
        "rowFields": [{ type: Input },],
        "columnFieldArea": [{ type: Input },],
        "dataFieldArea": [{ type: Input },],
        "filterFieldArea": [{ type: Input },],
        "rowFieldArea": [{ type: Input },],
        "collapseAll": [{ type: Input },],
        "dataNotAvailable": [{ type: Input },],
        "expandAll": [{ type: Input },],
        "exportToExcel": [{ type: Input },],
        "grandTotal": [{ type: Input },],
        "noData": [{ type: Input },],
        "removeAllSorting": [{ type: Input },],
        "showFieldChooser": [{ type: Input },],
        "sortColumnBySummary": [{ type: Input },],
        "sortRowBySummary": [{ type: Input },],
        "total": [{ type: Input },],
        "addRowToNode": [{ type: Input },],
    };
    return DxoTextsComponent;
}(NestedOption));
export { DxoTextsComponent };
var DxoTextsModule = (function () {
    function DxoTextsModule() {
    }
    DxoTextsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoTextsComponent
                    ],
                    exports: [
                        DxoTextsComponent
                    ],
                },] },
    ];
    return DxoTextsModule;
}());
export { DxoTextsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvdGV4dHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBU2pCLHFDQUFZO0lBK2QvQywyQkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDswQkFsZUcsa0NBQUc7O1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7O2FBRWxDLFVBQVEsS0FBYTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqQzs7OzswQkFHRywyQ0FBWTs7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7YUFFM0MsVUFBaUIsS0FBYTtZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQzs7OzswQkFHRyw0Q0FBYTs7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7YUFFNUMsVUFBa0IsS0FBYTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENB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QkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7cUJBQ2xCO2lCQUNGOzt5QkFyaEJEOztTQXNoQmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tdGV4dHMnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1RleHRzQ29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZml4KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZml4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZml4KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpeCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGxlZnRQb3NpdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xlZnRQb3NpdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxlZnRQb3NpdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsZWZ0UG9zaXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCByaWdodFBvc2l0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmlnaHRQb3NpdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJpZ2h0UG9zaXRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmlnaHRQb3NpdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHVuZml4KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndW5maXgnKTtcclxuICAgIH1cclxuICAgIHNldCB1bmZpeCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd1bmZpeCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFkZFJvdygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FkZFJvdycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFkZFJvdyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhZGRSb3cnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjYW5jZWxBbGxDaGFuZ2VzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FuY2VsQWxsQ2hhbmdlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhbmNlbEFsbENoYW5nZXModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FuY2VsQWxsQ2hhbmdlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNhbmNlbFJvd0NoYW5nZXMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYW5jZWxSb3dDaGFuZ2VzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FuY2VsUm93Q2hhbmdlcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYW5jZWxSb3dDaGFuZ2VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29uZmlybURlbGV0ZU1lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb25maXJtRGVsZXRlTWVzc2FnZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbmZpcm1EZWxldGVNZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbmZpcm1EZWxldGVNZXNzYWdlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29uZmlybURlbGV0ZVRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29uZmlybURlbGV0ZVRpdGxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29uZmlybURlbGV0ZVRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbmZpcm1EZWxldGVUaXRsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRlbGV0ZVJvdygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RlbGV0ZVJvdycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRlbGV0ZVJvdyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkZWxldGVSb3cnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlZGl0Um93KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWRpdFJvdycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVkaXRSb3codmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWRpdFJvdycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNhdmVBbGxDaGFuZ2VzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2F2ZUFsbENoYW5nZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzYXZlQWxsQ2hhbmdlcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzYXZlQWxsQ2hhbmdlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNhdmVSb3dDaGFuZ2VzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2F2ZVJvd0NoYW5nZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzYXZlUm93Q2hhbmdlcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzYXZlUm93Q2hhbmdlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHVuZGVsZXRlUm93KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndW5kZWxldGVSb3cnKTtcclxuICAgIH1cclxuICAgIHNldCB1bmRlbGV0ZVJvdyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd1bmRlbGV0ZVJvdycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25DYW5jZWxDaGFuZ2VzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvbkNhbmNlbENoYW5nZXMnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGV4cG9ydEFsbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2V4cG9ydEFsbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4cG9ydEFsbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdleHBvcnRBbGwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBleHBvcnRTZWxlY3RlZFJvd3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdleHBvcnRTZWxlY3RlZFJvd3MnKTtcclxuICAgIH1cclxuICAgIHNldCBleHBvcnRTZWxlY3RlZFJvd3ModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwb3J0U2VsZWN0ZWRSb3dzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXhwb3J0VG8oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdleHBvcnRUbycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4cG9ydFRvKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2V4cG9ydFRvJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2xlYXJGaWx0ZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjbGVhckZpbHRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsZWFyRmlsdGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NsZWFyRmlsdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3JlYXRlRmlsdGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3JlYXRlRmlsdGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3JlYXRlRmlsdGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NyZWF0ZUZpbHRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlckVuYWJsZWRIaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyRW5hYmxlZEhpbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJFbmFibGVkSGludCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJFbmFibGVkSGludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwQnlUaGlzQ29sdW1uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBCeVRoaXNDb2x1bW4nKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cEJ5VGhpc0NvbHVtbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cEJ5VGhpc0NvbHVtbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwQ29udGludWVkTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwQ29udGludWVkTWVzc2FnZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwQ29udGludWVkTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cENvbnRpbnVlZE1lc3NhZ2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBncm91cENvbnRpbnVlc01lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cENvbnRpbnVlc01lc3NhZ2UnKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cENvbnRpbnVlc01lc3NhZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JvdXBDb250aW51ZXNNZXNzYWdlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdW5ncm91cCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3VuZ3JvdXAnKTtcclxuICAgIH1cclxuICAgIHNldCB1bmdyb3VwKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3VuZ3JvdXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB1bmdyb3VwQWxsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndW5ncm91cEFsbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHVuZ3JvdXBBbGwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndW5ncm91cEFsbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNhbmNlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NhbmNlbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhbmNlbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYW5jZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbXB0eVZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW1wdHlWYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVtcHR5VmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW1wdHlWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9rKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb2snKTtcclxuICAgIH1cclxuICAgIHNldCBvayh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGF2ZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2F2ZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGF2Zyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhdmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhdmdPdGhlckNvbHVtbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2F2Z090aGVyQ29sdW1uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXZnT3RoZXJDb2x1bW4odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXZnT3RoZXJDb2x1bW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb3VudCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvdW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY291bnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY291bnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXgoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXgnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXgodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4T3RoZXJDb2x1bW4oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhPdGhlckNvbHVtbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heE90aGVyQ29sdW1uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heE90aGVyQ29sdW1uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWluKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWluJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbk90aGVyQ29sdW1uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWluT3RoZXJDb2x1bW4nKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5PdGhlckNvbHVtbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5PdGhlckNvbHVtbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN1bSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N1bScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN1bSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdW0nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdW1PdGhlckNvbHVtbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N1bU90aGVyQ29sdW1uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3VtT3RoZXJDb2x1bW4odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3VtT3RoZXJDb2x1bW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxGaWVsZHMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxGaWVsZHMnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxGaWVsZHModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsRmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sdW1uRmllbGRzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1uRmllbGRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sdW1uRmllbGRzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbHVtbkZpZWxkcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFGaWVsZHMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhRmllbGRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YUZpZWxkcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhRmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyRmllbGRzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyRmllbGRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyRmllbGRzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlckZpZWxkcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJvd0ZpZWxkcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jvd0ZpZWxkcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJvd0ZpZWxkcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyb3dGaWVsZHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5GaWVsZEFyZWEoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5GaWVsZEFyZWEnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5GaWVsZEFyZWEodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uRmllbGRBcmVhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YUZpZWxkQXJlYSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFGaWVsZEFyZWEnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhRmllbGRBcmVhKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFGaWVsZEFyZWEnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJGaWVsZEFyZWEoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJGaWVsZEFyZWEnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJGaWVsZEFyZWEodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyRmllbGRBcmVhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcm93RmllbGRBcmVhKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncm93RmllbGRBcmVhJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm93RmllbGRBcmVhKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Jvd0ZpZWxkQXJlYScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbGxhcHNlQWxsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sbGFwc2VBbGwnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2xsYXBzZUFsbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2xsYXBzZUFsbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFOb3RBdmFpbGFibGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhTm90QXZhaWxhYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YU5vdEF2YWlsYWJsZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhTm90QXZhaWxhYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXhwYW5kQWxsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwYW5kQWxsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwYW5kQWxsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2V4cGFuZEFsbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGV4cG9ydFRvRXhjZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdleHBvcnRUb0V4Y2VsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwb3J0VG9FeGNlbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdleHBvcnRUb0V4Y2VsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JhbmRUb3RhbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyYW5kVG90YWwnKTtcclxuICAgIH1cclxuICAgIHNldCBncmFuZFRvdGFsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyYW5kVG90YWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBub0RhdGEoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdub0RhdGEnKTtcclxuICAgIH1cclxuICAgIHNldCBub0RhdGEodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbm9EYXRhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVtb3ZlQWxsU29ydGluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlbW92ZUFsbFNvcnRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCByZW1vdmVBbGxTb3J0aW5nKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlbW92ZUFsbFNvcnRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93RmllbGRDaG9vc2VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0ZpZWxkQ2hvb3NlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dGaWVsZENob29zZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0ZpZWxkQ2hvb3NlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNvcnRDb2x1bW5CeVN1bW1hcnkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzb3J0Q29sdW1uQnlTdW1tYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydENvbHVtbkJ5U3VtbWFyeSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzb3J0Q29sdW1uQnlTdW1tYXJ5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc29ydFJvd0J5U3VtbWFyeSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRSb3dCeVN1bW1hcnknKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0Um93QnlTdW1tYXJ5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRSb3dCeVN1bW1hcnknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0b3RhbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RvdGFsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdG90YWwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndG90YWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhZGRSb3dUb05vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhZGRSb3dUb05vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBhZGRSb3dUb05vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWRkUm93VG9Ob2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAndGV4dHMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b1RleHRzQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9UZXh0c0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9UZXh0c01vZHVsZSB7IH1cclxuIl19