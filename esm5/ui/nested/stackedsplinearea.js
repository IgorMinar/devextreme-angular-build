/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoChartCommonSeriesSettings } from './base/chart-common-series-settings';
var DxoStackedsplineareaComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoStackedsplineareaComponent, _super);
    function DxoStackedsplineareaComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoStackedsplineareaComponent.prototype, "_optionPath", {
        get: function () {
            return 'stackedsplinearea';
        },
        enumerable: true,
        configurable: true
    });
    DxoStackedsplineareaComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-stackedsplinearea',
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
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoStackedsplineareaComponent);
    return DxoStackedsplineareaComponent;
}(DxoChartCommonSeriesSettings));
export { DxoStackedsplineareaComponent };
var DxoStackedsplineareaModule = /** @class */ (function () {
    function DxoStackedsplineareaModule() {
    }
    DxoStackedsplineareaModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoStackedsplineareaComponent
            ],
            exports: [
                DxoStackedsplineareaComponent
            ],
        })
    ], DxoStackedsplineareaModule);
    return DxoStackedsplineareaModule;
}());
export { DxoStackedsplineareaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tlZHNwbGluZWFyZWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvc3RhY2tlZHNwbGluZWFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQXdFbkY7SUFBbUQseURBQTRCO0lBTzNFLHVDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFWRCxzQkFBYyxzREFBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUpRLDZCQUE2QjtRQXJFekMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixhQUFhO2dCQUNiLE1BQU07Z0JBQ04sZUFBZTtnQkFDZixNQUFNO2dCQUNOLEtBQUs7Z0JBQ0wsaUJBQWlCO2dCQUNqQixZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsUUFBUTtnQkFDUixRQUFRO2dCQUNSLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxpQkFBaUI7Z0JBQ2pCLGdCQUFnQjtnQkFDaEIsaUJBQWlCO2dCQUNqQixtQkFBbUI7Z0JBQ25CLHVCQUF1QjtnQkFDdkIsZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixZQUFZO2dCQUNaLE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixlQUFlO2dCQUNmLGVBQWU7Z0JBQ2YsWUFBWTtnQkFDWixTQUFTO2dCQUNULGdCQUFnQjtnQkFDaEIsTUFBTTtnQkFDTixPQUFPO2dCQUNQLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixrQkFBa0I7Z0JBQ2xCLGtCQUFrQjtnQkFDbEIsV0FBVztnQkFDWCxTQUFTO2dCQUNULGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsUUFBUTtnQkFDUixZQUFZO2dCQUNaLE9BQU87Z0JBQ1AsYUFBYTtnQkFDYixZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsZUFBZTtnQkFDZixtQkFBbUI7Z0JBQ25CLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsTUFBTTtnQkFDTixlQUFlO2dCQUNmLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxPQUFPO2FBQ1Y7cUJBaEVRLEVBQUU7U0FpRWQsQ0FBQztRQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FSbkMsNkJBQTZCLENBY3pDO0lBQUQsb0NBQUM7Q0FBQSxBQWRELENBQW1ELDRCQUE0QixHQWM5RTtTQWRZLDZCQUE2QjtBQXdCMUM7SUFBQTtJQUEwQyxDQUFDO0lBQTlCLDBCQUEwQjtRQVJ0QyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osNkJBQTZCO2FBQzlCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDZCQUE2QjthQUM5QjtTQUNGLENBQUM7T0FDVywwQkFBMEIsQ0FBSTtJQUFELGlDQUFDO0NBQUEsQUFBM0MsSUFBMkM7U0FBOUIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvQ2hhcnRDb21tb25TZXJpZXNTZXR0aW5ncyB9IGZyb20gJy4vYmFzZS9jaGFydC1jb21tb24tc2VyaWVzLXNldHRpbmdzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLXN0YWNrZWRzcGxpbmVhcmVhJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FnZ3JlZ2F0aW9uJyxcclxuICAgICAgICAnYXJlYScsXHJcbiAgICAgICAgJ2FyZ3VtZW50RmllbGQnLFxyXG4gICAgICAgICdheGlzJyxcclxuICAgICAgICAnYmFyJyxcclxuICAgICAgICAnYmFyT3ZlcmxhcEdyb3VwJyxcclxuICAgICAgICAnYmFyUGFkZGluZycsXHJcbiAgICAgICAgJ2JhcldpZHRoJyxcclxuICAgICAgICAnYm9yZGVyJyxcclxuICAgICAgICAnYnViYmxlJyxcclxuICAgICAgICAnY2FuZGxlc3RpY2snLFxyXG4gICAgICAgICdjbG9zZVZhbHVlRmllbGQnLFxyXG4gICAgICAgICdjb2xvcicsXHJcbiAgICAgICAgJ2Nvcm5lclJhZGl1cycsXHJcbiAgICAgICAgJ2Rhc2hTdHlsZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkYXJlYScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkYmFyJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRsaW5lJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRzcGxpbmUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZHNwbGluZWFyZWEnLFxyXG4gICAgICAgICdoaWdoVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ2hvdmVyTW9kZScsXHJcbiAgICAgICAgJ2hvdmVyU3R5bGUnLFxyXG4gICAgICAgICdpZ25vcmVFbXB0eVBvaW50cycsXHJcbiAgICAgICAgJ2lubmVyQ29sb3InLFxyXG4gICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgJ2xpbmUnLFxyXG4gICAgICAgICdsb3dWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnbWF4TGFiZWxDb3VudCcsXHJcbiAgICAgICAgJ21pbkJhclNpemUnLFxyXG4gICAgICAgICdvcGFjaXR5JyxcclxuICAgICAgICAnb3BlblZhbHVlRmllbGQnLFxyXG4gICAgICAgICdwYW5lJyxcclxuICAgICAgICAncG9pbnQnLFxyXG4gICAgICAgICdyYW5nZWFyZWEnLFxyXG4gICAgICAgICdyYW5nZWJhcicsXHJcbiAgICAgICAgJ3JhbmdlVmFsdWUxRmllbGQnLFxyXG4gICAgICAgICdyYW5nZVZhbHVlMkZpZWxkJyxcclxuICAgICAgICAncmVkdWN0aW9uJyxcclxuICAgICAgICAnc2NhdHRlcicsXHJcbiAgICAgICAgJ3NlbGVjdGlvbk1vZGUnLFxyXG4gICAgICAgICdzZWxlY3Rpb25TdHlsZScsXHJcbiAgICAgICAgJ3Nob3dJbkxlZ2VuZCcsXHJcbiAgICAgICAgJ3NpemVGaWVsZCcsXHJcbiAgICAgICAgJ3NwbGluZScsXHJcbiAgICAgICAgJ3NwbGluZWFyZWEnLFxyXG4gICAgICAgICdzdGFjaycsXHJcbiAgICAgICAgJ3N0YWNrZWRhcmVhJyxcclxuICAgICAgICAnc3RhY2tlZGJhcicsXHJcbiAgICAgICAgJ3N0YWNrZWRsaW5lJyxcclxuICAgICAgICAnc3RhY2tlZHNwbGluZScsXHJcbiAgICAgICAgJ3N0YWNrZWRzcGxpbmVhcmVhJyxcclxuICAgICAgICAnc3RlcGFyZWEnLFxyXG4gICAgICAgICdzdGVwbGluZScsXHJcbiAgICAgICAgJ3N0b2NrJyxcclxuICAgICAgICAndGFnRmllbGQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndmFsdWVFcnJvckJhcicsXHJcbiAgICAgICAgJ3ZhbHVlRmllbGQnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TdGFja2Vkc3BsaW5lYXJlYUNvbXBvbmVudCBleHRlbmRzIER4b0NoYXJ0Q29tbW9uU2VyaWVzU2V0dGluZ3Mge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzdGFja2Vkc3BsaW5lYXJlYSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvU3RhY2tlZHNwbGluZWFyZWFDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1N0YWNrZWRzcGxpbmVhcmVhQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1N0YWNrZWRzcGxpbmVhcmVhTW9kdWxlIHsgfVxyXG4iXX0=