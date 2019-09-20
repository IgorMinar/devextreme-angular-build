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
import { NestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoChartCommonAnnotationConfig extends NestedOption {
    allowDragging: boolean;
    argument: Date | number | string;
    arrowLength: number;
    arrowWidth: number;
    axis: string;
    border: {
        color?: string;
        cornerRadius?: number;
        dashStyle?: string;
        opacity?: number;
        visible?: boolean;
        width?: number;
    };
    color: string;
    customizeTooltip: Function;
    description: string;
    font: DevExpress.viz.Font;
    height: number;
    image: string | {
        height?: number;
        url?: string;
        width?: number;
    };
    offsetX: number;
    offsetY: number;
    opacity: number;
    paddingLeftRight: number;
    paddingTopBottom: number;
    series: string;
    shadow: {
        blur?: number;
        color?: string;
        offsetX?: number;
        offsetY?: number;
        opacity?: number;
    };
    text: string;
    textOverflow: string;
    tooltipEnabled: boolean;
    type: string;
    value: Date | number | string;
    width: number;
    wordWrap: string;
    x: number;
    y: number;
}
