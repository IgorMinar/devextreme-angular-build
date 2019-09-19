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
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoVizFont } from './base/viz-font';
var DxoFontComponent = (function (_super) {
    __extends(DxoFontComponent, _super);
    function DxoFontComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFontComponent.prototype, "_optionPath", {
        get: function () {
            return 'font';
        },
        enumerable: true,
        configurable: true
    });
    DxoFontComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-font',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'color',
                        'family',
                        'opacity',
                        'size',
                        'weight'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoFontComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoFontComponent;
}(DxoVizFont));
export { DxoFontComponent };
var DxoFontModule = (function () {
    function DxoFontModule() {
    }
    DxoFontModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoFontComponent
                    ],
                    exports: [
                        DxoFontComponent
                    ],
                },] },
    ];
    return DxoFontModule;
}());
export { DxoFontModule };
//# sourceMappingURL=font.js.map