import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxForm from 'devextreme/ui/form';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The Form widget represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.
 */
export declare class DxFormComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxForm;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies whether or not all root item labels are aligned.
     */
    alignItemLabels: boolean;
    /**
     * Specifies whether or not item labels in all groups are aligned.
     */
    alignItemLabelsInAllGroups: boolean;
    /**
     * The count of columns in the form layout.
     */
    colCount: number | string;
    /**
     * Specifies dependency between the screen factor and the count of columns in the form layout.
     */
    colCountByScreen: {
        lg?: number;
        md?: number;
        sm?: number;
        xs?: number;
    };
    /**
     * Specifies a function that customizes a form item after it has been created.
     */
    customizeItem: Function;
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
     * Provides the Form's data. Gets updated every time form fields change.
     */
    formData: any;
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
     * Holds an array of form items.
     */
    items: Array<DevExpress.ui.dxFormSimpleItem | DevExpress.ui.dxFormGroupItem | DevExpress.ui.dxFormTabbedItem | DevExpress.ui.dxFormEmptyItem | DevExpress.ui.dxFormButtonItem>;
    /**
     * Specifies the location of a label against the editor.
     */
    labelLocation: string;
    /**
     * The minimum column width used for calculating column count in the form layout.
     */
    minColWidth: number;
    /**
     * The text displayed for optional fields.
     */
    optionalMark: string;
    /**
     * Specifies whether all editors on the form are read-only. Applies only to non-templated items.
     */
    readOnly: boolean;
    /**
     * The text displayed for required fields.
     */
    requiredMark: string;
    /**
     * Specifies the message that is shown for end-users if a required field value is not specified.
     */
    requiredMessage: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies a function that categorizes screens by their width.
     */
    screenByWidth: Function;
    /**
     * A Boolean value specifying whether to enable or disable form scrolling.
     */
    scrollingEnabled: boolean;
    /**
     * Specifies whether or not a colon is displayed at the end of form labels.
     */
    showColonAfterLabel: boolean;
    /**
     * Specifies whether or not the optional mark is displayed for optional fields.
     */
    showOptionalMark: boolean;
    /**
     * Specifies whether or not the required mark is displayed for required fields.
     */
    showRequiredMark: boolean;
    /**
     * Specifies whether or not the total validation summary is displayed on the form.
     */
    showValidationSummary: boolean;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Gives a name to the internal validation group.
     */
    validationGroup: string;
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
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function that is executed when the Enter key has been pressed while an editor is focused.
     */
    onEditorEnterKey: EventEmitter<any>;
    /**
     * A function that is executed when the value of a formData object field is changed.
     */
    onFieldDataChanged: EventEmitter<any>;
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
     * A handler for the alignItemLabelsChange event.
     */
    alignItemLabelsChange: EventEmitter<boolean>;
    /**
     * A handler for the alignItemLabelsInAllGroupsChange event.
     */
    alignItemLabelsInAllGroupsChange: EventEmitter<boolean>;
    /**
     * A handler for the colCountChange event.
     */
    colCountChange: EventEmitter<number | string>;
    /**
     * A handler for the colCountByScreenChange event.
     */
    colCountByScreenChange: EventEmitter<{
        lg?: number;
        md?: number;
        sm?: number;
        xs?: number;
    }>;
    /**
     * A handler for the customizeItemChange event.
     */
    customizeItemChange: EventEmitter<Function>;
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
     * A handler for the formDataChange event.
     */
    formDataChange: EventEmitter<any>;
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
     * A handler for the itemsChange event.
     */
    itemsChange: EventEmitter<Array<DevExpress.ui.dxFormSimpleItem | DevExpress.ui.dxFormGroupItem | DevExpress.ui.dxFormTabbedItem | DevExpress.ui.dxFormEmptyItem | DevExpress.ui.dxFormButtonItem>>;
    /**
     * A handler for the labelLocationChange event.
     */
    labelLocationChange: EventEmitter<string>;
    /**
     * A handler for the minColWidthChange event.
     */
    minColWidthChange: EventEmitter<number>;
    /**
     * A handler for the optionalMarkChange event.
     */
    optionalMarkChange: EventEmitter<string>;
    /**
     * A handler for the readOnlyChange event.
     */
    readOnlyChange: EventEmitter<boolean>;
    /**
     * A handler for the requiredMarkChange event.
     */
    requiredMarkChange: EventEmitter<string>;
    /**
     * A handler for the requiredMessageChange event.
     */
    requiredMessageChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the screenByWidthChange event.
     */
    screenByWidthChange: EventEmitter<Function>;
    /**
     * A handler for the scrollingEnabledChange event.
     */
    scrollingEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the showColonAfterLabelChange event.
     */
    showColonAfterLabelChange: EventEmitter<boolean>;
    /**
     * A handler for the showOptionalMarkChange event.
     */
    showOptionalMarkChange: EventEmitter<boolean>;
    /**
     * A handler for the showRequiredMarkChange event.
     */
    showRequiredMarkChange: EventEmitter<boolean>;
    /**
     * A handler for the showValidationSummaryChange event.
     */
    showValidationSummaryChange: EventEmitter<boolean>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the validationGroupChange event.
     */
    validationGroupChange: EventEmitter<string>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxForm;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxFormModule {
}
