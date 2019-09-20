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
var form_simple_item_1 = require("./base/form-simple-item");
var validation_rule_dxi_1 = require("./validation-rule-dxi");
var DxoFormItemComponent = (function (_super) {
    __extends(DxoFormItemComponent, _super);
    function DxoFormItemComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFormItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'formItem';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormItemComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoFormItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-form-item',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'colSpan',
                        'cssClass',
                        'dataField',
                        'editorOptions',
                        'editorType',
                        'helpText',
                        'isRequired',
                        'itemType',
                        'label',
                        'name',
                        'template',
                        'validationRules',
                        'visible',
                        'visibleIndex'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoFormItemComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoFormItemComponent.propDecorators = {
        "validationRulesChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return validation_rule_dxi_1.DxiValidationRuleComponent; }),] },],
    };
    return DxoFormItemComponent;
}(form_simple_item_1.DxoFormSimpleItem));
exports.DxoFormItemComponent = DxoFormItemComponent;
var DxoFormItemModule = (function () {
    function DxoFormItemModule() {
    }
    DxoFormItemModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoFormItemComponent
                    ],
                    exports: [
                        DxoFormItemComponent
                    ],
                },] },
    ];
    return DxoFormItemModule;
}());
exports.DxoFormItemModule = DxoFormItemModule;
//# sourceMappingURL=form-item.js.map