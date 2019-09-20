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
var DxoGroupPanelComponent = (function (_super) {
    __extends(DxoGroupPanelComponent, _super);
    function DxoGroupPanelComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoGroupPanelComponent.prototype, "allowColumnDragging", {
        get: function () {
            return this._getOption('allowColumnDragging');
        },
        set: function (value) {
            this._setOption('allowColumnDragging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupPanelComponent.prototype, "emptyPanelText", {
        get: function () {
            return this._getOption('emptyPanelText');
        },
        set: function (value) {
            this._setOption('emptyPanelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupPanelComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupPanelComponent.prototype, "_optionPath", {
        get: function () {
            return 'groupPanel';
        },
        enumerable: true,
        configurable: true
    });
    DxoGroupPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-group-panel',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoGroupPanelComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoGroupPanelComponent.propDecorators = {
        "allowColumnDragging": [{ type: core_1.Input },],
        "emptyPanelText": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
    };
    return DxoGroupPanelComponent;
}(nested_option_2.NestedOption));
exports.DxoGroupPanelComponent = DxoGroupPanelComponent;
var DxoGroupPanelModule = (function () {
    function DxoGroupPanelModule() {
    }
    DxoGroupPanelModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoGroupPanelComponent
                    ],
                    exports: [
                        DxoGroupPanelComponent
                    ],
                },] },
    ];
    return DxoGroupPanelModule;
}());
exports.DxoGroupPanelModule = DxoGroupPanelModule;
//# sourceMappingURL=group-panel.js.map