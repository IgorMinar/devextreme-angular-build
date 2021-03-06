import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxSparkline from 'devextreme/viz/sparkline';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoMarginModule, DxoSizeModule, DxoTooltipModule, DxoBorderModule, DxoFontModule, DxoFormatModule, DxoShadowModule } from 'devextreme-angular/ui/nested';

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
 * The Sparkline widget is a compact chart that contains only one series. Owing to their size, sparklines occupy very little space and can be easily collected in a table or embedded straight in text.
 */
let DxSparklineComponent = class DxSparklineComponent extends DxComponent {
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
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'argumentFieldChange' },
            { emit: 'barNegativeColorChange' },
            { emit: 'barPositiveColorChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'firstLastColorChange' },
            { emit: 'ignoreEmptyPointsChange' },
            { emit: 'lineColorChange' },
            { emit: 'lineWidthChange' },
            { emit: 'lossColorChange' },
            { emit: 'marginChange' },
            { emit: 'maxColorChange' },
            { emit: 'maxValueChange' },
            { emit: 'minColorChange' },
            { emit: 'minValueChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'pointColorChange' },
            { emit: 'pointSizeChange' },
            { emit: 'pointSymbolChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showFirstLastChange' },
            { emit: 'showMinMaxChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'tooltipChange' },
            { emit: 'typeChange' },
            { emit: 'valueFieldChange' },
            { emit: 'winColorChange' },
            { emit: 'winlossThresholdChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the data source field that provides arguments for a sparkline.
     */
    get argumentField() {
        return this._getOption('argumentField');
    }
    set argumentField(value) {
        this._setOption('argumentField', value);
    }
    /**
     * Sets a color for the bars indicating negative values. Available for a sparkline of the bar type only.
     */
    get barNegativeColor() {
        return this._getOption('barNegativeColor');
    }
    set barNegativeColor(value) {
        this._setOption('barNegativeColor', value);
    }
    /**
     * Sets a color for the bars indicating positive values. Available for a sparkline of the bar type only.
     */
    get barPositiveColor() {
        return this._getOption('barPositiveColor');
    }
    set barPositiveColor(value) {
        this._setOption('barPositiveColor', value);
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
     * Sets a color for the boundary of both the first and last points on a sparkline.
     */
    get firstLastColor() {
        return this._getOption('firstLastColor');
    }
    set firstLastColor(value) {
        this._setOption('firstLastColor', value);
    }
    /**
     * Specifies whether the sparkline should ignore null data points.
     */
    get ignoreEmptyPoints() {
        return this._getOption('ignoreEmptyPoints');
    }
    set ignoreEmptyPoints(value) {
        this._setOption('ignoreEmptyPoints', value);
    }
    /**
     * Sets a color for a line on a sparkline. Available for the sparklines of the line- and area-like types.
     */
    get lineColor() {
        return this._getOption('lineColor');
    }
    set lineColor(value) {
        this._setOption('lineColor', value);
    }
    /**
     * Specifies a width for a line on a sparkline. Available for the sparklines of the line- and area-like types.
     */
    get lineWidth() {
        return this._getOption('lineWidth');
    }
    set lineWidth(value) {
        this._setOption('lineWidth', value);
    }
    /**
     * Sets a color for the bars indicating the values that are less than the winloss threshold. Available for a sparkline of the winloss type only.
     */
    get lossColor() {
        return this._getOption('lossColor');
    }
    set lossColor(value) {
        this._setOption('lossColor', value);
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
     * Sets a color for the boundary of the maximum point on a sparkline.
     */
    get maxColor() {
        return this._getOption('maxColor');
    }
    set maxColor(value) {
        this._setOption('maxColor', value);
    }
    /**
     * Specifies the maximum value of the sparkline's value axis.
     */
    get maxValue() {
        return this._getOption('maxValue');
    }
    set maxValue(value) {
        this._setOption('maxValue', value);
    }
    /**
     * Sets a color for the boundary of the minimum point on a sparkline.
     */
    get minColor() {
        return this._getOption('minColor');
    }
    set minColor(value) {
        this._setOption('minColor', value);
    }
    /**
     * Specifies the minimum value of the sparkline value axis.
     */
    get minValue() {
        return this._getOption('minValue');
    }
    set minValue(value) {
        this._setOption('minValue', value);
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
     * Sets a color for points on a sparkline. Available for the sparklines of the line- and area-like types.
     */
    get pointColor() {
        return this._getOption('pointColor');
    }
    set pointColor(value) {
        this._setOption('pointColor', value);
    }
    /**
     * Specifies the diameter of sparkline points in pixels. Available for the sparklines of line- and area-like types.
     */
    get pointSize() {
        return this._getOption('pointSize');
    }
    set pointSize(value) {
        this._setOption('pointSize', value);
    }
    /**
     * Specifies a symbol to use as a point marker on a sparkline. Available for the sparklines of the line- and area-like types.
     */
    get pointSymbol() {
        return this._getOption('pointSymbol');
    }
    set pointSymbol(value) {
        this._setOption('pointSymbol', value);
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
     * Specifies whether or not to indicate both the first and last values on a sparkline.
     */
    get showFirstLast() {
        return this._getOption('showFirstLast');
    }
    set showFirstLast(value) {
        this._setOption('showFirstLast', value);
    }
    /**
     * Specifies whether or not to indicate both the minimum and maximum values on a sparkline.
     */
    get showMinMax() {
        return this._getOption('showMinMax');
    }
    set showMinMax(value) {
        this._setOption('showMinMax', value);
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
     * Configures the tooltip.
     */
    get tooltip() {
        return this._getOption('tooltip');
    }
    set tooltip(value) {
        this._setOption('tooltip', value);
    }
    /**
     * Determines the type of a sparkline.
     */
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    /**
     * Specifies the data source field that provides values for a sparkline.
     */
    get valueField() {
        return this._getOption('valueField');
    }
    set valueField(value) {
        this._setOption('valueField', value);
    }
    /**
     * Sets a color for the bars indicating the values greater than a winloss threshold. Available for a sparkline of the winloss type only.
     */
    get winColor() {
        return this._getOption('winColor');
    }
    set winColor(value) {
        this._setOption('winColor', value);
    }
    /**
     * Specifies a value that serves as a threshold for the sparkline of the winloss type.
     */
    get winlossThreshold() {
        return this._getOption('winlossThreshold');
    }
    set winlossThreshold(value) {
        this._setOption('winlossThreshold', value);
    }
    _createInstance(element, options) {
        return new DxSparkline(element, options);
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
DxSparklineComponent.ctorParameters = () => [
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
], DxSparklineComponent.prototype, "argumentField", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "barNegativeColor", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "barPositiveColor", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "firstLastColor", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "ignoreEmptyPoints", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "lineColor", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "lineWidth", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "lossColor", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "margin", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "maxColor", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "maxValue", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "minColor", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "minValue", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "pathModified", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "pointColor", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "pointSize", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "pointSymbol", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "showFirstLast", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "showMinMax", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "size", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "theme", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "tooltip", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "type", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "valueField", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "winColor", null);
__decorate([
    Input()
], DxSparklineComponent.prototype, "winlossThreshold", null);
__decorate([
    Output()
], DxSparklineComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "onDrawn", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "onExported", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "onExporting", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "onFileSaving", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "onIncidentOccurred", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "onTooltipHidden", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "onTooltipShown", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "argumentFieldChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "barNegativeColorChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "barPositiveColorChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "firstLastColorChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "ignoreEmptyPointsChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "lineColorChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "lineWidthChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "lossColorChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "marginChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "maxColorChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "maxValueChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "minColorChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "minValueChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "pathModifiedChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "pointColorChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "pointSizeChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "pointSymbolChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "showFirstLastChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "showMinMaxChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "sizeChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "themeChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "tooltipChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "typeChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "valueFieldChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "winColorChange", void 0);
__decorate([
    Output()
], DxSparklineComponent.prototype, "winlossThresholdChange", void 0);
DxSparklineComponent = __decorate([
    Component({
        selector: 'dx-sparkline',
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
], DxSparklineComponent);
let DxSparklineModule = class DxSparklineModule {
};
DxSparklineModule = __decorate([
    NgModule({
        imports: [
            DxoMarginModule,
            DxoSizeModule,
            DxoTooltipModule,
            DxoBorderModule,
            DxoFontModule,
            DxoFormatModule,
            DxoShadowModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxSparklineComponent
        ],
        exports: [
            DxSparklineComponent,
            DxoMarginModule,
            DxoSizeModule,
            DxoTooltipModule,
            DxoBorderModule,
            DxoFontModule,
            DxoFormatModule,
            DxoShadowModule,
            DxTemplateModule
        ]
    })
], DxSparklineModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxSparklineComponent, DxSparklineModule };
//# sourceMappingURL=devextreme-angular-ui-sparkline.js.map
