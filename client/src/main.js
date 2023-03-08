import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";

import { createPinia } from "pinia";
import { useStore } from "./stores/stores.js";

const app = createApp(App);

app.use(router);

// Adds store
app.use(createPinia());
app.provide("store", useStore());

app.mount("#app");
