/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/src/effect_creator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DEFAULT_EFFECT_CONFIG, CREATE_EFFECT_METADATA_KEY, } from './models';
/**
 * \@description
 * Creates an effect from an `Observable` and an `EffectConfig`.
 *
 * \@usageNotes
 *
 * ** Mapping to a different action **
 * ```ts
 * effectName$ = createEffect(
 *   () => this.actions$.pipe(
 *     ofType(FeatureActions.actionOne),
 *     map(() => FeatureActions.actionTwo())
 *   )
 * );
 * ```
 *
 *  ** Non-dispatching effects **
 * ```ts
 * effectName$ = createEffect(
 *   () => this.actions$.pipe(
 *     ofType(FeatureActions.actionOne),
 *     tap(() => console.log('Action One Dispatched'))
 *   ),
 *   { dispatch: false }
 *   // FeatureActions.actionOne is not dispatched
 * );
 * ```
 * @template C, DT, OT, R
 * @param {?} source A function which returns an `Observable`.
 * @param {?=} config A `Partial<EffectConfig>` to configure the effect.  By default, `dispatch` is true and `resubscribeOnError` is true.
 * @return {?} If `EffectConfig`#`dispatch` is true, returns `Observable<Action>`.  Else, returns `Observable<unknown>`.
 *
 */
export function createEffect(source, config) {
    /** @type {?} */
    const effect = source();
    /** @type {?} */
    const value = Object.assign(Object.assign({}, DEFAULT_EFFECT_CONFIG), config);
    Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
        value,
    });
    return (/** @type {?} */ (effect));
}
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getCreateEffectMetadata(instance) {
    /** @type {?} */
    const propertyNames = (/** @type {?} */ (Object.getOwnPropertyNames(instance)));
    /** @type {?} */
    const metadata = propertyNames
        .filter((/**
     * @param {?} propertyName
     * @return {?}
     */
    propertyName => instance[propertyName] &&
        instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY)))
        .map((/**
     * @param {?} propertyName
     * @return {?}
     */
    propertyName => {
        /** @type {?} */
        const metaData = ((/** @type {?} */ (instance[propertyName])))[CREATE_EFFECT_METADATA_KEY];
        return Object.assign({ propertyName }, metaData);
    }));
    return metadata;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2NyZWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9jcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUdMLHFCQUFxQixFQUVyQiwwQkFBMEIsR0FDM0IsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ2xCLE1BQU0sVUFBVSxZQUFZLENBSzFCLE1BQWUsRUFBRSxNQUFtQjs7VUFDOUIsTUFBTSxHQUFHLE1BQU0sRUFBRTs7VUFDakIsS0FBSyxtQ0FDTixxQkFBcUIsR0FDckIsTUFBTSxDQUNWO0lBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDeEQsS0FBSztLQUNOLENBQUMsQ0FBQztJQUNILE9BQU8sbUJBQUEsTUFBTSxFQUF3QyxDQUFDO0FBQ3hELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FFckMsUUFBVzs7VUFDTCxhQUFhLEdBQUcsbUJBQUEsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUFrQjs7VUFFdEUsUUFBUSxHQUF3QixhQUFhO1NBQ2hELE1BQU07Ozs7SUFDTCxZQUFZLENBQUMsRUFBRSxDQUNiLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEIsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxFQUNwRTtTQUNBLEdBQUc7Ozs7SUFBQyxZQUFZLENBQUMsRUFBRTs7Y0FDWixRQUFRLEdBQUcsQ0FBQyxtQkFBQSxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQU8sQ0FBQyxDQUM5QywwQkFBMEIsQ0FDM0I7UUFDRCx1QkFDRSxZQUFZLElBQ1QsUUFBUSxFQUNYO0lBQ0osQ0FBQyxFQUFDO0lBRUosT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIEVmZmVjdE1ldGFkYXRhLFxuICBFZmZlY3RDb25maWcsXG4gIERFRkFVTFRfRUZGRUNUX0NPTkZJRyxcbiAgQ3JlYXRlRWZmZWN0TWV0YWRhdGEsXG4gIENSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZLFxufSBmcm9tICcuL21vZGVscyc7XG5cbnR5cGUgRGlzcGF0Y2hUeXBlPFQ+ID0gVCBleHRlbmRzIHsgZGlzcGF0Y2g6IGluZmVyIFUgfSA/IFUgOiB0cnVlO1xudHlwZSBPYnNlcnZhYmxlVHlwZTxULCBPcmlnaW5hbFR5cGU+ID0gVCBleHRlbmRzIGZhbHNlID8gT3JpZ2luYWxUeXBlIDogQWN0aW9uO1xuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZXMgYW4gZWZmZWN0IGZyb20gYW4gYE9ic2VydmFibGVgIGFuZCBhbiBgRWZmZWN0Q29uZmlnYC5cbiAqXG4gKiBAcGFyYW0gc291cmNlIEEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBgT2JzZXJ2YWJsZWAuXG4gKiBAcGFyYW0gY29uZmlnIEEgYFBhcnRpYWw8RWZmZWN0Q29uZmlnPmAgdG8gY29uZmlndXJlIHRoZSBlZmZlY3QuICBCeSBkZWZhdWx0LCBgZGlzcGF0Y2hgIGlzIHRydWUgYW5kIGByZXN1YnNjcmliZU9uRXJyb3JgIGlzIHRydWUuXG4gKiBAcmV0dXJucyBJZiBgRWZmZWN0Q29uZmlnYCNgZGlzcGF0Y2hgIGlzIHRydWUsIHJldHVybnMgYE9ic2VydmFibGU8QWN0aW9uPmAuICBFbHNlLCByZXR1cm5zIGBPYnNlcnZhYmxlPHVua25vd24+YC5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICoqIE1hcHBpbmcgdG8gYSBkaWZmZXJlbnQgYWN0aW9uICoqXG4gKiBgYGB0c1xuICogZWZmZWN0TmFtZSQgPSBjcmVhdGVFZmZlY3QoXG4gKiAgICgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShcbiAqICAgICBvZlR5cGUoRmVhdHVyZUFjdGlvbnMuYWN0aW9uT25lKSxcbiAqICAgICBtYXAoKCkgPT4gRmVhdHVyZUFjdGlvbnMuYWN0aW9uVHdvKCkpXG4gKiAgIClcbiAqICk7XG4gKiBgYGBcbiAqXG4gKiAgKiogTm9uLWRpc3BhdGNoaW5nIGVmZmVjdHMgKipcbiAqIGBgYHRzXG4gKiBlZmZlY3ROYW1lJCA9IGNyZWF0ZUVmZmVjdChcbiAqICAgKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKFxuICogICAgIG9mVHlwZShGZWF0dXJlQWN0aW9ucy5hY3Rpb25PbmUpLFxuICogICAgIHRhcCgoKSA9PiBjb25zb2xlLmxvZygnQWN0aW9uIE9uZSBEaXNwYXRjaGVkJykpXG4gKiAgICksXG4gKiAgIHsgZGlzcGF0Y2g6IGZhbHNlIH1cbiAqICAgLy8gRmVhdHVyZUFjdGlvbnMuYWN0aW9uT25lIGlzIG5vdCBkaXNwYXRjaGVkXG4gKiApO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZmZlY3Q8XG4gIEMgZXh0ZW5kcyBFZmZlY3RDb25maWcsXG4gIERUIGV4dGVuZHMgRGlzcGF0Y2hUeXBlPEM+LFxuICBPVCBleHRlbmRzIE9ic2VydmFibGVUeXBlPERULCBPVD4sXG4gIFIgZXh0ZW5kcyBPYnNlcnZhYmxlPE9UPiB8ICgoLi4uYXJnczogYW55W10pID0+IE9ic2VydmFibGU8T1Q+KVxuPihzb3VyY2U6ICgpID0+IFIsIGNvbmZpZz86IFBhcnRpYWw8Qz4pOiBSICYgQ3JlYXRlRWZmZWN0TWV0YWRhdGEge1xuICBjb25zdCBlZmZlY3QgPSBzb3VyY2UoKTtcbiAgY29uc3QgdmFsdWU6IEVmZmVjdENvbmZpZyA9IHtcbiAgICAuLi5ERUZBVUxUX0VGRkVDVF9DT05GSUcsXG4gICAgLi4uY29uZmlnLCAvLyBPdmVycmlkZXMgYW55IGRlZmF1bHRzIGlmIHZhbHVlcyBhcmUgcHJvdmlkZWRcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVmZmVjdCwgQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVksIHtcbiAgICB2YWx1ZSxcbiAgfSk7XG4gIHJldHVybiBlZmZlY3QgYXMgdHlwZW9mIGVmZmVjdCAmIENyZWF0ZUVmZmVjdE1ldGFkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRlRWZmZWN0TWV0YWRhdGE8XG4gIFQgZXh0ZW5kcyB7IFtwcm9wcyBpbiBrZXlvZiBUXTogT2JqZWN0IH1cbj4oaW5zdGFuY2U6IFQpOiBFZmZlY3RNZXRhZGF0YTxUPltdIHtcbiAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGluc3RhbmNlKSBhcyBBcnJheTxrZXlvZiBUPjtcblxuICBjb25zdCBtZXRhZGF0YTogRWZmZWN0TWV0YWRhdGE8VD5bXSA9IHByb3BlcnR5TmFtZXNcbiAgICAuZmlsdGVyKFxuICAgICAgcHJvcGVydHlOYW1lID0+XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5TmFtZV0gJiZcbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHlOYW1lXS5oYXNPd25Qcm9wZXJ0eShDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWSlcbiAgICApXG4gICAgLm1hcChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgY29uc3QgbWV0YURhdGEgPSAoaW5zdGFuY2VbcHJvcGVydHlOYW1lXSBhcyBhbnkpW1xuICAgICAgICBDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWVxuICAgICAgXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgLi4ubWV0YURhdGEsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIHJldHVybiBtZXRhZGF0YTtcbn1cbiJdfQ==