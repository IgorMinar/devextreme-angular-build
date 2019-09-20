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
var DxoCrosshairComponent = (function (_super) {
    __extends(DxoCrosshairComponent, _super);
    function DxoCrosshairComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoCrosshairComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "horizontalLine", {
        get: function () {
            return this._getOption('horizontalLine');
        },
        set: function (value) {
            this._setOption('horizontalLine', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "verticalLine", {
        get: function () {
            return this._getOption('verticalLine');
        },
        set: function (value) {
            this._setOption('verticalLine', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "_optionPath", {
        get: function () {
            return 'crosshair';
        },
        enumerable: true,
        configurable: true
    });
    DxoCrosshairComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-crosshair',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoCrosshairComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoCrosshairComponent.propDecorators = {
        "color": [{ type: Input },],
        "dashStyle": [{ type: Input },],
        "enabled": [{ type: Input },],
        "horizontalLine": [{ type: Input },],
        "label": [{ type: Input },],
        "opacity": [{ type: Input },],
        "verticalLine": [{ type: Input },],
        "width": [{ type: Input },],
    };
    return DxoCrosshairComponent;
}(NestedOption));
export { DxoCrosshairComponent };
var DxoCrosshairModule = (function () {
    function DxoCrosshairModule() {
    }
    DxoCrosshairModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoCrosshairComponent
                    ],
                    exports: [
                        DxoCrosshairComponent
                    ],
                },] },
    ];
    return DxoCrosshairModule;
}());
export { DxoCrosshairModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3NoYWlyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdWkvbmVzdGVkL2Nyb3NzaGFpci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUFTYix5Q0FBWTtJQXVFbkQsK0JBQWdDLGtCQUNoQjtRQURoQixZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDN0Q7MEJBMUVHLHdDQUFLOztZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzthQUVwQyxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7Ozs7MEJBR0csNENBQVM7O1lBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7O2FBRXhDLFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2Qzs7OzswQkFHRywwQ0FBTzs7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7YUFFdEMsVUFBWSxLQUFjO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OzBCQUdHLGlEQUFjOztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O2FBRTdDLFVBQW1CLEtBQW1RO1lBQ2xSLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUM7Ozs7MEJBR0csd0NBQUs7O1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O2FBRXBDLFVBQVUsS0FBb0o7WUFDMUosSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7Ozs7MEJBR0csMENBQU87O1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7O2FBRXRDLFVBQVksS0FBYTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQzs7OzswQkFHRywrQ0FBWTs7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7YUFFM0MsVUFBaUIsS0FBbVE7WUFDaFIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUM7Ozs7MEJBR0csd0NBQUs7O1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O2FBRXBDLFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuQzs7OztJQUdELHNCQUFjLDhDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUN0Qjs7O09BQUE7O2dCQTFFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDaEM7Ozs7Z0JBVFEsZ0JBQWdCLHVCQWlGUixRQUFRLFlBQUksSUFBSTtnQkFqRnhCLGdCQUFnQix1QkFrRlosSUFBSTs7OzBCQXZFWixLQUFLOzhCQVFMLEtBQUs7NEJBUUwsS0FBSzttQ0FRTCxLQUFLOzBCQVFMLEtBQUs7NEJBUUwsS0FBSztpQ0FRTCxLQUFLOzBCQVFMLEtBQUs7O2dDQWhHVjtFQXVDMkMsWUFBWTtTQUExQyxxQkFBcUI7Ozs7O2dCQWdGakMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7cUJBQ3RCO2lCQUNGOzs2QkE5SEQ7O1NBK0hhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWNyb3NzaGFpcicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ3Jvc3NoYWlyQ29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2xvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGFzaFN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGFzaFN0eWxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGFzaFN0eWxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rhc2hTdHlsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3Jpem9udGFsTGluZSgpOiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvcml6b250YWxMaW5lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG9yaXpvbnRhbExpbmUodmFsdWU6IGJvb2xlYW4gfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG9yaXpvbnRhbExpbmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsYWJlbCgpOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xhYmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGFiZWwodmFsdWU6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbGFiZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBvcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb3BhY2l0eScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9wYWNpdHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb3BhY2l0eScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZlcnRpY2FsTGluZSgpOiBib29sZWFuIHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZlcnRpY2FsTGluZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZlcnRpY2FsTGluZSh2YWx1ZTogYm9vbGVhbiB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2ZXJ0aWNhbExpbmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdjcm9zc2hhaXInO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0Nyb3NzaGFpckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQ3Jvc3NoYWlyQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0Nyb3NzaGFpck1vZHVsZSB7IH1cclxuIl19