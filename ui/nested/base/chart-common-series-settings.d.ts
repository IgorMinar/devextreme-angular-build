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
import { NestedOption } from 'devextreme-angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoChartCommonSeriesSettings extends NestedOption {
    aggregation: {
        calculate?: Function;
        enabled?: boolean;
        method?: string;
    };
    area: any;
    argumentField: string;
    axis: string;
    bar: any;
    barOverlapGroup: string;
    barPadding: number;
    barWidth: number;
    border: {
        color?: string;
        dashStyle?: string;
        visible?: boolean;
        width?: number;
    };
    bubble: any;
    candlestick: any;
    closeValueField: string;
    color: string;
    cornerRadius: number;
    dashStyle: string;
    fullstackedarea: any;
    fullstackedbar: any;
    fullstackedline: any;
    fullstackedspline: any;
    fullstackedsplinearea: any;
    highValueField: string;
    hoverMode: string;
    hoverStyle: {
        border?: {
            color?: string;
            dashStyle?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        dashStyle?: string;
        hatching?: {
            direction?: string;
            opacity?: number;
            step?: number;
            width?: number;
        };
        width?: number;
    } | {
        border?: {
            color?: string;
            dashStyle?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        hatching?: {
            direction?: string;
            opacity?: number;
            step?: number;
            width?: number;
        };
    };
    ignoreEmptyPoints: boolean;
    innerColor: string;
    label: {
        alignment?: string;
        argumentFormat?: DevExpress.ui.format | string;
        backgroundColor?: string;
        border?: {
            color?: string;
            dashStyle?: string;
            visible?: boolean;
            width?: number;
        };
        connector?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        horizontalOffset?: number;
        position?: string;
        rotationAngle?: number;
        showForZeroValues?: boolean;
        verticalOffset?: number;
        visible?: boolean;
    } | {
        argumentFormat?: DevExpress.ui.format | string;
        backgroundColor?: string;
        border?: {
            color?: string;
            dashStyle?: string;
            visible?: boolean;
            width?: number;
        };
        connector?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        position?: string;
        radialOffset?: number;
        rotationAngle?: number;
        textOverflow?: string;
        visible?: boolean;
        wordWrap?: string;
    } | {
        argumentFormat?: DevExpress.ui.format | string;
        backgroundColor?: string;
        border?: {
            color?: string;
            dashStyle?: string;
            visible?: boolean;
            width?: number;
        };
        connector?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        position?: string;
        rotationAngle?: number;
        showForZeroValues?: boolean;
        visible?: boolean;
    };
    line: any;
    lowValueField: string;
    maxLabelCount: number;
    minBarSize: number;
    opacity: number;
    openValueField: string;
    pane: string;
    point: {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        hoverMode?: string;
        hoverStyle?: {
            border?: {
                color?: string;
                visible?: boolean;
                width?: number;
            };
            color?: string;
            size?: number;
        };
        image?: string | {
            height?: number | {
                rangeMaxPoint?: number;
                rangeMinPoint?: number;
            };
            url?: string | {
                rangeMaxPoint?: string;
                rangeMinPoint?: string;
            };
            width?: number | {
                rangeMaxPoint?: number;
                rangeMinPoint?: number;
            };
        };
        selectionMode?: string;
        selectionStyle?: {
            border?: {
                color?: string;
                visible?: boolean;
                width?: number;
            };
            color?: string;
            size?: number;
        };
        size?: number;
        symbol?: string;
        visible?: boolean;
    } | {
        border?: {
            color?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        hoverMode?: string;
        hoverStyle?: {
            border?: {
                color?: string;
                visible?: boolean;
                width?: number;
            };
            color?: string;
            size?: number;
        };
        image?: string | {
            height?: number;
            url?: string;
            width?: number;
        };
        selectionMode?: string;
        selectionStyle?: {
            border?: {
                color?: string;
                visible?: boolean;
                width?: number;
            };
            color?: string;
            size?: number;
        };
        size?: number;
        symbol?: string;
        visible?: boolean;
    };
    rangearea: any;
    rangebar: any;
    rangeValue1Field: string;
    rangeValue2Field: string;
    reduction: {
        color?: string;
        level?: string;
    };
    scatter: any;
    selectionMode: string;
    selectionStyle: {
        border?: {
            color?: string;
            dashStyle?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        dashStyle?: string;
        hatching?: {
            direction?: string;
            opacity?: number;
            step?: number;
            width?: number;
        };
        width?: number;
    } | {
        border?: {
            color?: string;
            dashStyle?: string;
            visible?: boolean;
            width?: number;
        };
        color?: string;
        hatching?: {
            direction?: string;
            opacity?: number;
            step?: number;
            width?: number;
        };
    };
    showInLegend: boolean;
    sizeField: string;
    spline: any;
    splinearea: any;
    stack: string;
    stackedarea: any;
    stackedbar: any;
    stackedline: any;
    stackedspline: any;
    stackedsplinearea: any;
    steparea: any;
    stepline: any;
    stock: any;
    tagField: string;
    type: string;
    valueErrorBar: {
        color?: string;
        displayMode?: string;
        edgeLength?: number;
        highValueField?: string;
        lineWidth?: number;
        lowValueField?: string;
        opacity?: number;
        type?: string;
        value?: number;
    };
    valueField: string;
    visible: boolean;
    width: number;
    argumentType: string;
    minSegmentSize: number;
    smallValuesGrouping: {
        groupName?: string;
        mode?: string;
        threshold?: number;
        topCount?: number;
    };
    closed: boolean;
}
