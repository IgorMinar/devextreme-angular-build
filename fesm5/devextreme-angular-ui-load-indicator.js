import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxLoadIndicator from 'devextreme/ui/load_indicator';
import { DxTemplateHost, WatcherHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';

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
 * The LoadIndicator is a UI element notifying the viewer that a process is in progress.
 */
var DxLoadIndicatorComponent = /** @class */ (function (_super) {
    __extends(DxLoadIndicatorComponent, _super);
    function DxLoadIndicatorComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'indicatorSrcChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "hint", {
        /**
         * Specifies text for a hint that appears when a user pauses on the widget.
         */
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "indicatorSrc", {
        /**
         * Specifies the path to an image used as the indicator.
         */
        get: function () {
            return this._getOption('indicatorSrc');
        },
        set: function (value) {
            this._setOption('indicatorSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "visible", {
        /**
         * Specifies whether the widget is visible.
         */
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLoadIndicatorComponent.prototype._createInstance = function (element, options) {
        return new DxLoadIndicator(element, options);
    };
    DxLoadIndicatorComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxLoadIndicatorComponent.ctorParameters = function () { return [
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
    ], DxLoadIndicatorComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxLoadIndicatorComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxLoadIndicatorComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxLoadIndicatorComponent.prototype, "indicatorSrc", null);
    __decorate([
        Input()
    ], DxLoadIndicatorComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxLoadIndicatorComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxLoadIndicatorComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxLoadIndicatorComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxLoadIndicatorComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxLoadIndicatorComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxLoadIndicatorComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxLoadIndicatorComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxLoadIndicatorComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxLoadIndicatorComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxLoadIndicatorComponent.prototype, "indicatorSrcChange", void 0);
    __decorate([
        Output()
    ], DxLoadIndicatorComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxLoadIndicatorComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxLoadIndicatorComponent.prototype, "widthChange", void 0);
    DxLoadIndicatorComponent = __decorate([
        Component({
            selector: 'dx-load-indicator',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxLoadIndicatorComponent);
    return DxLoadIndicatorComponent;
}(DxComponent));
var DxLoadIndicatorModule = /** @class */ (function () {
    function DxLoadIndicatorModule() {
    }
    DxLoadIndicatorModule = __decorate([
        NgModule({
            imports: [
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxLoadIndicatorComponent
            ],
            exports: [
                DxLoadIndicatorComponent,
                DxTemplateModule
            ]
        })
    ], DxLoadIndicatorModule);
    return DxLoadIndicatorModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxLoadIndicatorComponent, DxLoadIndicatorModule };
//# sourceMappingURL=devextreme-angular-ui-load-indicator.js.map
