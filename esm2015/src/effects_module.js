/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/src/effects_module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf, } from '@angular/core';
import { EffectSources } from './effect_sources';
import { Actions } from './actions';
import { ROOT_EFFECTS, FEATURE_EFFECTS, _ROOT_EFFECTS_GUARD } from './tokens';
import { EffectsFeatureModule } from './effects_feature_module';
import { EffectsRootModule } from './effects_root_module';
import { EffectsRunner } from './effects_runner';
export class EffectsModule {
    /**
     * @param {?} featureEffects
     * @return {?}
     */
    static forFeature(featureEffects) {
        return {
            ngModule: EffectsFeatureModule,
            providers: [
                featureEffects,
                {
                    provide: FEATURE_EFFECTS,
                    multi: true,
                    deps: featureEffects,
                    useFactory: createSourceInstances,
                },
            ],
        };
    }
    /**
     * @param {?} rootEffects
     * @return {?}
     */
    static forRoot(rootEffects) {
        return {
            ngModule: EffectsRootModule,
            providers: [
                {
                    provide: _ROOT_EFFECTS_GUARD,
                    useFactory: _provideForRootGuard,
                    deps: [[EffectsRunner, new Optional(), new SkipSelf()]],
                },
                EffectsRunner,
                EffectSources,
                Actions,
                rootEffects,
                {
                    provide: ROOT_EFFECTS,
                    deps: rootEffects,
                    useFactory: createSourceInstances,
                },
            ],
        };
    }
}
EffectsModule.decorators = [
    { type: NgModule, args: [{},] }
];
/**
 * @param {...?} instances
 * @return {?}
 */
export function createSourceInstances(...instances) {
    return instances;
}
/**
 * @param {?} runner
 * @return {?}
 */
export function _provideForRootGuard(runner) {
    if (runner) {
        throw new TypeError(`EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.`);
    }
    return 'guarded';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdHNfbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFFBQVEsRUFHUixRQUFRLEVBQ1IsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDeEIsTUFBTSxDQUFDLFVBQVUsQ0FDZixjQUEyQjtRQUUzQixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsY0FBYztnQkFDZDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLFVBQVUsRUFBRSxxQkFBcUI7aUJBQ2xDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUNaLFdBQXdCO1FBRXhCLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixVQUFVLEVBQUUsb0JBQW9CO29CQUNoQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFDeEQ7Z0JBQ0QsYUFBYTtnQkFDYixhQUFhO2dCQUNiLE9BQU87Z0JBQ1AsV0FBVztnQkFDWDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLFVBQVUsRUFBRSxxQkFBcUI7aUJBQ2xDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBekNGLFFBQVEsU0FBQyxFQUFFOzs7Ozs7QUE0Q1osTUFBTSxVQUFVLHFCQUFxQixDQUFDLEdBQUcsU0FBZ0I7SUFDdkQsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsTUFBcUI7SUFDeEQsSUFBSSxNQUFNLEVBQUU7UUFDVixNQUFNLElBQUksU0FBUyxDQUNqQixzR0FBc0csQ0FDdkcsQ0FBQztLQUNIO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5nTW9kdWxlLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBUeXBlLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0U291cmNlcyB9IGZyb20gJy4vZWZmZWN0X3NvdXJjZXMnO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBST09UX0VGRkVDVFMsIEZFQVRVUkVfRUZGRUNUUywgX1JPT1RfRUZGRUNUU19HVUFSRCB9IGZyb20gJy4vdG9rZW5zJztcbmltcG9ydCB7IEVmZmVjdHNGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi9lZmZlY3RzX2ZlYXR1cmVfbW9kdWxlJztcbmltcG9ydCB7IEVmZmVjdHNSb290TW9kdWxlIH0gZnJvbSAnLi9lZmZlY3RzX3Jvb3RfbW9kdWxlJztcbmltcG9ydCB7IEVmZmVjdHNSdW5uZXIgfSBmcm9tICcuL2VmZmVjdHNfcnVubmVyJztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIEVmZmVjdHNNb2R1bGUge1xuICBzdGF0aWMgZm9yRmVhdHVyZShcbiAgICBmZWF0dXJlRWZmZWN0czogVHlwZTxhbnk+W11cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxFZmZlY3RzRmVhdHVyZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRWZmZWN0c0ZlYXR1cmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgZmVhdHVyZUVmZmVjdHMsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBGRUFUVVJFX0VGRkVDVFMsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgZGVwczogZmVhdHVyZUVmZmVjdHMsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY3JlYXRlU291cmNlSW5zdGFuY2VzLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgcm9vdEVmZmVjdHM6IFR5cGU8YW55PltdXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RWZmZWN0c1Jvb3RNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEVmZmVjdHNSb290TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBfUk9PVF9FRkZFQ1RTX0dVQVJELFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IF9wcm92aWRlRm9yUm9vdEd1YXJkLFxuICAgICAgICAgIGRlcHM6IFtbRWZmZWN0c1J1bm5lciwgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpXV0sXG4gICAgICAgIH0sXG4gICAgICAgIEVmZmVjdHNSdW5uZXIsXG4gICAgICAgIEVmZmVjdFNvdXJjZXMsXG4gICAgICAgIEFjdGlvbnMsXG4gICAgICAgIHJvb3RFZmZlY3RzLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUk9PVF9FRkZFQ1RTLFxuICAgICAgICAgIGRlcHM6IHJvb3RFZmZlY3RzLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNyZWF0ZVNvdXJjZUluc3RhbmNlcyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU291cmNlSW5zdGFuY2VzKC4uLmluc3RhbmNlczogYW55W10pIHtcbiAgcmV0dXJuIGluc3RhbmNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9wcm92aWRlRm9yUm9vdEd1YXJkKHJ1bm5lcjogRWZmZWN0c1J1bm5lcik6IGFueSB7XG4gIGlmIChydW5uZXIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgYEVmZmVjdHNNb2R1bGUuZm9yUm9vdCgpIGNhbGxlZCB0d2ljZS4gRmVhdHVyZSBtb2R1bGVzIHNob3VsZCB1c2UgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKCkgaW5zdGVhZC5gXG4gICAgKTtcbiAgfVxuICByZXR1cm4gJ2d1YXJkZWQnO1xufVxuIl19