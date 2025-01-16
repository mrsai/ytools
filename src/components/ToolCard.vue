<script setup>
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-4">
        <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
          <slot name="icon"></slot>
        </div>
        <h3 class="text-lg font-medium text-gray-900">
          <slot name="title"></slot>
        </h3>
      </div>
      <Button size="sm">使用</Button>
    </div>
    <p class="text-sm text-gray-500">
      <slot name="description"></slot>
    </p>
  </div>
</template>
