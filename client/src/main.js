// import { createApp } from "vue";
// import { createPinia } from "pinia";

// import App from "./App.vue";
// import router from "./router";

// import "./assets/main.scss";

// const app = createApp(App);

// app.use(createPinia());
// app.use(router);

// app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";

// Ajout du store
import { createPinia } from "pinia";
import { useStore } from "./stores/stores.js";

const app = createApp(App);

app.use(router);

// Ajout du store
app.use(createPinia());
app.provide("store", useStore());

app.mount("#app");
