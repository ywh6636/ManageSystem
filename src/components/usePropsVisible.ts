import { ref } from 'vue'

const visible = ref<boolean>(false)

const open = () => {
  visible.value = true
}

const close = () => {
  visible.value = false
}

export { visible, open, close }
