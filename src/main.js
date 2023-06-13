import Vue from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");

import "bootstrap/dist/js/bootstrap.js";
