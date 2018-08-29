import { NgModule, Inject, Optional } from '@angular/core';
import { StoreRootModule, StoreFeatureModule } from '@ngrx/store';
import { EffectsRootModule } from './effects_root_module';
import { FEATURE_EFFECTS } from './tokens';
var EffectsFeatureModule = /** @class */ (function () {
    function EffectsFeatureModule(root, effectSourceGroups, storeRootModule, storeFeatureModule) {
        this.root = root;
        effectSourceGroups.forEach(function (group) {
            return group.forEach(function (effectSourceInstance) {
                return root.addEffects(effectSourceInstance);
            });
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19mZWF0dXJlX21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19mZWF0dXJlX21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRTNDO0lBRUUsOEJBQ1UsSUFBdUIsRUFDTixrQkFBMkIsRUFDeEMsZUFBZ0MsRUFDaEMsa0JBQXNDO1FBSDFDLFNBQUksR0FBSixJQUFJLENBQW1CO1FBSy9CLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7WUFDOUIsT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsb0JBQW9CO2dCQUNoQyxPQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7WUFBckMsQ0FBcUMsQ0FDdEM7UUFGRCxDQUVDLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWJGLFFBQVEsU0FBQyxFQUFFOzs7O2dCQUhILGlCQUFpQjs0Q0FPckIsTUFBTSxTQUFDLGVBQWU7Z0JBUmxCLGVBQWUsdUJBU25CLFFBQVE7Z0JBVGEsa0JBQWtCLHVCQVV2QyxRQUFROztJQVFiLDJCQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlUm9vdE1vZHVsZSwgU3RvcmVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c1Jvb3RNb2R1bGUgfSBmcm9tICcuL2VmZmVjdHNfcm9vdF9tb2R1bGUnO1xuaW1wb3J0IHsgRkVBVFVSRV9FRkZFQ1RTIH0gZnJvbSAnLi90b2tlbnMnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRWZmZWN0c0ZlYXR1cmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvb3Q6IEVmZmVjdHNSb290TW9kdWxlLFxuICAgIEBJbmplY3QoRkVBVFVSRV9FRkZFQ1RTKSBlZmZlY3RTb3VyY2VHcm91cHM6IGFueVtdW10sXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVSb290TW9kdWxlOiBTdG9yZVJvb3RNb2R1bGUsXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVGZWF0dXJlTW9kdWxlOiBTdG9yZUZlYXR1cmVNb2R1bGVcbiAgKSB7XG4gICAgZWZmZWN0U291cmNlR3JvdXBzLmZvckVhY2goZ3JvdXAgPT5cbiAgICAgIGdyb3VwLmZvckVhY2goZWZmZWN0U291cmNlSW5zdGFuY2UgPT5cbiAgICAgICAgcm9vdC5hZGRFZmZlY3RzKGVmZmVjdFNvdXJjZUluc3RhbmNlKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==