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
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { DxoChartCommonAnnotationConfig } from './base/chart-common-annotation-config';
var DxoCommonAnnotationSettingsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoCommonAnnotationSettingsComponent, _super);
    function DxoCommonAnnotationSettingsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoCommonAnnotationSettingsComponent.prototype, "_optionPath", {
        get: function () {
            return 'commonAnnotationSettings';
        },
        enumerable: true,
        configurable: true
    });
    DxoCommonAnnotationSettingsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
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
        tslib_1.__param(1, Host())
    ], DxoCommonAnnotationSettingsComponent);
    return DxoCommonAnnotationSettingsComponent;
}(DxoChartCommonAnnotationConfig));
export { DxoCommonAnnotationSettingsComponent };
var DxoCommonAnnotationSettingsModule = /** @class */ (function () {
    function DxoCommonAnnotationSettingsModule() {
    }
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
    return DxoCommonAnnotationSettingsModule;
}());
export { DxoCommonAnnotationSettingsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsiY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXVDdkY7SUFBMEQsZ0VBQThCO0lBT3BGLDhDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFWRCxzQkFBYyw2REFBVzthQUF6QjtZQUNJLE9BQU8sMEJBQTBCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7O2dCQUdpRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO2dCQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7SUFSSixvQ0FBb0M7UUFwQ2hELFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQ0FBZ0M7WUFDMUMsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osZUFBZTtnQkFDZixVQUFVO2dCQUNWLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixNQUFNO2dCQUNOLFFBQVE7Z0JBQ1IsT0FBTztnQkFDUCxrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2IsTUFBTTtnQkFDTixRQUFRO2dCQUNSLE9BQU87Z0JBQ1AsU0FBUztnQkFDVCxTQUFTO2dCQUNULFNBQVM7Z0JBQ1Qsa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixNQUFNO2dCQUNOLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixNQUFNO2dCQUNOLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxVQUFVO2dCQUNWLEdBQUc7Z0JBQ0gsR0FBRzthQUNOO3FCQS9CUSxFQUFFO1NBZ0NkLENBQUM7UUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BUk4sb0NBQW9DLENBY2hEO0lBQUQsMkNBQUM7Q0FBQSxBQWRELENBQTBELDhCQUE4QixHQWN2RjtTQWRZLG9DQUFvQztBQXdCakQ7SUFBQTtJQUFpRCxDQUFDO0lBQXJDLGlDQUFpQztRQVI3QyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osb0NBQW9DO2FBQ3JDO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9DQUFvQzthQUNyQztTQUNGLENBQUM7T0FDVyxpQ0FBaUMsQ0FBSTtJQUFELHdDQUFDO0NBQUEsQUFBbEQsSUFBa0Q7U0FBckMsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeG9DaGFydENvbW1vbkFubm90YXRpb25Db25maWcgfSBmcm9tICcuL2Jhc2UvY2hhcnQtY29tbW9uLWFubm90YXRpb24tY29uZmlnJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWNvbW1vbi1hbm5vdGF0aW9uLXNldHRpbmdzJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FsbG93RHJhZ2dpbmcnLFxyXG4gICAgICAgICdhcmd1bWVudCcsXHJcbiAgICAgICAgJ2Fycm93TGVuZ3RoJyxcclxuICAgICAgICAnYXJyb3dXaWR0aCcsXHJcbiAgICAgICAgJ2F4aXMnLFxyXG4gICAgICAgICdib3JkZXInLFxyXG4gICAgICAgICdjb2xvcicsXHJcbiAgICAgICAgJ2N1c3RvbWl6ZVRvb2x0aXAnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgJ2ZvbnQnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdpbWFnZScsXHJcbiAgICAgICAgJ29mZnNldFgnLFxyXG4gICAgICAgICdvZmZzZXRZJyxcclxuICAgICAgICAnb3BhY2l0eScsXHJcbiAgICAgICAgJ3BhZGRpbmdMZWZ0UmlnaHQnLFxyXG4gICAgICAgICdwYWRkaW5nVG9wQm90dG9tJyxcclxuICAgICAgICAnc2VyaWVzJyxcclxuICAgICAgICAnc2hhZG93JyxcclxuICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgJ3RleHRPdmVyZmxvdycsXHJcbiAgICAgICAgJ3Rvb2x0aXBFbmFibGVkJyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICd3b3JkV3JhcCcsXHJcbiAgICAgICAgJ3gnLFxyXG4gICAgICAgICd5J1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ29tbW9uQW5ub3RhdGlvblNldHRpbmdzQ29tcG9uZW50IGV4dGVuZHMgRHhvQ2hhcnRDb21tb25Bbm5vdGF0aW9uQ29uZmlnIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnY29tbW9uQW5ub3RhdGlvblNldHRpbmdzJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9Db21tb25Bbm5vdGF0aW9uU2V0dGluZ3NDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0NvbW1vbkFubm90YXRpb25TZXR0aW5nc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Db21tb25Bbm5vdGF0aW9uU2V0dGluZ3NNb2R1bGUgeyB9XHJcbiJdfQ==