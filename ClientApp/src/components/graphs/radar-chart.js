"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_chartjs_1 = require("vue-chartjs");
exports.default = {
    "extends": vue_chartjs_1.Radar,
    mixins: [vue_chartjs_1.mixins.reactiveProp],
    props: ["chartData", "options"],
    mounted: function () {
        this.renderChart(this.chartData, this.options);
    }
};
//# sourceMappingURL=radar-chart.js.map