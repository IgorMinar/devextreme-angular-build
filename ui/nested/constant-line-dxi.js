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
var DxiConstantLineComponent = (function (_super) {
    __extends(DxiConstantLineComponent, _super);
    function DxiConstantLineComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiConstantLineComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "displayBehindSeries", {
        get: function () {
            return this._getOption('displayBehindSeries');
        },
        set: function (value) {
            this._setOption('displayBehindSeries', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "extendAxis", {
        get: function () {
            return this._getOption('extendAxis');
        },
        set: function (value) {
            this._setOption('extendAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "paddingLeftRight", {
        get: function () {
            return this._getOption('paddingLeftRight');
        },
        set: function (value) {
            this._setOption('paddingLeftRight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "paddingTopBottom", {
        get: function () {
            return this._getOption('paddingTopBottom');
        },
        set: function (value) {
            this._setOption('paddingTopBottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "_optionPath", {
        get: function () {
            return 'constantLines';
        },
        enumerable: true,
        configurable: true
    });
    DxiConstantLineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-constant-line',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiConstantLineComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiConstantLineComponent.propDecorators = {
        "color": [{ type: Input },],
        "dashStyle": [{ type: Input },],
        "displayBehindSeries": [{ type: Input },],
        "extendAxis": [{ type: Input },],
        "label": [{ type: Input },],
        "paddingLeftRight": [{ type: Input },],
        "paddingTopBottom": [{ type: Input },],
        "value": [{ type: Input },],
        "width": [{ type: Input },],
    };
    return DxiConstantLineComponent;
}(CollectionNestedOption));
export { DxiConstantLineComponent };
var DxiConstantLineModule = (function () {
    function DxiConstantLineModule() {
    }
    DxiConstantLineModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiConstantLineComponent
                    ],
                    exports: [
                        DxiConstantLineComponent
                    ],
                },] },
    ];
    return DxiConstantLineModule;
}());
export { DxiConstantLineModule };
//# sourceMappingURL=constant-line-dxi.js.map