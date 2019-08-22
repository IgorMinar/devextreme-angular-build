import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoCommonAxisSettingsComponent extends NestedOption {
    allowDecimals: boolean;
    breakStyle: {
        color?: string;
        line?: string;
        width?: number;
    };
    color: string;
    constantLineStyle: {
        color?: string;
        dashStyle?: string;
        label?: {
            font?: DevExpress.viz.Font;
            position?: string;
            visible?: boolean;
        };
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        width?: number;
    } | {
        color?: string;
        dashStyle?: string;
        label?: {
            font?: DevExpress.viz.Font;
            visible?: boolean;
        };
        width?: number;
    };
    discreteAxisDivisionMode: string;
    endOnTick: boolean;
    grid: {
        color?: string;
        opacity?: number;
        visible?: boolean;
        width?: number;
    };
    inverted: boolean;
    label: {
        alignment?: string;
        displayMode?: string;
        font?: DevExpress.viz.Font;
        indentFromAxis?: number;
        overlappingBehavior?: string;
        rotationAngle?: number;
        staggeringSpacing?: number;
        textOverflow?: string;
        visible?: boolean;
        wordWrap?: string;
    } | {
        font?: DevExpress.viz.Font;
        indentFromAxis?: number;
        overlappingBehavior?: string;
        visible?: boolean;
    };
    maxValueMargin: number;
    minorGrid: {
        color?: string;
        opacity?: number;
        visible?: boolean;
        width?: number;
    };
    minorTick: {
        color?: string;
        length?: number;
        opacity?: number;
        shift?: number;
        visible?: boolean;
        width?: number;
    } | {
        color?: string;
        length?: number;
        opacity?: number;
        visible?: boolean;
        width?: number;
    };
    minValueMargin: number;
    opacity: number;
    placeholderSize: number;
    stripStyle: {
        label?: {
            font?: DevExpress.viz.Font;
            horizontalAlignment?: string;
            verticalAlignment?: string;
        };
        paddingLeftRight?: number;
        paddingTopBottom?: number;
    } | {
        label?: {
            font?: DevExpress.viz.Font;
        };
    };
    tick: {
        color?: string;
        length?: number;
        opacity?: number;
        shift?: number;
        visible?: boolean;
        width?: number;
    } | {
        color?: string;
        length?: number;
        opacity?: number;
        visible?: boolean;
        width?: number;
    };
    title: {
        alignment?: string;
        font?: DevExpress.viz.Font;
        margin?: number;
        textOverflow?: string;
        wordWrap?: string;
    };
    valueMarginsEnabled: boolean;
    visible: boolean;
    width: number;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoCommonAxisSettingsModule {
}
