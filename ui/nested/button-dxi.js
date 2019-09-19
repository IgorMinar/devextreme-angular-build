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
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiTextEditorButton } from './base/text-editor-button-dxi';
var DxiButtonComponent = (function (_super) {
    __extends(DxiButtonComponent, _super);
    function DxiButtonComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiButtonComponent.prototype, "_optionPath", {
        get: function () {
            return 'buttons';
        },
        enumerable: true,
        configurable: true
    });
    DxiButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-button',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'location',
                        'name',
                        'options',
                        'cssClass',
                        'hint',
                        'icon',
                        'onClick',
                        'template',
                        'text',
                        'visible'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxiButtonComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxiButtonComponent;
}(DxiTextEditorButton));
export { DxiButtonComponent };
var DxiButtonModule = (function () {
    function DxiButtonModule() {
    }
    DxiButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiButtonComponent
                    ],
                    exports: [
                        DxiButtonComponent
                    ],
                },] },
    ];
    return DxiButtonModule;
}());
export { DxiButtonModule };
//# sourceMappingURL=button-dxi.js.map