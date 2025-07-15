import type { PropType } from 'vue'

export interface DynamicFormItemType {
  prop: string
  label: string
  type: string
  options?: { label: string; value: unknown }[]
  $type?: string
  $placeholder?: string
  [key: string]: unknown
}

export const DynamicFormItem = {
  modelValue: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  prop: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: false,
  },
  'label-position': {
    type: String as PropType<'left' | 'right' | 'top'>,
    default: 'right',
  },
}
