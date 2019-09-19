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
import { CollectionNestedOption } from '../../core/nested-option';
var DxiColComponent = (function (_super) {
    __extends(DxiColComponent, _super);
    function DxiColComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiColComponent.prototype, "baseSize", {
        get: function () {
            return this._getOption('baseSize');
        },
        set: function (value) {
            this._setOption('baseSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColComponent.prototype, "ratio", {
        get: function () {
            return this._getOption('ratio');
        },
        set: function (value) {
            this._setOption('ratio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColComponent.prototype, "screen", {
        get: function () {
            return this._getOption('screen');
        },
        set: function (value) {
            this._setOption('screen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColComponent.prototype, "shrink", {
        get: function () {
            return this._getOption('shrink');
        },
        set: function (value) {
            this._setOption('shrink', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColComponent.prototype, "_optionPath", {
        get: function () {
            return 'cols';
        },
        enumerable: true,
        configurable: true
    });
    DxiColComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-col',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiColComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiColComponent.propDecorators = {
        "baseSize": [{ type: Input },],
        "ratio": [{ type: Input },],
        "screen": [{ type: Input },],
        "shrink": [{ type: Input },],
    };
    return DxiColComponent;
}(CollectionNestedOption));
export { DxiColComponent };
var DxiColModule = (function () {
    function DxiColModule() {
    }
    DxiColModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiColComponent
                    ],
                    exports: [
                        DxiColComponent
                    ],
                },] },
    ];
    return DxiColModule;
}());
export { DxiColModule };
//# sourceMappingURL=col-dxi.js.map