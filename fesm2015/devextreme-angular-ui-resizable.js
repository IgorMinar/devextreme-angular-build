import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxResizable from 'devextreme/ui/resizable';
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
 * The Resizable widget enables its content to be resizable in the UI.
 */
let DxResizableComponent = class DxResizableComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'resize', emit: 'onResize' },
            { subscribe: 'resizeEnd', emit: 'onResizeEnd' },
            { subscribe: 'resizeStart', emit: 'onResizeStart' },
            { emit: 'elementAttrChange' },
            { emit: 'handlesChange' },
            { emit: 'heightChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(this);
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
     * Specifies which borders of the widget element are used as a handle.
     */
    get handles() {
        return this._getOption('handles');
    }
    set handles(value) {
        this._setOption('handles', value);
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
     * Specifies the upper height boundary for resizing.
     */
    get maxHeight() {
        return this._getOption('maxHeight');
    }
    set maxHeight(value) {
        this._setOption('maxHeight', value);
    }
    /**
     * Specifies the upper width boundary for resizing.
     */
    get maxWidth() {
        return this._getOption('maxWidth');
    }
    set maxWidth(value) {
        this._setOption('maxWidth', value);
    }
    /**
     * Specifies the lower height boundary for resizing.
     */
    get minHeight() {
        return this._getOption('minHeight');
    }
    set minHeight(value) {
        this._setOption('minHeight', value);
    }
    /**
     * Specifies the lower width boundary for resizing.
     */
    get minWidth() {
        return this._getOption('minWidth');
    }
    set minWidth(value) {
        this._setOption('minWidth', value);
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
     * Specifies the widget's width.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    _createInstance(element, options) {
        return new DxResizable(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
DxResizableComponent.ctorParameters = () => [
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
], DxResizableComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxResizableComponent.prototype, "handles", null);
__decorate([
    Input()
], DxResizableComponent.prototype, "height", null);
__decorate([
    Input()
], DxResizableComponent.prototype, "maxHeight", null);
__decorate([
    Input()
], DxResizableComponent.prototype, "maxWidth", null);
__decorate([
    Input()
], DxResizableComponent.prototype, "minHeight", null);
__decorate([
    Input()
], DxResizableComponent.prototype, "minWidth", null);
__decorate([
    Input()
], DxResizableComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxResizableComponent.prototype, "width", null);
__decorate([
    Output()
], DxResizableComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "onResize", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "onResizeEnd", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "onResizeStart", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "handlesChange", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "maxHeightChange", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "maxWidthChange", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "minHeightChange", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "minWidthChange", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxResizableComponent.prototype, "widthChange", void 0);
DxResizableComponent = __decorate([
    Component({
        selector: 'dx-resizable',
        template: '<ng-content></ng-content>',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxResizableComponent);
let DxResizableModule = class DxResizableModule {
};
DxResizableModule = __decorate([
    NgModule({
        imports: [
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxResizableComponent
        ],
        exports: [
            DxResizableComponent,
            DxTemplateModule
        ]
    })
], DxResizableModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxResizableComponent, DxResizableModule };
//# sourceMappingURL=devextreme-angular-ui-resizable.js.map
