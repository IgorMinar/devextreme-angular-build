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
import DxScrollView from 'devextreme/ui/scroll_view';
import { DxComponent, DxTemplateHost, NestedOptionHost, WatcherHelper } from 'devextreme-angular/core';
/**
 * The ScrollView is a widget that enables a user to scroll its content.
 */
export declare class DxScrollViewComponent extends DxComponent implements OnDestroy {
    instance: DxScrollView;
    /**
     * A Boolean value specifying whether to enable or disable the bounce-back effect.
     */
    bounceEnabled: boolean;
    /**
     * A string value specifying the available scrolling directions.
     */
    direction: string;
    /**
     * A Boolean value specifying whether or not the widget can respond to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies the text shown in the pullDown panel when pulling the content down lowers the refresh threshold.
     */
    pulledDownText: string;
    /**
     * Specifies the text shown in the pullDown panel while pulling the content down to the refresh threshold.
     */
    pullingDownText: string;
    /**
     * Specifies the text shown in the pullDown panel displayed when content is scrolled to the bottom.
     */
    reachBottomText: string;
    /**
     * Specifies the text shown in the pullDown panel displayed when the content is being refreshed.
     */
    refreshingText: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * A Boolean value specifying whether or not an end-user can scroll the widget content swiping it up or down. Applies only if useNative is false
     */
    scrollByContent: boolean;
    /**
     * A Boolean value specifying whether or not an end-user can scroll the widget content using the scrollbar.
     */
    scrollByThumb: boolean;
    /**
     * Specifies when the widget shows the scrollbar.
     */
    showScrollbar: string;
    /**
     * Indicates whether to use native or simulated scrolling.
     */
    useNative: boolean;
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
     * A function that is executed when the "pull to refresh" gesture is performed. Supported in mobile themes only.
     */
    onPullDown: EventEmitter<any>;
    /**
     * A function that is executed when the content is scrolled down to the bottom.
     */
    onReachBottom: EventEmitter<any>;
    /**
     * A function that is executed on each scroll gesture.
     */
    onScroll: EventEmitter<any>;
    /**
     * A function that is executed each time the widget is updated.
     */
    onUpdated: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    bounceEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    directionChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    pulledDownTextChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    pullingDownTextChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    reachBottomTextChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    refreshingTextChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    scrollByContentChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    scrollByThumbChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showScrollbarChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    useNativeChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    widthChange: EventEmitter<number | Function | string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxScrollView;
    ngOnDestroy(): void;
}
export declare class DxScrollViewModule {
}
