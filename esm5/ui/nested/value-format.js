/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormat } from './base/format';
var DxoValueFormatComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoValueFormatComponent, _super);
    function DxoValueFormatComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoValueFormatComponent.prototype, "_optionPath", {
        get: function () {
            return 'valueFormat';
        },
        enumerable: true,
        configurable: true
    });
    DxoValueFormatComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-value-format',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'currency',
                'formatter',
                'parser',
                'precision',
                'type'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoValueFormatComponent);
    return DxoValueFormatComponent;
}(DxoFormat));
export { DxoValueFormatComponent };
var DxoValueFormatModule = /** @class */ (function () {
    function DxoValueFormatModule() {
    }
    DxoValueFormatModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoValueFormatComponent
            ],
            exports: [
                DxoValueFormatComponent
            ],
        })
    ], DxoValueFormatModule);
    return DxoValueFormatModule;
}());
export { DxoValueFormatModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL3ZhbHVlLWZvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnQjFDO0lBQTZDLG1EQUFTO0lBT2xELGlDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFWRCxzQkFBYyxnREFBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFKUSx1QkFBdUI7UUFibkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsUUFBUTtnQkFDUixXQUFXO2dCQUNYLE1BQU07YUFDVDtxQkFSUSxFQUFFO1NBU2QsQ0FBQztRQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FSbkMsdUJBQXVCLENBY25DO0lBQUQsOEJBQUM7Q0FBQSxBQWRELENBQTZDLFNBQVMsR0FjckQ7U0FkWSx1QkFBdUI7QUF3QnBDO0lBQUE7SUFBb0MsQ0FBQztJQUF4QixvQkFBb0I7UUFSaEMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLHVCQUF1QjthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDUCx1QkFBdUI7YUFDeEI7U0FDRixDQUFDO09BQ1csb0JBQW9CLENBQUk7SUFBRCwyQkFBQztDQUFBLEFBQXJDLElBQXFDO1NBQXhCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0Zvcm1hdCB9IGZyb20gJy4vYmFzZS9mb3JtYXQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tdmFsdWUtZm9ybWF0JyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2N1cnJlbmN5JyxcclxuICAgICAgICAnZm9ybWF0dGVyJyxcclxuICAgICAgICAncGFyc2VyJyxcclxuICAgICAgICAncHJlY2lzaW9uJyxcclxuICAgICAgICAndHlwZSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1ZhbHVlRm9ybWF0Q29tcG9uZW50IGV4dGVuZHMgRHhvRm9ybWF0IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAndmFsdWVGb3JtYXQnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b1ZhbHVlRm9ybWF0Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9WYWx1ZUZvcm1hdENvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9WYWx1ZUZvcm1hdE1vZHVsZSB7IH1cclxuIl19