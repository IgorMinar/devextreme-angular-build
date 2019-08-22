/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormSimpleItem } from './base/form-simple-item';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
let DxoFormItemComponent = class DxoFormItemComponent extends DxoFormSimpleItem {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'formItem';
    }
    get validationRulesChildren() {
        return this._getOption('validationRules');
    }
    set validationRulesChildren(value) {
        this.setChildren('validationRules', value);
    }
};
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiValidationRuleComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoFormItemComponent.prototype, "validationRulesChildren", null);
DxoFormItemComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-form-item',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'colSpan',
            'cssClass',
            'dataField',
            'editorOptions',
            'editorType',
            'helpText',
            'isRequired',
            'itemType',
            'label',
            'name',
            'template',
            'validationRules',
            'visible',
            'visibleIndex'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoFormItemComponent);
export { DxoFormItemComponent };
let DxoFormItemModule = class DxoFormItemModule {
};
DxoFormItemModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoFormItemComponent
        ],
        exports: [
            DxoFormItemComponent
        ],
    })
], DxoFormItemModule);
export { DxoFormItemModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2Zvcm0taXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBeUJuRSxJQUFhLG9CQUFvQixHQUFqQywwQkFBa0MsU0FBUSxpQkFBaUI7SUFldkQsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQWxCRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBSUQsSUFBSSx1QkFBdUI7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFBSSx1QkFBdUIsQ0FBQyxLQUFLO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQVNKLENBQUE7QUFkRztJQURDLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUMsQ0FBQztzQ0FDL0IsU0FBUzs7bUVBRXZDO0FBVlEsb0JBQW9CO0lBdEJoQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLE1BQU0sRUFBRTtZQUNKLFNBQVM7WUFDVCxVQUFVO1lBQ1YsV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVk7WUFDWixVQUFVO1lBQ1YsT0FBTztZQUNQLE1BQU07WUFDTixVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLFNBQVM7WUFDVCxjQUFjO1NBQ2pCO2lCQWpCUSxFQUFFO0tBa0JkLENBQUM7SUFnQmUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQWhCbkMsb0JBQW9CLENBc0JoQztTQXRCWSxvQkFBb0I7QUFnQ2pDLElBQWEsaUJBQWlCLEdBQTlCO0NBQWtDLENBQUE7QUFBckIsaUJBQWlCO0lBUjdCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLG9CQUFvQjtTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNQLG9CQUFvQjtTQUNyQjtLQUNGLENBQUM7R0FDVyxpQkFBaUIsQ0FBSTtTQUFyQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvRm9ybVNpbXBsZUl0ZW0gfSBmcm9tICcuL2Jhc2UvZm9ybS1zaW1wbGUtaXRlbSc7XHJcbmltcG9ydCB7IER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50IH0gZnJvbSAnLi92YWxpZGF0aW9uLXJ1bGUtZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWZvcm0taXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdjb2xTcGFuJyxcclxuICAgICAgICAnY3NzQ2xhc3MnLFxyXG4gICAgICAgICdkYXRhRmllbGQnLFxyXG4gICAgICAgICdlZGl0b3JPcHRpb25zJyxcclxuICAgICAgICAnZWRpdG9yVHlwZScsXHJcbiAgICAgICAgJ2hlbHBUZXh0JyxcclxuICAgICAgICAnaXNSZXF1aXJlZCcsXHJcbiAgICAgICAgJ2l0ZW1UeXBlJyxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAndGVtcGxhdGUnLFxyXG4gICAgICAgICd2YWxpZGF0aW9uUnVsZXMnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAndmlzaWJsZUluZGV4J1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRm9ybUl0ZW1Db21wb25lbnQgZXh0ZW5kcyBEeG9Gb3JtU2ltcGxlSXRlbSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2Zvcm1JdGVtJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50KSlcclxuICAgIGdldCB2YWxpZGF0aW9uUnVsZXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpVmFsaWRhdGlvblJ1bGVDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWxpZGF0aW9uUnVsZXMnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWxpZGF0aW9uUnVsZXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3ZhbGlkYXRpb25SdWxlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0Zvcm1JdGVtQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9Gb3JtSXRlbUNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Gb3JtSXRlbU1vZHVsZSB7IH1cclxuIl19