import Vue from "vue";
import { Component } from "vue-property-decorator";
import HomeComponent from "@/components/home-component/home-component.vue";

@Component({
    components: {
        HomeComponent,
    },
})
export default class HomeView extends Vue {
}
