/**
 * @fileoverview added by tsickle
 * Generated from: src/concat_latest_from.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of, pipe } from 'rxjs';
import { concatMap, withLatestFrom } from 'rxjs/operators';
/**
 * 'concatLatestFrom' combines the source value
 * and the last available value from a lazily evaluated Observable
 * in a new array
 * @template T, V, R
 * @param {?} observablesFactory
 * @return {?}
 */
export function concatLatestFrom(observablesFactory) {
    return pipe(concatMap((/**
     * @param {?} value
     * @return {?}
     */
    (value) => {
        /** @type {?} */
        const observables = observablesFactory(value);
        /** @type {?} */
        const observablesAsArray = Array.isArray(observables)
            ? observables
            : [observables];
        return (/** @type {?} */ (of(value).pipe(withLatestFrom(...observablesAsArray))));
    })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY2F0X2xhdGVzdF9mcm9tLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy8iLCJzb3VyY2VzIjpbInNyYy9jb25jYXRfbGF0ZXN0X2Zyb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQStCLEVBQUUsRUFBb0IsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztBQWMzRCxNQUFNLFVBQVUsZ0JBQWdCLENBUzlCLGtCQUFtQztJQUNuQyxPQUFPLElBQUksQ0FDVCxTQUFTOzs7O0lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7Y0FDWixXQUFXLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDOztjQUN2QyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUNuRCxDQUFDLENBQUMsV0FBVztZQUNiLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNqQixPQUFPLG1CQUFBLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQ25CLGNBQWMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQ3RDLEVBQWlCLENBQUM7SUFDckIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlZFZhbHVlT2YsIG9mLCBPcGVyYXRvckZ1bmN0aW9uLCBwaXBlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vLyBUaGUgYXJyYXkgb3ZlcmxvYWQgaXMgbmVlZGVkIGZpcnN0IGJlY2F1c2Ugd2Ugd2FudCB0byBtYWludGFpbiB0aGUgcHJvcGVyIG9yZGVyIGluIHRoZSByZXN1bHRpbmcgdHVwbGVcbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRMYXRlc3RGcm9tPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPHVua25vd24+W10sIFY+KFxuICBvYnNlcnZhYmxlc0ZhY3Rvcnk6ICh2YWx1ZTogVikgPT4gWy4uLlRdXG4pOiBPcGVyYXRvckZ1bmN0aW9uPFYsIFtWLCAuLi57IFtpIGluIGtleW9mIFRdOiBPYnNlcnZlZFZhbHVlT2Y8VFtpXT4gfV0+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdExhdGVzdEZyb208VCBleHRlbmRzIE9ic2VydmFibGU8dW5rbm93bj4sIFY+KFxuICBvYnNlcnZhYmxlRmFjdG9yeTogKHZhbHVlOiBWKSA9PiBUXG4pOiBPcGVyYXRvckZ1bmN0aW9uPFYsIFtWLCBPYnNlcnZlZFZhbHVlT2Y8VD5dPjtcbi8qKlxuICogJ2NvbmNhdExhdGVzdEZyb20nIGNvbWJpbmVzIHRoZSBzb3VyY2UgdmFsdWVcbiAqIGFuZCB0aGUgbGFzdCBhdmFpbGFibGUgdmFsdWUgZnJvbSBhIGxhemlseSBldmFsdWF0ZWQgT2JzZXJ2YWJsZVxuICogaW4gYSBuZXcgYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdExhdGVzdEZyb208XG4gIFQgZXh0ZW5kcyBPYnNlcnZhYmxlPHVua25vd24+W10gfCBPYnNlcnZhYmxlPHVua25vd24+LFxuICBWLFxuICBSID0gW1xuICAgIFYsXG4gICAgLi4uKFQgZXh0ZW5kcyBPYnNlcnZhYmxlPHVua25vd24+W11cbiAgICAgID8geyBbaSBpbiBrZXlvZiBUXTogT2JzZXJ2ZWRWYWx1ZU9mPFRbaV0+IH1cbiAgICAgIDogW09ic2VydmVkVmFsdWVPZjxUPl0pXG4gIF1cbj4ob2JzZXJ2YWJsZXNGYWN0b3J5OiAodmFsdWU6IFYpID0+IFQpOiBPcGVyYXRvckZ1bmN0aW9uPFYsIFI+IHtcbiAgcmV0dXJuIHBpcGUoXG4gICAgY29uY2F0TWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2YWJsZXMgPSBvYnNlcnZhYmxlc0ZhY3RvcnkodmFsdWUpO1xuICAgICAgY29uc3Qgb2JzZXJ2YWJsZXNBc0FycmF5ID0gQXJyYXkuaXNBcnJheShvYnNlcnZhYmxlcylcbiAgICAgICAgPyBvYnNlcnZhYmxlc1xuICAgICAgICA6IFtvYnNlcnZhYmxlc107XG4gICAgICByZXR1cm4gb2YodmFsdWUpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKC4uLm9ic2VydmFibGVzQXNBcnJheSlcbiAgICAgICkgYXMgT2JzZXJ2YWJsZTxSPjtcbiAgICB9KVxuICApO1xufVxuIl19