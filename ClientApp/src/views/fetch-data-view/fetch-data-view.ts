import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Forecast } from "./models/Forecast";
import axios from "axios";

@Component({})
export default class FetchDataView extends Vue {
    private loading: boolean = true;
    private forecasts: Forecast[] = [];
    private headers = [
        { text: "Date", value: "dateFormatted" },
        { text: "Temp. (C)", value: "temperatureC" },
        { text: "Temp. (F)", value: "temperatureF" },
        { text: "Summary", value: "summary" }
    ];

    private created() {
        this.fetchWeatherForecasts();
    }

    private fetchWeatherForecasts() {
        axios.get<Forecast[]>("api/SampleData/WeatherForecasts")
            .then((response) => {
                this.forecasts = response.data;
                this.loading = false;
            });
    }
}
