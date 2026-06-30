import { FetchError } from 'ofetch';

export async function upstreamFetch<T>(url: string): Promise<T> {
  try {
    return (await $fetch(url)) as Promise<T>;
  } catch (err) {
    if (err instanceof FetchError && err.statusCode === 404) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Listing not found',
      });
    }
    throw createError({ statusCode: 502, statusMessage: 'Upstream API error' });
  }
}
