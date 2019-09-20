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
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoHeightComponent = (function (_super) {
    __extends(DxoHeightComponent, _super);
    function DxoHeightComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoHeightComponent.prototype, "rangeMaxPoint", {
        get: function () {
            return this._getOption('rangeMaxPoint');
        },
        set: function (value) {
            this._setOption('rangeMaxPoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeightComponent.prototype, "rangeMinPoint", {
        get: function () {
            return this._getOption('rangeMinPoint');
        },
        set: function (value) {
            this._setOption('rangeMinPoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeightComponent.prototype, "_optionPath", {
        get: function () {
            return 'height';
        },
        enumerable: true,
        configurable: true
    });
    DxoHeightComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-height',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoHeightComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoHeightComponent.propDecorators = {
        "rangeMaxPoint": [{ type: Input },],
        "rangeMinPoint": [{ type: Input },],
    };
    return DxoHeightComponent;
}(NestedOption));
export { DxoHeightComponent };
var DxoHeightModule = (function () {
    function DxoHeightModule() {
    }
    DxoHeightModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoHeightComponent
                    ],
                    exports: [
                        DxoHeightComponent
                    ],
                },] },
    ];
    return DxoHeightModule;
}());
export { DxoHeightModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdWkvbmVzdGVkL2hlaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUFTaEIsc0NBQVk7SUF1QmhELDRCQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEOzBCQTFCRyw2Q0FBYTs7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7YUFFNUMsVUFBa0IsS0FBYTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQzs7OzswQkFHRyw2Q0FBYTs7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7YUFFNUMsVUFBa0IsS0FBYTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQzs7OztJQUdELHNCQUFjLDJDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNuQjs7O09BQUE7O2dCQTFCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDaEM7Ozs7Z0JBVFEsZ0JBQWdCLHVCQWlDUixRQUFRLFlBQUksSUFBSTtnQkFqQ3hCLGdCQUFnQix1QkFrQ1osSUFBSTs7O2tDQXZCWixLQUFLO2tDQVFMLEtBQUs7OzZCQS9DVjtFQXNDd0MsWUFBWTtTQUF2QyxrQkFBa0I7Ozs7O2dCQWdDOUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7cUJBQ25CO2lCQUNGOzswQkE3RUQ7O1NBOEVhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWhlaWdodCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvSGVpZ2h0Q29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmFuZ2VNYXhQb2ludCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JhbmdlTWF4UG9pbnQnKTtcclxuICAgIH1cclxuICAgIHNldCByYW5nZU1heFBvaW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JhbmdlTWF4UG9pbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCByYW5nZU1pblBvaW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmFuZ2VNaW5Qb2ludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJhbmdlTWluUG9pbnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmFuZ2VNaW5Qb2ludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2hlaWdodCc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvSGVpZ2h0Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9IZWlnaHRDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvSGVpZ2h0TW9kdWxlIHsgfVxyXG4iXX0=