import type { WritableComputedOptions } from '@vue/reactivity'
import { validFeeds } from '~~/utils/api'
import type { Item, User, StoreState, FeedQuery } from '~~/types'

export default function useStore() {
  const initialState = () =>
    useState<StoreState>('store', () => ({
      items: {},
      users: {},
      comments: {},
      feeds: Object.fromEntries(validFeeds.map(i => [i, {}])),
    }))

  function getFeed(state: StoreState, { feed, page }: FeedQuery) {
    const ids = state.feeds?.[feed]?.[page]
    if (ids?.length) {
      return ids.map(i => state.items[i])
    }
    return undefined
  }

  const payload = async (query: FeedQuery) => {
    const state = initialState()

    const { feed, page } = query

    return reactiveLoad<Item[]>(
      () => getFeed(state.value, query),
      items => {
        const ids = items.map(item => item.id)
        state.value.feeds[feed][page] = ids
        items.filter(Boolean).forEach(item => {
          if (state.value.items[item.id]) {
            Object.assign(state.value.items[item.id], item)
          } else {
            state.value.items[item.id] = item
          }
        })
      },
      () => $fetch('/api/feeds', { params: { feed, page } }),
      (state.value.feeds[feed][page] || []).map(id => state.value.items[id])
    )
  }

  async function reactiveLoad<T>(get: () => T | undefined, set: (data: T) => void, fetch: () => Promise<T>, init?: T) {
    const data = computed({
      get,
      set,
    } as WritableComputedOptions<T | undefined>)
    const loading = ref<boolean>(false)

    if (data.value == null) {
      if (init != null) {
        data.value = init
      }
    }

    const task = async () => {
      try {
        loading.value = true
        const fetched = await fetch()
        if (data.value != null) {
          data.value = Object.assign(data.value, fetched)
        } else {
          data.value = fetched
        }
      } catch (e) {
        console.error(e)
        data.value = undefined
      } finally {
        loading.value = false
      }
    }

    if (import.meta.client) {
      task()
    } else {
      await task()
    }

    return reactive({
      loading,
      data,
    })
  }

  return {
    payload,
    initialState,
  }
}
