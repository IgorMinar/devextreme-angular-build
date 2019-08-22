/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiHtmlEditorMention } from './base/html-editor-mention-dxi';
var DxiMentionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiMentionComponent, _super);
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
    return DxiMentionComponent;
}(DxiHtmlEditorMention));
export { DxiMentionComponent };
var DxiMentionModule = /** @class */ (function () {
    function DxiMentionModule() {
    }
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
    return DxiMentionModule;
}());
export { DxiMentionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvbWVudGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQW9CdEU7SUFBeUMsK0NBQW9CO0lBT3pELDZCQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFWRCxzQkFBYyw0Q0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFKUSxtQkFBbUI7UUFqQi9CLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixjQUFjO2dCQUNkLFFBQVE7Z0JBQ1IsaUJBQWlCO2dCQUNqQixZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsVUFBVTtnQkFDVixXQUFXO2FBQ2Q7cUJBWlEsRUFBRTtTQWFkLENBQUM7UUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BUm5DLG1CQUFtQixDQWMvQjtJQUFELDBCQUFDO0NBQUEsQUFkRCxDQUF5QyxvQkFBb0IsR0FjNUQ7U0FkWSxtQkFBbUI7QUF3QmhDO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFSNUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLG1CQUFtQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxtQkFBbUI7YUFDcEI7U0FDRixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4aUh0bWxFZGl0b3JNZW50aW9uIH0gZnJvbSAnLi9iYXNlL2h0bWwtZWRpdG9yLW1lbnRpb24tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLW1lbnRpb24nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnZGF0YVNvdXJjZScsXHJcbiAgICAgICAgJ2Rpc3BsYXlFeHByJyxcclxuICAgICAgICAnaXRlbVRlbXBsYXRlJyxcclxuICAgICAgICAnbWFya2VyJyxcclxuICAgICAgICAnbWluU2VhcmNoTGVuZ3RoJyxcclxuICAgICAgICAnc2VhcmNoRXhwcicsXHJcbiAgICAgICAgJ3NlYXJjaFRpbWVvdXQnLFxyXG4gICAgICAgICd0ZW1wbGF0ZScsXHJcbiAgICAgICAgJ3ZhbHVlRXhwcidcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aU1lbnRpb25Db21wb25lbnQgZXh0ZW5kcyBEeGlIdG1sRWRpdG9yTWVudGlvbiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ21lbnRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlNZW50aW9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlNZW50aW9uQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aU1lbnRpb25Nb2R1bGUgeyB9XHJcbiJdfQ==