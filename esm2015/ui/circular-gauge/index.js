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
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxCircularGauge from 'devextreme/viz/circular_gauge';
import { DxComponent, DxTemplateHost, DxIntegrationModule, DxTemplateModule, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxoAnimationModule } from 'devextreme-angular/ui/nested';
import { DxoExportModule } from 'devextreme-angular/ui/nested';
import { DxoGeometryModule } from 'devextreme-angular/ui/nested';
import { DxoLoadingIndicatorModule } from 'devextreme-angular/ui/nested';
import { DxoFontModule } from 'devextreme-angular/ui/nested';
import { DxoMarginModule } from 'devextreme-angular/ui/nested';
import { DxoRangeContainerModule } from 'devextreme-angular/ui/nested';
import { DxiRangeModule } from 'devextreme-angular/ui/nested';
import { DxoScaleModule } from 'devextreme-angular/ui/nested';
import { DxoLabelModule } from 'devextreme-angular/ui/nested';
import { DxoFormatModule } from 'devextreme-angular/ui/nested';
import { DxoMinorTickModule } from 'devextreme-angular/ui/nested';
import { DxoTickModule } from 'devextreme-angular/ui/nested';
import { DxoSizeModule } from 'devextreme-angular/ui/nested';
import { DxoSubvalueIndicatorModule } from 'devextreme-angular/ui/nested';
import { DxoTextModule } from 'devextreme-angular/ui/nested';
import { DxoTitleModule } from 'devextreme-angular/ui/nested';
import { DxoSubtitleModule } from 'devextreme-angular/ui/nested';
import { DxoTooltipModule } from 'devextreme-angular/ui/nested';
import { DxoBorderModule } from 'devextreme-angular/ui/nested';
import { DxoShadowModule } from 'devextreme-angular/ui/nested';
import { DxoValueIndicatorModule } from 'devextreme-angular/ui/nested';
/**
 * The CircularGauge is a widget that indicates values on a circular numeric scale.
 */
let DxCircularGaugeComponent = class DxCircularGaugeComponent extends DxComponent {
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
            { emit: 'animationChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'geometryChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'rangeContainerChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scaleChange' },
            { emit: 'sizeChange' },
            { emit: 'subvalueIndicatorChange' },
            { emit: 'subvaluesChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'valueChange' },
            { emit: 'valueIndicatorChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies animation options.
     */
    get animation() {
        return this._getOption('animation');
    }
    set animation(value) {
        this._setOption('animation', value);
    }
    /**
     * Specifies the color of the parent page element.
     */
    get containerBackgroundColor() {
        return this._getOption('containerBackgroundColor');
    }
    set containerBackgroundColor(value) {
        this._setOption('containerBackgroundColor', value);
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
     * Specifies the options required to set the geometry of the CircularGauge widget.
     */
    get geometry() {
        return this._getOption('geometry');
    }
    set geometry(value) {
        this._setOption('geometry', value);
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
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    get pathModified() {
        return this._getOption('pathModified');
    }
    set pathModified(value) {
        this._setOption('pathModified', value);
    }
    /**
     * Specifies gauge range container options.
     */
    get rangeContainer() {
        return this._getOption('rangeContainer');
    }
    set rangeContainer(value) {
        this._setOption('rangeContainer', value);
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
     * Specifies a gauge's scale options.
     */
    get scale() {
        return this._getOption('scale');
    }
    set scale(value) {
        this._setOption('scale', value);
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
     * Specifies the appearance options of subvalue indicators.
     */
    get subvalueIndicator() {
        return this._getOption('subvalueIndicator');
    }
    set subvalueIndicator(value) {
        this._setOption('subvalueIndicator', value);
    }
    /**
     * Specifies a set of subvalues to be designated by the subvalue indicators.
     */
    get subvalues() {
        return this._getOption('subvalues');
    }
    set subvalues(value) {
        this._setOption('subvalues', value);
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
     * Configures tooltips.
     */
    get tooltip() {
        return this._getOption('tooltip');
    }
    set tooltip(value) {
        this._setOption('tooltip', value);
    }
    /**
     * Specifies the main value on a gauge.
     */
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    /**
     * Specifies the appearance options of the value indicator.
     */
    get valueIndicator() {
        return this._getOption('valueIndicator');
    }
    set valueIndicator(value) {
        this._setOption('valueIndicator', value);
    }
    _createInstance(element, options) {
        return new DxCircularGauge(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('subvalues', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('subvalues');
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
DxCircularGaugeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "containerBackgroundColor", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "export", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "geometry", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "loadingIndicator", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "margin", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "pathModified", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "rangeContainer", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "redrawOnResize", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "scale", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "size", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "subvalueIndicator", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "subvalues", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "title", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "tooltip", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "value", null);
tslib_1.__decorate([
    Input()
], DxCircularGaugeComponent.prototype, "valueIndicator", null);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "onDrawn", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "onExported", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "onExporting", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "onFileSaving", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "onIncidentOccurred", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "onTooltipHidden", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "onTooltipShown", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "animationChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "containerBackgroundColorChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "exportChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "geometryChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "loadingIndicatorChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "marginChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "pathModifiedChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "rangeContainerChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "redrawOnResizeChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "scaleChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "sizeChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "subvalueIndicatorChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "subvaluesChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "themeChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "titleChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "tooltipChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "valueChange", void 0);
tslib_1.__decorate([
    Output()
], DxCircularGaugeComponent.prototype, "valueIndicatorChange", void 0);
DxCircularGaugeComponent = tslib_1.__decorate([
    Component({
        selector: 'dx-circular-gauge',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ],
        styles: [' :host {  display: block; }']
    }),
    tslib_1.__param(7, Inject(PLATFORM_ID))
], DxCircularGaugeComponent);
export { DxCircularGaugeComponent };
let DxCircularGaugeModule = class DxCircularGaugeModule {
};
DxCircularGaugeModule = tslib_1.__decorate([
    NgModule({
        imports: [
            DxoAnimationModule,
            DxoExportModule,
            DxoGeometryModule,
            DxoLoadingIndicatorModule,
            DxoFontModule,
            DxoMarginModule,
            DxoRangeContainerModule,
            DxiRangeModule,
            DxoScaleModule,
            DxoLabelModule,
            DxoFormatModule,
            DxoMinorTickModule,
            DxoTickModule,
            DxoSizeModule,
            DxoSubvalueIndicatorModule,
            DxoTextModule,
            DxoTitleModule,
            DxoSubtitleModule,
            DxoTooltipModule,
            DxoBorderModule,
            DxoShadowModule,
            DxoValueIndicatorModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxCircularGaugeComponent
        ],
        exports: [
            DxCircularGaugeComponent,
            DxoAnimationModule,
            DxoExportModule,
            DxoGeometryModule,
            DxoLoadingIndicatorModule,
            DxoFontModule,
            DxoMarginModule,
            DxoRangeContainerModule,
            DxiRangeModule,
            DxoScaleModule,
            DxoLabelModule,
            DxoFormatModule,
            DxoMinorTickModule,
            DxoTickModule,
            DxoSizeModule,
            DxoSubvalueIndicatorModule,
            DxoTextModule,
            DxoTitleModule,
            DxoSubtitleModule,
            DxoTooltipModule,
            DxoBorderModule,
            DxoShadowModule,
            DxoValueIndicatorModule,
            DxTemplateModule
        ]
    })
], DxCircularGaugeModule);
export { DxCircularGaugeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvY2lyY3VsYXItZ2F1Z2UvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxvQ0FBb0M7QUFHcEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULE9BQU8sRUFDUCxhQUFhLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sZUFBZSxNQUFNLCtCQUErQixDQUFDO0FBRzVELE9BQU8sRUFDSCxXQUFXLEVBQ1gsY0FBYyxFQUNkLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2hCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFB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Qix5QkFBeUI7WUFDekIsYUFBYTtZQUNiLGVBQWU7WUFDZix1QkFBdUI7WUFDdkIsY0FBYztZQUNkLGNBQWM7WUFDZCxjQUFjO1lBQ2QsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsYUFBYTtZQUNiLDBCQUEwQjtZQUMxQixhQUFhO1lBQ2IsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGVBQWU7WUFDZix1QkFBdUI7WUFDdkIsZ0JBQWdCO1NBQ2pCO0tBQ0YsQ0FBQztHQUNXLHFCQUFxQixDQUFJO1NBQXpCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4Q2lyY3VsYXJHYXVnZSBmcm9tICdkZXZleHRyZW1lL3Zpei9jaXJjdWxhcl9nYXVnZSc7XHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIER4Q29tcG9uZW50LFxyXG4gICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICBJdGVyYWJsZURpZmZlckhlbHBlcixcclxuICAgIFdhdGNoZXJIZWxwZXJcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEeG9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRXhwb3J0TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0dlb21ldHJ5TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0xvYWRpbmdJbmRpY2F0b3JNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRm9udE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9NYXJnaW5Nb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvUmFuZ2VDb250YWluZXJNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpUmFuZ2VNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvU2NhbGVNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvTGFiZWxNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b01pbm9yVGlja01vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9UaWNrTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1NpemVNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvU3VidmFsdWVJbmRpY2F0b3JNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvVGV4dE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9UaXRsZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TdWJ0aXRsZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0JvcmRlck1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TaGFkb3dNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvVmFsdWVJbmRpY2F0b3JNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENpcmN1bGFyR2F1Z2UgaXMgYSB3aWRnZXQgdGhhdCBpbmRpY2F0ZXMgdmFsdWVzIG9uIGEgY2lyY3VsYXIgbnVtZXJpYyBzY2FsZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC1jaXJjdWxhci1nYXVnZScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsgJyA6aG9zdCB7ICBkaXNwbGF5OiBibG9jazsgfSddLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgV2F0Y2hlckhlbHBlcixcclxuICAgICAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgIEl0ZXJhYmxlRGlmZmVySGVscGVyXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeENpcmN1bGFyR2F1Z2VDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeENpcmN1bGFyR2F1Z2U7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGFuaW1hdGlvbiBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFuaW1hdGlvbigpOiB7IGR1cmF0aW9uPzogbnVtYmVyLCBlYXNpbmc/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FuaW1hdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFuaW1hdGlvbih2YWx1ZTogeyBkdXJhdGlvbj86IG51bWJlciwgZWFzaW5nPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbmltYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBjb2xvciBvZiB0aGUgcGFyZW50IHBhZ2UgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb250YWluZXJCYWNrZ3JvdW5kQ29sb3InKTtcclxuICAgIH1cclxuICAgIHNldCBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29udGFpbmVyQmFja2dyb3VuZENvbG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgcmVzcG9uZHMgdG8gdGhlIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB3aWRnZXQncyByb290IGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWxlbWVudEF0dHIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbGVtZW50QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVsZW1lbnRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VsZW1lbnRBdHRyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGV4cG9ydGluZyBhbmQgcHJpbnRpbmcgZmVhdHVyZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXhwb3J0KCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGZvcm1hdHM/OiBBcnJheTxzdHJpbmc+LCBtYXJnaW4/OiBudW1iZXIsIHByaW50aW5nRW5hYmxlZD86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2V4cG9ydCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4cG9ydCh2YWx1ZTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgZm9ybWF0cz86IEFycmF5PHN0cmluZz4sIG1hcmdpbj86IG51bWJlciwgcHJpbnRpbmdFbmFibGVkPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwb3J0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgb3B0aW9ucyByZXF1aXJlZCB0byBzZXQgdGhlIGdlb21ldHJ5IG9mIHRoZSBDaXJjdWxhckdhdWdlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBnZW9tZXRyeSgpOiB7IGVuZEFuZ2xlPzogbnVtYmVyLCBzdGFydEFuZ2xlPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dlb21ldHJ5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ2VvbWV0cnkodmFsdWU6IHsgZW5kQW5nbGU/OiBudW1iZXIsIHN0YXJ0QW5nbGU/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ2VvbWV0cnknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgbG9hZGluZyBpbmRpY2F0b3IuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9hZGluZ0luZGljYXRvcigpOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvYWRpbmdJbmRpY2F0b3InKTtcclxuICAgIH1cclxuICAgIHNldCBsb2FkaW5nSW5kaWNhdG9yKHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvYWRpbmdJbmRpY2F0b3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIHNwYWNlIGFyb3VuZCB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1hcmdpbigpOiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXJnaW4nKTtcclxuICAgIH1cclxuICAgIHNldCBtYXJnaW4odmFsdWU6IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21hcmdpbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGUgd2lkZ2V0IHRoYXQgaXQgaXMgZW1iZWRkZWQgaW50byBhbiBIVE1MIHBhZ2UgdGhhdCB1c2VzIGEgdGFnIG1vZGlmeWluZyB0aGUgcGF0aC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYXRoTW9kaWZpZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGF0aE1vZGlmaWVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGF0aE1vZGlmaWVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYXRoTW9kaWZpZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGdhdWdlIHJhbmdlIGNvbnRhaW5lciBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJhbmdlQ29udGFpbmVyKCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBvZmZzZXQ/OiBudW1iZXIsIG9yaWVudGF0aW9uPzogc3RyaW5nLCBwYWxldHRlPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgcGFsZXR0ZUV4dGVuc2lvbk1vZGU/OiBzdHJpbmcsIHJhbmdlcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogbnVtYmVyLCBzdGFydFZhbHVlPzogbnVtYmVyIH0+LCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyYW5nZUNvbnRhaW5lcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJhbmdlQ29udGFpbmVyKHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgb2Zmc2V0PzogbnVtYmVyLCBvcmllbnRhdGlvbj86IHN0cmluZywgcGFsZXR0ZT86IHN0cmluZyB8IEFycmF5PHN0cmluZz4sIHBhbGV0dGVFeHRlbnNpb25Nb2RlPzogc3RyaW5nLCByYW5nZXM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IG51bWJlciwgc3RhcnRWYWx1ZT86IG51bWJlciB9Piwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmFuZ2VDb250YWluZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVkcmF3IHRoZSB3aWRnZXQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgcGFyZW50IGJyb3dzZXIgd2luZG93IGNoYW5nZXMgb3IgYSBtb2JpbGUgZGV2aWNlIHJvdGF0ZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVkcmF3T25SZXNpemUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVkcmF3T25SZXNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCByZWRyYXdPblJlc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVkcmF3T25SZXNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBnYXVnZSdzIHNjYWxlIG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2NhbGUoKTogeyBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgY3VzdG9tTWlub3JUaWNrcz86IEFycmF5PG51bWJlcj4sIGN1c3RvbVRpY2tzPzogQXJyYXk8bnVtYmVyPiwgZW5kVmFsdWU/OiBudW1iZXIsIGxhYmVsPzogeyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaGlkZUZpcnN0T3JMYXN0Pzogc3RyaW5nLCBpbmRlbnRGcm9tVGljaz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdXNlUmFuZ2VDb2xvcnM/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciwgb3JpZW50YXRpb24/OiBzdHJpbmcsIHNjYWxlRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBudW1iZXIsIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2NhbGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzY2FsZSh2YWx1ZTogeyBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgY3VzdG9tTWlub3JUaWNrcz86IEFycmF5PG51bWJlcj4sIGN1c3RvbVRpY2tzPzogQXJyYXk8bnVtYmVyPiwgZW5kVmFsdWU/OiBudW1iZXIsIGxhYmVsPzogeyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaGlkZUZpcnN0T3JMYXN0Pzogc3RyaW5nLCBpbmRlbnRGcm9tVGljaz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdXNlUmFuZ2VDb2xvcnM/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciwgb3JpZW50YXRpb24/OiBzdHJpbmcsIHNjYWxlRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBudW1iZXIsIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2NhbGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBzaXplIGluIHBpeGVscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaXplKCk6IHsgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2l6ZSh2YWx1ZTogeyBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhcHBlYXJhbmNlIG9wdGlvbnMgb2Ygc3VidmFsdWUgaW5kaWNhdG9ycy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdWJ2YWx1ZUluZGljYXRvcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N1YnZhbHVlSW5kaWNhdG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3VidmFsdWVJbmRpY2F0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3VidmFsdWVJbmRpY2F0b3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgc2V0IG9mIHN1YnZhbHVlcyB0byBiZSBkZXNpZ25hdGVkIGJ5IHRoZSBzdWJ2YWx1ZSBpbmRpY2F0b3JzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN1YnZhbHVlcygpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdWJ2YWx1ZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzdWJ2YWx1ZXModmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N1YnZhbHVlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBuYW1lIG9mIHRoZSB0aGVtZSB0aGUgd2lkZ2V0IHVzZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGhlbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aGVtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RoZW1lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIHdpZGdldCdzIHRpdGxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGl0bGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0aXRsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRvb2x0aXBzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRvb2x0aXAoKTogeyBhcnJvd0xlbmd0aD86IG51bWJlciwgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnRhaW5lcj86IEVsZW1lbnQgfCBKUXVlcnksIGNvcm5lclJhZGl1cz86IG51bWJlciwgY3VzdG9taXplVG9vbHRpcD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzaGFkb3c/OiB7IGJsdXI/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nLCBvZmZzZXRYPzogbnVtYmVyLCBvZmZzZXRZPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyIH0sIHpJbmRleD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0b29sdGlwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdG9vbHRpcCh2YWx1ZTogeyBhcnJvd0xlbmd0aD86IG51bWJlciwgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnRhaW5lcj86IEVsZW1lbnQgfCBKUXVlcnksIGNvcm5lclJhZGl1cz86IG51bWJlciwgY3VzdG9taXplVG9vbHRpcD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzaGFkb3c/OiB7IGJsdXI/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nLCBvZmZzZXRYPzogbnVtYmVyLCBvZmZzZXRZPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyIH0sIHpJbmRleD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0b29sdGlwJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbWFpbiB2YWx1ZSBvbiBhIGdhdWdlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGFwcGVhcmFuY2Ugb3B0aW9ucyBvZiB0aGUgdmFsdWUgaW5kaWNhdG9yLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlSW5kaWNhdG9yKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVJbmRpY2F0b3InKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZUluZGljYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWx1ZUluZGljYXRvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBkaXNwb3NlZCBvZi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGlzcG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyByZW5kZXJpbmcgaGFzIGZpbmlzaGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EcmF3bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHdpZGdldCBpcyBleHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRXhwb3J0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIGZpbGUgd2l0aCBleHBvcnRlZCB3aWRnZXQgaXMgc2F2ZWQgdG8gdGhlIHVzZXIncyBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25GaWxlU2F2aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGVycm9yIG9yIHdhcm5pbmcgb2NjdXJzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25JbmNpZGVudE9jY3VycmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB0b29sdGlwIGJlY29tZXMgaGlkZGVuLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Ub29sdGlwSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgdG9vbHRpcCBhcHBlYXJzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Ub29sdGlwU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFuaW1hdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgZHVyYXRpb24/OiBudW1iZXIsIGVhc2luZz86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY29udGFpbmVyQmFja2dyb3VuZENvbG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBleHBvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBmb3JtYXRzPzogQXJyYXk8c3RyaW5nPiwgbWFyZ2luPzogbnVtYmVyLCBwcmludGluZ0VuYWJsZWQ/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBnZW9tZXRyeUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgZW5kQW5nbGU/OiBudW1iZXIsIHN0YXJ0QW5nbGU/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbG9hZGluZ0luZGljYXRvckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgc2hvdz86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWFyZ2luQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGF0aE1vZGlmaWVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmFuZ2VDb250YWluZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgb2Zmc2V0PzogbnVtYmVyLCBvcmllbnRhdGlvbj86IHN0cmluZywgcGFsZXR0ZT86IHN0cmluZyB8IEFycmF5PHN0cmluZz4sIHBhbGV0dGVFeHRlbnNpb25Nb2RlPzogc3RyaW5nLCByYW5nZXM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IG51bWJlciwgc3RhcnRWYWx1ZT86IG51bWJlciB9Piwgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVkcmF3T25SZXNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBydGxFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2NhbGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93RGVjaW1hbHM/OiBib29sZWFuLCBjdXN0b21NaW5vclRpY2tzPzogQXJyYXk8bnVtYmVyPiwgY3VzdG9tVGlja3M/OiBBcnJheTxudW1iZXI+LCBlbmRWYWx1ZT86IG51bWJlciwgbGFiZWw/OiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBoaWRlRmlyc3RPckxhc3Q/OiBzdHJpbmcsIGluZGVudEZyb21UaWNrPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCB1c2VSYW5nZUNvbG9ycz86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0sIG1pbm9yVGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIG1pbm9yVGlja0ludGVydmFsPzogbnVtYmVyLCBvcmllbnRhdGlvbj86IHN0cmluZywgc2NhbGVEaXZpc2lvbkZhY3Rvcj86IG51bWJlciwgc3RhcnRWYWx1ZT86IG51bWJlciwgdGljaz86IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0sIHRpY2tJbnRlcnZhbD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHN1YnZhbHVlSW5kaWNhdG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdWJ2YWx1ZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxudW1iZXI+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0aGVtZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGl0bGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFycm93TGVuZ3RoPzogbnVtYmVyLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgY29udGFpbmVyPzogRWxlbWVudCB8IEpRdWVyeSwgY29ybmVyUmFkaXVzPzogbnVtYmVyLCBjdXN0b21pemVUb29sdGlwPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHNoYWRvdz86IHsgYmx1cj86IG51bWJlciwgY29sb3I/OiBzdHJpbmcsIG9mZnNldFg/OiBudW1iZXIsIG9mZnNldFk/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIgfSwgekluZGV4PzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUluZGljYXRvckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZGlzcG9zaW5nJywgZW1pdDogJ29uRGlzcG9zaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2RyYXduJywgZW1pdDogJ29uRHJhd24nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZXhwb3J0ZWQnLCBlbWl0OiAnb25FeHBvcnRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRpbmcnLCBlbWl0OiAnb25FeHBvcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZmlsZVNhdmluZycsIGVtaXQ6ICdvbkZpbGVTYXZpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5jaWRlbnRPY2N1cnJlZCcsIGVtaXQ6ICdvbkluY2lkZW50T2NjdXJyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Jbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd0b29sdGlwSGlkZGVuJywgZW1pdDogJ29uVG9vbHRpcEhpZGRlbicgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd0b29sdGlwU2hvd24nLCBlbWl0OiAnb25Ub29sdGlwU2hvd24nIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FuaW1hdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29udGFpbmVyQmFja2dyb3VuZENvbG9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2V4cG9ydENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ2VvbWV0cnlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2xvYWRpbmdJbmRpY2F0b3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21hcmdpbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGF0aE1vZGlmaWVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyYW5nZUNvbnRhaW5lckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVkcmF3T25SZXNpemVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NjYWxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaXplQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdWJ2YWx1ZUluZGljYXRvckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3VidmFsdWVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0aGVtZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGl0bGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Rvb2x0aXBDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWx1ZUluZGljYXRvckNoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pZGguc2V0SG9zdCh0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEeENpcmN1bGFyR2F1Z2UoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVdpZGdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnc3VidmFsdWVzJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnc3VidmFsdWVzJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0dlb21ldHJ5TW9kdWxlLFxyXG4gICAgRHhvTG9hZGluZ0luZGljYXRvck1vZHVsZSxcclxuICAgIER4b0ZvbnRNb2R1bGUsXHJcbiAgICBEeG9NYXJnaW5Nb2R1bGUsXHJcbiAgICBEeG9SYW5nZUNvbnRhaW5lck1vZHVsZSxcclxuICAgIER4aVJhbmdlTW9kdWxlLFxyXG4gICAgRHhvU2NhbGVNb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b01pbm9yVGlja01vZHVsZSxcclxuICAgIER4b1RpY2tNb2R1bGUsXHJcbiAgICBEeG9TaXplTW9kdWxlLFxyXG4gICAgRHhvU3VidmFsdWVJbmRpY2F0b3JNb2R1bGUsXHJcbiAgICBEeG9UZXh0TW9kdWxlLFxyXG4gICAgRHhvVGl0bGVNb2R1bGUsXHJcbiAgICBEeG9TdWJ0aXRsZU1vZHVsZSxcclxuICAgIER4b1Rvb2x0aXBNb2R1bGUsXHJcbiAgICBEeG9Cb3JkZXJNb2R1bGUsXHJcbiAgICBEeG9TaGFkb3dNb2R1bGUsXHJcbiAgICBEeG9WYWx1ZUluZGljYXRvck1vZHVsZSxcclxuICAgIER4SW50ZWdyYXRpb25Nb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlLFxyXG4gICAgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhDaXJjdWxhckdhdWdlQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeENpcmN1bGFyR2F1Z2VDb21wb25lbnQsXHJcbiAgICBEeG9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9FeHBvcnRNb2R1bGUsXHJcbiAgICBEeG9HZW9tZXRyeU1vZHVsZSxcclxuICAgIER4b0xvYWRpbmdJbmRpY2F0b3JNb2R1bGUsXHJcbiAgICBEeG9Gb250TW9kdWxlLFxyXG4gICAgRHhvTWFyZ2luTW9kdWxlLFxyXG4gICAgRHhvUmFuZ2VDb250YWluZXJNb2R1bGUsXHJcbiAgICBEeGlSYW5nZU1vZHVsZSxcclxuICAgIER4b1NjYWxlTW9kdWxlLFxyXG4gICAgRHhvTGFiZWxNb2R1bGUsXHJcbiAgICBEeG9Gb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9NaW5vclRpY2tNb2R1bGUsXHJcbiAgICBEeG9UaWNrTW9kdWxlLFxyXG4gICAgRHhvU2l6ZU1vZHVsZSxcclxuICAgIER4b1N1YnZhbHVlSW5kaWNhdG9yTW9kdWxlLFxyXG4gICAgRHhvVGV4dE1vZHVsZSxcclxuICAgIER4b1RpdGxlTW9kdWxlLFxyXG4gICAgRHhvU3VidGl0bGVNb2R1bGUsXHJcbiAgICBEeG9Ub29sdGlwTW9kdWxlLFxyXG4gICAgRHhvQm9yZGVyTW9kdWxlLFxyXG4gICAgRHhvU2hhZG93TW9kdWxlLFxyXG4gICAgRHhvVmFsdWVJbmRpY2F0b3JNb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhDaXJjdWxhckdhdWdlTW9kdWxlIHsgfVxyXG4iXX0=