import Vue from "vue";
import { Component } from "vue-property-decorator";
import BarChart from "@/components/graphs/bar-chart.ts";
import LineChart from "@/components/graphs/line-chart.ts";
import PieChart from "@/components/graphs/pie-chart.ts";
import RadarChart from "@/components/graphs/radar-chart.ts";
import PolarAreaChart from "@/components/graphs/polar-area-chart.ts";
import DoughnutChart from "@/components/graphs/doughnut-chart.ts";
import HorizontalBarChart from "@/components/graphs/horizontal-bar-chart.ts";
import BubbleChart from "@/components/graphs/bubble-chart.ts";
import ScatterChart from "@/components/graphs/scatter-chart.ts";

@Component({
    components: {
        BarChart,
        LineChart,
        PieChart,
        RadarChart,
        PolarAreaChart,
        DoughnutChart,
        HorizontalBarChart,
        BubbleChart,
        ScatterChart
    }
})
export default class ChartsView extends Vue {

    public lineChartData: any = {};

    public lineChartDataSecond: any = {};
    public lineChartOptionsSecond: any = {};

    public barChartData: any = {};
    public barChartOptions: any = {};

    public pieChartData: any = {};
    public pieChartOptions: any = {};

    public radarChartData: any = {};
    public radarChartOptions: any = {};

    public polarAreaChartData: any = {};
    public polarAreaChartOptions: any = {};

    public doughnutChartData: any = {};
    public doughnutChartOptions: any = {};

    public horizontalBarChartData: any = {};
    public horizontalBarChartOptions: any = {};

    public bubbleChartData: any = {};
    public bubbleChartOptions: any = {};

    public scatterChartData: any = {};
    public scatterChartOptions: any = {};

    public mounted() {
        this.fillLineChartData();
        this.fillLineChartSecondData();
        this.fillBarChartData();
        this.fillPieChartData();
        this.fillRadarChartData();
        this.fillPolarAreaChartData();
        this.fillDoughnutChartData();
        this.fillHorizontalBarChartData();
        this.fillBubbleChartData();
        this.fillScatterChartData();
    }

    public fillLineChartData() {
        this.lineChartData = {
            labels: [this.getRandomInt(), this.getRandomInt()],
            datasets: [
                {
                    label: "Data First",
                    backgroundColor: "#0000FF",
                    data: [this.getRandomInt(), this.getRandomInt()]
                }, {
                    label: "Data Second",
                    backgroundColor: "#FFFF00",
                    data: [this.getRandomInt(), this.getRandomInt()]
                }
            ]
        };
    }

    public fillLineChartSecondData() {
        this.lineChartDataSecond = {
            labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                label: "Asia",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                label: "Europe",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                label: "Latin America",
                borderColor: "#e8c3b9",
                fill: false
            }, {
                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                label: "North America",
                borderColor: "#c45850",
                fill: false
            }
            ]
        };
        this.lineChartOptionsSecond = {
            title: {
                display: true,
                text: "World population per region (in millions)"
            }
        };
    }

    public fillBarChartData() {
        this.barChartData = {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [2478, 5267, 734, 784, 433]
                }
            ]
        };
        this.barChartOptions = {
            legend: { display: false },
            title: {
                display: true,
                text: "Predicted world population (millions) in 2050"
            }
        };
    }

    public fillPieChartData() {
        this.pieChartData = {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [2478, 5267, 734, 784, 433]
            }]
        };
        this.pieChartOptions = {
            title: {
                display: true,
                text: "Predicted world population (millions) in 2050"
            }
        };
    }

    public fillRadarChartData() {
        this.radarChartData = {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                    label: "1950",
                    fill: true,
                    backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    data: [8.77, 55.61, 21.69, 6.62, 6.82]
                }, {
                    label: "2050",
                    fill: true,
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    data: [25.48, 54.16, 7.61, 8.06, 4.45]
                }
            ]
        };
        this.radarChartOptions = {
            title: {
                display: true,
                text: "Distribution in % of world population"
            }
        };
    }

    public fillPolarAreaChartData() {
        this.polarAreaChartData = {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [2478, 5267, 734, 784, 433]
                }
            ]
        };
        this.polarAreaChartOptions = {
            title: {
                display: true,
                text: "Predicted world population (millions) in 2050"
            }
        };
    }

    public fillDoughnutChartData() {
        this.doughnutChartData = {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [2478, 5267, 734, 784, 433]
                }
            ]
        };
        this.doughnutChartOptions = {
            title: {
                display: true,
                text: "Predicted world population (millions) in 2050"
            }
        };
    }

    public fillHorizontalBarChartData() {
        this.horizontalBarChartData = {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [2478, 5267, 734, 784, 433]
                }
            ]
        };
        this.horizontalBarChartOptions = {
            legend: { display: false },
            title: {
                display: true,
                text: "Predicted world population (millions) in 2050"
            }
        };
    }

    public fillScatterChartData() {
        this.scatterChartData = {
            datasets: [{
                label: "First dataset",
                borderColor: "#00FF00",
                backgroundColor: "#FFF",
                data: this.generateScatterChartData()
            }, {
                label: "Second dataset",
                borderColor: "#0000FF",
                backgroundColor: "#FFF",
                data: this.generateScatterChartData()
            }]
        };
        this.scatterChartOptions = {
            title: {
                display: true,
                text: "Scatter Chart"
            },
            scales: {
                xAxes: [{
                    ticks: {
                        max: 100,
                        min: -100,
                        stepSize: 20
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 100,
                        min: -100,
                        stepSize: 20
                    }
                }]
            }
        };
    }

    public fillBubbleChartData() {
        this.bubbleChartData = {
            labels: "Africa",
            datasets: [
                {
                    label: ["China"],
                    backgroundColor: "rgba(255,221,50,0.2)",
                    borderColor: "rgba(255,221,50,1)",
                    data: [{
                        x: 21269017,
                        y: 5.245,
                        r: 15
                    }]
                }, {
                    label: ["Denmark"],
                    backgroundColor: "rgba(60,186,159,0.2)",
                    borderColor: "rgba(60,186,159,1)",
                    data: [{
                        x: 258702,
                        y: 7.526,
                        r: 10
                    }]
                }, {
                    label: ["Germany"],
                    backgroundColor: "rgba(0,0,0,0.2)",
                    borderColor: "#000",
                    data: [{
                        x: 3979083,
                        y: 6.994,
                        r: 15
                    }]
                }, {
                    label: ["Japan"],
                    backgroundColor: "rgba(193,46,12,0.2)",
                    borderColor: "rgba(193,46,12,1)",
                    data: [{
                        x: 4931877,
                        y: 5.921,
                        r: 15
                    }]
                }
            ]
        };
        this.bubbleChartOptions = {
            title: {
                display: true,
                text: "Predicted world population (millions) in 2050"
            }, scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Happiness"
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "GDP (PPP)"
                    }
                }]
            }
        };
    }

    private getRandomInt() {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }

    private randomScalingFactor() {
        return Math.round(-100 + 200 * Math.random());
    }

    private generateScatterChartData() {
        const data = [];
        for (let i = 0; i < 7; i++) {
            data.push({
                x: this.randomScalingFactor(),
                y: this.randomScalingFactor()
            });
        }
        return data;
    }
}
