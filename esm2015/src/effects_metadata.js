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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0Qyx1QkFBTSxZQUFZLEdBQUcsbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pDLGtDQUFxQyxXQUFjO0lBQ2pELE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDekQsQ0FBQyxDQUFDLG1CQUFDLFdBQVcsQ0FBQyxXQUFrQixFQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hELENBQUMsQ0FBQyxFQUFFLENBQUM7Q0FDUjs7Ozs7OztBQUVELGtDQUNFLFdBQWMsRUFDZCxPQUFpQztJQUVqQyx1QkFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztJQUM1Qyx1QkFBTSxJQUFJLEdBQTZCLFdBQVcsQ0FBQyxjQUFjLENBQy9ELFlBQVksQ0FDYjtRQUNDLENBQUMsQ0FBQyxtQkFBQyxXQUFrQixFQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDN0QsWUFBWSxDQUNiLENBQUM7SUFDTixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQzNDOzs7Ozs7QUFFRCxNQUFNLGlCQUFvQixFQUFFLFFBQVEsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ2hELE1BQU0sbUJBQUMsVUFBUyxNQUFTLEVBQUUsWUFBcUI7UUFDOUMsdUJBQU0sUUFBUSxHQUFzQixFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUMvRCx3QkFBd0IsQ0FBSSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQ00sRUFBQztDQUMxRDs7Ozs7O0FBRUQsTUFBTSwrQkFBa0MsUUFBVztJQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUN4Qzs7Ozs7O0FBRUQsTUFBTSw0QkFBK0IsUUFBVztJQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDMUU7Ozs7OztBQUlELE1BQU0sNkJBQWdDLFFBQVc7SUFDL0MsdUJBQU0sUUFBUSxHQUF1QixFQUFFLENBQUM7SUFFeEMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUM7S0FDdkM7SUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDO0NBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuY29uc3QgTUVUQURBVEFfS0VZID0gJ19fQG5ncngvZWZmZWN0c19fJztcblxuZXhwb3J0IGludGVyZmFjZSBFZmZlY3RNZXRhZGF0YTxUPiB7XG4gIHByb3BlcnR5TmFtZToga2V5b2YgVDtcbiAgZGlzcGF0Y2g6IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGdldEVmZmVjdE1ldGFkYXRhRW50cmllczxUPihzb3VyY2VQcm90bzogVCk6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PiB7XG4gIHJldHVybiBzb3VyY2VQcm90by5jb25zdHJ1Y3Rvci5oYXNPd25Qcm9wZXJ0eShNRVRBREFUQV9LRVkpXG4gICAgPyAoc291cmNlUHJvdG8uY29uc3RydWN0b3IgYXMgYW55KVtNRVRBREFUQV9LRVldXG4gICAgOiBbXTtcbn1cblxuZnVuY3Rpb24gc2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzPFQ+KFxuICBzb3VyY2VQcm90bzogVCxcbiAgZW50cmllczogQXJyYXk8RWZmZWN0TWV0YWRhdGE8VD4+XG4pIHtcbiAgY29uc3QgY29uc3RydWN0b3IgPSBzb3VyY2VQcm90by5jb25zdHJ1Y3RvcjtcbiAgY29uc3QgbWV0YTogQXJyYXk8RWZmZWN0TWV0YWRhdGE8VD4+ID0gY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoXG4gICAgTUVUQURBVEFfS0VZXG4gIClcbiAgICA/IChjb25zdHJ1Y3RvciBhcyBhbnkpW01FVEFEQVRBX0tFWV1cbiAgICA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3RvciwgTUVUQURBVEFfS0VZLCB7IHZhbHVlOiBbXSB9KVtcbiAgICAgICAgTUVUQURBVEFfS0VZXG4gICAgICBdO1xuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShtZXRhLCBlbnRyaWVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVmZmVjdDxUPih7IGRpc3BhdGNoID0gdHJ1ZSB9ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6IFQsIHByb3BlcnR5TmFtZToga2V5b2YgVCkge1xuICAgIGNvbnN0IG1ldGFkYXRhOiBFZmZlY3RNZXRhZGF0YTxUPiA9IHsgcHJvcGVydHlOYW1lLCBkaXNwYXRjaCB9O1xuICAgIHNldEVmZmVjdE1ldGFkYXRhRW50cmllczxUPih0YXJnZXQsIFttZXRhZGF0YV0pO1xuICB9IGFzICh0YXJnZXQ6IHt9LCBwcm9wZXJ0eU5hbWU6IHN0cmluZyB8IHN5bWJvbCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdXJjZUZvckluc3RhbmNlPFQ+KGluc3RhbmNlOiBUKTogVCB7XG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291cmNlTWV0YWRhdGE8VD4oaW5zdGFuY2U6IFQpOiBBcnJheTxFZmZlY3RNZXRhZGF0YTxUPj4ge1xuICByZXR1cm4gY29tcG9zZShnZXRFZmZlY3RNZXRhZGF0YUVudHJpZXMsIGdldFNvdXJjZUZvckluc3RhbmNlKShpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCB0eXBlIEVmZmVjdHNNZXRhZGF0YTxUPiA9IHsgW2tleSBpbiBrZXlvZiBUXT86IHsgZGlzcGF0Y2g6IGJvb2xlYW4gfSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWZmZWN0c01ldGFkYXRhPFQ+KGluc3RhbmNlOiBUKTogRWZmZWN0c01ldGFkYXRhPFQ+IHtcbiAgY29uc3QgbWV0YWRhdGE6IEVmZmVjdHNNZXRhZGF0YTxUPiA9IHt9O1xuXG4gIGZvciAoY29uc3QgeyBwcm9wZXJ0eU5hbWUsIGRpc3BhdGNoIH0gb2YgZ2V0U291cmNlTWV0YWRhdGEoaW5zdGFuY2UpKSB7XG4gICAgbWV0YWRhdGFbcHJvcGVydHlOYW1lXSA9IHsgZGlzcGF0Y2ggfTtcbiAgfVxuXG4gIHJldHVybiBtZXRhZGF0YTtcbn1cbiJdfQ==