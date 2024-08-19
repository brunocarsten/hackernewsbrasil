<script setup lang="ts">
import { feedsInfo } from '~~/utils/api'

definePageMeta({
  middleware: 'feed'
})
</script>

<template>
  <!--  <UCard>-->
  <!--    <template #header>-->
  <!--      <div class="flex justify-between">-->
  <!--        <h1>Welcome to Nuxt UI Starter</h1>-->
  <!--        &lt;!&ndash;        <ColorScheme>&ndash;&gt;-->
  <!--        &lt;!&ndash;          <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']"/>&ndash;&gt;-->
  <!--        &lt;!&ndash;        </ColorScheme>&ndash;&gt;-->
  <!--      </div>-->
  <!--    </template>-->
  <!--    <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>-->
  <!--  </UCard>-->

  <ClientOnly>
    <p>feed</p>
  </ClientOnly>
</template>

