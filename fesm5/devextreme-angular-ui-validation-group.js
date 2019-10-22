import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxValidationGroup from 'devextreme/ui/validation_group';
import { DxTemplateHost, WatcherHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';

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
var DxValidationGroupComponent = /** @class */ (function (_super) {
    __extends(DxValidationGroupComponent, _super);
    function DxValidationGroupComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxValidationGroupComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationGroupComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationGroupComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxValidationGroupComponent.prototype._createInstance = function (element, options) {
        return new DxValidationGroup(element, options);
    };
    DxValidationGroupComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxValidationGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
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
    return DxValidationGroupComponent;
}(DxComponent));
var DxValidationGroupModule = /** @class */ (function () {
    function DxValidationGroupModule() {
    }
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
    return DxValidationGroupModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxValidationGroupComponent, DxValidationGroupModule };
//# sourceMappingURL=devextreme-angular-ui-validation-group.js.map
