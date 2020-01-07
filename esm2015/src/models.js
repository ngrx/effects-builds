/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/src/models.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @type {?} */
export const CREATE_EFFECT_METADATA_KEY = '__@ngrx/effects_create__';
/**
 * @record
 */
export function CreateEffectMetadata() { }
if (false) {
    /* Skipping unnamed member:
    [CREATE_EFFECT_METADATA_KEY]: EffectConfig;*/
}
/**
 * @record
 * @template T
 */
export function EffectMetadata() { }
if (false) {
    /** @type {?} */
    EffectMetadata.prototype.propertyName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lZmZlY3RzL3NyYy9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0Esa0NBVUM7Ozs7Ozs7SUFMQyxnQ0FBbUI7Ozs7O0lBSW5CLDBDQUE2Qjs7O0FBRy9CLE1BQU0sT0FBTyxxQkFBcUIsR0FBcUM7SUFDckUsUUFBUSxFQUFFLElBQUk7SUFDZCxrQkFBa0IsRUFBRSxJQUFJO0NBQ3pCOztBQUVELE1BQU0sT0FBTywwQkFBMEIsR0FBRywwQkFBMEI7Ozs7QUFFcEUsMENBRUM7Ozs7Ozs7OztBQU9ELG9DQUdDOzs7SUFEQyxzQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbmZpZ3VyZXMgYW4gZWZmZWN0IGNyZWF0ZWQgYnkgYGNyZWF0ZUVmZmVjdGAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRWZmZWN0Q29uZmlnIHtcbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIGFjdGlvbiBlbWl0dGVkIGJ5IHRoZSBlZmZlY3QgaXMgZGlzcGF0Y2hlZCB0byB0aGUgc3RvcmUuXG4gICAqIElmIGZhbHNlLCBlZmZlY3QgZG9lcyBub3QgbmVlZCB0byByZXR1cm4gdHlwZSBgT2JzZXJ2YWJsZTxBY3Rpb24+YC5cbiAgICovXG4gIGRpc3BhdGNoPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIGVmZmVjdCB3aWxsIGJlIHJlc3Vic2NyaWJlZCB0byBpZiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIG1haW4gYWN0aW9ucyBzdHJlYW0uXG4gICAqL1xuICByZXN1YnNjcmliZU9uRXJyb3I/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9FRkZFQ1RfQ09ORklHOiBSZWFkb25seTxSZXF1aXJlZDxFZmZlY3RDb25maWc+PiA9IHtcbiAgZGlzcGF0Y2g6IHRydWUsXG4gIHJlc3Vic2NyaWJlT25FcnJvcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWSA9ICdfX0BuZ3J4L2VmZmVjdHNfY3JlYXRlX18nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUVmZmVjdE1ldGFkYXRhIHtcbiAgW0NSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZXTogRWZmZWN0Q29uZmlnO1xufVxuXG5leHBvcnQgdHlwZSBFZmZlY3RQcm9wZXJ0eUtleTxUIGV4dGVuZHMgT2JqZWN0PiA9IEV4Y2x1ZGU8XG4gIGtleW9mIFQsXG4gIGtleW9mIE9iamVjdFxuPjtcblxuZXhwb3J0IGludGVyZmFjZSBFZmZlY3RNZXRhZGF0YTxUIGV4dGVuZHMgT2JqZWN0PlxuICBleHRlbmRzIFJlcXVpcmVkPEVmZmVjdENvbmZpZz4ge1xuICBwcm9wZXJ0eU5hbWU6IEVmZmVjdFByb3BlcnR5S2V5PFQ+O1xufVxuXG5leHBvcnQgdHlwZSBFZmZlY3RzTWV0YWRhdGE8VD4gPSB7XG4gIFtrZXkgaW4gRWZmZWN0UHJvcGVydHlLZXk8VD5dPzogRWZmZWN0Q29uZmlnXG59O1xuIl19