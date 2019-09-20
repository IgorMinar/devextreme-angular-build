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
import { DxiVizScaleBreak } from './base/viz-scale-break-dxi';
var DxiBreakComponent = (function (_super) {
    __extends(DxiBreakComponent, _super);
    function DxiBreakComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiBreakComponent.prototype, "_optionPath", {
        get: function () {
            return 'breaks';
        },
        enumerable: true,
        configurable: true
    });
    DxiBreakComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-break',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'endValue',
                        'startValue'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxiBreakComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxiBreakComponent;
}(DxiVizScaleBreak));
export { DxiBreakComponent };
var DxiBreakModule = (function () {
    function DxiBreakModule() {
    }
    DxiBreakModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiBreakComponent
                    ],
                    exports: [
                        DxiBreakComponent
                    ],
                },] },
    ];
    return DxiBreakModule;
}());
export { DxiBreakModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWstZHhpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdWkvbmVzdGVkL2JyZWFrLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0lBYXZCLHFDQUFnQjtJQU9uRCwyQkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDtJQVZELHNCQUFjLDBDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNuQjs7O09BQUE7O2dCQWRKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUM3QixNQUFNLEVBQUU7d0JBQ0osVUFBVTt3QkFDVixZQUFZO3FCQUNmO2lCQUNKOzs7O2dCQWJRLGdCQUFnQix1QkFxQlIsUUFBUSxZQUFJLElBQUk7Z0JBckJ4QixnQkFBZ0IsdUJBc0JaLElBQUk7OzRCQWxEakI7RUEwQ3VDLGdCQUFnQjtTQUExQyxpQkFBaUI7Ozs7O2dCQWdCN0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7cUJBQ2xCO2lCQUNGOzt5QkFqRUQ7O1NBa0VhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpVml6U2NhbGVCcmVhayB9IGZyb20gJy4vYmFzZS92aXotc2NhbGUtYnJlYWstZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLWJyZWFrJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2VuZFZhbHVlJyxcclxuICAgICAgICAnc3RhcnRWYWx1ZSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUJyZWFrQ29tcG9uZW50IGV4dGVuZHMgRHhpVml6U2NhbGVCcmVhayB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2JyZWFrcyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhpQnJlYWtDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aUJyZWFrQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUJyZWFrTW9kdWxlIHsgfVxyXG4iXX0=