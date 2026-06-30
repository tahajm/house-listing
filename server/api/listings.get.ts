import type { ListingsResponse } from '~~/shared/types/api';
import type { RawListingsResponse } from '~~/shared/types/upstream';

import { transformListingsResponse } from '../utils/transformers';

export default defineCachedEventHandler(
  async (event): Promise<ListingsResponse> => {
    const { baseURL, apiKey } = useRuntimeConfig(event);
    const query = getQuery(event);

    const url = new URL(`${baseURL}/${apiKey}/`);
    url.searchParams.set('type', 'koop');
    url.searchParams.set('page', String(query.page ?? '1'));

    const data = await upstreamFetch<RawListingsResponse>(url.toString());

    return transformListingsResponse(data);
  },
  {
    name: 'listings',
    maxAge: 60,
    swr: true,
  },
);
