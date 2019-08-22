export declare class WatcherHelper {
    private _watchers;
    getWatchMethod(): (valueGetter: any, valueChangeCallback: any, options: any) => () => void;
    private _isDifferentValues(oldValue, newValue, deepCheck);
    private _toComparable(value);
    private _checkObjectsFields(checkingFromObject, checkingToObject);
    checkWatchers(): void;
}
