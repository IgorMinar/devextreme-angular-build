/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, ElementRef, Renderer2, Inject, SkipSelf, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NestedOptionHost, extractTemplate } from '../../core/nested-option';
import { DxTemplateHost } from '../../core/template-host';
import { DxiButtonGroupItem } from './base/button-group-item-dxi';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
import { DxiTabComponent } from './tab-dxi';
import { DxiLocationComponent } from './location-dxi';
var DxiItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiItemComponent, _super);
    function DxiItemComponent(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.document = document;
        _this.element = element;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        templateHost.setHost(_this);
        return _this;
    }
    DxiItemComponent_1 = DxiItemComponent;
    Object.defineProperty(DxiItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'items';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "tabsChildren", {
        get: function () {
            return this._getOption('tabs');
        },
        set: function (value) {
            this.setChildren('tabs', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiItemComponent.prototype, "locationChildren", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this.setChildren('location', value);
        },
        enumerable: true,
        configurable: true
    });
    DxiItemComponent.prototype.setTemplate = function (template) {
        this.template = template;
    };
    DxiItemComponent.prototype.ngAfterViewInit = function () {
        extractTemplate(this, this.element, this.renderer, this.document);
    };
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiItemComponent_1; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiItemComponent.prototype, "itemsChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiValidationRuleComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiItemComponent.prototype, "validationRulesChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiTabComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiItemComponent.prototype, "tabsChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiLocationComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiItemComponent.prototype, "locationChildren", null);
    DxiItemComponent = DxiItemComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'dxi-item',
            template: '<ng-content></ng-content>',
            providers: [NestedOptionHost, DxTemplateHost],
            inputs: [
                'disabled',
                'html',
                'icon',
                'template',
                'text',
                'title',
                'visible',
                'onClick',
                'type',
                'baseSize',
                'box',
                'ratio',
                'shrink',
                'hint',
                'beginGroup',
                'closeMenuOnClick',
                'items',
                'selectable',
                'selected',
                'colSpan',
                'cssClass',
                'dataField',
                'editorOptions',
                'editorType',
                'helpText',
                'isRequired',
                'itemType',
                'label',
                'name',
                'validationRules',
                'visibleIndex',
                'alignItemLabels',
                'caption',
                'colCount',
                'colCountByScreen',
                'tabPanelOptions',
                'tabs',
                'badge',
                'tabTemplate',
                'alignment',
                'buttonOptions',
                'horizontalAlignment',
                'verticalAlignment',
                'imageAlt',
                'imageSrc',
                'formatName',
                'formatValues',
                'locateInMenu',
                'location',
                'menuItemTemplate',
                'options',
                'showText',
                'widget',
                'key',
                'showChevron',
                'menuTemplate',
                'heightRatio',
                'widthRatio',
                'expanded',
                'hasItems',
                'parentId'
            ],
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
    ], DxiItemComponent);
    return DxiItemComponent;
    var DxiItemComponent_1;
}(DxiButtonGroupItem));
export { DxiItemComponent };
var DxiItemModule = /** @class */ (function () {
    function DxiItemModule() {
    }
    DxiItemModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxiItemComponent
            ],
            exports: [
                DxiItemComponent
            ],
        })
    ], DxiItemModule);
    return DxiItemModule;
}());
export { DxiItemModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvaXRlbS1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxFQUVOLFFBQVEsRUFDUixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTdFLE9BQU8sRUFBbUIsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXdFdEQ7SUFBc0MsNENBQWtCO0lBdUNwRCwwQkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCLEVBQzVCLFFBQW1CLEVBQ0QsUUFBYSxFQUMvQixZQUE0QixFQUM1QixPQUFtQjtRQUxuQyxZQU1JLGlCQUFPLFNBSVY7UUFSZSxjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0QsY0FBUSxHQUFSLFFBQVEsQ0FBSztRQUUvQixhQUFPLEdBQVAsT0FBTyxDQUFZO1FBRS9CLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxD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OEI7U0FBakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBJbmplY3QsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QsIGV4dHJhY3RUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgSUR4VGVtcGxhdGVIb3N0LCBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4aUJ1dHRvbkdyb3VwSXRlbSB9IGZyb20gJy4vYmFzZS9idXR0b24tZ3JvdXAtaXRlbS1keGknO1xyXG5pbXBvcnQgeyBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsaWRhdGlvbi1ydWxlLWR4aSc7XHJcbmltcG9ydCB7IER4aVRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLWR4aSc7XHJcbmltcG9ydCB7IER4aUxvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2NhdGlvbi1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktaXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gICAgc3R5bGVzOiBbJzpob3N0IHsgZGlzcGxheTogYmxvY2s7IH0nXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3QsIER4VGVtcGxhdGVIb3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdkaXNhYmxlZCcsXHJcbiAgICAgICAgJ2h0bWwnLFxyXG4gICAgICAgICdpY29uJyxcclxuICAgICAgICAndGVtcGxhdGUnLFxyXG4gICAgICAgICd0ZXh0JyxcclxuICAgICAgICAndGl0bGUnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnb25DbGljaycsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICdiYXNlU2l6ZScsXHJcbiAgICAgICAgJ2JveCcsXHJcbiAgICAgICAgJ3JhdGlvJyxcclxuICAgICAgICAnc2hyaW5rJyxcclxuICAgICAgICAnaGludCcsXHJcbiAgICAgICAgJ2JlZ2luR3JvdXAnLFxyXG4gICAgICAgICdjbG9zZU1lbnVPbkNsaWNrJyxcclxuICAgICAgICAnaXRlbXMnLFxyXG4gICAgICAgICdzZWxlY3RhYmxlJyxcclxuICAgICAgICAnc2VsZWN0ZWQnLFxyXG4gICAgICAgICdjb2xTcGFuJyxcclxuICAgICAgICAnY3NzQ2xhc3MnLFxyXG4gICAgICAgICdkYXRhRmllbGQnLFxyXG4gICAgICAgICdlZGl0b3JPcHRpb25zJyxcclxuICAgICAgICAnZWRpdG9yVHlwZScsXHJcbiAgICAgICAgJ2hlbHBUZXh0JyxcclxuICAgICAgICAnaXNSZXF1aXJlZCcsXHJcbiAgICAgICAgJ2l0ZW1UeXBlJyxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAndmFsaWRhdGlvblJ1bGVzJyxcclxuICAgICAgICAndmlzaWJsZUluZGV4JyxcclxuICAgICAgICAnYWxpZ25JdGVtTGFiZWxzJyxcclxuICAgICAgICAnY2FwdGlvbicsXHJcbiAgICAgICAgJ2NvbENvdW50JyxcclxuICAgICAgICAnY29sQ291bnRCeVNjcmVlbicsXHJcbiAgICAgICAgJ3RhYlBhbmVsT3B0aW9ucycsXHJcbiAgICAgICAgJ3RhYnMnLFxyXG4gICAgICAgICdiYWRnZScsXHJcbiAgICAgICAgJ3RhYlRlbXBsYXRlJyxcclxuICAgICAgICAnYWxpZ25tZW50JyxcclxuICAgICAgICAnYnV0dG9uT3B0aW9ucycsXHJcbiAgICAgICAgJ2hvcml6b250YWxBbGlnbm1lbnQnLFxyXG4gICAgICAgICd2ZXJ0aWNhbEFsaWdubWVudCcsXHJcbiAgICAgICAgJ2ltYWdlQWx0JyxcclxuICAgICAgICAnaW1hZ2VTcmMnLFxyXG4gICAgICAgICdmb3JtYXROYW1lJyxcclxuICAgICAgICAnZm9ybWF0VmFsdWVzJyxcclxuICAgICAgICAnbG9jYXRlSW5NZW51JyxcclxuICAgICAgICAnbG9jYXRpb24nLFxyXG4gICAgICAgICdtZW51SXRlbVRlbXBsYXRlJyxcclxuICAgICAgICAnb3B0aW9ucycsXHJcbiAgICAgICAgJ3Nob3dUZXh0JyxcclxuICAgICAgICAnd2lkZ2V0JyxcclxuICAgICAgICAna2V5JyxcclxuICAgICAgICAnc2hvd0NoZXZyb24nLFxyXG4gICAgICAgICdtZW51VGVtcGxhdGUnLFxyXG4gICAgICAgICdoZWlnaHRSYXRpbycsXHJcbiAgICAgICAgJ3dpZHRoUmF0aW8nLFxyXG4gICAgICAgICdleHBhbmRlZCcsXHJcbiAgICAgICAgJ2hhc0l0ZW1zJyxcclxuICAgICAgICAncGFyZW50SWQnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlJdGVtQ29tcG9uZW50IGV4dGVuZHMgRHhpQnV0dG9uR3JvdXBJdGVtIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgSUR4VGVtcGxhdGVIb3N0IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnaXRlbXMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpSXRlbUNvbXBvbmVudCkpXHJcbiAgICBnZXQgaXRlbXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpSXRlbUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXRlbXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2l0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCkpXHJcbiAgICBnZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvblJ1bGVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCd2YWxpZGF0aW9uUnVsZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVRhYkNvbXBvbmVudCkpXHJcbiAgICBnZXQgdGFic0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlUYWJDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFic0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndGFicycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpTG9jYXRpb25Db21wb25lbnQpKVxyXG4gICAgZ2V0IGxvY2F0aW9uQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUxvY2F0aW9uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbG9jYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBsb2NhdGlvbkNoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignbG9jYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgICAgICAgICBASG9zdCgpIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRlbXBsYXRlSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRlbXBsYXRlKHRlbXBsYXRlOiBEeFRlbXBsYXRlRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGV4dHJhY3RUZW1wbGF0ZSh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMuZG9jdW1lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aUl0ZW1Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aUl0ZW1Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpSXRlbU1vZHVsZSB7IH1cclxuIl19