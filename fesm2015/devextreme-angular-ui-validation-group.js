import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxValidationGroup from 'devextreme/ui/validation_group';
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
 * The ValidationGroup is a widget that allows you to validate several editors simultaneously.
 */
let DxValidationGroupComponent = class DxValidationGroupComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
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
     * Specifies the widget's width.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    _createInstance(element, options) {
        return new DxValidationGroup(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
DxValidationGroupComponent.ctorParameters = () => [
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
], DxValidationGroupComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxValidationGroupComponent.prototype, "height", null);
__decorate([
    Input()
], DxValidationGroupComponent.prototype, "width", null);
__decorate([
    Output()
], DxValidationGroupComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxValidationGroupComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxValidationGroupComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxValidationGroupComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxValidationGroupComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxValidationGroupComponent.prototype, "widthChange", void 0);
DxValidationGroupComponent = __decorate([
    Component({
        selector: 'dx-validation-group',
        template: '<ng-content></ng-content>',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost
        ]
    }),
    __param(6, Inject(PLATFORM_ID))
], DxValidationGroupComponent);
let DxValidationGroupModule = class DxValidationGroupModule {
};
DxValidationGroupModule = __decorate([
    NgModule({
        imports: [
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxValidationGroupComponent
        ],
        exports: [
            DxValidationGroupComponent,
            DxTemplateModule
        ]
    })
], DxValidationGroupModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxValidationGroupComponent, DxValidationGroupModule };
//# sourceMappingURL=devextreme-angular-ui-validation-group.js.map
