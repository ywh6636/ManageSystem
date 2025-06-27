<template>
  <div>
    <el-dialog v-model="visible" title="Shipping address" width="500">
      <el-form :model="state.form">
        <el-form-item label="Promotion name">
          <el-input v-model="state.form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones">
          <el-select v-model="state.form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="onCancel">Cancel</el-button>
          <el-button type="primary" @click="onConfirm"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { visible, open, close } from './usePropsVisible'

defineOptions({ name: 'RegisterPage' })

const state = reactive<{
  form: {
    name?: string
    region?: string
  }
}>({
  form: {
    name: '',
    region: '',
  },
})

let resolve: (value?: typeof state.form) => void | undefined

const show = () => {
  open()

  return new Promise((res) => {
    resolve = res
  })
}

const onCancel = () => {
  close()
  resolve?.(undefined)
}

const onConfirm = () => {
  close()
  resolve?.(state.form)
}

defineExpose({
  show,
})
</script>

<style scoped>
/* 样式 */
</style>
