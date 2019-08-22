/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
let DxiSortByGroupSummaryInfoComponent = class DxiSortByGroupSummaryInfoComponent extends CollectionNestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get groupColumn() {
        return this._getOption('groupColumn');
    }
    set groupColumn(value) {
        this._setOption('groupColumn', value);
    }
    get sortOrder() {
        return this._getOption('sortOrder');
    }
    set sortOrder(value) {
        this._setOption('sortOrder', value);
    }
    get summaryItem() {
        return this._getOption('summaryItem');
    }
    set summaryItem(value) {
        this._setOption('summaryItem', value);
    }
    get _optionPath() {
        return 'sortByGroupSummaryInfo';
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxiSortByGroupSummaryInfoComponent.prototype, "groupColumn", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxiSortByGroupSummaryInfoComponent.prototype, "sortOrder", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxiSortByGroupSummaryInfoComponent.prototype, "summaryItem", null);
DxiSortByGroupSummaryInfoComponent = tslib_1.__decorate([
    Component({
        selector: 'dxi-sort-by-group-summary-info',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxiSortByGroupSummaryInfoComponent);
export { DxiSortByGroupSummaryInfoComponent };
let DxiSortByGroupSummaryInfoModule = class DxiSortByGroupSummaryInfoModule {
};
DxiSortByGroupSummaryInfoModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxiSortByGroupSummaryInfoComponent
        ],
        exports: [
            DxiSortByGroupSummaryInfoComponent
        ],
    })
], DxiSortByGroupSummaryInfoModule);
export { DxiSortByGroupSummaryInfoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1ieS1ncm91cC1zdW1tYXJ5LWluZm8tZHhpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL3NvcnQtYnktZ3JvdXAtc3VtbWFyeS1pbmZvLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBR3BDLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU2xFLElBQWEsa0NBQWtDLEdBQS9DLHdDQUFnRCxTQUFRLHNCQUFzQjtJQStCMUUsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQWxDRCxJQUFJLFdBQVc7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBR0QsSUFBSSxTQUFTO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUdELElBQUksV0FBVztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFzQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBR0QsSUFBYyxXQUFXO1FBQ3JCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0NBVUosQ0FBQTtBQXBDRztJQURDLEtBQUssRUFBRTs7O3FFQUdQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7OzttRUFHUDtBQU1EO0lBREMsS0FBSyxFQUFFOzs7cUVBR1A7QUFwQlEsa0NBQWtDO0lBTjlDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQ0FBZ0M7UUFDMUMsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFEcEIsRUFBRTtLQUVkLENBQUM7SUFnQ2UsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQWhDbkMsa0NBQWtDLENBc0M5QztTQXRDWSxrQ0FBa0M7QUFnRC9DLElBQWEsK0JBQStCLEdBQTVDO0NBQWdELENBQUE7QUFBbkMsK0JBQStCO0lBUjNDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGtDQUFrQztTQUNuQztRQUNELE9BQU8sRUFBRTtZQUNQLGtDQUFrQztTQUNuQztLQUNGLENBQUM7R0FDVywrQkFBK0IsQ0FBSTtTQUFuQywrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLXNvcnQtYnktZ3JvdXAtc3VtbWFyeS1pbmZvJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvQ29tcG9uZW50IGV4dGVuZHMgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwQ29sdW1uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBDb2x1bW4nKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cENvbHVtbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cENvbHVtbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNvcnRPcmRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NvcnRPcmRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNvcnRPcmRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzb3J0T3JkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdW1tYXJ5SXRlbSgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N1bW1hcnlJdGVtJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3VtbWFyeUl0ZW0odmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3VtbWFyeUl0ZW0nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzb3J0QnlHcm91cFN1bW1hcnlJbmZvJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlTb3J0QnlHcm91cFN1bW1hcnlJbmZvQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aVNvcnRCeUdyb3VwU3VtbWFyeUluZm9Nb2R1bGUgeyB9XHJcbiJdfQ==