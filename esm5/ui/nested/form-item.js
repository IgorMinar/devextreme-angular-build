/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormSimpleItem } from './base/form-simple-item';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
var DxoFormItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoFormItemComponent, _super);
    function DxoFormItemComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFormItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'formItem';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormItemComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiValidationRuleComponent; })),
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
    return DxoFormItemComponent;
}(DxoFormSimpleItem));
export { DxoFormItemComponent };
var DxoFormItemModule = /** @class */ (function () {
    function DxoFormItemModule() {
    }
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
    return DxoFormItemModule;
}());
export { DxoFormItemModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2Zvcm0taXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBeUJuRTtJQUEwQyxnREFBaUI7SUFldkQsOEJBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQWxCRCxzQkFBYyw2Q0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSx5REFBdUI7YUFBM0I7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlDLENBQUM7YUFDRCxVQUE0QixLQUFLO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BSEE7SUFGRDtRQURDLGVBQWUsQ0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLDBCQUEwQixFQUExQixDQUEwQixDQUFDLENBQUM7MENBQy9CLFNBQVM7O3VFQUV2QztJQVZRLG9CQUFvQjtRQXRCaEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osU0FBUztnQkFDVCxVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsWUFBWTtnQkFDWixVQUFVO2dCQUNWLE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixVQUFVO2dCQUNWLGlCQUFpQjtnQkFDakIsU0FBUztnQkFDVCxjQUFjO2FBQ2pCO3FCQWpCUSxFQUFFO1NBa0JkLENBQUM7UUFnQmUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFEbUMsZ0JBQWdCO1lBQ3RDLGdCQUFnQjtPQWhCbkMsb0JBQW9CLENBc0JoQztJQUFELDJCQUFDO0NBQUEsQUF0QkQsQ0FBMEMsaUJBQWlCLEdBc0IxRDtTQXRCWSxvQkFBb0I7QUFnQ2pDO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFSN0IsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLG9CQUFvQjthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxvQkFBb0I7YUFDckI7U0FDRixDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO1NBQXJCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9Gb3JtU2ltcGxlSXRlbSB9IGZyb20gJy4vYmFzZS9mb3JtLXNpbXBsZS1pdGVtJztcclxuaW1wb3J0IHsgRHhpVmFsaWRhdGlvblJ1bGVDb21wb25lbnQgfSBmcm9tICcuL3ZhbGlkYXRpb24tcnVsZS1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tZm9ybS1pdGVtJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2NvbFNwYW4nLFxyXG4gICAgICAgICdjc3NDbGFzcycsXHJcbiAgICAgICAgJ2RhdGFGaWVsZCcsXHJcbiAgICAgICAgJ2VkaXRvck9wdGlvbnMnLFxyXG4gICAgICAgICdlZGl0b3JUeXBlJyxcclxuICAgICAgICAnaGVscFRleHQnLFxyXG4gICAgICAgICdpc1JlcXVpcmVkJyxcclxuICAgICAgICAnaXRlbVR5cGUnLFxyXG4gICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICd0ZW1wbGF0ZScsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25SdWxlcycsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd2aXNpYmxlSW5kZXgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Gb3JtSXRlbUNvbXBvbmVudCBleHRlbmRzIER4b0Zvcm1TaW1wbGVJdGVtIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZm9ybUl0ZW0nO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpVmFsaWRhdGlvblJ1bGVDb21wb25lbnQpKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25SdWxlc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25SdWxlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25SdWxlc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndmFsaWRhdGlvblJ1bGVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvRm9ybUl0ZW1Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0Zvcm1JdGVtQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0Zvcm1JdGVtTW9kdWxlIHsgfVxyXG4iXX0=