<template>
  <div class="mention-view" ref="mentionViewRef">
    <InputView v-model="inputValue" type="textarea" @keydown="handleKeyDown" />
    <div v-show="isShowSelect" class="user-list" :style="styleSelect">
      <div
        v-for="(user, index) in filteredUsers"
        :key="user.value"
        class="user-item"
        :class="{ 'is-selected': index === selectedIndex }"
        @click="selectUser(user)"
      >
        {{ user.label }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, useTemplateRef } from 'vue'
import InputView from '@/views/components/input/index.vue'
defineOptions({ name: 'MentionView' })

interface User {
  value: string
  label: string
}

const inputValue = ref('')
const isShowSelect = ref(false)
const cursorPosition = ref({ x: 0, y: 0 })
const selectedIndex = ref(-1)
const mentionViewRef = useTemplateRef('mentionViewRef')

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === '@' || (event.code === 'Digit2' && event.shiftKey)) {
    cursorPosition.value.x = mentionViewRef.value?.offsetHeight || 0
    cursorPosition.value.y = 0
    // 获取光标位置
    isShowSelect.value = true
    selectedIndex.value = -1
  } else if (event.key === 'Escape') {
    // ESC键关闭弹框
    isShowSelect.value = false
    selectedIndex.value = -1
  } else if (isShowSelect.value) {
    // 键盘导航
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      selectedIndex.value = Math.min(selectedIndex.value + 1, filteredUsers.value.length - 1)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      selectedIndex.value = Math.max(selectedIndex.value - 1, -1)
    } else if (event.key === 'Enter' && selectedIndex.value >= 0) {
      event.preventDefault()
      selectUser(filteredUsers.value[selectedIndex.value])
    }
  }
}

const styleSelect = computed(() => ({
  position: 'absolute' as const,
  top: `${cursorPosition.value.x}px`,
  left: `${cursorPosition.value.y}px`,
  width: '100%',
  zIndex: 1000,
}))

const options = ref<User[]>([
  { value: '1', label: '张三' },
  { value: '2', label: '李四' },
  { value: '3', label: '王五' },
])

const filteredUsers = computed(() => {
  return options.value
})

const selectUser = (user: User) => {
  // 在光标位置插入用户名
  const target = document.querySelector('input') as HTMLInputElement
  if (target) {
    const cursorPos = target.selectionStart || 0
    const textBefore = inputValue.value.substring(0, cursorPos)
    const textAfter = inputValue.value.substring(cursorPos)

    // 找到最后一个@符号的位置
    const lastAtIndex = textBefore.lastIndexOf('@')
    if (lastAtIndex !== -1) {
      const newText = textBefore.substring(0, lastAtIndex) + `@${user.label} ` + textAfter
      inputValue.value = newText

      // 设置光标位置到插入的用户名后面
      setTimeout(() => {
        const newCursorPos = lastAtIndex + user.label.length + 2 // +2 for @ and space
        target.setSelectionRange(newCursorPos, newCursorPos)
        target.focus()
      }, 0)
    }
  }

  isShowSelect.value = false
}
</script>

<style scoped>
.mention-view {
  position: relative;
}

.user-list {
  background: white;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
}

.user-item {
  padding: 8px 12px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
}

.user-item:hover {
  background-color: #f5f7fa;
}

.user-item:last-child {
  border-bottom: none;
}

.user-item.is-selected {
  background-color: #e6f7ff;
  color: #1890ff;
}
</style>
