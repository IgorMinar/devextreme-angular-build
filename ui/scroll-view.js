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
import DxScrollView from 'devextreme/ui/scroll_view';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The ScrollView is a widget that enables a user to scroll its content.
 */
var DxScrollViewComponent = (function (_super) {
    __extends(DxScrollViewComponent, _super);
    function DxScrollViewComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pullDown', emit: 'onPullDown' },
            { subscribe: 'reachBottom', emit: 'onReachBottom' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'updated', emit: 'onUpdated' },
            { emit: 'bounceEnabledChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'reachBottomTextChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollByThumbChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'useNativeChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxScrollViewComponent.prototype, "bounceEnabled", {
        get: /**
             * A Boolean value specifying whether to enable or disable the bounce-back effect.
             */
        function () {
            return this._getOption('bounceEnabled');
        },
        set: function (value) {
            this._setOption('bounceEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "direction", {
        get: /**
             * A string value specifying the available scrolling directions.
             */
        function () {
            return this._getOption('direction');
        },
        set: function (value) {
            this._setOption('direction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "disabled", {
        get: /**
             * A Boolean value specifying whether or not the widget can respond to user interaction.
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
    Object.defineProperty(DxScrollViewComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxScrollViewComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "pulledDownText", {
        get: /**
             * Specifies the text shown in the pullDown panel when pulling the content down lowers the refresh threshold.
             */
        function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "pullingDownText", {
        get: /**
             * Specifies the text shown in the pullDown panel while pulling the content down to the refresh threshold.
             */
        function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "reachBottomText", {
        get: /**
             * Specifies the text shown in the pullDown panel displayed when content is scrolled to the bottom.
             */
        function () {
            return this._getOption('reachBottomText');
        },
        set: function (value) {
            this._setOption('reachBottomText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "refreshingText", {
        get: /**
             * Specifies the text shown in the pullDown panel displayed when the content is being refreshed.
             */
        function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByContent", {
        get: /**
             * A Boolean value specifying whether or not an end-user can scroll the widget content swiping it up or down. Applies only if useNative is false
             */
        function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByThumb", {
        get: /**
             * A Boolean value specifying whether or not an end-user can scroll the widget content using the scrollbar.
             */
        function () {
            return this._getOption('scrollByThumb');
        },
        set: function (value) {
            this._setOption('scrollByThumb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "showScrollbar", {
        get: /**
             * Specifies when the widget shows the scrollbar.
             */
        function () {
            return this._getOption('showScrollbar');
        },
        set: function (value) {
            this._setOption('showScrollbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "useNative", {
        get: /**
             * Indicates whether to use native or simulated scrolling.
             */
        function () {
            return this._getOption('useNative');
        },
        set: function (value) {
            this._setOption('useNative', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxScrollViewComponent.prototype._createInstance = function (element, options) {
        return new DxScrollView(element, options);
    };
    DxScrollViewComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxScrollViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-scroll-view',
                    template: '<ng-content></ng-content>',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxScrollViewComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxScrollViewComponent.propDecorators = {
        "bounceEnabled": [{ type: Input },],
        "direction": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "height": [{ type: Input },],
        "pulledDownText": [{ type: Input },],
        "pullingDownText": [{ type: Input },],
        "reachBottomText": [{ type: Input },],
        "refreshingText": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "scrollByContent": [{ type: Input },],
        "scrollByThumb": [{ type: Input },],
        "showScrollbar": [{ type: Input },],
        "useNative": [{ type: Input },],
        "width": [{ type: Input },],
        "onDisposing": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onPullDown": [{ type: Output },],
        "onReachBottom": [{ type: Output },],
        "onScroll": [{ type: Output },],
        "onUpdated": [{ type: Output },],
        "bounceEnabledChange": [{ type: Output },],
        "directionChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "pulledDownTextChange": [{ type: Output },],
        "pullingDownTextChange": [{ type: Output },],
        "reachBottomTextChange": [{ type: Output },],
        "refreshingTextChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "scrollByContentChange": [{ type: Output },],
        "scrollByThumbChange": [{ type: Output },],
        "showScrollbarChange": [{ type: Output },],
        "useNativeChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
    };
    return DxScrollViewComponent;
}(DxComponent));
export { DxScrollViewComponent };
var DxScrollViewModule = (function () {
    function DxScrollViewModule() {
    }
    DxScrollViewModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        DxIntegrationModule,
                        DxTemplateModule,
                        BrowserTransferStateModule
                    ],
                    declarations: [
                        DxScrollViewComponent
                    ],
                    exports: [
                        DxScrollViewComponent,
                        DxTemplateModule
                    ]
                },] },
    ];
    return DxScrollViewModule;
}());
export { DxScrollViewModule };
//# sourceMappingURL=scroll-view.js.map