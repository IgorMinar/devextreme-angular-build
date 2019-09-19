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
var DxoImageComponent = (function (_super) {
    __extends(DxoImageComponent, _super);
    function DxoImageComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoImageComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoImageComponent.prototype, "url", {
        get: function () {
            return this._getOption('url');
        },
        set: function (value) {
            this._setOption('url', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoImageComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoImageComponent.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoImageComponent.prototype, "_optionPath", {
        get: function () {
            return 'image';
        },
        enumerable: true,
        configurable: true
    });
    DxoImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-image',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoImageComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoImageComponent.propDecorators = {
        "height": [{ type: Input },],
        "url": [{ type: Input },],
        "width": [{ type: Input },],
        "location": [{ type: Input },],
    };
    return DxoImageComponent;
}(NestedOption));
export { DxoImageComponent };
var DxoImageModule = (function () {
    function DxoImageModule() {
    }
    DxoImageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoImageComponent
                    ],
                    exports: [
                        DxoImageComponent
                    ],
                },] },
    ];
    return DxoImageModule;
}());
export { DxoImageModule };
//# sourceMappingURL=image.js.map