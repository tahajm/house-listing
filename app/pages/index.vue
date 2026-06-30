<script setup lang="ts">
import AppLoading from '~/components/common/AppLoading.vue';
import HouseCard from '~/components/HouseCard.vue';
import ListingPagination from '~/components/ListingPagination.vue';
import { useListingPagination } from '~/composables/useListingPagination';

const { currentPage, goNext, goPrev } = useListingPagination();

const { data, pending, error } = await useFetch(() => '/api/listings', {
  query: { page: currentPage },
});

const listingCount = computed(() => {
  if (data.value?.total) {
    return data.value.total.toLocaleString('en-US');
  }
  return '';
});
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-lg font-medium text-neutral-900 my-4">
      {{ listingCount }} Homes for sale
    </h1>
    <AppLoading v-if="pending" />
    <AppErrorMessage v-else-if="error" />
    <p v-else-if="!data?.listings.length" role="status">Nothing to show</p>
    <div v-else>
      <ol class="flex flex-col gap-6">
        <HouseCard
          v-for="(house, i) in data.listings"
          :key="house.Id"
          :house="house"
          :eager="i < 3"
        />
      </ol>
      <ListingPagination
        :current-page="currentPage"
        :total-pages="data.paging.AantalPaginas"
        @next="goNext"
        @prev="goPrev"
      />
    </div>
  </div>
</template>
