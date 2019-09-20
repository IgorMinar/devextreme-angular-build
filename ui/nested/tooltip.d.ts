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
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoTooltipComponent extends NestedOption {
    arrowLength: number;
    border: {
        color?: string;
        dashStyle?: string;
        opacity?: number;
        visible?: boolean;
        width?: number;
    };
    color: string;
    container: Element | JQuery;
    cornerRadius: number;
    customizeTooltip: Function;
    enabled: boolean;
    font: DevExpress.viz.Font;
    format: DevExpress.ui.format | string;
    opacity: number;
    paddingLeftRight: number;
    paddingTopBottom: number;
    shadow: {
        blur?: number;
        color?: string;
        offsetX?: number;
        offsetY?: number;
        opacity?: number;
    };
    zIndex: number;
    argumentFormat: DevExpress.ui.format | string;
    location: string;
    shared: boolean;
    isShown: boolean;
    text: string;
    position: string;
    showMode: string;
    customizeLinkTooltip: Function;
    customizeNodeTooltip: Function;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoTooltipModule {
}
