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
var DxoScatterComponent = (function (_super) {
    __extends(DxoScatterComponent, _super);
    function DxoScatterComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoScatterComponent.prototype, "_optionPath", {
        get: function () {
            return 'scatter';
        },
        enumerable: true,
        configurable: true
    });
    DxoScatterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-scatter',
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
                        'width',
                        'closed'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoScatterComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoScatterComponent;
}(DxoChartCommonSeriesSettings));
export { DxoScatterComponent };
var DxoScatterModule = (function () {
    function DxoScatterModule() {
    }
    DxoScatterModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoScatterComponent
                    ],
                    exports: [
                        DxoScatterComponent
                    ],
                },] },
    ];
    return DxoScatterModule;
}());
export { DxoScatterModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9zY2F0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7SUF5RTFDLHVDQUE0QjtJQU9qRSw2QkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDtJQVZELHNCQUFjLDRDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUNwQjs7O09BQUE7O2dCQTFFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsTUFBTSxFQUFFO3dCQUNKLGFBQWE7d0JBQ2IsTUFBTTt3QkFDTixlQUFlO3dCQUNmLE1BQU07d0JBQ04sS0FBSzt3QkFDTCxpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLE9BQU87d0JBQ1AsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osT0FBTzt3QkFDUCxNQUFNO3dCQUNOLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixZQUFZO3dCQUNaLFNBQVM7d0JBQ1QsZ0JBQWdCO3dCQUNoQixNQUFNO3dCQUNOLE9BQU87d0JBQ1AsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLFNBQVM7d0JBQ1QsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxRQUFRO3dCQUNSLFlBQVk7d0JBQ1osT0FBTzt3QkFDUCxhQUFhO3dCQUNiLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsVUFBVTt3QkFDVixVQUFVO3dCQUNWLE9BQU87d0JBQ1AsVUFBVTt3QkFDVixNQUFNO3dCQUNOLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixTQUFTO3dCQUNULE9BQU87d0JBQ1AsUUFBUTtxQkFDWDtpQkFDSjs7OztnQkF6RVEsZ0JBQWdCLHVCQWlGUixRQUFRLFlBQUksSUFBSTtnQkFqRnhCLGdCQUFnQix1QkFrRlosSUFBSTs7OEJBOUdqQjtFQXNHeUMsNEJBQTRCO1NBQXhELG1CQUFtQjs7Ozs7Z0JBZ0IvQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjtxQkFDcEI7aUJBQ0Y7OzJCQTdIRDs7U0E4SGEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0NoYXJ0Q29tbW9uU2VyaWVzU2V0dGluZ3MgfSBmcm9tICcuL2Jhc2UvY2hhcnQtY29tbW9uLXNlcmllcy1zZXR0aW5ncyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1zY2F0dGVyJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FnZ3JlZ2F0aW9uJyxcclxuICAgICAgICAnYXJlYScsXHJcbiAgICAgICAgJ2FyZ3VtZW50RmllbGQnLFxyXG4gICAgICAgICdheGlzJyxcclxuICAgICAgICAnYmFyJyxcclxuICAgICAgICAnYmFyT3ZlcmxhcEdyb3VwJyxcclxuICAgICAgICAnYmFyUGFkZGluZycsXHJcbiAgICAgICAgJ2JhcldpZHRoJyxcclxuICAgICAgICAnYm9yZGVyJyxcclxuICAgICAgICAnYnViYmxlJyxcclxuICAgICAgICAnY2FuZGxlc3RpY2snLFxyXG4gICAgICAgICdjbG9zZVZhbHVlRmllbGQnLFxyXG4gICAgICAgICdjb2xvcicsXHJcbiAgICAgICAgJ2Nvcm5lclJhZGl1cycsXHJcbiAgICAgICAgJ2Rhc2hTdHlsZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkYXJlYScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkYmFyJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRsaW5lJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRzcGxpbmUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZHNwbGluZWFyZWEnLFxyXG4gICAgICAgICdoaWdoVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ2hvdmVyTW9kZScsXHJcbiAgICAgICAgJ2hvdmVyU3R5bGUnLFxyXG4gICAgICAgICdpZ25vcmVFbXB0eVBvaW50cycsXHJcbiAgICAgICAgJ2lubmVyQ29sb3InLFxyXG4gICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgJ2xpbmUnLFxyXG4gICAgICAgICdsb3dWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnbWF4TGFiZWxDb3VudCcsXHJcbiAgICAgICAgJ21pbkJhclNpemUnLFxyXG4gICAgICAgICdvcGFjaXR5JyxcclxuICAgICAgICAnb3BlblZhbHVlRmllbGQnLFxyXG4gICAgICAgICdwYW5lJyxcclxuICAgICAgICAncG9pbnQnLFxyXG4gICAgICAgICdyYW5nZWFyZWEnLFxyXG4gICAgICAgICdyYW5nZWJhcicsXHJcbiAgICAgICAgJ3JhbmdlVmFsdWUxRmllbGQnLFxyXG4gICAgICAgICdyYW5nZVZhbHVlMkZpZWxkJyxcclxuICAgICAgICAncmVkdWN0aW9uJyxcclxuICAgICAgICAnc2NhdHRlcicsXHJcbiAgICAgICAgJ3NlbGVjdGlvbk1vZGUnLFxyXG4gICAgICAgICdzZWxlY3Rpb25TdHlsZScsXHJcbiAgICAgICAgJ3Nob3dJbkxlZ2VuZCcsXHJcbiAgICAgICAgJ3NpemVGaWVsZCcsXHJcbiAgICAgICAgJ3NwbGluZScsXHJcbiAgICAgICAgJ3NwbGluZWFyZWEnLFxyXG4gICAgICAgICdzdGFjaycsXHJcbiAgICAgICAgJ3N0YWNrZWRhcmVhJyxcclxuICAgICAgICAnc3RhY2tlZGJhcicsXHJcbiAgICAgICAgJ3N0YWNrZWRsaW5lJyxcclxuICAgICAgICAnc3RhY2tlZHNwbGluZScsXHJcbiAgICAgICAgJ3N0YWNrZWRzcGxpbmVhcmVhJyxcclxuICAgICAgICAnc3RlcGFyZWEnLFxyXG4gICAgICAgICdzdGVwbGluZScsXHJcbiAgICAgICAgJ3N0b2NrJyxcclxuICAgICAgICAndGFnRmllbGQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndmFsdWVFcnJvckJhcicsXHJcbiAgICAgICAgJ3ZhbHVlRmllbGQnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICdjbG9zZWQnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TY2F0dGVyQ29tcG9uZW50IGV4dGVuZHMgRHhvQ2hhcnRDb21tb25TZXJpZXNTZXR0aW5ncyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3NjYXR0ZXInO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b1NjYXR0ZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1NjYXR0ZXJDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU2NhdHRlck1vZHVsZSB7IH1cclxuIl19