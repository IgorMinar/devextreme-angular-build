/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiChartSeries } from './base/chart-series-dxi';
var DxiSeriesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiSeriesComponent, _super);
    function DxiSeriesComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiSeriesComponent.prototype, "_optionPath", {
        get: function () {
            return 'series';
        },
        enumerable: true,
        configurable: true
    });
    DxiSeriesComponent = tslib_1.__decorate([
        Component({
            selector: 'dxi-series',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'aggregation',
                'argumentField',
                'axis',
                'barOverlapGroup',
                'barPadding',
                'barWidth',
                'border',
                'closeValueField',
                'color',
                'cornerRadius',
                'dashStyle',
                'highValueField',
                'hoverMode',
                'hoverStyle',
                'ignoreEmptyPoints',
                'innerColor',
                'label',
                'lowValueField',
                'maxLabelCount',
                'minBarSize',
                'name',
                'opacity',
                'openValueField',
                'pane',
                'point',
                'rangeValue1Field',
                'rangeValue2Field',
                'reduction',
                'selectionMode',
                'selectionStyle',
                'showInLegend',
                'sizeField',
                'stack',
                'tag',
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
    ], DxiSeriesComponent);
    return DxiSeriesComponent;
}(DxiChartSeries));
export { DxiSeriesComponent };
var DxiSeriesModule = /** @class */ (function () {
    function DxiSeriesModule() {
    }
    DxiSeriesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxiSeriesComponent
            ],
            exports: [
                DxiSeriesComponent
            ],
        })
    ], DxiSeriesModule);
    return DxiSeriesModule;
}());
export { DxiSeriesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLWR4aS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9zZXJpZXMtZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBdUR6RDtJQUF3Qyw4Q0FBYztJQU9sRCw0QkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBVkQsc0JBQWMsMkNBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBSlEsa0JBQWtCO1FBcEQ5QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2YsTUFBTTtnQkFDTixpQkFBaUI7Z0JBQ2pCLFlBQVk7Z0JBQ1osVUFBVTtnQkFDVixRQUFRO2dCQUNSLGlCQUFpQjtnQkFDakIsT0FBTztnQkFDUCxjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixZQUFZO2dCQUNaLE9BQU87Z0JBQ1AsZUFBZTtnQkFDZixlQUFlO2dCQUNmLFlBQVk7Z0JBQ1osTUFBTTtnQkFDTixTQUFTO2dCQUNULGdCQUFnQjtnQkFDaEIsTUFBTTtnQkFDTixPQUFPO2dCQUNQLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsT0FBTztnQkFDUCxLQUFLO2dCQUNMLFVBQVU7Z0JBQ1YsTUFBTTtnQkFDTixlQUFlO2dCQUNmLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixxQkFBcUI7Z0JBQ3JCLFFBQVE7YUFDWDtxQkEvQ1EsRUFBRTtTQWdEZCxDQUFDO1FBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFEbUMsZ0JBQWdCO1lBQ3RDLGdCQUFnQjtPQVJuQyxrQkFBa0IsQ0FjOUI7SUFBRCx5QkFBQztDQUFBLEFBZEQsQ0FBd0MsY0FBYyxHQWNyRDtTQWRZLGtCQUFrQjtBQXdCL0I7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFSM0IsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGtCQUFrQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxrQkFBa0I7YUFDbkI7U0FDRixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpQ2hhcnRTZXJpZXMgfSBmcm9tICcuL2Jhc2UvY2hhcnQtc2VyaWVzLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1zZXJpZXMnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWdncmVnYXRpb24nLFxyXG4gICAgICAgICdhcmd1bWVudEZpZWxkJyxcclxuICAgICAgICAnYXhpcycsXHJcbiAgICAgICAgJ2Jhck92ZXJsYXBHcm91cCcsXHJcbiAgICAgICAgJ2JhclBhZGRpbmcnLFxyXG4gICAgICAgICdiYXJXaWR0aCcsXHJcbiAgICAgICAgJ2JvcmRlcicsXHJcbiAgICAgICAgJ2Nsb3NlVmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnY29ybmVyUmFkaXVzJyxcclxuICAgICAgICAnZGFzaFN0eWxlJyxcclxuICAgICAgICAnaGlnaFZhbHVlRmllbGQnLFxyXG4gICAgICAgICdob3Zlck1vZGUnLFxyXG4gICAgICAgICdob3ZlclN0eWxlJyxcclxuICAgICAgICAnaWdub3JlRW1wdHlQb2ludHMnLFxyXG4gICAgICAgICdpbm5lckNvbG9yJyxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICdsb3dWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnbWF4TGFiZWxDb3VudCcsXHJcbiAgICAgICAgJ21pbkJhclNpemUnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAnb3BhY2l0eScsXHJcbiAgICAgICAgJ29wZW5WYWx1ZUZpZWxkJyxcclxuICAgICAgICAncGFuZScsXHJcbiAgICAgICAgJ3BvaW50JyxcclxuICAgICAgICAncmFuZ2VWYWx1ZTFGaWVsZCcsXHJcbiAgICAgICAgJ3JhbmdlVmFsdWUyRmllbGQnLFxyXG4gICAgICAgICdyZWR1Y3Rpb24nLFxyXG4gICAgICAgICdzZWxlY3Rpb25Nb2RlJyxcclxuICAgICAgICAnc2VsZWN0aW9uU3R5bGUnLFxyXG4gICAgICAgICdzaG93SW5MZWdlbmQnLFxyXG4gICAgICAgICdzaXplRmllbGQnLFxyXG4gICAgICAgICdzdGFjaycsXHJcbiAgICAgICAgJ3RhZycsXHJcbiAgICAgICAgJ3RhZ0ZpZWxkJyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZhbHVlRXJyb3JCYXInLFxyXG4gICAgICAgICd2YWx1ZUZpZWxkJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnYXJndW1lbnRUeXBlJyxcclxuICAgICAgICAnbWluU2VnbWVudFNpemUnLFxyXG4gICAgICAgICdzbWFsbFZhbHVlc0dyb3VwaW5nJyxcclxuICAgICAgICAnY2xvc2VkJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpU2VyaWVzQ29tcG9uZW50IGV4dGVuZHMgRHhpQ2hhcnRTZXJpZXMge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzZXJpZXMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aVNlcmllc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpU2VyaWVzQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aVNlcmllc01vZHVsZSB7IH1cclxuIl19