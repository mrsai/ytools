<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/layout/Header.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-gray-900 bg-gray-100;
}
</style>
