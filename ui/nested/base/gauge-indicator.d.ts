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
export declare abstract class DxoGaugeIndicator extends NestedOption {
    arrowLength: number;
    backgroundColor: string;
    baseValue: number;
    beginAdaptingAtRadius: number;
    color: string;
    horizontalOrientation: string;
    indentFromCenter: number;
    length: number;
    offset: number;
    palette: string | Array<string>;
    secondColor: string;
    secondFraction: number;
    size: number;
    spindleGapSize: number;
    spindleSize: number;
    text: {
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        format?: DevExpress.ui.format | string;
        indent?: number;
    };
    type: string;
    verticalOrientation: string;
    width: number;
}
