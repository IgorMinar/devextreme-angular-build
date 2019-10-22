import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxResizable from 'devextreme/ui/resizable';
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
 * The Resizable widget enables its content to be resizable in the UI.
 */
var DxResizableComponent = /** @class */ (function (_super) {
    __extends(DxResizableComponent, _super);
    function DxResizableComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'resize', emit: 'onResize' },
            { subscribe: 'resizeEnd', emit: 'onResizeEnd' },
            { subscribe: 'resizeStart', emit: 'onResizeStart' },
            { emit: 'elementAttrChange' },
            { emit: 'handlesChange' },
            { emit: 'heightChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxResizableComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxResizableComponent.prototype, "handles", {
        /**
         * Specifies which borders of the widget element are used as a handle.
         */
        get: function () {
            return this._getOption('handles');
        },
        set: function (value) {
            this._setOption('handles', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "height", {
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
    Object.defineProperty(DxResizableComponent.prototype, "maxHeight", {
        /**
         * Specifies the upper height boundary for resizing.
         */
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "maxWidth", {
        /**
         * Specifies the upper width boundary for resizing.
         */
        get: function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "minHeight", {
        /**
         * Specifies the lower height boundary for resizing.
         */
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "minWidth", {
        /**
         * Specifies the lower width boundary for resizing.
         */
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxResizableComponent.prototype, "width", {
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
    DxResizableComponent.prototype._createInstance = function (element, options) {
        return new DxResizable(element, options);
    };
    DxResizableComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxResizableComponent.ctorParameters = function () { return [
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
    ], DxResizableComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxResizableComponent.prototype, "handles", null);
    __decorate([
        Input()
    ], DxResizableComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxResizableComponent.prototype, "maxHeight", null);
    __decorate([
        Input()
    ], DxResizableComponent.prototype, "maxWidth", null);
    __decorate([
        Input()
    ], DxResizableComponent.prototype, "minHeight", null);
    __decorate([
        Input()
    ], DxResizableComponent.prototype, "minWidth", null);
    __decorate([
        Input()
    ], DxResizableComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxResizableComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "onResize", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "onResizeEnd", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "onResizeStart", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "handlesChange", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "maxHeightChange", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "maxWidthChange", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "minHeightChange", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "minWidthChange", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxResizableComponent.prototype, "widthChange", void 0);
    DxResizableComponent = __decorate([
        Component({
            selector: 'dx-resizable',
            template: '<ng-content></ng-content>',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxResizableComponent);
    return DxResizableComponent;
}(DxComponent));
var DxResizableModule = /** @class */ (function () {
    function DxResizableModule() {
    }
    DxResizableModule = __decorate([
        NgModule({
            imports: [
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxResizableComponent
            ],
            exports: [
                DxResizableComponent,
                DxTemplateModule
            ]
        })
    ], DxResizableModule);
    return DxResizableModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxResizableComponent, DxResizableModule };
//# sourceMappingURL=devextreme-angular-ui-resizable.js.map
