<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout row wrap>
                <v-flex xs12>
                    <h1>Charts</h1>
                    <p>This is a simple example of a vue-chartjs</p>
                </v-flex>
                <v-flex xs4>
                    <LineChart :chart-data="lineChartData"></LineChart>
                    <v-btn color="info" @click="fillLineChartData()">Randomize LineChart</v-btn>
                </v-flex>
                <v-flex xs4>
                    <LineChart :chart-data="lineChartDataSecond" :options="lineChartOptionsSecond"></LineChart>
                </v-flex>
                <v-flex xs4>
                    <BarChart :chart-data="barChartData" :options="barChartOptions"></BarChart>
                </v-flex>
                <v-flex xs4>
                    <PieChart :chart-data="pieChartData" :options="pieChartOptions"></PieChart>
                </v-flex>
                <v-flex xs4>
                    <RadarChart :chart-data="radarChartData" :options="radarChartOptions"></RadarChart>
                </v-flex>
                <v-flex xs4>
                    <PolarAreaChart :chart-data="polarAreaChartData" :options="polarAreaChartOptions"></PolarAreaChart>
                </v-flex>
                <v-flex xs4>
                    <DoughnutChart :chart-data="doughnutChartData" :options="doughnutChartOptions"></DoughnutChart>
                </v-flex>
                <v-flex xs4>
                    <HorizontalBarChart :chart-data="horizontalBarChartData" :options="horizontalBarChartOptions"></HorizontalBarChart>
                </v-flex>
                <v-flex xs4>
                    <BubbleChart :chart-data="bubbleChartData" :options="bubbleChartOptions"></BubbleChart>
                </v-flex>
                <v-flex xs4>
                    <ScatterChart :chart-data="scatterChartData" :options="scatterChartOptions"></ScatterChart>
                    <v-btn color="info" @click="fillScatterChartData()">Randomize ScatterChart</v-btn>
                </v-flex>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>
<script lang="ts" src="./charts-view.ts"></script>
