import type { ListingsResponse } from '~~/shared/types/api'
import type { RawListingsResponse } from '~~/shared/types/upstream'

import { transformListingsResponse } from '../utils/transformers'

export default defineEventHandler(async (event): Promise<ListingsResponse> => {
  const { baseURL, apiKey } = useRuntimeConfig(event)
  const query = getQuery(event)

  const url = new URL(`${baseURL}/${apiKey}/`)
  url.searchParams.set('type', 'koop')
  url.searchParams.set('page', String(query.page ?? '1'))

  const data = await $fetch<RawListingsResponse>(url.toString())

  return transformListingsResponse(data)
})
