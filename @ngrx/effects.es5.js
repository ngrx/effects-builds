var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var METADATA_KEY = '@ngrx/effects';
var r = Reflect;
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
function Effect(_a) {
    var dispatch = (_a === void 0 ? { dispatch: true } : _a).dispatch;
    return function (target, propertyName) {
        var /** @type {?} */ effects = getEffectMetadataEntries(target);
        var /** @type {?} */ metadata = { propertyName: propertyName, dispatch: dispatch };
        setEffectMetadataEntries(target, effects.concat([metadata]));
    };
}
/**
 * @param {?} instance
 * @return {?}
 */
function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}
var getSourceMetadata = compose(getEffectMetadataEntries, getSourceForInstance);
var onRunEffectsKey = 'ngrxOnRunEffects';
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function isOnRunEffects(sourceInstance) {
    var /** @type {?} */ source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function mergeEffects(sourceInstance) {
    var /** @type {?} */ sourceName = getSourceForInstance(sourceInstance).constructor.name;
    var /** @type {?} */ observables = getSourceMetadata(sourceInstance).map(function (_a) {
        var propertyName = _a.propertyName, dispatch = _a.dispatch;
        var /** @type {?} */ observable = typeof sourceInstance[propertyName] ===
            'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        if (dispatch === false) {
            return ignoreElements.call(observable);
        }
        var /** @type {?} */ materialized$ = materialize.call(observable);
        return map.call(materialized$, function (notification) { return ({
            effect: sourceInstance[propertyName],
            notification: notification,
            propertyName: propertyName,
            sourceName: sourceName,
            sourceInstance: sourceInstance,
        }); });
    });
    return merge.apply(void 0, observables);
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function resolveEffectSource(sourceInstance) {
    var /** @type {?} */ mergedEffects$ = mergeEffects(sourceInstance);
    if (isOnRunEffects(sourceInstance)) {
        return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
}
var Actions = (function (_super) {
    __extends(Actions, _super);
    /**
     * @param {?=} source
     */
    function Actions(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this.source = source;
        }
        return _this;
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    Actions.prototype.lift = function (operator) {
        var /** @type {?} */ observable = new Actions();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * @param {...?} allowedTypes
     * @return {?}
     */
    Actions.prototype.ofType = function () {
        var allowedTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            allowedTypes[_i] = arguments[_i];
        }
        return filter.call(this, function (action) { return allowedTypes.some(function (type) { return type === action.type; }); });
    };
    return Actions;
}(Observable));
Actions.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
Actions.ctorParameters = function () { return [
    { type: Observable, decorators: [{ type: Inject, args: [ScannedActionsSubject,] },] },
]; };
var IMMEDIATE_EFFECTS = new InjectionToken('ngrx/effects: Immediate Effects');
var BOOTSTRAP_EFFECTS = new InjectionToken('ngrx/effects: Bootstrap Effects');
var ROOT_EFFECTS = new InjectionToken('ngrx/effects: Root Effects');
var FEATURE_EFFECTS = new InjectionToken('ngrx/effects: Feature Effects');
var CONSOLE = new InjectionToken('Browser Console');
var ErrorReporter = (function () {
    /**
     * @param {?} console
     */
    function ErrorReporter(console) {
        this.console = console;
    }
    /**
     * @param {?} reason
     * @param {?} details
     * @return {?}
     */
    ErrorReporter.prototype.report = function (reason, details) {
        this.console.group(reason);
        for (var /** @type {?} */ key in details) {
            this.console.error(key + ":", details[key]);
        }
        this.console.groupEnd();
    };
    return ErrorReporter;
}());
ErrorReporter.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ErrorReporter.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [CONSOLE,] },] },
]; };
var EffectSources = (function (_super) {
    __extends(EffectSources, _super);
    /**
     * @param {?} errorReporter
     */
    function EffectSources(errorReporter) {
        var _this = _super.call(this) || this;
        _this.errorReporter = errorReporter;
        return _this;
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    EffectSources.prototype.addEffects = function (effectSourceInstance) {
        this.next(effectSourceInstance);
    };
    /**
     * @return {?}
     */
    EffectSources.prototype.toActions = function () {
        var _this = this;
        return mergeMap.call(groupBy.call(this, getSourceForInstance), function (source$) { return dematerialize.call(map.call(exhaustMap.call(source$, resolveEffectSource), function (output) {
            switch (output.notification.kind) {
                case 'N': {
                    var /** @type {?} */ action = output.notification.value;
                    var /** @type {?} */ isInvalidAction = !action || !action.type || typeof action.type !== 'string';
                    if (isInvalidAction) {
                        var /** @type {?} */ errorReason = "Effect \"" + output.sourceName + "." + output.propertyName + "\" dispatched an invalid action";
                        _this.errorReporter.report(errorReason, {
                            Source: output.sourceInstance,
                            Effect: output.effect,
                            Dispatched: action,
                            Notification: output.notification,
                        });
                    }
                    break;
                }
                case 'E': {
                    var /** @type {?} */ errorReason = "Effect \"" + output.sourceName + "." + output.propertyName + "\" threw an error";
                    _this.errorReporter.report(errorReason, {
                        Source: output.sourceInstance,
                        Effect: output.effect,
                        Error: output.notification.error,
                        Notification: output.notification,
                    });
                    break;
                }
            }
            return output.notification;
        })); });
    };
    return EffectSources;
}(Subject));
EffectSources.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
EffectSources.ctorParameters = function () { return [
    { type: ErrorReporter, },
]; };
var EffectsFeatureModule = (function () {
    /**
     * @param {?} effectSources
     * @param {?} effectSourceGroups
     */
    function EffectsFeatureModule(effectSources, effectSourceGroups) {
        this.effectSources = effectSources;
        effectSourceGroups.forEach(function (group) { return group.forEach(function (effectSourceInstance) { return effectSources.addEffects(effectSourceInstance); }); });
    }
    return EffectsFeatureModule;
}());
EffectsFeatureModule.decorators = [
    { type: NgModule, args: [{},] },
];
/**
 * @nocollapse
 */
EffectsFeatureModule.ctorParameters = function () { return [
    { type: EffectSources, },
    { type: Array, decorators: [{ type: Inject, args: [FEATURE_EFFECTS,] },] },
]; };
var EffectsRunner = (function () {
    /**
     * @param {?} effectSources
     * @param {?} store
     */
    function EffectsRunner(effectSources, store) {
        this.effectSources = effectSources;
        this.store = store;
        this.effectsSubscription = null;
    }
    /**
     * @return {?}
     */
    EffectsRunner.prototype.start = function () {
        if (!this.effectsSubscription) {
            this.effectsSubscription = this.effectSources
                .toActions()
                .subscribe(this.store);
        }
    };
    /**
     * @return {?}
     */
    EffectsRunner.prototype.ngOnDestroy = function () {
        if (this.effectsSubscription) {
            this.effectsSubscription.unsubscribe();
            this.effectsSubscription = null;
        }
    };
    return EffectsRunner;
}());
EffectsRunner.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
EffectsRunner.ctorParameters = function () { return [
    { type: EffectSources, },
    { type: Store, },
]; };
/**
 * @param {?} effectSources
 * @param {?} runner
 * @param {?} rootEffects
 * @return {?}
 */
function createRunEffects(effectSources, runner, rootEffects) {
    return function () {
        runner.start();
        rootEffects.forEach(function (effectSourceInstance) { return effectSources.addEffects(effectSourceInstance); });
    };
}
var RUN_EFFECTS = {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [EffectSources, EffectsRunner, ROOT_EFFECTS],
    useFactory: createRunEffects,
};
var EffectsModule = (function () {
    function EffectsModule() {
    }
    /**
     * @param {?} featureEffects
     * @return {?}
     */
    EffectsModule.forFeature = function (featureEffects) {
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
    };
    /**
     * @param {?} rootEffects
     * @return {?}
     */
    EffectsModule.forRoot = function (rootEffects) {
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
    };
    return EffectsModule;
}());
EffectsModule.decorators = [
    { type: NgModule, args: [{},] },
];
/**
 * @nocollapse
 */
EffectsModule.ctorParameters = function () { return []; };
/**
 * @param {...?} instances
 * @return {?}
 */
function createSourceInstances() {
    var instances = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        instances[_i] = arguments[_i];
    }
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
//# sourceMappingURL=effects.es5.js.map
