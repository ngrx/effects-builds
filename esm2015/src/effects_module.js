/**
 * @fileoverview added by tsickle
 * Generated from: modules/effects/src/effects_module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf, } from '@angular/core';
import { Actions } from './actions';
import { EffectSources } from './effect_sources';
import { EffectsFeatureModule } from './effects_feature_module';
import { defaultEffectsErrorHandler } from './effects_error_handler';
import { EffectsRootModule } from './effects_root_module';
import { EffectsRunner } from './effects_runner';
import { _ROOT_EFFECTS_GUARD, EFFECTS_ERROR_HANDLER, FEATURE_EFFECTS, ROOT_EFFECTS, } from './tokens';
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
                {
                    provide: EFFECTS_ERROR_HANDLER,
                    useValue: defaultEffectsErrorHandler,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdHNfbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixlQUFlLEVBQ2YsWUFBWSxHQUNiLE1BQU0sVUFBVSxDQUFDO0FBR2xCLE1BQU0sT0FBTyxhQUFhOzs7OztJQUN4QixNQUFNLENBQUMsVUFBVSxDQUNmLGNBQTJCO1FBRTNCLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxjQUFjO2dCQUNkO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsY0FBYztvQkFDcEIsVUFBVSxFQUFFLHFCQUFxQjtpQkFDbEM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQ1osV0FBd0I7UUFFeEIsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFVBQVUsRUFBRSxvQkFBb0I7b0JBQ2hDLElBQUksRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUN4RDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsMEJBQTBCO2lCQUNyQztnQkFDRCxhQUFhO2dCQUNiLGFBQWE7Z0JBQ2IsT0FBTztnQkFDUCxXQUFXO2dCQUNYO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsV0FBVztvQkFDakIsVUFBVSxFQUFFLHFCQUFxQjtpQkFDbEM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUE3Q0YsUUFBUSxTQUFDLEVBQUU7Ozs7OztBQWdEWixNQUFNLFVBQVUscUJBQXFCLENBQUMsR0FBRyxTQUFnQjtJQUN2RCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxNQUFxQjtJQUN4RCxJQUFJLE1BQU0sRUFBRTtRQUNWLE1BQU0sSUFBSSxTQUFTLENBQ2pCLHNHQUFzRyxDQUN2RyxDQUFDO0tBQ0g7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgVHlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IEVmZmVjdFNvdXJjZXMgfSBmcm9tICcuL2VmZmVjdF9zb3VyY2VzJztcbmltcG9ydCB7IEVmZmVjdHNGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi9lZmZlY3RzX2ZlYXR1cmVfbW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRFZmZlY3RzRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9lZmZlY3RzX2Vycm9yX2hhbmRsZXInO1xuaW1wb3J0IHsgRWZmZWN0c1Jvb3RNb2R1bGUgfSBmcm9tICcuL2VmZmVjdHNfcm9vdF9tb2R1bGUnO1xuaW1wb3J0IHsgRWZmZWN0c1J1bm5lciB9IGZyb20gJy4vZWZmZWN0c19ydW5uZXInO1xuaW1wb3J0IHtcbiAgX1JPT1RfRUZGRUNUU19HVUFSRCxcbiAgRUZGRUNUU19FUlJPUl9IQU5ETEVSLFxuICBGRUFUVVJFX0VGRkVDVFMsXG4gIFJPT1RfRUZGRUNUUyxcbn0gZnJvbSAnLi90b2tlbnMnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRWZmZWN0c01vZHVsZSB7XG4gIHN0YXRpYyBmb3JGZWF0dXJlKFxuICAgIGZlYXR1cmVFZmZlY3RzOiBUeXBlPGFueT5bXVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEVmZmVjdHNGZWF0dXJlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBFZmZlY3RzRmVhdHVyZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBmZWF0dXJlRWZmZWN0cyxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEZFQVRVUkVfRUZGRUNUUyxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICBkZXBzOiBmZWF0dXJlRWZmZWN0cyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjcmVhdGVTb3VyY2VJbnN0YW5jZXMsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChcbiAgICByb290RWZmZWN0czogVHlwZTxhbnk+W11cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxFZmZlY3RzUm9vdE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRWZmZWN0c1Jvb3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IF9ST09UX0VGRkVDVFNfR1VBUkQsXG4gICAgICAgICAgdXNlRmFjdG9yeTogX3Byb3ZpZGVGb3JSb290R3VhcmQsXG4gICAgICAgICAgZGVwczogW1tFZmZlY3RzUnVubmVyLCBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCldXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEVGRkVDVFNfRVJST1JfSEFORExFUixcbiAgICAgICAgICB1c2VWYWx1ZTogZGVmYXVsdEVmZmVjdHNFcnJvckhhbmRsZXIsXG4gICAgICAgIH0sXG4gICAgICAgIEVmZmVjdHNSdW5uZXIsXG4gICAgICAgIEVmZmVjdFNvdXJjZXMsXG4gICAgICAgIEFjdGlvbnMsXG4gICAgICAgIHJvb3RFZmZlY3RzLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUk9PVF9FRkZFQ1RTLFxuICAgICAgICAgIGRlcHM6IHJvb3RFZmZlY3RzLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNyZWF0ZVNvdXJjZUluc3RhbmNlcyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU291cmNlSW5zdGFuY2VzKC4uLmluc3RhbmNlczogYW55W10pIHtcbiAgcmV0dXJuIGluc3RhbmNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9wcm92aWRlRm9yUm9vdEd1YXJkKHJ1bm5lcjogRWZmZWN0c1J1bm5lcik6IGFueSB7XG4gIGlmIChydW5uZXIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgYEVmZmVjdHNNb2R1bGUuZm9yUm9vdCgpIGNhbGxlZCB0d2ljZS4gRmVhdHVyZSBtb2R1bGVzIHNob3VsZCB1c2UgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKCkgaW5zdGVhZC5gXG4gICAgKTtcbiAgfVxuICByZXR1cm4gJ2d1YXJkZWQnO1xufVxuIl19