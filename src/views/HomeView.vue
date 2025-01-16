<script setup>
import ToolCard from '@/components/ToolCard.vue'
import { Calculator, Clock, Code, FileText, Hash, Image } from 'lucide-vue-next'

const tools = [
  {
    id: 1,
    icon: Calculator,
    title: '计算器',
    description: '简单的在线计算器，支持基本运算',
  },
  {
    id: 2,
    icon: Clock,
    title: '时间转换',
    description: '不同时区时间转换工具',
  },
  {
    id: 3,
    icon: Code,
    title: '代码格式化',
    description: '格式化多种编程语言代码',
  },
  {
    id: 4,
    icon: FileText,
    title: '文本处理',
    description: '文本大小写转换、去重等工具',
  },
  {
    id: 5,
    icon: Hash,
    title: '哈希生成',
    description: '生成MD5、SHA1等哈希值',
  },
  {
    id: 6,
    icon: Image,
    title: '图片处理',
    description: '图片压缩、格式转换等工具',
  },
]
</script>

<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-gray-900">常用工具</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ToolCard v-for="tool in tools" :key="tool.id">
        <template #icon>
          <component :is="tool.icon" class="w-5 h-5 text-gray-500" />
        </template>
        <template #title>{{ tool.title }}</template>
        <template #description>{{ tool.description }}</template>
      </ToolCard>
    </div>
  </div>
</template>
