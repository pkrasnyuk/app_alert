import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

const namespace: string = "counter";

@Component({})
export default class CounterComponent extends Vue {

    @Getter("currentCount", { namespace })
    private currentCount: number | undefined;

    @Action("increment", { namespace })
    private incrementCounter: any;

    @Action("decrement", { namespace })
    private decrementCounter: any;

    @Action("reset", { namespace })
    private resetCounter: any;

    private increment() {
        this.incrementCounter();
    }

    private decrement() {
        this.decrementCounter();
    }

    private reset() {
        this.resetCounter();
    }
}
