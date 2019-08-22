/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoGaugeIndicator } from './base/gauge-indicator';
let DxoSubvalueIndicatorComponent = class DxoSubvalueIndicatorComponent extends DxoGaugeIndicator {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'subvalueIndicator';
    }
};
DxoSubvalueIndicatorComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-subvalue-indicator',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'arrowLength',
            'backgroundColor',
            'baseValue',
            'beginAdaptingAtRadius',
            'color',
            'horizontalOrientation',
            'indentFromCenter',
            'length',
            'offset',
            'palette',
            'secondColor',
            'secondFraction',
            'size',
            'spindleGapSize',
            'spindleSize',
            'text',
            'type',
            'verticalOrientation',
            'width'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoSubvalueIndicatorComponent);
export { DxoSubvalueIndicatorComponent };
let DxoSubvalueIndicatorModule = class DxoSubvalueIndicatorModule {
};
DxoSubvalueIndicatorModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoSubvalueIndicatorComponent
        ],
        exports: [
            DxoSubvalueIndicatorComponent
        ],
    })
], DxoSubvalueIndicatorModule);
export { DxoSubvalueIndicatorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidmFsdWUtaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL3N1YnZhbHVlLWluZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBOEIzRCxJQUFhLDZCQUE2QixHQUExQyxtQ0FBMkMsU0FBUSxpQkFBaUI7SUFPaEUsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQVZELElBQWMsV0FBVztRQUNyQixNQUFNLENBQUMsbUJBQW1CLENBQUM7SUFDL0IsQ0FBQztDQVVKLENBQUE7QUFkWSw2QkFBNkI7SUEzQnpDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixNQUFNLEVBQUU7WUFDSixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCx1QkFBdUI7WUFDdkIsT0FBTztZQUNQLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsUUFBUTtZQUNSLFFBQVE7WUFDUixTQUFTO1lBQ1QsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixNQUFNO1lBQ04sZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixNQUFNO1lBQ04sTUFBTTtZQUNOLHFCQUFxQjtZQUNyQixPQUFPO1NBQ1Y7aUJBdEJRLEVBQUU7S0F1QmQsQ0FBQztJQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBRG1DLGdCQUFnQjtRQUN0QyxnQkFBZ0I7R0FSbkMsNkJBQTZCLENBY3pDO1NBZFksNkJBQTZCO0FBd0IxQyxJQUFhLDBCQUEwQixHQUF2QztDQUEyQyxDQUFBO0FBQTlCLDBCQUEwQjtJQVJ0QyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWiw2QkFBNkI7U0FDOUI7UUFDRCxPQUFPLEVBQUU7WUFDUCw2QkFBNkI7U0FDOUI7S0FDRixDQUFDO0dBQ1csMEJBQTBCLENBQUk7U0FBOUIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvR2F1Z2VJbmRpY2F0b3IgfSBmcm9tICcuL2Jhc2UvZ2F1Z2UtaW5kaWNhdG9yJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLXN1YnZhbHVlLWluZGljYXRvcicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhcnJvd0xlbmd0aCcsXHJcbiAgICAgICAgJ2JhY2tncm91bmRDb2xvcicsXHJcbiAgICAgICAgJ2Jhc2VWYWx1ZScsXHJcbiAgICAgICAgJ2JlZ2luQWRhcHRpbmdBdFJhZGl1cycsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnaG9yaXpvbnRhbE9yaWVudGF0aW9uJyxcclxuICAgICAgICAnaW5kZW50RnJvbUNlbnRlcicsXHJcbiAgICAgICAgJ2xlbmd0aCcsXHJcbiAgICAgICAgJ29mZnNldCcsXHJcbiAgICAgICAgJ3BhbGV0dGUnLFxyXG4gICAgICAgICdzZWNvbmRDb2xvcicsXHJcbiAgICAgICAgJ3NlY29uZEZyYWN0aW9uJyxcclxuICAgICAgICAnc2l6ZScsXHJcbiAgICAgICAgJ3NwaW5kbGVHYXBTaXplJyxcclxuICAgICAgICAnc3BpbmRsZVNpemUnLFxyXG4gICAgICAgICd0ZXh0JyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZlcnRpY2FsT3JpZW50YXRpb24nLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1N1YnZhbHVlSW5kaWNhdG9yQ29tcG9uZW50IGV4dGVuZHMgRHhvR2F1Z2VJbmRpY2F0b3Ige1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzdWJ2YWx1ZUluZGljYXRvcic7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvU3VidmFsdWVJbmRpY2F0b3JDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1N1YnZhbHVlSW5kaWNhdG9yQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1N1YnZhbHVlSW5kaWNhdG9yTW9kdWxlIHsgfVxyXG4iXX0=