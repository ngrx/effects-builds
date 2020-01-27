import { __decorate } from "tslib";
import { NgModule, Optional, SkipSelf, } from '@angular/core';
import { Actions } from './actions';
import { EffectSources } from './effect_sources';
import { EffectsFeatureModule } from './effects_feature_module';
import { defaultEffectsErrorHandler } from './effects_error_handler';
import { EffectsRootModule } from './effects_root_module';
import { EffectsRunner } from './effects_runner';
import { _ROOT_EFFECTS_GUARD, EFFECTS_ERROR_HANDLER, FEATURE_EFFECTS, ROOT_EFFECTS, } from './tokens';
var EffectsModule = /** @class */ (function () {
    function EffectsModule() {
    }
    EffectsModule.forFeature = function (featureEffects) {
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
    };
    EffectsModule.forRoot = function (rootEffects) {
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
    };
    EffectsModule = __decorate([
        NgModule({})
    ], EffectsModule);
    return EffectsModule;
}());
export { EffectsModule };
export function createSourceInstances() {
    var instances = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        instances[_i] = arguments[_i];
    }
    return instances;
}
export function _provideForRootGuard(runner) {
    if (runner) {
        throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");
    }
    return 'guarded';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdHNfbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLGVBQWUsRUFDZixZQUFZLEdBQ2IsTUFBTSxVQUFVLENBQUM7QUFHbEI7SUFBQTtJQTZDQSxDQUFDO0lBNUNRLHdCQUFVLEdBQWpCLFVBQ0UsY0FBMkI7UUFFM0IsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULGNBQWM7Z0JBQ2Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO29CQUNYLElBQUksRUFBRSxjQUFjO29CQUNwQixVQUFVLEVBQUUscUJBQXFCO2lCQUNsQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxxQkFBTyxHQUFkLFVBQ0UsV0FBd0I7UUFFeEIsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFVBQVUsRUFBRSxvQkFBb0I7b0JBQ2hDLElBQUksRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUN4RDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsMEJBQTBCO2lCQUNyQztnQkFDRCxhQUFhO2dCQUNiLGFBQWE7Z0JBQ2IsT0FBTztnQkFDUCxXQUFXO2dCQUNYO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsV0FBVztvQkFDakIsVUFBVSxFQUFFLHFCQUFxQjtpQkFDbEM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBNUNVLGFBQWE7UUFEekIsUUFBUSxDQUFDLEVBQUUsQ0FBQztPQUNBLGFBQWEsQ0E2Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQTdDWSxhQUFhO0FBK0MxQixNQUFNLFVBQVUscUJBQXFCO0lBQUMsbUJBQW1CO1NBQW5CLFVBQW1CLEVBQW5CLHFCQUFtQixFQUFuQixJQUFtQjtRQUFuQiw4QkFBbUI7O0lBQ3ZELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsTUFBcUI7SUFDeEQsSUFBSSxNQUFNLEVBQUU7UUFDVixNQUFNLElBQUksU0FBUyxDQUNqQixzR0FBc0csQ0FDdkcsQ0FBQztLQUNIO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIFR5cGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBFZmZlY3RTb3VyY2VzIH0gZnJvbSAnLi9lZmZlY3Rfc291cmNlcyc7XG5pbXBvcnQgeyBFZmZlY3RzRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4vZWZmZWN0c19mZWF0dXJlX21vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0RWZmZWN0c0Vycm9ySGFuZGxlciB9IGZyb20gJy4vZWZmZWN0c19lcnJvcl9oYW5kbGVyJztcbmltcG9ydCB7IEVmZmVjdHNSb290TW9kdWxlIH0gZnJvbSAnLi9lZmZlY3RzX3Jvb3RfbW9kdWxlJztcbmltcG9ydCB7IEVmZmVjdHNSdW5uZXIgfSBmcm9tICcuL2VmZmVjdHNfcnVubmVyJztcbmltcG9ydCB7XG4gIF9ST09UX0VGRkVDVFNfR1VBUkQsXG4gIEVGRkVDVFNfRVJST1JfSEFORExFUixcbiAgRkVBVFVSRV9FRkZFQ1RTLFxuICBST09UX0VGRkVDVFMsXG59IGZyb20gJy4vdG9rZW5zJztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIEVmZmVjdHNNb2R1bGUge1xuICBzdGF0aWMgZm9yRmVhdHVyZShcbiAgICBmZWF0dXJlRWZmZWN0czogVHlwZTxhbnk+W11cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxFZmZlY3RzRmVhdHVyZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRWZmZWN0c0ZlYXR1cmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgZmVhdHVyZUVmZmVjdHMsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBGRUFUVVJFX0VGRkVDVFMsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgZGVwczogZmVhdHVyZUVmZmVjdHMsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY3JlYXRlU291cmNlSW5zdGFuY2VzLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgcm9vdEVmZmVjdHM6IFR5cGU8YW55PltdXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RWZmZWN0c1Jvb3RNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEVmZmVjdHNSb290TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBfUk9PVF9FRkZFQ1RTX0dVQVJELFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IF9wcm92aWRlRm9yUm9vdEd1YXJkLFxuICAgICAgICAgIGRlcHM6IFtbRWZmZWN0c1J1bm5lciwgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpXV0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBFRkZFQ1RTX0VSUk9SX0hBTkRMRVIsXG4gICAgICAgICAgdXNlVmFsdWU6IGRlZmF1bHRFZmZlY3RzRXJyb3JIYW5kbGVyLFxuICAgICAgICB9LFxuICAgICAgICBFZmZlY3RzUnVubmVyLFxuICAgICAgICBFZmZlY3RTb3VyY2VzLFxuICAgICAgICBBY3Rpb25zLFxuICAgICAgICByb290RWZmZWN0cyxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFJPT1RfRUZGRUNUUyxcbiAgICAgICAgICBkZXBzOiByb290RWZmZWN0cyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjcmVhdGVTb3VyY2VJbnN0YW5jZXMsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNvdXJjZUluc3RhbmNlcyguLi5pbnN0YW5jZXM6IGFueVtdKSB7XG4gIHJldHVybiBpbnN0YW5jZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcHJvdmlkZUZvclJvb3RHdWFyZChydW5uZXI6IEVmZmVjdHNSdW5uZXIpOiBhbnkge1xuICBpZiAocnVubmVyKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIGBFZmZlY3RzTW9kdWxlLmZvclJvb3QoKSBjYWxsZWQgdHdpY2UuIEZlYXR1cmUgbW9kdWxlcyBzaG91bGQgdXNlIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZSgpIGluc3RlYWQuYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuICdndWFyZGVkJztcbn1cbiJdfQ==