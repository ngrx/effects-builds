/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CREATE_EFFECT_METADATA_KEY = '__@ngrx/effects_create__';
/**
 * @template T
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2NyZWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9jcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O01BSU0sMEJBQTBCLEdBQUcsMEJBQTBCOzs7Ozs7O0FBa0I3RCxNQUFNLFVBQVUsWUFBWSxDQUMxQixNQUF5RSxFQUN6RSxFQUFFLFFBQVEsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFOztVQUVsQixNQUFNLEdBQUcsTUFBTSxFQUFFO0lBQ3ZCLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3hELEtBQUssRUFBRTtZQUNMLFFBQVE7U0FDVDtLQUNGLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FBSSxRQUFXOztVQUM5QyxhQUFhLEdBQUcsbUJBQUEsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUd2RDs7VUFFRyxRQUFRLEdBQXdCLGFBQWE7U0FDaEQsTUFBTTs7OztJQUNMLFlBQVksQ0FBQyxFQUFFLENBQ2IsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLEVBQ3BFO1NBQ0EsR0FBRzs7OztJQUFDLFlBQVksQ0FBQyxFQUFFOztjQUNaLFFBQVEsR0FBRyxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBTyxDQUFDLENBQzlDLDBCQUEwQixDQUMzQjtRQUNELHVCQUNFLFlBQVksSUFDVCxRQUFRLEVBQ1g7SUFDSixDQUFDLEVBQUM7SUFFSixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0TWV0YWRhdGEgfSBmcm9tICcuL21vZGVscyc7XG5cbmNvbnN0IENSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZID0gJ19fQG5ncngvZWZmZWN0c19jcmVhdGVfXyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZmZlY3Q8VCBleHRlbmRzIEFjdGlvbj4oXG4gIHNvdXJjZTogKCgpID0+IE9ic2VydmFibGU8VD4pLFxuICBvcHRpb25zOiB7IGRpc3BhdGNoOiBmYWxzZSB9XG4pOiBPYnNlcnZhYmxlPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVmZmVjdDxUIGV4dGVuZHMgQWN0aW9uPihcbiAgc291cmNlOiAoKCkgPT4gKC4uLmFyZ3M6IGFueVtdKSA9PiBPYnNlcnZhYmxlPFQ+KSxcbiAgb3B0aW9uczogeyBkaXNwYXRjaDogZmFsc2UgfVxuKTogKCguLi5hcmdzOiBhbnlbXSkgPT4gT2JzZXJ2YWJsZTxUPik7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWZmZWN0PFQgZXh0ZW5kcyBBY3Rpb24+KFxuICBzb3VyY2U6ICgoKSA9PiBPYnNlcnZhYmxlPFQ+KSxcbiAgb3B0aW9ucz86IHsgZGlzcGF0Y2g6IHRydWUgfVxuKTogT2JzZXJ2YWJsZTxUPjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZmZlY3Q8VCBleHRlbmRzIEFjdGlvbj4oXG4gIHNvdXJjZTogKCgpID0+ICguLi5hcmdzOiBhbnlbXSkgPT4gT2JzZXJ2YWJsZTxUPiksXG4gIG9wdGlvbnM/OiB7IGRpc3BhdGNoOiB0cnVlIH1cbik6ICgoLi4uYXJnczogYW55W10pID0+IE9ic2VydmFibGU8VD4pO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVmZmVjdDxUIGV4dGVuZHMgQWN0aW9uPihcbiAgc291cmNlOiAoKCkgPT4gT2JzZXJ2YWJsZTxUPikgfCAoKCkgPT4gKC4uLmFyZ3M6IGFueVtdKSA9PiBPYnNlcnZhYmxlPFQ+KSxcbiAgeyBkaXNwYXRjaCA9IHRydWUgfSA9IHt9XG4pOiBPYnNlcnZhYmxlPFQ+IHwgKCguLi5hcmdzOiBhbnlbXSkgPT4gT2JzZXJ2YWJsZTxUPikge1xuICBjb25zdCBlZmZlY3QgPSBzb3VyY2UoKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVmZmVjdCwgQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVksIHtcbiAgICB2YWx1ZToge1xuICAgICAgZGlzcGF0Y2gsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiBlZmZlY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDcmVhdGVFZmZlY3RNZXRhZGF0YTxUPihpbnN0YW5jZTogVCk6IEVmZmVjdE1ldGFkYXRhPFQ+W10ge1xuICBjb25zdCBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaW5zdGFuY2UpIGFzIEV4dHJhY3Q8XG4gICAga2V5b2YgVCxcbiAgICBzdHJpbmdcbiAgPltdO1xuXG4gIGNvbnN0IG1ldGFkYXRhOiBFZmZlY3RNZXRhZGF0YTxUPltdID0gcHJvcGVydHlOYW1lc1xuICAgIC5maWx0ZXIoXG4gICAgICBwcm9wZXJ0eU5hbWUgPT5cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHlOYW1lXSAmJlxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eU5hbWVdLmhhc093blByb3BlcnR5KENSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZKVxuICAgIClcbiAgICAubWFwKHByb3BlcnR5TmFtZSA9PiB7XG4gICAgICBjb25zdCBtZXRhRGF0YSA9IChpbnN0YW5jZVtwcm9wZXJ0eU5hbWVdIGFzIGFueSlbXG4gICAgICAgIENSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZXG4gICAgICBdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAuLi5tZXRhRGF0YSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgcmV0dXJuIG1ldGFkYXRhO1xufVxuIl19