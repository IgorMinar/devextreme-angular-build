/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
let DxoEditingComponent = class DxoEditingComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowAdding() {
        return this._getOption('allowAdding');
    }
    set allowAdding(value) {
        this._setOption('allowAdding', value);
    }
    get allowDeleting() {
        return this._getOption('allowDeleting');
    }
    set allowDeleting(value) {
        this._setOption('allowDeleting', value);
    }
    get allowUpdating() {
        return this._getOption('allowUpdating');
    }
    set allowUpdating(value) {
        this._setOption('allowUpdating', value);
    }
    get form() {
        return this._getOption('form');
    }
    set form(value) {
        this._setOption('form', value);
    }
    get mode() {
        return this._getOption('mode');
    }
    set mode(value) {
        this._setOption('mode', value);
    }
    get popup() {
        return this._getOption('popup');
    }
    set popup(value) {
        this._setOption('popup', value);
    }
    get refreshMode() {
        return this._getOption('refreshMode');
    }
    set refreshMode(value) {
        this._setOption('refreshMode', value);
    }
    get selectTextOnEditStart() {
        return this._getOption('selectTextOnEditStart');
    }
    set selectTextOnEditStart(value) {
        this._setOption('selectTextOnEditStart', value);
    }
    get startEditAction() {
        return this._getOption('startEditAction');
    }
    set startEditAction(value) {
        this._setOption('startEditAction', value);
    }
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    get useIcons() {
        return this._getOption('useIcons');
    }
    set useIcons(value) {
        this._setOption('useIcons', value);
    }
    get allowDragging() {
        return this._getOption('allowDragging');
    }
    set allowDragging(value) {
        this._setOption('allowDragging', value);
    }
    get allowResizing() {
        return this._getOption('allowResizing');
    }
    set allowResizing(value) {
        this._setOption('allowResizing', value);
    }
    get _optionPath() {
        return 'editing';
    }
};
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
export { DxoEditingComponent };
let DxoEditingModule = class DxoEditingModule {
};
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
export { DxoEditingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9lZGl0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU3hELElBQWEsbUJBQW1CLEdBQWhDLHlCQUFpQyxTQUFRLFlBQVk7SUErR2pELFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFsSEQsSUFBSSxXQUFXO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQXlCO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFHRCxJQUFJLGFBQWE7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBeUI7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFD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OlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1lZGl0aW5nJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9FZGl0aW5nQ29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxsb3dBZGRpbmcoKTogYm9vbGVhbiB8IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0FkZGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93QWRkaW5nKHZhbHVlOiBib29sZWFuIHwgRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93QWRkaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxsb3dEZWxldGluZygpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93RGVsZXRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0RlbGV0aW5nKHZhbHVlOiBib29sZWFuIHwgRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93RGVsZXRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd1VwZGF0aW5nKCk6IGJvb2xlYW4gfCBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dVcGRhdGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93VXBkYXRpbmcodmFsdWU6IGJvb2xlYW4gfCBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dVcGRhdGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvcm0oKTogRGV2RXhwcmVzcy51aS5keEZvcm1PcHRpb25zIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb3JtJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9ybSh2YWx1ZTogRGV2RXhwcmVzcy51aS5keEZvcm1PcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb3JtJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBtb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwb3B1cCgpOiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwb3B1cCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvcHVwKHZhbHVlOiBEZXZFeHByZXNzLnVpLmR4UG9wdXBPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwb3B1cCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlZnJlc2hNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVmcmVzaE1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCByZWZyZXNoTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWZyZXNoTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdFRleHRPbkVkaXRTdGFydCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3RUZXh0T25FZGl0U3RhcnQnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RUZXh0T25FZGl0U3RhcnQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlbGVjdFRleHRPbkVkaXRTdGFydCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0YXJ0RWRpdEFjdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YXJ0RWRpdEFjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXJ0RWRpdEFjdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGFydEVkaXRBY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0ZXh0cygpOiB7IGFkZFJvdz86IHN0cmluZywgY2FuY2VsQWxsQ2hhbmdlcz86IHN0cmluZywgY2FuY2VsUm93Q2hhbmdlcz86IHN0cmluZywgY29uZmlybURlbGV0ZU1lc3NhZ2U/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVUaXRsZT86IHN0cmluZywgZGVsZXRlUm93Pzogc3RyaW5nLCBlZGl0Um93Pzogc3RyaW5nLCBzYXZlQWxsQ2hhbmdlcz86IHN0cmluZywgc2F2ZVJvd0NoYW5nZXM/OiBzdHJpbmcsIHVuZGVsZXRlUm93Pzogc3RyaW5nLCB2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcz86IHN0cmluZyB9IHwgeyBhZGRSb3c/OiBzdHJpbmcsIGFkZFJvd1RvTm9kZT86IHN0cmluZywgY2FuY2VsQWxsQ2hhbmdlcz86IHN0cmluZywgY2FuY2VsUm93Q2hhbmdlcz86IHN0cmluZywgY29uZmlybURlbGV0ZU1lc3NhZ2U/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVUaXRsZT86IHN0cmluZywgZGVsZXRlUm93Pzogc3RyaW5nLCBlZGl0Um93Pzogc3RyaW5nLCBzYXZlQWxsQ2hhbmdlcz86IHN0cmluZywgc2F2ZVJvd0NoYW5nZXM/OiBzdHJpbmcsIHVuZGVsZXRlUm93Pzogc3RyaW5nLCB2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcz86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0ZXh0cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRleHRzKHZhbHVlOiB7IGFkZFJvdz86IHN0cmluZywgY2FuY2VsQWxsQ2hhbmdlcz86IHN0cmluZywgY2FuY2VsUm93Q2hhbmdlcz86IHN0cmluZywgY29uZmlybURlbGV0ZU1lc3NhZ2U/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVUaXRsZT86IHN0cmluZywgZGVsZXRlUm93Pzogc3RyaW5nLCBlZGl0Um93Pzogc3RyaW5nLCBzYXZlQWxsQ2hhbmdlcz86IHN0cmluZywgc2F2ZVJvd0NoYW5nZXM/OiBzdHJpbmcsIHVuZGVsZXRlUm93Pzogc3RyaW5nLCB2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcz86IHN0cmluZyB9IHwgeyBhZGRSb3c/OiBzdHJpbmcsIGFkZFJvd1RvTm9kZT86IHN0cmluZywgY2FuY2VsQWxsQ2hhbmdlcz86IHN0cmluZywgY2FuY2VsUm93Q2hhbmdlcz86IHN0cmluZywgY29uZmlybURlbGV0ZU1lc3NhZ2U/OiBzdHJpbmcsIGNvbmZpcm1EZWxldGVUaXRsZT86IHN0cmluZywgZGVsZXRlUm93Pzogc3RyaW5nLCBlZGl0Um93Pzogc3RyaW5nLCBzYXZlQWxsQ2hhbmdlcz86IHN0cmluZywgc2F2ZVJvd0NoYW5nZXM/OiBzdHJpbmcsIHVuZGVsZXRlUm93Pzogc3RyaW5nLCB2YWxpZGF0aW9uQ2FuY2VsQ2hhbmdlcz86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZXh0cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHVzZUljb25zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3VzZUljb25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlSWNvbnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3VzZUljb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxsb3dEcmFnZ2luZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0RyYWdnaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dEcmFnZ2luZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dEcmFnZ2luZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93UmVzaXppbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dSZXNpemluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93UmVzaXppbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93UmVzaXppbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdlZGl0aW5nJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9FZGl0aW5nQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9FZGl0aW5nQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0VkaXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==