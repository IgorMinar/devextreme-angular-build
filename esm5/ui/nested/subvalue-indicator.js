/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidmFsdWUtaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL3N1YnZhbHVlLWluZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBOEIzRDtJQUFtRCx5REFBaUI7SUFPaEUsdUNBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQVZELHNCQUFjLHNEQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBSlEsNkJBQTZCO1FBM0J6QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixXQUFXO2dCQUNYLHVCQUF1QjtnQkFDdkIsT0FBTztnQkFDUCx1QkFBdUI7Z0JBQ3ZCLGtCQUFrQjtnQkFDbEIsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFNBQVM7Z0JBQ1QsYUFBYTtnQkFDYixnQkFBZ0I7Z0JBQ2hCLE1BQU07Z0JBQ04sZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixxQkFBcUI7Z0JBQ3JCLE9BQU87YUFDVjtxQkF0QlEsRUFBRTtTQXVCZCxDQUFDO1FBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFEbUMsZ0JBQWdCO1lBQ3RDLGdCQUFnQjtPQVJuQyw2QkFBNkIsQ0FjekM7SUFBRCxvQ0FBQztDQUFBLEFBZEQsQ0FBbUQsaUJBQWlCLEdBY25FO1NBZFksNkJBQTZCO0FBd0IxQztJQUFBO0lBQTBDLENBQUM7SUFBOUIsMEJBQTBCO1FBUnRDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw2QkFBNkI7YUFDOUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsNkJBQTZCO2FBQzlCO1NBQ0YsQ0FBQztPQUNXLDBCQUEwQixDQUFJO0lBQUQsaUNBQUM7Q0FBQSxBQUEzQyxJQUEyQztTQUE5QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9HYXVnZUluZGljYXRvciB9IGZyb20gJy4vYmFzZS9nYXVnZS1pbmRpY2F0b3InO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tc3VidmFsdWUtaW5kaWNhdG9yJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2Fycm93TGVuZ3RoJyxcclxuICAgICAgICAnYmFja2dyb3VuZENvbG9yJyxcclxuICAgICAgICAnYmFzZVZhbHVlJyxcclxuICAgICAgICAnYmVnaW5BZGFwdGluZ0F0UmFkaXVzJyxcclxuICAgICAgICAnY29sb3InLFxyXG4gICAgICAgICdob3Jpem9udGFsT3JpZW50YXRpb24nLFxyXG4gICAgICAgICdpbmRlbnRGcm9tQ2VudGVyJyxcclxuICAgICAgICAnbGVuZ3RoJyxcclxuICAgICAgICAnb2Zmc2V0JyxcclxuICAgICAgICAncGFsZXR0ZScsXHJcbiAgICAgICAgJ3NlY29uZENvbG9yJyxcclxuICAgICAgICAnc2Vjb25kRnJhY3Rpb24nLFxyXG4gICAgICAgICdzaXplJyxcclxuICAgICAgICAnc3BpbmRsZUdhcFNpemUnLFxyXG4gICAgICAgICdzcGluZGxlU2l6ZScsXHJcbiAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndmVydGljYWxPcmllbnRhdGlvbicsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU3VidmFsdWVJbmRpY2F0b3JDb21wb25lbnQgZXh0ZW5kcyBEeG9HYXVnZUluZGljYXRvciB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3N1YnZhbHVlSW5kaWNhdG9yJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9TdWJ2YWx1ZUluZGljYXRvckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvU3VidmFsdWVJbmRpY2F0b3JDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU3VidmFsdWVJbmRpY2F0b3JNb2R1bGUgeyB9XHJcbiJdfQ==