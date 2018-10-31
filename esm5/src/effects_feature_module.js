var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Inject, Optional } from '@angular/core';
import { StoreRootModule, StoreFeatureModule, Store } from '@ngrx/store';
import { EffectsRootModule } from './effects_root_module';
import { FEATURE_EFFECTS } from './tokens';
import { getSourceForInstance } from './effects_metadata';
export var UPDATE_EFFECTS = '@ngrx/effects/update-effects';
var EffectsFeatureModule = /** @class */ (function () {
    function EffectsFeatureModule(root, store, effectSourceGroups, storeRootModule, storeFeatureModule) {
        effectSourceGroups.forEach(function (group) {
            var effectSourceNames = [];
            group.forEach(function (effectSourceInstance) {
                root.addEffects(effectSourceInstance);
                var constructor = getSourceForInstance(effectSourceInstance).constructor;
                effectSourceNames.push(constructor.name);
            });
            store.dispatch({
                type: UPDATE_EFFECTS,
                effects: effectSourceNames,
            });
        });
    }
    EffectsFeatureModule = __decorate([
        NgModule({}),
        __param(2, Inject(FEATURE_EFFECTS)),
        __param(3, Optional()),
        __param(4, Optional()),
        __metadata("design:paramtypes", [EffectsRootModule,
            Store, Array, StoreRootModule,
            StoreFeatureModule])
    ], EffectsFeatureModule);
    return EffectsFeatureModule;
}());
export { EffectsFeatureModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19mZWF0dXJlX21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19mZWF0dXJlX21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRCxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsOEJBQThCLENBQUM7QUFPN0Q7SUFDRSw4QkFDRSxJQUF1QixFQUN2QixLQUFpQixFQUNRLGtCQUEyQixFQUN4QyxlQUFnQyxFQUNoQyxrQkFBc0M7UUFFbEQsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUM5QixJQUFJLGlCQUFpQixHQUFhLEVBQUUsQ0FBQztZQUVyQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsb0JBQW9CO2dCQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBRTlCLElBQUEsb0VBQVcsQ0FBZ0Q7Z0JBQ25FLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFLLENBQUMsUUFBUSxDQUFnQjtnQkFDNUIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE9BQU8sRUFBRSxpQkFBaUI7YUFDM0IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBdkJVLG9CQUFvQjtRQURoQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBS1IsV0FBQSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDdkIsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsUUFBUSxFQUFFLENBQUE7eUNBSkwsaUJBQWlCO1lBQ2hCLEtBQUssU0FFaUIsZUFBZTtZQUNaLGtCQUFrQjtPQU56QyxvQkFBb0IsQ0F3QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXhCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVSb290TW9kdWxlLCBTdG9yZUZlYXR1cmVNb2R1bGUsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c1Jvb3RNb2R1bGUgfSBmcm9tICcuL2VmZmVjdHNfcm9vdF9tb2R1bGUnO1xuaW1wb3J0IHsgRkVBVFVSRV9FRkZFQ1RTIH0gZnJvbSAnLi90b2tlbnMnO1xuaW1wb3J0IHsgZ2V0U291cmNlRm9ySW5zdGFuY2UgfSBmcm9tICcuL2VmZmVjdHNfbWV0YWRhdGEnO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0VGRkVDVFMgPSAnQG5ncngvZWZmZWN0cy91cGRhdGUtZWZmZWN0cyc7XG5leHBvcnQgdHlwZSBVcGRhdGVFZmZlY3RzID0ge1xuICB0eXBlOiB0eXBlb2YgVVBEQVRFX0VGRkVDVFM7XG4gIGVmZmVjdHM6IHN0cmluZ1tdO1xufTtcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIEVmZmVjdHNGZWF0dXJlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcm9vdDogRWZmZWN0c1Jvb3RNb2R1bGUsXG4gICAgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgQEluamVjdChGRUFUVVJFX0VGRkVDVFMpIGVmZmVjdFNvdXJjZUdyb3VwczogYW55W11bXSxcbiAgICBAT3B0aW9uYWwoKSBzdG9yZVJvb3RNb2R1bGU6IFN0b3JlUm9vdE1vZHVsZSxcbiAgICBAT3B0aW9uYWwoKSBzdG9yZUZlYXR1cmVNb2R1bGU6IFN0b3JlRmVhdHVyZU1vZHVsZVxuICApIHtcbiAgICBlZmZlY3RTb3VyY2VHcm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICBsZXQgZWZmZWN0U291cmNlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIGdyb3VwLmZvckVhY2goZWZmZWN0U291cmNlSW5zdGFuY2UgPT4ge1xuICAgICAgICByb290LmFkZEVmZmVjdHMoZWZmZWN0U291cmNlSW5zdGFuY2UpO1xuXG4gICAgICAgIGNvbnN0IHsgY29uc3RydWN0b3IgfSA9IGdldFNvdXJjZUZvckluc3RhbmNlKGVmZmVjdFNvdXJjZUluc3RhbmNlKTtcbiAgICAgICAgZWZmZWN0U291cmNlTmFtZXMucHVzaChjb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICBzdG9yZS5kaXNwYXRjaCg8VXBkYXRlRWZmZWN0cz57XG4gICAgICAgIHR5cGU6IFVQREFURV9FRkZFQ1RTLFxuICAgICAgICBlZmZlY3RzOiBlZmZlY3RTb3VyY2VOYW1lcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=