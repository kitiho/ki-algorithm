<script setup lang="ts">
import type { LeetCodeQuestion } from '~/constants'
import { difficultyColor, leetCodeQuestions } from '~/constants'
function formatIndex(index: string) {
  if (parseInt(index) < 10)
    return `NO.00${index}`
  if (parseInt(index) < 100)
    return `NO.0${index}`
  return `NO.${index}`
}
useTitle('Ki-Algorithm')
const router = useRouter()
function pushTo(item: LeetCodeQuestion) {
  router.push({
    path: `/question/${item.index}`,
  })
  useTitle(`${item.index}.${item.englishName}`)
}
</script>

<template>
  <ul px-30px>
    <li
      v-for="(item) in leetCodeQuestions" :key="item.name" font-mono text-2xl py-2 cursor-pointer flex="~" max-h-12
      hover:max-h-200px transition-all overflow-hidden transition-duration-300 ease-in-out class="group"
      @click="pushTo(item)"
    >
      <span italic mr-4>{{ formatIndex(item.index) }}</span>
      <div flex="~" flex-col w="780px">
        <span text-left mb-1 flex="~" items-center><span truncate>{{ item.name }}</span> <span mx-2 p-1 text-xs text-left transition truncate>
          {{ item.englishName }}
        </span>  <span
          :style="`background-color:${difficultyColor[item.difficulty]}`" text-xs font-bold font-italic text-gray-800
          py-1 px-2 rounded relative bottom-2 text-light h="24px"
        >{{ item.difficulty }}</span></span>

        <div flex="~">
          <div v-for="feature in item.features" :key="feature" rounded p-1 text-xs transition>
            #{{ feature }}
          </div>
        </div>
        <span text-sm transition w-full text-left>
          {{ item.desc }}
        </span>
      </div>
    </li>
  </ul>
</template>
<style scoped>
</style>
