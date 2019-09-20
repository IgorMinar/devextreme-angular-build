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
var text_box_options_1 = require("./base/text-box-options");
var button_dxi_1 = require("./button-dxi");
var DxoSearchEditorOptionsComponent = (function (_super) {
    __extends(DxoSearchEditorOptionsComponent, _super);
    function DxoSearchEditorOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'textChange' },
            { emit: 'valueChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSearchEditorOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'searchEditorOptions';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchEditorOptionsComponent.prototype, "buttonsChildren", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this.setChildren('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoSearchEditorOptionsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-search-editor-options',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'activeStateEnabled',
                        'buttons',
                        'disabled',
                        'elementAttr',
                        'focusStateEnabled',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'inputAttr',
                        'isValid',
                        'mask',
                        'maskChar',
                        'maskInvalidMessage',
                        'maskRules',
                        'maxLength',
                        'mode',
                        'name',
                        'onChange',
                        'onContentReady',
                        'onCopy',
                        'onCut',
                        'onDisposing',
                        'onEnterKey',
                        'onFocusIn',
                        'onFocusOut',
                        'onInitialized',
                        'onInput',
                        'onKeyDown',
                        'onKeyPress',
                        'onKeyUp',
                        'onOptionChanged',
                        'onPaste',
                        'onValueChanged',
                        'placeholder',
                        'readOnly',
                        'rtlEnabled',
                        'showClearButton',
                        'showMaskMode',
                        'spellcheck',
                        'stylingMode',
                        'tabIndex',
                        'text',
                        'useMaskedValue',
                        'validationError',
                        'validationMessageMode',
                        'value',
                        'valueChangeEvent',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoSearchEditorOptionsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSearchEditorOptionsComponent.propDecorators = {
        "textChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
        "buttonsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return button_dxi_1.DxiButtonComponent; }),] },],
    };
    return DxoSearchEditorOptionsComponent;
}(text_box_options_1.DxoTextBoxOptions));
exports.DxoSearchEditorOptionsComponent = DxoSearchEditorOptionsComponent;
var DxoSearchEditorOptionsModule = (function () {
    function DxoSearchEditorOptionsModule() {
    }
    DxoSearchEditorOptionsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSearchEditorOptionsComponent
                    ],
                    exports: [
                        DxoSearchEditorOptionsComponent
                    ],
                },] },
    ];
    return DxoSearchEditorOptionsModule;
}());
exports.DxoSearchEditorOptionsModule = DxoSearchEditorOptionsModule;
//# sourceMappingURL=search-editor-options.js.map