import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxRangeSelector from 'devextreme/viz/range_selector';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoBackgroundModule, DxoImageModule, DxoBehaviorModule, DxoChartModule, DxoCommonSeriesSettingsModule, DxoAggregationModule, DxoAreaModule, DxoBorderModule, DxoHoverStyleModule, DxoHatchingModule, DxoLabelModule, DxoConnectorModule, DxoPointModule, DxoHeightModule, DxoUrlModule, DxoWidthModule, DxoSelectionStyleModule, DxoReductionModule, DxoValueErrorBarModule, DxoBarModule, DxoBubbleModule, DxoCandlestickModule, DxoFullstackedareaModule, DxoFullstackedbarModule, DxoFullstackedlineModule, DxoFullstackedsplineModule, DxoFullstackedsplineareaModule, DxoArgumentFormatModule, DxoFontModule, DxoFormatModule, DxoLineModule, DxoRangeareaModule, DxoRangebarModule, DxoScatterModule, DxoSplineModule, DxoSplineareaModule, DxoStackedareaModule, DxoStackedbarModule, DxoStackedlineModule, DxoStackedsplineModule, DxoStackedsplineareaModule, DxoStepareaModule, DxoSteplineModule, DxoStockModule, DxoDataPrepareSettingsModule, DxiSeriesModule, DxoSeriesTemplateModule, DxoValueAxisModule, DxoExportModule, DxoIndentModule, DxoLoadingIndicatorModule, DxoMarginModule, DxoScaleModule, DxoAggregationIntervalModule, DxiBreakModule, DxoBreakStyleModule, DxoMarkerModule, DxoMaxRangeModule, DxoMinorTickModule, DxoMinorTickIntervalModule, DxoMinRangeModule, DxoTickModule, DxoTickIntervalModule, DxoShutterModule, DxoSizeModule, DxoSliderHandleModule, DxoSliderMarkerModule, DxoTitleModule, DxoSubtitleModule } from 'devextreme-angular/ui/nested';

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
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxRangeSelectorComponent; }),
    multi: true
};
/**
 * The RangeSelector is a widget that allows a user to select a range of values on a scale.
 */
var DxRangeSelectorComponent = /** @class */ (function (_super) {
    __extends(DxRangeSelectorComponent, _super);
    function DxRangeSelectorComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'backgroundChange' },
            { emit: 'behaviorChange' },
            { emit: 'chartChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dataSourceFieldChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'indentChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scaleChange' },
            { emit: 'selectedRangeColorChange' },
            { emit: 'selectedRangeUpdateModeChange' },
            { emit: 'shutterChange' },
            { emit: 'sizeChange' },
            { emit: 'sliderHandleChange' },
            { emit: 'sliderMarkerChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'valueChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxRangeSelectorComponent.prototype, "background", {
        /**
         * Specifies the options for the range selector's background.
         */
        get: function () {
            return this._getOption('background');
        },
        set: function (value) {
            this._setOption('background', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "behavior", {
        /**
         * Specifies the RangeSelector's behavior options.
         */
        get: function () {
            return this._getOption('behavior');
        },
        set: function (value) {
            this._setOption('behavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "chart", {
        /**
         * Specifies the options required to display a chart as the range selector's background.
         */
        get: function () {
            return this._getOption('chart');
        },
        set: function (value) {
            this._setOption('chart', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "containerBackgroundColor", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "dataSource", {
        /**
         * Specifies a data source for the scale values and for the chart at the background.
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "dataSourceField", {
        /**
         * Specifies the data source field that provides data for the scale.
         */
        get: function () {
            return this._getOption('dataSourceField');
        },
        set: function (value) {
            this._setOption('dataSourceField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "disabled", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "export", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "indent", {
        /**
         * Range selector's indent options.
         */
        get: function () {
            return this._getOption('indent');
        },
        set: function (value) {
            this._setOption('indent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "margin", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "scale", {
        /**
         * Specifies options of the range selector's scale.
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "selectedRangeColor", {
        /**
         * Specifies the color of the selected range.
         */
        get: function () {
            return this._getOption('selectedRangeColor');
        },
        set: function (value) {
            this._setOption('selectedRangeColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "selectedRangeUpdateMode", {
        /**
         * Specifies how the selected range should behave when data is updated. Applies only when the RangeSelector is bound to a data source.
         */
        get: function () {
            return this._getOption('selectedRangeUpdateMode');
        },
        set: function (value) {
            this._setOption('selectedRangeUpdateMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "shutter", {
        /**
         * Specifies range selector shutter options.
         */
        get: function () {
            return this._getOption('shutter');
        },
        set: function (value) {
            this._setOption('shutter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "size", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "sliderHandle", {
        /**
         * Specifies the appearance of the range selector's slider handles.
         */
        get: function () {
            return this._getOption('sliderHandle');
        },
        set: function (value) {
            this._setOption('sliderHandle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "sliderMarker", {
        /**
         * Defines the options of the range selector slider markers.
         */
        get: function () {
            return this._getOption('sliderMarker');
        },
        set: function (value) {
            this._setOption('sliderMarker', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "theme", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "title", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "value", {
        /**
         * The selected range (initial or current). Equals the entire scale when not set.
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
    DxRangeSelectorComponent.prototype.change = function (_) { };
    DxRangeSelectorComponent.prototype._createInstance = function (element, options) {
        return new DxRangeSelector(element, options);
    };
    DxRangeSelectorComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxRangeSelectorComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxRangeSelectorComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxRangeSelectorComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxRangeSelectorComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxRangeSelectorComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('value', changes);
    };
    DxRangeSelectorComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxRangeSelectorComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('value');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxRangeSelectorComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxRangeSelectorComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxRangeSelectorComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxRangeSelectorComponent.ctorParameters = function () { return [
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
        ContentChild(DxValidatorComponent)
    ], DxRangeSelectorComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "background", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "behavior", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "chart", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "containerBackgroundColor", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "dataSourceField", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "export", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "indent", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "loadingIndicator", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "margin", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "pathModified", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "redrawOnResize", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "scale", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "selectedRangeColor", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "selectedRangeUpdateMode", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "shutter", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "size", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "sliderHandle", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "sliderMarker", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "title", null);
    __decorate([
        Input()
    ], DxRangeSelectorComponent.prototype, "value", null);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "onDrawn", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "backgroundChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "behaviorChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "chartChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "containerBackgroundColorChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "dataSourceFieldChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "exportChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "indentChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "marginChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "scaleChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "selectedRangeColorChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "selectedRangeUpdateModeChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "shutterChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "sizeChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "sliderHandleChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "sliderMarkerChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "themeChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "titleChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxRangeSelectorComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxRangeSelectorComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxRangeSelectorComponent.prototype, "touched", void 0);
    DxRangeSelectorComponent = __decorate([
        Component({
            selector: 'dx-range-selector',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                CUSTOM_VALUE_ACCESSOR_PROVIDER,
                NestedOptionHost,
                IterableDifferHelper
            ],
            styles: [' :host {  display: block; }']
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxRangeSelectorComponent);
    return DxRangeSelectorComponent;
}(DxComponent));
var DxRangeSelectorModule = /** @class */ (function () {
    function DxRangeSelectorModule() {
    }
    DxRangeSelectorModule = __decorate([
        NgModule({
            imports: [
                DxoBackgroundModule,
                DxoImageModule,
                DxoBehaviorModule,
                DxoChartModule,
                DxoCommonSeriesSettingsModule,
                DxoAggregationModule,
                DxoAreaModule,
                DxoBorderModule,
                DxoHoverStyleModule,
                DxoHatchingModule,
                DxoLabelModule,
                DxoConnectorModule,
                DxoPointModule,
                DxoHeightModule,
                DxoUrlModule,
                DxoWidthModule,
                DxoSelectionStyleModule,
                DxoReductionModule,
                DxoValueErrorBarModule,
                DxoBarModule,
                DxoBubbleModule,
                DxoCandlestickModule,
                DxoFullstackedareaModule,
                DxoFullstackedbarModule,
                DxoFullstackedlineModule,
                DxoFullstackedsplineModule,
                DxoFullstackedsplineareaModule,
                DxoArgumentFormatModule,
                DxoFontModule,
                DxoFormatModule,
                DxoLineModule,
                DxoRangeareaModule,
                DxoRangebarModule,
                DxoScatterModule,
                DxoSplineModule,
                DxoSplineareaModule,
                DxoStackedareaModule,
                DxoStackedbarModule,
                DxoStackedlineModule,
                DxoStackedsplineModule,
                DxoStackedsplineareaModule,
                DxoStepareaModule,
                DxoSteplineModule,
                DxoStockModule,
                DxoDataPrepareSettingsModule,
                DxiSeriesModule,
                DxoSeriesTemplateModule,
                DxoValueAxisModule,
                DxoExportModule,
                DxoIndentModule,
                DxoLoadingIndicatorModule,
                DxoMarginModule,
                DxoScaleModule,
                DxoAggregationIntervalModule,
                DxiBreakModule,
                DxoBreakStyleModule,
                DxoMarkerModule,
                DxoMaxRangeModule,
                DxoMinorTickModule,
                DxoMinorTickIntervalModule,
                DxoMinRangeModule,
                DxoTickModule,
                DxoTickIntervalModule,
                DxoShutterModule,
                DxoSizeModule,
                DxoSliderHandleModule,
                DxoSliderMarkerModule,
                DxoTitleModule,
                DxoSubtitleModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxRangeSelectorComponent
            ],
            exports: [
                DxRangeSelectorComponent,
                DxoBackgroundModule,
                DxoImageModule,
                DxoBehaviorModule,
                DxoChartModule,
                DxoCommonSeriesSettingsModule,
                DxoAggregationModule,
                DxoAreaModule,
                DxoBorderModule,
                DxoHoverStyleModule,
                DxoHatchingModule,
                DxoLabelModule,
                DxoConnectorModule,
                DxoPointModule,
                DxoHeightModule,
                DxoUrlModule,
                DxoWidthModule,
                DxoSelectionStyleModule,
                DxoReductionModule,
                DxoValueErrorBarModule,
                DxoBarModule,
                DxoBubbleModule,
                DxoCandlestickModule,
                DxoFullstackedareaModule,
                DxoFullstackedbarModule,
                DxoFullstackedlineModule,
                DxoFullstackedsplineModule,
                DxoFullstackedsplineareaModule,
                DxoArgumentFormatModule,
                DxoFontModule,
                DxoFormatModule,
                DxoLineModule,
                DxoRangeareaModule,
                DxoRangebarModule,
                DxoScatterModule,
                DxoSplineModule,
                DxoSplineareaModule,
                DxoStackedareaModule,
                DxoStackedbarModule,
                DxoStackedlineModule,
                DxoStackedsplineModule,
                DxoStackedsplineareaModule,
                DxoStepareaModule,
                DxoSteplineModule,
                DxoStockModule,
                DxoDataPrepareSettingsModule,
                DxiSeriesModule,
                DxoSeriesTemplateModule,
                DxoValueAxisModule,
                DxoExportModule,
                DxoIndentModule,
                DxoLoadingIndicatorModule,
                DxoMarginModule,
                DxoScaleModule,
                DxoAggregationIntervalModule,
                DxiBreakModule,
                DxoBreakStyleModule,
                DxoMarkerModule,
                DxoMaxRangeModule,
                DxoMinorTickModule,
                DxoMinorTickIntervalModule,
                DxoMinRangeModule,
                DxoTickModule,
                DxoTickIntervalModule,
                DxoShutterModule,
                DxoSizeModule,
                DxoSliderHandleModule,
                DxoSliderMarkerModule,
                DxoTitleModule,
                DxoSubtitleModule,
                DxTemplateModule
            ]
        })
    ], DxRangeSelectorModule);
    return DxRangeSelectorModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxRangeSelectorComponent, DxRangeSelectorModule };
//# sourceMappingURL=devextreme-angular-ui-range-selector.js.map
