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
 * @fileoverview added by tsickle
 * Generated from: src/actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { ScannedActionsSubject, } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
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
        { type: Injectable }
    ];
    /** @nocollapse */
    Actions.ctorParameters = function () { return [
        { type: Observable, decorators: [{ type: Inject, args: [ScannedActionsSubject,] }] }
    ]; };
    return Actions;
}(Observable));
export { Actions };
/**
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofType() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return filter((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3J4L2VmZmVjdHMvIiwic291cmNlcyI6WyJzcmMvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBSUwscUJBQXFCLEdBQ3RCLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxVQUFVLEVBQThCLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV4QztJQUN5QywyQkFBYTtJQUNwRCxpQkFBMkMsTUFBc0I7UUFBakUsWUFDRSxpQkFBTyxTQUtSO1FBSEMsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7SUFDSCxDQUFDOzs7Ozs7SUFFRCxzQkFBSTs7Ozs7SUFBSixVQUFRLFFBQXdCOztZQUN4QixVQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUs7UUFDbkMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Z0JBZkYsVUFBVTs7OztnQkFIRixVQUFVLHVCQUtKLE1BQU0sU0FBQyxxQkFBcUI7O0lBYzNDLGNBQUM7Q0FBQSxBQWhCRCxDQUN5QyxVQUFVLEdBZWxEO1NBZlksT0FBTzs7Ozs7QUEyR3BCLE1BQU0sVUFBVSxNQUFNO0lBQ3BCLHNCQUErRDtTQUEvRCxVQUErRCxFQUEvRCxxQkFBK0QsRUFBL0QsSUFBK0Q7UUFBL0QsaUNBQStEOztJQUUvRCxPQUFPLE1BQU07Ozs7SUFBQyxVQUFDLE1BQWM7UUFDM0IsT0FBQSxZQUFZLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsbUJBQW1CO1lBQ3BDLElBQUksT0FBTyxtQkFBbUIsS0FBSyxRQUFRLEVBQUU7Z0JBQzNDLCtCQUErQjtnQkFDL0IsT0FBTyxtQkFBbUIsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzVDO1lBRUQsb0NBQW9DO1lBQ3BDLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDbEQsQ0FBQyxFQUFDO0lBUkYsQ0FRRSxFQUNILENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3Rpb24sXG4gIEFjdGlvbkNyZWF0b3IsXG4gIENyZWF0b3IsXG4gIFNjYW5uZWRBY3Rpb25zU3ViamVjdCxcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiwgT3BlcmF0b3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGlvbnM8ViA9IEFjdGlvbj4gZXh0ZW5kcyBPYnNlcnZhYmxlPFY+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdChTY2FubmVkQWN0aW9uc1N1YmplY3QpIHNvdXJjZT86IE9ic2VydmFibGU8Vj4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgfVxuICB9XG5cbiAgbGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8ViwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IEFjdGlvbnM8Uj4oKTtcbiAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG59XG5cbi8vIE1vZHVsZS1wcml2YXRlIGhlbHBlciB0eXBlXG50eXBlIEFjdGlvbkV4dHJhY3RvcjxcbiAgVCBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBBQyBleHRlbmRzIEFjdGlvbkNyZWF0b3I8c3RyaW5nLCBDcmVhdG9yPixcbiAgRVxuPiA9IFQgZXh0ZW5kcyBzdHJpbmcgPyBFIDogUmV0dXJuVHlwZTxFeHRyYWN0PFQsIEFDPj47XG4vKipcbiAqICdvZlR5cGUnIGZpbHRlcnMgYW4gT2JzZXJ2YWJsZSBvZiBBY3Rpb25zIGludG8gYW4gb2JzZXJ2YWJsZSBvZiB0aGUgYWN0aW9uc1xuICogd2hvc2UgdHlwZSBzdHJpbmdzIGFyZSBwYXNzZWQgdG8gaXQuXG4gKlxuICogRm9yIGV4YW1wbGUsIGlmIGBhY3Rpb25zYCBoYXMgdHlwZSBgQWN0aW9uczxBZGRpdGlvbkFjdGlvbnxTdWJzdHJhY3Rpb25BY3Rpb24+YCwgYW5kXG4gKiB0aGUgdHlwZSBvZiB0aGUgYEFkZGl0aW9uYCBhY3Rpb24gaXMgYGFkZGAsIHRoZW5cbiAqIGBhY3Rpb25zLnBpcGUob2ZUeXBlKCdhZGQnKSlgIHJldHVybnMgYW4gYE9ic2VydmFibGU8QWRkaXRpb25BY3Rpb24+YC5cbiAqXG4gKiBQcm9wZXJseSB0eXBpbmcgdGhpcyBmdW5jdGlvbiBpcyBoYXJkIGFuZCByZXF1aXJlcyBzb21lIGFkdmFuY2VkIFRTIHRyaWNrc1xuICogYmVsb3cuXG4gKlxuICogVHlwZSBuYXJyb3dpbmcgYXV0b21hdGljYWxseSB3b3JrcywgYXMgbG9uZyBhcyB5b3VyIGBhY3Rpb25zYCBvYmplY3RcbiAqIHN0YXJ0cyB3aXRoIGEgYEFjdGlvbnM8U29tZVVuaW9uT2ZBY3Rpb25zPmAgaW5zdGVhZCBvZiBnZW5lcmljIGBBY3Rpb25zYC5cbiAqXG4gKiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHdoZW4gb25lIHBhc3NlcyBhIHNpbmdsZSB0eXBlIGFyZ3VtZW50XG4gKiBgb2ZUeXBlPFQ+KCdzb21ldGhpbmcnKWAgdGhlIHJlc3VsdCBpcyBhbiBgT2JzZXJ2YWJsZTxUPmAuIE5vdGUsIHRoYXQgYFRgXG4gKiBjb21wbGV0ZWx5IG92ZXJyaWRlcyBhbnkgcG9zc2libGUgaW5mZXJlbmNlIGZyb20gJ3NvbWV0aGluZycuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgZm9yIHVua25vd24gJ2FjdGlvbnM6IEFjdGlvbnMnIHRoZXNlIHR5cGVzIHdpbGwgcHJvZHVjZVxuICogJ09ic2VydmFibGU8bmV2ZXI+Jy4gSW4gc3VjaCBjYXNlcyBvbmUgaGFzIHRvIG1hbnVhbGx5IHNldCB0aGUgZ2VuZXJpYyB0eXBlXG4gKiBsaWtlIGBhY3Rpb25zLm9mVHlwZTxBZGRpdGlvbkFjdGlvbj4oJ2FkZCcpYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mVHlwZTxcbiAgQUMgZXh0ZW5kcyBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj5bXSxcbiAgVSBleHRlbmRzIEFjdGlvbiA9IEFjdGlvbixcbiAgViA9IFJldHVyblR5cGU8QUNbbnVtYmVyXT5cbj4oLi4uYWxsb3dlZFR5cGVzOiBBQyk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5cbmV4cG9ydCBmdW5jdGlvbiBvZlR5cGU8XG4gIEUgZXh0ZW5kcyBFeHRyYWN0PFUsIHsgdHlwZTogVDEgfT4sXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBUMSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBVIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uLFxuICBWID0gVDEgZXh0ZW5kcyBzdHJpbmcgPyBFIDogUmV0dXJuVHlwZTxFeHRyYWN0PFQxLCBBQz4+XG4+KHQxOiBUMSk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfT4sXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBUMSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUMiBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBVIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uLFxuICBWID0gQWN0aW9uRXh0cmFjdG9yPFQxIHwgVDIsIEFDLCBFPlxuPih0MTogVDEsIHQyOiBUMik6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfCBUMyB9PixcbiAgQUMgZXh0ZW5kcyBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj4sXG4gIFQxIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFQyIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFQzIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFUgZXh0ZW5kcyBBY3Rpb24gPSBBY3Rpb24sXG4gIFYgPSBBY3Rpb25FeHRyYWN0b3I8VDEgfCBUMiB8IFQzLCBBQywgRT5cbj4odDE6IFQxLCB0MjogVDIsIHQzOiBUMyk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfCBUMyB8IFQ0IH0+LFxuICBBQyBleHRlbmRzIEFjdGlvbkNyZWF0b3I8c3RyaW5nLCBDcmVhdG9yPixcbiAgVDEgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVDIgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVDMgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVDQgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVSBleHRlbmRzIEFjdGlvbiA9IEFjdGlvbixcbiAgViA9IEFjdGlvbkV4dHJhY3RvcjxUMSB8IFQyIHwgVDMgfCBUNCwgQUMsIEU+XG4+KHQxOiBUMSwgdDI6IFQyLCB0MzogVDMsIHQ0OiBUNCk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfCBUMyB8IFQ0IHwgVDUgfT4sXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBUMSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUMiBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUMyBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUNCBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUNSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBVIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uLFxuICBWID0gQWN0aW9uRXh0cmFjdG9yPFQxIHwgVDIgfCBUMyB8IFQ0IHwgVDUsIEFDLCBFPlxuPih0MTogVDEsIHQyOiBUMiwgdDM6IFQzLCB0NDogVDQsIHQ1OiBUNSk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG4vKipcbiAqIEZhbGxiYWNrIGZvciBtb3JlIHRoYW4gNSBhcmd1bWVudHMuXG4gKiBUaGVyZSBpcyBubyBpbmZlcmVuY2UsIHNvIHRoZSByZXR1cm4gdHlwZSBpcyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgLVxuICogT2JzZXJ2YWJsZTxBY3Rpb24+LlxuICpcbiAqIFdlIHByb3ZpZGUgYSB0eXBlIHBhcmFtZXRlciwgZXZlbiB0aG91Z2ggVFMgd2lsbCBub3QgaW5mZXIgaXQgZnJvbSB0aGVcbiAqIGFyZ3VtZW50cywgdG8gcHJlc2VydmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBvbGQgdmVyc2lvbnMgb2YgbmdyeC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mVHlwZTxWIGV4dGVuZHMgQWN0aW9uPihcbiAgLi4uYWxsb3dlZFR5cGVzOiBBcnJheTxzdHJpbmcgfCBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj4+XG4pOiBPcGVyYXRvckZ1bmN0aW9uPEFjdGlvbiwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlKFxuICAuLi5hbGxvd2VkVHlwZXM6IEFycmF5PHN0cmluZyB8IEFjdGlvbkNyZWF0b3I8c3RyaW5nLCBDcmVhdG9yPj5cbik6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uLCBBY3Rpb24+IHtcbiAgcmV0dXJuIGZpbHRlcigoYWN0aW9uOiBBY3Rpb24pID0+XG4gICAgYWxsb3dlZFR5cGVzLnNvbWUoKHR5cGVPckFjdGlvbkNyZWF0b3IpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZU9yQWN0aW9uQ3JlYXRvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gQ29tcGFyaW5nIHRoZSBzdHJpbmcgdG8gdHlwZVxuICAgICAgICByZXR1cm4gdHlwZU9yQWN0aW9uQ3JlYXRvciA9PT0gYWN0aW9uLnR5cGU7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIGFyZSBmaWx0ZXJpbmcgYnkgQWN0aW9uQ3JlYXRvclxuICAgICAgcmV0dXJuIHR5cGVPckFjdGlvbkNyZWF0b3IudHlwZSA9PT0gYWN0aW9uLnR5cGU7XG4gICAgfSlcbiAgKTtcbn1cbiJdfQ==