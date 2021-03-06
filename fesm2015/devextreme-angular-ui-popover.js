import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxPopover from 'devextreme/ui/popover';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
let DxPopoverComponent = class DxPopoverComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
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
        this._idh.setHost(this);
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
     * Specifies whether or not the widget displays the Close button.
     */
    get showCloseButton() {
        return this._getOption('showCloseButton');
    }
    set showCloseButton(value) {
        this._setOption('showCloseButton', value);
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
     * A Boolean value specifying whether or not to display the title in the overlay window.
     */
    get showTitle() {
        return this._getOption('showTitle');
    }
    set showTitle(value) {
        this._setOption('showTitle', value);
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
     * The title in the overlay window.
     */
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    /**
     * Specifies a custom template for the widget title. Does not apply if the title is defined.
     */
    get titleTemplate() {
        return this._getOption('titleTemplate');
    }
    set titleTemplate(value) {
        this._setOption('titleTemplate', value);
    }
    /**
     * Configures toolbar items.
     */
    get toolbarItems() {
        return this._getOption('toolbarItems');
    }
    set toolbarItems(value) {
        this._setOption('toolbarItems', value);
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
    get toolbarItemsChildren() {
        return this._getOption('toolbarItems');
    }
    set toolbarItemsChildren(value) {
        this.setChildren('toolbarItems', value);
    }
    _createInstance(element, options) {
        return new DxPopover(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('toolbarItems', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('toolbarItems');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }
    _setOption(name, value) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
};
DxPopoverComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
let DxPopoverModule = class DxPopoverModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxPopoverComponent, DxPopoverModule };
//# sourceMappingURL=devextreme-angular-ui-popover.js.map
