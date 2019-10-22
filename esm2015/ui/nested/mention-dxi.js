/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { DxiHtmlEditorMention } from './base/html-editor-mention-dxi';
let DxiMentionComponent = class DxiMentionComponent extends DxiHtmlEditorMention {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'mentions';
    }
};
DxiMentionComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxiMentionComponent = tslib_1.__decorate([
    Component({
        selector: 'dxi-mention',
        template: '',
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
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host())
], DxiMentionComponent);
export { DxiMentionComponent };
let DxiMentionModule = class DxiMentionModule {
};
DxiMentionModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxiMentionComponent
        ],
        exports: [
            DxiMentionComponent
        ],
    })
], DxiMentionModule);
export { DxiMentionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsibWVudGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQW9CdEUsSUFBYSxtQkFBbUIsR0FBaEMseUJBQWlDLFNBQVEsb0JBQW9CO0lBT3pELFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFWRCxJQUFjLFdBQVc7UUFDckIsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztDQVVKLENBQUE7O1lBUHFELGdCQUFnQix1QkFBckQsUUFBUSxZQUFJLElBQUk7WUFDRCxnQkFBZ0IsdUJBQW5DLElBQUk7O0FBUkosbUJBQW1CO0lBakIvQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLE1BQU0sRUFBRTtZQUNKLFlBQVk7WUFDWixhQUFhO1lBQ2IsY0FBYztZQUNkLFFBQVE7WUFDUixpQkFBaUI7WUFDakIsWUFBWTtZQUNaLGVBQWU7WUFDZixVQUFVO1lBQ1YsV0FBVztTQUNkO2lCQVpRLEVBQUU7S0FhZCxDQUFDO0lBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtHQVJOLG1CQUFtQixDQWMvQjtTQWRZLG1CQUFtQjtBQXdCaEMsSUFBYSxnQkFBZ0IsR0FBN0I7Q0FBaUMsQ0FBQTtBQUFwQixnQkFBZ0I7SUFSNUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osbUJBQW1CO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsbUJBQW1CO1NBQ3BCO0tBQ0YsQ0FBQztHQUNXLGdCQUFnQixDQUFJO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHhpSHRtbEVkaXRvck1lbnRpb24gfSBmcm9tICcuL2Jhc2UvaHRtbC1lZGl0b3ItbWVudGlvbi1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktbWVudGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdkYXRhU291cmNlJyxcclxuICAgICAgICAnZGlzcGxheUV4cHInLFxyXG4gICAgICAgICdpdGVtVGVtcGxhdGUnLFxyXG4gICAgICAgICdtYXJrZXInLFxyXG4gICAgICAgICdtaW5TZWFyY2hMZW5ndGgnLFxyXG4gICAgICAgICdzZWFyY2hFeHByJyxcclxuICAgICAgICAnc2VhcmNoVGltZW91dCcsXHJcbiAgICAgICAgJ3RlbXBsYXRlJyxcclxuICAgICAgICAndmFsdWVFeHByJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpTWVudGlvbkNvbXBvbmVudCBleHRlbmRzIER4aUh0bWxFZGl0b3JNZW50aW9uIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnbWVudGlvbnMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aU1lbnRpb25Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aU1lbnRpb25Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpTWVudGlvbk1vZHVsZSB7IH1cclxuIl19