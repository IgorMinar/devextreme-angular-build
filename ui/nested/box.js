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
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoBoxOptions } from './base/box-options';
import { DxiItemComponent } from './item-dxi';
var DxoBoxComponent = (function (_super) {
    __extends(DxoBoxComponent, _super);
    function DxoBoxComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'itemsChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoBoxComponent.prototype, "_optionPath", {
        get: function () {
            return 'box';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBoxComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-box',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'align',
                        'crossAlign',
                        'dataSource',
                        'direction',
                        'disabled',
                        'elementAttr',
                        'height',
                        'hoverStateEnabled',
                        'itemHoldTimeout',
                        'items',
                        'itemTemplate',
                        'onContentReady',
                        'onDisposing',
                        'onInitialized',
                        'onItemClick',
                        'onItemContextMenu',
                        'onItemHold',
                        'onItemRendered',
                        'onOptionChanged',
                        'rtlEnabled',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoBoxComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoBoxComponent.propDecorators = {
        "itemsChange": [{ type: Output },],
        "itemsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiItemComponent; }),] },],
    };
    return DxoBoxComponent;
}(DxoBoxOptions));
export { DxoBoxComponent };
var DxoBoxModule = (function () {
    function DxoBoxModule() {
    }
    DxoBoxModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoBoxComponent
                    ],
                    exports: [
                        DxoBoxComponent
                    ],
                },] },
    ];
    return DxoBoxModule;
}());
export { DxoBoxModule };
//# sourceMappingURL=box.js.map