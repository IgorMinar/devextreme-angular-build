/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormat } from './base/format';
var DxoItemTextFormatComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoItemTextFormatComponent, _super);
    function DxoItemTextFormatComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoItemTextFormatComponent.prototype, "_optionPath", {
        get: function () {
            return 'itemTextFormat';
        },
        enumerable: true,
        configurable: true
    });
    DxoItemTextFormatComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-item-text-format',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'currency',
                'formatter',
                'parser',
                'precision',
                'type'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoItemTextFormatComponent);
    return DxoItemTextFormatComponent;
}(DxoFormat));
export { DxoItemTextFormatComponent };
var DxoItemTextFormatModule = /** @class */ (function () {
    function DxoItemTextFormatModule() {
    }
    DxoItemTextFormatModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoItemTextFormatComponent
            ],
            exports: [
                DxoItemTextFormatComponent
            ],
        })
    ], DxoItemTextFormatModule);
    return DxoItemTextFormatModule;
}());
export { DxoItemTextFormatModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS10ZXh0LWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9pdGVtLXRleHQtZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWdCMUM7SUFBZ0Qsc0RBQVM7SUFPckQsb0NBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQVZELHNCQUFjLG1EQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBSlEsMEJBQTBCO1FBYnRDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osVUFBVTtnQkFDVixXQUFXO2dCQUNYLFFBQVE7Z0JBQ1IsV0FBVztnQkFDWCxNQUFNO2FBQ1Q7cUJBUlEsRUFBRTtTQVNkLENBQUM7UUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BUm5DLDBCQUEwQixDQWN0QztJQUFELGlDQUFDO0NBQUEsQUFkRCxDQUFnRCxTQUFTLEdBY3hEO1NBZFksMEJBQTBCO0FBd0J2QztJQUFBO0lBQXVDLENBQUM7SUFBM0IsdUJBQXVCO1FBUm5DLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiwwQkFBMEI7YUFDM0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsMEJBQTBCO2FBQzNCO1NBQ0YsQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztTQUEzQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9Gb3JtYXQgfSBmcm9tICcuL2Jhc2UvZm9ybWF0JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWl0ZW0tdGV4dC1mb3JtYXQnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnY3VycmVuY3knLFxyXG4gICAgICAgICdmb3JtYXR0ZXInLFxyXG4gICAgICAgICdwYXJzZXInLFxyXG4gICAgICAgICdwcmVjaXNpb24nLFxyXG4gICAgICAgICd0eXBlJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvSXRlbVRleHRGb3JtYXRDb21wb25lbnQgZXh0ZW5kcyBEeG9Gb3JtYXQge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdpdGVtVGV4dEZvcm1hdCc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvSXRlbVRleHRGb3JtYXRDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0l0ZW1UZXh0Rm9ybWF0Q29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0l0ZW1UZXh0Rm9ybWF0TW9kdWxlIHsgfVxyXG4iXX0=