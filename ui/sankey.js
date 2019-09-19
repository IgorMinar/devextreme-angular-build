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
import DxSankey from 'devextreme/viz/sankey';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoAdaptiveLayoutModule } from './nested/adaptive-layout';
import { DxoExportModule } from './nested/export';
import { DxoLabelModule } from './nested/label';
import { DxoBorderModule } from './nested/border';
import { DxoFontModule } from './nested/font';
import { DxoShadowModule } from './nested/shadow';
import { DxoLinkModule } from './nested/link';
import { DxoHoverStyleModule } from './nested/hover-style';
import { DxoHatchingModule } from './nested/hatching';
import { DxoLoadingIndicatorModule } from './nested/loading-indicator';
import { DxoMarginModule } from './nested/margin';
import { DxoNodeModule } from './nested/node';
import { DxoSizeModule } from './nested/size';
import { DxoTitleModule } from './nested/title';
import { DxoSubtitleModule } from './nested/subtitle';
import { DxoTooltipModule } from './nested/tooltip';
import { DxoFormatModule } from './nested/format';
/**
 * The Sankey is a widget that visualizes the flow magnitude between value sets. The values being connected are called nodes; the connections - links. The higher the flow magnitude, the wider the link is.
 */
var DxSankeyComponent = (function (_super) {
    __extends(DxSankeyComponent, _super);
    function DxSankeyComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxSankeyComponent.prototype, "adaptiveLayout", {
        get: /**
             * Specifies adaptive layout options.
             */
        function () {
            return this._getOption('adaptiveLayout');
        },
        set: function (value) {
            this._setOption('adaptiveLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "alignment", {
        get: /**
             * Aligns node columns vertically.
             */
        function () {
            return this._getOption('alignment');
        },
        set: function (value) {
            this._setOption('alignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "disabled", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "export", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "hoverEnabled", {
        get: /**
             * Specifies whether nodes and links change their style when they are hovered over or pressed.
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
    Object.defineProperty(DxSankeyComponent.prototype, "label", {
        get: /**
             * Configures sankey nodes' labels.
             */
        function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "link", {
        get: /**
             * Configures sankey links' appearance.
             */
        function () {
            return this._getOption('link');
        },
        set: function (value) {
            this._setOption('link', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "margin", {
        get: /**
             * Generates space around the widget.
             */
        function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "node", {
        get: /**
             * Configures sankey nodes' appearance.
             */
        function () {
            return this._getOption('node');
        },
        set: function (value) {
            this._setOption('node', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "palette", {
        get: /**
             * Sets the palette to be used to colorize sankey nodes.
             */
        function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "paletteExtensionMode", {
        get: /**
             * Specifies how to extend the palette when it contains less colors than the number of sankey nodes.
             */
        function () {
            return this._getOption('paletteExtensionMode');
        },
        set: function (value) {
            this._setOption('paletteExtensionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "size", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "sortData", {
        get: /**
             * Specifies nodes' sorting order in their columns.
             */
        function () {
            return this._getOption('sortData');
        },
        set: function (value) {
            this._setOption('sortData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "sourceField", {
        get: /**
             * Specifies which data source field provides links' source nodes.
             */
        function () {
            return this._getOption('sourceField');
        },
        set: function (value) {
            this._setOption('sourceField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "targetField", {
        get: /**
             * Specifies which data source field provides links' target nodes.
             */
        function () {
            return this._getOption('targetField');
        },
        set: function (value) {
            this._setOption('targetField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSankeyComponent.prototype, "theme", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "title", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxSankeyComponent.prototype, "weightField", {
        get: /**
             * Specifies which data source field provides links' weights.
             */
        function () {
            return this._getOption('weightField');
        },
        set: function (value) {
            this._setOption('weightField', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSankeyComponent.prototype._createInstance = function (element, options) {
        return new DxSankey(element, options);
    };
    DxSankeyComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSankeyComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('alignment', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
    };
    DxSankeyComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxSankeyComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('alignment');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxSankeyComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxSankeyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-sankey',
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
    DxSankeyComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxSankeyComponent.propDecorators = {
        "adaptiveLayout": [{ type: Input },],
        "alignment": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "export": [{ type: Input },],
        "hoverEnabled": [{ type: Input },],
        "label": [{ type: Input },],
        "link": [{ type: Input },],
        "loadingIndicator": [{ type: Input },],
        "margin": [{ type: Input },],
        "node": [{ type: Input },],
        "palette": [{ type: Input },],
        "paletteExtensionMode": [{ type: Input },],
        "pathModified": [{ type: Input },],
        "redrawOnResize": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "size": [{ type: Input },],
        "sortData": [{ type: Input },],
        "sourceField": [{ type: Input },],
        "targetField": [{ type: Input },],
        "theme": [{ type: Input },],
        "title": [{ type: Input },],
        "tooltip": [{ type: Input },],
        "weightField": [{ type: Input },],
        "onDisposing": [{ type: Output },],
        "onDrawn": [{ type: Output },],
        "onExported": [{ type: Output },],
        "onExporting": [{ type: Output },],
        "onFileSaving": [{ type: Output },],
        "onIncidentOccurred": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onLinkClick": [{ type: Output },],
        "onLinkHoverChanged": [{ type: Output },],
        "onNodeClick": [{ type: Output },],
        "onNodeHoverChanged": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "adaptiveLayoutChange": [{ type: Output },],
        "alignmentChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "exportChange": [{ type: Output },],
        "hoverEnabledChange": [{ type: Output },],
        "labelChange": [{ type: Output },],
        "linkChange": [{ type: Output },],
        "loadingIndicatorChange": [{ type: Output },],
        "marginChange": [{ type: Output },],
        "nodeChange": [{ type: Output },],
        "paletteChange": [{ type: Output },],
        "paletteExtensionModeChange": [{ type: Output },],
        "pathModifiedChange": [{ type: Output },],
        "redrawOnResizeChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "sizeChange": [{ type: Output },],
        "sortDataChange": [{ type: Output },],
        "sourceFieldChange": [{ type: Output },],
        "targetFieldChange": [{ type: Output },],
        "themeChange": [{ type: Output },],
        "titleChange": [{ type: Output },],
        "tooltipChange": [{ type: Output },],
        "weightFieldChange": [{ type: Output },],
    };
    return DxSankeyComponent;
}(DxComponent));
export { DxSankeyComponent };
var DxSankeyModule = (function () {
    function DxSankeyModule() {
    }
    DxSankeyModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxSankeyModule;
}());
export { DxSankeyModule };
//# sourceMappingURL=sankey.js.map