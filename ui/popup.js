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
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import DxPopup from 'devextreme/ui/popup';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoAnimationModule } from './nested/animation';
import { DxoHideModule } from './nested/hide';
import { DxoShowModule } from './nested/show';
import { DxoPositionModule } from './nested/position';
import { DxoAtModule } from './nested/at';
import { DxoBoundaryOffsetModule } from './nested/boundary-offset';
import { DxoCollisionModule } from './nested/collision';
import { DxoMyModule } from './nested/my';
import { DxoOffsetModule } from './nested/offset';
import { DxiToolbarItemModule } from './nested/toolbar-item-dxi';
import { DxiToolbarItemComponent } from './nested/toolbar-item-dxi';
/**
 * The Popup widget is a pop-up window overlaying the current view.
 */
var DxPopupComponent = (function (_super) {
    __extends(DxPopupComponent, _super);
    function DxPopupComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'resize', emit: 'onResize' },
            { subscribe: 'resizeEnd', emit: 'onResizeEnd' },
            { subscribe: 'resizeStart', emit: 'onResizeStart' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { emit: 'accessKeyChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnBackButtonChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'containerChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'dragEnabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'fullScreenChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'positionChange' },
            { emit: 'resizeEnabledChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'showCloseButtonChange' },
            { emit: 'showTitleChange' },
            { emit: 'tabIndexChange' },
            { emit: 'titleChange' },
            { emit: 'titleTemplateChange' },
            { emit: 'toolbarItemsChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPopupComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "animation", {
        get: /**
             * Configures widget visibility animations. This object contains two fields: show and hide.
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
    Object.defineProperty(DxPopupComponent.prototype, "closeOnBackButton", {
        get: /**
             * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
             */
        function () {
            return this._getOption('closeOnBackButton');
        },
        set: function (value) {
            this._setOption('closeOnBackButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "closeOnOutsideClick", {
        get: /**
             * Specifies whether to close the widget if a user clicks outside it.
             */
        function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "container", {
        get: /**
             * Specifies the container in which to place the widget.
             */
        function () {
            return this._getOption('container');
        },
        set: function (value) {
            this._setOption('container', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "contentTemplate", {
        get: /**
             * Specifies a custom template for the widget content.
             */
        function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to render the widget's content when it is displayed. If false, the content is rendered immediately.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxPopupComponent.prototype, "dragEnabled", {
        get: /**
             * Specifies whether or not to allow a user to drag the popup window.
             */
        function () {
            return this._getOption('dragEnabled');
        },
        set: function (value) {
            this._setOption('dragEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPopupComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "fullScreen", {
        get: /**
             * A Boolean value specifying whether or not to display the widget in full-screen mode.
             */
        function () {
            return this._getOption('fullScreen');
        },
        set: function (value) {
            this._setOption('fullScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height in pixels.
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
    Object.defineProperty(DxPopupComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "maxHeight", {
        get: /**
             * Specifies the maximum height the widget can reach while resizing.
             */
        function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "maxWidth", {
        get: /**
             * Specifies the maximum width the widget can reach while resizing.
             */
        function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "minHeight", {
        get: /**
             * Specifies the minimum height the widget can reach while resizing.
             */
        function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "minWidth", {
        get: /**
             * Specifies the minimum width the widget can reach while resizing.
             */
        function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "position", {
        get: /**
             * Positions the widget.
             */
        function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "resizeEnabled", {
        get: /**
             * Specifies whether or not an end user can resize the widget.
             */
        function () {
            return this._getOption('resizeEnabled');
        },
        set: function (value) {
            this._setOption('resizeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPopupComponent.prototype, "shading", {
        get: /**
             * Specifies whether to shade the background when the widget is active.
             */
        function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "shadingColor", {
        get: /**
             * Specifies the shading color.
             */
        function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "showCloseButton", {
        get: /**
             * Specifies whether or not the widget displays the Close button.
             */
        function () {
            return this._getOption('showCloseButton');
        },
        set: function (value) {
            this._setOption('showCloseButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "showTitle", {
        get: /**
             * A Boolean value specifying whether or not to display the title in the popup window.
             */
        function () {
            return this._getOption('showTitle');
        },
        set: function (value) {
            this._setOption('showTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "title", {
        get: /**
             * The title in the overlay window.
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
    Object.defineProperty(DxPopupComponent.prototype, "titleTemplate", {
        get: /**
             * Specifies a custom template for the widget title. Does not apply if the title is defined.
             */
        function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "toolbarItems", {
        get: /**
             * Configures toolbar items.
             */
        function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this._setOption('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "visible", {
        get: /**
             * A Boolean value specifying whether or not the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width in pixels.
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
    Object.defineProperty(DxPopupComponent.prototype, "toolbarItemsChildren", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this.setChildren('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPopupComponent.prototype._createInstance = function (element, options) {
        return new DxPopup(element, options);
    };
    DxPopupComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPopupComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('toolbarItems', changes);
    };
    DxPopupComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPopupComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('toolbarItems');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxPopupComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-popup',
                    template: '<ng-content></ng-content>',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxPopupComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxPopupComponent.propDecorators = {
        "accessKey": [{ type: Input },],
        "animation": [{ type: Input },],
        "closeOnBackButton": [{ type: Input },],
        "closeOnOutsideClick": [{ type: Input },],
        "container": [{ type: Input },],
        "contentTemplate": [{ type: Input },],
        "deferRendering": [{ type: Input },],
        "disabled": [{ type: Input },],
        "dragEnabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "fullScreen": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "maxHeight": [{ type: Input },],
        "maxWidth": [{ type: Input },],
        "minHeight": [{ type: Input },],
        "minWidth": [{ type: Input },],
        "position": [{ type: Input },],
        "resizeEnabled": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "shading": [{ type: Input },],
        "shadingColor": [{ type: Input },],
        "showCloseButton": [{ type: Input },],
        "showTitle": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "title": [{ type: Input },],
        "titleTemplate": [{ type: Input },],
        "toolbarItems": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onContentReady": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onHidden": [{ type: Output },],
        "onHiding": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onResize": [{ type: Output },],
        "onResizeEnd": [{ type: Output },],
        "onResizeStart": [{ type: Output },],
        "onShowing": [{ type: Output },],
        "onShown": [{ type: Output },],
        "onTitleRendered": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "animationChange": [{ type: Output },],
        "closeOnBackButtonChange": [{ type: Output },],
        "closeOnOutsideClickChange": [{ type: Output },],
        "containerChange": [{ type: Output },],
        "contentTemplateChange": [{ type: Output },],
        "deferRenderingChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "dragEnabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "fullScreenChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "maxHeightChange": [{ type: Output },],
        "maxWidthChange": [{ type: Output },],
        "minHeightChange": [{ type: Output },],
        "minWidthChange": [{ type: Output },],
        "positionChange": [{ type: Output },],
        "resizeEnabledChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "shadingChange": [{ type: Output },],
        "shadingColorChange": [{ type: Output },],
        "showCloseButtonChange": [{ type: Output },],
        "showTitleChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "titleChange": [{ type: Output },],
        "titleTemplateChange": [{ type: Output },],
        "toolbarItemsChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "toolbarItemsChildren": [{ type: ContentChildren, args: [DxiToolbarItemComponent,] },],
    };
    return DxPopupComponent;
}(DxComponent));
export { DxPopupComponent };
var DxPopupModule = (function () {
    function DxPopupModule() {
    }
    DxPopupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        DxoAnimationModule,
                        DxoHideModule,
                        DxoShowModule,
                        DxoPositionModule,
                        DxoAtModule,
                        DxoBoundaryOffsetModule,
                        DxoCollisionModule,
                        DxoMyModule,
                        DxoOffsetModule,
                        DxiToolbarItemModule,
                        DxIntegrationModule,
                        DxTemplateModule,
                        BrowserTransferStateModule
                    ],
                    declarations: [
                        DxPopupComponent
                    ],
                    exports: [
                        DxPopupComponent,
                        DxoAnimationModule,
                        DxoHideModule,
                        DxoShowModule,
                        DxoPositionModule,
                        DxoAtModule,
                        DxoBoundaryOffsetModule,
                        DxoCollisionModule,
                        DxoMyModule,
                        DxoOffsetModule,
                        DxiToolbarItemModule,
                        DxTemplateModule
                    ]
                },] },
    ];
    return DxPopupModule;
}());
export { DxPopupModule };
//# sourceMappingURL=popup.js.map