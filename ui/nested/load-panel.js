"use strict";
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
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nested_option_1 = require("../../core/nested-option");
var nested_option_2 = require("../../core/nested-option");
var DxoLoadPanelComponent = (function (_super) {
    __extends(DxoLoadPanelComponent, _super);
    function DxoLoadPanelComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoLoadPanelComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadPanelComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadPanelComponent.prototype, "indicatorSrc", {
        get: function () {
            return this._getOption('indicatorSrc');
        },
        set: function (value) {
            this._setOption('indicatorSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadPanelComponent.prototype, "shading", {
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadPanelComponent.prototype, "shadingColor", {
        get: function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadPanelComponent.prototype, "showIndicator", {
        get: function () {
            return this._getOption('showIndicator');
        },
        set: function (value) {
            this._setOption('showIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadPanelComponent.prototype, "showPane", {
        get: function () {
            return this._getOption('showPane');
        },
        set: function (value) {
            this._setOption('showPane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadPanelComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadPanelComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadPanelComponent.prototype, "_optionPath", {
        get: function () {
            return 'loadPanel';
        },
        enumerable: true,
        configurable: true
    });
    DxoLoadPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-load-panel',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoLoadPanelComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoLoadPanelComponent.propDecorators = {
        "enabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "indicatorSrc": [{ type: core_1.Input },],
        "shading": [{ type: core_1.Input },],
        "shadingColor": [{ type: core_1.Input },],
        "showIndicator": [{ type: core_1.Input },],
        "showPane": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
    };
    return DxoLoadPanelComponent;
}(nested_option_2.NestedOption));
exports.DxoLoadPanelComponent = DxoLoadPanelComponent;
var DxoLoadPanelModule = (function () {
    function DxoLoadPanelModule() {
    }
    DxoLoadPanelModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoLoadPanelComponent
                    ],
                    exports: [
                        DxoLoadPanelComponent
                    ],
                },] },
    ];
    return DxoLoadPanelModule;
}());
exports.DxoLoadPanelModule = DxoLoadPanelModule;
//# sourceMappingURL=load-panel.js.map