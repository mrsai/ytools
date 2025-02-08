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
  <header
    class="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
  >
    <div class="h-14 mx-auto flex items-center justify-between px-6">
      <div class="flex items-center space-x-8">
        <!-- Logo -->
        <a
          href="/"
          class="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Y . Tools
        </a>
        <!-- Main Navigation -->
        <nav class="flex space-x-6">
          <RouterLink
            to="/tools"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            工具
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            关于
          </RouterLink>
          <RouterLink
            to="/test"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            测试
          </RouterLink>
        </nav>
      </div>

      <div class="flex items-center space-x-2">
        <!-- Theme Toggle -->
        <Button
          variant="ghost"
          size="icon"
          @click="toggleTheme"
          class="hover:bg-primary/10 hover:text-primary"
        >
          <Sun v-if="!isDark" class="h-[1.2rem] w-[1.2rem]" />
          <Moon v-else class="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <!-- Settings -->
        <Button variant="ghost" size="icon" class="hover:bg-primary/10 hover:text-primary">
          <Settings class="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>
    </div>
  </header>
</template>
<style scoped>
.router-link-active {
}
</style>
