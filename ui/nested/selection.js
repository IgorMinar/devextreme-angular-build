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
var DxoSelectionComponent = (function (_super) {
    __extends(DxoSelectionComponent, _super);
    function DxoSelectionComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSelectionComponent.prototype, "allowSelectAll", {
        get: function () {
            return this._getOption('allowSelectAll');
        },
        set: function (value) {
            this._setOption('allowSelectAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionComponent.prototype, "deferred", {
        get: function () {
            return this._getOption('deferred');
        },
        set: function (value) {
            this._setOption('deferred', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionComponent.prototype, "selectAllMode", {
        get: function () {
            return this._getOption('selectAllMode');
        },
        set: function (value) {
            this._setOption('selectAllMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionComponent.prototype, "showCheckBoxesMode", {
        get: function () {
            return this._getOption('showCheckBoxesMode');
        },
        set: function (value) {
            this._setOption('showCheckBoxesMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionComponent.prototype, "recursive", {
        get: function () {
            return this._getOption('recursive');
        },
        set: function (value) {
            this._setOption('recursive', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionComponent.prototype, "_optionPath", {
        get: function () {
            return 'selection';
        },
        enumerable: true,
        configurable: true
    });
    DxoSelectionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-selection',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSelectionComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSelectionComponent.propDecorators = {
        "allowSelectAll": [{ type: core_1.Input },],
        "deferred": [{ type: core_1.Input },],
        "mode": [{ type: core_1.Input },],
        "selectAllMode": [{ type: core_1.Input },],
        "showCheckBoxesMode": [{ type: core_1.Input },],
        "recursive": [{ type: core_1.Input },],
    };
    return DxoSelectionComponent;
}(nested_option_2.NestedOption));
exports.DxoSelectionComponent = DxoSelectionComponent;
var DxoSelectionModule = (function () {
    function DxoSelectionModule() {
    }
    DxoSelectionModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSelectionComponent
                    ],
                    exports: [
                        DxoSelectionComponent
                    ],
                },] },
    ];
    return DxoSelectionModule;
}());
exports.DxoSelectionModule = DxoSelectionModule;
//# sourceMappingURL=selection.js.map