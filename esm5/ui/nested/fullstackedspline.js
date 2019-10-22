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
import { DxoChartCommonSeriesSettings } from './base/chart-common-series-settings';
var DxoFullstackedsplineComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoFullstackedsplineComponent, _super);
    function DxoFullstackedsplineComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFullstackedsplineComponent.prototype, "_optionPath", {
        get: function () {
            return 'fullstackedspline';
        },
        enumerable: true,
        configurable: true
    });
    DxoFullstackedsplineComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    DxoFullstackedsplineComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-fullstackedspline',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'aggregation',
                'area',
                'argumentField',
                'axis',
                'bar',
                'barOverlapGroup',
                'barPadding',
                'barWidth',
                'border',
                'bubble',
                'candlestick',
                'closeValueField',
                'color',
                'cornerRadius',
                'dashStyle',
                'fullstackedarea',
                'fullstackedbar',
                'fullstackedline',
                'fullstackedspline',
                'fullstackedsplinearea',
                'highValueField',
                'hoverMode',
                'hoverStyle',
                'ignoreEmptyPoints',
                'innerColor',
                'label',
                'line',
                'lowValueField',
                'maxLabelCount',
                'minBarSize',
                'opacity',
                'openValueField',
                'pane',
                'point',
                'rangearea',
                'rangebar',
                'rangeValue1Field',
                'rangeValue2Field',
                'reduction',
                'scatter',
                'selectionMode',
                'selectionStyle',
                'showInLegend',
                'sizeField',
                'spline',
                'splinearea',
                'stack',
                'stackedarea',
                'stackedbar',
                'stackedline',
                'stackedspline',
                'stackedsplinearea',
                'steparea',
                'stepline',
                'stock',
                'tagField',
                'type',
                'valueErrorBar',
                'valueField',
                'visible',
                'width'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxoFullstackedsplineComponent);
    return DxoFullstackedsplineComponent;
}(DxoChartCommonSeriesSettings));
export { DxoFullstackedsplineComponent };
var DxoFullstackedsplineModule = /** @class */ (function () {
    function DxoFullstackedsplineModule() {
    }
    DxoFullstackedsplineModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoFullstackedsplineComponent
            ],
            exports: [
                DxoFullstackedsplineComponent
            ],
        })
    ], DxoFullstackedsplineModule);
    return DxoFullstackedsplineModule;
}());
export { DxoFullstackedsplineModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHN0YWNrZWRzcGxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsiZnVsbHN0YWNrZWRzcGxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQXdFbkY7SUFBbUQseURBQTRCO0lBTzNFLHVDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFWRCxzQkFBYyxzREFBVzthQUF6QjtZQUNJLE9BQU8sbUJBQW1CLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7O2dCQUdpRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO2dCQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7SUFSSiw2QkFBNkI7UUFyRXpDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osYUFBYTtnQkFDYixNQUFNO2dCQUNOLGVBQWU7Z0JBQ2YsTUFBTTtnQkFDTixLQUFLO2dCQUNMLGlCQUFpQjtnQkFDakIsWUFBWTtnQkFDWixVQUFVO2dCQUNWLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsT0FBTztnQkFDUCxjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsaUJBQWlCO2dCQUNqQixnQkFBZ0I7Z0JBQ2hCLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQix1QkFBdUI7Z0JBQ3ZCLGdCQUFnQjtnQkFDaEIsV0FBVztnQkFDWCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsWUFBWTtnQkFDWixPQUFPO2dCQUNQLE1BQU07Z0JBQ04sZUFBZTtnQkFDZixlQUFlO2dCQUNmLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxXQUFXO2dCQUNYLFVBQVU7Z0JBQ1Ysa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsY0FBYztnQkFDZCxXQUFXO2dCQUNYLFFBQVE7Z0JBQ1IsWUFBWTtnQkFDWixPQUFPO2dCQUNQLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2YsbUJBQW1CO2dCQUNuQixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsT0FBTztnQkFDUCxVQUFVO2dCQUNWLE1BQU07Z0JBQ04sZUFBZTtnQkFDZixZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsT0FBTzthQUNWO3FCQWhFUSxFQUFFO1NBaUVkLENBQUM7UUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BUk4sNkJBQTZCLENBY3pDO0lBQUQsb0NBQUM7Q0FBQSxBQWRELENBQW1ELDRCQUE0QixHQWM5RTtTQWRZLDZCQUE2QjtBQXdCMUM7SUFBQTtJQUEwQyxDQUFDO0lBQTlCLDBCQUEwQjtRQVJ0QyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osNkJBQTZCO2FBQzlCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDZCQUE2QjthQUM5QjtTQUNGLENBQUM7T0FDVywwQkFBMEIsQ0FBSTtJQUFELGlDQUFDO0NBQUEsQUFBM0MsSUFBMkM7U0FBOUIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeG9DaGFydENvbW1vblNlcmllc1NldHRpbmdzIH0gZnJvbSAnLi9iYXNlL2NoYXJ0LWNvbW1vbi1zZXJpZXMtc2V0dGluZ3MnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tZnVsbHN0YWNrZWRzcGxpbmUnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWdncmVnYXRpb24nLFxyXG4gICAgICAgICdhcmVhJyxcclxuICAgICAgICAnYXJndW1lbnRGaWVsZCcsXHJcbiAgICAgICAgJ2F4aXMnLFxyXG4gICAgICAgICdiYXInLFxyXG4gICAgICAgICdiYXJPdmVybGFwR3JvdXAnLFxyXG4gICAgICAgICdiYXJQYWRkaW5nJyxcclxuICAgICAgICAnYmFyV2lkdGgnLFxyXG4gICAgICAgICdib3JkZXInLFxyXG4gICAgICAgICdidWJibGUnLFxyXG4gICAgICAgICdjYW5kbGVzdGljaycsXHJcbiAgICAgICAgJ2Nsb3NlVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnY29ybmVyUmFkaXVzJyxcclxuICAgICAgICAnZGFzaFN0eWxlJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRhcmVhJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRiYXInLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGxpbmUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZHNwbGluZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2Vkc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ2hpZ2hWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnaG92ZXJNb2RlJyxcclxuICAgICAgICAnaG92ZXJTdHlsZScsXHJcbiAgICAgICAgJ2lnbm9yZUVtcHR5UG9pbnRzJyxcclxuICAgICAgICAnaW5uZXJDb2xvcicsXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnbGluZScsXHJcbiAgICAgICAgJ2xvd1ZhbHVlRmllbGQnLFxyXG4gICAgICAgICdtYXhMYWJlbENvdW50JyxcclxuICAgICAgICAnbWluQmFyU2l6ZScsXHJcbiAgICAgICAgJ29wYWNpdHknLFxyXG4gICAgICAgICdvcGVuVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ3BhbmUnLFxyXG4gICAgICAgICdwb2ludCcsXHJcbiAgICAgICAgJ3JhbmdlYXJlYScsXHJcbiAgICAgICAgJ3JhbmdlYmFyJyxcclxuICAgICAgICAncmFuZ2VWYWx1ZTFGaWVsZCcsXHJcbiAgICAgICAgJ3JhbmdlVmFsdWUyRmllbGQnLFxyXG4gICAgICAgICdyZWR1Y3Rpb24nLFxyXG4gICAgICAgICdzY2F0dGVyJyxcclxuICAgICAgICAnc2VsZWN0aW9uTW9kZScsXHJcbiAgICAgICAgJ3NlbGVjdGlvblN0eWxlJyxcclxuICAgICAgICAnc2hvd0luTGVnZW5kJyxcclxuICAgICAgICAnc2l6ZUZpZWxkJyxcclxuICAgICAgICAnc3BsaW5lJyxcclxuICAgICAgICAnc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ3N0YWNrJyxcclxuICAgICAgICAnc3RhY2tlZGFyZWEnLFxyXG4gICAgICAgICdzdGFja2VkYmFyJyxcclxuICAgICAgICAnc3RhY2tlZGxpbmUnLFxyXG4gICAgICAgICdzdGFja2Vkc3BsaW5lJyxcclxuICAgICAgICAnc3RhY2tlZHNwbGluZWFyZWEnLFxyXG4gICAgICAgICdzdGVwYXJlYScsXHJcbiAgICAgICAgJ3N0ZXBsaW5lJyxcclxuICAgICAgICAnc3RvY2snLFxyXG4gICAgICAgICd0YWdGaWVsZCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd2YWx1ZUVycm9yQmFyJyxcclxuICAgICAgICAndmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0Z1bGxzdGFja2Vkc3BsaW5lQ29tcG9uZW50IGV4dGVuZHMgRHhvQ2hhcnRDb21tb25TZXJpZXNTZXR0aW5ncyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2Z1bGxzdGFja2Vkc3BsaW5lJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9GdWxsc3RhY2tlZHNwbGluZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvRnVsbHN0YWNrZWRzcGxpbmVDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRnVsbHN0YWNrZWRzcGxpbmVNb2R1bGUgeyB9XHJcbiJdfQ==