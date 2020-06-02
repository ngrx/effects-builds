/**
 * @fileoverview added by tsickle
 * Generated from: src/effects_feature_module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Inject, Optional } from '@angular/core';
import { StoreRootModule, StoreFeatureModule } from '@ngrx/store';
import { EffectsRootModule } from './effects_root_module';
import { FEATURE_EFFECTS } from './tokens';
var EffectsFeatureModule = /** @class */ (function () {
    function EffectsFeatureModule(root, effectSourceGroups, storeRootModule, storeFeatureModule) {
        effectSourceGroups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            return group.forEach((/**
             * @param {?} effectSourceInstance
             * @return {?}
             */
            function (effectSourceInstance) {
                return root.addEffects(effectSourceInstance);
            }));
        }));
    }
    EffectsFeatureModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    /** @nocollapse */
    EffectsFeatureModule.ctorParameters = function () { return [
        { type: EffectsRootModule },
        { type: Array, decorators: [{ type: Inject, args: [FEATURE_EFFECTS,] }] },
        { type: StoreRootModule, decorators: [{ type: Optional }] },
        { type: StoreFeatureModule, decorators: [{ type: Optional }] }
    ]; };
    return EffectsFeatureModule;
}());
export { EffectsFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19mZWF0dXJlX21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3J4L2VmZmVjdHMvIiwic291cmNlcyI6WyJzcmMvZWZmZWN0c19mZWF0dXJlX21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFM0M7SUFFRSw4QkFDRSxJQUF1QixFQUNFLGtCQUEyQixFQUN4QyxlQUFnQyxFQUNoQyxrQkFBc0M7UUFFbEQsa0JBQWtCLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsS0FBSztZQUM5QixPQUFBLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxvQkFBb0I7Z0JBQ2hDLE9BQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztZQUFyQyxDQUFxQyxFQUN0QztRQUZELENBRUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBYkYsUUFBUSxTQUFDLEVBQUU7Ozs7Z0JBSEgsaUJBQWlCOzRDQU9yQixNQUFNLFNBQUMsZUFBZTtnQkFSbEIsZUFBZSx1QkFTbkIsUUFBUTtnQkFUYSxrQkFBa0IsdUJBVXZDLFFBQVE7O0lBUWIsMkJBQUM7Q0FBQSxBQWRELElBY0M7U0FiWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVSb290TW9kdWxlLCBTdG9yZUZlYXR1cmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzUm9vdE1vZHVsZSB9IGZyb20gJy4vZWZmZWN0c19yb290X21vZHVsZSc7XG5pbXBvcnQgeyBGRUFUVVJFX0VGRkVDVFMgfSBmcm9tICcuL3Rva2Vucyc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBFZmZlY3RzRmVhdHVyZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvb3Q6IEVmZmVjdHNSb290TW9kdWxlLFxuICAgIEBJbmplY3QoRkVBVFVSRV9FRkZFQ1RTKSBlZmZlY3RTb3VyY2VHcm91cHM6IGFueVtdW10sXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVSb290TW9kdWxlOiBTdG9yZVJvb3RNb2R1bGUsXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVGZWF0dXJlTW9kdWxlOiBTdG9yZUZlYXR1cmVNb2R1bGVcbiAgKSB7XG4gICAgZWZmZWN0U291cmNlR3JvdXBzLmZvckVhY2goZ3JvdXAgPT5cbiAgICAgIGdyb3VwLmZvckVhY2goZWZmZWN0U291cmNlSW5zdGFuY2UgPT5cbiAgICAgICAgcm9vdC5hZGRFZmZlY3RzKGVmZmVjdFNvdXJjZUluc3RhbmNlKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==