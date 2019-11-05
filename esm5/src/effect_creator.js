import * as tslib_1 from "tslib";
import { DEFAULT_EFFECT_CONFIG } from './models';
var CREATE_EFFECT_METADATA_KEY = '__@ngrx/effects_create__';
/**
 * @description
 * Creates an effect from an `Observable` and an `EffectConfig`.
 *
 * @param source A function which returns an `Observable`.
 * @param config A `Partial<EffectConfig>` to configure the effect.  By default, `dispatch` is true and `resubscribeOnError` is true.
 * @returns If `EffectConfig`#`dispatch` is true, returns `Observable<Action>`.  Else, returns `Observable<unknown>`.
 *
 * @usageNotes
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
 */
export function createEffect(source, config) {
    var effect = source();
    var value = tslib_1.__assign({}, DEFAULT_EFFECT_CONFIG, config);
    Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
        value: value,
    });
    return effect;
}
export function getCreateEffectMetadata(instance) {
    var propertyNames = Object.getOwnPropertyNames(instance);
    var metadata = propertyNames
        .filter(function (propertyName) {
        return instance[propertyName] &&
            instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY);
    })
        .map(function (propertyName) {
        var metaData = instance[propertyName][CREATE_EFFECT_METADATA_KEY];
        return tslib_1.__assign({ propertyName: propertyName }, metaData);
    });
    return metadata;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2NyZWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9jcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQWdDLHFCQUFxQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRS9FLElBQU0sMEJBQTBCLEdBQUcsMEJBQTBCLENBQUM7QUFVOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQkc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUsxQixNQUFlLEVBQUUsTUFBbUI7SUFDcEMsSUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDeEIsSUFBTSxLQUFLLHdCQUNOLHFCQUFxQixFQUNyQixNQUFNLENBQ1YsQ0FBQztJQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3hELEtBQUssT0FBQTtLQUNOLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBOEMsQ0FBQztBQUN4RCxDQUFDO0FBRUQsTUFBTSxVQUFVLHVCQUF1QixDQUVyQyxRQUFXO0lBQ1gsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBbUIsQ0FBQztJQUU3RSxJQUFNLFFBQVEsR0FBd0IsYUFBYTtTQUNoRCxNQUFNLENBQ0wsVUFBQSxZQUFZO1FBQ1YsT0FBQSxRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ3RCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUM7SUFEakUsQ0FDaUUsQ0FDcEU7U0FDQSxHQUFHLENBQUMsVUFBQSxZQUFZO1FBQ2YsSUFBTSxRQUFRLEdBQUksUUFBUSxDQUFDLFlBQVksQ0FBUyxDQUM5QywwQkFBMEIsQ0FDM0IsQ0FBQztRQUNGLDBCQUNFLFlBQVksY0FBQSxJQUNULFFBQVEsRUFDWDtJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUwsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdE1ldGFkYXRhLCBFZmZlY3RDb25maWcsIERFRkFVTFRfRUZGRUNUX0NPTkZJRyB9IGZyb20gJy4vbW9kZWxzJztcblxuY29uc3QgQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVkgPSAnX19AbmdyeC9lZmZlY3RzX2NyZWF0ZV9fJztcblxuaW50ZXJmYWNlIENyZWF0ZUVmZmVjdE1ldGFkYXRhIHtcbiAgW0NSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZXTogRWZmZWN0Q29uZmlnO1xufVxuXG50eXBlIERpc3BhdGNoVHlwZTxUPiA9IFQgZXh0ZW5kcyB7IGRpc3BhdGNoOiBpbmZlciBVIH0gPyBVIDogdW5rbm93bjtcbnR5cGUgT2JzZXJ2YWJsZVJldHVyblR5cGU8VD4gPSBUIGV4dGVuZHMgZmFsc2VcbiAgPyBPYnNlcnZhYmxlPHVua25vd24+XG4gIDogT2JzZXJ2YWJsZTxBY3Rpb24+O1xuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZXMgYW4gZWZmZWN0IGZyb20gYW4gYE9ic2VydmFibGVgIGFuZCBhbiBgRWZmZWN0Q29uZmlnYC5cbiAqXG4gKiBAcGFyYW0gc291cmNlIEEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBgT2JzZXJ2YWJsZWAuXG4gKiBAcGFyYW0gY29uZmlnIEEgYFBhcnRpYWw8RWZmZWN0Q29uZmlnPmAgdG8gY29uZmlndXJlIHRoZSBlZmZlY3QuICBCeSBkZWZhdWx0LCBgZGlzcGF0Y2hgIGlzIHRydWUgYW5kIGByZXN1YnNjcmliZU9uRXJyb3JgIGlzIHRydWUuXG4gKiBAcmV0dXJucyBJZiBgRWZmZWN0Q29uZmlnYCNgZGlzcGF0Y2hgIGlzIHRydWUsIHJldHVybnMgYE9ic2VydmFibGU8QWN0aW9uPmAuICBFbHNlLCByZXR1cm5zIGBPYnNlcnZhYmxlPHVua25vd24+YC5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICoqIE1hcHBpbmcgdG8gYSBkaWZmZXJlbnQgYWN0aW9uICoqXG4gKiBgYGB0c1xuICogZWZmZWN0TmFtZSQgPSBjcmVhdGVFZmZlY3QoXG4gKiAgICgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShcbiAqICAgICBvZlR5cGUoRmVhdHVyZUFjdGlvbnMuYWN0aW9uT25lKSxcbiAqICAgICBtYXAoKCkgPT4gRmVhdHVyZUFjdGlvbnMuYWN0aW9uVHdvKCkpXG4gKiAgIClcbiAqICk7XG4gKiBgYGBcbiAqXG4gKiAgKiogTm9uLWRpc3BhdGNoaW5nIGVmZmVjdHMgKipcbiAqIGBgYHRzXG4gKiBlZmZlY3ROYW1lJCA9IGNyZWF0ZUVmZmVjdChcbiAqICAgKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKFxuICogICAgIG9mVHlwZShGZWF0dXJlQWN0aW9ucy5hY3Rpb25PbmUpLFxuICogICAgIHRhcCgoKSA9PiBjb25zb2xlLmxvZygnQWN0aW9uIE9uZSBEaXNwYXRjaGVkJykpXG4gKiAgICksXG4gKiAgIHsgZGlzcGF0Y2g6IGZhbHNlIH1cbiAqICAgLy8gRmVhdHVyZUFjdGlvbnMuYWN0aW9uT25lIGlzIG5vdCBkaXNwYXRjaGVkXG4gKiApO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZmZlY3Q8XG4gIEMgZXh0ZW5kcyBFZmZlY3RDb25maWcsXG4gIFQgZXh0ZW5kcyBEaXNwYXRjaFR5cGU8Qz4sXG4gIE8gZXh0ZW5kcyBPYnNlcnZhYmxlUmV0dXJuVHlwZTxUPixcbiAgUiBleHRlbmRzIE8gfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiBPKVxuPihzb3VyY2U6ICgpID0+IFIsIGNvbmZpZz86IFBhcnRpYWw8Qz4pOiBSICYgQ3JlYXRlRWZmZWN0TWV0YWRhdGEge1xuICBjb25zdCBlZmZlY3QgPSBzb3VyY2UoKTtcbiAgY29uc3QgdmFsdWU6IEVmZmVjdENvbmZpZyA9IHtcbiAgICAuLi5ERUZBVUxUX0VGRkVDVF9DT05GSUcsXG4gICAgLi4uY29uZmlnLCAvLyBPdmVycmlkZXMgYW55IGRlZmF1bHRzIGlmIHZhbHVlcyBhcmUgcHJvdmlkZWRcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVmZmVjdCwgQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVksIHtcbiAgICB2YWx1ZSxcbiAgfSk7XG4gIHJldHVybiBlZmZlY3QgYXMgdHlwZW9mIGVmZmVjdCAmIENyZWF0ZUVmZmVjdE1ldGFkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRlRWZmZWN0TWV0YWRhdGE8XG4gIFQgZXh0ZW5kcyB7IFtwcm9wcyBpbiBrZXlvZiBUXTogT2JqZWN0IH1cbj4oaW5zdGFuY2U6IFQpOiBFZmZlY3RNZXRhZGF0YTxUPltdIHtcbiAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGluc3RhbmNlKSBhcyBBcnJheTxrZXlvZiBUPjtcblxuICBjb25zdCBtZXRhZGF0YTogRWZmZWN0TWV0YWRhdGE8VD5bXSA9IHByb3BlcnR5TmFtZXNcbiAgICAuZmlsdGVyKFxuICAgICAgcHJvcGVydHlOYW1lID0+XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5TmFtZV0gJiZcbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHlOYW1lXS5oYXNPd25Qcm9wZXJ0eShDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWSlcbiAgICApXG4gICAgLm1hcChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgY29uc3QgbWV0YURhdGEgPSAoaW5zdGFuY2VbcHJvcGVydHlOYW1lXSBhcyBhbnkpW1xuICAgICAgICBDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWVxuICAgICAgXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgLi4ubWV0YURhdGEsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIHJldHVybiBtZXRhZGF0YTtcbn1cbiJdfQ==