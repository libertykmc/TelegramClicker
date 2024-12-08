<template>
  <div class="app">
    <h1>Привет ишак</h1>
    <p>Clicks: {{ count }}</p>
    <button @click="increment">Click Me!</button>
    <button v-if="isTelegram" @click="closeApp">Close App</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { tg, initTelegram } from "./telegram";

export default defineComponent({
  name: "App",
  setup() {
    const count = ref(0);
    const isTelegram = ref(!!tg);

    const increment = () => {
      count.value++;
    };

    const closeApp = () => {
      if (tg) tg.close();
    };

    onMounted(() => {
      initTelegram();
      if (tg) {
        tg.MainButton.text = "Start Clicking!";
        tg.MainButton.show();
      }
    });

    return { count, increment, closeApp, isTelegram };
  },
});
</script>

<style>
.app {
  text-align: center;
  margin-top: 20vh;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
}
</style>
