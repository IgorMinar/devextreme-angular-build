/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoOperationDescriptionsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoOperationDescriptionsComponent, _super);
    function DxoOperationDescriptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "between", {
        get: function () {
            return this._getOption('between');
        },
        set: function (value) {
            this._setOption('between', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "contains", {
        get: function () {
            return this._getOption('contains');
        },
        set: function (value) {
            this._setOption('contains', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "endsWith", {
        get: function () {
            return this._getOption('endsWith');
        },
        set: function (value) {
            this._setOption('endsWith', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "equal", {
        get: function () {
            return this._getOption('equal');
        },
        set: function (value) {
            this._setOption('equal', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "greaterThan", {
        get: function () {
            return this._getOption('greaterThan');
        },
        set: function (value) {
            this._setOption('greaterThan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "greaterThanOrEqual", {
        get: function () {
            return this._getOption('greaterThanOrEqual');
        },
        set: function (value) {
            this._setOption('greaterThanOrEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "lessThan", {
        get: function () {
            return this._getOption('lessThan');
        },
        set: function (value) {
            this._setOption('lessThan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "lessThanOrEqual", {
        get: function () {
            return this._getOption('lessThanOrEqual');
        },
        set: function (value) {
            this._setOption('lessThanOrEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "notContains", {
        get: function () {
            return this._getOption('notContains');
        },
        set: function (value) {
            this._setOption('notContains', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "notEqual", {
        get: function () {
            return this._getOption('notEqual');
        },
        set: function (value) {
            this._setOption('notEqual', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "startsWith", {
        get: function () {
            return this._getOption('startsWith');
        },
        set: function (value) {
            this._setOption('startsWith', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOperationDescriptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'operationDescriptions';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoOperationDescriptionsComponent.prototype, "between", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoOperationDescriptionsComponent.prototype, "contains", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoOperationDescriptionsComponent.prototype, "endsWith", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoOperationDescriptionsComponent.prototype, "equal", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoOperationDescriptionsComponent.prototype, "greaterThan", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoOperationDescriptionsComponent.prototype, "greaterThanOrEqual", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoOperationDescriptionsComponent.prototype, "lessThan", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoOperationDescriptionsComponent.prototype, "lessThanOrEqual", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoOperationDescriptionsComponent.prototype, "notContains", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoOperationDescriptionsComponent.prototype, "notEqual", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoOperationDescriptionsComponent.prototype, "startsWith", null);
    DxoOperationDescriptionsComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-operation-descriptions',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoOperationDescriptionsComponent);
    return DxoOperationDescriptionsComponent;
}(NestedOption));
export { DxoOperationDescriptionsComponent };
var DxoOperationDescriptionsModule = /** @class */ (function () {
    function DxoOperationDescriptionsModule() {
    }
    DxoOperationDescriptionsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoOperationDescriptionsComponent
            ],
            exports: [
                DxoOperationDescriptionsComponent
            ],
        })
    ], DxoOperationDescriptionsModule);
    return DxoOperationDescriptionsModule;
}());
export { DxoOperationDescriptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9uLWRlc2NyaXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9vcGVyYXRpb24tZGVzY3JpcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU3hEO0lBQXVELDZEQUFZO0lBK0YvRCwyQ0FBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBbEdELHNCQUFJLHNEQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxDQUFDO2FBQ0QsVUFBWSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksdURBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7YUFDRCxVQUFhLEtBQWE7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BSEE7SUFNRCxzQkFB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UDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7d0VBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs7O3FFQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7Ozt1RUFHUDtJQXBGUSxpQ0FBaUM7UUFON0MsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQURwQixFQUFFO1NBRWQsQ0FBQztRQWdHZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BaEduQyxpQ0FBaUMsQ0FzRzdDO0lBQUQsd0NBQUM7Q0FBQSxBQXRHRCxDQUF1RCxZQUFZLEdBc0dsRTtTQXRHWSxpQ0FBaUM7QUFnSDlDO0lBQUE7SUFBOEMsQ0FBQztJQUFsQyw4QkFBOEI7UUFSMUMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGlDQUFpQzthQUNsQztZQUNELE9BQU8sRUFBRTtnQkFDUCxpQ0FBaUM7YUFDbEM7U0FDRixDQUFDO09BQ1csOEJBQThCLENBQUk7SUFBRCxxQ0FBQztDQUFBLEFBQS9DLElBQStDO1NBQWxDLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1vcGVyYXRpb24tZGVzY3JpcHRpb25zJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9PcGVyYXRpb25EZXNjcmlwdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBiZXR3ZWVuKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmV0d2VlbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJldHdlZW4odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmV0d2VlbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbnRhaW5zKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29udGFpbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb250YWlucyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb250YWlucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVuZHNXaXRoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5kc1dpdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBlbmRzV2l0aCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbmRzV2l0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVxdWFsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXF1YWwnKTtcclxuICAgIH1cclxuICAgIHNldCBlcXVhbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlcXVhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyZWF0ZXJUaGFuKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JlYXRlclRoYW4nKTtcclxuICAgIH1cclxuICAgIHNldCBncmVhdGVyVGhhbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncmVhdGVyVGhhbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyZWF0ZXJUaGFuT3JFcXVhbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyZWF0ZXJUaGFuT3JFcXVhbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyZWF0ZXJUaGFuT3JFcXVhbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncmVhdGVyVGhhbk9yRXF1YWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsZXNzVGhhbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xlc3NUaGFuJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGVzc1RoYW4odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbGVzc1RoYW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsZXNzVGhhbk9yRXF1YWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsZXNzVGhhbk9yRXF1YWwnKTtcclxuICAgIH1cclxuICAgIHNldCBsZXNzVGhhbk9yRXF1YWwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbGVzc1RoYW5PckVxdWFsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbm90Q29udGFpbnMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdub3RDb250YWlucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5vdENvbnRhaW5zKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ25vdENvbnRhaW5zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbm90RXF1YWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdub3RFcXVhbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5vdEVxdWFsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ25vdEVxdWFsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhcnRzV2l0aCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YXJ0c1dpdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFydHNXaXRoKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YXJ0c1dpdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdvcGVyYXRpb25EZXNjcmlwdGlvbnMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b09wZXJhdGlvbkRlc2NyaXB0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvT3BlcmF0aW9uRGVzY3JpcHRpb25zQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b09wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSB7IH1cclxuIl19