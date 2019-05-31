<template>
    <div>
        <blockquote>
            &#8220;{{ quote }}&#8221;
            <footer>
                <small>
                    <em>&mdash;{{ author }}</em>
                </small>
            </footer>
        </blockquote>
    </div>
</template>

<script lang="ts" src="./home-component.ts"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped src="./home-component.css"></style>