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
import DxFunnel from 'devextreme/viz/funnel';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoAdaptiveLayoutModule } from './nested/adaptive-layout';
import { DxoExportModule } from './nested/export';
import { DxoItemModule } from './nested/item';
import { DxoBorderModule } from './nested/border';
import { DxoHoverStyleModule } from './nested/hover-style';
import { DxoHatchingModule } from './nested/hatching';
import { DxoSelectionStyleModule } from './nested/selection-style';
import { DxoLabelModule } from './nested/label';
import { DxoConnectorModule } from './nested/connector';
import { DxoFontModule } from './nested/font';
import { DxoFormatModule } from './nested/format';
import { DxoLegendModule } from './nested/legend';
import { DxoMarginModule } from './nested/margin';
import { DxoTitleModule } from './nested/title';
import { DxoSubtitleModule } from './nested/subtitle';
import { DxoLoadingIndicatorModule } from './nested/loading-indicator';
import { DxoSizeModule } from './nested/size';
import { DxoTooltipModule } from './nested/tooltip';
import { DxoShadowModule } from './nested/shadow';
/**
 * The Funnel is a widget that visualizes a value at different stages. It helps assess value changes throughout these stages and identify potential issues. The Funnel widget conveys information using different interactive elements (tooltips, labels, legend) and enables you to create not only a funnel, but also a pyramid chart.
 */
var DxFunnelComponent = (function (_super) {
    __extends(DxFunnelComponent, _super);
    function DxFunnelComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxFunnelComponent.prototype, "adaptiveLayout", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "algorithm", {
        get: /**
             * Specifies the algorithm for building the funnel.
             */
        function () {
            return this._getOption('algorithm');
        },
        set: function (value) {
            this._setOption('algorithm', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "argumentField", {
        get: /**
             * Specifies which data source field provides arguments for funnel items. The argument identifies a funnel item and represents it on the legend.
             */
        function () {
            return this._getOption('argumentField');
        },
        set: function (value) {
            this._setOption('argumentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "colorField", {
        get: /**
             * Specifies which data source field provides colors for funnel items. If this field is absent, the palette provides the colors.
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
    Object.defineProperty(DxFunnelComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "disabled", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "export", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "hoverEnabled", {
        get: /**
             * Specifies whether funnel items change their style when a user pauses on them.
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
    Object.defineProperty(DxFunnelComponent.prototype, "inverted", {
        get: /**
             * Turns the funnel upside down.
             */
        function () {
            return this._getOption('inverted');
        },
        set: function (value) {
            this._setOption('inverted', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "item", {
        get: /**
             * Configures funnel items' appearance.
             */
        function () {
            return this._getOption('item');
        },
        set: function (value) {
            this._setOption('item', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "label", {
        get: /**
             * Configures funnel item labels.
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
    Object.defineProperty(DxFunnelComponent.prototype, "legend", {
        get: /**
             * Configures the legend.
             */
        function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "margin", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "neckHeight", {
        get: /**
             * Specifies the ratio between the height of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
             */
        function () {
            return this._getOption('neckHeight');
        },
        set: function (value) {
            this._setOption('neckHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "neckWidth", {
        get: /**
             * Specifies the ratio between the width of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
             */
        function () {
            return this._getOption('neckWidth');
        },
        set: function (value) {
            this._setOption('neckWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "palette", {
        get: /**
             * Sets the palette to be used to colorize funnel items.
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
    Object.defineProperty(DxFunnelComponent.prototype, "paletteExtensionMode", {
        get: /**
             * Specifies what to do with colors in the palette when their number is less than the number of funnel items.
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
    Object.defineProperty(DxFunnelComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "resolveLabelOverlapping", {
        get: /**
             * Specifies how item labels should behave when they overlap.
             */
        function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "selectionMode", {
        get: /**
             * Specifies whether a single or multiple funnel items can be in the selected state at a time. Assigning "none" disables the selection feature.
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
    Object.defineProperty(DxFunnelComponent.prototype, "size", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "sortData", {
        get: /**
             * Specifies whether to sort funnel items.
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
    Object.defineProperty(DxFunnelComponent.prototype, "theme", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "title", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "valueField", {
        get: /**
             * Specifies which data source field provides values for funnel items. The value defines a funnel item's area.
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
    DxFunnelComponent.prototype._createInstance = function (element, options) {
        return new DxFunnel(element, options);
    };
    DxFunnelComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxFunnelComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
    };
    DxFunnelComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxFunnelComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxFunnelComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxFunnelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-funnel',
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
    DxFunnelComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxFunnelComponent.propDecorators = {
        "adaptiveLayout": [{ type: Input },],
        "algorithm": [{ type: Input },],
        "argumentField": [{ type: Input },],
        "colorField": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "export": [{ type: Input },],
        "hoverEnabled": [{ type: Input },],
        "inverted": [{ type: Input },],
        "item": [{ type: Input },],
        "label": [{ type: Input },],
        "legend": [{ type: Input },],
        "loadingIndicator": [{ type: Input },],
        "margin": [{ type: Input },],
        "neckHeight": [{ type: Input },],
        "neckWidth": [{ type: Input },],
        "palette": [{ type: Input },],
        "paletteExtensionMode": [{ type: Input },],
        "pathModified": [{ type: Input },],
        "redrawOnResize": [{ type: Input },],
        "resolveLabelOverlapping": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "selectionMode": [{ type: Input },],
        "size": [{ type: Input },],
        "sortData": [{ type: Input },],
        "theme": [{ type: Input },],
        "title": [{ type: Input },],
        "tooltip": [{ type: Input },],
        "valueField": [{ type: Input },],
        "onDisposing": [{ type: Output },],
        "onDrawn": [{ type: Output },],
        "onExported": [{ type: Output },],
        "onExporting": [{ type: Output },],
        "onFileSaving": [{ type: Output },],
        "onHoverChanged": [{ type: Output },],
        "onIncidentOccurred": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onItemClick": [{ type: Output },],
        "onLegendClick": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onSelectionChanged": [{ type: Output },],
        "adaptiveLayoutChange": [{ type: Output },],
        "algorithmChange": [{ type: Output },],
        "argumentFieldChange": [{ type: Output },],
        "colorFieldChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "exportChange": [{ type: Output },],
        "hoverEnabledChange": [{ type: Output },],
        "invertedChange": [{ type: Output },],
        "itemChange": [{ type: Output },],
        "labelChange": [{ type: Output },],
        "legendChange": [{ type: Output },],
        "loadingIndicatorChange": [{ type: Output },],
        "marginChange": [{ type: Output },],
        "neckHeightChange": [{ type: Output },],
        "neckWidthChange": [{ type: Output },],
        "paletteChange": [{ type: Output },],
        "paletteExtensionModeChange": [{ type: Output },],
        "pathModifiedChange": [{ type: Output },],
        "redrawOnResizeChange": [{ type: Output },],
        "resolveLabelOverlappingChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "selectionModeChange": [{ type: Output },],
        "sizeChange": [{ type: Output },],
        "sortDataChange": [{ type: Output },],
        "themeChange": [{ type: Output },],
        "titleChange": [{ type: Output },],
        "tooltipChange": [{ type: Output },],
        "valueFieldChange": [{ type: Output },],
    };
    return DxFunnelComponent;
}(DxComponent));
export { DxFunnelComponent };
var DxFunnelModule = (function () {
    function DxFunnelModule() {
    }
    DxFunnelModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxFunnelModule;
}());
export { DxFunnelModule };
//# sourceMappingURL=funnel.js.map