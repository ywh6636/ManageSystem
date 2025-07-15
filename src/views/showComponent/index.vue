<template>
  <div class="show-component">
    <h3>{{ inputValue }}</h3>
    <el-divider />
    <DynamicForm />
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'ShowComponent' })
import { ref } from 'vue'
import DynamicForm from '@/views/components/dynimacForm/index.vue'

// 响应式数据

const inputValue = ref('234234')
</script>

<style scoped>
/* 样式 */
</style>
