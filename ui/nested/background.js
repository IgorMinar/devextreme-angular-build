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
var DxoBackgroundComponent = (function (_super) {
    __extends(DxoBackgroundComponent, _super);
    function DxoBackgroundComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoBackgroundComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBackgroundComponent.prototype, "image", {
        get: function () {
            return this._getOption('image');
        },
        set: function (value) {
            this._setOption('image', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBackgroundComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBackgroundComponent.prototype, "borderColor", {
        get: function () {
            return this._getOption('borderColor');
        },
        set: function (value) {
            this._setOption('borderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBackgroundComponent.prototype, "_optionPath", {
        get: function () {
            return 'background';
        },
        enumerable: true,
        configurable: true
    });
    DxoBackgroundComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-background',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoBackgroundComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoBackgroundComponent.propDecorators = {
        "color": [{ type: Input },],
        "image": [{ type: Input },],
        "visible": [{ type: Input },],
        "borderColor": [{ type: Input },],
    };
    return DxoBackgroundComponent;
}(NestedOption));
export { DxoBackgroundComponent };
var DxoBackgroundModule = (function () {
    function DxoBackgroundModule() {
    }
    DxoBackgroundModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoBackgroundComponent
                    ],
                    exports: [
                        DxoBackgroundComponent
                    ],
                },] },
    ];
    return DxoBackgroundModule;
}());
export { DxoBackgroundModule };
//# sourceMappingURL=background.js.map