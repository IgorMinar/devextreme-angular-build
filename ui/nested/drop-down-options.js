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
var popup_options_1 = require("./base/popup-options");
var toolbar_item_dxi_1 = require("./toolbar-item-dxi");
var DxoDropDownOptionsComponent = (function (_super) {
    __extends(DxoDropDownOptionsComponent, _super);
    function DxoDropDownOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'heightChange' },
            { emit: 'positionChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoDropDownOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'dropDownOptions';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDropDownOptionsComponent.prototype, "toolbarItemsChildren", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this.setChildren('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoDropDownOptionsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-drop-down-options',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'animation',
                        'closeOnBackButton',
                        'closeOnOutsideClick',
                        'container',
                        'contentTemplate',
                        'deferRendering',
                        'disabled',
                        'dragEnabled',
                        'elementAttr',
                        'focusStateEnabled',
                        'fullScreen',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'maxHeight',
                        'maxWidth',
                        'minHeight',
                        'minWidth',
                        'onContentReady',
                        'onDisposing',
                        'onHidden',
                        'onHiding',
                        'onInitialized',
                        'onOptionChanged',
                        'onResize',
                        'onResizeEnd',
                        'onResizeStart',
                        'onShowing',
                        'onShown',
                        'onTitleRendered',
                        'position',
                        'resizeEnabled',
                        'rtlEnabled',
                        'shading',
                        'shadingColor',
                        'showCloseButton',
                        'showTitle',
                        'tabIndex',
                        'title',
                        'titleTemplate',
                        'toolbarItems',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoDropDownOptionsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoDropDownOptionsComponent.propDecorators = {
        "heightChange": [{ type: core_1.Output },],
        "positionChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "toolbarItemsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return toolbar_item_dxi_1.DxiToolbarItemComponent; }),] },],
    };
    return DxoDropDownOptionsComponent;
}(popup_options_1.DxoPopupOptions));
exports.DxoDropDownOptionsComponent = DxoDropDownOptionsComponent;
var DxoDropDownOptionsModule = (function () {
    function DxoDropDownOptionsModule() {
    }
    DxoDropDownOptionsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoDropDownOptionsComponent
                    ],
                    exports: [
                        DxoDropDownOptionsComponent
                    ],
                },] },
    ];
    return DxoDropDownOptionsModule;
}());
exports.DxoDropDownOptionsModule = DxoDropDownOptionsModule;
//# sourceMappingURL=drop-down-options.js.map