import { mockNuxtImport } from '@nuxt/test-utils/runtime';
import { describe, expect, it, vi } from 'vitest';

import { useListingPagination } from '../../app/composables/useListingPagination.ts';

const { query, navigateToMock } = vi.hoisted(() => ({
  query: {} as Record<string, string | string[] | undefined>,
  navigateToMock: vi.fn(),
}));

mockNuxtImport('useRoute', () => () => ({ query }));
mockNuxtImport('navigateTo', () => navigateToMock);

describe('useListingPagination', () => {
  it('defaults to page 1 when query is missing', () => {
    const { currentPage } = useListingPagination();
    expect(currentPage.value).toBe(1);
  });

  it('defaults to page 1 when query is non-numeric', () => {
    query.page = 'abc';
    const { currentPage } = useListingPagination();
    expect(currentPage.value).toBe(1);
  });

  it('parses a numeric string query into a number', () => {
    query.page = '5';
    const { currentPage } = useListingPagination();
    expect(currentPage.value).toBe(5);
  });

  it('takes the first value when query is an array', () => {
    query.page = ['3', '7'];
    const { currentPage } = useListingPagination();
    expect(currentPage.value).toBe(3);
  });

  it('goNext navigates to the next page', () => {
    query.page = '3';
    const { goNext } = useListingPagination();

    goNext();

    expect(navigateToMock).toHaveBeenCalledWith({ query: { page: 4 } });
  });

  it('goPrev navigates to the previous page', () => {
    query.page = '3';
    const { goPrev } = useListingPagination();

    goPrev();

    expect(navigateToMock).toHaveBeenCalledWith({ query: { page: 2 } });
  });
});
