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
let DxiItemComponent = DxiItemComponent_1 = class DxiItemComponent extends DxiButtonGroupItem {
    constructor(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        super();
        this.renderer = renderer;
        this.document = document;
        this.element = element;
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
        templateHost.setHost(this);
    }
    get _optionPath() {
        return 'items';
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
    get validationRulesChildren() {
        return this._getOption('validationRules');
    }
    set validationRulesChildren(value) {
        this.setChildren('validationRules', value);
    }
    get tabsChildren() {
        return this._getOption('tabs');
    }
    set tabsChildren(value) {
        this.setChildren('tabs', value);
    }
    get locationChildren() {
        return this._getOption('location');
    }
    set locationChildren(value) {
        this.setChildren('location', value);
    }
    setTemplate(template) {
        this.template = template;
    }
    ngAfterViewInit() {
        extractTemplate(this, this.element, this.renderer, this.document);
    }
};
DxiItemComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: DxTemplateHost, decorators: [{ type: Host }] },
    { type: ElementRef }
];
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent_1))
], DxiItemComponent.prototype, "itemsChildren", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiValidationRuleComponent))
], DxiItemComponent.prototype, "validationRulesChildren", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiTabComponent))
], DxiItemComponent.prototype, "tabsChildren", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiLocationComponent))
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
export { DxiItemComponent };
let DxiItemModule = class DxiItemModule {
};
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
export { DxiItemModule };
var DxiItemComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsiaXRlbS1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sYUFBYSxFQUNiLFFBQVEsRUFDUixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0MsT0FBTyxFQUNILGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLGVBQWUsRUFDZixjQUFjLEVBQ2pCLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXdFdEQsSUFBYSxnQkFBZ0Isd0JBQTdCLHNCQUE4QixTQUFRLGtCQUFrQjtJQXVDcEQsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCLEVBQzVCLFFBQW1CLEVBQ0QsUUFBYSxFQUMvQixZQUE0QixFQUM1QixPQUFtQjtRQUMvQixLQUFLLEVBQUUsQ0FBQztRQUpJLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRS9CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFFL0IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVB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WUFDVixZQUFZO1lBQ1osVUFBVTtZQUNWLE9BQU87WUFDUCxNQUFNO1lBQ04saUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsU0FBUztZQUNULFVBQVU7WUFDVixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLE1BQU07WUFDTixPQUFPO1lBQ1AsYUFBYTtZQUNiLFdBQVc7WUFDWCxlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLG1CQUFtQjtZQUNuQixVQUFVO1lBQ1YsVUFBVTtZQUNWLFlBQVk7WUFDWixjQUFjO1lBQ2QsY0FBYztZQUNkLFVBQVU7WUFDVixrQkFBa0I7WUFDbEIsU0FBUztZQUNULFVBQVU7WUFDVixRQUFRO1lBQ1IsS0FBSztZQUNMLGFBQWE7WUFDYixjQUFjO1lBQ2QsYUFBYTtZQUNiLFlBQVk7WUFDWixVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7U0FDYjtpQkFoRVEsMkJBQTJCO0tBaUV2QyxDQUFDO0lBd0NlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFFTixtQkFBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7R0EzQ04sZ0JBQWdCLENBMEQ1QjtTQTFEWSxnQkFBZ0I7QUFvRTdCLElBQWEsYUFBYSxHQUExQjtDQUE4QixDQUFBO0FBQWpCLGFBQWE7SUFSekIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osZ0JBQWdCO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsZ0JBQWdCO1NBQ2pCO0tBQ0YsQ0FBQztHQUNXLGFBQWEsQ0FBSTtTQUFqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBJbmplY3QsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgZXh0cmFjdFRlbXBsYXRlLFxyXG4gICAgRHhUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIElEeFRlbXBsYXRlSG9zdCxcclxuICAgIER4VGVtcGxhdGVIb3N0XHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeGlCdXR0b25Hcm91cEl0ZW0gfSBmcm9tICcuL2Jhc2UvYnV0dG9uLWdyb3VwLWl0ZW0tZHhpJztcclxuaW1wb3J0IHsgRHhpVmFsaWRhdGlvblJ1bGVDb21wb25lbnQgfSBmcm9tICcuL3ZhbGlkYXRpb24tcnVsZS1keGknO1xyXG5pbXBvcnQgeyBEeGlUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi1keGknO1xyXG5pbXBvcnQgeyBEeGlMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLWl0ZW0nLFxyXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxuICAgIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9J10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0LCBEeFRlbXBsYXRlSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdodG1sJyxcclxuICAgICAgICAnaWNvbicsXHJcbiAgICAgICAgJ3RlbXBsYXRlJyxcclxuICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgJ3RpdGxlJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ29uQ2xpY2snLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAnYmFzZVNpemUnLFxyXG4gICAgICAgICdib3gnLFxyXG4gICAgICAgICdyYXRpbycsXHJcbiAgICAgICAgJ3NocmluaycsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdiZWdpbkdyb3VwJyxcclxuICAgICAgICAnY2xvc2VNZW51T25DbGljaycsXHJcbiAgICAgICAgJ2l0ZW1zJyxcclxuICAgICAgICAnc2VsZWN0YWJsZScsXHJcbiAgICAgICAgJ3NlbGVjdGVkJyxcclxuICAgICAgICAnY29sU3BhbicsXHJcbiAgICAgICAgJ2Nzc0NsYXNzJyxcclxuICAgICAgICAnZGF0YUZpZWxkJyxcclxuICAgICAgICAnZWRpdG9yT3B0aW9ucycsXHJcbiAgICAgICAgJ2VkaXRvclR5cGUnLFxyXG4gICAgICAgICdoZWxwVGV4dCcsXHJcbiAgICAgICAgJ2lzUmVxdWlyZWQnLFxyXG4gICAgICAgICdpdGVtVHlwZScsXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25SdWxlcycsXHJcbiAgICAgICAgJ3Zpc2libGVJbmRleCcsXHJcbiAgICAgICAgJ2FsaWduSXRlbUxhYmVscycsXHJcbiAgICAgICAgJ2NhcHRpb24nLFxyXG4gICAgICAgICdjb2xDb3VudCcsXHJcbiAgICAgICAgJ2NvbENvdW50QnlTY3JlZW4nLFxyXG4gICAgICAgICd0YWJQYW5lbE9wdGlvbnMnLFxyXG4gICAgICAgICd0YWJzJyxcclxuICAgICAgICAnYmFkZ2UnLFxyXG4gICAgICAgICd0YWJUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2FsaWdubWVudCcsXHJcbiAgICAgICAgJ2J1dHRvbk9wdGlvbnMnLFxyXG4gICAgICAgICdob3Jpem9udGFsQWxpZ25tZW50JyxcclxuICAgICAgICAndmVydGljYWxBbGlnbm1lbnQnLFxyXG4gICAgICAgICdpbWFnZUFsdCcsXHJcbiAgICAgICAgJ2ltYWdlU3JjJyxcclxuICAgICAgICAnZm9ybWF0TmFtZScsXHJcbiAgICAgICAgJ2Zvcm1hdFZhbHVlcycsXHJcbiAgICAgICAgJ2xvY2F0ZUluTWVudScsXHJcbiAgICAgICAgJ2xvY2F0aW9uJyxcclxuICAgICAgICAnbWVudUl0ZW1UZW1wbGF0ZScsXHJcbiAgICAgICAgJ29wdGlvbnMnLFxyXG4gICAgICAgICdzaG93VGV4dCcsXHJcbiAgICAgICAgJ3dpZGdldCcsXHJcbiAgICAgICAgJ2tleScsXHJcbiAgICAgICAgJ3Nob3dDaGV2cm9uJyxcclxuICAgICAgICAnbWVudVRlbXBsYXRlJyxcclxuICAgICAgICAnaGVpZ2h0UmF0aW8nLFxyXG4gICAgICAgICd3aWR0aFJhdGlvJyxcclxuICAgICAgICAnZXhwYW5kZWQnLFxyXG4gICAgICAgICdoYXNJdGVtcycsXHJcbiAgICAgICAgJ3BhcmVudElkJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpSXRlbUNvbXBvbmVudCBleHRlbmRzIER4aUJ1dHRvbkdyb3VwSXRlbSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIElEeFRlbXBsYXRlSG9zdCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2l0ZW1zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUl0ZW1Db21wb25lbnQpKVxyXG4gICAgZ2V0IGl0ZW1zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdpdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpVmFsaWRhdGlvblJ1bGVDb21wb25lbnQpKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25SdWxlc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25SdWxlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25SdWxlc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndmFsaWRhdGlvblJ1bGVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlUYWJDb21wb25lbnQpKVxyXG4gICAgZ2V0IHRhYnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpVGFiQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGFicycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3RhYnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUxvY2F0aW9uQ29tcG9uZW50KSlcclxuICAgIGdldCBsb2NhdGlvbkNoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlMb2NhdGlvbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvY2F0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9jYXRpb25DaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2xvY2F0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgICAgICAgICAgQEhvc3QoKSB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0ZW1wbGF0ZUhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUZW1wbGF0ZSh0ZW1wbGF0ZTogRHhUZW1wbGF0ZURpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBleHRyYWN0VGVtcGxhdGUodGhpcywgdGhpcy5lbGVtZW50LCB0aGlzLnJlbmRlcmVyLCB0aGlzLmRvY3VtZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlJdGVtQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlJdGVtQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUl0ZW1Nb2R1bGUgeyB9XHJcbiJdfQ==