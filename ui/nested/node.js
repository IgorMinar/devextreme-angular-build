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
var DxoNodeComponent = (function (_super) {
    __extends(DxoNodeComponent, _super);
    function DxoNodeComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoNodeComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoNodeComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoNodeComponent.prototype, "hoverStyle", {
        get: function () {
            return this._getOption('hoverStyle');
        },
        set: function (value) {
            this._setOption('hoverStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoNodeComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoNodeComponent.prototype, "padding", {
        get: function () {
            return this._getOption('padding');
        },
        set: function (value) {
            this._setOption('padding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoNodeComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoNodeComponent.prototype, "_optionPath", {
        get: function () {
            return 'node';
        },
        enumerable: true,
        configurable: true
    });
    DxoNodeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-node',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoNodeComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoNodeComponent.propDecorators = {
        "border": [{ type: Input },],
        "color": [{ type: Input },],
        "hoverStyle": [{ type: Input },],
        "opacity": [{ type: Input },],
        "padding": [{ type: Input },],
        "width": [{ type: Input },],
    };
    return DxoNodeComponent;
}(NestedOption));
export { DxoNodeComponent };
var DxoNodeModule = (function () {
    function DxoNodeModule() {
    }
    DxoNodeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoNodeComponent
                    ],
                    exports: [
                        DxoNodeComponent
                    ],
                },] },
    ];
    return DxoNodeModule;
}());
export { DxoNodeModule };
//# sourceMappingURL=node.js.map