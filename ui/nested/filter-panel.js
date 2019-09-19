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
var DxoFilterPanelComponent = (function (_super) {
    __extends(DxoFilterPanelComponent, _super);
    function DxoFilterPanelComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'filterEnabledChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFilterPanelComponent.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterPanelComponent.prototype, "filterEnabled", {
        get: function () {
            return this._getOption('filterEnabled');
        },
        set: function (value) {
            this._setOption('filterEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterPanelComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterPanelComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterPanelComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterPanel';
        },
        enumerable: true,
        configurable: true
    });
    DxoFilterPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-filter-panel',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoFilterPanelComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoFilterPanelComponent.propDecorators = {
        "customizeText": [{ type: Input },],
        "filterEnabled": [{ type: Input },],
        "texts": [{ type: Input },],
        "visible": [{ type: Input },],
        "filterEnabledChange": [{ type: Output },],
    };
    return DxoFilterPanelComponent;
}(NestedOption));
export { DxoFilterPanelComponent };
var DxoFilterPanelModule = (function () {
    function DxoFilterPanelModule() {
    }
    DxoFilterPanelModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoFilterPanelComponent
                    ],
                    exports: [
                        DxoFilterPanelComponent
                    ],
                },] },
    ];
    return DxoFilterPanelModule;
}());
export { DxoFilterPanelModule };
//# sourceMappingURL=filter-panel.js.map