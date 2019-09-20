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
import { CollectionNestedOption } from '../../core/nested-option';
var DxiGroupItemComponent = (function (_super) {
    __extends(DxiGroupItemComponent, _super);
    function DxiGroupItemComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiGroupItemComponent.prototype, "alignByColumn", {
        get: function () {
            return this._getOption('alignByColumn');
        },
        set: function (value) {
            this._setOption('alignByColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "column", {
        get: function () {
            return this._getOption('column');
        },
        set: function (value) {
            this._setOption('column', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "displayFormat", {
        get: function () {
            return this._getOption('displayFormat');
        },
        set: function (value) {
            this._setOption('displayFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "showInColumn", {
        get: function () {
            return this._getOption('showInColumn');
        },
        set: function (value) {
            this._setOption('showInColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "showInGroupFooter", {
        get: function () {
            return this._getOption('showInGroupFooter');
        },
        set: function (value) {
            this._setOption('showInGroupFooter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "skipEmptyValues", {
        get: function () {
            return this._getOption('skipEmptyValues');
        },
        set: function (value) {
            this._setOption('skipEmptyValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "summaryType", {
        get: function () {
            return this._getOption('summaryType');
        },
        set: function (value) {
            this._setOption('summaryType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "valueFormat", {
        get: function () {
            return this._getOption('valueFormat');
        },
        set: function (value) {
            this._setOption('valueFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiGroupItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'groupItems';
        },
        enumerable: true,
        configurable: true
    });
    DxiGroupItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-group-item',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiGroupItemComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiGroupItemComponent.propDecorators = {
        "alignByColumn": [{ type: Input },],
        "column": [{ type: Input },],
        "customizeText": [{ type: Input },],
        "displayFormat": [{ type: Input },],
        "name": [{ type: Input },],
        "showInColumn": [{ type: Input },],
        "showInGroupFooter": [{ type: Input },],
        "skipEmptyValues": [{ type: Input },],
        "summaryType": [{ type: Input },],
        "valueFormat": [{ type: Input },],
    };
    return DxiGroupItemComponent;
}(CollectionNestedOption));
export { DxiGroupItemComponent };
var DxiGroupItemModule = (function () {
    function DxiGroupItemModule() {
    }
    DxiGroupItemModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiGroupItemComponent
                    ],
                    exports: [
                        DxiGroupItemComponent
                    ],
                },] },
    ];
    return DxiGroupItemModule;
}());
export { DxiGroupItemModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtaXRlbS1keGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvZ3JvdXAtaXRlbS1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQU92QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUFTdkIseUNBQXNCO0lBdUY3RCwrQkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDswQkExRkcsZ0RBQWE7O1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7O2FBRTVDLFVBQWtCLEtBQWM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0M7Ozs7MEJBR0cseUNBQU07O1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7O2FBRXJDLFVBQVcsS0FBYTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQzs7OzswQkFHRyxnREFBYTs7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7YUFFNUMsVUFBa0IsS0FBZTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQzs7OzswQkFHRyxnREFBYTs7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7YUFFNUMsVUFBa0IsS0FBYTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQzs7OzswQkFHRyx1Q0FBSTs7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7YUFFbkMsVUFBUyxLQUFhO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xDOzs7OzBCQUdHLCtDQUFZOztZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzthQUUzQyxVQUFpQixLQUFhO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFDOzs7OzBCQUdHLG9EQUFpQjs7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7YUFFaEQsVUFBc0IsS0FBYztZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQy9DOzs7OzBCQUdHLGtEQUFlOztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O2FBRTlDLFVBQW9CLEtBQWM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3Qzs7OzswQkFHRyw4Q0FBVzs7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7YUFFMUMsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7OzswQkFHRyw4Q0FBVzs7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7YUFFMUMsVUFBZ0IsS0FBb0M7WUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekM7Ozs7SUFHRCxzQkFBYyw4Q0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDdkI7OztPQUFBOztnQkExRkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDaEM7Ozs7Z0JBVFEsZ0JBQWdCLHVCQWlHUixRQUFRLFlBQUksSUFBSTtnQkFqR3hCLGdCQUFnQix1QkFrR1osSUFBSTs7O2tDQXZGWixLQUFLOzJCQVFMLEtBQUs7a0NBUUwsS0FBSztrQ0FRTCxLQUFLO3lCQVFMLEtBQUs7aUNBUUwsS0FBSztzQ0FRTCxLQUFLO29DQVFMLEtBQUs7Z0NBUUwsS0FBSztnQ0FRTCxLQUFLOztnQ0FoSFY7RUF1QzJDLHNCQUFzQjtTQUFwRCxxQkFBcUI7Ozs7O2dCQWdHakMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7cUJBQ3RCO2lCQUNGOzs2QkE5SUQ7O1NBK0lhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1ncm91cC1pdGVtJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlHcm91cEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxpZ25CeUNvbHVtbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGlnbkJ5Q29sdW1uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxpZ25CeUNvbHVtbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxpZ25CeUNvbHVtbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHVtbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2x1bW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVUZXh0KCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplVGV4dCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZVRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNwbGF5Rm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzcGxheUZvcm1hdCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc3BsYXlGb3JtYXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzcGxheUZvcm1hdCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCduYW1lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCduYW1lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0luQ29sdW1uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0luQ29sdW1uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0luQ29sdW1uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dJbkNvbHVtbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dJbkdyb3VwRm9vdGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dJbkdyb3VwRm9vdGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0luR3JvdXBGb290ZXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dJbkdyb3VwRm9vdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2tpcEVtcHR5VmFsdWVzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NraXBFbXB0eVZhbHVlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNraXBFbXB0eVZhbHVlcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2tpcEVtcHR5VmFsdWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3VtbWFyeVR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdW1tYXJ5VHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN1bW1hcnlUeXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N1bW1hcnlUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsdWVGb3JtYXQoKTogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlRm9ybWF0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWVGb3JtYXQodmFsdWU6IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWx1ZUZvcm1hdCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2dyb3VwSXRlbXMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aUdyb3VwSXRlbUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpR3JvdXBJdGVtQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUdyb3VwSXRlbU1vZHVsZSB7IH1cclxuIl19