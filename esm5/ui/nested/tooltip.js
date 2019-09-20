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
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';

import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoTooltipComponent = (function (_super) {
    __extends(DxoTooltipComponent, _super);
    function DxoTooltipComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoTooltipComponent.prototype, "arrowLength", {
        get: function () {
            return this._getOption('arrowLength');
        },
        set: function (value) {
            this._setOption('arrowLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "container", {
        get: function () {
            return this._getOption('container');
        },
        set: function (value) {
            this._setOption('container', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "cornerRadius", {
        get: function () {
            return this._getOption('cornerRadius');
        },
        set: function (value) {
            this._setOption('cornerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "customizeTooltip", {
        get: function () {
            return this._getOption('customizeTooltip');
        },
        set: function (value) {
            this._setOption('customizeTooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "paddingLeftRight", {
        get: function () {
            return this._getOption('paddingLeftRight');
        },
        set: function (value) {
            this._setOption('paddingLeftRight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "paddingTopBottom", {
        get: function () {
            return this._getOption('paddingTopBottom');
        },
        set: function (value) {
            this._setOption('paddingTopBottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "shadow", {
        get: function () {
            return this._getOption('shadow');
        },
        set: function (value) {
            this._setOption('shadow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "zIndex", {
        get: function () {
            return this._getOption('zIndex');
        },
        set: function (value) {
            this._setOption('zIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "argumentFormat", {
        get: function () {
            return this._getOption('argumentFormat');
        },
        set: function (value) {
            this._setOption('argumentFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "shared", {
        get: function () {
            return this._getOption('shared');
        },
        set: function (value) {
            this._setOption('shared', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "isShown", {
        get: function () {
            return this._getOption('isShown');
        },
        set: function (value) {
            this._setOption('isShown', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "showMode", {
        get: function () {
            return this._getOption('showMode');
        },
        set: function (value) {
            this._setOption('showMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "customizeLinkTooltip", {
        get: function () {
            return this._getOption('customizeLinkTooltip');
        },
        set: function (value) {
            this._setOption('customizeLinkTooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "customizeNodeTooltip", {
        get: function () {
            return this._getOption('customizeNodeTooltip');
        },
        set: function (value) {
            this._setOption('customizeNodeTooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTooltipComponent.prototype, "_optionPath", {
        get: function () {
            return 'tooltip';
        },
        enumerable: true,
        configurable: true
    });
    DxoTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-tooltip',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoTooltipComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoTooltipComponent.propDecorators = {
        "arrowLength": [{ type: Input },],
        "border": [{ type: Input },],
        "color": [{ type: Input },],
        "container": [{ type: Input },],
        "cornerRadius": [{ type: Input },],
        "customizeTooltip": [{ type: Input },],
        "enabled": [{ type: Input },],
        "font": [{ type: Input },],
        "format": [{ type: Input },],
        "opacity": [{ type: Input },],
        "paddingLeftRight": [{ type: Input },],
        "paddingTopBottom": [{ type: Input },],
        "shadow": [{ type: Input },],
        "zIndex": [{ type: Input },],
        "argumentFormat": [{ type: Input },],
        "location": [{ type: Input },],
        "shared": [{ type: Input },],
        "isShown": [{ type: Input },],
        "text": [{ type: Input },],
        "position": [{ type: Input },],
        "showMode": [{ type: Input },],
        "customizeLinkTooltip": [{ type: Input },],
        "customizeNodeTooltip": [{ type: Input },],
    };
    return DxoTooltipComponent;
}(NestedOption));
export { DxoTooltipComponent };
var DxoTooltipModule = (function () {
    function DxoTooltipModule() {
    }
    DxoTooltipModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoTooltipComponent
                    ],
                    exports: [
                        DxoTooltipComponent
                    ],
                },] },
    ];
    return DxoTooltipModule;
}());
export { DxoTooltipModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC90b29sdGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQVNmLHVDQUFZO0lBK0xqRCw2QkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDswQkFsTUcsNENBQVc7O1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7O2FBRTFDLFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekM7Ozs7MEJBR0csdUNBQU07O1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7O2FBRXJDLFVBQVcsS0FBa0c7WUFDekcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEM7Ozs7MEJBR0csc0NBQUs7O1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O2FBRXBDLFVBQVUsS0FBYTtZQUNuQixJ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eHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tdG9vbHRpcCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvVG9vbHRpcENvbXBvbmVudCBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFycm93TGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJyb3dMZW5ndGgnKTtcclxuICAgIH1cclxuICAgIHNldCBhcnJvd0xlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcnJvd0xlbmd0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJvcmRlcigpOiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdib3JkZXInKTtcclxuICAgIH1cclxuICAgIHNldCBib3JkZXIodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JvcmRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sb3InKTtcclxuICAgIH1cclxuICAgIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2xvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbnRhaW5lcigpOiBFbGVtZW50IHwgSlF1ZXJ5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb250YWluZXInKTtcclxuICAgIH1cclxuICAgIHNldCBjb250YWluZXIodmFsdWU6IEVsZW1lbnQgfCBKUXVlcnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbnRhaW5lcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvcm5lclJhZGl1cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nvcm5lclJhZGl1cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvcm5lclJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb3JuZXJSYWRpdXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVUb29sdGlwKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVUb29sdGlwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplVG9vbHRpcCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZVRvb2x0aXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9udCgpOiBEZXZFeHByZXNzLnZpei5Gb250IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb250Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9udCh2YWx1ZTogRGV2RXhwcmVzcy52aXouRm9udCkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9udCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvcm1hdCgpOiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9ybWF0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9ybWF0KHZhbHVlOiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9ybWF0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgb3BhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29wYWNpdHknKTtcclxuICAgIH1cclxuICAgIHNldCBvcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wYWNpdHknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWRkaW5nTGVmdFJpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFkZGluZ0xlZnRSaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhZGRpbmdMZWZ0UmlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFkZGluZ0xlZnRSaWdodCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhZGRpbmdUb3BCb3R0b20oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYWRkaW5nVG9wQm90dG9tJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFkZGluZ1RvcEJvdHRvbSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYWRkaW5nVG9wQm90dG9tJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hhZG93KCk6IHsgYmx1cj86IG51bWJlciwgY29sb3I/OiBzdHJpbmcsIG9mZnNldFg/OiBudW1iZXIsIG9mZnNldFk/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hhZG93Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hhZG93KHZhbHVlOiB7IGJsdXI/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nLCBvZmZzZXRYPzogbnVtYmVyLCBvZmZzZXRZPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NoYWRvdycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHpJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3pJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHpJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd6SW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhcmd1bWVudEZvcm1hdCgpOiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXJndW1lbnRGb3JtYXQnKTtcclxuICAgIH1cclxuICAgIHNldCBhcmd1bWVudEZvcm1hdCh2YWx1ZTogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FyZ3VtZW50Rm9ybWF0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9jYXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2NhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvY2F0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvY2F0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hhcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NoYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNoYXJlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hhcmVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaXNTaG93bigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpc1Nob3duJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXNTaG93bih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXNTaG93bicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0ZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwb3NpdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Bvc2l0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd01vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93TW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9taXplTGlua1Rvb2x0aXAoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbWl6ZUxpbmtUb29sdGlwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplTGlua1Rvb2x0aXAodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVMaW5rVG9vbHRpcCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1c3RvbWl6ZU5vZGVUb29sdGlwKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVOb2RlVG9vbHRpcCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZU5vZGVUb29sdGlwKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9taXplTm9kZVRvb2x0aXAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICd0b29sdGlwJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9Ub29sdGlwQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9Ub29sdGlwQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1Rvb2x0aXBNb2R1bGUgeyB9XHJcbiJdfQ==