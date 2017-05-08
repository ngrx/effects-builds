import { OpaqueToken, OnDestroy } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { SingletonEffectsService } from './singleton-effects.service';
export declare const effects: OpaqueToken;
export declare class EffectsSubscription extends Subscription implements OnDestroy {
    private store;
    private singletonEffectsService;
    parent: EffectsSubscription;
    constructor(store: Observer<Action>, singletonEffectsService: SingletonEffectsService, parent?: EffectsSubscription, effectInstances?: any[]);
    addEffects(effectInstances: any[]): void;
    ngOnDestroy(): void;
}
