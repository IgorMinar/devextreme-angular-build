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
var DxoBarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoBarComponent, _super);
    function DxoBarComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoBarComponent.prototype, "_optionPath", {
        get: function () {
            return 'bar';
        },
        enumerable: true,
        configurable: true
    });
    DxoBarComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
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
        tslib_1.__param(1, Host())
    ], DxoBarComponent);
    return DxoBarComponent;
}(DxoChartCommonSeriesSettings));
export { DxoBarComponent };
var DxoBarModule = /** @class */ (function () {
    function DxoBarModule() {
    }
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
    return DxoBarModule;
}());
export { DxoBarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZC8iLCJzb3VyY2VzIjpbImJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxvQ0FBb0M7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBeUVuRjtJQUFxQywyQ0FBNEI7SUFPN0QseUJBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQVZELHNCQUFjLHdDQUFXO2FBQXpCO1lBQ0ksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7O2dCQUdpRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO2dCQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7SUFSSixlQUFlO1FBdEUzQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixhQUFhO2dCQUNiLE1BQU07Z0JBQ04sZUFBZTtnQkFDZixNQUFNO2dCQUNOLEtBQUs7Z0JBQ0wsaUJBQWlCO2dCQUNqQixZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsUUFBUTtnQkFDUixRQUFRO2dCQUNSLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxpQkFBaUI7Z0JBQ2pCLGdCQUFnQjtnQkFDaEIsaUJBQWlCO2dCQUNqQixtQkFBbUI7Z0JBQ25CLHVCQUF1QjtnQkFDdkIsZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixZQUFZO2dCQUNaLE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixlQUFlO2dCQUNmLGVBQWU7Z0JBQ2YsWUFBWTtnQkFDWixTQUFTO2dCQUNULGdCQUFnQjtnQkFDaEIsTUFBTTtnQkFDTixPQUFPO2dCQUNQLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixrQkFBa0I7Z0JBQ2xCLGtCQUFrQjtnQkFDbEIsV0FBVztnQkFDWCxTQUFTO2dCQUNULGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsUUFBUTtnQkFDUixZQUFZO2dCQUNaLE9BQU87Z0JBQ1AsYUFBYTtnQkFDYixZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsZUFBZTtnQkFDZixtQkFBbUI7Z0JBQ25CLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsTUFBTTtnQkFDTixlQUFlO2dCQUNmLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxPQUFPO2dCQUNQLFFBQVE7YUFDWDtxQkFqRVEsRUFBRTtTQWtFZCxDQUFDO1FBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQVJOLGVBQWUsQ0FjM0I7SUFBRCxzQkFBQztDQUFBLEFBZEQsQ0FBcUMsNEJBQTRCLEdBY2hFO1NBZFksZUFBZTtBQXdCNUI7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFSeEIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGVBQWU7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZUFBZTthQUNoQjtTQUNGLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER4b0NoYXJ0Q29tbW9uU2VyaWVzU2V0dGluZ3MgfSBmcm9tICcuL2Jhc2UvY2hhcnQtY29tbW9uLXNlcmllcy1zZXR0aW5ncyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1iYXInLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWdncmVnYXRpb24nLFxyXG4gICAgICAgICdhcmVhJyxcclxuICAgICAgICAnYXJndW1lbnRGaWVsZCcsXHJcbiAgICAgICAgJ2F4aXMnLFxyXG4gICAgICAgICdiYXInLFxyXG4gICAgICAgICdiYXJPdmVybGFwR3JvdXAnLFxyXG4gICAgICAgICdiYXJQYWRkaW5nJyxcclxuICAgICAgICAnYmFyV2lkdGgnLFxyXG4gICAgICAgICdib3JkZXInLFxyXG4gICAgICAgICdidWJibGUnLFxyXG4gICAgICAgICdjYW5kbGVzdGljaycsXHJcbiAgICAgICAgJ2Nsb3NlVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnY29ybmVyUmFkaXVzJyxcclxuICAgICAgICAnZGFzaFN0eWxlJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRhcmVhJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRiYXInLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGxpbmUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZHNwbGluZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2Vkc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ2hpZ2hWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnaG92ZXJNb2RlJyxcclxuICAgICAgICAnaG92ZXJTdHlsZScsXHJcbiAgICAgICAgJ2lnbm9yZUVtcHR5UG9pbnRzJyxcclxuICAgICAgICAnaW5uZXJDb2xvcicsXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnbGluZScsXHJcbiAgICAgICAgJ2xvd1ZhbHVlRmllbGQnLFxyXG4gICAgICAgICdtYXhMYWJlbENvdW50JyxcclxuICAgICAgICAnbWluQmFyU2l6ZScsXHJcbiAgICAgICAgJ29wYWNpdHknLFxyXG4gICAgICAgICdvcGVuVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ3BhbmUnLFxyXG4gICAgICAgICdwb2ludCcsXHJcbiAgICAgICAgJ3JhbmdlYXJlYScsXHJcbiAgICAgICAgJ3JhbmdlYmFyJyxcclxuICAgICAgICAncmFuZ2VWYWx1ZTFGaWVsZCcsXHJcbiAgICAgICAgJ3JhbmdlVmFsdWUyRmllbGQnLFxyXG4gICAgICAgICdyZWR1Y3Rpb24nLFxyXG4gICAgICAgICdzY2F0dGVyJyxcclxuICAgICAgICAnc2VsZWN0aW9uTW9kZScsXHJcbiAgICAgICAgJ3NlbGVjdGlvblN0eWxlJyxcclxuICAgICAgICAnc2hvd0luTGVnZW5kJyxcclxuICAgICAgICAnc2l6ZUZpZWxkJyxcclxuICAgICAgICAnc3BsaW5lJyxcclxuICAgICAgICAnc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ3N0YWNrJyxcclxuICAgICAgICAnc3RhY2tlZGFyZWEnLFxyXG4gICAgICAgICdzdGFja2VkYmFyJyxcclxuICAgICAgICAnc3RhY2tlZGxpbmUnLFxyXG4gICAgICAgICdzdGFja2Vkc3BsaW5lJyxcclxuICAgICAgICAnc3RhY2tlZHNwbGluZWFyZWEnLFxyXG4gICAgICAgICdzdGVwYXJlYScsXHJcbiAgICAgICAgJ3N0ZXBsaW5lJyxcclxuICAgICAgICAnc3RvY2snLFxyXG4gICAgICAgICd0YWdGaWVsZCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd2YWx1ZUVycm9yQmFyJyxcclxuICAgICAgICAndmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgJ2Nsb3NlZCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0JhckNvbXBvbmVudCBleHRlbmRzIER4b0NoYXJ0Q29tbW9uU2VyaWVzU2V0dGluZ3Mge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdiYXInO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0JhckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQmFyQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0Jhck1vZHVsZSB7IH1cclxuIl19