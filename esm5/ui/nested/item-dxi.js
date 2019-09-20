var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { Component, NgModule, Host, ElementRef, Renderer2, Inject, SkipSelf, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NestedOptionHost, extractTemplate } from '../../core/nested-option';
import { DxTemplateHost } from '../../core/template-host';
import { DxiButtonGroupItem } from './base/button-group-item-dxi';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
import { DxiTabComponent } from './tab-dxi';
import { DxiLocationComponent } from './location-dxi';
var DxiItemComponent = (function (_super) {
    __extends(DxiItemComponent, _super);
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
    DxiItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-item',
                    template: '<ng-content></ng-content>',
                    styles: [':host { display: block; }'],
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
                    ]
                },] },
    ];
    /** @nocollapse */
    DxiItemComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
        { type: Renderer2, },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
        { type: DxTemplateHost, decorators: [{ type: Host },] },
        { type: ElementRef, },
    ]; };
    DxiItemComponent.propDecorators = {
        "itemsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiItemComponent; }),] },],
        "validationRulesChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiValidationRuleComponent; }),] },],
        "tabsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiTabComponent; }),] },],
        "locationChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiLocationComponent; }),] },],
    };
    return DxiItemComponent;
}(DxiButtonGroupItem));
export { DxiItemComponent };
var DxiItemModule = (function () {
    function DxiItemModule() {
    }
    DxiItemModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiItemComponent
                    ],
                    exports: [
                        DxiItemComponent
                    ],
                },] },
    ];
    return DxiItemModule;
}());
export { DxiItemModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1keGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvaXRlbS1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBRU4sUUFBUSxFQUNSLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUkzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFN0UsT0FBTyxFQUFtQixjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQXdFaEIsb0NBQWtCO0lBdUNwRCwwQkFBZ0Msa0JBQ2hCLFlBQ0EsUUFBbUIsRUFDRCxVQUNsQixjQUNBLE9BQW1CO1FBTG5DLFlBTUksaUJBQU8sU0FJVjtRQVJlLGNBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxjQUFRLEdBQVIsUUFBUTtRQUUxQixhQUFPLEdBQVAsT0FBTyxDQUFZO1FBRS9CLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFELFlBQVksQ0FBQyxPQUFP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QUMsUUFBUTtnQkF0SEYsY0FBYyx1QkF1SDNCLElBQUk7Z0JBdkliLFVBQVU7OztrQ0FtR1QsZUFBZSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUM7NENBUWxELGVBQWUsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLDBCQUEwQixFQUExQixDQUEwQixDQUFDO2lDQVE1RCxlQUFlLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxDQUFDO3FDQVFqRCxlQUFlLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQzs7MkJBaEozRDtFQWlIc0Msa0JBQWtCO1NBQTNDLGdCQUFnQjs7Ozs7Z0JBNEQ1QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjtxQkFDakI7aUJBQ0Y7O3dCQXBMRDs7U0FxTGEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgSW5qZWN0LFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0LCBleHRyYWN0VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vY29yZS90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IElEeFRlbXBsYXRlSG9zdCwgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBEeGlCdXR0b25Hcm91cEl0ZW0gfSBmcm9tICcuL2Jhc2UvYnV0dG9uLWdyb3VwLWl0ZW0tZHhpJztcclxuaW1wb3J0IHsgRHhpVmFsaWRhdGlvblJ1bGVDb21wb25lbnQgfSBmcm9tICcuL3ZhbGlkYXRpb24tcnVsZS1keGknO1xyXG5pbXBvcnQgeyBEeGlUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi1keGknO1xyXG5pbXBvcnQgeyBEeGlMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLWl0ZW0nLFxyXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxuICAgIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9J10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0LCBEeFRlbXBsYXRlSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdodG1sJyxcclxuICAgICAgICAnaWNvbicsXHJcbiAgICAgICAgJ3RlbXBsYXRlJyxcclxuICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgJ3RpdGxlJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ29uQ2xpY2snLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAnYmFzZVNpemUnLFxyXG4gICAgICAgICdib3gnLFxyXG4gICAgICAgICdyYXRpbycsXHJcbiAgICAgICAgJ3NocmluaycsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdiZWdpbkdyb3VwJyxcclxuICAgICAgICAnY2xvc2VNZW51T25DbGljaycsXHJcbiAgICAgICAgJ2l0ZW1zJyxcclxuICAgICAgICAnc2VsZWN0YWJsZScsXHJcbiAgICAgICAgJ3NlbGVjdGVkJyxcclxuICAgICAgICAnY29sU3BhbicsXHJcbiAgICAgICAgJ2Nzc0NsYXNzJyxcclxuICAgICAgICAnZGF0YUZpZWxkJyxcclxuICAgICAgICAnZWRpdG9yT3B0aW9ucycsXHJcbiAgICAgICAgJ2VkaXRvclR5cGUnLFxyXG4gICAgICAgICdoZWxwVGV4dCcsXHJcbiAgICAgICAgJ2lzUmVxdWlyZWQnLFxyXG4gICAgICAgICdpdGVtVHlwZScsXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25SdWxlcycsXHJcbiAgICAgICAgJ3Zpc2libGVJbmRleCcsXHJcbiAgICAgICAgJ2FsaWduSXRlbUxhYmVscycsXHJcbiAgICAgICAgJ2NhcHRpb24nLFxyXG4gICAgICAgICdjb2xDb3VudCcsXHJcbiAgICAgICAgJ2NvbENvdW50QnlTY3JlZW4nLFxyXG4gICAgICAgICd0YWJQYW5lbE9wdGlvbnMnLFxyXG4gICAgICAgICd0YWJzJyxcclxuICAgICAgICAnYmFkZ2UnLFxyXG4gICAgICAgICd0YWJUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2FsaWdubWVudCcsXHJcbiAgICAgICAgJ2J1dHRvbk9wdGlvbnMnLFxyXG4gICAgICAgICdob3Jpem9udGFsQWxpZ25tZW50JyxcclxuICAgICAgICAndmVydGljYWxBbGlnbm1lbnQnLFxyXG4gICAgICAgICdpbWFnZUFsdCcsXHJcbiAgICAgICAgJ2ltYWdlU3JjJyxcclxuICAgICAgICAnZm9ybWF0TmFtZScsXHJcbiAgICAgICAgJ2Zvcm1hdFZhbHVlcycsXHJcbiAgICAgICAgJ2xvY2F0ZUluTWVudScsXHJcbiAgICAgICAgJ2xvY2F0aW9uJyxcclxuICAgICAgICAnbWVudUl0ZW1UZW1wbGF0ZScsXHJcbiAgICAgICAgJ29wdGlvbnMnLFxyXG4gICAgICAgICdzaG93VGV4dCcsXHJcbiAgICAgICAgJ3dpZGdldCcsXHJcbiAgICAgICAgJ2tleScsXHJcbiAgICAgICAgJ3Nob3dDaGV2cm9uJyxcclxuICAgICAgICAnbWVudVRlbXBsYXRlJyxcclxuICAgICAgICAnaGVpZ2h0UmF0aW8nLFxyXG4gICAgICAgICd3aWR0aFJhdGlvJyxcclxuICAgICAgICAnZXhwYW5kZWQnLFxyXG4gICAgICAgICdoYXNJdGVtcycsXHJcbiAgICAgICAgJ3BhcmVudElkJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpSXRlbUNvbXBvbmVudCBleHRlbmRzIER4aUJ1dHRvbkdyb3VwSXRlbSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIElEeFRlbXBsYXRlSG9zdCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2l0ZW1zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUl0ZW1Db21wb25lbnQpKVxyXG4gICAgZ2V0IGl0ZW1zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdpdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpVmFsaWRhdGlvblJ1bGVDb21wb25lbnQpKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25SdWxlc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25SdWxlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25SdWxlc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndmFsaWRhdGlvblJ1bGVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlUYWJDb21wb25lbnQpKVxyXG4gICAgZ2V0IHRhYnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpVGFiQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGFicycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3RhYnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUxvY2F0aW9uQ29tcG9uZW50KSlcclxuICAgIGdldCBsb2NhdGlvbkNoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlMb2NhdGlvbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvY2F0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9jYXRpb25DaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2xvY2F0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgICAgICAgICAgQEhvc3QoKSB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0ZW1wbGF0ZUhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUZW1wbGF0ZSh0ZW1wbGF0ZTogRHhUZW1wbGF0ZURpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBleHRyYWN0VGVtcGxhdGUodGhpcywgdGhpcy5lbGVtZW50LCB0aGlzLnJlbmRlcmVyLCB0aGlzLmRvY3VtZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlJdGVtQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlJdGVtQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUl0ZW1Nb2R1bGUgeyB9XHJcbiJdfQ==