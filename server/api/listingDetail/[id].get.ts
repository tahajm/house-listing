import { transformDetailResponse } from '~~/server/utils/transformers'
import type { ListingDetail } from '~~/shared/types/api'
import type { RawListingDetail } from '~~/shared/types/upstream'

export default defineEventHandler(async (event): Promise<ListingDetail> => {
  const id = getRouterParam(event, 'id')
  const { baseURL, apiKey } = useRuntimeConfig(event)

  const url = `${baseURL}/detail/${apiKey}/koop/${id}/`

  const detail = await $fetch<RawListingDetail>(url)

  return transformDetailResponse(detail)
})
