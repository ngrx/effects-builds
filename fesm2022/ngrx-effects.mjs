// src/models.mjs
var DEFAULT_EFFECT_CONFIG = {
  dispatch: true,
  functional: false,
  useEffectsErrorHandler: true
};
var CREATE_EFFECT_METADATA_KEY = "__@ngrx/effects_create__";

// src/effect_creator.mjs
function createEffect(source, config = {}) {
  const effect = config.functional ? source : source();
  const value = {
    ...DEFAULT_EFFECT_CONFIG,
    ...config
    // Overrides any defaults if values are provided
  };
  Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
    value
  });
  return effect;
}
function getCreateEffectMetadata(instance) {
  const propertyNames = Object.getOwnPropertyNames(instance);
  const metadata = propertyNames.filter((propertyName) => {
    if (instance[propertyName] && instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY)) {
      const property = instance[propertyName];
      return property[CREATE_EFFECT_METADATA_KEY].hasOwnProperty("dispatch");
    }
    return false;
  }).map((propertyName) => {
    const metaData = instance[propertyName][CREATE_EFFECT_METADATA_KEY];
    return {
      propertyName,
      ...metaData
    };
  });
  return metadata;
}

// src/effects_metadata.mjs
function getEffectsMetadata(instance) {
  return getSourceMetadata(instance).reduce((acc, { propertyName, dispatch, useEffectsErrorHandler }) => {
    acc[propertyName] = { dispatch, useEffectsErrorHandler };
    return acc;
  }, {});
}
function getSourceMetadata(instance) {
  return getCreateEffectMetadata(instance);
}

// src/utils.mjs
import { InjectionToken } from "@angular/core";
function getSourceForInstance(instance) {
  return Object.getPrototypeOf(instance);
}
function isClassInstance(obj) {
  return !!obj.constructor && obj.constructor.name !== "Object" && obj.constructor.name !== "Function";
}
function isClass(classOrRecord) {
  return typeof classOrRecord === "function";
}
function getClasses(classesAndRecords) {
  return classesAndRecords.filter(isClass);
}
function isToken(tokenOrRecord) {
  return tokenOrRecord instanceof InjectionToken || isClass(tokenOrRecord);
}

// src/effects_resolver.mjs
import { merge } from "rxjs";
import { ignoreElements, map, materialize } from "rxjs/operators";
function mergeEffects(sourceInstance, globalErrorHandler, effectsErrorHandler) {
  const source = getSourceForInstance(sourceInstance);
  const isClassBasedEffect = !!source && source.constructor.name !== "Object";
  const sourceName = isClassBasedEffect ? source.constructor.name : null;
  const observables$ = getSourceMetadata(sourceInstance).map(({ propertyName, dispatch, useEffectsErrorHandler }) => {
    const observable$ = typeof sourceInstance[propertyName] === "function" ? sourceInstance[propertyName]() : sourceInstance[propertyName];
    const effectAction$ = useEffectsErrorHandler ? effectsErrorHandler(observable$, globalErrorHandler) : observable$;
    if (dispatch === false) {
      return effectAction$.pipe(ignoreElements());
    }
    const materialized$ = effectAction$.pipe(materialize());
    return materialized$.pipe(map((notification) => ({
      effect: sourceInstance[propertyName],
      notification,
      propertyName,
      sourceName,
      sourceInstance
    })));
  });
  return merge(...observables$);
}

// src/effects_error_handler.mjs
import { catchError } from "rxjs/operators";
var MAX_NUMBER_OF_RETRY_ATTEMPTS = 10;
function defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft = MAX_NUMBER_OF_RETRY_ATTEMPTS) {
  return observable$.pipe(catchError((error) => {
    if (errorHandler)
      errorHandler.handleError(error);
    if (retryAttemptLeft <= 1) {
      return observable$;
    }
    return defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft - 1);
  }));
}

// src/actions.mjs
import { Inject, Injectable } from "@angular/core";
import { ScannedActionsSubject } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
var Actions = class _Actions extends Observable {
  constructor(source) {
    super();
    if (source) {
      this.source = source;
    }
  }
  lift(operator) {
    const observable = new _Actions();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i0, type: _Actions, deps: [{ token: ScannedActionsSubject }], target: i0.ɵɵFactoryTarget.Injectable });
  }
  static {
    this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i0, type: _Actions, providedIn: "root" });
  }
};
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i0, type: Actions, decorators: [{
  type: Injectable,
  args: [{ providedIn: "root" }]
}], ctorParameters: () => [{ type: i1.Observable, decorators: [{
  type: Inject,
  args: [ScannedActionsSubject]
}] }] });
function ofType(...allowedTypes) {
  return filter((action) => allowedTypes.some((typeOrActionCreator) => {
    if (typeof typeOrActionCreator === "string") {
      return typeOrActionCreator === action.type;
    }
    return typeOrActionCreator.type === action.type;
  }));
}

// src/tokens.mjs
import { InjectionToken as InjectionToken2 } from "@angular/core";
var _ROOT_EFFECTS_GUARD = new InjectionToken2("@ngrx/effects Internal Root Guard");
var USER_PROVIDED_EFFECTS = new InjectionToken2("@ngrx/effects User Provided Effects");
var _ROOT_EFFECTS = new InjectionToken2("@ngrx/effects Internal Root Effects");
var _ROOT_EFFECTS_INSTANCES = new InjectionToken2("@ngrx/effects Internal Root Effects Instances");
var _FEATURE_EFFECTS = new InjectionToken2("@ngrx/effects Internal Feature Effects");
var _FEATURE_EFFECTS_INSTANCE_GROUPS = new InjectionToken2("@ngrx/effects Internal Feature Effects Instance Groups");
var EFFECTS_ERROR_HANDLER = new InjectionToken2("@ngrx/effects Effects Error Handler", { providedIn: "root", factory: () => defaultEffectsErrorHandler });

// src/effects_actions.mjs
import { createAction } from "@ngrx/store";
var ROOT_EFFECTS_INIT = "@ngrx/effects/init";
var rootEffectsInit = createAction(ROOT_EFFECTS_INIT);

// src/effect_notification.mjs
function reportInvalidActions(output, reporter) {
  if (output.notification.kind === "N") {
    const action = output.notification.value;
    const isInvalidAction = !isAction(action);
    if (isInvalidAction) {
      reporter.handleError(new Error(`Effect ${getEffectName(output)} dispatched an invalid action: ${stringify(action)}`));
    }
  }
}
function isAction(action) {
  return typeof action !== "function" && action && action.type && typeof action.type === "string";
}
function getEffectName({ propertyName, sourceInstance, sourceName }) {
  const isMethod = typeof sourceInstance[propertyName] === "function";
  const isClassBasedEffect = !!sourceName;
  return isClassBasedEffect ? `"${sourceName}.${String(propertyName)}${isMethod ? "()" : ""}"` : `"${String(propertyName)}()"`;
}
function stringify(action) {
  try {
    return JSON.stringify(action);
  } catch {
    return action;
  }
}

// src/lifecycle_hooks.mjs
var onIdentifyEffectsKey = "ngrxOnIdentifyEffects";
function isOnIdentifyEffects(instance) {
  return isFunction(instance, onIdentifyEffectsKey);
}
var onRunEffectsKey = "ngrxOnRunEffects";
function isOnRunEffects(instance) {
  return isFunction(instance, onRunEffectsKey);
}
var onInitEffects = "ngrxOnInitEffects";
function isOnInitEffects(instance) {
  return isFunction(instance, onInitEffects);
}
function isFunction(instance, functionName) {
  return instance && functionName in instance && typeof instance[functionName] === "function";
}

// src/effect_sources.mjs
import { Inject as Inject2, Injectable as Injectable2 } from "@angular/core";
import { Subject, merge as merge2 } from "rxjs";
import { dematerialize, exhaustMap, filter as filter2, groupBy, map as map2, mergeMap, take } from "rxjs/operators";
import * as i02 from "@angular/core";
var EffectSources = class _EffectSources extends Subject {
  constructor(errorHandler, effectsErrorHandler) {
    super();
    this.errorHandler = errorHandler;
    this.effectsErrorHandler = effectsErrorHandler;
  }
  addEffects(effectSourceInstance) {
    this.next(effectSourceInstance);
  }
  /**
   * @internal
   */
  toActions() {
    return this.pipe(groupBy((effectsInstance2) => isClassInstance(effectsInstance2) ? getSourceForInstance(effectsInstance2) : effectsInstance2), mergeMap((source$) => {
      return source$.pipe(groupBy(effectsInstance));
    }), mergeMap((source$) => {
      const effect$ = source$.pipe(exhaustMap((sourceInstance) => {
        return resolveEffectSource(this.errorHandler, this.effectsErrorHandler)(sourceInstance);
      }), map2((output) => {
        reportInvalidActions(output, this.errorHandler);
        return output.notification;
      }), filter2((notification) => notification.kind === "N" && notification.value != null), dematerialize());
      const init$ = source$.pipe(take(1), filter2(isOnInitEffects), map2((instance) => instance.ngrxOnInitEffects()));
      return merge2(effect$, init$);
    }));
  }
  static {
    this.ɵfac = i02.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i02, type: _EffectSources, deps: [{ token: i02.ErrorHandler }, { token: EFFECTS_ERROR_HANDLER }], target: i02.ɵɵFactoryTarget.Injectable });
  }
  static {
    this.ɵprov = i02.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i02, type: _EffectSources, providedIn: "root" });
  }
};
i02.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i02, type: EffectSources, decorators: [{
  type: Injectable2,
  args: [{ providedIn: "root" }]
}], ctorParameters: () => [{ type: i02.ErrorHandler }, { type: void 0, decorators: [{
  type: Inject2,
  args: [EFFECTS_ERROR_HANDLER]
}] }] });
function effectsInstance(sourceInstance) {
  if (isOnIdentifyEffects(sourceInstance)) {
    return sourceInstance.ngrxOnIdentifyEffects();
  }
  return "";
}
function resolveEffectSource(errorHandler, effectsErrorHandler) {
  return (sourceInstance) => {
    const mergedEffects$ = mergeEffects(sourceInstance, errorHandler, effectsErrorHandler);
    if (isOnRunEffects(sourceInstance)) {
      return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
  };
}

// src/effects_runner.mjs
import { Injectable as Injectable3 } from "@angular/core";
import * as i03 from "@angular/core";
import * as i2 from "@ngrx/store";
var EffectsRunner = class _EffectsRunner {
  get isStarted() {
    return !!this.effectsSubscription;
  }
  constructor(effectSources, store) {
    this.effectSources = effectSources;
    this.store = store;
    this.effectsSubscription = null;
  }
  start() {
    if (!this.effectsSubscription) {
      this.effectsSubscription = this.effectSources.toActions().subscribe(this.store);
    }
  }
  ngOnDestroy() {
    if (this.effectsSubscription) {
      this.effectsSubscription.unsubscribe();
      this.effectsSubscription = null;
    }
  }
  static {
    this.ɵfac = i03.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i03, type: _EffectsRunner, deps: [{ token: EffectSources }, { token: i2.Store }], target: i03.ɵɵFactoryTarget.Injectable });
  }
  static {
    this.ɵprov = i03.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i03, type: _EffectsRunner, providedIn: "root" });
  }
};
i03.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i03, type: EffectsRunner, decorators: [{
  type: Injectable3,
  args: [{ providedIn: "root" }]
}], ctorParameters: () => [{ type: EffectSources }, { type: i2.Store }] });

// src/effects_root_module.mjs
import { NgModule, Inject as Inject3, Optional } from "@angular/core";
import * as i04 from "@angular/core";
import * as i3 from "@ngrx/store";
var EffectsRootModule = class _EffectsRootModule {
  constructor(sources, runner, store, rootEffectsInstances, storeRootModule, storeFeatureModule, guard) {
    this.sources = sources;
    runner.start();
    for (const effectsInstance2 of rootEffectsInstances) {
      sources.addEffects(effectsInstance2);
    }
    store.dispatch({ type: ROOT_EFFECTS_INIT });
  }
  addEffects(effectsInstance2) {
    this.sources.addEffects(effectsInstance2);
  }
  static {
    this.ɵfac = i04.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i04, type: _EffectsRootModule, deps: [{ token: EffectSources }, { token: EffectsRunner }, { token: i3.Store }, { token: _ROOT_EFFECTS_INSTANCES }, { token: i3.StoreRootModule, optional: true }, { token: i3.StoreFeatureModule, optional: true }, { token: _ROOT_EFFECTS_GUARD, optional: true }], target: i04.ɵɵFactoryTarget.NgModule });
  }
  static {
    this.ɵmod = i04.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.0-next.6", ngImport: i04, type: _EffectsRootModule });
  }
  static {
    this.ɵinj = i04.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i04, type: _EffectsRootModule });
  }
};
i04.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i04, type: EffectsRootModule, decorators: [{
  type: NgModule,
  args: [{}]
}], ctorParameters: () => [{ type: EffectSources }, { type: EffectsRunner }, { type: i3.Store }, { type: void 0, decorators: [{
  type: Inject3,
  args: [_ROOT_EFFECTS_INSTANCES]
}] }, { type: i3.StoreRootModule, decorators: [{
  type: Optional
}] }, { type: i3.StoreFeatureModule, decorators: [{
  type: Optional
}] }, { type: void 0, decorators: [{
  type: Optional
}, {
  type: Inject3,
  args: [_ROOT_EFFECTS_GUARD]
}] }] });

// src/effects_feature_module.mjs
import { NgModule as NgModule2, Inject as Inject4, Optional as Optional2 } from "@angular/core";
import * as i05 from "@angular/core";
import * as i22 from "@ngrx/store";
var EffectsFeatureModule = class _EffectsFeatureModule {
  constructor(effectsRootModule, effectsInstanceGroups, storeRootModule, storeFeatureModule) {
    const effectsInstances = effectsInstanceGroups.flat();
    for (const effectsInstance2 of effectsInstances) {
      effectsRootModule.addEffects(effectsInstance2);
    }
  }
  static {
    this.ɵfac = i05.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i05, type: _EffectsFeatureModule, deps: [{ token: EffectsRootModule }, { token: _FEATURE_EFFECTS_INSTANCE_GROUPS }, { token: i22.StoreRootModule, optional: true }, { token: i22.StoreFeatureModule, optional: true }], target: i05.ɵɵFactoryTarget.NgModule });
  }
  static {
    this.ɵmod = i05.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.0-next.6", ngImport: i05, type: _EffectsFeatureModule });
  }
  static {
    this.ɵinj = i05.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i05, type: _EffectsFeatureModule });
  }
};
i05.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i05, type: EffectsFeatureModule, decorators: [{
  type: NgModule2,
  args: [{}]
}], ctorParameters: () => [{ type: EffectsRootModule }, { type: void 0, decorators: [{
  type: Inject4,
  args: [_FEATURE_EFFECTS_INSTANCE_GROUPS]
}] }, { type: i22.StoreRootModule, decorators: [{
  type: Optional2
}] }, { type: i22.StoreFeatureModule, decorators: [{
  type: Optional2
}] }] });

// src/effects_module.mjs
import { inject, NgModule as NgModule3 } from "@angular/core";
import * as i06 from "@angular/core";
var EffectsModule = class _EffectsModule {
  static forFeature(...featureEffects) {
    const effects = featureEffects.flat();
    const effectsClasses = getClasses(effects);
    return {
      ngModule: EffectsFeatureModule,
      providers: [
        effectsClasses,
        {
          provide: _FEATURE_EFFECTS,
          multi: true,
          useValue: effects
        },
        {
          provide: USER_PROVIDED_EFFECTS,
          multi: true,
          useValue: []
        },
        {
          provide: _FEATURE_EFFECTS_INSTANCE_GROUPS,
          multi: true,
          useFactory: createEffectsInstances,
          deps: [_FEATURE_EFFECTS, USER_PROVIDED_EFFECTS]
        }
      ]
    };
  }
  static forRoot(...rootEffects) {
    const effects = rootEffects.flat();
    const effectsClasses = getClasses(effects);
    return {
      ngModule: EffectsRootModule,
      providers: [
        effectsClasses,
        {
          provide: _ROOT_EFFECTS,
          useValue: [effects]
        },
        {
          provide: _ROOT_EFFECTS_GUARD,
          useFactory: _provideForRootGuard
        },
        {
          provide: USER_PROVIDED_EFFECTS,
          multi: true,
          useValue: []
        },
        {
          provide: _ROOT_EFFECTS_INSTANCES,
          useFactory: createEffectsInstances,
          deps: [_ROOT_EFFECTS, USER_PROVIDED_EFFECTS]
        }
      ]
    };
  }
  static {
    this.ɵfac = i06.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i06, type: _EffectsModule, deps: [], target: i06.ɵɵFactoryTarget.NgModule });
  }
  static {
    this.ɵmod = i06.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.0-next.6", ngImport: i06, type: _EffectsModule });
  }
  static {
    this.ɵinj = i06.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i06, type: _EffectsModule });
  }
};
i06.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.6", ngImport: i06, type: EffectsModule, decorators: [{
  type: NgModule3,
  args: [{}]
}] });
function createEffectsInstances(effectsGroups, userProvidedEffectsGroups) {
  const effects = [];
  for (const effectsGroup of effectsGroups) {
    effects.push(...effectsGroup);
  }
  for (const userProvidedEffectsGroup of userProvidedEffectsGroups) {
    effects.push(...userProvidedEffectsGroup);
  }
  return effects.map((effectsTokenOrRecord) => isToken(effectsTokenOrRecord) ? inject(effectsTokenOrRecord) : effectsTokenOrRecord);
}
function _provideForRootGuard() {
  const runner = inject(EffectsRunner, { optional: true, skipSelf: true });
  const rootEffects = inject(_ROOT_EFFECTS, { self: true });
  const hasEffects = !(rootEffects.length === 1 && rootEffects[0].length === 0);
  if (hasEffects && runner) {
    throw new TypeError(`EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.`);
  }
  return "guarded";
}

// src/act.mjs
import { defer, merge as merge3, Subject as Subject2 } from "rxjs";
import { concatMap, dematerialize as dematerialize2, filter as filter3, finalize, map as map3, materialize as materialize2 } from "rxjs/operators";
function act(configOrProject, errorFn) {
  const { project, error, complete, operator, unsubscribe } = typeof configOrProject === "function" ? {
    project: configOrProject,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    error: errorFn,
    operator: concatMap,
    complete: void 0,
    unsubscribe: void 0
  } : { ...configOrProject, operator: configOrProject.operator || concatMap };
  return (source) => defer(() => {
    const subject = new Subject2();
    return merge3(source.pipe(operator((input, index) => defer(() => {
      let completed = false;
      let errored = false;
      let projectedCount = 0;
      return project(input, index).pipe(materialize2(), map3((notification) => {
        switch (notification.kind) {
          case "E":
            errored = true;
            return {
              kind: "N",
              value: error(notification.error, input)
            };
          case "C":
            completed = true;
            return complete ? {
              kind: "N",
              value: complete(projectedCount, input)
            } : void 0;
          default:
            ++projectedCount;
            return notification;
        }
      }), filter3((n) => n != null), dematerialize2(), finalize(() => {
        if (!completed && !errored && unsubscribe) {
          subject.next(unsubscribe(projectedCount, input));
        }
      }));
    }))), subject);
  });
}

// src/provide_effects.mjs
import { ENVIRONMENT_INITIALIZER, inject as inject2, makeEnvironmentProviders } from "@angular/core";
import { FEATURE_STATE_PROVIDER, ROOT_STORE_PROVIDER, Store as Store3 } from "@ngrx/store";
function provideEffects(...effects) {
  const effectsClassesAndRecords = effects.flat();
  const effectsClasses = getClasses(effectsClassesAndRecords);
  return makeEnvironmentProviders([
    effectsClasses,
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        inject2(ROOT_STORE_PROVIDER);
        inject2(FEATURE_STATE_PROVIDER, { optional: true });
        const effectsRunner = inject2(EffectsRunner);
        const effectSources = inject2(EffectSources);
        const shouldInitEffects = !effectsRunner.isStarted;
        if (shouldInitEffects) {
          effectsRunner.start();
        }
        for (const effectsClassOrRecord of effectsClassesAndRecords) {
          const effectsInstance2 = isClass(effectsClassOrRecord) ? inject2(effectsClassOrRecord) : effectsClassOrRecord;
          effectSources.addEffects(effectsInstance2);
        }
        if (shouldInitEffects) {
          const store = inject2(Store3);
          store.dispatch(rootEffectsInit());
        }
      }
    }
  ]);
}

// src/index.mjs
import * as operators from "@ngrx/operators";
var concatLatestFrom = operators.concatLatestFrom;
export {
  Actions,
  EFFECTS_ERROR_HANDLER,
  EffectSources,
  EffectsFeatureModule,
  EffectsModule,
  EffectsRootModule,
  EffectsRunner,
  ROOT_EFFECTS_INIT,
  USER_PROVIDED_EFFECTS,
  act,
  concatLatestFrom,
  createEffect,
  defaultEffectsErrorHandler,
  getEffectsMetadata,
  mergeEffects,
  ofType,
  provideEffects,
  rootEffectsInit
};
//# sourceMappingURL=ngrx-effects.mjs.map
