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
var DxoEditingComponent = (function (_super) {
    __extends(DxoEditingComponent, _super);
    function DxoEditingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoEditingComponent.prototype, "allowAdding", {
        get: function () {
            return this._getOption('allowAdding');
        },
        set: function (value) {
            this._setOption('allowAdding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowDeleting", {
        get: function () {
            return this._getOption('allowDeleting');
        },
        set: function (value) {
            this._setOption('allowDeleting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowUpdating", {
        get: function () {
            return this._getOption('allowUpdating');
        },
        set: function (value) {
            this._setOption('allowUpdating', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "form", {
        get: function () {
            return this._getOption('form');
        },
        set: function (value) {
            this._setOption('form', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "popup", {
        get: function () {
            return this._getOption('popup');
        },
        set: function (value) {
            this._setOption('popup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "refreshMode", {
        get: function () {
            return this._getOption('refreshMode');
        },
        set: function (value) {
            this._setOption('refreshMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "selectTextOnEditStart", {
        get: function () {
            return this._getOption('selectTextOnEditStart');
        },
        set: function (value) {
            this._setOption('selectTextOnEditStart', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "startEditAction", {
        get: function () {
            return this._getOption('startEditAction');
        },
        set: function (value) {
            this._setOption('startEditAction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "useIcons", {
        get: function () {
            return this._getOption('useIcons');
        },
        set: function (value) {
            this._setOption('useIcons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowDragging", {
        get: function () {
            return this._getOption('allowDragging');
        },
        set: function (value) {
            this._setOption('allowDragging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowResizing", {
        get: function () {
            return this._getOption('allowResizing');
        },
        set: function (value) {
            this._setOption('allowResizing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "_optionPath", {
        get: function () {
            return 'editing';
        },
        enumerable: true,
        configurable: true
    });
    DxoEditingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-editing',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoEditingComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoEditingComponent.propDecorators = {
        "allowAdding": [{ type: Input },],
        "allowDeleting": [{ type: Input },],
        "allowUpdating": [{ type: Input },],
        "form": [{ type: Input },],
        "mode": [{ type: Input },],
        "popup": [{ type: Input },],
        "refreshMode": [{ type: Input },],
        "selectTextOnEditStart": [{ type: Input },],
        "startEditAction": [{ type: Input },],
        "texts": [{ type: Input },],
        "useIcons": [{ type: Input },],
        "allowDragging": [{ type: Input },],
        "allowResizing": [{ type: Input },],
    };
    return DxoEditingComponent;
}(NestedOption));
export { DxoEditingComponent };
var DxoEditingModule = (function () {
    function DxoEditingModule() {
    }
    DxoEditingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoEditingComponent
                    ],
                    exports: [
                        DxoEditingComponent
                    ],
                },] },
    ];
    return DxoEditingModule;
}());
export { DxoEditingModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9lZGl0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQVNmLHVDQUFZO0lBK0dqRCw2QkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDswQkFsSEcsNENBQVc7O1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7O2FBRTFDLFVBQWdCLEtBQXlCO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pDOzs7OzBCQUdHLDhDQUFhOztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzthQUU1QyxVQUFrQixLQUF5QjtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQzs7OzswQkFHRyw4Q0FBYTs7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7YUFFNUMsVUFBa0IsS0FBeUI7WUFD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QUFLO2dDQVFMLEtBQUs7MENBUUwsS0FBSztvQ0FRTCxLQUFLOzBCQVFMLEtBQUs7NkJBUUwsS0FBSztrQ0FRTCxLQUFLO2tDQVFMLEtBQUs7OzhCQXhJVjtFQXVDeUMsWUFBWTtTQUF4QyxtQkFBbUI7Ozs7O2dCQXdIL0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7cUJBQ3BCO2lCQUNGOzsyQkF0S0Q7O1NBdUthLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWVkaXRpbmcnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0VkaXRpbmdDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0FkZGluZygpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93QWRkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dBZGRpbmcodmFsdWU6IGJvb2xlYW4gfCBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dBZGRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0RlbGV0aW5nKCk6IGJvb2xlYW4gfCBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dEZWxldGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93RGVsZXRpbmcodmFsdWU6IGJvb2xlYW4gfCBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dEZWxldGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93VXBkYXRpbmcoKTogYm9vbGVhbiB8IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd1VwZGF0aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dVcGRhdGluZyh2YWx1ZTogYm9vbGVhbiB8IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd1VwZGF0aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9ybSgpOiBEZXZFeHByZXNzLnVpLmR4Rm9ybU9wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Zvcm0nKTtcclxuICAgIH1cclxuICAgIHNldCBmb3JtKHZhbHVlOiBEZXZFeHByZXNzLnVpLmR4Rm9ybU9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Zvcm0nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBvcHVwKCk6IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BvcHVwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcG9wdXAodmFsdWU6IERldkV4cHJlc3MudWkuZHhQb3B1cE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BvcHVwJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVmcmVzaE1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWZyZXNoTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlZnJlc2hNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlZnJlc2hNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0VGV4dE9uRWRpdFN0YXJ0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdFRleHRPbkVkaXRTdGFydCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdFRleHRPbkVkaXRTdGFydCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0VGV4dE9uRWRpdFN0YXJ0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhcnRFZGl0QWN0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RhcnRFZGl0QWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhcnRFZGl0QWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YXJ0RWRpdEFjdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRleHRzKCk6IHsgYWRkUm93Pzogc3RyaW5nLCBjYW5jZWxBbGxDaGFuZ2VzPzogc3RyaW5nLCBjYW5jZWxSb3dDaGFuZ2VzPzogc3RyaW5nLCBjb25maXJtRGVsZXRlTWVzc2FnZT86IHN0cmluZywgY29uZmlybURlbGV0ZVRpdGxlPzogc3RyaW5nLCBkZWxldGVSb3c/OiBzdHJpbmcsIGVkaXRSb3c/OiBzdHJpbmcsIHNhdmVBbGxDaGFuZ2VzPzogc3RyaW5nLCBzYXZlUm93Q2hhbmdlcz86IHN0cmluZywgdW5kZWxldGVSb3c/OiBzdHJpbmcsIHZhbGlkYXRpb25DYW5jZWxDaGFuZ2VzPzogc3RyaW5nIH0gfCB7IGFkZFJvdz86IHN0cmluZywgYWRkUm93VG9Ob2RlPzogc3RyaW5nLCBjYW5jZWxBbGxDaGFuZ2VzPzogc3RyaW5nLCBjYW5jZWxSb3dDaGFuZ2VzPzogc3RyaW5nLCBjb25maXJtRGVsZXRlTWVzc2FnZT86IHN0cmluZywgY29uZmlybURlbGV0ZVRpdGxlPzogc3RyaW5nLCBkZWxldGVSb3c/OiBzdHJpbmcsIGVkaXRSb3c/OiBzdHJpbmcsIHNhdmVBbGxDaGFuZ2VzPzogc3RyaW5nLCBzYXZlUm93Q2hhbmdlcz86IHN0cmluZywgdW5kZWxldGVSb3c/OiBzdHJpbmcsIHZhbGlkYXRpb25DYW5jZWxDaGFuZ2VzPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RleHRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dHModmFsdWU6IHsgYWRkUm93Pzogc3RyaW5nLCBjYW5jZWxBbGxDaGFuZ2VzPzogc3RyaW5nLCBjYW5jZWxSb3dDaGFuZ2VzPzogc3RyaW5nLCBjb25maXJtRGVsZXRlTWVzc2FnZT86IHN0cmluZywgY29uZmlybURlbGV0ZVRpdGxlPzogc3RyaW5nLCBkZWxldGVSb3c/OiBzdHJpbmcsIGVkaXRSb3c/OiBzdHJpbmcsIHNhdmVBbGxDaGFuZ2VzPzogc3RyaW5nLCBzYXZlUm93Q2hhbmdlcz86IHN0cmluZywgdW5kZWxldGVSb3c/OiBzdHJpbmcsIHZhbGlkYXRpb25DYW5jZWxDaGFuZ2VzPzogc3RyaW5nIH0gfCB7IGFkZFJvdz86IHN0cmluZywgYWRkUm93VG9Ob2RlPzogc3RyaW5nLCBjYW5jZWxBbGxDaGFuZ2VzPzogc3RyaW5nLCBjYW5jZWxSb3dDaGFuZ2VzPzogc3RyaW5nLCBjb25maXJtRGVsZXRlTWVzc2FnZT86IHN0cmluZywgY29uZmlybURlbGV0ZVRpdGxlPzogc3RyaW5nLCBkZWxldGVSb3c/OiBzdHJpbmcsIGVkaXRSb3c/OiBzdHJpbmcsIHNhdmVBbGxDaGFuZ2VzPzogc3RyaW5nLCBzYXZlUm93Q2hhbmdlcz86IHN0cmluZywgdW5kZWxldGVSb3c/OiBzdHJpbmcsIHZhbGlkYXRpb25DYW5jZWxDaGFuZ2VzPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RleHRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdXNlSWNvbnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndXNlSWNvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCB1c2VJY29ucyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndXNlSWNvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0RyYWdnaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93RHJhZ2dpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0RyYWdnaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0RyYWdnaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxsb3dSZXNpemluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd1Jlc2l6aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dSZXNpemluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dSZXNpemluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2VkaXRpbmcnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0VkaXRpbmdDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0VkaXRpbmdDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRWRpdGluZ01vZHVsZSB7IH1cclxuIl19