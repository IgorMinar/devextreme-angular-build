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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxLoadPanel from 'devextreme/ui/load_panel';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The LoadPanel is an overlay widget notifying the viewer that loading is in progress.
 */
export declare class DxLoadPanelComponent extends DxComponent implements OnDestroy {
    instance: DxLoadPanel;
    /**
     * Configures widget visibility animations. This object contains two fields: show and hide.
     */
    animation: {
        hide?: DevExpress.animationConfig;
        show?: DevExpress.animationConfig;
    };
    /**
     * Specifies whether to close the widget if a user clicks outside it.
     */
    closeOnOutsideClick: boolean | Function;
    /**
     * Specifies the widget's container.
     */
    container: Element | JQuery;
    /**
     * Specifies whether to render the widget's content when it is displayed. If false, the content is rendered immediately.
     */
    deferRendering: boolean;
    /**
     * The delay in milliseconds after which the load panel is displayed.
     */
    delay: number;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether or not the widget can be focused.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies the widget's height in pixels.
     */
    height: number | Function | string;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    hoverStateEnabled: boolean;
    /**
     * A URL pointing to an image to be used as a load indicator.
     */
    indicatorSrc: string;
    /**
     * Specifies the maximum height the widget can reach while resizing.
     */
    maxHeight: number | Function | string;
    /**
     * Specifies the maximum width the widget can reach while resizing.
     */
    maxWidth: number | Function | string;
    /**
     * Specifies the text displayed in the load panel. Ignored in the Material Design theme.
     */
    message: string;
    /**
     * Specifies the minimum height the widget can reach while resizing.
     */
    minHeight: number | Function | string;
    /**
     * Specifies the minimum width the widget can reach while resizing.
     */
    minWidth: number | Function | string;
    /**
     * Positions the widget.
     */
    position: DevExpress.positionConfig | Function | string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether to shade the background when the widget is active.
     */
    shading: boolean;
    /**
     * Specifies the shading color.
     */
    shadingColor: string;
    /**
     * A Boolean value specifying whether or not to show a load indicator.
     */
    showIndicator: boolean;
    /**
     * A Boolean value specifying whether or not to show the pane behind the load indicator.
     */
    showPane: boolean;
    /**
     * A Boolean value specifying whether or not the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width in pixels.
     */
    width: number | Function | string;
    /**
     * A function that is executed when the widget's content is ready and each time the content is changed.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function that is executed after the widget is hidden.
     */
    onHidden: EventEmitter<any>;
    /**
     * A function that is executed before the widget is hidden.
     */
    onHiding: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed before the widget is displayed.
     */
    onShowing: EventEmitter<any>;
    /**
     * A function that is executed after the widget is displayed.
     */
    onShown: EventEmitter<any>;
    /**
     * A handler for the animationChange event.
     */
    animationChange: EventEmitter<{
        hide?: DevExpress.animationConfig;
        show?: DevExpress.animationConfig;
    }>;
    /**
     * A handler for the closeOnOutsideClickChange event.
     */
    closeOnOutsideClickChange: EventEmitter<boolean | Function>;
    /**
     * A handler for the containerChange event.
     */
    containerChange: EventEmitter<Element | JQuery>;
    /**
     * A handler for the deferRenderingChange event.
     */
    deferRenderingChange: EventEmitter<boolean>;
    /**
     * A handler for the delayChange event.
     */
    delayChange: EventEmitter<number>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the hoverStateEnabledChange event.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the indicatorSrcChange event.
     */
    indicatorSrcChange: EventEmitter<string>;
    /**
     * A handler for the maxHeightChange event.
     */
    maxHeightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the maxWidthChange event.
     */
    maxWidthChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the messageChange event.
     */
    messageChange: EventEmitter<string>;
    /**
     * A handler for the minHeightChange event.
     */
    minHeightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the minWidthChange event.
     */
    minWidthChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the positionChange event.
     */
    positionChange: EventEmitter<DevExpress.positionConfig | Function | string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the shadingChange event.
     */
    shadingChange: EventEmitter<boolean>;
    /**
     * A handler for the shadingColorChange event.
     */
    shadingColorChange: EventEmitter<string>;
    /**
     * A handler for the showIndicatorChange event.
     */
    showIndicatorChange: EventEmitter<boolean>;
    /**
     * A handler for the showPaneChange event.
     */
    showPaneChange: EventEmitter<boolean>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxLoadPanel;
    ngOnDestroy(): void;
}
export declare class DxLoadPanelModule {
}
