<script setup lang="ts">
import HouseDescription from '~/components/HouseDescription.vue'
import HouseOverview from '~/components/HouseOverview.vue'
import LocationMap from '~/components/LocationMap.vue'
import PriceTag from '~/components/PriceTag.vue'
import ThumbnailImage from '~/components/ThumbnailImage.vue'
import { extractPhotos } from '~/utils/photos'

const route = useRoute()
const id = route.params.id

const { data, pending, error } = await useFetch(`/api/listingDetail/${id}`)

const photos = computed(() => extractPhotos(data.value?.Media))
</script>
<template>
  <AppLoading v-if="pending" />
  <AppErrorMessage v-if="error" />
  <p v-else-if="!data">No data to show</p>
  <div v-else>
    <ThumbnailImage
      v-if="photos.heroImage"
      :hero-image="photos.heroImage"
      :images="photos.thumbnailImages"
      :address="data.Adres"
    />

    <section class="flex flex-col gap-2 border-t mt-4 border-neutral-200 py-6">
      <h1 class="text-2xl font-medium">{{ data.Adres }}</h1>
      <p class="text-neutral-600">{{ data.Postcode }} {{ data.Plaats }}</p>
      <PriceTag :price="data.Koopprijs" class="text-lg" />
      <HouseOverview
        variant="extended"
        :living-area="data.WoonOppervlakte"
        :rooms="data.AantalKamers"
        :plot-area="data.PerceelOppervlakte"
        :energy-label="data.Energielabel.Label"
      />
    </section>

    <HouseDescription v-if="data.VolledigeOmschrijving" :text="data.VolledigeOmschrijving" />

    <LocationMap
      v-if="data.WGS84_Y && data.WGS84_X"
      :lat="data.WGS84_Y"
      :lng="data.WGS84_X"
      :address="data.Adres"
    />
  </div>
</template>
