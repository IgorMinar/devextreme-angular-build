import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxPieChart from 'devextreme/viz/pie_chart';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiSeriesComponent, DxoAdaptiveLayoutModule, DxoAnimationModule, DxoCommonSeriesSettingsModule, DxoBorderModule, DxoHoverStyleModule, DxoHatchingModule, DxoLabelModule, DxoArgumentFormatModule, DxoConnectorModule, DxoFontModule, DxoFormatModule, DxoSelectionStyleModule, DxoSmallValuesGroupingModule, DxoExportModule, DxoLegendModule, DxoMarginModule, DxoTitleModule, DxoSubtitleModule, DxoLoadingIndicatorModule, DxiSeriesModule, DxoSeriesTemplateModule, DxoSizeModule, DxoTooltipModule, DxoShadowModule } from 'devextreme-angular/ui/nested';

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
 * The PieChart is a widget that visualizes data as a circle divided into sectors that each represents a portion of the whole.
 */
let DxPieChartComponent = class DxPieChartComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'done', emit: 'onDone' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'legendClick', emit: 'onLegendClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pointClick', emit: 'onPointClick' },
            { subscribe: 'pointHoverChanged', emit: 'onPointHoverChanged' },
            { subscribe: 'pointSelectionChanged', emit: 'onPointSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'animationChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataSourceChange' },
            { emit: 'diameterChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'innerRadiusChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'minDiameterChange' },
            { emit: 'paletteChange' },
            { emit: 'paletteExtensionModeChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'segmentsDirectionChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'sizeChange' },
            { emit: 'sizeGroupChange' },
            { emit: 'startAngleChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'typeChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies adaptive layout options.
     */
    get adaptiveLayout() {
        return this._getOption('adaptiveLayout');
    }
    set adaptiveLayout(value) {
        this._setOption('adaptiveLayout', value);
    }
    /**
     * Specifies animation options.
     */
    get animation() {
        return this._getOption('animation');
    }
    set animation(value) {
        this._setOption('animation', value);
    }
    /**
     * An object defining the configuration options that are common for all series of the PieChart widget.
     */
    get commonSeriesSettings() {
        return this._getOption('commonSeriesSettings');
    }
    set commonSeriesSettings(value) {
        this._setOption('commonSeriesSettings', value);
    }
    /**
     * Customizes the appearance of an individual point label.
     */
    get customizeLabel() {
        return this._getOption('customizeLabel');
    }
    set customizeLabel(value) {
        this._setOption('customizeLabel', value);
    }
    /**
     * Customizes the appearance of an individual series point.
     */
    get customizePoint() {
        return this._getOption('customizePoint');
    }
    set customizePoint(value) {
        this._setOption('customizePoint', value);
    }
    /**
     * Binds the widget to data.
     */
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    /**
     * Specifies the diameter of the pie.
     */
    get diameter() {
        return this._getOption('diameter');
    }
    set diameter(value) {
        this._setOption('diameter', value);
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
     * Specifies the fraction of the inner radius relative to the total radius in the series of the 'doughnut' type. The value should be between 0 and 1.
     */
    get innerRadius() {
        return this._getOption('innerRadius');
    }
    set innerRadius(value) {
        this._setOption('innerRadius', value);
    }
    /**
     * Specifies PieChart legend options.
     */
    get legend() {
        return this._getOption('legend');
    }
    set legend(value) {
        this._setOption('legend', value);
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
     * Specifies the minimum diameter of the pie.
     */
    get minDiameter() {
        return this._getOption('minDiameter');
    }
    set minDiameter(value) {
        this._setOption('minDiameter', value);
    }
    /**
     * Sets the palette to be used to colorize series and their elements.
     */
    get palette() {
        return this._getOption('palette');
    }
    set palette(value) {
        this._setOption('palette', value);
    }
    /**
     * Specifies what to do with colors in the palette when their number is less than the number of series (in the Chart widget) or points in a series (in the PieChart widget).
     */
    get paletteExtensionMode() {
        return this._getOption('paletteExtensionMode');
    }
    set paletteExtensionMode(value) {
        this._setOption('paletteExtensionMode', value);
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
     * Specifies whether a single point or multiple points can be selected in the chart.
     */
    get pointSelectionMode() {
        return this._getOption('pointSelectionMode');
    }
    set pointSelectionMode(value) {
        this._setOption('pointSelectionMode', value);
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
     * Specifies how a chart must behave when point labels overlap.
     */
    get resolveLabelOverlapping() {
        return this._getOption('resolveLabelOverlapping');
    }
    set resolveLabelOverlapping(value) {
        this._setOption('resolveLabelOverlapping', value);
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
     * Specifies the direction that the pie chart segments will occupy.
     */
    get segmentsDirection() {
        return this._getOption('segmentsDirection');
    }
    set segmentsDirection(value) {
        this._setOption('segmentsDirection', value);
    }
    /**
     * Specifies options for the series of the PieChart widget.
     */
    get series() {
        return this._getOption('series');
    }
    set series(value) {
        this._setOption('series', value);
    }
    /**
     * Defines options for the series template.
     */
    get seriesTemplate() {
        return this._getOption('seriesTemplate');
    }
    set seriesTemplate(value) {
        this._setOption('seriesTemplate', value);
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
     * Allows you to display several adjoining pies in the same size.
     */
    get sizeGroup() {
        return this._getOption('sizeGroup');
    }
    set sizeGroup(value) {
        this._setOption('sizeGroup', value);
    }
    /**
     * Specifies the angle in arc degrees from which the first segment of a pie chart should start.
     */
    get startAngle() {
        return this._getOption('startAngle');
    }
    set startAngle(value) {
        this._setOption('startAngle', value);
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
     * Configures tooltips.
     */
    get tooltip() {
        return this._getOption('tooltip');
    }
    set tooltip(value) {
        this._setOption('tooltip', value);
    }
    /**
     * Specifies the type of the pie chart series.
     */
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get seriesChildren() {
        return this._getOption('series');
    }
    set seriesChildren(value) {
        this.setChildren('series', value);
    }
    _createInstance(element, options) {
        return new DxPieChart(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
        this.setupChanges('series', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('series');
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
};
DxPieChartComponent.ctorParameters = () => [
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
    Input()
], DxPieChartComponent.prototype, "adaptiveLayout", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "animation", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "commonSeriesSettings", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "customizeLabel", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "customizePoint", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "diameter", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "export", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "innerRadius", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "legend", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "loadingIndicator", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "margin", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "minDiameter", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "palette", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "paletteExtensionMode", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "pathModified", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "pointSelectionMode", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "redrawOnResize", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "resolveLabelOverlapping", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "segmentsDirection", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "series", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "seriesTemplate", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "size", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "sizeGroup", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "startAngle", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "theme", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "title", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "tooltip", null);
__decorate([
    Input()
], DxPieChartComponent.prototype, "type", null);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onDone", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onDrawn", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onExported", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onExporting", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onFileSaving", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onIncidentOccurred", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onLegendClick", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onPointClick", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onPointHoverChanged", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onPointSelectionChanged", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onTooltipHidden", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "onTooltipShown", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "adaptiveLayoutChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "animationChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "commonSeriesSettingsChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "customizeLabelChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "customizePointChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "diameterChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "exportChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "innerRadiusChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "legendChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "loadingIndicatorChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "marginChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "minDiameterChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "paletteChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "paletteExtensionModeChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "pathModifiedChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "pointSelectionModeChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "redrawOnResizeChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "segmentsDirectionChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "seriesChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "seriesTemplateChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "sizeChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "sizeGroupChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "startAngleChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "themeChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "titleChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "tooltipChange", void 0);
__decorate([
    Output()
], DxPieChartComponent.prototype, "typeChange", void 0);
__decorate([
    ContentChildren(DxiSeriesComponent)
], DxPieChartComponent.prototype, "seriesChildren", null);
DxPieChartComponent = __decorate([
    Component({
        selector: 'dx-pie-chart',
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
], DxPieChartComponent);
let DxPieChartModule = class DxPieChartModule {
};
DxPieChartModule = __decorate([
    NgModule({
        imports: [
            DxoAdaptiveLayoutModule,
            DxoAnimationModule,
            DxoCommonSeriesSettingsModule,
            DxoBorderModule,
            DxoHoverStyleModule,
            DxoHatchingModule,
            DxoLabelModule,
            DxoArgumentFormatModule,
            DxoConnectorModule,
            DxoFontModule,
            DxoFormatModule,
            DxoSelectionStyleModule,
            DxoSmallValuesGroupingModule,
            DxoExportModule,
            DxoLegendModule,
            DxoMarginModule,
            DxoTitleModule,
            DxoSubtitleModule,
            DxoLoadingIndicatorModule,
            DxiSeriesModule,
            DxoSeriesTemplateModule,
            DxoSizeModule,
            DxoTooltipModule,
            DxoShadowModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxPieChartComponent
        ],
        exports: [
            DxPieChartComponent,
            DxoAdaptiveLayoutModule,
            DxoAnimationModule,
            DxoCommonSeriesSettingsModule,
            DxoBorderModule,
            DxoHoverStyleModule,
            DxoHatchingModule,
            DxoLabelModule,
            DxoArgumentFormatModule,
            DxoConnectorModule,
            DxoFontModule,
            DxoFormatModule,
            DxoSelectionStyleModule,
            DxoSmallValuesGroupingModule,
            DxoExportModule,
            DxoLegendModule,
            DxoMarginModule,
            DxoTitleModule,
            DxoSubtitleModule,
            DxoLoadingIndicatorModule,
            DxiSeriesModule,
            DxoSeriesTemplateModule,
            DxoSizeModule,
            DxoTooltipModule,
            DxoShadowModule,
            DxTemplateModule
        ]
    })
], DxPieChartModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxPieChartComponent, DxPieChartModule };
//# sourceMappingURL=devextreme-angular-ui-pie-chart.js.map
