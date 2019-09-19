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
 * Build date: Thu Sep 19 2019
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
//# sourceMappingURL=item-dxi.js.map