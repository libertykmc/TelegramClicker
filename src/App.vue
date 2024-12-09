<template>
  <div class="app">
    <img src="./assets/photos//chill.jpg" alt="" class="photo" />
    <h1>Эй мужик, руби бабло!</h1>
    <p>Бабос: {{ count }}</p>
    <button @click="increment">Зарабатывать!</button>
    <nav class="app__nav">
      <a class="app__link" href="\">Home</a>
      <RouterLink class="app__link" to="/about">About</RouterLink>
    </nav>
    <main><RouterView /></main>

    <button v-if="isTelegram" @click="closeApp">Close App</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import { tg, initTelegram } from "./telegram";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    const count = ref<number>(parseInt(localStorage.getItem("count") || "0"));
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

    watch(count, (newCount) => {
      localStorage.setItem("count", newCount.toString());
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
.photo {
  width: 200px;
}

.app__nav {
  display: flex;
  gap: 30px;
  justify-content: center;
}
.app__link {
  text-decoration: none;
  color: inherit;
  font-size: 20px;
}
</style>
