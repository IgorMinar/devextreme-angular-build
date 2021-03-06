(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('devextreme-angular/core'), require('@angular/core'), require('devextreme-angular/ui/accordion'), require('devextreme-angular/ui/action-sheet'), require('devextreme-angular/ui/autocomplete'), require('devextreme-angular/ui/bar-gauge'), require('devextreme-angular/ui/box'), require('devextreme-angular/ui/bullet'), require('devextreme-angular/ui/button'), require('devextreme-angular/ui/button-group'), require('devextreme-angular/ui/calendar'), require('devextreme-angular/ui/chart'), require('devextreme-angular/ui/check-box'), require('devextreme-angular/ui/circular-gauge'), require('devextreme-angular/ui/color-box'), require('devextreme-angular/ui/context-menu'), require('devextreme-angular/ui/data-grid'), require('devextreme-angular/ui/date-box'), require('devextreme-angular/ui/defer-rendering'), require('devextreme-angular/ui/drawer'), require('devextreme-angular/ui/drop-down-box'), require('devextreme-angular/ui/drop-down-button'), require('devextreme-angular/ui/file-uploader'), require('devextreme-angular/ui/filter-builder'), require('devextreme-angular/ui/form'), require('devextreme-angular/ui/funnel'), require('devextreme-angular/ui/gallery'), require('devextreme-angular/ui/html-editor'), require('devextreme-angular/ui/linear-gauge'), require('devextreme-angular/ui/list'), require('devextreme-angular/ui/load-indicator'), require('devextreme-angular/ui/load-panel'), require('devextreme-angular/ui/lookup'), require('devextreme-angular/ui/map'), require('devextreme-angular/ui/menu'), require('devextreme-angular/ui/multi-view'), require('devextreme-angular/ui/nav-bar'), require('devextreme-angular/ui/number-box'), require('devextreme-angular/ui/pie-chart'), require('devextreme-angular/ui/pivot-grid'), require('devextreme-angular/ui/pivot-grid-field-chooser'), require('devextreme-angular/ui/polar-chart'), require('devextreme-angular/ui/popover'), require('devextreme-angular/ui/popup'), require('devextreme-angular/ui/progress-bar'), require('devextreme-angular/ui/radio-group'), require('devextreme-angular/ui/range-selector'), require('devextreme-angular/ui/range-slider'), require('devextreme-angular/ui/recurrence-editor'), require('devextreme-angular/ui/resizable'), require('devextreme-angular/ui/responsive-box'), require('devextreme-angular/ui/sankey'), require('devextreme-angular/ui/scheduler'), require('devextreme-angular/ui/scroll-view'), require('devextreme-angular/ui/select-box'), require('devextreme-angular/ui/slide-out'), require('devextreme-angular/ui/slide-out-view'), require('devextreme-angular/ui/slider'), require('devextreme-angular/ui/sparkline'), require('devextreme-angular/ui/speed-dial-action'), require('devextreme-angular/ui/switch'), require('devextreme-angular/ui/tab-panel'), require('devextreme-angular/ui/tabs'), require('devextreme-angular/ui/tag-box'), require('devextreme-angular/ui/text-area'), require('devextreme-angular/ui/text-box'), require('devextreme-angular/ui/tile-view'), require('devextreme-angular/ui/toast'), require('devextreme-angular/ui/toolbar'), require('devextreme-angular/ui/tooltip'), require('devextreme-angular/ui/tree-list'), require('devextreme-angular/ui/tree-map'), require('devextreme-angular/ui/tree-view'), require('devextreme-angular/ui/validation-group'), require('devextreme-angular/ui/validation-summary'), require('devextreme-angular/ui/validator'), require('devextreme-angular/ui/vector-map')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular', ['exports', 'devextreme-angular/core', '@angular/core', 'devextreme-angular/ui/accordion', 'devextreme-angular/ui/action-sheet', 'devextreme-angular/ui/autocomplete', 'devextreme-angular/ui/bar-gauge', 'devextreme-angular/ui/box', 'devextreme-angular/ui/bullet', 'devextreme-angular/ui/button', 'devextreme-angular/ui/button-group', 'devextreme-angular/ui/calendar', 'devextreme-angular/ui/chart', 'devextreme-angular/ui/check-box', 'devextreme-angular/ui/circular-gauge', 'devextreme-angular/ui/color-box', 'devextreme-angular/ui/context-menu', 'devextreme-angular/ui/data-grid', 'devextreme-angular/ui/date-box', 'devextreme-angular/ui/defer-rendering', 'devextreme-angular/ui/drawer', 'devextreme-angular/ui/drop-down-box', 'devextreme-angular/ui/drop-down-button', 'devextreme-angular/ui/file-uploader', 'devextreme-angular/ui/filter-builder', 'devextreme-angular/ui/form', 'devextreme-angular/ui/funnel', 'devextreme-angular/ui/gallery', 'devextreme-angular/ui/html-editor', 'devextreme-angular/ui/linear-gauge', 'devextreme-angular/ui/list', 'devextreme-angular/ui/load-indicator', 'devextreme-angular/ui/load-panel', 'devextreme-angular/ui/lookup', 'devextreme-angular/ui/map', 'devextreme-angular/ui/menu', 'devextreme-angular/ui/multi-view', 'devextreme-angular/ui/nav-bar', 'devextreme-angular/ui/number-box', 'devextreme-angular/ui/pie-chart', 'devextreme-angular/ui/pivot-grid', 'devextreme-angular/ui/pivot-grid-field-chooser', 'devextreme-angular/ui/polar-chart', 'devextreme-angular/ui/popover', 'devextreme-angular/ui/popup', 'devextreme-angular/ui/progress-bar', 'devextreme-angular/ui/radio-group', 'devextreme-angular/ui/range-selector', 'devextreme-angular/ui/range-slider', 'devextreme-angular/ui/recurrence-editor', 'devextreme-angular/ui/resizable', 'devextreme-angular/ui/responsive-box', 'devextreme-angular/ui/sankey', 'devextreme-angular/ui/scheduler', 'devextreme-angular/ui/scroll-view', 'devextreme-angular/ui/select-box', 'devextreme-angular/ui/slide-out', 'devextreme-angular/ui/slide-out-view', 'devextreme-angular/ui/slider', 'devextreme-angular/ui/sparkline', 'devextreme-angular/ui/speed-dial-action', 'devextreme-angular/ui/switch', 'devextreme-angular/ui/tab-panel', 'devextreme-angular/ui/tabs', 'devextreme-angular/ui/tag-box', 'devextreme-angular/ui/text-area', 'devextreme-angular/ui/text-box', 'devextreme-angular/ui/tile-view', 'devextreme-angular/ui/toast', 'devextreme-angular/ui/toolbar', 'devextreme-angular/ui/tooltip', 'devextreme-angular/ui/tree-list', 'devextreme-angular/ui/tree-map', 'devextreme-angular/ui/tree-view', 'devextreme-angular/ui/validation-group', 'devextreme-angular/ui/validation-summary', 'devextreme-angular/ui/validator', 'devextreme-angular/ui/vector-map'], factory) :
    (global = global || self, factory(global['devextreme-angular'] = {}, global['devextreme-angular'].core, global.ng.core, global['devextreme-angular'].ui.accordion, global['devextreme-angular'].ui['action-sheet'], global['devextreme-angular'].ui.autocomplete, global['devextreme-angular'].ui['bar-gauge'], global['devextreme-angular'].ui.box, global['devextreme-angular'].ui.bullet, global['devextreme-angular'].ui.button, global['devextreme-angular'].ui['button-group'], global['devextreme-angular'].ui.calendar, global['devextreme-angular'].ui.chart, global['devextreme-angular'].ui['check-box'], global['devextreme-angular'].ui['circular-gauge'], global['devextreme-angular'].ui['color-box'], global['devextreme-angular'].ui['context-menu'], global['devextreme-angular'].ui['data-grid'], global['devextreme-angular'].ui['date-box'], global['devextreme-angular'].ui['defer-rendering'], global['devextreme-angular'].ui.drawer, global['devextreme-angular'].ui['drop-down-box'], global['devextreme-angular'].ui['drop-down-button'], global['devextreme-angular'].ui['file-uploader'], global['devextreme-angular'].ui['filter-builder'], global['devextreme-angular'].ui.form, global['devextreme-angular'].ui.funnel, global['devextreme-angular'].ui.gallery, global['devextreme-angular'].ui['html-editor'], global['devextreme-angular'].ui['linear-gauge'], global['devextreme-angular'].ui.list, global['devextreme-angular'].ui['load-indicator'], global['devextreme-angular'].ui['load-panel'], global['devextreme-angular'].ui.lookup, global['devextreme-angular'].ui.map, global['devextreme-angular'].ui.menu, global['devextreme-angular'].ui['multi-view'], global['devextreme-angular'].ui['nav-bar'], global['devextreme-angular'].ui['number-box'], global['devextreme-angular'].ui['pie-chart'], global['devextreme-angular'].ui['pivot-grid'], global['devextreme-angular'].ui['pivot-grid-field-chooser'], global['devextreme-angular'].ui['polar-chart'], global['devextreme-angular'].ui.popover, global['devextreme-angular'].ui.popup, global['devextreme-angular'].ui['progress-bar'], global['devextreme-angular'].ui['radio-group'], global['devextreme-angular'].ui['range-selector'], global['devextreme-angular'].ui['range-slider'], global['devextreme-angular'].ui['recurrence-editor'], global['devextreme-angular'].ui.resizable, global['devextreme-angular'].ui['responsive-box'], global['devextreme-angular'].ui.sankey, global['devextreme-angular'].ui.scheduler, global['devextreme-angular'].ui['scroll-view'], global['devextreme-angular'].ui['select-box'], global['devextreme-angular'].ui['slide-out'], global['devextreme-angular'].ui['slide-out-view'], global['devextreme-angular'].ui.slider, global['devextreme-angular'].ui.sparkline, global['devextreme-angular'].ui['speed-dial-action'], global['devextreme-angular'].ui.switch, global['devextreme-angular'].ui['tab-panel'], global['devextreme-angular'].ui.tabs, global['devextreme-angular'].ui['tag-box'], global['devextreme-angular'].ui['text-area'], global['devextreme-angular'].ui['text-box'], global['devextreme-angular'].ui['tile-view'], global['devextreme-angular'].ui.toast, global['devextreme-angular'].ui.toolbar, global['devextreme-angular'].ui.tooltip, global['devextreme-angular'].ui['tree-list'], global['devextreme-angular'].ui['tree-map'], global['devextreme-angular'].ui['tree-view'], global['devextreme-angular'].ui['validation-group'], global['devextreme-angular'].ui['validation-summary'], global['devextreme-angular'].ui.validator, global['devextreme-angular'].ui['vector-map']));
}(this, function (exports, core, core$1, accordion, actionSheet, autocomplete, barGauge, box, bullet, button, buttonGroup, calendar, chart, checkBox, circularGauge, colorBox, contextMenu, dataGrid, dateBox, deferRendering, drawer, dropDownBox, dropDownButton, fileUploader, filterBuilder, form, funnel, gallery, htmlEditor, linearGauge, list, loadIndicator, loadPanel, lookup, map, menu, multiView, navBar, numberBox, pieChart, pivotGrid, pivotGridFieldChooser, polarChart, popover, popup, progressBar, radioGroup, rangeSelector, rangeSlider, recurrenceEditor, resizable, responsiveBox, sankey, scheduler, scrollView, selectBox, slideOut, slideOutView, slider, sparkline, speedDialAction, _switch, tabPanel, tabs, tagBox, textArea, textBox, tileView, toast, toolbar, tooltip, treeList, treeMap, treeView, validationGroup, validationSummary, validator, vectorMap) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
    var DevExtremeModule = /** @class */ (function () {
        function DevExtremeModule() {
        }
        DevExtremeModule = __decorate([
            core$1.NgModule({
                imports: [
                    accordion.DxAccordionModule,
                    actionSheet.DxActionSheetModule,
                    autocomplete.DxAutocompleteModule,
                    barGauge.DxBarGaugeModule,
                    box.DxBoxModule,
                    bullet.DxBulletModule,
                    button.DxButtonModule,
                    buttonGroup.DxButtonGroupModule,
                    calendar.DxCalendarModule,
                    chart.DxChartModule,
                    checkBox.DxCheckBoxModule,
                    circularGauge.DxCircularGaugeModule,
                    colorBox.DxColorBoxModule,
                    contextMenu.DxContextMenuModule,
                    dataGrid.DxDataGridModule,
                    dateBox.DxDateBoxModule,
                    deferRendering.DxDeferRenderingModule,
                    drawer.DxDrawerModule,
                    dropDownBox.DxDropDownBoxModule,
                    dropDownButton.DxDropDownButtonModule,
                    fileUploader.DxFileUploaderModule,
                    filterBuilder.DxFilterBuilderModule,
                    form.DxFormModule,
                    funnel.DxFunnelModule,
                    gallery.DxGalleryModule,
                    htmlEditor.DxHtmlEditorModule,
                    linearGauge.DxLinearGaugeModule,
                    list.DxListModule,
                    loadIndicator.DxLoadIndicatorModule,
                    loadPanel.DxLoadPanelModule,
                    lookup.DxLookupModule,
                    map.DxMapModule,
                    menu.DxMenuModule,
                    multiView.DxMultiViewModule,
                    navBar.DxNavBarModule,
                    numberBox.DxNumberBoxModule,
                    pieChart.DxPieChartModule,
                    pivotGrid.DxPivotGridModule,
                    pivotGridFieldChooser.DxPivotGridFieldChooserModule,
                    polarChart.DxPolarChartModule,
                    popover.DxPopoverModule,
                    popup.DxPopupModule,
                    progressBar.DxProgressBarModule,
                    radioGroup.DxRadioGroupModule,
                    rangeSelector.DxRangeSelectorModule,
                    rangeSlider.DxRangeSliderModule,
                    recurrenceEditor.DxRecurrenceEditorModule,
                    resizable.DxResizableModule,
                    responsiveBox.DxResponsiveBoxModule,
                    sankey.DxSankeyModule,
                    scheduler.DxSchedulerModule,
                    scrollView.DxScrollViewModule,
                    selectBox.DxSelectBoxModule,
                    slideOut.DxSlideOutModule,
                    slideOutView.DxSlideOutViewModule,
                    slider.DxSliderModule,
                    sparkline.DxSparklineModule,
                    speedDialAction.DxSpeedDialActionModule,
                    _switch.DxSwitchModule,
                    tabPanel.DxTabPanelModule,
                    tabs.DxTabsModule,
                    tagBox.DxTagBoxModule,
                    textArea.DxTextAreaModule,
                    textBox.DxTextBoxModule,
                    tileView.DxTileViewModule,
                    toast.DxToastModule,
                    toolbar.DxToolbarModule,
                    tooltip.DxTooltipModule,
                    treeList.DxTreeListModule,
                    treeMap.DxTreeMapModule,
                    treeView.DxTreeViewModule,
                    validationGroup.DxValidationGroupModule,
                    validationSummary.DxValidationSummaryModule,
                    validator.DxValidatorModule,
                    vectorMap.DxVectorMapModule,
                    core.DxTemplateModule
                ],
                exports: [
                    accordion.DxAccordionModule,
                    actionSheet.DxActionSheetModule,
                    autocomplete.DxAutocompleteModule,
                    barGauge.DxBarGaugeModule,
                    box.DxBoxModule,
                    bullet.DxBulletModule,
                    button.DxButtonModule,
                    buttonGroup.DxButtonGroupModule,
                    calendar.DxCalendarModule,
                    chart.DxChartModule,
                    checkBox.DxCheckBoxModule,
                    circularGauge.DxCircularGaugeModule,
                    colorBox.DxColorBoxModule,
                    contextMenu.DxContextMenuModule,
                    dataGrid.DxDataGridModule,
                    dateBox.DxDateBoxModule,
                    deferRendering.DxDeferRenderingModule,
                    drawer.DxDrawerModule,
                    dropDownBox.DxDropDownBoxModule,
                    dropDownButton.DxDropDownButtonModule,
                    fileUploader.DxFileUploaderModule,
                    filterBuilder.DxFilterBuilderModule,
                    form.DxFormModule,
                    funnel.DxFunnelModule,
                    gallery.DxGalleryModule,
                    htmlEditor.DxHtmlEditorModule,
                    linearGauge.DxLinearGaugeModule,
                    list.DxListModule,
                    loadIndicator.DxLoadIndicatorModule,
                    loadPanel.DxLoadPanelModule,
                    lookup.DxLookupModule,
                    map.DxMapModule,
                    menu.DxMenuModule,
                    multiView.DxMultiViewModule,
                    navBar.DxNavBarModule,
                    numberBox.DxNumberBoxModule,
                    pieChart.DxPieChartModule,
                    pivotGrid.DxPivotGridModule,
                    pivotGridFieldChooser.DxPivotGridFieldChooserModule,
                    polarChart.DxPolarChartModule,
                    popover.DxPopoverModule,
                    popup.DxPopupModule,
                    progressBar.DxProgressBarModule,
                    radioGroup.DxRadioGroupModule,
                    rangeSelector.DxRangeSelectorModule,
                    rangeSlider.DxRangeSliderModule,
                    recurrenceEditor.DxRecurrenceEditorModule,
                    resizable.DxResizableModule,
                    responsiveBox.DxResponsiveBoxModule,
                    sankey.DxSankeyModule,
                    scheduler.DxSchedulerModule,
                    scrollView.DxScrollViewModule,
                    selectBox.DxSelectBoxModule,
                    slideOut.DxSlideOutModule,
                    slideOutView.DxSlideOutViewModule,
                    slider.DxSliderModule,
                    sparkline.DxSparklineModule,
                    speedDialAction.DxSpeedDialActionModule,
                    _switch.DxSwitchModule,
                    tabPanel.DxTabPanelModule,
                    tabs.DxTabsModule,
                    tagBox.DxTagBoxModule,
                    textArea.DxTextAreaModule,
                    textBox.DxTextBoxModule,
                    tileView.DxTileViewModule,
                    toast.DxToastModule,
                    toolbar.DxToolbarModule,
                    tooltip.DxTooltipModule,
                    treeList.DxTreeListModule,
                    treeMap.DxTreeMapModule,
                    treeView.DxTreeViewModule,
                    validationGroup.DxValidationGroupModule,
                    validationSummary.DxValidationSummaryModule,
                    validator.DxValidatorModule,
                    vectorMap.DxVectorMapModule,
                    core.DxTemplateModule
                ]
            })
        ], DevExtremeModule);
        return DevExtremeModule;
    }());

    Object.keys(core).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return core[k];
            }
        });
    });
    Object.keys(accordion).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return accordion[k];
            }
        });
    });
    Object.keys(actionSheet).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return actionSheet[k];
            }
        });
    });
    Object.keys(autocomplete).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return autocomplete[k];
            }
        });
    });
    Object.keys(barGauge).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return barGauge[k];
            }
        });
    });
    Object.keys(box).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return box[k];
            }
        });
    });
    Object.keys(bullet).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return bullet[k];
            }
        });
    });
    Object.keys(button).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return button[k];
            }
        });
    });
    Object.keys(buttonGroup).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return buttonGroup[k];
            }
        });
    });
    Object.keys(calendar).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return calendar[k];
            }
        });
    });
    Object.keys(chart).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return chart[k];
            }
        });
    });
    Object.keys(checkBox).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return checkBox[k];
            }
        });
    });
    Object.keys(circularGauge).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return circularGauge[k];
            }
        });
    });
    Object.keys(colorBox).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return colorBox[k];
            }
        });
    });
    Object.keys(contextMenu).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return contextMenu[k];
            }
        });
    });
    Object.keys(dataGrid).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return dataGrid[k];
            }
        });
    });
    Object.keys(dateBox).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return dateBox[k];
            }
        });
    });
    Object.keys(deferRendering).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return deferRendering[k];
            }
        });
    });
    Object.keys(drawer).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return drawer[k];
            }
        });
    });
    Object.keys(dropDownBox).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return dropDownBox[k];
            }
        });
    });
    Object.keys(dropDownButton).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return dropDownButton[k];
            }
        });
    });
    Object.keys(fileUploader).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return fileUploader[k];
            }
        });
    });
    Object.keys(filterBuilder).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return filterBuilder[k];
            }
        });
    });
    Object.keys(form).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return form[k];
            }
        });
    });
    Object.keys(funnel).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return funnel[k];
            }
        });
    });
    Object.keys(gallery).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return gallery[k];
            }
        });
    });
    Object.keys(htmlEditor).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return htmlEditor[k];
            }
        });
    });
    Object.keys(linearGauge).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return linearGauge[k];
            }
        });
    });
    Object.keys(list).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return list[k];
            }
        });
    });
    Object.keys(loadIndicator).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return loadIndicator[k];
            }
        });
    });
    Object.keys(loadPanel).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return loadPanel[k];
            }
        });
    });
    Object.keys(lookup).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return lookup[k];
            }
        });
    });
    Object.keys(map).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return map[k];
            }
        });
    });
    Object.keys(menu).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return menu[k];
            }
        });
    });
    Object.keys(multiView).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return multiView[k];
            }
        });
    });
    Object.keys(navBar).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return navBar[k];
            }
        });
    });
    Object.keys(numberBox).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return numberBox[k];
            }
        });
    });
    Object.keys(pieChart).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return pieChart[k];
            }
        });
    });
    Object.keys(pivotGrid).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return pivotGrid[k];
            }
        });
    });
    Object.keys(pivotGridFieldChooser).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return pivotGridFieldChooser[k];
            }
        });
    });
    Object.keys(polarChart).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return polarChart[k];
            }
        });
    });
    Object.keys(popover).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return popover[k];
            }
        });
    });
    Object.keys(popup).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return popup[k];
            }
        });
    });
    Object.keys(progressBar).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return progressBar[k];
            }
        });
    });
    Object.keys(radioGroup).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return radioGroup[k];
            }
        });
    });
    Object.keys(rangeSelector).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return rangeSelector[k];
            }
        });
    });
    Object.keys(rangeSlider).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return rangeSlider[k];
            }
        });
    });
    Object.keys(recurrenceEditor).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return recurrenceEditor[k];
            }
        });
    });
    Object.keys(resizable).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return resizable[k];
            }
        });
    });
    Object.keys(responsiveBox).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return responsiveBox[k];
            }
        });
    });
    Object.keys(sankey).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return sankey[k];
            }
        });
    });
    Object.keys(scheduler).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return scheduler[k];
            }
        });
    });
    Object.keys(scrollView).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return scrollView[k];
            }
        });
    });
    Object.keys(selectBox).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return selectBox[k];
            }
        });
    });
    Object.keys(slideOut).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return slideOut[k];
            }
        });
    });
    Object.keys(slideOutView).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return slideOutView[k];
            }
        });
    });
    Object.keys(slider).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return slider[k];
            }
        });
    });
    Object.keys(sparkline).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return sparkline[k];
            }
        });
    });
    Object.keys(speedDialAction).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return speedDialAction[k];
            }
        });
    });
    Object.keys(_switch).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return _switch[k];
            }
        });
    });
    Object.keys(tabPanel).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return tabPanel[k];
            }
        });
    });
    Object.keys(tabs).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return tabs[k];
            }
        });
    });
    Object.keys(tagBox).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return tagBox[k];
            }
        });
    });
    Object.keys(textArea).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return textArea[k];
            }
        });
    });
    Object.keys(textBox).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return textBox[k];
            }
        });
    });
    Object.keys(tileView).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return tileView[k];
            }
        });
    });
    Object.keys(toast).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return toast[k];
            }
        });
    });
    Object.keys(toolbar).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return toolbar[k];
            }
        });
    });
    Object.keys(tooltip).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return tooltip[k];
            }
        });
    });
    Object.keys(treeList).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return treeList[k];
            }
        });
    });
    Object.keys(treeMap).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return treeMap[k];
            }
        });
    });
    Object.keys(treeView).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return treeView[k];
            }
        });
    });
    Object.keys(validationGroup).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return validationGroup[k];
            }
        });
    });
    Object.keys(validationSummary).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return validationSummary[k];
            }
        });
    });
    Object.keys(validator).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return validator[k];
            }
        });
    });
    Object.keys(vectorMap).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return vectorMap[k];
            }
        });
    });
    exports.DevExtremeModule = DevExtremeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular.umd.js.map
