/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoChartCommonSeriesSettings } from './base/chart-common-series-settings';
let DxoBarComponent = class DxoBarComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'bar';
    }
};
DxoBarComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-bar',
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
            'width',
            'closed'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoBarComponent);
export { DxoBarComponent };
let DxoBarModule = class DxoBarModule {
};
DxoBarModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoBarComponent
        ],
        exports: [
            DxoBarComponent
        ],
    })
], DxoBarModule);
export { DxoBarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2Jhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBeUVuRixJQUFhLGVBQWUsR0FBNUIscUJBQTZCLFNBQVEsNEJBQTRCO0lBTzdELFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFWRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBVUosQ0FBQTtBQWRZLGVBQWU7SUF0RTNCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osYUFBYTtZQUNiLE1BQU07WUFDTixlQUFlO1lBQ2YsTUFBTTtZQUNOLEtBQUs7WUFDTCxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUTtZQUNSLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsT0FBTztZQUNQLGNBQWM7WUFDZCxXQUFXO1lBQ1gsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLE9BQU87WUFDUCxNQUFNO1lBQ04sZUFBZTtZQUNmLGVBQWU7WUFDZixZQUFZO1lBQ1osU0FBUztZQUNULGdCQUFnQjtZQUNoQixNQUFNO1lBQ04sT0FBTztZQUNQLFdBQVc7WUFDWCxVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsU0FBUztZQUNULGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLFdBQVc7WUFDWCxRQUFRO1lBQ1IsWUFBWTtZQUNaLE9BQU87WUFDUCxhQUFhO1lBQ2IsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLFVBQVU7WUFDVixVQUFVO1lBQ1YsT0FBTztZQUNQLFVBQVU7WUFDVixNQUFNO1lBQ04sZUFBZTtZQUNmLFlBQVk7WUFDWixTQUFTO1lBQ1QsT0FBTztZQUNQLFFBQVE7U0FDWDtpQkFqRVEsRUFBRTtLQWtFZCxDQUFDO0lBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQVJuQyxlQUFlLENBYzNCO1NBZFksZUFBZTtBQXdCNUIsSUFBYSxZQUFZLEdBQXpCO0NBQTZCLENBQUE7QUFBaEIsWUFBWTtJQVJ4QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixlQUFlO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsZUFBZTtTQUNoQjtLQUNGLENBQUM7R0FDVyxZQUFZLENBQUk7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0NoYXJ0Q29tbW9uU2VyaWVzU2V0dGluZ3MgfSBmcm9tICcuL2Jhc2UvY2hhcnQtY29tbW9uLXNlcmllcy1zZXR0aW5ncyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1iYXInLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWdncmVnYXRpb24nLFxyXG4gICAgICAgICdhcmVhJyxcclxuICAgICAgICAnYXJndW1lbnRGaWVsZCcsXHJcbiAgICAgICAgJ2F4aXMnLFxyXG4gICAgICAgICdiYXInLFxyXG4gICAgICAgICdiYXJPdmVybGFwR3JvdXAnLFxyXG4gICAgICAgICdiYXJQYWRkaW5nJyxcclxuICAgICAgICAnYmFyV2lkdGgnLFxyXG4gICAgICAgICdib3JkZXInLFxyXG4gICAgICAgICdidWJibGUnLFxyXG4gICAgICAgICdjYW5kbGVzdGljaycsXHJcbiAgICAgICAgJ2Nsb3NlVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnY29ybmVyUmFkaXVzJyxcclxuICAgICAgICAnZGFzaFN0eWxlJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRhcmVhJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRiYXInLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGxpbmUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZHNwbGluZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2Vkc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ2hpZ2hWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnaG92ZXJNb2RlJyxcclxuICAgICAgICAnaG92ZXJTdHlsZScsXHJcbiAgICAgICAgJ2lnbm9yZUVtcHR5UG9pbnRzJyxcclxuICAgICAgICAnaW5uZXJDb2xvcicsXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnbGluZScsXHJcbiAgICAgICAgJ2xvd1ZhbHVlRmllbGQnLFxyXG4gICAgICAgICdtYXhMYWJlbENvdW50JyxcclxuICAgICAgICAnbWluQmFyU2l6ZScsXHJcbiAgICAgICAgJ29wYWNpdHknLFxyXG4gICAgICAgICdvcGVuVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ3BhbmUnLFxyXG4gICAgICAgICdwb2ludCcsXHJcbiAgICAgICAgJ3JhbmdlYXJlYScsXHJcbiAgICAgICAgJ3JhbmdlYmFyJyxcclxuICAgICAgICAncmFuZ2VWYWx1ZTFGaWVsZCcsXHJcbiAgICAgICAgJ3JhbmdlVmFsdWUyRmllbGQnLFxyXG4gICAgICAgICdyZWR1Y3Rpb24nLFxyXG4gICAgICAgICdzY2F0dGVyJyxcclxuICAgICAgICAnc2VsZWN0aW9uTW9kZScsXHJcbiAgICAgICAgJ3NlbGVjdGlvblN0eWxlJyxcclxuICAgICAgICAnc2hvd0luTGVnZW5kJyxcclxuICAgICAgICAnc2l6ZUZpZWxkJyxcclxuICAgICAgICAnc3BsaW5lJyxcclxuICAgICAgICAnc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ3N0YWNrJyxcclxuICAgICAgICAnc3RhY2tlZGFyZWEnLFxyXG4gICAgICAgICdzdGFja2VkYmFyJyxcclxuICAgICAgICAnc3RhY2tlZGxpbmUnLFxyXG4gICAgICAgICdzdGFja2Vkc3BsaW5lJyxcclxuICAgICAgICAnc3RhY2tlZHNwbGluZWFyZWEnLFxyXG4gICAgICAgICdzdGVwYXJlYScsXHJcbiAgICAgICAgJ3N0ZXBsaW5lJyxcclxuICAgICAgICAnc3RvY2snLFxyXG4gICAgICAgICd0YWdGaWVsZCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd2YWx1ZUVycm9yQmFyJyxcclxuICAgICAgICAndmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgJ2Nsb3NlZCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0JhckNvbXBvbmVudCBleHRlbmRzIER4b0NoYXJ0Q29tbW9uU2VyaWVzU2V0dGluZ3Mge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdiYXInO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0JhckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQmFyQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0Jhck1vZHVsZSB7IH1cclxuIl19