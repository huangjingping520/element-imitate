<script setup lang="ts">
import type { PropType } from 'vue'
import { provide, ref } from 'vue'
import type { Rules } from 'async-validator'
import { emitter } from '../../emitter'
import type { FormItem } from './type'
import { key } from './type'

const props = defineProps({
  model: {
    type: Object,
    required: true
  },
  rules: {
    type: Object as PropType<Rules>
  }
})

provide(key, {
  model: props.model,
  rules: props.rules
})

const items = ref<FormItem[]>([])

emitter.on('addFormItem', item => items.value.push(item))

function validate(cb: (isValid: boolean) => void) {
  const tasks = items.value.map(item => item.validate())
  Promise.all(tasks).then(() => { cb(true) }).catch(() => { cb(false) })
}

defineExpose({
  validate
})
</script>

<script lang="ts">
export default {
  name: 'ElForm'
}
</script>

<template>
  <div class="el-form">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import '../styles/mixin';

@include b(form) {
  margin-top: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
}
</style>
