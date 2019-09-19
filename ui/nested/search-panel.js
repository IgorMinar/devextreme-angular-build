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
var DxoSearchPanelComponent = (function (_super) {
    __extends(DxoSearchPanelComponent, _super);
    function DxoSearchPanelComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'textChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSearchPanelComponent.prototype, "highlightCaseSensitive", {
        get: function () {
            return this._getOption('highlightCaseSensitive');
        },
        set: function (value) {
            this._setOption('highlightCaseSensitive', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "highlightSearchText", {
        get: function () {
            return this._getOption('highlightSearchText');
        },
        set: function (value) {
            this._setOption('highlightSearchText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "searchVisibleColumnsOnly", {
        get: function () {
            return this._getOption('searchVisibleColumnsOnly');
        },
        set: function (value) {
            this._setOption('searchVisibleColumnsOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "_optionPath", {
        get: function () {
            return 'searchPanel';
        },
        enumerable: true,
        configurable: true
    });
    DxoSearchPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-search-panel',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSearchPanelComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoSearchPanelComponent.propDecorators = {
        "highlightCaseSensitive": [{ type: Input },],
        "highlightSearchText": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "searchVisibleColumnsOnly": [{ type: Input },],
        "text": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "textChange": [{ type: Output },],
    };
    return DxoSearchPanelComponent;
}(NestedOption));
export { DxoSearchPanelComponent };
var DxoSearchPanelModule = (function () {
    function DxoSearchPanelModule() {
    }
    DxoSearchPanelModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoSearchPanelComponent
                    ],
                    exports: [
                        DxoSearchPanelComponent
                    ],
                },] },
    ];
    return DxoSearchPanelModule;
}());
export { DxoSearchPanelModule };
//# sourceMappingURL=search-panel.js.map