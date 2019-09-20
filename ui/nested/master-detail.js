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
var DxoMasterDetailComponent = (function (_super) {
    __extends(DxoMasterDetailComponent, _super);
    function DxoMasterDetailComponent(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.document = document;
        _this.element = element;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        templateHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxoMasterDetailComponent.prototype, "autoExpandAll", {
        get: function () {
            return this._getOption('autoExpandAll');
        },
        set: function (value) {
            this._setOption('autoExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMasterDetailComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMasterDetailComponent.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMasterDetailComponent.prototype, "_optionPath", {
        get: function () {
            return 'masterDetail';
        },
        enumerable: true,
        configurable: true
    });
    DxoMasterDetailComponent.prototype.setTemplate = function (template) {
        this.template = template;
    };
    DxoMasterDetailComponent.prototype.ngAfterViewInit = function () {
        nested_option_1.extractTemplate(this, this.element, this.renderer, this.document);
    };
    DxoMasterDetailComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-master-detail',
                    template: '<ng-content></ng-content>',
                    styles: [':host { display: block; }'],
                    providers: [nested_option_1.NestedOptionHost, template_host_1.DxTemplateHost]
                },] },
    ];
    /** @nocollapse */
    DxoMasterDetailComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
        { type: core_1.Renderer2, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [common_1.DOCUMENT,] },] },
        { type: template_host_1.DxTemplateHost, decorators: [{ type: core_1.Host },] },
        { type: core_1.ElementRef, },
    ]; };
    DxoMasterDetailComponent.propDecorators = {
        "autoExpandAll": [{ type: core_1.Input },],
        "enabled": [{ type: core_1.Input },],
        "template": [{ type: core_1.Input },],
    };
    return DxoMasterDetailComponent;
}(nested_option_2.NestedOption));
exports.DxoMasterDetailComponent = DxoMasterDetailComponent;
var DxoMasterDetailModule = (function () {
    function DxoMasterDetailModule() {
    }
    DxoMasterDetailModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoMasterDetailComponent
                    ],
                    exports: [
                        DxoMasterDetailComponent
                    ],
                },] },
    ];
    return DxoMasterDetailModule;
}());
exports.DxoMasterDetailModule = DxoMasterDetailModule;
//# sourceMappingURL=master-detail.js.map