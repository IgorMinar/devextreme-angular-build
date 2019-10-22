import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxPopup from 'devextreme/ui/popup';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
let DxPopupComponent = class DxPopupComponent extends DxComponent {
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
        this._idh.setHost(this);
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
     * Specifies whether to close the widget if a user clicks outside it.
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
     * Specifies whether or not to allow a user to drag the popup window.
     */
    get dragEnabled() {
        return this._getOption('dragEnabled');
    }
    set dragEnabled(value) {
        this._setOption('dragEnabled', value);
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
     * A Boolean value specifying whether or not to display the widget in full-screen mode.
     */
    get fullScreen() {
        return this._getOption('fullScreen');
    }
    set fullScreen(value) {
        this._setOption('fullScreen', value);
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
     * Specifies whether or not an end user can resize the widget.
     */
    get resizeEnabled() {
        return this._getOption('resizeEnabled');
    }
    set resizeEnabled(value) {
        this._setOption('resizeEnabled', value);
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
     * A Boolean value specifying whether or not to display the title in the popup window.
     */
    get showTitle() {
        return this._getOption('showTitle');
    }
    set showTitle(value) {
        this._setOption('showTitle', value);
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
     * Specifies the widget's width in pixels.
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
        return new DxPopup(element, options);
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
DxPopupComponent.ctorParameters = () => [
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
let DxPopupModule = class DxPopupModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxPopupComponent, DxPopupModule };
//# sourceMappingURL=devextreme-angular-ui-popup.js.map
