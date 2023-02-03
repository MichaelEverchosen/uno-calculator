import { createApp } from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "@/store/uno.js";
import lodash from "lodash";

import "@/assets/main.css";

window.lodash = lodash;

const app = createApp(App);

app.use(router);
app.use(Vuex);
app.use(store);

app.mount("#app");
