/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoKeyboardNavigationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoKeyboardNavigationComponent, _super);
    function DxoKeyboardNavigationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoKeyboardNavigationComponent.prototype, "editOnKeyPress", {
        get: function () {
            return this._getOption('editOnKeyPress');
        },
        set: function (value) {
            this._setOption('editOnKeyPress', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoKeyboardNavigationComponent.prototype, "enterKeyAction", {
        get: function () {
            return this._getOption('enterKeyAction');
        },
        set: function (value) {
            this._setOption('enterKeyAction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoKeyboardNavigationComponent.prototype, "enterKeyDirection", {
        get: function () {
            return this._getOption('enterKeyDirection');
        },
        set: function (value) {
            this._setOption('enterKeyDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoKeyboardNavigationComponent.prototype, "_optionPath", {
        get: function () {
            return 'keyboardNavigation';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoKeyboardNavigationComponent.prototype, "editOnKeyPress", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoKeyboardNavigationComponent.prototype, "enterKeyAction", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoKeyboardNavigationComponent.prototype, "enterKeyDirection", null);
    DxoKeyboardNavigationComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-keyboard-navigation',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoKeyboardNavigationComponent);
    return DxoKeyboardNavigationComponent;
}(NestedOption));
export { DxoKeyboardNavigationComponent };
var DxoKeyboardNavigationModule = /** @class */ (function () {
    function DxoKeyboardNavigationModule() {
    }
    DxoKeyboardNavigationModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoKeyboardNavigationComponent
            ],
            exports: [
                DxoKeyboardNavigationComponent
            ],
        })
    ], DxoKeyboardNavigationModule);
    return DxoKeyboardNavigationModule;
}());
export { DxoKeyboardNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtbmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9rZXlib2FyZC1uYXZpZ2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU3hEO0lBQW9ELDBEQUFZO0lBK0I1RCx3Q0FBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBbENELHNCQUFJLDBEQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3QyxDQUFDO2FBQ0QsVUFBbUIsS0FBYztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksMERBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLENBQUM7YUFDRCxVQUFtQixLQUFhO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw2REFBaUI7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hELENBQUM7YUFDRCxVQUFzQixLQUFhO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BSEE7SUFNRCxzQkFBYyx1REFBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQTFCRDtRQURDLEtBQUssRUFBRTs7O3dFQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7Ozt3RUFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7MkVBR1A7SUFwQlEsOEJBQThCO1FBTjFDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFEcEIsRUFBRTtTQUVkLENBQUM7UUFnQ2UsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFEbUMsZ0JBQWdCO1lBQ3RDLGdCQUFnQjtPQWhDbkMsOEJBQThCLENBc0MxQztJQUFELHFDQUFDO0NBQUEsQUF0Q0QsQ0FBb0QsWUFBWSxHQXNDL0Q7U0F0Q1ksOEJBQThCO0FBZ0QzQztJQUFBO0lBQTJDLENBQUM7SUFBL0IsMkJBQTJCO1FBUnZDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw4QkFBOEI7YUFDL0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsOEJBQThCO2FBQy9CO1NBQ0YsQ0FBQztPQUNXLDJCQUEyQixDQUFJO0lBQUQsa0NBQUM7Q0FBQSxBQUE1QyxJQUE0QztTQUEvQiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8ta2V5Ym9hcmQtbmF2aWdhdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvS2V5Ym9hcmROYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWRpdE9uS2V5UHJlc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWRpdE9uS2V5UHJlc3MnKTtcclxuICAgIH1cclxuICAgIHNldCBlZGl0T25LZXlQcmVzcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWRpdE9uS2V5UHJlc3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbnRlcktleUFjdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VudGVyS2V5QWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZW50ZXJLZXlBY3Rpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW50ZXJLZXlBY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbnRlcktleURpcmVjdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VudGVyS2V5RGlyZWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZW50ZXJLZXlEaXJlY3Rpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW50ZXJLZXlEaXJlY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdrZXlib2FyZE5hdmlnYXRpb24nO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0tleWJvYXJkTmF2aWdhdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvS2V5Ym9hcmROYXZpZ2F0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0tleWJvYXJkTmF2aWdhdGlvbk1vZHVsZSB7IH1cclxuIl19