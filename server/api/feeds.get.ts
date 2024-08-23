import { $fetch } from 'ofetch'
import type { feedsInfo } from '~~/utils/api'
import { validFeeds } from '~~/utils/api'
import { BASE_URL } from '~~/server/utils/constants'

const feedUrls: Record<keyof typeof feedsInfo, string> = {
  // ask: 'askstories',
  // jobs: 'jobstories',
  // show: 'showstories',
  'mais-recente': 'newstories',
  noticias: 'topstories',
}

async function fetchFeed(feed: keyof typeof feedsInfo, page = '1') {
  const { fetchItem } = await import('./item.get')
  const entries = Object.values(await $fetch(`${BASE_URL}/${feedUrls[feed]}.json`)).slice(
    (Number(page) - 1) * 10,
    Number(page) * 10
  ) as string[]
  return Promise.all(entries.map(id => fetchItem(id)))
}

export default defineCachedEventHandler(
  async event => {
    const { page = '1', feed = 'noticias' } = getQuery(event) as { page: string; feed: keyof typeof feedsInfo }

    if (!validFeeds.includes(feed) || String(Number(page)) !== page) {
      throw createError({
        statusCode: 422,
        statusMessage: `Must provide one of ${validFeeds.join(', ')} and a valid page number.`,
      })
    }

    return fetchFeed(feed, page)
  },
  {
    name: 'api/feed',
    getKey(event) {
      const { page = '1', feed = 'news' } = getQuery(event)
      return ['feeds', feed, page].join('/')
    },
    swr: true,
    maxAge: 10,
  }
)
