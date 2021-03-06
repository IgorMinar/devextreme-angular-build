import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxDeferRendering from 'devextreme/ui/defer_rendering';
import { DxComponent, DxTemplateHost, WatcherHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoAnimationModule } from 'devextreme-angular/ui/nested';

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
 * The DeferRendering is a widget that waits for its content to be ready before rendering it. While the content is getting ready, the DeferRendering displays a loading indicator.
 */
let DxDeferRenderingComponent = class DxDeferRenderingComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'rendered', emit: 'onRendered' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'renderWhenChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showLoadIndicatorChange' },
            { emit: 'staggerItemSelectorChange' },
            { emit: 'tabIndexChange' },
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
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Specifies the animation to be used to show the rendered content.
     */
    get animation() {
        return this._getOption('animation');
    }
    set animation(value) {
        this._setOption('animation', value);
    }
    /**
     * Specifies whether the widget responds to user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
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
     * Specifies the widget's height.
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
     * Specifies when the widget content is rendered.
     */
    get renderWhen() {
        return this._getOption('renderWhen');
    }
    set renderWhen(value) {
        this._setOption('renderWhen', value);
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
     * Indicates if a load indicator should be shown until the widget's content is rendered.
     */
    get showLoadIndicator() {
        return this._getOption('showLoadIndicator');
    }
    set showLoadIndicator(value) {
        this._setOption('showLoadIndicator', value);
    }
    /**
     * Specifies a jQuery selector of items that should be rendered using a staggered animation.
     */
    get staggerItemSelector() {
        return this._getOption('staggerItemSelector');
    }
    set staggerItemSelector(value) {
        this._setOption('staggerItemSelector', value);
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
     * Specifies whether the widget is visible.
     */
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    /**
     * Specifies the widget's width.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    _createInstance(element, options) {
        return new DxDeferRendering(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
DxDeferRenderingComponent.ctorParameters = () => [
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
], DxDeferRenderingComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "animation", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "height", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "hint", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "renderWhen", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "showLoadIndicator", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "staggerItemSelector", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "visible", null);
__decorate([
    Input()
], DxDeferRenderingComponent.prototype, "width", null);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "onRendered", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "onShown", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "animationChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "renderWhenChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "showLoadIndicatorChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "staggerItemSelectorChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxDeferRenderingComponent.prototype, "widthChange", void 0);
DxDeferRenderingComponent = __decorate([
    Component({
        selector: 'dx-defer-rendering',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxDeferRenderingComponent);
let DxDeferRenderingModule = class DxDeferRenderingModule {
};
DxDeferRenderingModule = __decorate([
    NgModule({
        imports: [
            DxoAnimationModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxDeferRenderingComponent
        ],
        exports: [
            DxDeferRenderingComponent,
            DxoAnimationModule,
            DxTemplateModule
        ]
    })
], DxDeferRenderingModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxDeferRenderingComponent, DxDeferRenderingModule };
//# sourceMappingURL=devextreme-angular-ui-defer-rendering.js.map
