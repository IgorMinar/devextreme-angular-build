var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoChartCommonSeriesSettings } from './base/chart-common-series-settings';
var DxoStockComponent = (function (_super) {
    __extends(DxoStockComponent, _super);
    function DxoStockComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoStockComponent.prototype, "_optionPath", {
        get: function () {
            return 'stock';
        },
        enumerable: true,
        configurable: true
    });
    DxoStockComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-stock',
                    template: '',
                    styles: [''],
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
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoStockComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoStockComponent;
}(DxoChartCommonSeriesSettings));
export { DxoStockComponent };
var DxoStockModule = (function () {
    function DxoStockModule() {
    }
    DxoStockModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoStockComponent
                    ],
                    exports: [
                        DxoStockComponent
                    ],
                },] },
    ];
    return DxoStockModule;
}());
export { DxoStockModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvc3RvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztJQXdFNUMscUNBQTRCO0lBTy9ELDJCQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEO0lBVkQsc0JBQWMsMENBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2xCOzs7T0FBQTs7Z0JBekVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUM3QixNQUFNLEVBQUU7d0JBQ0osYUFBYTt3QkFDYixNQUFNO3dCQUNOLGVBQWU7d0JBQ2YsTUFBTTt3QkFDTixLQUFLO3dCQUNMLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsT0FBTzt3QkFDUCxjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixPQUFPO3dCQUNQLE1BQU07d0JBQ04sZUFBZTt3QkFDZixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxnQkFBZ0I7d0JBQ2hCLE1BQU07d0JBQ04sT0FBTzt3QkFDUCxXQUFXO3dCQUNYLFVBQVU7d0JBQ1Ysa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLFdBQVc7d0JBQ1gsU0FBUzt3QkFDVCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLFFBQVE7d0JBQ1IsWUFBWTt3QkFDWixPQUFPO3dCQUNQLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixVQUFVO3dCQUNWLFVBQVU7d0JBQ1YsT0FBTzt3QkFDUCxVQUFVO3dCQUNWLE1BQU07d0JBQ04sZUFBZTt3QkFDZixZQUFZO3dCQUNaLFNBQVM7d0JBQ1QsT0FBTztxQkFDVjtpQkFDSjs7OztnQkF4RVEsZ0JBQWdCLHVCQWdGUixRQUFRLFlBQUksSUFBSTtnQkFoRnhCLGdCQUFnQix1QkFpRlosSUFBSTs7NEJBN0dqQjtFQXFHdUMsNEJBQTRCO1NBQXRELGlCQUFpQjs7Ozs7Z0JBZ0I3QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjtxQkFDbEI7aUJBQ0Y7O3lCQTVIRDs7U0E2SGEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9DaGFydENvbW1vblNlcmllc1NldHRpbmdzIH0gZnJvbSAnLi9iYXNlL2NoYXJ0LWNvbW1vbi1zZXJpZXMtc2V0dGluZ3MnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tc3RvY2snLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWdncmVnYXRpb24nLFxyXG4gICAgICAgICdhcmVhJyxcclxuICAgICAgICAnYXJndW1lbnRGaWVsZCcsXHJcbiAgICAgICAgJ2F4aXMnLFxyXG4gICAgICAgICdiYXInLFxyXG4gICAgICAgICdiYXJPdmVybGFwR3JvdXAnLFxyXG4gICAgICAgICdiYXJQYWRkaW5nJyxcclxuICAgICAgICAnYmFyV2lkdGgnLFxyXG4gICAgICAgICdib3JkZXInLFxyXG4gICAgICAgICdidWJibGUnLFxyXG4gICAgICAgICdjYW5kbGVzdGljaycsXHJcbiAgICAgICAgJ2Nsb3NlVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnY29ybmVyUmFkaXVzJyxcclxuICAgICAgICAnZGFzaFN0eWxlJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRhcmVhJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRiYXInLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGxpbmUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZHNwbGluZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2Vkc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ2hpZ2hWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnaG92ZXJNb2RlJyxcclxuICAgICAgICAnaG92ZXJTdHlsZScsXHJcbiAgICAgICAgJ2lnbm9yZUVtcHR5UG9pbnRzJyxcclxuICAgICAgICAnaW5uZXJDb2xvcicsXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnbGluZScsXHJcbiAgICAgICAgJ2xvd1ZhbHVlRmllbGQnLFxyXG4gICAgICAgICdtYXhMYWJlbENvdW50JyxcclxuICAgICAgICAnbWluQmFyU2l6ZScsXHJcbiAgICAgICAgJ29wYWNpdHknLFxyXG4gICAgICAgICdvcGVuVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ3BhbmUnLFxyXG4gICAgICAgICdwb2ludCcsXHJcbiAgICAgICAgJ3JhbmdlYXJlYScsXHJcbiAgICAgICAgJ3JhbmdlYmFyJyxcclxuICAgICAgICAncmFuZ2VWYWx1ZTFGaWVsZCcsXHJcbiAgICAgICAgJ3JhbmdlVmFsdWUyRmllbGQnLFxyXG4gICAgICAgICdyZWR1Y3Rpb24nLFxyXG4gICAgICAgICdzY2F0dGVyJyxcclxuICAgICAgICAnc2VsZWN0aW9uTW9kZScsXHJcbiAgICAgICAgJ3NlbGVjdGlvblN0eWxlJyxcclxuICAgICAgICAnc2hvd0luTGVnZW5kJyxcclxuICAgICAgICAnc2l6ZUZpZWxkJyxcclxuICAgICAgICAnc3BsaW5lJyxcclxuICAgICAgICAnc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ3N0YWNrJyxcclxuICAgICAgICAnc3RhY2tlZGFyZWEnLFxyXG4gICAgICAgICdzdGFja2VkYmFyJyxcclxuICAgICAgICAnc3RhY2tlZGxpbmUnLFxyXG4gICAgICAgICdzdGFja2Vkc3BsaW5lJyxcclxuICAgICAgICAnc3RhY2tlZHNwbGluZWFyZWEnLFxyXG4gICAgICAgICdzdGVwYXJlYScsXHJcbiAgICAgICAgJ3N0ZXBsaW5lJyxcclxuICAgICAgICAnc3RvY2snLFxyXG4gICAgICAgICd0YWdGaWVsZCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd2YWx1ZUVycm9yQmFyJyxcclxuICAgICAgICAndmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1N0b2NrQ29tcG9uZW50IGV4dGVuZHMgRHhvQ2hhcnRDb21tb25TZXJpZXNTZXR0aW5ncyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3N0b2NrJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9TdG9ja0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvU3RvY2tDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU3RvY2tNb2R1bGUgeyB9XHJcbiJdfQ==