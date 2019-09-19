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
var DxoCrosshairComponent = (function (_super) {
    __extends(DxoCrosshairComponent, _super);
    function DxoCrosshairComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoCrosshairComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "horizontalLine", {
        get: function () {
            return this._getOption('horizontalLine');
        },
        set: function (value) {
            this._setOption('horizontalLine', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "verticalLine", {
        get: function () {
            return this._getOption('verticalLine');
        },
        set: function (value) {
            this._setOption('verticalLine', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCrosshairComponent.prototype, "_optionPath", {
        get: function () {
            return 'crosshair';
        },
        enumerable: true,
        configurable: true
    });
    DxoCrosshairComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-crosshair',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoCrosshairComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoCrosshairComponent.propDecorators = {
        "color": [{ type: Input },],
        "dashStyle": [{ type: Input },],
        "enabled": [{ type: Input },],
        "horizontalLine": [{ type: Input },],
        "label": [{ type: Input },],
        "opacity": [{ type: Input },],
        "verticalLine": [{ type: Input },],
        "width": [{ type: Input },],
    };
    return DxoCrosshairComponent;
}(NestedOption));
export { DxoCrosshairComponent };
var DxoCrosshairModule = (function () {
    function DxoCrosshairModule() {
    }
    DxoCrosshairModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoCrosshairComponent
                    ],
                    exports: [
                        DxoCrosshairComponent
                    ],
                },] },
    ];
    return DxoCrosshairModule;
}());
export { DxoCrosshairModule };
//# sourceMappingURL=crosshair.js.map