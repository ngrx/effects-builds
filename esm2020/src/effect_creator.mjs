import { DEFAULT_EFFECT_CONFIG, CREATE_EFFECT_METADATA_KEY, } from './models';
/**
 * @description
 * Creates an effect from an `Observable` and an `EffectConfig`.
 *
 * @param source A function which returns an `Observable`.
 * @param config A `Partial<EffectConfig>` to configure the effect.  By default, `dispatch` is true and `useEffectsErrorHandler` is true.
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
    const effect = source();
    const value = {
        ...DEFAULT_EFFECT_CONFIG,
        ...config, // Overrides any defaults if values are provided
    };
    Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
        value,
    });
    return effect;
}
export function getCreateEffectMetadata(instance) {
    const propertyNames = Object.getOwnPropertyNames(instance);
    const metadata = propertyNames
        .filter((propertyName) => {
        if (instance[propertyName] &&
            instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY)) {
            // If the property type has overridden `hasOwnProperty` we need to ensure
            // that the metadata is valid (containing a `dispatch`property)
            // https://github.com/ngrx/platform/issues/2975
            const property = instance[propertyName];
            return property[CREATE_EFFECT_METADATA_KEY].hasOwnProperty('dispatch');
        }
        return false;
    })
        .map((propertyName) => {
        const metaData = instance[propertyName][CREATE_EFFECT_METADATA_KEY];
        return {
            propertyName,
            ...metaData,
        };
    });
    return metadata;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2NyZWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9jcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFHTCxxQkFBcUIsRUFFckIsMEJBQTBCLEdBQzNCLE1BQU0sVUFBVSxDQUFDO0FBYWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0JHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FNMUIsTUFBMkQsRUFDM0QsTUFBbUI7SUFFbkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDeEIsTUFBTSxLQUFLLEdBQWlCO1FBQzFCLEdBQUcscUJBQXFCO1FBQ3hCLEdBQUcsTUFBTSxFQUFFLGdEQUFnRDtLQUM1RCxDQUFDO0lBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDeEQsS0FBSztLQUNOLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBOEMsQ0FBQztBQUN4RCxDQUFDO0FBRUQsTUFBTSxVQUFVLHVCQUF1QixDQUVyQyxRQUFXO0lBQ1gsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBbUIsQ0FBQztJQUU3RSxNQUFNLFFBQVEsR0FBd0IsYUFBYTtTQUNoRCxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtRQUN2QixJQUNFLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDdEIsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxFQUNqRTtZQUNBLHlFQUF5RTtZQUN6RSwrREFBK0Q7WUFDL0QsK0NBQStDO1lBQy9DLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQVEsQ0FBQztZQUMvQyxPQUFPLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4RTtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO1NBQ0QsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7UUFDcEIsTUFBTSxRQUFRLEdBQUksUUFBUSxDQUFDLFlBQVksQ0FBUyxDQUM5QywwQkFBMEIsQ0FDM0IsQ0FBQztRQUNGLE9BQU87WUFDTCxZQUFZO1lBQ1osR0FBRyxRQUFRO1NBQ1osQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUwsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbiwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIEVmZmVjdE1ldGFkYXRhLFxuICBFZmZlY3RDb25maWcsXG4gIERFRkFVTFRfRUZGRUNUX0NPTkZJRyxcbiAgQ3JlYXRlRWZmZWN0TWV0YWRhdGEsXG4gIENSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZLFxufSBmcm9tICcuL21vZGVscyc7XG5cbnR5cGUgRGlzcGF0Y2hUeXBlPFQ+ID0gVCBleHRlbmRzIHsgZGlzcGF0Y2g6IGluZmVyIFUgfSA/IFUgOiB0cnVlO1xudHlwZSBPYnNlcnZhYmxlVHlwZTxULCBPcmlnaW5hbFR5cGU+ID0gVCBleHRlbmRzIGZhbHNlID8gT3JpZ2luYWxUeXBlIDogQWN0aW9uO1xudHlwZSBFZmZlY3RSZXN1bHQ8T1Q+ID0gT2JzZXJ2YWJsZTxPVD4gfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiBPYnNlcnZhYmxlPE9UPik7XG50eXBlIENvbmRpdGlvbmFsbHlEaXNhbGxvd0FjdGlvbkNyZWF0b3I8RFQsIFJlc3VsdD4gPSBEVCBleHRlbmRzIGZhbHNlXG4gID8gdW5rbm93biAvLyBJZiBEVCAoRGlzcGF0Y2hUeXBlIGlzIGZhbHNlLCB0aGVuIHdlIGRvbid0IGVuZm9yY2UgYW55IHJldHVybiB0eXBlcylcbiAgOiBSZXN1bHQgZXh0ZW5kcyBFZmZlY3RSZXN1bHQ8aW5mZXIgT1Q+XG4gID8gT1QgZXh0ZW5kcyBBY3Rpb25DcmVhdG9yXG4gICAgPyAnQWN0aW9uQ3JlYXRvciBjYW5ub3QgYmUgZGlzcGF0Y2hlZC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCB0aGUgYWN0aW9uIGNyZWF0b3IgZnVuY3Rpb24/J1xuICAgIDogdW5rbm93blxuICA6IHVua25vd247XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGVzIGFuIGVmZmVjdCBmcm9tIGFuIGBPYnNlcnZhYmxlYCBhbmQgYW4gYEVmZmVjdENvbmZpZ2AuXG4gKlxuICogQHBhcmFtIHNvdXJjZSBBIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gYE9ic2VydmFibGVgLlxuICogQHBhcmFtIGNvbmZpZyBBIGBQYXJ0aWFsPEVmZmVjdENvbmZpZz5gIHRvIGNvbmZpZ3VyZSB0aGUgZWZmZWN0LiAgQnkgZGVmYXVsdCwgYGRpc3BhdGNoYCBpcyB0cnVlIGFuZCBgdXNlRWZmZWN0c0Vycm9ySGFuZGxlcmAgaXMgdHJ1ZS5cbiAqIEByZXR1cm5zIElmIGBFZmZlY3RDb25maWdgI2BkaXNwYXRjaGAgaXMgdHJ1ZSwgcmV0dXJucyBgT2JzZXJ2YWJsZTxBY3Rpb24+YC4gIEVsc2UsIHJldHVybnMgYE9ic2VydmFibGU8dW5rbm93bj5gLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogKiogTWFwcGluZyB0byBhIGRpZmZlcmVudCBhY3Rpb24gKipcbiAqIGBgYHRzXG4gKiBlZmZlY3ROYW1lJCA9IGNyZWF0ZUVmZmVjdChcbiAqICAgKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKFxuICogICAgIG9mVHlwZShGZWF0dXJlQWN0aW9ucy5hY3Rpb25PbmUpLFxuICogICAgIG1hcCgoKSA9PiBGZWF0dXJlQWN0aW9ucy5hY3Rpb25Ud28oKSlcbiAqICAgKVxuICogKTtcbiAqIGBgYFxuICpcbiAqICAqKiBOb24tZGlzcGF0Y2hpbmcgZWZmZWN0cyAqKlxuICogYGBgdHNcbiAqIGVmZmVjdE5hbWUkID0gY3JlYXRlRWZmZWN0KFxuICogICAoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gKiAgICAgb2ZUeXBlKEZlYXR1cmVBY3Rpb25zLmFjdGlvbk9uZSksXG4gKiAgICAgdGFwKCgpID0+IGNvbnNvbGUubG9nKCdBY3Rpb24gT25lIERpc3BhdGNoZWQnKSlcbiAqICAgKSxcbiAqICAgeyBkaXNwYXRjaDogZmFsc2UgfVxuICogICAvLyBGZWF0dXJlQWN0aW9ucy5hY3Rpb25PbmUgaXMgbm90IGRpc3BhdGNoZWRcbiAqICk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVmZmVjdDxcbiAgQyBleHRlbmRzIEVmZmVjdENvbmZpZyxcbiAgRFQgZXh0ZW5kcyBEaXNwYXRjaFR5cGU8Qz4sXG4gIE9UIGV4dGVuZHMgT2JzZXJ2YWJsZVR5cGU8RFQsIE9UPixcbiAgUiBleHRlbmRzIEVmZmVjdFJlc3VsdDxPVD5cbj4oXG4gIHNvdXJjZTogKCkgPT4gUiAmIENvbmRpdGlvbmFsbHlEaXNhbGxvd0FjdGlvbkNyZWF0b3I8RFQsIFI+LFxuICBjb25maWc/OiBQYXJ0aWFsPEM+XG4pOiBSICYgQ3JlYXRlRWZmZWN0TWV0YWRhdGEge1xuICBjb25zdCBlZmZlY3QgPSBzb3VyY2UoKTtcbiAgY29uc3QgdmFsdWU6IEVmZmVjdENvbmZpZyA9IHtcbiAgICAuLi5ERUZBVUxUX0VGRkVDVF9DT05GSUcsXG4gICAgLi4uY29uZmlnLCAvLyBPdmVycmlkZXMgYW55IGRlZmF1bHRzIGlmIHZhbHVlcyBhcmUgcHJvdmlkZWRcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVmZmVjdCwgQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVksIHtcbiAgICB2YWx1ZSxcbiAgfSk7XG4gIHJldHVybiBlZmZlY3QgYXMgdHlwZW9mIGVmZmVjdCAmIENyZWF0ZUVmZmVjdE1ldGFkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRlRWZmZWN0TWV0YWRhdGE8XG4gIFQgZXh0ZW5kcyB7IFtwcm9wcyBpbiBrZXlvZiBUXTogT2JqZWN0IH1cbj4oaW5zdGFuY2U6IFQpOiBFZmZlY3RNZXRhZGF0YTxUPltdIHtcbiAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGluc3RhbmNlKSBhcyBBcnJheTxrZXlvZiBUPjtcblxuICBjb25zdCBtZXRhZGF0YTogRWZmZWN0TWV0YWRhdGE8VD5bXSA9IHByb3BlcnR5TmFtZXNcbiAgICAuZmlsdGVyKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHlOYW1lXSAmJlxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eU5hbWVdLmhhc093blByb3BlcnR5KENSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZKVxuICAgICAgKSB7XG4gICAgICAgIC8vIElmIHRoZSBwcm9wZXJ0eSB0eXBlIGhhcyBvdmVycmlkZGVuIGBoYXNPd25Qcm9wZXJ0eWAgd2UgbmVlZCB0byBlbnN1cmVcbiAgICAgICAgLy8gdGhhdCB0aGUgbWV0YWRhdGEgaXMgdmFsaWQgKGNvbnRhaW5pbmcgYSBgZGlzcGF0Y2hgcHJvcGVydHkpXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3J4L3BsYXRmb3JtL2lzc3Vlcy8yOTc1XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gaW5zdGFuY2VbcHJvcGVydHlOYW1lXSBhcyBhbnk7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eVtDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWV0uaGFzT3duUHJvcGVydHkoJ2Rpc3BhdGNoJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgICAubWFwKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IG1ldGFEYXRhID0gKGluc3RhbmNlW3Byb3BlcnR5TmFtZV0gYXMgYW55KVtcbiAgICAgICAgQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVlcbiAgICAgIF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIC4uLm1ldGFEYXRhLFxuICAgICAgfTtcbiAgICB9KTtcblxuICByZXR1cm4gbWV0YWRhdGE7XG59XG4iXX0=