<template>
  <div class="mention-view">
    <InputView v-model="inputValue" type="textarea" @input="input" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import InputView from '@/views/components/input/index.vue'
import { type InputType } from '@/views/components/input/index'
defineOptions({ name: 'MentionView' })

const inputValue = ref('')

const input = (value: InputType) => {
  // 检测 @ 符号
  const atSymbolRegex = /@/g
  const hasAtSymbol = atSymbolRegex.test(value as string)
  console.log(hasAtSymbol)
}

// 响应式数据
</script>

<style scoped>
/* 样式 */
</style>
