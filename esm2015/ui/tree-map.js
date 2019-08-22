/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter } from '@angular/core';
import DxTreeMap from 'devextreme/viz/tree_map';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoColorizerModule } from './nested/colorizer';
import { DxoExportModule } from './nested/export';
import { DxoGroupModule } from './nested/group';
import { DxoBorderModule } from './nested/border';
import { DxoHoverStyleModule } from './nested/hover-style';
import { DxoLabelModule } from './nested/label';
import { DxoFontModule } from './nested/font';
import { DxoSelectionStyleModule } from './nested/selection-style';
import { DxoLoadingIndicatorModule } from './nested/loading-indicator';
import { DxoSizeModule } from './nested/size';
import { DxoTileModule } from './nested/tile';
import { DxoTitleModule } from './nested/title';
import { DxoMarginModule } from './nested/margin';
import { DxoSubtitleModule } from './nested/subtitle';
import { DxoTooltipModule } from './nested/tooltip';
import { DxoFormatModule } from './nested/format';
import { DxoShadowModule } from './nested/shadow';
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeMapComponent.prototype, "childrenField", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeMapComponent.prototype, "colorField", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeMapComponent.prototype, "colorizer", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeMapComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeMapComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeMapComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeMapComponent.prototype, "export", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeMapComponent.prototype, "group", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeMapComponent.prototype, "hoverEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeMapComponent.prototype, "idField", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeMapComponent.prototype, "interactWithGroup", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeMapComponent.prototype, "labelField", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeMapComponent.prototype, "layoutAlgorithm", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeMapComponent.prototype, "layoutDirection", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeMapComponent.prototype, "loadingIndicator", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxTreeMapComponent.prototype, "maxDepth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeMapComponent.prototype, "parentField", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeMapComponent.prototype, "pathModified", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeMapComponent.prototype, "redrawOnResize", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeMapComponent.prototype, "resolveLabelOverflow", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxTreeMapComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeMapComponent.prototype, "selectionMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeMapComponent.prototype, "size", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeMapComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeMapComponent.prototype, "tile", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeMapComponent.prototype, "title", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxTreeMapComponent.prototype, "tooltip", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxTreeMapComponent.prototype, "valueField", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onDrawn", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onDrill", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onExported", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onExporting", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onFileSaving", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onHoverChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onIncidentOccurred", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onNodesInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onNodesRendering", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "onSelectionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "childrenFieldChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "colorFieldChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "colorizerChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "dataSourceChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "exportChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "groupChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "hoverEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "idFieldChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "interactWithGroupChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "labelFieldChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "layoutAlgorithmChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "layoutDirectionChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "loadingIndicatorChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "maxDepthChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "parentFieldChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "pathModifiedChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "redrawOnResizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "resolveLabelOverflowChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "selectionModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "sizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "themeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "tileChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "titleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "tooltipChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxTreeMapComponent.prototype, "valueFieldChange", void 0);
DxTreeMapComponent = tslib_1.__decorate([
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
    tslib_1.__param(7, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
        WatcherHelper,
        IterableDifferHelper, NestedOptionHost,
        TransferState, Object])
], DxTreeMapComponent);
export { DxTreeMapComponent };
let DxTreeMapModule = class DxTreeMapModule {
};
DxTreeMapModule = tslib_1.__decorate([
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
export { DxTreeMapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tYXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS90cmVlLW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBWXBDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBSWYsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxTQUFTLE1BQU0seUJBQXlCLENBQUM7QUFHaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JB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ekIsYUFBYTtZQUNiLGFBQWE7WUFDYixjQUFjO1lBQ2QsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGVBQWU7WUFDZixnQkFBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csZUFBZSxDQUFJO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4VHJlZU1hcCBmcm9tICdkZXZleHRyZW1lL3Zpei90cmVlX21hcCc7XHJcblxyXG5cclxuaW1wb3J0IHsgRHhDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVIb3N0IH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZS1ob3N0JztcclxuaW1wb3J0IHsgRHhJbnRlZ3JhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvaW50ZWdyYXRpb24nO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBXYXRjaGVySGVscGVyIH0gZnJvbSAnLi4vY29yZS93YXRjaGVyLWhlbHBlcic7XHJcbmltcG9ydCB7IEl0ZXJhYmxlRGlmZmVySGVscGVyIH0gZnJvbSAnLi4vY29yZS9pdGVyYWJsZS1kaWZmZXItaGVscGVyJztcclxuXHJcbmltcG9ydCB7IER4b0NvbG9yaXplck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbG9yaXplcic7XHJcbmltcG9ydCB7IER4b0V4cG9ydE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2V4cG9ydCc7XHJcbmltcG9ydCB7IER4b0dyb3VwTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZ3JvdXAnO1xyXG5pbXBvcnQgeyBEeG9Cb3JkZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9ib3JkZXInO1xyXG5pbXBvcnQgeyBEeG9Ib3ZlclN0eWxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaG92ZXItc3R5bGUnO1xyXG5pbXBvcnQgeyBEeG9MYWJlbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2xhYmVsJztcclxuaW1wb3J0IHsgRHhvRm9udE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ZvbnQnO1xyXG5pbXBvcnQgeyBEeG9TZWxlY3Rpb25TdHlsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NlbGVjdGlvbi1zdHlsZSc7XHJcbmltcG9ydCB7IER4b0xvYWRpbmdJbmRpY2F0b3JNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sb2FkaW5nLWluZGljYXRvcic7XHJcbmltcG9ydCB7IER4b1NpemVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zaXplJztcclxuaW1wb3J0IHsgRHhvVGlsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RpbGUnO1xyXG5pbXBvcnQgeyBEeG9UaXRsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RpdGxlJztcclxuaW1wb3J0IHsgRHhvTWFyZ2luTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWFyZ2luJztcclxuaW1wb3J0IHsgRHhvU3VidGl0bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zdWJ0aXRsZSc7XHJcbmltcG9ydCB7IER4b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuL25lc3RlZC90b29sdGlwJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9ybWF0JztcclxuaW1wb3J0IHsgRHhvU2hhZG93TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2hhZG93JztcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRyZWVNYXAgaXMgYSB3aWRnZXQgdGhhdCBkaXNwbGF5cyBoaWVyYXJjaGljYWwgZGF0YSBieSB1c2luZyBuZXN0ZWQgcmVjdGFuZ2xlcy5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC10cmVlLW1hcCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsgJyA6aG9zdCB7ICBkaXNwbGF5OiBibG9jazsgfSddLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgV2F0Y2hlckhlbHBlcixcclxuICAgICAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgIEl0ZXJhYmxlRGlmZmVySGVscGVyXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFRyZWVNYXBDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeFRyZWVNYXA7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBmaWVsZCB0aGF0IHByb3ZpZGVzIG5lc3RlZCBpdGVtcyBmb3IgYSBncm91cC4gQXBwbGllcyB0byBoaWVyYXJjaGljYWwgZGF0YSBzb3VyY2VzIG9ubHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2hpbGRyZW5GaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NoaWxkcmVuRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCBjaGlsZHJlbkZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NoaWxkcmVuRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBmaWVsZCB0aGF0IHByb3ZpZGVzIGNvbG9ycyBmb3IgdGlsZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sb3JGaWVsZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbG9yRmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2xvckZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbG9yRmllbGQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFuYWdlcyB0aGUgY29sb3Igc2V0dGluZ3MuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sb3JpemVyKCk6IHsgY29sb3JDb2RlRmllbGQ/OiBzdHJpbmcsIGNvbG9yaXplR3JvdXBzPzogYm9vbGVhbiwgcGFsZXR0ZT86IHN0cmluZyB8IEFycmF5PHN0cmluZz4sIHBhbGV0dGVFeHRlbnNpb25Nb2RlPzogc3RyaW5nLCByYW5nZT86IEFycmF5PG51bWJlcj4sIHR5cGU/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sb3JpemVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sb3JpemVyKHZhbHVlOiB7IGNvbG9yQ29kZUZpZWxkPzogc3RyaW5nLCBjb2xvcml6ZUdyb3Vwcz86IGJvb2xlYW4sIHBhbGV0dGU/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCBwYWxldHRlRXh0ZW5zaW9uTW9kZT86IHN0cmluZywgcmFuZ2U/OiBBcnJheTxudW1iZXI+LCB0eXBlPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbG9yaXplcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kcyB0aGUgd2lkZ2V0IHRvIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YVNvdXJjZSgpOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFTb3VyY2UnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhU291cmNlKHZhbHVlOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFTb3VyY2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB0aGUgdXNlciBpbnRlcmFjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNhYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgZXhwb3J0aW5nIGFuZCBwcmludGluZyBmZWF0dXJlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBleHBvcnQoKTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgZm9ybWF0cz86IEFycmF5PHN0cmluZz4sIG1hcmdpbj86IG51bWJlciwgcHJpbnRpbmdFbmFibGVkPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwb3J0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwb3J0KHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBmb3JtYXRzPzogQXJyYXk8c3RyaW5nPiwgbWFyZ2luPzogbnVtYmVyLCBwcmludGluZ0VuYWJsZWQ/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdleHBvcnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBncm91cHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JvdXAoKTogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgaGVhZGVySGVpZ2h0PzogbnVtYmVyLCBob3ZlckVuYWJsZWQ/OiBib29sZWFuLCBob3ZlclN0eWxlPzogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZyB9LCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgc2VsZWN0aW9uU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nIH0gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXAnKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cCh2YWx1ZTogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgaGVhZGVySGVpZ2h0PzogbnVtYmVyLCBob3ZlckVuYWJsZWQ/OiBib29sZWFuLCBob3ZlclN0eWxlPzogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZyB9LCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgc2VsZWN0aW9uU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nIH0gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JvdXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGlsZXMgYW5kIGdyb3VwcyBjaGFuZ2UgdGhlaXIgc3R5bGUgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIHRoZW0uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaG92ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvdmVyRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG92ZXJFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzb3VyY2UgZmllbGQgdGhhdCBwcm92aWRlcyBJRHMgZm9yIGl0ZW1zLiBBcHBsaWVzIHRvIHBsYWluIGRhdGEgc291cmNlcyBvbmx5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGlkRmllbGQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpZEZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaWRGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpZEZpZWxkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB1c2VyIHdpbGwgaW50ZXJhY3Qgd2l0aCBhIHNpbmdsZSB0aWxlIG9yIGl0cyBncm91cC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpbnRlcmFjdFdpdGhHcm91cCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpbnRlcmFjdFdpdGhHcm91cCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGludGVyYWN0V2l0aEdyb3VwKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpbnRlcmFjdFdpdGhHcm91cCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc291cmNlIGZpZWxkIHRoYXQgcHJvdmlkZXMgdGV4dHMgZm9yIHRpbGUgYW5kIGdyb3VwIGxhYmVscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsYWJlbEZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbGFiZWxGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxhYmVsRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbGFiZWxGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGxheW91dCBhbGdvcml0aG0uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGF5b3V0QWxnb3JpdGhtKCk6IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsYXlvdXRBbGdvcml0aG0nKTtcclxuICAgIH1cclxuICAgIHNldCBsYXlvdXRBbGdvcml0aG0odmFsdWU6IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsYXlvdXRBbGdvcml0aG0nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIGl0ZW1zIHdpbGwgYmUgbGFpZCBvdXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGF5b3V0RGlyZWN0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbGF5b3V0RGlyZWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGF5b3V0RGlyZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xheW91dERpcmVjdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBsb2FkaW5nIGluZGljYXRvci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsb2FkaW5nSW5kaWNhdG9yKCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvYWRpbmdJbmRpY2F0b3InKTtcclxuICAgIH1cclxuICAgIHNldCBsb2FkaW5nSW5kaWNhdG9yKHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBzaG93PzogYm9vbGVhbiwgdGV4dD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2FkaW5nSW5kaWNhdG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBob3cgbWFueSBoaWVyYXJjaGljYWwgbGV2ZWxzIG11c3QgYmUgdmlzdWFsaXplZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhEZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heERlcHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWF4RGVwdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4RGVwdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBmaWVsZCB0aGF0IHByb3ZpZGVzIHBhcmVudCBJRHMgZm9yIGl0ZW1zLiBBcHBsaWVzIHRvIHBsYWluIGRhdGEgc291cmNlcyBvbmx5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhcmVudEZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFyZW50RmllbGQnKTtcclxuICAgIH1cclxuICAgIHNldCBwYXJlbnRGaWVsZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYXJlbnRGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGUgd2lkZ2V0IHRoYXQgaXQgaXMgZW1iZWRkZWQgaW50byBhbiBIVE1MIHBhZ2UgdGhhdCB1c2VzIGEgdGFnIG1vZGlmeWluZyB0aGUgcGF0aC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYXRoTW9kaWZpZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGF0aE1vZGlmaWVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGF0aE1vZGlmaWVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYXRoTW9kaWZpZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVkcmF3IHRoZSB3aWRnZXQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgcGFyZW50IGJyb3dzZXIgd2luZG93IGNoYW5nZXMgb3IgYSBtb2JpbGUgZGV2aWNlIHJvdGF0ZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVkcmF3T25SZXNpemUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVkcmF3T25SZXNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCByZWRyYXdPblJlc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVkcmF3T25SZXNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoZSB0aWxlLmxhYmVsLnRleHRPdmVyZmxvdyBvcHRpb24gaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZXNvbHZlTGFiZWxPdmVyZmxvdygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jlc29sdmVMYWJlbE92ZXJmbG93Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVzb2x2ZUxhYmVsT3ZlcmZsb3codmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVzb2x2ZUxhYmVsT3ZlcmZsb3cnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhIHNpbmdsZSBvciBtdWx0aXBsZSBub2RlcyBjYW4gYmUgaW4gdGhlIHNlbGVjdGVkIHN0YXRlIHNpbXVsdGFuZW91c2x5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGlvbk1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3Rpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0aW9uTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3Rpb25Nb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgc2l6ZSBpbiBwaXhlbHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2l6ZSgpOiB7IGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNpemUodmFsdWU6IHsgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIG5hbWUgb2YgdGhlIHRoZW1lIHRoZSB3aWRnZXQgdXNlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aGVtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RoZW1lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGhlbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aWxlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aWxlKCk6IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhvdmVyU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nIH0sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgc2VsZWN0aW9uU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nIH0gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGlsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpbGUodmFsdWU6IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhvdmVyU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nIH0sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgc2VsZWN0aW9uU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nIH0gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGlsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSB3aWRnZXQncyB0aXRsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aXRsZSgpOiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RpdGxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGl0bGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0b29sdGlwcyAtIHNtYWxsIHBvcC11cCByZWN0YW5nbGVzIHRoYXQgZGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCBhIGRhdGEtdmlzdWFsaXppbmcgd2lkZ2V0IGVsZW1lbnQgYmVpbmcgcHJlc3NlZCBvciBob3ZlcmVkIG92ZXIgd2l0aCB0aGUgbW91c2UgcG9pbnRlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0b29sdGlwKCk6IHsgYXJyb3dMZW5ndGg/OiBudW1iZXIsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBjb250YWluZXI/OiBFbGVtZW50IHwgSlF1ZXJ5LCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGN1c3RvbWl6ZVRvb2x0aXA/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc2hhZG93PzogeyBibHVyPzogbnVtYmVyLCBjb2xvcj86IHN0cmluZywgb2Zmc2V0WD86IG51bWJlciwgb2Zmc2V0WT86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciB9LCB6SW5kZXg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG9vbHRpcCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvb2x0aXAodmFsdWU6IHsgYXJyb3dMZW5ndGg/OiBudW1iZXIsIGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nLCBjb250YWluZXI/OiBFbGVtZW50IHwgSlF1ZXJ5LCBjb3JuZXJSYWRpdXM/OiBudW1iZXIsIGN1c3RvbWl6ZVRvb2x0aXA/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc2hhZG93PzogeyBibHVyPzogbnVtYmVyLCBjb2xvcj86IHN0cmluZywgb2Zmc2V0WD86IG51bWJlciwgb2Zmc2V0WT86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciB9LCB6SW5kZXg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndG9vbHRpcCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc291cmNlIGZpZWxkIHRoYXQgcHJvdmlkZXMgdmFsdWVzIGZvciB0aWxlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZUZpZWxkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVGaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlRmllbGQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVGaWVsZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgbm9kZSBpcyBjbGlja2VkIG9yIHRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIHJlbmRlcmluZyBoYXMgZmluaXNoZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRyYXduOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgdXNlciBkcmlsbHMgdXAgb3IgZG93bi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRHJpbGw6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIHRoZSB3aWRnZXQgaXMgZXhwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkV4cG9ydGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBleHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRXhwb3J0aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYSBmaWxlIHdpdGggZXhwb3J0ZWQgd2lkZ2V0IGlzIHNhdmVkIHRvIHRoZSB1c2VyJ3MgbG9jYWwgc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRmlsZVNhdmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHBvaW50ZXIgZW50ZXJzIG9yIGxlYXZlcyBhIG5vZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkhvdmVyQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhbiBlcnJvciBvciB3YXJuaW5nIG9jY3Vycy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSW5jaWRlbnRPY2N1cnJlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHVzZWQgaW4gSmF2YVNjcmlwdCBmcmFtZXdvcmtzIHRvIHNhdmUgdGhlIHdpZGdldCBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSW5pdGlhbGl6ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9ubHkgb25jZSwgYWZ0ZXIgdGhlIG5vZGVzIGFyZSBpbml0aWFsaXplZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uTm9kZXNJbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSBub2RlcyBhcmUgZGlzcGxheWVkIGFuZCBlYWNoIHRpbWUgdGhlIGNvbGxlY3Rpb24gb2YgYWN0aXZlIG5vZGVzIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk5vZGVzUmVuZGVyaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIG5vZGUgaXMgc2VsZWN0ZWQgb3Igc2VsZWN0aW9uIGlzIGNhbmNlbGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNoaWxkcmVuRmllbGRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjaGlsZHJlbkZpZWxkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbG9yRmllbGRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2xvckZpZWxkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbG9yaXplckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbG9yaXplckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29sb3JDb2RlRmllbGQ/OiBzdHJpbmcsIGNvbG9yaXplR3JvdXBzPzogYm9vbGVhbiwgcGFsZXR0ZT86IHN0cmluZyB8IEFycmF5PHN0cmluZz4sIHBhbGV0dGVFeHRlbnNpb25Nb2RlPzogc3RyaW5nLCByYW5nZT86IEFycmF5PG51bWJlcj4sIHR5cGU/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhU291cmNlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YVNvdXJjZUNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGV4cG9ydENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGV4cG9ydENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGZvcm1hdHM/OiBBcnJheTxzdHJpbmc+LCBtYXJnaW4/OiBudW1iZXIsIHByaW50aW5nRW5hYmxlZD86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZ3JvdXBDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBncm91cENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhlYWRlckhlaWdodD86IG51bWJlciwgaG92ZXJFbmFibGVkPzogYm9vbGVhbiwgaG92ZXJTdHlsZT86IHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcgfSwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHNlbGVjdGlvblN0eWxlPzogeyBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZyB9IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaG92ZXJFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaG92ZXJFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBpZEZpZWxkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaWRGaWVsZENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBpbnRlcmFjdFdpdGhHcm91cENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGludGVyYWN0V2l0aEdyb3VwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsYWJlbEZpZWxkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbGFiZWxGaWVsZENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsYXlvdXRBbGdvcml0aG1DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBsYXlvdXRBbGdvcml0aG1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsYXlvdXREaXJlY3Rpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBsYXlvdXREaXJlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbG9hZGluZ0luZGljYXRvckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGxvYWRpbmdJbmRpY2F0b3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBzaG93PzogYm9vbGVhbiwgdGV4dD86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1heERlcHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWF4RGVwdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcGFyZW50RmllbGRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYXJlbnRGaWVsZENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYXRoTW9kaWZpZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYXRoTW9kaWZpZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlZHJhd09uUmVzaXplQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVkcmF3T25SZXNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlc29sdmVMYWJlbE92ZXJmbG93Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVzb2x2ZUxhYmVsT3ZlcmZsb3dDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGlvbk1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25Nb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNpemVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGhlbWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0aGVtZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0aWxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGlsZUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGhvdmVyU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nIH0sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSwgc2VsZWN0aW9uU3R5bGU/OiB7IGJvcmRlcj86IHsgY29sb3I/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0sIGNvbG9yPzogc3RyaW5nIH0gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0aXRsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRpdGxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRvb2x0aXBDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0b29sdGlwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhcnJvd0xlbmd0aD86IG51bWJlciwgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnRhaW5lcj86IEVsZW1lbnQgfCBKUXVlcnksIGNvcm5lclJhZGl1cz86IG51bWJlciwgY3VzdG9taXplVG9vbHRpcD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzaGFkb3c/OiB7IGJsdXI/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nLCBvZmZzZXRYPzogbnVtYmVyLCBvZmZzZXRZPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyIH0sIHpJbmRleD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbHVlRmllbGRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUZpZWxkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX3dhdGNoZXJIZWxwZXI6IFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX2lkaDogSXRlcmFibGVEaWZmZXJIZWxwZXIsIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXHJcbiAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IGFueSkge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBuZ1pvbmUsIHRlbXBsYXRlSG9zdCwgX3dhdGNoZXJIZWxwZXIsIHRyYW5zZmVyU3RhdGUsIHBsYXRmb3JtSWQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjbGljaycsIGVtaXQ6ICdvbkNsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkcmF3bicsIGVtaXQ6ICdvbkRyYXduJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2RyaWxsJywgZW1pdDogJ29uRHJpbGwnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZXhwb3J0ZWQnLCBlbWl0OiAnb25FeHBvcnRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRpbmcnLCBlbWl0OiAnb25FeHBvcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZmlsZVNhdmluZycsIGVtaXQ6ICdvbkZpbGVTYXZpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaG92ZXJDaGFuZ2VkJywgZW1pdDogJ29uSG92ZXJDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luY2lkZW50T2NjdXJyZWQnLCBlbWl0OiAnb25JbmNpZGVudE9jY3VycmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luaXRpYWxpemVkJywgZW1pdDogJ29uSW5pdGlhbGl6ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnbm9kZXNJbml0aWFsaXplZCcsIGVtaXQ6ICdvbk5vZGVzSW5pdGlhbGl6ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnbm9kZXNSZW5kZXJpbmcnLCBlbWl0OiAnb25Ob2Rlc1JlbmRlcmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdzZWxlY3Rpb25DaGFuZ2VkJywgZW1pdDogJ29uU2VsZWN0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY2hpbGRyZW5GaWVsZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sb3JGaWVsZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sb3JpemVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhU291cmNlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2V4cG9ydENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hvdmVyRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaWRGaWVsZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaW50ZXJhY3RXaXRoR3JvdXBDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2xhYmVsRmllbGRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2xheW91dEFsZ29yaXRobUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbGF5b3V0RGlyZWN0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdsb2FkaW5nSW5kaWNhdG9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXhEZXB0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGFyZW50RmllbGRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BhdGhNb2RpZmllZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVkcmF3T25SZXNpemVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Jlc29sdmVMYWJlbE92ZXJmbG93Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWxlY3Rpb25Nb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaXplQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0aGVtZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGlsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGl0bGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Rvb2x0aXBDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlRmllbGRDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5faWRoLnNldEhvc3QodGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHhUcmVlTWFwKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2RhdGFTb3VyY2UnLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENoYW5nZXMocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKCEocHJvcCBpbiB0aGlzLl9vcHRpb25zVG9VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkaC5zZXR1cChwcm9wLCBjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdkYXRhU291cmNlJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4b0NvbG9yaXplck1vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0dyb3VwTW9kdWxlLFxyXG4gICAgRHhvQm9yZGVyTW9kdWxlLFxyXG4gICAgRHhvSG92ZXJTdHlsZU1vZHVsZSxcclxuICAgIER4b0xhYmVsTW9kdWxlLFxyXG4gICAgRHhvRm9udE1vZHVsZSxcclxuICAgIER4b1NlbGVjdGlvblN0eWxlTW9kdWxlLFxyXG4gICAgRHhvTG9hZGluZ0luZGljYXRvck1vZHVsZSxcclxuICAgIER4b1NpemVNb2R1bGUsXHJcbiAgICBEeG9UaWxlTW9kdWxlLFxyXG4gICAgRHhvVGl0bGVNb2R1bGUsXHJcbiAgICBEeG9NYXJnaW5Nb2R1bGUsXHJcbiAgICBEeG9TdWJ0aXRsZU1vZHVsZSxcclxuICAgIER4b1Rvb2x0aXBNb2R1bGUsXHJcbiAgICBEeG9Gb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9TaGFkb3dNb2R1bGUsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4VHJlZU1hcENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhUcmVlTWFwQ29tcG9uZW50LFxyXG4gICAgRHhvQ29sb3JpemVyTW9kdWxlLFxyXG4gICAgRHhvRXhwb3J0TW9kdWxlLFxyXG4gICAgRHhvR3JvdXBNb2R1bGUsXHJcbiAgICBEeG9Cb3JkZXJNb2R1bGUsXHJcbiAgICBEeG9Ib3ZlclN0eWxlTW9kdWxlLFxyXG4gICAgRHhvTGFiZWxNb2R1bGUsXHJcbiAgICBEeG9Gb250TW9kdWxlLFxyXG4gICAgRHhvU2VsZWN0aW9uU3R5bGVNb2R1bGUsXHJcbiAgICBEeG9Mb2FkaW5nSW5kaWNhdG9yTW9kdWxlLFxyXG4gICAgRHhvU2l6ZU1vZHVsZSxcclxuICAgIER4b1RpbGVNb2R1bGUsXHJcbiAgICBEeG9UaXRsZU1vZHVsZSxcclxuICAgIER4b01hcmdpbk1vZHVsZSxcclxuICAgIER4b1N1YnRpdGxlTW9kdWxlLFxyXG4gICAgRHhvVG9vbHRpcE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b1NoYWRvd01vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFRyZWVNYXBNb2R1bGUgeyB9XHJcbiJdfQ==