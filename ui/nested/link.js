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
var DxoLinkComponent = (function (_super) {
    __extends(DxoLinkComponent, _super);
    function DxoLinkComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoLinkComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLinkComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLinkComponent.prototype, "colorMode", {
        get: function () {
            return this._getOption('colorMode');
        },
        set: function (value) {
            this._setOption('colorMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLinkComponent.prototype, "hoverStyle", {
        get: function () {
            return this._getOption('hoverStyle');
        },
        set: function (value) {
            this._setOption('hoverStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLinkComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLinkComponent.prototype, "_optionPath", {
        get: function () {
            return 'link';
        },
        enumerable: true,
        configurable: true
    });
    DxoLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-link',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoLinkComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoLinkComponent.propDecorators = {
        "border": [{ type: Input },],
        "color": [{ type: Input },],
        "colorMode": [{ type: Input },],
        "hoverStyle": [{ type: Input },],
        "opacity": [{ type: Input },],
    };
    return DxoLinkComponent;
}(NestedOption));
export { DxoLinkComponent };
var DxoLinkModule = (function () {
    function DxoLinkModule() {
    }
    DxoLinkModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoLinkComponent
                    ],
                    exports: [
                        DxoLinkComponent
                    ],
                },] },
    ];
    return DxoLinkModule;
}());
export { DxoLinkModule };
//# sourceMappingURL=link.js.map