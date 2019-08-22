/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, ElementRef, Renderer2, Inject, SkipSelf, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NestedOptionHost, extractTemplate } from '../../core/nested-option';
import { DxTemplateHost } from '../../core/template-host';
import { CollectionNestedOption } from '../../core/nested-option';
var DxiToolbarItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiToolbarItemComponent, _super);
    function DxiToolbarItemComponent(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.document = document;
        _this.element = element;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        templateHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxiToolbarItemComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "html", {
        get: function () {
            return this._getOption('html');
        },
        set: function (value) {
            this._setOption('html', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "options", {
        get: function () {
            return this._getOption('options');
        },
        set: function (value) {
            this._setOption('options', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "toolbar", {
        get: function () {
            return this._getOption('toolbar');
        },
        set: function (value) {
            this._setOption('toolbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "widget", {
        get: function () {
            return this._getOption('widget');
        },
        set: function (value) {
            this._setOption('widget', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'toolbarItems';
        },
        enumerable: true,
        configurable: true
    });
    DxiToolbarItemComponent.prototype.setTemplate = function (template) {
        this.template = template;
    };
    DxiToolbarItemComponent.prototype.ngAfterViewInit = function () {
        extractTemplate(this, this.element, this.renderer, this.document);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxiToolbarItemComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxiToolbarItemComponent.prototype, "html", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxiToolbarItemComponent.prototype, "location", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiToolbarItemComponent.prototype, "options", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiToolbarItemComponent.prototype, "template", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxiToolbarItemComponent.prototype, "text", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxiToolbarItemComponent.prototype, "toolbar", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxiToolbarItemComponent.prototype, "visible", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxiToolbarItemComponent.prototype, "widget", null);
    DxiToolbarItemComponent = tslib_1.__decorate([
        Component({
            selector: 'dxi-toolbar-item',
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
    ], DxiToolbarItemComponent);
    return DxiToolbarItemComponent;
}(CollectionNestedOption));
export { DxiToolbarItemComponent };
var DxiToolbarItemModule = /** @class */ (function () {
    function DxiToolbarItemModule() {
    }
    DxiToolbarItemModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxiToolbarItemComponent
            ],
            exports: [
                DxiToolbarItemComponent
            ],
        })
    ], DxiToolbarItemModule);
    return DxiToolbarItemModule;
}());
export { DxiToolbarItemModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1pdGVtLWR4aS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC90b29sYmFyLWl0ZW0tZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxFQUVOLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU3RSxPQUFPLEVBQW1CLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU2xFO0lBQTZDLG1EQUFzQjtJQStFL0QsaUNBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QixFQUM1QixRQUFtQixFQUNELFFBQWEsRUFDL0IsWUFBNEIsRUFDNUIsT0FBbUI7UUFMbkMsWUFNSSxpQkFBTyxTQUlWO1FBUmUsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUNELGNBQVEsR0FBUixRQUFRLENBQUs7UUFFL0IsYUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUUvQixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQztRQUMxRCxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUMvQixDQUFDO0lBdkZELHNCQUFJLDZDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFV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QUFFOzs7MERBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs7OzJEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7Ozt1REFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7MERBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs7OzBEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7Ozt5REFHUDtJQXBFUSx1QkFBdUI7UUFObkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsMkJBQTJCO1lBRXJDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztxQkFEcEMsMkJBQTJCO1NBRXZDLENBQUM7UUFnRmUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUVOLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoQixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFKbUMsZ0JBQWdCO1lBQ3RDLGdCQUFnQjtZQUNsQixTQUFTLFVBRUwsY0FBYztZQUNuQixVQUFVO09BcEYxQix1QkFBdUIsQ0FrR25DO0lBQUQsOEJBQUM7Q0FBQSxBQWxHRCxDQUE2QyxzQkFBc0IsR0FrR2xFO1NBbEdZLHVCQUF1QjtBQTRHcEM7SUFBQTtJQUFvQyxDQUFDO0lBQXhCLG9CQUFvQjtRQVJoQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osdUJBQXVCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUF1QjthQUN4QjtTQUNGLENBQUM7T0FDVyxvQkFBb0IsQ0FBSTtJQUFELDJCQUFDO0NBQUEsQUFBckMsSUFBcUM7U0FBeEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBJbmplY3QsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0LCBleHRyYWN0VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vY29yZS90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IElEeFRlbXBsYXRlSG9zdCwgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLXRvb2xiYXItaXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gICAgc3R5bGVzOiBbJzpob3N0IHsgZGlzcGxheTogYmxvY2s7IH0nXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3QsIER4VGVtcGxhdGVIb3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpVG9vbGJhckl0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgSUR4VGVtcGxhdGVIb3N0IHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBodG1sKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaHRtbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGh0bWwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaHRtbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGxvY2F0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbG9jYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBsb2NhdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2NhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9wdGlvbnMoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcHRpb25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb3B0aW9ucyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvcHRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0ZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RleHQnKTtcclxuICAgIH1cclxuICAgIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0b29sYmFyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG9vbGJhcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvb2xiYXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndG9vbGJhcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWRnZXQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWRnZXQnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWRnZXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkZ2V0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAndG9vbGJhckl0ZW1zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgICAgICAgICBASG9zdCgpIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRlbXBsYXRlSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRlbXBsYXRlKHRlbXBsYXRlOiBEeFRlbXBsYXRlRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGV4dHJhY3RUZW1wbGF0ZSh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMuZG9jdW1lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aVRvb2xiYXJJdGVtQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlUb29sYmFySXRlbUNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlUb29sYmFySXRlbU1vZHVsZSB7IH1cclxuIl19