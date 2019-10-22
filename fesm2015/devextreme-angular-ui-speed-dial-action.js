import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxSpeedDialAction from 'devextreme/ui/speed_dial_action';
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
 * The SpeedDialAction is a button that performs a custom action. It can be represented by a Floating Action Button (FAB) or a button in a speed dial menu opened with the FAB.
 */
let DxSpeedDialActionComponent = class DxSpeedDialActionComponent extends DxComponent {
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
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'iconChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' }
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
     * Specifies the icon the FAB or speed dial action button displays.
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
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    _createInstance(element, options) {
        return new DxSpeedDialAction(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
DxSpeedDialActionComponent.ctorParameters = () => [
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
], DxSpeedDialActionComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxSpeedDialActionComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxSpeedDialActionComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxSpeedDialActionComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxSpeedDialActionComponent.prototype, "hint", null);
__decorate([
    Input()
], DxSpeedDialActionComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxSpeedDialActionComponent.prototype, "icon", null);
__decorate([
    Input()
], DxSpeedDialActionComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxSpeedDialActionComponent.prototype, "tabIndex", null);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "onClick", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "iconChange", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxSpeedDialActionComponent.prototype, "tabIndexChange", void 0);
DxSpeedDialActionComponent = __decorate([
    Component({
        selector: 'dx-speed-dial-action',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxSpeedDialActionComponent);
let DxSpeedDialActionModule = class DxSpeedDialActionModule {
};
DxSpeedDialActionModule = __decorate([
    NgModule({
        imports: [
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxSpeedDialActionComponent
        ],
        exports: [
            DxSpeedDialActionComponent,
            DxTemplateModule
        ]
    })
], DxSpeedDialActionModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxSpeedDialActionComponent, DxSpeedDialActionModule };
//# sourceMappingURL=devextreme-angular-ui-speed-dial-action.js.map
