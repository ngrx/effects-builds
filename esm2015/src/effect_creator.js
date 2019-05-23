/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CREATE_EFFECT_METADATA_KEY = '__@ngrx/effects_create__';
/**
 * @template C, T, O, R
 * @param {?} source
 * @param {?=} config
 * @return {?}
 */
export function createEffect(source, config) {
    /** @type {?} */
    const effect = source();
    // Right now both createEffect and @Effect decorator set default values.
    // Ideally that should only be done in one place that aggregates that info,
    // for example in mergeEffects().
    /** @type {?} */
    const value = Object.assign({ dispatch: true, resubscribeOnError: true }, config);
    Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
        value,
    });
    return effect;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2NyZWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9jcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O01BSU0sMEJBQTBCLEdBQUcsMEJBQTBCOzs7Ozs7O0FBRzdELE1BQU0sVUFBVSxZQUFZLENBSzFCLE1BQWUsRUFBRSxNQUFtQjs7VUFDOUIsTUFBTSxHQUFHLE1BQU0sRUFBRTs7Ozs7VUFJakIsS0FBSyxtQkFDVCxRQUFRLEVBQUUsSUFBSSxFQUNkLGtCQUFrQixFQUFFLElBQUksSUFDckIsTUFBTSxDQUNWO0lBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDeEQsS0FBSztLQUNOLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FBSSxRQUFXOztVQUM5QyxhQUFhLEdBQUcsbUJBQUEsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUd2RDs7VUFFRyxRQUFRLEdBQXdCLGFBQWE7U0FDaEQsTUFBTTs7OztJQUNMLFlBQVksQ0FBQyxFQUFFLENBQ2IsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLEVBQ3BFO1NBQ0EsR0FBRzs7OztJQUFDLFlBQVksQ0FBQyxFQUFFOztjQUNaLFFBQVEsR0FBRyxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBTyxDQUFDLENBQzlDLDBCQUEwQixDQUMzQjtRQUNELHVCQUNFLFlBQVksSUFDVCxRQUFRLEVBQ1g7SUFDSixDQUFDLEVBQUM7SUFFSixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0TWV0YWRhdGEsIEVmZmVjdENvbmZpZyB9IGZyb20gJy4vbW9kZWxzJztcblxuY29uc3QgQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVkgPSAnX19AbmdyeC9lZmZlY3RzX2NyZWF0ZV9fJztcblxudHlwZSBEaXNwYXRjaFR5cGU8VD4gPSBUIGV4dGVuZHMgeyBkaXNwYXRjaDogaW5mZXIgVSB9ID8gVSA6IHVua25vd247XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWZmZWN0PFxuICBDIGV4dGVuZHMgRWZmZWN0Q29uZmlnLFxuICBUIGV4dGVuZHMgRGlzcGF0Y2hUeXBlPEM+LFxuICBPIGV4dGVuZHMgVCBleHRlbmRzIGZhbHNlID8gT2JzZXJ2YWJsZTx1bmtub3duPiA6IE9ic2VydmFibGU8QWN0aW9uPixcbiAgUiBleHRlbmRzIE8gfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiBPKVxuPihzb3VyY2U6ICgpID0+IFIsIGNvbmZpZz86IFBhcnRpYWw8Qz4pOiBSIHtcbiAgY29uc3QgZWZmZWN0ID0gc291cmNlKCk7XG4gIC8vIFJpZ2h0IG5vdyBib3RoIGNyZWF0ZUVmZmVjdCBhbmQgQEVmZmVjdCBkZWNvcmF0b3Igc2V0IGRlZmF1bHQgdmFsdWVzLlxuICAvLyBJZGVhbGx5IHRoYXQgc2hvdWxkIG9ubHkgYmUgZG9uZSBpbiBvbmUgcGxhY2UgdGhhdCBhZ2dyZWdhdGVzIHRoYXQgaW5mbyxcbiAgLy8gZm9yIGV4YW1wbGUgaW4gbWVyZ2VFZmZlY3RzKCkuXG4gIGNvbnN0IHZhbHVlOiBFZmZlY3RDb25maWcgPSB7XG4gICAgZGlzcGF0Y2g6IHRydWUsXG4gICAgcmVzdWJzY3JpYmVPbkVycm9yOiB0cnVlLFxuICAgIC4uLmNvbmZpZywgLy8gT3ZlcnJpZGVzIGFueSBkZWZhdWx0cyBpZiB2YWx1ZXMgYXJlIHByb3ZpZGVkXG4gIH07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlZmZlY3QsIENSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZLCB7XG4gICAgdmFsdWUsXG4gIH0pO1xuICByZXR1cm4gZWZmZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRlRWZmZWN0TWV0YWRhdGE8VD4oaW5zdGFuY2U6IFQpOiBFZmZlY3RNZXRhZGF0YTxUPltdIHtcbiAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGluc3RhbmNlKSBhcyBFeHRyYWN0PFxuICAgIGtleW9mIFQsXG4gICAgc3RyaW5nXG4gID5bXTtcblxuICBjb25zdCBtZXRhZGF0YTogRWZmZWN0TWV0YWRhdGE8VD5bXSA9IHByb3BlcnR5TmFtZXNcbiAgICAuZmlsdGVyKFxuICAgICAgcHJvcGVydHlOYW1lID0+XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5TmFtZV0gJiZcbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHlOYW1lXS5oYXNPd25Qcm9wZXJ0eShDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWSlcbiAgICApXG4gICAgLm1hcChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgY29uc3QgbWV0YURhdGEgPSAoaW5zdGFuY2VbcHJvcGVydHlOYW1lXSBhcyBhbnkpW1xuICAgICAgICBDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWVxuICAgICAgXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgLi4ubWV0YURhdGEsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIHJldHVybiBtZXRhZGF0YTtcbn1cbiJdfQ==