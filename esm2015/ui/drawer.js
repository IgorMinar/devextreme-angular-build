/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter } from '@angular/core';
import DxDrawer from 'devextreme/ui/drawer';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxDrawerComponent.prototype, "activeStateEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxDrawerComponent.prototype, "animationDuration", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxDrawerComponent.prototype, "animationEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxDrawerComponent.prototype, "closeOnOutsideClick", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxDrawerComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxDrawerComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxDrawerComponent.prototype, "height", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxDrawerComponent.prototype, "hint", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxDrawerComponent.prototype, "hoverStateEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxDrawerComponent.prototype, "maxSize", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxDrawerComponent.prototype, "minSize", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxDrawerComponent.prototype, "opened", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxDrawerComponent.prototype, "openedStateMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxDrawerComponent.prototype, "position", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxDrawerComponent.prototype, "revealMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxDrawerComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxDrawerComponent.prototype, "shading", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxDrawerComponent.prototype, "target", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxDrawerComponent.prototype, "template", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxDrawerComponent.prototype, "visible", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxDrawerComponent.prototype, "width", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "activeStateEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "animationDurationChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "animationEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "closeOnOutsideClickChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "heightChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "hintChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "hoverStateEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "maxSizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "minSizeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "openedChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "openedStateModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "positionChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "revealModeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "shadingChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "targetChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "templateChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "visibleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxDrawerComponent.prototype, "widthChange", void 0);
DxDrawerComponent = tslib_1.__decorate([
    Component({
        selector: 'dx-drawer',
        template: '<ng-content></ng-content>',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost
        ]
    }),
    tslib_1.__param(6, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
        WatcherHelper, NestedOptionHost,
        TransferState, Object])
], DxDrawerComponent);
export { DxDrawerComponent };
let DxDrawerModule = class DxDrawerModule {
};
DxDrawerModule = tslib_1.__decorate([
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
export { DxDrawerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvZHJhd2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFZcEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLFFBQVEsTUFBTSxzQkFBc0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVF2RDs7R0FFRztBQVVILElBQWEsaUJBQWlCLEdBQTlCLHVCQUErQixTQUFRLFdBQVc7SUEyWDlDLFlBQVksVUFBc0IsRUFBRSxNQUFjLEVBQUUsWUFBNEIsRUFDeEUsY0FBNkIsRUFBRSxVQUE0QixFQUMzRCxhQUE0QixFQUNQLFVBQWU7UUFFeEMsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFbkYsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQy9DLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ25ELEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDdkQsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUU7WUFDcEMsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUU7WUFDbkMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUU7WUFDbEMsRUFBRSxJQUFJLEVBQUUsMkJBQTJCLEVBQUU7WUFDckMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDMUIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDN0IsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3hCLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN0QixFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRTtZQUNuQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4QixFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTtZQUNqQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUM1QixFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUM1QixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3hCLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzFCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN6QixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBelpEOztPQUVHO0lBRUgsSUFBSSxrQkFBa0I7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsSUFBSSxrQkFBa0IsQ0FBQyxLQUFjO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxpQkFBaUI7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBSSxpQkFBaUIsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxnQkFBZ0I7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxtQkFBbUI7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsSUFBSSxtQkFBbUIsQ0FBQyxLQUF5QjtRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksUUFBUTtRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksV0FBVztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksTUFBTTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFpQztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLElBQUk7UUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLGlCQUFpQjtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFJLGlCQUFpQixDQUFDLEtBQWM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLE9BQU87UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLE9BQU87UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBR0Q7O09BRUc7SUFFSCxJQUFJLGVBQWU7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxRQUFRO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxVQUFVO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxVQUFVO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxPQUFPO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUdEOztPQUVHO0lBRUgsSUFBSSxNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQXVCO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksUUFBUTtRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksT0FBTztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFHRDs7T0FFRztJQUVILElBQUksS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFpQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBa0tTLGVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTztRQUN0QyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FHSixDQUFBO0FBaGFHO0lBREMsS0FBSyxFQUFFOzs7MkRBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7OzBEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozt5REFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7NERBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O2lEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OztvREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7K0NBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7OzZDQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OzswREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7Z0RBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O2dEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OzsrQ0FHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7d0RBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O2lEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OzttREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7bURBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O2dEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7OzsrQ0FHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7aURBR1A7QUFVRDtJQURDLEtBQUssRUFBRTs7O2dEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozs4Q0FHUDtBQVFTO0lBQVQsTUFBTSxFQUFFO3NDQUFjLFlBQVk7c0RBQU07QUFLL0I7SUFBVCxNQUFNLEVBQUU7c0NBQWdCLFlBQVk7d0RBQU07QUFLakM7SUFBVCxNQUFNLEVBQUU7c0NBQWtCLFlBQVk7MERBQU07QUFLbkM7SUFBVCxNQUFNLEVBQUU7c0NBQTJCLFlBQVk7bUVBQVU7QUFLaEQ7SUFBVCxNQUFNLEVBQUU7c0NBQTBCLFlBQVk7a0VBQVM7QUFLOUM7SUFBVCxNQUFNLEVBQUU7c0NBQXlCLFlBQVk7aUVBQVU7QUFLOUM7SUFBVCxNQUFNLEVBQUU7c0NBQTRCLFlBQVk7b0VBQXFCO0FBSzVEO0lBQVQsTUFBTSxFQUFFO3NDQUFpQixZQUFZO3lEQUFVO0FBS3RDO0lBQVQsTUFBTSxFQUFFO3NDQUFvQixZQUFZOzREQUFNO0FBS3JDO0lBQVQsTUFBTSxFQUFFO3NDQUFlLFlBQVk7dURBQTZCO0FBS3ZEO0lBQVQsTUFBTSxFQUFFO3NDQUFhLFlBQVk7cURBQVM7QUFLakM7SUFBVCxNQUFNLEVBQUU7c0NBQTBCLFlBQVk7a0VBQVU7QUFLL0M7SUFBVCxNQUFNLEVBQUU7c0NBQWdCLFlBQVk7d0RBQVM7QUFLcEM7SUFBVCxNQUFNLEVBQUU7c0NBQWdCLFlBQVk7d0RBQVM7QUFLcEM7SUFBVCxNQUFNLEVBQUU7c0NBQWUsWUFBWTt1REFBVTtBQUtwQztJQUFULE1BQU0sRUFBRTtzQ0FBd0IsWUFBWTtnRUFBUztBQUs1QztJQUFULE1BQU0sRUFBRTtzQ0FBaUIsWUFBWTt5REFBUztBQUtyQztJQUFULE1BQU0sRUFBRTtzQ0FBbUIsWUFBWTsyREFBUztBQUt2QztJQUFULE1BQU0sRUFBRTtzQ0FBbUIsWUFBWTsyREFBVTtBQUt4QztJQUFULE1BQU0sRUFBRTtzQ0FBZ0IsWUFBWTt3REFBVTtBQUtyQztJQUFULE1BQU0sRUFBRTtzQ0FBZSxZQUFZO3VEQUFtQjtBQUs3QztJQUFULE1BQU0sRUFBRTtzQ0FBaUIsWUFBWTt5REFBTTtBQUtsQztJQUFULE1BQU0sRUFBRTtzQ0FBZ0IsWUFBWTt3REFBVTtBQUtyQztJQUFULE1BQU0sRUFBRTtzQ0FBYyxZQUFZO3NEQUE2QjtBQXJYdkQsaUJBQWlCO0lBVDdCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsU0FBUyxFQUFFO1lBQ1AsY0FBYztZQUNkLGFBQWE7WUFDYixnQkFBZ0I7U0FDbkI7S0FDSixDQUFDO0lBK1hXLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTs2Q0FISixVQUFVLEVBQVUsTUFBTSxFQUFnQixjQUFjO1FBQ3hELGFBQWEsRUFBYyxnQkFBZ0I7UUFDNUMsYUFBYTtHQTdYM0IsaUJBQWlCLENBd2E3QjtTQXhhWSxpQkFBaUI7QUF3YjlCLElBQWEsY0FBYyxHQUEzQjtDQUErQixDQUFBO0FBQWxCLGNBQWM7SUFkMUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQiwwQkFBMEI7U0FDM0I7UUFDRCxZQUFZLEVBQUU7WUFDWixpQkFBaUI7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxpQkFBaUI7WUFDakIsZ0JBQWdCO1NBQ2pCO0tBQ0YsQ0FBQztHQUNXLGNBQWMsQ0FBSTtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIE5nWm9uZSxcclxuICAgIFBMQVRGT1JNX0lELFxyXG4gICAgSW5qZWN0LFxyXG5cclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcbmltcG9ydCBEeERyYXdlciBmcm9tICdkZXZleHRyZW1lL3VpL2RyYXdlcic7XHJcblxyXG5cclxuaW1wb3J0IHsgRHhDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVIb3N0IH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZS1ob3N0JztcclxuaW1wb3J0IHsgRHhJbnRlZ3JhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvaW50ZWdyYXRpb24nO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBXYXRjaGVySGVscGVyIH0gZnJvbSAnLi4vY29yZS93YXRjaGVyLWhlbHBlcic7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIERyYXdlciBpcyBhIGRpc21pc3NpYmxlIG9yIHBlcm1hbmVudGx5IHZpc2libGUgcGFuZWwgdXNlZCBmb3IgbmF2aWdhdGlvbiBpbiByZXNwb25zaXZlIHdlYiBhcHBsaWNhdGlvbiBsYXlvdXRzLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4LWRyYXdlcicsXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgV2F0Y2hlckhlbHBlcixcclxuICAgICAgICBOZXN0ZWRPcHRpb25Ib3N0XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeERyYXdlckNvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIGluc3RhbmNlOiBEeERyYXdlcjtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGludGVyYWN0aW5nIHdpdGggYSB1c2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBhY3RpdmVTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGR1cmF0aW9uIG9mIHRoZSBkcmF3ZXIncyBvcGVuaW5nIGFuZCBjbG9zaW5nIGFuaW1hdGlvbiAoaW4gbWlsbGlzZWNvbmRzKS4gQXBwbGllcyBvbmx5IGlmIGFuaW1hdGlvbkVuYWJsZWQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbmltYXRpb25EdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FuaW1hdGlvbkR1cmF0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYW5pbWF0aW9uRHVyYXRpb24odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYW5pbWF0aW9uRHVyYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gdXNlIGFuIG9wZW5pbmcgYW5kIGNsb3NpbmcgYW5pbWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFuaW1hdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYW5pbWF0aW9uRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFuaW1hdGlvbkVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FuaW1hdGlvbkVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gY2xvc2UgdGhlIGRyYXdlciBpZiBhIHVzZXIgY2xpY2tzIG9yIHRhcHMgdGhlIHZpZXcgYXJlYS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjbG9zZU9uT3V0c2lkZUNsaWNrKCk6IGJvb2xlYW4gfCBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2xvc2VPbk91dHNpZGVDbGljaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsb3NlT25PdXRzaWRlQ2xpY2sodmFsdWU6IGJvb2xlYW4gfCBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2xvc2VPbk91dHNpZGVDbGljaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHJlc3BvbmRzIHRvIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB3aWRnZXQncyByb290IGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWxlbWVudEF0dHIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbGVtZW50QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVsZW1lbnRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VsZW1lbnRBdHRyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3MgaGVpZ2h0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IGZvciBhIGhpbnQgdGhhdCBhcHBlYXJzIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGludCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIGl0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvdmVyU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZHJhd2VyJ3Mgd2lkdGggb3IgaGVpZ2h0IChkZXBlbmRpbmcgb24gdGhlIGRyYXdlcidzIHBvc2l0aW9uKSBpbiB0aGUgb3BlbmVkIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heFNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhTaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWF4U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhTaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZHJhd2VyJ3Mgd2lkdGggb3IgaGVpZ2h0IChkZXBlbmRpbmcgb24gdGhlIGRyYXdlcidzIHBvc2l0aW9uKSBpbiB0aGUgY2xvc2VkIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pblNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5TaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5TaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBkcmF3ZXIgaXMgb3BlbmVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcGVuZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wZW5lZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgaG93IHRoZSBkcmF3ZXIgaW50ZXJhY3RzIHdpdGggdGhlIHZpZXcgaW4gdGhlIG9wZW5lZCBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBvcGVuZWRTdGF0ZU1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcGVuZWRTdGF0ZU1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBvcGVuZWRTdGF0ZU1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb3BlbmVkU3RhdGVNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZHJhd2VyJ3MgcG9zaXRpb24gaW4gcmVsYXRpb24gdG8gdGhlIHZpZXcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwb3NpdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Bvc2l0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZHJhd2VyJ3MgcmV2ZWFsIG1vZGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmV2ZWFsTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JldmVhbE1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCByZXZlYWxNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JldmVhbE1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBzaGFkZSB0aGUgdmlldyB3aGVuIHRoZSBkcmF3ZXIgaXMgb3BlbmVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNoYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hhZGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNoYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NoYWRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB0YXJnZXQgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIGRyYXdlci4gQXBwbGllcyBvbmx5IHdoZW4gdGhlIG9wZW5lZFN0YXRlTW9kZSBpcyBcIm92ZXJsYXBcIi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0YXJnZXQoKTogRWxlbWVudCB8IEpRdWVyeSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGFyZ2V0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFyZ2V0KHZhbHVlOiBFbGVtZW50IHwgSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0YXJnZXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBkcmF3ZXIncyBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0ZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZGlzcG9zZWQgb2YuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRpc3Bvc2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHVzZWQgaW4gSmF2YVNjcmlwdCBmcmFtZXdvcmtzIHRvIHNhdmUgdGhlIHdpZGdldCBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSW5pdGlhbGl6ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgd2lkZ2V0IG9wdGlvbiBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25PcHRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFjdGl2ZVN0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFjdGl2ZVN0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYW5pbWF0aW9uRHVyYXRpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbmltYXRpb25EdXJhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhbmltYXRpb25FbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYW5pbWF0aW9uRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY2xvc2VPbk91dHNpZGVDbGlja0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNsb3NlT25PdXRzaWRlQ2xpY2tDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgRnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZWxlbWVudEF0dHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbGVtZW50QXR0ckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoZWlnaHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoZWlnaHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoaW50Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGludENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXhTaXplQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWF4U2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtaW5TaXplQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWluU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBvcGVuZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvcGVuZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG9wZW5lZFN0YXRlTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9wZW5lZFN0YXRlTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwb3NpdGlvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBvc2l0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJldmVhbE1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZXZlYWxNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJ0bEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBydGxFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaGFkaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hhZGluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGFyZ2V0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGFyZ2V0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8RWxlbWVudCB8IEpRdWVyeT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0ZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpc2libGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB3aWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgdGVtcGxhdGVIb3N0OiBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICAgICAgX3dhdGNoZXJIZWxwZXI6IFdhdGNoZXJIZWxwZXIsIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXHJcbiAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IGFueSkge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBuZ1pvbmUsIHRlbXBsYXRlSG9zdCwgX3dhdGNoZXJIZWxwZXIsIHRyYW5zZmVyU3RhdGUsIHBsYXRmb3JtSWQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Jbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbmltYXRpb25EdXJhdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYW5pbWF0aW9uRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY2xvc2VPbk91dHNpZGVDbGlja0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hvdmVyU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXhTaXplQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtaW5TaXplQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdvcGVuZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ29wZW5lZFN0YXRlTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncG9zaXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JldmVhbE1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NoYWRpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RhcmdldENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dpZHRoQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHhEcmF3ZXIoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVdpZGdldCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeERyYXdlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhEcmF3ZXJDb21wb25lbnQsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhEcmF3ZXJNb2R1bGUgeyB9XHJcbiJdfQ==