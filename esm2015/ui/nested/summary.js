/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiGroupItemComponent } from './group-item-dxi';
import { DxiTotalItemComponent } from './total-item-dxi';
let DxoSummaryComponent = class DxoSummaryComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get calculateCustomSummary() {
        return this._getOption('calculateCustomSummary');
    }
    set calculateCustomSummary(value) {
        this._setOption('calculateCustomSummary', value);
    }
    get groupItems() {
        return this._getOption('groupItems');
    }
    set groupItems(value) {
        this._setOption('groupItems', value);
    }
    get recalculateWhileEditing() {
        return this._getOption('recalculateWhileEditing');
    }
    set recalculateWhileEditing(value) {
        this._setOption('recalculateWhileEditing', value);
    }
    get skipEmptyValues() {
        return this._getOption('skipEmptyValues');
    }
    set skipEmptyValues(value) {
        this._setOption('skipEmptyValues', value);
    }
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    get totalItems() {
        return this._getOption('totalItems');
    }
    set totalItems(value) {
        this._setOption('totalItems', value);
    }
    get _optionPath() {
        return 'summary';
    }
    get groupItemsChildren() {
        return this._getOption('groupItems');
    }
    set groupItemsChildren(value) {
        this.setChildren('groupItems', value);
    }
    get totalItemsChildren() {
        return this._getOption('totalItems');
    }
    set totalItemsChildren(value) {
        this.setChildren('totalItems', value);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Function])
], DxoSummaryComponent.prototype, "calculateCustomSummary", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxoSummaryComponent.prototype, "groupItems", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxoSummaryComponent.prototype, "recalculateWhileEditing", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxoSummaryComponent.prototype, "skipEmptyValues", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoSummaryComponent.prototype, "texts", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxoSummaryComponent.prototype, "totalItems", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiGroupItemComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoSummaryComponent.prototype, "groupItemsChildren", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiTotalItemComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoSummaryComponent.prototype, "totalItemsChildren", null);
DxoSummaryComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-summary',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoSummaryComponent);
export { DxoSummaryComponent };
let DxoSummaryModule = class DxoSummaryModule {
};
DxoSummaryModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoSummaryComponent
        ],
        exports: [
            DxoSummaryComponent
        ],
    })
], DxoSummaryModule);
export { DxoSummaryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9zdW1tYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ0wsZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFPdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBU3pELElBQWEsbUJBQW1CLEdBQWhDLHlCQUFpQyxTQUFRLFlBQVk7SUF1RWpELFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUExRUQsSUFBSSxzQkFBc0I7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxzQkFBc0IsQ0FBQyxLQUFlO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUdELElBQUksVUFBVTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxD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bkMsbUJBQW1CLENBOEUvQjtTQTlFWSxtQkFBbUI7QUF3RmhDLElBQWEsZ0JBQWdCLEdBQTdCO0NBQWlDLENBQUE7QUFBcEIsZ0JBQWdCO0lBUjVCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLG1CQUFtQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNQLG1CQUFtQjtTQUNwQjtLQUNGLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dCxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4aUdyb3VwSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZ3JvdXAtaXRlbS1keGknO1xyXG5pbXBvcnQgeyBEeGlUb3RhbEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3RvdGFsLWl0ZW0tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLXN1bW1hcnknLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1N1bW1hcnlDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjYWxjdWxhdGVDdXN0b21TdW1tYXJ5KCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYWxjdWxhdGVDdXN0b21TdW1tYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeSh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhbGN1bGF0ZUN1c3RvbVN1bW1hcnknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBncm91cEl0ZW1zKCk6IEFycmF5PGFueSB8IHsgYWxpZ25CeUNvbHVtbj86IGJvb2xlYW4sIGNvbHVtbj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBkaXNwbGF5Rm9ybWF0Pzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBzaG93SW5Db2x1bW4/OiBzdHJpbmcsIHNob3dJbkdyb3VwRm9vdGVyPzogYm9vbGVhbiwgc2tpcEVtcHR5VmFsdWVzPzogYm9vbGVhbiwgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZhbHVlRm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwSXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cEl0ZW1zKHZhbHVlOiBBcnJheTxhbnkgfCB7IGFsaWduQnlDb2x1bW4/OiBib29sZWFuLCBjb2x1bW4/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheUZvcm1hdD86IHN0cmluZywgbmFtZT86IHN0cmluZywgc2hvd0luQ29sdW1uPzogc3RyaW5nLCBzaG93SW5Hcm91cEZvb3Rlcj86IGJvb2xlYW4sIHNraXBFbXB0eVZhbHVlcz86IGJvb2xlYW4sIHN1bW1hcnlUeXBlPzogc3RyaW5nLCB2YWx1ZUZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cEl0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVjYWxjdWxhdGVXaGlsZUVkaXRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVjYWxjdWxhdGVXaGlsZUVkaXRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCByZWNhbGN1bGF0ZVdoaWxlRWRpdGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVjYWxjdWxhdGVXaGlsZUVkaXRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBza2lwRW1wdHlWYWx1ZXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2tpcEVtcHR5VmFsdWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2tpcEVtcHR5VmFsdWVzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdza2lwRW1wdHlWYWx1ZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0ZXh0cygpOiB7IGF2Zz86IHN0cmluZywgYXZnT3RoZXJDb2x1bW4/OiBzdHJpbmcsIGNvdW50Pzogc3RyaW5nLCBtYXg/OiBzdHJpbmcsIG1heE90aGVyQ29sdW1uPzogc3RyaW5nLCBtaW4/OiBzdHJpbmcsIG1pbk90aGVyQ29sdW1uPzogc3RyaW5nLCBzdW0/OiBzdHJpbmcsIHN1bU90aGVyQ29sdW1uPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RleHRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dHModmFsdWU6IHsgYXZnPzogc3RyaW5nLCBhdmdPdGhlckNvbHVtbj86IHN0cmluZywgY291bnQ/OiBzdHJpbmcsIG1heD86IHN0cmluZywgbWF4T3RoZXJDb2x1bW4/OiBzdHJpbmcsIG1pbj86IHN0cmluZywgbWluT3RoZXJDb2x1bW4/OiBzdHJpbmcsIHN1bT86IHN0cmluZywgc3VtT3RoZXJDb2x1bW4/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGV4dHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0b3RhbEl0ZW1zKCk6IEFycmF5PGFueSB8IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjb2x1bW4/OiBzdHJpbmcsIGNzc0NsYXNzPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHNob3dJbkNvbHVtbj86IHN0cmluZywgc2tpcEVtcHR5VmFsdWVzPzogYm9vbGVhbiwgc3VtbWFyeVR5cGU/OiBzdHJpbmcsIHZhbHVlRm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RvdGFsSXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCB0b3RhbEl0ZW1zKHZhbHVlOiBBcnJheTxhbnkgfCB7IGFsaWdubWVudD86IHN0cmluZywgY29sdW1uPzogc3RyaW5nLCBjc3NDbGFzcz86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBkaXNwbGF5Rm9ybWF0Pzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBzaG93SW5Db2x1bW4/OiBzdHJpbmcsIHNraXBFbXB0eVZhbHVlcz86IGJvb2xlYW4sIHN1bW1hcnlUeXBlPzogc3RyaW5nLCB2YWx1ZUZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0b3RhbEl0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnc3VtbWFyeSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlHcm91cEl0ZW1Db21wb25lbnQpKVxyXG4gICAgZ2V0IGdyb3VwSXRlbXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpR3JvdXBJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBJdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwSXRlbXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2dyb3VwSXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVRvdGFsSXRlbUNvbXBvbmVudCkpXHJcbiAgICBnZXQgdG90YWxJdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlUb3RhbEl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0b3RhbEl0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdG90YWxJdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndG90YWxJdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b1N1bW1hcnlDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1N1bW1hcnlDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU3VtbWFyeU1vZHVsZSB7IH1cclxuIl19