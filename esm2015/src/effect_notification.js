/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function EffectNotification() { }
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
/**
 * @param {?} output
 * @param {?} reporter
 * @return {?}
 */
export function verifyOutput(output, reporter) {
    reportErrorThrown(output, reporter);
    reportInvalidActions(output, reporter);
}
/**
 * @param {?} output
 * @param {?} reporter
 * @return {?}
 */
function reportErrorThrown(output, reporter) {
    if (output.notification.kind === 'E') {
        reporter.handleError(output.notification.error);
    }
}
/**
 * @param {?} output
 * @param {?} reporter
 * @return {?}
 */
function reportInvalidActions(output, reporter) {
    if (output.notification.kind === 'N') {
        /** @type {?} */
        const action = output.notification.value;
        /** @type {?} */
        const isInvalidAction = !isAction(action);
        if (isInvalidAction) {
            reporter.handleError(new Error(`Effect ${getEffectName(output)} dispatched an invalid action: ${stringify(action)}`));
        }
    }
}
/**
 * @param {?} action
 * @return {?}
 */
function isAction(action) {
    return action && action.type && typeof action.type === 'string';
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEffectName({ propertyName, sourceInstance, sourceName, }) {
    /** @type {?} */
    const isMethod = typeof sourceInstance[propertyName] === 'function';
    return `"${sourceName}.${propertyName}${isMethod ? '()' : ''}"`;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X25vdGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0X25vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLE1BQU0sdUJBQ0osTUFBMEIsRUFDMUIsUUFBc0I7SUFFdEIsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztDQUN4Qzs7Ozs7O0FBRUQsMkJBQTJCLE1BQTBCLEVBQUUsUUFBc0I7SUFDM0UsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7UUFDcEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pEO0NBQ0Y7Ozs7OztBQUVELDhCQUNFLE1BQTBCLEVBQzFCLFFBQXNCO0lBRXRCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFOztRQUNwQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzs7UUFDekMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUMsSUFBSSxlQUFlLEVBQUU7WUFDbkIsUUFBUSxDQUFDLFdBQVcsQ0FDbEIsSUFBSSxLQUFLLENBQ1AsVUFBVSxhQUFhLENBQ3JCLE1BQU0sQ0FDUCxrQ0FBa0MsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQ3ZELENBQ0YsQ0FBQztTQUNIO0tBQ0Y7Q0FDRjs7Ozs7QUFFRCxrQkFBa0IsTUFBVztJQUMzQixPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7Q0FDakU7Ozs7O0FBRUQsdUJBQXVCLEVBQ3JCLFlBQVksRUFDWixjQUFjLEVBQ2QsVUFBVSxHQUNTOztJQUNuQixNQUFNLFFBQVEsR0FBRyxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLENBQUM7SUFFcEUsT0FBTyxJQUFJLFVBQVUsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQ2pFOzs7OztBQUVELG1CQUFtQixNQUFpQztJQUNsRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0lBQUMsV0FBTTtRQUNOLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWZmZWN0Tm90aWZpY2F0aW9uIHtcbiAgZWZmZWN0OiBPYnNlcnZhYmxlPGFueT4gfCAoKCkgPT4gT2JzZXJ2YWJsZTxhbnk+KTtcbiAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XG4gIHNvdXJjZU5hbWU6IHN0cmluZztcbiAgc291cmNlSW5zdGFuY2U6IGFueTtcbiAgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb248QWN0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZD47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlPdXRwdXQoXG4gIG91dHB1dDogRWZmZWN0Tm90aWZpY2F0aW9uLFxuICByZXBvcnRlcjogRXJyb3JIYW5kbGVyXG4pIHtcbiAgcmVwb3J0RXJyb3JUaHJvd24ob3V0cHV0LCByZXBvcnRlcik7XG4gIHJlcG9ydEludmFsaWRBY3Rpb25zKG91dHB1dCwgcmVwb3J0ZXIpO1xufVxuXG5mdW5jdGlvbiByZXBvcnRFcnJvclRocm93bihvdXRwdXQ6IEVmZmVjdE5vdGlmaWNhdGlvbiwgcmVwb3J0ZXI6IEVycm9ySGFuZGxlcikge1xuICBpZiAob3V0cHV0Lm5vdGlmaWNhdGlvbi5raW5kID09PSAnRScpIHtcbiAgICByZXBvcnRlci5oYW5kbGVFcnJvcihvdXRwdXQubm90aWZpY2F0aW9uLmVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBvcnRJbnZhbGlkQWN0aW9ucyhcbiAgb3V0cHV0OiBFZmZlY3ROb3RpZmljYXRpb24sXG4gIHJlcG9ydGVyOiBFcnJvckhhbmRsZXJcbikge1xuICBpZiAob3V0cHV0Lm5vdGlmaWNhdGlvbi5raW5kID09PSAnTicpIHtcbiAgICBjb25zdCBhY3Rpb24gPSBvdXRwdXQubm90aWZpY2F0aW9uLnZhbHVlO1xuICAgIGNvbnN0IGlzSW52YWxpZEFjdGlvbiA9ICFpc0FjdGlvbihhY3Rpb24pO1xuXG4gICAgaWYgKGlzSW52YWxpZEFjdGlvbikge1xuICAgICAgcmVwb3J0ZXIuaGFuZGxlRXJyb3IoXG4gICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICBgRWZmZWN0ICR7Z2V0RWZmZWN0TmFtZShcbiAgICAgICAgICAgIG91dHB1dFxuICAgICAgICAgICl9IGRpc3BhdGNoZWQgYW4gaW52YWxpZCBhY3Rpb246ICR7c3RyaW5naWZ5KGFjdGlvbil9YFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc0FjdGlvbihhY3Rpb246IGFueSk6IGFjdGlvbiBpcyBBY3Rpb24ge1xuICByZXR1cm4gYWN0aW9uICYmIGFjdGlvbi50eXBlICYmIHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGdldEVmZmVjdE5hbWUoe1xuICBwcm9wZXJ0eU5hbWUsXG4gIHNvdXJjZUluc3RhbmNlLFxuICBzb3VyY2VOYW1lLFxufTogRWZmZWN0Tm90aWZpY2F0aW9uKSB7XG4gIGNvbnN0IGlzTWV0aG9kID0gdHlwZW9mIHNvdXJjZUluc3RhbmNlW3Byb3BlcnR5TmFtZV0gPT09ICdmdW5jdGlvbic7XG5cbiAgcmV0dXJuIGBcIiR7c291cmNlTmFtZX0uJHtwcm9wZXJ0eU5hbWV9JHtpc01ldGhvZCA/ICcoKScgOiAnJ31cImA7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhY3Rpb246IEFjdGlvbiB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYWN0aW9uKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxufVxuIl19