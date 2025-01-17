<script setup>
defineOptions({
  name: 'TheHeader',
})
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { storage } from '@/lib/storage'
import { Button } from '@/components/ui/button'
import { Settings, Sun, Moon } from 'lucide-vue-next'

const isDark = ref(storage.local.get('theme') === 'dark')
const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  storage.local.set('theme', theme)
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  if (storage.local.get('theme') === 'dark') {
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <header class="shadow-sm sticky top-0 z-50 w-full border-b">
    <div class="h-14 mx-auto flex items-center justify-between px-10">
      <div class="flex items-center space-x-8">
        <!-- Logo -->
        <a href="/" class="font-bold"> Y . Tools </a>
        <!-- Main Navigation -->
        <nav class="flex space-x-6">
          <RouterLink to="/tools" class="text-sm font-medium text-gray-500 transition-colors">
            工具
          </RouterLink>
          <RouterLink to="/about" class="text-sm font-medium text-gray-500 transition-colors">
            关于
          </RouterLink>
        </nav>
      </div>

      <div class="flex items-center space-x-2">
        <!-- Theme Toggle -->
        <Button variant="ghost" size="sm" @click="toggleTheme">
          <Sun v-if="!isDark" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </Button>
        <!-- Settings -->
        <Button variant="ghost" size="sm">
          <Settings class="w-4 h-4" />
        </Button>
      </div>
    </div>
  </header>
</template>
<style scoped>
.router-link-active {
}
</style>
