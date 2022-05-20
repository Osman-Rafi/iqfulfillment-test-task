import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/scss/app.scss";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./layout/DashboardLayout.vue"), // lazy loading,
      children: [
        {
          path: "",
          component: () => import("./views/Overview.vue"),
        },
        {
          path: "*",
          component: () => import("./views/404.vue"),
        },
      ],
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
