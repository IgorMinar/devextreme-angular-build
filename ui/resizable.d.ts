import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter } from '@angular/core';
import DxResizable from 'devextreme/ui/resizable';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
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
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the handlesChange event.
     */
    handlesChange: EventEmitter<string>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the maxHeightChange event.
     */
    maxHeightChange: EventEmitter<number>;
    /**
     * A handler for the maxWidthChange event.
     */
    maxWidthChange: EventEmitter<number>;
    /**
     * A handler for the minHeightChange event.
     */
    minHeightChange: EventEmitter<number>;
    /**
     * A handler for the minWidthChange event.
     */
    minWidthChange: EventEmitter<number>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxResizable;
    ngOnDestroy(): void;
}
export declare class DxResizableModule {
}