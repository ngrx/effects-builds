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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2RlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3J4L2VmZmVjdHMvIiwic291cmNlcyI6WyJzcmMvZWZmZWN0X2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QyxPQUFPLEVBQ0wscUJBQXFCLEdBSXRCLE1BQU0sVUFBVSxDQUFDO0FBQ2xCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7SUFFekMsWUFBWSxHQUFHLG1CQUFtQjs7Ozs7QUFFeEMsTUFBTSxVQUFVLE1BQU0sQ0FBQyxNQUF5QjtJQUF6Qix1QkFBQSxFQUFBLFdBQXlCO0lBQzlDOzs7Ozs7SUFBTyxVQUNMLE1BQVMsRUFDVCxZQUFlOztZQUVULFFBQVEsa0NBQ1QscUJBQXFCLEdBQ3JCLE1BQU0sS0FBRSxnREFBZ0Q7WUFDM0QsWUFBWSxjQUFBLEdBQ2I7UUFDRCxzQkFBc0IsQ0FBSSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUN4QyxRQUFXOztRQUVMLGlCQUFpQixHQUF3QixPQUFPLENBQ3BELHdCQUF3QixFQUN4QixvQkFBb0IsQ0FDckIsQ0FBQyxRQUFRLENBQUM7SUFFWCxPQUFPLGlCQUFpQixDQUFDO0FBQzNCLENBQUM7Ozs7Ozs7O0FBTUQsU0FBUyxrQkFBa0IsQ0FDekIsV0FBYztJQU1kLE9BQU8sV0FBVyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDOUQsQ0FBQzs7Ozs7Ozs7QUFHRCxTQUFTLHNCQUFzQixDQUM3QixXQUFjLEVBQ2QsUUFBMkI7SUFFM0IsSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUNuQyxXQUFXLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN0RDtTQUFNO1FBQ0wsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRTtZQUMzRCxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDbEIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDOzs7Ozs7QUFFRCxTQUFTLHdCQUF3QixDQUMvQixXQUFjO0lBRWQsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7UUFDcEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHtcbiAgREVGQVVMVF9FRkZFQ1RfQ09ORklHLFxuICBFZmZlY3RDb25maWcsXG4gIEVmZmVjdE1ldGFkYXRhLFxuICBFZmZlY3RQcm9wZXJ0eUtleSxcbn0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0U291cmNlRm9ySW5zdGFuY2UgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgTUVUQURBVEFfS0VZID0gJ19fQG5ncngvZWZmZWN0c19fJztcblxuZXhwb3J0IGZ1bmN0aW9uIEVmZmVjdChjb25maWc6IEVmZmVjdENvbmZpZyA9IHt9KSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VCBleHRlbmRzIE9iamVjdCwgSyBleHRlbmRzIEVmZmVjdFByb3BlcnR5S2V5PFQ+PihcbiAgICB0YXJnZXQ6IFQsXG4gICAgcHJvcGVydHlOYW1lOiBLXG4gICkge1xuICAgIGNvbnN0IG1ldGFkYXRhOiBFZmZlY3RNZXRhZGF0YTxUPiA9IHtcbiAgICAgIC4uLkRFRkFVTFRfRUZGRUNUX0NPTkZJRyxcbiAgICAgIC4uLmNvbmZpZywgLy8gT3ZlcnJpZGVzIGFueSBkZWZhdWx0cyBpZiB2YWx1ZXMgYXJlIHByb3ZpZGVkXG4gICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgfTtcbiAgICBhZGRFZmZlY3RNZXRhZGF0YUVudHJ5PFQ+KHRhcmdldCwgbWV0YWRhdGEpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWZmZWN0RGVjb3JhdG9yTWV0YWRhdGE8VD4oXG4gIGluc3RhbmNlOiBUXG4pOiBFZmZlY3RNZXRhZGF0YTxUPltdIHtcbiAgY29uc3QgZWZmZWN0c0RlY29yYXRvcnM6IEVmZmVjdE1ldGFkYXRhPFQ+W10gPSBjb21wb3NlKFxuICAgIGdldEVmZmVjdE1ldGFkYXRhRW50cmllcyxcbiAgICBnZXRTb3VyY2VGb3JJbnN0YW5jZVxuICApKGluc3RhbmNlKTtcblxuICByZXR1cm4gZWZmZWN0c0RlY29yYXRvcnM7XG59XG5cbi8qKlxuICogVHlwZSBndWFyZCB0byBkZXRlbWluZSB3aGV0aGVyIE1FVEFEQVRBX0tFWSBpcyBhbHJlYWR5IHByZXNlbnQgb24gdGhlIENsYXNzXG4gKiBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBoYXNNZXRhZGF0YUVudHJpZXM8VCBleHRlbmRzIE9iamVjdD4oXG4gIHNvdXJjZVByb3RvOiBUXG4pOiBzb3VyY2VQcm90byBpcyB0eXBlb2Ygc291cmNlUHJvdG8gJiB7XG4gIGNvbnN0cnVjdG9yOiB0eXBlb2Ygc291cmNlUHJvdG8uY29uc3RydWN0b3IgJiB7XG4gICAgW01FVEFEQVRBX0tFWV06IEVmZmVjdE1ldGFkYXRhPFQ+W107XG4gIH07XG59IHtcbiAgcmV0dXJuIHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KE1FVEFEQVRBX0tFWSk7XG59XG5cbi8qKiBBZGQgRWZmZWN0IE1ldGFkYXRhIHRvIHRoZSBFZmZlY3QgQ2xhc3MgY29uc3RydWN0b3IgdW5kZXIgc3BlY2lmaWMga2V5ICovXG5mdW5jdGlvbiBhZGRFZmZlY3RNZXRhZGF0YUVudHJ5PFQgZXh0ZW5kcyBvYmplY3Q+KFxuICBzb3VyY2VQcm90bzogVCxcbiAgbWV0YWRhdGE6IEVmZmVjdE1ldGFkYXRhPFQ+XG4pIHtcbiAgaWYgKGhhc01ldGFkYXRhRW50cmllcyhzb3VyY2VQcm90bykpIHtcbiAgICBzb3VyY2VQcm90by5jb25zdHJ1Y3RvcltNRVRBREFUQV9LRVldLnB1c2gobWV0YWRhdGEpO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzb3VyY2VQcm90by5jb25zdHJ1Y3RvciwgTUVUQURBVEFfS0VZLCB7XG4gICAgICB2YWx1ZTogW21ldGFkYXRhXSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VCBleHRlbmRzIG9iamVjdD4oXG4gIHNvdXJjZVByb3RvOiBUXG4pOiBFZmZlY3RNZXRhZGF0YTxUPltdIHtcbiAgcmV0dXJuIGhhc01ldGFkYXRhRW50cmllcyhzb3VyY2VQcm90bylcbiAgICA/IHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yW01FVEFEQVRBX0tFWV1cbiAgICA6IFtdO1xufVxuIl19