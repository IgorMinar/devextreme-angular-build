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
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoLabelComponent extends NestedOption {
    connectorColor: string;
    connectorWidth: number;
    customizeText: Function;
    font: DevExpress.viz.Font;
    format: DevExpress.ui.format | string;
    indent: number;
    visible: boolean;
    horizontalAlignment: string;
    position: string;
    text: string;
    verticalAlignment: string;
    alignment: string;
    customizeHint: Function;
    displayMode: string;
    indentFromAxis: number;
    overlappingBehavior: string;
    rotationAngle: number;
    staggeringSpacing: number;
    textOverflow: string;
    wordWrap: string;
    argumentFormat: DevExpress.ui.format | string;
    backgroundColor: string;
    border: {
        color?: string;
        dashStyle?: string;
        visible?: boolean;
        width?: number;
    } | {
        color?: string;
        visible?: boolean;
        width?: number;
    };
    connector: {
        color?: string;
        visible?: boolean;
        width?: number;
    } | {
        color?: string;
        opacity?: number;
        visible?: boolean;
        width?: number;
    };
    horizontalOffset: number;
    showForZeroValues: boolean;
    verticalOffset: number;
    hideFirstOrLast: string;
    indentFromTick: number;
    useRangeColors: boolean;
    location: string;
    showColon: boolean;
    radialOffset: number;
    topIndent: number;
    shadow: {
        blur?: number;
        color?: string;
        offsetX?: number;
        offsetY?: number;
        opacity?: number;
    };
    useNodeColors: boolean;
    dataField: string;
    enabled: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoLabelModule {
}
