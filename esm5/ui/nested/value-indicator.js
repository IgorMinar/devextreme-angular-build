/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoGaugeIndicator } from './base/gauge-indicator';
var DxoValueIndicatorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoValueIndicatorComponent, _super);
    function DxoValueIndicatorComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoValueIndicatorComponent.prototype, "_optionPath", {
        get: function () {
            return 'valueIndicator';
        },
        enumerable: true,
        configurable: true
    });
    DxoValueIndicatorComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-value-indicator',
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
    ], DxoValueIndicatorComponent);
    return DxoValueIndicatorComponent;
}(DxoGaugeIndicator));
export { DxoValueIndicatorComponent };
var DxoValueIndicatorModule = /** @class */ (function () {
    function DxoValueIndicatorModule() {
    }
    DxoValueIndicatorModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoValueIndicatorComponent
            ],
            exports: [
                DxoValueIndicatorComponent
            ],
        })
    ], DxoValueIndicatorModule);
    return DxoValueIndicatorModule;
}());
export { DxoValueIndicatorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL3ZhbHVlLWluZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBOEIzRDtJQUFnRCxzREFBaUI7SUFPN0Qsb0NBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQVZELHNCQUFjLG1EQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBSlEsMEJBQTBCO1FBM0J0QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixXQUFXO2dCQUNYLHVCQUF1QjtnQkFDdkIsT0FBTztnQkFDUCx1QkFBdUI7Z0JBQ3ZCLGtCQUFrQjtnQkFDbEIsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFNBQVM7Z0JBQ1QsYUFBYTtnQkFDYixnQkFBZ0I7Z0JBQ2hCLE1BQU07Z0JBQ04sZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixxQkFBcUI7Z0JBQ3JCLE9BQU87YUFDVjtxQkF0QlEsRUFBRTtTQXVCZCxDQUFDO1FBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFEbUMsZ0JBQWdCO1lBQ3RDLGdCQUFnQjtPQVJuQywwQkFBMEIsQ0FjdEM7SUFBRCxpQ0FBQztDQUFBLEFBZEQsQ0FBZ0QsaUJBQWlCLEdBY2hFO1NBZFksMEJBQTBCO0FBd0J2QztJQUFBO0lBQXVDLENBQUM7SUFBM0IsdUJBQXVCO1FBUm5DLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiwwQkFBMEI7YUFDM0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsMEJBQTBCO2FBQzNCO1NBQ0YsQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztTQUEzQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9HYXVnZUluZGljYXRvciB9IGZyb20gJy4vYmFzZS9nYXVnZS1pbmRpY2F0b3InO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tdmFsdWUtaW5kaWNhdG9yJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2Fycm93TGVuZ3RoJyxcclxuICAgICAgICAnYmFja2dyb3VuZENvbG9yJyxcclxuICAgICAgICAnYmFzZVZhbHVlJyxcclxuICAgICAgICAnYmVnaW5BZGFwdGluZ0F0UmFkaXVzJyxcclxuICAgICAgICAnY29sb3InLFxyXG4gICAgICAgICdob3Jpem9udGFsT3JpZW50YXRpb24nLFxyXG4gICAgICAgICdpbmRlbnRGcm9tQ2VudGVyJyxcclxuICAgICAgICAnbGVuZ3RoJyxcclxuICAgICAgICAnb2Zmc2V0JyxcclxuICAgICAgICAncGFsZXR0ZScsXHJcbiAgICAgICAgJ3NlY29uZENvbG9yJyxcclxuICAgICAgICAnc2Vjb25kRnJhY3Rpb24nLFxyXG4gICAgICAgICdzaXplJyxcclxuICAgICAgICAnc3BpbmRsZUdhcFNpemUnLFxyXG4gICAgICAgICdzcGluZGxlU2l6ZScsXHJcbiAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndmVydGljYWxPcmllbnRhdGlvbicsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvVmFsdWVJbmRpY2F0b3JDb21wb25lbnQgZXh0ZW5kcyBEeG9HYXVnZUluZGljYXRvciB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3ZhbHVlSW5kaWNhdG9yJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9WYWx1ZUluZGljYXRvckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvVmFsdWVJbmRpY2F0b3JDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvVmFsdWVJbmRpY2F0b3JNb2R1bGUgeyB9XHJcbiJdfQ==