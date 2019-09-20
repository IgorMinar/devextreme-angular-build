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
var DxoLoadingIndicatorComponent = (function (_super) {
    __extends(DxoLoadingIndicatorComponent, _super);
    function DxoLoadingIndicatorComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'showChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "show", {
        get: function () {
            return this._getOption('show');
        },
        set: function (value) {
            this._setOption('show', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "_optionPath", {
        get: function () {
            return 'loadingIndicator';
        },
        enumerable: true,
        configurable: true
    });
    DxoLoadingIndicatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-loading-indicator',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoLoadingIndicatorComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoLoadingIndicatorComponent.propDecorators = {
        "backgroundColor": [{ type: core_1.Input },],
        "font": [{ type: core_1.Input },],
        "show": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "enabled": [{ type: core_1.Input },],
        "showChange": [{ type: core_1.Output },],
    };
    return DxoLoadingIndicatorComponent;
}(nested_option_2.NestedOption));
exports.DxoLoadingIndicatorComponent = DxoLoadingIndicatorComponent;
var DxoLoadingIndicatorModule = (function () {
    function DxoLoadingIndicatorModule() {
    }
    DxoLoadingIndicatorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoLoadingIndicatorComponent
                    ],
                    exports: [
                        DxoLoadingIndicatorComponent
                    ],
                },] },
    ];
    return DxoLoadingIndicatorModule;
}());
exports.DxoLoadingIndicatorModule = DxoLoadingIndicatorModule;
//# sourceMappingURL=loading-indicator.js.map