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
import { DxoAnimationConfig } from './base/animation-config';
var DxoShowComponent = (function (_super) {
    __extends(DxoShowComponent, _super);
    function DxoShowComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoShowComponent.prototype, "_optionPath", {
        get: function () {
            return 'show';
        },
        enumerable: true,
        configurable: true
    });
    DxoShowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-show',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'complete',
                        'delay',
                        'direction',
                        'duration',
                        'easing',
                        'from',
                        'staggerDelay',
                        'start',
                        'to',
                        'type'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoShowComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoShowComponent;
}(DxoAnimationConfig));
export { DxoShowComponent };
var DxoShowModule = (function () {
    function DxoShowModule() {
    }
    DxoShowModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoShowComponent
                    ],
                    exports: [
                        DxoShowComponent
                    ],
                },] },
    ];
    return DxoShowModule;
}());
export { DxoShowModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9zaG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFxQnZCLG9DQUFrQjtJQU9wRCwwQkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDtJQVZELHNCQUFjLHlDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNqQjs7O09BQUE7O2dCQXRCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsTUFBTSxFQUFFO3dCQUNKLFVBQVU7d0JBQ1YsT0FBTzt3QkFDUCxXQUFXO3dCQUNYLFVBQVU7d0JBQ1YsUUFBUTt3QkFDUixNQUFNO3dCQUNOLGNBQWM7d0JBQ2QsT0FBTzt3QkFDUCxJQUFJO3dCQUNKLE1BQU07cUJBQ1Q7aUJBQ0o7Ozs7Z0JBckJRLGdCQUFnQix1QkE2QlIsUUFBUSxZQUFJLElBQUk7Z0JBN0J4QixnQkFBZ0IsdUJBOEJaLElBQUk7OzJCQTFEakI7RUFrRHNDLGtCQUFrQjtTQUEzQyxnQkFBZ0I7Ozs7O2dCQWdCNUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7cUJBQ2pCO2lCQUNGOzt3QkF6RUQ7O1NBMEVhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvQW5pbWF0aW9uQ29uZmlnIH0gZnJvbSAnLi9iYXNlL2FuaW1hdGlvbi1jb25maWcnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tc2hvdycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdjb21wbGV0ZScsXHJcbiAgICAgICAgJ2RlbGF5JyxcclxuICAgICAgICAnZGlyZWN0aW9uJyxcclxuICAgICAgICAnZHVyYXRpb24nLFxyXG4gICAgICAgICdlYXNpbmcnLFxyXG4gICAgICAgICdmcm9tJyxcclxuICAgICAgICAnc3RhZ2dlckRlbGF5JyxcclxuICAgICAgICAnc3RhcnQnLFxyXG4gICAgICAgICd0bycsXHJcbiAgICAgICAgJ3R5cGUnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TaG93Q29tcG9uZW50IGV4dGVuZHMgRHhvQW5pbWF0aW9uQ29uZmlnIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnc2hvdyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvU2hvd0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvU2hvd0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TaG93TW9kdWxlIHsgfVxyXG4iXX0=