<script setup lang="ts">
import { withDefaults } from 'vue'
interface PropValues {
  width: string
}
withDefaults(defineProps<PropValues>(), {
  width: '300px'
})
</script>

<script lang="ts">
export default {
  name: 'ElAside'
}
</script>

<template>
  <aside class="el-aside" :style="{ width }">
    <slot />
  </aside>
</template>

<style scoped lang="scss">
@import '../styles/mixin';

@include b(aside) {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
