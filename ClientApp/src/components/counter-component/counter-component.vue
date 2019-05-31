<template>
    <div>
        <p>
            Current count (Vuex):
            <strong>{{ currentCount }}</strong>
        </p>
        <v-btn color="info" @click.prevent="increment">Increment</v-btn>
        <v-btn color="info" @click.prevent="decrement">Decrement</v-btn>
        <v-btn color="info" @click.prevent="reset">Reset</v-btn>
    </div>
</template>
<script lang="ts" src="./counter-component.ts"></script>