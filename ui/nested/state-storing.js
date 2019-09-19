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
var DxoStateStoringComponent = (function (_super) {
    __extends(DxoStateStoringComponent, _super);
    function DxoStateStoringComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoStateStoringComponent.prototype, "customLoad", {
        get: function () {
            return this._getOption('customLoad');
        },
        set: function (value) {
            this._setOption('customLoad', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "customSave", {
        get: function () {
            return this._getOption('customSave');
        },
        set: function (value) {
            this._setOption('customSave', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "savingTimeout", {
        get: function () {
            return this._getOption('savingTimeout');
        },
        set: function (value) {
            this._setOption('savingTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "storageKey", {
        get: function () {
            return this._getOption('storageKey');
        },
        set: function (value) {
            this._setOption('storageKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStateStoringComponent.prototype, "_optionPath", {
        get: function () {
            return 'stateStoring';
        },
        enumerable: true,
        configurable: true
    });
    DxoStateStoringComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-state-storing',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoStateStoringComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoStateStoringComponent.propDecorators = {
        "customLoad": [{ type: Input },],
        "customSave": [{ type: Input },],
        "enabled": [{ type: Input },],
        "savingTimeout": [{ type: Input },],
        "storageKey": [{ type: Input },],
        "type": [{ type: Input },],
    };
    return DxoStateStoringComponent;
}(NestedOption));
export { DxoStateStoringComponent };
var DxoStateStoringModule = (function () {
    function DxoStateStoringModule() {
    }
    DxoStateStoringModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoStateStoringComponent
                    ],
                    exports: [
                        DxoStateStoringComponent
                    ],
                },] },
    ];
    return DxoStateStoringModule;
}());
export { DxoStateStoringModule };
//# sourceMappingURL=state-storing.js.map