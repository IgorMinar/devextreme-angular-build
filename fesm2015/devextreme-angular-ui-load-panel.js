import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxLoadPanel from 'devextreme/ui/load_panel';
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
 * The LoadPanel is an overlay widget notifying the viewer that loading is in progress.
 */
let DxLoadPanelComponent = class DxLoadPanelComponent extends DxComponent {
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
            { emit: 'animationChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'containerChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'delayChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'indicatorSrcChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'messageChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'showIndicatorChange' },
            { emit: 'showPaneChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(this);
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
     * Specifies whether to close the widget if a user clicks outside it.
     */
    get closeOnOutsideClick() {
        return this._getOption('closeOnOutsideClick');
    }
    set closeOnOutsideClick(value) {
        this._setOption('closeOnOutsideClick', value);
    }
    /**
     * Specifies the widget's container.
     */
    get container() {
        return this._getOption('container');
    }
    set container(value) {
        this._setOption('container', value);
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
     * The delay in milliseconds after which the load panel is displayed.
     */
    get delay() {
        return this._getOption('delay');
    }
    set delay(value) {
        this._setOption('delay', value);
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
     * Specifies whether or not the widget can be focused.
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
     * A URL pointing to an image to be used as a load indicator.
     */
    get indicatorSrc() {
        return this._getOption('indicatorSrc');
    }
    set indicatorSrc(value) {
        this._setOption('indicatorSrc', value);
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
     * Specifies the text displayed in the load panel. Ignored in the Material Design theme.
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
     * A Boolean value specifying whether or not to show a load indicator.
     */
    get showIndicator() {
        return this._getOption('showIndicator');
    }
    set showIndicator(value) {
        this._setOption('showIndicator', value);
    }
    /**
     * A Boolean value specifying whether or not to show the pane behind the load indicator.
     */
    get showPane() {
        return this._getOption('showPane');
    }
    set showPane(value) {
        this._setOption('showPane', value);
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
        return new DxLoadPanel(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
DxLoadPanelComponent.ctorParameters = () => [
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
], DxLoadPanelComponent.prototype, "animation", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "closeOnOutsideClick", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "container", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "deferRendering", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "delay", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "height", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "hint", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "indicatorSrc", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "maxHeight", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "maxWidth", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "message", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "minHeight", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "minWidth", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "position", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "shading", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "shadingColor", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "showIndicator", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "showPane", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "visible", null);
__decorate([
    Input()
], DxLoadPanelComponent.prototype, "width", null);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "onHidden", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "onHiding", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "onShowing", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "onShown", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "animationChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "closeOnOutsideClickChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "containerChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "deferRenderingChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "delayChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "indicatorSrcChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "maxHeightChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "maxWidthChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "messageChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "minHeightChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "minWidthChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "positionChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "shadingChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "shadingColorChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "showIndicatorChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "showPaneChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxLoadPanelComponent.prototype, "widthChange", void 0);
DxLoadPanelComponent = __decorate([
    Component({
        selector: 'dx-load-panel',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxLoadPanelComponent);
let DxLoadPanelModule = class DxLoadPanelModule {
};
DxLoadPanelModule = __decorate([
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
            DxLoadPanelComponent
        ],
        exports: [
            DxLoadPanelComponent,
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
], DxLoadPanelModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxLoadPanelComponent, DxLoadPanelModule };
//# sourceMappingURL=devextreme-angular-ui-load-panel.js.map
