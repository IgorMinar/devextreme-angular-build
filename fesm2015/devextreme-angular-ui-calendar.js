import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxCalendar from 'devextreme/ui/calendar';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';

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
const CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxCalendarComponent),
    multi: true
};
/**
 * The Calendar is a widget that displays a calendar and allows an end user to select the required date within a specified date range.
 */
let DxCalendarComponent = class DxCalendarComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.touched = (_) => { };
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'cellTemplateChange' },
            { emit: 'dateSerializationFormatChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledDatesChange' },
            { emit: 'elementAttrChange' },
            { emit: 'firstDayOfWeekChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'maxChange' },
            { emit: 'maxZoomLevelChange' },
            { emit: 'minChange' },
            { emit: 'minZoomLevelChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showTodayButtonChange' },
            { emit: 'tabIndexChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'zoomLevelChange' },
            { emit: 'onBlur' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Specifies a custom template for calendar cells.
     */
    get cellTemplate() {
        return this._getOption('cellTemplate');
    }
    set cellTemplate(value) {
        this._setOption('cellTemplate', value);
    }
    /**
     * Specifies the date-time value serialization format. Use it only if you do not specify the value at design time.
     */
    get dateSerializationFormat() {
        return this._getOption('dateSerializationFormat');
    }
    set dateSerializationFormat(value) {
        this._setOption('dateSerializationFormat', value);
    }
    /**
     * Specifies whether the widget responds to user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    /**
     * Specifies dates to be disabled.
     */
    get disabledDates() {
        return this._getOption('disabledDates');
    }
    set disabledDates(value) {
        this._setOption('disabledDates', value);
    }
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    /**
     * Specifies the first day of a week.
     */
    get firstDayOfWeek() {
        return this._getOption('firstDayOfWeek');
    }
    set firstDayOfWeek(value) {
        this._setOption('firstDayOfWeek', value);
    }
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    /**
     * Specifies the widget's height.
     */
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    /**
     * Specifies whether the editor's value is valid.
     */
    get isValid() {
        return this._getOption('isValid');
    }
    set isValid(value) {
        this._setOption('isValid', value);
    }
    /**
     * The latest date the widget allows to select.
     */
    get max() {
        return this._getOption('max');
    }
    set max(value) {
        this._setOption('max', value);
    }
    /**
     * Specifies the maximum zoom level of the calendar.
     */
    get maxZoomLevel() {
        return this._getOption('maxZoomLevel');
    }
    set maxZoomLevel(value) {
        this._setOption('maxZoomLevel', value);
    }
    /**
     * The earliest date the widget allows to select.
     */
    get min() {
        return this._getOption('min');
    }
    set min(value) {
        this._setOption('min', value);
    }
    /**
     * Specifies the minimum zoom level of the calendar.
     */
    get minZoomLevel() {
        return this._getOption('minZoomLevel');
    }
    set minZoomLevel(value) {
        this._setOption('minZoomLevel', value);
    }
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    /**
     * Specifies whether the editor is read-only.
     */
    get readOnly() {
        return this._getOption('readOnly');
    }
    set readOnly(value) {
        this._setOption('readOnly', value);
    }
    /**
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * Specifies whether or not the widget displays a button that selects the current date.
     */
    get showTodayButton() {
        return this._getOption('showTodayButton');
    }
    set showTodayButton(value) {
        this._setOption('showTodayButton', value);
    }
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    get validationError() {
        return this._getOption('validationError');
    }
    set validationError(value) {
        this._setOption('validationError', value);
    }
    /**
     * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
     */
    get validationMessageMode() {
        return this._getOption('validationMessageMode');
    }
    set validationMessageMode(value) {
        this._setOption('validationMessageMode', value);
    }
    /**
     * An object or a value specifying the date and time currently selected in the calendar.
     */
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    /**
     * Specifies whether the widget is visible.
     */
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    /**
     * Specifies the widget's width.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    /**
     * Specifies the current calendar zoom level.
     */
    get zoomLevel() {
        return this._getOption('zoomLevel');
    }
    set zoomLevel(value) {
        this._setOption('zoomLevel', value);
    }
    change(_) { }
    _createInstance(element, options) {
        return new DxCalendar(element, options);
    }
    writeValue(value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnChange(fn) { this.change = fn; }
    registerOnTouched(fn) { this.touched = fn; }
    _createWidget(element) {
        super._createWidget(element);
        this.instance.on('focusOut', (e) => {
            this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('disabledDates', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('disabledDates');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }
    _setOption(name, value) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    }
};
DxCalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    ContentChild(DxValidatorComponent)
], DxCalendarComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxCalendarComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "cellTemplate", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "dateSerializationFormat", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "disabledDates", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "firstDayOfWeek", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "height", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "hint", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "max", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "maxZoomLevel", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "min", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "minZoomLevel", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "name", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "showTodayButton", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "validationMessageMode", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "value", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "visible", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "width", null);
__decorate([
    Input()
], DxCalendarComponent.prototype, "zoomLevel", null);
__decorate([
    Output()
], DxCalendarComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "cellTemplateChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "dateSerializationFormatChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "disabledDatesChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "firstDayOfWeekChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "maxChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "maxZoomLevelChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "minChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "minZoomLevelChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "nameChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "showTodayButtonChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "validationMessageModeChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "zoomLevelChange", void 0);
__decorate([
    Output()
], DxCalendarComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxCalendarComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxCalendarComponent.prototype, "touched", void 0);
DxCalendarComponent = __decorate([
    Component({
        selector: 'dx-calendar',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            CUSTOM_VALUE_ACCESSOR_PROVIDER,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxCalendarComponent);
let DxCalendarModule = class DxCalendarModule {
};
DxCalendarModule = __decorate([
    NgModule({
        imports: [
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxCalendarComponent
        ],
        exports: [
            DxCalendarComponent,
            DxTemplateModule
        ]
    })
], DxCalendarModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxCalendarComponent, DxCalendarModule };
//# sourceMappingURL=devextreme-angular-ui-calendar.js.map
