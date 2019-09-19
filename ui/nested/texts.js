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
//# sourceMappingURL=texts.js.map