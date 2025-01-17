<script setup>
import { ref } from 'vue'

const inputText = ref('')
const encryptedText = ref('')

const handleEncrypt = () => {
  // TODO: 实现加密逻辑
  encryptedText.value = btoa(inputText.value)
}
</script>

<template>
  <div class="space-y-4">
    <h3 class="text-xl font-semibold text-gray-900">加密工具</h3>

    <div class="grid grid-cols-2 gap-6">
      <div>
        <label for="input-text" class="block text-sm font-medium text-gray-700 mb-2"
          >输入文本</label
        >
        <textarea
          id="input-text"
          v-model="inputText"
          class="w-full p-2 border border-gray-300 rounded-md"
          rows="5"
          placeholder="请输入要加密的文本"
        ></textarea>
      </div>

      <div>
        <label for="encrypted-text" class="block text-sm font-medium text-gray-700 mb-2"
          >加密结果</label
        >
        <textarea
          id="encrypted-text"
          v-model="encryptedText"
          class="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          rows="5"
          readonly
        ></textarea>
      </div>
    </div>

    <button
      @click="handleEncrypt"
      class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      加密
    </button>
  </div>
</template>
