/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
let DxoDataPrepareSettingsComponent = class DxoDataPrepareSettingsComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get checkTypeForAllData() {
        return this._getOption('checkTypeForAllData');
    }
    set checkTypeForAllData(value) {
        this._setOption('checkTypeForAllData', value);
    }
    get convertToAxisDataType() {
        return this._getOption('convertToAxisDataType');
    }
    set convertToAxisDataType(value) {
        this._setOption('convertToAxisDataType', value);
    }
    get sortingMethod() {
        return this._getOption('sortingMethod');
    }
    set sortingMethod(value) {
        this._setOption('sortingMethod', value);
    }
    get _optionPath() {
        return 'dataPrepareSettings';
    }
};
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
export { DxoDataPrepareSettingsComponent };
let DxoDataPrepareSettingsModule = class DxoDataPrepareSettingsModule {
};
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
export { DxoDataPrepareSettingsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wcmVwYXJlLXNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2RhdGEtcHJlcGFyZS1zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBR3BDLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVN4RCxJQUFhLCtCQUErQixHQUE1QyxxQ0FBNkMsU0FBUSxZQUFZO0lBK0I3RCxZQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFDUixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBbENELElBQUksbUJBQW1CO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFHRCxJQUFJLHFCQUFxQjtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxJQUFJLHFCQUFxQixDQUFDLEtBQWM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBR0QsSUFBSSxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQXlCO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFHRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7Q0FVSixDQUFBO0FBcENHO0lBREMsS0FBSyxFQUFFOzs7MEVBR1A7QUFNRDtJQURDLEtBQUssRUFBRTs7OzRFQUdQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7OztvRUFHUDtBQXBCUSwrQkFBK0I7SUFOM0MsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQURwQixFQUFFO0tBRWQsQ0FBQztJQWdDZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO0lBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBOzZDQURtQyxnQkFBZ0I7UUFDdEMsZ0JBQWdCO0dBaENuQywrQkFBK0IsQ0FzQzNDO1NBdENZLCtCQUErQjtBQWdENUMsSUFBYSw0QkFBNEIsR0FBekM7Q0FBNkMsQ0FBQTtBQUFoQyw0QkFBNEI7SUFSeEMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osK0JBQStCO1NBQ2hDO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsK0JBQStCO1NBQ2hDO0tBQ0YsQ0FBQztHQUNXLDRCQUE0QixDQUFJO1NBQWhDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1kYXRhLXByZXBhcmUtc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0RhdGFQcmVwYXJlU2V0dGluZ3NDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjaGVja1R5cGVGb3JBbGxEYXRhKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NoZWNrVHlwZUZvckFsbERhdGEnKTtcclxuICAgIH1cclxuICAgIHNldCBjaGVja1R5cGVGb3JBbGxEYXRhKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjaGVja1R5cGVGb3JBbGxEYXRhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29udmVydFRvQXhpc0RhdGFUeXBlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbnZlcnRUb0F4aXNEYXRhVHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbnZlcnRUb0F4aXNEYXRhVHlwZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29udmVydFRvQXhpc0RhdGFUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc29ydGluZ01ldGhvZCgpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRpbmdNZXRob2QnKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0aW5nTWV0aG9kKHZhbHVlOiBib29sZWFuIHwgRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NvcnRpbmdNZXRob2QnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdkYXRhUHJlcGFyZVNldHRpbmdzJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9EYXRhUHJlcGFyZVNldHRpbmdzQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9EYXRhUHJlcGFyZVNldHRpbmdzQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0RhdGFQcmVwYXJlU2V0dGluZ3NNb2R1bGUgeyB9XHJcbiJdfQ==