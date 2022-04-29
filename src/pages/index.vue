<script setup lang="ts">
function formatIndex(index: number) {
  if (index < 10)
    return `0${index}`
  return index
}
</script>

<template>
  <ul>
    <li v-for="item in 10" :key="item" font-mono text-2xl py-2>
      <span hover-opacity-80 cursor-pointer>
        <span italic>{{ formatIndex(item) }}</span> <span>算法</span>
      </span>
    </li>
  </ul>
</template>
<style scoped>
</style>
