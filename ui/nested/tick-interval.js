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
var DxoTickIntervalComponent = (function (_super) {
    __extends(DxoTickIntervalComponent, _super);
    function DxoTickIntervalComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoTickIntervalComponent.prototype, "days", {
        get: function () {
            return this._getOption('days');
        },
        set: function (value) {
            this._setOption('days', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTickIntervalComponent.prototype, "hours", {
        get: function () {
            return this._getOption('hours');
        },
        set: function (value) {
            this._setOption('hours', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTickIntervalComponent.prototype, "milliseconds", {
        get: function () {
            return this._getOption('milliseconds');
        },
        set: function (value) {
            this._setOption('milliseconds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTickIntervalComponent.prototype, "minutes", {
        get: function () {
            return this._getOption('minutes');
        },
        set: function (value) {
            this._setOption('minutes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTickIntervalComponent.prototype, "months", {
        get: function () {
            return this._getOption('months');
        },
        set: function (value) {
            this._setOption('months', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTickIntervalComponent.prototype, "quarters", {
        get: function () {
            return this._getOption('quarters');
        },
        set: function (value) {
            this._setOption('quarters', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTickIntervalComponent.prototype, "seconds", {
        get: function () {
            return this._getOption('seconds');
        },
        set: function (value) {
            this._setOption('seconds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTickIntervalComponent.prototype, "weeks", {
        get: function () {
            return this._getOption('weeks');
        },
        set: function (value) {
            this._setOption('weeks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTickIntervalComponent.prototype, "years", {
        get: function () {
            return this._getOption('years');
        },
        set: function (value) {
            this._setOption('years', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTickIntervalComponent.prototype, "_optionPath", {
        get: function () {
            return 'tickInterval';
        },
        enumerable: true,
        configurable: true
    });
    DxoTickIntervalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-tick-interval',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoTickIntervalComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoTickIntervalComponent.propDecorators = {
        "days": [{ type: Input },],
        "hours": [{ type: Input },],
        "milliseconds": [{ type: Input },],
        "minutes": [{ type: Input },],
        "months": [{ type: Input },],
        "quarters": [{ type: Input },],
        "seconds": [{ type: Input },],
        "weeks": [{ type: Input },],
        "years": [{ type: Input },],
    };
    return DxoTickIntervalComponent;
}(NestedOption));
export { DxoTickIntervalComponent };
var DxoTickIntervalModule = (function () {
    function DxoTickIntervalModule() {
    }
    DxoTickIntervalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoTickIntervalComponent
                    ],
                    exports: [
                        DxoTickIntervalComponent
                    ],
                },] },
    ];
    return DxoTickIntervalModule;
}());
export { DxoTickIntervalModule };
//# sourceMappingURL=tick-interval.js.map