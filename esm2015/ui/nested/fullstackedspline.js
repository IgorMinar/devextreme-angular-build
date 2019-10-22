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
let DxoFullstackedsplineComponent = class DxoFullstackedsplineComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'fullstackedspline';
    }
};
DxoFullstackedsplineComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
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
export { DxoFullstackedsplineComponent };
let DxoFullstackedsplineModule = class DxoFullstackedsplineModule {
};
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
export { DxoFullstackedsplineModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHN0YWNrZWRzcGxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsiZnVsbHN0YWNrZWRzcGxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQXdFbkYsSUFBYSw2QkFBNkIsR0FBMUMsbUNBQTJDLFNBQVEsNEJBQTRCO0lBTzNFLFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFWRCxJQUFjLFdBQVc7UUFDckIsT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDO0NBVUosQ0FBQTs7WUFQcUQsZ0JBQWdCLHVCQUFyRCxRQUFRLFlBQUksSUFBSTtZQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7QUFSSiw2QkFBNkI7SUFyRXpDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixNQUFNLEVBQUU7WUFDSixhQUFhO1lBQ2IsTUFBTTtZQUNOLGVBQWU7WUFDZixNQUFNO1lBQ04sS0FBSztZQUNMLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osVUFBVTtZQUNWLFFBQVE7WUFDUixRQUFRO1lBQ1IsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixPQUFPO1lBQ1AsY0FBYztZQUNkLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osT0FBTztZQUNQLE1BQU07WUFDTixlQUFlO1lBQ2YsZUFBZTtZQUNmLFlBQVk7WUFDWixTQUFTO1lBQ1QsZ0JBQWdCO1lBQ2hCLE1BQU07WUFDTixPQUFPO1lBQ1AsV0FBVztZQUNYLFVBQVU7WUFDVixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxTQUFTO1lBQ1QsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsV0FBVztZQUNYLFFBQVE7WUFDUixZQUFZO1lBQ1osT0FBTztZQUNQLGFBQWE7WUFDYixZQUFZO1lBQ1osYUFBYTtZQUNiLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLFVBQVU7WUFDVixPQUFPO1lBQ1AsVUFBVTtZQUNWLE1BQU07WUFDTixlQUFlO1lBQ2YsWUFBWTtZQUNaLFNBQVM7WUFDVCxPQUFPO1NBQ1Y7aUJBaEVRLEVBQUU7S0FpRWQsQ0FBQztJQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7R0FSTiw2QkFBNkIsQ0FjekM7U0FkWSw2QkFBNkI7QUF3QjFDLElBQWEsMEJBQTBCLEdBQXZDO0NBQTJDLENBQUE7QUFBOUIsMEJBQTBCO0lBUnRDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDZCQUE2QjtTQUM5QjtRQUNELE9BQU8sRUFBRTtZQUNQLDZCQUE2QjtTQUM5QjtLQUNGLENBQUM7R0FDVywwQkFBMEIsQ0FBSTtTQUE5QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER4b0NoYXJ0Q29tbW9uU2VyaWVzU2V0dGluZ3MgfSBmcm9tICcuL2Jhc2UvY2hhcnQtY29tbW9uLXNlcmllcy1zZXR0aW5ncyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1mdWxsc3RhY2tlZHNwbGluZScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhZ2dyZWdhdGlvbicsXHJcbiAgICAgICAgJ2FyZWEnLFxyXG4gICAgICAgICdhcmd1bWVudEZpZWxkJyxcclxuICAgICAgICAnYXhpcycsXHJcbiAgICAgICAgJ2JhcicsXHJcbiAgICAgICAgJ2Jhck92ZXJsYXBHcm91cCcsXHJcbiAgICAgICAgJ2JhclBhZGRpbmcnLFxyXG4gICAgICAgICdiYXJXaWR0aCcsXHJcbiAgICAgICAgJ2JvcmRlcicsXHJcbiAgICAgICAgJ2J1YmJsZScsXHJcbiAgICAgICAgJ2NhbmRsZXN0aWNrJyxcclxuICAgICAgICAnY2xvc2VWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnY29sb3InLFxyXG4gICAgICAgICdjb3JuZXJSYWRpdXMnLFxyXG4gICAgICAgICdkYXNoU3R5bGUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGFyZWEnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGJhcicsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkbGluZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2Vkc3BsaW5lJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRzcGxpbmVhcmVhJyxcclxuICAgICAgICAnaGlnaFZhbHVlRmllbGQnLFxyXG4gICAgICAgICdob3Zlck1vZGUnLFxyXG4gICAgICAgICdob3ZlclN0eWxlJyxcclxuICAgICAgICAnaWdub3JlRW1wdHlQb2ludHMnLFxyXG4gICAgICAgICdpbm5lckNvbG9yJyxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICdsaW5lJyxcclxuICAgICAgICAnbG93VmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ21heExhYmVsQ291bnQnLFxyXG4gICAgICAgICdtaW5CYXJTaXplJyxcclxuICAgICAgICAnb3BhY2l0eScsXHJcbiAgICAgICAgJ29wZW5WYWx1ZUZpZWxkJyxcclxuICAgICAgICAncGFuZScsXHJcbiAgICAgICAgJ3BvaW50JyxcclxuICAgICAgICAncmFuZ2VhcmVhJyxcclxuICAgICAgICAncmFuZ2ViYXInLFxyXG4gICAgICAgICdyYW5nZVZhbHVlMUZpZWxkJyxcclxuICAgICAgICAncmFuZ2VWYWx1ZTJGaWVsZCcsXHJcbiAgICAgICAgJ3JlZHVjdGlvbicsXHJcbiAgICAgICAgJ3NjYXR0ZXInLFxyXG4gICAgICAgICdzZWxlY3Rpb25Nb2RlJyxcclxuICAgICAgICAnc2VsZWN0aW9uU3R5bGUnLFxyXG4gICAgICAgICdzaG93SW5MZWdlbmQnLFxyXG4gICAgICAgICdzaXplRmllbGQnLFxyXG4gICAgICAgICdzcGxpbmUnLFxyXG4gICAgICAgICdzcGxpbmVhcmVhJyxcclxuICAgICAgICAnc3RhY2snLFxyXG4gICAgICAgICdzdGFja2VkYXJlYScsXHJcbiAgICAgICAgJ3N0YWNrZWRiYXInLFxyXG4gICAgICAgICdzdGFja2VkbGluZScsXHJcbiAgICAgICAgJ3N0YWNrZWRzcGxpbmUnLFxyXG4gICAgICAgICdzdGFja2Vkc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ3N0ZXBhcmVhJyxcclxuICAgICAgICAnc3RlcGxpbmUnLFxyXG4gICAgICAgICdzdG9jaycsXHJcbiAgICAgICAgJ3RhZ0ZpZWxkJyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZhbHVlRXJyb3JCYXInLFxyXG4gICAgICAgICd2YWx1ZUZpZWxkJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRnVsbHN0YWNrZWRzcGxpbmVDb21wb25lbnQgZXh0ZW5kcyBEeG9DaGFydENvbW1vblNlcmllc1NldHRpbmdzIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZnVsbHN0YWNrZWRzcGxpbmUnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0Z1bGxzdGFja2Vkc3BsaW5lQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9GdWxsc3RhY2tlZHNwbGluZUNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9GdWxsc3RhY2tlZHNwbGluZU1vZHVsZSB7IH1cclxuIl19