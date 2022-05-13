<script setup lang="ts">
import * as shiki from 'shiki'
import { leetCodeQuestions } from '~/constants/questions'
const container = $ref<HTMLElement | null>(null)
const route = useRoute()
const questionIndex = route.params.id
const question = leetCodeQuestions.find(item => item.index === questionIndex)
let code: any
let a = $ref('')
onMounted(async() => {
  code = import.meta.glob('../../constants/question-resolutions/*.ts', { as: 'raw' })
  a = code[`../../constants/question-resolutions/${questionIndex}.ts`]
  console.log(a)

  // shiki.setCDN('/shiki/')
  // const highlighter = await shiki.getHighlighter({
  //   theme: 'one-dark-pro',
  //   themes: ['one-dark-pro'],
  //   langs: ['javascript', 'typescript'],
  // })
  // const html = highlighter.codeToHtml(`${code}`, {
  //   lang: 'javascript',
  //   theme: 'one-dark-pro',
  // })
  // if (container)
  //   container.innerHTML = html
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
        {{ a }}
        <!-- <div id="code" ref="container" text-left /> -->
      </div>
    </div>
  </div>
</template>

<style>
#code .shiki {
  padding: 16px;
}
</style>
