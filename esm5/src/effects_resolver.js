var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { merge } from 'rxjs';
import { ignoreElements, map, materialize } from 'rxjs/operators';
import { getSourceForInstance, getSourceMetadata } from './effects_metadata';
import { isOnRunEffects } from './on_run_effects';
export function mergeEffects(sourceInstance) {
    var sourceName = getSourceForInstance(sourceInstance).constructor.name;
    var observables = getSourceMetadata(sourceInstance).map(function (_a) {
        var propertyName = _a.propertyName, dispatch = _a.dispatch;
        var observable = typeof sourceInstance[propertyName] === 'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        if (dispatch === false) {
            return observable.pipe(ignoreElements());
        }
        var materialized$ = observable.pipe(materialize());
        return materialized$.pipe(map(function (notification) { return ({
            effect: sourceInstance[propertyName],
            notification: notification,
            propertyName: propertyName,
            sourceName: sourceName,
            sourceInstance: sourceInstance,
        }); }));
    });
    return merge.apply(void 0, __spread(observables));
}
export function resolveEffectSource(sourceInstance) {
    var mergedEffects$ = mergeEffects(sourceInstance);
    if (isOnRunEffects(sourceInstance)) {
        return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxNQUFNLFVBQVUsWUFBWSxDQUMxQixjQUFtQjtJQUVuQixJQUFNLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBRXpFLElBQU0sV0FBVyxHQUFzQixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQzFFLFVBQUMsRUFBMEI7WUFBeEIsOEJBQVksRUFBRSxzQkFBUTtRQUN2QixJQUFNLFVBQVUsR0FDZCxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVO1lBQ2hELENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVuQyxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDdEIsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDMUM7UUFFRCxJQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFckQsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUN2QixHQUFHLENBQ0QsVUFBQyxZQUFrQyxJQUF5QixPQUFBLENBQUM7WUFDM0QsTUFBTSxFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFDcEMsWUFBWSxjQUFBO1lBQ1osWUFBWSxjQUFBO1lBQ1osVUFBVSxZQUFBO1lBQ1YsY0FBYyxnQkFBQTtTQUNmLENBQUMsRUFOMEQsQ0FNMUQsQ0FDSCxDQUNGLENBQUM7SUFDSixDQUFDLENBQ0YsQ0FBQztJQUVGLE9BQU8sS0FBSyx3QkFBSSxXQUFXLEdBQUU7QUFDL0IsQ0FBQztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxjQUFtQjtJQUNyRCxJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFcEQsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDbEMsT0FBTyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDeEQ7SUFFRCxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIE5vdGlmaWNhdGlvbiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaWdub3JlRWxlbWVudHMsIG1hcCwgbWF0ZXJpYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEVmZmVjdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vZWZmZWN0X25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBnZXRTb3VyY2VGb3JJbnN0YW5jZSwgZ2V0U291cmNlTWV0YWRhdGEgfSBmcm9tICcuL2VmZmVjdHNfbWV0YWRhdGEnO1xuaW1wb3J0IHsgaXNPblJ1bkVmZmVjdHMgfSBmcm9tICcuL29uX3J1bl9lZmZlY3RzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRWZmZWN0cyhcbiAgc291cmNlSW5zdGFuY2U6IGFueVxuKTogT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+IHtcbiAgY29uc3Qgc291cmNlTmFtZSA9IGdldFNvdXJjZUZvckluc3RhbmNlKHNvdXJjZUluc3RhbmNlKS5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gIGNvbnN0IG9ic2VydmFibGVzOiBPYnNlcnZhYmxlPGFueT5bXSA9IGdldFNvdXJjZU1ldGFkYXRhKHNvdXJjZUluc3RhbmNlKS5tYXAoXG4gICAgKHsgcHJvcGVydHlOYW1lLCBkaXNwYXRjaCB9KTogT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+ID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PiA9XG4gICAgICAgIHR5cGVvZiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdKClcbiAgICAgICAgICA6IHNvdXJjZUluc3RhbmNlW3Byb3BlcnR5TmFtZV07XG5cbiAgICAgIGlmIChkaXNwYXRjaCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUucGlwZShpZ25vcmVFbGVtZW50cygpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWF0ZXJpYWxpemVkJCA9IG9ic2VydmFibGUucGlwZShtYXRlcmlhbGl6ZSgpKTtcblxuICAgICAgcmV0dXJuIG1hdGVyaWFsaXplZCQucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbjxBY3Rpb24+KTogRWZmZWN0Tm90aWZpY2F0aW9uID0+ICh7XG4gICAgICAgICAgICBlZmZlY3Q6IHNvdXJjZUluc3RhbmNlW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICBub3RpZmljYXRpb24sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBzb3VyY2VOYW1lLFxuICAgICAgICAgICAgc291cmNlSW5zdGFuY2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIG1lcmdlKC4uLm9ic2VydmFibGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFZmZlY3RTb3VyY2Uoc291cmNlSW5zdGFuY2U6IGFueSkge1xuICBjb25zdCBtZXJnZWRFZmZlY3RzJCA9IG1lcmdlRWZmZWN0cyhzb3VyY2VJbnN0YW5jZSk7XG5cbiAgaWYgKGlzT25SdW5FZmZlY3RzKHNvdXJjZUluc3RhbmNlKSkge1xuICAgIHJldHVybiBzb3VyY2VJbnN0YW5jZS5uZ3J4T25SdW5FZmZlY3RzKG1lcmdlZEVmZmVjdHMkKTtcbiAgfVxuXG4gIHJldHVybiBtZXJnZWRFZmZlY3RzJDtcbn1cbiJdfQ==