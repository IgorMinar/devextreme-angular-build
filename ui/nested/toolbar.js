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
import { Component, NgModule, Host, SkipSelf, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoHtmlEditorToolbar } from './base/html-editor-toolbar';
import { DxiItemComponent } from './item-dxi';
var DxoToolbarComponent = (function (_super) {
    __extends(DxoToolbarComponent, _super);
    function DxoToolbarComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoToolbarComponent.prototype, "_optionPath", {
        get: function () {
            return 'toolbar';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoToolbarComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-toolbar',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'container',
                        'items'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoToolbarComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoToolbarComponent.propDecorators = {
        "itemsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiItemComponent; }),] },],
    };
    return DxoToolbarComponent;
}(DxoHtmlEditorToolbar));
export { DxoToolbarComponent };
var DxoToolbarModule = (function () {
    function DxoToolbarModule() {
    }
    DxoToolbarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoToolbarComponent
                    ],
                    exports: [
                        DxoToolbarComponent
                    ],
                },] },
    ];
    return DxoToolbarModule;
}());
export { DxoToolbarModule };
//# sourceMappingURL=toolbar.js.map