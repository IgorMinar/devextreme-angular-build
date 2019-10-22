import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxRangeSelector from 'devextreme/viz/range_selector';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
DxRangeSelectorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
let DxRangeSelectorModule = class DxRangeSelectorModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxRangeSelectorComponent, DxRangeSelectorModule };
//# sourceMappingURL=devextreme-angular-ui-range-selector.js.map
