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
var DxoRemoteOperationsComponent = (function (_super) {
    __extends(DxoRemoteOperationsComponent, _super);
    function DxoRemoteOperationsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoRemoteOperationsComponent.prototype, "filtering", {
        get: function () {
            return this._getOption('filtering');
        },
        set: function (value) {
            this._setOption('filtering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRemoteOperationsComponent.prototype, "grouping", {
        get: function () {
            return this._getOption('grouping');
        },
        set: function (value) {
            this._setOption('grouping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRemoteOperationsComponent.prototype, "groupPaging", {
        get: function () {
            return this._getOption('groupPaging');
        },
        set: function (value) {
            this._setOption('groupPaging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRemoteOperationsComponent.prototype, "paging", {
        get: function () {
            return this._getOption('paging');
        },
        set: function (value) {
            this._setOption('paging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRemoteOperationsComponent.prototype, "sorting", {
        get: function () {
            return this._getOption('sorting');
        },
        set: function (value) {
            this._setOption('sorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRemoteOperationsComponent.prototype, "summary", {
        get: function () {
            return this._getOption('summary');
        },
        set: function (value) {
            this._setOption('summary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRemoteOperationsComponent.prototype, "_optionPath", {
        get: function () {
            return 'remoteOperations';
        },
        enumerable: true,
        configurable: true
    });
    DxoRemoteOperationsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-remote-operations',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoRemoteOperationsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoRemoteOperationsComponent.propDecorators = {
        "filtering": [{ type: core_1.Input },],
        "grouping": [{ type: core_1.Input },],
        "groupPaging": [{ type: core_1.Input },],
        "paging": [{ type: core_1.Input },],
        "sorting": [{ type: core_1.Input },],
        "summary": [{ type: core_1.Input },],
    };
    return DxoRemoteOperationsComponent;
}(nested_option_2.NestedOption));
exports.DxoRemoteOperationsComponent = DxoRemoteOperationsComponent;
var DxoRemoteOperationsModule = (function () {
    function DxoRemoteOperationsModule() {
    }
    DxoRemoteOperationsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoRemoteOperationsComponent
                    ],
                    exports: [
                        DxoRemoteOperationsComponent
                    ],
                },] },
    ];
    return DxoRemoteOperationsModule;
}());
exports.DxoRemoteOperationsModule = DxoRemoteOperationsModule;
//# sourceMappingURL=remote-operations.js.map