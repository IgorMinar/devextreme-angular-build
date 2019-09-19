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
import { DxiChartSeries } from './base/chart-series-dxi';
var DxiSeriesComponent = (function (_super) {
    __extends(DxiSeriesComponent, _super);
    function DxiSeriesComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiSeriesComponent.prototype, "_optionPath", {
        get: function () {
            return 'series';
        },
        enumerable: true,
        configurable: true
    });
    DxiSeriesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-series',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'aggregation',
                        'argumentField',
                        'axis',
                        'barOverlapGroup',
                        'barPadding',
                        'barWidth',
                        'border',
                        'closeValueField',
                        'color',
                        'cornerRadius',
                        'dashStyle',
                        'highValueField',
                        'hoverMode',
                        'hoverStyle',
                        'ignoreEmptyPoints',
                        'innerColor',
                        'label',
                        'lowValueField',
                        'maxLabelCount',
                        'minBarSize',
                        'name',
                        'opacity',
                        'openValueField',
                        'pane',
                        'point',
                        'rangeValue1Field',
                        'rangeValue2Field',
                        'reduction',
                        'selectionMode',
                        'selectionStyle',
                        'showInLegend',
                        'sizeField',
                        'stack',
                        'tag',
                        'tagField',
                        'type',
                        'valueErrorBar',
                        'valueField',
                        'visible',
                        'width',
                        'argumentType',
                        'minSegmentSize',
                        'smallValuesGrouping',
                        'closed'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxiSeriesComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxiSeriesComponent;
}(DxiChartSeries));
export { DxiSeriesComponent };
var DxiSeriesModule = (function () {
    function DxiSeriesModule() {
    }
    DxiSeriesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiSeriesComponent
                    ],
                    exports: [
                        DxiSeriesComponent
                    ],
                },] },
    ];
    return DxiSeriesModule;
}());
export { DxiSeriesModule };
//# sourceMappingURL=series-dxi.js.map