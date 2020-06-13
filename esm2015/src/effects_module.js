/**
 * @fileoverview added by tsickle
 * Generated from: src/effects_module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injector, NgModule, Optional, SkipSelf, } from '@angular/core';
import { Actions } from './actions';
import { EffectSources } from './effect_sources';
import { EffectsFeatureModule } from './effects_feature_module';
import { defaultEffectsErrorHandler } from './effects_error_handler';
import { EffectsRootModule } from './effects_root_module';
import { EffectsRunner } from './effects_runner';
import { _FEATURE_EFFECTS, _ROOT_EFFECTS, _ROOT_EFFECTS_GUARD, EFFECTS_ERROR_HANDLER, FEATURE_EFFECTS, ROOT_EFFECTS, USER_PROVIDED_EFFECTS, } from './tokens';
export class EffectsModule {
    /**
     * @param {?=} featureEffects
     * @return {?}
     */
    static forFeature(featureEffects = []) {
        return {
            ngModule: EffectsFeatureModule,
            providers: [
                featureEffects,
                {
                    provide: _FEATURE_EFFECTS,
                    multi: true,
                    useValue: featureEffects,
                },
                {
                    provide: USER_PROVIDED_EFFECTS,
                    multi: true,
                    useValue: [],
                },
                {
                    provide: FEATURE_EFFECTS,
                    multi: true,
                    useFactory: createEffects,
                    deps: [Injector, _FEATURE_EFFECTS, USER_PROVIDED_EFFECTS],
                },
            ],
        };
    }
    /**
     * @param {?=} rootEffects
     * @return {?}
     */
    static forRoot(rootEffects = []) {
        return {
            ngModule: EffectsRootModule,
            providers: [
                {
                    provide: _ROOT_EFFECTS_GUARD,
                    useFactory: _provideForRootGuard,
                    deps: [[EffectsRunner, new Optional(), new SkipSelf()]],
                },
                {
                    provide: EFFECTS_ERROR_HANDLER,
                    useValue: defaultEffectsErrorHandler,
                },
                EffectsRunner,
                EffectSources,
                Actions,
                rootEffects,
                {
                    provide: _ROOT_EFFECTS,
                    useValue: [rootEffects],
                },
                {
                    provide: USER_PROVIDED_EFFECTS,
                    multi: true,
                    useValue: [],
                },
                {
                    provide: ROOT_EFFECTS,
                    useFactory: createEffects,
                    deps: [Injector, _ROOT_EFFECTS, USER_PROVIDED_EFFECTS],
                },
            ],
        };
    }
}
EffectsModule.decorators = [
    { type: NgModule, args: [{},] }
];
/**
 * @param {?} injector
 * @param {?} effectGroups
 * @param {?} userProvidedEffectGroups
 * @return {?}
 */
export function createEffects(injector, effectGroups, userProvidedEffectGroups) {
    /** @type {?} */
    const mergedEffects = [];
    for (let effectGroup of effectGroups) {
        mergedEffects.push(...effectGroup);
    }
    for (let userProvidedEffectGroup of userProvidedEffectGroups) {
        mergedEffects.push(...userProvidedEffectGroup);
    }
    return createEffectInstances(injector, mergedEffects);
}
/**
 * @param {?} injector
 * @param {?} effects
 * @return {?}
 */
export function createEffectInstances(injector, effects) {
    return effects.map((/**
     * @param {?} effect
     * @return {?}
     */
    (effect) => injector.get(effect)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdHNfbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFFBQVEsRUFFUixRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixlQUFlLEVBQ2YsWUFBWSxFQUNaLHFCQUFxQixHQUN0QixNQUFNLFVBQVUsQ0FBQztBQUdsQixNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDeEIsTUFBTSxDQUFDLFVBQVUsQ0FDZixpQkFBOEIsRUFBRTtRQUVoQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsY0FBYztnQkFDZDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO29CQUNYLFVBQVUsRUFBRSxhQUFhO29CQUN6QixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLENBQUM7aUJBQzFEO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUNaLGNBQTJCLEVBQUU7UUFFN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFVBQVUsRUFBRSxvQkFBb0I7b0JBQ2hDLElBQUksRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUN4RDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsMEJBQTBCO2lCQUNyQztnQkFDRCxhQUFhO2dCQUNiLGFBQWE7Z0JBQ2IsT0FBTztnQkFDUCxXQUFXO2dCQUNYO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUM7aUJBQ3hCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRSxFQUFFO2lCQUNiO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixVQUFVLEVBQUUsYUFBYTtvQkFDekIsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQztpQkFDdkQ7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFoRUYsUUFBUSxTQUFDLEVBQUU7Ozs7Ozs7O0FBbUVaLE1BQU0sVUFBVSxhQUFhLENBQzNCLFFBQWtCLEVBQ2xCLFlBQTJCLEVBQzNCLHdCQUF1Qzs7VUFFakMsYUFBYSxHQUFnQixFQUFFO0lBRXJDLEtBQUssSUFBSSxXQUFXLElBQUksWUFBWSxFQUFFO1FBQ3BDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztLQUNwQztJQUVELEtBQUssSUFBSSx1QkFBdUIsSUFBSSx3QkFBd0IsRUFBRTtRQUM1RCxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztLQUNoRDtJQUVELE9BQU8scUJBQXFCLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3hELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FDbkMsUUFBa0IsRUFDbEIsT0FBb0I7SUFFcEIsT0FBTyxPQUFPLENBQUMsR0FBRzs7OztJQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7QUFDdkQsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsTUFBcUI7SUFDeEQsSUFBSSxNQUFNLEVBQUU7UUFDVixNQUFNLElBQUksU0FBUyxDQUNqQixzR0FBc0csQ0FDdkcsQ0FBQztLQUNIO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdG9yLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgRWZmZWN0U291cmNlcyB9IGZyb20gJy4vZWZmZWN0X3NvdXJjZXMnO1xuaW1wb3J0IHsgRWZmZWN0c0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuL2VmZmVjdHNfZmVhdHVyZV9tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdEVmZmVjdHNFcnJvckhhbmRsZXIgfSBmcm9tICcuL2VmZmVjdHNfZXJyb3JfaGFuZGxlcic7XG5pbXBvcnQgeyBFZmZlY3RzUm9vdE1vZHVsZSB9IGZyb20gJy4vZWZmZWN0c19yb290X21vZHVsZSc7XG5pbXBvcnQgeyBFZmZlY3RzUnVubmVyIH0gZnJvbSAnLi9lZmZlY3RzX3J1bm5lcic7XG5pbXBvcnQge1xuICBfRkVBVFVSRV9FRkZFQ1RTLFxuICBfUk9PVF9FRkZFQ1RTLFxuICBfUk9PVF9FRkZFQ1RTX0dVQVJELFxuICBFRkZFQ1RTX0VSUk9SX0hBTkRMRVIsXG4gIEZFQVRVUkVfRUZGRUNUUyxcbiAgUk9PVF9FRkZFQ1RTLFxuICBVU0VSX1BST1ZJREVEX0VGRkVDVFMsXG59IGZyb20gJy4vdG9rZW5zJztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIEVmZmVjdHNNb2R1bGUge1xuICBzdGF0aWMgZm9yRmVhdHVyZShcbiAgICBmZWF0dXJlRWZmZWN0czogVHlwZTxhbnk+W10gPSBbXVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEVmZmVjdHNGZWF0dXJlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBFZmZlY3RzRmVhdHVyZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBmZWF0dXJlRWZmZWN0cyxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IF9GRUFUVVJFX0VGRkVDVFMsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgdXNlVmFsdWU6IGZlYXR1cmVFZmZlY3RzLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVVNFUl9QUk9WSURFRF9FRkZFQ1RTLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZVZhbHVlOiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEZFQVRVUkVfRUZGRUNUUyxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjcmVhdGVFZmZlY3RzLFxuICAgICAgICAgIGRlcHM6IFtJbmplY3RvciwgX0ZFQVRVUkVfRUZGRUNUUywgVVNFUl9QUk9WSURFRF9FRkZFQ1RTXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KFxuICAgIHJvb3RFZmZlY3RzOiBUeXBlPGFueT5bXSA9IFtdXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RWZmZWN0c1Jvb3RNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEVmZmVjdHNSb290TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBfUk9PVF9FRkZFQ1RTX0dVQVJELFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IF9wcm92aWRlRm9yUm9vdEd1YXJkLFxuICAgICAgICAgIGRlcHM6IFtbRWZmZWN0c1J1bm5lciwgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpXV0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBFRkZFQ1RTX0VSUk9SX0hBTkRMRVIsXG4gICAgICAgICAgdXNlVmFsdWU6IGRlZmF1bHRFZmZlY3RzRXJyb3JIYW5kbGVyLFxuICAgICAgICB9LFxuICAgICAgICBFZmZlY3RzUnVubmVyLFxuICAgICAgICBFZmZlY3RTb3VyY2VzLFxuICAgICAgICBBY3Rpb25zLFxuICAgICAgICByb290RWZmZWN0cyxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IF9ST09UX0VGRkVDVFMsXG4gICAgICAgICAgdXNlVmFsdWU6IFtyb290RWZmZWN0c10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBVU0VSX1BST1ZJREVEX0VGRkVDVFMsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgdXNlVmFsdWU6IFtdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUk9PVF9FRkZFQ1RTLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNyZWF0ZUVmZmVjdHMsXG4gICAgICAgICAgZGVwczogW0luamVjdG9yLCBfUk9PVF9FRkZFQ1RTLCBVU0VSX1BST1ZJREVEX0VGRkVDVFNdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZmZlY3RzKFxuICBpbmplY3RvcjogSW5qZWN0b3IsXG4gIGVmZmVjdEdyb3VwczogVHlwZTxhbnk+W11bXSxcbiAgdXNlclByb3ZpZGVkRWZmZWN0R3JvdXBzOiBUeXBlPGFueT5bXVtdXG4pOiBhbnlbXSB7XG4gIGNvbnN0IG1lcmdlZEVmZmVjdHM6IFR5cGU8YW55PltdID0gW107XG5cbiAgZm9yIChsZXQgZWZmZWN0R3JvdXAgb2YgZWZmZWN0R3JvdXBzKSB7XG4gICAgbWVyZ2VkRWZmZWN0cy5wdXNoKC4uLmVmZmVjdEdyb3VwKTtcbiAgfVxuXG4gIGZvciAobGV0IHVzZXJQcm92aWRlZEVmZmVjdEdyb3VwIG9mIHVzZXJQcm92aWRlZEVmZmVjdEdyb3Vwcykge1xuICAgIG1lcmdlZEVmZmVjdHMucHVzaCguLi51c2VyUHJvdmlkZWRFZmZlY3RHcm91cCk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRWZmZWN0SW5zdGFuY2VzKGluamVjdG9yLCBtZXJnZWRFZmZlY3RzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVmZmVjdEluc3RhbmNlcyhcbiAgaW5qZWN0b3I6IEluamVjdG9yLFxuICBlZmZlY3RzOiBUeXBlPGFueT5bXVxuKTogYW55W10ge1xuICByZXR1cm4gZWZmZWN0cy5tYXAoKGVmZmVjdCkgPT4gaW5qZWN0b3IuZ2V0KGVmZmVjdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3Byb3ZpZGVGb3JSb290R3VhcmQocnVubmVyOiBFZmZlY3RzUnVubmVyKTogYW55IHtcbiAgaWYgKHJ1bm5lcikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICBgRWZmZWN0c01vZHVsZS5mb3JSb290KCkgY2FsbGVkIHR3aWNlLiBGZWF0dXJlIG1vZHVsZXMgc2hvdWxkIHVzZSBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoKSBpbnN0ZWFkLmBcbiAgICApO1xuICB9XG4gIHJldHVybiAnZ3VhcmRlZCc7XG59XG4iXX0=