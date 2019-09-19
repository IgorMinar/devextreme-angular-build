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
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';

import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoEditingComponent = (function (_super) {
    __extends(DxoEditingComponent, _super);
    function DxoEditingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoEditingComponent.prototype, "allowAdding", {
        get: function () {
            return this._getOption('allowAdding');
        },
        set: function (value) {
            this._setOption('allowAdding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowDeleting", {
        get: function () {
            return this._getOption('allowDeleting');
        },
        set: function (value) {
            this._setOption('allowDeleting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowUpdating", {
        get: function () {
            return this._getOption('allowUpdating');
        },
        set: function (value) {
            this._setOption('allowUpdating', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "form", {
        get: function () {
            return this._getOption('form');
        },
        set: function (value) {
            this._setOption('form', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "popup", {
        get: function () {
            return this._getOption('popup');
        },
        set: function (value) {
            this._setOption('popup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "refreshMode", {
        get: function () {
            return this._getOption('refreshMode');
        },
        set: function (value) {
            this._setOption('refreshMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "selectTextOnEditStart", {
        get: function () {
            return this._getOption('selectTextOnEditStart');
        },
        set: function (value) {
            this._setOption('selectTextOnEditStart', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "startEditAction", {
        get: function () {
            return this._getOption('startEditAction');
        },
        set: function (value) {
            this._setOption('startEditAction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "useIcons", {
        get: function () {
            return this._getOption('useIcons');
        },
        set: function (value) {
            this._setOption('useIcons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowDragging", {
        get: function () {
            return this._getOption('allowDragging');
        },
        set: function (value) {
            this._setOption('allowDragging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowResizing", {
        get: function () {
            return this._getOption('allowResizing');
        },
        set: function (value) {
            this._setOption('allowResizing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "_optionPath", {
        get: function () {
            return 'editing';
        },
        enumerable: true,
        configurable: true
    });
    DxoEditingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-editing',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoEditingComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoEditingComponent.propDecorators = {
        "allowAdding": [{ type: Input },],
        "allowDeleting": [{ type: Input },],
        "allowUpdating": [{ type: Input },],
        "form": [{ type: Input },],
        "mode": [{ type: Input },],
        "popup": [{ type: Input },],
        "refreshMode": [{ type: Input },],
        "selectTextOnEditStart": [{ type: Input },],
        "startEditAction": [{ type: Input },],
        "texts": [{ type: Input },],
        "useIcons": [{ type: Input },],
        "allowDragging": [{ type: Input },],
        "allowResizing": [{ type: Input },],
    };
    return DxoEditingComponent;
}(NestedOption));
export { DxoEditingComponent };
var DxoEditingModule = (function () {
    function DxoEditingModule() {
    }
    DxoEditingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoEditingComponent
                    ],
                    exports: [
                        DxoEditingComponent
                    ],
                },] },
    ];
    return DxoEditingModule;
}());
export { DxoEditingModule };
//# sourceMappingURL=editing.js.map