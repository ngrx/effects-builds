import { NgModule, Inject, Optional } from '@angular/core';
import { _FEATURE_EFFECTS_INSTANCE_GROUPS } from './tokens';
import * as i0 from "@angular/core";
import * as i1 from "./effects_root_module";
import * as i2 from "@ngrx/store";
export class EffectsFeatureModule {
    constructor(effectsRootModule, effectsInstanceGroups, storeRootModule, storeFeatureModule) {
        const effectsInstances = effectsInstanceGroups.flat();
        for (const effectsInstance of effectsInstances) {
            effectsRootModule.addEffects(effectsInstance);
        }
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EffectsFeatureModule, deps: [{ token: i1.EffectsRootModule }, { token: _FEATURE_EFFECTS_INSTANCE_GROUPS }, { token: i2.StoreRootModule, optional: true }, { token: i2.StoreFeatureModule, optional: true }], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.3", ngImport: i0, type: EffectsFeatureModule }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EffectsFeatureModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EffectsFeatureModule, decorators: [{
            type: NgModule,
            args: [{}]
        }], ctorParameters: function () { return [{ type: i1.EffectsRootModule }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [_FEATURE_EFFECTS_INSTANCE_GROUPS]
                }] }, { type: i2.StoreRootModule, decorators: [{
                    type: Optional
                }] }, { type: i2.StoreFeatureModule, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19mZWF0dXJlX21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19mZWF0dXJlX21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0QsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBRzVELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFDRSxpQkFBb0MsRUFFcEMscUJBQWtDLEVBQ3RCLGVBQWdDLEVBQ2hDLGtCQUFzQztRQUVsRCxNQUFNLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RELEtBQUssTUFBTSxlQUFlLElBQUksZ0JBQWdCLEVBQUU7WUFDOUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztpSUFaVSxvQkFBb0IsbURBR3JCLGdDQUFnQztrSUFIL0Isb0JBQW9CO2tJQUFwQixvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBRGhDLFFBQVE7bUJBQUMsRUFBRTs7MEJBSVAsTUFBTTsyQkFBQyxnQ0FBZ0M7OzBCQUV2QyxRQUFROzswQkFDUixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlUm9vdE1vZHVsZSwgU3RvcmVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c1Jvb3RNb2R1bGUgfSBmcm9tICcuL2VmZmVjdHNfcm9vdF9tb2R1bGUnO1xuaW1wb3J0IHsgX0ZFQVRVUkVfRUZGRUNUU19JTlNUQU5DRV9HUk9VUFMgfSBmcm9tICcuL3Rva2Vucyc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBFZmZlY3RzRmVhdHVyZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVmZmVjdHNSb290TW9kdWxlOiBFZmZlY3RzUm9vdE1vZHVsZSxcbiAgICBASW5qZWN0KF9GRUFUVVJFX0VGRkVDVFNfSU5TVEFOQ0VfR1JPVVBTKVxuICAgIGVmZmVjdHNJbnN0YW5jZUdyb3VwczogdW5rbm93bltdW10sXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVSb290TW9kdWxlOiBTdG9yZVJvb3RNb2R1bGUsXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVGZWF0dXJlTW9kdWxlOiBTdG9yZUZlYXR1cmVNb2R1bGVcbiAgKSB7XG4gICAgY29uc3QgZWZmZWN0c0luc3RhbmNlcyA9IGVmZmVjdHNJbnN0YW5jZUdyb3Vwcy5mbGF0KCk7XG4gICAgZm9yIChjb25zdCBlZmZlY3RzSW5zdGFuY2Ugb2YgZWZmZWN0c0luc3RhbmNlcykge1xuICAgICAgZWZmZWN0c1Jvb3RNb2R1bGUuYWRkRWZmZWN0cyhlZmZlY3RzSW5zdGFuY2UpO1xuICAgIH1cbiAgfVxufVxuIl19