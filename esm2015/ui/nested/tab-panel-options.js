/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoTabPanelOptions } from './base/tab-panel-options';
import { DxiItemComponent } from './item-dxi';
let DxoTabPanelOptionsComponent = class DxoTabPanelOptionsComponent extends DxoTabPanelOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'itemsChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'tabPanelOptions';
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
], DxoTabPanelOptionsComponent.prototype, "itemsChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoTabPanelOptionsComponent.prototype, "selectedIndexChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoTabPanelOptionsComponent.prototype, "selectedItemChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoTabPanelOptionsComponent.prototype, "itemsChildren", null);
DxoTabPanelOptionsComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-tab-panel-options',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'accessKey',
            'activeStateEnabled',
            'animationEnabled',
            'dataSource',
            'deferRendering',
            'disabled',
            'elementAttr',
            'focusStateEnabled',
            'height',
            'hint',
            'hoverStateEnabled',
            'itemHoldTimeout',
            'items',
            'itemTemplate',
            'itemTitleTemplate',
            'loop',
            'noDataText',
            'onContentReady',
            'onDisposing',
            'onInitialized',
            'onItemClick',
            'onItemContextMenu',
            'onItemHold',
            'onItemRendered',
            'onOptionChanged',
            'onSelectionChanged',
            'onTitleClick',
            'onTitleHold',
            'onTitleRendered',
            'repaintChangesOnly',
            'rtlEnabled',
            'scrollByContent',
            'scrollingEnabled',
            'selectedIndex',
            'selectedItem',
            'showNavButtons',
            'swipeEnabled',
            'tabIndex',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoTabPanelOptionsComponent);
export { DxoTabPanelOptionsComponent };
let DxoTabPanelOptionsModule = class DxoTabPanelOptionsModule {
};
DxoTabPanelOptionsModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoTabPanelOptionsComponent
        ],
        exports: [
            DxoTabPanelOptionsComponent
        ],
    })
], DxoTabPanelOptionsModule);
export { DxoTabPanelOptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhbmVsLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvdGFiLXBhbmVsLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQW1EOUMsSUFBYSwyQkFBMkIsR0FBeEMsaUNBQXlDLFNBQVEsa0JBQWtCO0lBNkIvRCxZQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3ZCLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1NBQ2pDLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUF6QkQsSUFBYyxXQUFXO1FBQ3JCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBSUQsSUFBSSxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQWdCSixDQUFBO0FBdENhO0lBQVQsTUFBTSxFQUFFO3NDQUFjLFlBQVk7Z0VBQStKO0FBS3hMO0lBQVQsTUFBTSxFQUFFO3NDQUFzQixZQUFZO3dFQUFTO0FBSzFDO0lBQVQsTUFBTSxFQUFFO3NDQUFxQixZQUFZO3VFQUFNO0FBT2hEO0lBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3NDQUMvQixTQUFTOztnRUFFN0I7QUF4QlEsMkJBQTJCO0lBaER2QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osV0FBVztZQUNYLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixVQUFVO1lBQ1YsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixRQUFRO1lBQ1IsTUFBTTtZQUNOLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsT0FBTztZQUNQLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsTUFBTTtZQUNOLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGVBQWU7WUFDZixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLFVBQVU7WUFDVixTQUFTO1lBQ1QsT0FBTztTQUNWO2lCQTNDUSxFQUFFO0tBNENkLENBQUM7SUE4QmUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQTlCbkMsMkJBQTJCLENBMkN2QztTQTNDWSwyQkFBMkI7QUFxRHhDLElBQWEsd0JBQXdCLEdBQXJDO0NBQXlDLENBQUE7QUFBNUIsd0JBQXdCO0lBUnBDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDJCQUEyQjtTQUM1QjtRQUNELE9BQU8sRUFBRTtZQUNQLDJCQUEyQjtTQUM1QjtLQUNGLENBQUM7R0FDVyx3QkFBd0IsQ0FBSTtTQUE1Qix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvVGFiUGFuZWxPcHRpb25zIH0gZnJvbSAnLi9iYXNlL3RhYi1wYW5lbC1vcHRpb25zJztcclxuaW1wb3J0IHsgRHhpSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tdGFiLXBhbmVsLW9wdGlvbnMnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWNjZXNzS2V5JyxcclxuICAgICAgICAnYWN0aXZlU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnYW5pbWF0aW9uRW5hYmxlZCcsXHJcbiAgICAgICAgJ2RhdGFTb3VyY2UnLFxyXG4gICAgICAgICdkZWZlclJlbmRlcmluZycsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZWxlbWVudEF0dHInLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2l0ZW1Ib2xkVGltZW91dCcsXHJcbiAgICAgICAgJ2l0ZW1zJyxcclxuICAgICAgICAnaXRlbVRlbXBsYXRlJyxcclxuICAgICAgICAnaXRlbVRpdGxlVGVtcGxhdGUnLFxyXG4gICAgICAgICdsb29wJyxcclxuICAgICAgICAnbm9EYXRhVGV4dCcsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkluaXRpYWxpemVkJyxcclxuICAgICAgICAnb25JdGVtQ2xpY2snLFxyXG4gICAgICAgICdvbkl0ZW1Db250ZXh0TWVudScsXHJcbiAgICAgICAgJ29uSXRlbUhvbGQnLFxyXG4gICAgICAgICdvbkl0ZW1SZW5kZXJlZCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uU2VsZWN0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uVGl0bGVDbGljaycsXHJcbiAgICAgICAgJ29uVGl0bGVIb2xkJyxcclxuICAgICAgICAnb25UaXRsZVJlbmRlcmVkJyxcclxuICAgICAgICAncmVwYWludENoYW5nZXNPbmx5JyxcclxuICAgICAgICAncnRsRW5hYmxlZCcsXHJcbiAgICAgICAgJ3Njcm9sbEJ5Q29udGVudCcsXHJcbiAgICAgICAgJ3Njcm9sbGluZ0VuYWJsZWQnLFxyXG4gICAgICAgICdzZWxlY3RlZEluZGV4JyxcclxuICAgICAgICAnc2VsZWN0ZWRJdGVtJyxcclxuICAgICAgICAnc2hvd05hdkJ1dHRvbnMnLFxyXG4gICAgICAgICdzd2lwZUVuYWJsZWQnLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1RhYlBhbmVsT3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIER4b1RhYlBhbmVsT3B0aW9ucyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBpdGVtc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGl0ZW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8c3RyaW5nIHwgYW55IHwgeyBiYWRnZT86IHN0cmluZywgZGlzYWJsZWQ/OiBib29sZWFuLCBodG1sPzogc3RyaW5nLCBpY29uPzogc3RyaW5nLCB0YWJUZW1wbGF0ZT86IGFueSwgdGVtcGxhdGU/OiBhbnksIHRleHQ/OiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIH0+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGVkSW5kZXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGVkSXRlbUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAndGFiUGFuZWxPcHRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUl0ZW1Db21wb25lbnQpKVxyXG4gICAgZ2V0IGl0ZW1zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdpdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpdGVtc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0ZWRJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0ZWRJdGVtQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9UYWJQYW5lbE9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1RhYlBhbmVsT3B0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9UYWJQYW5lbE9wdGlvbnNNb2R1bGUgeyB9XHJcbiJdfQ==