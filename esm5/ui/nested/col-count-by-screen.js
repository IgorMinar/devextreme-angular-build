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
var DxoColCountByScreenComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoColCountByScreenComponent, _super);
    function DxoColCountByScreenComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "lg", {
        get: function () {
            return this._getOption('lg');
        },
        set: function (value) {
            this._setOption('lg', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "md", {
        get: function () {
            return this._getOption('md');
        },
        set: function (value) {
            this._setOption('md', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "sm", {
        get: function () {
            return this._getOption('sm');
        },
        set: function (value) {
            this._setOption('sm', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "xs", {
        get: function () {
            return this._getOption('xs');
        },
        set: function (value) {
            this._setOption('xs', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "_optionPath", {
        get: function () {
            return 'colCountByScreen';
        },
        enumerable: true,
        configurable: true
    });
    DxoColCountByScreenComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DxoColCountByScreenComponent.prototype, "lg", null);
    tslib_1.__decorate([
        Input()
    ], DxoColCountByScreenComponent.prototype, "md", null);
    tslib_1.__decorate([
        Input()
    ], DxoColCountByScreenComponent.prototype, "sm", null);
    tslib_1.__decorate([
        Input()
    ], DxoColCountByScreenComponent.prototype, "xs", null);
    DxoColCountByScreenComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-col-count-by-screen',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxoColCountByScreenComponent);
    return DxoColCountByScreenComponent;
}(NestedOption));
export { DxoColCountByScreenComponent };
var DxoColCountByScreenModule = /** @class */ (function () {
    function DxoColCountByScreenModule() {
    }
    DxoColCountByScreenModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoColCountByScreenComponent
            ],
            exports: [
                DxoColCountByScreenComponent
            ],
        })
    ], DxoColCountByScreenModule);
    return DxoColCountByScreenModule;
}());
export { DxoColCountByScreenModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLWNvdW50LWJ5LXNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQvIiwic291cmNlcyI6WyJjb2wtY291bnQtYnktc2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUdwQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQ0gsZ0JBQWdCLEdBQ25CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBU3ZEO0lBQWtELHdEQUFZO0lBdUMxRCxzQ0FBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBMUNELHNCQUFJLDRDQUFFO2FBQU47WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUNELFVBQU8sS0FBYTtZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDRDQUFFO2FBQU47WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUNELFVBQU8sS0FBYTtZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDRDQUFFO2FBQU47WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUNELFVBQU8sS0FBYTtZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDRDQUFFO2FBQU47WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUNELFVBQU8sS0FBYTtZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFjLHFEQUFXO2FBQXpCO1lBQ0ksT0FBTyxrQkFBa0IsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTs7Z0JBR2lELGdCQUFnQix1QkFBckQsUUFBUSxZQUFJLElBQUk7Z0JBQ0QsZ0JBQWdCLHVCQUFuQyxJQUFJOztJQXRDYjtRQURDLEtBQUssRUFBRTswREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzBEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7MERBR1A7SUFNRDtRQURDLEtBQUssRUFBRTswREFHUDtJQTVCUSw0QkFBNEI7UUFOeEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQURwQixFQUFFO1NBRWQsQ0FBQztRQXdDZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BeENOLDRCQUE0QixDQThDeEM7SUFBRCxtQ0FBQztDQUFBLEFBOUNELENBQWtELFlBQVksR0E4QzdEO1NBOUNZLDRCQUE0QjtBQXdEekM7SUFBQTtJQUF5QyxDQUFDO0lBQTdCLHlCQUF5QjtRQVJyQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osNEJBQTRCO2FBQzdCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDRCQUE0QjthQUM3QjtTQUNGLENBQUM7T0FDVyx5QkFBeUIsQ0FBSTtJQUFELGdDQUFDO0NBQUEsQUFBMUMsSUFBMEM7U0FBN0IseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1jb2wtY291bnQtYnktc2NyZWVuJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Db2xDb3VudEJ5U2NyZWVuQ29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxnKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xnJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1kKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21kJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc20oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzbScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNtKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NtJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgeHMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd4cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHhzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3hzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnY29sQ291bnRCeVNjcmVlbic7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQ29sQ291bnRCeVNjcmVlbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQ29sQ291bnRCeVNjcmVlbkNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlIHsgfVxyXG4iXX0=