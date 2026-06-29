<script setup lang="ts">
import HouseOverview from '~/components/HouseOverview.vue'
import PriceTag from '~/components/PriceTag.vue'
import ThumbnailImage from '~/components/ThumbnailImage.vue'
import { secureImageUrl } from '~/utils/configs'
import type { ListingCard } from '~~/shared/types/api'

type Props = { house: ListingCard; eager?: boolean }

const props = withDefaults(defineProps<Props>(), {
  eager: false,
})

const promoImages = computed(() => getPromoImages(props.house.PromoLabel))
const hasPromotion = computed(() => promoImages.value.length > 0)

const heroImage = computed(() => ({
  large: secureImageUrl(props.house.FotoLarge),
  small: secureImageUrl(props.house.Foto),
  medium: secureImageUrl(props.house.FotoMedium),
  largest: secureImageUrl(props.house.FotoLargest),
}))
</script>

<template>
  <li
    class="flex flex-col border-b border-neutral-200 border rounded-md"
    :class="{ 'xs:flex-row': !hasPromotion }"
  >
    <div class="max-w-4xl w-full" :class="{ 'xs:w-58': !hasPromotion }">
      <ThumbnailImage
        :hero-image="heroImage"
        :images="promoImages"
        :address="house.Adres"
        :eager="eager"
      />
    </div>
    <div class="flex flex-col gap-2 p-4">
      <h2>
        <NuxtLink :href="`/detail/${house.Id}`" class="block">
          <div class="font-semibold truncate">{{ house.Adres }}</div>
          <div class="truncate text-gray-600">{{ house.Postcode }} {{ house.Woonplaats }}</div>
        </NuxtLink>
      </h2>
      <PriceTag :price="house.Koopprijs" />
      <HouseOverview
        :rooms="house.AantalKamers"
        :plot-area="house.Perceeloppervlakte"
        :living-area="house.Woonoppervlakte"
      />
      <p class="text-sm text-neutral-600 truncate">{{ house.MakelaarNaam }}</p>
    </div>
  </li>
</template>
