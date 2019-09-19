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
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';

import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoTitleComponent = (function (_super) {
    __extends(DxoTitleComponent, _super);
    function DxoTitleComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoTitleComponent.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTitleComponent.prototype, "horizontalAlignment", {
        get: function () {
            return this._getOption('horizontalAlignment');
        },
        set: function (value) {
            this._setOption('horizontalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTitleComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTitleComponent.prototype, "placeholderSize", {
        get: function () {
            return this._getOption('placeholderSize');
        },
        set: function (value) {
            this._setOption('placeholderSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTitleComponent.prototype, "subtitle", {
        get: function () {
            return this._getOption('subtitle');
        },
        set: function (value) {
            this._setOption('subtitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTitleComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTitleComponent.prototype, "verticalAlignment", {
        get: function () {
            return this._getOption('verticalAlignment');
        },
        set: function (value) {
            this._setOption('verticalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTitleComponent.prototype, "textOverflow", {
        get: function () {
            return this._getOption('textOverflow');
        },
        set: function (value) {
            this._setOption('textOverflow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTitleComponent.prototype, "wordWrap", {
        get: function () {
            return this._getOption('wordWrap');
        },
        set: function (value) {
            this._setOption('wordWrap', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTitleComponent.prototype, "alignment", {
        get: function () {
            return this._getOption('alignment');
        },
        set: function (value) {
            this._setOption('alignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTitleComponent.prototype, "_optionPath", {
        get: function () {
            return 'title';
        },
        enumerable: true,
        configurable: true
    });
    DxoTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-title',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoTitleComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoTitleComponent.propDecorators = {
        "font": [{ type: Input },],
        "horizontalAlignment": [{ type: Input },],
        "margin": [{ type: Input },],
        "placeholderSize": [{ type: Input },],
        "subtitle": [{ type: Input },],
        "text": [{ type: Input },],
        "verticalAlignment": [{ type: Input },],
        "textOverflow": [{ type: Input },],
        "wordWrap": [{ type: Input },],
        "alignment": [{ type: Input },],
    };
    return DxoTitleComponent;
}(NestedOption));
export { DxoTitleComponent };
var DxoTitleModule = (function () {
    function DxoTitleModule() {
    }
    DxoTitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoTitleComponent
                    ],
                    exports: [
                        DxoTitleComponent
                    ],
                },] },
    ];
    return DxoTitleModule;
}());
export { DxoTitleModule };
//# sourceMappingURL=title.js.map