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
var html_editor_toolbar_1 = require("./base/html-editor-toolbar");
var item_dxi_1 = require("./item-dxi");
var DxoToolbarComponent = (function (_super) {
    __extends(DxoToolbarComponent, _super);
    function DxoToolbarComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoToolbarComponent.prototype, "_optionPath", {
        get: function () {
            return 'toolbar';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoToolbarComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoToolbarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-toolbar',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'container',
                        'items'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoToolbarComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoToolbarComponent.propDecorators = {
        "itemsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return item_dxi_1.DxiItemComponent; }),] },],
    };
    return DxoToolbarComponent;
}(html_editor_toolbar_1.DxoHtmlEditorToolbar));
exports.DxoToolbarComponent = DxoToolbarComponent;
var DxoToolbarModule = (function () {
    function DxoToolbarModule() {
    }
    DxoToolbarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoToolbarComponent
                    ],
                    exports: [
                        DxoToolbarComponent
                    ],
                },] },
    ];
    return DxoToolbarModule;
}());
exports.DxoToolbarModule = DxoToolbarModule;
//# sourceMappingURL=toolbar.js.map