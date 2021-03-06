import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxBarGauge from 'devextreme/viz/bar_gauge';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
let DxBarGaugeComponent = class DxBarGaugeComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
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
        this._idh.setHost(this);
        optionHost.setHost(this);
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
     * Specifies a color for the remaining segment of the bar's track.
     */
    get backgroundColor() {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value) {
        this._setOption('backgroundColor', value);
    }
    /**
     * Specifies a distance between bars in pixels.
     */
    get barSpacing() {
        return this._getOption('barSpacing');
    }
    set barSpacing(value) {
        this._setOption('barSpacing', value);
    }
    /**
     * Specifies a base value for bars.
     */
    get baseValue() {
        return this._getOption('baseValue');
    }
    set baseValue(value) {
        this._setOption('baseValue', value);
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
     * Specifies an end value for the gauge's invisible scale.
     */
    get endValue() {
        return this._getOption('endValue');
    }
    set endValue(value) {
        this._setOption('endValue', value);
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
     * Defines the shape of the gauge's arc.
     */
    get geometry() {
        return this._getOption('geometry');
    }
    set geometry(value) {
        this._setOption('geometry', value);
    }
    /**
     * Specifies the options of the labels that accompany gauge bars.
     */
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    /**
     * Configures the legend.
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
     * Sets the palette to be used for colorizing bars in the gauge.
     */
    get palette() {
        return this._getOption('palette');
    }
    set palette(value) {
        this._setOption('palette', value);
    }
    /**
     * Specifies what to do with colors in the palette when their number is less than the number of bars in the gauge.
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
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    get redrawOnResize() {
        return this._getOption('redrawOnResize');
    }
    set redrawOnResize(value) {
        this._setOption('redrawOnResize', value);
    }
    /**
     * Defines the radius of the bar that is closest to the center relatively to the radius of the topmost bar.
     */
    get relativeInnerRadius() {
        return this._getOption('relativeInnerRadius');
    }
    set relativeInnerRadius(value) {
        this._setOption('relativeInnerRadius', value);
    }
    /**
     * Specifies how the widget should behave when bar labels overlap: hide certain labels or leave them overlapped.
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
     * Specifies the widget's size in pixels.
     */
    get size() {
        return this._getOption('size');
    }
    set size(value) {
        this._setOption('size', value);
    }
    /**
     * Specifies a start value for the gauge's invisible scale.
     */
    get startValue() {
        return this._getOption('startValue');
    }
    set startValue(value) {
        this._setOption('startValue', value);
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
     * Specifies the array of values to be indicated on a bar gauge.
     */
    get values() {
        return this._getOption('values');
    }
    set values(value) {
        this._setOption('values', value);
    }
    _createInstance(element, options) {
        return new DxBarGauge(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('palette', changes);
        this.setupChanges('values', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('palette');
        this._idh.doCheck('values');
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
DxBarGaugeComponent.ctorParameters = () => [
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
let DxBarGaugeModule = class DxBarGaugeModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxBarGaugeComponent, DxBarGaugeModule };
//# sourceMappingURL=devextreme-angular-ui-bar-gauge.js.map
