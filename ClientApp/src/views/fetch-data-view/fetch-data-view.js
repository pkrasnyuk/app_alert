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
var axios_1 = require("axios");
var FetchDataView = /** @class */ (function (_super) {
    __extends(FetchDataView, _super);
    function FetchDataView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = true;
        _this.forecasts = [];
        _this.headers = [
            { text: "Date", value: "dateFormatted" },
            { text: "Temp. (C)", value: "temperatureC" },
            { text: "Temp. (F)", value: "temperatureF" },
            { text: "Summary", value: "summary" }
        ];
        return _this;
    }
    FetchDataView.prototype.created = function () {
        this.fetchWeatherForecasts();
    };
    FetchDataView.prototype.fetchWeatherForecasts = function () {
        var _this = this;
        axios_1.default.get("api/SampleData/WeatherForecasts")
            .then(function (response) {
            _this.forecasts = response.data;
            _this.loading = false;
        });
    };
    FetchDataView = __decorate([
        vue_property_decorator_1.Component({})
    ], FetchDataView);
    return FetchDataView;
}(vue_1.default));
exports.default = FetchDataView;
//# sourceMappingURL=fetch-data-view.js.map