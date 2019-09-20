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
var position_config_1 = require("./base/position-config");
var DxoPositionComponent = (function (_super) {
    __extends(DxoPositionComponent, _super);
    function DxoPositionComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoPositionComponent.prototype, "_optionPath", {
        get: function () {
            return 'position';
        },
        enumerable: true,
        configurable: true
    });
    DxoPositionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-position',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'at',
                        'boundary',
                        'boundaryOffset',
                        'collision',
                        'my',
                        'of',
                        'offset'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoPositionComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxoPositionComponent;
}(position_config_1.DxoPositionConfig));
exports.DxoPositionComponent = DxoPositionComponent;
var DxoPositionModule = (function () {
    function DxoPositionModule() {
    }
    DxoPositionModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoPositionComponent
                    ],
                    exports: [
                        DxoPositionComponent
                    ],
                },] },
    ];
    return DxoPositionModule;
}());
exports.DxoPositionModule = DxoPositionModule;
//# sourceMappingURL=position.js.map