/**
 * @fileoverview added by tsickle
 * Generated from: src/effects_root_module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Inject, Optional } from '@angular/core';
import { createAction, Store, StoreRootModule, StoreFeatureModule, } from '@ngrx/store';
import { EffectsRunner } from './effects_runner';
import { EffectSources } from './effect_sources';
import { ROOT_EFFECTS, _ROOT_EFFECTS_GUARD } from './tokens';
/** @type {?} */
export var ROOT_EFFECTS_INIT = '@ngrx/effects/init';
/** @type {?} */
export var rootEffectsInit = createAction(ROOT_EFFECTS_INIT);
var EffectsRootModule = /** @class */ (function () {
    function EffectsRootModule(sources, runner, store, rootEffects, storeRootModule, storeFeatureModule, guard) {
        this.sources = sources;
        runner.start();
        rootEffects.forEach((/**
         * @param {?} effectSourceInstance
         * @return {?}
         */
        function (effectSourceInstance) {
            return sources.addEffects(effectSourceInstance);
        }));
        store.dispatch({ type: ROOT_EFFECTS_INIT });
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    EffectsRootModule.prototype.addEffects = /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    function (effectSourceInstance) {
        this.sources.addEffects(effectSourceInstance);
    };
    EffectsRootModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    /** @nocollapse */
    EffectsRootModule.ctorParameters = function () { return [
        { type: EffectSources },
        { type: EffectsRunner },
        { type: Store },
        { type: Array, decorators: [{ type: Inject, args: [ROOT_EFFECTS,] }] },
        { type: StoreRootModule, decorators: [{ type: Optional }] },
        { type: StoreFeatureModule, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [_ROOT_EFFECTS_GUARD,] }] }
    ]; };
    return EffectsRootModule;
}());
export { EffectsRootModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EffectsRootModule.prototype.sources;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yb290X21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3J4L2VmZmVjdHMvIiwic291cmNlcyI6WyJzcmMvZWZmZWN0c19yb290X21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQ0wsWUFBWSxFQUVaLEtBQUssRUFDTCxlQUFlLEVBQ2Ysa0JBQWtCLEdBQ25CLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFN0QsTUFBTSxLQUFPLGlCQUFpQixHQUFHLG9CQUFvQjs7QUFDckQsTUFBTSxLQUFPLGVBQWUsR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQUM7QUFFOUQ7SUFFRSwyQkFDVSxPQUFzQixFQUM5QixNQUFxQixFQUNyQixLQUFpQixFQUNLLFdBQWtCLEVBQzVCLGVBQWdDLEVBQ2hDLGtCQUFzQyxFQUdsRCxLQUFVO1FBUkYsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQVU5QixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZixXQUFXLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsb0JBQW9CO1lBQ3RDLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztRQUF4QyxDQUF3QyxFQUN6QyxDQUFDO1FBRUYsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxzQ0FBVTs7OztJQUFWLFVBQVcsb0JBQXlCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBeEJGLFFBQVEsU0FBQyxFQUFFOzs7O2dCQU5ILGFBQWE7Z0JBRGIsYUFBYTtnQkFKcEIsS0FBSzs0Q0FpQkYsTUFBTSxTQUFDLFlBQVk7Z0JBaEJ0QixlQUFlLHVCQWlCWixRQUFRO2dCQWhCWCxrQkFBa0IsdUJBaUJmLFFBQVE7Z0RBQ1IsUUFBUSxZQUNSLE1BQU0sU0FBQyxtQkFBbUI7O0lBZS9CLHdCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F4QlksaUJBQWlCOzs7Ozs7SUFFMUIsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGNyZWF0ZUFjdGlvbixcbiAgU3RvcmVNb2R1bGUsXG4gIFN0b3JlLFxuICBTdG9yZVJvb3RNb2R1bGUsXG4gIFN0b3JlRmVhdHVyZU1vZHVsZSxcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c1J1bm5lciB9IGZyb20gJy4vZWZmZWN0c19ydW5uZXInO1xuaW1wb3J0IHsgRWZmZWN0U291cmNlcyB9IGZyb20gJy4vZWZmZWN0X3NvdXJjZXMnO1xuaW1wb3J0IHsgUk9PVF9FRkZFQ1RTLCBfUk9PVF9FRkZFQ1RTX0dVQVJEIH0gZnJvbSAnLi90b2tlbnMnO1xuXG5leHBvcnQgY29uc3QgUk9PVF9FRkZFQ1RTX0lOSVQgPSAnQG5ncngvZWZmZWN0cy9pbml0JztcbmV4cG9ydCBjb25zdCByb290RWZmZWN0c0luaXQgPSBjcmVhdGVBY3Rpb24oUk9PVF9FRkZFQ1RTX0lOSVQpO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRWZmZWN0c1Jvb3RNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNvdXJjZXM6IEVmZmVjdFNvdXJjZXMsXG4gICAgcnVubmVyOiBFZmZlY3RzUnVubmVyLFxuICAgIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIEBJbmplY3QoUk9PVF9FRkZFQ1RTKSByb290RWZmZWN0czogYW55W10sXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVSb290TW9kdWxlOiBTdG9yZVJvb3RNb2R1bGUsXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVGZWF0dXJlTW9kdWxlOiBTdG9yZUZlYXR1cmVNb2R1bGUsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KF9ST09UX0VGRkVDVFNfR1VBUkQpXG4gICAgZ3VhcmQ6IGFueVxuICApIHtcbiAgICBydW5uZXIuc3RhcnQoKTtcblxuICAgIHJvb3RFZmZlY3RzLmZvckVhY2goZWZmZWN0U291cmNlSW5zdGFuY2UgPT5cbiAgICAgIHNvdXJjZXMuYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZSlcbiAgICApO1xuXG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBST09UX0VGRkVDVFNfSU5JVCB9KTtcbiAgfVxuXG4gIGFkZEVmZmVjdHMoZWZmZWN0U291cmNlSW5zdGFuY2U6IGFueSkge1xuICAgIHRoaXMuc291cmNlcy5hZGRFZmZlY3RzKGVmZmVjdFNvdXJjZUluc3RhbmNlKTtcbiAgfVxufVxuIl19