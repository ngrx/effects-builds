(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/observable/merge'), require('rxjs/operator/ignoreElements'), require('@angular/core'), require('@ngrx/store'), require('rxjs/Observable'), require('rxjs/operator/filter'), require('rxjs/Subscription')) :
	typeof define === 'function' && define.amd ? define(['exports', 'rxjs/observable/merge', 'rxjs/operator/ignoreElements', '@angular/core', '@ngrx/store', 'rxjs/Observable', 'rxjs/operator/filter', 'rxjs/Subscription'], factory) :
	(factory((global.ngrx = global.ngrx || {}, global.ngrx.effects = global.ngrx.effects || {}),global.Rx.Observable,global.Rx.Observable.prototype,global.ng.core,global.ngrx.store,global.Rx,global.Rx.Observable.prototype,global.Rx));
}(this, (function (exports,rxjs_observable_merge,rxjs_operator_ignoreElements,_angular_core,_ngrx_store,rxjs_Observable,rxjs_operator_filter,rxjs_Subscription) { 'use strict';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            return rxjs_operator_ignoreElements.ignoreElements.call(observable);
        }
        return observable;
    });
    return rxjs_observable_merge.merge.apply(void 0, observables);
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
        return rxjs_operator_filter.filter.call(this, function (_a) {
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
}(rxjs_Observable.Observable));
Actions.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
Actions.ctorParameters = function () { return [
    { type: rxjs_Observable.Observable, decorators: [{ type: _angular_core.Inject, args: [_ngrx_store.ScannedActionsSubject,] },] },
]; };
var effects = new _angular_core.OpaqueToken('ngrx/effects: Effects');
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
        var /** @type {?} */ merged = rxjs_observable_merge.merge.apply(void 0, sources);
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
}(rxjs_Subscription.Subscription));
EffectsSubscription.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
EffectsSubscription.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_ngrx_store.Store,] },] },
    { type: EffectsSubscription, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.SkipSelf },] },
    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [effects,] },] },
]; };
var afterBootstrapEffects = new _angular_core.OpaqueToken('ngrx:effects: Bootstrap Effects');
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
    { type: _angular_core.NgModule, args: [{
                providers: [
                    Actions,
                    EffectsSubscription,
                    {
                        provide: _angular_core.APP_BOOTSTRAP_LISTENER,
                        multi: true,
                        deps: [_angular_core.Injector, EffectsSubscription],
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

exports.Effect = Effect;
exports.mergeEffects = mergeEffects;
exports.Actions = Actions;
exports.EffectsModule = EffectsModule;
exports.EffectsSubscription = EffectsSubscription;
exports.toPayload = toPayload;
exports.runAfterBootstrapEffects = runAfterBootstrapEffects;
exports.ɵb = afterBootstrapEffects;
exports.ɵa = effects;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=effects.umd.js.map
