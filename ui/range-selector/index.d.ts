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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnInit, AfterViewInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxRangeSelector from 'devextreme/viz/range_selector';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent, DxTemplateHost, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
/**
 * The RangeSelector is a widget that allows a user to select a range of values on a scale.
 */
export declare class DxRangeSelectorComponent extends DxComponent implements OnDestroy, OnInit, AfterViewInit, ControlValueAccessor, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxRangeSelector;
    validator: DxValidatorComponent;
    /**
     * Specifies the options for the range selector's background.
     */
    background: {
        color?: string;
        image?: {
            location?: string;
            url?: string;
        };
        visible?: boolean;
    };
    /**
     * Specifies the RangeSelector's behavior options.
     */
    behavior: {
        allowSlidersSwap?: boolean;
        animationEnabled?: boolean;
        callValueChanged?: string;
        manualRangeSelectionEnabled?: boolean;
        moveSelectedRangeByClick?: boolean;
        snapToTicks?: boolean;
    };
    /**
     * Specifies the options required to display a chart as the range selector's background.
     */
    chart: {
        barGroupPadding?: number;
        barGroupWidth?: number;
        barWidth?: number;
        bottomIndent?: number;
        commonSeriesSettings?: any;
        dataPrepareSettings?: {
            checkTypeForAllData?: boolean;
            convertToAxisDataType?: boolean;
            sortingMethod?: boolean | Function;
        };
        equalBarWidth?: boolean;
        maxBubbleSize?: number;
        minBubbleSize?: number;
        negativesAsZeroes?: boolean;
        palette?: string | Array<string>;
        paletteExtensionMode?: string;
        series?: any | Array<any>;
        seriesTemplate?: {
            customizeSeries?: Function;
            nameField?: string;
        };
        topIndent?: number;
        useAggregation?: boolean;
        valueAxis?: {
            inverted?: boolean;
            logarithmBase?: number;
            max?: number;
            min?: number;
            type?: string;
            valueType?: string;
        };
    };
    /**
     * Specifies the color of the parent page element.
     */
    containerBackgroundColor: string;
    /**
     * Specifies a data source for the scale values and for the chart at the background.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    /**
     * Specifies the data source field that provides data for the scale.
     */
    dataSourceField: string;
    /**
     * Specifies whether the widget responds to the user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Configures the exporting and printing features.
     */
    export: {
        backgroundColor?: string;
        enabled?: boolean;
        fileName?: string;
        formats?: Array<string>;
        margin?: number;
        printingEnabled?: boolean;
        proxyUrl?: string;
    };
    /**
     * Range selector's indent options.
     */
    indent: {
        left?: number;
        right?: number;
    };
    /**
     * Configures the loading indicator.
     */
    loadingIndicator: {
        backgroundColor?: string;
        enabled?: boolean;
        font?: DevExpress.viz.Font;
        show?: boolean;
        text?: string;
    };
    /**
     * Generates space around the widget.
     */
    margin: {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    };
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    redrawOnResize: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies options of the range selector's scale.
     */
    scale: {
        aggregationGroupWidth?: number;
        aggregationInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        allowDecimals?: boolean;
        breaks?: Array<DevExpress.viz.ScaleBreak>;
        breakStyle?: {
            color?: string;
            line?: string;
            width?: number;
        };
        categories?: Array<number | string | Date>;
        endOnTick?: boolean;
        endValue?: Date | number | string;
        holidays?: Array<Date | string | number>;
        label?: {
            customizeText?: Function;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            overlappingBehavior?: string;
            topIndent?: number;
            visible?: boolean;
        };
        logarithmBase?: number;
        marker?: {
            label?: {
                customizeText?: Function;
                format?: DevExpress.ui.format | string;
            };
            separatorHeight?: number;
            textLeftIndent?: number;
            textTopIndent?: number;
            topIndent?: number;
            visible?: boolean;
        };
        maxRange?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        minorTick?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTickCount?: number;
        minorTickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        minRange?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        placeholderHeight?: number;
        showCustomBoundaryTicks?: boolean;
        singleWorkdays?: Array<Date | string | number>;
        startValue?: Date | number | string;
        tick?: {
            color?: string;
            opacity?: number;
            width?: number;
        };
        tickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        type?: string;
        valueType?: string;
        workdaysOnly?: boolean;
        workWeek?: Array<number>;
    };
    /**
     * Specifies the color of the selected range.
     */
    selectedRangeColor: string;
    /**
     * Specifies how the selected range should behave when data is updated. Applies only when the RangeSelector is bound to a data source.
     */
    selectedRangeUpdateMode: string;
    /**
     * Specifies range selector shutter options.
     */
    shutter: {
        color?: string;
        opacity?: number;
    };
    /**
     * Specifies the widget's size in pixels.
     */
    size: {
        height?: number;
        width?: number;
    };
    /**
     * Specifies the appearance of the range selector's slider handles.
     */
    sliderHandle: {
        color?: string;
        opacity?: number;
        width?: number;
    };
    /**
     * Defines the options of the range selector slider markers.
     */
    sliderMarker: {
        color?: string;
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        invalidRangeColor?: string;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        placeholderHeight?: number;
        visible?: boolean;
    };
    /**
     * Sets the name of the theme the widget uses.
     */
    theme: string;
    /**
     * Configures the widget's title.
     */
    title: string | {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        placeholderSize?: number;
        subtitle?: string | {
            font?: DevExpress.viz.Font;
            offset?: number;
            text?: string;
            textOverflow?: string;
            wordWrap?: string;
        };
        text?: string;
        textOverflow?: string;
        verticalAlignment?: string;
        wordWrap?: string;
    };
    /**
     * The selected range (initial or current). Equals the entire scale when not set.
     */
    value: DevExpress.viz.VizRange | Array<number | string | Date>;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function that is executed when the widget's rendering has finished.
     */
    onDrawn: EventEmitter<any>;
    /**
     * A function that is executed after the widget is exported.
     */
    onExported: EventEmitter<any>;
    /**
     * A function that is executed before the widget is exported.
     */
    onExporting: EventEmitter<any>;
    /**
     * A function that is executed before a file with exported widget is saved to the user's local storage.
     */
    onFileSaving: EventEmitter<any>;
    /**
     * A function that is executed when an error or warning occurs.
     */
    onIncidentOccurred: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed after the widget's value is changed.
     */
    onValueChanged: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    backgroundChange: EventEmitter<{
        color?: string;
        image?: {
            location?: string;
            url?: string;
        };
        visible?: boolean;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    behaviorChange: EventEmitter<{
        allowSlidersSwap?: boolean;
        animationEnabled?: boolean;
        callValueChanged?: string;
        manualRangeSelectionEnabled?: boolean;
        moveSelectedRangeByClick?: boolean;
        snapToTicks?: boolean;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    chartChange: EventEmitter<{
        barGroupPadding?: number;
        barGroupWidth?: number;
        barWidth?: number;
        bottomIndent?: number;
        commonSeriesSettings?: any;
        dataPrepareSettings?: {
            checkTypeForAllData?: boolean;
            convertToAxisDataType?: boolean;
            sortingMethod?: boolean | Function;
        };
        equalBarWidth?: boolean;
        maxBubbleSize?: number;
        minBubbleSize?: number;
        negativesAsZeroes?: boolean;
        palette?: string | Array<string>;
        paletteExtensionMode?: string;
        series?: any | Array<any>;
        seriesTemplate?: {
            customizeSeries?: Function;
            nameField?: string;
        };
        topIndent?: number;
        useAggregation?: boolean;
        valueAxis?: {
            inverted?: boolean;
            logarithmBase?: number;
            max?: number;
            min?: number;
            type?: string;
            valueType?: string;
        };
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    containerBackgroundColorChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dataSourceFieldChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    exportChange: EventEmitter<{
        backgroundColor?: string;
        enabled?: boolean;
        fileName?: string;
        formats?: Array<string>;
        margin?: number;
        printingEnabled?: boolean;
        proxyUrl?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    indentChange: EventEmitter<{
        left?: number;
        right?: number;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    loadingIndicatorChange: EventEmitter<{
        backgroundColor?: string;
        enabled?: boolean;
        font?: DevExpress.viz.Font;
        show?: boolean;
        text?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    marginChange: EventEmitter<{
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    redrawOnResizeChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    scaleChange: EventEmitter<{
        aggregationGroupWidth?: number;
        aggregationInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        allowDecimals?: boolean;
        breaks?: Array<DevExpress.viz.ScaleBreak>;
        breakStyle?: {
            color?: string;
            line?: string;
            width?: number;
        };
        categories?: Array<number | string | Date>;
        endOnTick?: boolean;
        endValue?: Date | number | string;
        holidays?: Array<Date | string | number>;
        label?: {
            customizeText?: Function;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            overlappingBehavior?: string;
            topIndent?: number;
            visible?: boolean;
        };
        logarithmBase?: number;
        marker?: {
            label?: {
                customizeText?: Function;
                format?: DevExpress.ui.format | string;
            };
            separatorHeight?: number;
            textLeftIndent?: number;
            textTopIndent?: number;
            topIndent?: number;
            visible?: boolean;
        };
        maxRange?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        minorTick?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTickCount?: number;
        minorTickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        minRange?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        placeholderHeight?: number;
        showCustomBoundaryTicks?: boolean;
        singleWorkdays?: Array<Date | string | number>;
        startValue?: Date | number | string;
        tick?: {
            color?: string;
            opacity?: number;
            width?: number;
        };
        tickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        type?: string;
        valueType?: string;
        workdaysOnly?: boolean;
        workWeek?: Array<number>;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectedRangeColorChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectedRangeUpdateModeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    shutterChange: EventEmitter<{
        color?: string;
        opacity?: number;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    sizeChange: EventEmitter<{
        height?: number;
        width?: number;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    sliderHandleChange: EventEmitter<{
        color?: string;
        opacity?: number;
        width?: number;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    sliderMarkerChange: EventEmitter<{
        color?: string;
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        invalidRangeColor?: string;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        placeholderHeight?: number;
        visible?: boolean;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    themeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    titleChange: EventEmitter<string | {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        placeholderSize?: number;
        subtitle?: string | {
            font?: DevExpress.viz.Font;
            offset?: number;
            text?: string;
            textOverflow?: string;
            wordWrap?: string;
        };
        text?: string;
        textOverflow?: string;
        verticalAlignment?: string;
        wordWrap?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    valueChange: EventEmitter<DevExpress.viz.VizRange | Array<number | string | Date>>;
    onBlur: EventEmitter<any>;
    change(_: any): void;
    touched: (_: any) => void;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxRangeSelector;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    _createWidget(element: any): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export declare class DxRangeSelectorModule {
}
