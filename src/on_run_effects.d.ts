import { Observable } from 'rxjs/Observable';
import { EffectNotification } from './effects_resolver';
export interface OnRunEffects {
    ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification>;
}
export declare function isOnRunEffects(sourceInstance: Object): sourceInstance is OnRunEffects;
