/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoBoxOptions } from './base/box-options';
import { DxiItemComponent } from './item-dxi';
let DxoBoxComponent = class DxoBoxComponent extends DxoBoxOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'itemsChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'box';
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
], DxoBoxComponent.prototype, "itemsChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoBoxComponent.prototype, "itemsChildren", null);
DxoBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-box',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'align',
            'crossAlign',
            'dataSource',
            'direction',
            'disabled',
            'elementAttr',
            'height',
            'hoverStateEnabled',
            'itemHoldTimeout',
            'items',
            'itemTemplate',
            'onContentReady',
            'onDisposing',
            'onInitialized',
            'onItemClick',
            'onItemContextMenu',
            'onItemHold',
            'onItemRendered',
            'onOptionChanged',
            'rtlEnabled',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoBoxComponent);
export { DxoBoxComponent };
let DxoBoxModule = class DxoBoxModule {
};
DxoBoxModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoBoxComponent
        ],
        exports: [
            DxoBoxComponent
        ],
    })
], DxoBoxModule);
export { DxoBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFDTixZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFPdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQWlDOUMsSUFBYSxlQUFlLEdBQTVCLHFCQUE2QixTQUFRLGFBQWE7SUFtQjlDLFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQXZCRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBSUQsSUFBSSxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQWNKLENBQUE7QUExQmE7SUFBVCxNQUFNLEVBQUU7c0NBQWMsWUFBWTtvREFBK007QUFPbFA7SUFEQyxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7c0NBQy9CLFNBQVM7O29EQUU3QjtBQWRRLGVBQWU7SUE5QjNCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osT0FBTztZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osV0FBVztZQUNYLFVBQVU7WUFDVixhQUFhO1lBQ2IsUUFBUTtZQUNSLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsT0FBTztZQUNQLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGVBQWU7WUFDZixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixTQUFTO1lBQ1QsT0FBTztTQUNWO2lCQXpCUSxFQUFFO0tBMEJkLENBQUM7SUFvQmUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQXBCbkMsZUFBZSxDQStCM0I7U0EvQlksZUFBZTtBQXlDNUIsSUFBYSxZQUFZLEdBQXpCO0NBQTZCLENBQUE7QUFBaEIsWUFBWTtJQVJ4QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixlQUFlO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsZUFBZTtTQUNoQjtLQUNGLENBQUM7R0FDVyxZQUFZLENBQUk7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvQm94T3B0aW9ucyB9IGZyb20gJy4vYmFzZS9ib3gtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWJveCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhbGlnbicsXHJcbiAgICAgICAgJ2Nyb3NzQWxpZ24nLFxyXG4gICAgICAgICdkYXRhU291cmNlJyxcclxuICAgICAgICAnZGlyZWN0aW9uJyxcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdlbGVtZW50QXR0cicsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hvdmVyU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnaXRlbUhvbGRUaW1lb3V0JyxcclxuICAgICAgICAnaXRlbXMnLFxyXG4gICAgICAgICdpdGVtVGVtcGxhdGUnLFxyXG4gICAgICAgICdvbkNvbnRlbnRSZWFkeScsXHJcbiAgICAgICAgJ29uRGlzcG9zaW5nJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uSXRlbUNsaWNrJyxcclxuICAgICAgICAnb25JdGVtQ29udGV4dE1lbnUnLFxyXG4gICAgICAgICdvbkl0ZW1Ib2xkJyxcclxuICAgICAgICAnb25JdGVtUmVuZGVyZWQnLFxyXG4gICAgICAgICdvbk9wdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdydGxFbmFibGVkJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQm94Q29tcG9uZW50IGV4dGVuZHMgRHhvQm94T3B0aW9ucyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBpdGVtc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGl0ZW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8c3RyaW5nIHwgYW55IHwgeyBiYXNlU2l6ZT86IG51bWJlciB8IHN0cmluZywgYm94PzogRGV2RXhwcmVzcy51aS5keEJveE9wdGlvbnMsIGRpc2FibGVkPzogYm9vbGVhbiwgaHRtbD86IHN0cmluZywgcmF0aW8/OiBudW1iZXIsIHNocmluaz86IG51bWJlciwgdGVtcGxhdGU/OiBhbnksIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0+PjtcclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdib3gnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpSXRlbUNvbXBvbmVudCkpXHJcbiAgICBnZXQgaXRlbXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpSXRlbUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2l0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXRlbXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2l0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2l0ZW1zQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9Cb3hDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0JveENvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Cb3hNb2R1bGUgeyB9XHJcbiJdfQ==