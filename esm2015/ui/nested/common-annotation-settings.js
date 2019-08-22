/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoChartCommonAnnotationConfig } from './base/chart-common-annotation-config';
let DxoCommonAnnotationSettingsComponent = class DxoCommonAnnotationSettingsComponent extends DxoChartCommonAnnotationConfig {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'commonAnnotationSettings';
    }
};
DxoCommonAnnotationSettingsComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-common-annotation-settings',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'allowDragging',
            'argument',
            'arrowLength',
            'arrowWidth',
            'axis',
            'border',
            'color',
            'customizeTooltip',
            'description',
            'font',
            'height',
            'image',
            'offsetX',
            'offsetY',
            'opacity',
            'paddingLeftRight',
            'paddingTopBottom',
            'series',
            'shadow',
            'text',
            'textOverflow',
            'tooltipEnabled',
            'type',
            'value',
            'width',
            'wordWrap',
            'x',
            'y'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoCommonAnnotationSettingsComponent);
export { DxoCommonAnnotationSettingsComponent };
let DxoCommonAnnotationSettingsModule = class DxoCommonAnnotationSettingsModule {
};
DxoCommonAnnotationSettingsModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoCommonAnnotationSettingsComponent
        ],
        exports: [
            DxoCommonAnnotationSettingsComponent
        ],
    })
], DxoCommonAnnotationSettingsModule);
export { DxoCommonAnnotationSettingsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXVDdkYsSUFBYSxvQ0FBb0MsR0FBakQsMENBQWtELFNBQVEsOEJBQThCO0lBT3BGLFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFWRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLDBCQUEwQixDQUFDO0lBQ3RDLENBQUM7Q0FVSixDQUFBO0FBZFksb0NBQW9DO0lBcENoRCxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0NBQWdDO1FBQzFDLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osZUFBZTtZQUNmLFVBQVU7WUFDVixhQUFhO1lBQ2IsWUFBWTtZQUNaLE1BQU07WUFDTixRQUFRO1lBQ1IsT0FBTztZQUNQLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsTUFBTTtZQUNOLFFBQVE7WUFDUixPQUFPO1lBQ1AsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1Qsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixRQUFRO1lBQ1IsUUFBUTtZQUNSLE1BQU07WUFDTixjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLE1BQU07WUFDTixPQUFPO1lBQ1AsT0FBTztZQUNQLFVBQVU7WUFDVixHQUFHO1lBQ0gsR0FBRztTQUNOO2lCQS9CUSxFQUFFO0tBZ0NkLENBQUM7SUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO0lBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBOzZDQURtQyxnQkFBZ0I7UUFDdEMsZ0JBQWdCO0dBUm5DLG9DQUFvQyxDQWNoRDtTQWRZLG9DQUFvQztBQXdCakQsSUFBYSxpQ0FBaUMsR0FBOUM7Q0FBa0QsQ0FBQTtBQUFyQyxpQ0FBaUM7SUFSN0MsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osb0NBQW9DO1NBQ3JDO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asb0NBQW9DO1NBQ3JDO0tBQ0YsQ0FBQztHQUNXLGlDQUFpQyxDQUFJO1NBQXJDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0NoYXJ0Q29tbW9uQW5ub3RhdGlvbkNvbmZpZyB9IGZyb20gJy4vYmFzZS9jaGFydC1jb21tb24tYW5ub3RhdGlvbi1jb25maWcnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWxsb3dEcmFnZ2luZycsXHJcbiAgICAgICAgJ2FyZ3VtZW50JyxcclxuICAgICAgICAnYXJyb3dMZW5ndGgnLFxyXG4gICAgICAgICdhcnJvd1dpZHRoJyxcclxuICAgICAgICAnYXhpcycsXHJcbiAgICAgICAgJ2JvcmRlcicsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnY3VzdG9taXplVG9vbHRpcCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAnZm9udCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2ltYWdlJyxcclxuICAgICAgICAnb2Zmc2V0WCcsXHJcbiAgICAgICAgJ29mZnNldFknLFxyXG4gICAgICAgICdvcGFjaXR5JyxcclxuICAgICAgICAncGFkZGluZ0xlZnRSaWdodCcsXHJcbiAgICAgICAgJ3BhZGRpbmdUb3BCb3R0b20nLFxyXG4gICAgICAgICdzZXJpZXMnLFxyXG4gICAgICAgICdzaGFkb3cnLFxyXG4gICAgICAgICd0ZXh0JyxcclxuICAgICAgICAndGV4dE92ZXJmbG93JyxcclxuICAgICAgICAndG9vbHRpcEVuYWJsZWQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndmFsdWUnLFxyXG4gICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgJ3dvcmRXcmFwJyxcclxuICAgICAgICAneCcsXHJcbiAgICAgICAgJ3knXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Db21tb25Bbm5vdGF0aW9uU2V0dGluZ3NDb21wb25lbnQgZXh0ZW5kcyBEeG9DaGFydENvbW1vbkFubm90YXRpb25Db25maWcge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdjb21tb25Bbm5vdGF0aW9uU2V0dGluZ3MnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0NvbW1vbkFubm90YXRpb25TZXR0aW5nc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQ29tbW9uQW5ub3RhdGlvblNldHRpbmdzQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0NvbW1vbkFubm90YXRpb25TZXR0aW5nc01vZHVsZSB7IH1cclxuIl19