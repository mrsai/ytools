<script setup>
import { ref } from 'vue'

const inputText = ref('')
const decryptedText = ref('')

const handleDecrypt = () => {
  // TODO: 实现解密逻辑
  try {
    decryptedText.value = atob(inputText.value)
  } catch (error) {
    decryptedText.value = '解密失败：输入格式不正确'
  }
}
</script>

<template>
  <div class="space-y-4">
    <h3 class="text-xl font-semibold text-gray-900">解密工具</h3>

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
          placeholder="请输入要解密的文本"
        ></textarea>
      </div>

      <div>
        <label for="decrypted-text" class="block text-sm font-medium text-gray-700 mb-2"
          >解密结果</label
        >
        <textarea
          id="decrypted-text"
          v-model="decryptedText"
          class="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          rows="5"
          readonly
        ></textarea>
      </div>
    </div>

    <button
      @click="handleDecrypt"
      class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      解密
    </button>
  </div>
</template>
