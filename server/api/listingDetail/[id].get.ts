import { transformDetailResponse } from '~~/server/utils/transformers'
import type { ListingDetailResponse } from '~~/shared/types/api'
import type { ListingDetail } from '~~/shared/types/funda-detail'

export default defineEventHandler(async (event): Promise<ListingDetailResponse> => {
  const id = getRouterParam(event, 'id')
  const { baseURL, apiKey } = useRuntimeConfig(event)

  const url = `${baseURL}/detail/${apiKey}/koop/${id}/`

  const detail = await $fetch<ListingDetail>(url)

  return transformDetailResponse(detail)
})
