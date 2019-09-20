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
var nested_option_2 = require("../../core/nested-option");
var item_dxi_1 = require("./item-dxi");
var DxiTabComponent = (function (_super) {
    __extends(DxiTabComponent, _super);
    function DxiTabComponent(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.document = document;
        _this.element = element;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        templateHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxiTabComponent.prototype, "alignItemLabels", {
        get: function () {
            return this._getOption('alignItemLabels');
        },
        set: function (value) {
            this._setOption('alignItemLabels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "badge", {
        get: function () {
            return this._getOption('badge');
        },
        set: function (value) {
            this._setOption('badge', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "colCount", {
        get: function () {
            return this._getOption('colCount');
        },
        set: function (value) {
            this._setOption('colCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "colCountByScreen", {
        get: function () {
            return this._getOption('colCountByScreen');
        },
        set: function (value) {
            this._setOption('colCountByScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "icon", {
        get: function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "tabTemplate", {
        get: function () {
            return this._getOption('tabTemplate');
        },
        set: function (value) {
            this._setOption('tabTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "_optionPath", {
        get: function () {
            return 'tabs';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiTabComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxiTabComponent.prototype.setTemplate = function (template) {
        this.template = template;
    };
    DxiTabComponent.prototype.ngAfterViewInit = function () {
        nested_option_1.extractTemplate(this, this.element, this.renderer, this.document);
    };
    DxiTabComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-tab',
                    template: '<ng-content></ng-content>',
                    styles: [':host { display: block; }'],
                    providers: [nested_option_1.NestedOptionHost, template_host_1.DxTemplateHost]
                },] },
    ];
    /** @nocollapse */
    DxiTabComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
        { type: core_1.Renderer2, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [common_1.DOCUMENT,] },] },
        { type: template_host_1.DxTemplateHost, decorators: [{ type: core_1.Host },] },
        { type: core_1.ElementRef, },
    ]; };
    DxiTabComponent.propDecorators = {
        "alignItemLabels": [{ type: core_1.Input },],
        "badge": [{ type: core_1.Input },],
        "colCount": [{ type: core_1.Input },],
        "colCountByScreen": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "icon": [{ type: core_1.Input },],
        "items": [{ type: core_1.Input },],
        "tabTemplate": [{ type: core_1.Input },],
        "template": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "itemsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return item_dxi_1.DxiItemComponent; }),] },],
    };
    return DxiTabComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiTabComponent = DxiTabComponent;
var DxiTabModule = (function () {
    function DxiTabModule() {
    }
    DxiTabModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiTabComponent
                    ],
                    exports: [
                        DxiTabComponent
                    ],
                },] },
    ];
    return DxiTabModule;
}());
exports.DxiTabModule = DxiTabModule;
//# sourceMappingURL=tab-dxi.js.map