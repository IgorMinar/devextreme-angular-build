/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoFilterOperationDescriptionsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoFilterOperationDescriptionsComponent, _super);
    function DxoFilterOperationDescriptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "between", {
        get: function () {
            return this._getOption('between');
        },
        set: function (value) {
            this._setOption('between', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "contains", {
        get: function () {
            return this._getOption('contains');
        },
        set: function (value) {
            this._setOption('contains', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "endsWith", {
        get: function () {
            return this._getOption('endsWith');
        },
        set: function (value) {
            this._setOption('endsWith', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "equal", {
        get: function () {
            return this._getOption('equal');
        },
        set: function (value) {
            this._setOption('equal', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "greaterThan", {
        get: function () {
            return this._getOption('greaterThan');
        },
        set: function (value) {
            this._setOption('greaterThan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "greaterThanOrEqual", {
        get: function () {
            return this._getOption('greaterThanOrEqual');
        },
        set: function (value) {
            this._setOption('greaterThanOrEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "isBlank", {
        get: function () {
            return this._getOption('isBlank');
        },
        set: function (value) {
            this._setOption('isBlank', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "isNotBlank", {
        get: function () {
            return this._getOption('isNotBlank');
        },
        set: function (value) {
            this._setOption('isNotBlank', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "lessThan", {
        get: function () {
            return this._getOption('lessThan');
        },
        set: function (value) {
            this._setOption('lessThan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "lessThanOrEqual", {
        get: function () {
            return this._getOption('lessThanOrEqual');
        },
        set: function (value) {
            this._setOption('lessThanOrEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "notContains", {
        get: function () {
            return this._getOption('notContains');
        },
        set: function (value) {
            this._setOption('notContains', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "notEqual", {
        get: function () {
            return this._getOption('notEqual');
        },
        set: function (value) {
            this._setOption('notEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "startsWith", {
        get: function () {
            return this._getOption('startsWith');
        },
        set: function (value) {
            this._setOption('startsWith', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterOperationDescriptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterOperationDescriptions';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "between", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "contains", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "endsWith", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "equal", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "greaterThan", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "greaterThanOrEqual", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "isBlank", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "isNotBlank", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "lessThan", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "lessThanOrEqual", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "notContains", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "notEqual", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoFilterOperationDescriptionsComponent.prototype, "startsWith", null);
    DxoFilterOperationDescriptionsComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-filter-operation-descriptions',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoFilterOperationDescriptionsComponent);
    return DxoFilterOperationDescriptionsComponent;
}(NestedOption));
export { DxoFilterOperationDescriptionsComponent };
var DxoFilterOperationDescriptionsModule = /** @class */ (function () {
    function DxoFilterOperationDescriptionsModule() {
    }
    DxoFilterOperationDescriptionsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoFilterOperationDescriptionsComponent
            ],
            exports: [
                DxoFilterOperationDescriptionsComponent
            ],
        })
    ], DxoFilterOperationDescriptionsModule);
    return DxoFilterOperationDescriptionsModule;
}());
export { DxoFilterOperationDescriptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW9wZXJhdGlvbi1kZXNjcmlwdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvZmlsdGVyLW9wZXJhdGlvbi1kZXNjcmlwdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUdwQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFTeEQ7SUFBNkQsbUVBQVk7SUErR3JFLGlEQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFsSEQsc0JBQUksNERBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7YUFDRCxVQUFZLEtBQWE7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw2REFBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsQ0FBQzthQUNELFVBQWEsS0FBYTtZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7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QUNQLHVDQUF1QzthQUN4QztTQUNGLENBQUM7T0FDVyxvQ0FBb0MsQ0FBSTtJQUFELDJDQUFDO0NBQUEsQUFBckQsSUFBcUQ7U0FBeEMsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWZpbHRlci1vcGVyYXRpb24tZGVzY3JpcHRpb25zJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9GaWx0ZXJPcGVyYXRpb25EZXNjcmlwdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBiZXR3ZWVuKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmV0d2VlbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJldHdlZW4odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmV0d2VlbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbnRhaW5zKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29udGFpbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb250YWlucyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb250YWlucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVuZHNXaXRoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5kc1dpdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBlbmRzV2l0aCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbmRzV2l0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVxdWFsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXF1YWwnKTtcclxuICAgIH1cclxuICAgIHNldCBlcXVhbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlcXVhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyZWF0ZXJUaGFuKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JlYXRlclRoYW4nKTtcclxuICAgIH1cclxuICAgIHNldCBncmVhdGVyVGhhbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncmVhdGVyVGhhbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyZWF0ZXJUaGFuT3JFcXVhbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyZWF0ZXJUaGFuT3JFcXVhbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyZWF0ZXJUaGFuT3JFcXVhbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncmVhdGVyVGhhbk9yRXF1YWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpc0JsYW5rKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXNCbGFuaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGlzQmxhbmsodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXNCbGFuaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGlzTm90QmxhbmsoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpc05vdEJsYW5rJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXNOb3RCbGFuayh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpc05vdEJsYW5rJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGVzc1RoYW4oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsZXNzVGhhbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxlc3NUaGFuKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xlc3NUaGFuJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGVzc1RoYW5PckVxdWFsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbGVzc1RoYW5PckVxdWFsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGVzc1RoYW5PckVxdWFsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xlc3NUaGFuT3JFcXVhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG5vdENvbnRhaW5zKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbm90Q29udGFpbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBub3RDb250YWlucyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdub3RDb250YWlucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG5vdEVxdWFsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbm90RXF1YWwnKTtcclxuICAgIH1cclxuICAgIHNldCBub3RFcXVhbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdub3RFcXVhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0YXJ0c1dpdGgoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGFydHNXaXRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhcnRzV2l0aCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGFydHNXaXRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZmlsdGVyT3BlcmF0aW9uRGVzY3JpcHRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9GaWx0ZXJPcGVyYXRpb25EZXNjcmlwdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0ZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9GaWx0ZXJPcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUgeyB9XHJcbiJdfQ==