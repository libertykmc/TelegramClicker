import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createMemoryHistory } from "vue-router";
import About from "./pages/About.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: "/about", component: About }],
});

createApp(App).use(router).mount("#app");
