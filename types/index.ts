export interface Item {
    id: number
    url?: string
    title?: string
    type: 'job' | 'story' | 'comment' | 'poll'
    points: number
    user: string
    content?: string
    time: string
    comments_count?: number
    comments?: Item[]
    loading?: boolean
}

export interface User {
    id: string
    created_time: string
    karma: number
    about: string
    loading?: boolean
}

export interface StoreState {
    items: Record<number, Item>
    comments: Record<number, Item[]>
    users: Record<string, User>
    feeds: Record<string, Record<number, number[]>>
}

export interface FeedQuery {
    feed: string
    page: number
}

export interface NavItems {

}