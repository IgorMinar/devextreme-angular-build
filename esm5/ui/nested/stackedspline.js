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
var DxoStackedsplineComponent = (function (_super) {
    __extends(DxoStackedsplineComponent, _super);
    function DxoStackedsplineComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoStackedsplineComponent.prototype, "_optionPath", {
        get: function () {
            return 'stackedspline';
        },
        enumerable: true,
        configurable: true
    });
    DxoStackedsplineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-stackedspline',
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
    DxoStackedsplineComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoStackedsplineComponent;
}(DxoChartCommonSeriesSettings));
export { DxoStackedsplineComponent };
var DxoStackedsplineModule = (function () {
    function DxoStackedsplineModule() {
    }
    DxoStackedsplineModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoStackedsplineComponent
                    ],
                    exports: [
                        DxoStackedsplineComponent
                    ],
                },] },
    ];
    return DxoStackedsplineModule;
}());
export { DxoStackedsplineModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tlZHNwbGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9zdGFja2Vkc3BsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7SUF3RXBDLDZDQUE0QjtJQU92RSxtQ0FBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDtJQVZELHNCQUFjLGtEQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLGVBQWUsQ0FBQztTQUMxQjs7O09BQUE7O2dCQXpFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUM3QixNQUFNLEVBQUU7d0JBQ0osYUFBYTt3QkFDYixNQUFNO3dCQUNOLGVBQWU7d0JBQ2YsTUFBTTt3QkFDTixLQUFLO3dCQUNMLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsT0FBTzt3QkFDUCxjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixPQUFPO3dCQUNQLE1BQU07d0JBQ04sZUFBZTt3QkFDZixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxnQkFBZ0I7d0JBQ2hCLE1BQU07d0JBQ04sT0FBTzt3QkFDUCxXQUFXO3dCQUNYLFVBQVU7d0JBQ1Ysa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLFdBQVc7d0JBQ1gsU0FBUzt3QkFDVCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLFFBQVE7d0JBQ1IsWUFBWTt3QkFDWixPQUFPO3dCQUNQLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixVQUFVO3dCQUNWLFVBQVU7d0JBQ1YsT0FBTzt3QkFDUCxVQUFVO3dCQUNWLE1BQU07d0JBQ04sZUFBZTt3QkFDZixZQUFZO3dCQUNaLFNBQVM7d0JBQ1QsT0FBTztxQkFDVjtpQkFDSjs7OztnQkF4RVEsZ0JBQWdCLHVCQWdGUixRQUFRLFlBQUksSUFBSTtnQkFoRnhCLGdCQUFnQix1QkFpRlosSUFBSTs7b0NBN0dqQjtFQXFHK0MsNEJBQTRCO1NBQTlELHlCQUF5Qjs7Ozs7Z0JBZ0JyQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHlCQUF5QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlCQUF5QjtxQkFDMUI7aUJBQ0Y7O2lDQTVIRDs7U0E2SGEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0NoYXJ0Q29tbW9uU2VyaWVzU2V0dGluZ3MgfSBmcm9tICcuL2Jhc2UvY2hhcnQtY29tbW9uLXNlcmllcy1zZXR0aW5ncyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1zdGFja2Vkc3BsaW5lJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FnZ3JlZ2F0aW9uJyxcclxuICAgICAgICAnYXJlYScsXHJcbiAgICAgICAgJ2FyZ3VtZW50RmllbGQnLFxyXG4gICAgICAgICdheGlzJyxcclxuICAgICAgICAnYmFyJyxcclxuICAgICAgICAnYmFyT3ZlcmxhcEdyb3VwJyxcclxuICAgICAgICAnYmFyUGFkZGluZycsXHJcbiAgICAgICAgJ2JhcldpZHRoJyxcclxuICAgICAgICAnYm9yZGVyJyxcclxuICAgICAgICAnYnViYmxlJyxcclxuICAgICAgICAnY2FuZGxlc3RpY2snLFxyXG4gICAgICAgICdjbG9zZVZhbHVlRmllbGQnLFxyXG4gICAgICAgICdjb2xvcicsXHJcbiAgICAgICAgJ2Nvcm5lclJhZGl1cycsXHJcbiAgICAgICAgJ2Rhc2hTdHlsZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkYXJlYScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkYmFyJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRsaW5lJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRzcGxpbmUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZHNwbGluZWFyZWEnLFxyXG4gICAgICAgICdoaWdoVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ2hvdmVyTW9kZScsXHJcbiAgICAgICAgJ2hvdmVyU3R5bGUnLFxyXG4gICAgICAgICdpZ25vcmVFbXB0eVBvaW50cycsXHJcbiAgICAgICAgJ2lubmVyQ29sb3InLFxyXG4gICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgJ2xpbmUnLFxyXG4gICAgICAgICdsb3dWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnbWF4TGFiZWxDb3VudCcsXHJcbiAgICAgICAgJ21pbkJhclNpemUnLFxyXG4gICAgICAgICdvcGFjaXR5JyxcclxuICAgICAgICAnb3BlblZhbHVlRmllbGQnLFxyXG4gICAgICAgICdwYW5lJyxcclxuICAgICAgICAncG9pbnQnLFxyXG4gICAgICAgICdyYW5nZWFyZWEnLFxyXG4gICAgICAgICdyYW5nZWJhcicsXHJcbiAgICAgICAgJ3JhbmdlVmFsdWUxRmllbGQnLFxyXG4gICAgICAgICdyYW5nZVZhbHVlMkZpZWxkJyxcclxuICAgICAgICAncmVkdWN0aW9uJyxcclxuICAgICAgICAnc2NhdHRlcicsXHJcbiAgICAgICAgJ3NlbGVjdGlvbk1vZGUnLFxyXG4gICAgICAgICdzZWxlY3Rpb25TdHlsZScsXHJcbiAgICAgICAgJ3Nob3dJbkxlZ2VuZCcsXHJcbiAgICAgICAgJ3NpemVGaWVsZCcsXHJcbiAgICAgICAgJ3NwbGluZScsXHJcbiAgICAgICAgJ3NwbGluZWFyZWEnLFxyXG4gICAgICAgICdzdGFjaycsXHJcbiAgICAgICAgJ3N0YWNrZWRhcmVhJyxcclxuICAgICAgICAnc3RhY2tlZGJhcicsXHJcbiAgICAgICAgJ3N0YWNrZWRsaW5lJyxcclxuICAgICAgICAnc3RhY2tlZHNwbGluZScsXHJcbiAgICAgICAgJ3N0YWNrZWRzcGxpbmVhcmVhJyxcclxuICAgICAgICAnc3RlcGFyZWEnLFxyXG4gICAgICAgICdzdGVwbGluZScsXHJcbiAgICAgICAgJ3N0b2NrJyxcclxuICAgICAgICAndGFnRmllbGQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndmFsdWVFcnJvckJhcicsXHJcbiAgICAgICAgJ3ZhbHVlRmllbGQnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TdGFja2Vkc3BsaW5lQ29tcG9uZW50IGV4dGVuZHMgRHhvQ2hhcnRDb21tb25TZXJpZXNTZXR0aW5ncyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3N0YWNrZWRzcGxpbmUnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b1N0YWNrZWRzcGxpbmVDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1N0YWNrZWRzcGxpbmVDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU3RhY2tlZHNwbGluZU1vZHVsZSB7IH1cclxuIl19