<script setup lang="ts">
import {feedsInfo} from '~~/utils/api'

definePageMeta({
  middleware: 'feed'
})

const route = useRoute()
const router = useRouter()
const page = computed(() => +route.params.page || 1)
const feed = computed(() => route.params.feed as keyof typeof feedsInfo)
const isValidFeed = computed(() => !!feedsInfo[feed.value])
const {payload, initialState} = useStore()

useHead({
  title: feedsInfo[feed.value]?.label,
})

const handlePage = async (to: number) => {
  if (!isValidFeed.value) {
    return
  }

  if (to <= 0) {
    await router.replace(`/${feed.value}/1`)
    return
  }

  //prefetch page payload
  payload({
    feed: feed.value,
    page: page.value + 1,
  })
}

onMounted(() => handlePage(page.value))
watch(page, to => handlePage(to))
</script>

<template>

</template>

