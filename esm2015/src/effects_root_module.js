/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Inject, Optional } from '@angular/core';
import { Store, StoreRootModule, StoreFeatureModule, } from '@ngrx/store';
import { EffectsRunner } from './effects_runner';
import { EffectSources } from './effect_sources';
import { ROOT_EFFECTS, _ROOT_EFFECTS_GUARD } from './tokens';
/** @type {?} */
export const ROOT_EFFECTS_INIT = '@ngrx/effects/init';
export class EffectsRootModule {
    /**
     * @param {?} sources
     * @param {?} runner
     * @param {?} store
     * @param {?} rootEffects
     * @param {?} storeRootModule
     * @param {?} storeFeatureModule
     * @param {?} guard
     */
    constructor(sources, runner, store, rootEffects, storeRootModule, storeFeatureModule, guard) {
        this.sources = sources;
        runner.start();
        rootEffects.forEach((/**
         * @param {?} effectSourceInstance
         * @return {?}
         */
        effectSourceInstance => sources.addEffects(effectSourceInstance)));
        store.dispatch({ type: ROOT_EFFECTS_INIT });
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    addEffects(effectSourceInstance) {
        this.sources.addEffects(effectSourceInstance);
    }
}
EffectsRootModule.decorators = [
    { type: NgModule, args: [{},] }
];
/** @nocollapse */
EffectsRootModule.ctorParameters = () => [
    { type: EffectSources },
    { type: EffectsRunner },
    { type: Store },
    { type: Array, decorators: [{ type: Inject, args: [ROOT_EFFECTS,] }] },
    { type: StoreRootModule, decorators: [{ type: Optional }] },
    { type: StoreFeatureModule, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [_ROOT_EFFECTS_GUARD,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EffectsRootModule.prototype.sources;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yb290X21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yb290X21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFFTCxLQUFLLEVBQ0wsZUFBZSxFQUNmLGtCQUFrQixHQUNuQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBRTdELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxvQkFBb0I7QUFHckQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7OztJQUM1QixZQUNVLE9BQXNCLEVBQzlCLE1BQXFCLEVBQ3JCLEtBQWlCLEVBQ0ssV0FBa0IsRUFDNUIsZUFBZ0MsRUFDaEMsa0JBQXNDLEVBR2xELEtBQVU7UUFSRixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBVTlCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVmLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUN6QyxPQUFPLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLEVBQ3pDLENBQUM7UUFFRixLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxvQkFBeUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUF4QkYsUUFBUSxTQUFDLEVBQUU7Ozs7WUFMSCxhQUFhO1lBRGIsYUFBYTtZQUpwQixLQUFLO3dDQWdCRixNQUFNLFNBQUMsWUFBWTtZQWZ0QixlQUFlLHVCQWdCWixRQUFRO1lBZlgsa0JBQWtCLHVCQWdCZixRQUFROzRDQUNSLFFBQVEsWUFDUixNQUFNLFNBQUMsbUJBQW1COzs7Ozs7O0lBUDNCLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBTdG9yZU1vZHVsZSxcbiAgU3RvcmUsXG4gIFN0b3JlUm9vdE1vZHVsZSxcbiAgU3RvcmVGZWF0dXJlTW9kdWxlLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzUnVubmVyIH0gZnJvbSAnLi9lZmZlY3RzX3J1bm5lcic7XG5pbXBvcnQgeyBFZmZlY3RTb3VyY2VzIH0gZnJvbSAnLi9lZmZlY3Rfc291cmNlcyc7XG5pbXBvcnQgeyBST09UX0VGRkVDVFMsIF9ST09UX0VGRkVDVFNfR1VBUkQgfSBmcm9tICcuL3Rva2Vucyc7XG5cbmV4cG9ydCBjb25zdCBST09UX0VGRkVDVFNfSU5JVCA9ICdAbmdyeC9lZmZlY3RzL2luaXQnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRWZmZWN0c1Jvb3RNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNvdXJjZXM6IEVmZmVjdFNvdXJjZXMsXG4gICAgcnVubmVyOiBFZmZlY3RzUnVubmVyLFxuICAgIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIEBJbmplY3QoUk9PVF9FRkZFQ1RTKSByb290RWZmZWN0czogYW55W10sXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVSb290TW9kdWxlOiBTdG9yZVJvb3RNb2R1bGUsXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVGZWF0dXJlTW9kdWxlOiBTdG9yZUZlYXR1cmVNb2R1bGUsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KF9ST09UX0VGRkVDVFNfR1VBUkQpXG4gICAgZ3VhcmQ6IGFueVxuICApIHtcbiAgICBydW5uZXIuc3RhcnQoKTtcblxuICAgIHJvb3RFZmZlY3RzLmZvckVhY2goZWZmZWN0U291cmNlSW5zdGFuY2UgPT5cbiAgICAgIHNvdXJjZXMuYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZSlcbiAgICApO1xuXG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBST09UX0VGRkVDVFNfSU5JVCB9KTtcbiAgfVxuXG4gIGFkZEVmZmVjdHMoZWZmZWN0U291cmNlSW5zdGFuY2U6IGFueSkge1xuICAgIHRoaXMuc291cmNlcy5hZGRFZmZlY3RzKGVmZmVjdFNvdXJjZUluc3RhbmNlKTtcbiAgfVxufVxuIl19