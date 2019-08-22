/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxiSortByGroupSummaryInfoComponent.prototype, "groupColumn", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxiSortByGroupSummaryInfoComponent.prototype, "sortOrder", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiSortByGroupSummaryInfoComponent.prototype, "summaryItem", null);
    DxiSortByGroupSummaryInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'dxi-sort-by-group-summary-info',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1ieS1ncm91cC1zdW1tYXJ5LWluZm8tZHhpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL3NvcnQtYnktZ3JvdXAtc3VtbWFyeS1pbmZvLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBR3BDLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU2xFO0lBQXdELDhEQUFzQjtJQStCMUUsNENBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQWxDRCxzQkFBSSwyREFBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsQ0FBQzthQUNELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSx5REFBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsQ0FBQzthQUNELFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDJEQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxDQUFDO2FBQ0QsVUFBZ0IsS0FBc0I7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBYywyREFBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQTFCRDtRQURDLEtBQUssRUFBRTs7O3lFQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7Ozt1RUFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7eUVBR1A7SUFwQlEsa0NBQWtDO1FBTjlDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQ0FBZ0M7WUFDMUMsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFEcEIsRUFBRTtTQUVkLENBQUM7UUFnQ2UsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFEbUMsZ0JBQWdCO1lBQ3RDLGdCQUFnQjtPQWhDbkMsa0NBQWtDLENBc0M5QztJQUFELHlDQUFDO0NBQUEsQUF0Q0QsQ0FBd0Qsc0JBQXNCLEdBc0M3RTtTQXRDWSxrQ0FBa0M7QUFnRC9DO0lBQUE7SUFBK0MsQ0FBQztJQUFuQywrQkFBK0I7UUFSM0MsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGtDQUFrQzthQUNuQztZQUNELE9BQU8sRUFBRTtnQkFDUCxrQ0FBa0M7YUFDbkM7U0FDRixDQUFDO09BQ1csK0JBQStCLENBQUk7SUFBRCxzQ0FBQztDQUFBLEFBQWhELElBQWdEO1NBQW5DLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktc29ydC1ieS1ncm91cC1zdW1tYXJ5LWluZm8nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Db21wb25lbnQgZXh0ZW5kcyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JvdXBDb2x1bW4oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cENvbHVtbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwQ29sdW1uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwQ29sdW1uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc29ydE9yZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc29ydE9yZGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc29ydE9yZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRPcmRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN1bW1hcnlJdGVtKCk6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3VtbWFyeUl0ZW0nKTtcclxuICAgIH1cclxuICAgIHNldCBzdW1tYXJ5SXRlbSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdW1tYXJ5SXRlbScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3NvcnRCeUdyb3VwU3VtbWFyeUluZm8nO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpU29ydEJ5R3JvdXBTdW1tYXJ5SW5mb01vZHVsZSB7IH1cclxuIl19