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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxNQUFNLHVCQUNKLGNBQW1CO0lBRW5CLElBQU0sVUFBVSxHQUFHLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFFekUsSUFBTSxXQUFXLEdBQXNCLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FDMUUsVUFBQyxFQUEwQjtZQUF4Qiw4QkFBWSxFQUFFLHNCQUFRO1FBQ3ZCLElBQU0sVUFBVSxHQUNkLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVU7WUFDaEQsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNoQyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5DLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtZQUN0QixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUMxQztRQUVELElBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUVyRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQ3ZCLEdBQUcsQ0FDRCxVQUFDLFlBQWtDLElBQXlCLE9BQUEsQ0FBQztZQUMzRCxNQUFNLEVBQUUsY0FBYyxDQUFDLFlBQVksQ0FBQztZQUNwQyxZQUFZLGNBQUE7WUFDWixZQUFZLGNBQUE7WUFDWixVQUFVLFlBQUE7WUFDVixjQUFjLGdCQUFBO1NBQ2YsQ0FBQyxFQU4wRCxDQU0xRCxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUMsQ0FDRixDQUFDO0lBRUYsT0FBTyxLQUFLLHdCQUFJLFdBQVcsR0FBRTtBQUMvQixDQUFDO0FBRUQsTUFBTSw4QkFBOEIsY0FBbUI7SUFDckQsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXBELElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ2xDLE9BQU8sY0FBYyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3hEO0lBRUQsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IG1lcmdlLCBOb3RpZmljYXRpb24sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlnbm9yZUVsZW1lbnRzLCBtYXAsIG1hdGVyaWFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFZmZlY3ROb3RpZmljYXRpb24gfSBmcm9tICcuL2VmZmVjdF9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZ2V0U291cmNlRm9ySW5zdGFuY2UsIGdldFNvdXJjZU1ldGFkYXRhIH0gZnJvbSAnLi9lZmZlY3RzX21ldGFkYXRhJztcbmltcG9ydCB7IGlzT25SdW5FZmZlY3RzIH0gZnJvbSAnLi9vbl9ydW5fZWZmZWN0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUVmZmVjdHMoXG4gIHNvdXJjZUluc3RhbmNlOiBhbnlcbik6IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPiB7XG4gIGNvbnN0IHNvdXJjZU5hbWUgPSBnZXRTb3VyY2VGb3JJbnN0YW5jZShzb3VyY2VJbnN0YW5jZSkuY29uc3RydWN0b3IubmFtZTtcblxuICBjb25zdCBvYnNlcnZhYmxlczogT2JzZXJ2YWJsZTxhbnk+W10gPSBnZXRTb3VyY2VNZXRhZGF0YShzb3VyY2VJbnN0YW5jZSkubWFwKFxuICAgICh7IHByb3BlcnR5TmFtZSwgZGlzcGF0Y2ggfSk6IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPiA9PiB7XG4gICAgICBjb25zdCBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4gPVxuICAgICAgICB0eXBlb2Ygc291cmNlSW5zdGFuY2VbcHJvcGVydHlOYW1lXSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gc291cmNlSW5zdGFuY2VbcHJvcGVydHlOYW1lXSgpXG4gICAgICAgICAgOiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdO1xuXG4gICAgICBpZiAoZGlzcGF0Y2ggPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoaWdub3JlRWxlbWVudHMoKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hdGVyaWFsaXplZCQgPSBvYnNlcnZhYmxlLnBpcGUobWF0ZXJpYWxpemUoKSk7XG5cbiAgICAgIHJldHVybiBtYXRlcmlhbGl6ZWQkLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb248QWN0aW9uPik6IEVmZmVjdE5vdGlmaWNhdGlvbiA9PiAoe1xuICAgICAgICAgICAgZWZmZWN0OiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgc291cmNlTmFtZSxcbiAgICAgICAgICAgIHNvdXJjZUluc3RhbmNlLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiBtZXJnZSguLi5vYnNlcnZhYmxlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlRWZmZWN0U291cmNlKHNvdXJjZUluc3RhbmNlOiBhbnkpIHtcbiAgY29uc3QgbWVyZ2VkRWZmZWN0cyQgPSBtZXJnZUVmZmVjdHMoc291cmNlSW5zdGFuY2UpO1xuXG4gIGlmIChpc09uUnVuRWZmZWN0cyhzb3VyY2VJbnN0YW5jZSkpIHtcbiAgICByZXR1cm4gc291cmNlSW5zdGFuY2UubmdyeE9uUnVuRWZmZWN0cyhtZXJnZWRFZmZlY3RzJCk7XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkRWZmZWN0cyQ7XG59XG4iXX0=