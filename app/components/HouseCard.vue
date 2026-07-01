<script setup lang="ts">
import PhotoGrid from '~/components/common/PhotoGrid.vue';
import PriceTag from '~/components/common/PriceTag.vue';
import HouseOverview from '~/components/HouseOverview.vue';
import { secureImageUrl } from '~/utils/urls';
import type { ListingCard } from '~~/shared/types/api';

type Props = { house: ListingCard; eager?: boolean };

const props = withDefaults(defineProps<Props>(), {
  eager: false,
});

const promoImages = computed(() => getPromoImages(props.house.PromoLabel));
const hasPromotion = computed(() => promoImages.value.length > 0);

const heroImage = computed(() => ({
  large: secureImageUrl(props.house.FotoLarge),
  medium: secureImageUrl(props.house.FotoMedium),
}));
</script>

<template>
  <div
    class="flex flex-col border-neutral-200 border rounded-md"
    :class="{ 'xs:flex-row': !hasPromotion }"
  >
    <NuxtLink
      :href="`/detail/${house.Id}`"
      class="max-w-4xl w-full"
      :class="{ 'xs:w-58': !hasPromotion }"
    >
      <PhotoGrid
        :head-photo="heroImage"
        :extra-photos="promoImages"
        :address="house.Adres"
        :eager="eager"
      />
    </NuxtLink>
    <div class="flex flex-col gap-2 p-4">
      <h2>
        <NuxtLink :href="`/detail/${house.Id}`">
          <div class="font-semibold truncate">{{ house.Adres }}</div>
          <div class="truncate text-gray-600">
            {{ house.Postcode }} {{ house.Woonplaats }}
          </div>
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
  </div>
</template>
