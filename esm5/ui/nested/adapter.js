/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
var DxoAdapterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoAdapterComponent, _super);
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
    DxoAdapterComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DxoAdapterComponent.prototype, "applyValidationResults", null);
    tslib_1.__decorate([
        Input()
    ], DxoAdapterComponent.prototype, "bypass", null);
    tslib_1.__decorate([
        Input()
    ], DxoAdapterComponent.prototype, "focus", null);
    tslib_1.__decorate([
        Input()
    ], DxoAdapterComponent.prototype, "getValue", null);
    tslib_1.__decorate([
        Input()
    ], DxoAdapterComponent.prototype, "reset", null);
    tslib_1.__decorate([
        Input()
    ], DxoAdapterComponent.prototype, "validationRequestsCallbacks", null);
    DxoAdapterComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-adapter',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxoAdapterComponent);
    return DxoAdapterComponent;
}(NestedOption));
export { DxoAdapterComponent };
var DxoAdapterModule = /** @class */ (function () {
    function DxoAdapterModule() {
    }
    DxoAdapterModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoAdapterComponent
            ],
            exports: [
                DxoAdapterComponent
            ],
        })
    ], DxoAdapterModule);
    return DxoAdapterModule;
}());
export { DxoAdapterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQvIiwic291cmNlcyI6WyJhZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUdwQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQ0gsZ0JBQWdCLEdBQ25CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBU3ZEO0lBQXlDLCtDQUFZO0lBdURqRCw2QkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBMURELHNCQUFJLHVEQUFzQjthQUExQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3JELENBQUM7YUFDRCxVQUEyQixLQUFlO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSx1Q0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7YUFDRCxVQUFXLEtBQWU7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxzQ0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7YUFDRCxVQUFVLEtBQWU7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSx5Q0FBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7YUFDRCxVQUFhLEtBQWU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxzQ0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7YUFDRCxVQUFVLEtBQWU7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw0REFBMkI7YUFBL0I7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMxRCxDQUFDO2FBQ0QsVUFBZ0MsS0FBNEI7WUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRCxDQUFDOzs7T0FIQTtJQU1ELHNCQUFjLDRDQUFXO2FBQXpCO1lBQ0ksT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7O2dCQUdpRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO2dCQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7SUF0RGI7UUFEQyxLQUFLLEVBQUU7cUVBR1A7SUFNRDtRQURDLEtBQUssRUFBRTtxREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO29EQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7dURBR1A7SUFNRDtRQURDLEtBQUssRUFBRTtvREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzBFQUdQO0lBNUNRLG1CQUFtQjtRQU4vQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQURwQixFQUFFO1NBRWQsQ0FBQztRQXdEZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BeEROLG1CQUFtQixDQThEL0I7SUFBRCwwQkFBQztDQUFBLEFBOURELENBQXlDLFlBQVksR0E4RHBEO1NBOURZLG1CQUFtQjtBQXdFaEM7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQVI1QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osbUJBQW1CO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG1CQUFtQjthQUNwQjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1hZGFwdGVyJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9BZGFwdGVyQ29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXBwbHlWYWxpZGF0aW9uUmVzdWx0cygpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXBwbHlWYWxpZGF0aW9uUmVzdWx0cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFwcGx5VmFsaWRhdGlvblJlc3VsdHModmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcHBseVZhbGlkYXRpb25SZXN1bHRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYnlwYXNzKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdieXBhc3MnKTtcclxuICAgIH1cclxuICAgIHNldCBieXBhc3ModmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdieXBhc3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1cygpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXMnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1cyh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ2V0VmFsdWUoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dldFZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ2V0VmFsdWUodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdnZXRWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlc2V0KCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXNldCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlc2V0KHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVzZXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWxpZGF0aW9uUmVxdWVzdHNDYWxsYmFja3MoKTogYW55IHwgQXJyYXk8RnVuY3Rpb24+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWxpZGF0aW9uUmVxdWVzdHNDYWxsYmFja3MnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWxpZGF0aW9uUmVxdWVzdHNDYWxsYmFja3ModmFsdWU6IGFueSB8IEFycmF5PEZ1bmN0aW9uPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsaWRhdGlvblJlcXVlc3RzQ2FsbGJhY2tzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnYWRhcHRlcic7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQWRhcHRlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQWRhcHRlckNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9BZGFwdGVyTW9kdWxlIHsgfVxyXG4iXX0=