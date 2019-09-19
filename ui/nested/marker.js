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
var DxoMarkerComponent = (function (_super) {
    __extends(DxoMarkerComponent, _super);
    function DxoMarkerComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoMarkerComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "separatorHeight", {
        get: function () {
            return this._getOption('separatorHeight');
        },
        set: function (value) {
            this._setOption('separatorHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "textLeftIndent", {
        get: function () {
            return this._getOption('textLeftIndent');
        },
        set: function (value) {
            this._setOption('textLeftIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "textTopIndent", {
        get: function () {
            return this._getOption('textTopIndent');
        },
        set: function (value) {
            this._setOption('textTopIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "topIndent", {
        get: function () {
            return this._getOption('topIndent');
        },
        set: function (value) {
            this._setOption('topIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "_optionPath", {
        get: function () {
            return 'marker';
        },
        enumerable: true,
        configurable: true
    });
    DxoMarkerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-marker',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoMarkerComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoMarkerComponent.propDecorators = {
        "label": [{ type: Input },],
        "separatorHeight": [{ type: Input },],
        "textLeftIndent": [{ type: Input },],
        "textTopIndent": [{ type: Input },],
        "topIndent": [{ type: Input },],
        "visible": [{ type: Input },],
    };
    return DxoMarkerComponent;
}(NestedOption));
export { DxoMarkerComponent };
var DxoMarkerModule = (function () {
    function DxoMarkerModule() {
    }
    DxoMarkerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoMarkerComponent
                    ],
                    exports: [
                        DxoMarkerComponent
                    ],
                },] },
    ];
    return DxoMarkerModule;
}());
export { DxoMarkerModule };
//# sourceMappingURL=marker.js.map