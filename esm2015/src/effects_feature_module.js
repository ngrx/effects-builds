/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule, Inject, Optional } from '@angular/core';
import { StoreRootModule, StoreFeatureModule, Store } from '@ngrx/store';
import { EffectsRootModule } from './effects_root_module';
import { FEATURE_EFFECTS } from './tokens';
import { getSourceForInstance } from './effects_metadata';
/** @type {?} */
export const UPDATE_EFFECTS = '@ngrx/effects/update-effects';
/** @typedef {?} */
var UpdateEffects;
export { UpdateEffects };
export class EffectsFeatureModule {
    /**
     * @param {?} root
     * @param {?} store
     * @param {?} effectSourceGroups
     * @param {?} storeRootModule
     * @param {?} storeFeatureModule
     */
    constructor(root, store, effectSourceGroups, storeRootModule, storeFeatureModule) {
        effectSourceGroups.forEach(group => {
            /** @type {?} */
            let effectSourceNames = [];
            group.forEach(effectSourceInstance => {
                root.addEffects(effectSourceInstance);
                const { constructor } = getSourceForInstance(effectSourceInstance);
                effectSourceNames.push(constructor.name);
            });
            store.dispatch(/** @type {?} */ ({
                type: UPDATE_EFFECTS,
                effects: effectSourceNames,
            }));
        });
    }
}
EffectsFeatureModule.decorators = [
    { type: NgModule, args: [{},] }
];
/** @nocollapse */
EffectsFeatureModule.ctorParameters = () => [
    { type: EffectsRootModule },
    { type: Store },
    { type: Array, decorators: [{ type: Inject, args: [FEATURE_EFFECTS,] }] },
    { type: StoreRootModule, decorators: [{ type: Optional }] },
    { type: StoreFeatureModule, decorators: [{ type: Optional }] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19mZWF0dXJlX21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19mZWF0dXJlX21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRTFELGFBQWEsY0FBYyxHQUFHLDhCQUE4QixDQUFDOzs7O0FBTzdELE1BQU07Ozs7Ozs7O0lBQ0osWUFDRSxJQUF1QixFQUN2QixLQUFpQixFQUNRLGtCQUEyQixFQUN4QyxlQUFnQyxFQUNoQyxrQkFBc0M7UUFFbEQsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztZQUNqQyxJQUFJLGlCQUFpQixHQUFhLEVBQUUsQ0FBQztZQUVyQyxLQUFLLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFFdEMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ25FLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUMsQ0FBQyxDQUFDO1lBRUgsS0FBSyxDQUFDLFFBQVEsbUJBQWdCO2dCQUM1QixJQUFJLEVBQUUsY0FBYztnQkFDcEIsT0FBTyxFQUFFLGlCQUFpQjthQUMzQixFQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7O1lBeEJGLFFBQVEsU0FBQyxFQUFFOzs7O1lBVkgsaUJBQWlCO1lBRG9CLEtBQUs7d0NBZ0I5QyxNQUFNLFNBQUMsZUFBZTtZQWhCbEIsZUFBZSx1QkFpQm5CLFFBQVE7WUFqQmEsa0JBQWtCLHVCQWtCdkMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZVJvb3RNb2R1bGUsIFN0b3JlRmVhdHVyZU1vZHVsZSwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzUm9vdE1vZHVsZSB9IGZyb20gJy4vZWZmZWN0c19yb290X21vZHVsZSc7XG5pbXBvcnQgeyBGRUFUVVJFX0VGRkVDVFMgfSBmcm9tICcuL3Rva2Vucyc7XG5pbXBvcnQgeyBnZXRTb3VyY2VGb3JJbnN0YW5jZSB9IGZyb20gJy4vZWZmZWN0c19tZXRhZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfRUZGRUNUUyA9ICdAbmdyeC9lZmZlY3RzL3VwZGF0ZS1lZmZlY3RzJztcbmV4cG9ydCB0eXBlIFVwZGF0ZUVmZmVjdHMgPSB7XG4gIHR5cGU6IHR5cGVvZiBVUERBVEVfRUZGRUNUUztcbiAgZWZmZWN0czogc3RyaW5nW107XG59O1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRWZmZWN0c0ZlYXR1cmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICByb290OiBFZmZlY3RzUm9vdE1vZHVsZSxcbiAgICBzdG9yZTogU3RvcmU8YW55PixcbiAgICBASW5qZWN0KEZFQVRVUkVfRUZGRUNUUykgZWZmZWN0U291cmNlR3JvdXBzOiBhbnlbXVtdLFxuICAgIEBPcHRpb25hbCgpIHN0b3JlUm9vdE1vZHVsZTogU3RvcmVSb290TW9kdWxlLFxuICAgIEBPcHRpb25hbCgpIHN0b3JlRmVhdHVyZU1vZHVsZTogU3RvcmVGZWF0dXJlTW9kdWxlXG4gICkge1xuICAgIGVmZmVjdFNvdXJjZUdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgIGxldCBlZmZlY3RTb3VyY2VOYW1lczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgZ3JvdXAuZm9yRWFjaChlZmZlY3RTb3VyY2VJbnN0YW5jZSA9PiB7XG4gICAgICAgIHJvb3QuYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZSk7XG5cbiAgICAgICAgY29uc3QgeyBjb25zdHJ1Y3RvciB9ID0gZ2V0U291cmNlRm9ySW5zdGFuY2UoZWZmZWN0U291cmNlSW5zdGFuY2UpO1xuICAgICAgICBlZmZlY3RTb3VyY2VOYW1lcy5wdXNoKGNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIHN0b3JlLmRpc3BhdGNoKDxVcGRhdGVFZmZlY3RzPntcbiAgICAgICAgdHlwZTogVVBEQVRFX0VGRkVDVFMsXG4gICAgICAgIGVmZmVjdHM6IGVmZmVjdFNvdXJjZU5hbWVzLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==