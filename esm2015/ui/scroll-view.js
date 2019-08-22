/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter } from '@angular/core';
import DxScrollView from 'devextreme/ui/scroll_view';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The ScrollView is a widget that enables a user to scroll its content.
 */
let DxScrollViewComponent = class DxScrollViewComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pullDown', emit: 'onPullDown' },
            { subscribe: 'reachBottom', emit: 'onReachBottom' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'updated', emit: 'onUpdated' },
            { emit: 'bounceEnabledChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'reachBottomTextChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollByThumbChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'useNativeChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(this);
    }
    /**
     * A Boolean value specifying whether to enable or disable the bounce-back effect.
     */
    get bounceEnabled() {
        return this._getOption('bounceEnabled');
    }
    set bounceEnabled(value) {
        this._setOption('bounceEnabled', value);
    }
    /**
     * A string value specifying the available scrolling directions.
     */
    get direction() {
        return this._getOption('direction');
    }
    set direction(value) {
        this._setOption('direction', value);
    }
    /**
     * A Boolean value specifying whether or not the widget can respond to user interaction.
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
     * Specifies the text shown in the pullDown panel when pulling the content down lowers the refresh threshold.
     */
    get pulledDownText() {
        return this._getOption('pulledDownText');
    }
    set pulledDownText(value) {
        this._setOption('pulledDownText', value);
    }
    /**
     * Specifies the text shown in the pullDown panel while pulling the content down to the refresh threshold.
     */
    get pullingDownText() {
        return this._getOption('pullingDownText');
    }
    set pullingDownText(value) {
        this._setOption('pullingDownText', value);
    }
    /**
     * Specifies the text shown in the pullDown panel displayed when content is scrolled to the bottom.
     */
    get reachBottomText() {
        return this._getOption('reachBottomText');
    }
    set reachBottomText(value) {
        this._setOption('reachBottomText', value);
    }
    /**
     * Specifies the text shown in the pullDown panel displayed when the content is being refreshed.
     */
    get refreshingText() {
        return this._getOption('refreshingText');
    }
    set refreshingText(value) {
        this._setOption('refreshingText', value);
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
     * A Boolean value specifying whether or not an end-user can scroll the widget content swiping it up or down. Applies only if useNative is false
     */
    get scrollByContent() {
        return this._getOption('scrollByContent');
    }
    set scrollByContent(value) {
        this._setOption('scrollByContent', value);
    }
    /**
     * A Boolean value specifying whether or not an end-user can scroll the widget content using the scrollbar.
     */
    get scrollByThumb() {
        return this._getOption('scrollByThumb');
    }
    set scrollByThumb(value) {
        this._setOption('scrollByThumb', value);
    }
    /**
     * Specifies when the widget shows the scrollbar.
     */
    get showScrollbar() {
        return this._getOption('showScrollbar');
    }
    set showScrollbar(value) {
        this._setOption('showScrollbar', value);
    }
    /**
     * Indicates whether to use native or simulated scrolling.
     */
    get useNative() {
        return this._getOption('useNative');
    }
    set useNative(value) {
        this._setOption('useNative', value);
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
        return new DxScrollView(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxScrollViewComponent.prototype, "bounceEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxScrollViewComponent.prototype, "direction", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxScrollViewComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxScrollViewComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxScrollViewComponent.prototype, "height", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxScrollViewComponent.prototype, "pulledDownText", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxScrollViewComponent.prototype, "pullingDownText", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxScrollViewComponent.prototype, "reachBottomText", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxScrollViewComponent.prototype, "refreshingText", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxScrollViewComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxScrollViewComponent.prototype, "scrollByContent", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxScrollViewComponent.prototype, "scrollByThumb", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxScrollViewComponent.prototype, "showScrollbar", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxScrollViewComponent.prototype, "useNative", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxScrollViewComponent.prototype, "width", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "onPullDown", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "onReachBottom", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "onScroll", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "onUpdated", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "bounceEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "directionChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "heightChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "pulledDownTextChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "pullingDownTextChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "reachBottomTextChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "refreshingTextChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "scrollByContentChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "scrollByThumbChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "showScrollbarChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "useNativeChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxScrollViewComponent.prototype, "widthChange", void 0);
DxScrollViewComponent = tslib_1.__decorate([
    Component({
        selector: 'dx-scroll-view',
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
], DxScrollViewComponent);
export { DxScrollViewComponent };
let DxScrollViewModule = class DxScrollViewModule {
};
DxScrollViewModule = tslib_1.__decorate([
    NgModule({
        imports: [
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxScrollViewComponent
        ],
        exports: [
            DxScrollViewComponent,
            DxTemplateModule
        ]
    })
], DxScrollViewModule);
export { DxScrollViewModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXZpZXcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9zY3JvbGwtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBWXBDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxZQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFHckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFRdkQ7O0dBRUc7QUFVSCxJQUFhLHFCQUFxQixHQUFsQywyQkFBbUMsU0FBUSxXQUFXO0lBeVNsRCxZQUFZLFVBQXNCLEVBQUUsTUFBYyxFQUFFLFlBQTRCLEVBQ3hFLGNBQTZCLEVBQUUsVUFBNEIsRUFDM0QsYUFBNEIsRUFDUCxVQUFlO1FBRXhDLEtBQUssQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRW5GLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0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QkFBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxxQkFBcUI7WUFDckIsZ0JBQWdCO1NBQ2pCO0tBQ0YsQ0FBQztHQUNXLGtCQUFrQixDQUFJO1NBQXRCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgRHhTY3JvbGxWaWV3IGZyb20gJ2RldmV4dHJlbWUvdWkvc2Nyb2xsX3ZpZXcnO1xyXG5cclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTY3JvbGxWaWV3IGlzIGEgd2lkZ2V0IHRoYXQgZW5hYmxlcyBhIHVzZXIgdG8gc2Nyb2xsIGl0cyBjb250ZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4LXNjcm9sbC12aWV3JyxcclxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3RcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4U2Nyb2xsVmlld0NvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIGluc3RhbmNlOiBEeFNjcm9sbFZpZXc7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBCb29sZWFuIHZhbHVlIHNwZWNpZnlpbmcgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm91bmNlLWJhY2sgZWZmZWN0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJvdW5jZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYm91bmNlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJvdW5jZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JvdW5jZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBzdHJpbmcgdmFsdWUgc3BlY2lmeWluZyB0aGUgYXZhaWxhYmxlIHNjcm9sbGluZyBkaXJlY3Rpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpcmVjdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RpcmVjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpcmVjdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXJlY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBCb29sZWFuIHZhbHVlIHNwZWNpZnlpbmcgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjYW4gcmVzcG9uZCB0byB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIGhlaWdodC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlaWdodCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRleHQgc2hvd24gaW4gdGhlIHB1bGxEb3duIHBhbmVsIHdoZW4gcHVsbGluZyB0aGUgY29udGVudCBkb3duIGxvd2VycyB0aGUgcmVmcmVzaCB0aHJlc2hvbGQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcHVsbGVkRG93blRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwdWxsZWREb3duVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHB1bGxlZERvd25UZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3B1bGxlZERvd25UZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgdGV4dCBzaG93biBpbiB0aGUgcHVsbERvd24gcGFuZWwgd2hpbGUgcHVsbGluZyB0aGUgY29udGVudCBkb3duIHRvIHRoZSByZWZyZXNoIHRocmVzaG9sZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwdWxsaW5nRG93blRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwdWxsaW5nRG93blRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBwdWxsaW5nRG93blRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncHVsbGluZ0Rvd25UZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgdGV4dCBzaG93biBpbiB0aGUgcHVsbERvd24gcGFuZWwgZGlzcGxheWVkIHdoZW4gY29udGVudCBpcyBzY3JvbGxlZCB0byB0aGUgYm90dG9tLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlYWNoQm90dG9tVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlYWNoQm90dG9tVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlYWNoQm90dG9tVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWFjaEJvdHRvbVRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB0ZXh0IHNob3duIGluIHRoZSBwdWxsRG93biBwYW5lbCBkaXNwbGF5ZWQgd2hlbiB0aGUgY29udGVudCBpcyBiZWluZyByZWZyZXNoZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVmcmVzaGluZ1RleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWZyZXNoaW5nVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlZnJlc2hpbmdUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlZnJlc2hpbmdUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaGVzIHRoZSB3aWRnZXQgdG8gYSByaWdodC10by1sZWZ0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJ0bEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncnRsRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJ0bEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3J0bEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBCb29sZWFuIHZhbHVlIHNwZWNpZnlpbmcgd2hldGhlciBvciBub3QgYW4gZW5kLXVzZXIgY2FuIHNjcm9sbCB0aGUgd2lkZ2V0IGNvbnRlbnQgc3dpcGluZyBpdCB1cCBvciBkb3duLiBBcHBsaWVzIG9ubHkgaWYgdXNlTmF0aXZlIGlzIGZhbHNlXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2Nyb2xsQnlDb250ZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Njcm9sbEJ5Q29udGVudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNjcm9sbEJ5Q29udGVudCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2Nyb2xsQnlDb250ZW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgQm9vbGVhbiB2YWx1ZSBzcGVjaWZ5aW5nIHdoZXRoZXIgb3Igbm90IGFuIGVuZC11c2VyIGNhbiBzY3JvbGwgdGhlIHdpZGdldCBjb250ZW50IHVzaW5nIHRoZSBzY3JvbGxiYXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2Nyb2xsQnlUaHVtYigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzY3JvbGxCeVRodW1iJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2Nyb2xsQnlUaHVtYih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2Nyb2xsQnlUaHVtYicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hlbiB0aGUgd2lkZ2V0IHNob3dzIHRoZSBzY3JvbGxiYXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd1Njcm9sbGJhcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dTY3JvbGxiYXInKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93U2Nyb2xsYmFyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dTY3JvbGxiYXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdG8gdXNlIG5hdGl2ZSBvciBzaW11bGF0ZWQgc2Nyb2xsaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHVzZU5hdGl2ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd1c2VOYXRpdmUnKTtcclxuICAgIH1cclxuICAgIHNldCB1c2VOYXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3VzZU5hdGl2ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZGlzcG9zZWQgb2YuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRpc3Bvc2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHVzZWQgaW4gSmF2YVNjcmlwdCBmcmFtZXdvcmtzIHRvIHNhdmUgdGhlIHdpZGdldCBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSW5pdGlhbGl6ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgd2lkZ2V0IG9wdGlvbiBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25PcHRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSBcInB1bGwgdG8gcmVmcmVzaFwiIGdlc3R1cmUgaXMgcGVyZm9ybWVkLiBTdXBwb3J0ZWQgaW4gbW9iaWxlIHRoZW1lcyBvbmx5LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25QdWxsRG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgY29udGVudCBpcyBzY3JvbGxlZCBkb3duIHRvIHRoZSBib3R0b20uXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblJlYWNoQm90dG9tOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBlYWNoIHNjcm9sbCBnZXN0dXJlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25TY3JvbGw6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGVhY2ggdGltZSB0aGUgd2lkZ2V0IGlzIHVwZGF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblVwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYm91bmNlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGJvdW5jZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRpcmVjdGlvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpcmVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlaWdodENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHB1bGxlZERvd25UZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcHVsbGVkRG93blRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcHVsbGluZ0Rvd25UZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcHVsbGluZ0Rvd25UZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlYWNoQm90dG9tVGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlYWNoQm90dG9tVGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZWZyZXNoaW5nVGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlZnJlc2hpbmdUZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJ0bEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBydGxFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzY3JvbGxCeUNvbnRlbnRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzY3JvbGxCeUNvbnRlbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNjcm9sbEJ5VGh1bWJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzY3JvbGxCeVRodW1iQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93U2Nyb2xsYmFyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd1Njcm9sbGJhckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB1c2VOYXRpdmVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB1c2VOYXRpdmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHdpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBfd2F0Y2hlckhlbHBlcjogV2F0Y2hlckhlbHBlciwgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcclxuICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogYW55KSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSwgdGVtcGxhdGVIb3N0LCBfd2F0Y2hlckhlbHBlciwgdHJhbnNmZXJTdGF0ZSwgcGxhdGZvcm1JZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3B1bGxEb3duJywgZW1pdDogJ29uUHVsbERvd24nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncmVhY2hCb3R0b20nLCBlbWl0OiAnb25SZWFjaEJvdHRvbScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdzY3JvbGwnLCBlbWl0OiAnb25TY3JvbGwnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAndXBkYXRlZCcsIGVtaXQ6ICdvblVwZGF0ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2JvdW5jZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RpcmVjdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3B1bGxlZERvd25UZXh0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwdWxsaW5nRG93blRleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlYWNoQm90dG9tVGV4dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVmcmVzaGluZ1RleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Njcm9sbEJ5Q29udGVudENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2Nyb2xsQnlUaHVtYkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd1Njcm9sbGJhckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndXNlTmF0aXZlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4U2Nyb2xsVmlldyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kZXN0cm95V2lkZ2V0KCk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4U2Nyb2xsVmlld0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhTY3JvbGxWaWV3Q29tcG9uZW50LFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4U2Nyb2xsVmlld01vZHVsZSB7IH1cclxuIl19