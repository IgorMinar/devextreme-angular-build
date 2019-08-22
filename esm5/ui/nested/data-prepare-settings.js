/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoDataPrepareSettingsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoDataPrepareSettingsComponent, _super);
    function DxoDataPrepareSettingsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "checkTypeForAllData", {
        get: function () {
            return this._getOption('checkTypeForAllData');
        },
        set: function (value) {
            this._setOption('checkTypeForAllData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "convertToAxisDataType", {
        get: function () {
            return this._getOption('convertToAxisDataType');
        },
        set: function (value) {
            this._setOption('convertToAxisDataType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "sortingMethod", {
        get: function () {
            return this._getOption('sortingMethod');
        },
        set: function (value) {
            this._setOption('sortingMethod', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "_optionPath", {
        get: function () {
            return 'dataPrepareSettings';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoDataPrepareSettingsComponent.prototype, "checkTypeForAllData", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoDataPrepareSettingsComponent.prototype, "convertToAxisDataType", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoDataPrepareSettingsComponent.prototype, "sortingMethod", null);
    DxoDataPrepareSettingsComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-data-prepare-settings',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoDataPrepareSettingsComponent);
    return DxoDataPrepareSettingsComponent;
}(NestedOption));
export { DxoDataPrepareSettingsComponent };
var DxoDataPrepareSettingsModule = /** @class */ (function () {
    function DxoDataPrepareSettingsModule() {
    }
    DxoDataPrepareSettingsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoDataPrepareSettingsComponent
            ],
            exports: [
                DxoDataPrepareSettingsComponent
            ],
        })
    ], DxoDataPrepareSettingsModule);
    return DxoDataPrepareSettingsModule;
}());
export { DxoDataPrepareSettingsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wcmVwYXJlLXNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2RhdGEtcHJlcGFyZS1zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBR3BDLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVN4RDtJQUFxRCwyREFBWTtJQStCN0QseUNBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQWxDRCxzQkFBSSxnRUFBbUI7YUFBdkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2xELENBQUM7YUFDRCxVQUF3QixLQUFjO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxrRUFBcUI7YUFBekI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3BELENBQUM7YUFDRCxVQUEwQixLQUFjO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSwwREFBYTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVDLENBQUM7YUFDRCxVQUFrQixLQUF5QjtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFjLHdEQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLHFCQUFxQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBMUJEO1FBREMsS0FBSyxFQUFFOzs7OEVBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs7O2dGQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7Ozt3RUFHUDtJQXBCUSwrQkFBK0I7UUFOM0MsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQURwQixFQUFFO1NBRWQsQ0FBQztRQWdDZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BaENuQywrQkFBK0IsQ0FzQzNDO0lBQUQsc0NBQUM7Q0FBQSxBQXRDRCxDQUFxRCxZQUFZLEdBc0NoRTtTQXRDWSwrQkFBK0I7QUFnRDVDO0lBQUE7SUFBNEMsQ0FBQztJQUFoQyw0QkFBNEI7UUFSeEMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLCtCQUErQjthQUNoQztZQUNELE9BQU8sRUFBRTtnQkFDUCwrQkFBK0I7YUFDaEM7U0FDRixDQUFDO09BQ1csNEJBQTRCLENBQUk7SUFBRCxtQ0FBQztDQUFBLEFBQTdDLElBQTZDO1NBQWhDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1kYXRhLXByZXBhcmUtc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0RhdGFQcmVwYXJlU2V0dGluZ3NDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjaGVja1R5cGVGb3JBbGxEYXRhKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NoZWNrVHlwZUZvckFsbERhdGEnKTtcclxuICAgIH1cclxuICAgIHNldCBjaGVja1R5cGVGb3JBbGxEYXRhKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjaGVja1R5cGVGb3JBbGxEYXRhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29udmVydFRvQXhpc0RhdGFUeXBlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbnZlcnRUb0F4aXNEYXRhVHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbnZlcnRUb0F4aXNEYXRhVHlwZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29udmVydFRvQXhpc0RhdGFUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc29ydGluZ01ldGhvZCgpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRpbmdNZXRob2QnKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0aW5nTWV0aG9kKHZhbHVlOiBib29sZWFuIHwgRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRpbmdNZXRob2QnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdkYXRhUHJlcGFyZVNldHRpbmdzJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9EYXRhUHJlcGFyZVNldHRpbmdzQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9EYXRhUHJlcGFyZVNldHRpbmdzQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0RhdGFQcmVwYXJlU2V0dGluZ3NNb2R1bGUgeyB9XHJcbiJdfQ==