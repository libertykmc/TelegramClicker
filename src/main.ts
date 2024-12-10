import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createMemoryHistory } from "vue-router";
import About from "./pages/About.vue";
import HomePage from "./pages/HomePage.vue";
import BonusPage from "./pages/Bonus.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: "/about", component: About },
    { path: "/", component: HomePage },
    { path: "/bonus", component: BonusPage },
  ],
});

createApp(App).use(router).mount("#app");
