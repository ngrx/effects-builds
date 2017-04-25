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
import { merge } from 'rxjs/observable/merge';
import { ignoreElements } from 'rxjs/operator/ignoreElements';
import { APP_BOOTSTRAP_LISTENER, Inject, Injectable, Injector, NgModule, OpaqueToken, Optional, SkipSelf } from '@angular/core';
import { ScannedActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operator/filter';
import { Subscription } from 'rxjs/Subscription';
var METADATA_KEY = '@ngrx/effects';
/**
 * @param {?=} __0
 * @return {?}
 */
function Effect(_a) {
    var dispatch = (_a === void 0 ? { dispatch: true } : _a).dispatch;
    return function (target, propertyName) {
        if (!((Reflect)).hasOwnMetadata(METADATA_KEY, target)) {
            ((Reflect)).defineMetadata(METADATA_KEY, [], target);
        }
        var /** @type {?} */ effects = ((Reflect)).getOwnMetadata(METADATA_KEY, target);
        var /** @type {?} */ metadata = { propertyName: propertyName, dispatch: dispatch };
        ((Reflect)).defineMetadata(METADATA_KEY, effects.concat([metadata]), target);
    };
}
/**
 * @param {?} instance
 * @return {?}
 */
function getEffectsMetadata(instance) {
    var /** @type {?} */ target = Object.getPrototypeOf(instance);
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
    var /** @type {?} */ observables = getEffectsMetadata(instance).map(function (_a) {
        var propertyName = _a.propertyName, dispatch = _a.dispatch;
        var /** @type {?} */ observable = typeof instance[propertyName] === 'function' ?
            instance[propertyName]() : instance[propertyName];
        if (dispatch === false) {
            return ignoreElements.call(observable);
        }
        return observable;
    });
    return merge.apply(void 0, observables);
}
var Actions = (function (_super) {
    __extends(Actions, _super);
    /**
     * @param {?} actionsSubject
     */
    function Actions(actionsSubject) {
        var _this = _super.call(this) || this;
        _this.source = actionsSubject;
        return _this;
    }
    /**
     * @param {?} operator
     * @return {?}
     */
    Actions.prototype.lift = function (operator) {
        var /** @type {?} */ observable = new Actions(this);
        observable.operator = operator;
        return observable;
    };
    /**
     * @param {...?} keys
     * @return {?}
     */
    Actions.prototype.ofType = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return filter.call(this, function (_a) {
            var type = _a.type;
            var /** @type {?} */ len = keys.length;
            if (len === 1) {
                return type === keys[0];
            }
            else {
                for (var /** @type {?} */ i = 0; i < len; i++) {
                    if (keys[i] === type) {
                        return true;
                    }
                }
            }
            return false;
        });
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
var effects = new OpaqueToken('ngrx/effects: Effects');
var EffectsSubscription = (function (_super) {
    __extends(EffectsSubscription, _super);
    /**
     * @param {?} store
     * @param {?=} parent
     * @param {?=} effectInstances
     */
    function EffectsSubscription(store, parent, effectInstances) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.parent = parent;
        if (parent) {
            parent.add(_this);
        }
        if (typeof effectInstances !== 'undefined' && effectInstances) {
            _this.addEffects(effectInstances);
        }
        return _this;
    }
    /**
     * @param {?} effectInstances
     * @return {?}
     */
    EffectsSubscription.prototype.addEffects = function (effectInstances) {
        var /** @type {?} */ sources = effectInstances.map(mergeEffects);
        var /** @type {?} */ merged = merge.apply(void 0, sources);
        this.add(merged.subscribe(this.store));
    };
    /**
     * @return {?}
     */
    EffectsSubscription.prototype.ngOnDestroy = function () {
        if (!this.closed) {
            this.unsubscribe();
        }
    };
    return EffectsSubscription;
}(Subscription));
EffectsSubscription.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
EffectsSubscription.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [Store,] },] },
    { type: EffectsSubscription, decorators: [{ type: Optional }, { type: SkipSelf },] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [effects,] },] },
]; };
var afterBootstrapEffects = new OpaqueToken('ngrx:effects: Bootstrap Effects');
/**
 * @param {?} injector
 * @param {?} subscription
 * @return {?}
 */
function runAfterBootstrapEffects(injector, subscription) {
    return function () {
        var /** @type {?} */ effectInstances = injector.get(afterBootstrapEffects, false);
        if (effectInstances) {
            subscription.addEffects(effectInstances);
        }
    };
}
var EffectsModule = (function () {
    /**
     * @param {?} effectsSubscription
     */
    function EffectsModule(effectsSubscription) {
        this.effectsSubscription = effectsSubscription;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    EffectsModule.run = function (type) {
        return {
            ngModule: EffectsModule,
            providers: [
                EffectsSubscription,
                type,
                { provide: effects, useExisting: type, multi: true }
            ]
        };
    };
    /**
     * @param {?} type
     * @return {?}
     */
    EffectsModule.runAfterBootstrap = function (type) {
        return {
            ngModule: EffectsModule,
            providers: [
                type,
                { provide: afterBootstrapEffects, useExisting: type, multi: true }
            ]
        };
    };
    return EffectsModule;
}());
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
EffectsModule.ctorParameters = function () { return [
    { type: EffectsSubscription, },
]; };
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
export { Effect, mergeEffects, Actions, EffectsModule, EffectsSubscription, toPayload, runAfterBootstrapEffects, afterBootstrapEffects as ɵb, effects as ɵa };
//# sourceMappingURL=effects.es5.js.map
