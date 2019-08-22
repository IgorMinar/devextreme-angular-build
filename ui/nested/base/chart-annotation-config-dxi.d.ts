import { CollectionNestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxiChartAnnotationConfig extends CollectionNestedOption {
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
    name: string;
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
