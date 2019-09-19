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
var DxoSeriesTemplateComponent = (function (_super) {
    __extends(DxoSeriesTemplateComponent, _super);
    function DxoSeriesTemplateComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSeriesTemplateComponent.prototype, "customizeSeries", {
        get: function () {
            return this._getOption('customizeSeries');
        },
        set: function (value) {
            this._setOption('customizeSeries', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSeriesTemplateComponent.prototype, "nameField", {
        get: function () {
            return this._getOption('nameField');
        },
        set: function (value) {
            this._setOption('nameField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSeriesTemplateComponent.prototype, "_optionPath", {
        get: function () {
            return 'seriesTemplate';
        },
        enumerable: true,
        configurable: true
    });
    DxoSeriesTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-series-template',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSeriesTemplateComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoSeriesTemplateComponent.propDecorators = {
        "customizeSeries": [{ type: Input },],
        "nameField": [{ type: Input },],
    };
    return DxoSeriesTemplateComponent;
}(NestedOption));
export { DxoSeriesTemplateComponent };
var DxoSeriesTemplateModule = (function () {
    function DxoSeriesTemplateModule() {
    }
    DxoSeriesTemplateModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoSeriesTemplateComponent
                    ],
                    exports: [
                        DxoSeriesTemplateComponent
                    ],
                },] },
    ];
    return DxoSeriesTemplateModule;
}());
export { DxoSeriesTemplateModule };
//# sourceMappingURL=series-template.js.map