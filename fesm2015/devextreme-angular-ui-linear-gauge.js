import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxLinearGauge from 'devextreme/viz/linear_gauge';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
let DxLinearGaugeComponent = class DxLinearGaugeComponent extends DxComponent {
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
     * Specifies the color of the parent page element.
     */
    get containerBackgroundColor() {
        return this._getOption('containerBackgroundColor');
    }
    set containerBackgroundColor(value) {
        this._setOption('containerBackgroundColor', value);
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
     * Specifies the options required to set the geometry of the LinearGauge widget.
     */
    get geometry() {
        return this._getOption('geometry');
    }
    set geometry(value) {
        this._setOption('geometry', value);
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
     * Specifies gauge range container options.
     */
    get rangeContainer() {
        return this._getOption('rangeContainer');
    }
    set rangeContainer(value) {
        this._setOption('rangeContainer', value);
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
     * Specifies the gauge's scale options.
     */
    get scale() {
        return this._getOption('scale');
    }
    set scale(value) {
        this._setOption('scale', value);
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
     * Specifies the appearance options of subvalue indicators.
     */
    get subvalueIndicator() {
        return this._getOption('subvalueIndicator');
    }
    set subvalueIndicator(value) {
        this._setOption('subvalueIndicator', value);
    }
    /**
     * Specifies a set of subvalues to be designated by the subvalue indicators.
     */
    get subvalues() {
        return this._getOption('subvalues');
    }
    set subvalues(value) {
        this._setOption('subvalues', value);
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
     * Specifies the main value on a gauge.
     */
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    /**
     * Specifies the appearance options of the value indicator.
     */
    get valueIndicator() {
        return this._getOption('valueIndicator');
    }
    set valueIndicator(value) {
        this._setOption('valueIndicator', value);
    }
    _createInstance(element, options) {
        return new DxLinearGauge(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('subvalues', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('subvalues');
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
DxLinearGaugeComponent.ctorParameters = () => [
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
let DxLinearGaugeModule = class DxLinearGaugeModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxLinearGaugeComponent, DxLinearGaugeModule };
//# sourceMappingURL=devextreme-angular-ui-linear-gauge.js.map
