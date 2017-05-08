import { merge } from 'rxjs/observable/merge';
import { ignoreElements } from 'rxjs/operator/ignoreElements';
import { APP_BOOTSTRAP_LISTENER, Inject, Injectable, Injector, NgModule, OpaqueToken, Optional, SkipSelf } from '@angular/core';
import { ScannedActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operator/filter';
import { Subscription } from 'rxjs/Subscription';

const METADATA_KEY = '@ngrx/effects';
/**
 * @param {?=} __0
 * @return {?}
 */
function Effect({ dispatch } = { dispatch: true }) {
    return function (target, propertyName) {
        if (!((Reflect)).hasOwnMetadata(METADATA_KEY, target)) {
            ((Reflect)).defineMetadata(METADATA_KEY, [], target);
        }
        const /** @type {?} */ effects = ((Reflect)).getOwnMetadata(METADATA_KEY, target);
        const /** @type {?} */ metadata = { propertyName, dispatch };
        ((Reflect)).defineMetadata(METADATA_KEY, [...effects, metadata], target);
    };
}
/**
 * @param {?} instance
 * @return {?}
 */
function getEffectsMetadata(instance) {
    const /** @type {?} */ target = Object.getPrototypeOf(instance);
    if (!((Reflect)).hasOwnMetadata(METADATA_KEY, target)) {
        return [];
    }
    return ((Reflect)).getOwnMetadata(METADATA_KEY, target);
}
/**
 * @param {?} instance
 * @return {?}
 */
function mergeEffects(instance) {
    const /** @type {?} */ observables = getEffectsMetadata(instance).map(({ propertyName, dispatch }) => {
        const /** @type {?} */ observable = typeof instance[propertyName] === 'function' ?
            instance[propertyName]() : instance[propertyName];
        if (dispatch === false) {
            return ignoreElements.call(observable);
        }
        return observable;
    });
    return merge(...observables);
}

class Actions extends Observable {
    /**
     * @param {?} actionsSubject
     */
    constructor(actionsSubject) {
        super();
        this.source = actionsSubject;
    }
    /**
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        const /** @type {?} */ observable = new Actions(this);
        observable.operator = operator;
        return observable;
    }
    /**
     * @param {...?} keys
     * @return {?}
     */
    ofType(...keys) {
        return filter.call(this, ({ type }) => {
            const /** @type {?} */ len = keys.length;
            if (len === 1) {
                return type === keys[0];
            }
            else {
                for (let /** @type {?} */ i = 0; i < len; i++) {
                    if (keys[i] === type) {
                        return true;
                    }
                }
            }
            return false;
        });
    }
}
Actions.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
Actions.ctorParameters = () => [
    { type: Observable, decorators: [{ type: Inject, args: [ScannedActionsSubject,] },] },
];

class SingletonEffectsService {
    constructor() {
        this.registeredEffects = [];
    }
    /**
     * @param {?} effectInstances
     * @return {?}
     */
    removeExistingAndRegisterNew(effectInstances) {
        return effectInstances.filter(instance => {
            const /** @type {?} */ instanceAsString = instance.constructor.toString();
            if (this.registeredEffects.indexOf(instanceAsString) === -1) {
                this.registeredEffects.push(instanceAsString);
                return true;
            }
            return false;
        });
    }
}
SingletonEffectsService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
SingletonEffectsService.ctorParameters = () => [];

const effects = new OpaqueToken('ngrx/effects: Effects');
class EffectsSubscription extends Subscription {
    /**
     * @param {?} store
     * @param {?} singletonEffectsService
     * @param {?=} parent
     * @param {?=} effectInstances
     */
    constructor(store, singletonEffectsService, parent, effectInstances) {
        super();
        this.store = store;
        this.singletonEffectsService = singletonEffectsService;
        this.parent = parent;
        if (parent) {
            parent.add(this);
        }
        if (typeof effectInstances !== 'undefined' && effectInstances) {
            this.addEffects(effectInstances);
        }
    }
    /**
     * @param {?} effectInstances
     * @return {?}
     */
    addEffects(effectInstances) {
        effectInstances = this.singletonEffectsService.removeExistingAndRegisterNew(effectInstances);
        const /** @type {?} */ sources = effectInstances.map(mergeEffects);
        const /** @type {?} */ merged = merge(...sources);
        this.add(merged.subscribe(this.store));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (!this.closed) {
            this.unsubscribe();
        }
    }
}
EffectsSubscription.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
EffectsSubscription.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [Store,] },] },
    { type: SingletonEffectsService, decorators: [{ type: Inject, args: [SingletonEffectsService,] },] },
    { type: EffectsSubscription, decorators: [{ type: Optional }, { type: SkipSelf },] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [effects,] },] },
];

const afterBootstrapEffects = new OpaqueToken('ngrx:effects: Bootstrap Effects');
/**
 * @param {?} injector
 * @param {?} subscription
 * @return {?}
 */
function runAfterBootstrapEffects(injector, subscription) {
    return () => {
        const /** @type {?} */ effectInstances = injector.get(afterBootstrapEffects, false);
        if (effectInstances) {
            subscription.addEffects(effectInstances);
        }
    };
}

class EffectsModule {
    /**
     * @param {?} effectsSubscription
     */
    constructor(effectsSubscription) {
        this.effectsSubscription = effectsSubscription;
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: EffectsModule,
            providers: [
                SingletonEffectsService
            ]
        };
    }
    /**
     * @param {?} type
     * @return {?}
     */
    static run(type) {
        return {
            ngModule: EffectsModule,
            providers: [
                EffectsSubscription,
                type,
                { provide: effects, useExisting: type, multi: true }
            ]
        };
    }
    /**
     * @param {?} type
     * @return {?}
     */
    static runAfterBootstrap(type) {
        return {
            ngModule: EffectsModule,
            providers: [
                type,
                { provide: afterBootstrapEffects, useExisting: type, multi: true }
            ]
        };
    }
}
EffectsModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    Actions,
                    EffectsSubscription,
                    {
                        provide: APP_BOOTSTRAP_LISTENER,
                        multi: true,
                        deps: [Injector, EffectsSubscription],
                        useFactory: runAfterBootstrapEffects
                    }
                ]
            },] },
];
/**
 * @nocollapse
 */
EffectsModule.ctorParameters = () => [
    { type: EffectsSubscription, },
];

/**
 * @param {?} action
 * @return {?}
 */
function toPayload(action) {
    return ((action)).payload;
}

/**
 * Generated bundle index. Do not edit.
 */

export { Effect, mergeEffects, Actions, EffectsModule, EffectsSubscription, toPayload, runAfterBootstrapEffects, afterBootstrapEffects as ɵb, effects as ɵa, SingletonEffectsService as ɵc };
//# sourceMappingURL=effects.js.map
