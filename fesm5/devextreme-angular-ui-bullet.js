import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxBullet from 'devextreme/viz/bullet';
import { DxTemplateHost, WatcherHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
 * The Bullet widget is useful when you need to compare a single measure to a target value. The widget comprises a horizontal bar indicating the measure and a vertical line indicating the target value.
 */
var DxBulletComponent = /** @class */ (function (_super) {
    __extends(DxBulletComponent, _super);
    function DxBulletComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
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
            { emit: 'colorChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'endScaleValueChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showTargetChange' },
            { emit: 'showZeroLevelChange' },
            { emit: 'sizeChange' },
            { emit: 'startScaleValueChange' },
            { emit: 'targetChange' },
            { emit: 'targetColorChange' },
            { emit: 'targetWidthChange' },
            { emit: 'themeChange' },
            { emit: 'tooltipChange' },
            { emit: 'valueChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxBulletComponent.prototype, "color", {
        /**
         * Specifies a color for the bullet bar.
         */
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "disabled", {
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
    Object.defineProperty(DxBulletComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxBulletComponent.prototype, "endScaleValue", {
        /**
         * Specifies an end value for the invisible scale.
         */
        get: function () {
            return this._getOption('endScaleValue');
        },
        set: function (value) {
            this._setOption('endScaleValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "margin", {
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
    Object.defineProperty(DxBulletComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxBulletComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxBulletComponent.prototype, "showTarget", {
        /**
         * Specifies whether or not to show the target line.
         */
        get: function () {
            return this._getOption('showTarget');
        },
        set: function (value) {
            this._setOption('showTarget', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "showZeroLevel", {
        /**
         * Specifies whether or not to show the line indicating zero on the invisible scale.
         */
        get: function () {
            return this._getOption('showZeroLevel');
        },
        set: function (value) {
            this._setOption('showZeroLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "size", {
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
    Object.defineProperty(DxBulletComponent.prototype, "startScaleValue", {
        /**
         * Specifies a start value for the invisible scale.
         */
        get: function () {
            return this._getOption('startScaleValue');
        },
        set: function (value) {
            this._setOption('startScaleValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "target", {
        /**
         * Specifies the value indicated by the target line.
         */
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "targetColor", {
        /**
         * Specifies a color for both the target and zero level lines.
         */
        get: function () {
            return this._getOption('targetColor');
        },
        set: function (value) {
            this._setOption('targetColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "targetWidth", {
        /**
         * Specifies the width of the target line.
         */
        get: function () {
            return this._getOption('targetWidth');
        },
        set: function (value) {
            this._setOption('targetWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "theme", {
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
    Object.defineProperty(DxBulletComponent.prototype, "tooltip", {
        /**
         * Configures the tooltip.
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
    Object.defineProperty(DxBulletComponent.prototype, "value", {
        /**
         * Specifies the primary value indicated by the bullet bar.
         */
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    DxBulletComponent.prototype._createInstance = function (element, options) {
        return new DxBullet(element, options);
    };
    DxBulletComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxBulletComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "color", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "endScaleValue", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "margin", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "pathModified", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "showTarget", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "showZeroLevel", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "size", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "startScaleValue", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "target", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "targetColor", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "targetWidth", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DxBulletComponent.prototype, "value", null);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "onDrawn", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "colorChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "endScaleValueChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "marginChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "showTargetChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "showZeroLevelChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "sizeChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "startScaleValueChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "targetChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "targetColorChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "targetWidthChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "themeChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "tooltipChange", void 0);
    __decorate([
        Output()
    ], DxBulletComponent.prototype, "valueChange", void 0);
    DxBulletComponent = __decorate([
        Component({
            selector: 'dx-bullet',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost
            ],
            styles: [' :host {  display: block; }']
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxBulletComponent);
    return DxBulletComponent;
}(DxComponent));
var DxBulletModule = /** @class */ (function () {
    function DxBulletModule() {
    }
    DxBulletModule = __decorate([
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
                DxBulletComponent
            ],
            exports: [
                DxBulletComponent,
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
    ], DxBulletModule);
    return DxBulletModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxBulletComponent, DxBulletModule };
//# sourceMappingURL=devextreme-angular-ui-bullet.js.map
