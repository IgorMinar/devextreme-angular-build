/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoEditingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoEditingComponent, _super);
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoEditingComponent.prototype, "allowAdding", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoEditingComponent.prototype, "allowDeleting", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoEditingComponent.prototype, "allowUpdating", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoEditingComponent.prototype, "form", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoEditingComponent.prototype, "mode", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoEditingComponent.prototype, "popup", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoEditingComponent.prototype, "refreshMode", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoEditingComponent.prototype, "selectTextOnEditStart", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxoEditingComponent.prototype, "startEditAction", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoEditingComponent.prototype, "texts", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoEditingComponent.prototype, "useIcons", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoEditingComponent.prototype, "allowDragging", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxoEditingComponent.prototype, "allowResizing", null);
    DxoEditingComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-editing',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoEditingComponent);
    return DxoEditingComponent;
}(NestedOption));
export { DxoEditingComponent };
var DxoEditingModule = /** @class */ (function () {
    function DxoEditingModule() {
    }
    DxoEditingModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoEditingComponent
            ],
            exports: [
                DxoEditingComponent
            ],
        })
    ], DxoEditingModule);
    return DxoEditingModule;
}());
export { DxoEditingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9lZGl0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU3hEO0lBQXlDLCtDQUFZO0lBK0dqRCw2QkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBbEhELHNCQUFJLDRDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxDQUFDO2FBQ0QsVUFBZ0IsS0FBeUI7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw4Q0FBYTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVDLENBQUM7YUFDRCxVQUFrQixLQUF5QjtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FIQTtJ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QkFDUCxtQkFBbUI7YUFDcEI7U0FDRixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tZWRpdGluZycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRWRpdGluZ0NvbXBvbmVudCBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93QWRkaW5nKCk6IGJvb2xlYW4gfCBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dBZGRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0FkZGluZyh2YWx1ZTogYm9vbGVhbiB8IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0FkZGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93RGVsZXRpbmcoKTogYm9vbGVhbiB8IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0RlbGV0aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dEZWxldGluZyh2YWx1ZTogYm9vbGVhbiB8IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0RlbGV0aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxsb3dVcGRhdGluZygpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93VXBkYXRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd1VwZGF0aW5nKHZhbHVlOiBib29sZWFuIHwgRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93VXBkYXRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb3JtKCk6IERldkV4cHJlc3MudWkuZHhGb3JtT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9ybScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvcm0odmFsdWU6IERldkV4cHJlc3MudWkuZHhGb3JtT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9ybScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcG9wdXAoKTogRGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncG9wdXAnKTtcclxuICAgIH1cclxuICAgIHNldCBwb3B1cCh2YWx1ZTogRGV2RXhwcmVzcy51aS5keFBvcHVwT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncG9wdXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZWZyZXNoTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlZnJlc2hNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVmcmVzaE1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVmcmVzaE1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3RUZXh0T25FZGl0U3RhcnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0VGV4dE9uRWRpdFN0YXJ0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0VGV4dE9uRWRpdFN0YXJ0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3RUZXh0T25FZGl0U3RhcnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdGFydEVkaXRBY3Rpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGFydEVkaXRBY3Rpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFydEVkaXRBY3Rpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhcnRFZGl0QWN0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGV4dHMoKTogeyBhZGRSb3c/OiBzdHJpbmcsIGNhbmNlbEFsbENoYW5nZXM/OiBzdHJpbmcsIGNhbmNlbFJvd0NoYW5nZXM/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVNZXNzYWdlPzogc3RyaW5nLCBjb25maXJtRGVsZXRlVGl0bGU/OiBzdHJpbmcsIGRlbGV0ZVJvdz86IHN0cmluZywgZWRpdFJvdz86IHN0cmluZywgc2F2ZUFsbENoYW5nZXM/OiBzdHJpbmcsIHNhdmVSb3dDaGFuZ2VzPzogc3RyaW5nLCB1bmRlbGV0ZVJvdz86IHN0cmluZywgdmFsaWRhdGlvbkNhbmNlbENoYW5nZXM/OiBzdHJpbmcgfSB8IHsgYWRkUm93Pzogc3RyaW5nLCBhZGRSb3dUb05vZGU/OiBzdHJpbmcsIGNhbmNlbEFsbENoYW5nZXM/OiBzdHJpbmcsIGNhbmNlbFJvd0NoYW5nZXM/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVNZXNzYWdlPzogc3RyaW5nLCBjb25maXJtRGVsZXRlVGl0bGU/OiBzdHJpbmcsIGRlbGV0ZVJvdz86IHN0cmluZywgZWRpdFJvdz86IHN0cmluZywgc2F2ZUFsbENoYW5nZXM/OiBzdHJpbmcsIHNhdmVSb3dDaGFuZ2VzPzogc3RyaW5nLCB1bmRlbGV0ZVJvdz86IHN0cmluZywgdmFsaWRhdGlvbkNhbmNlbENoYW5nZXM/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGV4dHMnKTtcclxuICAgIH1cclxuICAgIHNldCB0ZXh0cyh2YWx1ZTogeyBhZGRSb3c/OiBzdHJpbmcsIGNhbmNlbEFsbENoYW5nZXM/OiBzdHJpbmcsIGNhbmNlbFJvd0NoYW5nZXM/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVNZXNzYWdlPzogc3RyaW5nLCBjb25maXJtRGVsZXRlVGl0bGU/OiBzdHJpbmcsIGRlbGV0ZVJvdz86IHN0cmluZywgZWRpdFJvdz86IHN0cmluZywgc2F2ZUFsbENoYW5nZXM/OiBzdHJpbmcsIHNhdmVSb3dDaGFuZ2VzPzogc3RyaW5nLCB1bmRlbGV0ZVJvdz86IHN0cmluZywgdmFsaWRhdGlvbkNhbmNlbENoYW5nZXM/OiBzdHJpbmcgfSB8IHsgYWRkUm93Pzogc3RyaW5nLCBhZGRSb3dUb05vZGU/OiBzdHJpbmcsIGNhbmNlbEFsbENoYW5nZXM/OiBzdHJpbmcsIGNhbmNlbFJvd0NoYW5nZXM/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVNZXNzYWdlPzogc3RyaW5nLCBjb25maXJtRGVsZXRlVGl0bGU/OiBzdHJpbmcsIGRlbGV0ZVJvdz86IHN0cmluZywgZWRpdFJvdz86IHN0cmluZywgc2F2ZUFsbENoYW5nZXM/OiBzdHJpbmcsIHNhdmVSb3dDaGFuZ2VzPzogc3RyaW5nLCB1bmRlbGV0ZVJvdz86IHN0cmluZywgdmFsaWRhdGlvbkNhbmNlbENoYW5nZXM/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGV4dHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB1c2VJY29ucygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd1c2VJY29ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHVzZUljb25zKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd1c2VJY29ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93RHJhZ2dpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dEcmFnZ2luZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93RHJhZ2dpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93RHJhZ2dpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd1Jlc2l6aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93UmVzaXppbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd1Jlc2l6aW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd1Jlc2l6aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZWRpdGluZyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvRWRpdGluZ0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvRWRpdGluZ0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9FZGl0aW5nTW9kdWxlIHsgfVxyXG4iXX0=