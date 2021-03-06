import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxBarGauge from 'devextreme/viz/bar_gauge';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoAnimationModule, DxoExportModule, DxoGeometryModule, DxoLabelModule, DxoFontModule, DxoFormatModule, DxoLegendModule, DxoBorderModule, DxoItemTextFormatModule, DxoMarginModule, DxoTitleModule, DxoSubtitleModule, DxoLoadingIndicatorModule, DxoSizeModule, DxoTooltipModule, DxoShadowModule } from 'devextreme-angular/ui/nested';

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
 * The BarGauge widget contains several circular bars that each indicates a single value.
 */
var DxBarGaugeComponent = /** @class */ (function (_super) {
    __extends(DxBarGaugeComponent, _super);
    function DxBarGaugeComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { emit: 'animationChange' },
            { emit: 'backgroundColorChange' },
            { emit: 'barSpacingChange' },
            { emit: 'baseValueChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'endValueChange' },
            { emit: 'exportChange' },
            { emit: 'geometryChange' },
            { emit: 'labelChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'paletteChange' },
            { emit: 'paletteExtensionModeChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'relativeInnerRadiusChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'sizeChange' },
            { emit: 'startValueChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'valuesChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxBarGaugeComponent.prototype, "animation", {
        /**
         * Specifies animation options.
         */
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "backgroundColor", {
        /**
         * Specifies a color for the remaining segment of the bar's track.
         */
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "barSpacing", {
        /**
         * Specifies a distance between bars in pixels.
         */
        get: function () {
            return this._getOption('barSpacing');
        },
        set: function (value) {
            this._setOption('barSpacing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "baseValue", {
        /**
         * Specifies a base value for bars.
         */
        get: function () {
            return this._getOption('baseValue');
        },
        set: function (value) {
            this._setOption('baseValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "disabled", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "endValue", {
        /**
         * Specifies an end value for the gauge's invisible scale.
         */
        get: function () {
            return this._getOption('endValue');
        },
        set: function (value) {
            this._setOption('endValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "export", {
        /**
         * Configures the exporting and printing features.
         */
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "geometry", {
        /**
         * Defines the shape of the gauge's arc.
         */
        get: function () {
            return this._getOption('geometry');
        },
        set: function (value) {
            this._setOption('geometry', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "label", {
        /**
         * Specifies the options of the labels that accompany gauge bars.
         */
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "legend", {
        /**
         * Configures the legend.
         */
        get: function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "loadingIndicator", {
        /**
         * Configures the loading indicator.
         */
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "margin", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "palette", {
        /**
         * Sets the palette to be used for colorizing bars in the gauge.
         */
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "paletteExtensionMode", {
        /**
         * Specifies what to do with colors in the palette when their number is less than the number of bars in the gauge.
         */
        get: function () {
            return this._getOption('paletteExtensionMode');
        },
        set: function (value) {
            this._setOption('paletteExtensionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "redrawOnResize", {
        /**
         * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
         */
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "relativeInnerRadius", {
        /**
         * Defines the radius of the bar that is closest to the center relatively to the radius of the topmost bar.
         */
        get: function () {
            return this._getOption('relativeInnerRadius');
        },
        set: function (value) {
            this._setOption('relativeInnerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "resolveLabelOverlapping", {
        /**
         * Specifies how the widget should behave when bar labels overlap: hide certain labels or leave them overlapped.
         */
        get: function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "size", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "startValue", {
        /**
         * Specifies a start value for the gauge's invisible scale.
         */
        get: function () {
            return this._getOption('startValue');
        },
        set: function (value) {
            this._setOption('startValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "theme", {
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "title", {
        /**
         * Configures the widget's title.
         */
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "tooltip", {
        /**
         * Configures tooltips.
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
    Object.defineProperty(DxBarGaugeComponent.prototype, "values", {
        /**
         * Specifies the array of values to be indicated on a bar gauge.
         */
        get: function () {
            return this._getOption('values');
        },
        set: function (value) {
            this._setOption('values', value);
        },
        enumerable: true,
        configurable: true
    });
    DxBarGaugeComponent.prototype._createInstance = function (element, options) {
        return new DxBarGauge(element, options);
    };
    DxBarGaugeComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxBarGaugeComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('palette', changes);
        this.setupChanges('values', changes);
    };
    DxBarGaugeComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxBarGaugeComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('palette');
        this._idh.doCheck('values');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxBarGaugeComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxBarGaugeComponent.ctorParameters = function () { return [
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
    ], DxBarGaugeComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "backgroundColor", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "barSpacing", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "baseValue", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "endValue", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "export", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "geometry", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "label", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "legend", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "loadingIndicator", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "margin", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "palette", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "paletteExtensionMode", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "pathModified", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "redrawOnResize", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "relativeInnerRadius", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "resolveLabelOverlapping", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "size", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "startValue", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "title", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DxBarGaugeComponent.prototype, "values", null);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "onDrawn", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "backgroundColorChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "barSpacingChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "baseValueChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "endValueChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "exportChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "geometryChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "labelChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "legendChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "marginChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "paletteChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "paletteExtensionModeChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "relativeInnerRadiusChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "resolveLabelOverlappingChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "sizeChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "startValueChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "themeChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "titleChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "tooltipChange", void 0);
    __decorate([
        Output()
    ], DxBarGaugeComponent.prototype, "valuesChange", void 0);
    DxBarGaugeComponent = __decorate([
        Component({
            selector: 'dx-bar-gauge',
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
    ], DxBarGaugeComponent);
    return DxBarGaugeComponent;
}(DxComponent));
var DxBarGaugeModule = /** @class */ (function () {
    function DxBarGaugeModule() {
    }
    DxBarGaugeModule = __decorate([
        NgModule({
            imports: [
                DxoAnimationModule,
                DxoExportModule,
                DxoGeometryModule,
                DxoLabelModule,
                DxoFontModule,
                DxoFormatModule,
                DxoLegendModule,
                DxoBorderModule,
                DxoItemTextFormatModule,
                DxoMarginModule,
                DxoTitleModule,
                DxoSubtitleModule,
                DxoLoadingIndicatorModule,
                DxoSizeModule,
                DxoTooltipModule,
                DxoShadowModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxBarGaugeComponent
            ],
            exports: [
                DxBarGaugeComponent,
                DxoAnimationModule,
                DxoExportModule,
                DxoGeometryModule,
                DxoLabelModule,
                DxoFontModule,
                DxoFormatModule,
                DxoLegendModule,
                DxoBorderModule,
                DxoItemTextFormatModule,
                DxoMarginModule,
                DxoTitleModule,
                DxoSubtitleModule,
                DxoLoadingIndicatorModule,
                DxoSizeModule,
                DxoTooltipModule,
                DxoShadowModule,
                DxTemplateModule
            ]
        })
    ], DxBarGaugeModule);
    return DxBarGaugeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxBarGaugeComponent, DxBarGaugeModule };
//# sourceMappingURL=devextreme-angular-ui-bar-gauge.js.map
