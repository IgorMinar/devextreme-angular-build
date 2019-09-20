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
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiHtmlEditorMention } from './base/html-editor-mention-dxi';
var DxiMentionComponent = (function (_super) {
    __extends(DxiMentionComponent, _super);
    function DxiMentionComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiMentionComponent.prototype, "_optionPath", {
        get: function () {
            return 'mentions';
        },
        enumerable: true,
        configurable: true
    });
    DxiMentionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-mention',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'dataSource',
                        'displayExpr',
                        'itemTemplate',
                        'marker',
                        'minSearchLength',
                        'searchExpr',
                        'searchTimeout',
                        'template',
                        'valueExpr'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxiMentionComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxiMentionComponent;
}(DxiHtmlEditorMention));
export { DxiMentionComponent };
var DxiMentionModule = (function () {
    function DxiMentionModule() {
    }
    DxiMentionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiMentionComponent
                    ],
                    exports: [
                        DxiMentionComponent
                    ],
                },] },
    ];
    return DxiMentionModule;
}());
export { DxiMentionModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi1keGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvbWVudGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztJQW9CN0IsdUNBQW9CO0lBT3pELDZCQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEO0lBVkQsc0JBQWMsNENBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3JCOzs7T0FBQTs7Z0JBckJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUM3QixNQUFNLEVBQUU7d0JBQ0osWUFBWTt3QkFDWixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsUUFBUTt3QkFDUixpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixVQUFVO3dCQUNWLFdBQVc7cUJBQ2Q7aUJBQ0o7Ozs7Z0JBcEJRLGdCQUFnQix1QkE0QlIsUUFBUSxZQUFJLElBQUk7Z0JBNUJ4QixnQkFBZ0IsdUJBNkJaLElBQUk7OzhCQXpEakI7RUFpRHlDLG9CQUFvQjtTQUFoRCxtQkFBbUI7Ozs7O2dCQWdCL0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7cUJBQ3BCO2lCQUNGOzsyQkF4RUQ7O1NBeUVhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeGlIdG1sRWRpdG9yTWVudGlvbiB9IGZyb20gJy4vYmFzZS9odG1sLWVkaXRvci1tZW50aW9uLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1tZW50aW9uJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2RhdGFTb3VyY2UnLFxyXG4gICAgICAgICdkaXNwbGF5RXhwcicsXHJcbiAgICAgICAgJ2l0ZW1UZW1wbGF0ZScsXHJcbiAgICAgICAgJ21hcmtlcicsXHJcbiAgICAgICAgJ21pblNlYXJjaExlbmd0aCcsXHJcbiAgICAgICAgJ3NlYXJjaEV4cHInLFxyXG4gICAgICAgICdzZWFyY2hUaW1lb3V0JyxcclxuICAgICAgICAndGVtcGxhdGUnLFxyXG4gICAgICAgICd2YWx1ZUV4cHInXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlNZW50aW9uQ29tcG9uZW50IGV4dGVuZHMgRHhpSHRtbEVkaXRvck1lbnRpb24ge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdtZW50aW9ucyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhpTWVudGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpTWVudGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlNZW50aW9uTW9kdWxlIHsgfVxyXG4iXX0=