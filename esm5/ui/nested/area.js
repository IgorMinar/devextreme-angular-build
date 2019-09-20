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
var DxoAreaComponent = (function (_super) {
    __extends(DxoAreaComponent, _super);
    function DxoAreaComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoAreaComponent.prototype, "_optionPath", {
        get: function () {
            return 'area';
        },
        enumerable: true,
        configurable: true
    });
    DxoAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-area',
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
    DxoAreaComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoAreaComponent;
}(DxoChartCommonSeriesSettings));
export { DxoAreaComponent };
var DxoAreaModule = (function () {
    function DxoAreaModule() {
    }
    DxoAreaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoAreaComponent
                    ],
                    exports: [
                        DxoAreaComponent
                    ],
                },] },
    ];
    return DxoAreaModule;
}());
export { DxoAreaModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9hcmVhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7SUF5RTdDLG9DQUE0QjtJQU85RCwwQkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDtJQVZELHNCQUFjLHlDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNqQjs7O09BQUE7O2dCQTFFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsTUFBTSxFQUFFO3dCQUNKLGFBQWE7d0JBQ2IsTUFBTTt3QkFDTixlQUFlO3dCQUNmLE1BQU07d0JBQ04sS0FBSzt3QkFDTCxpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLE9BQU87d0JBQ1AsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osT0FBTzt3QkFDUCxNQUFNO3dCQUNOLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixZQUFZO3dCQUNaLFNBQVM7d0JBQ1QsZ0JBQWdCO3dCQUNoQixNQUFNO3dCQUNOLE9BQU87d0JBQ1AsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLFNBQVM7d0JBQ1QsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxRQUFRO3dCQUNSLFlBQVk7d0JBQ1osT0FBTzt3QkFDUCxhQUFhO3dCQUNiLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsVUFBVTt3QkFDVixVQUFVO3dCQUNWLE9BQU87d0JBQ1AsVUFBVTt3QkFDVixNQUFNO3dCQUNOLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixTQUFTO3dCQUNULE9BQU87d0JBQ1AsUUFBUTtxQkFDWDtpQkFDSjs7OztnQkF6RVEsZ0JBQWdCLHVCQWlGUixRQUFRLFlBQUksSUFBSTtnQkFqRnhCLGdCQUFnQix1QkFrRlosSUFBSTs7MkJBOUdqQjtFQXNHc0MsNEJBQTRCO1NBQXJELGdCQUFnQjs7Ozs7Z0JBZ0I1QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjtxQkFDakI7aUJBQ0Y7O3dCQTdIRDs7U0E4SGEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9DaGFydENvbW1vblNlcmllc1NldHRpbmdzIH0gZnJvbSAnLi9iYXNlL2NoYXJ0LWNvbW1vbi1zZXJpZXMtc2V0dGluZ3MnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tYXJlYScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhZ2dyZWdhdGlvbicsXHJcbiAgICAgICAgJ2FyZWEnLFxyXG4gICAgICAgICdhcmd1bWVudEZpZWxkJyxcclxuICAgICAgICAnYXhpcycsXHJcbiAgICAgICAgJ2JhcicsXHJcbiAgICAgICAgJ2Jhck92ZXJsYXBHcm91cCcsXHJcbiAgICAgICAgJ2JhclBhZGRpbmcnLFxyXG4gICAgICAgICdiYXJXaWR0aCcsXHJcbiAgICAgICAgJ2JvcmRlcicsXHJcbiAgICAgICAgJ2J1YmJsZScsXHJcbiAgICAgICAgJ2NhbmRsZXN0aWNrJyxcclxuICAgICAgICAnY2xvc2VWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnY29sb3InLFxyXG4gICAgICAgICdjb3JuZXJSYWRpdXMnLFxyXG4gICAgICAgICdkYXNoU3R5bGUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGFyZWEnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGJhcicsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkbGluZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2Vkc3BsaW5lJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRzcGxpbmVhcmVhJyxcclxuICAgICAgICAnaGlnaFZhbHVlRmllbGQnLFxyXG4gICAgICAgICdob3Zlck1vZGUnLFxyXG4gICAgICAgICdob3ZlclN0eWxlJyxcclxuICAgICAgICAnaWdub3JlRW1wdHlQb2ludHMnLFxyXG4gICAgICAgICdpbm5lckNvbG9yJyxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICdsaW5lJyxcclxuICAgICAgICAnbG93VmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ21heExhYmVsQ291bnQnLFxyXG4gICAgICAgICdtaW5CYXJTaXplJyxcclxuICAgICAgICAnb3BhY2l0eScsXHJcbiAgICAgICAgJ29wZW5WYWx1ZUZpZWxkJyxcclxuICAgICAgICAncGFuZScsXHJcbiAgICAgICAgJ3BvaW50JyxcclxuICAgICAgICAncmFuZ2VhcmVhJyxcclxuICAgICAgICAncmFuZ2ViYXInLFxyXG4gICAgICAgICdyYW5nZVZhbHVlMUZpZWxkJyxcclxuICAgICAgICAncmFuZ2VWYWx1ZTJGaWVsZCcsXHJcbiAgICAgICAgJ3JlZHVjdGlvbicsXHJcbiAgICAgICAgJ3NjYXR0ZXInLFxyXG4gICAgICAgICdzZWxlY3Rpb25Nb2RlJyxcclxuICAgICAgICAnc2VsZWN0aW9uU3R5bGUnLFxyXG4gICAgICAgICdzaG93SW5MZWdlbmQnLFxyXG4gICAgICAgICdzaXplRmllbGQnLFxyXG4gICAgICAgICdzcGxpbmUnLFxyXG4gICAgICAgICdzcGxpbmVhcmVhJyxcclxuICAgICAgICAnc3RhY2snLFxyXG4gICAgICAgICdzdGFja2VkYXJlYScsXHJcbiAgICAgICAgJ3N0YWNrZWRiYXInLFxyXG4gICAgICAgICdzdGFja2VkbGluZScsXHJcbiAgICAgICAgJ3N0YWNrZWRzcGxpbmUnLFxyXG4gICAgICAgICdzdGFja2Vkc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ3N0ZXBhcmVhJyxcclxuICAgICAgICAnc3RlcGxpbmUnLFxyXG4gICAgICAgICdzdG9jaycsXHJcbiAgICAgICAgJ3RhZ0ZpZWxkJyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZhbHVlRXJyb3JCYXInLFxyXG4gICAgICAgICd2YWx1ZUZpZWxkJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnY2xvc2VkJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQXJlYUNvbXBvbmVudCBleHRlbmRzIER4b0NoYXJ0Q29tbW9uU2VyaWVzU2V0dGluZ3Mge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdhcmVhJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9BcmVhQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9BcmVhQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0FyZWFNb2R1bGUgeyB9XHJcbiJdfQ==