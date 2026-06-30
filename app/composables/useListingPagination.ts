export function useListingPagination() {
  const route = useRoute();

  const currentPage = computed(() => {
    let page = route.query.page;

    if (Array.isArray(page)) page = page[0];
    if (!page || isNaN(Number(page))) page = '1';

    return Math.max(1, Number(page));
  });

  const navigateToNewPage = (pageNum: number) => {
    navigateTo({ query: { ...route.query, page: pageNum } });
  };

  const goNext = () => {
    navigateToNewPage(currentPage.value + 1);
  };

  const goPrev = () => {
    if (currentPage.value === 1) return;
    navigateToNewPage(currentPage.value - 1);
  };

  return { currentPage, goNext, goPrev };
}
