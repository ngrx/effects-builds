var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @fileoverview added by tsickle
 * Generated from: src/effect_decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { compose } from '@ngrx/store';
import { DEFAULT_EFFECT_CONFIG, } from './models';
import { getSourceForInstance } from './utils';
/** @type {?} */
var METADATA_KEY = '__@ngrx/effects__';
/**
 * @param {?=} config
 * @return {?}
 */
export function Effect(config) {
    if (config === void 0) { config = {}; }
    return (/**
     * @template T, K
     * @param {?} target
     * @param {?} propertyName
     * @return {?}
     */
    function (target, propertyName) {
        /** @type {?} */
        var metadata = __assign(__assign(__assign({}, DEFAULT_EFFECT_CONFIG), config), { // Overrides any defaults if values are provided
            propertyName: propertyName });
        addEffectMetadataEntry(target, metadata);
    });
}
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getEffectDecoratorMetadata(instance) {
    /** @type {?} */
    var effectsDecorators = compose(getEffectMetadataEntries, getSourceForInstance)(instance);
    return effectsDecorators;
}
/**
 * Type guard to detemine whether METADATA_KEY is already present on the Class
 * constructor
 * @template T
 * @param {?} sourceProto
 * @return {?}
 */
function hasMetadataEntries(sourceProto) {
    return sourceProto.constructor.hasOwnProperty(METADATA_KEY);
}
/**
 * Add Effect Metadata to the Effect Class constructor under specific key
 * @template T
 * @param {?} sourceProto
 * @param {?} metadata
 * @return {?}
 */
function addEffectMetadataEntry(sourceProto, metadata) {
    if (hasMetadataEntries(sourceProto)) {
        sourceProto.constructor[METADATA_KEY].push(metadata);
    }
    else {
        Object.defineProperty(sourceProto.constructor, METADATA_KEY, {
            value: [metadata],
        });
    }
}
/**
 * @template T
 * @param {?} sourceProto
 * @return {?}
 */
function getEffectMetadataEntries(sourceProto) {
    return hasMetadataEntries(sourceProto)
        ? sourceProto.constructor[METADATA_KEY]
        : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2RlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3J4L2VmZmVjdHMvIiwic291cmNlcyI6WyJzcmMvZWZmZWN0X2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QyxPQUFPLEVBQ0wscUJBQXFCLEdBSXRCLE1BQU0sVUFBVSxDQUFDO0FBQ2xCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7SUFFekMsWUFBWSxHQUFHLG1CQUFtQjs7Ozs7QUFFeEMsTUFBTSxVQUFVLE1BQU0sQ0FBQyxNQUF5QjtJQUF6Qix1QkFBQSxFQUFBLFdBQXlCO0lBQzlDOzs7Ozs7SUFBTyxVQUNMLE1BQVMsRUFDVCxZQUFlOztZQUVULFFBQVEsa0NBQ1QscUJBQXFCLEdBQ3JCLE1BQU0sS0FBRSxnREFBZ0Q7WUFDM0QsWUFBWSxjQUFBLEdBQ2I7UUFDRCxzQkFBc0IsQ0FBSSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUN4QyxRQUFXOztRQUVMLGlCQUFpQixHQUF3QixPQUFPLENBQ3BELHdCQUF3QixFQUN4QixvQkFBb0IsQ0FDckIsQ0FBQyxRQUFRLENBQUM7SUFFWCxPQUFPLGlCQUFpQixDQUFDO0FBQzNCLENBQUM7Ozs7Ozs7O0FBTUQsU0FBUyxrQkFBa0IsQ0FDekIsV0FBYztJQU1kLE9BQU8sV0FBVyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDOUQsQ0FBQzs7Ozs7Ozs7QUFHRCxTQUFTLHNCQUFzQixDQUM3QixXQUFjLEVBQ2QsUUFBMkI7SUFFM0IsSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUNuQyxXQUFXLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN0RDtTQUFNO1FBQ0wsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRTtZQUMzRCxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDbEIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDOzs7Ozs7QUFFRCxTQUFTLHdCQUF3QixDQUMvQixXQUFjO0lBRWQsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7UUFDcEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHtcbiAgREVGQVVMVF9FRkZFQ1RfQ09ORklHLFxuICBFZmZlY3RDb25maWcsXG4gIEVmZmVjdE1ldGFkYXRhLFxuICBFZmZlY3RQcm9wZXJ0eUtleSxcbn0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0U291cmNlRm9ySW5zdGFuY2UgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgTUVUQURBVEFfS0VZID0gJ19fQG5ncngvZWZmZWN0c19fJztcblxuZXhwb3J0IGZ1bmN0aW9uIEVmZmVjdChjb25maWc6IEVmZmVjdENvbmZpZyA9IHt9KSB7XG4gIHJldHVybiBmdW5jdGlvbjxUIGV4dGVuZHMgT2JqZWN0LCBLIGV4dGVuZHMgRWZmZWN0UHJvcGVydHlLZXk8VD4+KFxuICAgIHRhcmdldDogVCxcbiAgICBwcm9wZXJ0eU5hbWU6IEtcbiAgKSB7XG4gICAgY29uc3QgbWV0YWRhdGE6IEVmZmVjdE1ldGFkYXRhPFQ+ID0ge1xuICAgICAgLi4uREVGQVVMVF9FRkZFQ1RfQ09ORklHLFxuICAgICAgLi4uY29uZmlnLCAvLyBPdmVycmlkZXMgYW55IGRlZmF1bHRzIGlmIHZhbHVlcyBhcmUgcHJvdmlkZWRcbiAgICAgIHByb3BlcnR5TmFtZSxcbiAgICB9O1xuICAgIGFkZEVmZmVjdE1ldGFkYXRhRW50cnk8VD4odGFyZ2V0LCBtZXRhZGF0YSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3REZWNvcmF0b3JNZXRhZGF0YTxUPihcbiAgaW5zdGFuY2U6IFRcbik6IEVmZmVjdE1ldGFkYXRhPFQ+W10ge1xuICBjb25zdCBlZmZlY3RzRGVjb3JhdG9yczogRWZmZWN0TWV0YWRhdGE8VD5bXSA9IGNvbXBvc2UoXG4gICAgZ2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzLFxuICAgIGdldFNvdXJjZUZvckluc3RhbmNlXG4gICkoaW5zdGFuY2UpO1xuXG4gIHJldHVybiBlZmZlY3RzRGVjb3JhdG9ycztcbn1cblxuLyoqXG4gKiBUeXBlIGd1YXJkIHRvIGRldGVtaW5lIHdoZXRoZXIgTUVUQURBVEFfS0VZIGlzIGFscmVhZHkgcHJlc2VudCBvbiB0aGUgQ2xhc3NcbiAqIGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIGhhc01ldGFkYXRhRW50cmllczxUIGV4dGVuZHMgT2JqZWN0PihcbiAgc291cmNlUHJvdG86IFRcbik6IHNvdXJjZVByb3RvIGlzIHR5cGVvZiBzb3VyY2VQcm90byAmIHtcbiAgY29uc3RydWN0b3I6IHR5cGVvZiBzb3VyY2VQcm90by5jb25zdHJ1Y3RvciAmIHtcbiAgICBbTUVUQURBVEFfS0VZXTogRWZmZWN0TWV0YWRhdGE8VD5bXTtcbiAgfTtcbn0ge1xuICByZXR1cm4gc291cmNlUHJvdG8uY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoTUVUQURBVEFfS0VZKTtcbn1cblxuLyoqIEFkZCBFZmZlY3QgTWV0YWRhdGEgdG8gdGhlIEVmZmVjdCBDbGFzcyBjb25zdHJ1Y3RvciB1bmRlciBzcGVjaWZpYyBrZXkgKi9cbmZ1bmN0aW9uIGFkZEVmZmVjdE1ldGFkYXRhRW50cnk8VCBleHRlbmRzIG9iamVjdD4oXG4gIHNvdXJjZVByb3RvOiBULFxuICBtZXRhZGF0YTogRWZmZWN0TWV0YWRhdGE8VD5cbikge1xuICBpZiAoaGFzTWV0YWRhdGFFbnRyaWVzKHNvdXJjZVByb3RvKSkge1xuICAgIHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yW01FVEFEQVRBX0tFWV0ucHVzaChtZXRhZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yLCBNRVRBREFUQV9LRVksIHtcbiAgICAgIHZhbHVlOiBbbWV0YWRhdGFdLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEVmZmVjdE1ldGFkYXRhRW50cmllczxUIGV4dGVuZHMgb2JqZWN0PihcbiAgc291cmNlUHJvdG86IFRcbik6IEVmZmVjdE1ldGFkYXRhPFQ+W10ge1xuICByZXR1cm4gaGFzTWV0YWRhdGFFbnRyaWVzKHNvdXJjZVByb3RvKVxuICAgID8gc291cmNlUHJvdG8uY29uc3RydWN0b3JbTUVUQURBVEFfS0VZXVxuICAgIDogW107XG59XG4iXX0=