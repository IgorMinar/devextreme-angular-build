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
var DxoKeyboardNavigationComponent = (function (_super) {
    __extends(DxoKeyboardNavigationComponent, _super);
    function DxoKeyboardNavigationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoKeyboardNavigationComponent.prototype, "editOnKeyPress", {
        get: function () {
            return this._getOption('editOnKeyPress');
        },
        set: function (value) {
            this._setOption('editOnKeyPress', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoKeyboardNavigationComponent.prototype, "enterKeyAction", {
        get: function () {
            return this._getOption('enterKeyAction');
        },
        set: function (value) {
            this._setOption('enterKeyAction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoKeyboardNavigationComponent.prototype, "enterKeyDirection", {
        get: function () {
            return this._getOption('enterKeyDirection');
        },
        set: function (value) {
            this._setOption('enterKeyDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoKeyboardNavigationComponent.prototype, "_optionPath", {
        get: function () {
            return 'keyboardNavigation';
        },
        enumerable: true,
        configurable: true
    });
    DxoKeyboardNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-keyboard-navigation',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoKeyboardNavigationComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoKeyboardNavigationComponent.propDecorators = {
        "editOnKeyPress": [{ type: Input },],
        "enterKeyAction": [{ type: Input },],
        "enterKeyDirection": [{ type: Input },],
    };
    return DxoKeyboardNavigationComponent;
}(NestedOption));
export { DxoKeyboardNavigationComponent };
var DxoKeyboardNavigationModule = (function () {
    function DxoKeyboardNavigationModule() {
    }
    DxoKeyboardNavigationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoKeyboardNavigationComponent
                    ],
                    exports: [
                        DxoKeyboardNavigationComponent
                    ],
                },] },
    ];
    return DxoKeyboardNavigationModule;
}());
export { DxoKeyboardNavigationModule };
//# sourceMappingURL=keyboard-navigation.js.map