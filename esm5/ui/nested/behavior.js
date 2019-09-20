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
var DxoBehaviorComponent = (function (_super) {
    __extends(DxoBehaviorComponent, _super);
    function DxoBehaviorComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoBehaviorComponent.prototype, "allowSlidersSwap", {
        get: function () {
            return this._getOption('allowSlidersSwap');
        },
        set: function (value) {
            this._setOption('allowSlidersSwap', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "animationEnabled", {
        get: function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "callValueChanged", {
        get: function () {
            return this._getOption('callValueChanged');
        },
        set: function (value) {
            this._setOption('callValueChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "manualRangeSelectionEnabled", {
        get: function () {
            return this._getOption('manualRangeSelectionEnabled');
        },
        set: function (value) {
            this._setOption('manualRangeSelectionEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "moveSelectedRangeByClick", {
        get: function () {
            return this._getOption('moveSelectedRangeByClick');
        },
        set: function (value) {
            this._setOption('moveSelectedRangeByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "snapToTicks", {
        get: function () {
            return this._getOption('snapToTicks');
        },
        set: function (value) {
            this._setOption('snapToTicks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "_optionPath", {
        get: function () {
            return 'behavior';
        },
        enumerable: true,
        configurable: true
    });
    DxoBehaviorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-behavior',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoBehaviorComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoBehaviorComponent.propDecorators = {
        "allowSlidersSwap": [{ type: Input },],
        "animationEnabled": [{ type: Input },],
        "callValueChanged": [{ type: Input },],
        "manualRangeSelectionEnabled": [{ type: Input },],
        "moveSelectedRangeByClick": [{ type: Input },],
        "snapToTicks": [{ type: Input },],
    };
    return DxoBehaviorComponent;
}(NestedOption));
export { DxoBehaviorComponent };
var DxoBehaviorModule = (function () {
    function DxoBehaviorModule() {
    }
    DxoBehaviorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoBehaviorComponent
                    ],
                    exports: [
                        DxoBehaviorComponent
                    ],
                },] },
    ];
    return DxoBehaviorModule;
}());
export { DxoBehaviorModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVoYXZpb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvYmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBU2Qsd0NBQVk7SUF1RGxELDhCQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEOzBCQTFERyxrREFBZ0I7O1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7O2FBRS9DLFVBQXFCLEtBQWM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5Qzs7OzswQkFHRyxrREFBZ0I7O1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7O2FBRS9DLFVBQXFCLEtBQWM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5Qzs7OzswQkFHRyxrREFBZ0I7O1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7O2FBRS9DLFVBQXFCLEtBQWE7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5Qzs7OzswQkFHRyw2REFBMkI7O1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLENBQUM7O2FBRTFELFVBQWdDLEtBQWM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6RDs7OzswQkFHRywwREFBd0I7O1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUM7O2FBRXZELFVBQTZCLEtBQWM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN0RDs7OzswQkFHRyw2Q0FBVzs7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7YUFFMUMsVUFBZ0IsS0FBYztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7OztJQUdELHNCQUFjLDZDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUNyQjs7O09BQUE7O2dCQTFESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDaEM7Ozs7Z0JBVFEsZ0JBQWdCLHVCQWlFUixRQUFRLFlBQUksSUFBSTtnQkFqRXhCLGdCQUFnQix1QkFrRVosSUFBSTs7O3FDQXZEWixLQUFLO3FDQVFMLEtBQUs7cUNBUUwsS0FBSztnREFRTCxLQUFLOzZDQVFMLEtBQUs7Z0NBUUwsS0FBSzs7K0JBL0VWO0VBc0MwQyxZQUFZO1NBQXpDLG9CQUFvQjs7Ozs7Z0JBZ0VoQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjtxQkFDckI7aUJBQ0Y7OzRCQTdHRDs7U0E4R2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1iZWhhdmlvcicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQmVoYXZpb3JDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd1NsaWRlcnNTd2FwKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93U2xpZGVyc1N3YXAnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd1NsaWRlcnNTd2FwKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd1NsaWRlcnNTd2FwJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYW5pbWF0aW9uRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbmltYXRpb25FbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYW5pbWF0aW9uRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYW5pbWF0aW9uRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNhbGxWYWx1ZUNoYW5nZWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYWxsVmFsdWVDaGFuZ2VkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FsbFZhbHVlQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYWxsVmFsdWVDaGFuZ2VkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWFudWFsUmFuZ2VTZWxlY3Rpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21hbnVhbFJhbmdlU2VsZWN0aW9uRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1hbnVhbFJhbmdlU2VsZWN0aW9uRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWFudWFsUmFuZ2VTZWxlY3Rpb25FbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbW92ZVNlbGVjdGVkUmFuZ2VCeUNsaWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21vdmVTZWxlY3RlZFJhbmdlQnlDbGljaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1vdmVTZWxlY3RlZFJhbmdlQnlDbGljayh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbW92ZVNlbGVjdGVkUmFuZ2VCeUNsaWNrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc25hcFRvVGlja3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc25hcFRvVGlja3MnKTtcclxuICAgIH1cclxuICAgIHNldCBzbmFwVG9UaWNrcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc25hcFRvVGlja3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdiZWhhdmlvcic7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQmVoYXZpb3JDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0JlaGF2aW9yQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0JlaGF2aW9yTW9kdWxlIHsgfVxyXG4iXX0=