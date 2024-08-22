import { $fetch } from 'ofetch'
import type { feedsInfo } from '~~/utils/api'
import { validFeeds } from '~~/utils/api'
import { BASE_URL } from '~~/server/utils/constants'

const feedUrls: Record<keyof typeof feedsInfo, string> = {
  // ask: 'askstories',
  // jobs: 'jobstories',
  // show: 'showstories',
  'mais-recente': 'newstories',
  noticias: 'topstories'
}

export default defineCachedEventHandler(async (event) => {
  const { page = '1', feed = 'noticias' } = getQuery(event) as { page: string; feed: keyof typeof feedsInfo }

  if (!validFeeds.includes(feed) || String(Number(page)) !== page) {
    throw createError({
      statusCode: 422,
      statusMessage: `Must provide one of ${validFeeds.join(', ')} and a valid page number.`
    })
  }

  const data = await $fetch(`${BASE_URL}/${feedUrls[feed]}.json`)
  // console.log('FETCHED', data)

  return data
})
