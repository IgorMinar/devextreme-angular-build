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
var DxoFilterRowComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoFilterRowComponent, _super);
    function DxoFilterRowComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFilterRowComponent.prototype, "applyFilter", {
        get: function () {
            return this._getOption('applyFilter');
        },
        set: function (value) {
            this._setOption('applyFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "applyFilterText", {
        get: function () {
            return this._getOption('applyFilterText');
        },
        set: function (value) {
            this._setOption('applyFilterText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "betweenEndText", {
        get: function () {
            return this._getOption('betweenEndText');
        },
        set: function (value) {
            this._setOption('betweenEndText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "betweenStartText", {
        get: function () {
            return this._getOption('betweenStartText');
        },
        set: function (value) {
            this._setOption('betweenStartText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "operationDescriptions", {
        get: function () {
            return this._getOption('operationDescriptions');
        },
        set: function (value) {
            this._setOption('operationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "resetOperationText", {
        get: function () {
            return this._getOption('resetOperationText');
        },
        set: function (value) {
            this._setOption('resetOperationText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "showAllText", {
        get: function () {
            return this._getOption('showAllText');
        },
        set: function (value) {
            this._setOption('showAllText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "showOperationChooser", {
        get: function () {
            return this._getOption('showOperationChooser');
        },
        set: function (value) {
            this._setOption('showOperationChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterRowComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterRow';
        },
        enumerable: true,
        configurable: true
    });
    DxoFilterRowComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DxoFilterRowComponent.prototype, "applyFilter", null);
    tslib_1.__decorate([
        Input()
    ], DxoFilterRowComponent.prototype, "applyFilterText", null);
    tslib_1.__decorate([
        Input()
    ], DxoFilterRowComponent.prototype, "betweenEndText", null);
    tslib_1.__decorate([
        Input()
    ], DxoFilterRowComponent.prototype, "betweenStartText", null);
    tslib_1.__decorate([
        Input()
    ], DxoFilterRowComponent.prototype, "operationDescriptions", null);
    tslib_1.__decorate([
        Input()
    ], DxoFilterRowComponent.prototype, "resetOperationText", null);
    tslib_1.__decorate([
        Input()
    ], DxoFilterRowComponent.prototype, "showAllText", null);
    tslib_1.__decorate([
        Input()
    ], DxoFilterRowComponent.prototype, "showOperationChooser", null);
    tslib_1.__decorate([
        Input()
    ], DxoFilterRowComponent.prototype, "visible", null);
    DxoFilterRowComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-filter-row',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxoFilterRowComponent);
    return DxoFilterRowComponent;
}(NestedOption));
export { DxoFilterRowComponent };
var DxoFilterRowModule = /** @class */ (function () {
    function DxoFilterRowModule() {
    }
    DxoFilterRowModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoFilterRowComponent
            ],
            exports: [
                DxoFilterRowComponent
            ],
        })
    ], DxoFilterRowModule);
    return DxoFilterRowModule;
}());
export { DxoFilterRowModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXJvdy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQvIiwic291cmNlcyI6WyJmaWx0ZXItcm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUdwQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQ0gsZ0JBQWdCLEdBQ25CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBU3ZEO0lBQTJDLGlEQUFZO0lBK0VuRCwrQkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBbEZELHNCQUFJLDhDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsQ0FBQzthQUNELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxrREFBZTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlDLENBQUM7YUFDRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxpREFB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SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQVI5QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1oscUJBQXFCO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFCQUFxQjthQUN0QjtTQUNGLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1maWx0ZXItcm93JyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9GaWx0ZXJSb3dDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhcHBseUZpbHRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FwcGx5RmlsdGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXBwbHlGaWx0ZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXBwbHlGaWx0ZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhcHBseUZpbHRlclRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcHBseUZpbHRlclRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBhcHBseUZpbHRlclRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXBwbHlGaWx0ZXJUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmV0d2VlbkVuZFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiZXR3ZWVuRW5kVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJldHdlZW5FbmRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JldHdlZW5FbmRUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmV0d2VlblN0YXJ0VGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JldHdlZW5TdGFydFRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBiZXR3ZWVuU3RhcnRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JldHdlZW5TdGFydFRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBvcGVyYXRpb25EZXNjcmlwdGlvbnMoKTogeyBiZXR3ZWVuPzogc3RyaW5nLCBjb250YWlucz86IHN0cmluZywgZW5kc1dpdGg/OiBzdHJpbmcsIGVxdWFsPzogc3RyaW5nLCBncmVhdGVyVGhhbj86IHN0cmluZywgZ3JlYXRlclRoYW5PckVxdWFsPzogc3RyaW5nLCBsZXNzVGhhbj86IHN0cmluZywgbGVzc1RoYW5PckVxdWFsPzogc3RyaW5nLCBub3RDb250YWlucz86IHN0cmluZywgbm90RXF1YWw/OiBzdHJpbmcsIHN0YXJ0c1dpdGg/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb3BlcmF0aW9uRGVzY3JpcHRpb25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb3BlcmF0aW9uRGVzY3JpcHRpb25zKHZhbHVlOiB7IGJldHdlZW4/OiBzdHJpbmcsIGNvbnRhaW5zPzogc3RyaW5nLCBlbmRzV2l0aD86IHN0cmluZywgZXF1YWw/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuPzogc3RyaW5nLCBncmVhdGVyVGhhbk9yRXF1YWw/OiBzdHJpbmcsIGxlc3NUaGFuPzogc3RyaW5nLCBsZXNzVGhhbk9yRXF1YWw/OiBzdHJpbmcsIG5vdENvbnRhaW5zPzogc3RyaW5nLCBub3RFcXVhbD86IHN0cmluZywgc3RhcnRzV2l0aD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvcGVyYXRpb25EZXNjcmlwdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZXNldE9wZXJhdGlvblRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXNldE9wZXJhdGlvblRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCByZXNldE9wZXJhdGlvblRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVzZXRPcGVyYXRpb25UZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0FsbFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93QWxsVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dBbGxUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dBbGxUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd09wZXJhdGlvbkNob29zZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd09wZXJhdGlvbkNob29zZXInKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93T3BlcmF0aW9uQ2hvb3Nlcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd09wZXJhdGlvbkNob29zZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZmlsdGVyUm93JztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9GaWx0ZXJSb3dDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0ZpbHRlclJvd0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9GaWx0ZXJSb3dNb2R1bGUgeyB9XHJcbiJdfQ==