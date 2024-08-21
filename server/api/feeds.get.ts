import {$fetch} from "ofetch";
import type {feedsInfo} from "~~/utils/api";
import {validFeeds} from "~~/utils/api";
import {BASE_URL} from "~~/server/utils/constants";

const feedUrls: Record<keyof typeof feedsInfo> = {
    // ask: 'askstories',
    // jobs: 'jobstories',
    // show: 'showstories',
    'mais-recente': 'newstories',
    noticias: 'topstories',
}

export default defineCachedEventHandler(async event => {
    const {page = '1', feed = 'noticias'} = getQuery(event)

    const data = await $fetch(`${BASE_URL}/${feedUrls[feed]}.json`)
    // console.log('FETCHED', data)

    return data
})