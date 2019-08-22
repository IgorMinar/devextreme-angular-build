import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxPivotGridFieldChooser from 'devextreme/ui/pivot_grid_field_chooser';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
/**
 * A complementary widget for the PivotGrid that allows you to manage data displayed in the PivotGrid. The field chooser is already integrated in the PivotGrid and can be invoked using the context menu. If you need to continuously display the field chooser near the PivotGrid widget, use the PivotGridFieldChooser widget.
 */
export declare class DxPivotGridFieldChooserComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPivotGridFieldChooser;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies whether the field chooser allows searching in the "All Fields" section.
     */
    allowSearch: boolean;
    /**
     * Specifies when to apply changes made in the widget to the PivotGrid.
     */
    applyChangesMode: string;
    /**
     * The data source of a PivotGrid widget.
     */
    dataSource: DevExpress.data.PivotGridDataSource;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Configures the header filter feature.
     */
    headerFilter: {
        allowSearch?: boolean;
        height?: number;
        searchTimeout?: number;
        showRelevantValues?: boolean;
        texts?: {
            cancel?: string;
            emptyValue?: string;
            ok?: string;
        };
        width?: number;
    };
    /**
     * Specifies the widget's height.
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
     * Specifies the field chooser layout.
     */
    layout: number | string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies a delay in milliseconds between when a user finishes typing in the field chooser's search panel, and when the search is executed.
     */
    searchTimeout: number;
    /**
     * The widget's state.
     */
    state: any;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Strings that can be changed or localized in the PivotGridFieldChooser widget.
     */
    texts: {
        allFields?: string;
        columnFields?: string;
        dataFields?: string;
        filterFields?: string;
        rowFields?: string;
    };
    /**
     * Specifies whether the widget is visible.
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
     * A function that is executed before the context menu is rendered.
     */
    onContextMenuPreparing: EventEmitter<any>;
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
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the allowSearchChange event.
     */
    allowSearchChange: EventEmitter<boolean>;
    /**
     * A handler for the applyChangesModeChange event.
     */
    applyChangesModeChange: EventEmitter<string>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.PivotGridDataSource>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the headerFilterChange event.
     */
    headerFilterChange: EventEmitter<{
        allowSearch?: boolean;
        height?: number;
        searchTimeout?: number;
        showRelevantValues?: boolean;
        texts?: {
            cancel?: string;
            emptyValue?: string;
            ok?: string;
        };
        width?: number;
    }>;
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
     * A handler for the layoutChange event.
     */
    layoutChange: EventEmitter<number | string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the searchTimeoutChange event.
     */
    searchTimeoutChange: EventEmitter<number>;
    /**
     * A handler for the stateChange event.
     */
    stateChange: EventEmitter<any>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the textsChange event.
     */
    textsChange: EventEmitter<{
        allFields?: string;
        columnFields?: string;
        dataFields?: string;
        filterFields?: string;
        rowFields?: string;
    }>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxPivotGridFieldChooser;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxPivotGridFieldChooserModule {
}