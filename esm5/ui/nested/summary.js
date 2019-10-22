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
import { Component, NgModule, Host, SkipSelf, Input, ContentChildren, forwardRef } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
import { DxiGroupItemComponent } from './group-item-dxi';
import { DxiTotalItemComponent } from './total-item-dxi';
var DxoSummaryComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoSummaryComponent, _super);
    function DxoSummaryComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSummaryComponent.prototype, "calculateCustomSummary", {
        get: function () {
            return this._getOption('calculateCustomSummary');
        },
        set: function (value) {
            this._setOption('calculateCustomSummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "groupItems", {
        get: function () {
            return this._getOption('groupItems');
        },
        set: function (value) {
            this._setOption('groupItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "recalculateWhileEditing", {
        get: function () {
            return this._getOption('recalculateWhileEditing');
        },
        set: function (value) {
            this._setOption('recalculateWhileEditing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "skipEmptyValues", {
        get: function () {
            return this._getOption('skipEmptyValues');
        },
        set: function (value) {
            this._setOption('skipEmptyValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "totalItems", {
        get: function () {
            return this._getOption('totalItems');
        },
        set: function (value) {
            this._setOption('totalItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "_optionPath", {
        get: function () {
            return 'summary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "groupItemsChildren", {
        get: function () {
            return this._getOption('groupItems');
        },
        set: function (value) {
            this.setChildren('groupItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSummaryComponent.prototype, "totalItemsChildren", {
        get: function () {
            return this._getOption('totalItems');
        },
        set: function (value) {
            this.setChildren('totalItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoSummaryComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DxoSummaryComponent.prototype, "calculateCustomSummary", null);
    tslib_1.__decorate([
        Input()
    ], DxoSummaryComponent.prototype, "groupItems", null);
    tslib_1.__decorate([
        Input()
    ], DxoSummaryComponent.prototype, "recalculateWhileEditing", null);
    tslib_1.__decorate([
        Input()
    ], DxoSummaryComponent.prototype, "skipEmptyValues", null);
    tslib_1.__decorate([
        Input()
    ], DxoSummaryComponent.prototype, "texts", null);
    tslib_1.__decorate([
        Input()
    ], DxoSummaryComponent.prototype, "totalItems", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiGroupItemComponent; }))
    ], DxoSummaryComponent.prototype, "groupItemsChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiTotalItemComponent; }))
    ], DxoSummaryComponent.prototype, "totalItemsChildren", null);
    DxoSummaryComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-summary',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxoSummaryComponent);
    return DxoSummaryComponent;
}(NestedOption));
export { DxoSummaryComponent };
var DxoSummaryModule = /** @class */ (function () {
    function DxoSummaryModule() {
    }
    DxoSummaryModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoSummaryComponent
            ],
            exports: [
                DxoSummaryComponent
            ],
        })
    ], DxoSummaryModule);
    return DxoSummaryModule;
}());
export { DxoSummaryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQvIiwic291cmNlcyI6WyJzdW1tYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUdwQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxlQUFlLEVBQ2YsVUFBVSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFTekQ7SUFBeUMsK0NBQVk7SUF1RWpELDZCQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUExRUQsc0JBQUksdURBQXNCO2FBQTFCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDckQsQ0FBQzthQUNELFVBQTJCLEtBQWU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDJDQUFVO2FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMs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SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQVI1QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osbUJBQW1CO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG1CQUFtQjthQUNwQjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0LFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHhpR3JvdXBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9ncm91cC1pdGVtLWR4aSc7XHJcbmltcG9ydCB7IER4aVRvdGFsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdG90YWwtaXRlbS1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tc3VtbWFyeScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU3VtbWFyeUNvbXBvbmVudCBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNhbGN1bGF0ZUN1c3RvbVN1bW1hcnkoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NhbGN1bGF0ZUN1c3RvbVN1bW1hcnknKTtcclxuICAgIH1cclxuICAgIHNldCBjYWxjdWxhdGVDdXN0b21TdW1tYXJ5KHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwSXRlbXMoKTogQXJyYXk8YW55IHwgeyBhbGlnbkJ5Q29sdW1uPzogYm9vbGVhbiwgY29sdW1uPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2hvd0luR3JvdXBGb290ZXI/OiBib29sZWFuLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmFsdWVGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBJdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwSXRlbXModmFsdWU6IEFycmF5PGFueSB8IHsgYWxpZ25CeUNvbHVtbj86IGJvb2xlYW4sIGNvbHVtbj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBkaXNwbGF5Rm9ybWF0Pzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBzaG93SW5Db2x1bW4/OiBzdHJpbmcsIHNob3dJbkdyb3VwRm9vdGVyPzogYm9vbGVhbiwgc2tpcEVtcHR5VmFsdWVzPzogYm9vbGVhbiwgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZhbHVlRm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwSXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZWNhbGN1bGF0ZVdoaWxlRWRpdGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWNhbGN1bGF0ZVdoaWxlRWRpdGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlY2FsY3VsYXRlV2hpbGVFZGl0aW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWNhbGN1bGF0ZVdoaWxlRWRpdGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNraXBFbXB0eVZhbHVlcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdza2lwRW1wdHlWYWx1ZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBza2lwRW1wdHlWYWx1ZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NraXBFbXB0eVZhbHVlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRleHRzKCk6IHsgYXZnPzogc3RyaW5nLCBhdmdPdGhlckNvbHVtbj86IHN0cmluZywgY291bnQ/OiBzdHJpbmcsIG1heD86IHN0cmluZywgbWF4T3RoZXJDb2x1bW4/OiBzdHJpbmcsIG1pbj86IHN0cmluZywgbWluT3RoZXJDb2x1bW4/OiBzdHJpbmcsIHN1bT86IHN0cmluZywgc3VtT3RoZXJDb2x1bW4/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGV4dHMnKTtcclxuICAgIH1cclxuICAgIHNldCB0ZXh0cyh2YWx1ZTogeyBhdmc/OiBzdHJpbmcsIGF2Z090aGVyQ29sdW1uPzogc3RyaW5nLCBjb3VudD86IHN0cmluZywgbWF4Pzogc3RyaW5nLCBtYXhPdGhlckNvbHVtbj86IHN0cmluZywgbWluPzogc3RyaW5nLCBtaW5PdGhlckNvbHVtbj86IHN0cmluZywgc3VtPzogc3RyaW5nLCBzdW1PdGhlckNvbHVtbj86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZXh0cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRvdGFsSXRlbXMoKTogQXJyYXk8YW55IHwgeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGNvbHVtbj86IHN0cmluZywgY3NzQ2xhc3M/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheUZvcm1hdD86IHN0cmluZywgbmFtZT86IHN0cmluZywgc2hvd0luQ29sdW1uPzogc3RyaW5nLCBza2lwRW1wdHlWYWx1ZXM/OiBib29sZWFuLCBzdW1tYXJ5VHlwZT86IHN0cmluZywgdmFsdWVGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG90YWxJdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvdGFsSXRlbXModmFsdWU6IEFycmF5PGFueSB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjb2x1bW4/OiBzdHJpbmcsIGNzc0NsYXNzPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2tpcEVtcHR5VmFsdWVzPzogYm9vbGVhbiwgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZhbHVlRm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RvdGFsSXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzdW1tYXJ5JztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUdyb3VwSXRlbUNvbXBvbmVudCkpXHJcbiAgICBnZXQgZ3JvdXBJdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlHcm91cEl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cEl0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBJdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignZ3JvdXBJdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpVG90YWxJdGVtQ29tcG9uZW50KSlcclxuICAgIGdldCB0b3RhbEl0ZW1zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVRvdGFsSXRlbUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RvdGFsSXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCB0b3RhbEl0ZW1zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCd0b3RhbEl0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvU3VtbWFyeUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvU3VtbWFyeUNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TdW1tYXJ5TW9kdWxlIHsgfVxyXG4iXX0=