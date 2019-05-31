<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column>
                <h1>Counter</h1>
                <p>This is a simple example of a Vue.js component integrated with Vuex</p>
                <CounterComponent />
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>
<script lang="ts" src="./counter-view.ts"></script>