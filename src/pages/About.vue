<script setup lang="ts"></script>

<template>
  <div class="about">
    <h1>About page</h1>
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
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>
