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
import DxSparkline from 'devextreme/viz/sparkline';
import { DxComponent, DxTemplateHost, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
/**
 * The Sparkline widget is a compact chart that contains only one series. Owing to their size, sparklines occupy very little space and can be easily collected in a table or embedded straight in text.
 */
export declare class DxSparklineComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxSparkline;
    /**
     * Specifies the data source field that provides arguments for a sparkline.
     */
    argumentField: string;
    /**
     * Sets a color for the bars indicating negative values. Available for a sparkline of the bar type only.
     */
    barNegativeColor: string;
    /**
     * Sets a color for the bars indicating positive values. Available for a sparkline of the bar type only.
     */
    barPositiveColor: string;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    /**
     * Specifies whether the widget responds to the user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Sets a color for the boundary of both the first and last points on a sparkline.
     */
    firstLastColor: string;
    /**
     * Specifies whether the sparkline should ignore null data points.
     */
    ignoreEmptyPoints: boolean;
    /**
     * Sets a color for a line on a sparkline. Available for the sparklines of the line- and area-like types.
     */
    lineColor: string;
    /**
     * Specifies a width for a line on a sparkline. Available for the sparklines of the line- and area-like types.
     */
    lineWidth: number;
    /**
     * Sets a color for the bars indicating the values that are less than the winloss threshold. Available for a sparkline of the winloss type only.
     */
    lossColor: string;
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
     * Sets a color for the boundary of the maximum point on a sparkline.
     */
    maxColor: string;
    /**
     * Specifies the maximum value of the sparkline's value axis.
     */
    maxValue: number;
    /**
     * Sets a color for the boundary of the minimum point on a sparkline.
     */
    minColor: string;
    /**
     * Specifies the minimum value of the sparkline value axis.
     */
    minValue: number;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Sets a color for points on a sparkline. Available for the sparklines of the line- and area-like types.
     */
    pointColor: string;
    /**
     * Specifies the diameter of sparkline points in pixels. Available for the sparklines of line- and area-like types.
     */
    pointSize: number;
    /**
     * Specifies a symbol to use as a point marker on a sparkline. Available for the sparklines of the line- and area-like types.
     */
    pointSymbol: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether or not to indicate both the first and last values on a sparkline.
     */
    showFirstLast: boolean;
    /**
     * Specifies whether or not to indicate both the minimum and maximum values on a sparkline.
     */
    showMinMax: boolean;
    /**
     * Specifies the widget's size in pixels.
     */
    size: {
        height?: number;
        width?: number;
    };
    /**
     * Sets the name of the theme the widget uses.
     */
    theme: string;
    /**
     * Configures the tooltip.
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
     * Determines the type of a sparkline.
     */
    type: string;
    /**
     * Specifies the data source field that provides values for a sparkline.
     */
    valueField: string;
    /**
     * Sets a color for the bars indicating the values greater than a winloss threshold. Available for a sparkline of the winloss type only.
     */
    winColor: string;
    /**
     * Specifies a value that serves as a threshold for the sparkline of the winloss type.
     */
    winlossThreshold: number;
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
    argumentFieldChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    barNegativeColorChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    barPositiveColorChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
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
    firstLastColorChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    ignoreEmptyPointsChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    lineColorChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    lineWidthChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    lossColorChange: EventEmitter<string>;
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
    maxColorChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    maxValueChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    minColorChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    minValueChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    pointColorChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    pointSizeChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    pointSymbolChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showFirstLastChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showMinMaxChange: EventEmitter<boolean>;
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
    themeChange: EventEmitter<string>;
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
    typeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    valueFieldChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    winColorChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    winlossThresholdChange: EventEmitter<number>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxSparkline;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxSparklineModule {
}
