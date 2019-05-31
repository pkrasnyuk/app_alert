"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_property_decorator_1 = require("vue-property-decorator");
var vuex_class_1 = require("vuex-class");
var namespace = "counter";
var CounterComponent = /** @class */ (function (_super) {
    __extends(CounterComponent, _super);
    function CounterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CounterComponent.prototype.increment = function () {
        this.incrementCounter();
    };
    CounterComponent.prototype.decrement = function () {
        this.decrementCounter();
    };
    CounterComponent.prototype.reset = function () {
        this.resetCounter();
    };
    __decorate([
        vuex_class_1.Getter("currentCount", { namespace: namespace })
    ], CounterComponent.prototype, "currentCount", void 0);
    __decorate([
        vuex_class_1.Action("increment", { namespace: namespace })
    ], CounterComponent.prototype, "incrementCounter", void 0);
    __decorate([
        vuex_class_1.Action("decrement", { namespace: namespace })
    ], CounterComponent.prototype, "decrementCounter", void 0);
    __decorate([
        vuex_class_1.Action("reset", { namespace: namespace })
    ], CounterComponent.prototype, "resetCounter", void 0);
    CounterComponent = __decorate([
        vue_property_decorator_1.Component({})
    ], CounterComponent);
    return CounterComponent;
}(vue_1.default));
exports.default = CounterComponent;
//# sourceMappingURL=counter-component.js.map