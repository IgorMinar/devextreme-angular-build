/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoCalendarOptions } from './base/calendar-options';
var DxoCalendarOptionsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoCalendarOptionsComponent, _super);
    function DxoCalendarOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'valueChange' },
            { emit: 'zoomLevelChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoCalendarOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'calendarOptions';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoCalendarOptionsComponent.prototype, "valueChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoCalendarOptionsComponent.prototype, "zoomLevelChange", void 0);
    DxoCalendarOptionsComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-calendar-options',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'accessKey',
                'activeStateEnabled',
                'cellTemplate',
                'dateSerializationFormat',
                'disabled',
                'disabledDates',
                'elementAttr',
                'firstDayOfWeek',
                'focusStateEnabled',
                'height',
                'hint',
                'hoverStateEnabled',
                'isValid',
                'max',
                'maxZoomLevel',
                'min',
                'minZoomLevel',
                'name',
                'onDisposing',
                'onInitialized',
                'onOptionChanged',
                'onValueChanged',
                'readOnly',
                'rtlEnabled',
                'showTodayButton',
                'tabIndex',
                'validationError',
                'validationMessageMode',
                'value',
                'visible',
                'width',
                'zoomLevel'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoCalendarOptionsComponent);
    return DxoCalendarOptionsComponent;
}(DxoCalendarOptions));
export { DxoCalendarOptionsComponent };
var DxoCalendarOptionsModule = /** @class */ (function () {
    function DxoCalendarOptionsModule() {
    }
    DxoCalendarOptionsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoCalendarOptionsComponent
            ],
            exports: [
                DxoCalendarOptionsComponent
            ],
        })
    ], DxoCalendarOptionsModule);
    return DxoCalendarOptionsModule;
}());
export { DxoCalendarOptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9jYWxlbmRhci1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxFQUNOLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQTJDN0Q7SUFBaUQsdURBQWtCO0lBZ0IvRCxxQ0FBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FTVjtRQVBHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDdkIsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7U0FDOUIsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFoQkQsc0JBQWMsb0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFSUztRQUFULE1BQU0sRUFBRTswQ0FBYyxZQUFZO29FQUF5QjtJQUtsRDtRQUFULE1BQU0sRUFBRTswQ0FBa0IsWUFBWTt3RUFBUztJQVZ2QywyQkFBMkI7UUF4Q3ZDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osV0FBVztnQkFDWCxvQkFBb0I7Z0JBQ3BCLGNBQWM7Z0JBQ2QseUJBQXlCO2dCQUN6QixVQUFVO2dCQUNWLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixnQkFBZ0I7Z0JBQ2hCLG1CQUFtQjtnQkFDbkIsUUFBUTtnQkFDUixNQUFNO2dCQUNOLG1CQUFtQjtnQkFDbkIsU0FBUztnQkFDVCxLQUFLO2dCQUNMLGNBQWM7Z0JBQ2QsS0FBSztnQkFDTCxjQUFjO2dCQUNkLE1BQU07Z0JBQ04sYUFBYTtnQkFDYixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsZ0JBQWdCO2dCQUNoQixVQUFVO2dCQUNWLFlBQVk7Z0JBQ1osaUJBQWlCO2dCQUNqQixVQUFVO2dCQUNWLGlCQUFpQjtnQkFDakIsdUJBQXVCO2dCQUN2QixPQUFPO2dCQUNQLFNBQVM7Z0JBQ1QsT0FBTztnQkFDUCxXQUFXO2FBQ2Q7cUJBbkNRLEVBQUU7U0FvQ2QsQ0FBQztRQWlCZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BakJuQywyQkFBMkIsQ0E2QnZDO0lBQUQsa0NBQUM7Q0FBQSxBQTdCRCxDQUFpRCxrQkFBa0IsR0E2QmxFO1NBN0JZLDJCQUEyQjtBQXVDeEM7SUFBQTtJQUF3QyxDQUFDO0lBQTVCLHdCQUF3QjtRQVJwQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osMkJBQTJCO2FBQzVCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDJCQUEyQjthQUM1QjtTQUNGLENBQUM7T0FDVyx3QkFBd0IsQ0FBSTtJQUFELCtCQUFDO0NBQUEsQUFBekMsSUFBeUM7U0FBNUIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvQ2FsZW5kYXJPcHRpb25zIH0gZnJvbSAnLi9iYXNlL2NhbGVuZGFyLW9wdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tY2FsZW5kYXItb3B0aW9ucycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhY2Nlc3NLZXknLFxyXG4gICAgICAgICdhY3RpdmVTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdjZWxsVGVtcGxhdGUnLFxyXG4gICAgICAgICdkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCcsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZGlzYWJsZWREYXRlcycsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZmlyc3REYXlPZldlZWsnLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2lzVmFsaWQnLFxyXG4gICAgICAgICdtYXgnLFxyXG4gICAgICAgICdtYXhab29tTGV2ZWwnLFxyXG4gICAgICAgICdtaW4nLFxyXG4gICAgICAgICdtaW5ab29tTGV2ZWwnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkluaXRpYWxpemVkJyxcclxuICAgICAgICAnb25PcHRpb25DaGFuZ2VkJyxcclxuICAgICAgICAnb25WYWx1ZUNoYW5nZWQnLFxyXG4gICAgICAgICdyZWFkT25seScsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzaG93VG9kYXlCdXR0b24nLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25FcnJvcicsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZScsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnem9vbUxldmVsJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ2FsZW5kYXJPcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgRHhvQ2FsZW5kYXJPcHRpb25zIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbHVlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlIHwgbnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHpvb21MZXZlbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHpvb21MZXZlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnY2FsZW5kYXJPcHRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3pvb21MZXZlbENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQ2FsZW5kYXJPcHRpb25zQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9DYWxlbmRhck9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ2FsZW5kYXJPcHRpb25zTW9kdWxlIHsgfVxyXG4iXX0=