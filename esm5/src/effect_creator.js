import * as tslib_1 from "tslib";
var CREATE_EFFECT_METADATA_KEY = '__@ngrx/effects_create__';
export function createEffect(source, config) {
    var effect = source();
    // Right now both createEffect and @Effect decorator set default values.
    // Ideally that should only be done in one place that aggregates that info,
    // for example in mergeEffects().
    var value = tslib_1.__assign({ dispatch: true, resubscribeOnError: true }, config);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2NyZWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9jcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxJQUFNLDBCQUEwQixHQUFHLDBCQUEwQixDQUFDO0FBRzlELE1BQU0sVUFBVSxZQUFZLENBSzFCLE1BQWUsRUFBRSxNQUFtQjtJQUNwQyxJQUFNLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUN4Qix3RUFBd0U7SUFDeEUsMkVBQTJFO0lBQzNFLGlDQUFpQztJQUNqQyxJQUFNLEtBQUssc0JBQ1QsUUFBUSxFQUFFLElBQUksRUFDZCxrQkFBa0IsRUFBRSxJQUFJLElBQ3JCLE1BQU0sQ0FDVixDQUFDO0lBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDeEQsS0FBSyxPQUFBO0tBQ04sQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FBSSxRQUFXO0lBQ3BELElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBR3RELENBQUM7SUFFSixJQUFNLFFBQVEsR0FBd0IsYUFBYTtTQUNoRCxNQUFNLENBQ0wsVUFBQSxZQUFZO1FBQ1YsT0FBQSxRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ3RCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUM7SUFEakUsQ0FDaUUsQ0FDcEU7U0FDQSxHQUFHLENBQUMsVUFBQSxZQUFZO1FBQ2YsSUFBTSxRQUFRLEdBQUksUUFBUSxDQUFDLFlBQVksQ0FBUyxDQUM5QywwQkFBMEIsQ0FDM0IsQ0FBQztRQUNGLDBCQUNFLFlBQVksY0FBQSxJQUNULFFBQVEsRUFDWDtJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUwsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdE1ldGFkYXRhLCBFZmZlY3RDb25maWcgfSBmcm9tICcuL21vZGVscyc7XG5cbmNvbnN0IENSRUFURV9FRkZFQ1RfTUVUQURBVEFfS0VZID0gJ19fQG5ncngvZWZmZWN0c19jcmVhdGVfXyc7XG5cbnR5cGUgRGlzcGF0Y2hUeXBlPFQ+ID0gVCBleHRlbmRzIHsgZGlzcGF0Y2g6IGluZmVyIFUgfSA/IFUgOiB1bmtub3duO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVmZmVjdDxcbiAgQyBleHRlbmRzIEVmZmVjdENvbmZpZyxcbiAgVCBleHRlbmRzIERpc3BhdGNoVHlwZTxDPixcbiAgTyBleHRlbmRzIFQgZXh0ZW5kcyBmYWxzZSA/IE9ic2VydmFibGU8dW5rbm93bj4gOiBPYnNlcnZhYmxlPEFjdGlvbj4sXG4gIFIgZXh0ZW5kcyBPIHwgKCguLi5hcmdzOiBhbnlbXSkgPT4gTylcbj4oc291cmNlOiAoKSA9PiBSLCBjb25maWc/OiBQYXJ0aWFsPEM+KTogUiB7XG4gIGNvbnN0IGVmZmVjdCA9IHNvdXJjZSgpO1xuICAvLyBSaWdodCBub3cgYm90aCBjcmVhdGVFZmZlY3QgYW5kIEBFZmZlY3QgZGVjb3JhdG9yIHNldCBkZWZhdWx0IHZhbHVlcy5cbiAgLy8gSWRlYWxseSB0aGF0IHNob3VsZCBvbmx5IGJlIGRvbmUgaW4gb25lIHBsYWNlIHRoYXQgYWdncmVnYXRlcyB0aGF0IGluZm8sXG4gIC8vIGZvciBleGFtcGxlIGluIG1lcmdlRWZmZWN0cygpLlxuICBjb25zdCB2YWx1ZTogRWZmZWN0Q29uZmlnID0ge1xuICAgIGRpc3BhdGNoOiB0cnVlLFxuICAgIHJlc3Vic2NyaWJlT25FcnJvcjogdHJ1ZSxcbiAgICAuLi5jb25maWcsIC8vIE92ZXJyaWRlcyBhbnkgZGVmYXVsdHMgaWYgdmFsdWVzIGFyZSBwcm92aWRlZFxuICB9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWZmZWN0LCBDUkVBVEVfRUZGRUNUX01FVEFEQVRBX0tFWSwge1xuICAgIHZhbHVlLFxuICB9KTtcbiAgcmV0dXJuIGVmZmVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENyZWF0ZUVmZmVjdE1ldGFkYXRhPFQ+KGluc3RhbmNlOiBUKTogRWZmZWN0TWV0YWRhdGE8VD5bXSB7XG4gIGNvbnN0IHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhpbnN0YW5jZSkgYXMgRXh0cmFjdDxcbiAgICBrZXlvZiBULFxuICAgIHN0cmluZ1xuICA+W107XG5cbiAgY29uc3QgbWV0YWRhdGE6IEVmZmVjdE1ldGFkYXRhPFQ+W10gPSBwcm9wZXJ0eU5hbWVzXG4gICAgLmZpbHRlcihcbiAgICAgIHByb3BlcnR5TmFtZSA9PlxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eU5hbWVdICYmXG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5TmFtZV0uaGFzT3duUHJvcGVydHkoQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVkpXG4gICAgKVxuICAgIC5tYXAocHJvcGVydHlOYW1lID0+IHtcbiAgICAgIGNvbnN0IG1ldGFEYXRhID0gKGluc3RhbmNlW3Byb3BlcnR5TmFtZV0gYXMgYW55KVtcbiAgICAgICAgQ1JFQVRFX0VGRkVDVF9NRVRBREFUQV9LRVlcbiAgICAgIF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIC4uLm1ldGFEYXRhLFxuICAgICAgfTtcbiAgICB9KTtcblxuICByZXR1cm4gbWV0YWRhdGE7XG59XG4iXX0=