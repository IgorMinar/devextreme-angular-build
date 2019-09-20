"use strict";
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var accordion_1 = require("./accordion");
var action_sheet_1 = require("./action-sheet");
var autocomplete_1 = require("./autocomplete");
var bar_gauge_1 = require("./bar-gauge");
var box_1 = require("./box");
var bullet_1 = require("./bullet");
var button_group_1 = require("./button-group");
var button_1 = require("./button");
var calendar_1 = require("./calendar");
var chart_1 = require("./chart");
var check_box_1 = require("./check-box");
var circular_gauge_1 = require("./circular-gauge");
var color_box_1 = require("./color-box");
var context_menu_1 = require("./context-menu");
var data_grid_1 = require("./data-grid");
var date_box_1 = require("./date-box");
var defer_rendering_1 = require("./defer-rendering");
var drawer_1 = require("./drawer");
var drop_down_box_1 = require("./drop-down-box");
var drop_down_button_1 = require("./drop-down-button");
var file_uploader_1 = require("./file-uploader");
var filter_builder_1 = require("./filter-builder");
var form_1 = require("./form");
var funnel_1 = require("./funnel");
var gallery_1 = require("./gallery");
var html_editor_1 = require("./html-editor");
var linear_gauge_1 = require("./linear-gauge");
var list_1 = require("./list");
var load_indicator_1 = require("./load-indicator");
var load_panel_1 = require("./load-panel");
var lookup_1 = require("./lookup");
var map_1 = require("./map");
var menu_1 = require("./menu");
var multi_view_1 = require("./multi-view");
var nav_bar_1 = require("./nav-bar");
var number_box_1 = require("./number-box");
var pie_chart_1 = require("./pie-chart");
var pivot_grid_field_chooser_1 = require("./pivot-grid-field-chooser");
var pivot_grid_1 = require("./pivot-grid");
var polar_chart_1 = require("./polar-chart");
var popover_1 = require("./popover");
var popup_1 = require("./popup");
var progress_bar_1 = require("./progress-bar");
var radio_group_1 = require("./radio-group");
var range_selector_1 = require("./range-selector");
var range_slider_1 = require("./range-slider");
var recurrence_editor_1 = require("./recurrence-editor");
var resizable_1 = require("./resizable");
var responsive_box_1 = require("./responsive-box");
var sankey_1 = require("./sankey");
var scheduler_1 = require("./scheduler");
var scroll_view_1 = require("./scroll-view");
var select_box_1 = require("./select-box");
var slide_out_view_1 = require("./slide-out-view");
var slide_out_1 = require("./slide-out");
var slider_1 = require("./slider");
var sparkline_1 = require("./sparkline");
var speed_dial_action_1 = require("./speed-dial-action");
var switch_1 = require("./switch");
var tab_panel_1 = require("./tab-panel");
var tabs_1 = require("./tabs");
var tag_box_1 = require("./tag-box");
var text_area_1 = require("./text-area");
var text_box_1 = require("./text-box");
var tile_view_1 = require("./tile-view");
var toast_1 = require("./toast");
var toolbar_1 = require("./toolbar");
var tooltip_1 = require("./tooltip");
var tree_list_1 = require("./tree-list");
var tree_map_1 = require("./tree-map");
var tree_view_1 = require("./tree-view");
var validation_group_1 = require("./validation-group");
var validation_summary_1 = require("./validation-summary");
var validator_1 = require("./validator");
var vector_map_1 = require("./vector-map");
var template_1 = require("../core/template");
var DevExtremeModule = (function () {
    function DevExtremeModule() {
    }
    DevExtremeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        accordion_1.DxAccordionModule,
                        action_sheet_1.DxActionSheetModule,
                        autocomplete_1.DxAutocompleteModule,
                        bar_gauge_1.DxBarGaugeModule,
                        box_1.DxBoxModule,
                        bullet_1.DxBulletModule,
                        button_group_1.DxButtonGroupModule,
                        button_1.DxButtonModule,
                        calendar_1.DxCalendarModule,
                        chart_1.DxChartModule,
                        check_box_1.DxCheckBoxModule,
                        circular_gauge_1.DxCircularGaugeModule,
                        color_box_1.DxColorBoxModule,
                        context_menu_1.DxContextMenuModule,
                        data_grid_1.DxDataGridModule,
                        date_box_1.DxDateBoxModule,
                        defer_rendering_1.DxDeferRenderingModule,
                        drawer_1.DxDrawerModule,
                        drop_down_box_1.DxDropDownBoxModule,
                        drop_down_button_1.DxDropDownButtonModule,
                        file_uploader_1.DxFileUploaderModule,
                        filter_builder_1.DxFilterBuilderModule,
                        form_1.DxFormModule,
                        funnel_1.DxFunnelModule,
                        gallery_1.DxGalleryModule,
                        html_editor_1.DxHtmlEditorModule,
                        linear_gauge_1.DxLinearGaugeModule,
                        list_1.DxListModule,
                        load_indicator_1.DxLoadIndicatorModule,
                        load_panel_1.DxLoadPanelModule,
                        lookup_1.DxLookupModule,
                        map_1.DxMapModule,
                        menu_1.DxMenuModule,
                        multi_view_1.DxMultiViewModule,
                        nav_bar_1.DxNavBarModule,
                        number_box_1.DxNumberBoxModule,
                        pie_chart_1.DxPieChartModule,
                        pivot_grid_field_chooser_1.DxPivotGridFieldChooserModule,
                        pivot_grid_1.DxPivotGridModule,
                        polar_chart_1.DxPolarChartModule,
                        popover_1.DxPopoverModule,
                        popup_1.DxPopupModule,
                        progress_bar_1.DxProgressBarModule,
                        radio_group_1.DxRadioGroupModule,
                        range_selector_1.DxRangeSelectorModule,
                        range_slider_1.DxRangeSliderModule,
                        recurrence_editor_1.DxRecurrenceEditorModule,
                        resizable_1.DxResizableModule,
                        responsive_box_1.DxResponsiveBoxModule,
                        sankey_1.DxSankeyModule,
                        scheduler_1.DxSchedulerModule,
                        scroll_view_1.DxScrollViewModule,
                        select_box_1.DxSelectBoxModule,
                        slide_out_view_1.DxSlideOutViewModule,
                        slide_out_1.DxSlideOutModule,
                        slider_1.DxSliderModule,
                        sparkline_1.DxSparklineModule,
                        speed_dial_action_1.DxSpeedDialActionModule,
                        switch_1.DxSwitchModule,
                        tab_panel_1.DxTabPanelModule,
                        tabs_1.DxTabsModule,
                        tag_box_1.DxTagBoxModule,
                        text_area_1.DxTextAreaModule,
                        text_box_1.DxTextBoxModule,
                        tile_view_1.DxTileViewModule,
                        toast_1.DxToastModule,
                        toolbar_1.DxToolbarModule,
                        tooltip_1.DxTooltipModule,
                        tree_list_1.DxTreeListModule,
                        tree_map_1.DxTreeMapModule,
                        tree_view_1.DxTreeViewModule,
                        validation_group_1.DxValidationGroupModule,
                        validation_summary_1.DxValidationSummaryModule,
                        validator_1.DxValidatorModule,
                        vector_map_1.DxVectorMapModule,
                        template_1.DxTemplateModule
                    ],
                    exports: [
                        accordion_1.DxAccordionModule,
                        action_sheet_1.DxActionSheetModule,
                        autocomplete_1.DxAutocompleteModule,
                        bar_gauge_1.DxBarGaugeModule,
                        box_1.DxBoxModule,
                        bullet_1.DxBulletModule,
                        button_group_1.DxButtonGroupModule,
                        button_1.DxButtonModule,
                        calendar_1.DxCalendarModule,
                        chart_1.DxChartModule,
                        check_box_1.DxCheckBoxModule,
                        circular_gauge_1.DxCircularGaugeModule,
                        color_box_1.DxColorBoxModule,
                        context_menu_1.DxContextMenuModule,
                        data_grid_1.DxDataGridModule,
                        date_box_1.DxDateBoxModule,
                        defer_rendering_1.DxDeferRenderingModule,
                        drawer_1.DxDrawerModule,
                        drop_down_box_1.DxDropDownBoxModule,
                        drop_down_button_1.DxDropDownButtonModule,
                        file_uploader_1.DxFileUploaderModule,
                        filter_builder_1.DxFilterBuilderModule,
                        form_1.DxFormModule,
                        funnel_1.DxFunnelModule,
                        gallery_1.DxGalleryModule,
                        html_editor_1.DxHtmlEditorModule,
                        linear_gauge_1.DxLinearGaugeModule,
                        list_1.DxListModule,
                        load_indicator_1.DxLoadIndicatorModule,
                        load_panel_1.DxLoadPanelModule,
                        lookup_1.DxLookupModule,
                        map_1.DxMapModule,
                        menu_1.DxMenuModule,
                        multi_view_1.DxMultiViewModule,
                        nav_bar_1.DxNavBarModule,
                        number_box_1.DxNumberBoxModule,
                        pie_chart_1.DxPieChartModule,
                        pivot_grid_field_chooser_1.DxPivotGridFieldChooserModule,
                        pivot_grid_1.DxPivotGridModule,
                        polar_chart_1.DxPolarChartModule,
                        popover_1.DxPopoverModule,
                        popup_1.DxPopupModule,
                        progress_bar_1.DxProgressBarModule,
                        radio_group_1.DxRadioGroupModule,
                        range_selector_1.DxRangeSelectorModule,
                        range_slider_1.DxRangeSliderModule,
                        recurrence_editor_1.DxRecurrenceEditorModule,
                        resizable_1.DxResizableModule,
                        responsive_box_1.DxResponsiveBoxModule,
                        sankey_1.DxSankeyModule,
                        scheduler_1.DxSchedulerModule,
                        scroll_view_1.DxScrollViewModule,
                        select_box_1.DxSelectBoxModule,
                        slide_out_view_1.DxSlideOutViewModule,
                        slide_out_1.DxSlideOutModule,
                        slider_1.DxSliderModule,
                        sparkline_1.DxSparklineModule,
                        speed_dial_action_1.DxSpeedDialActionModule,
                        switch_1.DxSwitchModule,
                        tab_panel_1.DxTabPanelModule,
                        tabs_1.DxTabsModule,
                        tag_box_1.DxTagBoxModule,
                        text_area_1.DxTextAreaModule,
                        text_box_1.DxTextBoxModule,
                        tile_view_1.DxTileViewModule,
                        toast_1.DxToastModule,
                        toolbar_1.DxToolbarModule,
                        tooltip_1.DxTooltipModule,
                        tree_list_1.DxTreeListModule,
                        tree_map_1.DxTreeMapModule,
                        tree_view_1.DxTreeViewModule,
                        validation_group_1.DxValidationGroupModule,
                        validation_summary_1.DxValidationSummaryModule,
                        validator_1.DxValidatorModule,
                        vector_map_1.DxVectorMapModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DevExtremeModule;
}());
exports.DevExtremeModule = DevExtremeModule;
//# sourceMappingURL=all.js.map