import { IndustryItemType } from './form'

export interface EventsProps {
  date?: string
  date_after?: string
  date_before?: string
  industry?: string[]
  limit?: string | number
  offset?: string | number
  program?: boolean
  q?: string
  location?: string
  region?: string
  stage?: string[]
  type?: string
  month?: string
  page?: string | number
}

export interface ITagsItem {
  name: string
  key: string
}

export interface IEvent {
  status?: string
  title?: string
  slug?: string
  image?: string
  date?: string
  date_end?: string | null
  industries?: IndustryItemType[]
  stages?: string[]
  is_program?: boolean
  is_online?: boolean
  ended?: boolean
  register_link?: string
  content?: string
  short_description?: string
  location?: string
  tags?: ITagsItem[]
  is_participating?: boolean
  link?: string
}
