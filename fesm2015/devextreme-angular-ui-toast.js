import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxToast from 'devextreme/ui/toast';
import { DxComponent, DxTemplateHost, WatcherHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoAnimationModule, DxoHideModule, DxoShowModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule } from 'devextreme-angular/ui/nested';

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
 * The Toast is a widget that provides pop-up notifications.
 */
let DxToastComponent = class DxToastComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'accessKeyChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnBackButtonChange' },
            { emit: 'closeOnClickChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'closeOnSwipeChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'displayTimeChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'messageChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'tabIndexChange' },
            { emit: 'typeChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(this);
    }
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    /**
     * Configures widget visibility animations. This object contains two fields: show and hide.
     */
    get animation() {
        return this._getOption('animation');
    }
    set animation(value) {
        this._setOption('animation', value);
    }
    /**
     * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
     */
    get closeOnBackButton() {
        return this._getOption('closeOnBackButton');
    }
    set closeOnBackButton(value) {
        this._setOption('closeOnBackButton', value);
    }
    /**
     * A Boolean value specifying whether or not the toast is closed if a user clicks it.
     */
    get closeOnClick() {
        return this._getOption('closeOnClick');
    }
    set closeOnClick(value) {
        this._setOption('closeOnClick', value);
    }
    /**
     * Specifies whether to close the widget if a user clicks outside it.
     */
    get closeOnOutsideClick() {
        return this._getOption('closeOnOutsideClick');
    }
    set closeOnOutsideClick(value) {
        this._setOption('closeOnOutsideClick', value);
    }
    /**
     * A Boolean value specifying whether or not the toast is closed if a user swipes it out of the screen boundaries.
     */
    get closeOnSwipe() {
        return this._getOption('closeOnSwipe');
    }
    set closeOnSwipe(value) {
        this._setOption('closeOnSwipe', value);
    }
    /**
     * Specifies a custom template for the widget content.
     */
    get contentTemplate() {
        return this._getOption('contentTemplate');
    }
    set contentTemplate(value) {
        this._setOption('contentTemplate', value);
    }
    /**
     * Specifies whether to render the widget's content when it is displayed. If false, the content is rendered immediately.
     */
    get deferRendering() {
        return this._getOption('deferRendering');
    }
    set deferRendering(value) {
        this._setOption('deferRendering', value);
    }
    /**
     * The time span in milliseconds during which the Toast widget is visible.
     */
    get displayTime() {
        return this._getOption('displayTime');
    }
    set displayTime(value) {
        this._setOption('displayTime', value);
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
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    /**
     * Specifies the widget's height in pixels.
     */
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    /**
     * Specifies the maximum height the widget can reach while resizing.
     */
    get maxHeight() {
        return this._getOption('maxHeight');
    }
    set maxHeight(value) {
        this._setOption('maxHeight', value);
    }
    /**
     * Specifies the maximum width the widget can reach while resizing.
     */
    get maxWidth() {
        return this._getOption('maxWidth');
    }
    set maxWidth(value) {
        this._setOption('maxWidth', value);
    }
    /**
     * The Toast message text.
     */
    get message() {
        return this._getOption('message');
    }
    set message(value) {
        this._setOption('message', value);
    }
    /**
     * Specifies the minimum height the widget can reach while resizing.
     */
    get minHeight() {
        return this._getOption('minHeight');
    }
    set minHeight(value) {
        this._setOption('minHeight', value);
    }
    /**
     * Specifies the minimum width the widget can reach while resizing.
     */
    get minWidth() {
        return this._getOption('minWidth');
    }
    set minWidth(value) {
        this._setOption('minWidth', value);
    }
    /**
     * Positions the widget.
     */
    get position() {
        return this._getOption('position');
    }
    set position(value) {
        this._setOption('position', value);
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
     * Specifies whether to shade the background when the widget is active.
     */
    get shading() {
        return this._getOption('shading');
    }
    set shading(value) {
        this._setOption('shading', value);
    }
    /**
     * Specifies the shading color.
     */
    get shadingColor() {
        return this._getOption('shadingColor');
    }
    set shadingColor(value) {
        this._setOption('shadingColor', value);
    }
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    /**
     * Specifies the Toast widget type.
     */
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    /**
     * A Boolean value specifying whether or not the widget is visible.
     */
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    /**
     * Specifies the widget's width in pixels.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    _createInstance(element, options) {
        return new DxToast(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
DxToastComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    Input()
], DxToastComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxToastComponent.prototype, "animation", null);
__decorate([
    Input()
], DxToastComponent.prototype, "closeOnBackButton", null);
__decorate([
    Input()
], DxToastComponent.prototype, "closeOnClick", null);
__decorate([
    Input()
], DxToastComponent.prototype, "closeOnOutsideClick", null);
__decorate([
    Input()
], DxToastComponent.prototype, "closeOnSwipe", null);
__decorate([
    Input()
], DxToastComponent.prototype, "contentTemplate", null);
__decorate([
    Input()
], DxToastComponent.prototype, "deferRendering", null);
__decorate([
    Input()
], DxToastComponent.prototype, "displayTime", null);
__decorate([
    Input()
], DxToastComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxToastComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxToastComponent.prototype, "height", null);
__decorate([
    Input()
], DxToastComponent.prototype, "hint", null);
__decorate([
    Input()
], DxToastComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxToastComponent.prototype, "maxHeight", null);
__decorate([
    Input()
], DxToastComponent.prototype, "maxWidth", null);
__decorate([
    Input()
], DxToastComponent.prototype, "message", null);
__decorate([
    Input()
], DxToastComponent.prototype, "minHeight", null);
__decorate([
    Input()
], DxToastComponent.prototype, "minWidth", null);
__decorate([
    Input()
], DxToastComponent.prototype, "position", null);
__decorate([
    Input()
], DxToastComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxToastComponent.prototype, "shading", null);
__decorate([
    Input()
], DxToastComponent.prototype, "shadingColor", null);
__decorate([
    Input()
], DxToastComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxToastComponent.prototype, "type", null);
__decorate([
    Input()
], DxToastComponent.prototype, "visible", null);
__decorate([
    Input()
], DxToastComponent.prototype, "width", null);
__decorate([
    Output()
], DxToastComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "onHidden", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "onHiding", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "onShowing", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "onShown", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "animationChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "closeOnBackButtonChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "closeOnClickChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "closeOnOutsideClickChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "closeOnSwipeChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "contentTemplateChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "deferRenderingChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "displayTimeChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "maxHeightChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "maxWidthChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "messageChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "minHeightChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "minWidthChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "positionChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "shadingChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "shadingColorChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "typeChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxToastComponent.prototype, "widthChange", void 0);
DxToastComponent = __decorate([
    Component({
        selector: 'dx-toast',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxToastComponent);
let DxToastModule = class DxToastModule {
};
DxToastModule = __decorate([
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
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxToastComponent
        ],
        exports: [
            DxToastComponent,
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxoPositionModule,
            DxoAtModule,
            DxoBoundaryOffsetModule,
            DxoCollisionModule,
            DxoMyModule,
            DxoOffsetModule,
            DxTemplateModule
        ]
    })
], DxToastModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxToastComponent, DxToastModule };
//# sourceMappingURL=devextreme-angular-ui-toast.js.map
