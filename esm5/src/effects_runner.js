import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EffectSources } from './effect_sources';
var EffectsRunner = /** @class */ (function () {
    function EffectsRunner(effectSources, store) {
        this.effectSources = effectSources;
        this.store = store;
        this.effectsSubscription = null;
    }
    EffectsRunner.prototype.start = function () {
        if (!this.effectsSubscription) {
            this.effectsSubscription = this.effectSources
                .toActions()
                .subscribe(this.store);
        }
    };
    EffectsRunner.prototype.ngOnDestroy = function () {
        if (this.effectsSubscription) {
            this.effectsSubscription.unsubscribe();
            this.effectsSubscription = null;
        }
    };
    EffectsRunner.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EffectsRunner.ctorParameters = function () { return [
        { type: EffectSources },
        { type: Store }
    ]; };
    return EffectsRunner;
}());
export { EffectsRunner };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19ydW5uZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdHNfcnVubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFJRSx1QkFDVSxhQUE0QixFQUM1QixLQUFpQjtRQURqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBSm5CLHdCQUFtQixHQUF3QixJQUFJLENBQUM7SUFLckQsQ0FBQztJQUVKLDZCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsYUFBYTtpQkFDMUMsU0FBUyxFQUFFO2lCQUNYLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBdEJGLFVBQVU7Ozs7Z0JBRkYsYUFBYTtnQkFIYixLQUFLOztJQTRCZCxvQkFBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEVmZmVjdFNvdXJjZXMgfSBmcm9tICcuL2VmZmVjdF9zb3VyY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVmZmVjdHNSdW5uZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVmZmVjdHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWZmZWN0U291cmNlczogRWZmZWN0U291cmNlcyxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+XG4gICkge31cblxuICBzdGFydCgpIHtcbiAgICBpZiAoIXRoaXMuZWZmZWN0c1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5lZmZlY3RzU3Vic2NyaXB0aW9uID0gdGhpcy5lZmZlY3RTb3VyY2VzXG4gICAgICAgIC50b0FjdGlvbnMoKVxuICAgICAgICAuc3Vic2NyaWJlKHRoaXMuc3RvcmUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVmZmVjdHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZWZmZWN0c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5lZmZlY3RzU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==