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
import { DxoGaugeIndicator } from './base/gauge-indicator';
var DxoValueIndicatorComponent = (function (_super) {
    __extends(DxoValueIndicatorComponent, _super);
    function DxoValueIndicatorComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoValueIndicatorComponent.prototype, "_optionPath", {
        get: function () {
            return 'valueIndicator';
        },
        enumerable: true,
        configurable: true
    });
    DxoValueIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-value-indicator',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'arrowLength',
                        'backgroundColor',
                        'baseValue',
                        'beginAdaptingAtRadius',
                        'color',
                        'horizontalOrientation',
                        'indentFromCenter',
                        'length',
                        'offset',
                        'palette',
                        'secondColor',
                        'secondFraction',
                        'size',
                        'spindleGapSize',
                        'spindleSize',
                        'text',
                        'type',
                        'verticalOrientation',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoValueIndicatorComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoValueIndicatorComponent;
}(DxoGaugeIndicator));
export { DxoValueIndicatorComponent };
var DxoValueIndicatorModule = (function () {
    function DxoValueIndicatorModule() {
    }
    DxoValueIndicatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoValueIndicatorComponent
                    ],
                    exports: [
                        DxoValueIndicatorComponent
                    ],
                },] },
    ];
    return DxoValueIndicatorModule;
}());
export { DxoValueIndicatorModule };
//# sourceMappingURL=value-indicator.js.map