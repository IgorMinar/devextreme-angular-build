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
import { CollectionNestedOption } from 'devextreme-angular/core';
var DxiPaneComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiPaneComponent, _super);
    function DxiPaneComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiPaneComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiPaneComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiPaneComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiPaneComponent.prototype, "_optionPath", {
        get: function () {
            return 'panes';
        },
        enumerable: true,
        configurable: true
    });
    DxiPaneComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DxiPaneComponent.prototype, "backgroundColor", null);
    tslib_1.__decorate([
        Input()
    ], DxiPaneComponent.prototype, "border", null);
    tslib_1.__decorate([
        Input()
    ], DxiPaneComponent.prototype, "name", null);
    DxiPaneComponent = tslib_1.__decorate([
        Component({
            selector: 'dxi-pane',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxiPaneComponent);
    return DxiPaneComponent;
}(CollectionNestedOption));
export { DxiPaneComponent };
var DxiPaneModule = /** @class */ (function () {
    function DxiPaneModule() {
    }
    DxiPaneModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxiPaneComponent
            ],
            exports: [
                DxiPaneComponent
            ],
        })
    ], DxiPaneModule);
    return DxiPaneModule;
}());
export { DxiPaneModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZS1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsicGFuZS1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBR3BDLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVNqRTtJQUFzQyw0Q0FBc0I7SUErQnhELDBCQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFsQ0Qsc0JBQUksNkNBQWU7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxDQUFDO2FBQ0QsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksb0NBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDO2FBQ0QsVUFBVyxLQUFvSztZQUMzSyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLGtDQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQzthQUNELFVBQVMsS0FBYTtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFjLHlDQUFXO2FBQXpCO1lBQ0ksT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7O2dCQUdpRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO2dCQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7SUE5QmI7UUFEQyxLQUFLLEVBQUU7MkRBR1A7SUFNRDtRQURDLEtBQUssRUFBRTtrREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFO2dEQUdQO0lBcEJRLGdCQUFnQjtRQU41QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQURwQixFQUFFO1NBRWQsQ0FBQztRQWdDZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BaENOLGdCQUFnQixDQXNDNUI7SUFBRCx1QkFBQztDQUFBLEFBdENELENBQXNDLHNCQUFzQixHQXNDM0Q7U0F0Q1ksZ0JBQWdCO0FBZ0Q3QjtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQVJ6QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osZ0JBQWdCO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGdCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1wYW5lJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlQYW5lQ29tcG9uZW50IGV4dGVuZHMgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhY2tncm91bmRDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JhY2tncm91bmRDb2xvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYWNrZ3JvdW5kQ29sb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBib3JkZXIoKTogeyBib3R0b20/OiBib29sZWFuLCBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsZWZ0PzogYm9vbGVhbiwgb3BhY2l0eT86IG51bWJlciwgcmlnaHQ/OiBib29sZWFuLCB0b3A/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYm9yZGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYm9yZGVyKHZhbHVlOiB7IGJvdHRvbT86IGJvb2xlYW4sIGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxlZnQ/OiBib29sZWFuLCBvcGFjaXR5PzogbnVtYmVyLCByaWdodD86IGJvb2xlYW4sIHRvcD86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdib3JkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbmFtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbmFtZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3BhbmVzJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlQYW5lQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlQYW5lQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aVBhbmVNb2R1bGUgeyB9XHJcbiJdfQ==