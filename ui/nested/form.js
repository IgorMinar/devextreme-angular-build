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
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormOptions } from './base/form-options';
import { DxiItemComponent } from './item-dxi';
var DxoFormComponent = (function (_super) {
    __extends(DxoFormComponent, _super);
    function DxoFormComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'formDataChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFormComponent.prototype, "_optionPath", {
        get: function () {
            return 'form';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-form',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'activeStateEnabled',
                        'alignItemLabels',
                        'alignItemLabelsInAllGroups',
                        'colCount',
                        'colCountByScreen',
                        'customizeItem',
                        'disabled',
                        'elementAttr',
                        'focusStateEnabled',
                        'formData',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'items',
                        'labelLocation',
                        'minColWidth',
                        'onContentReady',
                        'onDisposing',
                        'onEditorEnterKey',
                        'onFieldDataChanged',
                        'onInitialized',
                        'onOptionChanged',
                        'optionalMark',
                        'readOnly',
                        'requiredMark',
                        'requiredMessage',
                        'rtlEnabled',
                        'screenByWidth',
                        'scrollingEnabled',
                        'showColonAfterLabel',
                        'showOptionalMark',
                        'showRequiredMark',
                        'showValidationSummary',
                        'tabIndex',
                        'validationGroup',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoFormComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoFormComponent.propDecorators = {
        "formDataChange": [{ type: Output },],
        "itemsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiItemComponent; }),] },],
    };
    return DxoFormComponent;
}(DxoFormOptions));
export { DxoFormComponent };
var DxoFormModule = (function () {
    function DxoFormModule() {
    }
    DxoFormModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoFormComponent
                    ],
                    exports: [
                        DxoFormComponent
                    ],
                },] },
    ];
    return DxoFormModule;
}());
export { DxoFormModule };
//# sourceMappingURL=form.js.map