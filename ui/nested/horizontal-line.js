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
var DxoHorizontalLineComponent = (function (_super) {
    __extends(DxoHorizontalLineComponent, _super);
    function DxoHorizontalLineComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoHorizontalLineComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHorizontalLineComponent.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHorizontalLineComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHorizontalLineComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHorizontalLineComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHorizontalLineComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHorizontalLineComponent.prototype, "_optionPath", {
        get: function () {
            return 'horizontalLine';
        },
        enumerable: true,
        configurable: true
    });
    DxoHorizontalLineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-horizontal-line',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoHorizontalLineComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoHorizontalLineComponent.propDecorators = {
        "color": [{ type: Input },],
        "dashStyle": [{ type: Input },],
        "label": [{ type: Input },],
        "opacity": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
    };
    return DxoHorizontalLineComponent;
}(NestedOption));
export { DxoHorizontalLineComponent };
var DxoHorizontalLineModule = (function () {
    function DxoHorizontalLineModule() {
    }
    DxoHorizontalLineModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoHorizontalLineComponent
                    ],
                    exports: [
                        DxoHorizontalLineComponent
                    ],
                },] },
    ];
    return DxoHorizontalLineModule;
}());
export { DxoHorizontalLineModule };
//# sourceMappingURL=horizontal-line.js.map