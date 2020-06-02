var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @fileoverview added by tsickle
 * Generated from: src/effect_creator.ts
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
    var effect = source();
    /** @type {?} */
    var value = __assign(__assign({}, DEFAULT_EFFECT_CONFIG), config);
    Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
        value: value,
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
    var propertyNames = (/** @type {?} */ (Object.getOwnPropertyNames(instance)));
    /** @type {?} */
    var metadata = propertyNames
        .filter((/**
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        return instance[propertyName] &&
            instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY);
    }))
        .map((/**
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        /** @type {?} */
        var metaData = ((/** @type {?} */ (instance[propertyName])))[CREATE_EFFECT_METADATA_KEY];
        return __assign({ propertyName: propertyName }, metaData);
    }));
    return metadata;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2NyZWF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmdyeC9lZmZlY3RzLyIsInNvdXJjZXMiOlsic3JjL2VmZmVjdF9jcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLEVBR0wscUJBQXFCLEVBRXJCLDBCQUEwQixHQUMzQixNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDbEIsTUFBTSxVQUFVLFlBQVksQ0FNMUIsTUFBMkQsRUFDM0QsTUFBbUI7O1FBRWIsTUFBTSxHQUFHLE1BQU0sRUFBRTs7UUFDakIsS0FBSyx5QkFDTixxQkFBcUIsR0FDckIsTUFBTSxDQUNWO0lBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDeEQsS0FBSyxPQUFBO0tBQ04sQ0FBQyxDQUFDO0lBQ0gsT0FBTyxtQkFBQSxNQUFNLEVBQXdDLENBQUM7QUFDeEQsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHVCQUF1QixDQUVyQyxRQUFXOztRQUNMLGFBQWEsR0FBRyxtQkFBQSxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEVBQWtCOztRQUV0RSxRQUFRLEdBQXdCLGFBQWE7U0FDaEQsTUFBTTs7OztJQUNMLFVBQUEsWUFBWTtRQUNWLE9BQUEsUUFBUSxDQUFDLFlBQVksQ0FBQztZQUN0QixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDO0lBRGpFLENBQ2lFLEVBQ3BFO1NBQ0EsR0FBRzs7OztJQUFDLFVBQUEsWUFBWTs7WUFDVCxRQUFRLEdBQUcsQ0FBQyxtQkFBQSxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQU8sQ0FBQyxDQUM5QywwQkFBMEIsQ0FDM0I7UUFDRCxrQkFDRSxZQUFZLGNBQUEsSUFDVCxRQUFRLEVBQ1g7SUFDSixDQUFDLEVBQUM7SUFFSixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgRWZmZWN0TWV0YWRhdGEsXG4gIEVmZmVjdENvbmZpZyxcbiAgREVGQVVMVF9FRkZFQ1RfQ09ORklHLFxuICBDcmVhdGVFZmZlY3RNZXRhZGF0YSxcbiAgQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVksXG59IGZyb20gJy4vbW9kZWxzJztcblxudHlwZSBEaXNwYXRjaFR5cGU8VD4gPSBUIGV4dGVuZHMgeyBkaXNwYXRjaDogaW5mZXIgVSB9ID8gVSA6IHRydWU7XG50eXBlIE9ic2VydmFibGVUeXBlPFQsIE9yaWdpbmFsVHlwZT4gPSBUIGV4dGVuZHMgZmFsc2UgPyBPcmlnaW5hbFR5cGUgOiBBY3Rpb247XG50eXBlIEVmZmVjdFJlc3VsdDxPVD4gPSBPYnNlcnZhYmxlPE9UPiB8ICgoLi4uYXJnczogYW55W10pID0+IE9ic2VydmFibGU8T1Q+KTtcbnR5cGUgQ29uZGl0aW9uYWxseURpc2FsbG93QWN0aW9uQ3JlYXRvcjxEVCwgUmVzdWx0PiA9IERUIGV4dGVuZHMgZmFsc2VcbiAgPyB1bmtub3duIC8vIElmIERUIChEaXNwYXRjaFR5cGUgaXMgZmFsc2UsIHRoZW4gd2UgZG9uJ3QgZW5mb3JjZSBhbnkgcmV0dXJuIHR5cGVzKVxuICA6IFJlc3VsdCBleHRlbmRzIEVmZmVjdFJlc3VsdDxpbmZlciBPVD5cbiAgICA/IE9UIGV4dGVuZHMgQWN0aW9uQ3JlYXRvclxuICAgICAgPyAnQWN0aW9uQ3JlYXRvciBjYW5ub3QgYmUgZGlzcGF0Y2hlZC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCB0aGUgYWN0aW9uIGNyZWF0b3IgZnVuY3Rpb24/J1xuICAgICAgOiB1bmtub3duXG4gICAgOiB1bmtub3duO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogQ3JlYXRlcyBhbiBlZmZlY3QgZnJvbSBhbiBgT2JzZXJ2YWJsZWAgYW5kIGFuIGBFZmZlY3RDb25maWdgLlxuICpcbiAqIEBwYXJhbSBzb3VyY2UgQSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIGBPYnNlcnZhYmxlYC5cbiAqIEBwYXJhbSBjb25maWcgQSBgUGFydGlhbDxFZmZlY3RDb25maWc+YCB0byBjb25maWd1cmUgdGhlIGVmZmVjdC4gIEJ5IGRlZmF1bHQsIGBkaXNwYXRjaGAgaXMgdHJ1ZSBhbmQgYHVzZUVmZmVjdHNFcnJvckhhbmRsZXJgIGlzIHRydWUuXG4gKiBAcmV0dXJucyBJZiBgRWZmZWN0Q29uZmlnYCNgZGlzcGF0Y2hgIGlzIHRydWUsIHJldHVybnMgYE9ic2VydmFibGU8QWN0aW9uPmAuICBFbHNlLCByZXR1cm5zIGBPYnNlcnZhYmxlPHVua25vd24+YC5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICoqIE1hcHBpbmcgdG8gYSBkaWZmZXJlbnQgYWN0aW9uICoqXG4gKiBgYGB0c1xuICogZWZmZWN0TmFtZSQgPSBjcmVhdGVFZmZlY3QoXG4gKiAgICgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShcbiAqICAgICBvZlR5cGUoRmVhdHVyZUFjdGlvbnMuYWN0aW9uT25lKSxcbiAqICAgICBtYXAoKCkgPT4gRmVhdHVyZUFjdGlvbnMuYWN0aW9uVHdvKCkpXG4gKiAgIClcbiAqICk7XG4gKiBgYGBcbiAqXG4gKiAgKiogTm9uLWRpc3BhdGNoaW5nIGVmZmVjdHMgKipcbiAqIGBgYHRzXG4gKiBlZmZlY3ROYW1lJCA9IGNyZWF0ZUVmZmVjdChcbiAqICAgKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKFxuICogICAgIG9mVHlwZShGZWF0dXJlQWN0aW9ucy5hY3Rpb25PbmUpLFxuICogICAgIHRhcCgoKSA9PiBjb25zb2xlLmxvZygnQWN0aW9uIE9uZSBEaXNwYXRjaGVkJykpXG4gKiAgICksXG4gKiAgIHsgZGlzcGF0Y2g6IGZhbHNlIH1cbiAqICAgLy8gRmVhdHVyZUFjdGlvbnMuYWN0aW9uT25lIGlzIG5vdCBkaXNwYXRjaGVkXG4gKiApO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZmZlY3Q8XG4gIEMgZXh0ZW5kcyBFZmZlY3RDb25maWcsXG4gIERUIGV4dGVuZHMgRGlzcGF0Y2hUeXBlPEM+LFxuICBPVCBleHRlbmRzIE9ic2VydmFibGVUeXBlPERULCBPVD4sXG4gIFIgZXh0ZW5kcyBFZmZlY3RSZXN1bHQ8T1Q+XG4+KFxuICBzb3VyY2U6ICgpID0+IFIgJiBDb25kaXRpb25hbGx5RGlzYWxsb3dBY3Rpb25DcmVhdG9yPERULCBSPixcbiAgY29uZmlnPzogUGFydGlhbDxDPlxuKTogUiAmIENyZWF0ZUVmZmVjdE1ldGFkYXRhIHtcbiAgY29uc3QgZWZmZWN0ID0gc291cmNlKCk7XG4gIGNvbnN0IHZhbHVlOiBFZmZlY3RDb25maWcgPSB7XG4gICAgLi4uREVGQVVMVF9FRkZFQ1RfQ09ORklHLFxuICAgIC4uLmNvbmZpZywgLy8gT3ZlcnJpZGVzIGFueSBkZWZhdWx0cyBpZiB2YWx1ZXMgYXJlIHByb3ZpZGVkXG4gIH07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlZmZlY3QsIENSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZLCB7XG4gICAgdmFsdWUsXG4gIH0pO1xuICByZXR1cm4gZWZmZWN0IGFzIHR5cGVvZiBlZmZlY3QgJiBDcmVhdGVFZmZlY3RNZXRhZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENyZWF0ZUVmZmVjdE1ldGFkYXRhPFxuICBUIGV4dGVuZHMgeyBbcHJvcHMgaW4ga2V5b2YgVF06IE9iamVjdCB9XG4+KGluc3RhbmNlOiBUKTogRWZmZWN0TWV0YWRhdGE8VD5bXSB7XG4gIGNvbnN0IHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhpbnN0YW5jZSkgYXMgQXJyYXk8a2V5b2YgVD47XG5cbiAgY29uc3QgbWV0YWRhdGE6IEVmZmVjdE1ldGFkYXRhPFQ+W10gPSBwcm9wZXJ0eU5hbWVzXG4gICAgLmZpbHRlcihcbiAgICAgIHByb3BlcnR5TmFtZSA9PlxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eU5hbWVdICYmXG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5TmFtZV0uaGFzT3duUHJvcGVydHkoQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVkpXG4gICAgKVxuICAgIC5tYXAocHJvcGVydHlOYW1lID0+IHtcbiAgICAgIGNvbnN0IG1ldGFEYXRhID0gKGluc3RhbmNlW3Byb3BlcnR5TmFtZV0gYXMgYW55KVtcbiAgICAgICAgQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVlcbiAgICAgIF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIC4uLm1ldGFEYXRhLFxuICAgICAgfTtcbiAgICB9KTtcblxuICByZXR1cm4gbWV0YWRhdGE7XG59XG4iXX0=