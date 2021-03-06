import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxFunnel from 'devextreme/viz/funnel';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
var DxFunnelComponent = /** @class */ (function (_super) {
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
        /**
         * Specifies adaptive layout options.
         */
        get: function () {
            return this._getOption('adaptiveLayout');
        },
        set: function (value) {
            this._setOption('adaptiveLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "algorithm", {
        /**
         * Specifies the algorithm for building the funnel.
         */
        get: function () {
            return this._getOption('algorithm');
        },
        set: function (value) {
            this._setOption('algorithm', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "argumentField", {
        /**
         * Specifies which data source field provides arguments for funnel items. The argument identifies a funnel item and represents it on the legend.
         */
        get: function () {
            return this._getOption('argumentField');
        },
        set: function (value) {
            this._setOption('argumentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "colorField", {
        /**
         * Specifies which data source field provides colors for funnel items. If this field is absent, the palette provides the colors.
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
    Object.defineProperty(DxFunnelComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "disabled", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "export", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "hoverEnabled", {
        /**
         * Specifies whether funnel items change their style when a user pauses on them.
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
    Object.defineProperty(DxFunnelComponent.prototype, "inverted", {
        /**
         * Turns the funnel upside down.
         */
        get: function () {
            return this._getOption('inverted');
        },
        set: function (value) {
            this._setOption('inverted', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "item", {
        /**
         * Configures funnel items' appearance.
         */
        get: function () {
            return this._getOption('item');
        },
        set: function (value) {
            this._setOption('item', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "label", {
        /**
         * Configures funnel item labels.
         */
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "legend", {
        /**
         * Configures the legend.
         */
        get: function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "margin", {
        /**
         * Generates space around the widget.
         */
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "neckHeight", {
        /**
         * Specifies the ratio between the height of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
         */
        get: function () {
            return this._getOption('neckHeight');
        },
        set: function (value) {
            this._setOption('neckHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "neckWidth", {
        /**
         * Specifies the ratio between the width of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
         */
        get: function () {
            return this._getOption('neckWidth');
        },
        set: function (value) {
            this._setOption('neckWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "palette", {
        /**
         * Sets the palette to be used to colorize funnel items.
         */
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "paletteExtensionMode", {
        /**
         * Specifies what to do with colors in the palette when their number is less than the number of funnel items.
         */
        get: function () {
            return this._getOption('paletteExtensionMode');
        },
        set: function (value) {
            this._setOption('paletteExtensionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "resolveLabelOverlapping", {
        /**
         * Specifies how item labels should behave when they overlap.
         */
        get: function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "selectionMode", {
        /**
         * Specifies whether a single or multiple funnel items can be in the selected state at a time. Assigning "none" disables the selection feature.
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
    Object.defineProperty(DxFunnelComponent.prototype, "size", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "sortData", {
        /**
         * Specifies whether to sort funnel items.
         */
        get: function () {
            return this._getOption('sortData');
        },
        set: function (value) {
            this._setOption('sortData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "theme", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "title", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "valueField", {
        /**
         * Specifies which data source field provides values for funnel items. The value defines a funnel item's area.
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
    DxFunnelComponent.ctorParameters = function () { return [
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
    return DxFunnelComponent;
}(DxComponent));
var DxFunnelModule = /** @class */ (function () {
    function DxFunnelModule() {
    }
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
    return DxFunnelModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxFunnelComponent, DxFunnelModule };
//# sourceMappingURL=devextreme-angular-ui-funnel.js.map
