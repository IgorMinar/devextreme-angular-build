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
var DxiToolbarItemComponent = (function (_super) {
    __extends(DxiToolbarItemComponent, _super);
    function DxiToolbarItemComponent(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.document = document;
        _this.element = element;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        templateHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxiToolbarItemComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "html", {
        get: function () {
            return this._getOption('html');
        },
        set: function (value) {
            this._setOption('html', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "options", {
        get: function () {
            return this._getOption('options');
        },
        set: function (value) {
            this._setOption('options', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "toolbar", {
        get: function () {
            return this._getOption('toolbar');
        },
        set: function (value) {
            this._setOption('toolbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "widget", {
        get: function () {
            return this._getOption('widget');
        },
        set: function (value) {
            this._setOption('widget', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'toolbarItems';
        },
        enumerable: true,
        configurable: true
    });
    DxiToolbarItemComponent.prototype.setTemplate = function (template) {
        this.template = template;
    };
    DxiToolbarItemComponent.prototype.ngAfterViewInit = function () {
        nested_option_1.extractTemplate(this, this.element, this.renderer, this.document);
    };
    DxiToolbarItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-toolbar-item',
                    template: '<ng-content></ng-content>',
                    styles: [':host { display: block; }'],
                    providers: [nested_option_1.NestedOptionHost, template_host_1.DxTemplateHost]
                },] },
    ];
    /** @nocollapse */
    DxiToolbarItemComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
        { type: core_1.Renderer2, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [common_1.DOCUMENT,] },] },
        { type: template_host_1.DxTemplateHost, decorators: [{ type: core_1.Host },] },
        { type: core_1.ElementRef, },
    ]; };
    DxiToolbarItemComponent.propDecorators = {
        "disabled": [{ type: core_1.Input },],
        "html": [{ type: core_1.Input },],
        "location": [{ type: core_1.Input },],
        "options": [{ type: core_1.Input },],
        "template": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "toolbar": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "widget": [{ type: core_1.Input },],
    };
    return DxiToolbarItemComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiToolbarItemComponent = DxiToolbarItemComponent;
var DxiToolbarItemModule = (function () {
    function DxiToolbarItemModule() {
    }
    DxiToolbarItemModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiToolbarItemComponent
                    ],
                    exports: [
                        DxiToolbarItemComponent
                    ],
                },] },
    ];
    return DxiToolbarItemModule;
}());
exports.DxiToolbarItemModule = DxiToolbarItemModule;
//# sourceMappingURL=toolbar-item-dxi.js.map