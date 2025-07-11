<template>
  <div class="input-view">
    <input
      :type="type"
      v-model="inputValue"
      @keydown="handleKeydown"
      @input="handleInput"
      @change="handleChange"
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { inputProps, inputEmit } from './index'

// 修复 defineProps 类型不兼容问题
const props = defineProps(inputProps)

// defineEmits 直接传入事件数组或对象
const emit = defineEmits(inputEmit)

defineOptions({ name: 'InputView' })

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

// 事件处理函数 - 正确传递 $event
const handleKeydown = (event: KeyboardEvent) => {
  // 传递事件给父组件
  emit('keydown', event)
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('input', target.value)
}

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('change', target.value)
}
</script>

<style scoped lang="scss">
.input-view {
  input {
    height: 30px;
    width: 100%;
    outline: none;
    border: 1px solid #dcdfe6;
    padding: 1px 11px;
    border-radius: 4px;
  }
}
</style>
