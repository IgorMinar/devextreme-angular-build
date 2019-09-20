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
var button_options_1 = require("./base/button-options");
var DxoOptionsComponent = (function (_super) {
    __extends(DxoOptionsComponent, _super);
    function DxoOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'options';
        },
        enumerable: true,
        configurable: true
    });
    DxoOptionsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-options',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'activeStateEnabled',
                        'disabled',
                        'elementAttr',
                        'focusStateEnabled',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'icon',
                        'onClick',
                        'onContentReady',
                        'onDisposing',
                        'onInitialized',
                        'onOptionChanged',
                        'rtlEnabled',
                        'stylingMode',
                        'tabIndex',
                        'template',
                        'text',
                        'type',
                        'useSubmitBehavior',
                        'validationGroup',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoOptionsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxoOptionsComponent;
}(button_options_1.DxoButtonOptions));
exports.DxoOptionsComponent = DxoOptionsComponent;
var DxoOptionsModule = (function () {
    function DxoOptionsModule() {
    }
    DxoOptionsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoOptionsComponent
                    ],
                    exports: [
                        DxoOptionsComponent
                    ],
                },] },
    ];
    return DxoOptionsModule;
}());
exports.DxoOptionsModule = DxoOptionsModule;
//# sourceMappingURL=options.js.map