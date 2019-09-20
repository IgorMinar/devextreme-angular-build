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
 * Build date: Fri Sep 20 2019
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
import DxCircularGauge from 'devextreme/viz/circular_gauge';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoAnimationModule } from './nested/animation';
import { DxoExportModule } from './nested/export';
import { DxoGeometryModule } from './nested/geometry';
import { DxoLoadingIndicatorModule } from './nested/loading-indicator';
import { DxoFontModule } from './nested/font';
import { DxoMarginModule } from './nested/margin';
import { DxoRangeContainerModule } from './nested/range-container';
import { DxiRangeModule } from './nested/range-dxi';
import { DxoScaleModule } from './nested/scale';
import { DxoLabelModule } from './nested/label';
import { DxoFormatModule } from './nested/format';
import { DxoMinorTickModule } from './nested/minor-tick';
import { DxoTickModule } from './nested/tick';
import { DxoSizeModule } from './nested/size';
import { DxoSubvalueIndicatorModule } from './nested/subvalue-indicator';
import { DxoTextModule } from './nested/text';
import { DxoTitleModule } from './nested/title';
import { DxoSubtitleModule } from './nested/subtitle';
import { DxoTooltipModule } from './nested/tooltip';
import { DxoBorderModule } from './nested/border';
import { DxoShadowModule } from './nested/shadow';
import { DxoValueIndicatorModule } from './nested/value-indicator';
/**
 * The CircularGauge is a widget that indicates values on a circular numeric scale.
 */
var DxCircularGaugeComponent = (function (_super) {
    __extends(DxCircularGaugeComponent, _super);
    function DxCircularGaugeComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxCircularGaugeComponent.prototype, "animation", {
        get: /**
             * Specifies animation options.
             */
        function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCircularGaugeComponent.prototype, "containerBackgroundColor", {
        get: /**
             * Specifies the color of the parent page element.
             */
        function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCircularGaugeComponent.prototype, "disabled", {
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "export", {
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "geometry", {
        get: /**
             * Specifies the options required to set the geometry of the CircularGauge widget.
             */
        function () {
            return this._getOption('geometry');
        },
        set: function (value) {
            this._setOption('geometry', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCircularGaugeComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "margin", {
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "rangeContainer", {
        get: /**
             * Specifies gauge range container options.
             */
        function () {
            return this._getOption('rangeContainer');
        },
        set: function (value) {
            this._setOption('rangeContainer', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCircularGaugeComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "scale", {
        get: /**
             * Specifies a gauge's scale options.
             */
        function () {
            return this._getOption('scale');
        },
        set: function (value) {
            this._setOption('scale', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCircularGaugeComponent.prototype, "size", {
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "subvalueIndicator", {
        get: /**
             * Specifies the appearance options of subvalue indicators.
             */
        function () {
            return this._getOption('subvalueIndicator');
        },
        set: function (value) {
            this._setOption('subvalueIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCircularGaugeComponent.prototype, "subvalues", {
        get: /**
             * Specifies a set of subvalues to be designated by the subvalue indicators.
             */
        function () {
            return this._getOption('subvalues');
        },
        set: function (value) {
            this._setOption('subvalues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCircularGaugeComponent.prototype, "theme", {
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "title", {
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "tooltip", {
        get: /**
             * Configures tooltips.
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
    Object.defineProperty(DxCircularGaugeComponent.prototype, "value", {
        get: /**
             * Specifies the main value on a gauge.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCircularGaugeComponent.prototype, "valueIndicator", {
        get: /**
             * Specifies the appearance options of the value indicator.
             */
        function () {
            return this._getOption('valueIndicator');
        },
        set: function (value) {
            this._setOption('valueIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    DxCircularGaugeComponent.prototype._createInstance = function (element, options) {
        return new DxCircularGauge(element, options);
    };
    DxCircularGaugeComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxCircularGaugeComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('subvalues', changes);
    };
    DxCircularGaugeComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxCircularGaugeComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('subvalues');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxCircularGaugeComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxCircularGaugeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-circular-gauge',
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
    DxCircularGaugeComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxCircularGaugeComponent.propDecorators = {
        "animation": [{ type: Input },],
        "containerBackgroundColor": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "export": [{ type: Input },],
        "geometry": [{ type: Input },],
        "loadingIndicator": [{ type: Input },],
        "margin": [{ type: Input },],
        "pathModified": [{ type: Input },],
        "rangeContainer": [{ type: Input },],
        "redrawOnResize": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "scale": [{ type: Input },],
        "size": [{ type: Input },],
        "subvalueIndicator": [{ type: Input },],
        "subvalues": [{ type: Input },],
        "theme": [{ type: Input },],
        "title": [{ type: Input },],
        "tooltip": [{ type: Input },],
        "value": [{ type: Input },],
        "valueIndicator": [{ type: Input },],
        "onDisposing": [{ type: Output },],
        "onDrawn": [{ type: Output },],
        "onExported": [{ type: Output },],
        "onExporting": [{ type: Output },],
        "onFileSaving": [{ type: Output },],
        "onIncidentOccurred": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onTooltipHidden": [{ type: Output },],
        "onTooltipShown": [{ type: Output },],
        "animationChange": [{ type: Output },],
        "containerBackgroundColorChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "exportChange": [{ type: Output },],
        "geometryChange": [{ type: Output },],
        "loadingIndicatorChange": [{ type: Output },],
        "marginChange": [{ type: Output },],
        "pathModifiedChange": [{ type: Output },],
        "rangeContainerChange": [{ type: Output },],
        "redrawOnResizeChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "scaleChange": [{ type: Output },],
        "sizeChange": [{ type: Output },],
        "subvalueIndicatorChange": [{ type: Output },],
        "subvaluesChange": [{ type: Output },],
        "themeChange": [{ type: Output },],
        "titleChange": [{ type: Output },],
        "tooltipChange": [{ type: Output },],
        "valueChange": [{ type: Output },],
        "valueIndicatorChange": [{ type: Output },],
    };
    return DxCircularGaugeComponent;
}(DxComponent));
export { DxCircularGaugeComponent };
var DxCircularGaugeModule = (function () {
    function DxCircularGaugeModule() {
    }
    DxCircularGaugeModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxCircularGaugeModule;
}());
export { DxCircularGaugeModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY3VsYXItZ2F1Z2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91aS9jaXJjdWxhci1nYXVnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBSWYsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxlQUFlLE1BQU0sK0JBQStCLENBQUM7QUFHNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFB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b0c4QyxXQUFXO1NBQTVDLHdCQUF3Qjs7Ozs7Z0JBaWZwQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLHlCQUF5Qjt3QkFDekIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYiwwQkFBMEI7d0JBQzFCLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLDBCQUEwQjtxQkFDM0I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHdCQUF3Qjt3QkFDeEIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIseUJBQXlCO3dCQUN6QixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsdUJBQXVCO3dCQUN2QixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLDBCQUEwQjt3QkFDMUIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsdUJBQXVCO3dCQUN2QixnQkFBZ0I7cUJBQ2pCO2lCQUNGOztnQ0E5b0JEOztTQStvQmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhDaXJjdWxhckdhdWdlIGZyb20gJ2RldmV4dHJlbWUvdml6L2NpcmN1bGFyX2dhdWdlJztcclxuXHJcblxyXG5pbXBvcnQgeyBEeENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBEeEludGVncmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9pbnRlZ3JhdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IFdhdGNoZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL3dhdGNoZXItaGVscGVyJztcclxuaW1wb3J0IHsgSXRlcmFibGVEaWZmZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL2l0ZXJhYmxlLWRpZmZlci1oZWxwZXInO1xyXG5cclxuaW1wb3J0IHsgRHhvQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgRHhvRXhwb3J0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZXhwb3J0JztcclxuaW1wb3J0IHsgRHhvR2VvbWV0cnlNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9nZW9tZXRyeSc7XHJcbmltcG9ydCB7IER4b0xvYWRpbmdJbmRpY2F0b3JNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sb2FkaW5nLWluZGljYXRvcic7XHJcbmltcG9ydCB7IER4b0ZvbnRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9mb250JztcclxuaW1wb3J0IHsgRHhvTWFyZ2luTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWFyZ2luJztcclxuaW1wb3J0IHsgRHhvUmFuZ2VDb250YWluZXJNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9yYW5nZS1jb250YWluZXInO1xyXG5pbXBvcnQgeyBEeGlSYW5nZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3JhbmdlLWR4aSc7XHJcbmltcG9ydCB7IER4b1NjYWxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2NhbGUnO1xyXG5pbXBvcnQgeyBEeG9MYWJlbE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2xhYmVsJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9ybWF0JztcclxuaW1wb3J0IHsgRHhvTWlub3JUaWNrTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbWlub3ItdGljayc7XHJcbmltcG9ydCB7IER4b1RpY2tNb2R1bGUgfSBmcm9tICcuL25lc3RlZC90aWNrJztcclxuaW1wb3J0IHsgRHhvU2l6ZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NpemUnO1xyXG5pbXBvcnQgeyBEeG9TdWJ2YWx1ZUluZGljYXRvck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N1YnZhbHVlLWluZGljYXRvcic7XHJcbmltcG9ydCB7IER4b1RleHRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC90ZXh0JztcclxuaW1wb3J0IHsgRHhvVGl0bGVNb2R1bGUgfSBmcm9tICcuL25lc3RlZC90aXRsZSc7XHJcbmltcG9ydCB7IER4b1N1YnRpdGxlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc3VidGl0bGUnO1xyXG5pbXBvcnQgeyBEeG9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdG9vbHRpcCc7XHJcbmltcG9ydCB7IER4b0JvcmRlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2JvcmRlcic7XHJcbmltcG9ydCB7IER4b1NoYWRvd01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3NoYWRvdyc7XHJcbmltcG9ydCB7IER4b1ZhbHVlSW5kaWNhdG9yTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdmFsdWUtaW5kaWNhdG9yJztcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENpcmN1bGFyR2F1Z2UgaXMgYSB3aWRnZXQgdGhhdCBpbmRpY2F0ZXMgdmFsdWVzIG9uIGEgY2lyY3VsYXIgbnVtZXJpYyBzY2FsZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC1jaXJjdWxhci1nYXVnZScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsgJyA6aG9zdCB7ICBkaXNwbGF5OiBibG9jazsgfSddLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgV2F0Y2hlckhlbHBlcixcclxuICAgICAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgIEl0ZXJhYmxlRGlmZmVySGVscGVyXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeENpcmN1bGFyR2F1Z2VDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeENpcmN1bGFyR2F1Z2U7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGFuaW1hdGlvbiBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFuaW1hdGlvbigpOiB7IGR1cmF0aW9uPzogbnVtYmVyLCBlYXNpbmc/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FuaW1hdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFuaW1hdGlvbih2YWx1ZTogeyBkdXJhdGlvbj86IG51bWJlciwgZWFzaW5nPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbmltYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBjb2xvciBvZiB0aGUgcGFyZW50IHBhZ2UgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb250YWluZXJCYWNrZ3JvdW5kQ29sb3InKTtcclxuICAgIH1cclxuICAgIHNldCBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29udGFpbmVyQmFja2dyb3VuZENvbG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgcmVzcG9uZHMgdG8gdGhlIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB3aWRnZXQncyByb290IGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWxlbWVudEF0dHIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbGVtZW50QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVsZW1lbnRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VsZW1lbnRBdHRyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGV4cG9ydGluZyBhbmQgcHJpbnRpbmcgZmVhdHVyZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXhwb3J0KCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGZvcm1hdHM/OiBBcnJheTxzdHJpbmc+LCBtYXJnaW4/OiBudW1iZXIsIHByaW50aW5nRW5hYmxlZD86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2V4cG9ydCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4cG9ydCh2YWx1ZTogeyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgZm9ybWF0cz86IEFycmF5PHN0cmluZz4sIG1hcmdpbj86IG51bWJlciwgcHJpbnRpbmdFbmFibGVkPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXhwb3J0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgb3B0aW9ucyByZXF1aXJlZCB0byBzZXQgdGhlIGdlb21ldHJ5IG9mIHRoZSBDaXJjdWxhckdhdWdlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBnZW9tZXRyeSgpOiB7IGVuZEFuZ2xlPzogbnVtYmVyLCBzdGFydEFuZ2xlPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dlb21ldHJ5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ2VvbWV0cnkodmFsdWU6IHsgZW5kQW5nbGU/OiBudW1iZXIsIHN0YXJ0QW5nbGU/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ2VvbWV0cnknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgbG9hZGluZyBpbmRpY2F0b3IuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9hZGluZ0luZGljYXRvcigpOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvYWRpbmdJbmRpY2F0b3InKTtcclxuICAgIH1cclxuICAgIHNldCBsb2FkaW5nSW5kaWNhdG9yKHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHNob3c/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvYWRpbmdJbmRpY2F0b3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIHNwYWNlIGFyb3VuZCB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1hcmdpbigpOiB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXJnaW4nKTtcclxuICAgIH1cclxuICAgIHNldCBtYXJnaW4odmFsdWU6IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21hcmdpbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGUgd2lkZ2V0IHRoYXQgaXQgaXMgZW1iZWRkZWQgaW50byBhbiBIVE1MIHBhZ2UgdGhhdCB1c2VzIGEgdGFnIG1vZGlmeWluZyB0aGUgcGF0aC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYXRoTW9kaWZpZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGF0aE1vZGlmaWVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGF0aE1vZGlmaWVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYXRoTW9kaWZpZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGdhdWdlIHJhbmdlIGNvbnRhaW5lciBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJhbmdlQ29udGFpbmVyKCk6IHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBvZmZzZXQ/OiBudW1iZXIsIG9yaWVudGF0aW9uPzogc3RyaW5nLCBwYWxldHRlPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgcGFsZXR0ZUV4dGVuc2lvbk1vZGU/OiBzdHJpbmcsIHJhbmdlcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogbnVtYmVyLCBzdGFydFZhbHVlPzogbnVtYmVyIH0+LCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyYW5nZUNvbnRhaW5lcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJhbmdlQ29udGFpbmVyKHZhbHVlOiB7IGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgb2Zmc2V0PzogbnVtYmVyLCBvcmllbnRhdGlvbj86IHN0cmluZywgcGFsZXR0ZT86IHN0cmluZyB8IEFycmF5PHN0cmluZz4sIHBhbGV0dGVFeHRlbnNpb25Nb2RlPzogc3RyaW5nLCByYW5nZXM/OiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IG51bWJlciwgc3RhcnRWYWx1ZT86IG51bWJlciB9Piwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmFuZ2VDb250YWluZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVkcmF3IHRoZSB3aWRnZXQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgcGFyZW50IGJyb3dzZXIgd2luZG93IGNoYW5nZXMgb3IgYSBtb2JpbGUgZGV2aWNlIHJvdGF0ZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVkcmF3T25SZXNpemUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVkcmF3T25SZXNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCByZWRyYXdPblJlc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVkcmF3T25SZXNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBnYXVnZSdzIHNjYWxlIG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2NhbGUoKTogeyBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgY3VzdG9tTWlub3JUaWNrcz86IEFycmF5PG51bWJlcj4sIGN1c3RvbVRpY2tzPzogQXJyYXk8bnVtYmVyPiwgZW5kVmFsdWU/OiBudW1iZXIsIGxhYmVsPzogeyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaGlkZUZpcnN0T3JMYXN0Pzogc3RyaW5nLCBpbmRlbnRGcm9tVGljaz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdXNlUmFuZ2VDb2xvcnM/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciwgb3JpZW50YXRpb24/OiBzdHJpbmcsIHNjYWxlRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBudW1iZXIsIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2NhbGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzY2FsZSh2YWx1ZTogeyBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgY3VzdG9tTWlub3JUaWNrcz86IEFycmF5PG51bWJlcj4sIGN1c3RvbVRpY2tzPzogQXJyYXk8bnVtYmVyPiwgZW5kVmFsdWU/OiBudW1iZXIsIGxhYmVsPzogeyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaGlkZUZpcnN0T3JMYXN0Pzogc3RyaW5nLCBpbmRlbnRGcm9tVGljaz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdXNlUmFuZ2VDb2xvcnM/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciwgb3JpZW50YXRpb24/OiBzdHJpbmcsIHNjYWxlRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBudW1iZXIsIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2NhbGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBzaXplIGluIHBpeGVscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaXplKCk6IHsgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2l6ZSh2YWx1ZTogeyBoZWlnaHQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhcHBlYXJhbmNlIG9wdGlvbnMgb2Ygc3VidmFsdWUgaW5kaWNhdG9ycy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdWJ2YWx1ZUluZGljYXRvcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N1YnZhbHVlSW5kaWNhdG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3VidmFsdWVJbmRpY2F0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3VidmFsdWVJbmRpY2F0b3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgc2V0IG9mIHN1YnZhbHVlcyB0byBiZSBkZXNpZ25hdGVkIGJ5IHRoZSBzdWJ2YWx1ZSBpbmRpY2F0b3JzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN1YnZhbHVlcygpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdWJ2YWx1ZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzdWJ2YWx1ZXModmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N1YnZhbHVlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBuYW1lIG9mIHRoZSB0aGVtZSB0aGUgd2lkZ2V0IHVzZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGhlbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aGVtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RoZW1lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIHdpZGdldCdzIHRpdGxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIG1hcmdpbj86IG51bWJlciB8IHsgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgdG9wPzogbnVtYmVyIH0sIHBsYWNlaG9sZGVyU2l6ZT86IG51bWJlciwgc3VidGl0bGU/OiBzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBvZmZzZXQ/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGl0bGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgbWFyZ2luPzogbnVtYmVyIHwgeyBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCB0b3A/OiBudW1iZXIgfSwgcGxhY2Vob2xkZXJTaXplPzogbnVtYmVyLCBzdWJ0aXRsZT86IHN0cmluZyB8IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG9mZnNldD86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9LCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0aXRsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRvb2x0aXBzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRvb2x0aXAoKTogeyBhcnJvd0xlbmd0aD86IG51bWJlciwgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnRhaW5lcj86IEVsZW1lbnQgfCBKUXVlcnksIGNvcm5lclJhZGl1cz86IG51bWJlciwgY3VzdG9taXplVG9vbHRpcD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzaGFkb3c/OiB7IGJsdXI/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nLCBvZmZzZXRYPzogbnVtYmVyLCBvZmZzZXRZPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyIH0sIHpJbmRleD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0b29sdGlwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdG9vbHRpcCh2YWx1ZTogeyBhcnJvd0xlbmd0aD86IG51bWJlciwgYm9yZGVyPzogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSwgY29sb3I/OiBzdHJpbmcsIGNvbnRhaW5lcj86IEVsZW1lbnQgfCBKUXVlcnksIGNvcm5lclJhZGl1cz86IG51bWJlciwgY3VzdG9taXplVG9vbHRpcD86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzaGFkb3c/OiB7IGJsdXI/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nLCBvZmZzZXRYPzogbnVtYmVyLCBvZmZzZXRZPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyIH0sIHpJbmRleD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0b29sdGlwJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbWFpbiB2YWx1ZSBvbiBhIGdhdWdlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGFwcGVhcmFuY2Ugb3B0aW9ucyBvZiB0aGUgdmFsdWUgaW5kaWNhdG9yLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlSW5kaWNhdG9yKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVJbmRpY2F0b3InKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZUluZGljYXRvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWx1ZUluZGljYXRvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBkaXNwb3NlZCBvZi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGlzcG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyByZW5kZXJpbmcgaGFzIGZpbmlzaGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EcmF3bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHdpZGdldCBpcyBleHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRXhwb3J0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIGZpbGUgd2l0aCBleHBvcnRlZCB3aWRnZXQgaXMgc2F2ZWQgdG8gdGhlIHVzZXIncyBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25GaWxlU2F2aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGVycm9yIG9yIHdhcm5pbmcgb2NjdXJzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25JbmNpZGVudE9jY3VycmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB0b29sdGlwIGJlY29tZXMgaGlkZGVuLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Ub29sdGlwSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgdG9vbHRpcCBhcHBlYXJzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Ub29sdGlwU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYW5pbWF0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYW5pbWF0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBkdXJhdGlvbj86IG51bWJlciwgZWFzaW5nPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbnRhaW5lckJhY2tncm91bmRDb2xvckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbnRhaW5lckJhY2tncm91bmRDb2xvckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGV4cG9ydENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGV4cG9ydENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGZvcm1hdHM/OiBBcnJheTxzdHJpbmc+LCBtYXJnaW4/OiBudW1iZXIsIHByaW50aW5nRW5hYmxlZD86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZ2VvbWV0cnlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBnZW9tZXRyeUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgZW5kQW5nbGU/OiBudW1iZXIsIHN0YXJ0QW5nbGU/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsb2FkaW5nSW5kaWNhdG9yQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbG9hZGluZ0luZGljYXRvckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgc2hvdz86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXJnaW5DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXJnaW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBhdGhNb2RpZmllZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBhdGhNb2RpZmllZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmFuZ2VDb250YWluZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByYW5nZUNvbnRhaW5lckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBvZmZzZXQ/OiBudW1iZXIsIG9yaWVudGF0aW9uPzogc3RyaW5nLCBwYWxldHRlPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgcGFsZXR0ZUV4dGVuc2lvbk1vZGU/OiBzdHJpbmcsIHJhbmdlcz86IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogbnVtYmVyLCBzdGFydFZhbHVlPzogbnVtYmVyIH0+LCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlZHJhd09uUmVzaXplQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVkcmF3T25SZXNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJ0bEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBydGxFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzY2FsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNjYWxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd0RlY2ltYWxzPzogYm9vbGVhbiwgY3VzdG9tTWlub3JUaWNrcz86IEFycmF5PG51bWJlcj4sIGN1c3RvbVRpY2tzPzogQXJyYXk8bnVtYmVyPiwgZW5kVmFsdWU/OiBudW1iZXIsIGxhYmVsPzogeyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaGlkZUZpcnN0T3JMYXN0Pzogc3RyaW5nLCBpbmRlbnRGcm9tVGljaz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdXNlUmFuZ2VDb2xvcnM/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBtaW5vclRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBtaW5vclRpY2tJbnRlcnZhbD86IG51bWJlciwgb3JpZW50YXRpb24/OiBzdHJpbmcsIHNjYWxlRGl2aXNpb25GYWN0b3I/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBudW1iZXIsIHRpY2s/OiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCB0aWNrSW50ZXJ2YWw/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaXplQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHN1YnZhbHVlSW5kaWNhdG9yQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3VidmFsdWVJbmRpY2F0b3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc3VidmFsdWVzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3VidmFsdWVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8bnVtYmVyPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0aGVtZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRoZW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRpdGxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGl0bGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBtYXJnaW4/OiBudW1iZXIgfCB7IGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIHRvcD86IG51bWJlciB9LCBwbGFjZWhvbGRlclNpemU/OiBudW1iZXIsIHN1YnRpdGxlPzogc3RyaW5nIHwgeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgb2Zmc2V0PzogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0sIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHdvcmRXcmFwPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdG9vbHRpcENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFycm93TGVuZ3RoPzogbnVtYmVyLCBib3JkZXI/OiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9LCBjb2xvcj86IHN0cmluZywgY29udGFpbmVyPzogRWxlbWVudCB8IEpRdWVyeSwgY29ybmVyUmFkaXVzPzogbnVtYmVyLCBjdXN0b21pemVUb29sdGlwPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHNoYWRvdz86IHsgYmx1cj86IG51bWJlciwgY29sb3I/OiBzdHJpbmcsIG9mZnNldFg/OiBudW1iZXIsIG9mZnNldFk/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIgfSwgekluZGV4PzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsdWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWx1ZUluZGljYXRvckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlSW5kaWNhdG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX3dhdGNoZXJIZWxwZXI6IFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX2lkaDogSXRlcmFibGVEaWZmZXJIZWxwZXIsIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXHJcbiAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IGFueSkge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBuZ1pvbmUsIHRlbXBsYXRlSG9zdCwgX3dhdGNoZXJIZWxwZXIsIHRyYW5zZmVyU3RhdGUsIHBsYXRmb3JtSWQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZHJhd24nLCBlbWl0OiAnb25EcmF3bicgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRlZCcsIGVtaXQ6ICdvbkV4cG9ydGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2V4cG9ydGluZycsIGVtaXQ6ICdvbkV4cG9ydGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdmaWxlU2F2aW5nJywgZW1pdDogJ29uRmlsZVNhdmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbmNpZGVudE9jY3VycmVkJywgZW1pdDogJ29uSW5jaWRlbnRPY2N1cnJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Rvb2x0aXBIaWRkZW4nLCBlbWl0OiAnb25Ub29sdGlwSGlkZGVuJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Rvb2x0aXBTaG93bicsIGVtaXQ6ICdvblRvb2x0aXBTaG93bicgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYW5pbWF0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb250YWluZXJCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc2FibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlbGVtZW50QXR0ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZXhwb3J0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdnZW9tZXRyeUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbG9hZGluZ0luZGljYXRvckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWFyZ2luQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYXRoTW9kaWZpZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JhbmdlQ29udGFpbmVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZWRyYXdPblJlc2l6ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncnRsRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2NhbGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NpemVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N1YnZhbHVlSW5kaWNhdG9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdWJ2YWx1ZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RoZW1lQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0aXRsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndG9vbHRpcENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlSW5kaWNhdG9yQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkaC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4Q2lyY3VsYXJHYXVnZShlbGVtZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kZXN0cm95V2lkZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdzdWJ2YWx1ZXMnLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENoYW5nZXMocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKCEocHJvcCBpbiB0aGlzLl9vcHRpb25zVG9VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkaC5zZXR1cChwcm9wLCBjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdzdWJ2YWx1ZXMnKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhvQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgRHhvRXhwb3J0TW9kdWxlLFxyXG4gICAgRHhvR2VvbWV0cnlNb2R1bGUsXHJcbiAgICBEeG9Mb2FkaW5nSW5kaWNhdG9yTW9kdWxlLFxyXG4gICAgRHhvRm9udE1vZHVsZSxcclxuICAgIER4b01hcmdpbk1vZHVsZSxcclxuICAgIER4b1JhbmdlQ29udGFpbmVyTW9kdWxlLFxyXG4gICAgRHhpUmFuZ2VNb2R1bGUsXHJcbiAgICBEeG9TY2FsZU1vZHVsZSxcclxuICAgIER4b0xhYmVsTW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvTWlub3JUaWNrTW9kdWxlLFxyXG4gICAgRHhvVGlja01vZHVsZSxcclxuICAgIER4b1NpemVNb2R1bGUsXHJcbiAgICBEeG9TdWJ2YWx1ZUluZGljYXRvck1vZHVsZSxcclxuICAgIER4b1RleHRNb2R1bGUsXHJcbiAgICBEeG9UaXRsZU1vZHVsZSxcclxuICAgIER4b1N1YnRpdGxlTW9kdWxlLFxyXG4gICAgRHhvVG9vbHRpcE1vZHVsZSxcclxuICAgIER4b0JvcmRlck1vZHVsZSxcclxuICAgIER4b1NoYWRvd01vZHVsZSxcclxuICAgIER4b1ZhbHVlSW5kaWNhdG9yTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeENpcmN1bGFyR2F1Z2VDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4Q2lyY3VsYXJHYXVnZUNvbXBvbmVudCxcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0dlb21ldHJ5TW9kdWxlLFxyXG4gICAgRHhvTG9hZGluZ0luZGljYXRvck1vZHVsZSxcclxuICAgIER4b0ZvbnRNb2R1bGUsXHJcbiAgICBEeG9NYXJnaW5Nb2R1bGUsXHJcbiAgICBEeG9SYW5nZUNvbnRhaW5lck1vZHVsZSxcclxuICAgIER4aVJhbmdlTW9kdWxlLFxyXG4gICAgRHhvU2NhbGVNb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b01pbm9yVGlja01vZHVsZSxcclxuICAgIER4b1RpY2tNb2R1bGUsXHJcbiAgICBEeG9TaXplTW9kdWxlLFxyXG4gICAgRHhvU3VidmFsdWVJbmRpY2F0b3JNb2R1bGUsXHJcbiAgICBEeG9UZXh0TW9kdWxlLFxyXG4gICAgRHhvVGl0bGVNb2R1bGUsXHJcbiAgICBEeG9TdWJ0aXRsZU1vZHVsZSxcclxuICAgIER4b1Rvb2x0aXBNb2R1bGUsXHJcbiAgICBEeG9Cb3JkZXJNb2R1bGUsXHJcbiAgICBEeG9TaGFkb3dNb2R1bGUsXHJcbiAgICBEeG9WYWx1ZUluZGljYXRvck1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeENpcmN1bGFyR2F1Z2VNb2R1bGUgeyB9XHJcbiJdfQ==