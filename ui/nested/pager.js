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
var DxoPagerComponent = (function (_super) {
    __extends(DxoPagerComponent, _super);
    function DxoPagerComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoPagerComponent.prototype, "allowedPageSizes", {
        get: function () {
            return this._getOption('allowedPageSizes');
        },
        set: function (value) {
            this._setOption('allowedPageSizes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPagerComponent.prototype, "infoText", {
        get: function () {
            return this._getOption('infoText');
        },
        set: function (value) {
            this._setOption('infoText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPagerComponent.prototype, "showInfo", {
        get: function () {
            return this._getOption('showInfo');
        },
        set: function (value) {
            this._setOption('showInfo', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPagerComponent.prototype, "showNavigationButtons", {
        get: function () {
            return this._getOption('showNavigationButtons');
        },
        set: function (value) {
            this._setOption('showNavigationButtons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPagerComponent.prototype, "showPageSizeSelector", {
        get: function () {
            return this._getOption('showPageSizeSelector');
        },
        set: function (value) {
            this._setOption('showPageSizeSelector', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPagerComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPagerComponent.prototype, "_optionPath", {
        get: function () {
            return 'pager';
        },
        enumerable: true,
        configurable: true
    });
    DxoPagerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-pager',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoPagerComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoPagerComponent.propDecorators = {
        "allowedPageSizes": [{ type: core_1.Input },],
        "infoText": [{ type: core_1.Input },],
        "showInfo": [{ type: core_1.Input },],
        "showNavigationButtons": [{ type: core_1.Input },],
        "showPageSizeSelector": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
    };
    return DxoPagerComponent;
}(nested_option_2.NestedOption));
exports.DxoPagerComponent = DxoPagerComponent;
var DxoPagerModule = (function () {
    function DxoPagerModule() {
    }
    DxoPagerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoPagerComponent
                    ],
                    exports: [
                        DxoPagerComponent
                    ],
                },] },
    ];
    return DxoPagerModule;
}());
exports.DxoPagerModule = DxoPagerModule;
//# sourceMappingURL=pager.js.map