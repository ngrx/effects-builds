(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('rxjs'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ngrx/effects', ['exports', '@ngrx/store', 'rxjs', 'rxjs/operators', '@angular/core'], factory) :
    (global = global || self, factory((global.ngrx = global.ngrx || {}, global.ngrx.effects = {}), global.store, global.rxjs, global.rxjs.operators, global.ng.core));
}(this, (function (exports, store, rxjs, operators, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: src/models.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Configures an effect created by `createEffect`.
     * @record
     */
    function EffectConfig() { }
    if (false) {
        /**
         * Determines if the action emitted by the effect is dispatched to the store.
         * If false, effect does not need to return type `Observable<Action>`.
         * @type {?|undefined}
         */
        EffectConfig.prototype.dispatch;
        /**
         * Determines if the effect will be resubscribed to if an error occurs in the main actions stream.
         * @type {?|undefined}
         */
        EffectConfig.prototype.useEffectsErrorHandler;
    }
    /** @type {?} */
    var DEFAULT_EFFECT_CONFIG = {
        dispatch: true,
        useEffectsErrorHandler: true,
    };
    /** @type {?} */
    var CREATE_EFFECT_METADATA_KEY = '__@ngrx/effects_create__';
    /**
     * @record
     */
    function CreateEffectMetadata() { }
    if (false) {
        /* Skipping unnamed member:
        [CREATE_EFFECT_METADATA_KEY]: EffectConfig;*/
    }
    /**
     * @record
     * @template T
     */
    function EffectMetadata() { }
    if (false) {
        /** @type {?} */
        EffectMetadata.prototype.propertyName;
    }

    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    /**
     * \@description
     * Creates an effect from an `Observable` and an `EffectConfig`.
     *
     * \@usageNotes
     *
     * ** Mapping to a different action **
     * ```ts
     * effectName$ = createEffect(
     *   () => this.actions$.pipe(
     *     ofType(FeatureActions.actionOne),
     *     map(() => FeatureActions.actionTwo())
     *   )
     * );
     * ```
     *
     *  ** Non-dispatching effects **
     * ```ts
     * effectName$ = createEffect(
     *   () => this.actions$.pipe(
     *     ofType(FeatureActions.actionOne),
     *     tap(() => console.log('Action One Dispatched'))
     *   ),
     *   { dispatch: false }
     *   // FeatureActions.actionOne is not dispatched
     * );
     * ```
     * @template C, DT, OT, R
     * @param {?} source A function which returns an `Observable`.
     * @param {?=} config A `Partial<EffectConfig>` to configure the effect.  By default, `dispatch` is true and `useEffectsErrorHandler` is true.
     * @return {?} If `EffectConfig`#`dispatch` is true, returns `Observable<Action>`.  Else, returns `Observable<unknown>`.
     *
     */
    function createEffect(source, config) {
        /** @type {?} */
        var effect = source();
        /** @type {?} */
        var value = __assign(__assign({}, DEFAULT_EFFECT_CONFIG), config);
        Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
            value: value,
        });
        return (/** @type {?} */ (effect));
    }
    /**
     * @template T
     * @param {?} instance
     * @return {?}
     */
    function getCreateEffectMetadata(instance) {
        /** @type {?} */
        var propertyNames = (/** @type {?} */ (Object.getOwnPropertyNames(instance)));
        /** @type {?} */
        var metadata = propertyNames
            .filter((/**
         * @param {?} propertyName
         * @return {?}
         */
        function (propertyName) {
            return instance[propertyName] &&
                instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY);
        }))
            .map((/**
         * @param {?} propertyName
         * @return {?}
         */
        function (propertyName) {
            /** @type {?} */
            var metaData = ((/** @type {?} */ (instance[propertyName])))[CREATE_EFFECT_METADATA_KEY];
            return __assign({ propertyName: propertyName }, metaData);
        }));
        return metadata;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} instance
     * @return {?}
     */
    function getSourceForInstance(instance) {
        return Object.getPrototypeOf(instance);
    }

    var __assign$1 = (this && this.__assign) || function () {
        __assign$1 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };
    /** @type {?} */
    var METADATA_KEY = '__@ngrx/effects__';
    /**
     * @param {?=} config
     * @return {?}
     */
    function Effect(config) {
        if (config === void 0) { config = {}; }
        return (/**
         * @template T, K
         * @param {?} target
         * @param {?} propertyName
         * @return {?}
         */
        function (target, propertyName) {
            /** @type {?} */
            var metadata = __assign$1(__assign$1(__assign$1({}, DEFAULT_EFFECT_CONFIG), config), { // Overrides any defaults if values are provided
                propertyName: propertyName });
            addEffectMetadataEntry(target, metadata);
        });
    }
    /**
     * @template T
     * @param {?} instance
     * @return {?}
     */
    function getEffectDecoratorMetadata(instance) {
        /** @type {?} */
        var effectsDecorators = store.compose(getEffectMetadataEntries, getSourceForInstance)(instance);
        return effectsDecorators;
    }
    /**
     * Type guard to detemine whether METADATA_KEY is already present on the Class
     * constructor
     * @template T
     * @param {?} sourceProto
     * @return {?}
     */
    function hasMetadataEntries(sourceProto) {
        return sourceProto.constructor.hasOwnProperty(METADATA_KEY);
    }
    /**
     * Add Effect Metadata to the Effect Class constructor under specific key
     * @template T
     * @param {?} sourceProto
     * @param {?} metadata
     * @return {?}
     */
    function addEffectMetadataEntry(sourceProto, metadata) {
        if (hasMetadataEntries(sourceProto)) {
            sourceProto.constructor[METADATA_KEY].push(metadata);
        }
        else {
            Object.defineProperty(sourceProto.constructor, METADATA_KEY, {
                value: [metadata],
            });
        }
    }
    /**
     * @template T
     * @param {?} sourceProto
     * @return {?}
     */
    function getEffectMetadataEntries(sourceProto) {
        return hasMetadataEntries(sourceProto)
            ? sourceProto.constructor[METADATA_KEY]
            : [];
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/effects_metadata.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} instance
     * @return {?}
     */
    function getEffectsMetadata(instance) {
        return getSourceMetadata(instance).reduce((/**
         * @param {?} acc
         * @param {?} __1
         * @return {?}
         */
        function (acc, _a) {
            var propertyName = _a.propertyName, dispatch = _a.dispatch, useEffectsErrorHandler = _a.useEffectsErrorHandler;
            acc[propertyName] = { dispatch: dispatch, useEffectsErrorHandler: useEffectsErrorHandler };
            return acc;
        }), {});
    }
    /**
     * @template T
     * @param {?} instance
     * @return {?}
     */
    function getSourceMetadata(instance) {
        /** @type {?} */
        var effects = [
            getEffectDecoratorMetadata,
            getCreateEffectMetadata,
        ];
        return effects.reduce((/**
         * @param {?} sources
         * @param {?} source
         * @return {?}
         */
        function (sources, source) { return sources.concat(source(instance)); }), []);
    }

    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    /**
     * @param {?} sourceInstance
     * @param {?} globalErrorHandler
     * @param {?} effectsErrorHandler
     * @return {?}
     */
    function mergeEffects(sourceInstance, globalErrorHandler, effectsErrorHandler) {
        /** @type {?} */
        var sourceName = getSourceForInstance(sourceInstance).constructor.name;
        /** @type {?} */
        var observables$ = getSourceMetadata(sourceInstance).map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var propertyName = _a.propertyName, dispatch = _a.dispatch, useEffectsErrorHandler = _a.useEffectsErrorHandler;
            /** @type {?} */
            var observable$ = typeof sourceInstance[propertyName] === 'function'
                ? sourceInstance[propertyName]()
                : sourceInstance[propertyName];
            /** @type {?} */
            var effectAction$ = useEffectsErrorHandler
                ? effectsErrorHandler(observable$, globalErrorHandler)
                : observable$;
            if (dispatch === false) {
                return effectAction$.pipe(operators.ignoreElements());
            }
            /** @type {?} */
            var materialized$ = effectAction$.pipe(operators.materialize());
            return materialized$.pipe(operators.map((/**
             * @param {?} notification
             * @return {?}
             */
            function (notification) { return ({
                effect: sourceInstance[propertyName],
                notification: notification,
                propertyName: propertyName,
                sourceName: sourceName,
                sourceInstance: sourceInstance,
            }); })));
        }));
        return rxjs.merge.apply(void 0, __spread(observables$));
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/effects_error_handler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAX_NUMBER_OF_RETRY_ATTEMPTS = 10;
    /**
     * @template T
     * @param {?} observable$
     * @param {?} errorHandler
     * @param {?=} retryAttemptLeft
     * @return {?}
     */
    function defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft) {
        if (retryAttemptLeft === void 0) { retryAttemptLeft = MAX_NUMBER_OF_RETRY_ATTEMPTS; }
        return observable$.pipe(operators.catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (errorHandler)
                errorHandler.handleError(error);
            if (retryAttemptLeft <= 1) {
                return observable$; // last attempt
            }
            // Return observable that produces this particular effect
            return defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft - 1);
        })));
    }

    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /**
     * @template V
     */
    var Actions = /** @class */ (function (_super) {
        __extends(Actions, _super);
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
        Actions.prototype.lift = /**
         * @template R
         * @param {?} operator
         * @return {?}
         */
        function (operator) {
            /** @type {?} */
            var observable = new Actions();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        Actions.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        Actions.ctorParameters = function () { return [
            { type: rxjs.Observable, decorators: [{ type: core.Inject, args: [store.ScannedActionsSubject,] }] }
        ]; };
        return Actions;
    }(rxjs.Observable));
    /**
     * @param {...?} allowedTypes
     * @return {?}
     */
    function ofType() {
        var allowedTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            allowedTypes[_i] = arguments[_i];
        }
        return operators.filter((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return allowedTypes.some((/**
             * @param {?} typeOrActionCreator
             * @return {?}
             */
            function (typeOrActionCreator) {
                if (typeof typeOrActionCreator === 'string') {
                    // Comparing the string to type
                    return typeOrActionCreator === action.type;
                }
                // We are filtering by ActionCreator
                return typeOrActionCreator.type === action.type;
            }));
        }));
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/effect_notification.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function EffectNotification() { }
    if (false) {
        /** @type {?} */
        EffectNotification.prototype.effect;
        /** @type {?} */
        EffectNotification.prototype.propertyName;
        /** @type {?} */
        EffectNotification.prototype.sourceName;
        /** @type {?} */
        EffectNotification.prototype.sourceInstance;
        /** @type {?} */
        EffectNotification.prototype.notification;
    }
    /**
     * @param {?} output
     * @param {?} reporter
     * @return {?}
     */
    function reportInvalidActions(output, reporter) {
        if (output.notification.kind === 'N') {
            /** @type {?} */
            var action = output.notification.value;
            /** @type {?} */
            var isInvalidAction = !isAction(action);
            if (isInvalidAction) {
                reporter.handleError(new Error("Effect " + getEffectName(output) + " dispatched an invalid action: " + stringify(action)));
            }
        }
    }
    /**
     * @param {?} action
     * @return {?}
     */
    function isAction(action) {
        return (typeof action !== 'function' &&
            action &&
            action.type &&
            typeof action.type === 'string');
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    function getEffectName(_a) {
        var propertyName = _a.propertyName, sourceInstance = _a.sourceInstance, sourceName = _a.sourceName;
        /** @type {?} */
        var isMethod = typeof sourceInstance[propertyName] === 'function';
        return "\"" + sourceName + "." + String(propertyName) + (isMethod ? '()' : '') + "\"";
    }
    /**
     * @param {?} action
     * @return {?}
     */
    function stringify(action) {
        try {
            return JSON.stringify(action);
        }
        catch (_a) {
            return action;
        }
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/lifecycle_hooks.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var onIdentifyEffectsKey = 'ngrxOnIdentifyEffects';
    /**
     * @param {?} instance
     * @return {?}
     */
    function isOnIdentifyEffects(instance) {
        return isFunction(instance, onIdentifyEffectsKey);
    }
    /** @type {?} */
    var onRunEffectsKey = 'ngrxOnRunEffects';
    /**
     * @param {?} instance
     * @return {?}
     */
    function isOnRunEffects(instance) {
        return isFunction(instance, onRunEffectsKey);
    }
    /** @type {?} */
    var onInitEffects = 'ngrxOnInitEffects';
    /**
     * @param {?} instance
     * @return {?}
     */
    function isOnInitEffects(instance) {
        return isFunction(instance, onInitEffects);
    }
    /**
     * @param {?} instance
     * @param {?} functionName
     * @return {?}
     */
    function isFunction(instance, functionName) {
        return (instance &&
            functionName in instance &&
            typeof instance[functionName] === 'function');
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/tokens.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var _ROOT_EFFECTS_GUARD = new core.InjectionToken('@ngrx/effects Internal Root Guard');
    /** @type {?} */
    var IMMEDIATE_EFFECTS = new core.InjectionToken('ngrx/effects: Immediate Effects');
    /** @type {?} */
    var USER_PROVIDED_EFFECTS = new core.InjectionToken('ngrx/effects: User Provided Effects');
    /** @type {?} */
    var _ROOT_EFFECTS = new core.InjectionToken('ngrx/effects: Internal Root Effects');
    /** @type {?} */
    var ROOT_EFFECTS = new core.InjectionToken('ngrx/effects: Root Effects');
    /** @type {?} */
    var _FEATURE_EFFECTS = new core.InjectionToken('ngrx/effects: Internal Feature Effects');
    /** @type {?} */
    var FEATURE_EFFECTS = new core.InjectionToken('ngrx/effects: Feature Effects');
    /** @type {?} */
    var EFFECTS_ERROR_HANDLER = new core.InjectionToken('ngrx/effects: Effects Error Handler');

    var __extends$1 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var EffectSources = /** @class */ (function (_super) {
        __extends$1(EffectSources, _super);
        function EffectSources(errorHandler, effectsErrorHandler) {
            var _this = _super.call(this) || this;
            _this.errorHandler = errorHandler;
            _this.effectsErrorHandler = effectsErrorHandler;
            return _this;
        }
        /**
         * @param {?} effectSourceInstance
         * @return {?}
         */
        EffectSources.prototype.addEffects = /**
         * @param {?} effectSourceInstance
         * @return {?}
         */
        function (effectSourceInstance) {
            this.next(effectSourceInstance);
        };
        /**
         * @internal
         */
        /**
         * \@internal
         * @return {?}
         */
        EffectSources.prototype.toActions = /**
         * \@internal
         * @return {?}
         */
        function () {
            var _this = this;
            return this.pipe(operators.groupBy(getSourceForInstance), operators.mergeMap((/**
             * @param {?} source$
             * @return {?}
             */
            function (source$) {
                return source$.pipe(operators.groupBy(effectsInstance));
            })), operators.mergeMap((/**
             * @param {?} source$
             * @return {?}
             */
            function (source$) {
                /** @type {?} */
                var effect$ = source$.pipe(operators.exhaustMap((/**
                 * @param {?} sourceInstance
                 * @return {?}
                 */
                function (sourceInstance) {
                    return resolveEffectSource(_this.errorHandler, _this.effectsErrorHandler)(sourceInstance);
                })), operators.map((/**
                 * @param {?} output
                 * @return {?}
                 */
                function (output) {
                    reportInvalidActions(output, _this.errorHandler);
                    return output.notification;
                })), operators.filter((/**
                 * @param {?} notification
                 * @return {?}
                 */
                function (notification) {
                    return notification.kind === 'N';
                })), operators.dematerialize());
                // start the stream with an INIT action
                // do this only for the first Effect instance
                /** @type {?} */
                var init$ = source$.pipe(operators.take(1), operators.filter(isOnInitEffects), operators.map((/**
                 * @param {?} instance
                 * @return {?}
                 */
                function (instance) { return instance.ngrxOnInitEffects(); })));
                return rxjs.merge(effect$, init$);
            })));
        };
        EffectSources.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        EffectSources.ctorParameters = function () { return [
            { type: core.ErrorHandler },
            { type: undefined, decorators: [{ type: core.Inject, args: [EFFECTS_ERROR_HANDLER,] }] }
        ]; };
        return EffectSources;
    }(rxjs.Subject));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        EffectSources.prototype.errorHandler;
        /**
         * @type {?}
         * @private
         */
        EffectSources.prototype.effectsErrorHandler;
    }
    /**
     * @param {?} sourceInstance
     * @return {?}
     */
    function effectsInstance(sourceInstance) {
        if (isOnIdentifyEffects(sourceInstance)) {
            return sourceInstance.ngrxOnIdentifyEffects();
        }
        return '';
    }
    /**
     * @param {?} errorHandler
     * @param {?} effectsErrorHandler
     * @return {?}
     */
    function resolveEffectSource(errorHandler, effectsErrorHandler) {
        return (/**
         * @param {?} sourceInstance
         * @return {?}
         */
        function (sourceInstance) {
            /** @type {?} */
            var mergedEffects$ = mergeEffects(sourceInstance, errorHandler, effectsErrorHandler);
            if (isOnRunEffects(sourceInstance)) {
                return sourceInstance.ngrxOnRunEffects(mergedEffects$);
            }
            return mergedEffects$;
        });
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/effects_runner.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EffectsRunner = /** @class */ (function () {
        function EffectsRunner(effectSources, store) {
            this.effectSources = effectSources;
            this.store = store;
            this.effectsSubscription = null;
        }
        /**
         * @return {?}
         */
        EffectsRunner.prototype.start = /**
         * @return {?}
         */
        function () {
            if (!this.effectsSubscription) {
                this.effectsSubscription = this.effectSources
                    .toActions()
                    .subscribe(this.store);
            }
        };
        /**
         * @return {?}
         */
        EffectsRunner.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.effectsSubscription) {
                this.effectsSubscription.unsubscribe();
                this.effectsSubscription = null;
            }
        };
        EffectsRunner.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        EffectsRunner.ctorParameters = function () { return [
            { type: EffectSources },
            { type: store.Store }
        ]; };
        return EffectsRunner;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        EffectsRunner.prototype.effectsSubscription;
        /**
         * @type {?}
         * @private
         */
        EffectsRunner.prototype.effectSources;
        /**
         * @type {?}
         * @private
         */
        EffectsRunner.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/effects_root_module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ROOT_EFFECTS_INIT = '@ngrx/effects/init';
    /** @type {?} */
    var rootEffectsInit = store.createAction(ROOT_EFFECTS_INIT);
    var EffectsRootModule = /** @class */ (function () {
        function EffectsRootModule(sources, runner, store, rootEffects, storeRootModule, storeFeatureModule, guard) {
            this.sources = sources;
            runner.start();
            rootEffects.forEach((/**
             * @param {?} effectSourceInstance
             * @return {?}
             */
            function (effectSourceInstance) {
                return sources.addEffects(effectSourceInstance);
            }));
            store.dispatch({ type: ROOT_EFFECTS_INIT });
        }
        /**
         * @param {?} effectSourceInstance
         * @return {?}
         */
        EffectsRootModule.prototype.addEffects = /**
         * @param {?} effectSourceInstance
         * @return {?}
         */
        function (effectSourceInstance) {
            this.sources.addEffects(effectSourceInstance);
        };
        EffectsRootModule.decorators = [
            { type: core.NgModule, args: [{},] },
        ];
        /** @nocollapse */
        EffectsRootModule.ctorParameters = function () { return [
            { type: EffectSources },
            { type: EffectsRunner },
            { type: store.Store },
            { type: Array, decorators: [{ type: core.Inject, args: [ROOT_EFFECTS,] }] },
            { type: store.StoreRootModule, decorators: [{ type: core.Optional }] },
            { type: store.StoreFeatureModule, decorators: [{ type: core.Optional }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [_ROOT_EFFECTS_GUARD,] }] }
        ]; };
        return EffectsRootModule;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        EffectsRootModule.prototype.sources;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/effects_feature_module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EffectsFeatureModule = /** @class */ (function () {
        function EffectsFeatureModule(root, effectSourceGroups, storeRootModule, storeFeatureModule) {
            effectSourceGroups.forEach((/**
             * @param {?} group
             * @return {?}
             */
            function (group) {
                return group.forEach((/**
                 * @param {?} effectSourceInstance
                 * @return {?}
                 */
                function (effectSourceInstance) {
                    return root.addEffects(effectSourceInstance);
                }));
            }));
        }
        EffectsFeatureModule.decorators = [
            { type: core.NgModule, args: [{},] },
        ];
        /** @nocollapse */
        EffectsFeatureModule.ctorParameters = function () { return [
            { type: EffectsRootModule },
            { type: Array, decorators: [{ type: core.Inject, args: [FEATURE_EFFECTS,] }] },
            { type: store.StoreRootModule, decorators: [{ type: core.Optional }] },
            { type: store.StoreFeatureModule, decorators: [{ type: core.Optional }] }
        ]; };
        return EffectsFeatureModule;
    }());

    var __values = (this && this.__values) || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read$1 = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread$1 = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$1(arguments[i]));
        return ar;
    };
    var EffectsModule = /** @class */ (function () {
        function EffectsModule() {
        }
        /**
         * @param {?=} featureEffects
         * @return {?}
         */
        EffectsModule.forFeature = /**
         * @param {?=} featureEffects
         * @return {?}
         */
        function (featureEffects) {
            if (featureEffects === void 0) { featureEffects = []; }
            return {
                ngModule: EffectsFeatureModule,
                providers: [
                    featureEffects,
                    {
                        provide: _FEATURE_EFFECTS,
                        multi: true,
                        useValue: featureEffects,
                    },
                    {
                        provide: USER_PROVIDED_EFFECTS,
                        multi: true,
                        useValue: [],
                    },
                    {
                        provide: FEATURE_EFFECTS,
                        multi: true,
                        useFactory: createEffects,
                        deps: [core.Injector, _FEATURE_EFFECTS, USER_PROVIDED_EFFECTS],
                    },
                ],
            };
        };
        /**
         * @param {?=} rootEffects
         * @return {?}
         */
        EffectsModule.forRoot = /**
         * @param {?=} rootEffects
         * @return {?}
         */
        function (rootEffects) {
            if (rootEffects === void 0) { rootEffects = []; }
            return {
                ngModule: EffectsRootModule,
                providers: [
                    {
                        provide: _ROOT_EFFECTS_GUARD,
                        useFactory: _provideForRootGuard,
                        deps: [[EffectsRunner, new core.Optional(), new core.SkipSelf()]],
                    },
                    {
                        provide: EFFECTS_ERROR_HANDLER,
                        useValue: defaultEffectsErrorHandler,
                    },
                    EffectsRunner,
                    EffectSources,
                    Actions,
                    rootEffects,
                    {
                        provide: _ROOT_EFFECTS,
                        useValue: [rootEffects],
                    },
                    {
                        provide: USER_PROVIDED_EFFECTS,
                        multi: true,
                        useValue: [],
                    },
                    {
                        provide: ROOT_EFFECTS,
                        useFactory: createEffects,
                        deps: [core.Injector, _ROOT_EFFECTS, USER_PROVIDED_EFFECTS],
                    },
                ],
            };
        };
        EffectsModule.decorators = [
            { type: core.NgModule, args: [{},] },
        ];
        return EffectsModule;
    }());
    /**
     * @param {?} injector
     * @param {?} effectGroups
     * @param {?} userProvidedEffectGroups
     * @return {?}
     */
    function createEffects(injector, effectGroups, userProvidedEffectGroups) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var mergedEffects = [];
        try {
            for (var effectGroups_1 = __values(effectGroups), effectGroups_1_1 = effectGroups_1.next(); !effectGroups_1_1.done; effectGroups_1_1 = effectGroups_1.next()) {
                var effectGroup = effectGroups_1_1.value;
                mergedEffects.push.apply(mergedEffects, __spread$1(effectGroup));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (effectGroups_1_1 && !effectGroups_1_1.done && (_a = effectGroups_1.return)) _a.call(effectGroups_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var userProvidedEffectGroups_1 = __values(userProvidedEffectGroups), userProvidedEffectGroups_1_1 = userProvidedEffectGroups_1.next(); !userProvidedEffectGroups_1_1.done; userProvidedEffectGroups_1_1 = userProvidedEffectGroups_1.next()) {
                var userProvidedEffectGroup = userProvidedEffectGroups_1_1.value;
                mergedEffects.push.apply(mergedEffects, __spread$1(userProvidedEffectGroup));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (userProvidedEffectGroups_1_1 && !userProvidedEffectGroups_1_1.done && (_b = userProvidedEffectGroups_1.return)) _b.call(userProvidedEffectGroups_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return createEffectInstances(injector, mergedEffects);
    }
    /**
     * @param {?} injector
     * @param {?} effects
     * @return {?}
     */
    function createEffectInstances(injector, effects) {
        return effects.map((/**
         * @param {?} effect
         * @return {?}
         */
        function (effect) { return injector.get(effect); }));
    }
    /**
     * @param {?} runner
     * @return {?}
     */
    function _provideForRootGuard(runner) {
        if (runner) {
            throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");
        }
        return 'guarded';
    }

    var __assign$2 = (this && this.__assign) || function () {
        __assign$2 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$2.apply(this, arguments);
    };
    /**
     * Represents config with named paratemeters for act
     * @record
     * @template Input, OutputAction, ErrorAction, CompleteAction, UnsubscribeAction
     */
    function ActConfig() { }
    if (false) {
        /** @type {?} */
        ActConfig.prototype.project;
        /** @type {?} */
        ActConfig.prototype.error;
        /** @type {?|undefined} */
        ActConfig.prototype.complete;
        /** @type {?|undefined} */
        ActConfig.prototype.operator;
        /** @type {?|undefined} */
        ActConfig.prototype.unsubscribe;
    }
    /**
     * @template Input, OutputAction, ErrorAction, CompleteAction, UnsubscribeAction
     * @param {?} configOrProject
     * @param {?=} errorFn
     * @return {?}
     */
    function act(
    /** Allow to take either config object or project/error functions */
    configOrProject, errorFn) {
        var _a = typeof configOrProject === 'function'
            ? {
                project: configOrProject,
                error: (/** @type {?} */ (errorFn)),
                operator: operators.concatMap,
                complete: undefined,
                unsubscribe: undefined,
            }
            : __assign$2(__assign$2({}, configOrProject), { operator: configOrProject.operator || operators.concatMap }), project = _a.project, error = _a.error, complete = _a.complete, operator = _a.operator, unsubscribe = _a.unsubscribe;
        return (/**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            return rxjs.defer((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var subject = new rxjs.Subject();
                return rxjs.merge(source.pipe(operator((/**
                 * @param {?} input
                 * @param {?} index
                 * @return {?}
                 */
                function (input, index) {
                    return rxjs.defer((/**
                     * @return {?}
                     */
                    function () {
                        /** @type {?} */
                        var completed = false;
                        /** @type {?} */
                        var errored = false;
                        /** @type {?} */
                        var projectedCount = 0;
                        return project(input, index).pipe(operators.materialize(), operators.map((/**
                         * @param {?} notification
                         * @return {?}
                         */
                        function (notification) {
                            switch (notification.kind) {
                                case 'E':
                                    errored = true;
                                    return new rxjs.Notification((/** @type {?} */ (
                                    // TODO: remove any in RxJS 6.5
                                    'N')), error(notification.error, input));
                                case 'C':
                                    completed = true;
                                    return complete
                                        ? new rxjs.Notification((/** @type {?} */ (
                                        // TODO: remove any in RxJS 6.5
                                        'N')), complete(projectedCount, input))
                                        : undefined;
                                default:
                                    ++projectedCount;
                                    return notification;
                            }
                        })), operators.filter((/**
                         * @param {?} n
                         * @return {?}
                         */
                        function (n) { return n != null; })), operators.dematerialize(), operators.finalize((/**
                         * @return {?}
                         */
                        function () {
                            if (!completed && !errored && unsubscribe) {
                                subject.next(unsubscribe(projectedCount, input));
                            }
                        })));
                    }));
                }))), subject);
            }));
        });
    }

    exports.Actions = Actions;
    exports.EFFECTS_ERROR_HANDLER = EFFECTS_ERROR_HANDLER;
    exports.Effect = Effect;
    exports.EffectSources = EffectSources;
    exports.EffectsFeatureModule = EffectsFeatureModule;
    exports.EffectsModule = EffectsModule;
    exports.EffectsRootModule = EffectsRootModule;
    exports.EffectsRunner = EffectsRunner;
    exports.ROOT_EFFECTS_INIT = ROOT_EFFECTS_INIT;
    exports.USER_PROVIDED_EFFECTS = USER_PROVIDED_EFFECTS;
    exports.act = act;
    exports.createEffect = createEffect;
    exports.defaultEffectsErrorHandler = defaultEffectsErrorHandler;
    exports.getEffectsMetadata = getEffectsMetadata;
    exports.mergeEffects = mergeEffects;
    exports.ofType = ofType;
    exports.rootEffectsInit = rootEffectsInit;
    exports.ɵa = getSourceMetadata;
    exports.ɵb = createEffects;
    exports.ɵc = _provideForRootGuard;
    exports.ɵd = _ROOT_EFFECTS_GUARD;
    exports.ɵe = _ROOT_EFFECTS;
    exports.ɵf = ROOT_EFFECTS;
    exports.ɵg = _FEATURE_EFFECTS;
    exports.ɵh = FEATURE_EFFECTS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngrx-effects.umd.js.map
