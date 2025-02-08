<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ChevronDown, Home, Lock, KeyRound, Settings } from 'lucide-vue-next'

const route = useRoute()
const expandedMenus = ref(new Set())

const toggleMenu = (menuId) => {
  if (expandedMenus.value.has(menuId)) {
    expandedMenus.value.delete(menuId)
  } else {
    expandedMenus.value.add(menuId)
  }
}

const menuItems = [
  {
    id: 'home',
    title: '首页',
    path: '/tools/home',
    icon: Home,
  },
  {
    id: 'crypto',
    title: '加解密',
    icon: KeyRound,
    children: [
      {
        title: '加密工具',
        path: '/tools/encrypt',
        icon: Lock,
      },
      {
        title: '解密工具',
        path: '/tools/decrypt',
        icon: Settings,
      },
    ],
  },
]
</script>

<template>
  <nav class="h-full w-full p-4 shadow-sm">
    <ul class="space-y-2">
      <li v-for="item in menuItems" :key="item.id || item.path" class="space-y-0.5">
        <!-- 一级菜单 -->
        <template v-if="item.children">
          <button
            @click="toggleMenu(item.id)"
            class="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent/80 hover:text-accent-foreground"
            :class="{
              'bg-accent/60': expandedMenus.has(item.id),
            }"
          >
            <div class="flex items-center gap-3">
              <component :is="item.icon" class="h-4 w-4" />
              <span>{{ item.title }}</span>
            </div>
            <ChevronDown
              class="h-4 w-4 transition-transform duration-200"
              :class="{ 'rotate-180': expandedMenus.has(item.id) }"
            />
          </button>
          <!-- 二级菜单 -->
          <ul
            v-show="expandedMenus.has(item.id)"
            class="mt-1 space-y-1 overflow-hidden transition-all duration-200 ease-in-out"
          >
            <li v-for="subItem in item.children" :key="subItem.path">
              <RouterLink
                :to="subItem.path"
                class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/40 hover:text-accent-foreground ml-2"
                :class="{
                  'bg-accent/40 text-accent-foreground font-medium': route.path === subItem.path,
                }"
              >
                <component :is="subItem.icon" class="h-3.5 w-3.5" />
                <span>{{ subItem.title }}</span>
              </RouterLink>
            </li>
          </ul>
        </template>
        <!-- 无子菜单的一级菜单 -->
        <RouterLink
          v-else
          :to="item.path"
          class="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent/80 hover:text-accent-foreground"
          :class="{
            'bg-accent text-accent-foreground': route.path === item.path,
          }"
        >
          <component :is="item.icon" class="h-4 w-4" />
          <span>{{ item.title }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
