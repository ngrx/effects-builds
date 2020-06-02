/**
 * @fileoverview added by tsickle
 * Generated from: src/effect_notification.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function EffectNotification() { }
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
export function reportInvalidActions(output, reporter) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X25vdGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3J4L2VmZmVjdHMvIiwic291cmNlcyI6WyJzcmMvZWZmZWN0X25vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLHdDQU1DOzs7SUFMQyxvQ0FBa0Q7O0lBQ2xELDBDQUEwQjs7SUFDMUIsd0NBQW1COztJQUNuQiw0Q0FBb0I7O0lBQ3BCLDBDQUFzRDs7Ozs7OztBQUd4RCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLE1BQTBCLEVBQzFCLFFBQXNCO0lBRXRCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFOztZQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLOztZQUNsQyxlQUFlLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRXpDLElBQUksZUFBZSxFQUFFO1lBQ25CLFFBQVEsQ0FBQyxXQUFXLENBQ2xCLElBQUksS0FBSyxDQUNQLFlBQVUsYUFBYSxDQUNyQixNQUFNLENBQ1AsdUNBQWtDLFNBQVMsQ0FBQyxNQUFNLENBQUcsQ0FDdkQsQ0FDRixDQUFDO1NBQ0g7S0FDRjtBQUNILENBQUM7Ozs7O0FBRUQsU0FBUyxRQUFRLENBQUMsTUFBVztJQUMzQixPQUFPLENBQ0wsT0FBTyxNQUFNLEtBQUssVUFBVTtRQUM1QixNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUk7UUFDWCxPQUFPLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUNoQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxFQUlGO1FBSG5CLDhCQUFZLEVBQ1osa0NBQWMsRUFDZCwwQkFBVTs7UUFFSixRQUFRLEdBQUcsT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssVUFBVTtJQUVuRSxPQUFPLE9BQUksVUFBVSxTQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFHLENBQUM7QUFDMUUsQ0FBQzs7Ozs7QUFFRCxTQUFTLFNBQVMsQ0FBQyxNQUFpQztJQUNsRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0lBQUMsV0FBTTtRQUNOLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBFZmZlY3ROb3RpZmljYXRpb24ge1xuICBlZmZlY3Q6IE9ic2VydmFibGU8YW55PiB8ICgoKSA9PiBPYnNlcnZhYmxlPGFueT4pO1xuICBwcm9wZXJ0eU5hbWU6IFByb3BlcnR5S2V5O1xuICBzb3VyY2VOYW1lOiBzdHJpbmc7XG4gIHNvdXJjZUluc3RhbmNlOiBhbnk7XG4gIG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uPEFjdGlvbiB8IG51bGwgfCB1bmRlZmluZWQ+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0SW52YWxpZEFjdGlvbnMoXG4gIG91dHB1dDogRWZmZWN0Tm90aWZpY2F0aW9uLFxuICByZXBvcnRlcjogRXJyb3JIYW5kbGVyXG4pIHtcbiAgaWYgKG91dHB1dC5ub3RpZmljYXRpb24ua2luZCA9PT0gJ04nKSB7XG4gICAgY29uc3QgYWN0aW9uID0gb3V0cHV0Lm5vdGlmaWNhdGlvbi52YWx1ZTtcbiAgICBjb25zdCBpc0ludmFsaWRBY3Rpb24gPSAhaXNBY3Rpb24oYWN0aW9uKTtcblxuICAgIGlmIChpc0ludmFsaWRBY3Rpb24pIHtcbiAgICAgIHJlcG9ydGVyLmhhbmRsZUVycm9yKFxuICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgYEVmZmVjdCAke2dldEVmZmVjdE5hbWUoXG4gICAgICAgICAgICBvdXRwdXRcbiAgICAgICAgICApfSBkaXNwYXRjaGVkIGFuIGludmFsaWQgYWN0aW9uOiAke3N0cmluZ2lmeShhY3Rpb24pfWBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNBY3Rpb24oYWN0aW9uOiBhbnkpOiBhY3Rpb24gaXMgQWN0aW9uIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgYWN0aW9uICE9PSAnZnVuY3Rpb24nICYmXG4gICAgYWN0aW9uICYmXG4gICAgYWN0aW9uLnR5cGUgJiZcbiAgICB0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICdzdHJpbmcnXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldEVmZmVjdE5hbWUoe1xuICBwcm9wZXJ0eU5hbWUsXG4gIHNvdXJjZUluc3RhbmNlLFxuICBzb3VyY2VOYW1lLFxufTogRWZmZWN0Tm90aWZpY2F0aW9uKSB7XG4gIGNvbnN0IGlzTWV0aG9kID0gdHlwZW9mIHNvdXJjZUluc3RhbmNlW3Byb3BlcnR5TmFtZV0gPT09ICdmdW5jdGlvbic7XG5cbiAgcmV0dXJuIGBcIiR7c291cmNlTmFtZX0uJHtTdHJpbmcocHJvcGVydHlOYW1lKX0ke2lzTWV0aG9kID8gJygpJyA6ICcnfVwiYDtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFjdGlvbjogQWN0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhY3Rpb24pO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG59XG4iXX0=