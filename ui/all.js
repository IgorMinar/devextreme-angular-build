/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { NgModule } from '@angular/core';
import { DxAccordionModule } from './accordion';
import { DxActionSheetModule } from './action-sheet';
import { DxAutocompleteModule } from './autocomplete';
import { DxBarGaugeModule } from './bar-gauge';
import { DxBoxModule } from './box';
import { DxBulletModule } from './bullet';
import { DxButtonGroupModule } from './button-group';
import { DxButtonModule } from './button';
import { DxCalendarModule } from './calendar';
import { DxChartModule } from './chart';
import { DxCheckBoxModule } from './check-box';
import { DxCircularGaugeModule } from './circular-gauge';
import { DxColorBoxModule } from './color-box';
import { DxContextMenuModule } from './context-menu';
import { DxDataGridModule } from './data-grid';
import { DxDateBoxModule } from './date-box';
import { DxDeferRenderingModule } from './defer-rendering';
import { DxDrawerModule } from './drawer';
import { DxDropDownBoxModule } from './drop-down-box';
import { DxDropDownButtonModule } from './drop-down-button';
import { DxFileUploaderModule } from './file-uploader';
import { DxFilterBuilderModule } from './filter-builder';
import { DxFormModule } from './form';
import { DxFunnelModule } from './funnel';
import { DxGalleryModule } from './gallery';
import { DxHtmlEditorModule } from './html-editor';
import { DxLinearGaugeModule } from './linear-gauge';
import { DxListModule } from './list';
import { DxLoadIndicatorModule } from './load-indicator';
import { DxLoadPanelModule } from './load-panel';
import { DxLookupModule } from './lookup';
import { DxMapModule } from './map';
import { DxMenuModule } from './menu';
import { DxMultiViewModule } from './multi-view';
import { DxNavBarModule } from './nav-bar';
import { DxNumberBoxModule } from './number-box';
import { DxPieChartModule } from './pie-chart';
import { DxPivotGridFieldChooserModule } from './pivot-grid-field-chooser';
import { DxPivotGridModule } from './pivot-grid';
import { DxPolarChartModule } from './polar-chart';
import { DxPopoverModule } from './popover';
import { DxPopupModule } from './popup';
import { DxProgressBarModule } from './progress-bar';
import { DxRadioGroupModule } from './radio-group';
import { DxRangeSelectorModule } from './range-selector';
import { DxRangeSliderModule } from './range-slider';
import { DxRecurrenceEditorModule } from './recurrence-editor';
import { DxResizableModule } from './resizable';
import { DxResponsiveBoxModule } from './responsive-box';
import { DxSankeyModule } from './sankey';
import { DxSchedulerModule } from './scheduler';
import { DxScrollViewModule } from './scroll-view';
import { DxSelectBoxModule } from './select-box';
import { DxSlideOutViewModule } from './slide-out-view';
import { DxSlideOutModule } from './slide-out';
import { DxSliderModule } from './slider';
import { DxSparklineModule } from './sparkline';
import { DxSpeedDialActionModule } from './speed-dial-action';
import { DxSwitchModule } from './switch';
import { DxTabPanelModule } from './tab-panel';
import { DxTabsModule } from './tabs';
import { DxTagBoxModule } from './tag-box';
import { DxTextAreaModule } from './text-area';
import { DxTextBoxModule } from './text-box';
import { DxTileViewModule } from './tile-view';
import { DxToastModule } from './toast';
import { DxToolbarModule } from './toolbar';
import { DxTooltipModule } from './tooltip';
import { DxTreeListModule } from './tree-list';
import { DxTreeMapModule } from './tree-map';
import { DxTreeViewModule } from './tree-view';
import { DxValidationGroupModule } from './validation-group';
import { DxValidationSummaryModule } from './validation-summary';
import { DxValidatorModule } from './validator';
import { DxVectorMapModule } from './vector-map';
import { DxTemplateModule } from '../core/template';
var DevExtremeModule = (function () {
    function DevExtremeModule() {
    }
    DevExtremeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        DxAccordionModule,
                        DxActionSheetModule,
                        DxAutocompleteModule,
                        DxBarGaugeModule,
                        DxBoxModule,
                        DxBulletModule,
                        DxButtonGroupModule,
                        DxButtonModule,
                        DxCalendarModule,
                        DxChartModule,
                        DxCheckBoxModule,
                        DxCircularGaugeModule,
                        DxColorBoxModule,
                        DxContextMenuModule,
                        DxDataGridModule,
                        DxDateBoxModule,
                        DxDeferRenderingModule,
                        DxDrawerModule,
                        DxDropDownBoxModule,
                        DxDropDownButtonModule,
                        DxFileUploaderModule,
                        DxFilterBuilderModule,
                        DxFormModule,
                        DxFunnelModule,
                        DxGalleryModule,
                        DxHtmlEditorModule,
                        DxLinearGaugeModule,
                        DxListModule,
                        DxLoadIndicatorModule,
                        DxLoadPanelModule,
                        DxLookupModule,
                        DxMapModule,
                        DxMenuModule,
                        DxMultiViewModule,
                        DxNavBarModule,
                        DxNumberBoxModule,
                        DxPieChartModule,
                        DxPivotGridFieldChooserModule,
                        DxPivotGridModule,
                        DxPolarChartModule,
                        DxPopoverModule,
                        DxPopupModule,
                        DxProgressBarModule,
                        DxRadioGroupModule,
                        DxRangeSelectorModule,
                        DxRangeSliderModule,
                        DxRecurrenceEditorModule,
                        DxResizableModule,
                        DxResponsiveBoxModule,
                        DxSankeyModule,
                        DxSchedulerModule,
                        DxScrollViewModule,
                        DxSelectBoxModule,
                        DxSlideOutViewModule,
                        DxSlideOutModule,
                        DxSliderModule,
                        DxSparklineModule,
                        DxSpeedDialActionModule,
                        DxSwitchModule,
                        DxTabPanelModule,
                        DxTabsModule,
                        DxTagBoxModule,
                        DxTextAreaModule,
                        DxTextBoxModule,
                        DxTileViewModule,
                        DxToastModule,
                        DxToolbarModule,
                        DxTooltipModule,
                        DxTreeListModule,
                        DxTreeMapModule,
                        DxTreeViewModule,
                        DxValidationGroupModule,
                        DxValidationSummaryModule,
                        DxValidatorModule,
                        DxVectorMapModule,
                        DxTemplateModule
                    ],
                    exports: [
                        DxAccordionModule,
                        DxActionSheetModule,
                        DxAutocompleteModule,
                        DxBarGaugeModule,
                        DxBoxModule,
                        DxBulletModule,
                        DxButtonGroupModule,
                        DxButtonModule,
                        DxCalendarModule,
                        DxChartModule,
                        DxCheckBoxModule,
                        DxCircularGaugeModule,
                        DxColorBoxModule,
                        DxContextMenuModule,
                        DxDataGridModule,
                        DxDateBoxModule,
                        DxDeferRenderingModule,
                        DxDrawerModule,
                        DxDropDownBoxModule,
                        DxDropDownButtonModule,
                        DxFileUploaderModule,
                        DxFilterBuilderModule,
                        DxFormModule,
                        DxFunnelModule,
                        DxGalleryModule,
                        DxHtmlEditorModule,
                        DxLinearGaugeModule,
                        DxListModule,
                        DxLoadIndicatorModule,
                        DxLoadPanelModule,
                        DxLookupModule,
                        DxMapModule,
                        DxMenuModule,
                        DxMultiViewModule,
                        DxNavBarModule,
                        DxNumberBoxModule,
                        DxPieChartModule,
                        DxPivotGridFieldChooserModule,
                        DxPivotGridModule,
                        DxPolarChartModule,
                        DxPopoverModule,
                        DxPopupModule,
                        DxProgressBarModule,
                        DxRadioGroupModule,
                        DxRangeSelectorModule,
                        DxRangeSliderModule,
                        DxRecurrenceEditorModule,
                        DxResizableModule,
                        DxResponsiveBoxModule,
                        DxSankeyModule,
                        DxSchedulerModule,
                        DxScrollViewModule,
                        DxSelectBoxModule,
                        DxSlideOutViewModule,
                        DxSlideOutModule,
                        DxSliderModule,
                        DxSparklineModule,
                        DxSpeedDialActionModule,
                        DxSwitchModule,
                        DxTabPanelModule,
                        DxTabsModule,
                        DxTagBoxModule,
                        DxTextAreaModule,
                        DxTextBoxModule,
                        DxTileViewModule,
                        DxToastModule,
                        DxToolbarModule,
                        DxTooltipModule,
                        DxTreeListModule,
                        DxTreeMapModule,
                        DxTreeViewModule,
                        DxValidationGroupModule,
                        DxValidationSummaryModule,
                        DxValidatorModule,
                        DxVectorMapModule,
                        DxTemplateModule
                    ]
                },] },
    ];
    return DevExtremeModule;
}());
export { DevExtremeModule };
//# sourceMappingURL=all.js.map