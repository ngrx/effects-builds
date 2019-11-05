/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configures an effect created by `createEffect`.
 * @record
 */
export function EffectConfig() { }
if (false) {
    /**
     * Determines if the action emitted by the effect is dispatched to the store.
     * If false, effect does not need to return type `Observable<Action>`.
     * @type {?|undefined}
     */
    EffectConfig.prototype.dispatch;
    /**
     * Determines if the effect will be resubscribed to if an error occurs in the main actions stream.
     * @type {?|undefined}
     */
    EffectConfig.prototype.resubscribeOnError;
}
/** @type {?} */
export const DEFAULT_EFFECT_CONFIG = {
    dispatch: true,
    resubscribeOnError: true,
};
/**
 * @record
 * @template T
 */
export function EffectMetadata() { }
if (false) {
    /** @type {?} */
    EffectMetadata.prototype.propertyName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lZmZlY3RzL3NyYy9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxrQ0FVQzs7Ozs7OztJQUxDLGdDQUFtQjs7Ozs7SUFJbkIsMENBQTZCOzs7QUFHL0IsTUFBTSxPQUFPLHFCQUFxQixHQUEyQjtJQUMzRCxRQUFRLEVBQUUsSUFBSTtJQUNkLGtCQUFrQixFQUFFLElBQUk7Q0FDekI7Ozs7O0FBT0Qsb0NBR0M7OztJQURDLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29uZmlndXJlcyBhbiBlZmZlY3QgY3JlYXRlZCBieSBgY3JlYXRlRWZmZWN0YC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFZmZlY3RDb25maWcge1xuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgYWN0aW9uIGVtaXR0ZWQgYnkgdGhlIGVmZmVjdCBpcyBkaXNwYXRjaGVkIHRvIHRoZSBzdG9yZS5cbiAgICogSWYgZmFsc2UsIGVmZmVjdCBkb2VzIG5vdCBuZWVkIHRvIHJldHVybiB0eXBlIGBPYnNlcnZhYmxlPEFjdGlvbj5gLlxuICAgKi9cbiAgZGlzcGF0Y2g/OiBib29sZWFuO1xuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgZWZmZWN0IHdpbGwgYmUgcmVzdWJzY3JpYmVkIHRvIGlmIGFuIGVycm9yIG9jY3VycyBpbiB0aGUgbWFpbiBhY3Rpb25zIHN0cmVhbS5cbiAgICovXG4gIHJlc3Vic2NyaWJlT25FcnJvcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VGRkVDVF9DT05GSUc6IFJlcXVpcmVkPEVmZmVjdENvbmZpZz4gPSB7XG4gIGRpc3BhdGNoOiB0cnVlLFxuICByZXN1YnNjcmliZU9uRXJyb3I6IHRydWUsXG59O1xuXG5leHBvcnQgdHlwZSBFZmZlY3RQcm9wZXJ0eUtleTxUIGV4dGVuZHMgT2JqZWN0PiA9IEV4Y2x1ZGU8XG4gIGtleW9mIFQsXG4gIGtleW9mIE9iamVjdFxuPjtcblxuZXhwb3J0IGludGVyZmFjZSBFZmZlY3RNZXRhZGF0YTxUIGV4dGVuZHMgT2JqZWN0PlxuICBleHRlbmRzIFJlcXVpcmVkPEVmZmVjdENvbmZpZz4ge1xuICBwcm9wZXJ0eU5hbWU6IEVmZmVjdFByb3BlcnR5S2V5PFQ+O1xufVxuXG5leHBvcnQgdHlwZSBFZmZlY3RzTWV0YWRhdGE8VD4gPSB7XG4gIFtrZXkgaW4gRWZmZWN0UHJvcGVydHlLZXk8VD5dPzogRWZmZWN0Q29uZmlnXG59O1xuIl19