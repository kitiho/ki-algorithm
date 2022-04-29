<script setup lang="ts">
import { catalogue } from '~/constants'
function formatIndex(index: number) {
  if (index < 10)
    return `0${index}`
  return index
}
const router = useRouter()
function pushTo(item) {
  router.push(item.englishName)
  useTitle(item.englishName)
}
</script>

<template>
  <ul px-30px>
    <li
      v-for="(item, index) in catalogue" :key="item.name" font-mono text-2xl py-2 cursor-pointer flex="~"
      class="group" @click="pushTo(item)"
    >
      <span italic mr-4>{{ formatIndex(index + 1) }}</span>
      <div flex="~" flex-col>
        <span text-left mb-1>{{ item.name }} {{ item.englishName }}</span>
        <div text-sm opacity-0 group-hover:opacity-100 transition>
          {{ item.desc }}
        </div>
      </div>
    </li>
  </ul>
</template>
<style scoped>
</style>
