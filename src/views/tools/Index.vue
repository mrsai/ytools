<script setup>
import { RouterView } from 'vue-router'
import Sidebar from '@/components/layout/Sidebar.vue'
</script>

<template>
  <main class="flex-1">
    <div class="mx-auto py-6 flex">
      <!-- Sidebar -->
      <aside class="w-64 pr-6">
        <Sidebar />
      </aside>

      <!-- Page Content -->
      <div class="flex-1">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
