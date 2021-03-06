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
import { Component, NgModule, Host, SkipSelf, Output, ContentChildren, forwardRef } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
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
DxoFormComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
tslib_1.__decorate([
    Output()
], DxoFormComponent.prototype, "formDataChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiItemComponent))
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
    tslib_1.__param(1, Host())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQvIiwic291cmNlcyI6WyJmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBRU4sZUFBZSxFQUNmLFVBQVUsRUFFYixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQ0gsZ0JBQWdCLEdBQ25CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQWlEOUMsSUFBYSxnQkFBZ0IsR0FBN0Isc0JBQThCLFNBQVEsY0FBYztJQW1CaEQsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1NBQzdCLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUF2QkQsSUFBYyxXQUFXO1FBQ3JCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFJRCxJQUFJLGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQWNKLENBQUE7O1lBWnFELGdCQUFnQix1QkFBckQsUUFBUSxZQUFJLElBQUk7WUFDRCxnQkFBZ0IsdUJBQW5DLElBQUk7O0FBZkg7SUFBVCxNQUFNLEVBQUU7d0RBQW1DO0FBTzVDO0lBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3FEQUduRDtBQWRRLGdCQUFnQjtJQTlDNUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixNQUFNLEVBQUU7WUFDSixXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLGlCQUFpQjtZQUNqQiw0QkFBNEI7WUFDNUIsVUFBVTtZQUNWLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsVUFBVTtZQUNWLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLFFBQVE7WUFDUixNQUFNO1lBQ04sbUJBQW1CO1lBQ25CLE9BQU87WUFDUCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxVQUFVO1lBQ1YsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQix1QkFBdUI7WUFDdkIsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsT0FBTztTQUNWO2lCQXpDUSxFQUFFO0tBMENkLENBQUM7SUFvQmUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtHQXBCTixnQkFBZ0IsQ0ErQjVCO1NBL0JZLGdCQUFnQjtBQXlDN0IsSUFBYSxhQUFhLEdBQTFCO0NBQThCLENBQUE7QUFBakIsYUFBYTtJQVJ6QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixnQkFBZ0I7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDUCxnQkFBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csYUFBYSxDQUFJO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeG9Gb3JtT3B0aW9ucyB9IGZyb20gJy4vYmFzZS9mb3JtLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBEeGlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1mb3JtJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FjY2Vzc0tleScsXHJcbiAgICAgICAgJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2FsaWduSXRlbUxhYmVscycsXHJcbiAgICAgICAgJ2FsaWduSXRlbUxhYmVsc0luQWxsR3JvdXBzJyxcclxuICAgICAgICAnY29sQ291bnQnLFxyXG4gICAgICAgICdjb2xDb3VudEJ5U2NyZWVuJyxcclxuICAgICAgICAnY3VzdG9taXplSXRlbScsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZWxlbWVudEF0dHInLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2Zvcm1EYXRhJyxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICAnaGludCcsXHJcbiAgICAgICAgJ2hvdmVyU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnaXRlbXMnLFxyXG4gICAgICAgICdsYWJlbExvY2F0aW9uJyxcclxuICAgICAgICAnbWluQ29sV2lkdGgnLFxyXG4gICAgICAgICdvbkNvbnRlbnRSZWFkeScsXHJcbiAgICAgICAgJ29uRGlzcG9zaW5nJyxcclxuICAgICAgICAnb25FZGl0b3JFbnRlcktleScsXHJcbiAgICAgICAgJ29uRmllbGREYXRhQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uSW5pdGlhbGl6ZWQnLFxyXG4gICAgICAgICdvbk9wdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvcHRpb25hbE1hcmsnLFxyXG4gICAgICAgICdyZWFkT25seScsXHJcbiAgICAgICAgJ3JlcXVpcmVkTWFyaycsXHJcbiAgICAgICAgJ3JlcXVpcmVkTWVzc2FnZScsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzY3JlZW5CeVdpZHRoJyxcclxuICAgICAgICAnc2Nyb2xsaW5nRW5hYmxlZCcsXHJcbiAgICAgICAgJ3Nob3dDb2xvbkFmdGVyTGFiZWwnLFxyXG4gICAgICAgICdzaG93T3B0aW9uYWxNYXJrJyxcclxuICAgICAgICAnc2hvd1JlcXVpcmVkTWFyaycsXHJcbiAgICAgICAgJ3Nob3dWYWxpZGF0aW9uU3VtbWFyeScsXHJcbiAgICAgICAgJ3RhYkluZGV4JyxcclxuICAgICAgICAndmFsaWRhdGlvbkdyb3VwJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRm9ybUNvbXBvbmVudCBleHRlbmRzIER4b0Zvcm1PcHRpb25zIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb3JtRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZm9ybSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlJdGVtQ29tcG9uZW50KSlcclxuICAgIGdldCBpdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9ybURhdGFDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0Zvcm1Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0Zvcm1Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRm9ybU1vZHVsZSB7IH1cclxuIl19