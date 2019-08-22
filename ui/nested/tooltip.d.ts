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
