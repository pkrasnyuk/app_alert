import { ActionTree } from "vuex";
import { ICounterState as CounterState } from "./types";
import { IRootState as RootState } from "../types";

export const actions: ActionTree<CounterState, RootState> = {
    increment({ commit }): any {
        commit("incrementCounter");
    },

    decrement({ commit }): any {
        commit("decrementCounter");
    },

    reset({ commit }): any {
        commit("resetCounter");
    },
};
