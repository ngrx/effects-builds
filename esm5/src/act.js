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
 * @fileoverview added by tsickle
 * Generated from: src/act.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { defer, merge, Notification, Subject, } from 'rxjs';
import { concatMap, dematerialize, filter, finalize, map, materialize, } from 'rxjs/operators';
/**
 * Represents config with named paratemeters for act
 * @record
 * @template Input, OutputAction, ErrorAction, CompleteAction, UnsubscribeAction
 */
export function ActConfig() { }
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
export function act(
/** Allow to take either config object or project/error functions */
configOrProject, errorFn) {
    var _a = typeof configOrProject === 'function'
        ? {
            project: configOrProject,
            error: (/** @type {?} */ (errorFn)),
            operator: concatMap,
            complete: undefined,
            unsubscribe: undefined,
        }
        : __assign(__assign({}, configOrProject), { operator: configOrProject.operator || concatMap }), project = _a.project, error = _a.error, complete = _a.complete, operator = _a.operator, unsubscribe = _a.unsubscribe;
    return (/**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return defer((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var subject = new Subject();
            return merge(source.pipe(operator((/**
             * @param {?} input
             * @param {?} index
             * @return {?}
             */
            function (input, index) {
                return defer((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var completed = false;
                    /** @type {?} */
                    var errored = false;
                    /** @type {?} */
                    var projectedCount = 0;
                    return project(input, index).pipe(materialize(), map((/**
                     * @param {?} notification
                     * @return {?}
                     */
                    function (notification) {
                        switch (notification.kind) {
                            case 'E':
                                errored = true;
                                return new Notification((/** @type {?} */ (
                                // TODO: remove any in RxJS 6.5
                                'N')), error(notification.error, input));
                            case 'C':
                                completed = true;
                                return complete
                                    ? new Notification((/** @type {?} */ (
                                    // TODO: remove any in RxJS 6.5
                                    'N')), complete(projectedCount, input))
                                    : undefined;
                            default:
                                ++projectedCount;
                                return notification;
                        }
                    })), filter((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n != null; })), dematerialize(), finalize((/**
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
//# sourceMappingURL=act.js.map