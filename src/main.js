import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/comm.less";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
