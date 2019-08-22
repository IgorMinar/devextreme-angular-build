/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2Jhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBeUVuRjtJQUFxQywyQ0FBNEI7SUFPN0QseUJBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQVZELHNCQUFjLHdDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUpRLGVBQWU7UUF0RTNCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLGFBQWE7Z0JBQ2IsTUFBTTtnQkFDTixlQUFlO2dCQUNmLE1BQU07Z0JBQ04sS0FBSztnQkFDTCxpQkFBaUI7Z0JBQ2pCLFlBQVk7Z0JBQ1osVUFBVTtnQkFDVixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLE9BQU87Z0JBQ1AsY0FBYztnQkFDZCxXQUFXO2dCQUNYLGlCQUFpQjtnQkFDakIsZ0JBQWdCO2dCQUNoQixpQkFBaUI7Z0JBQ2pCLG1CQUFtQjtnQkFDbkIsdUJBQXVCO2dCQUN2QixnQkFBZ0I7Z0JBQ2hCLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osT0FBTztnQkFDUCxNQUFNO2dCQUNOLGVBQWU7Z0JBQ2YsZUFBZTtnQkFDZixZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixNQUFNO2dCQUNOLE9BQU87Z0JBQ1AsV0FBVztnQkFDWCxVQUFVO2dCQUNWLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLFNBQVM7Z0JBQ1QsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxRQUFRO2dCQUNSLFlBQVk7Z0JBQ1osT0FBTztnQkFDUCxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixlQUFlO2dCQUNmLG1CQUFtQjtnQkFDbkIsVUFBVTtnQkFDVixVQUFVO2dCQUNWLE9BQU87Z0JBQ1AsVUFBVTtnQkFDVixNQUFNO2dCQUNOLGVBQWU7Z0JBQ2YsWUFBWTtnQkFDWixTQUFTO2dCQUNULE9BQU87Z0JBQ1AsUUFBUTthQUNYO3FCQWpFUSxFQUFFO1NBa0VkLENBQUM7UUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BUm5DLGVBQWUsQ0FjM0I7SUFBRCxzQkFBQztDQUFBLEFBZEQsQ0FBcUMsNEJBQTRCLEdBY2hFO1NBZFksZUFBZTtBQXdCNUI7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFSeEIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGVBQWU7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZUFBZTthQUNoQjtTQUNGLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9DaGFydENvbW1vblNlcmllc1NldHRpbmdzIH0gZnJvbSAnLi9iYXNlL2NoYXJ0LWNvbW1vbi1zZXJpZXMtc2V0dGluZ3MnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tYmFyJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FnZ3JlZ2F0aW9uJyxcclxuICAgICAgICAnYXJlYScsXHJcbiAgICAgICAgJ2FyZ3VtZW50RmllbGQnLFxyXG4gICAgICAgICdheGlzJyxcclxuICAgICAgICAnYmFyJyxcclxuICAgICAgICAnYmFyT3ZlcmxhcEdyb3VwJyxcclxuICAgICAgICAnYmFyUGFkZGluZycsXHJcbiAgICAgICAgJ2JhcldpZHRoJyxcclxuICAgICAgICAnYm9yZGVyJyxcclxuICAgICAgICAnYnViYmxlJyxcclxuICAgICAgICAnY2FuZGxlc3RpY2snLFxyXG4gICAgICAgICdjbG9zZVZhbHVlRmllbGQnLFxyXG4gICAgICAgICdjb2xvcicsXHJcbiAgICAgICAgJ2Nvcm5lclJhZGl1cycsXHJcbiAgICAgICAgJ2Rhc2hTdHlsZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkYXJlYScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkYmFyJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRsaW5lJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRzcGxpbmUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZHNwbGluZWFyZWEnLFxyXG4gICAgICAgICdoaWdoVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ2hvdmVyTW9kZScsXHJcbiAgICAgICAgJ2hvdmVyU3R5bGUnLFxyXG4gICAgICAgICdpZ25vcmVFbXB0eVBvaW50cycsXHJcbiAgICAgICAgJ2lubmVyQ29sb3InLFxyXG4gICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgJ2xpbmUnLFxyXG4gICAgICAgICdsb3dWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnbWF4TGFiZWxDb3VudCcsXHJcbiAgICAgICAgJ21pbkJhclNpemUnLFxyXG4gICAgICAgICdvcGFjaXR5JyxcclxuICAgICAgICAnb3BlblZhbHVlRmllbGQnLFxyXG4gICAgICAgICdwYW5lJyxcclxuICAgICAgICAncG9pbnQnLFxyXG4gICAgICAgICdyYW5nZWFyZWEnLFxyXG4gICAgICAgICdyYW5nZWJhcicsXHJcbiAgICAgICAgJ3JhbmdlVmFsdWUxRmllbGQnLFxyXG4gICAgICAgICdyYW5nZVZhbHVlMkZpZWxkJyxcclxuICAgICAgICAncmVkdWN0aW9uJyxcclxuICAgICAgICAnc2NhdHRlcicsXHJcbiAgICAgICAgJ3NlbGVjdGlvbk1vZGUnLFxyXG4gICAgICAgICdzZWxlY3Rpb25TdHlsZScsXHJcbiAgICAgICAgJ3Nob3dJbkxlZ2VuZCcsXHJcbiAgICAgICAgJ3NpemVGaWVsZCcsXHJcbiAgICAgICAgJ3NwbGluZScsXHJcbiAgICAgICAgJ3NwbGluZWFyZWEnLFxyXG4gICAgICAgICdzdGFjaycsXHJcbiAgICAgICAgJ3N0YWNrZWRhcmVhJyxcclxuICAgICAgICAnc3RhY2tlZGJhcicsXHJcbiAgICAgICAgJ3N0YWNrZWRsaW5lJyxcclxuICAgICAgICAnc3RhY2tlZHNwbGluZScsXHJcbiAgICAgICAgJ3N0YWNrZWRzcGxpbmVhcmVhJyxcclxuICAgICAgICAnc3RlcGFyZWEnLFxyXG4gICAgICAgICdzdGVwbGluZScsXHJcbiAgICAgICAgJ3N0b2NrJyxcclxuICAgICAgICAndGFnRmllbGQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndmFsdWVFcnJvckJhcicsXHJcbiAgICAgICAgJ3ZhbHVlRmllbGQnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICdjbG9zZWQnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9CYXJDb21wb25lbnQgZXh0ZW5kcyBEeG9DaGFydENvbW1vblNlcmllc1NldHRpbmdzIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnYmFyJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9CYXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0JhckNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9CYXJNb2R1bGUgeyB9XHJcbiJdfQ==