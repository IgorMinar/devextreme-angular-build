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
var DxoStateStoringComponent = (function (_super) {
    __extends(DxoStateStoringComponent, _super);
    function DxoStateStoringComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoStateStoringComponent.prototype, "customLoad", {
        get: function () {
            return this._getOption('customLoad');
        },
        set: function (value) {
            this._setOption('customLoad', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "customSave", {
        get: function () {
            return this._getOption('customSave');
        },
        set: function (value) {
            this._setOption('customSave', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "savingTimeout", {
        get: function () {
            return this._getOption('savingTimeout');
        },
        set: function (value) {
            this._setOption('savingTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "storageKey", {
        get: function () {
            return this._getOption('storageKey');
        },
        set: function (value) {
            this._setOption('storageKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "_optionPath", {
        get: function () {
            return 'stateStoring';
        },
        enumerable: true,
        configurable: true
    });
    DxoStateStoringComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-state-storing',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoStateStoringComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoStateStoringComponent.propDecorators = {
        "customLoad": [{ type: core_1.Input },],
        "customSave": [{ type: core_1.Input },],
        "enabled": [{ type: core_1.Input },],
        "savingTimeout": [{ type: core_1.Input },],
        "storageKey": [{ type: core_1.Input },],
        "type": [{ type: core_1.Input },],
    };
    return DxoStateStoringComponent;
}(nested_option_2.NestedOption));
exports.DxoStateStoringComponent = DxoStateStoringComponent;
var DxoStateStoringModule = (function () {
    function DxoStateStoringModule() {
    }
    DxoStateStoringModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoStateStoringComponent
                    ],
                    exports: [
                        DxoStateStoringComponent
                    ],
                },] },
    ];
    return DxoStateStoringModule;
}());
exports.DxoStateStoringModule = DxoStateStoringModule;
//# sourceMappingURL=state-storing.js.map