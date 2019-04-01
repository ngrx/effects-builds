/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { compose } from '@ngrx/store';
import { getSourceForInstance } from './utils';
/** @type {?} */
const METADATA_KEY = '__@ngrx/effects__';
/**
 * @template T
 * @param {?=} __0
 * @return {?}
 */
export function Effect({ dispatch = true } = {}) {
    return (/** @type {?} */ ((/**
     * @template K
     * @param {?} target
     * @param {?} propertyName
     * @return {?}
     */
    function (target, propertyName) {
        /** @type {?} */
        const metadata = { propertyName, dispatch };
        setEffectMetadataEntries(target, [metadata]);
    })));
}
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getEffectDecoratorMetadata(instance) {
    /** @type {?} */
    const effectsDecorators = compose(getEffectMetadataEntries, getSourceForInstance)(instance);
    return effectsDecorators;
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
        ? ((/** @type {?} */ (constructor)))[METADATA_KEY]
        : Object.defineProperty(constructor, METADATA_KEY, { value: [] })[METADATA_KEY];
    Array.prototype.push.apply(meta, entries);
}
/**
 * @template T
 * @param {?} sourceProto
 * @return {?}
 */
function getEffectMetadataEntries(sourceProto) {
    return sourceProto.constructor.hasOwnProperty(METADATA_KEY)
        ? ((/** @type {?} */ (sourceProto.constructor)))[METADATA_KEY]
        : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2RlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0X2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxTQUFTLENBQUM7O01BRXpDLFlBQVksR0FBRyxtQkFBbUI7Ozs7OztBQUV4QyxNQUFNLFVBQVUsTUFBTSxDQUFJLEVBQUUsUUFBUSxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDaEQsT0FBTzs7Ozs7O0lBQUEsVUFDTCxNQUFTLEVBQ1QsWUFBZTs7Y0FFVCxRQUFRLEdBQXNCLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRTtRQUM5RCx3QkFBd0IsQ0FBSSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUMsR0FBdUQsQ0FBQztBQUMzRCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsMEJBQTBCLENBQ3hDLFFBQVc7O1VBRUwsaUJBQWlCLEdBQXdCLE9BQU8sQ0FDcEQsd0JBQXdCLEVBQ3hCLG9CQUFvQixDQUNyQixDQUFDLFFBQVEsQ0FBQztJQUVYLE9BQU8saUJBQWlCLENBQUM7QUFDM0IsQ0FBQzs7Ozs7OztBQUVELFNBQVMsd0JBQXdCLENBQy9CLFdBQWMsRUFDZCxPQUE0Qjs7VUFFdEIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXOztVQUNyQyxJQUFJLEdBQTZCLFdBQVcsQ0FBQyxjQUFjLENBQy9ELFlBQVksQ0FDYjtRQUNDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLFdBQVcsRUFBTyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDN0QsWUFBWSxDQUNiO0lBQ0wsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1QyxDQUFDOzs7Ozs7QUFFRCxTQUFTLHdCQUF3QixDQUFJLFdBQWM7SUFDakQsT0FBTyxXQUFXLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUMsbUJBQUEsV0FBVyxDQUFDLFdBQVcsRUFBTyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hELENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdE1ldGFkYXRhIH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0U291cmNlRm9ySW5zdGFuY2UgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgTUVUQURBVEFfS0VZID0gJ19fQG5ncngvZWZmZWN0c19fJztcblxuZXhwb3J0IGZ1bmN0aW9uIEVmZmVjdDxUPih7IGRpc3BhdGNoID0gdHJ1ZSB9ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiBmdW5jdGlvbjxLIGV4dGVuZHMgRXh0cmFjdDxrZXlvZiBULCBzdHJpbmc+PihcbiAgICB0YXJnZXQ6IFQsXG4gICAgcHJvcGVydHlOYW1lOiBLXG4gICkge1xuICAgIGNvbnN0IG1ldGFkYXRhOiBFZmZlY3RNZXRhZGF0YTxUPiA9IHsgcHJvcGVydHlOYW1lLCBkaXNwYXRjaCB9O1xuICAgIHNldEVmZmVjdE1ldGFkYXRhRW50cmllczxUPih0YXJnZXQsIFttZXRhZGF0YV0pO1xuICB9IGFzICh0YXJnZXQ6IHt9LCBwcm9wZXJ0eU5hbWU6IHN0cmluZyB8IHN5bWJvbCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVmZmVjdERlY29yYXRvck1ldGFkYXRhPFQ+KFxuICBpbnN0YW5jZTogVFxuKTogRWZmZWN0TWV0YWRhdGE8VD5bXSB7XG4gIGNvbnN0IGVmZmVjdHNEZWNvcmF0b3JzOiBFZmZlY3RNZXRhZGF0YTxUPltdID0gY29tcG9zZShcbiAgICBnZXRFZmZlY3RNZXRhZGF0YUVudHJpZXMsXG4gICAgZ2V0U291cmNlRm9ySW5zdGFuY2VcbiAgKShpbnN0YW5jZSk7XG5cbiAgcmV0dXJuIGVmZmVjdHNEZWNvcmF0b3JzO1xufVxuXG5mdW5jdGlvbiBzZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4oXG4gIHNvdXJjZVByb3RvOiBULFxuICBlbnRyaWVzOiBFZmZlY3RNZXRhZGF0YTxUPltdXG4pIHtcbiAgY29uc3QgY29uc3RydWN0b3IgPSBzb3VyY2VQcm90by5jb25zdHJ1Y3RvcjtcbiAgY29uc3QgbWV0YTogQXJyYXk8RWZmZWN0TWV0YWRhdGE8VD4+ID0gY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoXG4gICAgTUVUQURBVEFfS0VZXG4gIClcbiAgICA/IChjb25zdHJ1Y3RvciBhcyBhbnkpW01FVEFEQVRBX0tFWV1cbiAgICA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3RvciwgTUVUQURBVEFfS0VZLCB7IHZhbHVlOiBbXSB9KVtcbiAgICAgICAgTUVUQURBVEFfS0VZXG4gICAgICBdO1xuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShtZXRhLCBlbnRyaWVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzPFQ+KHNvdXJjZVByb3RvOiBUKTogRWZmZWN0TWV0YWRhdGE8VD5bXSB7XG4gIHJldHVybiBzb3VyY2VQcm90by5jb25zdHJ1Y3Rvci5oYXNPd25Qcm9wZXJ0eShNRVRBREFUQV9LRVkpXG4gICAgPyAoc291cmNlUHJvdG8uY29uc3RydWN0b3IgYXMgYW55KVtNRVRBREFUQV9LRVldXG4gICAgOiBbXTtcbn1cbiJdfQ==