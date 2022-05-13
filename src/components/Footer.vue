<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
toggleDark(true)
const router = useRouter()
const backHome = () => {
  router.push('/')
}
</script>

<template>
  <nav text-xl mt-6 inline-flex gap-2 justify-center>
    <!-- <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button> -->
    <div class="icon-btn" i-carbon-airplay-filled mr-2 @click="backHome" />
    <a
      class="icon-btn" i-carbon-logo-github rel="noreferrer" href="https://github.com/kitiho/ki-algorithm"
      target="_blank" title="GitHub"
    />
  </nav>
</template>
