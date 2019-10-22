/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
var DxoTextsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoTextsComponent, _super);
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
    DxoTextsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "fix", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "leftPosition", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "rightPosition", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "unfix", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "addRow", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "cancelAllChanges", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "cancelRowChanges", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "confirmDeleteMessage", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "confirmDeleteTitle", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "deleteRow", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "editRow", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "saveAllChanges", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "saveRowChanges", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "undeleteRow", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "validationCancelChanges", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "exportAll", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "exportSelectedRows", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "exportTo", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "clearFilter", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "createFilter", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "filterEnabledHint", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "groupByThisColumn", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "groupContinuedMessage", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "groupContinuesMessage", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "ungroup", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "ungroupAll", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "cancel", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "emptyValue", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "ok", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "avg", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "avgOtherColumn", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "count", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "max", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "maxOtherColumn", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "min", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "minOtherColumn", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "sum", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "sumOtherColumn", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "allFields", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "columnFields", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "dataFields", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "filterFields", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "rowFields", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "columnFieldArea", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "dataFieldArea", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "filterFieldArea", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "rowFieldArea", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "collapseAll", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "dataNotAvailable", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "expandAll", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "exportToExcel", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "grandTotal", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "noData", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "removeAllSorting", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "showFieldChooser", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "sortColumnBySummary", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "sortRowBySummary", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "total", null);
    tslib_1.__decorate([
        Input()
    ], DxoTextsComponent.prototype, "addRowToNode", null);
    DxoTextsComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-texts',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxoTextsComponent);
    return DxoTextsComponent;
}(NestedOption));
export { DxoTextsComponent };
var DxoTextsModule = /** @class */ (function () {
    function DxoTextsModule() {
    }
    DxoTextsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoTextsComponent
            ],
            exports: [
                DxoTextsComponent
            ],
        })
    ], DxoTextsModule);
    return DxoTextsModule;
}());
export { DxoTextsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsidGV4dHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBR3BDLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFTdkQ7SUFBdUMsNkNBQVk7SUErZC9DLDJCQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFsZUQsc0JBQUksa0NBQUc7YUFBUDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDO2FBQ0QsVUFBUSxLQUFhO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksMkNBQVk7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsQ0FBQzthQUNELFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw0Q0FBYTthQUFqQjtZQUNJLE9B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LEtBQUssRUFBRTtzREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOytEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7cURBR1A7SUFNRDtRQURDLEtBQUssRUFBRTt3REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO3lEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OERBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs4REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO2tFQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7a0VBR1A7SUFNRDtRQURDLEtBQUssRUFBRTtvREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO3VEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7bURBR1A7SUFNRDtRQURDLEtBQUssRUFBRTt1REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOytDQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7Z0RBR1A7SUFNRDtRQURDLEtBQUssRUFBRTsyREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO2tEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7Z0RBR1A7SUFNRDtRQURDLEtBQUssRUFBRTsyREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO2dEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7MkRBR1A7SUFNRDtRQURDLEtBQUssRUFBRTtnREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzJEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7c0RBR1A7SUFNRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO3VEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFNRDtRQURDLEtBQUssRUFBRTtzREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzREQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7MERBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs0REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO3lEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7d0RBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs2REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7MERBR1A7SUFNRDtRQURDLEtBQUssRUFBRTt1REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO21EQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7NkRBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs2REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO2dFQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7NkRBR1A7SUFNRDtRQURDLEtBQUssRUFBRTtrREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO3lEQUdQO0lBcGRRLGlCQUFpQjtRQU43QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQURwQixFQUFFO1NBRWQsQ0FBQztRQWdlZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BaGVOLGlCQUFpQixDQXNlN0I7SUFBRCx3QkFBQztDQUFBLEFBdGVELENBQXVDLFlBQVksR0FzZWxEO1NBdGVZLGlCQUFpQjtBQWdmOUI7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFSMUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGlCQUFpQjthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxpQkFBaUI7YUFDbEI7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by10ZXh0cycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvVGV4dHNDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaXgoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaXgnKTtcclxuICAgIH1cclxuICAgIHNldCBmaXgodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZml4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGVmdFBvc2l0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbGVmdFBvc2l0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGVmdFBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xlZnRQb3NpdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJpZ2h0UG9zaXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyaWdodFBvc2l0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmlnaHRQb3NpdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyaWdodFBvc2l0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdW5maXgoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd1bmZpeCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHVuZml4KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3VuZml4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWRkUm93KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWRkUm93Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRkUm93KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FkZFJvdycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNhbmNlbEFsbENoYW5nZXMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYW5jZWxBbGxDaGFuZ2VzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FuY2VsQWxsQ2hhbmdlcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYW5jZWxBbGxDaGFuZ2VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2FuY2VsUm93Q2hhbmdlcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NhbmNlbFJvd0NoYW5nZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBjYW5jZWxSb3dDaGFuZ2VzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhbmNlbFJvd0NoYW5nZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb25maXJtRGVsZXRlTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbmZpcm1EZWxldGVNZXNzYWdlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29uZmlybURlbGV0ZU1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29uZmlybURlbGV0ZU1lc3NhZ2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb25maXJtRGVsZXRlVGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb25maXJtRGVsZXRlVGl0bGUnKTtcclxuICAgIH1cclxuICAgIHNldCBjb25maXJtRGVsZXRlVGl0bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29uZmlybURlbGV0ZVRpdGxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGVsZXRlUm93KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGVsZXRlUm93Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVsZXRlUm93KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RlbGV0ZVJvdycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVkaXRSb3coKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlZGl0Um93Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWRpdFJvdyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlZGl0Um93JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2F2ZUFsbENoYW5nZXMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzYXZlQWxsQ2hhbmdlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNhdmVBbGxDaGFuZ2VzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NhdmVBbGxDaGFuZ2VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2F2ZVJvd0NoYW5nZXMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzYXZlUm93Q2hhbmdlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNhdmVSb3dDaGFuZ2VzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NhdmVSb3dDaGFuZ2VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdW5kZWxldGVSb3coKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd1bmRlbGV0ZVJvdycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHVuZGVsZXRlUm93KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3VuZGVsZXRlUm93JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsaWRhdGlvbkNhbmNlbENoYW5nZXMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25DYW5jZWxDaGFuZ2VzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbGlkYXRpb25DYW5jZWxDaGFuZ2VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXhwb3J0QWxsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwb3J0QWxsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwb3J0QWxsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2V4cG9ydEFsbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGV4cG9ydFNlbGVjdGVkUm93cygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2V4cG9ydFNlbGVjdGVkUm93cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4cG9ydFNlbGVjdGVkUm93cyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdleHBvcnRTZWxlY3RlZFJvd3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBleHBvcnRUbygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2V4cG9ydFRvJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwb3J0VG8odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwb3J0VG8nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjbGVhckZpbHRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NsZWFyRmlsdGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2xlYXJGaWx0ZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2xlYXJGaWx0ZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjcmVhdGVGaWx0ZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjcmVhdGVGaWx0ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBjcmVhdGVGaWx0ZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3JlYXRlRmlsdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlsdGVyRW5hYmxlZEhpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJFbmFibGVkSGludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlckVuYWJsZWRIaW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpbHRlckVuYWJsZWRIaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JvdXBCeVRoaXNDb2x1bW4oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cEJ5VGhpc0NvbHVtbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwQnlUaGlzQ29sdW1uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwQnlUaGlzQ29sdW1uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JvdXBDb250aW51ZWRNZXNzYWdlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBDb250aW51ZWRNZXNzYWdlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBDb250aW51ZWRNZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwQ29udGludWVkTWVzc2FnZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwQ29udGludWVzTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwQ29udGludWVzTWVzc2FnZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwQ29udGludWVzTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cENvbnRpbnVlc01lc3NhZ2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB1bmdyb3VwKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndW5ncm91cCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHVuZ3JvdXAodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndW5ncm91cCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHVuZ3JvdXBBbGwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd1bmdyb3VwQWxsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdW5ncm91cEFsbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd1bmdyb3VwQWxsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2FuY2VsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FuY2VsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhbmNlbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVtcHR5VmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbXB0eVZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZW1wdHlWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbXB0eVZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgb2soKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9rKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29rJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXZnKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXZnJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXZnKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2F2ZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGF2Z090aGVyQ29sdW1uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXZnT3RoZXJDb2x1bW4nKTtcclxuICAgIH1cclxuICAgIHNldCBhdmdPdGhlckNvbHVtbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhdmdPdGhlckNvbHVtbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvdW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY291bnQnKTtcclxuICAgIH1cclxuICAgIHNldCBjb3VudCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb3VudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhPdGhlckNvbHVtbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heE90aGVyQ29sdW1uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWF4T3RoZXJDb2x1bW4odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4T3RoZXJDb2x1bW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW4oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW4nKTtcclxuICAgIH1cclxuICAgIHNldCBtaW4odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWluJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWluT3RoZXJDb2x1bW4oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5PdGhlckNvbHVtbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbk90aGVyQ29sdW1uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pbk90aGVyQ29sdW1uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3VtKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3VtJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3VtKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N1bScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN1bU90aGVyQ29sdW1uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3VtT3RoZXJDb2x1bW4nKTtcclxuICAgIH1cclxuICAgIHNldCBzdW1PdGhlckNvbHVtbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdW1PdGhlckNvbHVtbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbEZpZWxkcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbEZpZWxkcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbEZpZWxkcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxGaWVsZHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2x1bW5GaWVsZHMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2x1bW5GaWVsZHMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5GaWVsZHModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sdW1uRmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YUZpZWxkcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFGaWVsZHMnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhRmllbGRzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFGaWVsZHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJGaWVsZHMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWx0ZXJGaWVsZHMnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWx0ZXJGaWVsZHModmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsdGVyRmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcm93RmllbGRzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncm93RmllbGRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm93RmllbGRzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Jvd0ZpZWxkcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbkZpZWxkQXJlYSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbkZpZWxkQXJlYScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbkZpZWxkQXJlYSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW5GaWVsZEFyZWEnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhRmllbGRBcmVhKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YUZpZWxkQXJlYScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFGaWVsZEFyZWEodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YUZpZWxkQXJlYScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpbHRlckZpZWxkQXJlYSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbHRlckZpZWxkQXJlYScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpbHRlckZpZWxkQXJlYSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJGaWVsZEFyZWEnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCByb3dGaWVsZEFyZWEoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyb3dGaWVsZEFyZWEnKTtcclxuICAgIH1cclxuICAgIHNldCByb3dGaWVsZEFyZWEodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncm93RmllbGRBcmVhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sbGFwc2VBbGwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2xsYXBzZUFsbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbGxhcHNlQWxsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbGxhcHNlQWxsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YU5vdEF2YWlsYWJsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFOb3RBdmFpbGFibGUnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhTm90QXZhaWxhYmxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFOb3RBdmFpbGFibGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBleHBhbmRBbGwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdleHBhbmRBbGwnKTtcclxuICAgIH1cclxuICAgIHNldCBleHBhbmRBbGwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwYW5kQWxsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXhwb3J0VG9FeGNlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2V4cG9ydFRvRXhjZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBleHBvcnRUb0V4Y2VsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2V4cG9ydFRvRXhjZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBncmFuZFRvdGFsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JhbmRUb3RhbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyYW5kVG90YWwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JhbmRUb3RhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG5vRGF0YSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ25vRGF0YScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5vRGF0YSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdub0RhdGEnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZW1vdmVBbGxTb3J0aW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVtb3ZlQWxsU29ydGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlbW92ZUFsbFNvcnRpbmcodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVtb3ZlQWxsU29ydGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dGaWVsZENob29zZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93RmllbGRDaG9vc2VyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0ZpZWxkQ2hvb3Nlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93RmllbGRDaG9vc2VyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc29ydENvbHVtbkJ5U3VtbWFyeSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRDb2x1bW5CeVN1bW1hcnknKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0Q29sdW1uQnlTdW1tYXJ5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRDb2x1bW5CeVN1bW1hcnknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzb3J0Um93QnlTdW1tYXJ5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc29ydFJvd0J5U3VtbWFyeScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNvcnRSb3dCeVN1bW1hcnkodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc29ydFJvd0J5U3VtbWFyeScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRvdGFsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG90YWwnKTtcclxuICAgIH1cclxuICAgIHNldCB0b3RhbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0b3RhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFkZFJvd1RvTm9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FkZFJvd1RvTm9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFkZFJvd1RvTm9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhZGRSb3dUb05vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICd0ZXh0cyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvVGV4dHNDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1RleHRzQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1RleHRzTW9kdWxlIHsgfVxyXG4iXX0=