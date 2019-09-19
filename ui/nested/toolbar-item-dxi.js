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
import { CollectionNestedOption } from '../../core/nested-option';
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
        extractTemplate(this, this.element, this.renderer, this.document);
    };
    DxiToolbarItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-toolbar-item',
                    template: '<ng-content></ng-content>',
                    styles: [':host { display: block; }'],
                    providers: [NestedOptionHost, DxTemplateHost]
                },] },
    ];
    /** @nocollapse */
    DxiToolbarItemComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
        { type: Renderer2, },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
        { type: DxTemplateHost, decorators: [{ type: Host },] },
        { type: ElementRef, },
    ]; };
    DxiToolbarItemComponent.propDecorators = {
        "disabled": [{ type: Input },],
        "html": [{ type: Input },],
        "location": [{ type: Input },],
        "options": [{ type: Input },],
        "template": [{ type: Input },],
        "text": [{ type: Input },],
        "toolbar": [{ type: Input },],
        "visible": [{ type: Input },],
        "widget": [{ type: Input },],
    };
    return DxiToolbarItemComponent;
}(CollectionNestedOption));
export { DxiToolbarItemComponent };
var DxiToolbarItemModule = (function () {
    function DxiToolbarItemModule() {
    }
    DxiToolbarItemModule.decorators = [
        { type: NgModule, args: [{
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
export { DxiToolbarItemModule };
//# sourceMappingURL=toolbar-item-dxi.js.map