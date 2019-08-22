/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
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
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvbWVudGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQW9CdEUsSUFBYSxtQkFBbUIsR0FBaEMseUJBQWlDLFNBQVEsb0JBQW9CO0lBT3pELFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFWRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUN0QixDQUFDO0NBVUosQ0FBQTtBQWRZLG1CQUFtQjtJQWpCL0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixNQUFNLEVBQUU7WUFDSixZQUFZO1lBQ1osYUFBYTtZQUNiLGNBQWM7WUFDZCxRQUFRO1lBQ1IsaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixlQUFlO1lBQ2YsVUFBVTtZQUNWLFdBQVc7U0FDZDtpQkFaUSxFQUFFO0tBYWQsQ0FBQztJQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBRG1DLGdCQUFnQjtRQUN0QyxnQkFBZ0I7R0FSbkMsbUJBQW1CLENBYy9CO1NBZFksbUJBQW1CO0FBd0JoQyxJQUFhLGdCQUFnQixHQUE3QjtDQUFpQyxDQUFBO0FBQXBCLGdCQUFnQjtJQVI1QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixtQkFBbUI7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxtQkFBbUI7U0FDcEI7S0FDRixDQUFDO0dBQ1csZ0JBQWdCLENBQUk7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpSHRtbEVkaXRvck1lbnRpb24gfSBmcm9tICcuL2Jhc2UvaHRtbC1lZGl0b3ItbWVudGlvbi1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktbWVudGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdkYXRhU291cmNlJyxcclxuICAgICAgICAnZGlzcGxheUV4cHInLFxyXG4gICAgICAgICdpdGVtVGVtcGxhdGUnLFxyXG4gICAgICAgICdtYXJrZXInLFxyXG4gICAgICAgICdtaW5TZWFyY2hMZW5ndGgnLFxyXG4gICAgICAgICdzZWFyY2hFeHByJyxcclxuICAgICAgICAnc2VhcmNoVGltZW91dCcsXHJcbiAgICAgICAgJ3RlbXBsYXRlJyxcclxuICAgICAgICAndmFsdWVFeHByJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpTWVudGlvbkNvbXBvbmVudCBleHRlbmRzIER4aUh0bWxFZGl0b3JNZW50aW9uIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnbWVudGlvbnMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aU1lbnRpb25Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aU1lbnRpb25Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpTWVudGlvbk1vZHVsZSB7IH1cclxuIl19