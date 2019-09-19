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
import { DxoHtmlEditorMediaResizing } from './base/html-editor-media-resizing';
var DxoMediaResizingComponent = (function (_super) {
    __extends(DxoMediaResizingComponent, _super);
    function DxoMediaResizingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoMediaResizingComponent.prototype, "_optionPath", {
        get: function () {
            return 'mediaResizing';
        },
        enumerable: true,
        configurable: true
    });
    DxoMediaResizingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-media-resizing',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'allowedTargets',
                        'enabled'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoMediaResizingComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoMediaResizingComponent;
}(DxoHtmlEditorMediaResizing));
export { DxoMediaResizingComponent };
var DxoMediaResizingModule = (function () {
    function DxoMediaResizingModule() {
    }
    DxoMediaResizingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoMediaResizingComponent
                    ],
                    exports: [
                        DxoMediaResizingComponent
                    ],
                },] },
    ];
    return DxoMediaResizingModule;
}());
export { DxoMediaResizingModule };
//# sourceMappingURL=media-resizing.js.map