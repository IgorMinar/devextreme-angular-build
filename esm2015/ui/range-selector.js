/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChild, forwardRef, HostListener } from '@angular/core';
import DxRangeSelector from 'devextreme/viz/range_selector';
import { DxValidatorComponent } from './validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoBackgroundModule } from './nested/background';
import { DxoImageModule } from './nested/image';
import { DxoBehaviorModule } from './nested/behavior';
import { DxoChartModule } from './nested/chart';
import { DxoCommonSeriesSettingsModule } from './nested/common-series-settings';
import { DxoAggregationModule } from './nested/aggregation';
import { DxoAreaModule } from './nested/area';
import { DxoBorderModule } from './nested/border';
import { DxoHoverStyleModule } from './nested/hover-style';
import { DxoHatchingModule } from './nested/hatching';
import { DxoLabelModule } from './nested/label';
import { DxoConnectorModule } from './nested/connector';
import { DxoPointModule } from './nested/point';
import { DxoHeightModule } from './nested/height';
import { DxoUrlModule } from './nested/url';
import { DxoWidthModule } from './nested/width';
import { DxoSelectionStyleModule } from './nested/selection-style';
import { DxoReductionModule } from './nested/reduction';
import { DxoValueErrorBarModule } from './nested/value-error-bar';
import { DxoBarModule } from './nested/bar';
import { DxoBubbleModule } from './nested/bubble';
import { DxoCandlestickModule } from './nested/candlestick';
import { DxoFullstackedareaModule } from './nested/fullstackedarea';
import { DxoFullstackedbarModule } from './nested/fullstackedbar';
import { DxoFullstackedlineModule } from './nested/fullstackedline';
import { DxoFullstackedsplineModule } from './nested/fullstackedspline';
import { DxoFullstackedsplineareaModule } from './nested/fullstackedsplinearea';
import { DxoArgumentFormatModule } from './nested/argument-format';
import { DxoFontModule } from './nested/font';
import { DxoFormatModule } from './nested/format';
import { DxoLineModule } from './nested/line';
import { DxoRangeareaModule } from './nested/rangearea';
import { DxoRangebarModule } from './nested/rangebar';
import { DxoScatterModule } from './nested/scatter';
import { DxoSplineModule } from './nested/spline';
import { DxoSplineareaModule } from './nested/splinearea';
import { DxoStackedareaModule } from './nested/stackedarea';
import { DxoStackedbarModule } from './nested/stackedbar';
import { DxoStackedlineModule } from './nested/stackedline';
import { DxoStackedsplineModule } from './nested/stackedspline';
import { DxoStackedsplineareaModule } from './nested/stackedsplinearea';
import { DxoStepareaModule } from './nested/steparea';
import { DxoSteplineModule } from './nested/stepline';
import { DxoStockModule } from './nested/stock';
import { DxoDataPrepareSettingsModule } from './nested/data-prepare-settings';
import { DxiSeriesModule } from './nested/series-dxi';
import { DxoSeriesTemplateModule } from './nested/series-template';
import { DxoValueAxisModule } from './nested/value-axis';
import { DxoExportModule } from './nested/export';
import { DxoIndentModule } from './nested/indent';
import { DxoLoadingIndicatorModule } from './nested/loading-indicator';
import { DxoMarginModule } from './nested/margin';
import { DxoScaleModule } from './nested/scale';
import { DxoAggregationIntervalModule } from './nested/aggregation-interval';
import { DxiBreakModule } from './nested/break-dxi';
import { DxoBreakStyleModule } from './nested/break-style';
import { DxoMarkerModule } from './nested/marker';
import { DxoMaxRangeModule } from './nested/max-range';
import { DxoMinorTickModule } from './nested/minor-tick';
import { DxoMinorTickIntervalModule } from './nested/minor-tick-interval';
import { DxoMinRangeModule } from './nested/min-range';
import { DxoTickModule } from './nested/tick';
import { DxoTickIntervalModule } from './nested/tick-interval';
import { DxoShutterModule } from './nested/shutter';
import { DxoSizeModule } from './nested/size';
import { DxoSliderHandleModule } from './nested/slider-handle';
import { DxoSliderMarkerModule } from './nested/slider-marker';
import { DxoTitleModule } from './nested/title';
import { DxoSubtitleModule } from './nested/subtitle';
const CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxRangeSelectorComponent),
    multi: true
};
/**
 * The RangeSelector is a widget that allows a user to select a range of values on a scale.
 */
let DxRangeSelectorComponent = class DxRangeSelectorComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.touched = (_) => { };
        this._createEventEmitters([
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
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the options for the range selector's background.
     */
    get background() {
        return this._getOption('background');
    }
    set background(value) {
        this._setOption('background', value);
    }
    /**
     * Specifies the RangeSelector's behavior options.
     */
    get behavior() {
        return this._getOption('behavior');
    }
    set behavior(value) {
        this._setOption('behavior', value);
    }
    /**
     * Specifies the options required to display a chart as the range selector's background.
     */
    get chart() {
        return this._getOption('chart');
    }
    set chart(value) {
        this._setOption('chart', value);
    }
    /**
     * Specifies the color of the parent page element.
     */
    get containerBackgroundColor() {
        return this._getOption('containerBackgroundColor');
    }
    set containerBackgroundColor(value) {
        this._setOption('containerBackgroundColor', value);
    }
    /**
     * Specifies a data source for the scale values and for the chart at the background.
     */
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    /**
     * Specifies the data source field that provides data for the scale.
     */
    get dataSourceField() {
        return this._getOption('dataSourceField');
    }
    set dataSourceField(value) {
        this._setOption('dataSourceField', value);
    }
    /**
     * Specifies whether the widget responds to the user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    /**
     * Configures the exporting and printing features.
     */
    get export() {
        return this._getOption('export');
    }
    set export(value) {
        this._setOption('export', value);
    }
    /**
     * Range selector's indent options.
     */
    get indent() {
        return this._getOption('indent');
    }
    set indent(value) {
        this._setOption('indent', value);
    }
    /**
     * Configures the loading indicator.
     */
    get loadingIndicator() {
        return this._getOption('loadingIndicator');
    }
    set loadingIndicator(value) {
        this._setOption('loadingIndicator', value);
    }
    /**
     * Generates space around the widget.
     */
    get margin() {
        return this._getOption('margin');
    }
    set margin(value) {
        this._setOption('margin', value);
    }
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    get pathModified() {
        return this._getOption('pathModified');
    }
    set pathModified(value) {
        this._setOption('pathModified', value);
    }
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    get redrawOnResize() {
        return this._getOption('redrawOnResize');
    }
    set redrawOnResize(value) {
        this._setOption('redrawOnResize', value);
    }
    /**
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * Specifies options of the range selector's scale.
     */
    get scale() {
        return this._getOption('scale');
    }
    set scale(value) {
        this._setOption('scale', value);
    }
    /**
     * Specifies the color of the selected range.
     */
    get selectedRangeColor() {
        return this._getOption('selectedRangeColor');
    }
    set selectedRangeColor(value) {
        this._setOption('selectedRangeColor', value);
    }
    /**
     * Specifies how the selected range should behave when data is updated. Applies only when the RangeSelector is bound to a data source.
     */
    get selectedRangeUpdateMode() {
        return this._getOption('selectedRangeUpdateMode');
    }
    set selectedRangeUpdateMode(value) {
        this._setOption('selectedRangeUpdateMode', value);
    }
    /**
     * Specifies range selector shutter options.
     */
    get shutter() {
        return this._getOption('shutter');
    }
    set shutter(value) {
        this._setOption('shutter', value);
    }
    /**
     * Specifies the widget's size in pixels.
     */
    get size() {
        return this._getOption('size');
    }
    set size(value) {
        this._setOption('size', value);
    }
    /**
     * Specifies the appearance of the range selector's slider handles.
     */
    get sliderHandle() {
        return this._getOption('sliderHandle');
    }
    set sliderHandle(value) {
        this._setOption('sliderHandle', value);
    }
    /**
     * Defines the options of the range selector slider markers.
     */
    get sliderMarker() {
        return this._getOption('sliderMarker');
    }
    set sliderMarker(value) {
        this._setOption('sliderMarker', value);
    }
    /**
     * Sets the name of the theme the widget uses.
     */
    get theme() {
        return this._getOption('theme');
    }
    set theme(value) {
        this._setOption('theme', value);
    }
    /**
     * Configures the widget's title.
     */
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    /**
     * The selected range (initial or current). Equals the entire scale when not set.
     */
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    change(_) { }
    _createInstance(element, options) {
        return new DxRangeSelector(element, options);
    }
    writeValue(value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    }
    registerOnChange(fn) { this.change = fn; }
    registerOnTouched(fn) { this.touched = fn; }
    _createWidget(element) {
        super._createWidget(element);
        this.instance.on('focusOut', (e) => {
            this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('value', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('value');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }
    _setOption(name, value) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    }
};
tslib_1.__decorate([
    ContentChild(DxValidatorComponent),
    tslib_1.__metadata("design:type", DxValidatorComponent)
], DxRangeSelectorComponent.prototype, "validator", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "background", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "behavior", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "chart", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxRangeSelectorComponent.prototype, "containerBackgroundColor", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxRangeSelectorComponent.prototype, "dataSourceField", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxRangeSelectorComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "export", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "indent", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "loadingIndicator", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "margin", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxRangeSelectorComponent.prototype, "pathModified", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxRangeSelectorComponent.prototype, "redrawOnResize", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxRangeSelectorComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "scale", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxRangeSelectorComponent.prototype, "selectedRangeColor", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxRangeSelectorComponent.prototype, "selectedRangeUpdateMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "shutter", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "size", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "sliderHandle", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "sliderMarker", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxRangeSelectorComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "title", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxRangeSelectorComponent.prototype, "value", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "onDrawn", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "onExported", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "onExporting", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "onFileSaving", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "onIncidentOccurred", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "onValueChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "backgroundChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "behaviorChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "chartChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "containerBackgroundColorChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "dataSourceChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "dataSourceFieldChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "exportChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "indentChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "loadingIndicatorChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "marginChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "pathModifiedChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "redrawOnResizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "scaleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "selectedRangeColorChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "selectedRangeUpdateModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "shutterChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "sizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "sliderHandleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "sliderMarkerChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "themeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "titleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "valueChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxRangeSelectorComponent.prototype, "onBlur", void 0);
tslib_1.__decorate([
    HostListener('valueChange', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DxRangeSelectorComponent.prototype, "change", null);
tslib_1.__decorate([
    HostListener('onBlur', ['$event']),
    tslib_1.__metadata("design:type", Object)
], DxRangeSelectorComponent.prototype, "touched", void 0);
DxRangeSelectorComponent = tslib_1.__decorate([
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
    tslib_1.__param(7, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
        WatcherHelper,
        IterableDifferHelper, NestedOptionHost,
        TransferState, Object])
], DxRangeSelectorComponent);
export { DxRangeSelectorComponent };
let DxRangeSelectorModule = class DxRangeSelectorModule {
};
DxRangeSelectorModule = tslib_1.__decorate([
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
export { DxRangeSelectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9yYW5nZS1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBWXBDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBR1osWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBSWYsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxlQUFlLE1BQU0sK0JBQStCLENBQUM7QUFFNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRW5ELE9BQU8sRUFFSCxpQkFBaUIsRUFDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JB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QixzQkFBc0I7WUFDdEIsMEJBQTBCO1lBQzFCLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsY0FBYztZQUNkLDRCQUE0QjtZQUM1QixlQUFlO1lBQ2YsdUJBQXVCO1lBQ3ZCLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixlQUFlO1lBQ2YsY0FBYztZQUNkLDRCQUE0QjtZQUM1QixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLDBCQUEwQjtZQUMxQixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixnQkFBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1cscUJBQXFCLENBQUk7U0FBekIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIE5nWm9uZSxcclxuICAgIFBMQVRGT1JNX0lELFxyXG4gICAgSW5qZWN0LFxyXG5cclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgT25Jbml0LFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENvbnRlbnRDaGlsZCxcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4UmFuZ2VTZWxlY3RvciBmcm9tICdkZXZleHRyZW1lL3Zpei9yYW5nZV9zZWxlY3Rvcic7XHJcblxyXG5pbXBvcnQgeyBEeFZhbGlkYXRvckNvbXBvbmVudCB9IGZyb20gJy4vdmFsaWRhdG9yJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb250cm9sVmFsdWVBY2Nlc3NvcixcclxuICAgIE5HX1ZBTFVFX0FDQ0VTU09SXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRHhDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVIb3N0IH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZS1ob3N0JztcclxuaW1wb3J0IHsgRHhJbnRlZ3JhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvaW50ZWdyYXRpb24nO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBXYXRjaGVySGVscGVyIH0gZnJvbSAnLi4vY29yZS93YXRjaGVyLWhlbHBlcic7XHJcbmltcG9ydCB7IEl0ZXJhYmxlRGlmZmVySGVscGVyIH0gZnJvbSAnLi4vY29yZS9pdGVyYWJsZS1kaWZmZXItaGVscGVyJztcclxuXHJcbmltcG9ydCB7IER4b0JhY2tncm91bmRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9iYWNrZ3JvdW5kJztcclxuaW1wb3J0IHsgRHhvSW1hZ2VNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9pbWFnZSc7XHJcbmltcG9ydCB7IER4b0JlaGF2aW9yTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYmVoYXZpb3InO1xyXG5pbXBvcnQgeyBEeG9DaGFydE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NoYXJ0JztcclxuaW1wb3J0IHsgRHhvQ29tbW9uU2VyaWVzU2V0dGluZ3NNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb21tb24tc2VyaWVzLXNldHRpbmdzJztcclxuaW1wb3J0IHsgRHhvQWdncmVnYXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hZ2dyZWdhdGlvbic7XHJcbmltcG9ydCB7IER4b0FyZWFNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hcmVhJztcclxuaW1wb3J0IHsgRHhvQm9yZGVyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYm9yZGVyJztcclxuaW1wb3J0IHsgRHhvSG92ZXJTdHlsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2hvdmVyLXN0eWxlJztcclxuaW1wb3J0IHsgRHhvSGF0Y2hpbmdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9oYXRjaGluZyc7XHJcbmltcG9ydCB7IER4b0xhYmVsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbGFiZWwnO1xyXG5pbXBvcnQgeyBEeG9Db25uZWN0b3JNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jb25uZWN0b3InO1xyXG5pbXBvcnQgeyBEeG9Qb2ludE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3BvaW50JztcclxuaW1wb3J0IHsgRHhvSGVpZ2h0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaGVpZ2h0JztcclxuaW1wb3J0IHsgRHhvVXJsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdXJsJztcclxuaW1wb3J0IHsgRHhvV2lkdGhNb2R1bGUgfSBmcm9tICcuL25lc3RlZC93aWR0aCc7XHJcbmltcG9ydCB7IER4b1NlbGVjdGlvblN0eWxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2VsZWN0aW9uLXN0eWxlJztcclxuaW1wb3J0IHsgRHhvUmVkdWN0aW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcmVkdWN0aW9uJztcclxuaW1wb3J0IHsgRHhvVmFsdWVFcnJvckJhck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3ZhbHVlLWVycm9yLWJhcic7XHJcbmltcG9ydCB7IER4b0Jhck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Jhcic7XHJcbmltcG9ydCB7IER4b0J1YmJsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2J1YmJsZSc7XHJcbmltcG9ydCB7IER4b0NhbmRsZXN0aWNrTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY2FuZGxlc3RpY2snO1xyXG5pbXBvcnQgeyBEeG9GdWxsc3RhY2tlZGFyZWFNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mdWxsc3RhY2tlZGFyZWEnO1xyXG5pbXBvcnQgeyBEeG9GdWxsc3RhY2tlZGJhck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Z1bGxzdGFja2VkYmFyJztcclxuaW1wb3J0IHsgRHhvRnVsbHN0YWNrZWRsaW5lTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZnVsbHN0YWNrZWRsaW5lJztcclxuaW1wb3J0IHsgRHhvRnVsbHN0YWNrZWRzcGxpbmVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mdWxsc3RhY2tlZHNwbGluZSc7XHJcbmltcG9ydCB7IER4b0Z1bGxzdGFja2Vkc3BsaW5lYXJlYU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Z1bGxzdGFja2Vkc3BsaW5lYXJlYSc7XHJcbmltcG9ydCB7IER4b0FyZ3VtZW50Rm9ybWF0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYXJndW1lbnQtZm9ybWF0JztcclxuaW1wb3J0IHsgRHhvRm9udE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ZvbnQnO1xyXG5pbXBvcnQgeyBEeG9Gb3JtYXRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBEeG9MaW5lTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbGluZSc7XHJcbmltcG9ydCB7IER4b1JhbmdlYXJlYU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3JhbmdlYXJlYSc7XHJcbmltcG9ydCB7IER4b1JhbmdlYmFyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcmFuZ2ViYXInO1xyXG5pbXBvcnQgeyBEeG9TY2F0dGVyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2NhdHRlcic7XHJcbmltcG9ydCB7IER4b1NwbGluZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NwbGluZSc7XHJcbmltcG9ydCB7IER4b1NwbGluZWFyZWFNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zcGxpbmVhcmVhJztcclxuaW1wb3J0IHsgRHhvU3RhY2tlZGFyZWFNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGFja2VkYXJlYSc7XHJcbmltcG9ydCB7IER4b1N0YWNrZWRiYXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGFja2VkYmFyJztcclxuaW1wb3J0IHsgRHhvU3RhY2tlZGxpbmVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGFja2VkbGluZSc7XHJcbmltcG9ydCB7IER4b1N0YWNrZWRzcGxpbmVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGFja2Vkc3BsaW5lJztcclxuaW1wb3J0IHsgRHhvU3RhY2tlZHNwbGluZWFyZWFNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdGFja2Vkc3BsaW5lYXJlYSc7XHJcbmltcG9ydCB7IER4b1N0ZXBhcmVhTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc3RlcGFyZWEnO1xyXG5pbXBvcnQgeyBEeG9TdGVwbGluZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0ZXBsaW5lJztcclxuaW1wb3J0IHsgRHhvU3RvY2tNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdG9jayc7XHJcbmltcG9ydCB7IER4b0RhdGFQcmVwYXJlU2V0dGluZ3NNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9kYXRhLXByZXBhcmUtc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBEeGlTZXJpZXNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zZXJpZXMtZHhpJztcclxuaW1wb3J0IHsgRHhvU2VyaWVzVGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zZXJpZXMtdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBEeG9WYWx1ZUF4aXNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC92YWx1ZS1heGlzJztcclxuaW1wb3J0IHsgRHhvRXhwb3J0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZXhwb3J0JztcclxuaW1wb3J0IHsgRHhvSW5kZW50TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaW5kZW50JztcclxuaW1wb3J0IHsgRHhvTG9hZGluZ0luZGljYXRvck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2xvYWRpbmctaW5kaWNhdG9yJztcclxuaW1wb3J0IHsgRHhvTWFyZ2luTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWFyZ2luJztcclxuaW1wb3J0IHsgRHhvU2NhbGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zY2FsZSc7XHJcbmltcG9ydCB7IER4b0FnZ3JlZ2F0aW9uSW50ZXJ2YWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hZ2dyZWdhdGlvbi1pbnRlcnZhbCc7XHJcbmltcG9ydCB7IER4aUJyZWFrTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYnJlYWstZHhpJztcclxuaW1wb3J0IHsgRHhvQnJlYWtTdHlsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2JyZWFrLXN0eWxlJztcclxuaW1wb3J0IHsgRHhvTWFya2VyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWFya2VyJztcclxuaW1wb3J0IHsgRHhvTWF4UmFuZ2VNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9tYXgtcmFuZ2UnO1xyXG5pbXBvcnQgeyBEeG9NaW5vclRpY2tNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9taW5vci10aWNrJztcclxuaW1wb3J0IHsgRHhvTWlub3JUaWNrSW50ZXJ2YWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9taW5vci10aWNrLWludGVydmFsJztcclxuaW1wb3J0IHsgRHhvTWluUmFuZ2VNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9taW4tcmFuZ2UnO1xyXG5pbXBvcnQgeyBEeG9UaWNrTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdGljayc7XHJcbmltcG9ydCB7IER4b1RpY2tJbnRlcnZhbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RpY2staW50ZXJ2YWwnO1xyXG5pbXBvcnQgeyBEeG9TaHV0dGVyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2h1dHRlcic7XHJcbmltcG9ydCB7IER4b1NpemVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zaXplJztcclxuaW1wb3J0IHsgRHhvU2xpZGVySGFuZGxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2xpZGVyLWhhbmRsZSc7XHJcbmltcG9ydCB7IER4b1NsaWRlck1hcmtlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NsaWRlci1tYXJrZXInO1xyXG5pbXBvcnQgeyBEeG9UaXRsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RpdGxlJztcclxuaW1wb3J0IHsgRHhvU3VidGl0bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdWJ0aXRsZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQ1VTVE9NX1ZBTFVFX0FDQ0VTU09SX1BST1ZJREVSID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEeFJhbmdlU2VsZWN0b3JDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgUmFuZ2VTZWxlY3RvciBpcyBhIHdpZGdldCB0aGF0IGFsbG93cyBhIHVzZXIgdG8gc2VsZWN0IGEgcmFuZ2Ugb2YgdmFsdWVzIG9uIGEgc2NhbGUuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHgtcmFuZ2Utc2VsZWN0b3InLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbICcgOmhvc3QgeyAgZGlzcGxheTogYmxvY2s7IH0nXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgQ1VTVE9NX1ZBTFVFX0FDQ0VTU09SX1BST1ZJREVSLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4UmFuZ2VTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgaW5zdGFuY2U6IER4UmFuZ2VTZWxlY3RvcjtcclxuXHJcbiAgICBAQ29udGVudENoaWxkKER4VmFsaWRhdG9yQ29tcG9uZW50KVxyXG4gICAgdmFsaWRhdG9yOiBEeFZhbGlkYXRvckNvbXBvbmVudDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG9wdGlvbnMgZm9yIHRoZSByYW5nZSBzZWxlY3RvcidzIGJhY2tncm91bmQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmFja2dyb3VuZCgpOiB7IGNvbG9yPzogc3RyaW5nLCBpbWFnZT86IHsgbG9jYXRpb24/OiBzdHJpbmcsIHVybD86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYWNrZ3JvdW5kJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFja2dyb3VuZCh2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgaW1hZ2U/OiB7IGxvY2F0aW9uPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcgfSwgdmlzaWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmFja2dyb3VuZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIFJhbmdlU2VsZWN0b3IncyBiZWhhdmlvciBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJlaGF2aW9yKCk6IHsgYWxsb3dTbGlkZXJzU3dhcD86IGJvb2xlYW4sIGFuaW1hdGlvbkVuYWJsZWQ/OiBib29sZWFuLCBjYWxsVmFsdWVDaGFuZ2VkPzogc3RyaW5nLCBtYW51YWxSYW5nZVNlbGVjdGlvbkVuYWJsZWQ/OiBib29sZWFuLCBtb3ZlU2VsZWN0ZWRSYW5nZUJ5Q2xpY2s/OiBib29sZWFuLCBzbmFwVG9UaWNrcz86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmVoYXZpb3InKTtcclxuICAgIH1cclxuICAgIHNldCBiZWhhdmlvcih2YWx1ZTogeyBhbGxvd1NsaWRlcnNTd2FwPzogYm9vbGVhbiwgYW5pbWF0aW9uRW5hYmxlZD86IGJvb2xlYW4sIGNhbGxWYWx1ZUNoYW5nZWQ/OiBzdHJpbmcsIG1hbnVhbFJhbmdlU2VsZWN0aW9uRW5hYmxlZD86IGJvb2xlYW4sIG1vdmVTZWxlY3RlZFJhbmdlQnlDbGljaz86IGJvb2xlYW4sIHNuYXBUb1RpY2tzPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiZWhhdmlvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG9wdGlvbnMgcmVxdWlyZWQgdG8gZGlzcGxheSBhIGNoYXJ0IGFzIHRoZSByYW5nZSBzZWxlY3RvcidzIGJhY2tncm91bmQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2hhcnQoKTogeyBiYXJHcm91cFBhZGRpbmc/OiBudW1iZXIsIGJhckdyb3VwV2lkdGg/OiBudW1iZXIsIGJhcldpZHRoPzogbnVtYmVyLCBib3R0b21JbmRlbnQ/OiBudW1iZXIsIGNvbW1vblNlcmllc1NldHRpbmdzPzogYW55LCBkYXRhUHJlcGFyZVNldHRpbmdzPzogeyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9LCBlcXVhbEJhcldpZHRoPzogYm9vbGVhbiwgbWF4QnViYmxlU2l6ZT86IG51bWJlciwgbWluQnViYmxlU2l6ZT86IG51bWJlciwgbmVnYXRpdmVzQXNaZXJvZXM/OiBib29sZWFuLCBwYWxldHRlPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgcGFsZXR0ZUV4dGVuc2lvbk1vZGU/OiBzdHJpbmcsIHNlcmllcz86IGFueSB8IEFycmF5PGFueT4sIHNlcmllc1RlbXBsYXRlPzogeyBjdXN0b21pemVTZXJpZXM/OiBGdW5jdGlvbiwgbmFtZUZpZWxkPzogc3RyaW5nIH0sIHRvcEluZGVudD86IG51bWJlciwgdXNlQWdncmVnYXRpb24/OiBib29sZWFuLCB2YWx1ZUF4aXM/OiB7IGludmVydGVkPzogYm9vbGVhbiwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4PzogbnVtYmVyLCBtaW4/OiBudW1iZXIsIHR5cGU/OiBzdHJpbmcsIHZhbHVlVHlwZT86IHN0cmluZyB9IH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NoYXJ0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2hhcnQodmFsdWU6IHsgYmFyR3JvdXBQYWRkaW5nPzogbnVtYmVyLCBiYXJHcm91cFdpZHRoPzogbnVtYmVyLCBiYXJXaWR0aD86IG51bWJlciwgYm90dG9tSW5kZW50PzogbnVtYmVyLCBjb21tb25TZXJpZXNTZXR0aW5ncz86IGFueSwgZGF0YVByZXBhcmVTZXR0aW5ncz86IHsgY2hlY2tUeXBlRm9yQWxsRGF0YT86IGJvb2xlYW4sIGNvbnZlcnRUb0F4aXNEYXRhVHlwZT86IGJvb2xlYW4sIHNvcnRpbmdNZXRob2Q/OiBib29sZWFuIHwgRnVuY3Rpb24gfSwgZXF1YWxCYXJXaWR0aD86IGJvb2xlYW4sIG1heEJ1YmJsZVNpemU/OiBudW1iZXIsIG1pbkJ1YmJsZVNpemU/OiBudW1iZXIsIG5lZ2F0aXZlc0FzWmVyb2VzPzogYm9vbGVhbiwgcGFsZXR0ZT86IHN0cmluZyB8IEFycmF5PHN0cmluZz4sIHBhbGV0dGVFeHRlbnNpb25Nb2RlPzogc3RyaW5nLCBzZXJpZXM/OiBhbnkgfCBBcnJheTxhbnk+LCBzZXJpZXNUZW1wbGF0ZT86IHsgY3VzdG9taXplU2VyaWVzPzogRnVuY3Rpb24sIG5hbWVGaWVsZD86IHN0cmluZyB9LCB0b3BJbmRlbnQ/OiBudW1iZXIsIHVzZUFnZ3JlZ2F0aW9uPzogYm9vbGVhbiwgdmFsdWVBeGlzPzogeyBpbnZlcnRlZD86IGJvb2xlYW4sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1heD86IG51bWJlciwgbWluPzogbnVtYmVyLCB0eXBlPzogc3RyaW5nLCB2YWx1ZVR5cGU/OiBzdHJpbmcgfSB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjaGFydCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGNvbG9yIG9mIHRoZSBwYXJlbnQgcGFnZSBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbnRhaW5lckJhY2tncm91bmRDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbnRhaW5lckJhY2tncm91bmRDb2xvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbnRhaW5lckJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb250YWluZXJCYWNrZ3JvdW5kQ29sb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgZGF0YSBzb3VyY2UgZm9yIHRoZSBzY2FsZSB2YWx1ZXMgYW5kIGZvciB0aGUgY2hhcnQgYXQgdGhlIGJhY2tncm91bmQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YVNvdXJjZSgpOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFTb3VyY2UnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhU291cmNlKHZhbHVlOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFTb3VyY2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBkYXRhIHNvdXJjZSBmaWVsZCB0aGF0IHByb3ZpZGVzIGRhdGEgZm9yIHRoZSBzY2FsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhU291cmNlRmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhU291cmNlRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhU291cmNlRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVNvdXJjZUZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgcmVzcG9uZHMgdG8gdGhlIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB3aWRnZXQncyByb290IGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWxlbWVudEF0dHIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbGVtZW50QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVsZW1lbnRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VsZW1lbnRBdHRyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGV4cG9ydGluZyBhbmQgcHJpbnRpbmcgZmVhdHVyZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXhwb3J0KCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGZvcm1hdHM/OiBBcnJheTxzdHJpbmc+LCBtYXJnaW4/OiBudW1iZXIsIHByaW50aW5nRW5hYmxlZD86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2V4cG9ydCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4cG9ydCh2YWx1ZTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgZm9ybWF0cz86IEFycmF5PHN0cmluZz4sIG1hcmdpbj86IG51bWJlciwgcHJpbnRpbmdFbmFibGVkPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwb3J0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJhbmdlIHNlbGVjdG9yJ3MgaW5kZW50IG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaW5kZW50KCk6IHsgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaW5kZW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaW5kZW50KHZhbHVlOiB7IGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2luZGVudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBsb2FkaW5nIGluZGljYXRvci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsb2FkaW5nSW5kaWNhdG9yKCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvYWRpbmdJbmRpY2F0b3InKTtcclxuICAgIH1cclxuICAgIHNldCBsb2FkaW5nSW5kaWNhdG9yKHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBzaG93PzogYm9vbGVhbiwgdGV4dD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2FkaW5nSW5kaWNhdG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBzcGFjZSBhcm91bmQgdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXJnaW4oKTogeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWFyZ2luJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWFyZ2luKHZhbHVlOiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXJnaW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhlIHdpZGdldCB0aGF0IGl0IGlzIGVtYmVkZGVkIGludG8gYW4gSFRNTCBwYWdlIHRoYXQgdXNlcyBhIHRhZyBtb2RpZnlpbmcgdGhlIHBhdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGF0aE1vZGlmaWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhdGhNb2RpZmllZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhdGhNb2RpZmllZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGF0aE1vZGlmaWVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJlZHJhdyB0aGUgd2lkZ2V0IHdoZW4gdGhlIHNpemUgb2YgdGhlIHBhcmVudCBicm93c2VyIHdpbmRvdyBjaGFuZ2VzIG9yIGEgbW9iaWxlIGRldmljZSByb3RhdGVzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlZHJhd09uUmVzaXplKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlZHJhd09uUmVzaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVkcmF3T25SZXNpemUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlZHJhd09uUmVzaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaGVzIHRoZSB3aWRnZXQgdG8gYSByaWdodC10by1sZWZ0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJ0bEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncnRsRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJ0bEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3J0bEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIG9wdGlvbnMgb2YgdGhlIHJhbmdlIHNlbGVjdG9yJ3Mgc2NhbGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2NhbGUoKTogeyBhZ2dyZWdhdGlvbkdyb3VwV2lkdGg/OiBudW1iZXIsIGFnZ3JlZ2F0aW9uSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgYnJlYWtzPzogQXJyYXk8RGV2RXhwcmVzcy52aXouU2NhbGVCcmVhaz4sIGJyZWFrU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjYXRlZ29yaWVzPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIGVuZE9uVGljaz86IGJvb2xlYW4sIGVuZFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgaG9saWRheXM/OiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiwgbGFiZWw/OiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCB0b3BJbmRlbnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuIH0sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1hcmtlcj86IHsgbGFiZWw/OiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfSwgc2VwYXJhdG9ySGVpZ2h0PzogbnVtYmVyLCB0ZXh0TGVmdEluZGVudD86IG51bWJlciwgdGV4dFRvcEluZGVudD86IG51bWJlciwgdG9wSW5kZW50PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBtYXhSYW5nZT86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG1pbm9yVGljaz86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tDb3VudD86IG51bWJlciwgbWlub3JUaWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBtaW5SYW5nZT86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVySGVpZ2h0PzogbnVtYmVyLCBzaG93Q3VzdG9tQm91bmRhcnlUaWNrcz86IGJvb2xlYW4sIHNpbmdsZVdvcmtkYXlzPzogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4sIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB0aWNrPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgdGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgdHlwZT86IHN0cmluZywgdmFsdWVUeXBlPzogc3RyaW5nLCB3b3JrZGF5c09ubHk/OiBib29sZWFuLCB3b3JrV2Vlaz86IEFycmF5PG51bWJlcj4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2NhbGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzY2FsZSh2YWx1ZTogeyBhZ2dyZWdhdGlvbkdyb3VwV2lkdGg/OiBudW1iZXIsIGFnZ3JlZ2F0aW9uSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgYnJlYWtzPzogQXJyYXk8RGV2RXhwcmVzcy52aXouU2NhbGVCcmVhaz4sIGJyZWFrU3R5bGU/OiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjYXRlZ29yaWVzPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4sIGVuZE9uVGljaz86IGJvb2xlYW4sIGVuZFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgaG9saWRheXM/OiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiwgbGFiZWw/OiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCB0b3BJbmRlbnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuIH0sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1hcmtlcj86IHsgbGFiZWw/OiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfSwgc2VwYXJhdG9ySGVpZ2h0PzogbnVtYmVyLCB0ZXh0TGVmdEluZGVudD86IG51bWJlciwgdGV4dFRvcEluZGVudD86IG51bWJlciwgdG9wSW5kZW50PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBtYXhSYW5nZT86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG1pbm9yVGljaz86IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tDb3VudD86IG51bWJlciwgbWlub3JUaWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCBtaW5SYW5nZT86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVySGVpZ2h0PzogbnVtYmVyLCBzaG93Q3VzdG9tQm91bmRhcnlUaWNrcz86IGJvb2xlYW4sIHNpbmdsZVdvcmtkYXlzPzogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4sIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB0aWNrPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSwgdGlja0ludGVydmFsPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgdHlwZT86IHN0cmluZywgdmFsdWVUeXBlPzogc3RyaW5nLCB3b3JrZGF5c09ubHk/OiBib29sZWFuLCB3b3JrV2Vlaz86IEFycmF5PG51bWJlcj4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2NhbGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcmFuZ2UuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0ZWRSYW5nZUNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0ZWRSYW5nZUNvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0ZWRSYW5nZUNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlbGVjdGVkUmFuZ2VDb2xvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgaG93IHRoZSBzZWxlY3RlZCByYW5nZSBzaG91bGQgYmVoYXZlIHdoZW4gZGF0YSBpcyB1cGRhdGVkLiBBcHBsaWVzIG9ubHkgd2hlbiB0aGUgUmFuZ2VTZWxlY3RvciBpcyBib3VuZCB0byBhIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGVkUmFuZ2VVcGRhdGVNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0ZWRSYW5nZVVwZGF0ZU1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RlZFJhbmdlVXBkYXRlTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3RlZFJhbmdlVXBkYXRlTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgcmFuZ2Ugc2VsZWN0b3Igc2h1dHRlciBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNodXR0ZXIoKTogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaHV0dGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2h1dHRlcih2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaHV0dGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgc2l6ZSBpbiBwaXhlbHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2l6ZSgpOiB7IGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNpemUodmFsdWU6IHsgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgcmFuZ2Ugc2VsZWN0b3IncyBzbGlkZXIgaGFuZGxlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzbGlkZXJIYW5kbGUoKTogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2xpZGVySGFuZGxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2xpZGVySGFuZGxlKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzbGlkZXJIYW5kbGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgb3B0aW9ucyBvZiB0aGUgcmFuZ2Ugc2VsZWN0b3Igc2xpZGVyIG1hcmtlcnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2xpZGVyTWFya2VyKCk6IHsgY29sb3I/OiBzdHJpbmcsIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbnZhbGlkUmFuZ2VDb2xvcj86IHN0cmluZywgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgcGxhY2Vob2xkZXJIZWlnaHQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NsaWRlck1hcmtlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNsaWRlck1hcmtlcih2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGludmFsaWRSYW5nZUNvbG9yPzogc3RyaW5nLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBwbGFjZWhvbGRlckhlaWdodD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2xpZGVyTWFya2VyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIG5hbWUgb2YgdGhlIHRoZW1lIHRoZSB3aWRnZXQgdXNlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aGVtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RoZW1lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGhlbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgd2lkZ2V0J3MgdGl0bGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aXRsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpdGxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzZWxlY3RlZCByYW5nZSAoaW5pdGlhbCBvciBjdXJyZW50KS4gRXF1YWxzIHRoZSBlbnRpcmUgc2NhbGUgd2hlbiBub3Qgc2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlKCk6IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIHJlbmRlcmluZyBoYXMgZmluaXNoZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRyYXduOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgd2lkZ2V0IGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZXhwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkV4cG9ydGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgZmlsZSB3aXRoIGV4cG9ydGVkIHdpZGdldCBpcyBzYXZlZCB0byB0aGUgdXNlcidzIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZpbGVTYXZpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gZXJyb3Igb3Igd2FybmluZyBvY2N1cnMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluY2lkZW50T2NjdXJyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHdpZGdldCdzIHZhbHVlIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBiYWNrZ3JvdW5kQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYmFja2dyb3VuZENoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29sb3I/OiBzdHJpbmcsIGltYWdlPzogeyBsb2NhdGlvbj86IHN0cmluZywgdXJsPzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYmVoYXZpb3JDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBiZWhhdmlvckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dTbGlkZXJzU3dhcD86IGJvb2xlYW4sIGFuaW1hdGlvbkVuYWJsZWQ/OiBib29sZWFuLCBjYWxsVmFsdWVDaGFuZ2VkPzogc3RyaW5nLCBtYW51YWxSYW5nZVNlbGVjdGlvbkVuYWJsZWQ/OiBib29sZWFuLCBtb3ZlU2VsZWN0ZWRSYW5nZUJ5Q2xpY2s/OiBib29sZWFuLCBzbmFwVG9UaWNrcz86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjaGFydENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNoYXJ0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBiYXJHcm91cFBhZGRpbmc/OiBudW1iZXIsIGJhckdyb3VwV2lkdGg/OiBudW1iZXIsIGJhcldpZHRoPzogbnVtYmVyLCBib3R0b21JbmRlbnQ/OiBudW1iZXIsIGNvbW1vblNlcmllc1NldHRpbmdzPzogYW55LCBkYXRhUHJlcGFyZVNldHRpbmdzPzogeyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9LCBlcXVhbEJhcldpZHRoPzogYm9vbGVhbiwgbWF4QnViYmxlU2l6ZT86IG51bWJlciwgbWluQnViYmxlU2l6ZT86IG51bWJlciwgbmVnYXRpdmVzQXNaZXJvZXM/OiBib29sZWFuLCBwYWxldHRlPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgcGFsZXR0ZUV4dGVuc2lvbk1vZGU/OiBzdHJpbmcsIHNlcmllcz86IGFueSB8IEFycmF5PGFueT4sIHNlcmllc1RlbXBsYXRlPzogeyBjdXN0b21pemVTZXJpZXM/OiBGdW5jdGlvbiwgbmFtZUZpZWxkPzogc3RyaW5nIH0sIHRvcEluZGVudD86IG51bWJlciwgdXNlQWdncmVnYXRpb24/OiBib29sZWFuLCB2YWx1ZUF4aXM/OiB7IGludmVydGVkPzogYm9vbGVhbiwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4PzogbnVtYmVyLCBtaW4/OiBudW1iZXIsIHR5cGU/OiBzdHJpbmcsIHZhbHVlVHlwZT86IHN0cmluZyB9IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY29udGFpbmVyQmFja2dyb3VuZENvbG9yQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29udGFpbmVyQmFja2dyb3VuZENvbG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRhdGFTb3VyY2VDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRhU291cmNlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRhdGFTb3VyY2VGaWVsZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGFTb3VyY2VGaWVsZENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGV4cG9ydENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGV4cG9ydENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGZvcm1hdHM/OiBBcnJheTxzdHJpbmc+LCBtYXJnaW4/OiBudW1iZXIsIHByaW50aW5nRW5hYmxlZD86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaW5kZW50Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaW5kZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGxvYWRpbmdJbmRpY2F0b3JDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBsb2FkaW5nSW5kaWNhdG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgc2hvdz86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXJnaW5DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXJnaW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBhdGhNb2RpZmllZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBhdGhNb2RpZmllZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVkcmF3T25SZXNpemVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZWRyYXdPblJlc2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNjYWxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2NhbGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFnZ3JlZ2F0aW9uR3JvdXBXaWR0aD86IG51bWJlciwgYWdncmVnYXRpb25JbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBicmVha3M/OiBBcnJheTxEZXZFeHByZXNzLnZpei5TY2FsZUJyZWFrPiwgYnJlYWtTdHlsZT86IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNhdGVnb3JpZXM/OiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiwgZW5kT25UaWNrPzogYm9vbGVhbiwgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBob2xpZGF5cz86IEFycmF5PERhdGUgfCBzdHJpbmcgfCBudW1iZXI+LCBsYWJlbD86IHsgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHRvcEluZGVudD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4gfSwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWFya2VyPzogeyBsYWJlbD86IHsgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB9LCBzZXBhcmF0b3JIZWlnaHQ/OiBudW1iZXIsIHRleHRMZWZ0SW5kZW50PzogbnVtYmVyLCB0ZXh0VG9wSW5kZW50PzogbnVtYmVyLCB0b3BJbmRlbnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuIH0sIG1heFJhbmdlPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgbWlub3JUaWNrPzogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGlja0NvdW50PzogbnVtYmVyLCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0sIG1pblJhbmdlPzogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJIZWlnaHQ/OiBudW1iZXIsIHNob3dDdXN0b21Cb3VuZGFyeVRpY2tzPzogYm9vbGVhbiwgc2luZ2xlV29ya2RheXM/OiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiwgc3RhcnRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9LCB0eXBlPzogc3RyaW5nLCB2YWx1ZVR5cGU/OiBzdHJpbmcsIHdvcmtkYXlzT25seT86IGJvb2xlYW4sIHdvcmtXZWVrPzogQXJyYXk8bnVtYmVyPiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGVkUmFuZ2VDb2xvckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkUmFuZ2VDb2xvckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWxlY3RlZFJhbmdlVXBkYXRlTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkUmFuZ2VVcGRhdGVNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNodXR0ZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaHV0dGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNpemVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2xpZGVySGFuZGxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2xpZGVySGFuZGxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzbGlkZXJNYXJrZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzbGlkZXJNYXJrZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGNvbG9yPzogc3RyaW5nLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW52YWxpZFJhbmdlQ29sb3I/OiBzdHJpbmcsIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHBsYWNlaG9sZGVySGVpZ2h0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRoZW1lQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGhlbWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGl0bGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0aXRsZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWx1ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPj47XHJcblxyXG4gICAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3ZhbHVlQ2hhbmdlJywgWyckZXZlbnQnXSkgY2hhbmdlKF8pIHsgfVxyXG4gICAgQEhvc3RMaXN0ZW5lcignb25CbHVyJywgWyckZXZlbnQnXSkgdG91Y2hlZCA9IChfKSA9PiB7fTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZGlzcG9zaW5nJywgZW1pdDogJ29uRGlzcG9zaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2RyYXduJywgZW1pdDogJ29uRHJhd24nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZXhwb3J0ZWQnLCBlbWl0OiAnb25FeHBvcnRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRpbmcnLCBlbWl0OiAnb25FeHBvcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZmlsZVNhdmluZycsIGVtaXQ6ICdvbkZpbGVTYXZpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5jaWRlbnRPY2N1cnJlZCcsIGVtaXQ6ICdvbkluY2lkZW50T2NjdXJyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Jbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd2YWx1ZUNoYW5nZWQnLCBlbWl0OiAnb25WYWx1ZUNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2JhY2tncm91bmRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2JlaGF2aW9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjaGFydENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29udGFpbmVyQmFja2dyb3VuZENvbG9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhU291cmNlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhU291cmNlRmllbGRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc2FibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlbGVtZW50QXR0ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZXhwb3J0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpbmRlbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2xvYWRpbmdJbmRpY2F0b3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21hcmdpbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGF0aE1vZGlmaWVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZWRyYXdPblJlc2l6ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncnRsRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2NhbGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGVkUmFuZ2VDb2xvckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0ZWRSYW5nZVVwZGF0ZU1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NodXR0ZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NpemVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NsaWRlckhhbmRsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2xpZGVyTWFya2VyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0aGVtZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGl0bGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdvbkJsdXInIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5faWRoLnNldEhvc3QodGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHhSYW5nZVNlbGVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRIZWxwZXIubG9ja2VkVmFsdWVDaGFuZ2VFdmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIZWxwZXIubG9ja2VkVmFsdWVDaGFuZ2VFdmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5jaGFuZ2UgPSBmbjsgfVxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy50b3VjaGVkID0gZm47IH1cclxuXHJcbiAgICBfY3JlYXRlV2lkZ2V0KGVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyLl9jcmVhdGVXaWRnZXQoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbignZm9jdXNPdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGVscGVyLmZpcmVOZ0V2ZW50KCdvbkJsdXInLCBbZV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2RhdGFTb3VyY2UnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygndmFsdWUnLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENoYW5nZXMocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKCEocHJvcCBpbiB0aGlzLl9vcHRpb25zVG9VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkaC5zZXR1cChwcm9wLCBjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdkYXRhU291cmNlJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3ZhbHVlJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuY3JlYXRlSW5zdGFuY2VPbkluaXQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmNyZWF0ZUluc3RhbmNlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhvQmFja2dyb3VuZE1vZHVsZSxcclxuICAgIER4b0ltYWdlTW9kdWxlLFxyXG4gICAgRHhvQmVoYXZpb3JNb2R1bGUsXHJcbiAgICBEeG9DaGFydE1vZHVsZSxcclxuICAgIER4b0NvbW1vblNlcmllc1NldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhvQWdncmVnYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9BcmVhTW9kdWxlLFxyXG4gICAgRHhvQm9yZGVyTW9kdWxlLFxyXG4gICAgRHhvSG92ZXJTdHlsZU1vZHVsZSxcclxuICAgIER4b0hhdGNoaW5nTW9kdWxlLFxyXG4gICAgRHhvTGFiZWxNb2R1bGUsXHJcbiAgICBEeG9Db25uZWN0b3JNb2R1bGUsXHJcbiAgICBEeG9Qb2ludE1vZHVsZSxcclxuICAgIER4b0hlaWdodE1vZHVsZSxcclxuICAgIER4b1VybE1vZHVsZSxcclxuICAgIER4b1dpZHRoTW9kdWxlLFxyXG4gICAgRHhvU2VsZWN0aW9uU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9SZWR1Y3Rpb25Nb2R1bGUsXHJcbiAgICBEeG9WYWx1ZUVycm9yQmFyTW9kdWxlLFxyXG4gICAgRHhvQmFyTW9kdWxlLFxyXG4gICAgRHhvQnViYmxlTW9kdWxlLFxyXG4gICAgRHhvQ2FuZGxlc3RpY2tNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZGFyZWFNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZGJhck1vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2VkbGluZU1vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2Vkc3BsaW5lTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRzcGxpbmVhcmVhTW9kdWxlLFxyXG4gICAgRHhvQXJndW1lbnRGb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9Gb250TW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvTGluZU1vZHVsZSxcclxuICAgIER4b1JhbmdlYXJlYU1vZHVsZSxcclxuICAgIER4b1JhbmdlYmFyTW9kdWxlLFxyXG4gICAgRHhvU2NhdHRlck1vZHVsZSxcclxuICAgIER4b1NwbGluZU1vZHVsZSxcclxuICAgIER4b1NwbGluZWFyZWFNb2R1bGUsXHJcbiAgICBEeG9TdGFja2VkYXJlYU1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRiYXJNb2R1bGUsXHJcbiAgICBEeG9TdGFja2VkbGluZU1vZHVsZSxcclxuICAgIER4b1N0YWNrZWRzcGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TdGFja2Vkc3BsaW5lYXJlYU1vZHVsZSxcclxuICAgIER4b1N0ZXBhcmVhTW9kdWxlLFxyXG4gICAgRHhvU3RlcGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TdG9ja01vZHVsZSxcclxuICAgIER4b0RhdGFQcmVwYXJlU2V0dGluZ3NNb2R1bGUsXHJcbiAgICBEeGlTZXJpZXNNb2R1bGUsXHJcbiAgICBEeG9TZXJpZXNUZW1wbGF0ZU1vZHVsZSxcclxuICAgIER4b1ZhbHVlQXhpc01vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0luZGVudE1vZHVsZSxcclxuICAgIER4b0xvYWRpbmdJbmRpY2F0b3JNb2R1bGUsXHJcbiAgICBEeG9NYXJnaW5Nb2R1bGUsXHJcbiAgICBEeG9TY2FsZU1vZHVsZSxcclxuICAgIER4b0FnZ3JlZ2F0aW9uSW50ZXJ2YWxNb2R1bGUsXHJcbiAgICBEeGlCcmVha01vZHVsZSxcclxuICAgIER4b0JyZWFrU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9NYXJrZXJNb2R1bGUsXHJcbiAgICBEeG9NYXhSYW5nZU1vZHVsZSxcclxuICAgIER4b01pbm9yVGlja01vZHVsZSxcclxuICAgIER4b01pbm9yVGlja0ludGVydmFsTW9kdWxlLFxyXG4gICAgRHhvTWluUmFuZ2VNb2R1bGUsXHJcbiAgICBEeG9UaWNrTW9kdWxlLFxyXG4gICAgRHhvVGlja0ludGVydmFsTW9kdWxlLFxyXG4gICAgRHhvU2h1dHRlck1vZHVsZSxcclxuICAgIER4b1NpemVNb2R1bGUsXHJcbiAgICBEeG9TbGlkZXJIYW5kbGVNb2R1bGUsXHJcbiAgICBEeG9TbGlkZXJNYXJrZXJNb2R1bGUsXHJcbiAgICBEeG9UaXRsZU1vZHVsZSxcclxuICAgIER4b1N1YnRpdGxlTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeFJhbmdlU2VsZWN0b3JDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4UmFuZ2VTZWxlY3RvckNvbXBvbmVudCxcclxuICAgIER4b0JhY2tncm91bmRNb2R1bGUsXHJcbiAgICBEeG9JbWFnZU1vZHVsZSxcclxuICAgIER4b0JlaGF2aW9yTW9kdWxlLFxyXG4gICAgRHhvQ2hhcnRNb2R1bGUsXHJcbiAgICBEeG9Db21tb25TZXJpZXNTZXR0aW5nc01vZHVsZSxcclxuICAgIER4b0FnZ3JlZ2F0aW9uTW9kdWxlLFxyXG4gICAgRHhvQXJlYU1vZHVsZSxcclxuICAgIER4b0JvcmRlck1vZHVsZSxcclxuICAgIER4b0hvdmVyU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9IYXRjaGluZ01vZHVsZSxcclxuICAgIER4b0xhYmVsTW9kdWxlLFxyXG4gICAgRHhvQ29ubmVjdG9yTW9kdWxlLFxyXG4gICAgRHhvUG9pbnRNb2R1bGUsXHJcbiAgICBEeG9IZWlnaHRNb2R1bGUsXHJcbiAgICBEeG9VcmxNb2R1bGUsXHJcbiAgICBEeG9XaWR0aE1vZHVsZSxcclxuICAgIER4b1NlbGVjdGlvblN0eWxlTW9kdWxlLFxyXG4gICAgRHhvUmVkdWN0aW9uTW9kdWxlLFxyXG4gICAgRHhvVmFsdWVFcnJvckJhck1vZHVsZSxcclxuICAgIER4b0Jhck1vZHVsZSxcclxuICAgIER4b0J1YmJsZU1vZHVsZSxcclxuICAgIER4b0NhbmRsZXN0aWNrTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRhcmVhTW9kdWxlLFxyXG4gICAgRHhvRnVsbHN0YWNrZWRiYXJNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZGxpbmVNb2R1bGUsXHJcbiAgICBEeG9GdWxsc3RhY2tlZHNwbGluZU1vZHVsZSxcclxuICAgIER4b0Z1bGxzdGFja2Vkc3BsaW5lYXJlYU1vZHVsZSxcclxuICAgIER4b0FyZ3VtZW50Rm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvRm9udE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b0xpbmVNb2R1bGUsXHJcbiAgICBEeG9SYW5nZWFyZWFNb2R1bGUsXHJcbiAgICBEeG9SYW5nZWJhck1vZHVsZSxcclxuICAgIER4b1NjYXR0ZXJNb2R1bGUsXHJcbiAgICBEeG9TcGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TcGxpbmVhcmVhTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZGFyZWFNb2R1bGUsXHJcbiAgICBEeG9TdGFja2VkYmFyTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZGxpbmVNb2R1bGUsXHJcbiAgICBEeG9TdGFja2Vkc3BsaW5lTW9kdWxlLFxyXG4gICAgRHhvU3RhY2tlZHNwbGluZWFyZWFNb2R1bGUsXHJcbiAgICBEeG9TdGVwYXJlYU1vZHVsZSxcclxuICAgIER4b1N0ZXBsaW5lTW9kdWxlLFxyXG4gICAgRHhvU3RvY2tNb2R1bGUsXHJcbiAgICBEeG9EYXRhUHJlcGFyZVNldHRpbmdzTW9kdWxlLFxyXG4gICAgRHhpU2VyaWVzTW9kdWxlLFxyXG4gICAgRHhvU2VyaWVzVGVtcGxhdGVNb2R1bGUsXHJcbiAgICBEeG9WYWx1ZUF4aXNNb2R1bGUsXHJcbiAgICBEeG9FeHBvcnRNb2R1bGUsXHJcbiAgICBEeG9JbmRlbnRNb2R1bGUsXHJcbiAgICBEeG9Mb2FkaW5nSW5kaWNhdG9yTW9kdWxlLFxyXG4gICAgRHhvTWFyZ2luTW9kdWxlLFxyXG4gICAgRHhvU2NhbGVNb2R1bGUsXHJcbiAgICBEeG9BZ2dyZWdhdGlvbkludGVydmFsTW9kdWxlLFxyXG4gICAgRHhpQnJlYWtNb2R1bGUsXHJcbiAgICBEeG9CcmVha1N0eWxlTW9kdWxlLFxyXG4gICAgRHhvTWFya2VyTW9kdWxlLFxyXG4gICAgRHhvTWF4UmFuZ2VNb2R1bGUsXHJcbiAgICBEeG9NaW5vclRpY2tNb2R1bGUsXHJcbiAgICBEeG9NaW5vclRpY2tJbnRlcnZhbE1vZHVsZSxcclxuICAgIER4b01pblJhbmdlTW9kdWxlLFxyXG4gICAgRHhvVGlja01vZHVsZSxcclxuICAgIER4b1RpY2tJbnRlcnZhbE1vZHVsZSxcclxuICAgIER4b1NodXR0ZXJNb2R1bGUsXHJcbiAgICBEeG9TaXplTW9kdWxlLFxyXG4gICAgRHhvU2xpZGVySGFuZGxlTW9kdWxlLFxyXG4gICAgRHhvU2xpZGVyTWFya2VyTW9kdWxlLFxyXG4gICAgRHhvVGl0bGVNb2R1bGUsXHJcbiAgICBEeG9TdWJ0aXRsZU1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFJhbmdlU2VsZWN0b3JNb2R1bGUgeyB9XHJcbiJdfQ==