/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { compose } from '@ngrx/store';
const /** @type {?} */ METADATA_KEY = '__@ngrx/effects__';
/**
 * @record
 * @template T
 */
export function EffectMetadata() { }
function EffectMetadata_tsickle_Closure_declarations() {
    /** @type {?} */
    EffectMetadata.prototype.propertyName;
    /** @type {?} */
    EffectMetadata.prototype.dispatch;
}
/**
 * @template T
 * @param {?} sourceProto
 * @return {?}
 */
function getEffectMetadataEntries(sourceProto) {
    return sourceProto.constructor.hasOwnProperty(METADATA_KEY)
        ? (/** @type {?} */ (sourceProto.constructor))[METADATA_KEY]
        : [];
}
/**
 * @template T
 * @param {?} sourceProto
 * @param {?} entries
 * @return {?}
 */
function setEffectMetadataEntries(sourceProto, entries) {
    const /** @type {?} */ constructor = sourceProto.constructor;
    const /** @type {?} */ meta = constructor.hasOwnProperty(METADATA_KEY)
        ? (/** @type {?} */ (constructor))[METADATA_KEY]
        : Object.defineProperty(constructor, METADATA_KEY, { value: [] })[METADATA_KEY];
    Array.prototype.push.apply(meta, entries);
}
/**
 * @template T
 * @param {?=} __0
 * @return {?}
 */
export function Effect({ dispatch = true } = {}) {
    return /** @type {?} */ (function (target, propertyName) {
        const /** @type {?} */ metadata = { propertyName, dispatch };
        setEffectMetadataEntries(target, [metadata]);
    });
}
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getSourceMetadata(instance) {
    return compose(getEffectMetadataEntries, getSourceForInstance)(instance);
}
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getEffectsMetadata(instance) {
    const /** @type {?} */ metadata = {};
    for (const { propertyName, dispatch } of getSourceMetadata(instance)) {
        metadata[propertyName] = { dispatch };
    }
    return metadata;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0Qyx1QkFBTSxZQUFZLEdBQUcsbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pDLGtDQUFxQyxXQUFjO0lBQ2pELE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDekQsQ0FBQyxDQUFDLG1CQUFDLFdBQVcsQ0FBQyxXQUFrQixFQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hELENBQUMsQ0FBQyxFQUFFLENBQUM7Q0FDUjs7Ozs7OztBQUVELGtDQUNFLFdBQWMsRUFDZCxPQUFpQztJQUVqQyx1QkFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztJQUM1Qyx1QkFBTSxJQUFJLEdBQTZCLFdBQVcsQ0FBQyxjQUFjLENBQy9ELFlBQVksQ0FDYjtRQUNDLENBQUMsQ0FBQyxtQkFBQyxXQUFrQixFQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDN0QsWUFBWSxDQUNiLENBQUM7SUFDTixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQzNDOzs7Ozs7QUFFRCxNQUFNLGlCQUFvQixFQUFFLFFBQVEsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ2hELE1BQU0sbUJBQUMsVUFBUyxNQUFTLEVBQUUsWUFBcUI7UUFDOUMsdUJBQU0sUUFBUSxHQUFzQixFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUMvRCx3QkFBd0IsQ0FBSSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQ00sRUFBQztDQUMxRDs7Ozs7O0FBRUQsTUFBTSwrQkFBa0MsUUFBVztJQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUN4Qzs7Ozs7O0FBRUQsTUFBTSw0QkFBK0IsUUFBVztJQUM5QyxNQUFNLENBQUMsT0FBTyxDQUNaLHdCQUF3QixFQUN4QixvQkFBb0IsQ0FDckIsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUNiOzs7Ozs7QUFJRCxNQUFNLDZCQUFnQyxRQUFXO0lBQy9DLHVCQUFNLFFBQVEsR0FBdUIsRUFBRSxDQUFDO0lBRXhDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDO0tBQ3ZDO0lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztDQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmNvbnN0IE1FVEFEQVRBX0tFWSA9ICdfX0BuZ3J4L2VmZmVjdHNfXyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWZmZWN0TWV0YWRhdGE8VD4ge1xuICBwcm9wZXJ0eU5hbWU6IGtleW9mIFQ7XG4gIGRpc3BhdGNoOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBnZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4oc291cmNlUHJvdG86IFQpOiBBcnJheTxFZmZlY3RNZXRhZGF0YTxUPj4ge1xuICByZXR1cm4gc291cmNlUHJvdG8uY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoTUVUQURBVEFfS0VZKVxuICAgID8gKHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yIGFzIGFueSlbTUVUQURBVEFfS0VZXVxuICAgIDogW107XG59XG5cbmZ1bmN0aW9uIHNldEVmZmVjdE1ldGFkYXRhRW50cmllczxUPihcbiAgc291cmNlUHJvdG86IFQsXG4gIGVudHJpZXM6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PlxuKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yID0gc291cmNlUHJvdG8uY29uc3RydWN0b3I7XG4gIGNvbnN0IG1ldGE6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PiA9IGNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KFxuICAgIE1FVEFEQVRBX0tFWVxuICApXG4gICAgPyAoY29uc3RydWN0b3IgYXMgYW55KVtNRVRBREFUQV9LRVldXG4gICAgOiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0b3IsIE1FVEFEQVRBX0tFWSwgeyB2YWx1ZTogW10gfSlbXG4gICAgICAgIE1FVEFEQVRBX0tFWVxuICAgICAgXTtcbiAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkobWV0YSwgZW50cmllcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFZmZlY3Q8VD4oeyBkaXNwYXRjaCA9IHRydWUgfSA9IHt9KTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBULCBwcm9wZXJ0eU5hbWU6IGtleW9mIFQpIHtcbiAgICBjb25zdCBtZXRhZGF0YTogRWZmZWN0TWV0YWRhdGE8VD4gPSB7IHByb3BlcnR5TmFtZSwgZGlzcGF0Y2ggfTtcbiAgICBzZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4odGFyZ2V0LCBbbWV0YWRhdGFdKTtcbiAgfSBhcyAodGFyZ2V0OiB7fSwgcHJvcGVydHlOYW1lOiBzdHJpbmcgfCBzeW1ib2wpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VyY2VGb3JJbnN0YW5jZTxUPihpbnN0YW5jZTogVCk6IFQge1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdXJjZU1ldGFkYXRhPFQ+KGluc3RhbmNlOiBUKTogQXJyYXk8RWZmZWN0TWV0YWRhdGE8VD4+IHtcbiAgcmV0dXJuIGNvbXBvc2UoXG4gICAgZ2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzLFxuICAgIGdldFNvdXJjZUZvckluc3RhbmNlXG4gICkoaW5zdGFuY2UpO1xufVxuXG5leHBvcnQgdHlwZSBFZmZlY3RzTWV0YWRhdGE8VD4gPSB7IFtrZXkgaW4ga2V5b2YgVF0/OiB7IGRpc3BhdGNoOiBib29sZWFuIH0gfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVmZmVjdHNNZXRhZGF0YTxUPihpbnN0YW5jZTogVCk6IEVmZmVjdHNNZXRhZGF0YTxUPiB7XG4gIGNvbnN0IG1ldGFkYXRhOiBFZmZlY3RzTWV0YWRhdGE8VD4gPSB7fTtcblxuICBmb3IgKGNvbnN0IHsgcHJvcGVydHlOYW1lLCBkaXNwYXRjaCB9IG9mIGdldFNvdXJjZU1ldGFkYXRhKGluc3RhbmNlKSkge1xuICAgIG1ldGFkYXRhW3Byb3BlcnR5TmFtZV0gPSB7IGRpc3BhdGNoIH07XG4gIH1cblxuICByZXR1cm4gbWV0YWRhdGE7XG59XG4iXX0=