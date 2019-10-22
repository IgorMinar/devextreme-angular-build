import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxSankey from 'devextreme/viz/sankey';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoAdaptiveLayoutModule, DxoExportModule, DxoLabelModule, DxoBorderModule, DxoFontModule, DxoShadowModule, DxoLinkModule, DxoHoverStyleModule, DxoHatchingModule, DxoLoadingIndicatorModule, DxoMarginModule, DxoNodeModule, DxoSizeModule, DxoTitleModule, DxoSubtitleModule, DxoTooltipModule, DxoFormatModule } from 'devextreme-angular/ui/nested';

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
 * The Sankey is a widget that visualizes the flow magnitude between value sets. The values being connected are called nodes; the connections - links. The higher the flow magnitude, the wider the link is.
 */
let DxSankeyComponent = class DxSankeyComponent extends DxComponent {
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
            { subscribe: 'linkClick', emit: 'onLinkClick' },
            { subscribe: 'linkHoverChanged', emit: 'onLinkHoverChanged' },
            { subscribe: 'nodeClick', emit: 'onNodeClick' },
            { subscribe: 'nodeHoverChanged', emit: 'onNodeHoverChanged' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'alignmentChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'hoverEnabledChange' },
            { emit: 'labelChange' },
            { emit: 'linkChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'nodeChange' },
            { emit: 'paletteChange' },
            { emit: 'paletteExtensionModeChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'sizeChange' },
            { emit: 'sortDataChange' },
            { emit: 'sourceFieldChange' },
            { emit: 'targetFieldChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'weightFieldChange' }
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
     * Aligns node columns vertically.
     */
    get alignment() {
        return this._getOption('alignment');
    }
    set alignment(value) {
        this._setOption('alignment', value);
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
     * Specifies whether nodes and links change their style when they are hovered over or pressed.
     */
    get hoverEnabled() {
        return this._getOption('hoverEnabled');
    }
    set hoverEnabled(value) {
        this._setOption('hoverEnabled', value);
    }
    /**
     * Configures sankey nodes' labels.
     */
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    /**
     * Configures sankey links' appearance.
     */
    get link() {
        return this._getOption('link');
    }
    set link(value) {
        this._setOption('link', value);
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
     * Configures sankey nodes' appearance.
     */
    get node() {
        return this._getOption('node');
    }
    set node(value) {
        this._setOption('node', value);
    }
    /**
     * Sets the palette to be used to colorize sankey nodes.
     */
    get palette() {
        return this._getOption('palette');
    }
    set palette(value) {
        this._setOption('palette', value);
    }
    /**
     * Specifies how to extend the palette when it contains less colors than the number of sankey nodes.
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
     * Specifies nodes' sorting order in their columns.
     */
    get sortData() {
        return this._getOption('sortData');
    }
    set sortData(value) {
        this._setOption('sortData', value);
    }
    /**
     * Specifies which data source field provides links' source nodes.
     */
    get sourceField() {
        return this._getOption('sourceField');
    }
    set sourceField(value) {
        this._setOption('sourceField', value);
    }
    /**
     * Specifies which data source field provides links' target nodes.
     */
    get targetField() {
        return this._getOption('targetField');
    }
    set targetField(value) {
        this._setOption('targetField', value);
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
     * Specifies which data source field provides links' weights.
     */
    get weightField() {
        return this._getOption('weightField');
    }
    set weightField(value) {
        this._setOption('weightField', value);
    }
    _createInstance(element, options) {
        return new DxSankey(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('alignment', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('alignment');
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
DxSankeyComponent.ctorParameters = () => [
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
], DxSankeyComponent.prototype, "adaptiveLayout", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "alignment", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "export", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "hoverEnabled", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "label", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "link", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "loadingIndicator", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "margin", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "node", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "palette", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "paletteExtensionMode", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "pathModified", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "redrawOnResize", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "size", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "sortData", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "sourceField", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "targetField", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "theme", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "title", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "tooltip", null);
__decorate([
    Input()
], DxSankeyComponent.prototype, "weightField", null);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onDrawn", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onExported", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onExporting", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onFileSaving", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onIncidentOccurred", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onLinkClick", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onLinkHoverChanged", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onNodeClick", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onNodeHoverChanged", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "adaptiveLayoutChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "alignmentChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "exportChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "hoverEnabledChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "labelChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "linkChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "loadingIndicatorChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "marginChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "nodeChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "paletteChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "paletteExtensionModeChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "pathModifiedChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "redrawOnResizeChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "sizeChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "sortDataChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "sourceFieldChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "targetFieldChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "themeChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "titleChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "tooltipChange", void 0);
__decorate([
    Output()
], DxSankeyComponent.prototype, "weightFieldChange", void 0);
DxSankeyComponent = __decorate([
    Component({
        selector: 'dx-sankey',
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
], DxSankeyComponent);
let DxSankeyModule = class DxSankeyModule {
};
DxSankeyModule = __decorate([
    NgModule({
        imports: [
            DxoAdaptiveLayoutModule,
            DxoExportModule,
            DxoLabelModule,
            DxoBorderModule,
            DxoFontModule,
            DxoShadowModule,
            DxoLinkModule,
            DxoHoverStyleModule,
            DxoHatchingModule,
            DxoLoadingIndicatorModule,
            DxoMarginModule,
            DxoNodeModule,
            DxoSizeModule,
            DxoTitleModule,
            DxoSubtitleModule,
            DxoTooltipModule,
            DxoFormatModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxSankeyComponent
        ],
        exports: [
            DxSankeyComponent,
            DxoAdaptiveLayoutModule,
            DxoExportModule,
            DxoLabelModule,
            DxoBorderModule,
            DxoFontModule,
            DxoShadowModule,
            DxoLinkModule,
            DxoHoverStyleModule,
            DxoHatchingModule,
            DxoLoadingIndicatorModule,
            DxoMarginModule,
            DxoNodeModule,
            DxoSizeModule,
            DxoTitleModule,
            DxoSubtitleModule,
            DxoTooltipModule,
            DxoFormatModule,
            DxTemplateModule
        ]
    })
], DxSankeyModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxSankeyComponent, DxSankeyModule };
//# sourceMappingURL=devextreme-angular-ui-sankey.js.map
