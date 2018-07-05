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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QyxJQUFNLFlBQVksR0FBRyxtQkFBbUIsQ0FBQztBQU96QyxrQ0FBcUMsV0FBYztJQUNqRCxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ3pELENBQUMsQ0FBRSxXQUFXLENBQUMsV0FBbUIsQ0FBQyxZQUFZLENBQUM7UUFDaEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztDQUNSO0FBRUQsa0NBQ0UsV0FBYyxFQUNkLE9BQWlDO0lBRWpDLElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDNUMsSUFBTSxJQUFJLEdBQTZCLFdBQVcsQ0FBQyxjQUFjLENBQy9ELFlBQVksQ0FDYjtRQUNDLENBQUMsQ0FBRSxXQUFtQixDQUFDLFlBQVksQ0FBQztRQUNwQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzdELFlBQVksQ0FDYixDQUFDO0lBQ04sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztDQUMzQztBQUVELE1BQU0saUJBQW9CLEVBQXdCO1FBQXRCLHVDQUFlLEVBQWYsb0NBQWU7SUFDekMsTUFBTSxDQUFDLFVBQVMsTUFBUyxFQUFFLFlBQXFCO1FBQzlDLElBQU0sUUFBUSxHQUFzQixFQUFFLFlBQVksY0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7UUFDL0Qsd0JBQXdCLENBQUksTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUNNLENBQUM7Q0FDMUQ7QUFFRCxNQUFNLCtCQUFrQyxRQUFXO0lBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ3hDO0FBRUQsTUFBTSw0QkFBK0IsUUFBVztJQUM5QyxNQUFNLENBQUMsT0FBTyxDQUNaLHdCQUF3QixFQUN4QixvQkFBb0IsQ0FDckIsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUNiO0FBSUQsTUFBTSw2QkFBZ0MsUUFBVztJQUMvQyxJQUFNLFFBQVEsR0FBdUIsRUFBRSxDQUFDOztRQUV4QyxHQUFHLENBQUMsQ0FBcUMsSUFBQSxLQUFBLFNBQUEsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUEsZ0JBQUE7K0JBQXZELDhCQUFZLEVBQUUsc0JBQVE7WUFDakMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQztTQUN2Qzs7Ozs7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7Q0FDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5jb25zdCBNRVRBREFUQV9LRVkgPSAnX19AbmdyeC9lZmZlY3RzX18nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVmZmVjdE1ldGFkYXRhPFQ+IHtcbiAgcHJvcGVydHlOYW1lOiBrZXlvZiBUO1xuICBkaXNwYXRjaDogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gZ2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzPFQ+KHNvdXJjZVByb3RvOiBUKTogQXJyYXk8RWZmZWN0TWV0YWRhdGE8VD4+IHtcbiAgcmV0dXJuIHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KE1FVEFEQVRBX0tFWSlcbiAgICA/IChzb3VyY2VQcm90by5jb25zdHJ1Y3RvciBhcyBhbnkpW01FVEFEQVRBX0tFWV1cbiAgICA6IFtdO1xufVxuXG5mdW5jdGlvbiBzZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4oXG4gIHNvdXJjZVByb3RvOiBULFxuICBlbnRyaWVzOiBBcnJheTxFZmZlY3RNZXRhZGF0YTxUPj5cbikge1xuICBjb25zdCBjb25zdHJ1Y3RvciA9IHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yO1xuICBjb25zdCBtZXRhOiBBcnJheTxFZmZlY3RNZXRhZGF0YTxUPj4gPSBjb25zdHJ1Y3Rvci5oYXNPd25Qcm9wZXJ0eShcbiAgICBNRVRBREFUQV9LRVlcbiAgKVxuICAgID8gKGNvbnN0cnVjdG9yIGFzIGFueSlbTUVUQURBVEFfS0VZXVxuICAgIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLCBNRVRBREFUQV9LRVksIHsgdmFsdWU6IFtdIH0pW1xuICAgICAgICBNRVRBREFUQV9LRVlcbiAgICAgIF07XG4gIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KG1ldGEsIGVudHJpZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRWZmZWN0PFQ+KHsgZGlzcGF0Y2ggPSB0cnVlIH0gPSB7fSk6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogVCwgcHJvcGVydHlOYW1lOiBrZXlvZiBUKSB7XG4gICAgY29uc3QgbWV0YWRhdGE6IEVmZmVjdE1ldGFkYXRhPFQ+ID0geyBwcm9wZXJ0eU5hbWUsIGRpc3BhdGNoIH07XG4gICAgc2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzPFQ+KHRhcmdldCwgW21ldGFkYXRhXSk7XG4gIH0gYXMgKHRhcmdldDoge30sIHByb3BlcnR5TmFtZTogc3RyaW5nIHwgc3ltYm9sKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291cmNlRm9ySW5zdGFuY2U8VD4oaW5zdGFuY2U6IFQpOiBUIHtcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VyY2VNZXRhZGF0YTxUPihpbnN0YW5jZTogVCk6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PiB7XG4gIHJldHVybiBjb21wb3NlKFxuICAgIGdldEVmZmVjdE1ldGFkYXRhRW50cmllcyxcbiAgICBnZXRTb3VyY2VGb3JJbnN0YW5jZVxuICApKGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IHR5cGUgRWZmZWN0c01ldGFkYXRhPFQ+ID0geyBba2V5IGluIGtleW9mIFRdPzogeyBkaXNwYXRjaDogYm9vbGVhbiB9IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3RzTWV0YWRhdGE8VD4oaW5zdGFuY2U6IFQpOiBFZmZlY3RzTWV0YWRhdGE8VD4ge1xuICBjb25zdCBtZXRhZGF0YTogRWZmZWN0c01ldGFkYXRhPFQ+ID0ge307XG5cbiAgZm9yIChjb25zdCB7IHByb3BlcnR5TmFtZSwgZGlzcGF0Y2ggfSBvZiBnZXRTb3VyY2VNZXRhZGF0YShpbnN0YW5jZSkpIHtcbiAgICBtZXRhZGF0YVtwcm9wZXJ0eU5hbWVdID0geyBkaXNwYXRjaCB9O1xuICB9XG5cbiAgcmV0dXJuIG1ldGFkYXRhO1xufVxuIl19