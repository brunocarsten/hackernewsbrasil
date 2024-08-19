<script setup lang="ts">
import {feedsInfo} from '~~/utils/api'

definePageMeta({
  middleware: 'feed'
})

const route = useRoute()
const feed = computed(() => route.params.feed as keyof typeof feedsInfo)


useHead({
  title: feedsInfo[feed.value]?.title,
})
</script>

<template>

</template>

