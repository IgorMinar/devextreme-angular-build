import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxLinearGauge from 'devextreme/viz/linear_gauge';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoAnimationModule, DxoExportModule, DxoGeometryModule, DxoLoadingIndicatorModule, DxoFontModule, DxoMarginModule, DxoRangeContainerModule, DxiRangeModule, DxoWidthModule, DxoScaleModule, DxoLabelModule, DxoFormatModule, DxoMinorTickModule, DxoTickModule, DxoSizeModule, DxoSubvalueIndicatorModule, DxoTextModule, DxoTitleModule, DxoSubtitleModule, DxoTooltipModule, DxoBorderModule, DxoShadowModule, DxoValueIndicatorModule } from 'devextreme-angular/ui/nested';

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
 * The LinearGauge is a widget that indicates values on a linear numeric scale.
 */
var DxLinearGaugeComponent = /** @class */ (function (_super) {
    __extends(DxLinearGaugeComponent, _super);
    function DxLinearGaugeComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { emit: 'containerBackgroundColorChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'geometryChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'rangeContainerChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scaleChange' },
            { emit: 'sizeChange' },
            { emit: 'subvalueIndicatorChange' },
            { emit: 'subvaluesChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'valueChange' },
            { emit: 'valueIndicatorChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxLinearGaugeComponent.prototype, "animation", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "containerBackgroundColor", {
        /**
         * Specifies the color of the parent page element.
         */
        get: function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "disabled", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "export", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "geometry", {
        /**
         * Specifies the options required to set the geometry of the LinearGauge widget.
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "margin", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "rangeContainer", {
        /**
         * Specifies gauge range container options.
         */
        get: function () {
            return this._getOption('rangeContainer');
        },
        set: function (value) {
            this._setOption('rangeContainer', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "scale", {
        /**
         * Specifies the gauge's scale options.
         */
        get: function () {
            return this._getOption('scale');
        },
        set: function (value) {
            this._setOption('scale', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "size", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "subvalueIndicator", {
        /**
         * Specifies the appearance options of subvalue indicators.
         */
        get: function () {
            return this._getOption('subvalueIndicator');
        },
        set: function (value) {
            this._setOption('subvalueIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "subvalues", {
        /**
         * Specifies a set of subvalues to be designated by the subvalue indicators.
         */
        get: function () {
            return this._getOption('subvalues');
        },
        set: function (value) {
            this._setOption('subvalues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "theme", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "title", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxLinearGaugeComponent.prototype, "value", {
        /**
         * Specifies the main value on a gauge.
         */
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "valueIndicator", {
        /**
         * Specifies the appearance options of the value indicator.
         */
        get: function () {
            return this._getOption('valueIndicator');
        },
        set: function (value) {
            this._setOption('valueIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLinearGaugeComponent.prototype._createInstance = function (element, options) {
        return new DxLinearGauge(element, options);
    };
    DxLinearGaugeComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxLinearGaugeComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('subvalues', changes);
    };
    DxLinearGaugeComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxLinearGaugeComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('subvalues');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxLinearGaugeComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxLinearGaugeComponent.ctorParameters = function () { return [
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
    ], DxLinearGaugeComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "containerBackgroundColor", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "export", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "geometry", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "loadingIndicator", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "margin", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "pathModified", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "rangeContainer", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "redrawOnResize", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "scale", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "size", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "subvalueIndicator", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "subvalues", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "title", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxLinearGaugeComponent.prototype, "valueIndicator", null);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "onDrawn", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "containerBackgroundColorChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "exportChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "geometryChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "marginChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "rangeContainerChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "scaleChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "sizeChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "subvalueIndicatorChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "subvaluesChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "themeChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "titleChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "tooltipChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxLinearGaugeComponent.prototype, "valueIndicatorChange", void 0);
    DxLinearGaugeComponent = __decorate([
        Component({
            selector: 'dx-linear-gauge',
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
    ], DxLinearGaugeComponent);
    return DxLinearGaugeComponent;
}(DxComponent));
var DxLinearGaugeModule = /** @class */ (function () {
    function DxLinearGaugeModule() {
    }
    DxLinearGaugeModule = __decorate([
        NgModule({
            imports: [
                DxoAnimationModule,
                DxoExportModule,
                DxoGeometryModule,
                DxoLoadingIndicatorModule,
                DxoFontModule,
                DxoMarginModule,
                DxoRangeContainerModule,
                DxiRangeModule,
                DxoWidthModule,
                DxoScaleModule,
                DxoLabelModule,
                DxoFormatModule,
                DxoMinorTickModule,
                DxoTickModule,
                DxoSizeModule,
                DxoSubvalueIndicatorModule,
                DxoTextModule,
                DxoTitleModule,
                DxoSubtitleModule,
                DxoTooltipModule,
                DxoBorderModule,
                DxoShadowModule,
                DxoValueIndicatorModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxLinearGaugeComponent
            ],
            exports: [
                DxLinearGaugeComponent,
                DxoAnimationModule,
                DxoExportModule,
                DxoGeometryModule,
                DxoLoadingIndicatorModule,
                DxoFontModule,
                DxoMarginModule,
                DxoRangeContainerModule,
                DxiRangeModule,
                DxoWidthModule,
                DxoScaleModule,
                DxoLabelModule,
                DxoFormatModule,
                DxoMinorTickModule,
                DxoTickModule,
                DxoSizeModule,
                DxoSubvalueIndicatorModule,
                DxoTextModule,
                DxoTitleModule,
                DxoSubtitleModule,
                DxoTooltipModule,
                DxoBorderModule,
                DxoShadowModule,
                DxoValueIndicatorModule,
                DxTemplateModule
            ]
        })
    ], DxLinearGaugeModule);
    return DxLinearGaugeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxLinearGaugeComponent, DxLinearGaugeModule };
//# sourceMappingURL=devextreme-angular-ui-linear-gauge.js.map
