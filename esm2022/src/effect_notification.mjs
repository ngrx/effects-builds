export function reportInvalidActions(output, reporter) {
    if (output.notification.kind === 'N') {
        const action = output.notification.value;
        const isInvalidAction = !isAction(action);
        if (isInvalidAction) {
            reporter.handleError(new Error(`Effect ${getEffectName(output)} dispatched an invalid action: ${stringify(action)}`));
        }
    }
}
function isAction(action) {
    return (typeof action !== 'function' &&
        action &&
        action.type &&
        typeof action.type === 'string');
}
function getEffectName({ propertyName, sourceInstance, sourceName, }) {
    const isMethod = typeof sourceInstance[propertyName] === 'function';
    const isClassBasedEffect = !!sourceName;
    return isClassBasedEffect
        ? `"${sourceName}.${String(propertyName)}${isMethod ? '()' : ''}"`
        : `"${String(propertyName)}()"`;
}
function stringify(action) {
    try {
        return JSON.stringify(action);
    }
    catch {
        return action;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X25vdGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0X25vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQSxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLE1BQTBCLEVBQzFCLFFBQXNCO0lBRXRCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO1FBQ3BDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3pDLE1BQU0sZUFBZSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLElBQUksZUFBZSxFQUFFO1lBQ25CLFFBQVEsQ0FBQyxXQUFXLENBQ2xCLElBQUksS0FBSyxDQUNQLFVBQVUsYUFBYSxDQUNyQixNQUFNLENBQ1Asa0NBQWtDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUN2RCxDQUNGLENBQUM7U0FDSDtLQUNGO0FBQ0gsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLE1BQVc7SUFDM0IsT0FBTyxDQUNMLE9BQU8sTUFBTSxLQUFLLFVBQVU7UUFDNUIsTUFBTTtRQUNOLE1BQU0sQ0FBQyxJQUFJO1FBQ1gsT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FDaEMsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxFQUNyQixZQUFZLEVBQ1osY0FBYyxFQUNkLFVBQVUsR0FDUztJQUNuQixNQUFNLFFBQVEsR0FBRyxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLENBQUM7SUFDcEUsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBRXhDLE9BQU8sa0JBQWtCO1FBQ3ZCLENBQUMsQ0FBQyxJQUFJLFVBQVUsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRztRQUNsRSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztBQUNwQyxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsTUFBaUM7SUFDbEQsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQjtJQUFDLE1BQU07UUFDTixPQUFPLE1BQU0sQ0FBQztLQUNmO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVmZmVjdE5vdGlmaWNhdGlvbiB7XG4gIGVmZmVjdDogT2JzZXJ2YWJsZTxhbnk+IHwgKCgpID0+IE9ic2VydmFibGU8YW55Pik7XG4gIHByb3BlcnR5TmFtZTogUHJvcGVydHlLZXk7XG4gIHNvdXJjZU5hbWU6IHN0cmluZyB8IG51bGw7XG4gIHNvdXJjZUluc3RhbmNlOiBhbnk7XG4gIG5vdGlmaWNhdGlvbjogT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbjxBY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydEludmFsaWRBY3Rpb25zKFxuICBvdXRwdXQ6IEVmZmVjdE5vdGlmaWNhdGlvbixcbiAgcmVwb3J0ZXI6IEVycm9ySGFuZGxlclxuKSB7XG4gIGlmIChvdXRwdXQubm90aWZpY2F0aW9uLmtpbmQgPT09ICdOJykge1xuICAgIGNvbnN0IGFjdGlvbiA9IG91dHB1dC5ub3RpZmljYXRpb24udmFsdWU7XG4gICAgY29uc3QgaXNJbnZhbGlkQWN0aW9uID0gIWlzQWN0aW9uKGFjdGlvbik7XG5cbiAgICBpZiAoaXNJbnZhbGlkQWN0aW9uKSB7XG4gICAgICByZXBvcnRlci5oYW5kbGVFcnJvcihcbiAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgIGBFZmZlY3QgJHtnZXRFZmZlY3ROYW1lKFxuICAgICAgICAgICAgb3V0cHV0XG4gICAgICAgICAgKX0gZGlzcGF0Y2hlZCBhbiBpbnZhbGlkIGFjdGlvbjogJHtzdHJpbmdpZnkoYWN0aW9uKX1gXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzQWN0aW9uKGFjdGlvbjogYW55KTogYWN0aW9uIGlzIEFjdGlvbiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIGFjdGlvbiAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGFjdGlvbiAmJlxuICAgIGFjdGlvbi50eXBlICYmXG4gICAgdHlwZW9mIGFjdGlvbi50eXBlID09PSAnc3RyaW5nJ1xuICApO1xufVxuXG5mdW5jdGlvbiBnZXRFZmZlY3ROYW1lKHtcbiAgcHJvcGVydHlOYW1lLFxuICBzb3VyY2VJbnN0YW5jZSxcbiAgc291cmNlTmFtZSxcbn06IEVmZmVjdE5vdGlmaWNhdGlvbikge1xuICBjb25zdCBpc01ldGhvZCA9IHR5cGVvZiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdID09PSAnZnVuY3Rpb24nO1xuICBjb25zdCBpc0NsYXNzQmFzZWRFZmZlY3QgPSAhIXNvdXJjZU5hbWU7XG5cbiAgcmV0dXJuIGlzQ2xhc3NCYXNlZEVmZmVjdFxuICAgID8gYFwiJHtzb3VyY2VOYW1lfS4ke1N0cmluZyhwcm9wZXJ0eU5hbWUpfSR7aXNNZXRob2QgPyAnKCknIDogJyd9XCJgXG4gICAgOiBgXCIke1N0cmluZyhwcm9wZXJ0eU5hbWUpfSgpXCJgO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYWN0aW9uOiBBY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFjdGlvbik7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBhY3Rpb247XG4gIH1cbn1cbiJdfQ==