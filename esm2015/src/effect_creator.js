/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CREATE_EFFECT_METADATA_KEY = '__@ngrx/effects_create__';
/**
 * @template T, R
 * @param {?} source
 * @param {?=} __1
 * @return {?}
 */
export function createEffect(source, { dispatch = true } = {}) {
    /** @type {?} */
    const effect = source();
    Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
        value: {
            dispatch,
        },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2NyZWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9jcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O01BSU0sMEJBQTBCLEdBQUcsMEJBQTBCOzs7Ozs7O0FBUzdELE1BQU0sVUFBVSxZQUFZLENBRzFCLE1BQWUsRUFBRSxFQUFFLFFBQVEsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFOztVQUNuQyxNQUFNLEdBQUcsTUFBTSxFQUFFO0lBQ3ZCLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3hELEtBQUssRUFBRTtZQUNMLFFBQVE7U0FDVDtLQUNGLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FBSSxRQUFXOztVQUM5QyxhQUFhLEdBQUcsbUJBQUEsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUd2RDs7VUFFRyxRQUFRLEdBQXdCLGFBQWE7U0FDaEQsTUFBTTs7OztJQUNMLFlBQVksQ0FBQyxFQUFFLENBQ2IsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLEVBQ3BFO1NBQ0EsR0FBRzs7OztJQUFDLFlBQVksQ0FBQyxFQUFFOztjQUNaLFFBQVEsR0FBRyxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBTyxDQUFDLENBQzlDLDBCQUEwQixDQUMzQjtRQUNELHVCQUNFLFlBQVksSUFDVCxRQUFRLEVBQ1g7SUFDSixDQUFDLEVBQUM7SUFFSixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0TWV0YWRhdGEgfSBmcm9tICcuL21vZGVscyc7XG5cbmNvbnN0IENSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZID0gJ19fQG5ncngvZWZmZWN0c19jcmVhdGVfXyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZmZlY3Q8XG4gIFIgZXh0ZW5kcyBPYnNlcnZhYmxlPHVua25vd24+IHwgKCguLi5hcmdzOiBhbnlbXSkgPT4gT2JzZXJ2YWJsZTx1bmtub3duPilcbj4oc291cmNlOiAoKSA9PiBSLCBvcHRpb25zOiB7IGRpc3BhdGNoOiBmYWxzZSB9KTogUjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZmZlY3Q8XG4gIFQgZXh0ZW5kcyBBY3Rpb24sXG4gIFIgZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IHwgKCguLi5hcmdzOiBhbnlbXSkgPT4gT2JzZXJ2YWJsZTxUPilcbj4oc291cmNlOiAoKSA9PiBSLCBvcHRpb25zPzogeyBkaXNwYXRjaDogdHJ1ZSB9KTogUjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZmZlY3Q8XG4gIFQgZXh0ZW5kcyBBY3Rpb24sXG4gIFIgZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IHwgKCguLi5hcmdzOiBhbnlbXSkgPT4gT2JzZXJ2YWJsZTxUPilcbj4oc291cmNlOiAoKSA9PiBSLCB7IGRpc3BhdGNoID0gdHJ1ZSB9ID0ge30pOiBSIHtcbiAgY29uc3QgZWZmZWN0ID0gc291cmNlKCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlZmZlY3QsIENSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIGRpc3BhdGNoLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gZWZmZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRlRWZmZWN0TWV0YWRhdGE8VD4oaW5zdGFuY2U6IFQpOiBFZmZlY3RNZXRhZGF0YTxUPltdIHtcbiAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGluc3RhbmNlKSBhcyBFeHRyYWN0PFxuICAgIGtleW9mIFQsXG4gICAgc3RyaW5nXG4gID5bXTtcblxuICBjb25zdCBtZXRhZGF0YTogRWZmZWN0TWV0YWRhdGE8VD5bXSA9IHByb3BlcnR5TmFtZXNcbiAgICAuZmlsdGVyKFxuICAgICAgcHJvcGVydHlOYW1lID0+XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5TmFtZV0gJiZcbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHlOYW1lXS5oYXNPd25Qcm9wZXJ0eShDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWSlcbiAgICApXG4gICAgLm1hcChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgY29uc3QgbWV0YURhdGEgPSAoaW5zdGFuY2VbcHJvcGVydHlOYW1lXSBhcyBhbnkpW1xuICAgICAgICBDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWVxuICAgICAgXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgLi4ubWV0YURhdGEsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIHJldHVybiBtZXRhZGF0YTtcbn1cbiJdfQ==