var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
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
var DxTreeMapComponent = (function (_super) {
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
        get: /**
             * Specifies the name of the data source field that provides nested items for a group. Applies to hierarchical data sources only.
             */
        function () {
            return this._getOption('childrenField');
        },
        set: function (value) {
            this._setOption('childrenField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "colorField", {
        get: /**
             * Specifies the name of the data source field that provides colors for tiles.
             */
        function () {
            return this._getOption('colorField');
        },
        set: function (value) {
            this._setOption('colorField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "colorizer", {
        get: /**
             * Manages the color settings.
             */
        function () {
            return this._getOption('colorizer');
        },
        set: function (value) {
            this._setOption('colorizer', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "dataSource", {
        get: /**
             * Binds the widget to data.
             */
        function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to the user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "export", {
        get: /**
             * Configures the exporting and printing features.
             */
        function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "group", {
        get: /**
             * Configures groups.
             */
        function () {
            return this._getOption('group');
        },
        set: function (value) {
            this._setOption('group', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "hoverEnabled", {
        get: /**
             * Specifies whether tiles and groups change their style when a user pauses on them.
             */
        function () {
            return this._getOption('hoverEnabled');
        },
        set: function (value) {
            this._setOption('hoverEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "idField", {
        get: /**
             * Specifies the name of the data source field that provides IDs for items. Applies to plain data sources only.
             */
        function () {
            return this._getOption('idField');
        },
        set: function (value) {
            this._setOption('idField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "interactWithGroup", {
        get: /**
             * Specifies whether the user will interact with a single tile or its group.
             */
        function () {
            return this._getOption('interactWithGroup');
        },
        set: function (value) {
            this._setOption('interactWithGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "labelField", {
        get: /**
             * Specifies the name of the data source field that provides texts for tile and group labels.
             */
        function () {
            return this._getOption('labelField');
        },
        set: function (value) {
            this._setOption('labelField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "layoutAlgorithm", {
        get: /**
             * Specifies the layout algorithm.
             */
        function () {
            return this._getOption('layoutAlgorithm');
        },
        set: function (value) {
            this._setOption('layoutAlgorithm', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "layoutDirection", {
        get: /**
             * Specifies the direction in which the items will be laid out.
             */
        function () {
            return this._getOption('layoutDirection');
        },
        set: function (value) {
            this._setOption('layoutDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "loadingIndicator", {
        get: /**
             * Configures the loading indicator.
             */
        function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "maxDepth", {
        get: /**
             * Specifies how many hierarchical levels must be visualized.
             */
        function () {
            return this._getOption('maxDepth');
        },
        set: function (value) {
            this._setOption('maxDepth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "parentField", {
        get: /**
             * Specifies the name of the data source field that provides parent IDs for items. Applies to plain data sources only.
             */
        function () {
            return this._getOption('parentField');
        },
        set: function (value) {
            this._setOption('parentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "pathModified", {
        get: /**
             * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
             */
        function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "redrawOnResize", {
        get: /**
             * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
             */
        function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "resolveLabelOverflow", {
        get: /**
             * Use the tile.label.textOverflow option instead.
             */
        function () {
            return this._getOption('resolveLabelOverflow');
        },
        set: function (value) {
            this._setOption('resolveLabelOverflow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "selectionMode", {
        get: /**
             * Specifies whether a single or multiple nodes can be in the selected state simultaneously.
             */
        function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "size", {
        get: /**
             * Specifies the widget's size in pixels.
             */
        function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "theme", {
        get: /**
             * Sets the name of the theme the widget uses.
             */
        function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "tile", {
        get: /**
             * Configures tiles.
             */
        function () {
            return this._getOption('tile');
        },
        set: function (value) {
            this._setOption('tile', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "title", {
        get: /**
             * Configures the widget's title.
             */
        function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "tooltip", {
        get: /**
             * Configures tooltips - small pop-up rectangles that display information about a data-visualizing widget element being pressed or hovered over with the mouse pointer.
             */
        function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "valueField", {
        get: /**
             * Specifies the name of the data source field that provides values for tiles.
             */
        function () {
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
    DxTreeMapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-tree-map',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxTreeMapComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxTreeMapComponent.propDecorators = {
        "childrenField": [{ type: Input },],
        "colorField": [{ type: Input },],
        "colorizer": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "export": [{ type: Input },],
        "group": [{ type: Input },],
        "hoverEnabled": [{ type: Input },],
        "idField": [{ type: Input },],
        "interactWithGroup": [{ type: Input },],
        "labelField": [{ type: Input },],
        "layoutAlgorithm": [{ type: Input },],
        "layoutDirection": [{ type: Input },],
        "loadingIndicator": [{ type: Input },],
        "maxDepth": [{ type: Input },],
        "parentField": [{ type: Input },],
        "pathModified": [{ type: Input },],
        "redrawOnResize": [{ type: Input },],
        "resolveLabelOverflow": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "selectionMode": [{ type: Input },],
        "size": [{ type: Input },],
        "theme": [{ type: Input },],
        "tile": [{ type: Input },],
        "title": [{ type: Input },],
        "tooltip": [{ type: Input },],
        "valueField": [{ type: Input },],
        "onClick": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onDrawn": [{ type: Output },],
        "onDrill": [{ type: Output },],
        "onExported": [{ type: Output },],
        "onExporting": [{ type: Output },],
        "onFileSaving": [{ type: Output },],
        "onHoverChanged": [{ type: Output },],
        "onIncidentOccurred": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onNodesInitialized": [{ type: Output },],
        "onNodesRendering": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onSelectionChanged": [{ type: Output },],
        "childrenFieldChange": [{ type: Output },],
        "colorFieldChange": [{ type: Output },],
        "colorizerChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "exportChange": [{ type: Output },],
        "groupChange": [{ type: Output },],
        "hoverEnabledChange": [{ type: Output },],
        "idFieldChange": [{ type: Output },],
        "interactWithGroupChange": [{ type: Output },],
        "labelFieldChange": [{ type: Output },],
        "layoutAlgorithmChange": [{ type: Output },],
        "layoutDirectionChange": [{ type: Output },],
        "loadingIndicatorChange": [{ type: Output },],
        "maxDepthChange": [{ type: Output },],
        "parentFieldChange": [{ type: Output },],
        "pathModifiedChange": [{ type: Output },],
        "redrawOnResizeChange": [{ type: Output },],
        "resolveLabelOverflowChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "selectionModeChange": [{ type: Output },],
        "sizeChange": [{ type: Output },],
        "themeChange": [{ type: Output },],
        "tileChange": [{ type: Output },],
        "titleChange": [{ type: Output },],
        "tooltipChange": [{ type: Output },],
        "valueFieldChange": [{ type: Output },],
    };
    return DxTreeMapComponent;
}(DxComponent));
export { DxTreeMapComponent };
var DxTreeMapModule = (function () {
    function DxTreeMapModule() {
    }
    DxTreeMapModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxTreeMapModule;
}());
export { DxTreeMapModule };
//# sourceMappingURL=tree-map.js.map