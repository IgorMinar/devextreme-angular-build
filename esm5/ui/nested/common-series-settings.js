/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoChartCommonSeriesSettings } from './base/chart-common-series-settings';
var DxoCommonSeriesSettingsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoCommonSeriesSettingsComponent, _super);
    function DxoCommonSeriesSettingsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoCommonSeriesSettingsComponent.prototype, "_optionPath", {
        get: function () {
            return 'commonSeriesSettings';
        },
        enumerable: true,
        configurable: true
    });
    DxoCommonSeriesSettingsComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-common-series-settings',
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
                'argumentType',
                'minSegmentSize',
                'smallValuesGrouping',
                'closed'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoCommonSeriesSettingsComponent);
    return DxoCommonSeriesSettingsComponent;
}(DxoChartCommonSeriesSettings));
export { DxoCommonSeriesSettingsComponent };
var DxoCommonSeriesSettingsModule = /** @class */ (function () {
    function DxoCommonSeriesSettingsModule() {
    }
    DxoCommonSeriesSettingsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoCommonSeriesSettingsComponent
            ],
            exports: [
                DxoCommonSeriesSettingsComponent
            ],
        })
    ], DxoCommonSeriesSettingsModule);
    return DxoCommonSeriesSettingsModule;
}());
export { DxoCommonSeriesSettingsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlcmllcy1zZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9jb21tb24tc2VyaWVzLXNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUE0RW5GO0lBQXNELDREQUE0QjtJQU85RSwwQ0FBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBVkQsc0JBQWMseURBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsc0JBQXNCLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFKUSxnQ0FBZ0M7UUF6RTVDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osYUFBYTtnQkFDYixNQUFNO2dCQUNOLGVBQWU7Z0JBQ2YsTUFBTTtnQkFDTixLQUFLO2dCQUNMLGlCQUFpQjtnQkFDakIsWUFBWTtnQkFDWixVQUFVO2dCQUNWLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsT0FBTztnQkFDUCxjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsaUJBQWlCO2dCQUNqQixnQkFBZ0I7Z0JBQ2hCLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQix1QkFBdUI7Z0JBQ3ZCLGdCQUFnQjtnQkFDaEIsV0FBVztnQkFDWCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsWUFBWTtnQkFDWixPQUFPO2dCQUNQLE1BQU07Z0JBQ04sZUFBZTtnQkFDZixlQUFlO2dCQUNmLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxXQUFXO2dCQUNYLFVBQVU7Z0JBQ1Ysa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsY0FBYztnQkFDZCxXQUFXO2dCQUNYLFFBQVE7Z0JBQ1IsWUFBWTtnQkFDWixPQUFPO2dCQUNQLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2YsbUJBQW1CO2dCQUNuQixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsT0FBTztnQkFDUCxVQUFVO2dCQUNWLE1BQU07Z0JBQ04sZUFBZTtnQkFDZixZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsT0FBTztnQkFDUCxjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIscUJBQXFCO2dCQUNyQixRQUFRO2FBQ1g7cUJBcEVRLEVBQUU7U0FxRWQsQ0FBQztRQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FSbkMsZ0NBQWdDLENBYzVDO0lBQUQsdUNBQUM7Q0FBQSxBQWRELENBQXNELDRCQUE0QixHQWNqRjtTQWRZLGdDQUFnQztBQXdCN0M7SUFBQTtJQUE2QyxDQUFDO0lBQWpDLDZCQUE2QjtRQVJ6QyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osZ0NBQWdDO2FBQ2pDO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGdDQUFnQzthQUNqQztTQUNGLENBQUM7T0FDVyw2QkFBNkIsQ0FBSTtJQUFELG9DQUFDO0NBQUEsQUFBOUMsSUFBOEM7U0FBakMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvQ2hhcnRDb21tb25TZXJpZXNTZXR0aW5ncyB9IGZyb20gJy4vYmFzZS9jaGFydC1jb21tb24tc2VyaWVzLXNldHRpbmdzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWNvbW1vbi1zZXJpZXMtc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWdncmVnYXRpb24nLFxyXG4gICAgICAgICdhcmVhJyxcclxuICAgICAgICAnYXJndW1lbnRGaWVsZCcsXHJcbiAgICAgICAgJ2F4aXMnLFxyXG4gICAgICAgICdiYXInLFxyXG4gICAgICAgICdiYXJPdmVybGFwR3JvdXAnLFxyXG4gICAgICAgICdiYXJQYWRkaW5nJyxcclxuICAgICAgICAnYmFyV2lkdGgnLFxyXG4gICAgICAgICdib3JkZXInLFxyXG4gICAgICAgICdidWJibGUnLFxyXG4gICAgICAgICdjYW5kbGVzdGljaycsXHJcbiAgICAgICAgJ2Nsb3NlVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnY29ybmVyUmFkaXVzJyxcclxuICAgICAgICAnZGFzaFN0eWxlJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRhcmVhJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRiYXInLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGxpbmUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZHNwbGluZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2Vkc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ2hpZ2hWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnaG92ZXJNb2RlJyxcclxuICAgICAgICAnaG92ZXJTdHlsZScsXHJcbiAgICAgICAgJ2lnbm9yZUVtcHR5UG9pbnRzJyxcclxuICAgICAgICAnaW5uZXJDb2xvcicsXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnbGluZScsXHJcbiAgICAgICAgJ2xvd1ZhbHVlRmllbGQnLFxyXG4gICAgICAgICdtYXhMYWJlbENvdW50JyxcclxuICAgICAgICAnbWluQmFyU2l6ZScsXHJcbiAgICAgICAgJ29wYWNpdHknLFxyXG4gICAgICAgICdvcGVuVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ3BhbmUnLFxyXG4gICAgICAgICdwb2ludCcsXHJcbiAgICAgICAgJ3JhbmdlYXJlYScsXHJcbiAgICAgICAgJ3JhbmdlYmFyJyxcclxuICAgICAgICAncmFuZ2VWYWx1ZTFGaWVsZCcsXHJcbiAgICAgICAgJ3JhbmdlVmFsdWUyRmllbGQnLFxyXG4gICAgICAgICdyZWR1Y3Rpb24nLFxyXG4gICAgICAgICdzY2F0dGVyJyxcclxuICAgICAgICAnc2VsZWN0aW9uTW9kZScsXHJcbiAgICAgICAgJ3NlbGVjdGlvblN0eWxlJyxcclxuICAgICAgICAnc2hvd0luTGVnZW5kJyxcclxuICAgICAgICAnc2l6ZUZpZWxkJyxcclxuICAgICAgICAnc3BsaW5lJyxcclxuICAgICAgICAnc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ3N0YWNrJyxcclxuICAgICAgICAnc3RhY2tlZGFyZWEnLFxyXG4gICAgICAgICdzdGFja2VkYmFyJyxcclxuICAgICAgICAnc3RhY2tlZGxpbmUnLFxyXG4gICAgICAgICdzdGFja2Vkc3BsaW5lJyxcclxuICAgICAgICAnc3RhY2tlZHNwbGluZWFyZWEnLFxyXG4gICAgICAgICdzdGVwYXJlYScsXHJcbiAgICAgICAgJ3N0ZXBsaW5lJyxcclxuICAgICAgICAnc3RvY2snLFxyXG4gICAgICAgICd0YWdGaWVsZCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd2YWx1ZUVycm9yQmFyJyxcclxuICAgICAgICAndmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgJ2FyZ3VtZW50VHlwZScsXHJcbiAgICAgICAgJ21pblNlZ21lbnRTaXplJyxcclxuICAgICAgICAnc21hbGxWYWx1ZXNHcm91cGluZycsXHJcbiAgICAgICAgJ2Nsb3NlZCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0NvbW1vblNlcmllc1NldHRpbmdzQ29tcG9uZW50IGV4dGVuZHMgRHhvQ2hhcnRDb21tb25TZXJpZXNTZXR0aW5ncyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2NvbW1vblNlcmllc1NldHRpbmdzJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9Db21tb25TZXJpZXNTZXR0aW5nc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQ29tbW9uU2VyaWVzU2V0dGluZ3NDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ29tbW9uU2VyaWVzU2V0dGluZ3NNb2R1bGUgeyB9XHJcbiJdfQ==