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
var DxoSelectionStyleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoSelectionStyleComponent, _super);
    function DxoSelectionStyleComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "hatching", {
        get: function () {
            return this._getOption('hatching');
        },
        set: function (value) {
            this._setOption('hatching', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "_optionPath", {
        get: function () {
            return 'selectionStyle';
        },
        enumerable: true,
        configurable: true
    });
    DxoSelectionStyleComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DxoSelectionStyleComponent.prototype, "border", null);
    tslib_1.__decorate([
        Input()
    ], DxoSelectionStyleComponent.prototype, "color", null);
    tslib_1.__decorate([
        Input()
    ], DxoSelectionStyleComponent.prototype, "size", null);
    tslib_1.__decorate([
        Input()
    ], DxoSelectionStyleComponent.prototype, "dashStyle", null);
    tslib_1.__decorate([
        Input()
    ], DxoSelectionStyleComponent.prototype, "hatching", null);
    tslib_1.__decorate([
        Input()
    ], DxoSelectionStyleComponent.prototype, "width", null);
    DxoSelectionStyleComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-selection-style',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxoSelectionStyleComponent);
    return DxoSelectionStyleComponent;
}(NestedOption));
export { DxoSelectionStyleComponent };
var DxoSelectionStyleModule = /** @class */ (function () {
    function DxoSelectionStyleModule() {
    }
    DxoSelectionStyleModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoSelectionStyleComponent
            ],
            exports: [
                DxoSelectionStyleComponent
            ],
        })
    ], DxoSelectionStyleModule);
    return DxoSelectionStyleModule;
}());
export { DxoSelectionStyleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLXN0eWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZC8iLCJzb3VyY2VzIjpbInNlbGVjdGlvbi1zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxvQ0FBb0M7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVN2RDtJQUFnRCxzREFBWTtJQXVEeEQsb0NBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQTFERCxzQkFBSSw4Q0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7YUFDRCxVQUFXLEtBQTZLO1lBQ3BMLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksNkNBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDO2FBQ0QsVUFBVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksNENBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxDQUFDO2FBQ0QsVUFBUyxLQUFhO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUhBO0lBTUQsc0JBQUksaURBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDO2FBQ0QsVUFBYyxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksZ0RBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxDQUFDO2FBQ0QsVUFBYSxLQUE4RTtZQUN2RixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDZDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQzthQUNELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFjLG1EQUFXO2FBQXpCO1lBQ0ksT0FBTyxnQkFBZ0IsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7Z0JBR2lELGdCQUFnQix1QkFBckQsUUFBUSxZQUFJLElBQUk7Z0JBQ0QsZ0JBQWdCLHVCQUFuQyxJQUFJOztJQXREYjtRQURDLEtBQUssRUFBRTs0REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzJEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7MERBR1A7SUFNRDtRQURDLEtBQUssRUFBRTsrREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzhEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7MkRBR1A7SUE1Q1EsMEJBQTBCO1FBTnRDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFEcEIsRUFBRTtTQUVkLENBQUM7UUF3RGUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQXhETiwwQkFBMEIsQ0E4RHRDO0lBQUQsaUNBQUM7Q0FBQSxBQTlERCxDQUFnRCxZQUFZLEdBOEQzRDtTQTlEWSwwQkFBMEI7QUF3RXZDO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix1QkFBdUI7UUFSbkMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDBCQUEwQjthQUMzQjtZQUNELE9BQU8sRUFBRTtnQkFDUCwwQkFBMEI7YUFDM0I7U0FDRixDQUFDO09BQ1csdUJBQXVCLENBQUk7SUFBRCw4QkFBQztDQUFBLEFBQXhDLElBQXdDO1NBQTNCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tc2VsZWN0aW9uLXN0eWxlJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TZWxlY3Rpb25TdHlsZUNvbXBvbmVudCBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJvcmRlcigpOiB7IGNvbG9yPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0gfCB7IGNvbG9yPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdib3JkZXInKTtcclxuICAgIH1cclxuICAgIHNldCBib3JkZXIodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB8IHsgY29sb3I/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JvcmRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sb3InKTtcclxuICAgIH1cclxuICAgIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2xvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGFzaFN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGFzaFN0eWxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGFzaFN0eWxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rhc2hTdHlsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhhdGNoaW5nKCk6IHsgZGlyZWN0aW9uPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBzdGVwPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoYXRjaGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhhdGNoaW5nKHZhbHVlOiB7IGRpcmVjdGlvbj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgc3RlcD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGF0Y2hpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzZWxlY3Rpb25TdHlsZSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvU2VsZWN0aW9uU3R5bGVDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1NlbGVjdGlvblN0eWxlQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1NlbGVjdGlvblN0eWxlTW9kdWxlIHsgfVxyXG4iXX0=