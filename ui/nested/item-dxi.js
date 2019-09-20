"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nested_option_1 = require("../../core/nested-option");
var template_host_1 = require("../../core/template-host");
var button_group_item_dxi_1 = require("./base/button-group-item-dxi");
var validation_rule_dxi_1 = require("./validation-rule-dxi");
var tab_dxi_1 = require("./tab-dxi");
var location_dxi_1 = require("./location-dxi");
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
        nested_option_1.extractTemplate(this, this.element, this.renderer, this.document);
    };
    DxiItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-item',
                    template: '<ng-content></ng-content>',
                    styles: [':host { display: block; }'],
                    providers: [nested_option_1.NestedOptionHost, template_host_1.DxTemplateHost],
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
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
        { type: core_1.Renderer2, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [common_1.DOCUMENT,] },] },
        { type: template_host_1.DxTemplateHost, decorators: [{ type: core_1.Host },] },
        { type: core_1.ElementRef, },
    ]; };
    DxiItemComponent.propDecorators = {
        "itemsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return DxiItemComponent; }),] },],
        "validationRulesChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return validation_rule_dxi_1.DxiValidationRuleComponent; }),] },],
        "tabsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return tab_dxi_1.DxiTabComponent; }),] },],
        "locationChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return location_dxi_1.DxiLocationComponent; }),] },],
    };
    return DxiItemComponent;
}(button_group_item_dxi_1.DxiButtonGroupItem));
exports.DxiItemComponent = DxiItemComponent;
var DxiItemModule = (function () {
    function DxiItemModule() {
    }
    DxiItemModule.decorators = [
        { type: core_1.NgModule, args: [{
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
exports.DxiItemModule = DxiItemModule;
//# sourceMappingURL=item-dxi.js.map