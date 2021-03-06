import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxDrawer from 'devextreme/ui/drawer';
import { DxComponent, DxTemplateHost, WatcherHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';

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
 * The Drawer is a dismissible or permanently visible panel used for navigation in responsive web application layouts.
 */
let DxDrawerComponent = class DxDrawerComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationDurationChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxSizeChange' },
            { emit: 'minSizeChange' },
            { emit: 'openedChange' },
            { emit: 'openedStateModeChange' },
            { emit: 'positionChange' },
            { emit: 'revealModeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'targetChange' },
            { emit: 'templateChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(this);
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
     * Specifies the duration of the drawer's opening and closing animation (in milliseconds). Applies only if animationEnabled is true.
     */
    get animationDuration() {
        return this._getOption('animationDuration');
    }
    set animationDuration(value) {
        this._setOption('animationDuration', value);
    }
    /**
     * Specifies whether to use an opening and closing animation.
     */
    get animationEnabled() {
        return this._getOption('animationEnabled');
    }
    set animationEnabled(value) {
        this._setOption('animationEnabled', value);
    }
    /**
     * Specifies whether to close the drawer if a user clicks or taps the view area.
     */
    get closeOnOutsideClick() {
        return this._getOption('closeOnOutsideClick');
    }
    set closeOnOutsideClick(value) {
        this._setOption('closeOnOutsideClick', value);
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
     * Specifies the drawer's width or height (depending on the drawer's position) in the opened state.
     */
    get maxSize() {
        return this._getOption('maxSize');
    }
    set maxSize(value) {
        this._setOption('maxSize', value);
    }
    /**
     * Specifies the drawer's width or height (depending on the drawer's position) in the closed state.
     */
    get minSize() {
        return this._getOption('minSize');
    }
    set minSize(value) {
        this._setOption('minSize', value);
    }
    /**
     * Specifies whether the drawer is opened.
     */
    get opened() {
        return this._getOption('opened');
    }
    set opened(value) {
        this._setOption('opened', value);
    }
    /**
     * Specifies how the drawer interacts with the view in the opened state.
     */
    get openedStateMode() {
        return this._getOption('openedStateMode');
    }
    set openedStateMode(value) {
        this._setOption('openedStateMode', value);
    }
    /**
     * Specifies the drawer's position in relation to the view.
     */
    get position() {
        return this._getOption('position');
    }
    set position(value) {
        this._setOption('position', value);
    }
    /**
     * Specifies the drawer's reveal mode.
     */
    get revealMode() {
        return this._getOption('revealMode');
    }
    set revealMode(value) {
        this._setOption('revealMode', value);
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
     * Specifies whether to shade the view when the drawer is opened.
     */
    get shading() {
        return this._getOption('shading');
    }
    set shading(value) {
        this._setOption('shading', value);
    }
    /**
     * Specifies the target element associated with the drawer. Applies only when the openedStateMode is "overlap".
     */
    get target() {
        return this._getOption('target');
    }
    set target(value) {
        this._setOption('target', value);
    }
    /**
     * Specifies the drawer's content.
     */
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
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
        return new DxDrawer(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
DxDrawerComponent.ctorParameters = () => [
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
], DxDrawerComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "animationDuration", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "animationEnabled", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "closeOnOutsideClick", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "height", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "hint", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "maxSize", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "minSize", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "opened", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "openedStateMode", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "position", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "revealMode", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "shading", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "target", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "template", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "visible", null);
__decorate([
    Input()
], DxDrawerComponent.prototype, "width", null);
__decorate([
    Output()
], DxDrawerComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "animationDurationChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "animationEnabledChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "closeOnOutsideClickChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "maxSizeChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "minSizeChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "openedChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "openedStateModeChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "positionChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "revealModeChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "shadingChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "targetChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "templateChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxDrawerComponent.prototype, "widthChange", void 0);
DxDrawerComponent = __decorate([
    Component({
        selector: 'dx-drawer',
        template: '<ng-content></ng-content>',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxDrawerComponent);
let DxDrawerModule = class DxDrawerModule {
};
DxDrawerModule = __decorate([
    NgModule({
        imports: [
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxDrawerComponent
        ],
        exports: [
            DxDrawerComponent,
            DxTemplateModule
        ]
    })
], DxDrawerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxDrawerComponent, DxDrawerModule };
//# sourceMappingURL=devextreme-angular-ui-drawer.js.map
