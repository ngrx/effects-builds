var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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
var EffectsModule = /** @class */ (function () {
    function EffectsModule() {
    }
    /**
     * @param {?=} featureEffects
     * @return {?}
     */
    EffectsModule.forFeature = /**
     * @param {?=} featureEffects
     * @return {?}
     */
    function (featureEffects) {
        if (featureEffects === void 0) { featureEffects = []; }
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
    };
    /**
     * @param {?=} rootEffects
     * @return {?}
     */
    EffectsModule.forRoot = /**
     * @param {?=} rootEffects
     * @return {?}
     */
    function (rootEffects) {
        if (rootEffects === void 0) { rootEffects = []; }
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
    };
    EffectsModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return EffectsModule;
}());
export { EffectsModule };
/**
 * @param {?} injector
 * @param {?} effectGroups
 * @param {?} userProvidedEffectGroups
 * @return {?}
 */
export function createEffects(injector, effectGroups, userProvidedEffectGroups) {
    var e_1, _a, e_2, _b;
    /** @type {?} */
    var mergedEffects = [];
    try {
        for (var effectGroups_1 = __values(effectGroups), effectGroups_1_1 = effectGroups_1.next(); !effectGroups_1_1.done; effectGroups_1_1 = effectGroups_1.next()) {
            var effectGroup = effectGroups_1_1.value;
            mergedEffects.push.apply(mergedEffects, __spread(effectGroup));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (effectGroups_1_1 && !effectGroups_1_1.done && (_a = effectGroups_1.return)) _a.call(effectGroups_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var userProvidedEffectGroups_1 = __values(userProvidedEffectGroups), userProvidedEffectGroups_1_1 = userProvidedEffectGroups_1.next(); !userProvidedEffectGroups_1_1.done; userProvidedEffectGroups_1_1 = userProvidedEffectGroups_1.next()) {
            var userProvidedEffectGroup = userProvidedEffectGroups_1_1.value;
            mergedEffects.push.apply(mergedEffects, __spread(userProvidedEffectGroup));
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (userProvidedEffectGroups_1_1 && !userProvidedEffectGroups_1_1.done && (_b = userProvidedEffectGroups_1.return)) _b.call(userProvidedEffectGroups_1);
        }
        finally { if (e_2) throw e_2.error; }
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
    function (effect) { return injector.get(effect); }));
}
/**
 * @param {?} runner
 * @return {?}
 */
export function _provideForRootGuard(runner) {
    if (runner) {
        throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");
    }
    return 'guarded';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmdyeC9lZmZlY3RzLyIsInNvdXJjZXMiOlsic3JjL2VmZmVjdHNfbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFDTCxRQUFRLEVBRVIsUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsZUFBZSxFQUNmLFlBQVksRUFDWixxQkFBcUIsR0FDdEIsTUFBTSxVQUFVLENBQUM7QUFFbEI7SUFBQTtJQWlFQSxDQUFDOzs7OztJQS9EUSx3QkFBVTs7OztJQUFqQixVQUNFLGNBQWdDO1FBQWhDLCtCQUFBLEVBQUEsbUJBQWdDO1FBRWhDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxjQUFjO2dCQUNkO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRSxjQUFjO2lCQUN6QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxRQUFRLEVBQUUsRUFBRTtpQkFDYjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsVUFBVSxFQUFFLGFBQWE7b0JBQ3pCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsQ0FBQztpQkFDMUQ7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVNLHFCQUFPOzs7O0lBQWQsVUFDRSxXQUE2QjtRQUE3Qiw0QkFBQSxFQUFBLGdCQUE2QjtRQUU3QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsVUFBVSxFQUFFLG9CQUFvQjtvQkFDaEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7aUJBQ3hEO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3JDO2dCQUNELGFBQWE7Z0JBQ2IsYUFBYTtnQkFDYixPQUFPO2dCQUNQLFdBQVc7Z0JBQ1g7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQztpQkFDeEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFVBQVUsRUFBRSxhQUFhO29CQUN6QixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLHFCQUFxQixDQUFDO2lCQUN2RDthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWhFRixRQUFRLFNBQUMsRUFBRTs7SUFpRVosb0JBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQWhFWSxhQUFhOzs7Ozs7O0FBa0UxQixNQUFNLFVBQVUsYUFBYSxDQUMzQixRQUFrQixFQUNsQixZQUEyQixFQUMzQix3QkFBdUM7OztRQUVqQyxhQUFhLEdBQWdCLEVBQUU7O1FBRXJDLEtBQXdCLElBQUEsaUJBQUEsU0FBQSxZQUFZLENBQUEsMENBQUEsb0VBQUU7WUFBakMsSUFBSSxXQUFXLHlCQUFBO1lBQ2xCLGFBQWEsQ0FBQyxJQUFJLE9BQWxCLGFBQWEsV0FBUyxXQUFXLEdBQUU7U0FDcEM7Ozs7Ozs7Ozs7UUFFRCxLQUFvQyxJQUFBLDZCQUFBLFNBQUEsd0JBQXdCLENBQUEsa0VBQUEsd0dBQUU7WUFBekQsSUFBSSx1QkFBdUIscUNBQUE7WUFDOUIsYUFBYSxDQUFDLElBQUksT0FBbEIsYUFBYSxXQUFTLHVCQUF1QixHQUFFO1NBQ2hEOzs7Ozs7Ozs7SUFFRCxPQUFPLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN4RCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLFFBQWtCLEVBQ2xCLE9BQW9CO0lBRXBCLE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztBQUNyRCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxNQUFxQjtJQUN4RCxJQUFJLE1BQU0sRUFBRTtRQUNWLE1BQU0sSUFBSSxTQUFTLENBQ2pCLHNHQUFzRyxDQUN2RyxDQUFDO0tBQ0g7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0b3IsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIFR5cGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBFZmZlY3RTb3VyY2VzIH0gZnJvbSAnLi9lZmZlY3Rfc291cmNlcyc7XG5pbXBvcnQgeyBFZmZlY3RzRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4vZWZmZWN0c19mZWF0dXJlX21vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0RWZmZWN0c0Vycm9ySGFuZGxlciB9IGZyb20gJy4vZWZmZWN0c19lcnJvcl9oYW5kbGVyJztcbmltcG9ydCB7IEVmZmVjdHNSb290TW9kdWxlIH0gZnJvbSAnLi9lZmZlY3RzX3Jvb3RfbW9kdWxlJztcbmltcG9ydCB7IEVmZmVjdHNSdW5uZXIgfSBmcm9tICcuL2VmZmVjdHNfcnVubmVyJztcbmltcG9ydCB7XG4gIF9GRUFUVVJFX0VGRkVDVFMsXG4gIF9ST09UX0VGRkVDVFMsXG4gIF9ST09UX0VGRkVDVFNfR1VBUkQsXG4gIEVGRkVDVFNfRVJST1JfSEFORExFUixcbiAgRkVBVFVSRV9FRkZFQ1RTLFxuICBST09UX0VGRkVDVFMsXG4gIFVTRVJfUFJPVklERURfRUZGRUNUUyxcbn0gZnJvbSAnLi90b2tlbnMnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRWZmZWN0c01vZHVsZSB7XG4gIHN0YXRpYyBmb3JGZWF0dXJlKFxuICAgIGZlYXR1cmVFZmZlY3RzOiBUeXBlPGFueT5bXSA9IFtdXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RWZmZWN0c0ZlYXR1cmVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEVmZmVjdHNGZWF0dXJlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGZlYXR1cmVFZmZlY3RzLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogX0ZFQVRVUkVfRUZGRUNUUyxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICB1c2VWYWx1ZTogZmVhdHVyZUVmZmVjdHMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBVU0VSX1BST1ZJREVEX0VGRkVDVFMsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgdXNlVmFsdWU6IFtdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRkVBVFVSRV9FRkZFQ1RTLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNyZWF0ZUVmZmVjdHMsXG4gICAgICAgICAgZGVwczogW0luamVjdG9yLCBfRkVBVFVSRV9FRkZFQ1RTLCBVU0VSX1BST1ZJREVEX0VGRkVDVFNdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgcm9vdEVmZmVjdHM6IFR5cGU8YW55PltdID0gW11cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxFZmZlY3RzUm9vdE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRWZmZWN0c1Jvb3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IF9ST09UX0VGRkVDVFNfR1VBUkQsXG4gICAgICAgICAgdXNlRmFjdG9yeTogX3Byb3ZpZGVGb3JSb290R3VhcmQsXG4gICAgICAgICAgZGVwczogW1tFZmZlY3RzUnVubmVyLCBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCldXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEVGRkVDVFNfRVJST1JfSEFORExFUixcbiAgICAgICAgICB1c2VWYWx1ZTogZGVmYXVsdEVmZmVjdHNFcnJvckhhbmRsZXIsXG4gICAgICAgIH0sXG4gICAgICAgIEVmZmVjdHNSdW5uZXIsXG4gICAgICAgIEVmZmVjdFNvdXJjZXMsXG4gICAgICAgIEFjdGlvbnMsXG4gICAgICAgIHJvb3RFZmZlY3RzLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogX1JPT1RfRUZGRUNUUyxcbiAgICAgICAgICB1c2VWYWx1ZTogW3Jvb3RFZmZlY3RzXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFVTRVJfUFJPVklERURfRUZGRUNUUyxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICB1c2VWYWx1ZTogW10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBST09UX0VGRkVDVFMsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY3JlYXRlRWZmZWN0cyxcbiAgICAgICAgICBkZXBzOiBbSW5qZWN0b3IsIF9ST09UX0VGRkVDVFMsIFVTRVJfUFJPVklERURfRUZGRUNUU10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVmZmVjdHMoXG4gIGluamVjdG9yOiBJbmplY3RvcixcbiAgZWZmZWN0R3JvdXBzOiBUeXBlPGFueT5bXVtdLFxuICB1c2VyUHJvdmlkZWRFZmZlY3RHcm91cHM6IFR5cGU8YW55PltdW11cbik6IGFueVtdIHtcbiAgY29uc3QgbWVyZ2VkRWZmZWN0czogVHlwZTxhbnk+W10gPSBbXTtcblxuICBmb3IgKGxldCBlZmZlY3RHcm91cCBvZiBlZmZlY3RHcm91cHMpIHtcbiAgICBtZXJnZWRFZmZlY3RzLnB1c2goLi4uZWZmZWN0R3JvdXApO1xuICB9XG5cbiAgZm9yIChsZXQgdXNlclByb3ZpZGVkRWZmZWN0R3JvdXAgb2YgdXNlclByb3ZpZGVkRWZmZWN0R3JvdXBzKSB7XG4gICAgbWVyZ2VkRWZmZWN0cy5wdXNoKC4uLnVzZXJQcm92aWRlZEVmZmVjdEdyb3VwKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVFZmZlY3RJbnN0YW5jZXMoaW5qZWN0b3IsIG1lcmdlZEVmZmVjdHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWZmZWN0SW5zdGFuY2VzKFxuICBpbmplY3RvcjogSW5qZWN0b3IsXG4gIGVmZmVjdHM6IFR5cGU8YW55PltdXG4pOiBhbnlbXSB7XG4gIHJldHVybiBlZmZlY3RzLm1hcChlZmZlY3QgPT4gaW5qZWN0b3IuZ2V0KGVmZmVjdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3Byb3ZpZGVGb3JSb290R3VhcmQocnVubmVyOiBFZmZlY3RzUnVubmVyKTogYW55IHtcbiAgaWYgKHJ1bm5lcikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICBgRWZmZWN0c01vZHVsZS5mb3JSb290KCkgY2FsbGVkIHR3aWNlLiBGZWF0dXJlIG1vZHVsZXMgc2hvdWxkIHVzZSBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoKSBpbnN0ZWFkLmBcbiAgICApO1xuICB9XG4gIHJldHVybiAnZ3VhcmRlZCc7XG59XG4iXX0=