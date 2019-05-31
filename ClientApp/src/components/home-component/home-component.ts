import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class HomeComponent extends Vue {

    @Prop() public quote: string;

    @Prop() public author: string;
}
