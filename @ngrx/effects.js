import { ScannedActionsSubject, Store, compose } from '@ngrx/store';
import { merge } from 'rxjs/observable/merge';
import { ignoreElements } from 'rxjs/operator/ignoreElements';
import { materialize } from 'rxjs/operator/materialize';
import { map } from 'rxjs/operator/map';
import { APP_INITIALIZER, Inject, Injectable, InjectionToken, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operator/filter';
import { groupBy } from 'rxjs/operator/groupBy';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { exhaustMap } from 'rxjs/operator/exhaustMap';
import { dematerialize } from 'rxjs/operator/dematerialize';
import { Subject } from 'rxjs/Subject';

const METADATA_KEY = '@ngrx/effects';
const r = Reflect;
/**
 * @param {?} sourceProto
 * @return {?}
 */
function getEffectMetadataEntries(sourceProto) {
    if (r.hasOwnMetadata(METADATA_KEY, sourceProto)) {
        return r.getOwnMetadata(METADATA_KEY, sourceProto);
    }
    return [];
}
/**
 * @param {?} sourceProto
 * @param {?} entries
 * @return {?}
 */
function setEffectMetadataEntries(sourceProto, entries) {
    r.defineMetadata(METADATA_KEY, entries, sourceProto);
}
/**
 * @param {?=} __0
 * @return {?}
 */
function Effect({ dispatch } = { dispatch: true }) {
    return function (target, propertyName) {
        const /** @type {?} */ effects = getEffectMetadataEntries(target);
        const /** @type {?} */ metadata = { propertyName, dispatch };
        setEffectMetadataEntries(target, [...effects, metadata]);
    };
}
/**
 * @param {?} instance
 * @return {?}
 */
function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}
const getSourceMetadata = compose(getEffectMetadataEntries, getSourceForInstance);

const onRunEffectsKey = 'ngrxOnRunEffects';
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function isOnRunEffects(sourceInstance) {
    const /** @type {?} */ source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}

/**
 * @param {?} sourceInstance
 * @return {?}
 */
function mergeEffects(sourceInstance) {
    const /** @type {?} */ sourceName = getSourceForInstance(sourceInstance).constructor.name;
    const /** @type {?} */ observables = getSourceMetadata(sourceInstance).map(({ propertyName, dispatch }) => {
        const /** @type {?} */ observable = typeof sourceInstance[propertyName] ===
            'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        if (dispatch === false) {
            return ignoreElements.call(observable);
        }
        const /** @type {?} */ materialized$ = materialize.call(observable);
        return map.call(materialized$, (notification) => ({
            effect: sourceInstance[propertyName],
            notification,
            propertyName,
            sourceName,
            sourceInstance,
        }));
    });
    return merge(...observables);
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function resolveEffectSource(sourceInstance) {
    const /** @type {?} */ mergedEffects$ = mergeEffects(sourceInstance);
    if (isOnRunEffects(sourceInstance)) {
        return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
}

class Actions extends Observable {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        if (source) {
            this.source = source;
        }
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        const /** @type {?} */ observable = new Actions();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    /**
     * @param {...?} allowedTypes
     * @return {?}
     */
    ofType(...allowedTypes) {
        return filter.call(this, (action) => allowedTypes.some(type => type === action.type));
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

const IMMEDIATE_EFFECTS = new InjectionToken('ngrx/effects: Immediate Effects');
const BOOTSTRAP_EFFECTS = new InjectionToken('ngrx/effects: Bootstrap Effects');
const ROOT_EFFECTS = new InjectionToken('ngrx/effects: Root Effects');
const FEATURE_EFFECTS = new InjectionToken('ngrx/effects: Feature Effects');
const CONSOLE = new InjectionToken('Browser Console');

class ErrorReporter {
    /**
     * @param {?} console
     */
    constructor(console) {
        this.console = console;
    }
    /**
     * @param {?} reason
     * @param {?} details
     * @return {?}
     */
    report(reason, details) {
        this.console.group(reason);
        for (let /** @type {?} */ key in details) {
            this.console.error(`${key}:`, details[key]);
        }
        this.console.groupEnd();
    }
}
ErrorReporter.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ErrorReporter.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CONSOLE,] },] },
];

class EffectSources extends Subject {
    /**
     * @param {?} errorReporter
     */
    constructor(errorReporter) {
        super();
        this.errorReporter = errorReporter;
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    addEffects(effectSourceInstance) {
        this.next(effectSourceInstance);
    }
    /**
     * @return {?}
     */
    toActions() {
        return mergeMap.call(groupBy.call(this, getSourceForInstance), (source$) => dematerialize.call(map.call(exhaustMap.call(source$, resolveEffectSource), (output) => {
            switch (output.notification.kind) {
                case 'N': {
                    const /** @type {?} */ action = output.notification.value;
                    const /** @type {?} */ isInvalidAction = !action || !action.type || typeof action.type !== 'string';
                    if (isInvalidAction) {
                        const /** @type {?} */ errorReason = `Effect "${output.sourceName}.${output.propertyName}" dispatched an invalid action`;
                        this.errorReporter.report(errorReason, {
                            Source: output.sourceInstance,
                            Effect: output.effect,
                            Dispatched: action,
                            Notification: output.notification,
                        });
                    }
                    break;
                }
                case 'E': {
                    const /** @type {?} */ errorReason = `Effect "${output.sourceName}.${output.propertyName}" threw an error`;
                    this.errorReporter.report(errorReason, {
                        Source: output.sourceInstance,
                        Effect: output.effect,
                        Error: output.notification.error,
                        Notification: output.notification,
                    });
                    break;
                }
            }
            return output.notification;
        })));
    }
}
EffectSources.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
EffectSources.ctorParameters = () => [
    { type: ErrorReporter, },
];

class EffectsFeatureModule {
    /**
     * @param {?} effectSources
     * @param {?} effectSourceGroups
     */
    constructor(effectSources, effectSourceGroups) {
        this.effectSources = effectSources;
        effectSourceGroups.forEach(group => group.forEach(effectSourceInstance => effectSources.addEffects(effectSourceInstance)));
    }
}
EffectsFeatureModule.decorators = [
    { type: NgModule, args: [{},] },
];
/**
 * @nocollapse
 */
EffectsFeatureModule.ctorParameters = () => [
    { type: EffectSources, },
    { type: Array, decorators: [{ type: Inject, args: [FEATURE_EFFECTS,] },] },
];

class EffectsRunner {
    /**
     * @param {?} effectSources
     * @param {?} store
     */
    constructor(effectSources, store) {
        this.effectSources = effectSources;
        this.store = store;
        this.effectsSubscription = null;
    }
    /**
     * @return {?}
     */
    start() {
        if (!this.effectsSubscription) {
            this.effectsSubscription = this.effectSources
                .toActions()
                .subscribe(this.store);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.effectsSubscription) {
            this.effectsSubscription.unsubscribe();
            this.effectsSubscription = null;
        }
    }
}
EffectsRunner.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
EffectsRunner.ctorParameters = () => [
    { type: EffectSources, },
    { type: Store, },
];

/**
 * @param {?} effectSources
 * @param {?} runner
 * @param {?} rootEffects
 * @return {?}
 */
function createRunEffects(effectSources, runner, rootEffects) {
    return function () {
        runner.start();
        rootEffects.forEach(effectSourceInstance => effectSources.addEffects(effectSourceInstance));
    };
}
const RUN_EFFECTS = {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [EffectSources, EffectsRunner, ROOT_EFFECTS],
    useFactory: createRunEffects,
};

class EffectsModule {
    /**
     * @param {?} featureEffects
     * @return {?}
     */
    static forFeature(featureEffects) {
        return {
            ngModule: EffectsFeatureModule,
            providers: [
                featureEffects,
                {
                    provide: FEATURE_EFFECTS,
                    multi: true,
                    deps: featureEffects,
                    useFactory: createSourceInstances,
                },
            ],
        };
    }
    /**
     * @param {?} rootEffects
     * @return {?}
     */
    static forRoot(rootEffects) {
        return {
            ngModule: EffectsModule,
            providers: [
                EffectsRunner,
                EffectSources,
                ErrorReporter,
                Actions,
                RUN_EFFECTS,
                rootEffects,
                {
                    provide: ROOT_EFFECTS,
                    deps: rootEffects,
                    useFactory: createSourceInstances,
                },
                {
                    provide: CONSOLE,
                    useValue: console,
                },
            ],
        };
    }
}
EffectsModule.decorators = [
    { type: NgModule, args: [{},] },
];
/**
 * @nocollapse
 */
EffectsModule.ctorParameters = () => [];
/**
 * @param {...?} instances
 * @return {?}
 */
function createSourceInstances(...instances) {
    return instances;
}

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

export { Effect, mergeEffects, Actions, EffectsModule, EffectSources, toPayload, EffectsFeatureModule as ɵb, createSourceInstances as ɵa, EffectsRunner as ɵg, ErrorReporter as ɵf, RUN_EFFECTS as ɵi, createRunEffects as ɵh, CONSOLE as ɵe, FEATURE_EFFECTS as ɵd, ROOT_EFFECTS as ɵc };
//# sourceMappingURL=effects.js.map
