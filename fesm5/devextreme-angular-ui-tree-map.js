import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxTreeMap from 'devextreme/viz/tree_map';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
var DxTreeMapComponent = /** @class */ (function (_super) {
    __extends(DxTreeMapComponent, _super);
    function DxTreeMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTreeMapComponent.prototype, "childrenField", {
        /**
         * Specifies the name of the data source field that provides nested items for a group. Applies to hierarchical data sources only.
         */
        get: function () {
            return this._getOption('childrenField');
        },
        set: function (value) {
            this._setOption('childrenField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "colorField", {
        /**
         * Specifies the name of the data source field that provides colors for tiles.
         */
        get: function () {
            return this._getOption('colorField');
        },
        set: function (value) {
            this._setOption('colorField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "colorizer", {
        /**
         * Manages the color settings.
         */
        get: function () {
            return this._getOption('colorizer');
        },
        set: function (value) {
            this._setOption('colorizer', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "dataSource", {
        /**
         * Binds the widget to data.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to the user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "export", {
        /**
         * Configures the exporting and printing features.
         */
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "group", {
        /**
         * Configures groups.
         */
        get: function () {
            return this._getOption('group');
        },
        set: function (value) {
            this._setOption('group', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "hoverEnabled", {
        /**
         * Specifies whether tiles and groups change their style when a user pauses on them.
         */
        get: function () {
            return this._getOption('hoverEnabled');
        },
        set: function (value) {
            this._setOption('hoverEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "idField", {
        /**
         * Specifies the name of the data source field that provides IDs for items. Applies to plain data sources only.
         */
        get: function () {
            return this._getOption('idField');
        },
        set: function (value) {
            this._setOption('idField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "interactWithGroup", {
        /**
         * Specifies whether the user will interact with a single tile or its group.
         */
        get: function () {
            return this._getOption('interactWithGroup');
        },
        set: function (value) {
            this._setOption('interactWithGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "labelField", {
        /**
         * Specifies the name of the data source field that provides texts for tile and group labels.
         */
        get: function () {
            return this._getOption('labelField');
        },
        set: function (value) {
            this._setOption('labelField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "layoutAlgorithm", {
        /**
         * Specifies the layout algorithm.
         */
        get: function () {
            return this._getOption('layoutAlgorithm');
        },
        set: function (value) {
            this._setOption('layoutAlgorithm', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "layoutDirection", {
        /**
         * Specifies the direction in which the items will be laid out.
         */
        get: function () {
            return this._getOption('layoutDirection');
        },
        set: function (value) {
            this._setOption('layoutDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "loadingIndicator", {
        /**
         * Configures the loading indicator.
         */
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "maxDepth", {
        /**
         * Specifies how many hierarchical levels must be visualized.
         */
        get: function () {
            return this._getOption('maxDepth');
        },
        set: function (value) {
            this._setOption('maxDepth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "parentField", {
        /**
         * Specifies the name of the data source field that provides parent IDs for items. Applies to plain data sources only.
         */
        get: function () {
            return this._getOption('parentField');
        },
        set: function (value) {
            this._setOption('parentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "pathModified", {
        /**
         * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
         */
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "redrawOnResize", {
        /**
         * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
         */
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "resolveLabelOverflow", {
        /**
         * Use the tile.label.textOverflow option instead.
         */
        get: function () {
            return this._getOption('resolveLabelOverflow');
        },
        set: function (value) {
            this._setOption('resolveLabelOverflow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "selectionMode", {
        /**
         * Specifies whether a single or multiple nodes can be in the selected state simultaneously.
         */
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "size", {
        /**
         * Specifies the widget's size in pixels.
         */
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "theme", {
        /**
         * Sets the name of the theme the widget uses.
         */
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "tile", {
        /**
         * Configures tiles.
         */
        get: function () {
            return this._getOption('tile');
        },
        set: function (value) {
            this._setOption('tile', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "title", {
        /**
         * Configures the widget's title.
         */
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "tooltip", {
        /**
         * Configures tooltips - small pop-up rectangles that display information about a data-visualizing widget element being pressed or hovered over with the mouse pointer.
         */
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "valueField", {
        /**
         * Specifies the name of the data source field that provides values for tiles.
         */
        get: function () {
            return this._getOption('valueField');
        },
        set: function (value) {
            this._setOption('valueField', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTreeMapComponent.prototype._createInstance = function (element, options) {
        return new DxTreeMap(element, options);
    };
    DxTreeMapComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTreeMapComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
    };
    DxTreeMapComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxTreeMapComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxTreeMapComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxTreeMapComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: IterableDifferHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
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
    return DxTreeMapComponent;
}(DxComponent));
var DxTreeMapModule = /** @class */ (function () {
    function DxTreeMapModule() {
    }
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
    return DxTreeMapModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxTreeMapComponent, DxTreeMapModule };
//# sourceMappingURL=devextreme-angular-ui-tree-map.js.map
