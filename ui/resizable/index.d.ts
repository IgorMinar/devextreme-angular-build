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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter } from '@angular/core';
import DxResizable from 'devextreme/ui/resizable';
import { DxComponent, DxTemplateHost, NestedOptionHost, WatcherHelper } from 'devextreme-angular/core';
/**
 * The Resizable widget enables its content to be resizable in the UI.
 */
export declare class DxResizableComponent extends DxComponent implements OnDestroy {
    instance: DxResizable;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies which borders of the widget element are used as a handle.
     */
    handles: string;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies the upper height boundary for resizing.
     */
    maxHeight: number;
    /**
     * Specifies the upper width boundary for resizing.
     */
    maxWidth: number;
    /**
     * Specifies the lower height boundary for resizing.
     */
    minHeight: number;
    /**
     * Specifies the lower width boundary for resizing.
     */
    minWidth: number;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed each time the widget is resized by one pixel.
     */
    onResize: EventEmitter<any>;
    /**
     * A function that is executed when resizing ends.
     */
    onResizeEnd: EventEmitter<any>;
    /**
     * A function that is executed when resizing starts.
     */
    onResizeStart: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    handlesChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    maxHeightChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    maxWidthChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    minHeightChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    minWidthChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    widthChange: EventEmitter<number | Function | string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxResizable;
    ngOnDestroy(): void;
}
export declare class DxResizableModule {
}
