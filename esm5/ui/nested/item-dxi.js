/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, ElementRef, Renderer2, Inject, AfterViewInit, SkipSelf, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NestedOptionHost, extractTemplate, DxTemplateDirective, IDxTemplateHost, DxTemplateHost } from 'devextreme-angular/core';
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
    DxiItemComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: DxTemplateHost, decorators: [{ type: Host }] },
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiItemComponent_1; }))
    ], DxiItemComponent.prototype, "itemsChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiValidationRuleComponent; }))
    ], DxiItemComponent.prototype, "validationRulesChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiTabComponent; }))
    ], DxiItemComponent.prototype, "tabsChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiLocationComponent; }))
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
        tslib_1.__param(4, Host())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsiaXRlbS1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sYUFBYSxFQUNiLFFBQVEsRUFDUixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0MsT0FBTyxFQUNILGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLGVBQWUsRUFDZixjQUFjLEVBQ2pCLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXdFdEQ7SUFBc0MsNENBQWtCO0lBdUNwRCwwQkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCLEVBQzVCLFFBQW1CLEVBQ0QsUUFBYSxFQUMvQixZQUE0QixFQUM1QixPQUFtQjtRQUxuQyxZQU1JLGlCQUFPLFNBSVY7UUFSZSxjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0QsY0FBUSxHQUFSLFFBQVEsQ0FBSztRQUUvQixhQUFPLEdBQVAsT0FBTyxDQUFZO1FBRS9CLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUks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QztDQUFBLEFBQTlCLElBQThCO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIFJlbmRlcmVyMixcclxuICAgIEluamVjdCxcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICBleHRyYWN0VGVtcGxhdGUsXHJcbiAgICBEeFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgSUR4VGVtcGxhdGVIb3N0LFxyXG4gICAgRHhUZW1wbGF0ZUhvc3RcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER4aUJ1dHRvbkdyb3VwSXRlbSB9IGZyb20gJy4vYmFzZS9idXR0b24tZ3JvdXAtaXRlbS1keGknO1xyXG5pbXBvcnQgeyBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsaWRhdGlvbi1ydWxlLWR4aSc7XHJcbmltcG9ydCB7IER4aVRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLWR4aSc7XHJcbmltcG9ydCB7IER4aUxvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2NhdGlvbi1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktaXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gICAgc3R5bGVzOiBbJzpob3N0IHsgZGlzcGxheTogYmxvY2s7IH0nXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3QsIER4VGVtcGxhdGVIb3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdkaXNhYmxlZCcsXHJcbiAgICAgICAgJ2h0bWwnLFxyXG4gICAgICAgICdpY29uJyxcclxuICAgICAgICAndGVtcGxhdGUnLFxyXG4gICAgICAgICd0ZXh0JyxcclxuICAgICAgICAndGl0bGUnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnb25DbGljaycsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICdiYXNlU2l6ZScsXHJcbiAgICAgICAgJ2JveCcsXHJcbiAgICAgICAgJ3JhdGlvJyxcclxuICAgICAgICAnc2hyaW5rJyxcclxuICAgICAgICAnaGludCcsXHJcbiAgICAgICAgJ2JlZ2luR3JvdXAnLFxyXG4gICAgICAgICdjbG9zZU1lbnVPbkNsaWNrJyxcclxuICAgICAgICAnaXRlbXMnLFxyXG4gICAgICAgICdzZWxlY3RhYmxlJyxcclxuICAgICAgICAnc2VsZWN0ZWQnLFxyXG4gICAgICAgICdjb2xTcGFuJyxcclxuICAgICAgICAnY3NzQ2xhc3MnLFxyXG4gICAgICAgICdkYXRhRmllbGQnLFxyXG4gICAgICAgICdlZGl0b3JPcHRpb25zJyxcclxuICAgICAgICAnZWRpdG9yVHlwZScsXHJcbiAgICAgICAgJ2hlbHBUZXh0JyxcclxuICAgICAgICAnaXNSZXF1aXJlZCcsXHJcbiAgICAgICAgJ2l0ZW1UeXBlJyxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAndmFsaWRhdGlvblJ1bGVzJyxcclxuICAgICAgICAndmlzaWJsZUluZGV4JyxcclxuICAgICAgICAnYWxpZ25JdGVtTGFiZWxzJyxcclxuICAgICAgICAnY2FwdGlvbicsXHJcbiAgICAgICAgJ2NvbENvdW50JyxcclxuICAgICAgICAnY29sQ291bnRCeVNjcmVlbicsXHJcbiAgICAgICAgJ3RhYlBhbmVsT3B0aW9ucycsXHJcbiAgICAgICAgJ3RhYnMnLFxyXG4gICAgICAgICdiYWRnZScsXHJcbiAgICAgICAgJ3RhYlRlbXBsYXRlJyxcclxuICAgICAgICAnYWxpZ25tZW50JyxcclxuICAgICAgICAnYnV0dG9uT3B0aW9ucycsXHJcbiAgICAgICAgJ2hvcml6b250YWxBbGlnbm1lbnQnLFxyXG4gICAgICAgICd2ZXJ0aWNhbEFsaWdubWVudCcsXHJcbiAgICAgICAgJ2ltYWdlQWx0JyxcclxuICAgICAgICAnaW1hZ2VTcmMnLFxyXG4gICAgICAgICdmb3JtYXROYW1lJyxcclxuICAgICAgICAnZm9ybWF0VmFsdWVzJyxcclxuICAgICAgICAnbG9jYXRlSW5NZW51JyxcclxuICAgICAgICAnbG9jYXRpb24nLFxyXG4gICAgICAgICdtZW51SXRlbVRlbXBsYXRlJyxcclxuICAgICAgICAnb3B0aW9ucycsXHJcbiAgICAgICAgJ3Nob3dUZXh0JyxcclxuICAgICAgICAnd2lkZ2V0JyxcclxuICAgICAgICAna2V5JyxcclxuICAgICAgICAnc2hvd0NoZXZyb24nLFxyXG4gICAgICAgICdtZW51VGVtcGxhdGUnLFxyXG4gICAgICAgICdoZWlnaHRSYXRpbycsXHJcbiAgICAgICAgJ3dpZHRoUmF0aW8nLFxyXG4gICAgICAgICdleHBhbmRlZCcsXHJcbiAgICAgICAgJ2hhc0l0ZW1zJyxcclxuICAgICAgICAncGFyZW50SWQnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlJdGVtQ29tcG9uZW50IGV4dGVuZHMgRHhpQnV0dG9uR3JvdXBJdGVtIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgSUR4VGVtcGxhdGVIb3N0IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnaXRlbXMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpSXRlbUNvbXBvbmVudCkpXHJcbiAgICBnZXQgaXRlbXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpSXRlbUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXRlbXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2l0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCkpXHJcbiAgICBnZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvblJ1bGVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCd2YWxpZGF0aW9uUnVsZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVRhYkNvbXBvbmVudCkpXHJcbiAgICBnZXQgdGFic0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlUYWJDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFic0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndGFicycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpTG9jYXRpb25Db21wb25lbnQpKVxyXG4gICAgZ2V0IGxvY2F0aW9uQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUxvY2F0aW9uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbG9jYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBsb2NhdGlvbkNoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignbG9jYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgICAgICAgICBASG9zdCgpIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRlbXBsYXRlSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRlbXBsYXRlKHRlbXBsYXRlOiBEeFRlbXBsYXRlRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGV4dHJhY3RUZW1wbGF0ZSh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMuZG9jdW1lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aUl0ZW1Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aUl0ZW1Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpSXRlbU1vZHVsZSB7IH1cclxuIl19