<script setup lang="ts">
import * as shiki from 'shiki'
import theme from 'shiki/themes/one-dark-pro.json'
import { leetCodeQuestions } from '~/constants'
const container = $ref<HTMLElement | null>(null)
const route = useRoute()
const questionIndex = route.params.id
const question = leetCodeQuestions.find(item => item.index === questionIndex)
let resolutionLines = $ref<Array<string>>([])
onMounted(async() => {
  const modules = import.meta.glob('../../constants/question-resolutions/*/**.*', { as: 'raw' })
  const code = modules[`../../constants/question-resolutions/${questionIndex}/code.ts`]
  const resolution = modules[`../../constants/question-resolutions/${questionIndex}/resolve.txt`] as any as string
  const totalLines = resolution.split('\n')
  resolutionLines = totalLines.filter((_, i) => i !== totalLines.length - 1)
  if (import.meta.env.DEV)
    shiki.setCDN('../../../node_modules/shiki/')
  else
    shiki.setCDN('https://unpkg.com/shiki/')

  shiki
    .getHighlighter({
      theme: theme as any,
      langs: ['typescript'],
    })
    .then((highlighter) => {
      if (container)
        container.innerHTML = highlighter.codeToHtml(code as any as string, 'typescript')
    })
    .catch(console.warn)
})
</script>
<template>
  <div>
    <div>
      <div text-4xl>
        NO.{{ question?.index }} {{ question?.name }} {{ question?.englishName }}
      </div>
      <div my-6 text-xl text-left flex="~" items-center>
        <div i-carbon-link mr-2 /> LeetCode链接
      </div>
      <div w-800px text-left leading-loose bg="#282c34" rounded p4>
        <a
          text-white :href="question?.link
          " target="_blank"
        >{{ question?.link }}</a>
      </div>
      <div my-6 text-xl text-left flex="~" items-center>
        <div i-carbon-hurricane mr-2 /> 题解
      </div>
      <div w-800px text-left rounded overflow-hidden bg="#282c34" p4 tracking-wide>
        <pre v-for="line in resolutionLines" :key="line" whitespace-pre-line py-2>{{ line }}</pre>
      </div>
      <div my-6 text-xl text-left flex="~" items-center>
        <div i-carbon-code mr-2 /> 代码
      </div>
      <div w-800px text-left rounded overflow-hidden>
        <div id="code" ref="container" text-left />
      </div>
    </div>
  </div>
</template>

<style>
#code .shiki {
  padding: 1rem;
  overflow-x: auto;
}

#code .shiki .line {
  margin: 4px 0;
  display: inline-block;
}
</style>
