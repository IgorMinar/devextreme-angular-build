import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxPopover from 'devextreme/ui/popover';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiToolbarItemComponent, DxoAnimationModule, DxoHideModule, DxoShowModule, DxoHideEventModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxoShowEventModule, DxiToolbarItemModule } from 'devextreme-angular/ui/nested';

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
 * The Popover is a widget that shows notifications within a box with an arrow pointing to a specified UI element.
 */
var DxPopoverComponent = /** @class */ (function (_super) {
    __extends(DxPopoverComponent, _super);
    function DxPopoverComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
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
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { emit: 'animationChange' },
            { emit: 'closeOnBackButtonChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'containerChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hideEventChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'showCloseButtonChange' },
            { emit: 'showEventChange' },
            { emit: 'showTitleChange' },
            { emit: 'targetChange' },
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
    Object.defineProperty(DxPopoverComponent.prototype, "animation", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "closeOnBackButton", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "closeOnOutsideClick", {
        /**
         * A Boolean value specifying whether or not the widget is closed if a user clicks outside of the popover window and outside the target element.
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
    Object.defineProperty(DxPopoverComponent.prototype, "container", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "contentTemplate", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "deferRendering", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "disabled", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "height", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "hideEvent", {
        /**
         * Specifies options of popover hiding.
         */
        get: function () {
            return this._getOption('hideEvent');
        },
        set: function (value) {
            this._setOption('hideEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "hint", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "maxHeight", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "maxWidth", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "minHeight", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "minWidth", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "position", {
        /**
         * An object defining widget positioning options.
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
    Object.defineProperty(DxPopoverComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "shading", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "shadingColor", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "showCloseButton", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "showEvent", {
        /**
         * Specifies options for displaying the widget.
         */
        get: function () {
            return this._getOption('showEvent');
        },
        set: function (value) {
            this._setOption('showEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "showTitle", {
        /**
         * A Boolean value specifying whether or not to display the title in the overlay window.
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
    Object.defineProperty(DxPopoverComponent.prototype, "target", {
        /**
         * The target element associated with the widget.
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
    Object.defineProperty(DxPopoverComponent.prototype, "title", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "titleTemplate", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "toolbarItems", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "visible", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "width", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "toolbarItemsChildren", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this.setChildren('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPopoverComponent.prototype._createInstance = function (element, options) {
        return new DxPopover(element, options);
    };
    DxPopoverComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPopoverComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('toolbarItems', changes);
    };
    DxPopoverComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPopoverComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('toolbarItems');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxPopoverComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPopoverComponent.ctorParameters = function () { return [
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
    ], DxPopoverComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "closeOnBackButton", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "closeOnOutsideClick", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "container", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "contentTemplate", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "hideEvent", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "maxHeight", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "maxWidth", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "minHeight", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "minWidth", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "position", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "shading", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "shadingColor", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "showCloseButton", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "showEvent", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "showTitle", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "target", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "title", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "titleTemplate", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "toolbarItems", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxPopoverComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "onHidden", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "onHiding", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "onShowing", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "onShown", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "onTitleRendered", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "animationChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "closeOnBackButtonChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "closeOnOutsideClickChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "containerChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "contentTemplateChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "hideEventChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "maxHeightChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "maxWidthChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "minHeightChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "minWidthChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "positionChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "shadingChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "shadingColorChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "showCloseButtonChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "showEventChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "showTitleChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "targetChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "titleChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "titleTemplateChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "toolbarItemsChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxPopoverComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiToolbarItemComponent)
    ], DxPopoverComponent.prototype, "toolbarItemsChildren", null);
    DxPopoverComponent = __decorate([
        Component({
            selector: 'dx-popover',
            template: '<ng-content></ng-content>',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxPopoverComponent);
    return DxPopoverComponent;
}(DxComponent));
var DxPopoverModule = /** @class */ (function () {
    function DxPopoverModule() {
    }
    DxPopoverModule = __decorate([
        NgModule({
            imports: [
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoHideEventModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxoShowEventModule,
                DxiToolbarItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxPopoverComponent
            ],
            exports: [
                DxPopoverComponent,
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoHideEventModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxoShowEventModule,
                DxiToolbarItemModule,
                DxTemplateModule
            ]
        })
    ], DxPopoverModule);
    return DxPopoverModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxPopoverComponent, DxPopoverModule };
//# sourceMappingURL=devextreme-angular-ui-popover.js.map
