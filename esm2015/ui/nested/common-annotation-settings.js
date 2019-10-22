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
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { DxoChartCommonAnnotationConfig } from './base/chart-common-annotation-config';
let DxoCommonAnnotationSettingsComponent = class DxoCommonAnnotationSettingsComponent extends DxoChartCommonAnnotationConfig {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'commonAnnotationSettings';
    }
};
DxoCommonAnnotationSettingsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
DxoCommonAnnotationSettingsComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-common-annotation-settings',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'allowDragging',
            'argument',
            'arrowLength',
            'arrowWidth',
            'axis',
            'border',
            'color',
            'customizeTooltip',
            'description',
            'font',
            'height',
            'image',
            'offsetX',
            'offsetY',
            'opacity',
            'paddingLeftRight',
            'paddingTopBottom',
            'series',
            'shadow',
            'text',
            'textOverflow',
            'tooltipEnabled',
            'type',
            'value',
            'width',
            'wordWrap',
            'x',
            'y'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host())
], DxoCommonAnnotationSettingsComponent);
export { DxoCommonAnnotationSettingsComponent };
let DxoCommonAnnotationSettingsModule = class DxoCommonAnnotationSettingsModule {
};
DxoCommonAnnotationSettingsModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoCommonAnnotationSettingsComponent
        ],
        exports: [
            DxoCommonAnnotationSettingsComponent
        ],
    })
], DxoCommonAnnotationSettingsModule);
export { DxoCommonAnnotationSettingsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsiY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXVDdkYsSUFBYSxvQ0FBb0MsR0FBakQsMENBQWtELFNBQVEsOEJBQThCO0lBT3BGLFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFWRCxJQUFjLFdBQVc7UUFDckIsT0FBTywwQkFBMEIsQ0FBQztJQUN0QyxDQUFDO0NBVUosQ0FBQTs7WUFQcUQsZ0JBQWdCLHVCQUFyRCxRQUFRLFlBQUksSUFBSTtZQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7QUFSSixvQ0FBb0M7SUFwQ2hELFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQ0FBZ0M7UUFDMUMsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixNQUFNLEVBQUU7WUFDSixlQUFlO1lBQ2YsVUFBVTtZQUNWLGFBQWE7WUFDYixZQUFZO1lBQ1osTUFBTTtZQUNOLFFBQVE7WUFDUixPQUFPO1lBQ1Asa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixNQUFNO1lBQ04sUUFBUTtZQUNSLE9BQU87WUFDUCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUixRQUFRO1lBQ1IsTUFBTTtZQUNOLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsTUFBTTtZQUNOLE9BQU87WUFDUCxPQUFPO1lBQ1AsVUFBVTtZQUNWLEdBQUc7WUFDSCxHQUFHO1NBQ047aUJBL0JRLEVBQUU7S0FnQ2QsQ0FBQztJQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7R0FSTixvQ0FBb0MsQ0FjaEQ7U0FkWSxvQ0FBb0M7QUF3QmpELElBQWEsaUNBQWlDLEdBQTlDO0NBQWtELENBQUE7QUFBckMsaUNBQWlDO0lBUjdDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLG9DQUFvQztTQUNyQztRQUNELE9BQU8sRUFBRTtZQUNQLG9DQUFvQztTQUNyQztLQUNGLENBQUM7R0FDVyxpQ0FBaUMsQ0FBSTtTQUFyQyxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER4b0NoYXJ0Q29tbW9uQW5ub3RhdGlvbkNvbmZpZyB9IGZyb20gJy4vYmFzZS9jaGFydC1jb21tb24tYW5ub3RhdGlvbi1jb25maWcnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWxsb3dEcmFnZ2luZycsXHJcbiAgICAgICAgJ2FyZ3VtZW50JyxcclxuICAgICAgICAnYXJyb3dMZW5ndGgnLFxyXG4gICAgICAgICdhcnJvd1dpZHRoJyxcclxuICAgICAgICAnYXhpcycsXHJcbiAgICAgICAgJ2JvcmRlcicsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnY3VzdG9taXplVG9vbHRpcCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAnZm9udCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2ltYWdlJyxcclxuICAgICAgICAnb2Zmc2V0WCcsXHJcbiAgICAgICAgJ29mZnNldFknLFxyXG4gICAgICAgICdvcGFjaXR5JyxcclxuICAgICAgICAncGFkZGluZ0xlZnRSaWdodCcsXHJcbiAgICAgICAgJ3BhZGRpbmdUb3BCb3R0b20nLFxyXG4gICAgICAgICdzZXJpZXMnLFxyXG4gICAgICAgICdzaGFkb3cnLFxyXG4gICAgICAgICd0ZXh0JyxcclxuICAgICAgICAndGV4dE92ZXJmbG93JyxcclxuICAgICAgICAndG9vbHRpcEVuYWJsZWQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndmFsdWUnLFxyXG4gICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgJ3dvcmRXcmFwJyxcclxuICAgICAgICAneCcsXHJcbiAgICAgICAgJ3knXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Db21tb25Bbm5vdGF0aW9uU2V0dGluZ3NDb21wb25lbnQgZXh0ZW5kcyBEeG9DaGFydENvbW1vbkFubm90YXRpb25Db25maWcge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdjb21tb25Bbm5vdGF0aW9uU2V0dGluZ3MnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0NvbW1vbkFubm90YXRpb25TZXR0aW5nc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQ29tbW9uQW5ub3RhdGlvblNldHRpbmdzQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0NvbW1vbkFubm90YXRpb25TZXR0aW5nc01vZHVsZSB7IH1cclxuIl19