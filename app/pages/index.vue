<script setup lang="ts">
import AppLoading from '~/components/common/AppLoading.vue'
import HouseCard from '~/components/HouseCard.vue'

const { data, pending, error } = await useFetch('/api/listings')

const listingCount = computed(() => {
  if (data.value?.total) {
    return data.value.total.toLocaleString('en-US')
  }
  return ''
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-lg font-medium text-neutral-900 my-4" aria-live="polite" aria-atomic="true">
      {{ listingCount }} Homes for sale
    </h1>
    <AppLoading v-if="pending" />
    <AppErrorMessage v-else-if="error" />
    <p v-else-if="!data?.listings.length">Nothing to show</p>
    <ol v-else class="flex flex-col gap-6">
      <HouseCard
        v-for="(house, i) in data.listings"
        :key="house.Id"
        :house="house"
        :eager="i < 3"
      />
    </ol>
  </div>
</template>
