/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/src/effects_metadata.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getCreateEffectMetadata } from './effect_creator';
import { getEffectDecoratorMetadata } from './effect_decorator';
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getEffectsMetadata(instance) {
    return getSourceMetadata(instance).reduce((/**
     * @param {?} acc
     * @param {?} __1
     * @return {?}
     */
    (acc, { propertyName, dispatch, resubscribeOnError }) => {
        acc[propertyName] = { dispatch, resubscribeOnError };
        return acc;
    }), {});
}
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getSourceMetadata(instance) {
    /** @type {?} */
    const effects = [
        getEffectDecoratorMetadata,
        getCreateEffectMetadata,
    ];
    return effects.reduce((/**
     * @param {?} sources
     * @param {?} source
     * @return {?}
     */
    (sources, source) => sources.concat(source(instance))), []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7QUFFaEUsTUFBTSxVQUFVLGtCQUFrQixDQUFJLFFBQVc7SUFDL0MsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNOzs7OztJQUN2QyxDQUNFLEdBQXVCLEVBQ3ZCLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxFQUM5QyxFQUFFO1FBQ0YsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLENBQUM7UUFDckQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEdBQ0QsRUFBRSxDQUNILENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUksUUFBVzs7VUFDeEMsT0FBTyxHQUFnRDtRQUMzRCwwQkFBMEI7UUFDMUIsdUJBQXVCO0tBQ3hCO0lBRUQsT0FBTyxPQUFPLENBQUMsTUFBTTs7Ozs7SUFDbkIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUNyRCxFQUFFLENBQ0gsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZmZlY3RNZXRhZGF0YSwgRWZmZWN0c01ldGFkYXRhIH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0Q3JlYXRlRWZmZWN0TWV0YWRhdGEgfSBmcm9tICcuL2VmZmVjdF9jcmVhdG9yJztcbmltcG9ydCB7IGdldEVmZmVjdERlY29yYXRvck1ldGFkYXRhIH0gZnJvbSAnLi9lZmZlY3RfZGVjb3JhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVmZmVjdHNNZXRhZGF0YTxUPihpbnN0YW5jZTogVCk6IEVmZmVjdHNNZXRhZGF0YTxUPiB7XG4gIHJldHVybiBnZXRTb3VyY2VNZXRhZGF0YShpbnN0YW5jZSkucmVkdWNlKFxuICAgIChcbiAgICAgIGFjYzogRWZmZWN0c01ldGFkYXRhPFQ+LFxuICAgICAgeyBwcm9wZXJ0eU5hbWUsIGRpc3BhdGNoLCByZXN1YnNjcmliZU9uRXJyb3IgfVxuICAgICkgPT4ge1xuICAgICAgYWNjW3Byb3BlcnR5TmFtZV0gPSB7IGRpc3BhdGNoLCByZXN1YnNjcmliZU9uRXJyb3IgfTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291cmNlTWV0YWRhdGE8VD4oaW5zdGFuY2U6IFQpOiBFZmZlY3RNZXRhZGF0YTxUPltdIHtcbiAgY29uc3QgZWZmZWN0czogQXJyYXk8KGluc3RhbmNlOiBUKSA9PiBFZmZlY3RNZXRhZGF0YTxUPltdPiA9IFtcbiAgICBnZXRFZmZlY3REZWNvcmF0b3JNZXRhZGF0YSxcbiAgICBnZXRDcmVhdGVFZmZlY3RNZXRhZGF0YSxcbiAgXTtcblxuICByZXR1cm4gZWZmZWN0cy5yZWR1Y2U8RWZmZWN0TWV0YWRhdGE8VD5bXT4oXG4gICAgKHNvdXJjZXMsIHNvdXJjZSkgPT4gc291cmNlcy5jb25jYXQoc291cmNlKGluc3RhbmNlKSksXG4gICAgW11cbiAgKTtcbn1cbiJdfQ==