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
import { DxoFormat } from './base/format';
var DxoDisplayFormatComponent = (function (_super) {
    __extends(DxoDisplayFormatComponent, _super);
    function DxoDisplayFormatComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoDisplayFormatComponent.prototype, "_optionPath", {
        get: function () {
            return 'displayFormat';
        },
        enumerable: true,
        configurable: true
    });
    DxoDisplayFormatComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-display-format',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'currency',
                        'formatter',
                        'parser',
                        'precision',
                        'type'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoDisplayFormatComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoDisplayFormatComponent;
}(DxoFormat));
export { DxoDisplayFormatComponent };
var DxoDisplayFormatModule = (function () {
    function DxoDisplayFormatModule() {
    }
    DxoDisplayFormatModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoDisplayFormatComponent
                    ],
                    exports: [
                        DxoDisplayFormatComponent
                    ],
                },] },
    ];
    return DxoDisplayFormatModule;
}());
export { DxoDisplayFormatModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS1mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvZGlzcGxheS1mb3JtYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBZ0JLLDZDQUFTO0lBT3BELG1DQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEO0lBVkQsc0JBQWMsa0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsZUFBZSxDQUFDO1NBQzFCOzs7T0FBQTs7Z0JBakJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLE1BQU0sRUFBRTt3QkFDSixVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsUUFBUTt3QkFDUixXQUFXO3dCQUNYLE1BQU07cUJBQ1Q7aUJBQ0o7Ozs7Z0JBaEJRLGdCQUFnQix1QkF3QlIsUUFBUSxZQUFJLElBQUk7Z0JBeEJ4QixnQkFBZ0IsdUJBeUJaLElBQUk7O29DQXJEakI7RUE2QytDLFNBQVM7U0FBM0MseUJBQXlCOzs7OztnQkFnQnJDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oseUJBQXlCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AseUJBQXlCO3FCQUMxQjtpQkFDRjs7aUNBcEVEOztTQXFFYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0IH0gZnJvbSAnLi9iYXNlL2Zvcm1hdCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1kaXNwbGF5LWZvcm1hdCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdjdXJyZW5jeScsXHJcbiAgICAgICAgJ2Zvcm1hdHRlcicsXHJcbiAgICAgICAgJ3BhcnNlcicsXHJcbiAgICAgICAgJ3ByZWNpc2lvbicsXHJcbiAgICAgICAgJ3R5cGUnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9EaXNwbGF5Rm9ybWF0Q29tcG9uZW50IGV4dGVuZHMgRHhvRm9ybWF0IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZGlzcGxheUZvcm1hdCc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvRGlzcGxheUZvcm1hdENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvRGlzcGxheUZvcm1hdENvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9EaXNwbGF5Rm9ybWF0TW9kdWxlIHsgfVxyXG4iXX0=