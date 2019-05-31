import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/home-view/home-view.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/counter",
            name: "counter",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "counter" */ "./views/counter-view/counter-view.vue"),
        },
        {
            path: "/fetch-data",
            name: "fetch-data",
            component: () => import(/* webpackChunkName: "fetch-data" */ "./views/fetch-data-view/fetch-data-view.vue"),
        },
        {
            path: "/charts",
            name: "charts",
            component: () => import(/* webpackChunkName: "charts" */ "./views/charts-view/charts-view.vue"),
        }
    ],
});
