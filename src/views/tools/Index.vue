<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="flex-1">
    <div class="mx-auto px-4 py-6 flex">
      <!-- Sidebar -->
      <aside class="w-64 pr-6 border-r border-gray-200">
        <nav class="space-y-1">
          <RouterLink
            to="/tools/encrypt"
            class="text-sm font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            加密
          </RouterLink>
          <RouterLink
            to="/tools/decrypt"
            class="text-sm font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            解密
          </RouterLink>
        </nav>
      </aside>

      <!-- Page Content -->
      <div class="flex-1">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
