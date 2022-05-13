<script setup lang="ts">
import * as shiki from 'shiki'
import theme from 'shiki/themes/one-dark-pro.json'
import { leetCodeQuestions } from '~/constants/questions'
const container = $ref<HTMLElement | null>(null)
const route = useRoute()
const questionIndex = route.params.id
const question = leetCodeQuestions.find(item => item.index === questionIndex)
onMounted(async() => {
  const modules = import.meta.glob('../../constants/question-resolutions/*.ts', { as: 'raw' })
  if (import.meta.env.DEV)
    shiki.setCDN('../../../node_modules/shiki/')
  else
    shiki.setCDN('https://unpkg.com/shiki/')

  shiki
    .getHighlighter({
      theme: theme as any,
    })
    .then((highlighter) => {
      if (container)
        container.innerHTML = highlighter.codeToHtml(`${modules[`../../constants/question-resolutions/${questionIndex}.ts`]}`, 'typescript')
    })
    .catch(console.warn)
})
</script>
<template>
  <div>
    <div>
      <div text-2xl>
        {{ question?.index }}. {{ question?.name }} {{ question?.englishName }}
      </div>
      <div w-800px text-left bg="gray-500/60" rounded p2 leading-loose indent mt-6>
        <a
          :href="question?.link
          " target="_blank"
        >{{ question?.link }}</a>
      </div>
      <div w-800px text-left rounded mt-6>
        <div id="code" ref="container" text-left />
      </div>
    </div>
  </div>
</template>

<style>
#code .shiki {
  padding: 16px;
}
</style>
