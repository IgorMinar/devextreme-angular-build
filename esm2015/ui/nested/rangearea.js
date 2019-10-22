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
let DxoRangeareaComponent = class DxoRangeareaComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'rangearea';
    }
};
DxoRangeareaComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoRangeareaComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-rangearea',
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
], DxoRangeareaComponent);
export { DxoRangeareaComponent };
let DxoRangeareaModule = class DxoRangeareaModule {
};
DxoRangeareaModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoRangeareaComponent
        ],
        exports: [
            DxoRangeareaComponent
        ],
    })
], DxoRangeareaModule);
export { DxoRangeareaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VhcmVhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZC8iLCJzb3VyY2VzIjpbInJhbmdlYXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxvQ0FBb0M7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBd0VuRixJQUFhLHFCQUFxQixHQUFsQywyQkFBbUMsU0FBUSw0QkFBNEI7SUFPbkUsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQVZELElBQWMsV0FBVztRQUNyQixPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0NBVUosQ0FBQTs7WUFQcUQsZ0JBQWdCLHVCQUFyRCxRQUFRLFlBQUksSUFBSTtZQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7QUFSSixxQkFBcUI7SUFyRWpDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osYUFBYTtZQUNiLE1BQU07WUFDTixlQUFlO1lBQ2YsTUFBTTtZQUNOLEtBQUs7WUFDTCxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUTtZQUNSLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsT0FBTztZQUNQLGNBQWM7WUFDZCxXQUFXO1lBQ1gsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLE9BQU87WUFDUCxNQUFNO1lBQ04sZUFBZTtZQUNmLGVBQWU7WUFDZixZQUFZO1lBQ1osU0FBUztZQUNULGdCQUFnQjtZQUNoQixNQUFNO1lBQ04sT0FBTztZQUNQLFdBQVc7WUFDWCxVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsU0FBUztZQUNULGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLFdBQVc7WUFDWCxRQUFRO1lBQ1IsWUFBWTtZQUNaLE9BQU87WUFDUCxhQUFhO1lBQ2IsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLFVBQVU7WUFDVixVQUFVO1lBQ1YsT0FBTztZQUNQLFVBQVU7WUFDVixNQUFNO1lBQ04sZUFBZTtZQUNmLFlBQVk7WUFDWixTQUFTO1lBQ1QsT0FBTztTQUNWO2lCQWhFUSxFQUFFO0tBaUVkLENBQUM7SUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO0lBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO0dBUk4scUJBQXFCLENBY2pDO1NBZFkscUJBQXFCO0FBd0JsQyxJQUFhLGtCQUFrQixHQUEvQjtDQUFtQyxDQUFBO0FBQXRCLGtCQUFrQjtJQVI5QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixxQkFBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxxQkFBcUI7U0FDdEI7S0FDRixDQUFDO0dBQ1csa0JBQWtCLENBQUk7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeG9DaGFydENvbW1vblNlcmllc1NldHRpbmdzIH0gZnJvbSAnLi9iYXNlL2NoYXJ0LWNvbW1vbi1zZXJpZXMtc2V0dGluZ3MnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tcmFuZ2VhcmVhJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FnZ3JlZ2F0aW9uJyxcclxuICAgICAgICAnYXJlYScsXHJcbiAgICAgICAgJ2FyZ3VtZW50RmllbGQnLFxyXG4gICAgICAgICdheGlzJyxcclxuICAgICAgICAnYmFyJyxcclxuICAgICAgICAnYmFyT3ZlcmxhcEdyb3VwJyxcclxuICAgICAgICAnYmFyUGFkZGluZycsXHJcbiAgICAgICAgJ2JhcldpZHRoJyxcclxuICAgICAgICAnYm9yZGVyJyxcclxuICAgICAgICAnYnViYmxlJyxcclxuICAgICAgICAnY2FuZGxlc3RpY2snLFxyXG4gICAgICAgICdjbG9zZVZhbHVlRmllbGQnLFxyXG4gICAgICAgICdjb2xvcicsXHJcbiAgICAgICAgJ2Nvcm5lclJhZGl1cycsXHJcbiAgICAgICAgJ2Rhc2hTdHlsZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkYXJlYScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkYmFyJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRsaW5lJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRzcGxpbmUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZHNwbGluZWFyZWEnLFxyXG4gICAgICAgICdoaWdoVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ2hvdmVyTW9kZScsXHJcbiAgICAgICAgJ2hvdmVyU3R5bGUnLFxyXG4gICAgICAgICdpZ25vcmVFbXB0eVBvaW50cycsXHJcbiAgICAgICAgJ2lubmVyQ29sb3InLFxyXG4gICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgJ2xpbmUnLFxyXG4gICAgICAgICdsb3dWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnbWF4TGFiZWxDb3VudCcsXHJcbiAgICAgICAgJ21pbkJhclNpemUnLFxyXG4gICAgICAgICdvcGFjaXR5JyxcclxuICAgICAgICAnb3BlblZhbHVlRmllbGQnLFxyXG4gICAgICAgICdwYW5lJyxcclxuICAgICAgICAncG9pbnQnLFxyXG4gICAgICAgICdyYW5nZWFyZWEnLFxyXG4gICAgICAgICdyYW5nZWJhcicsXHJcbiAgICAgICAgJ3JhbmdlVmFsdWUxRmllbGQnLFxyXG4gICAgICAgICdyYW5nZVZhbHVlMkZpZWxkJyxcclxuICAgICAgICAncmVkdWN0aW9uJyxcclxuICAgICAgICAnc2NhdHRlcicsXHJcbiAgICAgICAgJ3NlbGVjdGlvbk1vZGUnLFxyXG4gICAgICAgICdzZWxlY3Rpb25TdHlsZScsXHJcbiAgICAgICAgJ3Nob3dJbkxlZ2VuZCcsXHJcbiAgICAgICAgJ3NpemVGaWVsZCcsXHJcbiAgICAgICAgJ3NwbGluZScsXHJcbiAgICAgICAgJ3NwbGluZWFyZWEnLFxyXG4gICAgICAgICdzdGFjaycsXHJcbiAgICAgICAgJ3N0YWNrZWRhcmVhJyxcclxuICAgICAgICAnc3RhY2tlZGJhcicsXHJcbiAgICAgICAgJ3N0YWNrZWRsaW5lJyxcclxuICAgICAgICAnc3RhY2tlZHNwbGluZScsXHJcbiAgICAgICAgJ3N0YWNrZWRzcGxpbmVhcmVhJyxcclxuICAgICAgICAnc3RlcGFyZWEnLFxyXG4gICAgICAgICdzdGVwbGluZScsXHJcbiAgICAgICAgJ3N0b2NrJyxcclxuICAgICAgICAndGFnRmllbGQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndmFsdWVFcnJvckJhcicsXHJcbiAgICAgICAgJ3ZhbHVlRmllbGQnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9SYW5nZWFyZWFDb21wb25lbnQgZXh0ZW5kcyBEeG9DaGFydENvbW1vblNlcmllc1NldHRpbmdzIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAncmFuZ2VhcmVhJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9SYW5nZWFyZWFDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1JhbmdlYXJlYUNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9SYW5nZWFyZWFNb2R1bGUgeyB9XHJcbiJdfQ==