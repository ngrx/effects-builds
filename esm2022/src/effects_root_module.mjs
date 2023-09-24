import { NgModule, Inject, Optional } from '@angular/core';
import { _ROOT_EFFECTS_GUARD, _ROOT_EFFECTS_INSTANCES } from './tokens';
import { ROOT_EFFECTS_INIT } from './effects_actions';
import * as i0 from "@angular/core";
import * as i1 from "./effect_sources";
import * as i2 from "./effects_runner";
import * as i3 from "@ngrx/store";
export class EffectsRootModule {
    constructor(sources, runner, store, rootEffectsInstances, storeRootModule, storeFeatureModule, guard) {
        this.sources = sources;
        runner.start();
        for (const effectsInstance of rootEffectsInstances) {
            sources.addEffects(effectsInstance);
        }
        store.dispatch({ type: ROOT_EFFECTS_INIT });
    }
    addEffects(effectsInstance) {
        this.sources.addEffects(effectsInstance);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EffectsRootModule, deps: [{ token: i1.EffectSources }, { token: i2.EffectsRunner }, { token: i3.Store }, { token: _ROOT_EFFECTS_INSTANCES }, { token: i3.StoreRootModule, optional: true }, { token: i3.StoreFeatureModule, optional: true }, { token: _ROOT_EFFECTS_GUARD, optional: true }], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.3", ngImport: i0, type: EffectsRootModule }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EffectsRootModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: EffectsRootModule, decorators: [{
            type: NgModule,
            args: [{}]
        }], ctorParameters: function () { return [{ type: i1.EffectSources }, { type: i2.EffectsRunner }, { type: i3.Store }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [_ROOT_EFFECTS_INSTANCES]
                }] }, { type: i3.StoreRootModule, decorators: [{
                    type: Optional
                }] }, { type: i3.StoreFeatureModule, decorators: [{
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [_ROOT_EFFECTS_GUARD]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yb290X21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yb290X21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQUd0RCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQ1UsT0FBc0IsRUFDOUIsTUFBcUIsRUFDckIsS0FBWSxFQUNxQixvQkFBK0IsRUFDcEQsZUFBZ0MsRUFDaEMsa0JBQXNDLEVBR2xELEtBQWM7UUFSTixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBVTlCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVmLEtBQUssTUFBTSxlQUFlLElBQUksb0JBQW9CLEVBQUU7WUFDbEQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNyQztRQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxVQUFVLENBQUMsZUFBd0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztpSUF2QlUsaUJBQWlCLGlHQUtsQix1QkFBdUIsOEdBSXZCLG1CQUFtQjtrSUFUbEIsaUJBQWlCO2tJQUFqQixpQkFBaUI7OzJGQUFqQixpQkFBaUI7a0JBRDdCLFFBQVE7bUJBQUMsRUFBRTs7MEJBTVAsTUFBTTsyQkFBQyx1QkFBdUI7OzBCQUM5QixRQUFROzswQkFDUixRQUFROzswQkFDUixRQUFROzswQkFDUixNQUFNOzJCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgU3RvcmVSb290TW9kdWxlLCBTdG9yZUZlYXR1cmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzUnVubmVyIH0gZnJvbSAnLi9lZmZlY3RzX3J1bm5lcic7XG5pbXBvcnQgeyBFZmZlY3RTb3VyY2VzIH0gZnJvbSAnLi9lZmZlY3Rfc291cmNlcyc7XG5pbXBvcnQgeyBfUk9PVF9FRkZFQ1RTX0dVQVJELCBfUk9PVF9FRkZFQ1RTX0lOU1RBTkNFUyB9IGZyb20gJy4vdG9rZW5zJztcbmltcG9ydCB7IFJPT1RfRUZGRUNUU19JTklUIH0gZnJvbSAnLi9lZmZlY3RzX2FjdGlvbnMnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRWZmZWN0c1Jvb3RNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNvdXJjZXM6IEVmZmVjdFNvdXJjZXMsXG4gICAgcnVubmVyOiBFZmZlY3RzUnVubmVyLFxuICAgIHN0b3JlOiBTdG9yZSxcbiAgICBASW5qZWN0KF9ST09UX0VGRkVDVFNfSU5TVEFOQ0VTKSByb290RWZmZWN0c0luc3RhbmNlczogdW5rbm93bltdLFxuICAgIEBPcHRpb25hbCgpIHN0b3JlUm9vdE1vZHVsZTogU3RvcmVSb290TW9kdWxlLFxuICAgIEBPcHRpb25hbCgpIHN0b3JlRmVhdHVyZU1vZHVsZTogU3RvcmVGZWF0dXJlTW9kdWxlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChfUk9PVF9FRkZFQ1RTX0dVQVJEKVxuICAgIGd1YXJkOiB1bmtub3duXG4gICkge1xuICAgIHJ1bm5lci5zdGFydCgpO1xuXG4gICAgZm9yIChjb25zdCBlZmZlY3RzSW5zdGFuY2Ugb2Ygcm9vdEVmZmVjdHNJbnN0YW5jZXMpIHtcbiAgICAgIHNvdXJjZXMuYWRkRWZmZWN0cyhlZmZlY3RzSW5zdGFuY2UpO1xuICAgIH1cblxuICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogUk9PVF9FRkZFQ1RTX0lOSVQgfSk7XG4gIH1cblxuICBhZGRFZmZlY3RzKGVmZmVjdHNJbnN0YW5jZTogdW5rbm93bik6IHZvaWQge1xuICAgIHRoaXMuc291cmNlcy5hZGRFZmZlY3RzKGVmZmVjdHNJbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==