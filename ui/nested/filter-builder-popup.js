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
import { DxoPopupOptions } from './base/popup-options';
import { DxiToolbarItemComponent } from './toolbar-item-dxi';
var DxoFilterBuilderPopupComponent = (function (_super) {
    __extends(DxoFilterBuilderPopupComponent, _super);
    function DxoFilterBuilderPopupComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'heightChange' },
            { emit: 'positionChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFilterBuilderPopupComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterBuilderPopup';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderPopupComponent.prototype, "toolbarItemsChildren", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this.setChildren('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoFilterBuilderPopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-filter-builder-popup',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'animation',
                        'closeOnBackButton',
                        'closeOnOutsideClick',
                        'container',
                        'contentTemplate',
                        'deferRendering',
                        'disabled',
                        'dragEnabled',
                        'elementAttr',
                        'focusStateEnabled',
                        'fullScreen',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'maxHeight',
                        'maxWidth',
                        'minHeight',
                        'minWidth',
                        'onContentReady',
                        'onDisposing',
                        'onHidden',
                        'onHiding',
                        'onInitialized',
                        'onOptionChanged',
                        'onResize',
                        'onResizeEnd',
                        'onResizeStart',
                        'onShowing',
                        'onShown',
                        'onTitleRendered',
                        'position',
                        'resizeEnabled',
                        'rtlEnabled',
                        'shading',
                        'shadingColor',
                        'showCloseButton',
                        'showTitle',
                        'tabIndex',
                        'title',
                        'titleTemplate',
                        'toolbarItems',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoFilterBuilderPopupComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoFilterBuilderPopupComponent.propDecorators = {
        "heightChange": [{ type: Output },],
        "positionChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "toolbarItemsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiToolbarItemComponent; }),] },],
    };
    return DxoFilterBuilderPopupComponent;
}(DxoPopupOptions));
export { DxoFilterBuilderPopupComponent };
var DxoFilterBuilderPopupModule = (function () {
    function DxoFilterBuilderPopupModule() {
    }
    DxoFilterBuilderPopupModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoFilterBuilderPopupComponent
                    ],
                    exports: [
                        DxoFilterBuilderPopupComponent
                    ],
                },] },
    ];
    return DxoFilterBuilderPopupModule;
}());
export { DxoFilterBuilderPopupModule };
//# sourceMappingURL=filter-builder-popup.js.map