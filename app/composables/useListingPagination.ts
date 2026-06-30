export function useListingPagination() {
  const route = useRoute();

  const currentPage = computed(() => {
    const raw = Array.isArray(route.query.page)
      ? route.query.page[0]
      : route.query.page;

    if (!raw || isNaN(Number(raw))) return 1;

    return Math.max(1, Number(raw));
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
