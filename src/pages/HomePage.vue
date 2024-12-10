<template>
  <div class="app">
    <h1>Зарабатывайте и развивайтесь!</h1>
    <button @click="increment"><img src="/icon.png" class="photo" /></button>
    <p class="text">На счету: {{ count }}$</p>
  </div>
</template>

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

.text {
  font-size: 24px;
  font-weight: 700;
}
</style>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { tg, initTelegram } from "../telegram";
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
