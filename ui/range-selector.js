"use strict";
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
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_2 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var range_selector_1 = require("devextreme/viz/range_selector");
var validator_1 = require("./validator");
var forms_1 = require("@angular/forms");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var background_1 = require("./nested/background");
var image_1 = require("./nested/image");
var behavior_1 = require("./nested/behavior");
var chart_1 = require("./nested/chart");
var common_series_settings_1 = require("./nested/common-series-settings");
var aggregation_1 = require("./nested/aggregation");
var area_1 = require("./nested/area");
var border_1 = require("./nested/border");
var hover_style_1 = require("./nested/hover-style");
var hatching_1 = require("./nested/hatching");
var label_1 = require("./nested/label");
var connector_1 = require("./nested/connector");
var point_1 = require("./nested/point");
var height_1 = require("./nested/height");
var url_1 = require("./nested/url");
var width_1 = require("./nested/width");
var selection_style_1 = require("./nested/selection-style");
var reduction_1 = require("./nested/reduction");
var value_error_bar_1 = require("./nested/value-error-bar");
var bar_1 = require("./nested/bar");
var bubble_1 = require("./nested/bubble");
var candlestick_1 = require("./nested/candlestick");
var fullstackedarea_1 = require("./nested/fullstackedarea");
var fullstackedbar_1 = require("./nested/fullstackedbar");
var fullstackedline_1 = require("./nested/fullstackedline");
var fullstackedspline_1 = require("./nested/fullstackedspline");
var fullstackedsplinearea_1 = require("./nested/fullstackedsplinearea");
var argument_format_1 = require("./nested/argument-format");
var font_1 = require("./nested/font");
var format_1 = require("./nested/format");
var line_1 = require("./nested/line");
var rangearea_1 = require("./nested/rangearea");
var rangebar_1 = require("./nested/rangebar");
var scatter_1 = require("./nested/scatter");
var spline_1 = require("./nested/spline");
var splinearea_1 = require("./nested/splinearea");
var stackedarea_1 = require("./nested/stackedarea");
var stackedbar_1 = require("./nested/stackedbar");
var stackedline_1 = require("./nested/stackedline");
var stackedspline_1 = require("./nested/stackedspline");
var stackedsplinearea_1 = require("./nested/stackedsplinearea");
var steparea_1 = require("./nested/steparea");
var stepline_1 = require("./nested/stepline");
var stock_1 = require("./nested/stock");
var data_prepare_settings_1 = require("./nested/data-prepare-settings");
var series_dxi_1 = require("./nested/series-dxi");
var series_template_1 = require("./nested/series-template");
var value_axis_1 = require("./nested/value-axis");
var export_1 = require("./nested/export");
var indent_1 = require("./nested/indent");
var loading_indicator_1 = require("./nested/loading-indicator");
var margin_1 = require("./nested/margin");
var scale_1 = require("./nested/scale");
var aggregation_interval_1 = require("./nested/aggregation-interval");
var break_dxi_1 = require("./nested/break-dxi");
var break_style_1 = require("./nested/break-style");
var marker_1 = require("./nested/marker");
var max_range_1 = require("./nested/max-range");
var minor_tick_1 = require("./nested/minor-tick");
var minor_tick_interval_1 = require("./nested/minor-tick-interval");
var min_range_1 = require("./nested/min-range");
var tick_1 = require("./nested/tick");
var tick_interval_1 = require("./nested/tick-interval");
var shutter_1 = require("./nested/shutter");
var size_1 = require("./nested/size");
var slider_handle_1 = require("./nested/slider-handle");
var slider_marker_1 = require("./nested/slider-marker");
var title_1 = require("./nested/title");
var subtitle_1 = require("./nested/subtitle");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxRangeSelectorComponent; }),
    multi: true
};
/**
 * The RangeSelector is a widget that allows a user to select a range of values on a scale.
 */
var DxRangeSelectorComponent = (function (_super) {
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
        get: /**
             * Specifies the options for the range selector's background.
             */
        function () {
            return this._getOption('background');
        },
        set: function (value) {
            this._setOption('background', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "behavior", {
        get: /**
             * Specifies the RangeSelector's behavior options.
             */
        function () {
            return this._getOption('behavior');
        },
        set: function (value) {
            this._setOption('behavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "chart", {
        get: /**
             * Specifies the options required to display a chart as the range selector's background.
             */
        function () {
            return this._getOption('chart');
        },
        set: function (value) {
            this._setOption('chart', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "containerBackgroundColor", {
        get: /**
             * Specifies the color of the parent page element.
             */
        function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "dataSource", {
        get: /**
             * Specifies a data source for the scale values and for the chart at the background.
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "dataSourceField", {
        get: /**
             * Specifies the data source field that provides data for the scale.
             */
        function () {
            return this._getOption('dataSourceField');
        },
        set: function (value) {
            this._setOption('dataSourceField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "disabled", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "export", {
        get: /**
             * Configures the exporting and printing features.
             */
        function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "indent", {
        get: /**
             * Range selector's indent options.
             */
        function () {
            return this._getOption('indent');
        },
        set: function (value) {
            this._setOption('indent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "loadingIndicator", {
        get: /**
             * Configures the loading indicator.
             */
        function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "margin", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "redrawOnResize", {
        get: /**
             * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
             */
        function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "scale", {
        get: /**
             * Specifies options of the range selector's scale.
             */
        function () {
            return this._getOption('scale');
        },
        set: function (value) {
            this._setOption('scale', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "selectedRangeColor", {
        get: /**
             * Specifies the color of the selected range.
             */
        function () {
            return this._getOption('selectedRangeColor');
        },
        set: function (value) {
            this._setOption('selectedRangeColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "selectedRangeUpdateMode", {
        get: /**
             * Specifies how the selected range should behave when data is updated. Applies only when the RangeSelector is bound to a data source.
             */
        function () {
            return this._getOption('selectedRangeUpdateMode');
        },
        set: function (value) {
            this._setOption('selectedRangeUpdateMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "shutter", {
        get: /**
             * Specifies range selector shutter options.
             */
        function () {
            return this._getOption('shutter');
        },
        set: function (value) {
            this._setOption('shutter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "size", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "sliderHandle", {
        get: /**
             * Specifies the appearance of the range selector's slider handles.
             */
        function () {
            return this._getOption('sliderHandle');
        },
        set: function (value) {
            this._setOption('sliderHandle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "sliderMarker", {
        get: /**
             * Defines the options of the range selector slider markers.
             */
        function () {
            return this._getOption('sliderMarker');
        },
        set: function (value) {
            this._setOption('sliderMarker', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "theme", {
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
    Object.defineProperty(DxRangeSelectorComponent.prototype, "title", {
        get: /**
             * Configures the widget's title.
             */
        function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "value", {
        get: /**
             * The selected range (initial or current). Equals the entire scale when not set.
             */
        function () {
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
        return new range_selector_1.default(element, options);
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
    DxRangeSelectorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-range-selector',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxRangeSelectorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxRangeSelectorComponent.propDecorators = {
        "validator": [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        "background": [{ type: core_1.Input },],
        "behavior": [{ type: core_1.Input },],
        "chart": [{ type: core_1.Input },],
        "containerBackgroundColor": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "dataSourceField": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "export": [{ type: core_1.Input },],
        "indent": [{ type: core_1.Input },],
        "loadingIndicator": [{ type: core_1.Input },],
        "margin": [{ type: core_1.Input },],
        "pathModified": [{ type: core_1.Input },],
        "redrawOnResize": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "scale": [{ type: core_1.Input },],
        "selectedRangeColor": [{ type: core_1.Input },],
        "selectedRangeUpdateMode": [{ type: core_1.Input },],
        "shutter": [{ type: core_1.Input },],
        "size": [{ type: core_1.Input },],
        "sliderHandle": [{ type: core_1.Input },],
        "sliderMarker": [{ type: core_1.Input },],
        "theme": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "value": [{ type: core_1.Input },],
        "onDisposing": [{ type: core_1.Output },],
        "onDrawn": [{ type: core_1.Output },],
        "onExported": [{ type: core_1.Output },],
        "onExporting": [{ type: core_1.Output },],
        "onFileSaving": [{ type: core_1.Output },],
        "onIncidentOccurred": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onValueChanged": [{ type: core_1.Output },],
        "backgroundChange": [{ type: core_1.Output },],
        "behaviorChange": [{ type: core_1.Output },],
        "chartChange": [{ type: core_1.Output },],
        "containerBackgroundColorChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "dataSourceFieldChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "exportChange": [{ type: core_1.Output },],
        "indentChange": [{ type: core_1.Output },],
        "loadingIndicatorChange": [{ type: core_1.Output },],
        "marginChange": [{ type: core_1.Output },],
        "pathModifiedChange": [{ type: core_1.Output },],
        "redrawOnResizeChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "scaleChange": [{ type: core_1.Output },],
        "selectedRangeColorChange": [{ type: core_1.Output },],
        "selectedRangeUpdateModeChange": [{ type: core_1.Output },],
        "shutterChange": [{ type: core_1.Output },],
        "sizeChange": [{ type: core_1.Output },],
        "sliderHandleChange": [{ type: core_1.Output },],
        "sliderMarkerChange": [{ type: core_1.Output },],
        "themeChange": [{ type: core_1.Output },],
        "titleChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
        "onBlur": [{ type: core_1.Output },],
        "change": [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxRangeSelectorComponent;
}(component_1.DxComponent));
exports.DxRangeSelectorComponent = DxRangeSelectorComponent;
var DxRangeSelectorModule = (function () {
    function DxRangeSelectorModule() {
    }
    DxRangeSelectorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        background_1.DxoBackgroundModule,
                        image_1.DxoImageModule,
                        behavior_1.DxoBehaviorModule,
                        chart_1.DxoChartModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        aggregation_1.DxoAggregationModule,
                        area_1.DxoAreaModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        label_1.DxoLabelModule,
                        connector_1.DxoConnectorModule,
                        point_1.DxoPointModule,
                        height_1.DxoHeightModule,
                        url_1.DxoUrlModule,
                        width_1.DxoWidthModule,
                        selection_style_1.DxoSelectionStyleModule,
                        reduction_1.DxoReductionModule,
                        value_error_bar_1.DxoValueErrorBarModule,
                        bar_1.DxoBarModule,
                        bubble_1.DxoBubbleModule,
                        candlestick_1.DxoCandlestickModule,
                        fullstackedarea_1.DxoFullstackedareaModule,
                        fullstackedbar_1.DxoFullstackedbarModule,
                        fullstackedline_1.DxoFullstackedlineModule,
                        fullstackedspline_1.DxoFullstackedsplineModule,
                        fullstackedsplinearea_1.DxoFullstackedsplineareaModule,
                        argument_format_1.DxoArgumentFormatModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        line_1.DxoLineModule,
                        rangearea_1.DxoRangeareaModule,
                        rangebar_1.DxoRangebarModule,
                        scatter_1.DxoScatterModule,
                        spline_1.DxoSplineModule,
                        splinearea_1.DxoSplineareaModule,
                        stackedarea_1.DxoStackedareaModule,
                        stackedbar_1.DxoStackedbarModule,
                        stackedline_1.DxoStackedlineModule,
                        stackedspline_1.DxoStackedsplineModule,
                        stackedsplinearea_1.DxoStackedsplineareaModule,
                        steparea_1.DxoStepareaModule,
                        stepline_1.DxoSteplineModule,
                        stock_1.DxoStockModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        value_axis_1.DxoValueAxisModule,
                        export_1.DxoExportModule,
                        indent_1.DxoIndentModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        margin_1.DxoMarginModule,
                        scale_1.DxoScaleModule,
                        aggregation_interval_1.DxoAggregationIntervalModule,
                        break_dxi_1.DxiBreakModule,
                        break_style_1.DxoBreakStyleModule,
                        marker_1.DxoMarkerModule,
                        max_range_1.DxoMaxRangeModule,
                        minor_tick_1.DxoMinorTickModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        min_range_1.DxoMinRangeModule,
                        tick_1.DxoTickModule,
                        tick_interval_1.DxoTickIntervalModule,
                        shutter_1.DxoShutterModule,
                        size_1.DxoSizeModule,
                        slider_handle_1.DxoSliderHandleModule,
                        slider_marker_1.DxoSliderMarkerModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxRangeSelectorComponent
                    ],
                    exports: [
                        DxRangeSelectorComponent,
                        background_1.DxoBackgroundModule,
                        image_1.DxoImageModule,
                        behavior_1.DxoBehaviorModule,
                        chart_1.DxoChartModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        aggregation_1.DxoAggregationModule,
                        area_1.DxoAreaModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        label_1.DxoLabelModule,
                        connector_1.DxoConnectorModule,
                        point_1.DxoPointModule,
                        height_1.DxoHeightModule,
                        url_1.DxoUrlModule,
                        width_1.DxoWidthModule,
                        selection_style_1.DxoSelectionStyleModule,
                        reduction_1.DxoReductionModule,
                        value_error_bar_1.DxoValueErrorBarModule,
                        bar_1.DxoBarModule,
                        bubble_1.DxoBubbleModule,
                        candlestick_1.DxoCandlestickModule,
                        fullstackedarea_1.DxoFullstackedareaModule,
                        fullstackedbar_1.DxoFullstackedbarModule,
                        fullstackedline_1.DxoFullstackedlineModule,
                        fullstackedspline_1.DxoFullstackedsplineModule,
                        fullstackedsplinearea_1.DxoFullstackedsplineareaModule,
                        argument_format_1.DxoArgumentFormatModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        line_1.DxoLineModule,
                        rangearea_1.DxoRangeareaModule,
                        rangebar_1.DxoRangebarModule,
                        scatter_1.DxoScatterModule,
                        spline_1.DxoSplineModule,
                        splinearea_1.DxoSplineareaModule,
                        stackedarea_1.DxoStackedareaModule,
                        stackedbar_1.DxoStackedbarModule,
                        stackedline_1.DxoStackedlineModule,
                        stackedspline_1.DxoStackedsplineModule,
                        stackedsplinearea_1.DxoStackedsplineareaModule,
                        steparea_1.DxoStepareaModule,
                        stepline_1.DxoSteplineModule,
                        stock_1.DxoStockModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        value_axis_1.DxoValueAxisModule,
                        export_1.DxoExportModule,
                        indent_1.DxoIndentModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        margin_1.DxoMarginModule,
                        scale_1.DxoScaleModule,
                        aggregation_interval_1.DxoAggregationIntervalModule,
                        break_dxi_1.DxiBreakModule,
                        break_style_1.DxoBreakStyleModule,
                        marker_1.DxoMarkerModule,
                        max_range_1.DxoMaxRangeModule,
                        minor_tick_1.DxoMinorTickModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        min_range_1.DxoMinRangeModule,
                        tick_1.DxoTickModule,
                        tick_interval_1.DxoTickIntervalModule,
                        shutter_1.DxoShutterModule,
                        size_1.DxoSizeModule,
                        slider_handle_1.DxoSliderHandleModule,
                        slider_marker_1.DxoSliderMarkerModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxRangeSelectorModule;
}());
exports.DxRangeSelectorModule = DxRangeSelectorModule;
//# sourceMappingURL=range-selector.js.map