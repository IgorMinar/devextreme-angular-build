/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormOptions } from './base/form-options';
import { DxiItemComponent } from './item-dxi';
let DxoFormComponent = class DxoFormComponent extends DxoFormOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'formDataChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'form';
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoFormComponent.prototype, "formDataChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent)),
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
export { DxoFormComponent };
let DxoFormModule = class DxoFormModule {
};
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
export { DxoFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxFQUNOLFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBaUQ5QyxJQUFhLGdCQUFnQixHQUE3QixzQkFBOEIsU0FBUSxjQUFjO0lBbUJoRCxZQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7U0FDN0IsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQXZCRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBSUQsSUFBSSxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQWNKLENBQUE7QUExQmE7SUFBVCxNQUFNLEVBQUU7c0NBQWlCLFlBQVk7d0RBQU07QUFPNUM7SUFEQyxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7c0NBQy9CLFNBQVM7O3FEQUU3QjtBQWRRLGdCQUFnQjtJQTlDNUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixNQUFNLEVBQUU7WUFDSixXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLGlCQUFpQjtZQUNqQiw0QkFBNEI7WUFDNUIsVUFBVTtZQUNWLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsVUFBVTtZQUNWLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLFFBQVE7WUFDUixNQUFNO1lBQ04sbUJBQW1CO1lBQ25CLE9BQU87WUFDUCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxVQUFVO1lBQ1YsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQix1QkFBdUI7WUFDdkIsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsT0FBTztTQUNWO2lCQXpDUSxFQUFFO0tBMENkLENBQUM7SUFvQmUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQXBCbkMsZ0JBQWdCLENBK0I1QjtTQS9CWSxnQkFBZ0I7QUF5QzdCLElBQWEsYUFBYSxHQUExQjtDQUE4QixDQUFBO0FBQWpCLGFBQWE7SUFSekIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osZ0JBQWdCO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsZ0JBQWdCO1NBQ2pCO0tBQ0YsQ0FBQztHQUNXLGFBQWEsQ0FBSTtTQUFqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0Zvcm1PcHRpb25zIH0gZnJvbSAnLi9iYXNlL2Zvcm0tb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWNjZXNzS2V5JyxcclxuICAgICAgICAnYWN0aXZlU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnYWxpZ25JdGVtTGFiZWxzJyxcclxuICAgICAgICAnYWxpZ25JdGVtTGFiZWxzSW5BbGxHcm91cHMnLFxyXG4gICAgICAgICdjb2xDb3VudCcsXHJcbiAgICAgICAgJ2NvbENvdW50QnlTY3JlZW4nLFxyXG4gICAgICAgICdjdXN0b21pemVJdGVtJyxcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdlbGVtZW50QXR0cicsXHJcbiAgICAgICAgJ2ZvY3VzU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnZm9ybURhdGEnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdoaW50JyxcclxuICAgICAgICAnaG92ZXJTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdpdGVtcycsXHJcbiAgICAgICAgJ2xhYmVsTG9jYXRpb24nLFxyXG4gICAgICAgICdtaW5Db2xXaWR0aCcsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkVkaXRvckVudGVyS2V5JyxcclxuICAgICAgICAnb25GaWVsZERhdGFDaGFuZ2VkJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29wdGlvbmFsTWFyaycsXHJcbiAgICAgICAgJ3JlYWRPbmx5JyxcclxuICAgICAgICAncmVxdWlyZWRNYXJrJyxcclxuICAgICAgICAncmVxdWlyZWRNZXNzYWdlJyxcclxuICAgICAgICAncnRsRW5hYmxlZCcsXHJcbiAgICAgICAgJ3NjcmVlbkJ5V2lkdGgnLFxyXG4gICAgICAgICdzY3JvbGxpbmdFbmFibGVkJyxcclxuICAgICAgICAnc2hvd0NvbG9uQWZ0ZXJMYWJlbCcsXHJcbiAgICAgICAgJ3Nob3dPcHRpb25hbE1hcmsnLFxyXG4gICAgICAgICdzaG93UmVxdWlyZWRNYXJrJyxcclxuICAgICAgICAnc2hvd1ZhbGlkYXRpb25TdW1tYXJ5JyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd2YWxpZGF0aW9uR3JvdXAnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Gb3JtQ29tcG9uZW50IGV4dGVuZHMgRHhvRm9ybU9wdGlvbnMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9ybURhdGFDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb3JtRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZm9ybSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlJdGVtQ29tcG9uZW50KSlcclxuICAgIGdldCBpdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9ybURhdGFDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0Zvcm1Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0Zvcm1Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRm9ybU1vZHVsZSB7IH1cclxuIl19