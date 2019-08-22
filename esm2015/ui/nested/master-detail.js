/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, ElementRef, Renderer2, Inject, SkipSelf, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NestedOptionHost, extractTemplate } from '../../core/nested-option';
import { DxTemplateHost } from '../../core/template-host';
import { NestedOption } from '../../core/nested-option';
let DxoMasterDetailComponent = class DxoMasterDetailComponent extends NestedOption {
    constructor(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        super();
        this.renderer = renderer;
        this.document = document;
        this.element = element;
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
        templateHost.setHost(this);
    }
    get autoExpandAll() {
        return this._getOption('autoExpandAll');
    }
    set autoExpandAll(value) {
        this._setOption('autoExpandAll', value);
    }
    get enabled() {
        return this._getOption('enabled');
    }
    set enabled(value) {
        this._setOption('enabled', value);
    }
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    get _optionPath() {
        return 'masterDetail';
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
], DxoMasterDetailComponent.prototype, "autoExpandAll", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxoMasterDetailComponent.prototype, "enabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoMasterDetailComponent.prototype, "template", null);
DxoMasterDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-master-detail',
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
], DxoMasterDetailComponent);
export { DxoMasterDetailComponent };
let DxoMasterDetailModule = class DxoMasterDetailModule {
};
DxoMasterDetailModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoMasterDetailComponent
        ],
        exports: [
            DxoMasterDetailComponent
        ],
    })
], DxoMasterDetailModule);
export { DxoMasterDetailModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLWRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9tYXN0ZXItZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxFQUVOLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU3RSxPQUFPLEVBQW1CLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVN4RCxJQUFhLHdCQUF3QixHQUFyQyw4QkFBc0MsU0FBUSxZQUFZO0lBK0J0RCxZQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEIsRUFDNUIsUUFBbUIsRUFDRCxRQUFhLEVBQy9CLFlBQTRCLEVBQzVCLE9BQW1CO1FBQy9CLEtBQUssRUFBRSxDQUFDO1FBSkksYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNELGFBQVEsR0FBUixRQUFRLENBQUs7UUFFL0IsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUUvQixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUF2Q0QsSUFBSSxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdELElBQUksT0FBTztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFHRCxJQUFJLFFBQVE7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR0QsSUFBYyxXQUFXO1FBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQWVELFdBQVcsQ0FBQyxRQUE2QjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBQ0QsZUFBZTtRQUNYLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxDQUFDO0NBRUosQ0FBQTtBQWhERztJQURDLEtBQUssRUFBRTs7OzZEQUdQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7Ozt1REFHUDtBQU1EO0lBREMsS0FBSyxFQUFFOzs7d0RBR1A7QUFwQlEsd0JBQXdCO0lBTnBDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFLDJCQUEyQjtRQUVyQyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7aUJBRHBDLDJCQUEyQjtLQUV2QyxDQUFDO0lBZ0NlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFFTixtQkFBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBSm1DLGdCQUFnQjtRQUN0QyxnQkFBZ0I7UUFDbEIsU0FBUyxVQUVMLGNBQWM7UUFDbkIsVUFBVTtHQXBDMUIsd0JBQXdCLENBa0RwQztTQWxEWSx3QkFBd0I7QUE0RHJDLElBQWEscUJBQXFCLEdBQWxDO0NBQXNDLENBQUE7QUFBekIscUJBQXFCO0lBUmpDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLHdCQUF3QjtTQUN6QjtRQUNELE9BQU8sRUFBRTtZQUNQLHdCQUF3QjtTQUN6QjtLQUNGLENBQUM7R0FDVyxxQkFBcUIsQ0FBSTtTQUF6QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIFJlbmRlcmVyMixcclxuICAgIEluamVjdCxcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QsIGV4dHJhY3RUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgSUR4VGVtcGxhdGVIb3N0LCBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1tYXN0ZXItZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbiAgICBzdHlsZXM6IFsnOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfSddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdCwgRHhUZW1wbGF0ZUhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9NYXN0ZXJEZXRhaWxDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBJRHhUZW1wbGF0ZUhvc3Qge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhdXRvRXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2F1dG9FeHBhbmRBbGwnKTtcclxuICAgIH1cclxuICAgIHNldCBhdXRvRXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhdXRvRXhwYW5kQWxsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0ZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ21hc3RlckRldGFpbCc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgICAgICAgICAgQEhvc3QoKSB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0ZW1wbGF0ZUhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUZW1wbGF0ZSh0ZW1wbGF0ZTogRHhUZW1wbGF0ZURpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBleHRyYWN0VGVtcGxhdGUodGhpcywgdGhpcy5lbGVtZW50LCB0aGlzLnJlbmRlcmVyLCB0aGlzLmRvY3VtZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9NYXN0ZXJEZXRhaWxDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b01hc3RlckRldGFpbENvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9NYXN0ZXJEZXRhaWxNb2R1bGUgeyB9XHJcbiJdfQ==