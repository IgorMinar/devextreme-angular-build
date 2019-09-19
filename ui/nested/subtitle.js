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
var DxoSubtitleComponent = (function (_super) {
    __extends(DxoSubtitleComponent, _super);
    function DxoSubtitleComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSubtitleComponent.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSubtitleComponent.prototype, "offset", {
        get: function () {
            return this._getOption('offset');
        },
        set: function (value) {
            this._setOption('offset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSubtitleComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSubtitleComponent.prototype, "textOverflow", {
        get: function () {
            return this._getOption('textOverflow');
        },
        set: function (value) {
            this._setOption('textOverflow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSubtitleComponent.prototype, "wordWrap", {
        get: function () {
            return this._getOption('wordWrap');
        },
        set: function (value) {
            this._setOption('wordWrap', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSubtitleComponent.prototype, "_optionPath", {
        get: function () {
            return 'subtitle';
        },
        enumerable: true,
        configurable: true
    });
    DxoSubtitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-subtitle',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSubtitleComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoSubtitleComponent.propDecorators = {
        "font": [{ type: Input },],
        "offset": [{ type: Input },],
        "text": [{ type: Input },],
        "textOverflow": [{ type: Input },],
        "wordWrap": [{ type: Input },],
    };
    return DxoSubtitleComponent;
}(NestedOption));
export { DxoSubtitleComponent };
var DxoSubtitleModule = (function () {
    function DxoSubtitleModule() {
    }
    DxoSubtitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoSubtitleComponent
                    ],
                    exports: [
                        DxoSubtitleComponent
                    ],
                },] },
    ];
    return DxoSubtitleModule;
}());
export { DxoSubtitleModule };
//# sourceMappingURL=subtitle.js.map