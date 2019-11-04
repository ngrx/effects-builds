/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { compose } from '@ngrx/store';
import { getSourceForInstance } from './utils';
/** @type {?} */
const METADATA_KEY = '__@ngrx/effects__';
/**
 * @param {?=} __0
 * @return {?}
 */
export function Effect({ dispatch = true, resubscribeOnError = true, } = {}) {
    return (/**
     * @template T, K
     * @param {?} target
     * @param {?} propertyName
     * @return {?}
     */
    function (target, propertyName) {
        // Right now both createEffect and @Effect decorator set default values.
        // Ideally that should only be done in one place that aggregates that info,
        // for example in mergeEffects().
        /** @type {?} */
        const metadata = {
            propertyName,
            dispatch,
            resubscribeOnError,
        };
        setEffectMetadataEntries(target, [metadata]);
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2RlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0X2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxTQUFTLENBQUM7O01BRXpDLFlBQVksR0FBRyxtQkFBbUI7Ozs7O0FBRXhDLE1BQU0sVUFBVSxNQUFNLENBQUMsRUFDckIsUUFBUSxHQUFHLElBQUksRUFDZixrQkFBa0IsR0FBRyxJQUFJLE1BQ1QsRUFBRTtJQUNsQjs7Ozs7O0lBQU8sVUFDTCxNQUFTLEVBQ1QsWUFBZTs7Ozs7Y0FLVCxRQUFRLEdBQXNCO1lBQ2xDLFlBQVk7WUFDWixRQUFRO1lBQ1Isa0JBQWtCO1NBQ25CO1FBQ0Qsd0JBQXdCLENBQUksTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDLEVBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsMEJBQTBCLENBQ3hDLFFBQVc7O1VBRUwsaUJBQWlCLEdBQXdCLE9BQU8sQ0FDcEQsd0JBQXdCLEVBQ3hCLG9CQUFvQixDQUNyQixDQUFDLFFBQVEsQ0FBQztJQUVYLE9BQU8saUJBQWlCLENBQUM7QUFDM0IsQ0FBQzs7Ozs7OztBQUVELFNBQVMsd0JBQXdCLENBQy9CLFdBQWMsRUFDZCxPQUE0Qjs7VUFFdEIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXOztVQUNyQyxJQUFJLEdBQTZCLFdBQVcsQ0FBQyxjQUFjLENBQy9ELFlBQVksQ0FDYjtRQUNDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLFdBQVcsRUFBTyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDN0QsWUFBWSxDQUNiO0lBQ0wsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1QyxDQUFDOzs7Ozs7QUFFRCxTQUFTLHdCQUF3QixDQUMvQixXQUFjO0lBRWQsT0FBTyxXQUFXLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUMsbUJBQUEsV0FBVyxDQUFDLFdBQVcsRUFFdkIsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEVmZmVjdENvbmZpZywgRWZmZWN0TWV0YWRhdGEsIEVmZmVjdFByb3BlcnR5S2V5IH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0U291cmNlRm9ySW5zdGFuY2UgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgTUVUQURBVEFfS0VZID0gJ19fQG5ncngvZWZmZWN0c19fJztcblxuZXhwb3J0IGZ1bmN0aW9uIEVmZmVjdCh7XG4gIGRpc3BhdGNoID0gdHJ1ZSxcbiAgcmVzdWJzY3JpYmVPbkVycm9yID0gdHJ1ZSxcbn06IEVmZmVjdENvbmZpZyA9IHt9KSB7XG4gIHJldHVybiBmdW5jdGlvbjxUIGV4dGVuZHMgT2JqZWN0LCBLIGV4dGVuZHMgRWZmZWN0UHJvcGVydHlLZXk8VD4+KFxuICAgIHRhcmdldDogVCxcbiAgICBwcm9wZXJ0eU5hbWU6IEtcbiAgKSB7XG4gICAgLy8gUmlnaHQgbm93IGJvdGggY3JlYXRlRWZmZWN0IGFuZCBARWZmZWN0IGRlY29yYXRvciBzZXQgZGVmYXVsdCB2YWx1ZXMuXG4gICAgLy8gSWRlYWxseSB0aGF0IHNob3VsZCBvbmx5IGJlIGRvbmUgaW4gb25lIHBsYWNlIHRoYXQgYWdncmVnYXRlcyB0aGF0IGluZm8sXG4gICAgLy8gZm9yIGV4YW1wbGUgaW4gbWVyZ2VFZmZlY3RzKCkuXG4gICAgY29uc3QgbWV0YWRhdGE6IEVmZmVjdE1ldGFkYXRhPFQ+ID0ge1xuICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgZGlzcGF0Y2gsXG4gICAgICByZXN1YnNjcmliZU9uRXJyb3IsXG4gICAgfTtcbiAgICBzZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4odGFyZ2V0LCBbbWV0YWRhdGFdKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVmZmVjdERlY29yYXRvck1ldGFkYXRhPFQ+KFxuICBpbnN0YW5jZTogVFxuKTogRWZmZWN0TWV0YWRhdGE8VD5bXSB7XG4gIGNvbnN0IGVmZmVjdHNEZWNvcmF0b3JzOiBFZmZlY3RNZXRhZGF0YTxUPltdID0gY29tcG9zZShcbiAgICBnZXRFZmZlY3RNZXRhZGF0YUVudHJpZXMsXG4gICAgZ2V0U291cmNlRm9ySW5zdGFuY2VcbiAgKShpbnN0YW5jZSk7XG5cbiAgcmV0dXJuIGVmZmVjdHNEZWNvcmF0b3JzO1xufVxuXG5mdW5jdGlvbiBzZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VCBleHRlbmRzIG9iamVjdD4oXG4gIHNvdXJjZVByb3RvOiBULFxuICBlbnRyaWVzOiBFZmZlY3RNZXRhZGF0YTxUPltdXG4pIHtcbiAgY29uc3QgY29uc3RydWN0b3IgPSBzb3VyY2VQcm90by5jb25zdHJ1Y3RvcjtcbiAgY29uc3QgbWV0YTogQXJyYXk8RWZmZWN0TWV0YWRhdGE8VD4+ID0gY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoXG4gICAgTUVUQURBVEFfS0VZXG4gIClcbiAgICA/IChjb25zdHJ1Y3RvciBhcyBhbnkpW01FVEFEQVRBX0tFWV1cbiAgICA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3RvciwgTUVUQURBVEFfS0VZLCB7IHZhbHVlOiBbXSB9KVtcbiAgICAgICAgTUVUQURBVEFfS0VZXG4gICAgICBdO1xuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShtZXRhLCBlbnRyaWVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzPFQgZXh0ZW5kcyBvYmplY3Q+KFxuICBzb3VyY2VQcm90bzogVFxuKTogRWZmZWN0TWV0YWRhdGE8VD5bXSB7XG4gIHJldHVybiBzb3VyY2VQcm90by5jb25zdHJ1Y3Rvci5oYXNPd25Qcm9wZXJ0eShNRVRBREFUQV9LRVkpXG4gICAgPyAoc291cmNlUHJvdG8uY29uc3RydWN0b3IgYXMgdHlwZW9mIHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yICYge1xuICAgICAgICBbTUVUQURBVEFfS0VZXTogRWZmZWN0TWV0YWRhdGE8VD5bXTtcbiAgICAgIH0pW01FVEFEQVRBX0tFWV1cbiAgICA6IFtdO1xufVxuIl19