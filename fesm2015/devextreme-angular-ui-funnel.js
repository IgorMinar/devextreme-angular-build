import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxFunnel from 'devextreme/viz/funnel';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoAdaptiveLayoutModule, DxoExportModule, DxoItemModule, DxoBorderModule, DxoHoverStyleModule, DxoHatchingModule, DxoSelectionStyleModule, DxoLabelModule, DxoConnectorModule, DxoFontModule, DxoFormatModule, DxoLegendModule, DxoMarginModule, DxoTitleModule, DxoSubtitleModule, DxoLoadingIndicatorModule, DxoSizeModule, DxoTooltipModule, DxoShadowModule } from 'devextreme-angular/ui/nested';

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
 * The Funnel is a widget that visualizes a value at different stages. It helps assess value changes throughout these stages and identify potential issues. The Funnel widget conveys information using different interactive elements (tooltips, labels, legend) and enables you to create not only a funnel, but also a pyramid chart.
 */
let DxFunnelComponent = class DxFunnelComponent extends DxComponent {
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
            { subscribe: 'hoverChanged', emit: 'onHoverChanged' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'legendClick', emit: 'onLegendClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'algorithmChange' },
            { emit: 'argumentFieldChange' },
            { emit: 'colorFieldChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'hoverEnabledChange' },
            { emit: 'invertedChange' },
            { emit: 'itemChange' },
            { emit: 'labelChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'neckHeightChange' },
            { emit: 'neckWidthChange' },
            { emit: 'paletteChange' },
            { emit: 'paletteExtensionModeChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectionModeChange' },
            { emit: 'sizeChange' },
            { emit: 'sortDataChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'valueFieldChange' }
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
     * Specifies the algorithm for building the funnel.
     */
    get algorithm() {
        return this._getOption('algorithm');
    }
    set algorithm(value) {
        this._setOption('algorithm', value);
    }
    /**
     * Specifies which data source field provides arguments for funnel items. The argument identifies a funnel item and represents it on the legend.
     */
    get argumentField() {
        return this._getOption('argumentField');
    }
    set argumentField(value) {
        this._setOption('argumentField', value);
    }
    /**
     * Specifies which data source field provides colors for funnel items. If this field is absent, the palette provides the colors.
     */
    get colorField() {
        return this._getOption('colorField');
    }
    set colorField(value) {
        this._setOption('colorField', value);
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
     * Specifies whether funnel items change their style when a user pauses on them.
     */
    get hoverEnabled() {
        return this._getOption('hoverEnabled');
    }
    set hoverEnabled(value) {
        this._setOption('hoverEnabled', value);
    }
    /**
     * Turns the funnel upside down.
     */
    get inverted() {
        return this._getOption('inverted');
    }
    set inverted(value) {
        this._setOption('inverted', value);
    }
    /**
     * Configures funnel items' appearance.
     */
    get item() {
        return this._getOption('item');
    }
    set item(value) {
        this._setOption('item', value);
    }
    /**
     * Configures funnel item labels.
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
     * Specifies the ratio between the height of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
     */
    get neckHeight() {
        return this._getOption('neckHeight');
    }
    set neckHeight(value) {
        this._setOption('neckHeight', value);
    }
    /**
     * Specifies the ratio between the width of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
     */
    get neckWidth() {
        return this._getOption('neckWidth');
    }
    set neckWidth(value) {
        this._setOption('neckWidth', value);
    }
    /**
     * Sets the palette to be used to colorize funnel items.
     */
    get palette() {
        return this._getOption('palette');
    }
    set palette(value) {
        this._setOption('palette', value);
    }
    /**
     * Specifies what to do with colors in the palette when their number is less than the number of funnel items.
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
     * Specifies how item labels should behave when they overlap.
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
     * Specifies whether a single or multiple funnel items can be in the selected state at a time. Assigning "none" disables the selection feature.
     */
    get selectionMode() {
        return this._getOption('selectionMode');
    }
    set selectionMode(value) {
        this._setOption('selectionMode', value);
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
     * Specifies whether to sort funnel items.
     */
    get sortData() {
        return this._getOption('sortData');
    }
    set sortData(value) {
        this._setOption('sortData', value);
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
     * Configures tooltips - small pop-up rectangles that display information about a data-visualizing widget element being pressed or hovered over with the mouse pointer.
     */
    get tooltip() {
        return this._getOption('tooltip');
    }
    set tooltip(value) {
        this._setOption('tooltip', value);
    }
    /**
     * Specifies which data source field provides values for funnel items. The value defines a funnel item's area.
     */
    get valueField() {
        return this._getOption('valueField');
    }
    set valueField(value) {
        this._setOption('valueField', value);
    }
    _createInstance(element, options) {
        return new DxFunnel(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
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
DxFunnelComponent.ctorParameters = () => [
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
], DxFunnelComponent.prototype, "adaptiveLayout", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "algorithm", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "argumentField", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "colorField", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "export", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "hoverEnabled", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "inverted", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "item", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "label", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "legend", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "loadingIndicator", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "margin", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "neckHeight", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "neckWidth", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "palette", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "paletteExtensionMode", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "pathModified", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "redrawOnResize", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "resolveLabelOverlapping", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "size", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "sortData", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "theme", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "title", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "tooltip", null);
__decorate([
    Input()
], DxFunnelComponent.prototype, "valueField", null);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onDrawn", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onExported", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onExporting", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onFileSaving", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onHoverChanged", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onIncidentOccurred", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onLegendClick", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "adaptiveLayoutChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "algorithmChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "argumentFieldChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "colorFieldChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "exportChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "hoverEnabledChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "invertedChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "itemChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "labelChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "legendChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "loadingIndicatorChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "marginChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "neckHeightChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "neckWidthChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "paletteChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "paletteExtensionModeChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "pathModifiedChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "redrawOnResizeChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "resolveLabelOverlappingChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "selectionModeChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "sizeChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "sortDataChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "themeChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "titleChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "tooltipChange", void 0);
__decorate([
    Output()
], DxFunnelComponent.prototype, "valueFieldChange", void 0);
DxFunnelComponent = __decorate([
    Component({
        selector: 'dx-funnel',
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
], DxFunnelComponent);
let DxFunnelModule = class DxFunnelModule {
};
DxFunnelModule = __decorate([
    NgModule({
        imports: [
            DxoAdaptiveLayoutModule,
            DxoExportModule,
            DxoItemModule,
            DxoBorderModule,
            DxoHoverStyleModule,
            DxoHatchingModule,
            DxoSelectionStyleModule,
            DxoLabelModule,
            DxoConnectorModule,
            DxoFontModule,
            DxoFormatModule,
            DxoLegendModule,
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
            DxFunnelComponent
        ],
        exports: [
            DxFunnelComponent,
            DxoAdaptiveLayoutModule,
            DxoExportModule,
            DxoItemModule,
            DxoBorderModule,
            DxoHoverStyleModule,
            DxoHatchingModule,
            DxoSelectionStyleModule,
            DxoLabelModule,
            DxoConnectorModule,
            DxoFontModule,
            DxoFormatModule,
            DxoLegendModule,
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
], DxFunnelModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxFunnelComponent, DxFunnelModule };
//# sourceMappingURL=devextreme-angular-ui-funnel.js.map
