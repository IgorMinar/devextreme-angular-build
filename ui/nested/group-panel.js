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
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoGroupPanelComponent = (function (_super) {
    __extends(DxoGroupPanelComponent, _super);
    function DxoGroupPanelComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoGroupPanelComponent.prototype, "allowColumnDragging", {
        get: function () {
            return this._getOption('allowColumnDragging');
        },
        set: function (value) {
            this._setOption('allowColumnDragging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupPanelComponent.prototype, "emptyPanelText", {
        get: function () {
            return this._getOption('emptyPanelText');
        },
        set: function (value) {
            this._setOption('emptyPanelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupPanelComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGroupPanelComponent.prototype, "_optionPath", {
        get: function () {
            return 'groupPanel';
        },
        enumerable: true,
        configurable: true
    });
    DxoGroupPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-group-panel',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoGroupPanelComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoGroupPanelComponent.propDecorators = {
        "allowColumnDragging": [{ type: Input },],
        "emptyPanelText": [{ type: Input },],
        "visible": [{ type: Input },],
    };
    return DxoGroupPanelComponent;
}(NestedOption));
export { DxoGroupPanelComponent };
var DxoGroupPanelModule = (function () {
    function DxoGroupPanelModule() {
    }
    DxoGroupPanelModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoGroupPanelComponent
                    ],
                    exports: [
                        DxoGroupPanelComponent
                    ],
                },] },
    ];
    return DxoGroupPanelModule;
}());
export { DxoGroupPanelModule };
//# sourceMappingURL=group-panel.js.map