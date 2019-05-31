import { MutationTree } from "vuex";
import { ICounterState as CounterState } from "./types";

export const mutations: MutationTree<CounterState> = {
    incrementCounter(state) {
        state.counter++;
    },

    decrementCounter(state) {
        state.counter--;
    },

    resetCounter(state) {
        state.counter = 0;
    },
};
