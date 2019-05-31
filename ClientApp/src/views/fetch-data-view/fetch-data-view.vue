<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>

                <v-data-table :headers="headers"
                              :items="forecasts"
                              hide-actions
                              :loading="loading"
                              class="elevation-1">
                    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.dateFormatted }}</td>
                        <td>{{ props.item.temperatureC }}</td>
                        <td>{{ props.item.temperatureF }}</td>
                        <td>{{ props.item.summary }}</td>
                    </template>
                </v-data-table>

            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>
<script lang="ts" src="./fetch-data-view.ts"></script>