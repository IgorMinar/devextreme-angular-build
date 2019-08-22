/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter } from '@angular/core';
import DxBarGauge from 'devextreme/viz/bar_gauge';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoAnimationModule } from './nested/animation';
import { DxoExportModule } from './nested/export';
import { DxoGeometryModule } from './nested/geometry';
import { DxoLabelModule } from './nested/label';
import { DxoFontModule } from './nested/font';
import { DxoFormatModule } from './nested/format';
import { DxoLegendModule } from './nested/legend';
import { DxoBorderModule } from './nested/border';
import { DxoItemTextFormatModule } from './nested/item-text-format';
import { DxoMarginModule } from './nested/margin';
import { DxoTitleModule } from './nested/title';
import { DxoSubtitleModule } from './nested/subtitle';
import { DxoLoadingIndicatorModule } from './nested/loading-indicator';
import { DxoSizeModule } from './nested/size';
import { DxoTooltipModule } from './nested/tooltip';
import { DxoShadowModule } from './nested/shadow';
/**
 * The BarGauge widget contains several circular bars that each indicates a single value.
 */
var DxBarGaugeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxBarGaugeComponent, _super);
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "animation", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxBarGaugeComponent.prototype, "backgroundColor", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxBarGaugeComponent.prototype, "barSpacing", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxBarGaugeComponent.prototype, "baseValue", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxBarGaugeComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "elementAttr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxBarGaugeComponent.prototype, "endValue", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "export", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "geometry", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "label", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "legend", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "loadingIndicator", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "margin", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "palette", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxBarGaugeComponent.prototype, "paletteExtensionMode", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxBarGaugeComponent.prototype, "pathModified", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxBarGaugeComponent.prototype, "redrawOnResize", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxBarGaugeComponent.prototype, "relativeInnerRadius", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxBarGaugeComponent.prototype, "resolveLabelOverlapping", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxBarGaugeComponent.prototype, "rtlEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "size", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxBarGaugeComponent.prototype, "startValue", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxBarGaugeComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "title", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxBarGaugeComponent.prototype, "tooltip", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], DxBarGaugeComponent.prototype, "values", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "onDisposing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "onDrawn", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "onExported", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "onExporting", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "onFileSaving", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "onIncidentOccurred", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "onInitialized", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "onOptionChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "onTooltipHidden", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "onTooltipShown", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "animationChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "backgroundColorChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "barSpacingChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "baseValueChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "disabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "elementAttrChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "endValueChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "exportChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "geometryChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "labelChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "legendChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "loadingIndicatorChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "marginChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "paletteChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "paletteExtensionModeChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "pathModifiedChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "redrawOnResizeChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "relativeInnerRadiusChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "resolveLabelOverlappingChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "rtlEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "sizeChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "startValueChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "themeChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "titleChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "tooltipChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxBarGaugeComponent.prototype, "valuesChange", void 0);
    DxBarGaugeComponent = tslib_1.__decorate([
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
        tslib_1.__param(7, Inject(PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
            WatcherHelper,
            IterableDifferHelper, NestedOptionHost,
            TransferState, Object])
    ], DxBarGaugeComponent);
    return DxBarGaugeComponent;
}(DxComponent));
export { DxBarGaugeComponent };
var DxBarGaugeModule = /** @class */ (function () {
    function DxBarGaugeModule() {
    }
    DxBarGaugeModule = tslib_1.__decorate([
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
export { DxBarGaugeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWdhdWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvYmFyLWdhdWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFZcEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFJZixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLFVBQVUsTUFBTSwwQkFBMEIsQ0FBQztBQUdsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxl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ZTtnQkFDZixtQkFBbUI7Z0JBQ25CLGdCQUFnQjtnQkFDaEIsMEJBQTBCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLG1CQUFtQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxtQkFBbUI7Z0JBQ25CLGtCQUFrQjtnQkFDbEIsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2QsYUFBYTtnQkFDYixlQUFlO2dCQUNmLGVBQWU7Z0JBQ2YsZUFBZTtnQkFDZix1QkFBdUI7Z0JBQ3ZCLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxpQkFBaUI7Z0JBQ2pCLHlCQUF5QjtnQkFDekIsYUFBYTtnQkFDYixnQkFBZ0I7Z0JBQ2hCLGVBQWU7Z0JBQ2YsZ0JBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4QmFyR2F1Z2UgZnJvbSAnZGV2ZXh0cmVtZS92aXovYmFyX2dhdWdlJztcclxuXHJcblxyXG5pbXBvcnQgeyBEeENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBEeEludGVncmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9pbnRlZ3JhdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IFdhdGNoZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL3dhdGNoZXItaGVscGVyJztcclxuaW1wb3J0IHsgSXRlcmFibGVEaWZmZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL2l0ZXJhYmxlLWRpZmZlci1oZWxwZXInO1xyXG5cclxuaW1wb3J0IHsgRHhvQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgRHhvRXhwb3J0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZXhwb3J0JztcclxuaW1wb3J0IHsgRHhvR2VvbWV0cnlNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9nZW9tZXRyeSc7XHJcbmltcG9ydCB7IER4b0xhYmVsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbGFiZWwnO1xyXG5pbXBvcnQgeyBEeG9Gb250TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9udCc7XHJcbmltcG9ydCB7IER4b0Zvcm1hdE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Zvcm1hdCc7XHJcbmltcG9ydCB7IER4b0xlZ2VuZE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2xlZ2VuZCc7XHJcbmltcG9ydCB7IER4b0JvcmRlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2JvcmRlcic7XHJcbmltcG9ydCB7IER4b0l0ZW1UZXh0Rm9ybWF0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaXRlbS10ZXh0LWZvcm1hdCc7XHJcbmltcG9ydCB7IER4b01hcmdpbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL21hcmdpbic7XHJcbmltcG9ydCB7IER4b1RpdGxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdGl0bGUnO1xyXG5pbXBvcnQgeyBEeG9TdWJ0aXRsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N1YnRpdGxlJztcclxuaW1wb3J0IHsgRHhvTG9hZGluZ0luZGljYXRvck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2xvYWRpbmctaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgRHhvU2l6ZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NpemUnO1xyXG5pbXBvcnQgeyBEeG9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdG9vbHRpcCc7XHJcbmltcG9ydCB7IER4b1NoYWRvd01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NoYWRvdyc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBCYXJHYXVnZSB3aWRnZXQgY29udGFpbnMgc2V2ZXJhbCBjaXJjdWxhciBiYXJzIHRoYXQgZWFjaCBpbmRpY2F0ZXMgYSBzaW5nbGUgdmFsdWUuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHgtYmFyLWdhdWdlJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWyAnIDpob3N0IHsgIGRpc3BsYXk6IGJsb2NrOyB9J10sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4QmFyR2F1Z2VDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeEJhckdhdWdlO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhbmltYXRpb24gb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbmltYXRpb24oKTogeyBkdXJhdGlvbj86IG51bWJlciwgZWFzaW5nPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbmltYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBhbmltYXRpb24odmFsdWU6IHsgZHVyYXRpb24/OiBudW1iZXIsIGVhc2luZz86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYW5pbWF0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGNvbG9yIGZvciB0aGUgcmVtYWluaW5nIHNlZ21lbnQgb2YgdGhlIGJhcidzIHRyYWNrLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhY2tncm91bmRDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JhY2tncm91bmRDb2xvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYWNrZ3JvdW5kQ29sb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgZGlzdGFuY2UgYmV0d2VlbiBiYXJzIGluIHBpeGVscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBiYXJTcGFjaW5nKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFyU3BhY2luZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhclNwYWNpbmcodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmFyU3BhY2luZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBiYXNlIHZhbHVlIGZvciBiYXJzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhc2VWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Jhc2VWYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhc2VWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXNlVmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB0aGUgdXNlciBpbnRlcmFjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNhYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGFuIGVuZCB2YWx1ZSBmb3IgdGhlIGdhdWdlJ3MgaW52aXNpYmxlIHNjYWxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVuZFZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5kVmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBlbmRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbmRWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBleHBvcnRpbmcgYW5kIHByaW50aW5nIGZlYXR1cmVzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGV4cG9ydCgpOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBmb3JtYXRzPzogQXJyYXk8c3RyaW5nPiwgbWFyZ2luPzogbnVtYmVyLCBwcmludGluZ0VuYWJsZWQ/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdleHBvcnQnKTtcclxuICAgIH1cclxuICAgIHNldCBleHBvcnQodmFsdWU6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGZvcm1hdHM/OiBBcnJheTxzdHJpbmc+LCBtYXJnaW4/OiBudW1iZXIsIHByaW50aW5nRW5hYmxlZD86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2V4cG9ydCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgZ2F1Z2UncyBhcmMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ2VvbWV0cnkoKTogeyBlbmRBbmdsZT86IG51bWJlciwgc3RhcnRBbmdsZT86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdnZW9tZXRyeScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdlb21ldHJ5KHZhbHVlOiB7IGVuZEFuZ2xlPzogbnVtYmVyLCBzdGFydEFuZ2xlPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dlb21ldHJ5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgb3B0aW9ucyBvZiB0aGUgbGFiZWxzIHRoYXQgYWNjb21wYW55IGdhdWdlIGJhcnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGFiZWwoKTogeyBjb25uZWN0b3JDb2xvcj86IHN0cmluZywgY29ubmVjdG9yV2lkdGg/OiBudW1iZXIsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xhYmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGFiZWwodmFsdWU6IHsgY29ubmVjdG9yQ29sb3I/OiBzdHJpbmcsIGNvbm5lY3RvcldpZHRoPzogbnVtYmVyLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW5kZW50PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsYWJlbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBsZWdlbmQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGVnZW5kKCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbHVtbkNvdW50PzogbnVtYmVyLCBjb2x1bW5JdGVtU3BhY2luZz86IG51bWJlciwgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVJdGVtcz86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBpdGVtc0FsaWdubWVudD86IHN0cmluZywgaXRlbVRleHRGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaXRlbVRleHRQb3NpdGlvbj86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgbWFya2VyU2l6ZT86IG51bWJlciwgb3JpZW50YXRpb24/OiBzdHJpbmcsIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHJvd0NvdW50PzogbnVtYmVyLCByb3dJdGVtU3BhY2luZz86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsZWdlbmQnKTtcclxuICAgIH1cclxuICAgIHNldCBsZWdlbmQodmFsdWU6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbHVtbkNvdW50PzogbnVtYmVyLCBjb2x1bW5JdGVtU3BhY2luZz86IG51bWJlciwgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVJdGVtcz86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBpdGVtc0FsaWdubWVudD86IHN0cmluZywgaXRlbVRleHRGb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaXRlbVRleHRQb3NpdGlvbj86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgbWFya2VyU2l6ZT86IG51bWJlciwgb3JpZW50YXRpb24/OiBzdHJpbmcsIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHJvd0NvdW50PzogbnVtYmVyLCByb3dJdGVtU3BhY2luZz86IG51bWJlciwgdGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsZWdlbmQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgbG9hZGluZyBpbmRpY2F0b3IuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9hZGluZ0luZGljYXRvcigpOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvYWRpbmdJbmRpY2F0b3InKTtcclxuICAgIH1cclxuICAgIHNldCBsb2FkaW5nSW5kaWNhdG9yKHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvYWRpbmdJbmRpY2F0b3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIHNwYWNlIGFyb3VuZCB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1hcmdpbigpOiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXJnaW4nKTtcclxuICAgIH1cclxuICAgIHNldCBtYXJnaW4odmFsdWU6IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21hcmdpbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBwYWxldHRlIHRvIGJlIHVzZWQgZm9yIGNvbG9yaXppbmcgYmFycyBpbiB0aGUgZ2F1Z2UuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGFsZXR0ZSgpOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYWxldHRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFsZXR0ZSh2YWx1ZTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFsZXR0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hhdCB0byBkbyB3aXRoIGNvbG9ycyBpbiB0aGUgcGFsZXR0ZSB3aGVuIHRoZWlyIG51bWJlciBpcyBsZXNzIHRoYW4gdGhlIG51bWJlciBvZiBiYXJzIGluIHRoZSBnYXVnZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWxldHRlRXh0ZW5zaW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbGV0dGVFeHRlbnNpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFsZXR0ZUV4dGVuc2lvbk1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFsZXR0ZUV4dGVuc2lvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhlIHdpZGdldCB0aGF0IGl0IGlzIGVtYmVkZGVkIGludG8gYW4gSFRNTCBwYWdlIHRoYXQgdXNlcyBhIHRhZyBtb2RpZnlpbmcgdGhlIHBhdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGF0aE1vZGlmaWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhdGhNb2RpZmllZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhdGhNb2RpZmllZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGF0aE1vZGlmaWVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJlZHJhdyB0aGUgd2lkZ2V0IHdoZW4gdGhlIHNpemUgb2YgdGhlIHBhcmVudCBicm93c2VyIHdpbmRvdyBjaGFuZ2VzIG9yIGEgbW9iaWxlIGRldmljZSByb3RhdGVzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlZHJhd09uUmVzaXplKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlZHJhd09uUmVzaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVkcmF3T25SZXNpemUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlZHJhd09uUmVzaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIHJhZGl1cyBvZiB0aGUgYmFyIHRoYXQgaXMgY2xvc2VzdCB0byB0aGUgY2VudGVyIHJlbGF0aXZlbHkgdG8gdGhlIHJhZGl1cyBvZiB0aGUgdG9wbW9zdCBiYXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVsYXRpdmVJbm5lclJhZGl1cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlbGF0aXZlSW5uZXJSYWRpdXMnKTtcclxuICAgIH1cclxuICAgIHNldCByZWxhdGl2ZUlubmVyUmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlbGF0aXZlSW5uZXJSYWRpdXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgd2lkZ2V0IHNob3VsZCBiZWhhdmUgd2hlbiBiYXIgbGFiZWxzIG92ZXJsYXA6IGhpZGUgY2VydGFpbiBsYWJlbHMgb3IgbGVhdmUgdGhlbSBvdmVybGFwcGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlc29sdmVMYWJlbE92ZXJsYXBwaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVzb2x2ZUxhYmVsT3ZlcmxhcHBpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCByZXNvbHZlTGFiZWxPdmVybGFwcGluZyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZXNvbHZlTGFiZWxPdmVybGFwcGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2hlcyB0aGUgd2lkZ2V0IHRvIGEgcmlnaHQtdG8tbGVmdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBydGxFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J0bEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBydGxFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydGxFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgc2l6ZSBpbiBwaXhlbHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2l6ZSgpOiB7IGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNpemUodmFsdWU6IHsgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIHN0YXJ0IHZhbHVlIGZvciB0aGUgZ2F1Z2UncyBpbnZpc2libGUgc2NhbGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhcnRWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YXJ0VmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFydFZhbHVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YXJ0VmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgbmFtZSBvZiB0aGUgdGhlbWUgdGhlIHdpZGdldCB1c2VzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRoZW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGhlbWUnKTtcclxuICAgIH1cclxuICAgIHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0aGVtZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSB3aWRnZXQncyB0aXRsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aXRsZSgpOiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RpdGxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGl0bGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0b29sdGlwcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0b29sdGlwKCk6IHsgYXJyb3dMZW5ndGg/OiBudW1iZXIsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBjb250YWluZXI/OiBFbGVtZW50IHwgSlF1ZXJ5LCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGN1c3RvbWl6ZVRvb2x0aXA/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc2hhZG93PzogeyBibHVyPzogbnVtYmVyLCBjb2xvcj86IHN0cmluZywgb2Zmc2V0WD86IG51bWJlciwgb2Zmc2V0WT86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciB9LCB6SW5kZXg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG9vbHRpcCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvb2x0aXAodmFsdWU6IHsgYXJyb3dMZW5ndGg/OiBudW1iZXIsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBjb250YWluZXI/OiBFbGVtZW50IHwgSlF1ZXJ5LCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGN1c3RvbWl6ZVRvb2x0aXA/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc2hhZG93PzogeyBibHVyPzogbnVtYmVyLCBjb2xvcj86IHN0cmluZywgb2Zmc2V0WD86IG51bWJlciwgb2Zmc2V0WT86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciB9LCB6SW5kZXg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndG9vbHRpcCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGFycmF5IG9mIHZhbHVlcyB0byBiZSBpbmRpY2F0ZWQgb24gYSBiYXIgZ2F1Z2UuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsdWVzKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlcyh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIHJlbmRlcmluZyBoYXMgZmluaXNoZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRyYXduOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgd2lkZ2V0IGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZXhwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkV4cG9ydGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgZmlsZSB3aXRoIGV4cG9ydGVkIHdpZGdldCBpcyBzYXZlZCB0byB0aGUgdXNlcidzIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZpbGVTYXZpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gZXJyb3Igb3Igd2FybmluZyBvY2N1cnMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluY2lkZW50T2NjdXJyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHRvb2x0aXAgYmVjb21lcyBoaWRkZW4uXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblRvb2x0aXBIaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB0b29sdGlwIGFwcGVhcnMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblRvb2x0aXBTaG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhbmltYXRpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbmltYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGR1cmF0aW9uPzogbnVtYmVyLCBlYXNpbmc/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYmFja2dyb3VuZENvbG9yQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYmFja2dyb3VuZENvbG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGJhclNwYWNpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBiYXJTcGFjaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGJhc2VWYWx1ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGJhc2VWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVuZFZhbHVlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZW5kVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZXhwb3J0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZXhwb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgZm9ybWF0cz86IEFycmF5PHN0cmluZz4sIG1hcmdpbj86IG51bWJlciwgcHJpbnRpbmdFbmFibGVkPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBnZW9tZXRyeUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGdlb21ldHJ5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBlbmRBbmdsZT86IG51bWJlciwgc3RhcnRBbmdsZT86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGxhYmVsQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbGFiZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGNvbm5lY3RvckNvbG9yPzogc3RyaW5nLCBjb25uZWN0b3JXaWR0aD86IG51bWJlciwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsZWdlbmRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBsZWdlbmRDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgY29ybmVyUmFkaXVzPzogbnVtYmVyLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2x1bW5Db3VudD86IG51bWJlciwgY29sdW1uSXRlbVNwYWNpbmc/OiBudW1iZXIsIGN1c3RvbWl6ZUhpbnQ/OiBGdW5jdGlvbiwgY3VzdG9taXplSXRlbXM/OiBGdW5jdGlvbiwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgaXRlbXNBbGlnbm1lbnQ/OiBzdHJpbmcsIGl0ZW1UZXh0Rm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGl0ZW1UZXh0UG9zaXRpb24/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIG1hcmtlclNpemU/OiBudW1iZXIsIG9yaWVudGF0aW9uPzogc3RyaW5nLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCByb3dDb3VudD86IG51bWJlciwgcm93SXRlbVNwYWNpbmc/OiBudW1iZXIsIHRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsb2FkaW5nSW5kaWNhdG9yQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbG9hZGluZ0luZGljYXRvckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgc2hvdz86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXJnaW5DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXJnaW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBhbGV0dGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYWxldHRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgQXJyYXk8c3RyaW5nPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYWxldHRlRXh0ZW5zaW9uTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBhbGV0dGVFeHRlbnNpb25Nb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBhdGhNb2RpZmllZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBhdGhNb2RpZmllZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVkcmF3T25SZXNpemVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZWRyYXdPblJlc2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVsYXRpdmVJbm5lclJhZGl1c0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlbGF0aXZlSW5uZXJSYWRpdXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVzb2x2ZUxhYmVsT3ZlcmxhcHBpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZXNvbHZlTGFiZWxPdmVybGFwcGluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBydGxFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcnRsRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2l6ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzdGFydFZhbHVlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3RhcnRWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0aGVtZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRoZW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRpdGxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGl0bGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdG9vbHRpcENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFycm93TGVuZ3RoPzogbnVtYmVyLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgY29udGFpbmVyPzogRWxlbWVudCB8IEpRdWVyeSwgY29ybmVyUmFkaXVzPzogbnVtYmVyLCBjdXN0b21pemVUb29sdGlwPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHNoYWRvdz86IHsgYmx1cj86IG51bWJlciwgY29sb3I/OiBzdHJpbmcsIG9mZnNldFg/OiBudW1iZXIsIG9mZnNldFk/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIgfSwgekluZGV4PzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsdWVzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8bnVtYmVyPj47XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZGlzcG9zaW5nJywgZW1pdDogJ29uRGlzcG9zaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2RyYXduJywgZW1pdDogJ29uRHJhd24nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZXhwb3J0ZWQnLCBlbWl0OiAnb25FeHBvcnRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRpbmcnLCBlbWl0OiAnb25FeHBvcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZmlsZVNhdmluZycsIGVtaXQ6ICdvbkZpbGVTYXZpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5jaWRlbnRPY2N1cnJlZCcsIGVtaXQ6ICdvbkluY2lkZW50T2NjdXJyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Jbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd0b29sdGlwSGlkZGVuJywgZW1pdDogJ29uVG9vbHRpcEhpZGRlbicgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd0b29sdGlwU2hvd24nLCBlbWl0OiAnb25Ub29sdGlwU2hvd24nIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FuaW1hdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYmFja2dyb3VuZENvbG9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdiYXJTcGFjaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdiYXNlVmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc2FibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlbGVtZW50QXR0ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZW5kVmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2V4cG9ydENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ2VvbWV0cnlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2xhYmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdsZWdlbmRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2xvYWRpbmdJbmRpY2F0b3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21hcmdpbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGFsZXR0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGFsZXR0ZUV4dGVuc2lvbk1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BhdGhNb2RpZmllZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVkcmF3T25SZXNpemVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlbGF0aXZlSW5uZXJSYWRpdXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Jlc29sdmVMYWJlbE92ZXJsYXBwaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaXplQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdGFydFZhbHVlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0aGVtZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGl0bGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Rvb2x0aXBDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlc0NoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pZGguc2V0SG9zdCh0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEeEJhckdhdWdlKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3BhbGV0dGUnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygndmFsdWVzJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygncGFsZXR0ZScpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCd2YWx1ZXMnKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhvQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgRHhvRXhwb3J0TW9kdWxlLFxyXG4gICAgRHhvR2VvbWV0cnlNb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4b0ZvbnRNb2R1bGUsXHJcbiAgICBEeG9Gb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9MZWdlbmRNb2R1bGUsXHJcbiAgICBEeG9Cb3JkZXJNb2R1bGUsXHJcbiAgICBEeG9JdGVtVGV4dEZvcm1hdE1vZHVsZSxcclxuICAgIER4b01hcmdpbk1vZHVsZSxcclxuICAgIER4b1RpdGxlTW9kdWxlLFxyXG4gICAgRHhvU3VidGl0bGVNb2R1bGUsXHJcbiAgICBEeG9Mb2FkaW5nSW5kaWNhdG9yTW9kdWxlLFxyXG4gICAgRHhvU2l6ZU1vZHVsZSxcclxuICAgIER4b1Rvb2x0aXBNb2R1bGUsXHJcbiAgICBEeG9TaGFkb3dNb2R1bGUsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4QmFyR2F1Z2VDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4QmFyR2F1Z2VDb21wb25lbnQsXHJcbiAgICBEeG9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9FeHBvcnRNb2R1bGUsXHJcbiAgICBEeG9HZW9tZXRyeU1vZHVsZSxcclxuICAgIER4b0xhYmVsTW9kdWxlLFxyXG4gICAgRHhvRm9udE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b0xlZ2VuZE1vZHVsZSxcclxuICAgIER4b0JvcmRlck1vZHVsZSxcclxuICAgIER4b0l0ZW1UZXh0Rm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvTWFyZ2luTW9kdWxlLFxyXG4gICAgRHhvVGl0bGVNb2R1bGUsXHJcbiAgICBEeG9TdWJ0aXRsZU1vZHVsZSxcclxuICAgIER4b0xvYWRpbmdJbmRpY2F0b3JNb2R1bGUsXHJcbiAgICBEeG9TaXplTW9kdWxlLFxyXG4gICAgRHhvVG9vbHRpcE1vZHVsZSxcclxuICAgIER4b1NoYWRvd01vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeEJhckdhdWdlTW9kdWxlIHsgfVxyXG4iXX0=