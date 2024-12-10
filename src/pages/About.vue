<script setup lang="ts"></script>

<template>
  <div class="about">
    <h1>Наши разработчики</h1>
    <div class="photos">
      <img src="/razrab3.jpg" alt="" class="photo" />
      <img src="/razrab1.jpg" alt="" class="photo" />
      <img src="/razrab2.1.png" alt="" class="photo" />
    </div>
    <h1>Опущенный</h1>
    <img class="photo" src="/popusk.jpg" />
  </div>
</template>

<style scoped>
.about {
  max-width: 480px;
}

.photos {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.photo {
  width: 100px;
  height: 200px;
  object-fit: contain;
}
</style>
