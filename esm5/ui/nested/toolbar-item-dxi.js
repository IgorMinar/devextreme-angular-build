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
import { Component, NgModule, Host, ElementRef, Renderer2, Inject, SkipSelf, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NestedOptionHost, extractTemplate } from '../../core/nested-option';
import { DxTemplateHost } from '../../core/template-host';
import { CollectionNestedOption } from '../../core/nested-option';
var DxiToolbarItemComponent = (function (_super) {
    __extends(DxiToolbarItemComponent, _super);
    function DxiToolbarItemComponent(parentOptionHost, optionHost, renderer, document, templateHost, element) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.document = document;
        _this.element = element;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        templateHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxiToolbarItemComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "html", {
        get: function () {
            return this._getOption('html');
        },
        set: function (value) {
            this._setOption('html', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "options", {
        get: function () {
            return this._getOption('options');
        },
        set: function (value) {
            this._setOption('options', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "toolbar", {
        get: function () {
            return this._getOption('toolbar');
        },
        set: function (value) {
            this._setOption('toolbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "widget", {
        get: function () {
            return this._getOption('widget');
        },
        set: function (value) {
            this._setOption('widget', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiToolbarItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'toolbarItems';
        },
        enumerable: true,
        configurable: true
    });
    DxiToolbarItemComponent.prototype.setTemplate = function (template) {
        this.template = template;
    };
    DxiToolbarItemComponent.prototype.ngAfterViewInit = function () {
        extractTemplate(this, this.element, this.renderer, this.document);
    };
    DxiToolbarItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-toolbar-item',
                    template: '<ng-content></ng-content>',
                    styles: [':host { display: block; }'],
                    providers: [NestedOptionHost, DxTemplateHost]
                },] },
    ];
    /** @nocollapse */
    DxiToolbarItemComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
        { type: Renderer2, },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
        { type: DxTemplateHost, decorators: [{ type: Host },] },
        { type: ElementRef, },
    ]; };
    DxiToolbarItemComponent.propDecorators = {
        "disabled": [{ type: Input },],
        "html": [{ type: Input },],
        "location": [{ type: Input },],
        "options": [{ type: Input },],
        "template": [{ type: Input },],
        "text": [{ type: Input },],
        "toolbar": [{ type: Input },],
        "visible": [{ type: Input },],
        "widget": [{ type: Input },],
    };
    return DxiToolbarItemComponent;
}(CollectionNestedOption));
export { DxiToolbarItemComponent };
var DxiToolbarItemModule = (function () {
    function DxiToolbarItemModule() {
    }
    DxiToolbarItemModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiToolbarItemComponent
                    ],
                    exports: [
                        DxiToolbarItemComponent
                    ],
                },] },
    ];
    return DxiToolbarItemModule;
}());
export { DxiToolbarItemModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1pdGVtLWR4aS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC90b29sYmFyLWl0ZW0tZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxFQUVOLFFBQVEsRUFDUixLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU3RSxPQUFPLEVBQW1CLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQVNyQiwyQ0FBc0I7SUErRS9ELGlDQUFnQyxrQkFDaEIsWUFDQSxRQUFtQixFQUNELFVBQ2xCLGNBQ0EsT0FBbUI7UUFMbkMsWUFNSSxpQkFBTyxTQUlWO1FBUmUsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUNELGNBQVEsR0FBUixRQUFRO1FBRTFCLGFBQU8sR0FBUCxPQUFPLENBQVk7UUFFL0IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQzs7S0FDOUI7MEJBdkZHLDZDQUFROztZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzthQUV2QyxVQUFhLEtBQWM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxV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QUFzQjtTQUF0RCx1QkFBdUI7Ozs7O2dCQW9HbkMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7cUJBQ3hCO2lCQUNGOzsrQkF2SkQ7O1NBd0phLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIFJlbmRlcmVyMixcclxuICAgIEluamVjdCxcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QsIGV4dHJhY3RUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgSUR4VGVtcGxhdGVIb3N0LCBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktdG9vbGJhci1pdGVtJyxcclxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbiAgICBzdHlsZXM6IFsnOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfSddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdCwgRHhUZW1wbGF0ZUhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlUb29sYmFySXRlbUNvbXBvbmVudCBleHRlbmRzIENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBJRHhUZW1wbGF0ZUhvc3Qge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNhYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGh0bWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdodG1sJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaHRtbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdodG1sJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9jYXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2NhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvY2F0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvY2F0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgb3B0aW9ucygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29wdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBvcHRpb25zKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0ZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0ZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRvb2xiYXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0b29sYmFyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdG9vbGJhcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0b29sYmFyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZGdldCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZGdldCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZGdldCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWRnZXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICd0b29sYmFySXRlbXMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICAgICAgICAgIEBIb3N0KCkgdGVtcGxhdGVIb3N0OiBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGVtcGxhdGVIb3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGVtcGxhdGUodGVtcGxhdGU6IER4VGVtcGxhdGVEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgZXh0cmFjdFRlbXBsYXRlKHRoaXMsIHRoaXMuZWxlbWVudCwgdGhpcy5yZW5kZXJlciwgdGhpcy5kb2N1bWVudCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhpVG9vbGJhckl0ZW1Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aVRvb2xiYXJJdGVtQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aVRvb2xiYXJJdGVtTW9kdWxlIHsgfVxyXG4iXX0=