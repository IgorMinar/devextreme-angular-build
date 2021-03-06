import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxVectorMap from 'devextreme/viz/vector_map';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiLayerComponent, DxiLegendComponent, DxoBackgroundModule, DxoControlBarModule, DxoExportModule, DxiLayerModule, DxoLabelModule, DxoFontModule, DxiLegendModule, DxoBorderModule, DxoMarginModule, DxoSourceModule, DxoTitleModule, DxoSubtitleModule, DxoLoadingIndicatorModule, DxoSizeModule, DxoTooltipModule, DxoShadowModule } from 'devextreme-angular/ui/nested';

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
 * The VectorMap is a widget that visualizes geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.
 */
let DxVectorMapComponent = class DxVectorMapComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'centerChanged', emit: 'onCenterChanged' },
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'zoomFactorChanged', emit: 'onZoomFactorChanged' },
            { emit: 'backgroundChange' },
            { emit: 'boundsChange' },
            { emit: 'centerChange' },
            { emit: 'controlBarChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'layersChange' },
            { emit: 'legendsChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'maxZoomFactorChange' },
            { emit: 'panningEnabledChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'projectionChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'touchEnabledChange' },
            { emit: 'wheelEnabledChange' },
            { emit: 'zoomFactorChange' },
            { emit: 'zoomingEnabledChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the options for the map background.
     */
    get background() {
        return this._getOption('background');
    }
    set background(value) {
        this._setOption('background', value);
    }
    /**
     * Specifies the positioning of a map in geographical coordinates.
     */
    get bounds() {
        return this._getOption('bounds');
    }
    set bounds(value) {
        this._setOption('bounds', value);
    }
    /**
     * Specifies the geographical coordinates of the center for a map.
     */
    get center() {
        return this._getOption('center');
    }
    set center(value) {
        this._setOption('center', value);
    }
    /**
     * Configures the control bar.
     */
    get controlBar() {
        return this._getOption('controlBar');
    }
    set controlBar(value) {
        this._setOption('controlBar', value);
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
     * Specifies options for VectorMap widget layers.
     */
    get layers() {
        return this._getOption('layers');
    }
    set layers(value) {
        this._setOption('layers', value);
    }
    /**
     * Configures map legends.
     */
    get legends() {
        return this._getOption('legends');
    }
    set legends(value) {
        this._setOption('legends', value);
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
     * Specifies a map's maximum zoom factor.
     */
    get maxZoomFactor() {
        return this._getOption('maxZoomFactor');
    }
    set maxZoomFactor(value) {
        this._setOption('maxZoomFactor', value);
    }
    /**
     * Disables the panning capability.
     */
    get panningEnabled() {
        return this._getOption('panningEnabled');
    }
    set panningEnabled(value) {
        this._setOption('panningEnabled', value);
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
     * Specifies the map projection.
     */
    get projection() {
        return this._getOption('projection');
    }
    set projection(value) {
        this._setOption('projection', value);
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
     * Specifies the widget's size in pixels.
     */
    get size() {
        return this._getOption('size');
    }
    set size(value) {
        this._setOption('size', value);
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
     * Specifies whether the map should respond to touch gestures.
     */
    get touchEnabled() {
        return this._getOption('touchEnabled');
    }
    set touchEnabled(value) {
        this._setOption('touchEnabled', value);
    }
    /**
     * Specifies whether or not the map should respond when a user rolls the mouse wheel.
     */
    get wheelEnabled() {
        return this._getOption('wheelEnabled');
    }
    set wheelEnabled(value) {
        this._setOption('wheelEnabled', value);
    }
    /**
     * Specifies a number that is used to zoom a map initially.
     */
    get zoomFactor() {
        return this._getOption('zoomFactor');
    }
    set zoomFactor(value) {
        this._setOption('zoomFactor', value);
    }
    /**
     * Disables the zooming capability.
     */
    get zoomingEnabled() {
        return this._getOption('zoomingEnabled');
    }
    set zoomingEnabled(value) {
        this._setOption('zoomingEnabled', value);
    }
    get layersChildren() {
        return this._getOption('layers');
    }
    set layersChildren(value) {
        this.setChildren('layers', value);
    }
    get legendsChildren() {
        return this._getOption('legends');
    }
    set legendsChildren(value) {
        this.setChildren('legends', value);
    }
    _createInstance(element, options) {
        return new DxVectorMap(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('bounds', changes);
        this.setupChanges('center', changes);
        this.setupChanges('layers', changes);
        this.setupChanges('legends', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('bounds');
        this._idh.doCheck('center');
        this._idh.doCheck('layers');
        this._idh.doCheck('legends');
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
DxVectorMapComponent.ctorParameters = () => [
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
], DxVectorMapComponent.prototype, "background", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "bounds", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "center", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "controlBar", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "export", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "layers", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "legends", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "loadingIndicator", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "maxZoomFactor", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "panningEnabled", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "pathModified", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "projection", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "redrawOnResize", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "size", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "theme", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "title", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "tooltip", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "touchEnabled", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "wheelEnabled", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "zoomFactor", null);
__decorate([
    Input()
], DxVectorMapComponent.prototype, "zoomingEnabled", null);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onCenterChanged", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onClick", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onDrawn", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onExported", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onExporting", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onFileSaving", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onIncidentOccurred", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onTooltipHidden", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onTooltipShown", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "onZoomFactorChanged", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "backgroundChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "boundsChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "centerChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "controlBarChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "exportChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "layersChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "legendsChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "loadingIndicatorChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "maxZoomFactorChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "panningEnabledChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "pathModifiedChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "projectionChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "redrawOnResizeChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "sizeChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "themeChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "titleChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "tooltipChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "touchEnabledChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "wheelEnabledChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "zoomFactorChange", void 0);
__decorate([
    Output()
], DxVectorMapComponent.prototype, "zoomingEnabledChange", void 0);
__decorate([
    ContentChildren(DxiLayerComponent)
], DxVectorMapComponent.prototype, "layersChildren", null);
__decorate([
    ContentChildren(DxiLegendComponent)
], DxVectorMapComponent.prototype, "legendsChildren", null);
DxVectorMapComponent = __decorate([
    Component({
        selector: 'dx-vector-map',
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
], DxVectorMapComponent);
let DxVectorMapModule = class DxVectorMapModule {
};
DxVectorMapModule = __decorate([
    NgModule({
        imports: [
            DxoBackgroundModule,
            DxoControlBarModule,
            DxoExportModule,
            DxiLayerModule,
            DxoLabelModule,
            DxoFontModule,
            DxiLegendModule,
            DxoBorderModule,
            DxoMarginModule,
            DxoSourceModule,
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
            DxVectorMapComponent
        ],
        exports: [
            DxVectorMapComponent,
            DxoBackgroundModule,
            DxoControlBarModule,
            DxoExportModule,
            DxiLayerModule,
            DxoLabelModule,
            DxoFontModule,
            DxiLegendModule,
            DxoBorderModule,
            DxoMarginModule,
            DxoSourceModule,
            DxoTitleModule,
            DxoSubtitleModule,
            DxoLoadingIndicatorModule,
            DxoSizeModule,
            DxoTooltipModule,
            DxoShadowModule,
            DxTemplateModule
        ]
    })
], DxVectorMapModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxVectorMapComponent, DxVectorMapModule };
//# sourceMappingURL=devextreme-angular-ui-vector-map.js.map
