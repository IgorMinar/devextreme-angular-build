import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxPopup from 'devextreme/ui/popup';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiToolbarItemComponent, DxoAnimationModule, DxoHideModule, DxoShowModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxiToolbarItemModule } from 'devextreme-angular/ui/nested';

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
 * The Popup widget is a pop-up window overlaying the current view.
 */
var DxPopupComponent = /** @class */ (function (_super) {
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
        /**
         * Specifies the shortcut key that sets focus on the widget.
         */
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "animation", {
        /**
         * Configures widget visibility animations. This object contains two fields: show and hide.
         */
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "closeOnBackButton", {
        /**
         * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
         */
        get: function () {
            return this._getOption('closeOnBackButton');
        },
        set: function (value) {
            this._setOption('closeOnBackButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "closeOnOutsideClick", {
        /**
         * Specifies whether to close the widget if a user clicks outside it.
         */
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "container", {
        /**
         * Specifies the container in which to place the widget.
         */
        get: function () {
            return this._getOption('container');
        },
        set: function (value) {
            this._setOption('container', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "contentTemplate", {
        /**
         * Specifies a custom template for the widget content.
         */
        get: function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "deferRendering", {
        /**
         * Specifies whether to render the widget's content when it is displayed. If false, the content is rendered immediately.
         */
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxPopupComponent.prototype, "dragEnabled", {
        /**
         * Specifies whether or not to allow a user to drag the popup window.
         */
        get: function () {
            return this._getOption('dragEnabled');
        },
        set: function (value) {
            this._setOption('dragEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPopupComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether the widget can be focused using keyboard navigation.
         */
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "fullScreen", {
        /**
         * A Boolean value specifying whether or not to display the widget in full-screen mode.
         */
        get: function () {
            return this._getOption('fullScreen');
        },
        set: function (value) {
            this._setOption('fullScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "height", {
        /**
         * Specifies the widget's height in pixels.
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
    Object.defineProperty(DxPopupComponent.prototype, "hint", {
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
    Object.defineProperty(DxPopupComponent.prototype, "hoverStateEnabled", {
        /**
         * Specifies whether the widget changes its state when a user pauses on it.
         */
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "maxHeight", {
        /**
         * Specifies the maximum height the widget can reach while resizing.
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
    Object.defineProperty(DxPopupComponent.prototype, "maxWidth", {
        /**
         * Specifies the maximum width the widget can reach while resizing.
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
    Object.defineProperty(DxPopupComponent.prototype, "minHeight", {
        /**
         * Specifies the minimum height the widget can reach while resizing.
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
    Object.defineProperty(DxPopupComponent.prototype, "minWidth", {
        /**
         * Specifies the minimum width the widget can reach while resizing.
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
    Object.defineProperty(DxPopupComponent.prototype, "position", {
        /**
         * Positions the widget.
         */
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "resizeEnabled", {
        /**
         * Specifies whether or not an end user can resize the widget.
         */
        get: function () {
            return this._getOption('resizeEnabled');
        },
        set: function (value) {
            this._setOption('resizeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPopupComponent.prototype, "shading", {
        /**
         * Specifies whether to shade the background when the widget is active.
         */
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "shadingColor", {
        /**
         * Specifies the shading color.
         */
        get: function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "showCloseButton", {
        /**
         * Specifies whether or not the widget displays the Close button.
         */
        get: function () {
            return this._getOption('showCloseButton');
        },
        set: function (value) {
            this._setOption('showCloseButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "showTitle", {
        /**
         * A Boolean value specifying whether or not to display the title in the popup window.
         */
        get: function () {
            return this._getOption('showTitle');
        },
        set: function (value) {
            this._setOption('showTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "tabIndex", {
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "title", {
        /**
         * The title in the overlay window.
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
    Object.defineProperty(DxPopupComponent.prototype, "titleTemplate", {
        /**
         * Specifies a custom template for the widget title. Does not apply if the title is defined.
         */
        get: function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "toolbarItems", {
        /**
         * Configures toolbar items.
         */
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this._setOption('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "visible", {
        /**
         * A Boolean value specifying whether or not the widget is visible.
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
    Object.defineProperty(DxPopupComponent.prototype, "width", {
        /**
         * Specifies the widget's width in pixels.
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
    DxPopupComponent.ctorParameters = function () { return [
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
    ], DxPopupComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "closeOnBackButton", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "closeOnOutsideClick", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "container", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "contentTemplate", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "dragEnabled", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "fullScreen", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "maxHeight", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "maxWidth", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "minHeight", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "minWidth", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "position", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "resizeEnabled", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "shading", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "shadingColor", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "showCloseButton", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "showTitle", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "title", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "titleTemplate", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "toolbarItems", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxPopupComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onHidden", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onHiding", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onResize", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onResizeEnd", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onResizeStart", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onShowing", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onShown", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "onTitleRendered", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "closeOnBackButtonChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "closeOnOutsideClickChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "containerChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "contentTemplateChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "dragEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "fullScreenChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "maxHeightChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "maxWidthChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "minHeightChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "minWidthChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "positionChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "resizeEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "shadingChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "shadingColorChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "showCloseButtonChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "showTitleChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "titleChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "titleTemplateChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "toolbarItemsChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxPopupComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiToolbarItemComponent)
    ], DxPopupComponent.prototype, "toolbarItemsChildren", null);
    DxPopupComponent = __decorate([
        Component({
            selector: 'dx-popup',
            template: '<ng-content></ng-content>',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxPopupComponent);
    return DxPopupComponent;
}(DxComponent));
var DxPopupModule = /** @class */ (function () {
    function DxPopupModule() {
    }
    DxPopupModule = __decorate([
        NgModule({
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
        })
    ], DxPopupModule);
    return DxPopupModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxPopupComponent, DxPopupModule };
//# sourceMappingURL=devextreme-angular-ui-popup.js.map
