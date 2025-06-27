// 枚举

import { ref } from 'vue'

const tabName = ref<'label' | 'packge' | 'pl label'>('label')

tabName.value = 'hello'

console.log(typeof tabName.value)
