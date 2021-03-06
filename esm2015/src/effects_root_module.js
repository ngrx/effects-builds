import { NgModule, Inject, Optional } from '@angular/core';
import { createAction, Store, StoreRootModule, StoreFeatureModule, } from '@ngrx/store';
import { EffectsRunner } from './effects_runner';
import { EffectSources } from './effect_sources';
import { ROOT_EFFECTS, _ROOT_EFFECTS_GUARD } from './tokens';
export const ROOT_EFFECTS_INIT = '@ngrx/effects/init';
export const rootEffectsInit = createAction(ROOT_EFFECTS_INIT);
export class EffectsRootModule {
    constructor(sources, runner, store, rootEffects, storeRootModule, storeFeatureModule, guard) {
        this.sources = sources;
        runner.start();
        rootEffects.forEach((effectSourceInstance) => sources.addEffects(effectSourceInstance));
        store.dispatch({ type: ROOT_EFFECTS_INIT });
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yb290X21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yb290X21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUNMLFlBQVksRUFFWixLQUFLLEVBQ0wsZUFBZSxFQUNmLGtCQUFrQixHQUNuQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFN0QsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsb0JBQW9CLENBQUM7QUFDdEQsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRy9ELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFDVSxPQUFzQixFQUM5QixNQUFxQixFQUNyQixLQUFpQixFQUNLLFdBQWtCLEVBQzVCLGVBQWdDLEVBQ2hDLGtCQUFzQyxFQUdsRCxLQUFVO1FBUkYsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQVU5QixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUMzQyxPQUFPLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQ3pDLENBQUM7UUFFRixLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsVUFBVSxDQUFDLG9CQUF5QjtRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQXhCRixRQUFRLFNBQUMsRUFBRTs7OztZQU5ILGFBQWE7WUFEYixhQUFhO1lBSnBCLEtBQUs7d0NBaUJGLE1BQU0sU0FBQyxZQUFZO1lBaEJ0QixlQUFlLHVCQWlCWixRQUFRO1lBaEJYLGtCQUFrQix1QkFpQmYsUUFBUTs0Q0FDUixRQUFRLFlBQ1IsTUFBTSxTQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIFN0b3JlTW9kdWxlLFxuICBTdG9yZSxcbiAgU3RvcmVSb290TW9kdWxlLFxuICBTdG9yZUZlYXR1cmVNb2R1bGUsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNSdW5uZXIgfSBmcm9tICcuL2VmZmVjdHNfcnVubmVyJztcbmltcG9ydCB7IEVmZmVjdFNvdXJjZXMgfSBmcm9tICcuL2VmZmVjdF9zb3VyY2VzJztcbmltcG9ydCB7IFJPT1RfRUZGRUNUUywgX1JPT1RfRUZGRUNUU19HVUFSRCB9IGZyb20gJy4vdG9rZW5zJztcblxuZXhwb3J0IGNvbnN0IFJPT1RfRUZGRUNUU19JTklUID0gJ0BuZ3J4L2VmZmVjdHMvaW5pdCc7XG5leHBvcnQgY29uc3Qgcm9vdEVmZmVjdHNJbml0ID0gY3JlYXRlQWN0aW9uKFJPT1RfRUZGRUNUU19JTklUKTtcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIEVmZmVjdHNSb290TW9kdWxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzb3VyY2VzOiBFZmZlY3RTb3VyY2VzLFxuICAgIHJ1bm5lcjogRWZmZWN0c1J1bm5lcixcbiAgICBzdG9yZTogU3RvcmU8YW55PixcbiAgICBASW5qZWN0KFJPT1RfRUZGRUNUUykgcm9vdEVmZmVjdHM6IGFueVtdLFxuICAgIEBPcHRpb25hbCgpIHN0b3JlUm9vdE1vZHVsZTogU3RvcmVSb290TW9kdWxlLFxuICAgIEBPcHRpb25hbCgpIHN0b3JlRmVhdHVyZU1vZHVsZTogU3RvcmVGZWF0dXJlTW9kdWxlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChfUk9PVF9FRkZFQ1RTX0dVQVJEKVxuICAgIGd1YXJkOiBhbnlcbiAgKSB7XG4gICAgcnVubmVyLnN0YXJ0KCk7XG5cbiAgICByb290RWZmZWN0cy5mb3JFYWNoKChlZmZlY3RTb3VyY2VJbnN0YW5jZSkgPT5cbiAgICAgIHNvdXJjZXMuYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZSlcbiAgICApO1xuXG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBST09UX0VGRkVDVFNfSU5JVCB9KTtcbiAgfVxuXG4gIGFkZEVmZmVjdHMoZWZmZWN0U291cmNlSW5zdGFuY2U6IGFueSkge1xuICAgIHRoaXMuc291cmNlcy5hZGRFZmZlY3RzKGVmZmVjdFNvdXJjZUluc3RhbmNlKTtcbiAgfVxufVxuIl19