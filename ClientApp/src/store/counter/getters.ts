import { GetterTree } from "vuex";
import { ICounterState as CounterState } from "./types";
import { IRootState as RootState } from "../types";

export const getters: GetterTree<CounterState, RootState> = {
    currentCount(state): number {
        return state.counter;
    },
};
