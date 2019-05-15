/**
 * @license NgRx 8.0.0-beta.2
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */
import { __assign, __values, __spread, __extends, __decorate, __param, __metadata } from 'tslib';
import { compose, ScannedActionsSubject, Store, StoreRootModule, StoreFeatureModule } from '@ngrx/store';
import { merge, Observable, Subject, defer, NotificationKind, Notification } from 'rxjs';
import { ignoreElements, materialize, map, filter, groupBy, mergeMap, exhaustMap, dematerialize, concatMap, finalize } from 'rxjs/operators';
import { Injectable, Inject, ErrorHandler, InjectionToken, NgModule, Optional } from '@angular/core';

var CREATE_EFFECT_METADATA_KEY = '__@ngrx/effects_create__';
function createEffect(source, _a) {
    var _b = (_a === void 0 ? {} : _a).dispatch, dispatch = _b === void 0 ? true : _b;
    var effect = source();
    Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
        value: {
            dispatch: dispatch,
        },
    });
    return effect;
}
function getCreateEffectMetadata(instance) {
    var propertyNames = Object.getOwnPropertyNames(instance);
    var metadata = propertyNames
        .filter(function (propertyName) {
        return instance[propertyName] &&
            instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY);
    })
        .map(function (propertyName) {
        var metaData = instance[propertyName][CREATE_EFFECT_METADATA_KEY];
        return __assign({ propertyName: propertyName }, metaData);
    });
    return metadata;
}

function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}

var METADATA_KEY = '__@ngrx/effects__';
function Effect(_a) {
    var _b = (_a === void 0 ? {} : _a).dispatch, dispatch = _b === void 0 ? true : _b;
    return function (target, propertyName) {
        var metadata = { propertyName: propertyName, dispatch: dispatch };
        setEffectMetadataEntries(target, [metadata]);
    };
}
function getEffectDecoratorMetadata(instance) {
    var effectsDecorators = compose(getEffectMetadataEntries, getSourceForInstance)(instance);
    return effectsDecorators;
}
function setEffectMetadataEntries(sourceProto, entries) {
    var constructor = sourceProto.constructor;
    var meta = constructor.hasOwnProperty(METADATA_KEY)
        ? constructor[METADATA_KEY]
        : Object.defineProperty(constructor, METADATA_KEY, { value: [] })[METADATA_KEY];
    Array.prototype.push.apply(meta, entries);
}
function getEffectMetadataEntries(sourceProto) {
    return sourceProto.constructor.hasOwnProperty(METADATA_KEY)
        ? sourceProto.constructor[METADATA_KEY]
        : [];
}

function getEffectsMetadata(instance) {
    var e_1, _a;
    var metadata = {};
    try {
        for (var _b = __values(getSourceMetadata(instance)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = _c.value, propertyName = _d.propertyName, dispatch = _d.dispatch;
            metadata[propertyName] = { dispatch: dispatch };
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return metadata;
}
function getSourceMetadata(instance) {
    var effects = [
        getEffectDecoratorMetadata,
        getCreateEffectMetadata,
    ];
    return effects.reduce(function (sources, source) { return sources.concat(source(instance)); }, []);
}

function mergeEffects(sourceInstance) {
    var sourceName = getSourceForInstance(sourceInstance).constructor.name;
    var observables = getSourceMetadata(sourceInstance).map(function (_a) {
        var propertyName = _a.propertyName, dispatch = _a.dispatch;
        var observable = typeof sourceInstance[propertyName] === 'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        if (dispatch === false) {
            return observable.pipe(ignoreElements());
        }
        var materialized$ = observable.pipe(materialize());
        return materialized$.pipe(map(function (notification) { return ({
            effect: sourceInstance[propertyName],
            notification: notification,
            propertyName: propertyName,
            sourceName: sourceName,
            sourceInstance: sourceInstance,
        }); }));
    });
    return merge.apply(void 0, __spread(observables));
}

var Actions = /** @class */ (function (_super) {
    __extends(Actions, _super);
    function Actions(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this.source = source;
        }
        return _this;
    }
    Actions_1 = Actions;
    Actions.prototype.lift = function (operator) {
        var observable = new Actions_1();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    var Actions_1;
    Actions = Actions_1 = __decorate([
        Injectable(),
        __param(0, Inject(ScannedActionsSubject)),
        __metadata("design:paramtypes", [Observable])
    ], Actions);
    return Actions;
}(Observable));
function ofType() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return filter(function (action) {
        return allowedTypes.some(function (typeOrActionCreator) {
            if (typeof typeOrActionCreator === 'string') {
                // Comparing the string to type
                return typeOrActionCreator === action.type;
            }
            // We are filtering by ActionCreator
            return typeOrActionCreator.type === action.type;
        });
    });
}

function verifyOutput(output, reporter) {
    reportErrorThrown(output, reporter);
    reportInvalidActions(output, reporter);
}
function reportErrorThrown(output, reporter) {
    if (output.notification.kind === 'E') {
        reporter.handleError(output.notification.error);
    }
}
function reportInvalidActions(output, reporter) {
    if (output.notification.kind === 'N') {
        var action = output.notification.value;
        var isInvalidAction = !isAction(action);
        if (isInvalidAction) {
            reporter.handleError(new Error("Effect " + getEffectName(output) + " dispatched an invalid action: " + stringify(action)));
        }
    }
}
function isAction(action) {
    return action && action.type && typeof action.type === 'string';
}
function getEffectName(_a) {
    var propertyName = _a.propertyName, sourceInstance = _a.sourceInstance, sourceName = _a.sourceName;
    var isMethod = typeof sourceInstance[propertyName] === 'function';
    return "\"" + sourceName + "." + propertyName + (isMethod ? '()' : '') + "\"";
}
function stringify(action) {
    try {
        return JSON.stringify(action);
    }
    catch (_a) {
        return action;
    }
}

var onIdentifyEffectsKey = 'ngrxOnIdentifyEffects';
var onRunEffectsKey = 'ngrxOnRunEffects';
var onInitEffects = 'ngrxOnInitEffects';

var EffectSources = /** @class */ (function (_super) {
    __extends(EffectSources, _super);
    function EffectSources(errorHandler, store) {
        var _this = _super.call(this) || this;
        _this.errorHandler = errorHandler;
        _this.store = store;
        return _this;
    }
    EffectSources.prototype.addEffects = function (effectSourceInstance) {
        this.next(effectSourceInstance);
        if (onInitEffects in effectSourceInstance &&
            typeof effectSourceInstance[onInitEffects] === 'function') {
            this.store.dispatch(effectSourceInstance[onInitEffects]());
        }
    };
    /**
     * @internal
     */
    EffectSources.prototype.toActions = function () {
        var _this = this;
        return this.pipe(groupBy(getSourceForInstance), mergeMap(function (source$) { return source$.pipe(groupBy(effectsInstance)); }), mergeMap(function (source$) {
            return source$.pipe(exhaustMap(resolveEffectSource), map(function (output) {
                verifyOutput(output, _this.errorHandler);
                return output.notification;
            }), filter(function (notification) {
                return notification.kind === 'N';
            }), dematerialize());
        }));
    };
    EffectSources = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ErrorHandler, Store])
    ], EffectSources);
    return EffectSources;
}(Subject));
function effectsInstance(sourceInstance) {
    if (onIdentifyEffectsKey in sourceInstance &&
        typeof sourceInstance[onIdentifyEffectsKey] === 'function') {
        return sourceInstance[onIdentifyEffectsKey]();
    }
    return '';
}
function resolveEffectSource(sourceInstance) {
    var mergedEffects$ = mergeEffects(sourceInstance);
    if (isOnRunEffects(sourceInstance)) {
        return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
}
function isOnRunEffects(sourceInstance) {
    var source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}

var IMMEDIATE_EFFECTS = new InjectionToken('ngrx/effects: Immediate Effects');
var ROOT_EFFECTS = new InjectionToken('ngrx/effects: Root Effects');
var FEATURE_EFFECTS = new InjectionToken('ngrx/effects: Feature Effects');

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
    EffectsRunner = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [EffectSources,
            Store])
    ], EffectsRunner);
    return EffectsRunner;
}());

var ROOT_EFFECTS_INIT = '@ngrx/effects/init';
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
    EffectsRootModule = __decorate([
        NgModule({}),
        __param(3, Inject(ROOT_EFFECTS)),
        __param(4, Optional()),
        __param(5, Optional()),
        __metadata("design:paramtypes", [EffectSources,
            EffectsRunner,
            Store, Array, StoreRootModule,
            StoreFeatureModule])
    ], EffectsRootModule);
    return EffectsRootModule;
}());

var EffectsFeatureModule = /** @class */ (function () {
    function EffectsFeatureModule(root, effectSourceGroups, storeRootModule, storeFeatureModule) {
        effectSourceGroups.forEach(function (group) {
            return group.forEach(function (effectSourceInstance) {
                return root.addEffects(effectSourceInstance);
            });
        });
    }
    EffectsFeatureModule = __decorate([
        NgModule({}),
        __param(1, Inject(FEATURE_EFFECTS)),
        __param(2, Optional()),
        __param(3, Optional()),
        __metadata("design:paramtypes", [EffectsRootModule, Array, StoreRootModule,
            StoreFeatureModule])
    ], EffectsFeatureModule);
    return EffectsFeatureModule;
}());

var EffectsModule = /** @class */ (function () {
    function EffectsModule() {
    }
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
    EffectsModule.forRoot = function (rootEffects) {
        return {
            ngModule: EffectsRootModule,
            providers: [
                EffectsRunner,
                EffectSources,
                Actions,
                rootEffects,
                {
                    provide: ROOT_EFFECTS,
                    deps: rootEffects,
                    useFactory: createSourceInstances,
                },
            ],
        };
    };
    EffectsModule = __decorate([
        NgModule({})
    ], EffectsModule);
    return EffectsModule;
}());
function createSourceInstances() {
    var instances = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        instances[_i] = arguments[_i];
    }
    return instances;
}

function mapToAction(
/** Allow to take either config object or project/error functions */
configOrProject, errorFn) {
    var _a = typeof configOrProject === 'function'
        ? {
            project: configOrProject,
            error: errorFn,
            operator: concatMap,
            complete: undefined,
            unsubscribe: undefined,
        }
        : __assign({}, configOrProject, { operator: configOrProject.operator || concatMap }), project = _a.project, error = _a.error, complete = _a.complete, operator = _a.operator, unsubscribe = _a.unsubscribe;
    return function (source) {
        return defer(function () {
            var subject = new Subject();
            return merge(source.pipe(operator(function (input, index) {
                return defer(function () {
                    var completed = false;
                    var errored = false;
                    var projectedCount = 0;
                    return project(input, index).pipe(materialize(), map(function (notification) {
                        switch (notification.kind) {
                            case NotificationKind.ERROR:
                                errored = true;
                                return new Notification(NotificationKind.NEXT, error(notification.error, input));
                            case NotificationKind.COMPLETE:
                                completed = true;
                                return complete
                                    ? new Notification(NotificationKind.NEXT, complete(projectedCount, input))
                                    : undefined;
                            default:
                                ++projectedCount;
                                return notification;
                        }
                    }), filter(function (n) { return n != null; }), dematerialize(), finalize(function () {
                        if (!completed && !errored && unsubscribe) {
                            subject.next(unsubscribe(projectedCount, input));
                        }
                    }));
                });
            })), subject);
        });
    };
}

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EffectsFeatureModule as ɵngrx_modules_effects_effects_c, createSourceInstances as ɵngrx_modules_effects_effects_a, EffectsRootModule as ɵngrx_modules_effects_effects_b, EffectsRunner as ɵngrx_modules_effects_effects_f, FEATURE_EFFECTS as ɵngrx_modules_effects_effects_e, ROOT_EFFECTS as ɵngrx_modules_effects_effects_d, createEffect, Effect, getEffectsMetadata, mergeEffects, Actions, ofType, EffectsModule, EffectSources, ROOT_EFFECTS_INIT, mapToAction };
//# sourceMappingURL=effects.js.map
