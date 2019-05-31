import Vue from "vue";
import { Component } from "vue-property-decorator";
import CounterComponent from "@/components/counter-component/counter-component.vue";

@Component({
    components: { CounterComponent },
})
export default class CounterView extends Vue {
}
