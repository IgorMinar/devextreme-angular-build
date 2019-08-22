/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormat } from './base/format';
let DxoArgumentFormatComponent = class DxoArgumentFormatComponent extends DxoFormat {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'argumentFormat';
    }
};
DxoArgumentFormatComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-argument-format',
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
], DxoArgumentFormatComponent);
export { DxoArgumentFormatComponent };
let DxoArgumentFormatModule = class DxoArgumentFormatModule {
};
DxoArgumentFormatModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoArgumentFormatComponent
        ],
        exports: [
            DxoArgumentFormatComponent
        ],
    })
], DxoArgumentFormatModule);
export { DxoArgumentFormatModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJndW1lbnQtZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2FyZ3VtZW50LWZvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnQjFDLElBQWEsMEJBQTBCLEdBQXZDLGdDQUF3QyxTQUFRLFNBQVM7SUFPckQsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQVZELElBQWMsV0FBVztRQUNyQixNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQztDQVVKLENBQUE7QUFkWSwwQkFBMEI7SUFidEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLE1BQU0sRUFBRTtZQUNKLFVBQVU7WUFDVixXQUFXO1lBQ1gsUUFBUTtZQUNSLFdBQVc7WUFDWCxNQUFNO1NBQ1Q7aUJBUlEsRUFBRTtLQVNkLENBQUM7SUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO0lBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBOzZDQURtQyxnQkFBZ0I7UUFDdEMsZ0JBQWdCO0dBUm5DLDBCQUEwQixDQWN0QztTQWRZLDBCQUEwQjtBQXdCdkMsSUFBYSx1QkFBdUIsR0FBcEM7Q0FBd0MsQ0FBQTtBQUEzQix1QkFBdUI7SUFSbkMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osMEJBQTBCO1NBQzNCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsMEJBQTBCO1NBQzNCO0tBQ0YsQ0FBQztHQUNXLHVCQUF1QixDQUFJO1NBQTNCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0Zvcm1hdCB9IGZyb20gJy4vYmFzZS9mb3JtYXQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tYXJndW1lbnQtZm9ybWF0JyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2N1cnJlbmN5JyxcclxuICAgICAgICAnZm9ybWF0dGVyJyxcclxuICAgICAgICAncGFyc2VyJyxcclxuICAgICAgICAncHJlY2lzaW9uJyxcclxuICAgICAgICAndHlwZSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0FyZ3VtZW50Rm9ybWF0Q29tcG9uZW50IGV4dGVuZHMgRHhvRm9ybWF0IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnYXJndW1lbnRGb3JtYXQnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0FyZ3VtZW50Rm9ybWF0Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9Bcmd1bWVudEZvcm1hdENvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Bcmd1bWVudEZvcm1hdE1vZHVsZSB7IH1cclxuIl19