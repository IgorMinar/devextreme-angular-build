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
import { Component, NgModule, Host, ElementRef, Renderer2, Inject, SkipSelf, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NestedOptionHost, extractTemplate } from '../../core/nested-option';
import { DxTemplateHost } from '../../core/template-host';
import { NestedOption } from '../../core/nested-option';
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
        extractTemplate(this, this.element, this.renderer, this.document);
    };
    DxoMasterDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-master-detail',
                    template: '<ng-content></ng-content>',
                    styles: [':host { display: block; }'],
                    providers: [NestedOptionHost, DxTemplateHost]
                },] },
    ];
    /** @nocollapse */
    DxoMasterDetailComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
        { type: Renderer2, },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
        { type: DxTemplateHost, decorators: [{ type: Host },] },
        { type: ElementRef, },
    ]; };
    DxoMasterDetailComponent.propDecorators = {
        "autoExpandAll": [{ type: Input },],
        "enabled": [{ type: Input },],
        "template": [{ type: Input },],
    };
    return DxoMasterDetailComponent;
}(NestedOption));
export { DxoMasterDetailComponent };
var DxoMasterDetailModule = (function () {
    function DxoMasterDetailModule() {
    }
    DxoMasterDetailModule.decorators = [
        { type: NgModule, args: [{
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
export { DxoMasterDetailModule };
//# sourceMappingURL=master-detail.js.map