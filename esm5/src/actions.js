var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable } from '@angular/core';
import { ScannedActionsSubject, } from '@ngrx/store';
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
    Actions_1 = Actions;
    Actions.prototype.lift = function (operator) {
        var observable = new Actions_1();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    var Actions_1;
    Actions = Actions_1 = __decorate([
        Injectable(),
        __param(0, Inject(ScannedActionsSubject)),
        __metadata("design:paramtypes", [Observable])
    ], Actions);
    return Actions;
}(Observable));
export { Actions };
export function ofType() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return filter(function (action) {
        return allowedTypes.some(function (typeOrActionCreator) {
            if (typeof typeOrActionCreator === 'string') {
                // Comparing the string to type
                return typeOrActionCreator === action.type;
            }
            // We are filtering by ActionCreator
            return typeOrActionCreator.type === action.type;
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUlMLHFCQUFxQixHQUN0QixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsVUFBVSxFQUE4QixNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEM7SUFBeUMsMkJBQWE7SUFDcEQsaUJBQTJDLE1BQXNCO1FBQWpFLFlBQ0UsaUJBQU8sU0FLUjtRQUhDLElBQUksTUFBTSxFQUFFO1lBQ1YsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7O0lBQ0gsQ0FBQztnQkFQVSxPQUFPO0lBU2xCLHNCQUFJLEdBQUosVUFBUSxRQUF3QjtRQUM5QixJQUFNLFVBQVUsR0FBRyxJQUFJLFNBQU8sRUFBSyxDQUFDO1FBQ3BDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7O0lBZFUsT0FBTztRQURuQixVQUFVLEVBQUU7UUFFRSxXQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO3lDQUFVLFVBQVU7T0FEbkQsT0FBTyxDQWVuQjtJQUFELGNBQUM7Q0FBQSxBQWZELENBQXlDLFVBQVUsR0FlbEQ7U0FmWSxPQUFPO0FBcUdwQixNQUFNLFVBQVUsTUFBTTtJQUNwQixzQkFBK0Q7U0FBL0QsVUFBK0QsRUFBL0QscUJBQStELEVBQS9ELElBQStEO1FBQS9ELGlDQUErRDs7SUFFL0QsT0FBTyxNQUFNLENBQUMsVUFBQyxNQUFjO1FBQzNCLE9BQUEsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLG1CQUFtQjtZQUNuQyxJQUFJLE9BQU8sbUJBQW1CLEtBQUssUUFBUSxFQUFFO2dCQUMzQywrQkFBK0I7Z0JBQy9CLE9BQU8sbUJBQW1CLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQzthQUM1QztZQUVELG9DQUFvQztZQUNwQyxPQUFPLG1CQUFtQixDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2xELENBQUMsQ0FBQztJQVJGLENBUUUsQ0FDSCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBBY3Rpb25DcmVhdG9yLFxuICBDcmVhdG9yLFxuICBTY2FubmVkQWN0aW9uc1N1YmplY3QsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yRnVuY3Rpb24sIE9wZXJhdG9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3Rpb25zPFYgPSBBY3Rpb24+IGV4dGVuZHMgT2JzZXJ2YWJsZTxWPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoU2Nhbm5lZEFjdGlvbnNTdWJqZWN0KSBzb3VyY2U/OiBPYnNlcnZhYmxlPFY+KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIH1cbiAgfVxuXG4gIGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPFYsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBBY3Rpb25zPFI+KCk7XG4gICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgIG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxufVxuXG4vLyBNb2R1bGUtcHJpdmF0ZSBoZWxwZXIgdHlwZVxudHlwZSBBY3Rpb25FeHRyYWN0b3I8XG4gIFQgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgQUMgZXh0ZW5kcyBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj4sXG4gIEVcbj4gPSBUIGV4dGVuZHMgc3RyaW5nID8gRSA6IFJldHVyblR5cGU8RXh0cmFjdDxULCBBQz4+O1xuLyoqXG4gKiAnb2ZUeXBlJyBmaWx0ZXJzIGFuIE9ic2VydmFibGUgb2YgQWN0aW9ucyBpbnRvIGFuIG9ic2VydmFibGUgb2YgdGhlIGFjdGlvbnNcbiAqIHdob3NlIHR5cGUgc3RyaW5ncyBhcmUgcGFzc2VkIHRvIGl0LlxuICpcbiAqIEZvciBleGFtcGxlLCBpZiBgYWN0aW9uc2AgaGFzIHR5cGUgYEFjdGlvbnM8QWRkaXRpb25BY3Rpb258U3Vic3RyYWN0aW9uQWN0aW9uPmAsIGFuZFxuICogdGhlIHR5cGUgb2YgdGhlIGBBZGRpdGlvbmAgYWN0aW9uIGlzIGBhZGRgLCB0aGVuXG4gKiBgYWN0aW9ucy5waXBlKG9mVHlwZSgnYWRkJykpYCByZXR1cm5zIGFuIGBPYnNlcnZhYmxlPEFkZGl0aW9uQWN0aW9uPmAuXG4gKlxuICogUHJvcGVybHkgdHlwaW5nIHRoaXMgZnVuY3Rpb24gaXMgaGFyZCBhbmQgcmVxdWlyZXMgc29tZSBhZHZhbmNlZCBUUyB0cmlja3NcbiAqIGJlbG93LlxuICpcbiAqIFR5cGUgbmFycm93aW5nIGF1dG9tYXRpY2FsbHkgd29ya3MsIGFzIGxvbmcgYXMgeW91ciBgYWN0aW9uc2Agb2JqZWN0XG4gKiBzdGFydHMgd2l0aCBhIGBBY3Rpb25zPFNvbWVVbmlvbk9mQWN0aW9ucz5gIGluc3RlYWQgb2YgZ2VuZXJpYyBgQWN0aW9uc2AuXG4gKlxuICogRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB3aGVuIG9uZSBwYXNzZXMgYSBzaW5nbGUgdHlwZSBhcmd1bWVudFxuICogYG9mVHlwZTxUPignc29tZXRoaW5nJylgIHRoZSByZXN1bHQgaXMgYW4gYE9ic2VydmFibGU8VD5gLiBOb3RlLCB0aGF0IGBUYFxuICogY29tcGxldGVseSBvdmVycmlkZXMgYW55IHBvc3NpYmxlIGluZmVyZW5jZSBmcm9tICdzb21ldGhpbmcnLlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIGZvciB1bmtub3duICdhY3Rpb25zOiBBY3Rpb25zJyB0aGVzZSB0eXBlcyB3aWxsIHByb2R1Y2VcbiAqICdPYnNlcnZhYmxlPG5ldmVyPicuIEluIHN1Y2ggY2FzZXMgb25lIGhhcyB0byBtYW51YWxseSBzZXQgdGhlIGdlbmVyaWMgdHlwZVxuICogbGlrZSBgYWN0aW9ucy5vZlR5cGU8QWRkaXRpb25BY3Rpb24+KCdhZGQnKWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvZlR5cGU8XG4gIEUgZXh0ZW5kcyBFeHRyYWN0PFUsIHsgdHlwZTogVDEgfT4sXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBUMSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBVIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uLFxuICBWID0gVDEgZXh0ZW5kcyBzdHJpbmcgPyBFIDogUmV0dXJuVHlwZTxFeHRyYWN0PFQxLCBBQz4+XG4+KHQxOiBUMSk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfT4sXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBUMSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUMiBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBVIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uLFxuICBWID0gQWN0aW9uRXh0cmFjdG9yPFQxIHwgVDIsIEFDLCBFPlxuPih0MTogVDEsIHQyOiBUMik6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfCBUMyB9PixcbiAgQUMgZXh0ZW5kcyBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj4sXG4gIFQxIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFQyIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFQzIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFUgZXh0ZW5kcyBBY3Rpb24gPSBBY3Rpb24sXG4gIFYgPSBBY3Rpb25FeHRyYWN0b3I8VDEgfCBUMiB8IFQzLCBBQywgRT5cbj4odDE6IFQxLCB0MjogVDIsIHQzOiBUMyk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfCBUMyB8IFQ0IH0+LFxuICBBQyBleHRlbmRzIEFjdGlvbkNyZWF0b3I8c3RyaW5nLCBDcmVhdG9yPixcbiAgVDEgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVDIgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVDMgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVDQgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVSBleHRlbmRzIEFjdGlvbiA9IEFjdGlvbixcbiAgViA9IEFjdGlvbkV4dHJhY3RvcjxUMSB8IFQyIHwgVDMgfCBUNCwgQUMsIEU+XG4+KHQxOiBUMSwgdDI6IFQyLCB0MzogVDMsIHQ0OiBUNCk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBFIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfCBUMyB8IFQ0IHwgVDUgfT4sXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBUMSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUMiBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUMyBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUNCBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUNSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBVIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uLFxuICBWID0gQWN0aW9uRXh0cmFjdG9yPFQxIHwgVDIgfCBUMyB8IFQ0IHwgVDUsIEFDLCBFPlxuPih0MTogVDEsIHQyOiBUMiwgdDM6IFQzLCB0NDogVDQsIHQ1OiBUNSk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG4vKipcbiAqIEZhbGxiYWNrIGZvciBtb3JlIHRoYW4gNSBhcmd1bWVudHMuXG4gKiBUaGVyZSBpcyBubyBpbmZlcmVuY2UsIHNvIHRoZSByZXR1cm4gdHlwZSBpcyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgLVxuICogT2JzZXJ2YWJsZTxBY3Rpb24+LlxuICpcbiAqIFdlIHByb3ZpZGUgYSB0eXBlIHBhcmFtZXRlciwgZXZlbiB0aG91Z2ggVFMgd2lsbCBub3QgaW5mZXIgaXQgZnJvbSB0aGVcbiAqIGFyZ3VtZW50cywgdG8gcHJlc2VydmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBvbGQgdmVyc2lvbnMgb2YgbmdyeC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mVHlwZTxWIGV4dGVuZHMgQWN0aW9uPihcbiAgLi4uYWxsb3dlZFR5cGVzOiBBcnJheTxzdHJpbmcgfCBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj4+XG4pOiBPcGVyYXRvckZ1bmN0aW9uPEFjdGlvbiwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlKFxuICAuLi5hbGxvd2VkVHlwZXM6IEFycmF5PHN0cmluZyB8IEFjdGlvbkNyZWF0b3I8c3RyaW5nLCBDcmVhdG9yPj5cbik6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uLCBBY3Rpb24+IHtcbiAgcmV0dXJuIGZpbHRlcigoYWN0aW9uOiBBY3Rpb24pID0+XG4gICAgYWxsb3dlZFR5cGVzLnNvbWUodHlwZU9yQWN0aW9uQ3JlYXRvciA9PiB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVPckFjdGlvbkNyZWF0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIENvbXBhcmluZyB0aGUgc3RyaW5nIHRvIHR5cGVcbiAgICAgICAgcmV0dXJuIHR5cGVPckFjdGlvbkNyZWF0b3IgPT09IGFjdGlvbi50eXBlO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBhcmUgZmlsdGVyaW5nIGJ5IEFjdGlvbkNyZWF0b3JcbiAgICAgIHJldHVybiB0eXBlT3JBY3Rpb25DcmVhdG9yLnR5cGUgPT09IGFjdGlvbi50eXBlO1xuICAgIH0pXG4gICk7XG59XG4iXX0=