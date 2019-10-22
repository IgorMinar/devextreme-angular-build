import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxTooltip from 'devextreme/ui/tooltip';
import { DxComponent, DxTemplateHost, WatcherHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoAnimationModule, DxoHideModule, DxoShowModule, DxoHideEventModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxoShowEventModule } from 'devextreme-angular/ui/nested';

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
 * The Tooltip widget displays a tooltip for a specified element on the page.
 */
let DxTooltipComponent = class DxTooltipComponent extends DxComponent {
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
            { emit: 'showEventChange' },
            { emit: 'targetChange' },
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
     * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
     */
    get closeOnBackButton() {
        return this._getOption('closeOnBackButton');
    }
    set closeOnBackButton(value) {
        this._setOption('closeOnBackButton', value);
    }
    /**
     * A Boolean value specifying whether or not the widget is closed if a user clicks outside of the popover window and outside the target element.
     */
    get closeOnOutsideClick() {
        return this._getOption('closeOnOutsideClick');
    }
    set closeOnOutsideClick(value) {
        this._setOption('closeOnOutsideClick', value);
    }
    /**
     * Specifies the container in which to place the widget.
     */
    get container() {
        return this._getOption('container');
    }
    set container(value) {
        this._setOption('container', value);
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
     * Specifies the widget's height.
     */
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    /**
     * Specifies options of popover hiding.
     */
    get hideEvent() {
        return this._getOption('hideEvent');
    }
    set hideEvent(value) {
        this._setOption('hideEvent', value);
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
     * An object defining widget positioning options.
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
     * Specifies options for displaying the widget.
     */
    get showEvent() {
        return this._getOption('showEvent');
    }
    set showEvent(value) {
        this._setOption('showEvent', value);
    }
    /**
     * The target element associated with the widget.
     */
    get target() {
        return this._getOption('target');
    }
    set target(value) {
        this._setOption('target', value);
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
     * Specifies the widget's width.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    _createInstance(element, options) {
        return new DxTooltip(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
DxTooltipComponent.ctorParameters = () => [
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
], DxTooltipComponent.prototype, "animation", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "closeOnBackButton", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "closeOnOutsideClick", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "container", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "contentTemplate", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "deferRendering", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "height", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "hideEvent", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "hint", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "maxHeight", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "maxWidth", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "minHeight", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "minWidth", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "position", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "shading", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "shadingColor", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "showEvent", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "target", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "visible", null);
__decorate([
    Input()
], DxTooltipComponent.prototype, "width", null);
__decorate([
    Output()
], DxTooltipComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "onHidden", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "onHiding", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "onShowing", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "onShown", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "animationChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "closeOnBackButtonChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "closeOnOutsideClickChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "containerChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "contentTemplateChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "deferRenderingChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "hideEventChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "maxHeightChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "maxWidthChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "minHeightChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "minWidthChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "positionChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "shadingChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "shadingColorChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "showEventChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "targetChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxTooltipComponent.prototype, "widthChange", void 0);
DxTooltipComponent = __decorate([
    Component({
        selector: 'dx-tooltip',
        template: '<ng-content></ng-content>',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxTooltipComponent);
let DxTooltipModule = class DxTooltipModule {
};
DxTooltipModule = __decorate([
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
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxTooltipComponent
        ],
        exports: [
            DxTooltipComponent,
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
            DxTemplateModule
        ]
    })
], DxTooltipModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxTooltipComponent, DxTooltipModule };
//# sourceMappingURL=devextreme-angular-ui-tooltip.js.map
