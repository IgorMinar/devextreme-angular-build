/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoChartCommonSeriesSettings } from './base/chart-common-series-settings';
let DxoSplineComponent = class DxoSplineComponent extends DxoChartCommonSeriesSettings {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'spline';
    }
};
DxoSplineComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-spline',
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
], DxoSplineComponent);
export { DxoSplineComponent };
let DxoSplineModule = class DxoSplineModule {
};
DxoSplineModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoSplineComponent
        ],
        exports: [
            DxoSplineComponent
        ],
    })
], DxoSplineModule);
export { DxoSplineModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaW5lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL3NwbGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBd0VuRixJQUFhLGtCQUFrQixHQUEvQix3QkFBZ0MsU0FBUSw0QkFBNEI7SUFPaEUsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQVZELElBQWMsV0FBVztRQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BCLENBQUM7Q0FVSixDQUFBO0FBZFksa0JBQWtCO0lBckU5QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLE1BQU0sRUFBRTtZQUNKLGFBQWE7WUFDYixNQUFNO1lBQ04sZUFBZTtZQUNmLE1BQU07WUFDTixLQUFLO1lBQ0wsaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixVQUFVO1lBQ1YsUUFBUTtZQUNSLFFBQVE7WUFDUixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLE9BQU87WUFDUCxjQUFjO1lBQ2QsV0FBVztZQUNYLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIsZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixPQUFPO1lBQ1AsTUFBTTtZQUNOLGVBQWU7WUFDZixlQUFlO1lBQ2YsWUFBWTtZQUNaLFNBQVM7WUFDVCxnQkFBZ0I7WUFDaEIsTUFBTTtZQUNOLE9BQU87WUFDUCxXQUFXO1lBQ1gsVUFBVTtZQUNWLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFNBQVM7WUFDVCxlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxXQUFXO1lBQ1gsUUFBUTtZQUNSLFlBQVk7WUFDWixPQUFPO1lBQ1AsYUFBYTtZQUNiLFlBQVk7WUFDWixhQUFhO1lBQ2IsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixVQUFVO1lBQ1YsVUFBVTtZQUNWLE9BQU87WUFDUCxVQUFVO1lBQ1YsTUFBTTtZQUNOLGVBQWU7WUFDZixZQUFZO1lBQ1osU0FBUztZQUNULE9BQU87U0FDVjtpQkFoRVEsRUFBRTtLQWlFZCxDQUFDO0lBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQVJuQyxrQkFBa0IsQ0FjOUI7U0FkWSxrQkFBa0I7QUF3Qi9CLElBQWEsZUFBZSxHQUE1QjtDQUFnQyxDQUFBO0FBQW5CLGVBQWU7SUFSM0IsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osa0JBQWtCO1NBQ25CO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCO1NBQ25CO0tBQ0YsQ0FBQztHQUNXLGVBQWUsQ0FBSTtTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvQ2hhcnRDb21tb25TZXJpZXNTZXR0aW5ncyB9IGZyb20gJy4vYmFzZS9jaGFydC1jb21tb24tc2VyaWVzLXNldHRpbmdzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLXNwbGluZScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhZ2dyZWdhdGlvbicsXHJcbiAgICAgICAgJ2FyZWEnLFxyXG4gICAgICAgICdhcmd1bWVudEZpZWxkJyxcclxuICAgICAgICAnYXhpcycsXHJcbiAgICAgICAgJ2JhcicsXHJcbiAgICAgICAgJ2Jhck92ZXJsYXBHcm91cCcsXHJcbiAgICAgICAgJ2JhclBhZGRpbmcnLFxyXG4gICAgICAgICdiYXJXaWR0aCcsXHJcbiAgICAgICAgJ2JvcmRlcicsXHJcbiAgICAgICAgJ2J1YmJsZScsXHJcbiAgICAgICAgJ2NhbmRsZXN0aWNrJyxcclxuICAgICAgICAnY2xvc2VWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnY29sb3InLFxyXG4gICAgICAgICdjb3JuZXJSYWRpdXMnLFxyXG4gICAgICAgICdkYXNoU3R5bGUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGFyZWEnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGJhcicsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkbGluZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2Vkc3BsaW5lJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRzcGxpbmVhcmVhJyxcclxuICAgICAgICAnaGlnaFZhbHVlRmllbGQnLFxyXG4gICAgICAgICdob3Zlck1vZGUnLFxyXG4gICAgICAgICdob3ZlclN0eWxlJyxcclxuICAgICAgICAnaWdub3JlRW1wdHlQb2ludHMnLFxyXG4gICAgICAgICdpbm5lckNvbG9yJyxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICdsaW5lJyxcclxuICAgICAgICAnbG93VmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ21heExhYmVsQ291bnQnLFxyXG4gICAgICAgICdtaW5CYXJTaXplJyxcclxuICAgICAgICAnb3BhY2l0eScsXHJcbiAgICAgICAgJ29wZW5WYWx1ZUZpZWxkJyxcclxuICAgICAgICAncGFuZScsXHJcbiAgICAgICAgJ3BvaW50JyxcclxuICAgICAgICAncmFuZ2VhcmVhJyxcclxuICAgICAgICAncmFuZ2ViYXInLFxyXG4gICAgICAgICdyYW5nZVZhbHVlMUZpZWxkJyxcclxuICAgICAgICAncmFuZ2VWYWx1ZTJGaWVsZCcsXHJcbiAgICAgICAgJ3JlZHVjdGlvbicsXHJcbiAgICAgICAgJ3NjYXR0ZXInLFxyXG4gICAgICAgICdzZWxlY3Rpb25Nb2RlJyxcclxuICAgICAgICAnc2VsZWN0aW9uU3R5bGUnLFxyXG4gICAgICAgICdzaG93SW5MZWdlbmQnLFxyXG4gICAgICAgICdzaXplRmllbGQnLFxyXG4gICAgICAgICdzcGxpbmUnLFxyXG4gICAgICAgICdzcGxpbmVhcmVhJyxcclxuICAgICAgICAnc3RhY2snLFxyXG4gICAgICAgICdzdGFja2VkYXJlYScsXHJcbiAgICAgICAgJ3N0YWNrZWRiYXInLFxyXG4gICAgICAgICdzdGFja2VkbGluZScsXHJcbiAgICAgICAgJ3N0YWNrZWRzcGxpbmUnLFxyXG4gICAgICAgICdzdGFja2Vkc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ3N0ZXBhcmVhJyxcclxuICAgICAgICAnc3RlcGxpbmUnLFxyXG4gICAgICAgICdzdG9jaycsXHJcbiAgICAgICAgJ3RhZ0ZpZWxkJyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZhbHVlRXJyb3JCYXInLFxyXG4gICAgICAgICd2YWx1ZUZpZWxkJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU3BsaW5lQ29tcG9uZW50IGV4dGVuZHMgRHhvQ2hhcnRDb21tb25TZXJpZXNTZXR0aW5ncyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3NwbGluZSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvU3BsaW5lQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9TcGxpbmVDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU3BsaW5lTW9kdWxlIHsgfVxyXG4iXX0=