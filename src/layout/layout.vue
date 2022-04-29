<script setup lang="ts">
import { catalogue } from '~/constants'

const route = useRoute()
const title = route.fullPath.split('/')[1]
const currentCatalogue = $computed(() => catalogue.find(item => item.englishName === title),
)
const { name, englishName, desc } = currentCatalogue!

</script>
<template>
  <div>
    <div mb-4>
      <span text-4xl>{{ name }}</span> &nbsp; <span text-3xl font-mono> {{ englishName }}</span>
      <div mt-4 bg="gray-600/50" p-2 italic>
        {{ desc }}
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
</style>
