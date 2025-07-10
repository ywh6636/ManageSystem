import type { PropType } from 'vue'

export type InputType = string | number

export type InputTypeEnum = 'text' | 'password' | 'number' | 'email' | 'tel' | 'textarea'

export const inputProps = {
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<InputTypeEnum>,
    default: 'text',
  },
}

export const inputEmit = {
  'update:modelValue': (value: InputType): void => {},
  change: (value: InputType): void => {},
  input: (value: InputType): void => {},
}
