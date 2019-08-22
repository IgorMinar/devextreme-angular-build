/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, ElementRef, Renderer2, Inject, SkipSelf, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NestedOptionHost, extractTemplate } from '../../core/nested-option';
import { DxTemplateHost } from '../../core/template-host';
import { CollectionNestedOption } from '../../core/nested-option';
let DxiToolbarItemComponent = class DxiToolbarItemComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        super();
        this.renderer = renderer;
        this.document = document;
        this.element = element;
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
        templateHost.setHost(this);
    }
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    get html() {
        return this._getOption('html');
    }
    set html(value) {
        this._setOption('html', value);
    }
    get location() {
        return this._getOption('location');
    }
    set location(value) {
        this._setOption('location', value);
    }
    get options() {
        return this._getOption('options');
    }
    set options(value) {
        this._setOption('options', value);
    }
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    get toolbar() {
        return this._getOption('toolbar');
    }
    set toolbar(value) {
        this._setOption('toolbar', value);
    }
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    get widget() {
        return this._getOption('widget');
    }
    set widget(value) {
        this._setOption('widget', value);
    }
    get _optionPath() {
        return 'toolbarItems';
    }
    setTemplate(template) {
        this.template = template;
    }
    ngAfterViewInit() {
        extractTemplate(this, this.element, this.renderer, this.document);
    }
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
export { DxiToolbarItemComponent };
let DxiToolbarItemModule = class DxiToolbarItemModule {
};
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
export { DxiToolbarItemModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1pdGVtLWR4aS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC90b29sYmFyLWl0ZW0tZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxFQUVOLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU3RSxPQUFPLEVBQW1CLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU2xFLElBQWEsdUJBQXVCLEdBQXBDLDZCQUFxQyxTQUFRLHNCQUFzQjtJQStFL0QsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCLEVBQzVCLFFBQW1CLEVBQ0QsUUFBYSxFQUMvQixZQUE0QixFQUM1QixPQUFtQjtRQUMvQixLQUFLLEVBQUUsQ0FBQztRQUpJLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRS9CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFFL0IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBdkZELElBQUksUUFBUTtRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMs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Ozs7dURBR1A7QUFNRDtJQURDLEtBQUssRUFBRTs7O21EQUdQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7OztzREFHUDtBQU1EO0lBREMsS0FBSyxFQUFFOzs7c0RBR1A7QUFNRDtJQURDLEtBQUssRUFBRTs7O3FEQUdQO0FBcEVRLHVCQUF1QjtJQU5uQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRSwyQkFBMkI7UUFFckMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO2lCQURwQywyQkFBMkI7S0FFdkMsQ0FBQztJQWdGZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO0lBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO0lBRU4sbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hCLG1CQUFBLElBQUksRUFBRSxDQUFBOzZDQUptQyxnQkFBZ0I7UUFDdEMsZ0JBQWdCO1FBQ2xCLFNBQVMsVUFFTCxjQUFjO1FBQ25CLFVBQVU7R0FwRjFCLHVCQUF1QixDQWtHbkM7U0FsR1ksdUJBQXVCO0FBNEdwQyxJQUFhLG9CQUFvQixHQUFqQztDQUFxQyxDQUFBO0FBQXhCLG9CQUFvQjtJQVJoQyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWix1QkFBdUI7U0FDeEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBdUI7U0FDeEI7S0FDRixDQUFDO0dBQ1csb0JBQW9CLENBQUk7U0FBeEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBJbmplY3QsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0LCBleHRyYWN0VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vY29yZS90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IElEeFRlbXBsYXRlSG9zdCwgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLXRvb2xiYXItaXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gICAgc3R5bGVzOiBbJzpob3N0IHsgZGlzcGxheTogYmxvY2s7IH0nXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3QsIER4VGVtcGxhdGVIb3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpVG9vbGJhckl0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgSUR4VGVtcGxhdGVIb3N0IHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBodG1sKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaHRtbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGh0bWwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaHRtbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGxvY2F0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbG9jYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBsb2NhdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2NhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9wdGlvbnMoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcHRpb25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb3B0aW9ucyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvcHRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0ZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RleHQnKTtcclxuICAgIH1cclxuICAgIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0b29sYmFyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG9vbGJhcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvb2xiYXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndG9vbGJhcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWRnZXQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWRnZXQnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWRnZXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkZ2V0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAndG9vbGJhckl0ZW1zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgICAgICAgICBASG9zdCgpIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRlbXBsYXRlSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRlbXBsYXRlKHRlbXBsYXRlOiBEeFRlbXBsYXRlRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGV4dHJhY3RUZW1wbGF0ZSh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMuZG9jdW1lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aVRvb2xiYXJJdGVtQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlUb29sYmFySXRlbUNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlUb29sYmFySXRlbU1vZHVsZSB7IH1cclxuIl19