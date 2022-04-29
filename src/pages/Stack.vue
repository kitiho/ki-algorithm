<script setup lang="ts">
import * as shiki from 'shiki'
import Layout from '~/layout/layout.vue'
import catalogueText from '~/constants/catalogue?raw'

const container = $ref<HTMLElement | null>(null)
onMounted(async() => {
  shiki.setCDN('/shiki/')
  const highlighter = await shiki.getHighlighter({
    theme: 'one-dark-pro',
    themes: ['one-dark-pro'],
    langs: ['javascript', 'typescript'],
  })
  const html = highlighter.codeToHtml(`${catalogueText}`, {
    lang: 'javascript',
    theme: 'one-dark-pro',
  })
  if (container)
    container.innerHTML = html
})
</script>
<template>
  <Layout>
    <div id="code" ref="container" w="80%" text-left />
  </Layout>
</template>

<style scoped>
</style>
