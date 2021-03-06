import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxTreeMap from 'devextreme/viz/tree_map';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoColorizerModule, DxoExportModule, DxoGroupModule, DxoBorderModule, DxoHoverStyleModule, DxoLabelModule, DxoFontModule, DxoSelectionStyleModule, DxoLoadingIndicatorModule, DxoSizeModule, DxoTileModule, DxoTitleModule, DxoMarginModule, DxoSubtitleModule, DxoTooltipModule, DxoFormatModule, DxoShadowModule } from 'devextreme-angular/ui/nested';

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
 * The TreeMap is a widget that displays hierarchical data by using nested rectangles.
 */
let DxTreeMapComponent = class DxTreeMapComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'drill', emit: 'onDrill' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'hoverChanged', emit: 'onHoverChanged' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'nodesInitialized', emit: 'onNodesInitialized' },
            { subscribe: 'nodesRendering', emit: 'onNodesRendering' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'childrenFieldChange' },
            { emit: 'colorFieldChange' },
            { emit: 'colorizerChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'groupChange' },
            { emit: 'hoverEnabledChange' },
            { emit: 'idFieldChange' },
            { emit: 'interactWithGroupChange' },
            { emit: 'labelFieldChange' },
            { emit: 'layoutAlgorithmChange' },
            { emit: 'layoutDirectionChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'maxDepthChange' },
            { emit: 'parentFieldChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resolveLabelOverflowChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectionModeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'tileChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'valueFieldChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the name of the data source field that provides nested items for a group. Applies to hierarchical data sources only.
     */
    get childrenField() {
        return this._getOption('childrenField');
    }
    set childrenField(value) {
        this._setOption('childrenField', value);
    }
    /**
     * Specifies the name of the data source field that provides colors for tiles.
     */
    get colorField() {
        return this._getOption('colorField');
    }
    set colorField(value) {
        this._setOption('colorField', value);
    }
    /**
     * Manages the color settings.
     */
    get colorizer() {
        return this._getOption('colorizer');
    }
    set colorizer(value) {
        this._setOption('colorizer', value);
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
     * Configures groups.
     */
    get group() {
        return this._getOption('group');
    }
    set group(value) {
        this._setOption('group', value);
    }
    /**
     * Specifies whether tiles and groups change their style when a user pauses on them.
     */
    get hoverEnabled() {
        return this._getOption('hoverEnabled');
    }
    set hoverEnabled(value) {
        this._setOption('hoverEnabled', value);
    }
    /**
     * Specifies the name of the data source field that provides IDs for items. Applies to plain data sources only.
     */
    get idField() {
        return this._getOption('idField');
    }
    set idField(value) {
        this._setOption('idField', value);
    }
    /**
     * Specifies whether the user will interact with a single tile or its group.
     */
    get interactWithGroup() {
        return this._getOption('interactWithGroup');
    }
    set interactWithGroup(value) {
        this._setOption('interactWithGroup', value);
    }
    /**
     * Specifies the name of the data source field that provides texts for tile and group labels.
     */
    get labelField() {
        return this._getOption('labelField');
    }
    set labelField(value) {
        this._setOption('labelField', value);
    }
    /**
     * Specifies the layout algorithm.
     */
    get layoutAlgorithm() {
        return this._getOption('layoutAlgorithm');
    }
    set layoutAlgorithm(value) {
        this._setOption('layoutAlgorithm', value);
    }
    /**
     * Specifies the direction in which the items will be laid out.
     */
    get layoutDirection() {
        return this._getOption('layoutDirection');
    }
    set layoutDirection(value) {
        this._setOption('layoutDirection', value);
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
     * Specifies how many hierarchical levels must be visualized.
     */
    get maxDepth() {
        return this._getOption('maxDepth');
    }
    set maxDepth(value) {
        this._setOption('maxDepth', value);
    }
    /**
     * Specifies the name of the data source field that provides parent IDs for items. Applies to plain data sources only.
     */
    get parentField() {
        return this._getOption('parentField');
    }
    set parentField(value) {
        this._setOption('parentField', value);
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
     * Use the tile.label.textOverflow option instead.
     */
    get resolveLabelOverflow() {
        return this._getOption('resolveLabelOverflow');
    }
    set resolveLabelOverflow(value) {
        this._setOption('resolveLabelOverflow', value);
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
     * Specifies whether a single or multiple nodes can be in the selected state simultaneously.
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
     * Sets the name of the theme the widget uses.
     */
    get theme() {
        return this._getOption('theme');
    }
    set theme(value) {
        this._setOption('theme', value);
    }
    /**
     * Configures tiles.
     */
    get tile() {
        return this._getOption('tile');
    }
    set tile(value) {
        this._setOption('tile', value);
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
     * Specifies the name of the data source field that provides values for tiles.
     */
    get valueField() {
        return this._getOption('valueField');
    }
    set valueField(value) {
        this._setOption('valueField', value);
    }
    _createInstance(element, options) {
        return new DxTreeMap(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
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
DxTreeMapComponent.ctorParameters = () => [
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
], DxTreeMapComponent.prototype, "childrenField", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "colorField", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "colorizer", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "export", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "group", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "hoverEnabled", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "idField", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "interactWithGroup", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "labelField", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "layoutAlgorithm", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "layoutDirection", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "loadingIndicator", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "maxDepth", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "parentField", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "pathModified", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "redrawOnResize", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "resolveLabelOverflow", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "size", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "theme", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "tile", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "title", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "tooltip", null);
__decorate([
    Input()
], DxTreeMapComponent.prototype, "valueField", null);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onClick", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onDrawn", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onDrill", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onExported", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onExporting", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onFileSaving", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onHoverChanged", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onIncidentOccurred", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onNodesInitialized", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onNodesRendering", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "childrenFieldChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "colorFieldChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "colorizerChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "exportChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "groupChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "hoverEnabledChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "idFieldChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "interactWithGroupChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "labelFieldChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "layoutAlgorithmChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "layoutDirectionChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "loadingIndicatorChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "maxDepthChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "parentFieldChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "pathModifiedChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "redrawOnResizeChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "resolveLabelOverflowChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "selectionModeChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "sizeChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "themeChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "tileChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "titleChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "tooltipChange", void 0);
__decorate([
    Output()
], DxTreeMapComponent.prototype, "valueFieldChange", void 0);
DxTreeMapComponent = __decorate([
    Component({
        selector: 'dx-tree-map',
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
], DxTreeMapComponent);
let DxTreeMapModule = class DxTreeMapModule {
};
DxTreeMapModule = __decorate([
    NgModule({
        imports: [
            DxoColorizerModule,
            DxoExportModule,
            DxoGroupModule,
            DxoBorderModule,
            DxoHoverStyleModule,
            DxoLabelModule,
            DxoFontModule,
            DxoSelectionStyleModule,
            DxoLoadingIndicatorModule,
            DxoSizeModule,
            DxoTileModule,
            DxoTitleModule,
            DxoMarginModule,
            DxoSubtitleModule,
            DxoTooltipModule,
            DxoFormatModule,
            DxoShadowModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxTreeMapComponent
        ],
        exports: [
            DxTreeMapComponent,
            DxoColorizerModule,
            DxoExportModule,
            DxoGroupModule,
            DxoBorderModule,
            DxoHoverStyleModule,
            DxoLabelModule,
            DxoFontModule,
            DxoSelectionStyleModule,
            DxoLoadingIndicatorModule,
            DxoSizeModule,
            DxoTileModule,
            DxoTitleModule,
            DxoMarginModule,
            DxoSubtitleModule,
            DxoTooltipModule,
            DxoFormatModule,
            DxoShadowModule,
            DxTemplateModule
        ]
    })
], DxTreeMapModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxTreeMapComponent, DxTreeMapModule };
//# sourceMappingURL=devextreme-angular-ui-tree-map.js.map
