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
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxLinearGauge from 'devextreme/viz/linear_gauge';
import { DxComponent, DxTemplateHost, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
/**
 * The LinearGauge is a widget that indicates values on a linear numeric scale.
 */
export declare class DxLinearGaugeComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxLinearGauge;
    /**
     * Specifies animation options.
     */
    animation: {
        duration?: number;
        easing?: string;
        enabled?: boolean;
    };
    /**
     * Specifies the color of the parent page element.
     */
    containerBackgroundColor: string;
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
     * Specifies the options required to set the geometry of the LinearGauge widget.
     */
    geometry: {
        orientation?: string;
    };
    /**
     * Configures the loading indicator.
     */
    loadingIndicator: {
        backgroundColor?: string;
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
     * Specifies gauge range container options.
     */
    rangeContainer: {
        backgroundColor?: string;
        horizontalOrientation?: string;
        offset?: number;
        palette?: string | Array<string>;
        paletteExtensionMode?: string;
        ranges?: Array<any | {
            color?: string;
            endValue?: number;
            startValue?: number;
        }>;
        verticalOrientation?: string;
        width?: number | {
            end?: number;
            start?: number;
        };
    };
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    redrawOnResize: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies the gauge's scale options.
     */
    scale: {
        allowDecimals?: boolean;
        customMinorTicks?: Array<number>;
        customTicks?: Array<number>;
        endValue?: number;
        horizontalOrientation?: string;
        label?: {
            customizeText?: Function;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromTick?: number;
            overlappingBehavior?: string;
            useRangeColors?: boolean;
            visible?: boolean;
        };
        minorTick?: {
            color?: string;
            length?: number;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTickInterval?: number;
        scaleDivisionFactor?: number;
        startValue?: number;
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        tickInterval?: number;
        verticalOrientation?: string;
    };
    /**
     * Specifies the widget's size in pixels.
     */
    size: {
        height?: number;
        width?: number;
    };
    /**
     * Specifies the appearance options of subvalue indicators.
     */
    subvalueIndicator: any;
    /**
     * Specifies a set of subvalues to be designated by the subvalue indicators.
     */
    subvalues: Array<number>;
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
     * Configures tooltips.
     */
    tooltip: {
        arrowLength?: number;
        border?: {
            color?: string;
            dashStyle?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        container?: Element | JQuery;
        cornerRadius?: number;
        customizeTooltip?: Function;
        enabled?: boolean;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        opacity?: number;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        shadow?: {
            blur?: number;
            color?: string;
            offsetX?: number;
            offsetY?: number;
            opacity?: number;
        };
        zIndex?: number;
    };
    /**
     * Specifies the main value on a gauge.
     */
    value: number;
    /**
     * Specifies the appearance options of the value indicator.
     */
    valueIndicator: any;
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
     * A function that is executed when a tooltip becomes hidden.
     */
    onTooltipHidden: EventEmitter<any>;
    /**
     * A function that is executed when a tooltip appears.
     */
    onTooltipShown: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    animationChange: EventEmitter<{
        duration?: number;
        easing?: string;
        enabled?: boolean;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    containerBackgroundColorChange: EventEmitter<string>;
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
    geometryChange: EventEmitter<{
        orientation?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    loadingIndicatorChange: EventEmitter<{
        backgroundColor?: string;
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
    rangeContainerChange: EventEmitter<{
        backgroundColor?: string;
        horizontalOrientation?: string;
        offset?: number;
        palette?: string | Array<string>;
        paletteExtensionMode?: string;
        ranges?: Array<any | {
            color?: string;
            endValue?: number;
            startValue?: number;
        }>;
        verticalOrientation?: string;
        width?: number | {
            end?: number;
            start?: number;
        };
    }>;
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
        allowDecimals?: boolean;
        customMinorTicks?: Array<number>;
        customTicks?: Array<number>;
        endValue?: number;
        horizontalOrientation?: string;
        label?: {
            customizeText?: Function;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromTick?: number;
            overlappingBehavior?: string;
            useRangeColors?: boolean;
            visible?: boolean;
        };
        minorTick?: {
            color?: string;
            length?: number;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTickInterval?: number;
        scaleDivisionFactor?: number;
        startValue?: number;
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        tickInterval?: number;
        verticalOrientation?: string;
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
    subvalueIndicatorChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    subvaluesChange: EventEmitter<Array<number>>;
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
    tooltipChange: EventEmitter<{
        arrowLength?: number;
        border?: {
            color?: string;
            dashStyle?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        container?: Element | JQuery;
        cornerRadius?: number;
        customizeTooltip?: Function;
        enabled?: boolean;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        opacity?: number;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        shadow?: {
            blur?: number;
            color?: string;
            offsetX?: number;
            offsetY?: number;
            opacity?: number;
        };
        zIndex?: number;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    valueChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    valueIndicatorChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxLinearGauge;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxLinearGaugeModule {
}
