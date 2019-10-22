/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { DxoGaugeIndicator } from './base/gauge-indicator';
var DxoSubvalueIndicatorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoSubvalueIndicatorComponent, _super);
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
    DxoSubvalueIndicatorComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
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
        tslib_1.__param(1, Host())
    ], DxoSubvalueIndicatorComponent);
    return DxoSubvalueIndicatorComponent;
}(DxoGaugeIndicator));
export { DxoSubvalueIndicatorComponent };
var DxoSubvalueIndicatorModule = /** @class */ (function () {
    function DxoSubvalueIndicatorModule() {
    }
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
    return DxoSubvalueIndicatorModule;
}());
export { DxoSubvalueIndicatorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidmFsdWUtaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZC8iLCJzb3VyY2VzIjpbInN1YnZhbHVlLWluZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxvQ0FBb0M7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBOEIzRDtJQUFtRCx5REFBaUI7SUFPaEUsdUNBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQVZELHNCQUFjLHNEQUFXO2FBQXpCO1lBQ0ksT0FBTyxtQkFBbUIsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7Z0JBR2lELGdCQUFnQix1QkFBckQsUUFBUSxZQUFJLElBQUk7Z0JBQ0QsZ0JBQWdCLHVCQUFuQyxJQUFJOztJQVJKLDZCQUE2QjtRQTNCekMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsV0FBVztnQkFDWCx1QkFBdUI7Z0JBQ3ZCLE9BQU87Z0JBQ1AsdUJBQXVCO2dCQUN2QixrQkFBa0I7Z0JBQ2xCLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixTQUFTO2dCQUNULGFBQWE7Z0JBQ2IsZ0JBQWdCO2dCQUNoQixNQUFNO2dCQUNOLGdCQUFnQjtnQkFDaEIsYUFBYTtnQkFDYixNQUFNO2dCQUNOLE1BQU07Z0JBQ04scUJBQXFCO2dCQUNyQixPQUFPO2FBQ1Y7cUJBdEJRLEVBQUU7U0F1QmQsQ0FBQztRQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7T0FSTiw2QkFBNkIsQ0FjekM7SUFBRCxvQ0FBQztDQUFBLEFBZEQsQ0FBbUQsaUJBQWlCLEdBY25FO1NBZFksNkJBQTZCO0FBd0IxQztJQUFBO0lBQTBDLENBQUM7SUFBOUIsMEJBQTBCO1FBUnRDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw2QkFBNkI7YUFDOUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsNkJBQTZCO2FBQzlCO1NBQ0YsQ0FBQztPQUNXLDBCQUEwQixDQUFJO0lBQUQsaUNBQUM7Q0FBQSxBQUEzQyxJQUEyQztTQUE5QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER4b0dhdWdlSW5kaWNhdG9yIH0gZnJvbSAnLi9iYXNlL2dhdWdlLWluZGljYXRvcic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1zdWJ2YWx1ZS1pbmRpY2F0b3InLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYXJyb3dMZW5ndGgnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kQ29sb3InLFxyXG4gICAgICAgICdiYXNlVmFsdWUnLFxyXG4gICAgICAgICdiZWdpbkFkYXB0aW5nQXRSYWRpdXMnLFxyXG4gICAgICAgICdjb2xvcicsXHJcbiAgICAgICAgJ2hvcml6b250YWxPcmllbnRhdGlvbicsXHJcbiAgICAgICAgJ2luZGVudEZyb21DZW50ZXInLFxyXG4gICAgICAgICdsZW5ndGgnLFxyXG4gICAgICAgICdvZmZzZXQnLFxyXG4gICAgICAgICdwYWxldHRlJyxcclxuICAgICAgICAnc2Vjb25kQ29sb3InLFxyXG4gICAgICAgICdzZWNvbmRGcmFjdGlvbicsXHJcbiAgICAgICAgJ3NpemUnLFxyXG4gICAgICAgICdzcGluZGxlR2FwU2l6ZScsXHJcbiAgICAgICAgJ3NwaW5kbGVTaXplJyxcclxuICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd2ZXJ0aWNhbE9yaWVudGF0aW9uJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TdWJ2YWx1ZUluZGljYXRvckNvbXBvbmVudCBleHRlbmRzIER4b0dhdWdlSW5kaWNhdG9yIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnc3VidmFsdWVJbmRpY2F0b3InO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b1N1YnZhbHVlSW5kaWNhdG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9TdWJ2YWx1ZUluZGljYXRvckNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TdWJ2YWx1ZUluZGljYXRvck1vZHVsZSB7IH1cclxuIl19