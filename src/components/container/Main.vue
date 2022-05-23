<script setup lang="ts">

</script>

<script lang="ts">
export default {
  name: 'ElMain'
}
</script>

<template>
  <main class="el-main">
    <slot />
  </main>
</template>

<style scoped lang="scss">
@import '../styles/mixin';

@include b(main) {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: $--main-padding;
}
</style>
