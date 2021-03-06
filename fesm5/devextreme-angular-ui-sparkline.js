import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxSparkline from 'devextreme/viz/sparkline';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoMarginModule, DxoSizeModule, DxoTooltipModule, DxoBorderModule, DxoFontModule, DxoFormatModule, DxoShadowModule } from 'devextreme-angular/ui/nested';

/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
/**
 * The Sparkline widget is a compact chart that contains only one series. Owing to their size, sparklines occupy very little space and can be easily collected in a table or embedded straight in text.
 */
var DxSparklineComponent = /** @class */ (function (_super) {
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
        /**
         * Specifies the data source field that provides arguments for a sparkline.
         */
        get: function () {
            return this._getOption('argumentField');
        },
        set: function (value) {
            this._setOption('argumentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "barNegativeColor", {
        /**
         * Sets a color for the bars indicating negative values. Available for a sparkline of the bar type only.
         */
        get: function () {
            return this._getOption('barNegativeColor');
        },
        set: function (value) {
            this._setOption('barNegativeColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "barPositiveColor", {
        /**
         * Sets a color for the bars indicating positive values. Available for a sparkline of the bar type only.
         */
        get: function () {
            return this._getOption('barPositiveColor');
        },
        set: function (value) {
            this._setOption('barPositiveColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "dataSource", {
        /**
         * Binds the widget to data.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to the user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "firstLastColor", {
        /**
         * Sets a color for the boundary of both the first and last points on a sparkline.
         */
        get: function () {
            return this._getOption('firstLastColor');
        },
        set: function (value) {
            this._setOption('firstLastColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "ignoreEmptyPoints", {
        /**
         * Specifies whether the sparkline should ignore null data points.
         */
        get: function () {
            return this._getOption('ignoreEmptyPoints');
        },
        set: function (value) {
            this._setOption('ignoreEmptyPoints', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lineColor", {
        /**
         * Sets a color for a line on a sparkline. Available for the sparklines of the line- and area-like types.
         */
        get: function () {
            return this._getOption('lineColor');
        },
        set: function (value) {
            this._setOption('lineColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lineWidth", {
        /**
         * Specifies a width for a line on a sparkline. Available for the sparklines of the line- and area-like types.
         */
        get: function () {
            return this._getOption('lineWidth');
        },
        set: function (value) {
            this._setOption('lineWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lossColor", {
        /**
         * Sets a color for the bars indicating the values that are less than the winloss threshold. Available for a sparkline of the winloss type only.
         */
        get: function () {
            return this._getOption('lossColor');
        },
        set: function (value) {
            this._setOption('lossColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "margin", {
        /**
         * Generates space around the widget.
         */
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "maxColor", {
        /**
         * Sets a color for the boundary of the maximum point on a sparkline.
         */
        get: function () {
            return this._getOption('maxColor');
        },
        set: function (value) {
            this._setOption('maxColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "maxValue", {
        /**
         * Specifies the maximum value of the sparkline's value axis.
         */
        get: function () {
            return this._getOption('maxValue');
        },
        set: function (value) {
            this._setOption('maxValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "minColor", {
        /**
         * Sets a color for the boundary of the minimum point on a sparkline.
         */
        get: function () {
            return this._getOption('minColor');
        },
        set: function (value) {
            this._setOption('minColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "minValue", {
        /**
         * Specifies the minimum value of the sparkline value axis.
         */
        get: function () {
            return this._getOption('minValue');
        },
        set: function (value) {
            this._setOption('minValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pathModified", {
        /**
         * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
         */
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointColor", {
        /**
         * Sets a color for points on a sparkline. Available for the sparklines of the line- and area-like types.
         */
        get: function () {
            return this._getOption('pointColor');
        },
        set: function (value) {
            this._setOption('pointColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointSize", {
        /**
         * Specifies the diameter of sparkline points in pixels. Available for the sparklines of line- and area-like types.
         */
        get: function () {
            return this._getOption('pointSize');
        },
        set: function (value) {
            this._setOption('pointSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointSymbol", {
        /**
         * Specifies a symbol to use as a point marker on a sparkline. Available for the sparklines of the line- and area-like types.
         */
        get: function () {
            return this._getOption('pointSymbol');
        },
        set: function (value) {
            this._setOption('pointSymbol', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "showFirstLast", {
        /**
         * Specifies whether or not to indicate both the first and last values on a sparkline.
         */
        get: function () {
            return this._getOption('showFirstLast');
        },
        set: function (value) {
            this._setOption('showFirstLast', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "showMinMax", {
        /**
         * Specifies whether or not to indicate both the minimum and maximum values on a sparkline.
         */
        get: function () {
            return this._getOption('showMinMax');
        },
        set: function (value) {
            this._setOption('showMinMax', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "size", {
        /**
         * Specifies the widget's size in pixels.
         */
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "theme", {
        /**
         * Sets the name of the theme the widget uses.
         */
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "tooltip", {
        /**
         * Configures the tooltip.
         */
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "type", {
        /**
         * Determines the type of a sparkline.
         */
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "valueField", {
        /**
         * Specifies the data source field that provides values for a sparkline.
         */
        get: function () {
            return this._getOption('valueField');
        },
        set: function (value) {
            this._setOption('valueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "winColor", {
        /**
         * Sets a color for the bars indicating the values greater than a winloss threshold. Available for a sparkline of the winloss type only.
         */
        get: function () {
            return this._getOption('winColor');
        },
        set: function (value) {
            this._setOption('winColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "winlossThreshold", {
        /**
         * Specifies a value that serves as a threshold for the sparkline of the winloss type.
         */
        get: function () {
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
    DxSparklineComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: IterableDifferHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "argumentField", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "barNegativeColor", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "barPositiveColor", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "firstLastColor", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "ignoreEmptyPoints", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "lineColor", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "lineWidth", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "lossColor", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "margin", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "maxColor", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "maxValue", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "minColor", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "minValue", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "pathModified", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "pointColor", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "pointSize", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "pointSymbol", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "showFirstLast", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "showMinMax", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "size", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "type", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "valueField", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "winColor", null);
    __decorate([
        Input()
    ], DxSparklineComponent.prototype, "winlossThreshold", null);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "onDrawn", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "argumentFieldChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "barNegativeColorChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "barPositiveColorChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "firstLastColorChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "ignoreEmptyPointsChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "lineColorChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "lineWidthChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "lossColorChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "marginChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "maxColorChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "maxValueChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "minColorChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "minValueChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "pointColorChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "pointSizeChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "pointSymbolChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "showFirstLastChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "showMinMaxChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "sizeChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "themeChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "tooltipChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "typeChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "valueFieldChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "winColorChange", void 0);
    __decorate([
        Output()
    ], DxSparklineComponent.prototype, "winlossThresholdChange", void 0);
    DxSparklineComponent = __decorate([
        Component({
            selector: 'dx-sparkline',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ],
            styles: [' :host {  display: block; }']
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxSparklineComponent);
    return DxSparklineComponent;
}(DxComponent));
var DxSparklineModule = /** @class */ (function () {
    function DxSparklineModule() {
    }
    DxSparklineModule = __decorate([
        NgModule({
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
        })
    ], DxSparklineModule);
    return DxSparklineModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxSparklineComponent, DxSparklineModule };
//# sourceMappingURL=devextreme-angular-ui-sparkline.js.map
