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
 * @param {?=} config A `Partial<EffectConfig>` to configure the effect.  By default, `dispatch` is true and `useEffectsErrorHandler` is true.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2NyZWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9jcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUdMLHFCQUFxQixFQUVyQiwwQkFBMEIsR0FDM0IsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q2xCLE1BQU0sVUFBVSxZQUFZLENBTTFCLE1BQTJELEVBQzNELE1BQW1COztVQUViLE1BQU0sR0FBRyxNQUFNLEVBQUU7O1VBQ2pCLEtBQUssbUNBQ04scUJBQXFCLEdBQ3JCLE1BQU0sQ0FDVjtJQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3hELEtBQUs7S0FDTixDQUFDLENBQUM7SUFDSCxPQUFPLG1CQUFBLE1BQU0sRUFBd0MsQ0FBQztBQUN4RCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsdUJBQXVCLENBRXJDLFFBQVc7O1VBQ0wsYUFBYSxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsRUFBa0I7O1VBRXRFLFFBQVEsR0FBd0IsYUFBYTtTQUNoRCxNQUFNOzs7O0lBQ0wsWUFBWSxDQUFDLEVBQUUsQ0FDYixRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsRUFDcEU7U0FDQSxHQUFHOzs7O0lBQUMsWUFBWSxDQUFDLEVBQUU7O2NBQ1osUUFBUSxHQUFHLENBQUMsbUJBQUEsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFPLENBQUMsQ0FDOUMsMEJBQTBCLENBQzNCO1FBQ0QsdUJBQ0UsWUFBWSxJQUNULFFBQVEsRUFDWDtJQUNKLENBQUMsRUFBQztJQUVKLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBFZmZlY3RNZXRhZGF0YSxcbiAgRWZmZWN0Q29uZmlnLFxuICBERUZBVUxUX0VGRkVDVF9DT05GSUcsXG4gIENyZWF0ZUVmZmVjdE1ldGFkYXRhLFxuICBDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWSxcbn0gZnJvbSAnLi9tb2RlbHMnO1xuXG50eXBlIERpc3BhdGNoVHlwZTxUPiA9IFQgZXh0ZW5kcyB7IGRpc3BhdGNoOiBpbmZlciBVIH0gPyBVIDogdHJ1ZTtcbnR5cGUgT2JzZXJ2YWJsZVR5cGU8VCwgT3JpZ2luYWxUeXBlPiA9IFQgZXh0ZW5kcyBmYWxzZSA/IE9yaWdpbmFsVHlwZSA6IEFjdGlvbjtcbnR5cGUgRWZmZWN0UmVzdWx0PE9UPiA9IE9ic2VydmFibGU8T1Q+IHwgKCguLi5hcmdzOiBhbnlbXSkgPT4gT2JzZXJ2YWJsZTxPVD4pO1xudHlwZSBDb25kaXRpb25hbGx5RGlzYWxsb3dBY3Rpb25DcmVhdG9yPERULCBSZXN1bHQ+ID0gRFQgZXh0ZW5kcyBmYWxzZVxuICA/IHVua25vd24gLy8gSWYgRFQgKERpc3BhdGNoVHlwZSBpcyBmYWxzZSwgdGhlbiB3ZSBkb24ndCBlbmZvcmNlIGFueSByZXR1cm4gdHlwZXMpXG4gIDogUmVzdWx0IGV4dGVuZHMgRWZmZWN0UmVzdWx0PGluZmVyIE9UPlxuICAgID8gT1QgZXh0ZW5kcyBBY3Rpb25DcmVhdG9yXG4gICAgICA/ICdBY3Rpb25DcmVhdG9yIGNhbm5vdCBiZSBkaXNwYXRjaGVkLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIHRoZSBhY3Rpb24gY3JlYXRvciBmdW5jdGlvbj8nXG4gICAgICA6IHVua25vd25cbiAgICA6IHVua25vd247XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGVzIGFuIGVmZmVjdCBmcm9tIGFuIGBPYnNlcnZhYmxlYCBhbmQgYW4gYEVmZmVjdENvbmZpZ2AuXG4gKlxuICogQHBhcmFtIHNvdXJjZSBBIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gYE9ic2VydmFibGVgLlxuICogQHBhcmFtIGNvbmZpZyBBIGBQYXJ0aWFsPEVmZmVjdENvbmZpZz5gIHRvIGNvbmZpZ3VyZSB0aGUgZWZmZWN0LiAgQnkgZGVmYXVsdCwgYGRpc3BhdGNoYCBpcyB0cnVlIGFuZCBgdXNlRWZmZWN0c0Vycm9ySGFuZGxlcmAgaXMgdHJ1ZS5cbiAqIEByZXR1cm5zIElmIGBFZmZlY3RDb25maWdgI2BkaXNwYXRjaGAgaXMgdHJ1ZSwgcmV0dXJucyBgT2JzZXJ2YWJsZTxBY3Rpb24+YC4gIEVsc2UsIHJldHVybnMgYE9ic2VydmFibGU8dW5rbm93bj5gLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogKiogTWFwcGluZyB0byBhIGRpZmZlcmVudCBhY3Rpb24gKipcbiAqIGBgYHRzXG4gKiBlZmZlY3ROYW1lJCA9IGNyZWF0ZUVmZmVjdChcbiAqICAgKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKFxuICogICAgIG9mVHlwZShGZWF0dXJlQWN0aW9ucy5hY3Rpb25PbmUpLFxuICogICAgIG1hcCgoKSA9PiBGZWF0dXJlQWN0aW9ucy5hY3Rpb25Ud28oKSlcbiAqICAgKVxuICogKTtcbiAqIGBgYFxuICpcbiAqICAqKiBOb24tZGlzcGF0Y2hpbmcgZWZmZWN0cyAqKlxuICogYGBgdHNcbiAqIGVmZmVjdE5hbWUkID0gY3JlYXRlRWZmZWN0KFxuICogICAoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gKiAgICAgb2ZUeXBlKEZlYXR1cmVBY3Rpb25zLmFjdGlvbk9uZSksXG4gKiAgICAgdGFwKCgpID0+IGNvbnNvbGUubG9nKCdBY3Rpb24gT25lIERpc3BhdGNoZWQnKSlcbiAqICAgKSxcbiAqICAgeyBkaXNwYXRjaDogZmFsc2UgfVxuICogICAvLyBGZWF0dXJlQWN0aW9ucy5hY3Rpb25PbmUgaXMgbm90IGRpc3BhdGNoZWRcbiAqICk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVmZmVjdDxcbiAgQyBleHRlbmRzIEVmZmVjdENvbmZpZyxcbiAgRFQgZXh0ZW5kcyBEaXNwYXRjaFR5cGU8Qz4sXG4gIE9UIGV4dGVuZHMgT2JzZXJ2YWJsZVR5cGU8RFQsIE9UPixcbiAgUiBleHRlbmRzIEVmZmVjdFJlc3VsdDxPVD5cbj4oXG4gIHNvdXJjZTogKCkgPT4gUiAmIENvbmRpdGlvbmFsbHlEaXNhbGxvd0FjdGlvbkNyZWF0b3I8RFQsIFI+LFxuICBjb25maWc/OiBQYXJ0aWFsPEM+XG4pOiBSICYgQ3JlYXRlRWZmZWN0TWV0YWRhdGEge1xuICBjb25zdCBlZmZlY3QgPSBzb3VyY2UoKTtcbiAgY29uc3QgdmFsdWU6IEVmZmVjdENvbmZpZyA9IHtcbiAgICAuLi5ERUZBVUxUX0VGRkVDVF9DT05GSUcsXG4gICAgLi4uY29uZmlnLCAvLyBPdmVycmlkZXMgYW55IGRlZmF1bHRzIGlmIHZhbHVlcyBhcmUgcHJvdmlkZWRcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVmZmVjdCwgQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVksIHtcbiAgICB2YWx1ZSxcbiAgfSk7XG4gIHJldHVybiBlZmZlY3QgYXMgdHlwZW9mIGVmZmVjdCAmIENyZWF0ZUVmZmVjdE1ldGFkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRlRWZmZWN0TWV0YWRhdGE8XG4gIFQgZXh0ZW5kcyB7IFtwcm9wcyBpbiBrZXlvZiBUXTogT2JqZWN0IH1cbj4oaW5zdGFuY2U6IFQpOiBFZmZlY3RNZXRhZGF0YTxUPltdIHtcbiAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGluc3RhbmNlKSBhcyBBcnJheTxrZXlvZiBUPjtcblxuICBjb25zdCBtZXRhZGF0YTogRWZmZWN0TWV0YWRhdGE8VD5bXSA9IHByb3BlcnR5TmFtZXNcbiAgICAuZmlsdGVyKFxuICAgICAgcHJvcGVydHlOYW1lID0+XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5TmFtZV0gJiZcbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHlOYW1lXS5oYXNPd25Qcm9wZXJ0eShDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWSlcbiAgICApXG4gICAgLm1hcChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgY29uc3QgbWV0YURhdGEgPSAoaW5zdGFuY2VbcHJvcGVydHlOYW1lXSBhcyBhbnkpW1xuICAgICAgICBDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWVxuICAgICAgXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgLi4ubWV0YURhdGEsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIHJldHVybiBtZXRhZGF0YTtcbn1cbiJdfQ==