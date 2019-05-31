import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
    private clipped: boolean = true;
    private drawer: boolean = true;
    private miniVariant: boolean = false;
    private right: boolean = true;
    private title: string = "TestAlert";
    private items = [
        { title: "Home", icon: "home", link: "/" },
        { title: "Counter", icon: "touch_app", link: "/counter" },
        { title: "Fetch data", icon: "get_app", link: "/fetch-data" },
        { title: "Charts", icon: "timeline", link: "/charts" }
    ];
}
