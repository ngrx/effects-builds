/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { compose } from '@ngrx/store';
/** @type {?} */
const METADATA_KEY = '__@ngrx/effects__';
/**
 * @record
 * @template T
 */
export function EffectMetadata() { }
/** @type {?} */
EffectMetadata.prototype.propertyName;
/** @type {?} */
EffectMetadata.prototype.dispatch;
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
    /** @type {?} */
    const constructor = sourceProto.constructor;
    /** @type {?} */
    const meta = constructor.hasOwnProperty(METADATA_KEY)
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
    // Once TS is >= 2.8 replace with <Key extends Extract<keyof T, string>>
    // for propertyName.
    return /** @type {?} */ (function (target, propertyName) {
        /** @type {?} */
        const metadata = { propertyName, dispatch };
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
/** @typedef {?} */
var EffectsMetadata;
export { EffectsMetadata };
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getEffectsMetadata(instance) {
    /** @type {?} */
    const metadata = {};
    for (const { propertyName, dispatch } of getSourceMetadata(instance)) {
        metadata[propertyName] = { dispatch };
    }
    return metadata;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFdEMsTUFBTSxZQUFZLEdBQUcsbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVF6QyxrQ0FBcUMsV0FBYztJQUNqRCxPQUFPLFdBQVcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUN6RCxDQUFDLENBQUMsbUJBQUMsV0FBVyxDQUFDLFdBQWtCLEVBQUMsQ0FBQyxZQUFZLENBQUM7UUFDaEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztDQUNSOzs7Ozs7O0FBRUQsa0NBQ0UsV0FBYyxFQUNkLE9BQWlDOztJQUVqQyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDOztJQUM1QyxNQUFNLElBQUksR0FBNkIsV0FBVyxDQUFDLGNBQWMsQ0FDL0QsWUFBWSxDQUNiO1FBQ0MsQ0FBQyxDQUFDLG1CQUFDLFdBQWtCLEVBQUMsQ0FBQyxZQUFZLENBQUM7UUFDcEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUM3RCxZQUFZLENBQ2IsQ0FBQztJQUNOLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDM0M7Ozs7OztBQUVELE1BQU0saUJBQW9CLEVBQUUsUUFBUSxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUU7OztJQUdoRCx5QkFBTyxVQUFTLE1BQVMsRUFBRSxZQUFvQjs7UUFDN0MsTUFBTSxRQUFRLEdBQXNCLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQy9ELHdCQUF3QixDQUFJLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDTSxFQUFDO0NBQzFEOzs7Ozs7QUFFRCxNQUFNLCtCQUFrQyxRQUFXO0lBQ2pELE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUN4Qzs7Ozs7O0FBRUQsTUFBTSw0QkFBK0IsUUFBVztJQUM5QyxPQUFPLE9BQU8sQ0FDWix3QkFBd0IsRUFDeEIsb0JBQW9CLENBQ3JCLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDYjs7Ozs7Ozs7O0FBTUQsTUFBTSw2QkFBZ0MsUUFBVzs7SUFDL0MsTUFBTSxRQUFRLEdBQXVCLEVBQUUsQ0FBQztJQUV4QyxLQUFLLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEUsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUM7S0FDdkM7SUFFRCxPQUFPLFFBQVEsQ0FBQztDQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmNvbnN0IE1FVEFEQVRBX0tFWSA9ICdfX0BuZ3J4L2VmZmVjdHNfXyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWZmZWN0TWV0YWRhdGE8VD4ge1xuICAvLyBPbmNlIFRTIGlzID49IDIuOCByZXBsYWNlIHdpdGggPEtleSBleHRlbmRzIEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPj5cbiAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XG4gIGRpc3BhdGNoOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBnZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4oc291cmNlUHJvdG86IFQpOiBBcnJheTxFZmZlY3RNZXRhZGF0YTxUPj4ge1xuICByZXR1cm4gc291cmNlUHJvdG8uY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoTUVUQURBVEFfS0VZKVxuICAgID8gKHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yIGFzIGFueSlbTUVUQURBVEFfS0VZXVxuICAgIDogW107XG59XG5cbmZ1bmN0aW9uIHNldEVmZmVjdE1ldGFkYXRhRW50cmllczxUPihcbiAgc291cmNlUHJvdG86IFQsXG4gIGVudHJpZXM6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PlxuKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yID0gc291cmNlUHJvdG8uY29uc3RydWN0b3I7XG4gIGNvbnN0IG1ldGE6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PiA9IGNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KFxuICAgIE1FVEFEQVRBX0tFWVxuICApXG4gICAgPyAoY29uc3RydWN0b3IgYXMgYW55KVtNRVRBREFUQV9LRVldXG4gICAgOiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0b3IsIE1FVEFEQVRBX0tFWSwgeyB2YWx1ZTogW10gfSlbXG4gICAgICAgIE1FVEFEQVRBX0tFWVxuICAgICAgXTtcbiAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkobWV0YSwgZW50cmllcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFZmZlY3Q8VD4oeyBkaXNwYXRjaCA9IHRydWUgfSA9IHt9KTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAvLyBPbmNlIFRTIGlzID49IDIuOCByZXBsYWNlIHdpdGggPEtleSBleHRlbmRzIEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPj5cbiAgLy8gZm9yIHByb3BlcnR5TmFtZS5cbiAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogVCwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtZXRhZGF0YTogRWZmZWN0TWV0YWRhdGE8VD4gPSB7IHByb3BlcnR5TmFtZSwgZGlzcGF0Y2ggfTtcbiAgICBzZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4odGFyZ2V0LCBbbWV0YWRhdGFdKTtcbiAgfSBhcyAodGFyZ2V0OiB7fSwgcHJvcGVydHlOYW1lOiBzdHJpbmcgfCBzeW1ib2wpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VyY2VGb3JJbnN0YW5jZTxUPihpbnN0YW5jZTogVCk6IFQge1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdXJjZU1ldGFkYXRhPFQ+KGluc3RhbmNlOiBUKTogQXJyYXk8RWZmZWN0TWV0YWRhdGE8VD4+IHtcbiAgcmV0dXJuIGNvbXBvc2UoXG4gICAgZ2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzLFxuICAgIGdldFNvdXJjZUZvckluc3RhbmNlXG4gICkoaW5zdGFuY2UpO1xufVxuXG4vLyBPbmNlIFRTIGlzID49IDIuOCByZXBsYWNlIHdpdGhcbi8vIHtba2V5IGluIDxLZXkgZXh0ZW5kcyBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz4+XT86ICB7IGRpc3BhdGNoOiBib29sZWFuIH0gfTtcbmV4cG9ydCB0eXBlIEVmZmVjdHNNZXRhZGF0YTxUPiA9IHsgW2tleTogc3RyaW5nXTogeyBkaXNwYXRjaDogYm9vbGVhbiB9IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3RzTWV0YWRhdGE8VD4oaW5zdGFuY2U6IFQpOiBFZmZlY3RzTWV0YWRhdGE8VD4ge1xuICBjb25zdCBtZXRhZGF0YTogRWZmZWN0c01ldGFkYXRhPFQ+ID0ge307XG5cbiAgZm9yIChjb25zdCB7IHByb3BlcnR5TmFtZSwgZGlzcGF0Y2ggfSBvZiBnZXRTb3VyY2VNZXRhZGF0YShpbnN0YW5jZSkpIHtcbiAgICBtZXRhZGF0YVtwcm9wZXJ0eU5hbWVdID0geyBkaXNwYXRjaCB9O1xuICB9XG5cbiAgcmV0dXJuIG1ldGFkYXRhO1xufVxuIl19