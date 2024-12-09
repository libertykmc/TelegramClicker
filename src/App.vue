<template>
  <div class="app">
    <main><RouterView /></main>
    <nav class="app__nav">
      <RouterLink class="app__link" to="/">Home</RouterLink>   
      <RouterLink class="app__link" to="/about">About</RouterLink>
    </nav>
    

    <button v-if="isTelegram" @click="closeApp">Close App</button>
  </div>
</template>





<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { tg, initTelegram } from "./telegram";
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
