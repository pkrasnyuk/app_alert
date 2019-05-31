import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { ICounterState as CounterState } from "./types";
import { IRootState as RootState } from "../types";

export const state: CounterState = {
    counter: 0,
};

const namespaced: boolean = true;

export const counter: Module<CounterState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
