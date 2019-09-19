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
import { Component, NgModule, Host, SkipSelf, Input, Output, EventEmitter } from '@angular/core';

import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoLoadingIndicatorComponent = (function (_super) {
    __extends(DxoLoadingIndicatorComponent, _super);
    function DxoLoadingIndicatorComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'showChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "show", {
        get: function () {
            return this._getOption('show');
        },
        set: function (value) {
            this._setOption('show', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLoadingIndicatorComponent.prototype, "_optionPath", {
        get: function () {
            return 'loadingIndicator';
        },
        enumerable: true,
        configurable: true
    });
    DxoLoadingIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-loading-indicator',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoLoadingIndicatorComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoLoadingIndicatorComponent.propDecorators = {
        "backgroundColor": [{ type: Input },],
        "font": [{ type: Input },],
        "show": [{ type: Input },],
        "text": [{ type: Input },],
        "enabled": [{ type: Input },],
        "showChange": [{ type: Output },],
    };
    return DxoLoadingIndicatorComponent;
}(NestedOption));
export { DxoLoadingIndicatorComponent };
var DxoLoadingIndicatorModule = (function () {
    function DxoLoadingIndicatorModule() {
    }
    DxoLoadingIndicatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoLoadingIndicatorComponent
                    ],
                    exports: [
                        DxoLoadingIndicatorComponent
                    ],
                },] },
    ];
    return DxoLoadingIndicatorModule;
}());
export { DxoLoadingIndicatorModule };
//# sourceMappingURL=loading-indicator.js.map