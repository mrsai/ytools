<script setup>
import { Code, Cpu, Package, Settings } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-900">关于 Y.Tools</h1>

    <div class="prose max-w-none">
      <p>Y.Tools 是一个开源的在线工具集合，旨在为用户提供便捷的日常工具服务。</p>
      <p>
        虽然Y.Tools
        是一个网络在线工具，但是所有的服务并不会上传任何数据，完全是使用本地计算机的计算能力来实现的功能。
      </p>
      <p>尽量采用了 WASM 来提高计算的能力</p>
      <p>如果有什么特殊需求，请告知我。使用网络或者服务器处理能力的除外。</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <div class="flex items-center space-x-4">
          <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <Code class="w-5 h-5 text-gray-500" />
          </div>
          <h3 class="text-lg font-medium text-gray-900">技术栈</h3>
        </div>
        <p class="mt-4 text-sm text-gray-500">Vue 3, Vite, Tailwind CSS, Radix Vue，WASM</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm">
        <div class="flex items-center space-x-4">
          <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <Cpu class="w-5 h-5 text-gray-500" />
          </div>
          <h3 class="text-lg font-medium text-gray-900">性能</h3>
        </div>
        <p class="mt-4 text-sm text-gray-500">基于 Vite 构建，快速加载，响应迅速</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm">
        <div class="flex items-center space-x-4">
          <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <Package class="w-5 h-5 text-gray-500" />
          </div>
          <h3 class="text-lg font-medium text-gray-900">开源</h3>
        </div>
        <p class="mt-4 text-sm text-gray-500">项目完全开源，欢迎贡献代码</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm">
        <div class="flex items-center space-x-4">
          <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <Settings class="w-5 h-5 text-gray-500" />
          </div>
          <h3 class="text-lg font-medium text-gray-900">持续更新</h3>
        </div>
        <p class="mt-4 text-sm text-gray-500">定期添加新工具，优化现有功能</p>
      </div>
    </div>
  </div>
</template>
