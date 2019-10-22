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
import { CollectionNestedOption } from 'devextreme-angular/core';
var DxiSortByGroupSummaryInfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiSortByGroupSummaryInfoComponent, _super);
    function DxiSortByGroupSummaryInfoComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "groupColumn", {
        get: function () {
            return this._getOption('groupColumn');
        },
        set: function (value) {
            this._setOption('groupColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "sortOrder", {
        get: function () {
            return this._getOption('sortOrder');
        },
        set: function (value) {
            this._setOption('sortOrder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "summaryItem", {
        get: function () {
            return this._getOption('summaryItem');
        },
        set: function (value) {
            this._setOption('summaryItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "_optionPath", {
        get: function () {
            return 'sortByGroupSummaryInfo';
        },
        enumerable: true,
        configurable: true
    });
    DxiSortByGroupSummaryInfoComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DxiSortByGroupSummaryInfoComponent.prototype, "groupColumn", null);
    tslib_1.__decorate([
        Input()
    ], DxiSortByGroupSummaryInfoComponent.prototype, "sortOrder", null);
    tslib_1.__decorate([
        Input()
    ], DxiSortByGroupSummaryInfoComponent.prototype, "summaryItem", null);
    DxiSortByGroupSummaryInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'dxi-sort-by-group-summary-info',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxiSortByGroupSummaryInfoComponent);
    return DxiSortByGroupSummaryInfoComponent;
}(CollectionNestedOption));
export { DxiSortByGroupSummaryInfoComponent };
var DxiSortByGroupSummaryInfoModule = /** @class */ (function () {
    function DxiSortByGroupSummaryInfoModule() {
    }
    DxiSortByGroupSummaryInfoModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxiSortByGroupSummaryInfoComponent
            ],
            exports: [
                DxiSortByGroupSummaryInfoComponent
            ],
        })
    ], DxiSortByGroupSummaryInfoModule);
    return DxiSortByGroupSummaryInfoModule;
}());
export { DxiSortByGroupSummaryInfoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1ieS1ncm91cC1zdW1tYXJ5LWluZm8tZHhpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZC8iLCJzb3VyY2VzIjpbInNvcnQtYnktZ3JvdXAtc3VtbWFyeS1pbmZvLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxvQ0FBb0M7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBU2pFO0lBQXdELDhEQUFzQjtJQStCMUUsNENBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQWxDRCxzQkFBSSwyREFBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7YUFDRCxVQUFnQixLQUFhO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUM7OztPQUhBO0lBTUQsc0JBQUkseURBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDO2FBQ0QsVUFBYyxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksMkRBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxDQUFDO2FBQ0QsVUFBZ0IsS0FBc0I7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBYywyREFBVzthQUF6QjtZQUNJLE9BQU8sd0JBQXdCLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7O2dCQUdpRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO2dCQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7SUE5QmI7UUFEQyxLQUFLLEVBQUU7eUVBR1A7SUFNRDtRQURDLEtBQUssRUFBRTt1RUFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO3lFQUdQO0lBcEJRLGtDQUFrQztRQU45QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0NBQWdDO1lBQzFDLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBRHBCLEVBQUU7U0FFZCxDQUFDO1FBZ0NlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7T0FoQ04sa0NBQWtDLENBc0M5QztJQUFELHlDQUFDO0NBQUEsQUF0Q0QsQ0FBd0Qsc0JBQXNCLEdBc0M3RTtTQXRDWSxrQ0FBa0M7QUFnRC9DO0lBQUE7SUFBK0MsQ0FBQztJQUFuQywrQkFBK0I7UUFSM0MsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGtDQUFrQzthQUNuQztZQUNELE9BQU8sRUFBRTtnQkFDUCxrQ0FBa0M7YUFDbkM7U0FDRixDQUFDO09BQ1csK0JBQStCLENBQUk7SUFBRCxzQ0FBQztDQUFBLEFBQWhELElBQWdEO1NBQW5DLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLXNvcnQtYnktZ3JvdXAtc3VtbWFyeS1pbmZvJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvQ29tcG9uZW50IGV4dGVuZHMgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwQ29sdW1uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBDb2x1bW4nKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cENvbHVtbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cENvbHVtbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNvcnRPcmRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRPcmRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNvcnRPcmRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzb3J0T3JkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdW1tYXJ5SXRlbSgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N1bW1hcnlJdGVtJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3VtbWFyeUl0ZW0odmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3VtbWFyeUl0ZW0nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzb3J0QnlHcm91cFN1bW1hcnlJbmZvJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Nb2R1bGUgeyB9XHJcbiJdfQ==