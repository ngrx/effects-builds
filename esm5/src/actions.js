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
import { Inject, Injectable } from '@angular/core';
import { ScannedActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
var Actions = /** @class */ (function (_super) {
    __extends(Actions, _super);
    function Actions(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this.source = source;
        }
        return _this;
    }
    Actions.prototype.lift = function (operator) {
        var observable = new Actions();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * @deprecated from 6.1.0. Use the pipeable `ofType` operator instead.
     */
    Actions.prototype.ofType = function () {
        var allowedTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            allowedTypes[_i] = arguments[_i];
        }
        return ofType.apply(void 0, __spread(allowedTypes))(this);
    };
    Actions.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Actions.ctorParameters = function () { return [
        { type: Observable, decorators: [{ type: Inject, args: [ScannedActionsSubject,] }] }
    ]; };
    return Actions;
}(Observable));
export { Actions };
export function ofType() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return filter(function (action) {
        return allowedTypes.some(function (type) { return type === action.type; });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQVUscUJBQXFCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBOEIsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDO0lBQ3lDLDJCQUFhO0lBQ3BELGlCQUEyQyxNQUFzQjtRQUFqRSxZQUNFLGlCQUFPLFNBS1I7UUFIQyxJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCOztJQUNILENBQUM7SUFFRCxzQkFBSSxHQUFKLFVBQVEsUUFBd0I7UUFDOUIsSUFBTSxVQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUssQ0FBQztRQUNwQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN6QixVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMvQixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCx3QkFBTSxHQUFOO1FBQXlCLHNCQUF5QjthQUF6QixVQUF5QixFQUF6QixxQkFBeUIsRUFBekIsSUFBeUI7WUFBekIsaUNBQXlCOztRQUNoRCxPQUFPLE1BQU0sd0JBQVMsWUFBWSxHQUFFLElBQW9CLENBQWdCLENBQUM7SUFDM0UsQ0FBQzs7Z0JBdEJGLFVBQVU7Ozs7Z0JBSEYsVUFBVSx1QkFLSixNQUFNLFNBQUMscUJBQXFCOztJQXFCM0MsY0FBQztDQUFBLEFBdkJELENBQ3lDLFVBQVUsR0FzQmxEO1NBdEJZLE9BQU87QUF3QnBCLE1BQU07SUFDSixzQkFBeUI7U0FBekIsVUFBeUIsRUFBekIscUJBQXlCLEVBQXpCLElBQXlCO1FBQXpCLGlDQUF5Qjs7SUFFekIsT0FBTyxNQUFNLENBQ1gsVUFBQyxNQUFjO1FBQ2IsT0FBQSxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQXBCLENBQW9CLENBQUM7SUFBL0MsQ0FBK0MsQ0FDbEQsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiwgU2Nhbm5lZEFjdGlvbnNTdWJqZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3IsIE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGlvbnM8ViA9IEFjdGlvbj4gZXh0ZW5kcyBPYnNlcnZhYmxlPFY+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdChTY2FubmVkQWN0aW9uc1N1YmplY3QpIHNvdXJjZT86IE9ic2VydmFibGU8Vj4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgfVxuICB9XG5cbiAgbGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8ViwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IEFjdGlvbnM8Uj4oKTtcbiAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIGZyb20gNi4xLjAuIFVzZSB0aGUgcGlwZWFibGUgYG9mVHlwZWAgb3BlcmF0b3IgaW5zdGVhZC5cbiAgICovXG4gIG9mVHlwZTxWMiBleHRlbmRzIFYgPSBWPiguLi5hbGxvd2VkVHlwZXM6IHN0cmluZ1tdKTogQWN0aW9uczxWMj4ge1xuICAgIHJldHVybiBvZlR5cGU8YW55PiguLi5hbGxvd2VkVHlwZXMpKHRoaXMgYXMgQWN0aW9uczxhbnk+KSBhcyBBY3Rpb25zPFYyPjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFQgZXh0ZW5kcyBBY3Rpb24+KFxuICAuLi5hbGxvd2VkVHlwZXM6IHN0cmluZ1tdXG4pOiBPcGVyYXRvckZ1bmN0aW9uPEFjdGlvbiwgVD4ge1xuICByZXR1cm4gZmlsdGVyKFxuICAgIChhY3Rpb246IEFjdGlvbik6IGFjdGlvbiBpcyBUID0+XG4gICAgICBhbGxvd2VkVHlwZXMuc29tZSh0eXBlID0+IHR5cGUgPT09IGFjdGlvbi50eXBlKVxuICApO1xufVxuIl19