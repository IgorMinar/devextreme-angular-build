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
var DxoAdapterComponent = (function (_super) {
    __extends(DxoAdapterComponent, _super);
    function DxoAdapterComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoAdapterComponent.prototype, "applyValidationResults", {
        get: function () {
            return this._getOption('applyValidationResults');
        },
        set: function (value) {
            this._setOption('applyValidationResults', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "bypass", {
        get: function () {
            return this._getOption('bypass');
        },
        set: function (value) {
            this._setOption('bypass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "focus", {
        get: function () {
            return this._getOption('focus');
        },
        set: function (value) {
            this._setOption('focus', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "getValue", {
        get: function () {
            return this._getOption('getValue');
        },
        set: function (value) {
            this._setOption('getValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "reset", {
        get: function () {
            return this._getOption('reset');
        },
        set: function (value) {
            this._setOption('reset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "validationRequestsCallbacks", {
        get: function () {
            return this._getOption('validationRequestsCallbacks');
        },
        set: function (value) {
            this._setOption('validationRequestsCallbacks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "_optionPath", {
        get: function () {
            return 'adapter';
        },
        enumerable: true,
        configurable: true
    });
    DxoAdapterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-adapter',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoAdapterComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoAdapterComponent.propDecorators = {
        "applyValidationResults": [{ type: Input },],
        "bypass": [{ type: Input },],
        "focus": [{ type: Input },],
        "getValue": [{ type: Input },],
        "reset": [{ type: Input },],
        "validationRequestsCallbacks": [{ type: Input },],
    };
    return DxoAdapterComponent;
}(NestedOption));
export { DxoAdapterComponent };
var DxoAdapterModule = (function () {
    function DxoAdapterModule() {
    }
    DxoAdapterModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoAdapterComponent
                    ],
                    exports: [
                        DxoAdapterComponent
                    ],
                },] },
    ];
    return DxoAdapterModule;
}());
export { DxoAdapterModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQVNmLHVDQUFZO0lBdURqRCw2QkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDswQkExREcsdURBQXNCOztZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzthQUVyRCxVQUEyQixLQUFlO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEQ7Ozs7MEJBR0csdUNBQU07O1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7O2FBRXJDLFVBQVcsS0FBZTtZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQzs7OzswQkFHRyxzQ0FBSzs7WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7YUFFcEMsVUFBVSxLQUFlO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7OzBCQUdHLHlDQUFROztZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzthQUV2QyxVQUFhLEtBQWU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7Ozs7MEJBR0csc0NBQUs7O1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O2FBRXBDLFVBQVUsS0FBZTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuQzs7OzswQkFHRyw0REFBMkI7O1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLENBQUM7O2FBRTFELFVBQWdDLEtBQTRCO1lBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekQ7Ozs7SUFHRCxzQkFBYyw0Q0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7U0FDcEI7OztPQUFBOztnQkExREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2hDOzs7O2dCQVRRLGdCQUFnQix1QkFpRVIsUUFBUSxZQUFJLElBQUk7Z0JBakV4QixnQkFBZ0IsdUJBa0VaLElBQUk7OzsyQ0F2RFosS0FBSzsyQkFRTCxLQUFLOzBCQVFMLEtBQUs7NkJBUUwsS0FBSzswQkFRTCxLQUFLO2dEQVFMLEtBQUs7OzhCQS9FVjtFQXNDeUMsWUFBWTtTQUF4QyxtQkFBbUI7Ozs7O2dCQWdFL0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7cUJBQ3BCO2lCQUNGOzsyQkE3R0Q7O1NBOEdhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tYWRhcHRlcicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQWRhcHRlckNvbXBvbmVudCBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFwcGx5VmFsaWRhdGlvblJlc3VsdHMoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FwcGx5VmFsaWRhdGlvblJlc3VsdHMnKTtcclxuICAgIH1cclxuICAgIHNldCBhcHBseVZhbGlkYXRpb25SZXN1bHRzKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXBwbHlWYWxpZGF0aW9uUmVzdWx0cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJ5cGFzcygpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnlwYXNzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnlwYXNzKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYnlwYXNzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXMoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXModmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb2N1cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdldFZhbHVlKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdnZXRWYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdldFZhbHVlKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ2V0VmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZXNldCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVzZXQnKTtcclxuICAgIH1cclxuICAgIHNldCByZXNldCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Jlc2V0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsaWRhdGlvblJlcXVlc3RzQ2FsbGJhY2tzKCk6IGFueSB8IEFycmF5PEZ1bmN0aW9uPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvblJlcXVlc3RzQ2FsbGJhY2tzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsaWRhdGlvblJlcXVlc3RzQ2FsbGJhY2tzKHZhbHVlOiBhbnkgfCBBcnJheTxGdW5jdGlvbj4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbGlkYXRpb25SZXF1ZXN0c0NhbGxiYWNrcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2FkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0FkYXB0ZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0FkYXB0ZXJDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQWRhcHRlck1vZHVsZSB7IH1cclxuIl19