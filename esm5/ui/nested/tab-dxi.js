/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, ElementRef, Renderer2, Inject, SkipSelf, Input, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NestedOptionHost, extractTemplate } from '../../core/nested-option';
import { DxTemplateHost } from '../../core/template-host';
import { CollectionNestedOption } from '../../core/nested-option';
import { DxiItemComponent } from './item-dxi';
var DxiTabComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiTabComponent, _super);
    function DxiTabComponent(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.document = document;
        _this.element = element;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        templateHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxiTabComponent.prototype, "alignItemLabels", {
        get: function () {
            return this._getOption('alignItemLabels');
        },
        set: function (value) {
            this._setOption('alignItemLabels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "badge", {
        get: function () {
            return this._getOption('badge');
        },
        set: function (value) {
            this._setOption('badge', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "colCount", {
        get: function () {
            return this._getOption('colCount');
        },
        set: function (value) {
            this._setOption('colCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "colCountByScreen", {
        get: function () {
            return this._getOption('colCountByScreen');
        },
        set: function (value) {
            this._setOption('colCountByScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "icon", {
        get: function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "tabTemplate", {
        get: function () {
            return this._getOption('tabTemplate');
        },
        set: function (value) {
            this._setOption('tabTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "_optionPath", {
        get: function () {
            return 'tabs';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxiTabComponent.prototype.setTemplate = function (template) {
        this.template = template;
    };
    DxiTabComponent.prototype.ngAfterViewInit = function () {
        extractTemplate(this, this.element, this.renderer, this.document);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxiTabComponent.prototype, "alignItemLabels", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxiTabComponent.prototype, "badge", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxiTabComponent.prototype, "colCount", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiTabComponent.prototype, "colCountByScreen", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxiTabComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxiTabComponent.prototype, "icon", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], DxiTabComponent.prototype, "items", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiTabComponent.prototype, "tabTemplate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiTabComponent.prototype, "template", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxiTabComponent.prototype, "title", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiItemComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiTabComponent.prototype, "itemsChildren", null);
    DxiTabComponent = tslib_1.__decorate([
        Component({
            selector: 'dxi-tab',
            template: '<ng-content></ng-content>',
            providers: [NestedOptionHost, DxTemplateHost],
            styles: [':host { display: block; }']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__param(3, Inject(DOCUMENT)),
        tslib_1.__param(4, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost,
            Renderer2, Object, DxTemplateHost,
            ElementRef])
    ], DxiTabComponent);
    return DxiTabComponent;
}(CollectionNestedOption));
export { DxiTabComponent };
var DxiTabModule = /** @class */ (function () {
    function DxiTabModule() {
    }
    DxiTabModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxiTabComponent
            ],
            exports: [
                DxiTabComponent
            ],
        })
    ], DxiTabModule);
    return DxiTabModule;
}());
export { DxiTabModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWR4aS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC90YWItZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxFQUVOLFFBQVEsRUFDUixLQUFLLEVBQ0wsZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU3RSxPQUFPLEVBQW1CLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQVM5QztJQUFxQywyQ0FBc0I7SUErRnZELHlCQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEIsRUFDNUIsUUFBbUIsRUFDRCxRQUFhLEVBQy9CLFlBQTRCLEVBQzVCLE9BQW1CO1FBTG5DLFlBTUksaUJBQU8sU0FJVjtRQVJlLGNBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxjQUFRLEdBQVIsUUFBUSxDQUFLO1FBRS9CLGFBQU8sR0FBUCxPQUFPLENBQVk7UUFFL0IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDL0IsQ0FBQztJQXZHRCxz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LElBQUksRUFBRSxDQUFBO1FBRU4sbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQUptQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO1lBQ2xCLFNBQVMsVUFFTCxjQUFjO1lBQ25CLFVBQVU7T0FwRzFCLGVBQWUsQ0FrSDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxIRCxDQUFxQyxzQkFBc0IsR0FrSDFEO1NBbEhZLGVBQWU7QUE0SDVCO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBUnhCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixlQUFlO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGVBQWU7YUFDaEI7U0FDRixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtTQUFoQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBJbmplY3QsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dCxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QsIGV4dHJhY3RUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgSUR4VGVtcGxhdGVIb3N0LCBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeGlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS10YWInLFxyXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxuICAgIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9J10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0LCBEeFRlbXBsYXRlSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aVRhYkNvbXBvbmVudCBleHRlbmRzIENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBJRHhUZW1wbGF0ZUhvc3Qge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGlnbkl0ZW1MYWJlbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxpZ25JdGVtTGFiZWxzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxpZ25JdGVtTGFiZWxzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGlnbkl0ZW1MYWJlbHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBiYWRnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JhZGdlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFkZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmFkZ2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2xDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbENvdW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sQ291bnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2xDb3VudEJ5U2NyZWVuKCk6IHsgbGc/OiBudW1iZXIsIG1kPzogbnVtYmVyLCBzbT86IG51bWJlciwgeHM/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sQ291bnRCeVNjcmVlbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbENvdW50QnlTY3JlZW4odmFsdWU6IHsgbGc/OiBudW1iZXIsIG1kPzogbnVtYmVyLCBzbT86IG51bWJlciwgeHM/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sQ291bnRCeVNjcmVlbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaWNvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ljb24nKTtcclxuICAgIH1cclxuICAgIHNldCBpY29uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ljb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpdGVtcygpOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4Rm9ybVNpbXBsZUl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUdyb3VwSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtVGFiYmVkSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtRW1wdHlJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1CdXR0b25JdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8RGV2RXhwcmVzcy51aS5keEZvcm1TaW1wbGVJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1Hcm91cEl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybVRhYmJlZEl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUVtcHR5SXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtQnV0dG9uSXRlbT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2l0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYlRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYlRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0ZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aXRsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpdGxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAndGFicyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlJdGVtQ29tcG9uZW50KSlcclxuICAgIGdldCBpdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgICAgICAgICBASG9zdCgpIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRlbXBsYXRlSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRlbXBsYXRlKHRlbXBsYXRlOiBEeFRlbXBsYXRlRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGV4dHJhY3RUZW1wbGF0ZSh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMuZG9jdW1lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aVRhYkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpVGFiQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aVRhYk1vZHVsZSB7IH1cclxuIl19