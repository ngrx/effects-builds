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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lZmZlY3RzL3NyYy9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxrQ0FVQzs7Ozs7OztJQUxDLGdDQUFtQjs7Ozs7SUFJbkIsMENBQTZCOzs7QUFHL0IsTUFBTSxPQUFPLHFCQUFxQixHQUFxQztJQUNyRSxRQUFRLEVBQUUsSUFBSTtJQUNkLGtCQUFrQixFQUFFLElBQUk7Q0FDekI7Ozs7O0FBT0Qsb0NBR0M7OztJQURDLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29uZmlndXJlcyBhbiBlZmZlY3QgY3JlYXRlZCBieSBgY3JlYXRlRWZmZWN0YC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFZmZlY3RDb25maWcge1xuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgYWN0aW9uIGVtaXR0ZWQgYnkgdGhlIGVmZmVjdCBpcyBkaXNwYXRjaGVkIHRvIHRoZSBzdG9yZS5cbiAgICogSWYgZmFsc2UsIGVmZmVjdCBkb2VzIG5vdCBuZWVkIHRvIHJldHVybiB0eXBlIGBPYnNlcnZhYmxlPEFjdGlvbj5gLlxuICAgKi9cbiAgZGlzcGF0Y2g/OiBib29sZWFuO1xuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgZWZmZWN0IHdpbGwgYmUgcmVzdWJzY3JpYmVkIHRvIGlmIGFuIGVycm9yIG9jY3VycyBpbiB0aGUgbWFpbiBhY3Rpb25zIHN0cmVhbS5cbiAgICovXG4gIHJlc3Vic2NyaWJlT25FcnJvcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VGRkVDVF9DT05GSUc6IFJlYWRvbmx5PFJlcXVpcmVkPEVmZmVjdENvbmZpZz4+ID0ge1xuICBkaXNwYXRjaDogdHJ1ZSxcbiAgcmVzdWJzY3JpYmVPbkVycm9yOiB0cnVlLFxufTtcblxuZXhwb3J0IHR5cGUgRWZmZWN0UHJvcGVydHlLZXk8VCBleHRlbmRzIE9iamVjdD4gPSBFeGNsdWRlPFxuICBrZXlvZiBULFxuICBrZXlvZiBPYmplY3Rcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWZmZWN0TWV0YWRhdGE8VCBleHRlbmRzIE9iamVjdD5cbiAgZXh0ZW5kcyBSZXF1aXJlZDxFZmZlY3RDb25maWc+IHtcbiAgcHJvcGVydHlOYW1lOiBFZmZlY3RQcm9wZXJ0eUtleTxUPjtcbn1cblxuZXhwb3J0IHR5cGUgRWZmZWN0c01ldGFkYXRhPFQ+ID0ge1xuICBba2V5IGluIEVmZmVjdFByb3BlcnR5S2V5PFQ+XT86IEVmZmVjdENvbmZpZ1xufTtcbiJdfQ==