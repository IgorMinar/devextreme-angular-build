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
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent_1)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxiItemComponent.prototype, "itemsChildren", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiValidationRuleComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxiItemComponent.prototype, "validationRulesChildren", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiTabComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxiItemComponent.prototype, "tabsChildren", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiLocationComponent)),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvaXRlbS1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxFQUVOLFFBQVEsRUFDUixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTdFLE9BQU8sRUFBbUIsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXdFdEQsSUFBYSxnQkFBZ0Isd0JBQTdCLHNCQUE4QixTQUFRLGtCQUFrQjtJQXVDcEQsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCLEVBQzVCLFFBQW1CLEVBQ0QsUUFBYSxFQUMvQixZQUE0QixFQUM1QixPQUFtQjtRQUMvQixLQUFLLEVBQUUsQ0FBQztRQUpJLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRS9CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFFL0IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFB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QWlCO1lBQ2pCLFNBQVM7WUFDVCxVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixNQUFNO1lBQ04sT0FBTztZQUNQLGFBQWE7WUFDYixXQUFXO1lBQ1gsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLFVBQVU7WUFDVixZQUFZO1lBQ1osY0FBYztZQUNkLGNBQWM7WUFDZCxVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLFNBQVM7WUFDVCxVQUFVO1lBQ1YsUUFBUTtZQUNSLEtBQUs7WUFDTCxhQUFhO1lBQ2IsY0FBYztZQUNkLGFBQWE7WUFDYixZQUFZO1lBQ1osVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1NBQ2I7aUJBaEVRLDJCQUEyQjtLQWlFdkMsQ0FBQztJQXdDZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO0lBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO0lBRU4sbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hCLG1CQUFBLElBQUksRUFBRSxDQUFBOzZDQUptQyxnQkFBZ0I7UUFDdEMsZ0JBQWdCO1FBQ2xCLFNBQVMsVUFFTCxjQUFjO1FBQ25CLFVBQVU7R0E1QzFCLGdCQUFnQixDQTBENUI7U0ExRFksZ0JBQWdCO0FBb0U3QixJQUFhLGFBQWEsR0FBMUI7Q0FBOEIsQ0FBQTtBQUFqQixhQUFhO0lBUnpCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGdCQUFnQjtTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNQLGdCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxhQUFhLENBQUk7U0FBakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBJbmplY3QsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QsIGV4dHJhY3RUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgSUR4VGVtcGxhdGVIb3N0LCBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4aUJ1dHRvbkdyb3VwSXRlbSB9IGZyb20gJy4vYmFzZS9idXR0b24tZ3JvdXAtaXRlbS1keGknO1xyXG5pbXBvcnQgeyBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsaWRhdGlvbi1ydWxlLWR4aSc7XHJcbmltcG9ydCB7IER4aVRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLWR4aSc7XHJcbmltcG9ydCB7IER4aUxvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2NhdGlvbi1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktaXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gICAgc3R5bGVzOiBbJzpob3N0IHsgZGlzcGxheTogYmxvY2s7IH0nXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3QsIER4VGVtcGxhdGVIb3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdkaXNhYmxlZCcsXHJcbiAgICAgICAgJ2h0bWwnLFxyXG4gICAgICAgICdpY29uJyxcclxuICAgICAgICAndGVtcGxhdGUnLFxyXG4gICAgICAgICd0ZXh0JyxcclxuICAgICAgICAndGl0bGUnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnb25DbGljaycsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICdiYXNlU2l6ZScsXHJcbiAgICAgICAgJ2JveCcsXHJcbiAgICAgICAgJ3JhdGlvJyxcclxuICAgICAgICAnc2hyaW5rJyxcclxuICAgICAgICAnaGludCcsXHJcbiAgICAgICAgJ2JlZ2luR3JvdXAnLFxyXG4gICAgICAgICdjbG9zZU1lbnVPbkNsaWNrJyxcclxuICAgICAgICAnaXRlbXMnLFxyXG4gICAgICAgICdzZWxlY3RhYmxlJyxcclxuICAgICAgICAnc2VsZWN0ZWQnLFxyXG4gICAgICAgICdjb2xTcGFuJyxcclxuICAgICAgICAnY3NzQ2xhc3MnLFxyXG4gICAgICAgICdkYXRhRmllbGQnLFxyXG4gICAgICAgICdlZGl0b3JPcHRpb25zJyxcclxuICAgICAgICAnZWRpdG9yVHlwZScsXHJcbiAgICAgICAgJ2hlbHBUZXh0JyxcclxuICAgICAgICAnaXNSZXF1aXJlZCcsXHJcbiAgICAgICAgJ2l0ZW1UeXBlJyxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAndmFsaWRhdGlvblJ1bGVzJyxcclxuICAgICAgICAndmlzaWJsZUluZGV4JyxcclxuICAgICAgICAnYWxpZ25JdGVtTGFiZWxzJyxcclxuICAgICAgICAnY2FwdGlvbicsXHJcbiAgICAgICAgJ2NvbENvdW50JyxcclxuICAgICAgICAnY29sQ291bnRCeVNjcmVlbicsXHJcbiAgICAgICAgJ3RhYlBhbmVsT3B0aW9ucycsXHJcbiAgICAgICAgJ3RhYnMnLFxyXG4gICAgICAgICdiYWRnZScsXHJcbiAgICAgICAgJ3RhYlRlbXBsYXRlJyxcclxuICAgICAgICAnYWxpZ25tZW50JyxcclxuICAgICAgICAnYnV0dG9uT3B0aW9ucycsXHJcbiAgICAgICAgJ2hvcml6b250YWxBbGlnbm1lbnQnLFxyXG4gICAgICAgICd2ZXJ0aWNhbEFsaWdubWVudCcsXHJcbiAgICAgICAgJ2ltYWdlQWx0JyxcclxuICAgICAgICAnaW1hZ2VTcmMnLFxyXG4gICAgICAgICdmb3JtYXROYW1lJyxcclxuICAgICAgICAnZm9ybWF0VmFsdWVzJyxcclxuICAgICAgICAnbG9jYXRlSW5NZW51JyxcclxuICAgICAgICAnbG9jYXRpb24nLFxyXG4gICAgICAgICdtZW51SXRlbVRlbXBsYXRlJyxcclxuICAgICAgICAnb3B0aW9ucycsXHJcbiAgICAgICAgJ3Nob3dUZXh0JyxcclxuICAgICAgICAnd2lkZ2V0JyxcclxuICAgICAgICAna2V5JyxcclxuICAgICAgICAnc2hvd0NoZXZyb24nLFxyXG4gICAgICAgICdtZW51VGVtcGxhdGUnLFxyXG4gICAgICAgICdoZWlnaHRSYXRpbycsXHJcbiAgICAgICAgJ3dpZHRoUmF0aW8nLFxyXG4gICAgICAgICdleHBhbmRlZCcsXHJcbiAgICAgICAgJ2hhc0l0ZW1zJyxcclxuICAgICAgICAncGFyZW50SWQnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlJdGVtQ29tcG9uZW50IGV4dGVuZHMgRHhpQnV0dG9uR3JvdXBJdGVtIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgSUR4VGVtcGxhdGVIb3N0IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnaXRlbXMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpSXRlbUNvbXBvbmVudCkpXHJcbiAgICBnZXQgaXRlbXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpSXRlbUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXRlbXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2l0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCkpXHJcbiAgICBnZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvblJ1bGVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCd2YWxpZGF0aW9uUnVsZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVRhYkNvbXBvbmVudCkpXHJcbiAgICBnZXQgdGFic0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlUYWJDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFic0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndGFicycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpTG9jYXRpb25Db21wb25lbnQpKVxyXG4gICAgZ2V0IGxvY2F0aW9uQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUxvY2F0aW9uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbG9jYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBsb2NhdGlvbkNoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignbG9jYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgICAgICAgICBASG9zdCgpIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRlbXBsYXRlSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRlbXBsYXRlKHRlbXBsYXRlOiBEeFRlbXBsYXRlRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGV4dHJhY3RUZW1wbGF0ZSh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMuZG9jdW1lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aUl0ZW1Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aUl0ZW1Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpSXRlbU1vZHVsZSB7IH1cclxuIl19