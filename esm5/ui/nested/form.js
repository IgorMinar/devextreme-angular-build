/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormOptions } from './base/form-options';
import { DxiItemComponent } from './item-dxi';
var DxoFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoFormComponent, _super);
    function DxoFormComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'formDataChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFormComponent.prototype, "_optionPath", {
        get: function () {
            return 'form';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoFormComponent.prototype, "formDataChange", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiItemComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoFormComponent.prototype, "itemsChildren", null);
    DxoFormComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-form',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'accessKey',
                'activeStateEnabled',
                'alignItemLabels',
                'alignItemLabelsInAllGroups',
                'colCount',
                'colCountByScreen',
                'customizeItem',
                'disabled',
                'elementAttr',
                'focusStateEnabled',
                'formData',
                'height',
                'hint',
                'hoverStateEnabled',
                'items',
                'labelLocation',
                'minColWidth',
                'onContentReady',
                'onDisposing',
                'onEditorEnterKey',
                'onFieldDataChanged',
                'onInitialized',
                'onOptionChanged',
                'optionalMark',
                'readOnly',
                'requiredMark',
                'requiredMessage',
                'rtlEnabled',
                'screenByWidth',
                'scrollingEnabled',
                'showColonAfterLabel',
                'showOptionalMark',
                'showRequiredMark',
                'showValidationSummary',
                'tabIndex',
                'validationGroup',
                'visible',
                'width'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoFormComponent);
    return DxoFormComponent;
}(DxoFormOptions));
export { DxoFormComponent };
var DxoFormModule = /** @class */ (function () {
    function DxoFormModule() {
    }
    DxoFormModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoFormComponent
            ],
            exports: [
                DxoFormComponent
            ],
        })
    ], DxoFormModule);
    return DxoFormModule;
}());
export { DxoFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxFQUNOLFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBaUQ5QztJQUFzQyw0Q0FBYztJQW1CaEQsMEJBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBUVY7UUFORyxLQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7U0FDN0IsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUF2QkQsc0JBQWMseUNBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksMkNBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDO2FBQ0QsVUFBa0IsS0FBSztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FIQTtJQVRTO1FBQVQsTUFBTSxFQUFFOzBDQUFpQixZQUFZOzREQUFNO0lBTzVDO1FBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUMsQ0FBQzswQ0FDL0IsU0FBUzs7eURBRTdCO0lBZFEsZ0JBQWdCO1FBOUM1QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixXQUFXO2dCQUNYLG9CQUFvQjtnQkFDcEIsaUJBQWlCO2dCQUNqQiw0QkFBNEI7Z0JBQzVCLFVBQVU7Z0JBQ1Ysa0JBQWtCO2dCQUNsQixlQUFlO2dCQUNmLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLFVBQVU7Z0JBQ1YsUUFBUTtnQkFDUixNQUFNO2dCQUNOLG1CQUFtQjtnQkFDbkIsT0FBTztnQkFDUCxlQUFlO2dCQUNmLGFBQWE7Z0JBQ2IsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLGtCQUFrQjtnQkFDbEIsb0JBQW9CO2dCQUNwQixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxVQUFVO2dCQUNWLGNBQWM7Z0JBQ2QsaUJBQWlCO2dCQUNqQixZQUFZO2dCQUNaLGVBQWU7Z0JBQ2Ysa0JBQWtCO2dCQUNsQixxQkFBcUI7Z0JBQ3JCLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQix1QkFBdUI7Z0JBQ3ZCLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQixTQUFTO2dCQUNULE9BQU87YUFDVjtxQkF6Q1EsRUFBRTtTQTBDZCxDQUFDO1FBb0JlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FwQm5DLGdCQUFnQixDQStCNUI7SUFBRCx1QkFBQztDQUFBLEFBL0JELENBQXNDLGNBQWMsR0ErQm5EO1NBL0JZLGdCQUFnQjtBQXlDN0I7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFSekIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGdCQUFnQjthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0I7YUFDakI7U0FDRixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtTQUFqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0Zvcm1PcHRpb25zIH0gZnJvbSAnLi9iYXNlL2Zvcm0tb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWNjZXNzS2V5JyxcclxuICAgICAgICAnYWN0aXZlU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnYWxpZ25JdGVtTGFiZWxzJyxcclxuICAgICAgICAnYWxpZ25JdGVtTGFiZWxzSW5BbGxHcm91cHMnLFxyXG4gICAgICAgICdjb2xDb3VudCcsXHJcbiAgICAgICAgJ2NvbENvdW50QnlTY3JlZW4nLFxyXG4gICAgICAgICdjdXN0b21pemVJdGVtJyxcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdlbGVtZW50QXR0cicsXHJcbiAgICAgICAgJ2ZvY3VzU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnZm9ybURhdGEnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdoaW50JyxcclxuICAgICAgICAnaG92ZXJTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdpdGVtcycsXHJcbiAgICAgICAgJ2xhYmVsTG9jYXRpb24nLFxyXG4gICAgICAgICdtaW5Db2xXaWR0aCcsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkVkaXRvckVudGVyS2V5JyxcclxuICAgICAgICAnb25GaWVsZERhdGFDaGFuZ2VkJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29wdGlvbmFsTWFyaycsXHJcbiAgICAgICAgJ3JlYWRPbmx5JyxcclxuICAgICAgICAncmVxdWlyZWRNYXJrJyxcclxuICAgICAgICAncmVxdWlyZWRNZXNzYWdlJyxcclxuICAgICAgICAncnRsRW5hYmxlZCcsXHJcbiAgICAgICAgJ3NjcmVlbkJ5V2lkdGgnLFxyXG4gICAgICAgICdzY3JvbGxpbmdFbmFibGVkJyxcclxuICAgICAgICAnc2hvd0NvbG9uQWZ0ZXJMYWJlbCcsXHJcbiAgICAgICAgJ3Nob3dPcHRpb25hbE1hcmsnLFxyXG4gICAgICAgICdzaG93UmVxdWlyZWRNYXJrJyxcclxuICAgICAgICAnc2hvd1ZhbGlkYXRpb25TdW1tYXJ5JyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd2YWxpZGF0aW9uR3JvdXAnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Gb3JtQ29tcG9uZW50IGV4dGVuZHMgRHhvRm9ybU9wdGlvbnMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9ybURhdGFDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb3JtRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZm9ybSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlJdGVtQ29tcG9uZW50KSlcclxuICAgIGdldCBpdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9ybURhdGFDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0Zvcm1Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0Zvcm1Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRm9ybU1vZHVsZSB7IH1cclxuIl19