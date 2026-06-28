<script setup lang="ts">
import HouseOverview from '~/components/HouseOverview.vue'
import PriceTag from '~/components/PriceTag.vue'
import ThumbnailImage from '~/components/ThumbnailImage.vue'
import type { ListingCard } from '~~/shared/types/api'

const props = defineProps<{ house: ListingCard }>()

const promoImages = computed(() => {
  if (!props.house.PromoLabel) return []

  const results = props.house.PromoLabel.PromotionPhotos.slice(0, 2).map((image) => ({
    small: image,
  }))

  return results
})
</script>

<template>
  <li
    class="flex gap-4 border-b pb-6 border-neutral-200"
    :class="promoImages.length ? 'flex-col' : 'flex-row'"
  >
    <div v-if="promoImages.length > 0" class="w-full max-w-4xl">
      <ThumbnailImage
        :hero-image="{
          large: house.FotoLarge,
          small: house.Foto,
          medium: house.FotoMedium,
          largest: house.FotoLargest,
        }"
        :images="promoImages"
        :address="house.Adres"
      />
    </div>
    <div v-else class="aspect-3/2 overflow-hidden rounded-md">
      <NuxtImg
        :src="house.FotoMedium"
        :alt="house.Adres"
        class="size-full object-cover"
        loading="lazy"
      />
    </div>
    <div class="flex flex-col gap-2">
      <h3>
        <NuxtLink :href="`/detail/${house.Id}`" class="block">
          <div class="font-semibold truncate">{{ house.Adres }}</div>
          <div class="truncate text-gray-600">{{ house.Postcode }} {{ house.Woonplaats }}</div>
        </NuxtLink>
      </h3>
      <PriceTag :price="house.Koopprijs" />
      <HouseOverview
        :aantalkamers="house.AantalKamers"
        :perceeloppervlakte="house.Perceeloppervlakte"
        :woonoppervlakte="house.Woonoppervlakte"
      />
    </div>
  </li>
</template>
