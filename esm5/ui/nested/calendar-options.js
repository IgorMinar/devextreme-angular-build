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
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoCalendarOptions } from './base/calendar-options';
var DxoCalendarOptionsComponent = (function (_super) {
    __extends(DxoCalendarOptionsComponent, _super);
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
    DxoCalendarOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-calendar-options',
                    template: '',
                    styles: [''],
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
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoCalendarOptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoCalendarOptionsComponent.propDecorators = {
        "valueChange": [{ type: Output },],
        "zoomLevelChange": [{ type: Output },],
    };
    return DxoCalendarOptionsComponent;
}(DxoCalendarOptions));
export { DxoCalendarOptionsComponent };
var DxoCalendarOptionsModule = (function () {
    function DxoCalendarOptionsModule() {
    }
    DxoCalendarOptionsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoCalendarOptionsComponent
                    ],
                    exports: [
                        DxoCalendarOptionsComponent
                    ],
                },] },
    ];
    return DxoCalendarOptionsModule;
}());
export { DxoCalendarOptionsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9jYWxlbmRhci1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxFQUNmLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQTJDWiwrQ0FBa0I7SUFnQi9ELHFDQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQVNWO1FBUEcsS0FBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUN2QixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtTQUM5QixDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDN0Q7SUFoQkQsc0JBQWMsb0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUM7U0FDNUI7OztPQUFBOztnQkFyREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsTUFBTSxFQUFFO3dCQUNKLFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLHlCQUF5Qjt3QkFDekIsVUFBVTt3QkFDVixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLFFBQVE7d0JBQ1IsTUFBTTt3QkFDTixtQkFBbUI7d0JBQ25CLFNBQVM7d0JBQ1QsS0FBSzt3QkFDTCxjQUFjO3dCQUNkLEtBQUs7d0JBQ0wsY0FBYzt3QkFDZCxNQUFNO3dCQUNOLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsVUFBVTt3QkFDVixpQkFBaUI7d0JBQ2pCLHVCQUF1Qjt3QkFDdkIsT0FBTzt3QkFDUCxTQUFTO3dCQUNULE9BQU87d0JBQ1AsV0FBVztxQkFDZDtpQkFDSjs7OztnQkEzQ1EsZ0JBQWdCLHVCQTREUixRQUFRLFlBQUksSUFBSTtnQkE1RHhCLGdCQUFnQix1QkE2RFosSUFBSTs7O2dDQVpaLE1BQU07b0NBS04sTUFBTTs7c0NBcEZYO0VBMEVpRCxrQkFBa0I7U0FBdEQsMkJBQTJCOzs7OztnQkErQnZDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsMkJBQTJCO3FCQUM1QjtpQkFDRjs7bUNBaEhEOztTQWlIYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvQ2FsZW5kYXJPcHRpb25zIH0gZnJvbSAnLi9iYXNlL2NhbGVuZGFyLW9wdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tY2FsZW5kYXItb3B0aW9ucycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhY2Nlc3NLZXknLFxyXG4gICAgICAgICdhY3RpdmVTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdjZWxsVGVtcGxhdGUnLFxyXG4gICAgICAgICdkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCcsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZGlzYWJsZWREYXRlcycsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZmlyc3REYXlPZldlZWsnLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2lzVmFsaWQnLFxyXG4gICAgICAgICdtYXgnLFxyXG4gICAgICAgICdtYXhab29tTGV2ZWwnLFxyXG4gICAgICAgICdtaW4nLFxyXG4gICAgICAgICdtaW5ab29tTGV2ZWwnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkluaXRpYWxpemVkJyxcclxuICAgICAgICAnb25PcHRpb25DaGFuZ2VkJyxcclxuICAgICAgICAnb25WYWx1ZUNoYW5nZWQnLFxyXG4gICAgICAgICdyZWFkT25seScsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzaG93VG9kYXlCdXR0b24nLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25FcnJvcicsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZScsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnem9vbUxldmVsJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ2FsZW5kYXJPcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgRHhvQ2FsZW5kYXJPcHRpb25zIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbHVlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlIHwgbnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHpvb21MZXZlbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHpvb21MZXZlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnY2FsZW5kYXJPcHRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3pvb21MZXZlbENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQ2FsZW5kYXJPcHRpb25zQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9DYWxlbmRhck9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ2FsZW5kYXJPcHRpb25zTW9kdWxlIHsgfVxyXG4iXX0=