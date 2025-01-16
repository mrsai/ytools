<script setup>
defineOptions({
  name: 'TheHeader',
})
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-vue-next'
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center space-x-8">
        <!-- Logo -->
        <RouterLink to="/" class="text-xl font-bold text-gray-800"> yTools </RouterLink>

        <!-- Main Navigation -->
        <nav class="flex space-x-6">
          <RouterLink
            to="/tools"
            class="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            工具
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            关于
          </RouterLink>
        </nav>
      </div>

      <!-- Settings -->
      <Button variant="ghost" size="sm" class="text-gray-500 hover:bg-gray-50">
        <Settings class="w-4 h-4" />
      </Button>
    </div>
  </header>
</template>
<style scoped>
.router-link-active {
  @apply text-gray-900 bg-gray-100;
}
</style>
