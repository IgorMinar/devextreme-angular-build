/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoExportComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoExportComponent, _super);
    function DxoExportComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoExportComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "fileName", {
        get: function () {
            return this._getOption('fileName');
        },
        set: function (value) {
            this._setOption('fileName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "formats", {
        get: function () {
            return this._getOption('formats');
        },
        set: function (value) {
            this._setOption('formats', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "printingEnabled", {
        get: function () {
            return this._getOption('printingEnabled');
        },
        set: function (value) {
            this._setOption('printingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "proxyUrl", {
        get: function () {
            return this._getOption('proxyUrl');
        },
        set: function (value) {
            this._setOption('proxyUrl', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "allowExportSelectedData", {
        get: function () {
            return this._getOption('allowExportSelectedData');
        },
        set: function (value) {
            this._setOption('allowExportSelectedData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "customizeExcelCell", {
        get: function () {
            return this._getOption('customizeExcelCell');
        },
        set: function (value) {
            this._setOption('customizeExcelCell', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "excelFilterEnabled", {
        get: function () {
            return this._getOption('excelFilterEnabled');
        },
        set: function (value) {
            this._setOption('excelFilterEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "excelWrapTextEnabled", {
        get: function () {
            return this._getOption('excelWrapTextEnabled');
        },
        set: function (value) {
            this._setOption('excelWrapTextEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "ignoreExcelErrors", {
        get: function () {
            return this._getOption('ignoreExcelErrors');
        },
        set: function (value) {
            this._setOption('ignoreExcelErrors', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "_optionPath", {
        get: function () {
            return 'export';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoExportComponent.prototype, "backgroundColor", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoExportComponent.prototype, "enabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoExportComponent.prototype, "fileName", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], DxoExportComponent.prototype, "formats", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoExportComponent.prototype, "margin", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoExportComponent.prototype, "printingEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoExportComponent.prototype, "proxyUrl", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoExportComponent.prototype, "allowExportSelectedData", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Function])
    ], DxoExportComponent.prototype, "customizeExcelCell", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoExportComponent.prototype, "excelFilterEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoExportComponent.prototype, "excelWrapTextEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoExportComponent.prototype, "ignoreExcelErrors", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoExportComponent.prototype, "texts", null);
    DxoExportComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-export',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoExportComponent);
    return DxoExportComponent;
}(NestedOption));
export { DxoExportComponent };
var DxoExportModule = /** @class */ (function () {
    function DxoExportModule() {
    }
    DxoExportModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoExportComponent
            ],
            exports: [
                DxoExportComponent
            ],
        })
    ], DxoExportModule);
    return DxoExportModule;
}());
export { DxoExportModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2V4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBR3BDLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVN4RDtJQUF3Qyw4Q0FBWTtJQStHaEQsNEJBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQWxIRCxzQkFBSSwrQ0FBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUMsQ0FBQzthQUNELFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLHVDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxDQUFDO2FBQ0QsVUFBWSxLQUFjO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksd0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FB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QjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxrQkFBa0I7YUFDbkI7U0FDRixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWV4cG9ydCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRXhwb3J0Q29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmFja2dyb3VuZENvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFja2dyb3VuZENvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFja2dyb3VuZENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JhY2tncm91bmRDb2xvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWxlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpbGVOYW1lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsZU5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlsZU5hbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb3JtYXRzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Zvcm1hdHMnKTtcclxuICAgIH1cclxuICAgIHNldCBmb3JtYXRzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb3JtYXRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWFyZ2luKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWFyZ2luJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWFyZ2luKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21hcmdpbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHByaW50aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwcmludGluZ0VuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBwcmludGluZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ByaW50aW5nRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHByb3h5VXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncHJveHlVcmwnKTtcclxuICAgIH1cclxuICAgIHNldCBwcm94eVVybCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwcm94eVVybCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93RXhwb3J0U2VsZWN0ZWREYXRhKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93RXhwb3J0U2VsZWN0ZWREYXRhJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dFeHBvcnRTZWxlY3RlZERhdGEodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93RXhwb3J0U2VsZWN0ZWREYXRhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9taXplRXhjZWxDZWxsKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVFeGNlbENlbGwnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21pemVFeGNlbENlbGwodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVFeGNlbENlbGwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBleGNlbEZpbHRlckVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhjZWxGaWx0ZXJFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhjZWxGaWx0ZXJFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdleGNlbEZpbHRlckVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBleGNlbFdyYXBUZXh0RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdleGNlbFdyYXBUZXh0RW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4Y2VsV3JhcFRleHRFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdleGNlbFdyYXBUZXh0RW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGlnbm9yZUV4Y2VsRXJyb3JzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2lnbm9yZUV4Y2VsRXJyb3JzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaWdub3JlRXhjZWxFcnJvcnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2lnbm9yZUV4Y2VsRXJyb3JzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGV4dHMoKTogeyBleHBvcnRBbGw/OiBzdHJpbmcsIGV4cG9ydFNlbGVjdGVkUm93cz86IHN0cmluZywgZXhwb3J0VG8/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGV4dHMnKTtcclxuICAgIH1cclxuICAgIHNldCB0ZXh0cyh2YWx1ZTogeyBleHBvcnRBbGw/OiBzdHJpbmcsIGV4cG9ydFNlbGVjdGVkUm93cz86IHN0cmluZywgZXhwb3J0VG8/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGV4dHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdleHBvcnQnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0V4cG9ydENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvRXhwb3J0Q29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0V4cG9ydE1vZHVsZSB7IH1cclxuIl19