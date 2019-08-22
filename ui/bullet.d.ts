import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxBullet from 'devextreme/viz/bullet';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The Bullet widget is useful when you need to compare a single measure to a target value. The widget comprises a horizontal bar indicating the measure and a vertical line indicating the target value.
 */
export declare class DxBulletComponent extends DxComponent implements OnDestroy {
    instance: DxBullet;
    /**
     * Specifies a color for the bullet bar.
     */
    color: string;
    /**
     * Specifies whether the widget responds to the user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies an end value for the invisible scale.
     */
    endScaleValue: number;
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
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether or not to show the target line.
     */
    showTarget: boolean;
    /**
     * Specifies whether or not to show the line indicating zero on the invisible scale.
     */
    showZeroLevel: boolean;
    /**
     * Specifies the widget's size in pixels.
     */
    size: {
        height?: number;
        width?: number;
    };
    /**
     * Specifies a start value for the invisible scale.
     */
    startScaleValue: number;
    /**
     * Specifies the value indicated by the target line.
     */
    target: number;
    /**
     * Specifies a color for both the target and zero level lines.
     */
    targetColor: string;
    /**
     * Specifies the width of the target line.
     */
    targetWidth: number;
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
     * Specifies the primary value indicated by the bullet bar.
     */
    value: number;
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
     * A handler for the colorChange event.
     */
    colorChange: EventEmitter<string>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the endScaleValueChange event.
     */
    endScaleValueChange: EventEmitter<number>;
    /**
     * A handler for the marginChange event.
     */
    marginChange: EventEmitter<{
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }>;
    /**
     * A handler for the pathModifiedChange event.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the showTargetChange event.
     */
    showTargetChange: EventEmitter<boolean>;
    /**
     * A handler for the showZeroLevelChange event.
     */
    showZeroLevelChange: EventEmitter<boolean>;
    /**
     * A handler for the sizeChange event.
     */
    sizeChange: EventEmitter<{
        height?: number;
        width?: number;
    }>;
    /**
     * A handler for the startScaleValueChange event.
     */
    startScaleValueChange: EventEmitter<number>;
    /**
     * A handler for the targetChange event.
     */
    targetChange: EventEmitter<number>;
    /**
     * A handler for the targetColorChange event.
     */
    targetColorChange: EventEmitter<string>;
    /**
     * A handler for the targetWidthChange event.
     */
    targetWidthChange: EventEmitter<number>;
    /**
     * A handler for the themeChange event.
     */
    themeChange: EventEmitter<string>;
    /**
     * A handler for the tooltipChange event.
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
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<number>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxBullet;
    ngOnDestroy(): void;
}
export declare class DxBulletModule {
}