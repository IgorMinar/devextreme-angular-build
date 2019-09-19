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
var DxoGroupComponent = (function (_super) {
    __extends(DxoGroupComponent, _super);
    function DxoGroupComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoGroupComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupComponent.prototype, "headerHeight", {
        get: function () {
            return this._getOption('headerHeight');
        },
        set: function (value) {
            this._setOption('headerHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupComponent.prototype, "hoverEnabled", {
        get: function () {
            return this._getOption('hoverEnabled');
        },
        set: function (value) {
            this._setOption('hoverEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupComponent.prototype, "hoverStyle", {
        get: function () {
            return this._getOption('hoverStyle');
        },
        set: function (value) {
            this._setOption('hoverStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupComponent.prototype, "selectionStyle", {
        get: function () {
            return this._getOption('selectionStyle');
        },
        set: function (value) {
            this._setOption('selectionStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupComponent.prototype, "_optionPath", {
        get: function () {
            return 'group';
        },
        enumerable: true,
        configurable: true
    });
    DxoGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-group',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoGroupComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoGroupComponent.propDecorators = {
        "border": [{ type: Input },],
        "color": [{ type: Input },],
        "headerHeight": [{ type: Input },],
        "hoverEnabled": [{ type: Input },],
        "hoverStyle": [{ type: Input },],
        "label": [{ type: Input },],
        "selectionStyle": [{ type: Input },],
    };
    return DxoGroupComponent;
}(NestedOption));
export { DxoGroupComponent };
var DxoGroupModule = (function () {
    function DxoGroupModule() {
    }
    DxoGroupModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoGroupComponent
                    ],
                    exports: [
                        DxoGroupComponent
                    ],
                },] },
    ];
    return DxoGroupModule;
}());
export { DxoGroupModule };
//# sourceMappingURL=group.js.map