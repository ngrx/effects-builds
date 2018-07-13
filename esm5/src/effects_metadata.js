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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QyxJQUFNLFlBQVksR0FBRyxtQkFBbUIsQ0FBQztBQU96QyxrQ0FBcUMsV0FBYztJQUNqRCxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ3pELENBQUMsQ0FBRSxXQUFXLENBQUMsV0FBbUIsQ0FBQyxZQUFZLENBQUM7UUFDaEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztDQUNSO0FBRUQsa0NBQ0UsV0FBYyxFQUNkLE9BQWlDO0lBRWpDLElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDNUMsSUFBTSxJQUFJLEdBQTZCLFdBQVcsQ0FBQyxjQUFjLENBQy9ELFlBQVksQ0FDYjtRQUNDLENBQUMsQ0FBRSxXQUFtQixDQUFDLFlBQVksQ0FBQztRQUNwQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzdELFlBQVksQ0FDYixDQUFDO0lBQ04sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztDQUMzQztBQUVELE1BQU0saUJBQW9CLEVBQXdCO1FBQXRCLHVDQUFlLEVBQWYsb0NBQWU7SUFDekMsTUFBTSxDQUFDLFVBQVMsTUFBUyxFQUFFLFlBQXFCO1FBQzlDLElBQU0sUUFBUSxHQUFzQixFQUFFLFlBQVksY0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7UUFDL0Qsd0JBQXdCLENBQUksTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUNNLENBQUM7Q0FDMUQ7QUFFRCxNQUFNLCtCQUFrQyxRQUFXO0lBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ3hDO0FBRUQsTUFBTSw0QkFBK0IsUUFBVztJQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDMUU7QUFJRCxNQUFNLDZCQUFnQyxRQUFXO0lBQy9DLElBQU0sUUFBUSxHQUF1QixFQUFFLENBQUM7O1FBRXhDLEdBQUcsQ0FBQyxDQUFxQyxJQUFBLEtBQUEsU0FBQSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQSxnQkFBQTsrQkFBdkQsOEJBQVksRUFBRSxzQkFBUTtZQUNqQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO1NBQ3ZDOzs7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDOztDQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmNvbnN0IE1FVEFEQVRBX0tFWSA9ICdfX0BuZ3J4L2VmZmVjdHNfXyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWZmZWN0TWV0YWRhdGE8VD4ge1xuICBwcm9wZXJ0eU5hbWU6IGtleW9mIFQ7XG4gIGRpc3BhdGNoOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBnZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4oc291cmNlUHJvdG86IFQpOiBBcnJheTxFZmZlY3RNZXRhZGF0YTxUPj4ge1xuICByZXR1cm4gc291cmNlUHJvdG8uY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoTUVUQURBVEFfS0VZKVxuICAgID8gKHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yIGFzIGFueSlbTUVUQURBVEFfS0VZXVxuICAgIDogW107XG59XG5cbmZ1bmN0aW9uIHNldEVmZmVjdE1ldGFkYXRhRW50cmllczxUPihcbiAgc291cmNlUHJvdG86IFQsXG4gIGVudHJpZXM6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PlxuKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yID0gc291cmNlUHJvdG8uY29uc3RydWN0b3I7XG4gIGNvbnN0IG1ldGE6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PiA9IGNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KFxuICAgIE1FVEFEQVRBX0tFWVxuICApXG4gICAgPyAoY29uc3RydWN0b3IgYXMgYW55KVtNRVRBREFUQV9LRVldXG4gICAgOiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0b3IsIE1FVEFEQVRBX0tFWSwgeyB2YWx1ZTogW10gfSlbXG4gICAgICAgIE1FVEFEQVRBX0tFWVxuICAgICAgXTtcbiAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkobWV0YSwgZW50cmllcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFZmZlY3Q8VD4oeyBkaXNwYXRjaCA9IHRydWUgfSA9IHt9KTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBULCBwcm9wZXJ0eU5hbWU6IGtleW9mIFQpIHtcbiAgICBjb25zdCBtZXRhZGF0YTogRWZmZWN0TWV0YWRhdGE8VD4gPSB7IHByb3BlcnR5TmFtZSwgZGlzcGF0Y2ggfTtcbiAgICBzZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4odGFyZ2V0LCBbbWV0YWRhdGFdKTtcbiAgfSBhcyAodGFyZ2V0OiB7fSwgcHJvcGVydHlOYW1lOiBzdHJpbmcgfCBzeW1ib2wpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VyY2VGb3JJbnN0YW5jZTxUPihpbnN0YW5jZTogVCk6IFQge1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdXJjZU1ldGFkYXRhPFQ+KGluc3RhbmNlOiBUKTogQXJyYXk8RWZmZWN0TWV0YWRhdGE8VD4+IHtcbiAgcmV0dXJuIGNvbXBvc2UoZ2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzLCBnZXRTb3VyY2VGb3JJbnN0YW5jZSkoaW5zdGFuY2UpO1xufVxuXG5leHBvcnQgdHlwZSBFZmZlY3RzTWV0YWRhdGE8VD4gPSB7IFtrZXkgaW4ga2V5b2YgVF0/OiB7IGRpc3BhdGNoOiBib29sZWFuIH0gfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVmZmVjdHNNZXRhZGF0YTxUPihpbnN0YW5jZTogVCk6IEVmZmVjdHNNZXRhZGF0YTxUPiB7XG4gIGNvbnN0IG1ldGFkYXRhOiBFZmZlY3RzTWV0YWRhdGE8VD4gPSB7fTtcblxuICBmb3IgKGNvbnN0IHsgcHJvcGVydHlOYW1lLCBkaXNwYXRjaCB9IG9mIGdldFNvdXJjZU1ldGFkYXRhKGluc3RhbmNlKSkge1xuICAgIG1ldGFkYXRhW3Byb3BlcnR5TmFtZV0gPSB7IGRpc3BhdGNoIH07XG4gIH1cblxuICByZXR1cm4gbWV0YWRhdGE7XG59XG4iXX0=