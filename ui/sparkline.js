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
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter } from '@angular/core';
import DxSparkline from 'devextreme/viz/sparkline';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoMarginModule } from './nested/margin';
import { DxoSizeModule } from './nested/size';
import { DxoTooltipModule } from './nested/tooltip';
import { DxoBorderModule } from './nested/border';
import { DxoFontModule } from './nested/font';
import { DxoFormatModule } from './nested/format';
import { DxoShadowModule } from './nested/shadow';
/**
 * The Sparkline widget is a compact chart that contains only one series. Owing to their size, sparklines occupy very little space and can be easily collected in a table or embedded straight in text.
 */
var DxSparklineComponent = (function (_super) {
    __extends(DxSparklineComponent, _super);
    function DxSparklineComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'argumentFieldChange' },
            { emit: 'barNegativeColorChange' },
            { emit: 'barPositiveColorChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'firstLastColorChange' },
            { emit: 'ignoreEmptyPointsChange' },
            { emit: 'lineColorChange' },
            { emit: 'lineWidthChange' },
            { emit: 'lossColorChange' },
            { emit: 'marginChange' },
            { emit: 'maxColorChange' },
            { emit: 'maxValueChange' },
            { emit: 'minColorChange' },
            { emit: 'minValueChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'pointColorChange' },
            { emit: 'pointSizeChange' },
            { emit: 'pointSymbolChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showFirstLastChange' },
            { emit: 'showMinMaxChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'tooltipChange' },
            { emit: 'typeChange' },
            { emit: 'valueFieldChange' },
            { emit: 'winColorChange' },
            { emit: 'winlossThresholdChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxSparklineComponent.prototype, "argumentField", {
        get: /**
             * Specifies the data source field that provides arguments for a sparkline.
             */
        function () {
            return this._getOption('argumentField');
        },
        set: function (value) {
            this._setOption('argumentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "barNegativeColor", {
        get: /**
             * Sets a color for the bars indicating negative values. Available for a sparkline of the bar type only.
             */
        function () {
            return this._getOption('barNegativeColor');
        },
        set: function (value) {
            this._setOption('barNegativeColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "barPositiveColor", {
        get: /**
             * Sets a color for the bars indicating positive values. Available for a sparkline of the bar type only.
             */
        function () {
            return this._getOption('barPositiveColor');
        },
        set: function (value) {
            this._setOption('barPositiveColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "dataSource", {
        get: /**
             * Binds the widget to data.
             */
        function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to the user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "firstLastColor", {
        get: /**
             * Sets a color for the boundary of both the first and last points on a sparkline.
             */
        function () {
            return this._getOption('firstLastColor');
        },
        set: function (value) {
            this._setOption('firstLastColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "ignoreEmptyPoints", {
        get: /**
             * Specifies whether the sparkline should ignore null data points.
             */
        function () {
            return this._getOption('ignoreEmptyPoints');
        },
        set: function (value) {
            this._setOption('ignoreEmptyPoints', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lineColor", {
        get: /**
             * Sets a color for a line on a sparkline. Available for the sparklines of the line- and area-like types.
             */
        function () {
            return this._getOption('lineColor');
        },
        set: function (value) {
            this._setOption('lineColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lineWidth", {
        get: /**
             * Specifies a width for a line on a sparkline. Available for the sparklines of the line- and area-like types.
             */
        function () {
            return this._getOption('lineWidth');
        },
        set: function (value) {
            this._setOption('lineWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lossColor", {
        get: /**
             * Sets a color for the bars indicating the values that are less than the winloss threshold. Available for a sparkline of the winloss type only.
             */
        function () {
            return this._getOption('lossColor');
        },
        set: function (value) {
            this._setOption('lossColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "margin", {
        get: /**
             * Generates space around the widget.
             */
        function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "maxColor", {
        get: /**
             * Sets a color for the boundary of the maximum point on a sparkline.
             */
        function () {
            return this._getOption('maxColor');
        },
        set: function (value) {
            this._setOption('maxColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "maxValue", {
        get: /**
             * Specifies the maximum value of the sparkline's value axis.
             */
        function () {
            return this._getOption('maxValue');
        },
        set: function (value) {
            this._setOption('maxValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "minColor", {
        get: /**
             * Sets a color for the boundary of the minimum point on a sparkline.
             */
        function () {
            return this._getOption('minColor');
        },
        set: function (value) {
            this._setOption('minColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "minValue", {
        get: /**
             * Specifies the minimum value of the sparkline value axis.
             */
        function () {
            return this._getOption('minValue');
        },
        set: function (value) {
            this._setOption('minValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pathModified", {
        get: /**
             * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
             */
        function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointColor", {
        get: /**
             * Sets a color for points on a sparkline. Available for the sparklines of the line- and area-like types.
             */
        function () {
            return this._getOption('pointColor');
        },
        set: function (value) {
            this._setOption('pointColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointSize", {
        get: /**
             * Specifies the diameter of sparkline points in pixels. Available for the sparklines of line- and area-like types.
             */
        function () {
            return this._getOption('pointSize');
        },
        set: function (value) {
            this._setOption('pointSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointSymbol", {
        get: /**
             * Specifies a symbol to use as a point marker on a sparkline. Available for the sparklines of the line- and area-like types.
             */
        function () {
            return this._getOption('pointSymbol');
        },
        set: function (value) {
            this._setOption('pointSymbol', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "showFirstLast", {
        get: /**
             * Specifies whether or not to indicate both the first and last values on a sparkline.
             */
        function () {
            return this._getOption('showFirstLast');
        },
        set: function (value) {
            this._setOption('showFirstLast', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "showMinMax", {
        get: /**
             * Specifies whether or not to indicate both the minimum and maximum values on a sparkline.
             */
        function () {
            return this._getOption('showMinMax');
        },
        set: function (value) {
            this._setOption('showMinMax', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "size", {
        get: /**
             * Specifies the widget's size in pixels.
             */
        function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "theme", {
        get: /**
             * Sets the name of the theme the widget uses.
             */
        function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "tooltip", {
        get: /**
             * Configures the tooltip.
             */
        function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "type", {
        get: /**
             * Determines the type of a sparkline.
             */
        function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "valueField", {
        get: /**
             * Specifies the data source field that provides values for a sparkline.
             */
        function () {
            return this._getOption('valueField');
        },
        set: function (value) {
            this._setOption('valueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "winColor", {
        get: /**
             * Sets a color for the bars indicating the values greater than a winloss threshold. Available for a sparkline of the winloss type only.
             */
        function () {
            return this._getOption('winColor');
        },
        set: function (value) {
            this._setOption('winColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "winlossThreshold", {
        get: /**
             * Specifies a value that serves as a threshold for the sparkline of the winloss type.
             */
        function () {
            return this._getOption('winlossThreshold');
        },
        set: function (value) {
            this._setOption('winlossThreshold', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSparklineComponent.prototype._createInstance = function (element, options) {
        return new DxSparkline(element, options);
    };
    DxSparklineComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSparklineComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
    };
    DxSparklineComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxSparklineComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxSparklineComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxSparklineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-sparkline',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxSparklineComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxSparklineComponent.propDecorators = {
        "argumentField": [{ type: Input },],
        "barNegativeColor": [{ type: Input },],
        "barPositiveColor": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "firstLastColor": [{ type: Input },],
        "ignoreEmptyPoints": [{ type: Input },],
        "lineColor": [{ type: Input },],
        "lineWidth": [{ type: Input },],
        "lossColor": [{ type: Input },],
        "margin": [{ type: Input },],
        "maxColor": [{ type: Input },],
        "maxValue": [{ type: Input },],
        "minColor": [{ type: Input },],
        "minValue": [{ type: Input },],
        "pathModified": [{ type: Input },],
        "pointColor": [{ type: Input },],
        "pointSize": [{ type: Input },],
        "pointSymbol": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "showFirstLast": [{ type: Input },],
        "showMinMax": [{ type: Input },],
        "size": [{ type: Input },],
        "theme": [{ type: Input },],
        "tooltip": [{ type: Input },],
        "type": [{ type: Input },],
        "valueField": [{ type: Input },],
        "winColor": [{ type: Input },],
        "winlossThreshold": [{ type: Input },],
        "onDisposing": [{ type: Output },],
        "onDrawn": [{ type: Output },],
        "onExported": [{ type: Output },],
        "onExporting": [{ type: Output },],
        "onFileSaving": [{ type: Output },],
        "onIncidentOccurred": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onTooltipHidden": [{ type: Output },],
        "onTooltipShown": [{ type: Output },],
        "argumentFieldChange": [{ type: Output },],
        "barNegativeColorChange": [{ type: Output },],
        "barPositiveColorChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "firstLastColorChange": [{ type: Output },],
        "ignoreEmptyPointsChange": [{ type: Output },],
        "lineColorChange": [{ type: Output },],
        "lineWidthChange": [{ type: Output },],
        "lossColorChange": [{ type: Output },],
        "marginChange": [{ type: Output },],
        "maxColorChange": [{ type: Output },],
        "maxValueChange": [{ type: Output },],
        "minColorChange": [{ type: Output },],
        "minValueChange": [{ type: Output },],
        "pathModifiedChange": [{ type: Output },],
        "pointColorChange": [{ type: Output },],
        "pointSizeChange": [{ type: Output },],
        "pointSymbolChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "showFirstLastChange": [{ type: Output },],
        "showMinMaxChange": [{ type: Output },],
        "sizeChange": [{ type: Output },],
        "themeChange": [{ type: Output },],
        "tooltipChange": [{ type: Output },],
        "typeChange": [{ type: Output },],
        "valueFieldChange": [{ type: Output },],
        "winColorChange": [{ type: Output },],
        "winlossThresholdChange": [{ type: Output },],
    };
    return DxSparklineComponent;
}(DxComponent));
export { DxSparklineComponent };
var DxSparklineModule = (function () {
    function DxSparklineModule() {
    }
    DxSparklineModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        DxoMarginModule,
                        DxoSizeModule,
                        DxoTooltipModule,
                        DxoBorderModule,
                        DxoFontModule,
                        DxoFormatModule,
                        DxoShadowModule,
                        DxIntegrationModule,
                        DxTemplateModule,
                        BrowserTransferStateModule
                    ],
                    declarations: [
                        DxSparklineComponent
                    ],
                    exports: [
                        DxSparklineComponent,
                        DxoMarginModule,
                        DxoSizeModule,
                        DxoTooltipModule,
                        DxoBorderModule,
                        DxoFontModule,
                        DxoFormatModule,
                        DxoShadowModule,
                        DxTemplateModule
                    ]
                },] },
    ];
    return DxSparklineModule;
}());
export { DxSparklineModule };
//# sourceMappingURL=sparkline.js.map