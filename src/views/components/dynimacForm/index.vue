<template>
  <div class="dynamic-form">
    <el-form :model="dynamicForm" label-width="120px" v-bind="formAttrs" :rules="rules">
      <template v-if="formItems.length > 0">
        <el-form-item
          :label="item.label"
          v-for="item in formItems"
          :key="item.prop"
          :prop="item.prop"
        >
          <component
            :is="item.type ?? 'el-input'"
            v-model="dynamicForm[item.prop]"
            v-bind="{
              ...getComponentAttrs(item),
              ...getComponentProps(item),
            }"
          >
            <template
              v-if="['el-select', 'el-checkbox-group', 'el-radio-group'].includes(item.type)"
            >
              <component
                :is="componentMap[item.type]"
                v-for="option in item.options"
                :key="option.value"
                v-bind="option"
              ></component>
            </template>
          </component>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { type DynamicFormItemType, DynamicFormItem } from './index'
import { pick } from 'lodash'

defineOptions({ name: 'DynamicForm' })

const props = defineProps(DynamicFormItem)

const formAttrs = computed(() => {
  return pick(props, ['label-position'])
})

const rules = computed(() => {
  return pick(props, ['rules'])
})

const componentMap: Record<string, string> = {
  'el-select': 'el-option',
  'el-checkbox-group': 'el-checkbox',
  'el-radio-group': 'el-radio',
}

const dynamicForm = ref(props.modelValue || {})

const formItems = ref<DynamicFormItemType[]>([
  {
    prop: 'name',
    label: '姓名',
    type: 'el-input',
  },
  {
    prop: 'age',
    label: '年龄',
    type: 'el-input-number',
  },
  {
    prop: 'sex',
    label: '性别',
    type: 'el-select',
    options: [
      {
        label: '男',
        value: 1,
      },
      {
        label: '女',
        value: 2,
      },
    ],
  },
  {
    prop: 'date',
    label: '日期',
    type: 'el-date-picker',
  },
  {
    prop: 'isShow',
    label: '是否显示',
    type: 'el-switch',
  },
  {
    prop: 'checkbox',
    label: '复选框',
    type: 'el-checkbox-group',
    options: [
      {
        label: '选项1',
        value: 1,
      },
      {
        label: '选项2',
        value: 2,
      },
      {
        label: '选项3',
        value: 3,
      },
      {
        label: '选项4',
        value: 4,
      },
    ],
  },
  {
    prop: 'radio',
    label: '单选框',
    type: 'el-radio-group',
    options: [
      {
        label: '选项1',
        value: 1,
      },
      {
        label: '选项2',
        value: 2,
      },
    ],
  },
  {
    prop: 'comment',
    label: '评论',
    type: 'el-input',
    $type: 'textarea',
    $placeholder: '请输入评论',
  },
])

// 获取组件透传属性，并去掉$符号
const getComponentAttrs = (attrs: Record<string, unknown>) => {
  // 筛选出key有$符号的属性
  const $attrs = Object.keys(attrs).filter((key) => key.startsWith('$'))

  // 判断$type是否存在
  if ($attrs.length === 0) {
    return {}
  }

  // 去掉$符号
  const $attrsObj = $attrs.reduce(
    (acc, key) => {
      acc[key.slice(1)] = attrs[key]
      return acc
    },
    {} as Record<string, unknown>,
  )

  return $attrsObj
}

// 获取组件的默认属性
const getComponentProps = (props: Record<string, unknown>) => {
  // 获取prop中默认属性 不带 $ 符号的属性
  const propsObj: Record<string, unknown> = {}
  // 设置placeholder属性
  if (['el-input', 'el-select', 'el-date-picker'].includes(props.type as string)) {
    propsObj.placeholder = `请输入${props.label}`
  }
  return propsObj
}
</script>

<style scoped>
/* 样式 */
</style>
