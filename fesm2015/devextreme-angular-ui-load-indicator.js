import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxLoadIndicator from 'devextreme/ui/load_indicator';
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
 * The LoadIndicator is a UI element notifying the viewer that a process is in progress.
 */
let DxLoadIndicatorComponent = class DxLoadIndicatorComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'indicatorSrcChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'visibleChange' },
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
     * Specifies the path to an image used as the indicator.
     */
    get indicatorSrc() {
        return this._getOption('indicatorSrc');
    }
    set indicatorSrc(value) {
        this._setOption('indicatorSrc', value);
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
        return new DxLoadIndicator(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
DxLoadIndicatorComponent.ctorParameters = () => [
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
], DxLoadIndicatorComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxLoadIndicatorComponent.prototype, "height", null);
__decorate([
    Input()
], DxLoadIndicatorComponent.prototype, "hint", null);
__decorate([
    Input()
], DxLoadIndicatorComponent.prototype, "indicatorSrc", null);
__decorate([
    Input()
], DxLoadIndicatorComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxLoadIndicatorComponent.prototype, "visible", null);
__decorate([
    Input()
], DxLoadIndicatorComponent.prototype, "width", null);
__decorate([
    Output()
], DxLoadIndicatorComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxLoadIndicatorComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxLoadIndicatorComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxLoadIndicatorComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxLoadIndicatorComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxLoadIndicatorComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxLoadIndicatorComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxLoadIndicatorComponent.prototype, "indicatorSrcChange", void 0);
__decorate([
    Output()
], DxLoadIndicatorComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxLoadIndicatorComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxLoadIndicatorComponent.prototype, "widthChange", void 0);
DxLoadIndicatorComponent = __decorate([
    Component({
        selector: 'dx-load-indicator',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxLoadIndicatorComponent);
let DxLoadIndicatorModule = class DxLoadIndicatorModule {
};
DxLoadIndicatorModule = __decorate([
    NgModule({
        imports: [
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxLoadIndicatorComponent
        ],
        exports: [
            DxLoadIndicatorComponent,
            DxTemplateModule
        ]
    })
], DxLoadIndicatorModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxLoadIndicatorComponent, DxLoadIndicatorModule };
//# sourceMappingURL=devextreme-angular-ui-load-indicator.js.map
