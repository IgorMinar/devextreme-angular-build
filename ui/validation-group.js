"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_2 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var validation_group_1 = require("devextreme/ui/validation_group");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
/**
 * The ValidationGroup is a widget that allows you to validate several editors simultaneously.
 */
var DxValidationGroupComponent = (function (_super) {
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
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationGroupComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationGroupComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxValidationGroupComponent.prototype._createInstance = function (element, options) {
        return new validation_group_1.default(element, options);
    };
    DxValidationGroupComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxValidationGroupComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-validation-group',
                    template: '<ng-content></ng-content>',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxValidationGroupComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxValidationGroupComponent.propDecorators = {
        "elementAttr": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
    };
    return DxValidationGroupComponent;
}(component_1.DxComponent));
exports.DxValidationGroupComponent = DxValidationGroupComponent;
var DxValidationGroupModule = (function () {
    function DxValidationGroupModule() {
    }
    DxValidationGroupModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxValidationGroupComponent
                    ],
                    exports: [
                        DxValidationGroupComponent,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxValidationGroupModule;
}());
exports.DxValidationGroupModule = DxValidationGroupModule;
//# sourceMappingURL=validation-group.js.map