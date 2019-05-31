import "@babel/polyfill";
import Vue from "vue";
import "./plugins/axios";
import "./plugins/vuetify";
import App from "./app.vue";
import router from "./router";
import store from "@/store/index";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount("#app");
