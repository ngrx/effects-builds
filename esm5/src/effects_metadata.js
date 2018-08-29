var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
import { compose } from '@ngrx/store';
var METADATA_KEY = '__@ngrx/effects__';
function getEffectMetadataEntries(sourceProto) {
    return sourceProto.constructor.hasOwnProperty(METADATA_KEY)
        ? sourceProto.constructor[METADATA_KEY]
        : [];
}
function setEffectMetadataEntries(sourceProto, entries) {
    var constructor = sourceProto.constructor;
    var meta = constructor.hasOwnProperty(METADATA_KEY)
        ? constructor[METADATA_KEY]
        : Object.defineProperty(constructor, METADATA_KEY, { value: [] })[METADATA_KEY];
    Array.prototype.push.apply(meta, entries);
}
export function Effect(_a) {
    var _b = (_a === void 0 ? {} : _a).dispatch, dispatch = _b === void 0 ? true : _b;
    // Once TS is >= 2.8 replace with <Key extends Extract<keyof T, string>>
    // for propertyName.
    return function (target, propertyName) {
        var metadata = { propertyName: propertyName, dispatch: dispatch };
        setEffectMetadataEntries(target, [metadata]);
    };
}
export function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}
export function getSourceMetadata(instance) {
    return compose(getEffectMetadataEntries, getSourceForInstance)(instance);
}
export function getEffectsMetadata(instance) {
    var metadata = {};
    try {
        for (var _a = __values(getSourceMetadata(instance)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var _c = _b.value, propertyName = _c.propertyName, dispatch = _c.dispatch;
            metadata[propertyName] = { dispatch: dispatch };
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return metadata;
    var e_1, _d;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QyxJQUFNLFlBQVksR0FBRyxtQkFBbUIsQ0FBQztBQVF6QyxrQ0FBcUMsV0FBYztJQUNqRCxPQUFPLFdBQVcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUN6RCxDQUFDLENBQUUsV0FBVyxDQUFDLFdBQW1CLENBQUMsWUFBWSxDQUFDO1FBQ2hELENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVCxDQUFDO0FBRUQsa0NBQ0UsV0FBYyxFQUNkLE9BQWlDO0lBRWpDLElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDNUMsSUFBTSxJQUFJLEdBQTZCLFdBQVcsQ0FBQyxjQUFjLENBQy9ELFlBQVksQ0FDYjtRQUNDLENBQUMsQ0FBRSxXQUFtQixDQUFDLFlBQVksQ0FBQztRQUNwQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzdELFlBQVksQ0FDYixDQUFDO0lBQ04sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsTUFBTSxpQkFBb0IsRUFBd0I7UUFBdEIsdUNBQWUsRUFBZixvQ0FBZTtJQUN6Qyx3RUFBd0U7SUFDeEUsb0JBQW9CO0lBQ3BCLE9BQU8sVUFBUyxNQUFTLEVBQUUsWUFBb0I7UUFDN0MsSUFBTSxRQUFRLEdBQXNCLEVBQUUsWUFBWSxjQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQztRQUMvRCx3QkFBd0IsQ0FBSSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQXdELENBQUM7QUFDM0QsQ0FBQztBQUVELE1BQU0sK0JBQWtDLFFBQVc7SUFDakQsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxNQUFNLDRCQUErQixRQUFXO0lBQzlDLE9BQU8sT0FBTyxDQUNaLHdCQUF3QixFQUN4QixvQkFBb0IsQ0FDckIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNkLENBQUM7QUFNRCxNQUFNLDZCQUFnQyxRQUFXO0lBQy9DLElBQU0sUUFBUSxHQUF1QixFQUFFLENBQUM7O1FBRXhDLEtBQXlDLElBQUEsS0FBQSxTQUFBLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFBLGdCQUFBO1lBQXpELElBQUEsYUFBMEIsRUFBeEIsOEJBQVksRUFBRSxzQkFBUTtZQUNqQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO1NBQ3ZDOzs7Ozs7Ozs7SUFFRCxPQUFPLFFBQVEsQ0FBQzs7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmNvbnN0IE1FVEFEQVRBX0tFWSA9ICdfX0BuZ3J4L2VmZmVjdHNfXyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWZmZWN0TWV0YWRhdGE8VD4ge1xuICAvLyBPbmNlIFRTIGlzID49IDIuOCByZXBsYWNlIHdpdGggPEtleSBleHRlbmRzIEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPj5cbiAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XG4gIGRpc3BhdGNoOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBnZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4oc291cmNlUHJvdG86IFQpOiBBcnJheTxFZmZlY3RNZXRhZGF0YTxUPj4ge1xuICByZXR1cm4gc291cmNlUHJvdG8uY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoTUVUQURBVEFfS0VZKVxuICAgID8gKHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yIGFzIGFueSlbTUVUQURBVEFfS0VZXVxuICAgIDogW107XG59XG5cbmZ1bmN0aW9uIHNldEVmZmVjdE1ldGFkYXRhRW50cmllczxUPihcbiAgc291cmNlUHJvdG86IFQsXG4gIGVudHJpZXM6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PlxuKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yID0gc291cmNlUHJvdG8uY29uc3RydWN0b3I7XG4gIGNvbnN0IG1ldGE6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PiA9IGNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KFxuICAgIE1FVEFEQVRBX0tFWVxuICApXG4gICAgPyAoY29uc3RydWN0b3IgYXMgYW55KVtNRVRBREFUQV9LRVldXG4gICAgOiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0b3IsIE1FVEFEQVRBX0tFWSwgeyB2YWx1ZTogW10gfSlbXG4gICAgICAgIE1FVEFEQVRBX0tFWVxuICAgICAgXTtcbiAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkobWV0YSwgZW50cmllcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFZmZlY3Q8VD4oeyBkaXNwYXRjaCA9IHRydWUgfSA9IHt9KTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAvLyBPbmNlIFRTIGlzID49IDIuOCByZXBsYWNlIHdpdGggPEtleSBleHRlbmRzIEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPj5cbiAgLy8gZm9yIHByb3BlcnR5TmFtZS5cbiAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogVCwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtZXRhZGF0YTogRWZmZWN0TWV0YWRhdGE8VD4gPSB7IHByb3BlcnR5TmFtZSwgZGlzcGF0Y2ggfTtcbiAgICBzZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4odGFyZ2V0LCBbbWV0YWRhdGFdKTtcbiAgfSBhcyAodGFyZ2V0OiB7fSwgcHJvcGVydHlOYW1lOiBzdHJpbmcgfCBzeW1ib2wpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VyY2VGb3JJbnN0YW5jZTxUPihpbnN0YW5jZTogVCk6IFQge1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdXJjZU1ldGFkYXRhPFQ+KGluc3RhbmNlOiBUKTogQXJyYXk8RWZmZWN0TWV0YWRhdGE8VD4+IHtcbiAgcmV0dXJuIGNvbXBvc2UoXG4gICAgZ2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzLFxuICAgIGdldFNvdXJjZUZvckluc3RhbmNlXG4gICkoaW5zdGFuY2UpO1xufVxuXG4vLyBPbmNlIFRTIGlzID49IDIuOCByZXBsYWNlIHdpdGhcbi8vIHtba2V5IGluIDxLZXkgZXh0ZW5kcyBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz4+XT86ICB7IGRpc3BhdGNoOiBib29sZWFuIH0gfTtcbmV4cG9ydCB0eXBlIEVmZmVjdHNNZXRhZGF0YTxUPiA9IHsgW2tleTogc3RyaW5nXTogeyBkaXNwYXRjaDogYm9vbGVhbiB9IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3RzTWV0YWRhdGE8VD4oaW5zdGFuY2U6IFQpOiBFZmZlY3RzTWV0YWRhdGE8VD4ge1xuICBjb25zdCBtZXRhZGF0YTogRWZmZWN0c01ldGFkYXRhPFQ+ID0ge307XG5cbiAgZm9yIChjb25zdCB7IHByb3BlcnR5TmFtZSwgZGlzcGF0Y2ggfSBvZiBnZXRTb3VyY2VNZXRhZGF0YShpbnN0YW5jZSkpIHtcbiAgICBtZXRhZGF0YVtwcm9wZXJ0eU5hbWVdID0geyBkaXNwYXRjaCB9O1xuICB9XG5cbiAgcmV0dXJuIG1ldGFkYXRhO1xufVxuIl19