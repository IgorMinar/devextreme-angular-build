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
import { DxoGaugeIndicator } from './base/gauge-indicator';
var DxoSubvalueIndicatorComponent = (function (_super) {
    __extends(DxoSubvalueIndicatorComponent, _super);
    function DxoSubvalueIndicatorComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSubvalueIndicatorComponent.prototype, "_optionPath", {
        get: function () {
            return 'subvalueIndicator';
        },
        enumerable: true,
        configurable: true
    });
    DxoSubvalueIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-subvalue-indicator',
                    template: '',
                    styles: [''],
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
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoSubvalueIndicatorComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoSubvalueIndicatorComponent;
}(DxoGaugeIndicator));
export { DxoSubvalueIndicatorComponent };
var DxoSubvalueIndicatorModule = (function () {
    function DxoSubvalueIndicatorModule() {
    }
    DxoSubvalueIndicatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoSubvalueIndicatorComponent
                    ],
                    exports: [
                        DxoSubvalueIndicatorComponent
                    ],
                },] },
    ];
    return DxoSubvalueIndicatorModule;
}());
export { DxoSubvalueIndicatorModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidmFsdWUtaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdWkvbmVzdGVkL3N1YnZhbHVlLWluZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBOEJSLGlEQUFpQjtJQU9oRSx1Q0FBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDtJQVZELHNCQUFjLHNEQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDO1NBQzlCOzs7T0FBQTs7Z0JBL0JKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLE1BQU0sRUFBRTt3QkFDSixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCx1QkFBdUI7d0JBQ3ZCLE9BQU87d0JBQ1AsdUJBQXVCO3dCQUN2QixrQkFBa0I7d0JBQ2xCLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixTQUFTO3dCQUNULGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixNQUFNO3dCQUNOLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixNQUFNO3dCQUNOLE1BQU07d0JBQ04scUJBQXFCO3dCQUNyQixPQUFPO3FCQUNWO2lCQUNKOzs7O2dCQTlCUSxnQkFBZ0IsdUJBc0NSLFFBQVEsWUFBSSxJQUFJO2dCQXRDeEIsZ0JBQWdCLHVCQXVDWixJQUFJOzt3Q0FuRWpCO0VBMkRtRCxpQkFBaUI7U0FBdkQsNkJBQTZCOzs7OztnQkFnQnpDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osNkJBQTZCO3FCQUM5QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsNkJBQTZCO3FCQUM5QjtpQkFDRjs7cUNBbEZEOztTQW1GYSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvR2F1Z2VJbmRpY2F0b3IgfSBmcm9tICcuL2Jhc2UvZ2F1Z2UtaW5kaWNhdG9yJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLXN1YnZhbHVlLWluZGljYXRvcicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhcnJvd0xlbmd0aCcsXHJcbiAgICAgICAgJ2JhY2tncm91bmRDb2xvcicsXHJcbiAgICAgICAgJ2Jhc2VWYWx1ZScsXHJcbiAgICAgICAgJ2JlZ2luQWRhcHRpbmdBdFJhZGl1cycsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnaG9yaXpvbnRhbE9yaWVudGF0aW9uJyxcclxuICAgICAgICAnaW5kZW50RnJvbUNlbnRlcicsXHJcbiAgICAgICAgJ2xlbmd0aCcsXHJcbiAgICAgICAgJ29mZnNldCcsXHJcbiAgICAgICAgJ3BhbGV0dGUnLFxyXG4gICAgICAgICdzZWNvbmRDb2xvcicsXHJcbiAgICAgICAgJ3NlY29uZEZyYWN0aW9uJyxcclxuICAgICAgICAnc2l6ZScsXHJcbiAgICAgICAgJ3NwaW5kbGVHYXBTaXplJyxcclxuICAgICAgICAnc3BpbmRsZVNpemUnLFxyXG4gICAgICAgICd0ZXh0JyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZlcnRpY2FsT3JpZW50YXRpb24nLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1N1YnZhbHVlSW5kaWNhdG9yQ29tcG9uZW50IGV4dGVuZHMgRHhvR2F1Z2VJbmRpY2F0b3Ige1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzdWJ2YWx1ZUluZGljYXRvcic7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvU3VidmFsdWVJbmRpY2F0b3JDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1N1YnZhbHVlSW5kaWNhdG9yQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1N1YnZhbHVlSW5kaWNhdG9yTW9kdWxlIHsgfVxyXG4iXX0=