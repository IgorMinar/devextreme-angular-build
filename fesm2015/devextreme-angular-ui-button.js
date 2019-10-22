import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxButton from 'devextreme/ui/button';
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
 * The Button widget is a simple button that performs specified commands when a user clicks it.
 */
let DxButtonComponent = class DxButtonComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._createEventEmitters([
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'iconChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'templateChange' },
            { emit: 'textChange' },
            { emit: 'typeChange' },
            { emit: 'useSubmitBehaviorChange' },
            { emit: 'validationGroupChange' },
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
     * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
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
     * Specifies the icon to be displayed on the button.
     */
    get icon() {
        return this._getOption('icon');
    }
    set icon(value) {
        this._setOption('icon', value);
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
     * Specifies how the button is styled.
     */
    get stylingMode() {
        return this._getOption('stylingMode');
    }
    set stylingMode(value) {
        this._setOption('stylingMode', value);
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
     * Specifies a custom template for the Button widget.
     */
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    /**
     * The text displayed on the button.
     */
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    /**
     * Specifies the button type.
     */
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    /**
     * Specifies whether or not the button must submit an HTML form.
     */
    get useSubmitBehavior() {
        return this._getOption('useSubmitBehavior');
    }
    set useSubmitBehavior(value) {
        this._setOption('useSubmitBehavior', value);
    }
    /**
     * Specifies the name of the validation group to be accessed in the click event handler.
     */
    get validationGroup() {
        return this._getOption('validationGroup');
    }
    set validationGroup(value) {
        this._setOption('validationGroup', value);
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
        return new DxButton(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
DxButtonComponent.ctorParameters = () => [
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
], DxButtonComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "height", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "hint", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "icon", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "stylingMode", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "template", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "text", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "type", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "useSubmitBehavior", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "validationGroup", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "visible", null);
__decorate([
    Input()
], DxButtonComponent.prototype, "width", null);
__decorate([
    Output()
], DxButtonComponent.prototype, "onClick", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "iconChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "stylingModeChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "templateChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "textChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "typeChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "useSubmitBehaviorChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "validationGroupChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxButtonComponent.prototype, "widthChange", void 0);
DxButtonComponent = __decorate([
    Component({
        selector: 'dx-button',
        template: '<ng-content></ng-content>',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxButtonComponent);
let DxButtonModule = class DxButtonModule {
};
DxButtonModule = __decorate([
    NgModule({
        imports: [
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxButtonComponent
        ],
        exports: [
            DxButtonComponent,
            DxTemplateModule
        ]
    })
], DxButtonModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxButtonComponent, DxButtonModule };
//# sourceMappingURL=devextreme-angular-ui-button.js.map
