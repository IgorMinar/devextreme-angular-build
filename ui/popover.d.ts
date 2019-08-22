import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxPopover from 'devextreme/ui/popover';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiToolbarItemComponent } from './nested/toolbar-item-dxi';
/**
 * The Popover is a widget that shows notifications within a box with an arrow pointing to a specified UI element.
 */
export declare class DxPopoverComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPopover;
    /**
     * Configures widget visibility animations. This object contains two fields: show and hide.
     */
    animation: {
        hide?: DevExpress.animationConfig;
        show?: DevExpress.animationConfig;
    };
    /**
     * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
     */
    closeOnBackButton: boolean;
    /**
     * A Boolean value specifying whether or not the widget is closed if a user clicks outside of the popover window and outside the target element.
     */
    closeOnOutsideClick: boolean | Function;
    /**
     * Specifies the container in which to place the widget.
     */
    container: Element | JQuery;
    /**
     * Specifies a custom template for the widget content.
     */
    contentTemplate: any;
    /**
     * Specifies whether to render the widget's content when it is displayed. If false, the content is rendered immediately.
     */
    deferRendering: boolean;
    /**
     * Specifies whether the widget responds to user interaction.
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
     * Specifies options of popover hiding.
     */
    hideEvent: string | {
        delay?: number;
        name?: string;
    };
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    hoverStateEnabled: boolean;
    /**
     * Specifies the maximum height the widget can reach while resizing.
     */
    maxHeight: number | Function | string;
    /**
     * Specifies the maximum width the widget can reach while resizing.
     */
    maxWidth: number | Function | string;
    /**
     * Specifies the minimum height the widget can reach while resizing.
     */
    minHeight: number | Function | string;
    /**
     * Specifies the minimum width the widget can reach while resizing.
     */
    minWidth: number | Function | string;
    /**
     * An object defining widget positioning options.
     */
    position: DevExpress.positionConfig | string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether to shade the container when the widget is active.
     */
    shading: boolean;
    /**
     * Specifies the shading color.
     */
    shadingColor: string;
    /**
     * Specifies whether or not the widget displays the Close button.
     */
    showCloseButton: boolean;
    /**
     * Specifies options for displaying the widget.
     */
    showEvent: string | {
        delay?: number;
        name?: string;
    };
    /**
     * A Boolean value specifying whether or not to display the title in the overlay window.
     */
    showTitle: boolean;
    /**
     * The target element associated with the widget.
     */
    target: Element | JQuery;
    /**
     * The title in the overlay window.
     */
    title: string;
    /**
     * Specifies a custom template for the widget title. Does not apply if the title is defined.
     */
    titleTemplate: any;
    /**
     * Configures toolbar items.
     */
    toolbarItems: Array<any | {
        disabled?: boolean;
        html?: string;
        location?: string;
        options?: any;
        template?: any;
        text?: string;
        toolbar?: string;
        visible?: boolean;
        widget?: string;
    }>;
    /**
     * A Boolean value specifying whether or not the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
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
     * A function that is executed when the widget's title is rendered.
     */
    onTitleRendered: EventEmitter<any>;
    /**
     * A handler for the animationChange event.
     */
    animationChange: EventEmitter<{
        hide?: DevExpress.animationConfig;
        show?: DevExpress.animationConfig;
    }>;
    /**
     * A handler for the closeOnBackButtonChange event.
     */
    closeOnBackButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the closeOnOutsideClickChange event.
     */
    closeOnOutsideClickChange: EventEmitter<boolean | Function>;
    /**
     * A handler for the containerChange event.
     */
    containerChange: EventEmitter<Element | JQuery>;
    /**
     * A handler for the contentTemplateChange event.
     */
    contentTemplateChange: EventEmitter<any>;
    /**
     * A handler for the deferRenderingChange event.
     */
    deferRenderingChange: EventEmitter<boolean>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hideEventChange event.
     */
    hideEventChange: EventEmitter<string | {
        delay?: number;
        name?: string;
    }>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the hoverStateEnabledChange event.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the maxHeightChange event.
     */
    maxHeightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the maxWidthChange event.
     */
    maxWidthChange: EventEmitter<number | Function | string>;
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
    positionChange: EventEmitter<DevExpress.positionConfig | string>;
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
     * A handler for the showCloseButtonChange event.
     */
    showCloseButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the showEventChange event.
     */
    showEventChange: EventEmitter<string | {
        delay?: number;
        name?: string;
    }>;
    /**
     * A handler for the showTitleChange event.
     */
    showTitleChange: EventEmitter<boolean>;
    /**
     * A handler for the targetChange event.
     */
    targetChange: EventEmitter<Element | JQuery>;
    /**
     * A handler for the titleChange event.
     */
    titleChange: EventEmitter<string>;
    /**
     * A handler for the titleTemplateChange event.
     */
    titleTemplateChange: EventEmitter<any>;
    /**
     * A handler for the toolbarItemsChange event.
     */
    toolbarItemsChange: EventEmitter<Array<any | {
        disabled?: boolean;
        html?: string;
        location?: string;
        options?: any;
        template?: any;
        text?: string;
        toolbar?: string;
        visible?: boolean;
        widget?: string;
    }>>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    toolbarItemsChildren: QueryList<DxiToolbarItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxPopover;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxPopoverModule {
}
