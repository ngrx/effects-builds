import { NgModule, Inject, Optional } from '@angular/core';
import { Store, StoreRootModule, StoreFeatureModule, } from '@ngrx/store';
import { EffectsRunner } from './effects_runner';
import { EffectSources } from './effect_sources';
import { ROOT_EFFECTS } from './tokens';
export var ROOT_EFFECTS_INIT = '@ngrx/effects/init';
var EffectsRootModule = /** @class */ (function () {
    function EffectsRootModule(sources, runner, store, rootEffects, storeRootModule, storeFeatureModule) {
        this.sources = sources;
        runner.start();
        rootEffects.forEach(function (effectSourceInstance) {
            return sources.addEffects(effectSourceInstance);
        });
        store.dispatch({ type: ROOT_EFFECTS_INIT });
    }
    EffectsRootModule.prototype.addEffects = function (effectSourceInstance) {
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
        { type: StoreFeatureModule, decorators: [{ type: Optional }] }
    ]; };
    return EffectsRootModule;
}());
export { EffectsRootModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yb290X21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yb290X21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUVMLEtBQUssRUFDTCxlQUFlLEVBQ2Ysa0JBQWtCLEdBQ25CLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV4QyxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQztBQUV0RDtJQUVFLDJCQUNVLE9BQXNCLEVBQzlCLE1BQXFCLEVBQ3JCLEtBQWlCLEVBQ0ssV0FBa0IsRUFDNUIsZUFBZ0MsRUFDaEMsa0JBQXNDO1FBTDFDLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFPOUIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWYsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLG9CQUFvQjtZQUN0QyxPQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7UUFBeEMsQ0FBd0MsQ0FDekMsQ0FBQztRQUVGLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsb0JBQXlCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBckJGLFFBQVEsU0FBQyxFQUFFOzs7O2dCQUxILGFBQWE7Z0JBRGIsYUFBYTtnQkFKcEIsS0FBSzs0Q0FnQkYsTUFBTSxTQUFDLFlBQVk7Z0JBZnRCLGVBQWUsdUJBZ0JaLFFBQVE7Z0JBZlgsa0JBQWtCLHVCQWdCZixRQUFROztJQWNiLHdCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFN0b3JlTW9kdWxlLFxuICBTdG9yZSxcbiAgU3RvcmVSb290TW9kdWxlLFxuICBTdG9yZUZlYXR1cmVNb2R1bGUsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNSdW5uZXIgfSBmcm9tICcuL2VmZmVjdHNfcnVubmVyJztcbmltcG9ydCB7IEVmZmVjdFNvdXJjZXMgfSBmcm9tICcuL2VmZmVjdF9zb3VyY2VzJztcbmltcG9ydCB7IFJPT1RfRUZGRUNUUyB9IGZyb20gJy4vdG9rZW5zJztcblxuZXhwb3J0IGNvbnN0IFJPT1RfRUZGRUNUU19JTklUID0gJ0BuZ3J4L2VmZmVjdHMvaW5pdCc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBFZmZlY3RzUm9vdE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc291cmNlczogRWZmZWN0U291cmNlcyxcbiAgICBydW5uZXI6IEVmZmVjdHNSdW5uZXIsXG4gICAgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgQEluamVjdChST09UX0VGRkVDVFMpIHJvb3RFZmZlY3RzOiBhbnlbXSxcbiAgICBAT3B0aW9uYWwoKSBzdG9yZVJvb3RNb2R1bGU6IFN0b3JlUm9vdE1vZHVsZSxcbiAgICBAT3B0aW9uYWwoKSBzdG9yZUZlYXR1cmVNb2R1bGU6IFN0b3JlRmVhdHVyZU1vZHVsZVxuICApIHtcbiAgICBydW5uZXIuc3RhcnQoKTtcblxuICAgIHJvb3RFZmZlY3RzLmZvckVhY2goZWZmZWN0U291cmNlSW5zdGFuY2UgPT5cbiAgICAgIHNvdXJjZXMuYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZSlcbiAgICApO1xuXG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBST09UX0VGRkVDVFNfSU5JVCB9KTtcbiAgfVxuXG4gIGFkZEVmZmVjdHMoZWZmZWN0U291cmNlSW5zdGFuY2U6IGFueSkge1xuICAgIHRoaXMuc291cmNlcy5hZGRFZmZlY3RzKGVmZmVjdFNvdXJjZUluc3RhbmNlKTtcbiAgfVxufVxuIl19